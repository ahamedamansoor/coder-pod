import { Database } from 'lucide-react';

export const sqlCheatsheet = {
  id: 'sql',
  name: 'SQL',
  description: 'Standard SQL commands & syntax',
  icon: Database,
  colorTheme: 'indigo' as const,
  sections: [
    {
      title: 'SELECT Basics',
      commands: [
        {
          command: 'SELECT',
          description: 'Query data from table',
          usage: 'SELECT columns FROM table',
          example: 'SELECT * FROM users;\nSELECT name, email FROM users;\nSELECT DISTINCT country FROM users;',
        },
        {
          command: 'WHERE',
          description: 'Filter results',
          usage: 'SELECT * FROM table WHERE condition',
          example: 'SELECT * FROM users WHERE age > 18;\nSELECT * FROM products WHERE price BETWEEN 10 AND 100;',
        },
        {
          command: 'AND / OR / NOT',
          description: 'Logical operators',
          usage: 'WHERE condition1 AND/OR/NOT condition2',
          example: 'SELECT * FROM users WHERE age > 18 AND country = \'USA\';\nSELECT * FROM products WHERE category = \'Electronics\' OR price < 50;',
        },
        {
          command: 'ORDER BY',
          description: 'Sort results',
          usage: 'ORDER BY column ASC/DESC',
          example: 'SELECT * FROM users ORDER BY age DESC;\nSELECT * FROM products ORDER BY price ASC, name DESC;',
        },
        {
          command: 'LIMIT / OFFSET',
          description: 'Pagination',
          usage: 'LIMIT n OFFSET m',
          example: 'SELECT * FROM users LIMIT 10;\nSELECT * FROM users LIMIT 10 OFFSET 20;  -- Page 3',
        },
      ],
    },
    {
      title: 'Aggregate Functions',
      commands: [
        {
          command: 'COUNT',
          description: 'Count rows',
          usage: 'SELECT COUNT(*) FROM table',
          example: 'SELECT COUNT(*) FROM users;\nSELECT COUNT(DISTINCT country) FROM users;',
        },
        {
          command: 'SUM / AVG',
          description: 'Sum and Average',
          usage: 'SELECT SUM(col), AVG(col) FROM table',
          example: 'SELECT SUM(price) FROM orders;\nSELECT AVG(rating) FROM products;',
        },
        {
          command: 'MIN / MAX',
          description: 'Minimum and Maximum',
          usage: 'SELECT MIN(col), MAX(col) FROM table',
          example: 'SELECT MIN(price), MAX(price) FROM products;',
        },
        {
          command: 'GROUP BY',
          description: 'Group results',
          usage: 'SELECT col, COUNT(*) FROM table GROUP BY col',
          example: 'SELECT country, COUNT(*) as user_count\nFROM users\nGROUP BY country\nORDER BY user_count DESC;',
        },
        {
          command: 'HAVING',
          description: 'Filter grouped results',
          usage: 'GROUP BY col HAVING condition',
          example: 'SELECT category, AVG(price)\nFROM products\nGROUP BY category\nHAVING AVG(price) > 100;',
        },
      ],
    },
    {
      title: 'INSERT Data',
      commands: [
        {
          command: 'INSERT INTO',
          description: 'Insert single row',
          usage: 'INSERT INTO table (cols) VALUES (vals)',
          example: 'INSERT INTO users (name, email, age)\nVALUES (\'John Doe\', \'john@example.com\', 30);',
        },
        {
          command: 'INSERT Multiple',
          description: 'Insert multiple rows',
          usage: 'INSERT INTO table (cols) VALUES (vals1), (vals2)',
          example: 'INSERT INTO users (name, email)\nVALUES \n  (\'Alice\', \'alice@example.com\'),\n  (\'Bob\', \'bob@example.com\'),\n  (\'Charlie\', \'charlie@example.com\');',
        },
        {
          command: 'INSERT SELECT',
          description: 'Insert from query',
          usage: 'INSERT INTO table SELECT ... FROM other_table',
          example: 'INSERT INTO premium_users (name, email)\nSELECT name, email FROM users\nWHERE subscription = \'premium\';',
        },
      ],
    },
    {
      title: 'UPDATE Data',
      commands: [
        {
          command: 'UPDATE',
          description: 'Update existing rows',
          usage: 'UPDATE table SET col=val WHERE condition',
          example: 'UPDATE users SET age = 31 WHERE id = 1;\nUPDATE products SET price = price * 1.1 WHERE category = \'Electronics\';',
        },
        {
          command: 'UPDATE Multiple Columns',
          description: 'Update several columns',
          usage: 'UPDATE table SET col1=val1, col2=val2 WHERE...',
          example: 'UPDATE users\nSET name = \'John Smith\', email = \'john.smith@example.com\'\nWHERE id = 1;',
        },
      ],
    },
    {
      title: 'DELETE Data',
      commands: [
        {
          command: 'DELETE',
          description: 'Delete rows',
          usage: 'DELETE FROM table WHERE condition',
          example: 'DELETE FROM users WHERE id = 1;\nDELETE FROM sessions WHERE expires_at < NOW();',
        },
        {
          command: 'TRUNCATE',
          description: 'Delete all rows (fast)',
          usage: 'TRUNCATE TABLE table_name',
          example: 'TRUNCATE TABLE temp_data;\n-- Faster than DELETE, resets auto-increment',
        },
      ],
    },
    {
      title: 'JOINs',
      commands: [
        {
          command: 'INNER JOIN',
          description: 'Match rows from both tables',
          usage: 'SELECT ... FROM t1 INNER JOIN t2 ON condition',
          example: 'SELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;',
        },
        {
          command: 'LEFT JOIN',
          description: 'All from left + matching from right',
          usage: 'SELECT ... FROM t1 LEFT JOIN t2 ON condition',
          example: 'SELECT users.name, COUNT(orders.id) as order_count\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id\nGROUP BY users.id;',
        },
        {
          command: 'RIGHT JOIN',
          description: 'All from right + matching from left',
          usage: 'SELECT ... FROM t1 RIGHT JOIN t2 ON condition',
          example: 'SELECT * FROM orders\nRIGHT JOIN users ON orders.user_id = users.id;',
        },
        {
          command: 'FULL OUTER JOIN',
          description: 'All rows from both tables',
          usage: 'SELECT ... FROM t1 FULL OUTER JOIN t2 ON condition',
          example: 'SELECT * FROM users\nFULL OUTER JOIN orders ON users.id = orders.user_id;',
        },
        {
          command: 'CROSS JOIN',
          description: 'Cartesian product',
          usage: 'SELECT ... FROM t1 CROSS JOIN t2',
          example: 'SELECT colors.name, sizes.name\nFROM colors CROSS JOIN sizes;',
        },
        {
          command: 'SELF JOIN',
          description: 'Join table with itself',
          usage: 'SELECT ... FROM table t1 JOIN table t2 ON condition',
          example: 'SELECT e1.name AS employee, e2.name AS manager\nFROM employees e1\nLEFT JOIN employees e2 ON e1.manager_id = e2.id;',
        },
      ],
    },
    {
      title: 'Subqueries',
      commands: [
        {
          command: 'Subquery in WHERE',
          description: 'Filter using subquery',
          usage: 'WHERE col IN (SELECT ...)',
          example: 'SELECT name FROM users\nWHERE id IN (\n  SELECT user_id FROM orders WHERE total > 1000\n);',
        },
        {
          command: 'Subquery in SELECT',
          description: 'Calculated column',
          usage: 'SELECT col, (SELECT ...) as alias FROM table',
          example: 'SELECT name,\n  (SELECT COUNT(*) FROM orders WHERE user_id = users.id) as order_count\nFROM users;',
        },
        {
          command: 'EXISTS',
          description: 'Check if subquery returns rows',
          usage: 'WHERE EXISTS (SELECT ...)',
          example: 'SELECT name FROM users\nWHERE EXISTS (\n  SELECT 1 FROM orders WHERE user_id = users.id\n);',
        },
      ],
    },
    {
      title: 'CREATE TABLE',
      commands: [
        {
          command: 'CREATE TABLE',
          description: 'Create new table',
          usage: 'CREATE TABLE name (columns)',
          example: 'CREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE,\n  age INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);',
        },
        {
          command: 'CREATE TABLE IF NOT EXISTS',
          description: 'Create if not exists',
          usage: 'CREATE TABLE IF NOT EXISTS name (...)',
          example: 'CREATE TABLE IF NOT EXISTS logs (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  message TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);',
        },
        {
          command: 'CREATE TABLE AS',
          description: 'Create from query',
          usage: 'CREATE TABLE new_table AS SELECT ... FROM old_table',
          example: 'CREATE TABLE premium_users AS\nSELECT * FROM users WHERE subscription = \'premium\';',
        },
      ],
    },
    {
      title: 'ALTER TABLE',
      commands: [
        {
          command: 'ADD COLUMN',
          description: 'Add new column',
          usage: 'ALTER TABLE name ADD COLUMN col_name type',
          example: 'ALTER TABLE users ADD COLUMN phone VARCHAR(20);\nALTER TABLE users ADD COLUMN status VARCHAR(20) DEFAULT \'active\';',
        },
        {
          command: 'DROP COLUMN',
          description: 'Remove column',
          usage: 'ALTER TABLE name DROP COLUMN col_name',
          example: 'ALTER TABLE users DROP COLUMN phone;',
        },
        {
          command: 'MODIFY COLUMN',
          description: 'Change column type',
          usage: 'ALTER TABLE name MODIFY COLUMN col_name new_type',
          example: 'ALTER TABLE users MODIFY COLUMN age BIGINT;',
        },
        {
          command: 'RENAME COLUMN',
          description: 'Rename column',
          usage: 'ALTER TABLE name RENAME COLUMN old TO new',
          example: 'ALTER TABLE users RENAME COLUMN name TO full_name;',
        },
        {
          command: 'RENAME TABLE',
          description: 'Rename table',
          usage: 'ALTER TABLE old_name RENAME TO new_name',
          example: 'ALTER TABLE users RENAME TO customers;',
        },
      ],
    },
    {
      title: 'Constraints',
      commands: [
        {
          command: 'PRIMARY KEY',
          description: 'Primary key constraint',
          usage: 'col_name TYPE PRIMARY KEY',
          example: 'CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);',
        },
        {
          command: 'FOREIGN KEY',
          description: 'Foreign key constraint',
          usage: 'FOREIGN KEY (col) REFERENCES table(col)',
          example: 'CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE\n);',
        },
        {
          command: 'UNIQUE',
          description: 'Unique constraint',
          usage: 'col_name TYPE UNIQUE',
          example: 'CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(255) UNIQUE\n);',
        },
        {
          command: 'NOT NULL',
          description: 'Not null constraint',
          usage: 'col_name TYPE NOT NULL',
          example: 'CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);',
        },
        {
          command: 'CHECK',
          description: 'Check constraint',
          usage: 'col_name TYPE CHECK (condition)',
          example: 'CREATE TABLE users (\n  id INT PRIMARY KEY,\n  age INT CHECK (age >= 0 AND age <= 120)\n);',
        },
        {
          command: 'DEFAULT',
          description: 'Default value',
          usage: 'col_name TYPE DEFAULT value',
          example: 'CREATE TABLE users (\n  id INT PRIMARY KEY,\n  status VARCHAR(20) DEFAULT \'active\',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);',
        },
      ],
    },
    {
      title: 'Indexes',
      commands: [
        {
          command: 'CREATE INDEX',
          description: 'Create index',
          usage: 'CREATE INDEX index_name ON table (column)',
          example: 'CREATE INDEX idx_users_email ON users(email);\nCREATE UNIQUE INDEX idx_users_username ON users(username);',
        },
        {
          command: 'CREATE INDEX (composite)',
          description: 'Multi-column index',
          usage: 'CREATE INDEX name ON table (col1, col2)',
          example: 'CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);',
        },
        {
          command: 'DROP INDEX',
          description: 'Remove index',
          usage: 'DROP INDEX index_name ON table',
          example: 'DROP INDEX idx_users_email ON users;',
        },
      ],
    },
    {
      title: 'String Functions',
      commands: [
        {
          command: 'CONCAT',
          description: 'Concatenate strings',
          usage: 'CONCAT(str1, str2, ...)',
          example: 'SELECT CONCAT(first_name, \' \', last_name) AS full_name FROM users;',
        },
        {
          command: 'UPPER / LOWER',
          description: 'Change case',
          usage: 'UPPER(str) / LOWER(str)',
          example: 'SELECT UPPER(name) FROM users;\nSELECT LOWER(email) FROM users;',
        },
        {
          command: 'SUBSTRING',
          description: 'Extract substring',
          usage: 'SUBSTRING(str, start, length)',
          example: 'SELECT SUBSTRING(name, 1, 3) FROM users;',
        },
        {
          command: 'LENGTH',
          description: 'String length',
          usage: 'LENGTH(str)',
          example: 'SELECT name, LENGTH(name) as name_length FROM users;',
        },
        {
          command: 'TRIM / LTRIM / RTRIM',
          description: 'Remove whitespace',
          usage: 'TRIM(str)',
          example: 'SELECT TRIM(name) FROM users;\nSELECT LTRIM(name), RTRIM(name) FROM users;',
        },
        {
          command: 'REPLACE',
          description: 'Replace substring',
          usage: 'REPLACE(str, find, replace)',
          example: 'SELECT REPLACE(email, \'@gmail.com\', \'@example.com\') FROM users;',
        },
      ],
    },
    {
      title: 'Date/Time Functions',
      commands: [
        {
          command: 'NOW / CURRENT_TIMESTAMP',
          description: 'Current date and time',
          usage: 'NOW() / CURRENT_TIMESTAMP',
          example: 'SELECT NOW();\nINSERT INTO logs (message, created_at) VALUES (\'Log entry\', NOW());',
        },
        {
          command: 'CURDATE / CURRENT_DATE',
          description: 'Current date',
          usage: 'CURDATE() / CURRENT_DATE',
          example: 'SELECT * FROM orders WHERE order_date = CURDATE();',
        },
        {
          command: 'DATE_ADD / DATE_SUB',
          description: 'Add/subtract dates',
          usage: 'DATE_ADD(date, INTERVAL value unit)',
          example: 'SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);\nSELECT * FROM users WHERE created_at > DATE_SUB(NOW(), INTERVAL 30 DAY);',
        },
        {
          command: 'DATEDIFF',
          description: 'Difference between dates',
          usage: 'DATEDIFF(date1, date2)',
          example: 'SELECT name, DATEDIFF(NOW(), created_at) as days_old FROM users;',
        },
        {
          command: 'YEAR / MONTH / DAY',
          description: 'Extract date parts',
          usage: 'YEAR(date) / MONTH(date) / DAY(date)',
          example: 'SELECT YEAR(created_at) as year, COUNT(*) FROM users GROUP BY year;',
        },
      ],
    },
    {
      title: 'Transactions',
      commands: [
        {
          command: 'START TRANSACTION',
          description: 'Begin transaction',
          usage: 'START TRANSACTION',
          example: 'START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
        },
        {
          command: 'COMMIT',
          description: 'Save transaction',
          usage: 'COMMIT',
          example: 'START TRANSACTION;\n-- SQL statements\nCOMMIT;',
        },
        {
          command: 'ROLLBACK',
          description: 'Cancel transaction',
          usage: 'ROLLBACK',
          example: 'START TRANSACTION;\nDELETE FROM users;\nROLLBACK;  -- Undo deletion',
        },
        {
          command: 'SAVEPOINT',
          description: 'Set savepoint',
          usage: 'SAVEPOINT savepoint_name',
          example: 'START TRANSACTION;\nUPDATE users SET age = 30 WHERE id = 1;\nSAVEPOINT sp1;\nDELETE FROM users WHERE id = 2;\nROLLBACK TO sp1;  -- Undo delete only\nCOMMIT;',
        },
      ],
    },
    {
      title: 'Views',
      commands: [
        {
          command: 'CREATE VIEW',
          description: 'Create virtual table',
          usage: 'CREATE VIEW name AS SELECT ...',
          example: 'CREATE VIEW active_users AS\nSELECT id, name, email\nFROM users\nWHERE status = \'active\';',
        },
        {
          command: 'DROP VIEW',
          description: 'Remove view',
          usage: 'DROP VIEW view_name',
          example: 'DROP VIEW active_users;',
        },
        {
          command: 'ALTER VIEW',
          description: 'Modify view',
          usage: 'ALTER VIEW name AS SELECT ...',
          example: 'ALTER VIEW active_users AS\nSELECT id, name, email, created_at\nFROM users\nWHERE status = \'active\';',
        },
      ],
    },
    {
      title: 'Common Table Expressions (CTE)',
      commands: [
        {
          command: 'WITH (CTE)',
          description: 'Temporary named result set',
          usage: 'WITH cte_name AS (SELECT ...) SELECT ... FROM cte_name',
          example: 'WITH high_value_customers AS (\n  SELECT user_id, SUM(total) as total_spent\n  FROM orders\n  GROUP BY user_id\n  HAVING total_spent > 1000\n)\nSELECT users.name, high_value_customers.total_spent\nFROM users\nJOIN high_value_customers ON users.id = high_value_customers.user_id;',
        },
        {
          command: 'Recursive CTE',
          description: 'Self-referencing CTE',
          usage: 'WITH RECURSIVE cte AS (... UNION ALL ...) SELECT...',
          example: 'WITH RECURSIVE employee_hierarchy AS (\n  SELECT id, name, manager_id, 1 as level\n  FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id, eh.level + 1\n  FROM employees e\n  JOIN employee_hierarchy eh ON e.manager_id = eh.id\n)\nSELECT * FROM employee_hierarchy;',
        },
      ],
    },
    {
      title: 'Window Functions',
      commands: [
        {
          command: 'ROW_NUMBER()',
          description: 'Assign row numbers',
          usage: 'ROW_NUMBER() OVER (ORDER BY col)',
          example: 'SELECT name, salary,\n  ROW_NUMBER() OVER (ORDER BY salary DESC) as rank\nFROM employees;',
        },
        {
          command: 'RANK() / DENSE_RANK()',
          description: 'Rank rows',
          usage: 'RANK() OVER (ORDER BY col)',
          example: 'SELECT name, score,\n  RANK() OVER (ORDER BY score DESC) as rank,\n  DENSE_RANK() OVER (ORDER BY score DESC) as dense_rank\nFROM students;',
        },
        {
          command: 'PARTITION BY',
          description: 'Window per group',
          usage: 'OVER (PARTITION BY col ORDER BY col)',
          example: 'SELECT department, name, salary,\n  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank\nFROM employees;',
        },
        {
          command: 'LAG / LEAD',
          description: 'Access previous/next row',
          usage: 'LAG(col, offset) OVER (ORDER BY col)',
          example: 'SELECT date, revenue,\n  LAG(revenue, 1) OVER (ORDER BY date) as prev_day_revenue,\n  LEAD(revenue, 1) OVER (ORDER BY date) as next_day_revenue\nFROM daily_sales;',
        },
        {
          command: 'FIRST_VALUE / LAST_VALUE',
          description: 'First/last value in window',
          usage: 'FIRST_VALUE(col) OVER (PARTITION BY ... ORDER BY ...)',
          example: 'SELECT department, employee, salary,\n  FIRST_VALUE(salary) OVER (PARTITION BY department ORDER BY salary DESC) as highest_salary\nFROM employees;',
        },
        {
          command: 'SUM / AVG OVER',
          description: 'Running totals and averages',
          usage: 'SUM(col) OVER (ORDER BY col)',
          example: 'SELECT date, sales,\n  SUM(sales) OVER (ORDER BY date) as running_total,\n  AVG(sales) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_avg_7days\nFROM daily_sales;',
        },
      ],
    },
    {
      title: 'Set Operations',
      commands: [
        {
          command: 'UNION',
          description: 'Combine results (distinct)',
          usage: 'SELECT ... UNION SELECT ...',
          example: 'SELECT name FROM employees\nUNION\nSELECT name FROM contractors;\n\n-- Removes duplicates',
        },
        {
          command: 'UNION ALL',
          description: 'Combine results (all rows)',
          usage: 'SELECT ... UNION ALL SELECT ...',
          example: 'SELECT name FROM employees\nUNION ALL\nSELECT name FROM contractors;\n\n-- Keeps duplicates, faster',
        },
        {
          command: 'INTERSECT',
          description: 'Common rows from both queries',
          usage: 'SELECT ... INTERSECT SELECT ...',
          example: 'SELECT email FROM users\nINTERSECT\nSELECT email FROM subscribers;\n\n-- Returns emails in both tables',
        },
        {
          command: 'EXCEPT / MINUS',
          description: 'Rows in first query but not in second',
          usage: 'SELECT ... EXCEPT SELECT ...',
          example: 'SELECT email FROM users\nEXCEPT\nSELECT email FROM unsubscribed;\n\n-- Users who haven\'t unsubscribed',
        },
      ],
    },
    {
      title: 'CASE Expressions',
      commands: [
        {
          command: 'CASE WHEN',
          description: 'Conditional logic',
          usage: 'CASE WHEN condition THEN result END',
          example: 'SELECT name,\n  CASE\n    WHEN age < 18 THEN \'Minor\'\n    WHEN age >= 18 AND age < 65 THEN \'Adult\'\n    ELSE \'Senior\'\n  END as age_group\nFROM users;',
        },
        {
          command: 'Simple CASE',
          description: 'Value matching',
          usage: 'CASE col WHEN val1 THEN result1 END',
          example: 'SELECT product,\n  CASE status\n    WHEN \'active\' THEN \'Available\'\n    WHEN \'pending\' THEN \'Coming Soon\'\n    WHEN \'discontinued\' THEN \'Not Available\'\n    ELSE \'Unknown\'\n  END as availability\nFROM products;',
        },
        {
          command: 'CASE in ORDER BY',
          description: 'Custom sorting',
          usage: 'ORDER BY CASE ... END',
          example: 'SELECT * FROM orders\nORDER BY\n  CASE status\n    WHEN \'urgent\' THEN 1\n    WHEN \'high\' THEN 2\n    WHEN \'normal\' THEN 3\n    ELSE 4\n  END;',
        },
      ],
    },
    {
      title: 'NULL Handling',
      commands: [
        {
          command: 'IS NULL / IS NOT NULL',
          description: 'Check for NULL values',
          usage: 'WHERE col IS NULL',
          example: 'SELECT * FROM users WHERE email IS NULL;\nSELECT * FROM orders WHERE shipped_date IS NOT NULL;',
        },
        {
          command: 'COALESCE',
          description: 'Return first non-NULL value',
          usage: 'COALESCE(val1, val2, default)',
          example: 'SELECT name, COALESCE(phone, email, \'No contact\') as contact\nFROM users;\n\nSELECT COALESCE(discount_price, regular_price) as final_price\nFROM products;',
        },
        {
          command: 'NULLIF',
          description: 'Return NULL if equal',
          usage: 'NULLIF(val1, val2)',
          example: 'SELECT name,\n  salary / NULLIF(hours_worked, 0) as hourly_rate\nFROM employees;\n\n-- Prevents division by zero',
        },
        {
          command: 'IFNULL / NVL',
          description: 'Replace NULL with value',
          usage: 'IFNULL(col, default)',
          example: 'SELECT name, IFNULL(bonus, 0) as bonus\nFROM employees;\n\n-- MySQL: IFNULL\n-- Oracle: NVL\n-- SQL Server: ISNULL',
        },
      ],
    },
    {
      title: 'Advanced WHERE Operators',
      commands: [
        {
          command: 'IN',
          description: 'Match any value in list',
          usage: 'WHERE col IN (val1, val2, ...)',
          example: 'SELECT * FROM users WHERE country IN (\'USA\', \'Canada\', \'Mexico\');\nSELECT * FROM products WHERE id IN (SELECT product_id FROM featured);',
        },
        {
          command: 'BETWEEN',
          description: 'Range check (inclusive)',
          usage: 'WHERE col BETWEEN min AND max',
          example: 'SELECT * FROM orders WHERE order_date BETWEEN \'2024-01-01\' AND \'2024-12-31\';\nSELECT * FROM products WHERE price BETWEEN 10 AND 100;',
        },
        {
          command: 'LIKE',
          description: 'Pattern matching',
          usage: 'WHERE col LIKE pattern',
          example: 'SELECT * FROM users WHERE email LIKE \'%@gmail.com\';\nSELECT * FROM products WHERE name LIKE \'Apple%\';\n\n-- % = any characters\n-- _ = single character',
        },
        {
          command: 'REGEXP / RLIKE',
          description: 'Regular expression matching',
          usage: 'WHERE col REGEXP pattern',
          example: 'SELECT * FROM users WHERE email REGEXP \'^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]+$\';\nSELECT * FROM products WHERE sku RLIKE \'^[A-Z]{3}-[0-9]{4}$\';',
        },
        {
          command: 'ANY / ALL',
          description: 'Compare to subquery results',
          usage: 'WHERE col > ANY (subquery)',
          example: 'SELECT * FROM products\nWHERE price > ANY (SELECT price FROM products WHERE category = \'Electronics\');\n\nSELECT * FROM employees\nWHERE salary > ALL (SELECT salary FROM employees WHERE department = \'Sales\');',
        },
      ],
    },
    {
      title: 'CAST & Type Conversion',
      commands: [
        {
          command: 'CAST',
          description: 'Convert data type',
          usage: 'CAST(value AS type)',
          example: 'SELECT CAST(\'123\' AS INTEGER);\nSELECT CAST(price AS DECIMAL(10,2)) FROM products;\nSELECT CAST(order_date AS VARCHAR) FROM orders;',
        },
        {
          command: 'CONVERT',
          description: 'Convert data type (SQL Server)',
          usage: 'CONVERT(type, value)',
          example: 'SELECT CONVERT(VARCHAR, order_date, 101) as formatted_date FROM orders;\n-- 101 = mm/dd/yyyy format',
        },
        {
          command: '::',
          description: 'PostgreSQL type cast',
          usage: 'value::type',
          example: 'SELECT \'123\'::INTEGER;\nSELECT price::DECIMAL(10,2) FROM products;\nSELECT NOW()::DATE;',
        },
      ],
    },
    {
      title: 'Numeric Functions',
      commands: [
        {
          command: 'ROUND / FLOOR / CEILING',
          description: 'Rounding functions',
          usage: 'ROUND(num, decimals)',
          example: 'SELECT ROUND(123.456, 2);  -- 123.46\nSELECT FLOOR(123.456);      -- 123\nSELECT CEILING(123.456);    -- 124',
        },
        {
          command: 'ABS',
          description: 'Absolute value',
          usage: 'ABS(number)',
          example: 'SELECT ABS(-15);  -- 15\nSELECT ABS(difference) FROM comparisons;',
        },
        {
          command: 'MOD',
          description: 'Modulo (remainder)',
          usage: 'MOD(dividend, divisor)',
          example: 'SELECT MOD(10, 3);  -- 1\nSELECT * FROM orders WHERE MOD(id, 2) = 0;  -- Even IDs',
        },
        {
          command: 'POWER / SQRT',
          description: 'Power and square root',
          usage: 'POWER(base, exponent) / SQRT(number)',
          example: 'SELECT POWER(2, 3);  -- 8\nSELECT SQRT(16);      -- 4',
        },
        {
          command: 'RANDOM / RAND',
          description: 'Generate random number',
          usage: 'RANDOM() / RAND()',
          example: 'SELECT RANDOM();  -- PostgreSQL\nSELECT RAND();    -- MySQL\n\nSELECT * FROM users ORDER BY RANDOM() LIMIT 10;  -- Random 10 users',
        },
      ],
    },
    {
      title: 'JSON Functions (SQL:2016+)',
      commands: [
        {
          command: 'JSON_EXTRACT',
          description: 'Extract JSON value',
          usage: 'JSON_EXTRACT(json_col, path)',
          example: 'SELECT JSON_EXTRACT(data, \'$.name\') as name FROM users;\nSELECT data->\'$.email\' as email FROM users;  -- MySQL shorthand',
        },
        {
          command: 'JSON_OBJECT',
          description: 'Create JSON object',
          usage: 'JSON_OBJECT(key, value, ...)',
          example: 'SELECT JSON_OBJECT(\n  \'id\', id,\n  \'name\', name,\n  \'email\', email\n) as user_json\nFROM users;',
        },
        {
          command: 'JSON_ARRAY',
          description: 'Create JSON array',
          usage: 'JSON_ARRAY(value1, value2, ...)',
          example: 'SELECT JSON_ARRAY(id, name, email) as user_array FROM users;',
        },
        {
          command: 'JSON_AGG (PostgreSQL)',
          description: 'Aggregate to JSON array',
          usage: 'JSON_AGG(expression)',
          example: 'SELECT\n  department,\n  JSON_AGG(JSON_BUILD_OBJECT(\'name\', name, \'salary\', salary)) as employees\nFROM employees\nGROUP BY department;',
        },
      ],
    },
    {
      title: 'MERGE / UPSERT',
      commands: [
        {
          command: 'MERGE (SQL Server)',
          description: 'Insert, update, or delete',
          usage: 'MERGE INTO target USING source ON condition',
          example: 'MERGE INTO products AS target\nUSING new_products AS source\nON target.id = source.id\nWHEN MATCHED THEN\n  UPDATE SET price = source.price\nWHEN NOT MATCHED THEN\n  INSERT (id, name, price) VALUES (source.id, source.name, source.price);',
        },
        {
          command: 'ON CONFLICT (PostgreSQL)',
          description: 'Upsert - insert or update',
          usage: 'INSERT ... ON CONFLICT DO UPDATE',
          example: 'INSERT INTO users (id, name, email)\nVALUES (1, \'John\', \'john@example.com\')\nON CONFLICT (id) DO UPDATE\nSET name = EXCLUDED.name, email = EXCLUDED.email;',
        },
        {
          command: 'INSERT ... ON DUPLICATE KEY (MySQL)',
          description: 'Upsert - MySQL style',
          usage: 'INSERT ... ON DUPLICATE KEY UPDATE',
          example: 'INSERT INTO users (id, name, visits)\nVALUES (1, \'John\', 1)\nON DUPLICATE KEY UPDATE visits = visits + 1;',
        },
        {
          command: 'REPLACE (MySQL)',
          description: 'Delete and insert',
          usage: 'REPLACE INTO table VALUES ...',
          example: 'REPLACE INTO users (id, name, email)\nVALUES (1, \'John\', \'john@example.com\');\n\n-- Deletes existing row and inserts new one',
        },
      ],
    },
    {
      title: 'Stored Procedures',
      commands: [
        {
          command: 'CREATE PROCEDURE',
          description: 'Create stored procedure',
          usage: 'CREATE PROCEDURE name (params) AS BEGIN ... END',
          example: 'CREATE PROCEDURE GetUserOrders(@user_id INT)\nAS\nBEGIN\n  SELECT * FROM orders WHERE user_id = @user_id;\nEND;\n\n-- Call: EXEC GetUserOrders 123;',
        },
        {
          command: 'CREATE FUNCTION',
          description: 'Create user-defined function',
          usage: 'CREATE FUNCTION name (params) RETURNS type',
          example: 'CREATE FUNCTION CalculateTotal(@price DECIMAL, @tax DECIMAL)\nRETURNS DECIMAL\nAS\nBEGIN\n  RETURN @price * (1 + @tax);\nEND;\n\n-- Use: SELECT dbo.CalculateTotal(100, 0.08);',
        },
        {
          command: 'DECLARE / SET',
          description: 'Variable declaration',
          usage: 'DECLARE @var type; SET @var = value;',
          example: 'DECLARE @total INT;\nSET @total = (SELECT COUNT(*) FROM users);\nSELECT @total as user_count;',
        },
        {
          command: 'IF...ELSE',
          description: 'Conditional logic in procedures',
          usage: 'IF condition BEGIN ... END ELSE BEGIN ... END',
          example: 'IF EXISTS (SELECT 1 FROM users WHERE email = \'test@example.com\')\nBEGIN\n  SELECT \'User exists\';\nEND\nELSE\nBEGIN\n  INSERT INTO users (email) VALUES (\'test@example.com\');\nEND',
        },
      ],
    },
    {
      title: 'Triggers',
      commands: [
        {
          command: 'CREATE TRIGGER',
          description: 'Auto-execute on table changes',
          usage: 'CREATE TRIGGER name BEFORE/AFTER INSERT/UPDATE/DELETE',
          example: 'CREATE TRIGGER update_timestamp\nBEFORE UPDATE ON users\nFOR EACH ROW\nBEGIN\n  SET NEW.updated_at = NOW();\nEND;\n\n-- Automatically updates timestamp',
        },
        {
          command: 'AFTER INSERT trigger',
          description: 'Execute after insert',
          usage: 'CREATE TRIGGER name AFTER INSERT ON table',
          example: 'CREATE TRIGGER log_new_user\nAFTER INSERT ON users\nFOR EACH ROW\nBEGIN\n  INSERT INTO audit_log (action, user_id, timestamp)\n  VALUES (\'NEW_USER\', NEW.id, NOW());\nEND;',
        },
        {
          command: 'DROP TRIGGER',
          description: 'Remove trigger',
          usage: 'DROP TRIGGER trigger_name',
          example: 'DROP TRIGGER update_timestamp;',
        },
      ],
    },
    {
      title: 'Performance & Optimization',
      commands: [
        {
          command: 'EXPLAIN',
          description: 'Show query execution plan',
          usage: 'EXPLAIN SELECT ...',
          example: 'EXPLAIN SELECT * FROM users WHERE email = \'test@example.com\';\n\n-- Shows how database executes query',
        },
        {
          command: 'ANALYZE TABLE',
          description: 'Update table statistics',
          usage: 'ANALYZE TABLE table_name',
          example: 'ANALYZE TABLE users;\n\n-- Helps optimizer make better decisions',
        },
        {
          command: 'OPTIMIZE TABLE',
          description: 'Defragment and optimize table',
          usage: 'OPTIMIZE TABLE table_name',
          example: 'OPTIMIZE TABLE users;\n\n-- Reclaims unused space',
        },
        {
          command: 'Hints',
          description: 'Query optimizer hints',
          usage: 'SELECT /*+ INDEX(table index_name) */ ...',
          example: 'SELECT /*+ INDEX(users idx_email) */ * FROM users WHERE email = \'test@example.com\';\n\n-- Force index usage',
        },
      ],
    },
    {
      title: 'Database Administration',
      commands: [
        {
          command: 'SHOW DATABASES',
          description: 'List all databases',
          usage: 'SHOW DATABASES',
          example: 'SHOW DATABASES;\n\n-- MySQL/MariaDB',
        },
        {
          command: 'SHOW TABLES',
          description: 'List tables in database',
          usage: 'SHOW TABLES',
          example: 'SHOW TABLES;\nSHOW TABLES FROM database_name;',
        },
        {
          command: 'DESCRIBE / DESC',
          description: 'Show table structure',
          usage: 'DESCRIBE table_name',
          example: 'DESCRIBE users;\nDESC users;\n\n-- Shows columns, types, constraints',
        },
        {
          command: 'SHOW CREATE TABLE',
          description: 'Show CREATE TABLE statement',
          usage: 'SHOW CREATE TABLE table_name',
          example: 'SHOW CREATE TABLE users;\n\n-- Shows complete table definition',
        },
        {
          command: 'GRANT',
          description: 'Grant privileges',
          usage: 'GRANT privileges ON database.table TO user',
          example: 'GRANT SELECT, INSERT ON mydb.users TO \'webapp\'@\'localhost\';\nGRANT ALL PRIVILEGES ON mydb.* TO \'admin\'@\'%\';',
        },
        {
          command: 'REVOKE',
          description: 'Revoke privileges',
          usage: 'REVOKE privileges ON database.table FROM user',
          example: 'REVOKE INSERT ON mydb.users FROM \'webapp\'@\'localhost\';',
        },
      ],
    },
  ],
};
