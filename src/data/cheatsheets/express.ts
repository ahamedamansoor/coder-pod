import { Zap } from 'lucide-react';

export const expressCheatsheet = {
    id: 'express',
    name: 'Express.js',
    description: 'Complete Express.js reference: routing, middleware, Express 5.0 features, and best practices',
    icon: Zap,
    colorTheme: 'blue' as const,
    sections: [
        {
            title: 'Installation & Setup',
            commands: [
                {
                    command: 'Install Express',
                    description: 'Install Express.js',
                    usage: 'npm install express',
                    example: 'npm install express\n# Install with TypeScript types\nnpm install express @types/express @types/node',
                },
                {
                    command: 'Basic App Setup',
                    description: 'Create basic Express application',
                    usage: 'const express = require("express");\nconst app = express();',
                    example: 'const express = require("express");\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});',
                },
                {
                    command: 'ES Modules Setup',
                    description: 'Express with ES modules',
                    usage: 'import express from "express";',
                    example: '// package.json: { "type": "module" }\nimport express from "express";\nconst app = express();',
                },
                {
                    command: 'TypeScript Setup',
                    description: 'Express with TypeScript',
                    usage: 'import express, { Request, Response } from "express";',
                    example: 'import express, { Request, Response, NextFunction } from "express";\nconst app = express();\n\napp.get("/", (req: Request, res: Response) => {\n  res.send("Hello");\n});',
                },
            ],
        },
        {
            title: 'Routing Basics',
            commands: [
                {
                    command: 'GET Route',
                    description: 'Handle GET requests',
                    usage: 'app.get(path, handler)',
                    example: 'app.get("/", (req, res) => {\n  res.send("Hello World");\n});',
                },
                {
                    command: 'POST Route',
                    description: 'Handle POST requests',
                    usage: 'app.post(path, handler)',
                    example: 'app.post("/users", (req, res) => {\n  res.status(201).json({ id: 1, name: "John" });\n});',
                },
                {
                    command: 'PUT Route',
                    description: 'Handle PUT requests',
                    usage: 'app.put(path, handler)',
                    example: 'app.put("/users/:id", (req, res) => {\n  res.json({ message: "User updated" });\n});',
                },
                {
                    command: 'PATCH Route',
                    description: 'Handle PATCH requests',
                    usage: 'app.patch(path, handler)',
                    example: 'app.patch("/users/:id", (req, res) => {\n  res.json({ message: "User partially updated" });\n});',
                },
                {
                    command: 'DELETE Route',
                    description: 'Handle DELETE requests',
                    usage: 'app.delete(path, handler)',
                    example: 'app.delete("/users/:id", (req, res) => {\n  res.status(204).send();\n});',
                },
                {
                    command: 'All Methods',
                    description: 'Handle all HTTP methods',
                    usage: 'app.all(path, handler)',
                    example: 'app.all("/api/*", (req, res, next) => {\n  console.log("All methods");\n  next();\n});',
                },
                {
                    command: 'Route Chaining',
                    description: 'Chain multiple handlers',
                    usage: 'app.route(path).get().post().put()',
                    example: 'app.route("/users/:id")\n  .get((req, res) => res.json({ user: "get" }))\n  .put((req, res) => res.json({ user: "put" }))\n  .delete((req, res) => res.json({ user: "delete" }));',
                },
            ],
        },
        {
            title: 'Route Parameters',
            commands: [
                {
                    command: 'URL Parameters',
                    description: 'Extract URL parameters',
                    usage: 'app.get("/users/:id", handler)',
                    example: 'app.get("/users/:id", (req, res) => {\n  const userId = req.params.id;\n  res.json({ userId });\n});',
                },
                {
                    command: 'Multiple Parameters',
                    description: 'Multiple URL parameters',
                    usage: 'app.get("/users/:userId/posts/:postId")',
                    example: 'app.get("/users/:userId/posts/:postId", (req, res) => {\n  const { userId, postId } = req.params;\n  res.json({ userId, postId });\n});',
                },
                {
                    command: 'Optional Parameters',
                    description: 'Optional route parameters',
                    usage: 'app.get("/users/:id?")',
                    example: 'app.get("/users/:id?", (req, res) => {\n  if (req.params.id) {\n    res.json({ user: req.params.id });\n  } else {\n    res.json({ users: "all" });\n  }\n});',
                },
                {
                    command: 'Query Parameters',
                    description: 'Access query string parameters',
                    usage: 'req.query',
                    example: 'app.get("/search", (req, res) => {\n  const { q, page, limit } = req.query;\n  res.json({ query: q, page, limit });\n});\n// /search?q=express&page=1&limit=10',
                },
                {
                    command: 'Wildcard Routes',
                    description: 'Match multiple segments',
                    usage: 'app.get("/files/*")',
                    example: 'app.get("/files/*", (req, res) => {\n  const filePath = req.params[0];\n  res.send(`File: ${filePath}`);\n});',
                },
                {
                    command: 'Regex Routes',
                    description: 'Use regex in routes',
                    usage: 'app.get(/^\/users\/(\d+)$/, handler)',
                    example: 'app.get(/^\/users\/(\\d+)$/, (req, res) => {\n  const userId = req.params[0];\n  res.json({ userId });\n});',
                },
            ],
        },
        {
            title: 'Request Object',
            commands: [
                {
                    command: 'req.body',
                    description: 'Request body (requires middleware)',
                    usage: 'req.body',
                    example: 'app.use(express.json());\napp.post("/users", (req, res) => {\n  const { name, email } = req.body;\n  res.json({ name, email });\n});',
                },
                {
                    command: 'req.params',
                    description: 'URL parameters',
                    usage: 'req.params',
                    example: 'app.get("/users/:id", (req, res) => {\n  const id = req.params.id;\n});',
                },
                {
                    command: 'req.query',
                    description: 'Query string parameters',
                    usage: 'req.query',
                    example: 'app.get("/search", (req, res) => {\n  const searchTerm = req.query.q;\n});',
                },
                {
                    command: 'req.headers',
                    description: 'HTTP headers',
                    usage: 'req.headers',
                    example: 'const authHeader = req.headers.authorization;\nconst userAgent = req.headers["user-agent"];',
                },
                {
                    command: 'req.cookies',
                    description: 'Cookies (requires cookie-parser)',
                    usage: 'req.cookies',
                    example: 'const cookieParser = require("cookie-parser");\napp.use(cookieParser());\napp.get("/", (req, res) => {\n  const token = req.cookies.token;\n});',
                },
                {
                    command: 'req.ip',
                    description: 'Client IP address',
                    usage: 'req.ip',
                    example: 'app.set("trust proxy", true);\napp.get("/", (req, res) => {\n  const clientIP = req.ip;\n});',
                },
                {
                    command: 'req.path',
                    description: 'Request path',
                    usage: 'req.path',
                    example: 'app.use((req, res, next) => {\n  console.log(`Path: ${req.path}`);\n  next();\n});',
                },
                {
                    command: 'req.method',
                    description: 'HTTP method',
                    usage: 'req.method',
                    example: 'app.use((req, res, next) => {\n  console.log(`Method: ${req.method}`);\n  next();\n});',
                },
                {
                    command: 'req.url',
                    description: 'Request URL',
                    usage: 'req.url',
                    example: 'app.use((req, res, next) => {\n  console.log(`URL: ${req.url}`);\n  next();\n});',
                },
                {
                    command: 'req.originalUrl',
                    description: 'Original URL before routing',
                    usage: 'req.originalUrl',
                    example: 'app.use("/api", router);\n// In router: req.originalUrl includes /api',
                },
            ],
        },
        {
            title: 'Response Object',
            commands: [
                {
                    command: 'res.send()',
                    description: 'Send response',
                    usage: 'res.send(body)',
                    example: 'res.send("Hello");\nres.send({ message: "OK" });\nres.send(Buffer.from("data"));',
                },
                {
                    command: 'res.json()',
                    description: 'Send JSON response',
                    usage: 'res.json(object)',
                    example: 'res.json({ success: true, data: users });',
                },
                {
                    command: 'res.status()',
                    description: 'Set status code',
                    usage: 'res.status(code)',
                    example: 'res.status(404).json({ error: "Not found" });\nres.status(201).send("Created");',
                },
                {
                    command: 'res.sendStatus()',
                    description: 'Send status code with message',
                    usage: 'res.sendStatus(code)',
                    example: 'res.sendStatus(200); // Sends "OK"\nres.sendStatus(404); // Sends "Not Found"',
                },
                {
                    command: 'res.redirect()',
                    description: 'Redirect to URL',
                    usage: 'res.redirect(url)',
                    example: 'res.redirect("/login");\nres.redirect(301, "/new-url");\nres.redirect("https://example.com");',
                },
                {
                    command: 'res.render()',
                    description: 'Render template',
                    usage: 'res.render(view, locals)',
                    example: 'app.set("view engine", "ejs");\nres.render("index", { title: "Home", users });',
                },
                {
                    command: 'res.sendFile()',
                    description: 'Send file',
                    usage: 'res.sendFile(path)',
                    example: 'const path = require("path");\nres.sendFile(path.join(__dirname, "public", "index.html"));',
                },
                {
                    command: 'res.download()',
                    description: 'Download file',
                    usage: 'res.download(path, filename)',
                    example: 'res.download("/path/to/file.pdf", "document.pdf");',
                },
                {
                    command: 'res.set()',
                    description: 'Set response header',
                    usage: 'res.set(field, value)',
                    example: 'res.set("Content-Type", "text/plain");\nres.set({\n  "Content-Type": "application/json",\n  "X-Custom": "value"\n});',
                },
                {
                    command: 'res.cookie()',
                    description: 'Set cookie',
                    usage: 'res.cookie(name, value, options)',
                    example: 'res.cookie("token", "abc123", {\n  maxAge: 3600000,\n  httpOnly: true,\n  secure: true\n});',
                },
                {
                    command: 'res.clearCookie()',
                    description: 'Clear cookie',
                    usage: 'res.clearCookie(name)',
                    example: 'res.clearCookie("token");',
                },
                {
                    command: 'res.end()',
                    description: 'End response',
                    usage: 'res.end()',
                    example: 'res.status(204).end();',
                },
            ],
        },
        {
            title: 'Middleware',
            commands: [
                {
                    command: 'Basic Middleware',
                    description: 'Create middleware function',
                    usage: 'app.use((req, res, next) => {})',
                    example: 'app.use((req, res, next) => {\n  console.log(`${req.method} ${req.path}`);\n  next();\n});',
                },
                {
                    command: 'Path-Specific Middleware',
                    description: 'Apply middleware to specific path',
                    usage: 'app.use("/path", middleware)',
                    example: 'app.use("/api", (req, res, next) => {\n  console.log("API request");\n  next();\n});',
                },
                {
                    command: 'Multiple Middleware',
                    description: 'Chain multiple middleware',
                    usage: 'app.use(middleware1, middleware2, middleware3)',
                    example: 'app.use(logger, auth, cors);',
                },
                {
                    command: 'Route-Level Middleware',
                    description: 'Middleware for specific route',
                    usage: 'app.get("/path", middleware, handler)',
                    example: 'const auth = (req, res, next) => {\n  if (req.headers.authorization) next();\n  else res.status(401).send("Unauthorized");\n};\napp.get("/protected", auth, (req, res) => {\n  res.send("Protected content");\n});',
                },
                {
                    command: 'Error Handling Middleware',
                    description: 'Handle errors',
                    usage: 'app.use((err, req, res, next) => {})',
                    example: 'app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: "Something went wrong" });\n});',
                },
                {
                    command: 'Async Middleware',
                    description: 'Handle async operations',
                    usage: 'const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)',
                    example: 'const asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get("/users", asyncHandler(async (req, res) => {\n  const users = await getUsers();\n  res.json(users);\n}));',
                },
            ],
        },
        {
            title: 'Built-in Middleware',
            commands: [
                {
                    command: 'express.json()',
                    description: 'Parse JSON bodies',
                    usage: 'app.use(express.json())',
                    example: 'app.use(express.json());\napp.use(express.json({ limit: "10mb" }));\napp.use(express.json({ strict: true }));',
                },
                {
                    command: 'express.urlencoded()',
                    description: 'Parse URL-encoded bodies',
                    usage: 'app.use(express.urlencoded())',
                    example: 'app.use(express.urlencoded({ extended: true }));\napp.use(express.urlencoded({ extended: false }));',
                },
                {
                    command: 'express.static()',
                    description: 'Serve static files',
                    usage: 'app.use(express.static(directory))',
                    example: 'app.use(express.static("public"));\napp.use("/static", express.static("public"));\napp.use(express.static("public", { maxAge: "1d" }));',
                },
                {
                    command: 'express.text()',
                    description: 'Parse text bodies',
                    usage: 'app.use(express.text())',
                    example: 'app.use(express.text({ type: "text/plain" }));',
                },
                {
                    command: 'express.raw()',
                    description: 'Parse raw bodies',
                    usage: 'app.use(express.raw())',
                    example: 'app.use(express.raw({ type: "application/octet-stream" }));',
                },
            ],
        },
        {
            title: 'Router',
            commands: [
                {
                    command: 'Create Router',
                    description: 'Create modular router',
                    usage: 'const router = express.Router()',
                    example: 'const express = require("express");\nconst router = express.Router();',
                },
                {
                    command: 'Define Routes',
                    description: 'Define routes on router',
                    usage: 'router.get("/", handler)',
                    example: 'router.get("/", (req, res) => {\n  res.json({ message: "Users" });\n});\nrouter.post("/", (req, res) => {\n  res.json({ message: "Create user" });\n});',
                },
                {
                    command: 'Mount Router',
                    description: 'Mount router to app',
                    usage: 'app.use("/path", router)',
                    example: 'const userRouter = require("./routes/users");\napp.use("/users", userRouter);',
                },
                {
                    command: 'Router Middleware',
                    description: 'Apply middleware to router',
                    usage: 'router.use(middleware)',
                    example: 'router.use((req, res, next) => {\n  console.log("Router middleware");\n  next();\n});',
                },
                {
                    command: 'Nested Routers',
                    description: 'Mount router on another router',
                    usage: 'router.use("/path", nestedRouter)',
                    example: 'const postsRouter = require("./posts");\nuserRouter.use("/:userId/posts", postsRouter);',
                },
                {
                    command: 'Router Parameters',
                    description: 'Handle parameters in router',
                    usage: 'router.param(name, handler)',
                    example: 'router.param("id", (req, res, next, id) => {\n  req.user = getUserById(id);\n  next();\n});\nrouter.get("/:id", (req, res) => {\n  res.json(req.user);\n});',
                },
            ],
        },
        {
            title: 'Template Engines',
            commands: [
                {
                    command: 'EJS Setup',
                    description: 'Configure EJS template engine',
                    usage: 'app.set("view engine", "ejs")',
                    example: 'npm install ejs\napp.set("view engine", "ejs");\napp.set("views", "./views");\napp.get("/", (req, res) => {\n  res.render("index", { title: "Home" });\n});',
                },
                {
                    command: 'Pug Setup',
                    description: 'Configure Pug template engine',
                    usage: 'app.set("view engine", "pug")',
                    example: 'npm install pug\napp.set("view engine", "pug");\napp.set("views", "./views");',
                },
                {
                    command: 'Handlebars Setup',
                    description: 'Configure Handlebars',
                    usage: 'app.engine("hbs", handlebars)',
                    example: 'npm install express-handlebars\nconst exphbs = require("express-handlebars");\napp.engine("hbs", exphbs({ extname: ".hbs" }));\napp.set("view engine", "hbs");',
                },
            ],
        },
        {
            title: 'Error Handling',
            commands: [
                {
                    command: 'Error Middleware',
                    description: 'Catch errors',
                    usage: 'app.use((err, req, res, next) => {})',
                    example: 'app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({\n    error: err.message || "Internal Server Error"\n  });\n});',
                },
                {
                    command: 'Async Error Handling',
                    description: 'Handle async errors',
                    usage: 'Wrap async handlers',
                    example: 'const asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get("/users", asyncHandler(async (req, res) => {\n  const users = await getUsers();\n  res.json(users);\n}));',
                },
                {
                    command: 'Custom Error Class',
                    description: 'Create custom errors',
                    usage: 'class AppError extends Error',
                    example: 'class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\napp.get("/error", (req, res, next) => {\n  throw new AppError("Not found", 404);\n});',
                },
                {
                    command: '404 Handler',
                    description: 'Handle 404 errors',
                    usage: 'app.use((req, res) => {})',
                    example: 'app.use((req, res) => {\n  res.status(404).json({ error: "Route not found" });\n});',
                },
            ],
        },
        {
            title: 'Security Middleware',
            commands: [
                {
                    command: 'Helmet',
                    description: 'Set security headers',
                    usage: 'app.use(helmet())',
                    example: 'npm install helmet\nconst helmet = require("helmet");\napp.use(helmet());',
                },
                {
                    command: 'CORS',
                    description: 'Enable CORS',
                    usage: 'app.use(cors())',
                    example: 'npm install cors\nconst cors = require("cors");\napp.use(cors());\napp.use(cors({ origin: "https://example.com" }));',
                },
                {
                    command: 'Rate Limiting',
                    description: 'Limit request rate',
                    usage: 'app.use(rateLimit())',
                    example: 'npm install express-rate-limit\nconst rateLimit = require("express-rate-limit");\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100\n});\napp.use("/api/", limiter);',
                },
                {
                    command: 'Express Validator',
                    description: 'Validate and sanitize input',
                    usage: 'const { body, validationResult } = require("express-validator")',
                    example: 'npm install express-validator\nconst { body, validationResult } = require("express-validator");\napp.post("/users", [\n  body("email").isEmail(),\n  body("password").isLength({ min: 6 })\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // Process request\n});',
                },
                {
                    command: 'mongo-sanitize',
                    description: 'Sanitize MongoDB queries',
                    usage: 'app.use(mongoSanitize())',
                    example: 'npm install express-mongo-sanitize\nconst mongoSanitize = require("express-mongo-sanitize");\napp.use(mongoSanitize());',
                },
                {
                    command: 'xss-clean',
                    description: 'Prevent XSS attacks',
                    usage: 'app.use(xss())',
                    example: 'npm install xss-clean\nconst xss = require("xss-clean");\napp.use(xss());',
                },
            ],
        },
        {
            title: 'File Upload',
            commands: [
                {
                    command: 'Multer Setup',
                    description: 'Handle file uploads',
                    usage: 'const multer = require("multer")',
                    example: 'npm install multer\nconst multer = require("multer");\nconst upload = multer({ dest: "uploads/" });\napp.post("/upload", upload.single("file"), (req, res) => {\n  res.json({ file: req.file });\n});',
                },
                {
                    command: 'Single File Upload',
                    description: 'Upload single file',
                    usage: 'upload.single("fieldname")',
                    example: 'const upload = multer({ dest: "uploads/" });\napp.post("/upload", upload.single("avatar"), (req, res) => {\n  res.json({ filename: req.file.filename });\n});',
                },
                {
                    command: 'Multiple Files',
                    description: 'Upload multiple files',
                    usage: 'upload.array("fieldname", maxCount)',
                    example: 'app.post("/upload", upload.array("photos", 10), (req, res) => {\n  res.json({ files: req.files });\n});',
                },
                {
                    command: 'Custom Storage',
                    description: 'Custom file storage',
                    usage: 'multer.diskStorage(options)',
                    example: 'const storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, "uploads/");\n  },\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + "-" + file.originalname);\n  }\n});\nconst upload = multer({ storage });',
                },
            ],
        },
        {
            title: 'Session Management',
            commands: [
                {
                    command: 'express-session',
                    description: 'Session middleware',
                    usage: 'app.use(session(options))',
                    example: 'npm install express-session\nconst session = require("express-session");\napp.use(session({\n  secret: "your-secret-key",\n  resave: false,\n  saveUninitialized: false,\n  cookie: { secure: true }\n}));',
                },
                {
                    command: 'Session Store',
                    description: 'Use session store',
                    usage: 'connect-redis or connect-mongo',
                    example: 'npm install connect-redis redis\nconst RedisStore = require("connect-redis")(session);\napp.use(session({\n  store: new RedisStore({ client: redisClient }),\n  secret: "secret"\n}));',
                },
                {
                    command: 'Access Session',
                    description: 'Access session data',
                    usage: 'req.session',
                    example: 'app.post("/login", (req, res) => {\n  req.session.userId = user.id;\n  res.json({ success: true });\n});\napp.get("/profile", (req, res) => {\n  const userId = req.session.userId;\n  res.json({ userId });\n});',
                },
            ],
        },
        {
            title: 'Express 5.0 Features',
            commands: [
                {
                    command: 'Promise-Based Handlers',
                    description: 'Native promise support',
                    usage: 'Async handlers without wrapper',
                    example: 'app.get("/users", async (req, res) => {\n  const users = await getUsers();\n  res.json(users);\n});\n// Errors automatically caught',
                },
                {
                    command: 'Router Improvements',
                    description: 'Enhanced router capabilities',
                    usage: 'Better async support',
                    example: 'router.get("/", async (req, res) => {\n  const data = await fetchData();\n  res.json(data);\n});',
                },
                {
                    command: 'Improved Error Handling',
                    description: 'Better error propagation',
                    usage: 'Automatic error catching',
                    example: 'app.get("/error", async (req, res) => {\n  throw new Error("Test");\n  // Automatically caught by error handler\n});',
                },
            ],
        },
        {
            title: 'Best Practices',
            commands: [
                {
                    command: 'Environment Variables',
                    description: 'Use environment variables',
                    usage: 'process.env',
                    example: 'const PORT = process.env.PORT || 3000;\nconst NODE_ENV = process.env.NODE_ENV || "development";',
                },
                {
                    command: 'Structured Logging',
                    description: 'Use logging library',
                    usage: 'winston or pino',
                    example: 'npm install winston\nconst winston = require("winston");\nconst logger = winston.createLogger({\n  level: "info",\n  format: winston.format.json()\n});',
                },
                {
                    command: 'Error Handling',
                    description: 'Centralized error handling',
                    usage: 'Error middleware',
                    example: 'app.use((err, req, res, next) => {\n  logger.error(err);\n  res.status(err.status || 500).json({\n    error: NODE_ENV === "production" ? "Internal error" : err.message\n  });\n});',
                },
                {
                    command: 'Code Organization',
                    description: 'Organize code structure',
                    usage: 'Separate routes, controllers, services',
                    example: 'routes/\n  users.js\n  posts.js\ncontrollers/\n  userController.js\nservices/\n  userService.js',
                },
                {
                    command: 'Validation',
                    description: 'Validate all inputs',
                    usage: 'express-validator or joi',
                    example: 'const { body, param, query } = require("express-validator");\napp.post("/users", [\n  body("email").isEmail(),\n  body("name").notEmpty()\n], handler);',
                },
                {
                    command: 'Security Headers',
                    description: 'Set security headers',
                    usage: 'helmet',
                    example: 'app.use(helmet());',
                },
                {
                    command: 'Rate Limiting',
                    description: 'Implement rate limiting',
                    usage: 'express-rate-limit',
                    example: 'const limiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100\n});\napp.use("/api/", limiter);',
                },
            ],
        },
        {
            title: 'Testing',
            commands: [
                {
                    command: 'Supertest',
                    description: 'Test HTTP endpoints',
                    usage: 'const request = require("supertest")',
                    example: 'npm install --save-dev supertest\nconst request = require("supertest");\nconst app = require("../app");\ndescribe("GET /users", () => {\n  it("should return users", async () => {\n    const res = await request(app).get("/users");\n    expect(res.status).toBe(200);\n  });\n});',
                },
                {
                    command: 'Jest Integration',
                    description: 'Use Jest with Supertest',
                    usage: 'Jest + Supertest',
                    example: 'const request = require("supertest");\nconst app = require("../app");\ntest("GET /users", async () => {\n  const response = await request(app).get("/users");\n  expect(response.statusCode).toBe(200);\n});',
                },
            ],
        },
        {
            title: 'Performance',
            commands: [
                {
                    command: 'Compression',
                    description: 'Compress responses',
                    usage: 'app.use(compression())',
                    example: 'npm install compression\nconst compression = require("compression");\napp.use(compression());',
                },
                {
                    command: 'Caching',
                    description: 'Implement caching',
                    usage: 'redis or memory cache',
                    example: 'npm install redis\nconst redis = require("redis");\nconst client = redis.createClient();\napp.get("/data", async (req, res) => {\n  const cached = await client.get("data");\n  if (cached) return res.json(JSON.parse(cached));\n  const data = await fetchData();\n  await client.setEx("data", 3600, JSON.stringify(data));\n  res.json(data);\n});',
                },
                {
                    command: 'Connection Pooling',
                    description: 'Database connection pooling',
                    usage: 'pg or mysql2',
                    example: 'const { Pool } = require("pg");\nconst pool = new Pool({\n  max: 20,\n  idleTimeoutMillis: 30000\n});',
                },
            ],
        },
    ],
};

