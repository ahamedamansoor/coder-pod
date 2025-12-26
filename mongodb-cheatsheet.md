# MongoDB Cheatsheet

This comprehensive MongoDB cheatsheet covers everything from beginner to expert level, including the latest MongoDB 7.0+ features and best practices.

## 📚 Table of Contents

- [Beginner](#beginner)
  - [Installation & Setup](#installation--setup)
  - [Basic Concepts](#basic-concepts)
  - [CRUD Operations](#crud-operations)
  - [MongoDB Shell](#mongodb-shell)
  - [Database & Collection Management](#database--collection-management)
  - [Basic Querying](#basic-querying)

- [Intermediate](#intermediate)
  - [Aggregation Framework](#aggregation-framework)
  - [Indexing](#indexing)
  - [Performance Basics](#performance-basics)
  - [Data Modeling](#data-modeling)
  - [Schema Validation](#schema-validation)
  - [Change Streams](#change-streams)

- [Advanced](#advanced)
  - [Replication](#replication)
  - [Sharding](#sharding)
  - [Security](#security)
  - [Backup & Recovery](#backup--recovery)
  - [Transactions](#transactions)
  - [Time Series Collections](#time-series-collections)

- [Expert](#expert)
  - [Performance Optimization](#performance-optimization)
  - [Monitoring & Diagnostics](#monitoring--diagnostics)
  - [MongoDB Atlas Features](#mongodb-atlas-features)
  - [MongoDB 7.0+ New Features](#mongodb-70-new-features)
  - [Advanced Patterns](#advanced-patterns)
  - [Cloud Integration](#cloud-integration)

---

## Beginner

### Installation & Setup

#### Install MongoDB Community Server
```bash
# Ubuntu/Debian
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# macOS (Homebrew)
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# Windows (Chocolatey)
choco install mongodb
```

#### Start MongoDB Service
```bash
# Start MongoDB
sudo systemctl start mongod

# Enable on boot
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod

# Stop MongoDB
sudo systemctl stop mongod
```

#### Connect to MongoDB
```bash
# Connect with default settings
mongosh

# Connect to specific host and port
mongosh --host localhost --port 27017

# Connect with authentication
mongosh --host localhost --port 27017 -u username -p password --authenticationDatabase admin

# Connect to specific database
mongosh mydatabase
```

### Basic Concepts

#### MongoDB Data Model
```javascript
// Document (BSON)
{
  "_id": ObjectId("64a7b8c9d1e2f3a4b5c6d7e8"),
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "swimming", "coding"],
  "createdAt": ISODate("2023-07-06T12:00:00Z"),
  "isActive": true
}

// Collection (Table equivalent)
// Users collection contains multiple user documents

// Database (Schema equivalent)
// myapp database contains multiple collections
```

#### BSON Data Types
```javascript
// String
"name": "John Doe"

// Integer
"age": 30

// Double (64-bit floating point)
"price": 99.99

// Boolean
"isActive": true

// Array
"tags": ["mongodb", "database", "nosql"]

// Object (Embedded document)
"address": {
  "street": "123 Main St",
  "city": "New York"
}

// ObjectId (unique identifier)
"_id": ObjectId("64a7b8c9d1e2f3a4b5c6d7e8")

// Date
"createdAt": ISODate("2023-07-06T12:00:00Z")

// Null
"middleName": null

// Binary data
"avatar": BinData(0, "base64data...")

// Regular expression
"pattern": /^mongodb$/i

// JavaScript code
"calculate": function() { return this.price * 1.1; }
```

### CRUD Operations

#### Create Operations
```javascript
// Insert single document
db.users.insertOne({
  name: "Alice Smith",
  age: 25,
  email: "alice@example.com",
  createdAt: new Date()
})

// Insert multiple documents
db.users.insertMany([
  {
    name: "Bob Johnson",
    age: 35,
    email: "bob@example.com"
  },
  {
    name: "Carol Williams",
    age: 28,
    email: "carol@example.com"
  }
])

// Insert with custom _id
db.users.insertOne({
  _id: "custom-id-123",
  name: "David Brown",
  age: 40
})
```

#### Read Operations
```javascript
// Find all documents
db.users.find()

// Find with criteria
db.users.find({ age: { $gt: 30 } })

// Find with projection (select specific fields)
db.users.find({ age: { $gte: 25 } }, { name: 1, email: 1, _id: 0 })

// Find one document
db.users.findOne({ name: "Alice Smith" })

// Pretty print results
db.users.find().pretty()

// Count documents
db.users.countDocuments({ age: { $gte: 25 } })

// Limit and skip (pagination)
db.users.find().limit(10).skip(20)

// Sort results
db.users.find().sort({ age: 1, name: -1 }) // 1 = ascending, -1 = descending
```

#### Update Operations
```javascript
// Update single document
db.users.updateOne(
  { name: "Alice Smith" },
  { $set: { age: 26, lastUpdated: new Date() } }
)

// Update multiple documents
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { category: "young" } }
)

// Replace document
db.users.replaceOne(
  { name: "Bob Johnson" },
  { name: "Robert Johnson", age: 36, email: "robert@example.com" }
)

// Increment field
db.users.updateOne(
  { name: "Alice Smith" },
  { $inc: { loginCount: 1 } }
)

// Add to array
db.users.updateOne(
  { name: "Alice Smith" },
  { $push: { hobbies: "photography" } }
)

// Remove from array
db.users.updateOne(
  { name: "Alice Smith" },
  { $pull: { hobbies: "reading" } }
)

// Upsert (update or insert)
db.users.updateOne(
  { email: "newuser@example.com" },
  { 
    $set: { name: "New User", age: 25 },
    $setOnInsert: { createdAt: new Date() }
  },
  { upsert: true }
)
```

#### Delete Operations
```javascript
// Delete single document
db.users.deleteOne({ name: "Alice Smith" })

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 25 } })

// Delete all documents (use with caution)
db.users.deleteMany({})

// Drop entire collection
db.users.drop()
```

### MongoDB Shell

#### Shell Navigation
```bash
# Show current database
db

# Switch database
use mydatabase

# Show all databases
show dbs

# Show all collections in current database
show collections

# Show collection stats
db.users.stats()

# Show collection indexes
db.users.getIndexes()
```

#### Shell Helpers
```javascript
// Create collection
db.createCollection("users")

// Drop collection
db.users.drop()

// Rename collection
db.users.renameCollection("profiles")

// Create index
db.users.createIndex({ email: 1 })

// Explain query execution plan
db.users.find({ age: { $gt: 30 } }).explain()

// Run JavaScript file
load("myscript.js")

// Set shell options
config.set("displayBatchSize", 20)
```

#### Shell Variables
```javascript
// Store query in variable
var youngUsers = db.users.find({ age: { $lt: 30 } })

// Iterate through cursor
youngUsers.forEach(function(doc) {
  print(doc.name + " - " + doc.age)
})

// Use variables in queries
var minAge = 25
db.users.find({ age: { $gte: minAge } })
```

### Database & Collection Management

#### Database Operations
```javascript
// Create database (created on first write)
use newdatabase

// Drop database
db.dropDatabase()

// Get database stats
db.stats()

// Get database version
db.version()

// Get server status
db.serverStatus()
```

#### Collection Operations
```javascript
// Create collection with options
db.createCollection("logs", {
  capped: true,
  size: 100000,
  max: 1000
})

// Create validation rules
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string"
        },
        price: {
          bsonType: "number",
          minimum: 0,
          description: "must be a positive number"
        }
      }
    }
  }
})

// Get collection information
db.users.getCollectionInfos()

// Estimate document count (faster than count)
db.users.estimatedDocumentCount()
```

### Basic Querying

#### Comparison Operators
```javascript
// Equal to
db.users.find({ age: 30 })

// Not equal to
db.users.find({ age: { $ne: 30 } })

// Greater than
db.users.find({ age: { $gt: 30 } })

// Greater than or equal to
db.users.find({ age: { $gte: 30 } })

// Less than
db.users.find({ age: { $lt: 30 } })

// Less than or equal to
db.users.find({ age: { $lte: 30 } })

// In array
db.users.find({ age: { $in: [25, 30, 35] } })

// Not in array
db.users.find({ age: { $nin: [25, 30, 35] } })
```

#### Logical Operators
```javascript
// AND (implicit)
db.users.find({ age: 30, city: "New York" })

// Explicit AND
db.users.find({
  $and: [
    { age: { $gte: 25 } },
    { age: { $lte: 35 } }
  ]
})

// OR
db.users.find({
  $or: [
    { age: { $lt: 25 } },
    { age: { $gt: 35 } }
  ]
})

// NOR
db.users.find({
  $nor: [
    { age: { $lt: 25 } },
    { age: { $gt: 35 } }
  ]
})

// NOT
db.users.find({
  age: { $not: { $lt: 25 } }
})
```

#### Element Operators
```javascript
// Field exists
db.users.find({ email: { $exists: true } })

// Field doesn't exist
db.users.find({ phone: { $exists: false } })

// Check BSON type
db.users.find({ age: { $type: "number" } })
db.users.find({ createdAt: { $type: "date" } })

// Type codes (alternative)
db.users.find({ age: { $type: 16 } }) // 16 = 32-bit integer
db.users.find({ age: { $type: 18 } }) // 18 = 64-bit integer
```

#### Array Operators
```javascript
// Array contains specific value
db.users.find({ hobbies: "reading" })

// Array contains all specified values
db.users.find({ hobbies: { $all: ["reading", "coding"] } })

// Array size
db.users.find({ hobbies: { $size: 3 } })

// Array element matches condition
db.users.find({ "hobbies.0": "reading" })

// Using $elemMatch
db.users.find({
  scores: { $elemMatch: { $gt: 80, $subject: "math" } }
})
```

---

## Intermediate

### Aggregation Framework

#### Basic Aggregation Pipeline
```javascript
// Simple pipeline
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
])

// Multi-stage pipeline
db.products.aggregate([
  // Stage 1: Filter
  { $match: { price: { $gt: 100 } } },
  
  // Stage 2: Group
  { 
    $group: {
      _id: "$category",
      count: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      maxPrice: { $max: "$price" }
    }
  },
  
  // Stage 3: Project
  {
    $project: {
      category: "$_id",
      productCount: "$count",
      averagePrice: { $round: ["$avgPrice", 2] },
      highestPrice: "$maxPrice",
      _id: 0
    }
  },
  
  // Stage 4: Sort
  { $sort: { productCount: -1 } }
])
```

#### Aggregation Stages
```javascript
// $match - Filter documents
db.sales.aggregate([
  { $match: { date: { $gte: ISODate("2023-01-01") } } }
])

// $group - Group documents
db.sales.aggregate([
  {
    $group: {
      _id: "$region",
      totalSales: { $sum: "$amount" },
      avgSale: { $avg: "$amount" },
      count: { $sum: 1 },
      uniqueCustomers: { $addToSet: "$customerId" }
    }
  }
])

// $project - Reshape documents
db.users.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      age: 1,
      email: 1,
      isAdult: { $gte: ["$age", 18] },
      _id: 0
    }
  }
])

// $unwind - Deconstruct arrays
db.users.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: "$hobbies", count: { $sum: 1 } } }
])

// $lookup - Left join with another collection
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" }
])

// $addFields - Add new fields
db.products.aggregate([
  {
    $addFields: {
      discountedPrice: { $multiply: ["$price", 0.9] },
      category: { $toUpper: "$category" }
    }
  }
])

// $sort - Sort documents
db.users.aggregate([
  { $sort: { age: -1, name: 1 } }
])

// $limit - Limit number of documents
db.users.aggregate([
  { $sort: { score: -1 } },
  { $limit: 10 }
])

// $skip - Skip documents
db.users.aggregate([
  { $skip: 20 },
  { $limit: 10 }
])
```

#### Advanced Aggregation Operators
```javascript
// Conditional operators
db.sales.aggregate([
  {
    $project: {
      region: 1,
      amount: 1,
      performance: {
        $cond: {
          if: { $gte: ["$amount", 1000] },
          then: "Excellent",
          else: {
            $cond: {
              if: { $gte: ["$amount", 500] },
              then: "Good",
              else: "Average"
            }
          }
        }
      }
    }
  }
])

// String operators
db.users.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      emailLower: { $toLower: "$email" },
      initials: { $concat: [{ $substrCP: ["$firstName", 0, 1] }, { $substrCP: ["$lastName", 0, 1] }] }
    }
  }
])

// Date operators
db.orders.aggregate([
  {
    $project: {
      orderId: 1,
      orderDate: 1,
      year: { $year: "$orderDate" },
      month: { $month: "$orderDate" },
      day: { $dayOfMonth: "$orderDate" },
      dayOfWeek: { $dayOfWeek: "$orderDate" },
      quarter: { $switch: {
        branches: [
          { case: { $lte: [{ $month: "$orderDate" }, 3] }, then: "Q1" },
          { case: { $lte: [{ $month: "$orderDate" }, 6] }, then: "Q2" },
          { case: { $lte: [{ $month: "$orderDate" }, 9] }, then: "Q3" }
        ],
        default: "Q4"
      }}
    }
  }
])

// Array operators
db.products.aggregate([
  {
    $project: {
      name: 1,
      tags: 1,
      tagCount: { $size: "$tags" },
      hasPremium: { $in: ["premium", "$tags"] },
      allTags: { $concatArrays: ["$tags", ["new"]] }
    }
  }
])
```

### Indexing

#### Create Indexes
```javascript
// Single field index
db.users.createIndex({ email: 1 })

// Compound index
db.users.createIndex({ age: 1, name: 1 })

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Sparse index (only indexes documents that have the field)
db.users.createIndex({ phone: 1 }, { sparse: true })

// TTL index (auto-delete documents after specified time)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })

// Text index for full-text search
db.articles.createIndex({ title: "text", content: "text" })

// 2dsphere index for geospatial queries
db.places.createIndex({ location: "2dsphere" })

// Hashed index for sharding
db.users.createIndex({ _id: "hashed" })

// Partial index (index only documents matching filter)
db.users.createIndex(
  { status: 1 },
  { partialFilterExpression: { status: { $exists: true } } }
)

// Collation-aware index (case-insensitive)
db.users.createIndex(
  { name: 1 },
  { collation: { locale: "en", strength: 2 } }
)
```

#### Index Management
```javascript
// List all indexes
db.users.getIndexes()

// Get index stats
db.users.getIndexStats()

// Drop index
db.users.dropIndex("email_1")

// Drop all indexes except _id
db.users.dropIndexes()

// Rebuild all indexes
db.users.reIndex()

// Create index in background (non-blocking)
db.users.createIndex({ email: 1 }, { background: true })
```

#### Index Usage Analysis
```javascript
// Check if query uses index
db.users.find({ email: "test@example.com" }).explain("executionStats")

// Index coverage
db.users.find({ age: 30, name: "John" }).explain()

// Index filter (force index usage)
db.users.find({ age: 30 }).hint({ age: 1 })

// Create index filter
db.runCommand({
  collMod: "users",
  indexFilters: [
    {
      query: { age: { $gte: 0 } },
      index: { age: 1 }
    }
  ]
})
```

### Performance Basics

#### Query Optimization
```javascript
// Use covered queries (index contains all needed fields)
db.users.createIndex({ email: 1, name: 1 })
db.users.find({ email: "test@example.com" }, { name: 1, _id: 0 })

// Avoid large skips in pagination
// Bad: db.users.find().skip(100000).limit(10)
// Good: Use range-based pagination
db.users.find({ _id: { $gt: lastId } }).limit(10)

// Use projections to limit data transfer
db.users.find({}, { name: 1, email: 1 })

// Use $elemMatch for array queries
db.users.find({ scores: { $elemMatch: { subject: "math", score: { $gt: 90 } } } })

// Use $exists instead of checking for null
db.users.find({ field: { $exists: true } })
```

#### Performance Monitoring
```javascript
// Enable slow query logging
db.setProfilingLevel(1, { slowms: 100 })

// Check profiling data
db.system.profile.find().sort({ ts: -1 }).limit(5)

// Get server metrics
db.serverStatus().connections
db.serverStatus().opcounters
db.serverStatus().network

// Collection stats
db.users.stats()

// Index usage stats
db.users.aggregate([{ $indexStats: {} }])
```

### Data Modeling

#### Embedding vs Referencing
```javascript
// Embedding (denormalized) - Good for one-to-one/one-to-few
{
  _id: ObjectId("..."),
  title: "Blog Post",
  content: "Post content...",
  author: {
    name: "John Doe",
    email: "john@example.com"
  },
  comments: [
    { text: "Great post!", author: "Alice", date: ISODate("...") }
  ]
}

// Referencing (normalized) - Good for one-to-many/many-to-many
// Posts collection
{
  _id: ObjectId("..."),
  title: "Blog Post",
  authorId: ObjectId("..."),
  commentIds: [ObjectId("..."), ObjectId("...")]
}

// Authors collection
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com"
}
```

#### Design Patterns
```javascript
// Attribute pattern
db.products.insertOne({
  name: "Laptop",
  attributes: {
    color: "silver",
    weight: "1.5kg",
    screenSize: "15inch"
  }
})

// Bucket pattern (for time series or logs)
db.metrics.insertOne({
  timestamp: ISODate("2023-07-06T12:00:00Z"),
  metrics: {
    cpu: [45, 50, 48, 52],
    memory: [60, 62, 61, 63],
    disk: [30, 31, 29, 32]
  },
  count: 4
})

// Extended reference pattern
db.orders.insertOne({
  _id: ObjectId("..."),
  customerId: ObjectId("..."),
  customerName: "John Doe", // Denormalized for quick access
  items: [
    {
      productId: ObjectId("..."),
      productName: "Laptop", // Denormalized
      quantity: 1,
      price: 999
    }
  ]
})
```

### Schema Validation

#### Validation Rules
```javascript
// Create collection with validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: {
          bsonType: "string",
          minLength: 2,
          maxLength: 50
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        },
        age: {
          bsonType: "number",
          minimum: 0,
          maximum: 150
        },
        address: {
          bsonType: "object",
          properties: {
            street: { bsonType: "string" },
            city: { bsonType: "string" },
            zipCode: {
              bsonType: "string",
              pattern: "^\\d{5}(-\\d{4})?$"
            }
          }
        }
      }
    }
  },
  validationLevel: "strict", // or "moderate"
  validationAction: "error" // or "warn"
})

// Add validation to existing collection
db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email"],
      properties: {
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        }
      }
    }
  },
  validationLevel: "moderate"
})
```

### Change Streams

#### Basic Change Streams
```javascript
// Watch collection changes
const changeStream = db.users.watch()

changeStream.on('change', (change) => {
  console.log('Change detected:', change)
})

// Watch with pipeline
const changeStream = db.users.watch([
  { $match: { operationType: { $in: ['insert', 'update', 'delete'] } } }
])

// Watch database changes
const dbChangeStream = db.watch()

// Watch entire cluster
const clusterChangeStream = mongos.watch()
```

#### Change Stream Events
```javascript
// Process different operation types
changeStream.on('change', (change) => {
  switch (change.operationType) {
    case 'insert':
      console.log('New document:', change.fullDocument)
      break
    case 'update':
      console.log('Updated document ID:', change.documentKey)
      console.log('Updated fields:', change.updateDescription.updatedFields)
      break
    case 'delete':
      console.log('Deleted document ID:', change.documentKey)
      break
    case 'replace':
      console.log('Replaced document:', change.fullDocument)
      break
  }
})

// Change stream with options
const changeStream = db.users.watch(
  [], // pipeline
  { 
    fullDocument: 'updateLookup', // Get full document on updates
    batchSize: 10
  }
)
```

---

## Advanced

### Replication

#### Replica Set Setup
```javascript
// Initialize replica set
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})

// Add member to existing replica set
rs.add("mongo4:27017")

// Add arbiter
rs.addArb("arbiter:27017")

// Remove member
rs.remove("mongo4:27017")

// Reconfigure replica set
rs.reconfig({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongo1:27017", priority: 2 },
    { _id: 1, host: "mongo2:27017", priority: 1 },
    { _id: 2, host: "mongo3:27017", priority: 1, votes: 0 } // Hidden member
  ]
})
```

#### Replica Set Management
```javascript
// Check replica set status
rs.status()

// Check replica set configuration
rs.conf()

// Step down primary
rs.stepDown(60) // Step down for 60 seconds

// Force reconfiguration (emergency)
rs.reconfig(config, { force: true })

// Check member state
rs.isMaster()

// Sync from specific member
db.adminCommand({
  replSetSyncFrom: "mongo2:27017"
})

// Freeze member (prevent becoming primary)
rs.freeze(30) // Freeze for 30 seconds
```

#### Read Preferences
```javascript
// Connection string with read preference
mongodb://host1,host2,host3/mydb?readPreference=secondary

// In application (Node.js example)
const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(uri, {
  readPreference: 'secondaryPreferred'
})

// Query with read preference
db.users.find().readPref('secondary')
db.users.find().readPref('nearest', [{ dc: 'east' }, { dc: 'west' }])
```

### Sharding

#### Enable Sharding
```javascript
// Enable sharding for database
sh.enableSharding("myapp")

// Shard collection
sh.shardCollection("myapp.users", { _id: "hashed" })

// Shard with range key
sh.shardCollection("myapp.orders", { customerId: 1, orderDate: 1 })

// Check sharding status
sh.status()

// List shards
sh.addShard("mongo4:27017")
sh.addShard("rs0/mongo1:27017,mongo2:27017,mongo3:27017")
```

#### Shard Key Management
```javascript
// Check existing shard key
db.collections.getShardDistribution()

// Reshard collection (MongoDB 5.0+)
db.adminCommand({
  reshardCollection: "myapp.users",
  key: { email: "hashed" }
})

// Split chunk manually
sh.splitAt("myapp.users", { shardKey: { _id: ObjectId("...") } })

sh.splitFind("myapp.users", { _id: ObjectId("...") })

// Move chunk
moveChunk("myapp.users", { shardKey: { _id: ObjectId("...") } }, "shard2")

// Enable auto-splitter and balancer
sh.startBalancer()

// Disable balancer
sh.stopBalancer()

// Check balancer state
sh.getBalancerState()
sh.isBalancerRunning()
```

#### Chunks and Balancing
```javascript
// Check chunk distribution
db.chunks.find({ ns: "myapp.users" })

// Check balancer settings
sh.getBalancerHost()
sh.setBalancerState(true)

// Configure balancer window
sh.startBalancer()
sh.setBalancerState(true, { startTime: "23:00", stopTime: "06:00" })

// Migrate chunks
db.adminCommand({
  moveChunk: "myapp.users",
  find: { _id: ObjectId("...") },
  to: "shard2",
  secondaryThrottle: true
})
```

### Security

#### Authentication
```javascript
// Create admin user
use admin
db.createUser({
  user: "admin",
  pwd: passwordPrompt(),
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]
})

// Create application user
use myapp
db.createUser({
  user: "appuser",
  pwd: "securepassword",
  roles: [
    { role: "readWrite", db: "myapp" },
    { role: "read", db: "logging" }
  ]
})

// Create custom role
db.createRole({
  role: "appReadOnly",
  privileges: [
    { resource: { db: "myapp", collection: "" }, actions: ["find"] }
  ],
  roles: []
})

// Grant role to user
db.grantRolesToUser("appuser", ["appReadOnly"])
```

#### Authorization
```javascript
// Built-in roles
// read: Read-only access
// readWrite: Read and write access
// dbAdmin: Database administration
// userAdmin: User management
// clusterAdmin: Cluster administration
// readAnyDatabase: Read any database
// readWriteAnyDatabase: Read/write any database
// userAdminAnyDatabase: User admin for any database
// dbAdminAnyDatabase: DB admin for any database

// Check user privileges
db.getUser("appuser")
db.runCommand({ usersInfo: "appuser", showPrivileges: true })

// Revoke roles
db.revokeRolesFromUser("appuser", ["appReadOnly"])
```

#### Encryption
```javascript
// Enable encryption at rest (requires Enterprise)
// In mongod.conf:
security:
  enableEncryption: true
  encryptionKeyFile: /path/to/keyfile

// Field-level encryption (MongoDB 4.2+)
const encryption = new ClientEncryption(
  mongoClient,
  {
    keyVaultNamespace: "encryption.__keyVault",
    kmsProviders: { local: { key: Buffer.from(base64Key, 'base64') } }
  }
)

// Encrypt field
const encryptedValue = await encryption.encrypt("sensitive data", {
  keyId: keyId,
  algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic"
})

// Queryable Encryption (MongoDB 7.0+)
// Create encrypted collection
db.createCollection("patients", {
  encryptedFields: {
    fields: [
      { path: "patientId", bsonType: "string", queries: { queryType: "equality" } },
      { path: "ssn", bsonType: "string", queries: { queryType: "equality" } }
    ]
  }
})
```

#### Network Security
```javascript
// Enable TLS/SSL
// In mongod.conf:
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /path/to/mongodb.pem
    CAFile: /path/to/ca.pem

// Bind to specific IP
net:
  bindIp: 127.0.0.1,10.0.0.1

// IP whitelist
db.createUser({
  user: "whitelistedUser",
  pwd: "password",
  roles: ["readWrite"],
  restrictions: [
    { clientSource: ["192.168.1.0/24", "10.0.0.0/8"] }
  ]
})
```

### Backup & Recovery

#### mongodump/mongorestore
```bash
# Backup entire database
mongodump --host localhost:27017 --db myapp --out /backup/mongodb/

# Backup specific collection
mongodump --host localhost:27017 --db myapp --collection users --out /backup/

# Backup with authentication
mongodump --host localhost:27017 -u admin -p password --authenticationDatabase admin --db myapp

# Compressed backup
mongodump --host localhost:27017 --db myapp --gzip --out /backup/

# Restore database
mongorestore --host localhost:27017 --db myapp /backup/mongodb/myapp/

# Restore specific collection
mongorestore --host localhost:27017 --db myapp --collection users /backup/mongodb/myapp/users.bson

# Restore with drop
mongorestore --host localhost:27017 --db myapp --drop /backup/mongodb/myapp/
```

#### Point-in-Time Recovery with Oplog
```javascript
// Enable oplog
// In mongod.conf (replica set):
replication:
  oplogSizeMB: 1024

// Backup oplog
mongodump --host localhost:27017 --db local --collection oplog.rs --out /backup/oplog/

// Restore to point in time
mongorestore --host localhost:27017 --db myapp /backup/mongodb/myapp/
# Then apply oplog up to specific timestamp
```

#### MongoDB Atlas Backup
```bash
# Using Atlas CLI
atlas backups snapshots list --clusterName myCluster

# Download snapshot
atlas backups snapshots download --clusterName myCluster --snapshotId 64a7b8c9d1e2f3a4b5c6d7e8

# Restore from snapshot
atlas clusters restore --clusterName myCluster --snapshotId 64a7b8c9d1e2f3a4b5c6d7e8 --targetClusterName restoredCluster
```

### Transactions

#### Multi-Document Transactions
```javascript
// Start transaction
const session = db.getMongo().startSession()
session.startTransaction()

try {
  // Operations within transaction
  const ordersCollection = session.getDatabase("myapp").orders
  const inventoryCollection = session.getDatabase("myapp").inventory
  
  // Insert order
  const orderResult = await ordersCollection.insertOne({
    customerId: ObjectId("..."),
    items: [{ productId: "product1", quantity: 2 }],
    total: 199.98
  })
  
  // Update inventory
  await inventoryCollection.updateOne(
    { productId: "product1" },
    { $inc: { quantity: -2 } }
  )
  
  // Commit transaction
  await session.commitTransaction()
  console.log("Transaction committed successfully")
} catch (error) {
  // Abort transaction on error
  await session.abortTransaction()
  console.error("Transaction aborted:", error)
} finally {
  session.endSession()
}
```

#### Transaction Configuration
```javascript
// Transaction with options
const transactionOptions = {
  readConcern: { level: "snapshot" },
  writeConcern: { w: "majority", j: true },
  readPreference: "primary"
}

session.startTransaction(transactionOptions)

// Retry transaction
async function runTransactionWithRetry(txnFunc, session) {
  while (true) {
    try {
      await txnFunc(session)
      break
    } catch (error) {
      if (error.errorLabels && error.errorLabels.includes("TransientTransactionError")) {
        console.log("Transient transaction error, retrying...")
        continue
      } else {
        throw error
      }
    }
  }
}
```

### Time Series Collections

#### Create Time Series Collection
```javascript
// Create time series collection
db.createCollection("weather", {
  timeseries: {
    timeField: "timestamp",
    metaField: "location",
    granularity: "hours" // or "minutes", "seconds"
  }
})

// Insert time series data
db.weather.insertMany([
  {
    location: "New York",
    timestamp: ISODate("2023-07-06T12:00:00Z"),
    temperature: 25.5,
    humidity: 60
  },
  {
    location: "New York", 
    timestamp: ISODate("2023-07-06T13:00:00Z"),
    temperature: 26.2,
    humidity: 58
  }
])
```

#### Time Series Queries
```javascript
// Query time range
db.weather.find({
  timestamp: {
    $gte: ISODate("2023-07-01T00:00:00Z"),
    $lt: ISODate("2023-07-07T00:00:00Z")
  }
})

// Aggregate by time intervals
db.weather.aggregate([
  {
    $match: {
      location: "New York",
      timestamp: {
        $gte: ISODate("2023-07-01T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: {
        $dateTrunc: {
          date: "$timestamp",
          unit: "day",
          binSize: 1
        }
      },
      avgTemp: { $avg: "$temperature" },
      maxTemp: { $max: "$temperature" },
      minTemp: { $min: "$temperature" },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// Downsample with $bucketAuto
db.weather.aggregate([
  {
    $bucketAuto: {
      groupBy: "$timestamp",
      buckets: 24, // 24 hours
      output: {
        avgTemp: { $avg: "$temperature" },
        count: { $sum: 1 }
      }
    }
  }
])
```

---

## Expert

### Performance Optimization

#### Advanced Indexing Strategies
```javascript
// Wildcard indexes (MongoDB 4.2+)
db.products.createIndex({ "$**": 1 })

// Partial wildcard index
db.products.createIndex(
  { "$**": 1 },
  { partialFilterExpression: { status: "active" } }
)

// Collation indexes for case-insensitive search
db.users.createIndex(
  { name: 1 },
  { collation: { locale: "en", strength: 2 } }
)

// Use collation in queries
db.users.find({ name: "john" }).collation({ locale: "en", strength: 2 })

// Compound wildcard index
db.products.createIndex(
  { "attributes.$**": 1 },
  { wildcardProjection: { "attributes.category": 0 } }
)
```

#### Query Optimization
```javascript
// Use covered queries
db.users.createIndex({ email: 1, name: 1, age: 1 })
db.users.find({ email: "test@example.com" }, { name: 1, age: 1, _id: 0 })

// Index intersection
db.users.createIndex({ age: 1 })
db.users.createIndex({ city: 1 })
// MongoDB can use multiple indexes for compound queries

// Force specific index
db.users.find({ age: 30 }).hint({ age: 1 })

// Use $explain for query analysis
db.users.find({ age: { $gt: 30 } }).explain("executionStats")

// Plan cache management
db.runCommand({ planCacheListPlans: "users", query: { age: 30 } })
db.runCommand({ planCacheClear: "users" })
```

#### Connection Pooling
```javascript
// Connection string with pool settings
mongodb://host1,host2,host3/mydb?maxPoolSize=100&minPoolSize=10&maxIdleTimeMS=30000

// In application (Node.js)
const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(uri, {
  maxPoolSize: 100,
  minPoolSize: 10,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000
})
```

### Monitoring & Diagnostics

#### Performance Monitoring
```javascript
// Real-time monitoring
db.runCommand({ serverStatus: 1 })

// Collection metrics
db.runCommand({ collStats: "users" })

// Index usage
db.users.aggregate([{ $indexStats: {} }])

// Operation profiling
db.setProfilingLevel(2) // Profile all operations
db.setProfilingLevel(1, { slowms: 100 }) // Profile slow operations

// Analyze slow queries
db.system.profile.find().sort({ ts: -1 }).limit(5)

// Current operations
db.currentOp()

// Kill long-running operation
db.killOp(<operationId>)
```

#### Metrics Collection
```javascript
// Custom metrics collection
db.metrics.insertOne({
  timestamp: new Date(),
  serverStatus: db.serverStatus(),
  databaseStats: db.stats(),
  collections: {
    users: db.users.stats(),
    orders: db.orders.stats()
  }
})

// Monitoring script
function collectMetrics() {
  const metrics = {
    timestamp: new Date(),
    connections: db.serverStatus().connections,
    opcounters: db.serverStatus().opcounters,
    network: db.serverStatus().network,
    memory: db.serverStatus().mem
  }
  
  db.monitoring.insertOne(metrics)
}

// Schedule metrics collection
setInterval(collectMetrics, 60000) // Every minute
```

#### Diagnostic Commands
```javascript
// Validate collection
db.users.validate()

// Check data integrity
db.runCommand({ validate: "users", full: true })

// Check index consistency
db.runCommand({ checkMetadataConsistency: 1 })

// Server diagnostics
db.runCommand({ getDiagnosticData: 1 })

// Connection diagnostics
db.runCommand({ connectionStatus: 1 })
```

### MongoDB Atlas Features

#### Atlas Search
```javascript
// Create search index
db.movies.createSearchIndex("default", {
  "mappings": {
    "dynamic": true,
    "fields": {
      "title": {
        "type": "string",
        "analyzer": "lucene.standard"
      },
      "year": {
        "type": "number"
      },
      "genres": {
        "type": "string"
      }
    }
  }
})

// Atlas Search queries
db.movies.aggregate([
  {
    $search: {
      "index": "default",
      "text": {
        "query": "action adventure",
        "path": "title"
      }
    }
  },
  {
    $project: {
      title: 1,
      year: 1,
      score: { $meta: "searchScore" }
    }
  }
])
```

#### Atlas Data Lake
```javascript
// Query data in Atlas Data Lake
// Connection string includes data lake configuration
// Use standard MongoDB queries on archived data
```

#### Atlas Triggers
```javascript
// Create trigger via Atlas UI or API
// Example: Trigger on document insert
function onDocumentInsert(changeEvent) {
  // Process new document
  const doc = changeEvent.fullDocument;
  
  // Send notification
  notifications.insertOne({
    type: "new_user",
    userId: doc._id,
    timestamp: new Date()
  });
}
```

#### Atlas Functions
```javascript
// Serverless function in Atlas
exports = function(payload, response) {
  const collection = context.services.get("mongodb-atlas").db("mydb").collection("users");
  
  return collection.find({}).toArray()
    .then(users => {
      response.setStatusCode(200);
      response.setBody(JSON.stringify(users));
    })
    .catch(err => {
      response.setStatusCode(500);
      response.setBody(JSON.stringify({ error: err.message }));
    });
};
```

### MongoDB 7.0+ New Features

#### Queryable Encryption (GA)
```javascript
// Create encrypted collection with Queryable Encryption
db.createCollection("patients", {
  encryptedFields: {
    fields: [
      {
        path: "patientId",
        bsonType: "string",
        queries: { queryType: "equality" }
      },
      {
        path: "ssn",
        bsonType: "string", 
        queries: { queryType: "equality" }
      },
      {
        path: "medicalRecords",
        bsonType: "array",
        queries: { queryType: "equality" }
      }
    ]
  }
})

// Query encrypted fields
db.patients.find({ patientId: "PAT12345" })

// Compound encrypted queries
db.patients.find({
  patientId: "PAT12345",
  ssn: "123-45-6789"
})
```

#### Enhanced Performance
```javascript
// Concurrent storage engine transactions (MongoDB 7.0)
// Automatically adjusts concurrent transactions
db.adminCommand({
  setParameter: 1,
  storageEngineConcurrentReadTransactions: 128,
  storageEngineConcurrentWriteTransactions: 128
})

// Improved query optimizer
// Automatic index selection improvements
// Better performance for complex aggregations
```

#### New Aggregation Features
```javascript
// $dateTrunc operator (MongoDB 7.0)
db.sales.aggregate([
  {
    $group: {
      _id: {
        $dateTrunc: {
          date: "$saleDate",
          unit: "week",
          binSize: 1,
          startOfWeek: "monday"
        }
      },
      totalSales: { $sum: "$amount" }
    }
  }
])

// $function operator for custom functions
db.orders.aggregate([
  {
    $project: {
      orderTotal: {
        $function: {
          body: function(items) {
            return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          },
          args: ["$items"],
          lang: "js"
        }
      }
    }
  }
])
```

#### Enhanced Sharding
```javascript
// Auto-merger for chunks (MongoDB 7.0)
sh.enableAutoMerger("myapp.orders")

// Configure auto-merger
db.runCommand({
  configureCollectionBalancing: "myapp.orders",
  enableAutoMerger: true
})

// Shard key analysis
db.orders.analyzeShardKey({ customerId: 1 })

// Query analyzer configuration
db.orders.configureQueryAnalyzer({
  mode: "full",
  sampleRate: 0.1
})
```

### Advanced Patterns

#### CQRS Pattern
```javascript
// Command side - Write optimized
db.commands.orders.insertOne({
  _id: ObjectId("..."),
  customerId: ObjectId("..."),
  items: [...],
  status: "pending",
  timestamp: new Date()
})

// Query side - Read optimized (denormalized)
db.queries.orders.insertOne({
  _id: ObjectId("..."),
  orderId: ObjectId("..."),
  customerName: "John Doe",
  customerEmail: "john@example.com",
  items: [...],
  totalAmount: 299.99,
  status: "pending",
  timestamp: new Date()
})

// Event sourcing
db.events.insertOne({
  _id: ObjectId("..."),
  aggregateId: ObjectId("..."),
  eventType: "OrderCreated",
  eventData: { /* order data */ },
  eventVersion: 1,
  timestamp: new Date()
})
```

#### Materialized Views
```javascript
// Create materialized view using change streams
function updateMaterializedView() {
  const pipeline = [
    { $match: { operationType: { $in: ['insert', 'update', 'delete'] } } }
  ]
  
  const changeStream = db.orders.watch(pipeline)
  
  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      // Update materialized view
      db.orderSummary.updateOne(
        { customerId: change.fullDocument.customerId },
        {
          $inc: { orderCount: 1, totalAmount: change.fullDocument.total },
          $set: { lastOrderDate: change.fullDocument.timestamp }
        },
        { upsert: true }
      )
    }
  })
}
```

#### Graph Data Modeling
```javascript
// Nodes collection
db.nodes.insertMany([
  { _id: "user1", type: "user", name: "Alice" },
  { _id: "user2", type: "user", name: "Bob" },
  { _id: "post1", type: "post", title: "Hello World" }
])

// Edges collection
db.edges.insertMany([
  { from: "user1", to: "post1", relationship: "authored", date: ISODate("...") },
  { from: "user2", to: "post1", relationship: "liked", date: ISODate("...") },
  { from: "user1", to: "user2", relationship: "follows", date: ISODate("...") }
])

// Graph traversal with aggregation
db.edges.aggregate([
  { $match: { from: "user1", relationship: "follows" } },
  { $lookup: {
    from: "nodes",
    localField: "to",
    foreignField: "_id",
    as: "target"
  }},
  { $unwind: "$target" },
  { $project: {
    userName: "$target.name",
    userType: "$target.type"
  }}
])
```

### Cloud Integration

#### MongoDB Atlas CLI
```bash
# Install Atlas CLI
curl -fsSL https://www.mongodb.org/static/atlas/cli/atlas-cli/install.sh | bash

# Login to Atlas
atlas auth login

# List clusters
atlas clusters list

# Create cluster
atlas cluster create myCluster --tier M30 --region US_EAST_1

# Backup cluster
atlas backups snapshots create --clusterName myCluster

# Restore cluster
atlas clusters restore --clusterName myCluster --snapshotId <snapshotId>

# Search indexes
atlas clusters search indexes create --clusterName myCluster --db mydb --collection products

# Data API
atlas dataapi keys create
```

#### Kubernetes Integration
```yaml
# MongoDB Enterprise Operator for Kubernetes
apiVersion: mongodb.com/v1
kind: MongoDB
metadata:
  name: my-replica-set
spec:
  members: 3
  version: "7.0.0"
  type: ReplicaSet
  security:
    authentication:
      enabled: true
      modes: ["SCRAM"]
  persistent: true
  cloudProvider:
    aws:
      region: "us-east-1"
      nodeGroup: "mongo-nodes"
```

#### Terraform Integration
```hcl
# Terraform configuration for Atlas
provider "mongodbatlas" {
  public_key = var.atlas_public_key
  private_key = var.atlas_private_key
}

resource "mongodbatlas_cluster" "my_cluster" {
  name                = "my-cluster"
  project_id          = var.project_id
  provider_name       = "AWS"
  provider_region_name = "US_EAST_1"
  provider_instance_type_name = "M30"
  
  auto_scaling {
    disk_gb_enabled = true
  }
  
  backup_enabled = true
  
  cluster_type = "REPLICASET"
  
  replication_specs {
    num_shards = 1
    regions_config {
      region_name     = "US_EAST_1"
      electable_nodes = 3
      priority        = 7
      read_only_nodes = 0
    }
  }
}
```

---

## 🚀 Quick Commands Reference

### Database Operations
```bash
# Database management
show dbs                    # List databases
use mydb                   # Switch/create database
db                         # Show current database
db.dropDatabase()          # Drop current database
db.stats()                 # Database statistics

# Collection management
show collections           # List collections
db.createCollection("name") # Create collection
db.collection.drop()       # Drop collection
db.collection.stats()      # Collection statistics
```

### CRUD Operations
```bash
# Insert
db.collection.insertOne({...})     # Insert single document
db.collection.insertMany([...])    # Insert multiple documents

# Find
db.collection.find()               # Find all documents
db.collection.findOne({...})       # Find one document
db.collection.countDocuments({...}) # Count documents

# Update
db.collection.updateOne(filter, update)   # Update one document
db.collection.updateMany(filter, update)  # Update multiple documents
db.collection.replaceOne(filter, replacement) # Replace document

# Delete
db.collection.deleteOne(filter)     # Delete one document
db.collection.deleteMany(filter)    # Delete multiple documents
```

### Index Operations
```bash
# Create indexes
db.collection.createIndex({field: 1})           # Single field
db.collection.createIndex({field1: 1, field2: 1}) # Compound
db.collection.createIndex({field: "hashed"})    # Hashed
db.collection.createIndex({field: "text"})      # Text

# Index management
db.collection.getIndexes()                       # List indexes
db.collection.dropIndex("indexName")             # Drop index
db.collection.getIndexStats()                    # Index statistics
```

### Administration
```bash
# Server status
db.serverStatus()               # Server information
db.runCommand({serverStatus: 1}) # Detailed server status

# Current operations
db.currentOp()                  # Current operations
db.killOp(opId)                # Kill operation

# Profiling
db.setProfilingLevel(level, {slowms: 100}) # Set profiling
db.system.profile.find()        # Profile data
```

### Replication
```bash
# Replica set
rs.initiate()                   # Initialize replica set
rs.conf()                       # Show configuration
rs.status()                     # Show status
rs.add("host:port")             # Add member
rs.stepDown(seconds)            # Step down primary
```

### Sharding
```bash
# Sharding
sh.enableSharding("dbname")     # Enable sharding for database
sh.shardCollection("ns", key)   # Shard collection
sh.status()                     # Show sharding status
sh.addShard("host:port")        # Add shard
sh.startBalancer()              # Start balancer
sh.stopBalancer()               # Stop balancer
```

---

## 📖 Performance Tips

### Query Optimization
1. **Use indexes effectively** - Create indexes on frequently queried fields
2. **Use covered queries** - Select only indexed fields when possible
3. **Avoid large skips** - Use range-based pagination instead
4. **Use projections** - Limit returned fields to reduce data transfer
5. **Monitor slow queries** - Use profiling to identify slow operations

### Indexing Best Practices
1. **Create compound indexes** for multi-field queries
2. **Use partial indexes** for selective indexing
3. **Consider sparse indexes** for optional fields
4. **Monitor index usage** with `$indexStats`
5. **Remove unused indexes** to improve write performance

### Schema Design
1. **Embed vs reference** based on data access patterns
2. **Avoid unbounded arrays** - use separate collections for large arrays
3. **Use appropriate data types** - numbers for numeric data, dates for timestamps
4. **Consider document size limits** (16MB per document)
5. **Design for your queries**, not just for data storage

---

## 🔧 Configuration Examples

### mongod.conf
```yaml
# Storage
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  wiredTiger:
    engineConfig:
      cacheSizeGB: 4
      journalCompressor: snappy
      directoryForIndexes: false
    collectionConfig:
      blockCompressor: snappy
    indexConfig:
      prefixCompression: true

# System Log
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log
  logRotate: rename
  verbosity: 1

# Network
net:
  port: 27017
  bindIp: 127.0.0.1,10.0.0.1
  maxIncomingConnections: 1000

# Process Management
processManagement:
  timeZoneInfo: /usr/share/zoneinfo

# Security
security:
  authorization: enabled
  keyFile: /etc/mongodb-keyfile

# Replication
replication:
  replSetName: myReplicaSet
  oplogSizeMB: 1024

# Sharding
sharding:
  clusterRole: configsvr  # or shardsvr
```

### Connection Strings
```bash
# Standalone
mongodb://username:password@localhost:27017/mydb

# Replica set
mongodb://username:password@host1:27017,host2:27017,host3:27017/mydb?replicaSet=myRS

# Sharded cluster
mongodb://username:password@mongos1:27017,mongos2:27017/mydb

# With SSL and options
mongodb://username:password@localhost:27017/mydb?ssl=true&replicaSet=myRS&authSource=admin&readPreference=secondaryPreferred

# Atlas cluster
mongodb+srv://username:password@cluster0.abcde.mongodb.net/mydb?retryWrites=true&w=majority
```

---

*This comprehensive MongoDB cheatsheet covers everything from beginner to expert level. Keep it handy for quick reference and best practices!*
