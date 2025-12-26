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
          example: `======== Database Architecture ========
Database Instance (SGA + Background Processes)
Database Files (Datafiles, Control Files, Redo Logs)
Memory Structures (SGA, PGA)
Background Processes (SMON, PMON, DBWn, LGWR, etc.)

======== Oracle Editions ========
Oracle Database XE (Express Edition) - Free
Oracle Database Standard Edition 2
Oracle Database Enterprise Edition
Oracle Database Cloud Services

======== Key Features ========
ACID Compliance
Multi-Model Database (Relational, JSON, XML, Spatial, Graph)
High Availability (RAC, Data Guard)
Security (Encryption, Auditing, VPD)
Performance (In-Memory, Partitioning)`,
        },
        {
          command: 'Installing Oracle Database',
          description: 'Install Oracle Database XE and setup',
          usage: 'Download and install Oracle Database XE',
          example: `======== Linux Installation ========
sudo yum install -y oracle-database-preinstall-21c.x86_64
sudo rpm -ivh oracle-database-xe-21c-1.0-1.ol8.x86_64.rpm

======== Configure Database ========
sudo /etc/init.d/oracle-xe-21c configure

======== Environment Variables ========
export ORACLE_SID=XE
export ORACLE_BASE=/opt/oracle
export ORACLE_HOME=/opt/oracle/product/21c/dbhomeXE
export PATH=$ORACLE_HOME/bin:$PATH

======== Docker Installation ========
docker run -d \\
  --name oracle-xe \\
  -p 1521:1521 \\
  -e ORACLE_PWD=YourPassword123 \\
  container-registry.oracle.com/database/express:21.3.0-xe

======== Windows Installation ========
Download and run setup.exe
Follow installation wizard
Set ORACLE_SID, ORACLE_HOME environment variables`,
        },
        {
          command: 'Database Connection',
          description: 'Connect to Oracle Database',
          usage: 'SQL*Plus and connection strings',
          example: `======== SQL*Plus Connections ========
sqlplus sys/YourPassword@localhost:1521/XE as sysdba
sqlplus hr/YourPassword@localhost:1521/XE

======== Connection String Formats ========
Easy Connect: username/password@hostname:port/service_name
TNSNAMES.ORA: username/password@TNS_ALIAS

======== JDBC Connection ========
jdbc:oracle:thin:@hostname:port:service_name
jdbc:oracle:thin:@TNS_ALIAS

======== Python Connection ========
import cx_Oracle
connection = cx_Oracle.connect(
    user="hr",
    password="password",
    dsn="localhost:1521/XE"
)

======== Node.js Connection ========
const oracledb = require('oracledb');
const connection = await oracledb.getConnection({
    user: "hr",
    password: "password",
    connectString: "localhost:1521/XE"
});`,
        },
        {
          command: 'Basic SQL Commands',
          description: 'Fundamental SQL operations',
          usage: 'SELECT, INSERT, UPDATE, DELETE',
          example: `======== Basic SELECT ========
SELECT * FROM employees;
SELECT first_name, last_name, salary FROM employees WHERE department_id = 10;

======== Basic INSERT ========
INSERT INTO employees (employee_id, first_name, last_name, email, hire_date, job_id)
VALUES (1001, 'John', 'Doe', 'jdoe@company.com', SYSDATE, 'IT_PROG');

======== Basic UPDATE ========
UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10;

======== Basic DELETE ========
DELETE FROM employees WHERE employee_id = 1001;

======== Create Table ========
CREATE TABLE test_table (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    created_date DATE DEFAULT SYSDATE
);

======== Drop Table ========
DROP TABLE test_table;`,
        },
      ],
    },
    {
      title: 'Basic Data Types and Tables',
      commands: [
        {
          command: 'Oracle Data Types',
          description: 'Common Oracle data types',
          usage: 'NUMBER, VARCHAR2, DATE, CLOB, etc.',
          example: `======== Numeric Types ========
NUMBER(10, 2)    -- Precision 10, scale 2
NUMBER(5)        -- Integer with 5 digits
INTEGER          -- 32-bit integer
BINARY_FLOAT     -- 32-bit floating point
BINARY_DOUBLE    -- 64-bit floating point

======== Character Types ========
VARCHAR2(100)    -- Variable length string
CHAR(50)         -- Fixed length string
NVARCHAR2(100)   -- Unicode string
NCHAR(50)        -- Unicode fixed string

======== Date/Time Types ========
DATE             -- Date and time
TIMESTAMP        -- Date, time, fractional seconds
TIMESTAMP WITH TIME ZONE
TIMESTAMP WITH LOCAL TIME ZONE
INTERVAL YEAR TO MONTH
INTERVAL DAY TO SECOND

======== Large Object Types ========
CLOB             -- Character large object
BLOB             -- Binary large object
NCLOB            -- Unicode character large object
BFILE            -- External binary file

======== Rowid and Unique Identifier ========
ROWID            -- Row address
RAW(16)          -- Raw data (for GUIDs)

======== Example Usage ========
CREATE TABLE employee_types (
    emp_id NUMBER(6) PRIMARY KEY,
    emp_name VARCHAR2(100) NOT NULL,
    salary NUMBER(10,2),
    hire_date DATE DEFAULT SYSDATE,
    bio CLOB,
    photo BLOB,
    created_at TIMESTAMP DEFAULT SYSTIMESTAMP
);`,
        },
        {
          command: 'Table Operations',
          description: 'Create, modify, and manage tables',
          usage: 'CREATE TABLE, ALTER TABLE, DROP TABLE',
          example: `======== Create Table with Constraints ========
CREATE TABLE employees (
    employee_id NUMBER(6) PRIMARY KEY,
    first_name VARCHAR2(20) NOT NULL,
    last_name VARCHAR2(25) NOT NULL,
    email VARCHAR2(25) UNIQUE NOT NULL,
    phone_number VARCHAR2(20),
    hire_date DATE DEFAULT SYSDATE,
    job_id VARCHAR2(10) NOT NULL,
    salary NUMBER(8,2) CHECK (salary > 0),
    commission_pct NUMBER(2,2) CHECK (commission_pct BETWEEN 0 AND 1),
    manager_id NUMBER(6) REFERENCES employees(employee_id),
    department_id NUMBER(4) REFERENCES departments(department_id)
);

======== Modify Table Structure ========
ALTER TABLE employees ADD (bonus NUMBER(8,2));
ALTER TABLE employees MODIFY (salary NUMBER(10,2));
ALTER TABLE employees DROP COLUMN bonus;
ALTER TABLE employees RENAME COLUMN bonus TO incentive;

======== Constraint Management ========
ALTER TABLE employees ADD CONSTRAINT emp_salary_chk CHECK (salary > 1000);
ALTER TABLE employees DROP CONSTRAINT emp_salary_chk;
ALTER TABLE employees DISABLE CONSTRAINT emp_salary_chk;
ALTER TABLE employees ENABLE CONSTRAINT emp_salary_chk;

======== Table Operations ========
TRUNCATE TABLE employees;  -- Remove all data, keep structure
DROP TABLE employees PURGE; -- Skip recycle bin`,
        },
        {
          command: 'Basic Queries',
          description: 'Fundamental SELECT statements',
          usage: 'SELECT with WHERE, ORDER BY, GROUP BY',
          example: `======== Basic SELECT ========
SELECT employee_id, first_name, last_name FROM employees;

======== WHERE Clause ========
SELECT * FROM employees WHERE salary > 5000;
SELECT * FROM employees WHERE department_id = 10 AND salary > 3000;
SELECT * FROM employees WHERE last_name LIKE 'S%';
SELECT * FROM employees WHERE hire_date BETWEEN '01-JAN-2020' AND '31-DEC-2020';
SELECT * FROM employees WHERE department_id IN (10, 20, 30);

======== ORDER BY ========
SELECT * FROM employees ORDER BY last_name ASC;
SELECT * FROM employees ORDER BY salary DESC, last_name ASC;

======== DISTINCT ========
SELECT DISTINCT department_id FROM employees;
SELECT DISTINCT job_id, department_id FROM employees;

======== Pagination (Oracle 12c+) ========
SELECT * FROM employees FETCH FIRST 10 ROWS ONLY;
SELECT * FROM employees OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;

======== Aggregate Functions ========
SELECT COUNT(*) FROM employees;
SELECT COUNT(DISTINCT department_id) FROM employees;
SELECT AVG(salary), MAX(salary), MIN(salary), SUM(salary) FROM employees;
SELECT department_id, COUNT(*), AVG(salary) FROM employees GROUP BY department_id;
SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 5;

======== NULL Handling ========
SELECT first_name, commission_pct FROM employees WHERE commission_pct IS NULL;
SELECT first_name, NVL(commission_pct, 0) FROM employees;
SELECT first_name, COALESCE(commission_pct, 0, salary) FROM employees;
SELECT first_name, NULLIF(salary, 0) FROM employees;`,
        },
      ],
    },
    {
      title: 'Basic Functions and Operators',
      commands: [
        {
          command: 'String Functions',
          description: 'Common string manipulation functions',
          usage: 'UPPER, LOWER, SUBSTR, INSTR, etc.',
          example: `======== Case Conversion ========
SELECT UPPER('hello') FROM dual;           -- HELLO
SELECT LOWER('HELLO') FROM dual;           -- hello
SELECT INITCAP('hello world') FROM dual;   -- Hello World

======== String Length ========
SELECT LENGTH('Hello World') FROM dual;    -- 11

======== Substring ========
SELECT SUBSTR('Hello World', 1, 5) FROM dual; -- Hello
SELECT SUBSTR('Hello World', -5) FROM dual;   -- World

======== String Position ========
SELECT INSTR('Hello World', 'World') FROM dual; -- 7

======== String Replacement ========
SELECT REPLACE('Hello World', 'World', 'Oracle') FROM dual; -- Hello Oracle

======== Padding ========
SELECT LPAD('Oracle', 10, '*') FROM dual;   -- ****Oracle
SELECT RPAD('Oracle', 10, '*') FROM dual;   -- Oracle****

======== Trimming ========
SELECT TRIM('   Hello   ') FROM dual;       -- Hello
SELECT LTRIM('***Hello', '*') FROM dual;    -- Hello
SELECT RTRIM('Hello***', '*') FROM dual;    -- Hello

======== Concatenation ========
SELECT 'Hello' || ' ' || 'World' FROM dual; -- Hello World
SELECT CONCAT('Hello', 'World') FROM dual;  -- HelloWorld

======== Reverse and Translate ========
SELECT REVERSE('Hello') FROM dual;          -- olleH
SELECT TRANSLATE('Hello', 'eo', '12') FROM dual; -- H2ll1`,
        },
        {
          command: 'Numeric Functions',
          description: 'Mathematical and numeric functions',
          usage: 'ROUND, TRUNC, MOD, POWER, etc.',
          example: `======== Rounding ========
SELECT ROUND(123.456) FROM dual;           -- 123
SELECT ROUND(123.456, 2) FROM dual;        -- 123.46
SELECT TRUNC(123.456) FROM dual;           -- 123
SELECT TRUNC(123.456, 2) FROM dual;        -- 123.45

======== Modulus ========
SELECT MOD(10, 3) FROM dual;               -- 1

======== Power and Square Root ========
SELECT POWER(2, 3) FROM dual;              -- 8
SELECT SQRT(16) FROM dual;                 -- 4

======== Absolute Value and Sign ========
SELECT ABS(-123) FROM dual;                -- 123
SELECT SIGN(-123) FROM dual;               -- -1
SELECT SIGN(123) FROM dual;                -- 1
SELECT SIGN(0) FROM dual;                  -- 0

======== Ceiling and Floor ========
SELECT CEIL(12.3) FROM dual;               -- 13
SELECT FLOOR(12.7) FROM dual;              -- 12

======== Trigonometric Functions ========
SELECT SIN(0) FROM dual;                   -- 0
SELECT COS(0) FROM dual;                   -- 1
SELECT TAN(0) FROM dual;                   -- 0

======== Logarithmic Functions ========
SELECT LOG(10, 100) FROM dual;             -- 2
SELECT LN(2.71828) FROM dual;              -- 1

======== Conversion Functions ========
SELECT TO_NUMBER('123') FROM dual;         -- 123
SELECT TO_CHAR(123.45, '999.99') FROM dual; -- 123.45

======== Greatest and Least ========
SELECT GREATEST(10, 20, 5) FROM dual;      -- 20
SELECT LEAST(10, 20, 5) FROM dual;         -- 5`,
        },
        {
          command: 'Date Functions',
          description: 'Date and time manipulation functions',
          usage: 'SYSDATE, ADD_MONTHS, MONTHS_BETWEEN, etc.',
          example: `======== Current Date/Time ========
SELECT SYSDATE FROM dual;                  -- Current date and time
SELECT CURRENT_DATE FROM dual;             -- Current date
SELECT SYSTIMESTAMP FROM dual;             -- Current timestamp

======== Date Arithmetic ========
SELECT SYSDATE + 7 FROM dual;              -- Add 7 days
SELECT SYSDATE - 1 FROM dual;              -- Subtract 1 day

======== Add/Subtract Months ========
SELECT ADD_MONTHS(SYSDATE, 3) FROM dual;   -- Add 3 months
SELECT ADD_MONTHS(SYSDATE, -6) FROM dual;  -- Subtract 6 months

======== Months Between ========
SELECT MONTHS_BETWEEN('01-JAN-2021', '01-JUL-2020') FROM dual; -- 6

======== Next Day and Last Day ========
SELECT NEXT_DAY(SYSDATE, 'MONDAY') FROM dual; -- Next Monday
SELECT LAST_DAY(SYSDATE) FROM dual;        -- Last day of current month

======== Date Parts ========
SELECT EXTRACT(YEAR FROM SYSDATE) FROM dual;  -- Current year
SELECT EXTRACT(MONTH FROM SYSDATE) FROM dual; -- Current month
SELECT EXTRACT(DAY FROM SYSDATE) FROM dual;   -- Current day

======== Round and Truncate Date ========
SELECT ROUND(SYSDATE, 'MONTH') FROM dual;   -- Rounded to month
SELECT ROUND(SYSDATE, 'YEAR') FROM dual;    -- Rounded to year
SELECT TRUNC(SYSDATE) FROM dual;           -- Time removed
SELECT TRUNC(SYSDATE, 'MONTH') FROM dual;  -- First day of month
SELECT TRUNC(SYSDATE, 'YEAR') FROM dual;   -- First day of year

======== Date Formatting ========
SELECT TO_CHAR(SYSDATE, 'DD-MON-YYYY') FROM dual;           -- 25-DEC-2024
SELECT TO_CHAR(SYSDATE, 'MM/DD/YYYY HH24:MI:SS') FROM dual; -- 12/25/2024 14:30:45

======== String to Date ========
SELECT TO_DATE('25-DEC-2024', 'DD-MON-YYYY') FROM dual;

======== Calculate Age ========
SELECT TRUNC(MONTHS_BETWEEN(SYSDATE, birth_date) / 12) AS age FROM employees;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Joins and Subqueries',
      commands: [
        {
          command: 'Inner Joins',
          description: 'Combine rows from multiple tables',
          usage: 'INNER JOIN, NATURAL JOIN, USING clause',
          example: `======== Basic Inner Join ========
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;

======== Multiple Table Join ========
SELECT e.first_name, e.last_name, d.department_name, l.city
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
INNER JOIN locations l ON d.location_id = l.location_id;

======== Natural Join ========
SELECT first_name, department_name
FROM employees
NATURAL JOIN departments;

======== USING Clause ========
SELECT first_name, department_name
FROM employees
INNER JOIN departments USING (department_id);

======== Inner Join with WHERE ========
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 5000;

======== Inner Join with Aggregation ========
SELECT d.department_name, COUNT(e.employee_id) AS emp_count, AVG(e.salary) AS avg_salary
FROM departments d
INNER JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name
HAVING COUNT(e.employee_id) > 5;`,
        },
        {
          command: 'Outer Joins',
          description: 'Include non-matching rows',
          usage: 'LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN',
          example: `======== Left Outer Join ========
SELECT e.first_name, d.department_name
FROM employees e
LEFT OUTER JOIN departments d ON e.department_id = d.department_id;

======== Right Outer Join ========
SELECT e.first_name, d.department_name
FROM employees e
RIGHT OUTER JOIN departments d ON e.department_id = d.department_id;

======== Full Outer Join ========
SELECT e.first_name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id;

======== Oracle Syntax (Old Style) ========
SELECT e.first_name, d.department_name
FROM employees e, departments d
WHERE e.department_id(+) = d.department_id; -- Left Join
WHERE e.department_id = d.department_id(+); -- Right Join

======== Self Join ========
SELECT e.first_name AS employee, m.first_name AS manager
FROM employees e
LEFT OUTER JOIN employees m ON e.manager_id = m.employee_id;

======== Multiple Outer Joins ========
SELECT e.first_name, d.department_name, l.city
FROM employees e
LEFT OUTER JOIN departments d ON e.department_id = d.department_id
LEFT OUTER JOIN locations l ON d.location_id = l.location_id;

======== Outer Join with Aggregation ========
SELECT d.department_name, COUNT(e.employee_id) AS emp_count
FROM departments d
LEFT OUTER JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name;`,
        },
        {
          command: 'Subqueries',
          description: 'Nested queries and subquery types',
          usage: 'Single-row, multi-row, correlated subqueries',
          example: `======== Single-Row Subquery ========
SELECT first_name, last_name, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);

======== Multi-Row Subquery ========
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

======== IN Operator with Subquery ========
SELECT first_name, last_name, department_id
FROM employees
WHERE department_id IN (SELECT department_id FROM departments WHERE location_id = 1700);

======== ANY Operator ========
SELECT first_name, last_name, salary
FROM employees
WHERE salary > ANY (SELECT salary FROM employees WHERE department_id = 60);

======== ALL Operator ========
SELECT first_name, last_name, salary
FROM employees
WHERE salary > ALL (SELECT salary FROM employees WHERE department_id = 60);

======== EXISTS Operator ========
SELECT department_name
FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);

======== NOT EXISTS Operator ========
SELECT department_name
FROM departments d
WHERE NOT EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);

======== Correlated Subquery ========
SELECT e1.first_name, e1.last_name, e1.salary
FROM employees e1
WHERE e1.salary > (SELECT AVG(e2.salary) 
                  FROM employees e2 
                  WHERE e2.department_id = e1.department_id);

======== FROM Clause Subquery (Inline View) ========
SELECT dept_name, avg_sal
FROM (SELECT d.department_name AS dept_name, AVG(e.salary) AS avg_sal
      FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      GROUP BY d.department_name)
WHERE avg_sal > 5000;

======== WITH Clause (CTE) ========
WITH dept_stats AS (
  SELECT department_id, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY department_id
)
SELECT e.first_name, e.last_name, e.salary, d.avg_salary
FROM employees e
JOIN dept_stats d ON e.department_id = d.department_id
WHERE e.salary > d.avg_salary;`,
        },
      ],
    },
    {
      title: 'Advanced SQL Operations',
      commands: [
        {
          command: 'Set Operations',
          description: 'Combine result sets from multiple queries',
          usage: 'UNION, INTERSECT, MINUS',
          example: `======== UNION (removes duplicates) ========
SELECT employee_id, first_name FROM employees WHERE department_id = 10
UNION
SELECT employee_id, first_name FROM employees WHERE department_id = 20;

======== UNION ALL (includes duplicates) ========
SELECT employee_id, first_name FROM employees WHERE department_id = 10
UNION ALL
SELECT employee_id, first_name FROM employees WHERE department_id = 20;

======== INTERSECT (common rows) ========
SELECT employee_id FROM employees WHERE salary > 5000
INTERSECT
SELECT employee_id FROM employees WHERE department_id = 10;

======== MINUS (rows in first query not in second) ========
SELECT employee_id FROM employees WHERE department_id = 10
MINUS
SELECT employee_id FROM employees WHERE salary > 10000;

======== Set Operations with Ordering ========
SELECT first_name, salary FROM employees WHERE department_id = 10
UNION
SELECT first_name, salary FROM employees WHERE department_id = 20
ORDER BY salary DESC;

======== Multiple Set Operations ========
SELECT first_name FROM employees WHERE department_id = 10
UNION
SELECT first_name FROM employees WHERE department_id = 20
INTERSECT
SELECT first_name FROM employees WHERE salary > 5000;`,
        },
        {
          command: 'Hierarchical Queries',
          description: 'Query hierarchical data structures',
          usage: 'CONNECT BY, START WITH, PRIOR',
          example: `======== Basic Hierarchy (Employee-Manager) ========
SELECT employee_id, first_name, last_name, manager_id, LEVEL
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;

======== Hierarchical Query with Formatting ========
SELECT LPAD(' ', 2*(LEVEL-1)) || first_name AS employee_name,
       salary, LEVEL
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;

======== SIBLINGS Ordering ========
SELECT LPAD(' ', 2*(LEVEL-1)) || first_name AS employee_name,
       salary, LEVEL
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id
ORDER SIBLINGS BY first_name;

======== Hierarchical Functions ========
SELECT employee_id, first_name, last_name,
       SYS_CONNECT_BY_PATH(first_name, ' -> ') AS path,
       CONNECT_BY_ROOT first_name AS top_manager,
       LEVEL
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;

======== NOCYCLE (handle loops in data) ========
SELECT employee_id, first_name, last_name, LEVEL
FROM employees
START WITH manager_id IS NULL
CONNECT BY NOCYCLE PRIOR employee_id = manager_id;

======== CONNECT_BY_ISLEAF (identify leaf nodes) ========
SELECT employee_id, first_name, last_name,
       CASE WHEN CONNECT_BY_ISLEAF = 1 THEN 'Yes' ELSE 'No' END AS is_leaf
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;

======== Recursive Subquery Factoring (Oracle 11g R2+) ========
WITH org_chart (employee_id, first_name, manager_id, level, path) AS (
  SELECT employee_id, first_name, manager_id, 1, first_name
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.employee_id, e.first_name, e.manager_id, oc.level + 1,
         oc.path || ' -> ' || e.first_name
  FROM employees e
  JOIN org_chart oc ON e.manager_id = oc.employee_id
)
SELECT employee_id, first_name, level, path
FROM org_chart
ORDER BY level;`,
        },
        {
          command: 'Pivot and Unpivot',
          description: 'Transform rows to columns and vice versa',
          usage: 'PIVOT, UNPIVOT operators',
          example: `======== Basic PIVOT ========
SELECT *
FROM (SELECT department_id, employee_id, salary FROM employees)
PIVOT (
  AVG(salary) AS avg_sal
  FOR department_id IN (10, 20, 30, 40)
);

======== PIVOT with Multiple Aggregates ========
SELECT *
FROM (SELECT department_id, job_id, salary FROM employees)
PIVOT (
  COUNT(employee_id) AS emp_count,
  AVG(salary) AS avg_sal
  FOR department_id IN (10 AS dept_10, 20 AS dept_20, 30 AS dept_30)
);

======== PIVOT with Multiple Columns ========
SELECT *
FROM (SELECT department_id, job_id, salary, commission_pct FROM employees)
PIVOT (
  AVG(salary) AS avg_sal,
  AVG(commission_pct) AS avg_comm
  FOR department_id IN (10, 20, 30)
);

======== UNPIVOT ========
SELECT *
FROM (
  SELECT department_id, 
         SUM(CASE WHEN job_id = 'IT_PROG' THEN 1 ELSE 0 END) AS it_prog,
         SUM(CASE WHEN job_id = 'SA_REP' THEN 1 ELSE 0 END) AS sa_rep,
         SUM(CASE WHEN job_id = 'ST_CLERK' THEN 1 ELSE 0 END) AS st_clerk
  FROM employees
  GROUP BY department_id
)
UNPIVOT (
  employee_count FOR job_id IN (it_prog, sa_rep, st_clerk)
);

======== UNPIVOT with INCLUDE NULLS ========
SELECT *
FROM (
  SELECT department_id, 
         SUM(CASE WHEN job_id = 'IT_PROG' THEN 1 ELSE 0 END) AS it_prog,
         SUM(CASE WHEN job_id = 'SA_REP' THEN 1 ELSE 0 END) AS sa_rep
  FROM employees
  GROUP BY department_id
)
UNPIVOT INCLUDE NULLS (
  employee_count FOR job_id IN (it_prog, sa_rep)
);

======== Multiple UNPIVOT ========
SELECT department_id, metric_type, value
FROM (
  SELECT department_id, AVG(salary) AS avg_sal, MAX(salary) AS max_sal
  FROM employees
  GROUP BY department_id
)
UNPIVOT (
  value FOR metric_type IN (avg_sal, max_sal)
);`,
        },
      ],
    },
    {
      title: 'Indexes and Performance',
      commands: [
        {
          command: 'Creating Indexes',
          description: 'Create different types of indexes',
          usage: 'B-tree, bitmap, function-based, composite indexes',
          example: `======== B-Tree Index ========
CREATE INDEX emp_lastname_idx ON employees(last_name);

======== Composite Index ========
CREATE INDEX emp_dept_name_idx ON employees(department_id, last_name);

======== Unique Index ========
CREATE UNIQUE INDEX emp_email_idx ON employees(email);

======== Function-Based Index ========
CREATE INDEX emp_upper_name_idx ON employees(UPPER(first_name));
CREATE INDEX emp_salary_comm_idx ON employees(salary + NVL(commission_pct * salary, 0));

======== Bitmap Index (for low cardinality columns) ========
CREATE BITMAP INDEX emp_gender_idx ON employees(gender);

======== Partitioned Index ========
CREATE INDEX emp_hiredate_idx ON employees(hire_date)
GLOBAL PARTITION BY RANGE (hire_date)
(
  PARTITION p2000 VALUES LESS THAN (TO_DATE('2001-01-01', 'YYYY-MM-DD')),
  PARTITION p2005 VALUES LESS THAN (TO_DATE('2006-01-01', 'YYYY-MM-DD')),
  PARTITION pmax VALUES LESS THAN (MAXVALUE)
);

======== Reverse Key Index ========
CREATE INDEX emp_reverse_idx ON employees(employee_id) REVERSE;

======== Compressed Index ========
CREATE INDEX emp_compressed_idx ON employees(department_id, job_id) COMPRESS 1;

======== Invisible Index (not used by optimizer) ========
CREATE INDEX emp_invisible_idx ON employees(salary) INVISIBLE;

======== Function-Based Index with CASE ========
CREATE INDEX emp_salary_category_idx ON employees(
  CASE 
    WHEN salary < 3000 THEN 'Low'
    WHEN salary < 6000 THEN 'Medium'
    ELSE 'High'
  END
);

======== Index with Online Option ========
CREATE INDEX emp_online_idx ON employees(salary) ONLINE;`,
        },
        {
          command: 'Managing Indexes',
          description: 'Monitor, rebuild, and maintain indexes',
          usage: 'ALTER INDEX, DROP INDEX, index monitoring',
          example: `======== Monitor Index Usage ========
ALTER INDEX emp_lastname_idx MONITORING USAGE;
ALTER INDEX emp_lastname_idx NOMONITORING USAGE;

======== Check Index Usage ========
SELECT * FROM v$object_usage WHERE index_name = 'EMP_LASTNAME_IDX';

======== Rebuild Index ========
ALTER INDEX emp_lastname_idx REBUILD;
ALTER INDEX emp_lastname_idx REBUILD ONLINE;

======== Rebuild Partition ========
ALTER INDEX emp_hiredate_idx REBUILD PARTITION p2000;

======== Coalesce Index (merge leaf blocks) ========
ALTER INDEX emp_lastname_idx COALESCE;

======== Make Index Visible/Invisible ========
ALTER INDEX emp_invisible_idx VISIBLE;
ALTER INDEX emp_invisible_idx INVISIBLE;

======== Rename Index ========
ALTER INDEX emp_lastname_idx RENAME TO emp_lname_idx;

======== Drop Index ========
DROP INDEX emp_lastname_idx;
DROP INDEX emp_lastname_idx ONLINE;

======== Check Index Statistics ========
SELECT index_name, table_name, status, leaf_blocks, distinct_keys
FROM user_indexes
WHERE table_name = 'EMPLOYEES';

======== Analyze Index ========
ANALYZE INDEX emp_lastname_idx VALIDATE STRUCTURE;

======== Check Index Fragmentation ========
SELECT name, height, lf_rows, del_lf_rows, (del_lf_rows/lf_rows)*100 AS fragmentation
FROM index_stats
WHERE name = 'EMP_LASTNAME_IDX';

======== Rebuild Fragmented Indexes ========
BEGIN
  FOR idx IN (SELECT index_name FROM user_indexes 
              WHERE table_name = 'EMPLOYEES' AND status = 'VALID') LOOP
    EXECUTE IMMEDIATE 'ALTER INDEX ' || idx.index_name || ' REBUILD';
  END LOOP;
END;
/`,
        },
        {
          command: 'Execution Plans',
          description: 'Analyze and optimize query execution',
          usage: 'EXPLAIN PLAN, AUTOTRACE, DBMS_XPLAN',
          example: `======== Explain Plan ========
EXPLAIN PLAN FOR
SELECT * FROM employees WHERE department_id = 10 AND salary > 5000;

======== Display Execution Plan ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);

======== Display with Format Options ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE', NULL, 'ALL +OUTLINE'));

======== Explain Plan for Specific Statement ========
EXPLAIN PLAN FOR
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 5000;

======== Display Plan with Statistics ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR);

======== Real-Time SQL Monitoring ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR('sql_id', 'child_number', 'ALLSTATS LAST'));

======== SQL*Plus AUTOTRACE ========
SET AUTOTRACE ON EXPLAIN
SELECT * FROM employees WHERE department_id = 10;

SET AUTOTRACE ON STATISTICS
SELECT * FROM employees WHERE department_id = 10;

SET AUTOTRACE ON EXPLAIN STATISTICS
SELECT * FROM employees WHERE department_id = 10;

======== Display Plan for Last Statement ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR(FORMAT => 'ALLSTATS LAST'));

======== Display Plan with Predicate Information ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY(FORMAT => 'ALL +PREDICATE'));

======== Display Plan with Outline ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY(FORMAT => 'ALL +OUTLINE'));

======== Adaptive Plans (12c+) ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY(FORMAT => 'ADAPTIVE'));

======== SQL Plan Management ========
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_SQL_PLAN_BASELINE());`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'PL/SQL Programming',
      commands: [
        {
          command: 'PL/SQL Block Structure',
          description: 'Basic PL/SQL block syntax and structure',
          usage: 'DECLARE, BEGIN, EXCEPTION, END',
          example: `======== Anonymous Block Basic Structure ========
DECLARE
  -- Declaration section
  v_name VARCHAR2(50);
  v_salary NUMBER(8,2);
  v_hire_date DATE;
BEGIN
  -- Execution section
  v_name := 'John Doe';
  v_salary := 5000;
  v_hire_date := SYSDATE;
  
  -- Insert into table
  INSERT INTO employees (employee_id, first_name, last_name, salary, hire_date)
  VALUES (1001, 'John', 'Doe', v_salary, v_hire_date);
  
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Employee ' || v_name || ' created successfully');
  
EXCEPTION
  -- Exception handling section
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK;
END;
/

======== Block with Variables and Constants ========
DECLARE
  -- Constants
  c_min_salary CONSTANT NUMBER := 1000;
  c_dept_name CONSTANT VARCHAR2(20) := 'IT';
  
  -- Variables with initialization
  v_emp_count NUMBER := 0;
  v_avg_salary NUMBER(8,2) := 0;
  v_department_id NUMBER := 60;
  
  -- Type declarations
  TYPE emp_record_type IS RECORD (
    emp_id employees.employee_id%TYPE,
    emp_name employees.first_name%TYPE,
    emp_salary employees.salary%TYPE
  );
  v_emp_record emp_record_type;
  
BEGIN
  -- Count employees in department
  SELECT COUNT(*), AVG(salary)
  INTO v_emp_count, v_avg_salary
  FROM employees
  WHERE department_id = v_department_id;
  
  -- Get employee record
  SELECT employee_id, first_name, salary
  INTO v_emp_record
  FROM employees
  WHERE employee_id = 100;
  
  DBMS_OUTPUT.PUT_LINE('Department ' || c_dept_name || ' has ' || v_emp_count || ' employees');
  DBMS_OUTPUT.PUT_LINE('Average salary: ' || v_avg_salary);
  DBMS_OUTPUT.PUT_LINE('Employee: ' || v_emp_record.emp_name);
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('No employee found');
  WHEN TOO_MANY_ROWS THEN
    DBMS_OUTPUT.PUT_LINE('Multiple employees found');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/`,
        },
        {
          command: 'Control Structures',
          description: 'IF statements, loops, and branching',
          usage: 'IF-THEN-ELSE, CASE, FOR, WHILE loops',
          example: `======== IF-THEN-ELSE Statements ========
DECLARE
  v_salary NUMBER := 7500;
  v_bonus NUMBER;
BEGIN
  IF v_salary < 3000 THEN
    v_bonus := v_salary * 0.10;
  ELSIF v_salary < 6000 THEN
    v_bonus := v_salary * 0.15;
  ELSIF v_salary < 10000 THEN
    v_bonus := v_salary * 0.20;
  ELSE
    v_bonus := v_salary * 0.25;
  END IF;
  
  DBMS_OUTPUT.PUT_LINE('Bonus: ' || v_bonus);
END;
/

======== CASE Statement ========
DECLARE
  v_grade CHAR(1) := 'B';
  v_result VARCHAR2(20);
BEGIN
  v_result := CASE v_grade
    WHEN 'A' THEN 'Excellent'
    WHEN 'B' THEN 'Good'
    WHEN 'C' THEN 'Average'
    WHEN 'D' THEN 'Below Average'
    ELSE 'Fail'
  END;
  
  DBMS_OUTPUT.PUT_LINE('Result: ' || v_result);
END;
/

======== Basic LOOP ========
DECLARE
  v_counter NUMBER := 1;
BEGIN
  LOOP
    DBMS_OUTPUT.PUT_LINE('Counter: ' || v_counter);
    v_counter := v_counter + 1;
    EXIT WHEN v_counter > 5;
  END LOOP;
END;
/

======== WHILE LOOP ========
DECLARE
  v_counter NUMBER := 1;
BEGIN
  WHILE v_counter <= 5 LOOP
    DBMS_OUTPUT.PUT_LINE('Counter: ' || v_counter);
    v_counter := v_counter + 1;
  END LOOP;
END;
/

======== FOR LOOP ========
BEGIN
  FOR i IN 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE('Iteration: ' || i);
  END LOOP;
  
  -- Reverse FOR LOOP
  FOR i IN REVERSE 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE('Reverse: ' || i);
  END LOOP;
END;
/

======== Cursor FOR LOOP ========
BEGIN
  FOR emp_rec IN (SELECT first_name, salary FROM employees WHERE department_id = 60) LOOP
    DBMS_OUTPUT.PUT_LINE(emp_rec.first_name || ': ' || emp_rec.salary);
  END LOOP;
END;
/`,
        },
        {
          command: 'Cursors and Collections',
          description: 'Working with cursors and collection types',
          usage: 'Explicit cursors, implicit cursors, associative arrays',
          example: `======== Implicit Cursor ========
BEGIN
  UPDATE employees SET salary = salary * 1.1 WHERE department_id = 60;
  
  IF SQL%FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Updated ' || SQL%ROWCOUNT || ' employees');
  ELSE
    DBMS_OUTPUT.PUT_LINE('No employees updated');
  END IF;
END;
/

======== Explicit Cursor ========
DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, first_name, salary FROM employees WHERE department_id = 60;
  v_emp_id employees.employee_id%TYPE;
  v_first_name employees.first_name%TYPE;
  v_salary employees.salary%TYPE;
BEGIN
  OPEN emp_cursor;
  LOOP
    FETCH emp_cursor INTO v_emp_id, v_first_name, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_first_name || ': ' || v_salary);
  END LOOP;
  CLOSE emp_cursor;
END;
/

======== Cursor with Parameters ========
DECLARE
  CURSOR emp_cursor(p_dept_id NUMBER) IS
    SELECT employee_id, first_name, salary 
    FROM employees 
    WHERE department_id = p_dept_id;
BEGIN
  FOR emp_rec IN emp_cursor(60) LOOP
    DBMS_OUTPUT.PUT_LINE(emp_rec.first_name || ': ' || emp_rec.salary);
  END LOOP;
END;
/

======== Associative Array (Index-By Table) ========
DECLARE
  TYPE emp_table_type IS TABLE OF employees.first_name%TYPE INDEX BY PLS_INTEGER;
  v_emp_table emp_table_type;
BEGIN
  v_emp_table(1) := 'John';
  v_emp_table(2) := 'Jane';
  v_emp_table(10) := 'Bob';
  
  DBMS_OUTPUT.PUT_LINE('Employee 1: ' || v_emp_table(1));
  DBMS_OUTPUT.PUT_LINE('Employee 10: ' || v_emp_table(10));
END;
/

======== Nested Table ========
DECLARE
  TYPE emp_names_type IS TABLE OF VARCHAR2(100);
  v_emp_names emp_names_type := emp_names_type('John', 'Jane', 'Bob');
BEGIN
  v_emp_names.EXTEND;
  v_emp_names(4) := 'Alice';
  
  FOR i IN 1..v_emp_names.COUNT LOOP
    DBMS_OUTPUT.PUT_LINE('Name ' || i || ': ' || v_emp_names(i));
  END LOOP;
END;
/

======== VARRAY ========
DECLARE
  TYPE emp_names_varray_type IS VARRAY(10) OF VARCHAR2(100);
  v_emp_names emp_names_varray_type := emp_names_varray_type('John', 'Jane');
BEGIN
  v_emp_names.EXTEND;
  v_emp_names(3) := 'Bob';
  
  FOR i IN 1..v_emp_names.COUNT LOOP
    DBMS_OUTPUT.PUT_LINE('Name ' || i || ': ' || v_emp_names(i));
  END LOOP;
END;
/`,
        },
        {
          command: 'Stored Procedures and Functions',
          description: 'Creating and using reusable PL/SQL code',
          usage: 'CREATE PROCEDURE, CREATE FUNCTION',
          example: `======== Stored Procedure ========
CREATE OR REPLACE PROCEDURE update_employee_salary(
  p_employee_id IN employees.employee_id%TYPE,
  p_increase_percent IN NUMBER
) AS
  v_current_salary employees.salary%TYPE;
BEGIN
  -- Get current salary
  SELECT salary INTO v_current_salary 
  FROM employees 
  WHERE employee_id = p_employee_id;
  
  -- Update salary
  UPDATE employees 
  SET salary = salary * (1 + p_increase_percent/100)
  WHERE employee_id = p_employee_id;
  
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Salary updated from ' || v_current_salary || 
                      ' to ' || v_current_salary * (1 + p_increase_percent/100));
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Employee not found');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK;
END;
/

======== Function with Return Value ========
CREATE OR REPLACE FUNCTION get_department_avg_salary(
  p_department_id IN departments.department_id%TYPE
) RETURN NUMBER AS
  v_avg_salary employees.salary%TYPE;
BEGIN
  SELECT AVG(salary) INTO v_avg_salary
  FROM employees
  WHERE department_id = p_department_id;
  
  RETURN v_avg_salary;
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    RETURN 0;
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    RETURN 0;
END;
/

======== Calling Procedure and Function ========
DECLARE
  v_avg_sal NUMBER;
BEGIN
  -- Call procedure
  update_employee_salary(100, 10);
  
  -- Call function
  v_avg_sal := get_department_avg_salary(60);
  DBMS_OUTPUT.PUT_LINE('Average salary: ' || v_avg_sal);
END;
/

======== Procedure with OUT Parameter ========
CREATE OR REPLACE PROCEDURE get_employee_details(
  p_employee_id IN employees.employee_id%TYPE,
  p_first_name OUT employees.first_name%TYPE,
  p_salary OUT employees.salary%TYPE
) AS
BEGIN
  SELECT first_name, salary INTO p_first_name, p_salary
  FROM employees
  WHERE employee_id = p_employee_id;
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    p_first_name := NULL;
    p_salary := 0;
END;
/

======== Function with Deterministic Clause ========
CREATE OR REPLACE FUNCTION calculate_bonus(
  p_salary IN employees.salary%TYPE
) RETURN NUMBER DETERMINISTIC AS
BEGIN
  IF p_salary < 3000 THEN
    RETURN p_salary * 0.10;
  ELSIF p_salary < 6000 THEN
    RETURN p_salary * 0.15;
  ELSE
    RETURN p_salary * 0.20;
  END IF;
END;
/`,
        },
      ],
    },
    {
      title: 'Database Administration',
      commands: [
        {
          command: 'User Management',
          description: 'Creating and managing database users',
          usage: 'CREATE USER, GRANT, REVOKE',
          example: `======== Create User ========
CREATE USER john_doe IDENTIFIED BY "SecurePassword123"
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA 100M ON users;

======== Alter User ========
ALTER USER john_doe 
IDENTIFIED BY "NewPassword456"
DEFAULT TABLESPACE data
QUOTA 500M ON data;

======== Grant System Privileges ========
GRANT CREATE SESSION TO john_doe;
GRANT CREATE TABLE TO john_doe;
GRANT CREATE VIEW TO john_doe;
GRANT CREATE PROCEDURE TO john_doe;
GRANT UNLIMITED TABLESPACE TO john_doe;

======== Grant Object Privileges ========
GRANT SELECT ON employees TO john_doe;
GRANT INSERT, UPDATE ON employees TO john_doe;
GRANT ALL PRIVILEGES ON employees TO john_doe;

======== Grant Roles ========
GRANT CONNECT TO john_doe;
GRANT RESOURCE TO john_doe;
GRANT DBA TO john_doe;  -- Be careful with DBA role

======== Revoke Privileges ========
REVOKE CREATE TABLE FROM john_doe;
REVOKE SELECT ON employees FROM john_doe;
REVOKE DBA FROM john_doe;

======== Drop User ========
DROP USER john_doe;
DROP USER john_doe CASCADE;  -- Drop with all objects

======== Lock/Unlock User ========
ALTER USER john_doe ACCOUNT LOCK;
ALTER USER john_doe ACCOUNT UNLOCK;

======== Password Management ========
ALTER USER john_doe PASSWORD EXPIRE;
ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME 90;

======== View Users ========
SELECT username, account_status, created FROM dba_users;
SELECT * FROM user_users;  -- Current user info`,
        },
        {
          command: 'Tablespace Management',
          description: 'Managing database tablespaces',
          usage: 'CREATE TABLESPACE, ALTER TABLESPACE',
          example: `======== Create Tablespace ========
CREATE TABLESPACE app_data
DATAFILE '/u01/app/oracle/oradata/XE/app_data01.dbf' SIZE 100M
AUTOEXTEND ON NEXT 10M MAXSIZE 1G
EXTENT MANAGEMENT LOCAL
SEGMENT SPACE MANAGEMENT AUTO;

======== Create Temporary Tablespace ========
CREATE TEMPORARY TABLESPACE app_temp
TEMPFILE '/u01/app/oracle/oradata/XE/app_temp01.dbf' SIZE 50M
AUTOEXTEND ON NEXT 5M MAXSIZE 500M
EXTENT MANAGEMENT LOCAL;

======== Create UNDO Tablespace ========
CREATE UNDO TABLESPACE app_undo
DATAFILE '/u01/app/oracle/oradata/XE/app_undo01.dbf' SIZE 100M
AUTOEXTEND ON NEXT 10M MAXSIZE 2G;

======== Add Datafile to Tablespace ========
ALTER TABLESPACE app_data
ADD DATAFILE '/u01/app/oracle/oradata/XE/app_data02.dbf' SIZE 200M
AUTOEXTEND ON NEXT 20M MAXSIZE 2G;

======== Resize Datafile ========
ALTER DATABASE
DATAFILE '/u01/app/oracle/oradata/XE/app_data01.dbf' RESIZE 150M;

======== Tablespace Operations ========
ALTER TABLESPACE app_data ONLINE;
ALTER TABLESPACE app_data OFFLINE;
ALTER TABLESPACE app_data READ ONLY;
ALTER TABLESPACE app_data READ WRITE;

======== Drop Tablespace ========
DROP TABLESPACE app_data INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE app_temp INCLUDING CONTENTS AND DATAFILES;

======== Tablespace Information ========
SELECT tablespace_name, status, contents FROM dba_tablespaces;
SELECT file_name, tablespace_name, bytes/1024/1024 AS size_mb 
FROM dba_data_files;
SELECT * FROM dba_free_space WHERE tablespace_name = 'APP_DATA';

======== Monitor Tablespace Usage ========
SELECT df.tablespace_name,
       ROUND(df.bytes/1024/1024, 2) AS total_mb,
       ROUND(fs.bytes/1024/1024, 2) AS free_mb,
       ROUND((df.bytes - fs.bytes)/1024/1024, 2) AS used_mb,
       ROUND(((df.bytes - fs.bytes)/df.bytes) * 100, 2) AS pct_used
FROM (SELECT tablespace_name, SUM(bytes) bytes
      FROM dba_data_files GROUP BY tablespace_name) df,
     (SELECT tablespace_name, SUM(bytes) bytes
      FROM dba_free_space GROUP BY tablespace_name) fs
WHERE df.tablespace_name = fs.tablespace_name;`,
        },
        {
          command: 'Backup and Recovery',
          description: 'Database backup and recovery operations',
          usage: 'RMAN, export/import, flashback',
          example: `======== RMAN Backup ========
-- Connect to RMAN
rman target /

-- Full database backup
BACKUP DATABASE PLUS ARCHIVELOG;

-- Incremental backup
BACKUP INCREMENTAL LEVEL 0 DATABASE;
BACKUP INCREMENTAL LEVEL 1 DATABASE;

-- Backup specific tablespace
BACKUP TABLESPACE users;

-- Backup control file and spfile
BACKUP CURRENT CONTROLFILE;
BACKUP SPFILE;

======== RMAN Recovery ========
-- Restore and recover database
RESTORE DATABASE;
RECOVER DATABASE;

-- Restore specific tablespace
RESTORE TABLESPACE users;
RECOVER TABLESPACE users;

-- Point-in-time recovery
RUN {
  SET UNTIL TIME "TO_DATE('2024-12-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS')";
  RESTORE DATABASE;
  RECOVER DATABASE;
}

======== Export/Import (Data Pump) ========
-- Export full database
expdp system/password FULL=y DIRECTORY=dpump_dir DUMPFILE=full_backup.dmp LOGFILE=full_export.log

-- Export specific schema
expdp system/password SCHEMAS=hr DIRECTORY=dpump_dir DUMPFILE=hr_schema.dmp

-- Export specific table
expdp hr/password TABLES=employees DIRECTORY=dpump_dir DUMPFILE=employees.dmp

-- Import full database
impdp system/password FULL=y DIRECTORY=dpump_dir DUMPFILE=full_backup.dmp

-- Import specific schema
impdp system/password SCHEMAS=hr DIRECTORY=dpump_dir DUMPFILE=hr_schema.dmp

======== Flashback Technology ========
-- Flashback query (as of specific time)
SELECT * FROM employees AS OF TIMESTAMP 
SYSTIMESTAMP - INTERVAL '1' HOUR;

-- Flashback table to earlier time
FLASHBACK TABLE employees TO TIMESTAMP 
TO_TIMESTAMP('2024-12-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS');

-- Flashback drop (recover from recycle bin)
FLASHBACK TABLE employees TO BEFORE DROP;

-- Flashback database
FLASHBACK DATABASE TO SCN 123456;
FLASHBACK DATABASE TO TIME 
TO_TIMESTAMP('2024-12-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS');

======== Recovery Manager (RMAN) Scripts ========
-- Backup script
RUN {
  ALLOCATE CHANNEL c1 DEVICE TYPE DISK;
  BACKUP DATABASE PLUS ARCHIVELOG DELETE INPUT;
  DELETE NOPROMPT OBSOLETE;
  RELEASE CHANNEL c1;
}

-- Crosscheck backups
CROSSCHECK BACKUP;
DELETE NOPROMPT EXPIRED BACKUP;`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'SQL Tuning Advisor',
          description: 'Automatic SQL performance tuning',
          usage: 'DBMS_SQLTUNE package',
          example: `======== Create Tuning Task ========
DECLARE
  l_task_name VARCHAR2(30);
BEGIN
  l_task_name := DBMS_SQLTUNE.CREATE_TUNING_TASK(
    sql_text => 'SELECT * FROM employees WHERE department_id = 60',
    user_name => 'HR',
    scope => DBMS_SQLTUNE.SCOPE_COMPREHENSIVE,
    time_limit => 60,
    task_name => 'emp_tuning_task',
    description => 'Tuning task for employees query'
  );
  
  DBMS_OUTPUT.PUT_LINE('Task created: ' || l_task_name);
END;
/

======== Execute Tuning Task ========
BEGIN
  DBMS_SQLTUNE.EXECUTE_TUNING_TASK(task_name => 'emp_tuning_task');
END;
/

======== Display Tuning Results ========
SELECT DBMS_SQLTUNE.REPORT_TUNING_TASK('emp_tuning_task') AS recommendations 
FROM dual;

======== Drop Tuning Task ========
BEGIN
  DBMS_SQLTUNE.DROP_TUNING_TASK('emp_tuning_task');
END;
/

======== SQL Profile ========
-- Accept SQL profile from tuning advisor
DECLARE
  l_profile_name VARCHAR2(30);
BEGIN
  l_profile_name := DBMS_SQLTUNE.ACCEPT_SQL_PROFILE(
    task_name => 'emp_tuning_task',
    name => 'emp_sql_profile'
  );
  
  DBMS_OUTPUT.PUT_LINE('Profile created: ' || l_profile_name);
END;
/

======== Drop SQL Profile ========
BEGIN
  DBMS_SQLTUNE.DROP_SQL_PROFILE('emp_sql_profile');
END;
/`,
        },
        {
          command: 'Automatic Workload Repository (AWR)',
          description: 'Performance data collection and analysis',
          usage: 'DBMS_WORKLOAD_REPOSITORY package',
          example: `======== Create AWR Snapshot ========
BEGIN
  DBMS_WORKLOAD_REPOSITORY.CREATE_SNAPSHOT();
END;
/

======== Generate AWR Report ========
-- SQL to generate AWR report
SELECT output FROM TABLE(
  DBMS_WORKLOAD_REPOSITORY.AWR_REPORT_HTML(
    (SELECT dbid FROM v$database),
    (SELECT instance_number FROM v$instance),
    :begin_snap_id,
    :end_snap_id
  )
);

======== AWR Baseline ========
-- Create baseline
BEGIN
  DBMS_WORKLOAD_REPOSITORY.CREATE_BASELINE(
    start_snap_id => 100,
    end_snap_id => 200,
    baseline_name => 'peak_period_baseline',
    expiration => NULL
  );
END;
/

======== Modify Baseline ========
BEGIN
  DBMS_WORKLOAD_REPOSITORY.MODIFY_BASELINE_NAME(
    old_baseline_name => 'peak_period_baseline',
    new_baseline_name => 'business_hours_baseline'
  );
END;
/

======== Drop Baseline ========
BEGIN
  DBMS_WORKLOAD_REPOSITORY.DROP_BASELINE(
    baseline_name => 'business_hours_baseline',
    cascade => FALSE
  );
END;
/

======== AWR Settings ========
-- Modify snapshot settings
BEGIN
  DBMS_WORKLOAD_REPOSITORY.MODIFY_SNAPSHOT_SETTINGS(
    retention => 43200,  -- 30 days in minutes
    interval => 60,      -- 1 hour in minutes
    topnsql => 100,
    dbid => NULL
  );
END;
/`,
        },
        {
          command: 'Memory Management',
          description: 'SGA and PGA memory optimization',
          usage: 'Memory parameters and advisors',
          example: `======== Automatic Memory Management (AMM) ========
-- Enable AMM
ALTER SYSTEM SET MEMORY_TARGET = 2G SCOPE=SPFILE;
ALTER SYSTEM SET MEMORY_MAX_TARGET = 4G SCOPE=SPFILE;

-- Restart database for changes to take effect
SHUTDOWN IMMEDIATE;
STARTUP;

======== Automatic Shared Memory Management (ASMM) ========
-- Set SGA_TARGET for automatic management
ALTER SYSTEM SET SGA_TARGET = 1G SCOPE=SPFILE;
ALTER SYSTEM SET SGA_MAX_SIZE = 2G SCOPE=SPFILE;

-- Manual SGA component sizing
ALTER SYSTEM SET SHARED_POOL_SIZE = 200M SCOPE=SPFILE;
ALTER SYSTEM SET DB_CACHE_SIZE = 400M SCOPE=SPFILE;
ALTER SYSTEM SET LARGE_POOL_SIZE = 50M SCOPE=SPFILE;
ALTER SYSTEM SET JAVA_POOL_SIZE = 50M SCOPE=SPFILE;

======== PGA Memory Management ========
-- Set PGA_TARGET for automatic PGA management
ALTER SYSTEM SET PGA_AGGREGATE_TARGET = 400M SCOPE=SPFILE;
ALTER SYSTEM SET PGA_AGGREGATE_LIMIT = 800M SCOPE=SPFILE;

======== Memory Advisors ========
-- Check memory advisor recommendations
SELECT * FROM v$memory_target_advice;
SELECT * FROM v$sga_target_advice;
SELECT * FROM v$pga_target_advice;

======== Memory Usage Queries ========
-- SGA components
SELECT component, current_size, min_size, max_size
FROM v$sga_dynamic_components;

-- PGA usage
SELECT name, value FROM v$pgastat WHERE name LIKE '%total%';

-- Memory usage summary
SELECT * FROM v$memory_resize_ops ORDER BY start_time DESC;

======== In-Memory Column Store (12c+) ========
-- Enable In-Memory
ALTER SYSTEM SET INMEMORY_SIZE = 1G SCOPE=SPFILE;
ALTER SYSTEM SET INMEMORY_MAX_POPULATE_SERVERS = 4 SCOPE=SPFILE;

-- Enable table for In-Memory
ALTER TABLE employees INMEMORY;
ALTER TABLE sales INMEMORY PRIORITY HIGH;

-- In-Memory compression
ALTER TABLE sales INMEMORY MEMCOMPRESS FOR QUERY HIGH;

-- In-Memory queries
SELECT /*+ INMEMORY */ department_id, SUM(amount) 
FROM sales 
GROUP BY department_id;`,
        },
      ],
    },
    {
      title: 'Advanced Security',
      commands: [
        {
          command: 'Data Encryption',
          description: 'Transparent Data Encryption and column encryption',
          usage: 'TDE, wallet management',
          example: `======== Configure TDE Wallet ========
-- Set wallet location
ALTER SYSTEM SET ENCRYPTION WALLET OPEN IDENTIFIED BY "wallet_password";
ALTER SYSTEM SET ENCRYPTION WALLET CLOSE;

======== Tablespace Encryption ========
-- Create encrypted tablespace
CREATE TABLESPACE secure_data
DATAFILE '/u01/app/oracle/oradata/XE/secure_data01.dbf' SIZE 100M
ENCRYPTION USING 'AES256'
DEFAULT STORAGE(ENCRYPT);

-- Encrypt existing tablespace
ALTER TABLESPACE users ENCRYPTION ONLINE USING 'AES256';

======== Column Encryption ========
-- Create table with encrypted columns
CREATE TABLE secure_customers (
  customer_id NUMBER PRIMARY KEY,
  credit_card_number VARCHAR2(16) ENCRYPT USING 'AES256',
  ssn VARCHAR2(11) ENCRYPT,
  email VARCHAR2(100)
);

-- Add encrypted column to existing table
ALTER TABLE customers ADD (
  credit_card VARCHAR2(16) ENCRYPT USING 'AES256'
);

======== Redaction (12c+) ========
-- Create redaction policy
BEGIN
  DBMS_REDACT.ADD_POLICY(
    object_schema => 'HR',
    object_name => 'EMPLOYEES',
    policy_name => 'emp_ss_redaction',
    column_name => 'SSN',
    function_type => DBMS_REDACT.FULL,
    expression => '1=1'
  );
END;
/

-- Partial redaction
BEGIN
  DBMS_REDACT.ADD_POLICY(
    object_schema => 'HR',
    object_name => 'EMPLOYEES',
    policy_name => 'emp_salary_redaction',
    column_name => 'SALARY',
    function_type => DBMS_REDACT.PARTIAL,
    function_params => DBMS_REDACT.REDACT_NUM_FMT,
    expression => 'SYS_CONTEXT(''USERENV'', ''SESSION_USER'') != ''HR_ADMIN'''
  );
END;
/

======== Data Vault ========
-- Create Data Vault realm
BEGIN
  DVSYS.DBMS_MACADM.CREATE_REALM(
    realm_name => 'Employee Data Realm',
    description => 'Protect employee sensitive data',
    enabled => 'Y'
  );
END;
/

-- Add object to realm
BEGIN
  DVSYS.DBMS_MACADM.ADD_OBJECT_TO_REALM(
    realm_name => 'Employee Data Realm',
    object_owner => 'HR',
    object_name => 'EMPLOYEES',
    object_type => 'TABLE'
  );
END;
/

-- Add authorized user
BEGIN
  DVSYS.DBMS_MACADM.ADD_AUTH_TO_REALM(
    realm_name => 'Employee Data Realm',
    grantee => 'HR_MANAGER'
  );
END;
/`,
        },
        {
          command: 'Fine-Grained Auditing',
          description: 'Detailed audit tracking',
          usage: 'DBMS_FGA package',
          example: `======== FGA Policy Creation ========
-- Add FGA policy for sensitive access
BEGIN
  DBMS_FGA.ADD_POLICY(
    object_schema => 'HR',
    object_name => 'EMPLOYEES',
    policy_name => 'emp_salary_audit',
    audit_condition => 'SALARY > 50000',
    audit_column => 'SALARY',
    handler_schema => NULL,
    handler_module => NULL,
    enable => TRUE,
    statement_types => 'SELECT, UPDATE',
    audit_trail => DBMS_FGA.DB + DBMS_FGA.EXTENDED,
    audit_column_opts => DBMS_FGA.ANY_COLUMNS
  );
END;
/

======== FGA Policy Management ========
-- Enable/disable policy
BEGIN
  DBMS_FGA.ENABLE_POLICY('HR', 'EMPLOYEES', 'emp_salary_audit');
  DBMS_FGA.DISABLE_POLICY('HR', 'EMPLOYEES', 'emp_salary_audit');
END;
/

-- Drop policy
BEGIN
  DBMS_FGA.DROP_POLICY(
    object_schema => 'HR',
    object_name => 'EMPLOYEES',
    policy_name => 'emp_salary_audit'
  );
END;
/

======== View FGA Audit Trail ========
-- Query FGA audit records
SELECT timestamp, db_user, os_user, 
       object_schema, object_name, 
       sql_text, statement_type
FROM dba_fga_audit_trail
WHERE object_name = 'EMPLOYEES'
ORDER BY timestamp DESC;

======== Unified Auditing (12c+) ========
-- Create unified audit policy
CREATE AUDIT POLICY hr_data_policy
ACTIONS SELECT, INSERT, UPDATE, DELETE ON hr.employees,
        SELECT, INSERT, UPDATE, DELETE ON hr.departments
WHEN 'SYS_CONTEXT(''USERENV'', ''SESSION_USER'') != ''HR_ADMIN'''
CONTAINER = ALL;

-- Enable audit policy
AUDIT POLICY hr_data_policy;

-- View unified audit trail
SELECT event_timestamp, 
       object_schema, object_name,
       action_name, sql_text,
       unified_audit_policies
FROM unified_audit_trail
WHERE unified_audit_policies LIKE '%HR_DATA_POLICY%'
ORDER BY event_timestamp DESC;`,
        },
        {
          command: 'Virtual Private Database (VPD)',
          description: 'Row-level security policies',
          usage: 'DBMS_RLS package',
          example: `======== VPD Policy Function ========
CREATE OR REPLACE FUNCTION dept_security_function(
  p_schema IN VARCHAR2,
  p_object IN VARCHAR2
) RETURN VARCHAR2 AS
  v_return_val VARCHAR2(2000);
BEGIN
  -- Only show employees from user's department
  RETURN 'department_id = SYS_CONTEXT(''USERENV'', ''DEPARTMENT_ID'')';
  
EXCEPTION
  WHEN OTHERS THEN
    RETURN '1=0';  -- Return false if error
END;
/

======== Add VPD Policy ========
BEGIN
  DBMS_RLS.ADD_POLICY(
    object_schema => 'HR',
    object_name => 'EMPLOYEES',
    policy_name => 'dept_policy',
    function_schema => 'HR',
    policy_function => 'dept_security_function',
    statement_types => 'SELECT, INSERT, UPDATE, DELETE',
    update_check => TRUE,
    enable => TRUE,
    static_policy => FALSE
  );
END;
/

======== Context for VPD ========
-- Create application context
CREATE OR REPLACE CONTEXT hr_ctx USING hr_ctx_pkg;

-- Context package
CREATE OR REPLACE PACKAGE hr_ctx_pkg AS
  PROCEDURE set_dept_id(p_dept_id NUMBER);
END;
/

CREATE OR REPLACE PACKAGE BODY hr_ctx_pkg AS
  PROCEDURE set_dept_id(p_dept_id NUMBER) IS
  BEGIN
    DBMS_SESSION.SET_CONTEXT('hr_ctx', 'department_id', p_dept_id);
  END;
END;
/

======== Test VPD Policy ========
-- Set context
BEGIN
  hr_ctx_pkg.set_dept_id(60);
END;
/

-- Query will only show department 60 employees
SELECT COUNT(*) FROM hr.employees;

======== Policy Management ========
-- Enable/disable policy
BEGIN
  DBMS_RLS.ENABLE_POLICY('HR', 'EMPLOYEES', 'dept_policy');
  DBMS_RLS.DISABLE_POLICY('HR', 'EMPLOYEES', 'dept_policy');
END;
/

-- Drop policy
BEGIN
  DBMS_RLS.DROP_POLICY('HR', 'EMPLOYEES', 'dept_policy');
END;
/`,
        },
      ],
    },
    {
      title: 'Cloud and Modern Features',
      commands: [
        {
          command: 'Oracle Cloud Infrastructure (OCI)',
          description: 'Oracle Database Cloud Service operations',
          usage: 'OCI CLI, autonomous database',
          example: `======== OCI CLI Setup ========
# Install OCI CLI
bash -c "$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"

# Configure OCI CLI
oci setup config

======== Autonomous Database ========
# Create ATP (Autonomous Transaction Processing)
oci db autonomous-database create \\
  --compartment-id <compartment_ocid> \\
  --db-name myatpdb \\
  --admin-password <secure_password> \\
  --cpu-core-count 2 \\
  --data-storage-size-in-tbs 1 \\
  --display-name "My ATP Database" \\
  --is-dedicated false

# Get connection string
oci db autonomous-database generate-wallet \\
  --autonomous-database-id <adb_ocid> \\
  --password <wallet_password> \\
  --file <wallet_file.zip>

# Connect to ATP using SQL*Plus
sqlplus admin/<password>@<adb_name>_high?wallet_location=<wallet_path>

======== APEX (Application Express) ========
-- Enable APEX
@apexins.sql SYSAUX SYSAUX TEMP /i/

-- Configure APEX admin
@apxchpwd.sql

-- Create APEX workspace
BEGIN
  APEX_INSTANCE_ADMIN.CREATE_WORKSPACE(
    p_workspace => 'MY_WORKSPACE',
    p_schema => 'HR',
    p_schema_password => 'hr_password'
  );
END;
/

======== Oracle REST Data Services (ORDS) ========
-- Install ORDS
java -jar ords.war install advanced

-- Enable REST for schema
BEGIN
  ORDS.enable_schema(
    p_enabled => TRUE,
    p_schema => 'HR',
    p_url_mapping_type => 'BASE_PATH',
    p_url_mapping_pattern => 'hr',
    p_auto_rest_auth => FALSE
  );
END;
/

-- REST API example
GET https://host:port/ords/hr/employees/
GET https://host:port/ords/hr/employees/{id}

======== JSON Support (21c+) ========
-- JSON data type
CREATE TABLE json_documents (
  id NUMBER PRIMARY KEY,
  doc_data JSON,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP
);

-- Insert JSON data
INSERT INTO json_documents (id, doc_data)
VALUES (1, JSON('{"name": "John", "age": 30, "city": "New York"}'));

-- Query JSON data
SELECT doc_data.name, doc_data.age
FROM json_documents
WHERE doc_data.age > 25;

-- JSON functions
SELECT JSON_VALUE(doc_data, '$.name') AS name,
       JSON_QUERY(doc_data, '$.city') AS city,
       JSON_TABLE(doc_data, '$' COLUMNS(
         name VARCHAR2 PATH '$.name',
         age NUMBER PATH '$.age'
       )) jt
FROM json_documents;`,
        },
        {
          command: 'Machine Learning and AI',
          description: 'Oracle Machine Learning features',
          usage: 'OML4SQL, OML Notebooks',
          example: `======== Oracle Machine Learning for SQL ========
-- Create mining model
BEGIN
  DBMS_DATA_MINING.CREATE_MODEL(
    model_name => 'emp_salary_model',
    mining_function => DBMS_DATA_MINING.REGRESSION,
    data_table_name => 'employees',
    case_id_column_name => 'employee_id',
    target_column_name => 'salary'
  );
END;
/

-- Apply model for prediction
SELECT employee_id, first_name, salary,
       PREDICTION(emp_salary_model USING *) AS predicted_salary
FROM employees
WHERE department_id = 60;

======== OML4SQL Algorithms ========
-- Decision Tree
BEGIN
  DBMS_DATA_MINING.CREATE_MODEL(
    model_name => 'decision_tree_model',
    mining_function => DBMS_DATA_MINING.CLASSIFICATION,
    data_table_name => 'customer_data',
    case_id_column_name => 'customer_id',
    target_column_name => 'churn_flag',
    settings_table_name => 'dt_settings'
  );
END;
/

-- Neural Network
BEGIN
  DBMS_DATA_MINING.CREATE_MODEL(
    model_name => 'neural_net_model',
    mining_function => DBMS_DATA_MINING.CLASSIFICATION,
    data_table_name => 'customer_data',
    case_id_column_name => 'customer_id',
    target_column_name => 'churn_flag',
    settings_table_name => 'nn_settings'
  );
END;
/

======== Model Evaluation ========
-- Get model details
SELECT *
FROM TABLE(DBMS_DATA_MINING.GET_MODEL_DETAILS('emp_salary_model'));

-- Model performance metrics
SELECT *
FROM TABLE(DBMS_DATA_MINING.GET_MODEL_COST_SETTINGS('emp_salary_model'));

-- Apply model with confidence
SELECT employee_id, salary,
       PREDICTION(emp_salary_model USING *) AS predicted_salary,
       PREDICTION_PROBABILITY(emp_salary_model USING *) AS confidence
FROM employees
WHERE ROWNUM <= 10;

======== Advanced Analytics ========
-- Anomaly detection
BEGIN
  DBMS_DATA_MINING.CREATE_MODEL(
    model_name => 'anomaly_model',
    mining_function => DBMS_DATA_MINING.ANOMALY_DETECTION,
    data_table_name => 'transaction_data',
    case_id_column_name => 'transaction_id'
  );
END;
/

-- Clustering
BEGIN
  DBMS_DATA_MINING.CREATE_MODEL(
    model_name => 'customer_segments',
    mining_function => DBMS_DATA_MINING.CLUSTERING,
    data_table_name => 'customer_data',
    case_id_column_name => 'customer_id'
  );
END;
/

-- Association rules (market basket analysis)
BEGIN
  DBMS_DATA_MINING.CREATE_MODEL(
    model_name => 'market_basket',
    mining_function => DBMS_DATA_MINING.ASSOCIATION_RULES,
    data_table_name => 'transaction_items',
    case_id_column_name => 'transaction_id'
  );
END;
/`,
        },
        {
          command: 'Blockchain and Distributed Features',
          description: 'Oracle Blockchain Table and distributed features',
          usage: 'Blockchain tables, sharding',
          example: `======== Blockchain Tables (21c+) ========
-- Create blockchain table
CREATE TABLE blockchain_transactions (
  transaction_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  account_id NUMBER,
  amount NUMBER(10,2),
  transaction_date TIMESTAMP DEFAULT SYSTIMESTAMP,
  transaction_type VARCHAR2(20)
) BLOCKCHAIN
NO DROP UNTIL 30 DAYS IDLE
NO DELETE UNTIL 30 DAYS IDLE
HASHING USING "SHA2_512";

-- Insert into blockchain table
INSERT INTO blockchain_transactions (account_id, amount, transaction_type)
VALUES (1001, 1000.00, 'DEPOSIT');

-- Sign rows
BEGIN
  DBMS_BLOCKCHAIN_TABLE.SIGN_ROW(
    schema_name => 'BANKING',
    table_name => 'BLOCKCHAIN_TRANSACTIONS',
    row_id => '<row_id>',
    signature => '<digital_signature>'
  );
END;
/

-- Verify blockchain table integrity
SELECT * FROM blockchain_transactions
WHERE DBMS_BLOCKCHAIN_TABLE.VERIFY_ROWS(
  schema_name => 'BANKING',
  table_name => 'BLOCKCHAIN_TRANSACTIONS',
  row_ids => NULL
) = 1;

======== Sharding (12c R2+) ========
-- Create shard catalog
CREATE SHARDCATALOG;

-- Create shardspaces
CREATE TABLESPACE shard1_ts;
CREATE TABLESPACE shard2_ts;

CREATE SHARDSPACE shard1;
CREATE SHARDSPACE shard2;

-- Create shards
CREATE SHARD shard1 USING 'shard1_host:1521/shard1' 
TABLESPACE shard1_ts;

CREATE SHARD shard2 USING 'shard2_host:1521/shard2' 
TABLESPACE shard2_ts;

-- Create sharded table
CREATE SHARDED TABLE customers (
  customer_id NUMBER,
  name VARCHAR2(100),
  email VARCHAR2(100),
  region VARCHAR2(50)
) TABLESPACE SET ts_set
PARTITION BY CONSISTENT HASH (customer_id) PARTITIONS AUTO;

-- Distributed transactions
BEGIN
  DBMS_XA.XA_START;
  -- Perform distributed operations
  DBMS_XA.XA_END;
  DBMS_XA.XA_PREPARE;
  DBMS_XA.XA_COMMIT;
END;
/

======== GoldenGate for Replication ========
-- GoldenGate parameter file
EXTRACT ext1
USERID ggs_admin, password ggs_password
EXTTRAIL ./dirdat/lt
TABLE hr.employees;

REPLICAT rep1
USERID ggs_admin, password ggs_password
ASSUMETARGETDEFS
MAP hr.employees, TARGET hr.employees;

-- Start GoldenGate processes
GGSCI> START EXTRACT ext1
GGSCI> START REPLICAT rep1

-- Check lag
GGSCI> INFO EXTRACT ext1, DETAIL
GGSCI> INFO REPLICAT rep1, DETAIL`,
        },
      ],
    },
  ],
};
