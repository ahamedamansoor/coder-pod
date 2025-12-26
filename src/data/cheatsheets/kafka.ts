import { Code } from 'lucide-react';

export const kafkaCheatsheet = {
  id: 'kafka',
  name: 'Apache Kafka',
  description: 'Comprehensive Apache Kafka guide covering beginner to expert commands, distributed streaming, and real-time data processing',
  icon: Code,
  color: 'from-gray-700 to-gray-900',
  category: 'programming',
  tags: ['kafka', 'streaming', 'messaging', 'distributed-systems', 'big-data'],
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Kafka',
      commands: [
        {
          command: 'What is Apache Kafka?',
          description: 'Understanding Kafka distributed streaming platform',
          usage: 'High-throughput, fault-tolerant, scalable messaging system',
          example: 'Apache Kafka Overview:\n- Distributed streaming platform\n- Publish-subscribe messaging system\n- Fault-tolerant and highly available\n- Horizontal scalability\n- Real-time data processing\n- Event-driven architecture\n- Microservices communication\n- Log aggregation\n- Stream processing\n\nKey Components:\n- Brokers: Kafka servers that store messages\n- Topics: Categories for message organization\n- Partitions: Parallelism and scalability units\n- Producers: Applications that send messages\n- Consumers: Applications that read messages\n- Consumer Groups: Groups of consumers for load balancing\n- ZooKeeper/KRaft: Coordination and metadata management\n\nUse Cases:\n- Real-time analytics\n- Log aggregation\n- Event sourcing\n- Microservices communication\n- IoT data ingestion\n- Fraud detection\n- Monitoring and alerting'
        },
        {
          command: 'Installing Apache Kafka',
          description: 'Install Kafka on various operating systems',
          usage: 'Binary distribution, Docker, or package managers',
          example: '# Download and extract Kafka\nwget https://downloads.apache.org/kafka/3.6.0/kafka_2.13-3.6.0.tgz\ntar -xzf kafka_2.13-3.6.0.tgz\ncd kafka_2.13-3.6.0\n\n# Install Java (required)\nsudo apt update\nsudo apt install openjdk-11-jdk\n\n# Set JAVA_HOME\nexport JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64\n\n# Docker installation\ndocker run -p 9092:9092 \\\n  -e KAFKA_ZOOKEEPER_CONNECT= zookeeper:2181 \\\n  -e KAFKA_ADVERTISED_LISTENERS= PLAINTEXT://localhost:9092 \\\n  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \\\n  confluentinc/cp-kafka:latest\n\n# Docker Compose\nversion: \'3.8\'\nservices:\n  zookeeper:\n    image: confluentinc/cp-zookeeper:latest\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n\n  kafka:\n    image: confluentinc/cp-kafka:latest\n    depends_on:\n      - zookeeper\n    ports:\n      - "9092:9092"\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092'
        },
        {
          command: 'Starting Kafka Services',
          description: 'Start ZooKeeper and Kafka brokers',
          usage: 'Control scripts for Kafka services',
          example: '# Start ZooKeeper\nbin/zookeeper-server-start.sh config/zookeeper.properties\n\n# Start Kafka broker\nbin/kafka-server-start.sh config/server.properties\n\n# Start in background\nbin/zookeeper-server-start.sh -daemon config/zookeeper.properties\nbin/kafka-server-start.sh -daemon config/server.properties\n\n# Stop services\nbin/zookeeper-server-stop.sh\nbin/kafka-server-stop.sh\n\n# Check if Kafka is running\nnetstat -an | grep 9092\njps | grep Kafka\n\n# Using systemd (if installed)\nsudo systemctl start zookeeper\nsudo systemctl start kafka\nsudo systemctl status kafka'
        },
        {
          command: 'Kafka Directory Structure',
          description: 'Understanding Kafka file and directory layout',
          usage: 'Default locations for configuration and logs',
          example: '# Kafka directory structure\nkafka_2.13-3.6.0/\n├── bin/                    # Scripts and utilities\n│   ├── kafka-server-start.sh\n│   ├── kafka-server-stop.sh\n│   ├── kafka-topics.sh\n│   ├── kafka-console-producer.sh\n│   ├── kafka-console-consumer.sh\n│   └── ...\n├── config/                 # Configuration files\n│   ├── server.properties\n│   ├── zookeeper.properties\n│   ├── producer.properties\n│   └── consumer.properties\n├── libs/                   # JAR dependencies\n├── logs/                   # Log files\n├── data/                   # Data directory (configurable)\n└── streams/                # Streams examples\n\n# Important configuration files\nconfig/server.properties    # Main broker configuration\nconfig/zookeeper.properties # ZooKeeper configuration\nconfig/producer.properties  # Default producer config\nconfig/consumer.properties  # Default consumer config'
        },
      ],
    },
    {
      title: 'Basic Kafka Operations',
      commands: [
        {
          command: 'Creating Topics',
          description: 'Create Kafka topics with specific configurations',
          usage: 'kafka-topics.sh --create command',
          example: '# Create a basic topic\nbin/kafka-topics.sh --create \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --partitions 3 \\\n  --replication-factor 1\n\n# Create topic with custom configuration\nbin/kafka-topics.sh --create \\\n  --bootstrap-server localhost:9092 \\\n  --topic orders \\\n  --partitions 6 \\\n  --replication-factor 3 \\\n  --config retention.ms=604800000 \\\n  --config segment.bytes=1073741824 \\\n  --config cleanup.policy=delete\n\n# Create compacted topic\nbin/kafka-topics.sh --create \\\n  --bootstrap-server localhost:9092 \\\n  --topic user-profiles \\\n  --partitions 3 \\\n  --replication-factor 2 \\\n  --config cleanup.policy=compact\n\n# Create topic with compression\nbin/kafka-topics.sh --create \\\n  --bootstrap-server localhost:9092 \\\n  --topic compressed-events \\\n  --partitions 3 \\\n  --replication-factor 1 \\\n  --config compression.type=producer'
        },
        {
          command: 'Listing Topics',
          description: 'List all available topics',
          usage: 'kafka-topics.sh --list command',
          example: '# List all topics\nbin/kafka-topics.sh --list \\\n  --bootstrap-server localhost:9092\n\n# List topics with internal topics\nbin/kafka-topics.sh --list \\\n  --bootstrap-server localhost:9092 \\\n  --include-internal\n\n# List topics from specific cluster\nbin/kafka-topics.sh --list \\\n  --bootstrap-server broker1:9092,broker2:9092\n\n# Filter topics by pattern\nbin/kafka-topics.sh --list \\\n  --bootstrap-server localhost:9092 | grep "test-"\n\n# Count number of topics\nbin/kafka-topics.sh --list \\\n  --bootstrap-server localhost:9092 | wc -l'
        },
        {
          command: 'Describing Topics',
          description: 'Get detailed information about topics',
          usage: 'kafka-topics.sh --describe command',
          example: '# Describe a specific topic\nbin/kafka-topics.sh --describe \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic\n\n# Describe all topics\nbin/kafka-topics.sh --describe \\\n  --bootstrap-server localhost:9092\n\n# Describe topic with under-replicated partitions\nbin/kafka-topics.sh --describe \\\n  --bootstrap-server localhost:9092 \\\n  --under-replicated-partitions\n\n# Describe topic with unavailable partitions\nbin/kafka-topics.sh --describe \\\n  --bootstrap-server localhost:9092 \\\n  --unavailable-partitions\n\n# Topic description output explanation:\n# Topic: my-topic\tPartitionCount: 3\tReplicationFactor: 1\n# Topic: my-topic\tPartition: 0\tLeader: 1\tReplicas: 1\tIsr: 1\n# PartitionCount: Number of partitions\n# ReplicationFactor: Number of replicas\n# Leader: Broker that leads the partition\n# Replicas: All replicas for the partition\n# Isr: In-sync replicas'
        },
        {
          command: 'Producing Messages',
          description: 'Send messages to Kafka topics',
          usage: 'kafka-console-producer.sh command',
          example: '# Start console producer\nbin/kafka-console-producer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic\n\n# Producer with properties\nbin/kafka-console-producer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --producer.config config/producer.properties\n\n# Producer with key separator\nbin/kafka-console-producer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --property "parse.key=true" \\\n  --property "key.separator=,"\n\n# Send messages (interactive)\n> hello world\n> {"key": "value"}\n> key1,value1\n> key2,value2\n\n# Producer with compression\nbin/kafka-console-producer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic compressed-topic \\\n  --compression-codec gzip\n\n# Producer with acks settings\nbin/kafka-console-producer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic important-topic \\\n  --producer-property acks=all'
        },
        {
          command: 'Consuming Messages',
          description: 'Read messages from Kafka topics',
          usage: 'kafka-console-consumer.sh command',
          example: '# Start console consumer\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic\n\n# Consumer from beginning\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --from-beginning\n\n# Consumer with group ID\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --group my-consumer-group\n\n# Consumer with properties\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --consumer.config config/consumer.properties\n\n# Consumer with key separator\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --property "print.key=true" \\\n  --property "key.separator=,"\n\n# Consumer with offset management\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --offset 2 \\\n  --partition 0\n\n# Consumer with max messages\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --max-messages 10'
        },
      ],
    },
    {
      title: 'Topic Management',
      commands: [
        {
          command: 'Altering Topics',
          description: 'Modify topic configurations',
          usage: 'kafka-topics.sh --alter command',
          example: '# Increase partitions\nbin/kafka-topics.sh --alter \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --partitions 6\n\n# Change topic configuration\nbin/kafka-topics.sh --alter \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --config retention.ms=1209600000\n\n# Add configuration\nbin/kafka-topics.sh --alter \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --config add.cleanup.policy=compact\n\n# Remove configuration\nbin/kafka-topics.sh --alter \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --config delete.retention.ms\n\n# Change retention size\nbin/kafka-topics.sh --alter \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --config retention.bytes=10737418240'
        },
        {
          command: 'Deleting Topics',
          description: 'Remove topics from Kafka cluster',
          usage: 'kafka-topics.sh --delete command',
          example: '# Delete a topic\nbin/kafka-topics.sh --delete \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic\n\n# Delete multiple topics\nbin/kafka-topics.sh --delete \\\n  --bootstrap-server localhost:9092 \\\n  --topic topic1 \\\n  --topic topic2 \\\n  --topic topic3\n\n# Delete topics matching pattern\nfor topic in $(bin/kafka-topics.sh --list --bootstrap-server localhost:9092 | grep "test-"); do\n  bin/kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic $topic\ndone\n\n# Note: delete.topic.enable=true must be set in server.properties\n# Topics are marked for deletion and actually removed after a delay\n\n# Verify deletion\nbin/kafka-topics.sh --list --bootstrap-server localhost:9092'
        },
        {
          command: 'Topic Configurations',
          description: 'Common topic configuration parameters',
          usage: 'Understanding topic settings',
          example: '# Common topic configurations\n\n# Retention settings\nretention.ms=604800000        # 7 days in milliseconds\nretention.bytes=1073741824     # 1GB\n\n# Cleanup policies\ncleanup.policy=delete         # Delete old segments\ncleanup.policy=compact        # Compaction\ncleanup.policy=compact,delete # Both\n\n# Segment settings\nsegment.ms=86400000           # 1 day segment size\nsegment.bytes=1073741824      # 1GB segment size\n\n# Compression\ncompression.type=producer     # Use producer compression\ncompression.type=gzip         # Force gzip\ncompression.type=snappy       # Force snappy\ncompression.type=lz4          # Force lz4\ncompression.type=zstd         # Force zstd\n\n# Other important configs\nmax.message.bytes=1048576     # 1MB max message size\nmin.insync.replicas=2         # Minimum ISR for acks=all\nunclean.leader.election.enable=false\n\n# View all configurations\nbin/kafka-configs.sh --bootstrap-server localhost:9092 \\\n  --entity-type topics --entity-name my-topic --describe'
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Producer Configuration',
      commands: [
        {
          command: 'Basic Producer Properties',
          description: 'Essential producer configuration settings',
          usage: 'producer.properties file',
          example: '# producer.properties\n\n# Required\nbootstrap.servers=localhost:9092\n\n# Reliability\nacks=all\nretries=2147483647\nmax.in.flight.requests.per.connection=5\nenable.idempotence=true\n\n# Performance\nlinger.ms=5\nbatch.size=16384\ncompression.type=snappy\n\n# Memory\nbuffer.memory=33554432\n\n# Timeouts\nrequest.timeout.ms=30000\ndelivery.timeout.ms=120000\n\n# Serialization\nkey.serializer=org.apache.kafka.common.serialization.StringSerializer\nvalue.serializer=org.apache.kafka.common.serialization.StringSerializer\n\n# Use with console producer\nbin/kafka-console-producer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --producer.config producer.properties'
        },
        {
          command: 'Advanced Producer Settings',
          description: 'Advanced producer configurations for performance',
          usage: 'Fine-tuning producer behavior',
          example: '# Advanced producer properties\n\n# Partitioning\npartitioner.class=org.apache.kafka.clients.producer.RoundRobinPartitioner\n\n# Compression settings\ncompression.type=snappy\ncompression.level=5\n\n# Buffer management\nbuffer.memory=67108864\nmax.block.ms=60000\n\n# Batching\nbatch.size=32768\nlinger.ms=10\n\n# Reliability settings\nacks=all\nretries=2147483647\nretry.backoff.ms=100\n\n# Performance tuning\nmax.in.flight.requests.per.connection=1\nenable.idempotence=true\n\n# Transaction settings\ntransactional.id=my-unique-id\ntransaction.timeout.ms=60000\n\n# Security (SSL)\nsecurity.protocol=SSL\nssl.truststore.location=/path/to/truststore.jks\nssl.truststore.password=password\nssl.keystore.location=/path/to/keystore.jks\nssl.keystore.password=password'
        },
        {
          command: 'Producer Performance Testing',
          description: 'Test producer throughput and performance',
          usage: 'kafka-producer-perf-test.sh tool',
          example: '# Basic performance test\nbin/kafka-producer-perf-test.sh \\\n  --topic my-topic \\\n  --num-records 100000 \\\n  --record-size 1024 \\\n  --throughput 10000 \\\n  --producer-props bootstrap.servers=localhost:9092\n\n# Performance test with compression\nbin/kafka-producer-perf-test.sh \\\n  --topic my-topic \\\n  --num-records 1000000 \\\n  --record-size 2048 \\\n  --throughput 50000 \\\n  --producer-props bootstrap.servers=localhost:9092,compression.type=snappy\n\n# Test with acks=all\nbin/kafka-producer-perf-test.sh \\\n  --topic my-topic \\\n  --num-records 50000 \\\n  --record-size 1024 \\\n  --throughput 5000 \\\n  --producer-props bootstrap.servers=localhost:9092,acks=all\n\n# Print detailed metrics\nbin/kafka-producer-perf-test.sh \\\n  --topic my-topic \\\n  --num-records 100000 \\\n  --record-size 1024 \\\n  --throughput 10000 \\\n  --producer-props bootstrap.servers=localhost:9092 \\\n  --print-metrics'
        },
      ],
    },
    {
      title: 'Consumer Configuration',
      commands: [
        {
          command: 'Basic Consumer Properties',
          description: 'Essential consumer configuration settings',
          usage: 'consumer.properties file',
          example: '# consumer.properties\n\n# Required\nbootstrap.servers=localhost:9092\ngroup.id=my-consumer-group\n\n# Offset management\nauto.offset.reset=earliest\nenable.auto.commit=false\n\n# Performance\nfetch.min.bytes=1\nfetch.max.wait.ms=500\nmax.partition.fetch.bytes=1048576\n\n# Session management\nheartbeat.interval.ms=3000\nsession.timeout.ms=10000\n\n# Threading\nmax.poll.records=500\nmax.poll.interval.ms=300000\n\n# Deserialization\nkey.deserializer=org.apache.kafka.common.serialization.StringDeserializer\nvalue.deserializer=org.apache.kafka.common.serialization.StringDeserializer\n\n# Use with console consumer\nbin/kafka-console-consumer.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic \\\n  --consumer.config consumer.properties'
        },
        {
          command: 'Consumer Offset Management',
          description: 'Managing consumer offsets and positions',
          usage: 'Offset commit and reset strategies',
          example: '# View consumer group offsets\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-consumer-group \\\n  --describe\n\n# Reset consumer group offsets\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-consumer-group \\\n  --reset-offsets \\\n  --to-earliest \\\n  --topic my-topic \\\n  --execute\n\n# Reset to specific timestamp\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-consumer-group \\\n  --reset-offsets \\\n  --to-timestamp 1609459200000 \\\n  --topic my-topic \\\n  --execute\n\n# Shift offsets\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-consumer-group \\\n  --reset-offsets \\\n  --shift-by -100 \\\n  --topic my-topic \\\n  --execute\n\n# Reset to specific offset\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-consumer-group \\\n  --reset-offsets \\\n  --to-offset 100 \\\n  --topic my-topic \\\n  --execute'
        },
        {
          command: 'Advanced Consumer Settings',
          description: 'Advanced consumer configurations',
          usage: 'Fine-tuning consumer performance',
          example: '# Advanced consumer properties\n\n# Performance tuning\nfetch.min.bytes=1024\nfetch.max.wait.ms=500\nmax.partition.fetch.bytes=10485760\n\n# Offset management\nenable.auto.commit=false\nauto.offset.reset=latest\nauto.commit.interval.ms=5000\n\n# Session management\nheartbeat.interval.ms=3000\nsession.timeout.ms=30000\nmax.poll.interval.ms=300000\n\n# Threading\nmax.poll.records=1000\n\n# Network settings\nconnections.max.idle.ms=540000\nrequest.timeout.ms=30000\n\n# Isolation level (for transactions)\nisolation.level=read_committed\n\n# Security (SSL)\nsecurity.protocol=SSL\nssl.truststore.location=/path/to/truststore.jks\nssl.truststore.password=password\nssl.keystore.location=/path/to/keystore.jks\nssl.keystore.password=password\n\n# Schema Registry (Avro)\nschema.registry.url=http://localhost:8081\nvalue.deserializer=io.confluent.kafka.serializers.KafkaAvroDeserializer'
        },
      ],
    },
    {
      title: 'Cluster Management',
      commands: [
        {
          command: 'Broker Configuration',
          description: 'Essential broker configuration settings',
          usage: 'server.properties file',
          example: '# server.properties\n\n# Broker identity\nbroker.id=1\n\n# Network settings\nlisteners=PLAINTEXT://:9092\nadvertised.listeners=PLAINTEXT://localhost:9092\n\n# Log settings\nlog.dirs=/var/kafka-logs\nnum.network.threads=3\nnum.io.threads=8\nsocket.send.buffer.bytes=102400\nsocket.receive.buffer.bytes=102400\nsocket.request.max.bytes=104857600\n\n# Partition settings\nnum.partitions=1\nnum.recovery.threads.per.data.dir=1\n\n# Log retention\nlog.retention.hours=168\nlog.segment.bytes=1073741824\nlog.retention.check.interval.ms=300000\n\n# ZooKeeper connection\nzookeeper.connect=localhost:2181\n\n# Performance\nlog.flush.interval.messages=10000\nlog.flush.interval.ms=1000\n\n# Delete topic enable\ndelete.topic.enable=true\n\n# Auto leader balancing\nauto.leader.rebalance.enable=true'
        },
        {
          command: 'Cluster Monitoring',
          description: 'Monitor Kafka cluster health and performance',
          usage: 'Kafka monitoring tools and metrics',
          example: '# Check cluster status\nbin/kafka-broker-api-versions.sh \\\n  --bootstrap-server localhost:9092\n\n# List consumer groups\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --list\n\n# Describe consumer group details\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-group \\\n  --describe\n\n# Check topic partition distribution\nbin/kafka-topics.sh --describe \\\n  --bootstrap-server localhost:9092 \\\n  --topic my-topic\n\n# Monitor log size\ndu -sh /var/kafka-logs/*\n\n# Check broker logs\ntail -f /var/kafka-logs/server.log\n\n# JMX monitoring\nexport JMX_PORT=9999\nbin/kafka-server-start.sh -daemon config/server.properties\n\n# Connect with JConsole\njconsole localhost:9999'
        },
        {
          command: 'Partition Management',
          description: 'Manage topic partitions and leadership',
          usage: 'Partition reassignment and leadership',
          example: '# Create partition reassignment plan\nbin/kafka-reassign-partitions.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topics-to-move-json-file topics.json \\\n  --broker-list "1,2,3" \\\n  --generate\n\n# topics.json\n{\n  "topics": [\n    {\n      "topic": "my-topic"\n    }\n  ],\n  "version": 1\n}\n\n# Execute reassignment\nbin/kafka-reassign-partitions.sh \\\n  --bootstrap-server localhost:9092 \\\n  --reassignment-json-file reassignment.json \\\n  --execute\n\n# Verify reassignment\nbin/kafka-reassign-partitions.sh \\\n  --bootstrap-server localhost:9092 \\\n  --reassignment-json-file reassignment.json \\\n  --verify\n\n# Preferred leader election\nbin/kafka-preferred-replica-election.sh \\\n  --bootstrap-server localhost:9092 \\\n  --all-topic-partitions'
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Security Configuration',
      commands: [
        {
          command: 'SSL/TLS Encryption',
          description: 'Configure SSL encryption for Kafka',
          usage: 'SSL certificates and encryption settings',
          example: '# Generate SSL certificates\nkeytool -keystore kafka.server.keystore.jks -alias localhost -validity 365 -genkey -keyalg RSA\n\n# Create CA certificate\nopenssl req -new -x509 -keyout ca-key -out ca-cert -days 365\n\n# Sign server certificate\nopenssl req -new -key server-key -out server-cert\nopenssl x509 -req -CA ca-cert -CAkey ca-key -in server-cert -out server-signed -days 365 -CAcreateserial\n\n# Server SSL configuration\nlisteners=SSL://:9092\nsecurity.inter.broker.protocol=SSL\nssl.keystore.location=/path/to/kafka.server.keystore.jks\nssl.keystore.password=password\nssl.key.password=password\nssl.truststore.location=/path/to/kafka.server.truststore.jks\nssl.truststore.password=password\n\n# Client SSL configuration\nsecurity.protocol=SSL\nssl.truststore.location=/path/to/kafka.client.truststore.jks\nssl.truststore.password=password\nssl.keystore.location=/path/to/kafka.client.keystore.jks\nssl.keystore.password=password'
        },
        {
          command: 'SASL Authentication',
          description: 'Configure SASL authentication mechanisms',
          usage: 'SASL PLAIN, SCRAM, and GSSAPI',
          example: '# Enable SASL in server.properties\nlisteners=SASL_PLAINTEXT://localhost:9092\nsecurity.inter.broker.protocol=SASL_PLAINTEXT\nsasl.mechanism.inter.broker.protocol=PLAIN\nsasl.enabled.mechanisms=PLAIN,SCRAM-SHA-256,SCRAM-SHA-512\n\n# Configure JAAS for SASL\n# Create kafka_server_jaas.conf\nKafkaServer {\n   org.apache.kafka.common.security.plain.PlainLoginModule required\n   username="admin"\n   password="admin-secret";\n};\n\n# Set JAAS configuration\nexport KAFKA_OPTS="-Djava.security.auth.login.config=/path/to/kafka_server_jaas.conf"\n\n# SASL PLAIN client configuration\nsecurity.protocol=SASL_PLAINTEXT\nsasl.mechanism=PLAIN\nsasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required \\\n   username="user" \\\n   password="password";\n\n# SCRAM-SHA-256\n# Create SCRAM credentials\nbin/kafka-configs.sh --bootstrap-server localhost:9092 \\\n  --alter --add-config \'SCRAM-SHA-256=[password=secret]\' \\\n  --entity-type users --entity-name user1'
        },
        {
          command: 'Authorization (ACLs)',
          description: 'Configure access control lists',
          usage: 'Kafka ACL management',
          example: '# Enable ACLs in server.properties\nauthorizer.class.name=kafka.security.authorizer.AclAuthorizer\nsuper.users=User:admin\n\n# Create ACL for producer\nbin/kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 \\\n  --add --allow-principal User:producer \\\n  --operation Write --topic test-topic\n\n# Create ACL for consumer\nbin/kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 \\\n  --add --allow-principal User:consumer \\\n  --operation Read --topic test-topic \\\n  --allow-principal User:consumer \\\n  --operation Describe --topic test-topic \\\n  --allow-principal User:consumer --operation Read --group test-group\n\n# List ACLs\nbin/kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 \\\n  --list --topic test-topic\n\n# Remove ACL\nbin/kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181 \\\n  --remove --allow-principal User:producer \\\n  --operation Write --topic test-topic'
        },
      ],
    },
    {
      title: 'Kafka Streams',
      commands: [
        {
          command: 'Kafka Streams Basics',
          description: 'Introduction to Kafka Streams API',
          usage: 'Stream processing applications',
          example: '# Basic Kafka Streams application\nimport org.apache.kafka.streams.*;\nimport org.apache.kafka.streams.kstream.*;\n\nProperties props = new Properties();\nprops.put(StreamsConfig.APPLICATION_ID_CONFIG, "my-stream-app");\nprops.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");\nprops.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());\nprops.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());\n\nStreamsBuilder builder = new StreamsBuilder();\n\nKStream<String, String> source = builder.stream("input-topic");\n\nKStream<String, String> processed = source\n    .filter((key, value) -> value.contains("important"))\n    .mapValues(value -> value.toUpperCase())\n    .to("output-topic");\n\nKafkaStreams streams = new KafkaStreams(builder.build(), props);\nstreams.start();'
        },
        {
          command: 'Stream Processing Operations',
          description: 'Common stream processing operations',
          usage: 'Transformations and aggregations',
          example: '# Stream operations\n\n# Filter messages\nKStream<String, String> filtered = source\n    .filter((key, value) -> value.length() > 10);\n\n# Map values\nKStream<String, String> mapped = source\n    .mapValues(value -> value.toUpperCase());\n\n# Flat map values\nKStream<String, String> flatMapped = source\n    .flatMapValues(value -> Arrays.asList(value.split(" ")));\n\n# Group and aggregate\nKTable<String, Long> wordCounts = source\n    .flatMapValues(value -> Arrays.asList(value.toLowerCase().split(" ")))\n    .groupBy((key, word) -> word)\n    .count();\n\n# Windowed aggregation\nKTable<Windowed<String>, Long> windowedCounts = source\n    .groupBy((key, value) -> value)\n    .windowedBy(TimeWindows.of(Duration.ofMinutes(5)))\n    .count();\n\n# Join streams\nKStream<String, String> joined = leftStream.join(\n    rightStream,\n    (leftValue, rightValue) -> leftValue + "-" + rightValue,\n    JoinWindows.of(Duration.ofMinutes(1))\n);'
        },
        {
          command: 'Streams Configuration',
          description: 'Kafka Streams configuration settings',
          usage: 'Performance and reliability settings',
          example: '# Streams configuration\nProperties props = new Properties();\n\n# Application identification\nprops.put(StreamsConfig.APPLICATION_ID_CONFIG, "my-stream-app");\nprops.put(StreamsConfig.CLIENT_ID_CONFIG, "my-stream-client");\n\n# Bootstrap servers\nprops.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");\n\n# Serialization\nprops.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());\nprops.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());\n\n# State management\nprops.put(StreamsConfig.STATE_DIR_CONFIG, "/tmp/kafka-streams");\nprops.put(StreamsConfig.STATE_CLEANUP_DELAY_MS_CONFIG, 60000);\n\n# Performance tuning\nprops.put(StreamsConfig.NUM_STREAM_THREADS_CONFIG, 4);\nprops.put(StreamsConfig.NUM_STANDBY_REPLICAS_CONFIG, 1);\nprops.put(StreamsConfig.PROCESSING_GUARANTEE_CONFIG, StreamsConfig.EXACTLY_ONCE);\n\n# Commit settings\nprops.put(StreamsConfig.COMMIT_INTERVAL_MS_CONFIG, 1000);\nprops.put(StreamsConfig.AUTO_OFFSET_RESET_CONFIG, "latest");\n\n# Cache settings\nprops.put(StreamsConfig.CACHE_MAX_BYTES_BUFFERING_CONFIG, 10485760);\n\n# Replication\nprops.put(StreamsConfig.REPLICATION_FACTOR_CONFIG, 3);'
        },
      ],
    },
    {
      title: 'Schema Registry',
      commands: [
        {
          command: 'Schema Registry Setup',
          description: 'Install and configure Confluent Schema Registry',
          usage: 'Avro schema management',
          example: '# Start Schema Registry\n# Using Confluent Platform\nschema-registry-start /etc/schema-registry/schema-registry.properties\n\n# Docker\n confluentinc/cp-schema-registry:latest\n\n# Configuration (schema-registry.properties)\nlisteners=http://0.0.0.0:8081\nkafkastore.bootstrap.servers=PLAINTEXT://localhost:9092\nkafkastore.topic=_schemas\n\n# Register schema\ncurl -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \\\n  --data \'{"schema": "{\\"type\\": \\"record\\", \\"name\\": \\"User\\", \\"fields\\": [{\\"name\\": \\"name\\", \\"type\\": \\"string\\"}, {\\"name\\": \\"age\\", \\"type\\": \\"int\\"}]}"}\' \\\n  http://localhost:8081/subjects/users-value/versions\n\n# Get schema\ncurl -X GET http://localhost:8081/subjects/users-value/versions/latest\n\n# List all schemas\ncurl -X GET http://localhost:8081/subjects'
        },
        {
          command: 'Avro Producer/Consumer',
          description: 'Produce and consume Avro messages',
          usage: 'Schema Registry integration',
          example: '# Avro producer properties\nbootstrap.servers=localhost:9092\nschema.registry.url=http://localhost:8081\nkey.serializer=org.apache.kafka.common.serialization.StringSerializer\nvalue.serializer=io.confluent.kafka.serializers.KafkaAvroSerializer\n\n# Avro consumer properties\nbootstrap.servers=localhost:9092\nschema.registry.url=http://localhost:8081\nkey.deserializer=org.apache.kafka.common.serialization.StringDeserializer\nvalue.deserializer=io.confluent.kafka.serializers.KafkaAvroDeserializer\nspecific.avro.reader=true\n\n# Java Avro producer\nProperties props = new Properties();\nprops.put("bootstrap.servers", "localhost:9092");\nprops.put("schema.registry.url", "http://localhost:8081");\nprops.put("key.serializer", StringSerializer.class.getName());\nprops.put("value.serializer", KafkaAvroSerializer.class.getName());\n\nKafkaProducer<String, User> producer = new KafkaProducer<>(props);\nUser user = User.newBuilder().setName("John").setAge(30).build();\nProducerRecord<String, User> record = new ProducerRecord<>("users", user.name, user);\nproducer.send(record);'
        },
        {
          command: 'Schema Evolution',
          description: 'Manage schema evolution and compatibility',
          usage: 'Backward and forward compatibility',
          example: '# Schema compatibility modes\n# NONE: No compatibility checking\n# BACKWARD: Consumers can read old data with new schema\n# FORWARD: Consumers can read new data with old schema\n# FULL: Both backward and forward compatible\n# BACKWARD_TRANSITIVE: Backward compatible across all versions\n# FORWARD_TRANSITIVE: Forward compatible across all versions\n# FULL_TRANSITIVE: Fully compatible across all versions\n\n# Set compatibility level\ncurl -X PUT -H "Content-Type: application/vnd.schemaregistry.v1+json" \\\n  --data \'"BACKWARD"\' \\\n  http://localhost:8081/config\n\n# Check compatibility\ncurl -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \\\n  --data \'{"schema": "{\\"type\\": \\"record\\", \\"name\\": \\"User\\", \\"fields\\": [{\\"name\\": \\"name\\", \\"type\\": \\"string\\"}, {\\"name\\": \\"age\\", \\"type\\": \\"int\\"}, {\\"name\\": \\"email\\", \\"type\\": \\"string\\", \\"default\\": \\"\\"}]}"}\' \\\n  http://localhost:8081/compatibility/subjects/users-value/versions/latest\n\n# Evolution rules:\n# BACKWARD: Can add fields with defaults, can remove fields\n# FORWARD: Can add fields without defaults, can remove fields with defaults\n# FULL: Can add optional fields, cannot remove required fields'
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'Broker Performance Tuning',
          description: 'Optimize broker performance for high throughput',
          usage: 'Memory, I/O, and network settings',
          example: '# JVM tuning\nexport KAFKA_HEAP_OPTS="-Xmx4G -Xms4G"\nexport KAFKA_JVM_PERFORMANCE_OPTS="-server -XX:+UseG1GC -XX:MaxGCPauseMillis=20 -XX:InitiatingHeapOccupancyPercent=35"\n\n# Server performance settings\nnum.network.threads=8\nnum.io.threads=16\nsocket.send.buffer.bytes=102400\nsocket.receive.buffer.bytes=102400\nsocket.request.max.bytes=104857600\n\n# Log I/O tuning\nnum.recovery.threads.per.data.dir=8\nlog.flush.interval.messages=10000\nlog.flush.interval.ms=1000\n\n# Performance critical\nlog.segment.bytes=1073741824\nlog.retention.check.interval.ms=300000\n\n# Memory management\nlog.cleaner.enable=true\nlog.cleaner.dedupe.buffer.size=134217728\nlog.cleaner.io.max.bytes.per.second=1.7976931348623157E308\n\n# Network settings\nconnections.max.idle.ms=600000\nmax.connections.per.ip=2147483647\nmax.connections.per.ip.overrides=192.168.1.100:10'
        },
        {
          command: 'Producer Performance Tuning',
          description: 'Optimize producer for maximum throughput',
          usage: 'Batching, compression, and reliability',
          example: '# High throughput producer\nacks=1\nretries=0\nlinger.ms=5\nbatch.size=65536\ncompression.type=lz4\nbuffer.memory=67108864\nmax.in.flight.requests.per.connection=5\n\n# Reliable producer\nacks=all\nretries=2147483647\nmax.in.flight.requests.per.connection=1\nenable.idempotence=true\nlinger.ms=10\nbatch.size=32768\ncompression.type=snappy\n\n# Low latency producer\nacks=1\nlinger.ms=0\nbatch.size=0\ncompression.type=none\nbuffer.memory=16384\n\n# Performance testing\nbin/kafka-producer-perf-test.sh \\\n  --topic test-topic \\\n  --num-records 1000000 \\\n  --record-size 1024 \\\n  --throughput 100000 \\\n  --producer-props bootstrap.servers=localhost:9092,acks=1,compression.type=lz4'
        },
        {
          command: 'Consumer Performance Tuning',
          description: 'Optimize consumer for high throughput',
          usage: 'Fetching, polling, and processing',
          example: '# High throughput consumer\nfetch.min.bytes=50000\nfetch.max.wait.ms=500\nmax.partition.fetch.bytes=10485760\nmax.poll.records=1000\n\n# Low latency consumer\nfetch.min.bytes=1\nfetch.max.wait.ms=0\nmax.partition.fetch.bytes=1048576\nmax.poll.records=100\n\n# Memory efficient consumer\nfetch.min.bytes=1\nfetch.max.wait.ms=100\nmax.partition.fetch.bytes=524288\nmax.poll.records=50\n\n# Multi-threaded consumer\n# Increase fetch size for parallel processing\nfetch.min.bytes=1024\nfetch.max.wait.ms=200\nmax.partition.fetch.bytes=1048576\nmax.poll.records=500\n\n# Consumer performance test\n# Time consumer processing\nlong startTime = System.currentTimeMillis();\nwhile (true) {\n    ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));\n    // Process records\n    long endTime = System.currentTimeMillis();\n    System.out.println("Processed " + records.count() + " records in " + (endTime - startTime) + " ms");\n    startTime = endTime;\n}'
        },
      ],
    },
    {
      title: 'Monitoring and Operations',
      commands: [
        {
          command: 'JMX Monitoring',
          description: 'Monitor Kafka using JMX metrics',
          usage: 'JConsole, Prometheus, and Grafana',
          example: '# Enable JMX\nexport JMX_PORT=9999\nexport KAFKA_JMX_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false"\n\n# Start Kafka with JMX\nbin/kafka-server-start.sh -daemon config/server.properties\n\n# Connect with JConsole\njconsole localhost:9999\n\n# Key JMX metrics\n# kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec\n# kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec\n# kafka.server:type=BrokerTopicMetrics,name=BytesOutPerSec\n# kafka.controller:type=KafkaController,name=ActiveControllerCount\n# kafka.log:type=LogFlushStats,name=LogFlushRateAndTimeMs\n\n# Prometheus JMX exporter\njava -jar kafka-jmx-exporter.jar 9999 :8080 config.yml\n\n# config.yml\nrules:\n- pattern: kafka.server<type=BrokerTopicMetrics, name=MessagesInPerSec><>Count\n  name: kafka_server_brokertopicmetrics_messagesinpersec_count\n- pattern: kafka.server<type=BrokerTopicMetrics, name=BytesInPerSec><>Count\n  name: kafka_server_brokertopicmetrics_bytesinpersec_count'
        },
        {
          command: 'Kafka Manager Tools',
          description: 'Web UI tools for Kafka management',
          usage: 'Kafka Manager, Akhq, and UI tools',
          example: '# Kafka Manager (CMAK)\n# Download and build\ngit clone https://github.com/yahoo/CMAK.git\ncd CMAK\n./sbt clean dist\n\n# Configuration\nkafka-manager.zkhosts="localhost:2181"\nkafka-manager.zkhosts="localhost:2181"\n\n# Start\nbin/kafka-manager -Dconfig.file=conf/application.conf\n\n# Akhq (Kafka UI)\n# Docker Compose\nversion: \'3.8\'\nservices:\n  akhq:\n    image: tchiotludo/akhq\n    environment:\n      AKHQ_CONFIGURATION_CONNECTIONS_KAFKA_DOCKER_BOOTSTRAPSERVERS: "kafka:9092"\n      AKHQ_CONFIGURATION_CONNECTIONS_KAFKA_DOCKER_SCHEMAREGISTRY: "http://schema-registry:8081"\n    ports:\n      - "8080:8080"\n    depends_on:\n      - kafka\n      - schema-registry\n\n# Kafka UI\n# Docker\ndocker run -p 8080:8080 \\\n  -e KAFKA_CLUSTERS_0_NAME=local \\\n  -e KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=kafka:9092 \\\n  provectuslabs/kafka-ui'
        },
        {
          command: 'Troubleshooting Common Issues',
          description: 'Diagnose and fix common Kafka problems',
          usage: 'Log analysis and debugging',
          example: '# Common issues and solutions\n\n# Broker not starting\n# Check ZooKeeper connection\necho "ls /brokers/ids" | zookeeper-shell.sh localhost:2181\n\n# Check port conflicts\nnetstat -an | grep 9092\n\n# Consumer lag detection\nbin/kafka-consumer-groups.sh \\\n  --bootstrap-server localhost:9092 \\\n  --group my-group \\\n  --describe\n\n# Lag calculation\n# CURRENT-OFFSET - LOG-END-OFFSET = LAG\n\n# Under-replicated partitions\nbin/kafka-topics.sh --describe \\\n  --bootstrap-server localhost:9092 \\\n  --under-replicated-partitions\n\n# Broker logs\ntail -f /var/kafka-logs/server.log | grep ERROR\n\n# Controller logs\ngrep "Controller" /var/kafka-logs/server.log\n\n# Network issues\n# Check broker connectivity\ntelnet broker1 9092\ntelnet broker2 9092\n\n# Performance issues\n# Check disk usage\ndf -h /var/kafka-logs\n\n# Check memory usage\njstat -gc -t $(jps | grep Kafka | cut -d" " -f1) 5s\n\n# Garbage collection\njstat -gcutil $(jps | grep Kafka | cut -d" " -f1) 5s'
        },
      ],
    },
    {
      title: 'KRaft Mode (Kafka Raft)',
      commands: [
        {
          command: 'KRaft Overview',
          description: 'Understanding Kafka without ZooKeeper',
          usage: 'Kafka Raft metadata mode',
          example: '# KRaft advantages:\n# - No external ZooKeeper dependency\n# - Simplified deployment\n# - Faster controller failover\n# - Better scalability\n# - Reduced operational complexity\n\n# KRaft components:\n# - Controller quorum (3, 5, or 7 nodes)\n# - Broker nodes\n# - Metadata log stored in Kafka\n# - Quorum-based consensus\n\n# Migration considerations:\n# - Supports mixed mode during migration\n# - Requires Kafka 3.0+\n# - Some features not yet supported\n# - Different operational characteristics\n\n# When to use KRaft:\n# - New deployments\n# - Simplified operations\n# - Cloud-native deployments\n# - Reduced infrastructure'
        },
        {
          command: 'KRaft Cluster Setup',
          description: 'Deploy Kafka cluster in KRaft mode',
          usage: 'Configuration and deployment',
          example: '# Generate cluster ID\nbin/kafka-storage.sh random-uuid\n\n# Format log directories\nbin/kafka-storage.sh format -t <cluster-id> -c config/kraft/server.properties\n\n# KRaft server.properties\nprocess.roles=broker,controller\nnode.id=1\ncontroller.quorum.voters=1@localhost:9093,2@localhost:9094,3@localhost:9095\nlisteners=PLAINTEXT://:9092,CONTROLLER://:9093\ninter.broker.listener.name=PLAINTEXT\nadvertised.listeners=PLAINTEXT://localhost:9092\ncontroller.listener.names=CONTROLLER\nlistener.security.protocol.map=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT\nlog.dirs=/tmp/kraft-combined-logs\nnum.network.threads=3\nnum.io.threads=8\nsocket.send.buffer.bytes=102400\nsocket.receive.buffer.bytes=102400\nsocket.request.max.bytes=104857600\nnum.partitions=1\nnum.recovery.threads.per.data.dir=1\nnum.stripe.threads=1\nlog.retention.hours=168\nlog.segment.bytes=1073741824\nlog.retention.check.interval.ms=300000\n\n# Start KRaft cluster\nbin/kafka-server-start.sh config/kraft/server.properties'
        },
        {
          command: 'KRaft Operations',
          description: 'Managing KRaft clusters',
          usage: 'Controller and broker management',
          example: '# KRaft cluster metadata\nbin/kafka-metadata-quorum.sh \\\n  --bootstrap-server localhost:9092 \\\n  describe --status\n\n# List controllers\nbin/kafka-metadata-quorum.sh \\\n  --bootstrap-server localhost:9092 \\\n  describe --controllers\n\n# Cluster health check\nbin/kafka-metadata-quorum.sh \\\n  --bootstrap-server localhost:9092 \\\n  describe --replication\n\n# Controller failover\n# Controllers are automatically elected\n# Monitor with:\nbin/kafka-metadata-quorum.sh \\\n  --bootstrap-server localhost:9092 \\\n  describe --status\n\n# KRaft-specific configurations\n# Controller settings\ncontroller.quorum.voters=1@host1:9093,2@host2:9093,3@host3:9093\ncontroller.quorum.election.backoff.max.ms=1000\ncontroller.quorum.fetch.timeout.ms=2000\ncontroller.quorum.request.timeout.ms=3000\n\n# Broker settings\nnode.id=1\nprocess.roles=broker,controller\nnum.controller.threads=3\ncontroller.listener.names=CONTROLLER'
        },
      ],
    },
    {
      title: 'Kafka Connect',
      commands: [
        {
          command: 'Kafka Connect Basics',
          description: 'Introduction to Kafka Connect framework',
          usage: 'Connectors for data integration',
          example: '# Start Kafka Connect\n# Standalone mode\nbin/connect-standalone.sh config/connect-standalone.properties config/file-sink.properties\n\n# Distributed mode\nbin/connect-distributed.sh config/connect-distributed.properties\n\n# Connect configuration\nbootstrap.servers=localhost:9092\nrest.advertised.host.name=localhost\nrest.port=8083\ngroup.id=connect-cluster\nkey.converter=org.apache.kafka.connect.json.JsonConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\nkey.converter.schemas.enable=false\nvalue.converter.schemas.enable=false\ninternal.key.converter=org.apache.kafka.connect.json.JsonConverter\ninternal.value.converter=org.apache.kafka.connect.json.JsonConverter\ninternal.key.converter.schemas.enable=false\ninternal.value.converter.schemas.enable=false\noffset.storage.topic=connect-offsets\noffset.storage.replication.factor=1\nconfig.storage.topic=connect-configs\nconfig.storage.replication.factor=1\nstatus.storage.topic=connect-status\nstatus.storage.replication.factor=1'
        },
        {
          command: 'Source Connectors',
          description: 'Configure source connectors',
          usage: 'Import data into Kafka',
          example: '# File source connector\n{\n  "name": "local-file-source",\n  "config": {\n    "connector.class": "FileStreamSource",\n    "tasks.max": "1",\n    "file": "/tmp/test.txt",\n    "topic": "connect-test"\n  }\n}\n\n# JDBC source connector\n{\n  "name": "jdbc-source",\n  "config": {\n    "connector.class": "io.confluent.connect.jdbc.JdbcSourceConnector",\n    "tasks.max": "1",\n    "connection.url": "jdbc:mysql://localhost:3306/mydb",\n    "connection.user": "user",\n    "connection.password": "password",\n    "mode": "incrementing",\n    "incrementing.column.name": "id",\n    "topic.prefix": "mysql-",\n    "table.whitelist": "users,orders"\n  }\n}\n\n# Submit connector\ncurl -X POST -H "Content-Type: application/json" \\\n  --data \'@file-source.json\' \\\n  http://localhost:8083/connectors'
        },
        {
          command: 'Sink Connectors',
          description: 'Configure sink connectors',
          usage: 'Export data from Kafka',
          example: '# File sink connector\n{\n  "name": "local-file-sink",\n  "config": {\n    "connector.class": "FileStreamSink",\n    "tasks.max": "1",\n    "file": "/tmp/test.sink.txt",\n    "topics": "connect-test"\n  }\n}\n\n# Elasticsearch sink connector\n{\n  "name": "elastic-sink",\n  "config": {\n    "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",\n    "tasks.max": "1",\n    "topics": "logs,events",\n    "connection.url": "http://localhost:9200",\n    "type.name": "_doc",\n    "key.ignore": "true",\n    "schema.ignore": "true"\n  }\n}\n\n# JDBC sink connector\n{\n  "name": "jdbc-sink",\n  "config": {\n    "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector",\n    "tasks.max": "1",\n    "topics": "users",\n    "connection.url": "jdbc:mysql://localhost:3306/mydb",\n    "connection.user": "user",\n    "connection.password": "password",\n    "auto.create": "true",\n    "insert.mode": "upsert"\n  }\n}'
        },
      ],
    },
    {
      title: 'Testing and Development',
      commands: [
        {
          command: 'Kafka Testing Strategies',
          description: 'Testing Kafka applications',
          usage: 'Unit tests, integration tests, and end-to-end tests',
          example: '# Kafka Testcontainers (Java)\n@TestContainer\nstatic KafkaContainer kafka = new KafkaContainer(DockerImageName.parse("confluentinc/cp-kafka:latest"));\n\n@Test\npublic void testKafkaProducer() {\n    Map<String, Object> producerProps = new HashMap<>();\n    producerProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafka.getBootstrapServers());\n    producerProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\n    producerProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\n    \n    Producer<String, String> producer = new KafkaProducer<>(producerProps);\n    ProducerRecord<String, String> record = new ProducerRecord<>("test-topic", "key", "value");\n    \n    Future<RecordMetadata> future = producer.send(record);\n    RecordMetadata metadata = future.get();\n    \n    assertEquals("test-topic", metadata.topic());\n    assertEquals(0, metadata.partition());\n    assertTrue(metadata.offset() >= 0);\n}\n\n# Embedded Kafka for testing\n@EmbeddedKafka(partitions = 1, brokerProperties = {\n    "listeners=PLAINTEXT://localhost:9092",\n    "port=9092"\n})\npublic class KafkaConsumerTest {\n    \n    @Test\n    public void testConsumer() {\n        // Test consumer logic\n    }\n}'
        },
        {
          command: 'Mock Kafka for Testing',
          description: 'Mock Kafka components for unit testing',
          usage: 'Mock producers and consumers',
          example: '# Mock producer\nimport org.apache.kafka.clients.producer.MockProducer;\nimport org.apache.kafka.clients.producer.ProducerRecord;\n\nMockProducer<String, String> mockProducer = new MockProducer<>(true, new StringSerializer(), new StringSerializer());\n\n@Test\npublic void testMockProducer() {\n    ProducerRecord<String, String> record = new ProducerRecord<>("topic", "key", "value");\n    mockProducer.send(record);\n    \n    List<ProducerRecord<String, String>> history = mockProducer.history();\n    assertEquals(1, history.size());\n    assertEquals("topic", history.get(0).topic());\n    assertEquals("key", history.get(0).key());\n    assertEquals("value", history.get(0).value());\n}\n\n# Mock consumer\nimport org.apache.kafka.clients.consumer.MockConsumer;\nimport org.apache.kafka.clients.consumer.OffsetResetStrategy;\n\nMockConsumer<String, String> mockConsumer = new MockConsumer<>(OffsetResetStrategy.EARLIEST);\n\n@Test\npublic void testMockConsumer() {\n    mockConsumer.subscribe(Arrays.asList("topic"));\n    \n    // Add records to consumer\n    mockConsumer.rebalance(Arrays.asList(new TopicPartition("topic", 0)));\n    mockConsumer.addRecord(new ConsumerRecord<>("topic", 0, 0, "key", "value"));\n    \n    ConsumerRecords<String, String> records = mockConsumer.poll(Duration.ofMillis(100));\n    assertEquals(1, records.count());\n}'
        },
        {
          command: 'Performance Testing',
          description: 'Load testing Kafka clusters',
          usage: 'Benchmarking and stress testing',
          example: '# Producer performance test\nbin/kafka-producer-perf-test.sh \\\n  --topic test-topic \\\n  --num-records 1000000 \\\n  --record-size 1024 \\\n  --throughput 100000 \\\n  --producer-props bootstrap.servers=localhost:9092,acks=1,compression.type=lz4\n\n# Consumer performance test\nbin/kafka-consumer-perf-test.sh \\\n  --bootstrap-server localhost:9092 \\\n  --topic test-topic \\\n  --messages 1000000 \\\n  --threads 4\n\n# End-to-end latency test\nbin/kafka-run-class.sh org.apache.kafka.tools.EndToEndLatency \\\n  localhost:9092 test-topic 10000 1 1024\n\n# Custom performance test\n# Using Kafka VerifiableProducer\nbin/kafka-verifiable-producer.sh \\\n  --broker-list localhost:9092 \\\n  --topic test-topic \\\n  --max-messages 100000 \\\n  --throughput 1000\n\n# Using Kafka VerifiableConsumer\nbin/kafka-verifiable-consumer.sh \\\n  --broker-list localhost:9092 \\\n  --topic test-topic \\\n  --group-id test-group'
        },
      ],
    },
  ],
};
