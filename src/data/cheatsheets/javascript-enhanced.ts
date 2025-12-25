import { Code2 } from 'lucide-react';

export const javascriptCheatsheet = {
  id: 'javascript',
  name: 'JavaScript',
  description: 'Complete JavaScript guide from beginner to expert (ES6-ES2024)',
  icon: Code2,
  colorTheme: 'amber' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with JavaScript',
      commands: [
        {
          command: 'What is JavaScript',
          description: 'Understanding JavaScript fundamentals',
          usage: 'JavaScript basics overview',
          example: '// JavaScript is a programming language\n// Used for web development, servers, mobile apps\n// Runs in browsers (client-side) and servers (Node.js)\n// Dynamic typing, prototype-based, single-threaded\n\n// Basic concepts:\n// - Variables store data\n// - Functions perform actions\n// - Objects group related data\n// - Arrays store lists of data\n// - Control flow directs program execution',
        },
        {
          command: 'Adding JavaScript to HTML',
          description: 'Three ways to include JavaScript',
          usage: 'Inline, Internal, External',
          example: '<!-- 1. Inline JavaScript -->\n<button onclick="alert(\'Hello!\')">Click me</button>\n\n<!-- 2. Internal JavaScript -->\n<script>\n  console.log("Hello World");\n</script>\n\n<!-- 3. External JavaScript -->\n<script src="script.js"></script>\n\n<!-- Best practice: External at end of body -->\n<script src="app.js" defer></script>',
        },
        {
          command: 'JavaScript Comments',
          description: 'Add comments to JavaScript code',
          usage: '// single line or /* multi line */',
          example: '// This is a single line comment\n\n/* \n  This is a multi-line comment\n  Useful for longer explanations\n*/\n\nlet x = 5; // Comment after code\n\n/**\n * Documentation comment\n * @param {number} a - First number\n * @param {number} b - Second number\n * @returns {number} Sum of a and b\n */\nfunction add(a, b) {\n  return a + b;\n}',
        },
        {
          command: 'console.log()',
          description: 'Output values to console',
          usage: 'console.log(value)',
          example: 'console.log("Hello World");\nconsole.log(42);\nconsole.log({ name: "John", age: 30 });\nconsole.log([1, 2, 3]);\n\n// Multiple values\nconsole.log("Name:", name, "Age:", age);\n\n// Template literals\nconsole.log(`User ${name} is ${age} years old`);',
        },
        {
          command: 'JavaScript Data Types',
          description: 'Understanding basic data types',
          usage: 'typeof operator',
          example: '// Primitive types\nlet name = "John";      // string\nlet age = 30;           // number\nlet isStudent = true;   // boolean\nlet nothing = null;     // null\nlet undefinedVar;       // undefined\nlet symbol = Symbol("id"); // symbol\nlet bigInt = 123n;      // bigint\n\n// Check types\nconsole.log(typeof name);     // "string"\nconsole.log(typeof age);      // "number"\nconsole.log(typeof isStudent); // "boolean"',
        },
        {
          command: 'String Basics',
          description: 'Working with text data',
          usage: 'Single quotes, double quotes, template literals',
          example: 'let single = \'Single quotes\';\nlet double = "Double quotes";\nlet template = `Template literals`;\n\n// Template literals with expressions\nlet name = "John";\nlet age = 30;\nlet message = `My name is ${name} and I\'m ${age} years old`;\n\n// Multi-line strings\nlet multiLine = `This is\na multi-line\nstring`;',
        },
        {
          command: 'Number Basics',
          description: 'Working with numeric data',
          usage: 'Integers, floats, arithmetic operations',
          example: 'let integer = 42;\nlet float = 3.14;\nlet negative = -10;\nlet scientific = 1.5e6; // 1,500,000\n\n// Arithmetic operations\nlet sum = 5 + 3;        // 8\nlet difference = 5 - 3; // 2\nlet product = 5 * 3;    // 15\nlet quotient = 5 / 3;   // 1.666...\nlet remainder = 5 % 3;   // 2\n\n// Math object\nlet pi = Math.PI;       // 3.14159...\nlet rounded = Math.round(3.7); // 4',
        },
        {
          command: 'Boolean and Logical Operators',
          description: 'Working with true/false values',
          usage: '&&, ||, !, comparison operators',
          example: 'let isTrue = true;\nlet isFalse = false;\n\n// Comparison operators\n5 == "5";    // true (loose equality)\n5 === "5";   // false (strict equality)\n5 != "5";    // false (loose inequality)\n5 !== "5";   // true (strict inequality)\n5 > 3;       // true\n5 >= 5;      // true\n\n// Logical operators\ntrue && false; // false (AND)\ntrue || false; // true (OR)\n!true;        // false (NOT)',
        },
      ],
    },
    {
      title: 'Variables and Constants',
      commands: [
        {
          command: 'const',
          description: 'Declare constant (block-scoped, cannot reassign)',
          usage: 'const variable = value',
          example: 'const PI = 3.14159;\nconst API_URL = "https://api.example.com";\nconst user = { name: "John", age: 30 };\n\n// Cannot reassign\n// PI = 3; // Error!\n\n// But object properties can be modified\nuser.age = 31; // This works\n\n// Must be initialized\n// const x; // Error!',
        },
        {
          command: 'let',
          description: 'Declare variable (block-scoped, can reassign)',
          usage: 'let variable = value',
          example: 'let count = 0;\ncount++; // count is now 1\n\nlet name = "John";\nname = "Jane"; // Can reassign\n\n// Block scope\n{\n  let blockScoped = "I\'m inside a block";\n}\n// console.log(blockScoped); // Error: not defined\n\n// Can be declared without initialization\nlet uninitialized;\nconsole.log(uninitialized); // undefined',
        },
        {
          command: 'var',
          description: 'Declare variable (function-scoped, avoid using)',
          usage: 'var variable = value',
          example: 'var legacy = "old style";\n\n// Function scoped\nfunction test() {\n  var functionScoped = "I\'m inside a function";\n}\n// console.log(functionScoped); // Error\n\n// Hoisted\nconsole.log(hoisted); // undefined (not error)\nvar hoisted = "I\'m hoisted";\n\n// Avoid var in modern JavaScript',
        },
        {
          command: 'Variable Naming Rules',
          description: 'Rules and conventions for naming variables',
          usage: 'Valid variable names',
          example: '// Valid names\nlet userName = "john";\nlet _private = "hidden";\nlet $special = "dollar";\nlet camelCase = "multipleWords";\nlet number123 = "withNumbers";\n\n// Invalid names\n// let 123invalid = "starts with number";\n// let user-name = "contains hyphen";\n// let let = "reserved keyword";\n\n// Best practices\n// Use descriptive names\n// Use camelCase for variables\n// Use UPPER_CASE for constants',
        },
      ],
    },
    {
      title: 'Basic Operators',
      commands: [
        {
          command: 'Arithmetic Operators',
          description: 'Mathematical operations',
          usage: '+, -, *, /, %, **, ++, --',
          example: 'let a = 10, b = 3;\n\na + b;  // 13 (addition)\na - b;  // 7 (subtraction)\na * b;  // 30 (multiplication)\na / b;  // 3.333... (division)\na % b;  // 1 (remainder)\na ** b; // 1000 (exponentiation)\n\n// Increment/decrement\nlet x = 5;\nx++;    // 6 (post-increment)\n++x;    // 7 (pre-increment)\nx--;    // 6 (post-decrement)\n--x;    // 5 (pre-decrement)',
        },
        {
          command: 'Assignment Operators',
          description: 'Assign values to variables',
          usage: '=, +=, -=, *=, /=, %=, **=',
          example: 'let x = 10;\n\nx += 5;   // x = 15 (same as x = x + 5)\nx -= 3;   // x = 12 (same as x = x - 3)\nx *= 2;   // x = 24 (same as x = x * 2)\nx /= 4;   // x = 6 (same as x = x / 4)\nx %= 4;   // x = 2 (same as x = x % 4)\nx **= 3;  // x = 8 (same as x = x ** 3)',
        },
        {
          command: 'Comparison Operators',
          description: 'Compare values',
          usage: '==, ===, !=, !==, >, <, >=, <='
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'if...else statement',
          description: 'Conditional execution',
          usage: 'if (condition) { ... } else { ... }',
          example: 'let age = 18;\n\nif (age >= 18) {\n  console.log("You can vote");\n} else {\n  console.log("You cannot vote");\n}\n\n// else if\nlet score = 85;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("F");\n}',
        },
        {
          command: 'switch statement',
          description: 'Multiple condition handling',
          usage: 'switch (value) { case: ... break; default: ... }',
          example: 'let day = "Monday";\n\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  case "Friday":\n    console.log("End of week");\n    break;\n  case "Saturday":\n  case "Sunday":\n    console.log("Weekend");\n    break;\n  default:\n    console.log("Weekday");\n}',
        },
        {
          command: 'Ternary Operator',
          description: 'Compact conditional expression',
          usage: 'condition ? value_if_true : value_if_false',
          example: 'let age = 18;\nlet message = age >= 18 ? "Adult" : "Minor";\n\n// Nested ternary (use sparingly)\nlet grade = 85;\nlet result = grade >= 90 ? "A" : \n              grade >= 80 ? "B" : \n              grade >= 70 ? "C" : "F";\n\n// Function return\nfunction getMax(a, b) {\n  return a > b ? a : b;\n}',
        },
        {
          command: 'for loop',
          description: 'Iterate with counter',
          usage: 'for (initialization; condition; increment) { ... }',
          example: '// Basic for loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0, 1, 2, 3, 4\n}\n\n// Loop through array\nlet fruits = ["apple", "banana", "orange"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n\n// Loop backwards\nfor (let i = fruits.length - 1; i >= 0; i--) {\n  console.log(fruits[i]);\n}',
        },
        {
          command: 'while loop',
          description: 'Loop while condition is true',
          usage: 'while (condition) { ... }',
          example: 'let count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++; // Important: increment to avoid infinite loop\n}\n\n// Loop until user enters "quit"\n// let input;\n// while (input !== "quit") {\n//   input = prompt("Enter something (or \'quit\' to exit):");\n// }',
        },
        {
          command: 'do...while loop',
          description: 'Execute at least once, then check condition',
          usage: 'do { ... } while (condition);',
          example: 'let count = 0;\ndo {\n  console.log(count);\n  count++;\n} while (count < 5);\n\n// Always executes at least once\nlet number;\ndo {\n  number = Math.floor(Math.random() * 10) + 1;\n  console.log("Rolled:", number);\n} while (number !== 6);\n\nconsole.log("Rolled a 6!");',
        },
        {
          command: 'for...in loop',
          description: 'Iterate over object properties',
          usage: 'for (key in object) { ... }',
          example: 'let person = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\nfor (let key in person) {\n  console.log(key + ": " + person[key]);\n}\n\n// With arrays (use for...of instead)\nlet arr = [10, 20, 30];\nfor (let index in arr) {\n  console.log(index, arr[index]); // index is string\n}',
        },
        {
          command: 'for...of loop',
          description: 'Iterate over iterable objects',
          usage: 'for (item of iterable) { ... }',
          example: 'let fruits = ["apple", "banana", "orange"];\n\nfor (let fruit of fruits) {\n  console.log(fruit);\n}\n\n// With strings\nfor (let char of "hello") {\n  console.log(char);\n}\n\n// With Map\nlet map = new Map([["a", 1], ["b", 2]]);\nfor (let [key, value] of map) {\n  console.log(key, value);\n}',
        },
        {
          command: 'break and continue',
          description: 'Control loop execution',
          usage: 'break; continue;',
          example: '// break - exit loop\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0, 1, 2, 3, 4\n}\n\n// continue - skip to next iteration\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0, 1, 3, 4\n}\n\n// With labels\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i === 1 && j === 1) break outer;\n    console.log(i, j);\n  }\n}',
        },
      ],
    },
    {
      title: 'Functions',
      commands: [
        {
          command: 'Function Declaration',
          description: 'Define named function',
          usage: 'function functionName(parameters) { ... }',
          example: 'function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet("John")); // "Hello, John!"\n\n// Function with default parameters (ES6+)\nfunction greet(name = "Guest") {\n  return `Hello, ${name}!`;\n}\n\n// Function with multiple parameters\nfunction add(a, b, c = 0) {\n  return a + b + c;\n}',
        },
        {
          command: 'Function Expression',
          description: 'Define function as value',
          usage: 'const functionName = function(parameters) { ... }',
          example: 'const greet = function(name) {\n  return "Hello, " + name + "!";\n};\n\nconsole.log(greet("John"));\n\n// Anonymous function\nsetTimeout(function() {\n  console.log("Delayed message");\n}, 1000);\n\n// Function expressions are not hoisted\n// greet(); // Error if called before declaration\nconst greet = function(name) {\n  return "Hello, " + name;\n};',
        },
        {
          command: 'Arrow Functions',
          description: 'Concise function syntax (ES6)',
          usage: 'const functionName = (parameters) => expression',
          example: '// Basic arrow function\nconst add = (a, b) => a + b;\n\n// With multiple statements\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};\n\n// Single parameter (no parentheses needed)\nconst double = x => x * 2;\n\n// No parameters\nconst getRandom = () => Math.random();\n\n// this binding difference\nconst obj = {\n  name: "John",\n  // Regular function: this refers to obj\n  greetRegular() {\n    console.log(this.name);\n  },\n  // Arrow function: this inherits from outer scope\n  greetArrow: () => console.log(this.name)\n};',
        },
        {
          command: 'Function Parameters',
          description: 'Working with function parameters',
          usage: 'Default parameters, rest parameters',
          example: '// Default parameters\nfunction greet(name = "Guest", age = 18) {\n  console.log(`${name} is ${age} years old`);\n}\n\ngreet(); // "Guest is 18 years old"\ngreet("John", 25); // "John is 25 years old"\n\n// Rest parameters\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4, 5)); // 15\n\n// Mixed parameters\nfunction createUser(name, ...roles) {\n  return { name, roles };\n}\nconsole.log(createUser("John", "admin", "user"));',
        },
        {
          command: 'Return Values',
          description: 'Functions returning values',
          usage: 'return statement',
          example: 'function add(a, b) {\n  return a + b;\n}\n\n// Early return\nfunction checkAge(age) {\n  if (age < 0) return "Invalid age";\n  if (age < 18) return "Minor";\n  return "Adult";\n}\n\n// Returning objects\nfunction createUser(name, age) {\n  return {\n    name: name,\n    age: age,\n    canVote: age >= 18\n  };\n}\n\n// Returning functions (higher-order functions)\nfunction createMultiplier(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = createMultiplier(2);\nconsole.log(double(5)); // 10',
        },
        {
          command: 'Function Scope and Closures',
          description: 'Understanding scope and closures',
          usage: 'Lexical scope, closure patterns',
          example: '// Function scope\nfunction outerFunction() {\n  let outerVariable = "I\'m outer";\n  \n  function innerFunction() {\n    let innerVariable = "I\'m inner";\n    console.log(outerVariable); // Can access outer\n    console.log(innerVariable); // Can access inner\n  }\n  \n  innerFunction();\n  // console.log(innerVariable); // Error: not accessible\n}\n\n// Closure\nfunction createCounter() {\n  let count = 0;\n  \n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3',
        },
        {
          command: 'Immediately Invoked Function Expression (IIFE)',
          description: 'Function that runs immediately',
          usage: '(function() { ... })();',
          example: '(function() {\n  console.log("IIFE executed!");\n  const private = "I\'m private";\n})();\n\n// With parameters\n(function(name) {\n  console.log("Hello, " + name);\n})("John");\n\n// Return value\nconst result = (function(a, b) {\n  return a + b;\n})(5, 3);\n\nconsole.log(result); // 8\n\n// Module pattern\nconst module = (function() {\n  let privateVar = 0;\n  \n  return {\n    increment: function() {\n      privateVar++;\n      return privateVar;\n    },\n    decrement: function() {\n      privateVar--;\n      return privateVar;\n    }\n  };\n})();',
        },
        {
          command: 'Higher-Order Functions',
          description: 'Functions that take or return other functions',
          usage: 'Functions as parameters and return values',
          example: '// Function as parameter\nfunction operate(a, b, operation) {\n  return operation(a, b);\n}\n\nfunction add(a, b) { return a + b; }\nfunction multiply(a, b) { return a * b; }\n\nconsole.log(operate(5, 3, add)); // 8\nconsole.log(operate(5, 3, multiply)); // 15\n\n// Function returning function\nfunction createGreeter(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}!`;\n  };\n}\n\nconst sayHello = createGreeter("Hello");\nconst sayHi = createGreeter("Hi");\n\nconsole.log(sayHello("John")); // "Hello, John!"\nconsole.log(sayHi("Jane")); // "Hi, Jane!"',
        },
        {
          command: 'Recursive Functions',
          description: 'Functions that call themselves',
          usage: 'Base case and recursive case',
          example: '// Factorial\nfunction factorial(n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive case\n}\n\nconsole.log(factorial(5)); // 120\n\n// Fibonacci\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// Tree traversal\nfunction traverseTree(node, result = []) {\n  if (!node) return result;\n  \n  result.push(node.value);\n  traverseTree(node.left, result);\n  traverseTree(node.right, result);\n  \n  return result;\n}',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Arrays - Basic Operations',
      commands: [
        {
          command: 'Array Creation',
          description: 'Creating arrays in different ways',
          usage: '[] constructor, Array.of(), Array.from()',
          example: '// Array literal\nlet fruits = ["apple", "banana", "orange"];\n\n// Array constructor\nlet numbers = new Array(1, 2, 3, 4, 5);\nlet empty = new Array(5); // [empty × 5]\n\n// Array.of() (ES6)\nlet arr1 = Array.of(1, 2, 3); // [1, 2, 3]\nlet arr2 = Array.of(5); // [5] (not [empty × 5])\n\n// Array.from() (ES6)\nlet arr3 = Array.from("hello"); // ["h", "e", "l", "l", "o"]\nlet arr4 = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]',
        },
        {
          command: 'Array Length',
          description: 'Get and set array length',
          usage: 'array.length',
          example: 'let fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.length); // 3\n\n// Truncate array\nfruits.length = 2;\nconsole.log(fruits); // ["apple", "banana"]\n\n// Extend array\nfruits.length = 5;\nconsole.log(fruits); // ["apple", "banana", <3 empty items>]',
        },
        {
          command: 'Array Access',
          description: 'Access array elements',
          usage: 'array[index]',
          example: 'let fruits = ["apple", "banana", "orange"];\n\n// Access by index\nconsole.log(fruits[0]); // "apple"\nconsole.log(fruits[1]); // "banana"\nconsole.log(fruits[2]); // "orange"\n\n// Out of bounds\nconsole.log(fruits[3]); // undefined\n\n// Negative indices (not supported natively)\n// Use fruits[fruits.length - 1] for last element\nconsole.log(fruits[fruits.length - 1]); // "orange"',
        },
        {
          command: 'Array Modification',
          description: 'Add and remove elements',
          usage: 'push(), pop(), shift(), unshift()',
          example: 'let fruits = ["apple", "banana"];\n\n// Add to end\nfruits.push("orange");\nconsole.log(fruits); // ["apple", "banana", "orange"]\n\n// Remove from end\nlet last = fruits.pop(); // "orange"\nconsole.log(fruits); // ["apple", "banana"]\n\n// Add to beginning\nfruits.unshift("mango");\nconsole.log(fruits); // ["mango", "apple", "banana"]\n\n// Remove from beginning\nlet first = fruits.shift(); // "mango"\nconsole.log(fruits); // ["apple", "banana"]',
        },
        {
          command: 'Array Splice',
          description: 'Add/remove elements at any position',
          usage: 'array.splice(start, deleteCount, items...)',
          example: 'let fruits = ["apple", "banana", "orange", "grape"];\n\n// Remove elements\nlet removed = fruits.splice(1, 2); // remove 2 from index 1\nconsole.log(fruits); // ["apple", "grape"]\nconsole.log(removed); // ["banana", "orange"]\n\n// Insert elements\nfruits.splice(1, 0, "mango", "kiwi");\nconsole.log(fruits); // ["apple", "mango", "kiwi", "grape"]\n\n// Replace elements\nfruits.splice(2, 1, "pineapple");\nconsole.log(fruits); // ["apple", "mango", "pineapple", "grape"]',
        },
        {
          command: 'Array Slice',
          description: 'Extract portion of array',
          usage: 'array.slice(start, end)',
          example: 'let fruits = ["apple", "banana", "orange", "grape", "mango"];\n\n// Slice from index to end\nlet slice1 = fruits.slice(2);\nconsole.log(slice1); // ["orange", "grape", "mango"]\n\n// Slice with end index (exclusive)\nlet slice2 = fruits.slice(1, 4);\nconsole.log(slice2); // ["banana", "orange", "grape"]\n\n// Negative indices\nlet slice3 = fruits.slice(-3, -1);\nconsole.log(slice3); // ["orange", "grape"]\n\n// Copy array\nlet copy = fruits.slice();',
        },
      ],
    },
    {
      title: 'Array Methods - Iteration',
      commands: [
        {
          command: 'Array.map()',
          description: 'Transform array elements',
          usage: 'array.map(callback)',
          example: 'let numbers = [1, 2, 3, 4, 5];\n\n// Double each number\nlet doubled = numbers.map(x => x * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\n// Extract property from objects\nlet users = [\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 }\n];\nlet names = users.map(user => user.name);\nconsole.log(names); // ["John", "Jane"]\n\n// With index\nlet withIndex = numbers.map((num, index) => `${index}: ${num}`);\nconsole.log(withIndex); // ["0: 1", "1: 2", "2: 3", "3: 4", "4: 5"]',
        },
        {
          command: 'Array.filter()',
          description: 'Filter array elements',
          usage: 'array.filter(callback)',
          example: 'let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// Even numbers\nlet evens = numbers.filter(x => x % 2 === 0);\nconsole.log(evens); // [2, 4, 6, 8, 10]\n\n// Adults only\nlet people = [\n  { name: "John", age: 17 },\n  { name: "Jane", age: 21 },\n  { name: "Bob", age: 19 }\n];\nlet adults = people.filter(person => person.age >= 18);\nconsole.log(adults); // [{name: "Jane", age: 21}, {name: "Bob", age: 19}]',
        },
        {
          command: 'Array.reduce()',
          description: 'Reduce array to single value',
          usage: 'array.reduce(callback, initialValue)',
          example: 'let numbers = [1, 2, 3, 4, 5];\n\n// Sum all numbers\nlet sum = numbers.reduce((total, num) => total + num, 0);\nconsole.log(sum); // 15\n\n// Find maximum\nlet max = numbers.reduce((max, num) => Math.max(max, num), -Infinity);\nconsole.log(max); // 5\n\n// Group by property\nlet fruits = ["apple", "banana", "apple", "orange", "banana"];\nlet grouped = fruits.reduce((acc, fruit) => {\n  acc[fruit] = (acc[fruit] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(grouped); // {apple: 2, banana: 2, orange: 1}',
        },
        {
          command: 'Array.forEach()',
          description: 'Execute function for each element',
          usage: 'array.forEach(callback)',
          example: 'let fruits = ["apple", "banana", "orange"];\n\n// Log each fruit\nfruits.forEach(fruit => console.log(fruit));\n\n// With index\nfruits.forEach((fruit, index) => {\n  console.log(`${index}: ${fruit}`);\n});\n\n// Modify array elements\nlet numbers = [1, 2, 3];\nnumbers.forEach((num, index, arr) => {\n  arr[index] = num * 2;\n});\nconsole.log(numbers); // [2, 4, 6]',
        },
        {
          command: 'Array.find()',
          description: 'Find first element matching condition',
          usage: 'array.find(callback)',
          example: 'let users = [\n  { id: 1, name: "John" },\n  { id: 2, name: "Jane" },\n  { id: 3, name: "Bob" }\n];\n\n// Find user by id\nlet user = users.find(u => u.id === 2);\nconsole.log(user); // {id: 2, name: "Jane"}\n\n// Find first adult\nlet people = [\n  { name: "John", age: 17 },\n  { name: "Jane", age: 21 },\n  { name: "Bob", age: 19 }\n];\nlet firstAdult = people.find(person => person.age >= 18);\nconsole.log(firstAdult); // {name: "Jane", age: 21}',
        },
        {
          command: 'Array.findIndex()',
          description: 'Find index of first matching element',
          usage: 'array.findIndex(callback)',
          example: 'let fruits = ["apple", "banana", "orange", "grape"];\n\n// Find index of "orange"\nlet index = fruits.findIndex(fruit => fruit === "orange");\nconsole.log(index); // 2\n\n// Find first even number\nlet numbers = [1, 3, 5, 2, 4, 6];\nlet evenIndex = numbers.findIndex(num => num % 2 === 0);\nconsole.log(evenIndex); // 3\n\n// Not found returns -1\nlet notFound = fruits.findIndex(fruit => fruit === "kiwi");\nconsole.log(notFound); // -1',
        },
        {
          command: 'Array.some()',
          description: 'Check if any element matches condition',
          usage: 'array.some(callback)',
          example: 'let numbers = [1, 2, 3, 4, 5];\n\n// Has even numbers?\nlet hasEven = numbers.some(x => x % 2 === 0);\nconsole.log(hasEven); // true\n\n// Has numbers > 10?\nlet hasLarge = numbers.some(x => x > 10);\nconsole.log(hasLarge); // false\n\n// Check if any user is admin\nlet users = [\n  { name: "John", role: "user" },\n  { name: "Jane", role: "admin" },\n  { name: "Bob", role: "user" }\n];\nlet hasAdmin = users.some(user => user.role === "admin");\nconsole.log(hasAdmin); // true',
        },
        {
          command: 'Array.every()',
          description: 'Check if all elements match condition',
          usage: 'array.every(callback)',
          example: 'let numbers = [2, 4, 6, 8, 10];\n\n// All even?\nlet allEven = numbers.every(x => x % 2 === 0);\nconsole.log(allEven); // true\n\n// All positive?\nlet allPositive = numbers.every(x => x > 0);\nconsole.log(allPositive); // true\n\n// All adults?\nlet people = [\n  { name: "John", age: 20 },\n  { name: "Jane", age: 21 },\n  { name: "Bob", age: 19 }\n];\nlet allAdults = people.every(person => person.age >= 18);\nconsole.log(allAdults); // true',
        },
      ],
    },
    {
      title: 'Array Methods - Testing & Searching',
      commands: [
        {
          command: 'Array.includes()',
          description: 'Check if array contains value',
          usage: 'array.includes(value, fromIndex)',
          example: 'let fruits = ["apple", "banana", "orange", "grape"];\n\n// Check for values\nconsole.log(fruits.includes("banana")); // true\nconsole.log(fruits.includes("kiwi")); // false\n\n// With fromIndex\nconsole.log(fruits.includes("orange", 2)); // true\nconsole.log(fruits.includes("orange", 3)); // false\n\n// With objects (reference equality)\nlet obj1 = { id: 1 };\nlet obj2 = { id: 1 };\nlet arr = [obj1];\nconsole.log(arr.includes(obj1)); // true\nconsole.log(arr.includes(obj2)); // false',
        },
        {
          command: 'Array.indexOf()',
          description: 'Find index of value',
          usage: 'array.indexOf(value, fromIndex)',
          example: 'let fruits = ["apple", "banana", "orange", "banana", "grape"];\n\n// Find first occurrence\nconsole.log(fruits.indexOf("banana")); // 1\nconsole.log(fruits.indexOf("orange")); // 2\nconsole.log(fruits.indexOf("kiwi")); // -1\n\n// With fromIndex\nconsole.log(fruits.indexOf("banana", 2)); // 3\n\n// Find all occurrences\nfunction findAllIndices(arr, value) {\n  let indices = [];\n  let index = arr.indexOf(value);\n  while (index !== -1) {\n    indices.push(index);\n    index = arr.indexOf(value, index + 1);\n  }\n  return indices;\n}',
        },
        {
          command: 'Array.lastIndexOf()',
          description: 'Find last index of value',
          usage: 'array.lastIndexOf(value, fromIndex)',
          example: 'let fruits = ["apple", "banana", "orange", "banana", "grape"];\n\n// Find last occurrence\nconsole.log(fruits.lastIndexOf("banana")); // 3\nconsole.log(fruits.lastIndexOf("orange")); // 2\nconsole.log(fruits.lastIndexOf("kiwi")); // -1\n\n// With fromIndex (search backwards)\nconsole.log(fruits.lastIndexOf("banana", 2)); // 1',
        },
      ],
    },
    {
      title: 'Array Methods - Manipulation',
      commands: [
        {
          command: 'Array.concat()',
          description: 'Combine arrays',
          usage: 'array.concat(arrays...)',
          example: 'let arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet arr3 = [7, 8, 9];\n\n// Combine arrays\nlet combined = arr1.concat(arr2, arr3);\nconsole.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n// With values\nlet withValues = arr1.concat(4, 5, [6, 7]);\nconsole.log(withValues); // [1, 2, 3, 4, 5, 6, 7]\n\n// Spread operator alternative\nlet spreadCombined = [...arr1, ...arr2, ...arr3];',
        },
        {
          command: 'Array.reverse()',
          description: 'Reverse array order',
          usage: 'array.reverse()',
          example: 'let fruits = ["apple", "banana", "orange", "grape"];\n\n// Reverse in place\nfruits.reverse();\nconsole.log(fruits); // ["grape", "orange", "banana", "apple"]\n\n// Create reversed copy\nlet numbers = [1, 2, 3, 4, 5];\nlet reversed = [...numbers].reverse();\nconsole.log(numbers); // [1, 2, 3, 4, 5] (original unchanged)\nconsole.log(reversed); // [5, 4, 3, 2, 1]',
        },
        {
          command: 'Array.sort()',
          description: 'Sort array elements',
          usage: 'array.sort(compareFunction)',
          example: 'let fruits = ["banana", "apple", "orange", "grape"];\n\n// Sort strings (default)\nfruits.sort();\nconsole.log(fruits); // ["apple", "banana", "grape", "orange"]\n\n// Sort numbers (needs compare function)\nlet numbers = [3, 1, 4, 1, 5, 9, 2, 6];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]\n\n// Sort objects\nlet users = [\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 },\n  { name: "Bob", age: 35 }\n];\nusers.sort((a, b) => a.age - b.age);\nconsole.log(users); // Sorted by age',
        },
        {
          command: 'Array.flat()',
          description: 'Flatten nested arrays',
          usage: 'array.flat(depth)',
          example: 'let nested = [1, [2, 3], [4, [5, 6]]];\n\n// Flatten one level\nlet flat1 = nested.flat();\nconsole.log(flat1); // [1, 2, 3, 4, [5, 6]]\n\n// Flatten two levels\nlet flat2 = nested.flat(2);\nconsole.log(flat2); // [1, 2, 3, 4, 5, 6]\n\n// Infinity depth\nlet deeplyNested = [1, [2, [3, [4, [5]]]]];\nlet completelyFlat = deeplyNested.flat(Infinity);\nconsole.log(completelyFlat); // [1, 2, 3, 4, 5]',
        },
        {
          command: 'Array.flatMap()',
          description: 'Map then flatten',
          usage: 'array.flatMap(callback)',
          example: 'let sentences = [\n  "Hello world",\n  "JavaScript is awesome",\n  "Arrays are useful"\n];\n\n// Split sentences into words and flatten\nlet words = sentences.flatMap(sentence => sentence.split(" "));\nconsole.log(words); // ["Hello", "world", "JavaScript", "is", "awesome", "Arrays", "are", "useful"]\n\n// Double and flatten\nlet numbers = [1, 2, 3];\nlet doubled = numbers.flatMap(x => [x, x * 2]);\nconsole.log(doubled); // [1, 2, 2, 4, 3, 6]',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Objects and Prototypes',
      commands: [
        {
          command: 'Object Creation',
          description: 'Creating objects in different ways',
          usage: 'Object literal, constructor, Object.create()',
          example: '// Object literal\nlet person = {\n  name: "John",\n  age: 30,\n  greet: function() {\n    return `Hello, I\'m ${this.name}`;\n  }\n};\n\n// Constructor function\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// Object.create()\nlet personProto = {\n  greet: function() {\n    return `Hello, I\'m ${this.name}`;\n  }\n};\nlet john = Object.create(personProto);\njohn.name = "John";',
        },
        {
          command: 'Object Methods',
          description: 'Built-in object methods',
          usage: 'Object.keys(), Object.values(), Object.entries()',
          example: 'let user = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\n// Get keys\nlet keys = Object.keys(user);\nconsole.log(keys); // ["name", "age", "city"]\n\n// Get values\nlet values = Object.values(user);\nconsole.log(values); // ["John", 30, "New York"]\n\n// Get entries\nlet entries = Object.entries(user);\nconsole.log(entries); // [["name", "John"], ["age", 30], ["city", "New York"]]',
        },
        {
          command: 'Object Property Descriptors',
          description: 'Property configuration and control',
          usage: 'Object.defineProperty(), Object.getOwnPropertyDescriptor()',
          example: 'let obj = {};\n\n// Define property with descriptor\nObject.defineProperty(obj, "name", {\n  value: "John",\n  writable: false, // Cannot be changed\n  enumerable: true, // Shows up in Object.keys()\n  configurable: false // Cannot be deleted or reconfigured\n});\n\n// Get property descriptor\nlet descriptor = Object.getOwnPropertyDescriptor(obj, "name");\nconsole.log(descriptor);\n\n// Define multiple properties\nObject.defineProperties(obj, {\n  age: { value: 30, writable: true },\n  city: { value: "NYC", enumerable: false }\n});',
        },
        {
          command: 'Prototypes and Inheritance',
          description: 'Understanding prototype chain',
          usage: 'Object.getPrototypeOf(), Object.setPrototypeOf()',
          example: 'function Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n  return `${this.name} makes a sound`;\n};\n\nfunction Dog(name, breed) {\n  Animal.call(this, name);\n  this.breed = breed;\n}\n\n// Inherit from Animal\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.constructor = Dog;\n\nDog.prototype.speak = function() {\n  return `${this.name} barks`;\n};\n\nlet dog = new Dog("Rex", "Labrador");\nconsole.log(dog.speak()); // "Rex barks"',
        },
        {
          command: 'Object.assign()',
          description: 'Copy properties from objects',
          usage: 'Object.assign(target, ...sources)',
          example: 'let target = { a: 1, b: 2 };\nlet source1 = { b: 3, c: 4 };\nlet source2 = { d: 5 };\n\n// Shallow copy\nlet result = Object.assign(target, source1, source2);\nconsole.log(result); // {a: 1, b: 3, c: 4, d: 5}\n\n// Clone object\nlet clone = Object.assign({}, original);\n\n// Merge with defaults\nfunction createUser(options) {\n  let defaults = { name: "Guest", age: 18, active: true };\n  return Object.assign({}, defaults, options);\n}',
        },
        {
          command: 'Object.freeze() and Object.seal()',
          description: 'Prevent object modification',
          usage: 'Object.freeze(), Object.seal(), Object.isFrozen()',
          example: 'let obj = { name: "John", age: 30 };\n\n// Freeze - prevents all modifications\nObject.freeze(obj);\nobj.age = 31; // Silently fails (strict mode throws error)\ndelete obj.name; // Silently fails\n\n// Seal - prevents adding/removing properties\nlet sealed = { a: 1, b: 2 };\nObject.seal(sealed);\nsealed.c = 3; // Cannot add new property\ndelete sealed.a; // Cannot delete property\nsealed.b = 5; // Can modify existing property\n\n// Check status\nconsole.log(Object.isFrozen(obj)); // true\nconsole.log(Object.isSealed(sealed)); // true',
        },
      ],
    },
    {
      title: 'Destructuring and Spread',
      commands: [
        {
          command: 'Array Destructuring',
          description: 'Extract values from arrays',
          usage: 'const [a, b] = array',
          example: 'let fruits = ["apple", "banana", "orange", "grape"];\n\n// Basic destructuring\nlet [first, second] = fruits;\nconsole.log(first, second); // "apple" "banana"\n\n// Skip elements\nlet [first, , third] = fruits;\nconsole.log(first, third); // "apple" "orange"\n\n// Rest operator\nlet [first, ...rest] = fruits;\nconsole.log(rest); // ["banana", "orange", "grape"]\n\n// Default values\nlet [a, b, c = "default"] = [1, 2];\nconsole.log(c); // "default"\n\n// Swapping variables\nlet x = 1, y = 2;\n[x, y] = [y, x];\nconsole.log(x, y); // 2 1',
        },
        {
          command: 'Object Destructuring',
          description: 'Extract properties from objects',
          usage: 'const { prop1, prop2 } = object',
          example: 'let user = {\n  name: "John",\n  age: 30,\n  city: "New York",\n  country: "USA"\n};\n\n// Basic destructuring\nlet { name, age } = user;\nconsole.log(name, age); // "John" 30\n\n// Rename variables\nlet { name: userName, age: userAge } = user;\n\n// Default values\nlet { name, role = "user" } = user;\n\n// Nested destructuring\nlet user = {\n  personal: { name: "John", age: 30 },\n  contact: { email: "john@example.com" }\n};\nlet { personal: { name, age }, contact: { email } } = user;',
        },
        {
          command: 'Spread Operator (...)',
          description: 'Expand arrays and objects',
          usage: '...array, ...object',
          example: '// Array spread\nlet arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]\n\n// Copy array\nlet copy = [...arr1];\n\n// Object spread\nlet obj1 = { a: 1, b: 2 };\nlet obj2 = { c: 3, d: 4 };\nlet merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}\n\n// Override properties\nlet updated = { ...obj1, b: 3, c: 4 }; // {a: 1, b: 3, c: 4}\n\n// Function arguments\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10',
        },
        {
          command: 'Rest Parameters',
          description: 'Collect function arguments into array',
          usage: 'function(...params) { ... }',
          example: 'function multiply(multiplier, ...numbers) {\n  return numbers.map(num => num * multiplier);\n}\n\nconsole.log(multiply(2, 1, 2, 3)); // [2, 4, 6]\n\n// Destructuring with rest\nlet [first, second, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(rest); // [3, 4, 5]\n\n// Object rest\nlet { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };\nconsole.log(rest); // {c: 3, d: 4}',
        },
      ],
    },
    {
      title: 'Async JavaScript',
      commands: [
        {
          command: 'Callbacks',
          description: 'Functions as parameters',
          usage: 'function(callback) { callback(data); }',
          example: 'function fetchData(callback) {\n  setTimeout(() => {\n    callback("Data loaded");\n  }, 1000);\n}\n\nfetchData(function(data) {\n  console.log(data); // "Data loaded"\n});\n\n// Callback hell (problem)\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      console.log(c);\n    });\n  });\n});',
        },
        {
          command: 'Promises',
          description: 'Handle async operations',
          usage: 'new Promise((resolve, reject) => { ... })',
          example: 'let promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (Math.random() > 0.5) {\n      resolve("Success!");\n    } else {\n      reject("Error!");\n    }\n  }, 1000);\n});\n\npromise\n  .then(data => console.log(data))\n  .catch(error => console.error(error))\n  .finally(() => console.log("Promise settled"));\n\n// Promise methods\nPromise.resolve("Immediate success");\nPromise.reject("Immediate failure");\nPromise.all([promise1, promise2]);\nPromise.race([promise1, promise2]);',
        },
        {
          command: 'Async/Await',
          description: 'Syntactic sugar for promises',
          usage: 'async function() { await promise; }',
          example: 'async function fetchData() {\n  try {\n    let response = await fetch("/api/data");\n    let data = await response.json();\n    return data;\n  } catch (error) {\n    console.error("Error:", error);\n    throw error;\n  }\n}\n\n// Using async function\nfetchData()\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n\n// Parallel async operations\nasync function fetchMultiple() {\n  let [users, posts, comments] = await Promise.all([\n    fetchUsers(),\n    fetchPosts(),\n    fetchComments()\n  ]);\n  return { users, posts, comments };\n}',
        },
        {
          command: 'Promise Chaining',
          description: 'Chain multiple async operations',
          usage: 'promise.then().then().catch()',
          example: 'function getUser(id) {\n  return fetch(`/users/${id}`)\n    .then(response => response.json())\n    .then(user => {\n      return fetch(`/posts/${user.id}`)\n        .then(response => response.json())\n        .then(posts => ({ user, posts }));\n    });\n}\n\n// Error handling in chain\nfetchData()\n  .then(data => processData(data))\n  .then(processed => saveData(processed))\n  .then(result => console.log("Success:", result))\n  .catch(error => {\n    console.error("Error in chain:", error);\n  });',
        },
        {
          command: 'Promise Utilities',
          description: 'Advanced promise methods',
          usage: 'Promise.all(), Promise.race(), Promise.allSettled()',
          example: 'let promises = [\n  fetch("/api/users"),\n  fetch("/api/posts"),\n  fetch("/api/comments")\n];\n\n// All must succeed\nPromise.all(promises)\n  .then(responses => console.log("All successful"))\n  .catch(error => console.error("One failed"));\n\n// First to complete\nPromise.race(promises)\n  .then(response => console.log("First completed"));\n\n// All settled (success or failure)\nPromise.allSettled(promises)\n  .then(results => {\n    results.forEach(result => {\n      if (result.status === "fulfilled") {\n        console.log("Success:", result.value);\n      } else {\n        console.log("Failed:", result.reason);\n      }\n    });\n  });',
        },
      ],
    },
    {
      title: 'ES6+ Features',
      commands: [
        {
          command: 'Template Literals',
          description: 'Advanced string formatting',
          usage: '`string ${expression} string`',
          example: 'let name = "John";\nlet age = 30;\n\n// Basic interpolation\nlet message = `Hello, ${name}! You are ${age} years old.`;\n\n// Multi-line strings\nlet html = `\n  <div>\n    <h1>${name}</h1>\n    <p>Age: ${age}</p>\n  </div>\n`;\n\n// Expressions\nlet price = 19.99;\nlet formatted = `Price: $${price.toFixed(2)}`;\n\n// Tagged templates\nfunction highlight(strings, ...values) {\n  return strings.reduce((result, str, i) => {\n    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : "");\n  }, "");\n}\n\nlet highlighted = highlight`Name: ${name}, Age: ${age}`;',
        },
        {
          command: 'Default Parameters',
          description: 'Default values for function parameters',
          usage: 'function(param = defaultValue) { ... }',
          example: 'function greet(name = "Guest", age = 18) {\n  return `Hello ${name}, you are ${age} years old`;\n}\n\ngreet(); // "Hello Guest, you are 18 years old"\ngreet("John"); // "Hello John, you are 18 years old"\ngreet("Jane", 25); // "Hello Jane, you are 25 years old"\n\n// With destructuring\nfunction createUser({ name = "Guest", age = 18, role = "user" } = {}) {\n  return { name, age, role };\n}\n\ncreateUser(); // {name: "Guest", age: 18, role: "user"}\ncreateUser({ name: "John" }); // {name: "John", age: 18, role: "user"}',
        },
        {
          command: 'Rest and Spread',
          description: 'Modern array/object operations',
          usage: '...rest, ...spread',
          example: '// Rest parameters\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\n\n// Spread arrays\nlet arr1 = [1, 2, 3];\nlet arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\n// Spread objects\nlet obj1 = { a: 1, b: 2 };\nlet obj2 = { ...obj1, c: 3 }; // {a: 1, b: 2, c: 3}\n\n// Array destructuring with rest\nlet [first, ...rest] = [1, 2, 3, 4, 5];\n\n// Object destructuring with rest\nlet { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };',
        },
        {
          command: 'Enhanced Object Literals',
          description: 'Concise object property syntax',
          usage: 'Shorthand properties, methods, computed properties',
          example: 'let name = "John";\nlet age = 30;\n\n// Shorthand properties\nlet person = {\n  name, // same as name: name\n  age,  // same as age: age\n  greet() { // Shorthand method\n    return `Hello, I\'m ${this.name}`;\n  },\n  ["prop_" + Date.now()]: "computed" // Computed property\n};\n\n// Dynamic property names\nlet prop = "dynamic";\nlet obj = {\n  [prop]: "value",\n  [`${prop}_key`]: "another value"\n};',
        },
        {
          command: 'Destructuring Assignment',
          description: 'Extract values from arrays/objects',
          usage: 'const [a, b] = array; const {x, y} = object',
          example: '// Array destructuring\nlet [a, b, c] = [1, 2, 3];\nlet [first, , third] = [1, 2, 3]; // Skip second\nlet [x, y, ...rest] = [1, 2, 3, 4, 5];\n\n// Object destructuring\nlet { name, age } = { name: "John", age: 30 };\nlet { name: userName, age: userAge } = person; // Rename\n\n// Nested destructuring\nlet user = {\n  personal: { name: "John", age: 30 },\n  contact: { email: "john@example.com" }\n};\nlet { personal: { name, age }, contact: { email } } = user;\n\n// Default values\nlet { name = "Guest", role = "user" } = {};',
        },
        {
          command: 'Symbol Type',
          description: 'Unique and immutable identifiers',
          usage: 'Symbol(description), Symbol.for(key)',
          example: '// Create symbols\nlet id1 = Symbol("id");\nlet id2 = Symbol("id");\nconsole.log(id1 === id2); // false\n\n// Symbol as object property\nlet obj = {\n  [Symbol("secret")]: "hidden value",\n  name: "public value"\n};\n\n// Global symbols\nlet globalSym = Symbol.for("app.id");\nlet sameGlobalSym = Symbol.for("app.id");\nconsole.log(globalSym === sameGlobalSym); // true\n\n// Well-known symbols\nlet iterable = {\n  [Symbol.iterator]() {\n    let step = 0;\n    return {\n      next() {\n        return { value: step++, done: step > 3 };\n      }\n    };\n  }\n};',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Advanced Patterns',
      commands: [
        {
          command: 'Module Pattern',
          description: 'Create private and public members',
          usage: 'IIFE with returned public API',
          example: 'let counterModule = (function() {\n  let count = 0; // Private variable\n\n  function increment() {\n    count++;\n    return count;\n  }\n\n  function decrement() {\n    count--;\n    return count;\n  }\n\n  function getCount() {\n    return count;\n  }\n\n  // Public API\n  return {\n    increment,\n    decrement,\n    getCount\n  };\n})();\n\n// Usage\nconsole.log(counterModule.increment()); // 1\nconsole.log(counterModule.getCount()); // 1\n// counterModule.count is undefined (private)',
        },
        {
          command: 'Observer Pattern',
          description: 'Subscribe to and notify changes',
          usage: 'Event-driven architecture',
          example: 'class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n\n  on(event, callback) {\n    if (!this.events[event]) {\n      this.events[event] = [];\n    }\n    this.events[event].push(callback);\n  }\n\n  emit(event, data) {\n    if (this.events[event]) {\n      this.events[event].forEach(callback => callback(data));\n    }\n  }\n\n  off(event, callback) {\n    if (this.events[event]) {\n      this.events[event] = this.events[event].filter(cb => cb !== callback);\n    }\n  }\n}\n\n// Usage\nlet emitter = new EventEmitter();\nemitter.on("data", data => console.log("Received:", data));\nemitter.emit("data", { message: "Hello" });',
        },
        {
          command: 'Factory Pattern',
          description: 'Create objects without specifying exact class',
          usage: 'Functions that return objects',
          example: 'function createUser(type) {\n  switch(type) {\n    case "admin":\n      return {\n        type: "admin",\n        permissions: ["read", "write", "delete"],\n        canAccess: function(resource) {\n          return this.permissions.includes(resource);\n        }\n      };\n    case "user":\n      return {\n        type: "user",\n        permissions: ["read"],\n        canAccess: function(resource) {\n          return resource === "read";\n        }\n      };\n    default:\n      throw new Error("Unknown user type");\n  }\n}\n\nlet admin = createUser("admin");\nlet user = createUser("user");',
        },
        {
          command: 'Singleton Pattern',
          description: 'Ensure only one instance exists',
          usage: 'Single instance with global access',
          example: 'class Database {\n  constructor() {\n    if (Database.instance) {\n      return Database.instance;\n    }\n    this.connection = "connected";\n    Database.instance = this;\n  }\n\n  query(sql) {\n    console.log(`Executing: ${sql}`);\n  }\n\n  static getInstance() {\n    if (!Database.instance) {\n      Database.instance = new Database();\n    }\n    return Database.instance;\n  }\n}\n\n// Usage\nlet db1 = Database.getInstance();\nlet db2 = Database.getInstance();\nconsole.log(db1 === db2); // true',
        },
        {
          command: 'Decorator Pattern',
          description: 'Add functionality to objects dynamically',
          usage: 'Wrapper functions that enhance behavior',
          example: 'function withLogging(fn) {\n  return function(...args) {\n    console.log(`Calling ${fn.name} with:`, args);\n    let result = fn.apply(this, args);\n    console.log(`${fn.name} returned:`, result);\n    return result;\n  };\n}\n\nfunction add(a, b) {\n  return a + b;\n}\n\nlet loggedAdd = withLogging(add);\nloggedAdd(2, 3); // Logs input and output\n\n// Class decorator (ES2016+)\nfunction measurable(target, propertyKey, descriptor) {\n  let originalMethod = descriptor.value;\n  descriptor.value = function(...args) {\n    let start = performance.now();\n    let result = originalMethod.apply(this, args);\n    let end = performance.now();\n    console.log(`${propertyKey} took ${end - start} milliseconds`);\n    return result;\n  };\n  return descriptor;\n}',
        },
        {
          command: 'Strategy Pattern',
          description: 'Select algorithm at runtime',
          usage: 'Interchangeable algorithms',
          example: 'class PaymentStrategy {\n  pay(amount) {\n    throw new Error("Must implement pay method");\n  }\n}\n\nclass CreditCardPayment extends PaymentStrategy {\n  pay(amount) {\n    console.log(`Paid $${amount} with credit card`);\n  }\n}\n\nclass PayPalPayment extends PaymentStrategy {\n  pay(amount) {\n    console.log(`Paid $${amount} with PayPal`);\n  }\n}\n\nclass PaymentProcessor {\n  setStrategy(strategy) {\n    this.strategy = strategy;\n  }\n\n  processPayment(amount) {\n    this.strategy.pay(amount);\n  }\n}\n\n// Usage\nlet processor = new PaymentProcessor();\nprocessor.setStrategy(new CreditCardPayment());\nprocessor.processPayment(100);',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Debouncing',
          description: 'Delay function execution',
          usage: 'Limit function calls on frequent events',
          example: 'function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\n// Search input optimization\nconst searchInput = document.getElementById("search");\nconst debouncedSearch = debounce(function(query) {\n  performSearch(query);\n}, 300);\n\nsearchInput.addEventListener("input", (e) => {\n  debouncedSearch(e.target.value);\n});',
        },
        {
          command: 'Throttling',
          description: 'Limit function execution rate',
          usage: 'Execute function at most once per time period',
          example: 'function throttle(func, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n\n// Scroll event optimization\nconst throttledScroll = throttle(function() {\n  updateScrollPosition();\n}, 100);\n\nwindow.addEventListener("scroll", throttledScroll);',
        },
        {
          command: 'Memoization',
          description: 'Cache function results',
          usage: 'Store expensive computation results',
          example: 'function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\n// Expensive function\nconst fibonacci = memoize(function(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n});\n\nconsole.log(fibonacci(40)); // Fast due to caching',
        },
        {
          command: 'Lazy Loading',
          description: 'Load resources on demand',
          usage: 'Dynamic imports and code splitting',
          example: '// Dynamic import\nasync function loadModule() {\n  try {\n    const module = await import("./heavy-module.js");\n    module.doSomething();\n  } catch (error) {\n    console.error("Failed to load module:", error);\n  }\n}\n\n// Lazy load images\nconst lazyImages = document.querySelectorAll("img[data-src]");\n\nconst imageObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      imageObserver.unobserve(img);\n    }\n  });\n});\n\nlazyImages.forEach(img => imageObserver.observe(img));',
        },
        {
          command: 'Request Animation Frame',
          description: 'Optimize animations',
          usage: 'Smooth animations with browser sync',
          example: 'function animate(element, targetValue, duration) {\n  const startValue = parseFloat(element.style.transform.replace("translateX(", "").replace("px)", "")) || 0;\n  const startTime = performance.now();\n  \n  function update(currentTime) {\n    const elapsed = currentTime - startTime;\n    const progress = Math.min(elapsed / duration, 1);\n    \n    const currentValue = startValue + (targetValue - startValue) * progress;\n    element.style.transform = `translateX(${currentValue}px)`;\n    \n    if (progress < 1) {\n      requestAnimationFrame(update);\n    }\n  }\n  \n  requestAnimationFrame(update);\n}\n\n// Usage\nanimate(element, 200, 1000);',
        },
      ],
    },
    {
      title: 'Modern JavaScript (ES2020+)',
      commands: [
        {
          command: 'Optional Chaining (?.)',
          description: 'Safe property access',
          usage: 'obj?.prop?.prop',
          example: 'const user = {\n  profile: {\n    name: "John",\n    address: {\n      street: "123 Main St"\n    }\n  }\n};\n\n// Safe nested access\nconst street = user?.profile?.address?.street;\nconsole.log(street); // "123 Main St"\n\nconst country = user?.profile?.address?.country;\nconsole.log(country); // undefined (not error)\n\n// With function calls\nconst result = obj?.method?.();\n\n// With array access\nconst item = array?.[index];',
        },
        {
          command: 'Nullish Coalescing (??)',
          description: 'Fallback for null/undefined',
          usage: 'value ?? fallback',
          example: 'const name = null ?? "Default"; // "Default"\nconst age = undefined ?? 18; // 18\nconst count = 0 ?? 10; // 0 (not 10)\nconst empty = "" ?? "fallback"; // "" (not "fallback")\nconst value = false ?? true; // false (not true)\n\n// Combining with optional chaining\nconst userName = user?.profile?.name ?? "Guest";\nconst settings = config?.theme ?? "light";',
        },
        {
          command: 'BigInt',
          description: 'Handle large integers',
          usage: 'BigInt(value), 123n',
          example: '// Creating BigInts\nconst big1 = BigInt(123456789012345678901234567890);\nconst big2 = 123456789012345678901234567890n;\n\n// Operations\nconst sum = big1 + big2;\nconst product = big1 * big2;\n\n// Cannot mix with regular numbers\n// const invalid = big1 + 123; // Error\n\n// Convert to string\nconst str = big1.toString();\n\n// Compare\nconsole.log(1n === 1); // false\nconsole.log(1n == 1); // true',
        },
        {
          command: 'Promise.allSettled()',
          description: 'Wait for all promises to settle',
          usage: 'Promise.allSettled(promises)',
          example: 'const promises = [\n  fetch("/api/users"),\n  fetch("/api/posts"),\n  fetch("/api/comments")\n];\n\nPromise.allSettled(promises).then(results => {\n  results.forEach((result, index) => {\n    if (result.status === "fulfilled") {\n      console.log(`Promise ${index} succeeded:`, result.value);\n    } else {\n      console.log(`Promise ${index} failed:`, result.reason);\n    }\n  });\n});',
        },
        {
          command: 'String.prototype.matchAll()',
          description: 'Get all regex matches',
          usage: 'string.matchAll(regex)',
          example: 'const text = "The quick brown fox jumps over the lazy dog";\nconst regex = /\\b\\w{4}\\b/g;\n\nconst matches = [...text.matchAll(regex)];\nconsole.log(matches);\n// [ ["quick"], ["over"], ["lazy"] ]\n\nmatches.forEach(match => {\n  console.log(`Found: ${match[0]} at index ${match.index}`);\n});',
        },
        {
          command: 'globalThis',
          description: 'Global object reference',
          usage: 'globalThis',
          example: '// Works in all environments\nconsole.log(globalThis === window); // true in browser\nconsole.log(globalThis === global); // true in Node.js\nconsole.log(globalThis === self); // true in workers\n\n// Use instead of window/global/self\nconst myGlobalVar = globalThis.myApp = {};\nglobalThis.setTimeout(() => console.log("Hello"), 1000);',
        },
        {
          command: 'Object.fromEntries()',
          description: 'Create object from entries',
          usage: 'Object.fromEntries(iterable)',
          example: 'const entries = [\n  ["name", "John"],\n  ["age", 30],\n  ["city", "New York"]\n];\n\nconst obj = Object.fromEntries(entries);\nconsole.log(obj); // {name: "John", age: 30, city: "New York"}\n\n// Convert Map to Object\nconst map = new Map([\n  ["a", 1],\n  ["b", 2]\n]);\nconst fromMap = Object.fromEntries(map);\n\n// Filter object properties\nconst filtered = Object.fromEntries(\n  Object.entries(obj).filter(([key]) => key !== "age")\n);',
        },
      ],
    },
    {
      title: 'Testing and Debugging',
      commands: [
        {
          command: 'Console Methods',
          description: 'Advanced debugging techniques',
          usage: 'console.log(), console.table(), console.group()',
          example: '// Basic logging\nconsole.log("Message");\nconsole.error("Error");\nconsole.warn("Warning");\nconsole.info("Info");\n\n// Table formatting\nconst users = [\n  { id: 1, name: "John", age: 30 },\n  { id: 2, name: "Jane", age: 25 }\n];\nconsole.table(users);\n\n// Grouping\nconsole.group("User Details");\nconsole.log("Name:", user.name);\nconsole.log("Age:", user.age);\nconsole.groupEnd();\n\n// Timing\nconsole.time("operation");\n// ... do something\nconsole.timeEnd("operation");\n\n// Counting\nconsole.count("button clicks");\nconsole.count("button clicks");\nconsole.countReset("button clicks");',
        },
        {
          command: 'Debugger Statement',
          description: 'Pause execution for debugging',
          usage: 'debugger;',
          example: 'function calculateTotal(items) {\n  let total = 0;\n  debugger; // Execution pauses here\n  \n  for (let item of items) {\n    total += item.price * item.quantity;\n    debugger; // Check each iteration\n  }\n  \n  return total;\n}\n\n// Conditional debugging\nfunction process(data) {\n  if (data.length > 1000) {\n    debugger; // Only pause for large datasets\n  }\n  // ... process data\n}',
        },
        {
          command: 'Error Handling Patterns',
          description: 'Comprehensive error management',
          usage: 'try/catch/finally, custom errors',
          example: 'class CustomError extends Error {\n  constructor(message, code) {\n    super(message);\n    this.name = "CustomError";\n    this.code = code;\n  }\n}\n\nfunction riskyOperation() {\n  try {\n    // Risky code\n    if (Math.random() > 0.5) {\n      throw new CustomError("Operation failed", "ERR_001");\n    }\n    return "Success";\n  } catch (error) {\n    if (error instanceof CustomError) {\n      console.error(`Custom error: ${error.message} (${error.code})`);\n    } else {\n      console.error("Unknown error:", error);\n    }\n    throw error; // Re-throw if needed\n  } finally {\n    console.log("Cleanup completed");\n  }\n}',
        },
        {
          command: 'Unit Testing with Jest',
          description: 'Write and run tests',
          usage: 'describe(), it(), expect()',
          example: '// math.js\nexport function add(a, b) {\n  return a + b;\n}\n\nexport function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Division by zero");\n  }\n  return a / b;\n}\n\n// math.test.js\nimport { add, divide } from "./math";\n\ndescribe("Math functions", () => {\n  test("add() should sum two numbers", () => {\n    expect(add(2, 3)).toBe(5);\n    expect(add(-1, 1)).toBe(0);\n  });\n\n  test("divide() should divide numbers", () => {\n    expect(divide(10, 2)).toBe(5);\n  });\n\n  test("divide() should throw error for zero", () => {\n    expect(() => divide(10, 0)).toThrow("Division by zero");\n  });\n});',
        },
        {
          command: 'Performance Monitoring',
          description: 'Measure and optimize performance',
          usage: 'performance API, profiling',
          example: '// Measure execution time\nfunction measurePerformance(fn, label) {\n  return function(...args) {\n    const start = performance.now();\n    const result = fn.apply(this, args);\n    const end = performance.now();\n    console.log(`${label}: ${end - start}ms`);\n    return result;\n  };\n}\n\n// Memory usage\nfunction checkMemory() {\n  if (performance.memory) {\n    console.log("Memory usage:", {\n      used: Math.round(performance.memory.usedJSHeapSize / 1048576) + " MB",\n      total: Math.round(performance.memory.totalJSHeapSize / 1048576) + " MB",\n      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + " MB"\n    });\n  }\n}\n\n// Performance marks\nperformance.mark("start-operation");\n// ... do work\nperformance.mark("end-operation");\nperformance.measure("operation", "start-operation", "end-operation");',
        },
      ],
    },
  ],
};
