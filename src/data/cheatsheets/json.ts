import { FileJson } from 'lucide-react';

export const jsonCheatsheet = {
    id: 'json',
    name: 'JSON',
    description: 'Master JSON from basics to advanced: syntax, validation, schema, performance, security, and best practices',
    icon: FileJson,
    colorTheme: 'green' as const,
    sections: [
        // BEGINNER LEVEL
        {
            title: 'Getting Started with JSON',
            commands: [
                {
                    command: 'JSON Structure',
                    description: 'Basic JSON syntax and structure',
                    usage: 'JSON objects, arrays, strings, numbers, booleans, null',
                    example: '{\n  "name": "John Doe",\n  "age": 30,\n  "isStudent": false,\n  "address": {\n    "street": "123 Main St",\n    "city": "New York"\n  },\n  "hobbies": ["reading", "coding", "gaming"],\n  "scores": [95, 87, 92],\n  "metadata": null\n}',
                },
                {
                    command: 'JSON Data Types',
                    description: 'Valid JSON data types',
                    usage: 'String, Number, Boolean, Array, Object, null',
                    example: '{\n  "string": "Hello World",\n  "number": 42,\n  "float": 3.14,\n  "boolean": true,\n  "array": [1, 2, 3],\n  "object": {"key": "value"},\n  "null": null\n}',
                },
                {
                    command: 'JSON Validation',
                    description: 'Validate JSON format',
                    usage: 'JSON.parse(), try-catch',
                    example: 'function validateJSON(jsonString) {\n  try {\n    JSON.parse(jsonString);\n    return true;\n  } catch (error) {\n    console.error("Invalid JSON:", error.message);\n    return false;\n  }\n}\n\nconst isValid = validateJSON(\'{"name": "John"}\'); // true\nconst isInvalid = validateJSON(\'{"name": John}\'); // false',
                },
                {
                    command: 'JSON Comments',
                    description: 'Work around JSON no-comments limitation',
                    usage: 'Use special properties or preprocessing',
                    example: '{\n  "_comment": "This is a comment workaround",\n  "_description": "User profile data",\n  "name": "John Doe",\n  "_note": "Age must be greater than 18",\n  "age": 25\n}',
                },
            ],
        },
        {
            title: 'Basic JSON Operations',
            commands: [
                {
                    command: 'Parse JSON String',
                    description: 'Convert JSON string to JavaScript object',
                    usage: 'JSON.parse(jsonString)',
                    example: 'const jsonString = \'{"name": "John", "age": 30}\';\nconst obj = JSON.parse(jsonString);\nconsole.log(obj.name); // "John"\nconsole.log(obj.age); // 30',
                },
                {
                    command: 'Stringify Object',
                    description: 'Convert JavaScript object to JSON string',
                    usage: 'JSON.stringify(obj, replacer, space)',
                    example: 'const user = { name: "John", age: 30, password: "secret" };\n\n// Basic stringify\nconst json = JSON.stringify(user);\n\n// With pretty printing\nconst prettyJson = JSON.stringify(user, null, 2);\n\n// Excluding sensitive data\nconst safeJson = JSON.stringify(user, (key, value) => {\n  return key === "password" ? undefined : value;\n});',
                },
                {
                    command: 'Deep Clone with JSON',
                    description: 'Create deep copy of object using JSON',
                    usage: 'JSON.parse(JSON.stringify(obj))',
                    example: 'const original = { a: 1, b: { c: 2 } };\nconst cloned = JSON.parse(JSON.stringify(original));\n\ncloned.b.c = 3;\nconsole.log(original.b.c); // 2 (unchanged)\nconsole.log(cloned.b.c); // 3\n\n// Note: Doesnt work with functions, undefined, circular references',
                },
                {
                    command: 'JSON Path Navigation',
                    description: 'Navigate nested JSON structures',
                    usage: 'Dot notation, bracket notation, optional chaining',
                    example: 'const data = {\n  user: {\n    profile: {\n      name: "John",\n      contacts: [{ type: "email", value: "john@example.com" }]\n    }\n  }\n};\n\n// Dot notation\nconst name = data.user.profile.name;\n\n// Bracket notation\nconst firstContact = data.user.profile.contacts[0];\n\n// Optional chaining (ES2020)\nconst email = data?.user?.profile?.contacts?.[0]?.value;',
                },
            ],
        },
        {
            title: 'JSON Schema & Validation',
            commands: [
                {
                    command: 'Basic JSON Schema',
                    description: 'Define structure and validation rules',
                    usage: 'Schema definition, validation',
                    example: 'const userSchema = {\n  type: "object",\n  properties: {\n    name: { type: "string", minLength: 1 },\n    age: { type: "number", minimum: 0, maximum: 150 },\n    email: { type: "string", format: "email" },\n    isActive: { type: "boolean" }\n  },\n  required: ["name", "email"],\n  additionalProperties: false\n};',
                },
                {
                    command: 'JSON Schema Validation',
                    description: 'Validate JSON against schema',
                    usage: 'Ajv library, validation functions',
                    example: 'const Ajv = require("ajv");\nconst ajv = new Ajv();\n\nconst validate = ajv.compile(userSchema);\nconst data = { name: "John", age: 25, email: "john@example.com" };\n\nif (validate(data)) {\n  console.log("Valid data");\n} else {\n  console.log("Invalid:", validate.errors);\n}',
                },
                {
                    command: 'Advanced Schema Features',
                    description: 'Complex validation patterns',
                    usage: 'Conditional validation, pattern properties',
                    example: '{\n  type: "object",\n  properties: {\n    type: { enum: ["user", "admin"] },\n    username: { type: "string" },\n    password: { type: "string", minLength: 8 },\n    adminCode: { type: "string" }\n  },\n  required: ["type", "username"],\n  if: { properties: { type: { const: "admin" } } },\n  then: { required: ["password", "adminCode"] },\n  else: { required: ["password"] },\n  patternProperties: {\n    "^custom_": { type: "string" }\n  }\n}',
                },
                {
                    command: 'Schema Composition',
                    description: 'Combine multiple schemas',
                    usage: 'allOf, anyOf, oneOf, not',
                    example: '{\n  allOf: [\n    { type: "object" },\n    { properties: { name: { type: "string" } } }\n  ],\n  anyOf: [\n    { properties: { email: { type: "string", format: "email" } } },\n    { properties: { phone: { type: "string" } } }\n  ],\n  oneOf: [\n    { properties: { type: { const: "individual" } } },\n    { properties: { type: { const: "company" } } }\n  ],\n  not: { properties: { deprecated: { const: true } } }\n}',
                },
            ],
        },
        {
            title: 'JSON Manipulation & Transformation',
            commands: [
                {
                    command: 'Filter JSON Data',
                    description: 'Filter and search JSON arrays',
                    usage: 'Array methods, functional programming',
                    example: 'const users = [\n  { id: 1, name: "John", age: 30, active: true },\n  { id: 2, name: "Jane", age: 25, active: false },\n  { id: 3, name: "Bob", age: 35, active: true }\n];\n\n// Filter active users\nconst activeUsers = users.filter(user => user.active);\n\n// Find by ID\nconst userById = users.find(user => user.id === 2);\n\n// Map to specific fields\nconst userNames = users.map(user => ({ name: user.name, age: user.age }));\n\n// Chain operations\nconst result = users\n  .filter(user => user.active)\n  .map(user => user.name.toUpperCase());',
                },
                {
                    command: 'Sort JSON Arrays',
                    description: 'Sort JSON data by different criteria',
                    usage: 'Array.sort() with custom comparators',
                    example: 'const products = [\n  { name: "Laptop", price: 999, rating: 4.5 },\n  { name: "Phone", price: 699, rating: 4.8 },\n  { name: "Tablet", price: 299, rating: 4.2 }\n];\n\n// Sort by price\nproducts.sort((a, b) => a.price - b.price);\n\n// Sort by rating (descending)\nproducts.sort((a, b) => b.rating - a.rating);\n\n// Sort by name\nproducts.sort((a, b) => a.name.localeCompare(b.name));\n\n// Multi-criteria sort\nproducts.sort((a, b) => {\n  if (b.rating !== a.rating) return b.rating - a.rating;\n  return a.price - b.price;\n});',
                },
                {
                    command: 'Group JSON Data',
                    description: 'Group JSON objects by properties',
                    usage: 'Reduce method for grouping',
                    example: 'const students = [\n  { name: "Alice", grade: "A", subject: "Math" },\n  { name: "Bob", grade: "B", subject: "Math" },\n  { name: "Charlie", grade: "A", subject: "Science" },\n  { name: "David", grade: "C", subject: "Math" }\n];\n\n// Group by grade\nconst byGrade = students.reduce((groups, student) => {\n  const grade = student.grade;\n  if (!groups[grade]) groups[grade] = [];\n  groups[grade].push(student);\n  return groups;\n}, {});\n\n// Group by subject\nconst bySubject = students.reduce((groups, student) => {\n  const subject = student.subject;\n  if (!groups[subject]) groups[subject] = [];\n  groups[subject].push(student);\n  return groups;\n}, {});',
                },
                {
                    command: 'Transform JSON Structure',
                    description: 'Restructure JSON data',
                    usage: 'Map, reduce, object manipulation',
                    example: 'const rawData = [\n  { date: "2023-01-01", product: "Laptop", sales: 100 },\n  { date: "2023-01-01", product: "Phone", sales: 150 },\n  { date: "2023-01-02", product: "Laptop", sales: 120 }\n];\n\n// Transform to nested structure\nconst transformed = rawData.reduce((result, item) => {\n  const { date, product, sales } = item;\n  \n  if (!result[date]) result[date] = {};\n  result[date][product] = sales;\n  \n  return result;\n}, {});\n\n// Result:\n// {\n//   "2023-01-01": { "Laptop": 100, "Phone": 150 },\n//   "2023-01-02": { "Laptop": 120 }\n// }',
                },
            ],
        },
        {
            title: 'JSON Performance & Optimization',
            commands: [
                {
                    command: 'Large JSON Processing',
                    description: 'Handle large JSON files efficiently',
                    usage: 'Streaming, chunking, memory management',
                    example: 'const fs = require("fs");\nconst JSONStream = require("JSONStream");\n\n// Stream large JSON file\nconst stream = fs.createReadStream("large-file.json")\n  .pipe(JSONStream.parse("*"));\n\nstream.on("data", (data) => {\n  // Process each item individually\n  processItem(data);\n});\n\n// Process in chunks\nfunction processInChunks(array, chunkSize, processor) {\n  for (let i = 0; i < array.length; i += chunkSize) {\n    const chunk = array.slice(i, i + chunkSize);\n    processor(chunk);\n  }\n}',
                },
                {
                    command: 'JSON Compression',
                    description: 'Compress JSON data for transmission',
                    usage: 'Gzip, Brotli, custom compression',
                    example: 'const zlib = require("zlib");\n\n// Gzip compression\nconst jsonString = JSON.stringify(largeObject);\nconst compressed = zlib.gzipSync(jsonString);\n\n// Brotli compression (better ratio)\nconst brotliCompressed = zlib.brotliCompressSync(jsonString);\n\n// Custom compression for repetitive data\nfunction compressRepetitive(data) {\n  const json = JSON.stringify(data);\n  return json.replace(/"([^"]+)":/g, (match, key) => {\n    return keyMap[key] || (keyMap[key] = keys.length, keys.push(key), `"${keys.length - 1}":`);\n  });\n}',
                },
                {
                    command: 'Memory-Efficient Parsing',
                    description: 'Parse JSON with minimal memory usage',
                    usage: 'Iterative parsing, lazy evaluation',
                    example: 'const { parse: JSONParse } = require("json-stream-stringify");\n\n// Iterative JSON parser\nfunction parseIteratively(jsonString) {\n  let depth = 0;\n  let start = 0;\n  \n  for (let i = 0; i < jsonString.length; i++) {\n    if (jsonString[i] === "{") depth++;\n    if (jsonString[i] === "}") depth--;\n    \n    if (depth === 0 && jsonString[i] === "}") {\n      const object = JSON.parse(jsonString.slice(start, i + 1));\n      processObject(object);\n      start = i + 1;\n    }\n  }\n}',
                },
                {
                    command: 'JSON Caching',
                    description: 'Cache parsed JSON objects',
                    usage: 'LRU cache, memoization',
                    example: 'const LRU = require("lru-cache");\nconst jsonCache = new LRU({ max: 1000, ttl: 1000 * 60 * 5 });\n\nfunction getCachedJSON(key, fetcher) {\n  let data = jsonCache.get(key);\n  \n  if (!data) {\n    const jsonString = fetcher(key);\n    data = JSON.parse(jsonString);\n    jsonCache.set(key, data);\n  }\n  \n  return data;\n}\n\n// Usage\nconst userData = getCachedJSON("user:123", () => fetchUserJSON(123));',
                },
            ],
        },
        {
            title: 'JSON Security & Best Practices',
            commands: [
                {
                    command: 'Prevent JSON Injection',
                    description: 'Secure JSON parsing and handling',
                    usage: 'Input sanitization, safe parsing',
                    example: 'function safeJSONParse(jsonString) {\n  // Remove potentially dangerous content\n  const sanitized = jsonString\n    .replace(/<script[^>]*>.*?<\\/script>/gi, "")\n    .replace(/javascript:/gi, "")\n    .replace(/on\\w+\\s*=/gi, "");\n  \n  try {\n    return JSON.parse(sanitized);\n  } catch (error) {\n    throw new Error("Invalid or dangerous JSON");\n  }\n}\n\n// Validate before parsing\nfunction validateAndParse(jsonString) {\n  if (typeof jsonString !== "string") {\n    throw new Error("Input must be a string");\n  }\n  \n  if (jsonString.length > MAX_JSON_SIZE) {\n    throw new Error("JSON too large");\n  }\n  \n  return safeJSONParse(jsonString);\n}',
                },
                {
                    command: 'Secure JSON Serialization',
                    description: 'Prevent data leakage in JSON output',
                    usage: 'Selective serialization, data filtering',
                    example: 'function secureSerialize(obj, userRole) {\n  const sensitiveFields = ["password", "ssn", "creditCard"];\n  const adminFields = ["internalId", "auditLog"];\n  \n  return JSON.stringify(obj, (key, value) => {\n    // Remove sensitive fields\n    if (sensitiveFields.includes(key)) return undefined;\n    \n    // Remove admin fields for non-admin users\n    if (adminFields.includes(key) && userRole !== "admin") {\n      return undefined;\n    }\n    \n    // Handle circular references\n    if (typeof value === "object" && value !== null) {\n      if (seen.has(value)) return "[Circular]";\n      seen.add(value);\n    }\n    \n    return value;\n  });\n}',
                },
                {
                    command: 'JSON Error Handling',
                    description: 'Robust error handling for JSON operations',
                    usage: 'Try-catch, validation, fallbacks',
                    example: 'function robustJSONParse(jsonString, fallback = null) {\n  try {\n    const parsed = JSON.parse(jsonString);\n    \n    // Validate parsed object\n    if (parsed === null || typeof parsed !== "object") {\n      console.warn("Parsed JSON is not an object");\n      return fallback;\n    }\n    \n    return parsed;\n  } catch (error) {\n    console.error("JSON parsing failed:", error.message);\n    \n    // Try to fix common JSON errors\n    const fixed = jsonString\n      .replace(/,\\s*}/g, "}") // Remove trailing commas\n      .replace(/,\\s*]/g, "]") // Remove trailing commas in arrays\n      .replace(/\'/g, "\\""); // Fix quotes\n    \n    try {\n      return JSON.parse(fixed);\n    } catch {\n      return fallback;\n    }\n  }\n}',
                },
                {
                    command: 'JSON Best Practices',
                    description: 'Industry best practices for JSON usage',
                    usage: 'Naming conventions, structure design',
                    example: '// Good JSON structure\nconst goodAPIResponse = {\n  success: true,\n  data: {\n    users: [\n      {\n        id: "uuid-string",\n        name: "John Doe",\n        email: "john@example.com",\n        createdAt: "2023-01-01T00:00:00Z",\n        updatedAt: "2023-01-01T00:00:00Z"\n      }\n    ],\n    pagination: {\n      page: 1,\n      limit: 20,\n      total: 100,\n      hasNext: true\n    }\n  },\n  errors: null,\n  metadata: {\n    version: "1.0",\n    timestamp: "2023-01-01T00:00:00Z"\n  }\n};\n\n// Naming conventions\n// - camelCase for properties\n// - Descriptive names\n// - Consistent date format (ISO 8601)\n// - Use null for missing values\n// - Include metadata for API responses',
                },
            ],
        },
        {
            title: 'JSON APIs & Web Standards',
            commands: [
                {
                    command: 'JSON API Specification',
                    description: 'Build APIs following JSON:API standard',
                    usage: 'Resource objects, relationships, links',
                    example: '{\n  "data": {\n    "type": "articles",\n    "id": "1",\n    "attributes": {\n      "title": "JSON:API paints my bikeshed!",\n      "content": "The shortest article. Ever."\n    },\n    "relationships": {\n      "author": {\n        "data": { "type": "people", "id": "9" }\n      }\n    },\n    "links": {\n      "self": "http://example.com/articles/1"\n    }\n  },\n  "included": [\n    {\n      "type": "people",\n      "id": "9",\n      "attributes": {\n        "name": "Dan Gebhardt"\n      }\n    }\n  ]\n}',
                },
                {
                    command: 'JSON Web Tokens (JWT)',
                    description: 'Create and parse JWT tokens',
                    usage: 'Header, payload, signature',
                    example: 'const jwt = require("jsonwebtoken");\n\n// Create JWT\nconst payload = {\n  sub: "1234567890",\n  name: "John Doe",\n  iat: Math.floor(Date.now() / 1000),\n  exp: Math.floor(Date.now() / 1000) + (60 * 60)\n};\n\nconst token = jwt.sign(payload, "secret-key");\n\n// Parse JWT\nconst decoded = jwt.verify(token, "secret-key");\nconsole.log(decoded.name); // "John Doe"\n\n// JWT structure: header.payload.signature\nconst parts = token.split(".");\nconst header = JSON.parse(Buffer.from(parts[0], "base64").toString());\nconst payloadData = JSON.parse(Buffer.from(parts[1], "base64").toString());',
                },
                {
                    command: 'JSON Patch Operations',
                    description: 'Apply partial updates to JSON objects',
                    usage: 'RFC 6902 JSON Patch',
                    example: 'const jsonpatch = require("fast-json-patch");\n\nconst original = { name: "John", age: 30 };\nconst patch = [\n  { op: "replace", path: "/name", value: "Jane" },\n  { op: "add", path: "/email", value: "jane@example.com" },\n  { op: "remove", path: "/age" }\n];\n\nconst updated = jsonpatch.applyPatch(original, patch).newDocument;\n// Result: { name: "Jane", email: "jane@example.com" }\n\n// Generate patch from differences\nconst diff = jsonpatch.compare(original, updated);\nconsole.log(diff); // The patch operations',
                },
                {
                    command: 'JSON Streaming',
                    description: 'Stream JSON data over HTTP',
                    usage: 'Server-sent events, streaming responses',
                    example: 'const express = require("express");\nconst app = express();\n\napp.get("/stream-json", (req, res) => {\n  res.writeHead(200, {\n    "Content-Type": "application/x-ndjson",\n    "Transfer-Encoding": "chunked"\n  });\n  \n  const data = [\n    { id: 1, name: "Item 1" },\n    { id: 2, name: "Item 2" },\n    { id: 3, name: "Item 3" }\n  ];\n  \n  data.forEach((item, index) => {\n    setTimeout(() => {\n      res.write(JSON.stringify(item) + "\\n");\n      \n      if (index === data.length - 1) {\n        res.end();\n      }\n    }, index * 1000);\n  });\n});\n\n// Client-side streaming\nfetch("/stream-json")\n  .then(response => response.body.getReader())\n  .then(reader => {\n    function read() {\n      return reader.read().then(({ done, value }) => {\n        if (done) return;\n        \n        const text = new TextDecoder().decode(value);\n        const lines = text.trim().split("\\n");\n        \n        lines.forEach(line => {\n          const data = JSON.parse(line);\n          console.log("Received:", data);\n        });\n        \n        return read();\n      });\n    }\n    \n    return read();\n  });',
                },
            ],
        },
        {
            title: 'Advanced JSON Features & Patterns',
            commands: [
                {
                    command: 'JSON with BigInt',
                    description: 'Handle large numbers in JSON',
                    usage: 'BigInt serialization, custom replacer',
                    example: 'function jsonBigIntStringify(obj) {\n  return JSON.stringify(obj, (key, value) => {\n    if (typeof value === "bigint") {\n      return value.toString() + "n";\n    }\n    return value;\n  });\n}\n\nfunction jsonBigIntParse(jsonString) {\n  return JSON.parse(jsonString, (key, value) => {\n    if (typeof value === "string" && /^\\d+n$/.test(value)) {\n      return BigInt(value.slice(0, -1));\n    }\n    return value;\n  });\n}\n\nconst data = { bigNumber: BigInt(123456789012345678901234567890) };\nconst json = jsonBigIntStringify(data);\nconst parsed = jsonBigIntParse(json);\nconsole.log(parsed.bigNumber === data.bigNumber); // true',
                },
                {
                    command: 'JSON with Dates',
                    description: 'Properly handle dates in JSON',
                    usage: 'ISO 8601, custom serialization',
                    example: 'function jsonDateStringify(obj) {\n  return JSON.stringify(obj, (key, value) => {\n    if (value instanceof Date) {\n      return { __type: "Date", value: value.toISOString() };\n    }\n    return value;\n  });\n}\n\nfunction jsonDateParse(jsonString) {\n  return JSON.parse(jsonString, (key, value) => {\n    if (value && typeof value === "object" && value.__type === "Date") {\n      return new Date(value.value);\n    }\n    return value;\n  });\n}\n\nconst event = {\n  name: "Conference",\n  date: new Date(),\n  attendees: ["Alice", "Bob"]\n};\n\nconst json = jsonDateStringify(event);\nconst parsed = jsonDateParse(json);\nconsole.log(parsed.date instanceof Date); // true',
                },
                {
                    command: 'JSON with Functions',
                    description: 'Serialize and deserialize functions',
                    usage: 'Function serialization, eval alternative',
                    example: 'function jsonFunctionStringify(obj) {\n  return JSON.stringify(obj, (key, value) => {\n    if (typeof value === "function") {\n      return { __type: "Function", value: value.toString() };\n    }\n    return value;\n  });\n}\n\nfunction jsonFunctionParse(jsonString) {\n  return JSON.parse(jsonString, (key, value) => {\n    if (value && typeof value === "object" && value.__type === "Function") {\n      // Use Function constructor instead of eval for safety\n      const funcBody = value.value.replace(/^function[^(]*\\([^)]*\\)\\s*{/, "")\n                                .replace(/}$/, "");\n      return new Function(funcBody);\n    }\n    return value;\n  });\n}\n\nconst calculator = {\n  add: (a, b) => a + b,\n  multiply: (a, b) => a * b\n};\n\nconst json = jsonFunctionStringify(calculator);\nconst parsed = jsonFunctionParse(json);\nconsole.log(parsed.add(2, 3)); // 5',
                },
                {
                    command: 'JSON Circular References',
                    description: 'Handle circular references in JSON',
                    usage: 'Circular detection, custom replacer',
                    example: 'function jsonStringifyCircular(obj, space) {\n  const seen = new WeakSet();\n  \n  return JSON.stringify(obj, (key, value) => {\n    if (typeof value === "object" && value !== null) {\n      if (seen.has(value)) {\n        return "[Circular Reference]";\n      }\n      seen.add(value);\n    }\n    return value;\n  }, space);\n}\n\nconst obj = { name: "Parent" };\nobj.self = obj; // Circular reference\nobj.child = { name: "Child", parent: obj };\n\nconst json = jsonStringifyCircular(obj, 2);\nconsole.log(json);\n// Output:\n// {\n//   "name": "Parent",\n//   "self": "[Circular Reference]",\n//   "child": {\n//     "name": "Child",\n//     "parent": "[Circular Reference]"\n//   }\n// }',
                },
            ],
        },
    ],
};
