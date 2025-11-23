# GitHub Copilot & AI Agent Instructions

## Project: CoderPod Learning Platform

### Overview
This is a modern, interactive learning platform for programming languages including JavaScript, React, Java, Spring, HTML, CSS, SCSS, and more. All content must be educational, visually appealing, and beginner-to-expert friendly.

---

## 🎯 Core Content Creation Rules

### 1. **File Naming Convention**
- **ALWAYS** prefix topic files with the language name
- Format: `{language}-{topic-slug}.tsx`
- Examples:
  - `javascript-what-is-javascript.tsx`
  - `react-hooks-overview.tsx`
  - `java-object-oriented-programming.tsx`
  - `css-flexbox-guide.tsx`

### 2. **Content Structure Requirements**

#### Page Header
- Use the `PageHeader` component from `@/components/shared/generic-page-header`
- Include icon, category, title, description, and colorTheme
- Example:
```tsx
<PageHeader
  icon={Code2}
  category="JavaScript Fundamentals"
  title="What is JavaScript?"
  description="Discover the world's most popular programming language"
  colorTheme="amber"
/>
```

#### Layout
- **DO NOT** center content - stretch to viewport
- Use full-width layouts with proper responsive breakpoints
- Maintain consistent spacing: `space-y-8` for sections

### 3. **Content Quality Standards**

#### Beginner to Expert Approach
- Start with simple, clear explanations
- Progress to intermediate concepts
- Include advanced/expert-level sections
- Use progressive disclosure (tabs, accordions)

#### Content Completeness
- **ALWAYS** check existing language data structure before creating content
- If a topic is already covered elsewhere, provide overview only and reference the detailed section
- Include ALL relevant:
  - Attributes and properties
  - Concepts and principles
  - Rules and best practices
  - Examples (basic to advanced)
  - Edge cases and gotchas
  - Common mistakes and solutions

### 4. **Visual Elements (MANDATORY)**

#### Diagrams & Illustrations
- Include visual representations for EVERY major concept
- Use one or more of:
  - ASCII art for simple concepts
  - Styled div-based diagrams
  - SVG illustrations
  - Interactive visual components
- Example areas needing visuals:
  - Data flow
  - Architecture patterns
  - Comparison charts
  - Process flows
  - Memory models

#### Code Snippets
- **ALWAYS** include syntax-highlighted code examples
- Maintain theme consistency:
  - Light mode: light background with dark text
  - Dark mode: dark background with light text
- Use proper language-specific syntax highlighting
- Include comments explaining key parts

### 5. **Interactive Elements (REQUIRED)**

#### Live Playgrounds
- Every major concept MUST have a "Try it yourself" playground
- Use appropriate playground components:
  - `onOpenWebPlayground` for HTML/CSS/JavaScript
  - `onOpenEditor` for Java/Spring
  - `openWithContent` for React
- Include:
  - Pre-filled example code
  - Expected output
  - Ability to modify and run

#### Click-to-Open Navigation
- Use sidebar/menu for section navigation
- Implement smooth scrolling or state-based section switching
- No page reloads for navigation
- Example:
```tsx
const [activeSection, setActiveSection] = useState('overview');
```

### 6. **UI Component Standards**

#### Required Component Usage
- Use shadcn/ui components:
  - `Card`, `CardHeader`, `CardTitle`, `CardContent`
  - `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
  - `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
  - `Button`, `Badge`, `Alert`
  - `Separator`, `ScrollArea`

#### Styling Consistency
- Use Tailwind CSS classes
- Maintain consistent:
  - Font sizes: `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.
  - Spacing: `gap-4`, `gap-6`, `gap-8`, `space-y-4`, etc.
  - Padding: `p-4`, `p-6`, `p-8` for cards
  - Border radius: `rounded-lg`, `rounded-xl`
- Use theme-aware classes: `dark:` prefix for dark mode

### 7. **Language-Specific Theming**

#### Color Themes by Language
- JavaScript: `amber`/`yellow`
- React: `blue`/`cyan`
- Java: `orange`/`red`
- Spring: `green`/`emerald`
- HTML: `blue`
- CSS: `purple`/`indigo`
- SCSS: `pink`/`purple`

#### Theme Application
- Use `getThemeClasses()` from `@/lib/language-themes`
- Apply to:
  - Page headers
  - Section highlights
  - Interactive elements
  - Progress indicators

### 8. **Content Sections to Include**

#### Mandatory Sections
1. **Overview/Introduction**
   - What is it?
   - Why learn it?
   - Key benefits

2. **Core Concepts**
   - Fundamental principles
   - How it works
   - Visual diagrams

3. **Practical Examples**
   - Basic examples
   - Intermediate examples
   - Advanced patterns
   - Live playgrounds

4. **Best Practices**
   - Do's and Don'ts
   - Common patterns
   - Performance tips

5. **Common Pitfalls**
   - Mistakes to avoid
   - Edge cases
   - Solutions and workarounds

6. **Comparison (if applicable)**
   - vs. alternatives
   - When to use
   - Trade-offs

7. **Real-World Applications**
   - Use cases
   - Industry examples
   - Career relevance

8. **Learning Path**
   - Prerequisites
   - Next steps
   - Related topics

### 9. **Reference Links Policy**

#### ONLY Include
- Official language documentation
- Official framework documentation
- MDN Web Docs (for web technologies)

#### NEVER Include
- Third-party tutorials
- Blog posts
- YouTube videos
- Unofficial resources
- Commercial course links

### 10. **File Organization**

#### Delete Old Content
- When rewriting a topic, **DELETE** the old file completely
- Don't leave deprecated versions
- Update imports in parent components

#### Component Structure
```tsx
'use client';
import { /* required components */ } from '@/components/ui/*';
import { /* icons */ } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface {Language}{Topic}Props {
  onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void;
  // or other playground props
}

export default function {Language}{Topic}({ onOpenWebPlaygroundAction }: {Language}{Topic}Props) {
  // State management
  // Content sections
  // Return JSX
}
```

---

## 🎨 Design & UX Principles

### Visual Hierarchy
1. Clear headings with icons
2. Consistent spacing between sections
3. Visual separation (cards, borders, backgrounds)
4. Emphasis on key points (badges, highlights)

### Readability
- Max content width: `max-w-7xl` or `max-w-none` based on layout
- Line height: `leading-relaxed` or `leading-loose`
- Paragraph spacing: `space-y-4`
- Code blocks: adequate padding and contrast

### Interactivity
- Hover states on all interactive elements
- Click feedback (scale, color change)
- Loading states for async operations
- Smooth transitions: `transition-all duration-200`

### Responsiveness
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Stack content on mobile
- Hide/collapse complex diagrams on small screens

---

## 📝 Code Examples Standards

### Example Structure
```tsx
const codeExample = {
  basic: `// Simple, beginner-friendly example
const greeting = "Hello, World!";
console.log(greeting);`,

  intermediate: `// More complex example with explanation
function processData(data) {
  return data
    .filter(item => item.active)
    .map(item => item.value);
}`,

  advanced: `// Expert-level example with best practices
class DataProcessor<T> {
  private cache = new Map<string, T>();
  
  async process(key: string, fetcher: () => Promise<T>): Promise<T> {
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    }
    const result = await fetcher();
    this.cache.set(key, result);
    return result;
  }
}`
};
```

### Playground Integration
```tsx
<Button onClick={() => onOpenWebPlaygroundAction?.(
  htmlCode,
  cssCode,
  jsCode
)}>
  <Play className="w-4 h-4 mr-2" />
  Try in Playground
</Button>
```

---

## 🚀 Innovation & Engagement

### Must-Have Interactive Features
- Live code execution
- Interactive diagrams (click, hover, animate)
- Progress tracking (when applicable)
- Comparison toggles
- Theme switchers for code examples
- Search/filter functionality (for long content)

### Optional Enhancements
- Animated transitions between sections
- Gamification elements (badges, achievements)
- Code challenges/quizzes
- Community tips/notes
- Bookmarking functionality
- Print-friendly view
- Share functionality

---

## ✅ Pre-Submit Checklist

Before creating/updating any topic page, verify:

- [ ] File named with language prefix
- [ ] PageHeader component used correctly
- [ ] Content stretches to viewport (not centered)
- [ ] All concepts have visual diagrams
- [ ] Code snippets support light/dark themes
- [ ] Live playground examples included
- [ ] Beginner AND expert content present
- [ ] Navigation menu implemented
- [ ] Consistent spacing and fonts throughout
- [ ] Old/deprecated content deleted
- [ ] Only official references linked
- [ ] No .md files created (TSX only)
- [ ] Mobile responsive
- [ ] TypeScript types properly defined
- [ ] No console errors or warnings
- [ ] Props renamed with "Action" suffix if required (e.g., `onOpenWebPlaygroundAction`)

---

## 🔧 Technical Requirements

### Imports Pattern
```tsx
'use client'; // Always at top for client components

// UI Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Icons
import { Play, Code, BookOpen, Lightbulb } from 'lucide-react';

// Shared Components
import { PageHeader } from '@/components/shared/generic-page-header';

// Utils
import { cn } from '@/lib/utils';
```

### State Management
```tsx
const [activeSection, setActiveSection] = useState('overview');
const [selectedExample, setSelectedExample] = useState('basic');
const [showSolution, setShowSolution] = useState(false);
```

### Error Handling
- Always handle errors in async operations
- Show user-friendly error messages
- Provide fallback content
- Log errors for debugging

### Performance
- Use React.memo for expensive components
- Lazy load heavy content
- Optimize images (if any)
- Minimize re-renders
- Use proper keys in lists

---

## 🎓 Content Writing Guidelines

### Tone & Voice
- **Friendly** but **professional**
- **Encouraging** for beginners
- **Precise** for technical details
- **Practical** with real-world context

### Sentence Structure
- Short sentences for complex topics
- Longer sentences for explanations
- Bullet points for lists
- Numbered steps for processes

### Technical Accuracy
- Double-check all code examples
- Verify syntax and best practices
- Use current language versions
- Note deprecated features
- Include version information when relevant

### Examples Quality
- Start simple, build complexity
- Comment explaining key lines
- Show both good and bad patterns
- Demonstrate real use cases
- Avoid contrived examples

---

## 📚 Language-Specific Guidelines

### JavaScript Topics
- ES6+ features preferred
- Modern syntax (const/let, arrow functions, async/await)
- Browser and Node.js contexts
- Performance considerations

### React Topics
- Functional components only
- Hooks-based approach
- TypeScript examples
- Best practices from React docs

### Java Topics
- Java 17+ features
- OOP principles emphasized
- Clear class structure
- Exception handling patterns

### Spring Topics
- Spring Boot focus
- Annotation-based configuration
- Dependency injection examples
- RESTful API patterns

### HTML Topics
- Semantic HTML5
- Accessibility considerations
- SEO best practices
- Modern APIs

### CSS Topics
- Modern CSS features (Grid, Flexbox, Custom Properties)
- Mobile-first responsive design
- Performance optimization
- Cross-browser compatibility

### SCSS Topics
- Modern Sass syntax
- Best practices for organization
- Practical mixins and functions
- Performance considerations

---

## 🔄 Maintenance & Updates

### When to Update Content
- New language/framework features released
- Better examples discovered
- User feedback received
- Performance improvements available
- Accessibility enhancements needed

### Update Process
1. Review existing content
2. Identify outdated sections
3. Research current best practices
4. Update code examples
5. Test all interactive elements
6. Verify links still valid
7. Check responsive design
8. Run TypeScript checks
9. Test in multiple browsers
10. Deploy and monitor

---

## 💡 Remember

> "The best learning experience is interactive, visual, and progressive. Every topic should feel like a journey from curiosity to mastery."

### Success Criteria
A successful topic page:
- ✅ Loads without errors
- ✅ Works on all screen sizes
- ✅ Engages learners at all levels
- ✅ Provides immediate feedback
- ✅ Makes complex concepts clear
- ✅ Inspires continued learning
- ✅ Follows all project conventions
- ✅ Maintains consistent theming
- ✅ Passes all accessibility checks
- ✅ Achieves educational goals

---

## 🆘 Quick Reference

### Common Pitfalls to Avoid
- ❌ Centered content (use full width)
- ❌ Missing visual diagrams
- ❌ No playground examples
- ❌ Inconsistent theming
- ❌ Poor mobile experience
- ❌ External tutorial links
- ❌ Missing dark mode support
- ❌ Overly technical without context
- ❌ Too simple without depth
- ❌ No interactive elements

### Quality Indicators
- ✅ Can a beginner understand it?
- ✅ Does it challenge experts?
- ✅ Are examples realistic?
- ✅ Can users practice immediately?
- ✅ Is navigation intuitive?
- ✅ Does it look professional?
- ✅ Is it enjoyable to use?
- ✅ Would you recommend it to others?

---

**Last Updated**: November 2025  
**Project**: CoderPod Learning Platform  
**Maintained by**: Development Team

