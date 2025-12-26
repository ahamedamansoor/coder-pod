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
          command: 'Redis Installation',
          description: 'Install Redis on different platforms',
          usage: 'Download and install Redis server',
          example: `======== Installation Methods ========
# Ubuntu/Debian
sudo apt update
sudo apt install redis-server

# macOS with Homebrew
brew install redis
brew services start redis

# Windows (WSL)
wsl --install
sudo apt update
sudo apt install redis-server

# CentOS/RHEL
sudo yum install epel-release
sudo yum install redis

# From source (latest version)
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
make install

======== Verify Installation ========
redis-server --version
redis-cli --version

# Start Redis server
redis-server

# Start in background
redis-server --daemonize yes

# Connect to Redis
redis-cli`,
        },
        {
          command: 'Redis Configuration',
          description: 'Basic Redis configuration',
          usage: 'Edit redis.conf file',
          example: `======== Basic Configuration ========
# Location: /etc/redis/redis.conf

# Network settings
bind 127.0.0.1 192.168.1.100
port 6379

# Security
requirepass your-strong-password

# Memory management
maxmemory 256mb
maxmemory-policy allkeys-lru

# Persistence
save 900 1
save 300 10
save 60 10000

# Logging
loglevel notice
logfile /var/log/redis/redis-server.log

======== Test Configuration ========
redis-cli ping
# Should return: PONG

redis-cli config get save
redis-cli config set maxmemory 512mb`,
        },
        {
          command: 'Basic Redis Commands',
          description: 'Essential Redis operations',
          usage: 'SET, GET, DEL, KEYS, etc.',
          example: `======== Basic Operations ========
# Set a key
SET mykey "Hello Redis"

# Get a key
GET mykey
# Returns: "Hello Redis"

# Delete a key
DEL mykey

# Check if key exists
EXISTS mykey

# Set with expiration
SET session:user123 "data" EX 3600

# Get remaining TTL
TTL session:user123

# List all keys (use carefully in production)
KEYS *

# Get key type
TYPE mykey

# Rename key
RENAME oldkey newkey`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Strings',
      commands: [
        {
          command: 'String Operations',
          description: 'Working with Redis strings',
          usage: 'SET, GET, MSET, MGET, etc.',
          example: `======== Basic String Operations ========
# Set single key
SET user:name "John Doe"

# Get single key
GET user:name

# Set multiple keys
MSET user:email "john@example.com" user:age "30" user:city "New York"

# Get multiple keys
MGET user:name user:email user:age

# Set with expiration
SET temp:data "temporary" EX 60

# Atomic increment
INCR counter
INCRBY counter 10
DECR counter
DECRBY counter 5

# String operations
APPEND greeting " World"
STRLEN greeting
GETRANGE greeting 0 4

======== Conditional Operations ========
# Set only if key doesn't exist
SETNX unique:key "value"

# Get and set atomically
GETSET counter "0"

# Multiple operations
SETEX session:123 "data" 1800
PSETEX temp:key "value" 5000`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Lists',
      commands: [
        {
          command: 'List Operations',
          description: 'Working with Redis lists',
          usage: 'LPUSH, RPUSH, LPOP, RPOP, LRANGE, etc.',
          example: `======== Basic List Operations ========
# Add to list (left and right)
LPUSH mylist "item1"
RPUSH mylist "item2"
LPUSH mylist "item3" "item4"

# Get list elements
LRANGE mylist 0 -1  # All elements
LRANGE mylist 0 2   # First 3 elements

# Remove from list
LPOP mylist
RPOP mylist

# Get list length
LLEN mylist

# Get element by index
LINDEX mylist 0

# Insert at specific position
LINSERT mylist BEFORE "item2" "newitem"

======== Advanced List Operations ========
# Remove elements
LREM mylist 2 "item1"  # Remove first 2 occurrences

# Trim list to specific range
LTRIM mylist 0 10

# Block until element available
BLPOP mylist 10  # Wait 10 seconds

# Move between lists
RPOPLPUSH source_list dest_list`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Hashes',
      commands: [
        {
          command: 'Hash Operations',
          description: 'Working with Redis hashes',
          usage: 'HSET, HGET, HMSET, HMGET, HGETALL, etc.',
          example: `======== Basic Hash Operations ========
# Set hash fields
HSET user:1000 name "John Doe"
HSET user:1000 email "john@example.com"
HSET user:1000 age "30"

# Set multiple fields
HMSET user:1001 name "Jane Smith" email "jane@example.com" age "25"

# Get hash fields
HGET user:1000 name
HMGET user:1000 name email age

# Get all hash fields
HGETALL user:1000

# Get all keys or values
HKEYS user:1000
HVALS user:1000

# Hash operations
HLEN user:1000        # Number of fields
HEXISTS user:1000 name
HDEL user:1000 age

======== Advanced Hash Operations ========
# Increment hash field
HINCRBY user:1000 login_count 1
HINCRBYFLOAT user:1000 balance 10.50

# Conditional operations
HSETNX user:1000 field "value"`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Sets',
      commands: [
        {
          command: 'Set Operations',
          description: 'Working with Redis sets',
          usage: 'SADD, SMEMBERS, SISMEMBER, etc.',
          example: `======== Basic Set Operations ========
# Add to set
SADD myset "member1" "member2" "member3"

# Get all members
SMEMBERS myset

# Check membership
SISMEMBER myset "member1"

# Get set size
SCARD myset

# Remove from set
SREM myset "member1"

# Get random member
SRANDMEMBER myset
SPOP myset

======== Set Operations ========
# Set intersection
SINTER set1 set2 set3

# Set union
SUNION set1 set2

# Set difference
SDIFF set1 set2

# Store operations
SINTERSTORE result set1 set2
SUNIONSTORE result set1 set2
SDIFFSTORE result set1 set2

# Move between sets
SMOVE source_set dest_set "member"`,
        },
      ],
    },
    {
      title: 'Redis Data Types - Sorted Sets',
      commands: [
        {
          command: 'Sorted Set Operations',
          description: 'Working with Redis sorted sets',
          usage: 'ZADD, ZRANGE, ZSCORE, etc.',
          example: `======== Basic Sorted Set Operations ========
# Add to sorted set
ZADD leaderboard 1000 "player1" 1500 "player2" 800 "player3"

# Get range by score
ZRANGE leaderboard 0 -1
ZRANGE leaderboard 0 2 WITHSCORES

# Get by rank
ZRANK leaderboard "player1"
ZREVRANK leaderboard "player1"

# Get score
ZSCORE leaderboard "player1"

# Remove members
ZREM leaderboard "player1"

# Get size
ZCARD leaderboard

======== Advanced Sorted Set Operations ========
# Range by score
ZRANGEBYSCORE leaderboard 1000 2000
ZRANGEBYSCORE leaderboard 1000 +inf LIMIT 0 10

# Count by score
ZCOUNT leaderboard 1000 2000

# Increment score
ZINCRBY leaderboard 100 "player1"

# Remove by rank
ZREMRANGEBYRANK leaderboard 0 2

# Remove by score
ZREMRANGEBYSCORE leaderboard 0 1000

# Set operations
ZUNIONSTORE result 2 set1 set2 WEIGHTS 1 2
ZINTERSTORE result 2 set1 set2 AGGREGATE SUM`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Redis Persistence',
      commands: [
        {
          command: 'RDB Snapshots',
          description: 'Redis Database persistence',
          usage: 'SAVE, BGSAVE, configuration',
          example: `======== RDB Persistence ========
# Manual save
SAVE  # Blocking, saves synchronously
BGSAVE  # Non-blocking, saves in background

# Configuration in redis.conf
save 900 1    # Save if 1 key changes in 900 seconds
save 300 10   # Save if 10 keys change in 300 seconds
save 60 10000 # Save if 10000 keys change in 60 seconds

# RDB settings
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
dir /var/lib/redis/

# Check last save time
LASTSAVE

# Background save info
INFO persistence`,
        },
        {
          command: 'AOF Logging',
          description: 'Append Only File persistence',
          usage: 'AOF configuration and management',
          example: `======== AOF Configuration ========
# Enable AOF
appendonly yes
appendfilename "appendonly.aof"

# AOF fsync policies
appendfsync always    # Every write (slowest, safest)
appendfsync everysec  # Every second (default)
appendfsync no        # Let OS decide (fastest)

# AOF rewrite
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb

# Manual AOF operations
BGREWRITEAOF  # Rewrite AOF in background

# AOF troubleshooting
redis-check-aof --fix appendonly.aof

======== Persistence Management ========
# Switch persistence method
CONFIG SET appendonly yes
CONFIG SET save "900 1 300 10 60 10000"

# Check persistence status
INFO persistence
INFO stats`,
        },
      ],
    },
    {
      title: 'Redis Memory Management',
      commands: [
        {
          command: 'Memory Optimization',
          description: 'Optimize Redis memory usage',
          usage: 'Memory policies and optimization',
          example: `======== Memory Policies ========
# Eviction policies
maxmemory-policy allkeys-lru      # Remove least recently used
maxmemory-policy allkeys-lfu      # Remove least frequently used
maxmemory-policy volatile-lru     # Remove LRU among keys with TTL
maxmemory-policy volatile-lfu     # Remove LFU among keys with TTL
maxmemory-policy allkeys-random   # Remove random keys
maxmemory-policy volatile-ttl     # Remove keys with shortest TTL
maxmemory-policy noeviction       # Return errors when memory full

# Set memory limit
CONFIG SET maxmemory 1gb

======== Memory Analysis ========
# Memory usage info
MEMORY USAGE keyname
MEMORY STATS

# Key space analysis
INFO keyspace
INFO memory

# Find large keys
--bigkeys  # Redis CLI command

# Sample memory usage
redis-cli --bigkeys -i 0.01`,
        },
        {
          command: 'Data Compression',
          description: 'Compress data to save memory',
          usage: 'Compression techniques',
          example: `======== Hash Optimization ========
# Use hash for small objects
HMSET user:1000 name "John" email "john@example.com" age "30"

# Enable hash ziplist
hash-max-ziplist-entries 512
hash-max-ziplist-value 64

======== List Optimization ========
# Enable list ziplist
list-max-ziplist-size -2
list-compress-depth 0

======== Set Optimization ========
# Enable set intset encoding
set-max-intset-entries 512

======== String Optimization ========
# Use numbers when possible
SET counter 1000  # Uses less memory than string "1000"

# Use bit operations for flags
SETBIT user:1000:flags 0 1  # Verified
SETBIT user:1000:flags 1 1  # Premium
GETBIT user:1000:flags 0`,
        },
      ],
    },
    {
      title: 'Redis Transactions',
      commands: [
        {
          command: 'Multi/Exec Transactions',
          description: 'Atomic operations in Redis',
          usage: 'MULTI, EXEC, DISCARD, WATCH',
          example: `======== Basic Transaction ========
MULTI
SET key1 "value1"
SET key2 "value2"
INCR counter
EXEC

======== Transaction with WATCH ========
WATCH balance
GET balance
# (check if balance is sufficient)
MULTI
DECRBY balance 100
INCRBY other_account 100
EXEC
# If balance changed, EXEC returns null

======== Transaction Control ========
DISARD  # Cancel transaction

# Check transaction state
INFO commandstats`,
        },
        {
          command: 'Lua Scripting',
          description: 'Server-side scripting with Lua',
          usage: 'EVAL, SCRIPT, scripting commands',
          example: `======== Lua Scripting ========
# Simple Lua script
EVAL "return redis.call('SET', KEYS[1], ARGV[1])" 1 mykey "myvalue"

# Complex script with arguments
EVAL "
local current = redis.call('GET', KEYS[1])
if current == false then
    return '0'
end
return tonumber(current) + tonumber(ARGV[1])
" 1 counter 5

# Script management
SCRIPT LOAD "return 'Hello World'"
SCRIPT EXISTS sha1_hash
SCRIPT FLUSH

# Script optimization
EVALSHA sha1_hash 1 key1 arg1

======== Lua Script Examples ========
# Rate limiting script
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local current = redis.call('GET', key)
if current == false then
    redis.call('SET', key, 1)
    redis.call('EXPIRE', key, window)
    return 1
elseif tonumber(current) < limit then
    redis.call('INCR', key)
    return 1
else
    return 0
end`,
        },
      ],
    },
    {
      title: 'Redis Pub/Sub',
      commands: [
        {
          command: 'Publish/Subscribe',
          description: 'Messaging patterns with Redis',
          usage: 'PUBLISH, SUBSCRIBE, PSUBSCRIBE',
          example: `======== Basic Pub/Sub ========
# Subscribe to channel
SUBSCRIBE news updates

# Publish to channel
PUBLISH news "Breaking news: Redis 7.0 released!"

# Pattern subscription
PSUBSCRIBE news.*

# Unsubscribe
UNSUBSCRIBE news
PUNSUBSCRIBE news.*

======== Pub/Sub Commands ========
# Active subscriptions
PUBSUB CHANNELS
PUBSUB NUMSUB news updates
PUBSUB NUMPAT

# Message format examples
# Subscribe receives: [message, channel, payload]
# Psubscribe receives: [pmessage, pattern, channel, payload]`,
        },
        {
          command: 'Streams (Redis 5.0+)',
          description: 'Advanced messaging with Redis Streams',
          usage: 'XADD, XREAD, XGROUP, etc.',
          example: `======== Stream Operations ========
# Add to stream
XADD mystream * name John age 30
XADD mystream * name Jane age 25

# Read from stream
XREAD COUNT 2 STREAMS mystream 0

# Consumer groups
XGROUP CREATE mystream mygroup 0 MKSTREAM
XREADGROUP GROUP mygroup consumer1 COUNT 1 STREAMS mystream >

# Acknowledge messages
XACK mystream mygroup 1234567890123-0

# Stream info
XINFO STREAM mystream
XINFO GROUPS mystream
XINFO CONSUMERS mystream mygroup

# Advanced stream operations
XADD mystream MAXLEN 1000 * field value
XTRIM mystream MAXLEN 1000
XDEL mystream 1234567890123-0`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Redis Clustering',
      commands: [
        {
          command: 'Redis Cluster Setup',
          description: 'Setting up Redis cluster',
          usage: 'Cluster configuration and management',
          example: `======== Cluster Configuration ========
# redis.conf for cluster nodes
port 7000
cluster-enabled yes
cluster-config-file nodes-7000.conf
cluster-node-timeout 5000
appendonly yes

# Create cluster (6 nodes)
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 \\
127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \\
--cluster-replicas 1

======== Cluster Management ========
# Check cluster status
CLUSTER INFO
CLUSTER NODES

# Cluster operations
CLUSTER MEET ip port
CLUSTER FORGET node_id
CLUSTER REPLICATE node_id

# Failover
CLUSTER FAILOVER
CLUSTER FAILOVER FORCE

# Slots management
CLUSTER ADDSLOTS slot1 [slot2]
CLUSTER DELSLOTS slot1 [slot2]
CLUSTER SETSLOT slot IMPORTING node_id
CLUSTER SETSLOT slot MIGRATING node_id`,
        },
        {
          command: 'Cluster Scaling',
          description: 'Scaling Redis cluster',
          usage: 'Resharding and rebalancing',
          example: `======== Cluster Resharding ========
# Reshard cluster
redis-cli --cluster reshard 127.0.0.1:7000 \\
--cluster-from node1 --cluster-to node2 \\
--cluster-slots 1000

# Rebalance cluster
redis-cli --cluster rebalance 127.0.0.1:7000

# Add new node
redis-cli --cluster add-node 127.0.0.1:7006 127.0.0.1:7000

# Add replica node
redis-cli --cluster add-node 127.0.0.1:7006 127.0.0.1:7000 --cluster-slave

# Remove node
redis-cli --cluster del-node 127.0.0.1:7000 node_id`,
        },
      ],
    },
    {
      title: 'Redis Security',
      commands: [
        {
          command: 'Authentication & Authorization',
          description: 'Securing Redis instances',
          usage: 'Authentication and ACLs (Redis 6.0+)',
          example: `======== Password Authentication ========
# Set password
CONFIG SET requirepass your-strong-password
AUTH your-strong-password

# Or in redis.conf
requirepass your-strong-password

======== ACL (Redis 6.0+) ========
# Create user
ACL SETUSER john on >password ~cached:* +get

# List users
ACL LIST

# Get user info
ACL GETUSER john

# Switch user
AUTH john password

# ACL commands
ACL CAT
ACL CAT user
ACL DELUSER john
ACL WHOAMI

======== ACL Examples ========
# Read-only user
ACL SETUSER readonly on >readonly ~* +@read

# Admin user
ACL SETUSER admin on >admin ~* +@all

# Limited user
ACL SETUSER limited on >limited ~app:* +get +set +del`,
        },
        {
          command: 'Network Security',
          description: 'Network and encryption settings',
          usage: 'TLS, firewall, and network security',
          example: `======== Network Security ========
# Bind to specific interfaces
bind 127.0.0.1 10.0.0.1

# Change default port
port 6380

# Rename dangerous commands
rename-command FLUSHDB ""
rename-command FLUSHALL ""
rename-command KEYS ""
rename-command CONFIG "CONFIG_b835c3f8a5d2e7i4"

======== TLS Configuration (Redis 6.0+) ========
# Enable TLS
tls-port 6380
port 0

tls-cert-file /path/to/redis.crt
tls-key-file /path/to/redis.key
tls-ca-cert-file /path/to/ca.crt

# TLS client authentication
tls-auth-clients yes
tls-protocols "TLSv1.2 TLSv1.3"

======== Connection Security ========
# Connection limits
tcp-keepalive 300
timeout 0

# Protected mode
protected-mode yes

# Client limits
maxclients 10000`,
        },
      ],
    },
    {
      title: 'Redis Performance Optimization',
      commands: [
        {
          command: 'Performance Tuning',
          description: 'Optimize Redis performance',
          usage: 'Configuration and monitoring',
          example: `======== Performance Configuration ========
# TCP settings
tcp-keepalive 300
tcp-backlog 511

# Client output buffer limits
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60

# Slow log
slowlog-log-slower-than 10000
slowlog-max-len 128

# Latency monitoring
LATENCY DOCTOR
LATENCY LATEST

======== Performance Monitoring ========
# Info commands
INFO server
INFO memory
INFO stats
INFO replication
INFO persistence

# Performance metrics
INFO commandstats
CONFIG GET "*"

# Benchmarking
redis-benchmark -h localhost -p 6379 -c 50 -n 10000

# Monitor commands (use carefully)
MONITOR`,
        },
        {
          command: 'Pipelining',
          description: 'Batch operations for performance',
          usage: 'Pipeline and transaction optimization',
          example: `======== Pipeline Examples ========
# Redis CLI pipeline
redis-cli --pipe
SET key1 value1
SET key2 value2
GET key1
GET key2

# Client libraries pipeline example (Node.js)
const pipeline = redis.pipeline();
pipeline.set('key1', 'value1');
pipeline.get('key1');
pipeline.incr('counter');
const results = await pipeline.exec();

======== Batch Operations ========
# Multi-key operations
MSET key1 value1 key2 value2 key3 value3
MGET key1 key2 key3

# Sorted set batch operations
ZADD zset 1 member1 2 member2 3 member3
ZRANGE zset 0 -1 WITHSCORES

# Hash batch operations
HMSET hash field1 value1 field2 value2 field3 value3
HMGET hash field1 field2 field3

======== Optimization Tips ========
# Use appropriate data structures
# Use hashes for objects with many fields
# Use sorted sets for leaderboards
# Use sets for unique collections
# Use lists for queues and timelines`,
        },
      ],
    },
    {
      title: 'Redis Modules & Extensions',
      commands: [
        {
          command: 'Popular Modules',
          description: 'Redis modules for extended functionality',
          usage: 'RedisJSON, RedisSearch, RedisTimeSeries, etc.',
          example: `======== RedisJSON ========
# JSON operations
JSON.SET user:1 . '{"name": "John", "age": 30}'
JSON.GET user:1
JSON.GET user:1 .name
JSON.SET user:1 .age 31

# JSON array operations
JSON.ARRAPPEND users . '{"name": "Jane"}'
JSON.ARRLEN users

======== RedisSearch ========
# Create index
FT.CREATE idx1 ON HASH PREFIX 1 user: SCHEMA name TEXT age NUMERIC

# Search documents
FT.SEARCH idx1 "@name:(John*)"

# Aggregate queries
FT.AGGREGATE idx1 "*" LOAD 1 @name GROUPBY 1 @age REDUCE COUNT 0 as count

======== RedisTimeSeries ========
# Create time series
TS.CREATE temperature:1 RETENTION 86400000 LABELS sensor_id 1

# Add data points
TS.ADD temperature:1 * 25.5 LABELS sensor_id 1

# Query time series
TS.RANGE temperature:1 - + AGGREGATION avg 60000

======== RedisBloom ========
# Bloom filter
BF.ADD myfilter item1
BF.EXISTS myfilter item1

# Cuckoo filter
CF.ADD cuckoo item1
CF.EXISTS cuckoo item1

# Count-min sketch
CMS.INITBYDIM cms 1000 5
CMS.INCRBY cms item1 1`,
        },
        {
          command: 'Custom Modules',
          description: 'Loading and managing custom modules',
          usage: 'MODULE LOAD, MODULE LIST, etc.',
          example: `======== Module Management ========
# Load module
MODULE LOAD /path/to/module.so

# List loaded modules
MODULE LIST

# Unload module
MODULE UNLOAD module_name

======== Module Configuration ========
# Load modules in redis.conf
loadmodule /path/to/redisjson.so
loadmodule /path/to/redisearch.so

# Module with arguments
loadmodule /path/to/module.so ARG1 ARG2

======== Available Modules ========
# RedisJSON - JSON data type
# RedisSearch - Full-text search
# RedisTimeSeries - Time series data
# RedisBloom - Probabilistic data structures
# RedisGraph - Graph database
# RedisML - Machine learning
# RedisGears - Server-side functions`,
        },
      ],
    },
    {
      title: 'Redis Monitoring & Debugging',
      commands: [
        {
          command: 'Monitoring Tools',
          description: 'Monitor Redis performance and health',
          usage: 'INFO, MONITOR, DEBUG, etc.',
          example: `======== Monitoring Commands ========
# Server information
INFO all
INFO server
INFO memory
INFO stats
INFO replication

# Real-time monitoring
MONITOR
SLOWLOG GET 10
SLOWLOG RESET

# Client connections
CLIENT LIST
CLIENT INFO
CLIENT KILL ip:port
CLIENT PAUSE 10000

# Latency monitoring
LATENCY LATEST
LATENCY DOCTOR
LATENCY RESET

======== Debug Commands ========
# Object inspection
OBJECT REFCOUNT key
OBJECT ENCODING key
OBJECT IDLETIME key

# Memory debugging
MEMORY USAGE key
MEMORY STATS
MEMORY PURGE

# Debugging
DEBUG OBJECT key
DEBUG SEGFAULT  # Use with caution!

======== Health Checks ========
# Ping server
PING

# Check replication
REPLICAOF NO ONE
REPLICAOF host port

# Database size
DBSIZE

# Last save time
LASTSAVE`,
        },
        {
          command: 'Performance Analysis',
          description: 'Analyze Redis performance bottlenecks',
          usage: 'Performance profiling and optimization',
          example: `======== Performance Analysis ========
# Command statistics
INFO commandstats

# Slow query log
CONFIG SET slowlog-log-slower-than 1000
SLOWLOG GET 5

# Memory analysis
MEMORY USAGE keyname
MEMORY STATS

# Key space analysis
INFO keyspace

# Connection stats
INFO clients

======== Optimization Techniques ========
# Use appropriate data structures
# Avoid large keys
# Use pipelining
# Monitor memory usage
# Optimize data types

# Profile commands
CONFIG SET latency-monitor-threshold 100
LATENCY HISTORY command
LATENCY RESET command

# Benchmark specific operations
redis-benchmark -t set,get -n 100000 -c 50

# Memory optimization tips
# Use hashes for small objects
# Use ziplist encoding
# Set appropriate maxmemory-policy
# Monitor fragmentation with INFO memory`,
        },
      ],
    },
    {
      title: 'Redis Backup & Recovery',
      commands: [
        {
          command: 'Backup Strategies',
          description: 'Backup Redis data and configurations',
          usage: 'RDB, AOF, and backup procedures',
          example: `======== RDB Backup ========
# Create RDB snapshot
SAVE
BGSAVE

# Copy RDB file
cp /var/lib/redis/dump.rdb /backup/dump_$(date +%Y%m%d_%H%M%S).rdb

# Scheduled backup with cron
0 2 * * * redis-cli BGSAVE && sleep 10 && cp /var/lib/redis/dump.rdb /backup/

======== AOF Backup ========
# Copy AOF file
cp /var/lib/redis/appendonly.aof /backup/appendonly_$(date +%Y%m%d_%H%M%S).aof

# AOF rewrite before backup
BGREWRITEAOF
sleep 5
cp /var/lib/redis/appendonly.aof /backup/

======== Backup Script ========
#!/bin/bash
BACKUP_DIR="/backup/redis"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

# RDB backup
redis-cli BGSAVE
sleep 5
cp /var/lib/redis/dump.rdb $BACKUP_DIR/dump_$DATE.rdb

# AOF backup
cp /var/lib/redis/appendonly.aof $BACKUP_DIR/appendonly_$DATE.aof

# Config backup
cp /etc/redis/redis.conf $BACKUP_DIR/redis_$DATE.conf

echo "Backup completed: $DATE"`,
        },
        {
          command: 'Recovery Procedures',
          description: 'Restore Redis from backups',
          usage: 'Recovery from RDB and AOF',
          example: `======== RDB Recovery ========
# Stop Redis server
sudo systemctl stop redis-server

# Replace RDB file
cp /backup/dump_20231201_020000.rdb /var/lib/redis/dump.rdb
chown redis:redis /var/lib/redis/dump.rdb

# Start Redis server
sudo systemctl start redis-server

======== AOF Recovery ========
# Stop Redis server
sudo systemctl stop redis-server

# Repair AOF if needed
redis-check-aof --fix /backup/appendonly_20231201_020000.aof

# Replace AOF file
cp /backup/appendonly_20231201_020000.aof /var/lib/redis/appendonly.aof
chown redis:redis /var/lib/redis/appendonly.aof

# Update config to use AOF
# Set appendonly yes in redis.conf

# Start Redis server
sudo systemctl start redis-server

======== Disaster Recovery ========
# Verify backup integrity
redis-cli --pipe < backup_data.txt

# Test recovery in staging environment
# Monitor logs during recovery
# Verify data integrity after recovery

# Point-in-time recovery
# Use AOF for most recent data
# Use RDB for full backup baseline`,
        },
      ],
    },
    {
      title: 'Redis Best Practices',
      commands: [
        {
          command: 'Design Patterns',
          description: 'Common Redis design patterns',
          usage: 'Caching, session management, queues',
          example: `======== Caching Pattern ========
# Cache-aside pattern
GET user:1000
# If miss, fetch from database
SET user:1000 "user_data" EX 3600

# Write-through pattern
SET user:1000 "new_data"
# Also write to database

# Write-behind pattern
LPUSH write_queue "user:1000:update_data"
# Background process writes to database

======== Session Management ========
# User session
SETEX session:abc123 1800 "user_data"
TTL session:abc123

# Active sessions tracking
SADD active_sessions session:abc123
EXPIRE session:abc123 1800

======== Rate Limiting ========
# Simple rate limiting
INCR rate_limit:user:1000:60
EXPIRE rate_limit:user:1000:60 60

# Sliding window rate limiting
ZADD rate_limit:user:1000 $(date +%s) "request"
ZREMRANGEBYSCORE rate_limit:user:1000 0 $(($(date +%s)-60))
ZCARD rate_limit:user:1000

======== Leaderboard ========
# Add score
ZADD leaderboard 1500 "player1"

# Get top players
ZREVRANGE leaderboard 0 9 WITHSCORES

# Get rank
ZREVRANK leaderboard "player1"`,
        },
        {
          command: 'Production Tips',
          description: 'Production deployment best practices',
          usage: 'Security, monitoring, maintenance',
          example: `======== Security Best Practices ========
# Use strong passwords
requirepass "complex-password-here"

# Use ACLs (Redis 6.0+)
ACL SETUSER app_user on >password ~app:* +@read +@write

# Network isolation
bind 10.0.0.1
protected-mode yes

# Rename dangerous commands
rename-command CONFIG ""
rename-command FLUSHALL ""

======== Monitoring Setup ========
# Set up monitoring
CONFIG SET slowlog-log-slower-than 1000
CONFIG SET maxmemory-policy allkeys-lru

# Key monitoring
redis-cli --bigkeys
redis-cli --memkeys

# Log monitoring
loglevel notice
logfile /var/log/redis/redis-server.log

======== Maintenance Tasks ========
# Regular backups
0 2 * * * /scripts/redis_backup.sh

# Memory cleanup
MEMORY PURGE

# Update statistics
INFO commandstats

# Performance tuning
CONFIG SET tcp-keepalive 300
CONFIG SET timeout 0

======== High Availability ========
# Use Redis Sentinel or Redis Cluster
# Monitor replication lag
INFO replication
# Set up automatic failover
# Test failover procedures regularly`,
        },
      ],
    },
  ],
};
