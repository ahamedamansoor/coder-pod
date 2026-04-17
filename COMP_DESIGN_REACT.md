# React Component Structure Guide

## 🎨 Theme & Styling Guidelines

### Primary Theme Color
**Coder POD Blue: `#5B7FFF`**

Use blue strategically for key elements only:

```tsx
// BLUE - Use for these elements only:
text-blue-600 dark:text-blue-400    // Main page titles, section titles
bg-blue-500                          // Important badges
colorTheme="cyan"                    // PageHeader, ReactPlayground
```

### Multi-Color Usage (ENCOURAGED)
Use light-toned pastel colors for visual variety and better learning experience:
- **Info cards:** Orange, emerald, purple, amber
- **Example cards:** Different colors for different concepts
- **Feature cards:** Varied colors to distinguish features
- **Diagrams:** Multi-color for better comprehension
- **Interactive elements:** Distinct colors for clarity

**Guidelines:**
- Use light tones (50/100 shades, not 500/600)
- Keep borders matching the card color
- Icons can match card color for consistency
- Card headings can be neutral or match card color

---

## 📋 Component Structure

### 1. Page Header (Required)
Every React topic component starts with a `PageHeader`:

```tsx
<PageHeader
  icon={Component}                // Relevant icon
  category="React · Category"     // e.g., "React · Fundamentals"
  title="Topic Title"
  description="Brief, engaging description for beginners"
  colorTheme="cyan"              // Always cyan for React
/>
```

---

## 🎯 Content Sections

### Section 1: Introduction / Definition
**Purpose:** Explain what the topic is in simple terms

```tsx
<Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10">
  <CardHeader>
    <div className="flex items-center gap-3 mb-2">
      <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-xl">
        <Icon className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
      </div>
      <div>
        <CardTitle className="text-3xl text-cyan-600 dark:text-cyan-400">
          Section Title
        </CardTitle>
        <CardDescription className="text-base mt-1">
          Brief description
        </CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    {/* Content here */}
  </CardContent>
</Card>
```

**Key Elements:**
- Main concept explanation
- Key terms with definitions
- Why it matters
- Real-world analogies

---

### Section 2: How It Works
**Purpose:** Visual explanation of the concept

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
      <Icon className="w-7 h-7" />
      How It Works
    </CardTitle>
    <CardDescription className="text-base">
      Step-by-step explanation
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Flow diagram or step-by-step cards */}
  </CardContent>
</Card>
```

**Include:**
- Visual flow diagrams (with arrows)
- Step-by-step process cards
- Color-coded explanations (light tones OK)
- Interactive examples

---

### Section 3: Practical Examples
**Purpose:** Show real code examples with live previews

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
      <Sparkles className="w-7 h-7" />
      See It in Action
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <ReactPlayground
      title="Example Title"
      description="What this example demonstrates"
      code={`// React code`}
      imports={`import React, { useState } from 'react';`}
      colorTheme="cyan"
      onOpenPlayground={onOpenReactPlayground}
    />
  </CardContent>
</Card>
```

**Guidelines:**
- Use `ReactPlayground` for live React examples
- Always include `onOpenPlayground` prop for play button
- Keep examples simple and beginner-friendly
- Show component state and interactivity

---

## 🎮 React Code Preview Standard

### FrontendCodePreviewReact Component

**All React topics must use the `FrontendCodePreviewReact` component for code examples.**

#### Component Features:
- ✅ **React-Only Interface**: Shows only React code (no HTML/CSS tabs)
- ✅ **Modern JSX Syntax**: Full JSX support with live preview
- ✅ **Live Preview**: Real-time component rendering with Babel transformation
- ✅ **Dark Mode Support**: Automatic theme detection
- ✅ **Copy Code**: One-click code copying functionality
- ✅ **Error Handling**: Clear error messages and debugging

#### Usage Pattern:
```tsx
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';

<FrontendCodePreviewReact
  title="Component Title"
  description="Brief description of what the component does"
  colorTheme="cyan" // or other theme colors
  react={`
    // Modern JSX syntax - no imports needed
    function MyComponent({ prop }) {
      const style = {
        padding: '2rem',
        backgroundColor: '#06b6d4',
        color: 'white',
        borderRadius: '16px',
        textAlign: 'center'
      };
      
      return (
        <div style={style}>
          <h2>Hello, {prop}! 🎉</h2>
          <p>Modern JSX syntax works!</p>
        </div>
      );
    }
  `}
/>
```

#### Code Requirements:
- ✅ **Modern JSX Syntax**: Use JSX, not React.createElement
- ✅ **No Import Statements**: React is available globally
- ✅ **No Export Default**: Components are auto-detected
- ✅ **No ReactDOM Code**: Rendering is handled automatically
- ✅ **Inline Styles**: Use style objects for styling
- ✅ **Dark Mode Support**: Check `window.matchMedia('(prefers-color-scheme: dark)')`

#### Color Themes:
- `cyan`, `blue`, `purple`, `green`, `red`, `orange`, `amber`, `yellow`, `lime`, `emerald`, `teal`, `sky`, `indigo`, `violet`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`

---

## 🚀 React Playground Examples

### Creating Interactive React Components

React playgrounds are the perfect way to demonstrate React concepts. Here's how to create effective examples:

#### Basic Component Example
```tsx
<ReactPlayground
  title="Interactive Counter Component"
  description="Learn how to create a simple counter with useState hook"
  imports={`import React, { useState } from 'react';`}
  code={`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      backgroundColor: '#f0f9ff'
    }}>
      <h2>Count: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Decrement
      </button>
    </div>
  );
}

// Render the component
return <Counter />;`}
  onOpenPlayground={onOpenReactPlayground}
  colorTheme="cyan"
/>
```

#### Props Example
```tsx
<ReactPlayground
  title="Reusable Greeting Component"
  description="Learn how to create components that accept props"
  imports={`import React from 'react';`}
  code={`function Greeting({ name, message, color = '#3b82f6' }) {
  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      border: \`2px solid \${color}\`,
      borderRadius: '8px',
      backgroundColor: \`\${color}20\`
    }}>
      <h2 style={{ color: color, margin: '0 0 10px 0' }}>
        Hello, {name}! 👋
      </h2>
      <p style={{ margin: 0, color: '#6b7280' }}>
        {message}
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting 
        name="Alice" 
        message="Welcome to React components!"
        color="#3b82f6"
      />
      <Greeting 
        name="Bob" 
        message="Props make components reusable!"
        color="#10b981"
      />
      <Greeting 
        name="Charlie" 
        message="You can customize everything!"
        color="#f59e0b"
      />
    </div>
  );
}

return <App />;`}
  onOpenPlayground={onOpenReactPlayground}
  colorTheme="cyan"
/>
```

#### State Management Example
```tsx
<ReactPlayground
  title="Todo List with State"
  description="Build a complete todo list with React state management"
  imports={`import React, { useState } from 'react';`}
  code={`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React hooks', completed: false },
    { id: 2, text: 'Build a component', completed: true }
  ]);
  const [newTodo, setNewTodo] = useState('');
  
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }]);
      setNewTodo('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#1f2937' }}>
        My Todo List
      </h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          style={{
            width: '70%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px 0 0 4px',
            borderRight: 'none'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            width: '30%',
            padding: '8px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: todo.completed ? '#f0fdf4' : '#f9fafb',
              border: \`1px solid \${todo.completed ? '#86efac' : '#e5e7eb'}\`,
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#6b7280' : '#1f2937'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

return <TodoList />;`}
  onOpenPlayground={onOpenReactPlayground}
  colorTheme="cyan"
/>
```

#### Event Handling Example
```tsx
<ReactPlayground
  title="Interactive Form with Events"
  description="Learn React event handling with a controlled form"
  imports={`import React, { useState } from 'react';`}
  code={`function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  if (submitted) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f0fdf4',
        border: '2px solid #86efac',
        borderRadius: '8px',
        color: '#166534'
      }}>
        <h2>✅ Thank you for your submission!</h2>
        <p>We'll get back to you soon.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} style={{
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    }}>
      <h2 style={{ textAlign: 'center', color: '#1f2937' }}>
        Contact Us
      </h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#374151' }}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#374151' }}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#374151' }}>
          Message:
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />
      </div>
      
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Send Message
      </button>
    </form>
  );
}

return <ContactForm />;`}
  onOpenPlayground={onOpenReactPlayground}
  colorTheme="cyan"
/>
```

---

### Section 4: Key Concepts / Features
**Purpose:** Break down important subtopics

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
      <Lightbulb className="w-7 h-7" />
      Key Concepts
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid md:grid-cols-3 gap-4">
      {/* Use different colors for each concept */}
      <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
        <h4 className="font-bold text-lg">
          Concept 1
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Explanation
        </p>
      </div>
      
      <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
        <h4 className="font-bold text-lg">
          Concept 2
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Explanation
        </p>
      </div>
      
      <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
        <h4 className="font-bold text-lg">
          Concept 3
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Explanation
        </p>
      </div>
    </div>
  </CardContent>
</Card>
```

**Use variety for feature cards:**
- Orange for core/foundational concepts
- Emerald/Green for success/positive features
- Purple for advanced/creative topics
- Amber for warnings/important tips
- Keep all colors light and professional (50/100 shades)

---

### Section 5: Best Practices / Tips
**Purpose:** Teach good coding habits

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
      <CheckCircle2 className="w-7 h-7" />
      Best Practices
    </CardTitle>
  </CardHeader>
  <CardContent className="grid md:grid-cols-2 gap-4">
    {/* Do's column */}
    <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
      <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
        ✅ Do This
      </h4>
      {/* List of good practices */}
    </div>
    
    {/* Don'ts column */}
    <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
      <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400">
        ❌ Avoid This
      </h4>
      {/* List of bad practices */}
    </div>
  </CardContent>
</Card>
```

---

### Section 6: Interactive Playground (Optional)
**Purpose:** Let users experiment with React code

```tsx
{onOpenReactPlayground && (
  <InteractivePlayground
    title="🚀 Try It Yourself"
    description="Experiment and learn by doing!"
    features={[
      'Live React code editor',
      'Instant component preview',
      'Interactive state management',
      'Learn by experimenting'
    ]}
    buttonText="Launch React Playground"
    onLaunchPlayground={() => onOpenReactPlayground(code, imports)}
    playgroundData={{ code, imports }}
    colorTheme="cyan"
  />
)}
```

---

## 🎨 Color Palette Reference

### Primary Cyan Theme (REQUIRED)
```css
/* Titles & Headings */
text-cyan-600 dark:text-cyan-400

/* Icons */
text-cyan-600 dark:text-cyan-400

/* Badges */
bg-cyan-500 text-white

/* Borders */
border-cyan-200 dark:border-cyan-800
border-cyan-200 dark:border-cyan-700

/* Backgrounds */
bg-cyan-50 dark:bg-cyan-950
bg-cyan-100 dark:bg-cyan-900
bg-cyan-500/10 dark:bg-cyan-500/20

/* Gradients */
from-cyan-50 to-blue-50 dark:from-cyan-950/30 to-blue-950/20
```

### Accent Colors (ALLOWED for Examples)
Use light tones only:

```css
/* Success / Positive */
bg-emerald-50 dark:bg-emerald-950/20
text-emerald-600 dark:text-emerald-400
border-emerald-200 dark:border-emerald-700

/* Info / Secondary */
bg-purple-50 dark:bg-purple-950/20
text-purple-600 dark:text-purple-400
border-purple-200 dark:border-purple-700

/* Warning / Attention */
bg-amber-50 dark:bg-amber-950/20
text-amber-600 dark:text-amber-400
border-amber-200 dark:border-amber-700

/* Error / Don't */
bg-rose-50 dark:bg-rose-950/20
text-rose-600 dark:text-rose-400
border-rose-200 dark:border-rose-700
```

---

## 📝 Writing Guidelines

### Content Principles
1. **Beginner-First:** Write for someone learning React for the first time
2. **Clear Language:** Avoid jargon; explain technical terms
3. **Visual Learning:** Use diagrams, examples, and live previews
4. **Progressive Disclosure:** Start simple, gradually add complexity
5. **Interactive:** Include clickable examples with play buttons

### Structure Rules
- **One Concept Per Section:** Don't mix multiple topics
- **Examples Required:** Every section should have a code example
- **Component Focus:** Emphasize React component patterns
- **Mobile Responsive:** Test on different screen sizes
- **Accessibility:** Use semantic HTML and proper ARIA labels

---

## 🚫 What to Avoid

### Content to Skip
These topics have dedicated components:
- ❌ React Setup & Installation (separate component)
- ❌ JSX Basics (separate component)
- ❌ Component Syntax rules (separate component)
- ❌ Props vs State basics (separate component)

### Styling to Avoid
- ❌ Using blue as primary theme (use cyan for React)
- ❌ Bright, saturated colors everywhere
- ❌ Excessive emojis in professional sections
- ❌ Heavy shadows and animations
- ❌ Inconsistent color schemes

---

## 🎯 Component Checklist

Before submitting a component, verify:

### Theme & Styling
- [ ] All titles use `text-cyan-600 dark:text-cyan-400`
- [ ] All icons are cyan theme
- [ ] All badges use `bg-cyan-500 text-white`
- [ ] All borders are cyan theme
- [ ] PageHeader uses `colorTheme="cyan"`
- [ ] ReactPlayground uses `colorTheme="cyan"`
- [ ] InteractivePlayground uses `colorTheme="cyan"`

### Content Quality
- [ ] Beginner-friendly language
- [ ] Clear explanations with examples
- [ ] Live React code previews with play buttons
- [ ] Step-by-step breakdowns
- [ ] Best practices included
- [ ] Alerts/tips for important points

### Interactive Features
- [ ] All ReactPlayground have `onOpenPlayground` prop
- [ ] Component state is properly demonstrated
- [ ] Event handling examples are interactive
- [ ] Props usage is clearly shown
- [ ] Playground data is complete

### FrontendCodePreviewReact Compliance
- [ ] All React examples use FrontendCodePreviewReact component
- [ ] Modern JSX syntax (no React.createElement)
- [ ] No import statements in react prop
- [ ] No export default statements
- [ ] No ReactDOM rendering code
- [ ] Inline styles with dark mode support
- [ ] Appropriate color theme selected
- [ ] Clear and descriptive titles and descriptions

### Structure
- [ ] Follows section order (Intro → How It Works → Examples → Concepts → Best Practices → Playground)
- [ ] Each section has proper cyan-themed header
- [ ] Content is well-organized and scannable
- [ ] Mobile responsive design

---

## 💡 Example Component Template

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import { Component, Sparkles, Lightbulb } from 'lucide-react';

interface ReactTopicProps {
  onOpenReactPlayground?: (code: string, imports: string) => void;
}

export default function ReactTopic({ onOpenReactPlayground }: ReactTopicProps) {
  const exampleCode = `// Your React code here`;
  const imports = `import React, { useState } from 'react';`;

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Component}
        category="React · Category"
        title="Topic Name"
        description="Beginner-friendly description"
        colorTheme="cyan"
      />

      {/* Section 1: Introduction */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10">
        <CardHeader>
          <CardTitle className="text-3xl text-cyan-600 dark:text-cyan-400">
            What is [Topic]?
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Introduction content */}
        </CardContent>
      </Card>

      {/* Section 2: Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-7 h-7" />
            See It in Action
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreviewReact
            title="Example Component"
            description="Description of what this component demonstrates"
            colorTheme="cyan"
            react={`
// Modern JSX syntax - no imports needed
function ExampleComponent({ name = 'React Developer' }) {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const style = {
    padding: '2rem',
    backgroundColor: isDarkMode ? '#0891b2' : '#06b6d4',
    color: 'white',
    borderRadius: '16px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };
  
  return (
    <div style={style}>
      <h2>Hello, {name}! 🎉</h2>
      <p>Modern JSX with live preview!</p>
    </div>
  );
}
            `}
          />
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenReactPlayground && (
        <InteractivePlayground
          title="Try It Yourself"
          description="Experiment with the code"
          features={['Feature 1', 'Feature 2']}
          buttonText="Launch React Playground"
          onLaunchPlayground={() => onOpenReactPlayground(exampleCode, imports)}
          playgroundData={{ code: exampleCode, imports }}
          colorTheme="cyan"
        />
      )}
    </div>
  );
}
```

---

## 🎓 Best Practices Summary

### DO ✅
- Use Coder POD cyan (`#06b6d4`) for main titles and section headings ONLY
- Use varied pastel colors (orange, purple, emerald, amber) for content cards
- Include live React code previews with play buttons
- Write for beginners
- Break content into digestible sections
- Use visual diagrams with multi-color for better comprehension
- Match card colors with icons for consistency
- Demonstrate component state and interactivity

### DON'T ❌
- Use blue everywhere (use cyan for React)
- Use saturated/bright colors (stick to 50/100 shades)
- Mix too many colors in a single card
- Include topics covered elsewhere
- Use technical jargon without explanation
- Create long walls of text
- Skip interactive React examples
- Forget to show component lifecycle and state management

---

## 🎮 Enhanced Playground Examples with Variable CSS

### Responding to Events Component - Best Practice Example

The `responding-to-events.tsx` component demonstrates advanced playground implementation with:

#### Variable CSS with Inline Styles
```tsx
// Variable CSS definitions
const styles = {
  container: {
    background: isDark ? '#1f2937' : '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: isDark 
      ? '0 12px 40px rgba(0, 0, 0, 0.4)' 
      : '0 12px 40px rgba(0, 0, 0, 0.1)',
    border: isDark ? '2px solid #374151' : '2px solid #e5e7eb',
    minWidth: '300px',
    maxWidth: '400px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: isDark ? '#f3f4f6' : '#111827',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }
  // ... more styles
};

// Usage in JSX
<div style={styles.container}>
  <h2 style={styles.title}>🎮 Click Event Playground</h2>
</div>
```

#### Dynamic Style Functions
```tsx
// Function-based styles for dynamic behavior
const styles = {
  colorButton: (color) => ({
    padding: '12px 20px',
    background: color,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 12px ${color}40`,
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }),
  charCount: (count, max) => ({
    fontSize: '0.8rem',
    color: count > max * 0.9 ? (isDark ? '#f87171' : '#dc2626') : (isDark ? '#9ca3af' : '#6b7280'),
    marginTop: '4px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  })
};

// Usage with dynamic parameters
<button style={styles.colorButton(buttonColor)}>
  🎨 Change My Color
</button>
<div style={styles.charCount(charCount, 200)}>
  {charCount > 180 ? 'Almost at limit!' : (200 - charCount) + ' characters remaining'}
</div>
```

#### Apple-Level Design Features
- **Gradient Backgrounds**: Linear gradients for modern look
- **Glass Morphism**: Backdrop filters and transparency
- **Smooth Transitions**: All interactions have smooth animations
- **Dark Mode Support**: Complete theme compatibility
- **Responsive Design**: Mobile and desktop optimized

#### Interactive Playground Examples
1. **Button Playground**: Click events, counters, color changes, press effects
2. **Form Playground**: Input validation, character counting, submission handling

#### Key Benefits
- **Maintainable**: Centralized style definitions
- **Dynamic**: Styles can change based on state/props
- **Performant**: No CSS-in-JS runtime overhead
- **Type-Safe**: Full TypeScript support
- **Reusable**: Style functions for dynamic behavior

---

## ⚠️ Common React Errors & Troubleshooting

### Component Rendering Issues

**Error Message:**
```
Warning: Each child in a list should have a unique "key" prop.
```

#### Common Causes & Solutions

**1. Missing Keys in Lists**
```tsx
// ❌ Problem: No key prop
{items.map(item => <div>{item.name}</div>)}

// ✅ Solution: Add unique key
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

**2. Incorrect State Updates**
```tsx
// ❌ Problem: Direct mutation
const [todos, setTodos] = useState([]);
const addTodo = (todo) => {
  todos.push(todo);  // Wrong!
  setTodos(todos);
}

// ✅ Solution: Immutable updates
const [todos, setTodos] = useState([]);
const addTodo = (todo) => {
  setTodos([...todos, todo]);  // Correct!
}
```

**3. useEffect Dependencies**
```tsx
// ❌ Problem: Missing dependencies
useEffect(() => {
  fetchData(userId);
}, []);  // Missing userId

// ✅ Solution: Include all dependencies
useEffect(() => {
  fetchData(userId);
}, [userId]);  // Include userId
```

### ReactPlayground Specific Issues

**1. Code Not Executing**
```tsx
// ❌ Problem: Missing imports
<ReactPlayground
  code={`function Counter() { return <div>Count</div>; }`}
  imports=""  // Empty!
/>

// ✅ Fixed: Include React import
<ReactPlayground
  code={`function Counter() { return <div>Count</div>; }`}
  imports="import React from 'react';"
/>
```

**2. State Not Working**
```tsx
// ❌ Problem: useState not imported
<ReactPlayground
  code={`const [count, setCount] = useState(0);`}
  imports="import React from 'react';"
/>

// ✅ Fixed: Import useState
<ReactPlayground
  code={`const [count, setCount] = useState(0);`}
  imports="import React, { useState } from 'react';"
/>
```

### Performance Issues

**1. Unnecessary Re-renders**
```tsx
// ❌ Problem: Creating objects in render
function MyComponent() {
  const [count, setCount] = useState(0);
  const style = { color: 'blue' };  // New object every render
  return <div style={style}>Count: {count}</div>;
}

// ✅ Solution: useMemo or move outside
const style = { color: 'blue' };  // Created once
function MyComponent() {
  const [count, setCount] = useState(0);
  return <div style={style}>Count: {count}</div>;
}
```

---

## 📺 React Component Best Practices

### Component Structure
1. **Single Responsibility:** Each component should do one thing well
2. **Composition over Inheritance:** Prefer composing smaller components
3. **Props Interface:** Clearly define what props a component accepts
4. **Default Props:** Provide sensible defaults for optional props

### State Management
1. **Local State:** Use useState for component-specific state
2. **Side Effects:** Use useEffect for API calls, subscriptions
3. **Context:** Use useContext for global state sharing
4. **Custom Hooks:** Extract reusable state logic

### Performance
1. **React.memo:** Prevent unnecessary re-renders
2. **useMemo:** Cache expensive calculations
3. **useCallback:** Cache function references
4. **Code Splitting:** Lazy load components when needed

### Accessibility
1. **Semantic HTML:** Use proper HTML elements
2. **ARIA Labels:** Add labels for screen readers
3. **Keyboard Navigation:** Ensure all interactions work with keyboard
4. **Focus Management:** Properly manage focus in forms

---

This guide provides everything needed to create effective, educational React components that showcase React's power while maintaining consistency with the Coder POD design system.
