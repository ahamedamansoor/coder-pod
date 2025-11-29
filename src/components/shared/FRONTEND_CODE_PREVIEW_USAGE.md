# FrontendCodePreview Component Usage

A specialized component for frontend languages (HTML, CSS, JavaScript) that displays code at the top and renders a live preview at the bottom.

## Features

- ✅ **Code Display** - Shows HTML, CSS, and JavaScript code with syntax highlighting
- ✅ **Live Preview** - Renders the code in an iframe below
- ✅ **Tabbed Interface** - Switch between HTML, CSS, and JS tabs
- ✅ **Copy to Clipboard** - Easy copy functionality
- ✅ **Beautiful Fonts** - Uses Fira Code, JetBrains Mono, etc.
- ✅ **Dark Mode Support** - Adapts to system theme
- ✅ **Customizable Height** - Adjust preview window size
- ✅ **Color Themes** - Blue, Purple, Emerald, Amber, Orange

## Basic Usage

```tsx
import { FrontendCodePreview } from '@/components/shared';

<FrontendCodePreview
  title="Simple HTML Button"
  description="A basic button with styling"
  html={`<button class="btn">Click Me!</button>`}
  css={`.btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}`}
  colorTheme="blue"
/>
```

## With JavaScript

```tsx
<FrontendCodePreview
  title="Interactive Counter"
  description="Button that increments a counter"
  html={`<div class="counter">
  <h2 id="count">0</h2>
  <button onclick="increment()">Increment</button>
</div>`}
  css={`.counter {
  text-align: center;
  padding: 2rem;
  background: #f0f9ff;
  border-radius: 12px;
}

#count {
  font-size: 3rem;
  color: #3b82f6;
  margin-bottom: 1rem;
}

button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}`}
  js={`let count = 0;

function increment() {
  count++;
  document.getElementById('count').textContent = count;
}`}
  colorTheme="blue"
  previewHeight="400px"
/>
```

## HTML Only Example

```tsx
<FrontendCodePreview
  title="HTML Structure"
  description="Basic HTML document structure"
  html={`<header>
  <h1>Welcome</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>

<main>
  <section>
    <h2>Introduction</h2>
    <p>This is a simple HTML structure example.</p>
  </section>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>`}
  colorTheme="orange"
/>
```

## CSS Animation Example

```tsx
<FrontendCodePreview
  title="CSS Animation"
  description="Smooth box animation"
  html={`<div class="box">Hover me!</div>`}
  css={`.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.box:hover {
  transform: rotate(5deg) scale(1.1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.box {
  animation: pulse 2s infinite;
}`}
  colorTheme="purple"
  previewHeight="350px"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Component title |
| `description` | string | optional | Brief description |
| `html` | string | `''` | HTML code to display and render |
| `css` | string | `''` | CSS code to apply |
| `js` | string | `''` | JavaScript code to execute |
| `colorTheme` | `'blue' \| 'purple' \| 'emerald' \| 'amber' \| 'orange'` | `'orange'` | Color scheme |
| `icon` | React Component | `Eye` | Header icon |
| `previewHeight` | string | `'300px'` | Height of preview window |

## Color Themes

- **blue** - Blue/Cyan gradient - Perfect for HTML
- **purple** - Purple/Pink gradient - Great for CSS  
- **emerald** - Green/Emerald gradient - Nice for accessibility
- **amber** - Amber/Orange gradient - Warm and inviting
- **orange** - Orange/Red gradient - Default, energetic

## Tips

1. **Keep it simple** - Show focused, single-concept examples
2. **Preview height** - Adjust based on your content needs
3. **Responsive code** - Include viewport meta in complex examples
4. **Error handling** - JS errors are caught automatically
5. **Sandbox safety** - iframes use `sandbox="allow-scripts"` for security

## When to Use

✅ **Use FrontendCodePreview when:**
- Showing HTML structure and rendering
- Demonstrating CSS styling effects
- Interactive JavaScript examples
- Animation demonstrations
- Layout and positioning examples

❌ **Use CodeSnippetWithOutput when:**
- Showing backend code (Node.js, Python, etc.)
- Console.log output only
- No visual rendering needed
- Text-based results

## Example Use Cases

1. **HTML Components** - Show HTML structure with styling
2. **CSS Layouts** - Flexbox, Grid, positioning examples
3. **CSS Animations** - Transitions, keyframes, transforms
4. **Form Elements** - Styled inputs, buttons, selects
5. **Interactive Widgets** - Counters, toggles, modals
6. **Responsive Design** - Media query demonstrations
7. **Card Components** - Product cards, profile cards
8. **Navigation Menus** - Headers, navbars, dropdowns
