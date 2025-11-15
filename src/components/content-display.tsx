'use client';

import type { Language, Topic } from '@/app/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Wand2, Terminal, FileText, ChevronRight, Code, HelpCircle, Variable, Box, Braces, Link2 } from 'lucide-react';
import React, { useState } from 'react';
import {
  simplifyTopicExplanation,
  type SimplifyTopicExplanationOutput,
} from '@/ai/flows/simplify-topic-explanations';
import {
  answerQuestion,
  type AnswerQuestionOutput,
} from '@/ai/flows/answer-question';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';

function JavaDataTypes() {
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null);

  const primitiveTypes = [
    { id: 'byte', name: 'byte', size: '8-bit', range: '-128 to 127', example: 'byte age = 30;', description: 'Stores whole numbers.' },
    { id: 'short', name: 'short', size: '16-bit', range: '-32,768 to 32,767', example: 'short salary = 25000;', description: 'Stores whole numbers.' },
    { id: 'int', name: 'int', size: '32-bit', range: '-2.1B to 2.1B', example: 'int population = 1000000;', description: 'Stores whole numbers, commonly used.' },
    { id: 'long', name: 'long', size: '64-bit', range: 'Very large', example: 'long worldPopulation = 8000000000L;', description: 'Stores very large whole numbers.' },
    { id: 'float', name: 'float', size: '32-bit', precision: '~6-7 digits', example: 'float price = 19.99f;', description: 'Stores fractional numbers.' },
    { id: 'double', name: 'double', size: '64-bit', precision: '~15 digits', example: 'double pi = 3.1415926535;', description: 'Stores fractional numbers, commonly used.' },
    { id: 'boolean', name: 'boolean', size: '1-bit', values: 'true or false', example: 'boolean isLoggedIn = true;', description: 'Stores true or false values.' },
    { id: 'char', name: 'char', size: '16-bit', values: 'Single character/symbol', example: 'char grade = \'A\';', description: 'Stores single characters.' },
  ];

  const referenceTypes = [
    { id: 'string', name: 'String', description: 'A sequence of characters, like "Hello World".', example: 'String greeting = "Hello, Java!";' },
    { id: 'array', name: 'Array', description: 'A collection of variables of the same type.', example: 'int[] numbers = {1, 2, 3, 4, 5};' },
    { id: 'class', name: 'Class', description: 'A blueprint for creating objects.', example: 'class MyClass { int x = 5; }' },
    { id: 'interface', name: 'Interface', description: 'A contract for what a class can do.', example: 'interface Animal { void makeSound(); }' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Variable className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Java Data Types</h1>
        </div>
        <p className="text-muted-foreground text-lg">Understanding the building blocks of data in Java</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Box className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Primitive Types</CardTitle>
          </div>
          <CardDescription>The fundamental data types directly holding values.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primitiveTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedTypeId(type.id === selectedTypeId ? null : type.id)}
              className={cn(
                "bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50",
                selectedTypeId === type.id ? 'border-primary ring-2 ring-primary/50' : 'border-border'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{type.name}</h3>
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{type.size}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 h-10">{type.description}</p>
              
              {selectedTypeId === type.id && (
                <div className="mt-4 space-y-3 bg-foreground/5 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Example:</p>
                    <pre className="text-primary text-sm font-code whitespace-pre-wrap">{type.example}</pre>
                </div>
              )}

              <div className="flex items-center justify-end mt-4 text-primary">
                <span className="text-sm font-medium">
                  {selectedTypeId === type.id ? 'Collapse' : 'Expand'}
                </span>
                <ChevronRight className={cn(
                    "w-4 h-4 ml-1 transition-transform",
                    selectedTypeId === type.id ? 'rotate-90' : ''
                )} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Link2 className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Reference Types</CardTitle>
          </div>
          <CardDescription>Types that store a reference (or address) to an object in memory.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referenceTypes.map((type) => (
             <div key={type.id} className="bg-muted border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
               <h3 className="font-bold text-primary text-lg mb-2">{type.name}</h3>
               <p className="text-sm text-foreground mb-3 h-12">{type.description}</p>
               <div className="bg-background/50 rounded p-2">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <code className="text-sm text-foreground font-code">{type.example}</code>
               </div>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function JavaPrintFormats() {
  const [selectedMethodId, setSelectedMethodId] = useState<number | null>(null);

  const printMethods = [
    {
      id: 1,
      name: 'System.out.print()',
      description: 'Prints text without adding a new line at the end.',
      syntax: 'System.out.print(value);',
      example: 'System.out.print("Hello");\nSystem.out.print(" World");',
      output: 'Hello World',
    },
    {
      id: 2,
      name: 'System.out.println()',
      description: 'Prints text and adds a new line at the end.',
      syntax: 'System.out.println(value);',
      example: 'System.out.println("Hello");\nSystem.out.println("World");',
      output: 'Hello\nWorld',
    },
    {
      id: 3,
      name: 'System.out.printf()',
      description: 'Prints formatted text using format specifiers.',
      syntax: 'System.out.printf(format, args...);',
      example: 'System.out.printf("Name: %s, Age: %d%n", "John", 25);',
      output: 'Name: John, Age: 25',
    },
    {
      id: 4,
      name: 'String.format()',
      description: 'Returns a formatted string instead of printing it.',
      syntax: 'String str = String.format(format, args...);',
      example: 'String formatted = String.format("Price: $%.2f", 19.99);\nSystem.out.println(formatted);',
      output: 'Price: $19.99',
    },
    {
      id: 5,
      name: 'System.err.println()',
      description: 'Prints to the standard error stream, often shown in red.',
      syntax: 'System.err.println(errorMessage);',
      example: 'System.err.println("Error: File not found.");',
      output: 'Error: File not found.',
    },
  ];

  const formatSpecifiers = [
    { spec: '%s', desc: 'String', example: 'System.out.printf("Name: %s", "John");' },
    { spec: '%d', desc: 'Integer', example: 'System.out.printf("Age: %d", 25);' },
    { spec: '%f', desc: 'Float/Double', example: 'System.out.printf("Price: %.2f", 19.99);' },
    { spec: '%b', desc: 'Boolean', example: 'System.out.printf("Is active: %b", true);' },
    { spec: '%c', desc: 'Character', example: 'System.out.printf("Initial: %c", \'J\');' },
    { spec: '%n', desc: 'New line', example: 'System.out.printf("Line 1%nLine 2");' },
  ];

  return (
    <div className="space-y-8">
       <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Terminal className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Java Print Methods</h1>
          </div>
          <p className="text-muted-foreground text-lg">A guide to output formatting in Java</p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {printMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethodId(method.id === selectedMethodId ? null : method.id)}
            className={cn(
              "bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50",
              selectedMethodId === method.id ? 'border-primary ring-2 ring-primary/50' : 'border-border'
            )}
          >
            <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{method.name}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 h-10">{method.description}</p>
            
            <div className="bg-muted rounded-lg p-3 mb-3">
              <p className="text-xs text-muted-foreground mb-1">Syntax:</p>
              <code className="text-sm text-foreground font-code">{method.syntax}</code>
            </div>

            {selectedMethodId === method.id && (
              <div className="mt-4 space-y-3">
                <div className="bg-foreground/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-2">Example Code:</p>
                  <pre className="text-primary text-sm font-code whitespace-pre-wrap">{method.example}</pre>
                </div>
                <div className="bg-foreground/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-2">Output:</p>
                  <pre className="text-foreground/80 text-sm font-code whitespace-pre-wrap">{method.output}</pre>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-end mt-4 text-primary">
              <span className="text-sm font-medium">
                {selectedMethodId === method.id ? 'Collapse' : 'Expand'}
              </span>
              <ChevronRight className={cn(
                  "w-4 h-4 ml-1 transition-transform",
                  selectedMethodId === method.id ? 'rotate-90' : ''
              )} />
            </div>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl">Format Specifiers</CardTitle>
          </div>
          <CardDescription>
            Used with `printf()` and `String.format()` to format values.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {formatSpecifiers.map((spec) => (
             <div key={spec.spec} className="bg-muted border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
               <code className="font-bold text-primary text-lg">{spec.spec}</code>
               <p className="text-sm text-foreground mt-1 mb-2">{spec.desc}</p>
               <div className="bg-background/50 rounded p-2">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <code className="text-sm text-foreground font-code">{spec.example}</code>
               </div>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}


export function ContentDisplay({ topic, language }: ContentDisplayProps) {
  const [isSimplifying, setIsSimplifying] = React.useState(false);
  const [simplifiedContent, setSimplifiedContent] =
    React.useState<SimplifyTopicExplanationOutput | null>(null);
  
  const [question, setQuestion] = React.useState('');
  const [isAsking, setIsAsking] = React.useState(false);
  const [qaResult, setQaResult] = React.useState<AnswerQuestionOutput | null>(null);

  const { toast } = useToast();

  const handleSimplify = async () => {
    setIsSimplifying(true);
    setSimplifiedContent(null);
    try {
      const result = await simplifyTopicExplanation({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
      });
      setSimplifiedContent(result);
    } catch (error) {
      console.error('Failed to simplify explanation:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          'Failed to generate simplified explanation. Please try again.',
      });
    } finally {
      setIsSimplifying(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    setIsAsking(true);
    setQaResult(null);
    try {
      const result = await answerQuestion({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
        question: question,
      });
      setQaResult(result);
    } catch (error) {
      console.error('Failed to answer question:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get an answer. Please try again.',
      });
    } finally {
      setIsAsking(false);
    }
  };
  
  const isJavaPrintTopic = language.slug === 'java' && topic.slug === 'print-formats';
  const isJavaDataTypesTopic = language.slug === 'java' && topic.slug === 'data-types';

  return (
    <div className="space-y-8">
      {!isJavaPrintTopic && !isJavaDataTypesTopic && (
        <header className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            {topic.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            A deep dive into {topic.title} in {language.name}.
          </p>
        </header>
      )}
      
      {isJavaPrintTopic ? <JavaPrintFormats /> : 
       isJavaDataTypesTopic ? <JavaDataTypes /> : (
        <Card>
          <CardHeader>
            <CardTitle>Original Explanation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">{topic.explanation}</p>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col items-center gap-4">
        <Button onClick={handleSimplify} disabled={isSimplifying} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Wand2 className="mr-2 h-5 w-5" />
          {isSimplifying ? 'Generating...' : 'Simplify with AI'}
        </Button>
        <p className="text-sm text-muted-foreground">Let AI help you understand this topic better.</p>
      </div>
      
      {isSimplifying && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/3" />
            </CardHeader>
             <CardContent>
                <Skeleton className="h-32 w-full" />
            </CardContent>
          </Card>
        </div>
      )}

      {simplifiedContent && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle>Simplified Explanation</CardTitle>
                <CardDescription>A simpler take on {topic.title}.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="whitespace-pre-wrap font-body text-base leading-relaxed text-foreground/90">
                  {simplifiedContent.simplifiedExplanation}
                </div>
             </CardContent>
           </Card>
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>See {topic.title} in action.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="bg-card p-4 rounded-md overflow-x-auto">
                  <pre><code className="font-code text-sm text-foreground">
                    {simplifiedContent.examples}
                  </code></pre>
                </div>
             </CardContent>
           </Card>
        </div>
      )}
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            Ask a Question
          </CardTitle>
          <CardDescription>
            Have a question about {topic.title}? Ask our AI assistant.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder={`e.g., "What is the difference between a primitive and reference type?"`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isAsking}
          />
          <Button onClick={handleAskQuestion} disabled={isAsking || !question.trim()}>
            {isAsking ? 'Thinking...' : 'Get Answer'}
          </Button>
        </CardContent>
      </Card>
      
      {isAsking && (
        <Card>
            <CardContent className="p-6 space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
      )}

      {qaResult && (
        <Card className="border-primary/50 bg-primary/5 animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle>Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: qaResult.answer.replace(/\n/g, '<br />') }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
