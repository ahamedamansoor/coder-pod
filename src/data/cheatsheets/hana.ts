import { Database } from 'lucide-react';

export const hanaCheatsheet = {
  id: 'hana',
  name: 'SAP HANA',
  description: 'Master SAP HANA from basics to advanced features (2024)',
  icon: Database,
  colorTheme: 'purple' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with SAP HANA',
      commands: [
        {
          command: 'SAP HANA Introduction',
          description: 'Understanding SAP HANA concepts and architecture',
          usage: 'Basic HANA terminology and concepts',
          example: `# SAP HANA is an in-memory, column-oriented, relational database management system

======== Key Concepts ==========
# In-Memory Database: Data stored in RAM for faster access
# Column-Oriented Storage: Data stored column by column for analytics
# Multi-Model Database: Supports relational, graph, spatial, and text data
# ACID Compliance: Full transactional support
# Row Store: Optimized for transactional workloads
# Column Store: Optimized for analytical workloads
# Schema: Logical container for database objects
# Tenant Database: Multi-database container architecture

======== Architecture Benefits ==========
# Real-time analytics and transactions
# High performance with in-memory processing
# Reduced data footprint with compression
# Advanced analytics capabilities
- Predictive analytics
- Text analysis
- Graph processing
- Spatial data processing
# Multi-tenant architecture
# Built-in application server (XS Advanced)

======== SAP HANA Components ==========
# SAP HANA Database: Core database engine
# SAP HANA Studio: Eclipse-based development tool
# SAP Web IDE for HANA: Web-based development
# SAP HANA XS Advanced: Application server
# SAP HANA Cloud: Cloud-based HANA service
# SAP HANA Analytics Cloud: BI and analytics platform`,
        },
        {
          command: 'Installation and Setup',
          description: 'Install SAP HANA using different methods',
          usage: 'HANA Express Edition, Docker, and cloud setup',
          example: `# SAP HANA Installation Options

======== HANA Express Edition (Free) ==========
# Docker Installation (Recommended)
docker run --name hxehost \\
  -p 39013:39013 -p 39015:39015 -p 39017:39017 \\
  -p 39030:39030 -p 39041-39045:39041-39045 \\
  -p 59013-59014:59013-59014 \\
  store/saplabs/hanaexpress:2.0.060.00.20240116.1

# Binary Installation
# 1. Download HXE installer from SAP website
# 2. Extract and run: ./hxe_setup.sh
# 3. Set passwords for SYSTEM, XSA_ADMIN
# 4. Install additional components: ./hxe_gc.sh

======== SAP HANA Cloud ==========
# SAP BTP Cockpit Setup
# 1. Go to SAP BTP Cockpit
# 2. Create HANA Cloud instance
# 3. Choose region and instance type
# 4. Set admin password
# 5. Connect via Database Explorer

======== SAP HANA Studio Installation ==========
# Download from SAP Development Tools
# URL: https://tools.hana.ondemand.com/

# Eclipse IDE Setup
# 1. Download Eclipse IDE for Enterprise Java Developers
# 2. Install SAP HANA Tools via Eclipse Marketplace
# 3. Search for "SAP HANA Tools" and install

# Alternative: Update Site Installation
# Help > Install New Software
# Add Repository: https://tools.hana.ondemand.com/latest/
# Select "SAP HANA Tools"

======== Verification ==========
# Test connection via hdbsql
docker exec -it hxehost bash
hdbsql -i 90 -u SYSTEM -p [password] -d SYSTEM

# Check database version
SELECT * FROM M_DATABASES;

# Check system status
SELECT HOST, VERSION, START_TIME FROM M_HOST_INFORMATION;`,
        },
        {
          command: 'Database Connection',
          description: 'Connect to SAP HANA from various tools',
          usage: 'Studio, SQL console, and command line connections',
          example: `# SAP HANA Connection Methods

======== SAP HANA Studio Connection ==========
# Add HANA System
# 1. Right-click in Systems view > Add System...
# 2. Enter Hostname (e.g., hxehost)
# 3. Instance Number (e.g., 90)
# 4. Database Mode: Single Container
# 5. Database User: SYSTEM
# 6. Password: [Your HANA password]

# Connection Properties
# Host: hxehost:39013 (SQL port)
# Host: hxehost:39015 (XS port)
# User: SYSTEM
# Schema: SYSTEM

======== SQL Console Connection ==========
# Open SQL Console
# Right-click system > Open SQL Console

# Test basic query
SELECT CURRENT_USER, CURRENT_SCHEMA FROM DUMMY;

======== Command Line Connection ==========
# Using hdbsql
hdbsql -i 90 -u SYSTEM -p [password] -d SYSTEM

# With specific schema
hdbsql -i 90 -u SYSTEM -p [password] -d SYSTEM -c "SET SCHEMA MYSCHEMA"

======== JDBC Connection ==========
# Connection string format
jdbc:sap://hostname:port/?currentschema=MYSCHEMA

# Example JDBC URL
jdbc:sap://hxehost:39015/?currentschema=MYCOMPANY

# Java connection example
Connection conn = DriverManager.getConnection(
    "jdbc:sap://hxehost:39015/", 
    "SYSTEM", 
    "password"
);

======== ODBC Connection ==========
# DSN Configuration
Driver=SAP HANA ODBC Driver
ServerNode=hxehost:39013
UID=SYSTEM
PWD=password
CurrentSchema=MYSCHEMA

======== Python Connection ==========
# Using pyhdb
import pyhdb

connection = pyhdb.connect(
    host="hxehost",
    port=39015,
    user="SYSTEM",
    password="password"
)`,
        },
        {
          command: 'Basic Database Operations',
          description: 'Essential database management commands',
          usage: 'Schema creation, user management, basic queries',
          example: `# Basic Database Operations

======== Schema Management ==========
# Create new schema
CREATE SCHEMA MYCOMPANY;

# Use specific schema
SET SCHEMA MYCOMPANY;

# List all schemas
SELECT SCHEMA_NAME FROM SCHEMAS;

# Drop schema
DROP SCHEMA MYCOMPANY CASCADE;

======== User Management ==========
# Create user
CREATE USER APP_USER PASSWORD "Secure123" NO FORCE_FIRST_PASSWORD_CHANGE;

# Grant privileges
GRANT CREATE ANY ON SCHEMA MYCOMPANY TO APP_USER;
GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA MYCOMPANY TO APP_USER;

# Create role
CREATE ROLE APP_ROLE;
GRANT SELECT ON SCHEMA MYCOMPANY TO APP_ROLE;

# Grant role to user
GRANT APP_ROLE TO APP_USER;

# List users
SELECT USER_NAME, USER_STATUS FROM USERS;

======== Basic System Queries ==========
# Current database info
SELECT * FROM M_DATABASES;

# System information
SELECT HOST, VERSION, START_TIME FROM M_HOST_INFORMATION;

# Current user and schema
SELECT CURRENT_USER, CURRENT_SCHEMA FROM DUMMY;

# List tables in schema
SELECT TABLE_NAME FROM TABLES WHERE SCHEMA_NAME = 'MYCOMPANY';

======== Table Statistics ==========
# Table size information
SELECT SCHEMA_NAME, TABLE_NAME, RECORD_COUNT, TABLE_SIZE 
FROM M_TABLES 
WHERE SCHEMA_NAME = 'MYCOMPANY';

# Index information
SELECT * FROM M_INDEXES WHERE SCHEMA_NAME = 'MYCOMPANY';`,
        },
      ],
    },
    {
      title: 'Basic SQL Operations',
      commands: [
        {
          command: 'Create Tables and Schemas',
          description: 'Create schemas and tables with HANA-specific features',
          usage: 'CREATE SCHEMA, CREATE TABLE with HANA optimizations',
          example: `# Creating Schemas and Tables

======== Schema Creation ==========
# Create schema with authorization
CREATE SCHEMA RETAIL AUTHORIZATION APP_USER;

# Create schema with specific path
CREATE SCHEMA ANALYTICS 
  WITH PATH 'sap.hana.xs.administrator::admin_temp';

======== Basic Table Creation ==========
# Simple table
CREATE TABLE CUSTOMERS (
    CUSTOMER_ID INTEGER PRIMARY KEY,
    FIRST_NAME NVARCHAR(50) NOT NULL,
    LAST_NAME NVARCHAR(50) NOT NULL,
    EMAIL NVARCHAR(100) UNIQUE,
    PHONE NVARCHAR(20),
    REGISTRATION_DATE DATE DEFAULT CURRENT_DATE,
    STATUS NVARCHAR(20) DEFAULT 'ACTIVE'
);

# Table with auto-increment
CREATE TABLE ORDERS (
    ORDER_ID BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    CUSTOMER_ID INTEGER,
    ORDER_DATE DATE DEFAULT CURRENT_DATE,
    TOTAL_AMOUNT DECIMAL(10,2),
    STATUS NVARCHAR(20),
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(CUSTOMER_ID)
);

======== HANA-Specific Table Features ==========
# Column store table (default)
CREATE TABLE SALES (
    PRODUCT_ID INTEGER,
    SALE_DATE DATE,
    QUANTITY INTEGER,
    REVENUE DECIMAL(12,2)
) COLUMN STORE;

# Row store table (for transactional workloads)
CREATE TABLE TRANSACTIONS (
    TRANSACTION_ID BIGINT PRIMARY KEY,
    ACCOUNT_ID INTEGER,
    AMOUNT DECIMAL(15,2),
    TRANSACTION_TIME TIMESTAMP,
    DESCRIPTION NVARCHAR(200)
) ROW STORE;

# Table with constraints
CREATE TABLE PRODUCTS (
    PRODUCT_ID INTEGER PRIMARY KEY,
    NAME NVARCHAR(100) NOT NULL,
    PRICE DECIMAL(10,2) CHECK (PRICE > 0),
    CATEGORY NVARCHAR(50),
    STOCK_QUANTITY INTEGER DEFAULT 0 CHECK (STOCK_QUANTITY >= 0),
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

======== Temporary Tables ==========
# Global temporary table
CREATE GLOBAL TEMPORARY TABLE TEMP_RESULTS (
    ID INTEGER,
    VALUE DECIMAL(10,2)
) ON COMMIT PRESERVE ROWS;

# Local temporary table
CREATE LOCAL TEMPORARY TABLE #TEMP_DATA (
    NAME NVARCHAR(50),
    SCORE INTEGER
);`,
        },
        {
          command: 'Data Manipulation',
          description: 'Insert, update, delete operations with HANA features',
          usage: 'INSERT, UPDATE, DELETE with HANA optimizations',
          example: `# Data Manipulation Operations

======== Insert Operations ==========
# Single row insert
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL)
VALUES (1, 'John', 'Doe', 'john.doe@example.com');

# Multiple row insert
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE)
VALUES 
    (2, 'Jane', 'Smith', 'jane.smith@example.com', '555-0101'),
    (3, 'Bob', 'Johnson', 'bob.johnson@example.com', '555-0102');

# Insert with default values
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL)
VALUES (4, 'Alice', 'Brown', 'alice.brown@example.com');

# Insert from select
INSERT INTO PREMIUM_CUSTOMERS
SELECT * FROM CUSTOMERS WHERE STATUS = 'PREMIUM';

======== Update Operations ==========
# Simple update
UPDATE CUSTOMERS 
SET PHONE = '555-0103', 
    STATUS = 'PREMIUM' 
WHERE CUSTOMER_ID = 1;

# Update with calculation
UPDATE PRODUCTS 
SET PRICE = PRICE * 1.1 
WHERE CATEGORY = 'Electronics';

# Update with conditions
UPDATE ORDERS 
SET STATUS = 'SHIPPED' 
WHERE ORDER_DATE < CURRENT_DATE - 7 AND STATUS = 'PROCESSING';

======== Delete Operations ==========
# Delete with conditions
DELETE FROM CUSTOMERS 
WHERE STATUS = 'INACTIVE' 
  AND REGISTRATION_DATE < ADD_MONTHS(CURRENT_DATE, -12);

# Delete based on subquery
DELETE FROM ORDERS 
WHERE CUSTOMER_ID IN (
    SELECT CUSTOMER_ID 
    FROM CUSTOMERS 
    WHERE STATUS = 'BLACKLISTED'
);

# Truncate table (faster for large tables)
TRUNCATE TABLE TEMP_RESULTS;

======== Upsert (MERGE) ==========
# Merge operation (upsert)
MERGE INTO CUSTOMERS TARGET
USING (SELECT 5 AS CUSTOMER_ID, 'Frank' AS FIRST_NAME, 'Miller' AS LAST_NAME, 'frank@example.com' AS EMAIL) SOURCE
ON (TARGET.CUSTOMER_ID = SOURCE.CUSTOMER_ID)
WHEN MATCHED THEN 
    UPDATE SET FIRST_NAME = SOURCE.FIRST_NAME, LAST_NAME = SOURCE.LAST_NAME
WHEN NOT MATCHED THEN
    INSERT (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL)
    VALUES (SOURCE.CUSTOMER_ID, SOURCE.FIRST_NAME, SOURCE.LAST_NAME, SOURCE.EMAIL);`,
        },
        {
          command: 'Basic Queries and Functions',
          description: 'SELECT queries and HANA-specific functions',
          usage: 'Basic queries with HANA functions and optimizations',
          example: `# Basic Queries and Functions

======== Simple Queries ==========
# Select all columns
SELECT * FROM CUSTOMERS;

# Select specific columns
SELECT CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL 
FROM CUSTOMERS 
WHERE STATUS = 'ACTIVE' 
ORDER BY LAST_NAME, FIRST_NAME;

# Distinct values
SELECT DISTINCT STATUS FROM CUSTOMERS;

======== Aggregation Functions ==========
# Basic aggregations
SELECT COUNT(*) AS TOTAL_CUSTOMERS,
       COUNT(CASE WHEN STATUS = 'ACTIVE' THEN 1 END) AS ACTIVE_CUSTOMERS,
       COUNT(CASE WHEN STATUS = 'PREMIUM' THEN 1 END) AS PREMIUM_CUSTOMERS
FROM CUSTOMERS;

# Group by with having
SELECT CATEGORY, 
       COUNT(*) AS PRODUCT_COUNT,
       AVG(PRICE) AS AVG_PRICE,
       SUM(STOCK_QUANTITY) AS TOTAL_STOCK
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
    LENGTH(FIRST_NAME) AS FIRST_NAME_LENGTH
FROM CUSTOMERS;

# String search
SELECT * FROM PRODUCTS 
WHERE UPPER(NAME) LIKE '%LAPTOP%';

======== Date and Time Functions ==========
# Date calculations
SELECT 
    ORDER_ID,
    ORDER_DATE,
    DAYS_BETWEEN(CURRENT_DATE, ORDER_DATE) AS DAYS_AGO,
    ADD_MONTHS(ORDER_DATE, 6) AS SIX_MONTHS_LATER,
    EXTRACT(YEAR FROM ORDER_DATE) AS ORDER_YEAR
FROM ORDERS;

# Timestamp operations
SELECT 
    TRANSACTION_ID,
    TRANSACTION_TIME,
    SECONDS_BETWEEN(CURRENT_TIMESTAMP, TRANSACTION_TIME) AS SECONDS_AGO,
    ADD_SECONDS(TRANSACTION_TIME, 3600) AS ONE_HOUR_LATER
FROM TRANSACTIONS;

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
FROM CUSTOMERS;`,
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
          usage: 'OVER, ROWS, RANGE, window functions',
          example: `# Window Functions in SAP HANA

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
ORDER BY CATEGORY, PRICE DESC;

======== Advanced Window Operations ==========
# Window functions with frames
SELECT 
    ORDER_DATE,
    TOTAL_AMOUNT,
    SUM(TOTAL_AMOUNT) OVER (
        ORDER BY ORDER_DATE 
        RANGE BETWEEN INTERVAL '30' DAY PRECEDING AND CURRENT ROW
    ) AS LAST_30_DAYS_TOTAL,
    COUNT(*) OVER (
        ORDER BY ORDER_DATE 
        ROWS BETWEEN 10 PRECEDING AND CURRENT ROW
    ) AS LAST_10_ORDERS_COUNT
FROM ORDERS
ORDER BY ORDER_DATE;`,
        },
        {
          command: 'Subqueries and CTEs',
          description: 'Complex subqueries and Common Table Expressions',
          usage: 'WITH clauses, correlated subqueries, EXISTS',
          example: `# Subqueries and CTEs

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

# Multiple CTEs
WITH TOP_CUSTOMERS AS (
    SELECT 
        CUSTOMER_ID,
        SUM(TOTAL_AMOUNT) AS LIFETIME_VALUE
    FROM ORDERS
    GROUP BY CUSTOMER_ID
    HAVING SUM(TOTAL_AMOUNT) > 10000
),
CUSTOMER_DETAILS AS (
    SELECT 
        TC.CUSTOMER_ID,
        C.FIRST_NAME,
        C.LAST_NAME,
        TC.LIFETIME_VALUE,
        ROW_NUMBER() OVER (ORDER BY TC.LIFETIME_VALUE DESC) AS RANK
    FROM TOP_CUSTOMERS TC
    JOIN CUSTOMERS C ON TC.CUSTOMER_ID = C.CUSTOMER_ID
)
SELECT * FROM CUSTOMER_DETAILS WHERE RANK <= 10;

======== Correlated Subqueries ==========
# Correlated subquery in SELECT
SELECT 
    C.CUSTOMER_ID,
    C.FIRST_NAME,
    (SELECT COUNT(*) FROM ORDERS O WHERE O.CUSTOMER_ID = C.CUSTOMER_ID) AS ORDER_COUNT,
    (SELECT SUM(O.TOTAL_AMOUNT) FROM ORDERS O WHERE O.CUSTOMER_ID = C.CUSTOMER_ID) AS TOTAL_SPENT
FROM CUSTOMERS C;

# Correlated subquery in WHERE
SELECT * FROM CUSTOMERS C
WHERE (
    SELECT AVG(O.TOTAL_AMOUNT) 
    FROM ORDERS O 
    WHERE O.CUSTOMER_ID = C.CUSTOMER_ID
) > (
    SELECT AVG(TOTAL_AMOUNT) FROM ORDERS
);

======== EXISTS and NOT EXISTS ==========
# Using EXISTS
SELECT * FROM CUSTOMERS C
WHERE EXISTS (
    SELECT 1 FROM ORDERS O 
    WHERE O.CUSTOMER_ID = C.CUSTOMER_ID 
    AND O.TOTAL_AMOUNT > 1000
);

# Using NOT EXISTS
SELECT * FROM PRODUCTS P
WHERE NOT EXISTS (
    SELECT 1 FROM ORDER_ITEMS OI 
    JOIN ORDERS O ON OI.ORDER_ID = O.ORDER_ID 
    WHERE OI.PRODUCT_ID = P.PRODUCT_ID 
    AND O.ORDER_DATE > CURRENT_DATE - 30
);

======== Scalar Subqueries ==========
# Subquery in VALUES clause
INSERT INTO TOP_PERFORMERS (EMPLOYEE_ID, NAME, PERFORMANCE_SCORE)
VALUES (
    (SELECT EMPLOYEE_ID FROM EMPLOYEES WHERE NAME = 'John Doe'),
    'John Doe',
    (SELECT AVG(SCORE) FROM PERFORMANCE_REVIEWS WHERE EMPLOYEE_ID = (SELECT EMPLOYEE_ID FROM EMPLOYEES WHERE NAME = 'John Doe'))
);

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
          description: 'Advanced join types and optimization',
          usage: 'INNER, LEFT, RIGHT, FULL joins with HANA features',
          example: `# Advanced Join Operations

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
WHERE O.ORDER_DATE >= CURRENT_DATE - 30;

# Left join with filtering
SELECT 
    C.CUSTOMER_ID,
    C.FIRST_NAME,
    COUNT(O.ORDER_ID) AS ORDER_COUNT,
    COALESCE(SUM(O.TOTAL_AMOUNT), 0) AS TOTAL_SPENT
FROM CUSTOMERS C
LEFT JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
GROUP BY C.CUSTOMER_ID, C.FIRST_NAME
ORDER BY TOTAL_SPENT DESC;

======== Advanced Join Types ==========
# Right join example
SELECT 
    P.PRODUCT_ID,
    P.NAME AS PRODUCT_NAME,
    COUNT(OI.ORDER_ID) AS ORDER_COUNT
FROM ORDER_ITEMS OI
RIGHT JOIN PRODUCTS P ON OI.PRODUCT_ID = P.PRODUCT_ID
GROUP BY P.PRODUCT_ID, P.NAME
ORDER BY ORDER_COUNT DESC;

# Full outer join
SELECT 
    COALESCE(C.CUSTOMER_ID, O.CUSTOMER_ID) AS CUSTOMER_ID,
    COALESCE(C.FIRST_NAME, 'Unknown') AS FIRST_NAME,
    O.ORDER_ID,
    O.TOTAL_AMOUNT
FROM CUSTOMERS C
FULL OUTER JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID;

======== Self-Joins ==========
# Employee-manager relationships
SELECT 
    E.NAME AS EMPLOYEE,
    E.DEPARTMENT,
    M.NAME AS MANAGER,
    M.DEPARTMENT AS MANAGER_DEPARTMENT
FROM EMPLOYEES E
LEFT JOIN EMPLOYEES M ON E.MANAGER_ID = M.EMPLOYEE_ID;

# Customer referral relationships
SELECT 
    C1.FIRST_NAME AS REFERRER,
    C2.FIRST_NAME AS REFERRED,
    R.REFERRAL_DATE
FROM CUSTOMERS C1
JOIN REFERRALS R ON C1.CUSTOMER_ID = R.REFERRER_ID
JOIN CUSTOMERS C2 ON R.REFERRED_ID = C2.CUSTOMER_ID;

======== Cross Joins ==========
# Generate all combinations
SELECT 
    P.NAME AS PRODUCT,
    C.NAME AS CATEGORY,
    P.PRICE,
    C.DISCOUNT_RATE
FROM PRODUCTS P
CROSS JOIN CATEGORIES C
WHERE P.CATEGORY_ID = C.CATEGORY_ID;

======== Join Optimization ==========
# Join with index hints
SELECT /*+ INDEX(O ORDERS_CUSTOMER_ID_IDX) */
    C.FIRST_NAME,
    O.ORDER_ID,
    O.TOTAL_AMOUNT
FROM CUSTOMERS C
JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
WHERE O.ORDER_DATE > CURRENT_DATE - 30;

# Hash join for large datasets
SELECT /*+ HASH_JOIN */ *
FROM LARGE_TABLE1 T1
JOIN LARGE_TABLE2 T2 ON T1.KEY = T2.KEY;`,
        },
      ],
    },
    {
      title: 'HANA-Specific Features',
      commands: [
        {
          command: 'Column Store Operations',
          description: 'Optimize queries for column store tables',
          usage: 'Column store specific functions and optimizations',
          example: `# Column Store Operations

======== Column Store Table Creation ==========
# Explicit column store table
CREATE TABLE SALES_ANALYTICS (
    PRODUCT_ID INTEGER,
    REGION NVARCHAR(50),
    SALE_DATE DATE,
    QUANTITY INTEGER,
    REVENUE DECIMAL(12,2),
    COST DECIMAL(12,2)
) COLUMN STORE;

# Column store with compression
CREATE TABLE SALES_COMPRESSED (
    PRODUCT_ID INTEGER,
    SALE_DATE DATE,
    REVENUE DECIMAL(12,2)
) COLUMN STORE 
  WITH PHYSICAL STORAGE PARAMETERS (
    COMPRESSION_TYPE = 'RLE'
  );

======== Column Store Optimization ==========
# Load data into column store
-- Insert data
INSERT INTO SALES_ANALYTICS VALUES (1, 'North', '2024-01-01', 100, 10000.00, 8000.00);

-- Merge delta storage
-- (Move from delta to main storage)
ALTER TABLE SALES_ANALYTICS MERGE DELTA INDEX;

-- Optimize table compression
ALTER TABLE SALES_ANALYTICS OPTIMIZE COMPRESSION;

======== Column Store Statistics ==========
# Table statistics
SELECT 
    TABLE_NAME,
    RECORD_COUNT,
    TABLE_SIZE,
    MEMORY_SIZE_IN_TOTAL,
    MEMORY_SIZE_IN_MAIN,
    MEMORY_SIZE_IN_DELTA
FROM M_TABLES 
WHERE SCHEMA_NAME = CURRENT_SCHEMA 
  AND TABLE_NAME = 'SALES_ANALYTICS';

# Column statistics
SELECT 
    COLUMN_NAME,
    DATA_TYPE_NAME,
    DISTINCT_VALUE_COUNT,
    NULL_VALUE_COUNT,
    COMPRESSION_TYPE
FROM M_TABLE_COLUMNS 
WHERE SCHEMA_NAME = CURRENT_SCHEMA 
  AND TABLE_NAME = 'SALES_ANALYTICS';

======== Column Store Performance ==========
# Force column store execution
SELECT /*+ COLUMN_STORE */ *
FROM SALES_ANALYTICS
WHERE REGION = 'North';

# Parallel query execution
SELECT /*+ PARALLEL(4) */
    REGION,
    SUM(REVENUE) AS TOTAL_REVENUE,
    AVG(QUANTITY) AS AVG_QUANTITY
FROM SALES_ANALYTICS
GROUP BY REGION;

======== Delta Storage Management ==========
# Check delta size
SELECT 
    TABLE_NAME,
    RECORD_COUNT,
    MEMORY_SIZE_IN_DELTA
FROM M_TABLES 
WHERE MEMORY_SIZE_IN_DELTA > 1000000;

# Automatic delta merge
ALTER TABLE SALES_ANALYTICS SET 
    AUTO_MERGE_ENABLED = TRUE;

# Manual delta merge with threshold
ALTER TABLE SALES_ANALYTICS MERGE DELTA INDEX 
  WHERE RECORD_COUNT > 100000;`,
        },
        {
          command: 'Row Store Operations',
          description: 'Optimize queries for row store tables',
          usage: 'Row store specific functions and optimizations',
          example: `# Row Store Operations

======== Row Store Table Creation ==========
# Explicit row store table
CREATE TABLE TRANSACTIONS (
    TRANSACTION_ID BIGINT PRIMARY KEY,
    ACCOUNT_ID INTEGER,
    TRANSACTION_TYPE NVARCHAR(20),
    AMOUNT DECIMAL(15,2),
    TRANSACTION_TIME TIMESTAMP,
    DESCRIPTION NVARCHAR(200),
    STATUS NVARCHAR(20)
) ROW STORE;

# Row store with specific parameters
CREATE TABLE LOG_ENTRIES (
    LOG_ID BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    LOG_LEVEL NVARCHAR(10),
    MESSAGE TEXT,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ROW STORE
  WITH PHYSICAL STORAGE PARAMETERS (
    PAGE_SIZE = 16
  );

======== Row Store Optimization ==========
# Row store specific indexes
CREATE INDEX IDX_TRANSACTIONS_ACCOUNT 
ON TRANSACTIONS(ACCOUNT_ID, TRANSACTION_TIME DESC);

# Composite index for row store
CREATE INDEX IDX_TRANSACTIONS_TYPE_AMOUNT 
ON TRANSACTIONS(TRANSACTION_TYPE, AMOUNT);

======== Row Store Performance ==========
# Force row store execution
SELECT /*+ ROW_STORE */ *
FROM TRANSACTIONS
WHERE ACCOUNT_ID = 12345
  AND TRANSACTION_TIME > CURRENT_TIMESTAMP - INTERVAL '1' DAY;

# Index-only scan
SELECT /*+ INDEX(TRANSACTIONS IDX_TRANSACTIONS_ACCOUNT) */
    TRANSACTION_ID, AMOUNT, TRANSACTION_TIME
FROM TRANSACTIONS
WHERE ACCOUNT_ID = 12345;

======== Row Store Statistics ==========
# Row store table statistics
SELECT 
    TABLE_NAME,
    RECORD_COUNT,
    TABLE_SIZE,
    MEMORY_SIZE_IN_TOTAL,
    ESTIMATED_MAX_MEMORY_SIZE
FROM M_TABLES 
WHERE SCHEMA_NAME = CURRENT_SCHEMA 
  AND TABLE_NAME = 'TRANSACTIONS';

# Index statistics
SELECT 
    INDEX_NAME,
    COLUMN_NAME,
    RECORD_COUNT,
    MEMORY_SIZE
FROM M_INDEXES 
WHERE SCHEMA_NAME = CURRENT_SCHEMA 
  AND TABLE_NAME = 'TRANSACTIONS';

======== Hybrid Operations ==========
# Create hybrid table (partially column, partially row)
CREATE TABLE HYBRID_SALES (
    TRANSACTION_ID BIGINT PRIMARY KEY,
    TRANSACTION_TIME TIMESTAMP,
    CUSTOMER_ID INTEGER,
    PRODUCT_ID INTEGER,
    QUANTITY INTEGER,
    AMOUNT DECIMAL(12,2),
    -- These columns in row store for fast access
    STATUS NVARCHAR(20),
    PROCESSING_FLAG BOOLEAN
) 
PARTITION BY RANGE (TRANSACTION_TIME) (
    PARTITION P_2024_01 VALUES LESS THAN ('2024-02-01'),
    PARTITION P_2024_02 VALUES LESS THAN ('2024-03-01'),
    PARTITION P_2024_03 VALUES LESS THAN ('2024-04-01'),
    PARTITION P_MAX VALUES LESS THAN (MAXVALUE)
);`,
        },
        {
          command: 'In-Memory Features',
          description: 'Leverage HANA in-memory capabilities',
          usage: 'Memory-optimized operations and functions',
          example: `# In-Memory Features

======== Memory-Optimized Tables ==========
# Memory-optimized table
CREATE TABLE MEMORY_CACHE (
    KEY_VALUE NVARCHAR(100) PRIMARY KEY,
    DATA_VALUE TEXT,
    EXPIRY_TIME TIMESTAMP,
    ACCESS_COUNT INTEGER DEFAULT 0
) MEMORY OPTIMIZED;

# In-memory temporary table
CREATE GLOBAL TEMPORARY TABLE TEMP_CALCULATIONS (
    CALCULATION_ID INTEGER,
    INPUT_VALUE DECIMAL(15,2),
    RESULT_VALUE DECIMAL(15,2),
    CALCULATION_TIME TIMESTAMP
) MEMORY OPTIMIZED ON COMMIT PRESERVE ROWS;

======== Memory Management ==========
# Check memory usage
SELECT 
    HOST,
    MEMORY_SIZE_IN_TOTAL,
    MEMORY_SIZE_IN_USED,
    MEMORY_SIZE_IN_FREE,
    ALLOCATION_LIMIT
FROM M_HOST_RESOURCE_UTILIZATION;

# Table memory usage
SELECT 
    TABLE_NAME,
    MEMORY_SIZE_IN_TOTAL,
    MEMORY_SIZE_IN_MAIN,
    MEMORY_SIZE_IN_DELTA,
    DISK_SIZE
FROM M_TABLES 
WHERE SCHEMA_NAME = CURRENT_SCHEMA
ORDER BY MEMORY_SIZE_IN_TOTAL DESC;

======== Memory-Optimized Queries ==========
# In-memory aggregation
SELECT /*+ MEMORY_OPTIMIZED */ 
    PRODUCT_ID,
    SUM(QUANTITY) AS TOTAL_QUANTITY,
    SUM(REVENUE) AS TOTAL_REVENUE,
    AVG(REVENUE/QUANTITY) AS AVG_UNIT_PRICE
FROM SALES_ANALYTICS
WHERE SALE_DATE >= CURRENT_DATE - 30
GROUP BY PRODUCT_ID;

# In-memory join
SELECT /*+ MEMORY_OPTIMIZED HASH_JOIN */ 
    C.CUSTOMER_ID,
    C.FIRST_NAME,
    COUNT(O.ORDER_ID) AS ORDER_COUNT,
    SUM(O.TOTAL_AMOUNT) AS TOTAL_SPENT
FROM CUSTOMERS C
JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
GROUP BY C.CUSTOMER_ID, C.FIRST_NAME;

======== Cache Management ==========
# Result cache
SELECT /*+ RESULT_CACHE */ 
    REGION,
    PRODUCT_CATEGORY,
    SUM(REVENUE) AS TOTAL_REVENUE,
    COUNT(*) AS TRANSACTION_COUNT
FROM SALES_ANALYTICS
WHERE SALE_DATE >= CURRENT_DATE - 7
GROUP BY REGION, PRODUCT_CATEGORY;

# Clear result cache
ALTER SYSTEM CLEAR RESULT CACHE;

# Configure cache size
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('cache', 'result_cache_size') = '1GB');

======== Memory Configuration ==========
# Check memory configuration
SELECT * FROM M_INIFILE_CONTENTS 
WHERE SECTION = 'memorymanager' 
  AND KEY LIKE '%memory%';

# Configure memory pool
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('memorymanager', 'allocationlimit') = '90%';`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Analytics',
      commands: [
        {
          command: 'Predictive Analytics',
          description: 'Use HANA predictive analytics library',
          usage: 'PAL (Predictive Analysis Library) functions',
          example: `# Predictive Analytics with PAL

======== Setup PAL Library ==========
-- Install PAL wrapper
CREATE SCHEMA PAL;
-- PAL procedures are automatically available in HANA

======== Linear Regression ==========
-- Create training data table
CREATE TABLE SALES_TRAINING_DATA (
    SEASON INTEGER,
    ADVERTISING_SPEND DECIMAL(10,2),
    PROMOTION_FLAG INTEGER,
    SALES_REVENUE DECIMAL(12,2)
);

-- Insert training data
INSERT INTO SALES_TRAINING_DATA VALUES
(1, 5000.00, 1, 150000.00),
(2, 3000.00, 0, 80000.00),
(3, 8000.00, 1, 200000.00);

-- Create parameter table for linear regression
CREATE TABLE PAL_CONTROL_TBL (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO PAL_CONTROL_TBL VALUES
('ALGORITHM', 1, NULL, NULL),  -- Linear regression
('MAX_ITERATION', 100, NULL, NULL),
('THREAD_NUMBER', 4, NULL, NULL);

-- Run linear regression
CALL _SYS_AFL.PAL_LINEAR_REGRESSION (
  SALES_TRAINING_DATA,     -- Training data
  PAL_CONTROL_TBL,         -- Control parameters
  MODEL_TBL,               -- Output model table
  STATISTICS_TBL           -- Output statistics table
);

======== Predictive Scoring ==========
-- Create scoring data
CREATE TABLE SALES_SCORING_DATA (
    SEASON INTEGER,
    ADVERTISING_SPEND DECIMAL(10,2),
    PROMOTION_FLAG INTEGER
);

INSERT INTO SALES_SCORING_DATA VALUES
(4, 6000.00, 1),
(5, 4000.00, 0);

-- Score using the model
CALL _SYS_AFL.PAL_LINEAR_REGRESSION_PREDICT (
  SALES_SCORING_DATA,      -- Scoring data
  MODEL_TBL,               -- Trained model
  PREDICTION_TBL           -- Output predictions
);

-- View predictions
SELECT * FROM PREDICTION_TBL;

======== Time Series Forecasting ==========
-- Create time series data
CREATE TABLE SALES_TIME_SERIES (
    DATE_KEY DATE,
    PRODUCT_ID INTEGER,
    SALES_QUANTITY INTEGER
);

-- Create forecast parameters
CREATE TABLE TS_FORECAST_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO TS_FORECAST_PARAMS VALUES
('METHOD', 1, NULL, NULL),        -- Exponential smoothing
('SEASONALITY', 12, NULL, NULL),  -- Monthly seasonality
('FORECAST_LENGTH', 6, NULL, NULL); -- 6 periods ahead

-- Run time series forecast
CALL _SYS_AFL.PAL_SMoothing (
  SALES_TIME_SERIES,       -- Input data
  TS_FORECAST_PARAMS,      -- Parameters
  TS_FORECAST_MODEL,       -- Model output
  TS_FORECAST_RESULT       -- Forecast output
);

======== Clustering ==========
-- K-means clustering
CREATE TABLE CLUSTER_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO CLUSTER_PARAMS VALUES
('CLUSTER_NUM', 5, NULL, NULL),   -- 5 clusters
('MAX_ITERATION', 100, NULL, NULL),
('THREAD_NUMBER', 4, NULL, NULL);

-- Run K-means clustering
CALL _SYS_AFL.PAL_KMEANS (
  CUSTOMER_FEATURES,        -- Customer feature data
  CLUSTER_PARAMS,           -- Parameters
  CLUSTER_MODEL,            -- Model output
  CLUSTER_ASSIGNMENTS       -- Cluster assignments
);`,
        },
        {
          command: 'Graph Processing',
          description: 'Graph algorithms and network analysis',
          usage: 'Graph engine and graph functions',
          example: `# Graph Processing in SAP HANA

======== Graph Schema Creation ==========
-- Create vertices table
CREATE TABLE PERSONS (
    PERSON_ID INTEGER PRIMARY KEY,
    NAME NVARCHAR(100),
    AGE INTEGER,
    CITY NVARCHAR(50)
);

-- Create edges table
CREATE TABLE FRIENDSHIPS (
    FROM_PERSON_ID INTEGER,
    TO_PERSON_ID INTEGER,
    FRIEND_SINCE DATE,
    STRENGTH DECIMAL(3,2),
    PRIMARY KEY (FROM_PERSON_ID, TO_PERSON_ID),
    FOREIGN KEY (FROM_PERSON_ID) REFERENCES PERSONS(PERSON_ID),
    FOREIGN KEY (TO_PERSON_ID) REFERENCES PERSONS(PERSON_ID)
);

======== Graph Creation ==========
-- Create graph workspace
CREATE GRAPH WORKSPACE FRIEND_GRAPH (
    VERTEX TABLE PERSONS KEY PERSON_ID,
    EDGE TABLE FRIENDSHIPS SOURCE KEY FROM_PERSON_ID 
                     TARGET KEY TO_PERSON_ID
);

-- Insert sample data
INSERT INTO PERSONS VALUES (1, 'Alice', 30, 'New York');
INSERT INTO PERSONS VALUES (2, 'Bob', 35, 'Boston');
INSERT INTO PERSONS VALUES (3, 'Charlie', 28, 'Chicago');

INSERT INTO FRIENDSHIPS VALUES (1, 2, '2020-01-15', 0.8);
INSERT INTO FRIENDSHIPS VALUES (2, 3, '2019-05-20', 0.6);
INSERT INTO FRIENDSHIPS VALUES (1, 3, '2021-03-10', 0.9);

======== Graph Queries ==========
-- Basic graph traversal
SELECT * FROM GRAPH_WORKSPACE("FRIEND_GRAPH")
  MATCH (a:PERSONS) -[e:FRIENDSHIPS]-> (b:PERSONS)
  WHERE a.NAME = 'Alice'
  RETURN a.NAME AS FROM_PERSON, b.NAME AS TO_PERSON, e.STRENGTH;

-- Find friends of friends (2 hops)
SELECT * FROM GRAPH_WORKSPACE("FRIEND_GRAPH")
  MATCH (a:PERSONS) -[:FRIENDSHIPS*2]-> (b:PERSONS)
  WHERE a.NAME = 'Alice' AND a <> b
  RETURN a.NAME AS PERSON, b.NAME AS FRIEND_OF_FRIEND;

======== Graph Algorithms ==========
-- Shortest path
CALL GRAPH_WORKSPACE("FRIEND_GRAPH") 
  MATCH (a:PERSONS {NAME: 'Alice'}), (b:PERSONS {NAME: 'Charlie'})
  MATCH p = SHORTEST_PATH((a) -[*]-> (b))
  RETURN p;

-- PageRank algorithm
CREATE TABLE PAGERANK_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO PAGERANK_PARAMS VALUES
('DAMPING_FACTOR', NULL, 0.85, NULL),
('MAX_ITERATIONS', 100, NULL, NULL);

CALL _SYS_AFL.PAL_PAGERANK (
  FRIEND_GRAPH,             -- Graph workspace
  PAGERANK_PARAMS,          -- Parameters
  PAGERANK_RESULTS          -- Output
);

-- Community detection
CALL _SYS_AFL.PAL_LOUVAIN_MODULARITY (
  FRIEND_GRAPH,             -- Graph workspace
  COMMUNITY_PARAMS,         -- Parameters
  COMMUNITY_RESULTS         -- Output
);

======== Graph Analytics ==========
-- Centrality measures
SELECT 
    v.NAME,
    v.AGE,
    pr.SCORE AS PAGERANK_SCORE,
    cc.SCORE AS CLUSTERING_COEFFICIENT
FROM PERSONS v
LEFT JOIN PAGERANK_RESULTS pr ON v.PERSON_ID = pr.VERTEX_ID
LEFT JOIN CLUSTERING_COEFFICIENT cc ON v.PERSON_ID = cc.VERTEX_ID
ORDER BY pr.SCORE DESC;

-- Network statistics
SELECT 
    COUNT(DISTINCT FROM_PERSON_ID) AS ACTIVE_PEOPLE,
    COUNT(*) AS TOTAL_FRIENDSHIPS,
    AVG(STRENGTH) AS AVG_FRIENDSHIP_STRENGTH,
    COUNT(DISTINCT CASE WHEN FROM_PERSON_ID = TO_PERSON_ID THEN FROM_PERSON_ID END) AS SELF_FRIENDS
FROM FRIENDSHIPS;

======== Graph Visualization ==========
-- Export graph for visualization
CREATE TABLE GRAPH_EXPORT (
    SOURCE_ID INTEGER,
    TARGET_ID INTEGER,
    SOURCE_NAME NVARCHAR(100),
    TARGET_NAME NVARCHAR(100),
    RELATIONSHIP_TYPE NVARCHAR(50),
    WEIGHT DECIMAL(5,2)
);

INSERT INTO GRAPH_EXPORT
SELECT 
    f.FROM_PERSON_ID,
    f.TO_PERSON_ID,
    p1.NAME,
    p2.NAME,
    'FRIEND',
    f.STRENGTH
FROM FRIENDSHIPS f
JOIN PERSONS p1 ON f.FROM_PERSON_ID = p1.PERSON_ID
JOIN PERSONS p2 ON f.TO_PERSON_ID = p2.PERSON_ID;`,
        },
        {
          command: 'Text Analytics',
          description: 'Text processing and analysis capabilities',
          usage: 'Full-text search, text mining, sentiment analysis',
          example: `# Text Analytics in SAP HANA

======== Full-Text Search Setup ==========
-- Create text table
CREATE TABLE DOCUMENTS (
    DOC_ID INTEGER PRIMARY KEY,
    TITLE NVARCHAR(200),
    CONTENT TEXT,
    AUTHOR NVARCHAR(100),
    PUBLISH_DATE DATE,
    CATEGORY NVARCHAR(50)
);

-- Create full-text index
CREATE FULLTEXT INDEX DOC_CONTENT_IDX 
ON DOCUMENTS(CONTENT) 
CONFIGURATION 'LINGUISTIC_ANALYSIS=EN';

-- Insert sample documents
INSERT INTO DOCUMENTS VALUES 
(1, 'Market Analysis', 'The stock market showed significant growth in Q3 2024. Technology stocks performed exceptionally well...', 'John Doe', '2024-10-15', 'Finance'),
(2, 'Product Review', 'This new smartphone has excellent battery life and a great camera. The display quality is impressive...', 'Jane Smith', '2024-10-14', 'Technology');

======== Full-Text Search Queries ==========
-- Basic text search
SELECT DOC_ID, TITLE, SCORE() AS RELEVANCE_SCORE
FROM DOCUMENTS
WHERE CONTAINS(CONTENT, 'technology stocks', FUZZY(0.8))
ORDER BY RELEVANCE_SCORE DESC;

-- Search with highlighting
SELECT 
    DOC_ID, 
    TITLE, 
    SNIPPET(CONTENT, 'battery', '<mark>', '</mark>') AS HIGHLIGHTED_CONTENT
FROM DOCUMENTS
WHERE CONTAINS(CONTENT, 'battery', EXACT);

-- Advanced search with linguistic analysis
SELECT DOC_ID, TITLE, AUTHOR
FROM DOCUMENTS
WHERE CONTAINS(CONTENT, 'performing', LINGUISTIC_ANALYSIS)
  AND PUBLISH_DATE > CURRENT_DATE - 30;

======== Text Mining ==========
-- Create text mining configuration
CREATE TABLE TEXT_MINING_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO TEXT_MINING_PARAMS VALUES
('LANGUAGE', 1, NULL, NULL),        -- English
('MIN_TOKEN_LENGTH', 3, NULL, NULL),
('REMOVE_STOPWORDS', 1, NULL, NULL);

-- Extract keywords
CALL _SYS_AFL.PAL_TEXT_MINING (
  DOCUMENTS,               -- Input documents
  TEXT_MINING_PARAMS,      -- Parameters
  KEYWORDS_TBL,            -- Output keywords
  TERM_FREQUENCY_TBL       -- Term frequency output
);

-- View extracted keywords
SELECT * FROM KEYWORDS_TBL 
WHERE FREQUENCY > 2 
ORDER BY FREQUENCY DESC;

======== Sentiment Analysis ==========
-- Create sentiment analysis parameters
CREATE TABLE SENTIMENT_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO SENTIMENT_PARAMS VALUES
('MODEL_TYPE', 1, NULL, NULL),     -- Pre-trained model
('LANGUAGE', 1, NULL, NULL),       -- English
('THRESHOLD', NULL, 0.5, NULL);

-- Run sentiment analysis
CALL _SYS_AFL.PAL_SENTIMENT_ANALYSIS (
  DOCUMENTS,               -- Input documents
  SENTIMENT_PARAMS,        -- Parameters
  SENTIMENT_RESULTS        -- Output sentiment scores
);

-- View sentiment results
SELECT 
    DOC_ID,
    TITLE,
    SENTIMENT_SCORE,
    CASE 
        WHEN SENTIMENT_SCORE > 0.1 THEN 'POSITIVE'
        WHEN SENTIMENT_SCORE < -0.1 THEN 'NEGATIVE'
        ELSE 'NEUTRAL'
    END AS SENTIMENT_LABEL
FROM SENTIMENT_RESULTS
ORDER BY SENTIMENT_SCORE DESC;

======== Document Classification ==========
-- Create classification model
CREATE TABLE CLASSIFICATION_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO CLASSIFICATION_PARAMS VALUES
('ALGORITHM', 1, NULL, NULL),     -- Naive Bayes
('FEATURE_TYPE', 2, NULL, NULL),  -- TF-IDF
('MIN_WORD_LENGTH', 3, NULL, NULL);

-- Train document classifier
CALL _SYS_AFL.PAL_DOCUMENT_CLASSIFICATION (
  DOCUMENTS,               -- Training documents
  CLASSIFICATION_PARAMS,   -- Parameters
  CLASSIFICATION_MODEL,    -- Output model
  CLASSIFICATION_STATS     -- Statistics
);

-- Classify new documents
CREATE TABLE NEW_DOCUMENTS (
    DOC_ID INTEGER,
    CONTENT TEXT
);

CALL _SYS_AFL.PAL_DOCUMENT_CLASSIFICATION_PREDICT (
  NEW_DOCUMENTS,           -- Documents to classify
  CLASSIFICATION_MODEL,    -- Trained model
  CLASSIFICATION_RESULTS   -- Predicted categories
);`,
        },
      ],
    },
    {
      title: 'Spatial Data Processing',
      commands: [
        {
          command: 'Spatial Data Types',
          description: 'Work with spatial data and geometry',
          usage: 'ST_GEOMETRY, spatial functions and indexes',
          example: `# Spatial Data Processing

======== Spatial Table Creation ==========
-- Create table with spatial columns
CREATE TABLE LOCATIONS (
    LOCATION_ID INTEGER PRIMARY KEY,
    NAME NVARCHAR(100),
    ADDRESS NVARCHAR(200),
    COORDINATES ST_POINT(4326),    -- WGS84 coordinate system
    BOUNDARY ST_GEOMETRY(4326),    -- Polygon boundary
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create spatial index
CREATE SPATIAL INDEX LOCATIONS_COORDS_IDX 
ON LOCATIONS(COORDINATES);

======== Insert Spatial Data ==========
-- Insert point locations
INSERT INTO LOCATIONS VALUES 
(1, 'Central Park', 'New York, NY', 
 ST_GeomFromText('POINT(-73.9654 40.7829)', 4326), NULL, CURRENT_TIMESTAMP),
(2, 'Times Square', 'New York, NY', 
 ST_GeomFromText('POINT(-73.9857 40.7580)', 4326), NULL, CURRENT_TIMESTAMP),
(3, 'Brooklyn Bridge', 'New York, NY', 
 ST_GeomFromText('POINT(-73.9969 40.7061)', 4326), NULL, CURRENT_TIMESTAMP);

-- Insert polygon areas
INSERT INTO LOCATIONS VALUES 
(4, 'Manhattan District', 'Manhattan, NYC', NULL,
 ST_GeomFromText('POLYGON((-74.0200 40.7000, -73.9300 40.7000, -73.9300 40.8000, -74.0200 40.8000, -74.0200 40.7000))', 4326), 
 CURRENT_TIMESTAMP);

======== Spatial Queries ==========
-- Distance calculations
SELECT 
    L1.NAME AS LOCATION1,
    L2.NAME AS LOCATION2,
    ST_Distance(L1.COORDINATES, L2.COORDINATES, 'kilometer') AS DISTANCE_KM
FROM LOCATIONS L1, LOCATIONS L2
WHERE L1.LOCATION_ID = 1
  AND L2.LOCATION_ID <> 1
ORDER BY DISTANCE_KM;

-- Find points within radius
SELECT 
    NAME,
    ADDRESS,
    ST_Distance(COORDINATES, ST_GeomFromText('POINT(-73.9857 40.7580)', 4326), 'kilometer') AS DISTANCE_FROM_TIMES_SQUARE
FROM LOCATIONS
WHERE ST_Distance(COORDINATES, ST_GeomFromText('POINT(-73.9857 40.7580)', 4326), 'kilometer') < 5
ORDER BY DISTANCE_FROM_TIMES_SQUARE;

-- Point-in-polygon test
SELECT 
    L1.NAME AS POINT_LOCATION,
    L2.NAME AS AREA_NAME,
    ST_Within(L1.COORDINATES, L2.BOUNDARY) AS IS_WITHIN
FROM LOCATIONS L1, LOCATIONS L2
WHERE L2.BOUNDARY IS NOT NULL
  AND L1.COORDINATES IS NOT NULL;

======== Spatial Analysis ==========
-- Buffer analysis
SELECT 
    NAME,
    ST_Buffer(COORDINATES, 1000, 'meter') AS BUFFER_AREA
FROM LOCATIONS
WHERE LOCATION_ID = 1;

-- Intersection analysis
SELECT 
    L1.NAME AS LOCATION1,
    L2.NAME AS LOCATION2,
    ST_Intersects(L1.BOUNDARY, L2.BOUNDARY) AS INTERSECTS,
    ST_Area(ST_Intersection(L1.BOUNDARY, L2.BOUNDARY)) AS INTERSECTION_AREA
FROM LOCATIONS L1, LOCATIONS L2
WHERE L1.BOUNDARY IS NOT NULL 
  AND L2.BOUNDARY IS NOT NULL
  AND L1.LOCATION_ID < L2.LOCATION_ID;

-- Nearest neighbor
SELECT 
    L1.NAME AS TARGET_LOCATION,
    L2.NAME AS NEAREST_LOCATION,
    ST_Distance(L1.COORDINATES, L2.COORDINATES, 'kilometer') AS MIN_DISTANCE
FROM LOCATIONS L1
CROSS JOIN LOCATIONS L2
WHERE L2.LOCATION_ID = (
    SELECT TOP 1 L3.LOCATION_ID
    FROM LOCATIONS L3
    WHERE L3.LOCATION_ID <> L1.LOCATION_ID
    ORDER BY ST_Distance(L1.COORDINATES, L3.COORDINATES, 'kilometer')
);

======== Spatial Aggregations ==========
-- Convex hull
SELECT 
    'All Locations' AS GROUP_NAME,
    ST_ConvexHull(ST_Collect(COORDINATES)) AS CONVEX_HULL,
    ST_Area(ST_ConvexHull(ST_Collect(COORDINATES))) AS TOTAL_AREA
FROM LOCATIONS
WHERE COORDINATES IS NOT NULL;

-- Centroid calculation
SELECT 
    'Location Cluster' AS GROUP_NAME,
    ST_Centroid(ST_Collect(COORDINATES)) AS CENTROID_POINT,
    ST_X(ST_Centroid(ST_Collect(COORDINATES))) AS CENTER_LON,
    ST_Y(ST_Centroid(ST_Collect(COORDINATES))) AS CENTER_LAT
FROM LOCATIONS
WHERE COORDINATES IS NOT NULL;`,
        },
        {
          command: 'Spatial Analytics',
          description: 'Advanced spatial analysis and geospatial operations',
          usage: 'Spatial joins, clustering, and route optimization',
          example: `# Advanced Spatial Analytics

======== Spatial Joins ==========
-- Find locations within multiple polygons
SELECT 
    L.NAME AS LOCATION_NAME,
    A.NAME AS AREA_NAME,
    ST_Distance(L.COORDINATES, ST_Centroid(A.BOUNDARY), 'kilometer') AS DISTANCE_TO_CENTER
FROM LOCATIONS L
JOIN LOCATIONS A ON ST_Within(L.COORDINATES, A.BOUNDARY)
WHERE L.COORDINATES IS NOT NULL
  AND A.BOUNDARY IS NOT NULL;

-- Spatial self-join for proximity
SELECT 
    L1.NAME AS LOCATION1,
    L2.NAME AS LOCATION2,
    ST_Distance(L1.COORDINATES, L2.COORDINATES, 'kilometer') AS DISTANCE_KM,
    CASE 
        WHEN ST_Distance(L1.COORDINATES, L2.COORDINATES, 'kilometer') < 1 THEN 'Very Close'
        WHEN ST_Distance(L1.COORDINATES, L2.COORDINATES, 'kilometer') < 5 THEN 'Close'
        ELSE 'Far'
    END AS PROXIMITY_CATEGORY
FROM LOCATIONS L1
JOIN LOCATIONS L2 ON L1.LOCATION_ID < L2.LOCATION_ID
  AND ST_Distance(L1.COORDINATES, L2.COORDINATES, 'kilometer') < 10
ORDER BY DISTANCE_KM;

======== Spatial Clustering ==========
-- K-means clustering on spatial data
CREATE TABLE SPATIAL_CLUSTER_PARAMS (
    NAME VARCHAR(100),
    INTARG INTEGER,
    DOUBLEARG DOUBLE,
    STRINGARG VARCHAR(100)
);

INSERT INTO SPATIAL_CLUSTER_PARAMS VALUES
('CLUSTER_NUM', 3, NULL, NULL),    -- 3 clusters
('DISTANCE_TYPE', 2, NULL, NULL),  -- Euclidean distance
('MAX_ITERATION', 100, NULL, NULL);

-- Prepare spatial data for clustering
CREATE TABLE SPATIAL_FEATURES (
    LOCATION_ID INTEGER,
    LON DECIMAL(10,6),
    LAT DECIMAL(10,6)
);

INSERT INTO SPATIAL_FEATURES
SELECT 
    LOCATION_ID,
    ST_X(COORDINATES) AS LON,
    ST_Y(COORDINATES) AS LAT
FROM LOCATIONS
WHERE COORDINATES IS NOT NULL;

-- Run spatial clustering
CALL _SYS_AFL.PAL_KMEANS (
  SPATIAL_FEATURES,        -- Input data
  SPATIAL_CLUSTER_PARAMS,  -- Parameters
  SPATIAL_CLUSTERS,        -- Cluster assignments
  SPATIAL_CENTROIDS        -- Cluster centroids
);

======== Route Optimization ==========
-- Traveling salesman problem setup
CREATE TABLE ROUTE_POINTS (
    POINT_ID INTEGER PRIMARY KEY,
    NAME NVARCHAR(100),
    COORDINATES ST_POINT(4326),
    VISIT_DURATION INTEGER  -- minutes
);

INSERT INTO ROUTE_POINTS VALUES
(1, 'Start Point', ST_GeomFromText('POINT(-73.9857 40.7580)', 4326), 0),
(2, 'Location A', ST_GeomFromText('POINT(-73.9654 40.7829)', 4326), 30),
(3, 'Location B', ST_GeomFromText('POINT(-73.9969 40.7061)', 4326), 45),
(4, 'End Point', ST_GeomFromText('POINT(-73.9857 40.7580)', 4326), 0);

-- Distance matrix for routing
CREATE TABLE DISTANCE_MATRIX (
    FROM_POINT INTEGER,
    TO_POINT INTEGER,
    DISTANCE_KM DECIMAL(8,3),
    TRAVEL_TIME_MIN INTEGER
);

INSERT INTO DISTANCE_MATRIX
SELECT 
    R1.POINT_ID AS FROM_POINT,
    R2.POINT_ID AS TO_POINT,
    ST_Distance(R1.COORDINATES, R2.COORDINATES, 'kilometer') AS DISTANCE_KM,
    ROUND(ST_Distance(R1.COORDINATES, R2.COORDINATES, 'kilometer') * 2) AS TRAVEL_TIME_MIN
FROM ROUTE_POINTS R1
CROSS JOIN ROUTE_POINTS R2
WHERE R1.POINT_ID <> R2.POINT_ID;

======== Geospatial Aggregations ==========
-- Density analysis
SELECT 
    'Grid Cell' AS ANALYSIS_TYPE,
    ST_X(ST_Centroid(ST_Collect(COORDINATES))) AS CENTER_LON,
    ST_Y(ST_Centroid(ST_Collect(COORDINATES))) AS CENTER_LAT,
    COUNT(*) AS POINT_COUNT,
    ST_Area(ST_ConvexHull(ST_Collect(COORDINATES))) AS AREA_SQ_KM,
    COUNT(*) / ST_Area(ST_ConvexHull(ST_Collect(COORDINATES))) AS DENSITY_PER_SQ_KM
FROM LOCATIONS
WHERE COORDINATES IS NOT NULL
GROUP BY 
    ROUND(ST_X(COORDINATES), 2), 
    ROUND(ST_Y(COORDINATES), 2)
HAVING COUNT(*) > 1;

-- Spatial statistics
SELECT 
    COUNT(*) AS TOTAL_LOCATIONS,
    ST_X(ST_Centroid(ST_Collect(COORDINATES))) AS MEAN_LON,
    ST_Y(ST_Centroid(ST_Collect(COORDINATES))) AS MEAN_LAT,
    ST_Area(ST_ConvexHull(ST_Collect(COORDINATES))) AS CONVEX_HULL_AREA,
    MAX(ST_Distance(
        ST_Centroid(ST_Collect(COORDINATES)), 
        COORDINATES, 
        'kilometer'
    )) AS MAX_DISTANCE_FROM_CENTER
FROM LOCATIONS
WHERE COORDINATES IS NOT NULL;`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Performance and Optimization',
      commands: [
        {
          command: 'Query Optimization',
          description: 'Advanced query optimization techniques',
          usage: 'Execution plans, hints, and performance tuning',
          example: `# Query Optimization

======== Execution Plan Analysis ==========
-- Explain plan
EXPLAIN PLAN FOR 
SELECT C.CUSTOMER_ID, C.FIRST_NAME, COUNT(O.ORDER_ID) AS ORDER_COUNT
FROM CUSTOMERS C
LEFT JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
WHERE C.REGISTRATION_DATE > CURRENT_DATE - 365
GROUP BY C.CUSTOMER_ID, C.FIRST_NAME;

-- Visualize execution plan
SELECT * FROM EXPLAIN_PLAN_TABLE 
WHERE STATEMENT_ID = CURRENT_STATEMENT_ID;

======== Query Hints ==========
-- Index hint
SELECT /*+ INDEX(ORDERS ORDERS_CUSTOMER_ID_IDX) */
    C.FUSTOMER_ID,
    C.FIRST_NAME,
    O.ORDER_ID,
    O.TOTAL_AMOUNT
FROM CUSTOMERS C
JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
WHERE O.ORDER_DATE > CURRENT_DATE - 30;

-- Join hint
SELECT /*+ HASH_JOIN */ *
FROM LARGE_TABLE1 T1
JOIN LARGE_TABLE2 T2 ON T1.KEY = T2.KEY;

-- Parallel execution hint
SELECT /*+ PARALLEL(8) */
    REGION,
    PRODUCT_CATEGORY,
    SUM(REVENUE) AS TOTAL_REVENUE
FROM SALES_ANALYTICS
WHERE SALE_DATE >= CURRENT_DATE - 90
GROUP BY REGION, PRODUCT_CATEGORY;

======== Performance Monitoring ==========
-- Query performance metrics
SELECT 
    STATEMENT_STRING,
    EXECUTION_COUNT,
    TOTAL_EXECUTION_TIME,
    AVG_EXECUTION_TIME,
    MAX_EXECUTION_TIME,
    TOTAL_ROWS_PROCESSED
FROM M_EXPENSIVE_STATEMENTS
WHERE TOTAL_EXECUTION_TIME > 1000
ORDER BY TOTAL_EXECUTION_TIME DESC;

-- Current running queries
SELECT 
    CONNECTION_ID,
    STATEMENT_STRING,
    EXECUTION_STATUS,
    START_TIME,
    ELAPSED_TIME
FROM M_ACTIVE_STATEMENTS
ORDER BY START_TIME;

======== Index Optimization ==========
-- Create optimal indexes
CREATE INDEX IDX_CUSTOMERS_REGISTRATION_STATUS 
ON CUSTOMERS(REGISTRATION_DATE, STATUS);

-- Composite index for covering queries
CREATE INDEX IDX_ORDERS_CUSTOMER_DATE_STATUS 
ON ORDERS(CUSTOMER_ID, ORDER_DATE DESC, STATUS);

-- Functional index
CREATE INDEX IDX_CUSTOMERS_NAME_UPPER 
ON CUSTOMERS(UPPER(FIRST_NAME), UPPER(LAST_NAME));

-- Index usage analysis
SELECT 
    TABLE_NAME,
    INDEX_NAME,
    COLUMN_NAME,
    USED_COUNT,
    LAST_USED_TIME
FROM M_INDEX_STATISTICS
WHERE SCHEMA_NAME = CURRENT_SCHEMA
ORDER BY USED_COUNT DESC;

======== Memory Optimization ==========
-- Memory-optimized table creation
CREATE TABLE MEMORY_OPTIMIZED_CACHE (
    KEY_VALUE NVARCHAR(100) PRIMARY KEY,
    DATA_VALUE TEXT,
    EXPIRY_TIME TIMESTAMP,
    ACCESS_COUNT INTEGER DEFAULT 0
) MEMORY OPTIMIZED
  UNLOAD PRIORITY 0;

-- Result cache optimization
SELECT /*+ RESULT_CACHE */ 
    PRODUCT_ID,
    SUM(QUANTITY) AS TOTAL_QUANTITY,
    SUM(REVENUE) AS TOTAL_REVENUE
FROM SALES_ANALYTICS
WHERE SALE_DATE >= CURRENT_DATE - 7
GROUP BY PRODUCT_ID;

-- Configure memory pools
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('memorymanager', 'allocationlimit') = '90%';

ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('cache', 'result_cache_size') = '2GB';`,
        },
        {
          command: 'Partitioning and Distribution',
          description: 'Table partitioning and data distribution strategies',
          usage: 'Hash, range, and round-robin partitioning',
          example: `# Table Partitioning

======== Range Partitioning ==========
-- Create range-partitioned table
CREATE TABLE SALES_PARTITIONED (
    SALE_ID BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    PRODUCT_ID INTEGER,
    CUSTOMER_ID INTEGER,
    SALE_DATE DATE,
    REVENUE DECIMAL(12,2),
    REGION NVARCHAR(50)
)
PARTITION BY RANGE (SALE_DATE) (
    PARTITION P_2024_Q1 VALUES LESS THAN ('2024-04-01'),
    PARTITION P_2024_Q2 VALUES LESS THAN ('2024-07-01'),
    PARTITION P_2024_Q3 VALUES LESS THAN ('2024-10-01'),
    PARTITION P_2024_Q4 VALUES LESS THAN ('2025-01-01'),
    PARTITION P_FUTURE VALUES LESS THAN (MAXVALUE)
);

======== Hash Partitioning ==========
-- Hash partitioning for even distribution
CREATE TABLE TRANSACTIONS_HASH (
    TRANSACTION_ID BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ACCOUNT_ID INTEGER,
    TRANSACTION_TYPE NVARCHAR(20),
    AMOUNT DECIMAL(15,2),
    TRANSACTION_TIME TIMESTAMP
)
PARTITION BY HASH (ACCOUNT_ID) PARTITIONS 8;

======== Multi-Level Partitioning ==========
-- Range-hash partitioning
CREATE TABLE SALES_MULTI_LEVEL (
    SALE_ID BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    PRODUCT_ID INTEGER,
    CUSTOMER_ID INTEGER,
    SALE_DATE DATE,
    REVENUE DECIMAL(12,2),
    REGION_CODE INTEGER
)
PARTITION BY RANGE (SALE_DATE) SUBPARTITION BY HASH (CUSTOMER_ID) SUBPARTITIONS 4 (
    PARTITION P_2024_Q1 VALUES LESS THAN ('2024-04-01'),
    PARTITION P_2024_Q2 VALUES LESS THAN ('2024-07-01'),
    PARTITION P_2024_Q3 VALUES LESS THAN ('2024-10-01'),
    PARTITION P_2024_Q4 VALUES LESS THAN ('2025-01-01'),
    PARTITION P_FUTURE VALUES LESS THAN (MAXVALUE)
);

======== Partition Management ==========
-- Add new partition
ALTER TABLE SALES_PARTITIONED ADD PARTITION 
P_2025_Q1 VALUES LESS THAN ('2025-04-01');

-- Split partition
ALTER TABLE SALES_PARTITIONED SPLIT PARTITION P_2024_Q4 
AT ('2024-11-01') INTO (
    PARTITION P_2024_Q4_OCT VALUES LESS THAN ('2024-11-01'),
    PARTITION P_2024_Q4_NOV_DEC VALUES LESS THAN ('2025-01-01')
);

-- Drop partition
ALTER TABLE SALES_PARTITIONED DROP PARTITION P_2024_Q1;

-- Move partition to different tablespace
ALTER TABLE SALES_PARTITIONED MOVE PARTITION P_2024_Q2 
TO TABLESPACE FAST_STORAGE;

======== Partition Pruning ==========
-- Query that benefits from partition pruning
SELECT SUM(REVENUE) AS TOTAL_REVENUE, COUNT(*) AS TRANSACTION_COUNT
FROM SALES_PARTITIONED
WHERE SALE_DATE BETWEEN '2024-07-01' AND '2024-09-30'
  AND REGION = 'North';

-- Partition-specific operations
-- Load data into specific partition
INSERT INTO SALES_PARTITIONED PARTITION (P_2024_Q3)
VALUES (DEFAULT, 123, 456, '2024-08-15', 1500.00, 'North');

-- Analyze specific partition
SELECT PARTITION_NAME, RECORD_COUNT, TABLE_SIZE
FROM M_TABLE_PARTITIONS
WHERE SCHEMA_NAME = CURRENT_SCHEMA 
  AND TABLE_NAME = 'SALES_PARTITIONED';

======== Distribution Strategies ==========
-- Create distributed table
CREATE TABLE DISTRIBUTED_SALES (
    SALE_ID BIGINT,
    PRODUCT_ID INTEGER,
    CUSTOMER_ID INTEGER,
    REVENUE DECIMAL(12,2)
) DISTRIBUTED BY HASH (CUSTOMER_ID) ALL NODES;

-- Check distribution
SELECT 
    HOST,
    PARTITION_ID,
    RECORD_COUNT,
    MEMORY_SIZE
FROM M_TABLE_PARTITIONS
WHERE SCHEMA_NAME = CURRENT_SCHEMA 
  AND TABLE_NAME = 'DISTRIBUTED_SALES';`,
        },
        {
          command: 'Monitoring and Diagnostics',
          description: 'System monitoring and performance diagnostics',
          usage: 'System views, alerts, and diagnostic tools',
          example: `# System Monitoring and Diagnostics

======== System Health Monitoring ==========
-- Overall system status
SELECT 
    HOST,
    VERSION,
    START_TIME,
    UPTIME_IN_SECONDS,
    INSTANCE_NUMBER,
    CURRENT_ROLE
FROM M_SYSTEM_OVERVIEW;

-- Resource utilization
SELECT 
    HOST,
    CPU_USAGE,
    MEMORY_USAGE,
    DISK_USAGE,
    NETWORK_THROUGHPUT
FROM M_HOST_RESOURCE_UTILIZATION
WHERE RECORD_TIME = (
    SELECT MAX(RECORD_TIME) 
    FROM M_HOST_RESOURCE_UTILIZATION
);

======== Performance Metrics ==========
-- Top CPU consuming queries
SELECT 
    STATEMENT_STRING,
    CPU_TIME,
    EXECUTION_COUNT,
    AVG_CPU_TIME
FROM M_CPU_CONSUMPTION_STATEMENTS
WHERE CPU_TIME > 1000
ORDER BY CPU_TIME DESC
LIMIT 10;

-- Memory usage by table
SELECT 
    SCHEMA_NAME,
    TABLE_NAME,
    MEMORY_SIZE_IN_TOTAL,
    MEMORY_SIZE_IN_MAIN,
    MEMORY_SIZE_IN_DELTA,
    DISK_SIZE
FROM M_TABLES
WHERE SCHEMA_NAME = CURRENT_SCHEMA
ORDER BY MEMORY_SIZE_IN_TOTAL DESC;

-- Lock monitoring
SELECT 
    TRANSACTION_ID,
    LOCK_OWNER,
    LOCK_MODE,
    LOCKED_OBJECT,
    LOCK_DURATION
FROM M_LOCKS
WHERE LOCK_DURATION > 30;  -- Locks held longer than 30 seconds

======== Alert Configuration ==========
-- Create custom alert
CREATE OR REPLACE PROCEDURE CHECK_PERFORMANCE_ALERTS()
AS BEGIN
    DECLARE ALERT_COUNT INTEGER;
    
    -- Check for long-running queries
    SELECT COUNT(*) INTO ALERT_COUNT
    FROM M_ACTIVE_STATEMENTS
    WHERE ELAPSED_TIME > 300000;  -- 5 minutes
    
    IF ALERT_COUNT > 0 THEN
        -- Send alert (implementation depends on notification system)
        CALL SYSTEM_SEND_ALERT('Long-running queries detected: ' || ALERT_COUNT);
    END IF;
END;

-- Schedule alert check
CREATE OR REPLACE PROCEDURE SCHEDULE_PERFORMANCE_CHECKS()
AS BEGIN
    CALL CHECK_PERFORMANCE_ALERTS();
END;

-- Create job for scheduled execution
CALL CREATE_JOB('PERFORMANCE_ALERT_JOB', 'SCHEDULE_PERFORMANCE_CHECKS', '0 */5 * * *');

======== Diagnostic Queries ==========
-- Table fragmentation analysis
SELECT 
    TABLE_NAME,
    RECORD_COUNT,
    TABLE_SIZE,
    FRAGMENTATION_RATIO,
    LAST_COMPRESSED
FROM M_TABLE_FRAGMENTS
WHERE FRAGMENTATION_RATIO > 0.3;  -- Highly fragmented tables

-- Index effectiveness
SELECT 
    TABLE_NAME,
    INDEX_NAME,
    USED_COUNT,
    TOTAL_SCAN_COUNT,
    EFFECTIVENESS_RATIO
FROM M_INDEX_STATISTICS
WHERE EFFECTIVENESS_RATIO < 0.1;  -- Ineffective indexes

-- Query performance trends
SELECT 
    DATE_TRUNC('hour', START_TIME) AS HOUR,
    COUNT(*) AS QUERY_COUNT,
    AVG(EXECUTION_TIME) AS AVG_EXECUTION_TIME,
    MAX(EXECUTION_TIME) AS MAX_EXECUTION_TIME
FROM M_QUERY_HISTORY
WHERE START_TIME > CURRENT_TIMESTAMP - INTERVAL '24' HOUR
GROUP BY DATE_TRUNC('hour', START_TIME)
ORDER BY HOUR;

======== System Configuration ==========
-- Current configuration parameters
SELECT 
    SECTION,
    KEY,
    VALUE,
    RESTART_REQUIRED
FROM M_INIFILE_CONTENTS
WHERE SECTION IN ('memorymanager', 'indexserver', 'persistence')
  AND KEY LIKE '%performance%';

-- Performance tuning recommendations
SELECT 
    'Increase result cache size' AS RECOMMENDATION,
    'Current: ' || (SELECT VALUE FROM M_INIFILE_CONTENTS 
                   WHERE SECTION = 'cache' AND KEY = 'result_cache_size') AS CURRENT_VALUE,
    'Recommended: 2GB' AS RECOMMENDED_VALUE
FROM DUMMY
WHERE (SELECT TO_NUMBER(VALUE) FROM M_INIFILE_CONTENTS 
       WHERE SECTION = 'cache' AND KEY = 'result_cache_size') < 1073741824;`,
        },
      ],
    },
    {
      title: 'Enterprise Features',
      commands: [
        {
          command: 'High Availability and Disaster Recovery',
          description: 'Configure HA and DR solutions',
          usage: 'System replication, backup, and recovery',
          example: `# High Availability and Disaster Recovery

======== System Replication Setup ==========
-- Primary system configuration
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('system_replication', 'mode') = 'sync';

ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('system_replication', 'operation_mode') = 'primary';

-- Secondary system configuration
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('system_replication', 'mode') = 'sync';

ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('system_replication', 'operation_mode') = 'secondary';

-- Register secondary system
ALTER SYSTEM ADD SECONDARY 'hana-secondary:39013'
  REPLICATION MODE 'sync';

======== Replication Monitoring ==========
-- Check replication status
SELECT 
    SITE_NAME,
    REPLICATION_STATUS,
    MODE,
    OPERATION_MODE,
    TIME_LAG,
    DATA_LAG
FROM M_SYSTEM_REPLICATION_STATE;

-- Replication performance
SELECT 
    SITE_NAME,
    THROUGHPUT,
    LATENCY,
    ERROR_COUNT
FROM M_SYSTEM_REPLICATION_PERFORMANCE;

-- Failover operations
-- Perform manual failover
ALTER SYSTEM FAILOVER TO 'hana-secondary';

-- Takeover primary role
ALTER SYSTEM TAKEOVER;

======== Backup Strategies ==========
-- Full backup
BACKUP DATA USING FILE ('/backup/full_backup_20241015')
COMPLETE;

-- Incremental backup
BACKUP DATA INCREMENTAL USING FILE ('/backup/incremental_backup_20241015');

-- Differential backup
BACKUP DATA DIFFERENTIAL USING FILE ('/backup/differential_backup_20241015');

-- Backup with encryption
BACKUP DATA USING FILE ('/backup/encrypted_backup_20241015')
WITH ENCRYPTION ('AES-256-CBC', 'backup_password');

======== Backup Automation ==========
-- Create backup procedure
CREATE OR REPLACE PROCEDURE AUTOMATED_BACKUP()
AS BEGIN
    DECLARE BACKUP_PATH NVARCHAR(256);
    DECLARE TIMESTAMP_STR NVARCHAR(20);
    
    -- Generate timestamp for backup file
    SELECT TO_CHAR(CURRENT_TIMESTAMP, 'YYYYMMDD_HH24MISS') 
    INTO TIMESTAMP_STR FROM DUMMY;
    
    -- Construct backup path
    BACKUP_PATH := '/backup/auto_backup_' || TIMESTAMP_STR;
    
    -- Execute backup
    EXECUTE IMMEDIATE 
        'BACKUP DATA USING FILE (''' || BACKUP_PATH || ''') COMPLETE';
    
    -- Log backup completion
    INSERT INTO BACKUP_LOG (BACKUP_TIME, BACKUP_PATH, STATUS)
    VALUES (CURRENT_TIMESTAMP, BACKUP_PATH, 'COMPLETED');
    
END;

-- Schedule daily backup
CALL CREATE_JOB('DAILY_BACKUP', 'AUTOMATED_BACKUP', '0 2 * * *');

======== Recovery Operations ==========
-- Point-in-time recovery
RECOVER DATA USING FILE ('/backup/full_backup_20241015')
UNTIL TIMESTAMP '2024-10-15 14:30:00';

-- Recover specific tables
RECOVER DATA FOR SCHEMA MYSCHEMA
USING FILE ('/backup/full_backup_20241015');

-- Recover from incremental backup
RECOVER DATA USING FILE ('/backup/incremental_backup_20241015')
WITH BASE BACKUP USING FILE ('/backup/full_backup_20241001');

======== Disaster Recovery Testing ==========
-- Test backup integrity
BACKUP DATA USING FILE ('/backup/test_backup_20241015')
WITH CHECK;

-- Verify backup catalog
SELECT 
    BACKUP_ID,
    BACKUP_START_TIME,
    BACKUP_END_TIME,
    BACKUP_SIZE,
    ENCRYPTION_FLAG
FROM M_BACKUP_CATALOG
WHERE BACKUP_START_TIME > CURRENT_DATE - 7;

-- Disaster recovery drill
-- Create recovery plan document
CREATE OR REPLACE PROCEDURE DR_DRILL()
AS BEGIN
    DECLARE DR_START_TIME TIMESTAMP;
    DECLARE DR_END_TIME TIMESTAMP;
    
    DR_START_TIME := CURRENT_TIMESTAMP;
    
    -- Simulate disaster recovery
    RECOVER DATA USING FILE ('/backup/latest_full_backup');
    
    DR_END_TIME := CURRENT_TIMESTAMP;
    
    -- Log drill results
    INSERT INTO DR_LOG (DRILL_TIME, RECOVERY_TIME, STATUS)
    VALUES (DR_START_TIME, SECONDS_BETWEEN(DR_END_TIME, DR_START_TIME), 'SUCCESS');
    
END;`,
        },
        {
          command: 'Security and Authorization',
          description: 'Implement comprehensive security measures',
          usage: 'Users, roles, privileges, and data encryption',
          example: `# Security and Authorization

======== User and Role Management ==========
-- Create roles with specific privileges
CREATE ROLE SALES_ANALYST;
CREATE ROLE FINANCE_MANAGER;
CREATE ROLE SYSTEM_ADMIN;

-- Grant privileges to roles
GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA SALES TO SALES_ANALYST;
GRANT SELECT ON SCHEMA FINANCE TO FINANCE_MANAGER;
GRANT CREATE ANY, DROP ANY ON SCHEMA SYSTEM TO SYSTEM_ADMIN;

-- Create users and assign roles
CREATE USER SALES_USER_1 PASSWORD 'SecurePass123' FORCE_FIRST_PASSWORD_CHANGE;
CREATE USER FINANCE_USER_1 PASSWORD 'SecurePass456' FORCE_FIRST_PASSWORD_CHANGE;

GRANT SALES_ANALYST TO SALES_USER_1;
GRANT FINANCE_MANAGER TO FINANCE_USER_1;

-- Privilege analysis
SELECT 
    GRANTEE,
    OBJECT_TYPE,
    OBJECT_NAME,
    PRIVILEGE,
    GRANTOR
FROM M_GRANTED_PRIVILEGES
WHERE GRANTEE IN ('SALES_USER_1', 'FINANCE_USER_1');

======== Data Encryption ==========
-- Column-level encryption
CREATE TABLE ENCRYPTED_CUSTOMERS (
    CUSTOMER_ID INTEGER PRIMARY KEY,
    NAME NVARCHAR(100),
    SSN NVARCHAR(11) ENCRYPTED WITH 'AES-256-CBC',
    CREDIT_CARD NVARCHAR(20) ENCRYPTED WITH 'AES-256-CBC',
    EMAIL NVARCHAR(100)
);

-- Table-level encryption
CREATE TABLE FINANCIAL_DATA (
    TRANSACTION_ID BIGINT PRIMARY KEY,
    ACCOUNT_ID INTEGER,
    AMOUNT DECIMAL(15,2),
    TRANSACTION_DATE DATE
) ENCRYPTED WITH 'AES-256-CBC';

-- Configure encryption keys
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('encryption', 'root_key_backup_path') = '/backup/keys/';

-- Rotate encryption keys
ALTER SYSTEM ROTATE ENCRYPTION KEY;

======== Audit and Compliance ==========
-- Enable auditing
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('audit', 'audit_trail') = 'ALL';

-- Configure audit filters
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('audit', 'audit_filter') = 'SELECT,INSERT,UPDATE,DELETE ON SCHEMA FINANCE';

-- Audit report generation
CREATE OR REPLACE PROCEDURE GENERATE_AUDIT_REPORT()
AS BEGIN
    -- Create audit report table
    CREATE LOCAL TEMPORARY TABLE #AUDIT_REPORT (
        USER_NAME NVARCHAR(256),
        ACTION_TIME TIMESTAMP,
        ACTION_TYPE NVARCHAR(50),
        OBJECT_NAME NVARCHAR(256),
        STATEMENT_TEXT TEXT
    );
    
    -- Populate audit report
    INSERT INTO #AUDIT_REPORT
    SELECT 
        USER_NAME,
        ACTION_TIME,
        ACTION_TYPE,
        OBJECT_NAME,
        STATEMENT_TEXT
    FROM AUDIT_LOG
    WHERE ACTION_TIME > CURRENT_DATE - 1
      AND SCHEMA_NAME = 'FINANCE';
    
    -- Return results
    SELECT * FROM #AUDIT_REPORT ORDER BY ACTION_TIME DESC;
    
END;

======== Network Security ==========
-- Configure SSL/TLS
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('communication', 'ssl') = 'true';

-- Configure IP whitelist
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
SET ('communication', 'listenaddress') = '10.0.0.0/8,192.168.0.0/16';

-- Restrict administrative access
CREATE ROLE ADMIN_ACCESS;
GRANT ADMINISTRATIVE PRIVILEGE TO ADMIN_ACCESS;

-- Grant admin role only to specific IPs
-- (Implementation depends on network configuration)

======== Data Masking ==========
-- Create masked view
CREATE VIEW CUSTOMER_MASKED AS
SELECT 
    CUSTOMER_ID,
    NAME,
    SUBSTRING(EMAIL, 1, 3) || '***@***.com' AS EMAIL,
    '***-**-' || SUBSTRING(SSN, 8, 4) AS MASKED_SSN
FROM CUSTOMERS;

-- Grant access to masked view
GRANT SELECT ON CUSTOMER_MASKED TO SALES_ANALYST;
REVOKE SELECT ON CUSTOMERS FROM SALES_ANALYST;

-- Dynamic data masking
CREATE OR REPLACE PROCEDURE GET_MASKED_CUSTOMER_DATA(
    IN P_USER_ID NVARCHAR(256),
    OUT P_RESULT TABLE (
        CUSTOMER_ID INTEGER,
        NAME NVARCHAR(100),
        EMAIL NVARCHAR(100),
        SSN NVARCHAR(11)
    )
)
AS BEGIN
    -- Return masked data for non-privileged users
    IF P_USER_ID NOT IN ('ADMIN_USER', 'SYSTEM') THEN
        P_RESULT = SELECT 
            CUSTOMER_ID,
            NAME,
            SUBSTRING(EMAIL, 1, 3) || '***@***.com' AS EMAIL,
            '***-**-' || SUBSTRING(SSN, 8, 4) AS SSN
        FROM CUSTOMERS;
    ELSE
        -- Return full data for privileged users
        P_RESULT = SELECT * FROM CUSTOMERS;
    END IF;
END;`,
        },
        {
          command: 'Cloud Integration',
          description: 'Integrate with SAP HANA Cloud and cloud services',
          usage: 'Cloud connectivity, hybrid deployments, and cloud-native features',
          example: `# SAP HANA Cloud Integration

======== Cloud Database Connection ==========
-- Connect to HANA Cloud instance
CREATE CLOUD REMOTE SOURCE HANA_CLOUD
ADAPTER 'hanaodbc'
CONFIGURATION 'connectionString=jdbc:sap://hana-cloud-instance:443/?encrypt=true'
WITH CREDENTIAL TYPE 'PASSWORD' USING 'user=cloud_admin;password=cloud_password';

-- Create virtual table for cloud data
CREATE VIRTUAL TABLE CLOUD_CUSTOMERS 
AT "HANA_CLOUD"."MYSCHEMA"."CUSTOMERS";

-- Query cloud data
SELECT * FROM CLOUD_CUSTOMERS WHERE REGION = 'US';

======== Hybrid Data Replication ==========
-- Set up data replication from on-premise to cloud
CREATE REMOTE SUBSCRIPTION CLOUD_SYNC
TARGET "HANA_CLOUD"."MYSCHEMA"
SOURCE TABLE CUSTOMERS
REPLICATION MODE ASYNC;

-- Start replication
ALTER REMOTE SUBSCRIPTION CLOUD_SYNC ENABLE;

-- Monitor replication status
SELECT 
    SUBSCRIPTION_NAME,
    STATUS,
    LAST_SYNC_TIME,
    LAG_TIME,
    ERROR_COUNT
FROM M_REMOTE_SUBSCRIPTIONS;

======== Cloud Storage Integration ==========
-- Create AWS S3 integration
CREATE CLOUD REMOTE SOURCE AWS_S3
ADAPTER 's3'
CONFIGURATION 'accessKey=AKIAIOSFODNN7EXAMPLE;secretKey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY;region=us-west-2';

-- Import data from S3
IMPORT FROM CSV AT 'AWS_S3'.'bucket-name/data/customers.csv'
INTO CUSTOMERS
WITH FIELD DELIMITED BY ',' 
     THREADS 4
     BATCH SIZE 1000;

-- Export data to cloud storage
EXPORT CUSTOMERS INTO CSV AT 'AWS_S3'.'bucket-name/exports/customers_backup.csv'
WITH FIELD DELIMITED BY ',' 
     HEADER ROW;

======== SAP Analytics Cloud Integration ==========
-- Create SAC connection
CREATE REMOTE SOURCE SAC_CONNECTION
ADAPTER 'odbc'
CONFIGURATION 'dsn=SAC_ODBC_DSN';

-- Create view for SAC consumption
CREATE VIEW SAC_SALES_ANALYTICS AS
SELECT 
    PRODUCT_CATEGORY,
    REGION,
    SUM(REVENUE) AS TOTAL_REVENUE,
    COUNT(*) AS TRANSACTION_COUNT,
    AVG(UNIT_PRICE) AS AVG_PRICE
FROM SALES_ANALYTICS
WHERE SALE_DATE >= CURRENT_DATE - 90
GROUP BY PRODUCT_CATEGORY, REGION;

-- Grant access to SAC
GRANT SELECT ON SAC_SALES_ANALYTICS TO SAC_USER;

======== Cloud-Native Features ==========
-- Use cloud-specific functions
SELECT 
    CLOUD_PROVIDER(),
    CLOUD_REGION(),
    CLOUD_INSTANCE_TYPE()
FROM DUMMY;

-- Cloud storage optimization
ALTER TABLE LARGE_TABLE SET
    CLOUD_STORAGE_OPTIMIZATION = TRUE;

-- Auto-scaling configuration
ALTER SYSTEM ALTER CONFIGURATION ('cloud.ini', 'SYSTEM')
SET ('autoscaling', 'enabled') = 'true'
SET ('autoscaling', 'min_instances') = '2'
SET ('autoscaling', 'max_instances') = '8'
SET ('autoscaling', 'cpu_threshold') = '70';

======== Multi-Cloud Deployment ==========
-- Configure multi-cloud setup
CREATE CLOUD REMOTE SOURCE AZURE_SQL
ADAPTER 'odbc'
CONFIGURATION 'connectionString=Driver={ODBC Driver 17 for SQL Server};Server=azure-sql-server.database.windows.net;Database=analytics;';

CREATE CLOUD REMOTE SOURCE GCP_BIGQUERY
ADAPTER 'bigquery'
CONFIGURATION 'projectId=my-gcp-project;jsonKeyFile=/path/to/service-account.json';

-- Federated queries across clouds
SELECT 
    'AZURE' AS SOURCE,
    COUNT(*) AS CUSTOMER_COUNT
FROM AZURE_CUSTOMERS
UNION ALL
SELECT 
    'GCP' AS SOURCE,
    COUNT(*) AS CUSTOMER_COUNT
FROM GCP_CUSTOMERS
UNION ALL
SELECT 
    'HANA_CLOUD' AS SOURCE,
    COUNT(*) AS CUSTOMER_COUNT
FROM CLOUD_CUSTOMERS;

======== Cloud Monitoring ==========
-- Cloud-specific monitoring
SELECT 
    CLOUD_SERVICE,
    INSTANCE_ID,
    CPU_UTILIZATION,
    MEMORY_UTILIZATION,
    STORAGE_UTILIZATION,
    NETWORK_THROUGHPUT
FROM M_CLOUD_METRICS
WHERE RECORD_TIME > CURRENT_TIMESTAMP - INTERVAL '1' HOUR;

-- Cloud cost analysis
SELECT 
    SERVICE_TYPE,
    USAGE_METRIC,
    CONSUMPTION,
    COST,
    BILLING_PERIOD
FROM M_CLOUD_BILLING
WHERE BILLING_PERIOD = CURRENT_MONTH
ORDER BY COST DESC;`,
        },
      ],
    },
  ],
};
