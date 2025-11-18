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
    idealAnswer: "React is an open-source JavaScript library for building user interfaces based on components. It's used for handling the view layer in web and mobile applications and allows developers to create reusable UI components.",
  },
  {
    question: "What is JSX?",
    idealAnswer: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes writing React components more intuitive and readable. JSX code is transpiled by tools like Babel into regular `React.createElement()` calls.",
  },
  {
    question: "What is the difference between an Element and a Component?",
    idealAnswer: "An **Element** is a plain JavaScript object that describes what you want to see on the screen. It's an immutable description of a UI part. A **Component** is a function or a class that accepts inputs (props) and returns a React element. Components are reusable blueprints.",
  },
  {
    question: "What are props in React?",
    idealAnswer: "Props (short for properties) are read-only inputs to a component. They are used to pass data from a parent component to a child component. A component cannot change its own props.",
  },
  {
    question: "What is state in React?",
    idealAnswer: "State is an object that holds information about a component that may change over its lifetime. State is managed within the component and is private to it. When a component's state changes, React re-renders it.",
  },
  {
    question: "What is the difference between state and props?",
    idealAnswer: "**Props** are passed to a component from its parent and are immutable (read-only) within the component. **State** is managed within the component and can be changed by it. Think of props as function arguments and state as local variables.",
  },
  {
    question: "What are Fragments?",
    idealAnswer: "Fragments let you group a list of children without adding extra nodes to the DOM. This is necessary because a component must return a single root element. You can use `<React.Fragment>` or the shorter `<></>` syntax.",
  },
  {
    question: "What are controlled components?",
    idealAnswer: "A controlled component is a form element (like `<input>`) whose value is controlled by React state. The component's `value` prop is set from state, and any changes are handled by an `onChange` handler that updates the state.",
  },
  {
    question: "How do you write comments in React?",
    idealAnswer: "Comments in JSX are written inside curly braces and are formatted like JavaScript multi-line comments. For example: ` {/* This is a comment */} `.",
  },
  {
    question: "What is the purpose of the 'key' prop in lists?",
    idealAnswer: "Keys are special string attributes you should include when creating lists of elements. They help React identify which items have changed, been added, or been removed, which allows for more efficient updates to the UI.",
  },
  {
    question: "How do you handle events in React?",
    idealAnswer: "React events are named using camelCase (e.g., `onClick`) rather than lowercase. You pass a function as the event handler rather than a string. For example: `<button onClick={handleClick}>`.",
  },
  {
    question: "What are stateless components?",
    idealAnswer: "Stateless components (or functional components) are functions that accept props and return JSX. They don't have their own state or lifecycle methods. With the advent of Hooks, functional components can now manage state, but the term often refers to simple presentational components.",
  },
  {
    question: "Why does React use className instead of the class attribute?",
    idealAnswer: "React uses `className` because `class` is a reserved keyword in JavaScript, used for creating ES6 classes. Since JSX is an extension of JavaScript, using `class` would cause conflicts.",
  },
  {
    question: "How do you conditionally render components?",
    idealAnswer: "You can use standard JavaScript approaches like `if` statements, ternary operators (`condition ? <A /> : <B />`), or logical AND (`condition && <A />`) to decide which components or elements to render based on state or props.",
  },
  {
    question: "What is `children` prop?",
    idealAnswer: "The `children` prop is a special prop that allows you to pass components or elements as children between the opening and closing tags of a component. For example: `<Card><h1>Title</h1></Card>`. Here, `<h1>Title</h1>` is the `children` prop of the `Card` component.",
  },
];

const mediumQuestions = [
  {
    question: "When should you use a Class Component over a Function Component?",
    idealAnswer: "With the introduction of Hooks, function components are now preferred for almost all use cases. However, you might still need class components for legacy codebases or for using lifecycle methods like `componentDidCatch` for error boundaries, although even this can be handled by libraries.",
  },
  {
    question: "What are Pure Components?",
    idealAnswer: "A `React.PureComponent` is a class component that implements `shouldComponentUpdate()` with a shallow comparison of props and state. This prevents unnecessary re-renders if the props and state haven't changed. In functional components, this behavior is achieved using `React.memo()`.",
  },
  {
    question: "What is the Virtual DOM and how does it work?",
    idealAnswer: "The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM. When a component's state changes, React creates a new VDOM. It then compares this new VDOM with the previous one (a process called 'diffing') and calculates the most efficient way to update the real DOM to match the new state, minimizing direct DOM manipulations.",
  },
  {
    question: "What is Lifting State Up?",
    idealAnswer: "'Lifting State Up' is a pattern in React where you move the shared state from multiple components up to their closest common ancestor. This allows the parent to manage the state and pass it down as props to the children, keeping the data flow consistent and making the state easier to manage.",
  },
  {
    question: "What are portals in React?",
    idealAnswer: "Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for UI elements that need to break out of their container, like modals, tooltips, or dialogs, to avoid CSS issues like `z-index` and `overflow: hidden`.",
  },
  {
    question: "What are Higher-Order Components (HOCs)?",
    idealAnswer: "A Higher-Order Component (HOC) is an advanced pattern for reusing component logic. It is a function that takes a component and returns a new, enhanced component. HOCs can be used to add props, manage state, or wrap components with additional markup.",
  },
  {
    question: "What are synthetic events in React?",
    idealAnswer: "A SyntheticEvent is a cross-browser wrapper around the browser's native event. It provides a consistent API, ensuring that events work identically across all browsers. For example, you can use `e.stopPropagation()` and `e.preventDefault()` without worrying about browser-specific implementations.",
  },
  {
    question: "How do you apply validation to props in React?",
    idealAnswer: "You can use the `prop-types` library to perform runtime type checking for props in a React application. You define the expected types for each prop, and React will log a warning in the console during development if a prop with an invalid type is provided.",
  },
  {
    question: "What is the difference between `createElement` and `cloneElement`?",
    idealAnswer: "`React.createElement` is what JSX compiles down to; it's used to create a React element from scratch. `React.cloneElement` is used to clone an existing element and pass new props to it. It's useful for manipulating children passed to a component.",
  },
  {
    question: "What is reconciliation?",
    idealAnswer: "Reconciliation is the process by which React updates the DOM. When a component's state or props change, React compares the new element tree with the old one (the 'diffing' algorithm) and then efficiently updates the underlying DOM to match the new tree.",
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
    question: "What are the rules of Hooks?",
    idealAnswer: "There are two main rules for Hooks: \n1. **Only call Hooks at the top level**: Don't call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the same order on every render. \n2. **Only call Hooks from React functions**: Call them from React function components or custom Hooks, not from regular JavaScript functions.",
  },
  {
    question: "What is the difference between `useEffect` and `useLayoutEffect`?",
    idealAnswer: "`useEffect` runs asynchronously after the browser has painted the screen. This prevents it from blocking the browser's rendering process. `useLayoutEffect`, on the other hand, runs synchronously after React has performed all DOM mutations but before the browser has painted. It's useful for reading layout from the DOM and synchronously re-rendering, which can prevent visual flickers.",
  },
  {
    question: "What is code-splitting and how is it implemented in React?",
    idealAnswer: "Code-splitting is the process of splitting your application's code into smaller chunks that can be loaded on demand, rather than loading a single large bundle on initial load. In React, this is implemented using `React.lazy()` for dynamic imports and the `<Suspense>` component to show a loading indicator while the code chunk is being fetched.",
  },
  {
    question: "How does the Context API work and what problem does it solve?",
    idealAnswer: "The Context API provides a way to pass data through the component tree without having to manually pass props down at every level. This solves the problem of 'prop drilling'. It works by creating a `Context` object. A `Provider` component higher up the tree makes a value available, and any `Consumer` component (or a component using the `useContext` hook) can subscribe to it and read the value.",
  },
  {
    question: "What is the purpose of `useCallback` and `useMemo` hooks?",
    idealAnswer: "`useCallback` and `useMemo` are optimization hooks. `useCallback` returns a memoized version of a callback function, preventing it from being recreated on every render. This is useful for passing callbacks to child components wrapped in `React.memo`. `useMemo` returns a memoized value from an expensive calculation, re-running the calculation only when its dependencies change.",
  },
  {
    question: "What are error boundaries?",
    idealAnswer: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of letting the entire component tree crash. A class component becomes an error boundary if it defines `static getDerivedStateFromError()` or `componentDidCatch()`.",
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
