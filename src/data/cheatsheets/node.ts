import { Server } from 'lucide-react';

export const nodeCheatsheet = {
  id: 'nodejs',
  name: 'Node.js',
  description: 'Runtime, core APIs, servers, tooling (Node 18+)',
  icon: Server,
  colorTheme: 'teal' as const,
  sections: [
    {
      title: 'Runtime & Project Setup',
      commands: [
        {
          command: 'Node versions & flags',
          description: 'Switch LTS, run with reload, source maps, and inspector',
          usage: 'nvm install 20 && nvm use 20\nnode --watch --enable-source-maps --inspect src/index.mjs',
          example: 'NODE_ENV=production node --max-old-space-size=4096 --trace-warnings server.mjs',
        },
        {
          command: 'package.json essentials',
          description: 'ESM, engines, scripts, exports/paths for libs',
          usage: '{\n  "type": "module",\n  "engines": { "node": ">=18" },\n  "scripts": { "dev": "node --watch src/index.mjs", "test": "node --test" },\n  "exports": { ".": "./dist/index.js" }\n}',
          example: 'npm set fund false\nnpm pkg set type=module\nnpm pkg set scripts.dev="node --watch src/index.mjs"',
        },
        {
          command: 'Environment variables',
          description: 'Use .env, defaults, and safe casting',
          usage: 'node -r dotenv/config src/index.mjs\nconst port = Number(process.env.PORT ?? 3000);',
          example: 'PORT=8080 LOG_LEVEL=debug node --trace-deprecation src/server.mjs',
        },
        {
          command: 'TypeScript + tsx runtime',
          description: 'Zero-build dev with TS + ESM',
          usage: 'npm i -D typescript tsx @types/node\nnpx tsc --init --module esnext --moduleResolution bundler',
          example: '\"scripts\": { \"dev\": \"tsx watch src/index.ts\", \"start\": \"node dist/index.js\" }',
        },
      ],
    },
    {
      title: 'Modules & Paths',
      commands: [
        {
          command: 'ESM imports',
          description: 'Use node: specifiers and top-level await',
          usage: 'import fs from "node:fs/promises";\nimport { fileURLToPath } from "node:url";\nconst pkg = await import("./package.json", { assert: { type: "json" } });',
          example: 'const __filename = fileURLToPath(import.meta.url);\nconst __dirname = fileURLToPath(new URL(".", import.meta.url));',
        },
        {
          command: 'CommonJS interop',
          description: 'Require from ESM or vice versa',
          usage: 'import { createRequire } from "node:module";\nconst require = createRequire(import.meta.url);\nconst cjs = require("./cjs-lib.cjs");',
          example: '// CJS consuming ESM\n(async () => {\n  const { default: mod } = await import("./esm.mjs");\n})();',
        },
        {
          command: 'Path safety & URLs',
          description: 'Resolve absolute paths to prevent path traversal',
          usage: 'import path from "node:path";\nconst safe = path.resolve(baseDir, userPath);\nif (!safe.startsWith(baseDir)) throw new Error("invalid path");',
          example: 'new URL("/api/users?limit=10", "https://example.com").searchParams.get("limit");',
        },
        {
          command: 'Config & JSON loading',
          description: 'Read/merge config files with caching disabled',
          usage: 'const config = JSON.parse(await fs.readFile("config.json", "utf8"));\nconst merged = { ...defaults, ...config };',
          example: 'const yamlText = await fs.readFile("config.yaml", "utf8");\n// parse with yaml library when needed',
        },
      ],
    },
    {
      title: 'Async & Event Loop',
      commands: [
        {
          command: 'Timers vs microtasks',
          description: 'Use setImmediate after I/O; microtasks via queueMicrotask',
          usage: 'setTimeout(fn, 0); // timer phase\nsetImmediate(fn); // check phase after I/O\nqueueMicrotask(fn); // before next tick',
          example: 'Promise.resolve().then(log)\nsetImmediate(log)\nsetTimeout(log, 0)',
        },
        {
          command: 'Promise helpers',
          description: 'Coordinate concurrent work and failures',
          usage: 'await Promise.all([a(), b()]);\nawait Promise.allSettled(tasks);\nawait Promise.race([p1, timeout]);\nawait Promise.any(fallbacks);',
          example: 'const [user, orders] = await Promise.all([getUser(), getOrders()]);',
        },
        {
          command: 'AbortController everywhere',
          description: 'Cancel fetch, timers, or custom work',
          usage: 'const ac = new AbortController();\nconst res = await fetch(url, { signal: ac.signal });\nsetTimeout(() => ac.abort(), 5000);',
          example: 'const controller = new AbortController();\nawait pipeline(src, dst, { signal: controller.signal });',
        },
        {
          command: 'AsyncLocalStorage',
          description: 'Propagate request context across async hops',
          usage: 'import { AsyncLocalStorage } from "node:async_hooks";\nconst als = new AsyncLocalStorage();\nals.run({ reqId }, handler);',
          example: 'const context = als.getStore();\nlog({ reqId: context?.reqId, msg });',
        },
      ],
    },
    {
      title: 'File System & Streams',
      commands: [
        {
          command: 'fs/promises basics',
          description: 'Read/write, mkdir, copy with async/await',
          usage: 'await fs.mkdir("logs", { recursive: true });\nawait fs.writeFile("logs/app.log", "hello");\nconst data = await fs.readFile("config.json", "utf8");',
          example: 'await fs.cp("src/assets", "dist/assets", { recursive: true, force: true });',
        },
        {
          command: 'Pipeline for backpressure',
          description: 'Stream files and transforms safely',
          usage: 'import { pipeline } from "node:stream/promises";\nawait pipeline(createReadStream("in"), transformStream, createWriteStream("out"));',
          example: 'await pipeline(req, createGunzip(), fs.createWriteStream("file.txt"));',
        },
        {
          command: 'Watchers',
          description: 'React to file changes',
          usage: 'const watcher = fs.watch("src", { recursive: true });\nfor await (const event of watcher) {\n  console.log(event.eventType, event.filename);\n}',
          example: 'fs.watchFile("config.json", { interval: 5000 }, reloadConfig);',
        },
        {
          command: 'Compression & archives',
          description: 'Gzip/deflate streams',
          usage: 'import { createGzip } from "node:zlib";\nawait pipeline(createReadStream("in.txt"), createGzip(), createWriteStream("out.txt.gz"));',
          example: 'await pipeline(res.body, createBrotliDecompress(), fs.createWriteStream("file.txt"));',
        },
      ],
    },
    {
      title: 'HTTP, Fetch & APIs',
      commands: [
        {
          command: 'Built-in fetch',
          description: 'Use WHATWG fetch with agents and AbortSignal',
          usage: 'const res = await fetch(url, { method: "POST", body: JSON.stringify(data), headers: { "content-type": "application/json" } });\nconst json = await res.json();',
          example: 'const controller = new AbortController();\nconst res = await fetch(api, { signal: controller.signal, cache: "no-store" });',
        },
        {
          command: 'http/https server',
          description: 'Minimal server with keep-alive',
          usage: 'import http from "node:http";\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "content-type": "application/json" });\n  res.end(JSON.stringify({ ok: true }));\n});\nserver.listen(process.env.PORT || 3000);',
          example: 'server.keepAliveTimeout = 61000;\nserver.headersTimeout = 65000;',
        },
        {
          command: 'Outbound agents',
          description: 'Reuse TCP connections for performance',
          usage: 'import { Agent } from "node:https";\nconst agent = new Agent({ keepAlive: true, maxSockets: 50 });\nawait fetch(url, { agent });',
          example: 'const httpAgent = new (require("http").Agent)({ keepAlive: true });',
        },
        {
          command: 'Caching & ETags',
          description: 'Use 304 responses and immutable assets',
          usage: 'res.setHeader("Cache-Control", "public, max-age=31536000, immutable");\nres.setHeader("ETag", etag(content));',
          example: 'if (req.headers["if-none-match"] === etagValue) return res.writeHead(304).end();',
        },
      ],
    },
    {
      title: 'Express/Fastify Patterns',
      commands: [
        {
          command: 'JSON body & routing',
          description: 'Parse JSON safely and define routes',
          usage: 'app.use(express.json({ limit: "1mb" }));\napp.get("/health", (_req, res) => res.json({ ok: true }));\napp.post("/users", handler);',
          example: 'app.post("/users", (req, res) => {\n  const user = createUser(req.body);\n  res.status(201).json(user);\n});',
        },
        {
          command: 'Async handlers & errors',
          description: 'Forward rejects to error middleware',
          usage: 'const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);\napp.get("/data", wrap(async (req, res) => { res.json(await fetchData()); }));',
          example: 'app.use((err, _req, res, _next) => {\n  console.error(err);\n  res.status(err.status || 500).json({ error: "server_error" });\n});',
        },
        {
          command: 'Security middlewares',
          description: 'Headers, CORS, rate limits, proxy trust',
          usage: 'import helmet from "helmet";\nimport cors from "cors";\nimport rateLimit from "express-rate-limit";\napp.set("trust proxy", 1);\napp.use(helmet());\napp.use(cors({ origin: allowed }));\napp.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));',
          example: 'app.disable("x-powered-by");\napp.use((req, _res, next) => { req.id = crypto.randomUUID(); next(); });',
        },
        {
          command: 'Validation & schemas',
          description: 'Validate inputs before work',
          usage: 'import { z } from "zod";\nconst schema = z.object({ email: z.string().email(), age: z.number().int().min(18) });\nconst data = schema.parse(req.body);',
          example: 'const parseResult = schema.safeParse(req.query);\nif (!parseResult.success) return res.status(400).json({ errors: parseResult.error.flatten() });',
        },
      ],
    },
    {
      title: 'Processes & Workers',
      commands: [
        {
          command: 'spawn vs exec',
          description: 'Use spawn for streams, exec for small buffered output',
          usage: 'import { spawn, execFile } from "node:child_process";\nconst ls = spawn("ls", ["-la"], { stdio: "inherit" });\nconst { stdout } = await execFile("node", ["--version"]);',
          example: 'const ps = spawn("node", ["script.js"], { env: { ...process.env, DEBUG: "1" } });\nps.on("exit", code => console.log("exit", code));',
        },
        {
          command: 'Worker threads',
          description: 'Offload CPU tasks',
          usage: 'import { Worker } from "node:worker_threads";\nnew Worker(new URL("./worker.js", import.meta.url), { workerData: payload });',
          example: '// worker.js\nimport { parentPort, workerData } from "node:worker_threads";\nparentPort.postMessage(doWork(workerData));',
        },
        {
          command: 'Message passing',
          description: 'Use MessageChannel or parentPort',
          usage: 'import { MessageChannel } from "node:worker_threads";\nconst { port1, port2 } = new MessageChannel();\nworker.postMessage({ port: port2 }, [port2]);',
          example: 'parentPort.on("message", msg => { /* handle */ });',
        },
        {
          command: 'Graceful shutdown',
          description: 'Listen for signals and stop accepting work',
          usage: 'process.on("SIGTERM", async () => {\n  server.close(() => process.exit(0));\n});',
          example: 'const ac = new AbortController();\nprocess.on("SIGINT", () => ac.abort());',
        },
      ],
    },
    {
      title: 'Security & Crypto',
      commands: [
        {
          command: 'Hashing & HMAC',
          description: 'Create content hashes or signatures',
          usage: 'import { createHash, createHmac } from "node:crypto";\nconst hash = createHash("sha256").update(data).digest("hex");\nconst sig = createHmac("sha256", secret).update(payload).digest("hex");',
          example: 'if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) throw new Error("invalid signature");',
        },
        {
          command: 'Password storage',
          description: 'Use scrypt/argon2 with random salts',
          usage: 'import { randomBytes, scryptSync } from "node:crypto";\nconst salt = randomBytes(16);\nconst hash = scryptSync(password, salt, 64);',
          example: 'const stored = `${salt.toString("hex")}:${hash.toString("hex")}`;\n// verify by re-running scrypt with stored salt',
        },
        {
          command: 'Random ids & tokens',
          description: 'UUID and secure tokens',
          usage: 'import { randomUUID, randomBytes } from "node:crypto";\nconst id = randomUUID();\nconst token = randomBytes(32).toString("hex");',
          example: 'crypto.randomBytes(16).toString("base64url");',
        },
        {
          command: 'File & input safety',
          description: 'Limit body size and sanitize paths',
          usage: 'app.use(express.json({ limit: "1mb" }));\nconst safe = path.resolve(uploadsDir, filename);\nif (!safe.startsWith(uploadsDir)) throw new Error("invalid path");',
          example: 'if (Buffer.byteLength(JSON.stringify(req.body)) > 1024 * 1024) throw new Error("payload too large");',
        },
      ],
    },
    {
      title: 'Debugging, Testing & Quality',
      commands: [
        {
          command: 'Inspector & breakpoints',
          description: 'Attach DevTools or VS Code',
          usage: 'node --inspect-brk=9229 src/index.mjs\n// open chrome://inspect to attach',
          example: 'debugger; // set breakpoint in code',
        },
        {
          command: 'CPU/heap profiling',
          description: 'Collect performance data',
          usage: 'node --prof server.mjs && node --prof-process isolate-*.log\nnode --heapsnapshot-signal=SIGUSR2 server.mjs',
          example: 'node --trace-gc --trace-deprecation src/index.mjs',
        },
        {
          command: 'Built-in test runner',
          description: 'Use node:test + assert/strict',
          usage: 'node --test\n// example\nimport test from "node:test";\nimport assert from "node:assert/strict";\ntest("adds", () => { assert.equal(1+1, 2); });',
          example: 'node --test --watch',
        },
        {
          command: 'HTTP testing',
          description: 'Supertest or fetch for integration',
          usage: 'import request from "supertest";\nconst app = buildApp();\nawait request(app).get("/health").expect(200);',
          example: 'const res = await fetch(`http://localhost:${port}/health`);\nassert.equal(res.status, 200);',
        },
      ],
    },
    {
      title: 'Packaging & Operations',
      commands: [
        {
          command: 'Build & bundle',
          description: 'Bundle for prod with tsup/esbuild',
          usage: 'npm i -D tsup\n\"scripts\": { \"build\": \"tsup src/index.ts --format esm,cjs --dts\" }',
          example: 'tsup src/index.ts --minify --sourcemap --clean',
        },
        {
          command: 'Docker basics',
          description: 'Small images with node:20-alpine',
          usage: 'FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nCMD [\"node\", \"dist/index.js\"]',
          example: 'docker build -t my-api . && docker run -p 3000:3000 my-api',
        },
        {
          command: 'Process managers',
          description: 'Run with pm2 or systemd for restarts',
          usage: 'pm2 start dist/index.js --name api --max-memory-restart 400M',
          example: '[Service]\nExecStart=/usr/bin/node /srv/app/dist/index.js\nRestart=always',
        },
        {
          command: 'Observability',
          description: 'Logs, metrics, tracing hooks',
          usage: 'import pino from "pino";\nconst log = pino({ level: process.env.LOG_LEVEL || "info" });\n// metrics with prom-client, tracing with OpenTelemetry',
          example: 'log.info({ reqId, route }, "request completed");',
        },
      ],
    },
    {
      title: 'Core Modules - Detailed',
      commands: [
        {
          command: 'fs - File System',
          description: 'Complete file operations',
          usage: 'import fs from "node:fs/promises"',
          example: '// Read file\nconst data = await fs.readFile("file.txt", "utf8");\n// Write file\nawait fs.writeFile("output.txt", "content");\n// Append file\nawait fs.appendFile("log.txt", "new line\\n");\n// Check if exists\nconst exists = await fs.access("file.txt").then(() => true).catch(() => false);\n// Delete file\nawait fs.unlink("file.txt");\n// Read directory\nconst files = await fs.readdir("./dir");\n// Get stats\nconst stats = await fs.stat("file.txt");\nconsole.log(stats.isFile(), stats.size, stats.mtime);',
        },
        {
          command: 'path - Path Utilities',
          description: 'Path manipulation',
          usage: 'import path from "node:path"',
          example: 'path.join("/foo", "bar", "baz"); // /foo/bar/baz\npath.resolve("foo", "bar"); // absolute path\npath.dirname("/foo/bar/file.txt"); // /foo/bar\npath.basename("/foo/bar/file.txt"); // file.txt\npath.extname("file.txt"); // .txt\npath.parse("/foo/bar/file.txt"); // { root, dir, base, name, ext }',
        },
        {
          command: 'url - URL Parsing',
          description: 'URL manipulation',
          usage: 'import { URL, URLSearchParams } from "node:url"',
          example: 'const url = new URL("https://example.com/path?q=test");\nconsole.log(url.hostname, url.pathname, url.search);\nconst params = new URLSearchParams(url.search);\nparams.get("q"); // "test"\nparams.set("page", "1");\nparams.toString(); // "q=test&page=1"',
        },
        {
          command: 'events - Event Emitter',
          description: 'Event-driven programming',
          usage: 'import { EventEmitter } from "node:events"',
          example: 'class MyEmitter extends EventEmitter {}\nconst emitter = new MyEmitter();\nemitter.on("event", (data) => console.log(data));\nemitter.once("event", () => console.log("once"));\nemitter.emit("event", "data");\nemitter.removeListener("event", handler);\nemitter.removeAllListeners("event");',
        },
        {
          command: 'stream - Streams',
          description: 'Streaming data',
          usage: 'import { Readable, Writable, Transform, pipeline } from "node:stream"',
          example: '// Readable stream\nconst readable = new Readable({\n  read() { this.push("chunk"); this.push(null); }\n});\n// Writable stream\nconst writable = new Writable({\n  write(chunk, enc, cb) { console.log(chunk.toString()); cb(); }\n});\n// Transform stream\nconst transform = new Transform({\n  transform(chunk, enc, cb) { this.push(chunk.toString().toUpperCase()); cb(); }\n});\nreadable.pipe(transform).pipe(writable);',
        },
        {
          command: 'util - Utilities',
          description: 'Utility functions',
          usage: 'import util from "node:util"',
          example: 'util.promisify(fs.readFile);\nutil.inherits(Child, Parent);\nutil.inspect(obj, { depth: 2, colors: true });\nutil.format("%s %d", "hello", 42);\nutil.isDeepStrictEqual(obj1, obj2);',
        },
        {
          command: 'os - Operating System',
          description: 'OS information',
          usage: 'import os from "node:os"',
          example: 'os.platform(); // "linux", "darwin", "win32"\nos.arch(); // "x64", "arm64"\nos.cpus(); // CPU info\nos.totalmem(); // Total memory\nos.freemem(); // Free memory\nos.homedir(); // Home directory\nos.hostname(); // Hostname\nos.tmpdir(); // Temp directory',
        },
        {
          command: 'crypto - Cryptography',
          description: 'Cryptographic functions',
          usage: 'import crypto from "node:crypto"',
          example: '// Hash\nconst hash = crypto.createHash("sha256").update("data").digest("hex");\n// HMAC\nconst hmac = crypto.createHmac("sha256", "secret").update("data").digest("hex");\n// Random\nconst random = crypto.randomBytes(32);\nconst uuid = crypto.randomUUID();\n// Cipher\nconst cipher = crypto.createCipheriv("aes-256-gcm", key, iv);\n// Decipher\nconst decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);',
        },
        {
          command: 'buffer - Buffers',
          description: 'Binary data handling',
          usage: 'import { Buffer } from "node:buffer"',
          example: 'const buf1 = Buffer.from("hello", "utf8");\nconst buf2 = Buffer.alloc(10);\nconst buf3 = Buffer.allocUnsafe(10);\nbuf1.toString("hex");\nbuf1.toString("base64");\nBuffer.concat([buf1, buf2]);\nBuffer.isBuffer(buf1);\nbuf1.compare(buf2);',
        },
        {
          command: 'querystring - Query String',
          description: 'Parse and stringify query strings',
          usage: 'import querystring from "node:querystring"',
          example: 'querystring.parse("foo=bar&baz=qux"); // { foo: "bar", baz: "qux" }\nquerystring.stringify({ foo: "bar", baz: "qux" }); // "foo=bar&baz=qux"\nquerystring.escape("hello world"); // "hello%20world"\nquerystring.unescape("hello%20world"); // "hello world"',
        },
      ],
    },
    {
      title: 'Advanced Streams',
      commands: [
        {
          command: 'Readable Stream',
          description: 'Create readable stream',
          usage: 'import { Readable } from "node:stream"',
          example: 'const readable = new Readable({\n  objectMode: true,\n  read() {\n    this.push({ data: "chunk" });\n    if (done) this.push(null);\n  }\n});\nreadable.on("data", (chunk) => console.log(chunk));\nreadable.on("end", () => console.log("done"));',
        },
        {
          command: 'Writable Stream',
          description: 'Create writable stream',
          usage: 'import { Writable } from "node:stream"',
          example: 'const writable = new Writable({\n  write(chunk, encoding, callback) {\n    console.log(chunk.toString());\n    callback();\n  },\n  final(callback) {\n    console.log("finished");\n    callback();\n  }\n});',
        },
        {
          command: 'Transform Stream',
          description: 'Create transform stream',
          usage: 'import { Transform } from "node:stream"',
          example: 'const transform = new Transform({\n  transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  }\n});',
        },
        {
          command: 'Duplex Stream',
          description: 'Create duplex stream',
          usage: 'import { Duplex } from "node:stream"',
          example: 'const duplex = new Duplex({\n  read() { this.push("read"); this.push(null); },\n  write(chunk, enc, cb) { console.log(chunk.toString()); cb(); }\n});',
        },
        {
          command: 'Stream Events',
          description: 'Handle stream events',
          usage: 'stream.on("event", handler)',
          example: 'stream.on("data", (chunk) => {});\nstream.on("end", () => {});\nstream.on("error", (err) => {});\nstream.on("close", () => {});\nstream.on("drain", () => {});\nstream.on("finish", () => {});',
        },
        {
          command: 'Backpressure',
          description: 'Handle backpressure',
          usage: 'writable.write() returns boolean',
          example: 'function write(data) {\n  if (!writable.write(data)) {\n    writable.once("drain", () => write(data));\n  }\n}',
        },
      ],
    },
    {
      title: 'Child Processes - Advanced',
      commands: [
        {
          command: 'spawn',
          description: 'Spawn child process',
          usage: 'import { spawn } from "node:child_process"',
          example: 'const child = spawn("node", ["script.js"], {\n  stdio: ["inherit", "pipe", "pipe"],\n  env: { ...process.env, NODE_ENV: "production" }\n});\nchild.stdout.on("data", (data) => console.log(data.toString()));\nchild.stderr.on("data", (data) => console.error(data.toString()));\nchild.on("close", (code) => console.log(`Exited with code ${code}`));',
        },
        {
          command: 'exec',
          description: 'Execute command',
          usage: 'import { exec } from "node:child_process"',
          example: 'exec("ls -la", (error, stdout, stderr) => {\n  if (error) console.error(error);\n  console.log(stdout);\n});',
        },
        {
          command: 'execFile',
          description: 'Execute file',
          usage: 'import { execFile } from "node:child_process"',
          example: 'execFile("node", ["--version"], (error, stdout) => {\n  if (error) throw error;\n  console.log(stdout);\n});',
        },
        {
          command: 'fork',
          description: 'Fork Node.js process',
          usage: 'import { fork } from "node:child_process"',
          example: 'const child = fork("worker.js", ["arg1"], {\n  silent: true,\n  execArgv: ["--inspect"]\n});\nchild.send({ message: "hello" });\nchild.on("message", (msg) => console.log(msg));',
        },
      ],
    },
    {
      title: 'Worker Threads - Advanced',
      commands: [
        {
          command: 'Create Worker',
          description: 'Create worker thread',
          usage: 'import { Worker } from "node:worker_threads"',
          example: 'const worker = new Worker(new URL("./worker.js", import.meta.url), {\n  workerData: { start: 0, end: 1000 },\n  execArgv: []\n});\nworker.on("message", (result) => console.log(result));\nworker.on("error", (err) => console.error(err));\nworker.on("exit", (code) => console.log(`Worker exited with code ${code}`));',
        },
        {
          command: 'Worker Communication',
          description: 'Send messages to worker',
          usage: 'worker.postMessage(data)',
          example: 'worker.postMessage({ type: "start", data: payload });\nworker.postMessage({ type: "stop" }, [transferList]);',
        },
        {
          command: 'SharedArrayBuffer',
          description: 'Share memory between threads',
          usage: 'new SharedArrayBuffer(size)',
          example: 'const sab = new SharedArrayBuffer(1024);\nconst worker = new Worker("./worker.js", {\n  workerData: { sharedBuffer: sab }\n});',
        },
        {
          command: 'Worker Pool',
          description: 'Create worker pool',
          usage: 'Multiple workers',
          example: 'class WorkerPool {\n  constructor(size, workerFile) {\n    this.workers = [];\n    for (let i = 0; i < size; i++) {\n      this.workers.push(new Worker(workerFile));\n    }\n  }\n  async execute(data) {\n    const worker = this.getAvailableWorker();\n    return new Promise((resolve, reject) => {\n      worker.once("message", resolve);\n      worker.once("error", reject);\n      worker.postMessage(data);\n    });\n  }\n}',
        },
      ],
    },
    {
      title: 'HTTP/HTTPS - Advanced',
      commands: [
        {
          command: 'HTTP Server',
          description: 'Create HTTP server',
          usage: 'import http from "node:http"',
          example: 'const server = http.createServer((req, res) => {\n  res.writeHead(200, {\n    "Content-Type": "application/json",\n    "Access-Control-Allow-Origin": "*"\n  });\n  res.end(JSON.stringify({ message: "Hello" }));\n});\nserver.listen(3000, "0.0.0.0", () => {\n  console.log("Server listening");\n});',
        },
        {
          command: 'HTTP Client',
          description: 'Make HTTP requests',
          usage: 'http.request(options, callback)',
          example: 'const req = http.request({\n  hostname: "example.com",\n  port: 80,\n  path: "/api",\n  method: "GET"\n}, (res) => {\n  let data = "";\n  res.on("data", (chunk) => data += chunk);\n  res.on("end", () => console.log(JSON.parse(data)));\n});\nreq.end();',
        },
        {
          command: 'HTTPS Server',
          description: 'Create HTTPS server',
          usage: 'import https from "node:https"',
          example: 'const https = require("https");\nconst fs = require("fs");\nconst options = {\n  key: fs.readFileSync("key.pem"),\n  cert: fs.readFileSync("cert.pem")\n};\nconst server = https.createServer(options, handler);',
        },
        {
          command: 'Server Events',
          description: 'Handle server events',
          usage: 'server.on("event", handler)',
          example: 'server.on("request", (req, res) => {});\nserver.on("connection", (socket) => {});\nserver.on("error", (err) => {});\nserver.on("close", () => {});',
        },
      ],
    },
    {
      title: 'Process - Advanced',
      commands: [
        {
          command: 'Process Info',
          description: 'Get process information',
          usage: 'process.*',
          example: 'process.pid; // Process ID\nprocess.ppid; // Parent process ID\nprocess.platform; // Platform\nprocess.arch; // Architecture\nprocess.versions; // Versions\nprocess.memoryUsage(); // Memory usage\nprocess.cpuUsage(); // CPU usage\nprocess.uptime(); // Uptime',
        },
        {
          command: 'Process Events',
          description: 'Handle process events',
          usage: 'process.on("event", handler)',
          example: 'process.on("exit", (code) => {});\nprocess.on("uncaughtException", (err) => {});\nprocess.on("unhandledRejection", (reason, promise) => {});\nprocess.on("SIGTERM", () => {});\nprocess.on("SIGINT", () => {});',
        },
        {
          command: 'Process Methods',
          description: 'Process control methods',
          usage: 'process.*()',
          example: 'process.exit(0);\nprocess.kill(pid, "SIGTERM");\nprocess.nextTick(() => {});\nprocess.chdir("/path");\nprocess.cwd(); // Current working directory',
        },
        {
          command: 'Environment Variables',
          description: 'Access environment',
          usage: 'process.env',
          example: 'process.env.NODE_ENV;\nprocess.env.PORT;\nprocess.env.DATABASE_URL;',
        },
      ],
    },
    {
      title: 'Timers - Advanced',
      commands: [
        {
          command: 'setTimeout',
          description: 'Execute after delay',
          usage: 'setTimeout(callback, delay, ...args)',
          example: 'const timer = setTimeout(() => {\n  console.log("Delayed");\n}, 1000);\nclearTimeout(timer);',
        },
        {
          command: 'setInterval',
          description: 'Execute repeatedly',
          usage: 'setInterval(callback, delay, ...args)',
          example: 'const interval = setInterval(() => {\n  console.log("Repeating");\n}, 1000);\nclearInterval(interval);',
        },
        {
          command: 'setImmediate',
          description: 'Execute on next tick',
          usage: 'setImmediate(callback, ...args)',
          example: 'setImmediate(() => {\n  console.log("Immediate");\n});',
        },
        {
          command: 'Promise-based Timers',
          description: 'Use timers with promises',
          usage: 'util.promisify or custom',
          example: 'const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));\nawait sleep(1000);',
        },
      ],
    },
    {
      title: 'Performance & Optimization',
      commands: [
        {
          command: 'Cluster Module',
          description: 'Create cluster',
          usage: 'import cluster from "node:cluster"',
          example: 'if (cluster.isPrimary) {\n  const numCPUs = require("os").cpus().length;\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n  cluster.on("exit", (worker) => {\n    console.log(`Worker ${worker.process.pid} died`);\n    cluster.fork();\n  });\n} else {\n  // Worker code\n  require("./server.js");\n}',
        },
        {
          command: 'Performance Hooks',
          description: 'Monitor performance',
          usage: 'import { performance } from "node:perf_hooks"',
          example: 'const { performance, PerformanceObserver } = require("perf_hooks");\nconst obs = new PerformanceObserver((list) => {\n  console.log(list.getEntries());\n});\nobs.observe({ entryTypes: ["measure"] });\nperformance.mark("start");\n// ... do work\nperformance.mark("end");\nperformance.measure("duration", "start", "end");',
        },
        {
          command: 'Memory Management',
          description: 'Manage memory',
          usage: 'v8 module',
          example: 'const v8 = require("v8");\nv8.setFlagsFromString("--max-old-space-size=4096");\nconst heapStats = v8.getHeapStatistics();\nconsole.log(heapStats);',
        },
      ],
    },
  ],
};
