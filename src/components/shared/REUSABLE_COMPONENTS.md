# Reusable Common Components

This directory contains beautifully designed, reusable components that can be used across all topic pages (HTML, CSS, JavaScript, React, etc.).

## Components

### 1. **CodeSnippetWithOutput**

A professional component to display code snippets with their expected output.

#### Features:
- ✨ Syntax-highlighted code display with line numbers
- 📋 Copy to clipboard functionality
- 🎨 Multiple color themes (blue, purple, emerald, amber)
- 🌓 Full dark mode support
- 📱 Responsive design
- 🔢 Optional line numbers
- 💬 Live output preview section
- 🎯 Custom icons per snippet

#### Usage:

```tsx
import { CodeSnippetWithOutput } from '@/components/shared';
import { Terminal } from 'lucide-react';

<CodeSnippetWithOutput
  title="Console Logging Example"
  description="Print messages to the browser console"
  code={`console.log('Hello, World!');
console.log('JavaScript is awesome!');`}
  output={[
    "Hello, World!",
    "JavaScript is awesome!"
  ]}
  language="javascript"
  colorTheme="blue"
  icon={Terminal}
  showLineNumbers={true}
/>
```

#### Props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Title of the code snippet |
| `description` | `string` | Optional | Brief description of what the code does |
| `code` | `string` | Required | The source code to display |
| `output` | `string[]` | `[]` | Array of output lines |
| `language` | `'javascript' \| 'html' \| 'css' \| 'typescript'` | `'javascript'` | Programming language |
| `colorTheme` | `'blue' \| 'purple' \| 'emerald' \| 'amber'` | `'blue'` | Color theme |
| `showLineNumbers` | `boolean` | `true` | Whether to show line numbers |
| `icon` | `React.ComponentType` | `Code2` | Icon component from lucide-react |

#### Output Formatting:
The output section supports special prefixes for colored output:
- Lines starting with `//` → Gray (comments)
- Lines starting with `✓` or `✅` → Green (success)
- Lines starting with `✗` or `❌` → Red (error)
- Lines starting with `>` → Blue (input/prompt)

#### Color Themes:
Each theme provides consistent colors across all UI elements:
- **Blue**: Technical/professional feel (default)
- **Purple**: Creative/modern feel
- **Emerald**: Success/growth feel
- **Amber**: Warning/attention feel

---

### 2. **InteractivePlayground**

A clean, minimal component for coding playgrounds (JavaScript, Java, Python, etc.) with a professional design.

#### Features:
- ▸ Title with arrow indicator (ChevronRight)
- 📝 Descriptive subtitle text
- 🚀 Prominent gradient button on the left
- ✓ Circular checkmark badges on the right
- 🎨 Multiple color themes
- 🌓 Full dark mode support
- 📱 Responsive layout
- ✨ Minimal, professional design

#### Usage:

```tsx
import { InteractivePlayground } from '@/components/shared';

<InteractivePlayground
  title="Interactive Playground"
  description="Explore comprehensive JavaScript examples with a live code editor, real-time preview, console output, and instant feedback."
  features={[
    'Syntax Highlighting',
    'Live Preview',
    'Console Output',
    'Auto-Completion',
  ]}
  buttonText="Open JavaScript Playground"
  onLaunchPlayground={(html, css, js) => {
    // Your playground launch logic
    openWebPlayground(html, css, js);
  }}
  playgroundData={{
    html: '<h1>Hello World</h1>',
    css: 'h1 { color: blue; }',
    js: 'console.log("Hello!");',
  }}
  colorTheme="blue"
/>
```

#### Props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Interactive Playground'` | Main title with arrow |
| `description` | `string` | Default description | Descriptive subtitle text |
| `features` | `string[]` | Default features array | Short feature names for badges |
| `buttonText` | `string` | `'Open Complete Playground'` | Button text |
| `onLaunchPlayground` | `(html, css, js) => void` | Required | Callback when button is clicked |
| `playgroundData` | `{ html, css, js }` | Required | Code to load in playground |
| `colorTheme` | `'blue' \| 'purple' \| 'emerald' \| 'amber'` | `'blue'` | Color theme |

#### Layout:
- **Title**: Colored title with ChevronRight arrow
- **Description**: Gray subtitle text
- **Row**: Blue gradient button (left) + circular checkmark badges (right)

---

## Design System Integration

### Color Themes

Both components support the same color themes to maintain consistency:

```typescript
type ColorTheme = 'blue' | 'purple' | 'emerald' | 'amber';
```

**When to use each theme:**
- **Blue**: HTML, JavaScript, default/neutral content
- **Purple**: CSS, creative/visual topics
- **Emerald**: Success states, data/API topics
- **Amber**: Performance, warnings, optimization topics

### Icons

Both components use **Lucide React** icons. Import from `'lucide-react'`:

```tsx
import { Terminal, Code2, Eye, Layers, Sparkles } from 'lucide-react';
```

Common icons to use:
- `Terminal` → Console/CLI examples
- `Code2` → Code snippets
- `Eye` → Preview/visual output
- `Layers` → Multiple files/layers
- `Sparkles` → Interactive/special features
- `Zap` → Performance/speed
- `Globe` → Web/network
- `Server` → Backend/API

---

## Best Practices

### 1. **Consistent Theming**
Use the same color theme throughout a page:
```tsx
// All code snippets on JavaScript page use 'blue' theme
<CodeSnippetWithOutput colorTheme="blue" />
<InteractivePlayground colorTheme="blue" />
```

### 2. **Meaningful Output**
Make output realistic and educational:
```tsx
// ❌ Bad - too simple
output={["result"]}

// ✅ Good - shows actual console output
output={[
  "// Fetching data...",
  "✓ Response received",
  "{ id: 1, name: 'John' }"
]}
```

### 3. **Progressive Complexity**
Start with simple examples, then increase complexity:
```tsx
// First example - basic
<CodeSnippetWithOutput code="console.log('Hello');" />

// Second example - intermediate
<CodeSnippetWithOutput code="const x = 5;\nconsole.log(x * 2);" />

// Third example - advanced
<CodeSnippetWithOutput code={complexAsyncExample} />
```

### 4. **Descriptive Titles**
Use clear, action-oriented titles:
```tsx
// ❌ Bad
title="Example 1"

// ✅ Good
title="Print Messages to Console"
title="Fetch Data from API"
title="Update DOM Elements"
```

---

## Examples by Language

### HTML
```tsx
<CodeSnippetWithOutput
  title="Basic HTML Structure"
  code="<h1>Welcome</h1>\n<p>Hello World</p>"
  language="html"
  colorTheme="blue"
/>
```

### CSS
```tsx
<CodeSnippetWithOutput
  title="Center an Element"
  code=".container {\n  display: flex;\n  justify-content: center;\n}"
  language="css"
  colorTheme="purple"
/>
```

### JavaScript
```tsx
<CodeSnippetWithOutput
  title="Array Methods"
  code="const nums = [1, 2, 3];\nconst doubled = nums.map(x => x * 2);"
  output={["[2, 4, 6]"]}
  language="javascript"
  colorTheme="blue"
/>
```

---

## Responsive Behavior

Both components are fully responsive:
- **Mobile**: Single column, stacked layout
- **Tablet**: 2-column grid for features
- **Desktop**: Full multi-column layout with optimal spacing

---

## Accessibility

Both components follow accessibility best practices:
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ High contrast ratios
- ✅ Screen reader friendly

---

## Future Enhancements

Planned improvements:
- [ ] Syntax highlighting with Prism/Highlight.js
- [ ] Editable code blocks
- [ ] Embedded mini-playground
- [ ] Export code to CodePen/CodeSandbox
- [ ] More language support (Python, Java, etc.)
- [ ] Custom themes
- [ ] Animation examples

---

## Migration Guide

### Before (Old Code):
```tsx
<div className="code-example">
  <pre>{code}</pre>
  <div className="output">{output}</div>
</div>
```

### After (New Component):
```tsx
<CodeSnippetWithOutput
  title="Example"
  code={code}
  output={output}
  colorTheme="blue"
/>
```

**Benefits:**
- ✅ Less code to write
- ✅ Consistent styling
- ✅ Built-in copy functionality
- ✅ Professional appearance
- ✅ Dark mode support
- ✅ Responsive by default

---

## Support

For questions or issues with these components:
1. Check this documentation
2. Look at examples in `/components/javascript/topics/javascript-what-is-javascript.tsx`
3. Review the component source code for advanced usage

---

**Last Updated:** November 2025  
**Maintained By:** CODER POD Development Team
