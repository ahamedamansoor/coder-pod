import { Database } from 'lucide-react';

export const saphanaCheatsheet = {
  id: 'saphana',
  name: 'SAP HANA',
  description: 'Master SAP HANA from basics to expert operations (2024 Edition)',
  icon: Database,
  colorTheme: 'indigo' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with SAP HANA',
      commands: [
        {
          command: 'SAP HANA Overview',
          description: 'Introduction to SAP HANA concepts',
          usage: 'Understanding HANA fundamentals',
          example: `SAP HANA Overview:
- In-memory, column-oriented, relational database management system
- Real-time analytics and transactional processing
- Multi-model database (relational, graph, spatial, text, JSON)
- High-performance data processing and analytics
- Advanced data compression and parallel processing
- Integrated application services and predictive analytics
- Support for SAP and non-SAP applications
- Cloud, on-premise, and hybrid deployment options`,
        },
        {
          command: 'Key Architecture Concepts',
          description: 'Core HANA architecture components',
          usage: 'Understanding HANA architecture',
          example: `Architecture Components:
- Index Server: Main processing engine
- Name Server: Database topology management
- Preprocessor Server: Text search and analysis
- Script Server: Application function execution
- Statistics Server: Performance monitoring
- XS Engine: Application services
- Row Store: Traditional row-based storage
- Column Store: Column-based storage (default)
- Persistence Layer: Data durability and recovery`,
        },
        {
          command: 'HANA Data Types',
          description: 'Basic HANA data types',
          usage: 'Common data type definitions',
          example: `Numeric Types:
TINYINT      -- 1 byte integer (0-255)
SMALLINT     -- 2 byte integer (-32,768 to 32,767)
INTEGER      -- 4 byte integer
BIGINT       -- 8 byte integer
DECIMAL(p,s) -- Fixed-point decimal
REAL         -- 4 byte floating point
DOUBLE       -- 8 byte floating point

String Types:
VARCHAR(n)   -- Variable-length string
NVARCHAR(n)  -- Unicode variable-length string
TEXT         -- Large text object
ALPHANUM     -- Alphanumeric characters

Date/Time Types:
DATE         -- Calendar date
TIME         -- Time of day
SECONDDATE   -- Date with time precision
TIMESTAMP    -- Date and time`,
        },
        {
          command: 'Connect to HANA',
          description: 'Connect to SAP HANA database',
          usage: 'Database connection methods',
          example: `-- Using hdbsql (command line)
hdbsql -i 00 -u SYSTEM -p password -n localhost:30015

-- Using DBeaver/JDBC
jdbc:sap://localhost:30015/?reconnect=true

-- Using Python (pyhdb)
import pyhdb
connection = pyhdb.connect('localhost', 30015, 'SYSTEM', 'password')

-- Using Node.js (hdb)
var hdb = require('hdb');
var client = hdb.createClient({
  host: 'localhost',
  port: 30015,
  user: 'SYSTEM',
  password: 'password'
});`,
        },
        {
          command: 'Create Schema',
          description: 'Create a new schema',
          usage: 'CREATE SCHEMA statement',
          example: `-- Create schema
CREATE SCHEMA MY_SCHEMA;

-- Create schema with authorization
CREATE SCHEMA MY_SCHEMA AUTHORIZATION USER_NAME;

-- Use schema
USE MY_SCHEMA;

-- Drop schema
DROP SCHEMA MY_SCHEMA;`,
        },
        {
          command: 'Create Table Basic',
          description: 'Create a basic table',
          usage: 'CREATE TABLE statement',
          example: `CREATE TABLE CUSTOMERS (
  CUSTOMER_ID INTEGER PRIMARY KEY,
  FIRST_NAME VARCHAR(50),
  LAST_NAME VARCHAR(50),
  EMAIL VARCHAR(100),
  PHONE VARCHAR(20),
  CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        {
          command: 'Create Table with Constraints',
          description: 'Create table with constraints',
          usage: 'Table constraints',
          example: `CREATE TABLE ORDERS (
  ORDER_ID BIGINT PRIMARY KEY,
  CUSTOMER_ID INTEGER NOT NULL,
  ORDER_DATE DATE NOT NULL,
  TOTAL_AMOUNT DECIMAL(10,2) CHECK (TOTAL_AMOUNT > 0),
  STATUS VARCHAR(20) DEFAULT 'PENDING',
  CONSTRAINT FK_CUSTOMER FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(CUSTOMER_ID)
);`,
        },
        {
          command: 'Insert Data',
          description: 'Insert records into table',
          usage: 'INSERT INTO statement',
          example: `-- Single insert
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL)
VALUES (1, 'John', 'Doe', 'john.doe@example.com');

-- Multiple insert
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL)
VALUES 
  (2, 'Jane', 'Smith', 'jane.smith@example.com'),
  (3, 'Bob', 'Johnson', 'bob.johnson@example.com');

-- Insert with explicit columns
INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE)
VALUES (4, 'Alice', 'Brown', 'alice.brown@example.com', '555-0123');`,
        },
        {
          command: 'Update Data',
          description: 'Update existing records',
          usage: 'UPDATE statement',
          example: `-- Simple update
UPDATE CUSTOMERS 
SET EMAIL = 'newemail@example.com' 
WHERE CUSTOMER_ID = 1;

-- Update multiple columns
UPDATE CUSTOMERS 
SET FIRST_NAME = 'Johnathan', PHONE = '555-0456' 
WHERE CUSTOMER_ID = 1;

-- Update with condition
UPDATE ORDERS 
SET STATUS = 'SHIPPED' 
WHERE ORDER_DATE < CURRENT_DATE - 7;`,
        },
        {
          command: 'Delete Data',
          description: 'Delete records from table',
          usage: 'DELETE statement',
          example: `-- Delete specific record
DELETE FROM CUSTOMERS WHERE CUSTOMER_ID = 1;

-- Delete with condition
DELETE FROM ORDERS 
WHERE ORDER_DATE < CURRENT_DATE - 365;

-- Delete all records
DELETE FROM CUSTOMERS;`,
        },
        {
          command: 'Select Data Basic',
          description: 'Basic SELECT operations',
          usage: 'SELECT statement',
          example: `-- Select all columns
SELECT * FROM CUSTOMERS;

-- Select specific columns
SELECT CUSTOMER_ID, FIRST_NAME, LAST_NAME FROM CUSTOMERS;

-- Select with WHERE clause
SELECT * FROM CUSTOMERS WHERE FIRST_NAME = 'John';

-- Select with ORDER BY
SELECT * FROM CUSTOMERS ORDER BY LAST_NAME ASC, FIRST_NAME ASC;

-- Select with LIMIT
SELECT * FROM CUSTOMERS ORDER BY CREATED_AT DESC LIMIT 10;`,
        },
        {
          command: 'Drop Table',
          description: 'Delete a table',
          usage: 'DROP TABLE statement',
          example: `DROP TABLE ORDERS;
DROP TABLE CUSTOMERS;`,
        },
        {
          command: 'Table Information',
          description: 'Get table metadata',
          usage: 'System views for table info',
          example: `-- List all tables in schema
SELECT TABLE_NAME FROM TABLES WHERE SCHEMA_NAME = 'MY_SCHEMA';

-- Get table columns
SELECT COLUMN_NAME, DATA_TYPE, LENGTH, IS_NULLABLE
FROM TABLE_COLUMNS 
WHERE SCHEMA_NAME = 'MY_SCHEMA' AND TABLE_NAME = 'CUSTOMERS';

-- Get table size
SELECT SCHEMA_NAME, TABLE_NAME, RECORD_COUNT, TABLE_SIZE
FROM M_TABLES WHERE SCHEMA_NAME = 'MY_SCHEMA';`,
        },
      ],
    },
    {
      title: 'HANA SQL Functions',
      commands: [
        {
          command: 'String Functions',
          description: 'Common string functions',
          usage: 'String manipulation functions',
          example: `-- Convert to upper/lower case
SELECT UPPER(FIRST_NAME), LOWER(EMAIL) FROM CUSTOMERS;

-- Concatenate strings
SELECT FIRST_NAME || ' ' || LAST_NAME AS FULL_NAME FROM CUSTOMERS;

-- String length
SELECT LENGTH(EMAIL) FROM CUSTOMERS;

-- Substring
SELECT SUBSTRING(EMAIL, 1, 5) FROM CUSTOMERS;

-- Trim spaces
SELECT TRIM('  hello  ') FROM DUMMY;

-- Replace characters
SELECT REPLACE('hello world', 'world', 'HANA') FROM DUMMY;`,
        },
        {
          command: 'Numeric Functions',
          description: 'Mathematical functions',
          usage: 'Numeric calculations',
          example: `-- Basic math operations
SELECT TOTAL_AMOUNT, TOTAL_AMOUNT * 1.1 AS WITH_TAX FROM ORDERS;

-- Round numbers
SELECT ROUND(TOTAL_AMOUNT, 2) FROM ORDERS;

-- Ceiling and floor
SELECT CEIL(TOTAL_AMOUNT), FLOOR(TOTAL_AMOUNT) FROM ORDERS;

-- Absolute value
SELECT ABS(TOTAL_AMOUNT) FROM ORDERS;

-- Power and square root
SELECT POWER(2, 3), SQRT(16) FROM DUMMY;

-- Modulus
SELECT MOD(10, 3) FROM DUMMY;`,
        },
        {
          command: 'Date Functions',
          description: 'Date and time functions',
          usage: 'Temporal operations',
          example: `-- Current date/time
SELECT CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP FROM DUMMY;

-- Add/subtract dates
SELECT ORDER_DATE, ADD_DAYS(ORDER_DATE, 30) AS DUE_DATE FROM ORDERS;

-- Date parts
SELECT EXTRACT(YEAR FROM ORDER_DATE) AS ORDER_YEAR FROM ORDERS;

-- Date difference
SELECT DAYS_BETWEEN(CURRENT_DATE, ORDER_DATE) AS DAYS_AGO FROM ORDERS;

-- Format dates
SELECT TO_VARCHAR(ORDER_DATE, 'YYYY-MM-DD') FROM ORDERS;

-- Parse dates
SELECT TO_DATE('2024-01-01', 'YYYY-MM-DD') FROM DUMMY;`,
        },
        {
          command: 'Aggregate Functions',
          description: 'Aggregate functions',
          usage: 'Data aggregation',
          example: `-- Count records
SELECT COUNT(*) FROM CUSTOMERS;
SELECT COUNT(CUSTOMER_ID) FROM CUSTOMERS;

-- Sum and average
SELECT SUM(TOTAL_AMOUNT), AVG(TOTAL_AMOUNT) FROM ORDERS;

-- Min and max
SELECT MIN(ORDER_DATE), MAX(ORDER_DATE) FROM ORDERS;

-- Group by aggregation
SELECT STATUS, COUNT(*) AS ORDER_COUNT, SUM(TOTAL_AMOUNT) AS TOTAL
FROM ORDERS GROUP BY STATUS;

-- Having clause
SELECT CUSTOMER_ID, COUNT(*) AS ORDER_COUNT
FROM ORDERS
GROUP BY CUSTOMER_ID
HAVING COUNT(*) > 5;`,
        },
        {
          command: 'Conditional Functions',
          description: 'Conditional logic in SQL',
          usage: 'CASE and IF statements',
          example: `-- CASE statement
SELECT 
  CUSTOMER_ID,
  TOTAL_AMOUNT,
  CASE 
    WHEN TOTAL_AMOUNT > 1000 THEN 'High Value'
    WHEN TOTAL_AMOUNT > 500 THEN 'Medium Value'
    ELSE 'Low Value'
  END AS VALUE_CATEGORY
FROM ORDERS;

-- IF function
SELECT IF(TOTAL_AMOUNT > 1000, 'Premium', 'Standard') AS CUSTOMER_TYPE
FROM ORDERS;

-- NULLIF function
SELECT NULLIF(STATUS, 'PENDING') AS NON_PENDING_STATUS FROM ORDERS;

-- COALESCE function
SELECT COALESCE(PHONE, 'Not Provided') AS PHONE_NUMBER FROM CUSTOMERS;`,
        },
        {
          command: 'Type Conversion Functions',
          description: 'Data type conversion',
          usage: 'CAST and CONVERT functions',
          example: `-- Convert types
SELECT CAST(TOTAL_AMOUNT AS INTEGER) FROM ORDERS;
SELECT TO_VARCHAR(CREATED_AT, 'YYYY-MM-DD') FROM CUSTOMERS;

-- Convert to number
SELECT TO_DECIMAL('123.45', '999.99') FROM DUMMY;

-- Convert to date
SELECT TO_DATE('2024-01-01', 'YYYY-MM-DD') FROM DUMMY;

-- Convert to timestamp
SELECT TO_TIMESTAMP('2024-01-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS') FROM DUMMY;`,
        },
      ],
    },
    {
      title: 'HANA Advanced Queries',
      commands: [
        {
          command: 'JOIN Operations',
          description: 'Join multiple tables',
          usage: 'INNER JOIN, LEFT JOIN',
          example: `-- Inner join
SELECT C.FIRST_NAME, O.ORDER_ID, O.TOTAL_AMOUNT
FROM CUSTOMERS C
INNER JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID;

-- Left join
SELECT C.FIRST_NAME, O.ORDER_ID
FROM CUSTOMERS C
LEFT JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID;

-- Multiple joins
SELECT C.FIRST_NAME, O.ORDER_ID, P.PRODUCT_NAME
FROM CUSTOMERS C
INNER JOIN ORDERS O ON C.CUSTOMER_ID = O.CUSTOMER_ID
INNER JOIN ORDER_ITEMS OI ON O.ORDER_ID = OI.ORDER_ID
INNER JOIN PRODUCTS P ON OI.PRODUCT_ID = P.PRODUCT_ID;`,
        },
        {
          command: 'Subqueries',
          description: 'Use subqueries in queries',
          usage: 'Subquery patterns',
          example: `-- Subquery in WHERE clause
SELECT * FROM CUSTOMERS 
WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID FROM ORDERS WHERE TOTAL_AMOUNT > 1000);

-- Subquery in SELECT clause
SELECT 
  FIRST_NAME,
  (SELECT COUNT(*) FROM ORDERS WHERE CUSTOMER_ID = C.CUSTOMER_ID) AS ORDER_COUNT
FROM CUSTOMERS C;

-- EXISTS subquery
SELECT * FROM CUSTOMERS C
WHERE EXISTS (SELECT 1 FROM ORDERS O WHERE O.CUSTOMER_ID = C.CUSTOMER_ID);

-- Derived table subquery
SELECT * FROM (
  SELECT CUSTOMER_ID, COUNT(*) AS ORDER_COUNT
  FROM ORDERS
  GROUP BY CUSTOMER_ID
) WHERE ORDER_COUNT > 5;`,
        },
        {
          command: 'Window Functions',
          description: 'Use window functions',
          usage: 'OVER() clause',
          example: `-- Row number
SELECT 
  FIRST_NAME,
  TOTAL_AMOUNT,
  ROW_NUMBER() OVER (ORDER BY TOTAL_AMOUNT DESC) AS RANK
FROM ORDERS;

-- Running total
SELECT 
  ORDER_DATE,
  TOTAL_AMOUNT,
  SUM(TOTAL_AMOUNT) OVER (ORDER BY ORDER_DATE) AS RUNNING_TOTAL
FROM ORDERS;

-- Partition by
SELECT 
  CUSTOMER_ID,
  ORDER_DATE,
  TOTAL_AMOUNT,
  ROW_NUMBER() OVER (PARTITION BY CUSTOMER_ID ORDER BY ORDER_DATE) AS CUSTOMER_ORDER_NUM
FROM ORDERS;`,
        },
        {
          command: 'Common Table Expressions',
          description: 'Use CTEs for complex queries',
          usage: 'WITH clause',
          example: `-- Simple CTE
WITH ACTIVE_CUSTOMERS AS (
  SELECT CUSTOMER_ID FROM CUSTOMERS WHERE EMAIL IS NOT NULL
)
SELECT * FROM ORDERS WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID FROM ACTIVE_CUSTOMERS);

-- Multiple CTEs
WITH CUSTOMER_STATS AS (
  SELECT CUSTOMER_ID, COUNT(*) AS ORDER_COUNT, SUM(TOTAL_AMOUNT) AS TOTAL_SPENT
  FROM ORDERS GROUP BY CUSTOMER_ID
),
HIGH_VALUE_CUSTOMERS AS (
  SELECT CUSTOMER_ID FROM CUSTOMER_STATS WHERE TOTAL_SPENT > 5000
)
SELECT C.FIRST_NAME, CS.TOTAL_SPENT
FROM CUSTOMERS C
JOIN CUSTOMER_STATS CS ON C.CUSTOMER_ID = CS.CUSTOMER_ID
WHERE C.CUSTOMER_ID IN (SELECT CUSTOMER_ID FROM HIGH_VALUE_CUSTOMERS);`,
        },
        {
          command: 'Hierarchical Queries',
          description: 'Query hierarchical data',
          usage: 'CONNECT BY clause',
          example: `-- Hierarchical query
SELECT 
  LEVEL,
  EMPLOYEE_ID,
  MANAGER_ID,
  FIRST_NAME,
  SYS_CONNECT_BY_PATH(FIRST_NAME, ' -> ') AS PATH
FROM EMPLOYEES
START WITH MANAGER_ID IS NULL
CONNECT BY PRIOR EMPLOYEE_ID = MANAGER_ID;

-- Find root and leaf nodes
SELECT 
  EMPLOYEE_ID,
  FIRST_NAME,
  CONNECT_BY_IS_ROOT AS IS_ROOT,
  CONNECT_BY_IS_LEAF AS IS_LEAF
FROM EMPLOYEES
START WITH MANAGER_ID IS NULL
CONNECT BY PRIOR EMPLOYEE_ID = MANAGER_ID;`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'HANA Advanced Data Types',
      commands: [
        {
          command: 'LOB Data Types',
          description: 'Large object data types',
          usage: 'BLOB and CLOB types',
          example: `-- Create table with LOB columns
CREATE TABLE DOCUMENTS (
  DOC_ID INTEGER PRIMARY KEY,
  DOC_NAME VARCHAR(100),
  DOC_CONTENT CLOB,
  DOC_FILE BLOB,
  CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert LOB data
INSERT INTO DOCUMENTS (DOC_ID, DOC_NAME, DOC_CONTENT)
VALUES (1, 'Sample Doc', 'This is a large text content...');

-- Read LOB data
SELECT DOC_ID, DOC_NAME, SUBSTRING(DOC_CONTENT, 1, 100) AS PREVIEW
FROM DOCUMENTS;`,
        },
        {
          command: 'Array Data Types',
          description: 'Array data type usage',
          usage: 'ARRAY type operations',
          example: `-- Create table with array
CREATE TABLE PRODUCTS (
  PRODUCT_ID INTEGER PRIMARY KEY,
  PRODUCT_NAME VARCHAR(100),
  TAGS ARRAY(VARCHAR(50)),
  PRICE DECIMAL(10,2)
);

-- Insert array data
INSERT INTO PRODUCTS (PRODUCT_ID, PRODUCT_NAME, TAGS, PRICE)
VALUES (1, 'Laptop', ARRAY('electronics', 'computer', 'portable'), 999.99);

-- Query array data
SELECT PRODUCT_NAME, TAGS FROM PRODUCTS;
SELECT PRODUCT_NAME FROM PRODUCTS WHERE 'electronics' IN TAGS;

-- Array functions
SELECT CARDINALITY(TAGS) AS TAG_COUNT FROM PRODUCTS;`,
        },
        {
          command: 'JSON Data Type',
          description: 'JSON data type usage',
          usage: 'JSON operations',
          example: `-- Create table with JSON
CREATE TABLE USER_PROFILES (
  USER_ID INTEGER PRIMARY KEY,
  PROFILE_DATA JSON,
  CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert JSON data
INSERT INTO USER_PROFILES (USER_ID, PROFILE_DATA)
VALUES (1, '{"name": "John", "age": 30, "preferences": {"theme": "dark"}}');

-- Query JSON data
SELECT PROFILE_DATA FROM USER_PROFILES;
SELECT PROFILE_DATA.'name' FROM USER_PROFILES;
SELECT PROFILE_DATA.'preferences'.'theme' FROM USER_PROFILES;

-- JSON functions
SELECT JSON_VALUE(PROFILE_DATA, '$.name') AS NAME FROM USER_PROFILES;`,
        },
        {
          command: 'Spatial Data Types',
          description: 'Spatial data type usage',
          usage: 'ST_GEOMETRY operations',
          example: `-- Create table with spatial data
CREATE TABLE LOCATIONS (
  LOCATION_ID INTEGER PRIMARY KEY,
  LOCATION_NAME VARCHAR(100),
  COORDINATES ST_GEOMETRY(4326)
);

-- Insert spatial data
INSERT INTO LOCATIONS (LOCATION_ID, LOCATION_NAME, COORDINATES)
VALUES (1, 'Office', NEW ST_POINT('POINT(-122.4194 37.7749)'));

-- Query spatial data
SELECT LOCATION_NAME, COORDINATES.ST_AsText() FROM LOCATIONS;

-- Spatial functions
SELECT LOCATION_NAME 
FROM LOCATIONS 
WHERE COORDINATES.ST_Distance(
  NEW ST_POINT('POINT(-122.4194 37.7749)')
) < 1000;`,
        },
        {
          command: 'Text Data Types',
          description: 'Full-text search data types',
          usage: 'TEXT search operations',
          example: `-- Create table with text data
CREATE TABLE ARTICLES (
  ARTICLE_ID INTEGER PRIMARY KEY,
  TITLE VARCHAR(200),
  CONTENT TEXT,
  CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create text index
CREATE FULLTEXT INDEX IDX_ARTICLES_CONTENT 
ON ARTICLES (CONTENT) 
CONFIGURATION 'LINGUISTIC_ANALYSIS';

-- Full-text search
SELECT ARTICLE_ID, TITLE, SCORE() AS RELEVANCE
FROM ARTICLES
WHERE CONTAINS(CONTENT, 'database AND performance', FUZZY(0.8))
ORDER BY RELEVANCE DESC;`,
        },
      ],
    },
    {
      title: 'HANA Stored Procedures',
      commands: [
        {
          command: 'Create Basic Procedure',
          description: 'Create a simple stored procedure',
          usage: 'CREATE PROCEDURE statement',
          example: `CREATE PROCEDURE GET_CUSTOMER_ORDERS (
  IN P_CUSTOMER_ID INTEGER,
  OUT P_ORDER_COUNT INTEGER,
  OUT P_TOTAL_AMOUNT DECIMAL(10,2)
)
LANGUAGE SQLSCRIPT
AS
BEGIN
  SELECT 
    COUNT(*),
    COALESCE(SUM(TOTAL_AMOUNT), 0)
  INTO 
    P_ORDER_COUNT, 
    P_TOTAL_AMOUNT
  FROM ORDERS 
  WHERE CUSTOMER_ID = P_CUSTOMER_ID;
END;`,
        },
        {
          command: 'Call Procedure',
          description: 'Execute stored procedure',
          usage: 'CALL statement',
          example: `-- Call procedure with variables
CALL GET_CUSTOMER_ORDERS(123, ?, ?);

-- Call procedure and capture results
DECLARE v_order_count INTEGER;
DECLARE v_total_amount DECIMAL(10,2);
CALL GET_CUSTOMER_ORDERS(123, v_order_count, v_total_amount);
SELECT v_order_count, v_total_amount FROM DUMMY;`,
        },
        {
          command: 'Procedure with Tables',
          description: 'Procedure returning table data',
          usage: 'TABLE TYPE and RETURN',
          example: `-- Create table type
CREATE TYPE TT_ORDER_DETAILS AS TABLE (
  ORDER_ID BIGINT,
  ORDER_DATE DATE,
  TOTAL_AMOUNT DECIMAL(10,2),
  STATUS VARCHAR(20)
);

-- Create procedure returning table
CREATE PROCEDURE GET_CUSTOMER_ORDERS_TABLE (
  IN P_CUSTOMER_ID INTEGER,
  OUT P_ORDERS TT_ORDER_DETAILS
)
LANGUAGE SQLSCRIPT
AS
BEGIN
  P_ORDERS = SELECT 
    ORDER_ID, 
    ORDER_DATE, 
    TOTAL_AMOUNT, 
    STATUS
  FROM ORDERS 
  WHERE CUSTOMER_ID = P_CUSTOMER_ID;
END;`,
        },
        {
          command: 'Procedure with Exception Handling',
          description: 'Handle errors in procedures',
          usage: 'DECLARE EXIT HANDLER',
          example: `CREATE PROCEDURE UPDATE_ORDER_AMOUNT (
  IN P_ORDER_ID BIGINT,
  IN P_NEW_AMOUNT DECIMAL(10,2),
  OUT P_SUCCESS BOOLEAN
)
LANGUAGE SQLSCRIPT
AS
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    P_SUCCESS := FALSE;
  END;
  
  UPDATE ORDERS 
  SET TOTAL_AMOUNT = P_NEW_AMOUNT 
  WHERE ORDER_ID = P_ORDER_ID;
  
  P_SUCCESS := TRUE;
END;`,
        },
        {
          command: 'Procedure with Cursors',
          description: 'Use cursors in procedures',
          usage: 'CURSOR operations',
          example: `CREATE PROCEDURE PROCESS_LARGE_ORDERS ()
LANGUAGE SQLSCRIPT
AS
BEGIN
  DECLARE v_order_id BIGINT;
  DECLARE v_amount DECIMAL(10,2);
  DECLARE cursor_orders CURSOR FOR 
    SELECT ORDER_ID, TOTAL_AMOUNT 
    FROM ORDERS 
    WHERE TOTAL_AMOUNT > 1000;
  
  FOR cur_row AS cursor_orders DO
    v_order_id := cur_row.ORDER_ID;
    v_amount := cur_row.TOTAL_AMOUNT;
    
    -- Process each large order
    UPDATE ORDERS 
    SET STATUS = 'PRIORITY' 
    WHERE ORDER_ID = v_order_id;
  END FOR;
END;`,
        },
        {
          command: 'Drop Procedure',
          description: 'Delete stored procedure',
          usage: 'DROP PROCEDURE statement',
          example: `DROP PROCEDURE GET_CUSTOMER_ORDERS;
DROP PROCEDURE GET_CUSTOMER_ORDERS_TABLE;`,
        },
      ],
    },
    {
      title: 'HANA Functions',
      commands: [
        {
          command: 'Create Scalar Function',
          description: 'Create scalar function',
          usage: 'CREATE FUNCTION statement',
          example: `CREATE FUNCTION CALCULATE_DISCOUNT (
  IN P_AMOUNT DECIMAL(10,2),
  IN P_RATE DECIMAL(5,2)
) 
RETURNS DECIMAL(10,2)
LANGUAGE SQLSCRIPT
AS
BEGIN
  RETURN P_AMOUNT * (P_RATE / 100);
END;`,
        },
        {
          command: 'Use Scalar Function',
          description: 'Use scalar function in queries',
          usage: 'Function calls in SQL',
          example: `-- Use function in SELECT
SELECT 
  ORDER_ID,
  TOTAL_AMOUNT,
  CALCULATE_DISCOUNT(TOTAL_AMOUNT, 10) AS DISCOUNT_AMOUNT,
  TOTAL_AMOUNT - CALCULATE_DISCOUNT(TOTAL_AMOUNT, 10) AS FINAL_AMOUNT
FROM ORDERS;

-- Use function in WHERE clause
SELECT * FROM ORDERS 
WHERE CALCULATE_DISCOUNT(TOTAL_AMOUNT, 5) > 100;`,
        },
        {
          command: 'Create Table Function',
          description: 'Create table-valued function',
          usage: 'TABLE FUNCTION',
          example: `CREATE FUNCTION GET_ORDERS_BY_STATUS (
  IN P_STATUS VARCHAR(20)
)
RETURNS TABLE (
  ORDER_ID BIGINT,
  CUSTOMER_ID INTEGER,
  ORDER_DATE DATE,
  TOTAL_AMOUNT DECIMAL(10,2)
)
LANGUAGE SQLSCRIPT
AS
BEGIN
  RETURN SELECT 
    ORDER_ID, 
    CUSTOMER_ID, 
    ORDER_DATE, 
    TOTAL_AMOUNT
  FROM ORDERS 
  WHERE STATUS = P_STATUS;
END;`,
        },
        {
          command: 'Use Table Function',
          description: 'Use table-valued function',
          usage: 'Table function in queries',
          example: `-- Use table function
SELECT * FROM GET_ORDERS_BY_STATUS('SHIPPED');

-- Join with table function
SELECT C.FIRST_NAME, O.ORDER_ID, O.TOTAL_AMOUNT
FROM CUSTOMERS C
JOIN GET_ORDERS_BY_STATUS('PENDING') O ON C.CUSTOMER_ID = O.CUSTOMER_ID;`,
        },
        {
          command: 'Drop Function',
          description: 'Delete function',
          usage: 'DROP FUNCTION statement',
          example: `DROP FUNCTION CALCULATE_DISCOUNT;
DROP FUNCTION GET_ORDERS_BY_STATUS;`,
        },
      ],
    },
    {
      title: 'HANA Triggers',
      commands: [
        {
          command: 'Create Trigger',
          description: 'Create database trigger',
          usage: 'CREATE TRIGGER statement',
          example: `CREATE TRIGGER TRG_ORDER_AUDIT
BEFORE UPDATE ON ORDERS
FOR EACH ROW
BEGIN
  INSERT INTO ORDER_AUDIT (
    ORDER_ID,
    OLD_STATUS,
    NEW_STATUS,
    CHANGED_BY,
    CHANGED_AT
  ) VALUES (
    :OLD.ORDER_ID,
    :OLD.STATUS,
    :NEW.STATUS,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  );
END;`,
        },
        {
          command: 'Create Trigger with Condition',
          description: 'Conditional trigger',
          usage: 'WHEN clause in trigger',
          example: `CREATE TRIGGER TRG_ORDER_AMOUNT_LOG
AFTER UPDATE ON ORDERS
FOR EACH ROW
WHEN NEW.TOTAL_AMOUNT <> OLD.TOTAL_AMOUNT
BEGIN
  INSERT INTO AMOUNT_CHANGE_LOG (
    ORDER_ID,
    OLD_AMOUNT,
    NEW_AMOUNT,
    CHANGED_AT
  ) VALUES (
    :OLD.ORDER_ID,
    :OLD.TOTAL_AMOUNT,
    :NEW.TOTAL_AMOUNT,
    CURRENT_TIMESTAMP
  );
END;`,
        },
        {
          command: 'Disable Trigger',
          description: 'Disable trigger temporarily',
          usage: 'ALTER TRIGGER statement',
          example: `-- Disable trigger
ALTER TRIGGER TRG_ORDER_AUDIT DISABLE;

-- Enable trigger
ALTER TRIGGER TRG_ORDER_AUDIT ENABLE;`,
        },
        {
          command: 'Drop Trigger',
          description: 'Delete trigger',
          usage: 'DROP TRIGGER statement',
          example: `DROP TRIGGER TRG_ORDER_AUDIT;
DROP TRIGGER TRG_ORDER_AMOUNT_LOG;`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'HANA Performance Optimization',
      commands: [
        {
          command: 'Create Index',
          description: 'Create performance indexes',
          usage: 'CREATE INDEX statement',
          example: `-- Create single column index
CREATE INDEX IDX_CUSTOMERS_EMAIL ON CUSTOMERS(EMAIL);

-- Create composite index
CREATE INDEX IDX_ORDERS_CUSTOMER_DATE ON ORDERS(CUSTOMER_ID, ORDER_DATE);

-- Create unique index
CREATE UNIQUE INDEX IDX_CUSTOMERS_EMAIL_UNIQUE ON CUSTOMERS(EMAIL);

-- Create functional index
CREATE INDEX IDX_CUSTOMERS_UPPER_NAME ON CUSTOMERS(UPPER(FIRST_NAME));`,
        },
        {
          command: 'Analyze Query Plan',
          description: 'Analyze query execution plan',
          usage: 'EXPLAIN PLAN statement',
          example: `-- Explain query plan
EXPLAIN PLAN FOR 
SELECT * FROM ORDERS 
WHERE CUSTOMER_ID = 123 AND ORDER_DATE > '2024-01-01';

-- View execution plan
SELECT * FROM EXPLAIN_PLAN_TABLE 
WHERE STATEMENT_ID = (SELECT MAX(STATEMENT_ID) FROM EXPLAIN_PLAN_TABLE);

-- Visualize plan (in HANA Studio)
-- Right-click query -> Explain Plan`,
        },
        {
          command: 'Performance Monitoring',
          description: 'Monitor database performance',
          usage: 'System monitoring views',
          example: `-- Monitor expensive statements
SELECT * FROM M_EXPENSIVE_STATEMENTS 
ORDER BY EXECUTION_TIME DESC LIMIT 10;

-- Monitor memory usage
SELECT * FROM M_MEMORY_USAGE 
ORDER BY USED_SIZE DESC;

-- Monitor lock waits
SELECT * FROM M_LOCKS 
WHERE BLOCKED = 'TRUE';

-- Monitor transactions
SELECT * FROM M_TRANSACTIONS 
WHERE STATE = 'RUNNING';`,
        },
        {
          command: 'Table Partitioning',
          description: 'Partition large tables',
          usage: 'PARTITION BY clause',
          example: `-- Create partitioned table
CREATE TABLE LARGE_ORDERS (
  ORDER_ID BIGINT,
  ORDER_DATE DATE,
  CUSTOMER_ID INTEGER,
  TOTAL_AMOUNT DECIMAL(10,2)
)
PARTITION BY RANGE (ORDER_DATE) (
  PARTITION P2023 VALUES LESS THAN ('2024-01-01'),
  PARTITION P2024 VALUES LESS THAN ('2025-01-01'),
  PARTITION PFUTURE VALUES LESS THAN (MAXVALUE)
);

-- Create hash partitioned table
CREATE TABLE CUSTOMER_DATA (
  CUSTOMER_ID INTEGER,
  CUSTOMER_NAME VARCHAR(100),
  REGION VARCHAR(50)
)
PARTITION BY HASH (CUSTOMER_ID) PARTITIONS 8;`,
        },
        {
          command: 'Result Cache',
          description: 'Use result cache for performance',
          usage: 'RESULT_CACHE hint',
          example: `-- Query with result cache
SELECT /* RESULT_CACHE */ 
  CUSTOMER_ID, COUNT(*), SUM(TOTAL_AMOUNT)
FROM ORDERS 
GROUP BY CUSTOMER_ID;

-- Bypass result cache
SELECT /* NO_RESULT_CACHE */ 
  * FROM ORDERS 
WHERE ORDER_DATE = CURRENT_DATE;`,
        },
      ],
    },
    {
      title: 'HANA Graph Engine',
      commands: [
        {
          command: 'Create Graph Workspace',
          description: 'Create graph workspace',
          usage: 'CREATE GRAPH WORKSPACE',
          example: `-- Create vertex table
CREATE TABLE PERSONS (
  PERSON_ID INTEGER PRIMARY KEY,
  NAME VARCHAR(100),
  AGE INTEGER
);

-- Create edge table
CREATE TABLE FRIENDSHIPS (
  FRIENDSHIP_ID INTEGER PRIMARY KEY,
  PERSON_FROM INTEGER,
  PERSON_TO INTEGER,
  FRIEND_SINCE DATE
);

-- Create graph workspace
CREATE GRAPH WORKSPACE SOCIAL_GRAPH
  EDGE TABLE FRIENDSHIPS
    SOURCE COLUMN PERSON_FROM
    TARGET COLUMN PERSON_TO
    KEY COLUMN FRIENDSHIP_ID
  VERTEX TABLE PERSONS
    KEY COLUMN PERSON_ID;`,
        },
        {
          command: 'Graph Queries',
          description: 'Query graph data',
          usage: 'Graph SQL functions',
          example: `-- Find shortest path
SELECT PATH FROM GRAPH_WORKSPACE SOCIAL_GRAPH
  MATCH (a:PERSONS) -[e:FRIENDSHIPS]-> (b:PERSONS)
  WHERE a.NAME = 'Alice' AND b.NAME = 'David';

-- Find neighbors
SELECT * FROM GRAPH_WORKSPACE SOCIAL_GRAPH
  MATCH (v:PERSONS) -[e:FRIENDSHIPS]-> (n:PERSONS)
  WHERE v.NAME = 'Alice';

-- Find connected components
SELECT * FROM GRAPH_WORKSPACE SOCIAL_GRAPH
  MATCH (v:PERSONS) -[*1..3]-> (n:PERSONS)
  WHERE v.NAME = 'Alice';`,
        },
        {
          command: 'Graph Algorithms',
          description: 'Use graph algorithms',
          usage: 'Graph built-in functions',
          example: `-- Calculate PageRank
CALL SYS.AFLLANG_WRAPPER_PROCEDURE('APEX_CORE', 'PAGE_RANK', 
  'SOCIAL_GRAPH', ?, ?, ?);

-- Find communities
CALL SYS.AFLLANG_WRAPPER_PROCEDURE('APEX_CORE', 'LOUVAIN_COMMUNITY', 
  'SOCIAL_GRAPH', ?, ?, ?);

-- Calculate centrality
CALL SYS.AFLLANG_WRAPPER_PROCEDURE('APEX_CORE', 'DEGREE_CENTRALITY', 
  'SOCIAL_GRAPH', ?, ?, ?);`,
        },
      ],
    },
    {
      title: 'HANA Predictive Analytics',
      commands: [
        {
          command: 'PAL Functions',
          description: 'Use Predictive Analysis Library',
          usage: 'PAL procedures',
          example: `-- Enable PAL
CALL SYSTEM.AFL_WRAPPER_GENERATOR ('PAL_WRAPPER', 'AFLPAL', '');

-- Linear regression
CALL PAL_WRAPPER('LINEAR_REGRESSION', 
  DATA_TBL, PARAM_TBL, RESULT_TBL);

-- K-means clustering
CALL PAL_WRAPPER('KMEANS', 
  DATA_TBL, PARAM_TBL, RESULT_TBL);

-- Time series forecasting
CALL PAL_WRAPPER('ARIMA', 
  DATA_TBL, PARAM_TBL, RESULT_TBL);`,
        },
        {
          command: 'Predictive Functions',
          description: 'Built-in predictive functions',
          usage: 'Predictive SQL functions',
          example: `-- Moving average
SELECT 
  ORDER_DATE,
  TOTAL_AMOUNT,
  AVG(TOTAL_AMOUNT) OVER (
    ORDER BY ORDER_DATE 
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS MOVING_AVG_7_DAYS
FROM ORDERS;

-- Linear regression
SELECT REGR_SLOPE(TOTAL_AMOUNT, ORDER_ID) 
FROM ORDERS;

-- Correlation
SELECT CORR(TOTAL_AMOUNT, QUANTITY) 
FROM ORDER_ITEMS;`,
        },
      ],
    },
    {
      title: 'HANA Security',
      commands: [
        {
          command: 'Create User',
          description: 'Create database user',
          usage: 'CREATE USER statement',
          example: `-- Create user
CREATE USER APP_USER PASSWORD "SecurePassword123";

-- Create user with restrictions
CREATE USER REPORT_USER PASSWORD "ReportPass123"
  NO FORCE_FIRST_PASSWORD_CHANGE
  DISABLE PASSWORD LIFETIME
  MAXIMUM_IDLE_TIME 3600
  MAXIMUM_CONCURRENT_SESSIONS 5;`,
        },
        {
          command: 'Grant Privileges',
          description: 'Grant user privileges',
          usage: 'GRANT statement',
          example: `-- Grant schema privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA MY_SCHEMA TO APP_USER;

-- Grant table privileges
GRANT SELECT ON CUSTOMERS TO REPORT_USER;
GRANT ALL PRIVILEGES ON ORDERS TO APP_USER;

-- Grant procedure privileges
GRANT EXECUTE ON GET_CUSTOMER_ORDERS TO REPORT_USER;

-- Grant role privileges
GRANT ROLE MODELING TO APP_USER;
GRANT ROLE CONTENT_ADMIN TO ADMIN_USER;`,
        },
        {
          command: 'Create Role',
          description: 'Create and manage roles',
          usage: 'CREATE ROLE statement',
          example: `-- Create role
CREATE ROLE DATA_ANALYST;

-- Grant privileges to role
GRANT SELECT ON SCHEMA MY_SCHEMA TO DATA_ANALYST;
GRANT EXECUTE ON PROCEDURE GET_CUSTOMER_ORDERS TO DATA_ANALYST;

-- Grant role to user
GRANT DATA_ANALYST TO ANALYST_USER;

-- Create role with hierarchy
CREATE ROLE SENIOR_ANALYST INHERIT FROM DATA_ANALYST;
GRANT DELETE ON ORDERS TO SENIOR_ANALYST;`,
        },
        {
          command: 'Row Level Security',
          description: 'Implement row-level security',
          usage: 'ANALYTIC PRIVILEGE',
          example: `-- Create analytic privilege
CREATE ANALYTIC PRIVILEGE AP_CUSTOMER_DATA
  ON CUSTOMERS
  WHERE CUSTOMER_ID = SESSION_USER;

-- Grant analytic privilege
GRANT AP_CUSTOMER_DATA TO SALES_USER;

-- Test row-level security
-- User will only see their own customer data
SELECT * FROM CUSTOMERS;`,
        },
        {
          command: 'Data Masking',
          description: 'Mask sensitive data',
          usage: 'MASKING RULE',
          example: `-- Create masking rule
CREATE MASKING RULE MR_EMAIL_MASK
  ON CUSTOMERS.EMAIL
  WITH ('XXXX@XXXX.COM')
  WHERE SESSION_USER != 'ADMIN';

-- Apply masking rule
ALTER TABLE CUSTOMERS ADD MASKING RULE MR_EMAIL_MASK;

-- Test masking
-- Non-admin users will see masked email addresses
SELECT EMAIL FROM CUSTOMERS;`,
        },
      ],
    },
    {
      title: 'HANA Backup and Recovery',
      commands: [
        {
          command: 'Database Backup',
          description: 'Create database backup',
          usage: 'BACKUP command',
          example: `-- Complete backup
BACKUP DATA USING FILE ('/backup/complete_backup');

-- Incremental backup
BACKUP DATA INCREMENTAL USING FILE ('/backup/incremental_backup');

-- Differential backup
BACKUP DATA DIFFERENTIAL USING FILE ('/backup/differential_backup');

-- Backup specific tables
BACKUP DATA FOR TABLE CUSTOMERS, ORDERS 
  USING FILE ('/backup/tables_backup');`,
        },
        {
          command: 'Schedule Backup',
          description: 'Schedule automatic backups',
          usage: 'Backup scheduler',
          example: `-- Create backup schedule
CREATE SCHEDULE DAILY_BACKUP
  START TIME '02:00:00'
  RECURRING EVERY 1 DAY
  PRIORITY 1;

-- Assign backup to schedule
ALTER SCHEDULE DAILY_BACKUP
  ADD BACKUP USING FILE ('/backup/daily_backup');

-- Activate schedule
ALTER SCHEDULE DAILY_BACKUP ACTIVE;`,
        },
        {
          command: 'Database Recovery',
          description: 'Recover database from backup',
          usage: 'RECOVER command',
          example: `-- Recover from complete backup
RECOVER DATA USING FILE ('/backup/complete_backup') 
  CLEAR LOG;

-- Recover to specific time
RECOVER DATA USING FILE ('/backup/complete_backup') 
  UNTIL TIMESTAMP '2024-01-01 12:00:00';

-- Recover specific tables
RECOVER DATA FOR TABLE CUSTOMERS 
  USING FILE ('/backup/tables_backup');`,
        },
        {
          command: 'Point-in-Time Recovery',
          description: 'Recover to specific point in time',
          usage: 'Time-based recovery',
          example: `-- Recover to specific timestamp
RECOVER DATA 
  USING BACKUP_ID '20240101_020000'
  UNTIL TIMESTAMP '2024-01-01 15:30:00'
  CLEAR LOG;

-- Recover using log position
RECOVER DATA 
  USING BACKUP_ID '20240101_020000'
  UNTIL LOG POSITION 12345678
  CLEAR LOG;`,
        },
      ],
    },
    {
      title: 'HANA Monitoring and Administration',
      commands: [
        {
          command: 'System Monitoring',
          description: 'Monitor system health',
          usage: 'System views',
          example: `-- Check system status
SELECT * FROM M_SYSTEM_OVERVIEW;

-- Monitor memory usage
SELECT HOST, USAGE_TYPE, USED_SIZE, TOTAL_SIZE
FROM M_MEMORY_USAGE
ORDER BY USED_SIZE DESC;

-- Monitor CPU usage
SELECT HOST, CPU_USAGE, CPU_IDLE
FROM M_HOST_RESOURCE_UTILIZATION;

-- Check disk usage
SELECT HOST, PATH, TOTAL_SIZE, USED_SIZE, FREE_SIZE
FROM M_DISKS;`,
        },
        {
          command: 'Performance Monitoring',
          description: 'Monitor performance metrics',
          usage: 'Performance views',
          example: `-- Monitor expensive statements
SELECT * FROM M_EXPENSIVE_STATEMENTS 
ORDER BY EXECUTION_TIME DESC LIMIT 10;

-- Monitor lock waits
SELECT * FROM M_LOCKS 
WHERE BLOCKED = 'TRUE';

-- Monitor transactions
SELECT TRANSACTION_ID, USER_NAME, START_TIME, STATE
FROM M_TRANSACTIONS
WHERE STATE = 'RUNNING';

-- Monitor connections
SELECT * FROM M_CONNECTIONS 
WHERE CONNECTION_STATUS = 'ACTIVE';`,
        },
        {
          command: 'Alert Configuration',
          description: 'Configure database alerts',
          usage: 'Alert configuration',
          example: `-- Create alert
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
  SET ('alerting', 'enable') = 'true';

-- Configure alert threshold
ALTER SYSTEM ALTER CONFIGURATION ('global.ini', 'SYSTEM')
  SET ('alerting', 'memory_usage_threshold') = '90';

-- Check alerts
SELECT * FROM M_ALERTS 
WHERE STATE = 'ACTIVE';`,
        },
      ],
    },
    {
      title: 'HANA Integration',
      commands: [
        {
          command: 'XS Advanced Integration',
          description: 'Integrate with XS Advanced',
          usage: 'XS Advanced services',
          example: `-- Create XS Classic service
CREATE SCHEMA "MY_XS_SCHEMA";
CREATE SERVICE "my_service.xsjs" 
  AS 'var output = "Hello from XS"; $.response.setBody(output);';

-- Create XS OData service
CREATE SERVICE "my_service.xsodata"
  AS 
    "service {
      \"MY_SCHEMA.CUSTOMERS\" as \"Customers\" 
        key (\"CUSTOMER_ID\");
    }";`,
        },
        {
          command: 'SDI Integration',
          description: 'Smart Data Integration',
          usage: 'SDI adapters',
          example: `-- Create remote source
CREATE REMOTE SOURCE "ERP_SYSTEM"
  ADAPTER "ODBC"
  CONFIGURATION 'DSN=ERP_DSN;UID=user;PWD=password';

-- Create virtual table
CREATE VIRTUAL TABLE "ERP_CUSTOMERS"
  AT "ERP_SYSTEM"."dbo"."CUSTOMERS";

-- Query virtual table
SELECT * FROM "ERP_CUSTOMERS";`,
        },
        {
          command: 'SDA Integration',
          description: 'Smart Data Access',
          usage: 'SDA remote sources',
          example: `-- Create SDA remote source
CREATE REMOTE SOURCE "ORACLE_DB"
  ADAPTER "OracleODBC"
  CONFIGURATION 'server=oracle_host;port=1521;sid=ORCL';

-- Create virtual table
CREATE VIRTUAL TABLE "ORACLE_PRODUCTS"
  AT "ORACLE_DB"."PRODUCTS";

-- Federated query
SELECT C.CUSTOMER_NAME, P.PRODUCT_NAME
FROM CUSTOMERS C
JOIN "ORACLE_PRODUCTS" P ON C.PRODUCT_ID = P.PRODUCT_ID;`,
        },
      ],
    },
    {
      title: 'HANA Best Practices',
      commands: [
        {
          command: 'Schema Design Best Practices',
          description: 'Optimal schema design patterns',
          usage: 'Design guidelines',
          example: `Schema Design Best Practices:
1. Use appropriate data types to optimize storage
2. Implement proper primary key strategies
3. Use foreign keys for referential integrity
4. Partition large tables by date or hash
5. Use compression for historical data
6. Design for query patterns
7. Implement proper indexing strategy
8. Consider column store vs row store`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize performance',
          usage: 'Performance guidelines',
          example: `Performance Best Practices:
1. Use appropriate indexes for query patterns
2. Avoid SELECT * in production queries
3. Use parameterized queries
4. Implement proper transaction management
5. Monitor and optimize expensive statements
6. Use result cache for frequently accessed data
7. Optimize join strategies
8. Use partitioning for large tables`,
        },
        {
          command: 'Security Best Practices',
          description: 'Security guidelines',
          usage: 'Security recommendations',
          example: `Security Best Practices:
1. Implement principle of least privilege
2. Use row-level security for sensitive data
3. Implement data masking for PII
4. Regular security audits and reviews
5. Use strong password policies
6. Monitor user activities
7. Implement network encryption
8. Regular backup and recovery testing`,
        },
      ],
    },
    {
      title: 'HANA Troubleshooting',
      commands: [
        {
          command: 'Common Issues',
          description: 'Diagnose common problems',
          usage: 'Troubleshooting guide',
          example: `Common Issues:
1. High memory usage
   - Check M_MEMORY_USAGE view
   - Identify large tables and indexes
   - Implement data archiving

2. Slow query performance
   - Check execution plan with EXPLAIN
   - Analyze M_EXPENSIVE_STATEMENTS
   - Optimize indexes and queries

3. Lock contention
   - Monitor M_LOCKS view
   - Identify long-running transactions
   - Optimize transaction design

4. Connection issues
   - Check M_CONNECTIONS view
   - Verify network connectivity
   - Review pool configuration`,
        },
        {
          command: 'Performance Analysis',
          description: 'Analyze performance issues',
          usage: 'Performance diagnostics',
          example: `-- Analyze slow queries
SELECT * FROM M_EXPENSIVE_STATEMENTS 
WHERE EXECUTION_TIME > 5000
ORDER BY EXECUTION_TIME DESC;

-- Check memory consumption
SELECT * FROM M_MEMORY_USAGE 
WHERE USED_SIZE > 1000000000
ORDER BY USED_SIZE DESC;

-- Monitor disk I/O
SELECT * FROM M_VOLUME_IO_TOTAL_STATISTICS 
ORDER BY TOTAL_READ_TIME DESC;`,
        },
        {
          command: 'Recovery Procedures',
          description: 'Recovery from failures',
          usage: 'Disaster recovery',
          example: `-- Database recovery
RECOVER DATA USING FILE ('/backup/latest_backup');

-- Point-in-time recovery
RECOVER DATA 
  USING BACKUP_ID '20240101_020000'
  UNTIL TIMESTAMP '2024-01-01 12:00:00';

-- Table recovery
RECOVER DATA FOR TABLE CUSTOMERS 
  USING FILE ('/backup/customers_backup');

-- Verify recovery
SELECT * FROM CUSTOMERS LIMIT 10;`,
        },
      ],
    },
  ],
};
