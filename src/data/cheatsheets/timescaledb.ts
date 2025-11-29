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
      title: 'Hyperfunctions (TimescaleDB Toolkit)',
      commands: [
        {
          command: 'CREATE EXTENSION timescaledb_toolkit',
          description: 'Enable advanced analytics toolkit',
          usage: 'CREATE EXTENSION timescaledb_toolkit',
          example: 'CREATE EXTENSION IF NOT EXISTS timescaledb_toolkit CASCADE;',
        },
        {
          command: 'stats_agg',
          description: 'Statistical aggregate',
          usage: 'stats_agg(value)',
          example: 'SELECT\n  time_bucket(\'1 hour\', time) AS bucket,\n  stats_agg(temperature) AS stats\nFROM metrics\nGROUP BY bucket;\n\n-- Extract statistics\nSELECT\n  bucket,\n  average(stats),\n  stddev(stats),\n  variance(stats)\nFROM (...) AS stats_data;',
        },
        {
          command: 'approx_percentile',
          description: 'Approximate percentile calculation',
          usage: 'approx_percentile(percentile, value)',
          example: 'SELECT\n  time_bucket(\'1 hour\', time) AS bucket,\n  approx_percentile(0.95, temperature) AS p95,\n  approx_percentile(0.99, temperature) AS p99\nFROM metrics\nGROUP BY bucket;',
        },
        {
          command: 'counter_agg / delta',
          description: 'Counter aggregation for monotonic data',
          usage: 'counter_agg(time, value)',
          example: 'SELECT\n  time_bucket(\'1 hour\', time) AS bucket,\n  delta(counter_agg(time, bytes_sent)) AS bytes_delta\nFROM network_traffic\nGROUP BY bucket;',
        },
        {
          command: 'time_weight / average',
          description: 'Time-weighted average',
          usage: 'time_weight(method, time, value)',
          example: 'SELECT\n  time_bucket(\'1 day\', time) AS bucket,\n  average(time_weight(\'Linear\', time, temperature))\nFROM metrics\nGROUP BY bucket;',
        },
      ],
    },
    {
      title: 'Real-time Aggregation',
      commands: [
        {
          command: 'Real-time continuous aggregates',
          description: 'Enable real-time aggregation',
          usage: 'WITH (timescaledb.materialized_only=false)',
          example: 'CREATE MATERIALIZED VIEW metrics_realtime\nWITH (timescaledb.continuous, timescaledb.materialized_only=false) AS\nSELECT\n  time_bucket(\'1 minute\', time) AS bucket,\n  device_id,\n  AVG(temperature) AS avg_temp\nFROM metrics\nGROUP BY bucket, device_id;\n\n-- Queries automatically combine materialized + real-time data',
        },
        {
          command: 'refresh_lag / max_interval_per_job',
          description: 'Configure refresh behavior',
          usage: 'ALTER MATERIALIZED VIEW ... SET ...',
          example: 'ALTER MATERIALIZED VIEW metrics_realtime\nSET (timescaledb.refresh_lag = \'-30 minutes\');\n\n-- Only materialize data older than 30 minutes',
        },
      ],
    },
    {
      title: 'Data Tiering',
      commands: [
        {
          command: 'Tablespaces for tiering',
          description: 'Move chunks to different storage',
          usage: 'move_chunk(chunk_name, tablespace)',
          example: '-- Create tablespace on slower storage\nCREATE TABLESPACE slow_storage LOCATION \'/mnt/slow\';\n\n-- Move old chunks to slow storage\nSELECT move_chunk(\n  chunk => \'_timescaledb_internal._hyper_1_1_chunk\',\n  destination_tablespace => \'slow_storage\'\n);',
        },
        {
          command: 'tiered_storage_policy',
          description: 'Auto-move chunks to different storage',
          usage: 'add_tiered_storage_policy',
          example: 'SELECT add_tiered_storage_policy(\n  \'metrics\',\n  move_after => INTERVAL \'7 days\',\n  destination_tablespace => \'slow_storage\'\n);',
        },
      ],
    },
    {
      title: 'Cagg Policies',
      commands: [
        {
          command: 'Refresh window',
          description: 'Control which time range to refresh',
          usage: 'start_offset, end_offset',
          example: 'SELECT add_continuous_aggregate_policy(\n  \'metrics_hourly\',\n  start_offset => INTERVAL \'3 hours\',\n  end_offset => INTERVAL \'1 hour\',\n  schedule_interval => INTERVAL \'30 minutes\'\n);\n\n-- Refreshes data from 3 hours ago to 1 hour ago',
        },
        {
          command: 'Manual refresh with window',
          description: 'Refresh specific time range',
          usage: 'refresh_continuous_aggregate with start/end',
          example: 'CALL refresh_continuous_aggregate(\n  \'metrics_hourly\',\n  \'2024-01-01\',\n  \'2024-01-31\'\n);',
        },
        {
          command: 'Drop cagg data',
          description: 'Delete old aggregate data',
          usage: 'DROP MATERIALIZED VIEW ... CASCADE',
          example: 'DROP MATERIALIZED VIEW metrics_hourly CASCADE;',
        },
      ],
    },
    {
      title: 'Advanced Time Functions',
      commands: [
        {
          command: 'time_bucket_ng',
          description: 'New time_bucket with timezone support',
          usage: 'time_bucket_ng(bucket_width, time, timezone)',
          example: 'SELECT\n  time_bucket_ng(\'1 day\', time, \'America/New_York\') AS bucket,\n  AVG(temperature)\nFROM metrics\nGROUP BY bucket;',
        },
        {
          command: 'time_bucket with origin',
          description: 'Custom bucket alignment',
          usage: 'time_bucket(bucket_width, time, origin)',
          example: 'SELECT\n  time_bucket(\'5 minutes\', time, \'2024-01-01 00:02:00\') AS bucket,\n  COUNT(*)\nFROM events\nGROUP BY bucket;\n\n-- Buckets start at :02, :07, :12, etc.',
        },
      ],
    },
    {
      title: 'Compression Advanced',
      commands: [
        {
          command: 'Compression with multiple segmentby',
          description: 'Segment by multiple columns',
          usage: 'compress_segmentby',
          example: 'ALTER TABLE metrics SET (\n  timescaledb.compress,\n  timescaledb.compress_segmentby = \'device_id, location\',\n  timescaledb.compress_orderby = \'time DESC, sensor_id\'\n);',
        },
        {
          command: 'Compression chunk_time_interval',
          description: 'Compress after specific time',
          usage: 'compress_after',
          example: 'SELECT add_compression_policy(\n  \'metrics\',\n  compress_after => INTERVAL \'7 days\',\n  if_not_exists => TRUE\n);',
        },
        {
          command: 'Recompress chunks',
          description: 'Recompress with new settings',
          usage: 'recompress_chunk',
          example: '-- Update compression settings\nALTER TABLE metrics SET (\n  timescaledb.compress_orderby = \'time DESC, temperature\'\n);\n\n-- Recompress existing chunks\nSELECT recompress_chunk(chunk_name)\nFROM timescaledb_information.chunks\nWHERE is_compressed = true;',
        },
      ],
    },
    {
      title: 'Multi-node Operations',
      commands: [
        {
          command: 'distributed_exec',
          description: 'Execute on all data nodes',
          usage: 'CALL distributed_exec(query)',
          example: 'CALL distributed_exec($$\n  CREATE INDEX IF NOT EXISTS idx_device\n  ON metrics (device_id, time DESC)\n$$);',
        },
        {
          command: 'set_replication_factor',
          description: 'Set chunk replication',
          usage: 'set_replication_factor(hypertable, factor)',
          example: 'SELECT set_replication_factor(\'metrics\', 2);',
        },
        {
          command: 'copy_chunk',
          description: 'Copy chunk to another node',
          usage: 'copy_chunk(chunk_name, destination_node)',
          example: 'SELECT copy_chunk(\n  chunk => \'_timescaledb_internal._hyper_1_1_chunk\',\n  destination_node => \'node2\'\n);',
        },
      ],
    },
    {
      title: 'Alerting & Monitoring',
      commands: [
        {
          command: 'timescaledb.license',
          description: 'Check license type',
          usage: 'SHOW timescaledb.license',
          example: 'SHOW timescaledb.license;\n-- Returns: apache, timescale, or community',
        },
        {
          command: 'Chunk statistics',
          description: 'View chunk compression stats',
          usage: 'SELECT FROM chunk_compression_stats',
          example: 'SELECT\n  hypertable_name,\n  num_chunks,\n  compressed_chunks,\n  pg_size_pretty(uncompressed_total_bytes) AS uncompressed,\n  pg_size_pretty(compressed_total_bytes) AS compressed,\n  ROUND(100 - (compressed_total_bytes::FLOAT / \n    uncompressed_total_bytes * 100)) AS compression_ratio\nFROM chunk_compression_stats(\'metrics\');',
        },
        {
          command: 'Job statistics',
          description: 'Monitor background job execution',
          usage: 'SELECT FROM timescaledb_information.job_stats',
          example: 'SELECT\n  job_id,\n  last_run_status,\n  last_run_duration,\n  total_runs,\n  total_failures\nFROM timescaledb_information.job_stats\nORDER BY last_finish_time DESC;',
        },
      ],
    },
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'timescaledb.max_background_workers',
          description: 'Configure background workers',
          usage: 'ALTER SYSTEM SET timescaledb.max_background_workers',
          example: 'ALTER SYSTEM SET timescaledb.max_background_workers = 8;\nSELECT pg_reload_conf();',
        },
        {
          command: 'Parallel query',
          description: 'Enable parallel chunk queries',
          usage: 'max_parallel_workers_per_gather',
          example: 'SET max_parallel_workers_per_gather = 4;\n\nSELECT\n  time_bucket(\'1 hour\', time),\n  device_id,\n  AVG(temperature)\nFROM metrics\nWHERE time > NOW() - INTERVAL \'30 days\'\nGROUP BY 1, 2;',
        },
        {
          command: 'Analyze hypertable',
          description: 'Update statistics',
          usage: 'ANALYZE table_name',
          example: 'ANALYZE metrics;\n-- Updates planner statistics for better query plans',
        },
      ],
    },
    {
      title: 'Data Migration',
      commands: [
        {
          command: 'timescaledb-parallel-copy',
          description: 'Fast bulk data import',
          usage: 'timescaledb-parallel-copy --connection "..." --table metrics',
          example: 'timescaledb-parallel-copy \\\n  --connection "host=localhost user=postgres dbname=mydb" \\\n  --table metrics \\\n  --file data.csv \\\n  --workers 4 \\\n  --copy-options "CSV HEADER"',
        },
        {
          command: 'COPY with chunks',
          description: 'Efficient COPY for time-series',
          usage: 'COPY table FROM ...',
          example: 'COPY metrics (time, device_id, temperature)\nFROM \'/path/to/data.csv\'\nWITH (FORMAT CSV, HEADER true);',
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
        {
          command: 'Memory configuration',
          description: 'Recommended PostgreSQL settings',
          example: '-- In postgresql.conf\nshared_buffers = 25% of RAM\neffective_cache_size = 50% of RAM\nmaintenance_work_mem = 2GB\nmax_worker_processes = CPU cores\nmax_parallel_workers = CPU cores\ntimescaledb.max_background_workers = 8',
          usage: 'Performance tuning',
        },
      ],
    },
  ],
};
