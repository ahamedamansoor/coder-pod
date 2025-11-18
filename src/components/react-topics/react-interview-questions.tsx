'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Brain,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  Loader2,
  Sparkles,
} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { conductInterview } from '@/ai/flows/interview-flow';
import { marked } from 'marked';
import { useToast } from '@/hooks/use-toast';

const easyQuestions = [
  {
    question: "What is React and why is it used?",
    idealAnswer: "React is a JavaScript library for building user interfaces. It's known for its component-based architecture, which allows developers to create reusable UI pieces. Its main benefit is the use of a Virtual DOM, which efficiently updates the actual DOM, leading to faster and more predictable UI rendering.",
  },
  {
    question: "Explain the difference between a class component and a functional component.",
    idealAnswer: "Historically, **Class Components** were the only way to have state and lifecycle methods. They are ES6 classes that extend `React.Component`.\n\n**Functional Components** were simple functions that accepted props and returned JSX. With the introduction of **Hooks** (like `useState` and `useEffect`), functional components can now manage state and side effects, making them the modern and preferred way to write React components due to their simpler syntax and easier testing.",
  },
  {
    question: "What is JSX and why is it necessary?",
    idealAnswer: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files. It is not mandatory to use JSX, but it makes writing React components much more intuitive and readable. JSX code needs to be transpiled by tools like Babel into regular `React.createElement()` calls that JavaScript can understand.",
  },
];

const mediumQuestions = [
    {
        question: "Describe the concept of 'props' versus 'state'.",
        idealAnswer: "**Props** (short for properties) are read-only arguments passed into components from their parent. They are how components communicate with each other. A component cannot change its own props.\n\n**State** is data that is managed *within* a component. It is private and can be changed by the component itself (using `this.setState` in class components or `useState` hook in functional components). When a component's state changes, React re-renders the component to reflect the new state.",
    },
    {
        question: "What is the significance of 'keys' when rendering a list of elements?",
        idealAnswer: "Keys are a special string attribute you need to include when creating lists of elements. They help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique for each element in the list. Using the array index as a key is generally discouraged, as it can lead to performance issues and bugs if the list order changes.",
    },
    {
        question: "Explain the component lifecycle in React.",
        idealAnswer: "The component lifecycle describes the series of phases a component goes through from its creation to its removal from the DOM.\n\n- **Mounting**: The component is being created and inserted into the DOM. Key methods/hooks are `constructor()`, `render()`, and `componentDidMount()` (or `useEffect` with an empty dependency array `[]`).\n- **Updating**: The component is being re-rendered as a result of changes to its props or state. Key methods are `render()` and `componentDidUpdate()` (or `useEffect` with dependencies).\n- **Unmounting**: The component is being removed from the DOM. The key method is `componentWillUnmount()` (or the cleanup function returned from `useEffect`).",
    },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const { toast } = useToast();

  const currentQuestion = useMemo(() => questions[currentIndex], [questions, currentIndex]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetState();
    }
  };
  
  const resetState = () => {
    setShowAnswer(false);
    setUserAnswer('');
    setAiFeedback(null);
  }

  const handleGetFeedback = async () => {
    if (!userAnswer.trim()) {
        toast({ variant: 'destructive', title: 'Please enter your answer first.' });
        return;
    }
    setIsLoading(true);
    setAiFeedback(null);
    try {
        const result = await conductInterview({
            language: 'React',
            question: currentQuestion.question,
            userAnswer: userAnswer,
            previousQuestions: [currentQuestion.question], // simplified for this use case
        });
        const parsedFeedback = await marked(result.feedback);
        setAiFeedback(parsedFeedback);

    } catch (error) {
        console.error('AI feedback error:', error);
        toast({ variant: 'destructive', title: 'Failed to get AI feedback.' });
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <Card className="min-h-[400px] flex flex-col">
      <CardHeader>
        <CardDescription>Question {currentIndex + 1} of {questions.length}</CardDescription>
        <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {showAnswer && (
          <Card className="bg-muted/50 animate-in fade-in-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-primary"><Lightbulb /> Ideal Answer</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-ul:text-foreground/90 prose-li:text-foreground/90"
                dangerouslySetInnerHTML={{ __html: currentQuestion.idealAnswer }}
              />
            </CardContent>
          </Card>
        )}
        
        {showAnswer && (
            <div className="space-y-2">
                <Textarea 
                    placeholder="Now, try to answer in your own words..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
                <Button onClick={handleGetFeedback} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Get Feedback
                </Button>
            </div>
        )}

        {aiFeedback && (
             <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-primary"><Sparkles/> AI Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: aiFeedback }} />
                </CardContent>
            </Card>
        )}

      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        {!showAnswer && (
            <Button onClick={() => setShowAnswer(true)}>Reveal Answer</Button>
        )}
        <Button variant="outline" onClick={handleNext} disabled={currentIndex === questions.length - 1}>
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
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
            <QnA questions={categories.easy} />
        </TabsContent>
        <TabsContent value="medium">
            <QnA questions={categories.medium} />
        </TabsContent>
        <TabsContent value="hard">
            <QnA questions={categories.hard} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
