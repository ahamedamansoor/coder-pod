import { Database } from 'lucide-react';

export const timescaledbCheatsheet = {
  id: 'timescaledb',
  name: 'TimescaleDB',
  description: 'Time-series database (PostgreSQL extension)',
  icon: Database,
  colorTheme: 'teal' as const,
  sections: [
    {
      title: 'Setup & Extension',
      commands: [
        {
          command: 'CREATE EXTENSION',
          description: 'Enable TimescaleDB',
          usage: 'CREATE EXTENSION IF NOT EXISTS timescaledb',
          example: 'CREATE EXTENSION IF NOT EXISTS timescaledb;',
        },
        {
          command: '\\dx',
          description: 'List extensions (psql)',
          usage: '\\dx',
          example: '\\dx\n# Shows installed extensions including timescaledb',
        },
      ],
    },
    {
      title: 'Hypertables',
      commands: [
        {
          command: 'create_hypertable',
          description: 'Convert table to hypertable',
          usage: 'SELECT create_hypertable(table_name, time_column)',
          example: 'CREATE TABLE metrics (\n  time TIMESTAMPTZ NOT NULL,\n  device_id INT,\n  temperature DOUBLE PRECISION,\n  humidity DOUBLE PRECISION\n);\n\nSELECT create_hypertable(\'metrics\', \'time\');',
        },
        {
          command: 'create_hypertable with partitioning',
          description: 'Hypertable with space partitioning',
          usage: 'SELECT create_hypertable(table, time_col, partitioning_col)',
          example: 'SELECT create_hypertable(\n  \'metrics\',\n  \'time\',\n  partitioning_column => \'device_id\',\n  number_partitions => 4\n);',
        },
        {
          command: 'create_hypertable options',
          description: 'Advanced hypertable options',
          usage: 'SELECT create_hypertable(..., chunk_time_interval)',
          example: 'SELECT create_hypertable(\n  \'metrics\',\n  \'time\',\n  chunk_time_interval => INTERVAL \'1 day\',\n  if_not_exists => TRUE\n);',
        },
        {
          command: 'drop_chunks',
          description: 'Delete old data chunks',
          usage: 'SELECT drop_chunks(table_name, older_than)',
          example: 'SELECT drop_chunks(\'metrics\', INTERVAL \'3 months\');\n-- Delete data older than 3 months',
        },
        {
          command: 'show_chunks',
          description: 'List hypertable chunks',
          usage: 'SELECT show_chunks(table_name)',
          example: 'SELECT show_chunks(\'metrics\');\nSELECT show_chunks(\'metrics\', older_than => INTERVAL \'1 month\');',
        },
      ],
    },
    {
      title: 'INSERT Time-Series Data',
      commands: [
        {
          command: 'INSERT single row',
          description: 'Insert time-series data',
          usage: 'INSERT INTO table VALUES (time, ...)',
          example: 'INSERT INTO metrics (time, device_id, temperature, humidity)\nVALUES (NOW(), 1, 22.5, 60.2);',
        },
        {
          command: 'INSERT multiple rows',
          description: 'Bulk insert',
          usage: 'INSERT INTO table VALUES (...), (...)',
          example: 'INSERT INTO metrics (time, device_id, temperature, humidity)\nVALUES\n  (\'2024-01-01 00:00:00\', 1, 22.5, 60.2),\n  (\'2024-01-01 00:05:00\', 1, 22.7, 60.5),\n  (\'2024-01-01 00:10:00\', 1, 22.3, 59.8);',
        },
      ],
    },
    {
      title: 'Time-Series Queries',
      commands: [
        {
          command: 'time_bucket',
          description: 'Group by time intervals',
          usage: 'SELECT time_bucket(interval, time_column)',
          example: 'SELECT\n  time_bucket(\'5 minutes\', time) AS bucket,\n  device_id,\n  AVG(temperature) AS avg_temp\nFROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\'\nGROUP BY bucket, device_id\nORDER BY bucket;',
        },
        {
          command: 'time_bucket_gapfill',
          description: 'Fill missing time intervals',
          usage: 'SELECT time_bucket_gapfill(interval, time)',
          example: 'SELECT\n  time_bucket_gapfill(\'1 hour\', time) AS bucket,\n  AVG(temperature) AS avg_temp\nFROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\'\nGROUP BY bucket\nORDER BY bucket;',
        },
        {
          command: 'locf (last observation carried forward)',
          description: 'Fill gaps with previous value',
          usage: 'locf(aggregate_expression)',
          example: 'SELECT\n  time_bucket_gapfill(\'1 hour\', time) AS bucket,\n  locf(AVG(temperature)) AS temperature\nFROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\'\nGROUP BY bucket;',
        },
        {
          command: 'interpolate',
          description: 'Linear interpolation for gaps',
          usage: 'interpolate(aggregate_expression)',
          example: 'SELECT\n  time_bucket_gapfill(\'15 minutes\', time) AS bucket,\n  interpolate(AVG(temperature)) AS temperature\nFROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\'\nGROUP BY bucket;',
        },
      ],
    },
    {
      title: 'Aggregates & Analytics',
      commands: [
        {
          command: 'first / last',
          description: 'First/last value in time range',
          usage: 'first(value, time) / last(value, time)',
          example: 'SELECT\n  device_id,\n  first(temperature, time) AS first_temp,\n  last(temperature, time) AS last_temp\nFROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\'\nGROUP BY device_id;',
        },
        {
          command: 'histogram',
          description: 'Create histogram',
          usage: 'histogram(value, min, max, num_buckets)',
          example: 'SELECT histogram(temperature, 0, 50, 10)\nFROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\';',
        },
        {
          command: 'Moving average',
          description: 'Calculate moving average',
          usage: 'AVG(value) OVER (ORDER BY time ROWS BETWEEN n PRECEDING AND CURRENT ROW)',
          example: 'SELECT\n  time,\n  temperature,\n  AVG(temperature) OVER (\n    ORDER BY time\n    ROWS BETWEEN 9 PRECEDING AND CURRENT ROW\n  ) AS moving_avg_10\nFROM metrics\nWHERE device_id = 1;',
        },
      ],
    },
    {
      title: 'Continuous Aggregates',
      commands: [
        {
          command: 'CREATE MATERIALIZED VIEW',
          description: 'Create continuous aggregate',
          usage: 'CREATE MATERIALIZED VIEW name WITH (timescaledb.continuous)',
          example: 'CREATE MATERIALIZED VIEW metrics_hourly\nWITH (timescaledb.continuous) AS\nSELECT\n  time_bucket(\'1 hour\', time) AS bucket,\n  device_id,\n  AVG(temperature) AS avg_temp,\n  MAX(temperature) AS max_temp,\n  MIN(temperature) AS min_temp\nFROM metrics\nGROUP BY bucket, device_id;',
        },
        {
          command: 'Refresh continuous aggregate',
          description: 'Update materialized view',
          usage: 'CALL refresh_continuous_aggregate(view_name, start, end)',
          example: 'CALL refresh_continuous_aggregate(\n  \'metrics_hourly\',\n  NOW() - INTERVAL \'1 week\',\n  NOW()\n);',
        },
        {
          command: 'Continuous aggregate policy',
          description: 'Auto-refresh policy',
          usage: 'SELECT add_continuous_aggregate_policy',
          example: 'SELECT add_continuous_aggregate_policy(\n  \'metrics_hourly\',\n  start_offset => INTERVAL \'3 hours\',\n  end_offset => INTERVAL \'1 hour\',\n  schedule_interval => INTERVAL \'1 hour\'\n);',
        },
        {
          command: 'DROP continuous aggregate',
          description: 'Delete continuous aggregate',
          usage: 'DROP MATERIALIZED VIEW name',
          example: 'DROP MATERIALIZED VIEW metrics_hourly;',
        },
      ],
    },
    {
      title: 'Data Retention',
      commands: [
        {
          command: 'add_retention_policy',
          description: 'Auto-delete old data',
          usage: 'SELECT add_retention_policy(table, interval)',
          example: 'SELECT add_retention_policy(\n  \'metrics\',\n  INTERVAL \'3 months\'\n);\n-- Automatically drops chunks older than 3 months',
        },
        {
          command: 'remove_retention_policy',
          description: 'Remove retention policy',
          usage: 'SELECT remove_retention_policy(table_name)',
          example: 'SELECT remove_retention_policy(\'metrics\');',
        },
        {
          command: 'alter_job_schedule',
          description: 'Change policy schedule',
          usage: 'SELECT alter_job_schedule(job_id, schedule_interval)',
          example: 'SELECT alter_job_schedule(\n  job_id,\n  schedule_interval => INTERVAL \'12 hours\'\n);',
        },
      ],
    },
    {
      title: 'Compression',
      commands: [
        {
          command: 'ALTER TABLE (enable compression)',
          description: 'Enable compression on hypertable',
          usage: 'ALTER TABLE table SET (timescaledb.compress)',
          example: 'ALTER TABLE metrics SET (\n  timescaledb.compress,\n  timescaledb.compress_segmentby = \'device_id\',\n  timescaledb.compress_orderby = \'time DESC\'\n);',
        },
        {
          command: 'compress_chunk',
          description: 'Manually compress chunk',
          usage: 'SELECT compress_chunk(chunk_name)',
          example: 'SELECT compress_chunk(\'_timescaledb_internal._hyper_1_1_chunk\');',
        },
        {
          command: 'add_compression_policy',
          description: 'Auto-compress old data',
          usage: 'SELECT add_compression_policy(table, interval)',
          example: 'SELECT add_compression_policy(\n  \'metrics\',\n  INTERVAL \'7 days\'\n);\n-- Compress chunks older than 7 days',
        },
        {
          command: 'decompress_chunk',
          description: 'Decompress chunk',
          usage: 'SELECT decompress_chunk(chunk_name)',
          example: 'SELECT decompress_chunk(\'_timescaledb_internal._hyper_1_1_chunk\');',
        },
        {
          command: 'Compression stats',
          description: 'View compression statistics',
          usage: 'SELECT * FROM chunk_compression_stats',
          example: 'SELECT\n  chunk_name,\n  compression_status,\n  before_compression_total_bytes,\n  after_compression_total_bytes\nFROM chunk_compression_stats(\'metrics\');',
        },
      ],
    },
    {
      title: 'Downsampling',
      commands: [
        {
          command: 'Hierarchical continuous aggregates',
          description: 'Multi-level downsampling',
          example: '-- Level 1: 5-minute aggregates\nCREATE MATERIALIZED VIEW metrics_5min\nWITH (timescaledb.continuous) AS\nSELECT\n  time_bucket(\'5 minutes\', time) AS bucket,\n  device_id,\n  AVG(temperature) AS avg_temp\nFROM metrics\nGROUP BY bucket, device_id;\n\n-- Level 2: 1-hour aggregates from 5-min\nCREATE MATERIALIZED VIEW metrics_1hour\nWITH (timescaledb.continuous) AS\nSELECT\n  time_bucket(\'1 hour\', bucket) AS bucket,\n  device_id,\n  AVG(avg_temp) AS avg_temp\nFROM metrics_5min\nGROUP BY bucket, device_id;',
          usage: 'Create multiple continuous aggregate levels',
        },
      ],
    },
    {
      title: 'Indexing',
      commands: [
        {
          command: 'CREATE INDEX on hypertable',
          description: 'Add index to time-series data',
          usage: 'CREATE INDEX ON table (columns)',
          example: 'CREATE INDEX ON metrics (device_id, time DESC);\nCREATE INDEX ON metrics (time DESC, device_id);',
        },
        {
          command: 'BRIN index',
          description: 'Block Range Index (efficient for time-series)',
          usage: 'CREATE INDEX USING BRIN',
          example: 'CREATE INDEX ON metrics USING BRIN (time);',
        },
      ],
    },
    {
      title: 'Distributed Hypertables',
      commands: [
        {
          command: 'create_distributed_hypertable',
          description: 'Create distributed hypertable',
          usage: 'SELECT create_distributed_hypertable(table, time_col)',
          example: 'SELECT create_distributed_hypertable(\n  \'metrics\',\n  \'time\',\n  partitioning_column => \'device_id\'\n);',
        },
        {
          command: 'add_data_node',
          description: 'Add node to cluster',
          usage: 'SELECT add_data_node(name, host)',
          example: 'SELECT add_data_node(\'node1\', host => \'node1.example.com\');',
        },
        {
          command: 'attach_data_node',
          description: 'Attach node to hypertable',
          usage: 'SELECT attach_data_node(node_name, hypertable)',
          example: 'SELECT attach_data_node(\'node1\', \'metrics\');',
        },
      ],
    },
    {
      title: 'Monitoring & Diagnostics',
      commands: [
        {
          command: 'timescaledb_information.hypertables',
          description: 'View all hypertables',
          usage: 'SELECT * FROM timescaledb_information.hypertables',
          example: 'SELECT\n  hypertable_name,\n  num_chunks,\n  table_bytes,\n  index_bytes,\n  total_bytes\nFROM timescaledb_information.hypertables;',
        },
        {
          command: 'timescaledb_information.chunks',
          description: 'View chunk information',
          usage: 'SELECT * FROM timescaledb_information.chunks',
          example: 'SELECT\n  hypertable_name,\n  chunk_name,\n  range_start,\n  range_end\nFROM timescaledb_information.chunks\nWHERE hypertable_name = \'metrics\';',
        },
        {
          command: 'timescaledb_information.jobs',
          description: 'View background jobs',
          usage: 'SELECT * FROM timescaledb_information.jobs',
          example: 'SELECT\n  job_id,\n  application_name,\n  schedule_interval,\n  next_start\nFROM timescaledb_information.jobs;',
        },
        {
          command: 'hypertable_size',
          description: 'Get hypertable size',
          usage: 'SELECT hypertable_size(table_name)',
          example: 'SELECT\n  hypertable_name,\n  pg_size_pretty(hypertable_size(format(\'%I.%I\', hypertable_schema, hypertable_name)::regclass))\nFROM timescaledb_information.hypertables;',
        },
      ],
    },
    {
      title: 'Best Practices',
      commands: [
        {
          command: 'Optimal chunk size',
          description: 'Set appropriate chunk interval',
          usage: 'chunk_time_interval => INTERVAL \'...',
          example: '-- Small datasets: 1 day\n-- Medium datasets: 1 week  \n-- Large datasets: 1 month\n\nSELECT create_hypertable(\n  \'metrics\',\n  \'time\',\n  chunk_time_interval => INTERVAL \'1 week\'\n);',
        },
        {
          command: 'Query optimization',
          description: 'Efficient time-series queries',
          example: '-- Always filter by time\nSELECT * FROM metrics\nWHERE time > NOW() - INTERVAL \'1 day\';\n\n-- Use time_bucket for aggregations\nSELECT\n  time_bucket(\'1 hour\', time),\n  AVG(temperature)\nFROM metrics\nGROUP BY 1;\n\n-- Order by time DESC for recent data\nSELECT * FROM metrics\nORDER BY time DESC\nLIMIT 100;',
          usage: 'Best practices for queries',
        },
      ],
    },
  ],
};
