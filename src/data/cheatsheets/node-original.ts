import { Server } from 'lucide-react';

export const nodeCheatsheet = {
  id: 'nodejs',
  name: 'Node.js',
  description: 'Complete Node.js guide from beginner to expert (Node 18-22+)',
  icon: Server,
  colorTheme: 'teal' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Node.js',
      commands: [
        {
          command: 'What is Node.js',
          description: 'Understanding Node.js fundamentals',
          usage: 'Node.js basics overview',
          example: '// Node.js is a JavaScript runtime built on Chrome\'s V8 engine\n// Allows JavaScript to run outside the browser\n// Event-driven, non-blocking I/O model\n// Single-threaded with event loop\n\n// Key concepts:\n// - Runtime environment for JavaScript\n// - Built on V8 JavaScript engine\n// - Asynchronous and event-driven\n// - Uses CommonJS or ES modules\n// - Rich ecosystem with npm\n// - Cross-platform (Windows, macOS, Linux)',
        },
        {
          command: 'Installing Node.js',
          description: 'Install Node.js on your system',
          usage: 'Official installer, version managers',
          example: '// Method 1: Official installer\n// Download from nodejs.org\n\n// Method 2: Version Manager (recommended)\n// Using nvm (Node Version Manager)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install 20\nnvm use 20\nnvm alias default 20\n\n// Method 3: Using fnm (Fast Node Manager)\ncurl -fsSL https://fnm.vercel.app/install | bash\nfnm install 20\nfnm use 20',
        },
        {
          command: 'Checking Node.js Installation',
          description: 'Verify Node.js and npm installation',
          usage: 'node --version, npm --version',
          example: '$ node --version\nv20.10.0\n\n$ npm --version\n10.2.3\n\n$ npx --version\n10.2.3\n\n// Check Node.js REPL\n$ node\n> console.log("Hello Node.js");\nHello Node.js\n> .exit',
        },
        {
          command: 'Running JavaScript Files',
          description: 'Execute JavaScript files with Node.js',
          usage: 'node filename.js',
          example: '// Create file: app.js\nconsole.log("Hello from Node.js!");\nprocess.exit(0);\n\n// Run the file\n$ node app.js\nHello from Node.js!\n\n// Run with specific Node.js version\n$ npx node@20 app.js\n\n// Run with ES modules\n$ node --input-type=module --eval "console.log(\'ESM mode\')"',
        },
        {
          command: 'Node.js REPL',
          description: 'Interactive JavaScript shell',
          usage: 'node command',
          example: '$ node\nWelcome to Node.js v20.10.0.\nType ".help" for more information.\n> 1 + 2\n3\n> Math.random()\n0.123456789\n> let name = "Node";\nundefined\n> console.log(name);\nNode\n> .help\n.break    Sometimes you get stuck, this gets you out\n.clear    Alias for .break\n.editor   Enter editor mode\n.exit     Exit the REPL\n.help     Print this help message\n.load     Load JS from a file into the REPL session\n.save     Save all evaluated commands in this REPL session to a file\n> .exit',
        },
        {
          command: 'Basic Node.js Program',
          description: 'Create your first Node.js application',
          usage: 'File system operations, process object',
          example: '// File: hello.js\nconst process = require(\'process\');\n\nconsole.log(\'Hello, Node.js!\');\nconsole.log(\'Platform:\', process.platform);\nconsole.log(\'Node version:\', process.version);\nconsole.log(\'Current directory:\', process.cwd());\n\n// Command line arguments\nconsole.log(\'Arguments:\', process.argv);\nconsole.log(\'Script name:\', process.argv[1]);\n\n// Exit with code\nprocess.exit(0);',
        },
        {
          command: 'Command Line Arguments',
          description: 'Pass arguments to Node.js scripts',
          usage: 'process.argv array',
          example: '// File: args.js\nconsole.log(\'Total arguments:\', process.argv.length);\nconsole.log(\'Arguments:\', process.argv);\n\n// Extract script arguments (excluding node and script name)\nconst args = process.argv.slice(2);\nconsole.log(\'Script arguments:\', args);\n\n// Parse named arguments\nconst namedArgs = {};\nargs.forEach((arg, index) => {\n  if (arg.startsWith(\'--\')) {\n    const key = arg.slice(2);\n    const value = args[index + 1] && !args[index + 1].startsWith(\'--\') \n      ? args[index + 1] \n      : true;\n    namedArgs[key] = value;\n  }\n});\n\nconsole.log(\'Named arguments:\', namedArgs);\n\n// Run: node args.js --name John --age 30 --active',
        },
        {
          command: 'Environment Variables',
          description: 'Access and use environment variables',
          usage: 'process.env object',
          example: '// File: env.js\nconsole.log(\'HOME:\', process.env.HOME);\nconsole.log(\'PATH:\', process.env.PATH);\nconsole.log(\'NODE_ENV:\', process.env.NODE_ENV);\n\n// Set default values\nconst PORT = process.env.PORT || 3000;\nconst DB_URL = process.env.DB_URL || \'mongodb://localhost:27017\';\n\nconsole.log(\'Port:\', PORT);\nconsole.log(\'Database URL:\', DB_URL);\n\n// Check if environment is production\nconst isProduction = process.env.NODE_ENV === \'production\';\nconsole.log(\'Is production:\', isProduction);\n\n// Run: PORT=8080 NODE_ENV=production node env.js',
        },
      ],
    },
    {
      title: 'Node.js Modules System',
      commands: [
        {
          command: 'CommonJS Modules (require)',
          description: 'Traditional Node.js module system',
          usage: 'require() and module.exports',
          example: '// File: math.js\nfunction add(a, b) {\n  return a + b;\n}\n\nfunction subtract(a, b) {\n  return a - b;\n}\n\n// Export functions\nmodule.exports = {\n  add,\n  subtract,\n  PI: 3.14159\n};\n\n// File: app.js\nconst math = require(\'./math.js\');\nconsole.log(math.add(5, 3)); // 8\nconsole.log(math.subtract(10, 4)); // 6\nconsole.log(math.PI); // 3.14159',
        },
        {
          command: 'ES Modules (import/export)',
          description: 'Modern JavaScript module system',
          usage: 'import and export statements',
          example: '// File: math.mjs (or package.json with "type": "module")\nexport function add(a, b) {\n  return a + b;\n}\n\nexport function subtract(a, b) {\n  return a - b;\n}\n\nexport const PI = 3.14159;\n\nexport default function multiply(a, b) {\n  return a * b;\n}\n\n// File: app.mjs\nimport multiply, { add, subtract, PI } from \'./math.mjs\';\nimport * as math from \'./math.mjs\';\n\nconsole.log(add(5, 3)); // 8\nconsole.log(multiply(4, 6)); // 24\nconsole.log(math.PI); // 3.14159',
        },
        {
          command: 'Built-in Node.js Modules',
          description: 'Core modules included with Node.js',
          usage: 'require(\'module-name\')',
          example: '// File system module\nconst fs = require(\'fs\');\nconst path = require(\'path\');\n\n// HTTP module\nconst http = require(\'http\');\nconst https = require(\'https\');\n\n// URL module\nconst url = require(\'url\');\n\n// Util module\nconst util = require(\'util\');\n\n// Events module\nconst EventEmitter = require(\'events\');\n\n// OS module\nconst os = require(\'os\');\n\n// Path operations\nconsole.log(path.join(\'folder\', \'file.txt\')); // folder/file.txt\nconsole.log(path.resolve(\'folder/file.txt\')); // /absolute/path/folder/file.txt',
        },
        {
          command: 'Third-party Modules (npm)',
          description: 'Install and use external packages',
          usage: 'npm install, require()',
          example: '// Install a package\n$ npm install lodash\n$ npm install express --save\n$ npm install jest --save-dev\n\n// Use in code\nconst _ = require(\'lodash\');\nconst express = require(\'express\');\n\n// Using specific functions\nconst { map, filter } = require(\'lodash\');\n\n// Import specific from ES module\nimport express from \'express\';\nimport { Router } from \'express\';',
        },
        {
          command: 'package.json File',
          description: 'Project configuration and dependencies',
          usage: 'npm init, package.json structure',
          example: '{\n  "name": "my-node-app",\n  "version": "1.0.0",\n  "description": "A Node.js application",\n  "main": "index.js",\n  "type": "module",\n  "scripts": {\n    "start": "node index.js",\n    "dev": "node --watch index.js",\n    "test": "jest"\n  },\n  "dependencies": {\n    "express": "^4.18.0",\n    "lodash": "^4.17.21"\n  },\n  "devDependencies": {\n    "jest": "^29.0.0",\n    "nodemon": "^3.0.0"\n  },\n  "engines": {\n    "node": ">=18.0.0"\n  }\n}',
        },
        {
          command: 'Module Resolution',
          description: 'How Node.js finds modules',
          usage: 'Relative paths, node_modules, core modules',
          example: '// 1. Core modules (built-in)\nconst fs = require(\'fs\'); // Node.js built-in\n\n// 2. File modules (relative/absolute paths)\nconst localModule = require(\'./utils/helper.js\');\nconst absoluteModule = require(\'/path/to/module.js\');\n\n// 3. node_modules (npm packages)\nconst npmPackage = require(\'express\');\n\n// 4. Index files (automatically resolved)\nconst utils = require(\'./utils\'); // Looks for utils/index.js\n\n// 5. File extensions (can be omitted in CommonJS)\nconst module1 = require(\'./module\'); // Looks for module.js, module.json, module.node',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'File System Operations',
      commands: [
        {
          command: 'Reading Files (Synchronous)',
          description: 'Read files synchronously',
          usage: 'fs.readFileSync()',
          example: 'const fs = require(\'fs\');\nconst path = require(\'path\');\n\n// Read file synchronously\ntry {\n  const filePath = path.join(__dirname, \'data.txt\');\n  const data = fs.readFileSync(filePath, \'utf8\');\n  console.log(\'File content:\', data);\n} catch (error) {\n  console.error(\'Error reading file:\', error.message);\n}\n\n// Read as buffer\nconst buffer = fs.readFileSync(\'image.jpg\');\nconsole.log(\'File size:\', buffer.length, \'bytes\');',
        },
        {
          command: 'Reading Files (Asynchronous)',
          description: 'Read files asynchronously with callbacks',
          usage: 'fs.readFile()',
          example: 'const fs = require(\'fs\');\n\n// Callback-based async read\nfs.readFile(\'data.txt\', \'utf8\', (error, data) => {\n  if (error) {\n    console.error(\'Error:\', error);\n    return;\n  }\n  console.log(\'File content:\', data);\n});\n\nconsole.log(\'Reading file...\'); // This logs first',
        },
        {
          command: 'Reading Files (Promises)',
          description: 'Read files using promises/async-await',
          usage: 'fs.promises.readFile()',
          example: 'const fs = require(\'fs\').promises;\n\n// Using promises\nasync function readFileAsync(filePath) {\n  try {\n    const data = await fs.readFile(filePath, \'utf8\');\n    console.log(\'File content:\', data);\n    return data;\n  } catch (error) {\n    console.error(\'Error reading file:\', error);\n    throw error;\n  }\n}\n\n// Using the function\nreadFileAsync(\'data.txt\')\n  .then(data => console.log(\'Success:\', data.length))\n  .catch(error => console.error(\'Failed:\', error));',
        },
        {
          command: 'Writing Files',
          description: 'Write data to files',
          usage: 'fs.writeFile(), fs.writeFileSync()',
          example: 'const fs = require(\'fs\');\n\n// Write file synchronously\ntry {\n  fs.writeFileSync(\'output.txt\', \'Hello, Node.js!\', \'utf8\');\n  console.log(\'File written successfully\');\n} catch (error) {\n  console.error(\'Error writing file:\', error);\n}\n\n// Write file asynchronously (callback)\nfs.writeFile(\'output.txt\', \'Hello, async Node.js!\', \'utf8\', (error) => {\n  if (error) {\n    console.error(\'Error:\', error);\n    return;\n  }\n  console.log(\'File written asynchronously\');\n});\n\n// Write file with promises\nconst fsPromises = require(\'fs\').promises;\nasync function writeFileAsync(filePath, content) {\n  try {\n    await fsPromises.writeFile(filePath, content, \'utf8\');\n    console.log(\'File written with promises\');\n  } catch (error) {\n    console.error(\'Error:\', error);\n  }\n}',
        },
        {
          command: 'File System Information',
          description: 'Get file and directory information',
          usage: 'fs.stat(), fs.readdir()',
          example: 'const fs = require(\'fs\');\nconst path = require(\'path\');\n\n// Get file/directory stats\nfs.stat(\'package.json\', (error, stats) => {\n  if (error) {\n    console.error(\'Error:\', error);\n    return;\n  }\n  \n  console.log(\'Is file:\', stats.isFile());\n  console.log(\'Is directory:\', stats.isDirectory());\n  console.log(\'File size:\', stats.size, \'bytes\');\n  console.log(\'Created:\', stats.birthtime);\n  console.log(\'Modified:\', stats.mtime);\n  console.log(\'Accessed:\', stats.atime);\n});\n\n// List directory contents\nfs.readdir(\'.\', (error, files) => {\n  if (error) {\n    console.error(\'Error:\', error);\n    return;\n  }\n  console.log(\'Directory contents:\', files);\n});',
        },
        {
          command: 'Creating and Removing Files/Directories',
          description: 'File and directory operations',
          usage: 'fs.mkdir(), fs.rmdir(), fs.unlink()',
          example: 'const fs = require(\'fs\');\n\n// Create directory\nfs.mkdir(\'new-folder\', { recursive: true }, (error) => {\n  if (error) throw error;\n  console.log(\'Directory created\');\n  \n  // Create file in the directory\n  fs.writeFile(\'new-folder/test.txt\', \'Hello!\', (error) => {\n    if (error) throw error;\n    console.log(\'File created\');\n    \n    // Remove file\n    fs.unlink(\'new-folder/test.txt\', (error) => {\n      if (error) throw error;\n      console.log(\'File removed\');\n      \n      // Remove directory\n      fs.rmdir(\'new-folder\', (error) => {\n        if (error) throw error;\n        console.log(\'Directory removed\');\n      });\n    });\n  });\n});',
        },
        {
          command: 'Working with Paths',
          description: 'Path manipulation utilities',
          usage: 'path module functions',
          example: 'const path = require(\'path\');\n\n// Join path segments\nconsole.log(path.join(\'folder\', \'subfolder\', \'file.txt\'));\n// Output: folder/subfolder/file.txt\n\n// Resolve to absolute path\nconsole.log(path.resolve(\'folder\', \'file.txt\'));\n// Output: /current/working/directory/folder/file.txt\n\n// Get directory name\nconsole.log(path.dirname(\'/path/to/file.txt\'));\n// Output: /path/to\n\n// Get file name\nconsole.log(path.basename(\'/path/to/file.txt\'));\n// Output: file.txt\n\n// Get file extension\nconsole.log(path.extname(\'/path/to/file.txt\'));\n// Output: .txt\n\n// Parse path\nconst parsed = path.parse(\'/path/to/file.txt\');\nconsole.log(parsed);\n// { root: \'/\', dir: \'/path/to\', base: \'file.txt\', ext: \'.txt\', name: \'file\' }',
        },
        {
          command: 'Streaming Files',
          description: 'Read and write large files efficiently',
          usage: 'fs.createReadStream(), fs.createWriteStream()',
          example: 'const fs = require(\'fs\');\n\n// Read file stream\nconst readStream = fs.createReadStream(\'large-file.txt\');\n\n// Write file stream\nconst writeStream = fs.createWriteStream(\'output.txt\');\n\n// Pipe streams (copy file)\nreadStream.pipe(writeStream);\n\n// Handle stream events\nreadStream.on(\'data\', (chunk) => {\n  console.log(`Received ${chunk.length} bytes of data.`);\n});\n\nreadStream.on(\'end\', () => {\n  console.log(\'Finished reading file.\');\n});\n\nreadStream.on(\'error\', (error) => {\n  console.error(\'Error reading file:\', error);\n});\n\n// Transform stream example\nconst { Transform } = require(\'stream\');\n\nconst upperCaseTransform = new Transform({\n  transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  }\n});\n\nfs.createReadStream(\'input.txt\')\n  .pipe(upperCaseTransform)\n  .pipe(fs.createWriteStream(\'output.txt\'));',
        },
      ],
    },
    {
      title: 'HTTP Server and Client',
      commands: [
        {
          command: 'Creating HTTP Server',
          description: 'Build basic HTTP server',
          usage: 'http.createServer()',
          example: 'const http = require(\'http\');\n\nconst server = http.createServer((req, res) => {\n  // Set response headers\n  res.writeHead(200, {\n    \'Content-Type\': \'text/plain\',\n    \'Access-Control-Allow-Origin\': \'*\'\n  });\n  \n  // Handle different routes\n  if (req.url === \'/\') {\n    res.end(\'Hello, World!\');\n  } else if (req.url === \'/about\') {\n    res.end(\'About page\');\n  } else {\n    res.writeHead(404);\n    res.end(\'Page not found\');\n  }\n});\n\nconst PORT = process.env.PORT || 3000;\nserver.listen(PORT, () => {\n  console.log(`Server running on http://localhost:${PORT}`);\n});',
        },
        {
          command: 'HTTP Request Handling',
          description: 'Process different HTTP methods and routes',
          usage: 'req.method, req.url',
          example: 'const http = require(\'http\');\nconst url = require(\'url\');\n\nconst server = http.createServer((req, res) => {\n  const parsedUrl = url.parse(req.url, true);\n  const method = req.method;\n  const path = parsedUrl.pathname;\n  const query = parsedUrl.query;\n  \n  // Set CORS headers\n  res.setHeader(\'Access-Control-Allow-Origin\', \'*\');\n  res.setHeader(\'Access-Control-Allow-Methods\', \'GET, POST, PUT, DELETE\');\n  \n  if (method === \'GET\' && path === \'/api/users\') {\n    res.writeHead(200, { \'Content-Type\': \'application/json\' });\n    res.end(JSON.stringify([{ id: 1, name: \'John\' }]));\n  } else if (method === \'POST\' && path === \'/api/users\') {\n    let body = \'\';\n    req.on(\'data\', chunk => {\n      body += chunk.toString();\n    });\n    req.on(\'end\', () => {\n      const user = JSON.parse(body);\n      console.log(\'Received user:\', user);\n      res.writeHead(201, { \'Content-Type\': \'application/json\' });\n      res.end(JSON.stringify({ id: 2, ...user }));\n    });\n  } else {\n    res.writeHead(404, { \'Content-Type\': \'application/json\' });\n    res.end(JSON.stringify({ error: \'Not found\' }));\n  }\n});\n\nserver.listen(3000, () => console.log(\'Server running on port 3000\'));',
        },
        {
          command: 'Making HTTP Requests',
          description: 'Create HTTP client requests',
          usage: 'http.request(), https.request()',
          example: 'const http = require(\'http\');\nconst https = require(\'https\');\n\n// Make GET request\nfunction getRequest(url) {\n  return new Promise((resolve, reject) => {\n    const client = url.startsWith(\'https\') ? https : http;\n    \n    const req = client.request(url, (res) => {\n      let data = \'\';\n      \n      res.on(\'data\', (chunk) => {\n        data += chunk;\n      });\n      \n      res.on(\'end\', () => {\n        resolve(JSON.parse(data));\n      });\n    });\n    \n    req.on(\'error\', (error) => {\n      reject(error);\n    });\n    \n    req.end();\n  });\n}\n\n// Make POST request\nfunction postRequest(url, data) {\n  return new Promise((resolve, reject) => {\n    const client = url.startsWith(\'https\') ? https : http;\n    const postData = JSON.stringify(data);\n    \n    const options = {\n      method: \'POST\',\n      headers: {\n        \'Content-Type\': \'application/json\',\n        \'Content-Length\': Buffer.byteLength(postData)\n      }\n    };\n    \n    const req = client.request(url, options, (res) => {\n      let responseData = \'\';\n      \n      res.on(\'data\', (chunk) => {\n        responseData += chunk;\n      });\n      \n      res.on(\'end\', () => {\n        resolve(JSON.parse(responseData));\n      });\n    });\n    \n    req.on(\'error\', reject);\n    req.write(postData);\n    req.end();\n  });\n}\n\n// Usage\ngetRequest(\'https://jsonplaceholder.typicode.com/users/1\')\n  .then(data => console.log(\'User:\', data))\n  .catch(error => console.error(\'Error:\', error));',
        },
        {
          command: 'Serving Static Files',
          description: 'Serve static files from directory',
          usage: 'fs, path, and content-type headers',
          example: 'const http = require(\'http\');\nconst fs = require(\'fs\');\nconst path = require(\'path\');\n\nconst mimeTypes = {\n  \'.html\': \'text/html\',\n  \'.js\': \'text/javascript\',\n  \'.css\': \'text/css\',\n  \'.json\': \'application/json\',\n  \'.png\': \'image/png\',\n  \'.jpg\': \'image/jpg\',\n  \'.gif\': \'image/gif\',\n  \'.svg\': \'image/svg+xml\',\n  \'.wav\': \'audio/wav\',\n  \'.mp4\': \'video/mp4\',\n  \'.woff\': \'application/font-woff\',\n  \'.ttf\': \'application/font-ttf\',\n  \'.eot\': \'application/vnd.ms-fontobject\',\n  \'.otf\': \'application/font-otf\',\n  \'.wasm\': \'application/wasm\'\n};\n\nconst server = http.createServer((req, res) => {\n  let filePath = \'.\' + req.url;\n  if (filePath === \'./\') {\n    filePath = \'./index.html\';\n  }\n  \n  const extname = String(path.extname(filePath)).toLowerCase();\n  const mimeType = mimeTypes[extname] || \'application/octet-stream\';\n  \n  fs.readFile(filePath, (error, content) => {\n    if (error) {\n      if (error.code === \'ENOENT\') {\n        res.writeHead(404, { \'Content-Type\': \'text/html\' });\n        res.end(\'<h1>404 Not Found</h1>\', \'utf-8\');\n      } else {\n        res.writeHead(500);\n        res.end(\'Server Error: \' + error.code, \'utf-8\');\n      }\n    } else {\n      res.writeHead(200, { \'Content-Type\': mimeType });\n      res.end(content, \'utf-8\');\n    }\n  });\n});\n\nserver.listen(3000, () => {\n  console.log(\'Static file server running on port 3000\');\n});',
        },
        {
          command: 'HTTPS Server',
          description: 'Create secure HTTPS server',
          usage: 'https.createServer() with SSL certificates',
          example: 'const https = require(\'https\');\nconst fs = require(\'fs\');\n\n// SSL certificate options\nconst options = {\n  key: fs.readFileSync(\'server.key\'),\n  cert: fs.readFileSync(\'server.cert\')\n};\n\nconst server = https.createServer(options, (req, res) => {\n  res.writeHead(200);\n  res.end(\'Hello, HTTPS!\');\n});\n\nserver.listen(443, () => {\n  console.log(\'HTTPS server running on port 443\');\n});\n\n// For development, you can generate self-signed certificates:\n// openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.cert -days 365 -nodes',
        },
        {
          command: 'WebSockets with Node.js',
          description: 'Real-time bidirectional communication',
          usage: 'ws module or native WebSocket',
          example: 'const WebSocket = require(\'ws\');\n\n// Create WebSocket server\nconst wss = new WebSocket.Server({ port: 8080 });\n\nwss.on(\'connection\', (ws) => {\n  console.log(\'New client connected\');\n  \n  // Send welcome message\n  ws.send(\'Welcome to WebSocket server!\');\n  \n  // Handle incoming messages\n  ws.on(\'message\', (message) => {\n    console.log(\'Received:\', message.toString());\n    \n    // Echo message back to client\n    ws.send(`Echo: ${message}`);\n  });\n  \n  // Handle client disconnect\n  ws.on(\'close\', () => {\n    console.log(\'Client disconnected\');\n  });\n  \n  // Handle errors\n  ws.on(\'error\', (error) => {\n    console.error(\'WebSocket error:\', error);\n  });\n});\n\nconsole.log(\'WebSocket server running on ws://localhost:8080\');\n\n// Broadcast to all clients\nwss.broadcast = function(data) {\n  wss.clients.forEach((client) => {\n    if (client.readyState === WebSocket.OPEN) {\n      client.send(data);\n    }\n  });\n};',
        },
      ],
    },
    {
      title: 'Event System and Asynchronous Programming',
      commands: [
        {
          command: 'EventEmitter',
          description: 'Create and handle custom events',
          usage: 'events module',
          example: 'const EventEmitter = require(\'events\');\n\n// Create custom event emitter\nclass MyEmitter extends EventEmitter {}\n\nconst myEmitter = new MyEmitter();\n\n// Register event listeners\nmyEmitter.on(\'event\', () => {\n  console.log(\'An event occurred!\');\n});\n\nmyEmitter.on(\'data\', (data) => {\n  console.log(\'Received data:\', data);\n});\n\n// One-time listener\nmyEmitter.once(\'connect\', () => {\n  console.log(\'Connected (only once)\');\n});\n\n// Emit events\nmyEmitter.emit(\'event\');\nmyEmitter.emit(\'data\', { id: 1, name: \'test\' });\nmyEmitter.emit(\'connect\');\nmyEmitter.emit(\'connect\'); // Won\'t trigger again\n\n// Error handling\nmyEmitter.on(\'error\', (error) => {\n  console.error(\'Error:\', error);\n});\n\nmyEmitter.emit(\'error\', new Error(\'Something went wrong\'));',
        },
        {
          command: 'Callbacks and Error Handling',
          description: 'Traditional callback pattern',
          usage: 'Error-first callbacks',
          example: 'const fs = require(\'fs\');\n\n// Error-first callback pattern\nfunction readFileCallback(path, callback) {\n  fs.readFile(path, \'utf8\', (error, data) => {\n    if (error) {\n      callback(error);\n      return;\n    }\n    callback(null, data);\n  });\n}\n\n// Using the callback\nreadFileCallback(\'package.json\', (error, data) => {\n  if (error) {\n    console.error(\'Error reading file:\', error);\n    return;\n  }\n  console.log(\'File content:\', data);\n});\n\n// Nested callbacks (callback hell)\nfs.readFile(\'file1.txt\', \'utf8\', (error, data1) => {\n  if (error) throw error;\n  \n  fs.readFile(\'file2.txt\', \'utf8\', (error, data2) => {\n    if (error) throw error;\n    \n    fs.readFile(\'file3.txt\', \'utf8\', (error, data3) => {\n      if (error) throw error;\n      \n      console.log(\'All files read:\', data1, data2, data3);\n    });\n  });\n});',
        },
        {
          command: 'Promises',
          description: 'Modern asynchronous programming',
          usage: 'Promise constructor, .then(), .catch()',
          example: 'const fs = require(\'fs\').promises;\n\n// Create promise from callback\nfunction readFilePromise(path) {\n  return new Promise((resolve, reject) => {\n    fs.readFile(path, \'utf8\', (error, data) => {\n      if (error) {\n        reject(error);\n      } else {\n        resolve(data);\n      }\n    });\n  });\n}\n\n// Using promises\nreadFilePromise(\'package.json\')\n  .then(data => {\n    console.log(\'File content:\', data);\n    return data.length;\n  })\n  .then(length => {\n    console.log(\'File length:\', length);\n  })\n  .catch(error => {\n    console.error(\'Error:\', error);\n  })\n  .finally(() => {\n    console.log(\'Operation completed\');\n  });\n\n// Promise utilities\nPromise.resolve(\'Success\').then(console.log);\nPromise.reject(new Error(\'Failure\')).catch(console.error);\n\n// Promise.all\nconst promise1 = fs.readFile(\'file1.txt\');\nconst promise2 = fs.readFile(\'file2.txt\');\nPromise.all([promise1, promise2])\n  .then(([data1, data2]) => {\n    console.log(\'Both files read\');\n  })\n  .catch(console.error);',
        },
        {
          command: 'Async/Await',
          description: 'Syntactic sugar for promises',
          usage: 'async/await keywords',
          example: 'const fs = require(\'fs\').promises;\n\n// Async function\nasync function readFileAsync(path) {\n  try {\n    const data = await fs.readFile(path, \'utf8\');\n    console.log(\'File content:\', data);\n    return data;\n  } catch (error) {\n    console.error(\'Error reading file:\', error);\n    throw error;\n  }\n}\n\n// Using async function\nasync function processFiles() {\n  try {\n    const content1 = await fs.readFile(\'file1.txt\', \'utf8\');\n    const content2 = await fs.readFile(\'file2.txt\', \'utf8\');\n    const content3 = await fs.readFile(\'file3.txt\', \'utf8\');\n    \n    console.log(\'All files processed\');\n    return { content1, content2, content3 };\n  } catch (error) {\n    console.error(\'Error processing files:\', error);\n    throw error;\n  }\n}\n\n// Parallel async operations\nasync function processFilesParallel() {\n  try {\n    const [content1, content2, content3] = await Promise.all([\n      fs.readFile(\'file1.txt\', \'utf8\'),\n      fs.readFile(\'file2.txt\', \'utf8\'),\n      fs.readFile(\'file3.txt\', \'utf8\')\n    ]);\n    \n    return { content1, content2, content3 };\n  } catch (error) {\n    console.error(\'Error:\', error);\n    throw error;\n  }\n}',
        },
        {
          command: 'Streams and Events',
          description: 'Working with readable and writable streams',
          usage: 'stream module events',
          example: 'const fs = require(\'fs\');\nconst { Transform } = require(\'stream\');\n\n// Readable stream\nconst readable = fs.createReadStream(\'input.txt\');\n\n// Writable stream\nconst writable = fs.createWriteStream(\'output.txt\');\n\n// Transform stream\nconst upperCase = new Transform({\n  transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  }\n});\n\n// Pipe streams with event handling\nreadable\n  .on(\'data\', (chunk) => {\n    console.log(`Read ${chunk.length} bytes`);\n  })\n  .on(\'end\', () => {\n    console.log(\'Finished reading\');\n  })\n  .on(\'error\', (error) => {\n    console.error(\'Read error:\', error);\n  })\n  .pipe(upperCase)\n  .pipe(writable);\n\nwritable\n  .on(\'finish\', () => {\n    console.log(\'Finished writing\');\n  })\n  .on(\'error\', (error) => {\n    console.error(\'Write error:\', error);\n  });',
        },
        {
          command: 'Timers and Scheduling',
          description: 'Schedule code execution',
          usage: 'setTimeout, setInterval, setImmediate',
          example: '// setTimeout - execute once after delay\nconsole.log(\'Start\');\nsetTimeout(() => {\n  console.log(\'Executed after 2 seconds\');\n}, 2000);\n\n// setInterval - execute repeatedly\nlet counter = 0;\nconst interval = setInterval(() => {\n  counter++;\n  console.log(`Counter: ${counter}`);\n  \n  if (counter >= 5) {\n    clearInterval(interval);\n    console.log(\'Interval cleared\');\n  }\n}, 1000);\n\n// setImmediate - execute on next tick\nconsole.log(\'Before immediate\');\nsetImmediate(() => {\n  console.log(\'Executed on next tick\');\n});\nconsole.log(\'After immediate\');\n\n// process.nextTick - execute before next tick\nprocess.nextTick(() => {\n  console.log(\'Next tick callback\');\n});\n\n// Order: nextTick -> immediate -> setTimeout',
        },
        {
          command: 'Event Loop and Process',
          description: 'Understanding Node.js event loop',
          usage: 'process object and event loop phases',
          example: 'const process = require(\'process\');\n\n// Event loop phases demonstration\nconsole.log(\'Start\');\n\n// 1. Timers phase\nsetTimeout(() => console.log(\'1. setTimeout (Timers)\'), 0);\n\n// 2. Pending callbacks phase\nprocess.nextTick(() => console.log(\'0. nextTick (before event loop)\'));\n\n// 3. Poll phase\nsetImmediate(() => console.log(\'2. setImmediate (Poll)\'));\n\n// 4. Check phase\nsetImmediate(() => console.log(\'3. setImmediate (Check)\'));\n\n// 5. Close callbacks phase\nconsole.log(\'End\');\n\n// Process events\nprocess.on(\'uncaughtException\', (error) => {\n  console.error(\'Uncaught Exception:\', error);\n  process.exit(1);\n});\n\nprocess.on(\'unhandledRejection\', (reason, promise) => {\n  console.error(\'Unhandled Rejection at:\', promise, \'reason:\', reason);\n});\n\nprocess.on(\'warning\', (warning) => {\n  console.warn(\'Warning:\', warning);\n});\n\n// Process information\nconsole.log(\'PID:\', process.pid);\nconsole.log(\'Platform:\', process.platform);\nconsole.log(\'Node version:\', process.version);\nconsole.log(\'Memory usage:\', process.memoryUsage());',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Node.js Concepts',
      commands: [
        {
          command: 'Cluster Module',
          description: 'Multi-process scaling',
          usage: 'cluster module for load balancing',
          example: 'const cluster = require(\'cluster\');\nconst http = require(\'http\');\nconst numCPUs = require(\'os\').cpus().length;\n\nif (cluster.isPrimary) {\n  console.log(`Primary ${process.pid} is running`);\n  \n  // Fork workers\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n  \n  // Handle worker exit\n  cluster.on(\'exit\', (worker, code, signal) => {\n    console.log(`Worker ${worker.process.pid} died`);\n    cluster.fork(); // Restart worker\n  });\n  \n  // Handle worker online\n  cluster.on(\'online\', (worker) => {\n    console.log(`Worker ${worker.process.pid} is online`);\n  });\n} else {\n  // Worker process\n  const server = http.createServer((req, res) => {\n    res.writeHead(200);\n    res.end(`Hello from worker ${process.pid}`);\n  });\n  \n  server.listen(8000, () => {\n    console.log(`Worker ${process.pid} started`);\n  });\n}',
        },
        {
          command: 'Worker Threads',
          description: 'CPU-intensive parallel processing',
          usage: 'worker_threads module',
          example: 'const { Worker, isMainThread, parentPort, workerData } = require(\'worker_threads\');\n\nif (isMainThread) {\n  // Main thread\n  function runService(workerData) {\n    return new Promise((resolve, reject) => {\n      const worker = new Worker(__filename, { workerData });\n      worker.on(\'message\', resolve);\n      worker.on(\'error\', reject);\n      worker.on(\'exit\', (code) => {\n        if (code !== 0)\n          reject(new Error(`Worker stopped with exit code ${code}`));\n      });\n    });\n  }\n  \n  async function run() {\n    const result = await runService(\'Hello from main thread!\');\n    console.log(result);\n  }\n  \n  run().catch(console.error);\n} else {\n  // Worker thread\n  const { workerData } = require(\'worker_threads\');\n  \n  // Simulate CPU-intensive work\n  let result = 0;\n  for (let i = 0; i < 100000000; i++) {\n    result += i;\n  }\n  \n  parentPort.postMessage(`Worker result: ${result}, received: ${workerData}`);\n}',
        },
        {
          command: 'Child Processes',
          description: 'Spawn external processes',
          usage: 'child_process module',
          example: 'const { spawn, exec, execFile, fork } = require(\'child_process\');\n\n// spawn - for long-running processes\nconst ls = spawn(\'ls\', [\'-la\']);\n\nls.stdout.on(\'data\', (data) => {\n  console.log(`stdout: ${data}`);\n});\n\nls.stderr.on(\'data\', (data) => {\n  console.error(`stderr: ${data}`);\n});\n\nls.on(\'close\', (code) => {\n  console.log(`child process exited with code ${code}`);\n});\n\n// exec - for simple commands\nexec(\'ls -la\', (error, stdout, stderr) => {\n  if (error) {\n    console.error(`exec error: ${error}`);\n    return;\n  }\n  console.log(`stdout: ${stdout}`);\n});\n\n// execFile - for executing files\nexecFile(\'node\', [\'--version\'], (error, stdout, stderr) => {\n  if (error) {\n    console.error(`execFile error: ${error}`);\n    return;\n  }\n  console.log(`Node version: ${stdout}`);\n});\n\n// fork - for Node.js processes with IPC\nconst child = fork(\'child.js\');\n\nchild.on(\'message\', (message) => {\n  console.log(\'Message from child:\', message);\n});\n\nchild.send({ hello: \'parent\' });',
        },
        {
          command: 'Buffer and Binary Data',
          description: 'Working with binary data',
          usage: 'Buffer class and operations',
          example: '// Creating buffers\nconst buf1 = Buffer.from(\'Hello\');\nconst buf2 = Buffer.alloc(10);\nconst buf3 = Buffer.allocUnsafe(10);\n\n// Buffer operations\nconsole.log(buf1.toString()); // \'Hello\'\nconsole.log(buf1.toString(\'hex\')); // \'48656c6c6f\'\nconsole.log(buf1.toString(\'base64\')); // \'SGVsbG8=\'\n\n// Buffer manipulation\nconst buf = Buffer.from(\'Hello World\');\nconsole.log(buf.length); // 11\nconsole.log(buf[0]); // 72 (ASCII code for \'H\')\n\n// Write to buffer\nbuf.write(\'Node.js\', 6);\nconsole.log(buf.toString()); // \'Hello Node.js\'\n\n// Buffer concatenation\nconst buf4 = Buffer.from(\'Hello \');\nconst buf5 = Buffer.from(\'World\');\nconst buf6 = Buffer.concat([buf4, buf5]);\nconsole.log(buf6.toString()); // \'Hello World\'\n\n// Buffer comparison\nconst buf7 = Buffer.from(\'ABC\');\nconst buf8 = Buffer.from(\'ABC\');\nconsole.log(buf7.equals(buf8)); // true',
        },
        {
          command: 'V8 Engine and Performance',
          description: 'V8-specific optimizations',
          usage: 'v8 module and performance hooks',
          example: 'const v8 = require(\'v8\');\nconst { performance, PerformanceObserver } = require(\'perf_hooks\');\n\n// V8 heap statistics\nconst heapStats = v8.getHeapStatistics();\nconsole.log(\'Heap Statistics:\', heapStats);\n\n// V8 heap space statistics\nconst heapSpaceStats = v8.getHeapSpaceStatistics();\nconsole.log(\'Heap Space Statistics:\', heapSpaceStats);\n\n// Performance measurement\nfunction measureFunction(fn) {\n  return function(...args) {\n    const start = performance.now();\n    const result = fn.apply(this, args);\n    const end = performance.now();\n    console.log(`Function took ${end - start} milliseconds`);\n    return result;\n  };\n}\n\n// Performance observer\nconst obs = new PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  entries.forEach((entry) => {\n    console.log(`${entry.name}: ${entry.duration}ms`);\n  });\n});\n\nobs.observe({ entryTypes: [\'measure\', \'navigation\'] });\n\n// Mark and measure\nperformance.mark(\'start\');\n// ... do some work\nperformance.mark(\'end\');\nperformance.measure(\'work\', \'start\', \'end\');',
        },
        {
          command: 'Memory Management',
          description: 'Monitor and optimize memory usage',
          usage: 'process.memoryUsage(), garbage collection',
          example: 'const v8 = require(\'v8\');\n\n// Memory usage information\nfunction logMemoryUsage() {\n  const used = process.memoryUsage();\n  console.log(\'Memory Usage:\');\n  for (let key in used) {\n    console.log(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);\n  }\n}\n\n// Garbage collection\nfunction forceGarbageCollection() {\n  if (global.gc) {\n    global.gc();\n    console.log(\'Garbage collection forced\');\n  } else {\n    console.log(\'Garbage collection not available. Run with --expose-gc\');\n  }\n}\n\n// Memory leak detection\nlet leakArray = [];\nfunction createLeak() {\n  leakArray.push(new Array(1000000).join(\'*\'));\n}\n\n// Monitor memory over time\nsetInterval(() => {\n  logMemoryUsage();\n  createLeak(); // This will cause memory leak\n}, 1000);\n\n// V8 flags for memory management\n// node --max-old-space-size=4096 --expose-gc app.js\n\n// Set V8 flags programmatically\nv8.setFlagsFromString(\'--max-old-space-size=4096\');',
        },
      ],
    },
    {
      title: 'Database Integration',
      commands: [
        {
          command: 'MongoDB with Native Driver',
          description: 'Connect and work with MongoDB',
          usage: 'mongodb npm package',
          example: 'const { MongoClient, ObjectId } = require(\'mongodb\');\n\n// Connection URI\nconst uri = \'mongodb://localhost:27017\';\nconst client = new MongoClient(uri);\n\nasync function run() {\n  try {\n    // Connect to MongoDB\n    await client.connect();\n    console.log(\'Connected to MongoDB\');\n    \n    // Select database and collection\n    const database = client.db(\'myapp\');\n    const users = database.collection(\'users\');\n    \n    // Insert document\n    const insertResult = await users.insertOne({\n      name: \'John Doe\',\n      email: \'john@example.com\',\n      age: 30,\n      createdAt: new Date()\n    });\n    console.log(\'Inserted document with _id:\', insertResult.insertedId);\n    \n    // Find documents\n    const findAll = await users.find({}).toArray();\n    console.log(\'All users:\', findAll);\n    \n    // Find with query\n    const findOne = await users.findOne({ name: \'John Doe\' });\n    console.log(\'Found user:\', findOne);\n    \n    // Update document\n    const updateResult = await users.updateOne(\n      { _id: insertResult.insertedId },\n      { $set: { age: 31, updatedAt: new Date() } }\n    );\n    console.log(\'Updated\', updateResult.modifiedCount, \'document\');\n    \n    // Delete document\n    const deleteResult = await users.deleteOne({ _id: insertResult.insertedId });\n    console.log(\'Deleted\', deleteResult.deletedCount, \'document\');\n    \n  } finally {\n    // Close connection\n    await client.close();\n  }\n}\n\nrun().catch(console.error);',
        },
        {
          command: 'MySQL with mysql2',
          description: 'Connect and work with MySQL database',
          usage: 'mysql2 npm package',
          example: 'const mysql = require(\'mysql2/promise\');\n\n// Connection configuration\nconst dbConfig = {\n  host: \'localhost\',\n  user: \'root\',\n  password: \'password\',\n  database: \'myapp\',\n  waitForConnections: true,\n  connectionLimit: 10,\n  queueLimit: 0\n};\n\n// Create connection pool\nconst pool = mysql.createPool(dbConfig);\n\nasync function queryDatabase() {\n  try {\n    // Get connection from pool\n    const connection = await pool.getConnection();\n    \n    // Execute query\n    const [rows] = await connection.execute(\'SELECT * FROM users WHERE age > ?\', [18]);\n    console.log(\'Users over 18:\', rows);\n    \n    // Insert data\n    const [insertResult] = await connection.execute(\n      \'INSERT INTO users (name, email, age) VALUES (?, ?, ?)\',\n      [\'Jane Doe\', \'jane@example.com\', 25]\n    );\n    console.log(\'Inserted user with ID:\', insertResult.insertId);\n    \n    // Update data\n    const [updateResult] = await connection.execute(\n      \'UPDATE users SET age = ? WHERE id = ?\',\n      [26, insertResult.insertId]\n    );\n    console.log(\'Updated\', updateResult.affectedRows, \'rows\');\n    \n    // Release connection\n    connection.release();\n    \n  } catch (error) {\n    console.error(\'Database error:\', error);\n  }\n}\n\n// Using transactions\nasync function transactionExample() {\n  const connection = await pool.getConnection();\n  \n  try {\n    await connection.beginTransaction();\n    \n    await connection.execute(\'INSERT INTO users (name) VALUES (?)\', [\'User1\']);\n    await connection.execute(\'INSERT INTO users (name) VALUES (?)\', [\'User2\']);\n    \n    await connection.commit();\n    console.log(\'Transaction committed\');\n    \n  } catch (error) {\n    await connection.rollback();\n    console.error(\'Transaction rolled back:\', error);\n  } finally {\n    connection.release();\n  }\n}\n\nqueryDatabase();',
        },
        {
          command: 'PostgreSQL with pg',
          description: 'Connect and work with PostgreSQL',
          usage: 'pg npm package',
          example: 'const { Pool, Client } = require(\'pg\');\n\n// Connection configuration\nconst poolConfig = {\n  user: \'postgres\',\n  host: \'localhost\',\n  database: \'myapp\',\n  password: \'password\',\n  port: 5432,\n  max: 20,\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 2000,\n};\n\n// Create connection pool\nconst pool = new Pool(poolConfig);\n\nasync function queryPostgres() {\n  try {\n    // Simple query\n    const result = await pool.query(\'SELECT NOW() AS current_time\');\n    console.log(\'Current time:\', result.rows[0].current_time);\n    \n    // Parameterized query\n    const { rows } = await pool.query(\n      \'SELECT * FROM users WHERE age > $1\',\n      [18]\n    );\n    console.log(\'Users:\', rows);\n    \n    // Insert with RETURNING\n    const insertResult = await pool.query(\n      \'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *\',\n      [\'John Doe\', \'john@example.com\', 30]\n    );\n    console.log(\'Inserted user:\', insertResult.rows[0]);\n    \n    // Update\n    const updateResult = await pool.query(\n      \'UPDATE users SET age = $1 WHERE id = $2\',\n      [31, insertResult.rows[0].id]\n    );\n    console.log(\'Updated\', updateResult.rowCount, \'rows\');\n    \n  } catch (error) {\n    console.error(\'PostgreSQL error:\', error);\n  }\n}\n\n// Transaction with client\nasync function transactionExample() {\n  const client = await pool.connect();\n  \n  try {\n    await client.query(\'BEGIN\');\n    \n    await client.query(\'INSERT INTO users (name) VALUES ($1)\', [\'User1\']);\n    await client.query(\'INSERT INTO users (name) VALUES ($1)\', [\'User2\']);\n    \n    await client.query(\'COMMIT\');\n    console.log(\'Transaction committed\');\n    \n  } catch (error) {\n    await client.query(\'ROLLBACK\');\n    console.error(\'Transaction rolled back:\', error);\n  } finally {\n    client.release();\n  }\n}\n\nqueryPostgres();',
        },
        {
          command: 'Redis Client',
          description: 'Connect and work with Redis',
          usage: 'redis npm package',
          example: 'const redis = require(\'redis\');\n\n// Create Redis client\nconst client = redis.createClient({\n  host: \'localhost\',\n  port: 6379,\n  // password: \'your-password\',\n  db: 0\n});\n\n// Handle connection events\nclient.on(\'connect\', () => {\n  console.log(\'Connected to Redis\');\n});\n\nclient.on(\'error\', (error) => {\n  console.error(\'Redis error:\', error);\n});\n\nclient.on(\'ready\', () => {\n  console.log(\'Redis client ready\');\n});\n\nasync function redisOperations() {\n  try {\n    // Connect to Redis\n    await client.connect();\n    \n    // Set operations\n    await client.set(\'key1\', \'value1\');\n    await client.set(\'key2\', \'value2\', { EX: 60 }); // With expiration\n    \n    // Get operations\n    const value1 = await client.get(\'key1\');\n    console.log(\'key1:\', value1);\n    \n    // Hash operations\n    await client.hSet(\'user:1\', {\n      name: \'John Doe\',\n      email: \'john@example.com\',\n      age: \'30\'\n    });\n    \n    const user = await client.hGetAll(\'user:1\');\n    console.log(\'User:\', user);\n    \n    // List operations\n    await client.lPush(\'tasks\', \'task1\', \'task2\', \'task3\');\n    const tasks = await client.lRange(\'tasks\', 0, -1);\n    console.log(\'Tasks:\', tasks);\n    \n    // Set operations\n    await client.sAdd(\'tags\', \'nodejs\', \'javascript\', \'backend\');\n    const tags = await client.sMembers(\'tags\');\n    console.log(\'Tags:\', tags);\n    \n    // Increment operations\n    await client.set(\'counter\', 0);\n    await client.incr(\'counter\');\n    await client.incrBy(\'counter\', 5);\n    const counter = await client.get(\'counter\');\n    console.log(\'Counter:\', counter);\n    \n    // JSON operations (RedisJSON module)\n    await client.json.set(\'user:2\', \'$\', {\n      id: 2,\n      name: \'Jane Doe\',\n      skills: [\'JavaScript\', \'Node.js\']\n    });\n    \n    const user2 = await client.json.get(\'user:2\');\n    console.log(\'User 2:\', user2);\n    \n  } catch (error) {\n    console.error(\'Redis operations error:\', error);\n  } finally {\n    // Close connection\n    await client.quit();\n  }\n}\n\nredisOperations();',
        },
        {
          command: 'SQLite with better-sqlite3',
          description: 'Lightweight embedded database',
          usage: 'better-sqlite3 npm package',
          example: 'const Database = require(\'better-sqlite3\');\n\n// Open database (creates if doesn\'t exist)\nconst db = new Database(\'myapp.db\');\n\n// Enable foreign keys\ndb.pragma(\'foreign_keys = ON\');\n\n// Create tables\nconst createUsersTable = db.prepare(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE NOT NULL,\n    age INTEGER,\n    created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n  )\n`);\n\ncreateUsersTable.run();\n\n// Insert data\nconst insertUser = db.prepare(`\n  INSERT INTO users (name, email, age) VALUES (?, ?, ?)\n`);\n\nconst result = insertUser.run(\'John Doe\', \'john@example.com\', 30);\nconsole.log(\'Inserted user with ID:\', result.lastInsertRowid);\n\n// Query data\nconst getUserById = db.prepare(`\n  SELECT * FROM users WHERE id = ?\n`);\n\nconst user = getUserById.get(result.lastInsertRowid);\nconsole.log(\'User:\', user);\n\n// Query multiple rows\nconst getAllUsers = db.prepare(`\n  SELECT * FROM users ORDER BY created_at DESC\n``);\n\nconst users = getAllUsers.all();\nconsole.log(\'All users:\', users);\n\n// Update data\nconst updateUser = db.prepare(`\n  UPDATE users SET age = ? WHERE id = ?\n`);\n\nconst updateResult = updateUser.run(31, result.lastInsertRowid);\nconsole.log(\'Updated\', updateResult.changes, \'rows\');\n\n// Delete data\nconst deleteUser = db.prepare(`\n  DELETE FROM users WHERE id = ?\n`);\n\nconst deleteResult = deleteUser.run(result.lastInsertRowid);\nconsole.log(\'Deleted\', deleteResult.changes, \'rows\');\n\n// Transactions\nfunction transferData() {\n  const transaction = db.transaction(() => {\n    // Multiple operations in transaction\n    insertUser.run(\'Alice\', \'alice@example.com\', 25);\n    insertUser.run(\'Bob\', \'bob@example.com\', 28);\n  });\n  \n  transaction();\n  console.log(\'Transaction completed\');\n}\n\ntransferData();\n\n// Close database\ndb.close();',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Advanced Node.js Patterns',
      commands: [
        {
          command: 'Dependency Injection',
          description: 'Inversion of control pattern',
          usage: 'Container-based DI',
          example: 'class Container {\n  constructor() {\n    this.services = new Map();\n    this.singletons = new Map();\n  }\n  \n  register(name, factory, options = {}) {\n    this.services.set(name, { factory, options });\n  }\n  \n  get(name) {\n    const service = this.services.get(name);\n    if (!service) {\n      throw new Error(`Service ${name} not found`);\n    }\n    \n    if (service.options.singleton) {\n      if (!this.singletons.has(name)) {\n        this.singletons.set(name, service.factory(this));\n      }\n      return this.singletons.get(name);\n    }\n    \n    return service.factory(this);\n  }\n}\n\n// Usage\nconst container = new Container();\n\ncontainer.register(\'config\', () => ({\n  database: {\n    host: process.env.DB_HOST || \'localhost\',\n    port: process.env.DB_PORT || 5432\n  }\n}), { singleton: true });\n\ncontainer.register(\'database\', (c) => {\n  const config = c.get(\'config\');\n  return new Database(config.database);\n}, { singleton: true });\n\ncontainer.register(\'userService\', (c) => {\n  const db = c.get(\'database\');\n  return new UserService(db);\n});\n\nconst userService = container.get(\'userService\');',
        },
        {
          command: 'Event Sourcing',
          description: 'Event-driven architecture pattern',
          usage: 'Event store and event handlers',
          example: 'class EventStore {\n  constructor() {\n    this.events = [];\n    this.handlers = new Map();\n  }\n  \n  save(event) {\n    this.events.push({\n      ...event,\n      timestamp: new Date(),\n      id: this.events.length + 1\n    });\n    \n    this.emit(event.type, event);\n  }\n  \n  on(eventType, handler) {\n    if (!this.handlers.has(eventType)) {\n      this.handlers.set(eventType, []);\n    }\n    this.handlers.get(eventType).push(handler);\n  }\n  \n  emit(eventType, event) {\n    const handlers = this.handlers.get(eventType) || [];\n    handlers.forEach(handler => handler(event));\n  }\n  \n  getEvents(aggregateId) {\n    return this.events.filter(e => e.aggregateId === aggregateId);\n  }\n}\n\n// Usage\nconst eventStore = new EventStore();\n\nclass User {\n  constructor(id) {\n    this.id = id;\n    this.version = 0;\n    this.events = [];\n  }\n  \n  apply(event) {\n    this.events.push(event);\n    this.version++;\n  }\n  \n  create(name, email) {\n    const event = {\n      type: \'UserCreated\',\n      aggregateId: this.id,\n      data: { name, email }\n    };\n    this.apply(event);\n    eventStore.save(event);\n  }\n  \n  updateEmail(newEmail) {\n    const event = {\n      type: \'UserEmailUpdated\',\n      aggregateId: this.id,\n      data: { newEmail }\n    };\n    this.apply(event);\n    eventStore.save(event);\n  }\n}\n\n// Event handlers\neventStore.on(\'UserCreated\', (event) => {\n  console.log(`User created: ${event.data.name}`);\n});\n\neventStore.on(\'UserEmailUpdated\', (event) => {\n  console.log(`Email updated to: ${event.data.newEmail}`);\n});',
        },
        {
          command: 'CQRS Pattern',
          description: 'Command Query Responsibility Segregation',
          usage: 'Separate read and write models',
          example: 'class CommandBus {\n  constructor() {\n    this.handlers = new Map();\n  }\n  \n  register(commandType, handler) {\n    this.handlers.set(commandType, handler);\n  }\n  \n  async execute(command) {\n    const handler = this.handlers.get(command.type);\n    if (!handler) {\n      throw new Error(`No handler for command ${command.type}`);\n    }\n    return await handler(command);\n  }\n}\n\nclass QueryBus {\n  constructor() {\n    this.handlers = new Map();\n  }\n  \n  register(queryType, handler) {\n    this.handlers.set(queryType, handler);\n  }\n  \n  async execute(query) {\n    const handler = this.handlers.get(query.type);\n    if (!handler) {\n      throw new Error(`No handler for query ${query.type}`);\n    }\n    return await handler(query);\n  }\n}\n\n// Commands\nconst commandBus = new CommandBus();\nconst queryBus = new QueryBus();\n\n// Command handlers\ncommandBus.register(\'CreateUser\', async (command) => {\n  const user = await userRepository.create(command.data);\n  eventStore.save({\n    type: \'UserCreated\',\n    aggregateId: user.id,\n    data: user\n  });\n  return user;\n});\n\n// Query handlers\nqueryBus.register(\'GetUserById\', async (query) => {\n  return await userReadRepository.findById(query.id);\n});\n\n// Usage\nconst user = await commandBus.execute({\n  type: \'CreateUser\',\n  data: { name: \'John\', email: \'john@example.com\' }\n});\n\nconst userData = await queryBus.execute({\n  type: \'GetUserById\',\n  id: user.id\n});',
        },
        {
          command: 'Circuit Breaker Pattern',
          description: 'Fault tolerance for external services',
          usage: 'Circuit breaker implementation',
          example: 'class CircuitBreaker {\n  constructor(options = {}) {\n    this.failureThreshold = options.failureThreshold || 5;\n    this.resetTimeout = options.resetTimeout || 60000;\n    this.monitoringPeriod = options.monitoringPeriod || 10000;\n    \n    this.state = \'CLOSED\'; // CLOSED, OPEN, HALF_OPEN\n    this.failureCount = 0;\n    this.lastFailureTime = null;\n    this.successCount = 0;\n  }\n  \n  async execute(operation) {\n    if (this.state === \'OPEN\') {\n      if (Date.now() - this.lastFailureTime > this.resetTimeout) {\n        this.state = \'HALF_OPEN\';\n        this.successCount = 0;\n      } else {\n        throw new Error(\'Circuit breaker is OPEN\');\n      }\n    }\n    \n    try {\n      const result = await operation();\n      this.onSuccess();\n      return result;\n    } catch (error) {\n      this.onFailure();\n      throw error;\n    }\n  }\n  \n  onSuccess() {\n    this.failureCount = 0;\n    \n    if (this.state === \'HALF_OPEN\') {\n      this.successCount++;\n      if (this.successCount >= 3) {\n        this.state = \'CLOSED\';\n      }\n    }\n  }\n  \n  onFailure() {\n    this.failureCount++;\n    this.lastFailureTime = Date.now();\n    \n    if (this.failureCount >= this.failureThreshold) {\n      this.state = \'OPEN\';\n    }\n    \n    if (this.state === \'HALF_OPEN\') {\n      this.state = \'OPEN\';\n    }\n  }\n}\n\n// Usage\nconst circuitBreaker = new CircuitBreaker({\n  failureThreshold: 3,\n  resetTimeout: 30000\n});\n\nasync function fetchUserData(userId) {\n  return await circuitBreaker.execute(async () => {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) throw new Error(\'Failed to fetch user\');\n    return response.json();\n  });\n}',
        },
        {
          command: 'Rate Limiting',
          description: 'Control request frequency',
          usage: 'Token bucket and sliding window',
          example: 'class TokenBucket {\n  constructor(capacity, refillRate) {\n    this.capacity = capacity;\n    this.tokens = capacity;\n    this.refillRate = refillRate;\n    this.lastRefill = Date.now();\n  }\n  \n  consume(tokens = 1) {\n    this.refill();\n    \n    if (this.tokens >= tokens) {\n      this.tokens -= tokens;\n      return true;\n    }\n    \n    return false;\n  }\n  \n  refill() {\n    const now = Date.now();\n    const elapsed = now - this.lastRefill;\n    const tokensToAdd = Math.floor(elapsed * this.refillRate / 1000);\n    \n    if (tokensToAdd > 0) {\n      this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);\n      this.lastRefill = now;\n    }\n  }\n}\n\nclass SlidingWindowRateLimiter {\n  constructor(maxRequests, windowSize) {\n    this.maxRequests = maxRequests;\n    this.windowSize = windowSize;\n    this.requests = [];\n  }\n  \n  isAllowed() {\n    const now = Date.now();\n    \n    // Remove old requests\n    this.requests = this.requests.filter(\n      timestamp => now - timestamp < this.windowSize\n    );\n    \n    if (this.requests.length < this.maxRequests) {\n      this.requests.push(now);\n      return true;\n    }\n    \n    return false;\n  }\n}\n\n// Express middleware example\nfunction createRateLimitMiddleware(limiter) {\n  return (req, res, next) => {\n    if (limiter.isAllowed()) {\n      next();\n    } else {\n      res.status(429).json({ error: \'Too Many Requests\' });\n    }\n  };\n}\n\nconst tokenBucket = new TokenBucket(10, 5); // 10 tokens, refill 5 per second\nconst slidingWindow = new SlidingWindowRateLimiter(100, 60000); // 100 requests per minute',
        },
        {
          command: 'Distributed Locking',
          description: 'Coordinate distributed processes',
          usage: 'Redis-based distributed locks',
          example: 'class DistributedLock {\n  constructor(redisClient, key, ttl = 30000) {\n    this.redis = redisClient;\n    this.key = key;\n    this.ttl = ttl;\n    this.identifier = `${Date.now()}-${Math.random()}`;\n  }\n  \n  async acquire() {\n    const result = await this.redis.set(\n      this.key,\n      this.identifier,\n      \'PX\',\n      this.ttl,\n      \'NX\'\n    );\n    \n    return result === \'OK\';\n  }\n  \n  async release() {\n    const script = `\n      if redis.call("get", KEYS[1]) == ARGV[1] then\n        return redis.call("del", KEYS[1])\n      else\n        return 0\n      end\n    `;\n    \n    const result = await this.redis.eval(script, 1, this.key, this.identifier);\n    return result === 1;\n  }\n  \n  async extend(additionalTtl) {\n    const script = `\n      if redis.call("get", KEYS[1]) == ARGV[1] then\n        return redis.call("pexpire", KEYS[1], ARGV[2])\n      else\n        return 0\n      end\n    `;\n    \n    const result = await this.redis.eval(script, 1, this.key, this.identifier, additionalTtl);\n    return result === 1;\n  }\n}\n\n// Usage\nasync function withLock(redisClient, lockKey, callback) {\n  const lock = new DistributedLock(redisClient, lockKey);\n  \n  const acquired = await lock.acquire();\n  if (!acquired) {\n    throw new Error(\'Could not acquire lock\');\n  }\n  \n  try {\n    return await callback();\n  } finally {\n    await lock.release();\n  }\n}\n\n// Example usage\nawait withLock(redisClient, \'user:123:update\', async () => {\n  // Critical section - only one process can execute this at a time\n  const user = await updateUser(123, updates);\n  return user;\n});',
        },
      ],
    },
    {
      title: 'Latest Node.js Features (Node 18-22+)',
      commands: [
        {
          command: 'Fetch API (Node 18+)',
          description: 'Native fetch implementation',
          usage: 'global fetch() function',
          example: '// Native fetch in Node.js 18+\nasync function fetchExample() {\n  try {\n    // GET request\n    const response = await fetch(\'https://api.github.com/users/nodejs\');\n    const data = await response.json();\n    console.log(\'User data:\', data);\n    \n    // POST request\n    const postResponse = await fetch(\'https://jsonplaceholder.typicode.com/posts\', {\n      method: \'POST\',\n      headers: {\n        \'Content-Type\': \'application/json\',\n      },\n      body: JSON.stringify({\n        title: \'foo\',\n        body: \'bar\',\n        userId: 1,\n      }),\n    });\n    \n    const postData = await postResponse.json();\n    console.log(\'Created post:\', postData);\n    \n    // Request with headers and options\n    const responseWithOptions = await fetch(\'https://api.example.com/data\', {\n      method: \'GET\',\n      headers: {\n        \'Authorization\': \'Bearer token123\',\n        \'User-Agent\': \'MyApp/1.0\',\n      },\n      signal: AbortSignal.timeout(5000), // 5 second timeout\n    });\n    \n  } catch (error) {\n    console.error(\'Fetch error:\', error);\n  }\n}\n\nfetchExample();',
        },
        {
          command: 'Web Streams API (Node 18+)',
          description: 'Native web streams implementation',
          usage: 'ReadableStream, WritableStream',
          example: 'import { ReadableStream, WritableStream } from \'stream/web\';\n\n// Create a readable stream\nconst readable = new ReadableStream({\n  start(controller) {\n    // Push data to the stream\n    controller.enqueue(\'Hello \');\n    controller.enqueue(\'World!\');\n    controller.close();\n  }\n});\n\n// Create a writable stream\nconst writable = new WritableStream({\n  write(chunk) {\n    console.log(\'Received:\', chunk);\n  },\n  close() {\n    console.log(\'Stream closed\');\n  }\n});\n\n// Pipe streams\nawait readable.pipeTo(writable);\n\n// Transform stream example\nconst { TransformStream } = require(\'stream/web\');\n\nconst upperCaseTransform = new TransformStream({\n  transform(chunk, controller) {\n    controller.enqueue(chunk.toString().toUpperCase());\n  }\n});\n\n// Chain transforms\nawait readable\n  .pipeThrough(upperCaseTransform)\n  .pipeTo(writable);\n\n// Using fetch with streams\nasync function streamDownload() {\n  const response = await fetch(\'https://example.com/large-file.txt\');\n  \n  if (!response.body) {\n    throw new Error(\'Response body is null\');\n  }\n  \n  const reader = response.body.getReader();\n  \n  while (true) {\n    const { done, value } = await reader.read();\n    \n    if (done) {\n      console.log(\'Stream completed\');\n      break;\n    }\n    \n    console.log(`Received ${value.length} bytes`);\n  }\n}',
        },
        {
          command: 'Test Runner (Node 18+)',
          description: 'Built-in test runner',
          usage: 'node:test module',
          example: 'import { test, describe, it, before, after } from \'node:test\';\nimport assert from \'node:assert\';\nimport { readFile } from \'node:fs/promises\';\n\n// Basic test\ntest(\'synchronous passing test\', (t) => {\n  assert.strictEqual(2 + 2, 4);\n});\n\n// Async test\ntest(\'asynchronous passing test\', async (t) => {\n  const data = await readFile(\'package.json\', \'utf8\');\n  assert(data.includes(\'name\'));\n});\n\n// Test with describe\ndescribe(\'Math operations\', () => {\n  it(\'should add numbers correctly\', () => {\n    assert.strictEqual(2 + 3, 5);\n  });\n  \n  it(\'should subtract numbers correctly\', () => {\n    assert.strictEqual(5 - 3, 2);\n  });\n});\n\n// Test with setup and teardown\nlet testData;\n\nbefore(async () => {\n  testData = await readFile(\'test-data.json\', \'utf8\');\n});\n\nafter(() => {\n  console.log(\'Cleanup completed\');\n});\n\ntest(\'should process test data\', () => {\n  assert(testData.length > 0);\n});\n\n// Mock test\ntest(\'mock function\', (t) => {\n  const mockFn = t.mock.fn();\n  mockFn(\'arg1\', \'arg2\');\n  \n  assert.strictEqual(mockFn.mock.calls.length, 1);\n  assert.deepStrictEqual(mockFn.mock.calls[0].arguments, [\'arg1\', \'arg2\']);\n});\n\n// Skip test\ntest(\'skipped test\', { skip: true }, () => {\n  // This test will be skipped\n});\n\n// Only run this test\ntest(\'only test\', { only: true }, () => {\n  // Only this test will run\n});\n\n// Run tests: node --test test/*.js',
        },
        {
          command: 'Built-in WebSocket (Node 22+)',
          description: 'Native WebSocket implementation',
          usage: 'WebSocket class',
          example: 'import { WebSocket } from \'ws\'; // or native in Node 22+\n\n// WebSocket server\nconst wss = new WebSocket({ port: 8080 });\n\nwss.on(\'connection\', (ws, request) => {\n  console.log(\'New client connected\');\n  \n  // Send welcome message\n  ws.send(JSON.stringify({ type: \'welcome\', message: \'Connected!\' }));\n  \n  // Handle messages\n  ws.on(\'message\', (data, isBinary) => {\n    const message = isBinary ? data : data.toString();\n    console.log(\'Received:\', message);\n    \n    // Echo back\n    ws.send(JSON.stringify({ type: \'echo\', data: message }));\n  });\n  \n  // Handle close\n  ws.on(\'close\', (code, reason) => {\n    console.log(`Client disconnected: ${code} ${reason}`);\n  });\n  \n  // Handle errors\n  ws.on(\'error\', (error) => {\n    console.error(\'WebSocket error:\', error);\n  });\n  \n  // Send ping\n  ws.ping();\n});\n\nwss.on(\'listening\', () => {\n  console.log(\'WebSocket server listening on port 8080\');\n});\n\n// WebSocket client\nconst client = new WebSocket(\'ws://localhost:8080\');\n\nclient.on(\'open\', () => {\n  console.log(\'Connected to server\');\n  client.send(JSON.stringify({ type: \'greeting\', message: \'Hello Server!\' }));\n});\n\nclient.on(\'message\', (data, isBinary) => {\n  const message = isBinary ? data : data.toString();\n  console.log(\'Received from server:\', message);\n});\n\nclient.on(\'close\', () => {\n  console.log(\'Disconnected from server\');\n});\n\nclient.on(\'error\', (error) => {\n  console.error(\'Client error:\', error);\n});',
        },
        {
          command: 'AbortController and AbortSignal (Node 18+)',
          description: 'Cancellation primitives',
          usage: 'AbortController for cancellable operations',
          example: 'import { setTimeout } from \'node:timers/promises\';\n\n// Basic AbortController usage\nconst controller = new AbortController();\nconst signal = controller.signal;\n\n// Set up abort handler\nsignal.addEventListener(\'abort\', () => {\n  console.log(\'Operation aborted!\');\n});\n\n// Cancellable timeout\nasync function cancellableDelay(ms, signal) {\n  try {\n    await setTimeout(ms, null, { signal });\n    console.log(\'Delay completed\');\n  } catch (error) {\n    if (error.name === \'AbortError\') {\n      console.log(\'Delay was aborted\');\n    } else {\n      throw error;\n    }\n  }\n}\n\n// Start the delay\ncancellableDelay(5000, signal);\n\n// Abort after 2 seconds\nsetTimeout(() => {\n  controller.abort();\n}, 2000);\n\n// AbortSignal.timeout (Node 19+)\nasync function fetchWithTimeout(url) {\n  try {\n    const response = await fetch(url, {\n      signal: AbortSignal.timeout(5000) // 5 second timeout\n    });\n    return await response.json();\n  } catch (error) {\n    if (error.name === \'AbortError\') {\n      console.log(\'Request timed out\');\n    }\n    throw error;\n  }\n}\n\n// AbortSignal.any (Node 20+)\nconst timeoutSignal = AbortSignal.timeout(1000);\nconst manualController = new AbortController();\n\nconst combinedSignal = AbortSignal.any([\n  timeoutSignal,\n  manualController.signal\n]);\n\n// Use with fetch\nfetch(\'https://api.example.com/data\', { signal: combinedSignal });\n\n// AbortSignal.withReason (Node 22+)\nconst customController = new AbortController();\nconst customSignal = customController.signal.withReason(\n  new Error(\'Operation cancelled by user\')\n);\n\ncustomController.abort();',
        },
        {
          command: 'Node.js 22+ Features',
          description: 'Latest Node.js 22 features',
          usage: 'New APIs and improvements',
          example: 'import {\n  createRequire,\n  register,\n  syncBuiltinESMExports\n} from \'node:module\';\n\n// WebSocket in Node 22+ (native)\nimport { WebSocket } from \'node:ws\';\n\n// Enhanced fetch with keepalive\nconst response = await fetch(\'https://api.example.com\', {\n  keepalive: true,\n  signal: AbortSignal.timeout(5000)\n});\n\n// Enhanced performance hooks\nimport { performance } from \'node:perf_hooks\';\n\n// PerformanceObserverEntryTypes\nimport { PerformanceObserver } from \'node:perf_hooks\';\n\nconst obs = new PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  entries.forEach((entry) => {\n    if (entry.entryType === \'measure\') {\n      console.log(`${entry.name}: ${entry.duration}ms`);\n    }\n  });\n});\n\nobs.observe({ entryTypes: [\'measure\', \'navigation\'] });\n\n// Enhanced console with custom inspect\nimport { inspect } from \'node:util\';\n\nconst obj = { name: \'test\', value: 42 };\nconsole.log(inspect(obj, { colors: true, depth: 2 }));\n\n// Node.js 22: Enhanced process reporting\nprocess.report.writeReport(\'report.json\');\n\n// Node.js 22: V8 memory sampling\nconst v8 = require(\'v8\');\n\n// Start memory sampling\nv8.startSamplingHeapProfiling();\n\n// ... run your code ...\n\n// Stop and get sample\nconst sample = v8.stopSamplingHeapProfiling();\nconsole.log(\'Memory sample:\', sample);',
        },
        {
          command: 'Cutting-Edge Node.js Features (2024+)',
          description: 'Very latest experimental and stable features',
          usage: 'Node.js 22+ experimental features and enhancements',
          example: '// Node.js 22: Native WebSocket (no external dependency)\nimport { WebSocket } from \'node:ws\';\n\nconst ws = new WebSocket(\'ws://localhost:8080\');\nws.on(\'open\', () => {\n  ws.send(\'Hello Native WebSocket!\');\n});\n\n// Node.js 22: Enhanced fetch with keepalive and duplex\nconst response = await fetch(\'https://api.example.com\', {\n  keepalive: true,\n  duplex: \'half\', // For streaming requests\n  signal: AbortSignal.timeout(10000)\n});\n\n// Node.js 22: V8 12.4 features\n// Array.fromAsync (Stage 3, available in Node 22+)\nasync function createArrayAsync() {\n  const asyncIterable = (async function*() {\n    yield 1;\n    yield 2;\n    yield 3;\n  })();\n  \n  const array = await Array.fromAsync(asyncIterable);\n  console.log(array); // [1, 2, 3]\n}\n\n// Node.js 22: Enhanced process reporting\nprocess.report.writeReport(\'diagnostic-report.json\', {\n  filename: \'diagnostic-report.json\',\n  getReport: true,\n  getException: true\n});\n\n// Node.js 22: Permission model (experimental)\n// Run with: node --experimental-permission node-app.js\n\n// Node.js 22: Test runner enhancements\nimport { test, describe, mock } from \'node:test\';\nimport assert from \'node:assert\';\n\ntest(\'mock functions\', (t) => {\n  const fn = t.mock.fn();\n  fn(1, 2, 3);\n  \n  assert.strictEqual(fn.mock.callCount(), 1);\n  assert.deepStrictEqual(fn.mock.calls[0].arguments, [1, 2, 3]);\n});\n\n// Node.js 22: Enhanced ESM loader hooks\nimport { initialize } from \'node:module\';\n\nconst customLoader = initialize({\n  hooks: {\n    resolve: (specifier, context, nextResolve) => {\n      // Custom resolution logic\n      return nextResolve(specifier, context);\n    },\n    load: async (url, context, nextLoad) => {\n      // Custom loading logic\n      return nextLoad(url, context);\n    }\n  }\n});\n\n// Node.js 22: SQLite module (experimental)\n// import sqlite from \'node:sqlite\';\n// const db = new sqlite.Database(\'app.db\');\n\n// Node.js 22: Network imports (experimental flag)\n// import module from \'https://cdn.example.com/module.js\';\n\n// Node.js 22: WebSocket compression support\nconst wsCompressed = new WebSocket(\'ws://localhost:8080\', {\n  perMessageDeflate: {\n    zlibDeflateOptions: {\n      level: 3\n    }\n  }\n});\n\n// Node.js 22: Enhanced diagnostic channels\nimport { diagnostics_channel } from \'node:diagnostics_channel\';\n\nconst channel = diagnostics_channel.channel(\'my-app.events\');\nchannel.publish({ type: \'start\', data: {} });\n\n// Node.js 22: AsyncLocalStorage improvements\nimport { AsyncLocalStorage } from \'node:async_hooks\';\n\nconst asyncLocalStorage = new AsyncLocalStorage();\n\n// Store context across async operations\nasyncLocalStorage.run({ requestId: \'123\' }, async () => {\n  // This context is preserved across async/await boundaries\n  const context = asyncLocalStorage.getStore();\n  console.log(context.requestId); // \'123\'\n  \n  await someAsyncOperation();\n  \n  // Context is still available\n  const context2 = asyncLocalStorage.getStore();\n  console.log(context2.requestId); // \'123\'\n});\n\n// Node.js 22: Worker threads with transfer list\nimport { Worker, isMainThread, parentPort, workerData } from \'node:worker_threads\';\n\nif (isMainThread) {\n  const worker = new Worker(__filename, {\n    workerData: { largeBuffer: new SharedArrayBuffer(1024) },\n    transferList: [new SharedArrayBuffer(1024)]\n  });\n} else {\n  // Worker code\n  const { largeBuffer } = workerData;\n  // Work with shared buffer\n}',
        },
        {
          command: 'Node.js 21+ Features',
          description: 'Node.js 21 stable features',
          usage: 'New stable APIs and improvements',
          example: '// Node.js 21: Built-in WebSocket (stable)\nimport { WebSocket } from \'node:ws\';\n\n// Node.js 21: fetch() with WebStreams\nconst response = await fetch(\'https://api.example.com/large-data\');\nconst readable = response.body;\n\n// Stream to file\nimport { createWriteStream } from \'node:fs\';\nconst fileStream = createWriteStream(\'output.dat\');\n\nawait readable.pipeTo(new WritableStream({\n  write(chunk) {\n    fileStream.write(chunk);\n  },\n  close() {\n    fileStream.end();\n  }\n}));\n\n// Node.js 21: Enhanced AbortSignal\nconst controller = new AbortController();\nconst signal = controller.signal;\n\n// AbortSignal.timeout() - auto-timeout\nconst timeoutSignal = AbortSignal.timeout(5000);\n\n// AbortSignal.any() - combine signals\nconst combinedSignal = AbortSignal.any([\n  timeoutSignal,\n  manualAbortSignal\n]);\n\n// Node.js 21: Import attributes (stable)\nimport data from \'./data.json\' with { type: \'json\' };\nimport styles from \'./styles.css\' with { type: \'css\' };\n\n// Node.js 21: Enhanced test runner\nimport { test, describe, it, before, after, mock } from \'node:test\';\nimport assert from \'node:assert\';\n\ntest(\'async hooks\', async (t) => {\n  const mockFn = t.mock.fn();\n  await someAsyncOperation(mockFn);\n  \n  assert.strictEqual(mockFn.mock.callCount(), 1);\n});\n\n// Node.js 21: Performance improvements\nimport { performance } from \'node:perf_hooks\';\n\n// Better time resolution\nconsole.log(\'Time origin:\', performance.timeOrigin);\nconsole.log(\'Now:\', performance.now());\n\n// Node.js 21: Stream constructors\nimport { ReadableStream, WritableStream, TransformStream } from \'node:stream/web\';\n\nconst readable = new ReadableStream({\n  start(controller) {\n    controller.enqueue(\'data\');\n    controller.close();\n  }\n});\n\n// Node.js 21: ESM loader hooks (stable)\nimport { register } from \'node:module\';\n\nregister(\'./my-loader.mjs\');\n\n// Node.js 21: Enhanced diagnostics\nimport { diagnostics_channel } from \'node:diagnostics_channel\';\n\nconst channel = diagnostics_channel.channel(\'http.request\');\nchannel.subscribe(({ request }) => {\n  console.log(\'HTTP request:\', request.url);\n});',
        },
        {
          command: 'Node.js 20+ LTS Features',
          description: 'Node.js 20 LTS stable features',
          usage: 'Long-term support features',
          example: '// Node.js 20: Permission model (experimental)\n// Run with: node --experimental-permission app.js\n\n// Node.js 20: Import attributes (stable)\nimport config from \'./config.json\' with { type: \'json\' };\n\n// Node.js 20: Test runner (stable)\nimport { test, describe, it, mock } from \'node:test\';\nimport assert from \'node:assert\';\n\ntest(\'stable test runner\', () => {\n  assert.strictEqual(2 + 2, 4);\n});\n\n// Node.js 20: AsyncLocalStorage improvements\nimport { AsyncLocalStorage } from \'node:async_hooks\';\n\nconst asyncLocalStorage = new AsyncLocalStorage();\n\n// Node.js 20: Performance hooks enhancements\nimport { performance, PerformanceObserver } from \'node:perf_hooks\';\n\nconst obs = new PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  entries.forEach((entry) => {\n    console.log(`${entry.name}: ${entry.duration}ms`);\n  });\n});\n\nobs.observe({ entryTypes: [\'measure\', \'navigation\', \'http\'] });\n\n// Node.js 20: V8 11.3 features\n// String.prototype.isWellFormed() and toWellFormed()\nconst malformedString = \'\\uD800\'; // Lone surrogate\nconsole.log(malformedString.isWellFormed()); // false\nconsole.log(malformedString.toWellFormed()); // \'\'\n\n// Node.js 20: Enhanced error messages\ntry {\n  require(\'./non-existent-module\');\n} catch (error) {\n  console.log(error.code); // \'MODULE_NOT_FOUND\'\n  console.log(error.message); // Enhanced error message\n}\n\n// Node.js 20: URLSearchParams enhancements\nconst params = new URLSearchParams();\nparams.set(\'key\', \'value\');\nparams.set(\'array\', \'a,b,c\');\n\n// Node.js 20: Blob and File APIs\nimport { Blob } from \'node:buffer\';\n\nconst blob = new Blob([\'Hello, World!\'], { type: \'text/plain\' });\nconst arrayBuffer = await blob.arrayBuffer();\n\n// Node.js 20: Web Crypto API enhancements\nimport { webcrypto } from \'node:crypto\';\n\nconst { subtle } = webcrypto;\nconst key = await subtle.generateKey(\n  { name: \'AES-GCM\', length: 256 },\n  true,\n  [\'encrypt\', \'decrypt\']\n);',
        },
        {
          command: 'ESM Enhancements (Node 20+)',
          description: 'Enhanced ES module support',
          usage: 'Import attributes, pattern matching',
          example: '// Import attributes (Node 20+)\nimport data from \'./data.json\' with { type: \'json\' };\nimport config from \'./config.js\' with { type: \'json\' };\n\n// CSS imports (with appropriate loader)\nimport styles from \'./styles.css\' with { type: \'css\' };\n\n// Dynamic imports with attributes\nconst module = await import(\'./module.js\', {\n  with: { type: \'json\' }\n});\n\n// Enhanced import.meta\nimport.meta.resolve(\'./module.js\');\nimport.meta.main; // true if this is the main entry point\n\n// Synchronous import.meta.resolve\nconst resolvedPath = import.meta.resolve(\'./module.js\');\nconsole.log(\'Resolved path:\', resolvedPath);\n\n// Source maps in stack traces\n// Node.js 20+ shows better stack traces with source maps\n\n// --experimental-import-meta-resolve\n// Enables import.meta.resolve in more contexts\n\n// ESM loader hooks (Node 20+)\nimport { initialize } from \'es-module-loader\';\n\n// Custom loader\nconst customLoader = initialize({\n  // Custom loading logic\n});\n\n// Network imports (experimental)\n// import module from \'https://cdn.example.com/module.js\';',
        },
        {
          command: 'Performance Monitoring (Node 19+)',
          description: 'Enhanced performance APIs',
          usage: 'PerformanceObserver, time origins',
          example: 'import { performance, PerformanceObserver } from \'node:perf_hooks\';\n\n// Time origin\nconsole.log(\'Time origin:\', performance.timeOrigin);\nconsole.log(\'Current time:\', performance.now());\nconsole.log(\'Absolute time:\', performance.timeOrigin + performance.now());\n\n// PerformanceObserver with detailed entries\nconst obs = new PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  entries.forEach((entry) => {\n    console.log(`${entry.name}:`);\n    console.log(`  Duration: ${entry.duration}ms`);\n    console.log(`  StartTime: ${entry.startTime}ms`);\n    console.log(`  EntryType: ${entry.entryType}`);\n    \n    if (entry.entryType === \'http\') {\n      console.log(`  URL: ${entry.name}`);\n      console.log(`  Method: ${entry.method}`);\n      console.log(`  Status: ${entry.status}`);\n    }\n  });\n});\n\n// Observe multiple entry types\nobs.observe({ \n  entryTypes: [\'measure\', \'navigation\', \'http\', \'resource\'] \n});\n\n// Custom performance marks\nperformance.mark(\'operation-start\');\n\n// Do some work\nawait someAsyncOperation();\n\nperformance.mark(\'operation-end\');\nperformance.measure(\'operation\', \'operation-start\', \'operation-end\');\n\n// Performance timeline\nconst entries = performance.getEntriesByType(\'measure\');\nconsole.log(\'All measures:\', entries);\n\n// Clear performance entries\nperformance.clearMarks(\'operation-start\');\nperformance.clearMarks(\'operation-end\');\nperformance.clearMeasures(\'operation\');',
        },
      ],
    },
    {
      title: 'Production Best Practices',
      commands: [
        {
          command: 'Environment Configuration',
          description: 'Manage different environments',
          usage: 'dotenv, config files',
          example: 'import dotenv from \'dotenv\';\nimport { fileURLToPath } from \'node:url\';\nimport path from \'node:path\';\n\n// Load environment variables\ndotenv.config();\n\n// Configuration object\nconst config = {\n  // Server configuration\n  port: parseInt(process.env.PORT) || 3000,\n  host: process.env.HOST || \'localhost\',\n  \n  // Database configuration\n  database: {\n    host: process.env.DB_HOST || \'localhost\',\n    port: parseInt(process.env.DB_PORT) || 5432,\n    name: process.env.DB_NAME || \'myapp\',\n    username: process.env.DB_USER || \'postgres\',\n    password: process.env.DB_PASSWORD || \'password\',\n    ssl: process.env.DB_SSL === \'true\',\n    maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS) || 10,\n  },\n  \n  // JWT configuration\n  jwt: {\n    secret: process.env.JWT_SECRET || \'fallback-secret\',\n    expiresIn: process.env.JWT_EXPIRES_IN || \'24h\',\n    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || \'7d\',\n  },\n  \n  // Logging configuration\n  logging: {\n    level: process.env.LOG_LEVEL || \'info\',\n    format: process.env.LOG_FORMAT || \'json\',\n    file: process.env.LOG_FILE || \'app.log\',\n  },\n  \n  // Environment-specific settings\n  isDevelopment: process.env.NODE_ENV === \'development\',\n  isProduction: process.env.NODE_ENV === \'production\',\n  isTest: process.env.NODE_ENV === \'test\',\n};\n\n// Validate required environment variables\nfunction validateConfig() {\n  const required = [\n    \'JWT_SECRET\',\n    \'DB_PASSWORD\',\n  ];\n  \n  const missing = required.filter(key => !process.env[key]);\n  \n  if (missing.length > 0) {\n    throw new Error(`Missing required environment variables: ${missing.join(\', \')}`);\n  }\n}\n\nif (config.isProduction) {\n  validateConfig();\n}\n\nexport default config;',
        },
        {
          command: 'Logging and Monitoring',
          description: 'Structured logging and monitoring',
          usage: 'winston, pino, morgan',
          example: 'import winston from \'winston\';\nimport morgan from \'morgan\';\n\n// Winston logger configuration\nconst logger = winston.createLogger({\n  level: process.env.LOG_LEVEL || \'info\',\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.errors({ stack: true }),\n    winston.format.json()\n  ),\n  defaultMeta: { service: \'myapp\' },\n  transports: [\n    // Write all logs to console\n    new winston.transports.Console({\n      format: winston.format.combine(\n        winston.format.colorize(),\n        winston.format.simple()\n      )\n    }),\n    \n    // Write error logs to file\n    new winston.transports.File({ \n      filename: \'error.log\', \n      level: \'error\' \n    }),\n    \n    // Write all logs to file\n    new winston.transports.File({ \n      filename: \'combined.log\' \n    }),\n  ],\n});\n\n// Add console transport in development\nif (process.env.NODE_ENV !== \'production\') {\n  logger.add(new winston.transports.Console({\n    format: winston.format.simple()\n  }));\n}\n\n// Morgan HTTP request logger\nconst httpLogger = morgan(\'combined\', {\n  stream: {\n    write: (message) => {\n      logger.info(message.trim());\n    }\n  }\n});\n\n// Custom logger functions\nconst logError = (error, context = {}) => {\n  logger.error(error.message, {\n    stack: error.stack,\n    ...context\n  });\n};\n\nconst logInfo = (message, meta = {}) => {\n  logger.info(message, meta);\n};\n\nconst logWarn = (message, meta = {}) => {\n  logger.warn(message, meta);\n};\n\nexport { logger, httpLogger, logError, logInfo, logWarn };',
        },
        {
          command: 'Health Checks and Metrics',
          description: 'Application health monitoring',
          usage: 'Health endpoints, metrics collection',
          example: 'import { performance } from \'node:perf_hooks\';\nimport { promisify } from \'node:util\';\n\n// Health check system\nclass HealthChecker {\n  constructor() {\n    this.checks = new Map();\n  }\n  \n  addCheck(name, checkFunction) {\n    this.checks.set(name, checkFunction);\n  }\n  \n  async runChecks() {\n    const results = {};\n    let overallHealthy = true;\n    \n    for (const [name, checkFunction] of this.checks) {\n      try {\n        const startTime = performance.now();\n        const result = await Promise.race([\n          checkFunction(),\n          new Promise((_, reject) => \n            setTimeout(() => reject(new Error(\'Health check timeout\')), 5000)\n          )\n        ]);\n        const duration = performance.now() - startTime;\n        \n        results[name] = {\n          status: \'healthy\',\n          duration: Math.round(duration),\n          details: result\n        };\n      } catch (error) {\n        results[name] = {\n          status: \'unhealthy\',\n          error: error.message\n        };\n        overallHealthy = false;\n      }\n    }\n    \n    return {\n      status: overallHealthy ? \'healthy\' : \'unhealthy\',\n      timestamp: new Date().toISOString(),\n      checks: results\n    };\n  }\n}\n\n// Create health checker\nconst healthChecker = new HealthChecker();\n\n// Add health checks\nhealthChecker.addCheck(\'database\', async () => {\n  // Check database connectivity\n  const db = require(\'./database\');\n  await db.raw(\'SELECT 1\');\n  return { connection: \'ok\' };\n});\n\nhealthChecker.addCheck(\'redis\', async () => {\n  // Check Redis connectivity\n  const redis = require(\'./redis\');\n  await redis.ping();\n  return { connection: \'ok\' };\n});\n\nhealthChecker.addCheck(\'memory\', async () => {\n  // Check memory usage\n  const memUsage = process.memoryUsage();\n  const usedMB = Math.round(memUsage.heapUsed / 1024 / 1024);\n  const totalMB = Math.round(memUsage.heapTotal / 1024 / 1024);\n  \n  return {\n    heapUsed: `${usedMB}MB`,\n    heapTotal: `${totalMB}MB`,\n    usage: `${Math.round((usedMB / totalMB) * 100)}%`\n  };\n});\n\n// Health check endpoint\napp.get(\'/health\', async (req, res) => {\n  const health = await healthChecker.runChecks();\n  const statusCode = health.status === \'healthy\' ? 200 : 503;\n  res.status(statusCode).json(health);\n});\n\n// Metrics endpoint\napp.get(\'/metrics\', (req, res) => {\n  const metrics = {\n    uptime: process.uptime(),\n    memory: process.memoryUsage(),\n    cpu: process.cpuUsage(),\n    version: process.version,\n    platform: process.platform,\n    timestamp: new Date().toISOString()\n  };\n  \n  res.json(metrics);\n});',
        },
        {
          command: 'Graceful Shutdown',
          description: 'Handle application shutdown properly',
          usage: 'Process signals, cleanup',
          example: 'import http from \'node:http\';\n\n// Graceful shutdown manager\nclass GracefulShutdown {\n  constructor(server, options = {}) {\n    this.server = server;\n    this.timeout = options.timeout || 30000; // 30 seconds\n    this.cleanupTasks = [];\n    this.isShuttingDown = false;\n  }\n  \n  addCleanupTask(task) {\n    this.cleanupTasks.push(task);\n  }\n  \n  async shutdown() {\n    if (this.isShuttingDown) {\n      console.log(\'Shutdown already in progress\');\n      return;\n    }\n    \n    this.isShuttingDown = true;\n    console.log(\'Starting graceful shutdown...\');\n    \n    // Stop accepting new connections\n    this.server.close(() => {\n      console.log(\'HTTP server closed\');\n    });\n    \n    // Run cleanup tasks with timeout\n    const cleanupPromise = Promise.all(\n      this.cleanupTasks.map(async (task) => {\n        try {\n          await task();\n        } catch (error) {\n          console.error(\'Cleanup task failed:\', error);\n        }\n      })\n    );\n    \n    // Wait for cleanup or timeout\n    try {\n      await Promise.race([\n        cleanupPromise,\n        new Promise((_, reject) => \n          setTimeout(() => reject(new Error(\'Shutdown timeout\')), this.timeout)\n        )\n      ]);\n      console.log(\'Graceful shutdown completed\');\n    } catch (error) {\n      console.error(\'Shutdown error:\', error);\n      process.exit(1);\n    }\n    \n    process.exit(0);\n  }\n}\n\n// Create server\nconst server = http.createServer(app);\n\n// Create shutdown manager\nconst shutdownManager = new GracefulShutdown(server);\n\n// Add cleanup tasks\nshutdownManager.addCleanupTask(async () => {\n  console.log(\'Closing database connections...\');\n  await database.close();\n});\n\nshutdownManager.addCleanupTask(async () => {\n  console.log(\'Closing Redis connections...\');\n  await redis.quit();\n});\n\nshutdownManager.addCleanupTask(async () => {\n  console.log(\'Flushing logs...\');\n  await logger.flush();\n});\n\n// Handle shutdown signals\nprocess.on(\'SIGTERM\', () => {\n  console.log(\'Received SIGTERM\');\n  shutdownManager.shutdown();\n});\n\nprocess.on(\'SIGINT\', () => {\n  console.log(\'Received SIGINT\');\n  shutdownManager.shutdown();\n});\n\n// Handle uncaught exceptions\nprocess.on(\'uncaughtException\', (error) => {\n  console.error(\'Uncaught Exception:\', error);\n  shutdownManager.shutdown();\n});\n\nprocess.on(\'unhandledRejection\', (reason, promise) => {\n  console.error(\'Unhandled Rejection at:\', promise, \'reason:\', reason);\n  shutdownManager.shutdown();\n});',
        },
        {
          command: 'Security Best Practices',
          description: 'Security headers and validation',
          usage: 'Helmet, CORS, input validation',
          example: 'import helmet from \'helmet\';\nimport cors from \'cors\';\nimport rateLimit from \'express-rate-limit\';\nimport { body, validationResult } from \'express-validator\';\n\n// Security headers\napp.use(helmet({\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: ["\'self\'"],\n      styleSrc: ["\'self\'", "\'unsafe-inline\'"],\n      scriptSrc: ["\'self\'"],\n      imgSrc: ["\'self\'", "data:", "https:"],\n    },\n  },\n  hsts: {\n    maxAge: 31536000,\n    includeSubDomains: true,\n    preload: true\n  }\n}));\n\n// CORS configuration\nconst corsOptions = {\n  origin: process.env.ALLOWED_ORIGINS?.split(\',\') || [\'http://localhost:3000\'],\n  credentials: true,\n  optionsSuccessStatus: 200\n};\n\napp.use(cors(corsOptions));\n\n// Rate limiting\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: \'Too many requests from this IP\',\n  standardHeaders: true,\n  legacyHeaders: false,\n});\n\napp.use(limiter);\n\n// Input validation\nconst validateUser = [\n  body(\'email\').isEmail().normalizeEmail(),\n  body(\'password\').isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/),\n  body(\'name\').trim().isLength({ min: 2, max: 50 }),\n];\n\n// Validation middleware\nconst handleValidationErrors = (req, res, next) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  next();\n};\n\n// Protected routes\napp.post(\'/api/users\', validateUser, handleValidationErrors, async (req, res) => {\n  // Request is validated and safe to process\n  const user = await createUser(req.body);\n  res.status(201).json(user);\n});\n\n// Security middleware\napp.use((req, res, next) => {\n  // Remove sensitive headers\n  res.removeHeader(\'X-Powered-By\');\n  \n  // Set security headers\n  res.setHeader(\'X-Content-Type-Options\', \'nosniff\');\n  res.setHeader(\'X-Frame-Options\', \'DENY\');\n  res.setHeader(\'X-XSS-Protection\', \'1; mode=block\');\n  \n  next();\n});\n\n// Prevent parameter pollution\napp.set(\'query parser\', {\n  parameterLimit: 100,\n  depth: 5\n});',
        },
      ],
    },
  ],
};
