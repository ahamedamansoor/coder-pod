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
          command: 'TimescaleDB Overview',
          description: 'Introduction to TimescaleDB concepts',
          usage: 'Understanding TimescaleDB fundamentals',
          example: `TimescaleDB Overview:
- PostgreSQL extension for time-series data
- Scales PostgreSQL for time-series workloads
- Maintains full SQL compatibility
- Automatic partitioning by time
- Efficient queries on time-series data
- Built-in data lifecycle management
- PostgreSQL ecosystem compatibility`,
        },
        {
          command: 'Key Concepts',
          description: 'Core TimescaleDB concepts',
          usage: 'Understanding TimescaleDB terminology',
          example: `Core Concepts:
- Hypertable: Main abstraction for time-series data
- Chunk: Physical partition of hypertable data
- Dimension: Column used for partitioning (time is always one)
- Continuous Aggregate: Pre-aggregated data that updates automatically
- Compression: Reduces storage footprint for historical data
- Retention Policy: Automatically removes old data
- Data Node: Stores partitioned data
- Access Node: Coordinates queries across data nodes`,
        },
        {
          command: 'Architecture Benefits',
          description: 'Advantages of TimescaleDB architecture',
          usage: 'Why choose TimescaleDB',
          example: `Architecture Benefits:
- Automatic partitioning by time
- Efficient time-series queries
- Built-in data lifecycle management
- PostgreSQL compatibility
- Horizontal scaling capabilities
- Compression for storage optimization
- Continuous aggregates for performance
- Multi-node support for large deployments`,
        },
        {
          command: 'Install TimescaleDB Ubuntu',
          description: 'Install TimescaleDB on Ubuntu/Debian',
          usage: 'apt package installation',
          example: `# Add TimescaleDB repository
wget --quiet -O - https://packagecloud.io/timescale/timescaledb/gpgkey | sudo apt-key add -
echo "deb https://packagecloud.io/timescale/timescaledb/ubuntu/ $(lsb_release -c -s) main" | sudo tee /etc/apt/sources.list.d/timescaledb.list
sudo apt update

# Install TimescaleDB
sudo apt install timescaledb-2-postgresql-14

# Enable extension
sudo -u postgres psql -c "CREATE EXTENSION IF NOT EXISTS timescaledb;"`,
        },
        {
          command: 'Install TimescaleDB CentOS',
          description: 'Install TimescaleDB on CentOS/RHEL',
          usage: 'yum package installation',
          example: `# Add TimescaleDB repository
sudo tee /etc/yum.repos.d/timescaledb.repo <<EOL
[timescaledb]
name=timescaledb repository
baseurl=https://packagecloud.io/timescale/timescaledb/el/7/\$basearch
repo_gpgcheck=1
gpgcheck=0
enabled=1
gpgkey=https://packagecloud.io/timescale/timescaledb/gpgkey
EOL

# Install TimescaleDB
sudo yum install -y timescaledb-2-postgresql-14

# Enable extension
sudo -u postgres psql -c "CREATE EXTENSION IF NOT EXISTS timescaledb;"`,
        },
        {
          command: 'Install TimescaleDB Docker',
          description: 'Install TimescaleDB using Docker',
          usage: 'Docker installation',
          example: `# Pull TimescaleDB image
docker pull timescale/timescaledb:latest-pg14

# Run TimescaleDB container
docker run -d --name timescaledb \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=timeseries \
  timescale/timescaledb:latest-pg14

# Connect to container
docker exec -it timescaledb psql -U postgres -d timeseries`,
        },
        {
          command: 'Enable TimescaleDB',
          description: 'Enable TimescaleDB extension',
          usage: 'CREATE EXTENSION command',
          example: `-- Connect to database
psql -U postgres -d your_database

-- Enable TimescaleDB extension
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- Verify installation
\\dx timescaledb

-- Check TimescaleDB version
SELECT timescaledb_version();`,
        },
        {
          command: 'Create Hypertable',
          description: 'Create a basic hypertable',
          usage: 'CREATE TABLE + create_hypertable',
          example: `-- Create regular table
CREATE TABLE sensor_data (
  time TIMESTAMP NOT NULL,
  device_id TEXT NOT NULL,
  temperature DOUBLE PRECISION,
  humidity DOUBLE PRECISION,
  location TEXT
);

-- Convert to hypertable
SELECT create_hypertable('sensor_data', 'time');

-- Create hypertable with time partitioning
SELECT create_hypertable(
  'sensor_data', 
  'time',
  chunk_time_interval => INTERVAL '1 day'
);`,
        },
        {
          command: 'Create Hypertable with Space Partitioning',
          description: 'Create hypertable with space partitioning',
          usage: 'create_hypertable with space partition',
          example: `-- Create table for space partitioning
CREATE TABLE sensor_data (
  time TIMESTAMP NOT NULL,
  device_id TEXT NOT NULL,
  temperature DOUBLE PRECISION,
  humidity DOUBLE PRECISION
);

-- Create hypertable with space partitioning
SELECT create_hypertable(
  'sensor_data',
  'time',
  'device_id',
  chunk_time_interval => INTERVAL '1 day',
  number_partitions => 4
);`,
        },
        {
          command: 'Insert Data into Hypertable',
          description: 'Insert time-series data',
          usage: 'INSERT INTO hypertable',
          example: `-- Insert single record
INSERT INTO sensor_data (time, device_id, temperature, humidity)
VALUES (NOW(), 'sensor_001', 23.5, 65.2);

-- Insert multiple records
INSERT INTO sensor_data (time, device_id, temperature, humidity)
VALUES 
  (NOW(), 'sensor_001', 24.1, 66.8),
  (NOW() - INTERVAL '1 hour', 'sensor_002', 22.3, 64.5),
  (NOW() - INTERVAL '2 hours', 'sensor_001', 23.8, 65.9);`,
        },
        {
          command: 'Query Hypertable Data',
          description: 'Query time-series data',
          usage: 'SELECT from hypertable',
          example: `-- Query all data
SELECT * FROM sensor_data;

-- Query with time filter
SELECT * FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours';

-- Query specific device
SELECT * FROM sensor_data 
WHERE device_id = 'sensor_001' 
AND time >= NOW() - INTERVAL '1 day';

-- Query with aggregation
SELECT 
  device_id,
  AVG(temperature) as avg_temp,
  MAX(temperature) as max_temp,
  COUNT(*) as readings
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '1 day'
GROUP BY device_id;`,
        },
        {
          command: 'Show Hypertable Information',
          description: 'Get hypertable metadata',
          usage: 'Information functions',
          example: `-- Show hypertable details
SELECT * FROM timescaledb_information.hypertables;

-- Show chunk information
SELECT * FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data';

-- Show chunk sizes
SELECT 
  chunk_name,
  range_start,
  range_end,
  pg_size_pretty(pg_total_relation_size(chunk_schema||'.'||chunk_name)) as size
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data';`,
        },
        {
          command: 'Time Bucketing',
          description: 'Aggregate data by time intervals',
          usage: 'time_bucket function',
          example: `-- Create 1-hour time buckets
SELECT 
  time_bucket('1 hour', time) as hour,
  device_id,
  AVG(temperature) as avg_temp,
  COUNT(*) as readings
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY hour, device_id
ORDER BY hour;

-- Create 15-minute buckets
SELECT 
  time_bucket('15 minutes', time) as bucket,
  AVG(temperature) as avg_temp,
  STDDEV(temperature) as temp_stddev
FROM sensor_data 
GROUP BY bucket
ORDER BY bucket;`,
        },
        {
          command: 'First and Last Functions',
          description: 'Get first/last values in time buckets',
          usage: 'first/last aggregate functions',
          example: `-- Get first and last values per hour
SELECT 
  time_bucket('1 hour', time) as hour,
  device_id,
  first(temperature, time) as first_temp,
  last(temperature, time) as last_temp,
  first(time, time) as first_time,
  last(time, time) as last_time
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY hour, device_id;`,
        },
        {
          command: 'Histogram Functions',
          description: 'Create histograms of time-series data',
          usage: 'histogram aggregate functions',
          example: `-- Create temperature histogram
SELECT 
  device_id,
  histogram(temperature, 5, 20, 10) as temp_hist
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY device_id;

-- Get histogram bins
SELECT 
  device_id,
  histogram_bin(temperature, 5, 20, 10) as temp_bin,
  COUNT(*) as count
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY device_id, temp_bin
ORDER BY temp_bin;`,
        },
      ],
    },
    {
      title: 'TimescaleDB Data Types and Functions',
      commands: [
        {
          command: 'Time Interval Data Types',
          description: 'Time interval types in TimescaleDB',
          usage: 'INTERVAL and time functions',
          example: `-- Time interval literals
SELECT INTERVAL '1 day';
SELECT INTERVAL '2 hours 30 minutes';
SELECT INTERVAL '1 week 3 days';

-- Time interval arithmetic
SELECT NOW() + INTERVAL '1 day';
SELECT NOW() - INTERVAL '2 hours';

-- Extract components from interval
SELECT EXTRACT(DAY FROM INTERVAL '3 days 4 hours');
SELECT EXTRACT(HOUR FROM INTERVAL '2 days 5 hours');`,
        },
        {
          command: 'Time Zone Functions',
          description: 'Handle time zones in time-series data',
          usage: 'Time zone conversion functions',
          example: `-- Convert time zones
SELECT time_zone('UTC', NOW());
SELECT time_zone('America/New_York', NOW());

-- Show all time zones
SELECT * FROM pg_timezone_names;

-- Convert UTC to local time
SELECT time_zone('America/Los_Angeles', '2024-01-01 12:00:00 UTC'::timestamptz);`,
        },
        {
          command: 'Time Bucket Gap Filling',
          description: 'Fill gaps in time-series data',
          usage: 'time_bucket_gapfill function',
          example: `-- Fill gaps with linear interpolation
SELECT 
  time_bucket_gapfill('1 hour', time) AS hour,
  AVG(temperature) as avg_temp,
  LOCATE(linear(INTERPOLATE, AVG(temperature), hour)) 
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY hour
ORDER BY hour;

-- Fill gaps with previous value
SELECT 
  time_bucket_gapfill('1 hour', time) AS hour,
  AVG(temperature) as avg_temp,
  LOCATE(previous(INTERPOLATE, AVG(temperature), hour)) 
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY hour
ORDER BY hour;`,
        },
        {
          command: 'Rollup Functions',
          description: 'Rollup time-series data',
          usage: 'rollup functions',
          example: `-- Rollup to daily averages
SELECT 
  rollup(time, time_bucket('1 day', time)) as day,
  device_id,
  AVG(temperature) as avg_temp,
  COUNT(*) as readings
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '30 days'
GROUP BY day, device_id;

-- Rollup to weekly data
SELECT 
  rollup(time, time_bucket('1 week', time)) as week,
  AVG(temperature) as avg_temp,
  MIN(temperature) as min_temp,
  MAX(temperature) as max_temp
FROM sensor_data 
GROUP BY week
ORDER BY week;`,
        },
        {
          command: 'Underlying Functions',
          description: 'Access underlying PostgreSQL functions',
          usage: 'underlying_agg function',
          example: `-- Get underlying PostgreSQL aggregate
SELECT 
  time_bucket('1 hour', time) as hour,
  underlying_avg(temperature) as avg_temp,
  underlying_count(temperature) as count
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY hour;

-- Use with custom aggregates
SELECT 
  time_bucket('1 hour', time) as hour,
  underlying_percentile_cont(0.95) WITHIN GROUP (ORDER BY temperature) as p95_temp
FROM sensor_data 
GROUP BY hour;`,
        },
        {
          command: 'Stateful Functions',
          description: 'Stateful aggregate functions',
          usage: 'stateful_agg functions',
          example: `-- Stateful moving average
SELECT 
  time,
  temperature,
  stateful_avg(temperature) OVER (
    ORDER BY time 
    RANGE BETWEEN INTERVAL '1 hour' PRECEDING AND CURRENT ROW
  ) as moving_avg
FROM sensor_data 
WHERE device_id = 'sensor_001'
ORDER BY time;

-- Stateful moving sum
SELECT 
  time,
  value,
  stateful_sum(value) OVER (
    ORDER BY time 
    RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
  ) as rolling_sum
FROM metrics;`,
        },
      ],
    },
    {
      title: 'TimescaleDB Compression',
      commands: [
        {
          command: 'Enable Compression',
          description: 'Enable compression on hypertable',
          usage: 'alter_table_set_compression',
          example: `-- Enable compression with default settings
SELECT alter_table_set_compression('sensor_data');

-- Enable compression with custom settings
SELECT alter_table_set_compression(
  'sensor_data',
  segmentby => 'device_id',
  orderby => 'time DESC'
);

-- Check compression status
SELECT * FROM timescaledb_information.compressed_hypertables;`,
        },
        {
          command: 'Configure Compression Settings',
          description: 'Configure compression parameters',
          usage: 'Compression configuration options',
          example: `-- Set compression segment by column
SELECT alter_compression_policy(
  'sensor_data',
  INTERVAL '7 days',
  segmentby => 'device_id',
  orderby => 'time DESC'
);

-- Set compression with multiple segment by columns
SELECT alter_compression_policy(
  'sensor_data',
  INTERVAL '7 days',
  segmentby => ARRAY['device_id', 'location'],
  orderby => 'time DESC'
);`,
        },
        {
          command: 'Add Compression Policy',
          description: 'Add automatic compression policy',
          usage: 'add_compression_policy function',
          example: `-- Add compression policy
SELECT add_compression_policy(
  'sensor_data',
  INTERVAL '7 days'
);

-- Add policy with custom settings
SELECT add_compression_policy(
  'sensor_data',
  INTERVAL '7 days',
  if_not_exists => TRUE
);

-- View compression policies
SELECT * FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_compression';`,
        },
        {
          command: 'Compress Individual Chunks',
          description: 'Manually compress specific chunks',
          usage: 'compress_chunk function',
          example: `-- Compress specific chunk
SELECT compress_chunk(
  '_timescaledb_catalog._hyper_1_1_chunk'
);

-- Compress multiple chunks
SELECT compress_chunk(
  '_timescaledb_catalog._hyper_1_1_chunk',
  '_timescaledb_catalog._hyper_1_2_chunk'
);

-- Check compression status
SELECT 
  chunk_name,
  compressed,
  pg_size_pretty(pg_total_relation_size(chunk_schema||'.'||chunk_name)) as size
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data';`,
        },
        {
          command: 'Decompress Data',
          description: 'Decompress compressed chunks',
          usage: 'decompress_chunk function',
          example: `-- Decompress specific chunk
SELECT decompress_chunk(
  '_timescaledb_catalog._hyper_1_1_chunk'
);

-- Decompress all chunks
SELECT decompress_chunk(chunk_name)
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data'
AND compressed = TRUE;`,
        },
        {
          command: 'Compression Statistics',
          description: 'Monitor compression effectiveness',
          usage: 'Compression monitoring',
          example: `-- Compression statistics
SELECT 
  hypertable_name,
  num_compressed_chunks,
  num_uncompressed_chunks,
  pg_size_pretty(compressed_size) as compressed_size,
  pg_size_pretty(uncompressed_size) as uncompressed_size,
  ROUND(compressed_size::float / uncompressed_size * 100, 2) as compression_ratio
FROM timescaledb_information.compressed_hypetables_stats;

-- Detailed chunk compression info
SELECT 
  chunk_name,
  compressed,
  pg_size_pretty(pg_total_relation_size(chunk_schema||'.'||chunk_name)) as size
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data'
ORDER BY size DESC;`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'TimescaleDB Continuous Aggregates',
      commands: [
        {
          command: 'Create Continuous Aggregate',
          description: 'Create basic continuous aggregate',
          usage: 'CREATE MATERIALIZED VIEW',
          example: `-- Create continuous aggregate for hourly averages
CREATE MATERIALIZED VIEW sensor_data_hourly 
WITH (timescaledb.continuous) AS
SELECT 
  time_bucket('1 hour', time) AS hour,
  device_id,
  AVG(temperature) AS avg_temperature,
  MAX(temperature) AS max_temperature,
  MIN(temperature) AS min_temperature,
  COUNT(*) AS readings_count
FROM sensor_data 
GROUP BY hour, device_id;`,
        },
        {
          command: 'Create Continuous Aggregate with Refresh',
          description: 'Create continuous aggregate with custom refresh',
          usage: 'WITH REFRESH OPTION',
          example: `-- Create with custom refresh interval
CREATE MATERIALIZED VIEW sensor_data_daily 
WITH (timescaledb.continuous, timescaledb.refresh_interval = '1 hour') AS
SELECT 
  time_bucket('1 day', time) AS day,
  device_id,
  AVG(temperature) AS avg_temperature,
  STDDEV(temperature) AS temp_stddev
FROM sensor_data 
GROUP BY day, device_id;`,
        },
        {
          command: 'Add Refresh Policy',
          description: 'Add automatic refresh policy',
          usage: 'add_continuous_aggregate_policy',
          example: `-- Add refresh policy
SELECT add_continuous_aggregate_policy(
  'sensor_data_hourly',
  start_offset => INTERVAL '1 hour',
  end_offset => INTERVAL '1 minute',
  schedule_interval => INTERVAL '5 minutes'
);

-- Add policy with custom settings
SELECT add_continuous_aggregate_policy(
  'sensor_data_hourly',
  start_offset => INTERVAL '3 hours',
  end_offset => INTERVAL '1 minute',
  schedule_interval => INTERVAL '10 minutes',
  if_not_exists => TRUE
);`,
        },
        {
          command: 'Refresh Continuous Aggregate',
          description: 'Manually refresh continuous aggregate',
          usage: 'refresh_continuous_aggregate',
          example: `-- Refresh all data
CALL refresh_continuous_aggregate('sensor_data_hourly');

-- Refresh specific time range
CALL refresh_continuous_aggregate(
  'sensor_data_hourly',
  NOW() - INTERVAL '1 day',
  NOW()
);

-- Refresh with window
CALL refresh_continuous_aggregate(
  'sensor_data_hourly',
  NOW() - INTERVAL '1 week',
  NOW(),
  '1 day'
);`,
        },
        {
          command: 'Query Continuous Aggregates',
          description: 'Query continuous aggregate data',
          usage: 'SELECT from continuous aggregate',
          example: `-- Query continuous aggregate
SELECT * FROM sensor_data_hourly 
WHERE hour >= NOW() - INTERVAL '24 hours'
ORDER BY hour DESC;

-- Query with additional filters
SELECT 
  hour,
  device_id,
  avg_temperature,
  readings_count
FROM sensor_data_hourly 
WHERE hour >= NOW() - INTERVAL '7 days'
AND avg_temperature > 25.0
ORDER BY avg_temperature DESC;`,
        },
        {
          command: 'Continuous Aggregate with Joins',
          description: 'Create continuous aggregate with joins',
          usage: 'Joins in continuous aggregates',
          example: `-- Create continuous aggregate with device metadata
CREATE MATERIALIZED VIEW device_temp_summary 
WITH (timescaledb.continuous) AS
SELECT 
  time_bucket('1 hour', s.time) AS hour,
  d.device_id,
  d.location,
  d.device_type,
  AVG(s.temperature) AS avg_temperature,
  COUNT(*) AS readings_count
FROM sensor_data s
JOIN devices d ON s.device_id = d.device_id
GROUP BY hour, d.device_id, d.location, d.device_type;`,
        },
        {
          command: 'Continuous Aggregate Information',
          description: 'Get continuous aggregate metadata',
          usage: 'Information functions',
          example: `-- Show continuous aggregates
SELECT * FROM timescaledb_information.continuous_aggregates;

-- Show refresh policies
SELECT * FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_refresh_continuous_aggregate';

-- Show materialized view stats
SELECT 
  view_name,
  pg_size_pretty(pg_total_relation_size(view_schema||'.'||view_name)) as size
FROM timescaledb_information.continuous_aggregates;`,
        },
        {
          command: 'Drop Continuous Aggregate',
          description: 'Remove continuous aggregate',
          usage: 'DROP MATERIALIZED VIEW',
          example: `-- Drop continuous aggregate
DROP MATERIALIZED VIEW sensor_data_hourly;

-- Drop with cascade
DROP MATERIALIZED VIEW sensor_data_hourly CASCADE;

-- Remove refresh policy
SELECT remove_continuous_aggregate_policy('sensor_data_hourly');`,
        },
      ],
    },
    {
      title: 'TimescaleDB Data Retention',
      commands: [
        {
          command: 'Create Retention Policy',
          description: 'Create data retention policy',
          usage: 'add_retention_policy function',
          example: `-- Add retention policy to delete old data
SELECT add_retention_policy(
  'sensor_data',
  INTERVAL '30 days'
);

-- Add policy with custom settings
SELECT add_retention_policy(
  'sensor_data',
  INTERVAL '90 days',
  if_not_exists => TRUE
);`,
        },
        {
          command: 'Drop Retention Policy',
          description: 'Remove retention policy',
          usage: 'remove_retention_policy function',
          example: `-- Remove retention policy
SELECT remove_retention_policy('sensor_data');

-- Remove if exists
SELECT remove_retention_policy(
  'sensor_data',
  if_exists => TRUE
);`,
        },
        {
          command: 'Data Rehydration',
          description: 'Rehydrate compressed data for modification',
          usage: 'rehydrate_chunk function',
          example: `-- Rehydrate specific chunk
SELECT rehydrate_chunk(
  '_timescaledb_catalog._hyper_1_1_chunk'
);

-- Rehydrate multiple chunks
SELECT rehydrate_chunk(chunk_name)
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data'
AND compressed = TRUE
AND range_end < NOW() - INTERVAL '1 day';`,
        },
        {
          command: 'Drop Chunks',
          description: 'Manually drop old chunks',
          usage: 'drop_chunks function',
          example: `-- Drop chunks older than 30 days
SELECT drop_chunks(
  INTERVAL '30 days',
  'sensor_data'
);

-- Drop chunks with specific time range
SELECT drop_chunks(
  '2024-01-01',
  '2024-02-01',
  'sensor_data'
);

-- Drop chunks from multiple tables
SELECT drop_chunks(
  INTERVAL '30 days',
  ARRAY['sensor_data', 'device_logs']
);`,
        },
        {
          command: 'Retention Policy Information',
          description: 'Monitor retention policies',
          usage: 'Policy monitoring',
          example: `-- Show retention policies
SELECT * FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_retention';

-- Show chunk age distribution
SELECT 
  hypertable_name,
  COUNT(*) as chunk_count,
  MIN(range_start) as oldest_chunk,
  MAX(range_end) as newest_chunk
FROM timescaledb_information.chunks 
GROUP BY hypertable_name;`,
        },
      ],
    },
    {
      title: 'TimescaleDB Advanced Queries',
      commands: [
        {
          command: 'Time Weighted Average',
          description: 'Calculate time-weighted averages',
          usage: 'time_weighted_average function',
          example: `-- Time-weighted average temperature
SELECT 
  device_id,
  time_weighted_average(
    'linear', 
    temperature, 
    time
  ) as twa_temp
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
AND device_id = 'sensor_001'
GROUP BY device_id;

-- Time-weighted average with gaps
SELECT 
  device_id,
  time_weighted_average(
    'linear', 
    temperature, 
    time,
    '1 hour'
  ) as twa_temp
FROM sensor_data 
GROUP BY device_id;`,
        },
        {
          command: 'Locate Function',
          description: 'Find values in time buckets',
          usage: 'locate function',
          example: `-- Find first value in each hour
SELECT 
  time_bucket('1 hour', time) as hour,
  device_id,
  locate(
    min,
    temperature,
    time_bucket('1 hour', time)
  ) as first_temp_in_hour
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
GROUP BY hour, device_id;

-- Find last value in each hour
SELECT 
  time_bucket('1 hour', time) as hour,
  locate(
    max,
    temperature,
    time_bucket('1 hour', time)
  ) as last_temp_in_hour
FROM sensor_data 
GROUP BY hour;`,
        },
        {
          command: 'Interpolate Function',
          description: 'Interpolate missing values',
          usage: 'interpolate function',
          example: `-- Linear interpolation
SELECT 
  time_bucket('15 minutes', time) as bucket,
  interpolate(
    linear,
    AVG(temperature),
    bucket
  ) as interpolated_temp
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '6 hours'
GROUP BY bucket
ORDER BY bucket;

-- Previous value interpolation
SELECT 
  time_bucket('15 minutes', time) as bucket,
  interpolate(
    previous,
    AVG(temperature),
    bucket
  ) as interpolated_temp
FROM sensor_data 
GROUP BY bucket
ORDER BY bucket;`,
        },
        {
          command: 'Delta Functions',
          description: 'Calculate changes over time',
          usage: 'delta functions',
          example: `-- Calculate delta between consecutive values
SELECT 
  time,
  temperature,
  delta(temperature) OVER (ORDER BY time) as temp_change
FROM sensor_data 
WHERE device_id = 'sensor_001'
ORDER BY time;

-- Calculate rate of change
SELECT 
  time,
  temperature,
  rate(temperature, time) OVER (ORDER BY time) as temp_rate
FROM sensor_data 
WHERE device_id = 'sensor_001'
ORDER BY time;`,
        },
        {
          command: 'Advanced Time Bucketing',
          description: 'Advanced time bucket operations',
          usage: 'Advanced time_bucket functions',
          example: `-- Time bucket with origin
SELECT 
  time_bucket('1 hour', time, '2024-01-01 00:00:00') as hour,
  AVG(temperature) as avg_temp
FROM sensor_data 
GROUP BY hour
ORDER BY hour;

-- Time bucket with timezone
SELECT 
  time_bucket('1 day', time, 'America/New_York') as day,
  AVG(temperature) as avg_temp
FROM sensor_data 
GROUP BY day
ORDER BY day;`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'TimescaleDB Multi-Node Architecture',
      commands: [
        {
          command: 'Multi-Node Overview',
          description: 'Understanding multi-node architecture',
          usage: 'Multi-node concepts',
          example: `Multi-Node Architecture:
- Data Node: Stores partitioned data chunks
- Access Node: Coordinates queries across data nodes
- Distributed hypertables: Tables spread across nodes
- Replication: Data replication for high availability
- Load balancing: Query distribution across nodes
- Scaling: Horizontal scaling for large datasets`,
        },
        {
          command: 'Setup Data Node',
          description: 'Configure a data node',
          usage: 'Data node configuration',
          example: `-- Configure data node in postgresql.conf
shared_preload_libraries = 'timescaledb'
timescaledb.enable_multi_node = 'on'
timescaledb.node_type = 'data'
listen_addresses = '*'
port = 5432

-- Restart PostgreSQL
sudo systemctl restart postgresql

-- Create database
CREATE DATABASE timeseries;`,
        },
        {
          command: 'Setup Access Node',
          description: 'Configure an access node',
          usage: 'Access node configuration',
          example: `-- Configure access node in postgresql.conf
shared_preload_libraries = 'timescaledb'
timescaledb.enable_multi_node = 'on'
timescaledb.node_type = 'access'
listen_addresses = '*'
port = 5432

-- Restart PostgreSQL
sudo systemctl restart postgresql

-- Enable TimescaleDB
CREATE EXTENSION IF NOT EXISTS timescaledb;`,
        },
        {
          command: 'Add Data Node',
          description: 'Add data node to access node',
          usage: 'add_data_node function',
          example: `-- Add data node
SELECT add_data_node(
  'data_node_1',
  'host=data_node_1_host port=5432 dbname=timeseries user=postgres password=password'
);

-- Add multiple data nodes
SELECT add_data_node(
  'data_node_2',
  'host=data_node_2_host port=5432 dbname=timeseries user=postgres password=password'
);

-- List data nodes
SELECT * FROM timescaledb_information.data_nodes;`,
        },
        {
          command: 'Create Distributed Hypertable',
          description: 'Create hypertable distributed across nodes',
          usage: 'create_distributed_hypertable',
          example: `-- Create distributed hypertable
SELECT create_distributed_hypertable(
  'sensor_data',
  'time',
  'device_id',
  replication_factor => 1
);

-- Create with custom partitioning
SELECT create_distributed_hypertable(
  'sensor_data',
  'time',
  'device_id',
  chunk_time_interval => INTERVAL '1 day',
  replication_factor => 2
);`,
        },
        {
          command: 'Attach Distributed Hypertable',
          description: 'Attach existing hypertable to distributed setup',
          usage: 'attach_distributed_hypertable',
          example: `-- Attach existing hypertable
SELECT attach_distributed_hypertable(
  'sensor_data',
  'time',
  'device_id',
  replication_factor => 1
);

-- Attach with custom settings
SELECT attach_distributed_hypertable(
  'sensor_data',
  'time',
  'device_id',
  chunk_time_interval => INTERVAL '1 day'
);`,
        },
        {
          command: 'Distributed Query Planning',
          description: 'Understand distributed query execution',
          usage: 'Query planning in distributed setup',
          example: `-- Explain distributed query
EXPLAIN (VERBOSE, BUFFERS) 
SELECT * FROM sensor_data 
WHERE time >= NOW() - INTERVAL '1 day';

-- Check query execution
SELECT * FROM timescaledb_information.query_stats 
WHERE hypertable_name = 'sensor_data'
ORDER BY total_exec_time DESC;

-- Monitor distributed queries
SELECT * FROM timescaledb_information.jobs 
WHERE proc_name LIKE 'policy_%';`,
        },
      ],
    },
    {
      title: 'TimescaleDB Performance Optimization',
      commands: [
        {
          command: 'Chunk Size Optimization',
          description: 'Optimize chunk size for performance',
          usage: 'Chunk size tuning',
          example: `-- Create hypertable with optimal chunk size
SELECT create_hypertable(
  'sensor_data',
  'time',
  chunk_time_interval => INTERVAL '1 day'  -- 100MB-1GB per chunk
);

-- For high-frequency data (1 second intervals)
SELECT create_hypertable(
  'high_freq_data',
  'time',
  chunk_time_interval => INTERVAL '1 hour'
);

-- For low-frequency data (daily data)
SELECT create_hypertable(
  'low_freq_data',
  'time',
  chunk_time_interval => INTERVAL '1 month'
);`,
        },
        {
          command: 'Index Optimization',
          description: 'Optimize indexes for time-series queries',
          usage: 'Indexing strategies',
          example: `-- Create composite index on time and device_id
CREATE INDEX ON sensor_data (time DESC, device_id);

-- Create index on device_id for device-specific queries
CREATE INDEX ON sensor_data (device_id, time DESC);

-- Create partial index for recent data
CREATE INDEX ON sensor_data (time DESC, device_id) 
WHERE time >= NOW() - INTERVAL '7 days';

-- Create BRIN index for time range queries
CREATE INDEX ON sensor_data USING BRIN (time);`,
        },
        {
          command: 'Query Performance Tuning',
          description: 'Optimize query performance',
          usage: 'Query optimization techniques',
          example: `-- Use time_bucket for efficient aggregation
SELECT 
  time_bucket('1 hour', time) as hour,
  device_id,
  AVG(temperature) as avg_temp
FROM sensor_data 
WHERE time >= NOW() - INTERVAL '24 hours'
  AND time < NOW()
GROUP BY hour, device_id;

-- Use LIMIT with time ordering
SELECT * FROM sensor_data 
WHERE device_id = 'sensor_001'
ORDER BY time DESC
LIMIT 100;

-- Use appropriate time range filters
SELECT * FROM sensor_data 
WHERE time >= '2024-01-01' AND time < '2024-01-02'
AND device_id = 'sensor_001';`,
        },
        {
          command: 'Memory Configuration',
          description: 'Configure memory for optimal performance',
          usage: 'Memory tuning parameters',
          example: `-- PostgreSQL memory configuration
shared_buffers = 256MB                    -- 25% of RAM
effective_cache_size = 1GB                -- 75% of RAM
work_mem = 4MB                            -- Per query operation
maintenance_work_mem = 64MB               -- Maintenance operations
autovacuum_work_mem = -1                  -- Use maintenance_work_mem

-- TimescaleDB specific
timescaledb.max_background_workers = 8    -- Background workers
timescaledb.max_concurrent_background_workers = 4`,
        },
        {
          command: 'Parallel Query Optimization',
          description: 'Enable parallel query execution',
          usage: 'Parallel query configuration',
          example: `-- Enable parallel queries
max_parallel_workers_per_gather = 2
max_parallel_workers = 8
parallel_tuple_cost = 0.1
parallel_setup_cost = 1000.0

-- Force parallel execution for large scans
SET max_parallel_workers_per_gather = 4;
SET parallel_tuple_cost = 0.01;

-- Monitor parallel query usage
SELECT * FROM pg_stat_progress_vacuum;
SELECT * FROM pg_stat_progress_analyze;`,
        },
        {
          command: 'Connection Pooling',
          description: 'Configure connection pooling',
          usage: 'PgBouncer configuration',
          example: `-- PgBouncer configuration (pgbouncer.ini)
[databases]
timeseries = host=localhost port=5432 dbname=timeseries

[pgbouncer]
listen_port = 6432
listen_addr = 127.0.0.1
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt
logfile = /var/log/pgbouncer/pgbouncer.log
pidfile = /var/run/pgbouncer/pgbouncer.pid
admin_users = postgres
stats_users = stats, postgres

-- Connection settings
pool_mode = transaction
max_client_conn = 100
default_pool_size = 20
min_pool_size = 5
reserve_pool_size = 5`,
        },
      ],
    },
    {
      title: 'TimescaleDB Backup and Recovery',
      commands: [
        {
          command: 'Logical Backup',
          description: 'Create logical backup with pg_dump',
          usage: 'pg_dump for TimescaleDB',
          example: `-- Full logical backup
pg_dump -h localhost -U postgres -d timeseries > timeseries_backup.sql

-- Compressed backup
pg_dump -h localhost -U postgres -d timeseries | gzip > timeseries_backup.sql.gz

-- Custom format backup (parallel)
pg_dump -h localhost -U postgres -d timeseries -Fd -j 4 -f timeseries_backup

-- Backup only schema
pg_dump -h localhost -U postgres -d timeseries -s > timeseries_schema.sql`,
        },
        {
          command: 'Physical Backup',
          description: 'Create physical backup with pg_basebackup',
          usage: 'pg_basebackup for TimescaleDB',
          example: `-- Physical backup
pg_basebackup -h localhost -D /backup/timeseries -U postgres -v -P -W

-- Compressed physical backup
pg_basebackup -h localhost -D /backup/timeseries -U postgres -v -P -W -z

-- Create backup manifest
pg_basebackup -h localhost -D /backup/timeseries -U postgres -v -P -W -l backup_label`,
        },
        {
          command: 'Continuous Archiving',
          description: 'Setup continuous WAL archiving',
          usage: 'WAL archiving configuration',
          example: `-- Enable WAL archiving in postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /backup/wal/%f'
archive_timeout = 300

-- Create archive directory
mkdir -p /backup/wal
chown postgres:postgres /backup/wal

-- Test archive command
archive_command = 'test ! -f /backup/wal/%f && cp %p /backup/wal/%f'`,
        },
        {
          command: 'Point-in-Time Recovery',
          description: 'Restore to specific point in time',
          usage: 'PITR procedures',
          example: `-- Create recovery.conf
restore_command = 'cp /backup/wal/%f %p'
recovery_target_time = '2024-01-01 12:00:00'
recovery_target_inclusive = true

-- Or use recovery.signal (PostgreSQL 12+)
echo 'recovery_target_time = "2024-01-01 12:00:00"' >> postgresql.conf
touch /var/lib/postgresql/12/main/recovery.signal

-- Start recovery
sudo systemctl start postgresql`,
        },
        {
          command: 'TimescaleDB Specific Backup',
          description: 'Backup TimescaleDB specific objects',
          usage: 'TimescaleDB backup strategies',
          example: `-- Backup continuous aggregates
SELECT * FROM timescaledb_information.continuous_aggregates;

-- Backup compression policies
SELECT * FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_compression';

-- Backup retention policies
SELECT * FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_retention';

-- Export hypertable definitions
SELECT * FROM timescaledb_information.hypertables;`,
        },
        {
          command: 'Restore TimescaleDB',
          description: 'Restore TimescaleDB database',
          usage: 'Restore procedures',
          example: `-- Restore from logical backup
psql -h localhost -U postgres -d timeseries < timeseries_backup.sql

-- Restore from compressed backup
gunzip -c timeseries_backup.sql.gz | psql -h localhost -U postgres -d timeseries

-- Restore from custom format
pg_restore -h localhost -U postgres -d timeseries -j 4 /backup/timeseries_backup

-- After restore, recreate TimescaleDB objects
CREATE EXTENSION IF NOT EXISTS timescaledb;
-- Recreate hypertables, continuous aggregates, etc.`,
        },
      ],
    },
    {
      title: 'TimescaleDB Monitoring',
      commands: [
        {
          command: 'Hypertable Monitoring',
          description: 'Monitor hypertable health',
          usage: 'Hypertable monitoring queries',
          example: `-- Hypertable overview
SELECT * FROM timescaledb_information.hypertables;

-- Chunk distribution
SELECT 
  hypertable_name,
  COUNT(*) as chunk_count,
  pg_size_pretty(SUM(pg_total_relation_size(chunk_schema||'.'||chunk_name))) as total_size
FROM timescaledb_information.chunks 
GROUP BY hypertable_name;

-- Chunk age analysis
SELECT 
  hypertable_name,
  chunk_name,
  range_start,
  range_end,
  age(NOW(), range_end) as chunk_age
FROM timescaledb_information.chunks 
ORDER BY range_end;`,
        },
        {
          command: 'Performance Metrics',
          description: 'Monitor performance metrics',
          usage: 'Performance monitoring queries',
          example: `-- Query performance stats
SELECT * FROM timescaledb_information.query_stats 
ORDER BY total_exec_time DESC
LIMIT 10;

-- Chunk I/O statistics
SELECT 
  chunk_name,
  seq_scan,
  seq_tup_read,
  idx_scan,
  idx_tup_fetch
FROM pg_stat_user_tables 
WHERE schemaname LIKE '_timescaledb_catalog%'
ORDER BY seq_scan DESC;

-- Background worker stats
SELECT * FROM timescaledb_information.jobs;`,
        },
        {
          command: 'Compression Monitoring',
          description: 'Monitor compression effectiveness',
          usage: 'Compression monitoring',
          example: `-- Compression statistics
SELECT 
  hypertable_name,
  num_compressed_chunks,
  num_uncompressed_chunks,
  compression_ratio
FROM timescaledb_information.compressed_hypetables_stats;

-- Compression job status
SELECT 
  job_id,
  proc_name,
  schedule_interval,
  last_success,
  next_run
FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_compression';`,
        },
        {
          command: 'Continuous Aggregate Monitoring',
          description: 'Monitor continuous aggregates',
          usage: 'Continuous aggregate monitoring',
          example: `-- Continuous aggregate status
SELECT * FROM timescaledb_information.continuous_aggregates;

-- Refresh job status
SELECT 
  job_id,
  proc_name,
  schedule_interval,
  last_success,
  next_run,
  runtime
FROM timescaledb_information.jobs 
WHERE proc_name = 'policy_refresh_continuous_aggregate';

-- Materialized view size
SELECT 
  view_name,
  pg_size_pretty(pg_total_relation_size(view_schema||'.'||view_name)) as size
FROM timescaledb_information.continuous_aggregates;`,
        },
        {
          command: 'System Resource Monitoring',
          description: 'Monitor system resources',
          usage: 'System monitoring queries',
          example: `-- Database size
SELECT 
  pg_database.datname,
  pg_size_pretty(pg_database_size(pg_database.datname)) as size
FROM pg_database;

-- Table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size,
  pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) as table_size,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename)) as index_size
FROM pg_tables 
WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;`,
        },
        {
          command: 'Alert Queries',
          description: 'Queries for alerting',
          usage: 'Monitoring alert queries',
          example: `-- Alert: Large chunks
SELECT 
  hypertable_name,
  chunk_name,
  pg_size_pretty(pg_total_relation_size(chunk_schema||'.'||chunk_name)) as size
FROM timescaledb_information.chunks 
WHERE pg_total_relation_size(chunk_schema||'.'||chunk_name) > 10 * 1024 * 1024 * 1024; -- > 10GB

-- Alert: Failed jobs
SELECT * FROM timescaledb_information.jobs 
WHERE last_run_status != 'success';

-- Alert: High query times
SELECT * FROM timescaledb_information.query_stats 
WHERE mean_exec_time > 1000; -- > 1 second`,
        },
      ],
    },
    {
      title: 'TimescaleDB Troubleshooting',
      commands: [
        {
          command: 'Common Issues',
          description: 'Diagnose common TimescaleDB issues',
          usage: 'Troubleshooting guide',
          example: `Common Issues:
1. Slow queries on recent data
   - Check if chunks are compressed
   - Verify indexes exist
   - Review query plans with EXPLAIN

2. High memory usage
   - Check work_mem settings
   - Monitor connection count
   - Review background workers

3. Compression not working
   - Verify compression policy exists
   - Check if data meets compression criteria
   - Review compression settings

4. Continuous aggregates not updating
   - Check refresh policy status
   - Verify policy schedule
   - Review job logs`,
        },
        {
          command: 'Query Plan Analysis',
          description: 'Analyze query execution plans',
          usage: 'EXPLAIN and query planning',
          example: `-- Analyze query plan
EXPLAIN (ANALYZE, BUFFERS, VERBOSE) 
SELECT * FROM sensor_data 
WHERE time >= NOW() - INTERVAL '1 day'
AND device_id = 'sensor_001';

-- Check for chunk pruning
EXPLAIN (ANALYZE) 
SELECT COUNT(*) FROM sensor_data 
WHERE time >= '2024-01-01' AND time < '2024-01-02';

-- Monitor query performance
SELECT * FROM timescaledb_information.query_stats 
ORDER BY total_exec_time DESC;`,
        },
        {
          command: 'Chunk Issues',
          description: 'Diagnose chunk-related problems',
          usage: 'Chunk troubleshooting',
          example: `-- Check chunk status
SELECT 
  chunk_name,
  range_start,
  range_end,
  compressed,
  pg_size_pretty(pg_total_relation_size(chunk_schema||'.'||chunk_name)) as size
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data'
ORDER BY range_end DESC;

-- Find empty chunks
SELECT chunk_name, range_start, range_end
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data'
AND pg_total_relation_size(chunk_schema||'.'||chunk_name) = 0;`,
        },
        {
          command: 'Performance Issues',
          description: 'Diagnose performance problems',
          usage: 'Performance troubleshooting',
          example: `-- Check slow queries
SELECT query, mean_exec_time, calls, total_exec_time
FROM timescaledb_information.query_stats 
WHERE mean_exec_time > 1000
ORDER BY mean_exec_time DESC;

-- Check for missing indexes
SELECT 
  schemaname,
  tablename,
  attname,
  n_distinct,
  correlation
FROM pg_stats 
WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
ORDER BY n_distinct DESC;`,
        },
        {
          command: 'Recovery Procedures',
          description: 'Recover from failures',
          usage: 'Disaster recovery procedures',
          example: `-- Recover from corrupted chunk
SELECT decompress_chunk(chunk_name)
FROM timescaledb_information.chunks 
WHERE chunk_name = 'corrupted_chunk';

-- Recreate continuous aggregate
DROP MATERIALIZED VIEW IF EXISTS sensor_data_hourly;
CREATE MATERIALIZED VIEW sensor_data_hourly 
WITH (timescaledb.continuous) AS
SELECT time_bucket('1 hour', time) as hour,
       device_id,
       AVG(temperature) as avg_temperature
FROM sensor_data 
GROUP BY hour, device_id;

-- Recompress data
SELECT compress_chunk(chunk_name)
FROM timescaledb_information.chunks 
WHERE hypertable_name = 'sensor_data'
AND compressed = FALSE;`,
        },
      ],
    },
    {
      title: 'TimescaleDB Best Practices',
      commands: [
        {
          command: 'Data Modeling Best Practices',
          description: 'Guidelines for time-series data modeling',
          usage: 'Modeling principles',
          example: `Data Modeling Best Practices:
1. Always include time as first column
2. Use appropriate time intervals for chunking
3. Choose partition keys wisely
4. Normalize metadata, denormalize metrics
5. Use appropriate data types
6. Plan for data growth
7. Consider query patterns
8. Use compression for historical data`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Performance optimization guidelines',
          usage: 'Performance tips',
          example: `Performance Best Practices:
1. Use time_bucket for aggregations
2. Create appropriate indexes
3. Optimize chunk size
4. Use compression for old data
5. Monitor query performance
6. Use continuous aggregates
7. Configure memory properly
8. Enable parallel queries`,
        },
        {
          command: 'Operations Best Practices',
          description: 'Operational guidelines',
          usage: 'Operations tips',
          example: `Operations Best Practices:
1. Regular backups and testing
2. Monitor disk space usage
3. Implement retention policies
4. Use compression policies
5. Monitor background jobs
6. Plan capacity requirements
7. Document architecture
8. Test disaster recovery`,
        },
        {
          command: 'Security Best Practices',
          description: 'Security guidelines for TimescaleDB',
          usage: 'Security tips',
          example: `Security Best Practices:
1. Use strong authentication
2. Enable SSL/TLS connections
3. Implement row-level security
4. Regular security updates
5. Monitor access logs
6. Use connection pooling
7. Limit superuser access
8. Encrypt sensitive data`,
        },
      ],
    },
  ],
};
