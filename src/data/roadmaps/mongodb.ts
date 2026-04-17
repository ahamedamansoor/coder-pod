import type { Roadmap } from './types';

export const mongodb: Roadmap = {
  slug: 'mongodb',
  name: 'MongoDB',
  description: 'Leading NoSQL document database for modern applications',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering MongoDB from basics to advanced database administration.' },

    // 1. ABSOLUTE BEGINNER (0-1 month)
    { slug: 'what-is-mongodb', title: 'What is MongoDB?', explanation: 'Introduction to NoSQL, document databases, CAP theorem, and MongoDB architecture.', category: 'Beginner' },
    { slug: 'nosql-basics', title: 'NoSQL Fundamentals', explanation: 'Understanding NoSQL vs SQL, database types, and when to use NoSQL.', category: 'Beginner' },
    { slug: 'mongodb-installation', title: 'Installation & Setup', explanation: 'Installing MongoDB Community Edition, configuration, and setup on all platforms.', category: 'Beginner' },
    { slug: 'mongodb-shell', title: 'MongoDB Shell (mongosh)', explanation: 'Basic shell commands, navigation, and database operations.', category: 'Beginner' },
    { slug: 'document-model-basics', title: 'Document Model Basics', explanation: 'JSON, BSON, document structure, and basic schema concepts.', category: 'Beginner' },

    // 2. BASIC CRUD OPERATIONS (1-3 months)
    { slug: 'database-collection-basics', title: 'Databases & Collections', explanation: 'Creating databases, collections, and understanding namespace.', category: 'CRUD Operations' },
    { slug: 'inserting-documents', title: 'Inserting Documents', explanation: 'insertOne, insertMany, bulk operations, and insertion best practices.', category: 'CRUD Operations' },
    { slug: 'querying-documents', title: 'Querying Documents', explanation: 'find method, query operators, filtering, and projection basics.', category: 'CRUD Operations' },
    { slug: 'updating-documents', title: 'Updating Documents', explanation: 'updateOne, updateMany, update operators, and atomic operations.', category: 'CRUD Operations' },
    { slug: 'deleting-documents', title: 'Deleting Documents', explanation: 'deleteOne, deleteMany, safe deletion, and cascading operations.', category: 'CRUD Operations' },

    // 3. ADVANCED QUERYING (3-6 months)
    { slug: 'query-operators-deep', title: 'Advanced Query Operators', explanation: 'Comparison, logical, element, array, and evaluation operators.', category: 'Advanced Queries' },
    { slug: 'array-operations', title: 'Array Operations', explanation: 'Querying arrays, $elemMatch, array size, and array manipulation.', category: 'Advanced Queries' },
    { slug: 'type-queries', title: 'Type & Regular Expression Queries', explanation: '$type operator, regex queries, and pattern matching.', category: 'Advanced Queries' },
    { slug: 'projection-operators', title: 'Projection Operators', explanation: '$elemMatch in projection, slice, and field selection.', category: 'Advanced Queries' },
    { slug: 'query-performance', title: 'Query Performance Basics', explanation: 'Understanding query execution, hinting, and basic optimization.', category: 'Advanced Queries' },

    // 4. AGGREGATION FRAMEWORK (6-9 months)
    { slug: 'aggregation-basics', title: 'Aggregation Pipeline Basics', explanation: 'Pipeline concept, stages, and basic aggregation operations.', category: 'Aggregation' },
    { slug: 'group-aggregation', title: '$group and Accumulators', explanation: 'Grouping data, $sum, $avg, $min, $max, and complex aggregations.', category: 'Aggregation' },
    { slug: 'match-project', title: '$match and $project Stages', explanation: 'Filtering, reshaping documents, and field manipulation.', category: 'Aggregation' },
    { slug: 'unwind-lookup', title: '$unwind and $lookup', explanation: 'Deconstructing arrays, joining collections, and data relationships.', category: 'Aggregation' },
    { slug: 'advanced-aggregation', title: 'Advanced Aggregation', explanation: '$facet, $bucket, $bucketAuto, and complex analytical queries.', category: 'Aggregation' },

    // 5. INDEXING STRATEGIES (9-12 months)
    { slug: 'indexing-fundamentals', title: 'Indexing Fundamentals', explanation: 'Single field indexes, compound indexes, and index creation.', category: 'Indexing' },
    { slug: 'index-types', title: 'Advanced Index Types', explanation: 'Multikey, text, geospatial, hashed, and wildcard indexes.', category: 'Indexing' },
    { slug: 'index-properties', title: 'Index Properties', explanation: 'Unique, sparse, partial, TTL, and collation indexes.', category: 'Indexing' },
    { slug: 'query-plans', title: 'Query Plans & explain()', explanation: 'Understanding query execution, winning plans, and index usage.', category: 'Indexing' },
    { slug: 'index-optimization', title: 'Index Optimization', explanation: 'Covering queries, index intersection, and performance tuning.', category: 'Indexing' },

    // 6. SCHEMA DESIGN PATTERNS (12-15 months)
    { slug: 'schema-design-principles', title: 'Schema Design Principles', explanation: 'Embedding vs referencing, denormalization, and design trade-offs.', category: 'Schema Design' },
    { slug: 'one-to-many-patterns', title: 'One-to-Many Patterns', explanation: 'Embedding, referencing, and hybrid approaches for relationships.', category: 'Schema Design' },
    { slug: 'many-to-many-patterns', title: 'Many-to-Many Patterns', explanation: 'Modeling complex relationships and association patterns.', category: 'Schema Design' },
    { slug: 'tree-structures', title: 'Tree Structures', explanation: 'Materialized paths, nested sets, and tree modeling patterns.', category: 'Schema Design' },
    { slug: 'schema-validation', title: 'Schema Validation', explanation: 'JSON Schema validation, validation rules, and data integrity.', category: 'Schema Design' },

    // 7. REPLICATION & HIGH AVAILABILITY (15-18 months)
    { slug: 'replica-sets-basics', title: 'Replica Sets Basics', explanation: 'Primary/secondary concept, elections, and automatic failover.', category: 'High Availability' },
    { slug: 'replica-set-configuration', title: 'Replica Set Configuration', explanation: 'Setting up replica sets, members, and configuration options.', category: 'High Availability' },
    { slug: 'read-preference', title: 'Read Preference & Write Concern', explanation: 'Controlling read routing and write acknowledgment levels.', category: 'High Availability' },
    { slug: 'replication-mechanics', title: 'Replication Mechanics', explanation: 'Oplog, replication process, and consistency models.', category: 'High Availability' },
    { slug: 'replica-set-maintenance', title: 'Replica Set Maintenance', explanation: 'Maintenance, reconfiguration, and troubleshooting replica sets.', category: 'High Availability' },

    // 8. BACKUP & RECOVERY (18-21 months)
    { slug: 'backup-strategies', title: 'Backup Strategies', explanation: 'Logical backups, physical backups, and backup planning.', category: 'Backup & Recovery' },
    { slug: 'mongodump-restore', title: 'mongodump & mongorestore', explanation: 'Using MongoDB tools for backup and restoration.', category: 'Backup & Recovery' },
    { slug: 'point-in-time-recovery', title: 'Point-in-Time Recovery', explanation: 'Oplog-based recovery and restoration to specific timestamps.', category: 'Backup & Recovery' },
    { slug: 'cloud-backups', title: 'Cloud Backup Solutions', explanation: 'MongoDB Atlas backups, cloud storage, and automated backups.', category: 'Backup & Recovery' },
    { slug: 'disaster-recovery', title: 'Disaster Recovery Planning', explanation: 'DR strategies, recovery procedures, and business continuity.', category: 'Backup & Recovery' },

    // 9. SHARDING & SCALING (21-24 months)
    { slug: 'sharding-concepts', title: 'Sharding Concepts', explanation: 'Horizontal scaling, shard keys, and data distribution.', category: 'Scaling' },
    { slug: 'sharded-cluster-setup', title: 'Sharded Cluster Setup', explanation: 'Config servers, shard servers, and query routers (mongos).', category: 'Scaling' },
    { slug: 'shard-key-selection', title: 'Shard Key Selection', explanation: 'Choosing optimal shard keys and avoiding hot spots.', category: 'Scaling' },
    { slug: 'chunk-management', title: 'Chunk Management', explanation: 'Splitting, balancing, and chunk distribution optimization.', category: 'Scaling' },
    { slug: 'scaling-strategies', title: 'Scaling Strategies', explanation: 'When to shard, vertical scaling, and performance considerations.', category: 'Scaling' },

    // 10. SECURITY & COMPLIANCE (24-27 months)
    { slug: 'authentication-methods', title: 'Authentication Methods', explanation: 'SCRAM, LDAP, Kerberos, and x.509 certificate authentication.', category: 'Security' },
    { slug: 'role-based-access', title: 'Role-Based Access Control', explanation: 'Built-in roles, custom roles, and privilege management.', category: 'Security' },
    { slug: 'encryption-security', title: 'Encryption & Security', explanation: 'TLS/SSL, field-level encryption, and network security.', category: 'Security' },
    { slug: 'auditing-compliance', title: 'Auditing & Compliance', explanation: 'Database auditing, compliance requirements, and security monitoring.', category: 'Security' },
    { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'Hardening MongoDB, network security, and security policies.', category: 'Security' },

    // 11. MONITORING & PERFORMANCE (27-30 months)
    { slug: 'monitoring-tools', title: 'Monitoring Tools', explanation: 'MongoDB Compass, Cloud Manager, Ops Manager, and third-party tools.', category: 'Monitoring' },
    { slug: 'performance-metrics', title: 'Performance Metrics', explanation: 'Key metrics, performance counters, and monitoring dashboards.', category: 'Monitoring' },
    { slug: 'profiling-optimization', title: 'Database Profiling', explanation: 'Slow query analysis, profiling levels, and optimization.', category: 'Monitoring' },
    { slug: 'capacity-planning', title: 'Capacity Planning', explanation: 'Resource planning, scaling decisions, and performance forecasting.', category: 'Monitoring' },
    { slug: 'troubleshooting', title: 'Advanced Troubleshooting', explanation: 'Common issues, debugging techniques, and problem resolution.', category: 'Monitoring' },

    // 12. DEVOPS & AUTOMATION (30-33 months)
    { slug: 'docker-mongodb', title: 'MongoDB with Docker', explanation: 'Containerizing MongoDB, Docker Compose, and container orchestration.', category: 'DevOps' },
    { slug: 'kubernetes-mongodb', title: 'MongoDB on Kubernetes', explanation: 'StatefulSets, operators, and K8s deployment strategies.', category: 'DevOps' },
    { slug: 'ci-cd-integration', title: 'CI/CD Integration', explanation: 'Database migrations, automated testing, and deployment pipelines.', category: 'DevOps' },
    { slug: 'infrastructure-as-code', title: 'Infrastructure as Code', explanation: 'Terraform, Ansible, and automated database provisioning.', category: 'DevOps' },
    { slug: 'automation-scripts', title: 'Automation Scripts', explanation: 'Backup automation, maintenance scripts, and operational automation.', category: 'DevOps' },

    // 13. ADVANCED FEATURES (33-36 months)
    { slug: 'text-search', title: 'Full-Text Search', explanation: 'Text indexes, search operators, and search optimization.', category: 'Advanced Features' },
    { slug: 'geospatial-queries', title: 'Geospatial Queries', explanation: '2D/2dsphere indexes, location queries, and GIS applications.', category: 'Advanced Features' },
    { slug: 'time-series', title: 'Time Series Collections', explanation: 'Time series data, bucket patterns, and temporal analytics.', category: 'Advanced Features' },
    { slug: 'change-streams', title: 'Change Streams', explanation: 'Real-time data changes, event-driven applications, and CDC.', category: 'Advanced Features' },
    { slug: 'transactions', title: 'Multi-Document ACID Transactions', explanation: 'Transaction usage, isolation levels, and consistency guarantees.', category: 'Advanced Features' },

    // 14. MONGODB ECOSYSTEM (36-42 months)
    { slug: 'mongodb-drivers', title: 'MongoDB Drivers', explanation: 'Official drivers for Node.js, Python, Java, Go, and other languages.', category: 'Ecosystem' },
    { slug: 'mongoose-odm', title: 'Mongoose ODM', explanation: 'Schema modeling, validation, middleware, and advanced Mongoose features.', category: 'Ecosystem' },
    { slug: 'other-odms', title: 'Other ODMs & Libraries', explanation: 'Spring Data, Morphia, and other language-specific libraries.', category: 'Ecosystem' },
    { slug: 'mongodb-atlas', title: 'MongoDB Atlas Cloud', explanation: 'Managed service, serverless, global clusters, and cloud features.', category: 'Ecosystem' },
    { slug: 'integration-patterns', title: 'Integration Patterns', explanation: 'Microservices, message queues, ETL, and data pipelines.', category: 'Ecosystem' },

    // 15. EXPERT TOPICS (42+ months)
    { slug: 'mongodb-internals', title: 'MongoDB Internals', explanation: 'Storage engine, WiredTiger, memory management, and internals.', category: 'Expert' },
    { slug: 'custom-plugins', title: 'Custom Plugins & Extensions', explanation: 'User-defined functions, storage engine API, and extensions.', category: 'Expert' },
    { slug: 'distributed-systems', title: 'Distributed Systems Design', explanation: 'CAP theorem, consistency models, and distributed architecture.', category: 'Expert' },
    { slug: 'performance-tuning', title: 'Expert Performance Tuning', explanation: 'Advanced optimization, benchmarking, and performance engineering.', category: 'Expert' },
    { slug: 'database-architecture', title: 'Database Architecture', explanation: 'Large-scale design, patterns, and architectural decisions.', category: 'Expert' },
  ],
};
