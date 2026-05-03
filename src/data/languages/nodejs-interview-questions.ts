export const nodejsInterviewQuestions = [
  {
    id: 'what-is-nodejs',
    question: 'What is Node.js and how does it work?',
    explanation: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server-side, outside of a web browser. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.',
    codeSnippet: `// Node.js server example
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    category: 'Getting Started',
    difficulty: 'Beginner'
  },
  {
    id: 'event-loop',
    question: 'Explain the Node.js Event Loop',
    explanation: 'The Event Loop is the core mechanism that makes Node.js\'s asynchronous behavior possible. It\'s a semi-infinite loop that continuously checks the call stack and the callback queue. When the call stack is empty, it takes the first event from the callback queue and pushes it to the call stack for execution. This allows Node.js to handle non-blocking I/O operations efficiently despite being single-threaded.',
    codeSnippet: `// Event Loop demonstration
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');
// Output: Start, End, Promise callback, Timeout callback`,
    category: 'Asynchronous Programming',
    difficulty: 'Intermediate'
  },
  {
    id: 'commonjs-vs-es-modules',
    question: 'What is the difference between CommonJS and ES Modules?',
    explanation: 'CommonJS is the original module system in Node.js, using require() for importing and module.exports for exporting. ES Modules (ESM) is the standardized JavaScript module system, using import/export syntax. Key differences: CommonJS is synchronous, ESM is asynchronous; CommonJS can be loaded conditionally, ESM cannot; ESM supports tree-shaking, CommonJS does not.',
    codeSnippet: `// CommonJS
const fs = require('fs');
const { readFile } = require('fs');
module.exports = { myFunction };

// ES Modules
import fs from 'fs';
import { readFile } from 'fs';
export { myFunction };
export default myFunction;`,
    category: 'Modules & Dependencies',
    difficulty: 'Beginner'
  },
  {
    id: 'async-await',
    question: 'How does async/await work in Node.js?',
    explanation: 'Async/await is syntactic sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code. The async keyword declares a function as asynchronous, and await pauses the function execution until a Promise resolves or rejects. This makes code more readable and easier to debug compared to callback chains or .then() chains.',
    codeSnippet: `// Async/Await example
async function fetchUserData(userId) {
  try {
    const user = await getUserById(userId);
    const posts = await getUserPosts(userId);
    return { user, posts };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Usage
fetchUserData('123')
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    category: 'Asynchronous Programming',
    difficulty: 'Intermediate'
  },
  {
    id: 'streams',
    question: 'What are Streams in Node.js and when would you use them?',
    explanation: 'Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. Instead of reading an entire file into memory, streams process data in chunks, making them memory-efficient for handling large files or network data. Node.js has four types of streams: Readable, Writable, Duplex, and Transform.',
    codeSnippet: `// Reading a large file with streams
const fs = require('fs');
const readline = require('readline');

const readableStream = fs.createReadStream('large-file.txt');
const writableStream = fs.createWriteStream('output.txt');

// Pipe streams
readableStream.pipe(writableStream);

// Process line by line
const rl = readline.createInterface({
  input: readableStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(\`Line: \${line}\`);
});`,
    category: 'Core Modules',
    difficulty: 'Intermediate'
  },
  {
    id: 'middleware',
    question: 'What is middleware in Express.js?',
    explanation: 'Middleware functions are functions that have access to the request object (req), response object (res), and the next function in the application\'s request-response cycle. They can execute code, make changes to request and response objects, end the request-response cycle, or call the next middleware in the stack. Middleware is used for logging, authentication, parsing request bodies, error handling, and more.',
    codeSnippet: `// Custom middleware example
const express = require('express');
const app = express();

// Logger middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path} - \${new Date()}\`);
  next();
});

// Authentication middleware
const authenticate = (req, res, next) => {
  if (req.headers.authorization === 'secret-token') {
    req.user = { id: 1, name: 'John' };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});`,
    category: 'Web Frameworks',
    difficulty: 'Intermediate'
  },
  {
    id: 'error-handling',
    question: 'What are the best practices for error handling in Node.js?',
    explanation: 'Proper error handling in Node.js involves using try-catch blocks for synchronous code, .catch() for promises, and error-first callbacks for traditional callbacks. For async/await, wrap calls in try-catch blocks. Always handle errors at each level and use centralized error handling middleware in Express. Never ignore errors and provide meaningful error messages.',
    codeSnippet: `// Error handling patterns

// 1. Callback error-first pattern
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

// 2. Promise error handling
readFilePromise('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));

// 3. Async/await error handling
async function readFileAsync() {
  try {
    const data = await readFilePromise('file.txt');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

// 4. Express error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});`,
    category: 'Error Handling',
    difficulty: 'Intermediate'
  },
  {
    id: 'cluster-module',
    question: 'How does the cluster module work in Node.js?',
    explanation: 'The cluster module allows you to create child processes (workers) that share server ports, enabling Node.js to take advantage of multi-core systems. The master process can fork multiple worker processes, and incoming connections are distributed among them. This improves performance and reliability for CPU-intensive applications while maintaining the simplicity of a single process codebase.',
    codeSnippet: `const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork(); // Restart worker
  });
} else {
  // Workers can share any TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(\`Worker \${process.pid} handled request\`);
  }).listen(8000);
  
  console.log(\`Worker \${process.pid} started\`);
}`,
    category: 'Advanced Topics',
    difficulty: 'Advanced'
  },
  {
    id: 'buffer-vs-string',
    question: 'What is the difference between Buffer and String in Node.js?',
    explanation: 'Buffers are designed to handle raw binary data, while strings are for textual data. Buffers are fixed-size chunks of memory allocated outside the V8 JavaScript engine, making them more efficient for binary operations. Strings are Unicode and can be multi-byte, while buffers work with bytes. Use buffers when dealing with file systems, TCP streams, or other binary data sources.',
    codeSnippet: `// Buffer vs String examples
const str = 'Hello';
const buf = Buffer.from('Hello');

console.log(str); // 'Hello'
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // 'Hello'

// Buffer operations
const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4]);
const buf2 = Buffer.alloc(4);
buf2.write('abcd');

// Concatenating buffers
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3); // <Buffer 01 02 03 04 61 62 63 64>

// String encoding
const utf8 = Buffer.from('Hello', 'utf8');
const hex = Buffer.from('Hello', 'hex');
const base64 = Buffer.from('Hello', 'base64');`,
    category: 'Core Modules',
    difficulty: 'Intermediate'
  },
  {
    id: 'package-json',
    question: 'Explain the key fields in package.json',
    explanation: 'The package.json file is the heart of any Node.js project. Key fields include: name (project identifier), version (semantic versioning), description, main (entry point), scripts (npm scripts), dependencies (production dependencies), devDependencies (development-only dependencies), engines (required Node.js version), and keywords (for npm discovery). The file also defines project metadata and configuration.',
    codeSnippet: `{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "main": "src/index.js",
  "type": "module", // Use ES modules
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^6.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^28.0.0"
  },
  "engines": {
    "node": ">=14.0.0"
  },
  "keywords": ["nodejs", "express", "api"]
}`,
    category: 'Modules & Dependencies',
    difficulty: 'Beginner'
  },
  {
    id: 'event-emitter',
    question: 'How does the EventEmitter work in Node.js?',
    explanation: 'EventEmitter is a class that facilitates communication between objects in Node.js. It\'s the foundation of the event-driven architecture. Objects can emit named events, and other objects can listen for these events and execute callbacks when they occur. Many Node.js core modules inherit from EventEmitter, making it essential for understanding how Node.js handles asynchronous operations.',
    codeSnippet: `const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listen for events
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Emit events
myEmitter.emit('event');

// With data
myEmitter.on('data', (data) => {
  console.log('Received data:', data);
});

myEmitter.emit('data', { id: 1, name: 'John' });

// Once listener
myEmitter.once('connect', () => {
  console.log('Connected!');
});

// Error handling
myEmitter.on('error', (err) => {
  console.error('Error:', err);
});

myEmitter.emit('error', new Error('Something went wrong'));`,
    category: 'Core Modules',
    difficulty: 'Intermediate'
  },
  {
    id: 'process-object',
    question: 'What is the process object in Node.js?',
    explanation: 'The process object is a global object that provides information about the current Node.js process. It\'s an instance of EventEmitter and includes properties like process.env (environment variables), process.argv (command line arguments), process.pid (process ID), and methods like process.exit() and process.nextTick(). It\'s essential for process management and configuration.',
    codeSnippet: `// Process object examples
console.log('Process ID:', process.pid);
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Command line args:', process.argv);

// Environment variables
console.log('NODE_ENV:', process.env.NODE_ENV);

// Exit the process
process.exit(1); // Exit with error code

// nextTick vs setImmediate
console.log('Start');

process.nextTick(() => {
  console.log('nextTick callback');
});

setImmediate(() => {
  console.log('setImmediate callback');
});

console.log('End');
// Output: Start, End, nextTick callback, setImmediate callback

// Process signals
process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
});`,
    category: 'Core Modules',
    difficulty: 'Beginner'
  },
  {
    id: 'express-routing',
    question: 'How does routing work in Express.js?',
    explanation: 'Express routing maps HTTP methods and URL patterns to specific handler functions. Routes can be defined using app.METHOD() methods or the express.Router class. Routes can include parameters (req.params), query strings (req.query), and support middleware. Express also supports route chaining and nested routers for complex applications.',
    codeSnippet: `const express = require('express');
const app = express();

// Basic routes
app.get('/', (req, res) => {
  res.send('Home page');
});

app.post('/users', (req, res) => {
  res.send('Create user');
});

// Route parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User \${userId}\`);
});

// Query parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(\`Searching for: \${query}\`);
});

// Route chaining
app.route('/books')
  .get((req, res) => res.send('Get all books'))
  .post((req, res) => res.send('Create a book'))
  .put((req, res) => res.send('Update a book'));

// Using Router
const router = express.Router();
router.get('/profile', (req, res) => {
  res.send('User profile');
});

app.use('/user', router);`,
    category: 'Web Frameworks',
    difficulty: 'Intermediate'
  },
  {
    id: 'promise-all',
    question: 'What is the difference between Promise.all and Promise.allSettled?',
    explanation: 'Promise.all takes an array of promises and returns a single promise that resolves when all input promises have resolved, or rejects when any promise rejects. Promise.allSettled returns a promise that resolves after all input promises have settled (either resolved or rejected), returning an array of objects describing the outcome of each promise. Use Promise.all when all promises must succeed, and Promise.allSettled when you want to know the result of all promises regardless of failures.',
    codeSnippet: `// Promise.all example
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(1);

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values)) // [3, 2, 1]
  .catch(err => console.error(err)); // Rejects if any promise rejects

// Promise.allSettled example
const promise4 = Promise.resolve(3);
const promise5 = Promise.reject('Error');
const promise6 = Promise.resolve(1);

Promise.allSettled([promise4, promise5, promise6])
  .then(results => {
    results.forEach((result, i) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${i}: \${result.value}\`);
      } else {
        console.log(\`Promise \${i} rejected: \${result.reason}\`);
      }
    });
  });

// Practical example: fetching multiple API endpoints
async function fetchMultipleData() {
  const urls = ['/api/users', '/api/posts', '/api/comments'];
  
  try {
    const results = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    );
    return results;
  } catch (error) {
    console.error('One or more requests failed:', error);
    throw error;
  }
}`,
    category: 'Asynchronous Programming',
    difficulty: 'Intermediate'
  },
  {
    id: 'child-processes',
    question: 'How do you create child processes in Node.js?',
    explanation: 'Node.js provides the child_process module to spawn subprocesses. There are four main methods: spawn() for streaming data, exec() for running commands in a shell, execFile() for running executables, and fork() for creating Node.js processes with IPC communication. Child processes allow you to run CPU-intensive tasks without blocking the event loop and integrate with other system tools.',
    codeSnippet: `const { spawn, exec, fork } = require('child_process');

// 1. spawn() - for streaming large data
const ls = spawn('ls', ['-la']);
ls.stdout.on('data', (data) => {
  console.log(\`stdout: \${data}\`);
});
ls.stderr.on('data', (data) => {
  console.error(\`stderr: \${data}\`);
});
ls.on('close', (code) => {
  console.log(\`child process exited with code \${code}\`);
});

// 2. exec() - for simple commands
exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(\`exec error: \${error}\`);
    return;
  }
  console.log(\`stdout: \${stdout}\`);
});

// 3. fork() - for Node.js processes with IPC
if (process.argv[2] === 'child') {
  // Child process
  process.on('message', (m) => {
    console.log('CHILD got message:', m);
    process.send({ foo: 'bar' });
  });
} else {
  // Master process
  const child = fork(__filename, ['child']);
  child.on('message', (m) => {
    console.log('PARENT got message:', m);
  });
  child.send({ hello: 'world' });
}`,
    category: 'Advanced Topics',
    difficulty: 'Advanced'
  },
  {
    id: 'memory-leaks',
    question: 'What are common causes of memory leaks in Node.js and how to prevent them?',
    explanation: 'Common memory leaks in Node.js include: global variables that accumulate data, unclosed database connections, event listeners that are never removed, timers that are never cleared, and closures that maintain references to large objects. Prevention strategies include: proper cleanup in close handlers, using weak references, removing event listeners, clearing intervals/timeouts, and monitoring memory usage with tools like heapdump and clinic.js.',
    codeSnippet: `// Common memory leak patterns and fixes

// 1. Global variables (BAD)
let cache = {};
function addToCache(key, value) {
  cache[key] = value; // Never cleared
}

// Fix: Use Map with size limit or LRU cache
const LRU = require('lru-cache');
const cache = new LRU({ max: 1000 });

// 2. Event listeners not removed (BAD)
emitter.on('data', handler); // Never removed

// Fix: Remove listeners when done
emitter.on('data', handler);
// Later...
emitter.removeListener('data', handler);
// Or use once
emitter.once('data', handler);

// 3. Unclosed database connections (BAD)
function getUser(id) {
  const connection = createConnection(); // Never closed
  return connection.query('SELECT * FROM users WHERE id = ?', [id]);
}

// Fix: Use connection pooling and proper cleanup
const pool = require('mysql').createPool(config);
async function getUser(id) {
  const connection = await pool.getConnection();
  try {
    return await connection.query('SELECT * FROM users WHERE id = ?', [id]);
  } finally {
    connection.release();
  }
}

// 4. Timers not cleared (BAD)
setInterval(() => {
  // Some work
}, 1000); // Never cleared

// Fix: Store reference and clear when needed
const interval = setInterval(() => {
  // Some work
}, 1000);
// Later...
clearInterval(interval);

// Memory monitoring
function logMemoryUsage() {
  const used = process.memoryUsage();
  console.log('Memory Usage:');
  for (let key in used) {
    console.log(\`\${key}: \${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB\`);
  }
}

setInterval(logMemoryUsage, 5000);`,
    category: 'Advanced Topics',
    difficulty: 'Advanced'
  }
];
