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
          command: 'Cassandra Introduction',
          description: 'Understanding Cassandra concepts and architecture',
          usage: 'Basic Cassandra terminology and concepts',
          example: `# Apache Cassandra is a distributed NoSQL database

======== Key Concepts ==========
# Distributed Database: Data distributed across multiple nodes
# Decentralized: No single point of failure
# Linear Scalability: Add nodes to increase throughput
# High Availability: Replication ensures data availability
# Tunable Consistency: Balance between consistency and performance
# Masterless Architecture: All nodes are equal
# Peer-to-Peer: No master-slave architecture
# Multi-Data Center Replication: Cross-datacenter replication

======== Architecture Benefits ==========
# No Single Point of Failure: No master node
# Horizontal Scalability: Linear performance increase
# Geographic Distribution: Multi-region deployment
- Active-active replication
- Local data access
- Disaster recovery
# High Write Performance: Optimized for write-heavy workloads
# Flexible Schema: Schema-less design
# Always On: Continuous availability during maintenance
# Fault Tolerance: Automatic failover and recovery

======== Cassandra Components ==========
# Nodes: Individual servers in the cluster
# Data Centers: Logical grouping of nodes
# Clusters: Collection of data centers
# Keyspaces: Namespace for tables (similar to databases)
# Tables: Data containers with columns
# Partitions: Data distribution units
# Replicas: Copies of data across nodes
# Snitches: Network topology awareness
# Commit Log: Write-ahead log for durability
# Memtables: In-memory data structures
# SSTables: Immutable sorted string tables`,
        },
        {
          command: 'Installation and Setup',
          description: 'Install Cassandra using different methods',
          usage: 'Binary installation, Docker, cloud deployment',
          example: `# Cassandra Installation Options

======== Binary Installation ==========
# Download Cassandra
wget https://downloads.apache.org/cassandra/4.1.0/apache-cassandra-4.1.0-bin.tar.gz

# Extract and install
tar -xzf apache-cassandra-4.1.0-bin.tar.gz
sudo mv apache-cassandra-4.1.0 /opt/cassandra
sudo chown -R $USER:$USER /opt/cassandra

# Set environment variables
echo 'export CASSANDRA_HOME=/opt/cassandra' >> ~/.bashrc
echo 'export PATH=$PATH:$CASSANDRA_HOME/bin' >> ~/.bashrc
source ~/.bashrc

# Start Cassandra
cassandra -f

======== Docker Installation ==========
# Pull official image
docker pull cassandra:4.1

# Run single node
docker run --name my-cassandra -p 9042:9042 -d cassandra:4.1

# Run with persistent data
docker run --name my-cassandra \\
  -p 9042:9042 \\
  -v cassandra-data:/var/lib/cassandra \\
  -d cassandra:4.1

# Multi-node cluster with Docker Compose
version: '3.8'
services:
  cassandra1:
    image: cassandra:4.1
    container_name: cassandra1
    ports:
      - "9042:9042"
    environment:
      - CASSANDRA_CLUSTER_NAME=my-cluster
      - CASSANDRA_DC=DC1
      - CASSANDRA_RACK=RAC1
      - CASSANDRA_ENDPOINT_SNITCH=GossipingPropertyFileSnitch
      - CASSANDRA_NUM_TOKENS=256
    volumes:
      - cassandra1-data:/var/lib/cassandra

  cassandra2:
    image: cassandra:4.1
    container_name: cassandra2
    ports:
      - "9043:9042"
    environment:
      - CASSANDRA_CLUSTER_NAME=my-cluster
      - CASSANDRA_DC=DC1
      - CASSANDRA_RACK=RAC1
      - CASSANDRA_ENDPOINT_SNITCH=GossipingPropertyFileSnitch
      - CASSANDRA_SEEDS=cassandra1
      - CASSANDRA_NUM_TOKENS=256
    volumes:
      - cassandra2-data:/var/lib/cassandra
    depends_on:
      - cassandra1

volumes:
  cassandra1-data:
  cassandra2-data:

======== Cloud Installation ==========
# DataStax Astra (Managed Cassandra)
# 1. Sign up at https://astra.datastax.com/
# 2. Create database
# 3. Get connection details
# 4. Connect using drivers

# Amazon Keyspaces (AWS Managed Cassandra)
# 1. Create keyspace in AWS console
# 2. Download SSL certificates
# 3. Configure connection

======== Package Manager Installation ==========
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install cassandra

# CentOS/RHEL
sudo yum install cassandra

# Start service
sudo systemctl start cassandra
sudo systemctl enable cassandra

======== Verification ==========
# Check cluster status
nodetool status

# Check cluster info
nodetool info

# Connect with cqlsh
cqlsh localhost 9042

# Test basic query
SELECT release_version FROM system.local;

# Check ring topology
nodetool describering`,
        },
        {
          command: 'Database Connection',
          description: 'Connect to Cassandra from various tools and languages',
          usage: 'cqlsh, drivers, and connection strings',
          example: `# Cassandra Connection Methods

======== cqlsh Connection ==========
# Connect to local instance
cqlsh

# Connect to specific host and port
cqlsh localhost 9042

# Connect with credentials
cqlsh -u cassandra -p cassandra localhost 9042

# Connect to remote host
cqlsh cassandra.example.com 9042

# Connect with SSL
cqlsh --ssl localhost 9042

# Execute single command
cqlsh -e "DESCRIBE KEYSPACES;"

# Execute from file
cqlsh -f commands.cql

======== Python Connection (DataStax Driver) ==========
# Install driver
pip install cassandra-driver

# Basic connection
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider

# Connect to cluster
cluster = Cluster(['127.0.0.1'], port=9042)
session = cluster.connect()

# Connect with authentication
auth_provider = PlainTextAuthProvider(username='cassandra', password='cassandra')
cluster = Cluster(['127.0.0.1'], auth_provider=auth_provider, port=9042)
session = cluster.connect()

# Connect to multiple nodes
cluster = Cluster(['node1', 'node2', 'node3'], port=9042)
session = cluster.connect()

# Connect with SSL
from cassandra.cluster import Cluster
from ssl import SSLContext, PROTOCOL_TLSv1_2

ssl_context = SSLContext(PROTOCOL_TLSv1_2)
cluster = Cluster(['127.0.0.1'], ssl_context=ssl_context)
session = cluster.connect()

======== Java Connection (DataStax Driver) ==========
// Maven dependency
<dependency>
    <groupId>com.datastax.oss</groupId>
    <artifactId>java-driver-core</artifactId>
    <version>4.13.0</version>
</dependency>

// Basic connection
import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.CqlSessionBuilder;

CqlSession session = CqlSession.builder()
    .addContactPoint(new InetSocketAddress("127.0.0.1", 9042))
    .withLocalDatacenter("datacenter1")
    .build();

// Connect with authentication
CqlSession session = CqlSession.builder()
    .addContactPoint(new InetSocketAddress("127.0.0.1", 9042))
    .withAuthCredentials("cassandra", "cassandra")
    .withLocalDatacenter("datacenter1")
    .build();

// Connect with SSL
CqlSession session = CqlSession.builder()
    .addContactPoint(new InetSocketAddress("127.0.0.1", 9042))
    .withLocalDatacenter("datacenter1")
    .withSslContext(SSLContext.getDefault())
    .build();

======== Node.js Connection ==========
# Install driver
npm install cassandra-driver

# Basic connection
const { Client } = require('cassandra-driver');

const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'mykeyspace'
});

await client.connect();

# Connect with authentication
const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  authProvider: new auth.PlainTextAuthProvider('cassandra', 'cassandra'),
  keyspace: 'mykeyspace'
});

# Connect with SSL
const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  sslOptions: {
    rejectUnauthorized: true
  }
});

======== Connection Best Practices ==========
# Use connection pooling
# Configure retry policies
# Set appropriate timeouts
# Use load balancing policies
# Monitor connection health
# Handle failover gracefully

# Python connection with configuration
from cassandra.cluster import Cluster
from cassandra.policies import DCAwareRoundRobinPolicy
from cassandra.query import dict_factory

cluster = Cluster(
    ['node1', 'node2', 'node3'],
    load_balancing_policy=DCAwareRoundRobinPolicy(local_dc='datacenter1'),
    row_factory=dict_factory
)
session = cluster.connect()

# Java connection with configuration
CqlSession session = CqlSession.builder()
    .addContactPoint(new InetSocketAddress("127.0.0.1", 9042))
    .withLocalDatacenter("datacenter1")
    .withConfigLoader(DriverConfigLoader.fromClasspath("application.conf"))
    .build();`,
        },
        {
          command: 'Basic Database Operations',
          description: 'Essential database management commands',
          usage: 'Keyspace creation, table management, basic queries',
          example: `# Basic Database Operations in Cassandra

======== Keyspace Management ==========
# Create keyspace with simple strategy
CREATE KEYSPACE mykeyspace 
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

# Create keyspace with network topology strategy
CREATE KEYSPACE distributed_ks 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3,
  'datacenter2': 2
};

# Create keyspace with durable writes
CREATE KEYSPACE critical_ks 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3
} AND DURABLE_WRITES = true;

# Use keyspace
USE mykeyspace;

# List keyspaces
DESCRIBE KEYSPACES;

# Describe keyspace
DESCRIBE KEYSPACE mykeyspace;

# Drop keyspace
DROP KEYSPACE IF EXISTS mykeyspace;

======== Table Creation ==========
# Simple table
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT,
  created_at TIMESTAMP
);

# Table with composite key
CREATE TABLE orders (
  customer_id UUID,
  order_id TIMEUUID,
  order_date TIMESTAMP,
  total_amount DECIMAL,
  status TEXT,
  PRIMARY KEY (customer_id, order_id)
) WITH CLUSTERING ORDER BY (order_id DESC);

# Table with static columns
CREATE TABLE user_settings (
  user_id UUID,
  setting_name TEXT,
  setting_value TEXT,
  email TEXT STATIC,
  created_at TIMESTAMP STATIC,
  PRIMARY KEY (user_id, setting_name)
);

# Table with custom options
CREATE TABLE products (
  product_id UUID PRIMARY KEY,
  name TEXT,
  price DECIMAL,
  category TEXT,
  description TEXT
) WITH 
  bloom_filter_fp_chance = 0.01,
  caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'},
  comment = 'Products table',
  compaction = {'class': 'LeveledCompactionStrategy'},
  compression = {'sstable_compression': 'LZ4Compressor'},
  dclocal_read_repair_chance = 0.1,
  default_time_to_live = 864000,
  gc_grace_seconds = 864000,
  max_index_interval = 2048,
  memtable_flush_period_in_ms = 0,
  min_index_interval = 128,
  read_repair_chance = 0.0,
  speculative_retry = '99PERCENTILE';

======== Basic CRUD Operations ==========
# Insert data
INSERT INTO users (user_id, username, email, created_at)
VALUES (uuid(), 'john_doe', 'john@example.com', toTimestamp(now()));

# Insert with USING clause
INSERT INTO users (user_id, username, email)
VALUES (uuid(), 'jane_doe', 'jane@example.com')
USING TTL 86400 AND TIMESTAMP 1234567890000;

# Select data
SELECT * FROM users;
SELECT username, email FROM users;
SELECT * FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

# Update data
UPDATE users 
SET email = 'newemail@example.com' 
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

# Update with IF condition
UPDATE users 
SET email = 'updated@example.com' 
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000
IF email = 'old@example.com';

# Delete data
DELETE FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

# Delete specific columns
DELETE email FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

# Delete with TTL
DELETE FROM users USING TIMESTAMP 1234567890000 
WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

======== Table Management ==========
# Describe table
DESCRIBE TABLE users;
DESCRIBE mykeyspace.users;

# Alter table - add column
ALTER TABLE users ADD last_login TIMESTAMP;

# Alter table - drop column
ALTER TABLE users DROP last_login;

# Alter table - rename column
ALTER TABLE users RENAME username TO user_name;

# Truncate table
TRUNCATE users;

# Drop table
DROP TABLE IF EXISTS users;

# Create index
CREATE INDEX ON users (email);
CREATE INDEX ON users (username);

# Create custom index
CREATE INDEX user_email_idx ON users (email);

# Drop index
DROP INDEX IF EXISTS user_email_idx;`,
        },
      ],
    },
    {
      title: 'Basic Data Operations',
      commands: [
        {
          command: 'Data Modeling Patterns',
          description: 'Design effective data models for Cassandra',
          usage: 'Denormalization, query-first design, partitioning',
          example: `# Data Modeling Patterns in Cassandra

======== Query-First Design ==========
# Bad: Normalize like relational database
# Users table
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT
);

# Orders table  
CREATE TABLE orders (
  order_id UUID PRIMARY KEY,
  user_id UUID,
  total_amount DECIMAL
);

# Problem: Can't query orders by user efficiently

# Good: Design for queries
CREATE TABLE users_by_id (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT,
  created_at TIMESTAMP
);

CREATE TABLE orders_by_user (
  user_id UUID,
  order_id TIMEUUID,
  order_date TIMESTAMP,
  total_amount DECIMAL,
  status TEXT,
  PRIMARY KEY (user_id, order_id)
) WITH CLUSTERING ORDER BY (order_id DESC);

CREATE TABLE users_by_username (
  username TEXT PRIMARY KEY,
  user_id UUID,
  email TEXT
);

======== One-to-Many Relationships ==========
# User and their addresses
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  username TEXT,
  email TEXT
);

CREATE TABLE user_addresses (
  user_id UUID,
  address_id UUID,
  street TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  is_primary BOOLEAN,
  PRIMARY KEY (user_id, address_id)
);

# Query examples
SELECT * FROM user_addresses WHERE user_id = ?;
SELECT * FROM user_addresses WHERE user_id = ? AND address_id = ?;

======== Many-to-Many Relationships ==========
# Users and groups (bidirectional)
CREATE TABLE user_groups (
  user_id UUID,
  group_id UUID,
  joined_at TIMESTAMP,
  role TEXT,
  PRIMARY KEY (user_id, group_id)
);

CREATE TABLE group_users (
  group_id UUID,
  user_id UUID,
  joined_at TIMESTAMP,
  role TEXT,
  PRIMARY KEY (group_id, user_id)
);

# Query user's groups
SELECT * FROM user_groups WHERE user_id = ?;

# Query group's users
SELECT * FROM group_users WHERE group_id = ?;

======== Time Series Data ==========
# Sensor readings by time
CREATE TABLE sensor_readings (
  sensor_id UUID,
  timestamp TIMESTAMP,
  reading_value DOUBLE,
  unit TEXT,
  PRIMARY KEY (sensor_id, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);

# Time bucketed for better performance
CREATE TABLE sensor_readings_hourly (
  sensor_id UUID,
  hour_bucket TIMESTAMP,
  reading_id TIMEUUID,
  reading_value DOUBLE,
  unit TEXT,
  PRIMARY KEY ((sensor_id, hour_bucket), reading_id)
) WITH CLUSTERING ORDER BY (reading_id DESC);

# Insert time bucketed data
INSERT INTO sensor_readings_hourly (
  sensor_id, hour_bucket, reading_id, reading_value, unit
) VALUES (
  ?, 
  toTimestamp(dateOf(now())), -- Start of current hour
  now(),
  25.5,
  'celsius'
);

======== Wide Rows Pattern ==========
# User activity feed
CREATE TABLE user_activity (
  user_id UUID,
  activity_id TIMEUUID,
  activity_type TEXT,
  content TEXT,
  created_at TIMESTAMP,
  PRIMARY KEY (user_id, activity_id)
) WITH CLUSTERING ORDER BY (activity_id DESC);

# Limit row size to prevent wide row issues
CREATE TABLE user_activity_partitioned (
  user_id UUID,
  month_bucket TEXT,
  activity_id TIMEUUID,
  activity_type TEXT,
  content TEXT,
  created_at TIMESTAMP,
  PRIMARY KEY ((user_id, month_bucket), activity_id)
) WITH CLUSTERING ORDER BY (activity_id DESC);

# Insert with month bucket
INSERT INTO user_activity_partitioned (
  user_id, month_bucket, activity_id, activity_type, content, created_at
) VALUES (
  ?,
  toText(now(), 'yyyy-MM'),
  now(),
  'post',
  'Hello world!',
  now()
);

======== Materialized Views (Cassandra 3.0+) ==========
# Base table
CREATE TABLE orders (
  order_id UUID PRIMARY KEY,
  customer_id UUID,
  order_date TIMESTAMP,
  total_amount DECIMAL,
  status TEXT
);

# Materialized view for querying by status
CREATE MATERIALIZED VIEW orders_by_status AS
  SELECT order_id, customer_id, order_date, total_amount, status
  FROM orders
  WHERE status IS NOT NULL AND order_id IS NOT NULL
  PRIMARY KEY (status, order_id);

# Query by status
SELECT * FROM orders_by_status WHERE status = 'shipped';

======== Counter Tables ==========
# Page view counters
CREATE TABLE page_views (
  url TEXT,
  date_bucket DATE,
  view_count COUNTER,
  PRIMARY KEY (url, date_bucket)
);

# Increment counter
UPDATE page_views 
SET view_count = view_count + 1 
WHERE url = '/home' AND date_bucket = '2024-01-01';

# User-specific counters
CREATE TABLE user_stats (
  user_id UUID PRIMARY KEY,
  login_count COUNTER,
  post_count COUNTER,
  comment_count COUNTER
);

# Batch counter updates
BEGIN BATCH
  UPDATE user_stats SET login_count = login_count + 1 WHERE user_id = ?;
  UPDATE user_stats SET post_count = post_count + 1 WHERE user_id = ?;
APPLY BATCH;

======== Collection Types ==========
# User with tags and preferences
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY,
  username TEXT,
  tags SET<TEXT>,
  preferences MAP<TEXT, TEXT>,
  phone_numbers LIST<TEXT>,
  last_login TIMESTAMP
);

# Insert with collections
INSERT INTO user_profiles (
  user_id, username, tags, preferences, phone_numbers
) VALUES (
  uuid(),
  'john_doe',
  {'developer', 'python', 'cassandra'},
  {'theme': 'dark', 'language': 'en'},
  ['555-0101', '555-0102']
);

# Update collections
UPDATE user_profiles 
SET tags = tags + {'new_tag'} 
WHERE user_id = ?;

UPDATE user_profiles 
SET preferences['theme'] = 'light' 
WHERE user_id = ?;

UPDATE user_profiles 
SET phone_numbers = phone_numbers + ['555-0103'] 
WHERE user_id = ?;

# Query collections
SELECT tags FROM user_profiles WHERE user_id = ?;
SELECT preferences['theme'] FROM user_profiles WHERE user_id = ?;
SELECT phone_numbers[0] FROM user_profiles WHERE user_id = ?;`,
        },
        {
          command: 'Query Operations',
          description: 'Advanced querying techniques and patterns',
          usage: 'SELECT statements, filtering, pagination, and optimization',
          example: `# Query Operations in Cassandra

======== Basic SELECT Queries ==========
# Select all columns
SELECT * FROM users;

# Select specific columns
SELECT user_id, username, email FROM users;

# Select with WHERE clause (must include partition key)
SELECT * FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000;

# Select with composite key
SELECT * FROM orders_by_user 
WHERE customer_id = ? AND order_id > ?;

# Select with clustering column range
SELECT * FROM orders_by_user 
WHERE customer_id = ? 
  AND order_date >= '2024-01-01 00:00:00' 
  AND order_date < '2024-02-01 00:00:00';

# Select with IN clause (use carefully)
SELECT * FROM users WHERE user_id IN (?, ?, ?);

======== Advanced Filtering ==========
# Allow filtering (use sparingly - performance impact)
SELECT * FROM users WHERE email = ? ALLOW FILTERING;

# Secondary index queries
SELECT * FROM users WHERE email = ?;

# Token function for partition key range
SELECT * FROM users 
WHERE token(user_id) > token(?) 
  AND token(user_id) < token(?);

# Complex conditions on clustering columns
SELECT * FROM orders_by_user 
WHERE customer_id = ? 
  AND order_date = '2024-01-01 00:00:00'
  AND total_amount > 100;

======== Aggregation Functions ==========
# COUNT
SELECT COUNT(*) FROM users;
SELECT COUNT(user_id) FROM users;

# COUNT with WHERE
SELECT COUNT(*) FROM orders_by_user WHERE customer_id = ?;

# MAX, MIN, SUM, AVG
SELECT MAX(total_amount) FROM orders_by_user WHERE customer_id = ?;
SELECT MIN(total_amount) FROM orders_by_user WHERE customer_id = ?;
SELECT SUM(total_amount) FROM orders_by_user WHERE customer_id = ?;
SELECT AVG(total_amount) FROM orders_by_user WHERE customer_id = ?;

# DISTINCT
SELECT DISTINCT status FROM orders_by_user;
SELECT DISTINCT category FROM products;

======== Pagination ==========
# Manual pagination with LIMIT
SELECT * FROM orders_by_user 
WHERE customer_id = ? 
LIMIT 10;

# Automatic paging with driver
# Python example
from cassandra.query import SimpleStatement

query = "SELECT * FROM orders_by_user WHERE customer_id = %s"
statement = SimpleStatement(query, fetch_size=10)

results = session.execute(statement, [customer_id])
for row in results:
    print(row)

# Java example
ResultSet results = session.execute(
    SimpleStatement.builder("SELECT * FROM orders_by_user WHERE customer_id = ?")
        .setPageSize(10)
        .build(),
    customer_id
);

for (Row row : results) {
    System.out.println(row);
}

======== Sorting and Ordering ==========
# Clustering order (defined in table creation)
# Already sorted by order_id DESC
SELECT * FROM orders_by_user WHERE customer_id = ?;

# Override clustering order (limited)
SELECT * FROM orders_by_user 
WHERE customer_id = ? 
ORDER BY order_id ASC; -- Only if defined in table

======== Collection Queries ==========
# CONTAINS for sets and lists
SELECT * FROM user_profiles 
WHERE tags CONTAINS 'developer';

SELECT * FROM user_profiles 
WHERE phone_numbers CONTAINS '555-0101';

# CONTAINS KEY for maps
SELECT * FROM user_profiles 
WHERE preferences CONTAINS KEY 'theme';

# Index on collection elements
CREATE INDEX ON user_profiles (tags);
CREATE INDEX ON user_profiles (preferences);

======== JSON Operations (Cassandra 2.2+) ==========
# Table with JSON column
CREATE TABLE events (
  event_id UUID PRIMARY KEY,
  event_data TEXT,
  created_at TIMESTAMP
);

# Insert JSON
INSERT INTO events (event_id, event_data, created_at)
VALUES (uuid(), '{"type": "click", "page": "/home"}', now());

# Query JSON
SELECT event_data FROM events WHERE event_id = ?;

# JSON functions (Cassandra 3.0+)
SELECT JSON event_data FROM events WHERE event_id = ?;
SELECT event_data.type FROM events WHERE event_id = ?;

======== TTL and Expiration ==========
# Query TTL
SELECT TTL(email) FROM users WHERE user_id = ?;

# Query writetime
SELECT WRITETIME(email) FROM users WHERE user_id = ?;

# Update with TTL
INSERT INTO users (user_id, email) 
VALUES (?, ?) 
USING TTL 86400;

======== Batch Operations ==========
# Logged batch (atomic)
BEGIN LOGGED BATCH
  INSERT INTO users (user_id, username) VALUES (?, ?);
  INSERT INTO user_profiles (user_id, tags) VALUES (?, ?);
APPLY BATCH;

# Unlogged batch (non-atomic, faster)
BEGIN UNLOGGED BATCH
  INSERT INTO user_activity (user_id, activity_id, content) VALUES (?, ?, ?);
  INSERT INTO user_activity (user_id, activity_id, content) VALUES (?, ?, ?);
APPLY BATCH;

# Conditional batch
BEGIN BATCH
  INSERT INTO counters (id, value) VALUES (?, ?) IF NOT EXISTS;
  UPDATE counters SET value = value + ? WHERE id = ?;
APPLY BATCH;

======== Optimization Tips ==========
# Use appropriate data types
# Avoid ALLOW FILTERING when possible
# Design tables for your queries
# Use composite keys for range queries
# Consider materialized views for alternative access patterns
# Use prepared statements for better performance
# Monitor and tune compaction strategies
# Use appropriate TTL for time-based data`,
        },
        {
          command: 'Data Types and Functions',
          description: 'Comprehensive guide to Cassandra data types and functions',
          usage: 'Data type selection, built-in functions, and type conversions',
          example: `# Data Types and Functions in Cassandra

======== Numeric Types ==========
# INT (32-bit integer)
CREATE TABLE metrics (
  id UUID PRIMARY KEY,
  count INT,
  temperature INT
);

# BIGINT (64-bit integer)
CREATE TABLE large_numbers (
  id UUID PRIMARY KEY,
  population BIGINT,
  revenue BIGINT
);

# DECIMAL (variable precision)
CREATE TABLE financial (
  id UUID PRIMARY KEY,
  price DECIMAL,
  balance DECIMAL
);

# DOUBLE (64-bit floating point)
CREATE TABLE measurements (
  id UUID PRIMARY KEY,
  value DOUBLE,
  accuracy DOUBLE
);

# FLOAT (32-bit floating point)
CREATE TABLE sensor_data (
  id UUID PRIMARY KEY,
  reading FLOAT,
  calibration FLOAT
);

# VARINT (variable precision integer)
CREATE TABLE big_integers (
  id UUID PRIMARY KEY,
  hash VARINT,
  signature VARINT
);

======== Text and Binary Types ==========
# TEXT (UTF-8 string)
CREATE TABLE articles (
  id UUID PRIMARY KEY,
  title TEXT,
  content TEXT,
  author TEXT
);

# VARCHAR (UTF-8 string with length limit)
CREATE TABLE short_strings (
  id UUID PRIMARY KEY,
  code VARCHAR(10),
  name VARCHAR(100)
);

# BLOB (binary large object)
CREATE TABLE files (
  id UUID PRIMARY KEY,
  filename TEXT,
  content BLOB,
  checksum BLOB
);

# ASCII (ASCII string)
CREATE TABLE legacy_data (
  id UUID PRIMARY KEY,
  code ASCII,
  description ASCII
);

======== Date and Time Types ==========
# TIMESTAMP (64-bit timestamp)
CREATE TABLE events (
  id UUID PRIMARY KEY,
  event_time TIMESTAMP,
  created_at TIMESTAMP
);

# DATE (32-bit date)
CREATE TABLE schedules (
  id UUID PRIMARY KEY,
  event_date DATE,
  reminder_date DATE
);

# TIME (nanosecond precision time)
CREATE TABLE appointments (
  id UUID PRIMARY KEY,
  start_time TIME,
  end_time TIME
);

# Duration functions
SELECT dateof(now()) as current_date;
SELECT totimestamp(now()) as current_timestamp;
SELECT minTimeuuid('2024-01-01') as min_uuid;
SELECT maxTimeuuid('2024-12-31') as max_uuid;

======== Collection Types ==========
# LIST (ordered collection)
CREATE TABLE user_posts (
  user_id UUID PRIMARY KEY,
  posts LIST<TEXT>
);

# SET (unordered unique collection)
CREATE TABLE user_tags (
  user_id UUID PRIMARY KEY,
  tags SET<TEXT>
);

# MAP (key-value pairs)
CREATE TABLE user_preferences (
  user_id UUID PRIMARY KEY,
  settings MAP<TEXT, TEXT>
);

# Nested collections
CREATE TABLE complex_data (
  id UUID PRIMARY KEY,
  matrix MAP<INT, LIST<DOUBLE>>,
  categories SET<TEXT>
);

# Collection operations
UPDATE user_posts SET posts = posts + ['new post'] WHERE user_id = ?;
UPDATE user_posts SET posts = posts - ['old post'] WHERE user_id = ?;
UPDATE user_posts SET posts[0] = 'updated post' WHERE user_id = ?;

UPDATE user_tags SET tags = tags + {'new_tag'} WHERE user_id = ?;
UPDATE user_tags SET tags = tags - {'old_tag'} WHERE user_id = ?;

UPDATE user_preferences SET settings['theme'] = 'dark' WHERE user_id = ?;
DELETE settings['old_setting'] FROM user_preferences WHERE user_id = ?;

======== Special Types ==========
# UUID (universally unique identifier)
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  username TEXT
);

# TIMEUUID (version 1 UUID with timestamp)
CREATE TABLE events (
  event_id TIMEUUID PRIMARY KEY,
  event_type TEXT
);

# INET (IP address)
CREATE TABLE connections (
  id UUID PRIMARY KEY,
  ip_address INET,
  port INT
);

# BOOLEAN (true/false)
CREATE TABLE flags (
  id UUID PRIMARY KEY,
  is_active BOOLEAN,
  is_verified BOOLEAN
);

# COUNTER (64-bit signed integer)
CREATE TABLE statistics (
  id UUID PRIMARY KEY,
  view_count COUNTER,
  like_count COUNTER
);

======== JSON Support (Cassandra 2.2+) ==========
# JSON as TEXT type
CREATE TABLE json_data (
  id UUID PRIMARY KEY,
  data TEXT
);

# Insert JSON
INSERT INTO json_data (id, data) 
VALUES (?, '{"name": "John", "age": 30}');

# Query JSON
SELECT data FROM json_data WHERE id = ?;

# JSON functions (Cassandra 3.0+)
SELECT JSON data FROM json_data WHERE id = ?;
SELECT data.name FROM json_data WHERE id = ?;

======== Built-in Functions ==========
# String functions
SELECT token('hello') as token_value;
SELECT blobAsText(textAsBlob('hello')) as converted;
SELECT dateOf(now()) as current_date;
SELECT minTimeuuid('2024-01-01') as min_uuid;
SELECT maxTimeuuid('2024-12-31') as max_uuid;
SELECT now() as current_time;
SELECT unixTimestamp() as unix_time;
SELECT toDate(now()) as date_only;
SELECT toTimestamp(now()) as timestamp;

# Mathematical functions
SELECT abs(-5) as absolute_value;
SELECT ceil(4.2) as ceiling;
SELECT floor(4.8) as floor;
SELECT round(4.5) as rounded;
SELECT sin(0.5) as sine;
SELECT cos(0.5) as cosine;
SELECT tan(0.5) as tangent;
SELECT exp(1) as exponential;
SELECT log(10) as natural_log;
SELECT log10(100) as base10_log;
SELECT pow(2, 8) as power;
SELECT sqrt(16) as square_root;

# Aggregate functions
SELECT count(*) as total_rows;
SELECT count(column_name) as non_null_count;
SELECT max(column_name) as maximum_value;
SELECT min(column_name) as minimum_value;
SELECT sum(column_name) as sum_value;
SELECT avg(column_name) as average_value;

# Time functions
SELECT dateof(now()) as date_part;
SELECT totimestamp(now()) as timestamp_part;
SELECT unixTimestamp(now()) as unix_timestamp;
SELECT toTimestamp(unixTimestamp()) as from_unix;
SELECT toBlob(now()) as blob_timestamp;
SELECT minTimeuuid('2024-01-01') as min_timeuuid;
SELECT maxTimeuuid('2024-12-31') as max_timeuuid;

======== Type Conversion Functions ==========
# Text to blob
SELECT textAsBlob('hello') as blob_value;

# Blob to text
SELECT blobAsText(textAsBlob('hello')) as text_value;

# Timestamp to date
SELECT toDate(now()) as date_value;

# Date to timestamp
SELECT toTimestamp(dateof(now())) as timestamp_value;

# UUID functions
SELECT uuid() as random_uuid;
SELECT timeuuid() as time_uuid;

======== User-Defined Types (UDTs) ==========
# Create UDT
CREATE TYPE address (
  street TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT
);

CREATE TYPE phone_number (
  type TEXT,
  number TEXT
);

# Use UDT in tables
CREATE TABLE contacts (
  id UUID PRIMARY KEY,
  name TEXT,
  address FROZEN<address>,
  phones LIST<FROZEN<phone_number>>
);

# Insert with UDT
INSERT INTO contacts (id, name, address, phones)
VALUES (
  uuid(),
  'John Doe',
  {street: '123 Main St', city: 'Anytown', state: 'CA', zip_code: '12345'},
  [{type: 'home', number: '555-0101'}, {type: 'work', number: '555-0102'}]
);

# Query UDT fields
SELECT name, address.city FROM contacts WHERE id = ?;
SELECT phones[0].number FROM contacts WHERE id = ?;

======== Type Selection Guidelines ==========
# Use INT for small integers (-2^31 to 2^31-1)
# Use BIGINT for large integers (-2^63 to 2^63-1)
# Use DECIMAL for precise financial calculations
# Use DOUBLE for scientific calculations
# Use TEXT for variable-length strings
# Use VARCHAR for fixed-length strings
# Use TIMESTAMP for datetime values
# Use DATE for date-only values
# Use UUID for unique identifiers
# Use TIMEUUID for time-based identifiers
# Use BLOB for binary data
# Use collections for one-to-many relationships
# Use UDTs for structured data
# Use COUNTER only for counting operations`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Data Operations',
      commands: [
        {
          command: 'Batch Operations and Transactions',
          description: 'Atomic operations and transaction management',
          usage: 'BATCH statements, lightweight transactions, consistency levels',
          example: `# Batch Operations and Transactions in Cassandra

======== Logged Batches ==========
# Atomic batch - all or nothing
BEGIN LOGGED BATCH
  INSERT INTO users (user_id, username, email) 
  VALUES (uuid(), 'john_doe', 'john@example.com');
  
  INSERT INTO user_profiles (user_id, bio, created_at) 
  VALUES (uuid(), 'Software Developer', now());
  
  INSERT INTO user_activity (user_id, activity_id, activity_type) 
  VALUES (uuid(), now(), 'registration');
APPLY BATCH;

# Batch with different operations
BEGIN LOGGED BATCH
  INSERT INTO orders (order_id, customer_id, total_amount) 
  VALUES (uuid(), ?, 99.99);
  
  UPDATE user_stats 
  SET order_count = order_count + 1 
  WHERE user_id = ?;
  
  INSERT INTO order_items (order_id, product_id, quantity) 
  VALUES (?, ?, 1);
APPLY BATCH;

# Conditional batch
BEGIN LOGGED BATCH
  INSERT INTO inventory (product_id, quantity) 
  VALUES (?, 100) IF NOT EXISTS;
  
  UPDATE inventory 
  SET quantity = quantity - 1 
  WHERE product_id = ? IF quantity > 0;
APPLY BATCH;

======== Unlogged Batches ==========
# Non-atomic but faster batch
BEGIN UNLOGGED BATCH
  INSERT INTO events (event_id, event_type, data) 
  VALUES (uuid(), 'click', '{"page": "/home"}');
  
  INSERT INTO events (event_id, event_type, data) 
  VALUES (uuid(), 'view', '{"page": "/products"}');
  
  INSERT INTO events (event_id, event_type, data) 
  VALUES (uuid(), 'search', '{"query": "laptop"}');
APPLY BATCH;

# Bulk insert with unlogged batch
BEGIN UNLOGGED BATCH
  INSERT INTO metrics (metric_id, name, value, timestamp) 
  VALUES (uuid(), 'cpu_usage', 75.5, now());
  
  INSERT INTO metrics (metric_id, name, value, timestamp) 
  VALUES (uuid(), 'memory_usage', 82.3, now());
  
  INSERT INTO metrics (metric_id, name, value, timestamp) 
  VALUES (uuid(), 'disk_usage', 45.7, now());
APPLY BATCH;

======== Lightweight Transactions ==========
# Compare-and-set for inventory
INSERT INTO inventory (product_id, quantity, version) 
VALUES (?, 100, 1) IF NOT EXISTS;

UPDATE inventory 
SET quantity = quantity - 1, version = version + 1 
WHERE product_id = ? 
IF quantity > 0;

# Conditional update with multiple conditions
UPDATE user_accounts 
SET balance = balance - 50, last_transaction = now() 
WHERE user_id = ? 
IF balance >= 50 AND status = 'active';

# Delete with condition
DELETE FROM user_sessions 
WHERE user_id = ? AND session_id = ? 
IF expires_at > now();

# Check transaction outcome
INSERT INTO users (user_id, username) 
VALUES (?, 'john_doe') IF NOT EXISTS;

# Response will include [applied] column
# If [applied] = true, operation succeeded
# If [applied] = false, operation failed

======== Consistency Levels ==========
# Set consistency for individual operations
SELECT * FROM users WHERE user_id = ? USING CONSISTENCY QUORUM;

INSERT INTO users (user_id, username) 
VALUES (?, 'john_doe') 
USING CONSISTENCY QUORUM AND TTL 86400;

UPDATE users SET email = ? 
WHERE user_id = ? 
USING CONSISTENCY LOCAL_QUORUM;

DELETE FROM users WHERE user_id = ? 
USING CONSISTENCY ALL;

# Batch with consistency level
BEGIN BATCH USING CONSISTENCY QUORUM
  INSERT INTO orders (order_id, customer_id, total_amount) 
  VALUES (?, ?, 99.99);
  
  UPDATE customer_stats 
  SET total_spent = total_spent + 99.99 
  WHERE customer_id = ?;
APPLY BATCH;

======== Consistency Levels Explained ==========
# ALL - All replicas must respond
# QUORUM - Majority of replicas must respond
# LOCAL_QUORUM - Majority of replicas in local datacenter
# EACH_QUORUM - Majority in each datacenter
# ONE - At least one replica responds
# LOCAL_ONE - At least one local replica responds
# TWO - At least two replicas respond
# THREE - At least three replicas respond
# SERIAL - For lightweight transactions
# LOCAL_SERIAL - Serial consistency in local DC

======== Driver-Level Transactions ==========
# Python transaction example
from cassandra.query import BatchStatement, SimpleStatement

# Prepare statements
insert_user = session.prepare(
    "INSERT INTO users (user_id, username, email) VALUES (?, ?, ?)"
)

insert_profile = session.prepare(
    "INSERT INTO user_profiles (user_id, bio) VALUES (?, ?)"
)

# Create batch
batch = BatchStatement(consistency_level=ConsistencyLevel.QUORUM)
batch.add(insert_user, (user_id, username, email))
batch.add(insert_profile, (user_id, bio))

# Execute batch
session.execute(batch)

# Java transaction example
import com.datastax.oss.driver.api.core.cql.*;

// Prepare statements
PreparedStatement insertUser = session.prepare(
    "INSERT INTO users (user_id, username, email) VALUES (?, ?, ?)"
);

PreparedStatement insertProfile = session.prepare(
    "INSERT INTO user_profiles (user_id, bio) VALUES (?, ?)"
);

// Create batch
BatchStatement batch = BatchStatement.builder(ConsistencyLevel.QUORUM)
    .addStatement(insertUser.bind()
        .setUuid(0, userId)
        .setString(1, username)
        .setString(2, email))
    .addStatement(insertProfile.bind()
        .setUuid(0, userId)
        .setString(1, bio))
    .build();

// Execute batch
session.execute(batch);

======== Transaction Patterns ==========
# Account transfer pattern
BEGIN BATCH
  UPDATE accounts 
  SET balance = balance - 100 
  WHERE account_id = ? 
  IF balance >= 100;
  
  UPDATE accounts 
  SET balance = balance + 100 
  WHERE account_id = ?;
APPLY BATCH;

# Inventory reservation pattern
BEGIN BATCH
  INSERT INTO reservations (reservation_id, product_id, quantity) 
  VALUES (?, ?, 10) IF NOT EXISTS;
  
  UPDATE inventory 
  SET reserved = reserved + 10, available = available - 10 
  WHERE product_id = ? 
  IF available >= 10;
APPLY BATCH;

# Order fulfillment pattern
BEGIN BATCH
  INSERT INTO orders (order_id, customer_id, status) 
  VALUES (?, ?, 'pending') IF NOT EXISTS;
  
  UPDATE inventory 
  SET quantity = quantity - 1 
  WHERE product_id = ? 
  IF quantity > 0;
  
  UPDATE customer_stats 
  SET order_count = order_count + 1 
  WHERE customer_id = ?;
APPLY BATCH;

======== Error Handling and Retries ==========
# Python retry logic for transactions
from cassandra import ReadTimeout, WriteTimeout, Unavailable
from time import sleep

def execute_with_retry(session, query, params=None, max_retries=3):
    for attempt in range(max_retries):
        try:
            if params:
                return session.execute(query, params)
            else:
                return session.execute(query)
        except (ReadTimeout, WriteTimeout, Unavailable) as e:
            if attempt == max_retries - 1:
                raise
            
            # Exponential backoff
            sleep(2 ** attempt)
        except Exception as e:
            # Don't retry on other exceptions
            raise

# Usage
result = execute_with_retry(
    session, 
    "SELECT * FROM users WHERE user_id = ?", 
    [user_id]
)

# Java retry logic
import com.datastax.oss.driver.api.core.DriverTimeoutException;
import com.datastax.oss.driver.api.core.AllNodesFailedException;

public class RetryHelper {
    public static ResultSet executeWithRetry(
        Session session, 
        Statement statement, 
        int maxRetries
    ) {
        Exception lastException = null;
        
        for (int attempt = 0; attempt < maxRetries; attempt++) {
            try {
                return session.execute(statement);
            } catch (DriverTimeoutException | AllNodesFailedException e) {
                lastException = e;
                if (attempt < maxRetries - 1) {
                    try {
                        Thread.sleep((long) Math.pow(2, attempt) * 100);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw new RuntimeException(ie);
                    }
                }
            }
        }
        
        throw new RuntimeException("Max retries exceeded", lastException);
    }
}

======== Performance Considerations ==========
# Use logged batches for atomicity across partitions
# Use unlogged batches for performance within same partition
# Limit batch size (recommended < 50 KB)
# Avoid batching operations that span multiple data centers
# Use appropriate consistency levels
# Monitor batch performance metrics
# Consider asynchronous execution for large batches
# Use prepared statements for better performance`,
        },
        {
          command: 'Secondary Indexes',
          description: 'Create and optimize secondary indexes for alternative queries',
          usage: 'Index types, performance considerations, and limitations',
          example: `# Secondary Indexes in Cassandra

======== Basic Index Creation ==========
# Simple secondary index
CREATE INDEX ON users (email);

# Index on clustering column
CREATE INDEX ON orders_by_user (order_date);

# Index on collection column
CREATE INDEX ON user_profiles (tags);

# Index on map keys
CREATE INDEX ON user_profiles (preferences);

# Index with custom name
CREATE INDEX user_email_idx ON users (email);

# Index on multiple columns (Cassandra 3.0+)
CREATE INDEX ON orders (customer_id, status);

======== Index Types ==========
# Traditional (SASI) indexes (Cassandra 3.4+)
CREATE CUSTOM INDEX user_email_sasi ON users (email) 
USING 'org.apache.cassandra.index.sasi.SASIIndex';

# SASI with options
CREATE CUSTOM INDEX product_name_sasi ON products (name) 
USING 'org.apache.cassandra.index.sasi.SASIIndex' 
WITH OPTIONS = {
  'mode': 'CONTAINS',
  'analyzed': 'true',
  'tokenization_skip_stop_words': 'true',
  'tokenization_enable_stemming': 'true'
};

# SASI numeric range index
CREATE CUSTOM INDEX price_range_idx ON products (price) 
USING 'org.apache.cassandra.index.sasi.SASIIndex' 
WITH OPTIONS = {
  'mode': 'SPARSE'
};

======== Querying with Indexes ==========
# Query using secondary index
SELECT * FROM users WHERE email = 'john@example.com';

# Query with multiple indexed columns
SELECT * FROM orders 
WHERE customer_id = ? AND status = 'shipped';

# Range queries with SASI
SELECT * FROM products 
WHERE price > 100 AND price < 500;

# Full-text search with SASI
SELECT * FROM products 
WHERE name LIKE '%laptop%';

# Collection queries
SELECT * FROM user_profiles 
WHERE tags CONTAINS 'developer';

# Map key queries
SELECT * FROM user_profiles 
WHERE preferences CONTAINS KEY 'theme';

======== Index Limitations ==========
# High cardinality columns are not good candidates
# Indexes don't work with ALLOW FILTERING
# Indexes have performance overhead on writes
# Limited query capabilities compared to primary keys
# Cannot index counter columns
# Cannot index columns with collection types (except specific cases)

======== Index Maintenance ==========
# List indexes
DESCRIBE INDEX;

# Drop index
DROP INDEX user_email_idx;

# Rebuild index (Cassandra 3.0+)
ALTER INDEX user_email_idx REBUILD;

# Monitor index usage
# Check system tables for index statistics
SELECT * FROM system.size_estimates 
WHERE keyspace_name = 'mykeyspace' 
  AND table_name = 'users';

======== Performance Optimization ==========
# Choose low cardinality columns for indexing
# Consider materialized views for complex queries
# Use appropriate SSTable compression
# Monitor index disk usage
# Consider SASI for text search
# Use proper clustering order

# Index selection guidelines
# Good candidates:
# - Low to medium cardinality
# - Frequently queried columns
# - Columns in WHERE clauses
# - Columns with high query selectivity

# Poor candidates:
# - Very high cardinality (like UUIDs)
# - Columns frequently updated
# - Counter columns
# - Blob columns

======== Materialized Views ==========
# Create materialized view
CREATE MATERIALIZED VIEW orders_by_status AS
  SELECT order_id, customer_id, order_date, total_amount, status
  FROM orders
  WHERE status IS NOT NULL AND order_id IS NOT NULL
  PRIMARY KEY (status, order_id);

# Query materialized view
SELECT * FROM orders_by_status WHERE status = 'shipped';

# Materialized view with clustering
CREATE MATERIALIZED VIEW user_orders_by_date AS
  SELECT customer_id, order_id, order_date, total_amount
  FROM orders_by_user
  WHERE customer_id IS NOT NULL AND order_id IS NOT NULL
  PRIMARY KEY ((customer_id), order_date, order_id)
  WITH CLUSTERING ORDER BY (order_date DESC);

# Update materialized view
# Automatically updated when base table changes
# No manual maintenance required

# Drop materialized view
DROP MATERIALIZED VIEW orders_by_status;

======== Index Monitoring ==========
# Check index size
SELECT * FROM system.size_estimates 
WHERE keyspace_name = 'mykeyspace';

# Monitor index performance
# Use nodetool cfstats
# Check read/write latency
# Monitor disk usage

# Python index monitoring
from cassandra.query import dict_factory

session.row_factory = dict_factory
rows = session.execute(
    "SELECT * FROM system.size_estimates WHERE keyspace_name = ?",
    ['mykeyspace']
)

for row in rows:
    print(f"Table: {row['table_name']}")
    print(f"Partitions: {row['partitions_count']}")
    print(f"Size: {row['mean_partition_size']} bytes")

======== Best Practices ==========
# Design tables for primary queries
# Use indexes for secondary queries
# Limit number of indexes per table
# Consider query patterns before indexing
# Monitor index performance regularly
# Use materialized views for complex queries
# Avoid indexing high cardinality columns
# Test index performance with realistic data

# Index design workflow
# 1. Identify query patterns
# 2. Design primary key structure
# 3. Consider materialized views
# 4. Add secondary indexes if needed
# 5. Test and monitor performance
# 6. Optimize based on usage patterns`,
        },
        {
          command: 'Time Series Data',
          description: 'Optimize Cassandra for time series workloads',
          usage: 'Time bucketing, wide rows, TTL, and compaction strategies',
          example: `# Time Series Data in Cassandra

======== Time Bucketing Pattern ==========
# Basic time series table
CREATE TABLE sensor_readings (
  sensor_id UUID,
  timestamp TIMESTAMP,
  value DOUBLE,
  unit TEXT,
  PRIMARY KEY (sensor_id, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);

# Time bucketed by hour
CREATE TABLE sensor_readings_hourly (
  sensor_id UUID,
  hour_bucket TIMESTAMP,
  reading_id TIMEUUID,
  value DOUBLE,
  unit TEXT,
  PRIMARY KEY ((sensor_id, hour_bucket), reading_id)
) WITH CLUSTERING ORDER BY (reading_id DESC);

# Time bucketed by day
CREATE TABLE sensor_readings_daily (
  sensor_id UUID,
  date_bucket DATE,
  reading_id TIMEUUID,
  value DOUBLE,
  unit TEXT,
  PRIMARY KEY ((sensor_id, date_bucket), reading_id)
) WITH CLUSTERING ORDER BY (reading_id DESC);

# Insert time bucketed data
INSERT INTO sensor_readings_hourly (
  sensor_id, hour_bucket, reading_id, value, unit
) VALUES (
  ?,
  toTimestamp(dateOf(now())), -- Start of current hour
  now(),
  25.5,
  'celsius'
);

# Query time bucketed data
SELECT * FROM sensor_readings_hourly 
WHERE sensor_id = ? 
  AND hour_bucket = '2024-01-01 00:00:00';

# Range query across buckets
SELECT * FROM sensor_readings_hourly 
WHERE sensor_id = ? 
  AND hour_bucket >= '2024-01-01 00:00:00'
  AND hour_bucket <= '2024-01-02 00:00:00';

======== Wide Row Time Series ==========
# Event log with wide rows
CREATE TABLE event_log (
  event_source TEXT,
  day_bucket DATE,
  event_id TIMEUUID,
  event_type TEXT,
  event_data TEXT,
  timestamp TIMESTAMP,
  PRIMARY KEY ((event_source, day_bucket), event_id)
) WITH CLUSTERING ORDER BY (event_id DESC)
  AND compaction = {'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 7};

# Insert events
INSERT INTO event_log (event_source, day_bucket, event_id, event_type, event_data, timestamp)
VALUES ('app-server', '2024-01-01', now(), 'user_login', '{"user": "john"}', now());

# Query recent events
SELECT * FROM event_log 
WHERE event_source = 'app-server' 
  AND day_bucket = '2024-01-01'
LIMIT 100;

# TTL for automatic expiration
CREATE TABLE temporary_metrics (
  metric_id UUID,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY (metric_id, timestamp)
) WITH default_time_to_live = 2592000; -- 30 days

======== Compaction Strategies ==========
# SizeTieredCompactionStrategy (default)
# Good for write-heavy workloads
CREATE TABLE write_heavy_metrics (
  metric_id UUID,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY (metric_id, timestamp)
) WITH compaction = {
  'class': 'SizeTieredCompactionStrategy',
  'min_threshold': '4',
  'max_threshold': '32'
};

# LeveledCompactionStrategy
# Good for read-heavy workloads
CREATE TABLE read_heavy_events (
  event_source TEXT,
  event_id TIMEUUID,
  event_data TEXT,
  PRIMARY KEY (event_source, event_id)
) WITH compaction = {
  'class': 'LeveledCompactionStrategy',
  'sstable_size_in_mb': '160'
};

# TimeWindowCompactionStrategy (TWCS)
# Best for time series data
CREATE TABLE time_series_data (
  sensor_id UUID,
  day_bucket DATE,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY ((sensor_id, day_bucket), timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC)
  AND compaction = {
    'class': 'TimeWindowCompactionStrategy',
    'compaction_window_unit': 'DAYS',
    'compaction_window_size': 7
};

======== Data Retention and Archival ==========
# TTL-based expiration
CREATE TABLE metrics_30day (
  metric_id UUID,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY (metric_id, timestamp)
) WITH default_time_to_live = 2592000; -- 30 days

# Manual archival process
CREATE TABLE raw_events (
  event_id TIMEUUID PRIMARY KEY,
  event_data TEXT,
  timestamp TIMESTAMP
);

CREATE TABLE archived_events (
  event_id TIMEUUID PRIMARY KEY,
  event_data TEXT,
  timestamp TIMESTAMP,
  archived_at TIMESTAMP
);

# Archive old data
INSERT INTO archived_events (event_id, event_data, timestamp, archived_at)
SELECT event_id, event_data, timestamp, now()
FROM raw_events 
WHERE timestamp < dateOf(now()) - 30;

DELETE FROM raw_events 
WHERE timestamp < dateOf(now()) - 30;

======== Aggregation Patterns ==========
# Pre-aggregated hourly data
CREATE TABLE hourly_aggregates (
  metric_id UUID,
  hour_bucket TIMESTAMP,
  count_value COUNTER,
  sum_value COUNTER,
  min_value DOUBLE,
  max_value DOUBLE,
  PRIMARY KEY ((metric_id), hour_bucket)
) WITH CLUSTERING ORDER BY (hour_bucket DESC);

# Update aggregates
BEGIN UNLOGGED BATCH
  UPDATE hourly_aggregates 
  SET count_value = count_value + 1,
      sum_value = sum_value + ?,
      min_value = ?,
      max_value = ?
  WHERE metric_id = ? 
    AND hour_bucket = toTimestamp(dateOf(now()));
APPLY BATCH;

# Daily rollup
CREATE TABLE daily_rollups (
  metric_id UUID,
  date_bucket DATE,
  total_count BIGINT,
  total_sum DOUBLE,
  daily_min DOUBLE,
  daily_max DOUBLE,
  PRIMARY KEY ((metric_id), date_bucket)
) WITH CLUSTERING ORDER BY (date_bucket DESC);

======== Performance Optimization ==========
# Partition sizing guidelines
# Keep partitions under 100 MB
# Use time bucketing to limit partition size
# Monitor partition size with nodetool

# Optimal bucket sizes
# - Seconds: High frequency data (seconds/minutes)
# - Hours: Medium frequency data (minutes/hours)
# - Days: Low frequency data (hours/days)
# - Months: Very low frequency data

# Compression for time series
CREATE TABLE compressed_metrics (
  metric_id UUID,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY (metric_id, timestamp)
) WITH compression = {
  'class': 'LZ4Compressor',
  'chunk_length_kb': '64'
};

# Read optimization
CREATE TABLE recent_metrics (
  metric_id UUID,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY (metric_id, timestamp)
) WITH caching = {
  'keys': 'ALL',
  'rows_per_partition': '100'
};

======== Monitoring and Maintenance ==========
# Monitor partition sizes
nodetool cfstats mykeyspace.time_series_data

# Check disk usage
SELECT * FROM system.size_estimates 
WHERE keyspace_name = 'mykeyspace' 
  AND table_name = 'time_series_data';

# Compaction monitoring
SELECT * FROM system.compaction_history 
WHERE keyspace_name = 'mykeyspace';

# Python monitoring example
from cassandra.query import dict_factory
import time

def monitor_time_series_table(session, keyspace, table):
    session.row_factory = dict_factory
    
    # Get table statistics
    stats = session.execute(
        "SELECT * FROM system.size_estimates WHERE keyspace_name = ? AND table_name = ?",
        [keyspace, table]
    )
    
    for stat in stats:
        print(f"Table: {stat['table_name']}")
        print(f"Mean partition size: {stat['mean_partition_size']} bytes")
        print(f"Partitions count: {stat['partitions_count']}")
        print(f"Total size: {stat['mean_partition_size'] * stat['partitions_count']} bytes")

# Usage
monitor_time_series_table(session, 'mykeyspace', 'time_series_data')

======== Best Practices ==========
# Use appropriate time bucketing
# Choose right compaction strategy
# Set appropriate TTL
# Monitor partition sizes
# Use compression for storage efficiency
# Consider data archival strategies
# Optimize read patterns
# Use batch inserts for efficiency
# Monitor performance regularly

# Time series design checklist
# ✓ Determine data retention period
# ✓ Choose appropriate time bucket size
# ✓ Select compaction strategy
# ✓ Set TTL for automatic expiration
# ✓ Plan for data archival
# ✓ Monitor partition sizes
# ✓ Optimize for read patterns
# ✓ Implement aggregation where needed`,
        },
      ],
    },
    {
      title: 'Cassandra-Specific Features',
      commands: [
        {
          command: 'Replication and Data Distribution',
          description: 'Configure replication strategies and data distribution',
          usage: 'Replication factors, snitches, and data placement',
          example: `# Replication and Data Distribution in Cassandra

======== Replication Strategies ==========
# SimpleStrategy (single data center)
CREATE KEYSPACE myapp 
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

# NetworkTopologyStrategy (multiple data centers)
CREATE KEYSPACE distributed_app 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'dc1': 3,
  'dc2': 2,
  'dc3': 1
};

# NetworkTopologyStrategy with dynamic options
CREATE KEYSPACE flexible_ks 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'dc1': 3,
  'dc2': 2
} AND DURABLE_WRITES = true;

# Update keyspace replication
ALTER KEYSPACE myapp 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'dc1': 3,
  'dc2': 2
};

======== Snitches ==========
# PropertyFileSnitch (default for single DC)
# Configure in cassandra.yaml
endpoint_snitch: PropertyFileSnitch

# GossipingPropertyFileSnitch
endpoint_snitch: GossipingPropertyFileSnitch

# Ec2Snitch (AWS single region)
endpoint_snitch: Ec2Snitch

# Ec2MultiRegionSnitch (AWS multiple regions)
endpoint_snitch: Ec2MultiRegionSnitch

# GoogleCloudSnitch (GCP)
endpoint_snitch: GoogleCloudSnitch

# AzureSnitch (Azure)
endpoint_snitch: AzureSnitch

# RackInferringSnitch (custom rack aware)
endpoint_snitch: RackInferringSnitch

======== Data Center Configuration ==========
# cassandra-rackdc.properties for GossipingPropertyFileSnitch
dc=DC1
rack=RAC1
prefer_local=true

# Multi-data center setup
# Node 1 (DC1, RAC1)
dc=DC1
rack=RAC1

# Node 2 (DC1, RAC2)
dc=DC1
rack=RAC2

# Node 3 (DC2, RAC1)
dc=DC2
rack=RAC1

======== Consistency Levels by Replication ==========
# Calculate required nodes for consistency
# RF = Replication Factor
# Write consistency: W nodes must acknowledge write
# Read consistency: R nodes must respond to read
# Strong consistency: W + R > RF

# Examples with RF = 3:
# QUORUM = 2 nodes
# LOCAL_QUORUM = 2 nodes in local DC
# EACH_QUORUM = 2 nodes in each DC
# ALL = 3 nodes
# ONE = 1 node
# TWO = 2 nodes
# THREE = 3 nodes

======== Data Distribution ==========
# Murmur3Partitioner (default)
partitioner: org.apache.cassandra.dht.Murmur3Partitioner

# RandomPartitioner (older)
partitioner: org.apache.cassandra.dht.RandomPartitioner

# ByteOrderedPartitioner (ordered)
partitioner: org.apache.cassandra.dht.ByteOrderedPartitioner

# Token allocation
# Calculate tokens for manual token assignment
# For RF=3 with 6 nodes:
# Node 1: 0, 2^63
# Node 2: 2^62, 2^63 + 2^62
# Node 3: 2^61, 2^63 + 2^61
# etc.

# Virtual nodes (vnodes)
num_tokens: 256  # Default

======== Replication Factor Guidelines ==========
# Single data center:
# RF = 3 (recommended for production)
# RF = 1 (development/testing)
# RF = 2 (minimal fault tolerance)

# Multiple data centers:
# Local RF = 3 per data center
# Total RF = sum of all DC RFs
# Consider network latency between DCs

# Calculate storage requirements
# Storage needed = Data size × RF × (1 + overhead)
# Example: 100GB data, RF=3, ~400GB total storage

======== Data Placement and Repair ==========
# Manual repair
nodetool repair mykeyspace mytable

# Repair specific data center
nodetool repair -pr dc1 mykeyspace mytable

# Repair with parallelism
nodetool repair -pr -par 4 mykeyspace mytable

# Incremental repair
nodetool repair -inc mykeyspace mytable

# Subrange repair
nodetool repair -pr -st 0 -et 1000000000000000000 mykeyspace mytable

# Anti-entropy repair scheduling
# Run regularly to maintain consistency
# Recommended: weekly for most workloads
# High write workloads: daily or more frequent

======== Monitoring Replication ==========
# Check replication status
nodetool status

# Check pending repairs
SELECT * FROM system.repairs WHERE keyspace_name = 'mykeyspace';

# Monitor repair history
SELECT * FROM system.repair_history WHERE keyspace_name = 'mykeyspace';

# Python repair monitoring
from cassandra.query import dict_factory

session.row_factory = dict_factory

def check_replication_status(session, keyspace):
    # Get table replication info
    tables = session.execute(
        "SELECT table_name FROM system_schema.tables WHERE keyspace_name = ?",
        [keyspace]
    )
    
    for table in tables:
        table_name = table['table_name']
        
        # Check size estimates
        estimates = session.execute(
            "SELECT * FROM system.size_estimates WHERE keyspace_name = ? AND table_name = ?",
            [keyspace, table_name]
        )
        
        for estimate in estimates:
            print(f"Table: {table_name}")
            print(f"Partitions: {estimate['partitions_count']}")
            print(f"Mean size: {estimate['mean_partition_size']} bytes")

======== Best Practices ==========
# Use NetworkTopologyStrategy for production
# Set appropriate replication factors
# Configure snitches correctly
# Run regular repairs
# Monitor repair status
# Plan for network partitions
# Test failover scenarios
# Consider cross-DC latency

# Replication strategy selection:
# SimpleStrategy: Single DC, development
# NetworkTopologyStrategy: Production, multi-DC
# Consider write/read patterns
# Balance consistency and availability
# Plan for capacity requirements

# Repair strategy:
# Schedule regular repairs
# Use incremental repairs
# Monitor repair performance
# Handle repair conflicts
# Test repair procedures
# Document repair schedules`,
        },
        {
          command: 'Compaction Strategies',
          description: 'Optimize compaction for different workloads',
          usage: 'STCS, LCS, TWCS, and custom compaction',
          example: `# Compaction Strategies in Cassandra

======== SizeTieredCompactionStrategy (STCS) ==========
# Default strategy, good for write-heavy workloads
CREATE TABLE write_heavy_table (
  id UUID PRIMARY KEY,
  data TEXT,
  timestamp TIMESTAMP
) WITH compaction = {
  'class': 'SizeTieredCompactionStrategy',
  'min_threshold': '4',
  'max_threshold': '32'
};

# STCS configuration options
# min_threshold: Minimum SSTables to compact (default: 4)
# max_threshold: Maximum SSTables to compact (default: 32)
# cold_reads_to_omit: How many cold reads to track (default: 0)

# Use cases for STCS:
# Write-heavy workloads
# Time series data
# Logging data
# Append-only workloads

======== LeveledCompactionStrategy (LCS) ==========
# Good for read-heavy workloads
CREATE TABLE read_heavy_table (
  id UUID PRIMARY KEY,
  user_data TEXT,
  last_updated TIMESTAMP
) WITH compaction = {
  'class': 'LeveledCompactionStrategy',
  'sstable_size_in_mb': '160'
};

# LCS configuration options
# sstable_size_in_mb: Target SSTable size (default: 160MB)

# Use cases for LCS:
# Read-heavy workloads
# Frequently updated data
# Low read latency requirements
# Limited disk space

======== TimeWindowCompactionStrategy (TWCS) ==========
# Best for time series data
CREATE TABLE time_series_table (
  sensor_id UUID,
  day_bucket DATE,
  timestamp TIMESTAMP,
  value DOUBLE,
  PRIMARY KEY ((sensor_id, day_bucket), timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC)
  AND compaction = {
    'class': 'TimeWindowCompactionStrategy',
    'compaction_window_unit': 'DAYS',
    'compaction_window_size': '7'
  };

# TWCS configuration options
# compaction_window_unit: Time unit (MINUTES, HOURS, DAYS)
# compaction_window_size: Window size
# unchecked_tombstone_compaction: Allow tombstone compaction outside window

# Use cases for TWCS:
# Time series data
# TTL-based expiration
# Log data with natural time windows
# IoT sensor data

======== DateTieredCompactionStrategy (DTCS) ==========
# Deprecated in favor of TWCS but still available
CREATE TABLE legacy_time_series (
  id UUID,
  timestamp TIMESTAMP,
  data TEXT,
  PRIMARY KEY (id, timestamp)
) WITH compaction = {
  'class': 'DateTieredCompactionStrategy',
  'timestamp_resolution': 'MICROSECONDS',
  'base_time_seconds': '3600',
  'max_sstable_age_days': '365'
};

======== Custom Compaction ==========
# Create custom compaction strategy
# Requires implementing Java class
CREATE TABLE custom_compact_table (
  id UUID PRIMARY KEY,
  data TEXT
) WITH compaction = {
  'class': 'com.example.CustomCompactionStrategy',
  'custom_option': 'value'
};

======== Compaction Properties ==========
# Disable compaction (not recommended for production)
CREATE TABLE no_compact_table (
  id UUID PRIMARY KEY,
  data TEXT
) WITH compaction = {'class': 'SizeTieredCompactionStrategy', 'enabled': 'false'};

# Tombstone options
CREATE TABLE tombstone_aware_table (
  id UUID PRIMARY KEY,
  data TEXT
) WITH compaction = {
  'class': 'SizeTieredCompactionStrategy',
  'tombstone_threshold': '0.2',
  'tombstone_compaction_interval': '86400'
};

# Compression with compaction
CREATE TABLE compressed_table (
  id UUID PRIMARY KEY,
  data TEXT
) WITH 
  compression = {'class': 'LZ4Compressor', 'chunk_length_kb': '64'}
  AND compaction = {
    'class': 'LeveledCompactionStrategy',
    'sstable_size_in_mb': '160'
  };

======== Compaction Monitoring ==========
# Check compaction history
SELECT * FROM system.compaction_history 
WHERE keyspace_name = 'mykeyspace' 
  AND table_name = 'mytable';

# Monitor pending compactions
nodetool compactionstats

# Check compaction throughput
nodetool tpstats

# Force major compaction
nodetool compact mykeyspace mytable

# Force user-defined compaction
nodetoid user-defined compact mykeyspace mytable

# Python compaction monitoring
from cassandra.query import dict_factory

session.row_factory = dict_factory

def monitor_compaction(session, keyspace, table):
    # Get compaction history
    history = session.execute(
        "SELECT * FROM system.compaction_history WHERE keyspace_name = ? AND table_name = ?",
        [keyspace, table]
    )
    
    for compaction in history:
        print(f"Compaction ID: {compaction['id']}")
        print(f"Strategy: {compaction['strategy_class']}")
        print(f"Start time: {compaction['started_at']}")
        print(f"Duration: {compaction['duration_millis']}ms")
        print(f"Keys compacted: {compaction['keys_compacted']}")

======== Compaction Tuning ==========
# STCS tuning for high throughput
CREATE TABLE high_throughput_table (
  id UUID PRIMARY KEY,
  data TEXT
) WITH compaction = {
  'class': 'SizeTieredCompactionStrategy',
  'min_threshold': '2',
  'max_threshold': '64'
};

# LCS tuning for low latency
CREATE TABLE low_latency_table (
  id UUID PRIMARY KEY,
  data TEXT
) WITH compaction = {
  'class': 'LeveledCompactionStrategy',
  'sstable_size_in_mb': '32'
};

# TWCS tuning for hourly data
CREATE TABLE hourly_data_table (
  sensor_id UUID,
  hour_bucket TIMESTAMP,
  reading_id TIMEUUID,
  value DOUBLE,
  PRIMARY KEY ((sensor_id, hour_bucket), reading_id)
) WITH compaction = {
  'class': 'TimeWindowCompactionStrategy',
  'compaction_window_unit': 'HOURS',
  'compaction_window_size': '24'
};

======== Compaction Best Practices ==========
# Choose strategy based on workload:
# STCS: Write-heavy, time series, logging
# LCS: Read-heavy, frequently updated
# TWCS: Time series with TTL

# Monitor compaction performance:
# Watch compaction backlog
# Monitor disk I/O
# Check read latency
# Track tombstone buildup

# Compaction tuning guidelines:
# Adjust thresholds based on workload
# Monitor SSTable count
# Consider disk space requirements
# Test compaction strategies

# Common issues and solutions:
# Too many SSTables: Lower thresholds
# High read latency: Consider LCS
# Large disk usage: Monitor compaction
# Tombstone buildup: Run tombstone compaction`,
        },
        {
          command: 'Security and Authentication',
          description: 'Configure Cassandra security features',
          usage: 'Authentication, authorization, encryption, and auditing',
          example: `# Security and Authentication in Cassandra

======== Enable Authentication ==========
# Edit cassandra.yaml
authenticator: PasswordAuthenticator
authorizer: CassandraAuthorizer
role_manager: CassandraRoleManager

# Restart Cassandra
sudo systemctl stop cassandra
sudo systemctl start cassandra

# Create default superuser
cqlsh -u cassandra -p cassandra

# Change default password
ALTER USER cassandra WITH PASSWORD 'new_secure_password';

======== User and Role Management ==========
# Create user
CREATE USER john WITH PASSWORD 'secure_password' NOSUPERUSER;

# Create user with login
CREATE USER jane WITH PASSWORD 'password123' LOGIN;

# Create superuser
CREATE USER admin WITH PASSWORD 'admin_pass' SUPERUSER;

# Create role
CREATE ROLE analyst WITH LOGIN = true AND PASSWORD = 'analyst_pass';

# Create role without login
CREATE ROLE readonly_role;

# Grant role to user
GRANT readonly_role TO john;

# Grant permissions to role
GRANT SELECT ON ALL KEYSPACES TO readonly_role;

# List users
LIST USERS;

# List roles
LIST ROLES;

# List user permissions
LIST ALL PERMISSIONS OF john;

======== Authorization and Permissions ==========
# Grant permissions on keyspace
GRANT ALL PERMISSIONS ON KEYSPACE mykeyspace TO john;
GRANT SELECT ON KEYSPACE mykeyspace TO analyst;
GRANT MODIFY ON KEYSPACE mykeyspace TO data_writer;

# Grant permissions on table
GRANT SELECT ON TABLE mykeyspace.users TO analyst;
GRANT INSERT ON TABLE mykeyspace.events TO data_writer;
GRANT ALTER ON TABLE mykeyspace.schema TO admin;

# Grant all on specific table
GRANT ALL PERMISSIONS ON TABLE mykeyspace.critical_data TO admin;

# Revoke permissions
REVOKE SELECT ON KEYSPACE mykeyspace FROM analyst;
REVOKE ALL PERMISSIONS ON KEYSPACE mykeyspace FROM john;

# Check permissions
LIST ALL PERMISSIONS ON KEYSPACE mykeyspace;
LIST ALL PERMISSIONS ON TABLE mykeyspace.users;

======== SSL/TLS Configuration ==========
# Generate keystore
keytool -genkey -alias cassandra -keyalg RSA -keystore .keystore

# Enable client encryption in cassandra.yaml
client_encryption_options:
  enabled: true
  optional: false
  keystore: /etc/cassandra/.keystore
  keystore_password: cassandra
  require_client_auth: true
  truststore: /etc/cassandra/.truststore
  truststore_password: cassandra
  protocol: TLS
  algorithm: SunX509
  store_type: JKS
  cipher_suites: [TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA]

# Enable internode encryption
internode_encryption: all
keystore: /etc/cassandra/.keystore
keystore_password: cassandra
truststore: /etc/cassandra/.truststore
truststore_password: cassandra
protocol: TLS
algorithm: SunX509
store_type: JKS
cipher_suites: [TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA]

# Configure cqlsh with SSL
cqlsh --ssl --cacert ~/.cassandra/ca.pem localhost 9042

======== JMX Authentication ==========
# Enable JMX authentication in cassandra-env.sh
JMX_AUTH=true
JMX_USERNAME=cassandra
JMX_PASSWORD=cassandra

# Configure JMX SSL
JMX_SSL=true
com.sun.management.jmxremote.ssl.need.client.auth=true

======== Audit Logging ==========
# Enable audit logging in cassandra.yaml
auditor: StandardAuditor
audit_log_options:
  enabled: true
  audit_logs_dir: /var/log/cassandra/audit
  included_keyspaces: mykeyspace, sensitive_data
  excluded_categories: QUERY, DML
  included_categories: AUTHORIZATION, DDL, DCL

# Custom audit log configuration
audit_log_options:
  enabled: true
  audit_logs_dir: /var/log/cassandra/audit
  roll_cycle: HOURLY
  block: true
  max_queue_weight: 16 * 1024 * 1024
  max_log_size: 16 * 1024 * 1024

======== Network Security ==========
# Configure specific interface addresses
listen_address: 192.168.1.100
broadcast_address: 192.168.1.100
rpc_address: 192.168.1.100
broadcast_rpc_address: 192.168.1.100

# Enable encryption
server_encryption_options:
  internode_encryption: all
  keystore: /etc/cassandra/.keystore
  keystore_password: cassandra
  truststore: /etc/cassandra/.truststore
  truststore_password: cassandra
  protocol: TLS
  algorithm: SunX509
  store_type: JKS
  require_client_auth: true

# Configure whitelist
seed_provider:
  - class_name: org.apache.cassandra.locator.SimpleSeedProvider
    parameters:
      - seeds: "192.168.1.100,192.168.1.101,192.168.1.102"

======== Security Best Practices ==========
# Use strong passwords
ALTER USER cassandra WITH PASSWORD 'VeryStrongP@ssw0rd!123';

# Principle of least privilege
CREATE ROLE app_user WITH LOGIN = true AND PASSWORD = 'app_pass';
GRANT SELECT, INSERT, UPDATE ON KEYSPACE app_data TO app_user;

# Regular security audits
# Review user permissions
LIST ALL PERMISSIONS OF app_user;

# Monitor failed login attempts
# Check system logs for authentication failures

# Network security
# Use firewall to restrict access
# Configure VPC/security groups in cloud
# Enable SSL/TLS for all communications
# Use VPN for remote access

# Data encryption
# Enable transparent data encryption (TDE)
# encrypt disk-level storage
# backup encrypted data

======== Python Security Example ==========
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider
from ssl import SSLContext, PROTOCOL_TLSv1_2

# Secure connection with authentication and SSL
auth_provider = PlainTextAuthProvider(
    username='secure_user', 
    password='secure_password'
)

ssl_context = SSLContext(PROTOCOL_TLSv1_2)
ssl_context.load_verify_locations('ca.pem')
ssl_context.load_cert_chain('client.pem', 'client.key')

cluster = Cluster(
    ['secure-host1', 'secure-host2'],
    auth_provider=auth_provider,
    ssl_context=ssl_context,
    port=9042
)

session = cluster.connect()

# Role management
def create_secure_role(session, role_name, password, permissions):
    # Create role
    session.execute(f"""
        CREATE ROLE {role_name} 
        WITH LOGIN = true AND PASSWORD = %s
    """, [password])
    
    # Grant permissions
    for perm in permissions:
        session.execute(f"GRANT {perm} ON KEYSPACE app_data TO {role_name}")

# Usage
permissions = ['SELECT', 'INSERT']
create_secure_role(session, 'app_writer', 'secure_pass_123', permissions)

======== Java Security Example ==========
import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.auth.ProgrammaticPlainTextAuthProvider;
import javax.net.ssl.SSLContext;

// Secure connection
CqlSession session = CqlSession.builder()
    .addContactPoint(new InetSocketAddress("secure-host", 9042))
    .withAuthCredentials("secure_user", "secure_password")
    .withLocalDatacenter("datacenter1")
    .withSslContext(SSLContext.getDefault())
    .build();

// Role management
session.execute(
    SimpleStatement.builder(
        "CREATE ROLE IF NOT EXISTS app_role WITH LOGIN = true AND PASSWORD = ?"
    ).setConsistencyLevel(ConsistencyLevel.QUORUM)
    .addPositionalValue("app_password")
    .build()
);

session.execute(
    SimpleStatement.builder(
        "GRANT SELECT ON KEYSPACE app_data TO app_role"
    ).setConsistencyLevel(ConsistencyLevel.QUORUM)
    .build()
);`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Performance and Scaling',
      commands: [
        {
          command: 'Performance Tuning',
          description: 'Optimize Cassandra performance for production workloads',
          usage: 'Memory tuning, garbage collection, and JVM optimization',
          example: `# Performance Tuning in Cassandra

======== JVM Configuration ==========
# cassandra-env.sh - JVM heap size
MAX_HEAP_SIZE="8G"
HEAP_NEWSIZE="2G"

# GC settings (Java 11+)
JVM_OPTS="$JVM_OPTS -XX:+UseG1GC"
JVM_OPTS="$JVM_OPTS -XX:MaxGCPauseMillis=500"
JVM_OPTS="$JVM_OPTS -XX:InitiatingHeapOccupancyPercent=35"

# JVM options for high throughput
JVM_OPTS="$JVM_OPTS -XX:+UseStringDeduplication"
JVM_OPTS="$JVM_OPTS -XX:+OptimizeStringConcat"
JVM_OPTS="$JVM_OPTS -XX:+UseCompressedOops"
JVM_OPTS="$JVM_OPTS -XX:+UseCompressedClassPointers"

# Thread configuration
JVM_OPTS="$JVM_OPTS -Dcassandra.max_num_threads=32"
JVM_OPTS="$JVM_OPTS -Dcassandra.memtable_flush_writers=2"

======== Memory Tuning ==========
# Calculate heap size (50% of system RAM, max 8GB)
# For 16GB system: 8GB heap
# For 32GB system: 8GB heap (don't exceed 8GB)
# For 64GB system: 8GB heap (don't exceed 8GB)

# Off-heap memory tuning
# cassandra.yaml
memtable_heap_space_in_mb: 2048
memtable_offheap_space_in_mb: 2048

# Cache configuration
row_cache_size_in_mb: 0  # Disabled by default
key_cache_size_in_mb: 512
counter_cache_size_in_mb: 128

# Memtable settings
memtable_cleanup_threshold: 0.11
memtable_flush_writers: 2

======== Disk I/O Optimization ==========
# Commit log configuration
commitlog_sync: periodic
commitlog_sync_period_in_ms: 10000
commitlog_segment_size_in_mb: 32

# Disk optimization
disk_access_mode: mmap  # or mmap_index_only
trickle_fsync: false
trickle_fsync_interval_in_kb: 10240

# Concurrent reads/writes
concurrent_reads: 32
concurrent_writes: 32
concurrent_compactors: 2

# Compaction throughput
compaction_throughput_mb_per_sec: 64

# Stream throughput
stream_throughput_outbound_megabits_per_sec: 200

======== Network Optimization ==========
# Thread pool sizes
concurrent_reads: 32
concurrent_writes: 32
concurrent_compactors: 2
concurrent_materialized_view_builders: 2

# RPC settings
rpc_max_threads: 8
rpc_min_threads: 16
rpc_send_buff_size_in_bytes: 131072
rpc_recv_buff_size_in_bytes: 131072

# Internode settings
internode_max_message_size_in_bytes: 131072
internode_tcp_nodelay: true

======== CQL Performance ==========
# Prepared statements
# Python example
from cassandra.query import PreparedStatement

prepared = session.prepare(
    "INSERT INTO users (user_id, username, email) VALUES (?, ?, ?)"
)

for user in users:
    session.execute(prepared, [user.id, user.name, user.email])

# Batch operations
from cassandra.query import BatchStatement

batch = BatchStatement()
batch.add(prepared, [user1.id, user1.name, user1.email])
batch.add(prepared, [user2.id, user2.name, user2.email])
session.execute(batch)

# Paging for large results
from cassandra.query import SimpleStatement

statement = SimpleStatement(
    "SELECT * FROM large_table",
    fetch_size=100
)

for row in session.execute(statement):
    process_row(row)

======== Monitoring Performance ==========
# Nodetool commands
nodetool tpstats
nodetool cfstats
nodetool compactionstats
nodetool netstats
nodetool info

# Performance metrics
SELECT * FROM system.metrics;
SELECT * FROM system.large_partitions;

# Python performance monitoring
from cassandra.query import dict_factory

session.row_factory = dict_factory

def monitor_performance(session):
    # Get thread pool stats
    metrics = session.execute("SELECT * FROM system.metrics")
    
    for metric in metrics:
        if 'ThreadPool' in metric['name']:
            print(f"{metric['name']}: {metric['value']}")

# Java performance monitoring
import com.datastax.oss.driver.api.core.metadata.Node;

for (Node node : session.getMetadata().getNodes().values()) {
    System.out.println("Node: " + node.getEndPoint());
    System.out.println("Open connections: " + node.getOpenConnections());
}

======== Performance Tuning Checklist ==========
# JVM Settings:
# ✓ Heap size: 50% of RAM, max 8GB
# ✓ GC strategy: G1GC for Java 11+
# ✓ New generation: 1/4 of heap size
# ✓ Enable string deduplication

# Memory Settings:
# ✓ Off-heap memory for memtables
# ✓ Configure appropriate cache sizes
# ✓ Monitor memory usage patterns

# Disk Settings:
# ✓ Optimize commit log settings
# ✓ Configure compaction throughput
# ✓ Use appropriate disk type (SSD recommended)

# Network Settings:
# ✓ Optimize thread pool sizes
# ✓ Configure RPC settings
# ✓ Enable TCP nodelay

# CQL Optimization:
# ✓ Use prepared statements
# ✓ Implement proper paging
# ✓ Use appropriate consistency levels
# ✓ Batch operations when appropriate

# Monitoring:
# ✓ Set up performance monitoring
# ✓ Track key metrics
# ✓ Alert on performance degradation

======== Performance Testing ==========
# Cassandra stress tool
cassandra-stress write n=1000000 -rate threads=50 -pop seq=1..1000000

cassandra-stress read n=1000000 -rate threads=50 -pop seq=1..1000000

cassandra-stress mixed ratio(write=1,read=9) n=1000000 -rate threads=50

# Custom workload profile
cassandra-stress user profile=./my_workload.yaml ops=1000000

# Python performance testing
import time
from concurrent.futures import ThreadPoolExecutor

def performance_test(session, num_operations, num_threads):
    def worker():
        start_time = time.time()
        for i in range(num_operations // num_threads):
            session.execute(
                "INSERT INTO test_table (id, data) VALUES (?, ?)",
                [i, f"data_{i}"]
            )
        return time.time() - start_time
    
    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        futures = [executor.submit(worker) for _ in range(num_threads)]
        times = [future.result() for future in futures]
    
    avg_time = sum(times) / len(times)
    ops_per_sec = num_operations / avg_time
    
    print(f"Average time: {avg_time:.2f}s")
    print(f"Operations per second: {ops_per_sec:.2f}")`,
        },
        {
          command: 'Cluster Management',
          description: 'Manage and maintain Cassandra clusters',
          usage: 'Node operations, cluster health, and maintenance procedures',
          example: `# Cluster Management in Cassandra

======== Node Operations ==========
# Start/stop Cassandra
sudo systemctl start cassandra
sudo systemctl stop cassandra
sudo systemctl restart cassandra

# Check node status
nodetool status

# Node health check
nodetool info
nodetool describecluster

# Drain node (prepare for maintenance)
nodetool drain

# Decommission node
nodetool decommission

# Removenode (remove dead node)
nodetool removenode <host_id>

# Replace dead node
nodetool removenode <host_id>
# Then start new node with same token range

# Repair node
nodetool repair -pr <datacenter> <keyspace> <table>

======== Cluster Health Monitoring ==========
# Ring status
nodetool ring

# Network topology
nodetool describering

# Stream status
nodetool netstats

# Compaction status
nodetool compactionstats

# Thread pool statistics
nodetool tpstats

# Garbage collection stats
nodetool gcstats

# Table statistics
nodetool cfstats

# Keyspace utilization
nodetool tablestats

# Python cluster monitoring
from cassandra.cluster import Cluster
from cassandra.policies import DCAwareRoundRobinPolicy

def monitor_cluster_health(contact_points):
    cluster = Cluster(
        contact_points,
        load_balancing_policy=DCAwareRoundRobinPolicy(local_dc='datacenter1')
    )
    session = cluster.connect()
    
    # Get cluster metadata
    metadata = cluster.metadata
    print(f"Cluster name: {metadata.cluster_name}")
    print(f"Data centers: {list(metadata.getKeyspaces().keys())}")
    
    # Check node status
    for host in metadata.all_hosts():
        print(f"Node: {host.address}")
        print(f"Data center: {host.datacenter}")
        print(f"Rack: {host.rack}")
        print(f"Is up: {host.is_up}")
    
    session.shutdown()
    cluster.shutdown()

# Java cluster monitoring
import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.metadata.Metadata;

Metadata metadata = session.getMetadata();
System.out.println("Cluster: " + metadata.getClusterName());

for (Node node : metadata.getNodes().values()) {
    System.out.println("Node: " + node.getEndPoint());
    System.out.println("Status: " + (node.isUp() ? "UP" : "DOWN"));
}

======== Maintenance Operations ==========
# Rolling upgrade procedure
# 1. Upgrade one node at a time
# 2. Drain node
nodetool drain

# 3. Stop Cassandra
sudo systemctl stop cassandra

# 4. Upgrade software
# 5. Start Cassandra
sudo systemctl start cassandra

# 6. Verify node status
nodetool status

# 7. Repeat for next node

# Rolling restart
# 1. Drain node
nodetool drain

# 2. Restart Cassandra
sudo systemctl restart cassandra

# 3. Verify status
nodetool status

# 4. Repeat for next node

# Bootstrap new node
# 1. Install Cassandra
# 2. Configure cassandra.yaml
# 3. Set initial_token if not using vnodes
# 4. Start Cassandra
# 5. Verify node joins ring
nodetool status

======== Backup and Restore ==========
# Snapshot backup
nodetool snapshot <keyspace> <table>

# List snapshots
ls -la /var/lib/cassandra/data/<keyspace>/<table>-*/snapshots/

# Incremental backup
# Enable in cassandra.yaml
incremental_backups: true

# Clear snapshots
nodetool clearsnapshot <keyspace>

# Restore from snapshot
# 1. Stop Cassandra
# 2. Copy snapshot files
# 3. Remove current data files
# 4. Copy snapshot to data directory
# 5. Start Cassandra

# Python backup automation
import subprocess
import shutil
from datetime import datetime

def create_snapshot(keyspace, table, backup_dir):
    # Create snapshot
    subprocess.run([
        'nodetool', 'snapshot', keyspace, table
    ])
    
    # Find snapshot directory
    snapshot_dir = f"/var/lib/cassandra/data/{keyspace}/{table}-*/snapshots/*"
    
    # Copy to backup location
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    target_dir = f"{backup_dir}/{keyspace}_{table}_{timestamp}"
    
    shutil.copytree(snapshot_dir, target_dir)
    
    # Clear snapshot
    subprocess.run([
        'nodetool', 'clearsnapshot', keyspace
    ])
    
    return target_dir

======== Load Balancing ==========
# Rebalance cluster
nodetool rebuild

# Move data to specific node
nodetool move <new_token>

# Cleanup data
nodetool cleanup

# Compact specific table
nodetool compact <keyspace> <table>

# Force major compaction
nodetool compact

# Python load balancing
def rebalance_cluster(session):
    # Get cluster metadata
    metadata = session.cluster.metadata
    
    # Check token distribution
    for host in metadata.all_hosts():
        tokens = host.tokens
        print(f"Node {host.address} has {len(tokens)} tokens")
    
    # Suggest rebalancing if needed
    # Implementation depends on specific requirements

======== Troubleshooting ==========
# Common issues and solutions

# Node down
nodetool status
# Check logs: /var/log/cassandra/system.log
# Check network connectivity
# Verify configuration

# High memory usage
nodetool info
# Check heap usage
# Review memtable settings
# Monitor GC activity

# Slow queries
nodetool cfstats
# Check read/write latency
# Review compaction strategy
# Optimize queries

# Repair issues
nodetool repair -pr
# Check repair history
# Monitor pending repairs
# Schedule regular repairs

# Python health check
def health_check(contact_points):
    try:
        cluster = Cluster(contact_points)
        session = cluster.connect()
        
        # Test basic query
        result = session.execute("SELECT release_version FROM system.local")
        version = result[0][0]
        
        print(f"Cluster healthy, version: {version}")
        
        session.shutdown()
        cluster.shutdown()
        
        return True
    except Exception as e:
        print(f"Health check failed: {e}")
        return False

======== Cluster Scaling ==========
# Add nodes to cluster
# 1. Install Cassandra on new node
# 2. Configure with same cluster name
# 3. Set auto_bootstrap: true
# 4. Start Cassandra
# 5. Verify node joins ring
# 6. Run repair if needed

# Remove nodes from cluster
# 1. Decommission gracefully
nodetool decommission

# 2. Or force remove if down
nodetool removenode <host_id>

# Scale up considerations
# Monitor cluster performance
# Check token distribution
# Verify data replication
# Update application configuration

# Python scaling script
def scale_cluster(new_nodes):
    for node in new_nodes:
        # Bootstrap new node
        print(f"Bootstrapping node: {node}")
        # Implementation depends on environment
        
        # Verify node joined
        if verify_node_joined(node):
            print(f"Node {node} successfully joined cluster")
        else:
            print(f"Failed to bootstrap node: {node}")

======== Best Practices ==========
# Regular maintenance
# ✓ Schedule regular repairs
# ✓ Monitor cluster health
# ✓ Plan capacity upgrades
# ✓ Test disaster recovery

# Node management
# ✓ Use rolling upgrades
# ✓ Monitor node performance
# ✓ Plan node decommissioning
# ✓ Document procedures

# Backup procedures
# ✓ Regular snapshots
# ✓ Test restore procedures
# ✓ Store backups offsite
# ✓ Document backup strategy

# Monitoring
# ✓ Set up alerting
# ✓ Monitor key metrics
# ✓ Regular health checks
# ✓ Performance baseline`,
        },
        {
          command: 'Monitoring and Troubleshooting',
          description: 'Monitor Cassandra performance and troubleshoot issues',
          usage: 'Metrics collection, alerting, and problem diagnosis',
          example: `# Monitoring and Troubleshooting in Cassandra

======== Key Metrics Monitoring ==========
# Nodetool commands for metrics
nodetool info                    # Basic cluster info
nodetool tpstats                 # Thread pool stats
nodetool cfstats                 # Table statistics
nodetool netstats                # Network statistics
nodetool compactionstats         # Compaction status
nodetool gcstats                 # Garbage collection

# System tables for monitoring
SELECT * FROM system.metrics;                    # JMX metrics
SELECT * FROM system.large_partitions;          # Large partitions
SELECT * FROM system.size_estimates;            # Size estimates
SELECT * FROM system.compaction_history;         # Compaction history

# Python monitoring script
from cassandra.cluster import Cluster
from cassandra.query import dict_factory
import time

class CassandraMonitor:
    def __init__(self, contact_points):
        self.cluster = Cluster(contact_points)
        self.session = self.cluster.connect()
        self.session.row_factory = dict_factory
    
    def get_cluster_info(self):
        """Get basic cluster information"""
        info = self.session.execute("SELECT * FROM system.local").one()
        return {
            'release_version': info['release_version'],
            'cql_version': info['cql_version'],
            'native_transport_version': info['native_transport_version']
        }
    
    def get_node_metrics(self):
        """Get node-level metrics"""
        metrics = self.session.execute("SELECT * FROM system.metrics")
        node_metrics = {}
        
        for metric in metrics:
            if metric['name'].startswith('org.apache.cassandra.metrics'):
                node_metrics[metric['name']] = metric['value']
        
        return node_metrics
    
    def check_large_partitions(self, keyspace, table, threshold_mb=100):
        """Check for large partitions"""
        threshold_bytes = threshold_mb * 1024 * 1024
        
        large_parts = self.session.execute(
            """
            SELECT keyspace_name, table_name, partition_size, partition_count
            FROM system.size_estimates
            WHERE keyspace_name = %s AND table_name = %s
            AND mean_partition_size > %s
            """,
            [keyspace, table, threshold_bytes]
        )
        
        return list(large_parts)
    
    def monitor_compaction(self):
        """Monitor compaction status"""
        compaction_history = self.session.execute(
            "SELECT * FROM system.compaction_history ORDER BY started_at DESC LIMIT 10"
        )
        
        return list(compaction_history)

# Usage
monitor = CassandraMonitor(['127.0.0.1'])
cluster_info = monitor.get_cluster_info()
print(f"Cluster version: {cluster_info['release_version']}")

large_partitions = monitor.check_large_partitions('mykeyspace', 'mytable')
if large_partitions:
    print(f"Found {len(large_partitions)} large partitions")

======== Performance Monitoring ==========
# Read/Write latency monitoring
SELECT * FROM system.metrics 
WHERE name LIKE '%Latency%';

# Throughput monitoring
SELECT * FROM system.metrics 
WHERE name LIKE '%Throughput%';

# Memory usage monitoring
SELECT * FROM system.metrics 
WHERE name LIKE '%Memory%';

# Disk usage monitoring
SELECT * FROM system.metrics 
WHERE name LIKE '%Disk%';

# Java performance monitoring
import com.datastax.oss.driver.api.core.metrics.Metrics;

Metrics metrics = session.getMetrics();
for (MetricId id, Metric metric : metrics) {
    if (id.getName().contains("latency")) {
        System.out.println(id + ": " + metric.getValue());
    }
}

======== Alerting Setup ==========
# Python alerting script
import smtplib
from email.mime.text import MIMEText

class CassandraAlerting:
    def __init__(self, monitor, smtp_config):
        self.monitor = monitor
        self.smtp_config = smtp_config
    
    def check_and_alert(self):
        """Check metrics and send alerts if needed"""
        alerts = []
        
        # Check for large partitions
        large_parts = self.monitor.check_large_partitions('mykeyspace', 'mytable')
        if large_parts:
            alerts.append(f"Found {len(large_parts)} large partitions")
        
        # Check pending compactions
        compaction_stats = self.monitor.get_compaction_stats()
        if compaction_stats['pending_compactions'] > 10:
            alerts.append("High number of pending compactions")
        
        # Check memory usage
        node_metrics = self.monitor.get_node_metrics()
        heap_usage = node_metrics.get('jvm.memory.heap.used', 0)
        heap_max = node_metrics.get('jvm.memory.heap.max', 1)
        heap_percent = (heap_usage / heap_max) * 100
        
        if heap_percent > 80:
            alerts.append(f"High heap usage: {heap_percent:.1f}%")
        
        # Send alerts
        if alerts:
            self.send_alert(alerts)
    
    def send_alert(self, alerts):
        """Send email alert"""
        subject = "Cassandra Alert"
        body = "\\n".join(alerts)
        
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = self.smtp_config['from']
        msg['To'] = self.smtp_config['to']
        
        with smtplib.SMTP(self.smtp_config['host'], self.smtp_config['port']) as server:
            server.send_message(msg)

======== Troubleshooting Common Issues ==========
# High CPU usage
# 1. Check thread pool stats
nodetool tpstats

# 2. Look for blocked tasks
# 3. Check compaction activity
nodetool compactionstats

# 4. Review GC activity
nodetool gcstats

# Slow queries
# 1. Check table statistics
nodetool cfstats

# 2. Look at read/write latency
# 3. Review query patterns
# 4. Check for hot partitions

# Memory issues
# 1. Check heap usage
nodetool info

# 2. Monitor GC activity
nodetool gcstats

# 3. Review memtable settings
# 4. Check for large partitions

# Python troubleshooting script
def troubleshoot_slow_queries(session, keyspace, table):
    """Diagnose slow query issues"""
    
    # Check table statistics
    stats = session.execute(
        f"SELECT * FROM system.size_estimates WHERE keyspace_name = '{keyspace}' AND table_name = '{table}'"
    )
    
    issues = []
    
    for stat in stats:
        if stat['mean_partition_size'] > 100 * 1024 * 1024:  # 100MB
            issues.append(f"Large partitions detected: {stat['mean_partition_size']} bytes")
        
        if stat['partitions_count'] > 1000000:
            issues.append(f"High partition count: {stat['partitions_count']}")
    
    return issues

# Node down troubleshooting
def troubleshoot_node_down(node_address):
    """Troubleshoot down node"""
    
    print(f"Troubleshooting node: {node_address}")
    
    # Check network connectivity
    import subprocess
    try:
        result = subprocess.run(['ping', '-c', '3', node_address], 
                              capture_output=True, text=True)
        if result.returncode != 0:
            print("Network connectivity issue")
    except:
        print("Cannot ping node")
    
    # Check Cassandra process
    try:
        result = subprocess.run(['ssh', node_address, 'systemctl status cassandra'], 
                              capture_output=True, text=True)
        print(result.stdout)
    except:
        print("Cannot check Cassandra service")
    
    # Check system resources
    try:
        result = subprocess.run(['ssh', node_address, 'free -h'], 
                              capture_output=True, text=True)
        print("Memory usage:")
        print(result.stdout)
    except:
        print("Cannot check memory usage")

======== Log Analysis ==========
# Cassandra log locations
# System log: /var/log/cassandra/system.log
# Debug log: /var/log/cassandra/debug.log
# GC log: /var/log/cassandra/gc.log
# Access log: /var/log/cassandra/access.log

# Python log analysis
import re
from collections import defaultdict

def analyze_cassandra_logs(log_file, error_patterns):
    """Analyze Cassandra logs for errors"""
    
    error_counts = defaultdict(int)
    recent_errors = []
    
    with open(log_file, 'r') as f:
        for line in f:
            for pattern in error_patterns:
                if re.search(pattern, line):
                    error_counts[pattern] += 1
                    recent_errors.append(line.strip())
    
    return error_counts, recent_errors[-10:]  # Last 10 errors

# Usage
error_patterns = [
    r'ERROR',
    r'WARN.*timeout',
    r'WARN.*UnavailableException',
    r'OutOfMemoryError'
]

error_counts, recent_errors = analyze_cassandra_logs(
    '/var/log/cassandra/system.log', 
    error_patterns
)

print("Error counts:")
for pattern, count in error_counts.items():
    print(f"{pattern}: {count}")

print("\\nRecent errors:")
for error in recent_errors:
    print(error)

======== Performance Baseline ==========
# Establish performance baseline
def create_performance_baseline(session, duration_minutes=60):
    """Collect performance baseline data"""
    
    import time
    start_time = time.time()
    end_time = start_time + (duration_minutes * 60)
    
    baseline_data = []
    
    while time.time() < end_time:
        timestamp = time.time()
        
        # Collect metrics
        metrics = session.execute("SELECT * FROM system.metrics")
        
        snapshot = {
            'timestamp': timestamp,
            'metrics': {m['name']: m['value'] for m in metrics}
        }
        
        baseline_data.append(snapshot)
        
        time.sleep(60)  # Collect every minute
    
    return baseline_data

# Analyze performance against baseline
def analyze_performance_deviation(baseline, current):
    """Compare current performance against baseline"""
    
    deviations = []
    
    for metric_name in baseline['metrics']:
        baseline_value = baseline['metrics'][metric_name]
        current_value = current['metrics'][metric_name]
        
        if baseline_value > 0:
            deviation = abs(current_value - baseline_value) / baseline_value
            
            if deviation > 0.5:  # 50% deviation
                deviations.append({
                    'metric': metric_name,
                    'baseline': baseline_value,
                    'current': current_value,
                    'deviation': deviation
                })
    
    return deviations

======== Monitoring Tools Integration ==========
# Prometheus exporter configuration
# Download cassandra-exporter
# Configure to expose metrics on port 5556

# Grafana dashboard setup
# Import Cassandra dashboard
# Configure alerts for key metrics

# DataDog integration
# Configure DataDog agent
# Set up custom metrics

# Python Prometheus client
from prometheus_client import start_http_server, Gauge, Counter

# Define metrics
cassandra_heap_usage = Gauge('cassandra_heap_usage_bytes', 'Cassandra heap usage')
cassandra_read_latency = Gauge('cassandra_read_latency_seconds', 'Cassandra read latency')
cassandra_write_latency = Gauge('cassandra_write_latency_seconds', 'Cassandra write latency')

def update_prometheus_metrics(session):
    """Update Prometheus metrics"""
    
    # Get heap usage
    metrics = session.execute("SELECT value FROM system.metrics WHERE name = 'jvm.memory.heap.used'")
    if metrics:
        cassandra_heap_usage.set(metrics[0].value)
    
    # Update other metrics...
    
    # Start HTTP server
    start_http_server(5556)

======== Best Practices ==========
# Monitoring setup
# ✓ Monitor key performance indicators
# ✓ Set up alerting thresholds
# ✓ Establish performance baselines
# ✓ Regular health checks

# Troubleshooting process
# ✓ Check logs first
# ✓ Verify cluster status
# ✓ Monitor system resources
# ✓ Check network connectivity

# Performance optimization
# ✓ Regular performance reviews
# ✓ Capacity planning
# ✓ Query optimization
# ✓ Configuration tuning`,
        },
      ],
    },
  ],
};
