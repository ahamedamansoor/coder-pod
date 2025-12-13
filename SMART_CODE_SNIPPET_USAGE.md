# SmartCodeSnippet Component Usage Guide

## Overview
`SmartCodeSnippet` is an intelligent code display component that automatically detects whether your JavaScript code has DOM manipulation and displays it appropriately:

- **Pure JavaScript** → Shows code + output (using CodeSnippetWithOutput)
- **DOM Manipulation Code** → Shows code + live preview button (opens interactive playground)

## Features

✅ **Automatic Detection** - Detects DOM patterns like `document.`, `getElementById`, `querySelector`, etc.  
✅ **Dual Display Modes** - Pure JS with output OR DOM code with preview  
✅ **Customizable** - Support for custom HTML/CSS or auto-generation  
✅ **Theme Support** - Multiple color themes (blue, purple, amber, emerald, etc.)  
✅ **Output Display** - Shows expected output for both modes  

---

## Usage Examples

### 1. Pure JavaScript (No DOM) - Shows Code + Output

```tsx
import { SmartCodeSnippet } from '@/components/shared';

<SmartCodeSnippet
  title="Array Methods"
  description="Working with JavaScript arrays"
  code={`// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((a, b) => a + b, 0);

console.log('Doubled:', doubled);
console.log('Sum:', sum);`}
  output={[
    'Doubled: [2, 4, 6, 8, 10]',
    'Sum: 15',
  ]}
  language="javascript"
  colorTheme="amber"
/>
```

**Result**: Displays code snippet with output section below (using CodeSnippetWithOutput)

---

### 2. DOM Manipulation Code - Shows Code + Live Preview Button

```tsx
import { SmartCodeSnippet } from '@/components/shared';

<SmartCodeSnippet
  title="Button Click Event"
  description="Responding to user interactions"
  code={`// DOM Event Handling
const button = document.getElementById('myButton');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  output.textContent = 'Button clicked!';
  console.log('Click event fired');
});`}
  html={`<div class="container">
  <button id="myButton">Click Me</button>
  <p id="output">Waiting for click...</p>
</div>`}
  css={`.container {
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}`}
  output={[
    '// Click the button to see the output change',
    'Click event fired',
  ]}
  language="javascript"
  colorTheme="blue"
/>
```

**Result**: Displays code snippet with "Open Live Preview" button that launches the interactive playground

---

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Title of the code snippet |
| `code` | `string` | JavaScript code to display |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | - | Description text below title |
| `output` | `string[]` | - | Expected output lines |
| `language` | `'javascript' \| 'typescript' \| 'html' \| 'css'` | `'javascript'` | Programming language |
| `colorTheme` | `'blue' \| 'purple' \| 'emerald' \| 'amber' \| 'orange' \| 'pink' \| 'cyan'` | `'blue'` | Color theme |
| `icon` | `React.ComponentType` | `Code2` | Icon component from lucide-react |
| `html` | `string` | Auto-generated | Custom HTML for preview |
| `css` | `string` | Auto-generated | Custom CSS for preview |

---

## How Detection Works

The component scans the code for DOM-related patterns:

```typescript
const domPatterns = [
  /document\./,
  /getElementById/,
  /querySelector/,
  /getElementsBy/,
  /createElement/,
  /addEventListener/,
  /innerHTML/,
  /textContent/,
  /appendChild/,
  /classList/,
  /window\./,
];
```

If **any pattern matches** → Shows live preview button  
If **no patterns match** AND `output` provided → Shows code + output

---

## Auto-Generated HTML/CSS

When you don't provide custom HTML/CSS, the component generates basic structures:

### Default HTML Template
```html
<!DOCTYPE html>
<html>
<head>
  <title>Interactive Demo</title>
</head>
<body>
  <div class="container">
    <h1>Interactive Demo</h1>
    <div id="output"></div>
    <button id="myButton">Click Me!</button>
  </div>
</body>
</html>
```

### Default CSS Template
```css
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  text-align: center;
}
/* ... more styles ... */
```

You can override these by providing your own `html` and `css` props.

---

## Color Themes

Available themes with their gradient colors:

- **blue**: Blue → Cyan
- **purple**: Purple → Pink
- **amber**: Amber → Yellow
- **emerald**: Emerald → Green
- **orange**: Orange → Red
- **pink**: Pink → Rose
- **cyan**: Cyan → Teal

---

## Complete Example in a Component

```tsx
'use client';

import React from 'react';
import { SmartCodeSnippet } from '@/components/shared';
import { Code2, Zap } from 'lucide-react';

export default function MyJavaScriptLesson() {
  return (
    <div className="space-y-8">
      {/* Pure JS Example */}
      <SmartCodeSnippet
        title="Variables & Math"
        description="Basic JavaScript operations"
        code={`const x = 10;
const y = 20;
const sum = x + y;

console.log('Sum:', sum);
console.log('Product:', x * y);`}
        output={[
          'Sum: 30',
          'Product: 200',
        ]}
        colorTheme="amber"
        icon={Code2}
      />

      {/* DOM Example */}
      <SmartCodeSnippet
        title="Interactive Counter"
        description="Building an interactive counter with JavaScript"
        code={`let count = 0;
const btn = document.getElementById('btn');
const display = document.getElementById('display');

btn.addEventListener('click', () => {
  count++;
  display.textContent = \`Count: \${count}\`;
});`}
        html={`<div class="counter">
  <h2 id="display">Count: 0</h2>
  <button id="btn">Increment</button>
</div>`}
        css={`.counter {
  text-align: center;
  padding: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}`}
        output={[
          '// Click the button to increment',
          'Count: 1',
          'Count: 2',
          'Count: 3',
        ]}
        colorTheme="purple"
        icon={Zap}
      />
    </div>
  );
}
```

---

## Benefits

1. **Zero Configuration** - Works automatically based on code content
2. **Consistent UX** - Same component, different displays based on code type
3. **Educational** - Shows both static output and interactive previews
4. **Flexible** - Can provide custom HTML/CSS or use auto-generated
5. **Type-Safe** - Full TypeScript support

---

## Tips

💡 **For Pure JS**: Always provide the `output` array to show expected results  
💡 **For DOM Code**: Provide custom `html` and `css` for better preview experience  
💡 **Color Themes**: Match theme to your language (amber for JS, blue for general)  
💡 **Icons**: Use relevant icons from lucide-react (Code2, Zap, Play, etc.)  

---

## Migration from Regular CodeSnippet

### Before:
```tsx
<CodeSnippet
  title="Example"
  code={code}
  language="javascript"
/>
```

### After:
```tsx
<SmartCodeSnippet
  title="Example"
  code={code}
  output={output}  // Add this for pure JS
  language="javascript"
/>
```

That's it! The component handles the rest automatically. 🚀
