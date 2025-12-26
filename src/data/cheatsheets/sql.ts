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
          command: 'SQL Overview',
          description: 'Introduction to SQL and database concepts',
          usage: 'Understanding SQL fundamentals',
          example: `SQL (Structured Query Language):
- Standard language for relational databases
- Declarative language (specifies what, not how)
- ANSI/ISO standard with vendor extensions
- Used for data definition, manipulation, and control
- Foundation for database management systems`,
        },
        {
          command: 'Database Concepts',
          description: 'Core database terminology',
          usage: 'Understanding database structure',
          example: `Database Concepts:
- Database: Organized collection of data
- Table: Collection of related data in rows and columns
- Row: Single record in a table
- Column: Field with specific data type
- Primary Key: Unique identifier for each row
- Foreign Key: Links to primary key in another table
- Schema: Structure of the database
- Index: Improves query performance`,
        },
        {
          command: 'SQL Categories',
          description: 'Types of SQL commands',
          usage: 'SQL command classifications',
          example: `SQL Categories:
DDL (Data Definition Language): CREATE, ALTER, DROP
DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
DCL (Data Control Language): GRANT, REVOKE
TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT`,
        },
        {
          command: 'Database Systems',
          description: 'Popular SQL database systems',
          usage: 'Database system options',
          example: `Popular SQL Databases:
- PostgreSQL: Open-source, feature-rich
- MySQL: Popular web database
- SQL Server: Microsoft enterprise database
- Oracle: Enterprise-grade database
- SQLite: Lightweight, file-based database
- MariaDB: MySQL fork with enhanced features`,
        },
        {
          command: 'Integer Data Types',
          description: 'Whole number data types',
          usage: 'Integer type definitions',
          example: `Integer Types:
INTEGER or INT        -- Whole numbers (-2,147,483,648 to 2,147,483,647)
BIGINT               -- Large whole numbers (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
SMALLINT             -- Small whole numbers (-32,768 to 32,767)
TINYINT              -- Very small numbers (0 to 255)
SERIAL               -- Auto-incrementing integer (PostgreSQL)`,
        },
        {
          command: 'Decimal Data Types',
          description: 'Precise numeric data types',
          usage: 'Decimal and floating-point types',
          example: `Decimal Types:
DECIMAL(p,s)          -- Fixed-point with precision p, scale s
NUMERIC(p,s)         -- Same as DECIMAL
FLOAT(p)             -- Floating-point with precision p
REAL                 -- Floating-point (4 bytes)
DOUBLE PRECISION     -- Double precision floating-point (8 bytes)
MONEY                -- Currency type (SQL Server)`,
        },
        {
          command: 'String Data Types',
          description: 'Text and character data types',
          usage: 'String type definitions',
          example: `String Types:
CHAR(n)              -- Fixed-length string (n characters)
VARCHAR(n)           -- Variable-length string (max n characters)
TEXT                 -- Variable-length text (unlimited)
NCHAR(n)             -- Unicode fixed-length string
NVARCHAR(n)          -- Unicode variable-length string
CLOB                 -- Character large object`,
        },
        {
          command: 'Date and Time Types',
          description: 'Temporal data types',
          usage: 'Date and time type definitions',
          example: `Date/Time Types:
DATE                 -- Date (year, month, day)
TIME                 -- Time (hour, minute, second)
DATETIME             -- Date and time
TIMESTAMP            -- Date and time with timezone
YEAR                 -- Year value
INTERVAL             -- Time duration`,
        },
        {
          command: 'Boolean and Binary Types',
          description: 'Boolean and binary data types',
          usage: 'Boolean and binary type definitions',
          example: `Boolean and Binary Types:
BOOLEAN              -- True/false values
BIT                  -- Bit string
BIT VARYING          -- Variable-length bit string
BINARY(n)            -- Fixed-length binary data
VARBINARY(n)         -- Variable-length binary data
BLOB                 -- Binary large object`,
        },
        {
          command: 'CREATE TABLE Basic',
          description: 'Create a basic table',
          usage: 'CREATE TABLE statement',
          example: `CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        {
          command: 'CREATE TABLE with Constraints',
          description: 'Create table with constraints',
          usage: 'Table with constraints',
          example: `CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) CHECK (amount > 0),
    status VARCHAR(20) DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id)
);`,
        },
        {
          command: 'INSERT Basic',
          description: 'Insert single record',
          usage: 'INSERT INTO statement',
          example: `INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com');`,
        },
        {
          command: 'INSERT Multiple Records',
          description: 'Insert multiple records',
          usage: 'INSERT with multiple values',
          example: `INSERT INTO users (username, email) VALUES 
('alice', 'alice@example.com'),
('bob', 'bob@example.com'),
('charlie', 'charlie@example.com');`,
        },
        {
          command: 'SELECT Basic',
          description: 'Select all records',
          usage: 'Basic SELECT statement',
          example: `SELECT * FROM users;
SELECT username, email FROM users;`,
        },
        {
          command: 'SELECT with WHERE',
          description: 'Filter records with conditions',
          usage: 'WHERE clause',
          example: `SELECT * FROM users WHERE username = 'john_doe';
SELECT * FROM users WHERE created_at > '2024-01-01';`,
        },
        {
          command: 'UPDATE Records',
          description: 'Update existing records',
          usage: 'UPDATE statement',
          example: `UPDATE users 
SET email = 'newemail@example.com' 
WHERE username = 'john_doe';`,
        },
        {
          command: 'DELETE Records',
          description: 'Delete records',
          usage: 'DELETE statement',
          example: `DELETE FROM users WHERE username = 'john_doe';
DELETE FROM users WHERE created_at < '2023-01-01';`,
        },
        {
          command: 'DROP TABLE',
          description: 'Delete a table',
          usage: 'DROP TABLE statement',
          example: `DROP TABLE users;
DROP TABLE IF EXISTS orders;`,
        },
      ],
    },
    {
      title: 'SQL Constraints and Keys',
      commands: [
        {
          command: 'PRIMARY KEY Constraint',
          description: 'Define primary key',
          usage: 'PRIMARY KEY constraint',
          example: `CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50)
);

-- Composite primary key
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);`,
        },
        {
          command: 'FOREIGN KEY Constraint',
          description: 'Define foreign key relationships',
          usage: 'FOREIGN KEY constraint',
          example: `CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- With actions
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);`,
        },
        {
          command: 'UNIQUE Constraint',
          description: 'Ensure unique values',
          usage: 'UNIQUE constraint',
          example: `CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50) UNIQUE
);

-- Add unique constraint to existing table
ALTER TABLE users ADD CONSTRAINT unique_username UNIQUE (username);`,
        },
        {
          command: 'NOT NULL Constraint',
          description: 'Require non-null values',
          usage: 'NOT NULL constraint',
          example: `CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);

-- Add NOT NULL to existing column
ALTER TABLE users ALTER COLUMN username SET NOT NULL;`,
        },
        {
          command: 'CHECK Constraint',
          description: 'Validate data values',
          usage: 'CHECK constraint',
          example: `CREATE TABLE products (
    id INT PRIMARY KEY,
    price DECIMAL(10,2) CHECK (price > 0),
    quantity INT CHECK (quantity >= 0),
    category VARCHAR(50) CHECK (category IN ('electronics', 'clothing', 'books'))
);

-- Add CHECK constraint to existing table
ALTER TABLE products ADD CONSTRAINT check_price CHECK (price > 0);`,
        },
        {
          command: 'DEFAULT Values',
          description: 'Set default column values',
          usage: 'DEFAULT constraint',
          example: `CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add DEFAULT to existing column
ALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';`,
        },
        {
          command: 'AUTO_INCREMENT',
          description: 'Auto-incrementing primary keys',
          usage: 'AUTO_INCREMENT and SERIAL',
          example: `-- MySQL/MariaDB
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50)
);

-- PostgreSQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50)
);

-- SQL Server
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(50)
);`,
        },
      ],
    },
    {
      title: 'Basic SQL Queries',
      commands: [
        {
          command: 'SELECT with ORDER BY',
          description: 'Sort query results',
          usage: 'ORDER BY clause',
          example: `SELECT username, email FROM users ORDER BY username;
SELECT * FROM users ORDER BY created_at DESC;
SELECT * FROM users ORDER BY username ASC, email DESC;`,
        },
        {
          command: 'SELECT with LIMIT',
          description: 'Limit number of results',
          usage: 'LIMIT clause',
          example: `SELECT * FROM users LIMIT 10;
SELECT * FROM users ORDER BY created_at DESC LIMIT 5;

-- SQL Server
SELECT TOP 5 * FROM users;

-- Oracle
SELECT * FROM users FETCH FIRST 5 ROWS ONLY;`,
        },
        {
          command: 'Comparison Operators',
          description: 'Compare values in WHERE',
          usage: 'Comparison operators',
          example: `SELECT * FROM users WHERE age > 25;
SELECT * FROM products WHERE price >= 100.00;
SELECT * FROM users WHERE username != 'admin';
SELECT * FROM orders WHERE amount BETWEEN 50 AND 100;`,
        },
        {
          command: 'Logical Operators',
          description: 'Combine conditions',
          usage: 'AND, OR, NOT operators',
          example: `SELECT * FROM users WHERE age > 25 AND status = 'active';
SELECT * FROM products WHERE price < 50 OR category = 'electronics';
SELECT * FROM users WHERE NOT status = 'inactive';
SELECT * FROM orders WHERE amount > 100 AND (status = 'pending' OR status = 'processing');`,
        },
        {
          command: 'LIKE Operator',
          description: 'Pattern matching',
          usage: 'LIKE with wildcards',
          example: `SELECT * FROM users WHERE username LIKE 'john%';
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE username LIKE 'j_hn';
SELECT * FROM users WHERE username NOT LIKE 'admin%';`,
        },
        {
          command: 'IN Operator',
          description: 'Match multiple values',
          usage: 'IN clause',
          example: `SELECT * FROM users WHERE status IN ('active', 'pending');
SELECT * FROM products WHERE category IN ('electronics', 'books');
SELECT * FROM users WHERE id IN (1, 5, 10, 15);
SELECT * FROM orders WHERE status NOT IN ('cancelled', 'refunded');`,
        },
        {
          command: 'NULL Values',
          description: 'Handle NULL values',
          usage: 'IS NULL and IS NOT NULL',
          example: `SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE phone IS NOT NULL;
SELECT * FROM orders WHERE shipped_at IS NULL;
UPDATE users SET phone = NULL WHERE phone = '';`,
        },
        {
          command: 'BETWEEN Operator',
          description: 'Range queries',
          usage: 'BETWEEN clause',
          example: `SELECT * FROM products WHERE price BETWEEN 10 AND 50;
SELECT * FROM users WHERE age BETWEEN 18 AND 25;
SELECT * FROM orders WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';
SELECT * FROM products WHERE price NOT BETWEEN 100 AND 200;`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'SQL Functions and Aggregates',
      commands: [
        {
          command: 'COUNT Function',
          description: 'Count records',
          usage: 'COUNT aggregate function',
          example: `SELECT COUNT(*) FROM users;
SELECT COUNT(email) FROM users;
SELECT COUNT(DISTINCT status) FROM users;
SELECT COUNT(*) as total_users FROM users WHERE status = 'active';`,
        },
        {
          command: 'SUM Function',
          description: 'Sum numeric values',
          usage: 'SUM aggregate function',
          example: `SELECT SUM(amount) FROM orders;
SELECT SUM(amount) as total_sales FROM orders WHERE status = 'completed';
SELECT SUM(quantity) FROM order_items WHERE product_id = 1;`,
        },
        {
          command: 'AVG Function',
          description: 'Calculate average',
          usage: 'AVG aggregate function',
          example: `SELECT AVG(price) FROM products;
SELECT AVG(age) FROM users;
SELECT AVG(amount) as avg_order_value FROM orders;`,
        },
        {
          command: 'MIN and MAX Functions',
          description: 'Find minimum and maximum values',
          usage: 'MIN and MAX functions',
          example: `SELECT MIN(price), MAX(price) FROM products;
SELECT MIN(created_at), MAX(created_at) FROM users;
SELECT MAX(amount) as largest_order FROM orders;`,
        },
        {
          command: 'GROUP BY Basic',
          description: 'Group records for aggregation',
          usage: 'GROUP BY clause',
          example: `SELECT status, COUNT(*) FROM users GROUP BY status;
SELECT category, AVG(price) FROM products GROUP BY category;
SELECT user_id, COUNT(*) as order_count FROM orders GROUP BY user_id;`,
        },
        {
          command: 'GROUP BY with Multiple Columns',
          description: 'Group by multiple columns',
          usage: 'Multiple column GROUP BY',
          example: `SELECT category, status, COUNT(*) FROM products GROUP BY category, status;
SELECT YEAR(created_at), MONTH(created_at), COUNT(*) FROM orders GROUP BY YEAR(created_at), MONTH(created_at);
SELECT user_id, status, SUM(amount) FROM orders GROUP BY user_id, status;`,
        },
        {
          command: 'HAVING Clause',
          description: 'Filter grouped results',
          usage: 'HAVING clause',
          example: `SELECT status, COUNT(*) FROM users GROUP BY status HAVING COUNT(*) > 5;
SELECT category, AVG(price) FROM products GROUP BY category HAVING AVG(price) > 100;
SELECT user_id, SUM(amount) FROM orders GROUP BY user_id HAVING SUM(amount) > 1000;`,
        },
        {
          command: 'String Functions',
          description: 'String manipulation functions',
          usage: 'Common string functions',
          example: `SELECT UPPER(username) FROM users;
SELECT LOWER(email) FROM users;
SELECT CONCAT(first_name, ' ', last_name) FROM users;
SELECT LENGTH(username) FROM users;
SELECT SUBSTRING(email, 1, 10) FROM users;
SELECT TRIM(username) FROM users;`,
        },
        {
          command: 'Date Functions',
          description: 'Date and time functions',
          usage: 'Common date functions',
          example: `SELECT CURRENT_DATE;
SELECT CURRENT_TIME;
SELECT CURRENT_TIMESTAMP;
SELECT EXTRACT(YEAR FROM created_at) FROM users;
SELECT DATE_ADD(created_at, INTERVAL 7 DAY) FROM users;
SELECT DATEDIFF(CURRENT_DATE, created_at) FROM users;`,
        },
        {
          command: 'Mathematical Functions',
          description: 'Mathematical functions',
          usage: 'Common math functions',
          example: `SELECT ABS(-10);
SELECT ROUND(price, 2) FROM products;
SELECT CEIL(price) FROM products;
SELECT FLOOR(price) FROM products;
SELECT POWER(2, 3);
SELECT MOD(10, 3);
SELECT SQRT(16);`,
        },
        {
          command: 'Conditional Functions',
          description: 'Conditional logic in queries',
          usage: 'CASE statement',
          example: `SELECT 
    username,
    CASE 
        WHEN age < 18 THEN 'Minor'
        WHEN age BETWEEN 18 AND 65 THEN 'Adult'
        ELSE 'Senior'
    END as age_group
FROM users;

SELECT 
    name,
    CASE 
        WHEN price > 100 THEN 'Expensive'
        WHEN price > 50 THEN 'Moderate'
        ELSE 'Cheap'
    END as price_category
FROM products;`,
        },
      ],
    },
    {
      title: 'SQL Joins',
      commands: [
        {
          command: 'INNER JOIN',
          description: 'Join matching records from both tables',
          usage: 'INNER JOIN clause',
          example: `SELECT u.username, o.amount 
FROM users u 
INNER JOIN orders o ON u.id = o.user_id;

SELECT p.name, c.name as category_name
FROM products p
INNER JOIN categories c ON p.category_id = c.id;`,
        },
        {
          command: 'LEFT JOIN',
          description: 'All records from left table, matching from right',
          usage: 'LEFT JOIN clause',
          example: `SELECT u.username, o.amount 
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id;

SELECT p.name, oi.quantity
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id;`,
        },
        {
          command: 'RIGHT JOIN',
          description: 'All records from right table, matching from left',
          usage: 'RIGHT JOIN clause',
          example: `SELECT u.username, o.amount 
FROM users u 
RIGHT JOIN orders o ON u.id = o.user_id;

SELECT c.name, p.name as product_name
FROM categories c
RIGHT JOIN products p ON c.id = p.category_id;`,
        },
        {
          command: 'FULL OUTER JOIN',
          description: 'All records from both tables',
          usage: 'FULL OUTER JOIN clause',
          example: `SELECT u.username, o.amount 
FROM users u 
FULL OUTER JOIN orders o ON u.id = o.user_id;

SELECT p.name, c.name as category_name
FROM products p
FULL OUTER JOIN categories c ON p.category_id = c.id;`,
        },
        {
          command: 'Self Join',
          description: 'Join table to itself',
          usage: 'Self join with aliases',
          example: `SELECT e.name as employee, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

SELECT u1.username as user1, u2.username as user2
FROM friendships f
JOIN users u1 ON f.user1_id = u1.id
JOIN users u2 ON f.user2_id = u2.id;`,
        },
        {
          command: 'Cross Join',
          description: 'Cartesian product of tables',
          usage: 'CROSS JOIN clause',
          example: `SELECT p.name, c.name as color_name
FROM products p
CROSS JOIN colors c;

-- Alternative syntax
SELECT p.name, c.name as color_name
FROM products p, colors c;`,
        },
        {
          command: 'Multiple Joins',
          description: 'Join multiple tables',
          usage: 'Multiple table joins',
          example: `SELECT u.username, p.name, oi.quantity, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id;`,
        },
        {
          command: 'Join with Aggregation',
          description: 'Aggregate data from joined tables',
          usage: 'JOIN with GROUP BY',
          example: `SELECT u.username, COUNT(o.id) as order_count, SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username
ORDER BY total_spent DESC;`,
        },
      ],
    },
    {
      title: 'SQL Subqueries',
      commands: [
        {
          command: 'Subquery in SELECT',
          description: 'Subquery in SELECT clause',
          usage: 'Scalar subquery',
          example: `SELECT 
    username,
    (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count
FROM users u;

SELECT 
    name,
    (SELECT AVG(price) FROM products) as avg_price,
    price - (SELECT AVG(price) FROM products) as price_diff
FROM products;`,
        },
        {
          command: 'Subquery in WHERE',
          description: 'Subquery in WHERE clause',
          usage: 'Subquery for filtering',
          example: `SELECT * FROM users 
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);

SELECT * FROM products 
WHERE price > (SELECT AVG(price) FROM products);

SELECT * FROM users 
WHERE id NOT IN (SELECT user_id FROM orders);`,
        },
        {
          command: 'Subquery in FROM',
          description: 'Subquery in FROM clause',
          usage: 'Derived table',
          example: `SELECT * FROM (
    SELECT user_id, SUM(amount) as total
    FROM orders 
    GROUP BY user_id
) as user_totals 
WHERE total > 1000;

SELECT u.username, t.total FROM users u
JOIN (
    SELECT user_id, SUM(amount) as total
    FROM orders 
    GROUP BY user_id
) t ON u.id = t.user_id;`,
        },
        {
          command: 'EXISTS Operator',
          description: 'Check existence of related records',
          usage: 'EXISTS with subquery',
          example: `SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id AND amount > 100
);

SELECT * FROM products p
WHERE NOT EXISTS (
    SELECT 1 FROM order_items oi 
    WHERE oi.product_id = p.id
);`,
        },
        {
          command: 'Correlated Subquery',
          description: 'Subquery referencing outer query',
          usage: 'Correlated subquery',
          example: `SELECT u.username,
    (SELECT COUNT(*) FROM orders o 
     WHERE o.user_id = u.id) as order_count
FROM users u;

SELECT * FROM products p
WHERE price > (
    SELECT AVG(price) FROM products 
    WHERE category = p.category
);`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced SQL Features',
      commands: [
        {
          command: 'Window Functions Overview',
          description: 'Introduction to window functions',
          usage: 'Window function concepts',
          example: `Window Functions:
- Perform calculations across set of table rows
- Similar to aggregate functions but don't collapse rows
- Use OVER() clause to define window
- Can use PARTITION BY and ORDER BY
- Include ROW_NUMBER(), RANK(), LAG(), LEAD(), etc.

Syntax:
function_name(expression) OVER (window_definition)`,
        },
        {
          command: 'ROW_NUMBER Function',
          description: 'Number rows in result set',
          usage: 'ROW_NUMBER() window function',
          example: `SELECT 
    username,
    amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) as rank
FROM orders;

SELECT 
    username,
    created_at,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) as order_number
FROM orders;`,
        },
        {
          command: 'RANK and DENSE_RANK',
          description: 'Rank rows with ties',
          usage: 'RANK() and DENSE_RANK() functions',
          example: `SELECT 
    username,
    score,
    RANK() OVER (ORDER BY score DESC) as rank,
    DENSE_RANK() OVER (ORDER BY score DESC) as dense_rank
FROM leaderboard;

-- RANK skips numbers after ties, DENSE_RANK doesn't`,
        },
        {
          command: 'NTILE Function',
          description: 'Divide rows into groups',
          usage: 'NTILE() function',
          example: `SELECT 
    username,
    amount,
    NTILE(4) OVER (ORDER BY amount DESC) as quartile
FROM orders;

SELECT 
    product_name,
    price,
    NTILE(10) OVER (ORDER BY price) as decile
FROM products;`,
        },
        {
          command: 'LAG and LEAD Functions',
          description: 'Access previous/next row values',
          usage: 'LAG() and LEAD() functions',
          example: `SELECT 
    date,
    price,
    LAG(price, 1) OVER (ORDER BY date) as prev_price,
    LEAD(price, 1) OVER (ORDER BY date) as next_price
FROM stock_prices;

SELECT 
    username,
    order_date,
    amount,
    LAG(amount) OVER (PARTITION BY username ORDER BY order_date) as prev_order_amount
FROM orders;`,
        },
        {
          command: 'FIRST_VALUE and LAST_VALUE',
          description: 'Get first/last values in window',
          usage: 'FIRST_VALUE() and LAST_VALUE() functions',
          example: `SELECT 
    username,
    order_date,
    amount,
    FIRST_VALUE(amount) OVER (PARTITION BY username ORDER BY order_date) as first_order,
    LAST_VALUE(amount) OVER (PARTITION BY username ORDER BY order_date 
                             ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_order
FROM orders;`,
        },
        {
          command: 'Window Frame Clauses',
          description: 'Define window frame boundaries',
          usage: 'ROWS BETWEEN clause',
          example: `SELECT 
    date,
    price,
    AVG(price) OVER (ORDER BY date 
                     ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg
FROM stock_prices;

SELECT 
    username,
    order_date,
    amount,
    SUM(amount) OVER (PARTITION BY username ORDER BY order_date 
                     ROWS UNBOUNDED PRECEDING) as running_total
FROM orders;`,
        },
      ],
    },
    {
      title: 'Common Table Expressions (CTE)',
      commands: [
        {
          command: 'Basic CTE',
          description: 'Simple CTE usage',
          usage: 'WITH clause',
          example: `WITH active_users AS (
    SELECT * FROM users WHERE status = 'active'
)
SELECT * FROM active_users WHERE created_at > '2024-01-01';`,
        },
        {
          command: 'Multiple CTEs',
          description: 'Multiple CTEs in one query',
          usage: 'Multiple WITH clauses',
          example: `WITH 
user_stats AS (
    SELECT user_id, COUNT(*) as order_count, SUM(amount) as total
    FROM orders
    GROUP BY user_id
),
high_value_users AS (
    SELECT user_id FROM user_stats WHERE total > 1000
)
SELECT u.username, us.order_count, us.total
FROM users u
JOIN user_stats us ON u.id = us.user_id
WHERE u.id IN (SELECT user_id FROM high_value_users);`,
        },
        {
          command: 'Recursive CTE',
          description: 'Self-referencing CTE',
          usage: 'Recursive WITH clause',
          example: `WITH RECURSIVE employee_hierarchy AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;`,
        },
        {
          command: 'CTE for Data Analysis',
          description: 'CTE for complex analysis',
          usage: 'Analytical CTE patterns',
          example: `WITH 
monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', created_at) as month,
        SUM(amount) as total_sales
    FROM orders
    GROUP BY DATE_TRUNC('month', created_at)
),
sales_growth AS (
    SELECT 
        month,
        total_sales,
        LAG(total_sales) OVER (ORDER BY month) as prev_month_sales
    FROM monthly_sales
)
SELECT 
    month,
    total_sales,
    prev_month_sales,
    ROUND((total_sales - prev_month_sales) / prev_month_sales * 100, 2) as growth_rate
FROM sales_growth
WHERE prev_month_sales IS NOT NULL;`,
        },
      ],
    },
    {
      title: 'SQL Transactions',
      commands: [
        {
          command: 'BEGIN TRANSACTION',
          description: 'Start a transaction',
          usage: 'BEGIN or START TRANSACTION',
          example: `BEGIN TRANSACTION;

-- PostgreSQL
BEGIN;

-- SQL Server
BEGIN TRANSACTION;

-- MySQL
START TRANSACTION;`,
        },
        {
          command: 'COMMIT Transaction',
          description: 'Save transaction changes',
          usage: 'COMMIT statement',
          example: `BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
        },
        {
          command: 'ROLLBACK Transaction',
          description: 'Undo transaction changes',
          usage: 'ROLLBACK statement',
          example: `BEGIN TRANSACTION;
UPDATE products SET price = price * 1.1;
-- Oops, wrong update!
ROLLBACK;`,
        },
        {
          command: 'SAVEPOINT',
          description: 'Create savepoints in transactions',
          usage: 'SAVEPOINT and ROLLBACK TO',
          example: `BEGIN TRANSACTION;
UPDATE users SET status = 'active' WHERE id = 1;
SAVEPOINT user_updated;
UPDATE orders SET status = 'processed' WHERE id = 1;
-- Something went wrong with orders
ROLLBACK TO user_updated;
COMMIT;`,
        },
        {
          command: 'Transaction Isolation Levels',
          description: 'Control transaction isolation',
          usage: 'SET TRANSACTION ISOLATION LEVEL',
          example: `-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- PostgreSQL specific
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;`,
        },
        {
          command: 'Autocommit Control',
          description: 'Control autocommit behavior',
          usage: 'AUTOCOMMIT settings',
          example: `-- Disable autocommit
SET AUTOCOMMIT = 0;

-- Enable autocommit
SET AUTOCOMMIT = 1;

-- PostgreSQL
BEGIN;
-- Your statements here
COMMIT;`,
        },
      ],
    },
    {
      title: 'SQL Indexes and Performance',
      commands: [
        {
          command: 'Create Index',
          description: 'Create basic index',
          usage: 'CREATE INDEX statement',
          example: `CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_products_category ON products(category);`,
        },
        {
          command: 'Unique Index',
          description: 'Create unique index',
          usage: 'CREATE UNIQUE INDEX',
          example: `CREATE UNIQUE INDEX idx_users_username ON users(username);
CREATE UNIQUE INDEX idx_products_sku ON products(sku);`,
        },
        {
          command: 'Composite Index',
          description: 'Create multi-column index',
          usage: 'Index on multiple columns',
          example: `CREATE INDEX idx_orders_status_date ON orders(status, created_at);
CREATE INDEX idx_products_category_price ON products(category, price);`,
        },
        {
          command: 'Partial Index',
          description: 'Create index on subset of data',
          usage: 'WHERE clause in index',
          example: `-- PostgreSQL
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';
CREATE INDEX idx_large_orders ON orders(id) WHERE amount > 1000;

-- SQL Server
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';`,
        },
        {
          command: 'Drop Index',
          description: 'Remove an index',
          usage: 'DROP INDEX statement',
          example: `DROP INDEX idx_users_email;
DROP INDEX IF EXISTS idx_orders_user_id;

-- SQL Server
DROP INDEX idx_users_email ON users;`,
        },
        {
          command: 'Index Usage Analysis',
          description: 'Analyze index performance',
          usage: 'Query index statistics',
          example: `-- PostgreSQL
SELECT * FROM pg_stat_user_indexes;
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';

-- MySQL
SHOW INDEX FROM users;
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- SQL Server
SELECT * FROM sys.dm_db_index_usage_stats;
SET SHOWPLAN_TEXT ON;`,
        },
        {
          command: 'Index Types',
          description: 'Different index types',
          usage: 'Specialized index types',
          example: `-- B-Tree (default)
CREATE INDEX idx_name ON table(column);

-- Hash index (PostgreSQL)
CREATE INDEX idx_hash_name ON table USING HASH(column);

-- GiST index (PostgreSQL)
CREATE INDEX idx_gis_location ON places USING GIST(location);

-- Full-text index
CREATE FULLTEXT INDEX idx_content ON articles(content);`,
        },
      ],
    },
    {
      title: 'SQL Views',
      commands: [
        {
          command: 'Create View',
          description: 'Create a simple view',
          usage: 'CREATE VIEW statement',
          example: `CREATE VIEW active_users AS
SELECT id, username, email, created_at
FROM users
WHERE status = 'active';`,
        },
        {
          command: 'Complex View',
          description: 'Create view with joins',
          usage: 'View with multiple tables',
          example: `CREATE VIEW user_orders AS
SELECT 
    u.id as user_id,
    u.username,
    COUNT(o.id) as order_count,
    SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;`,
        },
        {
          command: 'Updateable View',
          description: 'Create updateable view',
          usage: 'Simple updateable view',
          example: `CREATE VIEW user_contacts AS
SELECT id, username, email, phone
FROM users
WHERE status = 'active';

-- Can be updated
UPDATE user_contacts SET email = 'new@example.com' WHERE id = 1;`,
        },
        {
          command: 'WITH CHECK OPTION',
          description: 'Restrict view updates',
          usage: 'WITH CHECK OPTION',
          example: `CREATE VIEW active_user_contacts AS
SELECT id, username, email, phone
FROM users
WHERE status = 'active'
WITH CHECK OPTION;

-- Prevents updates that would make status != 'active'`,
        },
        {
          command: 'Drop View',
          description: 'Remove a view',
          usage: 'DROP VIEW statement',
          example: `DROP VIEW active_users;
DROP VIEW IF EXISTS user_orders;`,
        },
        {
          command: 'Materialized View',
          description: 'Create materialized view',
          usage: 'MATERIALIZED VIEW (PostgreSQL)',
          example: `CREATE MATERIALIZED VIEW user_summary AS
SELECT 
    user_id,
    COUNT(*) as order_count,
    SUM(amount) as total_spent
FROM orders
GROUP BY user_id;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW user_summary;`,
        },
      ],
    },
    {
      title: 'SQL Stored Procedures',
      commands: [
        {
          command: 'Basic Procedure',
          description: 'Create simple stored procedure',
          usage: 'CREATE PROCEDURE',
          example: `-- MySQL/MariaDB
CREATE PROCEDURE GetUserCount()
BEGIN
    SELECT COUNT(*) as user_count FROM users;
END;

-- PostgreSQL
CREATE OR REPLACE FUNCTION GetUserCount()
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM users);
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Procedure with Parameters',
          description: 'Procedure with input parameters',
          usage: 'Parameterized procedures',
          example: `-- MySQL/MariaDB
CREATE PROCEDURE GetUserByEmail(IN user_email VARCHAR(100))
BEGIN
    SELECT * FROM users WHERE email = user_email;
END;

-- PostgreSQL
CREATE OR REPLACE FUNCTION GetUserByEmail(user_email VARCHAR(100))
RETURNS TABLE(id INTEGER, username VARCHAR, email VARCHAR) AS $$
BEGIN
    RETURN QUERY
    SELECT id, username, email FROM users WHERE email = user_email;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Procedure with Output',
          description: 'Procedure returning values',
          usage: 'OUTPUT parameters',
          example: `-- SQL Server
CREATE PROCEDURE GetUserStats
    @user_id INT,
    @order_count INT OUTPUT,
    @total_spent DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT @order_count = COUNT(*), @total_spent = SUM(amount)
    FROM orders WHERE user_id = @user_id;
END;

-- PostgreSQL
CREATE OR REPLACE FUNCTION GetUserStats(user_id INTEGER)
RETURNS TABLE(order_count INTEGER, total_spent DECIMAL) AS $$
BEGIN
    RETURN QUERY
    SELECT COUNT(*), SUM(amount) FROM orders WHERE user_id = user_id;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Call Procedure',
          description: 'Execute stored procedures',
          usage: 'CALL and EXECUTE',
          example: `-- MySQL/MariaDB
CALL GetUserCount();
CALL GetUserByEmail('user@example.com');

-- PostgreSQL
SELECT GetUserCount();
SELECT * FROM GetUserByEmail('user@example.com');

-- SQL Server
EXEC GetUserCount;
EXEC GetUserByEmail @user_email = 'user@example.com';`,
        },
        {
          command: 'Drop Procedure',
          description: 'Remove stored procedure',
          usage: 'DROP PROCEDURE',
          example: `DROP PROCEDURE GetUserCount;
DROP PROCEDURE IF EXISTS GetUserByEmail;

-- PostgreSQL
DROP FUNCTION GetUserCount();
DROP FUNCTION IF EXISTS GetUserByEmail(VARCHAR);`,
        },
      ],
    },
    {
      title: 'SQL Triggers',
      commands: [
        {
          command: 'BEFORE INSERT Trigger',
          description: 'Trigger before insert',
          usage: 'BEFORE INSERT trigger',
          example: `-- MySQL/MariaDB
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.created_at = CURRENT_TIMESTAMP;

-- PostgreSQL
CREATE OR REPLACE FUNCTION before_user_insert()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at := CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW EXECUTE FUNCTION before_user_insert();`,
        },
        {
          command: 'AFTER UPDATE Trigger',
          description: 'Trigger after update',
          usage: 'AFTER UPDATE trigger',
          example: `-- MySQL/MariaDB
CREATE TRIGGER after_user_update
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.status != NEW.status THEN
        INSERT INTO user_status_log(user_id, old_status, new_status, changed_at)
        VALUES(OLD.id, OLD.status, NEW.status, CURRENT_TIMESTAMP);
    END IF;
END;

-- PostgreSQL
CREATE OR REPLACE FUNCTION after_user_update()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.status != NEW.status THEN
        INSERT INTO user_status_log(user_id, old_status, new_status, changed_at)
        VALUES(OLD.id, OLD.status, NEW.status, CURRENT_TIMESTAMP);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'INSTEAD OF Trigger',
          description: 'Instead of trigger (for views)',
          usage: 'INSTEAD OF trigger',
          example: `-- SQL Server/PostgreSQL
CREATE TRIGGER instead_of_user_insert
INSTEAD OF INSERT ON user_view
FOR EACH ROW
BEGIN
    INSERT INTO users(username, email)
    VALUES(NEW.username, NEW.email);
END;`,
        },
        {
          command: 'Drop Trigger',
          description: 'Remove trigger',
          usage: 'DROP TRIGGER',
          example: `-- MySQL/MariaDB
DROP TRIGGER before_user_insert;

-- PostgreSQL
DROP TRIGGER before_user_insert ON users;
DROP FUNCTION before_user_insert();`,
        },
      ],
    },
    {
      title: 'SQL Security and Permissions',
      commands: [
        {
          command: 'Create User',
          description: 'Create database user',
          usage: 'CREATE USER statement',
          example: `-- PostgreSQL
CREATE USER app_user WITH PASSWORD 'secure_password';

-- MySQL
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'secure_password';

-- SQL Server
CREATE LOGIN app_user WITH PASSWORD = 'secure_password';
CREATE USER app_user FOR LOGIN app_user;`,
        },
        {
          command: 'Grant Permissions',
          description: 'Grant database permissions',
          usage: 'GRANT statement',
          example: `-- Grant specific permissions
GRANT SELECT, INSERT, UPDATE ON users TO app_user;
GRANT SELECT ON orders TO app_user;

-- Grant all permissions on table
GRANT ALL PRIVILEGES ON users TO app_user;

-- Grant database permissions
GRANT CONNECT ON DATABASE myapp TO app_user;
GRANT USAGE ON SCHEMA public TO app_user;

-- Grant role permissions
GRANT read_only TO app_user;`,
        },
        {
          command: 'Revoke Permissions',
          description: 'Remove database permissions',
          usage: 'REVOKE statement',
          example: `REVOKE INSERT ON users FROM app_user;
REVOKE ALL PRIVILEGES ON users FROM app_user;
REVOKE CONNECT ON DATABASE myapp FROM app_user;`,
        },
        {
          command: 'Create Role',
          description: 'Create database role',
          usage: 'CREATE ROLE statement',
          example: `-- PostgreSQL
CREATE ROLE read_only;
GRANT USAGE ON SCHEMA public TO read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;

-- MySQL
CREATE ROLE 'read_only';
GRANT SELECT ON myapp.* TO 'read_only';`,
        },
        {
          command: 'Row Level Security',
          description: 'Implement row-level security',
          usage: 'RLS policies (PostgreSQL)',
          example: `-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY user_orders_policy ON orders
FOR ALL TO app_user
USING (user_id = current_setting('app.current_user_id')::INTEGER);

-- Test RLS
SET app.current_user_id = '1';
SELECT * FROM orders; -- Only user 1's orders`,
        },
      ],
    },
    {
      title: 'SQL Data Import/Export',
      commands: [
        {
          command: 'Import CSV',
          description: 'Import data from CSV file',
          usage: 'COPY and LOAD DATA',
          example: `-- PostgreSQL
COPY users(username, email, created_at)
FROM '/path/to/users.csv'
WITH (FORMAT CSV, HEADER);

-- MySQL
LOAD DATA INFILE '/path/to/users.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

-- SQL Server
BULK INSERT users
FROM '/path/to/users.csv'
WITH (
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n',
    FIRSTROW = 2
);`,
        },
        {
          command: 'Export CSV',
          description: 'Export data to CSV file',
          usage: 'COPY and SELECT INTO',
          example: `-- PostgreSQL
COPY (SELECT * FROM users WHERE status = 'active')
TO '/path/to/active_users.csv'
WITH (FORMAT CSV, HEADER);

-- MySQL
SELECT * FROM users WHERE status = 'active'
INTO OUTFILE '/path/to/active_users.csv'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

-- SQL Server
bcp "SELECT * FROM users WHERE status = 'active'" 
queryout "/path/to/active_users.csv" -c -t, -r\n`,
        },
        {
          command: 'Backup Database',
          description: 'Create database backup',
          usage: 'Backup commands',
          example: `-- PostgreSQL
pg_dump mydatabase > backup.sql

-- MySQL
mysqldump -u username -p mydatabase > backup.sql

-- SQL Server
BACKUP DATABASE mydatabase 
TO DISK = '/path/to/backup.bak'
WITH FORMAT, INIT;`,
        },
        {
          command: 'Restore Database',
          description: 'Restore database from backup',
          usage: 'Restore commands',
          example: `-- PostgreSQL
psql mydatabase < backup.sql

-- MySQL
mysql -u username -p mydatabase < backup.sql

-- SQL Server
RESTORE DATABASE mydatabase 
FROM DISK = '/path/to/backup.bak'
WITH REPLACE;`,
        },
      ],
    },
    {
      title: 'SQL Optimization Tips',
      commands: [
        {
          command: 'Query Execution Plan',
          description: 'Analyze query performance',
          usage: 'EXPLAIN commands',
          example: `-- PostgreSQL
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';

-- MySQL
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- SQL Server
SET SHOWPLAN_TEXT ON;
SELECT * FROM users WHERE email = 'test@example.com';`,
        },
        {
          command: 'Index Optimization',
          description: 'Optimize index usage',
          usage: 'Index best practices',
          example: `-- Create indexes on frequently queried columns
CREATE INDEX idx_users_email ON users(email);

-- Composite indexes for multiple column queries
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Use covering indexes to avoid table lookups
CREATE INDEX idx_orders_covering ON orders(user_id, status, amount);

-- Monitor index usage
SELECT * FROM pg_stat_user_indexes WHERE relname = 'users';`,
        },
        {
          command: 'Query Optimization',
          description: 'Write efficient queries',
          usage: 'Query optimization techniques',
          example: `-- Use specific columns instead of SELECT *
SELECT id, username, email FROM users;

-- Use LIMIT to restrict results
SELECT * FROM users WHERE status = 'active' LIMIT 100;

-- Use EXISTS instead of IN for subqueries
SELECT * FROM users u 
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);

-- Avoid functions on indexed columns
-- Bad: WHERE YEAR(created_at) = 2024
-- Good: WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01'`,
        },
        {
          command: 'Table Optimization',
          description: 'Optimize table structure',
          usage: 'Table optimization techniques',
          example: `-- Analyze table statistics
ANALYZE users;

-- Update table statistics
UPDATE STATISTICS users;

-- Optimize table (MySQL)
OPTIMIZE TABLE users;

-- Vacuum and analyze (PostgreSQL)
VACUUM ANALYZE users;

-- Rebuild indexes
REINDEX TABLE users;`,
        },
      ],
    },
    {
      title: 'SQL Advanced Functions',
      commands: [
        {
          command: 'JSON Functions',
          description: 'Work with JSON data',
          usage: 'JSON SQL functions',
          example: `-- PostgreSQL
SELECT json_extract(data, '$.name') FROM products;
SELECT json_array_length(items) FROM orders;

-- MySQL
SELECT JSON_EXTRACT(data, '$.name') FROM products;
SELECT JSON_LENGTH(items) FROM orders;

-- SQL Server
SELECT JSON_VALUE(data, '$.name') FROM products;
SELECT JSON_ARRAY_LENGTH(items) FROM orders;`,
        },
        {
          command: 'Array Functions',
          description: 'Work with array data',
          usage: 'Array SQL functions (PostgreSQL)',
          example: `SELECT ARRAY[1, 2, 3, 4, 5];
SELECT ARRAY_AGG(id) FROM users;
SELECT unnest(ARRAY[1, 2, 3]);
SELECT array_length(ARRAY[1, 2, 3], 1);
SELECT array_append(ARRAY[1, 2], 3);`,
        },
        {
          command: 'Regular Expressions',
          description: 'Use regex in SQL',
          usage: 'Regular expression functions',
          example: `-- PostgreSQL
SELECT * FROM users WHERE email ~ '^[A-Za-z0-9._%+-]+@gmail\.com$';
SELECT regexp_replace(phone, '[^0-9]', '', 'g') FROM users;

-- MySQL
SELECT * FROM users WHERE email REGEXP '^[A-Za-z0-9._%+-]+@gmail\\.com$';
SELECT REGEXP_REPLACE(phone, '[^0-9]', '') FROM users;

-- SQL Server
SELECT * FROM users WHERE email LIKE '%@gmail.com';`,
        },
        {
          command: 'Full-Text Search',
          description: 'Implement full-text search',
          usage: 'Full-text search functions',
          example: `-- PostgreSQL
CREATE INDEX idx_products_search ON products USING GIN(to_tsvector('english', name || ' ' || description));
SELECT * FROM products WHERE to_tsvector('english', name || ' ' || description) @@ to_tsquery('english', 'search & term');

-- MySQL
CREATE FULLTEXT INDEX idx_products_search ON products(name, description);
SELECT * FROM products WHERE MATCH(name, description) AGAINST('search term' IN NATURAL LANGUAGE MODE);

-- SQL Server
CREATE FULLTEXT CATALOG ft_catalog AS DEFAULT;
CREATE FULLTEXT INDEX ON products(name, description) KEY INDEX PK_products;
SELECT * FROM products WHERE CONTAINS((name, description), 'search NEAR term');`,
        },
      ],
    },
    {
      title: 'SQL Error Handling',
      commands: [
        {
          command: 'Transaction Error Handling',
          description: 'Handle errors in transactions',
          usage: 'TRY-CATCH blocks',
          example: `-- SQL Server
BEGIN TRY
    BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;
    THROW;
END CATCH;

-- PostgreSQL
DO $$
BEGIN
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Transaction failed: %', SQLERRM;
END $$;`,
        },
        {
          command: 'Custom Error Messages',
          description: 'Raise custom errors',
          usage: 'RAISE and THROW',
          example: `-- PostgreSQL
DO $$
BEGIN
    IF (SELECT balance FROM accounts WHERE id = 1) < 100 THEN
        RAISE EXCEPTION 'Insufficient funds';
    END IF;
END $$;

-- SQL Server
IF (SELECT balance FROM accounts WHERE id = 1) < 100
BEGIN
    THROW 50000, 'Insufficient funds', 1;
END;

-- MySQL
DECLARE balance DECIMAL(10,2);
SELECT balance INTO balance FROM accounts WHERE id = 1;
IF balance < 100 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
END IF;`,
        },
      ],
    },
  ],
};
