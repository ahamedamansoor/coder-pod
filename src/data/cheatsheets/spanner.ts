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
          command: 'Google Spanner Introduction',
          description: 'Understanding Google Spanner concepts and architecture',
          usage: 'Basic Spanner terminology and concepts',
          example: `# Google Spanner is a globally distributed relational database service

======== Key Concepts ==========
# Globally Distributed: Data replicated across multiple regions
# Horizontal Scalability: Automatically scales to handle any workload
# Strong Consistency: External consistency across all replicas
# ACID Transactions: Full transactional support globally
# SQL Interface: Standard SQL with ANSI 2011 features
# Schema Evolution: Online schema changes without downtime
# Multi-Regional: Active-active replication across regions
# Automatic Sharding: Data automatically partitioned across nodes

======== Architecture Benefits ==========
# Global scale with local latency
# 99.999% availability SLA
# Zero downtime for maintenance
# Automatic failover and recovery
# Consistent backups globally
# Integrated with Google Cloud ecosystem
- Cloud Storage integration
- BigQuery integration
- Dataflow pipelines
- Cloud Functions triggers

======== Google Spanner Components ==========
# Spanner Instances: Compute and storage resources
# Spanner Databases: Schema and data containers
# Spanner Nodes: Compute units for processing
# Cloud Console: Web-based management interface
# gcloud CLI: Command-line interface
# Client Libraries: Multiple language support
# Change Streams: CDC and data streaming
# Backup and Restore: Point-in-time recovery`,
        },
        {
          command: 'Installation and Setup',
          description: 'Set up Google Cloud and Spanner using various methods',
          usage: 'Cloud Console, gcloud CLI, and client libraries',
          example: `# Google Spanner Setup Options

======== Google Cloud Setup ==========
# Install Google Cloud CLI
# Download from: https://cloud.google.com/sdk/docs/install

# Initialize gcloud
gcloud init

# Login to Google Cloud
gcloud auth login

# Set your project
gcloud config set project YOUR_PROJECT_ID

# Enable Spanner API
gcloud services enable spanner.googleapis.com

# Verify Spanner API is enabled
gcloud services list --enabled | grep spanner

======== Cloud Console Setup ==========
# 1. Go to Google Cloud Console
# 2. Navigate to Spanner section
# 3. Create new instance
# 4. Choose configuration (regional or multi-regional)
# 5. Set node count and display name
# 6. Create database

======== Client Libraries Setup ==========
# Python
pip install google-cloud-spanner

# Node.js
npm install @google-cloud/spanner

# Java
# Add to pom.xml:
# <dependency>
#   <groupId>com.google.cloud</groupId>
#   <artifactId>google-cloud-spanner</artifactId>
#   <version>6.45.0</version>
# </dependency>

# Go
go get cloud.google.com/go/spanner

======== Verification ==========
# Test connection via gcloud
gcloud spanner databases list --instance=YOUR_INSTANCE

# Check instance details
gcloud spanner instances describe YOUR_INSTANCE

# Test basic query
gcloud spanner databases execute-sql YOUR_DATABASE \\
  --instance=YOUR_INSTANCE \\
  --sql="SELECT 'Hello Spanner' as greeting"`,
        },
        {
          command: 'Database Connection',
          description: 'Connect to Google Spanner from various tools and languages',
          usage: 'Cloud Console, gcloud, JDBC, and client libraries',
          example: `# Google Spanner Connection Methods

======== Cloud Console Connection ==========
# 1. Open Google Cloud Console
# 2. Navigate to Spanner
# 3. Select your instance and database
# 4. Use Query editor for SQL operations
# 5. View schema and data in web interface

======== gcloud CLI Connection ==========
# List instances
gcloud spanner instances list

# Execute SQL
gcloud spanner databases execute-sql DATABASE_ID \\
  --instance=INSTANCE_ID \\
  --sql="SELECT * FROM TABLE"

# Interactive SQL shell
gcloud spanner databases execute-sql DATABASE_ID \\
  --instance=INSTANCE_ID \\
  --interactive

======== Python Connection ==========
from google.cloud import spanner

# Initialize client
client = spanner.Client()
instance = client.instance('my-instance')
database = instance.database('my-database')

# Execute query
with database.snapshot() as snapshot:
    results = snapshot.execute_sql(
        "SELECT * FROM singers"
    )
    for row in results:
        print(row)

======== Node.js Connection ==========
const {Spanner} = require('@google-cloud/spanner');

// Initialize client
const spanner = new Spanner();
const instance = spanner.instance('my-instance');
const database = instance.database('my-database');

// Execute query
const [rows] = await database.run({
    sql: 'SELECT * FROM singers'
});

rows.forEach(row => {
    console.log(row.toJSON());
});

======== Java Connection ==========
import com.google.cloud.spanner.*;

// Initialize client
SpannerOptions options = SpannerOptions.newBuilder().build();
Spanner spanner = options.getService();
DatabaseId dbId = DatabaseId.of("project", "instance", "database");

// Execute query
try (ResultSet rs = spanner.getDatabaseClient(dbId)
    .singleUse()
    .executeQuery(Statement.of("SELECT * FROM singers"))) {
    while (rs.next()) {
        System.out.println(rs.getString(0));
    }
}

======== JDBC Connection ==========
# JDBC URL format:
# jdbc:cloudspanner://localhost:9010/projects/PROJECT_ID/instances/INSTANCE_ID/databases/DATABASE_ID

# Connection example:
Connection connection = DriverManager.getConnection(
    "jdbc:cloudspanner://localhost:9010/projects/my-project/instances/my-instance/databases/my-database"
);`,
        },
        {
          command: 'Basic Database Operations',
          description: 'Essential database management commands',
          usage: 'Instance creation, database management, basic queries',
          example: `# Basic Database Operations

======== Instance Management ==========
# Create regional instance
gcloud spanner instances create my-instance \\
  --config=regional-us-central1 \\
  --description="My Spanner Instance" \\
  --nodes=3

# Create multi-regional instance
gcloud spanner instances create global-instance \\
  --config=nam6 \\
  --description="Global Instance" \\
  --nodes=1

# List instances
gcloud spanner instances list

# Update instance (scale up/down)
gcloud spanner instances update my-instance --nodes=5

# Delete instance
gcloud spanner instances delete my-instance

======== Database Management ==========
# Create database with schema
gcloud spanner databases create my-database \\
  --instance=my-instance \\
  --ddl="CREATE TABLE Singers (
    SingerId INT64 NOT NULL,
    FirstName STRING(1024),
    LastName STRING(1024),
    SingerInfo BYTES(MAX)
  ) PRIMARY KEY (SingerId)"

# List databases
gcloud spanner databases list --instance=my-instance

# Get database info
gcloud spanner databases describe my-database \\
  --instance=my-instance

# Update database schema
gcloud spanner databases ddl update my-database \\
  --instance=my-instance \\
  --ddl="CREATE TABLE Albums (
    AlbumId INT64 NOT NULL,
    SingerId INT64 NOT NULL,
    AlbumTitle STRING(1024),
    MarketingBudget INT64
  ) PRIMARY KEY (AlbumId)"

======== Basic System Queries ==========
# Current database info
SELECT * FROM INFORMATION_SCHEMA.DATABASES

# Table information
SELECT 
  TABLE_NAME,
  TABLE_TYPE,
  CREATION_TIME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = ''

# Index information
SELECT 
  INDEX_NAME,
  TABLE_NAME,
  IS_UNIQUE,
  IS_NULL_FILTERED
FROM INFORMATION_SCHEMA.INDEXES
WHERE TABLE_SCHEMA = ''

======== Statistics and Monitoring ==========
# Table statistics
SELECT 
  TABLE_NAME,
  ROW_COUNT,
  SIZE_BYTES,
  LOGICAL_BYTES_STORED
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = ''

# Database options
SELECT 
  OPTION_NAME,
  OPTION_VALUE
FROM INFORMATION_SCHEMA.DATABASE_OPTIONS
WHERE DATABASE_NAME = 'my-database'`,
        },
      ],
    },
    {
      title: 'Basic SQL Operations',
      commands: [
        {
          command: 'Create Tables and Schemas',
          description: 'Create schemas and tables with Spanner-specific features',
          usage: 'CREATE TABLE, data types, constraints, and optimization',
          example: `# Creating Schemas and Tables in Spanner

======== Basic Table Creation ==========
# Simple table
CREATE TABLE CUSTOMERS (
    CUSTOMER_ID STRING(36) NOT NULL,
    FIRST_NAME STRING(100) NOT NULL,
    LAST_NAME STRING(100) NOT NULL,
    EMAIL STRING(255),
    PHONE STRING(20),
    CREATED_AT TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (CUSTOMER_ID);

# Table with auto-increment alternative
CREATE TABLE ORDERS (
    ORDER_ID STRING(36) NOT NULL DEFAULT (GENERATE_UUID()),
    CUSTOMER_ID STRING(36) NOT NULL,
    ORDER_DATE TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true),
    TOTAL_AMOUNT NUMERIC,
    STATUS STRING(50),
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(CUSTOMER_ID)
) PRIMARY KEY (ORDER_ID);

======== Spanner-Specific Features ==========
# Interleaved tables (parent-child)
CREATE TABLE CUSTOMERS (
    CUSTOMER_ID STRING(36) NOT NULL,
    CUSTOMER_NAME STRING(255),
    CREATED_AT TIMESTAMP NOT NULL,
) PRIMARY KEY (CUSTOMER_ID);

CREATE TABLE ORDERS (
    CUSTOMER_ID STRING(36) NOT NULL,
    ORDER_ID STRING(36) NOT NULL,
    ORDER_TOTAL NUMERIC,
    CREATED_AT TIMESTAMP NOT NULL,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(CUSTOMER_ID)
) PRIMARY KEY (CUSTOMER_ID, ORDER_ID),
INTERLEAVE IN PARENT CUSTOMERS ON DELETE CASCADE;

# Table with commit timestamp
CREATE TABLE AUDIT_LOG (
    LOG_ID STRING(36) NOT NULL,
    TABLE_NAME STRING(100),
    OPERATION STRING(10),
    USER_EMAIL STRING(255),
    TIMESTAMP TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (LOG_ID);

======== Data Types and Constraints ==========
# Comprehensive table with all data types
CREATE TABLE PRODUCTS (
    PRODUCT_ID STRING(36) NOT NULL,
    NAME STRING(255) NOT NULL,
    DESCRIPTION STRING(MAX),
    PRICE NUMERIC(10,2),
    QUANTITY_IN_STOCK INT64,
    IS_AVAILABLE BOOL,
    CREATED_DATE DATE,
    CREATED_AT TIMESTAMP,
    METADATA JSON,
    TAGS ARRAY<STRING(100)>,
    CONSTRAINT CHK_Price_Positive CHECK (PRICE >= 0),
    CONSTRAINT CHK_Stock_NonNegative CHECK (QUANTITY_IN_STOCK >= 0)
) PRIMARY KEY (PRODUCT_ID);

======== Index Creation ==========
# Secondary index
CREATE INDEX PRODUCTS_BY_NAME ON PRODUCTS (NAME);

# Composite index
CREATE INDEX ORDERS_BY_CUSTOMER_DATE ON ORDERS (CUSTOMER_ID, ORDER_DATE DESC);

# Storing index (covering index)
CREATE INDEX PRODUCTS_WITH_PRICE ON PRODUCTS (CATEGORY, PRICE)
STORING (NAME, DESCRIPTION);

# Unique index
CREATE UNIQUE INDEX CUSTOMERS_BY_EMAIL ON CUSTOMERS (EMAIL);

# Filtered index (Spanner 6.0+)
CREATE INDEX ACTIVE_PRODUCTS ON PRODUCTS (PRODUCT_ID, NAME)
WHERE IS_AVAILABLE = TRUE;`,
        },
        {
          command: 'Data Manipulation',
          description: 'Insert, update, delete operations with Spanner features',
          usage: 'DML operations, transactions, and batch processing',
          example: `# Data Manipulation in Spanner

======== Insert Operations ==========
# Single row insert
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL)
VALUES ('cust-001', 'John', 'Doe', 'john.doe@example.com');

# Multiple row insert
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE)
VALUES 
    ('cust-002', 'Jane', 'Smith', 'jane.smith@example.com', '555-0101'),
    ('cust-003', 'Bob', 'Johnson', 'bob.johnson@example.com', '555-0102');

# Insert with generated UUID
INSERT INTO ORDERS (ORDER_ID, CUSTOMER_ID, TOTAL_AMOUNT, STATUS)
VALUES (GENERATE_UUID(), 'cust-001', 99.99, 'PENDING');

# Insert with commit timestamp
INSERT INTO AUDIT_LOG (LOG_ID, TABLE_NAME, OPERATION, USER_EMAIL)
VALUES (GENERATE_UUID(), 'CUSTOMERS', 'INSERT', 'admin@example.com');

======== Update Operations ==========
# Simple update
UPDATE CUSTOMERS 
SET PHONE = '555-0103' 
WHERE CUSTOMER_ID = 'cust-001';

# Update with calculation
UPDATE PRODUCTS 
SET PRICE = PRICE * 1.1 
WHERE CATEGORY = 'Electronics';

# Update with timestamp
UPDATE ORDERS 
SET STATUS = 'SHIPPED', 
    SHIPPED_AT = CURRENT_TIMESTAMP() 
WHERE ORDER_DATE < TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY);

======== Delete Operations ==========
# Delete with conditions
DELETE FROM CUSTOMERS 
WHERE CREATED_AT < TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 365 DAY);

# Delete based on subquery
DELETE FROM ORDERS 
WHERE CUSTOMER_ID IN (
    SELECT CUSTOMER_ID 
    FROM CUSTOMERS 
    WHERE STATUS = 'INACTIVE'
);

# Truncate table (not supported directly)
DELETE FROM TABLE_NAME WHERE TRUE;

======== Batch Operations ==========
# Using mutations (Python example)
from google.cloud import spanner

def batch_insert():
    client = spanner.Client()
    instance = client.instance('my-instance')
    database = instance.database('my-database')
    
    with database.batch() as batch:
        batch.insert(
            table='CUSTOMERS',
            columns=['CUSTOMER_ID', 'FIRST_NAME', 'LAST_NAME', 'EMAIL'],
            values=[
                ('cust-004', 'Alice', 'Brown', 'alice@example.com'),
                ('cust-005', 'Charlie', 'Wilson', 'charlie@example.com')
            ]
        )

# Partitioned DML for large operations
UPDATE PRODUCTS@{PARTITIONED_UPDATE} 
SET PRICE = PRICE * 0.9 
WHERE CATEGORY = 'Clearance';

DELETE FROM ORDERS@{PARTITIONED_DELETE} 
WHERE ORDER_DATE < TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 YEAR);`,
        },
        {
          command: 'Basic Queries and Functions',
          description: 'SELECT queries and Spanner-specific functions',
          usage: 'Basic queries with Spanner functions and optimizations',
          example: `# Basic Queries and Functions in Spanner

======== Simple Queries ==========
# Select all columns
SELECT * FROM CUSTOMERS;

# Select specific columns
SELECT CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL 
FROM CUSTOMERS 
WHERE CREATED_AT >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
ORDER BY LAST_NAME, FIRST_NAME;

# Distinct values
SELECT DISTINCT STATUS FROM ORDERS;

======== Aggregation Functions ==========
# Basic aggregations
SELECT COUNT(*) AS TOTAL_CUSTOMERS,
       COUNTIF(CREATED_AT >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)) AS NEW_CUSTOMERS,
       COUNTIF(EMAIL IS NOT NULL) AS CUSTOMERS_WITH_EMAIL
FROM CUSTOMERS;

# Group by with having
SELECT CATEGORY, 
       COUNT(*) AS PRODUCT_COUNT,
       AVG(PRICE) AS AVG_PRICE,
       SUM(QUANTITY_IN_STOCK) AS TOTAL_STOCK
FROM PRODUCTS
GROUP BY CATEGORY
HAVING COUNT(*) > 5
ORDER BY AVG_PRICE DESC;

======== String Functions ==========
# String manipulation
SELECT 
    FIRST_NAME,
    LAST_NAME,
    CONCAT(FIRST_NAME, ' ', LAST_NAME) AS FULL_NAME,
    UPPER(EMAIL) AS UPPERCASE_EMAIL,
    LENGTH(FIRST_NAME) AS FIRST_NAME_LENGTH,
    SUBSTR(FIRST_NAME, 1, 1) AS INITIAL
FROM CUSTOMERS;

# String search
SELECT * FROM PRODUCTS 
WHERE UPPER(NAME) LIKE '%LAPTOP%'
  OR CONTAINS_SUBSTR(DESCRIPTION, 'gaming');

======== Date and Time Functions ==========
# Date calculations
SELECT 
    ORDER_ID,
    ORDER_DATE,
    TIMESTAMP_DIFF(CURRENT_TIMESTAMP(), ORDER_DATE, DAY) AS DAYS_AGO,
    TIMESTAMP_ADD(ORDER_DATE, INTERVAL 6 MONTH) AS SIX_MONTHS_LATER,
    EXTRACT(YEAR FROM ORDER_DATE) AS ORDER_YEAR
FROM ORDERS;

# Timestamp operations
SELECT 
    LOG_ID,
    TIMESTAMP,
    TIMESTAMP_DIFF(CURRENT_TIMESTAMP(), TIMESTAMP, SECOND) AS SECONDS_AGO,
    FORMAT_TIMESTAMP('%Y-%m-%d %H:%M:%S', TIMESTAMP) AS FORMATTED_TIME
FROM AUDIT_LOG;

======== Conditional Functions ==========
# CASE statements
SELECT 
    PRODUCT_ID,
    NAME,
    PRICE,
    CASE 
        WHEN PRICE < 50 THEN 'Budget'
        WHEN PRICE < 200 THEN 'Mid-Range'
        WHEN PRICE < 500 THEN 'Premium'
        ELSE 'Luxury'
    END AS PRICE_CATEGORY
FROM PRODUCTS;

# COALESCE and NULLIF
SELECT 
    CUSTOMER_ID,
    COALESCE(PHONE, 'N/A') AS PHONE,
    NULLIF(STATUS, 'ACTIVE') AS NON_ACTIVE_STATUS
FROM CUSTOMERS;

======== JSON Functions ==========
# JSON operations (Spanner 6.0+)
SELECT 
    PRODUCT_ID,
    NAME,
    JSON_VALUE(METADATA, '$.brand') AS BRAND,
    JSON_QUERY(METADATA, '$.specifications') AS SPECS,
    JSON_EXTRACT_ARRAY(METADATA, '$.tags') AS TAGS
FROM PRODUCTS
WHERE METADATA IS NOT NULL;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced SQL Features',
      commands: [
        {
          command: 'Window Functions',
          description: 'Advanced analytical functions with window operations',
          usage: 'OVER, ROWS, RANGE, window functions in Spanner',
          example: `# Window Functions in Google Spanner

======== Ranking Functions ==========
# ROW_NUMBER, RANK, DENSE_RANK
SELECT 
    CUSTOMER_ID,
    FIRST_NAME,
    TOTAL_SPENT,
    ROW_NUMBER() OVER (ORDER BY TOTAL_SPENT DESC) AS ROW_NUM,
    RANK() OVER (ORDER BY TOTAL_SPENT DESC) AS RANK_NUM,
    DENSE_RANK() OVER (ORDER BY TOTAL_SPENT DESC) AS DENSE_RANK_NUM
FROM (
    SELECT 
        C.CUSTOMER_ID,
        C.FIRST_NAME,
        COALESCE(SUM(O.TOTAL_AMOUNT), 0) AS TOTAL_SPENT
    FROM CUSTOMERS C
    LEFT JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
    GROUP BY C.CUSTOMER_ID, C.FIRST_NAME
) CUSTOMER_SPENDING;

======== Aggregate Window Functions ==========
# Moving averages and running totals
SELECT 
    ORDER_DATE,
    TOTAL_AMOUNT,
    SUM(TOTAL_AMOUNT) OVER (ORDER BY ORDER_DATE 
                           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS RUNNING_TOTAL,
    AVG(TOTAL_AMOUNT) OVER (ORDER BY ORDER_DATE 
                           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS MOVING_AVG_3,
    LAG(TOTAL_AMOUNT, 1) OVER (ORDER BY ORDER_DATE) AS PREVIOUS_ORDER_AMOUNT
FROM ORDERS
ORDER BY ORDER_DATE;

======== Distribution Functions ==========
# NTILE and percentiles
SELECT 
    PRODUCT_ID,
    NAME,
    PRICE,
    NTILE(4) OVER (ORDER BY PRICE) AS PRICE_QUARTILE,
    PERCENT_RANK() OVER (ORDER BY PRICE) AS PRICE_PERCENTILE
FROM PRODUCTS;

======== Partition Window Functions ==========
# Window functions with partitioning
SELECT 
    CATEGORY,
    PRODUCT_ID,
    NAME,
    PRICE,
    ROW_NUMBER() OVER (PARTITION BY CATEGORY ORDER BY PRICE DESC) AS RANK_IN_CATEGORY,
    AVG(PRICE) OVER (PARTITION BY CATEGORY) AS AVG_CATEGORY_PRICE,
    PRICE - AVG(PRICE) OVER (PARTITION BY CATEGORY) AS PRICE_DIFF_FROM_AVG
FROM PRODUCTS
ORDER BY CATEGORY, PRICE DESC;`,
        },
        {
          command: 'Subqueries and CTEs',
          description: 'Complex subqueries and Common Table Expressions',
          usage: 'WITH clauses, correlated subqueries, EXISTS in Spanner',
          example: `# Subqueries and CTEs in Google Spanner

======== Common Table Expressions ==========
# Basic CTE
WITH CUSTOMER_STATS AS (
    SELECT 
        CUSTOMER_ID,
        COUNT(*) AS ORDER_COUNT,
        SUM(TOTAL_AMOUNT) AS TOTAL_SPENT,
        AVG(TOTAL_AMOUNT) AS AVG_ORDER_VALUE
    FROM ORDERS
    GROUP BY CUSTOMER_ID
)
SELECT 
    C.FIRST_NAME,
    C.LAST_NAME,
    CS.ORDER_COUNT,
    CS.TOTAL_SPENT,
    CS.AVG_ORDER_VALUE
FROM CUSTOMERS C
JOIN CUSTOMER_STATS CS ON C.CUSTOMER_ID = CS.CUSTOMER_ID
WHERE CS.ORDER_COUNT > 5;

======== Recursive CTEs ==========
# Hierarchical data with recursive CTE
WITH RECURSIVE EMPLOYEE_HIERARCHY AS (
    -- Base case: top-level managers
    SELECT 
        EMPLOYEE_ID,
        NAME,
        MANAGER_ID,
        1 AS LEVEL
    FROM EMPLOYEES
    WHERE MANAGER_ID IS NULL
    
    UNION ALL
    
    -- Recursive case: subordinates
    SELECT 
        E.EMPLOYEE_ID,
        E.NAME,
        E.MANAGER_ID,
        EH.LEVEL + 1
    FROM EMPLOYEES E
    JOIN EMPLOYEE_HIERARCHY EH ON E.MANAGER_ID = EH.EMPLOYEE_ID
)
SELECT * FROM EMPLOYEE_HIERARCHY ORDER BY LEVEL, NAME;`,
        },
        {
          command: 'Join Operations',
          description: 'Advanced join types and optimization in Spanner',
          usage: 'INNER, LEFT, RIGHT, FULL joins with Spanner features',
          example: `# Advanced Join Operations in Google Spanner

======== Basic Joins ==========
# Inner join with multiple conditions
SELECT 
    C.CUSTOMER_ID,
    C.FIRST_NAME,
    O.ORDER_ID,
    O.TOTAL_AMOUNT,
    O.ORDER_DATE
FROM CUSTOMERS C
INNER JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
WHERE O.ORDER_DATE >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY);

======== Advanced Join Types ==========
# Left join with aggregation
SELECT 
    C.CUSTOMER_ID,
    C.FIRST_NAME,
    COUNT(O.ORDER_ID) AS ORDER_COUNT,
    COALESCE(SUM(O.TOTAL_AMOUNT), 0) AS TOTAL_SPENT
FROM CUSTOMERS C
LEFT JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
GROUP BY C.CUSTOMER_ID, C.FIRST_NAME
ORDER BY TOTAL_SPENT DESC;

======== Self-Joins ==========
# Employee-manager relationships
SELECT 
    E.NAME AS EMPLOYEE,
    M.NAME AS MANAGER
FROM EMPLOYEES E
LEFT JOIN EMPLOYEES M ON E.MANAGER_ID = M.EMPLOYEE_ID;`,
        },
      ],
    },
    {
      title: 'Spanner-Specific Features',
      commands: [
        {
          command: 'Interleaved Tables',
          description: 'Optimize parent-child relationships with interleaved tables',
          usage: 'INTERLEAVE IN PARENT for co-located data',
          example: `# Interleaved Tables in Google Spanner

======== Basic Interleaved Tables ==========
# Parent table
CREATE TABLE CUSTOMERS (
    CUSTOMER_ID STRING(36) NOT NULL,
    FIRST_NAME STRING(100),
    LAST_NAME STRING(100),
    EMAIL STRING(255),
    CREATED_AT TIMESTAMP NOT NULL,
) PRIMARY KEY (CUSTOMER_ID);

# Child table interleaved in parent
CREATE TABLE ORDERS (
    CUSTOMER_ID STRING(36) NOT NULL,
    ORDER_ID STRING(36) NOT NULL,
    ORDER_DATE TIMESTAMP NOT NULL,
    TOTAL_AMOUNT NUMERIC,
    STATUS STRING(50),
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(CUSTOMER_ID)
) PRIMARY KEY (CUSTOMER_ID, ORDER_ID),
INTERLEAVE IN PARENT CUSTOMERS ON DELETE CASCADE;

======== Performance Benefits ==========
# Co-located data access
SELECT 
    C.CUSTOMER_ID,
    C.FIRST_NAME,
    O.ORDER_ID,
    O.TOTAL_AMOUNT
FROM CUSTOMERS C
JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
WHERE C.CUSTOMER_ID = 'cust-001';`,
        },
        {
          command: 'Change Streams and CDC',
          description: 'Implement change data capture with change streams',
          usage: 'CREATE CHANGE STREAM for real-time data streaming',
          example: `# Change Streams and CDC in Google Spanner

======== Basic Change Stream ==========
# Create change stream for specific table
CREATE CHANGE STREAM CUSTOMER_STREAM FOR CUSTOMERS;

# Create change stream for multiple tables
CREATE CHANGE STREAM ECOMMERCE_STREAM 
  FOR CUSTOMERS, ORDERS, ORDER_ITEMS;

======== Query Change Streams ==========
# Query change stream data
SELECT 
  change_stream_name,
  partition_token,
  start_timestamp,
  end_timestamp,
  data_change_records
FROM 
  READ_CUSTOMER_STREAM (
    start_timestamp => '2024-01-01T00:00:00Z',
    end_timestamp => '2024-01-02T00:00:00Z'
  );`,
        },
        {
          command: 'JSON and Array Operations',
          description: 'Work with JSON and array data types in Spanner',
          usage: 'JSON functions, array operations, and structured data',
          example: `# JSON and Array Operations in Google Spanner

======== JSON Data Type ==========
# Table with JSON column
CREATE TABLE PRODUCTS (
    PRODUCT_ID STRING(36) NOT NULL,
    NAME STRING(255),
    PRICE NUMERIC,
    METADATA JSON,
    TAGS ARRAY<STRING(100)>,
    CREATED_AT TIMESTAMP NOT NULL
) PRIMARY KEY (PRODUCT_ID);

# Insert JSON data
INSERT INTO PRODUCTS (PRODUCT_ID, NAME, PRICE, METADATA, TAGS)
VALUES (
    'prod-001',
    'Laptop Pro',
    1299.99,
    JSON '{"brand": "TechCorp", "model": "X1"}',
    ARRAY['electronics', 'computers', 'premium']
);

======== JSON Functions ==========
# Extract JSON values
SELECT 
    PRODUCT_ID,
    NAME,
    JSON_VALUE(METADATA, '$.brand') AS BRAND,
    JSON_QUERY(METADATA, '$.specifications') AS SPECS
FROM PRODUCTS
WHERE METADATA IS NOT NULL;`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Analytics',
      commands: [
        {
          command: 'Statistical Functions',
          description: 'Statistical and analytical functions in Spanner',
          usage: 'Statistical aggregates, correlation, regression',
          example: `# Statistical Functions in Google Spanner

======== Basic Statistical Functions ==========
# Statistical aggregations
SELECT 
    COUNT(*) AS TOTAL_RECORDS,
    AVG(PRICE) AS MEAN_PRICE,
    STDDEV(PRICE) AS PRICE_STDDEV,
    VAR_SAMP(PRICE) AS PRICE_VARIANCE,
    MIN(PRICE) AS MIN_PRICE,
    MAX(PRICE) AS MAX_PRICE
FROM PRODUCTS
WHERE PRICE IS NOT NULL;

======== Correlation and Covariance ==========
# Correlation analysis
SELECT 
    CORR(PRICE, QUANTITY_IN_STOCK) AS_PRICE_STOCK_CORRELATION,
    COVAR_SAMP(PRICE, QUANTITY_IN_STOCK) AS COVARIANCE
FROM PRODUCTS
WHERE PRICE IS NOT NULL 
  AND QUANTITY_IN_STOCK IS NOT NULL;`,
        },
        {
          command: 'Performance Optimization',
          description: 'Optimize Spanner queries for maximum performance',
          usage: 'Index strategies, query hints, and execution plans',
          example: `# Query Optimization in Google Spanner

======== Index Strategy ==========
# Create optimal indexes
CREATE INDEX ORDERS_CUSTOMER_DATE ON ORDERS (CUSTOMER_ID, ORDER_DATE DESC)
STORING (TOTAL_AMOUNT, STATUS);

CREATE INDEX PRODUCTS_CATEGORY_PRICE ON PRODUCTS (CATEGORY, PRICE DESC)
STORING (NAME, DESCRIPTION);

======== Query Execution Analysis ==========
# Explain query plan
EXPLAIN SELECT 
    C.FIRST_NAME,
    COUNT(O.ORDER_ID) as ORDER_COUNT
FROM CUSTOMERS C
JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
GROUP BY C.CUSTOMER_ID, C.FIRST_NAME;`,
        },
      ],
    },
  ],
};