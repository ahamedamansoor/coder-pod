# Creating New Language Interview Questions

This guide explains how to create a new language card, route, and interview questions content following the same layout and style as React.

## 📋 Overview

To add a new language (e.g., Vue, Svelte, etc.), you need to create:
1. Route page (`/app/prepare/{language}/interview-questions/page.tsx`)
2. Interview questions component (`/components/languages/{language}/topics/{language}-interview-questions.tsx`)
3. Update languages data (`/data/languages/index.ts`)
4. Update prepare page (`/app/prepare/page.tsx`)

---

## 🗂️ File Structure

```
src/
├── app/prepare/{language}/interview-questions/
│   └── page.tsx                           # Route page
├── components/languages/{language}/topics/
│   └── {language}-interview-questions.tsx # Main component
├── data/languages/
│   ├── index.ts                           # Languages registry
│   └── {language}.ts                      # Language data
└── app/prepare/page.tsx                   # Dashboard cards
```

---

## 📝 Step-by-Step Process

### Step 1: Create Language Data File

Create `/data/languages/{language}.ts`:

```typescript
import { Language } from './types';

export const {language}: Language = {
  slug: '{language-slug}',
  name: '{Language Name}',
  description: 'Master {language} concepts from basics to advanced topics',
  topics: [
    {
      slug: 'interview-questions',
      title: 'Interview Questions',
      explanation: 'Comprehensive interview questions covering all aspects of {language}',
      category: 'interviews'
    }
  ],
  enabled: true
};
```

### Step 2: Update Languages Registry

Add to `/data/languages/index.ts`:

```typescript
import { {language} } from './{language}';

export const languages: Language[] = [
  // ... existing languages
  { ...{language}, enabled: true },
];
```

### Step 3: Create Route Page

Create `/app/prepare/{language}/interview-questions/page.tsx`:

```typescript
'use client';

import {Language}InterviewQuestions from '@/components/languages/{language}/topics/{language}-interview-questions';

export default function {Language}InterviewQuestionsPage() {
  return <{Language}InterviewQuestions />;
}
```

### Step 4: Create Interview Questions Component

Create `/components/languages/{language}/topics/{language}-interview-questions.tsx`:

```typescript
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Brain, BookOpen, Target, TrendingUp } from 'lucide-react';
import { marked } from 'marked';
import InterviewHeader from '@/components/shared/interview-header';
import { AlertDescription } from '@/components/ui/alert';

// Easy Questions (10-15 questions)
const easyQuestions = [
  {
    question: "What is {language} and its main features?",
    idealAnswer: `**{Language}** is [brief description].

**Main Features:**
- **Feature 1**: Description
- **Feature 2**: Description
- **Feature 3**: Description

**Basic Example:**
\`\`\`{language-code}
// Your code example here
\`\`\``
  },
  // Add more easy questions...
];

// Medium Questions (10-15 questions)
const mediumQuestions = [
  {
    question: "How does {language} handle state management?",
    idealAnswer: `**State Management** in {language}...

**Example:**
\`\`\`{language-code}
// Code example
\`\`\``
  },
  // Add more medium questions...
];

// Hard Questions (10-15 questions)
const hardQuestions = [
  {
    question: "What are advanced patterns in {language}?",
    idealAnswer: `**Advanced Patterns**...

**Implementation:**
\`\`\`{language-code}
// Advanced code example
\`\`\``
  },
  // Add more hard questions...
];

// Q&A Component
function QnA({ questions }: { questions: Array<{ question: string; idealAnswer: string }> }) {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index} className="border border-slate-200 dark:border-slate-700">
          <Accordion type="single" collapsible className="w-full border-0 bg-transparent">
            <AccordionItem value={`item-${index}`} className="border-0">
              <AccordionTrigger className="text-left hover:no-underline p-4">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                      {q.question}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div 
                  className="prose prose-sm max-w-none dark:prose-invert text-slate-700 dark:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: marked(q.idealAnswer) }}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}

export default function {Language}InterviewQuestions() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      {/* Header */}
      <InterviewHeader showBackButton={true} currentLanguage="{Language}" />
      
      {/* Title */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            {Language} Interview Questions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Master {language} concepts with comprehensive interview questions
          </p>
        </div>
      </div>

      {/* Questions Tabs */}
      <div className="w-full max-w-4xl mx-auto">
        <Tabs defaultValue="easy" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="easy">Easy</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="hard">Hard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="easy" className="space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <Brain className="w-5 h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription>
                  Fundamental concepts and basic interview questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QnA questions={easyQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <Target className="w-5 h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription>
                  Intermediate concepts and practical scenarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QnA questions={mediumQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <TrendingUp className="w-5 h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription>
                  Advanced topics and complex scenarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QnA questions={hardQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
```

### Step 5: Update Prepare Page Dashboard

Add to `/app/prepare/page.tsx` in the `languagesData` array:

```typescript
{
  title: '{Language}',
  description: 'Master {language} concepts from basics to advanced topics',
  icon: <{IconComponent} className="w-8 h-8" />,
  color: '{color}',
  stats: {
    totalQuestions: {total},
    difficulty: 'Beginner to Expert',
    estimatedTime: '{time}',
    progress: 100
  },
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5'
  ],
  href: '/prepare/{language-slug}/interview-questions',
  status: 'available'
}
```

### Step 6: Update Interview Header

Add to `/components/shared/interview-header.tsx`:

1. Add icon import
2. Update `getIcon()` function
3. Update `getColor()` function

---

## 🎨 Content Guidelines

### Question Structure

Each question should have:
- **Clear, concise question**: Common interview topics
- **Comprehensive answer**: Detailed explanation with:
  - Key concepts and definitions
  - Code examples with syntax highlighting
  - Best practices
  - Common pitfalls

### Difficulty Levels

- **Easy (10-15 questions)**: Basic concepts, syntax, fundamentals
- **Medium (10-15 questions)**: Intermediate patterns, practical usage
- **Hard (10-15 questions)**: Advanced topics, architecture, optimization

### Code Examples

- Use proper syntax highlighting with language identifier
- Keep examples concise but complete
- Include comments for complex logic
- Show both good and bad practices when relevant

---

## 📋 Example: Creating Vue.js

Let's create Vue.js as a complete example:

### 1. Language Data (`/data/languages/vue.ts`)

```typescript
import { Language } from './types';

export const vue: Language = {
  slug: 'vue',
  name: 'Vue',
  description: 'Master Vue.js concepts from basics to advanced composition API and ecosystem',
  topics: [
    {
      slug: 'interview-questions',
      title: 'Interview Questions',
      explanation: 'Comprehensive Vue.js interview questions covering components, composition API, and ecosystem',
      category: 'interviews'
    }
  ],
  enabled: true
};
```

### 2. Update Registry (`/data/languages/index.ts`)

```typescript
import { vue } from './vue';

export const languages: Language[] = [
  // ... existing
  { ...vue, enabled: true },
];
```

### 3. Route Page (`/app/prepare/vue/interview-questions/page.tsx`)

```typescript
'use client';

import VueInterviewQuestions from '@/components/languages/vue/topics/vue-interview-questions';

export default function VueInterviewQuestionsPage() {
  return <VueInterviewQuestions />;
}
```

### 4. Dashboard Card (`/app/prepare/page.tsx`)

```typescript
{
  title: 'Vue',
  description: 'Master Vue.js concepts from basics to advanced composition API and ecosystem',
  icon: <Layers className="w-8 h-8" />,
  color: 'green',
  stats: {
    totalQuestions: 30,
    difficulty: 'Beginner to Expert',
    estimatedTime: '2-3 hours',
    progress: 100
  },
  features: [
    'Composition API',
    'Reactivity System',
    'Component Patterns',
    'Vue Router',
    'Vuex/Pinia'
  ],
  href: '/prepare/vue/interview-questions',
  status: 'available'
}
```

### 5. Interview Header Update

Add to `getIcon()` function:
```typescript
case 'Vue': return <Layers className="w-4 h-4" />;
```

Add to `getColor()` function:
```typescript
case 'Vue': return 'green';
```

---

## 🎯 Complete Example: Vue.js Implementation

Here's the complete Vue.js implementation that was successfully added to the application, serving as a reference for future language implementations.

### 📁 Files Created/Modified

1. **Language Data**: `/src/data/languages/vue.ts`
2. **Registry Update**: `/src/data/languages/index.ts`
3. **Route Page**: `/src/app/prepare/vue/interview-questions/page.tsx`
4. **Main Component**: `/src/components/languages/vue/topics/vue-interview-questions.tsx`
5. **Dashboard Card**: `/src/app/prepare/page.tsx` (updated)
6. **Header Integration**: `/src/components/shared/interview-header.tsx` (updated)

### 🎨 Vue.js Implementation Details

#### Language Data File
```typescript
// /src/data/languages/vue.ts
import { Language } from './types';

export const vue: Language = {
  slug: 'vue',
  name: 'Vue.js',
  description: 'Progressive JavaScript framework for building user interfaces',
  icon: 'Vue.js',
  color: '#4FC08D',
  topics: [
    {
      slug: 'interview-questions',
      title: 'Interview Questions',
      explanation: 'Comprehensive Vue.js interview questions covering components, composition API, and ecosystem',
      category: 'interviews'
    }
  ],
  enabled: true
};
```

#### Route Page
```typescript
// /src/app/prepare/vue/interview-questions/page.tsx
'use client';

import VueInterviewQuestions from '@/components/languages/vue/topics/vue-interview-questions';

export default function VueInterviewQuestionsPage() {
  return <VueInterviewQuestions />;
}
```

#### Dashboard Card Integration
```typescript
// Added to /src/app/prepare/page.tsx languagesData array
{
  title: 'Vue.js',
  description: 'Master Vue.js framework from basic components to advanced patterns, Composition API, and modern Vue development',
  icon: <Sparkles className="w-8 h-8" />,
  color: 'green',
  stats: {
    totalQuestions: 26,
    difficulty: 'Beginner to Expert',
    estimatedTime: '1-2 hours',
    progress: 100
  },
  features: [
    'Components & Directives',
    'Composition API',
    'Vue Router & Pinia',
    'Reactivity System',
    'Advanced Patterns',
    'Performance Optimization'
  ],
  href: '/prepare/vue/interview-questions',
  status: 'available'
}
```

#### Header Integration
```typescript
// Added to /src/components/shared/interview-header.tsx

// Icon import
import { Sparkles } from 'lucide-react';

// Dashboard languages filter
const dashboardLanguages = enabledLanguages.filter(lang => 
  ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Angular', 'Vue.js'].includes(lang.name)
);

// Icon mapping
case 'Vue.js': return <Sparkles className="w-4 h-4" />;

// Color mapping
case 'Vue.js': return 'green';
```

### 📊 Content Statistics

**Total Questions**: 26
- **Easy Level**: 17 questions (5-10 min)
- **Medium Level**: 6 questions (10-15 min)  
- **Hard Level**: 3 questions (15-20 min)

**Key Topics Covered**:
- Vue.js fundamentals and features
- Vue 2 vs Vue 3 differences
- Components and Composition API
- Template syntax and directives
- Props, events, and v-model
- Computed properties and watchers
- Lifecycle hooks and slots
- Advanced patterns and state management

### 🎯 Layout Features

The Vue.js implementation includes:

- **Full-width layout**: `w-screen` with responsive padding
- **Sticky navigation**: Tabs stay visible while scrolling
- **Color-coded difficulty**: Green (easy), Yellow (medium), Red (hard)
- **Numbered questions**: Visual progression with numbered badges
- **Rich content**: Markdown rendering with syntax highlighting
- **Interactive accordion**: Expandable Q&A sections
- **Responsive design**: Works on all device sizes

### 🔧 Technical Implementation

**Component Structure**:
```typescript
export default function VueInterviewQuestions() {
  const [activeTab, setActiveTab] = useState('easy');
  
  const questions = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
  };
  
  // Returns full-screen layout with sticky tabs
}
```

**QnA Component**:
```typescript
function QnA({ questions }) {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index}>
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-start gap-3">
                  <div className="number-badge">{index + 1}</div>
                  <span>{q.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="answer-section">
                  <div dangerouslySetInnerHTML={{ __html: String(marked.parse(q.idealAnswer)) }} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}
```

### ✅ Integration Checklist

- [x] Language data file created with Vue.js metadata
- [x] Added to languages registry with proper configuration
- [x] Route page created and imports component correctly
- [x] Interview questions component with 26 comprehensive questions
- [x] Dashboard card added with green theme and Vue.js branding
- [x] Interview header updated with Sparkles icon and green color
- [x] All questions include detailed answers with code examples
- [x] Component matches React layout exactly (full-width, sticky tabs)
- [x] Route tested: `/prepare/vue/interview-questions` works perfectly
- [x] Category mapping updated to include Vue.js in frontend

### 🎉 Final Result

The Vue.js implementation provides:
- **Seamless integration** with existing application architecture
- **Consistent UX** matching React interview questions exactly
- **Comprehensive content** covering Vue.js from basics to advanced topics
- **Professional styling** with Vue.js brand colors and theming
- **Full functionality** including navigation, search, and responsive design
- **Scalable structure** that can serve as a template for future languages

This implementation demonstrates the complete process from start to finish and can be used as a reference for adding any new language to the interview questions system.

---

## ✅ Checklist Before Completion

- [ ] Language data file created with proper structure
- [ ] Added to languages registry with `enabled: true`
- [ ] Route page created and imports component correctly
- [ ] Interview questions component created with all three difficulty levels
- [ ] Dashboard card added to prepare page
- [ ] Interview header updated with icon and color
- [ ] All questions have comprehensive answers with code examples
- [ ] Code examples use proper syntax highlighting
- [ ] Component follows the same layout as React
- [ ] Test the route: `/prepare/{language}/interview-questions`

---

## 🎉 Result

Following this guide will create a fully functional language interview questions page that:
- Matches the React layout and styling exactly
- Includes collapsible Q&A sections with markdown rendering
- Has three difficulty levels (Easy, Medium, Hard)
- Integrates with the existing navigation and header
- Appears on the prepare page dashboard
- Works with the dropdown language selector

The new language will be seamlessly integrated into the existing application with consistent UX and functionality.
