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
                    command: 'JSON Structure Example',
                    description: 'Basic JSON syntax and structure',
                    usage: 'JSON objects, arrays, strings, numbers, booleans, null',
                    example: `{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "coding", "gaming"],
  "scores": [95, 87, 92],
  "metadata": null
}`,
                },
                {
                    command: 'JSON Data Types Example',
                    description: 'Valid JSON data types',
                    usage: 'String, Number, Boolean, Array, Object, null',
                    example: `{
  "string": "Hello World",
  "number": 42,
  "float": 3.14,
  "boolean": true,
  "array": [1, 2, 3],
  "object": {"key": "value"},
  "null": null
}`,
                },
                {
                    command: 'JSON Validation Function',
                    description: 'Validate JSON format',
                    usage: 'JSON.parse(), try-catch',
                    example: `function validateJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return false;
  }
}`,
                },
                {
                    command: 'JSON Validation Examples',
                    description: 'Test JSON validation function',
                    usage: 'validateJSON() with examples',
                    example: `const isValid = validateJSON('{"name": "John"}'); // true
const isInvalid = validateJSON('{"name": John}'); // false`,
                },
                {
                    command: 'JSON Comments Workaround',
                    description: 'Work around JSON no-comments limitation',
                    usage: 'Use special properties or preprocessing',
                    example: `{
  "_comment": "This is a comment workaround",
  "_description": "User profile data",
  "name": "John Doe",
  "_note": "Age must be greater than 18",
  "age": 25
}`,
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
                    example: `const jsonString = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John"
console.log(obj.age); // 30`,
                },
                {
                    command: 'Stringify Object Basic',
                    description: 'Convert JavaScript object to JSON string',
                    usage: 'JSON.stringify(obj)',
                    example: `const user = { name: "John", age: 30, password: "secret" };

// Basic stringify
const json = JSON.stringify(user);`,
                },
                {
                    command: 'Stringify with Pretty Printing',
                    description: 'Format JSON with indentation',
                    usage: 'JSON.stringify(obj, null, space)',
                    example: `// With pretty printing
const prettyJson = JSON.stringify(user, null, 2);`,
                },
                {
                    command: 'Stringify with Replacer',
                    description: 'Exclude sensitive data during stringify',
                    usage: 'JSON.stringify(obj, replacer)',
                    example: `// Excluding sensitive data
const safeJson = JSON.stringify(user, (key, value) => {
  return key === "password" ? undefined : value;
});`,
                },
                {
                    command: 'Deep Clone with JSON',
                    description: 'Create deep copy of object using JSON',
                    usage: 'JSON.parse(JSON.stringify(obj))',
                    example: `const original = { a: 1, b: { c: 2 } };
const cloned = JSON.parse(JSON.stringify(original));

cloned.b.c = 3;
console.log(original.b.c); // 2 (unchanged)
console.log(cloned.b.c); // 3

// Note: Doesnt work with functions, undefined, circular references`,
                },
                {
                    command: 'JSON Path Navigation Data',
                    description: 'Sample nested JSON structure',
                    usage: 'Example data for navigation',
                    example: `const data = {
  user: {
    profile: {
      name: "John",
      contacts: [{ type: "email", value: "john@example.com" }]
    }
  }
};`,
                },
                {
                    command: 'Dot Notation Navigation',
                    description: 'Access nested properties with dot notation',
                    usage: 'object.property.nestedProperty',
                    example: `// Dot notation
const name = data.user.profile.name;`,
                },
                {
                    command: 'Bracket Notation Navigation',
                    description: 'Access array elements with bracket notation',
                    usage: 'object.array[index]',
                    example: `// Bracket notation
const firstContact = data.user.profile.contacts[0];`,
                },
                {
                    command: 'Optional Chaining Navigation',
                    description: 'Safe navigation with optional chaining',
                    usage: 'object?.property?.array?.[index]',
                    example: `// Optional chaining (ES2020)
const email = data?.user?.profile?.contacts?.[0]?.value;`,
                },
            ],
        },
        {
            title: 'JSON Schema & Validation',
            commands: [
                {
                    command: 'Basic JSON Schema Definition',
                    description: 'Define structure and validation rules',
                    usage: 'Schema definition',
                    example: `const userSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    age: { type: "number", minimum: 0, maximum: 150 },
    email: { type: "string", format: "email" },
    isActive: { type: "boolean" }
  },
  required: ["name", "email"],
  additionalProperties: false
};`,
                },
                {
                    command: 'JSON Schema Validation Setup',
                    description: 'Setup Ajv for validation',
                    usage: 'Ajv library initialization',
                    example: `const Ajv = require("ajv");
const ajv = new Ajv();

const validate = ajv.compile(userSchema);`,
                },
                {
                    command: 'JSON Schema Validation Example',
                    description: 'Validate JSON against schema',
                    usage: 'Validation functions',
                    example: `const data = { name: "John", age: 25, email: "john@example.com" };

if (validate(data)) {
  console.log("Valid data");
} else {
  console.log("Invalid:", validate.errors);
}`,
                },
                {
                    command: 'Advanced Schema Properties',
                    description: 'Complex validation patterns',
                    usage: 'Conditional validation, pattern properties',
                    example: `{
  type: "object",
  properties: {
    type: { enum: ["user", "admin"] },
    username: { type: "string" },
    password: { type: "string", minLength: 8 },
    adminCode: { type: "string" }
  },
  required: ["type", "username"],`,
                },
                {
                    command: 'Schema Conditional Validation',
                    description: 'Conditional validation rules',
                    usage: 'if/then/else in schema',
                    example: `  if: { properties: { type: { const: "admin" } } },
  then: { required: ["password", "adminCode"] },
  else: { required: ["password"] },`,
                },
                {
                    command: 'Schema Pattern Properties',
                    description: 'Pattern-based property validation',
                    usage: 'patternProperties in schema',
                    example: `  patternProperties: {
    "^custom_": { type: "string" }
  }
}`,
                },
                {
                    command: 'Schema allOf Composition',
                    description: 'Combine schemas with allOf',
                    usage: 'allOf for schema composition',
                    example: `{
  allOf: [
    { type: "object" },
    { properties: { name: { type: "string" } } }
  ],`,
                },
                {
                    command: 'Schema anyOf Composition',
                    description: 'Combine schemas with anyOf',
                    usage: 'anyOf for schema composition',
                    example: `  anyOf: [
    { properties: { email: { type: "string", format: "email" } } },
    { properties: { phone: { type: "string" } } }
  ],`,
                },
                {
                    command: 'Schema oneOf Composition',
                    description: 'Combine schemas with oneOf',
                    usage: 'oneOf for schema composition',
                    example: `  oneOf: [
    { properties: { type: { const: "individual" } } },
    { properties: { type: { const: "company" } } }
  ],`,
                },
                {
                    command: 'Schema not Composition',
                    description: 'Negate schema with not',
                    usage: 'not for schema composition',
                    example: `  not: { properties: { deprecated: { const: true } } }
}`,
                },
            ],
        },
        {
            title: 'JSON Manipulation & Transformation',
            commands: [
                {
                    command: 'Filter JSON Data Setup',
                    description: 'Sample data for filtering',
                    usage: 'Array of user objects',
                    example: `const users = [
  { id: 1, name: "John", age: 30, active: true },
  { id: 2, name: "Jane", age: 25, active: false },
  { id: 3, name: "Bob", age: 35, active: true }
];`,
                },
                {
                    command: 'Filter Active Users',
                    description: 'Filter users by active status',
                    usage: 'Array.filter() method',
                    example: `// Filter active users
const activeUsers = users.filter(user => user.active);`,
                },
                {
                    command: 'Find User by ID',
                    description: 'Find specific user by ID',
                    usage: 'Array.find() method',
                    example: `// Find by ID
const userById = users.find(user => user.id === 2);`,
                },
                {
                    command: 'Map User Fields',
                    description: 'Extract specific fields from users',
                    usage: 'Array.map() method',
                    example: `// Map to specific fields
const userNames = users.map(user => ({ name: user.name, age: user.age }));`,
                },
                {
                    command: 'Chain Filter Operations',
                    description: 'Chain multiple array operations',
                    usage: 'Method chaining',
                    example: `// Chain operations
const result = users
  .filter(user => user.active)
  .map(user => user.name.toUpperCase());`,
                },
                {
                    command: 'Sort JSON Data Setup',
                    description: 'Sample data for sorting',
                    usage: 'Array of product objects',
                    example: `const products = [
  { name: "Laptop", price: 999, rating: 4.5 },
  { name: "Phone", price: 699, rating: 4.8 },
  { name: "Tablet", price: 299, rating: 4.2 }
];`,
                },
                {
                    command: 'Sort by Price',
                    description: 'Sort products by price ascending',
                    usage: 'Array.sort() with numeric comparison',
                    example: `// Sort by price
products.sort((a, b) => a.price - b.price);`,
                },
                {
                    command: 'Sort by Rating Descending',
                    description: 'Sort products by rating descending',
                    usage: 'Array.sort() with reverse numeric comparison',
                    example: `// Sort by rating (descending)
products.sort((a, b) => b.rating - a.rating);`,
                },
                {
                    command: 'Sort by Name',
                    description: 'Sort products by name alphabetically',
                    usage: 'Array.sort() with localeCompare',
                    example: `// Sort by name
products.sort((a, b) => a.name.localeCompare(b.name));`,
                },
                {
                    command: 'Multi-Criteria Sort',
                    description: 'Sort by multiple criteria',
                    usage: 'Array.sort() with complex comparator',
                    example: `// Multi-criteria sort
products.sort((a, b) => {
  if (b.rating !== a.rating) return b.rating - a.rating;
  return a.price - b.price;
});`,
                },
                {
                    command: 'Group JSON Data Setup',
                    description: 'Sample data for grouping',
                    usage: 'Array of student objects',
                    example: `const students = [
  { name: "Alice", grade: "A", subject: "Math" },
  { name: "Bob", grade: "B", subject: "Math" },
  { name: "Charlie", grade: "A", subject: "Science" },
  { name: "David", grade: "C", subject: "Math" }
];`,
                },
                {
                    command: 'Group by Grade',
                    description: 'Group students by grade',
                    usage: 'Array.reduce() for grouping',
                    example: `// Group by grade
const byGrade = students.reduce((groups, student) => {
  const grade = student.grade;
  if (!groups[grade]) groups[grade] = [];
  groups[grade].push(student);
  return groups;
}, {});`,
                },
                {
                    command: 'Group by Subject',
                    description: 'Group students by subject',
                    usage: 'Array.reduce() for grouping',
                    example: `// Group by subject
const bySubject = students.reduce((groups, student) => {
  const subject = student.subject;
  if (!groups[subject]) groups[subject] = [];
  groups[subject].push(student);
  return groups;
}, {});`,
                },
                {
                    command: 'Transform JSON Data Setup',
                    description: 'Sample data for transformation',
                    usage: 'Flat array structure',
                    example: `const rawData = [
  { date: "2023-01-01", product: "Laptop", sales: 100 },
  { date: "2023-01-01", product: "Phone", sales: 150 },
  { date: "2023-01-02", product: "Laptop", sales: 120 }
];`,
                },
                {
                    command: 'Transform to Nested Structure',
                    description: 'Convert flat data to nested structure',
                    usage: 'Array.reduce() for transformation',
                    example: `// Transform to nested structure
const transformed = rawData.reduce((result, item) => {
  const { date, product, sales } = item;
  
  if (!result[date]) result[date] = {};
  result[date][product] = sales;
  
  return result;
}, {});`,
                },
                {
                    command: 'Transform Result Example',
                    description: 'Result of transformation',
                    usage: 'Expected output structure',
                    example: `// Result:
// {
//   "2023-01-01": { "Laptop": 100, "Phone": 150 },
//   "2023-01-02": { "Laptop": 120 }
// }`,
                },
            ],
        },
        {
            title: 'JSON Performance & Optimization',
            commands: [
                {
                    command: 'Stream Large JSON Setup',
                    description: 'Setup for streaming large JSON files',
                    usage: 'Required modules for streaming',
                    example: `const fs = require("fs");
const JSONStream = require("JSONStream");`,
                },
                {
                    command: 'Stream Large JSON File',
                    description: 'Process large JSON file as stream',
                    usage: 'JSONStream for memory efficiency',
                    example: `// Stream large JSON file
const stream = fs.createReadStream("large-file.json")
  .pipe(JSONStream.parse("*"));

stream.on("data", (data) => {
  // Process each item individually
  processItem(data);
});`,
                },
                {
                    command: 'Process in Chunks Function',
                    description: 'Function to process arrays in chunks',
                    usage: 'Chunk processing for memory management',
                    example: `// Process in chunks
function processInChunks(array, chunkSize, processor) {
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    processor(chunk);
  }
}`,
                },
                {
                    command: 'Gzip Compression Setup',
                    description: 'Setup for JSON compression',
                    usage: 'zlib module import',
                    example: `const zlib = require("zlib");

// Gzip compression
const jsonString = JSON.stringify(largeObject);`,
                },
                {
                    command: 'Gzip Compression',
                    description: 'Compress JSON with Gzip',
                    usage: 'zlib.gzipSync()',
                    example: `const compressed = zlib.gzipSync(jsonString);`,
                },
                {
                    command: 'Brotli Compression',
                    description: 'Compress JSON with Brotli',
                    usage: 'zlib.brotliCompressSync()',
                    example: `// Brotli compression (better ratio)
const brotliCompressed = zlib.brotliCompressSync(jsonString);`,
                },
                {
                    command: 'Custom Compression Setup',
                    description: 'Setup for custom compression',
                    usage: 'Key mapping for repetitive data',
                    example: `// Custom compression for repetitive data
function compressRepetitive(data) {
  const keyMap = {};
  const keys = [];
  const json = JSON.stringify(data);
  return json.replace(/"([^"]+)":/g, (match, key) => {
    return keyMap[key] || (keyMap[key] = keys.length, keys.push(key), \`"\${keys.length - 1}":\`);
  });
}`,
                },
                {
                    command: 'Iterative JSON Parser Setup',
                    description: 'Setup for iterative parsing',
                    usage: 'Required module import',
                    example: `const { parse: JSONParse } = require("json-stream-stringify");`,
                },
                {
                    command: 'Iterative JSON Parser',
                    description: 'Parse JSON iteratively for memory efficiency',
                    usage: 'Character-by-character parsing',
                    example: `// Iterative JSON parser
function parseIteratively(jsonString) {
  let depth = 0;
  let start = 0;
  
  for (let i = 0; i < jsonString.length; i++) {
    if (jsonString[i] === "{") depth++;
    if (jsonString[i] === "}") depth--;
    
    if (depth === 0 && jsonString[i] === "}") {
      const object = JSON.parse(jsonString.slice(start, i + 1));
      processObject(object);
      start = i + 1;
    }
  }
}`,
                },
                {
                    command: 'JSON Cache Setup',
                    description: 'Setup for JSON caching',
                    usage: 'LRU cache initialization',
                    example: `const LRU = require("lru-cache");
const jsonCache = new LRU({ max: 1000, ttl: 1000 * 60 * 5 });`,
                },
                {
                    command: 'JSON Cache Function',
                    description: 'Cache parsed JSON objects',
                    usage: 'Memoization with LRU cache',
                    example: `function getCachedJSON(key, fetcher) {
  let data = jsonCache.get(key);
  
  if (!data) {
    const jsonString = fetcher(key);
    data = JSON.parse(jsonString);
    jsonCache.set(key, data);
  }
  
  return data;
}`,
                },
                {
                    command: 'JSON Cache Usage',
                    description: 'Example of using JSON cache',
                    usage: 'getCachedJSON() with fetcher',
                    example: `// Usage
const userData = getCachedJSON("user:123", () => fetchUserJSON(123));`,
                },
            ],
        },
        {
            title: 'JSON Security & Best Practices',
            commands: [
                {
                    command: 'Safe JSON Parse Function',
                    description: 'Secure JSON parsing with sanitization',
                    usage: 'Input sanitization before parsing',
                    example: `function safeJSONParse(jsonString) {
  // Remove potentially dangerous content
  const sanitized = jsonString
    .replace(/<script[^>]*>.*?<\\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\\w+\\s*=/gi, "");
  
  try {
    return JSON.parse(sanitized);
  } catch (error) {
    throw new Error("Invalid or dangerous JSON");
  }
}`,
                },
                {
                    command: 'Validate and Parse Function',
                    description: 'Validate input before parsing',
                    usage: 'Input validation and safe parsing',
                    example: `function validateAndParse(jsonString) {
  if (typeof jsonString !== "string") {
    throw new Error("Input must be a string");
  }
  
  if (jsonString.length > MAX_JSON_SIZE) {
    throw new Error("JSON too large");
  }
  
  return safeJSONParse(jsonString);
}`,
                },
                {
                    command: 'Secure Serialize Setup',
                    description: 'Setup for secure serialization',
                    usage: 'Sensitive fields definition',
                    example: `function secureSerialize(obj, userRole) {
  const sensitiveFields = ["password", "ssn", "creditCard"];
  const adminFields = ["internalId", "auditLog"];`,
                },
                {
                    command: 'Secure Serialize Function',
                    description: 'Prevent data leakage in JSON output',
                    usage: 'Selective serialization with replacer',
                    example: `  return JSON.stringify(obj, (key, value) => {
    // Remove sensitive fields
    if (sensitiveFields.includes(key)) return undefined;
    
    // Remove admin fields for non-admin users
    if (adminFields.includes(key) && userRole !== "admin") {
      return undefined;
    }
    
    // Handle circular references
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return "[Circular]";
      seen.add(value);
    }
    
    return value;
  });
}`,
                },
                {
                    command: 'Robust JSON Parse Function',
                    description: 'Robust error handling for JSON parsing',
                    usage: 'Try-catch with fallback and error fixing',
                    example: `function robustJSONParse(jsonString, fallback = null) {
  try {
    const parsed = JSON.parse(jsonString);
    
    // Validate parsed object
    if (parsed === null || typeof parsed !== "object") {
      console.warn("Parsed JSON is not an object");
      return fallback;
    }
    
    return parsed;
  } catch (error) {
    console.error("JSON parsing failed:", error.message);`,
                },
                {
                    command: 'JSON Error Fixing',
                    description: 'Attempt to fix common JSON errors',
                    usage: 'Regex-based error correction',
                    example: `    // Try to fix common JSON errors
    const fixed = jsonString
      .replace(/,\\s*}/g, "}") // Remove trailing commas
      .replace(/,\\s*]/g, "]") // Remove trailing commas in arrays
      .replace(/\'/g, "\\""); // Fix quotes
    
    try {
      return JSON.parse(fixed);
    } catch {
      return fallback;
    }
  }
}`,
                },
                {
                    command: 'Good JSON Structure',
                    description: 'Example of well-structured API response',
                    usage: 'Best practices for API responses',
                    example: `// Good JSON structure
const goodAPIResponse = {
  success: true,
  data: {
    users: [
      {
        id: "uuid-string",
        name: "John Doe",
        email: "john@example.com",
        createdAt: "2023-01-01T00:00:00Z",
        updatedAt: "2023-01-01T00:00:00Z"
      }
    ],
    pagination: {
      page: 1,
      limit: 20,
      total: 100,
      hasNext: true
    }
  },
  errors: null,
  metadata: {
    version: "1.0",
    timestamp: "2023-01-01T00:00:00Z"
  }
};`,
                },
                {
                    command: 'JSON Naming Conventions',
                    description: 'Best practices for JSON naming',
                    usage: 'Naming and structure guidelines',
                    example: `// Naming conventions
// - camelCase for properties
// - Descriptive names
// - Consistent date format (ISO 8601)
// - Use null for missing values
// - Include metadata for API responses`,
                },
            ],
        },
        {
            title: 'JSON APIs & Web Standards',
            commands: [
                {
                    command: 'JSON API Data Structure',
                    description: 'JSON:API resource object structure',
                    usage: 'Resource objects with attributes and relationships',
                    example: `{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!",
      "content": "The shortest article. Ever."
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    },
    "links": {
      "self": "http://example.com/articles/1"
    }
  },`,
                },
                {
                    command: 'JSON API Included Data',
                    description: 'Include related resources in response',
                    usage: 'included array for related data',
                    example: `  "included": [
    {
      "type": "people",
      "id": "9",
      "attributes": {
        "name": "Dan Gebhardt"
      }
    }
  ]
}`,
                },
                {
                    command: 'JWT Create Token',
                    description: 'Create JWT token with payload',
                    usage: 'jsonwebtoken library',
                    example: `const jwt = require("jsonwebtoken");

// Create JWT
const payload = {
  sub: "1234567890",
  name: "John Doe",
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (60 * 60)
};

const token = jwt.sign(payload, "secret-key");`,
                },
                {
                    command: 'JWT Parse Token',
                    description: 'Parse and verify JWT token',
                    usage: 'jwt.verify() method',
                    example: `// Parse JWT
const decoded = jwt.verify(token, "secret-key");
console.log(decoded.name); // "John Doe"`,
                },
                {
                    command: 'JWT Structure Explanation',
                    description: 'Understanding JWT token structure',
                    usage: 'Header, payload, signature components',
                    example: `// JWT structure: header.payload.signature
const parts = token.split(".");
const header = JSON.parse(Buffer.from(parts[0], "base64").toString());
const payloadData = JSON.parse(Buffer.from(parts[1], "base64").toString());`,
                },
                {
                    command: 'JSON Patch Setup',
                    description: 'Setup for JSON patch operations',
                    usage: 'fast-json-patch library',
                    example: `const jsonpatch = require("fast-json-patch");

const original = { name: "John", age: 30 };`,
                },
                {
                    command: 'JSON Patch Operations',
                    description: 'Apply partial updates to JSON objects',
                    usage: 'RFC 6902 JSON Patch operations',
                    example: `const patch = [
  { op: "replace", path: "/name", value: "Jane" },
  { op: "add", path: "/email", value: "jane@example.com" },
  { op: "remove", path: "/age" }
];`,
                },
                {
                    command: 'JSON Patch Apply',
                    description: 'Apply patch to original object',
                    usage: 'jsonpatch.applyPatch()',
                    example: `const updated = jsonpatch.applyPatch(original, patch).newDocument;
// Result: { name: "Jane", email: "jane@example.com" }`,
                },
                {
                    command: 'JSON Patch Compare',
                    description: 'Generate patch from differences',
                    usage: 'jsonpatch.compare()',
                    example: `// Generate patch from differences
const diff = jsonpatch.compare(original, updated);
console.log(diff); // The patch operations`,
                },
                {
                    command: 'JSON Streaming Server Setup',
                    description: 'Setup Express server for JSON streaming',
                    usage: 'Express.js streaming response',
                    example: `const express = require("express");
const app = express();

app.get("/stream-json", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/x-ndjson",
    "Transfer-Encoding": "chunked"
  });`,
                },
                {
                    command: 'JSON Streaming Server Data',
                    description: 'Stream JSON data from server',
                    usage: 'setTimeout for delayed streaming',
                    example: `  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ];
  
  data.forEach((item, index) => {
    setTimeout(() => {
      res.write(JSON.stringify(item) + "\\n");
      
      if (index === data.length - 1) {
        res.end();
      }
    }, index * 1000);
  });
});`,
                },
                {
                    command: 'JSON Streaming Client',
                    description: 'Consume JSON stream on client',
                    usage: 'Fetch API with streaming',
                    example: `// Client-side streaming
fetch("/stream-json")
  .then(response => response.body.getReader())
  .then(reader => {
    function read() {
      return reader.read().then(({ done, value }) => {
        if (done) return;
        
        const text = new TextDecoder().decode(value);
        const lines = text.trim().split("\\n");
        
        lines.forEach(line => {
          const data = JSON.parse(line);
          console.log("Received:", data);
        });
        
        return read();
      });
    }
    
    return read();
  });`,
                },
            ],
        },
        {
            title: 'Advanced JSON Features & Patterns',
            commands: [
                {
                    command: 'BigInt Stringify Function',
                    description: 'Serialize BigInt values in JSON',
                    usage: 'Custom replacer for BigInt',
                    example: `function jsonBigIntStringify(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "bigint") {
      return value.toString() + "n";
    }
    return value;
  });
}`,
                },
                {
                    command: 'BigInt Parse Function',
                    description: 'Parse BigInt values from JSON',
                    usage: 'Custom reviver for BigInt',
                    example: `function jsonBigIntParse(jsonString) {
  return JSON.parse(jsonString, (key, value) => {
    if (typeof value === "string" && /^\\d+n$/.test(value)) {
      return BigInt(value.slice(0, -1));
    }
    return value;
  });
}`,
                },
                {
                    command: 'BigInt Usage Example',
                    description: 'Example of BigInt JSON serialization',
                    usage: 'Complete BigInt workflow',
                    example: `const data = { bigNumber: BigInt(123456789012345678901234567890) };
const json = jsonBigIntStringify(data);
const parsed = jsonBigIntParse(json);
console.log(parsed.bigNumber === data.bigNumber); // true`,
                },
                {
                    command: 'Date Stringify Function',
                    description: 'Serialize Date objects in JSON',
                    usage: 'Custom replacer for Date',
                    example: `function jsonDateStringify(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (value instanceof Date) {
      return { __type: "Date", value: value.toISOString() };
    }
    return value;
  });
}`,
                },
                {
                    command: 'Date Parse Function',
                    description: 'Parse Date objects from JSON',
                    usage: 'Custom reviver for Date',
                    example: `function jsonDateParse(jsonString) {
  return JSON.parse(jsonString, (key, value) => {
    if (value && typeof value === "object" && value.__type === "Date") {
      return new Date(value.value);
    }
    return value;
  });
}`,
                },
                {
                    command: 'Date Usage Example',
                    description: 'Example of Date JSON serialization',
                    usage: 'Complete Date workflow',
                    example: `const event = {
  name: "Conference",
  date: new Date(),
  attendees: ["Alice", "Bob"]
};

const json = jsonDateStringify(event);
const parsed = jsonDateParse(json);
console.log(parsed.date instanceof Date); // true`,
                },
                {
                    command: 'Function Stringify Function',
                    description: 'Serialize functions in JSON',
                    usage: 'Custom replacer for functions',
                    example: `function jsonFunctionStringify(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "function") {
      return { __type: "Function", value: value.toString() };
    }
    return value;
  });
}`,
                },
                {
                    command: 'Function Parse Function',
                    description: 'Parse functions from JSON',
                    usage: 'Custom reviver for functions',
                    example: `function jsonFunctionParse(jsonString) {
  return JSON.parse(jsonString, (key, value) => {
    if (value && typeof value === "object" && value.__type === "Function") {
      // Use Function constructor instead of eval for safety
      const funcBody = value.value.replace(/^function[^(]*\\([^)]*\\)\\s*{/, "")
                                .replace(/}$/, "");
      return new Function(funcBody);
    }
    return value;
  });
}`,
                },
                {
                    command: 'Function Usage Example',
                    description: 'Example of function JSON serialization',
                    usage: 'Complete function workflow',
                    example: `const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

const json = jsonFunctionStringify(calculator);
const parsed = jsonFunctionParse(json);
console.log(parsed.add(2, 3)); // 5`,
                },
                {
                    command: 'Circular Stringify Function',
                    description: 'Handle circular references in JSON',
                    usage: 'WeakSet for circular detection',
                    example: `function jsonStringifyCircular(obj, space) {
  const seen = new WeakSet();
  
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular Reference]";
      }
      seen.add(value);
    }
    return value;
  }, space);
}`,
                },
                {
                    command: 'Circular Reference Example',
                    description: 'Example of circular reference handling',
                    usage: 'Create and serialize circular objects',
                    example: `const obj = { name: "Parent" };
obj.self = obj; // Circular reference
obj.child = { name: "Child", parent: obj };

const json = jsonStringifyCircular(obj, 2);
console.log(json);`,
                },
                {
                    command: 'Circular Reference Output',
                    description: 'Expected output for circular references',
                    usage: 'Understanding circular reference serialization',
                    example: `// Output:
// {
//   "name": "Parent",
//   "self": "[Circular Reference]",
//   "child": {
//     "name": "Child",
//     "parent": "[Circular Reference]"
//   }
// }`,
                },
            ],
        },
    ],
};
