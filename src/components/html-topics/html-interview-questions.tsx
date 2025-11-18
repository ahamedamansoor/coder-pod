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
import { conductInterview, type ConductInterviewOutput } from '@/ai/flows/interview-flow';
import { Skeleton } from '../ui/skeleton';
import { marked } from 'marked';
import { useToast } from '@/hooks/use-toast';

const easyQuestions = [
  {
    question: "What does HTML stand for?",
    idealAnswer: "HTML stands for **HyperText Markup Language**. It's the standard language used to create and design documents on the World Wide Web.",
  },
  {
    question: "What is the difference between `<div>` and `<span>`?",
    idealAnswer: "`<div>` is a **block-level element**, meaning it starts on a new line and takes up the full width available. It's used for grouping larger sections of content. `<span>` is an **inline-level element**, meaning it does not start on a new line and only takes up as much width as necessary. It's used for styling a small part of a text, like a single word.",
  },
  {
    question: "What is the purpose of the `alt` attribute on an `<img>` tag?",
    idealAnswer: "The `alt` (alternative text) attribute is crucial for **accessibility**. It provides a text description of an image for screen readers used by visually impaired users. It's also displayed if the image fails to load, and it helps search engines understand the image content.",
  },
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
    question: "What is the purpose of the `<!DOCTYPE html>` declaration?",
    idealAnswer: "The `<!DOCTYPE html>` declaration must be the very first thing in your HTML document. It is an instruction to the web browser about what version of HTML the page is written in. This ensures that the page is parsed and rendered correctly by the browser in \"standards mode\". Without it, browsers may enter \"quirks mode,\" which can lead to inconsistent and unpredictable rendering.",
  },
];

const hardQuestions = [
  {
    question: "Explain the difference between `localStorage`, `sessionStorage`, and `cookies`.",
    idealAnswer: "All three are ways to store data on the client-side, but they differ in capacity, persistence, and accessibility:\n\n- **`localStorage`**: Stores data with no expiration date. It persists even after the browser window is closed and reopened. It has a capacity of about 5-10MB and is specific to the protocol and origin of the page.\n- **`sessionStorage`**: Stores data for one session only. The data is cleared when the page session ends (i.e., when the browser tab is closed). It also has a capacity of about 5-10MB and is scoped to the current tab.\n- **`cookies`**: Have a small capacity (about 4KB). They are sent with every HTTP request to the server, which can impact performance. They can have an expiration date and are often used for tracking and managing user sessions on the server-side.",
  },
  {
    question: "What is the `box-sizing` CSS property and how does it relate to HTML layout?",
    idealAnswer: "The `box-sizing` property defines how the total width and height of an element is calculated.\n\n- `content-box` (default): The `width` and `height` properties only apply to the content area. Any `padding` and `border` are added *on top* of the specified width and height, which often makes layout calculations difficult.\n- `border-box`: The `width` and `height` properties include the content, padding, and border. This is a much more intuitive way to work. For example, if you set `width: 200px;`, the element's total visible width will be 200px, regardless of its padding or border.\n\nIt is a common best practice to apply `box-sizing: border-box;` to all elements for more predictable layouts:\n```css\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n```",
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
            language: 'HTML',
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
                dangerouslySetInnerHTML={{ __html: currentQuestion.idealAnswer.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>') }}
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

export default function HtmlInterviewQuestions() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">HTML Interview Q&amp;A</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Test your knowledge with this curated list of common HTML interview questions.
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
