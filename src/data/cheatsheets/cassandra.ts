import { Database } from 'lucide-react';

export const cassandraCheatsheet = {
  id: 'cassandra',
  name: 'Apache Cassandra',
  description: 'Master Apache Cassandra from basics to expert operations (2024 Edition)',
  icon: Database,
  colorTheme: 'green' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Apache Cassandra',
      commands: [
        {
          command: 'Cassandra Overview',
          description: 'Introduction to Cassandra concepts',
          usage: 'Understanding Cassandra fundamentals',
          example: `Apache Cassandra Overview:
- Distributed NoSQL database
- Decentralized architecture (no single point of failure)
- Linear scalability (add nodes to increase throughput)
- High availability through replication
- Tunable consistency levels
- Masterless peer-to-peer architecture
- Multi-data center replication support`,
        },
        {
          command: 'Cassandra Architecture',
          description: 'Core architectural components',
          usage: 'Understanding Cassandra architecture',
          example: `Architecture Components:
- Nodes: Individual servers in cluster
- Data Centers: Logical grouping of nodes
- Clusters: Collection of data centers
- Keyspaces: Namespace for tables (similar to databases)
- Tables: Data containers with columns
- Partitions: Data distribution units
- Replicas: Copies of data across nodes
- Snitches: Network topology awareness`,
        },
        {
          command: 'Cassandra Benefits',
          description: 'Key advantages of Cassandra',
          usage: 'Why choose Cassandra',
          example: `Key Benefits:
- No single point of failure
- Horizontal scalability (linear performance increase)
- Geographic distribution (multi-region deployment)
- High write performance (optimized for write-heavy workloads)
- Flexible schema (schema-less design)
- Always on availability (continuous availability)
- Fault tolerance (automatic failover and recovery)`,
        },
        {
          command: 'Data Model Concepts',
          description: 'Cassandra data model fundamentals',
          usage: 'Understanding data modeling',
          example: `Data Model Concepts:
- Partition key: Determines data distribution
- Clustering key: Determines sort order within partition
- Composite key: Multiple partition keys
- Wide rows: Many columns per partition
- Time series: Time-based clustering
- Denormalization: Duplicate data for query performance`,
        },
        {
          command: 'Install Cassandra Ubuntu',
          description: 'Install Cassandra on Ubuntu',
          usage: 'apt package installation',
          example: `# Ubuntu/Debian Installation
sudo apt update
sudo apt install cassandra

# Start service
sudo systemctl start cassandra
sudo systemctl enable cassandra`,
        },
        {
          command: 'Install Cassandra macOS',
          description: 'Install Cassandra on macOS',
          usage: 'Homebrew installation',
          example: `# macOS with Homebrew
brew install cassandra
brew services start cassandra

# Alternative: Using MacPorts
sudo port install cassandra`,
        },
        {
          command: 'Install Cassandra Windows',
          description: 'Install Cassandra on Windows',
          usage: 'Manual installation',
          example: `# Windows Installation
# Download from cassandra.apache.org
# Extract to C:\\cassandra
# Set CASSANDRA_HOME environment variable
# Add %CASSANDRA_HOME%\\bin to PATH
# Run cassandra.bat from bin directory`,
        },
        {
          command: 'Install from Source',
          description: 'Build Cassandra from source',
          usage: 'Source code compilation',
          example: `# Build from source
git clone https://github.com/apache/cassandra.git
cd cassandra
ant build
# Binary will be in build directory`,
        },
        {
          command: 'Start Cassandra',
          description: 'Start Cassandra server',
          usage: 'Starting Cassandra service',
          example: `# Start Cassandra
sudo systemctl start cassandra  # Linux
brew services start cassandra   # macOS
cassandra -f                    # Foreground mode

# Check status
sudo systemctl status cassandra
nodetool status`,
        },
        {
          command: 'Connect to Cassandra',
          description: 'Connect to Cassandra shell',
          usage: 'cqlsh command',
          example: `# Connect to local Cassandra
cqlsh

# Connect to remote host
cqlsh 192.168.1.100

# Connect with specific port
cqlsh 192.168.1.100 9042

# Connect with credentials
cqlsh -u username -p password`,
        },
        {
          command: 'Cassandra Data Types',
          description: 'Basic Cassandra data types',
          usage: 'Common data type definitions',
          example: `Basic Data Types:
text          - UTF-8 encoded string
varchar       - UTF-8 encoded string
ascii         - ASCII string
bigint        - 64-bit signed integer
int           - 32-bit signed integer
smallint      - 16-bit signed integer
tinyint       - 8-bit signed integer
varint        - Arbitrary-precision integer
boolean       - True or false
decimal       - Variable-precision decimal
double        - 64-bit floating point
float         - 32-bit floating point
timestamp     - Date and time
date          - Date without time
time          - Time without date
uuid          - UUID type
timeuuid      - Version 1 UUID
inet          - IP address
blob          - Arbitrary bytes
list<type>    - Collection of values
set<type>     - Unique collection
map<key,val>  - Key-value pairs`,
        },
        {
          command: 'Create Keyspace',
          description: 'Create a keyspace',
          usage: 'CREATE KEYSPACE statement',
          example: `-- Create keyspace with SimpleStrategy
CREATE KEYSPACE myapp 
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

-- Create keyspace with NetworkTopologyStrategy
CREATE KEYSPACE myapp 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3,
  'datacenter2': 2
};`,
        },
        {
          command: 'Use Keyspace',
          description: 'Select active keyspace',
          usage: 'USE statement',
          example: `-- Use keyspace
USE myapp;

-- Describe keyspace
DESCRIBE KEYSPACE myapp;

-- List all keyspaces
DESCRIBE KEYSPACES;`,
        },
        {
          command: 'Create Table Basic',
          description: 'Create a basic table',
          usage: 'CREATE TABLE statement',
          example: `CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT,
  created_at TIMESTAMP
);`,
        },
        {
          command: 'Create Table with Composite Key',
          description: 'Create table with composite key',
          usage: 'Composite primary key',
          example: `CREATE TABLE user_posts (
  user_id UUID,
  post_id TIMEUUID,
  title TEXT,
  content TEXT,
  created_at TIMESTAMP,
  PRIMARY KEY (user_id, post_id)
);`,
        },
        {
          command: 'Create Table with Clustering',
          description: 'Create table with clustering order',
          usage: 'CLUSTERING ORDER BY',
          example: `CREATE TABLE user_posts (
  user_id UUID,
  post_id TIMEUUID,
  title TEXT,
  content TEXT,
  created_at TIMESTAMP,
  PRIMARY KEY (user_id, post_id)
) WITH CLUSTERING ORDER BY (post_id DESC);`,
        },
        {
          command: 'Insert Data',
          description: 'Insert records into table',
          usage: 'INSERT statement',
          example: `-- Insert single record
INSERT INTO users (user_id, username, email, created_at)
VALUES (uuid(), 'john_doe', 'john@example.com', toTimestamp(now()));

-- Insert with USING clause
INSERT INTO users (user_id, username, email)
VALUES (uuid(), 'jane_doe', 'jane@example.com')
USING TTL 86400;`,
        },
        {
          command: 'Select Data',
          description: 'Query data from tables',
          usage: 'SELECT statement',
          example: `-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT username, email FROM users;

-- Select with WHERE clause
SELECT * FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

-- Select with LIMIT
SELECT * FROM users LIMIT 10;`,
        },
        {
          command: 'Update Data',
          description: 'Update existing records',
          usage: 'UPDATE statement',
          example: `-- Update record
UPDATE users 
SET email = 'newemail@example.com' 
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

-- Update with TTL
UPDATE users USING TTL 3600
SET username = 'updated_name'
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;`,
        },
        {
          command: 'Delete Data',
          description: 'Delete records from tables',
          usage: 'DELETE statement',
          example: `-- Delete specific record
DELETE FROM users 
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

-- Delete specific columns
DELETE email FROM users 
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;`,
        },
        {
          command: 'Drop Table',
          description: 'Delete a table',
          usage: 'DROP TABLE statement',
          example: `DROP TABLE users;
DROP TABLE IF EXISTS user_posts;`,
        },
        {
          command: 'Drop Keyspace',
          description: 'Delete a keyspace',
          usage: 'DROP KEYSPACE statement',
          example: `DROP KEYSPACE myapp;
DROP KEYSPACE IF EXISTS myapp;`,
        },
      ],
    },
    {
      title: 'Cassandra Data Modeling',
      commands: [
        {
          command: 'Primary Key Basics',
          description: 'Understanding primary keys',
          usage: 'PRIMARY KEY definition',
          example: `-- Simple primary key
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  username TEXT
);

-- Composite primary key
CREATE TABLE user_posts (
  user_id UUID,
  post_id TIMEUUID,
  title TEXT,
  PRIMARY KEY ((user_id, post_id))
);`,
        },
        {
          command: 'Partition Key vs Clustering Key',
          description: 'Understanding key types',
          usage: 'Partition and clustering keys',
          example: `-- Partition key (data distribution)
-- Clustering key (sort order within partition)
CREATE TABLE events (
  event_id UUID,
  user_id UUID,
  event_type TEXT,
  timestamp TIMESTAMP,
  data TEXT,
  PRIMARY KEY ((user_id, event_type), timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);`,
        },
        {
          command: 'Compound vs Composite Keys',
          description: 'Different key types',
          usage: 'Key type differences',
          example: `-- Compound key (multiple partition columns)
CREATE TABLE compound_example (
  col1 TEXT,
  col2 TEXT,
  col3 TEXT,
  data TEXT,
  PRIMARY KEY ((col1, col2), col3)
);

-- Composite key (multiple clustering columns)
CREATE TABLE composite_example (
  partition_key TEXT,
  cluster1 TEXT,
  cluster2 TEXT,
  data TEXT,
  PRIMARY KEY (partition_key, cluster1, cluster2)
);`,
        },
        {
          command: 'Static Columns',
          description: 'Share data across partition',
          usage: 'STATIC column definition',
          example: `CREATE TABLE user_posts (
  user_id UUID,
  post_id TIMEUUID,
  title TEXT,
  content TEXT,
  user_email TEXT STATIC,  -- Shared across all posts for user
  created_at TIMESTAMP,
  PRIMARY KEY (user_id, post_id)
);`,
        },
        {
          command: 'Collection Types',
          description: 'Use collections in tables',
          usage: 'list, set, map types',
          example: `-- List collection
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  tags LIST<TEXT>
);

-- Set collection
CREATE TABLE products (
  product_id UUID PRIMARY KEY,
  name TEXT,
  categories SET<TEXT>
);

-- Map collection
CREATE TABLE user_preferences (
  user_id UUID PRIMARY KEY,
  preferences MAP<TEXT, TEXT>
);`,
        },
        {
          command: 'User-Defined Types',
          description: 'Create custom data types',
          usage: 'CREATE TYPE statement',
          example: `-- Create user-defined type
CREATE TYPE address (
  street TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT
);

-- Use UDT in table
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  address FROZEN<address>
);`,
        },
        {
          command: 'TTL and Timestamps',
          description: 'Time to live and timestamps',
          usage: 'TTL and timestamp functions',
          example: `-- Insert with TTL
INSERT INTO users (user_id, name) 
VALUES (uuid(), 'John') 
USING TTL 86400;  -- 24 hours

-- Update TTL
UPDATE users USING TTL 3600
SET name = 'Jane'
WHERE user_id = uuid();

-- Check TTL
SELECT TTL(name) FROM users WHERE user_id = uuid();`,
        },
        {
          command: 'Lightweight Transactions',
          description: 'Conditional updates',
          usage: 'IF clause in DML',
          example: `-- Conditional insert
INSERT INTO users (user_id, name, email)
VALUES (uuid(), 'John', 'john@example.com')
IF NOT EXISTS;

-- Conditional update
UPDATE users 
SET email = 'new@example.com'
WHERE user_id = uuid()
IF email = 'old@example.com';

-- Conditional delete
DELETE FROM users 
WHERE user_id = uuid()
IF name = 'John';`,
        },
      ],
    },
    {
      title: 'Cassandra Query Language (CQL)',
      commands: [
        {
          command: 'Basic SELECT Queries',
          description: 'Fundamental SELECT operations',
          usage: 'Basic query patterns',
          example: `-- Select all from table
SELECT * FROM users;

-- Select specific columns
SELECT user_id, username FROM users;

-- Select with WHERE on partition key
SELECT * FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

-- Select with ALLOW FILTERING (use carefully)
SELECT * FROM users WHERE username = 'john' ALLOW FILTERING;`,
        },
        {
          command: 'IN Clause',
          description: 'Query multiple partition keys',
          usage: 'IN operator',
          example: `-- Select multiple partition keys
SELECT * FROM users 
WHERE user_id IN (
  123e4567-e89b-12d3-a456-426614174000,
  456e7890-e89b-12d3-a456-426614174001
);

-- IN with clustering columns
SELECT * FROM user_posts 
WHERE user_id = uuid() 
AND post_id IN (uuid1, uuid2, uuid3);`,
        },
        {
          command: 'Range Queries',
          description: 'Query ranges of clustering keys',
          usage: 'Range operators',
          example: `-- Range query on clustering key
SELECT * FROM user_posts 
WHERE user_id = uuid() 
AND post_id > minTimeuuid('2024-01-01')
AND post_id < minTimeuuid('2024-12-31');

-- Range with LIMIT
SELECT * FROM events 
WHERE sensor_id = 'sensor1' 
AND timestamp > '2024-01-01 00:00:00'
LIMIT 100;`,
        },
        {
          command: 'ORDER BY Queries',
          description: 'Sort query results',
          usage: 'ORDER BY clause',
          example: `-- Order by clustering column (ASC)
SELECT * FROM user_posts 
WHERE user_id = uuid()
ORDER BY post_id ASC;

-- Order by clustering column (DESC)
SELECT * FROM user_posts 
WHERE user_id = uuid()
ORDER BY post_id DESC;`,
        },
        {
          command: 'GROUP BY Queries',
          description: 'Group query results',
          usage: 'GROUP BY clause',
          example: `-- Group by partition key
SELECT user_id, COUNT(*) as post_count
FROM user_posts
GROUP BY user_id;

-- Group by clustering column
SELECT event_type, COUNT(*) as event_count
FROM events
WHERE sensor_id = 'sensor1'
GROUP BY event_type;`,
        },
        {
          command: 'Aggregate Functions',
          description: 'Use aggregate functions',
          usage: 'COUNT, SUM, AVG, MAX, MIN',
          example: `-- Count rows
SELECT COUNT(*) FROM users;
SELECT COUNT(username) FROM users;

-- Sum values
SELECT SUM(amount) FROM transactions
WHERE account_id = uuid();

-- Average, Max, Min
SELECT AVG(price), MAX(price), MIN(price) 
FROM products
WHERE category = 'electronics';`,
        },
        {
          command: 'DISTINCT Queries',
          description: 'Get unique values',
          usage: 'DISTINCT keyword',
          example: `-- Distinct partition keys
SELECT DISTINCT user_id FROM user_posts;

-- Distinct values (limited to partition key)
SELECT DISTINCT category FROM products;

-- Distinct with limit
SELECT DISTINCT user_id FROM user_posts LIMIT 10;`,
        },
        {
          command: 'JSON Support',
          description: 'Work with JSON data',
          usage: 'JSON functions',
          example: `-- Insert JSON
INSERT INTO users JSON '{
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "username": "john",
  "email": "john@example.com"
}';

-- Select as JSON
SELECT JSON * FROM users WHERE user_id = uuid();

-- Extract JSON field
SELECT username FROM users WHERE user_id = uuid();`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Cassandra Collections',
      commands: [
        {
          command: 'List Operations',
          description: 'Work with list collections',
          usage: 'LIST type operations',
          example: `-- Insert with list
INSERT INTO users (user_id, name, tags)
VALUES (uuid(), 'John', ['developer', 'python', 'cassandra']);

-- Append to list
UPDATE users 
SET tags = tags + ['new_tag']
WHERE user_id = uuid();

-- Prepend to list
UPDATE users 
SET tags = ['first_tag'] + tags
WHERE user_id = uuid();

-- Remove from list
UPDATE users 
SET tags = tags - ['old_tag']
WHERE user_id = uuid();

-- Get list item
SELECT tags[0] FROM users WHERE user_id = uuid();`,
        },
        {
          command: 'Set Operations',
          description: 'Work with set collections',
          usage: 'SET type operations',
          example: `-- Insert with set
INSERT INTO products (product_id, name, categories)
VALUES (uuid(), 'Laptop', {'electronics', 'computers', 'tech'});

-- Add to set
UPDATE products 
SET categories = categories + {'new_category'}
WHERE product_id = uuid();

-- Remove from set
UPDATE products 
SET categories = categories - {'old_category'}
WHERE product_id = uuid();

-- Check if contains
SELECT * FROM products 
WHERE product_id = uuid() 
AND categories CONTAINS 'electronics';`,
        },
        {
          command: 'Map Operations',
          description: 'Work with map collections',
          usage: 'MAP type operations',
          example: `-- Insert with map
INSERT INTO user_preferences (user_id, preferences)
VALUES (uuid(), {'theme': 'dark', 'language': 'en', 'timezone': 'UTC'});

-- Update map value
UPDATE user_preferences 
SET preferences['theme'] = 'light'
WHERE user_id = uuid();

-- Add map entry
UPDATE user_preferences 
SET preferences = preferences + {'new_key': 'new_value'}
WHERE user_id = uuid();

-- Remove map entry
UPDATE user_preferences 
SET preferences = preferences - {'old_key'}
WHERE user_id = uuid();

-- Get map value
SELECT preferences['theme'] FROM user_preferences WHERE user_id = uuid();`,
        },
        {
          command: 'Collection Indexing',
          description: 'Index collection elements',
          usage: 'Create indexes on collections',
          example: `-- Create index on map keys
CREATE INDEX ON user_preferences (KEYS(preferences));

-- Create index on map values
CREATE INDEX ON user_preferences (ENTRIES(preferences));

-- Create index on list elements
CREATE INDEX ON users (tags);

-- Query indexed collections
SELECT * FROM user_preferences 
WHERE preferences CONTAINS KEY 'theme';

SELECT * FROM users 
WHERE tags CONTAINS 'developer';`,
        },
        {
          command: 'Collection Functions',
          description: 'Built-in collection functions',
          usage: 'Collection utility functions',
          example: `-- Get collection size
SELECT TTL(tags), WRITETIME(tags) FROM users WHERE user_id = uuid();

-- Check if collection contains value
SELECT * FROM users 
WHERE user_id = uuid() 
AND tags CONTAINS 'developer';

-- Map contains key
SELECT * FROM user_preferences 
WHERE user_id = uuid() 
AND preferences CONTAINS KEY 'theme';`,
        },
      ],
    },
    {
      title: 'Cassandra Indexing',
      commands: [
        {
          command: 'Create Secondary Index',
          description: 'Create secondary index on column',
          usage: 'CREATE INDEX statement',
          example: `-- Create index on single column
CREATE INDEX ON users (username);

-- Create index on collection
CREATE INDEX ON users (tags);

-- Create index on map keys
CREATE INDEX ON user_preferences (KEYS(preferences));

-- Create index on map values
CREATE INDEX ON user_preferences (ENTRIES(preferences));`,
        },
        {
          command: 'Custom Index',
          description: 'Create index with custom options',
          usage: 'CREATE CUSTOM INDEX',
          example: `-- Create custom index (SASI)
CREATE CUSTOM INDEX ON users (username) 
USING 'org.apache.cassandra.index.sasi.SASIIndex';

-- Create index with options
CREATE INDEX ON users (email) 
WITH OPTIONS = {'target': '0.5'};

-- Create index on clustering column
CREATE INDEX ON user_posts (post_id);`,
        },
        {
          command: 'Drop Index',
          description: 'Remove secondary index',
          usage: 'DROP INDEX statement',
          example: `-- Drop index
DROP INDEX users_username_idx;

-- Drop custom index
DROP INDEX IF EXISTS users_username_sasi_idx;`,
        },
        {
          command: 'Materialized View',
          description: 'Create materialized view for different query patterns',
          usage: 'CREATE MATERIALIZED VIEW',
          example: `-- Create materialized view
CREATE MATERIALIZED VIEW users_by_email AS
SELECT * FROM users
WHERE email IS NOT NULL
PRIMARY KEY (email, user_id);

-- Query materialized view
SELECT * FROM users_by_email WHERE email = 'john@example.com';

-- Drop materialized view
DROP MATERIALIZED VIEW users_by_email;`,
        },
        {
          command: 'Index Best Practices',
          description: 'Guidelines for using indexes',
          usage: 'Index optimization tips',
          example: `Index Best Practices:
- Index high-cardinality columns
- Avoid indexing low-cardinality columns
- Use indexes for queries not starting with partition key
- Consider materialized views for different access patterns
- Monitor index performance with nodetool
- Limit number of indexes per table (5-10 recommended)
- Use ALLOW FILTERING sparingly`,
        },
      ],
    },
    {
      title: 'Cassandra Batch Operations',
      commands: [
        {
          command: 'Logged Batch',
          description: 'Atomic batch operations',
          usage: 'BEGIN BATCH statement',
          example: `-- Logged batch (atomic)
BEGIN BATCH
  INSERT INTO users (user_id, name) VALUES (uuid(), 'John');
  INSERT INTO user_posts (user_id, post_id, title) VALUES (uuid(), uuid(), 'First Post');
  UPDATE users SET email = 'john@example.com' WHERE user_id = uuid();
APPLY BATCH;`,
        },
        {
          command: 'Unlogged Batch',
          description: 'Non-atomic batch operations',
          usage: 'BEGIN UNLOGGED BATCH',
          example: `-- Unlogged batch (faster, non-atomic)
BEGIN UNLOGGED BATCH
  INSERT INTO users (user_id, name) VALUES (uuid(), 'Alice');
  INSERT INTO users (user_id, name) VALUES (uuid(), 'Bob');
  INSERT INTO users (user_id, name) VALUES (uuid(), 'Charlie');
APPLY BATCH;`,
        },
        {
          command: 'Counter Batch',
          description: 'Batch operations with counters',
          usage: 'Batch with counter updates',
          example: `-- Batch with counter updates
BEGIN BATCH
  UPDATE page_views SET views = views + 1 WHERE page_id = 'home';
  UPDATE page_views SET views = views + 1 WHERE page_id = 'about';
  UPDATE user_stats SET login_count = login_count + 1 WHERE user_id = uuid();
APPLY BATCH;`,
        },
        {
          command: 'Conditional Batch',
          description: 'Batch with conditions',
          usage: 'Batch with lightweight transactions',
          example: `-- Conditional batch
BEGIN BATCH
  INSERT INTO users (user_id, name, email) 
  VALUES (uuid(), 'John', 'john@example.com') 
  IF NOT EXISTS;
  INSERT INTO user_profiles (user_id, bio) 
  VALUES (uuid(), 'Software Developer') 
  IF NOT EXISTS;
APPLY BATCH;`,
        },
        {
          command: 'Batch Best Practices',
          description: 'Guidelines for batch operations',
          usage: 'Batch optimization tips',
          example: `Batch Best Practices:
- Keep batches small (under 5KB)
- Use unlogged batches for performance
- Use logged batches for atomicity
- Avoid跨partition batches when possible
- Consider async operations for bulk loads
- Monitor batch performance`,
        },
      ],
    },
    {
      title: 'Cassandra Time Series',
      commands: [
        {
          command: 'Time Series Table Design',
          description: 'Design tables for time series data',
          usage: 'Time series data modeling',
          example: `-- Time series table design
CREATE TABLE sensor_readings (
  sensor_id TEXT,
  bucket TIMESTAMP,  -- Time bucket (day/hour)
  reading_time TIMESTAMP,
  value DOUBLE,
  metadata MAP<TEXT, TEXT>,
  PRIMARY KEY ((sensor_id, bucket), reading_time)
) WITH CLUSTERING ORDER BY (reading_time DESC);`,
        },
        {
          command: 'Time Bucketing',
          description: 'Use time buckets for wide rows',
          usage: 'Time bucketing strategy',
          example: `-- Insert with time bucketing
INSERT INTO sensor_readings (
  sensor_id, 
  bucket, 
  reading_time, 
  value
) VALUES (
  'temp_sensor_1',
  toTimestamp(toDate(now())),  -- Daily bucket
  toTimestamp(now()),
  25.5
);

-- Query time bucket
SELECT * FROM sensor_readings 
WHERE sensor_id = 'temp_sensor_1' 
AND bucket = toTimestamp('2024-01-01');`,
        },
        {
          command: 'Time Series Queries',
          description: 'Query time series data efficiently',
          usage: 'Time series query patterns',
          example: `-- Latest readings for sensor
SELECT * FROM sensor_readings 
WHERE sensor_id = 'temp_sensor_1' 
AND bucket = toTimestamp(toDate(now()))
LIMIT 10;

-- Time range query
SELECT * FROM sensor_readings 
WHERE sensor_id = 'temp_sensor_1' 
AND bucket >= toTimestamp('2024-01-01')
AND bucket <= toTimestamp('2024-01-31');`,
        },
        {
          command: 'Rollup Aggregations',
          description: 'Create rollup tables for aggregations',
          usage: 'Time series aggregation',
          example: `-- Hourly rollup table
CREATE TABLE sensor_readings_hourly (
  sensor_id TEXT,
  hour_bucket TIMESTAMP,
  avg_value DOUBLE,
  min_value DOUBLE,
  max_value DOUBLE,
  count_value BIGINT,
  PRIMARY KEY ((sensor_id), hour_bucket)
);

-- Materialized view for rollups
CREATE MATERIALIZED VIEW sensor_rollups AS
SELECT 
  sensor_id,
  toTimestamp(dateOf(reading_time)) as day_bucket,
  avg(value) as avg_value,
  min(value) as min_value,
  max(value) as max_value,
  count(value) as count_value
FROM sensor_readings
WHERE sensor_id IS NOT NULL
PRIMARY KEY ((sensor_id), day_bucket);`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Cassandra Performance Tuning',
      commands: [
        {
          command: 'Compaction Strategies',
          description: 'Configure compaction strategies',
          usage: 'Compaction strategy tuning',
          example: `-- SizeTieredCompactionStrategy (default)
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT
) WITH compaction = {
  'class': 'SizeTieredCompactionStrategy',
  'min_threshold': '4',
  'max_threshold': '32'
};

-- LeveledCompactionStrategy
CREATE TABLE events (
  event_id UUID PRIMARY KEY,
  data TEXT
) WITH compaction = {
  'class': 'LeveledCompactionStrategy',
  'sstable_size_in_mb': '160'
};

-- TimeWindowCompactionStrategy
CREATE TABLE time_series (
  sensor_id TEXT,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY ((sensor_id), timestamp)
) WITH compaction = {
  'class': 'TimeWindowCompactionStrategy',
  'compaction_window_unit': 'DAYS',
  'compaction_window_size': '7'
};`,
        },
        {
          command: 'Compression Settings',
          description: 'Configure compression for SSTables',
          usage: 'Compression options',
          example: `-- LZ4 compression (fast)
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT
) WITH compression = {
  'class': 'LZ4Compressor',
  'chunk_length_kb': '64'
};

-- Snappy compression (balanced)
CREATE TABLE logs (
  log_id UUID PRIMARY KEY,
  message TEXT
) WITH compression = {
  'class': 'SnappyCompressor',
  'chunk_length_kb': '32'
};

-- Deflate compression (high compression)
CREATE TABLE archives (
  archive_id UUID PRIMARY KEY,
  data BLOB
) WITH compression = {
  'class': 'DeflateCompressor',
  'chunk_length_kb': '64'
};`,
        },
        {
          command: 'Caching Settings',
          description: 'Configure row and key caching',
          usage: 'Cache optimization',
          example: `-- Enable caching
CREATE TABLE hot_data (
  id UUID PRIMARY KEY,
  data TEXT
) WITH caching = {
  'keys': 'ALL',
  'rows_per_partition': '100'
};

-- Tune cache settings
ALTER TABLE hot_data 
WITH caching = {
  'keys': 'NONE',
  'rows_per_partition': '50'
};`,
        },
        {
          command: 'TTL Management',
          description: 'Manage time-to-live settings',
          usage: 'TTL optimization',
          example: `-- Set default TTL
CREATE TABLE sessions (
  session_id UUID PRIMARY KEY,
  user_id UUID,
  data TEXT
) WITH default_time_to_live = 86400;  -- 24 hours

-- Update TTL
UPDATE sessions USING TTL 3600
SET data = 'new_data'
WHERE session_id = uuid();

-- Check remaining TTL
SELECT TTL(data) FROM sessions WHERE session_id = uuid();`,
        },
        {
          command: 'Read Repair',
          description: 'Configure read repair settings',
          usage: 'Read repair optimization',
          example: `-- Set read repair chance
ALTER TABLE users 
WITH read_repair_chance = 0.1;

-- Set dclocal_read_repair_chance
ALTER TABLE users 
WITH dclocal_read_repair_chance = 0.01;

-- Disable read repair for high-throughput tables
ALTER TABLE metrics 
WITH read_repair_chance = 0.0
AND dclocal_read_repair_chance = 0.0;`,
        },
        {
          command: 'Speculative Retry',
          description: 'Configure speculative retry',
          usage: 'Speculative retry tuning',
          example: `-- Enable speculative retry
ALTER TABLE users 
WITH speculative_retry = '99PERCENTILE';

-- Set custom percentile
ALTER TABLE users 
WITH speculative_retry = '95PERCENTILE';

-- Always speculative retry
ALTER TABLE users 
WITH speculative_retry = 'ALWAYS';

-- Disable speculative retry
ALTER TABLE users 
WITH speculative_retry = 'NONE';`,
        },
      ],
    },
    {
      title: 'Cassandra Security',
      commands: [
        {
          command: 'Enable Authentication',
          description: 'Enable password authentication',
          usage: 'Security configuration',
          example: `# Enable authentication in cassandra.yaml
authenticator: PasswordAuthenticator
authorizer: CassandraAuthorizer

# Restart Cassandra
sudo systemctl restart cassandra

# Create default superuser
cqlsh -u cassandra -p cassandra
CREATE USER admin WITH PASSWORD 'secure_password' SUPERUSER;`,
        },
        {
          command: 'Create Users',
          description: 'Create database users',
          usage: 'CREATE USER statement',
          example: `-- Create regular user
CREATE USER app_user WITH PASSWORD 'app_password' NOSUPERUSER;

-- Create user with login
CREATE USER readonly_user WITH PASSWORD 'read_password' NOSUPERUSER NOLOGIN;

-- Create superuser
CREATE USER admin_user WITH PASSWORD 'admin_password' SUPERUSER;`,
        },
        {
          command: 'Grant Permissions',
          description: 'Grant permissions to users',
          usage: 'GRANT statement',
          example: `-- Grant permissions on keyspace
GRANT ALL PERMISSIONS ON KEYSPACE myapp TO app_user;
GRANT SELECT ON KEYSPACE myapp TO readonly_user;

-- Grant permissions on table
GRANT SELECT, INSERT ON TABLE myapp.users TO app_user;
GRANT SELECT ON TABLE myapp.users TO readonly_user;

-- Grant modify permissions
GRANT ALTER ON KEYSPACE myapp TO admin_user;
GRANT DROP ON KEYSPACE myapp TO admin_user;`,
        },
        {
          command: 'Revoke Permissions',
          description: 'Revoke user permissions',
          usage: 'REVOKE statement',
          example: `-- Revoke permissions
REVOKE SELECT ON KEYSPACE myapp FROM readonly_user;
REVOKE ALL PERMISSIONS ON KEYSPACE myapp FROM app_user;

-- List user permissions
LIST ALL PERMISSIONS OF app_user;
LIST ALL PERMISSIONS ON KEYSPACE myapp;`,
        },
        {
          command: 'SSL Encryption',
          description: 'Enable SSL encryption',
          usage: 'SSL configuration',
          example: `# Enable SSL in cassandra.yaml
server_encryption_options:
  internode_encryption: all
  keystore: /etc/cassandra/conf/.keystore
  keystore_password: your_keystore_password
  truststore: /etc/cassandra/conf/.truststore
  truststore_password: your_truststore_password

# Enable client encryption
client_encryption_options:
  enabled: true
  keystore: /etc/cassandra/conf/.keystore
  keystore_password: your_keystore_password`,
        },
        {
          command: 'Role-Based Access',
          description: 'Create and manage roles',
          usage: 'ROLE management',
          example: `-- Create role
CREATE ROLE app_developer WITH PASSWORD = 'dev_password' 
LOGIN = true;

-- Grant role to user
GRANT app_developer TO app_user;

-- Create role with permissions
CREATE ROLE readonly WITH PASSWORD = 'read_password' 
LOGIN = true;
GRANT SELECT ON ALL KEYSPACES TO readonly;

-- Revoke role from user
REVOKE app_developer FROM app_user;`,
        },
      ],
    },
    {
      title: 'Cassandra Backup and Recovery',
      commands: [
        {
          command: 'Snapshot Backup',
          description: 'Create table snapshots',
          usage: ' nodetool snapshot',
          example: `# Create snapshot for all keyspaces
nodetool snapshot

# Create snapshot for specific keyspace
nodetool snapshot -kt myapp

# Create snapshot with tag
nodetool snapshot -kt myapp -t backup_20240101

# List snapshots
nodetool listsnapshots

# Clear snapshots
nodetool clearsnapshot`,
        },
        {
          command: 'Incremental Backup',
          description: 'Enable incremental backups',
          usage: 'Incremental backup configuration',
          example: `# Enable incremental backup in cassandra.yaml
incremental_backups: true

# Or enable per table
ALTER TABLE users WITH incremental_backups = true;

# Backup location
# /var/lib/cassandra/data/keyspace/table/backups/`,
        },
        {
          command: 'Export Data',
          description: 'Export data to CSV',
          usage: 'COPY TO command',
          example: `-- Export table to CSV
COPY users TO '/tmp/users.csv' WITH HEADER = TRUE;

-- Export specific columns
COPY users (user_id, username, email) 
TO '/tmp/users_basic.csv' WITH HEADER = TRUE;

-- Export with custom delimiter
COPY users TO '/tmp/users.tsv' 
WITH DELIMITER = '\t' AND HEADER = TRUE;`,
        },
        {
          command: 'Import Data',
          description: 'Import data from CSV',
          usage: 'COPY FROM command',
          example: `-- Import from CSV
COPY users FROM '/tmp/users.csv' WITH HEADER = TRUE;

-- Import specific columns
COPY users (user_id, username, email) 
FROM '/tmp/users_basic.csv' WITH HEADER = TRUE;

-- Import with custom options
COPY users FROM '/tmp/users.csv' 
WITH HEADER = TRUE 
AND CHUNKSIZE = 1000 
AND MAXROWS = 10000;`,
        },
        {
          command: 'Restore from Snapshot',
          description: 'Restore data from snapshots',
          usage: 'Snapshot restoration',
          example: `# Stop Cassandra
sudo systemctl stop cassandra

# Copy snapshot data back
sudo cp -r /var/lib/cassandra/data/myapp/users-*/snapshots/20240101/* \
  /var/lib/cassandra/data/myapp/users-*/

# Fix permissions
sudo chown -R cassandra:cassandra /var/lib/cassandra/data/

# Start Cassandra
sudo systemctl start cassandra

# Run repair
nodetool repair myapp users`,
        },
        {
          command: 'SSTable Tools',
          description: 'Use SSTable utilities',
          usage: 'SSTable management tools',
          example: `# SSTable export
sstable2json /var/lib/cassandra/data/myapp/users/*/mb-*.db

# SSTable import
json2sstable -K myapp -c users /tmp/users.json /tmp/mb-1.db

# SSTable metadata
sstablemetadata /var/lib/cassandra/data/myapp/users/*/mb-*.db

# SSTable scrub
sstablescrub /var/lib/cassandra/data/myapp/users/`,
        },
      ],
    },
    {
      title: 'Cassandra Monitoring',
      commands: [
        {
          command: 'Nodetool Status',
          description: 'Check cluster status',
          usage: 'nodetool status command',
          example: `# Check cluster status
nodetool status

# Check specific keyspace
nodetool status myapp

# Check with resolution
nodetool status -r

# Check with tokens
nodetool status -T`,
        },
        {
          command: 'Nodetool Info',
          description: 'Get node information',
          usage: 'nodetool info command',
          example: `# Get node info
nodetool info

# Get gossip info
nodetool gossipinfo

# Get ring information
nodetool ring

# Get endpoint ranges
nodetool describering myapp users`,
        },
        {
          command: 'Compaction Monitoring',
          description: 'Monitor compaction status',
          usage: 'Compaction commands',
          example: `# Check compaction stats
nodetool compactionstats

# Check pending compactions
nodetool compactionhistory

# Force major compaction
nodetool compact myapp users

# Force minor compaction
nodetool scrub myapp users`,
        },
        {
          command: 'Performance Metrics',
          description: 'Monitor performance metrics',
          usage: 'Performance monitoring',
          example: `# Check table stats
nodetool tablestats myapp

# Check tpstats
nodetool tpstats

# Check proxyhistograms
nodetool proxyhistograms

# Check cfstats (legacy)
nodetool cfstats`,
        },
        {
          command: 'Repair Operations',
          description: 'Run repair operations',
          usage: 'Repair commands',
          example: `# Repair keyspace
nodetool repair myapp

# Repair specific table
nodetool repair myapp users

# Repair with parallelism
nodetool repair -pr myapp

# Repair specific range
nodetool repair -st 0 -et 100 myapp users`,
        },
        {
          command: 'JMX Monitoring',
          description: 'Monitor via JMX',
          usage: 'JMX monitoring setup',
          example: `# Enable JMX in cassandra.yaml
JMX_PORT=7199
LOCAL_JMX=yes

# Connect with nodetool
nodetool -h localhost -p 7199 status

# Use JConsole for monitoring
jconsole localhost:7199

# JMX metrics to monitor:
# - Read/Write latency
# - Heap memory usage
# - Thread pool stats
# - Compaction metrics`,
        },
      ],
    },
    {
      title: 'Cassandra Troubleshooting',
      commands: [
        {
          command: 'Common Issues',
          description: 'Diagnose common problems',
          usage: 'Troubleshooting guide',
          example: `Common Issues:
1. High read latency
   - Check compaction: nodetool compactionstats
   - Check cache hit rates
   - Review query patterns

2. Write timeouts
   - Check disk space: df -h
   - Check compaction backlog
   - Review write consistency level

3. Node down
   - Check logs: /var/log/cassandra/system.log
   - Check network connectivity
   - Check seed node configuration

4. Schema disagreement
   - Check schema versions: nodetool describecluster
   - Restart nodes if needed`,
        },
        {
          command: 'Log Analysis',
          description: 'Analyze Cassandra logs',
          usage: 'Log file locations',
          example: `# Log locations
/var/log/cassandra/system.log    # General system logs
/var/log/cassandra/debug.log     # Debug information
/var/log/cassandra/gc.log        # Garbage collection logs

# Common log patterns
grep ERROR /var/log/cassandra/system.log
grep WARN /var/log/cassandra/system.log
grep "Read timeout" /var/log/cassandra/system.log

# Monitor logs in real-time
tail -f /var/log/cassandra/system.log`,
        },
        {
          command: 'Performance Issues',
          description: 'Diagnose performance problems',
          usage: 'Performance troubleshooting',
          example: `# Performance diagnostics
# Check system resources
top
iostat -x 1
free -h

# Check Cassandra metrics
nodetool tablestats
nodetool tpstats
nodetool cfstats

# Check for hotspots
SELECT * FROM system.large_rows
WHERE keyspace_name = 'myapp';

# Check for wide rows
SELECT * FROM system.large_partitions
WHERE keyspace_name = 'myapp';`,
        },
        {
          command: 'Recovery Procedures',
          description: 'Recover from failures',
          usage: 'Disaster recovery',
          example: `# Node recovery
1. Identify failed node
2. Replace hardware if needed
3. Install Cassandra
4. Configure with same settings
5. Start with -Dcassandra.join_ring=false
6. Stream data from other nodes
7. Enable ring: nodetool enablebinary

# Data recovery
1. Stop Cassandra
2. Restore from snapshots
3. Run nodetool repair
4. Verify data integrity

# Cluster recovery
1. Check cluster status: nodetool status
2. Fix schema disagreements
3. Run repair on all nodes
4. Monitor replication`,
        },
      ],
    },
    {
      title: 'Cassandra Advanced Features',
      commands: [
        {
          command: 'Counter Tables',
          description: 'Use counter columns',
          usage: 'Counter data type',
          example: `-- Create counter table
CREATE TABLE page_views (
  page_id TEXT PRIMARY KEY,
  views COUNTER,
  unique_visitors COUNTER
);

-- Increment counter
UPDATE page_views 
SET views = views + 1 
WHERE page_id = 'home';

-- Batch counter updates
BEGIN UNLOGGED BATCH
  UPDATE page_views SET views = views + 1 WHERE page_id = 'home';
  UPDATE page_views SET views = views + 1 WHERE page_id = 'about';
APPLY BATCH;

-- Counter limitations:
- Cannot be part of primary key
- Only support increment/decrement
- No TTL support
- Limited to 64-bit signed integers`,
        },
        {
          command: 'Lightweight Transactions',
          description: 'Compare-and-set operations',
          usage: 'IF clause for consistency',
          example: `-- Conditional insert
INSERT INTO users (user_id, username) 
VALUES (uuid(), 'john') 
IF NOT EXISTS;

-- Conditional update
UPDATE users 
SET email = 'new@example.com' 
WHERE user_id = uuid() 
IF email = 'old@example.com';

-- Conditional delete
DELETE FROM users 
WHERE user_id = uuid() 
IF username = 'john';

-- Check LWT result
SELECT * FROM users WHERE user_id = uuid();`,
        },
        {
          command: 'User-Defined Functions',
          description: 'Create custom functions',
          usage: 'CREATE FUNCTION statement',
          example: `-- Create function
CREATE OR REPLACE FUNCTION state_group(state TEXT)
RETURNS NULL TEXT
LANGUAGE java AS
  'return state.equalsIgnoreCase("CA") || state.equalsIgnoreCase("NY") ? "large" : "small";';

-- Use function in query
SELECT state_group(state) as size FROM users;

-- Create aggregate function
CREATE OR REPLACE FUNCTION avg_state(state TEXT)
RETURNS NULL DOUBLE
LANGUAGE java AS
  'double sum = 0; int count = 0; for (Object o : state) { sum += ((String)o).length(); count++; } return sum / count;';`,
        },
        {
          command: 'Triggers',
          description: 'Create database triggers',
          usage: 'CREATE TRIGGER statement',
          example: `-- Create trigger class (Java)
public class AuditTrigger implements ITrigger {
  public Collection<Mutation> augment(Partition partition) {
    // Add audit logic
    return mutations;
  }
}

-- Create trigger
CREATE TRIGGER audit_trigger ON users 
USING 'com.example.AuditTrigger';

-- Drop trigger
DROP TRIGGER audit_trigger ON users;`,
        },
        {
          command: 'Graph Database',
          description: 'Use DataStax Graph',
          usage: 'Graph database features',
          example: `-- Create graph schema
CREATE KEYSPACE IF NOT EXISTS graph_example 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

-- Create vertex label
CREATE TABLE IF NOT EXISTS graph_example.person (
  id UUID PRIMARY KEY,
  name TEXT,
  age INT
);

-- Create edge label
CREATE TABLE IF NOT EXISTS graph_example.knows (
  from_id UUID,
  to_id UUID,
  since TIMESTAMP,
  PRIMARY KEY (from_id, to_id)
);`,
        },
        {
          command: 'Search Integration',
          description: 'Integrate with search engines',
          usage: 'DSE Search setup',
          example: `-- Create search index
CREATE CUSTOM INDEX ON users (username) 
USING 'com.datastax.bdp.cassandra.index.solr.SolrIndex';

-- Search query
SELECT * FROM users 
WHERE solr_query = 'username:john* AND email:*@example.com';

-- Configure search options
ALTER TABLE users 
WITH dclocal_read_repair_chance = 0.0
AND speculative_retry = 'NONE';`,
        },
      ],
    },
    {
      title: 'Cassandra Best Practices',
      commands: [
        {
          command: 'Data Modeling Best Practices',
          description: 'Guidelines for data modeling',
          usage: 'Modeling principles',
          example: `Data Modeling Best Practices:
1. Model queries, not data
2. Denormalize for performance
3. Use appropriate partition keys
4. Limit partition size (under 100MB)
5. Avoid hot partitions
6. Use collections wisely
7. Consider time series patterns
8. Plan for growth`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Performance optimization guidelines',
          usage: 'Performance tips',
          example: `Performance Best Practices:
1. Use appropriate consistency levels
2. Batch operations when possible
3. Use prepared statements
4. Monitor compaction
5. Tune JVM settings
6. Use SSD storage
7. Configure proper caching
8. Avoid ALLOW FILTERING`,
        },
        {
          command: 'Operations Best Practices',
          description: 'Operational guidelines',
          usage: 'Operations tips',
          example: `Operations Best Practices:
1. Regular repairs (nodetool repair)
2. Monitor disk space
3. Backup regularly
4. Test disaster recovery
5. Monitor performance metrics
6. Keep software updated
7. Document architecture
8. Plan capacity`,
        },
        {
          command: 'Security Best Practices',
          description: 'Security guidelines',
          usage: 'Security tips',
          example: `Security Best Practices:
1. Enable authentication
2. Use SSL/TLS encryption
3. Implement RBAC
4. Network segmentation
5. Regular security audits
6. Monitor access logs
7. Encrypt sensitive data
8. Keep systems patched`,
        },
      ],
    },
  ],
};
