"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, CheckCircle, BookOpen, Code2, FileCode, Terminal, Zap, Shield, Database, Globe, Layers, Cpu, HardDrive, Target, TrendingUp, Rocket, Play } from "lucide-react";
import { marked } from "marked";
import InterviewHeader from '@/components/shared/interview-header';
import { InnovativeHeader } from '@/components/shared';
import AnimationButton from '@/components/languages/nodejs/animation-button';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import type { Language, Topic } from '@/data/languages';
import { nodejs } from '@/data/languages/nodejs';

// Question data structures
interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard" | "implementation";
  category: string;
  timeEstimate: string;
  codeSnippet?: string;
  resources?: string[];
}

// Fallback topics in case nodejs import fails
const fallbackTopics = [
  { slug: 'interview-questions', title: 'Interview Questions', explanation: 'Node.js interview questions and answers' }
];

// Easy Questions
const easyQuestions: Question[] = [
  {
    id: "easy-1",
    question: "What is Node.js and how does it differ from browser JavaScript?",
    answer: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser, enabling server-side development.

**Key Differences from Browser JavaScript:**

1. **Environment**: Browser JavaScript runs in web browsers, Node.js runs on servers/desktops
2. **DOM Access**: Browsers have DOM/window objects, Node.js doesn't
3. **Global Objects**: Node.js has global objects like \`process\`, \`Buffer\`, \`__dirname\`
4. **Module System**: Node.js uses CommonJS (require/module.exports) by default
5. **API Access**: Node.js can access file system, network, OS APIs directly

**Example:**
\`\`\`javascript
// Browser JavaScript
console.log(window.location); // Works
console.log(document); // Works

// Node.js
console.log(process.env); // Works
console.log(__dirname); // Works
console.log(window); // ReferenceError: window is not defined
\`\`\``,
    difficulty: "easy",
    category: "Basics",
    timeEstimate: "5 min",
    codeSnippet: "console.log('Hello from Node.js!');"
  },
  {
    id: "easy-2",
    question: "What is the event loop in Node.js?",
    answer: `The event loop is the core mechanism that makes Node.js's asynchronous behavior possible. It allows Node.js to perform non-blocking I/O operations despite being single-threaded.

**How it works:**
1. Executes synchronous code first
2. Handles asynchronous operations through callbacks
3. Uses different phases for different types of operations
4. Processes the callback queue when the call stack is empty

**Phases of Event Loop:**
1. **Timers**: \`setTimeout\`, \`setInterval\` callbacks
2. **Pending callbacks**: I/O callbacks
3. **Idle, prepare**: Internal use
4. **Poll**: Retrieve new I/O events
5. **Check**: \`setImmediate\` callbacks
6. **Close callbacks**: \`close\` event callbacks

**Example:**
\`\`\`javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');
// Output: Start, End, Promise callback, Timeout callback
\`\`\``,
    difficulty: "easy",
    category: "Core Concepts",
    timeEstimate: "8 min"
  },
  {
    id: "easy-3",
    question: "What are modules in Node.js and how do they work?",
    answer: `Modules are reusable pieces of code that can be exported from one file and imported into another. Node.js uses the CommonJS module system by default.

**Types of Modules:**
1. **Core Modules**: Built-in modules like \`fs\`, \`http\`, \`path\`
2. **Local Modules**: User-defined modules in the project
3. **Third-party Modules**: Installed via npm

**CommonJS Syntax:**
\`\`\`javascript
// Exporting (math.js)
function add(a, b) {
  return a + b;
}

module.exports = { add };

// Importing
const { add } = require('./math');
console.log(add(2, 3)); // 5
\`\`\`

**ES Modules (ESM):**
\`\`\`javascript
// Exporting (math.js)
export function add(a, b) {
  return a + b;
}

// Importing
import { add } from './math.js';
console.log(add(2, 3)); // 5
\`\`\``,
    difficulty: "easy",
    category: "Modules",
    timeEstimate: "6 min"
  },
  {
    id: "easy-4",
    question: "What is npm and what is it used for?",
    answer: `npm (Node Package Manager) is the default package manager for Node.js. It helps manage project dependencies and scripts.

**Key Features:**
1. **Package Installation**: Install and manage third-party packages
2. **Version Management**: Handle package versions and updates
3. **Scripts**: Define and run custom scripts
4. **Dependency Resolution**: Automatically resolve package dependencies

**Common Commands:**
\`\`\`bash
# Initialize a new project
npm init

# Install a package
npm install express

# Install as dev dependency
npm install --save-dev jest

# Install globally
npm install -g typescript

# Run scripts
npm start
npm test
npm build
\`\`\`

**package.json Structure:**
\`\`\`json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
\`\`\``,
    difficulty: "easy",
    category: "Package Management",
    timeEstimate: "5 min"
  },
  {
    id: "easy-5",
    question: "How do you handle errors in Node.js?",
    answer: `Node.js provides several ways to handle errors, depending on whether the code is synchronous or asynchronous.

**Synchronous Error Handling:**
\`\`\`javascript
try {
  const result = JSON.parse('invalid json');
} catch (error) {
  console.error('Error:', error.message);
}
\`\`\`

**Asynchronous Error Handling:**
1. **Callbacks**: First parameter is error
\`\`\`javascript
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
\`\`\`

2. **Promises**: .catch() method
\`\`\`javascript
fs.promises.readFile('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
\`\`\`

3. **Async/Await**: Try-catch blocks
\`\`\`javascript
async function readFile() {
  try {
    const data = await fs.promises.readFile('file.txt');
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

**Global Error Handlers:**
\`\`\`javascript
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
\`\`\``,
    difficulty: "easy",
    category: "Error Handling",
    timeEstimate: "7 min"
  },
  {
    id: "easy-6",
    question: "What is npm and what is it used for?",
    answer: `npm (Node Package Manager) is the default package manager for Node.js. It's used to install, manage, and share reusable code packages.

**Key Features:**
1. **Package Installation**: Install and manage third-party packages
2. **Version Management**: Handle package versions and updates
3. **Scripts**: Define and run custom scripts
4. **Dependency Resolution**: Automatically resolve package dependencies

**Common Commands:**
\`\`\`bash
# Initialize a new project
npm init

# Install a package
npm install express

# Install as dev dependency
npm install --save-dev jest

# Install globally
npm install -g typescript

# Run scripts
npm start
npm test
\`\`\``,
    difficulty: "easy",
    category: "Package Management",
    timeEstimate: "5 min"
  },
  {
    id: "easy-7",
    question: "What is the difference between require() and import?",
    answer: `**require()**: CommonJS module system, synchronous, used in Node.js

**import**: ES6 module system, asynchronous, can be used in modern Node.js and browsers

**require() Example:**
\`\`\`javascript
// CommonJS
const express = require('express');
const { Router } = require('express');
module.exports = { app, router };
\`\`\`

**import Example:**
\`\`\`javascript
// ES6 Modules
import express from 'express';
import { Router } from 'express';
export { app, router };
export default app;
\`\`\`

**Key Differences:**
- **Timing**: require() is synchronous, import is asynchronous
- **Syntax**: require() is function-based, import uses keywords
- **Hoisting**: import statements are hoisted, require() is not
- **Tree Shaking**: import supports static analysis for tree shaking`,
    difficulty: "easy",
    category: "Modules",
    timeEstimate: "6 min"
  },
  {
    id: "easy-8",
    question: "What is Express.js and why is it used?",
    answer: `Express.js is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.

**Key Features:**
1. **Routing**: Define application routes using HTTP methods
2. **Middleware**: Add functionality between request and response
3. **Template Engines**: Support for various template engines
4. **Error Handling**: Built-in error handling mechanisms

**Basic Example:**
\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users/:id', (req, res) => {
  res.json({ user: req.params.id });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\``,
    difficulty: "easy",
    category: "Frameworks",
    timeEstimate: "5 min"
  },
  {
    id: "easy-9",
    question: "What are environment variables in Node.js?",
    answer: `Environment variables are external configuration values that can be accessed by Node.js applications. They're used to store sensitive data and configuration settings.

**Accessing Environment Variables:**
\`\`\`javascript
// Access individual variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Access all variables
const allEnv = process.env;
\`\`\`

**Using .env files:**
\`\`\`bash
# Install dotenv package
npm install dotenv
\`\`\`

\`\`\`javascript
// Load environment variables from .env file
require('dotenv').config();

// .env file content:
# PORT=3000
# DATABASE_URL=mongodb://localhost:27017/myapp
# API_KEY=your-secret-key
\`\`\`

**Best Practices:**
- Never commit .env files to version control
- Use different .env files for different environments
- Store sensitive data like API keys, database URLs`,
    difficulty: "easy",
    category: "Configuration",
    timeEstimate: "6 min"
  },
  {
    id: "easy-10",
    question: "What is callback hell and how can you avoid it?",
    answer: `Callback hell (also called "pyramid of doom") occurs when you have multiple nested callbacks, making code hard to read and maintain.

**Callback Hell Example:**
\`\`\`javascript
fs.readFile('file1.txt', (err, data1) => {
  fs.readFile('file2.txt', (err, data2) => {
    fs.readFile('file3.txt', (err, data3) => {
      fs.readFile('file4.txt', (err, data4) => {
        // Deep nesting makes code hard to read
        console.log(data1, data2, data3, data4);
      });
    });
  });
});
\`\`\`

**Solutions:**

1. **Named Functions:**
\`\`\`javascript
function readFile1(err, data1) {
  fs.readFile('file2.txt', readFile2);
}
function readFile2(err, data2) {
  fs.readFile('file3.txt', readFile3);
}
\`\`\`

2. **Promises:**
\`\`\`javascript
fs.promises.readFile('file1.txt')
  .then(data1 => fs.promises.readFile('file2.txt'))
  .then(data2 => fs.promises.readFile('file3.txt'))
  .then(data3 => console.log(data1, data2, data3));
\`\`\`

3. **Async/Await:**
\`\`\`javascript
async function readFiles() {
  const data1 = await fs.promises.readFile('file1.txt');
  const data2 = await fs.promises.readFile('file2.txt');
  const data3 = await fs.promises.readFile('file3.txt');
  console.log(data1, data2, data3);
}
\`\`\``,
    difficulty: "easy",
    category: "Async Programming",
    timeEstimate: "7 min"
  },
  {
    id: "easy-11",
    question: "What is the purpose of Buffer in Node.js?",
    answer: `Buffer is a Node.js global class used to handle raw binary data. It's particularly useful when working with streams, file systems, and network operations.

**Key Characteristics:**
- Fixed size memory allocation
- Cannot be resized
- Works with raw binary data
- Similar to an array of integers but for raw memory

**Creating Buffers:**
\`\`\`javascript
// Create buffer from string
const buf1 = Buffer.from('Hello World');

// Create buffer with specific size
const buf2 = Buffer.alloc(10); // 10 zero-filled bytes
const buf3 = Buffer.allocUnsafe(10); // Faster but may contain old data

// Create from array
const buf4 = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(buf1.toString()); // 'Hello World'
console.log(buf1.toString('hex')); // '48656c6c6f20576f726c64'
\`\`\`

**Common Operations:**
\`\`\`javascript
const buf = Buffer.from('Hello');

// Get length
console.log(buf.length); // 5

// Read/write bytes
buf[0] = 0x48; // 'H'
console.log(buf[0]); // 72

// Convert to different encodings
console.log(buf.toString('utf8')); // 'Hello'
console.log(buf.toString('base64')); // 'SGVsbG8='

// Slice buffer
const slice = buf.slice(0, 3); // 'Hel'
\`\`\`

**When to Use Buffers:**
- File I/O operations
- Network protocols
- Image/audio processing
- Cryptographic operations
- Working with streams`,
    difficulty: "easy",
    category: "Core Modules",
    timeEstimate: "6 min"
  },
  {
    id: "easy-12",
    question: "How do you debug Node.js applications?",
    answer: `Node.js provides several debugging options for troubleshooting applications.

**Using console.log():**
\`\`\`javascript
console.log('Debug point 1');
console.log('Variable value:', variable);
console.error('Error details:', error);
console.warn('Warning message');
\`\`\`

**Using Node.js Debugger:**
\`\`\`bash
# Start debugging
node debug app.js

# Or with inspect
node --inspect app.js
node --inspect-brk app.js  # Break on start
\`\`\`

**Chrome DevTools Integration:**
\`\`\`bash
# Start with inspect flag
node --inspect app.js

# Open Chrome and go to:
# chrome://inspect
# Click "Open dedicated DevTools for Node"
\`\`\`

**Debugger Statements in Code:**
\`\`\`javascript
function calculateTotal(items) {
  debugger; // Execution will pause here
  let total = 0;
  
  for (let item of items) {
    console.log('Processing item:', item);
    total += item.price;
    debugger; // Another breakpoint
  }
  
  return total;
}
\`\`\`

**VS Code Debugging:**
\`\`\`json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug App.js",
      "type": "node",
      "request": "launch",
      "program": "./app.js",
      "console": "integratedTerminal"
    },
    {
      "name": "Debug Index.js",
      "type": "node",
      "request": "launch",
      "program": "./index.js",
      "console": "integratedTerminal"
    },
    {
      "name": "Debug Server.js",
      "type": "node",
      "request": "launch",
      "program": "./server.js",
      "console": "integratedTerminal"
    }
  ]
}
\`\`\`

**For src folder structure:**
\`\`\`json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main App",
      "type": "node",
      "request": "launch",
      "program": "./src/app.js",
      "console": "integratedTerminal"
    }
  ]
}
\`\`\`

**Manual Debugging:**
\`\`\`bash
# Debug with Node.js inspector
node --inspect app.js
node --inspect-brk app.js  # Break on start

# Then open Chrome and go to chrome://inspect
\`\`\`

**Debugging Tips:**
1. Use meaningful variable names
2. Add breakpoints at critical points
3. Check variable values in scope
4. Use step-through execution
5. Monitor call stack`,
    difficulty: "easy",
    category: "Debugging",
    timeEstimate: "7 min"
  },
  {
    id: "easy-13",
    question: "What is the difference between CommonJS and ES Modules?",
    answer: `CommonJS and ES Modules are two different module systems in JavaScript/Node.js.

**CommonJS (CJS):**
\`\`\`javascript
// Importing
const fs = require('fs');
const { readFile } = require('fs');

// Exporting
module.exports = myFunction;
exports.myVar = 'value';
\`\`\`

**ES Modules (ESM):**
\`\`\`javascript
// Importing
import fs from 'fs';
import { readFile } from 'fs';

// Exporting
export default myFunction;
export const myVar = 'value';
\`\`\`

**Key Differences:**
- **Syntax**: CJS uses require/exports, ESM uses import/export
- **Loading**: CJS is synchronous, ESM is asynchronous
- **This**: CJS has \`this\` pointing to module.exports, ESM has \`undefined\`
- **Dynamic**: CJS can require conditionally, ESM imports are static (except dynamic import())
- **File Extension**: ESM files typically use .mjs or "type": "module" in package.json

**Package.json Configuration:**
\`\`\`json
{
  "type": "module" // Use ES modules by default
}
\`\`\``,
    difficulty: "easy",
    category: "Modules",
    timeEstimate: "6 min"
  },
  {
    id: "easy-14",
    question: "What are global objects in Node.js?",
    answer: `Node.js provides several global objects that are available everywhere without importing.

**Common Global Objects:**
\`\`\`javascript
// Global process object
console.log(process.env.NODE_ENV);
console.log(process.pid);
console.log(process.memoryUsage());

// Global console object
console.log('Hello World');
console.error('Error message');

// Global timers
setTimeout(() => console.log('Delayed'), 1000);
setInterval(() => console.log('Repeated'), 2000);

// Global Buffer (Node.js specific)
const buf = Buffer.from('Hello');

// Global __dirname and __filename
console.log(__dirname); // Current directory
console.log(__filename); // Current file path

// Global URL and URLSearchParams
const url = new URL('https://example.com/path?query=value');
\`\`\`

**Global Functions:**
\`\`\`javascript
// Global require (CommonJS)
const fs = require('fs');

// Global import() (ES Modules dynamic)
const module = await import('./module.js');

// Global setImmediate and process.nextTick
setImmediate(() => console.log('Immediate'));
process.nextTick(() => console.log('Next tick'));
\`\`\`

**Note**: In ES modules, some globals like \`require\`, \`__dirname\`, and \`__filename\` are not available. Use alternatives:
\`\`\`javascript
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
\`\`\``,
    difficulty: "easy",
    category: "Core Concepts",
    timeEstimate: "5 min"
  },
  {
    id: "easy-15",
    question: "How do you handle command-line arguments in Node.js?",
    answer: `Node.js provides several ways to handle command-line arguments.

**Using process.argv:**
\`\`\`javascript
// process.argv[0] = node executable path
// process.argv[1] = script file path
// process.argv[2+] = command line arguments

console.log('Arguments:', process.argv);

// Example: node app.js name age
const name = process.argv[2];
const age = process.argv[3];

console.log(\`Name: \${name}, Age: \${age}\`);
\`\`\`

**Using minimist library for better parsing:**
\`\`\`javascript
// Install: npm install minimist
const args = require('minimist')(process.argv.slice(2));

// Example: node app.js --name John --age 30 --verbose
console.log(args.name); // John
console.log(args.age); // 30
console.log(args.verbose); // true

// Handle flags and commands
if (args.help) {
  console.log('Usage: node app.js --name <name> --age <age>');
}
\`\`\`

**Using yargs for advanced parsing:**
\`\`\`javascript
// Install: npm install yargs
const yargs = require('yargs/yargs')(process.argv.slice(2))
  .option('name', {
    alias: 'n',
    describe: 'User name',
    type: 'string',
    demandOption: true
  })
  .option('age', {
    alias: 'a',
    describe: 'User age',
    type: 'number'
  })
  .help();

argv = yargs.argv;
console.log(\`Name: \${argv.name}, Age: \${argv.age}\`);
\`\`\`

**Environment Variables:**
\`\`\`javascript
// Access environment variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Set environment variables
process.env.NODE_ENV = 'development';
\`\`\``,
    difficulty: "easy",
    category: "Core Concepts",
    timeEstimate: "7 min"
  }
];

// Medium Questions
const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "Explain the difference between process.nextTick() and setImmediate()",
    answer: `Both \`process.nextTick()\` and \`setImmediate()\` are used to execute code after the current operation, but they have different timing in the event loop.

**process.nextTick():**
- Executes before the event loop continues
- Runs between the current operation and the next event loop phase
- Can starve the event loop if used excessively
- Part of the microtask queue

**setImmediate():**
- Executes on the check phase of the event loop
- Runs after any I/O events in the poll phase
- Part of the macrotask queue
- More predictable timing

**Example:**
\`\`\`javascript
console.log('Start');

process.nextTick(() => {
  console.log('nextTick callback');
});

setImmediate(() => {
  console.log('setImmediate callback');
});

console.log('End');

// Output: Start, End, nextTick callback, setImmediate callback
\`\`\`

**When to use:**
- \`nextTick()\`: When you need to run something immediately after current operation
- \`setImmediate()\`: When you want to run something in the next event loop iteration`,
    difficulty: "medium",
    category: "Event Loop",
    timeEstimate: "10 min"
  },
  {
    id: "medium-2",
    question: "What are streams in Node.js and what are the different types?",
    answer: `Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. They are especially useful for working with large files or network data.

**Benefits of Streams:**
1. **Memory Efficiency**: Process data without loading everything into memory
2. **Time Efficiency**: Start processing as soon as data is available
3. **Composability**: Can pipe streams together

**Types of Streams:**
1. **Readable**: Streams from which data can be read
\`\`\`javascript
const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
\`\`\`

2. **Writable**: Streams to which data can be written
\`\`\`javascript
const writableStream = fs.createWriteStream('output.txt');
writableStream.write('Hello, World!');
writableStream.end();
\`\`\`

3. **Duplex**: Streams that are both Readable and Writable
\`\`\`javascript
const net = require('net');
const server = net.createServer((socket) => {
  // socket is duplex
});
\`\`\`

4. **Transform**: Duplex streams that can modify data
\`\`\`javascript
const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});
\`\`\`

**Piping Streams:**
\`\`\`javascript
const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
\`\`\``,
    difficulty: "medium",
    category: "Streams",
    timeEstimate: "12 min"
  },
  {
    id: "medium-3",
    question: "Explain the concept of middleware in Node.js/Express.js",
    answer: `Middleware functions are functions that have access to the request object (req), response object (res), and the next function in the application's request-response cycle.

**How Middleware Works:**
1. Receives request
2. Processes request
3. Either ends response or calls next middleware
4. Passes control to next middleware

**Types of Middleware:**
1. **Application-level middleware**: Bound to app instance
\`\`\`javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
\`\`\`

2. **Router-level middleware**: Bound to router instance
\`\`\`javascript
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});
\`\`\`

3. **Error-handling middleware**: Takes 4 arguments
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
\`\`\`

4. **Built-in middleware**: Express built-in middleware
\`\`\`javascript
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded
app.use(express.static('public')); // Serve static files
\`\`\`

5. **Third-party middleware**: From npm
\`\`\`javascript
const cors = require('cors');
app.use(cors());
\`\`\`

**Custom Middleware Example:**
\`\`\`javascript
function requestLogger(req, res, next) {
  console.log(\`\${req.method} \${req.url} - \${new Date()}\`);
  next();
}

app.use(requestLogger);
\`\`\``,
    difficulty: "medium",
    category: "Express.js",
    timeEstimate: "10 min"
  },
  {
    id: "medium-4",
    question: "What is the purpose of the buffer module in Node.js?",
    answer: `Buffer is a global class in Node.js used to handle raw binary data. It's particularly useful when dealing with TCP streams, file system operations, and other contexts where binary data is involved.

**Key Characteristics:**
1. **Fixed Size**: Buffers have a fixed size that cannot be resized
2. **Raw Memory**: Direct access to raw memory allocated outside V8
3. **Global Class**: Available without requiring the buffer module

**Creating Buffers:**
\`\`\`javascript
// Create buffer of size 10
const buf1 = Buffer.alloc(10);

// Create buffer from array
const buf2 = Buffer.from([1, 2, 3, 4]);

// Create buffer from string
const buf3 = Buffer.from('Hello World');

// Create buffer from string with encoding
const buf4 = Buffer.from('Hello', 'utf8');
\`\`\`

**Buffer Operations:**
\`\`\`javascript
const buf = Buffer.from('Hello');

// Read from buffer
console.log(buf.toString()); // 'Hello'
console.log(buf.toString('hex')); // '48656c6c6f'

// Write to buffer
buf.write('World');
console.log(buf.toString()); // 'World'

// Get buffer length
console.log(buf.length); // 5

// Copy buffer
const target = Buffer.alloc(5);
buf.copy(target);
\`\`\`

**Common Use Cases:**
1. **File Operations**: Reading/writing binary files
2. **Network Communication**: Handling TCP/UDP data
3. **Cryptography**: Working with encryption algorithms
4. **Image Processing**: Manipulating image data

**Example: File Reading with Buffer:**
\`\`\`javascript
const fs = require('fs');

fs.readFile('image.png', (err, data) => {
  if (err) throw err;
  console.log(data instanceof Buffer); // true
  console.log(data.length); // File size in bytes
});
\`\`\``,
    difficulty: "medium",
    category: "Core Modules",
    timeEstimate: "8 min"
  },
  {
    id: "medium-5",
    question: "How does clustering work in Node.js?",
    answer: `Clustering allows you to create child processes (workers) that share server ports, enabling Node.js applications to take advantage of multi-core systems.

**Why Use Clustering:**
1. **Multi-core Utilization**: Use all CPU cores
2. **Improved Performance**: Handle more concurrent requests
3. **Fault Tolerance**: If one worker dies, others continue
4. **Zero Downtime**: Restart workers without stopping server

**How it Works:**
1. Master process creates worker processes
2. Workers share the same port
3. Operating system load balances between workers
4. Each worker runs in its own V8 instance

**Basic Cluster Implementation:**
\`\`\`javascript
const cluster = require('cluster');
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
    res.end('Hello from worker ' + process.pid);
  }).listen(8000);
  
  console.log(\`Worker \${process.pid} started\`);
}
\`\`\`

**Advanced Cluster with PM2:**
\`\`\`bash
# Start with clustering
pm2 start app.js -i max

# Start with specific number of instances
pm2 start app.js -i 4
\`\`\`

**Considerations:**
1. **Memory Usage**: Each worker has its own memory
2. **State Management**: Workers don't share memory
3. **Session Management**: Need external session store
4. **Database Connections**: Manage connections carefully`,
    difficulty: "medium",
    category: "Performance",
    timeEstimate: "12 min"
  },
  {
    id: "medium-6",
    question: "What is the difference between authentication and authorization in Node.js?",
    answer: `**Authentication**: Verifying who a user is (identity)

**Authorization**: Verifying what a user can do (permissions)

**Authentication Example:**
\`\`\`javascript
// JWT Authentication
const jwt = require('jsonwebtoken');

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Verify credentials
  const user = await User.findOne({ username });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Generate token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
\`\`\`

**Authorization Example:**
\`\`\`javascript
// Role-based authorization
function authorizeRole(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
}

// Protected routes
app.get('/admin/users', authenticateToken, authorizeRole(['admin']), getUsers);
app.get('/profile', authenticateToken, getProfile);
\`\`\``,
    difficulty: "medium",
    category: "Security",
    timeEstimate: "10 min"
  },
  {
    id: "medium-7",
    question: "How do you handle file uploads in Node.js?",
    answer: `File uploads in Node.js can be handled using middleware like multer or by parsing multipart/form-data manually.

**Using Multer:**
\`\`\`javascript
const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

const upload = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Routes
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size
  });
});

// Multiple files
app.post('/upload-multiple', upload.array('images', 5), (req, res) => {
  res.json({ files: req.files });
});
\`\`\`

**Manual Implementation:**
\`\`\`javascript
const formidable = require('formidable');

app.post('/upload-manual', (req, res) => {
  const form = new formidable.IncomingForm();
  
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    res.json({ fields, files });
  });
});
\`\`\``,
    difficulty: "medium",
    category: "File System",
    timeEstimate: "8 min"
  },
  {
    id: "medium-8",
    question: "What is clustering in Node.js and why is it important?",
    answer: `Clustering allows you to create multiple Node.js processes to handle incoming connections, improving performance and utilizing multi-core CPUs.

**Simple Cluster Example:**
\`\`\`javascript
const cluster = require('cluster');
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
}
\`\`\`

**Benefits of Clustering:**
1. **Multi-core Utilization**: Uses all CPU cores
2. **Improved Performance**: Handle more concurrent requests
3. **Fault Tolerance**: Workers can restart if they crash
4. **Load Balancing**: Requests distributed across workers

**Using PM2 for Clustering:**
\`\`\`bash
# Start with clustering
pm2 start app.js -i max

# Or specific number of instances
pm2 start app.js -i 4
\`\`\`

**Important Considerations:**
- **Stateless Applications**: Workers should be stateless
- **Session Storage**: Use external session store (Redis)
- **Memory Usage**: Each worker has its own memory`,
    difficulty: "medium",
    category: "Performance",
    timeEstimate: "10 min"
  },
  {
    id: "medium-9",
    question: "How do you implement caching in Node.js applications?",
    answer: `Caching improves performance by storing frequently accessed data in memory for faster retrieval.

**In-Memory Caching:**
\`\`\`javascript
const cache = new Map();

function getCachedData(key) {
  if (cache.has(key)) {
    console.log('Data from cache');
    return cache.get(key);
  }
  return null;
}

function setCachedData(key, data, ttl = 300000) { // 5 minutes default
  cache.set(key, data);
  
  // Auto-expire
  setTimeout(() => {
    cache.delete(key);
  }, ttl);
}

// Usage
app.get('/users/:id', async (req, res) => {
  const cacheKey = \`user-\${req.params.id}\`;
  let user = getCachedData(cacheKey);
  
  if (!user) {
    user = await User.findById(req.params.id);
    setCachedData(cacheKey, user);
  }
  
  res.json(user);
});
\`\`\`

**Using Redis:**
\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

async function getCachedUser(id) {
  try {
    const cached = await client.get(\`user:\${id}\`);
    return cached ? JSON.parse(cached) : null;
  } catch (err) {
    console.error('Cache error:', err);
    return null;
  }
}

async function setCachedUser(id, user, ttl = 3600) {
  try {
    await client.setex(\`user:\${id}\`, ttl, JSON.stringify(user));
  } catch (err) {
    console.error('Cache set error:', err);
  }
}
\`\`\`

**Using node-cache:**
\`\`\`javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

// Set and get
cache.set('key', value);
const value = cache.get('key');

// Delete
cache.del('key');

// Clear all
cache.flushAll();
\`\`\``,
    difficulty: "medium",
    category: "Performance",
    timeEstimate: "9 min"
  },
  {
    id: "medium-10",
    question: "What is the difference between PUT and PATCH HTTP methods?",
    answer: `**PUT**: Replace the entire resource with the provided data

**PATCH**: Partially update the resource with the provided changes

**PUT Example:**
\`\`\`javascript
// PUT - Replace entire user
app.put('/users/:id', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    
    // All fields are required for PUT
    if (!name || !email || !age) {
      return res.status(400).json({ 
        error: 'All fields are required for PUT' 
      });
    }
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

**PATCH Example:**
\`\`\`javascript
// PATCH - Update only provided fields
app.patch('/users/:id', async (req, res) => {
  try {
    const updates = req.body;
    
    // Only update provided fields
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

**Key Differences:**
- **PUT**: Idempotent, replaces entire resource
- **PATCH**: Not always idempotent, partial updates
- **PUT**: Requires complete resource representation
- **PATCH**: Only requires fields to be updated

**When to Use:**
- **PUT**: Complete resource replacement
- **PATCH**: Partial updates, field modifications`,
    difficulty: "medium",
    category: "API",
    timeEstimate: "7 min"
  },
  {
    id: "medium-11",
    question: "How do you implement testing in Node.js applications?",
    answer: `Testing in Node.js can be done using various frameworks and approaches. Here are the most common methods:

**Using Jest:**
\`\`\`javascript
// Install Jest
npm install --save-dev jest

// math.js
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, divide };

// math.test.js
const { add, divide } = require('./math');

describe('Math functions', () => {
  test('add() should sum two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('divide() should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide() should throw error for zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});

// Run tests
// npx jest
\`\`\`

**Using Mocha and Chai:**
\`\`\`javascript
// Install
npm install --save-dev mocha chai

// test/math.test.js
const { expect } = require('chai');
const { add, divide } = require('../math');

describe('Math functions', () => {
  describe('add()', () => {
    it('should sum two numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('divide()', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('should throw error for zero', () => {
      expect(() => divide(10, 0)).to.throw('Division by zero');
    });
  });
});

// Run tests
// npx mocha
\`\`\`

**Integration Testing with Supertest:**
\`\`\`javascript
// Install
npm install --save-dev supertest

// app.test.js
const request = require('supertest');
const app = require('./app');

describe('API endpoints', () => {
  test('GET /api/users should return users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(response.body).toBeInstanceOf(Array);
  });

  test('POST /api/users should create user', async () => {
    const userData = { name: 'John', email: 'john@example.com' };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);
    
    expect(response.body.name).toBe(userData.name);
  });
});
\`\`\`

**Package.json Scripts:**
\`\`\`json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
\`\`\``,
    difficulty: "medium",
    category: "Testing",
    timeEstimate: "12 min"
  },
  {
    id: "medium-12",
    question: "How do you use TypeScript with Node.js?",
    answer: `TypeScript adds static typing to JavaScript, making Node.js applications more robust and maintainable.

**Setup TypeScript:**
\`\`\`bash
# Install TypeScript and Node types
npm install typescript @types/node --save-dev

# Install type definitions for packages
npm install @types/express @types/cors --save-dev

# Initialize TypeScript configuration
npx tsc --init
\`\`\`

**tsconfig.json:**
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

**TypeScript Node.js Example:**
\`\`\`typescript
// src/types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// src/services/userService.ts
import { User } from '../types/User';

export class UserService {
  private users: User[] = [];

  createUser(name: string, email: string): User {
    const user: User = {
      id: this.users.length + 1,
      name,
      email,
      createdAt: new Date()
    };
    
    this.users.push(user);
    return user;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
\`\`\`

**Express with TypeScript:**
\`\`\`typescript
// src/app.ts
import express, { Request, Response, NextFunction } from 'express';
import { UserService } from './services/userService';

const app = express();
const userService = new UserService();

// Middleware
app.use(express.json());

// Routes with type safety
app.post('/api/users', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email } = req.body as { name: string; email: string };
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email required' });
    }
    
    const user = userService.createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

export default app;
\`\`\`

**Build and Run:**
\`\`\`bash
# Compile TypeScript
npx tsc

# Run compiled JavaScript
node dist/app.js

# Or use ts-node for development
npm install ts-node --save-dev
npx ts-node src/app.ts
\`\`\``,
    difficulty: "medium",
    category: "TypeScript",
    timeEstimate: "15 min"
  },
  {
    id: "medium-13",
    question: "How do you implement GraphQL in Node.js?",
    answer: `GraphQL is a query language for APIs that provides more flexibility than traditional REST APIs.

**Basic GraphQL Server with Apollo Server:**
\`\`\`javascript
// Install dependencies
npm install apollo-server graphql

// server.js
const { ApolloServer, gql } = require('apollo-server');

// Define GraphQL schema
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, authorId: ID!): Post!
  }
\`;

// Sample data
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
];

const posts = [
  { id: '1', title: 'First Post', content: 'Hello World!', authorId: '1' },
  { id: '2', title: 'Second Post', content: 'GraphQL is awesome!', authorId: '2' }
];

// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
    posts: () => posts,
    post: (_, { id }) => posts.find(post => post.id === id)
  },
  
  User: {
    posts: (user) => posts.filter(post => post.authorId === user.id)
  },
  
  Post: {
    author: (post) => users.find(user => user.id === post.authorId)
  },

  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
    
    createPost: (_, { title, content, authorId }) => {
      const newPost = { id: String(posts.length + 1), title, content, authorId };
      posts.push(newPost);
      return newPost;
    }
  }
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start server
server.listen().then(({ url }) => {
  console.log(\`🚀 Server ready at \${url}\`);
});
\`\`\`

**GraphQL with Express:**
\`\`\`javascript
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { gql } = require('apollo-server-express');

const app = express();

// Same typeDefs and resolvers as above
const server = new ApolloServer({ typeDefs, resolvers });

// Apply middleware
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(\`🚀 Server ready at http://localhost:4000\${server.graphqlPath}\`)
);
\`\`\`

**GraphQL Queries:**
\`\`\`graphql
# Get all users
query {
  users {
    id
    name
    email
    posts {
      title
    }
  }
}

# Get specific user
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}

# Create new user
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
    email
  }
}
\`\`\`

**Benefits of GraphQL:**
- **Single Endpoint**: One URL for all operations
- **Flexible Queries**: Request only needed data
- **Strong Typing**: Schema validation
- **Real-time**: Subscriptions support
- **Introspection**: Self-documenting API`,
    difficulty: "medium",
    category: "GraphQL",
    timeEstimate: "18 min"
  },
  {
    id: "medium-14",
    question: "How do you implement WebSocket communication in Node.js?",
    answer: `WebSockets enable real-time, bidirectional communication between clients and servers. In Node.js, we commonly use the \`ws\` or \`socket.io\` libraries.

**Using ws Library:**
\`\`\`javascript
// Install
npm install ws

// server.js
const WebSocket = require('ws');

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server started on port 8080');

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
  console.log('New client connected');
  clients.add(ws);

  // Send welcome message
  ws.send(JSON.stringify({ 
    type: 'welcome', 
    message: 'Connected to WebSocket server' 
  }));

  // Handle incoming messages
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('Received:', data);

    // Broadcast to all clients
    clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: 'broadcast',
          ...data
        }));
      }
    });
  });

  // Handle disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    clients.delete(ws);
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clients.delete(ws);
  });
});
\`\`\`

**Using Socket.IO:**
\`\`\`javascript
// Install
npm install socket.io

// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join room
  socket.on('join-room', (room) => {
    socket.join(room);
    socket.to(room).emit('user-joined', socket.id);
  });

  // Handle chat messages
  socket.on('chat-message', (data) => {
    io.to(data.room).emit('chat-message', {
      id: socket.id,
      message: data.message,
      timestamp: new Date()
    });
  });

  // Handle typing indicators
  socket.on('typing', (data) => {
    socket.to(data.room).emit('user-typing', socket.id);
  });

  socket.on('stop-typing', (data) => {
    socket.to(data.room).emit('user-stop-typing', socket.id);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    socket.broadcast.emit('user-left', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

**Client-side HTML:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>WebSocket Chat</title>
  <script src="/socket.io/socket.io.js"></script>
</head>
<body>
  <div id="messages"></div>
  <input id="messageInput" type="text" placeholder="Type a message...">
  <button onclick="sendMessage()">Send</button>

  <script>
    const socket = io();
    const room = 'general';
    
    socket.emit('join-room', room);
    
    socket.on('chat-message', (data) => {
      const div = document.createElement('div');
      div.textContent = \`\${data.id}: \${data.message}\`;
      document.getElementById('messages').appendChild(div);
    });
    
    function sendMessage() {
      const input = document.getElementById('messageInput');
      socket.emit('chat-message', {
        room: room,
        message: input.value
      });
      input.value = '';
    }
  </script>
</body>
</html>
\`\`\`

**Use Cases for WebSockets:**
- Real-time chat applications
- Live notifications
- Collaborative editing
- Online gaming
- Stock trading platforms
- Live streaming`,
    difficulty: "medium",
    category: "WebSocket",
    timeEstimate: "16 min"
  },
  {
    id: "medium-15",
    question: "How do you implement logging and monitoring in Node.js applications?",
    answer: `Proper logging and monitoring are crucial for production Node.js applications to track issues and performance.

**Using Winston for Logging:**
\`\`\`javascript
// Install
npm install winston

// logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    // Write error logs to error.log
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    }),
    
    // Write all logs to combined.log
    new winston.transports.File({ 
      filename: 'logs/combined.log' 
    })
  ]
});

// Add console transport for development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;

// Usage in app.js
const logger = require('./logger');

app.get('/users/:id', async (req, res) => {
  try {
    logger.info(\`Fetching user \${req.params.id}\`);
    
    const user = await User.findById(req.params.id);
    
    if (!user) {
      logger.warn(\`User \${req.params.id} not found\`);
      return res.status(404).json({ error: 'User not found' });
    }
    
    logger.info(\`Successfully fetched user \${req.params.id}\`);
    res.json(user);
  } catch (error) {
    logger.error(\`Error fetching user \${req.params.id}:\`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
\`\`\`

**Using Morgan for HTTP Request Logging:**
\`\`\`javascript
// Install
npm install morgan

const morgan = require('morgan');

// Custom format
morgan.token('id', (req) => req.id);
morgan.format('custom', ':id :method :url :status - :response-time ms');

// Use middleware
app.use(morgan('combined')); // Standard Apache combined log format
app.use(morgan('custom'));   // Custom format
app.use(morgan('dev'));      // Development format

// Write logs to file
const fs = require('fs');
const path = require('path');

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs/access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));
\`\`\`

**Monitoring with PM2:**
\`\`\`javascript
// Install PM2
npm install pm2 -g

// Start app with monitoring
pm2 start app.js --name "my-app" --monitor

// View monitoring dashboard
pm2 monit

// View logs
pm2 logs

// View metrics
pm2 show my-app
\`\`\`

**Health Check Endpoint:**
\`\`\`javascript
app.get('/health', async (req, res) => {
  const health = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    checks: {}
  };

  try {
    // Check database connection
    await mongoose.connection.db.admin().ping();
    health.checks.database = 'OK';
  } catch (error) {
    health.checks.database = 'ERROR';
    health.message = 'Database connection failed';
  }

  // Check memory usage
  const memUsage = process.memoryUsage();
  health.checks.memory = {
    rss: Math.round(memUsage.rss / 1024 / 1024) + ' MB',
    heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB',
    heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + ' MB'
  };

  const statusCode = health.message === 'OK' ? 200 : 503;
  res.status(statusCode).json(health);
});
\`\`\`

**Error Monitoring with Sentry:**
\`\`\`javascript
// Install
npm install @sentry/node

const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Request handler
app.use(Sentry.requestHandler());

// Error handler
app.use(Sentry.errorHandler());

// Manual error reporting
try {
  // Your code
} catch (error) {
  Sentry.captureException(error);
}
\`\`\``,
    difficulty: "medium",
    category: "Logging & Monitoring",
    timeEstimate: "14 min"
  },
  {
    id: "medium-16",
    question: "How do you implement security best practices in Node.js applications?",
    answer: `Security is crucial for Node.js applications. Here are essential security best practices:

**Input Validation and Sanitization:**
\`\`\`javascript
// Install: npm install joi express-validator
const Joi = require('joi');
const { body, validationResult } = require('express-validator');

// Validation schema
const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])')).required()
});

// Middleware for validation
app.post('/users', [
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 8 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Process valid data
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  // Create user...
});
\`\`\`

**Password Security:**
\`\`\`javascript
// Install: npm install bcrypt
const bcrypt = require('bcrypt');

// Hash password
async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

// Compare password
async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

// Usage
app.post('/register', async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await hashPassword(password);
  // Store hashedPassword in database
});
\`\`\`

**JWT Authentication:**
\`\`\`javascript
// Install: npm install jsonwebtoken
const jwt = require('jsonwebtoken');

// Generate token
function generateToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify token middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});
\`\`\`

**Helmet for Security Headers:**
\`\`\`javascript
// Install: npm install helmet
const helmet = require('helmet');

// Apply security headers
app.use(helmet());

// Custom helmet configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
\`\`\`

**Rate Limiting:**
\`\`\`javascript
// Install: npm install express-rate-limit
const rateLimit = require('express-rate-limit');

// General rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use(limiter);

// Strict rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many authentication attempts'
});

app.post('/login', authLimiter, (req, res) => {
  // Login logic
});
\`\`\`

**CORS Configuration:**
\`\`\`javascript
// Install: npm install cors
const cors = require('cors');

// CORS options
const corsOptions = {
  origin: ['https://yourdomain.com', 'https://www.yourdomain.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
\`\`\`

**Environment Variables Security:**
\`\`\`javascript
// Install: npm install dotenv
require('dotenv').config();

// Use environment variables for sensitive data
const config = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL,
    ssl: process.env.DB_SSL === 'true'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  }
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(\`Missing required environment variable: \${varName}\`);
  }
});
\`\`\``,
    difficulty: "medium",
    category: "Security",
    timeEstimate: "18 min"
  },
  {
    id: "medium-17",
    question: "How do you optimize Node.js application performance?",
    answer: `Performance optimization is crucial for Node.js applications. Here are key optimization techniques:

**Caching Strategies:**
\`\`\`javascript
// In-memory caching
const cache = new Map();

function getCachedData(key, fetchFunction, ttl = 60000) {
  const cached = cache.get(key);
  
  if (cached && Date.now() - cached.timestamp < ttl) {
    return Promise.resolve(cached.data);
  }
  
  return fetchFunction().then(data => {
    cache.set(key, { data, timestamp: Date.now() });
    return data;
  });
}

// Redis caching
// Install: npm install redis
const redis = require('redis');
const client = redis.createClient();

async function getCachedData(key, fetchFunction, ttl = 60) {
  try {
    const cached = await client.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
    
    const data = await fetchFunction();
    await client.setex(key, ttl, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Cache error:', error);
    return fetchFunction();
  }
}
\`\`\`

**Database Connection Pooling:**
\`\`\`javascript
// MongoDB connection pooling
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URL, {
  maxPoolSize: 10, // Maximum number of connections
  minPoolSize: 2,  // Minimum number of connections
  maxIdleTimeMS: 30000, // Close connections after 30s of inactivity
  serverSelectionTimeoutMS: 5000
});

// PostgreSQL connection pooling
// Install: npm install pg
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

async function query(sql, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(sql, params);
    return result.rows;
  } finally {
    client.release();
  }
}
\`\`\`

**Clustering for CPU Utilization:**
\`\`\`javascript
const cluster = require('cluster');
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
  // In this case it's an HTTP server
  require('./app.js');
  console.log(\`Worker \${process.pid} started\`);
}
\`\`\`

**Stream Processing for Large Data:**
\`\`\`javascript
const fs = require('fs');
const { Transform } = require('stream');

// Process large files without loading into memory
const processFile = () => {
  const readStream = fs.createReadStream('large-file.txt');
  const writeStream = fs.createWriteStream('processed-file.txt');
  
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      // Process chunk
      const processed = chunk.toString().toUpperCase();
      this.push(processed);
      callback();
    }
  });
  
  readStream
    .pipe(transformStream)
    .pipe(writeStream)
    .on('finish', () => console.log('File processed'));
};

// Stream for API responses
app.get('/large-data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  const dataStream = getLargeDataStream(); // Your data source
  dataStream.pipe(res);
});
\`\`\`

**Lazy Loading and Code Splitting:**
\`\`\`javascript
// Lazy load modules
let heavyModule;

async function getHeavyModule() {
  if (!heavyModule) {
    heavyModule = await import('./heavy-module.js');
  }
  return heavyModule;
}

// Route-based code splitting
app.get('/analytics', async (req, res) => {
  const { analyticsService } = await import('./services/analytics.js');
  const data = await analyticsService.getData();
  res.json(data);
});
\`\`\`

**Memory Management:**
\`\`\`javascript
// Monitor memory usage
setInterval(() => {
  const memoryUsage = process.memoryUsage();
  console.log('Memory Usage:', {
    rss: Math.round(memoryUsage.rss / 1024 / 1024) + ' MB',
    heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024) + ' MB',
    heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024) + ' MB',
    external: Math.round(memoryUsage.external / 1024 / 1024) + ' MB'
  });
}, 30000);

// Clear unused references
function cleanup() {
  largeArray = null;
  if (global.gc) {
    global.gc(); // Force garbage collection (requires --expose-gc flag)
  }
}

// Use WeakMap for cache that can be garbage collected
const weakCache = new WeakMap();
\`\`\`

**Compression Middleware:**
\`\`\`javascript
// Install: npm install compression
const compression = require('compression');

// Enable gzip compression
app.use(compression({
  level: 6, // Compression level (1-9)
  threshold: 1024, // Only compress responses larger than 1KB
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));
\`\`\``,
    difficulty: "medium",
    category: "Performance",
    timeEstimate: "20 min"
  }
];

// Hard Questions
const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "Explain how Node.js handles memory management and garbage collection",
    answer: `Node.js uses the V8 JavaScript engine for memory management, which implements a generational garbage collector.

**Memory Structure:**
1. **Heap**: Where objects are stored
2. **Stack**: Where primitive values and references are stored
3. **Code Space**: Where executable code is stored

**V8 Memory Generations:**
1. **New Generation (Young Generation)**
   - **Nursery (Space 1)**: New objects
   - **Intermediate (Space 2)**: Objects that survived one GC cycle
   - **Scavenge GC**: Fast, frequent collection

2. **Old Generation**
   - Objects that survived multiple GC cycles
   - **Mark-Sweep GC**: Slower, less frequent collection
   - **Mark-Compact**: Defragments memory

**Garbage Collection Process:**
\`\`\`javascript
// Object creation and lifecycle
function createObjects() {
  const objects = [];
  for (let i = 0; i < 1000000; i++) {
    objects.push({ id: i, data: 'x'.repeat(100) });
  }
  return objects; // Objects become eligible for GC when function returns
}

// Memory monitoring
function checkMemory() {
  const used = process.memoryUsage();
  console.log('Memory Usage:');
  for (let key in used) {
    console.log(\`\${key}: \${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB\`);
  }
}
\`\`\`

**Memory Leaks:**
1. **Global Variables**: Objects never garbage collected
2. **Closures**: Variables held in closure scope
3. **Event Listeners**: Not removed when no longer needed
4. **Timers**: Keep references to objects

**Memory Leak Detection:**
\`\`\`javascript
const weakMap = new WeakMap();

function trackObject(obj) {
  weakMap.set(obj, new Date());
}

// Check if object still exists
function isObjectAlive(obj) {
  return weakMap.has(obj);
}
\`\`\`

**Memory Optimization:**
\`\`\`javascript
// Use streams for large data
const fs = require('fs');
fs.createReadStream('large-file.txt')
  .pipe(fs.createWriteStream('output.txt'));

// Clear references
let largeArray = [/* large data */];
largeArray = null; // Allow GC

// Use object pooling
class ObjectPool {
  constructor(createFn, resetFn) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
  }
  
  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }
  
  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}
\`\`\``,
    difficulty: "hard",
    category: "Memory Management",
    timeEstimate: "15 min"
  },
  {
    id: "hard-2",
    question: "How would you implement a custom EventEmitter in Node.js?",
    answer: `Implementing a custom EventEmitter demonstrates understanding of Node.js's event-driven architecture and the observer pattern.

**Basic EventEmitter Implementation:**
\`\`\`javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  // Add event listener
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this; // For chaining
  }
  
  // Add one-time event listener
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener.apply(this, args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
    return this;
  }
  
  // Remove event listener
  off(event, listenerToRemove) {
    if (!this.events[event]) return this;
    
    this.events[event] = this.events[event].filter(
      listener => listener !== listenerToRemove
    );
    return this;
  }
  
  // Emit event
  emit(event, ...args) {
    if (!this.events[event]) return false;
    
    this.events[event].forEach(listener => {
      listener.apply(this, args);
    });
    return true;
  }
  
  // Get all listeners for an event
  listeners(event) {
    return this.events[event] || [];
  }
  
  // Remove all listeners
  removeAllListeners(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }
  
  // Get listener count
  listenerCount(event) {
    return this.events[event] ? this.events[event].length : 0;
  }
}
\`\`\`

**Advanced EventEmitter with Error Handling:**
\`\`\`javascript
class AdvancedEventEmitter extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(10); // Default max listeners
    this.maxListeners = 10;
  }
  
  setMaxListeners(n) {
    this.maxListeners = n;
    return this;
  }
  
  on(event, listener) {
    if (this.listenerCount(event) >= this.maxListeners) {
      console.warn(\`Warning: Possible memory leak detected. \${this.listenerCount(event)} \${event} listeners added.\`);
    }
    return super.on(event, listener);
  }
  
  emit(event, ...args) {
    // Handle error events specially
    if (event === 'error') {
      if (this.listenerCount('error') === 0) {
        throw args[0] || new Error('Unhandled error event');
      }
    }
    return super.emit(event, ...args);
  }
  
  // Add event names method
  eventNames() {
    return Object.keys(this.events);
  }
}
\`\`\`

**Usage Example:**
\`\`\`javascript
const emitter = new AdvancedEventEmitter();

// Basic usage
emitter.on('data', (data) => {
  console.log('Received data:', data);
});

// One-time listener
emitter.once('connect', () => {
  console.log('Connected!');
});

// Error handling
emitter.on('error', (err) => {
  console.error('Error occurred:', err);
});

// Emit events
emitter.emit('data', { id: 1, value: 'test' });
emitter.emit('connect');

// Error without listener throws
try {
  emitter.emit('error', new Error('Something went wrong'));
} catch (err) {
  console.error('Caught error:', err.message);
}
\`\`\`

**Real-world Application:**
\`\`\`javascript
class Database extends AdvancedEventEmitter {
  constructor() {
    super();
    this.connected = false;
  }
  
  async connect() {
    try {
      // Simulate connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.connected = true;
      this.emit('connect');
    } catch (err) {
      this.emit('error', err);
    }
  }
  
  async query(sql) {
    if (!this.connected) {
      this.emit('error', new Error('Not connected'));
      return;
    }
    
    try {
      // Simulate query
      const result = await new Promise(resolve => 
        setTimeout(() => resolve([{ id: 1, name: 'test' }]), 100)
      );
      this.emit('query', sql, result);
      return result;
    } catch (err) {
      this.emit('error', err);
    }
  }
}

const db = new Database();
db.on('connect', () => console.log('Database connected'));
db.on('query', (sql, result) => console.log('Query result:', result));
db.on('error', (err) => console.error('Database error:', err));

db.connect().then(() => {
  db.query('SELECT * FROM users');
});
\`\`\``,
    difficulty: "hard",
    category: "Events",
    timeEstimate: "18 min"
  },
  {
    id: "hard-3",
    question: "Explain the difference between CommonJS and ES Modules and how to interop between them",
    answer: `CommonJS and ES Modules are two different module systems in Node.js with different loading mechanisms, syntax, and behaviors.

**CommonJS (CJS):**
- Dynamic loading (require can be called anywhere)
- Synchronous loading
- \`this\` refers to \`module.exports\`
- Can be conditional
- Uses \`require()\` and \`module.exports\`

**ES Modules (ESM):**
- Static loading (imports must be at top level)
- Asynchronous loading
- \`this\` is \`undefined\`
- Cannot be conditional
- Uses \`import\` and \`export\`

**Syntax Comparison:**
\`\`\`javascript
// CommonJS
const fs = require('fs');
const { readFile } = require('fs').promises;

function myFunction() {
  const path = require('path'); // Dynamic require
}

module.exports = myFunction;
module.exports.helper = helper;

// ES Modules
import fs from 'fs';
import { readFile } from 'fs/promises';
import * as path from 'path';

// Cannot import conditionally at top level
export default myFunction;
export { helper };
\`\`\`

**Key Differences:**
1. **Loading Mechanism**
\`\`\`javascript
// CJS - Synchronous
const module = require('./module');

// ESM - Asynchronous
import module from './module.js';
\`\`\`

2. **Value vs Reference**
\`\`\`javascript
// CJS - Gets a copy of the value
let counter = 0;
module.exports = { counter };

// ESM - Gets a live binding
export let counter = 0;
\`\`\`

3. **This Context**
\`\`\`javascript
// CJS
console.log(this === module.exports); // true

// ESM
console.log(this); // undefined
\`\`\`

**Interoperability:**
\`\`\`javascript
// Importing CJS in ESM
import cjsModule from './cjs-module.cjs';
import { namedExport } from './cjs-module.cjs';

// Importing ESM in CJS
const esmModule = await import('./esm-module.mjs');
const { namedExport } = await import('./esm-module.mjs');

// Dynamic import in ESM
const module = await import('./module.js');
\`\`\`

**Package.json Configuration:**
\`\`\`json
{
  "type": "module", // Treat .js files as ESM
  "exports": {
    ".": {
      "import": "./esm-module.mjs",
      "require": "./cjs-module.cjs"
    }
  }
}
\`\`\`

**Dual Package Strategy:**
\`\`\`javascript
// package.json
{
  "main": "./index.cjs",
  "module": "./index.mjs",
  "exports": {
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}

// index.cjs (CommonJS)
module.exports = {
  hello: () => console.log('Hello from CJS')
};

// index.mjs (ESM)
export function hello() {
  console.log('Hello from ESM');
}
\`\`\`

**Best Practices:**
1. Use consistent module system within project
2. Use explicit file extensions (.mjs, .cjs) for clarity
3. Avoid mixing module systems when possible
4. Use \`exports\` field for better package boundaries
5. Consider dual packages for libraries`,
    difficulty: "hard",
    category: "Modules",
    timeEstimate: "16 min"
  },
  {
    id: "hard-4",
    question: "How would you implement a connection pool for database connections?",
    answer: `A connection pool manages database connections efficiently by reusing connections instead of creating new ones for each request.

**Basic Connection Pool Implementation:**
\`\`\`javascript
class ConnectionPool {
  constructor(factory, options = {}) {
    this.factory = factory; // Function to create new connection
    this.maxSize = options.maxSize || 10;
    this.minSize = options.minSize || 2;
    this.idleTimeout = options.idleTimeout || 30000;
    this.acquireTimeout = options.acquireTimeout || 10000;
    
    this.pool = [];
    this.activeConnections = 0;
    this.waitingQueue = [];
    this.destroyed = false;
    
    // Initialize minimum connections
    this.initializePool();
  }
  
  async initializePool() {
    for (let i = 0; i < this.minSize; i++) {
      await this.createConnection();
    }
  }
  
  async createConnection() {
    if (this.destroyed) return null;
    
    try {
      const connection = await this.factory();
      const pooledConnection = {
        connection,
        createdAt: Date.now(),
        lastUsed: Date.now(),
        inUse: false
      };
      
      this.pool.push(pooledConnection);
      this.activeConnections++;
      return pooledConnection;
    } catch (error) {
      console.error('Failed to create connection:', error);
      throw error;
    }
  }
  
  async acquire() {
    if (this.destroyed) {
      throw new Error('Pool has been destroyed');
    }
    
    return new Promise((resolve, reject) => {
      // Try to get existing connection
      const availableConnection = this.pool.find(conn => !conn.inUse);
      
      if (availableConnection) {
        availableConnection.inUse = true;
        availableConnection.lastUsed = Date.now();
        resolve(availableConnection.connection);
        return;
      }
      
      // Create new connection if under max size
      if (this.activeConnections < this.maxSize) {
        this.createConnection()
          .then(pooledConnection => {
            pooledConnection.inUse = true;
            pooledConnection.lastUsed = Date.now();
            resolve(pooledConnection.connection);
          })
          .catch(reject);
        return;
      }
      
      // Add to waiting queue
      const timeout = setTimeout(() => {
        const index = this.waitingQueue.findIndex(item => item.resolve === resolve);
        if (index > -1) {
          this.waitingQueue.splice(index, 1);
        }
        reject(new Error('Acquire timeout'));
      }, this.acquireTimeout);
      
      this.waitingQueue.push({ resolve, reject, timeout });
    });
  }
  
  async release(connection) {
    const pooledConnection = this.pool.find(conn => conn.connection === connection);
    
    if (!pooledConnection) {
      console.warn('Connection not found in pool');
      return;
    }
    
    pooledConnection.inUse = false;
    pooledConnection.lastUsed = Date.now();
    
    // Check waiting queue
    if (this.waitingQueue.length > 0) {
      const { resolve, timeout } = this.waitingQueue.shift();
      clearTimeout(timeout);
      pooledConnection.inUse = true;
      resolve(connection);
    }
  }
  
  async destroy(connection) {
    const index = this.pool.findIndex(conn => conn.connection === connection);
    
    if (index === -1) return;
    
    const pooledConnection = this.pool[index];
    this.pool.splice(index, 1);
    this.activeConnections--;
    
    try {
      // Close connection (implementation specific)
      if (pooledConnection.connection.close) {
        await pooledConnection.connection.close();
      }
    } catch (error) {
      console.error('Error closing connection:', error);
    }
  }
  
  async destroyAll() {
    this.destroyed = true;
    
    // Reject all waiting requests
    this.waitingQueue.forEach(({ reject, timeout }) => {
      clearTimeout(timeout);
      reject(new Error('Pool destroyed'));
    });
    this.waitingQueue = [];
    
    // Close all connections
    const closePromises = this.pool.map(conn => this.destroy(conn.connection));
    await Promise.all(closePromises);
  }
  
  getStats() {
    return {
      totalConnections: this.activeConnections,
      activeConnections: this.pool.filter(conn => conn.inUse).length,
      idleConnections: this.pool.filter(conn => !conn.inUse).length,
      waitingRequests: this.waitingQueue.length
    };
  }
}
\`\`\`

**MySQL Connection Pool Example:**
\`\`\`javascript
const mysql = require('mysql2/promise');

class MySQLPool {
  constructor(config) {
    this.config = config;
    this.pool = new ConnectionPool(
      async () => await mysql.createConnection(this.config),
      {
        maxSize: 10,
        minSize: 2,
        idleTimeout: 30000
      }
    );
  }
  
  async query(sql, params) {
    let connection;
    try {
      connection = await this.pool.acquire();
      const [rows] = await connection.execute(sql, params);
      return rows;
    } finally {
      if (connection) {
        await this.pool.release(connection);
      }
    }
  }
  
  async transaction(callback) {
    let connection;
    try {
      connection = await this.pool.acquire();
      await connection.beginTransaction();
      
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      if (connection) {
        await connection.rollback();
      }
      throw error;
    } finally {
      if (connection) {
        await this.pool.release(connection);
      }
    }
  }
  
  async close() {
    await this.pool.destroyAll();
  }
}

// Usage
const dbPool = new MySQLPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

// Simple query
const users = await dbPool.query('SELECT * FROM users');

// Transaction
await dbPool.transaction(async (connection) => {
  await connection.execute('INSERT INTO users (name) VALUES (?)', ['John']);
  await connection.execute('UPDATE accounts SET balance = balance - 100 WHERE id = ?', [1]);
});
\`\`\`

**Advanced Features:**
1. **Health Checks**: Validate connections before reuse
2. **Connection Aging**: Remove old connections
3. **Metrics**: Track pool performance
4. **Circuit Breaker**: Fail fast when database is down`,
    difficulty: "hard",
    category: "Database",
    timeEstimate: "20 min"
  },
  {
    id: "hard-5",
    question: "Explain how Node.js handles asynchronous operations under the hood",
    answer: `Node.js's asynchronous behavior is built on libuv, a multi-platform C library that provides the event loop, asynchronous I/O, and thread pool.

**Core Components:**
1. **V8 Engine**: Executes JavaScript code
2. **libuv**: Provides event loop and async I/O
3. **Native Bindings**: Connect JavaScript to C++ libraries

**Event Loop Phases in Detail:**
\`\`\`javascript
// Visual representation of event loop phases
/*
┌───────────────────────────┐
┌─>│           timers          │ <-- setTimeout, setInterval
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ <-- I/O callbacks
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ <-- internal only
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           poll            │ <-- new I/O events
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │ <-- setImmediate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ <-- close event callbacks
   └───────────────────────────┘
*/
\`\`\`

**How Async Operations Work:**
1. **JavaScript Call**: Call async function
2. **C++ Binding**: Function passes to C++ layer
3. **libuv Request**: libuv creates request object
4. **OS Call**: Makes system call (non-blocking)
5. **Callback Queue**: OS notifies when complete
6. **Event Loop**: Executes callback when appropriate

**File System Example:**
\`\`\`javascript
const fs = require('fs');

// What happens internally:
fs.readFile('file.txt', (err, data) => {
  console.log('File read complete');
});

console.log('This runs first');

// Internal flow:
// 1. fs.readFile called (JavaScript)
// 2. Passes to C++ binding
// 3. libuv creates async request
// 4. OS starts reading file
// 5. Main thread continues
// 6. OS completes read
// 7. libuv adds callback to queue
// 8. Event loop executes callback
\`\`\`

**Thread Pool for CPU-Intensive Operations:**
\`\`\`javascript
const fs = require('fs');
const crypto = require('crypto');

// These operations use thread pool:
fs.readFile('large-file.txt', callback); // File I/O
crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', callback); // Crypto
zlib.gzip('large data', callback); // Compression

// Thread pool size (default: 4)
process.env.UV_THREADPOOL_SIZE = 8;
\`\`\`

**Network I/O (Non-threaded):**
\`\`\`javascript
const net = require('net');

// Network operations don't use thread pool
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    // Handled by OS, not thread pool
    console.log('Received:', data);
  });
});

server.listen(3000);
\`\`\`

**Microtasks vs Macrotasks:**
\`\`\`javascript
console.log('Start');

// Macrotasks (handled by event loop phases)
setTimeout(() => console.log('Timeout'), 0);
setImmediate(() => console.log('Immediate'));

// Microtasks (processed after each operation)
Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => console.log('Promise 2'));
process.nextTick(() => console.log('nextTick'));

console.log('End');

// Output: Start, End, nextTick, Promise 1, Promise 2, Timeout, Immediate
\`\`\`

**Custom Async Operation:**
\`\`\`javascript
const { AsyncResource } = require('async_hooks');

class CustomAsync extends AsyncResource {
  constructor() {
    super('CustomAsync');
  }
  
  async operation(callback) {
    // Emit async start
    this.emitBefore();
    
    // Simulate async operation
    setImmediate(() => {
      // Emit async complete
      this.emitAfter();
      callback(null, 'result');
    });
  }
}

const custom = new CustomAsync();
custom.operation((err, result) => {
  console.log('Operation complete:', result);
});
\`\`\`

**Performance Implications:**
1. **Non-blocking**: Never block the event loop
2. **Thread Pool**: Limited size, can become bottleneck
3. **Memory**: Each async request consumes memory
4. **CPU**: Event loop runs on single thread

**Best Practices:**
1. Avoid CPU-intensive operations in main thread
2. Use worker threads for heavy computation
3. Monitor event loop lag
4. Handle errors properly in callbacks`,
    difficulty: "hard",
    category: "Internals",
    timeEstimate: "22 min"
  },
  {
    id: "hard-6",
    question: "Explain the difference between fork() and spawn() in Node.js child processes",
    answer: `Both \`fork()\` and \`spawn()\` are methods from the \`child_process\` module, but they have different use cases and characteristics.

**spawn():**
\`\`\`javascript
const { spawn } = require('child_process');

const child = spawn('node', ['script.js'], {
  stdio: 'inherit',
  env: { ...process.env, CUSTOM_VAR: 'value' }
});

child.on('exit', (code) => {
  console.log(\`Child process exited with code \${code}\`);
});

// Communication via stdio streams
child.stdout.on('data', (data) => {
  console.log(\`stdout: \${data}\`);
});
\`\`\`

**fork():**
\`\`\`javascript
const { fork } = require('child_process');

const child = fork('script.js', ['arg1', 'arg2'], {
  env: { ...process.env, CUSTOM_VAR: 'value' }
});

// Communication via IPC channel
child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

child.send({ hello: 'parent' });

child.on('exit', (code) => {
  console.log(\`Child process exited with code \${code}\`);
});
\`\`\`

**Key Differences:**

1. **Communication:**
   - **spawn**: Uses stdio streams (stdin, stdout, stderr)
   - **fork**: Uses IPC channel for message passing

2. **Use Cases:**
   - **spawn**: Running external commands, scripts in other languages
   - **fork**: Creating Node.js worker processes, CPU-intensive tasks

3. **Performance:**
   - **spawn**: Faster startup, less memory overhead
   - **fork**: Slower startup, establishes IPC channel

4. **Module Loading:**
   - **spawn**: Doesn't load Node.js modules
   - **fork**: Loads the script as a Node.js module

**When to Use:**
- **spawn**: External commands, shell scripts, non-Node.js processes
- **fork**: Parallel processing, worker threads, CPU-bound tasks`,
    difficulty: "hard",
    category: "Child Processes",
    timeEstimate: "15 min"
  },
  {
    id: "hard-7",
    question: "How does Node.js handle module loading and caching?",
    answer: `Node.js uses a sophisticated module system with caching mechanisms to optimize performance.

**Module Loading Process:**

1. **Resolution**: Find the module file
2. **Loading**: Read the file contents
3. **Wrapping**: Wrap code in function scope
4. **Execution**: Execute the module code
5. **Caching**: Cache the exports object

**Module Wrapper:**
\`\`\`javascript
// Node.js wraps each module in this function
(function(exports, require, module, __filename, __dirname) {
  // Your module code goes here
  
  // Example:
  const fs = require('fs');
  module.exports = { readFile: fs.readFile };
});
\`\`\`

**Caching Mechanism:**
\`\`\`javascript
// First require - loads and caches
const module1 = require('./my-module');

// Subsequent requires - returns cached version
const module2 = require('./my-module');

console.log(module1 === module2); // true - same object
\`\`\`

**Cache Invalidation:**
\`\`\`javascript
// Clear specific module from cache
delete require.cache[require.resolve('./my-module')];

// Clear all modules from cache
Object.keys(require.cache).forEach(key => {
  delete require.cache[key];
});

// Reload module
const freshModule = require('./my-module');
\`\`\`

**Module Types:**
1. **Core Modules**: Built-in modules (\`fs\`, \`http\`, etc.)
2. **File Modules**: Local files (\`./module\`, \`/path/module\`)
3. **Node_modules**: Third-party packages
4. **JSON Files**: Parsed and returned as objects

**Performance Considerations:**
- **Memory Usage**: Cached modules stay in memory
- **Circular Dependencies**: Handled gracefully but can be tricky
- **Hot Reloading**: Requires cache clearing for development`,
    difficulty: "hard",
    category: "Modules",
    timeEstimate: "18 min"
  },
  {
    id: "hard-8",
    question: "What is the difference between process.nextTick() and setImmediate() in terms of event loop phases?",
    answer: `Both functions schedule callbacks to run after the current operation, but they execute in different phases of the event loop.

**Event Loop Phases:**
1. **Timers**: \`setTimeout\`, \`setInterval\`
2. **Pending Callbacks**: I/O callbacks
3. **Idle, Prepare**: Internal use
4. **Poll**: New I/O events
5. **Check**: \`setImmediate\` callbacks
6. **Close Callbacks**: \`close\` event callbacks

**process.nextTick():**
\`\`\`javascript
console.log('Start');

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('End');

// Output:
// Start
// End
// nextTick callback
\`\`\`

- Executes **before** the next event loop cycle
- Runs **after** current operation completes
- **Higher priority** than \`setImmediate\`
- Can starve I/O if overused

**setImmediate():**
\`\`\`javascript
console.log('Start');

setImmediate(() => {
  console.log('setImmediate callback');
});

console.log('End');

// Output:
// Start
// End
// setImmediate callback
\`\`\`

- Executes **in the Check phase** of event loop
- Runs **after** I/O events are processed
- **Lower priority** than \`process.nextTick\`
- Better for CPU-intensive tasks

**Execution Order Example:**
\`\`\`javascript
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));

Promise.resolve().then(() => console.log('Promise'));

// Output (consistent):
// Promise
// nextTick
// setTimeout
// setImmediate
\`\`\`

**When to Use:**
- **process.nextTick()**: Critical tasks, error handling, cleanup
- **setImmediate()**: Non-critical tasks, CPU work, breaking up long operations`,
    difficulty: "hard",
    category: "Event Loop",
    timeEstimate: "16 min"
  },
  {
    id: "hard-9",
    question: "How do you implement a custom EventEmitter in Node.js?",
    answer: `Node.js EventEmitter is a core pattern for handling asynchronous events. Here's how to implement a custom one:

**Basic EventEmitter Implementation:**
\`\`\`javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Add event listener
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this; // For chaining
  }

  // Add one-time event listener
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
    return this;
  }

  // Remove event listener
  off(event, listenerToRemove) {
    if (!this.events[event]) return this;
    
    this.events[event] = this.events[event].filter(
      listener => listener !== listenerToRemove
    );
    return this;
  }

  // Emit event
  emit(event, ...args) {
    if (!this.events[event]) return false;
    
    this.events[event].forEach(listener => {
      listener(...args);
    });
    
    return true;
  }

  // Get all listeners for an event
  listeners(event) {
    return this.events[event] || [];
  }

  // Remove all listeners
  removeAllListeners(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }
}
\`\`\`

**Usage Example:**
\`\`\`javascript
class MyStream extends EventEmitter {
  constructor() {
    super();
    this.data = [];
  }

  write(chunk) {
    this.data.push(chunk);
    this.emit('data', chunk);
  }

  end() {
    this.emit('end');
  }

  error(err) {
    this.emit('error', err);
  }
}

// Using the custom stream
const stream = new MyStream();

stream.on('data', (chunk) => {
  console.log('Received:', chunk);
});

stream.on('end', () => {
  console.log('Stream ended');
});

stream.on('error', (err) => {
  console.error('Error:', err);
});

stream.write('Hello');
stream.write('World');
stream.end();
\`\`\`

**Advanced Features:**
\`\`\`javascript
// Add max listeners
class AdvancedEventEmitter extends EventEmitter {
  constructor(maxListeners = 10) {
    super();
    this.maxListeners = maxListeners;
    this.listenerCounts = {};
  }

  on(event, listener) {
    super.on(event, listener);
    
    // Track listener counts
    this.listenerCounts[event] = (this.listenerCounts[event] || 0) + 1;
    
    // Warning for too many listeners
    if (this.listenerCounts[event] > this.maxListeners) {
      console.warn(\`Warning: Possible memory leak detected. \${this.listenerCounts[event]} listeners added for event '\${event}'\`);
    }
    
    return this;
  }

  off(event, listenerToRemove) {
    super.off(event, listenerToRemove);
    
    if (this.events[event]) {
      this.listenerCounts[event] = this.events[event].length;
    }
    
    return this;
  }
}
\`\`\``,
    difficulty: "hard",
    category: "Events",
    timeEstimate: "20 min"
  },
  {
    id: "hard-10",
    question: "Explain how Node.js handles TCP connections and socket management",
    answer: `Node.js provides powerful networking capabilities through the \`net\` module for TCP connections.

**TCP Server Example:**
\`\`\`javascript
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  
  // Handle incoming data
  socket.on('data', (data) => {
    console.log('Received:', data.toString());
    socket.write('Echo: ' + data);
  });
  
  // Handle connection end
  socket.on('end', () => {
    console.log('Client disconnected');
  });
  
  // Handle errors
  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
  
  // Send welcome message
  socket.write('Welcome to the server!\\n');
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Start listening
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
\`\`\`

**Socket Management:**
\`\`\`javascript
const net = require('net');

class ConnectionManager {
  constructor() {
    this.connections = new Set();
    this.maxConnections = 100;
  }
  
  addConnection(socket) {
    if (this.connections.size >= this.maxConnections) {
      socket.end('Server busy. Try again later.\\n');
      return false;
    }
    
    this.connections.add(socket);
    
    // Set up connection tracking
    socket.on('close', () => {
      this.connections.delete(socket);
    });
    
    socket.on('error', () => {
      this.connections.delete(socket);
    });
    
    // Set timeout
    socket.setTimeout(30000, () => {
      socket.end('Connection timeout\\n');
    });
    
    return true;
  }
  
  broadcast(message, excludeSocket = null) {
    this.connections.forEach(socket => {
      if (socket !== excludeSocket && !socket.destroyed) {
        socket.write(message);
      }
    });
  }
  
  getStats() {
    return {
      activeConnections: this.connections.size,
      maxConnections: this.maxConnections
    };
  }
}

// Usage with server
const connectionManager = new ConnectionManager();

const server = net.createServer((socket) => {
  if (!connectionManager.addConnection(socket)) {
    return;
  }
  
  socket.on('data', (data) => {
    // Broadcast to all other clients
    connectionManager.broadcast(
      \`Client: \${data.toString()}\`,
      socket
    );
  });
});
\`\`\`

**Advanced Socket Configuration:**
\`\`\`javascript
// Socket options
const socket = net.connect({
  host: 'localhost',
  port: 3000,
  timeout: 5000,
  keepAlive: true,
  noDelay: true
});

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('timeout', () => {
  console.log('Connection timeout');
  socket.destroy();
});

// Buffer management
socket.on('data', (data) => {
  // Handle partial data
  if (!socket.buffer) socket.buffer = '';
  socket.buffer += data.toString();
  
  // Process complete messages
  while (socket.buffer.includes('\\n')) {
    const message = socket.buffer.split('\\n')[0];
    socket.buffer = socket.buffer.slice(message.length + 1);
    
    // Process message
    handleMessage(message);
  }
});
\`\`\`

**Performance Considerations:**
- **Connection Pooling**: Reuse connections when possible
- **Backpressure**: Handle when write buffer is full
- **Memory Management**: Clean up closed connections
- **Error Handling**: Robust error recovery mechanisms`,
    difficulty: "hard",
    category: "Networking",
    timeEstimate: "22 min"
  },
  {
    id: "hard-11",
    question: "How do you containerize Node.js applications with Docker?",
    answer: `Docker allows you to package Node.js applications with their dependencies into containers for consistent deployment.

**Basic Dockerfile for Node.js:**
\`\`\`dockerfile
# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Run the application
CMD ["node", "app.js"]
\`\`\`

**Multi-stage Dockerfile:**
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built application
COPY --from=builder /app/dist ./dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

EXPOSE 3000
CMD ["node", "dist/index.js"]
\`\`\`

**Docker Compose for Development:**
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=mongodb://mongo:27017/myapp
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - mongo
      - redis
    restart: unless-stopped

  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

volumes:
  mongo_data:
  redis_data:
\`\`\`

**Health Check Script:**
\`\`\`javascript
// healthcheck.js
const http = require('http');

const options = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  path: '/health',
  timeout: 2000
};

const request = http.request(options, (res) => {
  console.log(\`Health check status: \${res.statusCode}\`);
  if (res.statusCode === 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on('error', (err) => {
  console.error('Health check failed:', err);
  process.exit(1);
});

request.end();
\`\`\`

**Docker Commands:**
\`\`\`bash
# Build image
docker build -t my-node-app .

# Run container
docker run -p 3000:3000 my-node-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production my-node-app

# Run in background
docker run -d -p 3000:3000 --name my-app my-node-app

# View logs
docker logs my-app

# Stop container
docker stop my-app

# Use Docker Compose
docker-compose up -d
docker-compose logs -f
docker-compose down
\`\`\`

**Best Practices:**
- Use specific Node.js version tags
- Create non-root users for security
- Use multi-stage builds for smaller images
- Implement health checks
- Use .dockerignore to exclude unnecessary files
- Optimize layer caching with COPY order`,
    difficulty: "hard",
    category: "Docker",
    timeEstimate: "20 min"
  },
  {
    id: "hard-12",
    question: "How do you implement microservices architecture in Node.js?",
    answer: `Microservices architecture breaks down applications into small, independent services that communicate over a network.

**API Gateway Pattern:**
\`\`\`javascript
// api-gateway.js
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Service configurations
const services = {
  users: 'http://localhost:3001',
  products: 'http://localhost:3002',
  orders: 'http://localhost:3003'
};

// Create proxies for each service
Object.keys(services).forEach(service => {
  app.use(\`/api/\${service}\`, httpProxy.createProxyMiddleware({
    target: services[service],
    changeOrigin: true,
    pathRewrite: {
      [\`^/api/\${service}\`]: ''
    }
  }));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'API Gateway is healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`API Gateway running on port \${PORT}\`);
});
\`\`\`

**User Service:**
\`\`\`javascript
// user-service.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(\`User Service running on port \${PORT}\`);
});
\`\`\`

**Service Communication with HTTP:**
\`\`\`javascript
// order-service.js
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:3001';

// Create order with user validation
app.post('/orders', async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    
    // Validate user exists
    const userResponse = await axios.get(\`\${USER_SERVICE_URL}/users/\${userId}\`);
    if (!userResponse.data) {
      return res.status(400).json({ error: 'Invalid user' });
    }
    
    const order = {
      id: Date.now().toString(),
      userId,
      items,
      total,
      status: 'pending',
      createdAt: new Date()
    };
    
    // Publish order created event
    await publishEvent('order.created', order);
    
    res.status(201).json(order);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(400).json({ error: 'User not found' });
    }
    res.status(500).json({ error: error.message });
  }
});

// Event publishing (simplified)
async function publishEvent(event, data) {
  // In real implementation, use message broker like RabbitMQ or Kafka
  console.log(\`Event published: \${event}\`, data);
}

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(\`Order Service running on port \${PORT}\`);
});
\`\`\`

**Service Discovery with Consul:**
\`\`\`javascript
// service-registration.js
const consul = require('consul')();

const serviceConfig = {
  name: 'user-service',
  id: 'user-service-1',
  address: 'localhost',
  port: 3001,
  check: {
    http: 'http://localhost:3001/health',
    interval: '10s',
    timeout: '5s'
  }
};

// Register service
consul.agent.service.register(serviceConfig, (err) => {
  if (err) throw err;
  console.log('Service registered with Consul');
});

// Discover other services
async function discoverService(serviceName) {
  return new Promise((resolve, reject) => {
    consul.agent.service.list((err, services) => {
      if (err) return reject(err);
      
      const service = Object.values(services).find(s => s.Service === serviceName);
      if (service) {
        resolve(\`http://\${service.Address}:\${service.Port}\`);
      } else {
        reject(new Error(\`Service \${serviceName} not found\`));
      }
    });
  });
}
\`\`\`

**Docker Compose for Microservices:**
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  api-gateway:
    build: ./api-gateway
    ports:
      - "3000:3000"
    depends_on:
      - user-service
      - product-service
      - order-service

  user-service:
    build: ./user-service
    ports:
      - "3001:3001"
    environment:
      - MONGODB_URL=mongodb://mongo:27017/users
    depends_on:
      - mongo

  product-service:
    build: ./product-service
    ports:
      - "3002:3002"
    environment:
      - POSTGRES_URL=postgresql://postgres:password@postgres:5432/products
    depends_on:
      - postgres

  order-service:
    build: ./order-service
    ports:
      - "3003:3003"
    environment:
      - USER_SERVICE_URL=http://user-service:3001
    depends_on:
      - user-service

  mongo:
    image: mongo:5.0
    volumes:
      - mongo_data:/data/db

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  mongo_data:
  postgres_data:
\`\`\``,
    difficulty: "hard",
    category: "Microservices",
    timeEstimate: "25 min"
  },
  {
    id: "hard-13",
    question: "How do you implement advanced error handling patterns in Node.js?",
    answer: `Advanced error handling in Node.js involves creating robust error management systems that provide better debugging and user experience.

**Custom Error Classes:**
\`\`\`javascript
// errors/CustomError.js
class CustomError extends Error {
  constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends CustomError {
  constructor(message, field) {
    super(message, 400, 'VALIDATION_ERROR');
    this.field = field;
  }
}

class NotFoundError extends CustomError {
  constructor(resource = 'Resource') {
    super(\`\${resource} not found\`, 404, 'NOT_FOUND');
  }
}

class UnauthorizedError extends CustomError {
  constructor(message = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
  }
}

class DatabaseError extends CustomError {
  constructor(message, originalError) {
    super(message, 500, 'DATABASE_ERROR');
    this.originalError = originalError;
  }
}

module.exports = {
  CustomError,
  ValidationError,
  NotFoundError,
  UnauthorizedError,
  DatabaseError
};
\`\`\`

**Global Error Handler Middleware:**
\`\`\`javascript
// middleware/errorHandler.js
const { CustomError } = require('../errors/CustomError');
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  logger.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new CustomError(message, 404, 'NOT_FOUND');
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new CustomError(message, 400, 'DUPLICATE_FIELD');
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new CustomError(message, 400, 'VALIDATION_ERROR');
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = new CustomError(message, 401, 'INVALID_TOKEN');
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = new CustomError(message, 401, 'TOKEN_EXPIRED');
  }

  // Default error
  if (!error.isOperational) {
    const message = 'Something went wrong';
    error = new CustomError(message, 500, 'INTERNAL_ERROR');
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      code: error.code || 'INTERNAL_ERROR',
      message: error.message || 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

module.exports = errorHandler;
\`\`\`

**Async Error Wrapper:**
\`\`\`javascript
// middleware/asyncHandler.js
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;

// Usage in routes
const asyncHandler = require('../middleware/asyncHandler');
const { NotFoundError, ValidationError } = require('../errors/CustomError');

app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    throw new NotFoundError('User');
  }
  
  res.json(user);
}));

app.post('/users', asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    throw new ValidationError('Name and email are required');
  }
  
  const user = await User.create({ name, email });
  res.status(201).json(user);
}));
\`\`\`

**Circuit Breaker Pattern:**
\`\`\`javascript
// utils/circuitBreaker.js
class CircuitBreaker {
  constructor(fn, options = {}) {
    this.fn = fn;
    this.options = {
      timeout: options.timeout || 30000,
      errorThreshold: options.errorThreshold || 5,
      resetTimeout: options.resetTimeout || 60000,
      ...options
    };
    
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.successCount = 0;
  }

  async execute(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.options.resetTimeout) {
        this.state = 'HALF_OPEN';
        this.successCount = 0;
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await Promise.race([
        this.fn(...args),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), this.options.timeout)
        )
      ]);

      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= 3) {
        this.state = 'CLOSED';
      }
    }
  }

  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.options.errorThreshold) {
      this.state = 'OPEN';
    }
  }

  getState() {
    return this.state;
  }
}

// Usage
const circuitBreaker = new CircuitBreaker(
  async (userId) => {
    return await fetchUserFromDatabase(userId);
  },
  {
    timeout: 5000,
    errorThreshold: 3,
    resetTimeout: 30000
  }
);

app.get('/users/:id', asyncHandler(async (req, res) => {
  try {
    const user = await circuitBreaker.execute(req.params.id);
    res.json(user);
  } catch (error) {
    if (error.message === 'Circuit breaker is OPEN') {
      res.status(503).json({ error: 'Service temporarily unavailable' });
    } else {
      throw error;
    }
  }
}));
\`\`\`

**Retry Mechanism:**
\`\`\`javascript
// utils/retry.js
class Retry {
  constructor(options = {}) {
    this.options = {
      retries: options.retries || 3,
      delay: options.delay || 1000,
      factor: options.factor || 2,
      maxDelay: options.maxDelay || 30000,
      ...options
    };
  }

  async execute(fn, ...args) {
    let lastError;
    
    for (let i = 0; i <= this.options.retries; i++) {
      try {
        return await fn(...args);
      } catch (error) {
        lastError = error;
        
        if (i === this.options.retries) {
          throw error;
        }
        
        const delay = Math.min(
          this.options.delay * Math.pow(this.options.factor, i),
          this.options.maxDelay
        );
        
        console.log(\`Retry \${i + 1}/\${this.options.retries} after \${delay}ms\`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    throw lastError;
  }
}

// Usage
const retry = new Retry({ retries: 3, delay: 1000 });

app.get('/external-data', asyncHandler(async (req, res) => {
  const data = await retry.execute(fetchExternalData);
  res.json(data);
}));
\`\`\``,
    difficulty: "hard",
    category: "Error Handling",
    timeEstimate: "24 min"
  }
];

// Implementation Questions
const implementationQuestions: Question[] = [
  {
    id: "impl-1",
    question: "Implement a simple HTTP server in Node.js that serves static files",
    answer: `Let's implement a simple HTTP server that can serve static files from a directory.

**Basic HTTP Server:**
\`\`\`javascript
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // Security: prevent directory traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);
  
  // Get file extension
  const ext = path.parse(filePath).ext;
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    
    // Read and serve file
    const readStream = fs.createReadStream(filePath);
    
    readStream.on('open', () => {
      res.writeHead(200, { 'Content-Type': contentType });
      readStream.pipe(res);
    });
    
    readStream.on('error', (err) => {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 Internal Server Error</h1>');
    });
  });
});

server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});
\`\`\`

**Enhanced Version with Caching and Compression:**
\`\`\`javascript
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');
const crypto = require('crypto');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Cache for static files
const fileCache = new Map();

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

function serveFile(req, res, filePath, contentType) {
  // Check cache
  const cacheKey = filePath;
  const cached = fileCache.get(cacheKey);
  
  // Check if client has cached version
  const ifNoneMatch = req.headers['if-none-match'];
  
  if (cached && ifNoneMatch === cached.etag) {
    res.writeHead(304); // Not Modified
    res.end();
    return;
  }
  
  // Read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }
    
    // Generate ETag
    const etag = crypto.createHash('md5').update(data).digest('hex');
    
    // Check if gzip compression is supported
    const acceptEncoding = req.headers['accept-encoding'] || '';
    const supportsGzip = acceptEncoding.includes('gzip');
    
    let responseData = data;
    let contentEncoding = '';
    
    if (supportsGzip && shouldCompress(contentType)) {
      zlib.gzip(data, (err, compressed) => {
        if (!err && compressed.length < data.length) {
          responseData = compressed;
          contentEncoding = 'gzip';
        }
        
        sendResponse();
      });
    } else {
      sendResponse();
    }
    
    function sendResponse() {
      const headers = {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
        'ETag': etag
      };
      
      if (contentEncoding) {
        headers['Content-Encoding'] = contentEncoding;
      }
      
      res.writeHead(200, headers);
      res.end(responseData);
      
      // Cache the response
      fileCache.set(cacheKey, {
        data: responseData,
        etag: etag,
        contentType: contentType,
        contentEncoding: contentEncoding
      });
    }
  });
}

function shouldCompress(contentType) {
  const compressibleTypes = [
    'text/',
    'application/javascript',
    'application/json',
    'application/xml',
    'image/svg+xml'
  ];
  
  return compressibleTypes.some(type => contentType.includes(type));
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);
  const ext = path.parse(filePath).ext;
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    
    serveFile(req, res, filePath, contentType);
  });
});

server.listen(PORT, () => {
  console.log(\`Enhanced server running at http://localhost:\${PORT}/\`);
});
\`\`\`

**Usage:**
1. Create a \`public\` directory
2. Add your static files (HTML, CSS, JS, images)
3. Run \`node server.js\`
4. Visit \`http://localhost:3000\`

**Features:**
- Serves static files with correct MIME types
- Security against directory traversal
- ETag-based caching
- Gzip compression for text files
- Proper error handling
- 304 Not Modified responses`,
    difficulty: "implementation",
    category: "HTTP Server",
    timeEstimate: "25 min"
  },
  {
    id: "impl-2",
    question: "Create a REST API with Express.js for a simple todo application",
    answer: `Let's create a complete REST API for a todo application using Express.js with CRUD operations.

**Basic Setup:**
\`\`\`javascript
// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// In-memory storage (replace with database in production)
let todos = [
  { id: 1, title: 'Learn Node.js', completed: false, createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: true, createdAt: new Date() },
  { id: 3, title: 'Write documentation', completed: false, createdAt: new Date() }
];

let nextId = 4;

// Validation middleware
function validateTodo(req, res, next) {
  const { title } = req.body;
  
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ 
      error: 'Title is required and must be a non-empty string' 
    });
  }
  
  next();
}

// Routes

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  const { completed, limit = 10, offset = 0 } = req.query;
  
  let filteredTodos = todos;
  
  // Filter by completion status
  if (completed !== undefined) {
    filteredTodos = todos.filter(todo => 
      todo.completed === (completed === 'true')
    );
  }
  
  // Pagination
  const startIndex = parseInt(offset);
  const endIndex = startIndex + parseInt(limit);
  const paginatedTodos = filteredTodos.slice(startIndex, endIndex);
  
  res.json({
    todos: paginatedTodos,
    total: filteredTodos.length,
    limit: parseInt(limit),
    offset: parseInt(offset)
  });
});

// GET /todos/:id - Get a specific todo
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  res.json(todo);
});

// POST /todos - Create a new todo
app.post('/todos', validateTodo, (req, res) => {
  const { title } = req.body;
  
  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  todos.push(newTodo);
  
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update a todo
app.put('/todos/:id', validateTodo, (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  const updatedTodo = {
    ...todos[todoIndex],
    title: title ? title.trim() : todos[todoIndex].title,
    completed: completed !== undefined ? completed : todos[todoIndex].completed,
    updatedAt: new Date()
  };
  
  todos[todoIndex] = updatedTodo;
  
  res.json(updatedTodo);
});

// PATCH /todos/:id - Partially update a todo
app.patch('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;
  
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  // Only update provided fields
  if (updates.title !== undefined) {
    if (typeof updates.title !== 'string' || updates.title.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Title must be a non-empty string' 
      });
    }
    todos[todoIndex].title = updates.title.trim();
  }
  
  if (updates.completed !== undefined) {
    todos[todoIndex].completed = Boolean(updates.completed);
  }
  
  todos[todoIndex].updatedAt = new Date();
  
  res.json(todos[todoIndex]);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  const deletedTodo = todos[todoIndex];
  todos.splice(todoIndex, 1);
  
  res.json({ message: 'Todo deleted successfully', todo: deletedTodo });
});

// DELETE /todos - Delete all todos
app.delete('/todos', (req, res) => {
  const deletedCount = todos.length;
  todos = [];
  nextId = 1;
  
  res.json({ 
    message: 'All todos deleted successfully', 
    deletedCount 
  });
});

// GET /todos/stats - Get statistics
app.get('/todos/stats', (req, res) => {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;
  
  res.json({
    total,
    completed,
    pending,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(\`Todo API server running on port \${PORT}\`);
});
\`\`\`

**Enhanced Version with Database:**
\`\`\`javascript
// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'todos.db');

class Database {
  constructor() {
    this.db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
        console.error('Error opening database:', err);
      } else {
        console.log('Connected to SQLite database');
        this.initTables();
      }
    });
  }
  
  initTables() {
    const createTableSQL = \`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    \`;
    
    this.db.run(createTableSQL, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      }
    });
  }
  
  async getAllTodos(filters = {}) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT * FROM todos';
      const params = [];
      const conditions = [];
      
      if (filters.completed !== undefined) {
        conditions.push('completed = ?');
        params.push(filters.completed);
      }
      
      if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
      }
      
      sql += ' ORDER BY created_at DESC';
      
      if (filters.limit) {
        sql += ' LIMIT ?';
        params.push(filters.limit);
      }
      
      if (filters.offset) {
        sql += ' OFFSET ?';
        params.push(filters.offset);
      }
      
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  
  async getTodoById(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM todos WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
  
  async createTodo(todo) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
      this.db.run(sql, [todo.title, todo.completed], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, ...todo });
        }
      });
    });
  }
  
  async updateTodo(id, updates) {
    return new Promise((resolve, reject) => {
      const fields = [];
      const params = [];
      
      if (updates.title !== undefined) {
        fields.push('title = ?');
        params.push(updates.title);
      }
      
      if (updates.completed !== undefined) {
        fields.push('completed = ?');
        params.push(updates.completed);
      }
      
      fields.push('updated_at = CURRENT_TIMESTAMP');
      params.push(id);
      
      const sql = \`UPDATE todos SET \${fields.join(', ')} WHERE id = ?\`;
      
      this.db.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }
  
  async deleteTodo(id) {
    return new Promise((resolve, reject) => {
      this.db.run('DELETE FROM todos WHERE id = ?', [id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }
  
  async getStats() {
    return new Promise((resolve, reject) => {
      const sql = \`
        SELECT 
          COUNT(*) as total,
          SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END) as completed,
          SUM(CASE WHEN completed = 0 THEN 1 ELSE 0 END) as pending
        FROM todos
      \`;
      
      this.db.get(sql, [], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
  
  close() {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

module.exports = new Database();
\`\`\`

**API Usage Examples:**
\`\`\`bash
# Get all todos
curl http://localhost:3000/todos

# Get completed todos
curl http://localhost:3000/todos?completed=true

# Create a new todo
curl -X POST http://localhost:3000/todos \\
  -H "Content-Type: application/json" \\
  -d '{"title": "New todo item"}'

# Update a todo
curl -X PUT http://localhost:3000/todos/1 \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Updated title", "completed": true}'

# Delete a todo
curl -X DELETE http://localhost:3000/todos/1

# Get statistics
curl http://localhost:3000/todos/stats
\`\`\``,
    difficulty: "implementation",
    category: "REST API",
    timeEstimate: "30 min"
  },
  {
    id: "impl-3",
    question: "Implement a WebSocket chat server with rooms and user management",
    answer: `Let's create a WebSocket chat server with rooms, user management, and real-time messaging.

**Basic WebSocket Server:**
\`\`\`javascript
// server.js
const WebSocket = require('ws');
const http = require('http');
const url = require('url');
const crypto = require('crypto');

// Create HTTP server for WebSocket upgrade
const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Store rooms and users
const rooms = new Map();
const users = new Map();

// User class
class User {
  constructor(id, name, socket) {
    this.id = id;
    this.name = name;
    this.socket = socket;
    this.room = null;
    this.joinedAt = new Date();
  }
  
  send(message) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }
  
  disconnect() {
    if (this.room) {
      this.room.removeUser(this);
    }
    users.delete(this.id);
  }
}

// Room class
class Room {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.users = new Set();
    this.createdAt = new Date();
    this.messageHistory = [];
  }
  
  addUser(user) {
    this.users.add(user);
    user.room = this;
    
    // Notify room about new user
    this.broadcast({
      type: 'user_joined',
      user: { id: user.id, name: user.name },
      timestamp: new Date()
    }, user);
    
    // Send room info to new user
    user.send({
      type: 'room_joined',
      room: {
        id: this.id,
        name: this.name,
        users: Array.from(this.users).map(u => ({ id: u.id, name: u.name }))
      },
      messageHistory: this.messageHistory
    });
  }
  
  removeUser(user) {
    this.users.delete(user);
    user.room = null;
    
    // Notify room about user leaving
    this.broadcast({
      type: 'user_left',
      user: { id: user.id, name: user.name },
      timestamp: new Date()
    });
    
    // Delete room if empty
    if (this.users.size === 0) {
      rooms.delete(this.id);
    }
  }
  
  broadcast(message, excludeUser = null) {
    this.users.forEach(user => {
      if (user !== excludeUser) {
        user.send(message);
      }
    });
  }
  
  addMessage(user, content) {
    const message = {
      id: crypto.randomUUID(),
      type: 'message',
      user: { id: user.id, name: user.name },
      content: content,
      timestamp: new Date()
    };
    
    this.messageHistory.push(message);
    
    // Keep only last 100 messages
    if (this.messageHistory.length > 100) {
      this.messageHistory.shift();
    }
    
    this.broadcast(message);
    return message;
  }
}

// Generate unique user ID
function generateUserId() {
  return crypto.randomBytes(8).toString('hex');
}

// Generate unique room ID
function generateRoomId() {
  return crypto.randomBytes(4).toString('hex');
}

// Handle WebSocket connection
wss.on('connection', (ws, request) => {
  const userId = generateUserId();
  const user = new User(userId, \`User-\${userId.substring(0, 4)}\`, ws);
  users.set(userId, user);
  
  console.log(\`User connected: \${user.id}\`);
  
  // Send welcome message
  user.send({
    type: 'connected',
    user: { id: user.id, name: user.name },
    rooms: Array.from(rooms.values()).map(r => ({
      id: r.id,
      name: r.name,
      userCount: r.users.size
    }))
  });
  
  // Handle messages from client
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      handleMessage(user, message);
    } catch (error) {
      console.error('Invalid message format:', error);
      user.send({
        type: 'error',
        message: 'Invalid message format'
      });
    }
  });
  
  // Handle disconnection
  ws.on('close', () => {
    console.log(\`User disconnected: \${user.id}\`);
    user.disconnect();
  });
  
  // Handle errors
  ws.on('error', (error) => {
    console.error(\`WebSocket error for user \${user.id}:\`, error);
    user.disconnect();
  });
});

// Handle incoming messages
function handleMessage(user, message) {
  switch (message.type) {
    case 'set_name':
      if (message.name && typeof message.name === 'string') {
        const oldName = user.name;
        user.name = message.name.trim();
        
        if (user.room) {
          user.room.broadcast({
            type: 'user_renamed',
            user: { id: user.id, name: user.name },
            oldName: oldName,
            timestamp: new Date()
          });
        }
        
        user.send({
          type: 'name_set',
          name: user.name
        });
      }
      break;
      
    case 'create_room':
      if (message.name && typeof message.name === 'string') {
        const roomId = generateRoomId();
        const room = new Room(roomId, message.name.trim());
        rooms.set(roomId, room);
        
        user.send({
          type: 'room_created',
          room: { id: room.id, name: room.name }
        });
      }
      break;
      
    case 'join_room':
      const room = rooms.get(message.roomId);
      if (room) {
        // Leave current room if any
        if (user.room) {
          user.room.removeUser(user);
        }
        
        // Join new room
        room.addUser(user);
      } else {
        user.send({
          type: 'error',
          message: 'Room not found'
        });
      }
      break;
      
    case 'leave_room':
      if (user.room) {
        user.room.removeUser(user);
      }
      break;
      
    case 'send_message':
      if (user.room && message.content && typeof message.content === 'string') {
        const content = message.content.trim();
        if (content.length > 0 && content.length <= 1000) {
          user.room.addMessage(user, content);
        } else {
          user.send({
            type: 'error',
            message: 'Message must be 1-1000 characters'
          });
        }
      }
      break;
      
    case 'get_rooms':
      user.send({
        type: 'rooms_list',
        rooms: Array.from(rooms.values()).map(r => ({
          id: r.id,
          name: r.name,
          userCount: r.users.size
        }))
      });
      break;
      
    default:
      user.send({
        type: 'error',
        message: 'Unknown message type'
      });
  }
}

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(\`WebSocket chat server running on port \${PORT}\`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  wss.close(() => {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
});
\`\`\`

**Client-side HTML Interface:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Chat</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        .login { text-align: center; margin: 50px 0; }
        .chat-container { display: none; }
        .rooms { border: 1px solid #ccc; padding: 10px; margin-bottom: 20px; }
        .messages { height: 300px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
        .message { margin-bottom: 5px; }
        .message .user { font-weight: bold; }
        .message .time { color: #666; font-size: 0.8em; }
        .input-group { display: flex; gap: 10px; }
        .input-group input { flex: 1; padding: 5px; }
        .input-group button { padding: 5px 15px; }
        .room-list { margin-bottom: 20px; }
        .room-item { padding: 5px; border: 1px solid #eee; margin-bottom: 5px; cursor: pointer; }
        .room-item:hover { background: #f5f5f5; }
        .room-item.active { background: #e3f2fd; }
    </style>
</head>
<body>
    <div class="container">
        <div id="login" class="login">
            <h2>Join Chat</h2>
            <input type="text" id="username" placeholder="Enter your name" maxlength="20">
            <button onclick="connect()">Connect</button>
        </div>
        
        <div id="chat" class="chat-container">
            <div class="room-list">
                <h3>Rooms</h3>
                <div id="rooms"></div>
                <input type="text" id="newRoomName" placeholder="New room name">
                <button onclick="createRoom()">Create Room</button>
            </div>
            
            <div class="messages" id="messages"></div>
            
            <div class="input-group">
                <input type="text" id="messageInput" placeholder="Type a message..." onkeypress="if(event.key==='Enter') sendMessage()">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    </div>

    <script>
        let ws;
        let currentUser;
        let currentRoom;

        function connect() {
            const username = document.getElementById('username').value.trim();
            if (!username) return;

            ws = new WebSocket('ws://localhost:8080');
            
            ws.onopen = () => {
                document.getElementById('login').style.display = 'none';
                document.getElementById('chat').style.display = 'block';
                ws.send(JSON.stringify({
                    type: 'set_name',
                    name: username
                }));
            };
            
            ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                handleMessage(message);
            };
            
            ws.onclose = () => {
                alert('Disconnected from server');
                document.getElementById('login').style.display = 'block';
                document.getElementById('chat').style.display = 'none';
            };
        }

        function handleMessage(message) {
            switch (message.type) {
                case 'connected':
                    currentUser = message.user;
                    updateRooms(message.rooms);
                    break;
                    
                case 'rooms_list':
                    updateRooms(message.rooms);
                    break;
                    
                case 'room_created':
                    addRoomToList(message.room);
                    break;
                    
                case 'room_joined':
                    currentRoom = message.room;
                    document.getElementById('messages').innerHTML = '';
                    message.messageHistory.forEach(msg => addMessage(msg));
                    updateRooms();
                    break;
                    
                case 'message':
                    addMessage(message);
                    break;
                    
                case 'user_joined':
                    addSystemMessage(\`\${message.user.name} joined the room\`);
                    updateRooms();
                    break;
                    
                case 'user_left':
                    addSystemMessage(\`\${message.user.name} left the room\`);
                    updateRooms();
                    break;
            }
        }

        function updateRooms(rooms) {
            const roomsDiv = document.getElementById('rooms');
            if (rooms) {
                roomsDiv.innerHTML = rooms.map(room => 
                    \`<div class="room-item \${currentRoom && currentRoom.id === room.id ? 'active' : ''}" 
                         onclick="joinRoom('\${room.id}')">
                        \${room.name} (\${room.userCount})
                    </div>\`
                ).join('');
            }
        }

        function addRoomToList(room) {
            const roomsDiv = document.getElementById('rooms');
            const roomDiv = document.createElement('div');
            roomDiv.className = 'room-item';
            roomDiv.textContent = \`\${room.name} (0)\`;
            roomDiv.onclick = () => joinRoom(room.id);
            roomsDiv.appendChild(roomDiv);
        }

        function joinRoom(roomId) {
            ws.send(JSON.stringify({
                type: 'join_room',
                roomId: roomId
            }));
        }

        function createRoom() {
            const name = document.getElementById('newRoomName').value.trim();
            if (name) {
                ws.send(JSON.stringify({
                    type: 'create_room',
                    name: name
                }));
                document.getElementById('newRoomName').value = '';
            }
        }

        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            
            if (message && currentRoom) {
                ws.send(JSON.stringify({
                    type: 'send_message',
                    content: message
                }));
                input.value = '';
            }
        }

        function addMessage(message) {
            const messagesDiv = document.getElementById('messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.innerHTML = \`
                <span class="user">\${message.user.name}:</span>
                \${message.content}
                <span class="time">\${new Date(message.timestamp).toLocaleTimeString()}</span>
            \`;
            messagesDiv.appendChild(messageDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        function addSystemMessage(text) {
            const messagesDiv = document.getElementById('messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.style.color = '#666';
            messageDiv.style.fontStyle = 'italic';
            messageDiv.textContent = text;
            messagesDiv.appendChild(messageDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    </script>
</body>
</html>
\`\`\`

**Installation and Usage:**
\`\`\`bash
# Install dependencies
npm install ws

# Run server
node server.js

# Open browser and navigate to the HTML file
# Or serve it with a simple HTTP server
python -m http.server 8000
\`\`\`

**Features:**
- Real-time messaging with WebSockets
- Multiple chat rooms
- User management with custom names
- Message history (last 100 messages)
- User join/leave notifications
- Room creation and management
- Input validation and error handling
- Graceful disconnection handling`,
    difficulty: "implementation",
    category: "WebSocket",
    timeEstimate: "35 min"
  },
  {
    id: "impl-6",
    question: "How to create a basic HTTP server in Node.js from scratch?",
    answer: `Let's create a basic HTTP server in Node.js without using any frameworks.

**Simple HTTP Server:**
\`\`\`javascript
const http = require('http');

const PORT = 3000;
const HOST = 'localhost';

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });

  // Handle different routes
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET') {
    res.end('Welcome to my Node.js Server!');
  } else if (url === '/about' && method === 'GET') {
    res.end('This is the About page');
  } else if (url === '/api/status' && method === 'GET') {
    res.end(JSON.stringify({
      status: 'Server is running',
      timestamp: new Date().toISOString()
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start listening
server.listen(PORT, HOST, () => {
  console.log(\`Server running at http://\${HOST}:\${PORT}/\`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(\`Port \${PORT} is already in use\`);
  } else {
    console.error('Server error:', err);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});
\`\`\`

**Server with Request Body Handling:**
\`\`\`javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // GET requests
  if (method === 'GET') {
    if (path === '/api/users') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify([
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' }
      ]));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  }

  // POST requests with body parsing
  if (method === 'POST' && path === '/api/users') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const userData = JSON.parse(body);
        
        // Validate required fields
        if (!userData.name || !userData.email) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Name and email are required' }));
          return;
        }

        // Create new user
        const newUser = {
          id: Date.now(),
          name: userData.name,
          email: userData.email,
          createdAt: new Date().toISOString()
        };

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
\`\`\`

**Usage:**
\`\`\`bash
# Run the server
node server.js

# Test with curl
curl http://localhost:3000/
curl http://localhost:3000/api/users
curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Alice", "email": "alice@example.com"}'
\`\`\``,
    difficulty: "implementation",
    category: "HTTP Server",
    timeEstimate: "15 min"
  },
  {
    id: "impl-7",
    question: "How to connect to MongoDB database in Node.js?",
    answer: `Let's implement MongoDB database connection in Node.js using the native MongoDB driver.

**Basic MongoDB Connection:**
\`\`\`javascript
// Install MongoDB driver
// npm install mongodb

const { MongoClient } = require('mongodb');

// Connection configuration
const config = {
  url: 'mongodb://localhost:27017',
  dbName: 'myapp',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  }
};

class Database {
  constructor() {
    this.client = null;
    this.db = null;
  }

  // Connect to MongoDB
  async connect() {
    try {
      this.client = new MongoClient(config.url, config.options);
      await this.client.connect();
      this.db = this.client.db(config.dbName);
      console.log('Connected to MongoDB successfully');
      return this.db;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }

  // Disconnect from MongoDB
  async disconnect() {
    if (this.client) {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    }
  }

  // Get database instance
  getDatabase() {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }

  // Insert document
  async insertOne(collectionName, document) {
    const collection = this.db.collection(collectionName);
    const result = await collection.insertOne(document);
    return result;
  }

  // Find documents
  async find(collectionName, query = {}, options = {}) {
    const collection = this.db.collection(collectionName);
    const result = await collection.find(query, options).toArray();
    return result;
  }

  // Find one document
  async findOne(collectionName, query) {
    const collection = this.db.collection(collectionName);
    const result = await collection.findOne(query);
    return result;
  }

  // Update document
  async updateOne(collectionName, filter, update) {
    const collection = this.db.collection(collectionName);
    const result = await collection.updateOne(filter, update);
    return result;
  }

  // Delete document
  async deleteOne(collectionName, filter) {
    const collection = this.db.collection(collectionName);
    const result = await collection.deleteOne(filter);
    return result;
  }
}

// Usage example
async function main() {
  const db = new Database();
  
  try {
    // Connect to database
    await db.connect();
    
    // Insert a user
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
      createdAt: new Date()
    };
    
    const insertResult = await db.insertOne('users', user);
    console.log('Inserted user:', insertResult.insertedId);
    
    // Find all users
    const users = await db.find('users');
    console.log('All users:', users);
    
    // Find specific user
    const specificUser = await db.findOne('users', { email: 'john@example.com' });
    console.log('Specific user:', specificUser);
    
    // Update user
    await db.updateOne(
      'users',
      { email: 'john@example.com' },
      { $set: { age: 31, updatedAt: new Date() } }
    );
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Disconnect
    await db.disconnect();
  }
}

main();
\`\`\`

**Express.js with MongoDB:**
\`\`\`javascript
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());

// Database connection
const dbConfig = {
  url: 'mongodb://localhost:27017',
  dbName: 'myapp'
};

let db;

async function connectToDatabase() {
  const client = new MongoClient(dbConfig.url);
  await client.connect();
  db = client.db(dbConfig.dbName);
  console.log('Connected to MongoDB');
}

// Routes
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find({}).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = {
      ...req.body,
      createdAt: new Date()
    };
    const result = await db.collection('users').insertOne(user);
    res.status(201).json({ _id: result.insertedId, ...user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await db.collection('users').findOne({ 
      _id: new ObjectId(req.params.id) 
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
async function startServer() {
  try {
    await connectToDatabase();
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
\`\`\`

**Connection with Environment Variables:**
\`\`\`javascript
require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'myapp';

const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('Connection failed:', error);
    process.exit(1);
  }
}

module.exports = { connect, client };
\`\`\``,
    difficulty: "implementation",
    category: "Database",
    timeEstimate: "20 min"
  },
  {
    id: "impl-8",
    question: "How to create REST API endpoints in Node.js using Express?",
    answer: `Let's create a complete REST API with Express.js for CRUD operations.

**Install Express:**
\`\`\`bash
npm install express
\`\`\`

**Complete REST API Implementation:**
\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// In-memory data store (in real app, use database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
];
let nextId = 3;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
});

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};

// GET all users
app.get('/api/users', (req, res) => {
  // Query parameters for filtering and pagination
  const { page = 1, limit = 10, search } = req.query;
  
  let filteredUsers = users;
  
  // Search functionality
  if (search) {
    filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  
  res.json({
    users: paginatedUsers,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: filteredUsers.length,
      pages: Math.ceil(filteredUsers.length / limit)
    }
  });
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

// POST create new user
app.post('/api/users', (req, res) => {
  const { name, email, age } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required' 
    });
  }
  
  // Check if email already exists
  if (users.some(u => u.email === email)) {
    return res.status(400).json({ 
      error: 'Email already exists' 
    });
  }
  
  const newUser = {
    id: nextId++,
    name,
    email,
    age: age || null,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user (replace entire resource)
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { name, email, age } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required' 
    });
  }
  
  // Check if email already exists (excluding current user)
  if (users.some(u => u.email === email && u.id !== id)) {
    return res.status(400).json({ 
      error: 'Email already exists' 
    });
  }
  
  // Replace entire user
  users[userIndex] = {
    id,
    name,
    email,
    age: age || null,
    updatedAt: new Date().toISOString()
  };
  
  res.json(users[userIndex]);
});

// PATCH update user (partial update)
app.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const updates = req.body;
  
  // Don't allow updating ID
  delete updates.id;
  
  // Check email uniqueness if email is being updated
  if (updates.email && users.some(u => u.email === updates.email && u.id !== id)) {
    return res.status(400).json({ 
      error: 'Email already exists' 
    });
  }
  
  // Merge updates
  users[userIndex] = {
    ...users[userIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  res.json(users[userIndex]);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  // Return 204 No Content or the deleted user
  res.status(204).send();
  // OR: res.json(deletedUser);
});

// DELETE all users (admin function)
app.delete('/api/users', (req, res) => {
  const count = users.length;
  users = [];
  nextId = 1;
  
  res.json({ 
    message: 'All users deleted', 
    deletedCount: count 
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    userCount: users.length
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
  console.log('Available endpoints:');
  console.log('  GET    /api/users          - Get all users');
  console.log('  GET    /api/users/:id      - Get user by ID');
  console.log('  POST   /api/users          - Create new user');
  console.log('  PUT    /api/users/:id      - Update user (replace)');
  console.log('  PATCH  /api/users/:id      - Update user (partial)');
  console.log('  DELETE /api/users/:id      - Delete user');
  console.log('  DELETE /api/users          - Delete all users');
  console.log('  GET    /api/health         - Health check');
});
\`\`\`

**Testing the API:**
\`\`\`bash
# Get all users
curl http://localhost:3000/api/users

# Get user by ID
curl http://localhost:3000/api/users/1

# Create new user
curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Alice", "email": "alice@example.com", "age": 28}'

# Update user (PUT)
curl -X PUT http://localhost:3000/api/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Updated", "email": "john.updated@example.com", "age": 31}'

# Update user (PATCH)
curl -X PATCH http://localhost:3000/api/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"age": 32}'

# Delete user
curl -X DELETE http://localhost:3000/api/users/1

# Health check
curl http://localhost:3000/api/health
\`\`\``,
    difficulty: "implementation",
    category: "REST API",
    timeEstimate: "25 min"
  },
  {
    id: "impl-9",
    question: "How to implement authentication middleware in Express.js?",
    answer: `Let's implement authentication middleware for Express.js applications.

**Basic Authentication Middleware:**
\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// User model (simplified)
const users = [];

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if user exists
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = {
      id: Date.now(),
      username,
      password: hashedPassword,
      createdAt: new Date()
    };
    
    users.push(user);
    
    // Generate token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Find user
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Compare passwords
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

**Authentication Middleware:**
\`\`\`javascript
// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Role-based authorization middleware
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
};

// Apply middleware to routes
app.get('/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({
    id: user.id,
    username: user.username,
    createdAt: user.createdAt
  });
});

// Admin-only route
app.get('/admin/users', authenticateToken, authorize('admin'), (req, res) => {
  const userList = users.map(u => ({
    id: u.id,
    username: u.username,
    createdAt: u.createdAt
  }));
  
  res.json(userList);
});
\`\`\`

**Advanced Authentication with Refresh Tokens:**
\`\`\`javascript
const crypto = require('crypto');

// Store refresh tokens (in production, use database)
const refreshTokens = new Map();

// Generate refresh token
function generateRefreshToken() {
  return crypto.randomBytes(64).toString('hex');
}

// Login with refresh token
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Authenticate user (same as above)
    const user = users.find(u => u.username === username);
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate access token
    const accessToken = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    // Generate refresh token
    const refreshToken = generateRefreshToken();
    refreshTokens.set(refreshToken, user.id);
    
    res.json({
      accessToken,
      refreshToken,
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Refresh access token
app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken || !refreshTokens.has(refreshToken)) {
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
  
  const userId = refreshTokens.get(refreshToken);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }
  
  // Generate new access token
  const accessToken = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  res.json({ accessToken });
});

// Logout
app.post('/logout', (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken) {
    refreshTokens.delete(refreshToken);
  }
  res.json({ message: 'Logged out successfully' });
});
\`\`\`

**Rate Limiting for Auth Routes:**
\`\`\`javascript
const rateLimit = require('express-rate-limit');

// Strict rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to auth routes
app.post('/login', authLimiter, async (req, res) => {
  // Login logic
});

app.post('/register', authLimiter, async (req, res) => {
  // Registration logic
});
\`\`\`

**Testing the Authentication:**
\`\`\`bash
# Register user
curl -X POST http://localhost:3000/register \\
  -H "Content-Type: application/json" \\
  -d '{"username": "john", "password": "SecurePass123!"}'

# Login
curl -X POST http://localhost:3000/login \\
  -H "Content-Type: application/json" \\
  -d '{"username": "john", "password": "SecurePass123!"}'

# Access protected route
curl -X GET http://localhost:3000/profile \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Access admin route (will fail without admin role)
curl -X GET http://localhost:3000/admin/users \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
\`\`\``,
    difficulty: "implementation",
    category: "Authentication",
    timeEstimate: "30 min"
  },
  {
    id: "impl-10",
    question: "How to implement file upload and download in Node.js?",
    answer: `Let's implement file upload and download functionality in Node.js using Express.js.

**Install Required Packages:**
\`\`\`bash
npm install express multer
npm install --save-dev @types/multer  # For TypeScript
\`\`\`

**Basic File Upload Setup:**
\`\`\`javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter for validation
const fileFilter = (req, file, cb) => {
  // Allowed file types
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, GIF, PDF, DOC, DOCX, and TXT files are allowed.'));
  }
};

// Upload configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: fileFilter
});

// Store file metadata (in production, use database)
const uploadedFiles = new Map();
\`\`\`

**File Upload Endpoints:**
\`\`\`javascript
// Single file upload
app.post('/upload/single', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileMetadata = {
      id: Date.now(),
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      mimetype: req.file.mimetype,
      uploadDate: new Date().toISOString()
    };

    // Store file metadata
    uploadedFiles.set(fileMetadata.id, fileMetadata);

    res.status(201).json({
      message: 'File uploaded successfully',
      file: {
        id: fileMetadata.id,
        originalName: fileMetadata.originalName,
        size: fileMetadata.size,
        mimetype: fileMetadata.mimetype,
        uploadDate: fileMetadata.uploadDate
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Multiple files upload
app.post('/upload/multiple', upload.array('files', 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedFilesData = req.files.map(file => {
      const fileMetadata = {
        id: Date.now() + Math.random(),
        originalName: file.originalname,
        filename: file.filename,
        path: file.path,
        size: file.size,
        mimetype: file.mimetype,
        uploadDate: new Date().toISOString()
      };

      uploadedFiles.set(fileMetadata.id, fileMetadata);
      return {
        id: fileMetadata.id,
        originalName: fileMetadata.originalName,
        size: fileMetadata.size,
        mimetype: fileMetadata.mimetype,
        uploadDate: fileMetadata.uploadDate
      };
    });

    res.status(201).json({
      message: \`\${req.files.length} files uploaded successfully\`,
      files: uploadedFilesData
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

**File Download Endpoints:**
\`\`\`javascript
// List all uploaded files
app.get('/files', (req, res) => {
  const fileList = Array.from(uploadedFiles.values()).map(file => ({
    id: file.id,
    originalName: file.originalName,
    size: file.size,
    mimetype: file.mimetype,
    uploadDate: file.uploadDate,
    downloadUrl: \`/files/\${file.id}/download\`
  }));

  res.json({
    message: 'Files retrieved successfully',
    files: fileList,
    count: fileList.length
  });
});

// Download file by ID
app.get('/files/:id/download', (req, res) => {
  try {
    const fileId = parseInt(req.params.id);
    const fileMetadata = uploadedFiles.get(fileId);

    if (!fileMetadata) {
      return res.status(404).json({ error: 'File not found' });
    }

    const filePath = path.join(__dirname, fileMetadata.path);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found on disk' });
    }

    // Set appropriate headers
    res.setHeader('Content-Disposition', \`attachment; filename="\${fileMetadata.originalName}"\`);
    res.setHeader('Content-Type', fileMetadata.mimetype);
    res.setHeader('Content-Length', fileMetadata.size);

    // Stream file to response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream.on('error', (error) => {
      console.error('File stream error:', error);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Error downloading file' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// View file in browser (for images, PDFs, etc.)
app.get('/files/:id/view', (req, res) => {
  try {
    const fileId = parseInt(req.params.id);
    const fileMetadata = uploadedFiles.get(fileId);

    if (!fileMetadata) {
      return res.status(404).json({ error: 'File not found' });
    }

    const filePath = path.join(__dirname, fileMetadata.path);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found on disk' });
    }

    // Set headers for inline display
    res.setHeader('Content-Type', fileMetadata.mimetype);
    res.setHeader('Content-Length', fileMetadata.size);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

**File Management Endpoints:**
\`\`\`javascript
// Get file information
app.get('/files/:id/info', (req, res) => {
  try {
    const fileId = parseInt(req.params.id);
    const fileMetadata = uploadedFiles.get(fileId);

    if (!fileMetadata) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.json({
      id: fileMetadata.id,
      originalName: fileMetadata.originalName,
      filename: fileMetadata.filename,
      size: fileMetadata.size,
      mimetype: fileMetadata.mimetype,
      uploadDate: fileMetadata.uploadDate,
      downloadUrl: \`/files/\${fileMetadata.id}/download\`,
      viewUrl: \`/files/\${fileMetadata.id}/view\`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete file
app.delete('/files/:id', (req, res) => {
  try {
    const fileId = parseInt(req.params.id);
    const fileMetadata = uploadedFiles.get(fileId);

    if (!fileMetadata) {
      return res.status(404).json({ error: 'File not found' });
    }

    const filePath = path.join(__dirname, fileMetadata.path);

    // Delete file from disk
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Remove from metadata
    uploadedFiles.delete(fileId);

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

**Error Handling Middleware:**
\`\`\`javascript
// Handle multer errors
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size too large. Maximum size is 5MB.' });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files uploaded.' });
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ error: 'Unexpected file field.' });
    }
  }
  
  if (error.message.includes('Invalid file type')) {
    return res.status(400).json({ error: error.message });
  }
  
  next(error);
});

// Start server
app.listen(PORT, () => {
  console.log(\`File server running on http://localhost:\${PORT}\`);
  console.log('Available endpoints:');
  console.log('  POST   /upload/single     - Upload single file');
  console.log('  POST   /upload/multiple   - Upload multiple files');
  console.log('  GET    /files             - List all files');
  console.log('  GET    /files/:id/info    - Get file information');
  console.log('  GET    /files/:id/download - Download file');
  console.log('  GET    /files/:id/view     - View file in browser');
  console.log('  DELETE /files/:id         - Delete file');
});
\`\`\`

**Testing File Operations:**
\`\`\`bash
# Upload single file
curl -X POST http://localhost:3000/upload/single \\
  -F "file=@/path/to/your/file.jpg"

# Upload multiple files
curl -X POST http://localhost:3000/upload/multiple \\
  -F "files=@/path/to/file1.jpg" \\
  -F "files=@/path/to/file2.pdf"

# List all files
curl http://localhost:3000/files

# Download file
curl -X GET http://localhost:3000/files/1/download -o downloaded_file.jpg

# Get file info
curl http://localhost:3000/files/1/info

# Delete file
curl -X DELETE http://localhost:3000/files/1
\`\`\``,
    difficulty: "implementation",
    category: "File Handling",
    timeEstimate: "35 min"
  }
];

// Group questions by difficulty
const categories = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
  implementation: implementationQuestions
};

// QnA Component
const QnA: React.FC<{ questions: Question[]; isImplementation?: boolean }> = ({ questions, isImplementation = false }) => {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={q.id} className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
          {isImplementation ? (
            // For implementation questions - use accordion style
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={q.id} className="border-0">
                <AccordionTrigger className="hover:no-underline px-4 py-3">
                  <div className="flex items-center gap-3 w-full text-left">
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
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Answer</span>
                    </div>
                    <div 
                      className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: String(marked.parse(q.answer)) }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            // For regular questions - with accordion
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
                      {/* Animation Tag - Show for Event Loop related questions */}
                      {q.question.toLowerCase().includes('event loop') && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 flex-shrink-0">
                          Animation
                        </Badge>
                      )}
                    </div>
                    {/* Animation Button - Show for Event Loop related questions */}
                    {q.question.toLowerCase().includes('event loop') && (
                      <AnimationButton 
                        concept="event-loop"
                      />
                    )}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        const searchQuery = encodeURIComponent(`${q.question} Node.js`);
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
                    <div className="mb-3">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Answer</span>
                    </div>
                    <div 
                      className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: String(marked.parse(q.answer)) }}
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
};

// Main Component
export default function NodeJSInterviewQuestions({ showBackButton = true }: { showBackButton?: boolean }) {
  // Get user authentication data
  const { user, userProfile, signOut } = useSupabaseAuth();
  
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'nodejs-interview-questions',
    title: 'Interview Questions',
    explanation: 'Comprehensive Node.js interview questions and answers'
  };

  const currentLanguage: Language = {
    slug: 'nodejs',
    name: 'Node.js',
    description: 'Node.js runtime environment',
    topics: nodejs?.topics || fallbackTopics
  };

  const difficultyStats = {
    easy: { count: categories.easy.length, icon: BookOpen, color: 'green', time: '5-10 min' },
    medium: { count: categories.medium.length, icon: Target, color: 'yellow', time: '10-15 min' },
    hard: { count: categories.hard.length, icon: TrendingUp, color: 'red', time: '15-20 min' },
    implementation: { count: categories.implementation.length, icon: Code2, color: 'purple', time: '20-30 min' }
  };

  return (
    <div className="w-screen">
      {/* Coder Pod Header */}
      <InnovativeHeader
        currentPage="ai-interview"
        user={user}
        onLogout={signOut}
      />
      
      <div className="px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      
        {/* Interview Header */}
        <InterviewHeader showBackButton={showBackButton} currentLanguage="Node.js" />
        
      {/* Questions Tabs */}
      <div className="space-y-6">
        <Tabs defaultValue="easy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-4 sm:grid-cols-2 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger 
              value="easy" 
              className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/60 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200 data-[state=active]:shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150 cursor-pointer border border-transparent"
            >
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200">Easy</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300 hidden sm:block">{difficultyStats.easy.count} questions • {difficultyStats.easy.time}</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300 sm:hidden">{difficultyStats.easy.count} • {difficultyStats.easy.time.replace(' min', 'm')}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="medium" 
              className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-yellow-100 dark:data-[state=active]:bg-yellow-900/60 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200 data-[state=active]:shadow-sm hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-150 cursor-pointer border border-transparent"
            >
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 dark:text-yellow-400 data-[state=active]:text-yellow-700 dark:data-[state=active]:text-yellow-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200">Medium</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300 hidden sm:block">{difficultyStats.medium.count} questions • {difficultyStats.medium.time}</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300 sm:hidden">{difficultyStats.medium.count} • {difficultyStats.medium.time.replace(' min', 'm')}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="hard" 
              className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-red-100 dark:data-[state=active]:bg-red-900/60 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200 data-[state=active]:shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 cursor-pointer border border-transparent"
            >
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 dark:text-red-400 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200">Hard</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300 hidden sm:block">{difficultyStats.hard.count} questions • {difficultyStats.hard.time}</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300 sm:hidden">{difficultyStats.hard.count} • {difficultyStats.hard.time.replace(' min', 'm')}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="implementation" 
              className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/60 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200 data-[state=active]:shadow-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-150 cursor-pointer border border-transparent"
            >
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200">Implementation</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-300 hidden sm:block">{implementationQuestions.length} questions • Hands-on</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-300 sm:hidden">{implementationQuestions.length} • Code</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="easy" className="space-y-3 sm:space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200 text-lg sm:text-xl">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300 text-sm sm:text-base">
                  Basic concepts and fundamentals • {difficultyStats.easy.count} questions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={categories.easy} isImplementation={false} />
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
                  Intermediate topics and patterns • {difficultyStats.medium.count} questions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={categories.medium} isImplementation={false} />
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
                  Advanced concepts and internals • {difficultyStats.hard.count} questions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={categories.hard} isImplementation={false} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-3 sm:space-y-4">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200 text-lg sm:text-xl">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Implementation Level
                </CardTitle>
                <CardDescription className="text-purple-700 dark:text-purple-300 text-sm sm:text-base">
                  Hands-on coding challenges • {implementationQuestions.length} questions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={implementationQuestions} isImplementation={true} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Additional Resources */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
            <FileCode className="w-5 h-5" />
            Additional Topics to Explore
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Database className="w-4 h-4" />, title: "Database Integration", desc: "MongoDB, PostgreSQL, Redis" },
              { icon: <Shield className="w-4 h-4" />, title: "Security", desc: "Authentication, JWT, OAuth" },
              { icon: <Globe className="w-4 h-4" />, title: "API Development", desc: "REST, GraphQL, gRPC" },
              { icon: <Layers className="w-4 h-4" />, title: "Microservices", desc: "Docker, Kubernetes, Service Mesh" },
              { icon: <Cpu className="w-4 h-4" />, title: "Performance", desc: "Profiling, Optimization, Caching" },
              { icon: <HardDrive className="w-4 h-4" />, title: "File Systems", desc: "Streams, Buffers, File Operations" }
            ].map((topic, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                <div className="text-muted-foreground mt-1">{topic.icon}</div>
                <div>
                  <h4 className="font-medium">{topic.title}</h4>
                  <p className="text-sm text-muted-foreground">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};
