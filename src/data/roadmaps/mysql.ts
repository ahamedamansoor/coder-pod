import type { Roadmap } from './types';

export const mysql: Roadmap = {
  slug: 'mysql',
  name: 'MySQL',
  description: 'Popular open-source relational database management system',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering MySQL from fundamentals to advanced database administration.' },

    // 1. ABSOLUTE BEGINNER (0-1 month)
    { slug: 'what-is-mysql', title: 'What is MySQL?', explanation: 'Introduction to MySQL, its history, features, and use cases in modern applications.', category: 'Beginner' },
    { slug: 'database-basics', title: 'Database Fundamentals', explanation: 'Understanding databases, tables, records, fields, and basic database concepts.', category: 'Beginner' },
    { slug: 'mysql-installation', title: 'Installation & Setup', explanation: 'Installing MySQL on Windows, Mac, Linux, configuration, and basic setup.', category: 'Beginner' },
    { slug: 'mysql-clients', title: 'MySQL Clients & Tools', explanation: 'Command-line client, MySQL Workbench, HeidiSQL, and other GUI tools.', category: 'Beginner' },
    { slug: 'basic-sql-syntax', title: 'Basic SQL Syntax', explanation: 'SQL fundamentals, SELECT, INSERT, UPDATE, DELETE statements, basic clauses.', category: 'Beginner' },

    // 2. INTERMEDIATE SQL (1-3 months)
    { slug: 'data-types-constraints', title: 'Data Types & Constraints', explanation: 'MySQL data types, NOT NULL, DEFAULT, CHECK constraints, and data validation.', category: 'Intermediate' },
    { slug: 'creating-databases-tables', title: 'Creating Databases & Tables', explanation: 'CREATE DATABASE, CREATE TABLE, ALTER TABLE, and table management.', category: 'Intermediate' },
    { slug: 'basic-joins', title: 'Understanding JOINs', explanation: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN concepts and usage.', category: 'Intermediate' },
    { slug: 'aggregation-functions', title: 'Aggregation Functions', explanation: 'COUNT, SUM, AVG, MAX, MIN, GROUP BY, HAVING clauses for data analysis.', category: 'Intermediate' },
    { slug: 'subqueries', title: 'Subqueries & Nested Queries', explanation: 'Scalar subqueries, row subqueries, correlated subqueries, and EXISTS/IN clauses.', category: 'Intermediate' },

    // 3. DATABASE DESIGN (3-6 months)
    { slug: 'database-design-principles', title: 'Database Design Principles', explanation: 'Normalization (1NF, 2NF, 3NF, BCNF), denormalization, and design patterns.', category: 'Database Design' },
    { slug: 'relationships-foreign-keys', title: 'Relationships & Foreign Keys', explanation: 'Primary keys, foreign keys, referential integrity, and cascade operations.', category: 'Database Design' },
    { slug: 'indexes-basics', title: 'Understanding Indexes', explanation: 'Index concepts, B-tree indexes, when to use indexes, and basic performance.', category: 'Database Design' },
    { slug: 'table-partitioning', title: 'Table Partitioning Basics', explanation: 'Range, list, hash partitioning, and when to partition tables.', category: 'Database Design' },
    { slug: 'database-modeling', title: 'Database Modeling', explanation: 'ER diagrams, conceptual, logical, and physical database design.', category: 'Database Design' },

    // 4. ADVANCED SQL (6-9 months)
    { slug: 'advanced-joins', title: 'Advanced JOIN Techniques', explanation: 'Self-joins, cross joins, natural joins, and complex join strategies.', category: 'Advanced SQL' },
    { slug: 'window-functions', title: 'Window Functions', explanation: 'ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, and analytical queries.', category: 'Advanced SQL' },
    { slug: 'common-table-expressions', title: 'CTEs & Recursive Queries', explanation: 'WITH clauses, recursive CTEs, hierarchical data queries.', category: 'Advanced SQL' },
    { slug: 'stored-procedures', title: 'Stored Procedures', explanation: 'Creating, calling, and managing stored procedures for business logic.', category: 'Advanced SQL' },
    { slug: 'triggers-events', title: 'Triggers & Events', explanation: 'BEFORE/AFTER triggers, scheduled events, and automated operations.', category: 'Advanced SQL' },
    { slug: 'user-defined-functions', title: 'User-Defined Functions', explanation: 'Creating custom functions for complex calculations and data transformation.', category: 'Advanced SQL' },

    // 5. PERFORMANCE OPTIMIZATION (9-12 months)
    { slug: 'query-optimization', title: 'Query Optimization', explanation: 'EXPLAIN plans, query execution analysis, and optimization techniques.', category: 'Performance' },
    { slug: 'index-strategies', title: 'Advanced Indexing', explanation: 'Composite indexes, covering indexes, functional indexes, and index tuning.', category: 'Performance' },
    { slug: 'mysql-configuration', title: 'MySQL Configuration', explanation: 'my.cnf optimization, memory management, and server tuning.', category: 'Performance' },
    { slug: 'slow-query-log', title: 'Slow Query Analysis', explanation: 'Slow query log, performance schema, and query profiling.', category: 'Performance' },
    { slug: 'caching-strategies', title: 'Caching Strategies', explanation: 'Query cache, application-level caching, and performance optimization.', category: 'Performance' },

    // 6. ADMINISTRATION & SECURITY (12-15 months)
    { slug: 'user-management', title: 'User Management', explanation: 'Creating users, granting permissions, role-based access control.', category: 'Administration' },
    { slug: 'backup-strategies', title: 'Backup & Recovery', explanation: 'mysqldump, physical backups, point-in-time recovery, backup automation.', category: 'Administration' },
    { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'SQL injection prevention, encryption, SSL/TLS, secure configurations.', category: 'Administration' },
    { slug: 'audit-logging', title: 'Audit & Logging', explanation: 'MySQL audit plugin, general query log, binary log, and security monitoring.', category: 'Administration' },
    { slug: 'maintenance-tasks', title: 'Database Maintenance', explanation: 'Routine maintenance, table optimization, check and repair operations.', category: 'Administration' },

    // 7. HIGH AVAILABILITY & REPLICATION (15-18 months)
    { slug: 'replication-concepts', title: 'Replication Fundamentals', explanation: 'Master-slave replication, binary logs, and replication concepts.', category: 'High Availability' },
    { slug: 'master-slave-setup', title: 'Master-Slave Configuration', explanation: 'Setting up replication, monitoring, failover, and troubleshooting.', category: 'High Availability' },
    { slug: 'master-master-replication', title: 'Master-Master Replication', explanation: 'Active-active replication, conflict resolution, and advanced setups.', category: 'High Availability' },
    { slug: 'mysql-innodb-cluster', title: 'MySQL InnoDB Cluster', explanation: 'Group Replication, MySQL Router, and automatic failover.', category: 'High Availability' },
    { slug: 'load-balancing', title: 'Load Balancing', explanation: 'HAProxy, ProxySQL, and database load balancing strategies.', category: 'High Availability' },

    // 8. SCALING & DISTRIBUTED SYSTEMS (18-24 months)
    { slug: 'sharding-strategies', title: 'Database Sharding', explanation: 'Horizontal partitioning, sharding keys, and distributed database design.', category: 'Scaling' },
    { slug: 'mysql-cluster', title: 'MySQL Cluster (NDB)', explanation: 'High availability clustering, data nodes, and real-time replication.', category: 'Scaling' },
    { slug: 'read-write-splitting', title: 'Read-Write Splitting', explanation: 'Separating read and write operations for better performance.', category: 'Scaling' },
    { slug: 'connection-pooling', title: 'Connection Pooling', explanation: 'Managing database connections efficiently in applications.', category: 'Scaling' },
    { slug: 'distributed-transactions', title: 'Distributed Transactions', explanation: 'Two-phase commit, XA transactions, and distributed consistency.', category: 'Scaling' },

    // 9. DEVOPS & AUTOMATION (24-30 months)
    { slug: 'docker-mysql', title: 'MySQL with Docker', explanation: 'Containerizing MySQL, Docker Compose, and container orchestration.', category: 'DevOps' },
    { slug: 'kubernetes-mysql', title: 'MySQL on Kubernetes', explanation: 'Deploying MySQL on K8s, StatefulSets, and operators.', category: 'DevOps' },
    { slug: 'ci-cd-integration', title: 'CI/CD Integration', explanation: 'Database migrations, automated testing, and deployment pipelines.', category: 'DevOps' },
    { slug: 'monitoring-alerting', title: 'Monitoring & Alerting', explanation: 'Prometheus, Grafana, Percona Monitoring, and alerting setup.', category: 'DevOps' },
    { slug: 'infrastructure-as-code', title: 'Infrastructure as Code', explanation: 'Terraform, Ansible for MySQL infrastructure management.', category: 'DevOps' },

    // 10. EXPERT TOPICS (30+ months)
    { slug: 'mysql-source-code', title: 'MySQL Source Code', explanation: 'Understanding MySQL internals, plugin development, and contributions.', category: 'Expert' },
    { slug: 'performance-deep-dive', title: 'Performance Deep Dive', explanation: 'Advanced performance tuning, internals, and optimization at scale.', category: 'Expert' },
    { slug: 'mysql-variants', title: 'MySQL Variants & Forks', explanation: 'MariaDB, Percona Server, and choosing the right MySQL variant.', category: 'Expert' },
    { slug: 'database-architecture', title: 'Database Architecture', explanation: 'Designing large-scale database systems and architectural patterns.', category: 'Expert' },
    { slug: 'troubleshooting-expert', title: 'Expert Troubleshooting', explanation: 'Advanced debugging, performance analysis, and complex problem solving.', category: 'Expert' },

    // 11. MYSQL ECOSYSTEM
    { slug: 'mysql-connectors', title: 'MySQL Connectors', explanation: 'JDBC, Python (mysql-connector), Node.js (mysql2), PHP drivers.', category: 'Ecosystem' },
    { slug: 'orm-frameworks', title: 'ORM Frameworks', explanation: 'Hibernate, Sequelize, SQLAlchemy, TypeORM with MySQL.', category: 'Ecosystem' },
    { slug: 'mysql-cloud-services', title: 'MySQL Cloud Services', explanation: 'AWS RDS, Google Cloud SQL, Azure Database, DigitalOcean.', category: 'Ecosystem' },
    { slug: 'mysql-tools', title: 'MySQL Tools & Utilities', explanation: 'Percona Toolkit, MySQL Shell, backup tools, and utilities.', category: 'Ecosystem' },
    { slug: 'integration-patterns', title: 'Integration Patterns', explanation: 'MySQL with microservices, message queues, and data pipelines.', category: 'Ecosystem' },

    // 12. SPECIALIZED TOPICS
    { slug: 'full-text-search', title: 'Full-Text Search', explanation: 'MySQL full-text search, indexing, and search optimization.', category: 'Specialized' },
    { slug: 'json-data-type', title: 'JSON Data Type', explanation: 'Working with JSON data, JSON functions, and document storage.', category: 'Specialized' },
    { slug: 'spatial-data', title: 'Spatial Data & GIS', explanation: 'GIS data types, spatial indexes, and location-based queries.', category: 'Specialized' },
    { slug: 'time-series-data', title: 'Time Series Data', explanation: 'Optimizing MySQL for time series data and analytics.', category: 'Specialized' },
    { slug: 'mysql-8-features', title: 'MySQL 8+ Features', explanation: 'Window functions, CTEs, resource groups, and modern MySQL features.', category: 'Specialized' },
  ],
};
