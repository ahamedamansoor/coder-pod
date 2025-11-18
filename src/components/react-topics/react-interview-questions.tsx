
'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain } from 'lucide-react';
import React from 'react';

const easyQuestions = [
  {
    question: "What is React and why is it used?",
    answer: "React is a JavaScript library for building user interfaces. It's known for its component-based architecture, which allows developers to create reusable UI pieces. Its main benefit is the use of a Virtual DOM, which efficiently updates the actual DOM, leading to faster and more predictable UI rendering.",
  },
  {
    question: "Explain the difference between a class component and a functional component.",
    answer: "Historically, **Class Components** were the only way to have state and lifecycle methods. They are ES6 classes that extend `React.Component`.\n\n**Functional Components** were simple functions that accepted props and returned JSX. With the introduction of **Hooks** (like `useState` and `useEffect`), functional components can now manage state and side effects, making them the modern and preferred way to write React components due to their simpler syntax and easier testing.",
  },
  {
    question: "What is JSX and why is it necessary?",
    answer: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files. It is not mandatory to use JSX, but it makes writing React components much more intuitive and readable. JSX code needs to be transpiled by tools like Babel into regular `React.createElement()` calls that JavaScript can understand.",
  },
];

const mediumQuestions = [
    {
        question: "Describe the concept of 'props' versus 'state'.",
        answer: "**Props** (short for properties) are read-only arguments passed into components from their parent. They are how components communicate with each other. A component cannot change its own props.\n\n**State** is data that is managed *within* a component. It is private and can be changed by the component itself (using `this.setState` in class components or `useState` hook in functional components). When a component's state changes, React re-renders the component to reflect the new state.",
    },
    {
        question: "What is the significance of 'keys' when rendering a list of elements?",
        answer: "Keys are a special string attribute you need to include when creating lists of elements. They help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique for each element in the list. Using the array index as a key is generally discouraged, as it can lead to performance issues and bugs if the list order changes.",
    },
    {
        question: "Explain the component lifecycle in React.",
        answer: "The component lifecycle describes the series of phases a component goes through from its creation to its removal from the DOM.\n\n- **Mounting**: The component is being created and inserted into the DOM. Key methods/hooks are `constructor()`, `render()`, and `componentDidMount()` (or `useEffect` with an empty dependency array `[]`).\n- **Updating**: The component is being re-rendered as a result of changes to its props or state. Key methods are `render()` and `componentDidUpdate()` (or `useEffect` with dependencies).\n- **Unmounting**: The component is being removed from the DOM. The key method is `componentWillUnmount()` (or the cleanup function returned from `useEffect`).",
    },
];

const hardQuestions = [
  {
    question: "What is the purpose of `useCallback` and `useMemo` hooks?",
    answer: "`useCallback` and `useMemo` are optimization hooks used to prevent unnecessary re-renders.\n\n- **`useCallback`** returns a *memoized version of a callback function*. This means the function reference only changes if one of its dependencies has changed. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.\n\n- **`useMemo`** returns a *memoized value*. It re-runs a function and re-computes its value only when one of its dependencies has changed. It's useful for expensive calculations that you don't want to run on every single render.",
  },
  {
    question: "How does the Context API work and what problem does it solve?",
    answer: "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This solves the problem of **'prop drilling'**.\n\nIt works by creating a `Context` object. A `Provider` component higher up in the tree makes a value available, and any `Consumer` component (or a component using the `useContext` hook) further down the tree can subscribe to it and read the value. When the value in the Provider changes, all consuming components re-render.",
  },
  {
    question: "Explain what Higher-Order Components (HOCs) are and provide a use case.",
    answer: "A Higher-Order Component (HOC) is an advanced pattern in React for reusing component logic. It is a function that takes a component as an argument and returns a new component that wraps the original one.\n\nThe new component can add new props, manage state, or render the original component within a different layout. A common use case is creating a `withAuth` HOC that checks if a user is authenticated. If they are, it renders the wrapped component; if not, it redirects them to a login page. This allows you to protect multiple components without repeating the authentication logic in each one.",
  },
];

const QnACard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <AccordionItem value={question}>
    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
      {question}
    </AccordionTrigger>
    <AccordionContent className="pt-2">
      <div
        className="prose prose-sm max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </AccordionContent>
  </AccordionItem>
);

export default function ReactInterviewQuestions() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">React Interview Questions</h1>
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
            <CardHeader>
              <CardTitle>Fundamental Concepts</CardTitle>
              <CardDescription>Questions covering the absolute basics of React.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {easyQuestions.map((q, i) => <QnACard key={`easy-${i}`} {...q} />)}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="medium">
            <Card>
            <CardHeader>
              <CardTitle>Core Concepts</CardTitle>
              <CardDescription>Questions about state, props, lifecycle, and rendering.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {mediumQuestions.map((q, i) => <QnACard key={`medium-${i}`} {...q} />)}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hard">
            <Card>
            <CardHeader>
              <CardTitle>Advanced &amp; Architectural Concepts</CardTitle>
              <CardDescription>Questions about performance, state management, and advanced patterns.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {hardQuestions.map((q, i) => <QnACard key={`hard-${i}`} {...q} />)}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
