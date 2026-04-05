
import type { Language } from './types';

export const java: Language = {
  slug: 'java',
  name: 'Java',
  topics: [
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'A structured roadmap for learning Java from scratch.'
    },
    {
      slug: 'what-is-java',
      title: 'Java Intro',
      explanation: 'A high-level overview of what Java is and where it is used.',
      category: 'Getting Started'
    },
    {
      slug: 'history-of-java',
      title: 'History of Java',
      explanation: 'The story of how Java was created and evolved over time.',
      category: 'Getting Started'
    },
    {
      slug: 'features-of-java',
      title: 'Features of Java',
      explanation: 'The key features that make Java a powerful and popular programming language.',
      category: 'Getting Started'
    },
    {
      slug: 'jdk-jre-jvm',
      title: 'JDK, JRE, and JVM',
      explanation: 'Understanding the core components that run a Java program.',
      category: 'Getting Started'
    },
    {
      slug: 'how-java-works',
      title: 'Compilation, Bytecode, & Execution',
      explanation: 'Understanding the journey from source code to a running program: compilation, bytecode, and execution.',
      category: 'Getting Started'
    },
    {
      slug: 'setting-up-environment',
      title: 'Setting Up Environment',
      explanation: 'A step-by-step guide to installing the Java Development Kit (JDK) and setting up your first project in an Integrated Development Environment (IDE).',
      category: 'Getting Started'
    },
    {
      slug: 'first-java-program',
      title: 'Hello World',
      explanation: 'Learn the structure of a basic Java program and how to print "Hello, World!" to the console. This topic also introduces the interactive code editor.',
      category: 'Getting Started'
    },
    {
      slug: 'comments-in-java',
      title: 'Comments in Java',
      explanation: 'Learn how to use comments to make your code more readable and understandable.',
      category: 'Getting Started'
    },
    {
      slug: 'variables',
      title: 'Variables Basics',
      explanation:
        'In Java, variables are containers for storing data values. To use a variable, you must declare it by specifying its type and name. You can also initialize it by assigning an initial value. Understanding how to declare and initialize variables is a fundamental concept in Java programming.',
      category: 'Variables & Data Types'
    },
    {
      slug: 'data-types',
      title: 'Data Types',
      explanation:
        'In Java, every variable has a data type. Data types specify the size and type of values that can be stored in a variable. There are two main categories of data types: Primitive and Non-Primitive. Primitive types include `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, and `char`. Non-primitive types (or reference types) include Classes, Interfaces, and Arrays, like `String`.',
      category: 'Variables & Data Types'
    },
    {
      slug: 'type-casting',
      title: 'Type Casting',
      explanation:
        'Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting: widening casting (automatically) - converting a smaller type to a larger type size, and narrowing casting (manually) - converting a larger type to a smaller size type.',
      category: 'Variables & Data Types'
    },
    {
      slug: 'print-statements-and-format-specifiers',
      title: 'Print Statements & Format Specifiers',
      explanation:
        'Java provides several ways to display output, each with its specific use case. The most common methods are part of the `System.out` object. `System.out.print()` prints text without a new line. `System.out.println()` prints text and adds a new line. For formatted output, `System.out.printf()` uses format specifiers like `%s` for strings and `%d` for integers. `String.format()` works similarly but returns a formatted string. For errors, `System.err.println()` prints to the standard error stream.',
      category: 'Basic Output'
    },
    {
      slug: 'escape-sequences',
      title: 'Escape Sequences',
      explanation:
        'In Java, escape sequences are special characters that start with a backslash (\\) and are used inside strings to represent characters that are either difficult to type or have a special meaning. They allow you to format your text output, for example, by adding new lines, tabs, or including quotes within a string.',
      category: 'Basic Output'
    },
    {
      slug: 'constants',
      title: 'Constants',
      explanation: 'Learn how to create variables whose values cannot be changed using the `final` keyword.',
      category: 'Variables & Data Types'
    },
    {
      slug: 'literals',
      title: 'Literals',
      explanation: 'Understand the fixed values—like numbers, characters, or text—that you assign to variables.',
      category: 'Variables & Data Types'
    },
    {
      slug: 'arithmetic-operators',
      title: 'Arithmetic Operators',
      explanation: 'Learn about arithmetic operators in Java used to perform common mathematical operations like addition, subtraction, multiplication, etc.',
      category: 'Operators'
    },
    {
      slug: 'assignment-operators',
      title: 'Assignment Operators',
      explanation: 'Learn about assignment operators in Java used to assign values to variables.',
      category: 'Operators'
    },
    {
      slug: 'comparison-operators',
      title: 'Comparison Operators',
      explanation: 'Learn about comparison operators in Java used to compare two values.',
      category: 'Operators'
    },
    {
      slug: 'logical-operators',
      title: 'Logical Operators',
      explanation: 'Learn about logical operators in Java used to determine the logic between variables or values.',
      category: 'Operators'
    },
    {
      slug: 'bitwise-operators',
      title: 'Bitwise Operators',
      explanation: 'Learn about bitwise operators in Java that perform operations on individual bits of integer types.',
      category: 'Operators'
    },
    {
      slug: 'ternary-operator',
      title: 'Ternary Operator',
      explanation: 'Learn about the ternary operator in Java, a shorthand for an if-else statement.',
      category: 'Operators'
    },
    {
      slug: 'operator-precedence',
      title: 'Operator Precedence',
      explanation: 'Learn about the order in which operators are evaluated in Java.',
      category: 'Operators'
    },
    {
      slug: 'scanner-class',
      title: 'Scanner Class',
      explanation: 'Learn how to use the Scanner class to get user input.',
      category: 'User Input'
    },
    {
      slug: 'reading-different-types',
      title: 'Reading Different Types',
      explanation: 'Learn how to read various data types like integers, doubles, and strings from the user.',
      category: 'User Input'
    },
    {
      slug: 'input-validation',
      title: 'Input Validation',
      explanation: 'Learn how to check if the user has entered the correct type of data.',
      category: 'User Input'
    },
    {
      slug: 'if-else',
      title: 'If-Else Statement',
      explanation: 'Learn how to execute a block of code if a specified condition is true.',
      category: 'Control Flow'
    },
    {
      slug: 'switch',
      title: 'Switch Statement',
      explanation: 'Learn how to select one of many code blocks to be executed.',
      category: 'Control Flow'
    },
    {
      slug: 'for-loop',
      title: 'For Loop',
      explanation: 'Learn how to loop through a block of code a number of times.',
      category: 'Control Flow'
    },
    {
      slug: 'while-loop',
      title: 'While Loop',
      explanation: 'Learn how to loop through a block of code as long as a specified condition is true.',
      category: 'Control Flow'
    },
    {
      slug: 'break-continue',
      title: 'Break and Continue',
      explanation: 'Learn how to jump out of a loop or skip an iteration.',
      category: 'Control Flow'
    },
    {
      slug: 'strings',
      title: 'String Methods',
      explanation: 'Learn about common methods for working with strings.',
      category: 'Strings & Arrays'
    },
    {
      slug: 'arrays',
      title: 'Arrays',
      explanation: 'Learn how to store multiple values in a single variable.',
      category: 'Strings & Arrays'
    },
    {
      slug: 'multi-dimensional-arrays',
      title: 'Multi-Dimensional Arrays',
      explanation: 'Learn how to create arrays of arrays.',
      category: 'Strings & Arrays'
    },
    {
      slug: 'methods',
      title: 'Methods',
      explanation: 'Learn how to create and call methods (functions) in Java.',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'method-parameters',
      title: 'Method Parameters',
      explanation: 'Learn how to pass information to methods.',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'method-overloading',
      title: 'Method Overloading',
      explanation: 'Learn how to define multiple methods with the same name but different parameters.',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'scope',
      title: 'Scope',
      explanation: 'Learn where variables are accessible.',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'recursion',
      title: 'Recursion',
      explanation: 'Learn the technique of making a function call itself.',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'classes-objects',
      title: 'Classes and Objects',
      explanation: 'Learn the fundamentals of Object-Oriented Programming (OOP).',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'class-attributes',
      title: 'Class Attributes',
      explanation: 'Learn how to define variables within a class.',
      category: 'Advanced OOP'
    },
    {
      slug: 'class-methods',
      title: 'Class Methods',
      explanation: 'Learn how to define methods within a class.',
      category: 'Advanced OOP'
    },
    {
      slug: 'constructors',
      title: 'Constructors',
      explanation: 'Learn about the special method for creating and initializing objects.',
      category: 'Methods & OOP Basics'
    },
    {
      slug: 'access-modifiers',
      title: 'Access Modifiers',
      explanation: 'Learn how to control the visibility of classes, attributes, and methods.',
      category: 'Advanced OOP'
    },
    {
      slug: 'encapsulation',
      title: 'Encapsulation',
      explanation: 'Learn about the technique of bundling data and methods that work on that data within one unit.',
      category: 'Advanced OOP'
    },
    {
      slug: 'packages',
      title: 'Packages and API',
      explanation: 'Learn how to use built-in and user-defined packages.',
      category: 'Advanced OOP'
    },
    {
      slug: 'inheritance',
      title: 'Inheritance',
      explanation: 'Learn how to inherit attributes and methods from one class to another.',
      category: 'Advanced OOP'
    },
    {
      slug: 'polymorphism',
      title: 'Polymorphism',
      explanation: 'Learn how to use a single interface to represent different underlying forms (data types).',
      category: 'Advanced OOP'
    },
    {
      slug: 'inner-classes',
      title: 'Inner Classes',
      explanation: 'Learn about nested classes in Java.',
      category: 'Advanced OOP'
    },
    {
      slug: 'abstraction',
      title: 'Abstraction',
      explanation: 'Learn about hiding certain details and showing only essential information to the user.',
      category: 'Advanced OOP'
    },
    {
      slug: 'interfaces',
      title: 'Interfaces',
      explanation: 'Learn about another way to achieve abstraction in Java.',
      category: 'Advanced OOP'
    },
    {
      slug: 'enums',
      title: 'Enums',
      explanation: 'Learn about special classes that represent a group of constants.',
      category: 'Advanced OOP'
    },
    {
      slug: 'user-input',
      title: 'User Input',
      explanation: 'Learn how to get user input in Java.'
    },
    {
      slug: 'date-time',
      title: 'Date and Time',
      explanation: 'Learn how to work with the date and time API in Java.'
    },
    {
      slug: 'hashmap',
      title: 'HashMap',
      explanation: 'Learn how to store key/value pairs.',
      category: 'Advanced Collections'
    },
    {
      slug: 'hashset',
      title: 'HashSet',
      explanation: 'Learn how to store unique items.',
      category: 'Advanced Collections'
    },
    {
      slug: 'arraylist',
      title: 'ArrayList',
      explanation: 'Learn about the resizable array implementation, one of the most used collection classes.',
      category: 'Advanced Collections'
    },
    {
      slug: 'linkedlist',
      title: 'LinkedList',
      explanation: 'Learn about the LinkedList data structure.',
      category: 'Advanced Collections'
    },
    {
      slug: 'iterator',
      title: 'Iterator',
      explanation: 'Learn how to loop through collections.',
      category: 'Advanced Collections'
    },
    {
      slug: 'wrapper-classes',
      title: 'Wrapper Classes',
      explanation: 'Learn about using primitive data types as objects.',
      category: 'Advanced Collections'
    },
    {
      slug: 'exceptions',
      title: 'Exceptions',
      explanation: 'Learn how to handle errors in Java with try-catch blocks.',
      category: 'Error Handling'
    },
    {
      slug: 'regex',
      title: 'Regular Expressions',
      explanation: 'Learn how to use regular expressions for pattern matching.'
    },
    {
      slug: 'threads',
      title: 'Threads',
      explanation: 'Learn about multithreading in Java.',
      category: 'Concurrency'
    },
    {
      slug: 'lambda',
      title: 'Lambda Expressions',
      explanation: 'Learn about lambda expressions in Java.',
      category: 'Functional Programming'
    },
    {
      slug: 'file-handling',
      title: 'File Handling',
      explanation: 'Learn how to create, read, write, and delete files in Java.'
    },
    {
      slug: 'super-keyword',
      title: 'The "super" Keyword',
      explanation: 'Learn how to call methods and constructors of the parent class.',
      category: 'Advanced OOP'
    },
    {
      slug: 'method-overriding',
      title: 'Method Overriding',
      explanation: 'Learn how a subclass can provide its own implementation of a method from its superclass.',
      category: 'Advanced OOP'
    },
    {
      slug: 'instanceof-operator',
      title: 'The "instanceof" Operator',
      explanation: 'Learn how to check the type of an object at runtime.',
      category: 'Advanced OOP'
    },
    {
      slug: 'object-class',
      title: 'The Object Class',
      explanation: 'Learn about the root of all classes in Java and its important methods like equals(), hashCode(), and toString().',
      category: 'Advanced OOP'
    },
    {
      slug: 'treemap-treeset',
      title: 'TreeMap and TreeSet',
      explanation: 'Learn about sorted collections that offer unique performance characteristics.',
      category: 'Advanced Collections'
    },
    {
      slug: 'queue-deque',
      title: 'Queue and Deque',
      explanation: 'Learn about FIFO (First-In, First-Out) and double-ended queue data structures.',
      category: 'Advanced Collections'
    },
    {
      slug: 'comparable-comparator',
      title: 'Comparable and Comparator',
      explanation: 'Learn how to define custom sorting logic for your objects.',
      category: 'Advanced Collections'
    },
    {
      slug: 'streams-api',
      title: 'Streams API',
      explanation: 'A deep dive into using streams for powerful, declarative data processing.',
      category: 'Functional Programming'
    },
    {
      slug: 'optional-class',
      title: 'The Optional Class',
      explanation: 'A modern way to handle null values gracefully and avoid NullPointerExceptions.',
      category: 'Functional Programming'
    },
    {
      slug: 'method-references',
      title: 'Method References',
      explanation: 'A shorthand syntax for lambda expressions that call an existing method.',
      category: 'Functional Programming'
    },
    {
      slug: 'synchronized-keyword',
      title: 'The "synchronized" Keyword',
      explanation: 'The basic mechanism for preventing thread interference and memory consistency errors.',
      category: 'Concurrency'
    },
    {
      slug: 'volatile-keyword',
      title: 'The "volatile" Keyword',
      explanation: 'Ensuring that changes to a variable are always visible to other threads.',
      category: 'Concurrency'
    },
    {
      slug: 'executors-thread-pools',
      title: 'Executors and Thread Pools',
      explanation: 'A more robust and efficient way to manage threads.',
      category: 'Concurrency'
    },
    {
      slug: 'generics-intro',
      title: 'Introduction to Generics',
      explanation: 'Understanding why we use type parameters like <T> in collections.',
      category: 'Generics'
    },
    {
      slug: 'generics-methods-classes',
      title: 'Generic Classes & Methods',
      explanation: 'How to write your own reusable, type-safe generic components.',
      category: 'Generics'
    },
    // 15. JAVA 8+ FEATURES
    { slug: 'default-methods', title: 'Default Methods in Interfaces', explanation: 'Adding method implementations in interfaces (Java 8).', category: 'Java 8+ Features' },
    { slug: 'functional-interfaces', title: 'Functional Interfaces', explanation: 'Interfaces with single abstract method (@FunctionalInterface).', category: 'Java 8+ Features' },
    { slug: 'date-time-api', title: 'Date & Time API', explanation: 'Modern java.time package for date and time operations (Java 8).', category: 'Java 8+ Features' },
    { slug: 'nashorn', title: 'Nashorn JavaScript Engine', explanation: 'Running JavaScript code from Java (Java 8, deprecated in Java 11).', category: 'Java 8+ Features' },
    
    // 16. JAVA 9-11 FEATURES
    { slug: 'modules-jpms', title: 'Modules (JPMS)', explanation: 'Java Platform Module System for modular applications (Java 9).', category: 'Java 9-11 Features' },
    { slug: 'jshell', title: 'JShell REPL', explanation: 'Interactive Java shell for quick testing (Java 9).', category: 'Java 9-11 Features' },
    { slug: 'private-interface-methods', title: 'Private Interface Methods', explanation: 'Private methods in interfaces for code reuse (Java 9).', category: 'Java 9-11 Features' },
    { slug: 'var-keyword', title: 'Local Variable Type Inference (var)', explanation: 'Type inference for local variables (Java 10).', category: 'Java 9-11 Features' },
    { slug: 'http-client', title: 'HTTP Client API', explanation: 'Modern HTTP client replacing HttpURLConnection (Java 11).', category: 'Java 9-11 Features' },
    { slug: 'string-methods-java11', title: 'New String Methods', explanation: 'isBlank(), lines(), strip(), repeat() (Java 11).', category: 'Java 9-11 Features' },
    
    // 17. JAVA 12-16 FEATURES
    { slug: 'switch-expressions', title: 'Switch Expressions', explanation: 'Enhanced switch with expression support (Java 12-14).', category: 'Java 12-16 Features' },
    { slug: 'text-blocks', title: 'Text Blocks', explanation: 'Multi-line string literals with triple quotes (Java 13-15).', category: 'Java 12-16 Features' },
    { slug: 'records', title: 'Records', explanation: 'Immutable data carrier classes (Java 14-16).', category: 'Java 12-16 Features' },
    { slug: 'pattern-matching-instanceof', title: 'Pattern Matching for instanceof', explanation: 'Simplified type checking and casting (Java 14-16).', category: 'Java 12-16 Features' },
    { slug: 'sealed-classes', title: 'Sealed Classes', explanation: 'Restricting class hierarchies (Java 15-17).', category: 'Java 12-16 Features' },
    
    // 18. JAVA 17+ (LTS) FEATURES
    { slug: 'pattern-matching-switch', title: 'Pattern Matching for switch', explanation: 'Advanced pattern matching in switch (Java 17-21).', category: 'Java 17+ (LTS)' },
    { slug: 'random-generator', title: 'Random Generator API', explanation: 'Enhanced random number generation (Java 17).', category: 'Java 17+ (LTS)' },
    { slug: 'foreign-function-memory', title: 'Foreign Function & Memory API', explanation: 'Interoperating with native code and memory (Java 17+).', category: 'Java 17+ (LTS)' },
    { slug: 'virtual-threads', title: 'Virtual Threads', explanation: 'Lightweight threads for high-throughput concurrency (Java 19-21).', category: 'Java 17+ (LTS)' },
    { slug: 'structured-concurrency', title: 'Structured Concurrency', explanation: 'Simplified concurrent programming (Java 19+).', category: 'Java 17+ (LTS)' },
    { slug: 'scoped-values', title: 'Scoped Values', explanation: 'Sharing immutable data within threads (Java 20+).', category: 'Java 17+ (LTS)' },
    { slug: 'string-templates', title: 'String Templates', explanation: 'Safe string composition (Java 21 Preview).', category: 'Java 17+ (LTS)' },
    { slug: 'sequenced-collections', title: 'Sequenced Collections', explanation: 'Collections with defined encounter order (Java 21).', category: 'Java 17+ (LTS)' },
    { slug: 'unnamed-patterns', title: 'Unnamed Patterns & Variables', explanation: 'Using _ for unused variables (Java 21).', category: 'Java 17+ (LTS)' },
    
    // 19. FILE I/O
    { slug: 'file-io-basics', title: 'File I/O Basics', explanation: 'Reading and writing files with File class.', category: 'File I/O' },
    { slug: 'nio-path', title: 'NIO.2 Path & Files', explanation: 'Modern file operations with java.nio.file.', category: 'File I/O' },
    { slug: 'buffered-io', title: 'Buffered I/O', explanation: 'Efficient file reading/writing with buffering.', category: 'File I/O' },
    { slug: 'serialization', title: 'Serialization', explanation: 'Converting objects to byte streams.', category: 'File I/O' },
    
    // 20. ANNOTATIONS
    { slug: 'built-in-annotations', title: 'Built-in Annotations', explanation: '@Override, @Deprecated, @SuppressWarnings, @FunctionalInterface.', category: 'Annotations' },
    { slug: 'custom-annotations', title: 'Custom Annotations', explanation: 'Creating your own annotations.', category: 'Annotations' },
    { slug: 'annotation-processing', title: 'Annotation Processing', explanation: 'Processing annotations at compile-time.', category: 'Annotations' },
    
    // 21. REFLECTION
    { slug: 'reflection-basics', title: 'Reflection Basics', explanation: 'Inspecting classes, methods, and fields at runtime.', category: 'Reflection' },
    { slug: 'dynamic-proxies', title: 'Dynamic Proxies', explanation: 'Creating proxy classes at runtime.', category: 'Reflection' },
    
    // 22. JVM INTERNALS
    { slug: 'memory-model', title: 'Java Memory Model', explanation: 'Understanding heap, stack, and memory management.', category: 'JVM Internals' },
    { slug: 'garbage-collection', title: 'Garbage Collection', explanation: 'Automatic memory management and GC algorithms.', category: 'JVM Internals' },
    { slug: 'jvm-parameters', title: 'JVM Parameters', explanation: 'Configuring JVM memory and performance settings.', category: 'JVM Internals' },
    { slug: 'classloaders', title: 'ClassLoaders', explanation: 'How Java loads classes at runtime.', category: 'JVM Internals' },
    
    // 23. TESTING
    { slug: 'junit-basics', title: 'JUnit Basics', explanation: 'Writing unit tests with JUnit 5.', category: 'Testing' },
    { slug: 'assertions', title: 'Assertions', explanation: 'Verifying expected vs actual results.', category: 'Testing' },
    { slug: 'test-lifecycle', title: 'Test Lifecycle', explanation: '@BeforeEach, @AfterEach, @BeforeAll, @AfterAll.', category: 'Testing' },
    { slug: 'parameterized-tests', title: 'Parameterized Tests', explanation: 'Running same test with different inputs.', category: 'Testing' },
    { slug: 'mocking', title: 'Mocking with Mockito', explanation: 'Creating mock objects for testing.', category: 'Testing' },
    
    // 24. BEST PRACTICES
    { slug: 'solid-principles', title: 'SOLID Principles', explanation: 'Object-oriented design principles for maintainable code.', category: 'Best Practices' },
    { slug: 'design-patterns', title: 'Design Patterns', explanation: 'Common solutions to recurring problems.', category: 'Best Practices' },
    { slug: 'clean-code', title: 'Clean Code Principles', explanation: 'Writing readable and maintainable code.', category: 'Best Practices' },
    { slug: 'javadoc', title: 'Javadoc', explanation: 'Documenting code with Javadoc comments.', category: 'Best Practices' },
    { slug: 'code-conventions', title: 'Java Code Conventions', explanation: 'Standard naming and formatting guidelines.', category: 'Best Practices' },

  
  ],
};
