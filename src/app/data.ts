
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
    slug: 'html',
    name: 'HTML',
    topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning HTML from scratch.' },
      { slug: 'introduction-to-html', title: 'HTML Introduction', explanation: 'What is HTML and its role in web pages.' },
      { slug: 'document-structure', title: 'Document Structure', explanation: 'Understanding the basic boilerplate of an HTML document, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`.' },
      { slug: 'html-elements-and-tags', title: 'Elements and Tags', explanation: 'The basic building blocks of HTML.' },
      { slug: 'html-attributes', title: 'Attributes', explanation: 'Providing additional information about elements, such as `id`, `class`, `src`, and `href`.' },
      { slug: 'html-headings-and-paragraphs', title: 'Headings & Paragraphs', explanation: 'Structuring text content with `<h1>` through `<h6>` and `<p>` tags.' },
      { slug: 'text-formatting', title: 'Text Formatting', explanation: 'Using tags like `<b>`, `<i>`, `<u>`, `<strong>`, `<em>`, `<mark>`, and `<sub>` to format text.' },
      { slug: 'html-comments', title: 'Comments', explanation: 'How to add comments to your HTML code that are ignored by the browser.' },
      { slug: 'html-lists', title: 'Lists', explanation: 'Creating ordered (`<ol>`), unordered (`<ul>`), and description (`<dl>`) lists.' },
      { slug: 'html-links', title: 'Links (Hyperlinks)', explanation: 'Navigating between pages and websites using the `<a>` tag.' },
      { slug: 'html-images', title: 'Images', explanation: 'Embedding images in your web pages using the `<img>` tag.' },
      { slug: 'block-vs-inline', title: 'Block vs. Inline Elements', explanation: 'Understanding the difference between block-level elements (like `<div>`, `<p>`) and inline-level elements (like `<span>`, `<a>`).' },
      { slug: 'html-tables', title: 'Tables', explanation: 'Displaying data in a tabular format using `<table>`, `<tr>`, `<th>`, and `<td>`.' },
      { slug: 'html-semantic-elements', title: 'Semantic HTML', explanation: 'Using tags that describe their meaning and purpose, such as `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>`.' },
      { slug: 'html-forms', title: 'Forms', explanation: 'Collecting user input with `<form>`, `<input>`, `<textarea>`, and `<button>`.' },
      { slug: 'form-input-types', title: 'Form Input Types', explanation: 'Exploring various input types like `text`, `password`, `checkbox`, `radio`, `submit`, `date`, and `color`.' },
      { slug: 'form-attributes', title: 'Form Attributes', explanation: 'Understanding attributes like `action`, `method`, `name`, `value`, `placeholder`, and `required`.' },
      { slug: 'audio-and-video', title: 'Audio and Video', explanation: 'Embedding media content with the `<audio>` and `<video>` tags.' },
      { slug: 'iframes', title: 'Iframes', explanation: 'Embedding another HTML document within the current one using `<iframe>`.' },
      { slug: 'svg-and-canvas', title: 'SVG and Canvas', explanation: 'Introduction to embedding vector graphics with `<svg>` and drawing graphics with `<canvas>`.' },
      { slug: 'character-entities', title: 'Character Entities', explanation: 'How to display reserved characters like `<`, `>`, and `&`, and special symbols like `&copy;`.' },
      { slug: 'html5-apis', title: 'HTML5 APIs', explanation: 'An overview of powerful browser APIs like Geolocation, Web Storage, Web Workers, and Web Sockets.' },
      { slug: 'web-workers-api', title: 'Web Workers API', explanation: 'Running background scripts in a separate thread to avoid freezing the user interface.' },
      { slug: 'accessibility', title: 'Accessibility (a11y)', explanation: 'Best practices for writing accessible HTML, including ARIA roles and proper semantic structure to support users with disabilities.' },
    ]
  },
  {
    slug: 'css',
    name: 'CSS',
    topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning CSS from scratch.' },
      { slug: 'introduction-to-css', title: 'CSS Introduction', explanation: 'What is CSS and how it styles HTML.' },
      { slug: 'css-syntax-and-selectors', title: 'Syntax & Selectors', explanation: 'How to write CSS rules and target HTML elements.' },
      { slug: 'css-combinators', title: 'Combinators', explanation: 'Using combinators to create more specific and powerful selectors.'},
      { slug: 'css-colors', title: 'Colors', explanation: 'Applying colors to text, backgrounds, and borders using various color formats.' },
      { slug: 'css-box-model', title: 'The Box Model', explanation: 'Understanding margin, border, padding, and content.' },
      { slug: 'css-typography', title: 'Typography', explanation: 'Styling text, fonts, and more.' },
      { slug: 'css-positioning', title: 'Positioning', explanation: 'Controlling the layout of elements with `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning.' },
      { slug: 'css-flexbox', title: 'Flexbox', explanation: 'A modern layout model for one-dimensional layouts.' },
      { slug: 'css-grid', title: 'Grid', explanation: 'A powerful layout model for two-dimensional layouts.' },
      { slug: 'css-pseudo-classes', title: 'Pseudo-classes', explanation: 'Styling elements based on their state, like `:hover` or `:focus`.' },
      { slug: 'css-pseudo-elements', title: 'Pseudo-elements', explanation: 'Styling specific parts of an element, like `::before` or `::first-letter`.' },
      { slug: 'css-transitions', title: 'Transitions', explanation: 'Creating smooth animations when an element changes from one state to another.' },
      { slug: 'css-animations', title: 'Animations', explanation: 'Creating complex, multi-step animations with keyframes.' },
      { slug: 'css-variables', title: 'Variables', explanation: 'Storing reusable values like colors and sizes for a more maintainable stylesheet.' },
      { slug: 'css-responsive-design', title: 'Responsive Design', explanation: 'Making websites look good on all devices using media queries.' },
    ]
  },
  {
    slug: 'scss',
    name: 'Sass/SCSS',
    topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning Sass/SCSS.' },
      { slug: 'what-is-sass', title: 'What is Sass?', explanation: 'An introduction to CSS with superpowers.' },
      { slug: 'sass-variables', title: 'Variables', explanation: 'Storing reusable values like colors and font sizes.' },
      { slug: 'sass-nesting', title: 'Nesting', explanation: 'Nesting CSS rules to write cleaner, more organized styles.' },
      { slug: 'sass-mixins', title: 'Mixins', explanation: 'Creating reusable groups of CSS declarations.' },
      { slug: 'sass-extend-inheritance', title: 'Extend/Inheritance', explanation: 'Sharing a set of CSS properties from one selector to another.' },
      { slug: 'sass-functions', title: 'Functions', explanation: 'Using built-in functions and writing your own.' },
    ]
  },
  {
    slug: 'javascript',
    name: 'JavaScript',
    topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning JavaScript from scratch.' },
      { slug: 'introduction-to-js', title: 'JS Introduction', explanation: 'What is JavaScript and its role in web development.' },
      { slug: 'js-variables', title: 'Variables (var, let, const)', explanation: 'Storing data in JavaScript.' },
      { slug: 'js-data-types', title: 'Data Types', explanation: 'Understanding numbers, strings, booleans, objects, etc.' },
      { slug: 'js-operators', title: 'Operators', explanation: 'Performing arithmetic and logical operations.' },
      { slug: 'js-functions', title: 'Functions', explanation: 'Creating reusable blocks of code.' },
      { slug: 'js-scope', title: 'Scope', explanation: 'Understanding variable visibility and lifecycle.' },
      { slug: 'js-objects', title: 'Objects', explanation: 'Working with key-value pairs.' },
      { slug: 'js-arrays', title: 'Arrays', explanation: 'Managing lists of data.' },
      { slug: 'js-array-methods', title: 'Array Methods', explanation: 'Powerful methods like map, filter, and reduce.' },
      { slug: 'js-loops', title: 'Loops', explanation: 'Repeating actions with for and while loops.' },
      { slug: 'js-conditionals', title: 'Conditionals', explanation: 'Making decisions with if/else and switch.' },
      { slug: 'js-dom-manipulation', title: 'DOM Manipulation', explanation: 'Interacting with HTML and CSS.' },
      { slug: 'js-events', title: 'Events', explanation: 'Responding to user actions like clicks and keyboard input.' },
      { slug: 'js-async', title: 'Asynchronous JS', explanation: 'Understanding callbacks, Promises, and async/await.' },
      { slug: 'js-es6', title: 'ES6+ Features', explanation: 'Arrow functions, template literals, destructuring, and more.' },
    ]
  },
  {
    slug: 'react',
    name: 'React',
    topics: [
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning React from scratch.' },
      { slug: 'what-is-react', title: 'What is React?', explanation: 'An overview of the React library and its philosophy.' },
      { slug: 'jsx', title: 'JSX', explanation: 'Writing HTML-like syntax in JavaScript.' },
      { slug: 'react-components', title: 'Components & Props', explanation: 'Building reusable UI elements.' },
      { slug: 'react-state', title: 'State', explanation: 'Managing dynamic data within components.' },
      { slug: 'react-lifecycle', title: 'Component Lifecycle', explanation: 'Understanding how components are created, updated, and destroyed.' },
      { slug: 'conditional-rendering', title: 'Conditional Rendering', explanation: 'Showing or hiding components based on state.' },
      { slug: 'lists-and-keys', title: 'Lists and Keys', explanation: 'Rendering dynamic lists of data.' },
      { slug: 'react-forms', title: 'Handling Forms', explanation: 'Managing user input in forms.' },
      { slug: 'use-state-hook', title: 'useState Hook', explanation: 'Managing state in functional components.' },
      { slug: 'use-effect-hook', title: 'useEffect Hook', explanation: 'Handling side effects like data fetching.' },
      { slug: 'use-context-hook', title: 'useContext Hook', explanation: 'Managing global state without prop drilling.' },
      { slug: 'custom-hooks', title: 'Custom Hooks', explanation: 'Creating your own reusable stateful logic.' },
      { slug: 'react-router', title: 'Routing', explanation: 'Navigating between pages in a React application.' },
      { slug: 'react-state-management', title: 'State Management', explanation: 'Introduction to libraries like Redux and Zustand.' },
      { slug: 'react-performance', title: 'Performance Optimization', explanation: 'Techniques like memoization with useMemo and useCallback.' },
    ]
  },
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
        explanation: 'Learn about the resizable array implementation, one of the most used collection classes.'
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
      },
      {
        slug: 'super-keyword',
        title: 'The "super" Keyword',
        explanation: 'Learn how to call methods and constructors of the parent class.'
      },
      {
        slug: 'method-overriding',
        title: 'Method Overriding',
        explanation: 'Learn how a subclass can provide its own implementation of a method from its superclass.'
      },
      {
        slug: 'instanceof-operator',
        title: 'The "instanceof" Operator',
        explanation: 'Learn how to check the type of an object at runtime.'
      },
      {
        slug: 'object-class',
        title: 'The Object Class',
        explanation: 'Learn about the root of all classes in Java and its important methods like equals(), hashCode(), and toString().'
      },
      {
        slug: 'treemap-treeset',
        title: 'TreeMap and TreeSet',
        explanation: 'Learn about sorted collections that offer unique performance characteristics.'
      },
      {
        slug: 'queue-deque',
        title: 'Queue and Deque',
        explanation: 'Learn about FIFO (First-In, First-Out) and double-ended queue data structures.'
      },
      {
        slug: 'comparable-comparator',
        title: 'Comparable and Comparator',
        explanation: 'Learn how to define custom sorting logic for your objects.'
      },
      {
        slug: 'streams-api',
        title: 'Streams API',
        explanation: 'A deep dive into using streams for powerful, declarative data processing.'
      },
      {
        slug: 'optional-class',
        title: 'The Optional Class',
        explanation: 'A modern way to handle null values gracefully and avoid NullPointerExceptions.'
      },
      {
        slug: 'method-references',
        title: 'Method References',
        explanation: 'A shorthand syntax for lambda expressions that call an existing method.'
      },
      {
        slug: 'synchronized-keyword',
        title: 'The "synchronized" Keyword',
        explanation: 'The basic mechanism for preventing thread interference and memory consistency errors.'
      },
      {
        slug: 'volatile-keyword',
        title: 'The "volatile" Keyword',
        explanation: 'Ensuring that changes to a variable are always visible to other threads.'
      },
      {
        slug: 'executors-thread-pools',
        title: 'Executors and Thread Pools',
        explanation: 'A more robust and efficient way to manage threads.'
      },
      {
        slug: 'generics-intro',
        title: 'Introduction to Generics',
        explanation: 'Understanding why we use type parameters like <T> in collections.'
      },
      {
        slug: 'generics-methods-classes',
        title: 'Generic Classes & Methods',
        explanation: 'How to write your own reusable, type-safe generic components.'
      }
    ],
  },
  {
    slug: 'spring',
    name: 'Spring Framework',
    topics: [
      {
        slug: 'learning-plan',
        title: 'Learning Plan',
        explanation: 'A structured roadmap for learning the Spring Framework from scratch.'
      },
      {
        slug: 'spring-modules-overview',
        title: 'Spring Modules Overview',
        explanation: 'An introduction to the various modules that make up the Spring ecosystem.'
      },
      {
          slug: 'ioc-container-and-beans',
          title: 'IoC Container and Beans',
          explanation: 'Understanding the core of Spring: Inversion of Control and how objects (Beans) are managed.'
      },
      {
          slug: 'dependency-injection-overview',
          title: 'Dependency Injection Overview',
          explanation: 'Learn how Spring automatically provides dependencies to your objects.'
      },
      {
          slug: 'constructor-injection',
          title: 'Constructor Injection',
          explanation: 'The recommended way to inject dependencies for mandatory components.'
      },
      {
          slug: 'setter-injection',
          title: 'Setter Injection',
          explanation: 'Injecting dependencies through setter methods, ideal for optional components.'
      },
      {
          slug: 'injecting-collections',
          title: 'Injecting Collections',
          explanation: 'How to inject lists, sets, and maps of beans.'
      },
      {
          slug: 'bean-scopes',
          title: 'Bean Scopes',
          explanation: 'Understanding bean lifecycles, such as singleton (default) and prototype.'
      },
      {
          slug: 'bean-lifecycle-and-inheritance',
          title: 'Bean Lifecycle & Inheritance',
          explanation: 'Exploring how beans are created, initialized, and destroyed, and how configurations can be inherited.'
      }
    ]
  },
  {
    slug: 'spring-boot',
    name: 'Spring Boot',
    topics: [
        {
            slug: 'learning-plan',
            title: 'Learning Plan',
            explanation: 'A structured roadmap for learning Spring Boot.'
        },
        {
            slug: 'spring-boot-basics',
            title: 'Spring Boot Basics',
            explanation: 'Getting started with Spring Boot for rapid application development.'
        },
        {
            slug: 'autoconfiguration',
            title: 'Autoconfiguration',
            explanation: 'Understanding how Spring Boot automatically configures your application.'
        },
        {
            slug: 'spring-boot-starters',
            title: 'Spring Boot Starters',
            explanation: 'Learn how starters simplify your dependency management.'
        },
        {
            slug: 'spring-boot-properties',
            title: 'Application Properties',
            explanation: 'Configuring your application using application.properties or application.yml.'
        },
        {
            slug: 'spring-boot-profiles',
            title: 'Profiles',
            explanation: 'Managing different configurations for different environments (dev, prod).'
        },
        {
            slug: 'spring-boot-testing',
            title: 'Testing in Spring Boot',
            explanation: 'Learn how to test your Spring Boot applications with @SpringBootTest.'
        },
        {
            slug: 'spring-boot-actuator',
            title: 'Spring Boot Actuator',
            explanation: 'Monitoring and managing your application in production.'
        },
        {
            slug: 'spring-boot-webflux',
            title: 'Spring WebFlux',
            explanation: 'Building reactive web applications with Spring Boot.'
        },
    ]
  }
];
