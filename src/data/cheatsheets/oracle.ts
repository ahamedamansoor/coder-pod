import { Code } from 'lucide-react';

export const oracleCheatsheet = {
  id: 'oracle',
  name: 'Oracle Database',
  description: 'Master Oracle Database from basics to advanced features (12c-23c)',
  icon: Code,
  colorTheme: 'red' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Oracle',
      commands: [
        {
          command: 'Oracle Database Overview',
          description: 'Introduction to Oracle Database architecture',
          usage: 'Understanding Oracle components and editions',
          example: `Database Architecture:
Database Instance (SGA + Background Processes)
Database Files (Datafiles, Control Files, Redo Logs)
Memory Structures (SGA, PGA)
Background Processes (SMON, PMON, DBWn, LGWR, etc.)

Oracle Editions:
Oracle Database XE (Express Edition) - Free
Oracle Database Standard Edition 2
Oracle Database Enterprise Edition
Oracle Database Cloud Services

Key Features:
ACID Compliance
Multi-Model Database (Relational, JSON, XML, Spatial, Graph)
High Availability (RAC, Data Guard)
Security (Encryption, Auditing, VPD)
Performance (In-Memory, Partitioning)`,
        },
        {
          command: 'Install Oracle Linux',
          description: 'Install Oracle Database on Linux',
          usage: 'yum package installation',
          example: `# Linux Installation
sudo yum install -y oracle-database-preinstall-21c.x86_64
sudo rpm -ivh oracle-database-xe-21c-1.0-1.ol8.x86_64.rpm`,
        },
        {
          command: 'Configure Oracle Database',
          description: 'Configure Oracle Database XE',
          usage: 'Post-installation configuration',
          example: `# Configure Database
sudo /etc/init.d/oracle-xe-21c configure`,
        },
        {
          command: 'Set Environment Variables',
          description: 'Configure Oracle environment',
          usage: 'ORACLE_SID, ORACLE_HOME, PATH',
          example: `# Environment Variables
export ORACLE_SID=XE
export ORACLE_BASE=/opt/oracle
export ORACLE_HOME=/opt/oracle/product/21c/dbhomeXE
export PATH=$ORACLE_HOME/bin:$PATH

# Add to ~/.bashrc or ~/.bash_profile`,
        },
        {
          command: 'Connect to Oracle',
          description: 'Connect to Oracle Database',
          usage: 'sqlplus command',
          example: `# Connect to Oracle
sqlplus / as sysdba                    # Connect as sysdba
sqlplus system/password@XE           # Connect as system
sqlplus username/password@hostname:port/SID

# SQL Developer or other GUI tools
# Connection: hostname:1521/XE`,
        },
        {
          command: 'Basic SQL Commands',
          description: 'Essential Oracle SQL commands',
          usage: 'SHOW, DESCRIBE, SELECT',
          example: `-- Basic SQL commands
SHOW USER;                           -- Current user
SHOW PARAMETER;                     -- Database parameters
DESCRIBE employees;                  -- Table structure
SELECT * FROM tab;                   -- User tables
SELECT table_name FROM user_tables;  -- User tables`,
        },
        {
          command: 'Create Table Basic',
          description: 'Create a simple table',
          usage: 'CREATE TABLE statement',
          example: `-- Create basic table
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    first_name VARCHAR2(20),
    last_name VARCHAR2(25) NOT NULL,
    email VARCHAR2(25) UNIQUE,
    hire_date DATE DEFAULT SYSDATE,
    salary NUMBER(8,2)
);`,
        },
        {
          command: 'Insert Data',
          description: 'Insert data into table',
          usage: 'INSERT INTO statement',
          example: `-- Insert single record
INSERT INTO employees (employee_id, first_name, last_name, email, salary)
VALUES (1, 'John', 'Doe', 'john.doe@company.com', 50000);

-- Insert multiple records
INSERT ALL
    INTO employees VALUES (2, 'Jane', 'Smith', 'jane.smith@company.com', 60000)
    INTO employees VALUES (3, 'Bob', 'Johnson', 'bob.johnson@company.com', 55000)
SELECT * FROM dual;`,
        },
        {
          command: 'Select Data',
          description: 'Retrieve data from table',
          usage: 'SELECT statement',
          example: `-- Select all data
SELECT * FROM employees;

-- Select specific columns
SELECT employee_id, first_name, last_name FROM employees;

-- Select with condition
SELECT * FROM employees WHERE salary > 55000;

-- Select with ordering
SELECT * FROM employees ORDER BY last_name, first_name;`,
        },
        {
          command: 'Update Data',
          description: 'Update existing data',
          usage: 'UPDATE statement',
          example: `-- Update single record
UPDATE employees 
SET salary = 52000 
WHERE employee_id = 1;

-- Update multiple records
UPDATE employees 
SET salary = salary * 1.1 
WHERE department_id = 10;`,
        },
        {
          command: 'Delete Data',
          description: 'Delete data from table',
          usage: 'DELETE statement',
          example: `-- Delete specific record
DELETE FROM employees WHERE employee_id = 1;

-- Delete with condition
DELETE FROM employees WHERE hire_date < DATE '2020-01-01';

-- Delete all records (keep table)
DELETE FROM employees;`,
        },
        {
          command: 'Drop Table',
          description: 'Delete entire table',
          usage: 'DROP TABLE statement',
          example: `-- Drop table
DROP TABLE employees;

-- Drop table with purge (cannot be recovered)
DROP TABLE employees PURGE;`,
        },
        {
          command: 'Data Types Overview',
          description: 'Oracle data types',
          usage: 'Common data types',
          example: `-- Numeric types
NUMBER(p,s)     -- Precision and scale
INTEGER         -- Whole number
DECIMAL(p,s)    -- Decimal number

-- String types
VARCHAR2(n)     -- Variable length string
CHAR(n)         -- Fixed length string
CLOB            -- Large character data

-- Date types
DATE            -- Date and time
TIMESTAMP       -- Date with fractional seconds
INTERVAL        -- Time interval

-- Other types
BLOB            -- Binary data
RAW(n)          -- Binary data
ROWID           -- Row identifier`,
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
    department_id NUMBER(4) PRIMARY KEY,
    department_name VARCHAR2(30) NOT NULL
);

-- Primary key at table level
CREATE TABLE employees (
    employee_id NUMBER(6),
    department_id NUMBER(4),
    CONSTRAINT pk_employee PRIMARY KEY (employee_id)
);`,
        },
        {
          command: 'Foreign Key Constraint',
          description: 'Define foreign key relationship',
          usage: 'FOREIGN KEY constraint',
          example: `-- Foreign key constraint
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    department_id NUMBER(4),
    CONSTRAINT fk_dept FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

-- Foreign key with actions
ALTER TABLE employees ADD CONSTRAINT fk_dept
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
    ON DELETE CASCADE
    ON UPDATE SET NULL;`,
        },
        {
          command: 'Unique Constraint',
          description: 'Ensure unique values',
          usage: 'UNIQUE constraint',
          example: `-- Unique constraint
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    email VARCHAR2(25) UNIQUE,
    phone VARCHAR2(20),
    CONSTRAINT uk_phone UNIQUE (phone)
);

-- Add unique constraint
ALTER TABLE employees ADD CONSTRAINT uk_email UNIQUE (email);`,
        },
        {
          command: 'Check Constraint',
          description: 'Validate data values',
          usage: 'CHECK constraint',
          example: `-- Check constraint
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    salary NUMBER(8,2) CHECK (salary > 0),
    age NUMBER(3) CHECK (age BETWEEN 18 AND 65),
    CONSTRAINT chk_salary_positive CHECK (salary > 25000)
);

-- Add check constraint
ALTER TABLE employees ADD CONSTRAINT chk_age
    CHECK (age >= 18);`,
        },
        {
          command: 'NOT NULL Constraint',
          description: 'Require non-null values',
          usage: 'NOT NULL constraint',
          example: `-- NOT NULL constraint
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    first_name VARCHAR2(20) NOT NULL,
    last_name VARCHAR2(25) NOT NULL,
    email VARCHAR2(25)
);

-- Add NOT NULL constraint
ALTER TABLE employees MODIFY first_name CONSTRAINT nn_first_name NOT NULL;`,
        },
        {
          command: 'Default Values',
          description: 'Set default column values',
          usage: 'DEFAULT constraint',
          example: `-- Default values
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    hire_date DATE DEFAULT SYSDATE,
    status VARCHAR2(10) DEFAULT 'ACTIVE',
    salary NUMBER(8,2) DEFAULT 30000
);

-- Add default value
ALTER TABLE employees MODIFY hire_date DEFAULT SYSDATE;`,
        },
        {
          command: 'Disable/Enable Constraints',
          description: 'Manage constraint status',
          usage: 'DISABLE/ENABLE constraints',
          example: `-- Disable constraint
ALTER TABLE employees DISABLE CONSTRAINT fk_dept;

-- Enable constraint
ALTER TABLE employees ENABLE CONSTRAINT fk_dept;

-- Disable all constraints
ALTER TABLE employees DISABLE ALL CONSTRAINTS;

-- Enable all constraints
ALTER TABLE employees ENABLE ALL CONSTRAINTS;`,
        },
        {
          command: 'Drop Constraints',
          description: 'Remove constraints',
          usage: 'DROP CONSTRAINT',
          example: `-- Drop specific constraint
ALTER TABLE employees DROP CONSTRAINT fk_dept;

-- Drop primary key
ALTER TABLE employees DROP PRIMARY KEY;

-- Drop constraint with cascade
ALTER TABLE employees DROP CONSTRAINT uk_email CASCADE;`,
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
SELECT e.employee_id, e.first_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;`,
        },
        {
          command: 'Left Join',
          description: 'Join with all left table rows',
          usage: 'LEFT OUTER JOIN clause',
          example: `-- Left outer join
SELECT e.employee_id, e.first_name, d.department_name
FROM employees e
LEFT OUTER JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id IS NULL;  -- Employees without departments`,
        },
        {
          command: 'Right Join',
          description: 'Join with all right table rows',
          usage: 'RIGHT OUTER JOIN clause',
          example: `-- Right outer join
SELECT d.department_name, COUNT(e.employee_id) as employee_count
FROM employees e
RIGHT OUTER JOIN departments d ON e.department_id = d.department_id
GROUP BY d.department_name;`,
        },
        {
          command: 'Full Outer Join',
          description: 'Join with all rows from both tables',
          usage: 'FULL OUTER JOIN clause',
          example: `-- Full outer join
SELECT e.employee_id, e.first_name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id;`,
        },
        {
          command: 'Self Join',
          description: 'Join table to itself',
          usage: 'Self-referencing join',
          example: `-- Self join (employee-manager relationship)
SELECT e.first_name || ' ' || e.last_name as employee,
       m.first_name || ' ' || m.last_name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;`,
        },
        {
          command: 'Cross Join',
          description: 'Cartesian product of tables',
          usage: 'CROSS JOIN clause',
          example: `-- Cross join
SELECT e.first_name, d.department_name
FROM employees e
CROSS JOIN departments d;

-- Alternative syntax
SELECT e.first_name, d.department_name
FROM employees e, departments d;`,
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
          command: 'Join with USING',
          description: 'Join using common column names',
          usage: 'USING clause',
          example: `-- Join with USING
SELECT employee_id, department_id, department_name
FROM employees
JOIN departments USING (department_id);`,
        },
        {
          command: 'Subquery in SELECT',
          description: 'Use subquery in SELECT clause',
          usage: 'Scalar subquery',
          example: `-- Subquery in SELECT
SELECT employee_id,
       first_name,
       (SELECT department_name FROM departments d 
        WHERE d.department_id = e.department_id) as dept_name
FROM employees e;`,
        },
        {
          command: 'Subquery in WHERE',
          description: 'Use subquery in WHERE clause',
          usage: 'Subquery with IN, EXISTS',
          example: `-- Subquery in WHERE with IN
SELECT first_name, salary FROM employees
WHERE department_id IN (SELECT department_id FROM departments 
                     WHERE location_id = 1700);

-- Subquery with EXISTS
SELECT first_name FROM employees e
WHERE EXISTS (SELECT 1 FROM job_history j 
              WHERE j.employee_id = e.employee_id);`,
        },
        {
          command: 'Subquery in FROM',
          description: 'Use subquery as derived table',
          usage: 'Derived table subquery',
          example: `-- Subquery in FROM
SELECT dept_name, avg_salary
FROM (SELECT d.department_name as dept_name,
             AVG(e.salary) as avg_salary
      FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      GROUP BY d.department_name)
WHERE avg_salary > 50000;`,
        },
        {
          command: 'WITH Clause',
          description: 'Common Table Expression (CTE)',
          usage: 'WITH clause',
          example: `-- CTE example
WITH dept_stats AS (
    SELECT department_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT e.first_name, e.salary, d.avg_salary
FROM employees e
JOIN dept_stats d ON e.department_id = d.department_id
WHERE e.salary > d.avg_salary;`,
        },
        {
          command: 'Hierarchical Query',
          description: 'Query hierarchical data',
          usage: 'CONNECT BY PRIOR',
          example: `-- Hierarchical query (employee hierarchy)
SELECT LEVEL,
       employee_id,
       first_name,
       manager_id,
       SYS_CONNECT_BY_PATH(first_name, ' -> ') as path
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;`,
        },
        {
          command: 'UNION Operations',
          description: 'Combine result sets',
          usage: 'UNION, UNION ALL, INTERSECT, MINUS',
          example: `-- UNION (removes duplicates)
SELECT first_name FROM employees WHERE department_id = 10
UNION
SELECT first_name FROM employees WHERE department_id = 20;

-- UNION ALL (includes duplicates)
SELECT first_name FROM employees WHERE department_id = 10
UNION ALL
SELECT first_name FROM employees WHERE department_id = 20;

-- INTERSECT (common records)
SELECT employee_id FROM employees
INTERSECT
SELECT employee_id FROM job_history;

-- MINUS (records in first but not second)
SELECT employee_id FROM employees
MINUS
SELECT employee_id FROM job_history;`,
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
SELECT COUNT(commission_pct) as employees_with_commission FROM employees;
SELECT COUNT(DISTINCT department_id) as departments_with_employees FROM employees;`,
        },
        {
          command: 'SUM Function',
          description: 'Sum numeric values',
          usage: 'SUM() function',
          example: `-- SUM function
SELECT SUM(salary) as total_payroll FROM employees;
SELECT SUM(NVL(commission_pct, 0)) as total_commission FROM employees;`,
        },
        {
          command: 'AVG Function',
          description: 'Calculate average values',
          usage: 'AVG() function',
          example: `-- AVG function
SELECT AVG(salary) as avg_salary FROM employees;
SELECT AVG(NVL(commission_pct, 0)) as avg_commission FROM employees;`,
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
SELECT department_id, job_id, COUNT(*) as count
FROM employees
GROUP BY department_id, job_id;`,
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
SELECT department_id, job_id, COUNT(*) as employee_count
FROM employees
GROUP BY GROUPING SETS ((department_id, job_id), (department_id), ());

-- Equivalent to multiple queries with UNION ALL`,
        },
        {
          command: 'ROLLUP and CUBE',
          description: 'Create subtotals and cross-tabulations',
          usage: 'ROLLUP, CUBE clauses',
          example: `-- ROLLUP (creates subtotals and grand total)
SELECT department_id, job_id, COUNT(*) as employee_count
FROM employees
GROUP BY ROLLUP (department_id, job_id);

-- CUBE (all combinations)
SELECT department_id, job_id, COUNT(*) as employee_count
FROM employees
GROUP BY CUBE (department_id, job_id);`,
        },
        {
          command: 'GROUPING Function',
          description: 'Identify rollup rows',
          usage: 'GROUPING() function',
          example: `-- GROUPING function
SELECT 
    department_id,
    job_id,
    COUNT(*) as employee_count,
    GROUPING(department_id) as dept_rollup,
    GROUPING(job_id) as job_rollup
FROM employees
GROUP BY ROLLUP (department_id, job_id);`,
        },
        {
          command: 'Aggregate Window Functions',
          description: 'Window functions with aggregates',
          usage: 'OVER() clause with aggregates',
          example: `-- Aggregate window functions
SELECT 
    employee_id,
    salary,
    AVG(salary) OVER () as avg_salary_all,
    AVG(salary) OVER (PARTITION BY department_id) as avg_salary_dept,
    SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as cumulative_salary
FROM employees;`,
        },
      ],
    },
    {
      title: 'String Functions',
      commands: [
        {
          command: 'UPPER and LOWER',
          description: 'Convert string case',
          usage: 'UPPER(), LOWER() functions',
          example: `-- Case conversion
SELECT UPPER(first_name) as upper_name FROM employees;
SELECT LOWER(email) as lower_email FROM employees;
SELECT INITCAP(first_name) as capitalized_name FROM employees;`,
        },
        {
          command: 'String Length',
          description: 'Get string length',
          usage: 'LENGTH(), INSTR() functions',
          example: `-- String length
SELECT LENGTH(first_name) as name_length FROM employees;
SELECT INSTR('john.doe@company.com', '@') as at_position FROM dual;`,
        },
        {
          command: 'String Trimming',
          description: 'Trim characters from strings',
          usage: 'TRIM(), LTRIM(), RTRIM() functions',
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
          usage: 'SUBSTR() function',
          example: `-- Substring extraction
SELECT SUBSTR('hello world', 1, 5) as first_word FROM dual;
SELECT SUBSTR('hello world', -5) as last_word FROM dual;
SELECT SUBSTR(email, 1, INSTR(email, '@') - 1) as username FROM employees;`,
        },
        {
          command: 'String Replacement',
          description: 'Replace parts of strings',
          usage: 'REPLACE() function',
          example: `-- String replacement
SELECT REPLACE('hello world', 'world', 'oracle') as replaced FROM dual;
SELECT TRANSLATE('abc123', 'abc', 'xyz') as translated FROM dual;`,
        },
        {
          command: 'String Concatenation',
          description: 'Combine strings',
          usage: '|| operator, CONCAT() function',
          example: `-- String concatenation
SELECT first_name || ' ' || last_name as full_name FROM employees;
SELECT CONCAT(first_name, ' ', last_name) as full_name FROM employees;`,
        },
      ],
    },
    {
      title: 'Date and Time Functions',
      commands: [
        {
          command: 'Current Date and Time',
          description: 'Get current date and time',
          usage: 'SYSDATE, CURRENT_TIMESTAMP',
          example: `-- Current date/time
SELECT SYSDATE as current_date FROM dual;
SELECT CURRENT_TIMESTAMP as current_timestamp FROM dual;
SELECT SYSTIMESTAMP as current_timestamp_with_tz FROM dual;`,
        },
        {
          command: 'Date Arithmetic',
          description: 'Perform calculations with dates',
          usage: 'Date addition/subtraction',
          example: `-- Date arithmetic
SELECT SYSDATE + 7 as next_week FROM dual;
SELECT SYSDATE - 30 as last_month FROM dual;
SELECT hire_date + 90 as review_date FROM employees;`,
        },
        {
          command: 'Date Functions',
          description: 'Extract parts of dates',
          usage: 'EXTRACT(), TO_CHAR() functions',
          example: `-- Date functions
SELECT EXTRACT(YEAR FROM SYSDATE) as current_year FROM dual;
SELECT EXTRACT(MONTH FROM hire_date) as hire_month FROM employees;
SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD') as formatted_date FROM dual;`,
        },
        {
          command: 'Date Formatting',
          description: 'Format dates as strings',
          usage: 'TO_CHAR() with format models',
          example: `-- Date formatting
SELECT TO_CHAR(SYSDATE, 'Month DD, YYYY') as formatted_date FROM dual;
SELECT TO_CHAR(hire_date, 'Day, Month DD, YYYY') as hire_formatted FROM employees;
SELECT TO_CHAR(SYSDATE, 'HH24:MI:SS') as current_time FROM dual;`,
        },
        {
          command: 'Date Conversion',
          description: 'Convert strings to dates',
          usage: 'TO_DATE() function',
          example: `-- String to date conversion
SELECT TO_DATE('2023-12-25', 'YYYY-MM-DD') as christmas FROM dual;
SELECT TO_DATE('25-Dec-2023', 'DD-Mon-YYYY') as formatted_date FROM dual;`,
        },
        {
          command: 'Date Difference',
          description: 'Calculate difference between dates',
          usage: 'MONTHS_BETWEEN() function',
          example: `-- Date difference
SELECT MONTHS_BETWEEN(SYSDATE, hire_date) as months_employed FROM employees;
SELECT TRUNC(MONTHS_BETWEEN(SYSDATE, hire_date) / 12) as years_employed FROM employees;`,
        },
        {
          command: 'Add Months',
          description: 'Add months to date',
          usage: 'ADD_MONTHS() function',
          example: `-- Add months
SELECT ADD_MONTHS(SYSDATE, 3) as three_months_later FROM dual;
SELECT ADD_MONTHS(hire_date, 6) as review_date FROM employees;`,
        },
        {
          command: 'Last Day of Month',
          description: 'Get last day of month',
          usage: 'LAST_DAY() function',
          example: `-- Last day of month
SELECT LAST_DAY(SYSDATE) as month_end FROM dual;
SELECT LAST_DAY(hire_date) as hire_month_end FROM employees;`,
        },
        {
          command: 'Next Day',
          description: 'Get next specified day',
          usage: 'NEXT_DAY() function',
          example: `-- Next day
SELECT NEXT_DAY(SYSDATE, 'FRIDAY') as next_friday FROM dual;
SELECT NEXT_DAY(hire_date, 'MONDAY') as next_monday FROM employees;`,
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
    employee_id,
    first_name,
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
    employee_id,
    first_name,
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
    employee_id,
    first_name,
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
    employee_id,
    hire_date,
    LAG(hire_date, 1) OVER (ORDER BY hire_date) as prev_hire_date,
    LEAD(hire_date, 1) OVER (ORDER BY hire_date) as next_hire_date,
    MONTHS_BETWEEN(hire_date, LAG(hire_date, 1) OVER (ORDER BY hire_date)) as months_diff
FROM employees;`,
        },
        {
          command: 'FIRST_VALUE and LAST_VALUE',
          description: 'Get first/last values in window',
          usage: 'FIRST_VALUE(), LAST_VALUE() functions',
          example: `-- FIRST_VALUE and LAST_VALUE
SELECT 
    department_id,
    employee_id,
    salary,
    FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) as highest_salary,
    LAST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC 
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as lowest_salary
FROM employees;`,
        },
        {
          command: 'Window Frame Clauses',
          description: 'Define window frame boundaries',
          usage: 'ROWS BETWEEN, RANGE BETWEEN',
          example: `-- Window frame clauses
SELECT 
    employee_id,
    hire_date,
    salary,
    SUM(salary) OVER (ORDER BY hire_date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_3month_total,
    AVG(salary) OVER (ORDER BY hire_date 
        RANGE BETWEEN INTERVAL '30' DAY PRECEDING AND CURRENT ROW) as moving_30day_avg
FROM employees;`,
        },
      ],
    },
    {
      title: 'Stored Procedures and Functions',
      commands: [
        {
          command: 'Create Procedure',
          description: 'Create stored procedure',
          usage: 'CREATE PROCEDURE statement',
          example: `-- Create basic procedure
CREATE OR REPLACE PROCEDURE get_employee_details(
    p_employee_id IN employees.employee_id%TYPE,
    p_first_name OUT employees.first_name%TYPE,
    p_salary OUT employees.salary%TYPE
) AS
BEGIN
    SELECT first_name, salary 
    INTO p_first_name, p_salary
    FROM employees 
    WHERE employee_id = p_employee_id;
END;
/`,
        },
        {
          command: 'Execute Procedure',
          description: 'Call stored procedure',
          usage: 'EXECUTE or CALL statement',
          example: `-- Execute procedure
DECLARE
    v_first_name employees.first_name%TYPE;
    v_salary employees.salary%TYPE;
BEGIN
    get_employee_details(100, v_first_name, v_salary);
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_first_name || ', Salary: ' || v_salary);
END;
/`,
        },
        {
          command: 'Procedure with Parameters',
          description: 'Procedure with different parameter types',
          usage: 'IN, OUT, INOUT parameters',
          example: `-- Procedure with multiple parameters
CREATE OR REPLACE PROCEDURE update_employee_salary(
    p_employee_id IN employees.employee_id%TYPE,
    p_increase_percent IN NUMBER,
    p_old_salary OUT NUMBER,
    p_new_salary OUT NUMBER
) AS
BEGIN
    SELECT salary INTO p_old_salary FROM employees WHERE employee_id = p_employee_id;
    p_new_salary := p_old_salary * (1 + p_increase_percent / 100);
    UPDATE employees SET salary = p_new_salary WHERE employee_id = p_employee_id;
END;
/`,
        },
        {
          command: 'Create Function',
          description: 'Create user-defined function',
          usage: 'CREATE FUNCTION statement',
          example: `-- Create function
CREATE OR REPLACE FUNCTION calculate_annual_salary(
    p_monthly_salary IN employees.salary%TYPE
) RETURN NUMBER AS
BEGIN
    RETURN p_monthly_salary * 12;
END;
/`,
        },
        {
          command: 'Use Function',
          description: 'Use user-defined function in SQL',
          usage: 'Function in SELECT statement',
          example: `-- Use function in SQL
SELECT employee_id, first_name, salary, 
       calculate_annual_salary(salary) as annual_salary
FROM employees
WHERE calculate_annual_salary(salary) > 60000;`,
        },
        {
          command: 'Control Structures',
          description: 'IF/ELSE, CASE in procedures',
          usage: 'Control flow statements',
          example: `-- Control structures in procedure
CREATE OR REPLACE PROCEDURE categorize_salary(
    p_salary IN employees.salary%TYPE,
    p_category OUT VARCHAR2(20)
) AS
BEGIN
    IF p_salary < 30000 THEN
        p_category := 'Low';
    ELSIF p_salary < 60000 THEN
        p_category := 'Medium';
    ELSIF p_salary < 100000 THEN
        p_category := 'High';
    ELSE
        p_category := 'Executive';
    END IF;
END;
/`,
        },
        {
          command: 'Loops in Procedures',
          description: 'LOOP, WHILE, FOR loops',
          usage: 'Looping structures',
          example: `-- FOR loop example
CREATE OR REPLACE PROCEDURE process_employees AS
BEGIN
    FOR emp_rec IN (SELECT employee_id, first_name, salary FROM employees) LOOP
        DBMS_OUTPUT.PUT_LINE('Processing: ' || emp_rec.first_name || ', Salary: ' || emp_rec.salary);
        
        -- Update salary based on conditions
        IF emp_rec.salary < 40000 THEN
            UPDATE employees SET salary = salary * 1.05 WHERE employee_id = emp_rec.employee_id;
        END IF;
    END LOOP;
    COMMIT;
END;
/`,
        },
        {
          command: 'Exception Handling',
          description: 'Handle exceptions in procedures',
          usage: 'EXCEPTION block',
          example: `-- Exception handling
CREATE OR REPLACE PROCEDURE safe_update_salary(
    p_employee_id IN employees.employee_id%TYPE,
    p_new_salary IN employees.salary%TYPE
) AS
    v_old_salary employees.salary%TYPE;
BEGIN
    SELECT salary INTO v_old_salary FROM employees WHERE employee_id = p_employee_id;
    
    IF p_new_salary < v_old_salary THEN
        RAISE_APPLICATION_ERROR(-20001, 'New salary cannot be less than current salary');
    END IF;
    
    UPDATE employees SET salary = p_new_salary WHERE employee_id = p_employee_id;
    
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/`,
        },
        {
          command: 'Drop Procedure and Function',
          description: 'Remove procedures and functions',
          usage: 'DROP PROCEDURE, DROP FUNCTION',
          example: `-- Drop procedure
DROP PROCEDURE get_employee_details;

-- Drop function
DROP FUNCTION calculate_annual_salary;`,
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
CREATE OR REPLACE TRIGGER trg_employee_audit
BEFORE INSERT OR UPDATE ON employees
FOR EACH ROW
BEGIN
    :new.created_by := USER;
    :new.created_date := SYSDATE;
    
    IF UPDATING THEN
        :new.modified_by := USER;
        :new.modified_date := SYSDATE;
    END IF;
END;
/`,
        },
        {
          command: 'BEFORE INSERT Trigger',
          description: 'Trigger before insert operation',
          usage: 'BEFORE INSERT trigger',
          example: `-- BEFORE INSERT trigger
CREATE OR REPLACE TRIGGER trg_employee_bi
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF :new.employee_id IS NULL THEN
        SELECT employees_seq.NEXTVAL INTO :new.employee_id FROM dual;
    END IF;
    
    :new.hire_date := NVL(:new.hire_date, SYSDATE);
END;
/`,
        },
        {
          command: 'AFTER UPDATE Trigger',
          description: 'Trigger after update operation',
          usage: 'AFTER UPDATE trigger',
          example: `-- AFTER UPDATE trigger
CREATE OR REPLACE TRIGGER trg_salary_audit
AFTER UPDATE OF salary ON employees
FOR EACH ROW
BEGIN
    INSERT INTO salary_audit (
        employee_id, old_salary, new_salary, changed_by, changed_date
    ) VALUES (
        :new.employee_id, :old.salary, :new.salary, USER, SYSDATE
    );
END;
/`,
        },
        {
          command: 'INSTEAD OF Trigger',
          description: 'Trigger for views',
          usage: 'INSTEAD OF trigger',
          example: `-- INSTEAD OF trigger for view
CREATE OR REPLACE TRIGGER trg_employee_view_iu
INSTEAD OF INSERT OR UPDATE ON employee_view
FOR EACH ROW
BEGIN
    IF INSERTING THEN
        INSERT INTO employees (employee_id, first_name, last_name, email)
        VALUES (:new.employee_id, :new.first_name, :new.last_name, :new.email);
    ELSIF UPDATING THEN
        UPDATE employees 
        SET first_name = :new.first_name, 
            last_name = :new.last_name, 
            email = :new.email
        WHERE employee_id = :old.employee_id;
    END IF;
END;
/`,
        },
        {
          command: 'Compound Trigger',
          description: 'Multiple timing points in one trigger',
          usage: 'COMPOUND TRIGGER',
          example: `-- Compound trigger
CREATE OR REPLACE TRIGGER trg_employee_compound
FOR INSERT OR UPDATE ON employees
COMPOUND TRIGGER
    -- Declaration section
    g_user VARCHAR2(30);
    
    BEFORE STATEMENT IS
    BEGIN
        g_user := USER;
    END BEFORE STATEMENT;
    
    BEFORE EACH ROW IS
    BEGIN
        IF INSERTING THEN
            :new.created_by := g_user;
        ELSIF UPDATING THEN
            :new.modified_by := g_user;
        END IF;
    END BEFORE EACH ROW;
    
    AFTER STATEMENT IS
    BEGIN
        DBMS_OUTPUT.PUT_LINE('Trigger completed by: ' || g_user);
    END AFTER STATEMENT;
END trg_employee_compound;
/`,
        },
        {
          command: 'Enable/Disable Trigger',
          description: 'Manage trigger status',
          usage: 'ALTER TRIGGER',
          example: `-- Disable trigger
ALTER TRIGGER trg_employee_audit DISABLE;

-- Enable trigger
ALTER TRIGGER trg_employee_audit ENABLE;

-- Disable all triggers on table
ALTER TABLE employees DISABLE ALL TRIGGERS;

-- Enable all triggers on table
ALTER TABLE employees ENABLE ALL TRIGGERS;`,
        },
        {
          command: 'Drop Trigger',
          description: 'Remove trigger',
          usage: 'DROP TRIGGER',
          example: `-- Drop trigger
DROP TRIGGER trg_employee_audit;`,
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
    e.employee_id,
    e.first_name,
    e.last_name,
    e.email,
    e.salary,
    d.department_name,
    j.job_title
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN jobs j ON e.job_id = j.job_id;`,
        },
        {
          command: 'View with Joins',
          description: 'Complex view with multiple joins',
          usage: 'View with complex query',
          example: `-- Complex view
CREATE OR REPLACE VIEW department_stats AS
SELECT 
    d.department_id,
    d.department_name,
    COUNT(e.employee_id) as employee_count,
    AVG(e.salary) as avg_salary,
    MAX(e.salary) as max_salary,
    MIN(e.hire_date) as earliest_hire
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_id, d.department_name;`,
        },
        {
          command: 'Updatable View',
          description: 'Create updatable view',
          usage: 'WITH CHECK OPTION',
          example: `-- Updatable view
CREATE OR REPLACE VIEW active_employees AS
SELECT employee_id, first_name, last_name, email, salary
FROM employees
WHERE status = 'ACTIVE'
WITH CHECK OPTION CONSTRAINT ck_active_employees;`,
        },
        {
          command: 'Materialized View',
          description: 'Create materialized view',
          usage: 'CREATE MATERIALIZED VIEW',
          example: `-- Create materialized view
CREATE MATERIALIZED VIEW mv_employee_summary
BUILD IMMEDIATE
REFRESH COMPLETE ON DEMAND
AS
SELECT 
    department_id,
    COUNT(*) as employee_count,
    AVG(salary) as avg_salary,
    SUM(salary) as total_salary
FROM employees
GROUP BY department_id;`,
        },
        {
          command: 'Refresh Materialized View',
          description: 'Refresh materialized view data',
          usage: 'DBMS_MVIEW.REFRESH',
          example: `-- Refresh materialized view
BEGIN
    DBMS_MVIEW.REFRESH('mv_employee_summary', 'C');
END;
/

-- Complete refresh
EXEC DBMS_MVIEW.REFRESH('mv_employee_summary', 'C');

-- Fast refresh (requires materialized view log)
EXEC DBMS_MVIEW.REFRESH('mv_employee_summary', 'F');`,
        },
        {
          command: 'Materialized View Log',
          description: 'Create log for fast refresh',
          usage: 'CREATE MATERIALIZED VIEW LOG',
          example: `-- Create materialized view log
CREATE MATERIALIZED VIEW LOG ON employees
WITH PRIMARY KEY, ROWID
INCLUDING NEW VALUES;

-- Create log for fast refresh
CREATE MATERIALIZED VIEW LOG ON departments
WITH PRIMARY KEY
INCLUDING NEW VALUES;`,
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
CREATE UNIQUE INDEX idx_employee_id ON employees(employee_id);

-- Function-based index
CREATE INDEX idx_employee_upper_name ON employees(UPPER(last_name));`,
        },
        {
          command: 'Bitmap Index',
          description: 'Create bitmap index',
          usage: 'BITMAP index type',
          example: `-- Bitmap index (for low cardinality columns)
CREATE BITMAP INDEX idx_employee_gender ON employees(gender);
CREATE BITMAP INDEX idx_employee_status ON employees(status);`,
        },
        {
          command: 'Function-Based Index',
          description: 'Index on function results',
          usage: 'Function-based index',
          example: `-- Function-based indexes
CREATE INDEX idx_employee_upper_email ON employees(UPPER(email));
CREATE INDEX idx_employee_salary_range ON employees(CASE WHEN salary > 50000 THEN 'HIGH' ELSE 'LOW' END);
CREATE INDEX idx_employee_name_length ON employees(LENGTH(last_name));`,
        },
        {
          command: 'Partitioned Index',
          description: 'Create partitioned index',
          usage: 'Partitioned index',
          example: `-- Local partitioned index
CREATE INDEX idx_sales_date ON sales(sale_date) LOCAL;

-- Global partitioned index
CREATE INDEX idx_sales_amount_global ON sales(amount) 
GLOBAL PARTITION BY RANGE (amount) (
    PARTITION p1 VALUES LESS THAN (1000),
    PARTITION p2 VALUES LESS THAN (5000),
    PARTITION p3 VALUES LESS THAN (MAXVALUE)
);`,
        },
        {
          command: 'Rebuild Index',
          description: 'Rebuild fragmented index',
          usage: 'ALTER INDEX REBUILD',
          example: `-- Rebuild index
ALTER INDEX idx_employee_email REBUILD;

-- Rebuild index online (doesn't lock table)
ALTER INDEX idx_employee_email REBUILD ONLINE;

-- Rebuild with tablespace
ALTER INDEX idx_employee_email REBUILD TABLESPACE users;`,
        },
        {
          command: 'Monitor Index Usage',
          description: 'Check index usage statistics',
          usage: 'V$OBJECT_USAGE',
          example: `-- Monitor index usage
-- Enable index monitoring
ALTER INDEX idx_employee_email MONITORING USAGE;

-- Check index usage
SELECT * FROM V$OBJECT_USAGE WHERE INDEX_NAME = 'IDX_EMPLOYEE_EMAIL';

-- Disable monitoring
ALTER INDEX idx_employee_email NOMONITORING;`,
        },
        {
          command: 'Explain Plan',
          description: 'Analyze query execution plan',
          usage: 'EXPLAIN PLAN FOR',
          example: `-- Explain plan
EXPLAIN PLAN FOR
SELECT * FROM employees WHERE department_id = 10 AND salary > 50000;

-- Display plan
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);

-- Display with format options
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE', NULL, 'ALL'));`,
        },
        {
          command: 'Gather Statistics',
          description: 'Collect table and index statistics',
          usage: 'DBMS_STATS package',
          example: `-- Gather statistics
BEGIN
    DBMS_STATS.GATHER_TABLE_STATS(
        ownname => 'HR',
        tabname => 'EMPLOYEES',
        cascade => TRUE,
        estimate_percent => DBMS_STATS.AUTO_SAMPLE_SIZE
    );
END;
/`,
        },
        {
          command: 'Drop Index',
          description: 'Remove index',
          usage: 'DROP INDEX',
          example: `-- Drop index
DROP INDEX idx_employee_email;`,
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
    sale_id NUMBER,
    sale_date DATE,
    amount NUMBER,
    region VARCHAR2(20)
) PARTITION BY RANGE (sale_date) (
    PARTITION sales_2022 VALUES LESS THAN (DATE '2023-01-01'),
    PARTITION sales_2023 VALUES LESS THAN (DATE '2024-01-01'),
    PARTITION sales_2024 VALUES LESS THAN (DATE '2025-01-01'),
    PARTITION sales_future VALUES LESS THAN (MAXVALUE)
);`,
        },
        {
          command: 'List Partitioning',
          description: 'Partition by value list',
          usage: 'PARTITION BY LIST',
          example: `-- List partitioning
CREATE TABLE employees (
    employee_id NUMBER,
    first_name VARCHAR2(50),
    department_id NUMBER,
    region VARCHAR2(20)
) PARTITION BY LIST (region) (
    PARTITION east VALUES ('EAST', 'NORTHEAST'),
    PARTITION west VALUES ('WEST', 'SOUTHWEST'),
    PARTITION central VALUES ('CENTRAL'),
    PARTITION other VALUES (DEFAULT)
);`,
        },
        {
          command: 'Hash Partitioning',
          description: 'Partition by hash function',
          usage: 'PARTITION BY HASH',
          example: `-- Hash partitioning
CREATE TABLE orders (
    order_id NUMBER,
    customer_id NUMBER,
    order_date DATE,
    total_amount NUMBER
) PARTITION BY HASH (order_id) PARTITIONS 8;

-- Hash partitioning with specific tablespaces
CREATE TABLE customers (
    customer_id NUMBER,
    name VARCHAR2(100),
    email VARCHAR2(100)
) PARTITION BY HASH (customer_id) 
PARTITIONS 4 
STORE IN (ts1, ts2, ts3, ts4);`,
        },
        {
          command: 'Composite Partitioning',
          description: 'Multiple partitioning levels',
          usage: 'SUBPARTITION BY',
          example: `-- Composite partitioning (Range-Hash)
CREATE TABLE sales_detail (
    sale_id NUMBER,
    sale_date DATE,
    product_id NUMBER,
    region VARCHAR2(20),
    amount NUMBER
) PARTITION BY RANGE (sale_date)
SUBPARTITION BY HASH (product_id) SUBPARTITIONS 4 (
    PARTITION sales_2022 VALUES LESS THAN (DATE '2023-01-01'),
    PARTITION sales_2023 VALUES LESS THAN (DATE '2024-01-01'),
    PARTITION sales_future VALUES LESS THAN (MAXVALUE)
);`,
        },
        {
          command: 'Interval Partitioning',
          description: 'Automatic partition creation',
          usage: 'INTERVAL partitioning',
          example: `-- Interval partitioning
CREATE TABLE sales_daily (
    sale_id NUMBER,
    sale_date DATE,
    amount NUMBER
) PARTITION BY RANGE (sale_date)
INTERVAL (NUMTODSINTERVAL(1, 'DAY')) (
    PARTITION p_first VALUES LESS THAN (DATE '2023-01-01')
);

-- Partitions created automatically as data is inserted`,
        },
        {
          command: 'Reference Partitioning',
          description: 'Partition child tables based on parent',
          usage: 'PARTITION BY REFERENCE',
          example: `-- Reference partitioning
CREATE TABLE orders (
    order_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    order_date DATE,
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
) PARTITION BY REFERENCE (fk_customer);

CREATE TABLE order_items (
    order_item_id NUMBER PRIMARY KEY,
    order_id NUMBER,
    product_id NUMBER,
    quantity NUMBER,
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders(order_id)
) PARTITION BY REFERENCE (fk_order);`,
        },
        {
          command: 'Manage Partitions',
          description: 'Add, drop, merge partitions',
          usage: 'ALTER TABLE partition operations',
          example: `-- Add partition
ALTER TABLE sales ADD PARTITION sales_2025 VALUES LESS THAN (DATE '2026-01-01');

-- Drop partition
ALTER TABLE sales DROP PARTITION sales_2022;

-- Merge partitions
ALTER TABLE sales MERGE PARTITIONS sales_2023, sales_2024 INTO PARTITION sales_2023_2024;

-- Split partition
ALTER TABLE sales SPLIT PARTITION sales_future INTO (
    PARTITION sales_2025 VALUES LESS THAN (DATE '2026-01-01'),
    PARTITION sales_future VALUES LESS THAN (MAXVALUE)
);`,
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
CREATE USER app_user IDENTIFIED BY "StrongPassword123"
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA 100M ON users
PASSWORD EXPIRE;`,
        },
        {
          command: 'Grant Privileges',
          description: 'Grant user privileges',
          usage: 'GRANT statement',
          example: `-- Grant system privileges
GRANT CREATE SESSION, CREATE TABLE, CREATE VIEW TO app_user;

-- Grant object privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO app_user;
GRANT ALL PRIVILEGES ON employees TO manager_user;

-- Grant with grant option
GRANT SELECT ON employees TO app_user WITH GRANT OPTION;`,
        },
        {
          command: 'Create Role',
          description: 'Create and manage roles',
          usage: 'CREATE ROLE, GRANT ROLE',
          example: `-- Create role
CREATE ROLE app_developer;

-- Grant privileges to role
GRANT CREATE SESSION, CREATE TABLE, CREATE VIEW TO app_developer;
GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO app_developer;

-- Grant role to user
GRANT app_developer TO john_doe;

-- Set default role
ALTER USER john_doe DEFAULT ROLE app_developer;`,
        },
        {
          command: 'Revoke Privileges',
          description: 'Revoke user privileges',
          usage: 'REVOKE statement',
          example: `-- Revoke privileges
REVOKE DELETE ON employees FROM app_user;
REVOKE app_developer FROM john_doe;
REVOKE ALL PRIVILEGES ON employees FROM app_user;`,
        },
        {
          command: 'Profile Management',
          description: 'Manage user resource limits',
          usage: 'CREATE PROFILE',
          example: `-- Create profile
CREATE PROFILE app_profile LIMIT
    SESSIONS_PER_USER 5
    CPU_PER_SESSION 10000
    CPU_PER_CALL 1000
    CONNECT_TIME 600
    IDLE_TIME 30
    LOGICAL_READS_PER_SESSION DEFAULT
    LOGICAL_READS_PER_CALL 1000
    PRIVATE_SGA 15K
    COMPOSITE_LIMIT 1000000
    FAILED_LOGIN_ATTEMPTS 3
    PASSWORD_LIFE_TIME 90
    PASSWORD_REUSE_TIME 180
    PASSWORD_LOCK_TIME 1
    PASSWORD_GRACE_TIME 5
    PASSWORD_VERIFY_FUNCTION verify_function;

-- Assign profile to user
ALTER USER app_user PROFILE app_profile;`,
        },
        {
          command: 'Virtual Private Database',
          description: 'Implement row-level security',
          usage: 'DBMS_RLS package',
          example: `-- VPD policy
BEGIN
    DBMS_RLS.ADD_POLICY(
        object_schema => 'HR',
        object_name => 'EMPLOYEES',
        policy_name => 'dept_policy',
        function_schema => 'HR',
        policy_function => 'dept_policy_fn',
        statement_types => 'SELECT, INSERT, UPDATE, DELETE',
        update_check => TRUE
    );
END;
/

-- Policy function
CREATE OR REPLACE FUNCTION dept_policy_fn(
    schema_name IN VARCHAR2,
    table_name IN VARCHAR2
) RETURN VARCHAR2 AS
BEGIN
    RETURN 'department_id = ' || TO_CHAR(SYS_CONTEXT('USERENV', 'DEPARTMENT_ID'));
END;
/`,
        },
        {
          command: 'Data Encryption',
          description: 'Encrypt sensitive data',
          usage: 'DBMS_CRYPTO package',
          example: `-- Encrypt data
DECLARE
    l_raw RAW(128);
    l_key RAW(128) := UTL_RAW.CAST_TO_RAW('MySecretKey123');
    l_encrypted RAW(128);
    l_decrypted VARCHAR2(100);
BEGIN
    -- Convert to RAW
    l_raw := UTL_RAW.CAST_TO_RAW('Sensitive Data');
    
    -- Encrypt
    l_encrypted := DBMS_CRYPTO.ENCRYPT(
        src => l_raw,
        typ => DBMS_CRYPTO.ENCRYPT_AES256_CBC + DBMS_CRYPTO.CHAIN_CBC,
        key => l_key
    );
    
    -- Decrypt
    l_raw := DBMS_CRYPTO.DECRYPT(
        src => l_encrypted,
        typ => DBMS_CRYPTO.ENCRYPT_AES256_CBC + DBMS_CRYPTO.CHAIN_CBC,
        key => l_key
    );
    
    l_decrypted := UTL_RAW.CAST_TO_VARCHAR2(l_raw);
    DBMS_OUTPUT.PUT_LINE('Decrypted: ' || l_decrypted);
END;
/`,
        },
        {
          command: 'Audit Configuration',
          description: 'Set up database auditing',
          usage: 'AUDIT statement',
          example: `-- Enable auditing
AUDIT SELECT ON employees BY ACCESS;
AUDIT INSERT, UPDATE, DELETE ON employees BY ACCESS;

-- Audit specific operations
AUDIT ALTER ANY TABLE BY ACCESS;
AUDIT CREATE ANY TABLE BY SESSION;

-- View audit trail
SELECT * FROM DBA_AUDIT_TRAAIL WHERE OBJ_NAME = 'EMPLOYEES';

-- Fine-grained auditing
BEGIN
    DBMS_FGA.ADD_POLICY(
        object_schema => 'HR',
        object_name => 'EMPLOYEES',
        policy_name => 'salary_audit',
        audit_condition => 'salary > 100000',
        audit_column => 'salary',
        handler_schema => NULL,
        handler_module => NULL,
        enable => TRUE,
        statement_types => 'SELECT, UPDATE'
    );
END;
/`,
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      commands: [
        {
          command: 'RMAN Backup',
          description: 'Recovery Manager backup',
          usage: 'RMAN commands',
          example: `-- Connect to RMAN
rman target /

-- Full backup
BACKUP DATABASE PLUS ARCHIVELOG;

-- Incremental backup
BACKUP INCREMENTAL LEVEL 0 DATABASE;
BACKUP INCREMENTAL LEVEL 1 DATABASE;

-- Backup specific tablespaces
BACKUP TABLESPACE users, example;

-- Backup with compression
BACKUP AS COMPRESSED BACKUPSET DATABASE;`,
        },
        {
          command: 'RMAN Restore',
          description: 'Restore database from backup',
          usage: 'RMAN restore commands',
          example: `-- Restore database
RESTORE DATABASE;
RECOVER DATABASE;

-- Restore tablespace
RESTORE TABLESPACE users;
RECOVER TABLESPACE users;

-- Point-in-time recovery
RUN {
    SET UNTIL TIME "TO_DATE('2023-12-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS')";
    RESTORE DATABASE;
    RECOVER DATABASE;
    ALTER DATABASE OPEN RESETLOGS;
}`,
        },
        {
          command: 'Export/Import Data Pump',
          description: 'Data Pump export and import',
          usage: 'EXPDP, IMPDP utilities',
          example: `-- Export full database
expdp system/password DIRECTORY=dp_dir DUMPFILE=full_export.dmp FULL=Y

-- Export specific schema
expdp system/password DIRECTORY=dp_dir DUMPFILE=hr_export.dmp SCHEMAS=HR

-- Export tables
expdp system/password DIRECTORY=dp_dir DUMPFILE=tables_export.dmp TABLES=employees,departments

-- Import
impdp system/password DIRECTORY=dp_dir DUMPFILE=hr_export.dmp SCHEMAS=HR
impdp system/password DIRECTORY=dp_dir DUMPFILE=tables_export.dmp TABLES=employees TABLE_EXISTS_ACTION=REPLACE`,
        },
        {
          command: 'Flashback Technology',
          description: 'Flashback database features',
          usage: 'FLASHBACK commands',
          example: `-- Flashback query
SELECT * FROM employees AS OF TIMESTAMP (SYSTIMESTAMP - INTERVAL '1' HOUR);

-- Flashback table
FLASHBACK TABLE employees TO TIMESTAMP (SYSTIMESTAMP - INTERVAL '1' DAY);

-- Flashback drop
FLASHBACK TABLE employees TO BEFORE DROP;

-- Enable flashback database
ALTER DATABASE FLASHBACK ON;
FLASHBACK DATABASE TO TIMESTAMP (SYSTIMESTAMP - INTERVAL '1' HOUR);`,
        },
        {
          command: 'Point-in-Time Recovery',
          description: 'Recover to specific point in time',
          usage: 'Incomplete recovery',
          example: `-- Point-in-time recovery using RMAN
RUN {
    SET UNTIL TIME "TO_DATE('2023-12-25 10:30:00', 'YYYY-MM-DD HH24:MI:SS')";
    RESTORE DATABASE;
    RECOVER DATABASE;
    ALTER DATABASE OPEN RESETLOGS;
}

-- Using archive logs
RECOVER DATABASE UNTIL TIME '2023-12-25 10:30:00';`,
        },
      ],
    },
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'SQL Tuning Advisor',
          description: 'Analyze and tune SQL statements',
          usage: 'DBMS_SQLTUNE package',
          example: `-- Create tuning task
DECLARE
    l_task_name VARCHAR2(30);
BEGIN
    l_task_name := DBMS_SQLTUNE.CREATE_TUNING_TASK(
        sql_text => 'SELECT * FROM employees WHERE department_id = 10',
        user_name => 'HR',
        scope => DBMS_SQLTUNE.SCOPE_COMPREHENSIVE,
        time_limit => 60,
        task_name => 'emp_tuning_task',
        description => 'Tune employees query'
    );
    
    DBMS_SQLTUNE.EXECUTE_TUNING_TASK(task_name => l_task_name);
END;
/

-- View tuning recommendations
SELECT DBMS_SQLTUNE.REPORT_TUNING_TASK('emp_tuning_task') FROM DUAL;`,
        },
        {
          command: 'SQL Access Advisor',
          description: 'Recommend indexes and materialized views',
          usage: 'DBMS_ADVISOR package',
          example: `-- Create access advisor task
DECLARE
    l_task_id NUMBER;
BEGIN
    l_task_id := DBMS_ADVISOR.CREATE_TASK(
        advisor_name => 'SQL ACCESS ADVISOR',
        task_name => 'emp_access_task'
    );
    
    DBMS_ADVISOR.SET_TASK_PARAMETER(
        task_name => 'emp_access_task',
        parameter => 'DURATION',
        value => 60
    );
END;
/`,
        },
        {
          command: 'Automatic Workload Repository',
          description: 'AWR performance data',
          usage: 'DBMS_WORKLOAD_REPOSITORY',
          example: `-- Generate AWR report
SELECT * FROM TABLE(
    DBMS_WORKLOAD_REPOSITORY.AWR_REPORT_HTML(
        l_dbid => 123456789,
        l_inst_num => 1,
        l_bid => 1000,
        l_eid => 1100
    )
);

-- Create AWR snapshot
EXEC DBMS_WORKLOAD_REPOSITORY.CREATE_SNAPSHOT;

-- View AWR data
SELECT * FROM DBA_HIST_SYSMETRIC WHERE metric_name = 'Database CPU Time Ratio';`,
        },
        {
          command: 'Memory Management',
          description: 'Configure SGA and PGA',
          usage: 'Memory parameters',
          example: `-- Memory management parameters
ALTER SYSTEM SET MEMORY_TARGET = 2G SCOPE = SPFILE;
ALTER SYSTEM SET SGA_TARGET = 1.5G SCOPE = SPFILE;
ALTER SYSTEM SET PGA_AGGREGATE_TARGET = 512M SCOPE = SPFILE;

-- Automatic Memory Management
ALTER SYSTEM SET MEMORY_TARGET = 0 SCOPE = SPFILE;
ALTER SYSTEM SET SGA_TARGET = 0 SCOPE = SPFILE;
ALTER SYSTEM SET PGA_AGGREGATE_TARGET = 0 SCOPE = SPFILE;

-- Manual memory management
ALTER SYSTEM SET SHARED_POOL_SIZE = 256M SCOPE = SPFILE;
ALTER SYSTEM SET BUFFER_CACHE_SIZE = 512M SCOPE = SPFILE;
ALTER SYSTEM SET JAVA_POOL_SIZE = 64M SCOPE = SPFILE;`,
        },
        {
          command: 'Table Partitioning Performance',
          description: 'Optimize partitioned tables',
          usage: 'Partition pruning',
          example: `-- Partition pruning example
EXPLAIN PLAN FOR
SELECT * FROM sales WHERE sale_date BETWEEN DATE '2023-01-01' AND DATE '2023-12-31';

-- Check partition pruning
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);

-- Local index maintenance
ALTER INDEX idx_sales_date REBUILD PARTITION sales_2023;

-- Global index maintenance
ALTER INDEX idx_sales_amount_global REBUILD;`,
        },
      ],
    },
    {
      title: 'Oracle Cloud and Modern Features',
      commands: [
        {
          command: 'Oracle Cloud Infrastructure',
          description: 'Connect to Oracle Cloud Database',
          usage: 'Cloud database connection',
          example: `-- Connect to Autonomous Database
sqlplus admin/password@dbname_high
sqlplus admin/password@dbname_medium
sqlplus admin/password@dbname_low

-- Connection string for ATP
(DESCRIPTION=
    (ADDRESS=(PROTOCOL=tcps)(PORT=1522)(HOST=adb.us-phoenix-1.oraclecloud.com))
    (CONNECT_DATA=
        (SERVICE_NAME=dbname_high.adb.oraclecloud.com)
    )
    (SECURITY=(SSL_SERVER_CERT_DN="CN=adb.us-phoenix-1.oraclecloud.com,OU=Oracle ADB,O=Oracle Corporation,L=Redwood City,ST=California,C=US"))
)`,
        },
        {
          command: 'JSON Support',
          description: 'Work with JSON data',
          usage: 'JSON functions',
          example: `-- JSON data type
CREATE TABLE products (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    attributes JSON
);

-- Insert JSON data
INSERT INTO products VALUES (1, 'Laptop', 
    JSON('{"color": "black", "ram": "16GB", "storage": "512GB"}'));

-- Query JSON data
SELECT name, 
       attributes.color,
       attributes.ram
FROM products;

-- JSON functions
SELECT JSON_VALUE(attributes, '$.color') as color,
       JSON_EXISTS(attributes, '$.storage') as has_storage
FROM products;`,
        },
        {
          command: 'Graph Database',
          description: 'Property graph features',
          usage: 'Oracle Graph',
          example: `-- Create property graph
BEGIN
    OPG_APIS.CREATE_PROPERTY_GRAPH(
        graph_name => 'social_network',
        table_name => 'social_vertices',
        key_column => 'id',
        vertex_label_column => 'type'
    );
END;
/

-- Graph queries
SELECT * FROM TABLE(
    OPG_APIS.MATCH(
        'social_network',
        'MATCH (a:Person)-[e:KNOWS]->(b:Person) RETURN a.name, b.name'
    )
);`,
        },
        {
          command: 'Machine Learning',
          description: 'Oracle Machine Learning',
          usage: 'DBMS_DATA_MINING',
          example: `-- Create mining model
BEGIN
    DBMS_DATA_MINING.CREATE_MODEL(
        model_name => 'churn_model',
        mining_function => DBMS_DATA_MINING.CLASSIFICATION,
        data_table_name => 'customer_data',
        case_id_column_name => 'customer_id',
        target_column_name => 'churn_flag'
    );
END;
/

-- Apply model
SELECT * FROM TABLE(
    DBMS_DATA_MINING.PREDICTION(
        'churn_model',
        'PREDICT',
        'SELECT * FROM new_customers'
    )
);`,
        },
        {
          command: 'Blockchain Tables',
          description: 'Immutable blockchain tables',
          usage: 'Blockchain table features',
          example: `-- Create blockchain table
CREATE BLOCKCHAIN TABLE audit_log (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    transaction_id VARCHAR2(100),
    operation VARCHAR2(50),
    timestamp TIMESTAMP DEFAULT SYSDATE,
    user_name VARCHAR2(100)
) NO DROP UNTIL 365 DAYS NO DELETE UNTIL 365 DAYS;

-- Insert into blockchain table
INSERT INTO audit_log (transaction_id, operation, user_name)
VALUES ('TXN001', 'INSERT', 'john_doe');

-- Blockchain table properties
SELECT * FROM user_blockchain_tables;
SELECT * FROM user_blockchain_table_columns WHERE table_name = 'AUDIT_LOG';`,
        },
      ],
    },
    {
      title: 'Oracle Tools and Utilities',
      commands: [
        {
          command: 'SQL*Plus Commands',
          description: 'SQL*Plus utility commands',
          usage: 'SQL*Plus commands',
          example: `-- SQL*Plus commands
SET PAGESIZE 50
SET LINESIZE 120
SET SERVEROUTPUT ON
SET TIMING ON
SET AUTOTRACE ON EXPLAIN

-- Save output to file
SPOOL output.txt
SELECT * FROM employees;
SPOOL OFF

-- Execute script
@script.sql
START script.sql

-- Describe objects
DESCRIBE employees
DESC employees`,
        },
        {
          command: 'SQL Developer',
          description: 'Oracle SQL Developer features',
          usage: 'SQL Developer IDE',
          example: `-- SQL Developer features
-- Connection Manager: Manage database connections
-- Worksheet: Execute SQL and PL/SQL
-- Reports: Create and run reports
-- Debugger: Debug PL/SQL code
-- Version Control: Git integration
-- Data Modeler: Design database schemas
-- SQL Tuning: Explain plans and advisors`,
        },
        {
          command: 'Data Dictionary Views',
          description: 'Query database metadata',
          usage: 'Data dictionary views',
          example: `-- User information
SELECT * FROM USER_USERS;
SELECT * FROM ALL_USERS;
SELECT * FROM DBA_USERS;

-- Table information
SELECT * FROM USER_TABLES;
SELECT * FROM USER_TAB_COLUMNS WHERE table_name = 'EMPLOYEES';

-- Index information
SELECT * FROM USER_INDEXES;
SELECT * FROM USER_IND_COLUMNS WHERE index_name = 'IDX_EMPLOYEE_EMAIL';

-- Constraint information
SELECT * FROM USER_CONSTRAINTS WHERE table_name = 'EMPLOYEES';
SELECT * FROM USER_CONS_COLUMNS WHERE table_name = 'EMPLOYEES';`,
        },
        {
          command: 'Dynamic Performance Views',
          description: 'Monitor database performance',
          usage: 'V$ views',
          example: `-- Performance monitoring
SELECT * FROM V$SESSION WHERE username = 'HR';
SELECT * FROM V$PROCESS WHERE addr = (SELECT paddr FROM V$SESSION WHERE sid = 123);
SELECT * FROM V$SQL WHERE sql_text LIKE '%employees%';
SELECT * FROM V$SGAINFO;
SELECT * FROM V$PARAMETER WHERE name LIKE '%memory%';
SELECT * FROM V$LOCK WHERE request > 0;`,
        },
        {
          command: 'DBMS Utilities',
          description: 'Useful DBMS packages',
          usage: 'DBMS packages',
          example: `-- DBMS_OUTPUT for debugging
SET SERVEROUTPUT ON;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello World');
    DBMS_OUTPUT.PUT_LINE('Current time: ' || TO_CHAR(SYSDATE, 'HH24:MI:SS'));
END;
/

-- DBMS_RANDOM for random numbers
SELECT DBMS_RANDOM.VALUE FROM DUAL;
SELECT DBMS_RANDOM.STRING('U', 10) FROM DUAL;

-- DBMS_LOCK for locking
EXEC DBMS_LOCK.SLEEP(5);

-- DBMS_JOB for scheduling
DECLARE
    v_job NUMBER;
BEGIN
    DBMS_JOB.SUBMIT(v_job, 'BEGIN my_procedure; END;', SYSDATE, 'SYSDATE + 1');
    COMMIT;
END;
/`,
        },
      ],
    },
  ],
};
