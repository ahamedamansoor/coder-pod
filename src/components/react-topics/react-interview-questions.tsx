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
import { Brain, Lightbulb } from 'lucide-react';
import React from 'react';
import { marked } from 'marked';

const easyQuestions = [
    {
      question: "What is React?",
      idealAnswer: "React is a JavaScript library for building user interfaces. It's known for its component-based architecture, which allows developers to create reusable UI pieces. Its main benefit is the use of a Virtual DOM, which efficiently updates the actual DOM, leading to faster and more predictable UI rendering.",
    },
    {
      question: "What is the difference between a class component and a functional component?",
      idealAnswer: "Historically, **Class Components** were the only way to have state and lifecycle methods. They are ES6 classes that extend `React.Component`.\n\n**Functional Components** were simple functions that accepted props and returned JSX. With the introduction of **Hooks** (like `useState` and `useEffect`), functional components can now manage state and side effects, making them the modern and preferred way to write React components due to their simpler syntax and easier testing.",
    },
    {
      question: "What is JSX?",
      idealAnswer: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files. It is not mandatory to use JSX, but it makes writing React components much more intuitive and readable. JSX code needs to be transpiled by tools like Babel into regular `React.createElement()` calls that JavaScript can understand.",
    },
    {
      question: "What is the difference between state and props?",
      idealAnswer: "**Props** (properties) are read-only and are passed to a component from its parent. They are how components receive data.\n\n**State** is data that is managed *within* a component. It is private and can be changed by the component itself. When a component's state changes, React re-renders it."
    },
    {
        question: "What are React Fragments?",
        idealAnswer: "Fragments let you group a list of children without adding extra nodes to the DOM. This is useful because a component's `render` method must return a single root element. You can use `<React.Fragment>` or the shorter `<></>` syntax."
    }
];

const mediumQuestions = [
    {
      question: "Explain the difference between `<strong>`, `<b>`, `<em>`, and `<i>` tags.",
      idealAnswer: "This is about **semantic meaning vs. presentation**:\n\n- `<strong>` and `<b>` both make text bold by default, but `<strong>` indicates that the text has **strong importance**, seriousness, or urgency.\n- `<em>` and `<i>` both make text italicized by default, but `<em>` (emphasis) indicates **stress emphasis** on a word or phrase.\n\nIn short, use `<strong>` and `<em>` when you want to convey meaning and importance. Use `<b>` and `<i>` only when you want a specific visual style without adding semantic weight.",
    },
    {
      question: "What are semantic HTML5 elements? Give a few examples.",
      idealAnswer: "Semantic elements are HTML elements that clearly describe their meaning or purpose to both the browser and the developer. They make the code more readable and accessible.\n\nExamples include:\n- `<header>`: Introductory content for a page or section.\n- `<nav>`: A set of navigation links.\n- `<main>`: The main, unique content of a page.\n- `<article>`: A self-contained piece of content (e.g., a blog post).\n- `<section>`: A thematic grouping of content.\n- `<footer>`: The footer for a page or section, containing info like copyright and contact details.\n- `<aside>`: Content that is tangentially related, like a sidebar.",
    },
    {
      question: "What is the significance of 'keys' when rendering a list of elements?",
      idealAnswer: "Keys are a special string attribute you need to include when creating lists of elements. They help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique for each element in the list. Using the array index as a key is generally discouraged, as it can lead to performance issues and bugs if the list order changes.",
    },
    {
      question: "What is the Virtual DOM?",
      idealAnswer: "The Virtual DOM (VDOM) is a programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM. When a component's state changes, a new Virtual DOM is created. React then compares this new VDOM with the previous one (a process called 'diffing') and calculates the most efficient way to update the real DOM to match the new state. This avoids costly direct manipulation of the entire DOM."
    }
];

const hardQuestions = [
    {
        question: "What is the purpose of `useCallback` and `useMemo` hooks?",
        idealAnswer: "`useCallback` and `useMemo` are optimization hooks used to prevent unnecessary re-renders.\n\n- **`useCallback`** returns a *memoized version of a callback function*. This means the function reference only changes if one of its dependencies has changed. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.\n\n- **`useMemo`** returns a *memoized value*. It re-runs a function and re-computes its value only when one of its dependencies has changed. It's useful for expensive calculations that you don't want to run on every single render.",
    },
    {
        question: "How does the Context API work and what problem does it solve?",
        idealAnswer: "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This solves the problem of **'prop drilling'**.\n\nIt works by creating a `Context` object. A `Provider` component higher up in the tree makes a value available, and any `Consumer` component (or a component using the `useContext` hook) further down the tree can subscribe to it and read the value. When the value in the Provider changes, all consuming components re-render.",
    },
    {
        question: "Explain what Higher-Order Components (HOCs) are and provide a use case.",
        idealAnswer: "A Higher-Order Component (HOC) is an advanced pattern in React for reusing component logic. It is a function that takes a component as an argument and returns a new component that wraps the original one.\n\nThe new component can add new props, manage state, or render the original component within a different layout. A common use case is creating a `withAuth` HOC that checks if a user is authenticated. If they are, it renders the wrapped component; if not, it redirects them to a login page. This allows you to protect multiple components without repeating the authentication logic in each one.",
    },
    {
        question: "What is code-splitting in React?",
        idealAnswer: "Code-splitting is a feature supported by bundlers like Webpack that allows you to split your code into various bundles which can then be loaded on demand or in parallel. It helps in achieving smaller bundle sizes and lazy-loading code that the user may not need for the initial render, improving the application's performance. React supports code-splitting out of the box with `React.lazy` and `Suspense`."
    }
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
            <div className="prose prose-sm max-w-none dark:prose-invert"
                 dangerouslySetInnerHTML={{ __html: marked.parse(q.idealAnswer) }} />
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
          <h1 className="text-4xl font-bold text-foreground">React Interview Q&A</h1>
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
