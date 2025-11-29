import { Database } from 'lucide-react';

export const cassandraCheatsheet = {
  id: 'cassandra',
  name: 'Cassandra',
  description: 'Apache Cassandra NoSQL database (CQL)',
  icon: Database,
  colorTheme: 'cyan' as const,
  sections: [
    {
      title: 'cqlsh - CLI',
      commands: [
        {
          command: 'cqlsh',
          description: 'Start Cassandra shell',
          usage: 'cqlsh [host] [port]',
          example: 'cqlsh\ncqlsh 127.0.0.1 9042\ncqlsh -u username -p password',
        },
        {
          command: 'DESCRIBE',
          description: 'Show database objects',
          usage: 'DESCRIBE [object_type]',
          example: 'DESCRIBE KEYSPACES;\nDESCRIBE TABLES;\nDESCRIBE TABLE users;',
        },
        {
          command: 'SOURCE',
          description: 'Execute CQL file',
          usage: 'SOURCE \'file.cql\'',
          example: 'SOURCE \'/path/to/schema.cql\';',
        },
        {
          command: 'TRACING',
          description: 'Enable query tracing',
          usage: 'TRACING ON / TRACING OFF',
          example: 'TRACING ON;\nSELECT * FROM users;\nTRACING OFF;',
        },
      ],
    },
    {
      title: 'Keyspace Operations',
      commands: [
        {
          command: 'CREATE KEYSPACE',
          description: 'Create keyspace (database)',
          usage: 'CREATE KEYSPACE name WITH replication',
          example: 'CREATE KEYSPACE myapp\nWITH replication = {\n  \'class\': \'SimpleStrategy\',\n  \'replication_factor\': 3\n};',
        },
        {
          command: 'USE',
          description: 'Switch keyspace',
          usage: 'USE keyspace_name',
          example: 'USE myapp;',
        },
        {
          command: 'ALTER KEYSPACE',
          description: 'Modify keyspace',
          usage: 'ALTER KEYSPACE name WITH replication',
          example: 'ALTER KEYSPACE myapp\nWITH replication = {\n  \'class\': \'NetworkTopologyStrategy\',\n  \'dc1\': 3,\n  \'dc2\': 2\n};',
        },
        {
          command: 'DROP KEYSPACE',
          description: 'Delete keyspace',
          usage: 'DROP KEYSPACE name',
          example: 'DROP KEYSPACE myapp;',
        },
      ],
    },
    {
      title: 'Table Operations',
      commands: [
        {
          command: 'CREATE TABLE',
          description: 'Create table',
          usage: 'CREATE TABLE name (columns, PRIMARY KEY)',
          example: 'CREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  age INT,\n  created_at TIMESTAMP\n);',
        },
        {
          command: 'Composite PRIMARY KEY',
          description: 'Partition key + clustering columns',
          usage: 'PRIMARY KEY ((partition_key), clustering_col)',
          example: 'CREATE TABLE events (\n  user_id UUID,\n  event_time TIMESTAMP,\n  event_type TEXT,\n  PRIMARY KEY (user_id, event_time)\n) WITH CLUSTERING ORDER BY (event_time DESC);',
        },
        {
          command: 'Compound PRIMARY KEY',
          description: 'Multiple partition keys',
          usage: 'PRIMARY KEY ((key1, key2), clustering_col)',
          example: 'CREATE TABLE user_events (\n  user_id UUID,\n  year INT,\n  event_time TIMESTAMP,\n  data TEXT,\n  PRIMARY KEY ((user_id, year), event_time)\n);',
        },
        {
          command: 'ALTER TABLE',
          description: 'Modify table',
          usage: 'ALTER TABLE name ADD/DROP column',
          example: 'ALTER TABLE users ADD phone TEXT;\nALTER TABLE users DROP phone;',
        },
        {
          command: 'DROP TABLE',
          description: 'Delete table',
          usage: 'DROP TABLE name',
          example: 'DROP TABLE users;',
        },
        {
          command: 'TRUNCATE',
          description: 'Delete all rows',
          usage: 'TRUNCATE TABLE name',
          example: 'TRUNCATE TABLE logs;',
        },
      ],
    },
    {
      title: 'INSERT Data',
      commands: [
        {
          command: 'INSERT',
          description: 'Insert row',
          usage: 'INSERT INTO table (cols) VALUES (vals)',
          example: 'INSERT INTO users (user_id, name, email, age)\nVALUES (uuid(), \'John Doe\', \'john@example.com\', 30);',
        },
        {
          command: 'INSERT with TTL',
          description: 'Insert with time-to-live',
          usage: 'INSERT ... USING TTL seconds',
          example: 'INSERT INTO sessions (session_id, user_id, data)\nVALUES (uuid(), uuid(), \'session data\')\nUSING TTL 3600;  -- Expires in 1 hour',
        },
        {
          command: 'INSERT with TIMESTAMP',
          description: 'Insert with custom timestamp',
          usage: 'INSERT ... USING TIMESTAMP microseconds',
          example: 'INSERT INTO users (user_id, name)\nVALUES (uuid(), \'Jane\')\nUSING TIMESTAMP 1609459200000000;',
        },
      ],
    },
    {
      title: 'SELECT Data',
      commands: [
        {
          command: 'SELECT',
          description: 'Query data',
          usage: 'SELECT cols FROM table WHERE partition_key',
          example: 'SELECT * FROM users WHERE user_id = uuid();\nSELECT name, email FROM users WHERE user_id = uuid();',
        },
        {
          command: 'WHERE with Partition Key',
          description: 'Filter by partition key (required)',
          usage: 'WHERE partition_key = value',
          example: 'SELECT * FROM events WHERE user_id = uuid();',
        },
        {
          command: 'WHERE with Clustering Column',
          description: 'Filter by clustering column',
          usage: 'WHERE partition_key = value AND clustering_col > value',
          example: 'SELECT * FROM events\nWHERE user_id = uuid()\n  AND event_time > \'2024-01-01\';\n\nSELECT * FROM events\nWHERE user_id = uuid()\n  AND event_time >= \'2024-01-01\'\n  AND event_time < \'2024-02-01\';',
        },
        {
          command: 'LIMIT',
          description: 'Limit results',
          usage: 'SELECT ... LIMIT n',
          example: 'SELECT * FROM users LIMIT 10;',
        },
        {
          command: 'ALLOW FILTERING',
          description: 'Enable non-key filtering (slow)',
          usage: 'SELECT ... WHERE non_key_col = value ALLOW FILTERING',
          example: 'SELECT * FROM users WHERE age > 18 ALLOW FILTERING;\n-- Warning: scans entire table',
        },
        {
          command: 'ORDER BY',
          description: 'Sort by clustering columns',
          usage: 'ORDER BY clustering_col ASC/DESC',
          example: 'SELECT * FROM events\nWHERE user_id = uuid()\nORDER BY event_time DESC\nLIMIT 10;',
        },
      ],
    },
    {
      title: 'UPDATE Data',
      commands: [
        {
          command: 'UPDATE',
          description: 'Update row',
          usage: 'UPDATE table SET col=val WHERE primary_key',
          example: 'UPDATE users SET age = 31 WHERE user_id = uuid();\nUPDATE users SET name = \'John Smith\', email = \'john.smith@example.com\'\nWHERE user_id = uuid();',
        },
        {
          command: 'UPDATE with TTL',
          description: 'Update with time-to-live',
          usage: 'UPDATE ... USING TTL seconds',
          example: 'UPDATE sessions SET data = \'new data\'\nWHERE session_id = uuid()\nUSING TTL 3600;',
        },
        {
          command: 'Counter Update',
          description: 'Increment/decrement counter',
          usage: 'UPDATE table SET counter_col = counter_col + n',
          example: 'UPDATE page_views SET count = count + 1\nWHERE page_id = uuid();',
        },
      ],
    },
    {
      title: 'DELETE Data',
      commands: [
        {
          command: 'DELETE',
          description: 'Delete row or columns',
          usage: 'DELETE FROM table WHERE primary_key',
          example: 'DELETE FROM users WHERE user_id = uuid();\n\nDELETE email FROM users WHERE user_id = uuid();',
        },
        {
          command: 'DELETE with Timestamp',
          description: 'Delete data before timestamp',
          usage: 'DELETE FROM table USING TIMESTAMP WHERE...',
          example: 'DELETE FROM users\nUSING TIMESTAMP 1609459200000000\nWHERE user_id = uuid();',
        },
      ],
    },
    {
      title: 'Collections',
      commands: [
        {
          command: 'SET',
          description: 'Unordered collection',
          usage: 'col_name SET<type>',
          example: 'CREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  tags SET<TEXT>\n);\n\nUPDATE users SET tags = tags + {\'admin\', \'moderator\'}\nWHERE user_id = uuid();\n\nUPDATE users SET tags = tags - {\'moderator\'}\nWHERE user_id = uuid();',
        },
        {
          command: 'LIST',
          description: 'Ordered collection',
          usage: 'col_name LIST<type>',
          example: 'CREATE TABLE tasks (\n  task_id UUID PRIMARY KEY,\n  steps LIST<TEXT>\n);\n\nUPDATE tasks SET steps = steps + [\'Step 3\']\nWHERE task_id = uuid();\n\nUPDATE tasks SET steps[0] = \'Updated Step 1\'\nWHERE task_id = uuid();',
        },
        {
          command: 'MAP',
          description: 'Key-value pairs',
          usage: 'col_name MAP<key_type, value_type>',
          example: 'CREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  attributes MAP<TEXT, TEXT>\n);\n\nUPDATE users SET attributes[\'city\'] = \'New York\'\nWHERE user_id = uuid();\n\nDELETE attributes[\'old_key\'] FROM users\nWHERE user_id = uuid();',
        },
      ],
    },
    {
      title: 'User-Defined Types (UDT)',
      commands: [
        {
          command: 'CREATE TYPE',
          description: 'Create custom type',
          usage: 'CREATE TYPE type_name (fields)',
          example: 'CREATE TYPE address (\n  street TEXT,\n  city TEXT,\n  zip TEXT\n);',
        },
        {
          command: 'Using UDT',
          description: 'Use custom type in table',
          usage: 'col_name FROZEN<type_name>',
          example: 'CREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  home_address FROZEN<address>\n);\n\nINSERT INTO users (user_id, home_address)\nVALUES (uuid(), {street: \'123 Main St\', city: \'NYC\', zip: \'10001\'});',
        },
        {
          command: 'DROP TYPE',
          description: 'Delete custom type',
          usage: 'DROP TYPE type_name',
          example: 'DROP TYPE address;',
        },
      ],
    },
    {
      title: 'Secondary Indexes',
      commands: [
        {
          command: 'CREATE INDEX',
          description: 'Create secondary index',
          usage: 'CREATE INDEX ON table (column)',
          example: 'CREATE INDEX ON users (email);\nCREATE INDEX users_age_idx ON users (age);',
        },
        {
          command: 'SASI Index',
          description: 'SSTable Attached Secondary Index',
          usage: 'CREATE CUSTOM INDEX ... USING \'org.apache.cassandra.index.sasi.SASIIndex\'',
          example: 'CREATE CUSTOM INDEX ON users (name)\nUSING \'org.apache.cassandra.index.sasi.SASIIndex\';',
        },
        {
          command: 'DROP INDEX',
          description: 'Remove index',
          usage: 'DROP INDEX index_name',
          example: 'DROP INDEX users_age_idx;',
        },
      ],
    },
    {
      title: 'Materialized Views',
      commands: [
        {
          command: 'CREATE MATERIALIZED VIEW',
          description: 'Create auto-updated view',
          usage: 'CREATE MATERIALIZED VIEW name AS SELECT ... PRIMARY KEY',
          example: 'CREATE MATERIALIZED VIEW users_by_email AS\n  SELECT user_id, name, email FROM users\n  WHERE email IS NOT NULL\n  PRIMARY KEY (email, user_id);',
        },
        {
          command: 'DROP MATERIALIZED VIEW',
          description: 'Delete materialized view',
          usage: 'DROP MATERIALIZED VIEW name',
          example: 'DROP MATERIALIZED VIEW users_by_email;',
        },
      ],
    },
    {
      title: 'Batch Operations',
      commands: [
        {
          command: 'BATCH',
          description: 'Execute multiple statements',
          usage: 'BEGIN BATCH ... APPLY BATCH',
          example: 'BEGIN BATCH\n  INSERT INTO users (user_id, name) VALUES (uuid(), \'Alice\');\n  UPDATE users SET age = 25 WHERE user_id = uuid();\n  DELETE FROM users WHERE user_id = uuid();\nAPPLY BATCH;',
        },
        {
          command: 'UNLOGGED BATCH',
          description: 'Batch without logging (faster)',
          usage: 'BEGIN UNLOGGED BATCH ... APPLY BATCH',
          example: 'BEGIN UNLOGGED BATCH\n  INSERT INTO logs (log_id, message) VALUES (uuid(), \'Log 1\');\n  INSERT INTO logs (log_id, message) VALUES (uuid(), \'Log 2\');\nAPPLY BATCH;',
        },
      ],
    },
    {
      title: 'Consistency Levels',
      commands: [
        {
          command: 'CONSISTENCY',
          description: 'Set consistency level',
          usage: 'CONSISTENCY level',
          example: 'CONSISTENCY ONE;\nCONSISTENCY QUORUM;\nCONSISTENCY ALL;\nCONSISTENCY LOCAL_QUORUM;',
        },
        {
          command: 'Consistency Levels',
          description: 'Available levels',
          usage: 'ONE, TWO, THREE, QUORUM, ALL, LOCAL_QUORUM',
          example: '-- Read/Write consistency\nONE: Fastest, least consistent\nQUORUM: Majority (good balance)\nALL: Slowest, most consistent\nLOCAL_QUORUM: Majority in local DC',
        },
      ],
    },
    {
      title: 'Performance',
      commands: [
        {
          command: 'WITH CLUSTERING ORDER',
          description: 'Set clustering order',
          usage: 'WITH CLUSTERING ORDER BY (col DESC)',
          example: 'CREATE TABLE events (\n  user_id UUID,\n  event_time TIMESTAMP,\n  data TEXT,\n  PRIMARY KEY (user_id, event_time)\n) WITH CLUSTERING ORDER BY (event_time DESC);',
        },
        {
          command: 'WITH COMPACTION',
          description: 'Set compaction strategy',
          usage: 'WITH compaction = {...}',
          example: 'CREATE TABLE time_series (\n  id UUID PRIMARY KEY,\n  data TEXT\n) WITH compaction = {\n  \'class\': \'TimeWindowCompactionStrategy\',\n  \'compaction_window_unit\': \'DAYS\',\n  \'compaction_window_size\': 7\n};',
        },
        {
          command: 'WITH caching',
          description: 'Set caching options',
          usage: 'WITH caching = {...}',
          example: 'CREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  name TEXT\n) WITH caching = {\n  \'keys\': \'ALL\',\n  \'rows_per_partition\': \'100\'\n};',
        },
      ],
    },
    {
      title: 'nodetool Commands',
      commands: [
        {
          command: 'nodetool status',
          description: 'Cluster status',
          usage: 'nodetool status',
          example: 'nodetool status\n# Shows all nodes, their status, and load',
        },
        {
          command: 'nodetool repair',
          description: 'Repair data',
          usage: 'nodetool repair [keyspace]',
          example: 'nodetool repair\nnodetool repair myapp',
        },
        {
          command: 'nodetool flush',
          description: 'Flush memtables to disk',
          usage: 'nodetool flush [keyspace] [table]',
          example: 'nodetool flush\nnodetool flush myapp users',
        },
        {
          command: 'nodetool compact',
          description: 'Force compaction',
          usage: 'nodetool compact [keyspace] [table]',
          example: 'nodetool compact myapp users',
        },
        {
          command: 'nodetool cleanup',
          description: 'Remove unneeded data',
          usage: 'nodetool cleanup',
          example: 'nodetool cleanup\n# After adding/removing nodes',
        },
      ],
    },
  ],
};
