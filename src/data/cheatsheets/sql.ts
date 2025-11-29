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
      ],
    },
  ],
};
