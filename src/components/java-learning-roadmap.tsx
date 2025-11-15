'use client';
import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap } from 'lucide-react';

export const JavaLearningRoadmap = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  const toggleTopic = (topicId: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicId)) {
      newCompleted.delete(topicId);
    } else {
      newCompleted.add(topicId);
    }
    setCompletedTopics(newCompleted);
  };

  const modules = [
    {
      id: 1,
      title: "Getting Started",
      level: "Foundation",
      duration: "Week 1",
      icon: "🚀",
      topics: [
        { id: "1.1", name: "What is Java?", desc: "History, features, JVM, JRE, JDK", difficulty: "Easy" },
        { id: "1.2", name: "Setting Up Environment", desc: "Installing JDK, IDE (VS Code/IntelliJ/Eclipse)", difficulty: "Easy" },
        { id: "1.3", name: "First Java Program", desc: "Hello World, structure of Java program", difficulty: "Easy" },
        { id: "1.4", name: "How Java Works", desc: "Compilation process, bytecode, execution", difficulty: "Easy" },
        { id: "1.5", name: "Comments in Java", desc: "Single-line, multi-line, documentation comments", difficulty: "Easy" }
      ]
    },
    {
      id: 2,
      title: "Basic Output",
      level: "Foundation",
      duration: "Week 1",
      icon: "📢",
      topics: [
        { id: "2.1", name: "Print Statements", desc: "print(), println(), printf()", difficulty: "Easy" },
        { id: "2.2", name: "Escape Sequences", desc: "\\n, \\t, \\\\, \\\", etc.", difficulty: "Easy" },
        { id: "2.3", name: "Format Specifiers", desc: "%d, %f, %s, %c and formatting", difficulty: "Easy" }
      ]
    },
    {
      id: 3,
      title: "Variables & Data Types",
      level: "Foundation",
      duration: "Week 1-2",
      icon: "📦",
      topics: [
        { id: "3.1", name: "Variables Basics", desc: "Declaration, initialization, naming rules", difficulty: "Easy" },
        { id: "3.2", name: "Primitive Data Types", desc: "int, double, float, char, boolean, byte, short, long", difficulty: "Easy" },
        { id: "3.3", name: "Type Casting", desc: "Implicit and explicit casting, widening/narrowing", difficulty: "Medium" },
        { id: "3.4", name: "Constants", desc: "final keyword, naming conventions", difficulty: "Easy" },
        { id: "3.5", name: "Literals", desc: "Integer, floating-point, character, string literals", difficulty: "Easy" }
      ]
    },
    {
      id: 4,
      title: "Operators",
      level: "Foundation",
      duration: "Week 2",
      icon: "➕",
      topics: [
        { id: "4.1", name: "Arithmetic Operators", desc: "+, -, *, /, %, ++, --", difficulty: "Easy" },
        { id: "4.2", name: "Assignment Operators", desc: "=, +=, -=, *=, /=, %=", difficulty: "Easy" },
        { id: "4.3", name: "Comparison Operators", desc: "==, !=, <, >, <=, >=", difficulty: "Easy" },
        { id: "4.4", name: "Logical Operators", desc: "&&, ||, !", difficulty: "Easy" },
        { id: "4.5", name: "Bitwise Operators", desc: "&, |, ^, ~, <<, >>", difficulty: "Medium" },
        { id: "4.6", name: "Ternary Operator", desc: "condition ? true : false", difficulty: "Medium" },
        { id: "4.7", name: "Operator Precedence", desc: "Order of operations, parentheses", difficulty: "Medium" }
      ]
    },
    {
      id: 5,
      title: "User Input",
      level: "Foundation",
      duration: "Week 2",
      icon: "⌨️",
      topics: [
        { id: "5.1", name: "Scanner Class", desc: "Import, creating Scanner object", difficulty: "Easy" },
        { id: "5.2", name: "Reading Different Types", desc: "nextInt(), nextDouble(), nextLine(), next()", difficulty: "Easy" },
        { id: "5.3", name: "Input Validation", desc: "hasNextInt(), hasNextDouble(), error handling", difficulty: "Medium" },
        { id: "5.4", name: "BufferedReader", desc: "Alternative input method (optional)", difficulty: "Medium" }
      ]
    },
    {
      id: 6,
      title: "Control Flow - Conditional",
      level: "Core Concepts",
      duration: "Week 3",
      icon: "🔀",
      topics: [
        { id: "6.1", name: "If Statement", desc: "Basic if, if-else, nested if", difficulty: "Easy" },
        { id: "6.2", name: "Else-If Ladder", desc: "Multiple conditions", difficulty: "Easy" },
        { id: "6.3", name: "Switch-Case", desc: "Switch statement, break, default", difficulty: "Easy" },
        { id: "6.4", name: "Conditional Logic", desc: "Complex conditions, combining operators", difficulty: "Medium" }
      ]
    },
    {
      id: 7,
      title: "Control Flow - Loops",
      level: "Core Concepts",
      duration: "Week 3-4",
      icon: "🔁",
      topics: [
        { id: "7.1", name: "For Loop", desc: "Basic for loop, syntax, examples", difficulty: "Easy" },
        { id: "7.2", name: "While Loop", desc: "While loop syntax and use cases", difficulty: "Easy" },
        { id: "7.3", name: "Do-While Loop", desc: "Post-test loop", difficulty: "Easy" },
        { id: "7.4", name: "Nested Loops", desc: "Loops within loops, patterns", difficulty: "Medium" },
        { id: "7.5", name: "Break & Continue", desc: "Loop control statements", difficulty: "Easy" },
        { id: "7.6", name: "Enhanced For Loop", desc: "For-each loop (preview)", difficulty: "Easy" }
      ]
    },
    {
      id: 8,
      title: "Strings",
      level: "Core Concepts",
      duration: "Week 4",
      icon: "📝",
      topics: [
        { id: "8.1", name: "String Basics", desc: "Creating strings, immutability", difficulty: "Easy" },
        { id: "8.2", name: "String Methods", desc: "length(), charAt(), substring(), indexOf()", difficulty: "Easy" },
        { id: "8.3", name: "String Comparison", desc: "equals(), equalsIgnoreCase(), compareTo()", difficulty: "Easy" },
        { id: "8.4", name: "String Manipulation", desc: "toUpperCase(), toLowerCase(), trim(), replace()", difficulty: "Easy" },
        { id: "8.5", name: "String Concatenation", desc: "+operator, concat() method", difficulty: "Easy" },
        { id: "8.6", name: "StringBuilder & StringBuffer", desc: "Mutable strings, append(), insert()", difficulty: "Medium" },
        { id: "8.7", name: "String Formatting", desc: "format() method, advanced formatting", difficulty: "Medium" }
      ]
    },
    {
      id: 9,
      title: "Arrays",
      level: "Core Concepts",
      duration: "Week 5",
      icon: "📊",
      topics: [
        { id: "9.1", name: "Array Basics", desc: "Declaration, initialization, accessing elements", difficulty: "Easy" },
        { id: "9.2", name: "Array Length", desc: "length property, iterating arrays", difficulty: "Easy" },
        { id: "9.3", name: "Array Operations", desc: "Searching, sorting, copying", difficulty: "Medium" },
        { id: "9.4", name: "Multi-dimensional Arrays", desc: "2D arrays, nested arrays", difficulty: "Medium" },
        { id: "9.5", name: "Enhanced For Loop with Arrays", desc: "For-each loop for arrays", difficulty: "Easy" },
        { id: "9.6", name: "Arrays Class", desc: "Arrays.sort(), Arrays.toString(), etc.", difficulty: "Medium" },
        { id: "9.7", name: "Jagged Arrays", desc: "Arrays with different lengths", difficulty: "Hard" }
      ]
    },
    {
      id: 10,
      title: "Methods/Functions",
      level: "Core Concepts",
      duration: "Week 5-6",
      icon: "⚙️",
      topics: [
        { id: "10.1", name: "Method Basics", desc: "Creating methods, calling methods", difficulty: "Easy" },
        { id: "10.2", name: "Parameters & Arguments", desc: "Passing values to methods", difficulty: "Easy" },
        { id: "10.3", name: "Return Types", desc: "Returning values, void methods", difficulty: "Easy" },
        { id: "10.4", name: "Method Overloading", desc: "Same name, different parameters", difficulty: "Medium" },
        { id: "10.5", name: "Variable Scope", desc: "Local vs instance variables", difficulty: "Medium" },
        { id: "10.6", name: "Static Methods", desc: "Class methods vs instance methods", difficulty: "Medium" },
        { id: "10.7", name: "Recursion", desc: "Methods calling themselves", difficulty: "Hard" }
      ]
    },
    {
      id: 11,
      title: "Object-Oriented Programming - Part 1",
      level: "Advanced",
      duration: "Week 6-7",
      icon: "🎯",
      topics: [
        { id: "11.1", name: "Classes & Objects", desc: "Defining classes, creating objects", difficulty: "Medium" },
        { id: "11.2", name: "Constructors", desc: "Default, parameterized, constructor overloading", difficulty: "Medium" },
        { id: "11.3", name: "Instance Variables", desc: "Object attributes, this keyword", difficulty: "Medium" },
        { id: "11.4", name: "Instance Methods", desc: "Object behaviors, getters & setters", difficulty: "Medium" },
        { id: "11.5", name: "Access Modifiers", desc: "public, private, protected, default", difficulty: "Medium" },
        { id: "11.6", name: "Encapsulation", desc: "Data hiding, information security", difficulty: "Medium" }
      ]
    },
    {
      id: 12,
      title: "Object-Oriented Programming - Part 2",
      level: "Advanced",
      duration: "Week 7-8",
      icon: "🏗️",
      topics: [
        { id: "12.1", name: "Inheritance", desc: "extends keyword, parent-child relationship", difficulty: "Medium" },
        { id: "12.2", name: "Method Overriding", desc: "Redefining parent methods, @Override", difficulty: "Medium" },
        { id: "12.3", name: "super Keyword", desc: "Accessing parent class members", difficulty: "Medium" },
        { id: "12.4", name: "Polymorphism", desc: "Runtime polymorphism, dynamic binding", difficulty: "Hard" },
        { id: "12.5", name: "Abstract Classes", desc: "abstract keyword, abstract methods", difficulty: "Hard" },
        { id: "12.6", name: "Interfaces", desc: "interface keyword, implementing interfaces", difficulty: "Hard" },
        { id: "12.7", name: "final Keyword", desc: "final classes, methods, variables", difficulty: "Medium" }
      ]
    },
    {
      id: 13,
      title: "Exception Handling",
      level: "Advanced",
      duration: "Week 8",
      icon: "⚠️",
      topics: [
        { id: "13.1", name: "Exception Basics", desc: "What are exceptions, types of exceptions", difficulty: "Medium" },
        { id: "13.2", name: "Try-Catch", desc: "Handling exceptions, multiple catch blocks", difficulty: "Medium" },
        { id: "13.3", name: "Finally Block", desc: "Cleanup code, always executes", difficulty: "Medium" },
        { id: "13.4", name: "Throw & Throws", desc: "Creating and throwing exceptions", difficulty: "Medium" },
        { id: "13.5", name: "Custom Exceptions", desc: "Creating your own exception classes", difficulty: "Hard" },
        { id: "13.6", name: "Checked vs Unchecked", desc: "Exception hierarchy, handling strategies", difficulty: "Hard" }
      ]
    },
    {
      id: 14,
      title: "Collections Framework",
      level: "Advanced",
      duration: "Week 9-10",
      icon: "📚",
      topics: [
        { id: "14.1", name: "ArrayList", desc: "Dynamic arrays, List interface", difficulty: "Medium" },
        { id: "14.2", name: "LinkedList", desc: "Linked list implementation", difficulty: "Medium" },
        { id: "14.3", name: "HashSet", desc: "Set interface, unique elements", difficulty: "Medium" },
        { id: "14.4", name: "HashMap", desc: "Key-value pairs, Map interface", difficulty: "Medium" },
        { id: "14.5", name: "Iterator", desc: "Iterating collections", difficulty: "Medium" },
        { id: "14.6", name: "Collections Class", desc: "Utility methods: sort, reverse, etc.", difficulty: "Medium" },
        { id: "14.7", name: "Generics Basics", desc: "Type parameters, type safety", difficulty: "Hard" }
      ]
    },
    {
      id: 15,
      title: "File Handling",
      level: "Advanced",
      duration: "Week 10",
      icon: "📁",
      topics: [
        { id: "15.1", name: "File Class", desc: "Creating, deleting, checking files", difficulty: "Medium" },
        { id: "15.2", name: "Reading Files", desc: "FileReader, BufferedReader, Scanner", difficulty: "Medium" },
        { id: "15.3", name: "Writing Files", desc: "FileWriter, BufferedWriter, PrintWriter", difficulty: "Medium" },
        { id: "15.4", name: "File Operations", desc: "Copy, move, delete operations", difficulty: "Medium" },
        { id: "15.5", name: "Serialization", desc: "Object persistence (optional)", difficulty: "Hard" }
      ]
    },
    {
      id: 16,
      title: "Advanced Topics",
      level: "Expert",
      duration: "Week 11-12",
      icon: "🚀",
      topics: [
        { id: "16.1", name: "Lambda Expressions", desc: "Functional programming basics", difficulty: "Hard" },
        { id: "16.2", name: "Stream API", desc: "Processing collections functionally", difficulty: "Hard" },
        { id: "16.3", name: "Multithreading Basics", desc: "Thread class, Runnable interface", difficulty: "Hard" },
        { id: "16.4", name: "Date & Time API", desc: "LocalDate, LocalTime, LocalDateTime", difficulty: "Medium" },
        { id: "16.5", name: "Regular Expressions", desc: "Pattern matching, regex basics", difficulty: "Hard" },
        { id: "16.6", name: "Annotations", desc: "@Override, @Deprecated, custom annotations", difficulty: "Hard" }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
      case 'Hard': return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const calculateProgress = () => {
    const totalTopics = modules.reduce((acc, module) => acc + module.topics.length, 0);
    if (totalTopics === 0) return 0;
    const completed = completedTopics.size;
    return Math.round((completed / totalTopics) * 100);
  };

  return (
    <div className="p-2 md:p-6">
      <div className="max-w-6xl mx-auto">
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
              {completedTopics.size} of {modules.reduce((acc, m) => acc + m.topics.length, 0)} topics completed
            </p>
          </div>
        </div>

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
                    <div
                      key={topic.id}
                      onClick={() => toggleTopic(topic.id)}
                      className={`bg-background border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-sm hover:border-primary/50 ${
                        completedTopics.has(topic.id) ? 'border-primary bg-primary/5' : 'border-border'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {completedTopics.has(topic.id) ? (
                            <CheckCircle className="w-6 h-6 text-primary" />
                          ) : (
                            <Circle className="w-6 h-6 text-muted-foreground/50" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg font-semibold text-foreground">{topic.name}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                              {topic.difficulty}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm">{topic.desc}</p>
                        </div>
                      </div>
                    </div>
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
