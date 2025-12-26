import { Database } from 'lucide-react';

export const mariadbCheatsheet = {
  id: 'mariadb',
  name: 'MariaDB',
  description: 'Master MariaDB from basics to advanced features (MariaDB 10.6-11.x)',
  icon: Database,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with MariaDB',
      commands: [
        {
          command: 'MariaDB Installation',
          description: 'Install MariaDB on different platforms',
          usage: 'Download and install MariaDB server',
          example: `======== Installation Methods ========
# Ubuntu/Debian
sudo apt update
sudo apt install mariadb-server mariadb-client

# macOS with Homebrew
brew install mariadb
brew services start mariadb

# Windows
# Download from https://mariadb.org/download/
# Run installer and follow setup wizard

# CentOS/RHEL
sudo yum install mariadb-server mariadb
sudo systemctl start mariadb
sudo systemctl enable mariadb

# From source (latest version)
wget https://downloads.mariadb.org/f/mariadb-11.2/source/mariadb-11.2.0.tar.gz
tar xzf mariadb-11.2.0.tar.gz
cd mariadb-11.2.0
cmake .
make
sudo make install

======== Verify Installation ========
mysql --version
mariadb --version

# Start MariaDB service
sudo systemctl start mariadb
sudo systemctl status mariadb

# Connect to MariaDB
sudo mysql
# or
mysql -u root -p`,
        },
        {
          command: 'MariaDB Security Setup',
          description: 'Secure MariaDB installation',
          usage: 'mysql_secure_installation script',
          example: `======== Security Configuration ========
# Run security script
sudo mysql_secure_installation

# Manual security steps
sudo mysql

# Set root password
ALTER USER 'root'@'localhost' IDENTIFIED BY 'strong_password';

# Remove anonymous users
DELETE FROM mysql.user WHERE User='';

# Remove remote root login
DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');

# Remove test database
DROP DATABASE IF EXISTS test;
DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';

# Reload privileges
FLUSH PRIVILEGES;

======== Basic Configuration ========
# Main config: /etc/mysql/mariadb.conf.d/50-server.cnf

# Network settings
bind-address = 127.0.0.1
port = 3306

# Memory settings
innodb_buffer_pool_size = 256M
key_buffer_size = 16M
max_connections = 100

# Character set
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

# Logging
log_error = /var/log/mysql/error.log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2`,
        },
        {
          command: 'Database and User Management',
          description: 'Create databases and users',
          usage: 'CREATE DATABASE, CREATE USER, GRANT',
          example: `======== Database Operations ========
# Connect to MariaDB
mysql -u root -p

# Create new database
CREATE DATABASE myapp;
CREATE DATABASE myapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# List databases
SHOW DATABASES;

# Connect to database
USE myapp;

# Drop database
DROP DATABASE myapp;
DROP DATABASE IF EXISTS myapp;

======== User Management ========
# Create new user
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'secure_password';
CREATE USER 'myuser'@'%' IDENTIFIED BY 'secure_password';

# List users
SELECT User, Host FROM mysql.user;

# Modify user
ALTER USER 'myuser'@'localhost' IDENTIFIED BY 'new_password';
ALTER USER 'myuser'@'localhost' PASSWORD EXPIRE;
ALTER USER 'myuser'@'localhost' ACCOUNT LOCK;
ALTER USER 'myuser'@'localhost' ACCOUNT UNLOCK;

# Drop user
DROP USER 'myuser'@'localhost';

======== Privileges ========
# Grant all privileges
GRANT ALL PRIVILEGES ON myapp.* TO 'myuser'@'localhost';

# Grant specific privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON myapp.* TO 'myuser'@'localhost';
GRANT SELECT ON myapp.* TO 'readonly'@'%';

# Grant privileges on specific tables
GRANT SELECT ON myapp.users TO 'reportuser'@'%';

# Show privileges
SHOW GRANTS FOR 'myuser'@'localhost';

# Revoke privileges
REVOKE ALL PRIVILEGES ON myapp.* FROM 'myuser'@'localhost';

# Reload privileges
FLUSH PRIVILEGES;`,
        },
      ],
    },
    {
      title: 'Basic SQL Operations',
      commands: [
        {
          command: 'CREATE TABLE Operations',
          description: 'Create and manage tables',
          usage: 'CREATE TABLE, ALTER TABLE, DROP TABLE',
          example: `======== Basic Table Creation ========
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) CHECK (price >= 0),
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category_id)
);

======== Advanced Table Features ========
# Table with constraints
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),
    status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_date (user_id, order_date)
);

# Temporary table
CREATE TEMPORARY TABLE temp_import (
    id INT,
    name VARCHAR(100),
    value DECIMAL(10,2)
);

# Table with generated columns (MariaDB 10.2+)
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    tax_rate DECIMAL(3,2) DEFAULT 0.20,
    price_with_tax DECIMAL(10,2) GENERATED ALWAYS AS (price * (1 + tax_rate)) STORED
);

======== Table Management ========
# Add column
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users ADD COLUMN age INT CHECK (age >= 0);

# Modify column
ALTER TABLE users MODIFY COLUMN phone VARCHAR(25);
ALTER TABLE users CHANGE COLUMN email user_email VARCHAR(100) NOT NULL;

# Drop column
ALTER TABLE users DROP COLUMN phone;

# Add index
ALTER TABLE users ADD INDEX idx_username (username);
ALTER TABLE users ADD UNIQUE INDEX idx_email (email);

# Rename table
RENAME TABLE users TO accounts;

# Drop table
DROP TABLE users;
DROP TABLE IF EXISTS users CASCADE;`,
        },
        {
          command: 'Data Manipulation',
          description: 'INSERT, UPDATE, DELETE operations',
          usage: 'Basic data manipulation commands',
          example: `======== INSERT Operations ========
# Single row insert
INSERT INTO users (username, email, password_hash)
VALUES ('john_doe', 'john@example.com', 'hashed_password');

# Multiple rows insert
INSERT INTO products (name, description, price) VALUES
('Laptop', 'High-performance laptop', 999.99),
('Mouse', 'Wireless optical mouse', 29.99),
('Keyboard', 'Mechanical keyboard', 79.99);

# Insert with ON DUPLICATE KEY UPDATE
INSERT INTO products (id, name, price) 
VALUES (1, 'Updated Product', 199.99)
ON DUPLICATE KEY UPDATE 
name = VALUES(name), price = VALUES(price);

# Insert from SELECT
INSERT INTO archived_users 
SELECT * FROM users WHERE created_at < '2020-01-01';

# Insert with IGNORE (ignore duplicate errors)
INSERT IGNORE INTO users (username, email) 
VALUES ('john_doe', 'john@example.com');

======== UPDATE Operations ========
# Simple update
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

# Update multiple columns
UPDATE products 
SET price = price * 1.1, updated_at = CURRENT_TIMESTAMP 
WHERE category_id = 5;

# Update with JOIN (MariaDB 10.2+)
UPDATE users u
JOIN orders o ON u.id = o.user_id
SET u.last_order_date = o.order_date
WHERE o.status = 'delivered';

# UPDATE with ORDER BY and LIMIT
UPDATE products 
SET price = price * 0.9 
ORDER BY price DESC 
LIMIT 10;

======== DELETE Operations ========
# Simple delete
DELETE FROM users WHERE id = 1;

# Delete with condition
DELETE FROM orders WHERE order_date < '2020-01-01';

# Delete with JOIN
DELETE users FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE orders.id IS NULL;

# Delete with ORDER BY and LIMIT
DELETE FROM logs 
ORDER BY created_at ASC 
LIMIT 1000;

# Truncate table (faster for all rows)
TRUNCATE TABLE users;`,
        },
        {
          command: 'SELECT Queries',
          description: 'Retrieve and filter data',
          usage: 'SELECT, WHERE, ORDER BY, LIMIT',
          example: `======== Basic SELECT ========
# Select all columns
SELECT * FROM users;

# Select specific columns
SELECT id, username, email FROM users;

# With WHERE clause
SELECT * FROM users WHERE age > 25;
SELECT * FROM products WHERE price BETWEEN 50 AND 200;
SELECT * FROM orders WHERE status IN ('pending', 'confirmed');

# Pattern matching
SELECT * FROM users WHERE username LIKE 'john%';
SELECT * FROM users WHERE email REGEXP '.*@gmail\\.com';

# REGEXP operator (MariaDB extension)
SELECT * FROM products WHERE name REGEXP '^Lap.*';

======== Ordering and Limiting ========
# Order by
SELECT * FROM users ORDER BY created_at DESC;
SELECT * FROM products ORDER BY price ASC, name ASC;

# Limit and offset
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 20;

# Distinct
SELECT DISTINCT category_id FROM products;
SELECT DISTINCT status, COUNT(*) FROM orders GROUP BY status;

======== Aggregate Functions ========
# Basic aggregates
SELECT COUNT(*) FROM users;
SELECT COUNT(DISTINCT email) FROM users;
SELECT AVG(price) FROM products;
SELECT MIN(price), MAX(price) FROM products;
SELECT SUM(total_amount) FROM orders;

# Group by
SELECT category_id, COUNT(*), AVG(price) 
FROM products 
GROUP BY category_id 
HAVING COUNT(*) > 5;

# WITH ROLLUP for subtotals
SELECT category_id, COUNT(*) 
FROM products 
GROUP BY category_id WITH ROLLUP;

======== Window Functions (MariaDB 10.2+) ========
# ROW_NUMBER
SELECT name, price,
       ROW_NUMBER() OVER (ORDER BY price DESC) as price_rank
FROM products;

# Running total
SELECT order_date, total_amount,
       SUM(total_amount) OVER (ORDER BY order_date) as running_total
FROM orders;`,
        },
      ],
    },
    {
      title: 'MariaDB Data Types',
      commands: [
        {
          command: 'Numeric Data Types',
          description: 'Integer and numeric types',
          usage: 'INTEGER, BIGINT, DECIMAL, FLOAT, DOUBLE',
          example: `======== Integer Types ========
CREATE TABLE numbers (
    tiny_int TINYINT,        -- 1 byte, -128 to 127 (signed) or 0-255 (unsigned)
    small_int SMALLINT,      -- 2 bytes
    regular_int INT,         -- 4 bytes
    big_int BIGINT,          -- 8 bytes
    boolean BOOLEAN,         -- Synonym for TINYINT(1)
    auto_id INT AUTO_INCREMENT  -- Auto-incrementing
);

# Unsigned integers
CREATE TABLE counters (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    count INT UNSIGNED DEFAULT 0
);

======== Decimal Types ========
CREATE TABLE financial (
    price DECIMAL(10,2),     -- 10 total digits, 2 after decimal
    amount NUMERIC(15,4),    -- Same as DECIMAL
    exact_value NUMERIC,     -- Default precision (10 digits)
    float_val FLOAT,         -- 4 bytes
    double_val DOUBLE        -- 8 bytes
);

# Fixed-point vs floating-point
INSERT INTO financial (price, float_val) 
VALUES (99.99, 99.99);  -- DECIMAL stores exact, FLOAT may store 99.989999

======== Numeric Functions ========
# Basic functions
SELECT ROUND(3.14159, 2);     -- 3.14
SELECT CEIL(3.14);            -- 4
SELECT FLOOR(3.14);           -- 3
SELECT ABS(-5);               -- 5
SELECT MOD(10, 3);            -- 1
SELECT POWER(2, 3);           -- 8
SELECT SQRT(16);              -- 4

# Trigonometric functions
SELECT SIN(PI()/2);           -- 1
SELECT COS(0);                -- 1
SELECT TAN(PI()/4);           -- 1

# Random numbers
SELECT RAND();                -- Random double between 0 and 1
SELECT FLOOR(RAND() * 100) + 1;  -- Random integer 1-100
SELECT RAND(10);              -- Seeded random number`,
        },
        {
          command: 'Character Data Types',
          description: 'Text and character types',
          usage: 'VARCHAR, TEXT, CHAR, ENUM, SET',
          example: `======== Text Types ========
CREATE TABLE text_examples (
    fixed_char CHAR(10),      -- Fixed length, padded with spaces
    variable_char VARCHAR(255), -- Variable length, max 255
    tiny_text TINYTEXT,       -- Up to 255 characters
    regular_text TEXT,        -- Up to 65,535 characters
    medium_text MEDIUMTEXT,   -- Up to 16,777,215 characters
    long_text LONGTEXT        -- Up to 4,294,967,295 characters
);

======== String Functions ========
# Basic string operations
SELECT LENGTH('Hello World');           -- 11
SELECT UPPER('hello');                  -- HELLO
SELECT LOWER('HELLO');                  -- hello
SELECT CONCAT('Hello', ' ', 'World');   -- Hello World

# String manipulation
SELECT SUBSTRING('Hello World', 1, 5);  -- Hello
SELECT LEFT('Hello World', 5);          -- Hello
SELECT RIGHT('Hello World', 5);         -- World
SELECT MID('Hello World', 7, 5);        -- World

# Search and replace
SELECT POSITION('World' IN 'Hello World'); -- 7
SELECT REPLACE('Hello World', 'World', 'MariaDB'); -- Hello MariaDB
SELECT INSERT('Hello World', 7, 5, 'MariaDB'); -- Hello MariaDB

# Trim functions
SELECT TRIM('  hello  ');               -- hello
SELECT LTRIM('  hello');                -- hello
SELECT RTRIM('hello  ');                -- hello

# String comparison
SELECT STRCMP('apple', 'banana');       -- -1 (first < second)
SELECT STRCMP('banana', 'apple');       -- 1 (first > second)
SELECT STRCMP('apple', 'apple');        -- 0 (equal)

======== ENUM and SET Types ========
CREATE TABLE person (
    name VARCHAR(50),
    gender ENUM('male', 'female', 'other'),
    hobbies SET('reading', 'sports', 'music', 'travel')
);

INSERT INTO person VALUES ('John', 'male', 'reading,sports');
SELECT * FROM person WHERE gender = 'male';
SELECT * FROM person WHERE FIND_IN_SET('reading', hobbies) > 0;`,
        },
        {
          command: 'Date and Time Types',
          description: 'Temporal data types',
          usage: 'DATE, TIME, DATETIME, TIMESTAMP, YEAR',
          example: `======== Date/Time Types ========
CREATE TABLE temporal_data (
    date_field DATE,              -- YYYY-MM-DD
    time_field TIME,              -- HH:MM:SS
    datetime_field DATETIME,      -- YYYY-MM-DD HH:MM:SS
    timestamp_field TIMESTAMP,    -- YYYY-MM-DD HH:MM:SS, auto-updated
    year_field YEAR               -- YYYY (1901-2155)
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    event_date DATE,
    start_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

======== Current Date/Time ========
SELECT CURRENT_DATE();           -- Current date
SELECT CURRENT_TIME();           -- Current time
SELECT CURRENT_TIMESTAMP();      -- Current date and time
SELECT NOW();                    -- Current timestamp
SELECT CURDATE();                -- Current date
SELECT CURTIME();                -- Current time
SELECT SYSDATE();                -- Current timestamp

======== Date/Time Functions ========
# Extraction
SELECT EXTRACT(YEAR FROM CURRENT_DATE);     -- Current year
SELECT EXTRACT(MONTH FROM CURRENT_DATE);    -- Current month
SELECT EXTRACT(DAY FROM CURRENT_DATE);      -- Current day
SELECT EXTRACT(HOUR FROM NOW());            -- Current hour

# MariaDB specific functions
SELECT YEAR(CURRENT_DATE);                  -- Current year
SELECT MONTH(CURRENT_DATE);                 -- Current month
SELECT DAYNAME(CURRENT_DATE);               -- Day name
SELECT MONTHNAME(CURRENT_DATE);             -- Month name

# Date arithmetic
SELECT DATE_ADD(CURRENT_DATE, INTERVAL 1 DAY);     -- Tomorrow
SELECT DATE_SUB(CURRENT_DATE, INTERVAL 1 WEEK);    -- Last week
SELECT CURRENT_DATE + INTERVAL 2 MONTH;            -- In 2 months

# Date formatting
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s');   -- 2023-12-25 10:30:00
SELECT TIME_FORMAT(NOW(), '%H:%i:%s');             -- 10:30:00

# Date calculations
SELECT DATEDIFF('2023-12-31', '2023-01-01');       -- Days between dates
SELECT TIMEDIFF('12:00:00', '10:30:00');           -- Time difference
SELECT FROM_DAYS(730000);                          -- Date from day number
SELECT TO_DAYS('2023-12-25');                      -- Day number from date

# Timestamp functions
SELECT UNIX_TIMESTAMP();                           -- Unix timestamp
SELECT FROM_UNIXTIME(1703500200);                  -- Date from Unix timestamp`,
        },
      ],
    },
    {
      title: 'Joins and Relationships',
      commands: [
        {
          command: 'INNER JOIN Operations',
          description: 'Combine data from multiple tables',
          usage: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN',
          example: `======== Basic INNER JOIN ========
SELECT u.username, p.name, p.price
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN products p ON o.product_id = p.id;

# Multiple joins with aliases
SELECT u.username, o.id as order_id, o.total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.status = 'completed';

# JOIN with USING (when column names match)
SELECT users.id, username, order_date
FROM users
INNER JOIN orders USING (id);

======== OUTER JOINs ========
# LEFT JOIN (all users, with their orders if any)
SELECT u.username, o.id as order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

# RIGHT JOIN (all orders, with user info if any)
SELECT u.username, o.id as order_id
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

# Find users without orders
SELECT u.username
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;

# CROSS JOIN (Cartesian product)
SELECT u.username, p.name
FROM users u
CROSS JOIN products p
LIMIT 10;

======== NATURAL JOIN ========
# Natural join (automatically joins on columns with same names)
SELECT * FROM users NATURAL JOIN profiles;

# Natural left join
SELECT * FROM users NATURAL LEFT JOIN orders;`,
        },
        {
          command: 'Advanced Join Techniques',
          description: 'Complex join patterns and optimization',
          usage: 'Self joins, subquery joins, join optimization',
          example: `======== Self JOIN ========
# Manager-employee relationship
SELECT e.name as employee, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

# Find duplicate records
SELECT a.id, a.name, b.id as duplicate_id
FROM users a
JOIN users b ON a.email = b.email AND a.id < b.id;

======== JOIN with Subqueries ========
# Join with derived table
SELECT u.username, order_summary.total_orders, order_summary.total_spent
FROM users u
JOIN (
    SELECT user_id, COUNT(*) as total_orders, SUM(total_amount) as total_spent
    FROM orders
    GROUP BY user_id
) order_summary ON u.id = order_summary.user_id;

# JOIN with subquery in WHERE clause
SELECT u.username
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.total_amount > (
    SELECT AVG(total_amount) FROM orders
);

======== Multiple JOIN Conditions ========
# Complex join conditions
SELECT u.username, o.id, p.name
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN products p ON o.product_id = p.id AND p.category_id = 5
WHERE u.status = 'active';

======== JOIN Optimization ========
# Use STRAIGHT_JOIN to force join order
SELECT STRAIGHT_JOIN u.username, o.total_amount
FROM users u
STRAIGHT_JOIN orders o ON u.id = o.user_id;

# Join with index hints
SELECT u.username, o.total_amount
FROM users u FORCE INDEX (idx_username)
INNER JOIN orders o USE INDEX (idx_user_id) ON u.id = o.user_id;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Query Techniques',
      commands: [
        {
          command: 'Subqueries and Derived Tables',
          description: 'Complex queries with subqueries',
          usage: 'Subqueries in SELECT, FROM, WHERE clauses',
          example: `======== Subquery in SELECT Clause ========
SELECT u.username,
       (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count,
       (SELECT SUM(total_amount) FROM orders WHERE user_id = u.id) as total_spent
FROM users u;

# Correlated subquery
SELECT u.username,
       (SELECT AVG(total_amount) FROM orders WHERE user_id = u.id) as avg_order
FROM users u
WHERE EXISTS (SELECT 1 FROM orders WHERE user_id = u.id);

======== Subquery in FROM Clause (Derived Table) ========
SELECT user_stats.username, user_stats.order_count, user_stats.avg_amount
FROM (
    SELECT u.username,
           COUNT(o.id) as order_count,
           AVG(o.total_amount) as avg_amount
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.username
) user_stats
WHERE user_stats.order_count > 5;

======== Subquery in WHERE Clause ========
# IN subquery
SELECT * FROM products
WHERE category_id IN (
    SELECT id FROM categories WHERE name IN ('Electronics', 'Books')
);

# ANY/ALL subqueries
SELECT * FROM products
WHERE price > ALL (
    SELECT AVG(price) FROM products GROUP BY category_id
);

# EXISTS subquery
SELECT u.username
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id AND o.total_amount > 1000
);

# NOT EXISTS
SELECT u.username
FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,
        },
        {
          command: 'Common Table Expressions (CTE)',
          description: 'Recursive and non-recursive CTEs',
          usage: 'WITH clause for complex queries',
          example: `======== Basic CTE ========
WITH active_users AS (
    SELECT id, username FROM users 
    WHERE last_login > CURRENT_DATE - INTERVAL '30 days'
),
user_orders AS (
    SELECT u.id, u.username, COUNT(o.id) as order_count
    FROM active_users u
    LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.username
)
SELECT username, order_count
FROM user_orders
WHERE order_count > 0;

======== Recursive CTE (Hierarchy) ========
WITH RECURSIVE employee_hierarchy AS (
    -- Base case: top-level managers
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees under managers
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;

======== CTE for Data Analysis ========
WITH monthly_sales AS (
    SELECT 
        DATE_FORMAT(order_date, '%Y-%m') as month,
        SUM(total_amount) as total_sales,
        COUNT(*) as order_count
    FROM orders
    GROUP BY DATE_FORMAT(order_date, '%Y-%m')
),
sales_growth AS (
    SELECT 
        month,
        total_sales,
        LAG(total_sales) OVER (ORDER BY month) as prev_sales,
        ROUND(((total_sales - LAG(total_sales) OVER (ORDER BY month)) / 
              LAG(total_sales) OVER (ORDER BY month)) * 100, 2) as growth_percent
    FROM monthly_sales
)
SELECT month, total_sales, growth_percent
FROM sales_growth
WHERE prev_sales IS NOT NULL;`,
        },
        {
          command: 'Window Functions',
          description: 'Advanced analytical functions',
          usage: 'ROW_NUMBER, RANK, LAG, LEAD, window aggregates',
          example: `======== Ranking Functions ========
# ROW_NUMBER (unique ranking)
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num
FROM employees;

# RANK (same values get same rank, gaps in ranking)
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) as rank_num
FROM employees;

# DENSE_RANK (same values get same rank, no gaps)
SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

# NTILE (divide into groups)
SELECT name, salary,
       NTILE(4) OVER (ORDER BY salary DESC) as quartile
FROM employees;

======== Analytic Functions ========
# LAG and LEAD
SELECT order_date, total_amount,
       LAG(total_amount) OVER (ORDER BY order_date) as prev_amount,
       LEAD(total_amount) OVER (ORDER BY order_date) as next_amount
FROM orders;

# FIRST_VALUE and LAST_VALUE
SELECT product_name, category,
       FIRST_VALUE(product_name) OVER (
           PARTITION BY category 
           ORDER BY price DESC
       ) as most_expensive_in_category
FROM products;

======== Window Aggregates ========
# Running total
SELECT order_date, total_amount,
       SUM(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) as running_total,
       AVG(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING
       ) as moving_avg
FROM orders;

# Window frames
SELECT product_name, price,
       AVG(price) OVER (
           ORDER BY price 
           ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
       ) as local_avg,
       COUNT(*) OVER (
           ORDER BY price 
           RANGE BETWEEN 10 PRECEDING AND 10 FOLLOWING
       ) as nearby_count
FROM products;`,
        },
        {
          command: 'Conditional Logic',
          description: 'CASE statements and conditional expressions',
          usage: 'CASE, IF, IFNULL, COALESCE',
          example: `======== CASE Statements ========
# Simple CASE
SELECT name, salary,
       CASE salary
           WHEN 0 THEN 'Unpaid'
           WHEN 50000 THEN 'Entry Level'
           WHEN 75000 THEN 'Mid Level'
           ELSE 'Senior Level'
       END as salary_level
FROM employees;

# Searched CASE
SELECT name, score,
       CASE 
           WHEN score >= 90 THEN 'A'
           WHEN score >= 80 THEN 'B'
           WHEN score >= 70 THEN 'C'
           WHEN score >= 60 THEN 'D'
           ELSE 'F'
       END as grade
FROM students;

# CASE in WHERE clause
SELECT * FROM products
WHERE CASE 
        WHEN category = 'Electronics' THEN price < 1000
        WHEN category = 'Books' THEN price < 50
        ELSE price < 100
    END;

======== Conditional Functions ========
# IF function
SELECT name, salary,
       IF(salary > 75000, 'High', 'Standard') as salary_grade
FROM employees;

# IFNULL and COALESCE
SELECT name, COALESCE(phone, 'N/A') as phone_number
FROM customers;

SELECT COALESCE(nickname, first_name, 'Unknown') as display_name
FROM users;

# NULLIF function
SELECT NULLIF(price, 0) as actual_price
FROM products;

# GREATEST and LEAST
SELECT GREATEST(price, discount_price, sale_price) as max_price
FROM products;

SELECT LEAST(start_date, end_date, CURRENT_DATE) as earliest_date
FROM events;

======== Conditional Aggregation ========
SELECT 
    COUNT(*) as total_orders,
    COUNT(IF(status = 'completed', 1, NULL)) as completed_orders,
    COUNT(IF(total_amount > 1000, 1, NULL)) as large_orders,
    SUM(IF(status = 'pending', total_amount, 0)) as pending_total
FROM orders;

# Conditional SUM with CASE
SELECT 
    SUM(CASE WHEN status = 'completed' THEN total_amount ELSE 0 END) as completed_total,
    SUM(CASE WHEN status = 'pending' THEN total_amount ELSE 0 END) as pending_total
FROM orders;`,
        },
      ],
    },
    {
      title: 'Indexing and Performance',
      commands: [
        {
          command: 'Creating Indexes',
          description: 'Improve query performance with indexes',
          usage: 'CREATE INDEX, different index types',
          example: `======== Basic Indexes ========
# B-tree index (default)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_products_category ON products(category_id);

# Composite index
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);
CREATE INDEX idx_products_category_price ON products(category_id, price);

# Unique index
CREATE UNIQUE INDEX idx_users_username ON users(username);
CREATE UNIQUE INDEX idx_products_sku ON products(sku);

# Partial index (MariaDB 5.3+)
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';

======== Functional Indexes (MariaDB 10.7+) ========
# Index on expression
CREATE INDEX idx_users_lower_email ON users((LOWER(email)));
CREATE INDEX idx_products_upper_name ON products((UPPER(name)));

# Index on computed column
CREATE INDEX idx_orders_total_tax ON orders((total_amount * 0.1));

======== Full-text Indexes ========
# Full-text index for text search
CREATE FULLTEXT INDEX idx_articles_content ON articles(content);
CREATE FULLTEXT INDEX idx_products_search ON products(name, description);

# Full-text search
SELECT * FROM articles 
WHERE MATCH(content) AGAINST('database optimization' IN NATURAL LANGUAGE MODE);

SELECT * FROM products 
WHERE MATCH(name, description) AGAINST('laptop computer' IN BOOLEAN MODE);

======== Spatial Indexes ========
# Spatial index for geographic data
CREATE SPATIAL INDEX idx_locations_geometry ON locations(geometry);

# Spatial queries
SELECT * FROM locations 
WHERE ST_Contains(geometry, ST_GeomFromText('POINT(-74.0060 40.7128)'));`,
        },
        {
          command: 'Index Management',
          description: 'Monitor and maintain indexes',
          usage: 'Analyze, rebuild, and optimize indexes',
          example: `======== Index Information ========
# List indexes on table
SHOW INDEX FROM users;
SHOW INDEX FROM products FROM myapp;

# Index cardinality
SELECT table_name, index_name, cardinality
FROM information_schema.statistics 
WHERE table_schema = 'myapp' AND table_name = 'users';

# Index usage (requires performance schema)
SELECT * FROM performance_schema.table_io_waits_summary_by_index_usage
WHERE object_schema = 'myapp';

======== Index Maintenance ========
# Drop and recreate index
DROP INDEX idx_users_email ON users;
CREATE INDEX idx_users_email ON users(email);

# Analyze table (update statistics)
ANALYZE TABLE users;
ANALYZE TABLE products, orders;

# Optimize table (reorganize and rebuild)
OPTIMIZE TABLE users;
OPTIMIZE TABLE products QUICK;  -- Quick optimization

# Check table
CHECK TABLE users;
CHECK TABLE products QUICK;

======== Index Optimization ========
# Force index usage
SELECT * FROM users FORCE INDEX (idx_email) WHERE email = 'test@example.com';

# Ignore index
SELECT * FROM products IGNORE INDEX (idx_category) WHERE category_id = 5;

# Index merge optimization
SELECT * FROM orders 
WHERE user_id = 123 OR order_date > '2023-01-01';

# Explain query execution plan
EXPLAIN SELECT * FROM orders WHERE user_id = 123;
EXPLAIN EXTENDED SELECT * FROM products WHERE category_id = 5 AND price > 100;

# Show warnings from EXPLAIN
SHOW WARNINGS;`,
        },
      ],
    },
    {
      title: 'Transactions and Concurrency',
      commands: [
        {
          command: 'Transaction Control',
          description: 'Manage transactions and data consistency',
          usage: 'BEGIN, COMMIT, ROLLBACK, SAVEPOINT',
          example: `======== Basic Transactions ========
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 
WHERE id = 1 AND balance >= 100;

UPDATE accounts SET balance = balance + 100 
WHERE id = 2;

COMMIT;

# Alternative syntax
BEGIN;

UPDATE products SET stock = stock - 1 
WHERE id = 1 AND stock > 0;

INSERT INTO orders (product_id, quantity) 
VALUES (1, 1);

ROLLBACK;

======== Transaction with Error Handling ========
START TRANSACTION;

DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
BEGIN
    ROLLBACK;
    SELECT 'Transaction failed' as result;
END;

UPDATE products SET stock = stock - 1 
WHERE id = 1 AND stock > 0;

INSERT INTO orders (product_id, quantity, total_amount)
VALUES (1, 1, (SELECT price FROM products WHERE id = 1));

COMMIT;

======== Savepoints ========
START TRANSACTION;

INSERT INTO users (username, email) 
VALUES ('user1', 'user1@example.com');

SAVEPOINT sp1;

INSERT INTO users (username, email) 
VALUES ('user2', 'user2@example.com');

-- Rollback to savepoint
ROLLBACK TO SAVEPOINT sp1;

INSERT INTO users (username, email) 
VALUES ('user3', 'user3@example.com');

COMMIT;

======== Transaction Isolation Levels ========
# Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

# Show current isolation level
SELECT @@transaction_isolation;

# Set session isolation level
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;`,
        },
        {
          command: 'Locking and Concurrency',
          description: 'Manage concurrent access to data',
          usage: 'LOCK TABLES, SELECT FOR UPDATE, NOWAIT',
          example: `======== Table Locks ========
# Lock table in write mode
LOCK TABLES users WRITE;

# Lock multiple tables
LOCK TABLES users WRITE, orders READ;

# Release locks
UNLOCK TABLES;

# Read lock
LOCK TABLES products READ;

======== Row-Level Locking ========
# SELECT FOR UPDATE (lock selected rows)
SELECT * FROM accounts 
WHERE id = 1 
FOR UPDATE;

# SELECT FOR UPDATE NOWAIT (fail if can't lock)
SELECT * FROM accounts 
WHERE id = 1 
FOR UPDATE NOWAIT;

# SELECT FOR UPDATE SKIP LOCKED (skip locked rows)
SELECT * FROM orders 
WHERE status = 'pending' 
FOR UPDATE SKIP LOCKED 
LIMIT 10;

# LOCK IN SHARE MODE (shared lock)
SELECT * FROM products 
WHERE category_id = 5 
LOCK IN SHARE MODE;

======== Deadlock Detection ========
# Check for locks
SHOW ENGINE INNODB STATUS;

# Set lock timeout
SET innodb_lock_wait_timeout = 50;
SET lock_wait_timeout = 10;

# Check current locks
SELECT * FROM information_schema.innodb_locks;
SELECT * FROM information_schema.innodb_lock_waits;

# Transaction with timeout
START TRANSACTION;
SET innodb_lock_wait_timeout = 5;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- If lock can't be acquired in 5 seconds, transaction fails`,
        },
      ],
    },
    {
      title: 'Views and Stored Procedures',
      commands: [
        {
          command: 'Creating Views',
          description: 'Virtual tables based on queries',
          usage: 'CREATE VIEW, REPLACE VIEW, DROP VIEW',
          example: `======== Basic Views ========
# Simple view
CREATE VIEW active_users AS
SELECT id, username, email, last_login
FROM users
WHERE status = 'active';

# View with joins
CREATE VIEW user_orders AS
SELECT u.id as user_id, u.username, 
       o.id as order_id, o.total_amount, o.order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

# View with aggregates
CREATE VIEW user_summary AS
SELECT u.id, u.username,
       COUNT(o.id) as order_count,
       COALESCE(SUM(o.total_amount), 0) as total_spent,
       MAX(o.order_date) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;

# View with conditions
CREATE VIEW recent_orders AS
SELECT * FROM orders 
WHERE order_date >= CURRENT_DATE - INTERVAL '30 days'
WITH CHECK OPTION;

======== View Management ========
# Replace view
CREATE OR REPLACE VIEW active_users AS
SELECT id, username, email, last_login, created_at
FROM users
WHERE status = 'active' AND last_login > CURRENT_DATE - INTERVAL '90 days';

# Check view definition
SHOW CREATE VIEW active_users;

# Drop view
DROP VIEW active_users;
DROP VIEW IF EXISTS user_orders;

======== Updatable Views ========
# Simple updatable view
CREATE VIEW user_profiles AS
SELECT id, username, email, phone
FROM users;

INSERT INTO user_profiles (username, email) 
VALUES ('newuser', 'new@example.com');

# View with triggers for updates
CREATE VIEW order_summary AS
SELECT user_id, COUNT(*) as order_count, SUM(total_amount) as total
FROM orders
GROUP BY user_id;`,
        },
        {
          command: 'Stored Procedures',
          description: 'Create and use stored procedures',
          usage: 'CREATE PROCEDURE, CALL, OUT parameters',
          example: `======== Basic Procedure ========
DELIMITER //
CREATE PROCEDURE get_user_orders(IN user_id INT)
BEGIN
    SELECT o.id, o.total_amount, o.order_date
    FROM orders o
    WHERE o.user_id = user_id
    ORDER BY o.order_date DESC;
END //
DELIMITER ;

# Call procedure
CALL get_user_orders(123);

======== Procedure with Parameters ========
DELIMITER //
CREATE PROCEDURE create_order(
    IN p_user_id INT,
    IN p_product_id INT,
    IN p_quantity INT,
    OUT p_order_id INT
)
BEGIN
    DECLARE v_price DECIMAL(10,2);
    DECLARE v_stock INT;
    
    -- Get product price and stock
    SELECT price, stock INTO v_price, v_stock
    FROM products
    WHERE id = p_product_id;
    
    -- Check stock
    IF v_stock < p_quantity THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient stock';
    END IF;
    
    -- Create order
    INSERT INTO orders (user_id, total_amount, status)
    VALUES (p_user_id, v_price * p_quantity, 'pending');
    
    SET p_order_id = LAST_INSERT_ID();
    
    -- Update stock
    UPDATE products 
    SET stock = stock - p_quantity 
    WHERE id = p_product_id;
END //
DELIMITER ;

# Call procedure with output parameter
CALL create_order(123, 1, 2, @order_id);
SELECT @order_id;

======== Procedure with Exception Handling ========
DELIMITER //
CREATE PROCEDURE transfer_funds(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(10,2),
    OUT success BOOLEAN
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET success = FALSE;
    END;
    
    START TRANSACTION;
    
    UPDATE accounts 
    SET balance = balance - amount 
    WHERE id = from_account AND balance >= amount;
    
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
    END IF;
    
    UPDATE accounts 
    SET balance = balance + amount 
    WHERE id = to_account;
    
    COMMIT;
    SET success = TRUE;
END //
DELIMITER ;`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced MariaDB Features',
      commands: [
        {
          command: 'JSON Functions',
          description: 'Work with JSON data in MariaDB',
          usage: 'JSON functions and operators',
          example: `======== JSON Data Type ========
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    attributes JSON
);

# Insert JSON data
INSERT INTO products (name, attributes) 
VALUES ('Laptop', '{
    "brand": "Dell",
    "specs": {
        "cpu": "Intel i7",
        "ram": "16GB",
        "storage": "512GB SSD"
    },
    "price": 999.99,
    "available": true
}');

======== JSON Functions ========
# Extract JSON values
SELECT name, 
       JSON_EXTRACT(attributes, '$.brand') as brand,
       JSON_EXTRACT(attributes, '$.specs.cpu') as cpu
FROM products;

# Extract as text (unquoted)
SELECT name,
       JSON_UNQUOTE(JSON_EXTRACT(attributes, '$.brand')) as brand_text
FROM products;

# Check for key existence
SELECT name 
FROM products 
WHERE JSON_CONTAINS_PATH(attributes, 'one', '$.price');

# Search JSON values
SELECT name 
FROM products 
WHERE JSON_EXTRACT(attributes, '$.brand') = '"Dell"';

# Modify JSON data
UPDATE products 
SET attributes = JSON_SET(attributes, '$.price', '899.99')
WHERE id = 1;

UPDATE products 
SET attributes = JSON_REMOVE(attributes, '$.available')
WHERE id = 1;

# JSON aggregation
SELECT JSON_ARRAYAGG(name) as product_names FROM products;

SELECT JSON_OBJECT(
    'product', name,
    'price', JSON_EXTRACT(attributes, '$.price')
) as product_info FROM products;

======== JSON Search Functions ========
# JSON_CONTAINS
SELECT * FROM products 
WHERE JSON_CONTAINS(attributes, '"Intel"', '$.specs');

# JSON_SEARCH
SELECT name,
       JSON_SEARCH(attributes, 'one', 'Dell') as brand_path
FROM products;

# JSON_KEYS and JSON_LENGTH
SELECT name,
       JSON_KEYS(attributes) as keys,
       JSON_LENGTH(attributes) as key_count
FROM products;`,
        },
        {
          command: 'Virtual Columns',
          description: 'Computed columns in MariaDB',
          usage: 'GENERATED ALWAYS AS clauses',
          example: `======== Generated Columns ========
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    tax_rate DECIMAL(3,2) DEFAULT 0.20,
    price_with_tax DECIMAL(10,2) GENERATED ALWAYS AS (price * (1 + tax_rate)) STORED,
    discount_price DECIMAL(10,2) GENERATED ALWAYS AS (price * 0.9) VIRTUAL,
    category VARCHAR(50),
    full_description VARCHAR(200) GENERATED ALWAYS AS (CONCAT(name, ' - ', category)) STORED
);

# Insert data (only base columns)
INSERT INTO products (name, price, category) 
VALUES ('Laptop', 999.99, 'Electronics');

# Generated columns are automatically calculated
SELECT name, price, price_with_tax, discount_price, full_description
FROM products;

======== Update Generated Columns ========
# When base data changes, generated columns update automatically
UPDATE products SET price = 1099.99 WHERE id = 1;

# Generated columns with expressions
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10,2),
    order_date DATE,
    month_name VARCHAR(20) GENERATED ALWAYS AS (MONTHNAME(order_date)) STORED,
    quarter INT GENERATED ALWAYS AS (QUARTER(order_date)) STORED,
    is_recent BOOLEAN GENERATED ALWAYS AS (order_date >= CURRENT_DATE - INTERVAL '30 days') STORED
);

======== Generated Column Indexes ========
# Index generated columns for performance
CREATE INDEX idx_products_price_with_tax ON products(price_with_tax);
CREATE INDEX idx_orders_quarter ON orders(quarter);

# Use generated columns in queries
SELECT * FROM products 
WHERE price_with_tax > 1000;

SELECT * FROM orders 
WHERE quarter = 4 AND is_recent = TRUE;`,
        },
        {
          command: 'Window Functions Advanced',
          description: 'Advanced window function features',
          usage: 'Complex window frames and analytics',
          example: `======== Advanced Window Frames ========
# Different frame types
SELECT order_date, total_amount,
       SUM(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) as running_total_rows,
       SUM(total_amount) OVER (
           ORDER BY order_date 
           RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) as running_total_range,
       SUM(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN 3 PRECEDING AND 1 FOLLOWING
       ) as moving_window
FROM orders;

# Window functions with GROUPS
SELECT department, salary,
       AVG(salary) OVER (
           PARTITION BY department 
           ORDER BY salary 
           GROUPS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) as dept_avg_groups
FROM employees;

======== Distribution Functions ========
SELECT product_name, price,
       PERCENT_RANK() OVER (ORDER BY price) as percent_rank,
       CUME_DIST() OVER (ORDER BY price) as cumulative_dist,
       NTILE(10) OVER (ORDER BY price) as decile
FROM products;

# First and last values in window
SELECT order_date, total_amount,
       FIRST_VALUE(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
       ) as first_amount,
       LAST_VALUE(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
       ) as last_amount
FROM orders;

======== Window Functions with Filtering ========
# Window functions in WHERE clause (using subquery)
SELECT * FROM (
    SELECT product_name, price,
           DENSE_RANK() OVER (ORDER BY price DESC) as price_rank
    FROM products
) ranked
WHERE price_rank <= 5;

# Window functions with CASE
SELECT product_name, price,
       CASE 
           WHEN price < AVG(price) OVER () THEN 'Below Average'
           WHEN price > AVG(price) OVER () THEN 'Above Average'
           ELSE 'Average'
       END as price_category
FROM products;`,
        },
      ],
    },
    {
      title: 'MariaDB Security',
      commands: [
        {
          command: 'User Authentication',
          description: 'Advanced user management and authentication',
          usage: 'Authentication plugins, password policies',
          example: `======== Authentication Plugins ========
# Create user with specific authentication plugin
CREATE USER 'app_user'@'%' IDENTIFIED BY 'password' 
WITH mysql_native_password;

CREATE USER 'secure_user'@'localhost' IDENTIFIED VIA unix_socket;

# PAM authentication (Linux)
CREATE USER 'pam_user'@'localhost' 
IDENTIFIED VIA pam USING 'mariadb';

# Change authentication plugin
ALTER USER 'app_user'@'%' IDENTIFIED VIA mysql_native_password;

======== Password Policies ========
# Require password validation
INSTALL PLUGIN simple_password_check SONAME 'simple_password_check.so';

# Set password policy variables
SET GLOBAL simple_password_check_minimal_length = 8;
SET GLOBAL simple_password_check_digits = 1;
SET GLOBAL simple_password_check_uppercase = 1;
SET GLOBAL simple_password_check_lowercase = 1;
SET GLOBAL simple_password_check_disallowed = 'password,123456';

# Password expiration
CREATE USER 'temp_user'@'%' IDENTIFIED BY 'temp123' 
PASSWORD EXPIRE INTERVAL 90 DAY;

ALTER USER 'regular_user'@'%' PASSWORD EXPIRE NEVER;

# Account locking
CREATE USER 'new_user'@'%' IDENTIFIED BY 'newpass' ACCOUNT LOCK;
ALTER USER 'new_user'@'%' ACCOUNT UNLOCK;

======== Role Management (MariaDB 10.0+) ========
# Create roles
CREATE ROLE 'app_read', 'app_write', 'app_admin';

# Grant privileges to roles
GRANT SELECT ON myapp.* TO 'app_read';
GRANT SELECT, INSERT, UPDATE, DELETE ON myapp.* TO 'app_write';
GRANT ALL PRIVILEGES ON myapp.* TO 'app_admin';

# Grant roles to users
CREATE USER 'report_user'@'%' IDENTIFIED BY 'report123';
GRANT 'app_read' TO 'report_user'@'%';

CREATE USER 'data_entry'@'%' IDENTIFIED BY 'entry123';
GRANT 'app_write' TO 'data_entry'@'%';

# Set default role
SET DEFAULT ROLE ALL FOR 'data_entry'@'%';

# Show roles
SHOW GRANTS FOR 'report_user'@'%';`,
        },
        {
          command: 'Data Encryption',
          description: 'Encrypt data at rest and in transit',
          usage: 'InnoDB encryption, SSL/TLS, data masking',
          example: `======== InnoDB Table Encryption ========
# Enable file key management
SET GLOBAL innodb_file_per_table = ON;
SET GLOBAL innodb_file_format = 'Barracuda';

# Create encrypted table
CREATE TABLE sensitive_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    credit_card VARCHAR(20),
    ssn VARCHAR(11),
    ENCRYPTION KEY ID 1
) ENCRYPTION = 'Y';

# Encrypt existing table
ALTER TABLE customer_data ENCRYPTION = 'Y';

# Create tablespace with encryption
CREATE TABLESPACE encrypted_ts 
ADD DATAFILE 'encrypted_ts.ibd' 
ENCRYPTION = 'Y';

CREATE TABLE encrypted_table (
    id INT PRIMARY KEY,
    data VARCHAR(100)
) TABLESPACE = encrypted_ts;

======== SSL/TLS Configuration ========
# Generate SSL certificates (server-side)
# In my.cnf:
[mysqld]
ssl-ca = ca.pem
ssl-cert = server-cert.pem
ssl-key = server-key.pem
require_secure_transport = ON

# Create users requiring SSL
CREATE USER 'secure_user'@'%' IDENTIFIED BY 'password' REQUIRE SSL;
CREATE USER 'cert_user'@'%' IDENTIFIED BY 'password' 
REQUIRE X509 AND SUBJECT '/CN=client';

# Verify SSL connection
SHOW VARIABLES LIKE '%ssl%';
SHOW STATUS LIKE 'Ssl_cipher%';

======== Data Masking ========
# Create masked view
CREATE VIEW masked_customers AS
SELECT 
    id,
    name,
    CONCAT(LEFT(email, 2), '***@', SUBSTRING_INDEX(email, '@', -1)) as email,
    CONCAT('***-***-', RIGHT(phone, 4)) as phone
FROM customers;

# Function for conditional data display
DELIMITER //
CREATE FUNCTION safe_show_email(user_email VARCHAR(100), show_full BOOLEAN)
RETURNS VARCHAR(100)
READS SQL DATA
DETERMINISTIC
BEGIN
    IF show_full THEN
        RETURN user_email;
    ELSE
        RETURN CONCAT(LEFT(user_email, 2), '***@', SUBSTRING_INDEX(user_email, '@', -1));
    END IF;
END //
DELIMITER ;

# Usage
SELECT name, safe_show_email(email, FALSE) as masked_email FROM users;`,
        },
      ],
    },
    {
      title: 'Performance Monitoring and Tuning',
      commands: [
        {
          command: 'Query Performance Analysis',
          description: 'Analyze and optimize query performance',
          usage: 'EXPLAIN, slow query log, performance schema',
          example: `======== Query Analysis ========
# Basic execution plan
EXPLAIN SELECT * FROM orders WHERE user_id = 123;

# Extended execution plan
EXPLAIN EXTENDED SELECT u.username, COUNT(o.id) as order_count
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.order_date > '2023-01-01'
GROUP BY u.username;

# Show warnings from extended EXPLAIN
SHOW WARNINGS;

# Analyze query with profiling
SET profiling = 1;
SELECT * FROM large_table WHERE indexed_column = 'value';
SHOW PROFILE;
SHOW PROFILE FOR QUERY 1;

======== Slow Query Log ========
# Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';
SET GLOBAL long_query_time = 1;
SET GLOBAL log_queries_not_using_indexes = 'ON';

# Analyze slow queries
mysqldumpslow /var/log/mysql/slow.log
mysqldumpslow -s t /var/log/mysql/slow.log  # Sort by time

======== Performance Schema ========
# Enable performance schema
UPDATE performance_schema.setup_instruments 
SET ENABLED = 'YES', TIMED = 'YES';

# Monitor statement execution
SELECT * FROM performance_schema.events_statements_summary_by_digest 
ORDER BY SUM_TIMER_WAIT DESC LIMIT 10;

# Table I/O statistics
SELECT * FROM performance_schema.table_io_waits_summary_by_table 
WHERE OBJECT_SCHEMA = 'myapp'
ORDER BY SUM_TIMER_WAIT DESC;

# Index usage statistics
SELECT * FROM performance_schema.table_io_waits_summary_by_index_usage
WHERE OBJECT_SCHEMA = 'myapp'
ORDER BY COUNT_READ DESC;`,
        },
        {
          command: 'Database Configuration Tuning',
          description: 'Optimize MariaDB configuration',
          usage: 'Key server variables and settings',
          example: `======== Memory Configuration ========
# InnoDB buffer pool (most important setting)
innodb_buffer_pool_size = 2G                    # 70-80% of RAM on dedicated server
innodb_buffer_pool_instances = 4                # Multiple instances for large pools

# Key buffer for MyISAM
key_buffer_size = 256M                           # 25-33% of RAM for MyISAM-heavy workloads

# Thread and connection settings
max_connections = 200                             # Based on application needs
thread_cache_size = 16                           # Cache threads for reuse
table_open_cache = 4000                          # Number of open tables

# Query cache (deprecated in MariaDB 10.1.7+ but still available)
query_cache_type = 1
query_cache_size = 128M
query_cache_limit = 2M

======== InnoDB Settings ========
# Log settings
innodb_log_file_size = 256M                      # Larger log files for better write performance
innodb_log_buffer_size = 16M                     # Buffer for log writes
innodb_flush_log_at_trx_commit = 2               # 0=fastest, 1=safest, 2=balanced

# I/O settings
innodb_io_capacity = 2000                        # SSD systems can use higher values
innodb_io_capacity_max = 4000                    # Maximum I/O capacity
innodb_read_io_threads = 8                       # Number of read threads
innodb_write_io_threads = 8                      # Number of write threads

# File settings
innodb_file_per_table = ON                       # Separate files per table
innodb_file_format = 'Barracuda'                 # Support for compressed tables
innodb_large_prefix = ON                         # Support for longer indexes

======== Other Performance Settings ========
# Temporary tables
tmp_table_size = 256M
max_heap_table_size = 256M

# Join and sort settings
join_buffer_size = 256K
sort_buffer_size = 256K

# Network settings
max_allowed_packet = 64M                         # Maximum packet size
net_buffer_length = 32K                          # Network buffer size

# Character set
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

# Check current settings
SHOW VARIABLES LIKE 'innodb_%';
SHOW VARIABLES LIKE '%buffer%';
SHOW VARIABLES LIKE '%cache%';`,
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      commands: [
        {
          command: 'Database Backup',
          description: 'Create and manage database backups',
          usage: 'mysqldump, mariabackup, binary logs',
          example: `======== Logical Backups with mysqldump ========
# Complete database backup
mysqldump -u root -p --single-transaction --routines --triggers myapp > myapp_backup.sql

# All databases
mysqldump -u root -p --single-transaction --all-databases > full_backup.sql

# Compressed backup
mysqldump -u root -p --single-transaction myapp | gzip > myapp_backup.sql.gz

# Specific tables only
mysqldump -u root -p myapp users orders > tables_backup.sql

# Structure only (no data)
mysqldump -u root -p --no-data myapp > structure_backup.sql

# Data only (no structure)
mysqldump -u root -p --no-create-info myapp > data_backup.sql

======== Physical Backups with Mariabackup ========
# Full backup
mariabackup --backup --target-dir=/backup/full --user=root --password=password

# Incremental backup
mariabackup --backup --target-dir=/backup/inc1 --incremental-basedir=/backup/full --user=root --password=password

# Prepare backup
mariabackup --prepare --target-dir=/backup/full
mariabackup --prepare --target-dir=/backup/full --incremental-dir=/backup/inc1

# Restore backup
mariabackup --copy-back --target-dir=/backup/full

======== Binary Log Backups ========
# Enable binary logging
SET GLOBAL log_bin = ON;
SET GLOBAL binlog_format = 'ROW';
SET GLOBAL expire_logs_days = 7;

# Show binary logs
SHOW BINARY LOGS;
SHOW MASTER STATUS;

# Backup binary logs
mysqlbinlog /var/log/mysql/mysql-bin.000001 > binlog_backup.sql

# Point-in-time recovery using binary logs
mysqlbinlog --start-datetime="2023-12-25 10:00:00" --stop-datetime="2023-12-25 11:00:00" /var/log/mysql/mysql-bin.000001 | mysql -u root -p

======== Backup Script Example ========
#!/bin/bash
# MariaDB Backup Script
BACKUP_DIR="/backup/mariadb"
DATE=\$(date +%Y%m%d_%H%M%S)
DB_NAME="myapp"
RETENTION_DAYS=30

# Create backup directory
mkdir -p \$BACKUP_DIR

# Logical backup
mysqldump -u root -p\$MYSQL_ROOT_PASSWORD --single-transaction --routines --triggers \$DB_NAME | gzip > \$BACKUP_DIR/\${DB_NAME}_\${DATE}.sql.gz

# Remove old backups
find \$BACKUP_DIR -name "*.sql.gz" -mtime +\$RETENTION_DAYS -delete

# Verify backup
if [ \$? -eq 0 ]; then
    echo "Backup successful: \${DB_NAME}_\${DATE}.sql.gz"
else
    echo "Backup failed: \${DB_NAME}_\${DATE}.sql.gz"
    exit 1
fi`,
        },
        {
          command: 'Database Recovery',
          description: 'Restore databases from backups',
          usage: 'mysql, mariabackup restore, point-in-time recovery',
          example: `======== Restore from SQL Dump ========
# Restore entire database
mysql -u root -p myapp < myapp_backup.sql

# Restore compressed backup
gunzip < myapp_backup.sql.gz | mysql -u root -p myapp

# Restore all databases
mysql -u root -p < full_backup.sql

# Restore specific tables
mysql -u root -p myapp < tables_backup.sql

# Restore with error handling
mysql -u root -p --force myapp < backup.sql  # Continue on errors

======== Restore from Physical Backup ========
# Stop MariaDB
sudo systemctl stop mariadb

# Move current data directory
sudo mv /var/lib/mysql /var/lib/mysql.backup

# Restore from backup
sudo mariabackup --copy-back --target-dir=/backup/full

# Fix permissions
sudo chown -R mysql:mysql /var/lib/mysql

# Start MariaDB
sudo systemctl start mariadb

======== Point-in-Time Recovery ========
# 1. Restore from last full backup
mysql -u root -p myapp < full_backup.sql

# 2. Apply binary logs
mysqlbinlog --start-position=154 --stop-datetime="2023-12-25 15:30:00" /var/log/mysql/mysql-bin.000002 | mysql -u root -p

# 3. Verify recovery
SELECT COUNT(*) FROM users;
SELECT * FROM orders WHERE order_date >= '2023-12-25 15:00:00';

======== Recovery Testing ========
# Test backup integrity
mysqldump --no-data myapp | grep -i "create table"

# Test restore to temporary database
mysql -u root -p -e "CREATE DATABASE test_restore;"
mysql -u root -p test_restore < myapp_backup.sql
mysql -u root -p -e "SELECT COUNT(*) FROM test_restore.users; DROP DATABASE test_restore;"

# Automated recovery test script
#!/bin/bash
BACKUP_FILE=\$1
TEST_DB="test_recovery_\$(date +%s)"

mysql -u root -p -e "CREATE DATABASE \$TEST_DB;"
if mysql -u root -p \$TEST_DB < \$BACKUP_FILE; then
    echo "Backup \$BACKUP_FILE is valid"
    mysql -u root -p -e "DROP DATABASE \$TEST_DB;"
    exit 0
else
    echo "Backup \$BACKUP_FILE is invalid"
    mysql -u root -p -e "DROP DATABASE \$TEST_DB;"
    exit 1
fi`,
        },
      ],
    },
    {
      title: 'Replication and Clustering',
      commands: [
        {
          command: 'Master-Slave Replication',
          description: 'Set up MariaDB replication',
          usage: 'Configure master and slave servers',
          example: `======== Master Configuration ========
# On master server (my.cnf)
[mysqld]
server-id = 1
log_bin = mysql-bin
binlog_format = ROW
binlog_do_db = myapp
gtid_domain_id = 1

# Restart MariaDB
sudo systemctl restart mariadb

# Create replication user
CREATE USER 'repl_user'@'%' IDENTIFIED BY 'repl_password';
GRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';
FLUSH PRIVILEGES;

# Get master status
SHOW MASTER STATUS;
-- Note: File and Position values

======== Slave Configuration ========
# On slave server (my.cnf)
[mysqld]
server-id = 2
relay_log = relay-bin
read_only = ON
gtid_domain_id = 1

# Restart MariaDB
sudo systemctl restart mariadb

# Configure slave
CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl_user',
    MASTER_PASSWORD='repl_password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;

# Start slave
START SLAVE;

# Check slave status
SHOW SLAVE STATUS\\G;

======== GTID-based Replication ========
# Master setup (already configured above)
# Slave setup with GTID
SET GLOBAL gtid_slave_pos = "0-1-1";

CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl_user',
    MASTER_PASSWORD='repl_password',
    MASTER_USE_GTID = current_pos;

START SLAVE;

# Skip replication error
SET GLOBAL sql_slave_skip_counter = 1;
START SLAVE;`,
        },
        {
          command: 'MariaDB Galera Cluster',
          description: 'Multi-master synchronous replication',
          usage: 'Configure Galera Cluster',
          example: `======== Galera Cluster Installation ========
# Install Galera packages
sudo apt install mariadb-server galera-4 galera-arbitrator-4

# Configure first node
sudo systemctl stop mariadb

# Edit galera.cnf
[mysqld]
binlog_format=ROW
default-storage-engine=innodb
innodb_autoinc_lock_mode=2
bind-address=0.0.0.0

# Galera Provider Configuration
wsrep_on=ON
wsrep_provider=/usr/lib/galera/libgalera_smm.so
wsrep_cluster_name="my_cluster"
wsrep_cluster_address="gcomm://node1_ip,node2_ip,node3_ip"
wsrep_node_name="node1"
wsrep_node_address="node1_ip"
wsrep_sst_method=rsync

======== Start Cluster ========
# Start first node (bootstrap)
sudo galera_new_cluster

# Start other nodes
sudo systemctl start mariadb

# Check cluster status
SHOW STATUS LIKE 'wsrep%';
SHOW STATUS LIKE 'wsrep_cluster_size';
SHOW STATUS LIKE 'wsrep_local_state_comment';

======== Add New Node ========
# Configure new node
wsrep_cluster_address="gcomm://existing_node_ip"
wsrep_node_name="new_node"
wsrep_node_address="new_node_ip"

# Start MariaDB on new node
sudo systemctl start mariadb

# Verify node joined cluster
SHOW STATUS LIKE 'wsrep_cluster_size';  -- Should increase by 1

======== Cluster Maintenance ========
# Check node status
SELECT * FROM information_schema.wsrep_cluster_members;

# SST (State Snapshot Transfer)
# Configure SST method
wsrep_sst_method=rsync
wsrep_sst_auth=backup_user:backup_password

# IST (Incremental State Transfer)
# For large clusters, configure IST
wsrep_provider_options="gcache.size=1G;gcache.page_size=128M"

# Cluster quorum
# Configure arbitrator for two-node clusters
sudo apt install galera-arbitrator-4
sudo systemctl start garbd
# Configure with same cluster address as nodes`,
        },
      ],
    },
    {
      title: 'MariaDB Best Practices',
      commands: [
        {
          command: 'Database Design Best Practices',
          description: 'Optimal database design patterns',
          usage: 'Normalization, indexing strategies, constraints',
          example: `======== Normalization Guidelines ========
# First Normal Form (1NF) - Atomic values
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Avoid: storing multiple values in single field
-- Use: separate table for one-to-many relationships

# Second Normal Form (2NF) - No partial dependencies
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

# Third Normal Form (3NF) - No transitive dependencies
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Instead of storing department_name in users table

======== Indexing Strategy ========
# Primary keys (automatic)
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category_id INT,
    price DECIMAL(10,2)
);

# Foreign keys
CREATE INDEX idx_products_category ON products(category_id);

# Columns in WHERE clauses
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);

# Columns in JOIN conditions
CREATE INDEX idx_order_items_product ON order_items(product_id);

# Composite indexes for complex queries
CREATE INDEX idx_products_category_price ON products(category_id, price);

# Partial indexes for common conditions
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';

======== Constraint Best Practices ========
# Use appropriate constraints
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price >= 0),
    category_id INT,
    sku VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT
);

# Complex check constraints
ALTER TABLE orders 
ADD CONSTRAINT valid_total_amount 
CHECK (total_amount > 0 AND total_amount < 1000000);

# Named constraints for better error messages
ALTER TABLE users 
ADD CONSTRAINT valid_email 
CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$');`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize MariaDB performance',
          usage: 'Query optimization, configuration tuning',
          example: `======== Query Optimization ========
# Use appropriate data types
CREATE TABLE events (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,  -- Use BIGINT for large tables
    event_date DATETIME NOT NULL,                    -- Not VARCHAR
    user_id INT UNSIGNED NOT NULL,                   -- Use UNSIGNED for IDs
    event_type VARCHAR(20) NOT NULL,                 -- Limited length
    metadata JSON                                     -- Use JSON for structured data
);

# Write efficient queries
-- Good: Specific columns
SELECT id, username FROM users WHERE status = 'active';

-- Avoid: SELECT * unless needed
-- SELECT * FROM users;

-- Use EXISTS instead of IN for subqueries
SELECT u.username 
FROM users u 
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id 
    AND o.total_amount > 1000
);

-- Use LIMIT with ORDER BY
SELECT * FROM large_table 
ORDER BY created_at DESC 
LIMIT 100;

-- Proper JOIN syntax
SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username
HAVING order_count > 0;

======== Configuration Optimization ========
# Memory settings (my.cnf)
# For dedicated server with 8GB RAM
innodb_buffer_pool_size = 6G                    # 75% of RAM
innodb_buffer_pool_instances = 4                # Multiple instances
innodb_log_file_size = 512M                     # Large log files
innodb_flush_log_at_trx_commit = 2              # Balanced performance

# Connection settings
max_connections = 200                            # Based on application needs
thread_cache_size = 50                           # Cache threads
table_open_cache = 4000                          # Open table cache

# Query cache (if needed)
query_cache_type = 1
query_cache_size = 256M
query_cache_limit = 4M

# MariaDB specific optimizations
aria_pagecache_buffer_size = 256M                # For Aria tables
join_buffer_size = 256K
sort_buffer_size = 256K

======== Monitoring and Maintenance ========
# Regular maintenance script
#!/bin/bash
# Optimize tables
mysql -u root -p -e "OPTIMIZE TABLE myapp.users, myapp.orders;"

# Update statistics
mysql -u root -p -e "ANALYZE TABLE myapp.users, myapp.orders;"

# Check table health
mysql -u root -p -e "CHECK TABLE myapp.users, myapp.orders;"

# Monitor slow queries
mysql -u root -p -e "SELECT * FROM information_schema.processlist WHERE time > 5;"

# Check table sizes
SELECT 
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.TABLES 
WHERE table_schema = 'myapp'
ORDER BY (data_length + index_length) DESC;`,
        },
        {
          command: 'Security Best Practices',
          description: 'Secure MariaDB deployment',
          usage: 'Authentication, encryption, access control',
          example: `======== Authentication Security ========
# Use strong passwords and authentication plugins
CREATE USER 'app_user'@'%' IDENTIFIED BY 'ComplexP@ssw0rd!' 
WITH mysql_native_password;

# Implement password policy
INSTALL PLUGIN simple_password_check SONAME 'simple_password_check.so';
SET GLOBAL simple_password_check_minimal_length = 12;
SET GLOBAL simple_password_check_digits = 2;
SET GLOBAL simple_password_check_special_chars = 1;

# Regular user account management
CREATE USER 'readonly_user'@'%' IDENTIFIED BY 'Read0nly!';
GRANT SELECT ON myapp.* TO 'readonly_user'@'%';

CREATE USER 'app_user'@'%' IDENTIFIED BY 'AppP@ss!';
GRANT SELECT, INSERT, UPDATE, DELETE ON myapp.* TO 'app_user'@'%';

# Account security features
ALTER USER 'app_user'@'%' 
PASSWORD EXPIRE INTERVAL 90 DAY 
ACCOUNT LOCK;

# Enable two-factor authentication where supported
CREATE USER 'admin_user'@'localhost' 
IDENTIFIED BY 'AdminP@ss!' 
REQUIRE X509;

======== Network Security ========
# Network configuration (my.cnf)
bind-address = 10.0.0.1                    # Bind to specific IP
skip-networking = OFF                        # Enable network connections
max_connect_errors = 10                      # Limit connection errors

# SSL/TLS configuration
ssl-ca = /etc/mysql/ssl/ca.pem
ssl-cert = /etc/mysql/ssl/server-cert.pem
ssl-key = /etc/mysql/ssl/server-key.pem
require_secure_transport = ON                 # Require SSL for all connections

# Firewall rules
# Allow only specific IPs
# iptables -A INPUT -p tcp --dport 3306 -s 10.0.0.0/8 -j ACCEPT
# iptables -A INPUT -p tcp --dport 3306 -j DROP

======== Data Encryption ========
# Enable InnoDB encryption
SET GLOBAL innodb_file_per_table = ON;
SET GLOBAL innodb_file_format = 'Barracuda';

# Create encrypted tablespace
CREATE TABLESPACE secure_ts 
ADD DATAFILE 'secure_ts.ibd' 
ENCRYPTION = 'Y';

CREATE TABLE sensitive_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    encrypted_data VARCHAR(255),
    ENCRYPTION KEY ID 1
) TABLESPACE = secure_ts ENCRYPTION = 'Y';

# Encrypt existing tables
ALTER TABLE customer_data ENCRYPTION = 'Y';

# Data masking for sensitive information
CREATE VIEW masked_customers AS
SELECT 
    id,
    name,
    CONCAT(LEFT(email, 2), '***@', SUBSTRING_INDEX(email, '@', -1)) as email,
    CONCAT('***-***-', RIGHT(phone, 4)) as phone,
    CONCAT('***-**-', RIGHT(ssn, 4)) as ssn
FROM customers;

# Grant limited access to masked view
GRANT SELECT ON masked_customers TO 'report_user'@'%';

======== Audit and Monitoring ========
# Enable audit plugin
INSTALL PLUGIN server_audit SONAME 'server_audit.so';

# Configure audit logging
SET GLOBAL server_audit_events = 'CONNECT,QUERY,TABLE';
SET GLOBAL server_audit_logging = 'ON';
SET GLOBAL server_audit_file_path = '/var/log/mysql/audit.log';

# Monitor failed login attempts
SELECT user, host FROM mysql.user 
WHERE password_expired = 'Y' OR account_locked = 'Y';

# Regular security checks
#!/bin/bash
# Check for weak passwords
mysql -u root -p -e "
    SELECT user, host 
    FROM mysql.user 
    WHERE plugin = 'mysql_native_password' 
    AND authentication_string = PASSWORD('');
"

# Review user privileges
mysql -u root -p -e "
    SELECT user, host, Select_priv, Insert_priv, Update_priv, Delete_priv
    FROM mysql.user
    WHERE user != 'root';
"

# Monitor SSL usage
SHOW VARIABLES LIKE '%ssl%';
SHOW STATUS LIKE 'Ssl_cipher%';`,
        },
      ],
    },
  ],
};
