import { Network } from 'lucide-react';

export const restApisCheatsheet = {
  id: 'rest-apis',
  name: 'REST APIs',
  description: 'Master REST API design, development, and best practices from beginner to expert',
  icon: Network,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with REST APIs',
      commands: [
        {
          command: 'REST Principles',
          description: 'Core principles of REST architecture',
          usage: 'Client-Server, Stateless, Cacheable, Uniform Interface',
          example: 'REST Architectural Constraints:\n1. Client-Server: Separation of concerns\n2. Stateless: No client context stored on server\n3. Cacheable: Responses must define themselves as cacheable\n4. Uniform Interface: Standardized interface between components\n5. Layered System: Architecture composed of hierarchical layers\n6. Code on Demand (optional): Servers can temporarily extend functionality',
        },
        {
          command: 'HTTP Methods',
          description: 'Standard HTTP methods for REST operations',
          usage: 'GET, POST, PUT, PATCH, DELETE',
          example: 'HTTP Methods and Their Uses:\n\nGET    - Retrieve resource(s)\nPOST   - Create new resource\nPUT    - Update/Replace entire resource\nPATCH  - Partial update of resource\nDELETE - Remove resource\nHEAD   - Get headers only\nOPTIONS - Get allowed methods\n\nExamples:\nGET    /api/users           # Get all users\nGET    /api/users/123       # Get specific user\nPOST   /api/users           # Create new user\nPUT    /api/users/123       # Update entire user\nPATCH  /api/users/123       # Partial update user\nDELETE /api/users/123       # Delete user',
        },
        {
          command: 'Resource Naming',
          description: 'Best practices for API endpoint naming',
          usage: 'Use nouns, plural form, hierarchical structure',
          example: 'Good Resource Naming:\n\n# Use nouns, not verbs\nGET /api/users          # ✓ Good\nGET /api/getUsers       # ✗ Bad\n\n# Use plural form\nGET /api/users          # ✓ Good\nGET /api/user           # ✗ Inconsistent\n\n# Hierarchical structure\nGET /api/users/123/posts/456/comments  # ✓ Good\n\n# Query parameters for filtering\nGET /api/users?role=admin&active=true   # ✓ Good\n\n# Pagination\nGET /api/users?page=2&limit=20          # ✓ Good\n\nBad Examples:\nGET /api/getAllUsers\nPOST /api/createUser\nPUT /api/updateUser/123\nDELETE /api/removeUser/123',
        },
        {
          command: 'Basic API Request',
          description: 'Making basic HTTP requests to REST APIs',
          usage: 'curl, fetch, axios for API calls',
          example: '# Using curl\n# GET request\ncurl -X GET https://api.example.com/users\n\n# POST with JSON body\ncurl -X POST https://api.example.com/users \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "John", "email": "john@example.com"}\'\n\n# PUT request\ncurl -X PUT https://api.example.com/users/123 \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "John Updated"}\'\n\n# DELETE request\ncurl -X DELETE https://api.example.com/users/123\n\n# Using JavaScript fetch\nfetch(\'https://api.example.com/users\')\n  .then(response => response.json())\n  .then(data => console.log(data));\n\n// POST with fetch\nfetch(\'https://api.example.com/users\', {\n  method: \'POST\',\n  headers: {\n    \'Content-Type\': \'application/json\',\n  },\n  body: JSON.stringify({\n    name: \'John\',\n    email: \'john@example.com\'\n  })\n})\n.then(response => response.json())\n.then(data => console.log(data));',
        },
      ],
    },
    {
      title: 'HTTP Status Codes',
      commands: [
        {
          command: 'Success Status Codes',
          description: '2xx status codes for successful operations',
          usage: '200, 201, 202, 204',
          example: 'Success Status Codes:\n\n200 OK - Request successful\nGET /api/users/123 → 200 OK\n\n201 Created - Resource created\nPOST /api/users → 201 Created\n\n202 Accepted - Request accepted for processing\nPOST /api/process → 202 Accepted\n\n204 No Content - Success, no content to return\nDELETE /api/users/123 → 204 No Content\n\nExamples:\n// Response with 201 Created\n{\n  "status": 201,\n  "message": "User created successfully",\n  "data": {\n    "id": 123,\n    "name": "John Doe",\n    "email": "john@example.com"\n  },\n  "location": "/api/users/123"\n}',
        },
        {
          command: 'Client Error Codes',
          description: '4xx status codes for client-side errors',
          usage: '400, 401, 403, 404, 409, 422',
          example: 'Client Error Status Codes:\n\n400 Bad Request - Invalid request\n401 Unauthorized - Authentication required\n403 Forbidden - Insufficient permissions\n404 Not Found - Resource not found\n409 Conflict - Resource conflict\n422 Unprocessable Entity - Validation errors\n\nExamples:\n// 400 Bad Request\n{\n  "error": "Bad Request",\n  "message": "Invalid email format",\n  "code": "INVALID_EMAIL"\n}\n\n// 401 Unauthorized\n{\n  "error": "Unauthorized",\n  "message": "Authentication token required"\n}\n\n// 404 Not Found\n{\n  "error": "Not Found",\n  "message": "User with ID 999 not found"\n}\n\n// 422 Unprocessable Entity\n{\n  "error": "Validation Error",\n  "message": "Invalid input data",\n  "errors": {\n    "email": ["Email is required"],\n    "age": ["Age must be at least 18"]\n  }\n}',
        },
        {
          command: 'Server Error Codes',
          description: '5xx status codes for server-side errors',
          usage: '500, 502, 503, 504',
          example: 'Server Error Status Codes:\n\n500 Internal Server Error - Unexpected server error\n502 Bad Gateway - Invalid response from upstream server\n503 Service Unavailable - Server temporarily unavailable\n504 Gateway Timeout - Upstream server timeout\n\nExamples:\n// 500 Internal Server Error\n{\n  "error": "Internal Server Error",\n  "message": "An unexpected error occurred",\n  "timestamp": "2024-01-01T12:00:00Z",\n  "requestId": "req_123456789"\n}\n\n// 503 Service Unavailable\n{\n  "error": "Service Unavailable",\n  "message": "Server is under maintenance",\n  "retryAfter": 300\n}',
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Request and Response Headers',
      commands: [
        {
          command: 'Common Request Headers',
          description: 'Essential headers for API requests',
          usage: 'Content-Type, Authorization, Accept, User-Agent',
          example: 'Common Request Headers:\n\nContent-Type: application/json\nAuthorization: Bearer <token>\nAccept: application/json\nUser-Agent: MyApp/1.0\n\nExamples:\n# JSON content\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: Bearer eyJhbGciOi..." \\\n     -H "Accept: application/json" \\\n     https://api.example.com/users\n\n# Form data\ncurl -H "Content-Type: application/x-www-form-urlencoded" \\\n     -d "name=John&email=john@example.com" \\\n     https://api.example.com/users\n\n# File upload\ncurl -H "Content-Type: multipart/form-data" \\\n     -F "file=@document.pdf" \\\n     https://api.example.com/upload\n\n# Custom headers\ncurl -H "X-API-Key: your-api-key" \\\n     -H "X-Request-ID: req-123456" \\\n     https://api.example.com/users',
        },
        {
          command: 'Common Response Headers',
          description: 'Essential headers in API responses',
          usage: 'Content-Type, Cache-Control, ETag, RateLimit',
          example: 'Common Response Headers:\n\nContent-Type: application/json\nCache-Control: max-age=3600\nETag: "abc123"\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 999\nX-RateLimit-Reset: 1640995200\n\nExamples:\nHTTP/1.1 200 OK\nContent-Type: application/json\nCache-Control: max-age=3600, public\nETag: "abc123"\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 999\nX-RateLimit-Reset: 1640995200\nX-Request-ID: req-123456789\n\n{\n  "data": [...],\n  "pagination": {\n    "page": 1,\n    "limit": 20,\n    "total": 100\n  }\n}',
        },
        {
          command: 'CORS Headers',
          description: 'Cross-Origin Resource Sharing configuration',
          usage: 'Access-Control-Allow-Origin, Access-Control-Allow-Methods',
          example: 'CORS Headers Configuration:\n\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\nAccess-Control-Allow-Headers: Content-Type, Authorization\nAccess-Control-Max-Age: 86400\n\nExamples:\n# Server response headers\nAccess-Control-Allow-Origin: https://yourapp.com\nAccess-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS\nAccess-Control-Allow-Headers: Content-Type, Authorization, X-API-Key\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 86400\n\n# Preflight request\nOPTIONS /api/users HTTP/1.1\nOrigin: https://yourapp.com\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: Content-Type, Authorization\n\n# Preflight response\nHTTP/1.1 204 No Content\nAccess-Control-Allow-Origin: https://yourapp.com\nAccess-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS\nAccess-Control-Allow-Headers: Content-Type, Authorization, X-API-Key\nAccess-Control-Max-Age: 86400',
        },
      ],
    },
    {
      title: 'Authentication & Authorization',
      commands: [
        {
          command: 'API Key Authentication',
          description: 'Simple API key-based authentication',
          usage: 'X-API-Key header or query parameter',
          example: 'API Key Authentication:\n\n# Header-based\nX-API-Key: sk-1234567890abcdef\n\n# Query parameter\n?api_key=sk-1234567890abcdef\n\nExamples:\n# Using API key in header\ncurl -H "X-API-Key: sk-1234567890abcdef" \\\n     https://api.example.com/users\n\n# Using API key in query\ncurl "https://api.example.com/users?api_key=sk-1234567890abcdef"\n\n# JavaScript example\nfetch(\'https://api.example.com/users\', {\n  headers: {\n    \'X-API-Key\': \'sk-1234567890abcdef\'\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data));',
        },
        {
          command: 'Bearer Token Authentication',
          description: 'JWT or OAuth2 Bearer token authentication',
          usage: 'Authorization: Bearer <token>',
          example: 'Bearer Token Authentication:\n\n# Authorization header\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\nExamples:\n# Using Bearer token\ncurl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \\\n     https://api.example.com/users\n\n# JavaScript with Bearer token\nfetch(\'https://api.example.com/users\', {\n  headers: {\n    \'Authorization\': \'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\'\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data));\n\n# JWT Token Structure (decoded)\n{\n  "header": {\n    "alg": "HS256",\n    "typ": "JWT"\n  },\n  "payload": {\n    "sub": "1234567890",\n    "name": "John Doe",\n    "email": "john@example.com",\n    "exp": 1640995200\n  }\n}',
        },
        {
          command: 'OAuth 2.0 Flow',
          description: 'OAuth 2.0 authorization code flow',
          usage: 'Authorization code grant for secure authentication',
          example: 'OAuth 2.0 Authorization Code Flow:\n\n# 1. Authorization Request\nGET https://auth.example.com/authorize?\n  response_type=code&\n  client_id=your_client_id&\n  redirect_uri=https://yourapp.com/callback&\n  scope=read+write&\n  state=random_string\n\n# 2. User authenticates and authorizes\n\n# 3. Authorization callback\nhttps://yourapp.com/callback?code=auth_code_here&state=random_string\n\n# 4. Exchange code for access token\nPOST https://auth.example.com/token\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&\ncode=auth_code_here&\nredirect_uri=https://yourapp.com/callback&\nclient_id=your_client_id&\nclient_secret=your_client_secret\n\n# 5. Token response\n{\n  "access_token": "eyJz93a...4k3j",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "refresh_token": "tGzv3JOkF0XG5Qx2TlKWIA",\n  "scope": "read write"\n}\n\n# 6. Use access token\ncurl -H "Authorization: Bearer eyJz93a...4k3j" \\\n     https://api.example.com/users',
        },
        {
          command: 'Basic Authentication',
          description: 'HTTP Basic authentication scheme',
          usage: 'Authorization: Basic <base64(username:password)>',
          example: 'Basic Authentication:\n\n# Authorization header\nAuthorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=\n\nExamples:\n# Using curl with basic auth\ncurl -u username:password https://api.example.com/users\n\n# Equivalent with header\ncurl -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \\\n     https://api.example.com/users\n\n# JavaScript with basic auth\nconst credentials = btoa(\'username:password\');\nfetch(\'https://api.example.com/users\', {\n  headers: {\n    \'Authorization\': `Basic ${credentials}`\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data));\n\n# Note: Use HTTPS to protect credentials\n# Consider using more secure methods like Bearer tokens',
        },
      ],
    },
    {
      title: 'CRUD Operations',
      commands: [
        {
          command: 'Create Operations',
          description: 'POST operations for creating resources',
          usage: 'POST /api/resource with request body',
          example: 'Create Resource Examples:\n\n# Create user\nPOST /api/users\nContent-Type: application/json\n\n{\n  "name": "John Doe",\n  "email": "john@example.com",\n  "age": 30,\n  "role": "user"\n}\n\n# Response\nHTTP/1.1 201 Created\nLocation: /api/users/123\n\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "age": 30,\n  "role": "user",\n  "createdAt": "2024-01-01T12:00:00Z",\n  "updatedAt": "2024-01-01T12:00:00Z"\n}\n\n# Create multiple users\nPOST /api/users/batch\nContent-Type: application/json\n\n[\n  {"name": "John", "email": "john@example.com"},\n  {"name": "Jane", "email": "jane@example.com"}\n]',
        },
        {
          command: 'Read Operations',
          description: 'GET operations for retrieving resources',
          usage: 'GET /api/resource or GET /api/resource/:id',
          example: 'Read Resource Examples:\n\n# Get all users\nGET /api/users\n\n# Response\n{\n  "data": [\n    {"id": 1, "name": "John", "email": "john@example.com"},\n    {"id": 2, "name": "Jane", "email": "jane@example.com"}\n  ],\n  "pagination": {\n    "page": 1,\n    "limit": 20,\n    "total": 2,\n    "pages": 1\n  }\n}\n\n# Get specific user\nGET /api/users/123\n\n# Response\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "age": 30,\n  "role": "user",\n  "createdAt": "2024-01-01T12:00:00Z"\n}\n\n# Filter users\nGET /api/users?role=admin&active=true\n\n# Search users\nGET /api/users?q=john&fields=name,email',
        },
        {
          command: 'Update Operations',
          description: 'PUT and PATCH operations for updating resources',
          usage: 'PUT /api/resource/:id or PATCH /api/resource/:id',
          example: 'Update Resource Examples:\n\n# PUT - Replace entire resource\nPUT /api/users/123\nContent-Type: application/json\n\n{\n  "name": "John Updated",\n  "email": "john.updated@example.com",\n  "age": 31,\n  "role": "admin"\n}\n\n# PATCH - Partial update\nPATCH /api/users/123\nContent-Type: application/json\n\n{\n  "email": "john.new@example.com"\n}\n\n# Response\nHTTP/1.1 200 OK\n\n{\n  "id": 123,\n  "name": "John Updated",\n  "email": "john.new@example.com",\n  "age": 31,\n  "role": "admin",\n  "updatedAt": "2024-01-01T13:00:00Z"\n}\n\n# Conditional update\nPATCH /api/users/123\nIf-Match: "abc123"\nContent-Type: application/json\n\n{\n  "email": "new@example.com"\n}',
        },
        {
          command: 'Delete Operations',
          description: 'DELETE operations for removing resources',
          usage: 'DELETE /api/resource/:id',
          example: 'Delete Resource Examples:\n\n# Delete user\nDELETE /api/users/123\n\n# Response\nHTTP/1.1 204 No Content\n\n# Or with confirmation\nHTTP/1.1 200 OK\n\n{\n  "message": "User deleted successfully",\n  "id": 123\n}\n\n# Soft delete (recommended)\nPATCH /api/users/123\nContent-Type: application/json\n\n{\n  "deletedAt": "2024-01-01T12:00:00Z",\n  "isActive": false\n}\n\n# Bulk delete\nDELETE /api/users?ids=1,2,3\n\n# Response\n{\n  "deleted": 3,\n  "message": "3 users deleted successfully"\n}\n\n# Conditional delete\nDELETE /api/users/123\nIf-Match: "abc123"',
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'API Design Patterns',
      commands: [
        {
          command: 'Resource Nesting',
          description: 'Hierarchical resource relationships',
          usage: '/api/users/:userId/posts/:postId/comments',
          example: 'Resource Nesting Examples:\n\n# User posts\nGET /api/users/123/posts\nPOST /api/users/123/posts\n\n# Post comments\nGET /api/posts/456/comments\nPOST /api/posts/456/comments\n\n# Specific comment\nGET /api/posts/456/comments/789\nPUT /api/posts/456/comments/789\nDELETE /api/posts/456/comments/789\n\n# Deep nesting (avoid > 3 levels)\nGET /api/users/123/posts/456/comments/789/replies\n\n# Better approach for deep nesting\nGET /api/replies?commentId=789\n\n# Response structure\n{\n  "id": 456,\n  "title": "My Post",\n  "content": "Post content",\n  "author": {\n    "id": 123,\n    "name": "John Doe"\n  },\n  "comments": [\n    {\n      "id": 789,\n      "content": "Great post!",\n      "author": {\n        "id": 124,\n        "name": "Jane Smith"\n      }\n    }\n  ]\n}',
        },
        {
          command: 'HATEOAS Implementation',
          description: 'Hypermedia as the Engine of Application State',
          usage: 'Include links in API responses for navigation',
          example: 'HATEOAS Response Examples:\n\n# User with links\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "_links": {\n    "self": {\n      "href": "/api/users/123"\n    },\n    "posts": {\n      "href": "/api/users/123/posts"\n    },\n    "edit": {\n      "href": "/api/users/123"\n    },\n    "delete": {\n      "href": "/api/users/123"\n    }\n  }\n}\n\n# Collection with pagination links\n{\n  "data": [...],\n  "pagination": {\n    "page": 1,\n    "limit": 20,\n    "total": 100,\n    "pages": 5\n  },\n  "_links": {\n    "self": {\n      "href": "/api/users?page=1&limit=20"\n    },\n    "first": {\n      "href": "/api/users?page=1&limit=20"\n    },\n    "last": {\n      "href": "/api/users?page=5&limit=20"\n    },\n    "next": {\n      "href": "/api/users?page=2&limit=20"\n    },\n    "prev": {\n      "href": "/api/users?page=1&limit=20"\n    }\n  }\n}',
        },
        {
          command: 'Composite Resources',
          description: 'Combine multiple resources in single requests',
          usage: '/api/composite?include=user,posts,comments',
          example: 'Composite Resource Examples:\n\n# Include related resources\nGET /api/users/123?include=posts,comments\n\n# Response\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "posts": [\n    {\n      "id": 456,\n      "title": "My Post",\n      "comments": [\n        {\n          "id": 789,\n          "content": "Great post!"\n        }\n      ]\n    }\n  ]\n}\n\n# Sparse fieldsets\nGET /api/users/123?fields=id,name,email\n\n# Response\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com"\n}\n\n# Composite endpoint\nPOST /api/composite\nContent-Type: application/json\n\n{\n  "requests": [\n    {"method": "GET", "path": "/users/123"},\n    {"method": "GET", "path": "/posts/456"},\n    {"method": "GET", "path": "/comments/789"}\n  ]\n}',
        },
        {
          command: 'Sidecar Resources',
          description: 'Separate operations from main resources',
          usage: '/api/users/:userId/actions, /api/posts/:postId/publish',
          example: 'Sidecar Resource Examples:\n\n# User actions\nPOST /api/users/123/actions/activate\nPOST /api/users/123/actions/deactivate\nPOST /api/users/123/actions/reset-password\n\n# Post actions\nPOST /api/posts/456/publish\nPOST /api/posts/456/unpublish\nPOST /api/posts/456/like\nDELETE /api/posts/456/like\n\n# Bulk operations\nPOST /api/users/bulk/activate\nDELETE /api/posts/bulk\n\n# Request body for actions\nPOST /api/users/123/actions/reset-password\nContent-Type: application/json\n\n{\n  "newPassword": "newSecurePassword123",\n  "confirmPassword": "newSecurePassword123"\n}\n\n# Response\n{\n  "message": "Password reset successfully",\n  "timestamp": "2024-01-01T12:00:00Z"\n}',
        },
      ],
    },
    {
      title: 'API Versioning',
      commands: [
        {
          command: 'URL Path Versioning',
          description: 'Version in URL path',
          usage: '/api/v1/users, /api/v2/users',
          example: 'URL Path Versioning:\n\n# Version 1\nGET /api/v1/users\nPOST /api/v1/users\nPUT /api/v1/users/123\n\n# Version 2\nGET /api/v2/users\nPOST /api/v2/users\nPUT /api/v2/users/123\n\n# Version differences\n# v1 response\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com"\n}\n\n# v2 response (enhanced)\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "profile": {\n    "age": 30,\n    "location": "New York"\n  },\n  "metadata": {\n    "createdAt": "2024-01-01T12:00:00Z",\n    "updatedAt": "2024-01-01T13:00:00Z"\n  }\n}',
        },
        {
          command: 'Query Parameter Versioning',
          description: 'Version as query parameter',
          usage: '/api/users?version=1, /api/users?version=2',
          example: 'Query Parameter Versioning:\n\n# Version 1\nGET /api/users?version=1\n\n# Version 2\nGET /api/users?version=2\n\n# Default version\nGET /api/users (defaults to version=1)\n\n# Multiple versions\nGET /api/users?version=1,2\n\n# Response headers indicating version\nAPI-Version: 1\nSupported-Versions: 1,2\nDeprecated-Versions: \n\n# Response with version info\n{\n  "data": [...],\n  "version": "1",\n  "availableVersions": ["1", "2"]\n}',
        },
        {
          command: 'Header Versioning',
          description: 'Version in request header',
          usage: 'Accept: application/vnd.api+json;version=1',
          example: 'Header Versioning:\n\n# Request with version header\nGET /api/users\nAccept: application/vnd.api+json;version=1\n\n# Alternative header\nGET /api/users\nAPI-Version: 1\n\n# Content negotiation\nGET /api/users\nAccept: application/vnd.myapi.v1+json\n\n# Response headers\nAPI-Version: 1\nContent-Type: application/vnd.api+json;version=1\n\n# Version negotiation\nGET /api/users\nAccept: application/vnd.api+json;version=2\n\n# Response if version not supported\nHTTP/1.1 406 Not Acceptable\n{\n  "error": "Version Not Supported",\n  "message": "Version 2 is not supported",\n  "supportedVersions": ["1"]\n}',
        },
        {
          command: 'Version Deprecation',
          description: 'Handling deprecated API versions',
          usage: 'Sunset headers, migration guides',
          example: 'Version Deprecation Examples:\n\n# Sunset header\nHTTP/1.1 200 OK\nSunset: Sat, 31 Dec 2024 23:59:59 GMT\nDeprecation: true\nLink: </api/v2/users>; rel="successor-version"\n\n# Deprecation warning\n{\n  "data": [...],\n  "warnings": [\n    {\n      "code": "DEPRECATED_VERSION",\n      "message": "API version 1 is deprecated. Please migrate to version 2.",\n      "sunsetDate": "2024-12-31T23:59:59Z",\n      "migrationGuide": "https://docs.example.com/migration/v1-to-v2"\n    }\n  ]\n}\n\n# Version lifecycle\n# 1. Announce deprecation\n# 2. Add warnings to responses\n# 3. Provide migration guide\n# 4. Set sunset date\n# 5. Remove deprecated version',
        },
      ],
    },
    {
      title: 'Pagination & Filtering',
      commands: [
        {
          command: 'Offset-based Pagination',
          description: 'Traditional offset/limit pagination',
          usage: '?page=2&limit=20 or ?offset=20&limit=20',
          example: 'Offset-based Pagination:\n\n# Page-based\nGET /api/users?page=2&limit=20\n\n# Offset-based\nGET /api/users?offset=20&limit=20\n\n# Response\n{\n  "data": [\n    {"id": 21, "name": "User 21"},\n    {"id": 22, "name": "User 22"}\n  ],\n  "pagination": {\n    "page": 2,\n    "limit": 20,\n    "offset": 20,\n    "total": 100,\n    "pages": 5,\n    "hasNext": true,\n    "hasPrev": true\n  },\n  "_links": {\n    "first": "/api/users?page=1&limit=20",\n    "last": "/api/users?page=5&limit=20",\n    "next": "/api/users?page=3&limit=20",\n    "prev": "/api/users?page=1&limit=20"\n  }\n}',
        },
        {
          command: 'Cursor-based Pagination',
          description: 'Efficient cursor pagination for large datasets',
          usage: '?cursor=next_cursor&limit=20',
          example: 'Cursor-based Pagination:\n\n# First page\nGET /api/users?limit=20\n\n# Response\n{\n  "data": [...],\n  "pagination": {\n    "hasNext": true,\n    "hasPrev": false,\n    "limit": 20\n  },\n  "cursors": {\n    "next": "eyJpZCI6MjB9",\n    "prev": null\n  }\n}\n\n# Next page\nGET /api/users?cursor=eyJpZCI6MjB5&limit=20\n\n# Previous page\nGET /api/users?cursor=eyJpZCI6MTB5&direction=prev&limit=20\n\n# Cursor encoding (base64)\n# {"id": 20, "created_at": "2024-01-01T12:00:00Z"}\n\n# Advantages:\n# - Stable for real-time data\n# - Efficient for large datasets\n# - No duplicate or missing items',
        },
        {
          command: 'Advanced Filtering',
          description: 'Complex filtering and search capabilities',
          usage: '?filter[field]=value&search=term',
          example: 'Advanced Filtering Examples:\n\n# Field filtering\nGET /api/users?role=admin&active=true\n\n# Range filtering\nGET /api/users?age[gte]=18&age[lte]=65\nGET /api/posts?created_at[gte]=2024-01-01\n\n# Array filtering\nGET /api/users?tags[]=javascript&tags[]=react\n\n# Search\nGET /api/users?search=john&fields=name,email\n\n# Complex filters\nGET /api/users?filter[role]=admin&filter[active]=true&filter[age][gte]=25\n\n# Sorting\nGET /api/users?sort=name,asc&sort=age,desc\nGET /api/users?sort=-name,age\n\n# Response with filtering metadata\n{\n  "data": [...],\n  "meta": {\n    "filters": {\n      "role": "admin",\n      "active": true,\n      "age": {"gte": 25}\n    },\n    "sort": ["name", "-age"],\n    "total": 15\n  }\n}',
        },
        {
          command: 'Field Selection',
          description: 'Request specific fields only',
          usage: '?fields=id,name,email',
          example: 'Field Selection Examples:\n\n# Single level fields\nGET /api/users/123?fields=id,name,email\n\n# Nested fields\nGET /api/users/123?fields=id,name,profile.age,posts.title\n\n# Multiple resources\nGET /api/users?fields=id,name&include=posts&postFields=id,title\n\n# Response\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com"\n}\n\n# With nested fields\n{\n  "id": 123,\n  "name": "John Doe",\n  "profile": {\n    "age": 30\n  },\n  "posts": [\n    {\n      "id": 456,\n      "title": "My Post"\n    }\n  ]\n}\n\n# Available fields endpoint\nGET /api/users/fields\n\n# Response\n{\n  "fields": ["id", "name", "email", "age", "role"],\n  "nested": {\n    "profile": ["age", "location", "bio"],\n    "posts": ["id", "title", "content"]\n  }\n}',
        },
      ],
    },
    {
      title: 'Rate Limiting & Throttling',
      commands: [
        {
          command: 'Rate Limit Headers',
          description: 'Inform clients about rate limits',
          usage: 'X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
          example: 'Rate Limit Headers:\n\nHTTP/1.1 200 OK\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 999\nX-RateLimit-Reset: 1640995200\nX-RateLimit-Retry-After: 60\n\n# Response when rate limited\nHTTP/1.1 429 Too Many Requests\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 0\nX-RateLimit-Reset: 1640995200\nRetry-After: 60\n\n{\n  "error": "Rate Limit Exceeded",\n  "message": "Too many requests. Try again in 60 seconds.",\n  "retryAfter": 60\n}\n\n# Different rate limits per endpoint\n# Global limit: 1000 requests/hour\n# Per-endpoint: 100 requests/minute\n# Authenticated: 5000 requests/hour\n# Free tier: 100 requests/hour',
        },
        {
          command: 'Rate Limiting Strategies',
          description: 'Different approaches to rate limiting',
          usage: 'Sliding window, token bucket, fixed window',
          example: 'Rate Limiting Strategies:\n\n# 1. Fixed Window Counter\n# Reset every hour/day\nLimit: 1000 requests per hour\n\n# 2. Sliding Window\n# More accurate, memory intensive\nLimit: 100 requests per minute\n\n# 3. Token Bucket\n# Burst capacity + steady rate\nLimit: 10 requests per second, burst 100\n\n# 4. Leaky Bucket\n# Smooth output rate\nLimit: Process 50 requests per second\n\n# Implementation example (Node.js)\nconst rateLimit = require(\'express-rate-limit\');\n\nconst limiter = rateLimit({\n  windowMs: 60 * 1000, // 1 minute\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: {\n    error: "Too many requests",\n    retryAfter: 60\n  },\n  standardHeaders: true,\n  legacyHeaders: false,\n});\n\napp.use(\'/api/\', limiter);',
        },
        {
          command: 'API Quotas',
          description: 'Usage quotas and billing integration',
          usage: 'X-API-Quota-Limit, X-API-Quota-Used',
          example: 'API Quota Management:\n\n# Quota headers\nX-API-Quota-Limit: 10000\nX-API-Quota-Used: 2500\nX-API-Quota-Remaining: 7500\nX-API-Quota-Reset: 2024-02-01T00:00:00Z\n\n# Quota exceeded response\nHTTP/1.1 402 Payment Required\nX-API-Quota-Limit: 1000\nX-API-Quota-Used: 1000\nX-API-Quota-Remaining: 0\n\n{\n  "error": "Quota Exceeded",\n  "message": "API quota exceeded. Please upgrade your plan.",\n  "upgradeUrl": "https://example.com/billing/upgrade",\n  "quotaReset": "2024-02-01T00:00:00Z"\n}\n\n# Tiered quotas\n# Free: 1,000 requests/month\n# Basic: 10,000 requests/month\n# Pro: 100,000 requests/month\n# Enterprise: Unlimited',
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'API Documentation',
      commands: [
        {
          command: 'OpenAPI Specification',
          description: 'Standard API documentation with OpenAPI 3.0',
          usage: 'YAML/JSON specification for API definition',
          example: 'OpenAPI 3.0 Example:\n\nopenapi: 3.0.3\ninfo:\n  title: User API\n  version: 1.0.0\n  description: API for managing users\nservers:\n  - url: https://api.example.com/v1\npaths:\n  /users:\n    get:\n      summary: Get all users\n      parameters:\n        - name: page\n          in: query\n          schema:\n            type: integer\n            default: 1\n        - name: limit\n          in: query\n          schema:\n            type: integer\n            default: 20\n      responses:\n        \'200\':\n          description: Successful response\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  data:\n                    type: array\n                    items:\n                      $ref: \'#/components/schemas/User\'\n    post:\n      summary: Create user\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: \'#/components/schemas/CreateUser\'\n      responses:\n        \'201\':\n          description: User created\n          content:\n            application/json:\n              schema:\n                $ref: \'#/components/schemas/User\'\n  /users/{id}:\n    get:\n      summary: Get user by ID\n      parameters:\n        - name: id\n          in: path\n          required: true\n          schema:\n            type: integer\n      responses:\n        \'200\':\n          description: Successful response\n          content:\n            application/json:\n              schema:\n                $ref: \'#/components/schemas/User\'\ncomponents:\n  schemas:\n    User:\n      type: object\n      properties:\n        id:\n          type: integer\n        name:\n          type: string\n        email:\n          type: string\n          format: email\n    CreateUser:\n      type: object\n      required:\n        - name\n        - email\n      properties:\n        name:\n          type: string\n        email:\n          type: string\n          format: email',
        },
        {
          command: 'Swagger UI Integration',
          description: 'Interactive API documentation',
          usage: 'Swagger UI for exploring and testing APIs',
          example: 'Swagger UI Setup:\n\n# Docker setup\ndocker run -p 80:8080 \\\n  -e SWAGGER_JSON=/api/openapi.json \\\n  -v $(pwd)/openapi.json:/api/openapi.json \\\n  swaggerapi/swagger-ui\n\n# Express.js setup\nconst swaggerUi = require(\'swagger-ui-express\');\nconst swaggerDocument = require(\'./openapi.json\');\n\napp.use(\'/api-docs\', swaggerUi.serve, swaggerUi.setup(swaggerDocument));\n\n# Custom configuration\nconst options = {\n  explorer: true,\n  swaggerOptions: {\n    persistAuthorization: true,\n    displayRequestDuration: true,\n    filter: true,\n    showExtensions: true,\n    showCommonExtensions: true,\n    docExpansion: "none",\n    defaultModelsExpandDepth: 2,\n    defaultModelExpandDepth: 2\n  }\n};\n\napp.use(\'/api-docs\', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));\n\n# Access documentation\n# http://localhost:3000/api-docs',
        },
        {
          command: 'API Testing with Postman',
          description: 'Create collections and automated tests',
          usage: 'Postman collections for API testing',
          example: 'Postman Collection Example:\n\n{\n  "info": {\n    "name": "User API Collection",\n    "description": "Collection for testing User API"\n  },\n  "variable": [\n    {\n      "key": "baseUrl",\n      "value": "https://api.example.com/v1"\n    },\n    {\n      "key": "token",\n      "value": ""\n    }\n  ],\n  "item": [\n    {\n      "name": "Authentication",\n      "item": [\n        {\n          "name": "Login",\n          "request": {\n            "method": "POST",\n            "header": [\n              {\n                "key": "Content-Type",\n                "value": "application/json"\n              }\n            ],\n            "body": {\n              "mode": "raw",\n              "raw": "{\\"email\\": \\"user@example.com\\", \\"password\\": \\"password\\"}"\n            },\n            "url": {\n              "raw": "{{baseUrl}}/auth/login",\n              "host": ["{{baseUrl}}"],\n              "path": ["auth", "login"]\n            }\n          },\n          "event": [\n            {\n              "listen": "test",\n              "script": {\n                "exec": [\n                  "pm.test(\"Status code is 200\", function () {",\n                  "    pm.response.to.have.status(200);",\n                  "});",\n                  "",\n                  "pm.test(\"Response has token\", function () {",\n                  "    var jsonData = pm.response.json();",\n                  "    pm.expect(jsonData.token).to.exist;",\n                  "    pm.collectionVariables.set(\'token\', jsonData.token);",\n                  "});"\n                ]\n              }\n            }\n          }\n        }\n      ]\n    }\n  ]\n}',
        },
        {
          command: 'API Versioning Documentation',
          description: 'Documenting API versions and changes',
          usage: 'Changelog, migration guides, deprecation notices',
          example: 'API Versioning Documentation:\n\n# Changelog Format\n## Version 2.1.0 (2024-01-15)\n### Added\n- User profile endpoints\n- Bulk operations support\n- Webhook notifications\n\n### Changed\n- Enhanced user response with profile data\n- Improved error responses\n\n### Deprecated\n- `/api/users/:userId/avatar` - Use `/api/users/:userId/profile/image`\n\n### Removed\n- Legacy authentication endpoints\n\n### Security\n- Added rate limiting headers\n- Enhanced CORS configuration\n\n# Migration Guide\n## v1 to v2 Migration\n\n### Breaking Changes\n1. **User Response Format**\n   ```json\n   // v1\n   { "id": 123, "name": "John", "email": "john@example.com" }\n   \n   // v2\n   { \n     "id": 123, \n     "name": "John", \n     "email": "john@example.com",\n     "profile": {\n       "age": 30,\n       "location": "NYC"\n     }\n   }\n   ```\n\n2. **Authentication**\n   - v1: API Key in header\n   - v2: Bearer token required\n\n### Migration Steps\n1. Update authentication method\n2. Handle new response format\n3. Update deprecated endpoints\n4. Test with v2 endpoints\n\n# Deprecation Timeline\n- **Announcement**: 2024-01-01\n- **Warning Phase**: 2024-01-01 to 2024-06-01\n- **Sunset Date**: 2024-12-31\n- **Removal**: 2025-01-01',
        },
      ],
    },
    {
      title: 'API Security Best Practices',
      commands: [
        {
          command: 'HTTPS Enforcement',
          description: 'Always use HTTPS for API communication',
          usage: 'SSL/TLS configuration, HSTS headers',
          example: 'HTTPS Security Configuration:\n\n# Force HTTPS redirect\nserver {\n    listen 80;\n    server_name api.example.com;\n    return 301 https://$server_name$request_uri;\n}\n\n# HTTPS configuration\nserver {\n    listen 443 ssl http2;\n    server_name api.example.com;\n    \n    ssl_certificate /path/to/cert.pem;\n    ssl_certificate_key /path/to/key.pem;\n    \n    # Modern SSL configuration\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;\n    ssl_prefer_server_ciphers off;\n    \n    # HSTS\n    add_header Strict-Transport-Security "max-age=63072000" always;\n    \n    # Other security headers\n    add_header X-Content-Type-Options nosniff;\n    add_header X-Frame-Options DENY;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header Referrer-Policy "strict-origin-when-cross-origin";\n}\n\n# Node.js HTTPS setup\nconst https = require(\'https\');\nconst fs = require(\'fs\');\n\nconst options = {\n  key: fs.readFileSync(\'server.key\'),\n  cert: fs.readFileSync(\'server.cert\')\n};\n\nhttps.createServer(options, app).listen(443);',
        },
        {
          command: 'Input Validation & Sanitization',
          description: 'Validate and sanitize all input data',
          usage: 'Schema validation, SQL injection prevention',
          example: 'Input Validation Examples:\n\n# Schema validation with Joi\nconst Joi = require(\'joi\');\n\nconst userSchema = Joi.object({\n  name: Joi.string().min(2).max(50).required(),\n  email: Joi.string().email().required(),\n  age: Joi.number().integer().min(18).max(120),\n  role: Joi.string().valid(\'user\', \'admin\').default(\'user\')\n});\n\n// Middleware validation\nconst validateUser = (req, res, next) => {\n  const { error } = userSchema.validate(req.body);\n  if (error) {\n    return res.status(400).json({\n      error: \'Validation Error\',\n      message: error.details[0].message\n    });\n  }\n  next();\n};\n\n# SQL injection prevention\n// Bad - vulnerable\nconst query = `SELECT * FROM users WHERE email = \'${email}\'`;\n\n// Good - parameterized queries\nconst query = \'SELECT * FROM users WHERE email = ?\';\ndb.query(query, [email]);\n\n// ORM usage\nconst user = await User.findOne({ where: { email } });\n\n# XSS prevention\nconst xss = require(\'xss\');\nconst sanitizedInput = xss(userInput);\n\n# Content Security Policy\nadd_header Content-Security-Policy "default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\';"',
        },
        {
          command: 'API Key Management',
          description: 'Secure API key generation and rotation',
          usage: 'Key generation, rotation, revocation',
          example: 'API Key Management:\n\n# Secure key generation\nconst crypto = require(\'crypto\');\n\nfunction generateApiKey() {\n  return crypto.randomBytes(32).toString(\'hex\');\n}\n\n# Key hashing for storage\nfunction hashApiKey(apiKey) {\n  return crypto.createHash(\'sha256\').update(apiKey).digest(\'hex\');\n}\n\n# Key rotation strategy\n# 1. Generate new key\n# 2. Store both old and new keys\n# 3. Allow overlap period (e.g., 24 hours)\n# 4. Remove old key after overlap\n\n# Key metadata\n{\n  "keyId": "key_123456",\n  "name": "Production API Key",\n  "createdAt": "2024-01-01T00:00:00Z",\n  "expiresAt": "2024-12-31T23:59:59Z",\n  "lastUsed": "2024-01-15T12:00:00Z",\n  "usageCount": 1250,\n  "permissions": ["read", "write"],\n  "rateLimit": {\n    "requests": 1000,\n    "window": "hour"\n  }\n}\n\n# Key revocation\nDELETE /api/keys/{keyId}\n\n# Response\n{\n  "message": "API key revoked successfully",\n  "revokedAt": "2024-01-15T12:00:00Z"\n}',
        },
        {
          command: 'OAuth 2.0 Security',
          description: 'Secure OAuth 2.0 implementation',
          usage: 'PKCE, state parameter, secure token storage',
          example: 'OAuth 2.0 Security Best Practices:\n\n# PKCE for public clients\n# Code Challenge\nconst codeVerifier = crypto.randomBytes(32).toString(\'base64url\');\nconst codeChallenge = crypto\n  .createHash(\'sha256\')\n  .update(codeVerifier)\n  .digest(\'base64url\');\n\n# Authorization request with PKCE\nGET /authorize?\n  response_type=code&\n  client_id=your_client_id&\n  redirect_uri=https://app.com/callback&\n  scope=read+write&\n  state=random_string&\n  code_challenge=abc123&\n  code_challenge_method=S256\n\n# Token exchange with code verifier\nPOST /token\ngrant_type=authorization_code&\ncode=auth_code&\nredirect_uri=https://app.com/callback&\nclient_id=your_client_id&\ncode_verifier=xyz789\n\n# State parameter validation\nconst state = generateRandomString();\nlocalStorage.setItem(\'oauth_state\', state);\n\n# Callback validation\nconst returnedState = new URLSearchParams(window.location.search).get(\'state\');\nconst storedState = localStorage.getItem(\'oauth_state\');\n\nif (returnedState !== storedState) {\n  throw new Error(\'Invalid state parameter\');\n}\n\n# Secure token storage\n// Use httpOnly cookies for web\n// Use secure storage for mobile\n// Never store tokens in localStorage for sensitive apps\n\n# Token refresh\nPOST /token\ngrant_type=refresh_token&\nrefresh_token=stored_refresh_token&\nclient_id=your_client_id',
        },
      ],
    },
    {
      title: 'API Testing Strategies',
      commands: [
        {
          command: 'Unit Testing APIs',
          description: 'Test individual API endpoints',
          usage: 'Jest, Mocha, Supertest for testing',
          example: 'API Unit Testing with Jest:\n\nconst request = require(\'supertest\');\nconst app = require(\'../app\');\n\ndescribe(\'User API\', () => {\n  describe(\'GET /api/users\', () => {\n    it(\'should return all users\', async () => {\n      const response = await request(app)\n        .get(\'/api/users\')\n        .expect(200);\n      \n      expect(response.body.data).toBeInstanceOf(Array);\n      expect(response.body.data.length).toBeGreaterThan(0);\n    });\n    \n    it(\'should paginate results\', async () => {\n      const response = await request(app)\n        .get(\'/api/users?page=1&limit=5\')\n        .expect(200);\n      \n      expect(response.body.data).toHaveLength(5);\n      expect(response.body.pagination.page).toBe(1);\n      expect(response.body.pagination.limit).toBe(5);\n    });\n  });\n  \n  describe(\'POST /api/users\', () => {\n    it(\'should create a new user\', async () => {\n      const userData = {\n        name: \'John Doe\',\n        email: \'john@example.com\',\n        age: 30\n      };\n      \n      const response = await request(app)\n        .post(\'/api/users\')\n        .send(userData)\n        .expect(201);\n      \n      expect(response.body.name).toBe(userData.name);\n      expect(response.body.email).toBe(userData.email);\n      expect(response.body.id).toBeDefined();\n    });\n    \n    it(\'should validate required fields\', async () => {\n      const response = await request(app)\n        .post(\'/api/users\')\n        .send({})\n        .expect(400);\n      \n      expect(response.body.error).toBe(\'Validation Error\');\n    });\n  });\n});',
        },
        {
          command: 'Integration Testing',
          description: 'Test API workflows and dependencies',
          usage: 'Docker, test databases, mock services',
          example: 'API Integration Testing:\n\n# Docker Compose for testing\nversion: \'3.8\'\nservices:\n  api-test:\n    build: .\n    environment:\n      - NODE_ENV=test\n      - DB_URL=postgresql://test:test@db-test:5432/testdb\n    depends_on:\n      - db-test\n      - redis-test\n  db-test:\n    image: postgres:13\n    environment:\n      - POSTGRES_DB=testdb\n      - POSTGRES_USER=test\n      - POSTGRES_PASSWORD=test\n  redis-test:\n    image: redis:6\n\n# Integration test example\ndescribe(\'User Workflow Integration\', () => {\n  beforeAll(async () => {\n    // Setup test database\n    await setupTestDatabase();\n  });\n  \n  afterAll(async () => {\n    // Cleanup\n    await cleanupTestDatabase();\n  });\n  \n  it(\'should complete user registration and login flow\', async () => {\n    // 1. Register user\n    const registerResponse = await request(app)\n      .post(\'/api/auth/register\')\n      .send({\n        name: \'John Doe\',\n        email: \'john@example.com\',\n        password: \'password123\'\n      })\n      .expect(201);\n    \n    // 2. Login user\n    const loginResponse = await request(app)\n      .post(\'/api/auth/login\')\n      .send({\n        email: \'john@example.com\',\n        password: \'password123\'\n      })\n      .expect(200);\n    \n    expect(loginResponse.body.token).toBeDefined();\n    \n    // 3. Access protected endpoint\n    const token = loginResponse.body.token;\n    const profileResponse = await request(app)\n      .get(\'/api/users/profile\')\n      .set(\'Authorization\', `Bearer ${token}`)\n      .expect(200);\n    \n    expect(profileResponse.body.email).toBe(\'john@example.com\');\n  });\n});',
        },
        {
          command: 'Load Testing APIs',
          description: 'Test API performance under load',
          usage: 'Artillery, k6, JMeter for load testing',
          example: 'Load Testing with Artillery:\n\n# artillery.yml\nconfig:\n  target: \'https://api.example.com\'\n  phases:\n    - duration: 60\n      arrivalRate: 10\n    - duration: 120\n      arrivalRate: 50\n    - duration: 60\n      arrivalRate: 100\n  payload:\n    path: "users.csv"\n    fields:\n      - "email"\n      - "password"\n\nscenarios:\n  - name: "User Registration and Login"\n    weight: 70\n    flow:\n      - post:\n          url: "/api/auth/register"\n          json:\n            name: "Test User"\n            email: "{{ email }}"\n            password: "{{ password }}"\n          capture:\n            - json: "$.token"\n              as: "authToken"\n      \n      - get:\n          url: "/api/users/profile"\n          headers:\n            Authorization: "Bearer {{ authToken }}"\n  \n  - name: "Get Users List"\n    weight: 30\n    flow:\n      - get:\n          url: "/api/users?page=1&limit=20"\n\n# k6 load test script\nimport http from \'k6/http\';\nimport { check, sleep } from \'k6\';\n\nexport let options = {\n  stages: [\n    { duration: \'2m\', target: 100 },\n    { duration: \'5m\', target: 100 },\n    { duration: \'2m\', target: 200 },\n    { duration: \'5m\', target: 200 },\n    { duration: \'2m\', target: 0 },\n  ],\n};\n\nexport default function () {\n  let response = http.get(\'https://api.example.com/users\');\n  check(response, {\n    \'status is 200\': (r) => r.status === 200,\n    \'response time < 500ms\': (r) => r.timings.duration < 500,\n  });\n  sleep(1);\n}',
        },
        {
          command: 'Contract Testing',
          description: 'Ensure API contracts are maintained',
          usage: 'Pact, Dredd for contract testing',
          example: 'Contract Testing with Pact:\n\n# Consumer test\nconst { Pact } = require(\'@pact-foundation/pact\');\nconst { like, eachLike } = require(\'@pact-foundation/pact/dsl/matchers\');\n\ndescribe(\'User API Contract\', () => {\n  const provider = new Pact({\n    consumer: \'frontend-app\',\n    provider: \'user-api\',\n    port: 1234,\n  });\n  \n  beforeAll(() => provider.setup());\n  afterAll(() => provider.finalize());\n  \n  describe(\'Get Users\', () => {\n    beforeEach(() => {\n      provider\n        .uponReceiving(\'a request for users\')\n        .withRequest({\n          method: \'GET\',\n          path: \'/api/users\',\n          headers: { \'Accept\': \'application/json\' },\n        })\n        .willRespondWith({\n          status: 200,\n          headers: { \'Content-Type\': \'application/json\' },\n          body: {\n            data: eachLike({\n              id: like(1),\n              name: like(\'John Doe\'),\n              email: like(\'john@example.com\'),\n            }),\n          },\n        });\n    });\n    \n    it(\'should return users list\', async () => {\n      const response = await fetch(\'http://localhost:1234/api/users\');\n      const data = await response.json();\n      \n      expect(response.status).toBe(200);\n      expect(data.data).toBeInstanceOf(Array);\n    });\n  });\n});\n\n# Provider verification\n# pact verify --provider-base-url=http://localhost:3000 --pact-url=./pacts/frontend-app-user-api.json',
        },
      ],
    },
    {
      title: 'GraphQL vs REST Comparison',
      commands: [
        {
          command: 'REST API Example',
          description: 'Traditional REST API approach',
          usage: 'Multiple endpoints for different resources',
          example: 'REST API Implementation:\n\n# Multiple endpoints\nGET /api/users/123\nGET /api/users/123/posts\nGET /api/posts/456/comments\n\n# Over-fetching problem\nGET /api/users/123\n# Returns all user data even if only name needed\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "age": 30,\n  "address": "123 Main St",\n  "phone": "555-0123",\n  "bio": "Software developer...",\n  "createdAt": "2024-01-01T00:00:00Z"\n}\n\n# Under-fetching problem\nGET /api/users/123\n# Need additional requests for related data\nGET /api/users/123/posts\nGET /api/users/123/followers\n\n# Versioning challenges\nGET /api/v1/users/123\nGET /api/v2/users/123\n\n# Response format changes between versions\n# v1: { "name": "John" }\n# v2: { "fullName": "John Doe" }',
        },
        {
          command: 'GraphQL API Example',
          description: 'GraphQL query-based approach',
          usage: 'Single endpoint with flexible queries',
          example: 'GraphQL API Implementation:\n\n# Single endpoint\nPOST /graphql\n\n# Query exactly what you need\nquery {\n  user(id: 123) {\n    name\n    email\n  }\n}\n\n# Response\n{\n  "data": {\n    "user": {\n      "name": "John Doe",\n      "email": "john@example.com"\n    }\n  }\n}\n\n# Get related data in one request\nquery {\n  user(id: 123) {\n    name\n    email\n    posts {\n      title\n      comments {\n        content\n        author {\n          name\n        }\n      }\n    }\n  }\n}\n\n# No versioning needed - just evolve schema\n# Add new fields without breaking existing queries\n\n# Strongly typed schema\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}',
        },
        {
          command: 'Performance Comparison',
          description: 'Compare REST vs GraphQL performance',
          usage: 'Network requests, response size, caching',
          example: 'Performance Comparison:\n\n# REST - Multiple requests\nRequest 1: GET /api/users/123\nResponse: 2KB\n\nRequest 2: GET /api/users/123/posts\nResponse: 5KB\n\nRequest 3: GET /api/posts/456/comments\nResponse: 3KB\n\nTotal: 3 requests, 10KB, 300ms\n\n# GraphQL - Single request\nRequest: POST /graphql\nQuery: user(id: 123) { name, posts { comments { content } } }\nResponse: 4KB\n\nTotal: 1 request, 4KB, 100ms\n\n# Caching\n# REST: Easy HTTP caching\nCache-Control: max-age=3600\nETag: "abc123"\n\n# GraphQL: Complex caching\n# - Field-level caching\n# - Query normalization\n# - Automatic persisted queries\n\n# Network Usage\n# REST: Predictable endpoints, easy monitoring\n# GraphQL: Flexible queries, harder to predict\n\n# Tooling\n# REST: Mature ecosystem, simple debugging\n# GraphQL: Advanced tooling, introspection',
        },
        {
          command: 'When to Choose Which',
          description: 'Decision criteria for REST vs GraphQL',
          usage: 'Use cases, team expertise, requirements',
          example: 'Choose REST When:\n\n✅ Simple, resource-based APIs\n✅ Public APIs with broad adoption\n✅ Need for simple caching\n✅ Limited mobile bandwidth\n✅ Team new to APIs\n✅ Standard CRUD operations\n✅ File uploads/downloads\n✅ Streaming responses\n\n# Examples:\n# - Payment processing APIs\n# - Social media APIs\n# - E-commerce product APIs\n# - File storage APIs\n\nChoose GraphQL When:\n\n✅ Complex data relationships\n✅ Multiple client types (web, mobile, IoT)\n✅ Rapid frontend development\n✅ Real-time updates needed\n✅ Bandwidth is critical\n✅ Strong typing required\n✅ Evolving API requirements\n✅ Microservices architecture\n\n# Examples:\n# - Social media feeds\n# - E-commerce product catalogs\n# - Analytics dashboards\n✅ Content management systems\n\n# Hybrid Approach\n# Use REST for simple operations\n# Use GraphQL for complex queries\n# Example: Stripe API - REST for payments, GraphQL for analytics',
        },
      ],
    },
  ],
};
