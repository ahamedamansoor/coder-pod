'use client';
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Brain, Search, ChevronDown, Code, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const allQuestions = [
    {
        q: "What is React?",
        category: "Basics",
        a: "React is a JavaScript library for building user interfaces with reusable components. It uses a declarative approach and efficiently updates the DOM using the Virtual DOM.",
        code: `import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;`
    },
    {
        q: "What is JSX?",
        category: "Basics",
        a: "JSX is a syntax extension to JavaScript that allows you to write HTML-like code within JavaScript. It gets transformed into React.createElement() calls.",
        code: `// JSX
const element = <h1>Hello {name}</h1>;

// Transforms to
const element = React.createElement('h1', null, 'Hello', name);`
    },
    {
        q: "What is the difference between an Element and a Component?",
        category: "Basics",
        a: "An Element is a plain object representing what you want on screen. A Component is a JavaScript function or class that returns elements.",
        code: `// Element
const element = <div>Hello</div>;

// Component
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

// Using component
const element = <Welcome name='John' />;`
    },
    {
        q: "How do you create components in React?",
        category: "Components",
        a: "You can create components as Function Components or Class Components. Function Components are simpler and recommended.",
        code: `// Function Component
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}`
    },
    {
        q: "What is state in React?",
        category: "State & Props",
        a: "State is an object that contains data that determines the behavior and rendering of a component. State can be updated over time and causes re-rendering when changed.",
        code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
    },
    {
        q: "What are props in React?",
        category: "State & Props",
        a: "Props are read-only attributes passed from parent to child components. They allow you to pass data and event handlers down the component tree.",
        code: `function Parent() {
  return <Child name='Alice' age={25} />;
}

function Child(props) {
  return <p>{props.name} is {props.age} years old</p>;
}

// Or with destructuring
function Child({ name, age }) {
  return <p>{name} is {age} years old</p>;
}`
    },
    {
        q: "What is the difference between state and props?",
        category: "State & Props",
        a: "State is managed within the component and can be changed. Props are passed from parent and are read-only.",
        code: `function Component() {
  // State - can be modified
  const [isVisible, setIsVisible] = useState(true);
  
  // Props - read-only, passed from parent
  return <Child 
    visible={isVisible} 
    onToggle={() => setIsVisible(!isVisible)}
  />;
}`
    },
    {
        q: "What is the Virtual DOM?",
        category: "DOM",
        a: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to compare changes and efficiently update only the changed parts of the actual DOM.",
        code: `// React maintains a Virtual DOM representation
// When state changes, React:
// 1. Creates a new Virtual DOM
// 2. Compares with previous Virtual DOM (diffing)
// 3. Updates only changed elements in real DOM

function App() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}`
    },
    {
        q: "How does the Virtual DOM work?",
        category: "DOM",
        a: "React creates a Virtual DOM copy of the real DOM. When state changes, it compares (diffs) the new Virtual DOM with the old one and updates only the changed parts in the real DOM.",
        code: `// Example of Virtual DOM diffing
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Only changed list items update in real DOM`
    },
    {
        q: "What are controlled components?",
        category: "Forms",
        a: "Controlled components are form elements whose values are managed by React state. The input value is controlled by React.",
        code: `import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  
  const handleChange = (e) => setName(e.target.value);
  
  return (
    <form>
      <input 
        value={name} 
        onChange={handleChange} 
      />
      <p>Name: {name}</p>
    </form>
  );
}`
    },
    {
        q: "What are uncontrolled components?",
        category: "Forms",
        a: "Uncontrolled components are form elements whose values are managed by the DOM itself, not React state. You use refs to access the value.",
        code: `import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  
  const handleSubmit = () => {
    alert('Name: ' + nameRef.current.value);
  };
  
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}`
    },
    {
        q: "What are Higher-Order Components?",
        category: "Advanced",
        a: "A Higher-Order Component (HOC) is a function that takes a component and returns an enhanced version of it. It's used for code reuse and logic abstraction.",
        code: `function withTheme(Component) {
  return function ThemeComponent(props) {
    const [theme, setTheme] = useState('light');
    
    return (
      <div className={theme}>
        <Component {...props} theme={theme} />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </div>
    );
  };
}

const ThemedComponent = withTheme(MyComponent);`
    },
    {
        q: "What are Fragments?",
        category: "Advanced",
        a: "Fragments let you group multiple elements without adding extra nodes to the DOM. Use <></> or <React.Fragment>.",
        code: `// Using Fragment
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}

// Equivalent to
function MyComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Content</p>
    </React.Fragment>
  );
}`
    },
    {
        q: "What are portals in React?",
        category: "Advanced",
        a: "Portals provide a way to render components outside their parent DOM hierarchy. Useful for modals, tooltips, and dropdowns.",
        code: `import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='modal'>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}

// Usage
<Modal>
  <h2>This renders outside the parent DOM</h2>
</Modal>`
    },
    {
        q: "What is prop drilling?",
        category: "Patterns",
        a: "Prop drilling is passing props through multiple levels of components to reach a deeply nested component. It can be avoided using Context API.",
        code: `// Prop drilling - passing data through many components
function GrandParent() {
  const [user, setUser] = useState('John');
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>{user}</p>;
}`
    },
    {
        q: "What is the key prop and its benefit?",
        category: "Best Practices",
        a: "The key prop helps React identify which items have changed in a list. It improves performance and maintains component state correctly.",
        code: `// Good - using unique ID as key
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Bad - using index as key (can cause issues)
// {todos.map((todo, index) => (
//   <li key={index}>{todo.text}</li>
// ))}`
    },
    {
        q: "What are Hooks?",
        category: "Hooks",
        a: "Hooks are functions that let you use state and other React features in function components. Common hooks include useState, useEffect, and useContext.",
        code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`
    },
    {
        q: "What is useState hook?",
        category: "Hooks",
        a: "useState is a Hook that lets you add state to function components. It returns the state value and a function to update it.",
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`
    },
    {
        q: "What is useEffect hook?",
        category: "Hooks",
        a: "useEffect performs side effects in function components. It runs after render and can clean up when the component unmounts.",
        code: `import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
    
    return () => {
      // Cleanup code here
    };
  }, []);
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}`
    },
    {
        q: "What is useContext hook?",
        category: "Hooks",
        a: "useContext allows you to consume context without wrapping in a Consumer component. It simplifies accessing context values.",
        code: `import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Content</div>;
}

function App() {
  return (
    <ThemeContext.Provider value='dark'>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}`
    },
    {
        q: "What is Redux?",
        category: "Redux",
        a: "Redux is a predictable state management library. It uses actions, reducers, and a store to manage application state in a centralized way.",
        code: `import { createStore } from 'redux';

// Reducer
function counterReducer(state = 0, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  }
  return state;
}

// Store
const store = createStore(counterReducer);

// Dispatch
store.dispatch({ type: 'INCREMENT' });`
    },
    {
        q: "What are the core principles of Redux?",
        category: "Redux",
        a: "The three core principles are: Single source of truth (one store), State is read-only (dispatch actions), and Changes are made with pure functions (reducers).",
        code: `// 1. Single source of truth
const store = createStore(rootReducer);

// 2. State is read-only
store.dispatch({ type: 'ACTION_TYPE', payload: data });

// 3. Pure functions (reducers)
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ACTION':
      return { ...state, newProp: action.payload };
    default:
      return state;
  }
}`
    },
    {
        q: "What is React Router?",
        category: "Routing",
        a: "React Router is a library for routing in React applications. It enables navigation between different pages/views without full page reloads.",
        code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}`
    },
    {
        q: "How do you conditionally render components?",
        category: "Rendering",
        a: "You can use if statements, ternary operators, logical AND (&&), or switch statements to conditionally render components.",
        code: `function Conditional({ isLoggedIn }) {
  // If statement
  if (isLoggedIn) {
    return <Dashboard />;
  }
  
  // Ternary operator
  return isLoggedIn ? <Dashboard /> : <Login />;
  
  // Logical AND
  return (
    <div>
      {isLoggedIn && <Dashboard />}
    </div>
  );
}`
    },
    {
        q: "How do you apply styles in React?",
        category: "Styling",
        a: "Styles can be applied using inline styles (JavaScript objects), CSS classes, or CSS-in-JS libraries.",
        code: `// Inline styles
const styles = {
  container: { padding: '20px', background: 'blue' },
  text: { color: 'white' }
};

function Component() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Styled text</p>
    </div>
  );
}`
    },
    {
        q: "What is React.memo?",
        category: "Performance",
        a: "React.memo is a higher-order component that memoizes a component. It prevents unnecessary re-renders if props haven't changed.",
        code: `const MyComponent = React.memo(function DemoComponent(props) {
  return <div>{props.name}</div>;
});

// Only re-renders if props change
export default MyComponent;

// With custom comparison
const MyComponent = React.memo(
  ({ name }) => <div>{name}</div>,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);`
    },
    {
        q: "What is code-splitting?",
        category: "Performance",
        a: "Code-splitting is dividing your bundle into smaller chunks that are loaded on-demand. It improves initial load time.",
        code: `import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`
    },
    {
        q: "What is the diffing algorithm?",
        category: "Internals",
        a: "React uses a diffing algorithm to compare old and new Virtual DOM trees. It identifies what changed and updates only those parts.",
        code: `// Diffing algorithm principles:
// 1. Compare elements at same position
// 2. Different types = replace
// 3. Same types = compare props/children
// 4. Use key prop for list items

function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`
    },
    {
        q: "When do you need to use refs?",
        category: "Advanced",
        a: "Refs are used to access DOM elements directly or call methods on class components. Use when you need to manage focus, trigger animations, etc.",
        code: `import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} type='text' />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}`
    },
    {
        q: "What is prop validation with PropTypes?",
        category: "Best Practices",
        a: "PropTypes is a library for type-checking props at runtime. It helps catch bugs during development.",
        code: `import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return <p>{name} is {age} years old</p>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

Greeting.defaultProps = {
  age: 0
};`
    }
];

const ITEMS_PER_LOAD = 10;

function QAItem({ item, index }: { item: typeof allQuestions[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-card hover:bg-muted/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">{item.category}</span>
          <p className="font-semibold text-foreground">{item.q}</p>
        </div>
        <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
      </div>
      {isOpen && (
        <div className="p-4 border-t border-border animate-in fade-in-0 duration-300">
          <p className="text-muted-foreground leading-relaxed mb-4">{item.a}</p>
          {item.code && (
            <div className="bg-muted rounded-md p-4">
              <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
                <code dangerouslySetInnerHTML={{
                  __html: item.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }} />
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ReactInterviewQuestions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredQuestions = useMemo(() => {
    if (!searchTerm) {
      return allQuestions;
    }
    return allQuestions.filter(item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const itemsToShow = useMemo(() => {
    return filteredQuestions.slice(0, visibleCount);
  }, [filteredQuestions, visibleCount]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + ITEMS_PER_LOAD);
      setIsLoadingMore(false);
    }, 300);
  };

  return (
    <div className="space-y-8 p-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">React Q&A Guide</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Search and explore common React interview questions.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          id="searchInput"
          placeholder="Search questions or categories..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(ITEMS_PER_LOAD); // Reset on new search
          }}
          className="w-full pl-10 py-2"
        />
      </div>

      <div className="grid gap-4 max-w-4xl mx-auto">
        {itemsToShow.length > 0 ? (
          itemsToShow.map((item, index) => (
            <QAItem key={index} item={item} index={index} />
          ))
        ) : (
          <div className="text-center p-8 text-muted-foreground">
            No questions found matching your search.
          </div>
        )}
      </div>

      {visibleCount < filteredQuestions.length && (
        <div className="text-center">
          <Button onClick={handleLoadMore} disabled={isLoadingMore}>
            {isLoadingMore ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...</>
            ) : (
              'Load More Questions'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
