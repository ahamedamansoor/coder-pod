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
          command: 'REST Architectural Constraints',
          description: 'Core principles of REST architecture',
          usage: 'Client-Server, Stateless, Cacheable, Uniform Interface',
          example: `REST Architectural Constraints:
1. Client-Server: Separation of concerns
2. Stateless: No client context stored on server
3. Cacheable: Responses must define themselves as cacheable
4. Uniform Interface: Standardized interface between components
5. Layered System: Architecture composed of hierarchical layers
6. Code on Demand (optional): Servers can temporarily extend functionality`,
        },
        {
          command: 'HTTP Methods Overview',
          description: 'Standard HTTP methods for REST operations',
          usage: 'GET, POST, PUT, PATCH, DELETE',
          example: `HTTP Methods and Their Uses:

GET    - Retrieve resource(s)
POST   - Create new resource
PUT    - Update/Replace entire resource
PATCH  - Partial update of resource
DELETE - Remove resource
HEAD   - Get headers only
OPTIONS - Get allowed methods`,
        },
        {
          command: 'HTTP Method Examples',
          description: 'Practical examples of HTTP method usage',
          usage: 'RESTful endpoint examples',
          example: `Examples:
GET    /api/users           # Get all users
GET    /api/users/123       # Get specific user
POST   /api/users           # Create new user
PUT    /api/users/123       # Update entire user
PATCH  /api/users/123       # Partial update user
DELETE /api/users/123       # Delete user`,
        },
        {
          command: 'Good Resource Naming',
          description: 'Best practices for API endpoint naming',
          usage: 'Use nouns, plural form, hierarchical structure',
          example: `Good Resource Naming:

# Use nouns, not verbs
GET /api/users          # ✓ Good
GET /api/getUsers       # ✗ Bad

# Use plural form
GET /api/users          # ✓ Good
GET /api/user           # ✗ Inconsistent

# Hierarchical structure
GET /api/users/123/posts/456/comments  # ✓ Good

# Query parameters for filtering
GET /api/users?role=admin&active=true   # ✓ Good

# Pagination
GET /api/users?page=2&limit=20          # ✓ Good`,
        },
        {
          command: 'Bad Resource Naming Examples',
          description: 'Examples of poor API endpoint naming',
          usage: 'What to avoid in REST API design',
          example: `Bad Examples:
GET /api/getAllUsers
POST /api/createUser
PUT /api/updateUser/123
DELETE /api/removeUser/123`,
        },
        {
          command: 'cURL GET Request',
          description: 'Make GET request with curl',
          usage: 'curl for API testing',
          example: `# Using curl
# GET request
curl -X GET https://api.example.com/users`,
        },
        {
          command: 'cURL POST Request',
          description: 'Make POST request with JSON body',
          usage: 'curl with JSON payload',
          example: `# POST with JSON body
curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John", "email": "john@example.com"}'`,
        },
        {
          command: 'cURL PUT Request',
          description: 'Make PUT request with curl',
          usage: 'curl for updating resources',
          example: `# PUT request
curl -X PUT https://api.example.com/users/123 \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Updated"}'`,
        },
        {
          command: 'cURL DELETE Request',
          description: 'Make DELETE request with curl',
          usage: 'curl for removing resources',
          example: `# DELETE request
curl -X DELETE https://api.example.com/users/123`,
        },
        {
          command: 'JavaScript GET Request',
          description: 'Make GET request with fetch',
          usage: 'fetch API for REST calls',
          example: `// Using JavaScript fetch
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));`,
        },
        {
          command: 'JavaScript POST Request',
          description: 'Make POST request with fetch',
          usage: 'fetch with JSON body',
          example: `// POST with fetch
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  })
})
.then(response => response.json())
.then(data => console.log(data));`,
        },
      ],
    },
    {
      title: 'HTTP Status Codes',
      commands: [
        {
          command: '200 OK Status Code',
          description: 'Successful request response',
          usage: 'Standard success response',
          example: `200 OK - Request successful
GET /api/users/123 → 200 OK`,
        },
        {
          command: '201 Created Status Code',
          description: 'Resource created successfully',
          usage: 'Response for POST requests',
          example: `201 Created - Resource created
POST /api/users → 201 Created`,
        },
        {
          command: '202 Accepted Status Code',
          description: 'Request accepted for processing',
          usage: 'Async operation acknowledgment',
          example: `202 Accepted - Request accepted for processing
POST /api/process → 202 Accepted`,
        },
        {
          command: '204 No Content Status Code',
          description: 'Success with no content to return',
          usage: 'Response for DELETE operations',
          example: `204 No Content - Success, no content to return
DELETE /api/users/123 → 204 No Content`,
        },
        {
          command: '201 Created Response Example',
          description: 'Complete 201 response structure',
          usage: 'Location header and response body',
          example: `Examples:
// Response with 201 Created
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "location": "/api/users/123"
}`,
        },
        {
          command: '400 Bad Request Error',
          description: 'Invalid request error',
          usage: 'Client-side validation errors',
          example: `Client Error Status Codes:

400 Bad Request - Invalid request`,
        },
        {
          command: '401 Unauthorized Error',
          description: 'Authentication required',
          usage: 'Missing or invalid credentials',
          example: `401 Unauthorized - Authentication required`,
        },
        {
          command: '403 Forbidden Error',
          description: 'Insufficient permissions',
          usage: 'Authenticated but not authorized',
          example: `403 Forbidden - Insufficient permissions`,
        },
        {
          command: '404 Not Found Error',
          description: 'Resource not found',
          usage: 'Resource does not exist',
          example: `404 Not Found - Resource not found`,
        },
        {
          command: '409 Conflict Error',
          description: 'Resource conflict',
          usage: 'Resource state conflict',
          example: `409 Conflict - Resource conflict`,
        },
        {
          command: '422 Unprocessable Entity Error',
          description: 'Validation errors',
          usage: 'Semantic validation failures',
          example: `422 Unprocessable Entity - Validation errors`,
        },
        {
          command: '400 Bad Request Response',
          description: 'Complete 400 error response',
          usage: 'Error response structure',
          example: `Examples:
// 400 Bad Request
{
  "error": "Bad Request",
  "message": "Invalid email format",
  "code": "INVALID_EMAIL"
}`,
        },
        {
          command: '401 Unauthorized Response',
          description: 'Complete 401 error response',
          usage: 'Authentication error structure',
          example: `// 401 Unauthorized
{
  "error": "Unauthorized",
  "message": "Authentication token required"
}`,
        },
        {
          command: '404 Not Found Response',
          description: 'Complete 404 error response',
          usage: 'Not found error structure',
          example: `// 404 Not Found
{
  "error": "Not Found",
  "message": "User with ID 999 not found"
}`,
        },
        {
          command: '422 Validation Error Response',
          description: 'Complete 422 error response',
          usage: 'Validation error details',
          example: `// 422 Unprocessable Entity
{
  "error": "Validation Error",
  "message": "Invalid input data",
  "errors": {
    "email": ["Email is required"],
    "age": ["Age must be at least 18"]
  }
}`,
        },
        {
          command: '500 Internal Server Error',
          description: 'Unexpected server error',
          usage: 'Server-side error handling',
          example: `Server Error Status Codes:

500 Internal Server Error - Unexpected server error`,
        },
        {
          command: '502 Bad Gateway Error',
          description: 'Invalid upstream response',
          usage: 'Gateway/proxy errors',
          example: `502 Bad Gateway - Invalid response from upstream server`,
        },
        {
          command: '503 Service Unavailable Error',
          description: 'Server temporarily unavailable',
          usage: 'Maintenance or overload',
          example: `503 Service Unavailable - Server temporarily unavailable`,
        },
        {
          command: '504 Gateway Timeout Error',
          description: 'Upstream server timeout',
          usage: 'Gateway timeout errors',
          example: `504 Gateway Timeout - Upstream server timeout`,
        },
        {
          command: '500 Internal Server Error Response',
          description: 'Complete 500 error response',
          usage: 'Server error structure',
          example: `Examples:
// 500 Internal Server Error
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "timestamp": "2024-01-01T12:00:00Z",
  "requestId": "req_123456789"
}`,
        },
        {
          command: '503 Service Unavailable Response',
          description: 'Complete 503 error response',
          usage: 'Service unavailable structure',
          example: `// 503 Service Unavailable
{
  "error": "Service Unavailable",
  "message": "Server is under maintenance",
  "retryAfter": 300
}`,
        },
      ],
    },
    {
      title: 'Request and Response Headers',
      commands: [
        {
          command: 'Common Request Headers',
          description: 'Essential headers for API requests',
          usage: 'Content-Type, Authorization, Accept, User-Agent',
          example: `Common Request Headers:

Content-Type: application/json
Authorization: Bearer <token>
Accept: application/json
User-Agent: MyApp/1.0`,
        },
        {
          command: 'JSON Content Headers',
          description: 'Headers for JSON requests',
          usage: 'Content-Type and Accept for JSON',
          example: `# JSON content
curl -H "Content-Type: application/json" \\
     -H "Authorization: Bearer eyJhbGciOi..." \\
     -H "Accept: application/json" \\
     https://api.example.com/users`,
        },
        {
          command: 'Form Data Headers',
          description: 'Headers for form data requests',
          usage: 'Content-Type for forms',
          example: `# Form data
curl -H "Content-Type: application/x-www-form-urlencoded" \\
     -d "name=John&email=john@example.com" \\
     https://api.example.com/users`,
        },
        {
          command: 'File Upload Headers',
          description: 'Headers for file uploads',
          usage: 'multipart/form-data content type',
          example: `# File upload
curl -H "Content-Type: multipart/form-data" \\
     -F "file=@document.pdf" \\
     https://api.example.com/upload`,
        },
        {
          command: 'Custom Headers',
          description: 'Custom API headers',
          usage: 'X- prefixed headers for extensions',
          example: `# Custom headers
curl -H "X-API-Key: your-api-key" \\
     -H "X-Request-ID: req-123456" \\
     https://api.example.com/users`,
        },
        {
          command: 'Common Response Headers',
          description: 'Essential headers in API responses',
          usage: 'Content-Type, Cache-Control, ETag, RateLimit',
          example: `Common Response Headers:

Content-Type: application/json
Cache-Control: max-age=3600
ETag: "abc123"
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200`,
        },
        {
          command: 'Response Headers Example',
          description: 'Complete response with headers',
          usage: 'HTTP response with headers',
          example: `Examples:
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600, public
ETag: "abc123"
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
X-Request-ID: req-123456789

{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}`,
        },
        {
          command: 'CORS Headers Configuration',
          description: 'Cross-Origin Resource Sharing setup',
          usage: 'Access-Control headers',
          example: `CORS Headers Configuration:

Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400`,
        },
        {
          command: 'CORS Server Headers',
          description: 'Server-side CORS headers',
          usage: 'Specific origin and methods',
          example: `# Server response headers
Access-Control-Allow-Origin: https://yourapp.com
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400`,
        },
        {
          command: 'CORS Preflight Request',
          description: 'OPTIONS request for CORS',
          usage: 'Preflight request structure',
          example: `# Preflight request
OPTIONS /api/users HTTP/1.1
Origin: https://yourapp.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, Authorization`,
        },
        {
          command: 'CORS Preflight Response',
          description: 'Response to CORS preflight',
          usage: '204 No Content with CORS headers',
          example: `# Preflight response
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://yourapp.com
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key
Access-Control-Max-Age: 86400`,
        },
      ],
    },
    {
      title: 'Authentication & Authorization',
      commands: [
        {
          command: 'API Key Header Authentication',
          description: 'API key in request header',
          usage: 'X-API-Key header',
          example: `API Key Authentication:

# Header-based
X-API-Key: sk-1234567890abcdef`,
        },
        {
          command: 'API Key Query Authentication',
          description: 'API key in query parameter',
          usage: 'api_key query parameter',
          example: `# Query parameter
?api_key=sk-1234567890abcdef`,
        },
        {
          command: 'cURL API Key Header',
          description: 'Use API key with curl',
          usage: 'curl with X-API-Key header',
          example: `# Using API key in header
curl -H "X-API-Key: sk-1234567890abcdef" \\
     https://api.example.com/users`,
        },
        {
          command: 'cURL API Key Query',
          description: 'Use API key in query with curl',
          usage: 'curl with api_key parameter',
          example: `# Using API key in query
curl "https://api.example.com/users?api_key=sk-1234567890abcdef"`,
        },
        {
          command: 'JavaScript API Key Authentication',
          description: 'Use API key with fetch',
          usage: 'fetch with X-API-Key header',
          example: `# JavaScript example
fetch('https://api.example.com/users', {
  headers: {
    'X-API-Key': 'sk-1234567890abcdef'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        },
        {
          command: 'Bearer Token Authorization',
          description: 'JWT or OAuth2 Bearer token',
          usage: 'Authorization: Bearer <token>',
          example: `Bearer Token Authentication:

# Authorization header
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
        },
        {
          command: 'cURL Bearer Token',
          description: 'Use Bearer token with curl',
          usage: 'curl with Authorization header',
          example: `# Using Bearer token
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \\
     https://api.example.com/users`,
        },
        {
          command: 'JavaScript Bearer Token',
          description: 'Use Bearer token with fetch',
          usage: 'fetch with Authorization header',
          example: `# JavaScript with Bearer token
fetch('https://api.example.com/users', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        },
        {
          command: 'JWT Token Header',
          description: 'JWT token header structure',
          usage: 'Decoded JWT header',
          example: `# JWT Token Structure (decoded)
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "exp": 1640995200
  }
}`,
        },
        {
          command: 'OAuth 2.0 Authorization Request',
          description: 'Step 1: Authorization request',
          usage: 'Authorization endpoint with parameters',
          example: `OAuth 2.0 Authorization Code Flow:

# 1. Authorization Request
GET https://auth.example.com/authorize?
  response_type=code&
  client_id=your_client_id&
  redirect_uri=https://yourapp.com/callback&
  scope=read+write&
  state=random_string`,
        },
        {
          command: 'OAuth 2.0 Authorization Callback',
          description: 'Step 2: Authorization callback',
          usage: 'Redirect with authorization code',
          example: `# 2. User authenticates and authorizes

# 3. Authorization callback
https://yourapp.com/callback?code=auth_code_here&state=random_string`,
        },
        {
          command: 'OAuth 2.0 Token Exchange',
          description: 'Step 3: Exchange code for token',
          usage: 'Token endpoint with authorization code',
          example: `# 4. Exchange code for access token
POST https://auth.example.com/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=auth_code_here&
redirect_uri=https://yourapp.com/callback&
client_id=your_client_id&
client_secret=your_client_secret`,
        },
        {
          command: 'OAuth 2.0 Token Response',
          description: 'Step 4: Token response',
          usage: 'Access token and refresh token',
          example: `# 5. Token response
{
  "access_token": "eyJz93a...4k3j",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "tGzv3JOkF0XG5Qx2TlKWIA",
  "scope": "read write"
}`,
        },
        {
          command: 'OAuth 2.0 Use Access Token',
          description: 'Step 5: Use access token',
          usage: 'Bearer token for API calls',
          example: `# 6. Use access token
curl -H "Authorization: Bearer eyJz93a...4k3j" \\
     https://api.example.com/users`,
        },
        {
          command: 'Basic Authentication Header',
          description: 'HTTP Basic auth header',
          usage: 'Authorization: Basic <base64>',
          example: `Basic Authentication:

# Authorization header
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`,
        },
        {
          command: 'cURL Basic Auth',
          description: 'Use Basic auth with curl',
          usage: 'curl -u username:password',
          example: `# Using curl with basic auth
curl -u username:password https://api.example.com/users`,
        },
        {
          command: 'cURL Basic Auth Header',
          description: 'Basic auth with explicit header',
          usage: 'curl with Authorization header',
          example: `# Equivalent with header
curl -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \\
     https://api.example.com/users`,
        },
        {
          command: 'JavaScript Basic Authentication',
          description: 'Use Basic auth with fetch',
          usage: 'btoa() for base64 encoding',
          example: `# JavaScript with basic auth
const credentials = btoa('username:password');
fetch('https://api.example.com/users', {
  headers: {
    'Authorization': \`Basic \${credentials}\`
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        },
        {
          command: 'Basic Auth Security Note',
          description: 'Security considerations for Basic auth',
          usage: 'HTTPS and alternatives',
          example: `# Note: Use HTTPS to protect credentials
# Consider using more secure methods like Bearer tokens`,
        },
      ],
    },
    {
      title: 'CRUD Operations',
      commands: [
        {
          command: 'Create User Request',
          description: 'POST request to create user',
          usage: 'POST /api/users with JSON body',
          example: `Create Resource Examples:

# Create user
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "role": "user"
}`,
        },
        {
          command: 'Create User Response',
          description: '201 response for created user',
          usage: 'Location header and user data',
          example: `# Response
HTTP/1.1 201 Created
Location: /api/users/123

{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "role": "user",
  "createdAt": "2024-01-01T12:00:00Z",
  "updatedAt": "2024-01-01T12:00:00Z"
}`,
        },
        {
          command: 'Create Multiple Users',
          description: 'Batch create users',
          usage: 'POST /api/users/batch with array',
          example: `# Create multiple users
POST /api/users/batch
Content-Type: application/json

[
  {"name": "John", "email": "john@example.com"},
  {"name": "Jane", "email": "jane@example.com"}
]`,
        },
        {
          command: 'Get All Users Request',
          description: 'GET request for all users',
          usage: 'GET /api/users',
          example: `Read Resource Examples:

# Get all users
GET /api/users`,
        },
        {
          command: 'Get All Users Response',
          description: 'Paginated users list response',
          usage: 'Data array with pagination',
          example: `# Response
{
  "data": [
    {"id": 1, "name": "John", "email": "john@example.com"},
    {"id": 2, "name": "Jane", "email": "jane@example.com"}
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 2,
    "pages": 1
  }
}`,
        },
        {
          command: 'Get Specific User Request',
          description: 'GET request for single user',
          usage: 'GET /api/users/:id',
          example: `# Get specific user
GET /api/users/123`,
        },
        {
          command: 'Get Specific User Response',
          description: 'Single user response',
          usage: 'User object data',
          example: `# Response
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "role": "user",
  "createdAt": "2024-01-01T12:00:00Z"
}`,
        },
        {
          command: 'Filter Users Request',
          description: 'GET request with filters',
          usage: 'Query parameters for filtering',
          example: `# Filter users
GET /api/users?role=admin&active=true`,
        },
        {
          command: 'Search Users Request',
          description: 'GET request with search',
          usage: 'Search and field selection',
          example: `# Search users
GET /api/users?q=john&fields=name,email`,
        },
        {
          command: 'PUT Update Request',
          description: 'PUT request to replace entire resource',
          usage: 'PUT /api/users/:id with full object',
          example: `Update Resource Examples:

# PUT - Replace entire resource
PUT /api/users/123
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "age": 31,
  "role": "admin"
}`,
        },
        {
          command: 'PATCH Update Request',
          description: 'PATCH request for partial update',
          usage: 'PATCH /api/users/:id with partial data',
          example: `# PATCH - Partial update
PATCH /api/users/123
Content-Type: application/json

{
  "email": "john.new@example.com"
}`,
        },
        {
          command: 'Update Response',
          description: '200 response for updated resource',
          usage: 'Updated resource data',
          example: `# Response
HTTP/1.1 200 OK

{
  "id": 123,
  "name": "John Updated",
  "email": "john.new@example.com",
  "age": 31,
  "role": "admin",
  "updatedAt": "2024-01-01T13:00:00Z"
}`,
        },
        {
          command: 'Conditional Update Request',
          description: 'Update with ETag condition',
          usage: 'If-Match header for optimistic locking',
          example: `# Conditional update
PATCH /api/users/123
If-Match: "abc123"
Content-Type: application/json

{
  "email": "new@example.com"
}`,
        },
        {
          command: 'Delete User Request',
          description: 'DELETE request to remove user',
          usage: 'DELETE /api/users/:id',
          example: `Delete Resource Examples:

# Delete user
DELETE /api/users/123`,
        },
        {
          command: 'Delete User Response 204',
          description: '204 response for successful delete',
          usage: 'No content response',
          example: `# Response
HTTP/1.1 204 No Content`,
        },
        {
          command: 'Delete User Response 200',
          description: '200 response with confirmation',
          usage: 'JSON confirmation message',
          example: `# Or with confirmation
HTTP/1.1 200 OK

{
  "message": "User deleted successfully",
  "id": 123
}`,
        },
        {
          command: 'Soft Delete Request',
          description: 'PATCH for soft delete',
          usage: 'Mark as deleted instead of removing',
          example: `# Soft delete (recommended)
PATCH /api/users/123
Content-Type: application/json

{
  "deletedAt": "2024-01-01T12:00:00Z",
  "isActive": false
}`,
        },
        {
          command: 'Bulk Delete Request',
          description: 'Delete multiple resources',
          usage: 'DELETE with query parameters',
          example: `# Bulk delete
DELETE /api/users?ids=1,2,3`,
        },
        {
          command: 'Bulk Delete Response',
          description: 'Response for bulk delete',
          usage: 'Count of deleted items',
          example: `# Response
{
  "deleted": 3,
  "message": "3 users deleted successfully"
}`,
        },
        {
          command: 'Conditional Delete Request',
          description: 'Delete with condition',
          usage: 'If-Match header for delete',
          example: `# Conditional delete
DELETE /api/users/123
If-Match: "abc123"`,
        },
      ],
    },
    // Continue with more sections...
  ],
};
