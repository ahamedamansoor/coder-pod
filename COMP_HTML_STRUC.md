# HTML Component Structure Guide

## 🎨 Theme & Styling Guidelines

### Primary Theme Color
**Coder POD Blue: `#5B7FFF`**

Use blue strategically for key elements only:

```tsx
// BLUE - Use for these elements only:
text-blue-600 dark:text-blue-400    // Main page titles, section titles
bg-blue-500                          // Important badges
colorTheme="blue"                    // PageHeader, FrontendCodePreview, InteractivePlayground
```

### Multi-Color Usage (ENCOURAGED)
Use light-toned pastel colors for visual variety and better learning experience:
- **Info cards:** Orange, emerald, purple, amber
- **Example cards:** Different colors for different concepts
- **Feature cards:** Varied colors to distinguish features
- **Diagrams:** Multi-color for better comprehension
- **Interactive elements:** Distinct colors for clarity

**Guidelines:**
- Use light tones (50/100 shades, not 500/600)
- Keep borders matching the card color
- Icons can match card color for consistency
- Card headings can be neutral or match card color

---

## 📋 Component Structure

### 1. Page Header (Required)
Every HTML topic component starts with a `PageHeader`:

```tsx
<PageHeader
  icon={Globe}                    // Relevant icon
  category="HTML · Category"      // e.g., "HTML · Fundamentals"
  title="Topic Title"
  description="Brief, engaging description for beginners"
  colorTheme="blue"              // Always blue for HTML
/>
```

---

## 🎯 Content Sections

### Section 1: Introduction / Definition
**Purpose:** Explain what the topic is in simple terms

```tsx
<Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
  <CardHeader>
    <div className="flex items-center gap-3 mb-2">
      <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
          Section Title
        </CardTitle>
        <CardDescription className="text-base mt-1">
          Brief description
        </CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    {/* Content here */}
  </CardContent>
</Card>
```

**Key Elements:**
- Main concept explanation
- Key terms with definitions
- Why it matters
- Real-world analogies

---

### Section 2: How It Works
**Purpose:** Visual explanation of the concept

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Icon className="w-7 h-7" />
      How It Works
    </CardTitle>
    <CardDescription className="text-base">
      Step-by-step explanation
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Flow diagram or step-by-step cards */}
  </CardContent>
</Card>
```

**Include:**
- Visual flow diagrams (with arrows)
- Step-by-step process cards
- Color-coded explanations (light tones OK)
- Interactive examples

---

### Section 3: Practical Examples
**Purpose:** Show real code examples with live previews

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Sparkles className="w-7 h-7" />
      See It in Action
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <FrontendCodePreview
      title="Example Title"
      description="What this example demonstrates"
      html={`<!-- HTML code -->`}
      css={`/* CSS with light colors for visual variety */`}
      js={`// JavaScript if needed`}
      colorTheme="blue"              // Main theme
      previewHeight="400px"
      onOpenPlayground={onOpenWebPlayground}
    />
  </CardContent>
</Card>
```

**Guidelines:**
- Use `FrontendCodePreview` for live HTML examples
- Always include `onOpenPlayground` prop for play button
- CSS can use light tones (emerald, purple, amber) for visual interest
- Keep examples simple and beginner-friendly
- Add dark mode support in CSS with `@media (prefers-color-scheme: dark)`

---

### Section 4: Key Concepts / Features
**Purpose:** Break down important subtopics

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <Lightbulb className="w-7 h-7" />
      Key Concepts
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid md:grid-cols-3 gap-4">
      {/* Use different colors for each concept */}
      <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
        <h4 className="font-bold text-lg">
          Concept 1
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Explanation
        </p>
      </div>
      
      <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
        <h4 className="font-bold text-lg">
          Concept 2
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Explanation
        </p>
      </div>
      
      <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
        <h4 className="font-bold text-lg">
          Concept 3
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Explanation
        </p>
      </div>
    </div>
  </CardContent>
</Card>
```

**Use variety for feature cards:**
- Orange for core/foundational concepts
- Emerald/Green for success/positive features
- Purple for advanced/creative topics
- Amber for warnings/important tips
- Keep all colors light and professional (50/100 shades)

---

### Section 5: Best Practices / Tips
**Purpose:** Teach good coding habits

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
      <CheckCircle2 className="w-7 h-7" />
      Best Practices
    </CardTitle>
  </CardHeader>
  <CardContent className="grid md:grid-cols-2 gap-4">
    {/* Do's column */}
    <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
        ✅ Do This
      </h4>
      {/* List of good practices */}
    </div>
    
    {/* Don'ts column */}
    <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
      <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400">
        ❌ Avoid This
      </h4>
      {/* List of bad practices */}
    </div>
  </CardContent>
</Card>
```

---

### Section 6: Interactive Playground (Optional)
**Purpose:** Let users experiment with code

```tsx
{onOpenWebPlayground && (
  <InteractivePlayground
    title="🚀 Try It Yourself"
    description="Experiment and learn by doing!"
    features={[
      'Live code editor',
      'Instant preview',
      'Interactive examples',
      'Learn by experimenting'
    ]}
    buttonText="Launch Playground"
    onLaunchPlayground={() => onOpenWebPlayground(html, css, js)}
    playgroundData={{ html, css, js }}
    colorTheme="blue"
  />
)}
```

---

## 🎨 Color Palette Reference

### Primary Blue Theme (REQUIRED)
```css
/* Titles & Headings */
text-blue-600 dark:text-blue-400

/* Icons */
text-blue-600 dark:text-blue-400

/* Badges */
bg-blue-500 text-white

/* Borders */
border-blue-200 dark:border-blue-800
border-blue-200 dark:border-blue-700

/* Backgrounds */
bg-blue-50 dark:bg-blue-950
bg-blue-100 dark:bg-blue-900
bg-blue-500/10 dark:bg-blue-500/20

/* Gradients */
from-blue-50 to-indigo-50 dark:from-blue-950/30 to-indigo-950/20
```

### Accent Colors (ALLOWED for Examples)
Use light tones only:

```css
/* Success / Positive */
bg-emerald-50 dark:bg-emerald-950/20
text-emerald-600 dark:text-emerald-400
border-emerald-200 dark:border-emerald-700

/* Info / Secondary */
bg-purple-50 dark:bg-purple-950/20
text-purple-600 dark:text-purple-400
border-purple-200 dark:border-purple-700

/* Warning / Attention */
bg-amber-50 dark:bg-amber-950/20
text-amber-600 dark:text-amber-400
border-amber-200 dark:border-amber-700

/* Error / Don't */
bg-rose-50 dark:bg-rose-950/20
text-rose-600 dark:text-rose-400
border-rose-200 dark:border-rose-700
```

---

## 📝 Writing Guidelines

### Content Principles
1. **Beginner-First:** Write for someone learning HTML for the first time
2. **Clear Language:** Avoid jargon; explain technical terms
3. **Visual Learning:** Use diagrams, examples, and live previews
4. **Progressive Disclosure:** Start simple, gradually add complexity
5. **Interactive:** Include clickable examples with play buttons

### Structure Rules
- **One Concept Per Section:** Don't mix multiple topics
- **Examples Required:** Every section should have a code example
- **Dark Mode:** All CSS must support dark mode
- **Mobile Responsive:** Test on different screen sizes
- **Accessibility:** Use semantic HTML and proper ARIA labels

---

## 🚫 What to Avoid

### Content to Skip
These topics have dedicated components:
- ❌ HTML Editors & Tools (separate component)
- ❌ Document Structure basics (separate component)
- ❌ HTML Syntax rules (separate component)
- ❌ Comments (separate component)
- ❌ Setting up development environment

### Styling to Avoid
- ❌ Using orange/red as primary theme (that's old)
- ❌ Bright, saturated colors everywhere
- ❌ Excessive emojis in professional sections
- ❌ Heavy shadows and animations
- ❌ Inconsistent color schemes

---

## 🎯 Component Checklist

Before submitting a component, verify:

### Theme & Styling
- [ ] All titles use `text-blue-600 dark:text-blue-400`
- [ ] All icons are blue theme
- [ ] All badges use `bg-blue-500 text-white`
- [ ] All borders are blue theme
- [ ] PageHeader uses `colorTheme="blue"`
- [ ] FrontendCodePreview uses `colorTheme="blue"`
- [ ] InteractivePlayground uses `colorTheme="blue"`
- [ ] Dark mode support throughout

### Content Quality
- [ ] Beginner-friendly language
- [ ] Clear explanations with examples
- [ ] Live code previews with play buttons
- [ ] Step-by-step breakdowns
- [ ] Best practices included
- [ ] Alerts/tips for important points

### Interactive Features
- [ ] All FrontendCodePreview have `onOpenPlayground` prop
- [ ] CSS includes dark mode media queries
- [ ] Examples are runnable and tested
- [ ] Playground data is complete

### Structure
- [ ] Follows section order (Intro → How It Works → Examples → Concepts → Best Practices → Playground)
- [ ] Each section has proper blue-themed header
- [ ] Content is well-organized and scannable
- [ ] Mobile responsive design

---

## 💡 Example Component Template

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { Globe, Sparkles, Lightbulb } from 'lucide-react';

interface HtmlTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlTopic({ onOpenWebPlayground }: HtmlTopicProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Globe}
        category="HTML · Category"
        title="Topic Name"
        description="Beginner-friendly description"
        colorTheme="blue"
      />

      {/* Section 1: Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
            What is [Topic]?
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Introduction content */}
        </CardContent>
      </Card>

      {/* Section 2: Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            See It in Action
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Example"
            description="Description"
            html={`<!-- code -->`}
            css={`/* styles */`}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="Try It Yourself"
          description="Experiment with the code"
          features={['Feature 1', 'Feature 2']}
          buttonText="Launch Playground"
          onLaunchPlayground={() => onOpenWebPlayground(html, css, js)}
          playgroundData={{ html, css, js }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
```

---

## 🎓 Best Practices Summary

### DO ✅
- Use Coder POD blue (`#5B7FFF`) for main titles and section headings ONLY
- Use varied pastel colors (orange, purple, emerald, amber) for content cards
- Include live code previews with play buttons
- Support dark mode in all CSS
- Write for beginners
- Break content into digestible sections
- Use visual diagrams with multi-color for better comprehension
- Match card colors with icons for consistency

### DON'T ❌
- Use blue everywhere (only for main titles)
- Use saturated/bright colors (stick to 50/100 shades)
- Mix too many colors in a single card
- Forget dark mode support
- Include topics covered elsewhere
- Use technical jargon without explanation
- Create long walls of text
- Skip interactive examples

---

## 📚 Related Documentation
- `/HTML.md` - General HTML component guidelines
- Component examples: `/src/components/languages/html/topics/html-what-is-html.tsx`
- Shared components: `/src/components/shared/`

---

**Last Updated:** December 2024  
**Version:** 2.0 (Blue Theme)
