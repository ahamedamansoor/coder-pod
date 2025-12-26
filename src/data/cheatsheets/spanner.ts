import { Database } from 'lucide-react';

export const spannerCheatsheet = {
  id: 'spanner',
  name: 'Google Spanner',
  description: 'Master Google Cloud Spanner from basics to expert operations (2024 Edition)',
  icon: Database,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Google Spanner',
      commands: [
        {
          command: 'Google Spanner Overview',
          description: 'Introduction to Google Spanner concepts',
          usage: 'Understanding Spanner fundamentals',
          example: `Google Spanner Overview:
- Globally distributed relational database service
- Horizontal scalability with automatic sharding
- Strong consistency across all replicas (external consistency)
- Full ACID transactions globally
- Standard SQL with ANSI 2011 features
- Online schema changes without downtime
- 99.999% availability SLA
- Integrated with Google Cloud ecosystem`,
        },
        {
          command: 'Key Concepts',
          description: 'Core Spanner concepts',
          usage: 'Understanding Spanner terminology',
          example: `Core Concepts:
- Spanner Instances: Compute and storage resources
- Spanner Databases: Schema and data containers
- Spanner Nodes: Compute units for processing
- Splits: Data partitions for distribution
- Replicas: Data copies across regions/zones
- Change Streams: CDC and data streaming
- Staleness: Data consistency controls
- Sessions: Database connection contexts`,
        },
        {
          command: 'Architecture Benefits',
          description: 'Advantages of Spanner architecture',
          usage: 'Why choose Google Spanner',
          example: `Architecture Benefits:
- Global scale with local latency
- Zero downtime for maintenance
- Automatic failover and recovery
- Consistent backups globally
- Strong consistency without trade-offs
- Automatic sharding and load balancing
- Multi-region active-active replication
- Integrated monitoring and logging`,
        },
        {
          command: 'Install Google Cloud SDK',
          description: 'Install and configure gcloud CLI',
          usage: 'Google Cloud SDK setup',
          example: `# Install Google Cloud SDK
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Initialize gcloud
gcloud init

# Authenticate
gcloud auth login

# Set project
gcloud config set project your-project-id

# Install Spanner component
gcloud components install spanner`,
        },
        {
          command: 'Create Spanner Instance',
          description: 'Create a Spanner instance',
          usage: 'gcloud spanner instances create',
          example: `# Create regional instance
gcloud spanner instances create my-instance \\
  --config=regional-us-central1 \\
  --description="My Spanner Instance" \\
  --nodes=1

# Create multi-regional instance
gcloud spanner instances create my-global-instance \\
  --config=nam6 \\
  --description="Global Spanner Instance" \\
  --nodes=3`,
        },
        {
          command: 'List Spanner Instances',
          description: 'List all instances',
          usage: 'gcloud spanner instances list',
          example: `# List all instances
gcloud spanner instances list

# List with details
gcloud spanner instances list --format="table(name,config,description,nodeCount)"

# Filter instances
gcloud spanner instances list --filter="description:production"`,
        },
        {
          command: 'Describe Spanner Instance',
          description: 'Get instance details',
          usage: 'gcloud spanner instances describe',
          example: `# Describe instance
gcloud spanner instances describe my-instance

# Get instance configuration
gcloud spanner instances describe my-instance --format="value(config)"`,
        },
        {
          command: 'Create Spanner Database',
          description: 'Create a database',
          usage: 'gcloud spanner databases create',
          example: `# Create empty database
gcloud spanner databases create my-database \\
  --instance=my-instance

# Create database with DDL
gcloud spanner databases create my-database \\
  --instance=my-instance \\
  --ddl-file=schema.sql`,
        },
        {
          command: 'List Spanner Databases',
          description: 'List all databases',
          usage: 'gcloud spanner databases list',
          example: `# List databases in instance
gcloud spanner databases list --instance=my-instance

# List with details
gcloud spanner databases list --instance=my-instance --format="table(name,createTime)"`,
        },
        {
          command: 'Basic Table Creation',
          description: 'Create a basic table',
          usage: 'CREATE TABLE statement',
          example: `CREATE TABLE Users (
  UserId STRING(36) NOT NULL,
  Email STRING(255) NOT NULL,
  FirstName STRING(50),
  LastName STRING(50),
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
  UpdatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (UserId);`,
        },
        {
          command: 'Table with Composite Key',
          description: 'Create table with composite primary key',
          usage: 'Composite primary key',
          example: `CREATE TABLE UserPosts (
  UserId STRING(36) NOT NULL,
  PostId STRING(36) NOT NULL,
  Title STRING(500),
  Content STRING(MAX),
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (UserId, PostId);`,
        },
        {
          command: 'Table with Interleaving',
          description: 'Create interleaved tables',
          usage: 'INTERLEAVE IN PARENT',
          example: `CREATE TABLE UserPosts (
  UserId STRING(36) NOT NULL,
  PostId STRING(36) NOT NULL,
  Title STRING(500),
  Content STRING(MAX),
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
  PRIMARY KEY (UserId, PostId),
) INTERLEAVE IN PARENT Users ON DELETE CASCADE;

CREATE TABLE PostComments (
  UserId STRING(36) NOT NULL,
  PostId STRING(36) NOT NULL,
  CommentId STRING(36) NOT NULL,
  Content STRING(MAX),
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
  PRIMARY KEY (UserId, PostId, CommentId),
) INTERLEAVE IN PARENT UserPosts ON DELETE CASCADE;`,
        },
        {
          command: 'Create Index',
          description: 'Create secondary indexes',
          usage: 'CREATE INDEX statement',
          example: `-- Simple index
CREATE INDEX UsersByEmail ON Users (Email);

-- Composite index
CREATE INDEX UserPostsByCreated ON UserPosts (UserId, CreatedAt DESC);

-- Storing index
CREATE INDEX UserPostsByTitle ON UserPosts (Title) STORING (Content, CreatedAt);`,
        },
        {
          command: 'Insert Data',
          description: 'Insert records into tables',
          usage: 'INSERT INTO statement',
          example: `-- Single insert
INSERT INTO Users (UserId, Email, FirstName, LastName, CreatedAt, UpdatedAt)
VALUES ('user-123', 'john@example.com', 'John', 'Doe', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());

-- Multiple inserts
INSERT INTO Users (UserId, Email, FirstName, LastName, CreatedAt, UpdatedAt)
VALUES 
  ('user-456', 'jane@example.com', 'Jane', 'Smith', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP()),
  ('user-789', 'bob@example.com', 'Bob', 'Johnson', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());`,
        },
        {
          command: 'Update Data',
          description: 'Update existing records',
          usage: 'UPDATE statement',
          example: `-- Simple update
UPDATE Users 
SET FirstName = 'Johnathan', UpdatedAt = PENDING_COMMIT_TIMESTAMP()
WHERE UserId = 'user-123';

-- Update with condition
UPDATE Users 
SET Email = 'newemail@example.com', UpdatedAt = PENDING_COMMIT_TIMESTAMP()
WHERE UserId = 'user-123' AND Email = 'oldemail@example.com';`,
        },
        {
          command: 'Delete Data',
          description: 'Delete records from tables',
          usage: 'DELETE statement',
          example: `-- Delete specific record
DELETE FROM Users WHERE UserId = 'user-123';

-- Delete with condition
DELETE FROM Users 
WHERE CreatedAt < TIMESTAMP('2023-01-01T00:00:00Z');

-- Delete cascade (for interleaved tables)
DELETE FROM Users WHERE UserId = 'user-123';`,
        },
        {
          command: 'Select Data',
          description: 'Query data from tables',
          usage: 'SELECT statement',
          example: `-- Select all columns
SELECT * FROM Users;

-- Select specific columns
SELECT UserId, Email, FirstName FROM Users;

-- Select with WHERE clause
SELECT * FROM Users WHERE Email = 'john@example.com';

-- Select with ORDER BY
SELECT * FROM Users ORDER BY CreatedAt DESC;

-- Select with LIMIT
SELECT * FROM Users ORDER BY CreatedAt DESC LIMIT 10;`,
        },
        {
          command: 'Drop Table',
          description: 'Delete a table',
          usage: 'DROP TABLE statement',
          example: `DROP TABLE PostComments;
DROP TABLE UserPosts;
DROP TABLE Users;`,
        },
        {
          command: 'Drop Database',
          description: 'Delete a database',
          usage: 'gcloud spanner databases delete',
          example: `gcloud spanner databases delete my-database --instance=my-instance`,
        },
        {
          command: 'Drop Instance',
          description: 'Delete an instance',
          usage: 'gcloud spanner instances delete',
          example: `gcloud spanner instances delete my-instance`,
        },
      ],
    },
    {
      title: 'Spanner Data Types',
      commands: [
        {
          command: 'String Data Types',
          description: 'String and text data types',
          usage: 'STRING type usage',
          example: `-- String types
STRING(36)     -- Fixed length string
STRING(255)    -- Variable length string
STRING(MAX)    -- Maximum length string (1MB)
STRING         -- Default length string

-- Example usage
CREATE TABLE Documents (
  DocId STRING(36) NOT NULL,
  Title STRING(500),
  Content STRING(MAX),
  Tags STRING(100) ARRAY,
) PRIMARY KEY (DocId);`,
        },
        {
          command: 'Numeric Data Types',
          description: 'Numeric data types',
          usage: 'NUMERIC and INT types',
          example: `-- Numeric types
INT64          -- 64-bit integer
FLOAT64        -- 64-bit floating point
NUMERIC        -- Arbitrary precision decimal

-- Example usage
CREATE TABLE Products (
  ProductId STRING(36) NOT NULL,
  Price NUMERIC(10,2),
  Quantity INT64,
  Rating FLOAT64,
) PRIMARY KEY (ProductId);`,
        },
        {
          command: 'Date and Time Types',
          description: 'Temporal data types',
          usage: 'DATE, TIME, TIMESTAMP',
          example: `-- Date and time types
DATE           -- Calendar date
TIME           -- Time of day
TIMESTAMP      -- Absolute time

-- Example usage
CREATE TABLE Events (
  EventId STRING(36) NOT NULL,
  EventDate DATE,
  EventTime TIME,
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (EventId);`,
        },
        {
          command: 'Boolean and Bytes Types',
          description: 'BOOL and BYTES types',
          usage: 'Boolean and binary data',
          example: `-- Boolean and bytes types
BOOL           -- True/false values
BYTES(MAX)     -- Binary data (up to 10MB)

-- Example usage
CREATE TABLE Files (
  FileId STRING(36) NOT NULL,
  IsPublic BOOL,
  Content BYTES(MAX),
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (FileId);`,
        },
        {
          command: 'Array Types',
          description: 'ARRAY data types',
          usage: 'ARRAY usage',
          example: `-- Array types
ARRAY<STRING(50)>     -- Array of strings
ARRAY<INT64>           -- Array of integers
ARRAY<NUMERIC>         -- Array of decimals

-- Example usage
CREATE TABLE Products (
  ProductId STRING(36) NOT NULL,
  Categories ARRAY<STRING(50)>,
  Tags ARRAY<STRING(20)>,
  Prices ARRAY<NUMERIC(10,2)>,
) PRIMARY KEY (ProductId);`,
        },
        {
          command: 'JSON Data Type',
          description: 'JSON data type',
          usage: 'JSON type usage',
          example: `-- JSON type
JSON               -- JSON data

-- Example usage
CREATE TABLE UserData (
  UserId STRING(36) NOT NULL,
  Profile JSON,
  Preferences JSON,
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (UserId);

-- Insert JSON data
INSERT INTO UserData (UserId, Profile, Preferences, CreatedAt)
VALUES ('user-123', JSON '{"name": "John", "age": 30}', JSON '{"theme": "dark"}', PENDING_COMMIT_TIMESTAMP());`,
        },
        {
          command: 'Commit Timestamp Option',
          description: 'Use commit timestamps',
          usage: 'allow_commit_timestamp option',
          example: `-- Using commit timestamps
CREATE TABLE AuditLogs (
  LogId STRING(36) NOT NULL,
  Message STRING(MAX),
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
  UpdatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (LogId);

-- Insert with commit timestamp
INSERT INTO AuditLogs (LogId, Message, CreatedAt, UpdatedAt)
VALUES ('log-123', 'User login', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());`,
        },
      ],
    },
    {
      title: 'Spanner Query Operations',
      commands: [
        {
          command: 'Basic SELECT Queries',
          description: 'Fundamental SELECT operations',
          usage: 'Basic query patterns',
          example: `-- Select all columns
SELECT * FROM Users;

-- Select specific columns
SELECT UserId, Email, FirstName FROM Users;

-- Select with WHERE clause
SELECT * FROM Users WHERE Email = 'john@example.com';

-- Select with multiple conditions
SELECT * FROM Users WHERE CreatedAt >= TIMESTAMP('2024-01-01T00:00:00Z') AND IsActive = TRUE;`,
        },
        {
          command: 'ORDER BY and LIMIT',
          description: 'Sort and limit results',
          usage: 'ORDER BY and LIMIT clauses',
          example: `-- Order by single column
SELECT * FROM Users ORDER BY CreatedAt DESC;

-- Order by multiple columns
SELECT * FROM Users ORDER BY LastName ASC, FirstName ASC;

-- Limit results
SELECT * FROM Users ORDER BY CreatedAt DESC LIMIT 10;

-- Limit with offset
SELECT * FROM Users ORDER BY CreatedAt DESC LIMIT 10 OFFSET 20;`,
        },
        {
          command: 'Aggregate Functions',
          description: 'Use aggregate functions',
          usage: 'COUNT, SUM, AVG, MAX, MIN',
          example: `-- Count rows
SELECT COUNT(*) FROM Users;
SELECT COUNT(UserId) FROM Users;

-- Sum and average
SELECT SUM(Quantity), AVG(Price) FROM OrderItems;

-- Min and max
SELECT MIN(CreatedAt), MAX(CreatedAt) FROM Users;

-- Group by aggregation
SELECT Email, COUNT(*) FROM Users GROUP BY Email;`,
        },
        {
          command: 'JOIN Operations',
          description: 'Join multiple tables',
          usage: 'INNER JOIN, LEFT JOIN',
          example: `-- Inner join
SELECT u.FirstName, p.Title 
FROM Users u 
INNER JOIN UserPosts p ON u.UserId = p.UserId;

-- Left join
SELECT u.FirstName, p.Title 
FROM Users u 
LEFT JOIN UserPosts p ON u.UserId = p.UserId;

-- Join with aggregation
SELECT u.FirstName, COUNT(p.PostId) as PostCount
FROM Users u 
LEFT JOIN UserPosts p ON u.UserId = p.UserId
GROUP BY u.FirstName;`,
        },
        {
          command: 'Subqueries',
          description: 'Use subqueries in queries',
          usage: 'Subquery patterns',
          example: `-- Subquery in WHERE clause
SELECT * FROM Users 
WHERE UserId IN (SELECT UserId FROM UserPosts WHERE CreatedAt >= TIMESTAMP('2024-01-01T00:00:00Z'));

-- Subquery in SELECT clause
SELECT 
  FirstName,
  (SELECT COUNT(*) FROM UserPosts WHERE UserId = u.UserId) as PostCount
FROM Users u;

-- EXISTS subquery
SELECT * FROM Users u 
WHERE EXISTS (SELECT 1 FROM UserPosts p WHERE p.UserId = u.UserId);`,
        },
        {
          command: 'Window Functions',
          description: 'Use window functions',
          usage: 'OVER() clause',
          example: `-- Row number
SELECT 
  FirstName,
  ROW_NUMBER() OVER (ORDER BY CreatedAt DESC) as RowNum
FROM Users;

-- Running total
SELECT 
  OrderDate,
  Amount,
  SUM(Amount) OVER (ORDER BY OrderDate) as RunningTotal
FROM Orders;

-- Rank functions
SELECT 
  ProductId,
  Sales,
  RANK() OVER (ORDER BY Sales DESC) as SalesRank
FROM Products;`,
        },
        {
          command: 'CTE (Common Table Expressions)',
          description: 'Use CTEs for complex queries',
          usage: 'WITH clause',
          example: `-- Simple CTE
WITH ActiveUsers AS (
  SELECT UserId, Email FROM Users WHERE IsActive = TRUE
)
SELECT * FROM ActiveUsers WHERE Email LIKE '%@gmail.com';

-- Multiple CTEs
WITH UserStats AS (
  SELECT UserId, COUNT(*) as PostCount FROM UserPosts GROUP BY UserId
),
HighActivityUsers AS (
  SELECT UserId FROM UserStats WHERE PostCount > 10
)
SELECT u.FirstName, us.PostCount 
FROM Users u 
JOIN UserStats us ON u.UserId = us.UserId 
WHERE u.UserId IN (SELECT UserId FROM HighActivityUsers);`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Spanner Transactions',
      commands: [
        {
          command: 'Begin Transaction',
          description: 'Start a transaction',
          usage: 'BEGIN TRANSACTION',
          example: `-- Begin transaction
BEGIN;

-- Transaction operations
INSERT INTO Users (UserId, Email, FirstName, CreatedAt, UpdatedAt)
VALUES ('user-123', 'john@example.com', 'John', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());

INSERT INTO UserPosts (UserId, PostId, Title, CreatedAt)
VALUES ('user-123', 'post-123', 'First Post', PENDING_COMMIT_TIMESTAMP());

COMMIT;`,
        },
        {
          command: 'Commit Transaction',
          description: 'Commit transaction changes',
          usage: 'COMMIT statement',
          example: `-- Commit transaction
COMMIT;

-- Commit with retry logic (in application code)
-- Implement exponential backoff for retry
-- Handle abort errors appropriately`,
        },
        {
          command: 'Rollback Transaction',
          description: 'Rollback transaction changes',
          usage: 'ROLLBACK statement',
          example: `-- Rollback transaction
ROLLBACK;

-- Example with error handling
BEGIN;
INSERT INTO Users (UserId, Email, FirstName, CreatedAt, UpdatedAt)
VALUES ('user-123', 'john@example.com', 'John', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());

-- Some error occurred
ROLLBACK;`,
        },
        {
          command: 'Savepoints',
          description: 'Use savepoints in transactions',
          usage: 'SAVEPOINT and ROLLBACK TO SAVEPOINT',
          example: `-- Create savepoint
BEGIN;
INSERT INTO Users (UserId, Email, FirstName, CreatedAt, UpdatedAt)
VALUES ('user-123', 'john@example.com', 'John', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());

SAVEPOINT sp1;

INSERT INTO UserPosts (UserId, PostId, Title, CreatedAt)
VALUES ('user-123', 'post-123', 'First Post', PENDING_COMMIT_TIMESTAMP());

-- Rollback to savepoint
ROLLBACK TO SAVEPOINT sp1;

COMMIT;`,
        },
        {
          command: 'Read-Write Transaction',
          description: 'Read-write transaction pattern',
          usage: 'Transaction with reads and writes',
          example: `-- Read-write transaction
BEGIN;

-- Read current value
SELECT Balance FROM Accounts WHERE AccountId = 'acc-123';

-- Write new value
UPDATE Accounts 
SET Balance = Balance - 100, UpdatedAt = PENDING_COMMIT_TIMESTAMP()
WHERE AccountId = 'acc-123' AND Balance >= 100;

COMMIT;`,
        },
        {
          command: 'Read-Only Transaction',
          description: 'Read-only transaction with staleness',
          usage: 'READ ONLY transaction',
          example: `-- Read-only transaction
BEGIN READ ONLY;

-- Read with exact staleness
SELECT * FROM Users 
WHERE CreatedAt >= TIMESTAMP('2024-01-01T00:00:00Z')
OPTIONS (read_staleness='10_seconds');

-- Read with max staleness
SELECT * FROM Users 
OPTIONS (read_staleness='max_staleness');

COMMIT;`,
        },
        {
          command: 'Transaction Retry Logic',
          description: 'Handle transaction aborts',
          usage: 'Retry pattern implementation',
          example: `-- Application retry logic pattern
function executeWithRetry(operation, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return operation();
    } catch (error) {
      if (error.code === 'ABORTED' && i < maxRetries - 1) {
        // Exponential backoff
        await sleep(Math.pow(2, i) * 100);
        continue;
      }
      throw error;
    }
  }
}`,
        },
      ],
    },
    {
      title: 'Spanner Indexing Strategies',
      commands: [
        {
          command: 'Secondary Index Basics',
          description: 'Create and use secondary indexes',
          usage: 'CREATE INDEX statement',
          example: `-- Simple secondary index
CREATE INDEX UsersByEmail ON Users (Email);

-- Composite secondary index
CREATE INDEX UserPostsByUserDate ON UserPosts (UserId, CreatedAt DESC);

-- Storing index (includes additional columns)
CREATE INDEX UserPostsByTitle ON UserPosts (Title) STORING (Content, CreatedAt);

-- Unique index
CREATE UNIQUE INDEX UsersEmailUnique ON Users (Email);`,
        },
        {
          command: 'Query with Index',
          description: 'Use indexes in queries',
          usage: 'Index-aware queries',
          example: `-- Query using index
SELECT * FROM Users@{FORCE_INDEX=UsersByEmail} 
WHERE Email = 'john@example.com';

-- Query with composite index
SELECT * FROM UserPosts@{FORCE_INDEX=UserPostsByUserDate}
WHERE UserId = 'user-123' 
ORDER BY CreatedAt DESC;

-- Query using storing index
SELECT Title, Content, CreatedAt 
FROM UserPosts@{FORCE_INDEX=UserPostsByTitle}
WHERE Title LIKE '%Spanner%';`,
        },
        {
          command: 'Index Management',
          description: 'Manage existing indexes',
          usage: 'DROP INDEX, index information',
          example: `-- Drop index
DROP INDEX UsersByEmail;

-- List indexes
SELECT INDEX_NAME, TABLE_NAME 
FROM INFORMATION_SCHEMA.INDEXES 
WHERE TABLE_SCHEMA = '';

-- Index statistics
SELECT * FROM SPANNER_SYS.INDEX_STATS 
WHERE TABLE_NAME = 'Users';`,
        },
        {
          command: 'Indexing Best Practices',
          description: 'Optimize index usage',
          usage: 'Index optimization tips',
          example: `Index Best Practices:
1. Create indexes on frequently queried columns
2. Use composite indexes for multi-column queries
3. Use STORING clause to avoid table lookups
4. Monitor index usage and remove unused indexes
5. Consider read/write ratio when creating indexes
6. Use appropriate index types (UNIQUE vs regular)
7. Index cardinality affects performance
8. Too many indexes impact write performance`,
        },
      ],
    },
    {
      title: 'Spanner Schema Evolution',
      commands: [
        {
          command: 'Add Column',
          description: 'Add column to existing table',
          usage: 'ALTER TABLE ADD COLUMN',
          example: `-- Add nullable column
ALTER TABLE Users ADD COLUMN PhoneNumber STRING(20);

-- Add column with default value
ALTER TABLE Users ADD COLUMN IsActive BOOL DEFAULT TRUE;

-- Add NOT NULL column (requires backfill)
ALTER TABLE Users ADD COLUMN BirthDate DATE DEFAULT NULL;
-- Backfill data, then make NOT NULL
ALTER TABLE Users ALTER COLUMN BirthDate SET NOT NULL;`,
        },
        {
          command: 'Drop Column',
          description: 'Remove column from table',
          usage: 'ALTER TABLE DROP COLUMN',
          example: `-- Drop column
ALTER TABLE Users DROP COLUMN PhoneNumber;

-- Drop multiple columns
ALTER TABLE Users DROP COLUMN PhoneNumber, DROP COLUMN BirthDate;`,
        },
        {
          command: 'Modify Column',
          description: 'Modify existing column',
          usage: 'ALTER TABLE ALTER COLUMN',
          example: `-- Change column type
ALTER TABLE Users ALTER COLUMN PhoneNumber SET DATA TYPE STRING(25);

-- Change default value
ALTER TABLE Users ALTER COLUMN IsActive SET DEFAULT FALSE;

-- Add NOT NULL constraint
ALTER TABLE Users ALTER COLUMN Email SET NOT NULL;`,
        },
        {
          command: 'Create Table with Evolution',
          description: 'Design for schema evolution',
          usage: 'Schema evolution best practices',
          example: `-- Design for evolution
CREATE TABLE Users (
  UserId STRING(36) NOT NULL,
  Email STRING(255) NOT NULL,
  FirstName STRING(50),
  LastName STRING(50),
  -- Future columns can be added here
  CreatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
  UpdatedAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
) PRIMARY KEY (UserId);

-- Add new column later
ALTER TABLE Users ADD COLUMN MiddleName STRING(50);`,
        },
      ],
    },
    {
      title: 'Spanner Change Data Capture',
      commands: [
        {
          command: 'Create Change Stream',
          description: 'Create change stream for CDC',
          usage: 'CREATE CHANGE STREAM',
          example: `-- Create change stream for table
CREATE CHANGE STREAM UsersStream FOR Users;

-- Create change stream for specific columns
CREATE CHANGE STREAM UsersEmailStream FOR Users (Email, UpdatedAt);

-- Create change stream with filter
CREATE CHANGE STREAM ActiveUsersStream 
FOR Users 
OPTIONS (retention_period = '7d');`,
        },
        {
          command: 'Query Change Stream',
          description: 'Query change stream data',
          usage: 'Query change stream',
          example: `-- Query change stream
SELECT * FROM READ UsersStream 
  AT TIMESTAMP '2024-01-01T00:00:00Z';

-- Query with time range
SELECT * FROM READ UsersStream 
  BETWEEN TIMESTAMP '2024-01-01T00:00:00Z' 
  AND TIMESTAMP '2024-01-02T00:00:00Z';

-- Query specific changes
SELECT * FROM READ UsersStream 
  WHERE data_type = 'NEW_DATA' 
  AND mod_type = 'INSERT';`,
        },
        {
          command: 'Change Stream with Dataflow',
          description: 'Integrate with Dataflow',
          usage: 'Dataflow integration',
          example: `-- Dataflow template for change stream
gcloud dataflow jobs run spanner-cdc-job \\
  --gcs-location gs://dataflow-templates/latest/ \\
  --parameters \\
    instanceId=my-instance, \\
    databaseId=my-database, \\
    changeStreamName=UsersStream, \\
    outputTable=project:dataset.output_table`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Spanner Performance Optimization',
      commands: [
        {
          command: 'Query Performance',
          description: 'Optimize query performance',
          usage: 'Query optimization techniques',
          example: `-- Use appropriate indexes
SELECT * FROM Users@{FORCE_INDEX=UsersByEmail} 
WHERE Email = 'john@example.com';

-- Use LIMIT to reduce data transfer
SELECT * FROM Users ORDER BY CreatedAt DESC LIMIT 100;

-- Use specific columns instead of *
SELECT UserId, Email, FirstName FROM Users;

-- Use EXISTS instead of IN for subqueries
SELECT * FROM Users u 
WHERE EXISTS (SELECT 1 FROM UserPosts p WHERE p.UserId = u.UserId);

-- Use parameterized queries
SELECT * FROM Users WHERE UserId = @userId;`,
        },
        {
          command: 'Instance Scaling',
          description: 'Scale Spanner instances',
          usage: 'Instance scaling operations',
          example: `-- Add nodes to instance
gcloud spanner instances update my-instance --nodes=3

-- Remove nodes from instance
gcloud spanner instances update my-instance --nodes=1

-- Scale to different configuration
gcloud spanner instances update my-instance --config=regional-us-central1

-- Monitor instance utilization
gcloud spanner instances describe my-instance --format="table(name,nodeCount,config)"`,
        },
        {
          command: 'Hotspot Detection',
          description: 'Detect and handle hotspots',
          usage: 'Hotspot monitoring',
          example: `-- Monitor hotspots
SELECT * FROM SPANNER_SYS.LOCK_STATS 
WHERE HOTSPOT = TRUE;

-- Query to find hot keys
SELECT * FROM SPANNER_SYS.TRANSACTION_STATS 
WHERE HOT_KEY = TRUE;

-- Redistribute hot keys
-- Use hash sharding or UUID keys
-- Consider table redesign for better distribution`,
        },
        {
          command: 'Read Optimization',
          description: 'Optimize read operations',
          usage: 'Read performance tips',
          example: `-- Use stale reads for non-critical data
SELECT * FROM Users 
OPTIONS (read_staleness='15_seconds');

-- Use batch reads
SELECT * FROM Users WHERE UserId IN ('user-1', 'user-2', 'user-3');

-- Use parallel queries
SELECT * FROM Users@{FORCE_PARALLELISM=4};

-- Use read-only transactions
BEGIN READ ONLY;
SELECT * FROM Users WHERE CreatedAt >= TIMESTAMP('2024-01-01T00:00:00Z');
COMMIT;`,
        },
        {
          command: 'Write Optimization',
          description: 'Optimize write operations',
          usage: 'Write performance tips',
          example: `-- Use batch writes
INSERT INTO Users (UserId, Email, FirstName, CreatedAt, UpdatedAt)
VALUES 
  ('user-1', 'user1@example.com', 'User1', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP()),
  ('user-2', 'user2@example.com', 'User2', PENDING_COMMIT_TIMESTAMP(), PENDING_COMMIT_TIMESTAMP());

-- Use mutations for bulk operations
-- Use client library batch operations
-- Avoid hot keys in writes
-- Use appropriate transaction size`,
        },
      ],
    },
    {
      title: 'Spanner Backup and Restore',
      commands: [
        {
          command: 'Create Backup',
          description: 'Create database backup',
          usage: 'gcloud spanner backups create',
          example: `# Create backup
gcloud spanner backups create my-backup \\
  --instance=my-instance \\
  --database=my-database \\
  --retention-period=30d

# Create backup with custom expiration
gcloud spanner backups create my-backup-2024 \\
  --instance=my-instance \\
  --database=my-database \\
  --retention-period=90d \\
  --version-time='2024-01-01T00:00:00Z'`,
        },
        {
          command: 'List Backups',
          description: 'List available backups',
          usage: 'gcloud spanner backups list',
          example: `# List all backups
gcloud spanner backups list --instance=my-instance

# List backups with filter
gcloud spanner backups list --instance=my-instance --filter="createTime>='2024-01-01T00:00:00Z'"

# List with details
gcloud spanner backups list --instance=my-instance --format="table(name,size,createTime,expireTime)"`,
        },
        {
          command: 'Restore from Backup',
          description: 'Restore database from backup',
          usage: 'gcloud spanner databases restore',
          example: `# Restore to new database
gcloud spanner databases restore my-backup \\
  --source-instance=my-instance \\
  --source-database=my-database \\
  --destination-instance=my-instance \\
  --destination-database=my-restored-database

# Restore to specific time
gcloud spanner databases restore my-backup \\
  --source-instance=my-instance \\
  --source-database=my-database \\
  --destination-instance=my-instance \\
  --destination-database=my-restored-db \\
  --restore-time='2024-01-01T12:00:00Z'`,
        },
        {
          command: 'Backup Automation',
          description: 'Automate backup creation',
          usage: 'Scheduled backups',
          example: `# Create scheduled backup using Cloud Scheduler
gcloud scheduler jobs create http daily-backup \\
  --schedule="0 2 * * *" \\
  --http-method=POST \\
  --uri="https://spanner.googleapis.com/v1/projects/your-project/instances/my-instance/databases/my-database/backups" \\
  --message-body='{"retentionPeriod": "30d"}' \\
  --oauth-service-account-email="spanner-backup@your-project.iam.gserviceaccount.com"

# Use Cloud Functions for backup automation
# Implement backup logic in Cloud Function
# Trigger via Cloud Scheduler or Pub/Sub`,
        },
      ],
    },
    {
      title: 'Spanner Security',
      commands: [
        {
          command: 'IAM Roles',
          description: 'Configure IAM roles',
          usage: 'IAM role management',
          example: `# Grant Spanner admin role
gcloud projects add-iam-policy-binding your-project \\
  --member="user:admin@example.com" \\
  --role="roles/spanner.admin"

# Grant database admin role
gcloud spanner databases add-iam-policy-binding my-database \\
  --instance=my-instance \\
  --member="user:dbadmin@example.com" \\
  --role="roles/spanner.databaseAdmin"

# Grant viewer role
gcloud spanner databases add-iam-policy-binding my-database \\
  --instance=my-instance \\
  --member="user:viewer@example.com" \\
  --role="roles/spanner.databaseViewer"`,
        },
        {
          command: 'Fine-Grained Access Control',
          description: 'Implement fine-grained permissions',
          usage: 'Table-level permissions',
          example: `# Grant table-specific access
gcloud spanner databases add-iam-policy-binding my-database \\
  --instance=my-instance \\
  --member="user:analyst@example.com" \\
  --role="roles/spanner.databaseUser" \\
  --condition="expression.title='TableAccess', expression.body='resource.name.startsWith('projects/_/instances/my-instance/databases/my-database/tables/Users')'"`,
        },
        {
          command: 'Data Encryption',
          description: 'Configure data encryption',
          usage: 'CMEK encryption',
          example: `# Create database with CMEK
gcloud spanner databases create my-database \\
  --instance=my-instance \\
  --encryption-key=projects/your-project/locations/us-central1/keyRings/my-keyring/cryptoKeys/my-key

# Update database encryption
gcloud spanner databases update my-database \\
  --instance=my-instance \\
  --encryption-key=projects/your-project/locations/us-central1/keyRings/my-keyring/cryptoKeys/my-key`,
        },
        {
          command: 'Network Security',
          description: 'Configure network security',
          usage: 'VPC service controls',
          example: `# Configure VPC service perimeter
gcloud access-context-manager perimeters create spanner-perimeter \\
  --title="Spanner Perimeter" \\
  --description="Perimeter for Spanner access" \\
  --perimeter-type=BRIDGE \\
  --resources=projects/your-project \\
  --restricted-services=spanner.googleapis.com

# Configure authorized networks
gcloud spanner instances update my-instance \\
  --authorized-networks=192.168.1.0/24,10.0.0.0/8`,
        },
      ],
    },
    {
      title: 'Spanner Monitoring',
      commands: [
        {
          command: 'Cloud Monitoring Metrics',
          description: 'Monitor Spanner metrics',
          usage: 'Cloud Monitoring setup',
          example: `# Key metrics to monitor
# - spanner.googleapis.com/instance/node_count
# - spanner.googleapis.com/instance/storage/used_bytes
# - spanner.googleapis.com/database/transaction/commit_count
# - spanner.googleapis.com/database/query/latency
# - spanner.googleapis.com/database/lock/request_count
# - spanner.googleapis.com/database/server/session_count

# Create monitoring dashboard
gcloud monitoring dashboards create --config-from-file=spanner-dashboard.json`,
        },
        {
          command: 'Performance Monitoring',
          description: 'Monitor performance metrics',
          usage: 'Performance analysis',
          example: `-- Query performance stats
SELECT * FROM SPANNER_SYS.QUERY_STATS_TOP_MINUTE 
WHERE database_name = 'my-database'
ORDER BY avg_latency_seconds DESC;

-- Transaction statistics
SELECT * FROM SPANNER_SYS.TRANSACTION_STATS 
WHERE database_name = 'my-database';

-- Lock statistics
SELECT * FROM SPANNER_SYS.LOCK_STATS 
WHERE database_name = 'my-database';`,
        },
        {
          command: 'Alerting Setup',
          description: 'Configure alerts',
          usage: 'Cloud Monitoring alerts',
          example: `# Create alert policy for high latency
gcloud monitoring policies create --policy-from-file=high-latency-policy.json

# Alert policy example
{
  "displayName": "Spanner High Latency",
  "conditions": [
    {
      "displayName": "Query latency > 100ms",
      "conditionThreshold": {
        "filter": "metric.type=\"spanner.googleapis.com/database/query/latency\"",
        "aggregations": [{"alignmentPeriod": "60s"}],
        "comparison": "COMPARISON_GT",
        "thresholdValue": 0.1,
        "duration": "300s"
      }
    }
  ]
}`,
        },
      ],
    },
    {
      title: 'Spanner Client Libraries',
      commands: [
        {
          command: 'Python Client Setup',
          description: 'Setup Python client',
          usage: 'google-cloud-spanner Python library',
          example: `# Install library
pip install google-cloud-spanner

# Basic usage
from google.cloud import spanner

client = spanner.Client()
instance = client.instance('my-instance')
database = instance.database('my-database')

# Query with parameters
with database.snapshot() as snapshot:
    results = snapshot.execute_sql(
        "SELECT * FROM Users WHERE Email = @email",
        params={"email": "john@example.com"},
        param_types={"email": spanner.param_types.STRING}
    )`,
        },
        {
          command: 'Java Client Setup',
          description: 'Setup Java client',
          usage: 'Google Cloud Spanner Java library',
          example: `// Maven dependency
<dependency>
    <groupId>com.google.cloud</groupId>
    <artifactId>google-cloud-spanner</artifactId>
    <version>6.44.0</version>
</dependency>

// Basic usage
SpannerOptions options = SpannerOptions.newBuilder().build();
Spanner spanner = options.getService();
DatabaseId dbId = DatabaseId.of("project", "instance", "database");
DatabaseClient dbClient = spanner.getDatabaseClient(dbId);

// Query with parameters
ResultSet resultSet = dbClient.singleUse()
    .executeQuery(Statement.of("SELECT * FROM Users WHERE Email = @email")
    .withBindVariable("email", "john@example.com"));`,
        },
        {
          command: 'Node.js Client Setup',
          description: 'Setup Node.js client',
          usage: '@google-cloud/spanner Node.js library',
          example: `// Install library
npm install @google-cloud/spanner

// Basic usage
const {Spanner} = require('@google-cloud/spanner');
const spanner = new Spanner();
const instance = spanner.instance('my-instance');
const database = instance.database('my-database');

// Query with parameters
const query = {
  sql: 'SELECT * FROM Users WHERE Email = @email',
  params: {
    email: 'john@example.com'
  }
};

const [rows] = await database.run(query);`,
        },
        {
          command: 'Go Client Setup',
          description: 'Setup Go client',
          usage: 'cloud.google.com/go/spanner Go library',
          example: `// Install library
go get cloud.google.com/go/spanner

// Basic usage
import (
    "context"
    "cloud.google.com/go/spanner"
)

client, err := spanner.NewClient(ctx, "projects/project/instances/instance/databases/database")
if err != nil {
    log.Fatal(err)
}
defer client.Close()

// Query with parameters
stmt := spanner.NewStatement(
    "SELECT * FROM Users WHERE Email = @email",
    map[string]interface{}{"email": "john@example.com"},
)
iter := client.Single().Query(ctx, stmt)`,
        },
      ],
    },
    {
      title: 'Spanner Best Practices',
      commands: [
        {
          command: 'Schema Design Best Practices',
          description: 'Optimal schema design patterns',
          usage: 'Schema design guidelines',
          example: `Schema Design Best Practices:
1. Use appropriate primary keys for distribution
2. Interleave related tables for performance
3. Use STORING indexes to avoid table lookups
4. Design for read/write patterns
5. Use appropriate data types to optimize storage
6. Plan for schema evolution
7. Avoid hot keys in primary key design
8. Use composite keys for hierarchical data`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize performance',
          usage: 'Performance optimization tips',
          example: `Performance Best Practices:
1. Use appropriate indexes for query patterns
2. Use batch operations for bulk data
3. Implement retry logic for transactions
4. Use stale reads for non-critical data
5. Monitor and optimize hotspots
6. Use parallel queries for large datasets
7. Optimize transaction size and duration
8. Use read-only transactions when possible`,
        },
        {
          command: 'Cost Optimization',
          description: 'Reduce Spanner costs',
          usage: 'Cost optimization strategies',
          example: `Cost Optimization:
1. Right-size instance nodes
2. Use appropriate backup retention
3. Optimize query patterns to reduce compute
4. Use interleaved tables to reduce storage
5. Monitor and remove unused indexes
6. Use auto-scaling for variable workloads
7. Implement data lifecycle policies
8. Choose appropriate instance configurations`,
        },
        {
          command: 'Security Best Practices',
          description: 'Secure Spanner deployments',
          usage: 'Security guidelines',
          example: `Security Best Practices:
1. Use principle of least privilege with IAM
2. Enable CMEK for sensitive data
3. Use VPC service controls
4. Implement fine-grained access control
5. Monitor access with Cloud Audit Logs
6. Use authorized networks
7. Regularly rotate service account keys
8. Implement data classification and tagging`,
        },
      ],
    },
    {
      title: 'Spanner Troubleshooting',
      commands: [
        {
          command: 'Common Issues',
          description: 'Diagnose common problems',
          usage: 'Troubleshooting guide',
          example: `Common Issues:
1. Transaction aborts
   - Implement exponential backoff retry
   - Check for lock contention
   - Reduce transaction size

2. Hotspot errors
   - Redesign primary keys
   - Use hash sharding
   - Distribute write patterns

3. High latency
   - Check query execution plans
   - Optimize indexes
   - Scale instance nodes

4. Connection errors
   - Check network connectivity
   - Verify IAM permissions
   - Monitor session pool usage`,
        },
        {
          command: 'Query Analysis',
          description: 'Analyze query performance',
          usage: 'Query optimization',
          example: `-- Analyze query execution
EXPLAIN SELECT * FROM Users WHERE Email = 'john@example.com';

-- Check query statistics
SELECT * FROM SPANNER_SYS.QUERY_STATS_TOP_MINUTE 
WHERE text LIKE '%Users%';

-- Monitor slow queries
SELECT * FROM SPANNER_SYS.QUERY_STATS_TOP_MINUTE 
WHERE avg_latency_seconds > 1.0
ORDER BY avg_latency_seconds DESC;`,
        },
        {
          command: 'Recovery Procedures',
          description: 'Recover from failures',
          usage: 'Disaster recovery',
          example: `# Restore from backup
gcloud spanner databases restore my-backup \\
  --source-instance=my-instance \\
  --source-database=my-database \\
  --destination-instance=my-instance \\
  --destination-database=my-restored-db

# Point-in-time recovery
gcloud spanner databases restore my-backup \\
  --source-instance=my-instance \\
  --source-database=my-database \\
  --destination-instance=my-instance \\
  --destination-database=my-recovered-db \\
  --restore-time='2024-01-01T12:00:00Z'

# Failover to replica
# Applications should implement retry logic
# Use multi-region configurations for high availability`,
        },
      ],
    },
  ],
};
