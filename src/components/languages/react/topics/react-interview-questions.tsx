'use client';
import React from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Brain } from 'lucide-react';
import { marked } from 'marked';

const allQuestions = [
    // Core React
    {
      q: 'What is React?',
      category: 'Easy',
      a: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
      code: `import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}`
    },
    {
        q: "What are the major features of React?",
        category: "Easy",
        a: "The major features of React are:\n- It uses the Virtual DOM instead of the Real DOM.\n- It supports server-side rendering.\n- It follows Unidirectional data flow or data binding.\n- It uses reusable/composable UI components to develop the view.",
        code: null
    },
    {
        q: 'What is JSX?',
        category: 'Easy',
        a: 'JSX stands for JavaScript XML. It is a syntax extension to JavaScript that looks similar to HTML. It provides a way to structure component rendering using syntax familiar to many developers.',
        code: `const element = <h1>Hello, world!</h1>;`
    },
    {
        q: 'What is the difference between an Element and a Component?',
        category: 'Easy',
        a: 'An **Element** is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements are immutable.\nA **Component** is a function or a class which optionally accepts input and returns a React element.',
        code: `// This is an element
const element = <h1>Hello</h1>;

// This is a component
function MyComponent() {
  return <h1>Hello</h1>;
}`
    },
    {
        q: 'How do you create components in React?',
        category: 'Easy',
        a: 'There are two ways to create a component:\n1. **Function Components**: These are simple JavaScript functions that accept props and return React elements.\n2. **Class Components**: These are ES6 classes that extend `React.Component` and have a `render` method.',
        code: `// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`
    },
    {
        q: 'What is state in React?',
        category: 'Easy',
        a: 'State is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders.',
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`
    },
    {
        q: 'What are props in React?',
        category: 'Easy',
        a: 'Props (short for properties) are read-only inputs to components. They are used to pass data from a parent component to a child component.',
        code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Sara" />; // "name" is the prop
}`
    },
    {
        q: 'What is the difference between state and props?',
        category: 'Easy',
        a: '**Props** are passed to the component from its parent, while **State** is managed within the component itself. Props are immutable (read-only), while state can be modified by the component.',
        code: null
    },
    {
        q: 'What is the "key" prop and what is its benefit?',
        category: 'Easy',
        a: 'A `key` is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed, which helps in efficient updates of the UI.',
        code: `const numbers = [1, 2, 3];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);`
    },
    {
        q: 'What is the Virtual DOM?',
        category: 'Medium',
        a: 'The Virtual DOM (VDOM) is a programming concept where a virtual representation of a UI is kept in memory and synced with the "real" DOM. React uses it to optimize updates by batching DOM manipulations.',
        code: null
    },
    {
        q: 'How does the Virtual DOM work?',
        category: 'Medium',
        a: 'When a component\'s state changes, React creates a new virtual DOM tree. It then compares this new tree with the previous one (this is called "diffing") and calculates the most efficient way to update the real DOM to match the new state.',
        code: null
    },
    {
        q: 'What are controlled components?',
        category: 'Medium',
        a: 'A controlled component is a component where React controls the form data. An input form element whose value is controlled by React in this way is called a "controlled component".',
        code: `const [name, setName] = useState('');
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`
    },
    {
        q: 'What are uncontrolled components?',
        category: 'Medium',
        a: 'Uncontrolled Components are components where form data is handled by the DOM itself, instead of by React state. You use a `ref` to get form values from the DOM.',
        code: `const inputRef = useRef(null);
// ...
<input type="text" ref={inputRef} />`
    },
    {
        q: 'What is Lifting State Up?',
        category: 'Medium',
        a: 'Lifting state up is a common pattern in React where you move the shared state to the closest common ancestor of the components that need it. This allows components to share and sync their state.',
        code: null
    },
    {
        q: 'What are Higher-Order Components (HOCs)?',
        category: 'Hard',
        a: 'A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or logic. They are a pattern for reusing component logic.',
        code: `function withExtraProps(WrappedComponent) {
  return function(props) {
    return <WrappedComponent {...props} extraProp="I am extra!" />;
  };
}`
    },
    {
        q: 'What are Fragments?',
        category: 'Easy',
        a: 'Fragments let you group a list of children without adding extra nodes to the DOM. You can use `<React.Fragment>` or the shorter `<>` syntax.',
        code: `function Columns() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}`
    },
    {
        q: 'What are portals in React?',
        category: 'Hard',
        a: 'Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for modals, tooltips, and dialogs.',
        code: `import { createPortal } from 'react-dom';

function MyModal() {
  return createPortal(
    <div>I am a modal!</div>,
    document.body
  );
}`
    },
    {
        q: 'What are stateless components?',
        category: 'Easy',
        a: 'Stateless components (or function components) are simple JavaScript functions that take props and return React elements. They do not have their own state or lifecycle methods.',
        code: `function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}`
    },
    {
        q: 'What are stateful components?',
        category: 'Easy',
        a: 'A stateful component is a component that holds some state. Before hooks, these were class components. Now, function components can also be stateful using the `useState` hook.',
        code: null
    },
    {
        q: 'What are the advantages of React?',
        category: 'Easy',
        a: 'Advantages include:\n1. **Performance**: Virtual DOM makes UI updates fast.\n2. **Component-Based**: Reusable UI components make code modular and easier to maintain.\n3. **SEO Friendly**: Supports server-side rendering.\n4. **Strong Community**: Large ecosystem and community support.',
        code: null
    },
    {
        q: 'What are the limitations of React?',
        category: 'Easy',
        a: 'Limitations include:\n1. **Library, not a Framework**: React is just the view layer, so you need other libraries for routing and state management.\n2. **Learning Curve**: Can be steep for beginners, especially with concepts like JSX and state management.\n3. **Boilerplate**: Can involve a lot of setup and boilerplate code.',
        code: null
    },
    {
        q: 'What is the use of the `react-dom` package?',
        category: 'Medium',
        a: 'The `react-dom` package provides DOM-specific methods that can be used at the top level of your app, like `ReactDOM.createRoot().render()`. It serves as the entry point to the DOM and server renderers for React.',
        code: `import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);`
    },
    {
        q: 'How do you apply styles in React?',
        category: 'Easy',
        a: 'You can apply styles using:\n1. **Inline Styles**: Pass a JavaScript object to the `style` attribute.\n2. **CSS Classes**: Use the `className` attribute.\n3. **CSS-in-JS Libraries**: Like styled-components or Emotion.',
        code: `// Inline Style
<div style={{ color: 'blue', fontSize: '16px' }}>Hello</div>

// CSS Class
<div className="my-class">Hello</div>`
    },
    {
        q: 'How do you conditionally render components?',
        category: 'Easy',
        a: 'You can use standard JavaScript conditional logic:\n1. **`if` statements**\n2. **Ternary operators** (`condition ? ... : ...`)\n3. **Logical `&&` operator** (`condition && ...`)',
        code: `function MyComponent({ showContent }) {
  return (
    <div>
      {showContent && <p>Content is visible!</p>}
    </div>
  );
}`
    },
    {
        q: 'What are Hooks?',
        category: 'Easy',
        a: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. `useState` and `useEffect` are the most common hooks.',
        code: `import { useState } from 'react';`
    },
    {
        q: 'What rules must be followed for Hooks?',
        category: 'Medium',
        a: '1. **Only Call Hooks at the Top Level**: Don’t call Hooks inside loops, conditions, or nested functions.\n2. **Only Call Hooks from React Functions**: Call them from React function components or from custom Hooks.',
        code: null
    },
    {
        q: 'What is Redux?',
        category: 'Hard',
        a: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
        code: null
    },
    {
        q: 'What are the core principles of Redux?',
        category: 'Hard',
        a: '1. **Single source of truth**: The state of your whole application is stored in an object tree within a single store.\n2. **State is read-only**: The only way to change the state is to emit an action, an object describing what happened.\n3. **Changes are made with pure functions**: To specify how the state tree is transformed by actions, you write pure reducers.',
        code: null
    },
    {
        q: 'What is React Router?',
        category: 'Medium',
        a: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.',
        code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';`
    }
];

export const reactInterviewQuestions = allQuestions;

const categories = {
    'Easy': allQuestions.filter(q => q.category === 'Easy'),
    'Medium': allQuestions.filter(q => q.category === 'Medium'),
    'Hard': allQuestions.filter(q => q.category === 'Hard')
};

interface QnAProps {
  questions: Array<typeof allQuestions[0]>;
}

function QnA({ questions }: QnAProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((q, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-left hover:no-underline">
            {q.q}
          </AccordionTrigger>
          <AccordionContent>
            <div 
                className="prose prose-sm max-w-none dark:prose-invert bg-muted/50 p-4 rounded-md border"
                dangerouslySetInnerHTML={{ __html: String(marked.parse(q.a)) }}
            />
            {q.code && (
                <div className="bg-background rounded-md p-4 mt-4 border">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
                        <code>{q.code}</code>
                    </pre>
                </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function ReactInterviewQuestions() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">React Interview Q&amp;A</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Test your knowledge with this curated list of common React interview questions.
        </p>
      </div>

      <Tabs defaultValue="Easy" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="Easy">Easy</TabsTrigger>
          <TabsTrigger value="Medium">Medium</TabsTrigger>
          <TabsTrigger value="Hard">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="Easy">
          <Card>
            <CardContent className="p-6">
              <QnA questions={categories['Easy']} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Medium">
          <Card>
            <CardContent className="p-6">
              <QnA questions={categories['Medium']} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Hard">
          <Card>
            <CardContent className="p-6">
              <QnA questions={categories['Hard']} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
