
export type Topic = {
  slug: string;
  title: string;
  explanation: string;
};

export type Language = {
  slug: string;
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
        slug: 'setting-up-environment',
        title: 'Setting Up Environment',
        explanation: 'A step-by-step guide to installing the Java Development Kit (JDK) and setting up your first project in an Integrated Development Environment (IDE).',
      },
      {
        slug: 'first-java-program',
        title: 'First Java Program',
        explanation: 'Learn the structure of a basic Java program and how to print "Hello, World!" to the console. This topic also introduces the interactive code editor.',
      },
      {
        slug: 'variables',
        title: 'Declaring and Initializing Variables',
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
        title: 'Type Casting and Conversion',
        explanation:
          'Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting: widening casting (automatically) - converting a smaller type to a larger type size, and narrowing casting (manually) - converting a larger type to a smaller size type.',
      },
      {
        slug: 'print-formats',
        title: 'Print Formats',
        explanation:
          'Java provides several ways to display output, each with its specific use case. The most common methods are part of the `System.out` object. `System.out.print()` prints text without a new line. `System.out.println()` prints text and adds a new line. For formatted output, `System.out.printf()` uses format specifiers like `%s` for strings and `%d` for integers. `String.format()` works similarly but returns a formatted string. For errors, `System.err.println()` prints to the standard error stream.',
      },
    ],
  },
];
