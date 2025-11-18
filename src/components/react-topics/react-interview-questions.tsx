'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Brain } from 'lucide-react';
import React from 'react';
import { marked } from 'marked';

const easyQuestions = [
  {
    question: "What is React?",
    idealAnswer: "React is an open-source JavaScript library for building user interfaces, primarily for single-page applications. It’s used for handling the view layer in web and mobile apps and allows developers to create reusable UI components.",
  },
  {
    question: "What are the major features of React?",
    idealAnswer: "The major features of React are:\n\n- **JSX**: A syntax extension that allows writing HTML-like code in JavaScript.\n- **Virtual DOM**: A lightweight in-memory representation of the real DOM for efficient updates.\n- **Component-Based Architecture**: UI is built from small, reusable pieces called components.\n- **Unidirectional Data Flow**: Data flows in one direction (parent to child), making the app easier to reason about.\n- **Hooks**: Functions that let you use state and other React features in functional components.",
  },
  {
    question: "What is JSX?",
    idealAnswer: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files. This makes writing React components more intuitive. JSX code is transpiled by tools like Babel into regular `React.createElement()` calls before it reaches the browser.",
  },
  {
    question: "What is the difference between an Element and a Component?",
    idealAnswer: "An **Element** is a plain JavaScript object that describes what you want to see on the screen (e.g., a button or a heading). It’s an immutable description.\n\nA **Component** is a function or a class that accepts inputs (props) and returns a React element. Components are reusable blueprints, whereas elements are the output of those blueprints.",
  },
  {
    question: "How do you create components in React?",
    idealAnswer: "There are two ways:\n\n1.  **Function Components**: The modern and preferred way. They are simple JavaScript functions that accept props and return JSX.\n\n    ```javascript\n    function Welcome(props) {\n      return <h1>Hello, {props.name}</h1>;\n    }\n    ```\n\n2.  **Class Components**: The older way, using ES6 classes. They extend `React.Component` and must have a `render()` method.\n\n    ```javascript\n    class Welcome extends React.Component {\n      render() {\n        return <h1>Hello, {this.props.name}</h1>;\n      }\n    }\n    ```",
  },
  {
    question: "What is state in React?",
    idealAnswer: "State is an object that represents the parts of the app that can change. Each component can maintain its own state. When a component's state changes, React re-renders the component to reflect the new state. In functional components, state is managed with the `useState` hook.",
  },
  {
    question: "What are props in React?",
    idealAnswer: "Props (short for properties) are read-only inputs to a React component. They are used to pass data from a parent component down to a child component, allowing for dynamic and reusable components.",
  },
  {
    question: "What is the difference between state and props?",
    idealAnswer: "**Props** are passed to a component from its parent and are immutable (read-only) within the component. **State** is managed within the component and can be changed by it. Think of props as function arguments and state as local variables within that function.",
  },
   {
    question: 'Why should we not update the state directly?',
    idealAnswer: "You should never update the state directly because it won't cause the component to re-render. When you call `this.setState()` or a `useState` setter function, React knows that the state has changed and schedules a re-render to update the UI. If you mutate the state directly (e.g., `this.state.message = 'Hello'`), React has no way of knowing a change occurred, and your UI will not reflect the new state.",
  },
  {
    question: "What are stateless components?",
    idealAnswer: "A stateless component is a component that does not have its own state. They are also known as presentational or 'dumb' components. They receive data via props and render it. Typically, these are functional components that don't use state hooks, making them simple, predictable, and easy to test."
  },
   {
    question: 'What is the required method to be defined for a class component?',
    idealAnswer: 'The `render()` method is the only required method in a class component. All other lifecycle methods are optional.',
  },
];

const mediumQuestions = [
  {
    question: "What is the Virtual DOM and how does it work?",
    idealAnswer: "The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM. When a component's state changes, React creates a new VDOM. It then compares this new VDOM with the previous one (a process called 'diffing') and calculates the most efficient way to update the real DOM to match the new state, minimizing direct DOM manipulations.",
  },
  {
    question: "What are controlled vs. uncontrolled components?",
    idealAnswer: "A **controlled component** is a form element (like `<input>`) whose value is controlled by React state. The component's `value` is set from state, and any changes are handled by an `onChange` handler that updates the state. An **uncontrolled component** stores its own state internally in the DOM. You use a `ref` to get its value when needed, which is more like traditional HTML.",
  },
  {
    question: "What is 'Lifting State Up'?",
    idealAnswer: "'Lifting State Up' is a pattern where you move the shared state from multiple components up to their closest common ancestor. This allows the parent to manage the state and pass it down as props to the children, keeping the data flow consistent and making the state easier to manage.",
  },
  {
    question: "What is reconciliation?",
    idealAnswer: "Reconciliation is the process by which React updates the DOM. When a component's state or props change, React compares the new element tree with the old one (the 'diffing' algorithm) and then efficiently updates the underlying DOM to match the new tree.",
  },
  {
    question: "What are the rules of Hooks?",
    idealAnswer: "There are two main rules for Hooks: \n1. **Only call Hooks at the top level**: Don't call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the same order on every render. \n2. **Only call Hooks from React functions**: Call them from React function components or custom Hooks, not from regular JavaScript functions.",
  },
  {
    question: "What is the Context API and what problem does it solve?",
    idealAnswer: "The Context API provides a way to pass data through the component tree without having to manually pass props down at every level. This solves the problem of 'prop drilling'. It works by creating a `Context` object. A `Provider` component higher up the tree makes a value available, and any `Consumer` component (or a component using the `useContext` hook) can subscribe to it.",
  },
  {
    question: "What is the difference between `useState` and `useReducer`?",
    idealAnswer: "`useState` is a basic hook for managing simple state (like numbers, strings, or booleans). `useReducer` is generally preferred for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. It's more predictable and easier to test for complex scenarios.",
  },
  {
    question: "What is the purpose of callback function as an argument of setState()?",
    idealAnswer: "The callback function is executed after the `setState` operation and subsequent re-render is complete. Since `setState()` is asynchronous, you cannot rely on `this.state` reflecting the new value immediately. The callback is useful for performing actions that need to happen right after the state has changed, like making an API call based on the new state."
  },
  {
    question: 'How to bind methods or event handlers in JSX callbacks?',
    idealAnswer: 'There are a few ways:\n1. **Binding in Constructor (for class components):** `this.handleClick = this.handleClick.bind(this);`\n2. **Arrow Functions in Class Fields:** `handleClick = () => { ... }`\n3. **Arrow Functions in Render/JSX:** `<button onClick={() => this.handleClick()}>Click</button>` (Note: this can have performance implications as a new function is created on each render).',
  },
  {
    question: 'What is the use of refs?',
    idealAnswer: 'Refs provide a way to access DOM nodes or React elements created in the render method. They are useful for:\n- Managing focus, text selection, or media playback.\n- Triggering imperative animations.\n- Integrating with third-party DOM libraries.',
  },
   {
    question: 'When should you use a Class Component over a Function Component?',
    idealAnswer: 'With the introduction of Hooks, you can use state, lifecycle methods, and other features in Function Components. Therefore, Function Components are now preferred for almost all use cases. You might need a Class Component only for very specific legacy use cases or if you need to implement an Error Boundary, which currently can only be done with a class component.',
  },
  {
    question: 'What are Pure Components?',
    idealAnswer: 'A `React.PureComponent` is similar to a `React.Component` but it implements `shouldComponentUpdate()` with a shallow prop and state comparison. For function components, you can achieve the same result by wrapping them in `React.memo()`. This prevents unnecessary re-renders when the props and state haven\'t changed.',
  },
];

const hardQuestions = [
  {
    question: "What is React Fiber?",
    idealAnswer: "React Fiber is a complete reimplementation of React's core reconciliation algorithm, introduced in React 16. Its main goal is to enable incremental rendering, allowing React to split rendering work into chunks and spread it out over multiple frames. This makes the UI more responsive by enabling features like concurrency, error boundaries, and suspense.",
  },
  {
    question: "What is the difference between Shadow DOM and Virtual DOM?",
    idealAnswer: "The **Shadow DOM** is a browser technology designed for encapsulation in Web Components. It scopes CSS and keeps an element's DOM structure separate from the main document's DOM. The **Virtual DOM** is a concept implemented by libraries like React in JavaScript. It's an in-memory representation of the DOM that allows for efficient updates by batching changes and minimizing direct manipulation of the real DOM.",
  },
  {
    question: "What is the purpose of `useCallback` and `useMemo` hooks?",
    idealAnswer: "`useCallback` and `useMemo` are optimization hooks. `useCallback` returns a memoized version of a callback function, preventing it from being recreated on every render. This is useful when passing callbacks to child components wrapped in `React.memo`. `useMemo` returns a memoized value from an expensive calculation, re-running the calculation only when its dependencies change.",
  },
  {
    question: "What are error boundaries?",
    idealAnswer: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of letting the entire component tree crash. A class component becomes an error boundary if it defines `static getDerivedStateFromError()` or `componentDidCatch()`.",
  },
  {
    question: "What are Server Components in React?",
    idealAnswer: "React Server Components are a new type of component that runs exclusively on the server. They have no client-side JavaScript, which reduces the bundle size sent to the browser. They can access server-side resources directly (like databases or filesystems) and are great for rendering static or data-heavy parts of a page. They work alongside traditional Client Components, which handle interactivity.",
  },
  {
    question: "Explain the concept of 'hydration' in the context of Server-Side Rendering (SSR).",
    idealAnswer: "Hydration is the process of 'attaching' React to the static HTML that was generated on the server. When the server sends a pre-rendered HTML page to the browser, it's just static content. Once the JavaScript bundle loads, React goes through the existing HTML, attaches event listeners, and initializes the application state, making the static page fully interactive. This process is called hydration.",
  },
  {
    question: "What are Higher-Order Components (HOCs)?",
    idealAnswer: "A Higher-Order Component (HOC) is an advanced pattern for reusing component logic. It is a function that takes a component and returns a new, enhanced component with additional props, behavior, or data. Common use cases include connecting a component to the Redux store or adding authorization checks.",
  },
   {
    question: 'Why are String Refs legacy?',
    idealAnswer: 'String refs are considered legacy because they have several drawbacks:\n- They force React to keep track of the currently executing component, which is problematic.\n- They are not composable.\n- They do not work with static analysis tools like Flow or TypeScript.\nCallback refs or the `React.createRef()` API are the modern, recommended approaches.',
  },
  {
    question: 'What are the different phases of component lifecycle?',
    idealAnswer: 'The component lifecycle has three main phases:\n1. **Mounting:** The component is being created and inserted into the DOM. Methods: `constructor`, `static getDerivedStateFromProps`, `render`, `componentDidMount`.\n2. **Updating:** The component is being re-rendered as a result of changes to props or state. Methods: `static getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, `getSnapshotBeforeUpdate`, `componentDidUpdate`.\n3. **Unmounting:** The component is being removed from the DOM. Method: `componentWillUnmount`.',
  },
  {
    question: 'What is the purpose of getSnapshotBeforeUpdate() lifecycle method?',
    idealAnswer: '`getSnapshotBeforeUpdate()` is invoked right before the most recently rendered output is committed to the DOM. It enables your component to capture some information from the DOM (e.g., scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to `componentDidUpdate()`.',
  },
   {
    question: 'What is the difference between `useEffect` and `useLayoutEffect`?',
    idealAnswer: '`useEffect` runs asynchronously after the browser has painted the screen. This prevents it from blocking the browser\'s rendering process. `useLayoutEffect`, on the other hand, runs synchronously after React has performed all DOM mutations but *before* the browser has painted. It\'s useful for reading layout from the DOM and synchronously re-rendering to prevent visual flickers.',
  },
  {
    question: 'What is code-splitting and how is it implemented in React?',
    idealAnswer: 'Code-splitting is the process of splitting an application\'s code into smaller chunks that can be loaded on demand, rather than loading a single large bundle on initial load. In React, this is implemented using `React.lazy()` for dynamic imports and the `<Suspense>` component to show a loading indicator while the code chunk is being fetched.',
  },
];


const categories = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
};

interface QnAProps {
  questions: { question: string; idealAnswer: string }[];
}

function QnA({ questions }: QnAProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((q, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-left hover:no-underline">
            {q.question}
          </AccordionTrigger>
          <AccordionContent>
            <div
              className="prose prose-sm max-w-none dark:prose-invert bg-muted/50 p-4 rounded-md border"
              dangerouslySetInnerHTML={{ __html: marked.parse(q.idealAnswer) }}
            />
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

      <Tabs defaultValue="easy" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="easy">
          <Card>
            <CardContent className="p-6">
              <QnA questions={categories.easy} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="medium">
          <Card>
            <CardContent className="p-6">
              <QnA questions={categories.medium} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hard">
          <Card>
            <CardContent className="p-6">
              <QnA questions={categories.hard} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
