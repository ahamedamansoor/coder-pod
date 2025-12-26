import { Database } from 'lucide-react';

export const redisCheatsheet = {
  id: 'redis',
  name: 'Redis',
  description: 'Master Redis from basics to advanced features (Redis 7.x)',
  icon: Database,
  colorTheme: 'red' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Redis',
      commands: [
        {
          command: 'Redis Overview',
          description: 'Introduction to Redis database',
          usage: 'Understanding Redis features',
          example: `Redis Overview:
- In-memory data structure store
- Key-value database with multiple data types
- Single-threaded, event-driven architecture
- Persistent storage options (RDB, AOF)
- Pub/Sub messaging
- Built-in replication and clustering
- High performance (100K+ ops/sec)
- Rich data structures (strings, hashes, lists, sets, sorted sets)
- Lua scripting support
- Client libraries for all major languages`,
        },
        {
          command: 'Install Redis Ubuntu',
          description: 'Install Redis on Ubuntu/Debian',
          usage: 'apt package manager installation',
          example: `# Ubuntu/Debian Installation
sudo apt update
sudo apt install redis-server`,
        },
        {
          command: 'Install Redis macOS',
          description: 'Install Redis on macOS with Homebrew',
          usage: 'Homebrew installation',
          example: `# macOS with Homebrew
brew install redis
brew services start redis`,
        },
        {
          command: 'Install Redis Windows',
          description: 'Install Redis on Windows via WSL',
          usage: 'WSL installation',
          example: `# Windows (WSL)
wsl --install
sudo apt update
sudo apt install redis-server`,
        },
        {
          command: 'Install Redis CentOS',
          description: 'Install Redis on CentOS/RHEL',
          usage: 'yum package manager installation',
          example: `# CentOS/RHEL Installation
sudo yum install epel-release
sudo yum install redis`,
        },
        {
          command: 'Install Redis Source',
          description: 'Compile Redis from source',
          usage: 'Build from source code',
          example: `# From source (latest version)
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
make install`,
        },
        {
          command: 'Verify Redis Installation',
          description: 'Check Redis version and installation',
          usage: 'redis-server, redis-cli version commands',
          example: `# Verify Installation
redis-server --version
redis-cli --version`,
        },
        {
          command: 'Start Redis Server',
          description: 'Start Redis server',
          usage: 'redis-server command',
          example: `# Start Redis server
redis-server

# Start in background
redis-server --daemonize yes

# Start with config file
redis-server /etc/redis/redis.conf`,
        },
        {
          command: 'Connect to Redis',
          description: 'Connect to Redis server',
          usage: 'redis-cli command',
          example: `# Connect to Redis
redis-cli

# Connect to remote server
redis-cli -h hostname -p 6379

# Connect with password
redis-cli -a password

# Connect to specific database
redis-cli -n 1`,
        },
        {
          command: 'Redis CLI Basic Commands',
          description: 'Essential Redis CLI commands',
          usage: 'Basic redis-cli operations',
          example: `# Basic CLI commands
PING                    # Test connection
INFO                    # Server information
CONFIG GET *            # All configuration
DBSIZE                  # Number of keys
FLUSHALL                # Delete all keys
FLUSHDB                 # Delete keys in current DB
SELECT 1                # Switch to database 1
ECHO "Hello Redis"      # Echo message
QUIT                    # Exit CLI`,
        },
        {
          command: 'String Operations Basic',
          description: 'Basic string operations',
          usage: 'SET, GET, DEL commands',
          example: `# Basic string operations
SET key value           # Set key-value
GET key                 # Get value
DEL key                 # Delete key
EXISTS key              # Check if key exists
TYPE key                # Get data type
KEYS pattern            # Find keys by pattern`,
        },
        {
          command: 'String Expiration',
          description: 'Set expiration on keys',
          usage: 'EXPIRE, TTL commands',
          example: `# Expiration operations
SET key value EX 60    # Set with 60s expiration
EXPIRE key 60          # Set expiration
TTL key                # Time to live
PERSIST key            # Remove expiration
EXPIREAT key timestamp # Expire at Unix time`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Strings',
      commands: [
        {
          command: 'SET Command',
          description: 'Set string value',
          usage: 'SET with options',
          example: `# SET command variations
SET key value                    # Simple set
SET key value EX 60              # With expiration
SET key value NX                 # Only if not exists
SET key value XX                 # Only if exists
SET key value KEEPTTL           # Keep existing TTL`,
        },
        {
          command: 'GET Command',
          description: 'Get string value',
          usage: 'GET and related commands',
          example: `# GET command
GET key                         # Get value
GETRANGE key 0 4                # Get substring
STRLEN key                      # String length`,
        },
        {
          command: 'MSET and MGET',
          description: 'Multiple string operations',
          usage: 'Bulk string operations',
          example: `# Multiple operations
MSET key1 value1 key2 value2    # Set multiple keys
MGET key1 key2                  # Get multiple values
MSETNX key1 value1 key2 value2  # Set multiple if not exists`,
        },
        {
          command: 'String Increment/Decrement',
          description: 'Numeric operations on strings',
          usage: 'INCR, DECR commands',
          example: `# Numeric operations
INCR key                       # Increment by 1
INCRBY key 5                   # Increment by amount
DECR key                       # Decrement by 1
DECRBY key 3                   # Decrement by amount
INCRBYFLOAT key 2.5            # Increment by float`,
        },
        {
          command: 'String Append',
          description: 'Append to string values',
          usage: 'APPEND command',
          example: `# String append
APPEND key " more text"        # Append to string
STRLEN key                     # Check new length`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Hashes',
      commands: [
        {
          command: 'Hash Basic Operations',
          description: 'Basic hash operations',
          usage: 'HSET, HGET, HDEL',
          example: `# Basic hash operations
HSET key field value           # Set field in hash
HGET key field                 # Get field value
HDEL key field                 # Delete field
HEXISTS key field              # Check field exists
HLEN key                       # Number of fields`,
        },
        {
          command: 'Hash Multiple Operations',
          description: 'Multiple field operations',
          usage: 'HMSET, HMGET',
          example: `# Multiple field operations
HMSET key field1 value1 field2 value2  # Set multiple fields
HMGET key field1 field2                 # Get multiple values
HGETALL key                             # Get all fields and values`,
        },
        {
          command: 'Hash Field Operations',
          description: 'Hash field management',
          usage: 'HKEYS, HVALS, HSCAN',
          example: `# Field operations
HKEYS key                      # Get all field names
HVALS key                      # Get all values
HSCAN key 0 MATCH field*       # Scan fields
HINCRBY key field 5            # Increment field value
HINCRBYFLOAT key field 2.5     # Increment field by float`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Lists',
      commands: [
        {
          command: 'List Basic Operations',
          description: 'Basic list operations',
          usage: 'LPUSH, RPUSH, LPOP, RPOP',
          example: `# Basic list operations
LPUSH key value1 value2       # Push to left
RPUSH key value3 value4       # Push to right
LPOP key                       # Pop from left
RPOP key                       # Pop from right
LLEN key                       # List length`,
        },
        {
          command: 'List Range Operations',
          description: 'List range and indexing',
          usage: 'LRANGE, LINDEX',
          example: `# Range operations
LRANGE key 0 -1               # Get all elements
LRANGE key 0 2                # Get first 3 elements
LINDEX key 1                  # Get element at index
LTRIM key 0 2                 # Keep only first 3 elements`,
        },
        {
          command: 'List Blocking Operations',
          description: 'Blocking list operations',
          usage: 'BLPOP, BRPOP',
          example: `# Blocking operations
BLPOP key1 key2 10            # Pop from first non-empty list (10s timeout)
BRPOP key1 key2 10            # Pop from right
BLPOPLPUSH source dest 10     # Pop and push with blocking`,
        },
        {
          command: 'List Insert and Remove',
          description: 'Insert and remove from lists',
          usage: 'LINSERT, LREM',
          example: `# Insert and remove
LINSERT key BEFORE value1 newvalue  # Insert before
LINSERT key AFTER value1 newvalue   # Insert after
LREM key 1 value                     # Remove first occurrence
LREM key -1 value                    # Remove last occurrence
LREM key 0 value                     # Remove all occurrences`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Sets',
      commands: [
        {
          command: 'Set Basic Operations',
          description: 'Basic set operations',
          usage: 'SADD, SMEMBERS, SREM',
          example: `# Basic set operations
SADD key member1 member2       # Add members
SMEMBERS key                   # Get all members
SREM key member1               # Remove member
SCARD key                      # Set size
SISMEMBER key member           # Check membership`,
        },
        {
          command: 'Set Operations',
          description: 'Set mathematical operations',
          usage: 'SUNION, SINTER, SDIFF',
          example: `# Set operations
SUNION key1 key2               # Union of sets
SINTER key1 key2               # Intersection of sets
SDIFF key1 key2                # Difference of sets
SUNIONSTORE dest key1 key2     # Store union in destination
SINTERSTORE dest key1 key2     # Store intersection
SDIFFSTORE dest key1 key2      # Store difference`,
        },
        {
          command: 'Set Random Operations',
          description: 'Random member operations',
          usage: 'SRANDMEMBER, SPOP',
          example: `# Random operations
SRANDMEMBER key                # Get random member
SRANDMEMBER key 3              # Get 3 random members
SPOP key                       # Remove and return random member
SPOP key 3                     # Remove and return 3 random members`,
        },
        {
          command: 'Set Scan Operations',
          description: 'Iterate through set members',
          usage: 'SSCAN command',
          example: `# Scan operations
SSCAN key 0 MATCH pattern*     # Scan with pattern
SSCAN key 0 COUNT 100          # Scan with count`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Sorted Sets',
      commands: [
        {
          command: 'Sorted Set Basic Operations',
          description: 'Basic sorted set operations',
          usage: 'ZADD, ZRANGE, ZREM',
          example: `# Basic sorted set operations
ZADD key score1 member1 score2 member2  # Add with scores
ZRANGE key 0 -1                       # Get all members (ascending)
ZREVRANGE key 0 -1                    # Get all members (descending)
ZREM key member1                       # Remove member
ZCARD key                              # Set size`,
        },
        {
          command: 'Sorted Set Score Operations',
          description: 'Score-based operations',
          usage: 'ZSCORE, ZINCRBY',
          example: `# Score operations
ZSCORE key member1                    # Get score of member
ZINCRBY key 5 member1                 # Increment score
ZRANGEBYSCORE key min max              # Get by score range
ZREVRANGEBYSCORE key max min           # Get by score range (desc)`,
        },
        {
          command: 'Sorted Set Rank Operations',
          description: 'Rank-based operations',
          usage: 'ZRANK, ZREVRANK',
          example: `# Rank operations
ZRANK key member1                     # Get rank (ascending)
ZREVRANK key member1                  # Get rank (descending)
ZRANGE key 0 2 WITHSCORES            # Get range with scores
ZREVRANGE key 0 2 WITHSCORES         # Get range with scores (desc)`,
        },
        {
          command: 'Sorted Set Operations',
          description: 'Sorted set mathematical operations',
          usage: 'ZUNION, ZINTER',
          example: `# Sorted set operations
ZUNIONSTORE dest 2 key1 key2 WEIGHTS 1 2  # Union with weights
ZINTERSTORE dest 2 key1 key2 WEIGHTS 1 2  # Intersection with weights
ZUNIONSTORE dest 2 key1 key2 AGGREGATE SUM  # Aggregate function
ZINTERSTORE dest 2 key1 key2 AGGREGATE MIN  # Aggregate function`,
        },
        {
          command: 'Sorted Set Range Queries',
          description: 'Advanced range queries',
          usage: 'ZRANGEBYLEX, ZREMRANGEBYRANK',
          example: `# Advanced range queries
ZRANGEBYLEX key [a [z               # Lexicographical range
ZREMRANGEBYRANK key 0 2             # Remove by rank
ZREMRANGEBYSCORE key min max         # Remove by score
ZLEXCOUNT key [a [z                  # Count lexicographical range`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Redis Advanced Data Types',
      commands: [
        {
          command: 'HyperLogLog Operations',
          description: 'Probabilistic cardinality estimation',
          usage: 'PFADD, PFCOUNT, PFMERGE',
          example: `# HyperLogLog operations
PFADD key element1 element2      # Add elements
PFCOUNT key                      # Count unique elements
PFMERGE dest key1 key2          # Merge HyperLogLogs
PFADD key element3               # Add more elements`,
        },
        {
          command: 'Bitmap Operations',
          description: 'Bitmap data type operations',
          usage: 'SETBIT, GETBIT, BITCOUNT',
          example: `# Bitmap operations
SETBIT key offset 1              # Set bit at offset
GETBIT key offset                # Get bit value
BITCOUNT key                     # Count set bits
BITCOUNT key 0 10               # Count bits in range
BITOP AND dest key1 key2        # Bitwise operations
BITOP OR dest key1 key2
BITOP XOR dest key1 key2
BITOP NOT dest key`,
        },
        {
          command: 'Bitmap Position Operations',
          description: 'Find bit positions',
          usage: 'BITPOS command',
          example: `# Bit position operations
BITPOS key 1                    # Find first set bit
BITPOS key 0                    # Find first unset bit
BITPOS key 1 5                  # Find first set bit after offset 5`,
        },
        {
          command: 'Geospatial Operations',
          description: 'Geospatial data operations',
          usage: 'GEOADD, GEODIST, GEORADIUS',
          example: `# Geospatial operations
GEOADD key longitude latitude member1  # Add location
GEODIST key member1 member2           # Calculate distance
GEODIST key member1 member2 km        # Distance in kilometers
GEORADIUS key lon lat radius km       # Find locations within radius
GEORADIUS key member radius km        # Find locations near member
GEOPOS key member1 member2            # Get coordinates
GEOHASH key member1                   # Get geohash`,
        },
        {
          command: 'Stream Operations Basic',
          description: 'Redis Streams basic operations',
          usage: 'XADD, XREAD, XRANGE',
          example: `# Stream basic operations
XADD mystream * field1 value1 field2 value2  # Add entry
XADD mystream 1000 field value               # Add with ID
XREAD COUNT 2 STREAMS mystream 0-0          # Read from stream
XREAD BLOCK 1000 STREAMS mystream $          # Block for new entries
XRANGE mystream - +                         # Read all entries
XRANGE mystREAM start end COUNT 10           # Read range with limit`,
        },
        {
          command: 'Stream Consumer Groups',
          description: 'Stream consumer group operations',
          usage: 'XGROUP, XREADGROUP',
          example: `# Consumer group operations
XGROUP CREATE mystream mygroup 0            # Create consumer group
XREADGROUP GROUP mygroup consumer1 COUNT 1 STREAMS mystream >  # Read
XACK mystream mygroup entryID               # Acknowledge message
XGROUP SETID mystream mygroup 0             # Set group ID
XGROUP DELCONSUMER mystream mygroup consumer1  # Delete consumer
XGROUP DESTROY mystream mygroup             # Delete group`,
        },
        {
          command: 'Stream Pending Operations',
          description: 'Handle pending stream messages',
          usage: 'XPENDING, XCLAIM',
          example: `# Pending operations
XPENDING mystream mygroup                   # List pending messages
XPENDING mystream mygroup consumer1         # Pending for consumer
XCLAIM mystream mygroup consumer2 1000 entryID  # Claim message
XDEL mystream entryID                       # Delete entry
XTRIM mystream MAXLEN 1000                 # Trim stream`,
        },
      ],
    },
    {
      title: 'Redis Pub/Sub',
      commands: [
        {
          command: 'Publish Subscribe Basic',
          description: 'Basic pub/sub operations',
          usage: 'PUBLISH, SUBSCRIBE',
          example: `# Basic pub/sub
SUBSCRIBE channel1 channel2           # Subscribe to channels
UNSUBSCRIBE channel1                  # Unsubscribe from channel
PUBLISH channel1 "Hello World"        # Publish message
PSUBSCRIBE pattern*                  # Subscribe to pattern
PUNSUBSCRIBE pattern*                 # Unsubscribe from pattern`,
        },
        {
          command: 'Pub/Sub Advanced',
          description: 'Advanced pub/sub features',
          usage: 'PUBSUB commands',
          example: `# Advanced pub/sub
PUBSUB CHANNELS                      # List active channels
PUBSUB NUMSUB channel1 channel2      # Count subscribers
PUBSUB NUMPAT                        # Count pattern subscriptions
PUBSUB SHARDCHANNELS                 # Sharded channels
SPUBLISH shard_channel message        # Publish to shard channel
SSUBSCRIBE shard_channel1            # Subscribe to shard channel`,
        },
      ],
    },
    {
      title: 'Redis Transactions',
      commands: [
        {
          command: 'Transaction Basic',
          description: 'Basic transaction operations',
          usage: 'MULTI, EXEC, DISCARD',
          example: `# Basic transaction
MULTI                               # Start transaction
SET key1 value1
SET key2 value2
GET key1
EXEC                                # Execute transaction
DISCARD                             # Discard transaction`,
        },
        {
          command: 'Watch Command',
          description: 'Optimistic locking with WATCH',
          usage: 'WATCH, UNWATCH',
          example: `# Optimistic locking
WATCH key1                          # Watch key
GET key1
# In another client: SET key1 newvalue
MULTI
SET key1 newervalue
EXEC                                # Fails if key1 was modified
UNWATCH                            # Stop watching`,
        },
      ],
    },
    {
      title: 'Redis Scripting with Lua',
      commands: [
        {
          command: 'Lua Script Basic',
          description: 'Execute Lua scripts',
          usage: 'EVAL command',
          example: `# Basic Lua script
EVAL "return 'Hello'" 0
EVAL "return KEYS[1] .. ' ' .. ARGV[1]" 1 key1 arg1
EVAL "return redis.call('GET', KEYS[1])" 1 mykey`,
        },
        {
          command: 'Lua Script with Redis Calls',
          description: 'Lua scripts with Redis operations',
          usage: 'redis.call in Lua',
          example: `# Lua script with Redis calls
EVAL "
local value = redis.call('GET', KEYS[1])
if value then
    return value
else
    return 'not found'
end
" 1 mykey`,
        },
        {
          command: 'Script Management',
          description: 'Load and manage scripts',
          usage: 'SCRIPT command',
          example: `# Script management
SCRIPT LOAD "return 'Hello'"        # Load script
SCRIPT EXISTS sha1digest           # Check if script exists
SCRIPT FLUSH                       # Remove all scripts
EVALSHA sha1digest 0               # Execute by SHA`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Redis Persistence',
      commands: [
        {
          command: 'RDB Persistence',
          description: 'Redis Database persistence',
          usage: 'SAVE, BGSAVE commands',
          example: `# RDB persistence
SAVE                              # Save to disk (blocking)
BGSAVE                            # Save to disk (background)
LASTSAVE                          # Get last save timestamp
CONFIG GET save                   # Get save configuration
CONFIG SET save "900 1 300 10"   # Set save policy`,
        },
        {
          command: 'AOF Persistence',
          description: 'Append Only File persistence',
          usage: 'AOF configuration',
          example: `# AOF persistence
CONFIG GET appendonly             # Check AOF status
CONFIG SET appendonly yes         # Enable AOF
CONFIG GET appendfsync           # Check fsync policy
CONFIG SET appendfsync everysec  # Set fsync policy
BGREWRITEAOF                     # Rewrite AOF file`,
        },
        {
          command: 'Persistence Configuration',
          description: 'Configure persistence options',
          usage: 'redis.conf settings',
          example: `# redis.conf persistence settings
save 900 1                       # Save if 1 key changes in 15min
save 300 10                      # Save if 10 keys change in 5min
save 60 10000                    # Save if 10000 keys change in 1min
appendonly yes                   # Enable AOF
appendfsync everysec             # AOF fsync policy
stop-writes-on-bgsave-error yes  # Stop writes on save error`,
        },
      ],
    },
    {
      title: 'Redis Memory Management',
      commands: [
        {
          command: 'Memory Usage Analysis',
          description: 'Analyze memory usage',
          usage: 'MEMORY commands',
          example: `# Memory analysis
MEMORY USAGE key                  # Memory used by key
MEMORY STATS                      # Memory statistics
MEMORY PURGE                      # Clean memory
CONFIG GET maxmemory              # Get memory limit
CONFIG SET maxmemory 1gb          # Set memory limit`,
        },
        {
          command: 'Eviction Policies',
          description: 'Configure memory eviction',
          usage: 'maxmemory-policy',
          example: `# Eviction policies
CONFIG SET maxmemory-policy allkeys-lru    # Evict LRU among all keys
CONFIG SET maxmemory-policy volatile-lru   # Evict LRU among volatile keys
CONFIG SET maxmemory-policy allkeys-lfu    # Evict LFU among all keys
CONFIG SET maxmemory-policy volatile-lfu   # Evict LFU among volatile keys
CONFIG SET maxmemory-policy volatile-random # Evict random volatile keys
CONFIG SET maxmemory-policy allkeys-random # Evict random keys
CONFIG SET maxmemory-policy volatile-ttl   # Evict keys with shortest TTL
CONFIG SET maxmemory-policy noeviction     # Return errors on memory limit`,
        },
        {
          command: 'Memory Optimization',
          description: 'Optimize memory usage',
          usage: 'Memory optimization techniques',
          example: `# Memory optimization
# Use appropriate data types
# Use hashes for objects with few fields
# Use ziplist encoding for small lists/sets
# Use int encoding for numbers
# Use short key names
# Set hash-max-ziplist-entries
# Set list-max-ziplist-size`,
        },
      ],
    },
    {
      title: 'Redis Security',
      commands: [
        {
          command: 'Authentication',
          description: 'Configure Redis authentication',
          usage: 'requirepass setting',
          example: `# Authentication
CONFIG SET requirepass mypassword    # Set password
AUTH mypassword                      # Authenticate
CONFIG GET requirepass               # Get password setting
CONFIG SET requirepass ""            # Remove password`,
        },
        {
          command: 'Network Security',
          description: 'Secure network access',
          usage: 'bind and port settings',
          example: `# Network security
CONFIG SET bind "127.0.0.1 10.0.0.1"  # Bind to specific IPs
CONFIG SET port 6379                   # Set port
CONFIG SET protected-mode yes          # Enable protected mode
CONFIG SET timeout 300                 # Client timeout`,
        },
        {
          command: 'Command Renaming',
          description: 'Rename or disable dangerous commands',
          usage: 'rename-command setting',
          example: `# Command renaming
CONFIG SET rename-command FLUSHDB ""      # Disable FLUSHDB
CONFIG SET rename-command FLUSHALL ""     # Disable FLUSHALL
CONFIG SET rename-command CONFIG "CONFIG_HIDDEN"  # Rename CONFIG
CONFIG SET rename-command SHUTDOWN "SHUTDOWN_HIDDEN"`,
        },
        {
          command: 'TLS Configuration',
          description: 'Configure TLS encryption',
          usage: 'TLS settings',
          example: `# TLS configuration
CONFIG SET tls-port 6380              # TLS port
CONFIG SET tls-cert-file /path/to/cert.pem
CONFIG SET tls-key-file /path/to/key.pem
CONFIG SET tls-ca-cert-file /path/to/ca.pem
CONFIG SET tls-auth-clients yes`,
        },
      ],
    },
    {
      title: 'Redis Performance Optimization',
      commands: [
        {
          command: 'Performance Monitoring',
          description: 'Monitor Redis performance',
          usage: 'INFO and MONITOR commands',
          example: `# Performance monitoring
INFO memory                         # Memory info
INFO stats                          # Statistics
INFO cpu                            # CPU usage
INFO commandstats                   # Command statistics
MONITOR                             # Real-time commands
SLOWLOG GET 10                     # Get slow queries
SLOWLOG RESET                      # Reset slow log`,
        },
        {
          command: 'Performance Tuning',
          description: 'Tune Redis for performance',
          usage: 'Performance settings',
          example: `# Performance tuning
CONFIG SET tcp-keepalive 300        # TCP keepalive
CONFIG SET timeout 0               # Client timeout (0 = disable)
CONFIG SET tcp-backlog 511          # TCP backlog
CONFIG SET databases 16             # Number of databases
CONFIG SET hash-max-ziplist-entries 512
CONFIG SET list-max-ziplist-size -2
CONFIG SET set-max-intset-entries 512`,
        },
        {
          command: 'Pipeline Operations',
          description: 'Use pipelining for performance',
          usage: 'Redis pipelining',
          example: `# Pipelining (client-side)
# Send multiple commands without waiting for responses
# Reduces network round trips
# Example in redis-cli with --pipe option
echo -en "SET key1 value1\\nSET key2 value2\\n" | redis-cli --pipe`,
        },
      ],
    },
    {
      title: 'Redis Replication',
      commands: [
        {
          command: 'Master-Slave Setup',
          description: 'Configure master-slave replication',
          usage: 'REPLICAOF command',
          example: `# Master-slave replication
# On slave:
REPLICAOF master_ip 6379           # Become slave of master
REPLICAOF NO ONE                  # Stop being slave
# In redis.conf:
# replicaof 192.168.1.100 6379
# masterauth password`,
        },
        {
          command: 'Replication Monitoring',
          description: 'Monitor replication status',
          usage: 'REPLICATION command',
          example: `# Replication monitoring
INFO replication                  # Replication info
REPLICAOF NO ONE                  # Promote slave to master
ROLE                              # Get server role
PSYNC                              # Partial resynchronization
SYNC                              # Full resynchronization`,
        },
        {
          command: 'Replication Configuration',
          description: 'Configure replication settings',
          usage: 'replication settings',
          example: `# Replication configuration
CONFIG SET replica-read-only yes      # Slaves read-only
CONFIG SET replica-serve-stale-data yes
CONFIG SET repl-diskless-sync no       # Diskless replication
CONFIG SET repl-backlog-size 1mb       # Replication backlog
CONFIG SET min-replicas-to-write 2     # Minimum replicas for writes
CONFIG SET min-replicas-max-lag 10     # Max replica lag`,
        },
      ],
    },
    {
      title: 'Redis Clustering',
      commands: [
        {
          command: 'Cluster Setup',
          description: 'Set up Redis Cluster',
          usage: 'redis-cli --cluster create',
          example: `# Create cluster
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 \\
127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \\
--cluster-replicas 1

# Add node to cluster
redis-cli --cluster add-node 127.0.0.1:7006 127.0.0.1:7000`,
        },
        {
          command: 'Cluster Operations',
          description: 'Manage Redis Cluster',
          usage: 'cluster commands',
          example: `# Cluster operations
CLUSTER NODES                      # List cluster nodes
CLUSTER INFO                       # Cluster information
CLUSTER SLOTS                      # Show slot ranges
CLUSTER KEYSLOT key                # Get slot for key
CLUSTER COUNTKEYSINSLOT slot       # Count keys in slot
CLUSTER GETKEYSINSLOT slot         # Get keys in slot`,
        },
        {
          command: 'Cluster Failover',
          description: 'Handle cluster failover',
          usage: 'cluster failover',
          example: `# Cluster failover
CLUSTER FAILOVER                   # Manual failover
CLUSTER FAILOVER FORCE            # Force failover
CLUSTER FAILOVER TAKEOVER         # Takeover without consensus
CLUSTER SETSLOT slot IMPORTING     # Import slot
CLUSTER SETSLOT slot MIGRATING     # Migrate slot`,
        },
        {
          command: 'Cluster Configuration',
          description: 'Configure cluster settings',
          usage: 'cluster settings',
          example: `# Cluster configuration
CONFIG SET cluster-enabled yes           # Enable cluster
CONFIG SET cluster-config-file nodes.conf
CONFIG SET cluster-node-timeout 15000
CONFIG SET cluster-require-full-coverage yes
CONFIG SET cluster-migration-barrier 1
CONFIG SET cluster-slave-validity-factor 10`,
        },
      ],
    },
    {
      title: 'Redis Modules and Extensions',
      commands: [
        {
          command: 'RedisJSON Module',
          description: 'JSON data type operations',
          usage: 'JSON commands',
          example: `# RedisJSON operations
JSON.SET key $ '{"name": "John", "age": 30}'
JSON.GET key
JSON.GET key $.name
JSON.SET key $.age 31
JSON.ARRAPPEND key $.hobbies "reading"
JSON.OBJLEN key
JSON.TYPE key $.age`,
        },
        {
          command: 'RedisTimeSeries Module',
          description: 'Time series data operations',
          usage: 'TS commands',
          example: `# Time series operations
TS.CREATE temperature RETENTION 864000000
TS.ADD temperature 1609459200000 25.5
TS.ADD temperature * 26.0
TS.RANGE temperature - +
TS.GET temperature
TS.MADD temperature1 1609459200000 25 temperature2 1609459200000 30`,
        },
        {
          command: 'RedisSearch Module',
          description: 'Full-text search capabilities',
          usage: 'FT commands',
          example: `# Search operations
FT.CREATE idx ON HASH PREFIX 1 doc: SCHEMA title TEXT body TEXT
FT.SEARCH idx "hello world"
FT.SEARCH idx "@title:(hello) @body:(world)"
FT.AGGREGATE idx "*" LOAD 1 title GROUPBY 1 title REDUCE COUNT 0 as count`,
        },
        {
          command: 'RedisBloom Module',
          description: 'Probabilistic data structures',
          usage: 'Bloom filter commands',
          example: `# Bloom filter operations
BF.ADD myfilter item1
BF.ADD myfilter item2
BF.EXISTS myfilter item1
BF.MEXISTS myfilter item1 item2 item3
CF.ADD mycfilter item1
CF.EXISTS mycfilter item1
CMS.INCRBY mycounter item1 5`,
        },
        {
          command: 'RedisGraph Module',
          description: 'Graph database operations',
          usage: 'Graph commands',
          example: `# Graph operations
GRAPH.QUERY social "CREATE (:Person {name: 'John'})"
GRAPH.QUERY social "CREATE (:Person {name: 'Jane'})"
GRAPH.QUERY social "MATCH (a:Person)-[:FRIENDS]->(b:Person) RETURN a.name, b.name"
GRAPH.QUERY social "MATCH (p:Person) WHERE p.name = 'John' RETURN p"`,
        },
      ],
    },
    {
      title: 'Redis Monitoring and Debugging',
      commands: [
        {
          command: 'Real-time Monitoring',
          description: 'Monitor Redis in real-time',
          usage: 'MONITOR and DEBUG commands',
          example: `# Real-time monitoring
MONITOR                           # Monitor all commands
CLIENT LIST                       # List connected clients
CLIENT KILL ip:port              # Kill client connection
CLIENT PAUSE 10000               # Pause clients
CLIENT UNPAUSE                   # Resume clients
DEBUG OBJECT key                  # Debug object info`,
        },
        {
          command: 'Performance Profiling',
          description: 'Profile Redis performance',
          usage: 'Slow log and latency monitoring',
          example: `# Performance profiling
SLOWLOG GET 10                   # Get slow queries
SLOWLOG LEN                      # Slow log length
SLOWLOG RESET                    # Reset slow log
LATENCY DOCTOR                   # Latency diagnosis
LATENCY LATEST                   # Latest latency events
LATENCY RESET                    # Reset latency monitor`,
        },
        {
          command: 'Memory Debugging',
          description: 'Debug memory issues',
          usage: 'Memory debugging commands',
          example: `# Memory debugging
MEMORY DOCTOR                    # Memory health check
MEMORY STATS                      # Memory statistics
MEMORY USAGE key                  # Key memory usage
MEMORY PURGE                      # Clean memory
DEBUG SDSLEN key                  # String length
DEBUG OBJECT key                  # Object encoding`,
        },
        {
          command: 'Client Management',
          description: 'Manage client connections',
          usage: 'CLIENT commands',
          example: `# Client management
CLIENT LIST                      # List all clients
CLIENT INFO                      # Current client info
CLIENT SETNAME myclient          # Set client name
CLIENT GETNAME                   # Get client name
CLIENT ID                        # Get client ID
CLIENT KILL ID 3                 # Kill client by ID`,
        },
      ],
    },
    {
      title: 'Redis Backup and Recovery',
      commands: [
        {
          command: 'RDB Backup',
          description: 'Create RDB backups',
          usage: 'BGSAVE and file operations',
          example: `# RDB backup
BGSAVE                           # Background save
SAVE                             # Synchronous save
# Copy RDB file
cp /var/lib/redis/dump.rdb /backup/dump_$(date +%Y%m%d).rdb
# Restore
redis-server --appendonly no
# Copy backup file
cp /backup/dump_20231225.rdb /var/lib/redis/dump.rdb
redis-server`,
        },
        {
          command: 'AOF Backup',
          description: 'Backup AOF files',
          usage: 'AOF backup operations',
          example: `# AOF backup
BGREWRITEAOF                     # Compact AOF
# Copy AOF file
cp /var/lib/redis/appendonly.aof /backup/appendonly_$(date +%Y%m%d).aof
# Restore
redis-server --appendonly yes --appendfilename appendonly.aof`,
        },
        {
          command: 'Cluster Backup',
          description: 'Backup Redis Cluster',
          usage: 'Cluster backup strategies',
          example: `# Cluster backup
# Backup each node
for port in 7000 7001 7002 7003 7004 7005; do
    redis-cli -p $port BGSAVE
    cp /var/lib/redis/$port/dump.rdb /backup/cluster_$port_$(date +%Y%m%d).rdb
done

# Use redis-cli --cluster backup
redis-cli --cluster backup 127.0.0.1:7000 /backup/cluster_backup`,
        },
        {
          command: 'Cross-Datacenter Replication',
          description: 'Set up cross-DC replication',
          usage: 'Redis Enterprise features',
          example: `# Cross-DC replication (Redis Enterprise)
# Create replica in different data center
# Configure replication lag
# Handle network partitions
# Disaster recovery planning
# Active-active setup with CRDTs`,
        },
      ],
    },
    {
      title: 'Redis Client Libraries',
      commands: [
        {
          command: 'Node.js Redis Client',
          description: 'Use Redis with Node.js',
          usage: 'redis npm package',
          example: `// Node.js Redis client
const redis = require('redis');
const client = redis.createClient();

await client.connect();
await client.set('key', 'value');
const value = await client.get('key');
await client.quit();`,
        },
        {
          command: 'Python Redis Client',
          description: 'Use Redis with Python',
          usage: 'redis-py package',
          example: `# Python Redis client
import redis
r = redis.Redis(host='localhost', port=6379, db=0)
r.set('key', 'value')
value = r.get('key')
r.rpush('list', 'item1', 'item2')
items = r.lrange('list', 0, -1)`,
        },
        {
          command: 'Java Redis Client',
          description: 'Use Redis with Java',
          usage: 'Jedis or Lettuce',
          example: `// Java Redis client (Jedis)
Jedis jedis = new Jedis("localhost");
jedis.set("key", "value");
String value = jedis.get("key");
jedis.rpush("list", "item1", "item2");
List<String> items = jedis.lrange("list", 0, -1);
jedis.close();`,
        },
        {
          command: 'Go Redis Client',
          description: 'Use Redis with Go',
          usage: 'go-redis package',
          example: `// Go Redis client
import "github.com/go-redis/redis/v8"

rdb := redis.NewClient(&redis.Options{
    Addr: "localhost:6379",
})

ctx := context.Background()
err := rdb.Set(ctx, "key", "value", 0).Err()
value, err := rdb.Get(ctx, "key").Result()`,
        },
        {
          command: 'Connection Pooling',
          description: 'Manage Redis connections efficiently',
          usage: 'Connection pooling strategies',
          example: `// Connection pooling (Node.js)
const { createPool } = require('redis');
const pool = createPool({
    socket: {
        host: 'localhost',
        port: 6379,
    },
    minimumIdleCount: 5,
    maximumPoolSize: 10,
});

const client = await pool.acquire();
await client.set('key', 'value');
await pool.release(client);`,
        },
      ],
    },
    {
      title: 'Redis Tools and Utilities',
      commands: [
        {
          command: 'Redis CLI Advanced',
          description: 'Advanced redis-cli features',
          usage: 'redis-cli options',
          example: `# Advanced redis-cli
redis-cli --latency              # Latency monitoring
redis-cli --bigkeys              # Find big keys
redis-cli --scan --pattern "user:*"  # Scan keys
redis-cli --intrinsic-latency 100  # Test intrinsic latency
redis-cli --rdb /tmp/dump.rdb    # Create RDB
redis-cli --pipe                 # Pipe mode
redis-cli --csv                  # CSV output`,
        },
        {
          command: 'Redis Benchmark',
          description: 'Benchmark Redis performance',
          usage: 'redis-benchmark tool',
          example: `# Redis benchmark
redis-benchmark -h localhost -p 6379 -c 50 -n 10000
redis-benchmark -t set,get -n 100000 -c 50
redis-benchmark -q -h localhost -p 6379
redis-benchmark --csv -h localhost -p 6379`,
        },
        {
          command: 'Redis Sentinel',
          description: 'High availability with Sentinel',
          usage: 'Sentinel configuration',
          example: `# sentinel.conf
port 26379
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 5000
sentinel failover-timeout mymaster 10000
sentinel parallel-syncs mymaster 1

# Connect to master via Sentinel
redis-cli -h sentinel_host -p 26379`,
        },
        {
          command: 'Redis Enterprise Features',
          description: 'Redis Enterprise capabilities',
          usage: 'Enterprise features',
          example: `# Redis Enterprise features
# Active-Active geo-distribution
# Redis on Flash (memory + SSD)
# Multi-tenancy with databases
# Backups and clustering
# Security and compliance
# Monitoring and alerting
# Auto-scaling
# Data encryption at rest and in transit`,
        },
        {
          command: 'Redis Cloud Services',
          description: 'Redis managed cloud services',
          usage: 'Cloud providers',
          example: `# Redis Cloud options
# Redis Enterprise Cloud
# AWS ElastiCache for Redis
# Azure Cache for Redis
# Google Cloud Memorystore for Redis
# DigitalOcean Managed Redis
# Connection strings and configuration`,
        },
      ],
    },
  ],
};
