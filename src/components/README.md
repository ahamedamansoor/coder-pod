# Components Directory Structure

This document outlines the organized component structure based on languages and shared functionality.

## Directory Structure

```
src/components/
├── shared/                    # Shared/Generic components used across languages
│   ├── layout/               # Layout components
│   │   ├── app-layout.tsx
│   │   ├── main-header.tsx
│   │   ├── logo.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── language-switcher.tsx
│   │   └── index.ts
│   ├── learning/             # Learning/Roadmap components
│   │   ├── generic-learning-path.tsx
│   │   ├── generic-learning-roadmap.tsx
│   │   └── index.ts
│   ├── playground/           # Code playground components
│   │   ├── code-editor-sheet.tsx
│   │   ├── web-playground-context.tsx
│   │   ├── web-playground-modal.tsx
│   │   └── index.ts
│   ├── modals/               # Modal components
│   │   ├── learn-modal.tsx
│   │   ├── schedule-study-modal.tsx
│   │   ├── module-completion-celebration.tsx
│   │   ├── login-page-form.tsx
│   │   └── index.ts
│   ├── generic-content-display.tsx
│   ├── generic-grouped-topic-menu.tsx
│   ├── generic-page-header.tsx
│   ├── topic-sidebar.tsx
│   ├── topic-title.tsx
│   ├── icons.tsx
│   ├── interactive-loading.tsx
│   ├── page-loader.tsx
│   ├── mermaid-diagram.tsx
│   ├── study-sessions-widget.tsx
│   ├── ai-interview-demo.tsx
│   ├── ai-simplification.tsx
│   ├── interview-simulator.tsx
│   ├── FirebaseErrorListener.tsx
│   └── index.ts
│
├── html/                      # HTML language components
│   ├── topics/               # HTML topic components
│   │   ├── html-introduction.tsx
│   │   ├── html-document-structure.tsx
│   │   ├── html-elements-and-tags.tsx
│   │   ├── html-attributes.tsx
│   │   ├── html-headings-and-paragraphs.tsx
│   │   ├── html-text-formatting.tsx
│   │   ├── html-lists.tsx
│   │   ├── html-block-vs-inline.tsx
│   │   ├── html-character-entities.tsx
│   │   └── ... (more HTML topics)
│   ├── html-content-display.tsx
│   ├── html-learning-roadmap.tsx
│   └── index.ts
│
├── css/                       # CSS language components
│   ├── topics/               # CSS topic components
│   │   └── ... (CSS topics)
│   ├── css-content-display.tsx
│   ├── css-learning-roadmap.tsx
│   └── index.ts
│
├── scss/                      # SCSS/Sass language components
│   ├── topics/               # SCSS topic components
│   │   └── ... (SCSS topics)
│   ├── scss-content-display.tsx
│   ├── scss-learning-roadmap.tsx
│   └── index.ts
│
├── javascript/                # JavaScript language components
│   ├── javascript-content-display.tsx
│   ├── javascript-learning-roadmap.tsx
│   └── index.ts
│
├── react/                     # React library components
│   ├── topics/               # React topic components
│   │   └── ... (React topics)
│   ├── react-content-display.tsx
│   ├── react-learning-roadmap.tsx
│   ├── react-playground-context.tsx
│   ├── react-playground-modal.tsx
│   ├── react-playground.tsx
│   └── index.ts
│
├── java/                      # Java language components
│   ├── topics/               # Java topic components
│   │   └── ... (Java topics)
│   ├── java-content-display.tsx
│   ├── java-learning-demo.tsx
│   ├── java-learning-roadmap.tsx
│   └── index.ts
│
├── spring/                    # Spring framework components
│   ├── topics/               # Spring topic components
│   │   └── ... (Spring topics)
│   ├── spring-content-display.tsx
│   ├── spring-learning-roadmap.tsx
│   └── index.ts
│
└── ui/                        # UI library components (shadcn/ui)
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── select.tsx
    └── ... (other UI components)
```

## Organization Principles

### 1. **Language-Specific Components**
Each programming language/framework has its own directory:
- `html/` - HTML components
- `css/` - CSS components
- `scss/` - SCSS/Sass components
- `javascript/` - JavaScript components
- `react/` - React components
- `java/` - Java components
- `spring/` - Spring framework components

Each language directory contains:
- `{language}-content-display.tsx` - Content display component for that language
- `{language}-learning-roadmap.tsx` - Learning roadmap component
- `topics/` - Directory containing all topic-specific components
- `index.ts` - Barrel export for easy imports

### 2. **Shared Components**
Common components used across multiple languages are in `shared/`:

#### **Layout Components** (`shared/layout/`)
- Layout structure (app-layout, main-header)
- Branding (logo)
- Theme management (theme-provider, theme-toggle)
- Navigation (language-switcher)

#### **Learning Components** (`shared/learning/`)
- Generic learning path component
- Generic learning roadmap component

#### **Playground Components** (`shared/playground/`)
- Code editor
- Web playground context and modal

#### **Modal Components** (`shared/modals/`)
- Learning modals
- Study schedule modal
- Completion celebration
- Login form

#### **Utility Components** (`shared/`)
- Generic content display
- Generic topic menu
- Page headers
- Icons, loading states, etc.

### 3. **UI Components** (`ui/`)
Reusable UI library components (shadcn/ui):
- Buttons, cards, inputs, selects, etc.
- These are framework-agnostic design system components

## Import Examples

### Using Barrel Exports

```typescript
// Import from language-specific folders
import { HtmlContentDisplay, HtmlLearningRoadmap } from '@/components/html';
import { JavascriptContentDisplay } from '@/components/javascript';
import { ReactPlayground } from '@/components/react';

// Import from shared folders
import { MainHeader, Logo, ThemeToggle } from '@/components/shared/layout';
import { GenericLearningPath } from '@/components/shared/learning';
import { WebPlaygroundModal } from '@/components/shared/playground';
import { LearnModal } from '@/components/shared/modals';
import { GenericPageHeader, TopicSidebar } from '@/components/shared';

// Import from UI library
import { Button, Card, Input } from '@/components/ui';
```

### Direct Imports

```typescript
// Direct import from topic components
import HtmlLists from '@/components/html/topics/html-lists';
import BlockVsInline from '@/components/html/topics/html-block-vs-inline';
```

## Benefits of This Structure

1. **Clear Separation**: Language-specific code is isolated
2. **Reusability**: Shared components are easily accessible
3. **Scalability**: Easy to add new languages or topics
4. **Maintainability**: Clear organization makes finding components simple
5. **Tree-shaking**: Barrel exports enable better code splitting
6. **Type Safety**: TypeScript can better understand dependencies

## Migration Notes

All imports throughout the application have been updated to reflect the new structure. Key changes:

- Generic/shared components moved from root to `shared/` with subcategories
- Language-specific components moved to respective language directories
- Topic components organized under `{language}/topics/`
- Barrel exports added for convenient imports

## Adding New Components

### Adding a Language-Specific Component

1. Create component in appropriate language directory
2. Update the `index.ts` in that directory to export the new component

### Adding a Shared Component

1. Determine the appropriate subcategory (layout, learning, playground, modals, or root)
2. Create component in that directory
3. Update the relevant `index.ts`

### Adding a Topic Component

1. Create topic component in `{language}/topics/` directory
2. Import and use in the language's content display component
3. Add topic metadata to `src/app/data/{language}.ts`

