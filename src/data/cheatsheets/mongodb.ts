import { Database } from 'lucide-react';

export const mongodbCheatsheet = {
  id: 'mongodb',
  name: 'MongoDB',
  description: 'NoSQL database commands and queries',
  icon: Database,
  colorTheme: 'emerald' as const,
  sections: [
    {
      title: 'Database Operations',
      commands: [
        {
          command: 'show dbs',
          description: 'List all databases',
          usage: 'show dbs',
          example: 'show dbs\n# Lists all databases with sizes',
        },
        {
          command: 'use',
          description: 'Switch to database',
          usage: 'use database_name',
          example: 'use myapp\n# Creates and switches to myapp database',
        },
        {
          command: 'db.dropDatabase()',
          description: 'Drop current database',
          usage: 'db.dropDatabase()',
          example: 'use testdb\ndb.dropDatabase()\n# Deletes testdb',
        },
        {
          command: 'show collections',
          description: 'List collections',
          usage: 'show collections',
          example: 'show collections\n# Lists all collections in current database',
        },
      ],
    },
    {
      title: 'CRUD Operations - Insert',
      commands: [
        {
          command: 'insertOne()',
          description: 'Insert single document',
          usage: 'db.collection.insertOne(document)',
          example: 'db.users.insertOne({\n  name: "John",\n  age: 30,\n  email: "john@example.com"\n})',
        },
        {
          command: 'insertMany()',
          description: 'Insert multiple documents',
          usage: 'db.collection.insertMany([documents])',
          example: 'db.users.insertMany([\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 35 }\n])',
        },
      ],
    },
    {
      title: 'CRUD Operations - Find',
      commands: [
        {
          command: 'find()',
          description: 'Query documents',
          usage: 'db.collection.find(query)',
          example: 'db.users.find({ age: { $gt: 25 } })\n# Find users older than 25',
        },
        {
          command: 'findOne()',
          description: 'Find single document',
          usage: 'db.collection.findOne(query)',
          example: 'db.users.findOne({ email: "john@example.com" })',
        },
        {
          command: 'find().limit()',
          description: 'Limit results',
          usage: 'db.collection.find().limit(n)',
          example: 'db.users.find().limit(10)\n# Get first 10 users',
        },
        {
          command: 'find().sort()',
          description: 'Sort results',
          usage: 'db.collection.find().sort({ field: 1/-1 })',
          example: 'db.users.find().sort({ age: -1 })\n# Sort by age descending',
        },
        {
          command: 'find().skip()',
          description: 'Skip documents',
          usage: 'db.collection.find().skip(n)',
          example: 'db.users.find().skip(20).limit(10)\n# Pagination: page 3',
        },
        {
          command: 'find() projection',
          description: 'Select specific fields',
          usage: 'db.collection.find({}, { field: 1 })',
          example: 'db.users.find({}, { name: 1, email: 1, _id: 0 })\n# Only name and email',
        },
      ],
    },
    {
      title: 'CRUD Operations - Update',
      commands: [
        {
          command: 'updateOne()',
          description: 'Update single document',
          usage: 'db.collection.updateOne(filter, update)',
          example: 'db.users.updateOne(\n  { name: "John" },\n  { $set: { age: 31 } }\n)',
        },
        {
          command: 'updateMany()',
          description: 'Update multiple documents',
          usage: 'db.collection.updateMany(filter, update)',
          example: 'db.users.updateMany(\n  { age: { $lt: 18 } },\n  { $set: { status: "minor" } }\n)',
        },
        {
          command: 'replaceOne()',
          description: 'Replace entire document',
          usage: 'db.collection.replaceOne(filter, doc)',
          example: 'db.users.replaceOne(\n  { _id: ObjectId("...") },\n  { name: "Jane", age: 28 }\n)',
        },
        {
          command: '$inc',
          description: 'Increment field value',
          usage: '{ $inc: { field: value } }',
          example: 'db.posts.updateOne(\n  { _id: 1 },\n  { $inc: { views: 1 } }\n)\n# Increment views by 1',
        },
        {
          command: '$push',
          description: 'Add to array',
          usage: '{ $push: { field: value } }',
          example: 'db.users.updateOne(\n  { _id: 1 },\n  { $push: { tags: "mongodb" } }\n)',
        },
        {
          command: '$pull',
          description: 'Remove from array',
          usage: '{ $pull: { field: value } }',
          example: 'db.users.updateOne(\n  { _id: 1 },\n  { $pull: { tags: "old" } }\n)',
        },
      ],
    },
    {
      title: 'CRUD Operations - Delete',
      commands: [
        {
          command: 'deleteOne()',
          description: 'Delete single document',
          usage: 'db.collection.deleteOne(filter)',
          example: 'db.users.deleteOne({ email: "test@example.com" })',
        },
        {
          command: 'deleteMany()',
          description: 'Delete multiple documents',
          usage: 'db.collection.deleteMany(filter)',
          example: 'db.users.deleteMany({ status: "inactive" })\n# Delete all inactive users',
        },
      ],
    },
    {
      title: 'Query Operators',
      commands: [
        {
          command: '$eq, $ne',
          description: 'Equal, Not equal',
          usage: '{ field: { $eq: value } }',
          example: 'db.users.find({ age: { $eq: 25 } })\ndb.users.find({ status: { $ne: "banned" } })',
        },
        {
          command: '$gt, $gte, $lt, $lte',
          description: 'Greater/Less than',
          usage: '{ field: { $gt: value } }',
          example: 'db.users.find({ age: { $gte: 18, $lt: 65 } })\n# Age between 18-64',
        },
        {
          command: '$in, $nin',
          description: 'In array, Not in array',
          usage: '{ field: { $in: [values] } }',
          example: 'db.users.find({ role: { $in: ["admin", "moderator"] } })',
        },
        {
          command: '$and, $or',
          description: 'Logical operators',
          usage: '{ $and: [conditions] }',
          example: 'db.users.find({\n  $or: [\n    { age: { $lt: 18 } },\n    { age: { $gt: 65 } }\n  ]\n})',
        },
        {
          command: '$exists',
          description: 'Field exists',
          usage: '{ field: { $exists: true } }',
          example: 'db.users.find({ email: { $exists: true } })',
        },
        {
          command: '$regex',
          description: 'Pattern matching',
          usage: '{ field: { $regex: pattern } }',
          example: 'db.users.find({ name: { $regex: /^john/i } })\n# Names starting with john',
        },
      ],
    },
    {
      title: 'Aggregation Pipeline',
      commands: [
        {
          command: 'aggregate()',
          description: 'Aggregation framework',
          usage: 'db.collection.aggregate([stages])',
          example: 'db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } }\n])',
        },
        {
          command: '$match',
          description: 'Filter documents',
          usage: '{ $match: { condition } }',
          example: '{ $match: { age: { $gte: 18 } } }',
        },
        {
          command: '$group',
          description: 'Group by field',
          usage: '{ $group: { _id: "$field" } }',
          example: '{ $group: {\n  _id: "$category",\n  count: { $sum: 1 },\n  avgPrice: { $avg: "$price" }\n}}',
        },
        {
          command: '$project',
          description: 'Select fields',
          usage: '{ $project: { field: 1 } }',
          example: '{ $project: { name: 1, email: 1, _id: 0 } }',
        },
        {
          command: '$sort',
          description: 'Sort results',
          usage: '{ $sort: { field: 1/-1 } }',
          example: '{ $sort: { createdAt: -1 } }\n# Sort by date descending',
        },
        {
          command: '$limit, $skip',
          description: 'Pagination',
          usage: '{ $limit: n }',
          example: '[\n  { $skip: 20 },\n  { $limit: 10 }\n]\n# Page 3',
        },
        {
          command: '$lookup',
          description: 'Join collections',
          usage: '{ $lookup: { from, localField, foreignField, as } }',
          example: '{ $lookup: {\n  from: "orders",\n  localField: "_id",\n  foreignField: "userId",\n  as: "userOrders"\n}}',
        },
      ],
    },
    {
      title: 'Indexes',
      commands: [
        {
          command: 'createIndex()',
          description: 'Create index',
          usage: 'db.collection.createIndex({ field: 1 })',
          example: 'db.users.createIndex({ email: 1 }, { unique: true })\n# Unique email index',
        },
        {
          command: 'getIndexes()',
          description: 'List indexes',
          usage: 'db.collection.getIndexes()',
          example: 'db.users.getIndexes()\n# Show all indexes',
        },
        {
          command: 'dropIndex()',
          description: 'Drop index',
          usage: 'db.collection.dropIndex(name)',
          example: 'db.users.dropIndex("email_1")',
        },
        {
          command: 'Compound index',
          description: 'Multi-field index',
          usage: 'db.collection.createIndex({ field1: 1, field2: -1 })',
          example: 'db.posts.createIndex({ userId: 1, createdAt: -1 })',
        },
        {
          command: 'Text index',
          description: 'Full-text search',
          usage: 'db.collection.createIndex({ field: "text" })',
          example: 'db.articles.createIndex({ title: "text", content: "text" })\ndb.articles.find({ $text: { $search: "mongodb" } })',
        },
      ],
    },
    {
      title: 'Collection Management',
      commands: [
        {
          command: 'createCollection()',
          description: 'Create collection',
          usage: 'db.createCollection(name, options)',
          example: 'db.createCollection("logs", {\n  capped: true,\n  size: 5242880,\n  max: 5000\n})',
        },
        {
          command: 'drop()',
          description: 'Drop collection',
          usage: 'db.collection.drop()',
          example: 'db.temp.drop()\n# Delete temp collection',
        },
        {
          command: 'renameCollection()',
          description: 'Rename collection',
          usage: 'db.collection.renameCollection(newName)',
          example: 'db.oldname.renameCollection("newname")',
        },
        {
          command: 'stats()',
          description: 'Collection statistics',
          usage: 'db.collection.stats()',
          example: 'db.users.stats()\n# Size, count, indexes',
        },
      ],
    },
    {
      title: 'Useful Commands',
      commands: [
        {
          command: 'count()',
          description: 'Count documents',
          usage: 'db.collection.countDocuments(filter)',
          example: 'db.users.countDocuments({ status: "active" })',
        },
        {
          command: 'distinct()',
          description: 'Get unique values',
          usage: 'db.collection.distinct(field)',
          example: 'db.users.distinct("country")\n# All unique countries',
        },
        {
          command: 'explain()',
          description: 'Query execution plan',
          usage: 'db.collection.find().explain()',
          example: 'db.users.find({ age: 25 }).explain("executionStats")',
        },
        {
          command: 'bulkWrite()',
          description: 'Bulk operations',
          usage: 'db.collection.bulkWrite(operations)',
          example: 'db.users.bulkWrite([\n  { insertOne: { document: { name: "Alice" } } },\n  { updateOne: { filter: { _id: 1 }, update: { $set: { age: 30 } } } }\n])',
        },
      ],
    },
    {
      title: 'MongoDB Shell',
      commands: [
        {
          command: 'mongosh',
          description: 'Start MongoDB shell',
          usage: 'mongosh [options]',
          example: 'mongosh\nmongosh "mongodb://localhost:27017"\nmongosh --host localhost --port 27017',
        },
        {
          command: 'mongodump',
          description: 'Backup database',
          usage: 'mongodump --db database',
          example: 'mongodump --db myapp --out /backup/\n# Backup myapp database',
        },
        {
          command: 'mongorestore',
          description: 'Restore database',
          usage: 'mongorestore --db database path',
          example: 'mongorestore --db myapp /backup/myapp/',
        },
        {
          command: 'mongoexport',
          description: 'Export collection to JSON',
          usage: 'mongoexport --collection name --out file.json',
          example: 'mongoexport --db myapp --collection users --out users.json',
        },
        {
          command: 'mongoimport',
          description: 'Import JSON to collection',
          usage: 'mongoimport --collection name --file file.json',
          example: 'mongoimport --db myapp --collection users --file users.json',
        },
      ],
    },
  ],
};
