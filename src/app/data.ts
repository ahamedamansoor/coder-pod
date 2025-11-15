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
    slug: 'javascript',
    name: 'JavaScript',
    topics: [
      {
        slug: 'closures',
        title: 'Closures',
        explanation:
          'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.',
      },
      {
        slug: 'prototypal-inheritance',
        title: 'Prototypal Inheritance',
        explanation:
          'Prototypal inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.',
      },
      {
        slug: 'async-await',
        title: 'Async/Await',
        explanation:
          'Async/await is a modern feature in JavaScript that allows you to write asynchronous code that looks and behaves a little more like synchronous code, making it easier to read and understand. The `async` keyword is used to declare an async function, which returns a `Promise`. The `await` keyword is used to pause the execution of an async function and wait for a `Promise` to resolve.',
      },
      {
        slug: 'event-loop',
        title: 'Event Loop',
        explanation:
          'The event loop is a crucial concept for understanding asynchronous operations in JavaScript. It\'s a mechanism that allows Node.js or the browser to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. The loop constantly checks the call stack and the callback queue. If the call stack is empty, it takes the first event from the queue and pushes it to the stack, effectively running it.'
      }
    ],
  },
  {
    slug: 'python',
    name: 'Python',
    topics: [
      {
        slug: 'decorators',
        title: 'Decorators',
        explanation:
          'In Python, a decorator is a design pattern that allows a user to add new functionality to an existing object without modifying its structure. Decorators are usually called before the definition of a function you want to decorate. They are a very powerful and useful tool in Python since it allows programmers to modify the behavior of a function or class.',
      },
      {
        slug: 'list-comprehensions',
        title: 'List Comprehensions',
        explanation:
          'List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list. It provides a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.',
      },
      {
        slug: 'generators',
        title: 'Generators',
        explanation:
          'A generator in Python is a special type of iterator, which can be used to create iterators in a more memory-efficient way. It\'s a function that returns an iterator that produces a sequence of values when iterated over. Generators are written like regular functions but use the `yield` statement instead of `return` to return data. When a generator function is called, it doesn\'t execute the function body immediately. Instead, it returns a generator object.'
      }
    ],
  },
];
