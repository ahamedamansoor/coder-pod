# CodeSnippet Component - Usage Guide

The `CodeSnippet` component displays code with a split layout and can open code in the web playground with customizable visible panels.

## Features

- **Split Layout**: Code on the left, info/features on the right
- **Run in Playground**: Button to open code in web playground
- **Customizable Panels**: Choose which panels (HTML, CSS, JS, Preview, Console) to show
- **Syntax Highlighting**: Monaco editor-style code display
- **Line Numbers**: Optional line numbering
- **Highlight Lines**: Highlight specific lines of code
- **Copy to Clipboard**: One-click code copying
- **Theme Support**: Multiple color themes

## Basic Usage

```tsx
import { CodeSnippet } from '@/components/shared';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

function MyComponent() {
  const { openWithContent } = useWebPlayground();

  const jsCode = `// Simple JavaScript example
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome \${name}\`;
}

const user = "Developer";
greet(user);

// Try it yourself!
console.log("Edit this code and run it!");`;

  return (
    <CodeSnippet
      title="JavaScript Basics"
      description="A simple greeting function example"
      code={jsCode}
      language="javascript"
      colorTheme="yellow"
      showLineNumbers={true}
      features={[
        'Template literals',
        'Arrow functions',
        'Console logging'
      ]}
      tips={[
        'Try changing the name variable',
        'Add more console.log statements to see the output'
      ]}
      playgroundConfig={{
        js: jsCode,
        html: '',
        css: '',
        visiblePanels: ['js', 'console'] // Only show JS editor and Console
      }}
      onOpenWebPlayground={openWithContent}
    />
  );
}
```

## Props

### Required Props

- `code` - The code to display (string)
- `title` - Title for the code snippet (string)

### Optional Props

- `description` - Description text shown under title
- `language` - Programming language (`'javascript'` | `'typescript'` | `'html'` | `'css'` | `'jsx'` | `'tsx'`)
- `colorTheme` - Color theme (`'blue'` | `'purple'` | `'emerald'` | `'amber'` | `'orange'` | `'pink'` | `'cyan'` | `'red'` | `'green'` | `'yellow'`)
- `icon` - Custom icon component (Lucide icon)
- `showLineNumbers` - Show line numbers (default: `true`)
- `highlightLines` - Array of line numbers to highlight (e.g., `[3, 5, 7]`)
- `features` - Array of feature strings to display in right panel
- `tips` - Array of tip strings to display in right panel
- `playgroundConfig` - Configuration for web playground
- `onOpenWebPlayground` - Function to open web playground (from `useWebPlayground()`)

## Playground Configuration

The `playgroundConfig` prop controls what opens in the web playground:

```tsx
playgroundConfig={{
  html: '<!DOCTYPE html>...',  // HTML code (optional)
  css: 'body { ... }',          // CSS code (optional)
  js: 'console.log(...)',       // JavaScript code (optional, defaults to main code)
  visiblePanels: ['js', 'console'] // Which panels to show
}}
```

### Visible Panels Options

- `'html'` - Show HTML editor panel
- `'css'` - Show CSS editor panel
- `'js'` - Show JavaScript editor panel
- `'preview'` - Show preview panel (iframe)
- `'console'` - Show console panel

**Common Configurations:**

```tsx
// JavaScript-only with console
visiblePanels: ['js', 'console']

// Full web development
visiblePanels: ['html', 'css', 'js', 'preview']

// CSS-focused
visiblePanels: ['css', 'preview']

// HTML markup demo
visiblePanels: ['html', 'preview']
```

## Complete Examples

### Example 1: JavaScript Algorithm

```tsx
<CodeSnippet
  title="Binary Search Algorithm"
  description="Efficient search in sorted arrays"
  code={`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      console.log(\`Found \${target} at index \${mid}\`);
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  console.log(\`\${target} not found\`);
  return -1;
}

// Test it
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
binarySearch(numbers, 7);`}
  language="javascript"
  colorTheme="yellow"
  highlightLines={[5, 8, 9, 10]}
  features={[
    'O(log n) time complexity',
    'Works on sorted arrays',
    'Efficient for large datasets'
  ]}
  tips={[
    'Array must be sorted for binary search to work',
    'Try different target values to see how it performs'
  ]}
  playgroundConfig={{
    js: `// Code here`,
    visiblePanels: ['js', 'console']
  }}
  onOpenWebPlayground={openWithContent}
/>
```

### Example 2: TypeScript Interface

```tsx
<CodeSnippet
  title="TypeScript Interfaces"
  description="Define object shapes with strong typing"
  code={`interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

const product: Product = {
  id: 101,
  name: "Laptop",
  price: 999,
  inStock: true
};

console.log(user);
console.log(product);`}
  language="typescript"
  colorTheme="blue"
  features={[
    'Type safety',
    'Optional properties with ?',
    'Auto-completion in IDE'
  ]}
  playgroundConfig={{
    js: `// TypeScript code`,
    visiblePanels: ['js', 'console']
  }}
  onOpenWebPlayground={openWithContent}
/>
```

### Example 3: React Component with JSX

```tsx
<CodeSnippet
  title="React Functional Component"
  description="Modern React with hooks"
  code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`}
  language="jsx"
  colorTheme="cyan"
  highlightLines={[4]}
  features={[
    'useState hook',
    'Event handlers',
    'JSX syntax'
  ]}
  tips={[
    'Hooks must be called at the top level',
    'State updates trigger re-renders'
  ]}
  playgroundConfig={{
    html: `<div id="root"></div>`,
    js: `// React code here`,
    visiblePanels: ['js', 'preview', 'console']
  }}
  onOpenWebPlayground={openWithContent}
/>
```

## Color Themes

Available themes match language conventions:

- `blue` - TypeScript, CSS
- `yellow` - JavaScript
- `green` - Success, validation
- `orange` - HTML, warnings
- `purple` - Styling, design
- `cyan` - React, frameworks
- `red` - Errors, Java
- `pink` - Special features
- `emerald` - Node.js, backend
- `amber` - Highlights, important notes

## Best Practices

1. **Choose appropriate visible panels**: Only show panels relevant to the code
   - JavaScript functions: `['js', 'console']`
   - HTML markup: `['html', 'preview']`
   - CSS styling: `['css', 'preview']`
   - Full examples: `['html', 'css', 'js', 'preview']`

2. **Highlight key lines**: Use `highlightLines` to draw attention to important concepts

3. **Provide context**: Use `features` and `tips` to explain what's special about the code

4. **Match colors to languages**: Use conventional colors (yellow for JS, blue for TS, etc.)

5. **Keep code focused**: Show one concept per snippet, don't mix multiple topics

## Integration with Web Playground

The component integrates seamlessly with the `WebPlaygroundProvider`:

```tsx
// In your app layout or page
import { WebPlaygroundProvider } from '@/components/shared/playground/web-playground-context';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';

export default function Layout({ children }) {
  return (
    <WebPlaygroundProvider>
      {children}
      <WebPlaygroundModal />
    </WebPlaygroundProvider>
  );
}
```

Then in your component:

```tsx
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

function MyCodeExample() {
  const { openWithContent } = useWebPlayground();
  
  // Use CodeSnippet with onOpenWebPlayground={openWithContent}
}
```

## Styling

The component adapts to dark mode automatically and follows your theme configuration. All color themes have dark mode variants for optimal readability.
