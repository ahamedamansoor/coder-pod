
export type Topic = {
  slug: string;
  title: string;
  explanation: string;
};

export type Language = {
  slug:string;
  name: string;
  topics: Topic[];
};

export const languages: Language[] = [
  {
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
      },
      {
        slug: 'history-of-java',
        title: 'History of Java',
        explanation: 'The story of how Java was created and evolved over time.',
      },
      {
        slug: 'features-of-java',
        title: 'Features of Java',
        explanation: 'The key features that make Java a powerful and popular programming language.',
      },
      {
        slug: 'jdk-jre-jvm',
        title: 'JDK, JRE, and JVM',
        explanation: 'Understanding the core components that run a Java program.',
      },
      {
        slug: 'how-java-works',
        title: 'Compilation, Bytecode, & Execution',
        explanation: 'Understanding the journey from source code to a running program: compilation, bytecode, and execution.'
      },
      {
        slug: 'setting-up-environment',
        title: 'Setting Up Environment',
        explanation: 'A step-by-step guide to installing the Java Development Kit (JDK) and setting up your first project in an Integrated Development Environment (IDE).',
      },
      {
        slug: 'first-java-program',
        title: 'Hello World',
        explanation: 'Learn the structure of a basic Java program and how to print "Hello, World!" to the console. This topic also introduces the interactive code editor.',
      },
      {
        slug: 'comments-in-java',
        title: 'Comments in Java',
        explanation: 'Learn how to use comments to make your code more readable and understandable.'
      },
      {
        slug: 'variables',
        title: 'Variables Basics',
        explanation:
          'In Java, variables are containers for storing data values. To use a variable, you must declare it by specifying its type and name. You can also initialize it by assigning an initial value. Understanding how to declare and initialize variables is a fundamental concept in Java programming.',
      },
      {
        slug: 'data-types',
        title: 'Data Types',
        explanation:
          'In Java, every variable has a data type. Data types specify the size and type of values that can be stored in a variable. There are two main categories of data types: Primitive and Non-Primitive. Primitive types include `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, and `char`. Non-primitive types (or reference types) include Classes, Interfaces, and Arrays, like `String`.',
      },
      {
        slug: 'type-casting',
        title: 'Type Casting',
        explanation:
          'Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting: widening casting (automatically) - converting a smaller type to a larger type size, and narrowing casting (manually) - converting a larger type to a smaller size type.',
      },
      {
        slug: 'print-statements-and-format-specifiers',
        title: 'Print Statements & Format Specifiers',
        explanation:
          'Java provides several ways to display output, each with its specific use case. The most common methods are part of the `System.out` object. `System.out.print()` prints text without a new line. `System.out.println()` prints text and adds a new line. For formatted output, `System.out.printf()` uses format specifiers like `%s` for strings and `%d` for integers. `String.format()` works similarly but returns a formatted string. For errors, `System.err.println()` prints to the standard error stream.',
      },
      {
        slug: 'escape-sequences',
        title: 'Escape Sequences',
        explanation:
          'In Java, escape sequences are special characters that start with a backslash (\\) and are used inside strings to represent characters that are either difficult to type or have a special meaning. They allow you to format your text output, for example, by adding new lines, tabs, or including quotes within a string.',
      },
      {
        slug: 'constants',
        title: 'Constants',
        explanation: 'Learn how to create variables whose values cannot be changed using the `final` keyword.'
      },
      {
        slug: 'literals',
        title: 'Literals',
        explanation: 'Understand the fixed values—like numbers, characters, or text—that you assign to variables.'
      },
      {
        slug: 'arithmetic-operators',
        title: 'Arithmetic Operators',
        explanation: 'Learn about arithmetic operators in Java used to perform common mathematical operations like addition, subtraction, multiplication, etc.'
      },
      {
        slug: 'assignment-operators',
        title: 'Assignment Operators',
        explanation: 'Learn about assignment operators in Java used to assign values to variables.'
      },
      {
        slug: 'comparison-operators',
        title: 'Comparison Operators',
        explanation: 'Learn about comparison operators in Java used to compare two values.'
      },
      {
        slug: 'logical-operators',
        title: 'Logical Operators',
        explanation: 'Learn about logical operators in Java used to determine the logic between variables or values.'
      },
      {
        slug: 'bitwise-operators',
        title: 'Bitwise Operators',
        explanation: 'Learn about bitwise operators in Java that perform operations on individual bits of integer types.'
      },
      {
        slug: 'ternary-operator',
        title: 'Ternary Operator',
        explanation: 'Learn about the ternary operator in Java, a shorthand for an if-else statement.'
      },
      {
        slug: 'operator-precedence',
        title: 'Operator Precedence',
        explanation: 'Learn about the order in which operators are evaluated in Java.'
      },
      {
        slug: 'scanner-class',
        title: 'Scanner Class',
        explanation: 'Learn how to use the Scanner class to get user input.'
      },
      {
        slug: 'reading-different-types',
        title: 'Reading Different Types',
        explanation: 'Learn how to read various data types like integers, doubles, and strings from the user.'
      },
      {
        slug: 'input-validation',
        title: 'Input Validation',
        explanation: 'Learn how to check if the user has entered the correct type of data.'
      },
      {
        slug: 'if-else',
        title: 'If-Else Statement',
        explanation: 'Learn how to execute a block of code if a specified condition is true.'
      },
      {
        slug: 'switch',
        title: 'Switch Statement',
        explanation: 'Learn how to select one of many code blocks to be executed.'
      },
      {
        slug: 'for-loop',
        title: 'For Loop',
        explanation: 'Learn how to loop through a block of code a number of times.'
      },
      {
        slug: 'while-loop',
        title: 'While Loop',
        explanation: 'Learn how to loop through a block of code as long as a specified condition is true.'
      },
      {
        slug: 'break-continue',
        title: 'Break and Continue',
        explanation: 'Learn how to jump out of a loop or skip an iteration.'
      },
      {
        slug: 'strings',
        title: 'String Methods',
        explanation: 'Learn about common methods for working with strings.'
      },
      {
        slug: 'arrays',
        title: 'Arrays',
        explanation: 'Learn how to store multiple values in a single variable.'
      },
      {
        slug: 'multi-dimensional-arrays',
        title: 'Multi-Dimensional Arrays',
        explanation: 'Learn how to create arrays of arrays.'
      },
      {
        slug: 'methods',
        title: 'Methods',
        explanation: 'Learn how to create and call methods (functions) in Java.'
      },
      {
        slug: 'method-parameters',
        title: 'Method Parameters',
        explanation: 'Learn how to pass information to methods.'
      },
      {
        slug: 'method-overloading',
        title: 'Method Overloading',
        explanation: 'Learn how to define multiple methods with the same name but different parameters.'
      },
      {
        slug: 'scope',
        title: 'Scope',
        explanation: 'Learn where variables are accessible.'
      },
      {
        slug: 'recursion',
        title: 'Recursion',
        explanation: 'Learn the technique of making a function call itself.'
      },
      {
        slug: 'classes-objects',
        title: 'Classes and Objects',
        explanation: 'Learn the fundamentals of Object-Oriented Programming (OOP).'
      },
      {
        slug: 'class-attributes',
        title: 'Class Attributes',
        explanation: 'Learn how to define variables within a class.'
      },
      {
        slug: 'class-methods',
        title: 'Class Methods',
        explanation: 'Learn how to define methods within a class.'
      },
      {
        slug: 'constructors',
        title: 'Constructors',
        explanation: 'Learn about the special method for creating and initializing objects.'
      },
      {
        slug: 'access-modifiers',
        title: 'Access Modifiers',
        explanation: 'Learn how to control the visibility of classes, attributes, and methods.'
      },
      {
        slug: 'encapsulation',
        title: 'Encapsulation',
        explanation: 'Learn about the technique of bundling data and methods that work on that data within one unit.'
      },
      {
        slug: 'packages',
        title: 'Packages and API',
        explanation: 'Learn how to use built-in and user-defined packages.'
      },
      {
        slug: 'inheritance',
        title: 'Inheritance',
        explanation: 'Learn how to inherit attributes and methods from one class to another.'
      },
      {
        slug: 'polymorphism',
        title: 'Polymorphism',
        explanation: 'Learn how to use a single interface to represent different underlying forms (data types).'
      },
      {
        slug: 'inner-classes',
        title: 'Inner Classes',
        explanation: 'Learn about nested classes in Java.'
      },
      {
        slug: 'abstraction',
        title: 'Abstraction',
        explanation: 'Learn about hiding certain details and showing only essential information to the user.'
      },
      {
        slug: 'interfaces',
        title: 'Interfaces',
        explanation: 'Learn about another way to achieve abstraction in Java.'
      },
      {
        slug: 'enums',
        title: 'Enums',
        explanation: 'Learn about special classes that represent a group of constants.'
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
        explanation: 'Learn how to store key/value pairs.'
      },
      {
        slug: 'hashset',
        title: 'HashSet',
        explanation: 'Learn how to store unique items.'
      },
      {
        slug: 'arraylist',
        title: 'ArrayList',
        explanation: 'Learn how to use a resizable array.'
      },
      {
        slug: 'linkedlist',
        title: 'LinkedList',
        explanation: 'Learn about the LinkedList data structure.'
      },
      {
        slug: 'iterator',
        title: 'Iterator',
        explanation: 'Learn how to loop through collections.'
      },
      {
        slug: 'wrapper-classes',
        title: 'Wrapper Classes',
        explanation: 'Learn about using primitive data types as objects.'
      },
      {
        slug: 'exceptions',
        title: 'Exceptions',
        explanation: 'Learn how to handle errors in Java with try-catch blocks.'
      },
      {
        slug: 'regex',
        title: 'Regular Expressions',
        explanation: 'Learn how to use regular expressions for pattern matching.'
      },
      {
        slug: 'threads',
        title: 'Threads',
        explanation: 'Learn about multithreading in Java.'
      },
      {
        slug: 'lambda',
        title: 'Lambda Expressions',
        explanation: 'Learn about lambda expressions in Java.'
      },
      {
        slug: 'file-handling',
        title: 'File Handling',
        explanation: 'Learn how to create, read, write, and delete files in Java.'
      }
    ],
  },
];

    