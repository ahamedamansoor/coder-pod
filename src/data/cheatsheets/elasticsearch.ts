import { Database } from 'lucide-react';

export const elasticsearchCheatsheet = {
  id: 'elasticsearch',
  name: 'Elasticsearch',
  description: 'Master Elasticsearch from basics to expert operations (2024 Edition)',
  icon: Database,
  colorTheme: 'yellow' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Elasticsearch',
      commands: [
        {
          command: 'Elasticsearch Overview',
          description: 'Introduction to Elasticsearch concepts',
          usage: 'Understanding Elasticsearch fundamentals',
          example: `Elasticsearch Overview:
- Distributed, RESTful search and analytics engine
- Built on Apache Lucene for full-text search
- Near real-time search and analytics capabilities
- Scalable horizontal architecture with automatic sharding
- JSON document storage with schema flexibility
- Multi-tenancy support with multiple indices
- Built-in support for complex data types and geo data
- Real-time data processing and aggregation engine`,
        },
        {
          command: 'Core Concepts',
          description: 'Essential Elasticsearch terminology',
          usage: 'Understanding key concepts',
          example: `Core Concepts:
- Document: Basic unit of information stored in JSON format
- Index: Collection of documents with similar characteristics
- Shard: Split of an index across multiple nodes
- Replica: Copy of a shard for high availability
- Cluster: Collection of one or more nodes
- Node: Single server in a cluster
- Mapping: Schema definition for documents
- Field: Key-value pair in a document`,
        },
        {
          command: 'Architecture Benefits',
          description: 'Advantages of Elasticsearch architecture',
          usage: 'Why choose Elasticsearch',
          example: `Architecture Benefits:
- Distributed nature for horizontal scaling
- Near real-time search capabilities
- Multi-tenancy with multi-type support
- RESTful API for easy integration
- Built-in support for complex queries
- Automatic failover and data replication
- Schemaless JSON document storage`,
        },
        {
          command: 'Docker Single Node',
          description: 'Install Elasticsearch with Docker',
          usage: 'Quick Docker setup',
          example: `docker run -p 9200:9200 -p 9300:9300 \\
  -e "discovery.type=single-node" \\
  -e "xpack.security.enabled=false" \\
  docker.elastic.co/elasticsearch/elasticsearch:8.11.0`,
        },
        {
          command: 'Docker Compose Setup',
          description: 'Elasticsearch with Docker Compose',
          usage: 'Multi-container setup',
          example: `version: '3.8'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
    container_name: elasticsearch
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
      - "9300:9300"
    volumes:
      - es_data:/usr/share/elasticsearch/data

volumes:
  es_data:`,
        },
        {
          command: 'APT Installation',
          description: 'Install on Ubuntu/Debian',
          usage: 'Package manager installation',
          example: `wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
sudo apt update
sudo apt install elasticsearch`,
        },
        {
          command: 'YUM Installation',
          description: 'Install on CentOS/RHEL',
          usage: 'RPM package installation',
          example: `rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
echo "[elasticsearch-8.x]
name=Elasticsearch repository for 8.x packages
baseurl=https://artifacts.elastic.co/packages/8.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md" | sudo tee /etc/yum.repos.d/elasticsearch.repo
sudo yum install elasticsearch`,
        },
        {
          command: 'Homebrew Installation',
          description: 'Install on macOS',
          usage: 'macOS installation',
          example: `brew tap elastic/tap
brew install elastic/tap/elasticsearch-full`,
        },
        {
          command: 'Basic Configuration',
          description: 'Configure basic Elasticsearch settings',
          usage: 'elasticsearch.yml setup',
          example: `# Edit: /etc/elasticsearch/elasticsearch.yml
cluster.name: my-application
node.name: node-1
path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
network.host: 0.0.0.0
http.port: 9200
discovery.type: single-node`,
        },
        {
          command: 'Memory Configuration',
          description: 'Configure JVM memory settings',
          usage: 'Performance tuning',
          example: `# Edit: /etc/elasticsearch/jvm.options
-Xms1g
-Xmx1g`,
        },
        {
          command: 'Security Configuration',
          description: 'Enable security features',
          usage: 'Security setup',
          example: `xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true`,
        },
        {
          command: 'Production Settings',
          description: 'Production-ready configuration',
          usage: 'Production optimization',
          example: `bootstrap.memory_lock: true
action.auto_create_index: +*`,
        },
        {
          command: 'Start Service Linux',
          description: 'Start Elasticsearch on Linux',
          usage: 'Systemd service management',
          example: `sudo systemctl start elasticsearch
sudo systemctl enable elasticsearch`,
        },
        {
          command: 'Start Service macOS',
          description: 'Start Elasticsearch on macOS',
          usage: 'Homebrew service management',
          example: `brew services start elastic/tap/elasticsearch-full`,
        },
        {
          command: 'Stop Service Linux',
          description: 'Stop Elasticsearch on Linux',
          usage: 'Service management',
          example: `sudo systemctl stop elasticsearch`,
        },
        {
          command: 'Restart Service Linux',
          description: 'Restart Elasticsearch on Linux',
          usage: 'Service restart',
          example: `sudo systemctl restart elasticsearch`,
        },
        {
          command: 'Check Service Status',
          description: 'Verify Elasticsearch service status',
          usage: 'Service monitoring',
          example: `sudo systemctl status elasticsearch`,
        },
        {
          command: 'Stop Service macOS',
          description: 'Stop Elasticsearch on macOS',
          usage: 'macOS service management',
          example: `brew services stop elastic/tap/elasticsearch-full`,
        },
        {
          command: 'Cluster Health Check',
          description: 'Check cluster health status',
          usage: 'Health monitoring',
          example: `curl -X GET "localhost:9200/_cluster/health?pretty"`,
        },
        {
          command: 'Node Information',
          description: 'Get node details',
          usage: 'Node monitoring',
          example: `curl -X GET "localhost:9200/_nodes?pretty"`,
        },
        {
          command: 'Index List',
          description: 'List all indices',
          usage: 'Index enumeration',
          example: `curl -X GET "localhost:9200/_cat/indices?v"`,
        },
        {
          command: 'Cluster Settings',
          description: 'View cluster configuration',
          usage: 'Configuration viewing',
          example: `curl -X GET "localhost:9200/_cluster/settings?pretty"`,
        },
        {
          command: 'Verify Installation',
          description: 'Test Elasticsearch installation',
          usage: 'Installation verification',
          example: `curl -X GET "localhost:9200"`,
        },
      ],
    },
    {
      title: 'Index Management',
      commands: [
        {
          command: 'Create Index',
          description: 'Create a new index',
          usage: 'Index creation',
          example: `curl -X PUT "localhost:9200/my_index?pretty"`,
        },
        {
          command: 'Create Index with Settings',
          description: 'Create index with custom settings',
          usage: 'Advanced index creation',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 1
  }
}'`,
        },
        {
          command: 'Create Index with Mapping',
          description: 'Create index with field mapping',
          usage: 'Schema definition',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "title": { "type": "text" },
      "author": { "type": "keyword" },
      "published_date": { "type": "date" },
      "content": { "type": "text" }
    }
  }
}'`,
        },
        {
          command: 'Get Index Mapping',
          description: 'Retrieve index mapping',
          usage: 'Schema inspection',
          example: `curl -X GET "localhost:9200/my_index/_mapping?pretty"`,
        },
        {
          command: 'Get Index Settings',
          description: 'Retrieve index settings',
          usage: 'Configuration viewing',
          example: `curl -X GET "localhost:9200/my_index/_settings?pretty"`,
        },
        {
          command: 'Update Index Settings',
          description: 'Modify index settings',
          usage: 'Dynamic configuration',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "number_of_replicas": 2
  }
}'`,
        },
        {
          command: 'Delete Index',
          description: 'Remove an index',
          usage: 'Index deletion',
          example: `curl -X DELETE "localhost:9200/my_index?pretty"`,
        },
        {
          command: 'Delete Multiple Indices',
          description: 'Remove multiple indices',
          usage: 'Batch index deletion',
          example: `curl -X DELETE "localhost:9200/index1,index2,index3?pretty"`,
        },
        {
          command: 'Delete All Indices',
          description: 'Remove all indices',
          usage: 'Complete index cleanup',
          example: `curl -X DELETE "localhost:9200/_all?pretty"`,
        },
        {
          command: 'Index Exists',
          description: 'Check if index exists',
          usage: 'Index validation',
          example: `curl -X HEAD "localhost:9200/my_index"`,
        },
        {
          command: 'Open Index',
          description: 'Open closed index',
          usage: 'Index operations',
          example: `curl -X POST "localhost:9200/my_index/_open?pretty"`,
        },
        {
          command: 'Close Index',
          description: 'Close index to save resources',
          usage: 'Resource management',
          example: `curl -X POST "localhost:9200/my_index/_close?pretty"`,
        },
        {
          command: 'Freeze Index',
          description: 'Freeze index to minimize memory',
          usage: 'Memory optimization',
          example: `curl -X POST "localhost:9200/my_index/_freeze?pretty"`,
        },
        {
          command: 'Unfreeze Index',
          description: 'Unfreeze frozen index',
          usage: 'Restore index operations',
          example: `curl -X POST "localhost:9200/my_index/_unfreeze?pretty"`,
        },
        {
          command: 'Shrink Index',
          description: 'Reduce index shard count',
          usage: 'Index optimization',
          example: `curl -X POST "localhost:9200/my_index/_shrink/target_index?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "index.number_of_shards": 1
  }
}'`,
        },
        {
          command: 'Split Index',
          description: 'Increase index shard count',
          usage: 'Index scaling',
          example: `curl -X POST "localhost:9200/my_index/_split/target_index?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "index.number_of_shards": 5
  }
}'`,
        },
        {
          command: 'Clone Index',
          description: 'Create index copy',
          usage: 'Index duplication',
          example: `curl -X POST "localhost:9200/my_index/_clone/cloned_index?pretty"`,
        },
        {
          command: 'Rollover Index',
          description: 'Create new index when conditions met',
          usage: 'Time-based index management',
          example: `curl -X POST "localhost:9200/logs-000001/_rollover?pretty" -H 'Content-Type: application/json' -d'
{
  "conditions": {
    "max_age": "7d",
    "max_docs": 1000000
  }
}'`,
        },
      ],
    },
    {
      title: 'Document Operations',
      commands: [
        {
          command: 'Index Document',
          description: 'Add or replace document',
          usage: 'Document creation',
          example: `curl -X POST "localhost:9200/my_index/_doc?pretty" -H 'Content-Type: application/json' -d'
{
  "title": "Elasticsearch Guide",
  "author": "John Doe",
  "published_date": "2024-01-01",
  "content": "Learn Elasticsearch from scratch"
}'`,
        },
        {
          command: 'Index Document with ID',
          description: 'Add document with specific ID',
          usage: 'Controlled document creation',
          example: `curl -X PUT "localhost:9200/my_index/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
  "title": "Elasticsearch Guide",
  "author": "John Doe",
  "published_date": "2024-01-01"
}'`,
        },
        {
          command: 'Get Document',
          description: 'Retrieve document by ID',
          usage: 'Document retrieval',
          example: `curl -X GET "localhost:9200/my_index/_doc/1?pretty"`,
        },
        {
          command: 'Get Document Source',
          description: 'Get document source only',
          usage: 'Source data retrieval',
          example: `curl -X GET "localhost:9200/my_index/_doc/1/_source?pretty"`,
        },
        {
          command: 'Get Document Fields',
          description: 'Get specific document fields',
          usage: 'Selective field retrieval',
          example: `curl -X GET "localhost:9200/my_index/_doc/1?pretty&source_includes=title,author"`,
        },
        {
          command: 'Check Document Exists',
          description: 'Verify document existence',
          usage: 'Document validation',
          example: `curl -X HEAD "localhost:9200/my_index/_doc/1"`,
        },
        {
          command: 'Update Document',
          description: 'Modify existing document',
          usage: 'Document modification',
          example: `curl -X POST "localhost:9200/my_index/_doc/1/_update?pretty" -H 'Content-Type: application/json' -d'
{
  "doc": {
    "title": "Updated Elasticsearch Guide"
  }
}'`,
        },
        {
          command: 'Update with Script',
          description: 'Update document using script',
          usage: 'Scripted updates',
          example: `curl -X POST "localhost:9200/my_index/_doc/1/_update?pretty" -H 'Content-Type: application/json' -d'
{
  "script": {
    "source": "ctx._source.views += params.views",
    "params": {
      "views": 1
    }
  }
}'`,
        },
        {
          command: 'Upsert Document',
          description: 'Update or insert document',
          usage: 'Conditional document creation',
          example: `curl -X POST "localhost:9200/my_index/_doc/1/_update?pretty" -H 'Content-Type: application/json' -d'
{
  "script": {
    "source": "ctx._source.views += params.views",
    "params": {
      "views": 1
    }
  },
  "upsert": {
    "title": "New Document",
    "views": 1
  }
}'`,
        },
        {
          command: 'Delete Document',
          description: 'Remove document by ID',
          usage: 'Document deletion',
          example: `curl -X DELETE "localhost:9200/my_index/_doc/1?pretty"`,
        },
        {
          command: 'Delete by Query',
          description: 'Delete documents matching query',
          usage: 'Batch document deletion',
          example: `curl -X POST "localhost:9200/my_index/_delete_by_query?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "author": "John Doe"
    }
  }
}'`,
        },
        {
          command: 'Bulk Index Documents',
          description: 'Index multiple documents',
          usage: 'Bulk operations',
          example: `curl -X POST "localhost:9200/my_index/_bulk?pretty" -H 'Content-Type: application/json' -d'
{ "index": { "_id": "1" } }
{ "title": "Document 1", "author": "John" }
{ "index": { "_id": "2" } }
{ "title": "Document 2", "author": "Jane" }'`,
        },
        {
          command: 'Bulk Update Documents',
          description: 'Update multiple documents',
          usage: 'Bulk updates',
          example: `curl -X POST "localhost:9200/my_index/_bulk?pretty" -H 'Content-Type: application/json' -d'
{ "update": { "_id": "1" } }
{ "doc": { "title": "Updated Title 1" } }
{ "update": { "_id": "2" } }
{ "doc": { "title": "Updated Title 2" } }'`,
        },
        {
          command: 'Bulk Delete Documents',
          description: 'Delete multiple documents',
          usage: 'Bulk deletions',
          example: `curl -X POST "localhost:9200/my_index/_bulk?pretty" -H 'Content-Type: application/json' -d'
{ "delete": { "_id": "1" } }
{ "delete": { "_id": "2" } }'`,
        },
        {
          command: 'Multi Get Documents',
          description: 'Retrieve multiple documents',
          usage: 'Batch document retrieval',
          example: `curl -X GET "localhost:9200/_mget?pretty" -H 'Content-Type: application/json' -d'
{
  "docs": [
    {
      "_index": "my_index",
      "_id": "1"
    },
    {
      "_index": "my_index",
      "_id": "2"
    }
  ]
}'`,
        },
      ],
    },
    {
      title: 'Search Queries',
      commands: [
        {
          command: 'Match All Query',
          description: 'Search all documents',
          usage: 'Basic search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  }
}'`,
        },
        {
          command: 'Match Query',
          description: 'Full-text search',
          usage: 'Text search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "title": "elasticsearch guide"
    }
  }
}'`,
        },
        {
          command: 'Match Phrase Query',
          description: 'Exact phrase search',
          usage: 'Phrase matching',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_phrase": {
      "title": "elasticsearch guide"
    }
  }
}'`,
        },
        {
          command: 'Match Phrase Prefix Query',
          description: 'Phrase prefix search',
          usage: 'Autocomplete functionality',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_phrase_prefix": {
      "title": "elastic sea"
    }
  }
}'`,
        },
        {
          command: 'Multi Match Query',
          description: 'Search multiple fields',
          usage: 'Cross-field search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "multi_match": {
      "query": "elasticsearch",
      "fields": ["title", "content"]
    }
  }
}'`,
        },
        {
          command: 'Term Query',
          description: 'Exact term matching',
          usage: 'Keyword search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "term": {
      "author.keyword": "John Doe"
    }
  }
}'`,
        },
        {
          command: 'Terms Query',
          description: 'Multiple exact terms',
          usage: 'Multiple keyword search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "terms": {
      "author.keyword": ["John Doe", "Jane Smith"]
    }
  }
}'`,
        },
        {
          command: 'Range Query',
          description: 'Search within range',
          usage: 'Numeric/date range search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "range": {
      "published_date": {
        "gte": "2024-01-01",
        "lte": "2024-12-31"
      }
    }
  }
}'`,
        },
        {
          command: 'Exists Query',
          description: 'Find documents with field',
          usage: 'Field existence check',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "exists": {
      "field": "author"
    }
  }
}'`,
        },
        {
          command: 'Wildcard Query',
          description: 'Pattern matching with wildcards',
          usage: 'Flexible pattern search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "wildcard": {
      "title": "elastic*"
    }
  }
}'`,
        },
        {
          command: 'Regexp Query',
          description: 'Regular expression search',
          usage: 'Advanced pattern matching',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "regexp": {
      "title": "elastic.*search"
    }
  }
}'`,
        },
        {
          command: 'Fuzzy Query',
          description: 'Fuzzy matching for typos',
          usage: 'Approximate matching',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "fuzzy": {
      "title": {
        "value": "elastcsearch",
        "fuzziness": "AUTO"
      }
    }
  }
}'`,
        },
        {
          command: 'Bool Query - Must',
          description: 'AND condition in boolean query',
          usage: 'Required conditions',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "elasticsearch" } },
        { "match": { "content": "guide" } }
      ]
    }
  }
}'`,
        },
        {
          command: 'Bool Query - Should',
          description: 'OR condition in boolean query',
          usage: 'Optional conditions',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "should": [
        { "match": { "title": "elasticsearch" } },
        { "match": { "title": "search" } }
      ]
    }
  }
}'`,
        },
        {
          command: 'Bool Query - Must Not',
          description: 'NOT condition in boolean query',
          usage: 'Exclusion conditions',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "must_not": [
        { "match": { "author": "John Doe" } }
      ]
    }
  }
}'`,
        },
        {
          command: 'Bool Query - Filter',
          description: 'Filter context in boolean query',
          usage: 'Filtering conditions',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "filter": [
        { "term": { "status": "published" } }
      ]
    }
  }
}'`,
        },
        {
          command: 'Bool Query - Minimum Should Match',
          description: 'Minimum conditions to match',
          usage: 'Partial matching control',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "should": [
        { "match": { "title": "elasticsearch" } },
        { "match": { "content": "search" } },
        { "match": { "author": "John" } }
      ],
      "minimum_should_match": 2
    }
  }
}'`,
        },
        {
          command: 'Nested Query',
          description: 'Search nested objects',
          usage: 'Nested document search',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "nested": {
      "path": "comments",
      "query": {
        "match": {
          "comments.author": "John"
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Has Child Query',
          description: 'Search by child documents',
          usage: 'Parent-child relationships',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "has_child": {
      "type": "comment",
      "query": {
        "match": {
          "content": "great"
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Has Parent Query',
          description: 'Search by parent documents',
          usage: 'Child-parent relationships',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "has_parent": {
      "parent_type": "article",
      "query": {
        "match": {
          "title": "elasticsearch"
        }
      }
    }
  }
}'`,
        },
      ],
    },
    {
      title: 'Aggregations',
      commands: [
        {
          command: 'Terms Aggregation',
          description: 'Group by field values',
          usage: 'Categorical aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "authors": {
      "terms": {
        "field": "author.keyword"
      }
    }
  }
}'`,
        },
        {
          command: 'Date Histogram Aggregation',
          description: 'Group by date intervals',
          usage: 'Time-based aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "daily_posts": {
      "date_histogram": {
        "field": "published_date",
        "calendar_interval": "day"
      }
    }
  }
}'`,
        },
        {
          command: 'Histogram Aggregation',
          description: 'Group by numeric intervals',
          usage: 'Numeric aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "price_ranges": {
      "histogram": {
        "field": "price",
        "interval": 50
      }
    }
  }
}'`,
        },
        {
          command: 'Range Aggregation',
          description: 'Group by custom ranges',
          usage: 'Custom range aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "price_ranges": {
      "range": {
        "field": "price",
        "ranges": [
          { "to": 50, "key": "cheap" },
          { "from": 50, "to": 100, "key": "medium" },
          { "from": 100, "key": "expensive" }
        ]
      }
    }
  }
}'`,
        },
        {
          command: 'Stats Aggregation',
          description: 'Basic statistics',
          usage: 'Statistical analysis',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "price_stats": {
      "stats": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Extended Stats Aggregation',
          description: 'Extended statistics',
          usage: 'Advanced statistical analysis',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "price_stats": {
      "extended_stats": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Cardinality Aggregation',
          description: 'Count unique values',
          usage: 'Unique count aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "unique_authors": {
      "cardinality": {
        "field": "author.keyword"
      }
    }
  }
}'`,
        },
        {
          command: 'Percentiles Aggregation',
          description: 'Calculate percentiles',
          usage: 'Percentile analysis',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "price_percentiles": {
      "percentiles": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Average Aggregation',
          description: 'Calculate average value',
          usage: 'Mean calculation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "avg_price": {
      "avg": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Sum Aggregation',
          description: 'Calculate sum of values',
          usage: 'Sum calculation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "total_sales": {
      "sum": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Min Aggregation',
          description: 'Find minimum value',
          usage: 'Minimum calculation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "min_price": {
      "min": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Max Aggregation',
          description: 'Find maximum value',
          usage: 'Maximum calculation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "max_price": {
      "max": {
        "field": "price"
      }
    }
  }
}'`,
        },
        {
          command: 'Nested Aggregation',
          description: 'Aggregation within aggregation',
          usage: 'Multi-level aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "authors": {
      "terms": {
        "field": "author.keyword"
      },
      "aggs": {
        "avg_price": {
          "avg": {
            "field": "price"
          }
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Filter Aggregation',
          description: 'Aggregate filtered results',
          usage: 'Conditional aggregation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "published_books": {
      "filter": {
        "term": {
          "status.keyword": "published"
        }
      },
      "aggs": {
        "avg_price": {
          "avg": {
            "field": "price"
          }
        }
      }
    }
  }
}'`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Mapping and Analysis',
      commands: [
        {
          command: 'Text Field Mapping',
          description: 'Define text field mapping',
          usage: 'Text field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "analyzer": "standard"
      }
    }
  }
}'`,
        },
        {
          command: 'Keyword Field Mapping',
          description: 'Define keyword field mapping',
          usage: 'Exact match field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "status": {
        "type": "keyword"
      }
    }
  }
}'`,
        },
        {
          command: 'Numeric Field Mapping',
          description: 'Define numeric field mapping',
          usage: 'Number field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "price": {
        "type": "double"
      },
      "quantity": {
        "type": "integer"
      }
    }
  }
}'`,
        },
        {
          command: 'Date Field Mapping',
          description: 'Define date field mapping',
          usage: 'Date field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "created_at": {
        "type": "date",
        "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
      }
    }
  }
}'`,
        },
        {
          command: 'Boolean Field Mapping',
          description: 'Define boolean field mapping',
          usage: 'Boolean field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "is_active": {
        "type": "boolean"
      }
    }
  }
}'`,
        },
        {
          command: 'Object Field Mapping',
          description: 'Define object field mapping',
          usage: 'Nested object configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "address": {
        "type": "object",
        "properties": {
          "street": { "type": "text" },
          "city": { "type": "keyword" },
          "zip": { "type": "keyword" }
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Nested Field Mapping',
          description: 'Define nested field mapping',
          usage: 'Nested array configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "comments": {
        "type": "nested",
        "properties": {
          "author": { "type": "keyword" },
          "content": { "type": "text" },
          "date": { "type": "date" }
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Array Field Mapping',
          description: 'Define array field mapping',
          usage: 'Array configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "tags": {
        "type": "keyword"
      }
    }
  }
}'`,
        },
        {
          command: 'Geo Point Field Mapping',
          description: 'Define geographic point mapping',
          usage: 'Location field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "location": {
        "type": "geo_point"
      }
    }
  }
}'`,
        },
        {
          command: 'IP Field Mapping',
          description: 'Define IP address field mapping',
          usage: 'IP field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "ip_address": {
        "type": "ip"
      }
    }
  }
}'`,
        },
        {
          command: 'Custom Analyzer',
          description: 'Create custom analyzer',
          usage: 'Text analysis configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "analysis": {
      "analyzer": {
        "my_analyzer": {
          "tokenizer": "standard",
          "filter": ["lowercase", "stop"]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "content": {
        "type": "text",
        "analyzer": "my_analyzer"
      }
    }
  }
}'`,
        },
        {
          command: 'Standard Analyzer',
          description: 'Use standard text analyzer',
          usage: 'Default text analysis',
          example: `curl -X GET "localhost:9200/my_index/_analyze?pretty" -H 'Content-Type: application/json' -d'
{
  "analyzer": "standard",
  "text": "Elasticsearch is powerful"
}'`,
        },
        {
          command: 'Keyword Analyzer',
          description: 'Use keyword analyzer',
          usage: 'Exact match analysis',
          example: `curl -X GET "localhost:9200/my_index/_analyze?pretty" -H 'Content-Type: application/json' -d'
{
  "analyzer": "keyword",
  "text": "Elasticsearch is powerful"
}'`,
        },
        {
          command: 'Custom Tokenizer',
          description: 'Create custom tokenizer',
          usage: 'Text tokenization configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "analysis": {
      "tokenizer": {
        "my_tokenizer": {
          "type": "pattern",
          "pattern": "|"
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Add Field Mapping',
          description: 'Add new field to existing mapping',
          usage: 'Dynamic mapping update',
          example: `curl -X PUT "localhost:9200/my_index/_mapping?pretty" -H 'Content-Type: application/json' -d'
{
  "properties": {
    "new_field": {
      "type": "text"
    }
  }
}'`,
        },
        {
          command: 'Multi Field Mapping',
          description: 'Multiple analyzers for same field',
          usage: 'Multi-field configuration',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      }
    }
  }
}'`,
        },
      ],
    },
    {
      title: 'Advanced Search',
      commands: [
        {
          command: 'Highlight Results',
          description: 'Highlight search terms in results',
          usage: 'Search result highlighting',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "content": "elasticsearch"
    }
  },
  "highlight": {
    "fields": {
      "content": {}
    }
  }
}'`,
        },
        {
          command: 'Custom Highlight',
          description: 'Custom highlighting configuration',
          usage: 'Advanced highlighting',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "content": "elasticsearch"
    }
  },
  "highlight": {
    "fields": {
      "content": {
        "pre_tags": ["<em>"],
        "post_tags": ["</em>"],
        "fragment_size": 150
      }
    }
  }
}'`,
        },
        {
          command: 'Sort Results',
          description: 'Sort search results',
          usage: 'Result ordering',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "published_date": {
        "order": "desc"
      }
    }
  ]
}'`,
        },
        {
          command: 'Multi Field Sort',
          description: 'Sort by multiple fields',
          usage: 'Complex sorting',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "priority": {
        "order": "desc"
      }
    },
    {
      "published_date": {
        "order": "asc"
      }
    }
  ]
}'`,
        },
        {
          command: 'Score Sort',
          description: 'Sort by relevance score',
          usage: 'Relevance-based sorting',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "content": "elasticsearch"
    }
  },
  "sort": [
    {
      "_score": {
        "order": "desc"
      }
    }
  ]
}'`,
        },
        {
          command: 'Pagination',
          description: 'Paginate search results',
          usage: 'Result pagination',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  },
  "from": 0,
  "size": 10
}'`,
        },
        {
          command: 'Source Filtering',
          description: 'Select specific source fields',
          usage: 'Field selection',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  },
  "_source": ["title", "author"]
}'`,
        },
        {
          command: 'Exclude Source Fields',
          description: 'Exclude specific source fields',
          usage: 'Field exclusion',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  },
  "_source": {
    "excludes": ["content"]
  }
}'`,
        },
        {
          command: 'Script Fields',
          description: 'Add computed fields to results',
          usage: 'Dynamic field calculation',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  },
  "script_fields": {
    "discounted_price": {
      "script": {
        "source": "doc['price'].value * 0.9"
      }
    }
  }
}'`,
        },
        {
          command: 'Explain Query',
          description: 'Get query explanation',
          usage: 'Query debugging',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "content": "elasticsearch"
    }
  },
  "explain": true
}'`,
        },
        {
          command: 'Profile Query',
          description: 'Get query performance profile',
          usage: 'Performance analysis',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "content": "elasticsearch"
    }
  },
  "profile": true
}'`,
        },
        {
          command: 'Search Template',
          description: 'Use parameterized search templates',
          usage: 'Reusable queries',
          example: `curl -X GET "localhost:9200/_scripts/my_template?pretty" -H 'Content-Type: application/json' -d'
{
  "script": {
    "lang": "mustache",
    "source": {
      "query": {
        "match": {
          "{{field}}": "{{value}}"
        }
      }
    }
  }
}

curl -X GET "localhost:9200/my_index/_search/template?pretty" -H 'Content-Type: application/json' -d'
{
  "id": "my_template",
  "params": {
    "field": "title",
    "value": "elasticsearch"
  }
}'`,
        },
        {
          command: 'Function Score Query',
          description: 'Modify document scores',
          usage: 'Custom scoring',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "function_score": {
      "query": {
        "match": {
          "content": "elasticsearch"
        }
      },
      "field_value_factor": {
        "field": "popularity",
        "modifier": "log1p",
        "factor": 2
      }
    }
  }
}'`,
        },
        {
          command: 'Boosting Query',
          description: 'Promote or demote documents',
          usage: 'Query boosting',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "boosting": {
      "positive": {
        "match": {
          "content": "elasticsearch"
        }
      },
      "negative": {
        "match": {
          "content": "advertisement"
        }
      },
      "negative_boost": 0.2
    }
  }
}'`,
        },
        {
          command: 'Constant Score Query',
          description: 'Ignore score calculations',
          usage: 'Filter-based queries',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "constant_score": {
      "filter": {
        "term": {
          "status.keyword": "published"
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Dis Max Query',
          description: 'Disjunction maximum query',
          usage: 'Best match from multiple queries',
          example: `curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "dis_max": {
      "queries": [
        { "match": { "title": "elasticsearch" } },
        { "match": { "content": "elasticsearch" } }
      ],
      "tie_breaker": 0.3
    }
  }
}'`,
        },
      ],
    },
    {
      title: 'Cluster Management',
      commands: [
        {
          command: 'Cluster Health',
          description: 'Check cluster health status',
          usage: 'Health monitoring',
          example: `curl -X GET "localhost:9200/_cluster/health?pretty"`,
        },
        {
          command: 'Detailed Cluster Health',
          description: 'Get detailed health information',
          usage: 'Comprehensive health check',
          example: `curl -X GET "localhost:9200/_cluster/health?pretty&level=shards"`,
        },
        {
          command: 'Cluster State',
          description: 'Get cluster state information',
          usage: 'Cluster state monitoring',
          example: `curl -X GET "localhost:9200/_cluster/state?pretty"`,
        },
        {
          command: 'Cluster Stats',
          description: 'Get cluster statistics',
          usage: 'Performance metrics',
          example: `curl -X GET "localhost:9200/_cluster/stats?pretty"`,
        },
        {
          command: 'Node Info',
          description: 'Get node information',
          usage: 'Node monitoring',
          example: `curl -X GET "localhost:9200/_nodes?pretty"`,
        },
        {
          command: 'Node Stats',
          description: 'Get node statistics',
          usage: 'Node performance metrics',
          example: `curl -X GET "localhost:9200/_nodes/stats?pretty"`,
        },
        {
          command: 'Pending Tasks',
          description: 'Check pending cluster tasks',
          usage: 'Task monitoring',
          example: `curl -X GET "localhost:9200/_cluster/pending_tasks?pretty"`,
        },
        {
          command: 'Master Node Info',
          description: 'Get master node information',
          usage: 'Master node monitoring',
          example: `curl -X GET "localhost:9200/_cluster/state/master_node?pretty"`,
        },
        {
          command: 'Cluster Settings',
          description: 'Get cluster settings',
          usage: 'Configuration viewing',
          example: `curl -X GET "localhost:9200/_cluster/settings?pretty"`,
        },
        {
          command: 'Update Cluster Settings',
          description: 'Update cluster configuration',
          usage: 'Dynamic configuration',
          example: `curl -X PUT "localhost:9200/_cluster/settings?pretty" -H 'Content-Type: application/json' -d'
{
  "persistent": {
    "cluster.routing.allocation.enable": "all"
  }
}'`,
        },
        {
          command: 'Reroute API',
          description: 'Manually reroute shards',
          usage: 'Shard allocation control',
          example: `curl -X POST "localhost:9200/_cluster/reroute?pretty" -H 'Content-Type: application/json' -d'
{
  "commands": [
    {
      "allocate_empty_primary": {
        "index": "my_index",
        "shard": 0,
        "node": "node-1"
      }
    }
  ]
}'`,
        },
        {
          command: 'Exclude Node from Allocation',
          description: 'Temporarily exclude node from allocation',
          usage: 'Maintenance mode',
          example: `curl -X PUT "localhost:9200/_cluster/settings?pretty" -H 'Content-Type: application/json' -d'
{
  "transient": {
    "cluster.routing.allocation.exclude._name": "node-1"
  }
}'`,
        },
        {
          command: 'Clear Cache',
          description: 'Clear node caches',
          usage: 'Cache management',
          example: `curl -X POST "localhost:9200/_cache/clear?pretty"`,
        },
        {
          command: 'Clear Field Data Cache',
          description: 'Clear field data cache',
          usage: 'Memory management',
          example: `curl -X POST "localhost:9200/_cache/clear?pretty&fielddata=true"`,
        },
        {
          command: 'Refresh Indices',
          description: 'Refresh index to make changes visible',
          usage: 'Index refresh',
          example: `curl -X POST "localhost:9200/my_index/_refresh?pretty"`,
        },
        {
          command: 'Force Merge',
          description: 'Force merge index segments',
          usage: 'Index optimization',
          example: `curl -X POST "localhost:9200/my_index/_forcemerge?pretty"`,
        },
        {
          command: 'Flush Indices',
          description: 'Flush index to disk',
          usage: 'Data persistence',
          example: `curl -X POST "localhost:9200/my_index/_flush?pretty"`,
        },
        {
          command: 'Synced Flush',
          description: 'Perform synced flush',
          usage: 'Fast recovery preparation',
          example: `curl -X POST "localhost:9200/my_index/_flush?pretty&wait_if_ongoing=true"`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Security and Authentication',
      commands: [
        {
          command: 'Enable Security',
          description: 'Enable X-Pack security features',
          usage: 'Security setup',
          example: `# In elasticsearch.yml
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true`,
        },
        {
          command: 'Setup Passwords',
          description: 'Set up built-in user passwords',
          usage: 'User authentication setup',
          example: `cd /usr/share/elasticsearch
bin/elasticsearch-setup-passwords interactive`,
        },
        {
          command: 'Create User',
          description: 'Create new user',
          usage: 'User management',
          example: `curl -X POST "localhost:9200/_security/user/john?pretty" -u elastic -H 'Content-Type: application/json' -d'
{
  "password": "johnpassword",
  "roles": [ "power_user" ],
  "full_name": "John Doe",
  "email": "john@example.com"
}'`,
        },
        {
          command: 'Create Role',
          description: 'Create custom role',
          usage: 'Role management',
          example: `curl -X POST "localhost:9200/_security_role/content_writer?pretty" -u elastic -H 'Content-Type: application/json' -d'
{
  "indices": [
    {
      "names": [ "content-*" ],
      "privileges": [ "create", "index", "read", "write" ]
    }
  ]
}'`,
        },
        {
          command: 'API Key Authentication',
          description: 'Create API key for authentication',
          usage: 'API key management',
          example: `curl -X POST "localhost:9200/_security/api_key?pretty" -u elastic -H 'Content-Type: application/json' -d'
{
  "name": "my-api-key",
  "expiration": "1d",
  "roles": [ "read" ]
}'`,
        },
        {
          command: 'SSL Configuration',
          description: 'Configure SSL/TLS',
          usage: 'Secure communication setup',
          example: `# In elasticsearch.yml
xpack.security.http.ssl.enabled: true
xpack.security.http.ssl.certificate: certs/elastic.crt
xpack.security.http.ssl.key: certs/elastic.key
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.certificate: certs/elastic.crt
xpack.security.transport.ssl.key: certs/elastic.key`,
        },
        {
          command: 'Field Level Security',
          description: 'Restrict access to specific fields',
          usage: 'Field access control',
          example: `curl -X POST "localhost:9200/_security_role/field_access?pretty" -u elastic -H 'Content-Type: application/json' -d'
{
  "indices": [
    {
      "names": [ "sensitive_data" ],
      "privileges": [ "read" ],
      "field_security": {
        "grant": [ "title", "category" ],
        "except": [ "ssn", "credit_card" ]
      }
    }
  ]
}'`,
        },
        {
          command: 'Document Level Security',
          description: 'Restrict access to specific documents',
          usage: 'Document access control',
          example: `curl -X POST "localhost:9200/_security_role/document_access?pretty" -u elastic -H 'Content-Type: application/json' -d'
{
  "indices": [
    {
      "names": [ "documents" ],
      "privileges": [ "read" ],
      "query": {
        "term": {
          "owner": "john"
        }
      }
    }
  ]
}'`,
        },
        {
          command: 'Audit Logging',
          description: 'Enable security audit logging',
          usage: 'Security monitoring',
          example: `# In elasticsearch.yml
xpack.security.audit.enabled: true
xpack.security.audit.logfile.events.include: ["access_denied", "authentication_failed"]`,
        },
        {
          command: 'LDAP Authentication',
          description: 'Configure LDAP authentication',
          usage: 'Enterprise authentication',
          example: `# In elasticsearch.yml
xpack.security.authc.realms.ldap1:
  type: ldap
  order: 0
  url: "ldap://ldap.example.com:389"
  bind_dn: "cn=admin,dc=example,dc=com"
  bind_password: "password"
  user_search.base_dn: "ou=users,dc=example,dc=com"
  user_search.filter: "(uid={0})"
  group_search.base_dn: "ou=groups,dc=example,dc=com"
  group_search.filter: "(member={0})"`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Index Buffer Size',
          description: 'Configure index buffer size',
          usage: 'Memory optimization',
          example: `# In elasticsearch.yml
indices.memory.index_buffer_size: 10%
indices.memory.min_index_buffer_size: 48mb`,
        },
        {
          command: 'Field Data Cache',
          description: 'Configure field data cache',
          usage: 'Cache optimization',
          example: `# In elasticsearch.yml
indices.fielddata.cache.size: 40%
indices.breaker.fielddata.limit: 60%`,
        },
        {
          command: 'Query Cache',
          description: 'Configure query cache',
          usage: 'Query performance',
          example: `# In elasticsearch.yml
indices.queries.cache.size: 5%
indices.queries.cache.expire: 1h`,
        },
        {
          command: 'Request Cache',
          description: 'Configure request cache',
          usage: 'Result caching',
          example: `# In elasticsearch.yml
indices.requests.cache.enable: true
indices.requests.cache.expire: 10m`,
        },
        {
          command: 'Thread Pool Settings',
          description: 'Configure thread pools',
          usage: 'Concurrency optimization',
          example: `# In elasticsearch.yml
thread_pool.search.size: 4
thread_pool.search.queue_size: 1000
thread_pool.write.size: 4
thread_pool.write.queue_size: 1000`,
        },
        {
          command: 'Refresh Interval',
          description: 'Configure index refresh interval',
          usage: 'Real-time vs throughput balance',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "refresh_interval": "30s"
  }
}'`,
        },
        {
          command: 'Translog Settings',
          description: 'Configure transaction log',
          usage: 'Durability vs performance',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "translog.durability": "async",
    "translog.flush_threshold_size": "512mb"
  }
}'`,
        },
        {
          command: 'Merge Policy',
          description: 'Configure merge policy',
          usage: 'Segment merging optimization',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "merge.policy.max_merge_at_once": 5,
    "merge.policy.segments_per_tier": 10
  }
}'`,
        },
        {
          command: 'Index Sorting',
          description: 'Configure index sorting',
          usage: 'Query performance optimization',
          example: `curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "index.sort.field": "timestamp",
    "index.sort.order": "desc"
  }
}'`,
        },
        {
          command: 'Source Compression',
          description: 'Compress _source field',
          usage: 'Storage optimization',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "codec": "best_compression"
  }
}'`,
        },
        {
          command: 'Disable All Indexing',
          description: 'Temporarily disable indexing',
          usage: 'Bulk loading optimization',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "number_of_replicas": 0,
    "refresh_interval": -1
  }
}'`,
        },
        {
          command: 'Re-enable Indexing',
          description: 'Re-enable normal indexing',
          usage: 'Post-bulk optimization',
          example: `curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "number_of_replicas": 1,
    "refresh_interval": "1s"
  }
}'`,
        },
      ],
    },
    {
      title: 'Monitoring and Analytics',
      commands: [
        {
          command: 'Index Stats',
          description: 'Get index statistics',
          usage: 'Index monitoring',
          example: `curl -X GET "localhost:9200/my_index/_stats?pretty"`,
        },
        {
          command: 'Indices Stats',
          description: 'Get all indices statistics',
          usage: 'Cluster-wide monitoring',
          example: `curl -X GET "localhost:9200/_stats?pretty"`,
        },
        {
          command: 'Cat API Indices',
          description: 'Get index information in tabular format',
          usage: 'Quick index overview',
          example: `curl -X GET "localhost:9200/_cat/indices?v"`,
        },
        {
          command: 'Cat API Shards',
          description: 'Get shard information',
          usage: 'Shard monitoring',
          example: `curl -X GET "localhost:9200/_cat/shards?v"`,
        },
        {
          command: 'Cat API Nodes',
          description: 'Get node information in tabular format',
          usage: 'Node overview',
          example: `curl -X GET "localhost:9200/_cat/nodes?v"`,
        },
        {
          command: 'Cat API Segments',
          description: 'Get segment information',
          usage: 'Segment monitoring',
          example: `curl -X GET "localhost:9200/_cat/segments/my_index?v"`,
        },
        {
          command: 'Cat API Recovery',
          description: 'Get shard recovery information',
          usage: 'Recovery monitoring',
          example: `curl -X GET "localhost:9200/_cat/recovery?v"`,
        },
        {
          command: 'Pending Cluster Tasks',
          description: 'Get pending cluster tasks',
          usage: 'Task monitoring',
          example: `curl -X GET "localhost:9200/_cat/pending_tasks?v"`,
        },
        {
          command: 'ThreadPool Info',
          description: 'Get thread pool information',
          usage: 'Performance monitoring',
          example: `curl -X GET "localhost:9200/_cat/thread_pool?v"`,
        },
        {
          command: 'Fielddata Usage',
          description: 'Check field data memory usage',
          usage: 'Memory monitoring',
          example: `curl -X GET "localhost:9200/_cat/fielddata?v&fields=*"`,
        },
        {
          command: 'Index Templates',
          description: 'List index templates',
          usage: 'Template management',
          example: `curl -X GET "localhost:9200/_cat/templates?v"`,
        },
        {
          command: 'Snapshot Repository',
          description: 'Check snapshot repository status',
          usage: 'Backup monitoring',
          example: `curl -X GET "localhost:9200/_snapshot/_all?pretty"`,
        },
        {
          command: 'Snapshot Status',
          description: 'Get current snapshot status',
          usage: 'Backup progress monitoring',
          example: `curl -X GET "localhost:9200/_snapshot/my_repo/_current?pretty"`,
        },
        {
          command: 'Index Mappings',
          description: 'Get index mappings using Cat API',
          usage: 'Mapping overview',
          example: `curl -X GET "localhost:9200/_cat/mappings?v"`,
        },
        {
          command: 'Aliases Information',
          description: 'Get index aliases',
          usage: 'Alias management',
          example: `curl -X GET "localhost:9200/_cat/aliases?v"`,
        },
      ],
    },
    {
      title: 'Snapshot and Restore',
      commands: [
        {
          command: 'Create Snapshot Repository',
          description: 'Create backup repository',
          usage: 'Backup setup',
          example: `curl -X PUT "localhost:9200/_snapshot/my_backup?pretty" -H 'Content-Type: application/json' -d'
{
  "type": "fs",
  "settings": {
    "location": "/backup/my_backup"
  }
}'`,
        },
        {
          command: 'Shared File System Repository',
          description: 'Create shared filesystem repository',
          usage: 'Network backup setup',
          example: `curl -X PUT "localhost:9200/_snapshot/my_backup?pretty" -H 'Content-Type: application/json' -d'
{
  "type": "fs",
  "settings": {
    "location": "/backup/my_backup",
    "compress": true
  }
}'`,
        },
        {
          command: 'S3 Repository',
          description: 'Create S3 backup repository',
          usage: 'Cloud backup setup',
          example: `curl -X PUT "localhost:9200/_snapshot/s3_repository?pretty" -H 'Content-Type: application/json' -d'
{
  "type": "s3",
  "settings": {
    "bucket": "my-backup-bucket",
    "region": "us-east-1",
    "base_path": "elasticsearch"
  }
}'`,
        },
        {
          command: 'Create Snapshot',
          description: 'Create backup snapshot',
          usage: 'Backup creation',
          example: `curl -X PUT "localhost:9200/_snapshot/my_backup/snapshot_1?pretty" -H 'Content-Type: application/json' -d'
{
  "indices": "my_index,other_index",
  "ignore_unavailable": true,
  "include_global_state": false
}'`,
        },
        {
          command: 'Snapshot All Indices',
          description: 'Backup all indices',
          usage: 'Full cluster backup',
          example: `curl -X PUT "localhost:9200/_snapshot/my_backup/snapshot_all?pretty"`,
        },
        {
          command: 'Wait for Snapshot Completion',
          description: 'Wait for snapshot to complete',
          usage: 'Synchronous backup',
          example: `curl -X PUT "localhost:9200/_snapshot/my_backup/snapshot_1?wait_for_completion=true&pretty"`,
        },
        {
          command: 'List Snapshots',
          description: 'List all snapshots in repository',
          usage: 'Backup inventory',
          example: `curl -X GET "localhost:9200/_snapshot/my_backup/_all?pretty"`,
        },
        {
          command: 'Get Snapshot Status',
          description: 'Get snapshot status and details',
          usage: 'Backup monitoring',
          example: `curl -X GET "localhost:9200/_snapshot/my_backup/snapshot_1?pretty"`,
        },
        {
          command: 'Delete Snapshot',
          description: 'Delete specific snapshot',
          usage: 'Backup cleanup',
          example: `curl -X DELETE "localhost:9200/_snapshot/my_backup/snapshot_1?pretty"`,
        },
        {
          command: 'Restore Snapshot',
          description: 'Restore from snapshot',
          usage: 'Data recovery',
          example: `curl -X POST "localhost:9200/_snapshot/my_backup/snapshot_1/_restore?pretty" -H 'Content-Type: application/json' -d'
{
  "indices": "my_index",
  "ignore_unavailable": true,
  "include_global_state": false
}'`,
        },
        {
          command: 'Restore with Rename',
          description: 'Restore with index renaming',
          usage: 'Selective recovery',
          example: `curl -X POST "localhost:9200/_snapshot/my_backup/snapshot_1/_restore?pretty" -H 'Content-Type: application/json' -d'
{
  "indices": "my_index",
  "rename_pattern": "(.+)",
  "rename_replacement": "restored_$1"
}'`,
        },
        {
          command: 'Restore to Different Cluster',
          description: 'Restore snapshot to different cluster',
          usage: 'Cross-cluster recovery',
          example: `curl -X POST "localhost:9200/_snapshot/my_backup/snapshot_1/_restore?pretty" -H 'Content-Type: application/json' -d'
{
  "indices": "my_index",
  "index_settings": {
    "index.number_of_replicas": 0
  },
  "ignore_index_settings": [
    "index.refresh_interval"
  ]
}'`,
        },
        {
          command: 'Snapshot Verification',
          description: 'Verify snapshot integrity',
          usage: 'Backup validation',
          example: `curl -X POST "localhost:9200/_snapshot/my_backup/snapshot_1/_verify?pretty"`,
        },
        {
          command: 'Long Running Snapshots',
          description: 'Manage long running snapshots',
          usage: 'Backup management',
          example: `curl -X DELETE "localhost:9200/_snapshot/my_backup/snapshot_1" -H 'Content-Type: application/json' -d'
{
  "ignore": false
}'`,
        },
      ],
    },
    {
      title: 'Integration and APIs',
      commands: [
        {
          command: 'Python Client Basic',
          description: 'Basic Python Elasticsearch client',
          usage: 'Python integration',
          example: `from elasticsearch import Elasticsearch

es = Elasticsearch(["http://localhost:9200"])

# Index document
es.index(index="my_index", id=1, body={
    "title": "Test Document",
    "content": "This is a test"
})

# Search
response = es.search(index="my_index", body={
    "query": {"match_all": {}}
})`,
        },
        {
          command: 'Python Bulk Operations',
          description: 'Bulk operations with Python client',
          usage: 'Python bulk processing',
          example: `from elasticsearch import Elasticsearch, helpers

es = Elasticsearch(["http://localhost:9200"])

actions = [
    {
        "_index": "my_index",
        "_id": j,
        "_source": {
            "title": f"Document {j}",
            "content": f"Content {j}"
        }
    }
    for j in range(100)
]

helpers.bulk(es, actions)`,
        },
        {
          command: 'Node.js Client Basic',
          description: 'Basic Node.js Elasticsearch client',
          usage: 'Node.js integration',
          example: `const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' });

// Index document
await client.index({
  index: 'my_index',
  id: 1,
  body: {
    title: 'Test Document',
    content: 'This is a test'
  }
});

// Search
const response = await client.search({
  index: 'my_index',
  body: {
    query: { match_all: {} }
  }
});`,
        },
        {
          command: 'Java Client Basic',
          description: 'Basic Java Elasticsearch client',
          usage: 'Java integration',
          example: `import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.common.xcontent.XContentType;

RestHighLevelClient client = new RestHighLevelClient(
    RestClient.builder(new HttpHost("localhost", 9200, "http")));

IndexRequest request = new IndexRequest("my_index")
    .id("1")
    .source("{\"title\":\"Test\",\"content\":\"Content\"}", XContentType.JSON);

client.index(request, RequestOptions.DEFAULT);`,
        },
        {
          command: 'Logstash Configuration',
          description: 'Basic Logstash configuration',
          usage: 'Log data processing',
          example: `input {
  file {
    path => "/var/log/nginx/access.log"
    start_position => "beginning"
  }
}

filter {
  grok {
    match => { "message" => "%{COMBINEDAPACHELOG}" }
  }
  date {
    match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
  }
}

output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
    index => "nginx-logs-%{+YYYY.MM.dd}"
  }
}`,
        },
        {
          command: 'Beats Configuration',
          description: 'Filebeat configuration',
          usage: 'Log shipping',
          example: `filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/*.log

output.elasticsearch:
  hosts: ["localhost:9200"]
  index: "filebeat-%{+yyyy.MM.dd}"

processors:
  - add_host_metadata:
      when.not.contains.tags: forwarded`,
        },
        {
          command: 'Kibana Integration',
          description: 'Kibana index pattern creation',
          usage: 'Visualization setup',
          example: `curl -X POST "localhost:5601/api/saved_objects/_import" \\
  -H "kbn-xsrf: true" \\
  -H "Content-Type: application/json" \\
  --form file=@index-pattern.json`,
        },
        {
          command: 'REST API Authentication',
          description: 'API authentication with username/password',
          usage: 'Secure API access',
          example: `curl -X GET "localhost:9200/_cluster/health?pretty" \\
  -u elastic:password`,
        },
        {
          command: 'API Key Authentication',
          description: 'API authentication with API key',
          usage: 'Key-based authentication',
          example: `curl -X GET "localhost:9200/_cluster/health?pretty" \\
  -H "Authorization: ApiKey base64encodedkey"`,
        },
        {
          command: 'Cross-Cluster Search',
          description: 'Search across multiple clusters',
          usage: 'Multi-cluster queries',
          example: `curl -X GET "localhost:9200/cluster_one:my_index,cluster_two:my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match": {
      "title": "elasticsearch"
    }
  }
}'`,
        },
        {
          command: 'Remote Clusters',
          description: 'Configure remote clusters',
          usage: 'Cross-cluster setup',
          example: `# In elasticsearch.yml
cluster.remote.cluster_one.seeds:
  - "node1.remote1:9300"
cluster.remote.cluster_two.seeds:
  - "node1.remote2:9300"`,
        },
        {
          command: 'SQL API',
          description: 'SQL query API',
          usage: 'SQL interface',
          example: `curl -X POST "localhost:9200/_sql?format=json&pretty" -H 'Content-Type: application/json' -d'
{
  "query": "SELECT * FROM my_index WHERE author = 'John Doe'"
}'`,
        },
        {
          command: 'EQL API',
          description: 'Event Query Language API',
          usage: 'Event correlation',
          example: `curl -X POST "localhost:9200/my_index/_eql/search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": "process where process.name = \"elasticsearch\""
}'`,
        },
      ],
    },
    {
      title: 'Best Practices',
      commands: [
        {
          command: 'Index Design Best Practices',
          description: 'Optimal index design guidelines',
          usage: 'Index design recommendations',
          example: `Index Design Best Practices:
1. Use time-based indices for time-series data
2. Keep shard size between 10-50GB
3. Limit number of fields per index (<1000)
4. Use appropriate data types for fields
5. Avoid deep nesting in documents
6. Use _source filtering for large documents
7. Consider index lifecycle management
8. Plan for growth with sharding strategy`,
        },
        {
          command: 'Query Performance Best Practices',
          description: 'Optimize query performance',
          usage: 'Query optimization guidelines',
          example: `Query Performance Best Practices:
1. Use filter context instead of query when possible
2. Avoid wildcards at the beginning of terms
3. Use specific field types for exact matches
4. Limit the use of scripts in queries
5. Use index sorting for frequent sort patterns
6. Implement query caching strategies
7. Use routing for targeted queries
8. Monitor slow queries and optimize`,
        },
        {
          command: 'Memory Management Best Practices',
          description: 'Optimize memory usage',
          usage: 'Memory optimization guidelines',
          example: `Memory Management Best Practices:
1. Set JVM heap to 50% of system RAM (max 31GB)
2. Use file system cache for remaining memory
3. Monitor field data cache usage
4. Configure circuit breakers properly
5. Use efficient data structures
6. Clear caches during maintenance
7. Monitor GC patterns and tune accordingly
8. Use appropriate refresh intervals`,
        },
        {
          command: 'Security Best Practices',
          description: 'Implement security measures',
          usage: 'Security recommendations',
          example: `Security Best Practices:
1. Enable security features in production
2. Use strong authentication methods
3. Implement role-based access control
4. Enable audit logging
5. Use SSL/TLS for all communications
6. Regularly update Elasticsearch versions
7. Monitor security events
8. Implement network segmentation`,
        },
      ],
    },
    {
      title: 'Troubleshooting',
      commands: [
        {
          command: 'Check Cluster Health Issues',
          description: 'Diagnose cluster health problems',
          usage: 'Health troubleshooting',
          example: `# Check detailed health
curl -X GET "localhost:9200/_cluster/health?pretty&level=shards"

# Check unassigned shards
curl -X GET "localhost:9200/_cat/shards?v&h=index,shard,prirep,state,node"

# Check pending tasks
curl -X GET "localhost:9200/_cluster/pending_tasks?pretty"`,
        },
        {
          command: 'Memory Issues',
          description: 'Diagnose memory problems',
          usage: 'Memory troubleshooting',
          example: `# Check JVM heap usage
curl -X GET "localhost:9200/_nodes/stats/jvm?pretty"

# Check field data usage
curl -X GET "localhost:9200/_cat/fielddata?v&fields=*"

# Check circuit breaker stats
curl -X GET "localhost:9200/_nodes/stats/breaker?pretty"`,
        },
        {
          command: 'Slow Query Diagnosis',
          description: 'Identify slow queries',
          usage: 'Performance troubleshooting',
          example: `# Enable slow log
curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index.search.slowlog.threshold.query.warn": "1s",
  "index.search.slowlog.threshold.query.info": "500ms"
}

# Check search profile
curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": { "match_all": {} },
  "profile": true
}'`,
        },
        {
          command: 'Index Issues',
          description: 'Diagnose index problems',
          usage: 'Index troubleshooting',
          example: `# Check index status
curl -X GET "localhost:9200/_cat/indices?v&health=yellow"

# Check segments
curl -X GET "localhost:9200/_cat/segments/my_index?v"

# Check recovery status
curl -X GET "localhost:9200/_cat/recovery?v"`,
        },
        {
          command: 'Network Issues',
          description: 'Diagnose network connectivity problems',
          usage: 'Network troubleshooting',
          example: `# Check node connectivity
curl -X GET "localhost:9200/_cat/nodes?v&h=ip,port,http_address"

# Check transport stats
curl -X GET "localhost:9200/_nodes/stats/transport?pretty"

# Check connection pools
curl -X GET "localhost:9200/_nodes/stats/http?pretty"`,
        },
        {
          command: 'Disk Space Issues',
          description: 'Handle disk space problems',
          usage: 'Storage troubleshooting',
          example: `# Check disk usage
curl -X GET "localhost:9200/_cat/allocation?v"

# Check watermark settings
curl -X GET "localhost:9200/_cluster/settings?include_defaults=true&pretty"

# Adjust disk watermarks
curl -X PUT "localhost:9200/_cluster/settings?pretty" -H 'Content-Type: application/json' -d'
{
  "transient": {
    "cluster.routing.allocation.disk.watermark.low": "85%",
    "cluster.routing.allocation.disk.watermark.high": "90%",
    "cluster.routing.allocation.disk.watermark.flood_stage": "95%"
  }
}'`,
        },
        {
          command: 'Performance Tuning',
          description: 'General performance optimization',
          usage: 'Performance troubleshooting',
          example: `# Check thread pool stats
curl -X GET "localhost:9200/_cat/thread_pool?v"

# Check cache stats
curl -X GET "localhost:9200/_nodes/stats/indices/query_cache,fielddata,request_cache?pretty"

# Optimize refresh interval
curl -X PUT "localhost:9200/my_index/_settings?pretty" -H 'Content-Type: application/json' -d'
{
  "index": {
    "refresh_interval": "30s"
  }
}'`,
        },
      ],
    },
  ],
};
