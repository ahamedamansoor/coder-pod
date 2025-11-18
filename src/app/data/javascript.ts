
import type { Language } from './types';

export const javascript: Language = {
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
};
