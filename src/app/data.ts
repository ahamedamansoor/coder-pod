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
        slug: 'the-story-of-java',
        title: 'The Story of Java',
        explanation:
          'Explore the origins of Java, from its inception as the "Green Project" to its evolution into a global programming standard. This topic covers the key milestones, the creators, and the initial goals that shaped Java into the language it is today.',
      },
      {
        slug: 'introduction-to-java',
        title: 'Introduction to Java',
        explanation:
          'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. It was originally developed by James Gosling at Sun Microsystems and released in 1995.',
      },
      {
        slug: 'features-of-java',
        title: 'Features of Java',
        explanation:
          'Java is a popular programming language with a wide range of features that make it powerful and versatile. Understanding these core features helps in appreciating why it is widely used for building robust applications.',
      },
      {
        slug: 'print-formats',
        title: 'Print Formats',
        explanation:
          'Java provides several ways to display output, each with its specific use case. The most common methods are part of the `System.out` object. `System.out.print()` prints text without a new line. `System.out.println()` prints text and adds a new line. For formatted output, `System.out.printf()` uses format specifiers like `%s` for strings and `%d` for integers. `String.format()` works similarly but returns a formatted string. For errors, `System.err.println()` prints to the standard error stream.',
      },
      {
        slug: 'data-types',
        title: 'Data Types',
        explanation:
          'In Java, every variable has a data type. Data types specify the size and type of values that can be stored in a variable. There are two main categories of data types: Primitive and Non-Primitive. Primitive types include `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, and `char`. Non-primitive types (or reference types) include Classes, Interfaces, and Arrays, like `String`.',
      },
      {
        slug: 'variables',
        title: 'Declaring and Initializing Variables',
        explanation:
          'In Java, variables are containers for storing data values. To use a variable, you must declare it by specifying its type and name. You can also initialize it by assigning an initial value. Understanding how to declare and initialize variables is a fundamental concept in Java programming.',
      },
      {
        slug: 'type-casting',
        title: 'Type Casting and Conversion',
        explanation:
          'Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting: widening casting (automatically) - converting a smaller type to a larger type size, and narrowing casting (manually) - converting a larger type to a smaller size type.',
      },
    ],
  },
];
