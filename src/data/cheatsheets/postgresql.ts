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
          command: 'PostgreSQL Overview',
          description: 'Introduction to PostgreSQL database',
          usage: 'Understanding PostgreSQL features',
          example: `PostgreSQL Overview:
- Advanced open-source relational database
- ACID compliant with full transaction support
- Extensive data types (JSON, XML, arrays, geometric)
- Powerful indexing (B-tree, GiST, GIN, SP-GiST, BRIN)
- Advanced features (CTEs, window functions, partitioning)
- Extensions ecosystem (PostGIS, pg_stat_statements, etc.)
- Strong standards compliance (SQL:2011)
- MVCC (Multi-Version Concurrency Control)
- Point-in-time recovery`,
        },
        {
          command: 'Install PostgreSQL Ubuntu',
          description: 'Install PostgreSQL on Ubuntu/Debian',
          usage: 'apt package manager installation',
          example: `# Ubuntu/Debian Installation
sudo apt update
sudo apt install postgresql postgresql-contrib`,
        },
        {
          command: 'Install PostgreSQL macOS',
          description: 'Install PostgreSQL on macOS with Homebrew',
          usage: 'Homebrew installation',
          example: `# macOS with Homebrew
brew install postgresql
brew services start postgresql`,
        },
        {
          command: 'Install PostgreSQL Windows',
          description: 'Install PostgreSQL on Windows',
          usage: 'Download and run installer',
          example: `# Windows Installation
# Download from https://www.postgresql.org/download/windows/
# Run installer and follow setup wizard`,
        },
        {
          command: 'Install PostgreSQL CentOS',
          description: 'Install PostgreSQL on CentOS/RHEL',
          usage: 'yum package manager installation',
          example: `# CentOS/RHEL Installation
sudo yum install postgresql-server postgresql-contrib
sudo postgresql-setup initdb
sudo systemctl start postgresql
sudo systemctl enable postgresql`,
        },
        {
          command: 'Install PostgreSQL Source',
          description: 'Compile PostgreSQL from source',
          usage: 'Build from source code',
          example: `# From source (latest version)
wget https://ftp.postgresql.org/pub/source/v16.1/postgresql-16.1.tar.gz
tar xzf postgresql-16.1.tar.gz
cd postgresql-16.1
./configure
make
sudo make install
sudo adduser postgres
sudo mkdir -p /usr/local/pgsql/data
sudo chown postgres /usr/local/pgsql/data`,
        },
        {
          command: 'Verify PostgreSQL Installation',
          description: 'Check PostgreSQL version and installation',
          usage: 'psql, postgres version commands',
          example: `# Verify Installation
psql --version
postgres --version`,
        },
        {
          command: 'Start PostgreSQL Service',
          description: 'Start and check PostgreSQL service status',
          usage: 'systemctl commands',
          example: `# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl status postgresql
sudo systemctl enable postgresql`,
        },
        {
          command: 'Connect to PostgreSQL',
          description: 'Connect to PostgreSQL server',
          usage: 'psql command',
          example: `# Connect to PostgreSQL
sudo -u postgres psql                    # Connect as postgres user
psql -U username -d database_name       # Connect as specific user
psql -h hostname -p 5432 -U username -d database_name  # Remote connection`,
        },
        {
          command: 'PostgreSQL Basic Commands',
          description: 'Essential psql commands',
          usage: 'psql meta-commands',
          example: `# Basic psql commands
\\l                                    # List databases
\\c database_name                     # Connect to database
\\dt                                   # List tables
\\d table_name                        # Describe table
\\du                                   # List users
\\h                                   # Help with SQL commands
\\?                                   # Help with psql commands
\\q                                   # Quit psql`,
        },
        {
          command: 'Create Database',
          description: 'Create a new database',
          usage: 'CREATE DATABASE statement',
          example: `# Create database
CREATE DATABASE myapp;
CREATE DATABASE myapp OWNER user1;
CREATE DATABASE myapp 
    OWNER user1 
    ENCODING 'UTF8' 
    LC_COLLATE='en_US.UTF-8' 
    LC_CTYPE='en_US.UTF-8';`,
        },
        {
          command: 'Create User',
          description: 'Create database user',
          usage: 'CREATE USER statement',
          example: `# Create user
CREATE USER appuser WITH PASSWORD 'secure_password';
CREATE USER appuser WITH PASSWORD 'secure_password' CREATEDB;
CREATE USER appuser WITH PASSWORD 'secure_password' SUPERUSER;`,
        },
        {
          command: 'Grant Privileges',
          description: 'Grant database privileges',
          usage: 'GRANT statement',
          example: `# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE myapp TO appuser;
GRANT CONNECT ON DATABASE myapp TO appuser;
GRANT ALL ON SCHEMA public TO appuser;`,
        },
        {
          command: 'Create Table Basic',
          description: 'Create a simple table',
          usage: 'CREATE TABLE statement',
          example: `# Create basic table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        {
          command: 'Insert Data',
          description: 'Insert data into table',
          usage: 'INSERT INTO statement',
          example: `# Insert single record
INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com');

# Insert multiple records
INSERT INTO users (username, email) VALUES 
    ('jane_smith', 'jane@example.com'),
    ('bob_johnson', 'bob@example.com');`,
        },
        {
          command: 'Select Data',
          description: 'Retrieve data from table',
          usage: 'SELECT statement',
          example: `# Select all data
SELECT * FROM users;

# Select specific columns
SELECT id, username FROM users;

# Select with condition
SELECT * FROM users WHERE username = 'john_doe';

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
UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE active = true;`,
        },
        {
          command: 'Delete Data',
          description: 'Delete data from table',
          usage: 'DELETE statement',
          example: `# Delete specific record
DELETE FROM users WHERE id = 1;

# Delete with condition
DELETE FROM users WHERE created_at < '2020-01-01';

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
        {
          command: 'PostgreSQL Data Types',
          description: 'Common PostgreSQL data types',
          usage: 'Data type overview',
          example: `# Numeric types
SMALLINT, INTEGER, BIGINT
DECIMAL, NUMERIC, REAL, DOUBLE PRECISION
SMALLSERIAL, SERIAL, BIGSERIAL

# String types
VARCHAR(n), CHAR(n), TEXT

# Date/time types
DATE, TIME, TIMESTAMP, TIMESTAMPTZ
INTERVAL

# Boolean type
BOOLEAN

# Array types
TEXT[], INTEGER[], etc.

# JSON types
JSON, JSONB

# Other types
UUID, MONEY, BYTEA`,
        },
      ],
    },
    {
      title: 'Constraints and Keys',
      commands: [
        {
          command: 'Primary Key Constraint',
          description: 'Define primary key',
          usage: 'PRIMARY KEY constraint',
          example: `-- Primary key at column level
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Primary key at table level
CREATE TABLE employees (
    id INTEGER,
    department_id INTEGER,
    CONSTRAINT pk_employee PRIMARY KEY (id)
);`,
        },
        {
          command: 'Foreign Key Constraint',
          description: 'Define foreign key relationship',
          usage: 'FOREIGN KEY constraint',
          example: `-- Foreign key constraint
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    department_id INTEGER,
    CONSTRAINT fk_department 
        FOREIGN KEY (department_id) 
        REFERENCES departments(id)
        ON DELETE CASCADE
        ON UPDATE SET NULL
);`,
        },
        {
          command: 'Unique Constraint',
          description: 'Ensure unique values',
          usage: 'UNIQUE constraint',
          example: `-- Unique constraint
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50),
    CONSTRAINT uk_username UNIQUE (username)
);

-- Add unique constraint
ALTER TABLE users ADD CONSTRAINT uk_email UNIQUE (email);`,
        },
        {
          command: 'Check Constraint',
          description: 'Validate data values',
          usage: 'CHECK constraint',
          example: `-- Check constraint
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10,2) CHECK (price > 0),
    quantity INTEGER CHECK (quantity >= 0),
    CONSTRAINT chk_price_positive CHECK (price > 0)
);

-- Add check constraint
ALTER TABLE products ADD CONSTRAINT chk_quantity CHECK (quantity >= 0);`,
        },
        {
          command: 'NOT NULL Constraint',
          description: 'Require non-null values',
          usage: 'NOT NULL constraint',
          example: `-- NOT NULL constraint
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20)  -- Can be NULL
);

-- Add NOT NULL constraint
ALTER TABLE users ALTER COLUMN name SET NOT NULL;`,
        },
        {
          command: 'Default Values',
          description: 'Set default column values',
          usage: 'DEFAULT constraint',
          example: `-- Default values
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active',
    login_count INTEGER DEFAULT 0
);

-- Add default value
ALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';`,
        },
        {
          command: 'Drop Constraints',
          description: 'Remove constraints',
          usage: 'DROP CONSTRAINT',
          example: `-- Drop specific constraint
ALTER TABLE employees DROP CONSTRAINT fk_department;

-- Drop primary key
ALTER TABLE employees DROP CONSTRAINT employees_pkey;

-- Drop constraint with cascade
ALTER TABLE users DROP CONSTRAINT uk_email CASCADE;`,
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
          example: `-- Inner join
SELECT e.id, e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
WHERE e.salary > 50000;`,
        },
        {
          command: 'Left Join',
          description: 'Join with all left table rows',
          usage: 'LEFT JOIN clause',
          example: `-- Left join
SELECT e.id, e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
WHERE d.id IS NULL;  -- Employees without departments`,
        },
        {
          command: 'Right Join',
          description: 'Join with all right table rows',
          usage: 'RIGHT JOIN clause',
          example: `-- Right join
SELECT d.department_name, COUNT(e.id) as employee_count
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id
GROUP BY d.department_name;`,
        },
        {
          command: 'Full Outer Join',
          description: 'Join with all rows from both tables',
          usage: 'FULL OUTER JOIN clause',
          example: `-- Full outer join
SELECT e.id, e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.id;`,
        },
        {
          command: 'Self Join',
          description: 'Join table to itself',
          usage: 'Self-referencing join',
          example: `-- Self join (employee-manager relationship)
SELECT e.name as employee, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,
        },
        {
          command: 'Cross Join',
          description: 'Cartesian product of tables',
          usage: 'CROSS JOIN clause',
          example: `-- Cross join
SELECT e.name, d.department_name
FROM employees e
CROSS JOIN departments d;`,
        },
        {
          command: 'Natural Join',
          description: 'Join on columns with same names',
          usage: 'NATURAL JOIN clause',
          example: `-- Natural join
SELECT * FROM employees NATURAL JOIN departments;

-- Natural left join
SELECT * FROM employees NATURAL LEFT JOIN departments;`,
        },
        {
          command: 'Subquery in SELECT',
          description: 'Use subquery in SELECT clause',
          usage: 'Scalar subquery',
          example: `-- Subquery in SELECT
SELECT id, name,
       (SELECT department_name FROM departments d 
        WHERE d.id = e.department_id) as dept_name
FROM employees e;`,
        },
        {
          command: 'Subquery in WHERE',
          description: 'Use subquery in WHERE clause',
          usage: 'Subquery with IN, EXISTS',
          example: `-- Subquery in WHERE with IN
SELECT name, salary FROM employees
WHERE department_id IN (SELECT id FROM departments 
                     WHERE location = 'New York');

-- Subquery with EXISTS
SELECT name FROM employees e
WHERE EXISTS (SELECT 1 FROM projects p 
              WHERE p.employee_id = e.id);`,
        },
        {
          command: 'Subquery in FROM',
          description: 'Use subquery as derived table',
          usage: 'Derived table subquery',
          example: `-- Subquery in FROM
SELECT dept_name, avg_salary
FROM (SELECT d.name as dept_name,
             AVG(e.salary) as avg_salary
      FROM employees e
      JOIN departments d ON e.department_id = d.id
      GROUP BY d.name) as dept_stats
WHERE avg_salary > 50000;`,
        },
        {
          command: 'Common Table Expression',
          description: 'Use WITH clause for CTE',
          usage: 'WITH clause',
          example: `-- CTE example
WITH dept_stats AS (
    SELECT department_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT e.name, e.salary, d.avg_salary
FROM employees e
JOIN dept_stats d ON e.department_id = d.department_id
WHERE e.salary > d.avg_salary;`,
        },
        {
          command: 'Recursive CTE',
          description: 'Recursive common table expression',
          usage: 'WITH RECURSIVE',
          example: `-- Recursive CTE (hierarchy)
WITH RECURSIVE employee_hierarchy AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy;`,
        },
        {
          command: 'UNION Operations',
          description: 'Combine result sets',
          usage: 'UNION, UNION ALL, INTERSECT, EXCEPT',
          example: `-- UNION (removes duplicates)
SELECT name FROM active_users
UNION
SELECT name FROM inactive_users;

-- UNION ALL (includes duplicates)
SELECT name FROM active_users
UNION ALL
SELECT name FROM inactive_users;

-- INTERSECT (common records)
SELECT employee_id FROM current_projects
INTERSECT
SELECT employee_id FROM completed_projects;

-- EXCEPT (records in first but not second)
SELECT employee_id FROM current_projects
EXCEPT
SELECT employee_id FROM completed_projects;`,
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
          example: `-- COUNT functions
SELECT COUNT(*) as total_employees FROM employees;
SELECT COUNT(email) as employees_with_email FROM employees;
SELECT COUNT(DISTINCT department_id) as departments_with_employees FROM employees;`,
        },
        {
          command: 'SUM Function',
          description: 'Sum numeric values',
          usage: 'SUM() function',
          example: `-- SUM function
SELECT SUM(salary) as total_payroll FROM employees;
SELECT SUM(COALESCE(bonus, 0)) as total_bonus FROM employees;`,
        },
        {
          command: 'AVG Function',
          description: 'Calculate average values',
          usage: 'AVG() function',
          example: `-- AVG function
SELECT AVG(salary) as avg_salary FROM employees;
SELECT AVG(COALESCE(bonus, 0)) as avg_bonus FROM employees;`,
        },
        {
          command: 'MIN and MAX Functions',
          description: 'Find minimum and maximum values',
          usage: 'MIN(), MAX() functions',
          example: `-- MIN and MAX functions
SELECT MIN(salary) as min_salary, MAX(salary) as max_salary FROM employees;
SELECT MIN(hire_date) as earliest_hire, MAX(hire_date) as latest_hire FROM employees;`,
        },
        {
          command: 'GROUP BY Basics',
          description: 'Group rows for aggregation',
          usage: 'GROUP BY clause',
          example: `-- Basic GROUP BY
SELECT department_id, COUNT(*) as employee_count, AVG(salary) as avg_salary
FROM employees
GROUP BY department_id;

-- Multiple columns
SELECT department_id, job_title, COUNT(*) as count
FROM employees
GROUP BY department_id, job_title;`,
        },
        {
          command: 'HAVING Clause',
          description: 'Filter groups after aggregation',
          usage: 'HAVING clause',
          example: `-- HAVING clause
SELECT department_id, AVG(salary) as avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;

-- Complex condition
SELECT department_id, COUNT(*) as emp_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5 AND AVG(salary) > 40000;`,
        },
        {
          command: 'GROUPING SETS',
          description: 'Multiple grouping levels',
          usage: 'GROUPING SETS clause',
          example: `-- GROUPING SETS
SELECT department_id, job_title, COUNT(*) as employee_count
FROM employees
GROUP BY GROUPING SETS ((department_id, job_title), (department_id), ());

-- Equivalent to multiple queries with UNION ALL`,
        },
        {
          command: 'ROLLUP and CUBE',
          description: 'Create subtotals and cross-tabulations',
          usage: 'ROLLUP, CUBE clauses',
          example: `-- ROLLUP (creates subtotals and grand total)
SELECT department_id, job_title, COUNT(*) as employee_count
FROM employees
GROUP BY ROLLUP (department_id, job_title);

-- CUBE (all combinations)
SELECT department_id, job_title, COUNT(*) as employee_count
FROM employees
GROUP BY CUBE (department_id, job_title);`,
        },
        {
          command: 'GROUPING Function',
          description: 'Identify rollup rows',
          usage: 'GROUPING() function',
          example: `-- GROUPING function
SELECT 
    department_id,
    job_title,
    COUNT(*) as employee_count,
    GROUPING(department_id) as dept_rollup,
    GROUPING(job_title) as job_rollup
FROM employees
GROUP BY ROLLUP (department_id, job_title);`,
        },
        {
          command: 'Aggregate Window Functions',
          description: 'Window functions with aggregates',
          usage: 'OVER() clause with aggregates',
          example: `-- Aggregate window functions
SELECT 
    id,
    salary,
    AVG(salary) OVER () as avg_salary_all,
    AVG(salary) OVER (PARTITION BY department_id) as avg_salary_dept,
    SUM(salary) OVER (ORDER BY hire_date ROWS UNBOUNDED PRECEDING) as cumulative_salary
FROM employees;`,
        },
      ],
    },
    {
      title: 'String Functions',
      commands: [
        {
          command: 'String Case Functions',
          description: 'Convert string case',
          usage: 'UPPER(), LOWER(), INITCAP()',
          example: `-- Case conversion
SELECT UPPER(name) as upper_name FROM employees;
SELECT LOWER(email) as lower_email FROM employees;
SELECT INITCAP(name) as capitalized_name FROM employees;`,
        },
        {
          command: 'String Length Functions',
          description: 'Get string length and position',
          usage: 'LENGTH(), CHAR_LENGTH(), POSITION()',
          example: `-- String length
SELECT LENGTH(name) as name_length FROM employees;
SELECT CHAR_LENGTH(description) as desc_length FROM products;

-- Find position
SELECT POSITION('@' IN email) as at_position FROM users;`,
        },
        {
          command: 'String Trimming',
          description: 'Trim characters from strings',
          usage: 'TRIM(), LTRIM(), RTRIM()',
          example: `-- Trimming functions
SELECT TRIM('  hello  ') as trimmed FROM dual;
SELECT LTRIM('###hello###', '#') as left_trimmed FROM dual;
SELECT RTRIM('hello###', '#') as right_trimmed FROM dual;`,
        },
        {
          command: 'String Padding',
          description: 'Pad strings with characters',
          usage: 'LPAD(), RPAD() functions',
          example: `-- Padding functions
SELECT LPAD('123', 10, '0') as padded_number FROM dual;
SELECT RPAD('hello', 10, '*') as padded_string FROM dual;`,
        },
        {
          command: 'String Extraction',
          description: 'Extract substrings',
          usage: 'SUBSTRING(), LEFT(), RIGHT()',
          example: `-- Substring extraction
SELECT SUBSTRING('hello world' FROM 1 FOR 5) as first_word FROM dual;
SELECT LEFT(email, POSITION('@' IN email) - 1) as username FROM users;
SELECT RIGHT(phone, 4) as last_four FROM users;`,
        },
        {
          command: 'String Replacement',
          description: 'Replace parts of strings',
          usage: 'REPLACE(), REGEXP_REPLACE()',
          example: `-- String replacement
SELECT REPLACE('hello world', 'world', 'postgres') as replaced FROM dual;
SELECT REGEXP_REPLACE(phone, '[^0-9]', '', 'g') as numbers_only FROM users;`,
        },
        {
          command: 'String Concatenation',
          description: 'Combine strings',
          usage: '|| operator, CONCAT() function',
          example: `-- String concatenation
SELECT first_name || ' ' || last_name as full_name FROM employees;
SELECT CONCAT(first_name, ' ', last_name) as full_name FROM employees;`,
        },
        {
          command: 'Regular Expression Functions',
          description: 'Regular expression matching',
          usage: 'REGEXP_MATCHES(), REGEXP_LIKE()',
          example: `-- Regular expressions
SELECT name FROM employees WHERE REGEXP_LIKE(name, '^J.*n$');
SELECT REGEXP_MATCHES(email, '(.+)@(.+)', 1) as username FROM users;
SELECT REGEXP_SPLIT_TO_ARRAY(tags, ',') as tag_array FROM products;`,
        },
      ],
    },
    {
      title: 'Date and Time Functions',
      commands: [
        {
          command: 'Current Date and Time',
          description: 'Get current date and time',
          usage: 'CURRENT_DATE, CURRENT_TIMESTAMP',
          example: `-- Current date/time
SELECT CURRENT_DATE as today;
SELECT CURRENT_TIMESTAMP as now;
SELECT CURRENT_TIME as current_time;
SELECT LOCALTIMESTAMP as local_now;`,
        },
        {
          command: 'Date Arithmetic',
          description: 'Perform calculations with dates',
          usage: 'Date addition/subtraction with INTERVAL',
          example: `-- Date arithmetic
SELECT CURRENT_DATE + INTERVAL '1 day' as tomorrow;
SELECT CURRENT_DATE - INTERVAL '1 week' as last_week;
SELECT CURRENT_TIMESTAMP + INTERVAL '2 hours' as in_two_hours;`,
        },
        {
          command: 'Date Extraction',
          description: 'Extract parts of dates',
          usage: 'EXTRACT() function',
          example: `-- Date extraction
SELECT EXTRACT(YEAR FROM CURRENT_DATE) as current_year;
SELECT EXTRACT(MONTH FROM hire_date) as hire_month FROM employees;
SELECT EXTRACT(DOW FROM CURRENT_DATE) as day_of_week;`,
        },
        {
          command: 'Date Formatting',
          description: 'Format dates as strings',
          usage: 'TO_CHAR() function',
          example: `-- Date formatting
SELECT TO_CHAR(CURRENT_DATE, 'YYYY-MM-DD') as formatted_date;
SELECT TO_CHAR(hire_date, 'Month DD, YYYY') as hire_formatted FROM employees;
SELECT TO_CHAR(CURRENT_TIMESTAMP, 'HH24:MI:SS') as current_time;`,
        },
        {
          command: 'Date Conversion',
          description: 'Convert strings to dates',
          usage: 'TO_DATE() function',
          example: `-- String to date conversion
SELECT TO_DATE('2023-12-25', 'YYYY-MM-DD') as christmas;
SELECT TO_DATE('25-Dec-2023', 'DD-Mon-YYYY') as formatted_date;`,
        },
        {
          command: 'Date Difference',
          description: 'Calculate difference between dates',
          usage: 'AGE() function',
          example: `-- Date difference
SELECT AGE(CURRENT_DATE, hire_date) as employment_length FROM employees;
SELECT AGE(CURRENT_TIMESTAMP, last_login) as time_since_login FROM users;`,
        },
        {
          command: 'Date Truncation',
          description: 'Truncate dates to precision',
          usage: 'DATE_TRUNC() function',
          example: `-- Date truncation
SELECT DATE_TRUNC('month', CURRENT_DATE) as month_start;
SELECT DATE_TRUNC('year', hire_date) as hire_year FROM employees;
SELECT DATE_TRUNC('hour', CURRENT_TIMESTAMP) as current_hour;`,
        },
        {
          command: 'Time Zone Functions',
          description: 'Work with time zones',
          usage: 'TIMEZONE conversion',
          example: `-- Time zone functions
SELECT CURRENT_TIMESTAMP AT TIME ZONE 'UTC' as utc_time;
SELECT CURRENT_TIMESTAMP AT TIME ZONE 'EST' as est_time;
SELECT TIMEZONE('UTC', CURRENT_TIMESTAMP) as utc_converted;`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Window Functions',
      commands: [
        {
          command: 'ROW_NUMBER Function',
          description: 'Assign sequential numbers to rows',
          usage: 'ROW_NUMBER() window function',
          example: `-- ROW_NUMBER function
SELECT 
    id,
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as salary_rank,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_rank
FROM employees;`,
        },
        {
          command: 'RANK and DENSE_RANK',
          description: 'Rank rows with ties',
          usage: 'RANK(), DENSE_RANK() functions',
          example: `-- RANK and DENSE_RANK
SELECT 
    id,
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
          example: `-- NTILE function
SELECT 
    id,
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
          example: `-- LAG and LEAD functions
SELECT 
    id,
    hire_date,
    salary,
    LAG(hire_date, 1) OVER (ORDER BY hire_date) as prev_hire_date,
    LEAD(hire_date, 1) OVER (ORDER BY hire_date) as next_hire_date,
    salary - LAG(salary, 1) OVER (ORDER BY hire_date) as salary_diff
FROM employees;`,
        },
        {
          command: 'FIRST_VALUE and LAST_VALUE',
          description: 'Get first/last values in window',
          usage: 'FIRST_VALUE(), LAST_VALUE() functions',
          example: `-- FIRST_VALUE and LAST_VALUE
SELECT 
    department_id,
    id,
    salary,
    FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) as highest_salary,
    LAST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC 
        RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as lowest_salary
FROM employees;`,
        },
        {
          command: 'Window Frame Clauses',
          description: 'Define window frame boundaries',
          usage: 'ROWS BETWEEN, RANGE BETWEEN',
          example: `-- Window frame clauses
SELECT 
    id,
    hire_date,
    salary,
    SUM(salary) OVER (ORDER BY hire_date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_3month_total,
    AVG(salary) OVER (ORDER BY hire_date 
        RANGE BETWEEN INTERVAL '30 days' PRECEDING AND CURRENT ROW) as moving_30day_avg
FROM employees;`,
        },
      ],
    },
    {
      title: 'Stored Procedures and Functions',
      commands: [
        {
          command: 'Create Function',
          description: 'Create user-defined function',
          usage: 'CREATE FUNCTION statement',
          example: `-- Create function
CREATE OR REPLACE FUNCTION calculate_bonus(base_salary NUMERIC, bonus_percent NUMERIC)
RETURNS NUMERIC AS $$
BEGIN
    RETURN base_salary * (bonus_percent / 100);
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Use Function',
          description: 'Use user-defined function in SQL',
          usage: 'Function in SELECT statement',
          example: `-- Use function in SQL
SELECT id, name, salary, 
       calculate_bonus(salary, 10) as bonus_amount
FROM employees
WHERE calculate_bonus(salary, 10) > 5000;`,
        },
        {
          command: 'Function with Parameters',
          description: 'Function with input/output parameters',
          usage: 'IN, OUT, INOUT parameters',
          example: `-- Function with OUT parameter
CREATE OR REPLACE FUNCTION get_employee_stats(
    emp_id INTEGER,
    OUT dept_name TEXT,
    OUT avg_salary NUMERIC
) AS $$
BEGIN
    SELECT d.name, AVG(e.salary)
    INTO dept_name, avg_salary
    FROM employees e
    JOIN departments d ON e.department_id = d.id
    WHERE e.id = emp_id
    GROUP BY d.name;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Create Procedure',
          description: 'Create stored procedure',
          usage: 'CREATE PROCEDURE statement',
          example: `-- Create procedure
CREATE OR REPLACE PROCEDURE update_employee_salary(
    emp_id INTEGER,
    new_salary NUMERIC
) AS $$
BEGIN
    UPDATE employees 
    SET salary = new_salary, updated_at = CURRENT_TIMESTAMP
    WHERE id = emp_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Employee with ID % not found', emp_id;
    END IF;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Call Procedure',
          description: 'Execute stored procedure',
          usage: 'CALL statement',
          example: `-- Call procedure
CALL update_employee_salary(123, 75000);

-- Call procedure with variables
DO $$
DECLARE
    v_emp_id INTEGER := 123;
    v_new_salary NUMERIC := 80000;
BEGIN
    CALL update_employee_salary(v_emp_id, v_new_salary);
END $$;`,
        },
        {
          command: 'Control Structures',
          description: 'IF/ELSE, CASE in functions',
          usage: 'Control flow statements',
          example: `-- Control structures in function
CREATE OR REPLACE FUNCTION categorize_salary(salary NUMERIC)
RETURNS TEXT AS $$
BEGIN
    IF salary < 30000 THEN
        RETURN 'Low';
    ELSIF salary < 60000 THEN
        RETURN 'Medium';
    ELSIF salary < 100000 THEN
        RETURN 'High';
    ELSE
        RETURN 'Executive';
    END IF;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Loops in Functions',
          description: 'LOOP, WHILE, FOR loops',
          usage: 'Looping structures',
          example: `-- FOR loop example
CREATE OR REPLACE FUNCTION process_departments()
RETURNS VOID AS $$
DECLARE
    dept_record RECORD;
    dept_count INTEGER;
BEGIN
    FOR dept_record IN SELECT * FROM departments LOOP
        SELECT COUNT(*) INTO dept_count 
        FROM employees 
        WHERE department_id = dept_record.id;
        
        UPDATE departments 
        SET employee_count = dept_count 
        WHERE id = dept_record.id;
    END LOOP;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Exception Handling',
          description: 'Handle exceptions in functions',
          usage: 'EXCEPTION block',
          example: `-- Exception handling
CREATE OR REPLACE FUNCTION safe_divide(
    numerator NUMERIC, 
    denominator NUMERIC
) RETURNS NUMERIC AS $$
BEGIN
    RETURN numerator / denominator;
EXCEPTION
    WHEN division_by_zero THEN
        RETURN 0;
    WHEN OTHERS THEN
        RAISE NOTICE 'Error: %', SQLERRM;
        RETURN NULL;
END;
$$ LANGUAGE plpgsql;`,
        },
        {
          command: 'Drop Function and Procedure',
          description: 'Remove functions and procedures',
          usage: 'DROP FUNCTION, DROP PROCEDURE',
          example: `-- Drop function
DROP FUNCTION calculate_bonus(NUMERIC, NUMERIC);

-- Drop procedure
DROP PROCEDURE update_employee_salary(INTEGER, NUMERIC);`,
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
          example: `-- Create trigger
CREATE OR REPLACE FUNCTION update_modified_time()
RETURNS TRIGGER AS $$
BEGIN
    NEW.modified_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_modified
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_time();`,
        },
        {
          command: 'BEFORE INSERT Trigger',
          description: 'Trigger before insert operation',
          usage: 'BEFORE INSERT trigger',
          example: `-- BEFORE INSERT trigger
CREATE OR REPLACE FUNCTION set_user_defaults()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = COALESCE(NEW.created_at, CURRENT_TIMESTAMP);
    NEW.status = COALESCE(NEW.status, 'active');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_defaults
    BEFORE INSERT ON users
    FOR EACH ROW
    EXECUTE FUNCTION set_user_defaults();`,
        },
        {
          command: 'AFTER UPDATE Trigger',
          description: 'Trigger after update operation',
          usage: 'AFTER UPDATE trigger',
          example: `-- AFTER UPDATE trigger
CREATE OR REPLACE FUNCTION log_salary_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO salary_audit (
        employee_id, old_salary, new_salary, changed_by, changed_at
    ) VALUES (
        NEW.id, OLD.salary, NEW.salary, CURRENT_USER, CURRENT_TIMESTAMP
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_salary_audit
    AFTER UPDATE OF salary ON employees
    FOR EACH ROW
    EXECUTE FUNCTION log_salary_changes();`,
        },
        {
          command: 'INSTEAD OF Trigger',
          description: 'Trigger for views',
          usage: 'INSTEAD OF trigger',
          example: `-- INSTEAD OF trigger for view
CREATE OR REPLACE FUNCTION update_employee_view()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO employees (name, department_id, salary)
        VALUES (NEW.name, NEW.department_id, NEW.salary);
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        UPDATE employees 
        SET name = NEW.name, department_id = NEW.department_id, salary = NEW.salary
        WHERE id = OLD.id;
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_employee_view_iu
    INSTEAD OF INSERT OR UPDATE ON employee_view
    FOR EACH ROW
    EXECUTE FUNCTION update_employee_view();`,
        },
        {
          command: 'Conditional Trigger',
          description: 'Trigger with conditions',
          usage: 'WHEN clause in trigger',
          example: `-- Conditional trigger
CREATE TRIGGER trg_log_expensive_updates
    AFTER UPDATE ON products
    FOR EACH ROW
    WHEN (OLD.price != NEW.price AND NEW.price > 1000)
    EXECUTE FUNCTION log_price_change();`,
        },
        {
          command: 'Enable/Disable Trigger',
          description: 'Manage trigger status',
          usage: 'ALTER TABLE ... ENABLE/DISABLE TRIGGER',
          example: `-- Disable trigger
ALTER TABLE users DISABLE TRIGGER trg_users_modified;

-- Enable trigger
ALTER TABLE users ENABLE TRIGGER trg_users_modified;

-- Disable all triggers on table
ALTER TABLE users DISABLE TRIGGER ALL;

-- Enable all triggers on table
ALTER TABLE users ENABLE TRIGGER ALL;`,
        },
        {
          command: 'Drop Trigger',
          description: 'Remove trigger',
          usage: 'DROP TRIGGER',
          example: `-- Drop trigger
DROP TRIGGER IF EXISTS trg_users_modified;`,
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
          example: `-- Create view
CREATE OR REPLACE VIEW employee_summary AS
SELECT 
    e.id,
    e.name,
    e.email,
    e.salary,
    d.name as department_name,
    j.title as job_title
FROM employees e
JOIN departments d ON e.department_id = d.id
JOIN jobs j ON e.job_id = j.id;`,
        },
        {
          command: 'View with Joins',
          description: 'Complex view with multiple joins',
          usage: 'View with complex query',
          example: `-- Complex view
CREATE OR REPLACE VIEW department_stats AS
SELECT 
    d.id,
    d.name,
    COUNT(e.id) as employee_count,
    AVG(e.salary) as avg_salary,
    MAX(e.salary) as max_salary,
    MIN(e.hire_date) as earliest_hire
FROM departments d
LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.id, d.name;`,
        },
        {
          command: 'Updatable View',
          description: 'Create updatable view',
          usage: 'Simple updatable view',
          example: `-- Updatable view (simple)
CREATE OR REPLACE VIEW active_employees AS
SELECT id, name, email, salary
FROM employees
WHERE status = 'active';

-- Check if view is updatable
SELECT table_name, is_updatable, is_insertable_into 
FROM information_schema.views 
WHERE table_name = 'active_employees';`,
        },
        {
          command: 'Materialized View',
          description: 'Create materialized view',
          usage: 'CREATE MATERIALIZED VIEW',
          example: `-- Create materialized view
CREATE MATERIALIZED VIEW mv_employee_summary AS
SELECT 
    department_id,
    COUNT(*) as employee_count,
    AVG(salary) as avg_salary,
    SUM(salary) as total_salary
FROM employees
GROUP BY department_id
WITH DATA;`,
        },
        {
          command: 'Refresh Materialized View',
          description: 'Refresh materialized view data',
          usage: 'REFRESH MATERIALIZED VIEW',
          example: `-- Refresh materialized view
REFRESH MATERIALIZED VIEW mv_employee_summary;

-- Refresh concurrently (allows queries during refresh)
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_employee_summary;

-- Refresh with specific data
REFRESH MATERIALIZED VIEW mv_employee_summary WITH DATA;`,
        },
        {
          command: 'Materialized View with Index',
          description: 'Create indexes on materialized view',
          usage: 'Index on materialized view',
          example: `-- Create index on materialized view
CREATE INDEX idx_mv_employee_dept ON mv_employee_summary(department_id);
CREATE INDEX idx_mv_employee_count ON mv_employee_summary(employee_count);`,
        },
        {
          command: 'Drop View',
          description: 'Remove view',
          usage: 'DROP VIEW',
          example: `-- Drop view
DROP VIEW employee_summary;

-- Drop materialized view
DROP MATERIALIZED VIEW mv_employee_summary;`,
        },
      ],
    },
    {
      title: 'Indexes and Performance',
      commands: [
        {
          command: 'Create Index',
          description: 'Create database index',
          usage: 'CREATE INDEX statement',
          example: `-- Create indexes
-- Single column index
CREATE INDEX idx_employee_email ON employees(email);

-- Composite index
CREATE INDEX idx_employee_name ON employees(last_name, first_name);

-- Unique index
CREATE UNIQUE INDEX idx_employee_username ON employees(username);

-- Partial index
CREATE INDEX idx_active_employees ON employees(id) WHERE status = 'active';`,
        },
        {
          command: 'GIN Index',
          description: 'Create GIN index for array/json',
          usage: 'GIN index type',
          example: `-- GIN index (for arrays and JSON)
CREATE INDEX idx_product_tags ON products USING GIN(tags);
CREATE INDEX idx_product_attributes ON products USING GIN(attributes);

-- Full-text search GIN index
CREATE INDEX idx_document_content ON documents USING GIN(to_tsvector('english', content));`,
        },
        {
          command: 'GiST Index',
          description: 'Create GiST index for geometric data',
          usage: 'GiST index type',
          example: `-- GiST index (for geometric and full-text)
CREATE INDEX idx_location ON places USING GiST(location);
CREATE INDEX idx_document_gist ON documents USING GiST(to_tsvector('english', content));`,
        },
        {
          command: 'BRIN Index',
          description: 'Create BRIN index for large tables',
          usage: 'BRIN index type',
          example: `-- BRIN index (for very large tables)
CREATE INDEX idx_sales_date ON sales USING BRIN(sale_date);
CREATE INDEX idx_logs_timestamp ON logs USING BRIN(created_at);`,
        },
        {
          command: 'Hash Index',
          description: 'Create hash index for equality',
          usage: 'HASH index type',
          example: `-- Hash index (for equality comparisons)
CREATE INDEX idx_user_email_hash ON users USING HASH(email);
CREATE INDEX idx_product_code_hash ON products USING HASH(product_code);`,
        },
        {
          command: 'Partial Index',
          description: 'Index on subset of data',
          usage: 'WHERE clause in index',
          example: `-- Partial index
CREATE INDEX idx_active_users ON users(id) WHERE status = 'active';
CREATE INDEX idx_high_value_orders ON orders(id) WHERE total > 1000;
CREATE INDEX idx_recent_logs ON logs(id) WHERE created_at > CURRENT_DATE - INTERVAL '7 days';`,
        },
        {
          command: 'Expression Index',
          description: 'Index on expression results',
          usage: 'Function-based index',
          example: `-- Expression index
CREATE INDEX idx_employee_lower_name ON employees(LOWER(name));
CREATE INDEX idx_product_price_range ON products(CASE WHEN price > 100 THEN 'high' ELSE 'low' END);
CREATE INDEX idx_user_email_domain ON users(SUBSTRING(email FROM POSITION('@' IN email) + 1));`,
        },
        {
          command: 'Rebuild Index',
          description: 'Rebuild fragmented index',
          usage: 'REINDEX command',
          example: `-- Rebuild index
REINDEX INDEX idx_employee_email;

-- Rebuild all indexes on table
REINDEX TABLE employees;

-- Rebuild indexes in specific tablespace
REINDEX TABLESPACE new_tablespace TABLE employees;`,
        },
        {
          command: 'Analyze Query Plan',
          description: 'Analyze query execution plan',
          usage: 'EXPLAIN, EXPLAIN ANALYZE',
          example: `-- Explain query plan
EXPLAIN SELECT * FROM employees WHERE department_id = 10;

-- Explain with actual execution
EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 10;

-- Explain with buffers
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM employees WHERE department_id = 10;`,
        },
        {
          command: 'Index Usage Statistics',
          description: 'Monitor index usage',
          usage: 'pg_stat_user_indexes view',
          example: `-- Check index usage
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
WHERE tablename = 'employees';

-- Find unused indexes
SELECT schemaname, tablename, indexname
FROM pg_stat_user_indexes
WHERE idx_scan = 0;`,
        },
        {
          command: 'Drop Index',
          description: 'Remove index',
          usage: 'DROP INDEX',
          example: `-- Drop index
DROP INDEX idx_employee_email;

-- Drop index with cascade
DROP INDEX IF EXISTS idx_employee_email CASCADE;`,
        },
      ],
    },
    {
      title: 'Partitioning',
      commands: [
        {
          command: 'Range Partitioning',
          description: 'Partition by value range',
          usage: 'PARTITION BY RANGE',
          example: `-- Range partitioning
CREATE TABLE sales (
    id SERIAL,
    sale_date DATE NOT NULL,
    amount NUMERIC NOT NULL,
    region TEXT
) PARTITION BY RANGE (sale_date);

-- Create partitions
CREATE TABLE sales_2022 PARTITION OF sales
    FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');

CREATE TABLE sales_2023 PARTITION OF sales
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');`,
        },
        {
          command: 'List Partitioning',
          description: 'Partition by value list',
          usage: 'PARTITION BY LIST',
          example: `-- List partitioning
CREATE TABLE employees (
    id SERIAL,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    salary NUMERIC
) PARTITION BY LIST (department);

-- Create partitions
CREATE TABLE employees_it PARTITION OF employees
    FOR VALUES IN ('IT', 'Development');

CREATE TABLE employees_sales PARTITION OF employees
    FOR VALUES IN ('Sales', 'Marketing');

CREATE TABLE employees_other PARTITION OF employees
    DEFAULT;`,
        },
        {
          command: 'Hash Partitioning',
          description: 'Partition by hash function',
          usage: 'PARTITION BY HASH',
          example: `-- Hash partitioning
CREATE TABLE orders (
    id SERIAL,
    customer_id INTEGER NOT NULL,
    order_date DATE,
    total NUMERIC
) PARTITION BY HASH (customer_id);

-- Create partitions
CREATE TABLE orders_part1 PARTITION OF orders
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE orders_part2 PARTITION OF orders
    FOR VALUES WITH (MODULUS 4, REMAINDER 1);

CREATE TABLE orders_part3 PARTITION OF orders
    FOR VALUES WITH (MODULUS 4, REMAINDER 2);

CREATE TABLE orders_part4 PARTITION OF orders
    FOR VALUES WITH (MODULUS 4, REMAINDER 3);`,
        },
        {
          command: 'Subpartitioning',
          description: 'Multiple partitioning levels',
          usage: 'SUBPARTITION BY',
          example: `-- Subpartitioning (Range-Hash)
CREATE TABLE sales_detail (
    id SERIAL,
    sale_date DATE NOT NULL,
    region TEXT NOT NULL,
    product_id INTEGER,
    amount NUMERIC
) PARTITION BY RANGE (sale_date)
SUBPARTITION BY HASH (product_id)
SUBPARTITION TEMPLATE (
    SUBPARTITION sp1,
    SUBPARTITION sp2,
    SUBPARTITION sp3,
    SUBPARTITION sp4
);

-- Create partitions with subpartitions
CREATE TABLE sales_2022 PARTITION OF sales
    FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');`,
        },
        {
          command: 'Manage Partitions',
          description: 'Add, drop, detach partitions',
          usage: 'ALTER TABLE partition operations',
          example: `-- Add partition
CREATE TABLE sales_2024 PARTITION OF sales
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- Detach partition
ALTER TABLE sales DETACH PARTITION sales_2022;

-- Attach partition
ALTER TABLE sales ATTACH PARTITION sales_2022
    FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');

-- Drop partition
ALTER TABLE sales DETACH PARTITION sales_2022;
DROP TABLE sales_2022;`,
        },
        {
          command: 'Partition Indexing',
          description: 'Index partitioned tables',
          usage: 'Index on partitioned table',
          example: `-- Index on partitioned table
CREATE INDEX idx_sales_date ON sales(sale_date);

-- Create index on specific partition
CREATE INDEX idx_sales_2022_date ON sales_2022(sale_date);

-- Unique index on partitioned table
CREATE UNIQUE INDEX idx_orders_unique ON orders(customer_id, order_date);`,
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
          example: `-- Create user
CREATE USER app_user WITH PASSWORD 'SecurePassword123';

-- Create user with options
CREATE USER app_user WITH 
    PASSWORD 'SecurePassword123' 
    CREATEDB 
    CREATEROLE 
    VALID UNTIL '2024-12-31';`,
        },
        {
          command: 'Alter User',
          description: 'Modify user properties',
          usage: 'ALTER USER statement',
          example: `-- Alter user password
ALTER USER app_user WITH PASSWORD 'NewPassword123';

-- Alter user options
ALTER USER app_user CREATEDB;
ALTER USER app_user NOCREATEROLE;
ALTER USER app_user VALID UNTIL '2025-12-31';`,
        },
        {
          command: 'Grant Privileges',
          description: 'Grant user privileges',
          usage: 'GRANT statement',
          example: `-- Grant database privileges
GRANT CONNECT ON DATABASE myapp TO app_user;
GRANT CREATE ON DATABASE myapp TO app_user;

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO app_user;
GRANT USAGE ON SCHEMA public TO app_user;

-- Grant table privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO app_user;
GRANT ALL ON ALL TABLES IN SCHEMA public TO app_user;`,
        },
        {
          command: 'Revoke Privileges',
          description: 'Revoke user privileges',
          usage: 'REVOKE statement',
          example: `-- Revoke privileges
REVOKE DELETE ON employees FROM app_user;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM app_user;
REVOKE CONNECT ON DATABASE myapp FROM app_user;`,
        },
        {
          command: 'Create Role',
          description: 'Create and manage roles',
          usage: 'CREATE ROLE, GRANT ROLE',
          example: `-- Create role
CREATE ROLE app_developer;

-- Grant privileges to role
GRANT CONNECT ON DATABASE myapp TO app_developer;
GRANT USAGE, CREATE ON SCHEMA public TO app_developer;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_developer;

-- Grant role to user
GRANT app_developer TO john_doe;

-- Set default role
ALTER USER john_doe SET ROLE app_developer;`,
        },
        {
          command: 'Row Level Security',
          description: 'Implement row-level security',
          usage: 'RLS policies',
          example: `-- Enable RLS on table
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY employee_isolation_policy ON employees
    FOR ALL
    TO app_user
    USING (department_id = current_setting('app.current_department_id')::INTEGER)
    WITH CHECK (department_id = current_setting('app.current_department_id')::INTEGER);

-- Apply policy for specific operations
CREATE POLICY employee_read_policy ON employees
    FOR SELECT
    TO app_user
    USING (department_id = current_setting('app.current_department_id')::INTEGER);`,
        },
        {
          command: 'Column Level Security',
          description: 'Restrict access to specific columns',
          usage: 'Column privileges',
          example: `-- Grant specific column access
GRANT SELECT(id, name, email) ON employees TO app_user;

-- Revoke access to sensitive columns
REVOKE SELECT(salary, ssn) ON employees FROM app_user;

-- Create view with limited columns
CREATE VIEW employee_public AS
SELECT id, name, email, department_id
FROM employees;

GRANT SELECT ON employee_public TO app_user;`,
        },
        {
          command: 'Data Encryption',
          description: 'Encrypt sensitive data',
          usage: 'pgcrypto extension',
          example: `-- Enable pgcrypto extension
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Encrypt data
INSERT INTO sensitive_data (id, encrypted_data)
VALUES (1, pgp_sym_encrypt('Secret Message', 'encryption_key'));

-- Decrypt data
SELECT pgp_sym_decrypt(encrypted_data, 'encryption_key') as decrypted_data
FROM sensitive_data
WHERE id = 1;

-- Generate hash
SELECT crypt('password', gen_salt('bf')) as password_hash;`,
        },
        {
          command: 'Audit Logging',
          description: 'Set up database auditing',
          usage: 'pgaudit extension',
          example: `-- Enable pgaudit extension
CREATE EXTENSION IF NOT EXISTS pgaudit;

-- Configure audit logging
ALTER SYSTEM SET pgaudit.log = 'all';
ALTER SYSTEM SET pgaudit.log_catalog = 'on';
ALTER SYSTEM SET pgaudit.log_level = 'log';

-- Reload configuration
SELECT pg_reload_conf();

-- Audit specific operations
ALTER SYSTEM SET pgaudit.log = 'ddl, write';
ALTER SYSTEM SET pgaudit.role = 'audit_role';`,
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      commands: [
        {
          command: 'pg_dump Backup',
          description: 'Create logical backup with pg_dump',
          usage: 'pg_dump command',
          example: `# Full database backup
pg_dump -U username -h localhost -d myapp > myapp_backup.sql

# Specific database
pg_dump -U username -h localhost myapp > myapp_backup.sql

# Custom format (compressed)
pg_dump -U username -h localhost -Fc myapp > myapp_backup.dump

# Directory format (parallel)
pg_dump -U username -h localhost -Fd myapp -f myapp_backup_dir

# With specific tables
pg_dump -U username -h localhost -d myapp -t employees -t departments > tables_backup.sql`,
        },
        {
          command: 'pg_dump Options',
          description: 'Advanced pg_dump options',
          usage: 'pg_dump with options',
          example: `# Advanced pg_dump options
# Exclude tables
pg_dump -U username -h localhost -d myapp --exclude-table-data=logs > backup.sql

# Data only (no schema)
pg_dump -U username -h localhost -d myapp --data-only > data.sql

# Schema only (no data)
pg_dump -U username -h localhost -d myapp --schema-only > schema.sql

# With custom format options
pg_dump -U username -h localhost -d myapp -Fc -Z9 -f myapp_backup.dump

# Include dependencies
pg_dump -U username -h localhost -d myapp --verbose --clean --if-exists > backup.sql`,
        },
        {
          command: 'pg_restore Recovery',
          description: 'Restore from backup',
          usage: 'pg_restore command',
          example: `# Restore from SQL file
psql -U username -h localhost -d myapp < myapp_backup.sql

# Restore from custom format
pg_restore -U username -h localhost -d myapp myapp_backup.dump

# Restore specific tables
pg_restore -U username -h localhost -d myapp -t employees -t departments myapp_backup.dump

# Restore with options
pg_restore -U username -h localhost -d myapp --clean --if-exists myapp_backup.dump

# Parallel restore
pg_restore -U username -h localhost -d myapp -j 4 myapp_backup.dump`,
        },
        {
          command: 'pg_basebackup Physical Backup',
          description: 'Create physical backup',
          usage: 'pg_basebackup command',
          example: `# Physical backup
pg_basebackup -U username -h localhost -D /backup/base_backup -Ft -z -P

# With specific options
pg_basebackup -U username -h localhost -D /backup/base_backup -Ft -z -P -X stream

# Compressed backup
pg_basebackup -U username -h localhost -D /backup/base_backup -Ft -z -c fast -P

# Label backup
pg_basebackup -U username -h localhost -D /backup/base_backup -Ft -z -l "backup_$(date +%Y%m%d)"`,
        },
        {
          command: 'Point in Time Recovery',
          description: 'Recover to specific point in time',
          usage: 'PITR with archive logs',
          example: `# Configure archive mode (postgresql.conf)
archive_mode = on
archive_command = 'cp %p /backup/archive/%f'

# Recovery configuration (recovery.conf)
restore_command = 'cp /backup/archive/%f %p'
recovery_target_time = '2023-12-25 10:30:00'

# Start PostgreSQL in recovery mode
pg_ctl -D /backup/base_backup start

# Or use pg_ctl promote after recovery
pg_ctl promote -D /backup/base_backup`,
        },
        {
          command: 'Continuous Archiving',
          description: 'Set up continuous WAL archiving',
          usage: 'WAL archiving configuration',
          example: `# postgresql.conf settings
wal_level = replica
archive_mode = on
archive_command = 'rsync -a %p backup_server:/backup/wal/%f'
archive_timeout = 300

# Create restore point
SELECT pg_create_restore_point('before_major_update');

# List restore points
SELECT * FROM pg_restore_points();`,
        },
      ],
    },
    {
      title: 'Monitoring and Performance',
      commands: [
        {
          command: 'Activity Monitoring',
          description: 'Monitor database activity',
          usage: 'pg_stat_activity view',
          example: `-- Current activity
SELECT * FROM pg_stat_activity;

-- Filter by database
SELECT * FROM pg_stat_activity WHERE datname = 'myapp';

-- Find long-running queries
SELECT pid, now() - query_start as duration, query
FROM pg_stat_activity
WHERE state = 'active' AND now() - query_start > interval '5 minutes';

-- Kill long-running query
SELECT pg_terminate_backend(pid);`,
        },
        {
          command: 'Performance Statistics',
          description: 'Check performance statistics',
          usage: 'pg_stat_* views',
          example: `-- Table statistics
SELECT schemaname, tablename, seq_scan, seq_tup_read, idx_scan, idx_tup_fetch
FROM pg_stat_user_tables
WHERE tablename = 'employees';

-- Index statistics
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
WHERE tablename = 'employees';

-- Function statistics
SELECT funcname, calls, total_time, mean_time
FROM pg_stat_user_functions
ORDER BY total_time DESC;`,
        },
        {
          command: 'Database Size Monitoring',
          description: 'Monitor database and table sizes',
          usage: 'Size functions',
          example: `-- Database sizes
SELECT pg_database.datname, 
       pg_size_pretty(pg_database_size(pg_database.datname)) as size
FROM pg_database;

-- Table sizes
SELECT schemaname, tablename,
       pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as total_size,
       pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) as table_size,
       pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename)) as index_size
FROM pg_tables
WHERE schemaname = 'public';`,
        },
        {
          command: 'Connection Monitoring',
          description: 'Monitor database connections',
          usage: 'Connection statistics',
          example: `-- Connection limits
SELECT max_connections, current_setting('max_connections') as current_max;

-- Current connections by state
SELECT state, COUNT(*) FROM pg_stat_activity GROUP BY state;

-- Connections by user
SELECT usename, COUNT(*) FROM pg_stat_activity GROUP BY usename;

-- Connection history (if pg_stat_statements is enabled)
SELECT * FROM pg_stat_activity WHERE state = 'active';`,
        },
        {
          command: 'Lock Monitoring',
          description: 'Monitor database locks',
          usage: 'Lock views',
          example: `-- Current locks
SELECT t.relname, l.locktype, l.mode, l.granted
FROM pg_locks l
JOIN pg_class t ON l.relation = t.oid
WHERE NOT l.granted;

-- Blocked queries
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
        {
          command: 'VACUUM and Maintenance',
          description: 'Database maintenance operations',
          usage: 'VACUUM, ANALYZE, REINDEX',
          example: `-- Regular VACUUM
VACUUM employees;

-- VACUUM with analyze
VACUUM ANALYZE employees;

-- Full VACUUM (exclusive lock)
VACUUM FULL employees;

-- Autovacuum settings
ALTER SYSTEM SET autovacuum = 'on';
ALTER SYSTEM SET autovacuum_vacuum_scale_factor = 0.1;

-- Reindex table
REINDEX TABLE employees;

-- Analyze table
ANALYZE employees;`,
        },
      ],
    },
    {
      title: 'PostgreSQL Extensions',
      commands: [
        {
          command: 'Install Extensions',
          description: 'Install PostgreSQL extensions',
          usage: 'CREATE EXTENSION',
          example: `-- Install common extensions
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS uuid-ossp;
CREATE EXTENSION IF NOT EXISTS postgis;`,
        },
        {
          command: 'PostGIS Geographic',
          description: 'Geographic data with PostGIS',
          usage: 'PostGIS functions',
          example: `-- Create table with geographic data
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name TEXT,
    geom GEOMETRY(POINT, 4326)
);

-- Insert geographic data
INSERT INTO locations (name, geom) 
VALUES ('New York', ST_GeomFromText('POINT(-74.0060 40.7128)', 4326));

-- Query geographic data
SELECT name, ST_Distance(geom, ST_GeomFromText('POINT(-74.0060 40.7128)', 4326)) as distance
FROM locations
ORDER BY distance;`,
        },
        {
          command: 'Full Text Search',
          description: 'Full text search capabilities',
          usage: 'tsvector, tsquery',
          example: `-- Create table with full text search
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    search_vector tsvector
);

-- Create search vector
UPDATE documents 
SET search_vector = to_tsvector('english', title || ' ' || content);

-- Create index
CREATE INDEX idx_documents_search ON documents USING GIN(search_vector);

-- Search documents
SELECT title, content
FROM documents
WHERE search_vector @@ to_tsquery('english', 'database & query');`,
        },
        {
          command: 'pg_stat_statements',
          description: 'Query statistics tracking',
          usage: 'pg_stat_statements view',
          example: `-- Top queries by total time
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 10;

-- Top queries by calls
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY calls DESC
LIMIT 10;

-- Reset statistics
SELECT pg_stat_statements_reset();`,
        },
        {
          command: 'UUID Generation',
          description: 'Generate UUID values',
          usage: 'uuid-ossp extension',
          example: `-- Generate UUIDs
SELECT uuid_generate_v4() as random_uuid;
SELECT uuid_generate_v1() as time_based_uuid;

-- Use UUID as primary key
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    email TEXT
);`,
        },
        {
          command: 'pg_trgm Fuzzy Matching',
          description: 'Fuzzy string matching',
          usage: 'trigram extension',
          example: `-- Create trigram index
CREATE INDEX idx_company_name_trgm ON companies USING GIN (name gin_trgm_ops);

-- Fuzzy search
SELECT name FROM companies 
WHERE name % 'Microsft';

-- Similarity ranking
SELECT name, similarity(name, 'Microsoft') as sim_score
FROM companies 
WHERE name % 'Microsoft'
ORDER BY sim_score DESC;`,
        },
      ],
    },
    {
      title: 'JSON and Array Operations',
      commands: [
        {
          command: 'JSON Data Types',
          description: 'Work with JSON data',
          usage: 'JSON vs JSONB',
          example: `-- JSON vs JSONB
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    attributes JSON,    -- Text-based, slower
    metadata JSONB      -- Binary, faster, indexed
);

-- Insert JSON data
INSERT INTO products (name, attributes, metadata)
VALUES ('Laptop', 
        '{"color": "black", "ram": "16GB"}',
        '{"color": "black", "ram": "16GB", "price": 999.99}');`,
        },
        {
          command: 'JSON Query Functions',
          description: 'Query JSON data',
          usage: 'JSON operators and functions',
          example: `-- Query JSON data
-- Access JSONB fields
SELECT name, metadata->>'color' as color FROM products;
SELECT name, metadata->'price' as price FROM products;

-- JSON functions
SELECT name, jsonb_extract_path_text(metadata, 'color') as color FROM products;
SELECT name, jsonb_typeof(metadata->'price') as price_type FROM products;

-- JSON path queries
SELECT name, jsonb_path_query_first(metadata, '$.price') as price FROM products;`,
        },
        {
          command: 'JSON Modification',
          description: 'Modify JSON data',
          usage: 'JSONB modification functions',
          example: `-- Modify JSONB data
-- Update field
UPDATE products 
SET metadata = jsonb_set(metadata, '{price}', '899.99')
WHERE id = 1;

-- Add field
UPDATE products 
SET metadata = metadata || '{"brand": "Dell"}'::jsonb
WHERE id = 1;

-- Delete field
UPDATE products 
SET metadata = metadata - 'ram'
WHERE id = 1;

-- Rename field
UPDATE products 
SET metadata = metadata - 'color' || '{"color_name": "black"}'::jsonb
WHERE id = 1;`,
        },
        {
          command: 'Array Data Types',
          description: 'Work with array data',
          usage: 'Array operators and functions',
          example: `-- Create table with arrays
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    tags TEXT[],
    categories INTEGER[]
);

-- Insert array data
INSERT INTO products (name, tags, categories) 
VALUES ('Laptop', ARRAY['electronics', 'computer'], ARRAY[1, 2, 3]);

-- Query arrays
SELECT name, tags FROM products WHERE 'electronics' = ANY(tags);
SELECT name, categories FROM products WHERE 2 = ANY(categories);
SELECT name, array_length(tags, 1) as tag_count FROM products;`,
        },
        {
          command: 'Array Functions',
          description: 'Array manipulation functions',
          usage: 'Array functions',
          example: `-- Array functions
-- Array concatenation
SELECT ARRAY[1, 2] || ARRAY[3, 4] as combined;

-- Array contains
SELECT ARRAY[1, 2, 3] @> ARRAY[1, 2] as contains;
SELECT ARRAY[1, 2] <@ ARRAY[1, 2, 3] as contained;

-- Array functions
SELECT array_append(ARRAY[1, 2], 3) as appended;
SELECT array_remove(ARRAY[1, 2, 3], 2) as removed;
SELECT unnest(ARRAY[1, 2, 3]) as elements;`,
        },
        {
          command: 'JSON Indexing',
          description: 'Index JSON data',
          usage: 'GIN indexes on JSON',
          example: `-- Create GIN index on JSONB
CREATE INDEX idx_products_metadata ON products USING GIN(metadata);

-- Create index on specific JSON path
CREATE INDEX idx_products_price ON products USING GIN ((metadata->'price'));

-- Create expression index on JSON
CREATE INDEX idx_products_color ON products USING BTREE ((metadata->>'color'));

-- Query using index
SELECT name FROM products WHERE metadata @> '{"color": "black"}';`,
        },
      ],
    },
    {
      title: 'PostgreSQL Tools and Utilities',
      commands: [
        {
          command: 'psql Commands',
          description: 'Essential psql meta-commands',
          usage: 'psql client commands',
          example: `-- Essential psql commands
\\l                    -- List databases
\\c dbname            -- Connect to database
\\dt                   -- List tables
\\d table_name         -- Describe table
\\du                   -- List users
\\dn                   -- List schemas
\\di                   -- List indexes
\\dp                   -- List privileges
\\df                   -- List functions
\\dt+ table_name       -- List tables with sizes
\\d+ table_name        -- Describe table with details
\\h command            -- Help with SQL command
\\?                    -- Help with psql commands
\\set                  -- Show all variables
\\set var value        -- Set variable
\\echo :var            -- Echo variable
\\o filename          -- Output to file
\\i filename          -- Execute commands from file
\\q                    -- Quit psql`,
        },
        {
          command: 'psql Variables',
          description: 'Use psql variables',
          usage: 'psql variable substitution',
          example: `-- Set and use variables
\\set user_id 123
SELECT * FROM employees WHERE id = :user_id;

-- Use in scripts
\\set table_name employees
\\SELECT * FROM :table_name WHERE id = :user_id;

-- Environment variables
\\echo :HOST
\\echo :PORT
\\echo :USER
\\echo :DBNAME`,
        },
        {
          command: 'psql Formatting',
          description: 'Format query output',
          usage: 'psql formatting options',
          example: `-- Formatting options
\\pset border 2        -- Set border style
\\pset expanded on     -- Expanded display
\\pset null 'NULL'     -- Show NULL as 'NULL'
\\x on                 -- Toggle expanded display
\\a                    -- Toggle alignment
\\H                    -- Toggle HTML output
\\T                    -- Toggle table headers

-- Set pager
\\pset pager off       -- Disable pager
\\pset pager on        -- Enable pager`,
        },
        {
          command: 'pgAdmin Features',
          description: 'pgAdmin GUI features',
          usage: 'pgAdmin capabilities',
          example: `-- pgAdmin features
-- Query Tool: Execute SQL and PL/SQL
-- Debugger: Debug PL/SQL functions
-- Dashboard: Monitor database performance
-- Backup/Restore: GUI backup operations
-- Schema Diff: Compare schemas
-- Job Agent: Schedule jobs
-- ERD Tool: Create entity-relationship diagrams
-- Import/Export: Data import/export wizard`,
        },
        {
          command: 'Data Dictionary Views',
          description: 'Query PostgreSQL metadata',
          usage: 'Information schema views',
          example: `-- Database information
SELECT * FROM information_schema.schemata;
SELECT * FROM information_schema.tables WHERE table_schema = 'public';
SELECT * FROM information_schema.columns WHERE table_name = 'employees';
SELECT * FROM information_schema.constraints WHERE table_name = 'employees';
SELECT * FROM information_schema.key_column_usage WHERE table_name = 'employees';

-- PostgreSQL specific views
SELECT * FROM pg_class WHERE relkind = 'r';  -- Tables
SELECT * FROM pg_index WHERE indrelid = 'employees'::regclass;
SELECT * FROM pg_constraint WHERE conrelid = 'employees'::regclass;`,
        },
        {
          command: 'Performance Analysis Tools',
          description: 'Performance analysis utilities',
          usage: 'Performance tools',
          example: `-- Performance analysis
-- Explain analyze
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) SELECT * FROM employees;

-- Auto-explain (postgresql.conf)
shared_preload_libraries = 'auto_explain'
auto_explain.log_min_duration = 1000
auto_explain.log_analyze = true
auto_explain.log_buffers = true

-- pg_stat_statements
SELECT query, calls, total_exec_time, rows, 100.0 * shared_blks_hit / nullif(shared_blks_hit + shared_blks_read, 0) AS hit_percent
FROM pg_stat_statements
ORDER BY total_exec_time DESC;`,
        },
      ],
    },
  ],
};
