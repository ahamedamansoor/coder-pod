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
          command: 'MongoDB Installation',
          description: 'Install MongoDB on different platforms',
          usage: 'Download and install MongoDB server',
          example: `======== Installation Methods ========
# Ubuntu/Debian
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Windows
# Download from https://www.mongodb.com/try/download/community
# Run installer and follow setup wizard

# CentOS/RHEL
sudo yum install -y mongodb-org

# Docker
docker run --name mongodb -p 27017:27017 -d mongo:7.0

======== Verify Installation ========
mongod --version
mongo --version
mongosh --version

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl status mongod

# Connect to MongoDB
mongosh
# or
mongo

======== MongoDB Compass (GUI) ========
# Download from https://www.mongodb.com/try/download/compass
# Connect to: mongodb://localhost:27017

# Connection string examples
mongodb://localhost:27017
mongodb://username:password@localhost:27017/database
mongodb+srv://cluster0.abcde.mongodb.net/`,
        },
        {
          command: 'MongoDB Configuration',
          description: 'Configure MongoDB settings',
          usage: 'Edit mongod.conf file',
          example: `======== Configuration File Location ========
# Linux/macOS: /etc/mongod.conf
# Windows: C:\\Program Files\\MongoDB\\Server\\7.0\\bin\\mongod.cfg

======== Basic Configuration ========
# Network settings
net:
  port: 27017
  bindIp: 127.0.0.1,192.168.1.100

# Security
security:
  authorization: enabled
  javascriptEnabled: true

# Storage settings
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  wiredTiger:
    engineConfig:
      cacheSizeGB: 2

# System log
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log
  logRotate: rename

# Process management
processManagement:
  fork: true
  pidFilePath: /var/run/mongodb/mongod.pid

======== Advanced Configuration ========
# Replication
replication:
  replSetName: "myReplicaSet"

# Sharding
sharding:
  clusterRole: shardsvr

# Profiling
operationProfiling:
  slowOpThresholdMs: 100
  mode: slowOp

======== Security Configuration ========
# Enable authentication
security:
  authorization: enabled

# Enable SSL/TLS
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem

# Enable LDAP authentication
security:
  authorization: enabled
  ldap:
    servers: "ldap.example.com"
    bind:
      queryUser: "cn=mongodb,ou=users,dc=example,dc=com"
      queryPassword: "password"
    userToDNMapping:
      - match: "(.+)@ENGINEERING.EXAMPLE.COM"
        ldapQuery: "cn={0},ou=engineering,dc=example,dc=com"`,
        },
        {
          command: 'Database and User Management',
          description: 'Create databases and users',
          usage: 'use, createUser, grantRoles',
          example: `======== Database Operations ========
# Connect to MongoDB
mongosh

# Switch to database (creates if doesn't exist)
use myapp

# List databases
show dbs
show databases

# Show current database
db
db.getName()

# Drop database
db.dropDatabase()

# Show collections
show collections
show tables

======== User Management ========
# Switch to admin database
use admin

# Create user with specific roles
db.createUser({
  user: "myuser",
  pwd: "secure_password",
  roles: [
    { role: "readWrite", db: "myapp" },
    { role: "dbAdmin", db: "myapp" }
  ]
});

# Create admin user
db.createUser({
  user: "admin",
  pwd: "admin_password",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
});

# List users
show users
db.getUsers()

# Authenticate user
db.auth("myuser", "secure_password")

# Update user
db.updateUser("myuser", {
  pwd: "new_password",
  roles: [
    { role: "readWrite", db: "myapp" },
    { role: "dbAdmin", db: "myapp" }
  ]
});

# Drop user
db.dropUser("myuser")

======== Built-in Roles ========
# Database User Roles
read, readWrite, dbAdmin, dbOwner, userAdmin

# Database Administration Roles
clusterAdmin, clusterManager, clusterMonitor, hostManager

# Backup and Restoration Roles
backup, restore

# All-Database Roles
readAnyDatabase, readWriteAnyDatabase, userAdminAnyDatabase, dbAdminAnyDatabase

# Superuser Role
root

# Custom roles
db.createRole({
  role: "appReadOnly",
  privileges: [
    {
      resource: { db: "myapp", collection: "" },
      actions: ["find"]
    }
  ],
  roles: []
});`,
        },
      ],
    },
    {
      title: 'Basic CRUD Operations',
      commands: [
        {
          command: 'Create Operations',
          description: 'Insert documents into collections',
          usage: 'insertOne, insertMany, insert',
          example: `======== Insert Single Document ========
# Insert one document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  status: "active",
  createdAt: new Date()
});

# Insert with generated ObjectId
db.users.insertOne({
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  name: "Jane Smith",
  email: "jane@example.com",
  age: 25
});

======== Insert Multiple Documents ========
# Insert multiple documents
db.users.insertMany([
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    status: "active"
  },
  {
    name: "Bob Wilson",
    email: "bob@example.com",
    age: 35,
    status: "inactive"
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 42,
    status: "active"
  }
]);

# Insert with ordered option (stop on error)
db.users.insertMany([
  { name: "User1", email: "user1@example.com" },
  { name: "User2", email: "user2@example.com" }
], { ordered: true });

# Insert with unordered option (continue on error)
db.users.insertMany([
  { name: "User1", email: "user1@example.com" },
  { name: "User2", email: "user2@example.com" }
], { ordered: false });

======== Insert with Write Concern ========
# Acknowledged write (default)
db.users.insertOne({ name: "Test" }, { writeConcern: { w: 1 } });

# Majority write
db.users.insertOne({ name: "Test" }, { writeConcern: { w: "majority" } });

# Custom write concern
db.users.insertOne({ name: "Test" }, { 
  writeConcern: { w: 2, j: true, wtimeout: 5000 } 
});

======== Legacy Insert Method ========
# Deprecated insert method
db.users.insert({ name: "Legacy User" });

# Insert with validation
db.users.insertOne({
  name: "Validated User",
  email: "validated@example.com",
  age: 25
}, {
  bypassDocumentValidation: false
});`,
        },
        {
          command: 'Read Operations',
          description: 'Query and retrieve documents',
          usage: 'find, findOne, pretty',
          example: `======== Basic Queries ========
# Find all documents
db.users.find()

# Find with criteria
db.users.find({ status: "active" })

# Find with multiple criteria
db.users.find({ status: "active", age: { \$gt: 25 } })

# Find one document
db.users.findOne({ name: "John Doe" })

# Pretty print results
db.users.find().pretty()

# Projection (select specific fields)
db.users.find({}, { name: 1, email: 1, _id: 0 })

# Exclude specific fields
db.users.find({}, { password: 0, ssn: 0 })

======== Query Operators ========
# Comparison operators
db.users.find({ age: { \$gt: 25 } })        # Greater than
db.users.find({ age: { \$gte: 25 } })       # Greater than or equal
db.users.find({ age: { \$lt: 50 } })        # Less than
db.users.find({ age: { \$lte: 50 } })       # Less than or equal
db.users.find({ age: { \$ne: 30 } })        # Not equal
db.users.find({ age: { \$in: [25, 30, 35] } }) # In array
db.users.find({ age: { \$nin: [20, 21, 22] } }) # Not in array

# Logical operators
db.users.find({ \$and: [{ age: { \$gt: 25 } }, { status: "active" }] })
db.users.find({ \$or: [{ age: { \$lt: 25 } }, { status: "inactive" }] })
db.users.find({ age: { \$not: { \$lt: 18 } } })
db.users.find({ \$nor: [{ age: { \$lt: 18 } }, { status: "inactive" }] })

# Element operators
db.users.find({ age: { \$exists: true } })
db.users.find({ email: { \$type: "string" } })

# Array operators
db.users.find({ tags: "mongodb" })          # Array contains value
db.users.find({ tags: { \$all: ["mongodb", "nodejs"] } }) # Contains all
db.users.find({ tags: { \$size: 3 } })      # Array size
db.users.find({ "tags.0": "mongodb" })      # First element

======== Regular Expressions ========
# Case-sensitive regex
db.users.find({ name: /John/ })

# Case-insensitive regex
db.users.find({ name: /john/i })

# Regex with options
db.users.find({ email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}\$/ })

# Using RegExp object
db.users.find({ name: new RegExp("john", "i") })`,
        },
        {
          command: 'Update Operations',
          description: 'Modify existing documents',
          usage: 'updateOne, updateMany, replaceOne',
          example: `======== Update Single Document ========
# Update one document
db.users.updateOne(
  { name: "John Doe" },
  { \$set: { status: "inactive" } }
);

# Update with upsert (create if not found)
db.users.updateOne(
  { email: "newuser@example.com" },
  { 
    \$set: { name: "New User", status: "active" },
    \$setOnInsert: { createdAt: new Date() }
  },
  { upsert: true }
);

======== Update Multiple Documents ========
# Update multiple documents
db.users.updateMany(
  { status: "active" },
  { \$set: { lastUpdated: new Date() } }
);

# Update with condition
db.users.updateMany(
  { age: { \$gt: 30 } },
  { \$inc: { age: 1 } }
);

======== Update Operators ========
# \$set - Set field value
db.users.updateOne({ name: "John" }, { \$set: { email: "newemail@example.com" } })

# \$unset - Remove field
db.users.updateOne({ name: "John" }, { \$unset: { tempField: 1 } })

# \$inc - Increment field
db.users.updateOne({ name: "John" }, { \$inc: { age: 1, loginCount: 1 } })

# \$mul - Multiply field
db.users.updateOne({ name: "John" }, { \$mul: { score: 1.5 } })

# \$min/\$max - Set minimum/maximum value
db.users.updateOne({ name: "John" }, { \$min: { age: 18 } })
db.users.updateOne({ name: "John" }, { \$max: { age: 65 } })

# Array operators
db.users.updateOne({ name: "John" }, { \$push: { tags: "mongodb" } })
db.users.updateOne({ name: "John" }, { \$addToSet: { tags: "nodejs" } })
db.users.updateOne({ name: "John" }, { \$pull: { tags: "oldtag" } })
db.users.updateOne({ name: "John" }, { \$pop: { tags: 1 } })  # Remove last
db.users.updateOne({ name: "John" }, { \$pop: { tags: -1 } }) # Remove first

# \$rename - Rename field
db.users.updateOne({ name: "John" }, { \$rename: { "oldName": "newName" } })

# \$currentDate - Set to current date
db.users.updateOne({ name: "John" }, { \$currentDate: { lastModified: true } })

======== Replace Document ========
# Replace entire document
db.users.replaceOne(
  { name: "John Doe" },
  {
    name: "John Smith",
    email: "johnsmith@example.com",
    age: 31,
    status: "active"
  }
);`,
        },
        {
          command: 'Delete Operations',
          description: 'Remove documents from collections',
          usage: 'deleteOne, deleteMany, remove',
          example: `======== Delete Single Document ========
# Delete one document
db.users.deleteOne({ name: "John Doe" })

# Delete with filter
db.users.deleteOne({ status: "inactive" })

# Delete by ObjectId
db.users.deleteOne({ _id: ObjectId("64a1b2c3d4e5f6789012345") })

======== Delete Multiple Documents ========
# Delete multiple documents
db.users.deleteMany({ status: "inactive" })

# Delete with condition
db.users.deleteMany({ age: { \$lt: 18 } })

# Delete all documents (dangerous!)
db.users.deleteMany({})

======== Delete with Write Concern ========
# Acknowledged delete
db.users.deleteOne({ name: "John" }, { writeConcern: { w: 1 } })

# Majority write
db.users.deleteMany({ status: "inactive" }, { 
  writeConcern: { w: "majority" } 
})

======== Legacy Remove Method ========
# Deprecated remove method
db.users.remove({ status: "inactive" })

# Remove with justOne option
db.users.remove({ name: "John" }, { justOne: true })

======== Safe Delete Patterns ========
# Find before delete
var docsToDelete = db.users.find({ status: "inactive" }).toArray();
print("Found " + docsToDelete.length + " documents to delete");
db.users.deleteMany({ status: "inactive" });

# Delete with verification
var result = db.users.deleteOne({ name: "John Doe" });
if (result.deletedCount > 0) {
  print("Document deleted successfully");
} else {
  print("No document found to delete");
}

# Soft delete (mark as deleted instead of removing)
db.users.updateMany(
  { status: "inactive" },
  { 
    \$set: { 
      status: "deleted", 
      deletedAt: new Date(),
      isDeleted: true 
    } 
  }
);`,
        },
      ],
    },
    {
      title: 'MongoDB Data Types',
      commands: [
        {
          command: 'Basic Data Types',
          description: 'Understanding MongoDB data types',
          usage: 'String, Number, Date, Boolean, ObjectId',
          example: `======== Basic Types Example ========
db.products.insertOne({
  _id: ObjectId("64a1b2c3d4e5f6789012345"),  # ObjectId
  name: "Laptop",                              # String
  price: 999.99,                               # Double
  inStock: true,                               # Boolean
  quantity: 50,                                # 32-bit Integer
  weight: 2.5,                                 # Double
  tags: ["electronics", "computers"],          # Array
  specifications: {                           # Object
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD"
  },
  createdAt: new Date(),                      # Date
  updatedAt: new Date("2023-12-25T10:30:00Z"), # ISODate
  rating: null                                 # Null
});

======== ObjectId ========
# Create ObjectId
var id = new ObjectId()
var id = ObjectId("64a1b2c3d4e5f6789012345")

# Get timestamp from ObjectId
id.getTimestamp()

# ObjectId properties
id.toString()      # String representation
id.toHexString()   # Hex string

======== Numbers ========
# Integer (32-bit)
{ quantity: 50 }

# Long (64-bit)
{ bigNumber: NumberLong("123456789012345") }

# Decimal (high precision)
{ price: NumberDecimal("999.99") }

# Double (default)
{ weight: 2.5 }

======== Dates ========
# Current date
new Date()
ISODate()

# Specific date
new Date("2023-12-25")
new Date("2023-12-25T10:30:00Z")
ISODate("2023-12-25T10:30:00Z")

# Date operations
var date = new Date();
date.getFullYear()    # Year
date.getMonth()       # Month (0-11)
date.getDate()        # Day
date.getTime()        # Timestamp

======== Binary Data ========
# Create binary data
var binaryData = new BinData(2, "SGVsbG8gV29ybGQ=");

# Insert binary data
db.files.insertOne({
  filename: "document.pdf",
  data: binaryData,
  contentType: "application/pdf"
});`,
        },
        {
          command: 'Advanced Data Types',
          description: 'Complex data types and structures',
          usage: 'Arrays, Objects, Regex, DBRef',
          example: `======== Arrays ========
# Simple array
{ tags: ["mongodb", "nodejs", "javascript"] }

# Array of objects
{
  orders: [
    { id: 1, amount: 100, date: new Date() },
    { id: 2, amount: 200, date: new Date() }
  ]
}

# Mixed array
{
  mixedArray: [
    "string",
    123,
    { nested: "object" },
    ["nested", "array"],
    true,
    null
  ]
}

# Array operations
db.products.find({ tags: "mongodb" })                    # Contains
db.products.find({ tags: { \$all: ["mongodb", "nodejs"] } }) # Contains all
db.products.find({ tags: { \$size: 3 } })                 # Size
db.products.find({ "tags.0": "mongodb" })                 # First element

======== Objects (Embedded Documents) ========
# Simple object
{
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  }
}

# Nested objects
{
  user: {
    profile: {
      personal: {
        name: "John Doe",
        age: 30
      },
      preferences: {
        theme: "dark",
        notifications: true
      }
    }
  }
}

# Query nested fields
db.users.find({ "address.city": "New York" })
db.users.find({ "user.profile.personal.age": { \$gt: 25 } })

======== Regular Expressions ========
# Pattern matching
{ email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2, }\$/ }

# Case-insensitive
{ name: /john/i }

# Regex with options
{ description: /mongodb.*/i }

======== DBRef (Database References) ========
# Create DBRef
{
  userId: DBRef("users", ObjectId("64a1b2c3d4e5f6789012345")),
  productId: DBRef("products", ObjectId("64a1b2c3d4e5f6789012346"))
}

# Resolve DBRef
var user = db.users.findOne({ _id: DBRef("users", "64a1b2c3d4e5f6789012345").\$id });

======== Min/Max Keys ========
# MinKey (lowest possible value)
{ priority: MinKey }

# MaxKey (highest possible value)
{ priority: MaxKey }

# Query with MinKey/MaxKey
db.collection.find({ _id: { \$gt: MinKey, \$lt: MaxKey } })

======== Timestamp ========
# BSON Timestamp
{ timestamp: Timestamp(1703500200, 1) }

# Current timestamp
{ timestamp: new Timestamp() }

======== Symbol (deprecated) ========
# Symbol type (deprecated in MongoDB 4.0+)
{ symbol: Symbol("test") }`,
        },
      ],
    },
    {
      title: 'Query Operators and Aggregation',
      commands: [
        {
          command: 'Advanced Query Operators',
          description: 'Complex query patterns',
          usage: '\$elemMatch, \$text, \$where',
          example: `======== \$elemMatch Operator ========
# Match documents with array element matching multiple conditions
db.articles.find({
  comments: {
    \$elemMatch: {
      author: "John",
      rating: { \$gte: 4 }
    }
  }
});

# Complex element matching
db.products.find({
  reviews: {
    \$elemMatch: {
      rating: { \$gte: 4 },
      "reviewer.location": "USA"
    }
  }
});

======== \$text Search Operator ========
# Create text index
db.articles.createIndex({ title: "text", content: "text" })

# Text search
db.articles.find({ \$text: { \$search: "mongodb tutorial" } })

# Text search with language
db.articles.find({ 
  \$text: { 
    \$search: "mongodb tutorial", 
    \$language: "en" 
  } 
})

# Text search with case sensitivity
db.articles.find({ 
  \$text: { 
    \$search: "MongoDB", 
    \$caseSensitive: true 
  } 
})

# Text score
db.articles.find(
  { \$text: { \$search: "mongodb" } },
  { score: { \$meta: "textScore" } }
).sort({ score: { \$meta: "textScore" } })

======== \$where Operator ========
# JavaScript expression
db.users.find({ \$where: "this.age > 25 && this.status === 'active'" })

# Function with \$where
db.users.find({
  \$where: function() {
    return this.age > 25 && this.email.includes("@example.com");
  }
})

# Complex condition
db.orders.find({
  \$where: function() {
    return this.items.length > 0 && 
           this.items.reduce(function(sum, item) {
             return sum + item.price * item.quantity;
           }, 0) > 1000;
  }
})

======== Geospatial Operators ========
# 2D index for legacy coordinates
db.places.createIndex({ location: "2d" })

# 2D sphere index for geographic coordinates
db.places.createIndex({ location: "2dsphere" })

# Near query
db.places.find({
  location: {
    \$near: {
      \$geometry: {
        type: "Point",
        coordinates: [-73.987, 40.748]
      },
      \$maxDistance: 1000
    }
  }
})

# Within polygon
db.places.find({
  location: {
    \$geoWithin: {
      \$geometry: {
        type: "Polygon",
        coordinates: [[
          [-73.987, 40.748],
          [-73.987, 40.748],
          [-73.987, 40.748],
          [-73.987, 40.748],
          [-73.987, 40.748]
        ]]
      }
    }
  }
})

# Intersects
db.places.find({
  location: {
    \$geoIntersects: {
      \$geometry: {
        type: "LineString",
        coordinates: [[-73.987, 40.748], [-73.987, 40.748]]
      }
    }
  }
})`,
        },
        {
          command: 'Aggregation Framework',
          description: 'Data aggregation and transformation',
          usage: 'aggregate, pipeline stages',
          example: `======== Basic Aggregation ========
# Count documents by status
db.users.aggregate([
  { \$group: { _id: "\$status", count: { \$sum: 1 } } }
])

# Average price by category
db.products.aggregate([
  { \$group: { 
    _id: "\$category", 
    avgPrice: { \$avg: "\$price" },
    count: { \$sum: 1 }
  }}
])

======== Pipeline Stages ========
# \$match - Filter documents
db.orders.aggregate([
  { \$match: { status: "completed" } },
  { \$group: { _id: null, total: { \$sum: "\$amount" } } }
])

# \$project - Reshape documents
db.users.aggregate([
  { \$project: { 
    name: 1, 
    email: 1, 
    fullName: { \$concat: ["\$firstName", " ", "\$lastName"] }
  }}
])

# \$sort - Sort documents
db.products.aggregate([
  { \$match: { category: "electronics" } },
  { \$sort: { price: -1 } },
  { \$limit: 10 }
])

# \$limit/\$skip - Pagination
db.users.aggregate([
  { \$sort: { createdAt: -1 } },
  { \$skip: 20 },
  { \$limit: 10 }
])

======== Advanced Aggregation ========
# Unwind array
db.orders.aggregate([
  { \$unwind: "\$items" },
  { \$group: { 
    _id: "\$items.productId", 
    totalSold: { \$sum: "\$items.quantity" }
  }}
])

# Lookup (join collections)
db.orders.aggregate([
  {
    \$lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { \$unwind: "\$user" },
  { \$project: { 
    userName: "\$user.name", 
    orderAmount: "\$amount" 
  }}
])

# Multiple lookups
db.orders.aggregate([
  {
    \$lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  {
    \$lookup: {
      from: "products",
      localField: "items.productId",
      foreignField: "_id",
      as: "products"
    }
  }
])

======== Conditional Aggregation ========
# \$cond operator
db.users.aggregate([
  {
    \$project: {
      name: 1,
      ageGroup: {
        \$cond: {
          if: { \$lt: ["\$age", 25] },
          then: "Young",
          else: {
            \$cond: {
              if: { \$lt: ["\$age", 50] },
              then: "Middle",
              else: "Senior"
            }
          }
        }
      }
    }
  }
])

# \$switch operator
db.products.aggregate([
  {
    \$project: {
      name: 1,
      priceCategory: {
        \$switch: {
          branches: [
            { case: { \$lt: ["\$price", 50] }, then: "Budget" },
            { case: { \$lt: ["\$price", 200] }, then: "Mid-range" }
          ],
          default: "Premium"
        }
      }
    }
  }
])

======== Date Aggregation ========
# Group by date parts
db.orders.aggregate([
  {
    \$group: {
      _id: {
        year: { \$year: "\$orderDate" },
        month: { \$month: "\$orderDate" },
        day: { \$dayOfMonth: "\$orderDate" }
      },
      total: { \$sum: "\$amount" },
      count: { \$sum: 1 }
    }
  },
  { \$sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }
])

# Date arithmetic
db.users.aggregate([
  {
    \$project: {
      name: 1,
      daysSinceRegistration: {
        \$divide: [
          { \$subtract: [new Date(), "\$registrationDate"] },
          1000 * 60 * 60 * 24  # Convert to days
        ]
      }
    }
  }
])`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Indexing and Performance',
      commands: [
        {
          command: 'Creating Indexes',
          description: 'Improve query performance with indexes',
          usage: 'createIndex, different index types',
          example: `======== Basic Indexes ========
# Single field index
db.users.createIndex({ email: 1 })

# Compound index
db.users.createIndex({ status: 1, age: -1 })

# Unique index
db.users.createIndex({ username: 1 }, { unique: true })

# Sparse index (only indexes documents that have the field)
db.users.createIndex({ "profile.phone": 1 }, { sparse: true })

# TTL index (auto-delete documents after time)
db.sessions.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 })

# Partial index (index only documents matching filter)
db.users.createIndex(
  { status: 1 },
  { partialFilterExpression: { status: { \$exists: true } } }
)

======== Special Index Types ========
# Text index for search
db.articles.createIndex({ 
  title: "text", 
  content: "text" 
}, {
  weights: {
    title: 10,
    content: 1
  },
  name: "article_text_index"
})

# 2D sphere index for geospatial data
db.places.createIndex({ location: "2dsphere" })

# 2D index for legacy coordinates
db.places.createIndex({ coordinates: "2d" })

# Hashed index for sharding
db.users.createIndex({ _id: "hashed" })

# Wildcard index (MongoDB 4.2+)
db.products.createIndex({ "attributes.\$\*\*": 1 })

======== Index Options ========
# Background index creation
db.users.createIndex({ email: 1 }, { background: true })

# Case-insensitive index (MongoDB 3.4+)
db.users.createIndex(
  { name: 1 },
  { collation: { locale: "en", strength: 2 } }
)

# Index with custom name
db.users.createIndex({ email: 1 }, { name: "email_index" })

# Index with storage engine options
db.users.createIndex(
  { email: 1 },
  { 
    storageEngine: { 
      wiredTiger: { 
        configString: "block_compressor=zstd" 
      } 
    } 
  }

======== Complex Index Patterns ========
# Multikey index (arrays)
db.products.createIndex({ tags: 1 })

# Compound multikey index
db.products.createIndex({ category: 1, tags: 1 })

# Index on array of objects
db.orders.createIndex({ "items.productId": 1 })

# Covered index (all query fields in index)
db.users.createIndex({ status: 1, age: 1, name: 1 })`,
        },
        {
          command: 'Index Management',
          description: 'Monitor and maintain indexes',
          usage: 'listIndexes, dropIndex, explain',
          example: `======== Index Information ========
# List indexes on collection
db.users.getIndexes()
db.users.listIndexes()

# Index statistics
db.users.aggregate([{ \$indexStats: {} }])

# Index size
db.users.totalIndexSize()
db.users.indexSize("email_index")

# Check if index exists
db.users.getIndexes().some(function(index) {
  return index.name === "email_index";
})

======== Query Execution Analysis ========
# Explain query execution
db.users.find({ email: "test@example.com" }).explain()

# Detailed execution stats
db.users.find({ status: "active" }).explain("executionStats")

# Explain with verbosity
db.users.find({ age: { \$gt: 25 } }).explain("allPlansExecution")

# Index usage
db.users.find({ status: "active", age: { \$gt: 25 } }).hint({ status: 1, age: 1 })

# Force index usage
db.users.find({ email: "test@example.com" }).hint({ email: 1 })

# Force no index (collection scan)
db.users.find({ status: "active" }).hint({ \$natural: 1 })

======== Index Maintenance ========
# Drop index
db.users.dropIndex("email_index")
db.users.dropIndex({ email: 1 })

# Drop all indexes except _id_
db.users.dropIndexes()

# Rebuild index
db.users.reIndex()

# Compact collection (reclaims space)
db.runCommand({ compact: "users" })

# Validate collection
db.users.validate()

======== Performance Monitoring ========
# Query profiler
db.setProfilingLevel(2, { slowms: 100 })
db.getProfilingLevel()
db.system.profile.find().limit(5).sort({ ts: -1 }).pretty()

# Server status
db.serverStatus()
db.stats()

# Collection statistics
db.users.stats()
db.users.dataSize()
db.users.storageSize()

# Index usage statistics
db.users.aggregate([{ \$indexStats: {} }]).forEach(function(stat) {
  print("Index: " + stat.name + ", Ops: " + stat.accesses.ops);
})`,
        },
      ],
    },
    {
      title: 'Schema Validation',
      commands: [
        {
          command: 'Document Validation',
          description: 'Enforce data structure rules',
          usage: 'createCollection with validation',
          example: `======== Basic Validation Rules ========
# Create collection with validation
db.createCollection("users", {
  validator: {
    \$jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,}\$",
          description: "must be a valid email address"
        },
        age: {
          bsonType: "int",
          minimum: 0,
          maximum: 150,
          description: "must be an integer in [0, 150]"
        },
        status: {
          enum: ["active", "inactive", "pending"],
          description: "can only be one of the enum values"
        }
      }
    }
  }
})

# Insert valid document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  status: "active"
})

# Try to insert invalid document (will fail)
db.users.insertOne({
  name: "Jane Doe",
  email: "invalid-email",
  age: -5
})

======== Advanced Validation ========
# Complex validation with multiple rules
db.createCollection("products", {
  validator: {
    \$and: [
      { name: { \$type: "string" } },
      { price: { \$type: "number", \$gte: 0 } },
      { category: { \$in: ["electronics", "books", "clothing"] } },
      { 
        \$or: [
          { inStock: true },
          { expectedRestock: { \$type: "date" } }
        ]
      }
    ]
  },
  validationLevel: "moderate",
  validationAction: "error"
})

# Validation with custom error messages
db.createCollection("orders", {
  validator: {
    \$jsonSchema: {
      bsonType: "object",
      required: ["userId", "items", "total"],
      properties: {
        userId: {
          bsonType: "objectId",
          description: "must be a valid ObjectId"
        },
        items: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["productId", "quantity", "price"],
            properties: {
              productId: { bsonType: "objectId" },
              quantity: { bsonType: "int", minimum: 1 },
              price: { bsonType: "number", minimum: 0 }
            }
          }
        },
        total: {
          bsonType: "number",
          minimum: 0,
          description: "must be a positive number"
        }
      }
    }
  }
})

======== Validation Levels ========
# strict (default) - validate all inserts and updates
# moderate - validate inserts and updates to existing documents
# off - no validation

db.createCollection("logs", {
  validator: { level: { \$type: "string" } },
  validationLevel: "moderate"
})

======== Validation Actions ========
# error (default) - reject invalid documents
# warn - allow invalid documents but log warning

db.createCollection("temp", {
  validator: { name: { \$type: "string" } },
  validationAction: "warn"
})`,
        },
        {
          command: 'Schema Management',
          description: 'Modify and manage validation rules',
          usage: 'collMod, validation operations',
          example: `======== Modify Validation Rules ========
# Add validation to existing collection
db.runCommand({
  collMod: "users",
  validator: {
    \$jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        age: { bsonType: "int", minimum: 0, maximum: 150 },
        phone: { bsonType: "string", pattern: "^\\+?[1-9]\\d{1,14}\$" }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})

# Update validation level
db.runCommand({
  collMod: "users",
  validationLevel: "moderate"
})

# Disable validation
db.runCommand({
  collMod: "users",
  validationLevel: "off"
})

======== Validation Examples ========
# Product catalog validation
db.createCollection("catalog", {
  validator: {
    \$jsonSchema: {
      bsonType: "object",
      required: ["title", "price", "category"],
      properties: {
        title: {
          bsonType: "string",
          minLength: 1,
          maxLength: 200,
          description: "Product title (1-200 characters)"
        },
        description: {
          bsonType: "string",
          maxLength: 2000,
          description: "Optional description (max 2000 characters)"
        },
        price: {
          bsonType: "number",
          minimum: 0,
          maximum: 999999.99,
          description: "Price must be between 0 and 999999.99"
        },
        category: {
          bsonType: "string",
          enum: ["electronics", "books", "clothing", "home", "sports"],
          description: "Must be one of the predefined categories"
        },
        tags: {
          bsonType: "array",
          maxItems: 10,
          items: {
            bsonType: "string",
            minLength: 1,
            maxLength: 50
          },
          description: "Array of tags (max 10, each 1-50 characters)"
        },
        specifications: {
          bsonType: "object",
          description: "Optional specifications object"
        },
        inStock: {
          bsonType: "bool",
          description: "Whether the product is in stock"
        }
      }
    }
  }
})

# Validation with conditional rules
db.createCollection("events", {
  validator: {
    \$or: [
      { type: "login", userId: { \$exists: true } },
      { type: "logout", userId: { \$exists: true } },
      { type: "purchase", orderId: { \$exists: true }, amount: { \$type: "number" } },
      { type: "error", message: { \$type: "string" } }
    ]
  }
})

======== Validation Best Practices ========
# Start with permissive validation, then tighten
# Use validationLevel: "moderate" for existing data
# Use descriptive error messages
# Combine with application-level validation
# Test validation rules thoroughly

# Check validation errors
try {
  db.users.insertOne({ name: "", email: "invalid" });
} catch (e) {
  print("Validation error: " + e.errmsg);
}

# Bypass validation (admin only)
db.users.insertOne(
  { name: "Temp", email: "temp@example.com" },
  { bypassDocumentValidation: true }
)`,
        },
      ],
    },
    {
      title: 'Transactions',
      commands: [
        {
          command: 'Multi-Document Transactions',
          description: 'ACID transactions across multiple documents',
          usage: 'startSession, commitTransaction, abortTransaction',
          example: `======== Basic Transaction ========
# Start session
var session = db.getMongo().startSession();

# Start transaction
session.startTransaction();

try {
  // Operations in transaction
  var usersCollection = session.getDatabase("myapp").users;
  var ordersCollection = session.getDatabase("myapp").orders;
  
  // Update user balance
  usersCollection.updateOne(
    { _id: ObjectId("64a1b2c3d4e5f6789012345") },
    { \$inc: { balance: -100 } }
  );
  
  // Create order
  ordersCollection.insertOne({
    userId: ObjectId("64a1b2c3d4e5f6789012345"),
    amount: 100,
    status: "pending",
    createdAt: new Date()
  });
  
  // Commit transaction
  session.commitTransaction();
  print("Transaction committed successfully");
  
} catch (error) {
  // Abort transaction on error
  session.abortTransaction();
  print("Transaction aborted: " + error);
} finally {
  session.endSession();
}

======== Transaction with Retry Logic ========
async function transferFunds(fromId, toId, amount) {
  const session = db.getMongo().startSession();
  
  try {
    await session.withTransaction(async () => {
      const usersCollection = session.getDatabase("myapp").users;
      
      // Check sender balance
      const sender = await usersCollection.findOne({ _id: fromId });
      if (sender.balance < amount) {
        throw new Error("Insufficient funds");
      }
      
      // Transfer funds
      await usersCollection.updateOne(
        { _id: fromId },
        { \$inc: { balance: -amount } }
      );
      
      await usersCollection.updateOne(
        { _id: toId },
        { \$inc: { balance: amount } }
      );
      
      // Record transaction
      await session.getDatabase("myapp").transactions.insertOne({
        fromId: fromId,
        toId: toId,
        amount: amount,
        timestamp: new Date()
      });
    });
    
    print("Transfer completed successfully");
  } catch (error) {
    print("Transfer failed: " + error);
  } finally {
    await session.endSession();
  }
}

======== Transaction Options ========
# Transaction with write concern
session.startTransaction({
  writeConcern: { w: "majority", j: true },
  readConcern: { level: "snapshot" }
});

# Transaction with timeout
session.startTransaction({
  writeConcern: { w: "majority", wtimeout: 5000 }
});

# Transaction with read preference
session.startTransaction({
  readPreference: "primary"
});

======== Transaction Examples ========
# E-commerce order processing
session.startTransaction();

try {
  // Reserve inventory
  db.products.updateOne(
    { _id: productId, stock: { \$gte: quantity } },
    { \$inc: { stock: -quantity, reserved: quantity } }
  );
  
  // Create order
  db.orders.insertOne({
    userId: userId,
    items: [{ productId: productId, quantity: quantity }],
    total: total,
    status: "pending"
  });
  
  // Update user stats
  db.users.updateOne(
    { _id: userId },
    { 
      \$inc: { totalOrders: 1, totalSpent: total },
      \$set: { lastOrderDate: new Date() }
    }
  );
  
  session.commitTransaction();
  
} catch (error) {
  session.abortTransaction();
  throw error;
}

# Banking transaction
session.startTransaction();

try {
  // Debit account
  db.accounts.updateOne(
    { _id: fromAccount, balance: { \$gte: amount } },
    { \$inc: { balance: -amount } }
  );
  
  // Credit account
  db.accounts.updateOne(
    { _id: toAccount },
    { \$inc: { balance: amount } }
  );
  
  // Record transaction
  db.transactions.insertOne({
    fromAccount: fromAccount,
    toAccount: toAccount,
    amount: amount,
    type: "transfer",
    timestamp: new Date()
  });
  
  session.commitTransaction();
  
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}`,
        },
        {
          command: 'Transaction Best Practices',
          description: 'Optimize and handle transactions properly',
          usage: 'Error handling, retry logic, performance',
          example: `======== Transaction Error Handling ========
# Comprehensive error handling
async function executeTransaction(operations) {
  const session = db.getMongo().startSession();
  
  try {
    await session.withTransaction(async () => {
      for (const operation of operations) {
        await operation(session);
      }
    });
  } catch (error) {
    // Handle specific error types
    if (error.errorLabels && error.errorLabels.includes("TransientTransactionError")) {
      // Retry transient errors
      print("Transient error, retrying...");
      return executeTransaction(operations);
    } else if (error.errorLabels && error.errorLabels.includes("UnknownTransactionCommitResult")) {
      // Retry commit errors
      print("Commit result unknown, retrying...");
      return executeTransaction(operations);
    } else {
      // Handle other errors
      print("Transaction failed: " + error);
      throw error;
    }
  } finally {
    await session.endSession();
  }
}

======== Transaction Retry Logic ========
# Automatic retry with exponential backoff
async function executeWithRetry(session, operations, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      await session.withTransaction(async () => {
        for (const operation of operations) {
          await operation(session);
        }
      });
      return; // Success
    } catch (error) {
      if (attempt === maxRetries - 1) {
        throw error; // Max retries reached
      }
      
      // Wait before retry (exponential backoff)
      const delay = Math.pow(2, attempt) * 100;
      await new Promise(resolve => setTimeout(resolve, delay));
      
      print('Retry attempt ' + (attempt + 1) + '/' + maxRetries);
    }
  }
}

======== Transaction Performance ========
# Keep transactions short
session.startTransaction();

try {
  // Batch operations
  const bulkOps = [];
  for (let i = 0; i < 1000; i++) {
    bulkOps.push({
      updateOne: {
        filter: { _id: ObjectId() },
        update: { \$set: { processed: true } }
      }
    });
  }
  
  await db.collection.bulkWrite(bulkOps, { session });
  await session.commitTransaction();
  
} catch (error) {
  await session.abortTransaction();
  throw error;
}

# Use appropriate read/write concerns
session.startTransaction({
  writeConcern: { w: "majority", j: true },
  readConcern: { level: "snapshot" }
});

======== Transaction Monitoring ========
# Track active transactions
db.runCommand({ 
  serverStatus: 1,
  transactions: 1 
});

# Monitor transaction performance
db.setProfilingLevel(2, { slowms: 100 });

# Check for long-running transactions
db.currentOp().inprog.forEach(function(op) {
  if (op.secs_running > 10 && op.command.transaction) {
    print("Long-running transaction detected: " + op.opid);
  }
});

======== Transaction Limitations ========
# Transactions are limited to 16MB
# Cannot create/drop collections
# Cannot create indexes
# Limited to replica sets and sharded clusters
# Must use read concern "snapshot" or "local"

# Best practices
# - Keep transactions short
# - Use appropriate write concerns
# - Implement retry logic
# - Handle specific error types
# - Monitor transaction performance
# - Use bulk operations when possible`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Replication and High Availability',
      commands: [
        {
          command: 'Replica Set Configuration',
          description: 'Set up and manage replica sets',
          usage: 'rs.initiate, rs.add, rs.conf',
          example: `======== Initialize Replica Set ========
# Start MongoDB with replica set configuration
mongod --replSet "myReplicaSet" --bind_ip 0.0.0.0 --port 27017

# Connect to primary and initialize
mongo
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongodb1:27017" },
    { _id: 1, host: "mongodb2:27017" },
    { _id: 2, host: "mongodb3:27017" }
  ]
})

# Initialize with priority and votes
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongodb1:27017", priority: 2, votes: 1 },
    { _id: 1, host: "mongodb2:27017", priority: 1, votes: 1 },
    { _id: 2, host: "mongodb3:27017", priority: 1, votes: 0 }  # Arbiter
  ]
})

======== Replica Set Management ========
# Add member to replica set
rs.add("mongodb4:27017")

# Add member with configuration
rs.add({
  _id: 3,
  host: "mongodb4:27017",
  priority: 1,
  votes: 1,
  hidden: false,
  slaveDelay: 0,
  arbiterOnly: false
})

# Add arbiter
rs.addArb("mongodb5:27017")

# Remove member
rs.remove("mongodb4:27017")

# Reconfigure replica set
cfg = rs.conf()
cfg.members[0].priority = 3
rs.reconfig(cfg)

======== Replica Set Status ========
# Check replica set status
rs.status()
rs.conf()
rs.printSecondaryReplicationInfo()
rs.printSlaveReplicationInfo()

# Check if primary
db.isMaster()
rs.isMaster()

# Step down primary
rs.stepDown(60)  # Step down for 60 seconds

# Force reconfiguration
rs.freeze(30)   # Freeze member for 30 seconds
rs.syncFrom("mongodb2:27017")  # Force sync from specific member

======== Replica Set Security ========
# Create admin user for replica set
use admin
db.createUser({
  user: "replicaAdmin",
  pwd: "secure_password",
  roles: [
    { role: "clusterAdmin", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" }
  ]
})

# Enable authentication in mongod.conf
security:
  authorization: enabled
  keyFile: /opt/mongo/keyfile

# Create keyfile
openssl rand -base64 756 > /opt/mongo/keyfile
chmod 400 /opt/mongo/keyfile
chown mongodb:mongodb /opt/mongo/keyfile`,
        },
        {
          command: 'Replication Monitoring',
          description: 'Monitor replica set health and performance',
          usage: 'Replication metrics and diagnostics',
          example: `======== Replication Status Monitoring ========
# Detailed replica set status
rs.status().members.forEach(function(member) {
  print("Member: " + member.name);
  print("  State: " + member.stateStr);
  print("  Health: " + member.health);
  print("  Optime: " + member.optime);
  print("  Last heartbeat: " + member.lastHeartbeatRecv);
});

# Check replication lag
var status = rs.status();
status.members.forEach(function(member) {
  if (member.state === 2) {  # Secondary
    var lag = member.optimeDate - status.members[0].optimeDate;
    print("Replication lag for " + member.name + ": " + lag + "ms");
  }
});

# Monitor oplog
db.getReplicationInfo()
db.oplog.rs.stats()

# Check oplog size
db.oplog.rs.stats().maxSize
db.oplog.rs.stats().size

======== Performance Monitoring ========
# Replication metrics
db.serverStatus().metrics.repl

# Network metrics
db.serverStatus().network

# Connection metrics
db.serverStatus().connections

# Operation counters
db.serverStatus().opcounters

# Current operations
db.currentOp().inprog.forEach(function(op) {
  if (op.ns !== "local.oplog.rs") {
    print("Operation: " + op.op + " on " + op.ns);
    print("  Active: " + op.active + " secs_running: " + op.secs_running);
  }
});

======== Replication Diagnostics ========
# Check member health
rs.status().members.forEach(function(member) {
  if (member.health !== 1) {
    print("Unhealthy member: " + member.name);
  }
});

# Check election status
db.runCommand({ replSetGetStatus: 1 })

# Check rollback scenario
db.adminCommand({ getParameter: 1, "enableMajorityReadConcern": true })

# Diagnose replication issues
db.runCommand({ 
  serverStatus: 1,
  repl: 1 
})

# Check write concern
db.runCommand({ 
  getLastError: 1,
  w: "majority",
  wtimeout: 5000 
})

======== Automated Monitoring Script ========
function checkReplicaSetHealth() {
  var status = rs.status();
  var healthy = true;
  
  status.members.forEach(function(member) {
    if (member.health !== 1) {
      print("ALERT: Member " + member.name + " is unhealthy");
      healthy = false;
    }
    
    if (member.state === 1) {  # Primary
      print("Primary: " + member.name);
    } else if (member.state === 2) {  # Secondary
      var lag = new Date() - member.optimeDate;
      if (lag > 60000) {  # More than 1 minute lag
        print("WARNING: High replication lag on " + member.name);
        healthy = false;
      }
    }
  });
  
  if (healthy) {
    print("Replica set is healthy");
  }
  
  return healthy;
}

# Run health check every 5 minutes
setInterval(checkReplicaSetHealth, 300000);`,
        },
      ],
    },
    {
      title: 'Sharding and Scaling',
      commands: [
        {
          command: 'Shard Cluster Setup',
          description: 'Configure MongoDB sharding',
          usage: 'sh.enableSharding, shardCollection',
          example: `======== Initialize Shard Cluster ========
# Start config servers
mongod --configsvr --replSet "configReplSet" --bind_ip 0.0.0.0 --port 27019

# Initialize config server replica set
mongo --port 27019
rs.initiate({
  _id: "configReplSet",
  configsvr: true,
  members: [
    { _id: 0, host: "config1:27019" },
    { _id: 1, host: "config2:27019" },
    { _id: 2, host: "config3:27019" }
  ]
})

# Start query router (mongos)
mongos --configdb "configReplSet/config1:27019,config2:27019,config3:27019" --port 27017

# Start shard servers
mongod --shardsvr --replSet "shard1ReplSet" --bind_ip 0.0.0.0 --port 27018
mongod --shardsvr --replSet "shard2ReplSet" --bind_ip 0.0.0.0 --port 27020

# Initialize shard replica sets
mongo --port 27018
rs.initiate({
  _id: "shard1ReplSet",
  members: [
    { _id: 0, host: "shard1a:27018" },
    { _id: 1, host: "shard1b:27018" },
    { _id: 2, host: "shard1c:27018" }
  ]
})

======== Add Shards ========
# Connect to mongos
mongo --port 27017

# Add shards to cluster
sh.addShard("shard1ReplSet/shard1a:27018,shard1b:27018,shard1c:27018")
sh.addShard("shard2ReplSet/shard2a:27020,shard2b:27020,shard2c:27020")

# List shards
sh.status()
sh.getShardMap()

# Remove shard
sh.removeShard("shard1ReplSet")

======== Enable Sharding ========
# Enable sharding for database
sh.enableSharding("myapp")

# Shard collection with hashed shard key
sh.shardCollection("myapp.users", { _id: "hashed" })

# Shard collection with ranged shard key
sh.shardCollection("myapp.orders", { userId: 1, orderDate: 1 })

# Shard collection with compound shard key
sh.shardCollection("myapp.events", { userId: 1, timestamp: 1, eventType: 1 })

======== Shard Key Selection ========
# Good shard keys
# - High cardinality
# - Low frequency
# - Non-monotonic
# - Query isolation

# Hashed shard key (good for random distribution)
sh.shardCollection("myapp.logs", { userId: "hashed" })

# Ranged shard key (good for range queries)
sh.shardCollection("myapp.metrics", { timestamp: 1, deviceId: 1 })

# Compound shard key (for complex data)
sh.shardCollection("myapp.orders", { customerId: 1, orderDate: 1, region: 1 })

# Check shard key
db.collections.getInfos({ name: "users" })[0].options.shardKey`,
        },
        {
          command: 'Shard Management',
          description: 'Manage and monitor sharded cluster',
          usage: 'Shard operations and optimization',
          example: `======== Shard Status and Monitoring ========
# Check cluster status
sh.status()

# Detailed shard information
db.runCommand({ listShards: 1 })

# Shard distribution
db.runCommand({ dataSize: "myapp.users" })
db.runCommand({ collStats: "myapp.users" })

# Check chunk distribution
use config
db.chunks.find({ ns: "myapp.users" }).sort({ min: 1 })

# Shard health check
db.runCommand({ shardConnPoolStats: 1 })

======== Balancer Management ========
# Check balancer status
sh.getBalancerState()
sh.isBalancerRunning()

# Start/stop balancer
sh.startBalancer()
sh.stopBalancer()

# Configure balancer window
sh.setBalancerState(true)
sh.startBalancer("configReplSet/config1:27019", "configReplSet/config2:27019")

# Disable balancing for specific collection
sh.disableBalancing("myapp.users")
sh.enableBalancing("myapp.users")

# Check balancing statistics
use config
db.changelog.find({ what: "moveChunk.start" }).sort({ time: -1 }).limit(10)

======== Chunk Management ========
# Move chunk manually
sh.moveChunk("myapp.users", { userId: ObjectId("507f1f77bcf86cd799439011") }, "shard1ReplSet")

# Split chunk
sh.splitAt("myapp.users", { userId: ObjectId("507f1f77bcf86cd799439011") })
sh.splitFind("myapp.users", { userId: ObjectId("507f1f77bcf86cd799439011") })

# Merge chunks
sh.mergeChunks("myapp.users", 
  { userId: ObjectId("507f1f77bcf86cd799439011") },
  { userId: ObjectId("507f1f77bcf86cd799439012") }
)

# Check chunk size
db.runCommand({ dataSize: "myapp.users", keyPattern: { userId: 1 } })

======== Shard Optimization ========
# Optimize chunk size
use config
db.settings.save({ _id: "chunksize", value: 64 })  # 64MB chunks

# Configure balancer throttling
db.settings.save({ _id: "balancerThrottling", value: 1000 })

# Configure migration threshold
db.settings.save({ _id: "balancerMigratedChunks", value: 2 })

# Monitor shard performance
db.runCommand({ serverStatus: 1, sharding: 1 })

# Check shard key cardinality
db.runCommand({ shardKey: { userId: 1 }, collection: "myapp.users" })

======== Shard Maintenance ========
# Remove shard with data migration
sh.removeShard("shard1ReplSet")

# Add shard with specific zone
sh.addShardZone("shard1ReplSet", "zone1", { userId: { \$minKey: 1 }, userId: { \$maxKey: 1000 } })

# Associate collection with zone
sh.addTagRange("myapp.users", { userId: 1 }, { userId: 1000 }, "zone1")

# Check zone configuration
sh.removeShardZone("shard1ReplSet", "zone1")
sh.removeTagRange("myapp.users", { userId: 1 }, { userId: 1000 }, "zone1")

# Shard cluster diagnostics
db.runCommand({ shardConnPoolStats: 1 })
db.runCommand({ getShardMap: 1 })
db.runCommand({ listCollections: 1, filter: { options: { shardKey: { \$exists: true } } } })`,
        },
      ],
    },
    {
      title: 'Security and Authentication',
      commands: [
        {
          command: 'Authentication Mechanisms',
          description: 'Configure different authentication methods',
          usage: 'SCRAM, LDAP, x.509 certificates',
          example: `======== SCRAM Authentication ========
# Enable SCRAM in mongod.conf
security:
  authorization: enabled
  authenticationMechanisms: ["SCRAM-SHA-1", "SCRAM-SHA-256"]

# Create SCRAM user
use admin
db.createUser({
  user: "admin",
  pwd: "secure_password",
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase"],
  mechanisms: ["SCRAM-SHA-256"]
})

# Connect with SCRAM
mongo --username "admin" --password --authenticationDatabase "admin"

# Update user authentication mechanisms
db.updateUser("admin", {
  mechanisms: ["SCRAM-SHA-1", "SCRAM-SHA-256"]
})

======== LDAP Authentication ========
# Configure LDAP in mongod.conf
security:
  authorization: enabled
  ldap:
    servers: "ldap.example.com"
    bind:
      queryUser: "cn=mongodb,ou=users,dc=example,dc=com"
      queryPassword: "ldap_password"
    userToDNMapping:
      - match: "(.+)@EXAMPLE.COM"
        ldapQuery: "cn={0},ou=users,dc=example,dc=com"
    authz:
      queryTemplate: "cn={USER},ou=groups,dc=example,dc=com"

# Create LDAP-authenticated user
db.createUser({
  user: "ldap_user",
  roles: [{ role: "read", db: "myapp" }]
})

======== x.509 Certificate Authentication ========
# Generate certificates
openssl req -new -x509 -days 365 -nodes -out mongodb-cert.crt -keyout mongodb-cert.key

# Configure x.509 in mongod.conf
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem

security:
  authorization: enabled
  clusterAuthMode: x509

# Create x.509 user
db.getSiblingDB("\$external").runCommand({
  createUser: "CN=mongodb-client,OU=MongoDB,DC=example,DC=com",
  roles: [{ role: "readWrite", db: "myapp" }]
})

# Connect with x.509
mongo --ssl --sslPEMKeyFile client.pem --sslCAFile ca.pem

======== Kerberos Authentication ========
# Configure Kerberos in mongod.conf
security:
  authorization: enabled
  authenticationMechanisms: ["GSSAPI"]

# Create Kerberos user
db.createUser({
  user: "user@EXAMPLE.COM",
  roles: [{ role: "readWrite", db: "myapp" }]
})

# Connect with Kerberos
mongo --authenticationMechanism GSSAPI --authenticationDatabase "\$external" --username user@EXAMPLE.COM

======== AWS IAM Authentication ========
# Configure AWS IAM authentication
security:
  authorization: enabled
  authenticationMechanisms: ["MONGODB-AWS"]

# Set AWS credentials
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_SESSION_TOKEN=your_session_token

# Connect with AWS IAM
mongo "mongodb+srv://cluster0.abcde.mongodb.net/myapp" \
  --username <aws_iam_user> \
  --password <aws_iam_password> \
  --authenticationMechanism MONGODB-AWS \
  --authSource \$external`,
        },
        {
          command: 'Role-Based Access Control',
          description: 'Implement fine-grained access control',
          usage: 'Custom roles, privileges, and inheritance',
          example: `======== Built-in Roles ========
# Database User Roles
read, readWrite, dbAdmin, dbOwner, userAdmin

# Database Administration Roles
clusterAdmin, clusterManager, clusterMonitor, hostManager

# Backup and Restoration Roles
backup, restore

# All-Database Roles
readAnyDatabase, readWriteAnyDatabase, userAdminAnyDatabase, dbAdminAnyDatabase

# Superuser Role
root

======== Custom Roles ========
# Create custom role
db.createRole({
  role: "appReadOnly",
  privileges: [
    {
      resource: { db: "myapp", collection: "" },
      actions: ["find", "count"]
    }
  ],
  roles: []
})

# Create role with specific collection access
db.createRole({
  role: "orderManager",
  privileges: [
    {
      resource: { db: "myapp", collection: "orders" },
      actions: ["find", "insert", "update", "remove"]
    },
    {
      resource: { db: "myapp", collection: "products" },
      actions: ["find"]
    }
  ],
  roles: [{ role: "read", db: "myapp" }]
})

# Create role with collection pattern matching
db.createRole({
  role: "logReader",
  privileges: [
    {
      resource: { 
        db: "logs", 
        collection: "log_*"  # Pattern matching
      },
      actions: ["find", "count"]
    }
  ],
  roles: []
})

======== Role Inheritance ========
# Create role with inherited privileges
db.createRole({
  role: "appAdmin",
  privileges: [
    {
      resource: { db: "myapp", collection: "" },
      actions: ["createIndex", "dropIndex", "collStats"]
    }
  ],
  roles: [
    { role: "readWrite", db: "myapp" },
    { role: "dbAdmin", db: "myapp" }
  ]
})

# Grant role to user
db.createUser({
  user: "app_admin",
  pwd: "secure_password",
  roles: ["appAdmin"]
})

======== Privilege Management ========
# Grant additional privileges
db.grantRolesToUser("app_user", ["readWrite"])

# Revoke roles
db.revokeRolesFromUser("app_user", ["readWrite"])

# Update user roles
db.updateUser("app_user", { roles: ["read"] })

# Show user privileges
db.getUser("app_user")
db.runCommand({ usersInfo: "app_user", showPrivileges: true })

# Role management
db.grantRolesToRole("appAdmin", ["clusterMonitor"])
db.revokeRolesFromRole("appAdmin", ["clusterMonitor"])

======== Advanced Role Patterns ========
# Time-based access control
db.createRole({
  role: "businessHoursAccess",
  privileges: [
    {
      resource: { db: "myapp", collection: "" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: [],
  authenticationRestrictions: [{
    clientSource: ["192.168.1.0/24", "10.0.0.0/8"],
    serverAddress: ["mongodb1.example.com"]
  }]
})

# IP-based access control
db.createRole({
  role: "internalAccess",
  privileges: [
    {
      resource: { db: "admin", collection: "" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: [],
  authenticationRestrictions: [{
    clientSource: ["10.0.0.0/8"]
  }]
})`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Query Optimization',
          description: 'Optimize query performance',
          usage: 'Explain plans, indexing strategies',
          example: `======== Query Analysis ========
# Basic explain
db.users.find({ email: "test@example.com" }).explain()

# Execution statistics
db.users.find({ status: "active", age: { \$gt: 25 } }).explain("executionStats")

# All execution plans
db.users.find({ category: "electronics", price: { \$gt: 100 } }).explain("allPlansExecution")

# Query execution metrics
db.users.find({ name: "John" }).explain("executionStats").executionStats

======== Index Usage Analysis ========
# Check if query uses index
db.users.find({ email: "test@example.com" }).hint({ email: 1 }).explain()

# Force index usage
db.users.find({ status: "active" }).hint({ status: 1, age: 1 })

# Analyze index selectivity
db.users.aggregate([
  { \$group: { _id: "\$status", count: { \$sum: 1 } } },
  { \$sort: { count: -1 } }
])

# Check covered query
db.users.find({ status: "active" }, { _id: 0, name: 1, email: 1 }).hint({ status: 1, name: 1, email: 1 })

======== Query Performance Patterns ========
# Efficient pagination
db.posts.find().sort({ createdAt: -1 }).skip(20).limit(10)

# Range-based pagination (more efficient)
db.posts.find({ createdAt: { \$lt: lastSeenDate } }).sort({ createdAt: -1 }).limit(10)

# Projection optimization
db.users.find({}, { name: 1, email: 1, _id: 0 })  # Only return needed fields

# Regex optimization
db.users.find({ name: /^John/i })  # Use anchored regex when possible

# Array query optimization
db.products.find({ tags: "mongodb" })  # Create multikey index on tags

# Geospatial query optimization
db.places.find({ 
  location: { 
    \$near: { 
      \$geometry: { type: "Point", coordinates: [-73.987, 40.748] },
      \$maxDistance: 1000 
    } 
  }
})

======== Aggregation Optimization ========
# Pipeline optimization
db.orders.aggregate([
  { \$match: { status: "completed" } },  # Filter early
  { \$lookup: { from: "users", localField: "userId", foreignField: "_id", as: "user" } },
  { \$unwind: "\$user" },
  { \$project: { userName: "\$user.name", amount: "\$amount" } },
  { \$sort: { amount: -1 } },
  { \$limit: 100 }
])

# Use \$match early in pipeline
db.events.aggregate([
  { \$match: { timestamp: { \$gte: ISODate("2023-01-01") } } },
  { \$group: { _id: "\$type", count: { \$sum: 1 } } }
])

# Avoid \$unwind for large arrays
db.orders.aggregate([
  { \$project: { userId: 1, itemCount: { \$size: "\$items" } } },
  { \$match: { itemCount: { \$gt: 5 } } }
])

# Use indexes for aggregation
db.orders.createIndex({ status: 1, userId: 1 })
db.orders.aggregate([
  { \$match: { status: "completed" } },
  { \$group: { _id: "\$userId", total: { \$sum: "\$amount" } } }
])`,
        },
        {
          command: 'Memory and Storage Optimization',
          description: 'Optimize memory usage and storage efficiency',
          usage: 'WiredTiger tuning, compression, memory management',
          example: `======== WiredTiger Configuration ========
# Cache configuration in mongod.conf
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  wiredTiger:
    engineConfig:
      cacheSizeGB: 4                    # 50% of RAM
      journalCompressor: snappy
      directoryForIndexes: false
      collectionConfig:
        blockCompressor: snappy
      indexConfig:
        prefixCompression: true
        blockCompressor: snappy

# Collection-specific compression
db.createCollection("logs", {
  storageEngine: {
    wiredTiger: {
      configString: "block_compressor=zstd"
    }
  }
})

# Index compression
db.users.createIndex(
  { email: 1 },
  { 
    storageEngine: { 
      wiredTiger: { 
        configString: "block_compressor=zstd" 
      } 
    } 
  }
)

======== Memory Management ========
# Monitor memory usage
db.serverStatus().wiredTiger.cache
db.serverStatus().mem

# Check page faults
db.serverStatus().wiredTiger.cache["pages read into cache"]

# Monitor connection memory
db.serverStatus().connections

# Optimize connection pooling
# Use connection pools in application
mongo --maxPoolSize 100 --minPoolSize 10

======== Storage Optimization ========
# Document size optimization
db.users.stats()
db.users.dataSize()  # Document size
db.users.storageSize()  # Storage size

# Compact collection
db.runCommand({ compact: "users" })

# Validate and repair
db.users.validate()
db.repairDatabase()

# TTL index for data lifecycle
db.sessions.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 })

# Capped collections for log data
db.createCollection("events", {
  capped: true,
  size: 100000000,  # 100MB
  max: 1000000     # Max documents
})

======== Compression Strategies ========
# Field-level compression
db.products.insertOne({
  name: "Laptop",
  description: "High-performance laptop with advanced features",
  specs: {
    cpu: "Intel i7-12700H",
    ram: "16GB DDR5",
    storage: "1TB NVMe SSD"
  }
})

# Use shorter field names
db.products.insertOne({
  n: "Laptop",           # name
  d: "High-performance", # description
  s: {                   # specs
    c: "Intel i7-12700H", # cpu
    r: "16GB DDR5",       # ram
    st: "1TB NVMe SSD"    # storage
  }
})

# Use appropriate data types
# Use numbers instead of strings for numeric data
# Use dates instead of strings for timestamps
# Use boolean instead of strings for flags

======== Monitoring Performance ========
# Real-time performance monitoring
db.runCommand({ serverStatus: 1 })

# Operation counters
db.runCommand({ top: 1 })

# Slow query monitoring
db.setProfilingLevel(2, { slowms: 100 })
db.system.profile.find().sort({ ts: -1 }).limit(5)

# Collection metrics
db.runCommand({ collStats: "users" })

# Index usage statistics
db.runCommand({ aggregate: "users", pipeline: [{ \$indexStats: {} }] })`,
        },
      ],
    },
    {
      title: 'MongoDB Best Practices',
      commands: [
        {
          command: 'Schema Design Best Practices',
          description: 'Optimal database design patterns',
          usage: 'Embedding vs referencing, data modeling',
          example: `======== Embedding vs Referencing ========
# Embedding (one-to-few relationships)
{
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  title: "Blog Post Title",
  content: "Post content...",
  author: {
    name: "John Doe",
    email: "john@example.com"
  },
  comments: [
    {
      author: "Jane Smith",
      text: "Great post!",
      timestamp: new Date()
    }
  ]
}

# Referencing (one-to-many relationships)
# Users collection
{
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  name: "John Doe",
  email: "john@example.com"
}

# Posts collection
{
  _id: ObjectId("64a1b2c3d4e5f6789012346"),
  title: "Blog Post Title",
  content: "Post content...",
  authorId: ObjectId("64a1b2c3d4e5f6789012345")
}

======== Data Modeling Patterns ========
# Attribute pattern (flexible attributes)
{
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  name: "Product",
  attributes: [
    { k: "color", v: "red" },
    { k: "size", v: "large" },
    { k: "weight", v: "1.5kg" }
  ]
}

# Bucket pattern (time series data)
{
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  sensorId: "sensor123",
  year: 2023,
  month: 12,
  day: 25,
  hourlyData: [
    { hour: 0, value: 23.5, count: 60 },
    { hour: 1, value: 23.2, count: 60 },
    { hour: 2, value: 22.8, count: 60 }
  ]
}

# Subset pattern (frequently accessed data)
{
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  name: "Product",
  price: 99.99,
  description: "Full description...",
  lastViewed: new Date(),
  viewCount: 150
}

======== Schema Validation Guidelines ========
# Use JSON Schema for validation
db.createCollection("users", {
  validator: {
    \$jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string", minLength: 1 },
        email: { bsonType: "string", pattern: "^[^@]+@[^@]+\\.[^@]+\$" },
        age: { bsonType: "int", minimum: 0, maximum: 150 }
      }
    }
  }
})

# Use appropriate data types
{
  _id: ObjectId("64a1b2c3d4e5f6789012345"),
  name: "John Doe",                    # String
  age: 30,                            # Integer
  balance: NumberDecimal("1234.56"),  # Decimal for financial
  isActive: true,                     # Boolean
  createdAt: new Date(),              # Date
  tags: ["tag1", "tag2"],             # Array
  metadata: {                         # Object
    source: "web",
    version: 1
  }
}

======== Indexing Strategy ========
# Index for query patterns
db.users.createIndex({ status: 1, age: 1 })  # Compound index
db.users.createIndex({ email: 1 }, { unique: true })  # Unique index
db.users.createIndex({ "location.coordinates": "2dsphere" })  # Geospatial

# Covered queries
db.users.createIndex({ status: 1, name: 1, email: 1 })
db.users.find({ status: "active" }, { name: 1, email: 1, _id: 0 })

# Partial indexes
db.users.createIndex(
  { email: 1 },
  { partialFilterExpression: { status: "active" } }
)

# TTL indexes
db.sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize MongoDB performance',
          usage: 'Query optimization, connection management',
          example: `======== Query Optimization ========
# Use projections to limit returned data
db.users.find({}, { name: 1, email: 1, _id: 0 })

# Use appropriate operators
db.users.find({ age: { \$gte: 18 } })  # Better than \$where

# Use indexed fields in filters
db.users.find({ status: "active", age: { \$gt: 25 } })

# Pagination patterns
# Bad for large collections
db.users.find().skip(10000).limit(10)

# Better: range-based pagination
db.users.find({ _id: { \$gt: lastId } }).limit(10)

# Efficient aggregation pipelines
db.orders.aggregate([
  { \$match: { status: "completed" } },  # Filter early
  { \$group: { _id: "\$userId", total: { \$sum: "\$amount" } } },
  { \$sort: { total: -1 } },
  { \$limit: 10 }
])

======== Connection Management ========
# Use connection pools
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 2,
  maxIdleTimeMS: 30000
});

# Use appropriate read preferences
# Primary for writes
# Secondary for reads
# Nearest for lowest latency

# Write concerns
db.collection.insertOne(doc, { writeConcern: { w: "majority" } })

# Read concerns
db.collection.find().readConcern("majority")

======== Memory Optimization ========
# Monitor memory usage
db.serverStatus().wiredTiger.cache

# Configure appropriate cache size
storage:
  wiredTiger:
    engineConfig:
      cacheSizeGB: 4

# Use compression
db.createCollection("logs", {
  storageEngine: {
    wiredTiger: {
      configString: "block_compressor=zstd"
    }
  }
})

# Use TTL for data lifecycle
db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 2592000 })

# Use capped collections for rolling data
db.createCollection("events", {
  capped: true,
  size: 1000000000,  # 1GB
  max: 1000000
})

======== Monitoring and Maintenance ========
# Enable profiling
db.setProfilingLevel(2, { slowms: 100 })

# Monitor slow queries
db.system.profile.find().sort({ ts: -1 }).limit(5)

# Regular maintenance
# Compact collections
db.runCommand({ compact: "users" })

# Validate data
db.users.validate()

# Update statistics
db.runCommand({ collStats: "users" })

# Monitor indexes
db.runCommand({ aggregate: "users", pipeline: [{ \$indexStats: {} }] })

# Backup strategies
# Regular backups with mongodump
# Point-in-time recovery with oplog
# Cloud backup services

======== Security Best Practices ========
# Enable authentication
security:
  authorization: enabled

# Use SSL/TLS
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem

# Network isolation
net:
  bindIp: 127.0.0.1,10.0.0.1

# Role-based access control
db.createUser({
  user: "app_user",
  pwd: "secure_password",
  roles: [{ role: "readWrite", db: "myapp" }]
})

# Enable auditing
auditLog:
  destination: file
  format: JSON
  path: /var/log/mongodb/audit.json
  filter: '{ atype: "authenticate" }'`,
        },
      ],
    },
  ],
};
