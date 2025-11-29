import { Database } from 'lucide-react';

export const redisCheatsheet = {
  id: 'redis',
  name: 'Redis',
  description: 'In-memory data store commands',
  icon: Database,
  colorTheme: 'red' as const,
  sections: [
    {
      title: 'Connection & Server',
      commands: [
        {
          command: 'redis-cli',
          description: 'Start Redis CLI',
          usage: 'redis-cli [options]',
          example: 'redis-cli\nredis-cli -h localhost -p 6379\nredis-cli -a password',
        },
        {
          command: 'PING',
          description: 'Test connection',
          usage: 'PING',
          example: 'PING\n# Returns: PONG',
        },
        {
          command: 'SELECT',
          description: 'Select database',
          usage: 'SELECT index',
          example: 'SELECT 0\nSELECT 1  # Switch to database 1',
        },
        {
          command: 'INFO',
          description: 'Server information',
          usage: 'INFO [section]',
          example: 'INFO\nINFO server\nINFO memory',
        },
        {
          command: 'FLUSHDB',
          description: 'Clear current database',
          usage: 'FLUSHDB',
          example: 'FLUSHDB\n# Deletes all keys in current database',
        },
        {
          command: 'FLUSHALL',
          description: 'Clear all databases',
          usage: 'FLUSHALL',
          example: 'FLUSHALL\n# Deletes all keys from all databases',
        },
      ],
    },
    {
      title: 'String Operations',
      commands: [
        {
          command: 'SET',
          description: 'Set key to value',
          usage: 'SET key value [EX seconds]',
          example: 'SET name "John"\nSET session:123 "data" EX 3600  # Expires in 1 hour',
        },
        {
          command: 'GET',
          description: 'Get value by key',
          usage: 'GET key',
          example: 'GET name\n# Returns: "John"',
        },
        {
          command: 'MSET',
          description: 'Set multiple keys',
          usage: 'MSET key1 val1 key2 val2',
          example: 'MSET user:1:name "Alice" user:1:age "25"',
        },
        {
          command: 'MGET',
          description: 'Get multiple keys',
          usage: 'MGET key1 key2 key3',
          example: 'MGET user:1:name user:1:age',
        },
        {
          command: 'INCR / DECR',
          description: 'Increment/Decrement by 1',
          usage: 'INCR key / DECR key',
          example: 'SET counter 0\nINCR counter  # Returns: 1\nDECR counter  # Returns: 0',
        },
        {
          command: 'INCRBY / DECRBY',
          description: 'Increment/Decrement by amount',
          usage: 'INCRBY key amount',
          example: 'INCRBY views 10\nDECRBY balance 50',
        },
        {
          command: 'APPEND',
          description: 'Append to string',
          usage: 'APPEND key value',
          example: 'SET msg "Hello"\nAPPEND msg " World"\n# Value: "Hello World"',
        },
        {
          command: 'STRLEN',
          description: 'Get string length',
          usage: 'STRLEN key',
          example: 'STRLEN name',
        },
      ],
    },
    {
      title: 'Key Operations',
      commands: [
        {
          command: 'DEL',
          description: 'Delete key(s)',
          usage: 'DEL key [key ...]',
          example: 'DEL user:1\nDEL session:1 session:2 session:3',
        },
        {
          command: 'EXISTS',
          description: 'Check if key exists',
          usage: 'EXISTS key',
          example: 'EXISTS user:1\n# Returns: 1 (exists) or 0 (not exists)',
        },
        {
          command: 'KEYS',
          description: 'Find keys by pattern',
          usage: 'KEYS pattern',
          example: 'KEYS *\nKEYS user:*\nKEYS session:*',
        },
        {
          command: 'SCAN',
          description: 'Iterate keys (safer than KEYS)',
          usage: 'SCAN cursor [MATCH pattern] [COUNT count]',
          example: 'SCAN 0 MATCH user:* COUNT 100',
        },
        {
          command: 'TYPE',
          description: 'Get key type',
          usage: 'TYPE key',
          example: 'TYPE user:1\n# Returns: string, list, set, zset, hash',
        },
        {
          command: 'RENAME',
          description: 'Rename key',
          usage: 'RENAME oldkey newkey',
          example: 'RENAME user:old user:new',
        },
      ],
    },
    {
      title: 'Expiration / TTL',
      commands: [
        {
          command: 'EXPIRE',
          description: 'Set expiration in seconds',
          usage: 'EXPIRE key seconds',
          example: 'SET session:123 "data"\nEXPIRE session:123 3600  # Expires in 1 hour',
        },
        {
          command: 'EXPIREAT',
          description: 'Set expiration at timestamp',
          usage: 'EXPIREAT key timestamp',
          example: 'EXPIREAT session:123 1735689600',
        },
        {
          command: 'TTL',
          description: 'Time to live in seconds',
          usage: 'TTL key',
          example: 'TTL session:123\n# Returns: remaining seconds or -1 (no expiry) or -2 (not exists)',
        },
        {
          command: 'PERSIST',
          description: 'Remove expiration',
          usage: 'PERSIST key',
          example: 'PERSIST session:123\n# Key will never expire',
        },
        {
          command: 'SETEX',
          description: 'Set with expiration',
          usage: 'SETEX key seconds value',
          example: 'SETEX session:123 3600 "data"\n# Set and expire in 1 hour',
        },
      ],
    },
    {
      title: 'List Operations',
      commands: [
        {
          command: 'LPUSH / RPUSH',
          description: 'Push to list (left/right)',
          usage: 'LPUSH key value [value ...]',
          example: 'LPUSH queue "task1"\nRPUSH queue "task2" "task3"',
        },
        {
          command: 'LPOP / RPOP',
          description: 'Pop from list (left/right)',
          usage: 'LPOP key / RPOP key',
          example: 'LPOP queue\nRPOP queue',
        },
        {
          command: 'LRANGE',
          description: 'Get list elements',
          usage: 'LRANGE key start stop',
          example: 'LRANGE queue 0 -1  # All elements\nLRANGE queue 0 9    # First 10',
        },
        {
          command: 'LLEN',
          description: 'Get list length',
          usage: 'LLEN key',
          example: 'LLEN queue',
        },
        {
          command: 'LINDEX',
          description: 'Get element by index',
          usage: 'LINDEX key index',
          example: 'LINDEX queue 0  # First element',
        },
        {
          command: 'LTRIM',
          description: 'Trim list to range',
          usage: 'LTRIM key start stop',
          example: 'LTRIM queue 0 99  # Keep only first 100',
        },
      ],
    },
    {
      title: 'Set Operations',
      commands: [
        {
          command: 'SADD',
          description: 'Add to set',
          usage: 'SADD key member [member ...]',
          example: 'SADD tags "redis" "database" "nosql"',
        },
        {
          command: 'SMEMBERS',
          description: 'Get all set members',
          usage: 'SMEMBERS key',
          example: 'SMEMBERS tags',
        },
        {
          command: 'SISMEMBER',
          description: 'Check if member exists',
          usage: 'SISMEMBER key member',
          example: 'SISMEMBER tags "redis"\n# Returns: 1 (yes) or 0 (no)',
        },
        {
          command: 'SREM',
          description: 'Remove from set',
          usage: 'SREM key member [member ...]',
          example: 'SREM tags "nosql"',
        },
        {
          command: 'SCARD',
          description: 'Get set size',
          usage: 'SCARD key',
          example: 'SCARD tags',
        },
        {
          command: 'SUNION',
          description: 'Union of sets',
          usage: 'SUNION key [key ...]',
          example: 'SUNION tags1 tags2',
        },
        {
          command: 'SINTER',
          description: 'Intersection of sets',
          usage: 'SINTER key [key ...]',
          example: 'SINTER tags1 tags2  # Common members',
        },
      ],
    },
    {
      title: 'Hash Operations',
      commands: [
        {
          command: 'HSET',
          description: 'Set hash field',
          usage: 'HSET key field value [field value ...]',
          example: 'HSET user:1 name "John" age "30" email "john@example.com"',
        },
        {
          command: 'HGET',
          description: 'Get hash field',
          usage: 'HGET key field',
          example: 'HGET user:1 name',
        },
        {
          command: 'HGETALL',
          description: 'Get all hash fields',
          usage: 'HGETALL key',
          example: 'HGETALL user:1\n# Returns all fields and values',
        },
        {
          command: 'HMGET',
          description: 'Get multiple hash fields',
          usage: 'HMGET key field [field ...]',
          example: 'HMGET user:1 name email',
        },
        {
          command: 'HDEL',
          description: 'Delete hash field',
          usage: 'HDEL key field [field ...]',
          example: 'HDEL user:1 age',
        },
        {
          command: 'HEXISTS',
          description: 'Check if field exists',
          usage: 'HEXISTS key field',
          example: 'HEXISTS user:1 name',
        },
        {
          command: 'HKEYS / HVALS',
          description: 'Get hash keys/values',
          usage: 'HKEYS key / HVALS key',
          example: 'HKEYS user:1  # All field names\nHVALS user:1  # All values',
        },
        {
          command: 'HINCRBY',
          description: 'Increment hash field',
          usage: 'HINCRBY key field increment',
          example: 'HINCRBY user:1 views 1',
        },
      ],
    },
    {
      title: 'Sorted Set Operations',
      commands: [
        {
          command: 'ZADD',
          description: 'Add to sorted set',
          usage: 'ZADD key score member [score member ...]',
          example: 'ZADD leaderboard 100 "player1" 200 "player2"',
        },
        {
          command: 'ZRANGE',
          description: 'Get range by index',
          usage: 'ZRANGE key start stop [WITHSCORES]',
          example: 'ZRANGE leaderboard 0 -1 WITHSCORES\nZRANGE leaderboard 0 9  # Top 10',
        },
        {
          command: 'ZREVRANGE',
          description: 'Get range in reverse',
          usage: 'ZREVRANGE key start stop [WITHSCORES]',
          example: 'ZREVRANGE leaderboard 0 9 WITHSCORES\n# Top 10 highest scores',
        },
        {
          command: 'ZRANK / ZREVRANK',
          description: 'Get member rank',
          usage: 'ZRANK key member',
          example: 'ZRANK leaderboard "player1"\nZREVRANK leaderboard "player1"',
        },
        {
          command: 'ZSCORE',
          description: 'Get member score',
          usage: 'ZSCORE key member',
          example: 'ZSCORE leaderboard "player1"',
        },
        {
          command: 'ZINCRBY',
          description: 'Increment score',
          usage: 'ZINCRBY key increment member',
          example: 'ZINCRBY leaderboard 10 "player1"',
        },
        {
          command: 'ZCARD',
          description: 'Get sorted set size',
          usage: 'ZCARD key',
          example: 'ZCARD leaderboard',
        },
        {
          command: 'ZREM',
          description: 'Remove member',
          usage: 'ZREM key member [member ...]',
          example: 'ZREM leaderboard "player1"',
        },
      ],
    },
    {
      title: 'Pub/Sub',
      commands: [
        {
          command: 'PUBLISH',
          description: 'Publish message to channel',
          usage: 'PUBLISH channel message',
          example: 'PUBLISH news "Breaking news!"',
        },
        {
          command: 'SUBSCRIBE',
          description: 'Subscribe to channel(s)',
          usage: 'SUBSCRIBE channel [channel ...]',
          example: 'SUBSCRIBE news updates',
        },
        {
          command: 'PSUBSCRIBE',
          description: 'Subscribe to pattern',
          usage: 'PSUBSCRIBE pattern [pattern ...]',
          example: 'PSUBSCRIBE news:*\n# Subscribe to news:sports, news:tech, etc.',
        },
        {
          command: 'UNSUBSCRIBE',
          description: 'Unsubscribe from channel(s)',
          usage: 'UNSUBSCRIBE [channel ...]',
          example: 'UNSUBSCRIBE news',
        },
      ],
    },
    {
      title: 'Transactions',
      commands: [
        {
          command: 'MULTI',
          description: 'Start transaction',
          usage: 'MULTI',
          example: 'MULTI\nSET key1 "value1"\nSET key2 "value2"\nEXEC',
        },
        {
          command: 'EXEC',
          description: 'Execute transaction',
          usage: 'EXEC',
          example: 'MULTI\nINCR counter\nDECR balance\nEXEC',
        },
        {
          command: 'DISCARD',
          description: 'Cancel transaction',
          usage: 'DISCARD',
          example: 'MULTI\nSET key "value"\nDISCARD  # Cancel transaction',
        },
        {
          command: 'WATCH',
          description: 'Watch key for changes',
          usage: 'WATCH key [key ...]',
          example: 'WATCH balance\nMULTI\nDECR balance\nEXEC  # Fails if balance changed',
        },
      ],
    },
    {
      title: 'Performance & Monitoring',
      commands: [
        {
          command: 'MONITOR',
          description: 'Monitor all commands',
          usage: 'MONITOR',
          example: 'MONITOR\n# Shows all commands in real-time',
        },
        {
          command: 'SLOWLOG',
          description: 'View slow queries',
          usage: 'SLOWLOG GET [count]',
          example: 'SLOWLOG GET 10\n# Last 10 slow commands',
        },
        {
          command: 'MEMORY USAGE',
          description: 'Get key memory usage',
          usage: 'MEMORY USAGE key',
          example: 'MEMORY USAGE user:1000',
        },
        {
          command: 'DBSIZE',
          description: 'Get database size',
          usage: 'DBSIZE',
          example: 'DBSIZE\n# Number of keys in current database',
        },
      ],
    },
    {
      title: 'Persistence',
      commands: [
        {
          command: 'SAVE',
          description: 'Synchronous save',
          usage: 'SAVE',
          example: 'SAVE\n# Blocks server until complete',
        },
        {
          command: 'BGSAVE',
          description: 'Background save',
          usage: 'BGSAVE',
          example: 'BGSAVE\n# Non-blocking background save',
        },
        {
          command: 'LASTSAVE',
          description: 'Last save timestamp',
          usage: 'LASTSAVE',
          example: 'LASTSAVE\n# Unix timestamp of last save',
        },
      ],
    },
  ],
};
