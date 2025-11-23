# Generic PageHeader Component Guide

## 📄 Overview

The **Generic PageHeader** is a reusable, beautifully designed header component for all topic pages across the entire platform. It provides consistent styling, animations, and color themes for HTML, CSS, JavaScript, React, Java, Spring, and all other language topics.

## 📍 Location

```
/src/components/generic-page-header.tsx
```

## 🎨 Features

✅ **Unified Design** - Consistent header across all topics  
✅ **17 Color Themes** - Pre-configured color palettes  
✅ **Gradient Backgrounds** - Smooth gradient text effects  
✅ **Smooth Animations** - Fade-in and slide-in effects  
✅ **Dark Mode Support** - Automatic dark/light theme adaptation  
✅ **Responsive** - Works on all screen sizes  
✅ **TypeScript** - Fully typed with IntelliSense support  
✅ **Icon Support** - Lucide React icons integration  

## 🚀 Quick Start

### Basic Usage

```tsx
import { PageHeader } from '@/components/generic-page-header';
import { FileCode } from 'lucide-react';

export default function MyTopic() {
  return (
    <div className="w-full space-y-8 min-h-screen pb-16">
      <PageHeader
        icon={FileCode}
        category="HTML Basics"
        title="HTML Document Structure"
        description="The essential boilerplate for every web page"
        colorTheme="blue"
      />
      
      {/* Your content here */}
    </div>
  );
}
```

## 📋 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | `LucideIcon` | ✅ Yes | Icon from lucide-react |
| `category` | `string` | ✅ Yes | Category badge text (e.g., "HTML Basics") |
| `title` | `string` | ✅ Yes | Main page title |
| `description` | `string` | ✅ Yes | Page description/subtitle |
| `colorTheme` | `ColorTheme` | ✅ Yes | One of 17 available color themes |

## 🎨 Available Color Themes

| Theme | Use Case | Example |
|-------|----------|---------|
| `blue` | HTML basics, primary content | HTML Document Structure |
| `green` | Content & structure, success states | HTML Lists, Semantic HTML |
| `purple` | Forms, interactive elements | HTML Forms, Input Types |
| `orange` | Multimedia, media elements | Audio/Video, Images |
| `red` | Advanced features, important topics | Advanced HTML5 |
| `indigo` | Metadata, SEO topics | Meta Tags, SEO |
| `cyan` | APIs, browser features | Fetch API, Web Storage |
| `pink` | Accessibility, user-focused | Accessibility, ARIA |
| `violet` | SCSS/Styling topics | SCSS Variables, Mixins |
| `teal` | Modern features | Modern CSS, New APIs |
| `yellow` | JavaScript basics | JS Variables, Functions |
| `emerald` | Performance, optimization | Performance, Best Practices |
| `sky` | React components | React Components, Hooks |
| `rose` | Error handling, validation | Form Validation, Errors |
| `fuchsia` | Design patterns | Design Patterns |
| `lime` | Testing, quality | Testing, QA |
| `amber` | Java, backend topics | Java, Spring Boot |

## 🎨 Color Theme Reference

### Light Mode Colors
- **Badge Background**: Soft gradient (10% opacity)
- **Badge Border**: 200 shade
- **Icon**: 600 shade
- **Text**: 700 shade
- **Gradient**: 600 shades (for title)

### Dark Mode Colors
- **Badge Border**: 800 shade
- **Icon**: 400 shade
- **Text**: 300 shade
- **Gradient**: Same as light mode

## 📖 Complete Examples

### HTML Topic
```tsx
import { PageHeader } from '@/components/generic-page-header';
import { File } from 'lucide-react';

<PageHeader
  icon={File}
  category="HTML Basics"
  title="HTML Introduction"
  description="Understanding HTML and its role in building web pages"
  colorTheme="blue"
/>
```

### CSS Topic
```tsx
import { PageHeader } from '@/components/generic-page-header';
import { Palette } from 'lucide-react';

<PageHeader
  icon={Palette}
  category="CSS Fundamentals"
  title="CSS Selectors"
  description="Target and style HTML elements with precision"
  colorTheme="violet"
/>
```

### JavaScript Topic
```tsx
import { PageHeader } from '@/components/generic-page-header';
import { Code } from 'lucide-react';

<PageHeader
  icon={Code}
  category="JavaScript Fundamentals"
  title="Variables & Data Types"
  description="Store and manipulate data in JavaScript"
  colorTheme="yellow"
/>
```

### React Topic
```tsx
import { PageHeader } from '@/components/generic-page-header';
import { Zap } from 'lucide-react';

<PageHeader
  icon={Zap}
  category="React Hooks"
  title="useState Hook"
  description="Manage component state with the useState hook"
  colorTheme="sky"
/>
```

### Java/Spring Topic
```tsx
import { PageHeader } from '@/components/generic-page-header';
import { Coffee } from 'lucide-react';

<PageHeader
  icon={Coffee}
  category="Java Fundamentals"
  title="Object-Oriented Programming"
  description="Master the principles of OOP in Java"
  colorTheme="amber"
/>
```

## 🎯 Category Naming Conventions

### HTML Categories
- HTML Basics
- Content & Structure
- Forms & Input
- Multimedia
- Advanced HTML
- Metadata & SEO
- Accessibility

### CSS Categories
- CSS Fundamentals
- Layout & Positioning
- Styling & Design
- Responsive Design
- Flexbox & Grid
- Animations & Effects
- Performance
- Modern CSS

### JavaScript Categories
- JavaScript Fundamentals
- Operators & Control Flow
- Functions
- Arrays & Objects
- Strings & Regex
- Scope & Closures
- Object-Oriented JavaScript
- Asynchronous JavaScript
- DOM Manipulation
- Events
- ES6+ Features
- Design Patterns
- Performance & Optimization
- APIs & Browser
- Security & Testing

### React Categories
- Getting Started
- Describing the UI
- Adding Interactivity
- Managing State
- Escape Hatches
- React Router
- Advanced Patterns
- Performance
- Testing

## 📦 Container Requirements

Always wrap the PageHeader in a container with proper spacing:

```tsx
<div className="w-full space-y-8 min-h-screen pb-16">
  <PageHeader {...props} />
  {/* Content */}
</div>
```

### Container Classes Explained:
- `w-full` - Full width
- `space-y-8` - Vertical spacing between sections
- `min-h-screen` - Minimum full viewport height
- `pb-16` - Bottom padding for scroll clearance

## 🎭 Animations

The PageHeader includes subtle animations:

1. **Category Badge**: Fades in and slides from top
   - Duration: 500ms
   
2. **Title**: Fades in and slides from bottom
   - Duration: 700ms
   
3. **Description**: Fades in and slides from bottom
   - Duration: 1000ms

## 🔧 Customization

### Adding New Color Themes

To add a new color theme, update `colorClasses` in `generic-page-header.tsx`:

```tsx
const colorClasses: Record<ColorTheme, {...}> = {
  // ... existing themes
  
  newTheme: {
    badgeBg: 'bg-gradient-to-r from-newColor-500/10 via-newColor-500/10 to-newColor-500/10',
    badgeBorder: 'border-newColor-200 dark:border-newColor-800',
    icon: 'text-newColor-600 dark:text-newColor-400',
    text: 'text-newColor-700 dark:text-newColor-300',
    gradient: 'bg-gradient-to-r from-newColor-600 via-newColor-600 to-newColor-600',
  },
};
```

Don't forget to add the new theme to the `ColorTheme` type:

```tsx
type ColorTheme = 
  | 'violet' 
  | 'teal'
  // ... existing themes
  | 'newTheme';
```

## ✅ Best Practices

1. **Consistent Categories**: Use the same category name across related topics
2. **Descriptive Titles**: Keep titles clear and concise
3. **Helpful Descriptions**: Write descriptions that explain what users will learn
4. **Appropriate Icons**: Choose icons that represent the topic visually
5. **Color Consistency**: Use the same color theme for topics in the same category
6. **Container Wrapper**: Always use the proper container div classes

## 🔄 Migration from Old Headers

### Before (Old Custom Header)
```tsx
<div className="space-y-8">
  <div className="text-center">
    <div className="flex items-center justify-center gap-3 mb-2">
      <Icon className="w-10 h-10 text-primary" />
      <h1 className="text-4xl font-bold text-foreground">Title</h1>
    </div>
    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
      Description
    </p>
  </div>
  {/* Content */}
</div>
```

### After (Generic PageHeader)
```tsx
import { PageHeader } from '@/components/generic-page-header';

<div className="w-full space-y-8 min-h-screen pb-16">
  <PageHeader
    icon={Icon}
    category="Category"
    title="Title"
    description="Description"
    colorTheme="blue"
  />
  {/* Content */}
</div>
```

## 📊 Benefits

| Benefit | Description |
|---------|-------------|
| **Code Reduction** | ~15 lines reduced to 7 lines per page |
| **Consistency** | All pages look uniform and professional |
| **Maintainability** | Update once, apply everywhere |
| **Accessibility** | Built-in semantic HTML and ARIA |
| **Performance** | Optimized animations and rendering |
| **Dark Mode** | Automatic theme adaptation |

## 🎓 Related Components

- **GenericLearningPath** - `/src/components/generic-learning-path.tsx`
- **SCSS PageHeader** - `/src/components/scss-topics/page-header.tsx` (legacy)

## 📝 Notes

- The old `scss-topics/page-header.tsx` is kept for backward compatibility
- New implementations should use `generic-page-header.tsx`
- All new topic pages should use this component
- The component is fully tested and production-ready

## 🐛 Troubleshooting

**Issue**: Colors don't match expected theme  
**Solution**: Ensure colorTheme prop matches exactly (case-sensitive)

**Issue**: Animations not working  
**Solution**: Check that Tailwind's animation classes are enabled

**Issue**: Icon not displaying  
**Solution**: Verify icon is imported from 'lucide-react'

**Issue**: Layout breaks on mobile  
**Solution**: Ensure parent container has proper responsive classes

## 📚 Resources

- [Lucide React Icons](https://lucide.dev/)
- [Tailwind CSS Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [TypeScript in React](https://react-typescript-cheatsheet.netlify.app/)

---

**Last Updated**: November 2024  
**Version**: 1.0.0  
**Author**: Coder Pod Team
