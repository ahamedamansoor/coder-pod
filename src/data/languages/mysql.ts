import type { Language } from './types';

export const mysql: Language = {
  slug: 'mysql',
  name: 'MySQL',
  description: 'Master MySQL from fundamentals to expert-level database administration',
  topics: [
    // Learning plan topic (required)
    { 
      slug: 'learning-plan', 
      title: 'Learning Plan', 
      explanation: 'A comprehensive roadmap to master MySQL from basics to expert-level database administration.' 
    },

    // 1. MYSQL FUNDAMENTALS
    // 1.1 What is MySQL?
    { 
      slug: 'what-is-mysql', 
      title: 'What is MySQL?', 
      explanation: 'Introduction to MySQL, its history, features, ecosystem, and use cases in modern applications.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'database-basics', 
      title: 'Database Fundamentals', 
      explanation: 'Understanding databases, tables, records, fields, relationships, and basic database concepts.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'mysql-installation', 
      title: 'MySQL Installation & Setup', 
      explanation: 'Installing MySQL on Windows, macOS, Linux, Docker, initial configuration, and basic setup.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'mysql-clients-tools', 
      title: 'MySQL Clients & Tools', 
      explanation: 'Command-line client, MySQL Workbench, DBeaver, TablePlus, phpMyAdmin, and other GUI tools.', 
      category: '1. MySQL Fundamentals' 
    },

    // 1.2 Basic SQL
    { 
      slug: 'basic-sql-syntax', 
      title: 'Basic SQL Syntax', 
      explanation: 'SQL fundamentals, SELECT, INSERT, UPDATE, DELETE statements, operators, and basic clauses.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'filtering-expressions', 
      title: 'Filtering & Expressions', 
      explanation: 'AND/OR/NOT operators, LIKE pattern matching, BETWEEN ranges, IN lists, CASE statements, COALESCE.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'data-types-constraints', 
      title: 'Data Types & Constraints', 
      explanation: 'MySQL data types (numeric, string, date/time), constraints, and data validation best practices.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'creating-databases-tables', 
      title: 'Creating Databases & Tables', 
      explanation: 'CREATE DATABASE, CREATE TABLE, ALTER TABLE, table options, storage engines, and management.', 
      category: '1. MySQL Fundamentals' 
    },

    // 1.3 Core Querying
    { 
      slug: 'string-functions', 
      title: 'String Functions', 
      explanation: 'CONCAT, SUBSTRING, REPLACE, UPPER/LOWER, LENGTH, and string manipulation functions.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'date-time-functions', 
      title: 'Date & Time Functions', 
      explanation: 'NOW, DATE_FORMAT, DATEDIFF, date arithmetic, and time-based queries.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'aggregation-functions', 
      title: 'Aggregation Functions', 
      explanation: 'COUNT, SUM, AVG, MAX, MIN, GROUP BY, HAVING clauses for data analysis and reporting.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'basic-joins', 
      title: 'Understanding JOINs', 
      explanation: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, self-joins, cross joins, and practical join scenarios.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'subqueries', 
      title: 'Subqueries & Nested Queries', 
      explanation: 'Scalar subqueries, row subqueries, correlated subqueries, EXISTS, IN, and ANY/ALL operators.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'sql-execution-order', 
      title: 'SQL Query Execution Order', 
      explanation: 'Understanding how MySQL processes queries: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'database-sharding', 
      title: 'Database Sharding', 
      explanation: 'Horizontal scaling strategy: distributing data across multiple database servers for improved performance and scalability.', 
      category: '2. MySQL Advanced' 
    },
    { 
      slug: 'null-handling', 
      title: 'NULL Handling', 
      explanation: 'Understanding NULL values, COALESCE, IFNULL, NULLIF, and NULL-safe comparisons.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'views', 
      title: 'Views', 
      explanation: 'Creating and managing views for simplified data access, security, and data abstraction.', 
      category: '1. MySQL Fundamentals' 
    },
    { 
      slug: 'set-operations', 
      title: 'Set Operations', 
      explanation: 'UNION, UNION ALL, INTERSECT, EXCEPT for combining results from multiple queries.', 
      category: '1. MySQL Fundamentals' 
    },

    // 2. RELATIONAL DATABASE DESIGN
    // 2.1 Relationships
    { 
      slug: 'relationships-foreign-keys', 
      title: 'Relationships & Foreign Keys', 
      explanation: 'Primary keys, foreign keys, referential integrity, cascade operations, and relationship types.', 
      category: '2. Relational Database Design' 
    },
    { 
      slug: 'data-integrity', 
      title: 'Data Integrity & Validation', 
      explanation: 'Constraints, triggers, check constraints, and ensuring data quality.', 
      category: '2. Relational Database Design' 
    },

    // 2.2 Modeling
    { 
      slug: 'database-modeling', 
      title: 'Database Modeling', 
      explanation: 'ER diagrams, conceptual, logical, and physical database design methodologies.', 
      category: '2. Relational Database Design' 
    },
    { 
      slug: 'database-design-principles', 
      title: 'Database Design Principles', 
      explanation: 'Normalization (1NF, 2NF, 3NF, BCNF), denormalization strategies, and design patterns.', 
      category: '2. Relational Database Design' 
    },

    // 2.3 Storage & Access
    { 
      slug: 'indexes-basics', 
      title: 'Understanding Indexes', 
      explanation: 'Index concepts, B-tree indexes, when to use indexes, index types, and basic performance tuning.', 
      category: '2. Relational Database Design' 
    },
    { 
      slug: 'table-partitioning', 
      title: 'Table Partitioning Basics', 
      explanation: 'Range, list, hash partitioning, subpartitioning, and when to partition tables.', 
      category: '2. Relational Database Design' 
    },

    // 3. TRANSACTIONS & CONCURRENCY
    // 3.1 Transaction Fundamentals
    { 
      slug: 'transactions', 
      title: 'Transactions', 
      explanation: 'ACID properties, COMMIT, ROLLBACK, SAVEPOINT, isolation levels, deadlocks, and transaction management.', 
      category: '3. Transactions & Concurrency' 
    },
    { 
      slug: 'acid-properties', 
      title: 'ACID Properties', 
      explanation: 'Atomicity, Consistency, Isolation, Durability - the four properties ensuring reliable transactions.', 
      category: '3. Transactions & Concurrency' 
    },
    { 
      slug: 'commit-rollback', 
      title: 'COMMIT & ROLLBACK', 
      explanation: 'Saving changes permanently and undoing uncommitted changes in transactions.', 
      category: '3. Transactions & Concurrency' 
    },
    { 
      slug: 'savepoints', 
      title: 'SAVEPOINT', 
      explanation: 'Creating named savepoints within transactions for partial rollback capabilities.', 
      category: '3. Transactions & Concurrency' 
    },

    // 3.2 Concurrency
    { 
      slug: 'isolation-levels', 
      title: 'Isolation Levels', 
      explanation: 'READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE and their trade-offs.', 
      category: '3. Transactions & Concurrency' 
    },
    { 
      slug: 'locking', 
      title: 'Locking', 
      explanation: 'Shared locks, exclusive locks, row-level locks, table-level locks, and lock management.', 
      category: '3. Transactions & Concurrency' 
    },
    { 
      slug: 'deadlocks', 
      title: 'Deadlocks', 
      explanation: 'Understanding deadlocks, detection, prevention, and handling strategies.', 
      category: '3. Transactions & Concurrency' 
    },
    { 
      slug: 'mvcc', 
      title: 'MVCC', 
      explanation: 'Multi-Version Concurrency Control for handling concurrent access without locking.', 
      category: '3. Transactions & Concurrency' 
    },

    // 4. ADVANCED SQL
    // 4.1 Advanced Querying
    { 
      slug: 'advanced-joins', 
      title: 'Advanced JOIN Techniques', 
      explanation: 'Self-joins, cross joins, natural joins, conditional joins, and complex join strategies.', 
      category: '4. Advanced SQL' 
    },
    { 
      slug: 'advanced-subqueries', 
      title: 'Advanced Subquery Techniques', 
      explanation: 'Correlated subqueries, derived tables, lateral joins, and optimization strategies.', 
      category: '4. Advanced SQL' 
    },
    { 
      slug: 'conditional-expressions', 
      title: 'Conditional Expressions', 
      explanation: 'CASE statements, IF/IFNULL, COALESCE, NULLIF, and conditional logic in SQL.', 
      category: '4. Advanced SQL' 
    },

    // 4.2 Analytics
    { 
      slug: 'window-functions', 
      title: 'Window Functions', 
      explanation: 'ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, window frames, and analytical queries.', 
      category: '4. Advanced SQL' 
    },
    { 
      slug: 'common-table-expressions', 
      title: 'CTEs & Recursive Queries', 
      explanation: 'WITH clauses, recursive CTEs, hierarchical data queries, and complex reporting.', 
      category: '4. Advanced SQL' 
    },

    // 4.3 Database Programming
    { 
      slug: 'stored-procedures', 
      title: 'Stored Procedures', 
      explanation: 'Creating, calling, parameters, error handling, and managing stored procedures for business logic.', 
      category: '4. Advanced SQL' 
    },
    { 
      slug: 'user-defined-functions', 
      title: 'User-Defined Functions', 
      explanation: 'Creating custom functions, complex calculations, data transformation, and UDF best practices.', 
      category: '4. Advanced SQL' 
    },
    { 
      slug: 'triggers-events', 
      title: 'Triggers & Events', 
      explanation: 'BEFORE/AFTER triggers, scheduled events, automation, and database-level operations.', 
      category: '4. Advanced SQL' 
    },

    // 5. PERFORMANCE & OPTIMIZATION
    // 5.1 Query Performance
    { 
      slug: 'query-optimization', 
      title: 'Query Optimization', 
      explanation: 'EXPLAIN plans, query execution analysis, and optimization techniques.', 
      category: '5. Performance & Optimization' 
    },
    { 
      slug: 'slow-query-log', 
      title: 'Slow Query Analysis', 
      explanation: 'Slow query log, performance schema, and query profiling.', 
      category: '5. Performance & Optimization' 
    },

    // 5.2 Indexing
    { 
      slug: 'index-strategies', 
      title: 'Advanced Indexing', 
      explanation: 'Composite indexes, covering indexes, functional indexes, and index tuning.', 
      category: '5. Performance & Optimization' 
    },

    // 5.3 Server Tuning
    { 
      slug: 'mysql-configuration', 
      title: 'MySQL Configuration', 
      explanation: 'my.cnf optimization, memory management, and server tuning.', 
      category: '5. Performance & Optimization' 
    },
    { 
      slug: 'caching-strategies', 
      title: 'Caching Strategies', 
      explanation: 'Query cache, application-level caching, and performance optimization.', 
      category: '5. Performance & Optimization' 
    },

    // 6. ADMINISTRATION & SECURITY
    // 6.1 Security
    { 
      slug: 'user-management', 
      title: 'User Management', 
      explanation: 'Creating users, granting permissions, role-based access control.', 
      category: '6. Administration & Security' 
    },
    { 
      slug: 'security-best-practices', 
      title: 'Security Best Practices', 
      explanation: 'SQL injection prevention, encryption, SSL/TLS, secure configurations.', 
      category: '6. Administration & Security' 
    },
    { 
      slug: 'audit-logging', 
      title: 'Audit & Logging', 
      explanation: 'MySQL audit plugin, general query log, binary log, and security monitoring.', 
      category: '6. Administration & Security' 
    },

    // 6.2 Operations
    { 
      slug: 'backup-strategies', 
      title: 'Backup & Recovery', 
      explanation: 'mysqldump, physical backups, point-in-time recovery, backup automation.', 
      category: '6. Administration & Security' 
    },
    { 
      slug: 'maintenance-tasks', 
      title: 'Database Maintenance', 
      explanation: 'Routine maintenance, table optimization, check and repair operations.', 
      category: '6. Administration & Security' 
    },

    // 7. HIGH AVAILABILITY & REPLICATION
    { 
      slug: 'replication-concepts', 
      title: 'Replication Fundamentals', 
      explanation: 'Master-slave replication, binary logs, and replication concepts.', 
      category: '7. High Availability & Replication' 
    },
    { 
      slug: 'master-slave-setup', 
      title: 'Master-Slave Configuration', 
      explanation: 'Setting up replication, monitoring, failover, and troubleshooting.', 
      category: '7. High Availability & Replication' 
    },
    { 
      slug: 'master-master-replication', 
      title: 'Master-Master Replication', 
      explanation: 'Active-active replication, conflict resolution, and advanced setups.', 
      category: '7. High Availability & Replication' 
    },
    { 
      slug: 'mysql-innodb-cluster', 
      title: 'MySQL InnoDB Cluster', 
      explanation: 'Group Replication, MySQL Router, and automatic failover.', 
      category: '7. High Availability & Replication' 
    },
    { 
      slug: 'load-balancing', 
      title: 'Load Balancing', 
      explanation: 'HAProxy, ProxySQL, and database load balancing strategies.', 
      category: '7. High Availability & Replication' 
    },

    // 8. SCALING & DISTRIBUTED SYSTEMS
    { 
      slug: 'sharding-strategies', 
      title: 'Database Sharding', 
      explanation: 'Horizontal partitioning, sharding keys, and distributed database design.', 
      category: '8. Scaling & Distributed Systems' 
    },
    { 
      slug: 'read-write-splitting', 
      title: 'Read-Write Splitting', 
      explanation: 'Separating read and write operations for better performance.', 
      category: '8. Scaling & Distributed Systems' 
    },
    { 
      slug: 'connection-pooling', 
      title: 'Connection Pooling', 
      explanation: 'Managing database connections efficiently in applications.', 
      category: '8. Scaling & Distributed Systems' 
    },
    { 
      slug: 'distributed-transactions', 
      title: 'Distributed Transactions', 
      explanation: 'Two-phase commit, XA transactions, and distributed consistency.', 
      category: '8. Scaling & Distributed Systems' 
    },
    { 
      slug: 'mysql-cluster', 
      title: 'MySQL Cluster (NDB)', 
      explanation: 'High availability clustering, data nodes, and real-time replication.', 
      category: '8. Scaling & Distributed Systems' 
    },

    // 9. MYSQL ECOSYSTEM
    // Application Development
    { 
      slug: 'mysql-connectors', 
      title: 'MySQL Connectors', 
      explanation: 'JDBC, Python (mysql-connector), Node.js (mysql2), PHP drivers.', 
      category: '9. MySQL Ecosystem' 
    },
    { 
      slug: 'orm-frameworks', 
      title: 'ORM Frameworks', 
      explanation: 'Hibernate, Sequelize, SQLAlchemy, TypeORM with MySQL.', 
      category: '9. MySQL Ecosystem' 
    },
    // Cloud
    { 
      slug: 'mysql-cloud-services', 
      title: 'MySQL Cloud Services', 
      explanation: 'AWS RDS, Google Cloud SQL, Azure Database, DigitalOcean.', 
      category: '9. MySQL Ecosystem' 
    },
    // Tooling
    { 
      slug: 'mysql-tools', 
      title: 'MySQL Tools & Utilities', 
      explanation: 'Percona Toolkit, MySQL Shell, backup tools, and utilities.', 
      category: '9. MySQL Ecosystem' 
    },
    { 
      slug: 'integration-patterns', 
      title: 'Integration Patterns', 
      explanation: 'MySQL with microservices, message queues, and data pipelines.', 
      category: '9. MySQL Ecosystem' 
    },

    // 10. SPECIALIZED FEATURES
    { 
      slug: 'json-data-type', 
      title: 'JSON Data Type', 
      explanation: 'Working with JSON data, JSON functions, and document storage.', 
      category: '10. Specialized Features' 
    },
    { 
      slug: 'full-text-search', 
      title: 'Full-Text Search', 
      explanation: 'MySQL full-text search, indexing, and search optimization.', 
      category: '10. Specialized Features' 
    },
    { 
      slug: 'spatial-data', 
      title: 'Spatial Data & GIS', 
      explanation: 'GIS data types, spatial indexes, and location-based queries.', 
      category: '10. Specialized Features' 
    },
    { 
      slug: 'time-series-data', 
      title: 'Time Series Data', 
      explanation: 'Optimizing MySQL for time series data and analytics.', 
      category: '10. Specialized Features' 
    },
    { 
      slug: 'mysql-8-features', 
      title: 'MySQL 8+ Features', 
      explanation: 'Window functions, CTEs, resource groups, and modern MySQL features.', 
      category: '10. Specialized Features' 
    },

    // 11. DEVOPS & AUTOMATION
    { 
      slug: 'docker-mysql', 
      title: 'MySQL with Docker', 
      explanation: 'Containerizing MySQL, Docker Compose, and container orchestration.', 
      category: '11. DevOps & Automation' 
    },
    { 
      slug: 'ci-cd-integration', 
      title: 'CI/CD Integration', 
      explanation: 'Database migrations, automated testing, and deployment pipelines.', 
      category: '11. DevOps & Automation' 
    },
    { 
      slug: 'monitoring-alerting', 
      title: 'Monitoring & Alerting', 
      explanation: 'Prometheus, Grafana, Percona Monitoring, and alerting setup.', 
      category: '11. DevOps & Automation' 
    },
    { 
      slug: 'infrastructure-as-code', 
      title: 'Infrastructure as Code', 
      explanation: 'Terraform, Ansible for MySQL infrastructure management.', 
      category: '11. DevOps & Automation' 
    },
    { 
      slug: 'kubernetes-mysql', 
      title: 'MySQL on Kubernetes', 
      explanation: 'Deploying MySQL on K8s, StatefulSets, and operators.', 
      category: '11. DevOps & Automation' 
    },

    // 12. EXPERT TOPICS
    { 
      slug: 'database-architecture', 
      title: 'Database Architecture', 
      explanation: 'Designing large-scale database systems and architectural patterns.', 
      category: '12. Expert Topics' 
    },
    { 
      slug: 'performance-deep-dive', 
      title: 'Performance Deep Dive', 
      explanation: 'Advanced performance tuning, internals, and optimization at scale.', 
      category: '12. Expert Topics' 
    },
    { 
      slug: 'troubleshooting-expert', 
      title: 'Expert Troubleshooting', 
      explanation: 'Advanced debugging, performance analysis, and complex problem solving.', 
      category: '12. Expert Topics' 
    },
    { 
      slug: 'mysql-variants', 
      title: 'MySQL Variants & Forks', 
      explanation: 'MariaDB, Percona Server, and choosing the right MySQL variant.', 
      category: '12. Expert Topics' 
    },
    { 
      slug: 'mysql-source-code', 
      title: 'MySQL Source Code', 
      explanation: 'Understanding MySQL internals, plugin development, and contributions.', 
      category: '12. Expert Topics' 
    },
  ],
};
