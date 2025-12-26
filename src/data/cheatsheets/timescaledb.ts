import { Database } from 'lucide-react';

export const timescaledbCheatsheet = {
  id: 'timescaledb',
  name: 'TimescaleDB',
  description: 'Master TimescaleDB from basics to advanced features (2024)',
  icon: Database,
  colorTheme: 'teal' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with TimescaleDB',
      commands: [
        {
          command: 'TimescaleDB Introduction',
          description: 'Understanding TimescaleDB concepts and architecture',
          usage: 'Basic TimescaleDB terminology and concepts',
          example: `-- TimescaleDB is a PostgreSQL extension for time-series data

======== Key Concepts ==========
-- Hypertable: Main abstraction for time-series data
-- Chunk: Physical partition of hypertable data
-- Dimension: Column used for partitioning (time is always one)
-- Continuous Aggregate: Pre-aggregated data that updates automatically
-- Compression: Reduces storage footprint for historical data
-- Retention Policy: Automatically removes old data

======== Architecture Benefits ==========
-- Scales PostgreSQL for time-series workloads
-- Maintains full SQL compatibility
-- Automatic partitioning by time
-- Efficient queries on time-series data
-- Built-in data lifecycle management
-- PostgreSQL ecosystem compatibility`,
        },
        {
          command: 'Installation and Setup',
          description: 'Install and configure TimescaleDB',
          usage: 'Installation commands for different platforms',
          example: `-- PostgreSQL 14+ with TimescaleDB 2.x

======== Ubuntu/Debian ==========
# Add TimescaleDB repository
wget --quiet -O - https://packagecloud.io/timescale/timescaledb/gpgkey | sudo apt-key add -
echo "deb https://packagecloud.io/timescale/timescaledb/ubuntu/ $(lsb_release -c -s) main" | sudo tee /etc/apt/sources.list.d/timescaledb.list
sudo apt update

# Install TimescaleDB
sudo apt install timescaledb-2-postgresql-14

======== Docker ==========
docker run -d --name timescaledb \\
  -p 5432:5432 \\
  -e POSTGRES_PASSWORD=password \\
  timescale/timescaledb:latest-pg14

======== Enable TimescaleDB ==========
sudo timescaledb-tune --quiet --yes
sudo systemctl restart postgresql`,
        },
        {
          command: 'Database Connection and Setup',
          description: 'Connect to TimescaleDB and create database',
          usage: 'Connection and initial setup commands',
          example: `-- Connect to PostgreSQL
psql -U postgres -h localhost

======== Create Database ==========
CREATE DATABASE timeseries;
\\c timeseries;

======== Enable TimescaleDB Extension ==========
CREATE EXTENSION IF NOT EXISTS timescaledb;

======== Verify Installation ==========
\\dx
SELECT extversion FROM pg_extension WHERE extname = 'timescaledb';

======== TimescaleDB Configuration Views ==========
SELECT * FROM timescaledb_information.hypertables;
SELECT * FROM timescaledb_information.chunks;`,
        },
      ],
    },
    {
      title: 'Basic Hypertable Operations',
      commands: [
        {
          command: 'Creating Hypertables',
          description: 'Convert regular tables to hypertables',
          usage: 'SELECT create_hypertable syntax',
          example: `-- Create regular table first
CREATE TABLE sensor_data (
  time TIMESTAMPTZ NOT NULL,
  device_id INTEGER NOT NULL,
  temperature DOUBLE PRECISION,
  humidity DOUBLE PRECISION,
  location TEXT
);

======== Basic Hypertable Creation ==========
SELECT create_hypertable('sensor_data', 'time');

======== Hypertable with Space Partitioning ==========
SELECT create_hypertable(
  'sensor_data', 
  'time', 
  partitioning_column => 'device_id',
  number_partitions => 4
);

======== Advanced Hypertable Options ==========
SELECT create_hypertable(
  'sensor_data',
  'time',
  chunk_time_interval => INTERVAL '1 hour',
  if_not_exists => TRUE,
  partitioning_column => 'device_id',
  number_partitions => 8
);`,
        },
        {
          command: 'Hypertable Information',
          description: 'View hypertable metadata and properties',
          usage: 'Information functions and views',
          example: `======== View All Hypertables ==========
SELECT * FROM timescaledb_information.hypertables;

======== Detailed Hypertable Info ==========
SELECT 
  hypertable_name,
  table_name,
  schema_name,
  num_dimensions,
  num_chunks,
  compression_enabled
FROM timescaledb_information.hypertables;

======== View Chunks ==========
SELECT * FROM timescaledb_information.chunks;

======== Chunk Details ==========
SELECT 
  chunk_name,
  hypertable_name,
  range_start,
  range_end,
  size
FROM timescaledb_information.chunks
WHERE hypertable_name = 'sensor_data';`,
        },
        {
          command: 'Basic Data Operations',
          description: 'Insert and query time-series data',
          usage: 'Standard SQL with time-series optimizations',
          example: `-- Insert single record
INSERT INTO sensor_data (time, device_id, temperature, humidity, location)
VALUES (NOW(), 1, 23.5, 65.2, 'Server Room');

======== Bulk Insert ==========
INSERT INTO sensor_data (time, device_id, temperature, humidity, location)
VALUES 
  (NOW() - INTERVAL '1 hour', 1, 22.1, 64.8, 'Server Room'),
  (NOW() - INTERVAL '2 hours', 2, 24.3, 67.1, 'Data Center');

======== Basic Queries ==========
-- Recent data
SELECT * FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 hour' 
ORDER BY time DESC;

======== Latest Value per Device ==========
SELECT DISTINCT ON (device_id) 
  device_id, 
  temperature, 
  humidity, 
  time
FROM sensor_data 
ORDER BY device_id, time DESC;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Time Series Functions',
      commands: [
        {
          command: 'Time Bucket Functions',
          description: 'Aggregate data into time buckets',
          usage: 'time_bucket and related functions',
          example: `======== Basic Time Bucket ==========
SELECT 
  time_bucket('1 hour', time) AS hour,
  device_id,
  AVG(temperature) AS avg_temp,
  COUNT(*) AS readings
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY hour, device_id
ORDER BY hour DESC;

======== Time Bucket Gap Filling ==========
SELECT 
  time,
  COALESCE(AVG(temperature), 0) AS avg_temp
FROM generate_series(
  '2024-01-01'::timestamptz, 
  '2024-01-07'::timestamptz, 
  '1 day'::interval
) AS time
LEFT JOIN sensor_data ON 
  time_bucket('1 day', sensor_data.time) = time
GROUP BY time
ORDER BY time;`,
        },
        {
          command: 'First and Last Functions',
          description: 'Get first/last values in time buckets',
          usage: 'first, last, first_agg, last_agg',
          example: `======== First and Last Values ==========
SELECT 
  device_id,
  first(temperature, time) AS first_temp,
  last(temperature, time) AS last_temp,
  first(time) AS first_reading,
  last(time) AS last_reading
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY device_id;

======== First/Last with Time Bucket ==========
SELECT 
  time_bucket('1 hour', time) AS hour,
  device_id,
  first(temperature, time) AS temp_start,
  last(temperature, time) AS temp_end
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY hour, device_id
ORDER BY hour DESC;`,
        },
        {
          command: 'Histogram and Stats Functions',
          description: 'Statistical analysis of time-series data',
          usage: 'histogram, stats_agg, approx functions',
          example: `======== Histogram ==========
SELECT 
  device_id,
  histogram(temperature, 10) AS temp_distribution
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY device_id;

======== Stats Aggregate ==========
SELECT 
  time_bucket('1 hour', time) AS hour,
  stats_agg(temperature) AS temp_stats
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY hour
ORDER BY hour DESC;

======== Approximate Functions ==========
SELECT 
  device_id,
  approx_percentile(temperature, 0.5) AS median_temp,
  approx_percentile(temperature, 0.95) AS p95_temp,
  approx_cardinality(DISTINCT device_id) AS unique_devices
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY device_id;`,
        },
      ],
    },
    {
      title: 'Continuous Aggregates',
      commands: [
        {
          command: 'Creating Continuous Aggregates',
          description: 'Create automatically updating materialized views',
          usage: 'CREATE MATERIALIZED VIEW with timescaledb',
          example: `======== Hourly Aggregate ==========
CREATE MATERIALIZED VIEW hourly_metrics
WITH (timescaledb.continuous) AS
SELECT 
  time_bucket('1 hour', time) AS hour,
  device_id,
  AVG(temperature) AS avg_temperature,
  AVG(humidity) AS avg_humidity,
  MIN(temperature) AS min_temperature,
  MAX(temperature) AS max_temperature,
  COUNT(*) AS reading_count
FROM sensor_data
GROUP BY hour, device_id;

======== Add Refresh Policy ==========
SELECT add_continuous_aggregate_policy(
  'hourly_metrics',
  start_offset => INTERVAL '1 day',
  end_offset => INTERVAL '1 hour',
  schedule_interval => INTERVAL '1 hour'
);`,
        },
        {
          command: 'Managing Continuous Aggregates',
          description: 'Refresh and maintain continuous aggregates',
          usage: 'refresh policies and maintenance',
          example: `======== Refresh Continuous Aggregate ==========
CALL refresh_continuous_aggregate('hourly_metrics', NULL, NULL);

======== View Refresh Policies ==========
SELECT * FROM timescaledb_information.continuous_aggregates;

======== Remove Refresh Policy ==========
SELECT remove_continuous_aggregate_policy('hourly_metrics');

======== Modify Refresh Policy ==========
SELECT alter_continuous_aggregate_policy(
  'hourly_metrics',
  schedule_interval => INTERVAL '2 hours',
  end_offset => INTERVAL '30 minutes'
);`,
        },
        {
          command: 'Querying Continuous Aggregates',
          description: 'Efficient queries on pre-aggregated data',
          usage: 'Query patterns for continuous aggregates',
          example: `======== Query Hourly Data ==========
SELECT * FROM hourly_metrics 
WHERE hour > NOW() - INTERVAL '7 days' 
  AND device_id = 1
ORDER BY hour DESC;

======== Time Range Query ==========
SELECT 
  hour,
  device_id,
  avg_temperature,
  max_temperature - min_temperature AS temp_range
FROM hourly_metrics 
WHERE hour BETWEEN '2024-01-01' AND '2024-01-31'
ORDER BY hour, device_id;`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Data Compression',
      commands: [
        {
          command: 'Enabling Compression',
          description: 'Compress historical data to save space',
          usage: 'ALTER TABLE compression commands',
          example: `======== Enable Compression ==========
ALTER TABLE sensor_data SET (
  timescaledb.compress,
  timescaledb.compress_segmentby = 'device_id',
  timescaledb.compress_orderby = 'time DESC'
);

======== Add Compression Policy ==========
SELECT add_compression_policy(
  'sensor_data',
  INTERVAL '1 month',
  compress_after => INTERVAL '1 week'
);

======== View Compression Settings ==========
SELECT * FROM timescaledb_information.compression_settings;`,
        },
        {
          command: 'Managing Compression',
          description: 'Decompress and manage compressed data',
          usage: 'Decompression and maintenance commands',
          example: `======== Decompress Data ==========
SELECT decompress_chunk('_timescaledb_catalog._hyper_1_1_chunk');

======== View Compression Stats ==========
SELECT 
  chunk_name,
  compressed_size,
  uncompressed_size,
  compression_ratio
FROM timescaledb_information.compressed_chunk_stats;

======== Remove Compression Policy ==========
SELECT remove_compression_policy('sensor_data');`,
        },
        {
          command: 'Advanced Compression Patterns',
          description: 'Optimize compression for different data patterns',
          usage: 'Advanced compression strategies',
          example: `======== Multi-Column Compression ==========
ALTER TABLE sensor_data SET (
  timescaledb.compress,
  timescaledb.compress_segmentby = 'device_id, location',
  timescaledb.compress_orderby = 'time DESC, temperature DESC, humidity DESC'
);

======== Compression Monitoring ==========
SELECT 
  hypertable_name,
  num_compressed_chunks,
  num_uncompressed_chunks,
  pg_size_pretty(compressed_size) AS compressed,
  pg_size_pretty(uncompressed_size) AS uncompressed
FROM timescaledb_information.hypertable_compression_stats;`,
        },
      ],
    },
    {
      title: 'Data Retention and Lifecycle',
      commands: [
        {
          command: 'Data Retention Policies',
          description: 'Automatically remove old data',
          usage: 'add_retention_policy and related functions',
          example: `======== Basic Retention Policy ==========
SELECT add_retention_policy(
  'sensor_data', 
  INTERVAL '1 year'
);

======== Advanced Retention Policy ==========
SELECT add_retention_policy(
  'sensor_data',
  INTERVAL '6 months',
  drop_after => INTERVAL '1 month',
  schedule_interval => INTERVAL '1 day'
);

======== Remove Retention Policy ==========
SELECT remove_retention_policy('sensor_data');`,
        },
        {
          command: 'Data Lifecycle Management',
          description: 'Complex data lifecycle strategies',
          usage: 'Advanced lifecycle patterns',
          example: `======== Tiered Storage Strategy ==========
CREATE OR REPLACE FUNCTION tiered_storage()
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  PERFORM move_chunk(
    older_than => INTERVAL '6 months',
    destination_schema => 'archive',
    source_table => 'sensor_data'
  );
  PERFORM compress_chunk(
    older_than => INTERVAL '3 months',
    table_name => 'sensor_data'
  );
END;
$$;

SELECT add_job('tiered_storage', '1 day');`,
        },
        {
          command: 'Chunk Management',
          description: 'Advanced chunk operations',
          usage: 'show_chunks, move_chunk, split_chunk',
          example: `======== View Chunks ==========
SELECT * FROM show_chunks('sensor_data');
SELECT * FROM show_chunks('sensor_data', older_than => INTERVAL '1 month');

======== Move Chunks ==========
SELECT move_chunk(
  chunk => '_timescaledb_catalog._hyper_1_1_chunk',
  destination_tablespace => 'ssd_storage'
);

======== Split Chunks ==========
SELECT split_chunk(
  '_timescaledb_catalog._hyper_1_1_chunk',
  split_point => '2024-06-15'::timestamptz
);`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Advanced Query Optimization',
      commands: [
        {
          command: 'Query Performance Analysis',
          description: 'Analyze and optimize time-series queries',
          usage: 'EXPLAIN, query optimization techniques',
          example: `======== Query Analysis ==========
EXPLAIN (ANALYZE, BUFFERS) 
SELECT time_bucket('1 hour', time) AS hour,
       device_id,
       AVG(temperature) AS avg_temp
FROM sensor_data 
WHERE time > NOW() - INTERVAL '7 days'
GROUP BY hour, device_id
ORDER BY hour DESC;

======== Optimized Time Range Queries ==========
SELECT * FROM sensor_data 
WHERE time >= '2024-01-01'::timestamptz 
  AND time < '2024-02-01'::timestamptz
  AND device_id = 1;

======== Index Usage ==========
CREATE INDEX ON sensor_data (device_id, time DESC);
CREATE INDEX ON sensor_data (time DESC, device_id);`,
        },
        {
          command: 'Advanced Time Series Joins',
          description: 'Efficient joins with time-series data',
          usage: 'Join patterns and optimization',
          example: `======== Time Series Join ==========
SELECT 
  s.time,
  s.device_id,
  s.temperature,
  d.location,
  d.device_type
FROM sensor_data s
JOIN devices d ON s.device_id = d.device_id
WHERE s.time > NOW() - INTERVAL '1 day'
ORDER BY s.time DESC;

======== As of Join (Time Travel) ==========
SELECT 
  s.time,
  s.device_id,
  s.temperature,
  d.location AS device_location
FROM sensor_data s
LEFT JOIN LATERAL (
  SELECT location 
  FROM device_history dh 
  WHERE dh.device_id = s.device_id 
    AND dh.effective_time <= s.time 
  ORDER BY dh.effective_time DESC 
  LIMIT 1
) d ON true
WHERE s.time > NOW() - INTERVAL '1 day';`,
        },
        {
          command: 'Window Functions for Time Series',
          description: 'Advanced window function patterns',
          usage: 'Window functions with time-series data',
          example: `======== Moving Averages ==========
SELECT 
  time,
  temperature,
  AVG(temperature) OVER (
    ORDER BY time 
    ROWS BETWEEN 5 PRECEDING AND CURRENT ROW
  ) AS moving_avg_6,
  AVG(temperature) OVER (
    ORDER BY time 
    RANGE BETWEEN INTERVAL '1 hour' PRECEDING AND CURRENT ROW
  ) AS hourly_avg
FROM sensor_data 
WHERE device_id = 1 
  AND time > NOW() - INTERVAL '1 day'
ORDER BY time;

======== Lag/Lead for Change Detection ==========
SELECT 
  time,
  temperature,
  LAG(temperature, 1) OVER (ORDER BY time) AS prev_temp,
  temperature - LAG(temperature, 1) OVER (ORDER BY time) AS temp_change,
  CASE 
    WHEN temperature > LAG(temperature, 1) OVER (ORDER BY time) THEN 'Increasing'
    WHEN temperature < LAG(temperature, 1) OVER (ORDER BY time) THEN 'Decreasing'
    ELSE 'Stable'
  END AS trend
FROM sensor_data 
WHERE device_id = 1 
  AND time > NOW() - INTERVAL '6 hours'
ORDER BY time;`,
        },
      ],
    },
    {
      title: 'Monitoring and Maintenance',
      commands: [
        {
          command: 'TimescaleDB Monitoring',
          description: 'Monitor TimescaleDB performance and health',
          usage: 'Monitoring queries and system views',
          example: `======== Hypertable Health ==========
SELECT 
  hypertable_name,
  num_chunks,
  num_compressed_chunks,
  uncompressed_size,
  compressed_size,
  compression_ratio
FROM timescaledb_information.hypertable_sizes;

======== Job Monitoring ==========
SELECT 
  job_id,
  proc_name,
  schedule_interval,
  next_start,
  last_success,
  last_run_status
FROM timescaledb_information.jobs
ORDER BY next_start;

======== Background Worker Stats ==========
SELECT * FROM timescaledb_information.worker_stats;`,
        },
        {
          command: 'Maintenance Operations',
          description: 'Regular maintenance tasks and optimization',
          usage: 'Maintenance commands and procedures',
          example: `======== Database Maintenance ==========
ANALYZE sensor_data;
VACUUM (ANALYZE) sensor_data;

======== Reindex for Performance ==========
REINDEX INDEX CONCURRENTLY sensor_data_device_id_time_idx;

======== Configuration Tuning ==========
ALTER SYSTEM SET shared_preload_libraries = 'timescaledb';
ALTER SYSTEM SET max_connections = 200;
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
SELECT pg_reload_conf();`,
        },
        {
          command: 'Backup and Recovery',
          description: 'Backup strategies for TimescaleDB',
          usage: 'Backup and restore procedures',
          example: `======== Logical Backup ==========
pg_dump -h localhost -U postgres -d timeseries -f timeseries_backup.sql

======== Physical Backup ==========
pg_basebackup -h localhost -D /backup/timescale_base \\
  -U postgres -v -P -W

======== Point-in-Time Recovery ==========
ALTER SYSTEM SET wal_level = replica;
ALTER SYSTEM SET archive_mode = on;
ALTER SYSTEM SET archive_command = 'cp %p /backup/wal/%f';
SELECT pg_reload_conf();`,
        },
      ],
    },
    {
      title: 'Modern TimescaleDB Features',
      commands: [
        {
          command: 'TimescaleDB 2.x Features',
          description: 'Latest features in TimescaleDB 2.x',
          usage: 'New functions and capabilities',
          example: `======== Multi-Dimensional Hypertables ==========
SELECT create_hypertable(
  'sensor_data',
  'time',
  partitioning_column => ARRAY['device_id', 'location'],
  number_partitions => ARRAY[4, 3]
);

======== Enhanced Compression ==========
ALTER TABLE sensor_data SET (
  timescaledb.compress,
  timescaledb.compress_segmentby = 'device_id, location',
  timescaledb.compress_orderby = 'time DESC, temperature DESC'
);

======== TimescaleDB Toolkit ==========
CREATE EXTENSION IF NOT EXISTS timescaledb_toolkit;

SELECT 
  time_bucket('1 hour', time) AS hour,
  device_id,
  toolkit.exponential_moving_average(
    temperature, 
    0.3
  ) OVER (
    PARTITION BY device_id 
    ORDER BY time
  ) AS ema_temp
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day';`,
        },
        {
          command: 'Advanced Analytics',
          description: 'Machine learning and statistical functions',
          usage: 'TimescaleDB toolkit analytics',
          example: `======== Statistical Functions ==========
SELECT 
  device_id,
  toolkit.corr(
    temperature, 
    humidity
  ) AS temp_humidity_correlation,
  toolkit.linear_regression(
    temperature, 
    humidity
  ) AS regression
FROM sensor_data 
WHERE time > NOW() - INTERVAL '7 days'
GROUP BY device_id;

======== Anomaly Detection ==========
SELECT 
  time,
  device_id,
  temperature,
  toolkit.anomaly_detect(
    temperature, 
    0.95
  ) OVER (
    PARTITION BY device_id 
    ORDER BY time 
    ROWS BETWEEN 100 PRECEDING AND CURRENT ROW
  ) AS is_anomaly
FROM sensor_data 
WHERE time > NOW() - INTERVAL '1 day';`,
        },
        {
          command: 'Integration Features',
          description: 'Integration with external systems',
          usage: 'External data sources and APIs',
          example: `======== PostgreSQL Extensions ==========
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE location_data (
  time TIMESTAMPTZ NOT NULL,
  device_id INTEGER NOT NULL,
  location GEOGRAPHY(POINT, 4326),
  temperature DOUBLE PRECISION
);

SELECT create_hypertable('location_data', 'time');

======== Foreign Data Wrappers ==========
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

CREATE SERVER external_db 
  FOREIGN DATA WRAPPER postgres_fdw 
  OPTIONS (host 'external-host', dbname 'external_db');

CREATE USER MAPPING FOR current_user 
  SERVER external_db 
  OPTIONS (user 'external_user', password 'external_pass');`,
        },
      ],
    },
  ],
};
