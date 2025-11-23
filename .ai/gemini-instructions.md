# Gemini AI Content Creation Instructions

## CoderPod Learning Platform - AI Content Generation Guidelines

**Model**: Gemini 2.5 Flash  
**Purpose**: Generate high-quality, interactive educational content for programming topics  
**Last Updated**: November 23, 2025

---

## 🎯 Primary Objective

Create fully redesigned, fresh, visually pleasing, and innovative learning pages for programming topics that provide the best educational experience from beginner to expert level.

---

## 📋 Core Requirements Checklist

### ✅ 1. Page Structure & Layout
- **Use PageHeader Component**
  - Import from `@/components/shared/generic-page-header`
  - Include: icon, category, title, description, colorTheme
  - Use clean, readable fonts
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

- **Content Layout Rules**
  - ❌ DO NOT center content
  - ✅ Stretch content to full viewport width
  - ✅ Use `max-w-none` or `max-w-7xl` for containers
  - ✅ Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### ✅ 2. Content Quality Standards

#### Beginner-Friendly Content
- Start with simple, clear explanations
- Use everyday analogies and metaphors
- Break complex topics into digestible chunks
- Define technical terms when first introduced
- Provide "Why this matters" context

#### Expert-Level Content
- Include advanced concepts and patterns
- Discuss performance implications
- Cover edge cases and gotchas
- Show real-world production scenarios
- Reference official specifications

#### Content Review Process
**CRITICAL**: Before creating content:
1. ✅ Check existing language data structure (`src/app/data/{language}.ts`)
2. ✅ Review what topics already exist
3. ✅ If title/concept is covered elsewhere:
   - Provide brief overview only
   - Reference the detailed section
   - Add "Learn more in [Topic Name]" links
4. ✅ Avoid content duplication

### ✅ 3. File Management

#### File Naming Convention
- **ALWAYS** prefix with language name
- Format: `{language}-{topic-slug}.tsx`
- Examples:
  - ✅ `javascript-what-is-javascript.tsx`
  - ✅ `react-hooks-overview.tsx`
  - ✅ `java-object-oriented-programming.tsx`
  - ✅ `css-flexbox-guide.tsx`
  - ✅ `html-introduction.tsx`
  - ❌ `what-is-javascript.tsx` (missing prefix)

#### Content Replacement
- **ALWAYS** delete old file when rewriting
- Don't create duplicate versions
- Update all import references
- Remove deprecated components

#### File Format
- ❌ DO NOT create `.md` files
- ✅ ONLY create `.tsx` (React/TypeScript) files
- ✅ Use `'use client';` directive at top
- ✅ Export default function component

### ✅ 4. Visual Elements (MANDATORY)

#### Diagrams for Every Concept
**REQUIREMENT**: Every major concept MUST have visual representation

**Diagram Types**:
1. **ASCII Art** - For simple concepts
   ```
   ┌─────────────────┐
   │   JavaScript    │
   │   ┌─────────┐   │
   │   │ Browser │   │
   │   └─────────┘   │
   └─────────────────┘
   ```

2. **Styled Div-Based Diagrams**
   ```tsx
   <div className="grid grid-cols-3 gap-4">
     <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
       <h3>HTML</h3>
       <p>Structure</p>
     </div>
     <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
       <h3>CSS</h3>
       <p>Styling</p>
     </div>
     <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
       <h3>JavaScript</h3>
       <p>Behavior</p>
     </div>
   </div>
   ```

3. **SVG Illustrations** - For complex flows
4. **Interactive Visual Components** - For dynamic concepts

**Visual Requirements**:
- Data flow diagrams
- Architecture patterns
- Comparison charts
- Process flows
- Memory models
- Timeline visualizations
- Hierarchy trees

### ✅ 5. Code Snippets & Themes

#### Theme Support (CRITICAL)
**MUST** maintain proper themes:
- ✅ Light mode: light background + dark text
- ✅ Dark mode: dark background + light text
- ✅ Use `dark:` prefix for dark mode styles

**Code Block Example**:
```tsx
<div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
  <pre className="text-gray-900 dark:text-gray-100 font-mono text-sm">
    <code>{`const greeting = "Hello, World!";
console.log(greeting);`}</code>
  </pre>
</div>
```

#### Code Example Quality
- Add comments explaining key parts
- Show progression: basic → intermediate → advanced
- Include both correct and incorrect examples
- Demonstrate real-world use cases
- Avoid contrived examples

### ✅ 6. Theme & Coloring

#### Language-Specific Color Themes
- **JavaScript**: `amber` / `yellow`
- **React**: `blue` / `cyan`
- **Java**: `orange` / `red`
- **Spring**: `green` / `emerald`
- **HTML**: `blue`
- **CSS**: `purple` / `indigo`
- **SCSS**: `pink` / `purple`

#### Apply Theme To:
- Page headers
- Section highlights
- Active menu items
- Progress indicators
- Interactive buttons
- Code block accents
- Badges and labels

**Implementation**:
```tsx
import { getThemeClasses } from '@/lib/language-themes';

const themeClasses = getThemeClasses('javascript');
// Use themeClasses.primary, themeClasses.secondary, etc.
```

### ✅ 7. Interactive Elements (MANDATORY)

#### Live Playground Integration
**REQUIREMENT**: Every major concept needs "Try it yourself" playground

**Playground Types**:
1. **Web Playground** - HTML/CSS/JavaScript
   ```tsx
   <Button onClick={() => onOpenWebPlaygroundAction?.(html, css, js)}>
     <Play className="w-4 h-4 mr-2" />
     Try in Playground
   </Button>
   ```

2. **Java Editor** - Java/Spring
   ```tsx
   onOpenEditor?.(javaCode)
   ```

3. **React Playground** - React components
   ```tsx
   openWithContent?.(reactCode)
   ```

#### Click-to-Open Navigation
**REQUIREMENT**: Implement section navigation without page reload

```tsx
const [activeSection, setActiveSection] = useState('overview');

const sections = [
  { id: 'overview', title: 'Overview', icon: Globe },
  { id: 'syntax', title: 'Syntax', icon: Code },
  { id: 'examples', title: 'Examples', icon: Play }
];

// Navigation buttons
{sections.map(section => (
  <button
    key={section.id}
    onClick={() => setActiveSection(section.id)}
    className={activeSection === section.id ? 'active' : ''}
  >
    {section.title}
  </button>
))}

// Content sections
{activeSection === 'overview' && <OverviewContent />}
{activeSection === 'syntax' && <SyntaxContent />}
```

### ✅ 8. UI Component Standards

#### Required Components (Use shadcn/ui)
```tsx
// Always import these
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
```

#### Component Usage Patterns
- **Cards**: For content sections
- **Tabs**: For switching between related content
- **Accordions**: For FAQ, expandable sections
- **Badges**: For labels, tags, status
- **Alerts**: For important notes, warnings
- **Buttons**: For interactive actions

### ✅ 9. Consistent Styling

#### Font Sizes
- Headings: `text-4xl`, `text-3xl`, `text-2xl`, `text-xl`, `text-lg`
- Body: `text-base`
- Small text: `text-sm`, `text-xs`

#### Spacing
- Section spacing: `space-y-8`
- Card padding: `p-6`, `p-8`
- Gap between items: `gap-4`, `gap-6`, `gap-8`

#### Typography
- Font weight: `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- Line height: `leading-relaxed`, `leading-loose`
- Text colors: `text-foreground`, `text-muted-foreground`

### ✅ 10. Mandatory Content Sections

Every learning page MUST include:

1. **Overview/Introduction**
   - What is it?
   - Why learn it?
   - Key benefits
   - Real-world relevance

2. **Core Concepts**
   - Fundamental principles
   - How it works
   - Visual diagrams
   - Simple explanations

3. **Syntax & Rules**
   - Language syntax
   - Important rules
   - Conventions
   - Code examples

4. **Practical Examples**
   - Basic examples
   - Intermediate examples
   - Advanced patterns
   - Live playgrounds

5. **Best Practices**
   - Do's and Don'ts
   - Common patterns
   - Performance tips
   - Industry standards

6. **Common Pitfalls**
   - Mistakes to avoid
   - Edge cases
   - Solutions
   - Debugging tips

7. **Comparison (if applicable)**
   - vs. alternatives
   - When to use
   - Trade-offs
   - Decision matrix

8. **Real-World Applications**
   - Use cases
   - Industry examples
   - Career relevance
   - Project ideas

9. **Learning Path**
   - Prerequisites
   - Next steps
   - Related topics
   - Resources

### ✅ 11. Reference Links Policy

#### ✅ ALLOWED Links
- Official language documentation
- Official framework documentation
- MDN Web Docs (for web technologies)
- W3C specifications
- ECMAScript specifications
- Official GitHub repositories

#### ❌ FORBIDDEN Links
- Third-party tutorials
- Blog posts
- YouTube videos
- Udemy/Coursera courses
- Medium articles
- Dev.to posts
- Personal blogs
- Commercial platforms

**Example**:
```tsx
// ✅ Good
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
  MDN JavaScript Documentation
</a>

// ❌ Bad
<a href="https://www.freecodecamp.org/news/javascript-tutorial">
  FreeCodeCamp Tutorial
</a>
```

### ✅ 12. Component Template

```tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Play, Code, BookOpen, Lightbulb } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface {Language}{Topic}Props {
  onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void;
  // Add other props as needed
}

export default function {Language}{Topic}({ 
  onOpenWebPlaygroundAction 
}: {Language}{Topic}Props) {
  const [activeSection, setActiveSection] = useState('overview');
  
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        icon={Code}
        category="{Language} Fundamentals"
        title="{Topic Title}"
        description="{Brief description}"
        colorTheme="amber"
      />
      
      {/* Navigation */}
      <div className="flex gap-2">
        <Button 
          onClick={() => setActiveSection('overview')}
          variant={activeSection === 'overview' ? 'default' : 'outline'}
        >
          Overview
        </Button>
        {/* More navigation buttons */}
      </div>
      
      {/* Content Sections */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          {/* Overview content with cards, diagrams, examples */}
        </div>
      )}
      
      {/* More sections */}
    </div>
  );
}
```

---

## 🎨 Visual Design Guidelines

### Color Palette
- Primary: Use language-specific theme color
- Success: `green-500`, `emerald-500`
- Warning: `yellow-500`, `amber-500`
- Error: `red-500`, `rose-500`
- Info: `blue-500`, `sky-500`

### Interactive Elements
- Hover effects: `hover:bg-opacity-90`, `hover:scale-105`
- Transitions: `transition-all duration-200`
- Active states: Different background/border
- Focus states: Ring outline for accessibility

### Responsive Design
- Mobile: Stack vertically
- Tablet: 2-column layouts
- Desktop: 3-column layouts
- Use: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 📝 Content Writing Best Practices

### Tone & Voice
- **Friendly** but **professional**
- **Encouraging** for beginners
- **Precise** for technical details
- **Practical** with real-world examples

### Sentence Structure
- Short sentences for complex topics
- Active voice preferred
- Bullet points for lists
- Numbered steps for processes

### Technical Accuracy
- Verify all code examples
- Use current language versions
- Note deprecated features
- Include error handling

---

## 🚀 Innovation & Engagement

### Interactive Features to Include
- ✅ Live code execution
- ✅ Interactive diagrams (click, hover)
- ✅ Animated transitions
- ✅ Progress indicators
- ✅ Comparison toggles
- ✅ Theme switchers
- ✅ Copy-to-clipboard buttons

### Optional Enhancements
- Code challenges/quizzes
- Visual timelines
- Animated code execution
- Interactive flowcharts
- Side-by-side comparisons
- Video demonstrations (if allowed)

---

## ✅ Pre-Generation Checklist

Before generating content, verify:

- [ ] Checked existing language data structure
- [ ] Confirmed topic doesn't duplicate existing content
- [ ] Selected appropriate language-specific color theme
- [ ] Planned visual diagrams for each concept
- [ ] Prepared code examples (basic to advanced)
- [ ] Designed click-to-open navigation structure
- [ ] Ensured light/dark theme support for code
- [ ] Only using official documentation references
- [ ] File name starts with language prefix
- [ ] Using `.tsx` format (not `.md`)

---

## 🎯 Quality Standards

### Every Generated Page Must:
1. ✅ Load without errors
2. ✅ Work on all screen sizes
3. ✅ Engage learners at all levels
4. ✅ Provide interactive examples
5. ✅ Include visual diagrams
6. ✅ Support light/dark themes
7. ✅ Have smooth navigation
8. ✅ Follow TypeScript best practices
9. ✅ Use consistent styling
10. ✅ Inspire continued learning

---

## 🛠️ Example Generation Workflow

### Step 1: Analyze Request
- Identify language (JavaScript, React, Java, etc.)
- Identify topic (What is X, How to Y, etc.)
- Determine complexity level needed

### Step 2: Check Existing Content
- Review `src/app/data/{language}.ts`
- Check for existing topics
- Identify gaps or overlaps

### Step 3: Plan Structure
- Define navigation sections
- Plan visual diagrams
- Prepare code examples
- Design interactive elements

### Step 4: Generate Content
- Start with PageHeader
- Create navigation
- Build content sections
- Add diagrams and visuals
- Include playgrounds
- Add best practices
- Include common pitfalls

### Step 5: Finalize
- Verify theme consistency
- Test light/dark modes
- Ensure responsiveness
- Check TypeScript types
- Validate prop names

---

## 📚 Common Patterns

### Pattern 1: Concept Explanation
```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Icon className="w-5 h-5" />
      Concept Title
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Simple explanation */}
    <p className="mb-4">Beginner-friendly explanation...</p>
    
    {/* Visual diagram */}
    <div className="my-6">
      {/* ASCII or styled diagram */}
    </div>
    
    {/* Code example */}
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
      <pre className="text-sm">
        <code>{/* code example */}</code>
      </pre>
    </div>
    
    {/* Playground button */}
    <Button onClick={() => /* playground */}>
      <Play className="w-4 h-4 mr-2" />
      Try it yourself
    </Button>
  </CardContent>
</Card>
```

### Pattern 2: Comparison Section
```tsx
<div className="grid md:grid-cols-2 gap-6">
  <Card className="border-green-200 bg-green-50">
    <CardHeader>
      <CardTitle className="text-green-700">✅ Good Practice</CardTitle>
    </CardHeader>
    <CardContent>
      {/* Good example */}
    </CardContent>
  </Card>
  
  <Card className="border-red-200 bg-red-50">
    <CardHeader>
      <CardTitle className="text-red-700">❌ Bad Practice</CardTitle>
    </CardHeader>
    <CardContent>
      {/* Bad example */}
    </CardContent>
  </Card>
</div>
```

### Pattern 3: Progressive Disclosure
```tsx
<Tabs defaultValue="basic">
  <TabsList>
    <TabsTrigger value="basic">Basic</TabsTrigger>
    <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
    <TabsTrigger value="advanced">Advanced</TabsTrigger>
  </TabsList>
  
  <TabsContent value="basic">
    {/* Beginner content */}
  </TabsContent>
  
  <TabsContent value="intermediate">
    {/* Intermediate content */}
  </TabsContent>
  
  <TabsContent value="advanced">
    {/* Expert content */}
  </TabsContent>
</Tabs>
```

---

## 🎓 Remember

> "The best learning experience is interactive, visual, and progressive. Every topic should feel like a journey from curiosity to mastery."

### Success = Content that is:
- ✅ **Clear** - Easy to understand
- ✅ **Complete** - Covers all aspects
- ✅ **Interactive** - Users can practice
- ✅ **Visual** - Diagrams for every concept
- ✅ **Progressive** - Beginner to expert
- ✅ **Engaging** - Fun to learn
- ✅ **Practical** - Real-world relevant
- ✅ **Accessible** - Works for everyone
- ✅ **Beautiful** - Visually pleasing
- ✅ **Consistent** - Follows all guidelines

---

**Model**: Gemini 2.5 Flash  
**Platform**: CoderPod Learning Platform  
**Maintained**: November 2025

