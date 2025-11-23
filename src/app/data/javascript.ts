
import type { Language } from './types';

export const javascript: Language = {
  slug: 'javascript',
  name: 'JavaScript',
  topics: [
    // LEARNING ROADMAP
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering JavaScript from beginner to expert level.' },
    
    // 1. FUNDAMENTALS
    { slug: 'what-is-javascript', title: 'What is JavaScript?', explanation: 'Introduction to JavaScript, its history, ecosystem, and role in modern web development.', category: '1. Fundamentals' },
    { slug: 'js-setup', title: 'Installation & Setup', explanation: 'Setting up your JavaScript development environment: browser console, Node.js, and IDEs.', category: '1. Fundamentals' },
    { slug: 'first-program', title: 'First JavaScript Program', explanation: 'Writing and running your first JavaScript program with Hello World examples.', category: '1. Fundamentals' },
    { slug: 'js-in-html', title: 'JavaScript in HTML', explanation: 'Integrating JavaScript with HTML using script tags, linking files, and execution order.', category: '1. Fundamentals' },
    { slug: 'js-variables', title: 'Variables & Constants', explanation: 'Declaring variables with var, let, and const, understanding scope and hoisting.', category: '1. Fundamentals' },
    { slug: 'js-data-types', title: 'Data Types', explanation: 'Primitive types: string, number, boolean, null, undefined, symbol, and bigint.', category: '1. Fundamentals' },
    { slug: 'js-comments', title: 'Comments', explanation: 'Writing single-line, multi-line, and JSDoc comments for better code documentation.', category: '1. Fundamentals' },
    { slug: 'console-methods', title: 'Console Methods', explanation: 'Using console.log, error, warn, table, group, and time for debugging.', category: '1. Fundamentals' },
    
    // 2. OPERATORS & CONTROL FLOW
    { slug: 'js-operators', title: 'Operators', explanation: 'Arithmetic, assignment, comparison, logical, and type operators in JavaScript.', category: '2. Operators & Control Flow' },
    { slug: 'ternary-operator', title: 'Ternary Operator', explanation: 'Concise conditional expressions using the ternary (? :) operator.', category: '2. Operators & Control Flow' },
    { slug: 'js-conditionals', title: 'If...Else Statements', explanation: 'Making decisions in code with if, else if, else statements.', category: '2. Operators & Control Flow' },
    { slug: 'switch-statement', title: 'Switch Statements', explanation: 'Handling multiple conditions efficiently with switch-case statements.', category: '2. Operators & Control Flow' },
    { slug: 'js-loops', title: 'Loops', explanation: 'Repeating code with for, while, do-while loops, break, and continue.', category: '2. Operators & Control Flow' },
    
    // 3. FUNCTIONS
    { slug: 'js-functions', title: 'Functions', explanation: 'Creating reusable code blocks with function declarations, expressions, and arrow functions.', category: '3. Functions' },
    { slug: 'arrow-functions', title: 'Arrow Functions', explanation: 'ES6+ arrow function syntax, implicit returns, and lexical this binding.', category: '3. Functions' },
    { slug: 'function-parameters', title: 'Function Parameters', explanation: 'Default parameters, rest parameters, and spread operator in functions.', category: '3. Functions' },
    { slug: 'callback-functions', title: 'Callback Functions', explanation: 'Passing functions as arguments and understanding callback patterns.', category: '3. Functions' },
    { slug: 'higher-order-functions', title: 'Higher-Order Functions', explanation: 'Functions that take or return other functions for advanced composition.', category: '3. Functions' },
    { slug: 'iife', title: 'IIFE', explanation: 'Immediately Invoked Function Expressions for encapsulation and avoiding global scope pollution.', category: '3. Functions' },
    
    // 4. ARRAYS & OBJECTS
    { slug: 'js-arrays', title: 'Arrays', explanation: 'Creating, accessing, and manipulating lists of data with JavaScript arrays.', category: '4. Arrays & Objects' },
    { slug: 'array-methods', title: 'Array Methods (Basics)', explanation: 'Essential methods: push, pop, shift, unshift, splice, slice, concat, join.', category: '4. Arrays & Objects' },
    { slug: 'js-array-methods', title: 'Array Iteration Methods', explanation: 'Powerful iteration: forEach, map, filter, reduce, find, some, every.', category: '4. Arrays & Objects' },
    { slug: 'array-destructuring', title: 'Array Destructuring', explanation: 'Unpacking array values into distinct variables with ES6+ destructuring.', category: '4. Arrays & Objects' },
    { slug: 'js-objects', title: 'Objects', explanation: 'Working with key-value pairs, object literals, and accessing properties.', category: '4. Arrays & Objects' },
    { slug: 'object-methods', title: 'Object Methods', explanation: 'Built-in methods: Object.keys, values, entries, assign, freeze, seal.', category: '4. Arrays & Objects' },
    { slug: 'object-destructuring', title: 'Object Destructuring', explanation: 'Extracting properties from objects into variables with clean syntax.', category: '4. Arrays & Objects' },
    { slug: 'this-keyword', title: 'this Keyword', explanation: 'Understanding context binding and how this works in different scenarios.', category: '4. Arrays & Objects' },
    
    // 5. STRINGS & REGEX
    { slug: 'strings', title: 'Strings', explanation: 'Working with text data: creation, concatenation, and manipulation.', category: '5. Strings & Regex' },
    { slug: 'template-literals', title: 'Template Literals', explanation: 'String interpolation and multi-line strings with ES6+ template literals.', category: '5. Strings & Regex' },
    { slug: 'string-methods', title: 'String Methods', explanation: 'Common methods: charAt, slice, indexOf, includes, split, replace, trim.', category: '5. Strings & Regex' },
    { slug: 'regular-expressions', title: 'Regular Expressions', explanation: 'Pattern matching and text manipulation with regex basics.', category: '5. Strings & Regex' },
    
    // 6. SCOPE & CLOSURES
    { slug: 'js-scope', title: 'Scope', explanation: 'Understanding lexical scope, block scope, and function scope.', category: '6. Scope & Closures' },
    { slug: 'closures', title: 'Closures', explanation: 'Functions that remember their outer scope, enabling data privacy and factories.', category: '6. Scope & Closures' },
    { slug: 'hoisting', title: 'Hoisting', explanation: 'How JavaScript moves variable and function declarations to the top of their scope.', category: '6. Scope & Closures' },
    
    // 7. OBJECT-ORIENTED JAVASCRIPT
    { slug: 'constructor-functions', title: 'Constructor Functions', explanation: 'Creating object blueprints with constructor functions and the new keyword.', category: '7. Object-Oriented JavaScript' },
    { slug: 'prototypes', title: 'Prototypes', explanation: 'Understanding prototypal inheritance and the prototype chain.', category: '7. Object-Oriented JavaScript' },
    { slug: 'es6-classes', title: 'ES6 Classes', explanation: 'Modern class syntax for object-oriented programming in JavaScript.', category: '7. Object-Oriented JavaScript' },
    { slug: 'class-inheritance', title: 'Class Inheritance', explanation: 'Extending classes with extends and super for code reuse.', category: '7. Object-Oriented JavaScript' },
    { slug: 'getters-setters', title: 'Getters & Setters', explanation: 'Accessor properties for controlled property access in objects and classes.', category: '7. Object-Oriented JavaScript' },
    { slug: 'static-methods', title: 'Static Methods', explanation: 'Class-level methods that don\'t require instantiation.', category: '7. Object-Oriented JavaScript' },
    { slug: 'private-fields', title: 'Private Fields', explanation: 'True private class fields and methods using the # prefix.', category: '7. Object-Oriented JavaScript' },
    
    // 8. ASYNCHRONOUS JAVASCRIPT
    { slug: 'js-async', title: 'Asynchronous JavaScript', explanation: 'Understanding synchronous vs asynchronous code execution.', category: '8. Asynchronous JavaScript' },
    { slug: 'callbacks', title: 'Callbacks', explanation: 'Handling asynchronous operations with callback functions.', category: '8. Asynchronous JavaScript' },
    { slug: 'promises', title: 'Promises', explanation: 'Modern async handling with Promise objects: then, catch, finally.', category: '8. Asynchronous JavaScript' },
    { slug: 'promise-methods', title: 'Promise Methods', explanation: 'Promise.all, Promise.race, Promise.allSettled, Promise.any for parallel operations.', category: '8. Asynchronous JavaScript' },
    { slug: 'async-await', title: 'Async/Await', explanation: 'Clean asynchronous code with async functions and await keyword.', category: '8. Asynchronous JavaScript' },
    { slug: 'error-handling-async', title: 'Async Error Handling', explanation: 'try-catch-finally patterns for async/await error management.', category: '8. Asynchronous JavaScript' },
    { slug: 'call-stack', title: 'Call Stack', explanation: 'How JavaScript executes functions and manages the execution stack.', category: '8. Asynchronous JavaScript' },
    { slug: 'event-loop', title: 'Event Loop', explanation: 'Understanding how JavaScript handles asynchronous operations and concurrency.', category: '8. Asynchronous JavaScript' },
    { slug: 'task-queue', title: 'Task Queue', explanation: 'Macro tasks, micro tasks, and the execution priority system.', category: '8. Asynchronous JavaScript' },
    
    // 9. DOM MANIPULATION
    { slug: 'what-is-dom', title: 'What is DOM?', explanation: 'Understanding the Document Object Model and its tree structure.', category: '9. DOM Manipulation' },
    { slug: 'selecting-elements', title: 'Selecting Elements', explanation: 'querySelector, querySelectorAll, getElementById, and other selection methods.', category: '9. DOM Manipulation' },
    { slug: 'js-dom-manipulation', title: 'DOM Manipulation', explanation: 'Creating, modifying, and removing elements dynamically.', category: '9. DOM Manipulation' },
    { slug: 'element-attributes', title: 'Attributes & Classes', explanation: 'Managing element attributes, classList methods, and data attributes.', category: '9. DOM Manipulation' },
    { slug: 'dom-styles', title: 'Styles & CSS', explanation: 'Manipulating inline styles and computed styles with JavaScript.', category: '9. DOM Manipulation' },
    
    // 10. EVENTS
    { slug: 'js-events', title: 'Events', explanation: 'Responding to user interactions with event listeners.', category: '10. Events' },
    { slug: 'event-types', title: 'Event Types', explanation: 'Mouse, keyboard, form, and document events in detail.', category: '10. Events' },
    { slug: 'event-object', title: 'Event Object', explanation: 'Understanding event properties, methods, and the event object.', category: '10. Events' },
    { slug: 'event-propagation', title: 'Event Propagation', explanation: 'Bubbling, capturing, and event delegation patterns.', category: '10. Events' },
    { slug: 'prevent-default', title: 'preventDefault & stopPropagation', explanation: 'Controlling default behaviors and event flow.', category: '10. Events' },
    { slug: 'form-handling', title: 'Form Handling', explanation: 'Working with form elements, events, and validation.', category: '10. Events' },
    { slug: 'form-validation', title: 'Form Validation', explanation: 'Client-side validation techniques and patterns.', category: '10. Events' },
    { slug: 'formdata-api', title: 'FormData API', explanation: 'Modern form data handling with the FormData interface.', category: '10. Events' },
    
    // 11. ES6+ FEATURES
    { slug: 'js-es6', title: 'ES6+ Overview', explanation: 'Introduction to modern JavaScript features from ES2015 onwards.', category: '11. ES6+ Features' },
    { slug: 'destructuring', title: 'Destructuring', explanation: 'Unpacking values from arrays and properties from objects.', category: '11. ES6+ Features' },
    { slug: 'spread-rest', title: 'Spread & Rest', explanation: 'The versatile ... operator for arrays, objects, and function parameters.', category: '11. ES6+ Features' },
    { slug: 'default-parameters', title: 'Default Parameters', explanation: 'Setting default values for function parameters.', category: '11. ES6+ Features' },
    { slug: 'enhanced-object-literals', title: 'Enhanced Object Literals', explanation: 'Shorthand properties, computed keys, and method definitions.', category: '11. ES6+ Features' },
    { slug: 'for-of-loop', title: 'For...of Loop', explanation: 'Iterating over iterable objects with clean syntax.', category: '11. ES6+ Features' },
    { slug: 'modules', title: 'Modules', explanation: 'ES6 import/export for modular code organization.', category: '11. ES6+ Features' },
    { slug: 'symbols', title: 'Symbols', explanation: 'Unique identifiers and symbol use cases in modern JavaScript.', category: '11. ES6+ Features' },
    { slug: 'iterators', title: 'Iterators', explanation: 'Creating custom iterators for object iteration.', category: '11. ES6+ Features' },
    { slug: 'generators', title: 'Generators', explanation: 'Pausable functions with yield for lazy evaluation.', category: '11. ES6+ Features' },
    { slug: 'proxy-reflect', title: 'Proxy & Reflect', explanation: 'Intercepting and customizing object operations.', category: '11. ES6+ Features' },
    
    // 12. DESIGN PATTERNS
    { slug: 'design-patterns', title: 'Design Patterns', explanation: 'Common JavaScript patterns: Module, Singleton, Factory, Observer.', category: '12. Design Patterns' },
    { slug: 'functional-programming', title: 'Functional Programming', explanation: 'Pure functions, immutability, composition, and functional concepts.', category: '12. Design Patterns' },
    { slug: 'currying', title: 'Currying', explanation: 'Partial function application and currying techniques.', category: '12. Design Patterns' },
    { slug: 'composition', title: 'Function Composition', explanation: 'Combining simple functions to build complex operations.', category: '12. Design Patterns' },
    { slug: 'recursion', title: 'Recursion', explanation: 'Self-calling functions for elegant problem solving.', category: '12. Design Patterns' },
    { slug: 'memoization', title: 'Memoization', explanation: 'Caching function results for performance optimization.', category: '12. Design Patterns' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'try-catch-finally, custom errors, and error boundaries.', category: '12. Design Patterns' },
    { slug: 'debugging', title: 'Debugging Techniques', explanation: 'Console methods, breakpoints, and debugging strategies.', category: '12. Design Patterns' },
    
    // 13. PERFORMANCE & OPTIMIZATION
    { slug: 'debouncing-throttling', title: 'Debouncing & Throttling', explanation: 'Limiting function execution for performance optimization.', category: '13. Performance & Optimization' },
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'On-demand resource loading for better performance.', category: '13. Performance & Optimization' },
    { slug: 'web-workers', title: 'Web Workers', explanation: 'Running JavaScript in background threads for heavy computations.', category: '13. Performance & Optimization' },
    { slug: 'memory-management', title: 'Memory Management', explanation: 'Garbage collection, memory leaks, and optimization techniques.', category: '13. Performance & Optimization' },
    { slug: 'weakmap-weakset', title: 'WeakMap & WeakSet', explanation: 'Weak references for memory-efficient data structures.', category: '13. Performance & Optimization' },
    { slug: 'performance-optimization', title: 'Performance Optimization', explanation: 'Profiling, monitoring, and optimizing JavaScript performance.', category: '13. Performance & Optimization' },
    
    // 14. APIS & BROWSER
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Modern HTTP requests with fetch, handling JSON, and error management.', category: '14. APIs & Browser' },
    { slug: 'ajax', title: 'AJAX & XMLHttpRequest', explanation: 'Making asynchronous requests to servers.', category: '14. APIs & Browser' },
    { slug: 'rest-api', title: 'Working with REST APIs', explanation: 'Consuming RESTful APIs with JavaScript.', category: '14. APIs & Browser' },
    { slug: 'local-storage', title: 'localStorage & sessionStorage', explanation: 'Client-side data storage with Web Storage API.', category: '14. APIs & Browser' },
    { slug: 'cookies', title: 'Cookies', explanation: 'Working with browser cookies for data persistence.', category: '14. APIs & Browser' },
    { slug: 'indexeddb', title: 'IndexedDB', explanation: 'Client-side database for large-scale data storage.', category: '14. APIs & Browser' },
    { slug: 'geolocation', title: 'Geolocation API', explanation: 'Accessing user location data with the Geolocation API.', category: '14. APIs & Browser' },
    { slug: 'notification-api', title: 'Notification API', explanation: 'Displaying browser notifications to users.', category: '14. APIs & Browser' },
    { slug: 'canvas-api', title: 'Canvas API', explanation: 'Drawing graphics and animations with HTML5 Canvas.', category: '14. APIs & Browser' },
    { slug: 'websockets', title: 'WebSockets', explanation: 'Real-time bidirectional communication with WebSocket API.', category: '14. APIs & Browser' },
    { slug: 'service-workers', title: 'Service Workers', explanation: 'Offline functionality and background sync with service workers.', category: '14. APIs & Browser' },
    { slug: 'intersection-observer', title: 'Intersection Observer', explanation: 'Efficiently detecting element visibility for lazy loading and infinite scroll.', category: '14. APIs & Browser' },
    { slug: 'mutation-observer', title: 'Mutation Observer', explanation: 'Watching for changes to the DOM tree.', category: '14. APIs & Browser' },
    
    // 15. SECURITY & TESTING
    { slug: 'security', title: 'JavaScript Security', explanation: 'XSS, CSRF prevention, CSP, and secure coding practices.', category: '15. Security & Testing' },
    { slug: 'testing', title: 'Testing JavaScript', explanation: 'Unit testing, integration testing, and TDD with Jest.', category: '15. Security & Testing' },
    { slug: 'clean-code', title: 'Clean Code Principles', explanation: 'Writing maintainable, readable, and professional JavaScript code.', category: '15. Security & Testing' },
  ]
};
