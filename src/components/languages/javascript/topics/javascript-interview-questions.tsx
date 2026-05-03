'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Brain, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Clock, 
  Star,
  Lightbulb,
  Award,
  TrendingUp,
  ArrowLeft,
  ChevronDown,
  Code,
  Palette,
  FileText,
  Play,
  Rocket
} from 'lucide-react';
import React from 'react';
import { marked } from 'marked';
import Link from 'next/link';
import InterviewHeader from '@/components/shared/interview-header';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

const easyQuestions = [
  {
    question: "What is JavaScript and what are its main features?",
    idealAnswer: "**JavaScript** is a **high-level, interpreted programming language** primarily used for creating interactive web pages. It's one of the three core technologies of the World Wide Web, alongside HTML and CSS.\n\n**Main Features:**\n- **Dynamic typing**: Variables can hold any type\n- **Interpreted**: Code is executed line by line\n- **Prototype-based**: Objects inherit from other objects\n- **First-class functions**: Functions can be treated as variables\n- **Event-driven**: Responds to user actions\n- **Cross-platform**: Runs on browsers, servers (Node.js), mobile\n\n**Common Uses:**\n- Web interactivity (forms, animations)\n- Server-side development (Node.js)\n- Mobile apps (React Native)\n- Desktop apps (Electron)",
  },
  {
    question: "What is the difference between `let`, `const`, and `var`?",
    idealAnswer: "**`var`** (old way):\n- Function-scoped or global-scoped\n- Can be redeclared and updated\n- Hoisted to top of scope\n```javascript\nvar name = 'John';\nvar name = 'Jane'; // No error\n```\n\n**`let`** (ES6):\n- Block-scoped ({ })\n- Can be updated but not redeclared\n- Not hoisted (TDZ - Temporal Dead Zone)\n```javascript\nlet name = 'John';\nlet name = 'Jane'; // Error!\nname = 'Jane'; // OK\n```\n\n**`const`** (ES6):\n- Block-scoped\n- Cannot be updated or redeclared\n- Must be initialized at declaration\n```javascript\nconst name = 'John';\nname = 'Jane'; // Error!\nconst person; // Error!\n```\n\n**Best Practice**: Use `const` by default, `let` when you need to reassign, avoid `var`.",
  },
  {
    question: "What are JavaScript data types?",
    idealAnswer: "JavaScript has **7 primitive types** and **1 object type**:\n\n**Primitive Types:**\n```javascript\n// 1. String\ntext = 'Hello';\n\n// 2. Number\nage = 25;\nprice = 99.99;\n\n// 3. Boolean\nisActive = true;\n\n// 4. Undefined\nlet variable; // undefined\n\n// 5. Null\nempty = null;\n\n// 6. Symbol\nid = Symbol('unique');\n\n// 7. BigInt\nbigNumber = 9007199254740991n;\n```\n\n**Object Type:**\n```javascript\n// Objects, Arrays, Functions, Dates, etc.\nperson = { name: 'John', age: 25 };\nnumbers = [1, 2, 3];\nfunction greet() { }\n```\n\n**Type Checking:**\n```javascript\ntypeof 'hello'; // 'string'\ntypeof 42; // 'number'\ntypeof {}; // 'object'\ntypeof null; // 'object' (bug in JS)\ntypeof []; // 'object'\n```",
  },
  {
    question: "What is the difference between `==` and `===` in JavaScript?",
    idealAnswer: "**`==` (Loose Equality)**:\n- Compares values after type coercion\n- Can lead to unexpected results\n```javascript\n5 == '5'; // true (coerces string to number)\n0 == false; // true (coerces boolean to number)\nnull == undefined; // true\n[] == false; // true\n```\n\n**`===` (Strict Equality)**:\n- Compares values without type coercion\n- Both value and type must match\n```javascript\n5 === '5'; // false (different types)\n0 === false; // false (different types)\nnull === undefined; // false\n[] === false; // false\n```\n\n**Examples:**\n```javascript\n// Loose equality issues\n'0' == false; // true\n' ' == 0; // true\n\n// Strict equality - predictable\n'0' === false; // false\n' ' === 0; // false\n```\n\n**Best Practice**: Always use `===` unless you specifically want type coercion.",
  },
  {
    question: "What are JavaScript functions and how do you declare them?",
    idealAnswer: "**Functions** are reusable blocks of code that perform specific tasks.\n\n**Function Declarations:**\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```\n\n**Function Expressions:**\n```javascript\nconst greet = function(name) {\n  return `Hello, ${name}!`;\n};\n```\n\n**Arrow Functions (ES6):**\n```javascript\nconst greet = (name) => `Hello, ${name}!`;\n\n// Single parameter - no parentheses needed\nconst greet = name => `Hello, ${name}!`;\n\n// Multiple parameters\nconst add = (a, b) => a + b;\n\n// Multiple lines - need curly braces\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};\n```\n\n**Key Differences:**\n- Arrow functions don't have their own `this`\n- Arrow functions cannot be used as constructors\n- Function declarations are hoisted, expressions are not",
  },
  {
    question: "What are JavaScript arrays and common array methods?",
    idealAnswer: "**Arrays** are ordered collections of values that can hold multiple data types.\n\n**Creating Arrays:**\n```javascript\nlet fruits = ['apple', 'banana', 'orange'];\nlet mixed = [1, 'hello', true, null];\nlet empty = [];\n```\n\n**Common Methods:**\n\n**Adding/Removing:**\n```javascript\nfruits.push('grape'); // Add to end\nfruits.pop(); // Remove from end\nfruits.unshift('kiwi'); // Add to beginning\nfruits.shift(); // Remove from beginning\n```\n\n**Finding:**\n```javascript\nfruits.indexOf('banana'); // 1\nfruits.includes('apple'); // true\nfruits.find(fruit => fruit.length > 5); // 'banana'\nfruits.filter(fruit => fruit.startsWith('a')); // ['apple']\n```\n\n**Transforming:**\n```javascript\nfruits.map(fruit => fruit.toUpperCase()); // ['APPLE', 'BANANA']\nfruits.forEach(fruit => console.log(fruit));\nfruits.reduce((acc, fruit) => acc + fruit.length, 0); // total length\n```\n\n**Use Cases**: Lists of data, collections, queues, stacks.",
  },
  {
    question: "What are JavaScript objects and how do you work with them?",
    idealAnswer: "**Objects** are collections of key-value pairs that store related data and functions.\n\n**Creating Objects:**\n```javascript\n// Object literal\nconst person = {\n  name: 'John',\n  age: 30,\n  greet: function() {\n    return `Hello, I'm ${this.name}`;\n  }\n};\n\n// Constructor function\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// ES6 Class\nclass Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n```\n\n**Working with Objects:**\n```javascript\n// Accessing properties\nperson.name; // 'John'\nperson['name']; // 'John'\n\n// Adding properties\nperson.city = 'New York';\nperson['country'] = 'USA';\n\n// Deleting properties\ndelete person.age;\n\n// Checking properties\n'name' in person; // true\nperson.hasOwnProperty('name'); // true\n```\n\n**Object Methods:**\n```javascript\nObject.keys(person); // ['name', 'age']\nObject.values(person); // ['John', 30]\nObject.entries(person); // [['name', 'John'], ['age', 30]]\n```",
  },
  {
    question: "What is the difference between `null` and `undefined`?",
    idealAnswer: "**`undefined`**:\n- Default value of uninitialized variables\n- Default return value of functions without return\n- Default value of function parameters not provided\n```javascript\nlet variable; // undefined\nfunction greet() {} // returns undefined\nfunction test(param) {} // param is undefined if not passed\n```\n\n**`null`**:\n- Intentional absence of any object value\n- Must be assigned explicitly\n- Represents \"no value\" or \"empty\"\n```javascript\nlet variable = null; // intentionally empty\nfunction findUser(id) {\n  if (userNotFound) return null;\n}\n```\n\n**Key Differences:**\n```javascript\ntypeof undefined; // 'undefined'\ntypeof null; // 'object' (JavaScript bug)\n\nundefined == null; // true\nundefined === null; // false\n\nNumber(undefined); // NaN\nNumber(null); // 0\n```\n\n**Best Practices:**\n- Use `undefined` for \"not yet assigned\"\n- Use `null` for \"intentionally empty\"\n- Always use `===` for comparison",
  },
  {
    question: "What are template literals and how do they work?",
    idealAnswer: "**Template literals** are string literals allowing embedded expressions and multi-line strings.\n\n```javascript\nconst name = \"John\";\nconst age = 30;\n\n// Basic interpolation\nconst message = `Hello, ${name}! You are ${age} years old.`;\n\n// Multi-line strings\nconst html = `\n  <div>\n    <h1>${name}</h1>\n    <p>Age: ${age}</p>\n  </div>\n`;\n\n// Expressions and function calls\nconst price = 19.99;\nconst formatted = `Price: $${price.toFixed(2)}`;\n\n// Tagged templates\nfunction highlight(strings, ...values) {\n  return strings.reduce((result, str, i) => {\n    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : '');\n  }, '');\n}\n\nconst highlighted = highlight`Name: ${name}, Age: ${age}`;\n```"
  },
  {
    question: "What are the differences between `map`, `filter`, and `reduce`?",
    idealAnswer: "**Array Methods Comparison:**\n\n**`map()`**: Transforms each element and returns new array\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]\n```\n\n**`filter()`**: Returns elements that meet condition\n```javascript\nconst evens = numbers.filter(x => x % 2 === 0); // [2, 4]\n```\n\n**`reduce()`**: Reduces array to single value\n```javascript\nconst sum = numbers.reduce((acc, x) => acc + x, 0); // 10\n```\n\n**Chaining Example:**\n```javascript\nconst result = numbers\n  .filter(x => x % 2 === 0)  // [2, 4]\n  .map(x => x * 2)           // [4, 8]\n  .reduce((acc, x) => acc + x, 0); // 12\n```\n\n**Key Differences:**\n- `map`: Always returns same length array\n- `filter`: Returns array of matching elements\n- `reduce`: Returns single value (can be object, array, etc.)"
  },
  {
    question: "What is the purpose of `use strict` in JavaScript?",
    idealAnswer: "**`'use strict'`** enables strict mode for better error checking and security.\n\n```javascript\n\"use strict\";\n\n// Prevents undeclared variables\nx = 1; // ReferenceError: x is not defined\n\n// Prevents deleting undeletable properties\ndelete Object.prototype; // TypeError\n\n// Prevents duplicate parameter names\nfunction(a, a) {} // SyntaxError\n\n// Prevents octal literals\nconst octal = 010; // SyntaxError\n\n// 'this' is undefined in global functions\nfunction test() {\n  console.log(this); // undefined (not window)\n}\n\n// Prevents assignment to read-only properties\nconst obj = {};\nObject.defineProperty(obj, 'x', { value: 42, writable: false });\nobj.x = 99; // TypeError\n```\n\n**Benefits:**\n- Catches common coding errors\n- Makes code more secure\n- Enables optimizations\n- Future-proofs code"
  },
  {
    question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
    idealAnswer: "**Temporal Dead Zone (TDZ)** is the period between entering a scope where a variable is declared and the actual declaration line.\n\n**TDZ with let and const:**\n```javascript\nconsole.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization\nlet myVar = 'hello';\n\nconsole.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization\nconst myConst = 42;\n```\n\n**TDZ Timeline:**\n```javascript\n{ // 1. Scope enters - myVar is in TDZ\n  \n  // 2. TDZ starts - myVar cannot be accessed\n  // console.log(myVar); // ReferenceError\n  \n  // 3. Declaration - TDZ ends\n  let myVar = 'value';\n  \n  // 4. After TDZ - myVar can be accessed\n  console.log(myVar); // 'value'\n}\n```\n\n**TDZ vs var Hoisting:**\n```javascript\nconsole.log(hoistedVar); // undefined (not error)\nvar hoistedVar = 'var value';\n\nconsole.log(letVar); // ReferenceError (TDZ)\nlet letVar = 'let value';\n```\n\n**TDZ in Functions:**\n```javascript\nfunction test() {\n  // console.log(funcVar); // ReferenceError\n  let funcVar = 'function scope';\n}\n```\n\n**Why TDZ Exists:**\n- Prevents accessing variables before declaration\n- Makes code more predictable\n- Helps catch programming errors early"
  },
  {
    question: "What is the scope chain in JavaScript?",
    idealAnswer: "**Scope Chain** is the mechanism JavaScript uses to resolve variable names when accessing them.\n\n**How Scope Chain Works:**\n```javascript\nvar globalVar = 'global';\n\nfunction outer() {\n  var outerVar = 'outer';\n  \n  function inner() {\n    var innerVar = 'inner';\n    console.log(innerVar); // Found in inner scope\n    console.log(outerVar); // Found in outer scope\n    console.log(globalVar); // Found in global scope\n  }\n  \n  inner();\n}\n\nouter();\n```\n\n**Scope Chain Lookup:**\n```javascript\nvar name = 'Global';\n\nfunction createCounter() {\n  var name = 'Outer';\n  \n  return function() {\n    var name = 'Inner';\n    console.log(name); // 'Inner' (found first)\n  };\n}\n\nconst counter = createCounter();\ncounter();\n```\n\n**Lexical Environment:**\n```javascript\nfunction outer() {\n  var x = 10;\n  \n  function middle() {\n    var y = 20;\n    \n    function inner() {\n      var z = 30;\n      // Scope chain: inner -> middle -> outer -> global\n      console.log(x, y, z); // 10, 20, 30\n    }\n    \n    inner();\n  }\n  \n  middle();\n}\n```\n\n**Performance Considerations:**\n- Inner scopes have access to outer scopes\n- Variable lookup goes up the chain\n- Closures maintain scope chain references"
  },
  {
    question: "What is lexical scope in JavaScript?",
    idealAnswer: "**Lexical Scope** (static scope) means that the scope of a variable is determined by its position in the source code at write time, not at runtime.\n\n**Lexical vs Dynamic Scope:**\n```javascript\n// Lexical scope (JavaScript)\nvar name = 'Global';\n\nfunction greet() {\n  console.log(name); // Uses lexical scope\n}\n\nfunction createGreeter() {\n  var name = 'Local';\n  return greet; // Returns the greet function\n}\n\nconst greeter = createGreeter();\ngreeter(); // 'Global' (lexical scope, not where it was called)\n```\n\n**Closures and Lexical Scope:**\n```javascript\nfunction makeCounter() {\n  let count = 0; // Lexically scoped\n  \n  return function() {\n    count++; // Access to lexical environment\n    return count;\n  };\n}\n\nconst counter1 = makeCounter();\nconst counter2 = makeCounter();\n\nconsole.log(counter1()); // 1\nconsole.log(counter1()); // 2\nconsole.log(counter2()); // 1 (separate lexical environment)\n```\n\n**Block Scope Lexical Behavior:**\n```javascript\nlet x = 'global';\n\n{ // New block, new lexical scope\n  let x = 'block';\n  console.log(x); // 'block'\n}\n\nconsole.log(x); // 'global'\n```\n\n**Arrow Functions and Lexical `this`:**\n```javascript\nconst obj = {\n  name: 'Object',\n  \n  regular: function() {\n    console.log(this.name); // Dynamic 'this'\n  },\n  \n  arrow: () => {\n    console.log(this.name); // Lexical 'this' (from outer scope)\n  }\n};\n```"
  },
  {
    question: "What is the difference between Object.freeze() and Object.seal()?",
    idealAnswer: "**Object.freeze()** and **Object.seal()** are both used to prevent object modification, but with different levels of restriction.\n\n**Object.seal():**\n```javascript\nconst obj = {\n  name: 'John',\n  age: 30\n};\n\nObject.seal(obj);\n\n// Can modify existing properties\nobj.age = 31;\nconsole.log(obj.age); // 31\n\n// Cannot add new properties\nobj.city = 'NYC'; // Silently fails (non-strict mode)\nconsole.log(obj.city); // undefined\n\n// Cannot delete properties\ndelete obj.age; // Silently fails\nconsole.log(obj.age); // 31\n\nconsole.log(Object.isSealed(obj)); // true\nconsole.log(Object.isFrozen(obj)); // false\n```\n\n**Object.freeze():**\n```javascript\nconst obj = {\n  name: 'John',\n  age: 30\n};\n\nObject.freeze(obj);\n\n// Cannot modify existing properties\nobj.age = 31; // Silently fails\nconsole.log(obj.age); // 30\n\n// Cannot add new properties\nobj.city = 'NYC'; // Silently fails\nconsole.log(obj.city); // undefined\n\n// Cannot delete properties\ndelete obj.age; // Silently fails\nconsole.log(obj.age); // 30\n\nconsole.log(Object.isFrozen(obj)); // true\nconsole.log(Object.isSealed(obj)); // true\n```\n\n**Deep Freeze:**\n```javascript\nfunction deepFreeze(obj) {\n  Object.getOwnPropertyNames(obj).forEach(prop => {\n    if (obj[prop] !== null && typeof obj[prop] === 'object') {\n      deepFreeze(obj[prop]);\n    }\n  });\n  return Object.freeze(obj);\n}\n\nconst nested = {\n  user: {\n    name: 'John'\n  }\n};\n\ndeepFreeze(nested);\n// nested.user.name = 'Jane'; // Fails\n```\n\n**Use Cases:**\n- **seal()**: Prevent adding/removing properties but allow updates\n- **freeze()**: Completely immutable objects\n- **Configuration objects**: Prevent accidental modifications"
  },
  {
    question: "What is typeof vs instanceof in JavaScript?",
    idealAnswer: "**typeof** and **instanceof** are both operators for type checking, but they work differently.\n\n**typeof Operator:**\n```javascript\ntypeof 42; // 'number'\ntypeof 'hello'; // 'string'\ntypeof true; // 'boolean'\ntypeof undefined; // 'undefined'\ntypeof null; // 'object' (historical bug)\ntypeof {}; // 'object'\ntypeof []; // 'object'\ntypeof function() {}; // 'function'\ntypeof Symbol(); // 'symbol'\ntypeof 123n; // 'bigint'\n```\n\n**typeof Limitations:**\n```javascript\n// Cannot distinguish different object types\ntypeof [] === 'object'; // true\ntypeof {} === 'object'; // true\ntypeof new Date() === 'object'; // true\n\n// Null bug\ntypeof null === 'object'; // true (should be 'null')\n```\n\n**instanceof Operator:**\n```javascript\n// Checking constructor prototype\n[] instanceof Array; // true\n[] instanceof Object; // true\n{} instanceof Object; // true\nnew Date() instanceof Date; // true\nnew Date() instanceof Object; // true\n\nfunction Person() {}\nconst john = new Person();\njohn instanceof Person; // true\njohn instanceof Object; // true\n```\n\n**instanceof with Different Frames:**\n```javascript\n// iframe or different context issues\nconst iframeArray = window.iframe.contentWindow.Array;\nconst arr = new iframeArray();\n\narr instanceof Array; // false (different constructors)\narr instanceof iframeArray; // true\n\n// Better alternative\nArray.isArray(arr); // true\n```\n\n**Custom Type Checking:**\n```javascript\n// Reliable type checking function\nfunction getType(value) {\n  if (value === null) return 'null';\n  if (Array.isArray(value)) return 'array';\n  return typeof value;\n}\n\n// Using Object.prototype.toString\nfunction getExactType(value) {\n  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();\n}\n\ngetExactType([]); // 'array'\ngetExactType(new Date()); // 'date'\ngetExactType(/regex/); // 'regexp'\n```\n\n**Best Practices:**\n- Use **typeof** for primitive types\n- Use **instanceof** for object types (same context)\n- Use **Array.isArray()** for arrays\n- Use **Object.prototype.toString** for precise type detection"
  },
  {
    question: "What is pass by value vs pass by reference in JavaScript?",
    idealAnswer: "JavaScript uses **pass by value** for all variables, but objects are passed by **reference value**.\n\n**Primitive Types (Pass by Value):**\n```javascript\nlet a = 10;\nlet b = a; // Copy of value\n\nb = 20;\nconsole.log(a); // 10 (unchanged)\nconsole.log(b); // 20\n\nfunction modify(num) {\n  num = 100; // Changes local copy only\n}\n\nlet x = 5;\nmodify(x);\nconsole.log(x); // 5 (unchanged)\n```\n\n**Objects (Pass by Reference Value):**\n```javascript\nlet obj1 = { name: 'John' };\nlet obj2 = obj1; // Copy of reference\n\nobj2.name = 'Jane'; // Modifies same object\nconsole.log(obj1.name); // 'Jane' (changed)\n\nfunction modifyObject(person) {\n  person.name = 'Bob'; // Modifies original object\n}\n\nlet user = { name: 'Alice' };\nmodifyObject(user);\nconsole.log(user.name); // 'Bob' (changed)\n```\n\n**Reassigning Object Parameters:**\n```javascript\nfunction reassignObject(person) {\n  person = { name: 'New Person' }; // Reassigns local reference\n  return person;\n}\n\nlet original = { name: 'Original' };\nlet returned = reassignObject(original);\n\nconsole.log(original.name); // 'Original' (unchanged)\nconsole.log(returned.name); // 'New Person'\n```\n\n**Arrays and Functions:**\n```javascript\n// Arrays (objects)\nlet arr1 = [1, 2, 3];\nlet arr2 = arr1;\narr2.push(4);\nconsole.log(arr1); // [1, 2, 3, 4]\n\n// Functions (objects)\nfunction greet() { console.log('Hello'); }\nlet func1 = greet;\nlet func2 = func1;\nfunc2(); // 'Hello'\n```\n\n**Practical Examples:**\n```javascript\n// Cloning objects\nfunction cloneObject(obj) {\n  return { ...obj }; // Shallow copy\n}\n\n// Deep cloning\nfunction deepClone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}\n\n// Immutable updates\nfunction updateName(person, newName) {\n  return { ...person, name: newName }; // New object\n}\n```\n\n**Key Points:**\n- Primitives: actual values are copied\n- Objects: references are copied, but point to same object\n- Reassigning object parameters doesn't affect original"
  },
  {
    question: "What is the difference between `slice()` and `splice()` methods?",
    idealAnswer: "**`slice()`** - Returns a copy of a portion of an array (non-destructive):\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst sliced = arr.slice(1, 3); // [2, 3]\nconsole.log(arr); // [1, 2, 3, 4, 5] (original unchanged)\n\n// Negative indices\nconst sliced2 = arr.slice(-3, -1); // [3, 4]\n```\n\n**`splice()`** - Modifies the original array by removing/replacing elements (destructive):\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst spliced = arr.splice(1, 2, 'a', 'b'); // [2, 3]\nconsole.log(arr); // [1, 'a', 'b', 4, 5] (original modified)\n\n// Just removing\nconst arr2 = [1, 2, 3, 4];\narr2.splice(2, 1); // removes 1 element at index 2\nconsole.log(arr2); // [1, 2, 4]\n```\n\n**Key Differences:**\n- `slice()`: Non-destructive, returns new array\n- `splice()`: Destructive, modifies original array\n- `slice()`: Takes start and end indices\n- `splice()`: Takes start index, delete count, and items to add"
  },
  {
    question: "What are arrow functions and how do they differ from regular functions?",
    idealAnswer: "**Arrow Functions** (ES6) provide a concise syntax for function expressions.\n\n**Basic Syntax:**\n```javascript\n// Regular function\nconst add = function(a, b) {\n  return a + b;\n};\n\n// Arrow function\nconst add = (a, b) => a + b;\n\n// Single parameter - no parentheses needed\nconst double = x => x * 2;\n\n// Multiple parameters - parentheses required\nconst sum = (a, b, c) => a + b + c;\n\n// Multiple lines - need curly braces and return\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};\n```\n\n**Key Differences:**\n\n**1. `this` binding:**\n```javascript\n// Regular function - dynamic `this`\nconst obj = {\n  name: 'John',\n  regular: function() {\n    console.log(this.name); // 'John'\n  },\n  \n  // Arrow function - lexical `this`\n  arrow: () => {\n    console.log(this.name); // undefined (inherits from outer scope)\n  }\n};\n```\n\n**2. No `arguments` object:**\n```javascript\nfunction regular() {\n  console.log(arguments); // Arguments object available\n}\n\nconst arrow = () => {\n  console.log(arguments); // ReferenceError\n};\n\n// Use rest parameters instead\nconst arrowWithRest = (...args) => console.log(args);\n```\n\n**3. Cannot be used as constructors:**\n```javascript\nconst Regular = function() {};\nnew Regular(); // Works\n\nconst Arrow = () => {};\nnew Arrow(); // TypeError\n```\n\n**4. No `prototype` property:**\n```javascript\nfunction regular() {}\nregular.prototype; // Object\n\nconst arrow = () => {};\narrow.prototype; // undefined\n```"
  },
  {
    question: "What is the difference between `push()` and `unshift()` methods?",
    idealAnswer: "**`push()`** - Adds elements to the end of an array:\n```javascript\nconst fruits = ['apple', 'banana'];\nfruits.push('orange'); // ['apple', 'banana', 'orange']\n\n// Add multiple elements\nfruits.push('grape', 'kiwi'); // ['apple', 'banana', 'orange', 'grape', 'kiwi']\n\n// Returns new length\nconst length = fruits.push('mango'); // 6\n```\n\n**`unshift()`** - Adds elements to the beginning of an array:\n```javascript\nconst fruits = ['apple', 'banana'];\nfruits.unshift('orange'); // ['orange', 'apple', 'banana']\n\n// Add multiple elements\nfruits.unshift('grape', 'kiwi'); // ['grape', 'kiwi', 'orange', 'apple', 'banana']\n\n// Returns new length\nconst length = fruits.unshift('mango'); // 6\n```\n\n**Performance Considerations:**\n- `push()`: O(1) - Fast, just adds to end\n- `unshift()`: O(n) - Slower, must shift all existing elements\n\n**Use Cases:**\n```javascript\n// push() - Queue behavior (FIFO)\nconst queue = [];\nqueue.push('first');\nqueue.push('second');\nqueue.push('third');\n\n// unshift() - Stack behavior (LIFO)\nconst stack = [];\nstack.unshift('first');\nstack.unshift('second');\nstack.unshift('third');\n```"
  },
  {
    question: "What are JavaScript comments and how do you write them?",
    idealAnswer: "**Comments** are notes in code that are ignored by the JavaScript engine. They help explain code logic.\n\n**Single-line comments:**\n```javascript\n// This is a single-line comment\nconst name = 'John'; // This explains the variable\n\n// Comment can be on its own line\nfunction greet() {\n  return 'Hello!'; // Returns greeting\n}\n```\n\n**Multi-line comments:**\n```javascript\n/*\nThis is a multi-line comment.\nIt can span multiple lines\nand is useful for longer explanations.\n*/\n\nfunction calculateTotal(price, tax) {\n  /*\n  Calculate total including tax.\n  Parameters:\n  - price: base price\n  - tax: tax rate as decimal\n  */\n  return price * (1 + tax);\n}\n```\n\n**Comment Best Practices:**\n```javascript\n// GOOD: Explain why, not what\nconst discount = 0.1; // 10% discount for first-time customers\n\n// BAD: Obvious comments\nlet x = 5; // Set x to 5\n\n// GOOD: Document complex logic\nfunction validateEmail(email) {\n  // Regex pattern checks for:\n  // - characters before @\n  // - domain after @\n  // - . and domain extension\n  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return pattern.test(email);\n}\n```\n\n**TODO Comments:**\n```javascript\n// TODO: Implement error handling\n// FIXME: This logic needs optimization\n// NOTE: This is a temporary solution\n```"
  },
  {
    question: "What is the difference between `indexOf()` and `includes()` methods?",
    idealAnswer: "**`indexOf()`** - Returns the index of the first occurrence or -1 if not found:\n```javascript\nconst fruits = ['apple', 'banana', 'orange', 'banana'];\n\nfruits.indexOf('banana'); // 1 (first occurrence)\nfruits.indexOf('grape'); // -1 (not found)\nfruits.indexOf('banana', 2); // 3 (start searching from index 2)\n\n// Works with strings\nconst text = 'Hello World';\ntext.indexOf('World'); // 6\ntext.indexOf('world'); // -1 (case-sensitive)\n```\n\n**`includes()`** - Returns true if found, false if not found:\n```javascript\nconst fruits = ['apple', 'banana', 'orange', 'banana'];\n\nfruits.includes('banana'); // true\nfruits.includes('grape'); // false\nfruits.includes('banana', 2); // true (start from index 2)\n\n// Works with strings\nconst text = 'Hello World';\ntext.includes('World'); // true\ntext.includes('world'); // false (case-sensitive)\n```\n\n**Key Differences:**\n```javascript\nconst arr = [1, 2, 3];\n\n// indexOf returns position\narr.indexOf(2); // 1\narr.indexOf(4); // -1\n\n// includes returns boolean\narr.includes(2); // true\narr.includes(4); // false\n\n// Type coercion\nconst mixed = [1, '2'];\nmixed.indexOf(2); // -1 (strict equality)\nmixed.includes(2); // false (strict equality)\n```\n\n**Use Cases:**\n```javascript\n// indexOf - when you need the position\nconst index = users.indexOf('John');\nif (index > -1) {\n  users.splice(index, 1); // Remove at specific position\n}\n\n// includes - when you just need to check existence\nif (allowedUsers.includes('John')) {\n  grantAccess();\n}\n```"
  },
  {
    question: "What are JavaScript operators and their types?",
    idealAnswer: "**Operators** are symbols that perform operations on operands (values and variables).\n\n**Arithmetic Operators:**\n```javascript\nlet a = 10, b = 3;\na + b; // 13 (addition)\na - b; // 7 (subtraction)\na * b; // 30 (multiplication)\na / b; // 3.333... (division)\na % b; // 1 (remainder/modulus)\na ** b; // 1000 (exponentiation)\n++a; // 11 (increment)\n--a; // 9 (decrement)\n```\n\n**Assignment Operators:**\n```javascript\nlet x = 5;\nx += 3; // x = x + 3 → 8\nx -= 2; // x = x - 2 → 6\nx *= 4; // x = x * 4 → 24\nx /= 2; // x = x / 2 → 12\nx %= 5; // x = x % 5 → 2\n```\n\n**Comparison Operators:**\n```javascript\n5 == '5';  // true (loose equality)\n5 === '5'; // false (strict equality)\n5 != '5';  // false (loose inequality)\n5 !== '5'; // true (strict inequality)\n5 > 3;     // true\n5 >= 5;    // true\n5 < 3;     // false\n5 <= 5;    // true\n```\n\n**Logical Operators:**\n```javascript\ntrue && false; // false (AND)\ntrue || false; // true (OR)\n!true;         // false (NOT)\n\n// Short-circuit evaluation\nnull && doSomething(); // null (second part not evaluated)\ntrue || doSomething();  // true (second part not evaluated)\n```\n\n**Unary Operators:**\n```javascript\ntypeof 'hello'; // 'string'\ndelete obj.prop; // true\n+ '123';        // 123 (string to number)\n- '123';        // -123\n```\n\n**Ternary Operator:**\n```javascript\nconst age = 18;\nconst status = age >= 18 ? 'adult' : 'minor'; // 'adult'\n```"
  }
];

const mediumQuestions = [
  {
    question: "What is hoisting in JavaScript?",
    idealAnswer: "**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope before code execution.\n\n**Function Hoisting:**\n```javascript\n// Function declarations are fully hoisted\ngreet('John'); // Works!\n\nfunction greet(name) {\n  console.log(`Hello, ${name}`);\n}\n\n// Function expressions are not hoisted\nsayHi('John'); // Error!\n\nconst sayHi = function(name) {\n  console.log(`Hi, ${name}`);\n};\n```\n\n**Variable Hoisting:**\n```javascript\nconsole.log(name); // undefined (not error)\nvar name = 'John';\n\n// Same as:\nvar name; // hoisted\nconsole.log(name); // undefined\nname = 'John';\n\n// let and const have TDZ\nconsole.log(age); // ReferenceError!\nlet age = 25;\n```\n\n**Temporal Dead Zone (TDZ):**\n- Variables exist but cannot be accessed\n- Applies to `let` and `const`\n- From start of scope until declaration\n\n**Best Practice**: Declare variables at the top to avoid confusion.",
  },
  {
    question: "What are closures in JavaScript and how do they work?",
    idealAnswer: "**Closures** are functions that have access to variables in their outer (enclosing) scope even after the outer function has returned.\n\n**Basic Example:**\n```javascript\nfunction outerFunction(x) {\n  // Outer function variable\n  return function innerFunction(y) {\n    // Inner function has access to x\n    return x + y;\n  };\n}\n\nconst addFive = outerFunction(5);\nconsole.log(addFive(3)); // 8 (x is still accessible!)\n```\n\n**Practical Use - Private Variables:**\n```javascript\nfunction createCounter() {\n  let count = 0; // Private variable\n  \n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.getCount(); // 1\n// count is not accessible directly!\n```\n\n**Common Patterns:**\n```javascript\n// Function factory\nfunction multiplier(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = multiplier(2);\nconst triple = multiplier(3);\n```\n\n**Memory Considerations**: Closures keep references to outer variables, which can prevent garbage collection.",
  },
  {
    question: "What is the `this` keyword in JavaScript and how does it work?",
    idealAnswer: "**`this`** refers to the object that is executing the current function. Its value depends on how the function is called.\n\n**Global Context:**\n```javascript\nconsole.log(this); // Window object (browser)\n```\n\n**Function Context:**\n```javascript\nfunction showThis() {\n  console.log(this);\n}\n\nshowThis(); // Window (strict mode: undefined)\n```\n\n**Method Context:**\n```javascript\nconst person = {\n  name: 'John',\n  greet() {\n    console.log(this.name); // 'John' (this = person)\n  }\n};\n```\n\n**Constructor Context:**\n```javascript\nfunction Person(name) {\n  this.name = name; // this = new instance\n}\n\nconst john = new Person('John');\n```\n\n**Arrow Functions:**\n```javascript\nconst person = {\n  name: 'John',\n  greet: () => {\n    console.log(this.name); // undefined (this = outer scope)\n  },\n  greetNormal() {\n    const arrow = () => console.log(this.name); // 'John'\n    arrow();\n  }\n};\n```\n\n**Explicit Binding:**\n```javascript\nfunction greet() {\n  console.log(this.name);\n}\n\nconst person = { name: 'John' };\n\ngreet.call(person); // 'John'\ngreet.apply(person); // 'John'\nconst bound = greet.bind(person);\nbound(); // 'John'\n```",
  },
  {
    question: "What are promises and async/await in JavaScript?",
    idealAnswer: "**Promises** represent the eventual completion (or failure) of an asynchronous operation.\n\n**Creating Promises:**\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  // Async operation\n  setTimeout(() => {\n    if (success) {\n      resolve('Data received');\n    } else {\n      reject('Error occurred');\n    }\n  }, 1000);\n});\n```\n\n**Using Promises:**\n```javascript\npromise\n  .then(data => console.log(data))\n  .catch(error => console.error(error))\n  .finally(() => console.log('Cleanup'));\n```\n\n**Async/Await (ES2017):**\n```javascript\nasync function fetchData() {\n  try {\n    const data = await promise; // Wait for promise\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  } finally {\n    console.log('Cleanup');\n  }\n}\n```\n\n**Promise Methods:**\n```javascript\n// Multiple promises\nPromise.all([promise1, promise2]); // All must succeed\nPromise.race([promise1, promise2]); // First to finish\nPromise.allSettled([promise1, promise2]); // All complete regardless\n```\n\n**Error Handling:**\n```javascript\n// Chaining with error handling\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n```\n\n**Benefits**: Cleaner than callbacks, better error handling, composable.",
  },
  {
    question: "What are JavaScript prototypes and prototypal inheritance?",
    idealAnswer: "**Prototypes** are the mechanism by which JavaScript objects inherit features from one another.\n\n**Prototype Chain:**\n```javascript\nfunction Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function() {\n  return `Hello, I'm ${this.name}`;\n};\n\nconst john = new Person('John');\njohn.greet(); // Method from prototype\n```\n\n**How It Works:**\n```javascript\n// Object has internal [[Prototype]]\njohn.__proto__ === Person.prototype; // true\nPerson.prototype.__proto__ === Object.prototype; // true\nObject.prototype.__proto__ === null; // End of chain\n```\n\n**Property Lookup:**\n1. Check object's own properties\n2. Check prototype\n3. Check prototype's prototype\n4. Continue until null\n\n**ES6 Classes (Syntax Sugar):**\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n}\n\nclass Employee extends Person {\n  constructor(name, title) {\n    super(name);\n    this.title = title;\n  }\n}\n```\n\n**Prototypal vs Classical:**\n- Objects inherit directly from objects\n- No classes (syntactic sugar in ES6)\n- Dynamic and flexible\n- Memory efficient (shared methods)",
  },
  {
    question: "What is event delegation in JavaScript?",
    idealAnswer: "**Event delegation** is a technique where you attach a single event listener to a parent element to handle events for multiple child elements.\n\n**Traditional Approach (Multiple Listeners):**\n```javascript\n// Bad: Multiple event listeners\ndocument.querySelectorAll('.item').forEach(item => {\n  item.addEventListener('click', handleClick);\n});\n```\n\n**Event Delegation (Single Listener):**\n```javascript\n// Good: Single event listener\ndocument.getElementById('container').addEventListener('click', (event) => {\n  if (event.target.classList.contains('item')) {\n    handleClick(event.target);\n  }\n});\n```\n\n**How It Works:**\n```javascript\nfunction handleListClick(event) {\n  const clickedItem = event.target.closest('.list-item');\n  \n  if (clickedItem) {\n    console.log('Clicked:', clickedItem.textContent);\n    \n    // Check for specific actions\n    if (event.target.classList.contains('delete-btn')) {\n      deleteItem(clickedItem);\n    }\n  }\n}\n\ndocument.querySelector('.list').addEventListener('click', handleListClick);\n```\n\n**Benefits:**\n- **Performance**: Fewer event listeners\n- **Dynamic**: Works for dynamically added elements\n- **Memory**: Lower memory usage\n- **Simplicity**: Cleaner code\n\n**Event Bubbling:**\n- Events bubble up through DOM tree\n- Parent can capture child events\n- `event.target` = actual clicked element\n- `event.currentTarget` = element with listener\n\n**Use Cases**: Lists, tables, navigation menus, dynamic content.",
  },
  {
    question: "What are JavaScript modules and how do they work?",
    idealAnswer: "**Modules** allow you to break up code into separate, reusable files with their own scope.\n\n**ES6 Modules (Import/Export):**\n\n**Exporting:**\n```javascript\n// math.js - Named exports\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\nexport const PI = 3.14159;\n\n// Default export\nexport default function multiply(a, b) {\n  return a * b;\n}\n```\n\n**Importing:**\n```javascript\n// main.js\nimport multiply, { add, subtract, PI } from './math.js';\nimport * as math from './math.js';\n\n// Usage\nconsole.log(add(2, 3));\nconsole.log(multiply(4, 5));\n```\n\n**CommonJS (Node.js):**\n```javascript\n// math.js\nconst add = (a, b) => a + b;\nmodule.exports = { add, PI: 3.14159 };\n\n// main.js\nconst { add, PI } = require('./math');\n```\n\n**Module Benefits:**\n- **Encapsulation**: Private scope\n- **Reusability**: Share code across files\n- **Maintainability**: Organized code structure\n- **Tree Shaking**: Remove unused code\n- **Circular Dependencies**: Handled automatically\n\n**Dynamic Imports:**\n```javascript\n// Load modules on demand\nconst module = await import('./math.js');\nconst result = module.add(2, 3);\n```\n\n**Module Types**: ES6, CommonJS, AMD, UMD.",
  },
  {
    question: "What is destructuring in JavaScript?",
    idealAnswer: "**Destructuring** is a syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables.\n\n**Array Destructuring:**\n```javascript\nconst colors = ['red', 'green', 'blue'];\n\n// Basic destructuring\nconst [first, second, third] = colors;\nconsole.log(first); // 'red'\n\n// Skipping values\nconst [first, , third] = colors;\nconsole.log(third); // 'blue'\n\n// Default values\nconst [first, second, third, fourth = 'yellow'] = colors;\nconsole.log(fourth); // 'yellow'\n\n// Rest operator\nconst [first, ...rest] = colors;\nconsole.log(rest); // ['green', 'blue']\n```\n\n**Object Destructuring:**\n```javascript\nconst person = {\n  name: 'John',\n  age: 30,\n  city: 'New York'\n};\n\n// Basic destructuring\nconst { name, age } = person;\nconsole.log(name); // 'John'\n\n// Renaming\nconst { name: fullName, age: years } = person;\nconsole.log(fullName); // 'John'\n\n// Default values\nconst { name, country = 'USA' } = person;\nconsole.log(country); // 'USA'\n\n// Rest operator\nconst { name, ...rest } = person;\nconsole.log(rest); // { age: 30, city: 'New York' }\n```\n\n**Function Parameters:**\n```javascript\n// Array destructuring in parameters\nfunction printCoords([x, y]) {\n  console.log(`X: ${x}, Y: ${y}`);\n}\nprintCoords([10, 20]);\n\n// Object destructuring in parameters\nfunction greetPerson({ name, age }) {\n  console.log(`${name} is ${age} years old`);\n}\ngreetPerson({ name: 'John', age: 30 });\n```\n\n**Nested Destructuring:**\n```javascript\nconst user = {\n  name: 'John',\n  address: {\n    street: '123 Main St',\n    city: 'New York'\n  }\n};\n\nconst { address: { city } } = user;\nconsole.log(city); // 'New York'\n```\n\n**Benefits**: Cleaner code, less verbose, easier data extraction.",
  },
  {
    question: "What are JavaScript Promises and how do they work?",
    idealAnswer: "**Promises** represent the eventual completion (or failure) of an asynchronous operation.\n\n**Basic Promise:**\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  // Async operation\n  setTimeout(() => {\n    if (Math.random() > 0.5) {\n      resolve('Success!');\n    } else {\n      reject('Error!');\n    }\n  }, 1000);\n});\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error));\n```\n\n**Promise States:**\n- **Pending**: Initial state, not yet fulfilled or rejected\n- **Fulfilled**: Operation completed successfully\n- **Rejected**: Operation failed\n- **Settled**: Either fulfilled or rejected\n\n**Promise Methods:**\n```javascript\n// Promise.all - All must succeed\nPromise.all([promise1, promise2, promise3])\n  .then(results => console.log(results));\n\n// Promise.race - First one to settle\nPromise.race([promise1, promise2])\n  .then(result => console.log(result));\n\n// Promise.allSettled - Wait for all, regardless of success\nPromise.allSettled([promise1, promise2])\n  .then(results => console.log(results));\n\n// Promise.resolve/reject\nPromise.resolve('value');\nPromise.reject('error');\n```\n\n**Chaining:**\n```javascript\nfetchUser()\n  .then(user => fetchPosts(user.id))\n  .then(posts => processData(posts))\n  .catch(error => handleError(error));\n```"
  },
  {
    question: "Explain async/await and how it differs from Promises",
    idealAnswer: "**Async/Await** is syntactic sugar over Promises that makes asynchronous code look synchronous.\n\n**Basic Async/Await:**\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```\n\n**Equivalent Promise Code:**\n```javascript\nfunction fetchData() {\n  return fetch('/api/data')\n    .then(response => response.json())\n    .then(data => data)\n    .catch(error => {\n      console.error('Error:', error);\n    });\n}\n```\n\n**Key Differences:**\n```javascript\n// Async/Await - Sequential\nasync function sequential() {\n  const user = await fetchUser();\n  const posts = await fetchPosts();\n  const comments = await fetchComments();\n  return { user, posts, comments };\n}\n\n// Async/Await - Parallel\nasync function parallel() {\n  const [user, posts, comments] = await Promise.all([\n    fetchUser(),\n    fetchPosts(),\n    fetchComments()\n  ]);\n  return { user, posts, comments };\n}\n```\n\n**Benefits:**\n- More readable and maintainable\n- Easier error handling with try/catch\n- Better debugging experience\n- Cleaner syntax for complex async flows"
  },
  {
    question: "What is callback hell and how does it relate to promises?",
    idealAnswer: "**Callback Hell** (also called \"pyramid of doom\") occurs when multiple nested callbacks make code hard to read and maintain.\n\n**Callback Hell Example:**\n```javascript\n// Traditional callback approach\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      getMoreData(c, function(d) {\n        getMoreData(d, function(e) {\n          console.log('Final result:', e);\n        });\n      });\n    });\n  });\n});\n```\n\n**Problems with Callback Hell:**\n- Hard to read and understand\n- Difficult error handling\n- Complex control flow\n- Nested indentation grows exponentially\n\n**Solution with Promises:**\n```javascript\n// Promise chaining - much cleaner\ngetData()\n  .then(a => getMoreData(a))\n  .then(b => getMoreData(b))\n  .then(c => getMoreData(c))\n  .then(d => getMoreData(d))\n  .then(e => console.log('Final result:', e))\n  .catch(error => console.error('Error:', error));\n```\n\n**Solution with Async/Await:**\n```javascript\n// Even cleaner with async/await\nasync function fetchData() {\n  try {\n    const a = await getData();\n    const b = await getMoreData(a);\n    const c = await getMoreData(b);\n    const d = await getMoreData(c);\n    const e = await getMoreData(d);\n    console.log('Final result:', e);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```\n\n**Parallel Execution:**\n```javascript\n// Callback hell for parallel operations is even worse\ngetData1(function(data1) {\n  getData2(function(data2) {\n    // Both done, but sequential execution\n  });\n});\n\n// Promise.all for parallel execution\nPromise.all([getData1(), getData2()])\n  .then(([data1, data2]) => {\n    // Both done in parallel\n  });\n```"
  },
  {
    question: "What is the difference between microtask and macrotask queues?",
    idealAnswer: "**Microtask Queue** and **Macrotask Queue** are two different task queues in the Event Loop with different priorities.\n\n**Execution Order:**\n```javascript\nconsole.log('Start');\n\n// Macrotask\nsetTimeout(() => console.log('Macrotask (setTimeout)'), 0);\n\n// Microtask\nPromise.resolve().then(() => console.log('Microtask (Promise)'));\n\nconsole.log('End');\n\n// Output: Start, End, Microtask (Promise), Macrotask (setTimeout)\n```\n\n**Microtask Queue (Higher Priority):**\n- Promise callbacks (.then, .catch, .finally)\n- queueMicrotask()\n- MutationObserver callbacks\n- Process.nextTick() (Node.js)\n\n**Macrotask Queue (Lower Priority):**\n- setTimeout()\n- setInterval()\n- setImmediate() (Node.js)\n- I/O operations\n- UI rendering\n- DOM events\n\n**Event Loop Process:**\n```javascript\n// 1. Execute all synchronous code\nconsole.log('Sync 1');\n\n// 2. Execute all microtasks\nPromise.resolve().then(() => {\n  console.log('Microtask 1');\n  // Can add more microtasks\n  Promise.resolve().then(() => console.log('Microtask 2'));\n});\n\n// 3. Execute one macrotask\nsetTimeout(() => {\n  console.log('Macrotask 1');\n  // Can add more microtasks\n  Promise.resolve().then(() => console.log('Microtask 3'));\n}, 0);\n\n// 4. Repeat: microtasks → macrotask → microtasks → macrotask...\n```\n\n**Practical Example:**\n```javascript\nconsole.log('Start');\n\nsetTimeout(() => console.log('Timeout 1'), 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise 1');\n  Promise.resolve().then(() => console.log('Promise 2'));\n});\n\nsetTimeout(() => console.log('Timeout 2'), 0);\n\nPromise.resolve().then(() => console.log('Promise 3'));\n\nconsole.log('End');\n\n// Output:\n// Start, End,\n// Promise 1, Promise 2, Promise 3,  // All microtasks first\n// Timeout 1, Timeout 2  // Then macrotasks\n```\n\n**Why This Matters:**\n- Microtasks can starve macrotasks\n- Promise chains execute before setTimeout\n- Important for understanding async execution order"
  },
  {
    question: "What is setTimeout behavior with 0ms delay?",
    idealAnswer: "**setTimeout with 0ms** doesn't execute immediately but is placed in the macrotask queue.\n\n**Basic Behavior:**\n```javascript\nconsole.log('Start');\n\nsetTimeout(() => console.log('setTimeout 0ms'), 0);\n\nconsole.log('End');\n\n// Output: Start, End, setTimeout 0ms\n```\n\n**Minimum Delay:**\n```javascript\n// Browsers have minimum delay (usually 4ms)\nsetTimeout(() => console.log('After minimum delay'), 0);\n// Actually executes after ~4ms minimum\n```\n\n**vs Microtasks:**\n```javascript\nconsole.log('Start');\n\nsetTimeout(() => console.log('setTimeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\n\nconsole.log('End');\n\n// Output: Start, End, Promise, setTimeout\n// Promise executes first (microtask priority)\n```\n\n**Nested setTimeout:**\n```javascript\nfunction scheduleWork() {\n  setTimeout(() => {\n    console.log('Work done');\n    scheduleWork(); // Schedule next work\n  }, 0);\n}\n\n// Can create continuous work without blocking\n```\n\n**Use Cases:**\n```javascript\n// 1. Yield to browser\nfunction processLargeArray(array) {\n  let i = 0;\n  \n  function processChunk() {\n    const chunk = array.slice(i, i + 1000);\n    // Process chunk\n    i += 1000;\n    \n    if (i < array.length) {\n      setTimeout(processChunk, 0); // Yield to browser\n    }\n  }\n  \n  processChunk();\n}\n\n// 2. Ensure code runs after current stack\nfunction afterStack(fn) {\n  setTimeout(fn, 0);\n}\n\n// 3. Break up long-running operations\nfunction longOperation() {\n  // Do some work\n  setTimeout(() => {\n    // Continue work after yielding\n  }, 0);\n}\n```\n\n**Browser Differences:**\n```javascript\n// Different browsers may have different minimum delays\n// Chrome: ~4ms after 5+ nested timeouts\n// Firefox: ~4ms minimum\n// Safari: ~10ms minimum\n```"
  },
  {
    question: "What is the difference between Promise.all vs Promise.allSettled?",
    idealAnswer: "**Promise.all** and **Promise.allSettled** handle multiple promises differently.\n\n**Promise.all:**\n```javascript\n// All promises must resolve\nconst promise1 = Promise.resolve(1);\nconst promise2 = Promise.resolve(2);\nconst promise3 = Promise.resolve(3);\n\nPromise.all([promise1, promise2, promise3])\n  .then(results => console.log(results)) // [1, 2, 3]\n  .catch(error => console.error(error));\n\n// Fails fast - one rejection rejects all\nconst promise4 = Promise.resolve(1);\nconst promise5 = Promise.reject('Error');\nconst promise6 = Promise.resolve(3);\n\nPromise.all([promise4, promise5, promise6])\n  .then(results => console.log(results)) // Never called\n  .catch(error => console.error(error)); // 'Error'\n```\n\n**Promise.allSettled:**\n```javascript\n// Waits for all promises to settle (resolve or reject)\nconst promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject('Error');\nconst promise3 = Promise.resolve(3);\n\nPromise.allSettled([promise1, promise2, promise3])\n  .then(results => {\n    console.log(results);\n    // [\n    //   { status: 'fulfilled', value: 1 },\n    //   { status: 'rejected', reason: 'Error' },\n    //   { status: 'fulfilled', value: 3 }\n    // ]\n  });\n```\n\n**Practical Examples:**\n```javascript\n// Promise.all - when all must succeed\nasync function fetchUserData(userId) {\n  try {\n    const [user, posts, comments] = await Promise.all([\n      fetchUser(userId),\n      fetchUserPosts(userId),\n      fetchUserComments(userId)\n    ]);\n    \n    return { user, posts, comments };\n  } catch (error) {\n    console.error('Failed to fetch user data:', error);\n    throw error;\n  }\n}\n\n// Promise.allSettled - when you want all results regardless of failures\nasync function fetchAllData(userIds) {\n  const results = await Promise.allSettled(\n    userIds.map(id => fetchUser(id))\n  );\n  \n  const successful = results\n    .filter(result => result.status === 'fulfilled')\n    .map(result => result.value);\n    \n  const failed = results\n    .filter(result => result.status === 'rejected')\n    .map(result => result.reason);\n    \n  return { successful, failed };\n}\n```\n\n**When to Use:**\n- **Promise.all**: When all operations must succeed\n- **Promise.allSettled**: When you want to know results of all operations"
  },
  {
    question: "What is the difference between Promise.race vs Promise.any?",
    idealAnswer: "**Promise.race** and **Promise.any** handle the first settled promise differently.\n\n**Promise.race:**\n```javascript\n// Returns the first promise that settles (resolve OR reject)\nconst promise1 = new Promise(resolve => setTimeout(() => resolve('Fast'), 100));\nconst promise2 = new Promise(resolve => setTimeout(() => resolve('Slow'), 200));\nconst promise3 = new Promise(reject => setTimeout(() => reject('Error'), 50));\n\nPromise.race([promise1, promise2, promise3])\n  .then(result => console.log(result)) // 'Error' (rejection wins)\n  .catch(error => console.error(error));\n```\n\n**Promise.any:**\n```javascript\n// Returns the first promise that resolves (ignores rejections)\nconst promise1 = new Promise(resolve => setTimeout(() => resolve('Fast'), 100));\nconst promise2 = new Promise(resolve => setTimeout(() => resolve('Slow'), 200));\nconst promise3 = new Promise(reject => setTimeout(() => reject('Error'), 50));\n\nPromise.any([promise1, promise2, promise3])\n  .then(result => console.log(result)) // 'Fast' (first resolution)\n  .catch(error => console.error(error));\n```\n\n**All Rejections:**\n```javascript\n// Promise.race with all rejections\nPromise.race([\n  Promise.reject('Error 1'),\n  Promise.reject('Error 2')\n]).catch(error => console.error(error)); // 'Error 1' (first rejection)\n\n// Promise.any with all rejections\nPromise.any([\n  Promise.reject('Error 1'),\n  Promise.reject('Error 2')\n]).catch(error => {\n  console.error(error); // AggregateError: All promises were rejected\n  console.log(error.errors); // ['Error 1', 'Error 2']\n});\n```\n\n**Practical Use Cases:**\n```javascript\n// Promise.race - timeout pattern\nfunction fetchWithTimeout(url, timeout) {\n  return Promise.race([\n    fetch(url),\n    new Promise((_, reject) => \n      setTimeout(() => reject(new Error('Timeout')), timeout)\n    )\n  ]);\n}\n\n// Promise.any - multiple sources\nfunction fetchFromMultipleSources(urls) {\n  return Promise.any(\n    urls.map(url => fetch(url))\n  );\n}\n\n// Usage\nfetchFromMultipleSources([\n  'https://api1.example.com/data',\n  'https://api2.example.com/data',\n  'https://api3.example.com/data'\n]).then(response => {\n  console.log('Got data from fastest server');\n});\n```\n\n**Key Differences:**\n- **race**: First to settle (resolve or reject)\n- **any**: First to resolve (ignores rejections)"
  },
  {
    question: "What is the Event Loop and how does JavaScript handle asynchronous operations?",
    idealAnswer: "**Event Loop** is the mechanism that handles asynchronous operations in JavaScript.\n\n**JavaScript Runtime:**\n```\n┌─────────────────┐\n│   Call Stack    │\n├─────────────────┤\n│   Web APIs      │\n├─────────────────┤\n│ Callback Queue  │\n├─────────────────┤\n│   Event Loop    │\n└─────────────────┘\n```\n\n**How it Works:**\n```javascript\nconsole.log('1'); // Synchronous\n\nsetTimeout(() => {\n  console.log('2'); // Callback queue\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3'); // Microtask queue\n});\n\nconsole.log('4'); // Synchronous\n\n// Output: 1, 4, 3, 2\n```\n\n**Execution Order:**\n1. **Call Stack**: Synchronous code\n2. **Microtask Queue**: Promises, queueMicrotask()\n3. **Callback Queue**: setTimeout, DOM events\n\n**Practical Implications:**\n- Non-blocking I/O operations\n- Single-threaded but concurrent\n- UI remains responsive during long operations\n- Understanding helps with performance optimization"
  },
  {
    question: "What are JavaScript Symbols and what are they used for?",
    idealAnswer: "**Symbols** are unique and immutable primitive values used as object property keys.\n\n**Creating Symbols:**\n```javascript\n// Basic symbol\nconst id = Symbol('description');\n\n// Global symbol registry\nconst globalId = Symbol.for('app.id');\nconst sameGlobalId = Symbol.for('app.id'); // Same symbol\n```\n\n**Using Symbols as Properties:**\n```javascript\nconst user = {\n  name: 'John',\n  [Symbol('id')]: 12345,\n  [Symbol('secret')]: 'hidden-data'\n};\n\n// Symbol properties are not enumerable in for...in\nfor (const key in user) {\n  console.log(key); // Only 'name'\n}\n```\n\n**Common Use Cases:**\n\n**1. Private Properties:**\n```javascript\nconst _private = Symbol('private');\n\nclass MyClass {\n  constructor() {\n    this[_private] = 'secret';\n  }\n  \n  getPrivate() {\n    return this[_private];\n  }\n}\n```\n\n**2. Built-in Symbols:**\n```javascript\n// Iterator protocol\nconst myIterable = {\n  [Symbol.iterator]() {\n    let step = 0;\n    return {\n      next() {\n        return { value: step++, done: step > 3 };\n      }\n    };\n  }\n};\n```\n\n**Benefits:**\n- Guaranteed unique property keys\n- Avoid naming conflicts\n- Enable metaprogramming patterns"
  },
  {
    question: "What are JavaScript Iterables and Iterators?",
    idealAnswer: "**Iterables** are objects that implement the Symbol.iterator method, and **iterators** are objects that provide a sequence of values.\n\n**Basic Iterator:**\n```javascript\nconst iterator = {\n  data: ['a', 'b', 'c'],\n  index: 0,\n  \n  next() {\n    if (this.index < this.data.length) {\n      return { value: this.data[this.index++], done: false };\n    } else {\n      return { done: true };\n    }\n  }\n};\n```\n\n**Making Objects Iterable:**\n```javascript\nconst range = {\n  from: 1,\n  to: 5,\n  \n  [Symbol.iterator]() {\n    let current = this.from;\n    const last = this.to;\n    \n    return {\n      next() {\n        if (current <= last) {\n          return { value: current++, done: false };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\n// Can now use with for...of\nfor (const num of range) {\n  console.log(num); // 1, 2, 3, 4, 5\n}\n```\n\n**Built-in Iterables:**\n```javascript\n// Arrays, strings, maps, sets, etc.\nconst arr = [1, 2, 3];\nconst str = 'hello';\nconst map = new Map([['a', 1], ['b', 2]]);\nconst set = new Set([1, 2, 3]);\n```\n\n**Benefits:**\n- Custom data structures can use standard iteration\n- Enables spread operator and destructuring\n- Supports for...of loops"
  },
  {
    question: "What is the DOM and how does JavaScript interact with it?",
    idealAnswer: "**DOM (Document Object Model)** is a programming interface for HTML and XML documents that represents the page structure as a tree of objects.\n\n**DOM Tree Structure:**\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <div id=\"container\">\n      <p class=\"text\">Hello World</p>\n    </div>\n  </body>\n</html>\n```\n\n**JavaScript DOM Access:**\n```javascript\n// Access elements\nconst container = document.getElementById('container');\nconst paragraphs = document.getElementsByClassName('text');\nconst firstP = document.querySelector('p.text');\nconst allPs = document.querySelectorAll('p');\n\n// Traverse DOM\nconst parent = firstP.parentNode;\nconst children = container.children;\nconst firstChild = container.firstChild;\nconst siblings = firstP.nextElementSibling;\n```\n\n**DOM Manipulation:**\n```javascript\n// Create elements\nconst newDiv = document.createElement('div');\nconst newContent = document.createTextNode('New content');\nnewDiv.appendChild(newContent);\n\n// Modify elements\ncontainer.innerHTML = '<p>Updated content</p>';\ncontainer.textContent = 'Plain text only';\ncontainer.setAttribute('data-id', '123');\ncontainer.classList.add('active');\ncontainer.style.color = 'red';\n\n// Remove elements\ncontainer.removeChild(firstP);\nfirstP.remove(); // Modern approach\n```\n\n**DOM Events:**\n```javascript\n// Event listeners\nbutton.addEventListener('click', function(event) {\n  console.log('Button clicked');\n  event.stopPropagation(); // Stop bubbling\n});\n\n// Event delegation\ncontainer.addEventListener('click', function(event) {\n  if (event.target.classList.contains('item')) {\n    handleItemClick(event.target);\n  }\n});\n```\n\n**Performance Considerations:**\n- DOM operations are expensive\n- Batch DOM updates\n- Use document fragments for multiple insertions\n- Avoid layout thrashing"
  },
  {
    question: "What is Virtual DOM and how does it work?",
    idealAnswer: "**Virtual DOM** is a JavaScript representation of the real DOM that enables efficient updates through diffing algorithms.\n\n**Real DOM vs Virtual DOM:**\n```javascript\n// Real DOM (expensive)\nconst element = document.getElementById('app');\nelement.innerHTML = '<div>New content</div>'; // Triggers reflow/repaint\n\n// Virtual DOM (cheap)\nconst virtualElement = {\n  type: 'div',\n  props: { children: 'New content' }\n}; // Just JavaScript object\n```\n\n**Virtual DOM Process:**\n```javascript\n// 1. Create Virtual DOM\nconst vdom1 = {\n  type: 'div',\n  props: { className: 'container' },\n  children: [\n    { type: 'h1', props: {}, children: 'Hello' }\n  ]\n};\n\n// 2. State change\nconst vdom2 = {\n  type: 'div',\n  props: { className: 'container' },\n  children: [\n    { type: 'h1', props: {}, children: 'Hello World' }\n  ]\n};\n\n// 3. Diff and patch (React does this automatically)\nconst changes = diff(vdom1, vdom2);\n// [{ type: 'TEXT_CHANGE', element: h1, newText: 'Hello World' }]\n```\n\n**Simple Virtual DOM Implementation:**\n```javascript\nclass VirtualDOM {\n  createElement(type, props, ...children) {\n    return { type, props: props || {}, children };\n  }\n  \n  render(vdom, container) {\n    const element = this.createDOMElement(vdom);\n    container.appendChild(element);\n  }\n  \n  createDOMElement(vdom) {\n    if (typeof vdom === 'string') {\n      return document.createTextNode(vdom);\n    }\n    \n    const element = document.createElement(vdom.type);\n    \n    // Set props\n    Object.keys(vdom.props).forEach(key => {\n      element.setAttribute(key, vdom.props[key]);\n    });\n    \n    // Render children\n    vdom.children.forEach(child => {\n      element.appendChild(this.createDOMElement(child));\n    });\n    \n    return element;\n  }\n}\n```\n\n**Benefits:**\n- **Performance**: Minimize real DOM manipulations\n- **Declarative**: Describe what you want, not how to update\n- **Batching**: Group multiple updates\n- **Cross-platform**: Can render to different targets (web, mobile, native)"
  },
  {
    question: "What is event delegation and why is it useful?",
    idealAnswer: "**Event delegation** is a technique where you attach a single event listener to a parent element to handle events for multiple child elements.\n\n**Traditional Approach (Multiple Listeners):**\n```javascript\n// Bad: Multiple event listeners\ndocument.querySelectorAll('.item').forEach(item => {\n  item.addEventListener('click', handleClick);\n});\n\n// Problems:\n// - Memory usage (many listeners)\n// - Dynamic elements need new listeners\n// - Performance overhead\n```\n\n**Event Delegation (Single Listener):**\n```javascript\n// Good: Single event listener\ndocument.getElementById('container').addEventListener('click', (event) => {\n  if (event.target.classList.contains('item')) {\n    handleClick(event.target);\n  }\n});\n\n// Benefits:\n// - Single listener\n// - Works with dynamic elements\n// - Better performance\n```\n\n**Advanced Event Delegation:**\n```javascript\nfunction delegate(parent, selector, handler) {\n  parent.addEventListener('click', (event) => {\n    const target = event.target.closest(selector);\n    if (target && parent.contains(target)) {\n      handler.call(target, event);\n    }\n  });\n}\n\n// Usage\ndelegate(document.body, '.button', function(event) {\n  console.log('Button clicked:', this.textContent);\n});\n```\n\n**Real-world Example:**\n```javascript\n// Todo list with event delegation\nclass TodoList {\n  constructor(container) {\n    this.container = container;\n    this.todos = [];\n    this.init();\n  }\n  \n  init() {\n    // Single listener for all todo interactions\n    this.container.addEventListener('click', (event) => {\n      const todoItem = event.target.closest('.todo-item');\n      if (!todoItem) return;\n      \n      if (event.target.classList.contains('delete-btn')) {\n        this.deleteTodo(todoItem.dataset.id);\n      } else if (event.target.classList.contains('complete-btn')) {\n        this.toggleComplete(todoItem.dataset.id);\n      }\n    });\n  }\n  \n  addTodo(text) {\n    const todo = { id: Date.now(), text, complete: false };\n    this.todos.push(todo);\n    this.render();\n    // No need to add new event listeners!\n  }\n}\n```\n\n**Performance Benefits:**\n- **Memory Efficiency**: One listener vs many\n- **Dynamic Content**: Works with elements added later\n- **Simplified Code**: Cleaner event handling logic"
  },
  {
    question: "What is the difference between localStorage vs sessionStorage?",
    idealAnswer: "**localStorage** and **sessionStorage** are both web storage APIs, but with different persistence and scope.\n\n**localStorage:**\n```javascript\n// Persists until manually cleared\nlocalStorage.setItem('user', 'John');\nlocalStorage.setItem('token', 'abc123');\n\nconst user = localStorage.getItem('user'); // 'John'\nconst token = localStorage.getItem('token'); // 'abc123'\n\n// Remove items\nlocalStorage.removeItem('token');\nlocalStorage.clear(); // Clear all\n\n// Storage limit: ~5-10MB per domain\n// Shared across all tabs/windows\n// Persists after browser restart\n```\n\n**sessionStorage:**\n```javascript\n// Cleared when tab/window closes\nsessionStorage.setItem('tempData', 'temporary');\n\nconst data = sessionStorage.getItem('tempData'); // 'temporary'\n\n// Same API as localStorage\nsessionStorage.removeItem('tempData');\nsessionStorage.clear();\n\n// Storage limit: ~5MB per domain\n// Specific to one tab/window\n// Cleared on tab close\n```\n\n**Key Differences:**\n```javascript\n// Test persistence\nlocalStorage.setItem('test', 'persistent');\nsessionStorage.setItem('test', 'temporary');\n\n// Close and reopen browser\nlocalStorage.getItem('test'); // 'persistent' (still there)\nsessionStorage.getItem('test'); // null (cleared)\n\n// Open new tab\nlocalStorage.getItem('test'); // 'persistent' (shared)\nsessionStorage.getItem('test'); // null (not shared)\n```\n\n**Practical Use Cases:**\n```javascript\n// localStorage - User preferences, auth tokens\nclass UserPreferences {\n  saveTheme(theme) {\n    localStorage.setItem('theme', theme);\n  }\n  \n  getTheme() {\n    return localStorage.getItem('theme') || 'light';\n  }\n  \n  saveAuthToken(token) {\n    localStorage.setItem('authToken', token);\n  }\n}\n\n// sessionStorage - Temporary form data, wizard steps\nclass FormWizard {\n  saveStep(step, data) {\n    sessionStorage.setItem(`step_${step}`, JSON.stringify(data));\n  }\n  \n  getStep(step) {\n    const data = sessionStorage.getItem(`step_${step}`);\n    return data ? JSON.parse(data) : null;\n  }\n  \n  // Automatically cleared when user closes tab\n}\n```\n\n**Security Considerations:**\n- Both are accessible via JavaScript (XSS vulnerable)\n- Don't store sensitive data unencrypted\n- Use httpOnly cookies for secure data\n- Consider storage quota limits"
  },
  {
    question: "What is CORS and how does it work?",
    idealAnswer: "**CORS (Cross-Origin Resource Sharing)** is a security mechanism that allows or denies web pages from making requests to different domains.\n\n**Same-Origin Policy:**\n```javascript\n// Browser blocks cross-origin requests by default\n// https://example.com cannot fetch from https://api.example.com\nfetch('https://api.example.com/data'); // Blocked by CORS policy\n```\n\n**CORS Headers:**\n```javascript\n// Server must include CORS headers\nAccess-Control-Allow-Origin: https://example.com  // Specific origin\nAccess-Control-Allow-Origin: *                    // Any origin\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 86400\n```\n\n**Simple Requests:**\n```javascript\n// GET, POST, HEAD with standard headers\nfetch('https://api.example.com/data', {\n  method: 'GET',\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\n// Server responds with Access-Control-Allow-Origin header\n```\n\n**Preflight Requests (OPTIONS):**\n```javascript\n// Complex requests trigger preflight\nfetch('https://api.example.com/data', {\n  method: 'PUT',\n  headers: {\n    'Content-Type': 'application/json',\n    'X-Custom-Header': 'value'\n  }\n});\n\n// Browser first sends OPTIONS request\nOPTIONS /data HTTP/1.1\nOrigin: https://example.com\nAccess-Control-Request-Method: PUT\nAccess-Control-Request-Headers: X-Custom-Header\n\n// Server responds\nHTTP/1.1 204 No Content\nAccess-Control-Allow-Origin: https://example.com\nAccess-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: X-Custom-Header\n\n// Then browser sends actual PUT request\n```\n\n**Server Implementation (Node.js/Express):**\n```javascript\nconst express = require('express');\nconst cors = require('cors');\n\nconst app = express();\n\n// Simple CORS\napp.use(cors());\n\n// Custom CORS\napp.use(cors({\n  origin: ['https://example.com', 'https://app.example.com'],\n  methods: ['GET', 'POST', 'PUT'],\n  allowedHeaders: ['Content-Type', 'Authorization'],\n  credentials: true\n}));\n\n// Manual CORS handling\napp.use((req, res, next) => {\n  res.header('Access-Control-Allow-Origin', 'https://example.com');\n  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');\n  res.header('Access-Control-Allow-Headers', 'Content-Type');\n  \n  if (req.method === 'OPTIONS') {\n    res.sendStatus(200);\n  } else {\n    next();\n  }\n});\n```\n\n**Common CORS Issues:**\n- Missing Access-Control-Allow-Origin header\n- Credentials not allowed with wildcard origin\n- Preflight cache issues\n- Network/CORS vs same-origin policy confusion"
  },
  {
    question: "What is the difference between `call()`, `apply()`, and `bind()` methods?",
    idealAnswer: "**Function Invocation Methods** that control the `this` context.\n\n**`call()`**:\n```javascript\nfunction greet(greeting, punctuation) {\n  return `${greeting}, ${this.name}${punctuation}`;\n}\n\nconst person = { name: 'John' };\ngreet.call(person, 'Hello', '!'); // 'Hello, John!'\n\n// Arguments passed individually\n```\n\n**`apply()`**:\n```javascript\nfunction greet(greeting, punctuation) {\n  return `${greeting}, ${this.name}${punctuation}`;\n}\n\nconst person = { name: 'John' };\ngreet.apply(person, ['Hello', '!']); // 'Hello, John!'\n\n// Arguments passed as array\n```\n\n**`bind()`**:\n```javascript\nfunction greet(greeting, punctuation) {\n  return `${greeting}, ${this.name}${punctuation}`;\n}\n\nconst person = { name: 'John' };\nconst boundGreet = greet.bind(person, 'Hello');\nboundGreet('!'); // 'Hello, John!'\n\n// Returns new function with preset this and arguments\n```\n\n**Key Differences:**\n- `call`: Arguments passed individually, executes immediately\n- `apply`: Arguments passed as array, executes immediately\n- `bind`: Returns new function, doesn't execute immediately\n\n**Use Cases:**\n```javascript\n// call - Method borrowing\nconst arrayLike = { 0: 'a', 1: 'b', length: 2 };\nArray.prototype.slice.call(arrayLike); // ['a', 'b']\n\n// apply - Math functions\nconst numbers = [1, 2, 3];\nMath.max.apply(null, numbers); // 3\n\n// bind - Event handlers\nconst button = {\n  handleClick: function() {\n    console.log(this.id);\n  }\n};\n\ndocument.getElementById('myButton').addEventListener(\n  'click', button.handleClick.bind(button)\n);\n```"
  },
  {
    question: "What is the difference between `setTimeout()`, `setInterval()`, and `requestAnimationFrame()`?",
    idealAnswer: "**Timing Functions** with different purposes and behaviors.\n\n**`setTimeout()`**:\n```javascript\n// Executes once after delay\nsetTimeout(() => {\n  console.log('Executed once after 1000ms');\n}, 1000);\n\n// Can be cancelled\nconst timeoutId = setTimeout(callback, 1000);\nclearTimeout(timeoutId);\n\n// Minimum delay ~4ms in browsers\n```\n\n**`setInterval()`**:\n```javascript\n// Executes repeatedly\nlet count = 0;\nconst intervalId = setInterval(() => {\n  count++;\n  console.log(`Count: ${count}`);\n  if (count >= 5) clearInterval(intervalId);\n}, 1000);\n\n// Can be cancelled\nclearInterval(intervalId);\n\n// May drift over time\n```\n\n**`requestAnimationFrame()`**:\n```javascript\n// Syncs with browser repaint (60fps)\nfunction animate(timestamp) {\n  // Animation logic here\n  console.log('Animation frame:', timestamp);\n  \n  // Continue animation\n  requestAnimationFrame(animate);\n}\n\n// Start animation\nrequestAnimationFrame(animate);\n\n// Optimized for performance\nconst animationId = requestAnimationFrame(callback);\ncancelAnimationFrame(animationId);\n\n// Pauses when tab is inactive\n```\n\n**Key Differences:**\n```javascript\n// Execution timing\nsetTimeout(callback, 0); // ~4ms minimum, macrotask\nsetInterval(callback, 16); // ~16ms, may drift\nrequestAnimationFrame(callback); // ~16ms, synced with display\n\n// Performance\nsetTimeout: Good for one-time delays\nsetInterval: Can cause performance issues\nrequestAnimationFrame: Best for animations\n\n// Browser behavior\nsetTimeout/setInterval: Runs even when tab inactive\nrequestAnimationFrame: Pauses when tab inactive (battery saving)\n```\n\n**Use Cases:**\n- `setTimeout`: Debouncing, delayed execution\n- `setInterval`: Polling, periodic updates\n- `requestAnimationFrame`: Smooth animations, visual updates"
  },
  {
    question: "What is event bubbling and capturing in JavaScript?",
    idealAnswer: "**Event Propagation** phases in the DOM event system.\n\n**Three Phases:**\n1. **Capturing Phase** (top to bottom)\n2. **Target Phase** (at the element)\n3. **Bubbling Phase** (bottom to top)\n\n**Event Bubbling (Default):**\n```javascript\ndiv.addEventListener('click', () => console.log('Div')); // Third\nbutton.addEventListener('click', () => console.log('Button')); // First\n\n// Click order: Button → Div (bubbles up)\n```\n\n**Event Capturing:**\n```javascript\ndiv.addEventListener('click', () => console.log('Div'), true); // First\nbutton.addEventListener('click', () => console.log('Button'), true); // Third\n\n// Click order: Div → Button (captures down)\n```\n\n**Mixed Example:**\n```javascript\nouter.addEventListener('click', () => console.log('Outer Capture'), true);\ninner.addEventListener('click', () => console.log('Inner Target'));\nouter.addEventListener('click', () => console.log('Outer Bubble'));\n\n// Click order: Outer Capture → Inner Target → Outer Bubble\n```\n\n**Stopping Propagation:**\n```javascript\nelement.addEventListener('click', (e) => {\n  e.stopPropagation(); // Stops both capturing and bubbling\n  e.stopImmediatePropagation(); // Stops other listeners on same element\n  \n  // Prevents default behavior\n  e.preventDefault();\n});\n```\n\n**Event Delegation (uses bubbling):**\n```javascript\n// Single listener for multiple elements\ndocument.getElementById('list').addEventListener('click', (e) => {\n  if (e.target.classList.contains('item')) {\n    handleItemClick(e.target);\n  }\n});\n```\n\n**Use Cases:**\n- **Bubbling**: Event delegation, default behavior\n- **Capturing**: Early interception, custom event handling\n- **Stopping**: Preventing parent handlers, custom control flow"
  },
  {
    question: "What are Web Workers and how do they work?",
    idealAnswer: "**Web Workers** enable running JavaScript in background threads, preventing UI blocking.\n\n**Basic Web Worker:**\n```javascript\n// main.js\nconst worker = new Worker('worker.js');\n\n// Send data to worker\nworker.postMessage({ command: 'start', data: [1, 2, 3, 4, 5] });\n\n// Receive data from worker\nworker.onmessage = function(e) {\n  console.log('Worker result:', e.data);\n};\n\n// Handle errors\nworker.onerror = function(e) {\n  console.error('Worker error:', e.message);\n};\n\n// Terminate worker\nworker.terminate();\n```\n\n**worker.js:**\n```javascript\n// Receive data from main thread\nself.onmessage = function(e) {\n  const { command, data } = e.data;\n  \n  if (command === 'start') {\n    // Heavy computation\n    const result = data.reduce((sum, num) => sum + num * num, 0);\n    \n    // Send result back\n    self.postMessage(result);\n  }\n};\n\n// Can also import scripts\nimportScripts('utility.js');\n```\n\n**Inline Worker (using Blob):**\n```javascript\nconst workerCode = `\n  self.onmessage = function(e) {\n    const result = e.data * 2;\n    self.postMessage(result);\n  };\n`;\n\nconst blob = new Blob([workerCode], { type: 'application/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\n```\n\n**Limitations:**\n```javascript\n// Web Workers CANNOT:\n// - Access DOM directly\n// - Access window object\n// - Access document object\n// - Access parent objects\n\n// Web Workers CAN:\n// - Use setTimeout/setInterval\n// - Use XMLHttpRequest/fetch\n// - Use WebSockets\n// - Use IndexedDB\n// - Import other scripts\n```\n\n**Use Cases:**\n- Heavy calculations (data processing, image manipulation)\n- Background tasks (file processing, encryption)\n- Real-time data processing\n- Preventing UI blocking\n\n**Shared Workers (multiple tabs):**\n```javascript\nconst sharedWorker = new SharedWorker('shared-worker.js');\nsharedWorker.port.onmessage = (e) => console.log(e.data);\nsharedWorker.port.postMessage('hello');\n```"
  },
  {
    question: "What is the difference between `localStorage`, `sessionStorage`, and cookies?",
    idealAnswer: "**Client-side storage mechanisms** with different characteristics and use cases.\n\n**`localStorage`:**\n```javascript\n// Persistent storage\nlocalStorage.setItem('user', JSON.stringify({ name: 'John', id: 1 }));\nconst user = JSON.parse(localStorage.getItem('user'));\nlocalStorage.removeItem('user');\nlocalStorage.clear(); // Clear all\n\n// Characteristics\n// - 10MB limit\n// - Never expires\n// - Accessible across tabs/windows\n// - Not sent to server with HTTP requests\n// - Client-side only\n```\n\n**`sessionStorage`:**\n```javascript\n// Session-based storage\nsessionStorage.setItem('tempData', 'temporary');\nconst data = sessionStorage.getItem('tempData');\nsessionStorage.removeItem('tempData');\n\n// Characteristics\n// - 5MB limit\n// - Cleared when tab/window closes\n// - Tab-specific (not shared across tabs)\n// - Not sent to server\n// - Client-side only\n```\n\n**Cookies:**\n```javascript\n// Server-client communication\ndocument.cookie = 'username=John; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/';\ndocument.cookie = 'sessionId=abc123; secure; HttpOnly; SameSite=Strict';\n\n// Reading cookies\nconst cookies = document.cookie.split(';').reduce((acc, cookie) => {\n  const [key, value] = cookie.trim().split('=');\n  acc[key] = value;\n  return acc;\n}, {});\n\n// Characteristics\n// - 4KB limit\n// - Can set expiration date\n// - Sent to server with every HTTP request\n// - Accessible across tabs/windows\n// - Can be secure (HTTPS only)\n// - Can be HttpOnly (not accessible via JavaScript)\n```\n\n**Comparison Table:**\n```javascript\n/*\n| Feature        | localStorage | sessionStorage | Cookies       |\n|----------------|--------------|----------------|---------------|\n| Size           | 10MB         | 5MB            | 4KB           |\n| Expiration     | Never        | Tab close      | Custom        |\n| Server Access  | No           | No             | Yes           |\n| Tab Scope      | All tabs     | Current tab    | All tabs      |\n| HTTP Headers   | No           | No             | Yes           |\n| Security       | Standard     | Standard       | Secure flags  |\n*/\n```\n\n**Best Practices:**\n```javascript\n// localStorage - User preferences, cached data\nlocalStorage.setItem('theme', 'dark');\nlocalStorage.setItem('language', 'en');\n\n// sessionStorage - Form data, temporary state\nsessionStorage.setItem('formStep', '2');\nsessionStorage.setItem('wizardData', JSON.stringify(wizardState));\n\n// cookies - Authentication, session tokens\ndocument.cookie = 'authToken=jwt_token; HttpOnly; Secure; SameSite=Strict';\n```\n\n**Security Considerations:**\n- Never store sensitive data in localStorage/sessionStorage\n- Use secure cookies for authentication\n- Implement proper expiration for cookies\n- Consider XSS risks with client-side storage"
  },
  {
    question: "What are ES6 Modules and how do they differ from CommonJS?",
    idealAnswer: "**Module Systems** for organizing and sharing JavaScript code.\n\n**ES6 Modules (ESM):**\n```javascript\n// math.js - Named exports\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\nexport const PI = 3.14159;\n\n// Default export\nexport default function multiply(a, b) {\n  return a * b;\n}\n\n// main.js - Importing\nimport multiply, { add, subtract, PI } from './math.js';\nimport * as math from './math.js';\n\n// Dynamic imports (async)\nimport('./math.js').then(module => {\n  console.log(module.add(2, 3));\n});\n```\n\n**CommonJS (Node.js):**\n```javascript\n// math.js\nconst add = (a, b) => a + b;\nconst subtract = (a, b) => a - b;\nconst PI = 3.14159;\n\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// Exporting\nmodule.exports = {\n  add,\n  subtract,\n  PI,\n  multiply\n};\n\n// OR single export\n// module.exports = multiply;\n\n// main.js - Requiring\nconst { add, subtract, PI, multiply } = require('./math');\nconst math = require('./math');\n```\n\n**Key Differences:**\n```javascript\n/*\n| Feature           | ES6 Modules        | CommonJS          |\n|-------------------|--------------------|-------------------|\n| Syntax            | import/export      | require/module.exports |\n| Loading           | Async              | Sync              |\n| Tree Shaking      | Yes                | No                |\n| Top-level await   | Yes                | No                |\n| this              | undefined          | module.exports    |\n| Strict Mode       | Always             | Optional          |\n| Dynamic imports   | Yes                | require()         |\n| Circular deps     | Live bindings      | Copy of exports   |\n*/\n```\n\n**ESM Advantages:**\n```javascript\n// Static analysis enables optimizations\nimport { unusedFunction } from './utils'; // Can be removed by bundler\n\n// Tree shaking works\nimport { onlyNeededFunction } from './large-library';\n\n// Better error handling\ntry {\n  const module = await import('./module.js');\n} catch (error) {\n  console.error('Import failed:', error);\n}\n```\n\n**CommonJS Advantages:**\n```javascript\n// Dynamic imports\nconst moduleName = process.env.NODE_ENV === 'test' ? './test-utils' : './utils';\nconst utils = require(moduleName);\n\n// Conditional exports\nif (process.env.DEBUG) {\n  module.exports.debug = debugFunction;\n}\n```\n\n**Module Compatibility:**\n```javascript\n// Using ESM in Node.js\n// package.json\n{\n  \"type\": \"module\"\n}\n\n// Using CommonJS in ESM\nimport { createRequire } from 'module';\nconst require = createRequire(import.meta.url);\nconst commonjsModule = require('./commonjs-module');\n```"
  }
];

const implementationQuestions = [
  {
    question: "Build a Todo List Application",
    idealAnswer: "**Todo List Application** - A classic JavaScript exercise that demonstrates DOM manipulation, event handling, and state management.\n\n**Key Features:**\n- Add new todos\n- Mark todos as complete/incomplete\n- Delete todos\n- Filter todos (all, active, completed)\n- Local storage persistence\n\n**Implementation Steps:**\n1. Create HTML structure with input field and todo list\n2. Add event listeners for user interactions\n3. Implement CRUD operations\n4. Add filtering functionality\n5. Persist data to localStorage",
    implementation: 'todo-list'
  },
  {
    question: "Create a Weather App using API",
    idealAnswer: "**Weather Application** - Fetches real weather data from an API and displays it dynamically.\n\n**Key Features:**\n- Search for any city\n- Display current weather (temperature, conditions, humidity)\n- Show 5-day forecast\n- Handle loading and error states\n- Responsive design\n\n**Implementation Steps:**\n1. Set up API integration (OpenWeatherMap or similar)\n2. Create search functionality\n3. Parse and display weather data\n4. Add error handling\n5. Implement loading states",
    implementation: 'weather-app'
  },
  {
    question: "Build a Calculator Application",
    idealAnswer: "**Calculator Application** - A fully functional calculator with basic and advanced operations.\n\n**Key Features:**\n- Basic arithmetic (+, -, *, /)\n- Clear and delete functions\n- Decimal point support\n- Keyboard support\n- Error handling for invalid operations\n\n**Implementation Steps:**\n1. Create calculator UI with buttons\n2. Implement display logic\n3. Add operation handlers\n4. Handle edge cases (division by zero, etc.)\n5. Add keyboard event listeners",
    implementation: 'calculator'
  },
  {
    question: "Create a Password Generator",
    idealAnswer: "**Password Generator** - Generates secure random passwords with customizable options.\n\n**Key Features:**\n- Adjustable password length\n- Include/exclude uppercase, lowercase, numbers, symbols\n- Copy to clipboard functionality\n- Password strength indicator\n- Generate multiple passwords\n\n**Implementation Steps:**\n1. Create UI with options and controls\n2. Implement random character generation\n3. Add password strength calculation\n4. Implement copy to clipboard\n5. Add visual feedback",
    implementation: 'password-generator'
  },
  {
    question: "Build a Quiz Application",
    idealAnswer: "**Quiz Application** - Interactive quiz with multiple choice questions and scoring.\n\n**Key Features:**\n- Multiple choice questions\n- Timer functionality\n- Score tracking\n- Progress indicator\n- Results screen with performance breakdown\n\n**Implementation Steps:**\n1. Create question data structure\n2. Build quiz interface\n3. Implement timer logic\n4. Add score calculation\n5. Create results display",
    implementation: 'quiz-app'
  },
  {
    question: "Create a Drag and Drop Interface",
    idealAnswer: "**Drag and Drop Interface** - Implement drag and drop functionality for organizing items.\n\n**Key Features:**\n- Drag items between containers\n- Visual feedback during dragging\n- Drop zone highlighting\n- Reorder items within containers\n- Touch device support\n\n**Implementation Steps:**\n1. Set up HTML5 drag and drop API\n2. Add drag event listeners\n3. Implement visual feedback\n4. Handle drop logic\n5. Add mobile touch support",
    implementation: 'drag-drop'
  },
  {
    question: "Build a Real-time Chat Interface",
    idealAnswer: "**Real-time Chat Interface** - Simulated chat application with messaging features.\n\n**Key Features:**\n- Send and receive messages\n- Timestamp display\n- User avatars\n- Typing indicators\n- Message status (sent, delivered)\n\n**Implementation Steps:**\n1. Create chat UI with message list\n2. Implement message sending\n3. Add simulated receiving\n4. Include typing indicators\n5. Add message status features",
    implementation: 'chat-interface'
  },
  {
    question: "Create an Image Gallery with Lightbox",
    idealAnswer: "**Image Gallery with Lightbox** - Interactive image viewer with modal functionality.\n\n**Key Features:**\n- Grid layout for thumbnails\n- Lightbox modal for full-size images\n- Navigation between images\n- Keyboard navigation\n- Responsive design\n\n**Implementation Steps:**\n1. Create gallery grid layout\n2. Implement lightbox modal\n3. Add image navigation\n4. Include keyboard controls\n5. Add responsive behavior",
    implementation: 'image-gallery'
  }
];

const hardQuestions = [
  {
    question: "Explain the JavaScript event loop and how it works with asynchronous operations.",
    idealAnswer: "**The Event Loop** is the mechanism that handles asynchronous operations in JavaScript, allowing non-blocking execution despite being single-threaded.\n\n**Core Components:**\n```javascript\n// Call Stack (LIFO)\nfunction main() {\n  console.log('Start');\n  setTimeout(() => console.log('Timeout'), 0);\n  Promise.resolve().then(() => console.log('Promise'));\n  console.log('End');\n}\n\n// Execution order:\n// 1. 'Start' (Call Stack)\n// 2. 'End' (Call Stack)\n// 3. 'Promise' (Microtask Queue)\n// 4. 'Timeout' (Macrotask Queue)\n```\n\n**How It Works:**\n1. **Call Stack**: Executes synchronous code\n2. **Web APIs**: Handle async operations (setTimeout, fetch, DOM events)\n3. **Task Queues**: Store callback functions\n   - **Microtask Queue**: Promises, queueMicrotask()\n   - **Macrotask Queue**: setTimeout, setInterval, I/O, UI rendering\n4. **Event Loop**: Moves tasks from queues to call stack when empty\n\n**Priority Order:**\n```javascript\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0); // Macrotask\n\nPromise.resolve().then(() => console.log('3')); // Microtask\nPromise.resolve().then(() => console.log('4')); // Microtask\n\nsetTimeout(() => console.log('5'), 0); // Macrotask\n\nconsole.log('6');\n\n// Output: 1, 6, 3, 4, 2, 5\n```\n\n**Visual Representation:**\n```\n┌─────────────────┐\n│   Call Stack    │ ← Event Loop checks this\n├─────────────────┤\n│  Microtask Q    │ ← Higher priority\n├─────────────────┤\n│  Macrotask Q    │ ← Lower priority\n├─────────────────┤\n│   Web APIs      │ ← Async operations\n└─────────────────┘\n```\n\n**Practical Implications:**\n- Microtasks run before macrotasks\n- setTimeout with 0ms still goes to macrotask queue\n- Promise chains execute synchronously within microtasks\n- Long-running tasks block the event loop",
  },
  {
    question: "What is memoization and how can you implement it in JavaScript?",
    idealAnswer: "**Memoization** is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.\n\n**Basic Implementation:**\n```javascript\nfunction memoize(fn) {\n  const cache = new Map();\n  \n  return function(...args) {\n    const key = JSON.stringify(args);\n    \n    if (cache.has(key)) {\n      console.log('From cache:', key);\n      return cache.get(key);\n    }\n    \n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    console.log('Computed:', key);\n    return result;\n  };\n}\n\n// Expensive function\nconst fibonacci = memoize(function(n) {\n  if (n < 2) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n});\n\nconsole.log(fibonacci(10)); // Computed once\nconsole.log(fibonacci(10)); // From cache\n```\n\n**Advanced Memoization with Options:**\n```javascript\nfunction createMemoizer(options = {}) {\n  const {\n    maxSize = 100,\n    ttl = 0, // Time to live in ms\n    keyGenerator = JSON.stringify\n  } = options;\n  \n  const cache = new Map();\n  const timestamps = new Map();\n  \n  return function(fn) {\n    return function(...args) {\n      const key = keyGenerator(args);\n      const now = Date.now();\n      \n      // Check TTL\n      if (ttl && timestamps.has(key)) {\n        if (now - timestamps.get(key) > ttl) {\n          cache.delete(key);\n          timestamps.delete(key);\n        }\n      }\n      \n      // Check cache\n      if (cache.has(key)) {\n        return cache.get(key);\n      }\n      \n      // Compute and store\n      const result = fn.apply(this, args);\n      \n      // LRU eviction\n      if (cache.size >= maxSize) {\n        const firstKey = cache.keys().next().value;\n        cache.delete(firstKey);\n        timestamps.delete(firstKey);\n      }\n      \n      cache.set(key, result);\n      if (ttl) timestamps.set(key, now);\n      \n      return result;\n    };\n  };\n}\n```\n\n**React useMemo Hook:**\n```javascript\nimport { useMemo } from 'react';\n\nfunction ExpensiveComponent({ data }) {\n  const processedData = useMemo(() => {\n    return data.map(item => expensiveCalculation(item));\n  }, [data]); // Only recompute when data changes\n  \n  return <div>{processedData}</div>;\n}\n```\n\n**Use Cases**: Fibonacci, API calls, complex calculations, React components, database queries.",
  },
  {
    question: "Explain the difference between debouncing and throttling with implementations.",
    idealAnswer: "**Debouncing** and **throttling** are techniques to control how often functions get called.\n\n**Debouncing**:\n- Delays function execution until after a pause\n- Only the last call in a series executes\n- Useful for search inputs, form validation\n\n```javascript\nfunction debounce(func, delay) {\n  let timeoutId;\n  \n  return function(...args) {\n    // Clear previous timeout\n    clearTimeout(timeoutId);\n    \n    // Set new timeout\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\n// Usage: Search input\nconst searchAPI = debounce((query) => {\n  console.log('Searching:', query);\n}, 300);\n\nsearchAPI('a'); // Cancelled\nsearchAPI('ap'); // Cancelled\nsearchAPI('app'); // Executed after 300ms pause\n```\n\n**Throttling**:\n- Limits function execution to once per time period\n- First call executes, subsequent calls are ignored\n- Useful for scroll events, button clicks\n\n```javascript\nfunction throttle(func, limit) {\n  let inThrottle;\n  \n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      \n      setTimeout(() => {\n        inThrottle = false;\n      }, limit);\n    }\n  };\n}\n\n// Usage: Scroll event\nconst handleScroll = throttle(() => {\n  console.log('Scroll position:', window.scrollY);\n}, 100);\n\nwindow.addEventListener('scroll', handleScroll);\n```\n\n**Advanced Throttle with Leading Edge:**\n```javascript\nfunction throttleAdvanced(func, limit, options = {}) {\n  const { leading = true, trailing = true } = options;\n  let lastFunc, lastRan;\n  \n  return function(...args) {\n    const context = this;\n    \n    if (!lastRan) {\n      if (leading) func.apply(context, args);\n      lastRan = Date.now();\n    } else {\n      clearTimeout(lastFunc);\n      lastFunc = setTimeout(() => {\n        if ((Date.now() - lastRan) >= limit) {\n          if (leading) func.apply(context, args);\n          lastRan = Date.now();\n        } else if (trailing) {\n          func.apply(context, args);\n        }\n      }, limit - (Date.now() - lastRan));\n    }\n  };\n}\n```\n\n**Comparison:**\n```javascript\n// Debounce: Waits for pause\ndebounceSearch('a'); // Ignored\ndebounceSearch('ap'); // Ignored\ndebounceSearch('app'); // Executes after pause\n\n// Throttle: Executes immediately, then waits\nthrottleScroll(); // Executes\nthrottleScroll(); // Ignored\nthrottleScroll(); // Ignored\n// 100ms later...\nthrottleScroll(); // Executes again\n```",
  },
  {
    question: "What are JavaScript Proxies and Reflect API? Provide practical examples.",
    idealAnswer: "**Proxies** enable you to intercept and customize fundamental operations on objects. **Reflect** provides a consistent API for these operations.\n\n**Basic Proxy:**\n```javascript\nconst target = {\n  name: 'John',\n  age: 30\n};\n\nconst handler = {\n  get(target, property) {\n    console.log(`Getting ${property}`);\n    return target[property];\n  },\n  \n  set(target, property, value) {\n    console.log(`Setting ${property} to ${value}`);\n    target[property] = value;\n    return true;\n  }\n};\n\nconst proxy = new Proxy(target, handler);\nproxy.name; // Logs: Getting name\nproxy.age = 31; // Logs: Setting age to 31\n```\n\n**Validation Proxy:**\n```javascript\nfunction createValidator(schema) {\n  return new Proxy({}, {\n    set(target, property, value) {\n      if (schema[property] && !schema[property](value)) {\n        throw new Error(`Invalid ${property}: ${value}`);\n      }\n      target[property] = value;\n      return true;\n    }\n  });\n}\n\nconst user = createValidator({\n  age: (val) => val >= 0 && val <= 150,\n  email: (val) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(val)\n});\n\nuser.age = 25; // OK\nuser.age = -5; // Error: Invalid age\n```\n\n**Logging Proxy:**\n```javascript\nfunction createLogger(obj) {\n  return new Proxy(obj, {\n    get(target, property) {\n      const value = Reflect.get(target, property);\n      console.log(`GET ${property}:`, value);\n      return typeof value === 'function' ? value.bind(target) : value;\n    },\n    \n    set(target, property, value) {\n      console.log(`SET ${property}:`, value);\n      return Reflect.set(target, property, value);\n    },\n    \n    deleteProperty(target, property) {\n      console.log(`DELETE ${property}`);\n      return Reflect.deleteProperty(target, property);\n    }\n  });\n}\n```\n\n**Array Negative Index Proxy:**\n```javascript\nconst arrayProxy = new Proxy([], {\n  get(target, property) {\n    if (typeof property === 'string' && property.startsWith('-')) {\n      const index = target.length + parseInt(property);\n      return target[index];\n    }\n    return Reflect.get(target, property);\n  }\n});\n\narrayProxy.push(1, 2, 3);\nconsole.log(arrayProxy[-1]); // 3\n```\n\n**Reflect API Benefits:**\n- Consistent return values\n- Better error handling\n- Default operations\n- Cleaner proxy handlers\n\n**Use Cases**: Validation, logging, caching, API wrappers, reactive programming.",
  },
  {
    question: "Explain JavaScript's memory management and garbage collection.",
    idealAnswer: "**Memory Management** in JavaScript is automatic but understanding it helps prevent memory leaks and optimize performance.\n\n**Memory Lifecycle:**\n1. **Allocation**: Creating variables, objects, functions\n2. **Usage**: Reading and writing values\n3. **Release**: Freeing memory when no longer needed\n\n**Stack vs Heap:**\n```javascript\n// Stack - Fixed size, fast access\nfunction example() {\n  let a = 1; // Stack\n  let b = 2; // Stack\n  \n  // Heap - Dynamic size, slower access\n  let obj = { large: 'data' }; // Heap reference\n  let arr = new Array(1000); // Heap reference\n}\n```\n\n**Garbage Collection Algorithms:**\n\n**1. Reference Counting (Old):**\n```javascript\nlet obj1 = { data: 'value' };\nlet obj2 = obj1;\n// Reference count: 2\n\nobj1 = null;\n// Reference count: 1\n\nobj2 = null;\n// Reference count: 0 → Collected\n```\n\n**2. Mark-and-Sweep (Modern):**\n```javascript\n// Phase 1: Mark reachable objects\nconst globalObj = { data: 'important' }; // Marked (reachable from global)\nfunction createObject() {\n  const localObj = { data: 'temporary' }; // Not marked (no references)\n  return localObj;\n}\n\n// Phase 2: Sweep unmarked objects\nconst temp = createObject(); // localObj becomes reachable\ntemp = null; // localObj becomes unreachable → Swept\n```\n\n**Memory Leaks - Common Causes:**\n\n**1. Global Variables:**\n```javascript\n// Bad - Never collected\nvar globalData = new Array(1000000);\n\n// Good - Scoped\nfunction processData() {\n  const data = new Array(1000000);\n  // Process data...\n} // data collected after function ends\n```\n\n**2. Closures:**\n```javascript\n// Potential leak\nfunction createLeak() {\n  const largeData = new Array(1000000);\n  return function() {\n    // Closure keeps largeData alive\n    console.log('Still exists');\n  };\n}\n\n// Fix - Clear references\nfunction createFixed() {\n  const largeData = new Array(1000000);\n  return function() {\n    largeData = null; // Clear reference\n    console.log('Cleaned up');\n  };\n}\n```\n\n**3. Event Listeners:**\n```javascript\n// Bad - Listener keeps element in memory\nelement.addEventListener('click', handler);\n\n// Good - Remove when done\nelement.addEventListener('click', handler);\n// Later...\nelement.removeEventListener('click', handler);\n```\n\n**Memory Optimization:**\n```javascript\n// WeakMap for private data\nconst privateData = new WeakMap();\n\nclass MyClass {\n  constructor(data) {\n    privateData.set(this, data);\n  }\n  \n  getData() {\n    return privateData.get(this);\n  }\n}\n// privateData entries are garbage collected with instances\n```\n\n**Best Practices**: Minimize global scope, clear references, remove event listeners, use appropriate data structures.",
  },
  {
    question: "What is the difference between shallow copy and deep copy in JavaScript?",
    idealAnswer: "**Shallow copy** copies only the top-level properties, while **deep copy** recursively copies all nested properties.\n\n**Shallow Copy:**\n```javascript\nconst original = {\n  name: 'John',\n  age: 30,\n  hobbies: ['reading', 'coding'],\n  address: {\n    city: 'New York',\n    country: 'USA'\n  }\n};\n\n// Method 1: Object.assign()\nconst shallow1 = Object.assign({}, original);\n\n// Method 2: Spread operator\nconst shallow2 = { ...original };\n\n// Method 3: Object.create()\nconst shallow3 = Object.create(Object.getPrototypeOf(original),\n  Object.getOwnPropertyDescriptors(original)\n);\n\n// Problem: Nested objects are shared\nshallow1.hobbies.push('gaming');\nconsole.log(original.hobbies); // ['reading', 'coding', 'gaming'] ← Modified!\n```\n\n**Deep Copy Methods:**\n\n**1. JSON Method (Limited):**\n```javascript\nconst deep1 = JSON.parse(JSON.stringify(original));\n\n// Limitations:\n// - Loses functions\n// - Loses undefined\n// - Loses Date objects (becomes strings)\n// - Loses RegExp\n// - Loses Map/Set\n// - Circular references cause errors\n```\n\n**2. Recursive Deep Copy:**\n```javascript\nfunction deepClone(obj, hash = new WeakMap()) {\n  // Handle primitives and null\n  if (obj === null || typeof obj !== 'object') {\n    return obj;\n  }\n  \n  // Handle circular references\n  if (hash.has(obj)) {\n    return hash.get(obj);\n  }\n  \n  // Handle Date\n  if (obj instanceof Date) {\n    return new Date(obj);\n  }\n  \n  // Handle Array\n  if (Array.isArray(obj)) {\n    const clone = [];\n    hash.set(obj, clone);\n    obj.forEach((item, index) => {\n      clone[index] = deepClone(item, hash);\n    });\n    return clone;\n  }\n  \n  // Handle Object\n  const clone = Object.create(Object.getPrototypeOf(obj));\n  hash.set(obj, clone);\n  \n  Reflect.ownKeys(obj).forEach(key => {\n    clone[key] = deepClone(obj[key], hash);\n  });\n  \n  return clone;\n}\n```\n\n**3. Using Lodash:**\n```javascript\nimport { cloneDeep } from 'lodash';\nconst deep2 = cloneDeep(original);\n```\n\n**Performance Comparison:**\n```javascript\n// Shallow copy - O(1) for top-level\n// Deep copy - O(n) where n is total number of properties\n\nconst large = { /* 10,000 nested properties */ };\nconsole.time('shallow');\nconst shallow = { ...large }; // ~0.1ms\nconsole.timeEnd('shallow');\n\nconsole.time('deep');\nconst deep = deepClone(large); // ~10ms\nconsole.timeEnd('deep');\n```\n\n**When to Use:**\n- **Shallow**: Simple objects, no nesting, performance critical\n- **Deep**: Complex objects, nested data, need complete independence",
  },
  {
    question: "Explain the Module Pattern, Revealing Module Pattern, and ES6 Modules.",
    idealAnswer: "**Module patterns** provide ways to organize code with private and public parts.\n\n**1. Basic Module Pattern:**\n```javascript\nconst myModule = (function() {\n  // Private variables and functions\n  let privateVar = 'I am private';\n  \n  function privateFunction() {\n    console.log(privateVar);\n  }\n  \n  // Public API\n  return {\n    publicMethod: function() {\n      privateFunction();\n    },\n    \n    publicVar: 'I am public',\n    \n    getPrivateVar: function() {\n      return privateVar;\n    }\n  };\n})();\n\n// Usage\nmyModule.publicMethod(); // Access private through public\nconsole.log(myModule.publicVar); // 'I am public'\nconsole.log(myModule.privateVar); // undefined\n```\n\n**2. Revealing Module Pattern:**\n```javascript\nconst revealingModule = (function() {\n  // Private\n  let privateVar = 0;\n  \n  function privateIncrement() {\n    privateVar++;\n  }\n  \n  function privateDecrement() {\n    privateVar--;\n  }\n  \n  function privateGetValue() {\n    return privateVar;\n  }\n  \n  // Reveal public API\n  return {\n    increment: privateIncrement,\n    decrement: privateDecrement,\n    getValue: privateGetValue,\n    value: privateVar // This won't work as expected!\n  };\n})();\n\n// Better revealing pattern\nconst betterModule = (function() {\n  let count = 0;\n  \n  function increment() { count++; }\n  function decrement() { count--; }\n  function getValue() { return count; }\n  \n  return {\n    increment,\n    decrement,\n    getValue,\n    reset: function() { count = 0; }\n  };\n})();\n```\n\n**3. ES6 Modules (Modern):**\n\n**module.js:**\n```javascript\n// Private (module scope)\nlet privateCounter = 0;\n\n// Named exports\nexport function increment() {\n  privateCounter++;\n  console.log('Count:', privateCounter);\n}\n\nexport function getCount() {\n  return privateCounter;\n}\n\n// Default export\nexport default class Counter {\n  constructor() {\n    this.value = 0;\n  }\n  \n  increment() {\n    this.value++;\n  }\n}\n\n// Export multiple\nexport { privateCounter as secretCounter };\n```\n\n**main.js:**\n```javascript\n// Import named exports\nimport { increment, getCount } from './module.js';\n\n// Import default export\nimport Counter from './module.js';\n\n// Import all\nimport * as module from './module.js';\n\n// Dynamic import\nconst module = await import('./module.js');\n```\n\n**Comparison:**\n```javascript\n// Module Pattern\nconst oldModule = (function() {\n  let private = 'secret';\n  return { getPrivate: () => private };\n})();\n\n// ES6 Module\nlet private = 'secret'; // Module scope is private\nexport const getPrivate = () => private;\n```\n\n**Benefits of ES6 Modules:**\n- Static analysis (tree shaking)\n- Circular dependency handling\n- Better performance\n- Standardized syntax\n- Import/export semantics",
  },
  {
    question: "What are JavaScript Generators and how do they differ from async/await?",
    idealAnswer: "**Generators** are special functions that can be paused and resumed, allowing multiple values to be produced over time.\n\n**Basic Generator:**\n```javascript\nfunction* numberGenerator() {\n  yield 1;\n  yield 2;\n  yield 3;\n  return 'done';\n}\n\nconst gen = numberGenerator();\nconsole.log(gen.next()); // { value: 1, done: false }\nconsole.log(gen.next()); // { value: 2, done: false }\nconsole.log(gen.next()); // { value: 3, done: false }\nconsole.log(gen.next()); // { value: 'done', done: true }\n```\n\n**Infinite Generator:**\n```javascript\nfunction* fibonacci() {\n  let [a, b] = [0, 1];\n  \n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fib = fibonacci();\nconsole.log(fib.next().value); // 0\nconsole.log(fib.next().value); // 1\nconsole.log(fib.next().value); // 1\nconsole.log(fib.next().value); // 2\n// ... infinite sequence\n```\n\n**Generator with Parameters:**\n```javascript\nfunction* range(start, end, step = 1) {\n  for (let i = start; i <= end; i += step) {\n    yield i;\n  }\n}\n\nfor (const num of range(1, 5)) {\n  console.log(num); // 1, 2, 3, 4, 5\n}\n```\n\n**Async Generators:**\n```javascript\nasync function* fetchUsers(ids) {\n  for (const id of ids) {\n    const response = await fetch(`/api/users/${id}`);\n    const user = await response.json();\n    yield user;\n  }\n}\n\n// Usage\nfor await (const user of fetchUsers([1, 2, 3])) {\n  console.log(user);\n}\n```\n\n**Generators vs Async/Await:**\n\n**Async/Await:**\n```javascript\nasync function fetchUserData() {\n  const user = await fetch('/user');\n  const posts = await fetch('/posts');\n  const comments = await fetch('/comments');\n  return { user, posts, comments };\n}\n\n// Single result, sequential execution\n```\n\n**Generator Approach:**\n```javascript\nfunction* fetchSteps() {\n  yield fetch('/user');\n  yield fetch('/posts');\n  yield fetch('/comments');\n}\n\n// Multiple results, can be controlled\nconst steps = fetchSteps();\nconst user = await steps.next().value;\nconst posts = await steps.next().value;\n// Can pause, resume, or skip steps\n```\n\n**Custom Async Implementation:**\n```javascript\nfunction async(gen) {\n  const iterator = gen();\n  \n  function step(nextFn) {\n    let next;\n    \n    try {\n      next = nextFn();\n    } catch (e) {\n      return Promise.reject(e);\n    }\n    \n    if (next.done) {\n      return Promise.resolve(next.value);\n    }\n    \n    return Promise.resolve(next.value).then(\n      val => step(() => iterator.next(val)),\n      err => step(() => iterator.throw(err))\n    );\n  }\n  \n  return step(() => iterator.next());\n}\n\n// Usage like async/await\nasync(function* () {\n  const user = yield fetch('/user');\n  const posts = yield fetch('/posts');\n  return { user, posts };\n});\n```\n\n**Use Cases:**\n- **Generators**: Sequences, lazy evaluation, coroutines, custom iterators\n- **Async/Await**: Simple async flows, error handling, readability\n- **Async Generators**: Streaming data, paginated APIs, real-time data",
  },
  {
    question: "Implement a function that supports chaining like a(1)(2,3)(4)() and returns the sum of all arguments",
    idealAnswer: "**Function Chaining Implementation:**\n\nThis requires returning a function that accumulates arguments until called with no arguments:\n\n```javascript\nfunction a(...args) {\n  let sum = args.reduce((acc, val) => acc + val, 0);\n  \n  function chained(...moreArgs) {\n    if (moreArgs.length === 0) {\n      return sum;\n    }\n    sum += moreArgs.reduce((acc, val) => acc + val, 0);\n    return chained;\n  }\n  \n  return chained;\n}\n\n// Usage\nconsole.log(a(1)(2,3)(4)()); // 10\nconsole.log(a(5, 10)(15)()); // 30\n```\n\n**Advanced Version with ValueOf:**\n```javascript\nfunction add(...args) {\n  const sum = args.reduce((acc, val) => acc + val, 0);\n  \n  const chained = (...moreArgs) => add(sum, ...moreArgs);\n  chained.valueOf = () => sum;\n  chained.toString = () => sum.toString();\n  \n  return chained;\n}\n\n// Can be used without final ()\nconsole.log(add(1)(2,3)(4)); // 10\nconsole.log(add(1)(2) + add(3)(4)); // 10\n```"
  },
  {
    question: "Implement a polyfill for Array.prototype.map()",
    idealAnswer: "**Array.prototype.map() Polyfill:**\n\n```javascript\nif (!Array.prototype.map) {\n  Array.prototype.map = function(callback, thisArg) {\n    // Check if callback is a function\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n    \n    // Get the array context\n    const O = Object(this);\n    const len = O.length >>> 0; // Convert to unsigned 32-bit integer\n    \n    // Create new array for results\n    const A = new Array(len);\n    \n    // Iterate through array\n    for (let k = 0; k < len; k++) {\n      // Check if index exists in sparse array\n      if (k in O) {\n        const kValue = O[k];\n        // Call callback with proper context\n        const mappedValue = callback.call(thisArg, kValue, k, O);\n        A[k] = mappedValue;\n      }\n    }\n    \n    return A;\n  };\n}\n\n// Usage examples\nconst numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]\n\n// With thisArg\nconst obj = { multiplier: 3 };\nconst tripled = numbers.map(function(x) {\n  return x * this.multiplier;\n}, obj); // [3, 6, 9, 12]\n\n// Sparse arrays\nconst sparse = [1, , 3]; // [1, empty, 3]\nconst result = sparse.map(x => x * 2); // [2, empty, 6]\n```\n\n**Key Implementation Details:**\n- Handles sparse arrays correctly\n- Supports thisArg parameter\n- Throws TypeError for non-function callbacks\n- Uses `>>> 0` to convert length to unsigned 32-bit integer\n- Preserves array length in result\n- Doesn't modify original array"
  },
  {
    question: "Implement a polyfill for Array.prototype.filter()",
    idealAnswer: "**Array.prototype.filter() Polyfill:**\n\n```javascript\nif (!Array.prototype.filter) {\n  Array.prototype.filter = function(callback, thisArg) {\n    // Validate callback\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n    \n    const O = Object(this);\n    const len = O.length >>> 0;\n    \n    // Create new array for filtered results\n    const result = [];\n    \n    for (let k = 0; k < len; k++) {\n      if (k in O) {\n        const kValue = O[k];\n        // Include element if callback returns truthy\n        if (callback.call(thisArg, kValue, k, O)) {\n          result.push(kValue);\n        }\n      }\n    }\n    \n    return result;\n  };\n}\n\n// Usage examples\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(x => x % 2 === 0); // [2, 4, 6]\n\n// With thisArg\nconst context = { min: 3 };\nconst filtered = numbers.filter(function(x) {\n  return x > this.min;\n}, context); // [4, 5, 6]\n\n// Filtering objects\nconst users = [\n  { id: 1, active: true },\n  { id: 2, active: false },\n  { id: 3, active: true }\n];\nconst activeUsers = users.filter(user => user.active);\n// [{ id: 1, active: true }, { id: 3, active: true }]\n\n// Edge cases\nconst sparseArray = [1, , 3, , 5];\nconst filteredSparse = sparseArray.filter(x => x > 2); // [3, 5]\n```\n\n**Implementation Notes:**\n- Only includes elements where callback returns truthy values\n- Maintains order of original elements\n- Handles sparse arrays by skipping empty slots\n- Supports thisArg for custom context\n- Returns new array without modifying original"
  },
  {
    question: "Implement a polyfill for Array.prototype.reduce()",
    idealAnswer: "**Array.prototype.reduce() Polyfill:**\n\n```javascript\nif (!Array.prototype.reduce) {\n  Array.prototype.reduce = function(callback, initialValue) {\n    // Validate callback\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n    \n    const O = Object(this);\n    const len = O.length >>> 0;\n    \n    // Handle empty array with no initial value\n    if (len === 0 && arguments.length < 2) {\n      throw new TypeError('Reduce of empty array with no initial value');\n    }\n    \n    let k = 0;\n    let accumulator;\n    \n    // Set initial accumulator\n    if (arguments.length >= 2) {\n      accumulator = initialValue;\n    } else {\n      // Find first existing element in sparse array\n      while (k < len && !(k in O)) {\n        k++;\n      }\n      if (k >= len) {\n        throw new TypeError('Reduce of empty array with no initial value');\n      }\n      accumulator = O[k++];\n    }\n    \n    // Iterate through remaining elements\n    while (k < len) {\n      if (k in O) {\n        accumulator = callback.call(undefined, accumulator, O[k], k, O);\n      }\n      k++;\n    }\n    \n    return accumulator;\n  };\n}\n\n// Usage examples\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, val) => acc + val, 0); // 15\nconst product = numbers.reduce((acc, val) => acc * val); // 120\n\n// Without initial value\nconst total = numbers.reduce((acc, val) => acc + val); // 15\n\n// Finding max\nconst max = numbers.reduce((acc, val) => Math.max(acc, val)); // 5\n\n// Grouping objects\nconst people = [\n  { name: 'Alice', age: 25 },\n  { name: 'Bob', age: 30 },\n  { name: 'Charlie', age: 25 }\n];\n\nconst groupedByAge = people.reduce((acc, person) => {\n  const age = person.age;\n  if (!acc[age]) acc[age] = [];\n  acc[age].push(person);\n  return acc;\n}, {});\n// { 25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],\n//   30: [{ name: 'Bob', age: 30 }] }\n\n// Edge case: empty array\n// [].reduce(() => {}, 0) // 0 (with initial value)\n// [].reduce(() => {}) // TypeError (no initial value)\n```\n\n**Key Features:**\n- Handles both with and without initial value\n- Throws appropriate errors for edge cases\n- Correctly processes sparse arrays\n- Uses first element as accumulator when no initial value provided"
  },
  {
    question: "Implement a polyfill for Array.prototype.forEach()",
    idealAnswer: "**Array.prototype.forEach() Polyfill:**\n\n```javascript\nif (!Array.prototype.forEach) {\n  Array.prototype.forEach = function(callback, thisArg) {\n    // Validate callback\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n    \n    const O = Object(this);\n    const len = O.length >>> 0;\n    \n    for (let k = 0; k < len; k++) {\n      if (k in O) {\n        callback.call(thisArg, O[k], k, O);\n      }\n    }\n  };\n}\n\n// Usage examples\nconst fruits = ['apple', 'banana', 'orange'];\nfruits.forEach((fruit, index) => {\n  console.log(`${index}: ${fruit}`);\n});\n// 0: apple\n// 1: banana\n// 2: orange\n\n// With thisArg\nconst obj = { prefix: 'Fruit: ' };\nfruits.forEach(function(fruit) {\n  console.log(this.prefix + fruit);\n}, obj);\n// Fruit: apple\n// Fruit: banana\n// Fruit: orange\n\n// Modifying array during iteration\nconst numbers = [1, 2, 3, 4];\nnumbers.forEach((num, index, arr) => {\n  arr[index] = num * 2;\n});\nconsole.log(numbers); // [2, 4, 6, 8]\n\n// Sparse arrays\nconst sparse = [1, , 3];\nsparse.forEach(x => console.log(x)); // 1, 3 (skips empty)\n\n// Early termination (not possible with forEach)\n// Use for...of or some() instead for early exit\n```\n\n**Implementation Details:**\n- Always returns undefined\n- Cannot be broken out of (use for...of for that)\n- Supports thisArg for custom context\n- Handles sparse arrays correctly\n- Allows modification of the array during iteration"
  },
  {
    question: "Implement a polyfill for Array.prototype.find()",
    idealAnswer: "**Array.prototype.find() Polyfill:**\n\n```javascript\nif (!Array.prototype.find) {\n  Array.prototype.find = function(callback, thisArg) {\n    // Validate callback\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n    \n    const O = Object(this);\n    const len = O.length >>> 0;\n    \n    for (let k = 0; k < len; k++) {\n      if (k in O) {\n        const kValue = O[k];\n        // Return first element that satisfies condition\n        if (callback.call(thisArg, kValue, k, O)) {\n          return kValue;\n        }\n      }\n    }\n    \n    // Return undefined if no element found\n    return undefined;\n  };\n}\n\n// Usage examples\nconst numbers = [1, 2, 3, 4, 5];\nconst firstEven = numbers.find(x => x % 2 === 0); // 2\nconst firstGreaterThan3 = numbers.find(x => x > 3); // 4\nconst notFound = numbers.find(x => x > 10); // undefined\n\n// Finding objects\nconst users = [\n  { id: 1, name: 'Alice', active: false },\n  { id: 2, name: 'Bob', active: true },\n  { id: 3, name: 'Charlie', active: true }\n];\n\nconst activeUser = users.find(user => user.active);\n// { id: 2, name: 'Bob', active: true }\n\nconst userById = users.find(user => user.id === 3);\n// { id: 3, name: 'Charlie', active: true }\n\n// With thisArg\nconst context = { minId: 2 };\nconst foundUser = users.find(function(user) {\n  return user.id > this.minId;\n}, context);\n// { id: 3, name: 'Charlie', active: true }\n\n// Sparse arrays\nconst sparse = [1, , 3, , 5];\nconst found = sparse.find(x => x > 2); // 3\n\n// Complex search\nconst products = [\n  { name: 'Laptop', price: 999, inStock: true },\n  { name: 'Phone', price: 699, inStock: false },\n  { name: 'Tablet', price: 299, inStock: true }\n];\n\nconst affordableProduct = products.find(product => \n  product.price < 500 && product.inStock\n);\n// { name: 'Tablet', price: 299, inStock: true }\n```\n\n**Key Points:**\n- Returns first matching element or undefined\n- Stops searching once match is found (efficient)\n- Supports thisArg parameter\n- Handles sparse arrays correctly\n- Different from filter() which returns all matches"
  },
  {
    question: "Implement a polyfill for Array.prototype.includes()",
    idealAnswer: "**Array.prototype.includes() Polyfill:**\n\n```javascript\nif (!Array.prototype.includes) {\n  Array.prototype.includes = function(searchElement, fromIndex) {\n    // Handle fromIndex (default: 0)\n    const len = this.length >>> 0;\n    const from = fromIndex >>> 0; // Convert to integer\n    \n    let k = from;\n    \n    // Handle negative fromIndex\n    if (from < 0) {\n      k = Math.max(len + from, 0);\n    }\n    \n    // Search for element\n    for (; k < len; k++) {\n      if (k in this && this[k] === searchElement) {\n        return true;\n      }\n    }\n    \n    return false;\n  };\n}\n\n// Usage examples\nconst fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits.includes('banana')); // true\nconsole.log(fruits.includes('grape')); // false\n\n// With fromIndex\nconsole.log(fruits.includes('orange', 1)); // true (search from index 1)\nconsole.log(fruits.includes('apple', 1)); // false (search from index 1)\nconsole.log(fruits.includes('orange', 2)); // true (search from index 2)\nconsole.log(fruits.includes('orange', 3)); // false (index out of bounds)\n\n// Negative fromIndex\nconsole.log(fruits.includes('banana', -1)); // false (start from last element)\nconsole.log(fruits.includes('banana', -2)); // true (start from second to last)\nconsole.log(fruits.includes('apple', -3)); // true (start from third to last)\nconsole.log(fruits.includes('apple', -4)); // true (start before first element)\n\n// Number comparisons\nconst numbers = [1, 2, 3, NaN];\nconsole.log(numbers.includes(2)); // true\nconsole.log(numbers.includes(NaN)); // true (NaN equality check)\nconsole.log(numbers.includes(4)); // false\n\n// Difference from indexOf\nconsole.log([NaN].indexOf(NaN)); // -1 (indexOf uses strict equality)\nconsole.log([NaN].includes(NaN)); // true (includes handles NaN specially)\n\n// Sparse arrays\nconst sparse = [1, , 3];\nconsole.log(sparse.includes(undefined)); // false (empty slots are not undefined)\nconsole.log(sparse.includes(1)); // true\nconsole.log(sparse.includes(3)); // true\n\n// Edge cases\nconsole.log([].includes()); // false\nconsole.log([undefined].includes()); // false\nconsole.log([undefined].includes(undefined)); // true\n```\n\n**Implementation Notes:**\n- Uses SameValueZero algorithm (handles NaN correctly)\n- Supports fromIndex parameter (positive and negative)\n- Handles sparse arrays correctly\n- Returns boolean (unlike indexOf which returns index)\n- More reliable than indexOf for checking existence"
  },
  {
    question: "Implement a polyfill for Object.create()",
    idealAnswer: "**Object.create() Polyfill:**\n\n```javascript\nif (typeof Object.create !== 'function') {\n  Object.create = function(proto, propertiesObject) {\n    // Handle null prototype\n    if (proto === null) {\n      // Create object with no prototype\n      const obj = {};\n      obj.__proto__ = null;\n      return obj;\n    }\n    \n    // Type checking\n    if (typeof proto !== 'object' && typeof proto !== 'function') {\n      throw new TypeError('Object prototype may only be an Object or null');\n    }\n    \n    // Create temporary constructor\n    function Temp() {}\n    Temp.prototype = proto;\n    \n    const result = new Temp();\n    \n    // Set constructor property\n    if (proto.hasOwnProperty('constructor')) {\n      result.constructor = proto.constructor;\n    }\n    \n    // Add properties if provided\n    if (propertiesObject !== undefined) {\n      Object.defineProperties(result, propertiesObject);\n    }\n    \n    return result;\n  };\n}\n\n// Usage examples\n// Basic inheritance\nconst person = {\n  name: 'Default',\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n};\n\nconst john = Object.create(person);\njohn.name = 'John';\nconsole.log(john.greet()); // 'Hello, I'm John'\nconsole.log(john.__proto__ === person); // true\n\n// With properties object\nconst employee = Object.create(person, {\n  id: {\n    value: 123,\n    enumerable: true,\n    writable: true,\n    configurable: true\n  },\n  department: {\n    value: 'Engineering',\n    enumerable: true\n  }\n});\n\nconsole.log(employee.id); // 123\nconsole.log(employee.department); // 'Engineering'\nconsole.log(employee.greet()); // 'Hello, I'm Default'\n\n// Null prototype (no inheritance)\nconst cleanObj = Object.create(null);\ncleanObj.key = 'value';\nconsole.log(cleanObj.key); // 'value'\nconsole.log(cleanObj.toString); // undefined (no Object methods)\n\n// Creating inheritance chains\nconst animal = {\n  breathe() {\n    console.log('Breathing...');\n  }\n};\n\nconst mammal = Object.create(animal, {\n  warmBlooded: {\n    value: true,\n    enumerable: true\n  }\n});\n\nconst dog = Object.create(mammal, {\n  bark: {\n    value: function() {\n      console.log('Woof!');\n    },\n    enumerable: true\n  }\n});\n\ndog.breathe(); // 'Breathing...'\ndog.bark(); // 'Woof!'\nconsole.log(dog.warmBlooded); // true\n```\n\n**Key Features:**\n- Creates object with specified prototype\n- Supports properties object with descriptors\n- Handles null prototype correctly\n- Maintains prototype chain\n- Used for prototypal inheritance pattern"
  },
  {
    question: "Implement a polyfill for Object.assign()",
    idealAnswer: "**Object.assign() Polyfill:**\n\n```javascript\nif (typeof Object.assign !== 'function') {\n  Object.assign = function(target, ...sources) {\n    // Handle null/undefined target\n    if (target === null || target === undefined) {\n      throw new TypeError('Cannot convert undefined or null to object');\n    }\n    \n    // Convert target to object\n    const to = Object(target);\n    \n    for (let index = 0; index < sources.length; index++) {\n      const nextSource = sources[index];\n      \n      // Skip null/undefined sources\n      if (nextSource !== null && nextSource !== undefined) {\n        const from = Object(nextSource);\n        \n        // Copy own enumerable properties\n        for (const nextKey in from) {\n          if (Object.prototype.hasOwnProperty.call(from, nextKey)) {\n            to[nextKey] = from[nextKey];\n          }\n        }\n        \n        // Copy symbol properties (ES6+)\n        if (Object.getOwnPropertySymbols) {\n          const symbols = Object.getOwnPropertySymbols(from);\n          for (let i = 0; i < symbols.length; i++) {\n            const symbol = symbols[i];\n            if (Object.prototype.propertyIsEnumerable.call(from, symbol)) {\n              to[symbol] = from[symbol];\n            }\n          }\n        }\n      }\n    }\n    \n    return to;\n  };\n}\n\n// Usage examples\n// Basic copying\nconst target = { a: 1, b: 2 };\nconst source = { b: 3, c: 4 };\nconst result = Object.assign(target, source);\nconsole.log(result); // { a: 1, b: 3, c: 4 }\nconsole.log(target === result); // true (modifies target)\n\n// Multiple sources\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst obj3 = { c: 3 };\nconst merged = Object.assign({}, obj1, obj2, obj3);\nconsole.log(merged); // { a: 1, b: 2, c: 3 }\n\n// Cloning objects\nconst original = { x: 1, y: 2 };\nconst clone = Object.assign({}, original);\nconsole.log(clone); // { x: 1, y: 2 }\nconsole.log(clone === original); // false\n\n// Merging with default values\nconst defaults = { theme: 'light', fontSize: 16, language: 'en' };\nconst userSettings = { fontSize: 18, language: 'es' };\nconst finalSettings = Object.assign({}, defaults, userSettings);\nconsole.log(finalSettings);\n// { theme: 'light', fontSize: 18, language: 'es' }\n\n// Handling null/undefined\nconst obj = { a: 1 };\nObject.assign(obj, null, undefined, { b: 2 });\nconsole.log(obj); // { a: 1, b: 2 } (null/undefined ignored)\n\n// Property descriptors (shallow copy)\nconst source = {\n  x: 1,\n  get y() { return 2; }\n};\nconst target = {};\nObject.assign(target, source);\nconsole.log(target); // { x: 1, y: 2 } (getter becomes value)\n\n// Symbol properties\nconst symbol = Symbol('id');\nconst objWithSymbol = { [symbol]: 123, normal: 'property' };\nconst copied = Object.assign({}, objWithSymbol);\nconsole.log(copied[symbol]); // 123\nconsole.log(copied.normal); // 'property'\n\n// Edge case: primitive target\nconst strTarget = Object.assign('hello', { a: 1 });\nconsole.log(strTarget); // String { 0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', a: 1 }\n```\n\n**Important Notes:**\n- Performs shallow copy (nested objects are referenced)\n- Modifies the target object and returns it\n- Copies own enumerable properties only\n- Later sources overwrite earlier ones\n- Handles symbol properties in ES6+\n- Throws error for null/undefined target"
  },
  {
    question: "Implement a polyfill for Function.prototype.bind()",
    idealAnswer: "**Function.prototype.bind() Polyfill:**\n\n```javascript\nif (!Function.prototype.bind) {\n  Function.prototype.bind = function(context, ...boundArgs) {\n    // Check if this is a function\n    if (typeof this !== 'function') {\n      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');\n    }\n    \n    const fn = this;\n    \n    function BoundFunction(...args) {\n      // Check if called with new\n      if (new.target) {\n        // Called as constructor\n        return fn.apply(this, boundArgs.concat(args));\n      } else {\n        // Called as function\n        return fn.apply(context, boundArgs.concat(args));\n      }\n    }\n    \n    // Maintain prototype chain\n    if (fn.prototype) {\n      BoundFunction.prototype = Object.create(fn.prototype);\n    }\n    \n    return BoundFunction;\n  };\n}\n\n// Usage examples\n// Basic binding\nconst person = {\n  name: 'John',\n  greet(greeting) {\n    return `${greeting}, I'm ${this.name}`;\n  }\n};\n\nconst greet = person.greet;\nconsole.log(greet('Hello')); // undefined (this lost)\n\nconst boundGreet = greet.bind(person);\nconsole.log(boundGreet('Hello')); // 'Hello, I'm John'\n\n// Partial application\nfunction multiply(a, b) {\n  return a * b;\n}\n\nconst double = multiply.bind(null, 2);\nconsole.log(double(5)); // 10\nconsole.log(double(10)); // 20\n\nconst triple = multiply.bind(null, 3);\nconsole.log(triple(4)); // 12\n\n// Constructor usage\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.describe = function() {\n  return `${this.name} is ${this.age} years old`;\n};\n\nconst BoundPerson = Person.bind(null, 'Alice');\nconst alice = new BoundPerson(25);\nconsole.log(alice.name); // 'Alice'\nconsole.log(alice.age); // 25\nconsole.log(alice.describe()); // 'Alice is 25 years old'\nconsole.log(alice instanceof Person); // true\nconsole.log(alice instanceof BoundPerson); // true\n\n// Method borrowing\nconst obj1 = {\n  x: 10,\n  getX() {\n    return this.x;\n  }\n};\n\nconst obj2 = { x: 20 };\nconst getXFromObj2 = obj1.getX.bind(obj2);\nconsole.log(getXFromObj2()); // 20\n\n// Event handlers\nclass Counter {\n  constructor() {\n    this.count = 0;\n    this.button = document.createElement('button');\n    this.button.textContent = 'Click me';\n    \n    // Without bind, 'this' would be the button\n    this.button.addEventListener('click', this.handleClick.bind(this));\n  }\n  \n  handleClick() {\n    this.count++;\n    console.log('Count:', this.count);\n  }\n}\n\n// Arrow function alternative (no bind needed)\nclass ModernCounter {\n  constructor() {\n    this.count = 0;\n    this.handleClick = () => {\n      this.count++;\n      console.log('Count:', this.count);\n    };\n  }\n}\n```\n\n**Key Implementation Details:**\n- Preserves function's prototype for constructor usage\n- Handles both function calls and constructor calls with new\n- Supports partial application with pre-bound arguments\n- Maintains proper this binding\n- Throws TypeError for non-function contexts"
  },
  {
    question: "Implement a polyfill for Promise.all()",
    idealAnswer: "**Promise.all() Polyfill:**\n\n```javascript\nif (!Promise.all) {\n  Promise.all = function(promises) {\n    return new Promise((resolve, reject) => {\n      // Handle non-iterable input\n      if (typeof promises[Symbol.iterator] !== 'function') {\n        return reject(new TypeError('Promise.all requires an iterable'));\n      }\n      \n      const promisesArray = Array.from(promises);\n      const results = new Array(promisesArray.length);\n      let completed = 0;\n      \n      // Handle empty iterable\n      if (promisesArray.length === 0) {\n        return resolve([]);\n      }\n      \n      promisesArray.forEach((promise, index) => {\n        // Convert non-promise values to promises\n        Promise.resolve(promise).then(\n          value => {\n            results[index] = value;\n            completed++;\n            \n            // Resolve when all promises complete\n            if (completed === promisesArray.length) {\n              resolve(results);\n            }\n          },\n          // Reject immediately on first error\n          error => {\n            reject(error);\n          }\n        );\n      });\n    });\n  };\n}\n\n// Usage examples\n// All promises resolve\nconst promise1 = Promise.resolve(1);\nconst promise2 = Promise.resolve(2);\nconst promise3 = Promise.resolve(3);\n\nPromise.all([promise1, promise2, promise3])\n  .then(results => console.log(results)) // [1, 2, 3]\n  .catch(error => console.error(error));\n\n// Mixed values and promises\nPromise.all([1, Promise.resolve(2), 3])\n  .then(results => console.log(results)) // [1, 2, 3]\n  .catch(error => console.error(error));\n\n// One promise rejects\nconst success1 = Promise.resolve('success');\nconst failure = Promise.reject('error');\nconst success2 = Promise.resolve('success');\n\nPromise.all([success1, failure, success2])\n  .then(results => console.log(results)) // Never called\n  .catch(error => console.error(error)); // 'error'\n\n// Real-world example: multiple API calls\nfunction fetchUsers() {\n  return Promise.all([\n    fetch('/api/users/1').then(r => r.json()),\n    fetch('/api/users/2').then(r => r.json()),\n    fetch('/api/users/3').then(r => r.json())\n  ]).then(users => {\n    console.log('All users loaded:', users);\n    return users;\n  });\n}\n\n// Parallel file reading (Node.js)\nconst fs = require('fs').promises;\n\nfunction readAllFiles(filePaths) {\n  const filePromises = filePaths.map(path => fs.readFile(path, 'utf8'));\n  return Promise.all(filePromises);\n}\n\nreadAllFiles(['file1.txt', 'file2.txt', 'file3.txt'])\n  .then(contents => {\n    console.log('File contents:', contents);\n  })\n  .catch(error => {\n    console.error('Error reading files:', error);\n  });\n\n// Empty iterable\nPromise.all([])\n  .then(results => console.log(results)); // []\n\n// Non-iterable input\nPromise.all(123)\n  .then(results => console.log(results))\n  .catch(error => console.error(error)); // TypeError\n\n// Promise that resolves after delay\nconst delayedPromises = [\n  new Promise(resolve => setTimeout(() => resolve('A'), 100)),\n  new Promise(resolve => setTimeout(() => resolve('B'), 200)),\n  new Promise(resolve => setTimeout(() => resolve('C'), 50))\n];\n\nPromise.all(delayedPromises)\n  .then(results => console.log(results)); // ['A', 'B', 'C'] after 200ms\n```\n\n**Key Features:**\n- Resolves when all promises resolve\n- Rejects immediately when any promise rejects\n- Maintains order of results matching input order\n- Converts non-promise values to promises\n- Handles empty iterable (resolves with empty array)\n- Rejects with TypeError for non-iterable input"
  },
  {
    question: "Implement a polyfill for Promise.race()",
    idealAnswer: "**Promise.race() Polyfill:**\n\n```javascript\nif (!Promise.race) {\n  Promise.race = function(promises) {\n    return new Promise((resolve, reject) => {\n      // Handle non-iterable input\n      if (typeof promises[Symbol.iterator] !== 'function') {\n        return reject(new TypeError('Promise.race requires an iterable'));\n      }\n      \n      const promisesArray = Array.from(promises);\n      \n      // Handle empty iterable\n      if (promisesArray.length === 0) {\n        // Promise.race with empty iterable never settles\n        return;\n      }\n      \n      promisesArray.forEach(promise => {\n        // Convert non-promise values to promises\n        Promise.resolve(promise).then(\n          // Resolve with first promise that resolves\n          value => resolve(value),\n          // Reject with first promise that rejects\n          error => reject(error)\n        );\n      });\n    });\n  };\n}\n\n// Usage examples\n// First promise to resolve wins\nconst promise1 = new Promise(resolve => \n  setTimeout(() => resolve('First'), 100)\n);\nconst promise2 = new Promise(resolve => \n  setTimeout(() => resolve('Second'), 200)\n);\nconst promise3 = new Promise(resolve => \n  setTimeout(() => resolve('Third'), 50)\n);\n\nPromise.race([promise1, promise2, promise3])\n  .then(winner => console.log(winner)) // 'Third' (fastest)\n  .catch(error => console.error(error));\n\n// First rejection wins\nconst success = new Promise(resolve => \n  setTimeout(() => resolve('Success'), 200)\n);\nconst failure = new Promise((_, reject) => \n  setTimeout(() => reject('Failure'), 100)\n);\n\nPromise.race([success, failure])\n  .then(result => console.log(result)) // Never called\n  .catch(error => console.error(error)); // 'Failure'\n\n// Mixed values and promises\nPromise.race([\n  'immediate', // Non-promise value\n  new Promise(resolve => setTimeout(() => resolve('delayed'), 100))\n])\n  .then(winner => console.log(winner)); // 'immediate'\n\n// Real-world example: timeout pattern\nfunction fetchWithTimeout(url, timeout = 5000) {\n  const fetchPromise = fetch(url);\n  const timeoutPromise = new Promise((_, reject) => {\n    setTimeout(() => reject(new Error('Request timeout')), timeout);\n  });\n  \n  return Promise.race([fetchPromise, timeoutPromise]);\n}\n\nfetchWithTimeout('/api/data', 3000)\n  .then(response => response.json())\n  .then(data => console.log('Data:', data))\n  .catch(error => {\n    if (error.message === 'Request timeout') {\n      console.log('Request took too long');\n    } else {\n      console.error('Fetch error:', error);\n    }\n  });\n\n// Race between multiple sources\nfunction getFirstAvailableData() {\n  const sources = [\n    fetch('/api/primary').then(r => r.json()),\n    fetch('/api/secondary').then(r => r.json()),\n    fetch('/api/backup').then(r => r.json())\n  ];\n  \n  return Promise.race(sources);\n}\n\ngetFirstAvailableData()\n  .then(data => console.log('First available data:', data))\n  .catch(error => console.error('All sources failed:', error));\n\n// Caching pattern\nfunction getCachedOrFresh(key, freshDataPromise) {\n  const cachedPromise = new Promise(resolve => {\n    // Simulate cache lookup\n    setTimeout(() => {\n      const cached = localStorage.getItem(key);\n      if (cached) {\n        resolve(JSON.parse(cached));\n      } else {\n        resolve(null); // Cache miss\n      }\n    }, 10);\n  });\n  \n  return Promise.race([cachedPromise, freshDataPromise])\n    .then(result => {\n      if (result === null) {\n        // Cache miss, wait for fresh data\n        return freshDataPromise.then(data => {\n          localStorage.setItem(key, JSON.stringify(data));\n          return data;\n        });\n      }\n      return result; // Cache hit\n    });\n}\n\n// Empty iterable (never settles)\nconst neverSettles = Promise.race([]);\n// This promise will never resolve or reject\n\n// Non-iterable input\nPromise.race(123)\n  .then(result => console.log(result))\n  .catch(error => console.error(error)); // TypeError\n```\n\n**Key Features:**\n- Settles with the first promise that settles (resolve or reject)\n- Doesn't wait for other promises after first settlement\n- Converts non-promise values to promises\n- Empty iterable creates a promise that never settles\n- Useful for timeout patterns and competing operations"
  },
  {
    question: "Create a curry function that transforms a function to support currying like add(1,2,3) or add(1)(2)(3)",
    idealAnswer: "**Curry Function Implementation:**\n\n```javascript\nfunction curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return function(...moreArgs) {\n      return curried.apply(this, args.concat(moreArgs));\n    };\n  };\n}\n\n// Usage with add function\nfunction add(a, b, c) {\n  return a + b + c;\n}\n\nconst curriedAdd = curry(add);\n\nconsole.log(curriedAdd(1, 2, 3)); // 6\nconsole.log(curriedAdd(1)(2, 3)); // 6\nconsole.log(curriedAdd(1)(2)(3)); // 6\n```\n\n**Advanced Curry with Placeholder:**\n```javascript\nfunction curry(fn, placeholder = '_') {\n  return function curried(...args) {\n    const completeArgs = [];\n    let argsIndex = 0;\n    \n    // Fill in arguments, handling placeholders\n    for (let i = 0; i < fn.length; i++) {\n      if (argsIndex < args.length && args[argsIndex] !== placeholder) {\n        completeArgs[i] = args[argsIndex];\n      }\n      argsIndex++;\n    }\n    \n    // Check if we have all non-placeholder arguments\n    if (completeArgs.filter(arg => arg !== undefined).length === fn.length) {\n      return fn.apply(this, completeArgs);\n    }\n    \n    return function(...moreArgs) {\n      return curried(...args, ...moreArgs);\n    };\n  };\n}\n\n// Usage with placeholder\nconst curriedAdd = curry(add);\nconsole.log(curriedAdd('_', 2, 3)(1)); // 6\nconsole.log(curriedAdd(1, '_', 3)(2)); // 6\n```"
  },
  {
    question: "Implement a pipe function that composes functions left to right: pipe(add1, multiply2, subtract3)(5)",
    idealAnswer: "**Pipe Function Implementation:**\n\n```javascript\nfunction pipe(...fns) {\n  return function(arg) {\n    return fns.reduce((acc, fn) => fn(acc), arg);\n  };\n}\n\n// Helper functions\nconst add1 = x => x + 1;\nconst multiply2 = x => x * 2;\nconst subtract3 = x => x - 3;\n\n// Usage\nconst pipeline = pipe(add1, multiply2, subtract3);\nconsole.log(pipeline(5)); // (5 + 1) * 2 - 3 = 9\n\n// Async pipe for promises\nfunction asyncPipe(...fns) {\n  return async function(arg) {\n    let result = arg;\n    for (const fn of fns) {\n      result = await fn(result);\n    }\n    return result;\n  };\n}\n\n// Usage with async functions\nconst fetchUser = async id => ({ id, name: 'John' });\nconst transformUser = user => ({ ...user, fullName: user.name });\nconst saveUser = async user => ({ ...user, saved: true });\n\nconst userPipeline = asyncPipe(fetchUser, transformUser, saveUser);\n```\n\n**Advanced Pipe with Error Handling:**\n```javascript\nfunction pipeWithFallback(...fns) {\n  return function(arg, fallback = null) {\n    try {\n      return fns.reduce((acc, fn) => fn(acc), arg);\n    } catch (error) {\n      console.error('Pipeline error:', error);\n      return fallback;\n    }\n  };\n}\n\n// Usage\nconst safePipeline = pipeWithFallback(\n  x => { if (x < 0) throw new Error('Negative'); return x; },\n  x => x * 2\n);\n\nconsole.log(safePipeline(5, 0)); // 10\nconsole.log(safePipeline(-1, 0)); // 0 (fallback)\n```"
  },
  {
    question: "Create a debounce function that can be called immediately: debounce(fn, 300, { leading: true })",
    idealAnswer: "**Advanced Debounce with Options:**\n\n```javascript\nfunction debounce(func, wait, options = {}) {\n  const { leading = false, trailing = true, maxWait } = options;\n  let timeoutId;\n  let maxTimeoutId;\n  let lastCallTime = 0;\n  let lastInvokeTime = 0;\n  \n  function invokeFunc(time) {\n    const args = lastArgs;\n    const thisArg = lastThis;\n    \n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    return func.apply(thisArg, args);\n  }\n  \n  function shouldInvoke(time) {\n    const timeSinceLastCall = time - lastCallTime;\n    const timeSinceLastInvoke = time - lastInvokeTime;\n    \n    return (lastCallTime === 0 || timeSinceLastCall >= wait ||\n            timeSinceLastCall < 0 || (maxWait && timeSinceLastInvoke >= maxWait));\n  }\n  \n  function trailingEdge(time) {\n    timeoutId = undefined;\n    \n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n  }\n  \n  function timerExpired() {\n    const time = Date.now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer\n    timeoutId = setTimeout(timerExpired, remainingWait(time));\n  }\n  \n  function remainingWait(time) {\n    const timeSinceLastCall = time - lastCallTime;\n    const timeWaiting = wait - timeSinceLastCall;\n    \n    return maxWait ? Math.min(timeWaiting, maxWait - (time - lastInvokeTime)) : timeWaiting;\n  }\n  \n  function debounced(...args) {\n    const time = Date.now();\n    const isInvoking = shouldInvoke(time);\n    \n    lastArgs = args;\n    lastThis = this;\n    lastCallTime = time;\n    \n    if (isInvoking) {\n      if (timeoutId === undefined) {\n        return leading ? invokeFunc(time) : result;\n      }\n      if (maxWait) {\n        timeoutId = setTimeout(timerExpired, wait);\n        return invokeFunc(time);\n      }\n    }\n    \n    if (timeoutId === undefined) {\n      timeoutId = setTimeout(timerExpired, wait);\n    }\n    \n    return result;\n  }\n  \n  debounced.cancel = function() {\n    if (timeoutId !== undefined) {\n      clearTimeout(timeoutId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timeoutId = undefined;\n  };\n  \n  debounced.flush = function() {\n    return timeoutId === undefined ? result : trailingEdge(Date.now());\n  };\n  \n  return debounced;\n}\n\n// Usage\nconst debouncedLog = debounce(console.log, 300, { leading: true });\ndebouncedLog('Immediate'); // Logs immediately\ndebouncedLog('Delayed'); // Only logs after 300ms of no calls\n```"
  },
  {
    question: "Implement a memoization function that handles multiple arguments and cache size limits with TTL",
    idealAnswer: "**Advanced Memoization with Multi-Argument Support:**\n\n```javascript\nfunction memoize(fn, options = {}) {\n  const { maxSize = 100, ttl = 0, keyGenerator = (...args) => JSON.stringify(args) } = options;\n  const cache = new Map();\n  const timestamps = new Map();\n  \n  return function(...args) {\n    const key = keyGenerator(...args);\n    const now = Date.now();\n    \n    // Check cache with TTL\n    if (cache.has(key)) {\n      if (ttl === 0 || (now - timestamps.get(key)) < ttl) {\n        // Move to end (LRU)\n        const value = cache.get(key);\n        cache.delete(key);\n        cache.set(key, value);\n        timestamps.set(key, now);\n        return value;\n      }\n      // Expired, remove from cache\n      cache.delete(key);\n      timestamps.delete(key);\n    }\n    \n    // Check cache size limit\n    if (cache.size >= maxSize) {\n      const oldestKey = cache.keys().next().value;\n      cache.delete(oldestKey);\n      timestamps.delete(oldestKey);\n    }\n    \n    // Compute and cache\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    timestamps.set(key, now);\n    \n    return result;\n  };\n}\n\n// Usage with complex function\nfunction complexCalculation(a, b, c) {\n  console.log('Computing...');\n  return a * b + c;\n}\n\nconst memoizedCalc = memoize(complexCalculation, { maxSize: 50, ttl: 60000 });\n\nconsole.log(memoizedCalc(2, 3, 4)); // Computing..., 10\nconsole.log(memoizedCalc(2, 3, 4)); // 10 (from cache)\n```\n\n**Memoization with WeakMap for Objects:**\n```javascript\nfunction memoizeWeak(fn) {\n  const cache = new WeakMap();\n  \n  return function(obj) {\n    if (cache.has(obj)) {\n      return cache.get(obj);\n    }\n    \n    const result = fn.call(this, obj);\n    cache.set(obj, result);\n    return result;\n  };\n}\n\n// Usage - automatically cleans up when objects are garbage collected\nconst memoizedProcess = memoizeWeak(obj => {\n  return Object.keys(obj).length;\n});\n```"
  },
  {
    question: "Create a compose function that works right-to-left like in functional programming: compose(f, g, h)(x)",
    idealAnswer: "**Function Composition Implementation:**\n\n```javascript\nfunction compose(...fns) {\n  return function(arg) {\n    return fns.reduceRight((acc, fn) => fn(acc), arg);\n  };\n}\n\n// Alternative using recursion\nfunction composeRecursive(...fns) {\n  return function(arg) {\n    if (fns.length === 0) return arg;\n    const [last, ...rest] = fns.reverse();\n    return rest.reduce((acc, fn) => fn(acc), last(arg));\n  };\n}\n\n// Helper functions\nconst add5 = x => x + 5;\nconst multiply2 = x => x * 2;\nconst subtract3 = x => x - 3;\n\n// Usage: h(g(f(x))) - right to left\nconst pipeline = compose(subtract3, multiply2, add5);\nconsole.log(pipeline(10)); // ((10 + 5) * 2) - 3 = 27\n\n// Async compose\nfunction composeAsync(...fns) {\n  return async function(arg) {\n    let result = arg;\n    for (let i = fns.length - 1; i >= 0; i--) {\n      result = await fns[i](result);\n    }\n    return result;\n  };\n}\n\n// Compose with debugging\nfunction composeWithDebug(...fns) {\n  return function(arg) {\n    return fns.reduceRight((acc, fn, index) => {\n      const result = fn(acc);\n      console.log(`Step ${fns.length - index}: ${fn.name || 'anonymous'}(${acc}) = ${result}`);\n      return result;\n    }, arg);\n  };\n}\n\nconst debugPipeline = composeWithDebug(subtract3, multiply2, add5);\ndebugPipeline(10);\n// Step 1: add5(10) = 15\n// Step 2: multiply2(15) = 30\n// Step 3: subtract3(30) = 27\n```"
  },
  {
    question: "Implement a partial application function that pre-fills arguments: partial(fn, 1, 2)(3, 4)",
    idealAnswer: "**Partial Application Implementation:**\n\n```javascript\nfunction partial(fn, ...presetArgs) {\n  return function(...laterArgs) {\n    return fn.apply(this, [...presetArgs, ...laterArgs]);\n  };\n}\n\n// Advanced partial with placeholder support\nfunction partialWithPlaceholder(fn, placeholder = '_', ...args) {\n  return function(...moreArgs) {\n    const finalArgs = [];\n    let argIndex = 0;\n    let moreArgIndex = 0;\n    \n    for (let i = 0; i < fn.length; i++) {\n      if (argIndex < args.length && args[argIndex] !== placeholder) {\n        finalArgs[i] = args[argIndex];\n      } else if (moreArgIndex < moreArgs.length) {\n        finalArgs[i] = moreArgs[moreArgIndex++];\n      }\n      argIndex++;\n    }\n    \n    return fn.apply(this, finalArgs);\n  };\n}\n\n// Usage examples\nfunction add(a, b, c, d) {\n  return a + b + c + d;\n}\n\nconst add1And2 = partial(add, 1, 2);\nconsole.log(add1And2(3, 4)); // 10\n\nconst add1And3 = partialWithPlaceholder(add, '_', 3, '_');\nconsole.log(add1And3(1, 2, 4)); // 10 (1 + 2 + 3 + 4)\n\n// Real-world example\nconst fetchWithTimeout = partial(fetch, { timeout: 5000 });\nconst fetchJSON = partialWithPlaceholder(\n  (url, options) => fetch(url, options).then(r => r.json()),\n  '_'\n);\n\n// Chain partial applications\nconst fetchJSONWithTimeout = partial(fetchJSON, { timeout: 5000 });\n```"
  },
  {
    question: "Create a throttle function that guarantees execution at intervals: throttle(fn, 1000)",
    idealAnswer: "**Advanced Throttle Implementation:**\n\n```javascript\nfunction throttle(func, wait, options = {}) {\n  const { leading = true, trailing = false } = options;\n  let timeoutId;\n  let lastCallTime = 0;\n  let lastInvokeTime = 0;\n  \n  function invokeFunc(time) {\n    const args = lastArgs;\n    const thisArg = lastThis;\n    \n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    return func.apply(thisArg, args);\n  }\n  \n  function shouldInvoke(time) {\n    const timeSinceLastCall = time - lastCallTime;\n    const timeSinceLastInvoke = time - lastInvokeTime;\n    \n    return (lastCallTime === 0 || timeSinceLastCall >= wait ||\n            timeSinceLastCall < 0);\n  }\n  \n  function trailingEdge(time) {\n    timeoutId = undefined;\n    \n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n  }\n  \n  function throttled(...args) {\n    const time = Date.now();\n    const isInvoking = shouldInvoke(time);\n    \n    lastArgs = args;\n    lastThis = this;\n    lastCallTime = time;\n    \n    if (isInvoking) {\n      if (timeoutId === undefined) {\n        return leading ? invokeFunc(time) : result;\n      }\n      if (timeoutId === undefined) {\n        timeoutId = setTimeout(trailingEdge, wait - (time - lastInvokeTime));\n      }\n      return invokeFunc(time);\n    }\n    \n    if (timeoutId === undefined) {\n      timeoutId = setTimeout(trailingEdge, wait - (time - lastInvokeTime));\n    }\n    \n    return result;\n  }\n  \n  throttled.cancel = function() {\n    if (timeoutId !== undefined) {\n      clearTimeout(timeoutId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timeoutId = undefined;\n  };\n  \n  return throttled;\n}\n\n// Usage\nconst throttledScroll = throttle(() => {\n  console.log('Scroll handler:', window.scrollY);\n}, 100);\n\nwindow.addEventListener('scroll', throttledScroll);\n\n// RequestAnimationFrame throttle\nfunction rafThrottle(func) {\n  let ticking = false;\n  \n  return function(...args) {\n    if (!ticking) {\n      requestAnimationFrame(() => {\n        func.apply(this, args);\n        ticking = false;\n      });\n      ticking = true;\n    }\n  };\n}\n\nconst optimizedScroll = rafThrottle(() => {\n  console.log('Optimized scroll:', window.scrollY);\n});\n```"
  },
  {
    question: "Implement a once function that ensures a function can only be called once: once(fn)",
    idealAnswer: "**Once Function Implementation:**\n\n```javascript\nfunction once(fn) {\n  let called = false;\n  let result;\n  \n  return function(...args) {\n    if (called) return result;\n    \n    called = true;\n    result = fn.apply(this, args);\n    \n    // Clear the function reference for garbage collection\n    fn = null;\n    \n    return result;\n  };\n}\n\n// Once with reset capability\nfunction onceWithReset(fn) {\n  let called = false;\n  let result;\n  \n  const onceFn = function(...args) {\n    if (called) return result;\n    \n    called = true;\n    result = fn.apply(this, args);\n    \n    return result;\n  };\n  \n  onceFn.reset = function() {\n    called = false;\n    result = undefined;\n  };\n  \n  onceFn.isCalled = function() {\n    return called;\n  };\n  \n  return onceFn;\n}\n\n// Usage examples\nconst initializeApp = once(() => {\n  console.log('App initialized!');\n  return { initialized: true };\n});\n\nconsole.log(initializeApp()); // App initialized!, { initialized: true }\nconsole.log(initializeApp()); // { initialized: true } (cached result)\nconsole.log(initializeApp()); // { initialized: true } (cached result)\n\n// Async once\nfunction onceAsync(fn) {\n  let called = false;\n  let pendingPromise = null;\n  \n  return async function(...args) {\n    if (called) return pendingPromise;\n    \n    called = true;\n    pendingPromise = fn.apply(this, args);\n    \n    return pendingPromise;\n  };\n}\n\n// Real-world usage\nconst fetchConfig = onceAsync(async () => {\n  const response = await fetch('/api/config');\n  return response.json();\n});\n\n// Multiple calls will only fetch once\nconst config1 = await fetchConfig();\nconst config2 = await fetchConfig(); // Same promise\n```"
  },
  {
    question: "Create a flip function that reverses the order of arguments: flip(fn)(a, b, c) -> fn(c, b, a)",
    idealAnswer: "**Flip Function Implementation:**\n\n```javascript\nfunction flip(fn) {\n  return function(...args) {\n    return fn.apply(this, args.reverse());\n  };\n}\n\n// Flip with specific arity\nfunction flipN(fn, n = fn.length) {\n  return function(...args) {\n    const flippedArgs = args.slice(0, n).reverse().concat(args.slice(n));\n    return fn.apply(this, flippedArgs);\n  };\n}\n\n// Usage examples\nfunction subtract(a, b) {\n  return a - b;\n}\n\nfunction divide(a, b, c) {\n  return a / b / c;\n}\n\nconst flippedSubtract = flip(subtract);\nconsole.log(flippedSubtract(10, 3)); // 3 - 10 = -7\n\nconst flippedDivide = flipN(divide, 3);\nconsole.log(flippedDivide(100, 2, 5)); // 5 / 2 / 100 = 0.025\n\n// Practical example with array methods\nconst mapToObj = flip((obj, key, value) => {\n  obj[key] = value;\n  return obj;\n});\n\n// Instead of: mapToObj({}, 'key', 'value')\n// We can do: mapToObj('key', 'value')({})\nconst obj = mapToObj('name', 'John')({});\nconsole.log(obj); // { name: 'John' }\n\n// Flip for promise chains\nconst flippedFetch = flip((url, options) => fetch(url, options));\n\n// Can now do: flippedFetch(options)(url)\nconst fetchWithAuth = flippedFetch({ headers: { 'Authorization': 'Bearer token' } });\nfetchWithAuth('/api/user');\n\n// Compose flip with other higher-order functions\nconst flipCurry = fn => flip(curry(fn));\nconst flippedCurriedSubtract = flipCurry(subtract);\nconsole.log(flippedCurriedSubtract(10)(3)); // 3 - 10 = -7\n```"
  },
  {
    question: "What is the difference between WeakMap vs Map and WeakSet vs Set?",
    idealAnswer: "**WeakMap** and **WeakSet** are specialized versions of Map and Set with weak references for better memory management.\n\n**Map vs WeakMap:**\n```javascript\n// Map - Strong references\nconst map = new Map();\nconst obj = { id: 1 };\nmap.set(obj, 'value');\n\nobj = null; // Object still exists in map\nconsole.log(map.size); // 1\n\n// WeakMap - Weak references\nconst weakMap = new WeakMap();\nconst obj2 = { id: 2 };\nweakMap.set(obj2, 'value');\n\nobj2 = null; // Object can be garbage collected\n// No size property, no iteration\n```\n\n**Set vs WeakSet:**\n```javascript\n// Set - Strong references\nconst set = new Set();\nconst obj1 = { id: 1 };\nset.add(obj1);\n\nobj1 = null; // Object still in set\nconsole.log(set.size); // 1\n\n// WeakSet - Weak references\nconst weakSet = new WeakSet();\nconst obj2 = { id: 2 };\nweakSet.add(obj2);\n\nobj2 = null; // Object can be garbage collected\n// No size property, no iteration\n```\n\n**Key Differences:**\n```javascript\n// Map features (not in WeakMap)\nconst map = new Map();\nmap.set('key', 'value');\nconsole.log(map.size); // 1\nconsole.log(map.has('key')); // true\nconsole.log(map.get('key')); // 'value'\nmap.delete('key');\nmap.clear();\n\n// Can iterate over Map\nfor (const [key, value] of map) {\n  console.log(key, value);\n}\n\n// WeakMap limitations\nconst weakMap = new WeakMap();\n// weakMap.set('string', 'value'); // Error: keys must be objects\n// console.log(weakMap.size); // undefined\n// for (const [key, value] of weakMap) {} // Error: not iterable\n```\n\n**Use Cases:**\n```javascript\n// WeakMap - Private data, caching\nconst privateData = new WeakMap();\n\nclass MyClass {\n  constructor(data) {\n    privateData.set(this, data);\n  }\n  \n  getData() {\n    return privateData.get(this);\n  }\n}\n\n// WeakSet - Object tracking\nconst processed = new WeakSet();\n\nfunction processObject(obj) {\n  if (processed.has(obj)) {\n    return; // Already processed\n  }\n  \n  // Process object\n  processed.add(obj);\n}\n```\n\n**Memory Benefits:**\n- Automatic garbage collection\n- No memory leaks from long-lived references\n- Perfect for caches and private data"
  },
  {
    question: "What is optional chaining and nullish coalescing in JavaScript?",
    idealAnswer: "**Optional chaining (?.)** and **nullish coalescing (??)** are ES2020 features for safer property access and default values.\n\n**Optional Chaining (?.):**\n```javascript\n// Before optional chaining\nconst userName = user && user.profile && user.profile.name;\n\n// With optional chaining\nconst userName = user?.profile?.name;\n\n// Different scenarios\nconst user = {\n  profile: {\n    name: 'John'\n  }\n};\n\nconsole.log(user?.profile?.name); // 'John'\nconsole.log(user?.address?.city); // undefined (not error)\nconsole.log(user?.profile?.age); // undefined\n\n// With functions\nconst result = obj.method?.();\nconst element = document.querySelector('#button')?.click?.();\n\n// With arrays\nconst firstItem = items?.[0];\nconst nested = data?.items?.[0]?.name;\n```\n\n**Nullish Coalescing (??):**\n```javascript\n// Before nullish coalescing\nconst name = user.name || 'Anonymous'; // Problem: '' or 0 becomes 'Anonymous'\n\n// With nullish coalescing\nconst name = user.name ?? 'Anonymous'; // Only null or undefined triggers default\n\n// Different behaviors\nconst value1 = 0 || 'default'; // 'default'\nconst value2 = 0 ?? 'default'; // 0\n\nconst value3 = '' || 'default'; // 'default'\nconst value4 = '' ?? 'default'; // ''\n\nconst value5 = null || 'default'; // 'default'\nconst value6 = null ?? 'default'; // 'default'\n```\n\n**Combined Usage:**\n```javascript\n// Powerful combination\nconst userName = user?.profile?.name ?? 'Anonymous';\nconst userAge = user?.profile?.age ?? 18;\nconst userCity = user?.address?.city ?? 'Unknown';\n\n// Real-world example\nfunction getUserDisplayName(user) {\n  return user?.profile?.displayName ?? user?.username ?? 'Guest';\n}\n\n// Safe API response handling\nfunction processApiResponse(response) {\n  const data = response?.data ?? {};\n  const items = data?.items ?? [];\n  const total = data?.pagination?.total ?? items.length;\n  \n  return { items, total };\n}\n```\n\n**Advanced Patterns:**\n```javascript\n// Optional chaining with assignment\nconst config = {};\nconfig.nested?.deep?.property = 'value'; // Won't throw error\n\n// With destructuring\nconst { name, profile: { age } = {} } = user ?? {};\n\n// Function parameters with defaults\nfunction processData(data = {}) {\n  const items = data.items ?? [];\n  const total = data.total ?? items.length;\n  return { items, total };\n}\n```"
  },
  {
    question: "What is destructuring and how does it work with objects and arrays?",
    idealAnswer: "**Destructuring** is a syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables.\n\n**Array Destructuring:**\n```javascript\nconst colors = ['red', 'green', 'blue'];\n\n// Basic destructuring\nconst [first, second, third] = colors;\nconsole.log(first, second, third); // 'red', 'green', 'blue'\n\n// Skipping values\nconst [first, , third] = colors;\nconsole.log(first, third); // 'red', 'blue'\n\n// Default values\nconst [a, b, c, d = 'yellow'] = colors;\nconsole.log(d); // 'yellow'\n\n// Rest operator\nconst [primary, ...secondary] = colors;\nconsole.log(primary, secondary); // 'red', ['green', 'blue']\n\n// Swapping variables\nlet x = 1, y = 2;\n[x, y] = [y, x];\nconsole.log(x, y); // 2, 1\n```\n\n**Object Destructuring:**\n```javascript\nconst person = {\n  name: 'John',\n  age: 30,\n  city: 'New York',\n  country: 'USA'\n};\n\n// Basic destructuring\nconst { name, age } = person;\nconsole.log(name, age); // 'John', 30\n\n// Renaming\nconst { name: fullName, age: years } = person;\nconsole.log(fullName, years); // 'John', 30\n\n// Default values\nconst { name, country = 'Canada' } = person;\nconsole.log(country); // 'USA' (from object)\n\n// Nested destructuring\nconst user = {\n  profile: {\n    personal: {\n      name: 'John',\n      age: 30\n    },\n    contact: {\n      email: 'john@example.com'\n    }\n  }\n};\n\nconst { profile: { personal: { name, age }, contact: { email } } } = user;\nconsole.log(name, age, email);\n```\n\n**Function Parameters:**\n```javascript\n// Array destructuring in parameters\nfunction sum([a, b, c]) {\n  return a + b + c;\n}\nconsole.log(sum([1, 2, 3])); // 6\n\n// Object destructuring in parameters\nfunction greet({ name, age = 25 }) {\n  console.log(`Hello ${name}, you are ${age}`);\n}\ngreet({ name: 'John', age: 30 }); // Hello John, you are 30\n\n// With default values\nfunction createUser({ name = 'Anonymous', age = 18, city = 'Unknown' } = {}) {\n  return { name, age, city };\n}\n```\n\n**Advanced Patterns:**\n```javascript\n// Destructuring with rest\nconst { first, ...rest } = { first: 1, second: 2, third: 3 };\nconsole.log(first, rest); // 1, { second: 2, third: 3 }\n\n// Computed property names\nconst key = 'name';\nconst { [key]: userName } = { name: 'John' };\nconsole.log(userName); // 'John'\n\n// Destructuring in for...of loops\nconst users = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Jane' }\n];\n\nfor (const { id, name } of users) {\n  console.log(id, name);\n}\n```"
  },
  {
    question: "What is the difference between spread and rest operators?",
    idealAnswer: "**Spread (...)** and **Rest (...)** operators look the same but have opposite purposes.\n\n**Spread Operator:**\n```javascript\n// Spreading arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]\n\n// Spreading objects\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\nconst combined = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }\n\n// Function calls\nconst numbers = [1, 2, 3];\nconsole.log(Math.max(...numbers)); // 3\nconsole.log(Math.min(...numbers)); // 1\n\n// Array copying\nconst original = [1, 2, 3];\nconst copy = [...original]; // Shallow copy\n\n// Object copying\nconst originalObj = { name: 'John', age: 30 };\nconst copyObj = { ...originalObj }; // Shallow copy\n```\n\n**Rest Operator:**\n```javascript\n// Rest parameters in functions\nfunction sum(...numbers) {\n  return numbers.reduce((acc, num) => acc + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4, 5)); // 15\n\n// Mixed with regular parameters\nfunction greet(greeting, ...names) {\n  names.forEach(name => console.log(`${greeting}, ${name}!`));\n}\ngreet('Hello', 'John', 'Jane', 'Bob');\n\n// Rest in destructuring\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(first, second, rest); // 1, 2, [3, 4, 5]\n\nconst { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };\nconsole.log(a, b, rest); // 1, 2, { c: 3, d: 4 }\n```\n\n**Key Differences:**\n```javascript\n// Spread: Expands/Unpacks\nconst arr = [1, 2, 3];\nconsole.log([...arr]); // Expands to individual elements\n\n// Rest: Collects/Packs\nfunction collect(...args) {\n  console.log(args); // Collects into array\n}\ncollect(1, 2, 3); // [1, 2, 3]\n```\n\n**Practical Examples:**\n```javascript\n// Spread - Merging objects with overrides\nconst defaults = { theme: 'light', fontSize: 16 };\nconst userPrefs = { fontSize: 18, language: 'en' };\nconst settings = { ...defaults, ...userPrefs };\n// { theme: 'light', fontSize: 18, language: 'en' }\n\n// Rest - Handling variable arguments\nfunction calculate(operation, ...numbers) {\n  return numbers.reduce((acc, num) => {\n    switch (operation) {\n      case 'sum': return acc + num;\n      case 'multiply': return acc * num;\n      default: return acc;\n    }\n  }, operation === 'multiply' ? 1 : 0);\n}\n\n// Spread - Creating new arrays with modifications\nconst addToArray = (arr, newItem) => [...arr, newItem];\nconst removeFromArray = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];\n```\n\n**Use Cases:**\n- **Spread**: Copying, merging, expanding collections\n- **Rest**: Variable arguments, collecting remaining items"
  },
  {
    question: "Implement Promise.all from scratch",
    idealAnswer: "**Promise.all Implementation:**\n\n```javascript\nfunction promiseAll(promises) {\n  return new Promise((resolve, reject) => {\n    // Handle empty array\n    if (!promises.length) {\n      resolve([]);\n      return;\n    }\n    \n    const results = new Array(promises.length);\n    let completed = 0;\n    \n    promises.forEach((promise, index) => {\n      // Handle non-promise values\n      Promise.resolve(promise)\n        .then(value => {\n          results[index] = value;\n          completed++;\n          \n          // Resolve when all promises complete\n          if (completed === promises.length) {\n            resolve(results);\n          }\n        })\n        .catch(reject); // Reject on first error\n    });\n  });\n}\n\n// Usage\nconst promise1 = Promise.resolve(1);\nconst promise2 = Promise.resolve(2);\nconst promise3 = Promise.resolve(3);\n\npromiseAll([promise1, promise2, promise3])\n  .then(results => console.log(results)) // [1, 2, 3]\n  .catch(error => console.error(error));\n```\n\n**Advanced Implementation with Error Handling:**\n```javascript\nfunction promiseAll(promises) {\n  return new Promise((resolve, reject) => {\n    if (!Array.isArray(promises)) {\n      return reject(new TypeError('Argument must be an array'));\n    }\n    \n    const results = [];\n    let completed = 0;\n    \n    if (promises.length === 0) {\n      resolve([]);\n      return;\n    }\n    \n    promises.forEach((promise, index) => {\n      try {\n        Promise.resolve(promise)\n          .then(value => {\n            results[index] = value;\n            completed++;\n            \n            if (completed === promises.length) {\n              resolve(results);\n            }\n          })\n          .catch(reject);\n      } catch (error) {\n        reject(error);\n      }\n    });\n  });\n}\n```\n\n**Promise.allSettled Implementation:**\n```javascript\nfunction promiseAllSettled(promises) {\n  return new Promise(resolve => {\n    if (!promises.length) {\n      resolve([]);\n      return;\n    }\n    \n    const results = new Array(promises.length);\n    let completed = 0;\n    \n    promises.forEach((promise, index) => {\n      Promise.resolve(promise)\n        .then(value => {\n          results[index] = { status: 'fulfilled', value };\n        })\n        .catch(reason => {\n          results[index] = { status: 'rejected', reason };\n        })\n        .finally(() => {\n          completed++;\n          if (completed === promises.length) {\n            resolve(results);\n          }\n        });\n    });\n  });\n}\n```"
  },
  {
    question: "Implement deep clone function in JavaScript",
    idealAnswer: "**Deep Clone Implementation:**\n\n```javascript\nfunction deepClone(obj, hash = new WeakMap()) {\n  // Handle primitives and null\n  if (obj === null || typeof obj !== 'object') {\n    return obj;\n  }\n  \n  // Handle circular references\n  if (hash.has(obj)) {\n    return hash.get(obj);\n  }\n  \n  // Handle Date\n  if (obj instanceof Date) {\n    return new Date(obj);\n  }\n  \n  // Handle RegExp\n  if (obj instanceof RegExp) {\n    return new RegExp(obj);\n  }\n  \n  // Handle Array\n  if (Array.isArray(obj)) {\n    const clone = [];\n    hash.set(obj, clone);\n    obj.forEach((item, index) => {\n      clone[index] = deepClone(item, hash);\n    });\n    return clone;\n  }\n  \n  // Handle Object\n  const clone = Object.create(Object.getPrototypeOf(obj));\n  hash.set(obj, clone);\n  \n  Reflect.ownKeys(obj).forEach(key => {\n    clone[key] = deepClone(obj[key], hash);\n  });\n  \n  return clone;\n}\n```\n\n**Alternative Implementation:**\n```javascript\nfunction deepClone(obj) {\n  // Handle primitives and functions\n  if (obj === null || typeof obj !== 'object') {\n    return obj;\n  }\n  \n  // Handle Date\n  if (obj instanceof Date) {\n    return new Date(obj.getTime());\n  }\n  \n  // Handle Array\n  if (Array.isArray(obj)) {\n    return obj.map(item => deepClone(item));\n  }\n  \n  // Handle Object\n  const cloned = {};\n  Object.keys(obj).forEach(key => {\n    cloned[key] = deepClone(obj[key]);\n  });\n  \n  return cloned;\n}\n```\n\n**Handling Special Cases:**\n```javascript\nfunction deepCloneAdvanced(obj, hash = new WeakMap()) {\n  // Null check\n  if (obj === null) return null;\n  \n  // Primitive types and functions\n  if (typeof obj !== 'object') return obj;\n  \n  // Circular reference check\n  if (hash.has(obj)) return hash.get(obj);\n  \n  let clone;\n  \n  // Handle different object types\n  if (obj instanceof Date) {\n    clone = new Date(obj);\n  } else if (obj instanceof RegExp) {\n    clone = new RegExp(obj.source, obj.flags);\n  } else if (obj instanceof Map) {\n    clone = new Map();\n    obj.forEach((value, key) => {\n      clone.set(deepCloneAdvanced(key, hash), deepCloneAdvanced(value, hash));\n    });\n  } else if (obj instanceof Set) {\n    clone = new Set();\n    obj.forEach(value => {\n      clone.add(deepCloneAdvanced(value, hash));\n    });\n  } else if (Array.isArray(obj)) {\n    clone = [];\n  } else {\n    clone = Object.create(Object.getPrototypeOf(obj));\n  }\n  \n  // Store in hash for circular references\n  hash.set(obj, clone);\n  \n  // Clone properties\n  if (Array.isArray(obj)) {\n    obj.forEach((item, index) => {\n      clone[index] = deepCloneAdvanced(item, hash);\n    });\n  } else if (!(obj instanceof Map) && !(obj instanceof Set)) {\n    Reflect.ownKeys(obj).forEach(key => {\n      clone[key] = deepCloneAdvanced(obj[key], hash);\n    });\n  }\n  \n  return clone;\n}\n```\n\n**Testing:**\n```javascript\nconst original = {\n  name: 'John',\n  age: 30,\n  date: new Date(),\n  regex: /test/g,\n  nested: {\n    value: 'nested'\n  }\n};\n\nconst cloned = deepClone(original);\nconsole.log(cloned !== original); // true\nconsole.log(cloned.nested !== original.nested); // true\n```"
  },
  {
    question: "Implement array polyfills (map, filter, reduce) from scratch",
    idealAnswer: "**Array.map Polyfill:**\n\n```javascript\nArray.prototype.myMap = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function');\n  }\n  \n  const result = [];\n  const obj = Object(this);\n  const len = obj.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in obj) {\n      result[i] = callback.call(thisArg, obj[i], i, obj);\n    }\n  }\n  \n  return result;\n};\n\n// Usage\n[1, 2, 3].myMap(x => x * 2); // [2, 4, 6]\n```\n\n**Array.filter Polyfill:**\n```javascript\nArray.prototype.myFilter = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function');\n  }\n  \n  const result = [];\n  const obj = Object(this);\n  const len = obj.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in obj) {\n      const value = obj[i];\n      if (callback.call(thisArg, value, i, obj)) {\n        result.push(value);\n      }\n    }\n  }\n  \n  return result;\n};\n\n// Usage\n[1, 2, 3, 4, 5].myFilter(x => x % 2 === 0); // [2, 4]\n```\n\n**Array.reduce Polyfill:**\n```javascript\nArray.prototype.myReduce = function(callback, initialValue) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function');\n  }\n  \n  const obj = Object(this);\n  const len = obj.length >>> 0;\n  \n  if (len === 0 && arguments.length < 2) {\n    throw new TypeError('Reduce of empty array with no initial value');\n  }\n  \n  let accumulator;\n  let startIndex = 0;\n  \n  if (arguments.length >= 2) {\n    accumulator = initialValue;\n  } else {\n    startIndex = 1;\n    accumulator = obj[0];\n  }\n  \n  for (let i = startIndex; i < len; i++) {\n    if (i in obj) {\n      accumulator = callback.call(undefined, accumulator, obj[i], i, obj);\n    }\n  }\n  \n  return accumulator;\n};\n\n// Usage\n[1, 2, 3, 4].myReduce((acc, x) => acc + x, 0); // 10\n```\n\n**Additional Array Polyfills:**\n\n```javascript\n// Array.forEach\nArray.prototype.myForEach = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function');\n  }\n  \n  const obj = Object(this);\n  const len = obj.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in obj) {\n      callback.call(thisArg, obj[i], i, obj);\n    }\n  }\n};\n\n// Array.find\nArray.prototype.myFind = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function');\n  }\n  \n  const obj = Object(this);\n  const len = obj.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in obj) {\n      const value = obj[i];\n      if (callback.call(thisArg, value, i, obj)) {\n        return value;\n      }\n    }\n  }\n  \n  return undefined;\n};\n\n// Array.some\nArray.prototype.mySome = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function');\n  }\n  \n  const obj = Object(this);\n  const len = obj.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in obj) {\n      if (callback.call(thisArg, obj[i], i, obj)) {\n        return true;\n      }\n    }\n  }\n  \n  return false;\n};\n```\n\n**Testing:**\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconsole.log(arr.myMap(x => x * 2)); // [2, 4, 6, 8, 10]\nconsole.log(arr.myFilter(x => x > 3)); // [4, 5]\nconsole.log(arr.myReduce((acc, x) => acc + x)); // 15\n```"
  }
];

interface QnAProps {
  questions: { question: string; idealAnswer: string; implementation?: string }[];
  isImplementation?: boolean;
}

function QnA({ questions, isImplementation = false }: QnAProps & { isImplementation?: boolean }) {
  const { openWithContent } = useWebPlayground();

  const openPlayground = (type: string) => {
    let html = '';
    let css = '';
    let js = '';
    
    if (type === 'todo-list') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Todo List</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #3b82f6;
            --accent-hover: #2563eb;
            --accent-light: #dbeafe;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba7 100%);
            --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 50px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
            animation: float 15s ease-in-out infinite;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b);
            background-size: 300% 100%;
            animation: gradientWave 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        @keyframes gradientWave {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            color: white;
            margin-bottom: 12px;
            position: relative;
            z-index: 1;
            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: titleGlow 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
            from { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.3); }
            to { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.5); }
        }

        .header p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.2rem;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }

        .stats-bar {
            display: flex;
            justify-content: space-around;
            padding: 25px 30px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            border-bottom: 2px solid transparent;
            background-clip: padding-box;
            position: relative;
        }

        .stats-bar::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
            background-size: 200% 100%;
            animation: statsBarGlow 2s ease-in-out infinite;
        }

        @keyframes statsBarGlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-color);
            display: block;
        }

        .stat-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin-top: 4px;
        }

        .input-section {
            padding: 30px;
            background: var(--bg-primary);
        }

        .input-wrapper {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
        }

        .todo-input {
            flex: 1;
            padding: 16px 20px;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            font-size: 16px;
            background: var(--bg-input);
            color: var(--text-primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 500;
        }

        .todo-input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px var(--accent-light);
            transform: translateY(-1px);
        }

        .todo-input::placeholder {
            color: var(--text-muted);
        }

        .add-btn {
            padding: 16px 24px;
            background: var(--gradient-accent);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }

        .add-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .add-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .add-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .add-btn:active {
            transform: translateY(0);
        }

        .filters {
            display: flex;
            gap: 8px;
            padding: 0 30px 20px;
            background: var(--bg-primary);
        }

        .filter-btn {
            padding: 10px 20px;
            border: 2px solid var(--border-color);
            background: var(--bg-input);
            color: var(--text-secondary);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 14px;
            font-weight: 600;
            position: relative;
            overflow: hidden;
        }

        .filter-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient-accent);
            transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
        }

        .filter-btn:hover::before {
            left: 0;
        }

        .filter-btn:hover {
            color: white;
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        .filter-btn.active {
            background: var(--gradient-accent);
            color: white;
            border-color: var(--accent-color);
            box-shadow: var(--shadow-md);
        }

        .todo-list {
            max-height: 400px;
            overflow-y: auto;
            background: var(--bg-primary);
        }

        .todo-list::-webkit-scrollbar {
            width: 6px;
        }

        .todo-list::-webkit-scrollbar-track {
            background: var(--bg-secondary);
        }

        .todo-list::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 3px;
        }

        .todo-list::-webkit-scrollbar-thumb:hover {
            background: var(--text-muted);
        }

        .todo-item {
            display: flex;
            align-items: center;
            padding: 20px 30px;
            border-bottom: 1px solid var(--border-light);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .todo-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: var(--accent-color);
            transform: scaleY(0);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .todo-item:hover::before {
            transform: scaleY(1);
        }

        .todo-item:hover {
            background: var(--bg-secondary);
            transform: translateX(4px);
        }

        .todo-item.completed {
            opacity: 0.6;
        }

        .todo-item.completed::before {
            background: var(--success-color);
        }

        .todo-item.completed .todo-text {
            text-decoration: line-through;
            color: var(--text-muted);
        }

        .todo-checkbox {
            width: 22px;
            height: 22px;
            margin-right: 16px;
            cursor: pointer;
            accent-color: var(--accent-color);
            transition: transform 0.2s;
        }

        .todo-checkbox:hover {
            transform: scale(1.1);
        }

        .todo-text {
            flex: 1;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            transition: color 0.3s;
        }

        .todo-actions {
            display: flex;
            gap: 8px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .todo-item:hover .todo-actions {
            opacity: 1;
        }

        .action-btn {
            width: 32px;
            height: 32px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 16px;
        }

        .delete-btn {
            background: var(--danger-light);
            color: var(--danger-color);
        }

        .delete-btn:hover {
            background: var(--danger-color);
            color: white;
            transform: scale(1.1);
        }

        .edit-btn {
            background: var(--warning-light);
            color: var(--warning-color);
        }

        .edit-btn:hover {
            background: var(--warning-color);
            color: white;
            transform: scale(1.1);
        }

        .empty-state {
            text-align: center;
            padding: 60px 30px;
            color: var(--text-secondary);
        }

        .empty-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: var(--accent-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: var(--accent-color);
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
        }

        .empty-state h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
        }

        .empty-state p {
            color: var(--text-secondary);
        }

        .footer {
            padding: 20px 30px;
            background: var(--bg-tertiary);
            text-align: center;
            border-top: 1px solid var(--border-color);
        }

        .footer-text {
            color: var(--text-secondary);
            font-size: 0.875rem;
        }

        .footer-text span {
            color: var(--accent-color);
            font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
            .container {
                padding: 8px;
            }

            .app-wrapper {
                border-radius: 16px;
                margin: 8px;
            }

            .header {
                padding: 25px 15px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .header p {
                font-size: 1rem;
            }

            .stats-bar {
                padding: 12px 15px;
                flex-wrap: wrap;
                gap: 12px;
            }

            .stat-item {
                flex: 1 1 calc(50% - 6px);
                min-width: 120px;
            }

            .input-section {
                padding: 15px;
            }

            .input-wrapper {
                flex-direction: column;
            }

            .add-btn {
                width: 100%;
            }

            .filters {
                padding: 0 20px 20px;
                flex-wrap: wrap;
            }

            .filter-btn {
                flex: 1;
                min-width: 80px;
            }

            .todo-item {
                padding: 16px 20px;
            }

            .todo-actions {
                opacity: 1;
            }
        }

        /* Loading Animation */
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid var(--border-color);
            border-radius: 50%;
            border-top-color: var(--accent-color);
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>✨ Premium Todo List</h1>
                <p>Transform your productivity with elegant task management</p>
            </div>
            
            <div class="stats-bar">
                <div class="stat-item">
                    <span class="stat-value" id="totalCount">0</span>
                    <span class="stat-label">Total Tasks</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value" id="activeCount">0</span>
                    <span class="stat-label">Active</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value" id="completedCount">0</span>
                    <span class="stat-label">Completed</span>
                </div>
            </div>
            
            <div class="input-section">
                <div class="input-wrapper">
                    <input type="text" class="todo-input" id="todoInput" placeholder="What needs to be accomplished today?" autofocus>
                    <button class="add-btn" id="addBtn">
                        <span>Add Task</span>
                    </button>
                </div>
                
                <div class="filters">
                    <button class="filter-btn active" data-filter="all">All Tasks</button>
                    <button class="filter-btn" data-filter="active">Active</button>
                    <button class="filter-btn" data-filter="completed">Completed</button>
                </div>
            </div>
            
            <ul class="todo-list" id="todoList"></ul>
            
            <div class="footer">
                <p class="footer-text">
                    Productivity Mode: <span id="motivationText">Ready to conquer your day! 🚀</span>
                </p>
            </div>
        </div>
    </div>

    <script>
        class PremiumTodoApp {
            constructor() {
                this.todos = JSON.parse(localStorage.getItem('premiumTodos')) || [];
                this.currentFilter = 'all';
                this.motivationalQuotes = [
                    "Ready to conquer your day! 🚀",
                    "Small steps, big progress! 🌟",
                    "Focus on what matters! 💪",
                    "Making it happen! ✨",
                    "You've got this! 🎯",
                    "Productivity mode: ON! ⚡",
                    "Crushing your goals! 🏆"
                ];
                this.init();
            }

            init() {
                this.bindEvents();
                this.render();
                this.updateMotivation();
                this.startMotivationTimer();
            }

            bindEvents() {
                const addBtn = document.getElementById('addBtn');
                const todoInput = document.getElementById('todoInput');
                
                addBtn.addEventListener('click', () => this.addTodo());
                todoInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addTodo();
                });

                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        this.currentFilter = e.target.dataset.filter;
                        this.updateFilterButtons();
                        this.render();
                    });
                });
            }

            addTodo() {
                const input = document.getElementById('todoInput');
                const text = input.value.trim();
                
                if (text) {
                    const todo = {
                        id: Date.now(),
                        text: text,
                        completed: false,
                        createdAt: new Date().toISOString(),
                        priority: this.calculatePriority(text)
                    };
                    
                    this.todos.unshift(todo); // Add to beginning
                    input.value = '';
                    this.save();
                    this.render();
                    this.updateMotivation();
                    
                    // Add a subtle animation feedback
                    this.showNotification('Task added successfully! 🎉');
                }
            }

            calculatePriority(text) {
                // Simple priority based on keywords
                const urgentKeywords = ['urgent', 'asap', 'important', 'critical'];
                const textLower = text.toLowerCase();
                
                if (urgentKeywords.some(keyword => textLower.includes(keyword))) {
                    return 'high';
                } else if (textLower.includes('meeting') || textLower.includes('call')) {
                    return 'medium';
                }
                return 'normal';
            }

            toggleTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                    todo.completedAt = todo.completed ? new Date().toISOString() : null;
                    this.save();
                    this.render();
                    this.updateMotivation();
                    
                    if (todo.completed) {
                        this.showNotification('Great job! Task completed! 🎊');
                    }
                }
            }

            deleteTodo(id) {
                const todoIndex = this.todos.findIndex(t => t.id === id);
                if (todoIndex !== -1) {
                    this.todos.splice(todoIndex, 1);
                    this.save();
                    this.render();
                    this.updateMotivation();
                    this.showNotification('Task removed 🗑️');
                }
            }

            editTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    const newText = prompt('Edit task:', todo.text);
                    if (newText && newText.trim() !== todo.text) {
                        todo.text = newText.trim();
                        todo.priority = this.calculatePriority(newText.trim());
                        this.save();
                        this.render();
                        this.showNotification('Task updated! ✏️');
                    }
                }
            }

            getFilteredTodos() {
                switch(this.currentFilter) {
                    case 'active': return this.todos.filter(t => !t.completed);
                    case 'completed': return this.todos.filter(t => t.completed);
                    default: return this.todos;
                }
            }

            updateFilterButtons() {
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === this.currentFilter);
                });
            }

            updateStats() {
                const totalCount = this.todos.length;
                const completedCount = this.todos.filter(t => t.completed).length;
                const activeCount = totalCount - completedCount;

                document.getElementById('totalCount').textContent = totalCount;
                document.getElementById('activeCount').textContent = activeCount;
                document.getElementById('completedCount').textContent = completedCount;
            }

            updateMotivation() {
                const completedCount = this.todos.filter(t => t.completed).length;
                const totalCount = this.todos.length;
                
                let motivationText;
                if (totalCount === 0) {
                    motivationText = this.motivationalQuotes[0];
                } else if (completedCount === totalCount && totalCount > 0) {
                    motivationText = "All tasks completed! You're amazing! 🎉";
                } else if (completedCount / totalCount > 0.7) {
                    motivationText = "Almost there! Keep going! 🔥";
                } else if (completedCount / totalCount > 0.5) {
                    motivationText = "Great progress! Halfway there! 🌟";
                } else {
                    motivationText = this.motivationalQuotes[Math.floor(Math.random() * this.motivationalQuotes.length)];
                }
                
                document.getElementById('motivationText').textContent = motivationText;
            }

            startMotivationTimer() {
                setInterval(() => {
                    if (this.todos.length > 0) {
                        this.updateMotivation();
                    }
                }, 30000); // Update every 30 seconds
            }

            showNotification(message) {
                // Create a simple notification (could be enhanced with a toast library)
                const notification = document.createElement('div');
                notification.style.cssText = \`
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--gradient-accent);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    box-shadow: var(--shadow-lg);
                    z-index: 1000;
                    animation: slideIn 0.3s ease-out;
                \`;
                notification.textContent = message;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease-out';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }

            render() {
                const todoList = document.getElementById('todoList');
                const filteredTodos = this.getFilteredTodos();

                this.updateStats();

                if (filteredTodos.length === 0) {
                    todoList.innerHTML = \`
                        <div class="empty-state">
                            <div class="empty-icon">📝</div>
                            <h3>No tasks yet</h3>
                            <p>Start adding tasks to boost your productivity!</p>
                        </div>
                    \`;
                } else {
                    todoList.innerHTML = filteredTodos.map((todo, index) => \`
                        <li class="todo-item \${todo.completed ? 'completed' : ''}" style="animation: slideIn 0.3s ease-out \${index * 0.05}s both">
                            <input type="checkbox" 
                                   class="todo-checkbox" 
                                   \${todo.completed ? 'checked' : ''} 
                                   onchange="app.toggleTodo(\${todo.id})">
                            <span class="todo-text">\${todo.text}</span>
                            <div class="todo-actions">
                                <button class="action-btn edit-btn" onclick="app.editTodo(\${todo.id})" title="Edit">
                                    ✏️
                                </button>
                                <button class="action-btn delete-btn" onclick="app.deleteTodo(\${todo.id})" title="Delete">
                                    🗑️
                                </button>
                            </div>
                        </li>
                    \`).join('');
                }
            }

            save() {
                localStorage.setItem('premiumTodos', JSON.stringify(this.todos));
            }
        }

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(20px);
                }
            }
        \`;
        document.head.appendChild(style);

        // Initialize the app
        const app = new PremiumTodoApp();
    </script>
</body>
</html>`;
    }
    
    if (type === 'calculator') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Calculator</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-display: #1e293b;
            --bg-button: #f8fafc;
            --bg-button-hover: #e2e8f0;
            --bg-operator: #3b82f6;
            --bg-operator-hover: #2563eb;
            --bg-equals: #10b981;
            --bg-equals-hover: #059669;
            --bg-clear: #ef4444;
            --bg-clear-hover: #dc2626;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-display: #f8fafc;
            --text-button: #1e293b;
            --text-operator: #ffffff;
            --border-color: #e2e8f0;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba7 100%);
            --gradient-display: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-display: #0f172a;
                --bg-button: #334155;
                --bg-button-hover: #475569;
                --bg-operator: #3b82f6;
                --bg-operator-hover: #60a5fa;
                --bg-equals: #10b981;
                --bg-equals-hover: #34d399;
                --bg-clear: #ef4444;
                --bg-clear-hover: #f87171;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-display: #f8fafc;
                --text-button: #f8fafc;
                --text-operator: #ffffff;
                --border-color: #334155;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-display: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .calculator-wrapper {
            background: var(--bg-primary);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 400px;
            margin: 0 auto;
        }

        .calculator-wrapper:hover {
            transform: translateY(-4px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .calculator-header {
            background: var(--gradient-display);
            padding: 30px 20px;
            text-align: center;
        }

        .calculator-title {
            color: var(--text-display);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 8px;
            opacity: 0.9;
        }

        .calculator-subtitle {
            color: var(--text-display);
            font-size: 0.875rem;
            opacity: 0.7;
        }

        .display {
            background: var(--bg-display);
            padding: 30px 20px;
            text-align: right;
            border-bottom: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
        }

        .display::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
        }

        .display-text {
            font-size: 2.5rem;
            font-weight: 300;
            color: var(--text-display);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
            word-wrap: break-word;
            overflow-wrap: break-word;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            transition: all 0.2s ease;
        }

        .display-text.error {
            color: #ef4444;
            animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1px;
            background: var(--border-color);
            padding: 1px;
        }

        .btn {
            background: var(--bg-button);
            color: var(--text-button);
            border: none;
            font-size: 1.25rem;
            font-weight: 500;
            padding: 20px;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.4s, height 0.4s;
        }

        .btn:hover::before {
            width: 100px;
            height: 100px;
        }

        .btn:hover {
            background: var(--bg-button-hover);
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        .btn:active {
            transform: translateY(0);
            box-shadow: var(--shadow-sm);
        }

        .btn.number {
            font-weight: 600;
        }

        .btn.operator {
            background: var(--bg-operator);
            color: var(--text-operator);
            font-weight: 600;
        }

        .btn.operator:hover {
            background: var(--bg-operator-hover);
        }

        .btn.equals {
            background: var(--bg-equals);
            color: white;
            font-weight: 700;
            grid-row: span 2;
        }

        .btn.equals:hover {
            background: var(--bg-equals-hover);
        }

        .btn.clear {
            background: var(--bg-clear);
            color: white;
            font-weight: 600;
        }

        .btn.clear:hover {
            background: var(--bg-clear-hover);
        }

        .btn.zero {
            grid-column: span 2;
        }

        .history {
            padding: 20px;
            background: var(--bg-tertiary);
            border-top: 1px solid var(--border-color);
            max-height: 150px;
            overflow-y: auto;
        }

        .history-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .history-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background: var(--bg-primary);
            border-radius: 8px;
            margin-bottom: 6px;
            font-size: 0.875rem;
            transition: all 0.2s ease;
        }

        .history-item:hover {
            background: var(--bg-button-hover);
            transform: translateX(4px);
        }

        .history-expression {
            color: var(--text-secondary);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        }

        .history-result {
            color: var(--text-primary);
            font-weight: 600;
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
            .container {
                padding: 8px;
            }

            .calculator-wrapper {
                border-radius: 20px;
                margin: 8px;
            }

            .calculator-header {
                padding: 20px 15px;
            }

            .calculator-title {
                font-size: 1.5rem;
            }

            .display-text {
                font-size: 1.8rem;
            }

            .buttons {
                padding: 15px;
                gap: 8px;
            }

            .btn {
                font-size: 1rem;
                padding: 12px;
            }

            .btn.zero {
                grid-column: span 2;
            }

            .history {
                padding: 15px;
            }

            .history-title {
                font-size: 0.9rem;
            }
        }

        /* Custom scrollbar for history */
        .history::-webkit-scrollbar {
            width: 4px;
        }

        .history::-webkit-scrollbar-track {
            background: var(--bg-primary);
        }

        .history::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 2px;
        }

        .history::-webkit-scrollbar-thumb:hover {
            background: var(--text-secondary);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="calculator-wrapper">
            <div class="calculator-header">
                <h1 class="calculator-title">Premium Calculator</h1>
                <p class="calculator-subtitle">Advanced mathematical operations</p>
            </div>
            
            <div class="display">
                <div class="display-text" id="display">0</div>
            </div>
            
            <div class="buttons">
                <button class="btn clear" onclick="clearDisplay()">C</button>
                <button class="btn operator" onclick="appendToDisplay('/')">/</button>
                <button class="btn operator" onclick="appendToDisplay('*')">×</button>
                <button class="btn operator" onclick="deleteLast()">←</button>
                
                <button class="btn number" onclick="appendToDisplay('7')">7</button>
                <button class="btn number" onclick="appendToDisplay('8')">8</button>
                <button class="btn number" onclick="appendToDisplay('9')">9</button>
                <button class="btn operator" onclick="appendToDisplay('-')">-</button>
                
                <button class="btn number" onclick="appendToDisplay('4')">4</button>
                <button class="btn number" onclick="appendToDisplay('5')">5</button>
                <button class="btn number" onclick="appendToDisplay('6')">6</button>
                <button class="btn operator" onclick="appendToDisplay('+')">+</button>
                
                <button class="btn number" onclick="appendToDisplay('1')">1</button>
                <button class="btn number" onclick="appendToDisplay('2')">2</button>
                <button class="btn number" onclick="appendToDisplay('3')">3</button>
                <button class="btn equals" onclick="calculate()">=</button>
                
                <button class="btn number zero" onclick="appendToDisplay('0')">0</button>
                <button class="btn number" onclick="appendToDisplay('.')">.</button>
            </div>
            
            <div class="history">
                <h3 class="history-title">History</h3>
                <div id="historyList"></div>
            </div>
        </div>
    </div>

    <script>
        class PremiumCalculator {
            constructor() {
                this.display = document.getElementById('display');
                this.historyList = document.getElementById('historyList');
                this.currentInput = '0';
                this.shouldResetDisplay = false;
                this.history = [];
                this.maxHistoryItems = 10;
                this.init();
            }

            init() {
                this.updateDisplay();
                this.loadHistory();
                this.bindKeyboardEvents();
            }

            bindKeyboardEvents() {
                document.addEventListener('keydown', (e) => {
                    e.preventDefault();
                    
                    if (e.key >= '0' && e.key <= '9') {
                        this.appendToDisplay(e.key);
                    } else if (e.key === '.') {
                        this.appendToDisplay('.');
                    } else if (e.key === '+') {
                        this.appendToDisplay('+');
                    } else if (e.key === '-') {
                        this.appendToDisplay('-');
                    } else if (e.key === '*') {
                        this.appendToDisplay('*');
                    } else if (e.key === '/') {
                        this.appendToDisplay('/');
                    } else if (e.key === 'Enter' || e.key === '=') {
                        this.calculate();
                    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
                        this.clearDisplay();
                    } else if (e.key === 'Backspace') {
                        this.deleteLast();
                    }
                });
            }

            updateDisplay() {
                this.display.textContent = this.currentInput;
                this.display.classList.remove('error');
            }

            clearDisplay() {
                this.currentInput = '0';
                this.shouldResetDisplay = false;
                this.updateDisplay();
                this.animateButton('clear');
            }

            appendToDisplay(value) {
                if (this.shouldResetDisplay) {
                    this.currentInput = '0';
                    this.shouldResetDisplay = false;
                }
                
                if (this.currentInput === '0' && value !== '.') {
                    this.currentInput = value;
                } else if (value === '.' && !this.currentInput.includes('.')) {
                    this.currentInput += value;
                } else if (value !== '.' || !this.currentInput.includes('.')) {
                    this.currentInput += value;
                }
                
                this.updateDisplay();
                this.animateButton(value);
            }

            deleteLast() {
                if (this.currentInput.length > 1) {
                    this.currentInput = this.currentInput.slice(0, -1);
                } else {
                    this.currentInput = '0';
                }
                this.updateDisplay();
                this.animateButton('delete');
            }

            calculate() {
                try {
                    // Replace × with * for evaluation
                    let expression = this.currentInput.replace(/×/g, '*');
                    
                    // Validate expression
                    if (!this.isValidExpression(expression)) {
                        throw new Error('Invalid expression');
                    }
                    
                    // Calculate result
                    let result = eval(expression);
                    
                    // Handle special cases
                    if (!isFinite(result)) {
                        throw new Error('Math error');
                    }
                    
                    // Round to avoid floating point precision issues
                    result = Math.round(result * 100000000) / 100000000;
                    
                    // Add to history
                    this.addToHistory(this.currentInput, result.toString());
                    
                    this.currentInput = result.toString();
                    this.shouldResetDisplay = true;
                    this.updateDisplay();
                    this.animateButton('equals');
                    
                } catch (error) {
                    this.currentInput = 'Error';
                    this.display.classList.add('error');
                    this.shouldResetDisplay = true;
                    
                    setTimeout(() => {
                        this.clearDisplay();
                    }, 2000);
                }
            }

            isValidExpression(expression) {
                // Check for balanced parentheses
                let parentheses = 0;
                for (let char of expression) {
                    if (char === '(') parentheses++;
                    if (char === ')') parentheses--;
                    if (parentheses < 0) return false;
                }
                if (parentheses !== 0) return false;
                
                // Check for invalid operators at start or end
                const invalidStart = ['+', '*', '/', '.'];
                const invalidEnd = ['+', '-', '*', '/', '.'];
                
                if (invalidStart.includes(expression[0])) return false;
                if (invalidEnd.includes(expression[expression.length - 1])) return false;
                
                return true;
            }

            addToHistory(expression, result) {
                const historyItem = {
                    expression: expression,
                    result: result,
                    timestamp: new Date().toISOString()
                };
                
                this.history.unshift(historyItem);
                
                if (this.history.length > this.maxHistoryItems) {
                    this.history = this.history.slice(0, this.maxHistoryItems);
                }
                
                this.saveHistory();
                this.renderHistory();
            }

            renderHistory() {
                if (this.history.length === 0) {
                    this.historyList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.875rem; text-align: center;">No calculations yet</p>';
                    return;
                }
                
                this.historyList.innerHTML = this.history.map(item => \`
                    <div class="history-item">
                        <span class="history-expression">\${item.expression}</span>
                        <span class="history-result">\${item.result}</span>
                    </div>
                \`).join('');
            }

            saveHistory() {
                localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
            }

            loadHistory() {
                const saved = localStorage.getItem('calculatorHistory');
                if (saved) {
                    try {
                        this.history = JSON.parse(saved);
                        this.renderHistory();
                    } catch (e) {
                        this.history = [];
                    }
                } else {
                    this.renderHistory();
                }
            }

            animateButton(action) {
                // Visual feedback for button presses
                const buttons = document.querySelectorAll('.btn');
                buttons.forEach(btn => {
                    if (btn.textContent.includes(action) || 
                        (action === 'delete' && btn.textContent === '←') ||
                        (action === 'equals' && btn.textContent === '=') ||
                        (action === 'clear' && btn.textContent === 'C')) {
                        btn.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            btn.style.transform = '';
                        }, 100);
                    }
                });
            }
        }

        // Initialize the calculator
        const calculator = new PremiumCalculator();
        
        // Global wrapper functions for HTML onclick handlers
        function appendToDisplay(value) {
            calculator.appendToDisplay(value);
        }
        
        function calculate() {
            calculator.calculate();
        }
        
        function clearDisplay() {
            calculator.clearDisplay();
        }
        
        function deleteLast() {
            calculator.deleteLast();
        }
    </script>
</body>
</html>`;
    }
    
    if (type === 'password-generator') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Password Generator</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #3b82f6;
            --accent-hover: #2563eb;
            --accent-light: #dbeafe;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba7 100%);
            --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
            --gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            --gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                --gradient-danger: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
                --gradient-warning: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: var(--gradient-accent);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            position: relative;
            z-index: 1;
        }

        .content {
            padding: 30px;
            background: var(--bg-primary);
        }

        .password-display {
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }

        .password-display::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--accent-color), var(--success-color), var(--warning-color), var(--danger-color));
            animation: rainbow 3s ease-in-out infinite;
        }

        @keyframes rainbow {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
        }

        .password-wrapper {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .password-input {
            flex: 1;
            padding: 16px 20px;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            font-size: 1.1rem;
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
            background: var(--bg-input);
            color: var(--text-primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 600;
            letter-spacing: 0.05em;
        }

        .password-input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px var(--accent-light);
        }

        .copy-btn {
            padding: 16px 20px;
            background: var(--gradient-success);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
            min-width: 120px;
        }

        .copy-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .copy-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .copy-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .copy-btn.copied {
            background: var(--gradient-success);
        }

        .options-section {
            margin-bottom: 30px;
        }

        .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .length-control {
            margin-bottom: 25px;
        }

        .length-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .length-label {
            font-weight: 600;
            color: var(--text-primary);
        }

        .length-value {
            background: var(--accent-color);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.875rem;
        }

        .length-slider {
            width: 100%;
            height: 8px;
            border-radius: 4px;
            background: var(--bg-tertiary);
            outline: none;
            -webkit-appearance: none;
            appearance: none;
            cursor: pointer;
        }

        .length-slider::-webkit-slider-track {
            background: var(--bg-tertiary);
            border-radius: 4px;
            height: 8px;
        }

        .length-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background: var(--gradient-accent);
            border-radius: 50%;
            cursor: pointer;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }

        .length-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
            box-shadow: var(--shadow-lg);
        }

        .length-slider::-moz-range-track {
            background: var(--bg-tertiary);
            border-radius: 4px;
            height: 8px;
        }

        .length-slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: var(--gradient-accent);
            border-radius: 50%;
            cursor: pointer;
            border: none;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }

        .length-slider::-moz-range-thumb:hover {
            transform: scale(1.2);
            box-shadow: var(--shadow-lg);
        }

        .character-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
        }

        .option-card {
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 16px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .option-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .option-card:hover::before {
            opacity: 1;
        }

        .option-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-color);
        }

        .option-card.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .option-card.disabled:hover {
            transform: none;
            box-shadow: none;
            border-color: var(--border-color);
        }

        .option-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .option-title {
            font-weight: 600;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .option-checkbox {
            width: 20px;
            height: 20px;
            accent-color: var(--accent-color);
            cursor: pointer;
        }

        .option-description {
            font-size: 0.875rem;
            color: var(--text-secondary);
            line-height: 1.4;
        }

        .strength-section {
            margin-bottom: 30px;
        }

        .strength-meter {
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .strength-bar-container {
            background: var(--bg-secondary);
            border-radius: 8px;
            height: 12px;
            overflow: hidden;
            margin-bottom: 12px;
            position: relative;
        }

        .strength-bar {
            height: 100%;
            border-radius: 8px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .strength-bar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
        }

        .strength-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .strength-label {
            font-weight: 600;
            color: var(--text-primary);
        }

        .strength-score {
            font-weight: 600;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.875rem;
        }

        .strength-weak { background: var(--gradient-danger); color: white; }
        .strength-fair { background: var(--gradient-warning); color: white; }
        .strength-good { background: var(--gradient-accent); color: white; }
        .strength-strong { background: var(--gradient-success); color: white; }

        .generate-btn {
            width: 100%;
            padding: 18px 24px;
            background: var(--gradient-accent);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }

        .generate-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .generate-btn:hover::before {
            width: 400px;
            height: 400px;
        }

        .generate-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-xl);
        }

        .generate-btn:active {
            transform: translateY(0);
        }

        .history-section {
            background: var(--bg-tertiary);
            border-radius: 12px;
            padding: 20px;
            max-height: 200px;
            overflow-y: auto;
        }

        .history-title {
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .history-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .history-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: var(--bg-primary);
            border-radius: 8px;
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
            font-size: 0.875rem;
            transition: all 0.2s ease;
        }

        .history-item:hover {
            background: var(--bg-secondary);
            transform: translateX(4px);
        }

        .history-password {
            color: var(--text-primary);
            font-weight: 600;
        }

        .history-strength {
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
            .container {
                padding: 8px;
            }

            .app-wrapper {
                border-radius: 20px;
                margin: 8px;
            }

            .header {
                padding: 25px 15px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .header p {
                font-size: 1rem;
            }

            .content {
                padding: 15px;
            }

            .password-display {
                padding: 15px;
                font-size: 1rem;
            }

            .password-wrapper {
                flex-direction: column;
            }

            .copy-btn {
                width: 100%;
                margin-top: 10px;
            }

            .character-options {
                grid-template-columns: 1fr;
                gap: 12px;
            }

            .option-item {
                padding: 12px;
            }

            .slider-container {
                padding: 15px;
            }

            .slider {
                width: 100%;
            }

            .generate-btn {
                width: 100%;
                padding: 15px;
                font-size: 1rem;
            }

            .history-section {
                padding: 15px;
            }

            .history-item {
                padding: 10px 12px;
                font-size: 0.8rem;
            }
        }

        /* Custom scrollbar */
        .history-section::-webkit-scrollbar {
            width: 6px;
        }

        .history-section::-webkit-scrollbar-track {
            background: var(--bg-primary);
            border-radius: 3px;
        }

        .history-section::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 3px;
        }

        .history-section::-webkit-scrollbar-thumb:hover {
            background: var(--text-secondary);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>🔐 Secure Password Generator</h1>
                <p>Create strong, unique passwords with advanced security features</p>
            </div>
            
            <div class="content">
                <div class="password-display">
                    <div class="password-wrapper">
                        <input type="text" class="password-input" id="password" readonly placeholder="Click generate to create password">
                        <button class="copy-btn" id="copyBtn" onclick="copyPassword()">
                            <span id="copyText">📋 Copy</span>
                        </button>
                    </div>
                </div>
                
                <div class="options-section">
                    <h2 class="section-title">⚙️ Password Options</h2>
                    
                    <div class="length-control">
                        <div class="length-header">
                            <span class="length-label">Password Length</span>
                            <span class="length-value" id="lengthValue">16</span>
                        </div>
                        <input type="range" class="length-slider" id="length" min="8" max="32" value="16">
                    </div>
                    
                    <div class="character-options">
                        <div class="option-card" id="uppercaseCard" onclick="toggleOption('uppercase')">
                            <div class="option-header">
                                <span class="option-title">
                                    🔠 Uppercase Letters
                                </span>
                                <input type="checkbox" class="option-checkbox" id="uppercase" checked>
                            </div>
                            <p class="option-description">Include uppercase letters (A-Z)</p>
                        </div>
                        
                        <div class="option-card" id="lowercaseCard" onclick="toggleOption('lowercase')">
                            <div class="option-header">
                                <span class="option-title">
                                    🔡 Lowercase Letters
                                </span>
                                <input type="checkbox" class="option-checkbox" id="lowercase" checked>
                            </div>
                            <p class="option-description">Include lowercase letters (a-z)</p>
                        </div>
                        
                        <div class="option-card" id="numbersCard" onclick="toggleOption('numbers')">
                            <div class="option-header">
                                <span class="option-title">
                                    🔢 Numbers
                                </span>
                                <input type="checkbox" class="option-checkbox" id="numbers" checked>
                            </div>
                            <p class="option-description">Include numbers (0-9)</p>
                        </div>
                        
                        <div class="option-card" id="symbolsCard" onclick="toggleOption('symbols')">
                            <div class="option-header">
                                <span class="option-title">
                                    🔣 Special Symbols
                                </span>
                                <input type="checkbox" class="option-checkbox" id="symbols" checked>
                            </div>
                            <p class="option-description">Include special characters (!@#$%^&*)</p>
                        </div>
                    </div>
                </div>
                
                <div class="strength-section">
                    <h2 class="section-title">💪 Password Strength</h2>
                    <div class="strength-meter">
                        <div class="strength-bar-container">
                            <div class="strength-bar" id="strengthBar"></div>
                        </div>
                        <div class="strength-info">
                            <span class="strength-label" id="strengthLabel">Password Strength</span>
                            <span class="strength-score" id="strengthScore">-</span>
                        </div>
                    </div>
                </div>
                
                <button class="generate-btn" onclick="generatePassword()">
                    🎲 Generate New Password
                </button>
                
                <div class="history-section" style="margin-top: 30px;">
                    <h3 class="history-title">📜 Recent Passwords</h3>
                    <div class="history-list" id="historyList">
                        <p style="color: var(--text-secondary); text-align: center;">No passwords generated yet</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        class SecurePasswordGenerator {
            constructor() {
                this.lengthSlider = document.getElementById('length');
                this.lengthValue = document.getElementById('lengthValue');
                this.passwordInput = document.getElementById('password');
                this.strengthBar = document.getElementById('strengthBar');
                this.strengthLabel = document.getElementById('strengthLabel');
                this.strengthScore = document.getElementById('strengthScore');
                this.copyBtn = document.getElementById('copyBtn');
                this.copyText = document.getElementById('copyText');
                this.historyList = document.getElementById('historyList');
                
                this.passwordHistory = [];
                this.maxHistoryItems = 5;
                
                this.init();
            }

            init() {
                this.bindEvents();
                this.generatePassword();
                this.loadHistory();
            }

            bindEvents() {
                this.lengthSlider.addEventListener('input', () => {
                    this.lengthValue.textContent = this.lengthSlider.value;
                    this.generatePassword();
                });

                ['uppercase', 'lowercase', 'numbers', 'symbols'].forEach(option => {
                    const checkbox = document.getElementById(option);
                    checkbox.addEventListener('change', () => {
                        this.validateOptions();
                        this.generatePassword();
                    });
                });
            }

            validateOptions() {
                const options = ['uppercase', 'lowercase', 'numbers', 'symbols'];
                const checkedOptions = options.filter(option => document.getElementById(option).checked);
                
                if (checkedOptions.length === 0) {
                    // Always keep at least one option checked
                    document.getElementById('lowercase').checked = true;
                }
                
                // Update card styles
                options.forEach(option => {
                    const card = document.getElementById(option + 'Card');
                    const checkbox = document.getElementById(option);
                    
                    if (checkbox.checked) {
                        card.classList.remove('disabled');
                    } else {
                        card.classList.add('disabled');
                    }
                });
            }

            generatePassword() {
                const length = parseInt(this.lengthSlider.value);
                const useUppercase = document.getElementById('uppercase').checked;
                const useLowercase = document.getElementById('lowercase').checked;
                const useNumbers = document.getElementById('numbers').checked;
                const useSymbols = document.getElementById('symbols').checked;
                
                let charset = '';
                
                if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
                if (useNumbers) charset += '0123456789';
                if (useSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
                
                let password = '';
                
                // Ensure at least one character from each selected type
                const guaranteedChars = [];
                if (useUppercase) guaranteedChars.push(this.getRandomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
                if (useLowercase) guaranteedChars.push(this.getRandomChar('abcdefghijklmnopqrstuvwxyz'));
                if (useNumbers) guaranteedChars.push(this.getRandomChar('0123456789'));
                if (useSymbols) guaranteedChars.push(this.getRandomChar('!@#$%^&*()_+-=[]{}|;:,.<>?'));
                
                // Fill the rest randomly
                for (let i = guaranteedChars.length; i < length; i++) {
                    password += this.getRandomChar(charset);
                }
                
                // Add guaranteed characters and shuffle
                password += guaranteedChars.join('');
                password = this.shuffleString(password);
                
                this.passwordInput.value = password;
                this.updateStrength(password);
            }

            getRandomChar(charset) {
                return charset.charAt(Math.floor(Math.random() * charset.length));
            }

            shuffleString(str) {
                const arr = str.split('');
                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                return arr.join('');
            }

            updateStrength(password) {
                const length = password.length;
                let strength = 0;
                let strengthLabel = '';
                let strengthClass = '';
                let strengthColor = '';
                
                // Length scoring
                if (length >= 8) strength += 20;
                if (length >= 12) strength += 20;
                if (length >= 16) strength += 20;
                if (length >= 20) strength += 20;
                
                // Character variety scoring
                if (/[a-z]/.test(password)) strength += 10;
                if (/[A-Z]/.test(password)) strength += 10;
                if (/[0-9]/.test(password)) strength += 10;
                if (/[^a-zA-Z0-9]/.test(password)) strength += 10;
                
                // Determine strength level
                if (strength <= 30) {
                    strengthLabel = 'Weak';
                    strengthClass = 'strength-weak';
                    strengthColor = '#ef4444';
                } else if (strength <= 50) {
                    strengthLabel = 'Fair';
                    strengthClass = 'strength-fair';
                    strengthColor = '#f59e0b';
                } else if (strength <= 70) {
                    strengthLabel = 'Good';
                    strengthClass = 'strength-good';
                    strengthColor = '#3b82f6';
                } else {
                    strengthLabel = 'Strong';
                    strengthClass = 'strength-strong';
                    strengthColor = '#10b981';
                }
                
                // Update UI
                this.strengthBar.style.width = strength + '%';
                this.strengthBar.style.background = strengthColor;
                this.strengthLabel.textContent = strengthLabel;
                this.strengthScore.textContent = strength + '/100';
                this.strengthScore.className = 'strength-score ' + strengthClass;
            }

            copyPassword() {
                const password = this.passwordInput.value;
                
                if (!password) {
                    this.showNotification('No password to copy!', 'warning');
                    return;
                }
                
                navigator.clipboard.writeText(password).then(() => {
                    this.copyText.textContent = '✅ Copied!';
                    this.copyBtn.classList.add('copied');
                    
                    this.addToHistory(password);
                    this.showNotification('Password copied to clipboard!', 'success');
                    
                    setTimeout(() => {
                        this.copyText.textContent = '📋 Copy';
                        this.copyBtn.classList.remove('copied');
                    }, 2000);
                }).catch(() => {
                    this.showNotification('Failed to copy password', 'error');
                });
            }

            addToHistory(password) {
                const strength = this.calculateStrengthScore(password);
                const historyItem = {
                    password: password,
                    strength: strength,
                    timestamp: new Date().toISOString()
                };
                
                this.passwordHistory.unshift(historyItem);
                
                if (this.passwordHistory.length > this.maxHistoryItems) {
                    this.passwordHistory = this.passwordHistory.slice(0, this.maxHistoryItems);
                }
                
                this.saveHistory();
                this.renderHistory();
            }

            calculateStrengthScore(password) {
                const length = password.length;
                let strength = 0;
                
                if (length >= 8) strength += 20;
                if (length >= 12) strength += 20;
                if (length >= 16) strength += 20;
                if (length >= 20) strength += 20;
                
                if (/[a-z]/.test(password)) strength += 10;
                if (/[A-Z]/.test(password)) strength += 10;
                if (/[0-9]/.test(password)) strength += 10;
                if (/[^a-zA-Z0-9]/.test(password)) strength += 10;
                
                return strength;
            }

            renderHistory() {
                if (this.passwordHistory.length === 0) {
                    this.historyList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No passwords generated yet</p>';
                    return;
                }
                
                this.historyList.innerHTML = this.passwordHistory.map(item => {
                    let strengthClass = 'strength-weak';
                    if (item.strength > 70) strengthClass = 'strength-strong';
                    else if (item.strength > 50) strengthClass = 'strength-good';
                    else if (item.strength > 30) strengthClass = 'strength-fair';
                    
                    return \`
                        <div class="history-item">
                            <span class="history-password">\${item.password}</span>
                            <span class="history-strength \${strengthClass}">\${item.strength}%</span>
                        </div>
                    \`;
                }).join('');
            }

            saveHistory() {
                // Note: In a real app, you might want to encrypt this
                localStorage.setItem('passwordHistory', JSON.stringify(this.passwordHistory));
            }

            loadHistory() {
                const saved = localStorage.getItem('passwordHistory');
                if (saved) {
                    try {
                        this.passwordHistory = JSON.parse(saved);
                        this.renderHistory();
                    } catch (e) {
                        this.passwordHistory = [];
                    }
                }
            }

            showNotification(message, type = 'info') {
                const notification = document.createElement('div');
                notification.style.cssText = \`
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 16px 24px;
                    border-radius: 12px;
                    color: white;
                    font-weight: 600;
                    z-index: 1000;
                    animation: slideIn 0.3s ease-out;
                    box-shadow: var(--shadow-lg);
                \`;
                
                switch(type) {
                    case 'success':
                        notification.style.background = 'var(--gradient-success)';
                        break;
                    case 'warning':
                        notification.style.background = 'var(--gradient-warning)';
                        break;
                    case 'error':
                        notification.style.background = 'var(--gradient-danger)';
                        break;
                    default:
                        notification.style.background = 'var(--gradient-accent)';
                }
                
                notification.textContent = message;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease-out';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }
        }

        // Global functions for onclick handlers
        let generator;

        function toggleOption(option) {
            const checkbox = document.getElementById(option);
            checkbox.checked = !checkbox.checked;
            generator.validateOptions();
            generator.generatePassword();
        }

        function copyPassword() {
            generator.copyPassword();
        }

        function generatePassword() {
            generator.generatePassword();
        }

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(20px);
                }
            }
        \`;
        document.head.appendChild(style);

        // Initialize the generator
        generator = new SecurePasswordGenerator();
    </script>
</body>
</html>`;
    }
    
    if (type === 'quiz-app') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Quiz Application</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #3b82f6;
            --accent-hover: #2563eb;
            --accent-light: #dbeafe;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
            --gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                --gradient-danger: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: var(--gradient-accent);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            position: relative;
            z-index: 1;
        }

        .content {
            padding: 30px;
            background: var(--bg-primary);
        }

        .quiz-progress {
            margin-bottom: 30px;
        }

        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .progress-label {
            font-weight: 600;
            color: var(--text-primary);
        }

        .progress-value {
            background: var(--accent-color);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.875rem;
        }

        .progress-bar {
            background: var(--bg-tertiary);
            border-radius: 12px;
            height: 12px;
            overflow: hidden;
            position: relative;
        }

        .progress-fill {
            height: 100%;
            background: var(--gradient-accent);
            border-radius: 12px;
            transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .progress-fill::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
        }

        .quiz-card {
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }

        .quiz-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-color), var(--success-color), var(--warning-color), var(--danger-color));
            animation: rainbow 3s ease-in-out infinite;
        }

        @keyframes rainbow {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
        }

        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .question-number {
            background: var(--accent-color);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.875rem;
        }

        .question-category {
            background: var(--bg-primary);
            color: var(--text-secondary);
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.875rem;
            border: 1px solid var(--border-color);
        }

        .question-text {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 25px;
            line-height: 1.5;
        }

        .options-grid {
            display: grid;
            gap: 12px;
        }

        .option-card {
            background: var(--bg-primary);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 16px 20px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .option-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .option-card:hover::before {
            opacity: 1;
        }

        .option-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-color);
        }

        .option-card.selected {
            border-color: var(--accent-color);
            background: var(--accent-light);
        }

        .option-card.correct {
            border-color: var(--success-color);
            background: var(--success-light);
            animation: correctPulse 0.6s ease-out;
        }

        .option-card.incorrect {
            border-color: var(--danger-color);
            background: var(--danger-light);
            animation: shake 0.5s ease-out;
        }

        @keyframes correctPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        .option-radio {
            width: 20px;
            height: 20px;
            border: 2px solid var(--border-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            flex-shrink: 0;
        }

        .option-card.selected .option-radio {
            border-color: var(--accent-color);
            background: var(--accent-color);
        }

        .option-card.correct .option-radio {
            border-color: var(--success-color);
            background: var(--success-color);
        }

        .option-card.incorrect .option-radio {
            border-color: var(--danger-color);
            background: var(--danger-color);
        }

        .option-radio::after {
            content: '';
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .option-card.selected .option-radio::after,
        .option-card.correct .option-radio::after,
        .option-card.incorrect .option-radio::after {
            opacity: 1;
        }

        .option-text {
            flex: 1;
            font-weight: 500;
            color: var(--text-primary);
        }

        .option-feedback {
            font-size: 0.875rem;
            margin-top: 8px;
            padding: 8px 12px;
            border-radius: 8px;
            display: none;
        }

        .option-card.correct .option-feedback {
            display: block;
            background: var(--success-light);
            color: var(--success-color);
        }

        .option-card.incorrect .option-feedback {
            display: block;
            background: var(--danger-light);
            color: var(--danger-color);
        }

        .quiz-actions {
            display: flex;
            gap: 12px;
            margin-bottom: 30px;
        }

        .action-btn {
            flex: 1;
            padding: 16px 24px;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }

        .action-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .action-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .submit-btn {
            background: var(--gradient-accent);
            color: white;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .submit-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .next-btn {
            background: var(--gradient-success);
            color: white;
        }

        .next-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .restart-btn {
            background: var(--gradient-danger);
            color: white;
        }

        .restart-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .results-section {
            text-align: center;
            padding: 40px 20px;
            background: var(--bg-tertiary);
            border-radius: 16px;
            margin-bottom: 30px;
        }

        .results-icon {
            font-size: 4rem;
            margin-bottom: 20px;
        }

        .results-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 12px;
        }

        .results-score {
            font-size: 3rem;
            font-weight: 700;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
        }

        .results-message {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 30px;
        }

        .results-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 16px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: var(--bg-primary);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--accent-color);
            display: block;
            margin-bottom: 8px;
        }

        .stat-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .timer {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--bg-tertiary);
            padding: 12px 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            border: 1px solid var(--border-color);
        }

        .timer-icon {
            font-size: 1.2rem;
        }

        .timer-text {
            font-weight: 600;
            color: var(--text-primary);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
            .container {
                padding: 8px;
            }

            .app-wrapper {
                border-radius: 20px;
                margin: 8px;
            }

            .header {
                padding: 25px 15px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .header p {
                font-size: 1rem;
            }

            .content {
                padding: 15px;
            }

            .quiz-card {
                padding: 15px;
            }

            .question-text {
                font-size: 1rem;
                line-height: 1.5;
            }

            .options-grid {
                gap: 10px;
            }

            .option-btn {
                padding: 15px;
                font-size: 0.9rem;
            }

            .quiz-controls {
                flex-direction: column;
                gap: 10px;
            }

            .progress-bar {
                height: 8px;
            }

            .timer {
                padding: 10px 15px;
                font-size: 0.9rem;
            }

            .results-card {
                padding: 20px;
            }

            .results-title {
                font-size: 1.5rem;
            }

            .results-score {
                font-size: 2.5rem;
            }

            .results-message {
                font-size: 1rem;
            }
        }

        @media (max-width: 640px) {
            .quiz-actions {
                flex-direction: column;
            }

            .results-stats {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>🧠 Interactive Quiz</h1>
                <p>Test your knowledge with engaging questions</p>
            </div>
            
            <div class="content">
                <div class="quiz-progress">
                    <div class="progress-header">
                        <span class="progress-label">Progress</span>
                        <span class="progress-value" id="progressValue">1/5</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill" style="width: 20%"></div>
                    </div>
                </div>
                
                <div class="timer" id="timer">
                    <span class="timer-icon">⏱️</span>
                    <span class="timer-text" id="timerText">00:00</span>
                </div>
                
                <div id="quizContent">
                    <div class="quiz-card">
                        <div class="question-header">
                            <span class="question-number" id="questionNumber">Question 1</span>
                            <span class="question-category" id="questionCategory">JavaScript</span>
                        </div>
                        <h2 class="question-text" id="questionText">What is the output of: console.log(typeof null)?</h2>
                        
                        <div class="options-grid" id="optionsGrid">
                            <div class="option-card" onclick="selectOption(0)">
                                <div class="option-radio"></div>
                                <span class="option-text">"null"</span>
                                <div class="option-feedback">Incorrect! typeof null returns "object" due to a JavaScript bug.</div>
                            </div>
                            <div class="option-card" onclick="selectOption(1)">
                                <div class="option-radio"></div>
                                <span class="option-text">"object"</span>
                                <div class="option-feedback">Correct! typeof null returns "object" due to a JavaScript bug.</div>
                            </div>
                            <div class="option-card" onclick="selectOption(2)">
                                <div class="option-radio"></div>
                                <span class="option-text">"undefined"</span>
                                <div class="option-feedback">Incorrect! typeof null returns "object" due to a JavaScript bug.</div>
                            </div>
                            <div class="option-card" onclick="selectOption(3)">
                                <div class="option-radio"></div>
                                <span class="option-text">Error</span>
                                <div class="option-feedback">Incorrect! typeof null returns "object" due to a JavaScript bug.</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="quiz-actions">
                    <button class="action-btn submit-btn" id="submitBtn" onclick="submitAnswer()" disabled>
                        Submit Answer
                    </button>
                    <button class="action-btn next-btn" id="nextBtn" onclick="nextQuestion()" style="display: none;">
                        Next Question →
                    </button>
                    <button class="action-btn restart-btn" id="restartBtn" onclick="restartQuiz()" style="display: none;">
                        Restart Quiz
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script>
        class InteractiveQuiz {
            constructor() {
                this.questions = [
                    {
                        question: "What is the output of: console.log(typeof null)?",
                        options: ["null", "object", "undefined", "Error"],
                        correct: 1,
                        category: "JavaScript",
                        explanation: "typeof null returns 'object' due to a JavaScript bug. This is a well-known quirk in the language."
                    },
                    {
                        question: "Which method adds an element to the end of an array?",
                        options: ["push()", "pop()", "shift()", "unshift()"],
                        correct: 0,
                        category: "JavaScript",
                        explanation: "push() adds one or more elements to the end of an array and returns the new length."
                    },
                    {
                        question: "What does the '===' operator check?",
                        options: ["Value only", "Type and value", "Reference only", "Type only"],
                        correct: 1,
                        category: "JavaScript",
                        explanation: "The '===' operator checks both value and type, making it a strict equality operator."
                    },
                    {
                        question: "Which keyword is used to declare a constant?",
                        options: ["var", "let", "const", "constant"],
                        correct: 2,
                        category: "JavaScript",
                        explanation: "const is used to declare variables whose values cannot be reassigned."
                    },
                    {
                        question: "What is the default value of an uninitialized variable?",
                        options: ["null", "undefined", "0", "false"],
                        correct: 1,
                        category: "JavaScript",
                        explanation: "Uninitialized variables in JavaScript have the value 'undefined'."
                    }
                ];
                
                this.currentQuestion = 0;
                this.score = 0;
                this.selectedOption = null;
                this.isAnswered = false;
                this.startTime = Date.now();
                this.timerInterval = null;
                
                this.init();
            }

            init() {
                this.loadQuestion();
                this.startTimer();
                this.updateProgress();
            }

            startTimer() {
                this.timerInterval = setInterval(() => {
                    const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                    const minutes = Math.floor(elapsed / 60);
                    const seconds = elapsed % 60;
                    document.getElementById('timerText').textContent = 
                        \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
                }, 1000);
            }

            stopTimer() {
                if (this.timerInterval) {
                    clearInterval(this.timerInterval);
                    this.timerInterval = null;
                }
            }

            loadQuestion() {
                const question = this.questions[this.currentQuestion];
                
                document.getElementById('questionNumber').textContent = \`Question \${this.currentQuestion + 1}\`;
                document.getElementById('questionCategory').textContent = question.category;
                document.getElementById('questionText').textContent = question.question;
                
                const optionsGrid = document.getElementById('optionsGrid');
                optionsGrid.innerHTML = question.options.map((option, index) => \`
                    <div class="option-card" onclick="selectOption(\${index})">
                        <div class="option-radio"></div>
                        <span class="option-text">\${option}</span>
                        <div class="option-feedback">\${question.explanation}</div>
                    </div>
                \`).join('');
                
                this.selectedOption = null;
                this.isAnswered = false;
                document.getElementById('submitBtn').disabled = true;
                document.getElementById('submitBtn').style.display = 'block';
                document.getElementById('nextBtn').style.display = 'none';
                document.getElementById('restartBtn').style.display = 'none';
            }

            selectOption(index) {
                if (this.isAnswered) return;
                
                // Remove previous selection
                document.querySelectorAll('.option-card').forEach(card => {
                    card.classList.remove('selected');
                });
                
                // Add selection to clicked option
                document.querySelectorAll('.option-card')[index].classList.add('selected');
                this.selectedOption = index;
                
                // Enable submit button
                document.getElementById('submitBtn').disabled = false;
            }

            submitAnswer() {
                if (this.selectedOption === null || this.isAnswered) return;
                
                this.isAnswered = true;
                const question = this.questions[this.currentQuestion];
                const optionCards = document.querySelectorAll('.option-card');
                
                // Show correct/incorrect feedback
                if (this.selectedOption === question.correct) {
                    optionCards[this.selectedOption].classList.add('correct');
                    this.score++;
                } else {
                    optionCards[this.selectedOption].classList.add('incorrect');
                    optionCards[question.correct].classList.add('correct');
                }
                
                // Hide submit button, show next or restart button
                document.getElementById('submitBtn').style.display = 'none';
                
                if (this.currentQuestion < this.questions.length - 1) {
                    document.getElementById('nextBtn').style.display = 'block';
                } else {
                    this.showResults();
                }
            }

            nextQuestion() {
                this.currentQuestion++;
                this.loadQuestion();
                this.updateProgress();
            }

            updateProgress() {
                const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
                document.getElementById('progressFill').style.width = progress + '%';
                document.getElementById('progressValue').textContent = 
                    \`\${this.currentQuestion + 1}/\${this.questions.length}\`;
            }

            showResults() {
                this.stopTimer();
                
                const percentage = Math.round((this.score / this.questions.length) * 100);
                let message = '';
                let icon = '';
                
                if (percentage >= 80) {
                    message = "Excellent work! You're a JavaScript master! 🎉";
                    icon = "🏆";
                } else if (percentage >= 60) {
                    message = "Good job! You have solid JavaScript knowledge! 👍";
                    icon = "⭐";
                } else if (percentage >= 40) {
                    message = "Not bad! Keep practicing to improve! 📚";
                    icon = "📖";
                } else {
                    message = "Keep learning! JavaScript takes time to master! 💪";
                    icon = "🎯";
                }
                
                const quizContent = document.getElementById('quizContent');
                quizContent.innerHTML = \`
                    <div class="results-section">
                        <div class="results-icon">\${icon}</div>
                        <h2 class="results-title">Quiz Complete!</h2>
                        <div class="results-score">\${percentage}%</div>
                        <p class="results-message">\${message}</p>
                        
                        <div class="results-stats">
                            <div class="stat-card">
                                <span class="stat-value">\${this.score}</span>
                                <span class="stat-label">Correct</span>
                            </div>
                            <div class="stat-card">
                                <span class="stat-value">\${this.questions.length - this.score}</span>
                                <span class="stat-label">Incorrect</span>
                            </div>
                            <div class="stat-card">
                                <span class="stat-value">\${this.questions.length}</span>
                                <span class="stat-label">Total Questions</span>
                            </div>
                            <div class="stat-card">
                                <span class="stat-value" id="finalTime">00:00</span>
                                <span class="stat-label">Time Taken</span>
                            </div>
                        </div>
                    </div>
                \`;
                
                // Update final time
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                const minutes = Math.floor(elapsed / 60);
                const seconds = elapsed % 60;
                document.getElementById('finalTime').textContent = 
                    \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
                
                // Show restart button
                document.getElementById('restartBtn').style.display = 'block';
            }

            restartQuiz() {
                this.currentQuestion = 0;
                this.score = 0;
                this.selectedOption = null;
                this.isAnswered = false;
                this.startTime = Date.now();
                
                this.stopTimer();
                this.startTimer();
                this.loadQuestion();
                this.updateProgress();
            }
        }

        // Global functions for onclick handlers
        let quiz;

        function selectOption(index) {
            quiz.selectOption(index);
        }

        function submitAnswer() {
            quiz.submitAnswer();
        }

        function nextQuestion() {
            quiz.nextQuestion();
        }

        function restartQuiz() {
            quiz.restartQuiz();
        }

        // Initialize the quiz
        quiz = new InteractiveQuiz();
    </script>
</body>
</html>`;
    }
    
    if (type === 'weather-app') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #3b82f6;
            --accent-hover: #2563eb;
            --accent-light: #dbeafe;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
            --gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            --gradient-sunny: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            --gradient-cloudy: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
            --gradient-rainy: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                --gradient-warning: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                --gradient-sunny: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                --gradient-cloudy: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
                --gradient-rainy: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: var(--gradient-accent);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            position: relative;
            z-index: 1;
        }

        .content {
            padding: 30px;
            background: var(--bg-primary);
        }

        .search-section {
            margin-bottom: 30px;
        }

        .search-wrapper {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
        }

        .search-input {
            flex: 1;
            padding: 16px 20px;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            font-size: 16px;
            background: var(--bg-input);
            color: var(--text-primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 500;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px var(--accent-light);
            transform: translateY(-1px);
        }

        .search-input::placeholder {
            color: var(--text-muted);
        }

        .search-btn {
            padding: 16px 24px;
            background: var(--gradient-accent);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }

        .search-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .search-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .search-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .search-btn:active {
            transform: translateY(0);
        }

        .location-btn {
            padding: 16px 20px;
            background: var(--gradient-success);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }

        .location-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .quick-cities {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .city-chip {
            padding: 8px 16px;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .city-chip:hover {
            background: var(--accent-color);
            color: white;
            border-color: var(--accent-color);
            transform: translateY(-1px);
        }

        .weather-display {
            display: none;
        }

        .weather-display.active {
            display: block;
        }

        .current-weather {
            background: var(--bg-tertiary);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }

        .current-weather::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--gradient-sunny);
        }

        .current-weather.cloudy::before {
            background: var(--gradient-cloudy);
        }

        .current-weather.rainy::before {
            background: var(--gradient-rainy);
        }

        .weather-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .weather-info {
            flex: 1;
        }

        .city-name {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
        }

        .weather-description {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 20px;
            text-transform: capitalize;
        }

        .temperature {
            font-size: 4rem;
            font-weight: 700;
            color: var(--text-primary);
            line-height: 1;
        }

        .weather-icon {
            font-size: 6rem;
            text-align: center;
            animation: weatherFloat 3s ease-in-out infinite;
        }

        @keyframes weatherFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .weather-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 16px;
        }

        .detail-card {
            background: var(--bg-primary);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            text-align: center;
            transition: all 0.3s ease;
        }

        .detail-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .detail-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }

        .detail-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 4px;
        }

        .detail-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .forecast-section {
            margin-top: 30px;
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .forecast-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 16px;
        }

        .forecast-card {
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .forecast-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-color);
        }

        .forecast-day {
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
        }

        .forecast-icon {
            font-size: 2.5rem;
            margin-bottom: 12px;
        }

        .forecast-temp {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 4px;
        }

        .forecast-desc {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: var(--text-secondary);
        }

        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--border-color);
            border-top: 4px solid var(--accent-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .error {
            background: var(--danger-light);
            border: 1px solid var(--danger-color);
            color: var(--danger-color);
            padding: 16px 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }

            .app-wrapper {
                border-radius: 20px;
            }

            .header {
                padding: 30px 20px;
            }

            .header h1 {
                font-size: 2rem;
            }

            .content {
                padding: 20px;
            }

            .search-wrapper {
                flex-direction: column;
            }

            .weather-main {
                flex-direction: column;
                text-align: center;
                gap: 20px;
            }

            .temperature {
                font-size: 3rem;
            }

            .weather-icon {
                font-size: 4rem;
            }

            .forecast-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>🌤️ Weather Dashboard</h1>
                <p>Get real-time weather information for any city</p>
            </div>
            
            <div class="content">
                <div class="search-section">
                    <div class="search-wrapper">
                        <input type="text" class="search-input" id="searchInput" placeholder="Enter city name..." autofocus>
                        <button class="search-btn" onclick="searchWeather()">Search</button>
                        <button class="location-btn" onclick="getCurrentLocation()">📍 My Location</button>
                    </div>
                    
                    <div class="quick-cities">
                        <div class="city-chip" onclick="quickSearch('London')">London</div>
                        <div class="city-chip" onclick="quickSearch('New York')">New York</div>
                        <div class="city-chip" onclick="quickSearch('Tokyo')">Tokyo</div>
                        <div class="city-chip" onclick="quickSearch('Paris')">Paris</div>
                        <div class="city-chip" onclick="quickSearch('Sydney')">Sydney</div>
                        <div class="city-chip" onclick="quickSearch('Dubai')">Dubai</div>
                    </div>
                </div>
                
                <div id="errorContainer"></div>
                
                <div class="weather-display" id="weatherDisplay">
                    <div class="current-weather" id="currentWeather">
                        <div class="weather-main">
                            <div class="weather-info">
                                <h2 class="city-name" id="cityName">--</h2>
                                <p class="weather-description" id="weatherDescription">--</p>
                                <div class="temperature" id="temperature">--°</div>
                            </div>
                            <div class="weather-icon" id="weatherIcon">🌤️</div>
                        </div>
                        
                        <div class="weather-details">
                            <div class="detail-card">
                                <div class="detail-icon">🌡️</div>
                                <div class="detail-value" id="feelsLike">--°</div>
                                <div class="detail-label">Feels Like</div>
                            </div>
                            <div class="detail-card">
                                <div class="detail-icon">💧</div>
                                <div class="detail-value" id="humidity">--%</div>
                                <div class="detail-label">Humidity</div>
                            </div>
                            <div class="detail-card">
                                <div class="detail-icon">💨</div>
                                <div class="detail-value" id="windSpeed">-- mph</div>
                                <div class="detail-label">Wind Speed</div>
                            </div>
                            <div class="detail-card">
                                <div class="detail-icon">👁️</div>
                                <div class="detail-value" id="visibility">-- mi</div>
                                <div class="detail-label">Visibility</div>
                            </div>
                            <div class="detail-card">
                                <div class="detail-icon">🌅</div>
                                <div class="detail-value" id="sunrise">--:--</div>
                                <div class="detail-label">Sunrise</div>
                            </div>
                            <div class="detail-card">
                                <div class="detail-icon">🌇</div>
                                <div class="detail-value" id="sunset">--:--</div>
                                <div class="detail-label">Sunset</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="forecast-section">
                        <h3 class="section-title">📅 5-Day Forecast</h3>
                        <div class="forecast-grid" id="forecastGrid">
                            <!-- Forecast cards will be inserted here -->
                        </div>
                    </div>
                </div>
                
                <div class="loading" id="loading" style="display: none;">
                    <div class="loading-spinner"></div>
                    <p>Loading weather data...</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        class WeatherDashboard {
            constructor() {
                this.apiKey = 'demo'; // In production, use a real API key
                this.searchInput = document.getElementById('searchInput');
                this.weatherDisplay = document.getElementById('weatherDisplay');
                this.loading = document.getElementById('loading');
                this.errorContainer = document.getElementById('errorContainer');
                
                this.init();
            }

            init() {
                // Add enter key support
                this.searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.searchWeather();
                    }
                });

                // Load default city
                this.searchWeather();
            }

            async searchWeather() {
                const city = this.searchInput.value.trim();
                if (!city) {
                    this.showError('Please enter a city name');
                    return;
                }

                await this.fetchWeatherData(city);
            }

            async getCurrentLocation() {
                if (!navigator.geolocation) {
                    this.showError('Geolocation is not supported by your browser');
                    return;
                }

                this.showLoading();
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        await this.fetchWeatherByCoords(latitude, longitude);
                    },
                    (error) => {
                        this.hideLoading();
                        this.showError('Unable to get your location. Please try searching manually.');
                    }
                );
            }

            async fetchWeatherData(city) {
                this.showLoading();
                this.clearError();

                try {
                    // Simulate API call with mock data
                    await this.simulateApiCall();
                    
                    const weatherData = this.generateMockWeatherData(city);
                    this.displayWeather(weatherData);
                    
                } catch (error) {
                    this.showError('Failed to fetch weather data. Please try again.');
                } finally {
                    this.hideLoading();
                }
            }

            async fetchWeatherByCoords(lat, lon) {
                try {
                    await this.simulateApiCall();
                    
                    const weatherData = this.generateMockWeatherData('Current Location', lat, lon);
                    this.displayWeather(weatherData);
                    
                } catch (error) {
                    this.showError('Failed to fetch weather data for your location.');
                } finally {
                    this.hideLoading();
                }
            }

            generateMockWeatherData(city, lat = null, lon = null) {
                const conditions = ['clear', 'clouds', 'rain', 'drizzle', 'thunderstorm', 'snow', 'mist'];
                const condition = conditions[Math.floor(Math.random() * conditions.length)];
                
                const baseTemp = Math.floor(Math.random() * 30) + 10; // 10-40°C
                const temp = lat ? this.adjustTempForLatitude(baseTemp, lat) : baseTemp;
                
                return {
                    city: city,
                    country: 'Demo Country',
                    temperature: temp,
                    feelsLike: temp + Math.floor(Math.random() * 5) - 2,
                    condition: condition,
                    description: this.getWeatherDescription(condition),
                    humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
                    windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 mph
                    visibility: Math.floor(Math.random() * 10) + 5, // 5-15 miles
                    pressure: Math.floor(Math.random() * 50) + 980, // 980-1030 hPa
                    uvIndex: Math.floor(Math.random() * 11), // 0-10
                    sunrise: '06:' + String(Math.floor(Math.random() * 30) + 15).padStart(2, '0'),
                    sunset: '18:' + String(Math.floor(Math.random() * 30) + 15).padStart(2, '0'),
                    forecast: this.generateForecast()
                };
            }

            adjustTempForLatitude(baseTemp, lat) {
                // Simple temperature adjustment based on latitude
                if (Math.abs(lat) > 60) return baseTemp - 15; // Polar regions
                if (Math.abs(lat) > 30) return baseTemp - 5; // Temperate
                return baseTemp; // Tropical
            }

            generateForecast() {
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
                const conditions = ['sunny', 'cloudy', 'rainy', 'partly-cloudy'];
                
                return days.map(day => ({
                    day: day,
                    condition: conditions[Math.floor(Math.random() * conditions.length)],
                    high: Math.floor(Math.random() * 15) + 20,
                    low: Math.floor(Math.random() * 10) + 10
                }));
            }

            getWeatherDescription(condition) {
                const descriptions = {
                    clear: 'Clear sky',
                    clouds: 'Cloudy',
                    rain: 'Rainy',
                    drizzle: 'Light drizzle',
                    thunderstorm: 'Thunderstorm',
                    snow: 'Snowy',
                    mist: 'Misty'
                };
                return descriptions[condition] || 'Unknown';
            }

            getWeatherIcon(condition) {
                const icons = {
                    clear: '☀️',
                    clouds: '☁️',
                    rain: '🌧️',
                    drizzle: '🌦️',
                    thunderstorm: '⛈️',
                    snow: '❄️',
                    mist: '🌫️'
                };
                return icons[condition] || '🌤️';
            }

            getForecastIcon(condition) {
                const icons = {
                    sunny: '☀️',
                    cloudy: '☁️',
                    rainy: '🌧️',
                    'partly-cloudy': '⛅'
                };
                return icons[condition] || '🌤️';
            }

            displayWeather(data) {
                // Update current weather
                document.getElementById('cityName').textContent = data.city;
                document.getElementById('weatherDescription').textContent = data.description;
                document.getElementById('temperature').textContent = data.temperature + '°';
                document.getElementById('weatherIcon').textContent = this.getWeatherIcon(data.condition);
                
                // Update details
                document.getElementById('feelsLike').textContent = data.feelsLike + '°';
                document.getElementById('humidity').textContent = data.humidity + '%';
                document.getElementById('windSpeed').textContent = data.windSpeed + ' mph';
                document.getElementById('visibility').textContent = data.visibility + ' mi';
                document.getElementById('sunrise').textContent = data.sunrise;
                document.getElementById('sunset').textContent = data.sunset;
                
                // Update weather card class
                const currentWeather = document.getElementById('currentWeather');
                currentWeather.className = 'current-weather';
                if (data.condition === 'clear') {
                    currentWeather.classList.add('sunny');
                } else if (data.condition === 'clouds' || data.condition === 'mist') {
                    currentWeather.classList.add('cloudy');
                } else if (data.condition === 'rain' || data.condition === 'drizzle' || data.condition === 'thunderstorm') {
                    currentWeather.classList.add('rainy');
                }
                
                // Update forecast
                const forecastGrid = document.getElementById('forecastGrid');
                forecastGrid.innerHTML = data.forecast.map(day => \`
                    <div class="forecast-card">
                        <div class="forecast-day">\${day.day}</div>
                        <div class="forecast-icon">\${this.getForecastIcon(day.condition)}</div>
                        <div class="forecast-temp">\${day.high}° / \${day.low}°</div>
                        <div class="forecast-desc">\${day.condition.replace('-', ' ')}</div>
                    </div>
                \`).join('');
                
                // Show weather display
                this.weatherDisplay.classList.add('active');
            }

            showLoading() {
                this.loading.style.display = 'block';
                this.weatherDisplay.classList.remove('active');
            }

            hideLoading() {
                this.loading.style.display = 'none';
            }

            showError(message) {
                this.errorContainer.innerHTML = \`
                    <div class="error">
                        <span>⚠️</span>
                        <span>\${message}</span>
                    </div>
                \`;
            }

            clearError() {
                this.errorContainer.innerHTML = '';
            }

            simulateApiCall() {
                // Simulate network delay
                return new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        // Global functions for onclick handlers
        let weatherApp;

        function searchWeather() {
            weatherApp.searchWeather();
        }

        function getCurrentLocation() {
            weatherApp.getCurrentLocation();
        }

        function quickSearch(city) {
            document.getElementById('searchInput').value = city;
            weatherApp.searchWeather();
        }

        // Initialize the weather dashboard
        weatherApp = new WeatherDashboard();
    </script>
</body>
</html>`;
    }
    
    if (type === 'drag-drop') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag & Drop Task Manager</title>
    <style>
        :root {
            /* Enhanced Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #667eea;
            --accent-hover: #5a67d8;
            --accent-light: #e9d8fd;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-accent: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
            --gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            --gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                --gradient-danger: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
                --gradient-warning: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 50px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
            animation: float 15s ease-in-out infinite;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b);
            background-size: 300% 100%;
            animation: gradientWave 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        @keyframes gradientWave {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            color: white;
            margin-bottom: 12px;
            position: relative;
            z-index: 1;
            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: titleGlow 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
            from { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.3); }
            to { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.5); }
        }

        .header p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.2rem;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }

        .content {
            padding: 35px;
            background: var(--bg-primary);
        }

        .controls {
            display: flex;
            gap: 16px;
            margin-bottom: 35px;
            flex-wrap: wrap;
        }

        .add-task-btn {
            padding: 14px 28px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 16px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }

        .add-task-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .add-task-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .add-task-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .clear-btn {
            padding: 12px 24px;
            background: var(--gradient-danger);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }

        .clear-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .stats {
            display: flex;
            gap: 16px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .stat-card {
            background: var(--bg-tertiary);
            padding: 16px 20px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .stat-icon {
            font-size: 1.5rem;
        }

        .stat-info {
            display: flex;
            flex-direction: column;
        }

        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .stat-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .kanban-board {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .column {
            background: var(--bg-tertiary);
            border-radius: 16px;
            padding: 20px;
            min-height: 400px;
            border: 2px solid var(--border-color);
            transition: all 0.3s ease;
        }

        .column.drag-over {
            border-color: var(--accent-color);
            background: var(--accent-light);
            transform: scale(1.02);
        }

        .column-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--border-color);
        }

        .column-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .column-count {
            background: var(--bg-primary);
            color: var(--text-secondary);
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.875rem;
            font-weight: 600;
            border: 1px solid var(--border-color);
        }

        .todo-column .column-title { color: var(--text-primary); }
        .progress-column .column-title { color: var(--warning-color); }
        .done-column .column-title { color: var(--success-color); }

        .task-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-height: 200px;
            padding: 4px;
            border-radius: 8px;
            transition: background 0.3s ease;
        }

        .task-list.drag-over {
            background: rgba(59, 130, 246, 0.1);
        }

        .task-card {
            background: var(--bg-primary);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 16px;
            cursor: move;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .task-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--gradient-accent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .task-card:hover::before {
            opacity: 1;
        }

        .task-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-color);
        }

        .task-card.dragging {
            opacity: 0.5;
            transform: rotate(5deg);
            cursor: grabbing;
        }

        .task-priority {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        .priority-high {
            background: var(--danger-light);
            color: var(--danger-color);
        }

        .priority-medium {
            background: var(--warning-light);
            color: var(--warning-color);
        }

        .priority-low {
            background: var(--success-light);
            color: var(--success-color);
        }

        .task-title {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .task-description {
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .task-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.75rem;
            color: var(--text-muted);
        }

        .task-date {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .task-actions {
            display: flex;
            gap: 8px;
        }

        .task-action-btn {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: all 0.2s ease;
            font-size: 0.875rem;
        }

        .task-action-btn:hover {
            background: var(--bg-tertiary);
            color: var(--text-primary);
        }

        .task-action-btn.delete:hover {
            background: var(--danger-light);
            color: var(--danger-color);
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: var(--bg-primary);
            border-radius: 16px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: var(--shadow-xl);
            animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .modal-header {
            margin-bottom: 20px;
        }

        .modal-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .form-input,
        .form-textarea,
        .form-select {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            font-size: 16px;
            background: var(--bg-input);
            color: var(--text-primary);
            transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px var(--accent-light);
        }

        .form-textarea {
            resize: vertical;
            min-height: 100px;
        }

        .modal-actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background: var(--gradient-accent);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        .btn-secondary {
            background: var(--bg-tertiary);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: var(--bg-secondary);
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--gradient-success);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: var(--shadow-lg);
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 2000;
            font-weight: 600;
        }

        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 8px;
            }

            .app-wrapper {
                border-radius: 20px;
                margin: 8px;
            }

            .header {
                padding: 25px 15px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .header p {
                font-size: 1rem;
            }

            .content {
                padding: 15px;
            }

            .kanban-board {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .column {
                min-width: auto;
            }

            .column-header {
                padding: 12px;
            }

            .column-title {
                font-size: 1rem;
            }

            .task-card {
                padding: 12px;
                margin-bottom: 8px;
            }

            .task-title {
                font-size: 0.9rem;
            }

            .task-meta {
                font-size: 0.8rem;
            }

            .controls {
                flex-direction: column;
                gap: 12px;
            }

            .add-task-btn {
                width: 100%;
                padding: 12px;
            }

            .stats {
                flex-direction: column;
                gap: 12px;
            }

            .stat-card {
                padding: 12px;
            }

            .modal-content {
                padding: 20px;
                margin: 10px;
            }

            .modal-title {
                font-size: 1.2rem;
            }

            .form-input,
            .form-textarea,
            .form-select {
                padding: 10px;
                font-size: 0.9rem;
            }

            .modal-actions {
                flex-direction: column;
            }

            .btn {
                width: 100%;
                padding: 12px;
            }

            .toast {
                left: 10px;
                right: 10px;
                bottom: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>📋 Drag & Drop Task Manager</h1>
                <p>Organize your tasks with intuitive drag and drop functionality</p>
            </div>
            
            <div class="content">
                <div class="controls">
                    <button class="add-task-btn" onclick="openModal()">➕ Add New Task</button>
                    <button class="clear-btn" onclick="clearCompleted()">🗑️ Clear Completed</button>
                </div>
                
                <div class="stats">
                    <div class="stat-card">
                        <span class="stat-icon">📝</span>
                        <div class="stat-info">
                            <span class="stat-value" id="todoCount">0</span>
                            <span class="stat-label">To Do</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">⚡</span>
                        <div class="stat-info">
                            <span class="stat-value" id="progressCount">0</span>
                            <span class="stat-label">In Progress</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">✅</span>
                        <div class="stat-info">
                            <span class="stat-value" id="doneCount">0</span>
                            <span class="stat-label">Completed</span>
                        </div>
                    </div>
                </div>
                
                <div class="kanban-board">
                    <div class="column todo-column" data-column="todo">
                        <div class="column-header">
                            <h3 class="column-title">
                                <span>📝</span>
                                <span>To Do</span>
                            </h3>
                            <span class="column-count" id="todoColumnCount">0</span>
                        </div>
                        <div class="task-list" id="todoList" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                    </div>
                    
                    <div class="column progress-column" data-column="progress">
                        <div class="column-header">
                            <h3 class="column-title">
                                <span>⚡</span>
                                <span>In Progress</span>
                            </h3>
                            <span class="column-count" id="progressColumnCount">0</span>
                        </div>
                        <div class="task-list" id="progressList" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                    </div>
                    
                    <div class="column done-column" data-column="done">
                        <div class="column-header">
                            <h3 class="column-title">
                                <span>✅</span>
                                <span>Completed</span>
                            </h3>
                            <span class="column-count" id="doneColumnCount">0</span>
                        </div>
                        <div class="task-list" id="doneList" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Task Modal -->
    <div class="modal" id="taskModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Task</h2>
            </div>
            <form id="taskForm" onsubmit="addTask(event)">
                <div class="form-group">
                    <label class="form-label" for="taskTitle">Task Title *</label>
                    <input type="text" class="form-input" id="taskTitle" required placeholder="Enter task title">
                </div>
                
                <div class="form-group">
                    <label class="form-label" for="taskDescription">Description</label>
                    <textarea class="form-textarea" id="taskDescription" placeholder="Enter task description"></textarea>
                </div>
                
                <div class="form-group">
                    <label class="form-label" for="taskPriority">Priority</label>
                    <select class="form-select" id="taskPriority">
                        <option value="low">Low</option>
                        <option value="medium" selected>Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" id="toast"></div>

    <script>
        class DragDropTaskManager {
            constructor() {
                this.tasks = [];
                this.taskIdCounter = 1;
                this.draggedTask = null;
                this.init();
            }

            init() {
                this.loadTasks();
                this.renderTasks();
                this.updateStats();
                this.setupEventListeners();
            }

            setupEventListeners() {
                // Close modal when clicking outside
                document.getElementById('taskModal').addEventListener('click', (e) => {
                    if (e.target.id === 'taskModal') {
                        this.closeModal();
                    }
                });

                // Add dragover listeners to all task lists
                document.querySelectorAll('.task-list').forEach(list => {
                    list.addEventListener('dragover', (e) => this.allowDrop(e));
                    list.addEventListener('drop', (e) => this.drop(e));
                    list.addEventListener('dragenter', (e) => this.dragEnter(e));
                    list.addEventListener('dragleave', (e) => this.dragLeave(e));
                });
            }

            generateTaskId() {
                return \`task-\${this.taskIdCounter++}\`;
            }

            addTask(event) {
                event.preventDefault();
                
                const title = document.getElementById('taskTitle').value.trim();
                const description = document.getElementById('taskDescription').value.trim();
                const priority = document.getElementById('taskPriority').value;
                
                if (!title) return;
                
                const task = {
                    id: this.generateTaskId(),
                    title: title,
                    description: description,
                    priority: priority,
                    status: 'todo',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
                
                this.tasks.push(task);
                this.saveTasks();
                this.renderTasks();
                this.updateStats();
                this.closeModal();
                this.showToast('Task added successfully!');
                
                // Reset form
                document.getElementById('taskForm').reset();
            }

            deleteTask(taskId) {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
                this.saveTasks();
                this.renderTasks();
                this.updateStats();
                this.showToast('Task deleted successfully!');
            }

            moveTask(taskId, newStatus) {
                const task = this.tasks.find(t => t.id === taskId);
                if (task) {
                    task.status = newStatus;
                    task.updatedAt = new Date().toISOString();
                    this.saveTasks();
                    this.updateStats();
                    this.showToast(\`Task moved to \${newStatus}!\`);
                }
            }

            clearCompleted() {
                const completedCount = this.tasks.filter(task => task.status === 'done').length;
                if (completedCount === 0) {
                    this.showToast('No completed tasks to clear!');
                    return;
                }
                
                this.tasks = this.tasks.filter(task => task.status !== 'done');
                this.saveTasks();
                this.renderTasks();
                this.updateStats();
                this.showToast(\`Cleared \${completedCount} completed tasks!\`);
            }

            renderTasks() {
                const todoList = document.getElementById('todoList');
                const progressList = document.getElementById('progressList');
                const doneList = document.getElementById('doneList');
                
                // Clear existing tasks
                todoList.innerHTML = '';
                progressList.innerHTML = '';
                doneList.innerHTML = '';
                
                // Sort tasks by priority and creation date
                const sortedTasks = [...this.tasks].sort((a, b) => {
                    const priorityOrder = { high: 0, medium: 1, low: 2 };
                    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                        return priorityOrder[a.priority] - priorityOrder[b.priority];
                    }
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                
                // Render tasks in appropriate columns
                sortedTasks.forEach(task => {
                    const taskElement = this.createTaskElement(task);
                    
                    switch (task.status) {
                        case 'todo':
                            todoList.appendChild(taskElement);
                            break;
                        case 'progress':
                            progressList.appendChild(taskElement);
                            break;
                        case 'done':
                            doneList.appendChild(taskElement);
                            break;
                    }
                });
                
                // Update column counts
                document.getElementById('todoColumnCount').textContent = todoList.children.length;
                document.getElementById('progressColumnCount').textContent = progressList.children.length;
                document.getElementById('doneColumnCount').textContent = doneList.children.length;
            }

            createTaskElement(task) {
                const taskDiv = document.createElement('div');
                taskDiv.className = 'task-card';
                taskDiv.draggable = true;
                taskDiv.dataset.taskId = task.id;
                
                const priorityClass = \`priority-\${task.priority}\`;
                const createdDate = new Date(task.createdAt).toLocaleDateString();
                
                taskDiv.innerHTML = \`
                    <div class="task-priority \${priorityClass}">\${task.priority}</div>
                    <h4 class="task-title">\${task.title}</h4>
                    \${task.description ? \`<p class="task-description">\${task.description}</p>\` : ''}
                    <div class="task-meta">
                        <span class="task-date">
                            📅 \${createdDate}
                        </span>
                        <div class="task-actions">
                            <button class="task-action-btn delete" onclick="taskManager.deleteTask('\${task.id}')">
                                🗑️
                            </button>
                        </div>
                    </div>
                \`;
                
                // Add drag event listeners
                taskDiv.addEventListener('dragstart', (e) => this.dragStart(e));
                taskDiv.addEventListener('dragend', (e) => this.dragEnd(e));
                
                return taskDiv;
            }

            dragStart(event) {
                this.draggedTask = event.target;
                event.target.classList.add('dragging');
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/html', event.target.innerHTML);
            }

            dragEnd(event) {
                event.target.classList.remove('dragging');
                this.draggedTask = null;
                
                // Remove drag-over class from all columns
                document.querySelectorAll('.column').forEach(col => {
                    col.classList.remove('drag-over');
                });
            }

            allowDrop(event) {
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';
            }

            dragEnter(event) {
                if (event.target.classList.contains('task-list')) {
                    event.target.classList.add('drag-over');
                } else if (event.target.closest('.column')) {
                    event.target.closest('.column').classList.add('drag-over');
                }
            }

            dragLeave(event) {
                if (event.target.classList.contains('task-list')) {
                    event.target.classList.remove('drag-over');
                } else if (event.target.closest('.column')) {
                    const column = event.target.closest('.column');
                    const rect = column.getBoundingClientRect();
                    if (event.clientX < rect.left || event.clientX > rect.right ||
                        event.clientY < rect.top || event.clientY > rect.bottom) {
                        column.classList.remove('drag-over');
                    }
                }
            }

            drop(event) {
                event.preventDefault();
                
                const taskList = event.target.classList.contains('task-list') ? 
                    event.target : event.target.closest('.task-list');
                
                if (!taskList || !this.draggedTask) return;
                
                const column = taskList.closest('.column');
                const newStatus = column.dataset.column;
                
                taskList.appendChild(this.draggedTask);
                this.moveTask(this.draggedTask.dataset.taskId, newStatus);
                
                // Remove drag-over classes
                document.querySelectorAll('.task-list, .column').forEach(el => {
                    el.classList.remove('drag-over');
                });
            }

            updateStats() {
                const todoCount = this.tasks.filter(task => task.status === 'todo').length;
                const progressCount = this.tasks.filter(task => task.status === 'progress').length;
                const doneCount = this.tasks.filter(task => task.status === 'done').length;
                
                document.getElementById('todoCount').textContent = todoCount;
                document.getElementById('progressCount').textContent = progressCount;
                document.getElementById('doneCount').textContent = doneCount;
            }

            openModal() {
                document.getElementById('taskModal').classList.add('active');
                document.getElementById('taskTitle').focus();
            }

            closeModal() {
                document.getElementById('taskModal').classList.remove('active');
            }

            showToast(message) {
                const toast = document.getElementById('toast');
                toast.textContent = message;
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }

            saveTasks() {
                localStorage.setItem('dragDropTasks', JSON.stringify(this.tasks));
            }

            loadTasks() {
                const saved = localStorage.getItem('dragDropTasks');
                if (saved) {
                    try {
                        this.tasks = JSON.parse(saved);
                        // Update task ID counter to avoid conflicts
                        const maxId = Math.max(...this.tasks.map(t => 
                            parseInt(t.id.replace('task-', '')) || 0), 0);
                        this.taskIdCounter = maxId + 1;
                    } catch (e) {
                        this.tasks = [];
                    }
                } else {
                    // Add some sample tasks for demonstration
                    this.tasks = [
                        {
                            id: this.generateTaskId(),
                            title: 'Welcome to Drag & Drop Tasks!',
                            description: 'Try dragging this task to other columns',
                            priority: 'medium',
                            status: 'todo',
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        },
                        {
                            id: this.generateTaskId(),
                            title: 'Click the + button to add new tasks',
                            description: 'You can set priority and description',
                            priority: 'low',
                            status: 'todo',
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        },
                        {
                            id: this.generateTaskId(),
                            title: 'Drag tasks between columns',
                            description: 'Organize your workflow efficiently',
                            priority: 'high',
                            status: 'progress',
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        }
                    ];
                    this.saveTasks();
                }
            }
        }

        // Global functions for onclick handlers
        let taskManager;

        function openModal() {
            taskManager.openModal();
        }

        function closeModal() {
            taskManager.closeModal();
        }

        function addTask(event) {
            taskManager.addTask(event);
        }

        function clearCompleted() {
            taskManager.clearCompleted();
        }

        function allowDrop(event) {
            taskManager.allowDrop(event);
        }

        function drop(event) {
            taskManager.drop(event);
        }

        // Initialize the task manager
        taskManager = new DragDropTaskManager();
    </script>
</body>
</html>`;
    }
    
    if (type === 'chat-interface') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Chat Interface</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #3b82f6;
            --accent-hover: #2563eb;
            --accent-light: #dbeafe;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
            --gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            --gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                --gradient-danger: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
                --gradient-warning: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .app-wrapper:hover {
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 30px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
            animation: float 15s ease-in-out infinite;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b);
            background-size: 300% 100%;
            animation: gradientWave 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        @keyframes gradientWave {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .header h1 {
            font-size: 2.4rem;
            font-weight: 800;
            color: white;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: titleGlow 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
            from { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.3); }
            to { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.5); }
        }

        .header p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.1rem;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }

        .chat-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .messages-container {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: var(--bg-primary);
        }

        .messages-container::-webkit-scrollbar {
            width: 6px;
        }

        .messages-container::-webkit-scrollbar-track {
            background: var(--bg-tertiary);
            border-radius: 3px;
        }

        .messages-container::-webkit-scrollbar-thumb {
            background: var(--accent-color);
            border-radius: 3px;
        }

        .message {
            margin-bottom: 16px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            animation: messageSlideIn 0.3s ease-out;
        }

        @keyframes messageSlideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message.user {
            flex-direction: row-reverse;
        }

        .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
            font-weight: 600;
        }

        .message.bot .message-avatar {
            background: var(--gradient-accent);
            color: white;
        }

        .message.user .message-avatar {
            background: var(--gradient-success);
            color: white;
        }

        .message-content {
            max-width: 70%;
            background: var(--bg-tertiary);
            padding: 12px 16px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            position: relative;
        }

        .message.user .message-content {
            background: var(--accent-light);
            color: var(--text-primary);
        }

        .message-text {
            font-size: 0.95rem;
            line-height: 1.4;
            word-wrap: break-word;
        }

        .message-time {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .typing-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 0;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--text-muted);
            border-radius: 50%;
            animation: typing 1.4s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.4;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }

        .input-container {
            padding: 20px;
            background: var(--bg-tertiary);
            border-top: 1px solid var(--border-color);
        }

        .input-wrapper {
            display: flex;
            gap: 12px;
            align-items: flex-end;
        }

        .input-field {
            flex: 1;
            padding: 12px 16px;
            border: 2px solid var(--border-color);
            border-radius: 24px;
            font-size: 16px;
            background: var(--bg-input);
            color: var(--text-primary);
            transition: all 0.3s ease;
            resize: none;
            min-height: 48px;
            max-height: 120px;
            line-height: 1.4;
        }

        .input-field:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px var(--accent-light);
        }

        .send-button {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: none;
            background: var(--gradient-accent);
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .send-button:hover:not(:disabled) {
            transform: scale(1.05);
            box-shadow: var(--shadow-lg);
        }

        .send-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .quick-actions {
            padding: 16px 20px;
            background: var(--bg-secondary);
            border-top: 1px solid var(--border-color);
        }

        .quick-actions-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 12px;
        }

        .quick-action-buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .quick-action-btn {
            padding: 8px 16px;
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            font-size: 0.875rem;
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .quick-action-btn:hover {
            background: var(--accent-light);
            border-color: var(--accent-color);
            transform: translateY(-1px);
        }

        .status-indicator {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: var(--bg-tertiary);
            border-radius: 20px;
            font-size: 0.875rem;
            color: var(--text-secondary);
        }

        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--success-color);
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 8px;
            }

            .app-wrapper {
                border-radius: 20px;
                margin: 8px;
            }

            .header {
                padding: 20px 15px;
            }

            .header h1 {
                font-size: 1.5rem;
            }

            .header p {
                font-size: 1rem;
            }

            .chat-container {
                height: 60vh;
            }

            .messages {
                padding: 15px;
            }

            .message {
                gap: 8px;
            }

            .message-avatar {
                width: 32px;
                height: 32px;
                font-size: 1rem;
            }

            .message-content {
                max-width: 85%;
                padding: 10px 14px;
                font-size: 0.9rem;
            }

            .message-time {
                font-size: 0.7rem;
            }

            .input-container {
                padding: 15px;
                gap: 10px;
            }

            .message-input {
                padding: 12px;
                font-size: 0.9rem;
            }

            .send-button {
                width: 44px;
                height: 44px;
                font-size: 1rem;
            }

            .quick-actions {
                padding: 12px 15px;
            }

            .quick-actions-title {
                font-size: 0.8rem;
                margin-bottom: 8px;
            }

            .quick-action-buttons {
                gap: 6px;
            }

            .quick-action-btn {
                padding: 6px 12px;
                font-size: 0.8rem;
            }

            .typing-indicator {
                padding: 8px 12px;
                font-size: 0.8rem;
            }

            .typing-dots span {
                width: 6px;
                height: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>💬 Interactive Chat Interface</h1>
                <p>Experience a modern chat application with AI responses</p>
            </div>
            
            <div class="chat-container">
                <div class="messages-container" id="messagesContainer">
                    <!-- Messages will be dynamically added here -->
                </div>
                
                <div class="quick-actions">
                    <div class="quick-actions-title">Quick Actions</div>
                    <div class="quick-action-buttons">
                        <button class="quick-action-btn" onclick="chatInterface.sendQuickMessage('Hello! 👋')">Say Hello</button>
                        <button class="quick-action-btn" onclick="chatInterface.sendQuickMessage('Tell me a joke')">Tell a Joke</button>
                        <button class="quick-action-btn" onclick="chatInterface.sendQuickMessage('What can you do?')">Capabilities</button>
                        <button class="quick-action-btn" onclick="chatInterface.sendQuickMessage('Help me with JavaScript')">JavaScript Help</button>
                        <button class="quick-action-btn" onclick="chatInterface.sendQuickMessage('Give me a quote')">Daily Quote</button>
                        <button class="quick-action-btn" onclick="chatInterface.clearChat()">Clear Chat</button>
                    </div>
                </div>
                
                <div class="input-container">
                    <div class="input-wrapper">
                        <textarea 
                            class="input-field" 
                            id="messageInput" 
                            placeholder="Type your message here..."
                            rows="1"
                            onkeydown="chatInterface.handleKeyPress(event)"
                            oninput="chatInterface.autoResize(this)"
                        ></textarea>
                        <button class="send-button" id="sendButton" onclick="chatInterface.sendMessage()">
                            ➤
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        class ChatInterface {
            constructor() {
                this.messages = [];
                this.isTyping = false;
                this.responses = {
                    greetings: [
                        "Hello! How can I help you today? 😊",
                        "Hi there! What's on your mind?",
                        "Hey! Nice to see you! How can I assist you?",
                        "Greetings! I'm here to help with whatever you need!"
                    ],
                    jokes: [
                        "Why don't scientists trust atoms? Because they make up everything! 😄",
                        "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
                        "Why don't eggs tell jokes? They'd crack each other up! 🥚",
                        "What do you call a fake noodle? An impasta! 🍝"
                    ],
                    capabilities: [
                        "I can help you with: 💻 Programming questions, 📚 General knowledge, 🎯 Problem solving, 💡 Creative ideas, and much more! What would you like to explore?",
                        "My capabilities include: Answering questions, Providing explanations, Helping with coding, Offering suggestions, and Engaging in conversations. What interests you?",
                        "I'm here to assist with various topics: Technology, Science, Arts, Education, and everyday questions. What can I help you with today?"
                    ],
                    javascript: [
                        "JavaScript is a versatile programming language! Here are some key concepts: Variables (let, const, var), Functions, Arrays, Objects, DOM manipulation, and ES6+ features. What specific JavaScript topic would you like to explore?",
                        "JavaScript powers the web! 🌐 Key areas include: Frontend development, Node.js for backend, React/Vue/Angular frameworks, Async programming, and Modern ES6+ syntax. What would you like to learn?",
                            "JavaScript fundamentals: Data types, Control structures, Functions, Scope, Closures, Promises, and Array methods. Ready to dive deeper into any of these topics?"
                    ],
                    quotes: [
                        "The only way to do great work is to love what you do. - Steve Jobs ✨",
                        "Innovation distinguishes between a leader and a follower. - Steve Jobs 🚀",
                        "Code is like humor. When you have to explain it, it's bad. - Cory House 😄",
                        "First, solve the problem. Then, write the code. - John Johnson 💻",
                        "Experience is the name everyone gives to their mistakes. - Oscar Wilde 🌟"
                    ],
                    default: [
                        "That's interesting! Tell me more about what you're thinking.",
                        "I'd love to help you with that! Could you provide more details?",
                        "That's a great question! Let me think about the best way to assist you.",
                        "I'm here to help! What specific aspect would you like to explore further?",
                        "Thanks for sharing that! How can I help you move forward?"
                    ]
                };
                this.init();
            }

            init() {
                this.loadMessages();
                this.renderMessages();
                this.scrollToBottom();
                
                // Add welcome message if chat is empty
                if (this.messages.length === 0) {
                    this.addBotMessage("Hello! 👋 I'm your AI assistant. Feel free to ask me anything or try the quick actions below!");
                }
            }

            handleKeyPress(event) {
                if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    this.sendMessage();
                }
            }

            autoResize(textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
            }

            sendMessage() {
                const input = document.getElementById('messageInput');
                const message = input.value.trim();
                
                if (!message || this.isTyping) return;
                
                this.addUserMessage(message);
                input.value = '';
                this.autoResize(input);
                
                // Show typing indicator
                this.showTypingIndicator();
                
                // Simulate bot response
                setTimeout(() => {
                    this.hideTypingIndicator();
                    this.generateBotResponse(message);
                }, 1000 + Math.random() * 1000);
            }

            sendQuickMessage(message) {
                document.getElementById('messageInput').value = message;
                this.sendMessage();
            }

            addUserMessage(text) {
                const message = {
                    id: Date.now(),
                    type: 'user',
                    text: text,
                    timestamp: new Date().toISOString()
                };
                
                this.messages.push(message);
                this.renderMessage(message);
                this.saveMessages();
                this.scrollToBottom();
            }

            addBotMessage(text) {
                const message = {
                    id: Date.now(),
                    type: 'bot',
                    text: text,
                    timestamp: new Date().toISOString()
                };
                
                this.messages.push(message);
                this.renderMessage(message);
                this.saveMessages();
                this.scrollToBottom();
            }

            generateBotResponse(userMessage) {
                const lowerMessage = userMessage.toLowerCase();
                let response;
                
                if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                    response = this.getRandomResponse('greetings');
                } else if (lowerMessage.includes('joke') || lowerMessage.includes('funny')) {
                    response = this.getRandomResponse('jokes');
                } else if (lowerMessage.includes('what can you do') || lowerMessage.includes('capabilities') || lowerMessage.includes('help')) {
                    response = this.getRandomResponse('capabilities');
                } else if (lowerMessage.includes('javascript') || lowerMessage.includes('js') || lowerMessage.includes('coding')) {
                    response = this.getRandomResponse('javascript');
                } else if (lowerMessage.includes('quote') || lowerMessage.includes('inspiration')) {
                    response = this.getRandomResponse('quotes');
                } else {
                    response = this.getRandomResponse('default');
                }
                
                this.addBotMessage(response);
            }

            getRandomResponse(category) {
                const responses = this.responses[category];
                return responses[Math.floor(Math.random() * responses.length)];
            }

            showTypingIndicator() {
                this.isTyping = true;
                const container = document.getElementById('messagesContainer');
                const typingDiv = document.createElement('div');
                typingDiv.className = 'message bot';
                typingDiv.id = 'typingIndicator';
                typingDiv.innerHTML = \`
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        <div class="typing-indicator">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                \`;
                container.appendChild(typingDiv);
                this.scrollToBottom();
            }

            hideTypingIndicator() {
                this.isTyping = false;
                const indicator = document.getElementById('typingIndicator');
                if (indicator) {
                    indicator.remove();
                }
            }

            renderMessage(message) {
                const container = document.getElementById('messagesContainer');
                const messageDiv = document.createElement('div');
                messageDiv.className = \`message \${message.type}\`;
                
                const time = new Date(message.timestamp).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                });
                
                messageDiv.innerHTML = \`
                    <div class="message-avatar">
                        \${message.type === 'bot' ? '🤖' : '👤'}
                    </div>
                    <div class="message-content">
                        <div class="message-text">\${message.text}</div>
                        <div class="message-time">\${time}</div>
                    </div>
                \`;
                
                container.appendChild(messageDiv);
            }

            renderMessages() {
                const container = document.getElementById('messagesContainer');
                container.innerHTML = '';
                
                this.messages.forEach(message => {
                    this.renderMessage(message);
                });
            }

            scrollToBottom() {
                const container = document.getElementById('messagesContainer');
                container.scrollTop = container.scrollHeight;
            }

            clearChat() {
                this.messages = [];
                this.saveMessages();
                this.renderMessages();
                this.addBotMessage("Chat cleared! How can I help you today? 🔄");
            }

            saveMessages() {
                // Keep only last 50 messages to avoid storage issues
                const messagesToSave = this.messages.slice(-50);
                localStorage.setItem('chatMessages', JSON.stringify(messagesToSave));
            }

            loadMessages() {
                const saved = localStorage.getItem('chatMessages');
                if (saved) {
                    try {
                        this.messages = JSON.parse(saved);
                    } catch (e) {
                        this.messages = [];
                    }
                }
            }
        }

        // Initialize the chat interface
        const chatInterface = new ChatInterface();
    </script>
</body>
</html>`;
    }
    
    if (type === 'image-gallery') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <style>
        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-tertiary: #f1f5f9;
            --bg-input: #ffffff;
            --bg-glass: rgba(255, 255, 255, 0.95);
            --border-color: #e2e8f0;
            --border-light: #f1f5f9;
            --text-primary: #1e293b;
            --text-secondary: #64748b;
            --text-muted: #94a3b8;
            --accent-color: #3b82f6;
            --accent-hover: #2563eb;
            --accent-light: #dbeafe;
            --success-color: #10b981;
            --success-hover: #059669;
            --success-light: #d1fae5;
            --danger-color: #ef4444;
            --danger-hover: #dc2626;
            --danger-light: #fee2e2;
            --warning-color: #f59e0b;
            --warning-hover: #d97706;
            --warning-light: #fef3c7;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
            --gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            --gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                /* Dark Mode Colors */
                --bg-primary: #0f172a;
                --bg-secondary: #1e293b;
                --bg-tertiary: #334155;
                --bg-input: #1e293b;
                --bg-glass: rgba(15, 23, 42, 0.95);
                --border-color: #334155;
                --border-light: #475569;
                --text-primary: #f8fafc;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --accent-color: #60a5fa;
                --accent-hover: #3b82f6;
                --accent-light: #1e3a8a;
                --success-color: #34d399;
                --success-hover: #10b981;
                --success-light: #064e3b;
                --danger-color: #f87171;
                --danger-hover: #ef4444;
                --danger-light: #7f1d1d;
                --warning-color: #fbbf24;
                --warning-hover: #f59e0b;
                --warning-light: #78350f;
                --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
                --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
                --gradient-primary: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
                --gradient-accent: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                --gradient-success: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                --gradient-danger: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
                --gradient-warning: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .app-wrapper {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 50px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
            animation: float 15s ease-in-out infinite;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b);
            background-size: 300% 100%;
            animation: gradientWave 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        @keyframes gradientWave {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            color: white;
            margin-bottom: 12px;
            position: relative;
            z-index: 1;
            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: titleGlow 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
            from { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.3); }
            to { text-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.5); }
        }

        .header p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.2rem;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }

        .content {
            padding: 35px;
            background: var(--bg-primary);
        }

        .controls {
            display: flex;
            gap: 16px;
            margin-bottom: 35px;
            flex-wrap: wrap;
            align-items: center;
        }

        .search-box {
            flex: 1;
            min-width: 250px;
            padding: 14px 18px;
            border: 2px solid var(--border-color);
            border-radius: 16px;
            font-size: 16px;
            background: var(--bg-input);
            color: var(--text-primary);
            transition: all 0.3s ease;
            box-shadow: var(--shadow-sm);
        }

        .search-box:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
            transform: translateY(-1px);
        }

        .filter-buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .filter-btn {
            padding: 10px 18px;
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 24px;
            font-size: 0.875rem;
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .filter-btn:hover {
            background: rgba(102, 126, 234, 0.1);
            border-color: #667eea;
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .filter-btn.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-color: transparent;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .view-toggle {
            display: flex;
            gap: 4px;
            background: var(--bg-tertiary);
            border-radius: 12px;
            padding: 6px;
            box-shadow: var(--shadow-sm);
        }

        .view-btn {
            padding: 10px 14px;
            background: transparent;
            border: none;
            border-radius: 8px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .view-btn.active {
            background: var(--bg-primary);
            color: var(--text-primary);
            box-shadow: var(--shadow-sm);
        }

        .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 35px;
            flex-wrap: wrap;
        }

        .stat-card {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
            padding: 20px 24px;
            border-radius: 16px;
            border: 2px solid transparent;
            background-clip: padding-box;
            display: flex;
            align-items: center;
            gap: 14px;
            transition: all 0.3s ease;
            position: relative;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            padding: 2px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.3;
        }

        .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
        }

        .stat-card:hover::before {
            opacity: 0.6;
        }

        .stat-icon {
            font-size: 1.8rem;
        }

        .stat-info {
            display: flex;
            flex-direction: column;
        }

        .stat-value {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-primary);
        }

        .stat-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
            font-weight: 600;
        }

        .gallery-container {
            position: relative;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
            margin-bottom: 35px;
        }

        .gallery-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 30px;
        }

        .gallery-item {
            background: var(--bg-tertiary);
            border-radius: 16px;
            overflow: hidden;
            border: 2px solid var(--border-color);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
        }

        .gallery-item:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--accent-color);
        }

        .gallery-item.list-view {
            display: flex;
            align-items: center;
            padding: 16px;
            gap: 16px;
        }

        .gallery-item.grid-view {
            display: flex;
            flex-direction: column;
        }

        .image-container {
            position: relative;
            overflow: hidden;
            background: var(--bg-secondary);
        }

        .gallery-item.grid-view .image-container {
            height: 200px;
        }

        .gallery-item.list-view .image-container {
            width: 120px;
            height: 80px;
            flex-shrink: 0;
            border-radius: 8px;
        }

        .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
            transform: scale(1.05);
        }

        .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: flex-end;
            padding: 16px;
        }

        .gallery-item:hover .image-overlay {
            opacity: 1;
        }

        .overlay-actions {
            display: flex;
            gap: 8px;
        }

        .overlay-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .overlay-btn:hover {
            background: white;
            transform: scale(1.1);
        }

        .item-info {
            padding: 16px;
            flex: 1;
        }

        .item-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
        }

        .item-description {
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .item-meta {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 0.75rem;
            color: var(--text-muted);
        }

        .meta-item {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .item-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-top: 8px;
        }

        .tag {
            padding: 4px 8px;
            background: var(--accent-light);
            color: var(--accent-color);
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        /* Lightbox Modal */
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .lightbox.active {
            display: flex;
        }

        .lightbox-content {
            max-width: 90%;
            max-height: 90%;
            position: relative;
            animation: lightboxSlideIn 0.3s ease-out;
        }

        @keyframes lightboxSlideIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .lightbox-image {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 12px;
            box-shadow: var(--shadow-xl);
        }

        .lightbox-info {
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
            color: white;
        }

        .lightbox-close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1.5rem;
            z-index: 1001;
        }

        .lightbox-close:hover {
            background: white;
            transform: scale(1.1);
        }

        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1.5rem;
        }

        .lightbox-nav:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
        }

        .lightbox-prev {
            left: 20px;
        }

        .lightbox-next {
            right: 20px;
        }

        /* Loading State */
        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
            color: var(--text-secondary);
        }

        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--border-color);
            border-top: 4px solid var(--accent-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 16px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Empty State */
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
        }

        .empty-icon {
            font-size: 4rem;
            margin-bottom: 16px;
            opacity: 0.5;
        }

        .empty-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .empty-description {
            font-size: 1rem;
            margin-bottom: 24px;
        }

        .empty-action {
            padding: 12px 24px;
            background: var(--gradient-accent);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .empty-action:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 8px;
            }

            .app-wrapper {
                border-radius: 20px;
                margin: 8px;
            }

            .header {
                padding: 25px 15px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .header p {
                font-size: 1rem;
            }

            .content {
                padding: 15px;
            }

            .controls {
                flex-direction: column;
                align-items: stretch;
                gap: 12px;
            }

            .search-box {
                min-width: auto;
                padding: 10px 12px;
                font-size: 0.9rem;
            }

            .filter-buttons {
                flex-wrap: wrap;
                gap: 8px;
            }

            .filter-btn {
                padding: 8px 16px;
                font-size: 0.85rem;
            }

            .view-buttons {
                gap: 8px;
            }

            .view-btn {
                padding: 8px 12px;
                font-size: 0.85rem;
            }

            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 12px;
            }

            .gallery-item {
                border-radius: 12px;
            }

            .gallery-image {
                height: 150px;
            }

            .item-info {
                padding: 10px;
            }

            .item-title {
                font-size: 0.9rem;
            }

            .item-meta {
                font-size: 0.8rem;
            }

            .tag {
                padding: 3px 6px;
                font-size: 0.7rem;
            }

            .lightbox-content {
                margin: 10px;
                max-width: calc(100% - 20px);
                max-height: calc(100vh - 20px);
            }

            .lightbox-image {
                max-height: calc(100vh - 120px);
            }

            .lightbox-info {
                padding: 15px;
            }

            .lightbox-title {
                font-size: 1.2rem;
            }

            .lightbox-description {
                font-size: 0.9rem;
            }

            .lightbox-nav {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }

            .lightbox-prev {
                left: 10px;
            }

            .lightbox-next {
                right: 10px;
            }

            .lightbox-close {
                top: 10px;
                right: 10px;
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }

            .empty-state {
                padding: 40px 15px;
            }

            .empty-icon {
                font-size: 3rem;
            }

            .empty-title {
                font-size: 1.3rem;
            }

            .empty-description {
                font-size: 0.9rem;
            }

            .empty-action {
                padding: 10px 20px;
                font-size: 0.9rem;
            }
        }

        @media (max-width: 480px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                gap: 8px;
            }

            .gallery-image {
                height: 120px;
            }

            .gallery-item.list-view {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="app-wrapper">
            <div class="header">
                <h1>🖼️ Interactive Image Gallery</h1>
                <p>Explore beautiful images with advanced filtering and viewing options</p>
            </div>
            
            <div class="content">
                <div class="controls">
                    <input 
                        type="text" 
                        class="search-box" 
                        id="searchInput" 
                        placeholder="Search images..."
                    >
                    
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-category="all">All</button>
                        <button class="filter-btn" data-category="nature">Nature</button>
                        <button class="filter-btn" data-category="architecture">Architecture</button>
                        <button class="filter-btn" data-category="people">People</button>
                        <button class="filter-btn" data-category="technology">Technology</button>
                    </div>
                    
                    <div class="view-toggle">
                        <button class="view-btn active" data-view="grid">⊞ Grid</button>
                        <button class="view-btn" data-view="list">☰ List</button>
                    </div>
                </div>
                
                <div class="stats">
                    <div class="stat-card">
                        <span class="stat-icon">📸</span>
                        <div class="stat-info">
                            <span class="stat-value" id="totalImages">0</span>
                            <span class="stat-label">Total Images</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">🏷️</span>
                        <div class="stat-info">
                            <span class="stat-value" id="totalCategories">0</span>
                            <span class="stat-label">Categories</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">👁️</span>
                        <div class="stat-info">
                            <span class="stat-value" id="totalViews">0</span>
                            <span class="stat-label">Total Views</span>
                        </div>
                    </div>
                </div>
                
                <div class="gallery-container">
                    <div id="galleryContainer" class="gallery-grid">
                        <!-- Gallery items will be dynamically added here -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" onclick="gallery.closeLightbox()">×</button>
        <button class="lightbox-nav lightbox-prev" onclick="gallery.navigateLightbox(-1)">‹</button>
        <button class="lightbox-nav lightbox-next" onclick="gallery.navigateLightbox(1)">›</button>
        
        <div class="lightbox-content">
            <img class="lightbox-image" id="lightboxImage" src="" alt="">
            <div class="lightbox-info">
                <h3 id="lightboxTitle"></h3>
                <p id="lightboxDescription"></p>
                <div class="item-meta">
                    <span class="meta-item">📅 <span id="lightboxDate"></span></span>
                    <span class="meta-item">👁️ <span id="lightboxViews"></span> views</span>
                    <span class="meta-item">📏 <span id="lightboxSize"></span></span>
                </div>
            </div>
        </div>
    </div>

    <script>
        class ImageGallery {
            constructor() {
                this.images = [];
                this.filteredImages = [];
                this.currentFilter = 'all';
                this.currentView = 'grid';
                this.currentLightboxIndex = -1;
                this.searchQuery = '';
                this.totalViews = 0;
                this.init();
            }

            init() {
                this.generateMockImages();
                this.setupEventListeners();
                this.renderGallery();
                this.updateStats();
            }

            generateMockImages() {
                const categories = ['nature', 'architecture', 'people', 'technology'];
                const titles = {
                    nature: ['Mountain Sunrise', 'Forest Path', 'Ocean Waves', 'Desert Sunset', 'Waterfall', 'Autumn Leaves'],
                    architecture: ['Modern Building', 'Historic Bridge', 'City Skyline', 'Ancient Temple', 'Glass Tower', 'Street View'],
                    people: ['Portrait Study', 'Group Photo', 'Candid Moment', 'Professional Headshot', 'Street Photography', 'Event Coverage'],
                    technology: ['Circuit Board', 'Data Center', 'Smartphone', 'Laptop Setup', 'Server Room', 'Network Equipment']
                };

                const descriptions = {
                    nature: ['Beautiful natural landscape captured in perfect lighting', 'Stunning view of nature at its finest', 'Breathtaking scenery from around the world'],
                    architecture: ['Impressive architectural design and engineering', 'Modern and historical buildings showcase', 'Urban architecture and city planning'],
                    people: ['Capturing human emotions and expressions', 'Professional photography of people', 'Documentary and portrait photography'],
                    technology: ['Cutting-edge technology and innovation', 'Modern digital equipment and devices', 'Technical and industrial photography']
                };

                categories.forEach(category => {
                    titles[category].forEach((title, index) => {
                        const image = {
                            id: \`\${category}-\${index}\`,
                            title: title,
                            description: descriptions[category][index % descriptions[category].length],
                            category: category,
                            tags: [category, \`\${category}-photo\`, 'high-quality'],
                            views: Math.floor(Math.random() * 1000) + 50,
                            date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
                            size: \`\${Math.floor(Math.random() * 2000) + 1000}x\${Math.floor(Math.random() * 2000) + 1000}\`,
                            url: \`https://picsum.photos/seed/\${category}-\${index}/800/600.jpg\`,
                            thumbnailUrl: \`https://picsum.photos/seed/\${category}-\${index}/400/300.jpg\`
                        };
                        this.images.push(image);
                    });
                });

                this.filteredImages = [...this.images];
            }

            setupEventListeners() {
                // Search functionality
                document.getElementById('searchInput').addEventListener('input', (e) => {
                    this.searchQuery = e.target.value.toLowerCase();
                    this.filterImages();
                });

                // Category filters
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.currentFilter = btn.dataset.category;
                        this.filterImages();
                    });
                });

                // View toggle
                document.querySelectorAll('.view-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.currentView = btn.dataset.view;
                        this.renderGallery();
                    });
                });

                // Keyboard navigation for lightbox
                document.addEventListener('keydown', (e) => {
                    if (document.getElementById('lightbox').classList.contains('active')) {
                        if (e.key === 'Escape') this.closeLightbox();
                        if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
                        if (e.key === 'ArrowRight') this.navigateLightbox(1);
                    }
                });

                // Close lightbox on background click
                document.getElementById('lightbox').addEventListener('click', (e) => {
                    if (e.target.id === 'lightbox') {
                        this.closeLightbox();
                    }
                });
            }

            filterImages() {
                this.filteredImages = this.images.filter(image => {
                    const matchesCategory = this.currentFilter === 'all' || image.category === this.currentFilter;
                    const matchesSearch = !this.searchQuery || 
                        image.title.toLowerCase().includes(this.searchQuery) ||
                        image.description.toLowerCase().includes(this.searchQuery) ||
                        image.tags.some(tag => tag.toLowerCase().includes(this.searchQuery));
                    
                    return matchesCategory && matchesSearch;
                });
                
                this.renderGallery();
                this.updateStats();
            }

            renderGallery() {
                const container = document.getElementById('galleryContainer');
                container.className = this.currentView === 'grid' ? 'gallery-grid' : 'gallery-list';
                
                if (this.filteredImages.length === 0) {
                    container.innerHTML = \`
                        <div class="empty-state">
                            <div class="empty-icon">📷</div>
                            <h3 class="empty-title">No images found</h3>
                            <p class="empty-description">Try adjusting your search or filter criteria</p>
                            <button class="empty-action" onclick="gallery.resetFilters()">Reset Filters</button>
                        </div>
                    \`;
                    return;
                }

                container.innerHTML = this.filteredImages.map((image, index) => {
                    const viewClass = this.currentView === 'grid' ? 'grid-view' : 'list-view';
                    return \`
                        <div class="gallery-item \${viewClass}" onclick="gallery.openLightbox(\${index})">
                            <div class="image-container">
                                <img class="gallery-image" src="\${image.thumbnailUrl}" alt="\${image.title}" loading="lazy">
                                <div class="image-overlay">
                                    <div class="overlay-actions">
                                        <button class="overlay-btn" onclick="event.stopPropagation(); gallery.likeImage('\${image.id}')">❤️</button>
                                        <button class="overlay-btn" onclick="event.stopPropagation(); gallery.shareImage('\${image.id}')">🔗</button>
                                        <button class="overlay-btn" onclick="event.stopPropagation(); gallery.downloadImage('\${image.id}')">⬇️</button>
                                    </div>
                                </div>
                            </div>
                            <div class="item-info">
                                <h3 class="item-title">\${image.title}</h3>
                                <p class="item-description">\${image.description}</p>
                                <div class="item-meta">
                                    <span class="meta-item">📅 \${new Date(image.date).toLocaleDateString()}</span>
                                    <span class="meta-item">👁️ \${image.views}</span>
                                    <span class="meta-item">📏 \${image.size}</span>
                                </div>
                                <div class="item-tags">
                                    \${image.tags.map(tag => \`<span class="tag">\${tag}</span>\`).join('')}
                                </div>
                            </div>
                        </div>
                    \`;
                }).join('');
            }

            openLightbox(index) {
                this.currentLightboxIndex = index;
                const image = this.filteredImages[index];
                
                // Increment views
                image.views++;
                this.totalViews++;
                this.updateStats();
                
                // Update lightbox content
                document.getElementById('lightboxImage').src = image.url;
                document.getElementById('lightboxTitle').textContent = image.title;
                document.getElementById('lightboxDescription').textContent = image.description;
                document.getElementById('lightboxDate').textContent = new Date(image.date).toLocaleDateString();
                document.getElementById('lightboxViews').textContent = image.views;
                document.getElementById('lightboxSize').textContent = image.size;
                
                // Show lightbox
                document.getElementById('lightbox').classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            closeLightbox() {
                document.getElementById('lightbox').classList.remove('active');
                document.body.style.overflow = '';
                this.currentLightboxIndex = -1;
            }

            navigateLightbox(direction) {
                const newIndex = this.currentLightboxIndex + direction;
                if (newIndex >= 0 && newIndex < this.filteredImages.length) {
                    this.openLightbox(newIndex);
                }
            }

            likeImage(imageId) {
                const image = this.images.find(img => img.id === imageId);
                if (image) {
                    // Simulate like action
                    this.showToast('❤️ Image liked!');
                }
            }

            shareImage(imageId) {
                const image = this.images.find(img => img.id === imageId);
                if (image) {
                    // Simulate share action
                    if (navigator.share) {
                        navigator.share({
                            title: image.title,
                            text: image.description,
                            url: window.location.href
                        });
                    } else {
                        // Fallback: copy to clipboard
                        navigator.clipboard.writeText(window.location.href);
                        this.showToast('🔗 Link copied to clipboard!');
                    }
                }
            }

            downloadImage(imageId) {
                const image = this.images.find(img => img.id === imageId);
                if (image) {
                    // Simulate download action
                    const link = document.createElement('a');
                    link.href = image.url;
                    link.download = \`\${image.title.replace(/\\s+/g, '-').toLowerCase()}.jpg\`;
                    link.click();
                    this.showToast('⬇️ Download started!');
                }
            }

            resetFilters() {
                this.currentFilter = 'all';
                this.searchQuery = '';
                document.getElementById('searchInput').value = '';
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.category === 'all') {
                        btn.classList.add('active');
                    }
                });
                this.filterImages();
            }

            updateStats() {
                document.getElementById('totalImages').textContent = this.filteredImages.length;
                document.getElementById('totalCategories').textContent = [...new Set(this.images.map(img => img.category))].length;
                document.getElementById('totalViews').textContent = this.totalViews + this.images.reduce((sum, img) => sum + img.views, 0);
            }

            showToast(message) {
                // Create toast notification
                const toast = document.createElement('div');
                toast.style.cssText = \`
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: var(--gradient-success);
                    color: white;
                    padding: 16px 24px;
                    border-radius: 12px;
                    box-shadow: var(--shadow-lg);
                    z-index: 2000;
                    font-weight: 600;
                    animation: slideInUp 0.3s ease-out;
                \`;
                toast.textContent = message;
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.style.animation = 'slideOutDown 0.3s ease-out';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }
        }

        // Add animations
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes slideInUp {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideOutDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(100px); opacity: 0; }
            }
        \`;
        document.head.appendChild(style);

        // Initialize the gallery
        const gallery = new ImageGallery();
    </script>
</body>
</html>`;
    }
    
    openWithContent(html, css, js);
  };

  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index} className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
          {isImplementation ? (
            // For implementation questions - no accordion, just playground button
            <div className="p-4">
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold text-xs">{index + 1}</span>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                    {q.question}
                  </p>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex-shrink-0">
                    Implementation
                  </Badge>
                </div>
                <Button
                   onClick={(e) => {
                     e.stopPropagation();
                     openPlayground(q.implementation!);
                   }}
                   className="w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center"
                   title="Try in Playground"
                 >
                  <Code className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            // For regular questions - with accordion and YouTube
            <Accordion type="single" collapsible className="w-full border-0 bg-transparent">
              <AccordionItem value={`item-${index}`} className="border-0">
                <AccordionTrigger className="text-left hover:no-underline p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs">{index + 1}</span>
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                        {q.question}
                      </p>
                      {q.implementation && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 flex-shrink-0">
                          Implementation
                        </Badge>
                      )}
                    </div>
                    <Button
                      onClick={() => {
                        const searchQuery = encodeURIComponent(`${q.question} JavaScript`);
                        window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
                      }}
                      className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center mr-2"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div 
                      className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: String(marked.parse(q.idealAnswer)) }} 
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </Card>
      ))}
    </div>
  );
}

export default function JavaScriptInterviewQuestions() {
  const [activeTab, setActiveTab] = useState('easy');

  const questions = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions,
    implementation: implementationQuestions
  };

  const difficultyStats = {
    easy: { count: easyQuestions.length, icon: BookOpen, color: 'green', time: '5-10 min' },
    medium: { count: mediumQuestions.length, icon: Target, color: 'yellow', time: '10-15 min' },
    hard: { count: hardQuestions.length, icon: TrendingUp, color: 'red', time: '15-20 min' },
    implementation: { count: implementationQuestions.length, icon: Code, color: 'purple', time: '20-30 min' }
  };

  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      {/* Interview Header */}
      <InterviewHeader 
        showBackButton={true} 
        currentLanguage="JavaScript" 
      />
        {/* Questions Tabs */}
      <div className="space-y-6">
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-4 sm:grid-cols-2 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger value="easy" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-2 rounded-lg data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/60 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200 data-[state=active]:shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200">Easy</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300 hidden sm:block">{easyQuestions.length} questions • 5-10 min</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300 sm:hidden">{easyQuestions.length} • 5-10m</span>
            </TabsTrigger>
            <TabsTrigger value="medium" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-2 rounded-lg data-[state=active]:bg-yellow-100 dark:data-[state=active]:bg-yellow-900/60 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200 data-[state=active]:shadow-sm hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 dark:text-yellow-400 data-[state=active]:text-yellow-700 dark:data-[state=active]:text-yellow-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200">Medium</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300 hidden sm:block">{mediumQuestions.length} questions • 10-15 min</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300 sm:hidden">{mediumQuestions.length} • 10-15m</span>
            </TabsTrigger>
            <TabsTrigger value="hard" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-2 rounded-lg data-[state=active]:bg-red-100 dark:data-[state=active]:bg-red-900/60 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200 data-[state=active]:shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 dark:text-red-400 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200">Hard</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300 hidden sm:block">{hardQuestions.length} questions • 15-20 min</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300 sm:hidden">{hardQuestions.length} • 15-20m</span>
            </TabsTrigger>
            <TabsTrigger value="implementation" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-2 rounded-lg data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/60 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200 data-[state=active]:shadow-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200">Implementation</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-300 hidden sm:block">{implementationQuestions.length} questions • Hands-on</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-300 sm:hidden">{implementationQuestions.length} • Hands-on</span>
            </TabsTrigger>
          </TabsList>

          {/* Questions Content */}
          <TabsContent value="easy" className="space-y-3 sm:space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200 text-lg sm:text-xl">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300 text-sm sm:text-base">
                  Fundamental JavaScript concepts perfect for beginners and quick reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 sm:pt-0">
                <QnA questions={easyQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-3 sm:space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 text-lg sm:text-xl">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription className="text-yellow-700 dark:text-yellow-300 text-sm sm:text-base">
                  Intermediate JavaScript topics for practical applications and real-world scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 sm:pt-0">
                <QnA questions={mediumQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-3 sm:space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200 text-lg sm:text-xl">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300 text-sm sm:text-base">
                  Advanced JavaScript concepts for expert-level understanding and technical interviews
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 sm:pt-0">
                <QnA questions={hardQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="implementation" className="space-y-3 sm:space-y-4">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200 text-lg sm:text-xl">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  🚀 Top 8 JavaScript Implementation Questions
                </CardTitle>
                <CardDescription className="text-purple-700 dark:text-purple-300 text-sm sm:text-base">
                  Practical coding tasks asked in interviews and machine tests - All with playground implementations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={implementationQuestions} isImplementation={true} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Study Tips */}
        <Alert className="mt-8">
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>Study Tips:</strong> Start with Easy questions to build foundation, then move to Medium for practical concepts, and tackle Hard questions for deep understanding. Practice coding each example and understand the 'why' behind each concept.
          </AlertDescription>
        </Alert>

        {/* Next Steps */}
        <Card className="border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              Next Steps
            </CardTitle>
            <CardDescription>
              Continue your JavaScript learning journey with these recommended resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📚 Learning Plan</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Follow our structured learning path to master JavaScript from basics to advanced topics.
                </p>
                <div className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <div>→ Comprehensive roadmap with 24+ topics</div>
                  <div>→ Hands-on exercises and projects</div>
                  <div>→ Real-world interview preparation</div>
                </div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Practice Projects</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Apply your knowledge with hands-on projects and real-world examples.
                </p>
                <div className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <div>→ Build interactive web applications</div>
                  <div>→ Create API integrations</div>
                  <div>→ Develop modern frontend features</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <WebPlaygroundModal />
    </div>
  );
}
