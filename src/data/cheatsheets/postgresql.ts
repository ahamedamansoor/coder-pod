import { Database } from 'lucide-react';

export const postgresqlCheatsheet = {
  id: 'postgresql',
  name: 'PostgreSQL',
  description: 'Relational database SQL commands',
  icon: Database,
  colorTheme: 'blue' as const,
  sections: [
    {
      title: 'Database Operations',
      commands: [
        {
          command: '\\l',
          description: 'List all databases',
          usage: '\\l or \\list',
          example: '\\l\n# Lists all databases',
        },
        {
          command: '\\c',
          description: 'Connect to database',
          usage: '\\c database_name',
          example: '\\c myapp\n# Switch to myapp database',
        },
        {
          command: 'CREATE DATABASE',
          description: 'Create new database',
          usage: 'CREATE DATABASE name;',
          example: 'CREATE DATABASE myapp;',
        },
        {
          command: 'DROP DATABASE',
          description: 'Delete database',
          usage: 'DROP DATABASE name;',
          example: 'DROP DATABASE testdb;',
        },
      ],
    },
    {
      title: 'Table Operations',
      commands: [
        {
          command: '\\dt',
          description: 'List all tables',
          usage: '\\dt',
          example: '\\dt\n# Show all tables in current database',
        },
        {
          command: '\\d table',
          description: 'Describe table structure',
          usage: '\\d table_name',
          example: '\\d users\n# Show columns, types, constraints',
        },
        {
          command: 'CREATE TABLE',
          description: 'Create new table',
          usage: 'CREATE TABLE name (columns);',
          example: 'CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE,\n  created_at TIMESTAMP DEFAULT NOW()\n);',
        },
        {
          command: 'DROP TABLE',
          description: 'Delete table',
          usage: 'DROP TABLE name;',
          example: 'DROP TABLE users;\nDROP TABLE IF EXISTS temp_table;',
        },
        {
          command: 'ALTER TABLE',
          description: 'Modify table structure',
          usage: 'ALTER TABLE name action;',
          example: 'ALTER TABLE users ADD COLUMN age INTEGER;\nALTER TABLE users DROP COLUMN age;\nALTER TABLE users RENAME COLUMN name TO full_name;',
        },
      ],
    },
    {
      title: 'SELECT Queries',
      commands: [
        {
          command: 'SELECT *',
          description: 'Select all columns',
          usage: 'SELECT * FROM table;',
          example: 'SELECT * FROM users;',
        },
        {
          command: 'SELECT columns',
          description: 'Select specific columns',
          usage: 'SELECT col1, col2 FROM table;',
          example: 'SELECT name, email FROM users;',
        },
        {
          command: 'WHERE',
          description: 'Filter results',
          usage: 'SELECT * FROM table WHERE condition;',
          example: 'SELECT * FROM users WHERE age > 18;\nSELECT * FROM users WHERE status = \'active\' AND role = \'admin\';',
        },
        {
          command: 'ORDER BY',
          description: 'Sort results',
          usage: 'SELECT * FROM table ORDER BY col ASC/DESC;',
          example: 'SELECT * FROM users ORDER BY created_at DESC;\nSELECT * FROM users ORDER BY name ASC, age DESC;',
        },
        {
          command: 'LIMIT / OFFSET',
          description: 'Pagination',
          usage: 'SELECT * FROM table LIMIT n OFFSET m;',
          example: 'SELECT * FROM users LIMIT 10;\nSELECT * FROM users LIMIT 10 OFFSET 20;  -- Page 3',
        },
        {
          command: 'DISTINCT',
          description: 'Unique values',
          usage: 'SELECT DISTINCT col FROM table;',
          example: 'SELECT DISTINCT country FROM users;',
        },
        {
          command: 'AS (alias)',
          description: 'Column/table aliases',
          usage: 'SELECT col AS alias FROM table;',
          example: 'SELECT name AS full_name, COUNT(*) AS total\nFROM users u\nWHERE u.status = \'active\';',
        },
      ],
    },
    {
      title: 'INSERT, UPDATE, DELETE',
      commands: [
        {
          command: 'INSERT',
          description: 'Insert new row',
          usage: 'INSERT INTO table (cols) VALUES (vals);',
          example: 'INSERT INTO users (name, email) VALUES (\'John\', \'john@example.com\');\n\nINSERT INTO users (name, email) VALUES \n  (\'Alice\', \'alice@example.com\'),\n  (\'Bob\', \'bob@example.com\');',
        },
        {
          command: 'UPDATE',
          description: 'Update existing rows',
          usage: 'UPDATE table SET col=val WHERE condition;',
          example: 'UPDATE users SET age = 31 WHERE id = 1;\n\nUPDATE users SET status = \'inactive\'\nWHERE last_login < NOW() - INTERVAL \'1 year\';',
        },
        {
          command: 'DELETE',
          description: 'Delete rows',
          usage: 'DELETE FROM table WHERE condition;',
          example: 'DELETE FROM users WHERE id = 1;\n\nDELETE FROM sessions WHERE expires_at < NOW();',
        },
        {
          command: 'RETURNING',
          description: 'Return affected rows',
          usage: 'INSERT/UPDATE/DELETE ... RETURNING *;',
          example: 'INSERT INTO users (name, email) \nVALUES (\'John\', \'john@example.com\')\nRETURNING id, created_at;',
        },
      ],
    },
    {
      title: 'JOINs',
      commands: [
        {
          command: 'INNER JOIN',
          description: 'Match rows from both tables',
          usage: 'SELECT * FROM t1 INNER JOIN t2 ON t1.id = t2.fk;',
          example: 'SELECT u.name, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;',
        },
        {
          command: 'LEFT JOIN',
          description: 'All from left, matching from right',
          usage: 'SELECT * FROM t1 LEFT JOIN t2 ON t1.id = t2.fk;',
          example: 'SELECT u.name, COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id, u.name;',
        },
        {
          command: 'RIGHT JOIN',
          description: 'All from right, matching from left',
          usage: 'SELECT * FROM t1 RIGHT JOIN t2 ON t1.id = t2.fk;',
          example: 'SELECT * FROM orders o\nRIGHT JOIN users u ON o.user_id = u.id;',
        },
        {
          command: 'FULL OUTER JOIN',
          description: 'All rows from both tables',
          usage: 'SELECT * FROM t1 FULL OUTER JOIN t2 ON condition;',
          example: 'SELECT * FROM users u\nFULL OUTER JOIN orders o ON u.id = o.user_id;',
        },
      ],
    },
    {
      title: 'Aggregation Functions',
      commands: [
        {
          command: 'COUNT',
          description: 'Count rows',
          usage: 'SELECT COUNT(*) FROM table;',
          example: 'SELECT COUNT(*) FROM users;\nSELECT COUNT(DISTINCT country) FROM users;',
        },
        {
          command: 'SUM, AVG',
          description: 'Sum and Average',
          usage: 'SELECT SUM(col), AVG(col) FROM table;',
          example: 'SELECT SUM(amount) as total, AVG(amount) as average\nFROM orders\nWHERE status = \'completed\';',
        },
        {
          command: 'MIN, MAX',
          description: 'Minimum and Maximum',
          usage: 'SELECT MIN(col), MAX(col) FROM table;',
          example: 'SELECT MIN(age), MAX(age) FROM users;',
        },
        {
          command: 'GROUP BY',
          description: 'Group results',
          usage: 'SELECT col, COUNT(*) FROM table GROUP BY col;',
          example: 'SELECT country, COUNT(*) as user_count\nFROM users\nGROUP BY country\nORDER BY user_count DESC;',
        },
        {
          command: 'HAVING',
          description: 'Filter grouped results',
          usage: 'SELECT col, COUNT(*) FROM table GROUP BY col HAVING condition;',
          example: 'SELECT category, COUNT(*) as total\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 10;',
        },
      ],
    },
    {
      title: 'Indexes',
      commands: [
        {
          command: 'CREATE INDEX',
          description: 'Create index',
          usage: 'CREATE INDEX name ON table (column);',
          example: 'CREATE INDEX idx_users_email ON users(email);\n\nCREATE UNIQUE INDEX idx_users_email ON users(email);',
        },
        {
          command: 'CREATE INDEX (composite)',
          description: 'Multi-column index',
          usage: 'CREATE INDEX name ON table (col1, col2);',
          example: 'CREATE INDEX idx_orders_user_date \nON orders(user_id, created_at);',
        },
        {
          command: 'DROP INDEX',
          description: 'Delete index',
          usage: 'DROP INDEX name;',
          example: 'DROP INDEX idx_users_email;',
        },
        {
          command: '\\di',
          description: 'List indexes',
          usage: '\\di',
          example: '\\di\n# Show all indexes',
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
          example: 'CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100)\n);',
        },
        {
          command: 'FOREIGN KEY',
          description: 'Foreign key constraint',
          usage: 'FOREIGN KEY (col) REFERENCES table(col)',
          example: 'CREATE TABLE orders (\n  id SERIAL PRIMARY KEY,\n  user_id INTEGER,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE\n);',
        },
        {
          command: 'UNIQUE',
          description: 'Unique constraint',
          usage: 'col_name TYPE UNIQUE',
          example: 'CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE\n);',
        },
        {
          command: 'NOT NULL',
          description: 'Not null constraint',
          usage: 'col_name TYPE NOT NULL',
          example: 'CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);',
        },
        {
          command: 'CHECK',
          description: 'Check constraint',
          usage: 'col_name TYPE CHECK (condition)',
          example: 'CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  age INTEGER CHECK (age >= 0 AND age <= 120)\n);',
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
          example: 'SELECT CONCAT(first_name, \' \', last_name) as full_name\nFROM users;',
        },
        {
          command: 'LIKE / ILIKE',
          description: 'Pattern matching',
          usage: 'col LIKE \'pattern\' / ILIKE \'pattern\'',
          example: 'SELECT * FROM users WHERE email LIKE \'%@gmail.com\';\nSELECT * FROM users WHERE name ILIKE \'john%\';  -- Case insensitive',
        },
        {
          command: 'LOWER / UPPER',
          description: 'Change case',
          usage: 'LOWER(col) / UPPER(col)',
          example: 'SELECT LOWER(email) FROM users;\nSELECT UPPER(name) FROM users;',
        },
        {
          command: 'TRIM',
          description: 'Remove whitespace',
          usage: 'TRIM(col)',
          example: 'SELECT TRIM(name) FROM users;',
        },
      ],
    },
    {
      title: 'Date & Time Functions',
      commands: [
        {
          command: 'NOW()',
          description: 'Current timestamp',
          usage: 'NOW()',
          example: 'SELECT NOW();\nINSERT INTO logs (created_at) VALUES (NOW());',
        },
        {
          command: 'CURRENT_DATE',
          description: 'Current date',
          usage: 'CURRENT_DATE',
          example: 'SELECT CURRENT_DATE;\nSELECT * FROM orders WHERE date = CURRENT_DATE;',
        },
        {
          command: 'INTERVAL',
          description: 'Date arithmetic',
          usage: 'date + INTERVAL \'value unit\'',
          example: 'SELECT NOW() + INTERVAL \'7 days\';\nSELECT * FROM users \nWHERE created_at > NOW() - INTERVAL \'30 days\';',
        },
        {
          command: 'EXTRACT',
          description: 'Extract date parts',
          usage: 'EXTRACT(part FROM date)',
          example: 'SELECT EXTRACT(YEAR FROM created_at) as year,\n       EXTRACT(MONTH FROM created_at) as month\nFROM users;',
        },
        {
          command: 'AGE',
          description: 'Calculate age/difference',
          usage: 'AGE(timestamp)',
          example: 'SELECT name, AGE(NOW(), created_at) as account_age\nFROM users;',
        },
      ],
    },
    {
      title: 'Transactions',
      commands: [
        {
          command: 'BEGIN',
          description: 'Start transaction',
          usage: 'BEGIN;',
          example: 'BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
        },
        {
          command: 'COMMIT',
          description: 'Save transaction',
          usage: 'COMMIT;',
          example: 'BEGIN;\n-- SQL statements\nCOMMIT;',
        },
        {
          command: 'ROLLBACK',
          description: 'Cancel transaction',
          usage: 'ROLLBACK;',
          example: 'BEGIN;\nDELETE FROM users;\nROLLBACK;  -- Undo deletion',
        },
        {
          command: 'SAVEPOINT',
          description: 'Set savepoint',
          usage: 'SAVEPOINT name;',
          example: 'BEGIN;\nUPDATE users SET age = 30 WHERE id = 1;\nSAVEPOINT sp1;\nDELETE FROM users WHERE id = 2;\nROLLBACK TO sp1;  -- Undo delete only\nCOMMIT;',
        },
      ],
    },
    {
      title: 'User & Permissions',
      commands: [
        {
          command: 'CREATE USER',
          description: 'Create new user',
          usage: 'CREATE USER name WITH PASSWORD \'password\';',
          example: 'CREATE USER appuser WITH PASSWORD \'secret123\';',
        },
        {
          command: 'GRANT',
          description: 'Grant permissions',
          usage: 'GRANT privileges ON object TO user;',
          example: 'GRANT ALL PRIVILEGES ON DATABASE myapp TO appuser;\nGRANT SELECT, INSERT ON users TO readonly_user;',
        },
        {
          command: 'REVOKE',
          description: 'Revoke permissions',
          usage: 'REVOKE privileges ON object FROM user;',
          example: 'REVOKE ALL PRIVILEGES ON DATABASE myapp FROM appuser;',
        },
        {
          command: '\\du',
          description: 'List users/roles',
          usage: '\\du',
          example: '\\du\n# Show all users and roles',
        },
      ],
    },
    {
      title: 'Backup & Restore',
      commands: [
        {
          command: 'pg_dump',
          description: 'Backup database',
          usage: 'pg_dump dbname > file.sql',
          example: 'pg_dump myapp > backup.sql\npg_dump -U postgres -h localhost myapp > backup.sql',
        },
        {
          command: 'pg_restore',
          description: 'Restore database',
          usage: 'pg_restore -d dbname file',
          example: 'pg_restore -d myapp backup.dump',
        },
        {
          command: 'psql < file',
          description: 'Execute SQL file',
          usage: 'psql dbname < file.sql',
          example: 'psql myapp < backup.sql',
        },
      ],
    },
    {
      title: 'Useful psql Commands',
      commands: [
        {
          command: '\\?',
          description: 'Help on psql commands',
          usage: '\\?',
          example: '\\?\n# Show all psql commands',
        },
        {
          command: '\\h',
          description: 'Help on SQL commands',
          usage: '\\h COMMAND',
          example: '\\h SELECT\n\\h CREATE TABLE',
        },
        {
          command: '\\q',
          description: 'Quit psql',
          usage: '\\q',
          example: '\\q',
        },
        {
          command: '\\timing',
          description: 'Toggle query timing',
          usage: '\\timing',
          example: '\\timing\nSELECT * FROM large_table;\n# Shows execution time',
        },
        {
          command: '\\x',
          description: 'Toggle expanded display',
          usage: '\\x',
          example: '\\x\nSELECT * FROM users WHERE id = 1;\n# Vertical output format',
        },
      ],
    },
  ],
};
