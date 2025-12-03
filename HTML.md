# HTML Component Development Guide

> **Last Updated**: December 2, 2024  
> **Purpose**: Guidelines for creating HTML topic components in CODER POD

---

## File Naming Convention

### Topic Component Files

All HTML topic component files **MUST** be created in:
```
/src/components/languages/html/topics/
```

### Naming Rules

1. **Modern HTML5 Features**: Files covering HTML5-specific features **MUST** start with `html5-`
   ```
   ✅ html5-semantic-elements.tsx
   ✅ html5-apis.tsx
   ✅ html5-latest-features.tsx
   ✅ html5-forms.tsx
   ✅ html5-media.tsx
   ```

2. **General HTML Topics**: Files covering general HTML concepts start with `html-`
   ```
   ✅ html-what-is-html.tsx
   ✅ html-attributes.tsx
   ✅ html-forms.tsx
   ✅ html-tables.tsx
   ✅ html-elements-and-tags.tsx
   ```

3. **Descriptive Names**: Use kebab-case with descriptive, clear names
   ```
   ✅ html-document-structure.tsx
   ✅ html-semantic-elements.tsx
   ✅ html-web-components-introduction.tsx
   ❌ html-stuff.tsx (too vague)
   ❌ HTMLComponent.tsx (wrong case)
   ❌ forms.tsx (missing prefix)
   ```

---

## Component Structure

### Required Imports

```typescript
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  CodeSnippetWithOutput, 
  InteractivePlayground, 
  FrontendCodePreview 
} from '@/components/shared';
import {
  // Import relevant Lucide icons
} from 'lucide-react';
```

### Component Props Interface

```typescript
interface ComponentNameProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}
```

### Component Export

```typescript
export default function ComponentName({ onOpenWebPlayground }: ComponentNameProps) {
  // Component implementation
  return (
    <div className="space-y-8 pb-12">
      {/* Content sections */}
    </div>
  );
}
```

---

## Design Principles

### 1. **Interactive First**
- Every section should have hover effects, animations, or clickable elements
- Use `useState` for interactive state management
- Include visual feedback for user interactions

### 2. **Visual Learning**
- Side-by-side code/result comparisons
- Diagrams and flowcharts using cards and borders
- Color-coded elements for different concepts

### 3. **Progressive Disclosure**
- Information revealed through interactions
- Tabbed interfaces for complex topics
- Collapsible sections for advanced details

### 4. **Consistent Theming**
- Use blue color scheme (CODER POD brand)
- Dark mode support with `dark:` variants
- Responsive design (mobile-first)

### 5. **Code Snippet Theming**
```typescript
// Light mode: Light background with dark text
// Dark mode: Dark background with light text
className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
```

### 6. **Animations**
- Pulse effects for active states
- Fade-ins for content reveals
- Scale transforms on hover
- Color transitions for interactions

---

## Content Structure

### Sections to Include

1. **Introduction Card**
   - Brief overview
   - Key concepts
   - Why it matters

2. **Visual Examples**
   - Code snippets with syntax highlighting
   - Live previews
   - Before/after comparisons

3. **Interactive Demos**
   - Clickable examples
   - Tag explorers
   - DOM visualizers

4. **Best Practices**
   - Do's and Don'ts
   - Common pitfalls
   - Pro tips

5. **Interactive Playground**
   - Full HTML/CSS/JS editor
   - Multiple demo variations
   - Feature highlights

---

## Playground Implementation

### Playground Data Structure

```typescript
const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Playground</title>
  <style>
    /* Styles here */
  </style>
</head>
<body>
  <!-- Content here -->
</body>
</html>`;

const playgroundJs = `
// JavaScript code here
`;
```

### Playground Component Usage

```typescript
{onOpenWebPlayground && (
  <InteractivePlayground
    title="Interactive Playground Title"
    description="Clear description of what users can do"
    features={[
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4'
    ]}
    buttonText="Launch Playground"
    onLaunchPlayground={onOpenWebPlayground}
    playgroundData={{
      html: playgroundHtml,
      css: '',
      js: playgroundJs
    }}
    colorTheme="blue"
  />
)}
```

---

## Common Components to Use

### 1. **Card Layouts**
```typescript
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Icon className="w-5 h-5" />
      Title
    </CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### 2. **Alert Boxes**
```typescript
<Alert>
  <Icon className="h-4 w-4" />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>
    Description text
  </AlertDescription>
</Alert>
```

### 3. **Badge Components**
```typescript
<Badge variant="default" className="bg-blue-500">
  Badge Text
</Badge>
```

### 4. **Code Snippets**
```typescript
<CodeSnippetWithOutput
  code={`<h1>Hello World</h1>`}
  language="html"
  title="Example Title"
/>
```

### 5. **Interactive Buttons**
```typescript
<Button
  onClick={handleClick}
  className="gap-2"
  variant="outline"
>
  <Icon className="w-4 h-4" />
  Button Text
</Button>
```

---

## Styling Guidelines

### Color Schemes by Category

1. **Fundamentals**: Blue (`bg-blue-500`, `text-blue-600`)
2. **Structure**: Emerald (`bg-emerald-500`, `text-emerald-600`)
3. **Media**: Amber (`bg-amber-500`, `text-amber-600`)
4. **Forms**: Purple (`bg-purple-500`, `text-purple-600`)
5. **Advanced**: Rose (`bg-rose-500`, `text-rose-600`)

### Responsive Classes

```typescript
// Mobile-first approach
className="
  grid grid-cols-1           // Mobile
  md:grid-cols-2             // Tablet
  lg:grid-cols-3             // Desktop
  gap-4                      // Spacing
"
```

### Dark Mode Support

```typescript
// Always include dark mode variants
className="
  bg-white dark:bg-slate-900
  text-gray-900 dark:text-gray-100
  border-gray-200 dark:border-slate-700
"
```

---

## Registration in html-content-display.tsx

### 1. Add Lazy Import

```typescript
const ComponentName = lazy(() => 
  import('@/components/languages/html/topics/html5-topic-name')
);
```

### 2. Add to topicComponentMap

```typescript
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  // ... existing mappings
  'topic-slug': ComponentName,
};
```

### 3. Update html.ts Data File

```typescript
// In /src/data/languages/html.ts
topics: [
  { 
    slug: 'topic-slug', 
    title: 'Topic Title', 
    explanation: 'Brief explanation', 
    category: 'Category Name' 
  },
]
```

---

## Testing Checklist

Before committing a new HTML topic component:

- [ ] File named correctly (starts with `html-` or `html5-`)
- [ ] Component has proper TypeScript interface
- [ ] Default export is present
- [ ] Lazy import added to `html-content-display.tsx`
- [ ] Topic mapped in `topicComponentMap`
- [ ] Topic added to `html.ts` data file
- [ ] Dark mode tested and working
- [ ] Responsive on mobile, tablet, desktop
- [ ] Interactive elements functional
- [ ] Playground (if included) loads correctly
- [ ] No console errors or warnings
- [ ] Accessible (keyboard navigation, ARIA labels)

---

## Examples of Well-Structured Components

### Good Examples
- `html-what-is-html.tsx` - Clear structure, interactive elements
- `html-semantic-elements.tsx` - Visual diagrams, code examples
- `html5-apis.tsx` - Modern features, practical demos

### Components to Reference
- Check `COMP_HTML_STRUC.md` for detailed structure
- Review existing topic files in `/topics/` directory
- Follow patterns from JavaScript components

---

## Common Pitfalls to Avoid

1. ❌ **Missing dark mode** - Always include `dark:` variants
2. ❌ **Non-responsive** - Test on all screen sizes
3. ❌ **No interactivity** - Static content is boring
4. ❌ **Poor code examples** - Always use realistic, practical code
5. ❌ **Inconsistent naming** - Follow the `html-` or `html5-` prefix
6. ❌ **Missing TypeScript types** - Define proper interfaces
7. ❌ **Hardcoded colors** - Use Tailwind classes
8. ❌ **No accessibility** - Include ARIA labels and semantic HTML

---

## Getting Help

- Review `COMP_HTML_STRUC.md` for component structure
- Check existing components for patterns
- Test in dev mode: `npm run dev`
- Validate TypeScript: `npm run type-check`
- Build test: `npm run build`

---

## Version History

- **v1.0** (Dec 2, 2024) - Initial HTML component guidelines
- Naming convention: `html5-*` for HTML5 features, `html-*` for general topics
- Component structure standardized
- Playground implementation documented

---

**Remember**: Every HTML topic should be engaging, interactive, and educational. We're not just teaching HTML—we're creating an experience! 🚀
