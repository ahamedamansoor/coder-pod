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
          command: 'MariaDB Overview',
          description: 'Introduction to MariaDB database',
          usage: 'Understanding MariaDB basics',
          example: `MariaDB Overview:
- Open-source relational database
- Fork of MySQL with enhanced features
- Drop-in replacement for MySQL
- ACID compliant
- Storage engine architecture (Aria, InnoDB, MyRocks)
- JSON support, window functions, CTEs
- Galera cluster for replication`,
        },
        {
          command: 'Install MariaDB Ubuntu',
          description: 'Install MariaDB on Ubuntu/Debian',
          usage: 'apt package manager installation',
          example: `# Ubuntu/Debian Installation
sudo apt update
sudo apt install mariadb-server mariadb-client`,
        },
        {
          command: 'Install MariaDB macOS',
          description: 'Install MariaDB on macOS with Homebrew',
          usage: 'Homebrew installation',
          example: `# macOS with Homebrew
brew install mariadb
brew services start mariadb`,
        },
        {
          command: 'Install MariaDB Windows',
          description: 'Install MariaDB on Windows',
          usage: 'Download and run installer',
          example: `# Windows Installation
# Download from https://mariadb.org/download/
# Run installer and follow setup wizard`,
        },
        {
          command: 'Install MariaDB CentOS',
          description: 'Install MariaDB on CentOS/RHEL',
          usage: 'yum package manager installation',
          example: `# CentOS/RHEL Installation
sudo yum install mariadb-server mariadb
sudo systemctl start mariadb
sudo systemctl enable mariadb`,
        },
        {
          command: 'Install MariaDB Source',
          description: 'Compile MariaDB from source',
          usage: 'Build from source code',
          example: `# From source (latest version)
wget https://downloads.mariadb.org/f/mariadb-11.2/source/mariadb-11.2.0.tar.gz
tar xzf mariadb-11.2.0.tar.gz
cd mariadb-11.2.0
cmake .
make
sudo make install`,
        },
        {
          command: 'Verify MariaDB Installation',
          description: 'Check MariaDB version and installation',
          usage: 'mysql, mariadb version commands',
          example: `# Verify Installation
mysql --version
mariadb --version`,
        },
        {
          command: 'Start MariaDB Service',
          description: 'Start and check MariaDB service status',
          usage: 'systemctl commands',
          example: `# Start MariaDB service
sudo systemctl start mariadb
sudo systemctl status mariadb`,
        },
        {
          command: 'Secure MariaDB Installation',
          description: 'Run security script for initial setup',
          usage: 'mysql_secure_installation',
          example: `# Secure installation
sudo mysql_secure_installation
# Follow prompts for:
# - Set root password
# - Remove anonymous users
# - Disallow remote root login
# - Remove test database
# - Reload privilege tables`,
        },
        {
          command: 'Connect to MariaDB',
          description: 'Connect to MariaDB server',
          usage: 'mysql, mariadb client',
          example: `# Connect to MariaDB
mysql -u root -p
# or
mariadb -u root -p

# Connect to specific database
mysql -u username -p database_name
# Connect to remote server
mysql -h hostname -u username -p`,
        },
        {
          command: 'Basic SQL Commands',
          description: 'Essential SQL commands',
          usage: 'SHOW, USE, CREATE, DROP',
          example: `# Basic SQL commands
SHOW DATABASES;                    # List databases
CREATE DATABASE myapp;             # Create database
USE myapp;                         # Switch to database
DROP DATABASE myapp;               # Delete database
SHOW TABLES;                       # Show tables in current db`,
        },
        {
          command: 'Create Table Basic',
          description: 'Create a simple table',
          usage: 'CREATE TABLE statement',
          example: `# Create basic table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        {
          command: 'Insert Data',
          description: 'Insert data into table',
          usage: 'INSERT INTO statement',
          example: `# Insert single record
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

# Insert multiple records
INSERT INTO users (name, email) VALUES 
    ('Alice Smith', 'alice@example.com'),
    ('Bob Johnson', 'bob@example.com');`,
        },
        {
          command: 'Select Data',
          description: 'Retrieve data from table',
          usage: 'SELECT statement',
          example: `# Select all data
SELECT * FROM users;

# Select specific columns
SELECT name, email FROM users;

# Select with condition
SELECT * FROM users WHERE name = 'John Doe';

# Select with ordering
SELECT * FROM users ORDER BY created_at DESC;`,
        },
        {
          command: 'Update Data',
          description: 'Update existing data',
          usage: 'UPDATE statement',
          example: `# Update single record
UPDATE users SET email = 'john.doe@newdomain.com' WHERE id = 1;

# Update multiple records
UPDATE users SET status = 'active' WHERE created_at > '2023-01-01';`,
        },
        {
          command: 'Delete Data',
          description: 'Delete data from table',
          usage: 'DELETE statement',
          example: `# Delete specific record
DELETE FROM users WHERE id = 1;

# Delete with condition
DELETE FROM users WHERE created_at < '2022-01-01';

# Delete all records (keep table)
DELETE FROM users;`,
        },
        {
          command: 'Drop Table',
          description: 'Delete entire table',
          usage: 'DROP TABLE statement',
          example: `# Drop table
DROP TABLE users;

# Drop table if exists
DROP TABLE IF EXISTS users;`,
        },
      ],
    },
    {
      title: 'Data Types and Constraints',
      commands: [
        {
          command: 'Numeric Data Types',
          description: 'Integer and floating-point types',
          usage: 'INT, BIGINT, DECIMAL, FLOAT, DOUBLE',
          example: `# Numeric data types
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    price DECIMAL(10,2),           -- Fixed-point
    weight FLOAT,                  -- Single precision
    rating DOUBLE,                  -- Double precision
    quantity BIGINT,               -- Large integers
    small_num TINYINT,            -- Very small integers
    medium_num MEDIUMINT          -- Medium integers
);`,
        },
        {
          command: 'String Data Types',
          description: 'Character and text types',
          usage: 'CHAR, VARCHAR, TEXT, BLOB',
          example: `# String data types
CREATE TABLE documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),            -- Variable length string
    code CHAR(10),                 -- Fixed length string
    description TEXT,              -- Long text
    content LONGTEXT,              -- Very long text
    file_data BLOB,                -- Binary data
    uuid CHAR(36)                 -- UUID strings
);`,
        },
        {
          command: 'Date and Time Types',
          description: 'Temporal data types',
          usage: 'DATE, TIME, DATETIME, TIMESTAMP, YEAR',
          example: `# Date and time types
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_date DATE,               -- YYYY-MM-DD
    event_time TIME,               -- HH:MM:SS
    event_datetime DATETIME,       -- YYYY-MM-DD HH:MM:SS
    created_at TIMESTAMP,          -- Auto-updating timestamp
    updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    event_year YEAR               -- YYYY
);`,
        },
        {
          command: 'JSON Data Types',
          description: 'JSON and JSON functions',
          usage: 'JSON, JSON_EXTRACT, JSON functions',
          example: `# JSON data types
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    attributes JSON,               -- JSON column
    metadata LONGTEXT              -- JSON as text
);

-- Insert JSON data
INSERT INTO products (name, attributes) VALUES 
('Laptop', '{"color": "black", "ram": "16GB", "storage": "512GB"}');

-- Query JSON data
SELECT name, JSON_EXTRACT(attributes, '$.color') as color FROM products;`,
        },
        {
          command: 'Primary Key Constraint',
          description: 'Define primary key',
          usage: 'PRIMARY KEY constraint',
          example: `# Primary key constraints
-- Single column primary key
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
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
          command: 'Foreign Key Constraint',
          description: 'Define relationships between tables',
          usage: 'FOREIGN KEY constraint',
          example: `# Foreign key constraints
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Add foreign key to existing table
ALTER TABLE orders ADD CONSTRAINT fk_user 
    FOREIGN KEY (user_id) REFERENCES users(id);`,
        },
        {
          command: 'Unique Constraint',
          description: 'Ensure unique values',
          usage: 'UNIQUE constraint',
          example: `# Unique constraints
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50) UNIQUE
);

-- Add unique constraint
ALTER TABLE users ADD CONSTRAINT uk_email UNIQUE (email);`,
        },
        {
          command: 'Check Constraint',
          description: 'Validate data values',
          usage: 'CHECK constraint',
          example: `# Check constraints
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    price DECIMAL(10,2) CHECK (price > 0),
    quantity INT CHECK (quantity >= 0),
    age_limit INT CHECK (age_limit BETWEEN 0 AND 18)
);`,
        },
        {
          command: 'NOT NULL Constraint',
          description: 'Require non-null values',
          usage: 'NOT NULL constraint',
          example: `# NOT NULL constraints
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20)              -- Can be NULL
);`,
        },
        {
          command: 'Default Values',
          description: 'Set default column values',
          usage: 'DEFAULT constraint',
          example: `# Default values
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Queries and Joins',
      commands: [
        {
          command: 'Inner Join',
          description: 'Join tables with matching rows',
          usage: 'INNER JOIN clause',
          example: `# Inner join
SELECT u.name, o.order_date, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.total > 100;`,
        },
        {
          command: 'Left Join',
          description: 'Join with all left table rows',
          usage: 'LEFT JOIN clause',
          example: `# Left join
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;`,
        },
        {
          command: 'Right Join',
          description: 'Join with all right table rows',
          usage: 'RIGHT JOIN clause',
          example: `# Right join
SELECT p.name, c.name as category
FROM products p
RIGHT JOIN categories c ON p.category_id = c.id;`,
        },
        {
          command: 'Full Outer Join',
          description: 'Join with all rows from both tables',
          usage: 'FULL OUTER JOIN clause',
          example: `# Full outer join
SELECT u.name, o.order_date
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;`,
        },
        {
          command: 'Self Join',
          description: 'Join table to itself',
          usage: 'Self-referencing join',
          example: `# Self join (employee-manager relationship)
SELECT e.name as employee, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,
        },
        {
          command: 'Cross Join',
          description: 'Cartesian product of tables',
          usage: 'CROSS JOIN clause',
          example: `# Cross join
SELECT p.name, c.name as color
FROM products p
CROSS JOIN colors c;`,
        },
        {
          command: 'Subquery in SELECT',
          description: 'Use subquery in SELECT clause',
          usage: 'Scalar subquery',
          example: `# Subquery in SELECT
SELECT name, 
       (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count
FROM users u;`,
        },
        {
          command: 'Subquery in WHERE',
          description: 'Use subquery in WHERE clause',
          usage: 'Subquery with IN, EXISTS',
          example: `# Subquery in WHERE
SELECT name FROM users 
WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);

-- Using EXISTS
SELECT name FROM users u 
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);`,
        },
        {
          command: 'Subquery in FROM',
          description: 'Use subquery as derived table',
          usage: 'Derived table subquery',
          example: `# Subquery in FROM
SELECT avg_total FROM (
    SELECT user_id, SUM(total) as user_total
    FROM orders 
    GROUP BY user_id
) as user_totals
WHERE user_total > 500;`,
        },
        {
          command: 'Union Operations',
          description: 'Combine result sets',
          usage: 'UNION, UNION ALL',
          example: `# Union operations
SELECT name, 'admin' as role FROM admins
UNION
SELECT name, 'user' as role FROM users;

-- Union all (includes duplicates)
SELECT name FROM active_users
UNION ALL
SELECT name FROM inactive_users;`,
        },
        {
          command: 'Intersect and Except',
          description: 'Set operations with INTERSECT, EXCEPT',
          usage: 'INTERSECT, EXCEPT clauses',
          example: `# Intersect (common records)
SELECT user_id FROM orders
INTERSECT
SELECT user_id FROM returns;

-- Except (records in first but not second)
SELECT user_id FROM premium_users
EXCEPT
SELECT user_id FROM expired_users;`,
        },
      ],
    },
    {
      title: 'Aggregate Functions and Grouping',
      commands: [
        {
          command: 'COUNT Function',
          description: 'Count rows or values',
          usage: 'COUNT(), COUNT(DISTINCT)',
          example: `# COUNT functions
SELECT COUNT(*) as total_rows FROM users;
SELECT COUNT(email) as non_null_emails FROM users;
SELECT COUNT(DISTINCT city) as unique_cities FROM users;`,
        },
        {
          command: 'SUM Function',
          description: 'Sum numeric values',
          usage: 'SUM() function',
          example: `# SUM function
SELECT SUM(total) as total_sales FROM orders;
SELECT SUM(quantity * price) as total_value FROM order_items;`,
        },
        {
          command: 'AVG Function',
          description: 'Calculate average values',
          usage: 'AVG() function',
          example: `# AVG function
SELECT AVG(price) as avg_price FROM products;
SELECT AVG(total) as avg_order_value FROM orders;`,
        },
        {
          command: 'MIN and MAX Functions',
          description: 'Find minimum and maximum values',
          usage: 'MIN(), MAX() functions',
          example: `# MIN and MAX functions
SELECT MIN(price) as min_price, MAX(price) as max_price FROM products;
SELECT MIN(order_date) as first_order, MAX(order_date) as last_order FROM orders;`,
        },
        {
          command: 'GROUP BY Basics',
          description: 'Group rows for aggregation',
          usage: 'GROUP BY clause',
          example: `# Basic GROUP BY
SELECT category, COUNT(*) as product_count
FROM products
GROUP BY category;

-- Multiple columns
SELECT category, brand, AVG(price) as avg_price
FROM products
GROUP BY category, brand;`,
        },
        {
          command: 'HAVING Clause',
          description: 'Filter groups after aggregation',
          usage: 'HAVING clause',
          example: `# HAVING clause
SELECT category, COUNT(*) as product_count
FROM products
GROUP BY category
HAVING COUNT(*) > 10;

-- Complex condition
SELECT user_id, SUM(total) as total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total) > 1000 AND COUNT(*) >= 5;`,
        },
        {
          command: 'GROUP WITH ROLLUP',
          description: 'Create subtotals and grand totals',
          usage: 'GROUP BY ... WITH ROLLUP',
          example: `# GROUP BY with ROLLUP
SELECT category, brand, COUNT(*) as count
FROM products
GROUP BY category, brand WITH ROLLUP;

-- Results include:
-- Category + Brand combinations
-- Category subtotals (brand = NULL)
-- Grand total (category = NULL, brand = NULL)`,
        },
        {
          command: 'GROUPING Function',
          description: 'Identify rollup rows',
          usage: 'GROUPING() function',
          example: `# GROUPING function
SELECT 
    category,
    brand,
    COUNT(*) as count,
    GROUPING(category) as is_category_rollup,
    GROUPING(brand) as is_brand_rollup
FROM products
GROUP BY category, brand WITH ROLLUP;`,
        },
        {
          command: 'Aggregate Window Functions',
          description: 'Window functions with aggregates',
          usage: 'OVER() clause with aggregates',
          example: `# Aggregate window functions
SELECT 
    name,
    salary,
    AVG(salary) OVER () as avg_salary,
    SUM(salary) OVER (ORDER BY hire_date) as cumulative_salary,
    COUNT(*) OVER (PARTITION BY department) as dept_count
FROM employees;`,
        },
      ],
    },
    {
      title: 'Window Functions',
      commands: [
        {
          command: 'ROW_NUMBER Function',
          description: 'Assign sequential numbers to rows',
          usage: 'ROW_NUMBER() window function',
          example: `# ROW_NUMBER function
SELECT 
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as salary_rank,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;`,
        },
        {
          command: 'RANK and DENSE_RANK',
          description: 'Rank rows with ties',
          usage: 'RANK(), DENSE_RANK() functions',
          example: `# RANK and DENSE_RANK
SELECT 
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) as rank_with_gaps,
    DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank_no_gaps
FROM employees;`,
        },
        {
          command: 'NTILE Function',
          description: 'Divide rows into groups',
          usage: 'NTILE() function',
          example: `# NTILE function
SELECT 
    name,
    salary,
    NTILE(4) OVER (ORDER BY salary DESC) as quartile,
    CASE 
        WHEN NTILE(4) OVER (ORDER BY salary DESC) = 1 THEN 'Top 25%'
        WHEN NTILE(4) OVER (ORDER BY salary DESC) = 4 THEN 'Bottom 25%'
    END as performance_group
FROM employees;`,
        },
        {
          command: 'LAG and LEAD Functions',
          description: 'Access previous/next row values',
          usage: 'LAG(), LEAD() functions',
          example: `# LAG and LEAD functions
SELECT 
    order_date,
    total,
    LAG(total, 1) OVER (ORDER BY order_date) as previous_order_total,
    LEAD(total, 1) OVER (ORDER BY order_date) as next_order_total,
    total - LAG(total, 1) OVER (ORDER BY order_date) as difference
FROM orders;`,
        },
        {
          command: 'FIRST_VALUE and LAST_VALUE',
          description: 'Get first/last values in window',
          usage: 'FIRST_VALUE(), LAST_VALUE() functions',
          example: `# FIRST_VALUE and LAST_VALUE
SELECT 
    department,
    name,
    salary,
    FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC) as highest_paid,
    LAST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC 
                          ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as lowest_paid
FROM employees;`,
        },
        {
          command: 'Window Frame Clauses',
          description: 'Define window frame boundaries',
          usage: 'ROWS BETWEEN, RANGE BETWEEN',
          example: `# Window frame clauses
SELECT 
    order_date,
    total,
    SUM(total) OVER (ORDER BY order_date 
                     ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_3day_total,
    AVG(total) OVER (ORDER BY order_date 
                     RANGE BETWEEN INTERVAL '7 DAY' PRECEDING AND CURRENT ROW) as moving_7day_avg
FROM orders;`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Stored Procedures and Functions',
      commands: [
        {
          command: 'Create Procedure',
          description: 'Create stored procedure',
          usage: 'CREATE PROCEDURE statement',
          example: `# Create basic procedure
DELIMITER //
CREATE PROCEDURE GetUserOrders(IN user_id INT)
BEGIN
    SELECT o.id, o.order_date, o.total
    FROM orders o
    WHERE o.user_id = user_id
    ORDER BY o.order_date DESC;
END //
DELIMITER ;

# Call procedure
CALL GetUserOrders(123);`,
        },
        {
          command: 'Procedure with Parameters',
          description: 'Procedure with input/output parameters',
          usage: 'IN, OUT, INOUT parameters',
          example: `# Procedure with parameters
DELIMITER //
CREATE PROCEDURE GetUserStats(
    IN user_id INT,
    OUT order_count INT,
    OUT total_spent DECIMAL(10,2)
)
BEGIN
    SELECT COUNT(*) INTO order_count
    FROM orders WHERE user_id = user_id;
    
    SELECT COALESCE(SUM(total), 0) INTO total_spent
    FROM orders WHERE user_id = user_id;
END //
DELIMITER ;

# Call with output parameters
CALL GetUserStats(123, @order_count, @total_spent);
SELECT @order_count, @total_spent;`,
        },
        {
          command: 'Create Function',
          description: 'Create user-defined function',
          usage: 'CREATE FUNCTION statement',
          example: `# Create function
DELIMITER //
CREATE FUNCTION CalculateDiscount(price DECIMAL(10,2), discount_percent DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN price * (1 - discount_percent / 100);
END //
DELIMITER ;

# Use function
SELECT name, price, CalculateDiscount(price, 10) as discounted_price
FROM products;`,
        },
        {
          command: 'Control Structures',
          description: 'IF/ELSE, CASE, LOOP in procedures',
          usage: 'Control flow statements',
          example: `# Control structures in procedure
DELIMITER //
CREATE PROCEDURE CategorizePrice(IN price DECIMAL(10,2), OUT category VARCHAR(20))
BEGIN
    IF price < 10 THEN
        SET category = 'Budget';
    ELSEIF price < 50 THEN
        SET category = 'Mid-range';
    ELSEIF price < 100 THEN
        SET category = 'Premium';
    ELSE
        SET category = 'Luxury';
    END IF;
END //
DELIMITER ;`,
        },
        {
          command: 'LOOP and WHILE',
          description: 'Looping structures in procedures',
          usage: 'LOOP, WHILE, REPEAT statements',
          example: `# Loop structures
DELIMITER //
CREATE PROCEDURE GenerateNumbers(IN count INT)
BEGIN
    DECLARE i INT DEFAULT 1;
    
    WHILE i <= count DO
        INSERT INTO numbers (value) VALUES (i);
        SET i = i + 1;
    END WHILE;
END //
DELIMITER ;

# Another example with LOOP
DELIMITER //
CREATE PROCEDURE ProcessBatch()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE order_id INT;
    
    DECLARE cursor CURSOR FOR SELECT id FROM orders WHERE status = 'pending';
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN cursor;
    
    read_loop: LOOP
        FETCH cursor INTO order_id;
        IF done THEN
            LEAVE read_loop;
        END IF;
        
        UPDATE orders SET status = 'processed' WHERE id = order_id;
    END LOOP;
    
    CLOSE cursor;
END //
DELIMITER ;`,
        },
        {
          command: 'Error Handling',
          description: 'Handle exceptions in procedures',
          usage: 'DECLARE HANDLER statement',
          example: `# Error handling
DELIMITER //
CREATE PROCEDURE SafeInsert(IN name VARCHAR(100), OUT result VARCHAR(100))
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        GET DIAGNOSTICS CONDITION 1 result = MESSAGE_TEXT;
    END;
    
    INSERT INTO users (name) VALUES (name);
    SET result = 'Success';
END //
DELIMITER ;`,
        },
        {
          command: 'Drop Procedure and Function',
          description: 'Remove procedures and functions',
          usage: 'DROP PROCEDURE, DROP FUNCTION',
          example: `# Drop procedure
DROP PROCEDURE IF EXISTS GetUserOrders;

# Drop function
DROP FUNCTION IF EXISTS CalculateDiscount;`,
        },
      ],
    },
    {
      title: 'Triggers and Events',
      commands: [
        {
          command: 'Create Trigger',
          description: 'Create database trigger',
          usage: 'CREATE TRIGGER statement',
          example: `# Create trigger
DELIMITER //
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SET NEW.created_at = CURRENT_TIMESTAMP;
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //
DELIMITER ;`,
        },
        {
          command: 'AFTER INSERT Trigger',
          description: 'Trigger after insert operation',
          usage: 'AFTER INSERT trigger',
          example: `# AFTER INSERT trigger
DELIMITER //
CREATE TRIGGER after_order_insert
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE users 
    SET order_count = order_count + 1,
    total_spent = total_spent + NEW.total
    WHERE id = NEW.user_id;
END //
DELIMITER ;`,
        },
        {
          command: 'BEFORE UPDATE Trigger',
          description: 'Trigger before update operation',
          usage: 'BEFORE UPDATE trigger',
          example: `# BEFORE UPDATE trigger
DELIMITER //
CREATE TRIGGER before_user_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    IF NEW.email != OLD.email THEN
        INSERT INTO email_changes (user_id, old_email, new_email, changed_at)
        VALUES (OLD.id, OLD.email, NEW.email, CURRENT_TIMESTAMP);
    END IF;
    
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //
DELIMITER ;`,
        },
        {
          command: 'BEFORE DELETE Trigger',
          description: 'Trigger before delete operation',
          usage: 'BEFORE DELETE trigger',
          example: `# BEFORE DELETE trigger
DELIMITER //
CREATE TRIGGER before_user_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
    INSERT INTO deleted_users (id, name, email, deleted_at)
    VALUES (OLD.id, OLD.name, OLD.email, CURRENT_TIMESTAMP);
    
    DELETE FROM orders WHERE user_id = OLD.id;
END //
DELIMITER ;`,
        },
        {
          command: 'Create Event',
          description: 'Create scheduled event',
          usage: 'CREATE EVENT statement',
          example: `# Create event
DELIMITER //
CREATE EVENT cleanup_old_sessions
ON SCHEDULE EVERY 1 DAY
STARTS CURRENT_TIMESTAMP
DO
BEGIN
    DELETE FROM sessions WHERE last_activity < DATE_SUB(NOW(), INTERVAL 30 DAY);
END //
DELIMITER ;

# Enable event scheduler
SET GLOBAL event_scheduler = ON;`,
        },
        {
          command: 'Recurring Event',
          description: 'Create recurring scheduled event',
          usage: 'Event with schedule',
          example: `# Recurring event
DELIMITER //
CREATE EVENT generate_daily_report
ON SCHEDULE EVERY 1 DAY
STARTS '2023-01-01 02:00:00'
DO
BEGIN
    INSERT INTO daily_reports (report_date, total_orders, total_revenue)
    SELECT CURRENT_DATE, COUNT(*), SUM(total)
    FROM orders 
    WHERE DATE(order_date) = CURRENT_DATE - INTERVAL 1 DAY;
END //
DELIMITER ;`,
        },
        {
          command: 'Drop Trigger and Event',
          description: 'Remove triggers and events',
          usage: 'DROP TRIGGER, DROP EVENT',
          example: `# Drop trigger
DROP TRIGGER IF EXISTS before_user_insert;

# Drop event
DROP EVENT IF EXISTS cleanup_old_sessions;`,
        },
      ],
    },
    {
      title: 'Views and Materialized Views',
      commands: [
        {
          command: 'Create View',
          description: 'Create virtual table',
          usage: 'CREATE VIEW statement',
          example: `# Create view
CREATE VIEW user_orders AS
SELECT 
    u.id as user_id,
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    COALESCE(SUM(o.total), 0) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, u.email;

# Use view
SELECT * FROM user_orders WHERE order_count > 5;`,
        },
        {
          command: 'View with Joins',
          description: 'Complex view with multiple joins',
          usage: 'View with complex query',
          example: `# Complex view
CREATE VIEW product_sales AS
SELECT 
    p.id,
    p.name,
    p.category,
    p.price,
    COALESCE(SUM(oi.quantity), 0) as total_sold,
    COALESCE(SUM(oi.quantity * oi.price), 0) as revenue,
    COUNT(DISTINCT o.id) as order_count
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
LEFT JOIN orders o ON oi.order_id = o.id
GROUP BY p.id, p.name, p.category, p.price;`,
        },
        {
          command: 'Update View',
          description: 'Update existing view',
          usage: 'CREATE OR REPLACE VIEW',
          example: `# Update view
CREATE OR REPLACE VIEW user_orders AS
SELECT 
    u.id as user_id,
    u.name,
    u.email,
    u.status,
    COUNT(o.id) as order_count,
    COALESCE(SUM(o.total), 0) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name, u.email, u.status;`,
        },
        {
          command: 'Materialized View',
          description: 'Create materialized view (via table)',
          usage: 'Table-based materialized view',
          example: `# Materialized view simulation
CREATE TABLE mv_user_orders (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    order_count INT DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX (order_count),
    INDEX (total_spent)
);

# Refresh materialized view
DELIMITER //
CREATE PROCEDURE refresh_mv_user_orders()
BEGIN
    TRUNCATE TABLE mv_user_orders;
    
    INSERT INTO mv_user_orders (user_id, name, email, order_count, total_spent)
    SELECT 
        u.id,
        u.name,
        u.email,
        COUNT(o.id),
        COALESCE(SUM(o.total), 0)
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name, u.email;
END //
DELIMITER ;`,
        },
        {
          command: 'Drop View',
          description: 'Remove view',
          usage: 'DROP VIEW statement',
          example: `# Drop view
DROP VIEW IF EXISTS user_orders;`,
        },
      ],
    },
    {
      title: 'Transactions and Locking',
      commands: [
        {
          command: 'Basic Transaction',
          description: 'Start and commit transaction',
          usage: 'START TRANSACTION, COMMIT, ROLLBACK',
          example: `# Basic transaction
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (123, 100.00);
SET @order_id = LAST_INSERT_ID();

INSERT INTO order_items (order_id, product_id, quantity, price) 
VALUES (@order_id, 1, 2, 50.00);

UPDATE products SET stock = stock - 2 WHERE id = 1;

COMMIT;`,
        },
        {
          command: 'Transaction with Error Handling',
          description: 'Handle transaction errors',
          usage: 'ROLLBACK on error',
          example: `# Transaction with error handling
START TRANSACTION;

BEGIN
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    INSERT INTO orders (user_id, total) VALUES (123, 100.00);
    
    -- This might cause an error
    INSERT INTO order_items (order_id, product_id, quantity, price) 
    VALUES (LAST_INSERT_ID(), 999, 1, 10.00); -- Product 999 might not exist
    
    COMMIT;
END;`,
        },
        {
          command: 'Savepoints',
          description: 'Create transaction savepoints',
          usage: 'SAVEPOINT, ROLLBACK TO SAVEPOINT',
          example: `# Savepoints in transaction
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (123, 100.00);
SET @order_id = LAST_INSERT_ID();

SAVEPOINT sp1;

INSERT INTO order_items (order_id, product_id, quantity, price) 
VALUES (@order_id, 1, 2, 50.00);

-- Something went wrong, rollback to savepoint
ROLLBACK TO SAVEPOINT sp1;

-- Try different items
INSERT INTO order_items (order_id, product_id, quantity, price) 
VALUES (@order_id, 2, 1, 100.00);

COMMIT;`,
        },
        {
          command: 'Isolation Levels',
          description: 'Set transaction isolation levels',
          usage: 'SET TRANSACTION ISOLATION LEVEL',
          example: `# Isolation levels
-- READ UNCOMMITTED (lowest isolation, highest performance)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- READ COMMITTED (default in many systems)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- REPEATABLE READ (default in MariaDB/MySQL)
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- SERIALIZABLE (highest isolation, lowest performance)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Use in transaction
START TRANSACTION;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Your queries here
COMMIT;`,
        },
        {
          command: 'Explicit Locking',
          description: 'Lock tables explicitly',
          usage: 'LOCK TABLES, UNLOCK TABLES',
          example: `# Explicit locking
LOCK TABLES orders WRITE, users READ;

-- Perform operations on locked tables
INSERT INTO orders (user_id, total) VALUES (123, 100.00);
SELECT * FROM users WHERE id = 123;

-- Release locks
UNLOCK TABLES;`,
        },
        {
          command: 'SELECT FOR UPDATE',
          description: 'Lock selected rows',
          usage: 'SELECT ... FOR UPDATE',
          example: `# SELECT FOR UPDATE
START TRANSACTION;

-- Lock rows for update
SELECT * FROM products WHERE id IN (1, 2, 3) FOR UPDATE;

-- Update locked rows
UPDATE products SET price = price * 1.1 WHERE id IN (1, 2, 3);

COMMIT;`,
        },
        {
          command: 'Deadlock Detection',
          description: 'Handle deadlocks',
          usage: 'Deadlock detection and retry',
          example: `# Deadlock handling
DELIMITER //
CREATE PROCEDURE SafeUpdate(IN product_id INT, IN new_price DECIMAL(10,2))
BEGIN
    DECLARE retry_count INT DEFAULT 0;
    DECLARE max_retries INT DEFAULT 3;
    DECLARE deadlocked INT DEFAULT 0;
    
    DECLARE CONTINUE HANDLER FOR 1213  -- Deadlock error code
    BEGIN
        SET deadlocked = 1;
    END;
    
    WHILE retry_count < max_retries DO
        SET deadlocked = 0;
        
        START TRANSACTION;
        
        UPDATE products SET price = new_price WHERE id = product_id;
        
        IF deadlocked = 0 THEN
            COMMIT;
            LEAVE;
        ELSE
            ROLLBACK;
            SET retry_count = retry_count + 1;
            -- Wait random time before retry
            SELECT SLEEP(0.1 * retry_count);
        END IF;
    END WHILE;
END //
DELIMITER ;`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Create Index',
          description: 'Create database index',
          usage: 'CREATE INDEX statement',
          example: `# Create indexes
-- Single column index
CREATE INDEX idx_email ON users(email);

-- Composite index
CREATE INDEX idx_name_status ON users(name, status);

-- Unique index
CREATE UNIQUE INDEX idx_username ON users(username);

-- Full-text index
CREATE FULLTEXT INDEX idx_content ON articles(title, content);`,
        },
        {
          command: 'Index Types',
          description: 'Different index types',
          usage: 'BTREE, HASH, FULLTEXT, SPATIAL',
          example: `# Index types
-- BTREE index (default)
CREATE INDEX idx_price ON products(price) USING BTREE;

-- HASH index (for equality comparisons)
CREATE INDEX idx_hash_email ON users(email) USING HASH;

-- FULLTEXT index (for text search)
CREATE FULLTEXT INDEX idx_search ON products(name, description);

-- SPATIAL index (for geographic data)
CREATE SPATIAL INDEX idx_location ON places(location);`,
        },
        {
          command: 'Explain Query',
          description: 'Analyze query execution plan',
          usage: 'EXPLAIN statement',
          example: `# Explain query
EXPLAIN SELECT * FROM orders WHERE user_id = 123 AND total > 100;

# Extended explain
EXPLAIN EXTENDED SELECT u.name, COUNT(o.id) 
FROM users u 
JOIN orders o ON u.id = o.user_id 
GROUP BY u.name;

-- Show warnings
SHOW WARNINGS;`,
        },
        {
          command: 'Query Optimization',
          description: 'Optimize slow queries',
          usage: 'Query optimization techniques',
          example: `# Query optimization examples
-- Use indexes effectively
SELECT * FROM orders WHERE user_id = 123 AND order_date > '2023-01-01';

-- Avoid functions on indexed columns
-- Bad: WHERE YEAR(order_date) = 2023
-- Good: WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01'

-- Use LIMIT for large result sets
SELECT * FROM large_table WHERE condition LIMIT 1000;

-- Use EXISTS instead of IN for subqueries
SELECT * FROM users u 
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);`,
        },
        {
          command: 'Analyze Table',
          description: 'Analyze table for query optimization',
          usage: 'ANALYZE TABLE statement',
          example: `# Analyze table
ANALYZE TABLE users;
ANALYZE TABLE orders;
ANALYZE TABLE products;

-- Analyze all tables
SELECT CONCAT('ANALYZE TABLE ', table_name, ';') 
FROM information_schema.tables 
WHERE table_schema = 'your_database';`,
        },
        {
          command: 'Optimize Table',
          description: 'Optimize table storage',
          usage: 'OPTIMIZE TABLE statement',
          example: `# Optimize table
OPTIMIZE TABLE users;
OPTIMIZE TABLE orders;

-- Optimize all tables
SELECT CONCAT('OPTIMIZE TABLE ', table_name, ';') 
FROM information_schema.tables 
WHERE table_schema = 'your_database' 
AND engine = 'InnoDB';`,
        },
        {
          command: 'Check Table',
          description: 'Check table for errors',
          usage: 'CHECK TABLE statement',
          example: `# Check table
CHECK TABLE users;
CHECK TABLE orders QUICK;
CHECK TABLE products FAST;
CHECK TABLE articles CHANGED;
CHECK TABLE logs MEDIUM;`,
        },
        {
          command: 'Repair Table',
          description: 'Repair corrupted table',
          usage: 'REPAIR TABLE statement',
          example: `# Repair table
REPAIR TABLE users;
REPAIR TABLE orders QUICK;
REPAIR TABLE products EXTENDED;`,
        },
        {
          command: 'Show Index Usage',
          description: 'Monitor index usage',
          usage: 'INFORMATION_SCHEMA.STATISTICS',
          example: `# Show index usage
SELECT 
    table_name,
    index_name,
    cardinality,
    sub_part,
    packed,
    nullable,
    index_type
FROM information_schema.statistics 
WHERE table_schema = 'your_database'
ORDER BY table_name, index_name;`,
        },
      ],
    },
    {
      title: 'Replication and Clustering',
      commands: [
        {
          command: 'Master-Slave Replication',
          description: 'Set up master-slave replication',
          usage: 'Replication configuration',
          example: `# Master configuration (my.cnf)
[mysqld]
server-id = 1
log-bin = mysql-bin
binlog-format = ROW
binlog-do-db = your_database

# Create replication user
CREATE USER 'repl_user'@'%' IDENTIFIED BY 'strong_password';
GRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';
FLUSH PRIVILEGES;

# Get master status
SHOW MASTER STATUS;`,
        },
        {
          command: 'Slave Configuration',
          description: 'Configure slave server',
          usage: 'Slave setup commands',
          example: `# Slave configuration (my.cnf)
[mysqld]
server-id = 2
relay-log = mysql-relay
read-only = 1

# Configure slave
CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl_user',
    MASTER_PASSWORD='strong_password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;

# Start slave
START SLAVE;

# Check slave status
SHOW SLAVE STATUS\\G;`,
        },
        {
          command: 'Galera Cluster',
          description: 'Set up Galera cluster for multi-master',
          usage: 'Galera configuration',
          example: `# Galera configuration (my.cnf)
[mysqld]
server-id = 1
binlog_format = ROW
innodb_flush_log_at_trx_commit = 0
innodb_flush_method = O_DIRECT
wsrep_on = ON
wsrep_provider = /usr/lib/galera/libgalera_smm.so
wsrep_cluster_name = "my_cluster"
wsrep_cluster_address = "gcomm://node1,node2,node3"
wsrep_node_name = "node1"
wsrep_node_address = "192.168.1.10"

# Start first node
galera_new_cluster

# Start subsequent nodes
systemctl start mariadb`,
        },
        {
          command: 'Monitor Replication',
          description: 'Monitor replication status',
          usage: 'Replication monitoring commands',
          example: `# Monitor replication
SHOW MASTER STATUS;
SHOW SLAVE STATUS\\G;
SHOW PROCESSLIST;

# Check lag
SELECT 
    MASTER_POS_WAIT('mysql-bin.000001', 12345) as lag;

# Check binary logs
SHOW BINARY LOGS;
SHOW BINLOG EVENTS IN 'mysql-bin.000001' LIMIT 10;`,
        },
        {
          command: 'Failover Procedures',
          description: 'Handle master failover',
          usage: 'Failover commands',
          example: `# Promote slave to master
STOP SLAVE;
RESET MASTER;
RESET SLAVE ALL;

# Update application to point to new master
# Configure other slaves to replicate from new master

# On other slaves:
STOP SLAVE;
CHANGE MASTER TO
    MASTER_HOST='new_master_ip',
    MASTER_USER='repl_user',
    MASTER_PASSWORD='strong_password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;
START SLAVE;`,
        },
      ],
    },
    {
      title: 'Security and User Management',
      commands: [
        {
          command: 'Create User',
          description: 'Create database user',
          usage: 'CREATE USER statement',
          example: `# Create users
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'strong_password';
CREATE USER 'appuser'@'%' IDENTIFIED BY 'strong_password';
CREATE USER 'readonly'@'192.168.1.%' IDENTIFIED BY 'readonly_password';

# Create user with authentication plugin
CREATE USER 'secureuser'@'localhost' 
IDENTIFIED VIA mysql_native_password 
USING 'password_hash';`,
        },
        {
          command: 'Grant Privileges',
          description: 'Grant user privileges',
          usage: 'GRANT statement',
          example: `# Grant privileges
-- All privileges on specific database
GRANT ALL PRIVILEGES ON myapp.* TO 'appuser'@'%';

-- Read-only access
GRANT SELECT ON myapp.* TO 'readonly'@'%';

-- Specific privileges
GRANT SELECT, INSERT, UPDATE ON myapp.users TO 'appuser'@'%';
GRANT SELECT ON myapp.products TO 'readonly'@'%';

-- Grant with grant option
GRANT SELECT ON myapp.* TO 'manager'@'%' WITH GRANT OPTION;`,
        },
        {
          command: 'Revoke Privileges',
          description: 'Revoke user privileges',
          usage: 'REVOKE statement',
          example: `# Revoke privileges
REVOKE ALL PRIVILEGES ON myapp.* FROM 'appuser'@'%';
REVOKE SELECT ON myapp.products FROM 'readonly'@'%';
REVOKE GRANT OPTION ON myapp.* FROM 'manager'@'%';

# Revoke all privileges
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'appuser'@'%';`,
        },
        {
          command: 'Show User Privileges',
          description: 'Check user privileges',
          usage: 'SHOW GRANTS statement',
          example: `# Show user grants
SHOW GRANTS FOR 'appuser'@'%';
SHOW GRANTS FOR CURRENT_USER();

# Show privileges for current database
SELECT * FROM information_schema.user_privileges;
SELECT * FROM information_schema.table_privileges 
WHERE table_schema = 'myapp';`,
        },
        {
          command: 'Password Management',
          description: 'Manage user passwords',
          usage: 'Password operations',
          example: `# Change password
ALTER USER 'appuser'@'%' IDENTIFIED BY 'new_strong_password';

-- Require password change on next login
ALTER USER 'appuser'@'%' IDENTIFIED BY 'temp_password' PASSWORD EXPIRE;

-- Set password policy
SET GLOBAL validate_password.policy = 'MEDIUM';
SET GLOBAL validate_password.length = 12;

-- Password expiration
ALTER USER 'appuser'@'%' PASSWORD EXPIRE INTERVAL 90 DAY;`,
        },
        {
          command: 'Role Management',
          description: 'Create and manage roles',
          usage: 'CREATE ROLE, GRANT ROLE',
          example: `# Create roles
CREATE ROLE 'app_developer';
CREATE ROLE 'db_admin';
CREATE ROLE 'readonly_user';

# Grant privileges to roles
GRANT SELECT, INSERT, UPDATE, DELETE ON myapp.* TO 'app_developer';
GRANT ALL PRIVILEGES ON myapp.* TO 'db_admin';
GRANT SELECT ON myapp.* TO 'readonly_user';

# Grant roles to users
GRANT 'app_developer' TO 'devuser'@'%';
GRANT 'db_admin' TO 'adminuser'@'%';

# Set default role
SET DEFAULT ROLE 'app_developer' FOR 'devuser'@'%';`,
        },
        {
          command: 'SSL Configuration',
          description: 'Configure SSL/TLS',
          usage: 'SSL configuration',
          example: `# SSL configuration (my.cnf)
[mysqld]
ssl-ca = /etc/mysql/ca.pem
ssl-cert = /etc/mysql/server-cert.pem
ssl-key = /etc/mysql/server-key.pem
require_secure_transport = ON

# Require SSL for specific users
CREATE USER 'secureuser'@'%' REQUIRE SSL;
GRANT SELECT ON myapp.* TO 'secureuser'@%' REQUIRE SSL;

# Check SSL status
SHOW VARIABLES LIKE '%ssl%';
SHOW STATUS LIKE 'Ssl_cipher%';`,
        },
        {
          command: 'Audit Logging',
          description: 'Set up audit logging',
          usage: 'Audit plugin configuration',
          example: `# Install audit plugin
INSTALL PLUGIN server_audit SONAME 'server_audit.so';

# Configure audit logging
SET GLOBAL server_audit_events = 'CONNECT,QUERY,TABLE';
SET GLOBAL server_audit_logging = 'ON';
SET GLOBAL server_audit_file_path = '/var/log/mysql/audit.log';
SET GLOBAL server_audit_file_rotate_size = 1000000000;
SET GLOBAL server_audit_file_rotations = 5;

# Configuration in my.cnf
[mysqld]
plugin-load = server_audit=server_audit.so
server_audit = FORCE_PLUS_PERMANENT
server_audit_events = CONNECT,QUERY,TABLE
server_audit_logging = ON
server_audit_file_path = /var/log/mysql/audit.log`,
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      commands: [
        {
          command: 'mysqldump Backup',
          description: 'Create logical backup with mysqldump',
          usage: 'mysqldump command',
          example: `# Full database backup
mysqldump -u root -p --all-databases > /backup/full_backup.sql

# Specific database
mysqldump -u root -p myapp > /backup/myapp_backup.sql

# Specific tables
mysqldump -u root -p myapp users orders > /backup/tables_backup.sql

# With compression
mysqldump -u root -p myapp | gzip > /backup/myapp_backup.sql.gz

# With routines and triggers
mysqldump -u root -p --routines --triggers myapp > /backup/myapp_complete.sql`,
        },
        {
          command: 'mysqldump Options',
          description: 'Advanced mysqldump options',
          usage: 'mysqldump with options',
          example: `# Advanced mysqldump options
# Consistent backup
mysqldump -u root -p --single-transaction --routines --triggers myapp > backup.sql

# Lock tables (MyISAM)
mysqldump -u root -p --lock-all-tables myapp > backup.sql

# Skip data (schema only)
mysqldump -u root -p --no-data myapp > schema.sql

# Skip create table statements
mysqldump -u root -p --no-create-info myapp > data.sql

# Where clause
mysqldump -u root -p --where="created_at > '2023-01-01'" myapp users > recent_users.sql`,
        },
        {
          command: 'mysql Restore',
          description: 'Restore from backup',
          usage: 'mysql command for restore',
          example: `# Restore from backup
mysql -u root -p < /backup/full_backup.sql

# Restore specific database
mysql -u root -p myapp < /backup/myapp_backup.sql

# Restore from compressed backup
gunzip < /backup/myapp_backup.sql.gz | mysql -u root -p myapp

# Restore with source command
mysql -u root -p
SOURCE /backup/myapp_backup.sql;`,
        },
        {
          command: 'Physical Backup',
          description: 'Physical file backup',
          usage: 'File system backup',
          example: `# Physical backup (cold backup)
# Stop MariaDB
sudo systemctl stop mariadb

# Copy data files
sudo cp -r /var/lib/mysql /backup/mysql_backup_$(date +%Y%m%d)

# Start MariaDB
sudo systemctl start mariadb

# Hot backup with MariaDB Backup
mariabackup --backup --target-dir=/backup/mariabackup/ --user=root --password=pass
mariabackup --prepare --target-dir=/backup/mariabackup/
mariabackup --copy-back --target-dir=/backup/mariabackup/`,
        },
        {
          command: 'Point in Time Recovery',
          description: 'Recover to specific point in time',
          usage: 'Binary log based recovery',
          example: `# Point in time recovery
# 1. Restore from full backup
mysql -u root -p < /backup/full_backup.sql

# 2. Apply binary logs
mysqlbinlog --start-datetime="2023-01-01 00:00:00" \\
             --stop-datetime="2023-01-01 12:00:00" \\
             /var/lib/mysql/mysql-bin.000123 | mysql -u root -p

# 3. Or use mysqlbinlog with position
mysqlbinlog --start-position=154 \\
             --stop-position=123456 \\
             /var/lib/mysql/mysql-bin.000123 | mysql -u root -p`,
        },
        {
          command: 'Incremental Backup',
          description: 'Set up incremental backup strategy',
          usage: 'Binary log backup',
          example: `# Incremental backup setup
# Enable binary logging
[mysqld]
log-bin = mysql-bin
binlog-format = ROW
expire_logs_days = 7

# Backup script
#!/bin/bash
BACKUP_DIR="/backup/incremental"
DATE=$(date +%Y%m%d_%H%M%S)

# Flush logs to create new binary log
mysql -u root -p -e "FLUSH LOGS;"

# Copy binary logs
cp /var/lib/mysql/mysql-bin.* $BACKUP_DIR/

# Keep last 7 days
find $BACKUP_DIR -name "mysql-bin.*" -mtime +7 -delete`,
        },
      ],
    },
    {
      title: 'Monitoring and Diagnostics',
      commands: [
        {
          command: 'Show Process List',
          description: 'Monitor running queries',
          usage: 'SHOW PROCESSLIST',
          example: `# Show process list
SHOW PROCESSLIST;
SHOW FULL PROCESSLIST;

# Filter by user or database
SELECT * FROM information_schema.processlist 
WHERE user = 'appuser' AND db = 'myapp';

# Kill long-running query
KILL 12345;  -- Process ID`,
        },
        {
          command: 'Show Status',
          description: 'Check server status variables',
          usage: 'SHOW STATUS',
          example: `# Show status
SHOW STATUS;
SHOW STATUS LIKE 'Connections';
SHOW STATUS LIKE 'Slow_queries';
SHOW STATUS LIKE 'Threads%';
SHOW GLOBAL STATUS LIKE 'Innodb%';`,
        },
        {
          command: 'Show Variables',
          description: 'Check server configuration',
          usage: 'SHOW VARIABLES',
          example: `# Show variables
SHOW VARIABLES;
SHOW VARIABLES LIKE 'max_connections';
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';
SHOW VARIABLES LIKE 'query_cache%';
SHOW GLOBAL VARIABLES;`,
        },
        {
          command: 'Performance Schema',
          description: 'Use Performance Schema for monitoring',
          usage: 'Performance Schema queries',
          example: `# Performance Schema monitoring
-- Enable performance schema
UPDATE performance_schema.setup_instruments 
SET ENABLED = 'YES', TIMED = 'YES';

-- Monitor statement execution
SELECT * FROM performance_schema.events_statements_summary_by_digest 
ORDER BY SUM_TIMER_WAIT DESC LIMIT 10;

-- Monitor table I/O
SELECT * FROM performance_schema.table_io_waits_summary_by_table 
ORDER BY SUM_TIMER_WAIT DESC LIMIT 10;`,
        },
        {
          command: 'Slow Query Log',
          description: 'Configure and monitor slow queries',
          usage: 'Slow query log',
          example: `# Configure slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;  -- seconds
SET GLOBAL log_queries_not_using_indexes = 'ON';

# Configuration in my.cnf
[mysqld]
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2
log_queries_not_using_indexes = 1

# Analyze slow queries
mysqldumpslow /var/log/mysql/slow.log`,
        },
        {
          command: 'InnoDB Monitor',
          description: 'Monitor InnoDB engine',
          usage: 'InnoDB monitoring',
          example: `# InnoDB monitoring
SHOW ENGINE INNODB STATUS;

-- InnoDB metrics
SELECT * FROM information_schema.innodb_metrics 
WHERE name LIKE '%buffer_pool%';

-- Lock information
SELECT * FROM information_schema.innodb_locks;
SELECT * FROM information_schema.innodb_lock_waits;`,
        },
        {
          command: 'Database Statistics',
          description: 'Get database statistics',
          usage: 'Information schema queries',
          example: `# Database statistics
-- Table sizes
SELECT 
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.tables 
WHERE table_schema = 'your_database'
ORDER BY (data_length + index_length) DESC;

-- Row counts
SELECT 
    table_name,
    table_rows
FROM information_schema.tables 
WHERE table_schema = 'your_database'
ORDER BY table_rows DESC;`,
        },
      ],
    },
    {
      title: 'MariaDB Specific Features',
      commands: [
        {
          command: 'JSON Functions',
          description: 'Use JSON functions in MariaDB',
          usage: 'JSON_EXTRACT, JSON_CONTAINS, etc.',
          example: `# JSON functions in MariaDB
-- Extract JSON values
SELECT JSON_EXTRACT('{"name": "John", "age": 30}', '$.name') as name;
SELECT JSON_VALUE('{"name": "John", "age": 30}', '$.age') as age;

-- Check JSON contains
SELECT JSON_CONTAINS('{"tags": ["red", "blue"]}', '"red"') as has_red;

-- Modify JSON
SELECT JSON_SET('{"name": "John"}', '$.age', 30) as updated;
SELECT JSON_INSERT('{"name": "John"}', '$.age', 30) as inserted;
SELECT JSON_REMOVE('{"name": "John", "age": 30}', '$.age') as removed;

-- JSON aggregation
SELECT JSON_ARRAYAGG(name) as names FROM users;
SELECT JSON_OBJECT('id', id, 'name', name) as user_obj FROM users LIMIT 1;`,
        },
        {
          command: 'Window Functions Advanced',
          description: 'Advanced window functions',
          usage: 'NTH_VALUE, PERCENT_RANK, etc.',
          example: `# Advanced window functions
-- NTH_VALUE
SELECT 
    name,
    salary,
    NTH_VALUE(salary, 2) OVER (ORDER BY salary DESC) as second_highest
FROM employees;

-- PERCENT_RANK and CUME_DIST
SELECT 
    name,
    salary,
    PERCENT_RANK() OVER (ORDER BY salary DESC) as percent_rank,
    CUME_DIST() OVER (ORDER BY salary DESC) as cumulative_dist
FROM employees;

-- FIRST_VALUE, LAST_VALUE with frame
SELECT 
    order_date,
    total,
    FIRST_VALUE(total) OVER (ORDER BY order_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as first_total,
    LAST_VALUE(total) OVER (ORDER BY order_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_total
FROM orders;`,
        },
        {
          command: 'Sequence Objects',
          description: 'Use sequence objects',
          usage: 'CREATE SEQUENCE',
          example: `# Create and use sequences
CREATE SEQUENCE seq_order_id START WITH 1000 INCREMENT BY 1;

-- Use sequence
SELECT NEXTVAL(seq_order_id);  -- Returns 1000
SELECT NEXTVAL(seq_order_id);  -- Returns 1001

-- Get current value
SELECT CURRVAL(seq_order_id);

-- Set sequence value
SELECT SETVAL(seq_order_id, 2000);

-- Drop sequence
DROP SEQUENCE seq_order_id;`,
        },
        {
          command: 'Virtual Columns',
          description: 'Create virtual columns',
          usage: 'GENERATED ALWAYS AS',
          example: `# Virtual columns
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    tax_rate DECIMAL(5,2) DEFAULT 0.08,
    tax_amount DECIMAL(10,2) GENERATED ALWAYS AS (price * tax_rate) STORED,
    total_price DECIMAL(10,2) GENERATED ALWAYS AS (price + (price * tax_rate)) VIRTUAL
);

-- Query virtual columns
SELECT name, price, tax_amount, total_price FROM products;`,
        },
        {
          command: 'Check Constraints',
          description: 'Use check constraints',
          usage: 'CHECK constraint',
          example: `# Check constraints
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65),
    salary DECIMAL(10,2) CHECK (salary > 0),
    department VARCHAR(50) CHECK (department IN ('IT', 'Sales', 'HR', 'Finance'))
);

-- Add check constraint to existing table
ALTER TABLE products ADD CONSTRAINT chk_price_positive 
CHECK (price > 0);`,
        },
        {
          command: 'Invisible Columns',
          description: 'Create invisible columns',
          usage: 'INVISIBLE keyword',
          example: `# Invisible columns
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    internal_id INT INVISIBLE,
    created_at TIMESTAMP INVISIBLE DEFAULT CURRENT_TIMESTAMP
);

-- Invisible columns are not returned by SELECT *
SELECT * FROM users;  -- Won't show internal_id and created_at

-- Must explicitly select invisible columns
SELECT id, name, email, internal_id, created_at FROM users;

-- Make column visible/invisible
ALTER TABLE users ALTER COLUMN internal_id VISIBLE;
ALTER TABLE users ALTER COLUMN created_at INVISIBLE;`,
        },
      ],
    },
    {
      title: 'MariaDB Tools and Utilities',
      commands: [
        {
          command: 'mysqlcheck',
          description: 'Check, repair, optimize tables',
          usage: 'mysqlcheck utility',
          example: `# mysqlcheck examples
# Check all tables in all databases
mysqlcheck -u root -p --all-databases

# Check specific database
mysqlcheck -u root -p myapp

# Repair tables
mysqlcheck -u root -p --repair myapp

# Optimize tables
mysqlcheck -u root -p --optimize myapp

# Analyze tables
mysqlcheck -u root -p --analyze myapp

# Auto-repair
mysqlcheck -u root -p --auto-repair myapp`,
        },
        {
          command: 'mysqladmin',
          description: 'Administrative operations',
          usage: 'mysqladmin utility',
          example: `# mysqladmin examples
# Check server status
mysqladmin -u root -p status

# Show variables
mysqladmin -u root -p variables

# Show process list
mysqladmin -u root -p processlist

# Create database
mysqladmin -u root -p create newdb

# Drop database
mysqladmin -u root -p drop olddb

# Flush privileges
mysqladmin -u root -p flush-privileges

# Ping server
mysqladmin -u root -p ping

# Shutdown server
mysqladmin -u root -p shutdown`,
        },
        {
          command: 'mysqldumpslow',
          description: 'Analyze slow query log',
          usage: 'mysqldumpslow utility',
          example: `# mysqldumpslow examples
# Show all slow queries
mysqldumpslow /var/log/mysql/slow.log

# Sort by average query time
mysqldumpslow -s at /var/log/mysql/slow.log

# Sort by number of times executed
mysqldumpslow -s c /var/log/mysql/slow.log

# Show queries with specific pattern
mysqldumpslow -g "SELECT.*FROM users" /var/log/mysql/slow.log

# Show top 10 slowest queries
mysqldumpslow -s t -t 10 /var/log/mysql/slow.log`,
        },
        {
          command: 'mysqlbinlog',
          description: 'Process binary logs',
          usage: 'mysqlbinlog utility',
          example: `# mysqlbinlog examples
# Show binary log contents
mysqlbinlog /var/lib/mysql/mysql-bin.000123

# Show specific time range
mysqlbinlog --start-datetime="2023-01-01 00:00:00" \\
             --stop-datetime="2023-01-01 23:59:59" \\
             /var/lib/mysql/mysql-bin.000123

# Show specific position range
mysqlbinlog --start-position=154 --stop-position=12345 \\
             /var/lib/mysql/mysql-bin.000123

# Filter by database
mysqlbinlog --database=myapp /var/lib/mysql/mysql-bin.000123

# Convert to SQL file
mysqlbinlog /var/lib/mysql/mysql-bin.000123 > recovery.sql`,
        },
        {
          command: 'mariabackup',
          description: 'Physical backup tool',
          usage: 'mariabackup utility',
          example: `# mariabackup examples
# Full backup
mariabackup --backup --target-dir=/backup/full/ \\
             --user=root --password=password

# Incremental backup
mariabackup --backup --target-dir=/backup/inc1/ \\
             --incremental-basedir=/backup/full/ \\
             --user=root --password=password

# Prepare backup
mariabackup --prepare --target-dir=/backup/full/

# Restore backup
mariabackup --copy-back --target-dir=/backup/full/

# Backup with compression
mariabackup --backup --stream=xbstream \\
             --user=root --password=password | gzip > backup.xb.gz`,
        },
      ],
    },
  ],
};
