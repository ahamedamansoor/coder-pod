import type { Language } from './types';

export const nodejs: Language = {
  slug: 'nodejs',
  name: 'Node.js',
  topics: [
    {
      slug: 'interview-questions',
      title: 'Interview Questions',
      explanation: 'Comprehensive Node.js interview questions with detailed answers and code examples.',
      category: 'Interview Preparation'
    },
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'A structured roadmap for learning Node.js from scratch.'
    },
    {
      slug: 'what-is-nodejs',
      title: 'Node.js Intro',
      explanation: 'A high-level overview of what Node.js is and where it is used.',
      category: 'Getting Started'
    },
    {
      slug: 'nodejs-architecture',
      title: 'Node.js Architecture',
      explanation: 'Understanding the single-threaded event-driven architecture of Node.js.',
      category: 'Getting Started'
    },
    {
      slug: 'installation-setup',
      title: 'Installation & Setup',
      explanation: 'Step-by-step guide to installing Node.js and setting up your development environment.',
      category: 'Getting Started'
    },
    {
      slug: 'npm-yarn',
      title: 'Package Managers (npm & yarn)',
      explanation: 'Understanding package managers for Node.js dependencies.',
      category: 'Getting Started'
    },
    {
      slug: 'modules-commonjs',
      title: 'Modules (CommonJS)',
      explanation: 'Understanding the module system in Node.js with require() and module.exports.',
      category: 'Modules & Dependencies'
    },
    {
      slug: 'es-modules',
      title: 'ES Modules',
      explanation: 'Modern JavaScript module system with import/export syntax.',
      category: 'Modules & Dependencies'
    },
    {
      slug: 'package-json',
      title: 'package.json',
      explanation: 'Understanding the configuration file for Node.js projects.',
      category: 'Modules & Dependencies'
    },
    {
      slug: 'node-core-modules',
      title: 'Core Modules',
      explanation: 'Built-in modules like fs, path, http, etc.',
      category: 'Core Modules'
    },
    {
      slug: 'file-system',
      title: 'File System (fs)',
      explanation: 'Reading and writing files with the fs module.',
      category: 'Core Modules'
    },
    {
      slug: 'path-module',
      title: 'Path Module',
      explanation: 'Working with file and directory paths.',
      category: 'Core Modules'
    },
    {
      slug: 'http-module',
      title: 'HTTP Module',
      explanation: 'Creating HTTP servers and clients.',
      category: 'Core Modules'
    },
    {
      slug: 'events-module',
      title: 'Events Module',
      explanation: 'Event-driven programming with EventEmitter.',
      category: 'Core Modules'
    },
    {
      slug: 'streams',
      title: 'Streams',
      explanation: 'Handling streaming data for efficient processing.',
      category: 'Core Modules'
    },
    {
      slug: 'buffers',
      title: 'Buffers',
      explanation: 'Working with binary data in Node.js.',
      category: 'Core Modules'
    },
    {
      slug: 'async-programming',
      title: 'Async Programming',
      explanation: 'Understanding callbacks, promises, and async/await.',
      category: 'Asynchronous Programming'
    },
    {
      slug: 'event-loop',
      title: 'Event Loop',
      explanation: 'Understanding the heart of Node.js concurrency.',
      category: 'Asynchronous Programming'
    },
    {
      slug: 'callbacks',
      title: 'Callbacks',
      explanation: 'Traditional callback pattern in Node.js.',
      category: 'Asynchronous Programming'
    },
    {
      slug: 'promises',
      title: 'Promises',
      explanation: 'Modern approach to handling asynchronous operations.',
      category: 'Asynchronous Programming'
    },
    {
      slug: 'async-await',
      title: 'Async/Await',
      explanation: 'Syntactic sugar for working with promises.',
      category: 'Asynchronous Programming'
    },
    {
      slug: 'error-handling',
      title: 'Error Handling',
      explanation: 'Best practices for handling errors in async code.',
      category: 'Error Handling'
    },
    {
      slug: 'express-basics',
      title: 'Express.js Basics',
      explanation: 'Building web applications with Express framework.',
      category: 'Web Frameworks'
    },
    {
      slug: 'express-routing',
      title: 'Express Routing',
      explanation: 'Defining routes and handling HTTP methods.',
      category: 'Web Frameworks'
    },
    {
      slug: 'express-middleware',
      title: 'Express Middleware',
      explanation: 'Understanding and creating middleware functions.',
      category: 'Web Frameworks'
    },
    {
      slug: 'express-templates',
      title: 'Template Engines',
      explanation: 'Rendering dynamic content with template engines.',
      category: 'Web Frameworks'
    },
    {
      slug: 'rest-apis',
      title: 'Building REST APIs',
      explanation: 'Creating RESTful APIs with Node.js and Express.',
      category: 'Web Frameworks'
    },
    {
      slug: 'authentication',
      title: 'Authentication',
      explanation: 'Implementing user authentication and authorization.',
      category: 'Security'
    },
    {
      slug: 'security-best-practices',
      title: 'Security Best Practices',
      explanation: 'Securing Node.js applications against common vulnerabilities.',
      category: 'Security'
    },
    {
      slug: 'databases-mongodb',
      title: 'MongoDB with Node.js',
      explanation: 'Working with MongoDB database.',
      category: 'Databases'
    },
    {
      slug: 'databases-sql',
      title: 'SQL Databases',
      explanation: 'Connecting to SQL databases like MySQL, PostgreSQL.',
      category: 'Databases'
    },
    {
      slug: 'orm-odm',
      title: 'ORM/ODM',
      explanation: 'Using Object-Relational Mapping tools.',
      category: 'Databases'
    },
    {
      slug: 'testing',
      title: 'Testing Node.js',
      explanation: 'Unit testing and integration testing.',
      category: 'Testing'
    },
    {
      slug: 'debugging',
      title: 'Debugging',
      explanation: 'Techniques for debugging Node.js applications.',
      category: 'Development Tools'
    },
    {
      slug: 'performance-optimization',
      title: 'Performance Optimization',
      explanation: 'Optimizing Node.js application performance.',
      category: 'Advanced Topics'
    },
    {
      slug: 'clustering',
      title: 'Clustering',
      explanation: 'Using multiple CPU cores with cluster module.',
      category: 'Advanced Topics'
    },
    {
      slug: 'child-processes',
      title: 'Child Processes',
      explanation: 'Spawning child processes for CPU-intensive tasks.',
      category: 'Advanced Topics'
    },
    {
      slug: 'worker-threads',
      title: 'Worker Threads',
      explanation: 'True multithreading in Node.js.',
      category: 'Advanced Topics'
    },
    {
      slug: 'microservices',
      title: 'Microservices',
      explanation: 'Building microservices with Node.js.',
      category: 'Advanced Topics'
    },
    {
      slug: 'docker-nodejs',
      title: 'Docker with Node.js',
      explanation: 'Containerizing Node.js applications.',
      category: 'Deployment'
    },
    {
      slug: 'deployment',
      title: 'Deployment',
      explanation: 'Deploying Node.js applications to production.',
      category: 'Deployment'
    }
  ],
};
