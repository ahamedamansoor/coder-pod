
'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { useJava } from '@/app/java/java-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const JavaLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useJava();
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  
  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const modules = [
    {
      id: 1,
      title: "Getting Started",
      level: "Foundation",
      duration: "Week 1",
      icon: "🚀",
      topics: [
        { id: "what-is-java", name: "What is Java?", desc: "History, features, JVM, JRE, JDK", difficulty: "Easy" },
        { id: "history-of-java", name: "History of Java", desc: "The story of how Java was created and evolved over time.", difficulty: "Easy" },
        { id: "features-of-java", name: "Features of Java", desc: "The key features that make Java a powerful and popular programming language.", difficulty: "Easy" },
        { id: "jdk-jre-jvm", name: "JDK, JRE, and JVM", desc: "Understanding the core components that run a Java program.", difficulty: "Easy" },
        { id: "setting-up-environment", name: "Setting Up Environment", desc: "Installing JDK, IDE (VS Code/IntelliJ/Eclipse)", difficulty: "Easy" },
        { id: "first-java-program", name: "Hello World", desc: "Hello World, structure of Java program", difficulty: "Easy" },
        { id: "how-java-works", name: "Compilation, Bytecode, & Execution", desc: "Compilation process, bytecode, execution", difficulty: "Easy" },
        { id: "comments-in-java", name: "Comments in Java", desc: "Single-line, multi-line, documentation comments", difficulty: "Easy" }
      ]
    },
    {
      id: 2,
      title: "Basic Output",
      level: "Foundation",
      duration: "Week 1",
      icon: "📢",
      topics: [
        { id: "print-statements-and-format-specifiers", name: "Print Statements & Format Specifiers", desc: "print(), println(), printf() and format specifiers like %d, %s", difficulty: "Easy" },
        { id: "escape-sequences", name: "Escape Sequences", desc: "\\n, \\t, \\\\, \\\", etc.", difficulty: "Easy" }
      ]
    },
    {
      id: 3,
      title: "Variables & Data Types",
      level: "Foundation",
      duration: "Week 1-2",
      icon: "📦",
      topics: [
        { id: "variables", name: "Variables Basics", desc: "Declaration, initialization, naming rules", difficulty: "Easy" },
        { id: "data-types", name: "Data Types", desc: "int, double, float, char, boolean, byte, short, long", difficulty: "Easy" },
        { id: "type-casting", name: "Type Casting", desc: "Implicit and explicit casting, widening/narrowing", difficulty: "Medium" },
        { id: "constants", name: "Constants", desc: "final keyword, naming conventions", difficulty: "Easy" },
        { id: "literals", name: "Literals", desc: "Integer, floating-point, character, string literals", difficulty: "Easy" }
      ]
    },
    {
      id: 4,
      title: "Operators",
      level: "Foundation",
      duration: "Week 2",
      icon: "➕",
      topics: [
        { id: "arithmetic-operators", name: "Arithmetic Operators", desc: "+, -, *, /, %, ++, --", difficulty: "Easy" },
        { id: "assignment-operators", name: "Assignment Operators", desc: "=, +=, -=, *=, /=, %=", difficulty: "Easy" },
        { id: "comparison-operators", name: "Comparison Operators", desc: "==, !=, <, >, <=, >=", difficulty: "Easy" },
        { id: "logical-operators", name: "Logical Operators", desc: "&&, ||, !", difficulty: "Easy" },
        { id: "bitwise-operators", name: "Bitwise Operators", desc: "&, |, ^, ~, <<, >>", difficulty: "Medium" },
        { id: "ternary-operator", name: "Ternary Operator", desc: "condition ? true : false", difficulty: "Medium" },
        { id: "operator-precedence", name: "Operator Precedence", desc: "Order of operations, parentheses", difficulty: "Medium" }
      ]
    },
    {
      id: 5,
      title: "User Input",
      level: "Foundation",
      duration: "Week 2",
      icon: "⌨️",
      topics: [
        { id: "scanner-class", name: "Scanner Class", desc: "Import, creating Scanner object", difficulty: "Easy" },
        { id: "reading-different-types", name: "Reading Different Types", desc: "nextInt(), nextDouble(), nextLine(), next()", difficulty: "Easy" },
        { id: "input-validation", name: "Input Validation", desc: "hasNextInt(), hasNextDouble(), error handling", difficulty: "Medium" }
      ]
    },
    {
      id: 6,
      title: "Control Flow - Conditional",
      level: "Core Concepts",
      duration: "Week 3",
      icon: "🔀",
      topics: [
        { id: "if-else", name: "If-Else Statement", desc: "Basic if, if-else, nested if", difficulty: "Easy" },
        { id: "switch", name: "Switch Statement", desc: "Switch statement, break, default", difficulty: "Easy" }
      ]
    },
    {
      id: 7,
      title: "Control Flow - Loops",
      level: "Core Concepts",
      duration: "Week 3-4",
      icon: "🔁",
      topics: [
        { id: "for-loop", name: "For Loop", desc: "Basic for loop, syntax, examples", difficulty: "Easy" },
        { id: "while-loop", name: "While Loop", desc: "While loop syntax and use cases", difficulty: "Easy" },
        { id: "break-continue", name: "Break and Continue", desc: "Loop control statements", difficulty: "Easy" }
      ]
    },
    {
      id: 8,
      title: "Strings & Arrays",
      level: "Core Concepts",
      duration: "Week 4-5",
      icon: "📊",
      topics: [
        { id: "strings", name: "String Methods", desc: "length(), charAt(), substring(), indexOf(), etc.", difficulty: "Easy" },
        { id: "arrays", name: "Arrays", desc: "Declaration, initialization, accessing elements", difficulty: "Easy" },
        { id: "multi-dimensional-arrays", name: "Multi-Dimensional Arrays", desc: "2D arrays, nested arrays", difficulty: "Medium" }
      ]
    },
    {
      id: 9,
      title: "Methods & OOP Basics",
      level: "Core Concepts",
      duration: "Week 5-6",
      icon: "⚙️",
      topics: [
        { id: "methods", name: "Methods", desc: "Creating methods, calling methods", difficulty: "Easy" },
        { id: "method-parameters", name: "Method Parameters", desc: "Passing values to methods", difficulty: "Easy" },
        { id: "method-overloading", name: "Method Overloading", desc: "Same name, different parameters", difficulty: "Medium" },
        { id: "scope", name: "Scope", desc: "Local vs instance variables", difficulty: "Medium" },
        { id: "recursion", name: "Recursion", desc: "Methods calling themselves", difficulty: "Hard" },
        { id: "classes-objects", name: "Classes & Objects", desc: "Defining classes, creating objects", difficulty: "Medium" },
        { id: "constructors", name: "Constructors", desc: "Default, parameterized, constructor overloading", difficulty: "Medium" }
      ]
    },
    {
      id: 10,
      title: "Advanced OOP",
      level: "Advanced",
      duration: "Week 7-8",
      icon: "🏗️",
      topics: [
        { id: "class-attributes", name: "Class Attributes", desc: "Object attributes, this keyword", difficulty: "Medium" },
        { id: "class-methods", name: "Class Methods", desc: "Object behaviors, getters & setters", difficulty: "Medium" },
        { id: "access-modifiers", name: "Access Modifiers", desc: "public, private, protected, default", difficulty: "Medium" },
        { id: "encapsulation", name: "Encapsulation", desc: "Data hiding, information security", difficulty: "Medium" },
        { id: "packages", name: "Packages and API", desc: "Use built-in and user-defined packages", difficulty: "Medium" },
        { id: "inheritance", name: "Inheritance", desc: "extends keyword, parent-child relationship", difficulty: "Medium" },
        { id: 'super-keyword', name: 'The "super" Keyword', desc: 'Calling parent class methods and constructors.', difficulty: 'Medium' },
        { id: 'method-overriding', name: 'Method Overriding', desc: 'Providing specific implementation in subclasses.', difficulty: 'Medium' },
        { id: "polymorphism", name: "Polymorphism", desc: "Runtime polymorphism, dynamic binding", difficulty: "Hard" },
        { id: 'instanceof-operator', name: 'The "instanceof" Operator', desc: 'Checking the runtime type of an object.', difficulty: 'Medium' },
        { id: "inner-classes", name: "Inner Classes", desc: "Nested classes in Java", difficulty: "Medium" },
        { id: "abstraction", name: "Abstraction", desc: "abstract keyword, abstract methods", difficulty: "Hard" },
        { id: "interfaces", name: "Interfaces", desc: "interface keyword, implementing interfaces", difficulty: "Hard" },
        { id: "enums", name: "Enums", desc: "Special classes that represent a group of constants", difficulty: "Medium" },
        { id: 'object-class', name: 'The Object Class', desc: 'The root of all classes in Java.', difficulty: 'Hard' }
      ]
    },
    {
      id: 11,
      title: "Advanced Collections",
      level: "Advanced",
      duration: "Week 9-10",
      icon: "📚",
      topics: [
        { id: 'arraylist', name: 'ArrayList', desc: 'Working with dynamic arrays.', difficulty: 'Easy' },
        { id: 'linkedlist', name: 'LinkedList', desc: 'Working with linked lists.', difficulty: 'Medium' },
        { id: "hashmap", name: "HashMap", desc: "Storing key/value pairs", difficulty: "Medium" },
        { id: "hashset", name: "HashSet", desc: "Storing unique items", difficulty: "Medium" },
        { id: 'treemap-treeset', name: 'TreeMap & TreeSet', desc: 'Understanding sorted collections.', difficulty: 'Hard' },
        { id: 'queue-deque', name: 'Queue & Deque', desc: 'FIFO and LIFO data structures.', difficulty: 'Hard' },
        { id: 'comparable-comparator', name: 'Comparable & Comparator', desc: 'Defining custom sorting logic.', difficulty: 'Hard' },
        { id: "iterator", name: "Iterator", desc: "Looping through collections", difficulty: "Medium" },
        { id: "wrapper-classes", name: "Wrapper Classes", desc: "Using primitive data types as objects", difficulty: "Medium" }
      ]
    },
    {
      id: 12,
      title: "Error Handling & Generics",
      level: "Advanced",
      duration: "Week 11",
      icon: "🧩",
      topics: [
        { id: "exceptions", name: "Exceptions", desc: "Handling errors with try-catch blocks", difficulty: "Medium" },
        { id: 'generics-intro', name: 'Intro to Generics', desc: 'Type safety with collections.', difficulty: 'Medium' },
        { id: 'generics-methods-classes', name: 'Generic Classes & Methods', desc: 'Creating your own generic components.', difficulty: 'Hard' }
      ]
    },
    {
      id: 13,
      title: "Functional Programming",
      level: "Expert",
      duration: "Week 12",
      icon: "✨",
      topics: [
        { id: "lambda", name: "Lambda Expressions", desc: "Functional programming basics", difficulty: "Hard" },
        { id: 'streams-api', name: 'Streams API', desc: 'Declarative data processing with streams.', difficulty: 'Hard' },
        { id: 'optional-class', name: 'The Optional Class', desc: 'Avoiding NullPointerExceptions gracefully.', difficulty: 'Medium' },
        { id: 'method-references', name: 'Method References', desc: 'Shorthand for certain lambda expressions.', difficulty: 'Hard' },
      ]
    },
    {
      id: 14,
      title: "Advanced Concurrency",
      level: "Expert",
      duration: "Week 13-14",
      icon: "🚀",
      topics: [
        { id: "threads", name: "Threads", desc: "Multithreading basics", difficulty: "Hard" },
        { id: 'synchronized-keyword', name: 'The "synchronized" Keyword', desc: 'Basic thread safety.', difficulty: 'Hard' },
        { id: 'volatile-keyword', name: 'The "volatile" Keyword', desc: 'Ensuring visibility of variable changes.', difficulty: 'Hard' },
        { id: 'executors-thread-pools', name: 'Executors & Thread Pools', desc: 'Efficiently managing threads.', difficulty: 'Hard' },
      ]
    },
    {
      id: 15,
      title: "Files & Regex",
      level: "Expert",
      duration: "Week 15",
      icon: "📁",
      topics: [
        { id: "file-handling", name: "File Handling", desc: "Create, read, write, and delete files", difficulty: "Medium" },
        { id: "regex", name: "Regular Expressions", desc: "Pattern matching, regex basics", difficulty: "Hard" }
      ]
    }
  ];

  const chartData = [
    { level: "Foundation", topics: modules.filter(m => m.level === "Foundation").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-1))" },
    { level: "Core Concepts", topics: modules.filter(m => m.level === "Core Concepts").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-2))" },
    { level: "Advanced", topics: modules.filter(m => m.level === "Advanced").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-3))" },
    { level: "Expert", topics: modules.filter(m => m.level === "Expert").reduce((acc, m) => acc + m.topics.length, 0), fill: "hsl(var(--chart-4))" },
  ];

  const toggleTopic = (topicId: string) => {
    if (!isUserAuthenticated) {
      // Potentially show a toast or message
      return;
    }
    handleToggleComplete(topicId);

    const topicModule = modules.find(m => {
        return m.topics.some(t => t.id === topicId);
    });

    if (!topicModule) return;
    
    const isCompleting = !completedTopics.has(topicId);

    if (isCompleting) {
        const allTopicsInModuleCompleted = topicModule.topics.every(t =>
          completedTopics.has(t.id) || t.id === topicId
        );

        if (allTopicsInModuleCompleted) {
          const currentModuleIndex = modules.findIndex(m => m.id === topicModule.id);
          if (currentModuleIndex !== -1 && currentModuleIndex < modules.length - 1) {
            const nextModule = modules[currentModuleIndex + 1];
            setExpandedModule(nextModule.id);
          }
        }
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
      case 'Hard': return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const calculateProgress = () => {
    if (!isUserAuthenticated) return 0;
    const totalTopics = modules.reduce((acc, module) => acc + module.topics.length, 0);
    if (totalTopics === 0) return 0;
    const completed = completedTopics.size;
    return Math.round((completed / totalTopics) * 100);
  };

  if (isUserLoading || isProgressLoading) {
    return (
        <div className="p-2 md:p-6">
            <div className="mx-auto max-w-none">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <Skeleton className="h-12 w-96" />
                    </div>
                    <Skeleton className="h-6 w-80 mx-auto mb-6" />
                    
                    <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
                        <div className="flex items-center justify-between mb-3">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-8 w-16" />
                        </div>
                        <Skeleton className="w-full h-4 rounded-full" />
                        <Skeleton className="h-4 w-48 mt-2" />
                    </div>
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-xl" />
                    ))}
                </div>
            </div>
        </div>
    );
  }
  
  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = modules.reduce((acc, m) => acc + m.topics.length, 0);
  
  const TopicItem = ({ topic }: { topic: (typeof modules)[0]['topics'][0] }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.id);
    const itemContent = (
      <div
        onClick={() => toggleTopic(topic.id)}
        className={cn(
          "bg-background border rounded-lg p-4 transition-all duration-200",
          isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50",
          !isUserAuthenticated && "cursor-not-allowed opacity-70",
          isCompleted ? 'border-primary bg-primary/5' : 'border-border'
        )}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {isCompleted ? (
              <CheckCircle className="w-6 h-6 text-primary" />
            ) : (
              <Circle className="w-6 h-6 text-muted-foreground/50" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <Link href={`/java/${topic.id}`} className="hover:underline">
                <h3 className="text-lg font-semibold text-foreground">{topic.name}</h3>
              </Link>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                {topic.difficulty}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{topic.desc}</p>
          </div>
        </div>
      </div>
    );

    if (!isUserAuthenticated) {
      return (
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
            <TooltipContent>
              <p>Sign in to track your progress.</p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      );
    }
    return itemContent;
  };

  return (
    <div className="p-2 md:p-6 max-w-none">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold text-foreground">Java Learning Path</h1>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            A structured roadmap for beginners to master Java.
          </p>
          
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">Overall Progress</span>
              <span className="text-2xl font-bold text-primary">{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4">
              <div 
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {completedCount} of {totalTopicCount} topics completed
            </p>
          </div>
        </div>
        
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Roadmap Overview</CardTitle>
                <CardDescription>A visual breakdown of topics by difficulty level.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="level" type="category" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} width={100} />
                            <Tooltip
                                cursor={{ fill: 'hsl(var(--muted))' }}
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    borderColor: 'hsl(var(--border))',
                                    borderRadius: 'var(--radius)',
                                }}
                            />
                            <Bar dataKey="topics" radius={[0, 4, 4, 0]} barSize={32}>
                                <LabelList dataKey="topics" position="right" offset={10} className="fill-foreground font-semibold" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="bg-card border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                className={`bg-card p-6 cursor-pointer flex items-center justify-between border-b`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-muted p-3 rounded-full">{module.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {module.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{module.duration} • {module.topics.length} topics</p>
                  </div>
                </div>
                {expandedModule === module.id ? (
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-muted-foreground" />
                )}
              </div>

              {expandedModule === module.id && (
                <div className="p-6 space-y-3 bg-muted/50">
                  {module.topics.map((topic) => (
                    <TopicItem key={topic.id} topic={topic} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 text-primary-foreground rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Learning Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-foreground">
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">✅ Practice Daily</h3>
              <p className="text-sm text-muted-foreground">Code for at least 1-2 hours every day. Consistency beats intensity.</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">🔨 Build Projects</h3>
              <p className="text-sm text-muted-foreground">Apply concepts by building small projects after each module.</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">🐛 Debug & Learn</h3>
              <p className="text-sm text-muted-foreground">Don't fear errors. Debugging is where real learning happens.</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h3 className="font-bold text-lg mb-2 text-primary">👥 Join Community</h3>
              <p className="text-sm text-muted-foreground">Engage with other learners, ask questions, help others.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
          <p className="text-lg font-semibold">Estimated completion time: 10-12 weeks</p>
          <p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p>
        </div>
      </div>
    </div>
  );
};
