import { Database } from 'lucide-react';

export const elasticsearchCheatsheet = {
  id: 'elasticsearch',
  name: 'Elasticsearch',
  description: 'Master Elasticsearch from basics to advanced features (2024)',
  icon: Database,
  colorTheme: 'yellow' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Elasticsearch',
      commands: [
        {
          command: 'Elasticsearch Introduction',
          description: 'Understanding Elasticsearch concepts and architecture',
          usage: 'Basic Elasticsearch terminology and concepts',
          example: `# Elasticsearch is a distributed, RESTful search and analytics engine

======== Key Concepts ==========
# Document: Basic unit of information stored in JSON format
# Index: Collection of documents with similar characteristics
# Shard: Split of an index across multiple nodes
# Replica: Copy of a shard for high availability
# Cluster: Collection of one or more nodes
# Node: Single server in a cluster
# Mapping: Schema definition for documents
# Field: Key-value pair in a document

======== Architecture Benefits ==========
# Distributed nature for horizontal scaling
# Near real-time search capabilities
# Multi-tenancy with multi-type support
# RESTful API for easy integration
# Built-in support for complex queries
# Automatic failover and data replication
# Schemaless JSON document storage`,
        },
        {
          command: 'Installation and Setup',
          description: 'Install and configure Elasticsearch',
          usage: 'Installation commands for different platforms',
          example: `# Elasticsearch 8.x Installation

======== Docker Installation ==========
# Single Node Docker
docker run -p 9200:9200 -p 9300:9300 \\
  -e "discovery.type=single-node" \\
  -e "xpack.security.enabled=false" \\
  docker.elastic.co/elasticsearch/elasticsearch:8.11.0

======== Docker Compose ==========
version: '3.8'
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
  es_data:

======== Package Installation ==========
# APT Installation (Ubuntu/Debian)
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
sudo apt update
sudo apt install elasticsearch

# YUM Installation (CentOS/RHEL)
rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
echo "[elasticsearch-8.x]
name=Elasticsearch repository for 8.x packages
baseurl=https://artifacts.elastic.co/packages/8.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md" | sudo tee /etc/yum.repos.d/elasticsearch.repo
sudo yum install elasticsearch

======== Homebrew Installation (macOS) ==========
brew tap elastic/tap
brew install elastic/tap/elasticsearch-full`,
        },
        {
          command: 'Basic Configuration',
          description: 'Configure Elasticsearch settings',
          usage: 'elasticsearch.yml configuration file',
          example: `# Edit: /etc/elasticsearch/elasticsearch.yml

======== Basic Configuration ==========
cluster.name: my-application
node.name: node-1
path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
network.host: 0.0.0.0
http.port: 9200
discovery.type: single-node

======== Memory Configuration ==========
# Edit: /etc/elasticsearch/jvm.options
-Xms1g
-Xmx1g

======== Security Configuration ==========
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true

======== Production Settings ==========
bootstrap.memory_lock: true
action.auto_create_index: +*

======== Start Service ==========
# Systemd (Linux)
sudo systemctl start elasticsearch
sudo systemctl enable elasticsearch

# macOS Homebrew
brew services start elastic/tap/elasticsearch-full`,
        },
        {
          command: 'Basic Operations',
          description: 'Start, stop, and verify Elasticsearch',
          usage: 'Service management and health checks',
          example: `# Service Management

======== Start/Stop Service ==========
# Systemd (Linux)
sudo systemctl start elasticsearch
sudo systemctl stop elasticsearch
sudo systemctl restart elasticsearch
sudo systemctl status elasticsearch

# macOS Homebrew
brew services start elastic/tap/elasticsearch-full
brew services stop elastic/tap/elasticsearch-full

======== Verify Installation ==========
# Basic health check
curl -X GET "localhost:9200"

# Pretty printed output
curl -X GET "localhost:9200/?pretty"

# Cluster health
curl -X GET "localhost:9200/_cluster/health?pretty"

# Cluster statistics
curl -X GET "localhost:9200/_cluster/stats?pretty"

# Node information
curl -X GET "localhost:9200/_nodes?pretty"

======== Basic API Test ==========
# Test cluster connectivity
curl -X GET "localhost:9200/_cat/health?v"

# List all indices
curl -X GET "localhost:9200/_cat/indices?v"

# Show cluster settings
curl -X GET "localhost:9200/_cluster/settings?pretty"`,
        },
      ],
    },
    {
      title: 'Basic Index Operations',
      commands: [
        {
          command: 'Creating Indices',
          description: 'Create new indices with settings and mappings',
          usage: 'PUT /index_name with configuration',
          example: `# Basic Index Creation

======== Simple Index ==========
curl -X PUT "localhost:9200/my_index?pretty"

======== Index with Settings ==========
curl -X PUT "localhost:9200/my_index" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 1,
    "index": {
      "max_result_window": 50000,
      "refresh_interval": "1s"
    }
  }
}'

======== Index with Mappings ==========
curl -X PUT "localhost:9200/products" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "name": {"type": "text"},
      "price": {"type": "double"},
      "in_stock": {"type": "boolean"},
      "tags": {"type": "keyword"},
      "created": {"type": "date", "format": "yyyy-MM-dd HH:mm:ss"},
      "description": {"type": "text", "analyzer": "english"}
    }
  }
}'

======== Complete Index Creation ==========
curl -X PUT "localhost:9200/blog_posts" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "settings": {
    "number_of_shards": 2,
    "number_of_replicas": 1,
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
      "title": {"type": "text", "analyzer": "my_analyzer"},
      "content": {"type": "text", "analyzer": "my_analyzer"},
      "author": {"type": "keyword"},
      "publish_date": {"type": "date"},
      "tags": {"type": "keyword"}
    }
  }
}'`,
        },
        {
          command: 'Managing Indices',
          description: 'List, examine, and delete indices',
          usage: 'GET/DELETE operations on indices',
          example: `# Index Management Operations

======== List Indices ==========
# List all indices
curl -X GET "localhost:9200/_cat/indices?v"

# List specific index
curl -X GET "localhost:9200/_cat/indices/my_index?v"

# List indices with human-readable sizes
curl -X GET "localhost:9200/_cat/indices?v&h=index,health,status,docs.count,store.size,pri.store.size"

======== Index Information ==========
# Get index settings
curl -X GET "localhost:9200/my_index/_settings?pretty"

# Get index mappings
curl -X GET "localhost:9200/my_index/_mapping?pretty"

# Get index statistics
curl -X GET "localhost:9200/my_index/_stats?pretty"

# Get complete index information
curl -X GET "localhost:9200/my_index?pretty"

======== Delete Index ==========
# Delete single index
curl -X DELETE "localhost:9200/my_index"

# Delete multiple indices
curl -X DELETE "localhost:9200/index1,index2"

# Delete all indices (use with caution!)
curl -X DELETE "localhost:9200/_all"

# Delete indices matching pattern
curl -X DELETE "localhost:9200/test-*"

======== Index Aliases ==========
# Create alias
curl -X POST "localhost:9200/_aliases" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "actions": [
    {"add": {"index": "my_index", "alias": "my_alias"}}
  ]
}'

# View aliases
curl -X GET "localhost:9200/_cat/aliases?v"`,
        },
        {
          command: 'Document Operations',
          description: 'Basic CRUD operations on documents',
          usage: 'POST/PUT/GET/DELETE document operations',
          example: `# Document CRUD Operations

======== Index Document ==========
# Index with auto-generated ID
curl -X POST "localhost:9200/my_index/_doc" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "name": "Product 1",
  "price": 29.99,
  "in_stock": true,
  "tags": ["electronics", "gadget"]
}'

# Index with specific ID
curl -X PUT "localhost:9200/my_index/_doc/1" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "name": "Product 1",
  "price": 29.99,
  "in_stock": true
}'

======== Retrieve Document ==========
# Get document by ID
curl -X GET "localhost:9200/my_index/_doc/1?pretty"

# Get document source only
curl -X GET "localhost:9200/my_index/_source/1"

# Get document with specific fields
curl -X GET "localhost:9200/my_index/_doc/1?_source=name,price&pretty"

======== Update Document ==========
# Partial update
curl -X POST "localhost:9200/my_index/_update/1" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "doc": {
    "price": 19.99,
    "in_stock": false
  }
}'

# Script update
curl -X POST "localhost:9200/my_index/_update/1" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "script": {
    "source": "ctx._source.price += params.amount",
    "params": {"amount": 5}
  }
}'

======== Delete Document ==========
# Delete by ID
curl -X DELETE "localhost:9200/my_index/_doc/1"

# Delete by query
curl -X POST "localhost:9200/my_index/_delete_by_query" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "match": {"in_stock": false}
  }
}'`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Search and Querying',
      commands: [
        {
          command: 'Basic Search',
          description: 'Fundamental search operations',
          usage: 'GET /index/_search with queries',
          example: `# Basic Search Operations

======== Match All Query ==========
# Search all documents
curl -X GET "localhost:9200/my_index/_search?pretty"

# Explicit match all
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {"match_all": {}}
}'

======== Term Queries ==========
# Match query (full-text search)
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "match": {
      "name": "product"
    }
  }
}'

# Term query (exact match)
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "term": {
      "tags.keyword": "electronics"
    }
  }
}'

======== Range Queries ==========
# Numeric range
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "range": {
      "price": {
        "gte": 10,
        "lte": 100
      }
    }
  }
}'

# Date range
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "range": {
      "created": {
        "gte": "2024-01-01",
        "lte": "2024-12-31"
      }
    }
  }
}'`,
        },
        {
          command: 'Compound Queries',
          description: 'Combine multiple queries',
          usage: 'bool, must, should, must_not queries',
          example: `# Compound Query Operations

======== Boolean Queries ==========
# Must (AND) - All conditions must match
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "bool": {
      "must": [
        {"match": {"name": "product"}},
        {"range": {"price": {"gte": 10, "lte": 100}}}
      ]
    }
  }
}'

# Should (OR) - At least one condition must match
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "bool": {
      "should": [
        {"match": {"name": "laptop"}},
        {"match": {"description": "computer"}}
      ],
      "minimum_should_match": 1
    }
  }
}'

# Must Not (NOT) - Conditions must not match
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "bool": {
      "must": [{"match": {"name": "product"}}],
      "must_not": [{"term": {"status": "discontinued"}}]
    }
  }
}'

======== Filter Queries ==========
# Filter context (no scoring, faster)
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "bool": {
      "filter": [
        {"term": {"category": "electronics"}},
        {"range": {"price": {"lte": 1000}}}
      ]
    }
  }
}'

======== Nested Boolean Queries ==========
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "bool": {
      "must": [
        {"match": {"name": "laptop"}}
      ],
      "filter": [
        {"term": {"in_stock": true}},
        {"range": {"price": {"lte": 1500}}}
      ],
      "must_not": [
        {"term": {"brand": "discontinued"}}
      ],
      "should": [
        {"term": {"warranty": "extended"}}
      ],
      "minimum_should_match": 0
    }
  }
}'`,
        },
        {
          command: 'Advanced Search Features',
          description: 'Advanced search capabilities',
          usage: 'fuzzy, wildcard, regex, phrase queries',
          example: `# Advanced Search Features

======== Fuzzy Search ==========
# Fuzzy matching (typo tolerance)
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "fuzzy": {
      "name": {
        "value": "produt",
        "fuzziness": "AUTO"
      }
    }
  }
}'

======== Wildcard Queries ==========
# Wildcard patterns
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "wildcard": {
      "name": "prod*"
    }
  }
}'

======== Phrase Queries ==========
# Exact phrase matching
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "match_phrase": {
      "description": "high quality laptop"
    }
  }
}'

======== Prefix Queries ==========
# Prefix matching
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "prefix": {
      "name": "lap"
    }
  }
}'

======== Regexp Queries ==========
# Regular expression matching
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "regexp": {
      "name": "prod[0-9]{3}"
    }
  }
}'

======== Multi-match Queries ==========
# Search multiple fields
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "multi_match": {
      "query": "laptop computer",
      "fields": ["title", "description", "tags"],
      "type": "best_fields"
    }
  }
}'`,
        },
      ],
    },
    {
      title: 'Aggregations and Analytics',
      commands: [
        {
          command: 'Basic Aggregations',
          description: 'Data aggregation and analysis',
          usage: 'Aggregations framework for analytics',
          example: `# Basic Aggregations

======== Metrics Aggregations ==========
# Average price
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "avg_price": {
      "avg": {"field": "price"}
    }
  }
}'

# Multiple metrics
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "price_stats": {
      "stats": {"field": "price"}
    }
  }
}'

======== Bucket Aggregations ==========
# Terms aggregation (group by field)
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "categories": {
      "terms": {"field": "category.keyword"}
    }
  }
}'

# Range aggregation
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "price_ranges": {
      "range": {
        "field": "price",
        "ranges": [
          {"to": 50, "key": "cheap"},
          {"from": 50, "to": 200, "key": "medium"},
          {"from": 200, "key": "expensive"}
        ]
      }
    }
  }
}'

======== Date Histogram ==========
# Daily aggregation
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "daily_sales": {
      "date_histogram": {
        "field": "created",
        "calendar_interval": "day"
      }
    }
  }
}'`,
        },
        {
          command: 'Advanced Aggregations',
          description: 'Complex aggregation patterns',
          usage: 'Nested, pipeline, and composite aggregations',
          example: `# Advanced Aggregations

======== Nested Aggregations ==========
# Category with average price
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "categories": {
      "terms": {"field": "category.keyword"},
      "aggs": {
        "avg_price": {
          "avg": {"field": "price"}
        },
        "price_ranges": {
          "range": {
            "field": "price",
            "ranges": [
              {"to": 100, "key": "budget"},
              {"from": 100, "key": "premium"}
            ]
          }
        }
      }
    }
  }
}'

======== Pipeline Aggregations ==========
# Moving average
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "sales_per_month": {
      "date_histogram": {
        "field": "created",
        "calendar_interval": "month"
      },
      "aggs": {
        "moving_avg": {
          "moving_avg": {
            "buckets_path": "_count",
            "model": "simple",
            "window": 3
          }
        }
      }
    }
  }
}'

======== Composite Aggregations ==========
# Pagination for large aggregations
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "my_composite": {
      "composite": {
        "size": 2,
        "sources": [
          {
            "category": {
              "terms": {"field": "category.keyword"}
            }
          },
          {
            "brand": {
              "terms": {"field": "brand.keyword"}
            }
          }
        ]
      }
    }
  }
}'

======== Significant Terms ==========
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {"match": {"description": "laptop"}},
  "size": 0,
  "aggs": {
    "significant_brands": {
      "significant_terms": {"field": "brand.keyword"}
    }
  }
}'`,
        },
        {
          command: 'Analytics and Insights',
          description: 'Business intelligence with aggregations',
          usage: 'Real-world analytics patterns',
          example: `# Analytics and Business Intelligence

======== Sales Analytics ==========
# Monthly sales with trends
curl -X GET "localhost:9200/sales/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "monthly_sales": {
      "date_histogram": {
        "field": "sale_date",
        "calendar_interval": "month"
      },
      "aggs": {
        "total_revenue": {
          "sum": {"field": "amount"}
        },
        "avg_order_value": {
          "avg": {"field": "amount"}
        },
        "top_products": {
          "terms": {
            "field": "product_name.keyword",
            "size": 5
          }
        }
      }
    }
  }
}'

======== Customer Segmentation ==========
curl -X GET "localhost:9200/customers/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "age_groups": {
      "range": {
        "field": "age",
        "ranges": [
          {"to": 25, "key": "young"},
          {"from": 25, "to": 45, "key": "middle"},
          {"from": 45, "key": "senior"}
        ]
      },
      "aggs": {
        "avg_purchase_value": {
          "avg": {"field": "total_spent"}
        },
        "preferred_categories": {
          "terms": {
            "field": "favorite_category.keyword",
            "size": 3
          }
        }
      }
    }
  }
}'

======== Performance Metrics ==========
curl -X GET "localhost:9200/logs/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "response_time_percentiles": {
      "percentiles": {
        "field": "response_time",
        "percents": [50, 90, 95, 99]
      }
    },
    "error_rate_by_service": {
      "terms": {"field": "service_name.keyword"},
      "aggs": {
        "error_rate": {
          "bucket_script": {
            "buckets_path": {
              "errors": "error_count>doc_count",
              "total": "total_count>doc_count"
            },
            "script": "params.errors / params.total * 100"
          }
        },
        "error_count": {
          "filter": {"term": {"status": "error"}}
        },
        "total_count": {
          "global": {}
        }
      }
    }
  }
}'`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Data Modeling and Mapping',
      commands: [
        {
          command: 'Field Types and Mappings',
          description: 'Understanding Elasticsearch field types',
          usage: 'Configure field mappings for optimal performance',
          example: `# Field Types and Mappings

======== Core Field Types ==========
curl -X PUT "localhost:9200/field_types" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "text_field": {"type": "text"},
      "keyword_field": {"type": "keyword"},
      "integer_field": {"type": "integer"},
      "float_field": {"type": "float"},
      "double_field": {"type": "double"},
      "boolean_field": {"type": "boolean"},
      "date_field": {"type": "date"},
      "binary_field": {"type": "binary"}
    }
  }
}'

======== Complex Field Types ==========
curl -X PUT "localhost:9200/complex_types" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "object_field": {
        "type": "object",
        "properties": {
          "name": {"type": "text"},
          "value": {"type": "integer"}
        }
      },
      "nested_field": {
        "type": "nested",
        "properties": {
          "tag": {"type": "keyword"},
          "score": {"type": "float"}
        }
      },
      "geo_point_field": {"type": "geo_point"},
      "geo_shape_field": {"type": "geo_shape"},
      "ip_field": {"type": "ip"},
      "completion_field": {
        "type": "completion",
        "analyzer": "simple"
      }
    }
  }
}'

======== Array Types ==========
curl -X PUT "localhost:9200/array_types" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "tags": {"type": "keyword"},
      "numbers": {"type": "integer"},
      "dates": {"type": "date"},
      "objects": {
        "type": "object",
        "properties": {
          "key": {"type": "keyword"},
          "value": {"type": "text"}
        }
      }
    }
  }
}'

======== Multi-field Mapping ==========
curl -X PUT "localhost:9200/multi_fields" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "fields": {
          "keyword": {"type": "keyword"},
          "english": {"type": "text", "analyzer": "english"},
          "suggest": {"type": "completion"}
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Analysis and Analyzers',
          description: 'Text analysis configuration',
          usage: 'Custom analyzers for text processing',
          example: `# Text Analysis Configuration

======== Built-in Analyzers ==========
curl -X PUT "localhost:9200/analyzers_test" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "settings": {
    "analysis": {
      "analyzer": {
        "my_standard": {
          "type": "standard",
          "stopwords": "_english_"
        },
        "my_english": {
          "type": "english",
          "stemmer": "possessive_english"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "content": {
        "type": "text",
        "analyzer": "my_english",
        "fields": {
          "keyword": {"type": "keyword"}
        }
      }
    }
  }
}'

======== Custom Analyzer ==========
curl -X PUT "localhost:9200/custom_analyzer" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "settings": {
    "analysis": {
      "filter": {
        "my_stopwords": {
          "type": "stop",
          "stopwords": ["and", "or", "the"]
        },
        "my_synonym": {
          "type": "synonym",
          "synonyms": ["laptop => notebook", "phone => smartphone"]
        }
      },
      "analyzer": {
        "my_custom_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": [
            "lowercase",
            "my_stopwords",
            "my_synonym",
            "snowball"
          ]
        }
      }
    }
  }
}'

======== Analyze API ==========
# Test analyzer
curl -X GET "localhost:9200/_analyze" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "analyzer": "standard",
  "text": "Hello World! This is a test."
}'

# Test custom analyzer
curl -X GET "localhost:9200/custom_analyzer/_analyze" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "analyzer": "my_custom_analyzer",
  "text": "I bought a new laptop and smartphone"
}'

======== Character Filters ==========
curl -X PUT "localhost:9200/char_filter_example" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "settings": {
    "analysis": {
      "char_filter": {
        "my_mapping": {
          "type": "mapping",
          "mappings": ["& => and", "@ => at"]
        }
      },
      "analyzer": {
        "my_email_analyzer": {
          "type": "custom",
          "tokenizer": "uax_url_email",
          "char_filter": ["my_mapping"],
          "filter": ["lowercase"]
        }
      }
    }
  }
}'`,
        },
        {
          command: 'Data Modeling Best Practices',
          description: 'Optimal data modeling patterns',
          usage: 'Design patterns for different use cases',
          example: `# Data Modeling Best Practices

======== E-commerce Product Model ==========
curl -X PUT "localhost:9200/ecommerce_products" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "product_id": {"type": "keyword"},
      "name": {
        "type": "text",
        "fields": {"keyword": {"type": "keyword"}}
      },
      "description": {
        "type": "text",
        "analyzer": "english"
      },
      "price": {"type": "double"},
      "category": {
        "type": "object",
        "properties": {
          "main": {"type": "keyword"},
          "sub": {"type": "keyword"}
        }
      },
      "variants": {
        "type": "nested",
        "properties": {
          "color": {"type": "keyword"},
          "size": {"type": "keyword"},
          "price": {"type": "double"},
          "in_stock": {"type": "boolean"}
        }
      },
      "reviews": {
        "type": "nested",
        "properties": {
          "rating": {"type": "integer"},
          "comment": {"type": "text"},
          "review_date": {"type": "date"},
          "reviewer": {"type": "keyword"}
        }
      },
      "inventory": {
        "type": "object",
        "properties": {
          "quantity": {"type": "integer"},
          "reserved": {"type": "integer"},
          "available": {"type": "integer"}
        }
      },
      "created_at": {"type": "date"},
      "updated_at": {"type": "date"}
    }
  }
}'

======== Log Data Model ==========
curl -X PUT "localhost:9200/application_logs" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "timestamp": {"type": "date"},
      "level": {"type": "keyword"},
      "message": {"type": "text"},
      "service": {"type": "keyword"},
      "environment": {"type": "keyword"},
      "host": {"type": "keyword"},
      "user_id": {"type": "keyword"},
      "session_id": {"type": "keyword"},
      "request_id": {"type": "keyword"},
      "duration_ms": {"type": "integer"},
      "status_code": {"type": "integer"},
      "error": {
        "type": "object",
        "properties": {
          "type": {"type": "keyword"},
          "message": {"type": "text"},
          "stack_trace": {"type": "text"}
        }
      },
      "tags": {"type": "keyword"},
      "metadata": {"type": "object", "enabled": false}
    }
  }
}'

======== Time Series Data Model ==========
curl -X PUT "localhost:9200/metrics_data" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "mappings": {
    "properties": {
      "@timestamp": {"type": "date"},
      "metric_name": {"type": "keyword"},
      "metric_type": {"type": "keyword"},
      "value": {"type": "double"},
      "unit": {"type": "keyword"},
      "source": {
        "type": "object",
        "properties": {
          "host": {"type": "keyword"},
          "service": {"type": "keyword"},
          "environment": {"type": "keyword"}
        }
      },
      "labels": {"type": "object"},
      "dimensions": {"type": "object"}
    }
  }
}'`,
        },
      ],
    },
    {
      title: 'Performance and Optimization',
      commands: [
        {
          command: 'Index Performance',
          description: 'Optimize index performance',
          usage: 'Settings and configurations for speed',
          example: `# Index Performance Optimization

======== Performance Settings ==========
curl -X PUT "localhost:9200/performance_index" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 1,
    "refresh_interval": "30s",
    "index": {
      "max_result_window": 50000,
      "translog": {
        "flush_threshold_size": "1gb"
      },
      "merge": {
        "policy": {
          "max_merge_at_once": 5,
          "segments_per_tier": 10
        }
      }
    }
  }
}'

======== Bulk Indexing ==========
curl -X POST "localhost:9200/_bulk" \\
  -H 'Content-Type: application/json' \\
  -d'
{"index": {"_index": "performance_index"}}
{"field1": "value1", "field2": "value2"}
{"index": {"_index": "performance_index"}}
{"field1": "value3", "field2": "value4"}
'

======== Optimized Bulk Indexing ==========
curl -X PUT "localhost:9200/bulk_optimized/_settings" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "index": {
    "refresh_interval": "-1",
    "number_of_replicas": 0
  }
}'

# Perform bulk indexing...

# Restore normal settings
curl -X PUT "localhost:9200/bulk_optimized/_settings" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "index": {
    "refresh_interval": "1s",
    "number_of_replicas": 1
  }
}'

======== Force Merge ==========
# Merge segments to reduce disk usage
curl -X POST "localhost:9200/performance_index/_forcemerge?max_num_segments=1"

======== Index Templates ==========
curl -X PUT "localhost:9200/_index_template/performance_template" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "index_patterns": ["performance-*"],
  "template": {
    "settings": {
      "number_of_shards": 3,
      "number_of_replicas": 1,
      "refresh_interval": "5s"
    },
    "mappings": {
      "properties": {
        "timestamp": {"type": "date"},
        "metric": {"type": "keyword"},
        "value": {"type": "double"}
      }
    }
  }
}'`,
        },
        {
          command: 'Query Performance',
          description: 'Optimize query performance',
          usage: 'Query optimization techniques',
          example: `# Query Performance Optimization

======== Query Optimization ==========
# Use filter context instead of query when possible
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {
    "bool": {
      "filter": [  # Faster than must
        {"term": {"status": "active"}},
        {"range": {"created": {"gte": "2024-01-01"}}}
      ]
    }
  }
}'

======== Pagination Optimization ==========
# Use search_after for deep pagination
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 100,
  "query": {"match_all": {}},
  "sort": [
    {"timestamp": "asc"},
    {"_id": "asc"}
  ]
}'

# Next page using search_after
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 100,
  "query": {"match_all": {}},
  "search_after": ["2024-01-01T00:00:00", "doc_id"],
  "sort": [
    {"timestamp": "asc"},
    {"_id": "asc"}
  ]
}'

======== Source Filtering ==========
# Return only required fields
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {"match_all": {}},
  "_source": ["name", "price", "category"]
}'

======== Caching ==========
# Use request cache for expensive aggregations
curl -X GET "localhost:9200/my_index/_search?pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "size": 0,
  "aggs": {
    "expensive_agg": {
      "terms": {"field": "category.keyword"}
    }
  }
}'

# Disable caching for real-time data
curl -X GET "localhost:9200/my_index/_search?request_cache=false&pretty" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": {"range": {"timestamp": {"gte": "now-1m"}}}
}'`,
        },
        {
          command: 'Memory and Resource Management',
          description: 'Manage memory and system resources',
          usage: 'JVM and system optimization',
          example: `# Memory and Resource Management

======== JVM Settings ==========
# Edit: /etc/elasticsearch/jvm.options

# Heap size (set to 50% of RAM, max 32GB)
-Xms4g
-Xmx4g

# GC settings
-XX:+UseG1GC
-XX:MaxGCPauseMillis=200

# Memory settings
-XX:+UnlockExperimentalVMOptions
-XX:+UseCGroupMemoryLimitForHeap

======== System Settings ==========
# Edit: /etc/elasticsearch/elasticsearch.yml

# Memory lock
bootstrap.memory_lock: true

# File descriptors
bootstrap.system_call_filter: false

======== Thread Pool Settings ==========
curl -X PUT "localhost:9200/_cluster/settings" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "persistent": {
    "thread_pool.search.size": 4,
    "thread_pool.search.queue_size": 1000,
    "thread_pool.write.size": 4,
    "thread_pool.write.queue_size": 1000
  }
}'

======== Circuit Breaker Settings ==========
curl -X PUT "localhost:9200/_cluster/settings" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "persistent": {
    "indices.breaker.total.limit": "70%",
    "indices.breaker.request.limit": "60%",
    "indices.breaker.fielddata.limit": "40%"
  }
}'

======== Monitoring Memory Usage ==========
# Node stats
curl -X GET "localhost:9200/_nodes/stats/jvm,indices?pretty"

# Memory usage by indices
curl -X GET "localhost:9200/_cat/indices?v&h=index,docs.count,store.size,memory.total,memory.fields"

# Field data usage
curl -X GET "localhost:9200/_cat/fielddata?v&h=field,host,ip,node,size"

======== Clear Cache ==========
# Clear all caches
curl -X POST "localhost:9200/_cache/clear"

# Clear specific cache
curl -X POST "localhost:9200/my_index/_cache/clear?request=true&query=true&field_data=true"`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Cluster Management',
      commands: [
        {
          command: 'Cluster Configuration',
          description: 'Configure and manage Elasticsearch clusters',
          usage: 'Multi-node cluster setup and management',
          example: `# Cluster Configuration

======== Multi-Node Cluster Setup ==========
# Edit: /etc/elasticsearch/elasticsearch.yml (Node 1)
cluster.name: my-cluster
node.name: node-1
network.host: 192.168.1.101
discovery.seed_hosts: ["192.168.1.101", "192.168.1.102", "192.168.1.103"]
cluster.initial_master_nodes: ["node-1", "node-2", "node-3"]

# Edit: /etc/elasticsearch/elasticsearch.yml (Node 2)
cluster.name: my-cluster
node.name: node-2
network.host: 192.168.1.102
discovery.seed_hosts: ["192.168.1.101", "192.168.1.102", "192.168.1.103"]
cluster.initial_master_nodes: ["node-1", "node-2", "node-3"]

======== Cluster Health Monitoring ==========
# Overall cluster health
curl -X GET "localhost:9200/_cluster/health?pretty"

# Detailed health with level
curl -X GET "localhost:9200/_cluster/health?pretty&level=shards"

# Cluster state
curl -X GET "localhost:9200/_cluster/state?pretty"

# Cluster stats
curl -X GET "localhost:9200/_cluster/stats?pretty"

======== Node Management ==========
# List all nodes
curl -X GET "localhost:9200/_cat/nodes?v"

# Node statistics
curl -X GET "localhost:9200/_nodes/stats?pretty"

# Node information
curl -X GET "localhost:9200/_nodes?pretty"

======== Shard Allocation ==========
# Get shard allocation
curl -X GET "localhost:9200/_cat/shards?v"

# Shard allocation explanation
curl -X GET "localhost:9200/_cluster/allocation/explain?pretty"

# Manual shard allocation
curl -X POST "localhost:9200/_cluster/reroute" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "commands": [
    {
      "allocate_primary": {
        "index": "my_index",
        "shard": 0,
        "node": "node-1"
      }
    }
  ]
}'`,
        },
        {
          command: 'High Availability',
          description: 'Configure high availability and failover',
          usage: 'Replication, failover, and disaster recovery',
          example: `# High Availability Configuration

======== Replication Settings ==========
curl -X PUT "localhost:9200/my_index/_settings" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "index": {
    "number_of_replicas": 2,
    "auto_expand_replicas": "0-all"
  }
}'

======== Snapshot and Restore ==========
# Configure snapshot repository
curl -X PUT "localhost:9200/_snapshot/my_backup" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "type": "fs",
  "settings": {
    "location": "/backup/elasticsearch",
    "compress": true
  }
}'

# Create snapshot
curl -X PUT "localhost:9200/_snapshot/my_backup/snapshot_1"

# Restore snapshot
curl -X POST "localhost:9200/_snapshot/my_backup/snapshot_1/_restore"

# Restore with new index name
curl -X POST "localhost:9200/_snapshot/my_backup/snapshot_1/_restore" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "indices": "my_index",
  "rename_pattern": "(.+)",
  "rename_replacement": "restored_$1"
}'

======== Cross-Cluster Replication ==========
# Configure follower index
curl -X PUT "localhost:9200/follower_index/_ccr/follow" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "remote_cluster": "remote_cluster",
  "leader_index": "leader_index",
  "max_read_request_operation_count": 5120,
  "max_outstanding_read_requests": 16
}'

# Pause following
curl -X POST "localhost:9200/follower_index/_ccr/pause"

# Resume following
curl -X POST "localhost:9200/follower_index/_ccr/resume"

======== Disaster Recovery ==========
# Cluster backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
SNAPSHOT_NAME="backup_$DATE"

curl -X PUT "localhost:9200/_snapshot/my_backup/$SNAPSHOT_NAME?wait_for_completion=true"

# Clean old snapshots (keep last 7)
curl -X DELETE "localhost:9200/_snapshot/my_backup/$(curl -s localhost:9200/_cat/snapshots/my_backup?h=snapshot | sort | head -n -7 | awk '{print $1}' | tr '\\n' ',' | sed 's/,$//')"`,
        },
        {
          command: 'Security and Authentication',
          description: 'Configure security features',
          usage: 'User management, SSL/TLS, and access control',
          example: `# Security Configuration

======== Enable Security ==========
# Edit: /etc/elasticsearch/elasticsearch.yml
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.verification: certificate
xpack.security.transport.ssl.keystore.path: certs/elastic-certificates.p12
xpack.security.transport.ssl.truststore.path: certs/elastic-certificates.p12

======== Generate Certificates ==========
# Generate CA
elasticsearch-certutil ca

# Generate certificates for nodes
elasticsearch-certutil cert --name elastic --ca-cert elastic-stack-ca.p12 --ca-pass --out elastic-certificates.p12

======== User Management ==========
# Setup built-in users
elasticsearch-setup-passwords interactive

# Create role
curl -X POST "localhost:9200/_security/role/my_role" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "indices": [
    {
      "names": ["my_index"],
      "privileges": ["read", "write"]
    }
  ]
}'

# Create user
curl -X POST "localhost:9200/_security/user/my_user" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "password": "secure_password",
  "roles": ["my_role"],
  "full_name": "My User",
  "email": "user@example.com"
}'

======== API Key Authentication ==========
# Create API key
curl -X POST "localhost:9200/_security/api_key" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "name": "my-api-key",
  "expiration": "30d",
  "role_descriptors": {
    "my_role": {
      "indices": [
        {
          "names": ["my_index"],
          "privileges": ["read"]
        }
      ]
    }
  }
}'

======== SSL/TLS Configuration ==========
# Enable HTTPS
curl -X PUT "localhost:9200/_cluster/settings" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "persistent": {
    "xpack.security.http.ssl.enabled": true
  }
}'

# Test HTTPS connection
curl -X GET "https://localhost:9200" --cacert /path/to/ca.crt -u elastic:password`,
        },
      ],
    },
    {
      title: 'Advanced Features and Integrations',
      commands: [
        {
          command: 'Machine Learning',
          description: 'Elasticsearch ML features',
          usage: 'Anomaly detection and forecasting',
          example: `# Machine Learning Features

======== Anomaly Detection ==========
# Create job
curl -X PUT "localhost:9200/_ml/anomaly_detectors/server_metrics" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "analysis_config": {
    "bucket_span": "10m",
    "detectors": [
      {
        "detector_description": "High CPU usage",
        "function": "high_count",
        "by_field_name": "host"
      }
    ]
  },
  "data_description": {
    "time_field": "@timestamp",
    "time_format": "epoch_ms"
  }
}'

# Open job
curl -X POST "localhost:9200/_ml/anomaly_detectors/server_metrics/_open"

# Get results
curl -X GET "localhost:9200/_ml/anomaly_detectors/server_metrics/results?pretty"

======== Forecasting ==========
# Create forecast job
curl -X PUT "localhost:9200/_ml/anomaly_detectors/sales_forecast" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "analysis_config": {
    "bucket_span": "1d",
    "detectors": [
      {
        "detector_description": "Sales forecast",
        "function": "sum",
        "by_field_name": "product"
      }
    ]
  },
  "data_description": {
    "time_field": "timestamp",
    "time_format": "epoch_ms"
  }
}'

# Create forecast
curl -X POST "localhost:9200/_ml/anomaly_detectors/sales_forecast/_forecast" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "duration": "7d",
  "expires_in": "30d"
}'

======== Data Frame Analytics ==========
# Create classification job
curl -X PUT "localhost:9200/_ml/data_frame/analytics/iris_classification" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "source": {
    "index": "iris_data"
  },
  "dest": {
    "index": "iris_classification_results"
  },
  "analysis": {
    "classification": {
      "dependent_variable": "species",
      "training_percent": 80
    }
  }
}'

# Start job
curl -X POST "localhost:9200/_ml/data_frame/analytics/iris_classification/_start"

======== Inference ==========
# Deploy trained model
curl -X PUT "localhost:9200/_ml/trained_models/iris_classification/deployment/_start"

# Use model for inference
curl -X POST "localhost:9200/_ml/trained_models/iris_classification/deployment/_infer" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "docs": [
    {
      "sepal_length": 5.1,
      "sepal_width": 3.5,
      "petal_length": 1.4,
      "petal_width": 0.2
    }
  ]
}'`,
        },
        {
          command: 'Elasticsearch SQL',
          description: 'SQL interface for Elasticsearch',
          usage: 'Run SQL queries on Elasticsearch data',
          example: `# Elasticsearch SQL

======== Basic SQL Queries ==========
# Simple SELECT
curl -X POST "localhost:9200/_sql?format=txt" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT name, price FROM my_index WHERE price > 100"
}'

# JSON format
curl -X POST "localhost:9200/_sql?format=json" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT COUNT(*) as total FROM my_index"
}'

======== Advanced SQL Features ==========
# Aggregations
curl -X POST "localhost:9200/_sql?format=txt" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT category, AVG(price) as avg_price FROM my_index GROUP BY category ORDER BY avg_price DESC"
}'

# JOIN operations (limited)
curl -X POST "localhost:9200/_sql?format=txt" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT p.name, c.category_name FROM products p JOIN categories c ON p.category_id = c.id"
}'

# Date functions
curl -X POST "localhost:9200/_sql?format=txt" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT DATE_TRUNC(\"month\", created) as month, COUNT(*) as count FROM logs GROUP BY month ORDER BY month"
}'

======== SQL to DSL Translation ==========
# Convert SQL to DSL
curl -X POST "localhost:9200/_sql/translate" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT * FROM my_index WHERE price > 100 AND category = \"electronics\""
}'

======== SQL with Parameters ==========
curl -X POST "localhost:9200/_sql?format=json" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SELECT * FROM my_index WHERE price > ? AND category = ?",
  "params": [100, "electronics"]
}'

======== Show Tables and Describe ==========
# List indices as tables
curl -X POST "localhost:9200/_sql?format=txt" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "SHOW TABLES"
}'

# Describe table structure
curl -X POST "localhost:9200/_sql?format=txt" \\
  -H 'Content-Type: application/json' \\
  -d'{
  "query": "DESCRIBE my_index"
}'`,
        },
        {
          command: 'Integration and ETL',
          description: 'Integrate with external systems',
          usage: 'Logstash, Beats, and third-party integrations',
          example: `# Integration and ETL

======== Logstash Configuration ==========
# logstash.conf
input {
  beats {
    port => 5044
  }
  jdbc {
    jdbc_driver_library => "/path/to/mysql-connector.jar"
    jdbc_driver_class => "com.mysql.cj.jdbc.Driver"
    jdbc_connection_string => "jdbc:mysql://localhost:3306/mydb"
    jdbc_user => "user"
    jdbc_password => "password"
    schedule => "* * * * *"
    statement => "SELECT * FROM products WHERE updated_at > :sql_last_value"
    use_column_value => true
    tracking_column => "updated_at"
    tracking_column_type => "timestamp"
  }
}

filter {
  if [fields][logtype] == "apache" {
    grok {
      match => { "message" => "%{COMBINEDAPACHELOG}" }
    }
    date {
      match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
    }
  }
  
  mutate {
    convert => { "price" => "float" }
    remove_field => ["password", "secret"]
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "logs-%{+YYYY.MM.dd}"
    user => "elastic"
    password => "changeme"
  }
  
  if [type] == "products" {
    elasticsearch {
      hosts => ["localhost:9200"]
      index => "products"
      document_id => "%{id}"
    }
  }
}

======== Filebeat Configuration ==========
# filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/*.log
  fields:
    logtype: syslog
  fields_under_root: true

output.elasticsearch:
  hosts => ["localhost:9200"]
  username: "elastic"
  password: "changeme"
  index: "filebeat-%{[agent.version]}-%{+yyyy.MM.dd}"

setup.kibana:
  host: "localhost:5601"

======== Metricbeat Configuration ==========
# metricbeat.yml
metricbeat.modules:
- module: system
  metricsets:
    - cpu
    - memory
    - network
    - diskio
    - filesystem
  enabled: true
  period: 10s

output.elasticsearch:
  hosts: ["localhost:9200"]
  username: "elastic"
  password: "changeme"

======== Python Client Integration ==========
# Python script
from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk

# Connect to Elasticsearch
es = Elasticsearch(
    ["localhost:9200"],
    http_auth=('elastic', 'changeme')
)

# Index document
es.index(
    index="my_index",
    id=1,
    body={"name": "Product 1", "price": 29.99}
)

# Bulk indexing
actions = [
    {
        "_index": "my_index",
        "_source": {"name": f"Product {i}", "price": i * 10}
    }
    for i in range(1000)
]

bulk(es, actions)

======== Kafka Integration ==========
# Elasticsearch sink connector configuration
{
  "name": "elasticsearch-sink",
  "config": {
    "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",
    "tasks.max": "1",
    "topics": "my-topic",
    "connection.url": "http://localhost:9200",
    "type.name": "_doc",
    "key.ignore": "true",
    "schema.ignore": "true"
  }
}`,
        },
      ],
    },
  ],
};
