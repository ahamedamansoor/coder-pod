import type { Roadmap } from './types';

export const redis: Roadmap = {
  slug: 'redis',
  name: 'Redis',
  description: 'In-memory data structure store for caching, messaging, and real-time applications',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Redis from basics to advanced caching strategies.' },

    // 1. ABSOLUTE BEGINNER (0-1 month)
    { slug: 'what-is-redis', title: 'What is Redis?', explanation: 'Introduction to Redis, in-memory databases, CAP theorem, and use cases.', category: 'Beginner' },
    { slug: 'redis-vs-databases', title: 'Redis vs Traditional Databases', explanation: 'Understanding when to use Redis vs SQL/NoSQL databases.', category: 'Beginner' },
    { slug: 'redis-installation', title: 'Installation & Setup', explanation: 'Installing Redis on all platforms, configuration, and basic setup.', category: 'Beginner' },
    { slug: 'redis-cli-basics', title: 'Redis CLI Basics', explanation: 'Basic commands, navigation, and getting started with redis-cli.', category: 'Beginner' },
    { slug: 'redis-gui-tools', title: 'Redis GUI Tools', explanation: 'RedisInsight, Redis Desktop Manager, and visual tools.', category: 'Beginner' },

    // 2. CORE DATA TYPES (1-3 months)
    { slug: 'strings-deep', title: 'Strings Deep Dive', explanation: 'SET, GET, INCR, DECR, MSET, MGET, and string operations.', category: 'Data Types' },
    { slug: 'hashes-comprehensive', title: 'Hashes Comprehensive', explanation: 'HSET, HGET, HMSET, HINCRBY, and hash field operations.', category: 'Data Types' },
    { slug: 'lists-operations', title: 'Lists Operations', explanation: 'LPUSH, RPUSH, LPOP, RPOP, LRANGE, and list manipulation.', category: 'Data Types' },
    { slug: 'sets-operations', title: 'Sets Operations', explanation: 'SADD, SMEMBERS, SINTER, SUNION, and set operations.', category: 'Data Types' },
    { slug: 'sorted-sets-basics', title: 'Sorted Sets Basics', explanation: 'ZADD, ZRANGE, ZRANK, ZSCORE, and scoring operations.', category: 'Data Types' },

    // 3. ADVANCED DATA STRUCTURES (3-6 months)
    { slug: 'sorted-sets-advanced', title: 'Advanced Sorted Sets', explanation: 'ZRANGEBYSCORE, ZREVRANK, ZLEXCOUNT, and complex operations.', category: 'Advanced Data Types' },
    { slug: 'hyperloglog-usage', title: 'HyperLogLog Usage', explanation: 'PFADD, PFCOUNT, PFMERGE, and cardinality estimation.', category: 'Advanced Data Types' },
    { slug: 'bitmaps-applications', title: 'Bitmaps Applications', explanation: 'SETBIT, GETBIT, BITOP, BITCOUNT, and bit manipulation.', category: 'Advanced Data Types' },
    { slug: 'streams-messaging', title: 'Streams & Messaging', explanation: 'XADD, XREAD, XGROUP, consumer groups, and message queues.', category: 'Advanced Data Types' },
    { slug: 'geospatial-data', title: 'Geospatial Data', explanation: 'GEOADD, GEODIST, GEORADIUS, and location-based queries.', category: 'Advanced Data Types' },

    // 4. CACHING PATTERNS (6-9 months)
    { slug: 'cache-aside-pattern', title: 'Cache-Aside Pattern', explanation: 'Implementing cache-aside strategy with TTL and invalidation.', category: 'Caching Patterns' },
    { slug: 'write-through-patterns', title: 'Write-Through Patterns', explanation: 'Write-through, write-behind, and write-around caching.', category: 'Caching Patterns' },
    { slug: 'cache-invalidation', title: 'Cache Invalidation Strategies', explanation: 'TTL, expiration, proactive and reactive invalidation.', category: 'Caching Patterns' },
    { slug: 'distributed-caching', title: 'Distributed Caching', explanation: 'Multi-instance caching, consistency, and distributed patterns.', category: 'Caching Patterns' },
    { slug: 'cache-warming', title: 'Cache Warming Strategies', explanation: 'Preloading, lazy loading, and cache population strategies.', category: 'Caching Patterns' },

    // 5. PERSISTENCE & DURABILITY (9-12 months)
    { slug: 'rdb-snapshots', title: 'RDB Snapshots', explanation: 'Snapshot configuration, save strategies, and recovery.', category: 'Persistence' },
    { slug: 'aof-logging', title: 'AOF Logging', explanation: 'Append-only file, fsync policies, and durability.', category: 'Persistence' },
    { slug: 'hybrid-persistence', title: 'Hybrid Persistence', explanation: 'Combining RDB and AOF for optimal performance and durability.', category: 'Persistence' },
    { slug: 'replication-basics', title: 'Replication Basics', explanation: 'Master-slave replication, sync, and async replication.', category: 'Persistence' },
    { slug: 'backup-strategies', title: 'Backup Strategies', explanation: 'Backup automation, point-in-time recovery, and disaster recovery.', category: 'Persistence' },

    // 6. PERFORMANCE OPTIMIZATION (12-15 months)
    { slug: 'memory-management', title: 'Memory Management', explanation: 'Memory usage analysis, maxmemory, and memory optimization.', category: 'Performance' },
    { slug: 'eviction-policies', title: 'Eviction Policies', explanation: 'LRU, LFU, TTL, and memory eviction strategies.', category: 'Performance' },
    { slug: 'command-optimization', title: 'Command Optimization', explanation: 'Command complexity, O(N) operations, and optimization.', category: 'Performance' },
    { slug: 'pipelining-techniques', title: 'Pipelining Techniques', explanation: 'Command pipelining, batching, and network optimization.', category: 'Performance' },
    { slug: 'connection-pooling', title: 'Connection Pooling', explanation: 'Connection management, pooling, and resource optimization.', category: 'Performance' },

    // 7. LUA SCRIPTING (15-18 months)
    { slug: 'lua-scripting-basics', title: 'Lua Scripting Basics', explanation: 'EVAL, EVALSHA, and basic Lua scripting in Redis.', category: 'Lua Scripting' },
    { slug: 'lua-script-optimization', title: 'Lua Script Optimization', explanation: 'Script caching, performance, and best practices.', category: 'Lua Scripting' },
    { slug: 'atomic-operations', title: 'Atomic Operations', explanation: 'Using Lua for atomic transactions and complex operations.', category: 'Lua Scripting' },
    { slug: 'script-debugging', title: 'Script Debugging', explanation: 'Debugging Lua scripts, error handling, and troubleshooting.', category: 'Lua Scripting' },
    { slug: 'advanced-lua-patterns', title: 'Advanced Lua Patterns', explanation: 'Complex business logic, rate limiting, and advanced patterns.', category: 'Lua Scripting' },

    // 8. SECURITY & AUTHENTICATION (18-21 months)
    { slug: 'authentication-setup', title: 'Authentication Setup', explanation: 'Password authentication, ACLs, and user management.', category: 'Security' },
    { slug: 'network-security', title: 'Network Security', explanation: 'TLS/SSL encryption, firewalls, and network hardening.', category: 'Security' },
    { slug: 'access-control-acls', title: 'Access Control (ACLs)', explanation: 'Role-based access, permissions, and security policies.', category: 'Security' },
    { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'Hardening Redis, security auditing, and compliance.', category: 'Security' },
    { slug: 'encryption-security', title: 'Encryption & Security', explanation: 'Data encryption, secure communication, and security monitoring.', category: 'Security' },

    // 9. HIGH AVAILABILITY (21-24 months)
    { slug: 'redis-sentinel', title: 'Redis Sentinel', explanation: 'High availability, failover, and sentinel configuration.', category: 'High Availability' },
    { slug: 'sentinel-monitoring', title: 'Sentinel Monitoring', explanation: 'Monitoring sentinels, failover testing, and maintenance.', category: 'High Availability' },
    { slug: 'replication-advanced', title: 'Advanced Replication', explanation: 'Partial replication, diskless replication, and optimization.', category: 'High Availability' },
    { slug: 'disaster-recovery', title: 'Disaster Recovery', explanation: 'DR planning, multi-region setup, and recovery procedures.', category: 'High Availability' },
    { slug: 'availability-testing', title: 'Availability Testing', explanation: 'Chaos engineering, failover testing, and resilience.', category: 'High Availability' },

    // 10. CLUSTERING & SCALING (24-30 months)
    { slug: 'redis-cluster-setup', title: 'Redis Cluster Setup', explanation: 'Cluster configuration, sharding, and distributed setup.', category: 'Clustering' },
    { slug: 'cluster-architecture', title: 'Cluster Architecture', explanation: 'Hash slots, node management, and cluster topology.', category: 'Clustering' },
    { slug: 'cluster-scaling', title: 'Cluster Scaling', explanation: 'Adding nodes, resharding, and cluster expansion.', category: 'Clustering' },
    { slug: 'cluster-operations', title: 'Cluster Operations', explanation: 'Maintenance, monitoring, and cluster management.', category: 'Clustering' },
    { slug: 'scaling-strategies', title: 'Scaling Strategies', explanation: 'Horizontal scaling, read replicas, and architecture patterns.', category: 'Clustering' },

    // 11. MONITORING & OBSERVABILITY (30-33 months)
    { slug: 'redis-monitoring', title: 'Redis Monitoring', explanation: 'INFO command, metrics collection, and monitoring basics.', category: 'Monitoring' },
    { slug: 'performance-metrics', title: 'Performance Metrics', explanation: 'Key metrics, performance counters, and analysis.', category: 'Monitoring' },
    { slug: 'slow-query-analysis', title: 'Slow Query Analysis', explanation: 'SLOWLOG, query optimization, and performance tuning.', category: 'Monitoring' },
    { slug: 'monitoring-tools', title: 'Monitoring Tools', explanation: 'Prometheus, Grafana, Redis monitoring solutions.', category: 'Monitoring' },
    { slug: 'alerting-strategies', title: 'Alerting Strategies', explanation: 'Alert rules, notification systems, and incident response.', category: 'Monitoring' },

    // 12. DEVOPS & AUTOMATION (33-36 months)
    { slug: 'docker-redis', title: 'Redis with Docker', explanation: 'Containerizing Redis, Docker Compose, and orchestration.', category: 'DevOps' },
    { slug: 'kubernetes-redis', title: 'Redis on Kubernetes', explanation: 'StatefulSets, operators, and K8s deployment.', category: 'DevOps' },
    { slug: 'ci-cd-integration', title: 'CI/CD Integration', explanation: 'Automated testing, deployment pipelines, and GitOps.', category: 'DevOps' },
    { slug: 'infrastructure-as-code', title: 'Infrastructure as Code', explanation: 'Terraform, Ansible, and automated provisioning.', category: 'DevOps' },
    { slug: 'automation-scripts', title: 'Automation Scripts', explanation: 'Backup automation, maintenance scripts, and operational automation.', category: 'DevOps' },

    // 13. REDIS MODULES & EXTENSIONS (36-42 months)
    { slug: 'redisjson-module', title: 'RedisJSON Module', explanation: 'JSON data type, JSON operations, and document storage.', category: 'Redis Modules' },
    { slug: 'redissearch-module', title: 'RedisSearch Module', explanation: 'Full-text search, indexing, and advanced search capabilities.', category: 'Redis Modules' },
    { slug: 'redistimeseries-module', title: 'RedisTimeSeries Module', explanation: 'Time series data, aggregation, and temporal analytics.', category: 'Redis Modules' },
    { slug: 'redisgraph-module', title: 'RedisGraph Module', explanation: 'Graph database, Cypher queries, and relationship data.', category: 'Redis Modules' },
    { slug: 'custom-modules', title: 'Custom Modules', explanation: 'Building custom Redis modules and extensions.', category: 'Redis Modules' },

    // 14. ADVANCED PATTERNS (42-48 months)
    { slug: 'rate-limiting', title: 'Rate Limiting Patterns', explanation: 'Sliding window, token bucket, and rate limiting implementations.', category: 'Advanced Patterns' },
    { slug: 'leader-election', title: 'Leader Election', explanation: 'Distributed leader election and coordination patterns.', category: 'Advanced Patterns' },
    { slug: 'distributed-locks', title: 'Distributed Locks', explanation: 'Redlock algorithm, distributed locking, and concurrency control.', category: 'Advanced Patterns' },
    { slug: 'message-queues', title: 'Advanced Message Queues', explanation: 'Reliable messaging, dead letter queues, and patterns.', category: 'Advanced Patterns' },
    { slug: 'real-time-analytics', title: 'Real-time Analytics', explanation: 'Stream processing, real-time calculations, and analytics.', category: 'Advanced Patterns' },

    // 15. REDIS ECOSYSTEM (48-54 months)
    { slug: 'redis-clients-comprehensive', title: 'Redis Clients Comprehensive', explanation: 'Official clients for all languages and best practices.', category: 'Ecosystem' },
    { slug: 'redis-cloud-services', title: 'Redis Cloud Services', explanation: 'Redis Enterprise Cloud, AWS ElastiCache, and managed services.', category: 'Ecosystem' },
    { slug: 'integration-patterns', title: 'Integration Patterns', explanation: 'Redis with databases, microservices, and message queues.', category: 'Ecosystem' },
    { slug: 'microservices-architecture', title: 'Microservices Architecture', explanation: 'Redis in microservices, service discovery, and coordination.', category: 'Ecosystem' },
    { slug: 'performance-benchmarking', title: 'Performance Benchmarking', explanation: 'Load testing, performance analysis, and optimization.', category: 'Ecosystem' },

    // 16. EXPERT TOPICS (54+ months)
    { slug: 'redis-internals', title: 'Redis Internals', explanation: 'Source code, internal architecture, and deep understanding.', category: 'Expert' },
    { slug: 'custom-data-structures', title: 'Custom Data Structures', explanation: 'Building custom data types and advanced structures.', category: 'Expert' },
    { slug: 'performance-engineering', title: 'Performance Engineering', explanation: 'Advanced tuning, optimization at scale, and performance art.', category: 'Expert' },
    { slug: 'distributed-systems', title: 'Distributed Systems Design', explanation: 'Redis in distributed systems, consensus, and coordination.', category: 'Expert' },
    { slug: 'redis-contributions', title: 'Redis Contributions', explanation: 'Contributing to Redis, community involvement, and open source.', category: 'Expert' },
  ],
};
