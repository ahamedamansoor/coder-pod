import { Database } from 'lucide-react';

export const postgresqlCheatsheet = {
  id: 'postgresql',
  name: 'PostgreSQL',
  description: 'Master PostgreSQL from basics to advanced features (PostgreSQL 12-16)',
  icon: Database,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with PostgreSQL',
      commands: [
        {
          command: 'PostgreSQL Installation',
          description: 'Install PostgreSQL on different platforms',
          usage: 'Download and install PostgreSQL server',
          example: `======== Installation Methods ========
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# macOS with Homebrew
brew install postgresql
brew services start postgresql

# Windows
# Download from https://www.postgresql.org/download/windows/
# Run installer and follow setup wizard

# CentOS/RHEL
sudo yum install postgresql-server postgresql-contrib
sudo postgresql-setup initdb
sudo systemctl start postgresql
sudo systemctl enable postgresql

# From source (latest version)
wget https://ftp.postgresql.org/pub/source/v16.1/postgresql-16.1.tar.gz
tar xzf postgresql-16.1.tar.gz
cd postgresql-16.1
./configure
make
sudo make install
sudo adduser postgres
sudo mkdir -p /usr/local/pgsql/data
sudo chown postgres /usr/local/pgsql/data

======== Verify Installation ========
psql --version
postgres --version

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl status postgresql

# Connect to PostgreSQL
sudo -u postgres psql`,
        },
        {
          command: 'Basic PostgreSQL Configuration',
          description: 'Configure PostgreSQL settings',
          usage: 'Edit postgresql.conf and pg_hba.conf',
          example: `======== Configuration Files ========
# Main config: /etc/postgresql/16/main/postgresql.conf
# Authentication: /etc/postgresql/16/main/pg_hba.conf

======== Basic postgresql.conf Settings ========
# Connection settings
listen_addresses = 'localhost'  # or '*' for all interfaces
port = 5432
max_connections = 100

# Memory settings
shared_buffers = 256MB
effective_cache_size = 1GB
work_mem = 4MB
maintenance_work_mem = 64MB

# WAL settings
wal_level = replica
max_wal_size = 1GB
min_wal_size = 80MB

# Logging
log_destination = 'stderr'
logging_collector = on
log_directory = 'log'
log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'
log_statement = 'all'

======== pg_hba.conf Authentication ========
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# Local connections
local   all             postgres                                peer
local   all             all                                     md5

# IPv4 local connections
host    all             all             127.0.0.1/32            md5
host    all             all             0.0.0.0/0               md5

# IPv6 local connections
host    all             all             ::1/128                 md5

# Replication connections
host    replication     replicator      0.0.0.0/0               md5`,
        },
        {
          command: 'Database and User Management',
          description: 'Create databases and users',
          usage: 'CREATE DATABASE, CREATE USER, GRANT',
          example: `======== Database Operations ========
# Connect to PostgreSQL
sudo -u postgres psql

# Create new database
CREATE DATABASE myapp;
CREATE DATABASE myapp WITH OWNER = myuser;

# List databases
\\l

# Connect to database
\\c myapp

# Drop database
DROP DATABASE myapp;

======== User Management ========
# Create new user
CREATE USER myuser WITH PASSWORD 'secure_password';
CREATE USER myuser WITH PASSWORD 'secure_password' CREATEDB CREATEROLE;

# List users
\\du

# Modify user
ALTER USER myuser WITH PASSWORD 'new_password';
ALTER USER myuser CREATEDB;
ALTER USER myuser VALID UNTIL '2025-01-01';

# Drop user
DROP USER myuser;

======== Privileges ========
# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE myapp TO myuser;
GRANT ALL ON SCHEMA public TO myuser;
GRANT ALL ON ALL TABLES IN SCHEMA public TO myuser;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO myuser;

# Revoke privileges
REVOKE ALL ON DATABASE myapp FROM myuser;

# Grant specific privileges
GRANT SELECT, INSERT, UPDATE ON mytable TO myuser;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO myuser;`,
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
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) CHECK (price >= 0),
    category_id INTEGER REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

======== Advanced Table Features ========
# Table with constraints
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),
    status VARCHAR(20) DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled'))
);

# Temporary table
CREATE TEMP TABLE temp_import (
    id INTEGER,
    name VARCHAR(100),
    value DECIMAL(10,2)
) ON COMMIT DROP;

======== Table Management ========
# Add column
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users ADD COLUMN age INTEGER CHECK (age >= 0);

# Modify column
ALTER TABLE users ALTER COLUMN phone SET DATA TYPE VARCHAR(25);
ALTER TABLE users ALTER COLUMN email SET NOT NULL;

# Drop column
ALTER TABLE users DROP COLUMN phone;

# Rename table
ALTER TABLE users RENAME TO accounts;

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

# Insert with RETURNING
INSERT INTO users (username, email) 
VALUES ('jane_doe', 'jane@example.com') 
RETURNING id, created_at;

# Insert from SELECT
INSERT INTO archived_users
SELECT * FROM users WHERE created_at < '2020-01-01';

======== UPDATE Operations ========
# Simple update
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

# Update multiple columns
UPDATE products 
SET price = price * 1.1, updated_at = CURRENT_TIMESTAMP 
WHERE category_id = 5;

# Update with JOIN
UPDATE users u
SET last_login = o.last_order_date
FROM orders o
WHERE u.id = o.user_id;

======== DELETE Operations ========
# Simple delete
DELETE FROM users WHERE id = 1;

# Delete with condition
DELETE FROM orders WHERE order_date < '2020-01-01';

# Delete with USING (JOIN)
DELETE FROM users u
USING orders o
WHERE u.id = o.user_id AND o.status = 'cancelled';

# Truncate table (faster for all rows)
TRUNCATE TABLE users;
TRUNCATE TABLE users RESTART IDENTITY CASCADE;`,
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
SELECT * FROM users WHERE email ~* '.*@gmail\\.com';

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

# Window functions
SELECT name, price, 
       ROW_NUMBER() OVER (ORDER BY price DESC) as price_rank,
       LAG(price) OVER (ORDER BY price) as prev_price
FROM products;`,
        },
      ],
    },
    {
      title: 'PostgreSQL Data Types',
      commands: [
        {
          command: 'Numeric Data Types',
          description: 'Integer and numeric types',
          usage: 'INTEGER, BIGINT, DECIMAL, NUMERIC, SERIAL',
          example: `======== Integer Types ========
CREATE TABLE numbers (
    small_int SMALLINT,      -- 2 bytes, -32768 to 32767
    regular_int INTEGER,      -- 4 bytes, -2147483648 to 2147483647
    big_int BIGINT,          -- 8 bytes, large range
    auto_id SERIAL,          -- Auto-incrementing integer
    big_auto_id BIGSERIAL    -- Auto-incrementing bigint
);

======== Decimal Types ========
CREATE TABLE financial (
    price DECIMAL(10,2),     -- 10 total digits, 2 after decimal
    amount NUMERIC(15,4),    -- Same as DECIMAL
    exact_value NUMERIC,     -- Unlimited precision
    approximate FLOAT,       -- 4 bytes, variable precision
    double_prec DOUBLE PRECISION  -- 8 bytes, variable precision
);

======== Numeric Operations ========
# Numeric functions
SELECT ROUND(3.14159, 2);     -- 3.14
SELECT CEIL(3.14);            -- 4
SELECT FLOOR(3.14);           -- 3
SELECT ABS(-5);               -- 5
SELECT MOD(10, 3);            -- 1
SELECT POWER(2, 3);           -- 8
SELECT SQRT(16);              -- 4

# Random numbers
SELECT RANDOM();              -- Random double between 0 and 1
SELECT FLOOR(RANDOM() * 100) + 1;  -- Random integer 1-100`,
        },
        {
          command: 'Character Data Types',
          description: 'Text and character types',
          usage: 'VARCHAR, TEXT, CHAR, ENUM',
          example: `======== Text Types ========
CREATE TABLE text_examples (
    fixed_char CHAR(10),      -- Fixed length, padded with spaces
    variable_char VARCHAR(255), -- Variable length, max 255
    unlimited_text TEXT,      -- Unlimited length
    limited_text VARCHAR(50)  -- Variable length, max 50
);

======== String Functions ========
# Basic string operations
SELECT LENGTH('Hello World');           -- 11
SELECT UPPER('hello');                  -- HELLO
SELECT LOWER('HELLO');                  -- hello
SELECT INITCAP('hello world');          -- Hello World
SELECT TRIM('  hello  ');               -- hello
SELECT LTRIM('  hello');                -- hello
SELECT RTRIM('hello  ');                -- hello

# String manipulation
SELECT SUBSTRING('Hello World', 1, 5);  -- Hello
SELECT SUBSTRING('Hello World' FROM 1 FOR 5); -- Hello
SELECT REPLACE('Hello World', 'World', 'PostgreSQL'); -- Hello PostgreSQL
SELECT POSITION('World' IN 'Hello World'); -- 7
SELECT CONCAT('Hello', ' ', 'World');   -- Hello World

# Pattern matching
SELECT 'Hello' ~ 'H.*o';                -- true (regex match)
SELECT 'Hello' ~* 'h.*o';               -- true (case-insensitive)
SELECT 'Hello' !~ 'H.*o';               -- false (negative regex match)
SELECT 'Hello' LIKE 'H%';               -- true (SQL pattern)
SELECT 'Hello' ILIKE 'h%';              -- true (case-insensitive SQL)

======== ENUM Types ========
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
CREATE TABLE person (
    name TEXT,
    current_mood mood
);

INSERT INTO person VALUES ('John', 'happy');
SELECT * FROM person WHERE current_mood = 'happy';`,
        },
        {
          command: 'Date and Time Types',
          description: 'Temporal data types',
          usage: 'TIMESTAMP, DATE, TIME, INTERVAL',
          example: `======== Date/Time Types ========
CREATE TABLE temporal_data (
    created_at TIMESTAMP,           -- Date and time
    created_at_tz TIMESTAMPTZ,      -- With time zone
    birth_date DATE,                -- Date only
    meeting_time TIME,              -- Time only
    meeting_time_tz TIME WITH TIME ZONE,  -- Time with zone
    duration INTERVAL               -- Time interval
);

======== Current Date/Time ========
SELECT CURRENT_TIMESTAMP;           -- Current date and time
SELECT CURRENT_DATE;                -- Current date
SELECT CURRENT_TIME;                -- Current time
SELECT NOW();                       -- Current timestamp
SELECT TIMEZONE;                    -- Current timezone

======== Date/Time Functions ========
# Extraction
SELECT EXTRACT(YEAR FROM CURRENT_DATE);     -- Current year
SELECT EXTRACT(MONTH FROM CURRENT_DATE);    -- Current month
SELECT EXTRACT(DAY FROM CURRENT_DATE);      -- Current day
SELECT EXTRACT(HOUR FROM CURRENT_TIMESTAMP); -- Current hour

# Date arithmetic
SELECT CURRENT_DATE + INTERVAL '1 day';     -- Tomorrow
SELECT CURRENT_DATE - INTERVAL '1 week';    -- Last week
SELECT CURRENT_TIMESTAMP + INTERVAL '2 hours 30 minutes';

# Date formatting
SELECT TO_CHAR(CURRENT_TIMESTAMP, 'YYYY-MM-DD HH24:MI:SS');
SELECT TO_CHAR(CURRENT_DATE, 'Month DD, YYYY');

# Date parsing
SELECT TO_DATE('2023-12-25', 'YYYY-MM-DD');
SELECT TO_TIMESTAMP('2023-12-25 10:30:00', 'YYYY-MM-DD HH24:MI:SS');

# Interval operations
SELECT AGE(CURRENT_TIMESTAMP, '2020-01-01');
SELECT INTERVAL '1 year 2 months 3 days';`,
        },
      ],
    },
    {
      title: 'Joins and Relationships',
      commands: [
        {
          command: 'INNER JOIN Operations',
          description: 'Combine data from multiple tables',
          usage: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN',
          example: `======== Basic INNER JOIN ========
SELECT u.username, p.name, p.price
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN products p ON o.product_id = p.id;

# Multiple joins
SELECT u.username, o.id as order_id, o.total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.status = 'completed';

======== OUTER JOINs ========
# LEFT JOIN (all users, with their orders if any)
SELECT u.username, o.id as order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

# RIGHT JOIN (all orders, with user info if any)
SELECT u.username, o.id as order_id
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

# FULL OUTER JOIN (all users and all orders)
SELECT u.username, o.id as order_id
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;

======== Self JOIN ========
# Manager-employee relationship
SELECT e.name as employee, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

# Find duplicate records
SELECT a.id, a.name
FROM users a
JOIN users b ON a.name = b.name AND a.id < b.id;`,
        },
        {
          command: 'Advanced Join Techniques',
          description: 'Complex join patterns',
          usage: 'CROSS JOIN, LATERAL JOIN, USING',
          example: `======== CROSS JOIN ========
# Cartesian product
SELECT u.username, p.name
FROM users u
CROSS JOIN products p;

# Generate combinations
SELECT d.name as department, e.name as employee
FROM departments d
CROSS JOIN LATERAL (
    SELECT name FROM employees 
    WHERE department_id = d.id 
    LIMIT 3
) e;

======== LATERAL JOIN ========
# Get latest order for each user
SELECT u.username, latest_order.*
FROM users u
LEFT JOIN LATERAL (
    SELECT * FROM orders 
    WHERE user_id = u.id 
    ORDER BY order_date DESC 
    LIMIT 1
) latest_order ON true;

# Multiple related rows
SELECT p.name, recent_reviews.*
FROM products p
LEFT JOIN LATERAL (
    SELECT rating, comment, review_date
    FROM reviews
    WHERE product_id = p.id
    ORDER BY review_date DESC
    LIMIT 3
) recent_reviews ON true;

======== USING Clause ========
# Simplified join syntax when column names match
SELECT users.id, username, order_date
FROM users
INNER JOIN orders USING (id);

======== Join with Aggregates ========
# User with order counts
SELECT u.username, COUNT(o.id) as order_count, SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username
HAVING COUNT(o.id) > 0;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Query Techniques',
      commands: [
        {
          command: 'Subqueries and CTEs',
          description: 'Complex queries with subqueries and Common Table Expressions',
          usage: 'WITH, EXISTS, IN, ANY, ALL',
          example: `======== Common Table Expressions (CTE) ========
# Basic CTE
WITH active_users AS (
    SELECT id, username FROM users 
    WHERE last_login > CURRENT_DATE - INTERVAL '30 days'
)
SELECT o.*, a.username 
FROM orders o
JOIN active_users a ON o.user_id = a.id;

# Multiple CTEs
WITH monthly_sales AS (
    SELECT DATE_TRUNC('month', order_date) as month,
           SUM(total_amount) as total
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
),
top_months AS (
    SELECT month, total
    FROM monthly_sales
    ORDER BY total DESC
    LIMIT 3
)
SELECT * FROM top_months;

# Recursive CTE (hierarchy)
WITH RECURSIVE employee_hierarchy AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;

======== Subquery Examples ========
# EXISTS subquery
SELECT username FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id AND o.total_amount > 1000
);

# IN subquery
SELECT * FROM products
WHERE category_id IN (
    SELECT id FROM categories 
    WHERE name IN ('Electronics', 'Books')
);

# Scalar subquery
SELECT username, (
    SELECT COUNT(*) FROM orders 
    WHERE user_id = users.id
) as order_count
FROM users;

# ANY/ALL subqueries
SELECT * FROM products
WHERE price > ALL (
    SELECT AVG(price) FROM products 
    GROUP BY category_id
);

# Correlated subquery
SELECT u.username, (
    SELECT SUM(total_amount) FROM orders 
    WHERE user_id = u.id
) as total_spent
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders WHERE user_id = u.id
);`,
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

# Window aggregates
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

======== Complex Window Examples ========
# Percentiles
SELECT name, salary,
       PERCENT_RANK() OVER (ORDER BY salary) as percent_rank,
       CUME_DIST() OVER (ORDER BY salary) as cumulative_dist
FROM employees;

# Moving totals with reset
SELECT category, product_name, price,
       SUM(price) OVER (
           PARTITION BY category 
           ORDER BY product_name
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) as category_running_total
FROM products;`,
        },
        {
          command: 'Conditional Logic',
          description: 'CASE statements and conditional expressions',
          usage: 'CASE, COALESCE, NULLIF, GREATEST, LEAST',
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
# COALESCE (first non-null value)
SELECT name, COALESCE(phone, 'N/A') as phone_number
FROM customers;

SELECT COALESCE(nickname, first_name, 'Unknown') as display_name
FROM users;

# NULLIF (return null if values equal)
SELECT NULLIF(price, 0) as actual_price
FROM products;

# GREATEST and LEAST
SELECT GREATEST(price, discount_price, sale_price) as max_price
FROM products;

SELECT LEAST(start_date, end_date, CURRENT_DATE) as earliest_date
FROM events;

# Conditional aggregation
SELECT 
    COUNT(*) as total_orders,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_orders,
    COUNT(CASE WHEN total_amount > 1000 THEN 1 END) as large_orders,
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

======== Partial Indexes ========
# Index only active users
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';

# Index recent orders
CREATE INDEX idx_recent_orders ON orders(order_date) 
WHERE order_date > CURRENT_DATE - INTERVAL '30 days';

# Index expensive products
CREATE INDEX idx_expensive_products ON products(id) 
WHERE price > 1000;

======== Functional Indexes ========
# Index on expression
CREATE INDEX idx_users_lower_email ON users(LOWER(email));
CREATE INDEX idx_products_upper_name ON products(UPPER(name));

# Index on computed column
CREATE INDEX idx_orders_total_tax ON orders(total_amount * 0.1);

======== Index Types ========
# Hash index (for equality)
CREATE INDEX idx_hash_users_id ON users USING HASH(id);

# GIN index (for arrays and full-text)
CREATE INDEX idx_products_tags ON products USING GIN(tags);
CREATE INDEX idx_documents_content ON documents USING GIN(to_tsvector('english', content));

# GiST index (for geometric data)
CREATE INDEX idx_locations ON locations USING GiST(coordinates);

# BRIN index (for large tables with natural ordering)
CREATE INDEX idx_logs_created_at ON logs USING BRIN(created_at);`,
        },
        {
          command: 'Index Management',
          description: 'Monitor and maintain indexes',
          usage: 'Analyze, rebuild, and optimize indexes',
          example: `======== Index Information ========
# List indexes on table
\\di users
SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'users';

# Index usage statistics
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes;

# Index size
SELECT schemaname, tablename, indexname, 
       pg_size_pretty(pg_relation_size(indexname::regclass)) as size
FROM pg_indexes
WHERE tablename = 'users';

======== Index Maintenance ========
# Rebuild index
REINDEX INDEX idx_users_email;

# Rebuild all indexes on table
REINDEX TABLE users;

# Rebuild all indexes in database
REINDEX DATABASE myapp;

# Analyze table (update statistics)
ANALYZE users;
ANALYZE;

# Vacuum table (reclaim space)
VACUUM users;
VACUUM FULL users;  -- Exclusive lock, rewrites table
VACUUM ANALYZE users;  -- Vacuum and analyze

======== Index Optimization ========
# Check for unused indexes
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY schemaname, tablename, indexname;

# Find duplicate indexes
SELECT pg_size_pretty(sum(pg_relation_size(indexname::regclass))) as total_size
FROM pg_indexes i
JOIN pg_stat_user_indexes s ON i.tablename = s.relname
WHERE i.indexname = s.indexrelname;

# Create index concurrently (less locking)
CREATE INDEX CONCURRENTLY idx_large_table_column ON large_table(column);

# Drop index
DROP INDEX idx_users_email;
DROP INDEX CONCURRENTLY idx_large_table_column;`,
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
BEGIN;

UPDATE accounts SET balance = balance - 100 
WHERE id = 1 AND balance >= 100;

UPDATE accounts SET balance = balance + 100 
WHERE id = 2;

COMMIT;

======== Transaction with Error Handling ========
BEGIN;

UPDATE products SET stock = stock - 1 
WHERE id = 1 AND stock > 0;

INSERT INTO orders (product_id, quantity) 
VALUES (1, 1);

-- Check if everything is okay
-- If not, rollback
-- ROLLBACK;

COMMIT;

======== Savepoints ========
BEGIN;

INSERT INTO users (username, email) 
VALUES ('user1', 'user1@example.com');

SAVEPOINT sp1;

INSERT INTO users (username, email) 
VALUES ('user2', 'user2@example.com');

-- Rollback to savepoint
ROLLBACK TO sp1;

INSERT INTO users (username, email) 
VALUES ('user3', 'user3@example.com');

COMMIT;

======== Transaction Isolation Levels ========
# Set isolation level
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;

# Show current isolation level
SHOW transaction_isolation;

# Set default isolation level
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;`,
        },
        {
          command: 'Locking and Concurrency',
          description: 'Manage concurrent access to data',
          usage: 'LOCK, FOR UPDATE, NOWAIT, SKIP LOCKED',
          example: `======== Table Locks ========
# Lock table in exclusive mode
LOCK TABLE users IN EXCLUSIVE MODE;

# Lock table in share mode
LOCK TABLE users IN SHARE MODE;

# Lock table with timeout
SET lock_timeout = '5s';
LOCK TABLE users IN EXCLUSIVE MODE;

======== Row-Level Locking ========
# SELECT FOR UPDATE (lock selected rows)
SELECT * FROM accounts 
WHERE id = 1 
FOR UPDATE;

# SELECT FOR SHARE (share lock)
SELECT * FROM products 
WHERE category_id = 5 
FOR SHARE;

# NOWAIT (fail if can't lock)
SELECT * FROM accounts 
WHERE id = 1 
FOR UPDATE NOWAIT;

# SKIP LOCKED (skip locked rows)
SELECT * FROM orders 
WHERE status = 'pending' 
FOR UPDATE SKIP LOCKED 
LIMIT 10;

======== Advisory Locks ========
# Application-level locks
SELECT pg_advisory_lock(12345);
-- Do critical work
SELECT pg_advisory_unlock(12345);

# Try to get lock (non-blocking)
SELECT pg_try_advisory_lock(12345);

# Session-level locks
SELECT pg_advisory_xact_lock(12345);

======== Deadlock Detection ========
# Check for locks
SELECT blocked_locks.pid AS blocked_pid,
       blocked_activity.usename AS blocked_user,
       blocking_locks.pid AS blocking_pid,
       blocking_activity.usename AS blocking_user,
       blocked_activity.query AS blocked_statement,
       blocking_activity.query AS current_statement_in_blocking_process
FROM pg_catalog.pg_locks blocked_locks
JOIN pg_catalog.pg_stat_activity blocked_activity ON blocked_activity.pid = blocked_locks.pid
JOIN pg_catalog.pg_locks blocking_locks ON blocking_locks.locktype = blocked_locks.locktype
JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid
WHERE NOT blocked_locks.granted;`,
        },
      ],
    },
    {
      title: 'Views and Materialized Views',
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

======== View Management ========
# Replace view
CREATE OR REPLACE VIEW active_users AS
SELECT id, username, email, last_login, created_at
FROM users
WHERE status = 'active' AND last_login > CURRENT_DATE - INTERVAL '90 days';

# View options
CREATE VIEW user_orders WITH (security_barrier = true) AS
SELECT u.id as user_id, u.username, o.id as order_id
FROM users u
JOIN orders o ON u.id = o.user_id;

# Check view definition
SELECT definition FROM pg_views WHERE viewname = 'active_users';

# Drop view
DROP VIEW active_users;
DROP VIEW IF EXISTS user_orders CASCADE;

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
GROUP BY user_id;

CREATE FUNCTION update_order_summary() RETURNS trigger AS $$
BEGIN
    -- Refresh materialized view or update summary table
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Materialized Views',
          description: 'Cached views for better performance',
          usage: 'CREATE MATERIALIZED VIEW, REFRESH',
          example: `======== Materialized Views ========
# Create materialized view
CREATE MATERIALIZED VIEW daily_sales AS
SELECT DATE(order_date) as sale_date,
       COUNT(*) as order_count,
       SUM(total_amount) as total_sales,
       AVG(total_amount) as avg_order_value
FROM orders
GROUP BY DATE(order_date)
ORDER BY sale_date;

# Materialized view with indexes
CREATE MATERIALIZED VIEW product_performance AS
SELECT p.id, p.name, p.category_id,
       COUNT(o.id) as order_count,
       COALESCE(SUM(o.total_amount), 0) as total_revenue
FROM products p
LEFT JOIN orders o ON p.id = o.product_id
GROUP BY p.id, p.name, p.category_id;

CREATE INDEX idx_product_performance_category ON product_performance(category_id);
CREATE INDEX idx_product_performance_revenue ON product_performance(total_revenue DESC);

======== Refresh Materialized Views ========
# Complete refresh
REFRESH MATERIALIZED VIEW daily_sales;

# Concurrent refresh (allows queries during refresh)
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_sales;

# Refresh with data
REFRESH MATERIALIZED VIEW product_performance WITH DATA;

# Materialized view options
CREATE MATERIALIZED VIEW user_activity AS
SELECT user_id, activity_date, activity_count
FROM user_logs
WITH DATA;

# Drop materialized view
DROP MATERIALIZED VIEW daily_sales;

======== Materialized View Management ========
# Check if materialized view needs refresh
SELECT relispopulated FROM pg_class WHERE relname = 'daily_sales';

# Get materialized view size
SELECT pg_size_pretty(pg_relation_size('daily_sales'));

# Refresh strategy (automated)
CREATE OR REPLACE FUNCTION refresh_daily_sales() 
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY daily_sales;
END;
$$ LANGUAGE plpgsql;

# Schedule refresh (requires pg_cron extension)
SELECT cron.schedule('0 2 * * *', $$SELECT refresh_daily_sales()$$);`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced PostgreSQL Features',
      commands: [
        {
          command: 'JSON and JSONB Data Types',
          description: 'Work with JSON data in PostgreSQL',
          usage: 'JSON, JSONB operators and functions',
          example: `======== JSON vs JSONB ========
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    metadata JSON,      -- Text-based, slower to query
    attributes JSONB    -- Binary format, faster to query
);

======== JSONB Operations ========
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

# Query JSON data
SELECT name, attributes->'brand' as brand
FROM products;

SELECT name, attributes->>'brand' as brand_text
FROM products;

# Nested JSON access
SELECT name, attributes->'specs'->'cpu' as cpu
FROM products;

# JSONB operators
SELECT * FROM products 
WHERE attributes->>'brand' = 'Dell';

SELECT * FROM products 
WHERE attributes ? 'available'  -- Has key
AND attributes->>'available' = 'true';

SELECT * FROM products 
WHERE attributes @> '{"brand": "Dell"}';  -- Contains

SELECT * FROM products 
WHERE attributes ?| array['brand', 'price'];  -- Has any key

======== JSON Functions ========
# JSON aggregation
SELECT json_agg(name) as product_names FROM products;

# Build JSON objects
SELECT json_build_object(
    'product', name,
    'price', attributes->>'price'
) as product_info FROM products;

# JSON path queries (PostgreSQL 12+)
SELECT name, jsonb_path_query_array(
    attributes, 
    '$.specs.*'
) as specs FROM products;

# Modify JSONB data
UPDATE products 
SET attributes = jsonb_set(
    attributes, 
    '{price}', 
    '899.99'::jsonb
) 
WHERE id = 1;

UPDATE products 
SET attributes = attributes - 'available'  -- Remove key
WHERE id = 1;

UPDATE products 
SET attributes = attributes || '{"discount": 10}'::jsonb  -- Add key
WHERE id = 1;`,
        },
        {
          command: 'Array Data Types',
          description: 'Work with array data in PostgreSQL',
          usage: 'ARRAY operators and functions',
          example: `======== Array Types ========
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    tags TEXT[],           -- Array of text
    categories INTEGER[],  -- Array of integers
    prices NUMERIC[]       -- Array of prices
);

======== Array Operations ========
# Insert array data
INSERT INTO products (name, tags, categories) 
VALUES ('Laptop', ARRAY['electronics', 'computers', 'dell'], ARRAY[1, 5, 8]);

INSERT INTO products (name, tags) 
VALUES ('Mouse', '{electronics, accessories}');  -- Alternative syntax

# Query arrays
SELECT name, tags FROM products 
WHERE 'electronics' = ANY(tags);  -- Contains element

SELECT name, tags FROM products 
WHERE tags @> ARRAY['electronics'];  -- Contains all

SELECT name, tags FROM products 
WHERE tags && ARRAY['electronics', 'accessories'];  -- Overlaps

# Array functions
SELECT name, array_length(tags, 1) as tag_count
FROM products;

SELECT name, unnest(tags) as tag
FROM products;

SELECT name, array_upper(tags, 1) as max_index
FROM products;

# Array aggregation
SELECT category_id, array_agg(product_name) as products
FROM products
GROUP BY category_id;

# Modify arrays
UPDATE products 
SET tags = array_append(tags, 'new-tag')
WHERE id = 1;

UPDATE products 
SET tags = array_prepend('featured', tags)
WHERE id = 1;

UPDATE products 
SET tags = array_remove(tags, 'old-tag')
WHERE id = 1;

UPDATE products 
SET tags = array_replace(tags, 'old-tag', 'new-tag')
WHERE id = 1;

# Array literals and operations
SELECT ARRAY[1, 2, 3] || ARRAY[4, 5, 6];  -- Concatenate
SELECT ARRAY[1, 2, 3] * 3;  -- Repeat elements
SELECT array_fill(0, ARRAY[3, 3]);  -- Fill array`,
        },
        {
          command: 'Custom Data Types',
          description: 'Create user-defined data types',
          usage: 'CREATE TYPE, ENUM, COMPOSITE types',
          example: `======== ENUM Types ========
CREATE TYPE order_status AS ENUM (
    'pending',
    'confirmed', 
    'processing',
    'shipped',
    'delivered',
    'cancelled'
);

CREATE TYPE user_role AS ENUM (
    'customer',
    'admin',
    'moderator'
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status order_status DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

======== Composite Types ========
CREATE TYPE address AS (
    street VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    country VARCHAR(50)
);

CREATE TYPE contact_info AS (
    email VARCHAR(100),
    phone VARCHAR(20),
    address address
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    contact contact_info
);

# Using composite types
INSERT INTO users (name, contact) 
VALUES (
    'John Doe',
    ROW('john@example.com', '555-0123', 
        ROW('123 Main St', 'Anytown', 'CA', '90210', 'USA')
);

# Query composite types
SELECT name, 
       (contact).email,
       (contact).address.city
FROM users;

# Update composite fields
UPDATE users 
SET contact.address.city = 'New City'
WHERE id = 1;

======== Range Types ========
CREATE TYPE daterange AS RANGE (subtype = date);
CREATE TYPE numrange AS RANGE (subtype = numeric);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    room_id INTEGER,
    booking_dates daterange,
    price_range numrange
);

# Range operations
INSERT INTO bookings (room_id, booking_dates)
VALUES (101, '[2023-12-25, 2023-12-30]');

SELECT * FROM bookings 
WHERE booking_dates @> '2023-12-26'::date;  -- Contains date

SELECT * FROM bookings 
WHERE booking_dates && '[2023-12-26, 2023-12-28]'::daterange;  -- Overlaps

======== Domain Types ========
CREATE DOMAIN positive_number AS NUMERIC
CHECK (VALUE > 0);

CREATE DOMAIN email_address AS VARCHAR(100)
CHECK (VALUE ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price positive_number,
    contact_email email_address
);`,
        },
      ],
    },
    {
      title: 'Stored Procedures and Functions',
      commands: [
        {
          command: 'PL/pgSQL Functions',
          description: 'Create functions with PL/pgSQL',
          usage: 'CREATE FUNCTION, procedural language',
          example: `======== Basic Function ========
CREATE OR REPLACE FUNCTION calculate_discount(price NUMERIC, discount_percent NUMERIC)
RETURNS NUMERIC AS $$
BEGIN
    RETURN price * (1 - discount_percent / 100);
END;
$$ LANGUAGE plpgsql;

# Function with parameters
CREATE OR REPLACE FUNCTION get_user_orders(user_id_param INTEGER)
RETURNS TABLE(order_id INTEGER, total_amount NUMERIC) AS $$
BEGIN
    RETURN QUERY
    SELECT o.id, o.total_amount
    FROM orders o
    WHERE o.user_id = user_id_param;
END;
$$ LANGUAGE plpgsql;

======== Function with Control Flow ========
CREATE OR REPLACE FUNCTION get_order_status(order_id INTEGER)
RETURNS VARCHAR(20) AS $$
DECLARE
    order_status VARCHAR(20);
    order_date TIMESTAMP;
BEGIN
    SELECT status, order_date INTO order_status, order_date
    FROM orders
    WHERE orders.id = order_id;
    
    IF order_status = 'delivered' THEN
        RETURN 'Completed';
    ELSIF order_date < CURRENT_DATE - INTERVAL '30 days' THEN
        RETURN 'Late';
    ELSE
        RETURN order_status;
    END IF;
END;
$$ LANGUAGE plpgsql;

======== Function with Exception Handling ========
CREATE OR REPLACE FUNCTION transfer_funds(
    from_account INTEGER, 
    to_account INTEGER, 
    amount NUMERIC
) RETURNS BOOLEAN AS $$
DECLARE
    from_balance NUMERIC;
BEGIN
    -- Get current balance
    SELECT balance INTO from_balance
    FROM accounts
    WHERE id = from_account
    FOR UPDATE;  -- Lock the row
    
    -- Check sufficient funds
    IF from_balance < amount THEN
        RAISE EXCEPTION 'Insufficient funds in account %', from_account;
    END IF;
    
    -- Perform transfer
    UPDATE accounts SET balance = balance - amount WHERE id = from_account;
    UPDATE accounts SET balance = balance + amount WHERE id = to_account;
    
    -- Log transaction
    INSERT INTO transaction_log (from_account, to_account, amount, transaction_date)
    VALUES (from_account, to_account, amount, CURRENT_TIMESTAMP);
    
    RETURN TRUE;
    
EXCEPTION
    WHEN OTHERS THEN
        -- Log error and re-raise
        INSERT INTO error_log (error_message, error_time)
        VALUES (SQLERRM, CURRENT_TIMESTAMP);
        RAISE;
END;
$$ LANGUAGE plpgsql;

======== Table Functions ========
CREATE OR REPLACE FUNCTION monthly_sales(year_param INTEGER)
RETURNS TABLE(month INTEGER, total_sales NUMERIC) AS $$
BEGIN
    RETURN QUERY
    SELECT EXTRACT(MONTH FROM order_date)::INTEGER, SUM(total_amount)
    FROM orders
    WHERE EXTRACT(YEAR FROM order_date) = year_param
    GROUP BY EXTRACT(MONTH FROM order_date)
    ORDER BY month;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Procedures (PostgreSQL 11+)',
          description: 'Create stored procedures',
          usage: 'CREATE PROCEDURE, CALL',
          example: `======== Basic Procedure ========
CREATE OR REPLACE PROCEDURE update_user_last_login(user_id_param INTEGER)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE users 
    SET last_login = CURRENT_TIMESTAMP 
    WHERE id = user_id_param;
    
    COMMIT;
END;
$$;

# Call procedure
CALL update_user_last_login(123);

======== Procedure with Parameters ========
CREATE OR REPLACE PROCEDURE create_order_with_items(
    p_user_id INTEGER,
    p_items JSONB,
    OUT p_order_id INTEGER
)
LANGUAGE plpgsql AS $$
DECLARE
    item_record JSONB;
    product_id INTEGER;
    quantity INTEGER;
    price NUMERIC;
    total_amount NUMERIC := 0;
BEGIN
    -- Create order header
    INSERT INTO orders (user_id, total_amount, status)
    VALUES (p_user_id, 0, 'pending')
    RETURNING id INTO p_order_id;
    
    -- Process each item
    FOR item_record IN SELECT * FROM jsonb_array_elements(p_items)
    LOOP
        product_id := (item_record->>'product_id')::INTEGER;
        quantity := (item_record->>'quantity')::INTEGER;
        
        -- Get product price
        SELECT price INTO price FROM products WHERE id = product_id;
        
        -- Insert order item
        INSERT INTO order_items (order_id, product_id, quantity, price)
        VALUES (p_order_id, product_id, quantity, price);
        
        -- Update total
        total_amount := total_amount + (price * quantity);
    END LOOP;
    
    -- Update order total
    UPDATE orders 
    SET total_amount = total_amount 
    WHERE id = p_order_id;
    
    COMMIT;
END;
$$;

# Call procedure with output
CALL create_order_with_items(123, '[
    {"product_id": 1, "quantity": 2},
    {"product_id": 3, "quantity": 1}
]', NULL);

======== Procedure with Exception Handling ========
CREATE OR REPLACE PROCEDURE bulk_update_prices(
    category_id INTEGER,
    percentage_increase NUMERIC
)
LANGUAGE plpgsql AS $$
DECLARE
    updated_count INTEGER := 0;
BEGIN
    -- Update prices in batch
    UPDATE products 
    SET price = price * (1 + percentage_increase / 100),
        updated_at = CURRENT_TIMESTAMP
    WHERE category_id = category_id;
    
    GET DIAGNOSTICS updated_count = ROW_COUNT;
    
    -- Log the update
    INSERT INTO price_update_log (
        category_id, 
        percentage_increase, 
        products_updated, 
        update_time
    ) VALUES (
        category_id, 
        percentage_increase, 
        updated_count, 
        CURRENT_TIMESTAMP
    );
    
    COMMIT;
    
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        INSERT INTO error_log (error_message, error_time)
        VALUES ('Failed to update prices: ' || SQLERRM, CURRENT_TIMESTAMP);
        RAISE EXCEPTION 'Price update failed: %', SQLERRM;
END;
$$;`,
        },
      ],
    },
    {
      title: 'Triggers and Rules',
      commands: [
        {
          command: 'Creating Triggers',
          description: 'Automatic actions on data changes',
          usage: 'CREATE TRIGGER, trigger functions',
          example: `======== Audit Trigger ========
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR(50),
    operation VARCHAR(10),
    old_values JSONB,
    new_values JSONB,
    user_name VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log (table_name, operation, new_values, user_name)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(NEW), current_user);
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (table_name, operation, old_values, new_values, user_name)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), row_to_json(NEW), current_user);
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (table_name, operation, old_values, user_name)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), current_user);
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

# Apply trigger
CREATE TRIGGER audit_users_trigger
    AFTER INSERT OR UPDATE OR DELETE ON users
    FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

======== Timestamp Trigger ========
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_timestamp
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_timestamp();

======== Business Logic Trigger ========
CREATE OR REPLACE FUNCTION check_product_stock()
RETURNS TRIGGER AS $$
DECLARE
    current_stock INTEGER;
BEGIN
    -- Get current stock
    SELECT stock INTO current_stock 
    FROM products 
    WHERE id = NEW.product_id;
    
    -- Check if enough stock
    IF current_stock < NEW.quantity THEN
        RAISE EXCEPTION 'Insufficient stock for product %. Available: %', 
                       NEW.product_id, current_stock;
    END IF;
    
    -- Update stock
    UPDATE products 
    SET stock = stock - NEW.quantity 
    WHERE id = NEW.product_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_stock_trigger
    BEFORE INSERT ON order_items
    FOR EACH ROW EXECUTE FUNCTION check_product_stock();`,
        },
        {
          command: 'Advanced Trigger Patterns',
          description: 'Complex trigger implementations',
          usage: 'Conditional triggers, statement triggers',
          example: `======== Conditional Trigger ========
CREATE OR REPLACE FUNCTION conditional_audit()
RETURNS TRIGGER AS $$
BEGIN
    -- Only audit if price changed by more than 10%
    IF TG_OP = 'UPDATE' AND 
       ABS(NEW.price - OLD.price) > OLD.price * 0.1 THEN
        INSERT INTO price_change_log (
            product_id, 
            old_price, 
            new_price, 
            change_percentage,
            change_time
        ) VALUES (
            NEW.id,
            OLD.price,
            NEW.price,
            ((NEW.price - OLD.price) / OLD.price * 100),
            CURRENT_TIMESTAMP
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER price_change_trigger
    AFTER UPDATE ON products
    FOR EACH ROW 
    WHEN (OLD.price IS DISTINCT FROM NEW.price)
    EXECUTE FUNCTION conditional_audit();

======== Statement Trigger ========
CREATE OR REPLACE FUNCTION log_batch_operation()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO batch_operation_log (
        table_name,
        operation,
        row_count,
        operation_time,
        user_name
    ) VALUES (
        TG_TABLE_NAME,
        TG_OP,
        COALESCE(
            CASE TG_OP
                WHEN 'INSERT' THEN (SELECT COUNT(*) FROM inserted)
                WHEN 'DELETE' THEN (SELECT COUNT(*) FROM deleted)
                ELSE NULL
            END, 0
        ),
        CURRENT_TIMESTAMP,
        current_user
    );
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER batch_log_trigger
    AFTER INSERT OR DELETE ON orders
    FOR EACH STATEMENT EXECUTE FUNCTION log_batch_operation();

======== Instead Of Trigger (for views) ========
CREATE OR REPLACE FUNCTION update_order_summary()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO orders (user_id, total_amount)
        VALUES (NEW.user_id, NEW.total_amount);
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        UPDATE orders 
        SET total_amount = NEW.total_amount
        WHERE id = OLD.id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        DELETE FROM orders WHERE id = OLD.id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_order_summary_trigger
    INSTEAD OF INSERT OR UPDATE OR DELETE ON order_summary_view
    FOR EACH ROW EXECUTE FUNCTION update_order_summary();`,
        },
      ],
    },
    {
      title: 'PostgreSQL Security',
      commands: [
        {
          command: 'User and Role Management',
          description: 'Advanced security and permissions',
          usage: 'CREATE ROLE, GRANT, REVOKE, row-level security',
          example: `======== Role Management ========
# Create roles
CREATE ROLE read_only;
CREATE ROLE read_write;
CREATE ROLE admin;

# Grant role privileges
GRANT CONNECT ON DATABASE myapp TO read_only;
GRANT USAGE ON SCHEMA public TO read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;

GRANT CONNECT ON DATABASE myapp TO read_write;
GRANT USAGE ON SCHEMA public TO read_write;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO read_write;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO read_write;

GRANT ALL PRIVILEGES ON SCHEMA public TO admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;

# Create users and assign roles
CREATE USER app_user WITH PASSWORD 'secure_password';
GRANT read_write TO app_user;

CREATE USER analytics_user WITH PASSWORD 'analytics_password';
GRANT read_only TO analytics_user;

# Role inheritance
CREATE ROLE manager;
GRANT read_write TO manager;
GRANT CREATE ON SCHEMA public TO manager;

CREATE USER manager_user WITH PASSWORD 'manager_password';
GRANT manager TO manager_user;

======== Row-Level Security (RLS) ========
# Enable RLS on table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

# Policy for users to see own orders
CREATE POLICY user_orders_policy ON orders
    FOR ALL
    TO app_user
    USING (user_id = current_setting('app.current_user_id')::INTEGER);

# Policy for managers to see department orders
CREATE POLICY manager_orders_policy ON orders
    FOR SELECT
    TO manager_user
    USING (department_id = current_setting('app.department_id')::INTEGER);

# Check if RLS is enabled
SELECT relname, relrowsecurity FROM pg_class WHERE relname = 'orders';

======== Column-Level Security ========
# Create view with limited columns
CREATE VIEW public_user_info AS
SELECT id, username, created_at
FROM users;

GRANT SELECT ON public_user_info TO read_only;

# Using function to control access
CREATE OR REPLACE FUNCTION get_user_email(user_id INTEGER)
RETURNS VARCHAR(100) AS $$
BEGIN
    -- Only return email if user is requesting their own email
    IF current_setting('app.current_user_id', true)::INTEGER = user_id THEN
        RETURN (SELECT email FROM users WHERE id = user_id);
    ELSE
        RETURN '***@***.***';
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`,
        },
        {
          command: 'Encryption and Data Protection',
          description: 'Protect sensitive data',
          usage: 'pgcrypto extension, encryption functions',
          example: `======== Enable pgcrypto Extension ========
CREATE EXTENSION IF NOT EXISTS pgcrypto;

======== Data Encryption ========
# Symmetric encryption
CREATE TABLE sensitive_data (
    id SERIAL PRIMARY KEY,
    encrypted_data BYTEA,
    checksum VARCHAR(64)
);

# Encrypt data
INSERT INTO sensitive_data (encrypted_data, checksum)
VALUES (
    pgp_sym_encrypt('Secret message', 'encryption_key'),
    md5('Secret message')
);

# Decrypt data
SELECT pgp_sym_decrypt(encrypted_data, 'encryption_key') as decrypted_message
FROM sensitive_data;

# Public key encryption
CREATE OR REPLACE FUNCTION encrypt_with_public_key(data TEXT, public_key TEXT)
RETURNS BYTEA AS $$
BEGIN
    RETURN pgp_pub_encrypt(data, public_key);
END;
$$ LANGUAGE plpgsql;

======== Hashing Functions ========
# Password hashing
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password_hash VARCHAR(100),
    salt VARCHAR(32)
);

# Hash password with salt
CREATE OR REPLACE FUNCTION hash_password(password TEXT, salt TEXT)
RETURNS VARCHAR(100) AS $$
BEGIN
    RETURN encode(digest(salt || password, 'sha256'), 'hex');
END;
$$ LANGUAGE plpgsql;

# Usage
INSERT INTO users (username, password_hash, salt)
VALUES ('john', hash_password('password123', 'random_salt'), 'random_salt');

# Verify password
CREATE OR REPLACE FUNCTION verify_password(username TEXT, password TEXT)
RETURNS BOOLEAN AS $$
DECLARE
    stored_hash TEXT;
    user_salt TEXT;
BEGIN
    SELECT password_hash, salt INTO stored_hash, user_salt
    FROM users WHERE users.username = username;
    
    RETURN stored_hash = hash_password(password, user_salt);
END;
$$ LANGUAGE plpgsql;

======== Data Masking ========
# Create masked view
CREATE VIEW masked_users AS
SELECT 
    id, 
    username,
    CASE 
        WHEN current_user = 'admin' THEN email
        ELSE LEFT(email, 2) || '***@' || SPLIT_PART(email, '@', 2)
    END as email,
    created_at
FROM users;

# Function for conditional data display
CREATE OR REPLACE FUNCTION get_user_info_safe(user_id INTEGER)
RETURNS TABLE(username VARCHAR, email VARCHAR) AS $$
BEGIN
    RETURN QUERY
    SELECT u.username,
           CASE 
               WHEN current_user = 'admin' THEN u.email
               ELSE '***@***.***'
           END as email
    FROM users u
    WHERE u.id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`,
        },
      ],
    },
    {
      title: 'Performance Monitoring and Tuning',
      commands: [
        {
          command: 'Query Performance Analysis',
          description: 'Analyze and optimize query performance',
          usage: 'EXPLAIN, ANALYZE, pg_stat_statements',
          example: `======== Query Analysis ========
# Basic execution plan
EXPLAIN SELECT * FROM orders WHERE user_id = 123;

# Detailed execution plan with actual statistics
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) 
SELECT u.username, COUNT(o.id) as order_count
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.order_date > '2023-01-01'
GROUP BY u.username;

# Analyze specific query
EXPLAIN (ANALYZE, VERBOSE, COSTS OFF, BUFFERS, TIMING) 
SELECT * FROM large_table WHERE indexed_column = 'value';

======== pg_stat_statements Extension ========
# Enable extension
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

# View query statistics
SELECT query, calls, total_exec_time, mean_exec_time, rows
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;

# Find slow queries
SELECT query, calls, total_exec_time, mean_exec_time
FROM pg_stat_statements
WHERE mean_exec_time > 1000  -- queries taking more than 1 second
ORDER BY mean_exec_time DESC;

# Reset statistics
SELECT pg_stat_statements_reset();

======== Performance Monitoring ========
# Check active queries
SELECT pid, age(clock_timestamp(), query_start), query
FROM pg_stat_activity
WHERE state = 'active'
ORDER BY query_start;

# Find long-running queries
SELECT pid, now() - pg_stat_activity.query_start AS duration, query
FROM pg_stat_activity
WHERE (now() - pg_stat_activity.query_start) > interval '5 minutes'
ORDER BY duration DESC;

# Kill long-running query
SELECT pg_terminate_backend(pid);

# Table statistics
SELECT schemaname, tablename, 
       n_tup_ins as inserts,
       n_tup_upd as updates,
       n_tup_del as deletes,
       n_live_tup as live_tuples,
       n_dead_tup as dead_tuples
FROM pg_stat_user_tables
ORDER BY n_live_tup DESC;

# Index usage statistics
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
ORDER BY idx_scan DESC;`,
        },
        {
          command: 'Database Maintenance',
          description: 'Regular maintenance tasks',
          usage: 'VACUUM, ANALYZE, REINDEX, autovacuum tuning',
          example: `======== Vacuum and Analyze ========
# Manual vacuum
VACUUM users;
VACUUM FULL users;  -- Reclaims more space but locks table
VACUUM ANALYZE users;  -- Vacuum and update statistics

# Parallel vacuum (PostgreSQL 13+)
VACUUM (PARALLEL 4) large_table;

# Analyze specific table
ANALYZE orders;
ANALYZE VERBOSE orders;

# Database-wide vacuum
VACUUM ANALYZE;

======== Autovacuum Tuning ========
# Check autovacuum settings
SHOW autovacuum;
SHOW autovacuum_max_workers;
SHOW autovacuum_naptime;

# Table-specific autovacuum settings
ALTER TABLE orders SET (
    autovacuum_vacuum_scale_factor = 0.1,
    autovacuum_analyze_scale_factor = 0.05,
    autovacuum_vacuum_threshold = 1000
);

# Disable autovacuum for specific table
ALTER TABLE logging_table SET (
    autovacuum_enabled = false
);

======== Reindex Operations ========
# Reindex specific index
REINDEX INDEX idx_users_email;

# Reindex all indexes on table
REINDEX TABLE users;

# Reindex database (exclusive lock)
REINDEX DATABASE myapp;

# Concurrent reindex (PostgreSQL 12+)
REINDEX INDEX CONCURRENTLY idx_users_email;
REINDEX TABLE CONCURRENTLY users;

======== Maintenance Operations ========
# Check table bloat
SELECT schemaname, tablename,
       pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size,
       pg_stat_get_dead_tuples(c.oid) as dead_tuples
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE relkind = 'r'
ORDER BY dead_tuples DESC;

# Clean up orphaned temporary files
SELECT pg_size_pretty(pg_database_size(current_database()));

# Check for unused indexes
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY schemaname, tablename, indexname;

# Database size analysis
SELECT datname, 
       pg_size_pretty(pg_database_size(datname)) as size,
       pg_size_pretty(pg_database_size(datname) - pg_total_relation_size('pg_toast')) as data_size
FROM pg_database
ORDER BY pg_database_size(datname) DESC;`,
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      commands: [
        {
          command: 'Database Backup',
          description: 'Create and manage database backups',
          usage: 'pg_dump, pg_dumpall, pg_basebackup',
          example: `======== Logical Backups with pg_dump ========
# Custom format (compressed, parallel)
pg_dump -h localhost -U postgres -d myapp -Fc -f myapp_backup.dump

# Directory format (parallel dump)
pg_dump -h localhost -U postgres -d myapp -Fd -j 4 -f myapp_backup_dir/

# Plain SQL format
pg_dump -h localhost -U postgres -d myapp -f myapp_backup.sql

# Specific tables only
pg_dump -h localhost -U postgres -d myapp -t users -t orders -f tables_backup.sql

# Data only (no schema)
pg_dump -h localhost -U postgres -d myapp -a -f data_only.sql

# Schema only (no data)
pg_dump -h localhost -U postgres -d myapp -s -f schema_only.sql

======== Complete Cluster Backup ========
# All databases
pg_dumpall -h localhost -U postgres -f full_cluster_backup.sql

# Global objects only (roles, tablespaces)
pg_dumpall -h localhost -U postgres -g -f globals_only.sql

======== Physical Backup with pg_basebackup ========
# Base backup of primary server
pg_basebackup -h localhost -D /backup/base -U postgres -v -P -W

# Compressed backup
pg_basebackup -h localhost -D /backup/base -U postgres -v -P -W -z

# Backup with specific replication slot
pg_basebackup -h localhost -D /backup/base -U postgres -v -P -W -S backup_slot

======== Backup Script Example ========
#!/bin/bash
# PostgreSQL Backup Script
BACKUP_DIR="/backup/postgresql"
DATE=\$(date +%Y%m%d_%H%M%S)
DB_NAME="myapp"

# Create backup directory
mkdir -p \$BACKUP_DIR

# Custom format backup
pg_dump -h localhost -U postgres -d \$DB_NAME -Fc -f \$BACKUP_DIR/\${DB_NAME}_\${DATE}.dump

# Compress old backups (older than 7 days)
find \$BACKUP_DIR -name "*.dump" -mtime +7 -exec gzip {} \\;

# Remove backups older than 30 days
find \$BACKUP_DIR -name "*.dump.gz" -mtime +30 -delete

# Verify backup
pg_restore --list \$BACKUP_DIR/\${DB_NAME}_\${DATE}.dump > /dev/null
if [ \$? -eq 0 ]; then
    echo "Backup successful: \${DB_NAME}_\${DATE}.dump"
else
    echo "Backup failed: \${DB_NAME}_\${DATE}.dump"
fi`,
        },
        {
          command: 'Database Recovery',
          description: 'Restore databases from backups',
          usage: 'pg_restore, psql, point-in-time recovery',
          example: `======== Restore from Custom Format ========
# Restore entire database
pg_restore -h localhost -U postgres -d myapp -v myapp_backup.dump

# Restore to new database
createdb -h localhost -U postgres myapp_restored
pg_restore -h localhost -U postgres -d myapp_restored -v myapp_backup.dump

# Restore specific tables
pg_restore -h localhost -U postgres -d myapp -t users -v myapp_backup.dump

# Restore with clean (drop existing objects)
pg_restore -h localhost -U postgres -d myapp --clean --if-exists -v myapp_backup.dump

# List contents of backup
pg_restore --list myapp_backup.dump

======== Restore from SQL Dump ========
# Restore from plain SQL
psql -h localhost -U postgres -d myapp -f myapp_backup.sql

# Restore with error handling
psql -h localhost -U postgres -d myapp -v ON_ERROR_STOP=1 -f myapp_backup.sql

======== Point-in-Time Recovery (PITR) ========
# 1. Stop PostgreSQL
sudo systemctl stop postgresql

# 2. Restore base backup
rm -rf /var/lib/postgresql/16/main/*
cp -r /backup/base/* /var/lib/postgresql/16/main/

# 3. Create recovery.conf
cat > /var/lib/postgresql/16/main/recovery.conf << EOF
restore_command = 'cp /backup/wal_archive/%f %p'
recovery_target_time = '2023-12-25 10:30:00'
standby_mode = 'off'
EOF

# 4. Start PostgreSQL
sudo systemctl start postgresql

# 5. Monitor recovery
tail -f /var/log/postgresql/postgresql-16-main.log

======== Recovery Testing ========
# Test backup integrity
pg_restore --schema-only myapp_backup.dump | head -20

# Test restore to temporary database
createdb test_restore
pg_restore -h localhost -U postgres -d test_restore myapp_backup.dump
psql -h localhost -U postgres -d test_restore -c "SELECT COUNT(*) FROM users;"
dropdb test_restore

# Automated recovery test script
#!/bin/bash
BACKUP_FILE=$1
TEST_DB="test_recovery_$(date +%s)"

createdb $TEST_DB
if pg_restore -h localhost -U postgres -d $TEST_DB $BACKUP_FILE; then
    echo "Backup $BACKUP_FILE is valid"
    dropdb $TEST_DB
    exit 0
else
    echo "Backup $BACKUP_FILE is invalid"
    dropdb $TEST_DB
    exit 1
fi`,
        },
      ],
    },
    {
      title: 'PostgreSQL Extensions',
      commands: [
        {
          command: 'Popular Extensions',
          description: 'Extend PostgreSQL functionality',
          usage: 'CREATE EXTENSION, extension management',
          example: `======== Essential Extensions ========
# PostGIS for geographic data
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS postgis_topology;

# UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

# Full-text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

# Cryptographic functions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

# Foreign data wrappers
CREATE EXTENSION IF NOT EXISTS postgres_fdw;
CREATE EXTENSION IF NOT EXISTS file_fdw;

# Statistics
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

# Additional data types
CREATE EXTENSION IF NOT EXISTS hstore;  -- Key-value pairs
CREATE EXTENSION IF NOT EXISTS ltree;   -- Tree structures

======== PostGIS Examples ========
# Create table with geometry
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    geom GEOMETRY(POINT, 4326)
);

# Insert location data
INSERT INTO locations (name, geom) 
VALUES ('New York', ST_GeomFromText('POINT(-74.0060 40.7128)', 4326));

# Spatial queries
SELECT name, ST_Distance(geom, ST_GeomFromText('POINT(-74.0060 40.7128)', 4326)) as distance
FROM locations
ORDER BY distance
LIMIT 5;

# Find points within radius
SELECT name 
FROM locations 
WHERE ST_DWithin(geom, ST_GeomFromText('POINT(-74.0060 40.7128)', 4326), 1000);

======== UUID Extension ========
# UUID column
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE
);

# Generate UUIDs
SELECT uuid_generate_v1();
SELECT uuid_generate_v4();

======== pg_trgm Extension ========
# Trigram similarity search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

# Create GIN index for similarity
CREATE INDEX idx_products_name_trgm ON products USING GIN (name gin_trgm_ops);

# Similarity search
SELECT name, similarity(name, 'Laptop') as similarity_score
FROM products
WHERE name % 'Laptop'
ORDER BY similarity_score DESC;

# Fast LIKE/ILIKE with trigrams
SELECT * FROM products WHERE name ILIKE '%lap%';

======== hstore Extension ========
# Key-value store
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    attributes hstore
);

# Insert hstore data
INSERT INTO products (name, attributes)
VALUES ('Laptop', 'brand => Dell, ram => 16GB, storage => SSD');

# Query hstore
SELECT name, attributes->'brand' as brand
FROM products
WHERE attributes ? 'ram' AND attributes->'ram' = '16GB';

# Update hstore
UPDATE products 
SET attributes = attributes || 'color => black'
WHERE id = 1;`,
        },
        {
          command: 'Foreign Data Wrappers',
          description: 'Access external data sources',
          usage: 'postgres_fdw, file_fdw, custom FDWs',
          example: `======== PostgreSQL Foreign Data Wrapper ========
# Create foreign server
CREATE SERVER remote_db 
FOREIGN DATA WRAPPER postgres_fdw 
OPTIONS (host 'remote-host.com', dbname 'remote_db', port '5432');

# Create user mapping
CREATE USER MAPPING FOR local_user 
SERVER remote_db 
OPTIONS (user 'remote_user', password 'remote_password');

# Import foreign table
IMPORT FOREIGN SCHEMA public 
LIMIT TO (users, orders) 
FROM SERVER remote_db 
INTO SCHEMA foreign_schema;

# Query foreign tables
SELECT * FROM foreign_schema.users;

# Create foreign table manually
CREATE FOREIGN TABLE remote_products (
    id INTEGER,
    name VARCHAR(100),
    price NUMERIC
) SERVER remote_db 
OPTIONS (schema_name 'public', table_name 'products');

======== File FDW ========
# Create file server
CREATE SERVER log_files 
FOREIGN DATA WRAPPER file_fdw;

# Create foreign table for log file
CREATE FOREIGN TABLE access_log (
    timestamp TIMESTAMP,
    ip_address INET,
    request TEXT,
    status_code INTEGER
) SERVER log_files 
OPTIONS (filename '/var/log/nginx/access.log', format 'csv', header 'false');

# Query log file
SELECT timestamp, ip_address, status_code 
FROM access_log 
WHERE status_code >= 400
ORDER BY timestamp DESC
LIMIT 10;

======== CSV File Import ========
# Create foreign table for CSV
CREATE FOREIGN TABLE products_import (
    id INTEGER,
    name VARCHAR(100),
    category VARCHAR(50),
    price NUMERIC
) SERVER csv_server 
OPTIONS (filename '/data/products.csv', format 'csv', header 'true');

# Import data from CSV
INSERT INTO products (id, name, category, price)
SELECT id, name, category, price 
FROM products_import;

# Update existing data
UPDATE products p
SET price = i.price
FROM products_import i
WHERE p.id = i.id;`,
        },
      ],
    },
    {
      title: 'PostgreSQL Best Practices',
      commands: [
        {
          command: 'Database Design Best Practices',
          description: 'Optimal database design patterns',
          usage: 'Normalization, indexing strategies, constraints',
          example: `======== Normalization Guidelines ========
# First Normal Form (1NF) - Atomic values
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Avoid: CREATE TABLE users (id, username, tags TEXT) -- 'tag1,tag2,tag3'
-- Use: CREATE TABLE user_tags (user_id, tag_name)

# Second Normal Form (2NF) - No partial dependencies
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER,
    price NUMERIC
);

# Third Normal Form (3NF) - No transitive dependencies
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    department_id INTEGER REFERENCES departments(id)
);

-- Instead of storing department_name in users table

======== Indexing Strategy ========
# Primary keys (automatic)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,  -- Automatic unique index
    name VARCHAR(100),
    category_id INTEGER
);

# Foreign keys
CREATE INDEX idx_products_category_id ON products(category_id);

# Columns in WHERE clauses
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);

# Columns in JOIN conditions
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

# Columns in ORDER BY
CREATE INDEX idx_products_price ON products(price DESC);

# Partial indexes for common queries
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';
CREATE INDEX idx_recent_orders ON orders(order_date) 
WHERE order_date > CURRENT_DATE - INTERVAL '30 days';

======== Constraint Best Practices ========
# Use appropriate constraints
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price >= 0),
    category_id INTEGER REFERENCES categories(id) ON DELETE RESTRICT,
    sku VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Complex check constraints
ALTER TABLE orders 
ADD CONSTRAINT valid_total_amount 
CHECK (total_amount > 0 AND total_amount < 1000000);

# Named constraints for better error messages
ALTER TABLE users 
ADD CONSTRAINT valid_email 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize PostgreSQL performance',
          usage: 'Query optimization, configuration tuning',
          example: `======== Query Optimization ========
# Use appropriate data types
CREATE TABLE events (
    id BIGSERIAL PRIMARY KEY,           -- Use BIGSERIAL for large tables
    event_date TIMESTAMP NOT NULL,      -- Not VARCHAR
    user_id INTEGER NOT NULL,           -- Not VARCHAR for IDs
    event_type VARCHAR(20) NOT NULL,    -- Limited length
    metadata JSONB                      -- Use JSONB for JSON data
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

======== Configuration Optimization ========
# Memory settings (postgresql.conf)
shared_buffers = 256MB                    -- 25% of RAM
effective_cache_size = 1GB                -- 75% of RAM
work_mem = 4MB                            -- Per operation
maintenance_work_mem = 64MB               -- Maintenance operations
checkpoint_completion_target = 0.9        -- Checkpoint tuning

# Connection settings
max_connections = 100                     -- Based on application needs
shared_preload_libraries = 'pg_stat_statements'  -- Load extensions

# WAL settings
wal_buffers = 16MB                        -- WAL buffer size
default_statistics_target = 100          -- Better statistics

# Autovacuum tuning
autovacuum_max_workers = 3                -- Parallel vacuum workers
autovacuum_naptime = 10s                  -- Check frequency

======== Monitoring and Maintenance ========
# Regular maintenance script
#!/bin/bash
psql -d myapp -c "VACUUM ANALYZE;"
psql -d myapp -c "SELECT pg_stat_reset();"

# Monitor long-running queries
SELECT pid, now() - query_start as duration, query 
FROM pg_stat_activity 
WHERE state = 'active' 
AND now() - query_start > interval '5 minutes';

# Check table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size,
    pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) as table_size,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - 
                   pg_relation_size(schemaname||'.'||tablename)) as index_size
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;`,
        },
        {
          command: 'Security Best Practices',
          description: 'Secure PostgreSQL deployment',
          usage: 'Authentication, encryption, access control',
          example: `======== Authentication Security ========
# Use strong passwords
ALTER USER postgres PASSWORD 'very-strong-password';

# Create application-specific users
CREATE USER app_user WITH PASSWORD 'app-specific-password';
CREATE USER readonly_user WITH PASSWORD 'readonly-password';

# Limit superuser access
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO PUBLIC;

# Use connection limits
ALTER USER app_user CONNECTION LIMIT 50;

======== Network Security ========
# Bind to specific interfaces
listen_addresses = 'localhost, 10.0.0.1'

# Use SSL/TLS
ssl = on
ssl_cert_file = '/etc/ssl/certs/server.crt'
ssl_key_file = '/etc/ssl/private/server.key'

# Require SSL for remote connections
hostssl all all 0.0.0.0/0 md5

# pg_hba.conf security
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   all             postgres                                peer
local   all             all                                     md5
host    all             all             127.0.0.1/32            md5
host    all             all             10.0.0.0/8              md5
host    all             all             0.0.0.0/0               md5

======== Data Encryption ========
# Enable pgcrypto for column encryption
CREATE EXTENSION IF NOT EXISTS pgcrypto;

# Encrypt sensitive columns
CREATE TABLE sensitive_data (
    id SERIAL PRIMARY KEY,
    encrypted_email BYTEA,
    encrypted_phone BYTEA
);

-- Insert encrypted data
INSERT INTO sensitive_data (encrypted_email, encrypted_phone)
VALUES (
    pgp_sym_encrypt('user@example.com', 'encryption-key'),
    pgp_sym_encrypt('555-0123', 'encryption-key')
);

-- Create secure view
CREATE VIEW user_profile AS
SELECT 
    id,
    pgp_sym_decrypt(encrypted_email, 'encryption-key') as email
FROM sensitive_data;

======== Access Control ========
# Row-level security
ALTER TABLE sensitive_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_data_policy ON sensitive_data
    FOR ALL TO app_user
    USING (user_id = current_setting('app.current_user_id')::INTEGER);

# Column-level security
CREATE VIEW public_profile AS
SELECT id, username, created_at
FROM users;

GRANT SELECT ON public_profile TO readonly_user;

# Audit access
CREATE OR REPLACE FUNCTION audit_access()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO access_log (table_name, operation, user_name, timestamp)
    VALUES (TG_TABLE_NAME, TG_OP, current_user, CURRENT_TIMESTAMP);
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_sensitive_access
    AFTER SELECT ON sensitive_data
    FOR EACH STATEMENT EXECUTE FUNCTION audit_access();`,
        },
      ],
    },
  ],
};
