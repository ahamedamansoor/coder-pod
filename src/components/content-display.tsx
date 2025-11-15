




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
import { Wand2, Terminal, FileText, ChevronRight, Code, HelpCircle, Variable, Box, Braces, Link2, PencilRuler, ArrowRight, GitCommitHorizontal, Sparkles, Puzzle, Package, Globe, Shield, Anchor, Cpu, Shuffle, Cloud, Share2, Rabbit, Rocket, VenetianMask, CheckCircle2, History, Lightbulb, Users, Network, Gamepad2, ShoppingCart, Tv, Bot, Smartphone, Briefcase, BrainCircuit, Play, Layers, HardHat, PlayCircle, Library, Milestone, Download, Settings, FileCode, Route, HandMetal, Workflow, ArrowBigRight, File, Binary, Laptop, MessageSquare, Book, DraftingCompass, CornerDownLeft, Combine, Asterisk, Pin, Award, BadgeHelp, Sigma } from 'lucide-react';
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
import { JavaLearningRoadmap } from './java-learning-roadmap';
import { WhatIsJava, TheStoryOfJava, JavaFeatures, JdkJreJvm, JavaEnvironmentSetup, FirstJavaProgram, HowJavaWorks, JavaComments, JavaEscapeSequences, JavaLiterals, JavaConstants, JavaArithmeticOperators, JavaAssignmentOperators, JavaComparisonOperators, JavaLogicalOperators, JavaBitwiseOperators, JavaTernaryOperator, JavaOperatorPrecedence } from './what-is-java';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

function JavaTypeCasting({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const wideningExample = {
      title: 'Widening Casting (Automatic)',
      description: 'This happens when you pass a smaller data type to a larger one. Java does this for you automatically because there is no risk of losing data.',
      code: 'int myInt = 9;\ndouble myDouble = myInt; // Automatic casting: int to double\n\nSystem.out.println(myInt);      // Outputs 9\nSystem.out.println(myDouble);   // Outputs 9.0',
      order: 'byte -> short -> char -> int -> long -> float -> double'
    };
  
    const narrowingExample = {
      title: 'Narrowing Casting (Manual)',
      description: 'This happens when you pass a larger data type to a smaller one. You must do this manually by placing the type in parentheses. Be careful, you might lose data!',
      code: 'double myDouble = 9.78;\nint myInt = (int) myDouble; // Manual casting: double to int\n\nSystem.out.println(myDouble);   // Outputs 9.78\nSystem.out.println(myInt);      // Outputs 9 (the decimal part is lost)',
      order: 'double -> float -> long -> int -> char -> short -> byte'
    };
  
    return (
      <div id="java-type-casting-page" data-test="java-type-casting-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GitCommitHorizontal className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Type Casting</h1>
          </div>
          <p className="text-muted-foreground text-lg">Changing a variable from one data type to another.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Why and When to Use Type Casting</CardTitle>
            <CardDescription>
              Type casting allows you to convert a variable from one data type to another, which is essential for managing data and performing operations correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <PencilRuler className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">For Calculations</h3>
                      <p className="text-muted-foreground text-sm">To perform math operations between different numeric types, you often need to convert them to a common type first (usually a larger one to avoid losing data).</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Braces className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">Assigning Values</h3>
                      <p className="text-muted-foreground text-sm">It's required when you want to put a value from a "larger" data type into a "smaller" one, like saving a `double` (e.g., 9.78) into an `int` (which can only hold whole numbers).</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Code className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">Working with APIs/Libraries</h3>
                      <p className="text-muted-foreground text-sm">Sometimes, a method or function you want to use requires a specific data type. You'll need to cast your variable to match what the method expects.</p>
                  </div>
              </div>
          </CardContent>
        </Card>
  
        <Card className="bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Widening Casting</CardTitle>
            <CardDescription>{wideningExample.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="bg-background rounded-lg p-4 overflow-x-auto">
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{wideningExample.code}</code></pre>
              </div>
              <Button onClick={() => onOpenEditor(wrapInMain(wideningExample.code))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
                <p className="font-semibold text-primary mb-2">SAFE & AUTOMATIC</p>
                <div className="font-mono text-sm bg-foreground/5 p-3 rounded-md">
                    {wideningExample.order.split('->').map((type, index, arr) => (
                        <React.Fragment key={type}>
                            <span className="text-foreground/80">{type.trim()}</span>
                            {index < arr.length - 1 && <ArrowRight className="inline w-4 h-4 mx-1 text-primary/50" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Smaller type to larger type</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Narrowing Casting</CardTitle>
            <CardDescription>{narrowingExample.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
                <div className="bg-background rounded-lg p-4 overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{narrowingExample.code}</code></pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(narrowingExample.code))} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </div>
             <div className="flex flex-col items-center text-center">
                <p className="font-semibold text-destructive mb-2">UNSAFE & MANUAL</p>
                <div className="font-mono text-sm bg-foreground/5 p-3 rounded-md">
                    {narrowingExample.order.split('->').map((type, index, arr) => (
                        <React.Fragment key={type}>
                            <span className="text-foreground/80">{type.trim()}</span>
                            {index < arr.length - 1 && <ArrowRight className="inline w-4 h-4 mx-1 text-destructive/50" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Larger type to smaller type (potential data loss)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

function JavaVariables({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const declarationSteps = [
      {
        step: 1,
        title: 'Choose a Data Type',
        description: "Decide what kind of data the variable will hold (e.g., `int` for integers, `String` for text).",
        code: 'int',
      },
      {
        step: 2,
        title: 'Give it a Name',
        description: 'Choose a descriptive name for your variable (e.g., `userAge`, `firstName`).',
        code: 'userAge',
      },
      {
        step: 3,
        title: 'Combine Them',
        description: 'Put the type and name together, followed by a semicolon.',
        code: 'int userAge;',
      },
    ];
  
    const initializationExamples = [
      {
        id: 'declare-init',
        title: 'Declare then Initialize',
        description: 'You can declare a variable first and then assign a value to it on a separate line.',
        code: 'int score;\nscore = 100;\nSystem.out.println(score);',
      },
      {
        id: 'declare-and-init',
        title: 'Declare and Initialize',
        description: 'A common shortcut is to assign a value at the same time you declare the variable.',
        code: 'int score = 100;\nSystem.out.println(score);',
      },
      {
        id: 'multiple',
        title: 'Multiple Variables',
        description: 'You can declare multiple variables of the same type on one line, separated by commas.',
        code: 'int x = 5, y = 10, z = 15;\nSystem.out.println(x + y + z);',
      },
      {
        id: 'final',
        title: 'Final (Constants)',
        description: 'Use the `final` keyword to create a constant, whose value cannot be changed.',
        code: 'final double PI = 3.14159;\nSystem.out.println(PI);',
      },
    ];
  
    return (
      <div id="java-variables-page" data-test="java-variables-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <PencilRuler className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Variables Basics</h1>
          </div>
          <p className="text-muted-foreground text-lg">The first step to storing data in Java</p>
        </div>
  
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What is Declaring a Variable?</CardTitle>
            <CardDescription>Declaration tells the compiler the variable's name and the type of data it will hold.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6 p-8">
            {declarationSteps.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="bg-muted rounded p-2 w-full overflow-x-auto">
                    <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{item.code}</code></pre>
                  </div>
                  <Button onClick={() => onOpenEditor(wrapInMain('// This is just a declaration, it doesn\'t print anything by itself\n' + item.code))} variant="ghost" size="sm" className="mt-2">
                      <Play className="mr-2 h-4 w-4" /> Try it
                  </Button>
                </div>
                {index < declarationSteps.length - 1 && (
                  <ChevronRight className="w-8 h-8 text-muted-foreground hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What is Initializing a Variable?</CardTitle>
            <CardDescription>Initialization is the process of assigning an initial value to a declared variable.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {initializationExamples.map((ex) => (
              <div key={ex.id} className="bg-muted border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">{ex.title}</h3>
                <p className="text-sm text-foreground mb-3 h-12">{ex.description}</p>
                <div className="bg-background/50 rounded p-3 overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{ex.code}</code></pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(ex.code))} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

function JavaDataTypes({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null);

  const primitiveTypes = [
    { id: 'byte', name: 'byte', size: '8-bit', range: '-128 to 127', example: 'byte age = 30;\nSystem.out.println(age);', description: 'Stores whole numbers.' },
    { id: 'short', name: 'short', size: '16-bit', range: '-32,768 to 32,767', example: 'short salary = 25000;\nSystem.out.println(salary);', description: 'Stores whole numbers.' },
    { id: 'int', name: 'int', size: '32-bit', range: '-2,147,483,648 to 2,147,483,647', example: 'int population = 1000000;\nSystem.out.println(population);', description: 'Stores whole numbers, commonly used.' },
    { id: 'long', name: 'long', size: '64-bit', range: '-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807', example: 'long worldPopulation = 8000000000L;\nSystem.out.println(worldPopulation);', description: 'Stores very large whole numbers.' },
    { id: 'float', name: 'float', size: '32-bit', precision: '~6-7 digits', example: 'float price = 19.99f;\nSystem.out.println(price);', description: 'Stores fractional numbers.' },
    { id: 'double', name: 'double', size: '64-bit', precision: '~15 digits', example: 'double pi = 3.1415926535;\nSystem.out.println(pi);', description: 'Stores fractional numbers, commonly used.' },
    { id: 'boolean', name: 'boolean', size: '1-bit', values: 'true or false', example: 'boolean isLoggedIn = true;\nSystem.out.println(isLoggedIn);', description: 'Stores true or false values.' },
    { id: 'char', name: 'char', size: '16-bit', range: '0 to 65,535', example: 'char grade = \'A\';\nSystem.out.println(grade);', description: 'Stores single Unicode characters. You can look up characters on the' },
  ];

  const referenceTypes = [
    { id: 'string', name: 'String', description: 'A sequence of characters, like "Hello World".', example: 'String greeting = "Hello, Java!";\nSystem.out.println(greeting);' },
    { id: 'array', name: 'Array', description: 'A collection of variables of the same type.', example: 'int[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[0]);' },
    { id: 'class', name: 'Class', description: 'A blueprint for creating objects.', example: 'class MyClass { int x = 5; }\nMyClass myObj = new MyClass();\nSystem.out.println(myObj.x);' },
    { id: 'interface', name: 'Interface', description: 'A contract for what a class can do.', example: 'interface Animal { public void makeSound(); }\nclass Dog implements Animal {\n  public void makeSound() {\n    System.out.println("Woof");\n  }\n}\nDog myDog = new Dog();\nmyDog.makeSound();' },
  ];

  return (
    <div id="java-data-types-page" data-test="java-data-types-page" className="space-y-8">
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
              <p className="text-muted-foreground text-sm mb-4 h-10">
                {type.description}{' '}
                {type.id === 'char' && (
                  <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Unicode website
                  </a>
                )}.
              </p>
              
              {selectedTypeId === type.id && (
                <div className="mt-4 space-y-3 bg-foreground/5 rounded-lg p-3 overflow-x-auto">
                    <p className="text-xs text-muted-foreground mb-1">Range:</p>
                    <p className="text-sm font-semibold whitespace-pre-wrap">{type.range || type.values || type.precision}</p>
                    <p className="text-xs text-muted-foreground mb-1 mt-2">Example:</p>
                    <pre className="text-primary text-sm font-code whitespace-pre-wrap">{type.example}</pre>
                    <Button onClick={(e) => { e.stopPropagation(); onOpenEditor(wrapInMain(type.example)); }} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
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
               <div className="bg-background/50 rounded p-2 overflow-x-auto">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{type.example}</code></pre>
               </div>
               <Button onClick={() => onOpenEditor(wrapInMain(type.example))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
               </Button>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function JavaPrintFormats({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
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
    <div id="java-print-formats-page" data-test="java-print-formats-page" className="space-y-8">
       <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Terminal className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Print Statements & Format Specifiers</h1>
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
            
            <div className="bg-muted rounded-lg p-3 mb-3 overflow-x-auto">
              <p className="text-xs text-muted-foreground mb-1">Syntax:</p>
              <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{method.syntax}</code></pre>
            </div>

            {selectedMethodId === method.id && (
              <div className="mt-4 space-y-3">
                <div className="bg-foreground/5 rounded-lg p-4 overflow-x-auto">
                  <p className="text-xs text-muted-foreground mb-2">Example Code:</p>
                  <pre className="text-primary text-sm font-code whitespace-pre-wrap">{method.example}</pre>
                </div>
                <div className="bg-foreground/5 rounded-lg p-4 overflow-x-auto">
                  <p className="text-xs text-muted-foreground mb-2">Output:</p>
                  <pre className="text-foreground/80 text-sm font-code whitespace-pre-wrap">{method.output}</pre>
                </div>
                <Button onClick={(e) => { e.stopPropagation(); onOpenEditor(wrapInMain(method.example)); }} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
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
               <div className="bg-background/50 rounded p-2 overflow-x-auto">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{spec.example}</code></pre>
               </div>
               <Button onClick={() => onOpenEditor(wrapInMain(spec.example))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
               </Button>
             </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}


export function ContentDisplay({ topic, language, onOpenEditor }: { topic: Topic, language: Language, onOpenEditor: (code: string) => void; }) {
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
  
  const isWhatIsJavaTopic = language.slug === 'java' && topic.slug === 'what-is-java';
  const isHistoryOfJavaTopic = language.slug === 'java' && topic.slug === 'history-of-java';
  const isFeaturesOfJavaTopic = language.slug === 'java' && topic.slug === 'features-of-java';
  const isJdkJreJvmTopic = language.slug === 'java' && topic.slug === 'jdk-jre-jvm';
  const isHowJavaWorksTopic = language.slug === 'java' && topic.slug === 'how-java-works';
  const isJavaPrintTopic = language.slug === 'java' && topic.slug === 'print-statements-and-format-specifiers';
  const isJavaDataTypesTopic = language.slug === 'java' && topic.slug === 'data-types';
  const isJavaVariablesTopic = language.slug === 'java' && topic.slug === 'variables';
  const isJavaTypeCastingTopic = language.slug === 'java' && topic.slug === 'type-casting';
  const isLearningPlanTopic = language.slug === 'java' && topic.slug === 'learning-plan';
  const isSettingUpEnvironmentTopic = language.slug === 'java' && topic.slug === 'setting-up-environment';
  const isFirstJavaProgramTopic = language.slug === 'java' && topic.slug === 'first-java-program';
  const isCommentsInJavaTopic = language.slug === 'java' && topic.slug === 'comments-in-java';
  const isEscapeSequencesTopic = language.slug === 'java' && topic.slug === 'escape-sequences';
  const isConstantsTopic = language.slug === 'java' && topic.slug === 'constants';
  const isLiteralsTopic = language.slug === 'java' && topic.slug === 'literals';
  const isArithmeticOperatorsTopic = language.slug === 'java' && topic.slug === 'arithmetic-operators';
  const isAssignmentOperatorsTopic = language.slug === 'java' && topic.slug === 'assignment-operators';
  const isComparisonOperatorsTopic = language.slug === 'java' && topic.slug === 'comparison-operators';
  const isLogicalOperatorsTopic = language.slug === 'java' && topic.slug === 'logical-operators';
  const isBitwiseOperatorsTopic = language.slug === 'java' && topic.slug === 'bitwise-operators';
  const isTernaryOperatorTopic = language.slug === 'java' && topic.slug === 'ternary-operator';
  const isOperatorPrecedenceTopic = language.slug === 'java' && topic.slug === 'operator-precedence';


  const renderTopicContent = () => {
    if (isLearningPlanTopic) {
      return <JavaLearningRoadmap />;
    }
    if (isWhatIsJavaTopic) {
      return <WhatIsJava />;
    }
    if (isHistoryOfJavaTopic) {
      return <TheStoryOfJava />;
    }
    if (isFeaturesOfJavaTopic) {
      return <JavaFeatures />;
    }
    if (isJdkJreJvmTopic) {
      return <JdkJreJvm />;
    }
    if (isHowJavaWorksTopic) {
      return <HowJavaWorks />;
    }
    if(isSettingUpEnvironmentTopic) {
      return <JavaEnvironmentSetup />;
    }
    if (isFirstJavaProgramTopic) {
      return <FirstJavaProgram onOpenEditor={onOpenEditor} />;
    }
    if (isCommentsInJavaTopic) {
      return <JavaComments onOpenEditor={onOpenEditor} />;
    }
    if (isJavaPrintTopic) {
      return <JavaPrintFormats onOpenEditor={onOpenEditor} />;
    }
    if (isJavaDataTypesTopic) {
      return <JavaDataTypes onOpenEditor={onOpenEditor} />;
    }
    if (isJavaVariablesTopic) {
      return <JavaVariables onOpenEditor={onOpenEditor} />;
    }
    if (isJavaTypeCastingTopic) {
        return <JavaTypeCasting onOpenEditor={onOpenEditor} />;
    }
    if (isEscapeSequencesTopic) {
        return <JavaEscapeSequences onOpenEditor={onOpenEditor} />;
    }
    if (isConstantsTopic) {
      return <JavaConstants onOpenEditor={onOpenEditor} />;
    }
    if (isLiteralsTopic) {
      return <JavaLiterals onOpenEditor={onOpenEditor} />;
    }
    if (isArithmeticOperatorsTopic) {
      return <JavaArithmeticOperators onOpenEditor={onOpenEditor} />;
    }
    if (isAssignmentOperatorsTopic) {
      return <JavaAssignmentOperators onOpenEditor={onOpenEditor} />;
    }
    if (isComparisonOperatorsTopic) {
      return <JavaComparisonOperators onOpenEditor={onOpenEditor} />;
    }
    if (isLogicalOperatorsTopic) {
      return <JavaLogicalOperators onOpenEditor={onOpenEditor} />;
    }
    if (isBitwiseOperatorsTopic) {
      return <JavaBitwiseOperators onOpenEditor={onOpenEditor} />;
    }
    if (isTernaryOperatorTopic) {
      return <JavaTernaryOperator onOpenEditor={onOpenEditor} />;
    }
    if (isOperatorPrecedenceTopic) {
      return <JavaOperatorPrecedence onOpenEditor={onOpenEditor} />;
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Original Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed">{topic.explanation}</p>
        </CardContent>
      </Card>
    );
  };

  const showSimplifyButton = !isWhatIsJavaTopic && !isHistoryOfJavaTopic && !isFeaturesOfJavaTopic && !isJdkJreJvmTopic && !isHowJavaWorksTopic && !isJavaPrintTopic && !isJavaDataTypesTopic && !isJavaVariablesTopic && !isJavaTypeCastingTopic && !isLearningPlanTopic && !isSettingUpEnvironmentTopic && !isFirstJavaProgramTopic && !isCommentsInJavaTopic && !isEscapeSequencesTopic && !isConstantsTopic && !isLiteralsTopic && !isArithmeticOperatorsTopic && !isAssignmentOperatorsTopic && !isComparisonOperatorsTopic && !isLogicalOperatorsTopic && !isBitwiseOperatorsTopic && !isTernaryOperatorTopic && !isOperatorPrecedenceTopic;

  return (
    <div className="space-y-8">
       {showSimplifyButton && (
        <header className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            {topic.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            A deep dive into {topic.title} in {language.name}.
          </p>
        </header>
      )}
      
      {renderTopicContent()}

      {showSimplifyButton && (
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleSimplify} disabled={isSimplifying} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Wand2 className="mr-2 h-5 w-5" />
            {isSimplifying ? 'Generating...' : 'Simplify with AI'}
          </Button>
          <p className="text-sm text-muted-foreground">Let AI help you understand this topic better.</p>
        </div>
      )}
      
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
                  <pre className="whitespace-pre-wrap"><code className="font-code text-sm text-foreground">
                    {simplifiedContent.examples}
                  </code></pre>
                </div>
             </CardContent>
           </Card>
        </div>
      )}
      
      {!isLearningPlanTopic && (
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
      )}
      
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
          <CardHeader className="flex-row items-start gap-4">
            <div className="bg-primary text-primary-foreground p-2 rounded-full">
              <Sparkles className="w-5 h-5"/>
            </div>
            <div>
              <CardTitle>AI Answer</CardTitle>
              <CardDescription>Here's what our AI assistant came up with.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-code:text-primary whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: qaResult.answer.replace(/\n/g, '<br />') }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

    
