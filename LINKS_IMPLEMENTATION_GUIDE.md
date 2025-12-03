# HTML Links Components - Implementation Guide

## Quick Start Implementation

### Step 1: Import Components

```tsx
'use client';

import HtmlLinksAnchor from '@/components/languages/html/topics/html-links-anchor';
import HtmlLinksTarget from '@/components/languages/html/topics/html-links-target';
import HtmlLinksInternal from '@/components/languages/html/topics/html-links-internal';
import HtmlLinksEmailTel from '@/components/languages/html/topics/html-links-email-tel';
```

### Step 2: Create Your Page/Route

```tsx
'use client';

import { useState } from 'react';
import HtmlLinksAnchor from '@/components/languages/html/topics/html-links-anchor';
import HtmlLinksTarget from '@/components/languages/html/topics/html-links-target';
import HtmlLinksInternal from '@/components/languages/html/topics/html-links-internal';
import HtmlLinksEmailTel from '@/components/languages/html/topics/html-links-email-tel';

export default function LinksPage() {
  const handleOpenWebPlayground = (html: string, css: string, js: string) => {
    // Send to your web playground/iframe
    console.log('Opening playground with:', { html, css, js });
    // Implementation depends on your app architecture
  };

  return (
    <div className="w-full">
      {/* Anchor Links Section */}
      <HtmlLinksAnchor onOpenWebPlayground={handleOpenWebPlayground} />
      
      {/* Target Attribute Section */}
      <HtmlLinksTarget onOpenWebPlayground={handleOpenWebPlayground} />
      
      {/* Internal Links Section */}
      <HtmlLinksInternal onOpenWebPlayground={handleOpenWebPlayground} />
      
      {/* Email & Tel Links Section */}
      <HtmlLinksEmailTel onOpenWebPlayground={handleOpenWebPlayground} />
    </div>
  );
}
```

### Step 3: Implement Web Playground Handler

```tsx
// Using an existing playground component
const handleOpenWebPlayground = (html: string, css: string, js: string) => {
  // Option 1: If you have a modal
  setPlaygroundCode({ html, css, js });
  setShowPlayground(true);

  // Option 2: If you have a sidebar
  setSidebarContent({ html, css, js });

  // Option 3: If you use a separate route
  router.push(`/playground?html=${encodeURIComponent(html)}&css=${encodeURIComponent(css)}&js=${encodeURIComponent(js)}`);
};
```

---

## Component Features Reference

### html-links-anchor.tsx

**What it teaches:**
- Basic anchor link structure
- Creating clickable links
- Link styling and states
- Navigation menus
- Accessibility

**Examples included:** 3
- Simple text link
- Styled button link
- Navigation menu

**Props:**
```tsx
interface HtmlLinksAnchorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}
```

---

### html-links-target.tsx

**What it teaches:**
- target="_self" (same tab)
- target="_blank" (new tab)
- target="_parent" (parent frame)
- target="_top" (full window)
- Security with rel attribute

**Examples included:** 3
- Default same-tab navigation
- External links in new tabs
- Combined navigation types

**Props:**
```tsx
interface HtmlLinksTargetProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}
```

---

### html-links-internal.tsx

**What it teaches:**
- Root-relative paths (/about)
- Document-relative paths (../page.html)
- Fragment identifiers (#section)
- Internal link strategies
- SEO benefits

**Examples included:** 4
- Main navigation
- Breadcrumb navigation
- Table of contents with jump links
- Footer navigation

**Props:**
```tsx
interface HtmlLinksInternalProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}
```

---

### html-links-email-tel.tsx

**What it teaches:**
- mailto: protocol
- tel: protocol
- sms: protocol
- Email with subject/body
- Phone number formatting
- Contact forms

**Examples included:** 3
- Contact card
- Contact options grid
- Comprehensive contact section

**Props:**
```tsx
interface HtmlLinksEmailTelProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}
```

---

## Styling & Theme

All components use the theme from COMP_HTML_STRUC.md:

### Primary Colors
- **Blue (#3b82f6):** Main headings, primary buttons, focus states
- **Dark Blue (#1e40af):** Text, section titles

### Accent Colors
- **Emerald:** Success, positive features, best practices (✅)
- **Purple:** Secondary, advanced concepts
- **Orange:** Core concepts, foundational topics
- **Amber:** Tips, important notes, warnings
- **Rose:** Warnings, avoid patterns (❌)

### Dark Mode
All components include complete dark mode support using:
- `dark:` Tailwind prefixes
- Proper contrast ratios
- Adjusted shadows and borders
- Color inversion for readability

---

## Example: Custom Implementation

### Scenario: Adding to a Learning Platform

```tsx
// pages/html/links/index.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HtmlLinksAnchor from '@/components/languages/html/topics/html-links-anchor';
import HtmlLinksTarget from '@/components/languages/html/topics/html-links-target';
import HtmlLinksInternal from '@/components/languages/html/topics/html-links-internal';
import HtmlLinksEmailTel from '@/components/languages/html/topics/html-links-email-tel';
import PlaygroundModal from '@/components/PlaygroundModal';

export default function HTMLLinksPage() {
  const [playground, setPlayground] = useState({
    isOpen: false,
    html: '',
    css: '',
    js: ''
  });

  const handleOpenWebPlayground = (html: string, css: string, js: string) => {
    setPlayground({
      isOpen: true,
      html,
      css,
      js
    });
  };

  return (
    <main className="w-full bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-800 p-4">
        <div className="max-w-7xl mx-auto flex gap-4">
          <a href="#anchor" className="text-blue-600 hover:underline">
            Anchor Links
          </a>
          <a href="#target" className="text-blue-600 hover:underline">
            Target Attribute
          </a>
          <a href="#internal" className="text-blue-600 hover:underline">
            Internal Links
          </a>
          <a href="#email-tel" className="text-blue-600 hover:underline">
            Email & Tel
          </a>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto p-6 space-y-16">
        {/* Anchor Links */}
        <section id="anchor">
          <HtmlLinksAnchor onOpenWebPlayground={handleOpenWebPlayground} />
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-blue-200 dark:border-blue-800" />

        {/* Target Attribute */}
        <section id="target">
          <HtmlLinksTarget onOpenWebPlayground={handleOpenWebPlayground} />
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-blue-200 dark:border-blue-800" />

        {/* Internal Links */}
        <section id="internal">
          <HtmlLinksInternal onOpenWebPlayground={handleOpenWebPlayground} />
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-blue-200 dark:border-blue-800" />

        {/* Email & Tel Links */}
        <section id="email-tel">
          <HtmlLinksEmailTel onOpenWebPlayground={handleOpenWebPlayground} />
        </section>
      </div>

      {/* Playground Modal */}
      {playground.isOpen && (
        <PlaygroundModal
          html={playground.html}
          css={playground.css}
          js={playground.js}
          isOpen={playground.isOpen}
          onClose={() => setPlayground({ ...playground, isOpen: false })}
        />
      )}
    </main>
  );
}
```

---

## Best Practices for Integration

### 1. **Performance**
- Components are client-side ('use client')
- Use lazy loading if embedding multiple sections
- FrontendCodePreview components are optimized for preview

### 2. **Accessibility**
- All interactive elements are keyboard accessible
- Color not the only indicator of information
- Proper heading hierarchy maintained
- Links have descriptive text

### 3. **Mobile Responsiveness**
- All layouts use responsive grid
- Tailwind breakpoints properly applied
- Touch-friendly button sizes (min 44px)
- Stacked layout on mobile

### 4. **Dark Mode**
- Automatically respects system preference
- Toggle support if using Tailwind's manual mode
- Sufficient contrast ratios maintained

---

## Customization Options

### Styling Override

```tsx
// Custom wrapper with override styles
<div className="[&_h2]:text-xl [&_p]:text-sm">
  <HtmlLinksAnchor onOpenWebPlayground={handleOpenWebPlayground} />
</div>
```

### Component Extraction

```tsx
// Use individual sections
import HtmlLinksAnchor from '@/components/languages/html/topics/html-links-anchor';

// Custom page structure
<div>
  <HtmlLinksAnchor onOpenWebPlayground={handleOpenWebPlayground} />
  {/* Add custom content after */}
</div>
```

---

## Common Issues & Solutions

### Issue: Play button not working
**Solution:** Make sure `onOpenWebPlayground` prop is passed
```tsx
<HtmlLinksAnchor onOpenWebPlayground={handleOpenWebPlayground} />
```

### Issue: Dark mode not applying
**Solution:** Ensure parent has `dark` class when dark mode is active
```tsx
<div className={isDarkMode ? 'dark' : ''}>
  <HtmlLinksAnchor onOpenWebPlayground={handleOpenWebPlayground} />
</div>
```

### Issue: Icons not showing
**Solution:** Ensure lucide-react is installed
```bash
npm install lucide-react
```

### Issue: Tailwind styles not working
**Solution:** Add component paths to tailwind.config.js
```js
content: [
  './src/components/languages/html/topics/**/*.{tsx,jsx}',
]
```

---

## SEO Optimization

These components are optimized for learning and include:
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive link text
- Code examples for best practices

For maximum SEO value, ensure your page wrapper includes:
```tsx
<head>
  <title>HTML Links: Anchor, Target, Internal, Email & Tel</title>
  <meta name="description" content="Learn HTML links including anchor tags, target attributes, internal links, and email/tel links with interactive examples" />
</head>
```

---

## Deployment Checklist

- [ ] All imports properly referenced
- [ ] onOpenWebPlayground callback implemented
- [ ] Dark mode CSS variables defined
- [ ] Playground component available
- [ ] Tailwind CSS configured
- [ ] lucide-react icons installed
- [ ] Components tested on mobile
- [ ] Dark mode tested
- [ ] Links tested in preview
- [ ] Accessibility tested with screen reader

---

## Support & Troubleshooting

For issues or feature requests, refer to:
- COMPONENTS_LINKS_SUMMARY.md - Component overview
- COMP_HTML_STRUC.md - Structure guidelines
- Individual component source files - Detailed code

All components follow best practices for:
- Accessibility (WCAG 2.1 AA)
- Performance (optimized rendering)
- User Experience (clear, intuitive)
- Maintainability (well-structured, commented)

