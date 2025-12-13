# CSS Learning Layout System

## Overview
A fresh, user-friendly layout system for CSS learning content with full dark mode support and consistent design patterns.

## Design Principles

### 1. **Progressive Learning**
- Start with "What is it?" introduction
- Visual examples before theory
- Build from simple to complex
- Clear hierarchy and flow

### 2. **Visual First**
- Interactive examples with live previews
- Color-coded sections
- Icons for quick recognition
- Dark mode support throughout

### 3. **Consistent Structure**
Every CSS topic follows this flow:
1. Header with category and description
2. "What is it?" introduction card
3. Visual example section
4. Core concepts explained
5. Syntax and properties
6. Advanced examples
7. Use cases
8. Best practices

## Components

### CssTopicLayout
Main wrapper component that provides consistent structure.

```tsx
<CssTopicLayout
  icon={Film}
  title="CSS Animations"
  description="Create complex multi-step animations"
  category="Animations & Effects"
  whatIsIt={{
    title: "What are CSS Animations?",
    description: "Multi-step keyframe animations",
    keyPoints: [
      "Define animation sequences with @keyframes",
      "Control timing, duration, and iteration",
      // ... more points
    ]
  }}
>
  {/* Your content here */}
</CssTopicLayout>
```

### SectionCard
Organized content sections with variants.

```tsx
<SectionCard
  title="Basic Syntax"
  description="How to write animations"
  icon={Film}
  variant="primary" // default | primary | success | warning
>
  {/* Section content */}
</SectionCard>
```

**Variants:**
- `default` - Gray theme
- `primary` - Indigo/purple (main CSS theme)
- `success` - Green theme (best practices)
- `warning` - Amber theme (cautions)

### SyntaxBlock
Code snippets with copy functionality.

```tsx
<SyntaxBlock
  title="Define Keyframes"
  language="css"
  code={`@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}`}
/>
```

Features:
- Dark background for code
- Syntax highlighting friendly
- Copy button on hover
- Language badge

### ConceptGrid
Display key concepts in a grid layout.

```tsx
<ConceptGrid
  concepts={[
    {
      title: "Concept Name",
      description: "What it does",
      example: "code-example"
    }
  ]}
/>
```

### InfoAlert
Informational alerts with different types.

```tsx
<InfoAlert type="tip" title="Pro Tip">
  Your tip content here
</InfoAlert>
```

**Types:**
- `info` - Blue (general information)
- `tip` - Purple (helpful tips)
- `warning` - Amber (cautions)
- `success` - Green (good practices)

### PropertyTable
Display CSS properties and values.

```tsx
<PropertyTable
  properties={[
    {
      property: 'animation-duration',
      values: 'time (2s, 500ms)',
      description: 'How long the animation takes'
    }
  ]}
/>
```

Features:
- Gradient header
- Zebra striping
- Dark mode support
- Monospace fonts for code

### UseCaseCard
Showcase practical use cases.

```tsx
<UseCaseCard
  title="Loading Spinners"
  description="Infinite rotating animations"
  icon={Repeat}
  gradient="from-blue-500 to-cyan-600"
/>
```

## Color Theme

### Light Mode
- **Background**: White, Gray-50
- **Borders**: Gray-200, Indigo-200
- **Text**: Gray-700, Gray-900
- **Code**: Gray-900 background

### Dark Mode
- **Background**: Gray-800, Gray-900
- **Borders**: Gray-700, Indigo-800
- **Text**: Gray-100, Gray-300
- **Code**: Gray-950 background

### Accent Colors (Indigo/Purple)
- Primary: Indigo-500 to Purple-600
- Borders: Indigo-200/800
- Backgrounds: Indigo-50/950

## Interactive Examples

Use `FrontendCodePreview` component for live examples:

```tsx
<FrontendCodePreview
  title="Example Name"
  html={`<div class="box"></div>`}
  css={`.box { /* styles */ }`}
  colorTheme="indigo"
/>
```

Features:
- Automatic dark mode support
- Live preview
- Code tabs (HTML, CSS, JS)
- Responsive iframe

## Best Practices

### Do's ✅
- Use consistent icons for similar concepts
- Provide visual examples early
- Include both simple and advanced examples
- Add tips and warnings where relevant
- Support dark mode in all examples
- Use semantic HTML in examples

### Don'ts ❌
- Don't use inline styles in examples
- Don't skip the "What is it?" section
- Don't use overly complex first examples
- Don't forget copy functionality
- Don't ignore accessibility
- Don't use outdated CSS techniques

## Example Structure

```tsx
export default function CssTopic({ onOpenWebPlayground }) {
  return (
    <CssTopicLayout
      icon={Icon}
      title="Topic Name"
      description="Brief description"
      category="Category Name"
      whatIsIt={{
        title: "What is it?",
        description: "Overview",
        keyPoints: ["Point 1", "Point 2"]
      }}
    >
      {/* Info Alert - Context */}
      <InfoAlert type="info" title="Important">
        Context or comparison
      </InfoAlert>

      {/* Visual Example */}
      <SectionCard title="See It In Action" icon={Play} variant="primary">
        <FrontendCodePreview ... />
      </SectionCard>

      {/* Core Concepts */}
      <SectionCard title="How It Works" icon={Layers} variant="success">
        <ConceptGrid concepts={[...]} />
      </SectionCard>

      {/* Syntax */}
      <SectionCard title="Syntax" icon={Code}>
        <SyntaxBlock ... />
      </SectionCard>

      {/* Properties */}
      <SectionCard title="Properties" icon={Settings}>
        <PropertyTable properties={[...]} />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard title="Use Cases" icon={Target}>
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard ... />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <SectionCard title="Best Practices" variant="success">
        <InfoAlert type="success" title="Do's">...</InfoAlert>
        <InfoAlert type="warning" title="Don'ts">...</InfoAlert>
      </SectionCard>
    </CssTopicLayout>
  );
}
```

## Migration Guide

To convert existing CSS topics to the new layout:

1. **Import the layout components:**
   ```tsx
   import {
     CssTopicLayout,
     SectionCard,
     SyntaxBlock,
     // ... other components
   } from '../shared/css-topic-layout';
   ```

2. **Replace PageHeader with CssTopicLayout**
3. **Wrap content sections in SectionCard**
4. **Convert code blocks to SyntaxBlock**
5. **Use InfoAlert for tips/warnings**
6. **Add PropertyTable for CSS properties**
7. **Test dark mode thoroughly**

## Dark Mode Testing

Ensure all examples work in dark mode:
- Code blocks have dark backgrounds
- Examples have proper contrast
- Borders are visible
- Text is readable
- Interactive elements are clear

## Accessibility

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Maintain color contrast ratios
- Support reduced motion preferences
