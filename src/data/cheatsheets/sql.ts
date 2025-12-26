import { Database } from 'lucide-react';

export const sqlCheatsheet = {
  id: 'sql',
  name: 'SQL',
  description: 'Master SQL from basics to advanced features (2024)',
  icon: Database,
  colorTheme: 'indigo' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with SQL',
      commands: [
        {
          command: 'SQL Introduction',
          description: 'Understanding SQL and database concepts',
          usage: 'Basic SQL terminology and concepts',
          example: `======== SQL Overview ========
SQL (Structured Query Language) - Standard language for relational databases

======== Database Concepts ========
Database: Organized collection of data
Table: Collection of related data organized in rows and columns
Row: Single record in a table
Column: Field in a table with specific data type
Primary Key: Unique identifier for each row
Foreign Key: Key that links to primary key in another table

======== SQL Categories ========
DDL (Data Definition Language): CREATE, ALTER, DROP
DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
DCL (Data Control Language): GRANT, REVOKE
TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT

======== Database Systems ========
PostgreSQL: Open-source, feature-rich
MySQL: Popular web database
SQL Server: Microsoft enterprise database
Oracle: Enterprise-grade database
SQLite: Lightweight, file-based database`,
        },
        {
          command: 'Basic Data Types',
          description: 'Common SQL data types',
          usage: 'Data type definitions in table creation',
          example: `======== Numeric Types ========
INTEGER or INT        -- Whole numbers (-2,147,483,648 to 2,147,483,647)
BIGINT               -- Large whole numbers
SMALLINT             -- Small whole numbers
DECIMAL(p,s)          -- Fixed-point numbers with precision p and scale s
NUMERIC(p,s)         -- Same as DECIMAL
FLOAT                -- Floating-point numbers
REAL                 -- Single-precision floating-point
DOUBLE PRECISION     -- Double-precision floating-point

======== String Types ========
CHAR(n)              -- Fixed-length string (max n characters)
VARCHAR(n)           -- Variable-length string (max n characters)
TEXT                 -- Variable-length string with no max limit
NCHAR(n)             -- Unicode fixed-length string
NVARCHAR(n)          -- Unicode variable-length string

======== Date/Time Types ========
DATE                 -- Date (YYYY-MM-DD)
TIME                 -- Time (HH:MI:SS)
DATETIME             -- Date and time (YYYY-MM-DD HH:MI:SS)
TIMESTAMP            -- Timestamp with timezone
INTERVAL             -- Time interval

======== Boolean and Other Types ========
BOOLEAN              -- TRUE or FALSE
BIT(n)               -- Fixed-length bit string
BIT VARYING(n)       -- Variable-length bit string
JSON                 -- JSON data
UUID                 -- Universally Unique Identifier
XML                  -- XML data
BLOB                 -- Binary Large Object
CLOB                 -- Character Large Object`,
        },
        {
          command: 'Database Connection',
          description: 'Connect to different database systems',
          usage: 'Connection strings and commands',
          example: `======== Command Line Connections ========
PostgreSQL: psql -h localhost -U username -d database_name
MySQL: mysql -h localhost -u username -p database_name
SQL Server: sqlcmd -S server_name -U username -P password -d database_name
SQLite: sqlite3 database_file.db
Oracle: sqlplus username/password@//hostname:port/service_name

======== Connection String Formats ========
PostgreSQL: postgresql://username:password@localhost:5432/database
MySQL: mysql://username:password@localhost:3306/database
SQL Server: sqlserver://username:password@localhost:1433/database
Oracle: oracle://username:password@hostname:1521/service_name

======== Programming Language Connections ========
Python (psycopg2):
import psycopg2
conn = psycopg2.connect("dbname=test user=postgres")

Node.js (mysql):
const mysql = require('mysql');
const connection = mysql.createConnection({host, user, password, database});

Java (JDBC):
String url = "jdbc:postgresql://localhost:5432/database";
Connection conn = DriverManager.getConnection(url, user, password);`,
        },
        {
          command: 'Creating Tables and Databases',
          description: 'Basic database and table creation',
          usage: 'CREATE DATABASE, CREATE TABLE',
          example: `======== Create Database ========
CREATE DATABASE company_db;
CREATE DATABASE myapp 
WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

======== Create Basic Table ========
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

======== Table with Foreign Key ========
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id)
);

======== Table Constraints ========
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    category VARCHAR(50),
    stock_quantity INTEGER DEFAULT 0,
    UNIQUE(name, category),
    CONSTRAINT positive_stock CHECK (stock_quantity >= 0)
);`,
        },
      ],
    },
    {
      title: 'Basic Data Operations',
      commands: [
        {
          command: 'INSERT Statements',
          description: 'Insert data into tables',
          usage: 'INSERT INTO table VALUES',
          example: `======== Basic INSERT ========
INSERT INTO users (id, first_name, last_name, email, age)
VALUES (1, 'John', 'Doe', 'john.doe@email.com', 25);

======== Insert Multiple Rows ========
INSERT INTO users (id, first_name, last_name, email, age)
VALUES 
    (2, 'Jane', 'Smith', 'jane.smith@email.com', 30),
    (3, 'Bob', 'Johnson', 'bob.johnson@email.com', 35),
    (4, 'Alice', 'Brown', 'alice.brown@email.com', 28);

======== INSERT with Default Values ========
INSERT INTO users (id, first_name, last_name, email)
VALUES (5, 'Charlie', 'Wilson', 'charlie.wilson@email.com');

======== Insert from Another Table ========
INSERT INTO archived_users
SELECT * FROM users WHERE created_at < '2020-01-01';

======== Insert Specific Columns ========
INSERT INTO orders (user_id, order_date, total_amount)
VALUES (1, CURRENT_DATE, 99.99);`,
        },
        {
          command: 'UPDATE Statements',
          description: 'Update existing data',
          usage: 'UPDATE table SET column = value',
          example: `======== Basic UPDATE ========
UPDATE users 
SET age = 26 
WHERE id = 1;

======== Update Multiple Columns ========
UPDATE users 
SET 
    first_name = 'Johnathan',
    last_name = 'Doe-Smith',
    email = 'john.doe.smith@email.com'
WHERE id = 1;

======== Update with Condition ========
UPDATE products 
SET price = price * 1.1 
WHERE category = 'Electronics';

======== Update with JOIN ========
UPDATE orders o
SET total_amount = SUM(p.price * oi.quantity)
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE o.order_id = oi.order_id;

======== Update with Subquery ========
UPDATE users 
SET age = (
    SELECT AVG(age) 
    FROM users 
    WHERE country = 'USA'
)
WHERE country = 'USA' AND age IS NULL;`,
        },
        {
          command: 'DELETE Statements',
          description: 'Delete data from tables',
          usage: 'DELETE FROM table WHERE condition',
          example: `======== Basic DELETE ========
DELETE FROM users 
WHERE id = 1;

======== Delete with Condition ========
DELETE FROM orders 
WHERE order_date < '2020-01-01';

======== Delete with Multiple Conditions ========
DELETE FROM users 
WHERE age < 18 
AND country = 'USA';

======== Delete with Subquery ========
DELETE FROM orders 
WHERE user_id IN (
    SELECT id 
    FROM users 
    WHERE country = 'Antarctica'
);

======== Delete All Data ========
DELETE FROM orders;  -- Removes all rows, keeps table structure
TRUNCATE TABLE orders;  -- Faster, resets identity

======== Delete with JOIN ========
DELETE o 
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE u.country = 'Deleted';`,
        },
        {
          command: 'Basic SELECT Queries',
          description: 'Query data from tables',
          usage: 'SELECT columns FROM table',
          example: `======== Select All Columns ========
SELECT * FROM users;

======== Select Specific Columns ========
SELECT first_name, last_name, email FROM users;

======== Select with Aliases ========
SELECT 
    first_name AS "First Name", 
    last_name AS "Last Name",
    email AS "Email Address"
FROM users;

======== Select Distinct Values ========
SELECT DISTINCT country FROM users;
SELECT DISTINCT category, brand FROM products;

======== Select with Calculations ========
SELECT 
    product_name, 
    price,
    price * 0.1 AS tax,
    price * 1.1 AS total_price
FROM products;

======== Select with Concatenation ========
SELECT 
    first_name || ' ' || last_name AS full_name,
    email
FROM users;

-- MySQL/PostgreSQL concatenation
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM users;`,
        },
      ],
    },
    {
      title: 'Filtering and Sorting',
      commands: [
        {
          command: 'WHERE Clause',
          description: 'Filter query results',
          usage: 'SELECT * FROM table WHERE condition',
          example: `======== Comparison Operators ========
SELECT * FROM users WHERE age > 18;
SELECT * FROM products WHERE price <= 100;
SELECT * FROM orders WHERE status != 'cancelled';

======== BETWEEN Operator ========
SELECT * FROM products WHERE price BETWEEN 10 AND 100;
SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';

======== LIKE Pattern Matching ========
SELECT * FROM users WHERE email LIKE '%@gmail.com';     -- Ends with
SELECT * FROM products WHERE name LIKE 'Laptop%';       -- Starts with
SELECT * FROM users WHERE name LIKE '%son';              -- Ends with
SELECT * FROM products WHERE name LIKE '%phone%';        -- Contains
SELECT * FROM users WHERE name LIKE 'J_hn';              -- Single character

======== IN Operator ========
SELECT * FROM users WHERE country IN ('USA', 'UK', 'Canada');
SELECT * FROM products WHERE category IN ('Electronics', 'Computers');

======== NULL Checks ========
SELECT * FROM users WHERE phone_number IS NULL;
SELECT * FROM orders WHERE shipping_date IS NOT NULL;

======== Multiple Conditions ========
SELECT * FROM users 
WHERE age >= 18 
AND country = 'USA' 
AND (email LIKE '%@gmail.com' OR email LIKE '%@yahoo.com');`,
        },
        {
          command: 'ORDER BY Clause',
          description: 'Sort query results',
          usage: 'ORDER BY column [ASC|DESC]',
          example: `======== Basic Sorting ========
SELECT * FROM users ORDER BY last_name ASC;
SELECT * FROM products ORDER BY price DESC;

======== Sort by Multiple Columns ========
SELECT * FROM users 
ORDER BY country ASC, last_name ASC, first_name ASC;

======== Sort by Expression ========
SELECT * FROM products 
ORDER BY price * discount_percentage DESC;

======== Sort by Calculated Column ========
SELECT 
    product_name,
    price,
    price * 1.1 AS total_price
FROM products 
ORDER BY total_price DESC;

======== Sort with NULL Values ========
SELECT * FROM users 
ORDER BY last_name ASC NULLS LAST;

======== Sort by Position ========
SELECT id, name, price FROM products 
ORDER BY 3 DESC;  -- Sort by third column (price)`,
        },
        {
          command: 'LIMIT and Pagination',
          description: 'Limit number of returned rows',
          usage: 'LIMIT, OFFSET, FETCH',
          example: `======== Basic LIMIT ========
SELECT * FROM users LIMIT 10;

======== LIMIT with OFFSET ========
SELECT * FROM users LIMIT 10 OFFSET 20;

======== Pagination (MySQL/PostgreSQL) ========
-- Page 1 (1-10)
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 0;
-- Page 2 (11-20)
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 10;
-- Page 3 (21-30)
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;

======== SQL Server Pagination ========
SELECT * FROM users 
ORDER BY id 
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;

======== Oracle Pagination ========
SELECT * FROM users 
ORDER BY id 
OFFSET 0 ROWS FETCH FIRST 10 ROWS ONLY;

======== Top N Records ========
-- SQL Server
SELECT TOP 10 * FROM users ORDER BY created_at DESC;

-- PostgreSQL/MySQL
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Aggregate Functions and Grouping',
      commands: [
        {
          command: 'Basic Aggregate Functions',
          description: 'Calculate values across multiple rows',
          usage: 'COUNT, SUM, AVG, MIN, MAX',
          example: `======== COUNT Function ========
SELECT COUNT(*) FROM users;                    -- Total rows
SELECT COUNT(email) FROM users;                -- Non-null emails
SELECT COUNT(DISTINCT country) FROM users;     -- Unique countries

======== SUM Function ========
SELECT SUM(price) FROM products;
SELECT SUM(quantity) FROM order_items WHERE order_id = 1;

======== AVG Function ========
SELECT AVG(price) FROM products;
SELECT AVG(age) FROM users WHERE country = 'USA';

======== MIN and MAX Functions ========
SELECT MIN(price), MAX(price) FROM products;
SELECT MIN(order_date), MAX(order_date) FROM orders;

======== Aggregate with Expressions ========
SELECT 
    COUNT(*) AS total_products,
    SUM(price) AS total_value,
    AVG(price) AS avg_price,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products;

======== Conditional Aggregates ========
SELECT 
    COUNT(*) AS total_orders,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed_orders,
    SUM(CASE WHEN status = 'completed' THEN total_amount END) AS completed_revenue
FROM orders;`,
        },
        {
          command: 'GROUP BY Clause',
          description: 'Group rows with similar values',
          usage: 'GROUP BY column',
          example: `======== Basic GROUP BY ========
SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country;

======== Multiple Column GROUP BY ========
SELECT country, city, COUNT(*) AS user_count
FROM users
GROUP BY country, city
ORDER BY user_count DESC;

======== GROUP BY with Aggregates ========
SELECT 
    category,
    COUNT(*) AS product_count,
    AVG(price) AS avg_price,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products
GROUP BY category;

======== GROUP BY with Expression ========
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS order_count,
    SUM(total_amount) AS monthly_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;

======== GROUP BY with CASE ========
SELECT 
    CASE 
        WHEN price < 10 THEN 'Budget'
        WHEN price < 50 THEN 'Mid-range'
        ELSE 'Premium'
    END AS price_category,
    COUNT(*) AS product_count
FROM products
GROUP BY 
    CASE 
        WHEN price < 10 THEN 'Budget'
        WHEN price < 50 THEN 'Mid-range'
        ELSE 'Premium'
    END;`,
        },
        {
          command: 'HAVING Clause',
          description: 'Filter groups after aggregation',
          usage: 'HAVING condition after GROUP BY',
          example: `======== Basic HAVING ========
SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country
HAVING COUNT(*) > 10;

======== HAVING with Multiple Conditions ========
SELECT 
    category,
    COUNT(*) AS product_count,
    AVG(price) AS avg_price
FROM products
GROUP BY category
HAVING COUNT(*) > 5 AND AVG(price) > 50;

======== HAVING vs WHERE ========
-- WHERE filters rows before grouping
-- HAVING filters groups after aggregation

SELECT country, COUNT(*) AS user_count
FROM users
WHERE age >= 18           -- Filter individuals first
GROUP BY country
HAVING COUNT(*) >= 10;     -- Then filter groups

======== Complex HAVING Conditions ========
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS order_count,
    SUM(total_amount) AS revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
HAVING 
    COUNT(*) > 100 
    OR SUM(total_amount) > 10000;

======== HAVING with Subquery ========
SELECT 
    user_id,
    COUNT(*) AS order_count,
    SUM(total_amount) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total_amount) > (
    SELECT AVG(total_amount) 
    FROM orders
);`,
        },
      ],
    },
    {
      title: 'Advanced SELECT Operations',
      commands: [
        {
          command: 'Joins - INNER JOIN',
          description: 'Combine rows from multiple tables',
          usage: 'INNER JOIN table ON condition',
          example: `======== Basic INNER JOIN ========
SELECT u.first_name, u.last_name, o.order_date
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

======== INNER JOIN with Multiple Tables ========
SELECT 
    u.first_name, 
    u.last_name,
    o.order_date,
    p.product_name
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id;

======== INNER JOIN with WHERE ========
SELECT u.first_name, o.total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.order_date >= '2024-01-01';

======== INNER JOIN with Aggregation ========
SELECT 
    u.first_name,
    u.last_name,
    COUNT(o.order_id) AS order_count,
    SUM(o.total_amount) AS total_spent
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.first_name, u.last_name
HAVING COUNT(o.order_id) > 5;

======== INNER JOIN with Different Conditions ========
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
WHERE e.salary > 50000;`,
        },
        {
          command: 'Outer Joins',
          description: 'Include non-matching rows',
          usage: 'LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN',
          example: `======== LEFT OUTER JOIN ========
SELECT u.first_name, u.last_name, o.order_id
FROM users u
LEFT OUTER JOIN orders o ON u.id = o.user_id;

======== RIGHT OUTER JOIN ========
SELECT u.first_name, u.last_name, o.order_id
FROM users u
RIGHT OUTER JOIN orders o ON u.id = o.user_id;

======== FULL OUTER JOIN ========
SELECT u.first_name, u.last_name, d.department_name
FROM users u
FULL OUTER JOIN departments d ON u.department_id = d.id;

======== LEFT JOIN with Aggregation ========
SELECT 
    u.first_name,
    u.last_name,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.total_amount), 0) AS total_spent
FROM users u
LEFT OUTER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.first_name, u.last_name;

======== Self JOIN ========
SELECT 
    e1.name AS employee,
    e2.name AS manager
FROM employees e1
LEFT OUTER JOIN employees e2 ON e1.manager_id = e2.id;

======== Multiple Outer Joins ========
SELECT 
    u.first_name,
    o.order_id,
    oi.product_id,
    p.product_name
FROM users u
LEFT OUTER JOIN orders o ON u.id = o.user_id
LEFT OUTER JOIN order_items oi ON o.order_id = oi.order_id
LEFT OUTER JOIN products p ON oi.product_id = p.id;`,
        },
        {
          command: 'Cross JOIN and Self JOIN',
          description: 'Special join types',
          usage: 'CROSS JOIN, self-referencing joins',
          example: `======== CROSS JOIN (Cartesian Product) ========
SELECT u.first_name, p.product_name
FROM users u
CROSS JOIN products p;

-- Useful for creating all combinations
SELECT 
    c1.name AS customer1,
    c2.name AS customer2
FROM customers c1
CROSS JOIN customers c2
WHERE c1.id < c2.id;

======== Self JOIN ========
-- Employee-Manager relationship
SELECT 
    e1.name AS employee,
    e1.salary AS employee_salary,
    e2.name AS manager,
    e2.salary AS manager_salary
FROM employees e1
LEFT OUTER JOIN employees e2 ON e1.manager_id = e2.id;

======== Self JOIN for Pairs ========
-- Find duplicate emails
SELECT 
    u1.first_name,
    u1.email,
    u2.first_name AS duplicate_name
FROM users u1
INNER JOIN users u2 ON u1.email = u2.email AND u1.id < u2.id;

======== Self JOIN for Hierarchical Data ========
-- Find all subordinates
SELECT 
    manager.name AS manager_name,
    employee.name AS employee_name
FROM employees manager
INNER JOIN employees employee ON employee.manager_id = manager.id
WHERE manager.name = 'John Smith';

======== CROSS JOIN with Dates ========
-- Generate date series
SELECT 
    DATE '2024-01-01' + (n || ' days')::INTERVAL AS date
FROM generate_series(0, 364) AS n;`,
        },
      ],
    },
    {
      title: 'Subqueries and CTEs',
      commands: [
        {
          command: 'Basic Subqueries',
          description: 'Nested queries within queries',
          usage: 'Subquery in WHERE, FROM, SELECT clauses',
          example: `======== Subquery in WHERE Clause ========
-- Single-row subquery
SELECT * FROM employees 
WHERE salary = (SELECT MAX(salary) FROM employees);

-- Multi-row subquery with IN
SELECT * FROM employees 
WHERE department_id IN (
    SELECT id FROM departments 
    WHERE location = 'New York'
);

-- Subquery with comparison operators
SELECT * FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

======== Subquery in FROM Clause (Derived Table) ========
SELECT dept_name, avg_salary
FROM (
    SELECT 
        d.name AS dept_name,
        AVG(e.salary) AS avg_salary
    FROM employees e
    JOIN departments d ON e.department_id = d.id
    GROUP BY d.name
) AS dept_avg
WHERE avg_salary > 50000;

======== Subquery in SELECT Clause (Scalar Subquery) ========
SELECT 
    name,
    salary,
    (SELECT AVG(salary) FROM employees) AS avg_salary,
    salary - (SELECT AVG(salary) FROM employees) AS difference
FROM employees;

======== Correlated Subquery ========
SELECT 
    name,
    salary,
    (SELECT AVG(salary) 
     FROM employees e2 
     WHERE e2.department_id = e1.department_id) AS dept_avg
FROM employees e1;

======== EXISTS and NOT EXISTS ========
SELECT department_name
FROM departments d
WHERE EXISTS (
    SELECT 1 FROM employees e 
    WHERE e.department_id = d.id
);`,
        },
        {
          command: 'Common Table Expressions (CTE)',
          description: 'Named temporary result sets',
          usage: 'WITH clause for readable queries',
          example: `======== Basic CTE ========
WITH dept_stats AS (
    SELECT 
        department_id,
        COUNT(*) AS employee_count,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT 
    d.name,
    ds.employee_count,
    ds.avg_salary
FROM departments d
JOIN dept_stats ds ON d.id = ds.department_id
WHERE ds.employee_count > 5;

======== Multiple CTEs ========
WITH 
dept_avg AS (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
),
high_paid_depts AS (
    SELECT department_id 
    FROM dept_avg 
    WHERE avg_salary > 60000
)
SELECT 
    e.name,
    e.salary,
    da.avg_salary
FROM employees e
JOIN dept_avg da ON e.department_id = da.department_id
WHERE e.department_id IN (SELECT department_id FROM high_paid_depts);

======== Recursive CTE ========
-- Organization hierarchy
WITH RECURSIVE org_chart AS (
    -- Anchor member
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive member
    SELECT 
        e.id, 
        e.name, 
        e.manager_id, 
        oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;

======== CTE for Data Analysis ========
WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS month,
        SUM(total_amount) AS revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
),
monthly_targets AS (
    SELECT '2024-01-01'::DATE + (n || ' months')::INTERVAL AS month,
        10000 + n * 1000 AS target
    FROM generate_series(0, 11) AS n
)
SELECT 
    ms.month,
    ms.revenue,
    mt.target,
    ms.revenue - mt.target AS variance
FROM monthly_sales ms
JOIN monthly_targets mt ON ms.month = mt.month;`,
        },
        {
          command: 'Advanced Subquery Types',
          description: 'Complex subquery patterns',
          usage: 'ANY, ALL, SOME operators',
          example: `======== ANY and SOME Operators ========
-- ANY (same as SOME)
SELECT * FROM employees 
WHERE salary > ANY (
    SELECT salary FROM employees 
    WHERE department_id = 10
);

-- Equivalent to salary > (SELECT MIN(salary) FROM employees WHERE department_id = 10)

======== ALL Operator ========
SELECT * FROM employees 
WHERE salary > ALL (
    SELECT salary FROM employees 
    WHERE department_id = 10
);

-- Equivalent to salary > (SELECT MAX(salary) FROM employees WHERE department_id = 10)

======== Subquery with JOIN ========
SELECT 
    u.first_name,
    u.last_name,
    latest_order.order_date
FROM users u
LEFT JOIN (
    SELECT 
        user_id,
        MAX(order_date) AS order_date
    FROM orders
    GROUP BY user_id
) AS latest_order ON u.id = latest_order.user_id;

======== Subquery in UPDATE ========
UPDATE employees
SET salary = salary * 1.1
WHERE department_id IN (
    SELECT id 
    FROM departments 
    WHERE location = 'Remote'
);

======== Subquery in INSERT ========
INSERT INTO top_performers (name, salary, department)
SELECT name, salary, department_name
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.salary > (
    SELECT AVG(salary) * 1.5 
    FROM employees
);

======== Nested Subqueries ========
SELECT * FROM employees
WHERE department_id IN (
    SELECT id FROM departments
    WHERE location IN (
        SELECT city FROM branches 
        WHERE country = 'USA'
    )
);`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Window Functions and Analytics',
      commands: [
        {
          command: 'Basic Window Functions',
          description: 'Perform calculations across row sets',
          usage: 'OVER() clause with window functions',
          example: `======== ROW_NUMBER() ========
SELECT 
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;

======== RANK() and DENSE_RANK() ========
SELECT 
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank_num,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_num
FROM employees;

======== LAG() and LEAD() ========
SELECT 
    order_date,
    total_amount,
    LAG(total_amount, 1) OVER (ORDER BY order_date) AS prev_day_amount,
    LEAD(total_amount, 1) OVER (ORDER BY order_date) AS next_day_amount
FROM orders
ORDER BY order_date;

======== FIRST_VALUE() and LAST_VALUE() ========
SELECT 
    name,
    salary,
    FIRST_VALUE(name) OVER (ORDER BY salary DESC 
                           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS highest_earner,
    LAST_VALUE(name) OVER (ORDER BY salary DESC 
                         ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_earner
FROM employees;

======== NTILE() ========
SELECT 
    name,
    salary,
    NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;`,
        },
        {
          command: 'Window Frame Clauses',
          description: 'Define window boundaries for calculations',
          usage: 'ROWS BETWEEN, RANGE BETWEEN',
          example: `======== ROWS BETWEEN ========
SELECT 
    order_date,
    total_amount,
    SUM(total_amount) OVER (
        ORDER BY order_date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_3_day_sum,
    AVG(total_amount) OVER (
        ORDER BY order_date 
        ROWS BETWEEN 4 PRECEDING AND CURRENT ROW
    ) AS moving_5_day_avg
FROM orders
ORDER BY order_date;

======== RANGE BETWEEN ========
SELECT 
    name,
    salary,
    COUNT(*) OVER (
        ORDER BY salary 
        RANGE BETWEEN 1000 PRECEDING AND 1000 FOLLOWING
    ) AS employees_within_1000
FROM employees;

======== Window Frame Options ========
-- ROWS: Physical rows
-- RANGE: Value range
-- GROUPS: Groups with same value

SELECT 
    order_date,
    total_amount,
    SUM(total_amount) OVER (
        ORDER BY order_date 
        ROWS UNBOUNDED PRECEDING
    ) AS cumulative_sum,
    SUM(total_amount) OVER (
        ORDER BY order_date 
        ROWS CURRENT ROW
    ) AS current_day_only
FROM orders;

======== Default Window Frame ========
SELECT 
    department_id,
    name,
    salary,
    AVG(salary) OVER (
        PARTITION BY department_id 
        ORDER BY salary
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS dept_cumulative_avg
FROM employees;`,
        },
        {
          command: 'Advanced Window Functions',
          description: 'Complex analytical calculations',
          usage: 'Window functions with complex partitions',
          example: `======== Window Functions with PARTITION BY ========
SELECT 
    department_id,
    name,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dept_rank,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg,
    salary - AVG(salary) OVER (PARTITION BY department_id) AS diff_from_avg
FROM employees;

======== Percentile Functions ========
SELECT 
    name,
    salary,
    PERCENT_RANK() OVER (ORDER BY salary) AS percent_rank,
    CUME_DIST() OVER (ORDER BY salary) AS cumulative_dist
FROM employees;

======== Moving Averages and Trends ========
SELECT 
    order_date,
    total_amount,
    AVG(total_amount) OVER (
        ORDER BY order_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS 7_day_moving_avg,
    total_amount - AVG(total_amount) OVER (
        ORDER BY order_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS deviation_from_avg
FROM orders
ORDER BY order_date;

======== Gap Analysis ========
SELECT 
    product_id,
    order_date,
    total_amount,
    LAG(order_date, 1) OVER (
        PARTITION BY product_id 
        ORDER BY order_date
    ) AS prev_order_date,
    order_date - LAG(order_date, 1) OVER (
        PARTITION BY product_id 
        ORDER BY order_date
    ) AS days_since_last_order
FROM product_orders
ORDER BY product_id, order_date;

======== Year-over-Year Comparison ========
WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS month,
        SUM(total_amount) AS revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT 
    month,
    revenue,
    LAG(revenue, 12) OVER (ORDER BY month) AS same_month_last_year,
    revenue - LAG(revenue, 12) OVER (ORDER BY month) AS yoy_growth
FROM monthly_sales
ORDER BY month;`,
        },
      ],
    },
    {
      title: 'Set Operations and Advanced Queries',
      commands: [
        {
          command: 'UNION and Set Operations',
          description: 'Combine results from multiple queries',
          usage: 'UNION, INTERSECT, EXCEPT/MINUS',
          example: `======== UNION (remove duplicates) ========
SELECT name, email FROM customers
UNION
SELECT name, email FROM prospects;

======== UNION ALL (include duplicates) ========
SELECT product_id, 'sale' AS type, amount FROM sales
UNION ALL
SELECT product_id, 'return' AS type, amount FROM returns;

======== INTERSECT (common rows) ========
SELECT customer_id FROM orders
WHERE total_amount > 1000
INTERSECT
SELECT customer_id FROM orders
WHERE order_count > 10;

======== EXCEPT / MINUS (difference) ========
-- PostgreSQL/SQL Server: EXCEPT
-- Oracle: MINUS

SELECT product_id FROM electronics
EXCEPT
SELECT product_id FROM discontinued;

======== Set Operations with Ordering ========
SELECT name, 'active' AS status FROM users
UNION
SELECT name, 'inactive' AS status FROM archived_users
ORDER BY name, status;

======== Complex Set Operations ========
-- Customers who bought electronics but not books
SELECT customer_id FROM electronics_buyers
EXCEPT
SELECT customer_id FROM books_buyers

UNION

-- Customers who bought books but not electronics
SELECT customer_id FROM books_buyers
EXCEPT
SELECT customer_id FROM electronics_buyers;`,
        },
        {
          command: 'Conditional Expressions',
          description: 'Conditional logic in SQL',
          usage: 'CASE, COALESCE, NULLIF, GREATEST, LEAST',
          example: `======== CASE Statement ========
SELECT 
    name,
    salary,
    CASE 
        WHEN salary < 30000 THEN 'Low'
        WHEN salary < 60000 THEN 'Medium'
        WHEN salary < 100000 THEN 'High'
        ELSE 'Executive'
    END AS salary_category
FROM employees;

======== CASE in WHERE Clause ========
SELECT * FROM products
WHERE 
    CASE 
        WHEN category = 'Electronics' THEN price < 1000
        WHEN category = 'Books' THEN price < 50
        ELSE price < 100
    END;

======== COALESCE Function ========
SELECT 
    first_name,
    COALESCE(middle_name, '') AS middle_name,
    COALESCE(phone, email, 'No contact') AS primary_contact
FROM users;

======== NULLIF Function ========
SELECT 
    product_name,
    price,
    discount_price,
    NULLIF(price, discount_price) AS effective_price
FROM products;

======== GREATEST and LEAST ========
SELECT 
    product_name,
    price,
    GREATEST(price, discount_price, 10) AS min_price,
    LEAST(price, discount_price, 1000) AS max_price
FROM products;

======== Nested Conditional Expressions ========
SELECT 
    name,
    score,
    CASE 
        WHEN score >= 90 THEN 'A'
        WHEN score >= 80 THEN 'B'
        WHEN score >= 70 THEN 'C'
        ELSE 
            CASE 
                WHEN score >= 60 THEN 'D'
                ELSE 'F'
            END
    END AS grade
FROM students;`,
        },
        {
          command: 'Advanced Pattern Matching',
          description: 'Complex string and pattern operations',
          usage: 'Regular expressions, string functions',
          example: `======== Regular Expressions ========
-- PostgreSQL syntax
SELECT * FROM users
WHERE email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$';

-- Case-insensitive regex
SELECT * FROM products
WHERE name ~* 'laptop';

======== Advanced String Functions ========
SELECT 
    email,
    SUBSTRING(email FROM '@(.*)$') AS domain,
    POSITION('@' IN email) AS at_position,
    LENGTH(email) - POSITION('@' IN email) AS username_length
FROM users;

======== String Aggregation ========
-- PostgreSQL: STRING_AGG
SELECT 
    department_id,
    STRING_AGG(name, ', ' ORDER BY name) AS employee_list
FROM employees
GROUP BY department_id;

-- MySQL: GROUP_CONCAT
SELECT 
    department_id,
    GROUP_CONCAT(name ORDER BY name SEPARATOR ', ') AS employee_list
FROM employees
GROUP BY department_id;

-- SQL Server: STRING_AGG (2017+)
SELECT 
    department_id,
    STRING_AGG(name, ', ') WITHIN GROUP (ORDER BY name) AS employee_list
FROM employees
GROUP BY department_id;

======== Pattern Replacement ========
-- PostgreSQL: REGEXP_REPLACE
SELECT 
    phone_number,
    REGEXP_REPLACE(phone_number, '[^0-9]', '', 'g') AS clean_phone
FROM users;

======== Advanced LIKE Patterns ========
-- Find names with exactly 2 vowels
SELECT * FROM employees
WHERE name ~* '^[^aeiou]*[aeiou][^aeiou]*[aeiou][^aeiou]*$';

-- Find emails from specific domains
SELECT * FROM users
WHERE email LIKE ANY (ARRAY['%@gmail.com', '%@yahoo.com', '%@hotmail.com']);`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Indexing Strategies',
          description: 'Create and optimize database indexes',
          usage: 'CREATE INDEX, covering indexes',
          example: `======== Basic Indexes ========
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_products_category ON products(category);

======== Composite Indexes ========
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);
CREATE INDEX idx_products_category_price ON products(category, price);

======== Unique Indexes ========
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);
CREATE UNIQUE INDEX idx_products_sku ON products(sku);

======== Partial Indexes (PostgreSQL) ========
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';
CREATE INDEX idx_high_value_orders ON orders(id) WHERE total_amount > 1000;

======== Functional Indexes ========
CREATE INDEX idx_users_lower_email ON users(LOWER(email));
CREATE INDEX idx_products_upper_name ON products(UPPER(name));

======== Covering Indexes ========
-- Include additional columns for query optimization
CREATE INDEX idx_orders_covering ON orders(user_id, order_date) 
INCLUDE (total_amount, status);

======== Index Types ========
-- B-Tree (default)
CREATE INDEX idx_btree ON table(column);

-- Hash (PostgreSQL)
CREATE INDEX idx_hash ON table(column) USING HASH;

-- GIN (PostgreSQL for arrays/json)
CREATE INDEX idx_gin ON table USING GIN(json_column);

-- GiST (PostgreSQL for geometric data)
CREATE INDEX idx_gist ON table USING GIST(geometric_column);`,
        },
        {
          command: 'Query Optimization Techniques',
          description: 'Write efficient SQL queries',
          usage: 'EXPLAIN, query rewriting',
          example: `======== Query Execution Plans ========
-- PostgreSQL
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';

-- MySQL
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- SQL Server
SET SHOWPLAN_TEXT ON;
GO
SELECT * FROM users WHERE email = 'test@example.com';

======== Optimization Strategies ========
-- Use specific columns instead of SELECT *
SELECT id, name, email FROM users WHERE active = true;

-- Use EXISTS instead of IN for subqueries
SELECT * FROM orders o
WHERE EXISTS (
    SELECT 1 FROM customers c 
    WHERE c.id = o.customer_id AND c.premium = true
);

-- Use appropriate JOIN types
-- INNER JOIN for matching rows only
-- LEFT JOIN when you need all from left table

-- Avoid functions on indexed columns
-- Bad: WHERE YEAR(order_date) = 2024
-- Good: WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'

======== Query Rewriting Examples ========
-- Before: Slow query with OR
SELECT * FROM products 
WHERE category = 'Electronics' OR brand = 'Apple';

-- After: Use UNION
SELECT * FROM products WHERE category = 'Electronics'
UNION
SELECT * FROM products WHERE brand = 'Apple';

-- Before: Subquery in SELECT
SELECT u.*, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count
FROM users u;

-- After: JOIN with aggregation
SELECT u.*, COALESCE(o.order_count, 0) AS order_count
FROM users u
LEFT JOIN (
    SELECT user_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
) o ON u.id = o.user_id;`,
        },
        {
          command: 'Database Performance Monitoring',
          description: 'Monitor and analyze database performance',
          usage: 'Performance queries and metrics',
          example: `======== Slow Query Analysis ========
-- PostgreSQL: Find slow queries
SELECT query, mean_time, calls, total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

-- MySQL: Slow query log
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';

======== Index Usage ========
-- PostgreSQL: Unused indexes
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0;

-- SQL Server: Index usage stats
SELECT 
    OBJECT_NAME(i.object_id) AS table_name,
    i.name AS index_name,
    s.user_seeks,
    s.user_scans,
    s.user_lookups
FROM sys.indexes i
JOIN sys.dm_db_index_usage_stats s ON i.object_id = s.object_id AND i.index_id = s.index_id;

======== Table Statistics ========
-- PostgreSQL: Table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- MySQL: Table sizes
SELECT 
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS size_mb
FROM information_schema.tables
WHERE table_schema = DATABASE()
ORDER BY size_mb DESC;

======== Connection Monitoring ========
-- PostgreSQL: Active connections
SELECT state, COUNT(*)
FROM pg_stat_activity
GROUP BY state;

-- MySQL: Connection status
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Max_used_connections';`,
        },
      ],
    },
    {
      title: 'Advanced Database Features',
      commands: [
        {
          command: 'Transactions and Concurrency',
          description: 'Manage transactions and handle concurrency',
          usage: 'BEGIN, COMMIT, ROLLBACK, isolation levels',
          example: `======== Basic Transaction ========
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;

-- Or rollback if error
ROLLBACK;

======== Savepoints ========
BEGIN;

UPDATE products SET price = price * 1.1;
SAVEPOINT price_update;

UPDATE inventory SET quantity = quantity - 10;
-- Error occurred
ROLLBACK TO price_update;

COMMIT;

======== Isolation Levels ========
-- Read Uncommitted
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- Read Committed (default in many databases)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Repeatable Read
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- Serializable
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

======== Transaction Best Practices ========
-- Keep transactions short
BEGIN;
UPDATE orders SET status = 'processed' WHERE id = 123;
COMMIT;

-- Use explicit transaction control
BEGIN;
INSERT INTO audit_log (action, timestamp) VALUES ('update', NOW());
UPDATE users SET last_login = NOW() WHERE id = 456;
COMMIT;

======== Deadlock Handling ========
-- PostgreSQL: Detect deadlocks
SELECT * FROM pg_locks WHERE NOT granted;

-- Retry logic for deadlocks
DO $$
BEGIN
    LOOP
        BEGIN
            UPDATE accounts SET balance = balance - 50 WHERE id = 1;
            UPDATE accounts SET balance = balance + 50 WHERE id = 2;
            COMMIT;
            EXIT;
        EXCEPTION WHEN deadlock_detected THEN
            ROLLBACK;
            PERFORM pg_sleep(0.1);
        END;
    END LOOP;
END $$;`,
        },
        {
          command: 'Stored Procedures and Functions',
          description: 'Create reusable database code',
          usage: 'CREATE PROCEDURE, CREATE FUNCTION',
          example: `======== Stored Procedure (PostgreSQL) ========
CREATE OR REPLACE PROCEDURE update_user_email(
    p_user_id INTEGER,
    p_new_email VARCHAR(255)
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE users 
    SET email = p_new_email, updated_at = NOW()
    WHERE id = p_user_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'User with ID % not found', p_user_id;
    END IF;
END;
$$;

-- Call procedure
CALL update_user_email(1, 'newemail@example.com');

======== Function with Return Value ========
CREATE OR REPLACE FUNCTION get_user_order_count(
    p_user_id INTEGER
)
RETURNS INTEGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO v_count
    FROM orders
    WHERE user_id = p_user_id;
    
    RETURN v_count;
END;
$$;

-- Use function
SELECT get_user_order_count(1) AS order_count;

======== Table-Returning Function ========
CREATE OR REPLACE FUNCTION get_top_customers(p_limit INTEGER)
RETURNS TABLE (
    customer_id INTEGER,
    customer_name VARCHAR(255),
    total_orders INTEGER,
    total_spent DECIMAL(10,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        u.id,
        u.name,
        COUNT(o.id),
        COALESCE(SUM(o.total_amount), 0)
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY total_spent DESC
    LIMIT p_limit;
END;
$$;

======== MySQL Stored Procedure ========
DELIMITER //
CREATE PROCEDURE GetUserOrders(IN user_id INT)
BEGIN
    SELECT * FROM orders WHERE user_id = user_id;
END //
DELIMITER ;

-- Call procedure
CALL GetUserOrders(1);`,
        },
        {
          command: 'Triggers and Events',
          description: 'Automate database operations',
          usage: 'CREATE TRIGGER, scheduled events',
          example: `======== Audit Trigger ========
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log (table_name, operation, new_values, timestamp)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(NEW), NOW());
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (table_name, operation, old_values, new_values, timestamp)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), row_to_json(NEW), NOW());
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (table_name, operation, old_values, timestamp)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), NOW());
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;

-- Create trigger
CREATE TRIGGER users_audit_trigger
AFTER INSERT OR UPDATE OR DELETE ON users
FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

======== Auto-Update Timestamp Trigger ========
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

======== MySQL Trigger ========
DELIMITER //
CREATE TRIGGER before_order_insert
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    SET NEW.order_number = CONCAT('ORD', DATE_FORMAT(NOW(), '%Y%m%d'), 
                                 LPAD(CONNECTION_ID(), 4, '0'));
    SET NEW.created_at = NOW();
END //
DELIMITER ;

======== Scheduled Event (MySQL) ========
DELIMITER //
CREATE EVENT cleanup_old_sessions
ON SCHEDULE EVERY 1 DAY
STARTS CURRENT_TIMESTAMP
DO
BEGIN
    DELETE FROM user_sessions 
    WHERE last_activity < DATE_SUB(NOW(), INTERVAL 30 DAY);
END //
DELIMITER ;

-- Enable event scheduler
SET GLOBAL event_scheduler = ON;`,
        },
      ],
    },
    {
      title: 'Modern SQL Features',
      commands: [
        {
          command: 'JSON and Document Data',
          description: 'Work with JSON data in SQL',
          usage: 'JSON functions and operators',
          example: `======== JSON Data Types ========
-- PostgreSQL JSONB
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    attributes JSONB
);

-- MySQL JSON
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    attributes JSON
);

======== JSON Operations ========
-- Insert JSON data
INSERT INTO products (name, attributes) 
VALUES ('Laptop', '{
    "brand": "Dell",
    "specs": {
        "ram": "16GB",
        "storage": "512GB SSD"
    },
    "price": 999.99,
    "tags": ["computer", "portable"]
}');

-- Query JSON fields (PostgreSQL)
SELECT 
    name,
    attributes->>'brand' AS brand,
    attributes->'specs'->>'ram' AS ram,
    attributes->'price' AS price
FROM products;

-- Query JSON fields (MySQL)
SELECT 
    name,
    JSON_EXTRACT(attributes, '$.brand') AS brand,
    JSON_EXTRACT(attributes, '$.specs.ram') AS ram,
    attributes->>'$.price' AS price
FROM products;

======== JSON Query Functions ========
-- PostgreSQL
SELECT * FROM products 
WHERE attributes->>'brand' = 'Dell';

SELECT * FROM products 
WHERE attributes->'price' > 500;

-- JSON array operations
SELECT name, attributes->'tags'
FROM products 
WHERE 'computer' = ANY(ARRAY(SELECT jsonb_array_elements_text(attributes->'tags')));

-- MySQL
SELECT * FROM products 
WHERE JSON_EXTRACT(attributes, '$.brand') = 'Dell';

SELECT * FROM products 
WHERE JSON_CONTAINS(attributes, '"computer"', '$.tags');

======== JSON Modification ========
-- PostgreSQL
UPDATE products 
SET attributes = jsonb_set(attributes, '{price}', '899.99')
WHERE id = 1;

-- Add new field
UPDATE products 
SET attributes = attributes || '{"warranty": "2 years"}'
WHERE id = 1;

-- MySQL
UPDATE products 
SET attributes = JSON_SET(attributes, '$.price', '899.99')
WHERE id = 1;`,
        },
        {
          command: 'Window Functions Advanced',
          description: 'Advanced window function patterns',
          usage: 'Complex analytical queries',
          example: `======== Moving Average with Gaps ========
SELECT 
    date,
    revenue,
    AVG(revenue) OVER (
        ORDER BY date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) FILTER (WHERE revenue IS NOT NULL) AS moving_avg
FROM daily_revenue;

======== Percentile Analysis ========
SELECT 
    product_category,
    product_name,
    price,
    PERCENT_RANK() OVER (PARTITION BY product_category ORDER BY price) AS price_percentile,
    NTILE(10) OVER (PARTITION BY product_category ORDER BY price) AS price_decile
FROM products;

======== Time Series Analysis ========
SELECT 
    date,
    revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY date) AS day_over_day_change,
    revenue - LAG(revenue, 7) OVER (ORDER BY date) AS week_over_week_change,
    revenue / LAG(revenue, 1) OVER (ORDER BY date) - 1 AS daily_growth_rate
FROM daily_revenue
ORDER BY date;

======== Gap Filling with Window Functions ========
WITH date_series AS (
    SELECT generate_series(
        MIN(date), 
        MAX(date), 
        '1 day'::INTERVAL
    )::DATE AS date
    FROM daily_revenue
),
filled_data AS (
    SELECT 
        ds.date,
        COALESCE(dr.revenue, 0) AS revenue
    FROM date_series ds
    LEFT JOIN daily_revenue dr ON ds.date = dr.date
)
SELECT 
    date,
    revenue,
    SUM(revenue) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING) AS cumulative_revenue
FROM filled_data;

======== Session Analysis ========
SELECT 
    user_id,
    session_start,
    session_end,
    EXTRACT(EPOCH FROM (session_end - session_start))/60 AS session_duration_minutes,
    LAG(session_end) OVER (
        PARTITION BY user_id 
        ORDER BY session_start
    ) AS previous_session_end,
    session_start - LAG(session_end) OVER (
        PARTITION BY user_id 
        ORDER BY session_start
    ) AS time_since_previous_session
FROM user_sessions;`,
        },
        {
          command: 'Advanced Data Types and Features',
          description: 'Modern SQL data types and capabilities',
          usage: 'Arrays, geometry, full-text search',
          example: `======== Array Operations (PostgreSQL) ========
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    tags TEXT[],
    categories INTEGER[]
);

-- Query arrays
SELECT * FROM products WHERE 'electronics' = ANY(tags);
SELECT * FROM products WHERE categories @> ARRAY[1, 2];

-- Array functions
SELECT name, unnest(tags) AS tag FROM products;
SELECT name, array_length(tags, 1) AS tag_count FROM products;

======== Geometric Data Types ========
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    coordinates POINT
);

-- Spatial queries
SELECT * FROM locations 
WHERE coordinates <-> POINT(40.7128, -74.0060) < 1.0;

-- Find locations within radius
SELECT name, coordinates 
FROM locations 
WHERE ST_DWithin(
    coordinates::geography, 
    ST_MakePoint(-74.0060, 40.7128)::geography, 
    1000  -- meters
);

======== Full-Text Search ========
-- PostgreSQL
CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title TEXT,
    body TEXT,
    search_vector tsvector
);

-- Create search vector
UPDATE articles 
SET search_vector = to_tsvector('english', title || ' ' || body);

-- Search
SELECT title, 
       ts_rank(search_vector, plainto_tsquery('database performance')) AS rank
FROM articles 
WHERE search_vector @@ plainto_tsquery('database performance')
ORDER BY rank DESC;

-- MySQL Full-Text Search
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    FULLTEXT(title, body)
);

SELECT title, 
       MATCH(title, body) AGAINST('database performance' IN NATURAL LANGUAGE MODE) AS score
FROM articles 
WHERE MATCH(title, body) AGAINST('database performance');

======== UUID and Generated Columns ========
-- UUID primary key
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    email VARCHAR(255)
);

-- Generated columns
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10,2),
    tax_amount DECIMAL(10,2) GENERATED ALWAYS AS (total_amount * 0.1) STORED,
    final_amount DECIMAL(10,2) GENERATED ALWAYS AS (total_amount + (total_amount * 0.1)) STORED
);`,
        },
      ],
    },
  ],
};
