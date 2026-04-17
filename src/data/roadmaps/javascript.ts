
import type { Roadmap } from './types';

export const javascript: Roadmap = {
  slug: 'javascript',
  name: 'JavaScript',
  description: 'The programming language of the web - from basics to advanced concepts',
  topics: [
    // LEARNING ROADMAP
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering JavaScript from fundamentals to ES2024+ features.' },
    
    // 1. FUNDAMENTALS
    { slug: 'what-is-javascript', title: 'What is JavaScript?', explanation: 'A beginner-friendly tour of JavaScript, highlighting its history and how it powers interactive, connected web experiences.', category: 'Fundamentals' },
    { slug: 'js-setup', title: 'Installation & Setup', explanation: 'Setting up your JavaScript development environment: browser console, Node.js, and IDEs.', category: 'Fundamentals' },
    { slug: 'first-program', title: 'First JavaScript Program', explanation: 'Writing and running your first JavaScript program with Hello World examples.', category: 'Fundamentals' },
    { slug: 'js-in-html', title: 'JavaScript in HTML', explanation: 'Integrating JavaScript with HTML using script tags, linking files, and execution order.', category: 'Fundamentals' },
    { slug: 'js-variables', title: 'Variables & Constants', explanation: 'Declaring variables with var, let, and const, understanding scope and hoisting.', category: 'Fundamentals' },
    { slug: 'js-data-types', title: 'Data Types', explanation: 'Primitive types: string, number, boolean, null, undefined, symbol, and bigint.', category: 'Fundamentals' },
    { slug: 'js-comments', title: 'Comments', explanation: 'Writing single-line, multi-line, and JSDoc comments for better code documentation.', category: 'Fundamentals' },
    { slug: 'console-methods', title: 'Console Methods', explanation: 'Using console.log, error, warn, table, group, and time for debugging.', category: 'Fundamentals' },
    
    // 2. OPERATORS & CONTROL FLOW
    { slug: 'js-operators', title: 'Operators', explanation: 'Arithmetic, assignment, comparison, logical, and type operators in JavaScript.', category: 'Operators & Control Flow' },
    { slug: 'ternary-operator', title: 'Ternary Operator', explanation: 'Concise conditional expressions using the ternary (? :) operator.', category: 'Operators & Control Flow' },
    { slug: 'js-conditionals', title: 'If...Else Statements', explanation: 'Making decisions in code with if, else if, else statements.', category: 'Operators & Control Flow' },
    { slug: 'switch-statement', title: 'Switch Statements', explanation: 'Handling multiple conditions efficiently with switch-case statements.', category: 'Operators & Control Flow' },
    { slug: 'js-loops', title: 'Loops', explanation: 'Repeating code with for, while, do-while loops, break, and continue.', category: 'Operators & Control Flow' },
    
    // 3. FUNCTIONS
    { slug: 'js-functions', title: 'Functions', explanation: 'Creating reusable code blocks with function declarations, expressions, and arrow functions.', category: 'Functions' },
    { slug: 'arrow-functions', title: 'Arrow Functions', explanation: 'ES6+ arrow function syntax, implicit returns, and lexical this binding.', category: 'Functions' },
    { slug: 'function-parameters', title: 'Function Parameters', explanation: 'Default parameters, rest parameters, and spread operator in functions.', category: 'Functions' },
    { slug: 'callback-functions', title: 'Callback Functions', explanation: 'Passing functions as arguments and understanding callback patterns.', category: 'Functions' },
    { slug: 'higher-order-functions', title: 'Higher-Order Functions', explanation: 'Functions that take or return other functions for advanced composition.', category: 'Functions' },
    { slug: 'iife', title: 'IIFE', explanation: 'Immediately Invoked Function Expressions for encapsulation and avoiding global scope pollution.', category: 'Functions' },
    
    // 4. ARRAYS & OBJECTS
    { slug: 'js-arrays', title: 'Arrays', explanation: 'Creating, accessing, and manipulating lists of data with JavaScript arrays.', category: 'Arrays & Objects' },
    { slug: 'array-methods', title: 'Array Methods (Basics)', explanation: 'Essential methods: push, pop, shift, unshift, splice, slice, concat, join.', category: 'Arrays & Objects' },
    { slug: 'js-array-methods', title: 'Array Iteration Methods', explanation: 'Powerful iteration: forEach, map, filter, reduce, find, some, every.', category: 'Arrays & Objects' },
    { slug: 'array-destructuring', title: 'Array Destructuring', explanation: 'Unpacking array values into distinct variables with ES6+ destructuring.', category: 'Arrays & Objects' },
    { slug: 'js-objects', title: 'Objects', explanation: 'Working with key-value pairs, object literals, and accessing properties.', category: 'Arrays & Objects' },
    { slug: 'object-methods', title: 'Object Methods', explanation: 'Built-in methods: Object.keys, values, entries, assign, freeze, seal.', category: 'Arrays & Objects' },
    { slug: 'object-destructuring', title: 'Object Destructuring', explanation: 'Extracting properties from objects into variables with clean syntax.', category: 'Arrays & Objects' },
    { slug: 'this-keyword', title: 'this Keyword', explanation: 'Understanding context binding and how this works in different scenarios.', category: 'Arrays & Objects' },
    
    // 5. STRINGS & REGEX
    { slug: 'strings', title: 'Strings', explanation: 'Working with text data: creation, concatenation, and manipulation.', category: 'Strings & Regex' },
    { slug: 'template-literals', title: 'Template Literals', explanation: 'String interpolation and multi-line strings with ES6+ template literals.', category: 'Strings & Regex' },
    { slug: 'string-methods', title: 'String Methods', explanation: 'Common methods: charAt, slice, indexOf, includes, split, replace, trim.', category: 'Strings & Regex' },
    { slug: 'regular-expressions', title: 'Regular Expressions', explanation: 'Pattern matching and text manipulation with regex basics.', category: 'Strings & Regex' },
    
    // 6. SCOPE & CLOSURES
    { slug: 'js-scope', title: 'Scope', explanation: 'Understanding lexical scope, block scope, and function scope.', category: 'Scope & Closures' },
    { slug: 'closures', title: 'Closures', explanation: 'Functions that remember their outer scope, enabling data privacy and factories.', category: 'Scope & Closures' },
    { slug: 'hoisting', title: 'Hoisting', explanation: 'How JavaScript moves variable and function declarations to the top of their scope.', category: 'Scope & Closures' },
    
    // 7. OBJECT-ORIENTED JAVASCRIPT
    { slug: 'constructor-functions', title: 'Constructor Functions', explanation: 'Creating object blueprints with constructor functions and the new keyword.', category: 'Object-Oriented JavaScript' },
    { slug: 'prototypes', title: 'Prototypes', explanation: 'Understanding prototypal inheritance and the prototype chain.', category: 'Object-Oriented JavaScript' },
    { slug: 'es6-classes', title: 'ES6 Classes', explanation: 'Modern class syntax for object-oriented programming in JavaScript.', category: 'Object-Oriented JavaScript' },
    { slug: 'class-inheritance', title: 'Class Inheritance', explanation: 'Extending classes with extends and super for code reuse.', category: 'Object-Oriented JavaScript' },
    { slug: 'getters-setters', title: 'Getters & Setters', explanation: 'Accessor properties for controlled property access in objects and classes.', category: 'Object-Oriented JavaScript' },
    { slug: 'static-methods', title: 'Static Methods', explanation: 'Class-level methods that don\'t require instantiation.', category: 'Object-Oriented JavaScript' },
    { slug: 'private-fields', title: 'Private Fields', explanation: 'True private class fields and methods using the # prefix.', category: 'Object-Oriented JavaScript' },
    
    // 8. ASYNCHRONOUS JAVASCRIPT
    { slug: 'js-async', title: 'Asynchronous JavaScript', explanation: 'Understanding synchronous vs asynchronous code execution.', category: 'Asynchronous JavaScript' },
    { slug: 'callbacks', title: 'Callbacks', explanation: 'Handling asynchronous operations with callback functions.', category: 'Asynchronous JavaScript' },
    { slug: 'promises', title: 'Promises', explanation: 'Modern async handling with Promise objects: then, catch, finally.', category: 'Asynchronous JavaScript' },
    { slug: 'promise-methods', title: 'Promise Methods', explanation: 'Promise.all, Promise.race, Promise.allSettled, Promise.any for parallel operations.', category: 'Asynchronous JavaScript' },
    { slug: 'async-await', title: 'Async/Await', explanation: 'Clean asynchronous code with async functions and await keyword.', category: 'Asynchronous JavaScript' },
    { slug: 'error-handling-async', title: 'Async Error Handling', explanation: 'try-catch-finally patterns for async/await error management.', category: 'Asynchronous JavaScript' },
    { slug: 'call-stack', title: 'Call Stack', explanation: 'How JavaScript executes functions and manages the execution stack.', category: 'Asynchronous JavaScript' },
    { slug: 'event-loop', title: 'Event Loop', explanation: 'Understanding how JavaScript handles asynchronous operations and concurrency.', category: 'Asynchronous JavaScript' },
    { slug: 'task-queue', title: 'Task Queue', explanation: 'Macro tasks, micro tasks, and the execution priority system.', category: 'Asynchronous JavaScript' },
    
    // 9. DOM MANIPULATION
    { slug: 'what-is-dom', title: 'What is DOM?', explanation: 'Understanding the Document Object Model and its tree structure.', category: 'DOM Manipulation' },
    { slug: 'selecting-elements', title: 'Selecting Elements', explanation: 'querySelector, querySelectorAll, getElementById, and other selection methods.', category: 'DOM Manipulation' },
    { slug: 'js-dom-manipulation', title: 'DOM Manipulation', explanation: 'Creating, modifying, and removing elements dynamically.', category: 'DOM Manipulation' },
    { slug: 'element-attributes', title: 'Attributes & Classes', explanation: 'Managing element attributes, classList methods, and data attributes.', category: 'DOM Manipulation' },
    { slug: 'dom-styles', title: 'Styles & CSS', explanation: 'Manipulating inline styles and computed styles with JavaScript.', category: 'DOM Manipulation' },
    
    // 10. EVENTS
    { slug: 'js-events', title: 'Events', explanation: 'Responding to user interactions with event listeners.', category: 'Events' },
    { slug: 'event-types', title: 'Event Types', explanation: 'Mouse, keyboard, form, and document events in detail.', category: 'Events' },
    { slug: 'event-object', title: 'Event Object', explanation: 'Understanding event properties, methods, and the event object.', category: 'Events' },
    { slug: 'event-propagation', title: 'Event Propagation', explanation: 'Bubbling, capturing, and event delegation patterns.', category: 'Events' },
    { slug: 'prevent-default', title: 'preventDefault & stopPropagation', explanation: 'Controlling default behaviors and event flow.', category: 'Events' },
    { slug: 'form-handling', title: 'Form Handling', explanation: 'Working with form elements, events, and validation.', category: 'Events' },
    { slug: 'form-validation', title: 'Form Validation', explanation: 'Client-side validation techniques and patterns.', category: 'Events' },
    { slug: 'formdata-api', title: 'FormData API', explanation: 'Modern form data handling with the FormData interface.', category: 'Events' },
    
    // 11. ES6+ FEATURES
    { slug: 'js-es6', title: 'ES6+ Overview', explanation: 'Introduction to modern JavaScript features from ES2015 onwards.', category: 'ES6+ Features' },
    { slug: 'destructuring', title: 'Destructuring', explanation: 'Unpacking values from arrays and properties from objects.', category: 'ES6+ Features' },
    { slug: 'spread-rest', title: 'Spread & Rest', explanation: 'The versatile ... operator for arrays, objects, and function parameters.', category: 'ES6+ Features' },
    { slug: 'default-parameters', title: 'Default Parameters', explanation: 'Setting default values for function parameters.', category: 'ES6+ Features' },
    { slug: 'enhanced-object-literals', title: 'Enhanced Object Literals', explanation: 'Shorthand properties, computed keys, and method definitions.', category: 'ES6+ Features' },
    { slug: 'for-of-loop', title: 'For...of Loop', explanation: 'Iterating over iterable objects with clean syntax.', category: 'ES6+ Features' },
    { slug: 'modules', title: 'Modules', explanation: 'ES6 import/export for modular code organization.', category: 'ES6+ Features' },
    { slug: 'symbols', title: 'Symbols', explanation: 'Unique identifiers and symbol use cases in modern JavaScript.', category: 'ES6+ Features' },
    { slug: 'iterators', title: 'Iterators', explanation: 'Creating custom iterators for object iteration.', category: 'ES6+ Features' },
    { slug: 'generators', title: 'Generators', explanation: 'Pausable functions with yield for lazy evaluation.', category: 'ES6+ Features' },
    { slug: 'proxy-reflect', title: 'Proxy & Reflect', explanation: 'Intercepting and customizing object operations.', category: 'ES6+ Features' },
    
    // 12. DESIGN PATTERNS
    { slug: 'design-patterns', title: 'Design Patterns', explanation: 'Common JavaScript patterns: Module, Singleton, Factory, Observer.', category: 'Design Patterns' },
    { slug: 'functional-programming', title: 'Functional Programming', explanation: 'Pure functions, immutability, composition, and functional concepts.', category: 'Design Patterns' },
    { slug: 'currying', title: 'Currying', explanation: 'Partial function application and currying techniques.', category: 'Design Patterns' },
    { slug: 'composition', title: 'Function Composition', explanation: 'Combining simple functions to build complex operations.', category: 'Design Patterns' },
    { slug: 'recursion', title: 'Recursion', explanation: 'Self-calling functions for elegant problem solving.', category: 'Design Patterns' },
    { slug: 'memoization', title: 'Memoization', explanation: 'Caching function results for performance optimization.', category: 'Design Patterns' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'try-catch-finally, custom errors, and error boundaries.', category: 'Design Patterns' },
    { slug: 'debugging', title: 'Debugging Techniques', explanation: 'Console methods, breakpoints, and debugging strategies.', category: 'Design Patterns' },
    
    // 13. PERFORMANCE & OPTIMIZATION
    { slug: 'debouncing-throttling', title: 'Debouncing & Throttling', explanation: 'Limiting function execution for performance optimization.', category: 'Performance & Optimization' },
    { slug: 'lazy-loading', title: 'Lazy Loading', explanation: 'On-demand resource loading for better performance.', category: 'Performance & Optimization' },
    { slug: 'web-workers', title: 'Web Workers', explanation: 'Running JavaScript in background threads for heavy computations.', category: 'Performance & Optimization' },
    { slug: 'memory-management', title: 'Memory Management', explanation: 'Garbage collection, memory leaks, and optimization techniques.', category: 'Performance & Optimization' },
    { slug: 'weakmap-weakset', title: 'WeakMap & WeakSet', explanation: 'Weak references for memory-efficient data structures.', category: 'Performance & Optimization' },
    { slug: 'performance-optimization', title: 'Performance Optimization', explanation: 'Profiling, monitoring, and optimizing JavaScript performance.', category: 'Performance & Optimization' },
    
    // 14. APIS & BROWSER
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Modern HTTP requests with fetch, handling JSON, and error management.', category: 'APIs & Browser' },
    { slug: 'ajax', title: 'AJAX & XMLHttpRequest', explanation: 'Making asynchronous requests to servers.', category: 'APIs & Browser' },
    { slug: 'rest-api', title: 'Working with REST APIs', explanation: 'Consuming RESTful APIs with JavaScript.', category: 'APIs & Browser' },
    { slug: 'local-storage', title: 'localStorage & sessionStorage', explanation: 'Client-side data storage with Web Storage API.', category: 'APIs & Browser' },
    { slug: 'cookies', title: 'Cookies', explanation: 'Working with browser cookies for data persistence.', category: 'APIs & Browser' },
    { slug: 'indexeddb', title: 'IndexedDB', explanation: 'Client-side database for large-scale data storage.', category: 'APIs & Browser' },
    { slug: 'geolocation', title: 'Geolocation API', explanation: 'Accessing user location data with the Geolocation API.', category: 'APIs & Browser' },
    { slug: 'notification-api', title: 'Notification API', explanation: 'Displaying browser notifications to users.', category: 'APIs & Browser' },
    { slug: 'canvas-api', title: 'Canvas API', explanation: 'Drawing graphics and animations with HTML5 Canvas.', category: 'APIs & Browser' },
    { slug: 'websockets', title: 'WebSockets', explanation: 'Real-time bidirectional communication with WebSocket API.', category: 'APIs & Browser' },
    { slug: 'service-workers', title: 'Service Workers', explanation: 'Offline functionality and background sync with service workers.', category: 'APIs & Browser' },
    { slug: 'intersection-observer', title: 'Intersection Observer', explanation: 'Efficiently detecting element visibility for lazy loading and infinite scroll.', category: 'APIs & Browser' },
    { slug: 'mutation-observer', title: 'Mutation Observer', explanation: 'Watching for changes to the DOM tree.', category: 'APIs & Browser' },
    
    // 15. MODERN JAVASCRIPT (ES2020-ES2024)
    { slug: 'optional-chaining', title: 'Optional Chaining', explanation: '?. operator for safe property access without null/undefined errors (ES2020).', category: 'Modern JavaScript' },
    { slug: 'nullish-coalescing', title: 'Nullish Coalescing', explanation: '?? operator for default values with null/undefined (ES2020).', category: 'Modern JavaScript' },
    { slug: 'bigint', title: 'BigInt', explanation: 'Working with arbitrarily large integers beyond Number.MAX_SAFE_INTEGER (ES2020).', category: 'Modern JavaScript' },
    { slug: 'promise-allsettled', title: 'Promise.allSettled', explanation: 'Waiting for all promises to complete regardless of rejection (ES2020).', category: 'Modern JavaScript' },
    { slug: 'dynamic-import', title: 'Dynamic Import', explanation: 'import() for lazy loading modules and code splitting (ES2020).', category: 'Modern JavaScript' },
    { slug: 'globalthis', title: 'globalThis', explanation: 'Universal global object across environments (ES2020).', category: 'Modern JavaScript' },
    { slug: 'logical-assignment', title: 'Logical Assignment', explanation: '&&=, ||=, ??= operators for conditional assignment (ES2021).', category: 'Modern JavaScript' },
    { slug: 'numeric-separators', title: 'Numeric Separators', explanation: 'Using _ in numbers for better readability: 1_000_000 (ES2021).', category: 'Modern JavaScript' },
    { slug: 'promise-any', title: 'Promise.any', explanation: 'Returns first fulfilled promise, ignoring rejections (ES2021).', category: 'Modern JavaScript' },
    { slug: 'string-replaceall', title: 'String.replaceAll', explanation: 'Replacing all occurrences in strings without regex (ES2021).', category: 'Modern JavaScript' },
    { slug: 'weakrefs', title: 'WeakRef & FinalizationRegistry', explanation: 'Weak references and cleanup callbacks for advanced memory management (ES2021).', category: 'Modern JavaScript' },
    { slug: 'class-fields', title: 'Class Fields', explanation: 'Public and private instance fields in classes (ES2022).', category: 'Modern JavaScript' },
    { slug: 'private-methods', title: 'Private Methods', explanation: 'Private instance and static methods with # syntax (ES2022).', category: 'Modern JavaScript' },
    { slug: 'static-blocks', title: 'Static Initialization Blocks', explanation: 'Static blocks for complex class initialization (ES2022).', category: 'Modern JavaScript' },
    { slug: 'top-level-await', title: 'Top-Level Await', explanation: 'Using await at module top level without async wrapper (ES2022).', category: 'Modern JavaScript' },
    { slug: 'at-method', title: 'Array/String .at()', explanation: 'Accessing array/string elements with negative indexing (ES2022).', category: 'Modern JavaScript' },
    { slug: 'hasown', title: 'Object.hasOwn', explanation: 'Safer alternative to hasOwnProperty for checking properties (ES2022).', category: 'Modern JavaScript' },
    { slug: 'error-cause', title: 'Error.cause', explanation: 'Chaining errors with cause property for better debugging (ES2022).', category: 'Modern JavaScript' },
    { slug: 'array-findlast', title: 'Array findLast/findLastIndex', explanation: 'Finding array elements from the end (ES2023).', category: 'Modern JavaScript' },
    { slug: 'array-toSorted', title: 'Immutable Array Methods', explanation: 'toSorted(), toReversed(), toSpliced(), with() for immutable operations (ES2023).', category: 'Modern JavaScript' },
    { slug: 'hashbang', title: 'Hashbang Grammar', explanation: '#! for executable JavaScript files in Node.js (ES2023).', category: 'Modern JavaScript' },
    { slug: 'symbols-as-weakmap-keys', title: 'Symbols as WeakMap Keys', explanation: 'Using symbols in WeakMap for better encapsulation (ES2023).', category: 'Modern JavaScript' },
    { slug: 'array-groupby', title: 'Array Grouping', explanation: 'Object.groupBy() and Map.groupBy() for grouping arrays (ES2024).', category: 'Modern JavaScript' },
    { slug: 'promise-withresolvers', title: 'Promise.withResolvers', explanation: 'Creating promise with exposed resolve/reject (ES2024).', category: 'Modern JavaScript' },
    { slug: 'regexp-v-flag', title: 'RegExp v Flag', explanation: 'Enhanced regex with set notation and properties (ES2024).', category: 'Modern JavaScript' },
    { slug: 'atomics-waitasync', title: 'Atomics.waitAsync', explanation: 'Non-blocking atomic operations for SharedArrayBuffer (ES2024).', category: 'Modern JavaScript' },
    { slug: 'arraybuffer-transfer', title: 'ArrayBuffer Transfer', explanation: 'Transferring and resizing ArrayBuffer (ES2024).', category: 'Modern JavaScript' },
    
    // 16. ADVANCED ARRAY METHODS
    { slug: 'array-flat', title: 'Array flat/flatMap', explanation: 'Flattening nested arrays and mapping with flatMap.', category: 'Advanced Array Methods' },
    { slug: 'array-from', title: 'Array.from', explanation: 'Creating arrays from iterables and array-like objects.', category: 'Advanced Array Methods' },
    { slug: 'array-of', title: 'Array.of', explanation: 'Creating arrays with predictable behavior.', category: 'Advanced Array Methods' },
    { slug: 'array-fill', title: 'Array fill', explanation: 'Filling arrays with static values.', category: 'Advanced Array Methods' },
    { slug: 'array-includes', title: 'Array includes', explanation: 'Checking for array membership with NaN support.', category: 'Advanced Array Methods' },
    { slug: 'typed-arrays', title: 'Typed Arrays', explanation: 'Int8Array, Uint8Array, Float32Array for binary data.', category: 'Advanced Array Methods' },
    
    // 17. ADVANCED OBJECT PATTERNS
    { slug: 'object-create', title: 'Object.create', explanation: 'Creating objects with specific prototype.', category: 'Advanced Object Patterns' },
    { slug: 'object-defineProperty', title: 'Object.defineProperty', explanation: 'Fine-grained control over object properties.', category: 'Advanced Object Patterns' },
    { slug: 'object-freeze-seal', title: 'Object Immutability', explanation: 'Object.freeze(), seal(), preventExtensions() for immutability.', category: 'Advanced Object Patterns' },
    { slug: 'property-descriptors', title: 'Property Descriptors', explanation: 'Configurable, enumerable, writable, and value descriptors.', category: 'Advanced Object Patterns' },
    { slug: 'object-getPrototypeOf', title: 'Prototype Manipulation', explanation: 'Getting and setting prototypes dynamically.', category: 'Advanced Object Patterns' },
    
    // 18. SETS & MAPS
    { slug: 'set', title: 'Set', explanation: 'Unique value collections with Set data structure.', category: 'Sets & Maps' },
    { slug: 'map', title: 'Map', explanation: 'Key-value pairs with any data type as keys.', category: 'Sets & Maps' },
    { slug: 'weakmap', title: 'WeakMap', explanation: 'Weak-reference maps for memory-efficient caching.', category: 'Sets & Maps' },
    { slug: 'weakset', title: 'WeakSet', explanation: 'Weak-reference sets for tracking objects.', category: 'Sets & Maps' },
    
    // 19. DATE & TIME
    { slug: 'date-object', title: 'Date Object', explanation: 'Working with dates and times in JavaScript.', category: 'Date & Time' },
    { slug: 'date-methods', title: 'Date Methods', explanation: 'Getting and setting date components.', category: 'Date & Time' },
    { slug: 'date-formatting', title: 'Date Formatting', explanation: 'toLocaleDateString, toLocaleTimeString, and formatting.', category: 'Date & Time' },
    { slug: 'temporal-api', title: 'Temporal API', explanation: 'Modern date/time API (Stage 3 proposal) for better date handling.', category: 'Date & Time' },
    
    // 20. MATH & NUMBERS
    { slug: 'math-object', title: 'Math Object', explanation: 'Mathematical operations and constants.', category: 'Math & Numbers' },
    { slug: 'number-methods', title: 'Number Methods', explanation: 'Number.isNaN, isFinite, parseInt, parseFloat, toFixed.', category: 'Math & Numbers' },
    { slug: 'math-random', title: 'Random Numbers', explanation: 'Generating random numbers and ranges.', category: 'Math & Numbers' },
    
    // 21. JSON
    { slug: 'json', title: 'JSON', explanation: 'JavaScript Object Notation for data interchange.', category: 'JSON' },
    { slug: 'json-parse', title: 'JSON.parse', explanation: 'Parsing JSON strings into objects.', category: 'JSON' },
    { slug: 'json-stringify', title: 'JSON.stringify', explanation: 'Converting objects to JSON strings with formatting.', category: 'JSON' },
    { slug: 'json-replacer-reviver', title: 'Replacer & Reviver', explanation: 'Custom transformations during JSON serialization.', category: 'JSON' },
    
    // 22. INTERNATIONALIZATION
    { slug: 'intl', title: 'Intl API', explanation: 'Internationalization and localization API.', category: 'Internationalization' },
    { slug: 'intl-datetimeformat', title: 'Intl.DateTimeFormat', explanation: 'Language-sensitive date/time formatting.', category: 'Internationalization' },
    { slug: 'intl-numberformat', title: 'Intl.NumberFormat', explanation: 'Language-sensitive number formatting.', category: 'Internationalization' },
    { slug: 'intl-collator', title: 'Intl.Collator', explanation: 'Language-sensitive string comparison.', category: 'Internationalization' },
    { slug: 'intl-pluralrules', title: 'Intl.PluralRules', explanation: 'Language-specific plural formatting.', category: 'Internationalization' },
    
    // 23. BROWSER APIS (EXTENDED)
    { slug: 'history-api', title: 'History API', explanation: 'Manipulating browser history for SPAs.', category: 'Browser APIs' },
    { slug: 'url-api', title: 'URL API', explanation: 'Parsing and constructing URLs with URL and URLSearchParams.', category: 'Browser APIs' },
    { slug: 'clipboard-api', title: 'Clipboard API', explanation: 'Reading from and writing to the clipboard.', category: 'Browser APIs' },
    { slug: 'file-api', title: 'File API', explanation: 'Reading files with FileReader and Blob.', category: 'Browser APIs' },
    { slug: 'drag-drop-api', title: 'Drag & Drop API', explanation: 'Implementing drag and drop functionality.', category: 'Browser APIs' },
    { slug: 'fullscreen-api', title: 'Fullscreen API', explanation: 'Requesting and managing fullscreen mode.', category: 'Browser APIs' },
    { slug: 'page-visibility-api', title: 'Page Visibility API', explanation: 'Detecting when page is visible/hidden.', category: 'Browser APIs' },
    { slug: 'battery-api', title: 'Battery Status API', explanation: 'Monitoring device battery status.', category: 'Browser APIs' },
    { slug: 'network-information', title: 'Network Information API', explanation: 'Detecting connection type and quality.', category: 'Browser APIs' },
    { slug: 'media-query-api', title: 'Media Query API', explanation: 'matchMedia for responsive JavaScript.', category: 'Browser APIs' },
    { slug: 'resize-observer', title: 'ResizeObserver API', explanation: 'Detect element size changes with high performance.', category: 'Browser APIs' },
    { slug: 'performance-api', title: 'Performance API', explanation: 'Measure and optimize application performance with high-precision timing.', category: 'Browser APIs' },
    { slug: 'request-animation-frame', title: 'requestAnimationFrame', explanation: 'Create smooth 60fps animations synced with browser refresh.', category: 'Browser APIs' },
    { slug: 'request-idle-callback', title: 'requestIdleCallback', explanation: 'Run tasks when browser is idle - smart background processing.', category: 'Browser APIs' },
    
    // 24. ADVANCED ASYNC PATTERNS
    { slug: 'async-iterators-generators', title: 'Async Iterators & Generators', explanation: 'Master lazy evaluation and asynchronous data streams with generators.', category: 'Advanced Async Patterns' },
    { slug: 'microtasks-macrotasks', title: 'Microtasks & Macrotasks', explanation: 'Master the JavaScript execution order and event loop.', category: 'Advanced Async Patterns' },
    { slug: 'abort-controller', title: 'AbortController', explanation: 'Cancel fetch requests and async operations.', category: 'Advanced Async Patterns' },
    
    // 25. JAVASCRIPT RUNTIME ENVIRONMENTS
    { slug: 'browser-vs-nodejs', title: 'Browser vs Node.js', explanation: 'Understanding different JavaScript runtime environments and their differences.', category: 'Runtime Environments' },
    { slug: 'javascript-engines', title: 'JavaScript Engines', explanation: 'V8, SpiderMonkey, JavaScriptCore - how JavaScript is executed.', category: 'Runtime Environments' },
    { slug: 'runtime-apis', title: 'Runtime APIs', explanation: 'Browser-specific vs Node.js-specific APIs and global objects.', category: 'Runtime Environments' },
    { slug: 'commonjs-vs-esm', title: 'CommonJS vs ES Modules', explanation: 'Understanding module systems: require() vs import/export.', category: 'Runtime Environments' },
    
    // 26. TOOLING & BUILD
    { slug: 'npm-yarn', title: 'npm & Yarn', explanation: 'Package management with npm and Yarn.', category: 'Tooling & Build' },
    { slug: 'package-json', title: 'package.json', explanation: 'Managing dependencies and scripts.', category: 'Tooling & Build' },
    { slug: 'webpack', title: 'Webpack', explanation: 'Module bundling and build configuration.', category: 'Tooling & Build' },
    { slug: 'vite', title: 'Vite', explanation: 'Lightning-fast build tool for modern web projects.', category: 'Tooling & Build' },
    { slug: 'babel', title: 'Babel', explanation: 'Transpiling modern JavaScript for browser compatibility.', category: 'Tooling & Build' },
    { slug: 'eslint', title: 'ESLint', explanation: 'Linting and code quality enforcement.', category: 'Tooling & Build' },
    { slug: 'prettier', title: 'Prettier', explanation: 'Automatic code formatting.', category: 'Tooling & Build' },
    
    // 27. SECURITY & BEST PRACTICES
    { slug: 'xss-prevention', title: 'XSS Prevention', explanation: 'Cross-site scripting attacks and mitigation.', category: 'Security & Best Practices' },
    { slug: 'csrf-protection', title: 'CSRF Protection', explanation: 'Cross-site request forgery prevention.', category: 'Security & Best Practices' },
    { slug: 'content-security-policy', title: 'Content Security Policy', explanation: 'CSP headers for enhanced security.', category: 'Security & Best Practices' },
    { slug: 'sanitization', title: 'Input Sanitization', explanation: 'Cleaning user input to prevent attacks.', category: 'Security & Best Practices' },
    { slug: 'secure-coding', title: 'Secure Coding', explanation: 'Security best practices and common vulnerabilities.', category: 'Security & Best Practices' },
    { slug: 'code-splitting', title: 'Code Splitting', explanation: 'Breaking code into chunks for better loading.', category: 'Security & Best Practices' },
    { slug: 'tree-shaking', title: 'Tree Shaking', explanation: 'Removing unused code from bundles.', category: 'Security & Best Practices' },
    { slug: 'clean-code', title: 'Clean Code', explanation: 'Writing maintainable and readable JavaScript.', category: 'Security & Best Practices' },
    { slug: 'solid-principles', title: 'SOLID Principles', explanation: 'Object-oriented design principles in JavaScript.', category: 'Security & Best Practices' },
    
    // 28. TESTING
    { slug: 'unit-testing', title: 'Unit Testing', explanation: 'Testing individual functions and modules.', category: 'Testing' },
    { slug: 'jest', title: 'Jest', explanation: 'Popular testing framework for JavaScript.', category: 'Testing' },
    { slug: 'vitest', title: 'Vitest', explanation: 'Blazing fast unit test framework powered by Vite.', category: 'Testing' },
    { slug: 'test-driven-development', title: 'TDD', explanation: 'Test-driven development methodology.', category: 'Testing' },
    { slug: 'mocking', title: 'Mocking & Spies', explanation: 'Mock functions, modules, and spy on behavior.', category: 'Testing' },
    { slug: 'e2e-testing', title: 'E2E Testing', explanation: 'End-to-end testing with Cypress, Playwright.', category: 'Testing' },
    { slug: 'testing-best-practices', title: 'Testing Best Practices', explanation: 'Writing effective tests and coverage strategies.', category: 'Testing' },
    
    // 29. META-PROGRAMMING
    { slug: 'reflect-api', title: 'Reflect API', explanation: 'Built-in object for interceptable JavaScript operations.', category: 'Meta-Programming' },
    { slug: 'proxy-advanced', title: 'Advanced Proxy', explanation: 'Deep dive into Proxy traps and use cases.', category: 'Meta-Programming' },
    { slug: 'property-access', title: 'Property Access', explanation: 'Dot notation vs bracket notation and dynamic properties.', category: 'Meta-Programming' },
    { slug: 'eval-function', title: 'eval() & Function Constructor', explanation: 'Dynamic code execution (and why to avoid it).', category: 'Meta-Programming' },
    
    // 30. MEMORY & PERFORMANCE
    { slug: 'garbage-collection', title: 'Garbage Collection', explanation: 'How JavaScript manages memory automatically.', category: 'Memory & Performance' },
    { slug: 'memory-leaks', title: 'Memory Leaks', explanation: 'Common causes and how to prevent memory leaks.', category: 'Memory & Performance' },
    { slug: 'profiling', title: 'Profiling', explanation: 'Using DevTools to profile and optimize performance.', category: 'Memory & Performance' },
    { slug: 'call-stack-visualization', title: 'Call Stack Visualization', explanation: 'Understanding stack traces and debugging.', category: 'Memory & Performance' },
    { slug: 'lighthouse', title: 'Lighthouse', explanation: 'Auditing performance, accessibility, and SEO with Lighthouse.', category: 'Memory & Performance' },
    { slug: 'performance-monitoring', title: 'Performance Monitoring', explanation: 'Real-world performance monitoring with RUM and synthetic monitoring.', category: 'Memory & Performance' },
  ]
};
