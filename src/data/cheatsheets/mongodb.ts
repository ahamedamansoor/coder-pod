import { Database } from 'lucide-react';

export const mongodbCheatsheet = {
  id: 'mongodb',
  name: 'MongoDB',
  description: 'Master MongoDB from basics to advanced features (MongoDB 4.4-7.x)',
  icon: Database,
  colorTheme: 'green' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with MongoDB',
      commands: [
        {
          command: 'MongoDB Overview',
          description: 'Introduction to MongoDB database',
          usage: 'Understanding MongoDB basics',
          example: `MongoDB Overview:
- NoSQL document database
- Stores data in JSON-like BSON documents
- Flexible schema design
- Horizontal scaling
- Rich query language
- Aggregation framework
- Full-text search
- ACID transactions`,
        },
        {
          command: 'Install MongoDB Ubuntu',
          description: 'Install MongoDB on Ubuntu/Debian',
          usage: 'apt package manager installation',
          example: `# Ubuntu/Debian Installation
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org`,
        },
        {
          command: 'Install MongoDB macOS',
          description: 'Install MongoDB on macOS with Homebrew',
          usage: 'Homebrew installation',
          example: `# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community`,
        },
        {
          command: 'Install MongoDB Windows',
          description: 'Install MongoDB on Windows',
          usage: 'Download and run installer',
          example: `# Windows Installation
# Download from https://www.mongodb.com/try/download/community
# Run installer and follow setup wizard`,
        },
        {
          command: 'Install MongoDB CentOS',
          description: 'Install MongoDB on CentOS/RHEL',
          usage: 'yum package manager installation',
          example: `# CentOS/RHEL Installation
sudo yum install -y mongodb-org`,
        },
        {
          command: 'Install MongoDB Docker',
          description: 'Run MongoDB in Docker container',
          usage: 'Docker deployment',
          example: `# Docker Installation
docker run --name mongodb -p 27017:27017 -d mongo:7.0`,
        },
        {
          command: 'Verify MongoDB Installation',
          description: 'Check MongoDB version and installation',
          usage: 'mongod, mongo, mongosh version commands',
          example: `# Verify Installation
mongod --version
mongo --version
mongosh --version`,
        },
        {
          command: 'Start MongoDB Service',
          description: 'Start and check MongoDB service status',
          usage: 'systemctl commands',
          example: `# Start MongoDB service
sudo systemctl start mongod
sudo systemctl status mongod`,
        },
        {
          command: 'Connect to MongoDB',
          description: 'Connect to MongoDB shell',
          usage: 'mongosh command',
          example: `# Connect to MongoDB
mongosh`,
        },
        {
          command: 'MongoDB Shell Basics',
          description: 'Basic mongosh commands',
          usage: 'show dbs, use, show collections',
          example: `# MongoDB Shell Basics
show dbs                    # List databases
use mydb                    # Switch to database
show collections            # Show collections in current db
help                        # Show help`,
        },
        {
          command: 'Create Database',
          description: 'Create a new database',
          usage: 'use database_name',
          example: `# Create database
use myapp                   # Creates/switches to myapp database
# Database is created when first document is inserted`,
        },
        {
          command: 'Create Collection',
          description: 'Create a collection',
          usage: 'db.createCollection()',
          example: `# Create collection
db.createCollection("users")
db.createCollection("products", { capped: true, size: 100000 })`,
        },
        {
          command: 'Insert Single Document',
          description: 'Insert one document into collection',
          usage: 'db.collection.insertOne()',
          example: `# Insert single document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  createdAt: new Date()
})`,
        },
        {
          command: 'Insert Multiple Documents',
          description: 'Insert multiple documents at once',
          usage: 'db.collection.insertMany()',
          example: `# Insert multiple documents
db.users.insertMany([
  {
    name: "Alice Smith",
    email: "alice@example.com",
    age: 25
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 35
  }
])`,
        },
        {
          command: 'Find All Documents',
          description: 'Retrieve all documents from collection',
          usage: 'db.collection.find()',
          example: `# Find all documents
db.users.find()
db.users.find().pretty()     # Formatted output (old mongo shell)
# In mongosh, output is automatically formatted`,
        },
        {
          command: 'Find with Filter',
          description: 'Find documents matching criteria',
          usage: 'db.collection.find({field: value})',
          example: `# Find with filter
db.users.find({ age: 30 })
db.users.find({ name: "John Doe" })
db.users.find({ age: { $gt: 25 } })  # Age greater than 25`,
        },
        {
          command: 'Find One Document',
          description: 'Find a single document',
          usage: 'db.collection.findOne()',
          example: `# Find one document
db.users.findOne({ name: "John Doe" })
db.users.findOne()           # First document in collection`,
        },
        {
          command: 'Update Single Document',
          description: 'Update one document',
          usage: 'db.collection.updateOne()',
          example: `# Update one document
db.users.updateOne(
  { name: "John Doe" },
  { $set: { age: 31, status: "active" } }
)`,
        },
        {
          command: 'Update Multiple Documents',
          description: 'Update multiple documents',
          usage: 'db.collection.updateMany()',
          example: `# Update multiple documents
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
)`,
        },
        {
          command: 'Replace Document',
          description: 'Replace entire document',
          usage: 'db.collection.replaceOne()',
          example: `# Replace document
db.users.replaceOne(
  { name: "John Doe" },
  { name: "John Doe", email: "john.doe@newdomain.com", age: 31 }
)`,
        },
        {
          command: 'Delete Single Document',
          description: 'Delete one document',
          usage: 'db.collection.deleteOne()',
          example: `# Delete one document
db.users.deleteOne({ name: "John Doe" })`,
        },
        {
          command: 'Delete Multiple Documents',
          description: 'Delete multiple documents',
          usage: 'db.collection.deleteMany()',
          example: `# Delete multiple documents
db.users.deleteMany({ age: { $lt: 25 } })
db.users.deleteMany({})      # Delete all documents (careful!)`,
        },
      ],
    },
    {
      title: 'Basic Query Operations',
      commands: [
        {
          command: 'Comparison Operators',
          description: 'Use comparison operators in queries',
          usage: '$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin',
          example: `# Comparison operators
db.users.find({ age: { $eq: 30 } })      # Equal to 30
db.users.find({ age: { $ne: 30 } })      # Not equal to 30
db.users.find({ age: { $gt: 25 } })      # Greater than 25
db.users.find({ age: { $gte: 25 } })     # Greater than or equal to 25
db.users.find({ age: { $lt: 40 } })      # Less than 40
db.users.find({ age: { $lte: 40 } })     # Less than or equal to 40
db.users.find({ age: { $in: [25, 30, 35] } })  # In array
db.users.find({ age: { $nin: [25, 30, 35] } }) # Not in array`,
        },
        {
          command: 'Logical Operators',
          description: 'Use logical operators in queries',
          usage: '$and, $or, $not, $nor',
          example: `# Logical operators
db.users.find({ $and: [{ age: { $gt: 25 } }, { status: "active" }] })
db.users.find({ $or: [{ age: { $lt: 25 } }, { status: "vip" }] })
db.users.find({ age: { $not: { $eq: 30 } } })
db.users.find({ $nor: [{ age: 25 }, { status: "inactive" }] })`,
        },
        {
          command: 'Element Operators',
          description: 'Query document elements',
          usage: '$exists, $type',
          example: `# Element operators
db.users.find({ email: { $exists: true } })   # Has email field
db.users.find({ phone: { $exists: false } })  # No phone field
db.users.find({ age: { $type: "number" } })   # Age is number
db.users.find({ name: { $type: "string" } })  # Name is string`,
        },
        {
          command: 'Array Operators',
          description: 'Query array fields',
          usage: '$all, $elemMatch, $size',
          example: `# Array operators
db.products.find({ tags: { $all: ["electronics", "mobile"] } })
db.products.find({ specs: { $elemMatch: { type: "screen", size: "6.1" } } })
db.products.find({ reviews: { $size: 5 } })  # Exactly 5 reviews`,
        },
        {
          command: 'Text Search',
          description: 'Perform text search',
          usage: '$text operator',
          example: `# Text search (requires text index)
db.articles.createIndex({ content: "text" })
db.articles.find({ $text: { $search: "mongodb tutorial" } })`,
        },
        {
          command: 'Regular Expressions',
          description: 'Use regex in queries',
          usage: '/pattern/ options',
          example: `# Regular expressions
db.users.find({ name: /^J/ })              # Names starting with J
db.users.find({ email: /.*@gmail\.com$/i }) # Gmail addresses
db.users.find({ name: /john/i })           # Case-insensitive`,
        },
        {
          command: 'Projection',
          description: 'Select specific fields',
          usage: 'find({}, { field: 1, _id: 0 })',
          example: `# Projection
db.users.find({}, { name: 1, email: 1 })   # Include only name and email
db.users.find({}, { password: 0 })         # Exclude password
db.users.find({}, { name: 1, _id: 0 })     # Include name, exclude _id`,
        },
        {
          command: 'Limit Results',
          description: 'Limit number of returned documents',
          usage: 'limit() method',
          example: `# Limit results
db.users.find().limit(10)                  # First 10 documents
db.users.find({ age: { $gt: 25 } }).limit(5)`,
        },
        {
          command: 'Skip Results',
          description: 'Skip specified number of documents',
          usage: 'skip() method',
          example: `# Skip results
db.users.find().skip(10)                   # Skip first 10
db.users.find().skip(10).limit(5)          # Pagination`,
        },
        {
          command: 'Sort Results',
          description: 'Sort query results',
          usage: 'sort() method',
          example: `# Sort results
db.users.find().sort({ age: 1 })           # Ascending by age
db.users.find().sort({ age: -1 })          # Descending by age
db.users.find().sort({ name: 1, age: -1 }) # Multiple fields`,
        },
        {
          command: 'Count Documents',
          description: 'Count documents in collection',
          usage: 'countDocuments() method',
          example: `# Count documents
db.users.countDocuments()
db.users.countDocuments({ age: { $gt: 25 } })
db.users.estimatedDocumentCount()          # Faster estimate`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Data Modeling and Schema Design',
      commands: [
        {
          command: 'Embedding vs Referencing',
          description: 'Choose between embedding and referencing',
          usage: 'Data modeling strategies',
          example: `# Embedding (one-to-one, one-to-few)
{
  _id: ObjectId("..."),
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
}

# Referencing (one-to-many, many-to-many)
// Users collection
{ _id: ObjectId("..."), name: "John Doe" }
// Orders collection
{ userId: ObjectId("..."), total: 100 }`,
        },
        {
          command: 'Array Design Patterns',
          description: 'Design arrays for optimal performance',
          usage: 'Array schema patterns',
          example: `# Array of subdocuments
{
  _id: ObjectId("..."),
  productName: "Laptop",
  reviews: [
    { userId: ObjectId("..."), rating: 5, comment: "Great!" },
    { userId: ObjectId("..."), rating: 4, comment: "Good" }
  ]
}

# Array of references
{
  _id: ObjectId("..."),
  userName: "John",
  favoriteProducts: [ObjectId("..."), ObjectId("...")]
}`,
        },
        {
          command: 'Schema Validation',
          description: 'Define schema validation rules',
          usage: '$jsonSchema validator',
          example: `# Schema validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string", pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
        age: { bsonType: "number", minimum: 0, maximum: 150 }
      }
    }
  }
})`,
        },
        {
          command: 'Document Size Limits',
          description: 'Understand MongoDB document size limits',
          usage: '16MB document limit',
          example: `# Document size considerations
# Maximum document size: 16MB
# Maximum nested levels: 100
# Use GridFS for files >16MB
# Consider splitting large documents

# Check document size
Object.bsonsize(db.users.findOne())`,
        },
        {
          command: 'Indexing Strategy',
          description: 'Plan effective indexing',
          usage: 'Index design principles',
          example: `# Indexing strategy
# Index fields used in queries
# Index fields used in sort
# Compound indexes for multi-field queries
# Avoid over-indexing (slows writes)

# Example: User search patterns
db.users.createIndex({ email: 1 })           # Unique login
db.users.createIndex({ age: 1, status: 1 })   # Filter queries
db.users.createIndex({ name: "text" })        # Text search`,
        },
      ],
    },
    {
      title: 'Indexing and Performance',
      commands: [
        {
          command: 'Create Single Field Index',
          description: 'Create index on single field',
          usage: 'createIndex()',
          example: `# Single field index
db.users.createIndex({ email: 1 })           # Ascending
db.users.createIndex({ age: -1 })            # Descending
db.users.createIndex({ name: "text" })       # Text index`,
        },
        {
          command: 'Create Compound Index',
          description: 'Create index on multiple fields',
          usage: 'createIndex({ field1: 1, field2: -1 })',
          example: `# Compound index
db.users.createIndex({ age: 1, status: 1 })
db.products.createIndex({ category: 1, price: -1 })
db.orders.createIndex({ userId: 1, createdAt: -1 })`,
        },
        {
          command: 'Create Unique Index',
          description: 'Create index with unique constraint',
          usage: 'createIndex({ field: 1 }, { unique: true })',
          example: `# Unique index
db.users.createIndex({ email: 1 }, { unique: true })
db.products.createIndex({ sku: 1 }, { unique: true })`,
        },
        {
          command: 'Create Sparse Index',
          description: 'Create index that skips documents without field',
          usage: 'createIndex({ field: 1 }, { sparse: true })',
          example: `# Sparse index
db.users.createIndex({ phone: 1 }, { sparse: true })
db.products.createIndex({ discount: 1 }, { sparse: true })`,
        },
        {
          command: 'Create TTL Index',
          description: 'Create index that auto-removes documents',
          usage: 'createIndex({ field: 1 }, { expireAfterSeconds: value })',
          example: `# TTL index
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
db.logs.createIndex({ timestamp: 1 }, { expireAfterSeconds: 86400 })`,
        },
        {
          command: 'List Indexes',
          description: 'Show all indexes on collection',
          usage: 'getIndexes() method',
          example: `# List indexes
db.users.getIndexes()
db.users.getIndexKeys()        # Just index keys
db.users.getIndexSpecs()       # Full specifications`,
        },
        {
          command: 'Drop Index',
          description: 'Remove an index',
          usage: 'dropIndex() method',
          example: `# Drop index
db.users.dropIndex({ email: 1 })
db.users.dropIndex("email_1")  # By index name
db.users.dropIndexes()        # Drop all except _id_`,
        },
        {
          command: 'Explain Query Plan',
          description: 'Analyze query execution plan',
          usage: 'explain() method',
          example: `# Explain query
db.users.find({ age: 30 }).explain()
db.users.find({ age: 30 }).explain("executionStats")

# Look for:
# - COLLSCAN (collection scan - bad)
# - IXSCAN (index scan - good)
# - documentsExamined vs returned`,
        },
        {
          command: 'Covered Query',
          description: 'Query that uses index only',
          usage: 'Index-only query optimization',
          example: `# Covered query (uses index only)
db.users.find({ age: 30 }, { name: 1, age: 1, _id: 0 })
# Requires index on { age: 1, name: 1 }

# Not covered (needs to fetch documents)
db.users.find({ age: 30 }, { name: 1, age: 1, email: 1 })`,
        },
      ],
    },
    {
      title: 'Aggregation Framework',
      commands: [
        {
          command: 'Aggregation Pipeline Basics',
          description: 'Introduction to aggregation pipeline',
          usage: 'aggregate() method',
          example: `# Basic aggregation
db.users.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: "$status", count: { $sum: 1 } } }
])`,
        },
        {
          command: '$match Stage',
          description: 'Filter documents in pipeline',
          usage: '$match operator',
          example: `# $match stage
db.sales.aggregate([
  { $match: { date: { $gte: ISODate("2023-01-01") } } },
  { $match: { amount: { $gt: 100 } } }
])`,
        },
        {
          command: '$group Stage',
          description: 'Group documents for aggregation',
          usage: '$group operator',
          example: `# $group stage
db.sales.aggregate([
  { $group: {
    _id: "$product",
    totalAmount: { $sum: "$amount" },
    averageAmount: { $avg: "$amount" },
    count: { $sum: 1 },
    maxAmount: { $max: "$amount" },
    minAmount: { $min: "$amount" }
  }}
])`,
        },
        {
          command: '$project Stage',
          description: 'Reshape documents in pipeline',
          usage: '$project operator',
          example: `# $project stage
db.users.aggregate([
  { $project: {
    name: 1,
    email: 1,
    fullName: { $concat: ["$firstName", " ", "$lastName"] },
    ageGroup: { $cond: [{ $gte: ["$age", 18] }, "adult", "minor"] }
  }}
])`,
        },
        {
          command: '$sort Stage',
          description: 'Sort documents in pipeline',
          usage: '$sort operator',
          example: `# $sort stage
db.sales.aggregate([
  { $group: { _id: "$product", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
])`,
        },
        {
          command: '$limit Stage',
          description: 'Limit documents in pipeline',
          usage: '$limit operator',
          example: `# $limit stage
db.users.aggregate([
  { $sort: { score: -1 } },
  { $limit: 10 }
])`,
        },
        {
          command: '$skip Stage',
          description: 'Skip documents in pipeline',
          usage: '$skip operator',
          example: `# $skip stage
db.users.aggregate([
  { $sort: { score: -1 } },
  { $skip: 10 },
  { $limit: 10 }
])`,
        },
        {
          command: '$unwind Stage',
          description: 'Deconstruct array fields',
          usage: '$unwind operator',
          example: `# $unwind stage
db.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.product", total: { $sum: "$items.quantity" } } }
])`,
        },
        {
          command: '$lookup Stage',
          description: 'Perform left outer join',
          usage: '$lookup operator',
          example: `# $lookup stage (join)
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
])`,
        },
        {
          command: '$addFields Stage',
          description: 'Add new fields to documents',
          usage: '$addFields operator',
          example: `# $addFields stage
db.products.aggregate([
  {
    $addFields: {
      discountPrice: { $multiply: ["$price", 0.9] },
      inStock: { $gt: ["$quantity", 0] }
    }
  }
])`,
        },
        {
          command: '$count Stage',
          description: 'Count documents in pipeline',
          usage: '$count operator',
          example: `# $count stage
db.users.aggregate([
  { $match: { status: "active" } },
  { $count: "activeUsers" }
])`,
        },
        {
          command: '$facet Stage',
          description: 'Multiple aggregation pipelines',
          usage: '$facet operator',
          example: `# $facet stage
db.products.aggregate([
  {
    $facet: {
      "categories": [{ $group: { _id: "$category", count: { $sum: 1 } } }],
      "priceStats": [{ $group: { _id: null, avg: { $avg: "$price" } } }],
      "topProducts": [{ $sort: { sales: -1 } }, { $limit: 5 }]
    }
  }
])`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced Query Operations',
      commands: [
        {
          command: 'Geospatial Queries',
          description: 'Query geographic data',
          usage: '$near, $geoWithin operators',
          example: `# Geospatial queries
# Create 2dsphere index
db.places.createIndex({ location: "2dsphere" })

# Find nearby places
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-73.9857, 40.7484] },
      $maxDistance: 1000
    }
  }
})

# Find places within polygon
db.places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [-73.98, 40.75], [-73.97, 40.76], [-73.96, 40.75], [-73.98, 40.75]
        ]]
      }
    }
  }
})`,
        },
        {
          command: 'Text Search Advanced',
          description: 'Advanced text search features',
          usage: '$text with options',
          example: `# Advanced text search
db.articles.createIndex({ 
  title: "text", 
  content: "text",
  tags: "text"
})

# Search with phrase
db.articles.find({
  $text: { $search: "\\"mongodb tutorial\\"" }
})

# Search with exclusion
db.articles.find({
  $text: { $search: "mongodb -mysql" }
})

# Text score
db.articles.find(
  { $text: { $search: "mongodb" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })`,
        },
        {
          command: 'Bitwise Operators',
          description: 'Perform bitwise operations',
          usage: '$bitsAllClear, $bitsAnySet',
          example: `# Bitwise operators
db.permissions.find({
  flags: { $bitsAllSet: [1, 2] }    # Both bits set
})

db.permissions.find({
  flags: { $bitsAnySet: [1, 4] }    # Any bit set
})

db.permissions.find({
  flags: { $bitsAllClear: [8, 16] } # All bits clear
})`,
        },
        {
          command: 'Date Range Queries',
          description: 'Query date ranges effectively',
          usage: 'Date objects and operators',
          example: `# Date range queries
db.logs.find({
  timestamp: {
    $gte: ISODate("2023-01-01T00:00:00Z"),
    $lt: ISODate("2023-02-01T00:00:00Z")
  }
})

# Date manipulation
db.users.find({
  createdAt: {
    $gte: new Date(new Date() - 30*24*60*60*1000)  # Last 30 days
  }
})

# Date aggregation
db.sales.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
      total: { $sum: "$amount" }
    }
  }
])`,
        },
        {
          command: 'Conditional Queries',
          description: 'Use conditional logic in queries',
          usage: '$cond, $ifNull operators',
          example: `# Conditional queries
db.users.aggregate([
  {
    $project: {
      name: 1,
      status: {
        $cond: {
          if: { $gte: ["$age", 18] },
          then: "adult",
          else: "minor"
        }
      },
      displayName: {
        $ifNull: ["$displayName", "$name"]
      }
    }
  }
])`,
        },
        {
          command: 'Array Update Operators',
          description: 'Update array elements',
          usage: '$push, $pull, $addToSet',
          example: `# Array update operators
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { tags: "premium" } }
)

db.users.updateOne(
  { _id: ObjectId("...") },
  { $pull: { tags: "inactive" } }
)

db.users.updateOne(
  { _id: ObjectId("...") },
  { $addToSet: { roles: "admin" } }
)

db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { scores: { $each: [85, 90, 95], $slice: -5 } } }
)`,
        },
      ],
    },
    {
      title: 'Transactions and Concurrency',
      commands: [
        {
          command: 'Multi-Document Transaction',
          description: 'Perform ACID transactions',
          usage: 'startSession(), withTransaction',
          example: `# Multi-document transaction
const session = db.getMongo().startSession()
session.startTransaction()

try {
  const ordersCollection = session.getDatabase("mydb").orders
  const inventoryCollection = session.getDatabase("mydb").inventory
  
  await ordersCollection.insertOne({ productId: "prod1", quantity: 2 })
  await inventoryCollection.updateOne(
    { productId: "prod1" },
    { $inc: { stock: -2 } }
  )
  
  await session.commitTransaction()
} catch (error) {
  await session.abortTransaction()
  throw error
} finally {
  session.endSession()
}`,
        },
        {
          command: 'Retryable Writes',
          description: 'Handle network errors automatically',
          usage: 'retryWrites option',
          example: `# Retryable writes
db.users.insertOne(
  { name: "John", email: "john@example.com" },
  { retryWrites: true }
)

// Connection string with retry writes
mongodb://localhost:27017/mydb?retryWrites=true`,
        },
        {
          command: 'Write Concern',
          description: 'Control write acknowledgment',
          usage: 'writeConcern option',
          example: `# Write concern
db.users.insertOne(
  { name: "John" },
  { writeConcern: { w: "majority", j: true, wtimeout: 5000 } }
)

// Collection level
db.createCollection("users", {
  writeConcern: { w: "majority", j: true }
})`,
        },
        {
          command: 'Read Concern',
          description: 'Control read consistency',
          usage: 'readConcern option',
          example: `# Read concern
db.users.find().readConcern("majority")

// Transaction with read concern
const session = db.getMongo().startSession()
session.startTransaction({
  readConcern: { level: "snapshot" },
  writeConcern: { w: "majority" }
})`,
        },
        {
          command: 'Isolation Levels',
          description: 'Understand transaction isolation',
          usage: 'Snapshot isolation',
          example: `# Isolation levels in transactions
// Snapshot isolation (default)
session.startTransaction({
  readConcern: { level: "snapshot" }
})

// Read committed
db.collection.find().readConcern("local")

// Majority reads
db.collection.find().readConcern("majority")`,
        },
      ],
    },
    {
      title: 'Replication and High Availability',
      commands: [
        {
          command: 'Replica Set Overview',
          description: 'Understanding replica sets',
          usage: 'Replication concepts',
          example: `# Replica set components
# Primary: Accepts all write operations
# Secondary: Replicates primary's data
# Arbiter: Votes in elections but stores no data
# Election: Process to select new primary

# Benefits:
# - High availability
# - Automatic failover
# - Read scalability (secondaries)`,
        },
        {
          command: 'Initialize Replica Set',
          description: 'Create a replica set',
          usage: 'rs.initiate() command',
          example: `# Initialize replica set
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})

# Add member to existing set
rs.add("mongo4:27017")`,
        },
        {
          command: 'Replica Set Status',
          description: 'Check replica set status',
          usage: 'rs.status() command',
          example: `# Check replica set status
rs.status()
rs.conf()
rs.printSecondaryReplicationInfo()

# Check primary
db.isMaster()
rs.isMaster()`,
        },
        {
          command: 'Read Preference',
          description: 'Control where reads go',
          usage: 'readPreference option',
          example: `# Read preferences
db.collection.find().readPreference("primary")           # Default
db.collection.find().readPreference("primaryPreferred")   # Primary if available
db.collection.find().readPreference("secondary")         # Secondary only
db.collection.find().readPreference("secondaryPreferred") # Secondary if available
db.collection.find().readPreference("nearest")            # Lowest latency`,
        },
        {
          command: 'Write Concern Replica Set',
          description: 'Control write acknowledgment in replica set',
          usage: 'writeConcern with replication',
          example: `# Write concern in replica set
db.collection.insertOne(
  { data: "important" },
  { writeConcern: { w: 2, j: true } }  # Write to 2 members
)

// Write to majority
db.collection.updateOne(
  { _id: 1 },
  { $set: { status: "active" } },
  { writeConcern: { w: "majority" } }
)`,
        },
        {
          command: 'Replica Set Maintenance',
          description: 'Maintain replica set health',
          usage: 'Maintenance commands',
          example: `# Maintenance commands
# Step down primary
rs.stepDown(60)  # Step down for 60 seconds

# Reconfigure replica set
cfg = rs.conf()
cfg.members[0].priority = 2
rs.reconfig(cfg)

# Force reconfig (emergency)
rs.reconfig(cfg, { force: true })`,
        },
      ],
    },
    {
      title: 'Sharding and Scaling',
      commands: [
        {
          command: 'Sharding Overview',
          description: 'Understanding horizontal scaling',
          usage: 'Sharding concepts',
          example: `# Sharding components
# Shard: Stores subset of data
# Mongos: Query router
# Config servers: Store metadata

# Shard keys:
# - Ranged sharding
# - Hashed sharding
# - Compound shard keys

# Benefits:
# - Horizontal scaling
# - High throughput
# - Geographic distribution`,
        },
        {
          command: 'Enable Sharding',
          description: 'Enable sharding for database',
          usage: 'sh.enableSharding()',
          example: `# Enable sharding
sh.enableSharding("mydb")

# Shard collection
sh.shardCollection("mydb.users", { _id: "hashed" })
sh.shardCollection("mydb.orders", { userId: 1, orderDate: 1 })`,
        },
        {
          command: 'Choose Shard Key',
          description: 'Select optimal shard key',
          usage: 'Shard key strategies',
          example: `# Shard key strategies
# Good shard keys:
# - High cardinality
# - Low frequency
# - Non-monotonic

# Examples:
# { userId: "hashed" }           # Even distribution
# { category: 1, productId: 1 }  # Compound
# { timestamp: 1, userId: 1 }    # Time-based with user

# Avoid:
# { _id: 1 }                     # Monotonic
# { status: 1 }                  # Low cardinality`,
        },
        {
          command: 'Shard Status',
          description: 'Check sharding status',
          usage: 'Sharding commands',
          example: `# Check sharding status
sh.status()
db.collection.getShardDistribution()
sh.getShardMap()

# List shards
sh.addShard("mongo1:27017")
sh.removeShard("mongo1:27017")`,
        },
        {
          command: 'Balancer Management',
          description: 'Manage data balancing',
          usage: 'Balancer commands',
          example: `# Balancer management
sh.startBalancer()
sh.stopBalancer()
sh.isBalancerRunning()

# Balancer settings
sh.setBalancerState(true)
config.settings.save({ _id: "balancer", mode: "full" })`,
        },
      ],
    },
    {
      title: 'Security and Authentication',
      commands: [
        {
          command: 'Enable Authentication',
          description: 'Enable MongoDB authentication',
          usage: 'Security configuration',
          example: `# Enable authentication
# 1. Create admin user
use admin
db.createUser({
  user: "admin",
  pwd: "securePassword",
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]
})

# 2. Enable auth in config
# /etc/mongod.conf
security:
  authorization: enabled

# 3. Restart mongod
sudo systemctl restart mongod`,
        },
        {
          command: 'Create Users',
          description: 'Create database users',
          usage: 'db.createUser()',
          example: `# Create users
# Database-specific user
use myapp
db.createUser({
  user: "appuser",
  pwd: "appPassword",
  roles: [{ role: "readWrite", db: "myapp" }]
})

# Multiple roles
db.createUser({
  user: "manager",
  pwd: "managerPass",
  roles: [
    { role: "readWrite", db: "products" },
    { role: "read", db: "orders" }
  ]
})`,
        },
        {
          command: 'Built-in Roles',
          description: 'Understanding MongoDB roles',
          usage: 'Role-based access control',
          example: `# Built-in roles
# Database roles:
# - read, readWrite
# - dbAdmin, userAdmin
# - dbOwner (readWrite + dbAdmin + userAdmin)

# Cluster roles:
# - clusterAdmin, clusterManager
# - clusterMonitor, hostManager

# Backup/restore:
# - backup, restore

# Example assignment
db.grantRolesToUser("appuser", ["readWrite"])`,
        },
        {
          command: 'Custom Roles',
          description: 'Create custom roles',
          usage: 'db.createRole()',
          example: `# Create custom role
db.createRole({
  role: "orderProcessor",
  privileges: [
    {
      resource: { db: "orders", collection: "" },
      actions: ["find", "insert", "update"]
    },
    {
      resource: { db: "products", collection: "" },
      actions: ["find"]
    }
  ],
  roles: []
})`,
        },
        {
          command: 'Network Security',
          description: 'Secure network access',
          usage: 'IP binding and firewall',
          example: `# Network security
# mongod.conf
net:
  port: 27017
  bindIp: 127.0.0.1,10.0.0.1  # Specific IPs only

# SSL/TLS
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem`,
        },
        {
          command: 'Field Level Encryption',
          description: 'Encrypt specific fields',
          usage: 'Client-side encryption',
          example: `# Field level encryption
const encryption = new ClientEncryption(
  keyVaultClient,
  keyVaultNamespace,
  kmsProviders,
  encryptedFieldsMap
)

// Auto encrypt/decrypt
const encryptedClient = MongoClient(uri, {
  autoEncryption: {
    keyVaultNamespace,
    kmsProviders,
    encryptedFieldsMap
  }
})`,
        },
      ],
    },
    {
      title: 'Monitoring and Performance',
      commands: [
        {
          command: 'Database Statistics',
          description: 'Get database statistics',
          usage: 'db.stats() command',
          example: `# Database statistics
db.stats()
db.stats(1024 * 1024)  # In MB

# Collection statistics
db.users.stats()
db.users.stats({ scale: 1024 })  # In KB

# Server status
db.serverStatus()
db.hostInfo()`,
        },
        {
          command: 'Current Operations',
          description: 'Monitor running operations',
          usage: 'db.currentOp()',
          example: `# Current operations
db.currentOp()
db.currentOp({ "op": "query" })
db.currentOp({ "secs_running": { $gt: 0 } })

# Kill operation
db.killOp(12345)  # Operation ID`,
        },
        {
          command: 'Performance Profiler',
          description: 'Profile query performance',
          usage: 'db.setProfilingLevel()',
          example: `# Profiler levels
# 0 = off
# 1 = slow operations (>100ms)
# 2 = all operations

db.setProfilingLevel(1, { slowms: 50 })
db.setProfilingLevel(2)

# View profile data
db.system.profile.find().sort({ ts: -1 }).limit(5)
db.system.profile.find({ millis: { $gt: 100 } })`,
        },
        {
          command: 'Index Usage Statistics',
          description: 'Monitor index performance',
          usage: '$indexStats aggregation',
          example: `# Index statistics
db.users.aggregate([{ $indexStats: {} }])

# Index usage
db.users.aggregate([
  { $indexStats: {} },
  { $project: { name: 1, usageCount: "$accesses.ops", lastUsed: "$accesses.since" } }
])`,
        },
        {
          command: 'Connection Monitoring',
          description: 'Monitor database connections',
          usage: 'Server status connections',
          example: `# Connection monitoring
db.serverStatus().connections

# Connection pool stats
db.runCommand({ connPoolStats: 1 })

# Sharded cluster connections
sh.status().shards`,
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      commands: [
        {
          command: 'mongodump Backup',
          description: 'Create logical backup',
          usage: 'mongodump command',
          example: `# mongodump examples
mongodump --db myapp --out /backup/2023-01-01/
mongodump --host localhost:27017 --db myapp --collection users
mongodump --uri="mongodb://user:pass@host/db" --out /backup/
mongodump --query '{"date":{"$gte":{"$date":"2023-01-01"}}}' --out /backup/`,
        },
        {
          command: 'mongorestore Recovery',
          description: 'Restore from backup',
          usage: 'mongorestore command',
          example: `# mongorestore examples
mongorestore --db myapp /backup/2023-01-01/myapp/
mongorestore --host localhost:27017 --db myapp --drop /backup/myapp/
mongorestore --uri="mongodb://user:pass@host/db" /backup/
mongorestore --nsFrom="myapp.*" --nsTo="newapp.*" /backup/myapp/`,
        },
        {
          command: 'Point in Time Recovery',
          description: 'Recover to specific point in time',
          usage: 'Oplog-based recovery',
          example: `# Point in time recovery
# 1. Full backup
mongodump --out /backup/full/

# 2. Apply oplog
mongorestore --oplogReplay --oplogLimit 1672531200:1 /backup/full/

# 3. Verify recovery
db.runCommand({ getParameter: 1, "clusterTime": 1 })`,
        },
        {
          command: 'File System Snapshots',
          description: 'Create file system backups',
          usage: 'LVM snapshots',
          example: `# File system snapshot
# 1. Lock database
db.fsyncLock()

# 2. Create snapshot
lvcreate -L 10G -s -n mongodb-snap /dev/vg0/mongodb

# 3. Unlock database
db.fsyncUnlock()

# 4. Mount and backup
mount /dev/vg0/mongodb-snap /mnt/snapshot
rsync -a /mnt/snapshot/ /backup/mongodb/`,
        },
        {
          command: 'Cloud Backup Strategies',
          description: 'Cloud backup solutions',
          usage: 'MongoDB Atlas, AWS, GCP',
          example: `# Cloud backup options
# MongoDB Atlas (automatic)
# - Daily snapshots
# - Point-in-time recovery
# - Cloud provider backups

# AWS EBS snapshots
aws ec2 create-snapshot --volume-id vol-123456

# GCP persistent disk snapshots
gcloud compute disks snapshot mongodb-disk --snapshot-names mongodb-snap`,
        },
      ],
    },
    {
      title: 'Change Streams and Real-time',
      commands: [
        {
          command: 'Change Stream Basics',
          description: 'Monitor data changes in real-time',
          usage: 'watch() method',
          example: `# Basic change stream
const changeStream = db.users.watch()

changeStream.on('change', (change) => {
  console.log('Change detected:', change)
})

// Process changes
for await (const change of db.users.watch()) {
  console.log(change)
}`,
        },
        {
          command: 'Change Stream Filters',
          description: 'Filter change stream events',
          usage: 'Pipeline with watch()',
          example: `# Filtered change stream
const pipeline = [
  { $match: { operationType: { $in: ['insert', 'update'] } } },
  { $match: { 'fullDocument.status': 'active' } }
]

const changeStream = db.users.watch(pipeline)

// Filter by document field
const changeStream = db.users.watch([
  { $match: { 'fullDocument.age': { $gte: 18 } } }
])`,
        },
        {
          command: 'Change Stream Options',
          description: 'Configure change stream behavior',
          usage: 'watch() options',
          example: `# Change stream options
const options = {
  fullDocument: 'updateLookup',  // Include full document on updates
  fullDocumentBeforeChange: 'whenAvailable'  // Include before image
}

const changeStream = db.users.watch([], options)

// Resume after specific token
const changeStream = db.users.watch([], {
  resumeAfter: resumeToken
})`,
        },
        {
          command: 'Sharded Cluster Change Streams',
          description: 'Change streams in sharded environment',
          usage: 'watch() on mongos',
          example: `# Sharded cluster change stream
// Connect to mongos router
const mongo = await MongoClient.connect('mongodb://mongos:27017')

const changeStream = mongo.db('myapp').users.watch()

// Change stream works across all shards
changeStream.on('change', (change) => {
  console.log('Change from any shard:', change)
})`,
        },
      ],
    },
    {
      title: 'GridFS and File Storage',
      commands: [
        {
          command: 'GridFS Overview',
          description: 'Store large files in MongoDB',
          usage: 'GridFS concepts',
          example: `# GridFS components
# fs.files: File metadata
# fs.chunks: File data chunks (default 255KB)

# Use cases:
# - Files >16MB (document limit)
# - Files with metadata
# - Versioning files
# - Streaming files`,
        },
        {
          command: 'Upload Files to GridFS',
          description: 'Store files using GridFS',
          usage: 'GridFSBucket',
          example: `# Upload file to GridFS
const bucket = new GridFSBucket(db)

// Upload from buffer
const uploadStream = bucket.openUploadStream('document.pdf')
fs.createReadStream('./document.pdf').pipe(uploadStream)

// Upload with metadata
const uploadStream = bucket.openUploadStream('photo.jpg', {
  metadata: { contentType: 'image/jpeg', uploadedBy: 'user1' }
})`,
        },
        {
          command: 'Download Files from GridFS',
          description: 'Retrieve files from GridFS',
          usage: 'GridFSBucket download',
          example: `# Download file from GridFS
bucket.openDownloadStreamByName('document.pdf')
  .pipe(fs.createWriteStream('./downloaded.pdf'))

// Download by ID
bucket.openDownloadStream(fileId)
  .pipe(fs.createWriteStream('./file.pdf'))

// Stream to response
bucket.openDownloadStreamByName('photo.jpg').pipe(res)`,
        },
        {
          command: 'Manage GridFS Files',
          description: 'Manage stored files',
          usage: 'GridFS operations',
          example: `# List files
bucket.find({ filename: 'document.pdf' }).toArray()

// Delete file
bucket.delete(fileId)

// Check if file exists
const exists = await bucket.find({ _id: fileId }).hasNext()

// File metadata
const file = await bucket.find({ _id: fileId }).next()`,
        },
      ],
    },
    {
      title: 'MongoDB Drivers and Integration',
      commands: [
        {
          command: 'Node.js MongoDB Driver',
          description: 'Connect MongoDB with Node.js',
          usage: 'mongodb npm package',
          example: `// Node.js MongoDB connection
const { MongoClient } = require('mongodb')

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

await client.connect()
const db = client.db('myapp')
const collection = db.collection('users')

// CRUD operations
const result = await collection.insertOne({ name: 'John' })
const users = await collection.find({}).toArray()
await client.close()`,
        },
        {
          command: 'Python PyMongo',
          description: 'Connect MongoDB with Python',
          usage: 'pymongo package',
          example: `# Python PyMongo
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['myapp']
collection = db['users']

# CRUD operations
result = collection.insert_one({'name': 'John'})
users = collection.find({})
for user in users:
    print(user)

client.close()`,
        },
        {
          command: 'Java MongoDB Driver',
          description: 'Connect MongoDB with Java',
          usage: 'mongodb-driver-sync',
          example: `// Java MongoDB Driver
import com.mongodb.client.MongoClients
import com.mongodb.client.MongoClient
import com.mongodb.client.MongoDatabase

MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017")
MongoDatabase database = mongoClient.getDatabase("myapp")

// CRUD operations
MongoCollection<Document> collection = database.getCollection("users")
Document doc = new Document("name", "John")
collection.insertOne(doc)

mongoClient.close()`,
        },
        {
          command: 'Mongoose ODM',
          description: 'MongoDB ODM for Node.js',
          usage: 'mongoose npm package',
          example: `// Mongoose ODM
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: { type: Number, min: 0 }
})

const User = mongoose.model('User', userSchema)

// CRUD operations
const user = new User({ name: 'John', email: 'john@example.com' })
await user.save()

const users = await User.find({ age: { $gte: 18 } })`,
        },
      ],
    },
    {
      title: 'Performance Tuning and Optimization',
      commands: [
        {
          command: 'Query Optimization',
          description: 'Optimize query performance',
          usage: 'Indexing and query patterns',
          example: `// Query optimization tips
// 1. Use appropriate indexes
db.users.createIndex({ age: 1, status: 1 })

// 2. Use covered queries
db.users.find({ age: 30 }, { name: 1, age: 1, _id: 0 })

// 3. Avoid $where for performance
// Bad: db.users.find({ $where: "this.age > 25" })
// Good: db.users.find({ age: { $gt: 25 } })

// 4. Use projection to limit data
db.users.find({}, { name: 1, email: 1 })`,
        },
        {
          command: 'Memory Optimization',
          description: 'Optimize memory usage',
          usage: 'WiredTiger configuration',
          example: `# Memory optimization
# mongod.conf
storage:
  wiredTiger:
    engineConfig:
      cacheSizeGB: 4  # 50% of RAM
      journalCompressor: snappy
    collectionConfig:
      blockCompressor: snappy
    indexConfig:
      prefixCompression: true

# Connection pool
MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 2,
  maxIdleTimeMS: 30000
})`,
        },
        {
          command: 'Disk I/O Optimization',
          description: 'Optimize disk performance',
          usage: 'Storage configuration',
          example: `# Disk I/O optimization
# Use SSD storage
# Configure RAID 10 for performance

# mongod.conf
storage:
  dbPath: /fast/ssd/mongodb
  journal:
    enabled: true
    commitIntervalMs: 100

# Separate data and log directories
storage:
  dbPath: /data/mongodb
systemLog:
  path: /logs/mongodb/mongod.log`,
        },
        {
          command: 'Network Optimization',
          description: 'Optimize network performance',
          usage: 'Network configuration',
          example: `# Network optimization
net:
  port: 27017
  bindIp: 0.0.0.0
  maxIncomingConnections: 1000
  wireObjectCheck: false  # Production only

# Compression
net:
  compression:
    compressors: [snappy, zlib]`,
        },
      ],
    },
    {
      title: 'MongoDB Atlas and Cloud',
      commands: [
        {
          command: 'Atlas Cluster Setup',
          description: 'Create MongoDB Atlas cluster',
          usage: 'Cloud setup steps',
          example: `# MongoDB Atlas setup
# 1. Create account at atlas.mongodb.com
# 2. Create new cluster
# 3. Choose cloud provider and region
# 4. Select cluster tier (M10+ for production)
# 5. Configure cluster settings
# 6. Create database user
# 7. Add IP whitelist
# 8. Connect to cluster`,
        },
        {
          command: 'Atlas Connection',
          description: 'Connect to Atlas cluster',
          usage: 'Connection string',
          example: `# Atlas connection string
mongodb+srv://user:password@cluster0.abcde.mongodb.net/mydb?retryWrites=true&w=majority

# Node.js connection
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})`,
        },
        {
          command: 'Atlas Features',
          description: 'Atlas-specific features',
          usage: 'Cloud capabilities',
          example: `# Atlas features
# - Auto-scaling
# - Global clusters
# - Auto-indexing
# - Performance advisor
# - Real-time performance monitoring
# - Automated backups
# - Point-in-time recovery
# - Data API (no driver needed)
# - Serverless instances
# - Full-text search
# - Charts and analytics`,
        },
        {
          command: 'Atlas Security',
          description: 'Atlas security features',
          usage: 'Cloud security',
          example: `# Atlas security features
# - End-to-end encryption
# - VPC peering
# - Private endpoints
# - LDAP authentication
# - Biometric authentication
# - Network whitelisting
# - Field-level encryption
# - Auditing
# - Compliance (GDPR, HIPAA, SOC2)`,
        },
      ],
    },
    {
      title: 'MongoDB Tools and Utilities',
      commands: [
        {
          command: 'Mongo Shell (mongosh)',
          description: 'Modern MongoDB shell',
          usage: 'mongosh commands',
          example: `# mongosh features
# Enhanced autocomplete
# Syntax highlighting
# Extensible with plugins
# Rich output formatting

# Commands
show dbs
use mydb
show collections
db.users.find().limit(5)

# Shell scripting
for (let i = 0; i < 10; i++) {
  db.test.insertOne({ index: i })
}`,
        },
        {
          command: 'MongoDB Compass',
          description: 'MongoDB GUI tool',
          usage: 'Compass features',
          example: `# MongoDB Compass features
# Visual query builder
# Aggregation pipeline builder
# Performance monitoring
# Index management
# Schema analysis
# Real-time server monitoring
# Document validation
# Import/export data`,
        },
        {
          command: 'Database Commands',
          description: 'Useful database commands',
          usage: 'db.runCommand()',
          example: `# Useful commands
db.runCommand({ listCollections: 1 })
db.runCommand({ collStats: "users" })
db.runCommand({ serverStatus: 1 })
db.runCommand({ getParameter: 1, "authenticationMechanisms": 1 })
db.runCommand({ replSetGetStatus: 1 })
db.runCommand({ shardConnPoolStats: 1 })`,
        },
        {
          command: 'Diagnostic Commands',
          description: 'Database diagnostics',
          usage: 'Diagnostic tools',
          example: `# Diagnostic commands
# Check server health
db.serverStatus().connections
db.serverStatus().network

# Check index usage
db.users.aggregate([{ $indexStats: {} }])

# Check slow queries
db.setProfilingLevel(2)
db.system.profile.find().sort({ millis: -1 }).limit(5)`,
        },
      ],
    },
  ],
};
