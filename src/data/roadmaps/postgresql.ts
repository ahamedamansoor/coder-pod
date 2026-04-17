import type { Roadmap } from './types';

export const postgresql: Roadmap = {
  slug: 'postgresql',
  name: 'PostgreSQL',
  description: 'Master PostgreSQL from fundamentals to expert-level database administration, performance tuning, and production deployment.',
  topics: [
    // Learning Plan
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'A comprehensive roadmap to master PostgreSQL from fundamentals to expert-level database administration, performance tuning, and production deployment.',
      category: 'Learning Plan'
    },

    // 1. DATABASE FUNDAMENTALS
    {
      slug: 'database-rdbms-overview',
      title: 'What is a Database & RDBMS',
      explanation: 'Understanding database concepts, relational database management systems, data models, and how PostgreSQL fits into the database ecosystem with real-world examples.',
      category: 'Database Fundamentals'
    },
    {
      slug: 'postgresql-overview',
      title: 'PostgreSQL Overview',
      explanation: 'Introduction to PostgreSQL, its history, features, advantages, architecture, and why it\'s considered the world\'s most advanced open-source relational database.',
      category: 'Database Fundamentals'
    },
    {
      slug: 'installing-postgresql',
      title: 'Installing PostgreSQL',
      explanation: 'Step-by-step installation guide for PostgreSQL on Windows, macOS, Linux distributions, Docker, and cloud platforms with troubleshooting tips.',
      category: 'Database Fundamentals'
    },
    {
      slug: 'psql-pgadmin-basics',
      title: 'psql & pgAdmin Basics',
      explanation: 'Master the essential tools for interacting with PostgreSQL: psql command-line interface, pgAdmin GUI, and basic database operations.',
      category: 'Database Fundamentals'
    },
    {
      slug: 'postgresql-configuration',
      title: 'PostgreSQL Configuration',
      explanation: 'Understanding postgresql.conf, pg_hba.conf, authentication methods, and basic server configuration for optimal performance.',
      category: 'Database Fundamentals'
    },

    // 2. DATABASE STRUCTURE
    {
      slug: 'databases-schemas-tables',
      title: 'Databases, Schemas, Tables',
      explanation: 'Understanding PostgreSQL\'s hierarchical structure: creating and managing databases, schemas for organization, and table design principles.',
      category: 'Database Structure'
    },
    {
      slug: 'postgresql-data-types',
      title: 'Data Types Deep Dive',
      explanation: 'Comprehensive guide to PostgreSQL data types: numeric, character, date/time, boolean, arrays, JSON, JSONB, UUID, custom types, and type casting.',
      category: 'Database Structure'
    },
    {
      slug: 'table-creation',
      title: 'Table Creation & Design',
      explanation: 'Creating tables with proper structure, column definitions, default values, constraints, and best practices for table design.',
      category: 'Database Structure'
    },
    {
      slug: 'schema-management',
      title: 'Schema Management',
      explanation: 'Creating and managing schemas, organizing database objects, schema search path, and multi-tenant architecture with schemas.',
      category: 'Database Structure'
    },

    // 3. DATA MANIPULATION
    {
      slug: 'crud-operations',
      title: 'CRUD Operations',
      explanation: 'Master the fundamental database operations: INSERT with various syntaxes, SELECT basics, UPDATE strategies, and DELETE with safety considerations.',
      category: 'Data Manipulation'
    },
    {
      slug: 'basic-select-queries',
      title: 'Basic SELECT Queries',
      explanation: 'Learn to retrieve data with SELECT statements: column selection, aliases, expressions, literals, NULL handling, and basic filtering.',
      category: 'Data Manipulation'
    },
    {
      slug: 'where-order-limit',
      title: 'WHERE, ORDER BY, LIMIT',
      explanation: 'Filter data with WHERE clauses, sort results with ORDER BY, limit output with LIMIT/OFFSET, and combine multiple conditions.',
      category: 'Data Manipulation'
    },
    {
      slug: 'data-modification-advanced',
      title: 'Advanced Data Modification',
      explanation: 'UPSERT operations, bulk inserts, UPDATE with JOINs, DELETE with USING clause, and returning data from DML operations.',
      category: 'Data Manipulation'
    },

    // 4. DATA INTEGRITY & CONSTRAINTS
    {
      slug: 'constraints',
      title: 'Constraints (PK, FK, UNIQUE, CHECK, DEFAULT)',
      explanation: 'Ensure data integrity with PostgreSQL constraints: Primary Keys, Foreign Keys with cascading actions, UNIQUE constraints, CHECK conditions, and DEFAULT values.',
      category: 'Data Integrity & Constraints'
    },
    {
      slug: 'not-null-constraints',
      title: 'NOT NULL & Domain Constraints',
      explanation: 'Implement NOT NULL constraints, create custom domains with type constraints, and enforce data validation at the database level.',
      category: 'Data Integrity & Constraints'
    },
    {
      slug: 'constraint-management',
      title: 'Constraint Management',
      explanation: 'Adding, modifying, and dropping constraints, deferred constraints, constraint naming conventions, and troubleshooting constraint violations.',
      category: 'Data Integrity & Constraints'
    },

    // 5. ADVANCED QUERIES
    {
      slug: 'joins',
      title: 'Joins (INNER, LEFT, RIGHT, FULL)',
      explanation: 'Master table relationships with comprehensive coverage of INNER JOINs, OUTER JOINs, CROSS JOINs, self-joins, and join optimization techniques.',
      category: 'Advanced Queries'
    },
    {
      slug: 'join-optimization',
      title: 'Join Optimization & Strategies',
      explanation: 'Understanding join algorithms, join order optimization, hash joins vs nested loops, and writing efficient join queries.',
      category: 'Advanced Queries'
    },
    {
      slug: 'subqueries',
      title: 'Subqueries',
      explanation: 'Understanding and implementing subqueries, correlated subqueries, EXISTS/NOT EXISTS, IN/NOT IN, and when to use subqueries vs joins.',
      category: 'Advanced Queries'
    },
    {
      slug: 'common-table-expressions',
      title: 'Common Table Expressions (CTEs)',
      explanation: 'Simplify complex queries with CTEs, recursive CTEs for hierarchical data, materialized CTEs, and advanced CTE patterns.',
      category: 'Advanced Queries'
    },
    {
      slug: 'set-operations',
      title: 'Set Operations',
      explanation: 'UNION, UNION ALL, INTERSECT, EXCEPT operations for combining query results and handling duplicate data.',
      category: 'Advanced Queries'
    },

    // 6. AGGREGATION & GROUPING
    {
      slug: 'aggregations',
      title: 'Aggregations (GROUP BY, HAVING)',
      explanation: 'Analyze data with aggregate functions, GROUP BY clauses, HAVING filters, grouping sets, and advanced aggregation techniques.',
      category: 'Aggregation & Grouping'
    },
    {
      slug: 'aggregate-functions',
      title: 'Aggregate Functions',
      explanation: 'Master COUNT, SUM, AVG, MIN, MAX, statistical functions, string aggregates, and creating custom aggregate functions.',
      category: 'Aggregation & Grouping'
    },
    {
      slug: 'grouping-operations',
      title: 'Advanced Grouping Operations',
      explanation: 'GROUPING SETS, CUBE, ROLLUP, window functions for aggregation, and handling NULL values in grouping operations.',
      category: 'Aggregation & Grouping'
    },

    // 7. VIEWS & VIRTUAL TABLES
    {
      slug: 'views',
      title: 'Views',
      explanation: 'Create and manage virtual tables with views for data abstraction, security, simplified complex queries, and updatable views.',
      category: 'Views & Virtual Tables'
    },
    {
      slug: 'materialized-views',
      title: 'Materialized Views',
      explanation: 'Create and manage materialized views for performance optimization, refresh strategies, and query result caching.',
      category: 'Views & Virtual Tables'
    },
    {
      slug: 'updatable-views',
      title: 'Updatable Views & Rules',
      explanation: 'Creating updatable views, INSTEAD OF triggers, view limitations, and using rules for view updates.',
      category: 'Views & Virtual Tables'
    },

    // 8. INDEXING & PERFORMANCE
    {
      slug: 'indexes-basics',
      title: 'Indexes (Basics)',
      explanation: 'Improve query performance with basic indexing concepts, B-tree indexes, index creation, maintenance, and when to index.',
      category: 'Indexing & Performance'
    },
    {
      slug: 'advanced-indexing',
      title: 'Advanced Indexing (B-Tree, GIN, GiST, BRIN)',
      explanation: 'Explore advanced index types including B-Tree, GIN, GiST, BRIN, HASH indexes, partial indexes, and expression indexes.',
      category: 'Indexing & Performance'
    },
    {
      slug: 'index-optimization',
      title: 'Index Optimization Strategies',
      explanation: 'Index analysis, covering indexes, multicolumn indexes, index bloat management, and index usage monitoring.',
      category: 'Indexing & Performance'
    },

    // 9. TRANSACTIONS & CONCURRENCY
    {
      slug: 'transactions',
      title: 'Transactions',
      explanation: 'Ensure data consistency with transactions, savepoints, transaction isolation levels, and proper transaction management.',
      category: 'Transactions & Concurrency'
    },
    {
      slug: 'acid-properties',
      title: 'ACID Properties',
      explanation: 'Deep dive into Atomicity, Consistency, Isolation, and Durability properties that make PostgreSQL reliable and ACID compliance.',
      category: 'Transactions & Concurrency'
    },
    {
      slug: 'locks-concurrency',
      title: 'Locks & Concurrency Control',
      explanation: 'Understand PostgreSQL locking mechanisms, lock types, deadlock detection, lock monitoring, and managing concurrent access.',
      category: 'Transactions & Concurrency'
    },
    {
      slug: 'isolation-levels',
      title: 'Isolation Levels',
      explanation: 'Master transaction isolation levels, read phenomena (dirty reads, non-repeatable reads, phantom reads), and choosing the right isolation.',
      category: 'Transactions & Concurrency'
    },

    // 10. WINDOW FUNCTIONS & ANALYTICS
    {
      slug: 'window-functions',
      title: 'Window Functions',
      explanation: 'Advanced analytical queries with window functions, ranking functions (ROW_NUMBER, RANK, DENSE_RANK), and analytical calculations.',
      category: 'Window Functions & Analytics'
    },
    {
      slug: 'window-frame-clauses',
      title: 'Window Frame Clauses',
      explanation: 'Understanding window frames (ROWS, RANGE, GROUPS), frame boundaries, and advanced window function patterns.',
      category: 'Window Functions & Analytics'
    },
    {
      slug: 'analytical-functions',
      title: 'Advanced Analytical Functions',
      explanation: 'LEAD, LAG, FIRST_VALUE, LAST_VALUE, NTH_VALUE, NTILE, and complex analytical queries for business intelligence.',
      category: 'Window Functions & Analytics'
    },

    // 11. JSON & SEMI-STRUCTURED DATA
    {
      slug: 'json-jsonb',
      title: 'JSON & JSONB',
      explanation: 'Work with semi-structured data using PostgreSQL\'s powerful JSON and JSONB data types, operators, and functions for document storage.',
      category: 'JSON & Semi-Structured Data'
    },
    {
      slug: 'json-operators-functions',
      title: 'JSON Operators & Functions',
      explanation: 'Master JSON path expressions, JSON operators (->, ->>, #>, #>>), JSON functions, and efficient JSON querying.',
      category: 'JSON & Semi-Structured Data'
    },
    {
      slug: 'json-indexing',
      title: 'JSON Indexing Strategies',
      explanation: 'Optimize JSON queries with GIN indexes, expression indexes on JSON fields, and JSON performance tuning.',
      category: 'JSON & Semi-Structured Data'
    },

    // 12. ARRAYS & COMPLEX TYPES
    {
      slug: 'arrays',
      title: 'Array Data Types',
      explanation: 'Working with array types, array operators, array functions, multidimensional arrays, and array aggregation.',
      category: 'Arrays & Complex Types'
    },
    {
      slug: 'composite-types',
      title: 'Composite Types',
      explanation: 'Creating and using custom composite types, row types, type constructors, and complex data structures.',
      category: 'Arrays & Complex Types'
    },
    {
      slug: 'range-types',
      title: 'Range Types',
      explanation: 'Using built-in range types (int4range, daterange, tsrange), creating custom ranges, and range operations.',
      category: 'Arrays & Complex Types'
    },

    // 13. PARTITIONING & SCALING
    {
      slug: 'partitioning',
      title: 'Table Partitioning',
      explanation: 'Implement table partitioning for large datasets: declarative partitioning, range/list/hash partitioning, and partition pruning.',
      category: 'Partitioning & Scaling'
    },
    {
      slug: 'partition-strategies',
      title: 'Advanced Partitioning Strategies',
      explanation: 'Subpartitioning, partition maintenance, partition-wise joins, and designing scalable partitioned architectures.',
      category: 'Partitioning & Scaling'
    },
    {
      slug: 'table-inheritance',
      title: 'Table Inheritance',
      explanation: 'PostgreSQL\'s table inheritance feature, inheritance hierarchies, and when to use inheritance vs partitioning.',
      category: 'Partitioning & Scaling'
    },

    // 14. PROGRAMMING & PROCEDURAL LANGUAGES
    {
      slug: 'pl-pgsql',
      title: 'PL/pgSQL',
      explanation: 'Program in PostgreSQL with PL/pgSQL procedural language: variables, control structures, exception handling, and best practices.',
      category: 'Programming & Procedural Languages'
    },
    {
      slug: 'stored-functions-procedures',
      title: 'Stored Functions & Procedures',
      explanation: 'Create and manage stored functions and procedures for encapsulating business logic, function overloading, and security definers.',
      category: 'Programming & Procedural Languages'
    },
    {
      slug: 'triggers',
      title: 'Triggers',
      explanation: 'Implement automated database operations with triggers for auditing, validation, business rule enforcement, and event triggers.',
      category: 'Programming & Procedural Languages'
    },
    {
      slug: 'procedural-languages',
      title: 'Other Procedural Languages',
      explanation: 'Overview of PL/Python, PL/Perl, PL/Tcl, and installing additional procedural languages for specific use cases.',
      category: 'Programming & Procedural Languages'
    },

    // 15. SECURITY & ACCESS CONTROL
    {
      slug: 'row-level-security',
      title: 'Row-Level Security (RLS)',
      explanation: 'Implement fine-grained access control with PostgreSQL\'s Row-Level Security policies for multi-tenant applications and data isolation.',
      category: 'Security & Access Control'
    },
    {
      slug: 'roles-permissions',
      title: 'Roles & Permissions',
      explanation: 'Master PostgreSQL security model with roles, privileges, GRANT/REVOKE, role inheritance, and granular permission management.',
      category: 'Security & Access Control'
    },
    {
      slug: 'authentication-methods',
      title: 'Authentication Methods',
      explanation: 'Configure various authentication methods: password, MD5, SCRAM, LDAP, Kerberos, and certificate-based authentication.',
      category: 'Security & Access Control'
    },
    {
      slug: 'encryption-security',
      title: 'Data Encryption & Security',
      explanation: 'Column-level encryption, transparent data encryption (TDE), SSL/TLS configuration, and security best practices.',
      category: 'Security & Access Control'
    },

    // 16. BACKUP & RECOVERY
    {
      slug: 'backup-restore',
      title: 'Backup & Restore',
      explanation: 'Implement robust backup and recovery strategies with pg_dump, pg_dumpall, pg_restore, and automated backup solutions.',
      category: 'Backup & Recovery'
    },
    {
      slug: 'point-in-time-recovery',
      title: 'Point-in-Time Recovery (PITR)',
      explanation: 'Configure continuous archiving, WAL archiving, base backups, and recovering to specific points in time.',
      category: 'Backup & Recovery'
    },
    {
      slug: 'backup-strategies',
      title: 'Advanced Backup Strategies',
      explanation: 'Physical vs logical backups, incremental backups, backup validation, and disaster recovery planning.',
      category: 'Backup & Recovery'
    },

    // 17. REPLICATION & HIGH AVAILABILITY
    {
      slug: 'replication',
      title: 'Replication',
      explanation: 'Configure and manage PostgreSQL replication: streaming replication, logical replication, replication slots, and monitoring.',
      category: 'Replication & High Availability'
    },
    {
      slug: 'high-availability',
      title: 'High Availability',
      explanation: 'Design and implement high-availability PostgreSQL architectures with failover, load balancing, and automatic failover tools.',
      category: 'Replication & High Availability'
    },
    {
      slug: 'replication-management',
      title: 'Advanced Replication Management',
      explanation: 'Replication lag monitoring, conflict resolution, cascading replication, and replication troubleshooting.',
      category: 'Replication & High Availability'
    },

    // 18. PERFORMANCE TUNING
    {
      slug: 'query-optimization',
      title: 'Query Optimization',
      explanation: 'Advanced techniques for optimizing PostgreSQL queries, understanding execution plans, and improving database performance.',
      category: 'Performance Tuning'
    },
    {
      slug: 'explain-analyze',
      title: 'EXPLAIN & EXPLAIN ANALYZE',
      explanation: 'Master query planning and execution analysis with EXPLAIN, EXPLAIN ANALYZE, query plan interpretation, and performance tuning.',
      category: 'Performance Tuning'
    },
    {
      slug: 'performance-tuning',
      title: 'Advanced Performance Tuning',
      explanation: 'Configuration optimization, memory management, work_mem, shared_buffers, checkpoint tuning, and system-level performance tuning.',
      category: 'Performance Tuning'
    },
    {
      slug: 'vacuum-autovacuum',
      title: 'VACUUM & Autovacuum',
      explanation: 'Understand and optimize PostgreSQL\'s VACUUM process for table maintenance, bloat management, and performance optimization.',
      category: 'Performance Tuning'
    },

    // 19. POSTGRESQL INTERNALS
    {
      slug: 'postgresql-internals',
      title: 'PostgreSQL Internals (MVCC, WAL, Query Planner)',
      explanation: 'Deep dive into PostgreSQL internals including MVCC, Write-Ahead Logging, buffer manager, and the query planner architecture.',
      category: 'PostgreSQL Internals'
    },
    {
      slug: 'storage-system',
      title: 'Storage System & Pages',
      explanation: 'Understanding PostgreSQL storage: data pages, TOAST, tuple headers, and how data is physically stored on disk.',
      category: 'PostgreSQL Internals'
    },
    {
      slug: 'query-execution',
      title: 'Query Execution Engine',
      explanation: 'How PostgreSQL executes queries: parsing, planning, optimization, execution, and result generation.',
      category: 'PostgreSQL Internals'
    },

    // 20. EXTENSIONS & ECOSYSTEM
    {
      slug: 'postgresql-extensions',
      title: 'PostgreSQL Extensions',
      explanation: 'Explore powerful extensions: PostGIS for geospatial data, pg_stat_statements, pg_trgm, hstore, and other useful extensions.',
      category: 'Extensions & Ecosystem'
    },
    {
      slug: 'full-text-search',
      title: 'Full-Text Search',
      explanation: 'Implement powerful search capabilities with PostgreSQL\'s built-in full-text search features, tsvector, tsquery, and GIN indexes.',
      category: 'Extensions & Ecosystem'
    },
    {
      slug: 'foreign-data-wrappers',
      title: 'Foreign Data Wrappers (FDW)',
      explanation: 'Access external data sources using FDW for integrating PostgreSQL with other databases, APIs, and file systems.',
      category: 'Extensions & Ecosystem'
    },

    // 21. CONNECTION MANAGEMENT
    {
      slug: 'connection-pooling',
      title: 'Connection Pooling (PgBouncer)',
      explanation: 'Implement connection pooling with PgBouncer for optimal resource management, performance, and handling high concurrency.',
      category: 'Connection Management'
    },
    {
      slug: 'connection-management',
      title: 'Advanced Connection Management',
      explanation: 'Connection limits, resource queues, connection monitoring, and optimizing connection usage in applications.',
      category: 'Connection Management'
    },

    // 22. MONITORING & OBSERVABILITY
    {
      slug: 'monitoring-tools',
      title: 'Monitoring & Metrics',
      explanation: 'Comprehensive database monitoring: pg_stat views, system catalogs, performance metrics, and monitoring tools setup.',
      category: 'Monitoring & Observability'
    },
    {
      slug: 'logging-auditing',
      title: 'Logging & Auditing',
      explanation: 'Configure PostgreSQL logging, audit logging, log analysis, and compliance monitoring for security and troubleshooting.',
      category: 'Monitoring & Observability'
    },

    // 23. SCALING & DISTRIBUTED SYSTEMS
    {
      slug: 'sharding-scaling',
      title: 'Sharding & Scaling',
      explanation: 'Advanced scaling strategies including horizontal partitioning, sharding, distributed PostgreSQL solutions, and scaling patterns.',
      category: 'Scaling & Distributed Systems'
    },
    {
      slug: 'distributed-postgresql',
      title: 'Distributed PostgreSQL',
      explanation: 'Overview of distributed PostgreSQL solutions: Citus, CockroachDB compatibility, and distributed database architectures.',
      category: 'Scaling & Distributed Systems'
    },

    // 24. PRODUCTION DEPLOYMENT
    {
      slug: 'postgresql-production',
      title: 'PostgreSQL in Production',
      explanation: 'Best practices for running PostgreSQL in production environments including monitoring, security, maintenance, and operations.',
      category: 'Production Deployment'
    },
    {
      slug: 'deployment-strategies',
      title: 'Deployment Strategies',
      explanation: 'Production deployment patterns, blue-green deployments, rolling upgrades, and zero-downtime deployment strategies.',
      category: 'Production Deployment'
    },
    {
      slug: 'capacity-planning',
      title: 'Capacity Planning & Sizing',
      explanation: 'Hardware sizing, resource planning, performance benchmarking, and scaling calculations for production deployments.',
      category: 'Production Deployment'
    },

    // 25. CLOUD & DEVOPS
    {
      slug: 'postgresql-cloud-deployment',
      title: 'Cloud Deployment',
      explanation: 'Deploying PostgreSQL on AWS RDS, Google Cloud SQL, Azure Database, and other cloud platforms with managed services.',
      category: 'Cloud & DevOps'
    },
    {
      slug: 'postgresql-docker',
      title: 'PostgreSQL with Docker',
      explanation: 'Containerizing PostgreSQL applications, Docker Compose setups, Kubernetes deployment, and container orchestration.',
      category: 'Cloud & DevOps'
    },
    {
      slug: 'ci-cd-databases',
      title: 'CI/CD for Databases',
      explanation: 'Implementing database migrations, schema versioning, automated testing, and database lifecycle management in CI/CD pipelines.',
      category: 'Cloud & DevOps'
    },

    // 26. MIGRATION & UPGRADES
    {
      slug: 'postgresql-upgrades',
      title: 'PostgreSQL Upgrades',
      explanation: 'Planning and executing major version upgrades with minimal downtime, compatibility considerations, and upgrade strategies.',
      category: 'Migration & Upgrades'
    },
    {
      slug: 'database-migration',
      title: 'Database Migration',
      explanation: 'Migrating from other databases (MySQL, Oracle, SQL Server) to PostgreSQL with data conversion tools and migration strategies.',
      category: 'Migration & Upgrades'
    },

    // 27. ADVANCED FEATURES
    {
      slug: 'custom-functions',
      title: 'Custom Functions & Operators',
      explanation: 'Creating custom functions, operators, aggregates, and data types to extend PostgreSQL functionality for specific use cases.',
      category: 'Advanced Features'
    },
    {
      slug: 'event-triggers',
      title: 'Event Triggers & DDL Capture',
      explanation: 'Implementing DDL event triggers, auditing schema changes, and capturing database modification events.',
      category: 'Advanced Features'
    },

    // 28. BEST PRACTICES & PATTERNS
    {
      slug: 'postgresql-best-practices',
      title: 'Best Practices & Patterns',
      explanation: 'Industry best practices, design patterns, architectural considerations, and anti-patterns for PostgreSQL applications.',
      category: 'Best Practices & Patterns'
    },
    {
      slug: 'sql-anti-patterns',
      title: 'SQL Anti-Patterns',
      explanation: 'Common mistakes and anti-patterns in SQL and database design, with solutions and best practice alternatives.',
      category: 'Best Practices & Patterns'
    }
  ]
};
