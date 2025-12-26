import { Database } from 'lucide-react';

export const dynamodbCheatsheet = {
  id: 'dynamodb',
  name: 'Amazon DynamoDB',
  description: 'Master Amazon DynamoDB from basics to expert operations (2024 Edition)',
  icon: Database,
  colorTheme: 'orange' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Amazon DynamoDB',
      commands: [
        {
          command: 'DynamoDB Overview',
          description: 'Introduction to DynamoDB concepts',
          usage: 'Understanding DynamoDB fundamentals',
          example: `DynamoDB Overview:
- Fully managed NoSQL database service
- Single-digit millisecond latency at any scale
- Automatic scaling based on traffic
- Multi-region replication with Global Tables
- ACID transactions support
- Serverless architecture (no servers to manage)
- Pay-per-request pricing with on-demand mode`,
        },
        {
          command: 'Key Concepts',
          description: 'Core DynamoDB concepts',
          usage: 'Understanding DynamoDB terminology',
          example: `Core Concepts:
- Tables: Data containers with items and attributes
- Items: Individual records (like rows)
- Attributes: Data fields (like columns)
- Primary Key: Unique identifier (partition key + optional sort key)
- Secondary Indexes: Alternative query patterns
- Streams: Ordered flow of item changes
- DAX: In-memory caching accelerator`,
        },
        {
          command: 'Architecture Benefits',
          description: 'Advantages of DynamoDB architecture',
          usage: 'Why choose DynamoDB',
          example: `Architecture Benefits:
- Serverless: No infrastructure management
- Automatic scaling: Handles traffic spikes automatically
- High availability: Built-in multi-AZ replication
- Security: VPC integration, encryption at rest and in transit
- Backup and restore: Point-in-time recovery
- Event streaming: Change data capture with DynamoDB Streams
- AWS integration: Lambda, Glue, SageMaker, AppSync`,
        },
        {
          command: 'DynamoDB Data Types',
          description: 'Supported data types in DynamoDB',
          usage: 'Data type definitions',
          example: `DynamoDB Data Types:
Scalar Types:
- String (S): UTF-8 encoded text
- Number (N): Numeric values
- Binary (B): Binary data
- Boolean (BOOL): true/false
- Null (NULL): null values

Document Types:
- List (L): Ordered collection of values
- Map (M): Collection of key-value pairs

Set Types:
- String Set (SS): Set of strings
- Number Set (NS): Set of numbers
- Binary Set (BS): Set of binary data`,
        },
        {
          command: 'Install AWS CLI',
          description: 'Install AWS Command Line Interface',
          usage: 'AWS CLI installation',
          example: `# Install AWS CLI on Linux/macOS
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Install on Windows
# Download and run MSI installer from https://aws.amazon.com/cli/

# Verify installation
aws --version

# Configure credentials
aws configure`,
        },
        {
          command: 'Setup DynamoDB Local',
          description: 'Install DynamoDB Local for development',
          usage: 'Local development setup',
          example: `# Download DynamoDB Local
wget https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip
unzip dynamodb_local_latest.zip
cd dynamodb_local_latest

# Start DynamoDB Local
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

# Start with specific port
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -port 8000

# Use with AWS CLI
aws dynamodb list-tables --endpoint-url http://localhost:8000`,
        },
        {
          command: 'Create Table Basic',
          description: 'Create a basic DynamoDB table',
          usage: 'aws dynamodb create-table',
          example: `aws dynamodb create-table \\
    --table-name Users \\
    --attribute-definitions \\
        AttributeName=userId,AttributeType=S \\
    --key-schema \\
        AttributeName=userId,KeyType=HASH \\
    --billing-mode PAY_PER_REQUEST`,
        },
        {
          command: 'Create Table with Sort Key',
          description: 'Create table with composite primary key',
          usage: 'Composite primary key creation',
          example: `aws dynamodb create-table \\
    --table-name UserPosts \\
    --attribute-definitions \\
        AttributeName=userId,AttributeType=S \\
        AttributeName=postId,AttributeType=S \\
    --key-schema \\
        AttributeName=userId,KeyType=HASH \\
        AttributeName=postId,KeyType=RANGE \\
    --billing-mode PAY_PER_REQUEST`,
        },
        {
          command: 'Create Table with Provisioned Throughput',
          description: 'Create table with provisioned capacity',
          usage: 'Provisioned mode table creation',
          example: `aws dynamodb create-table \\
    --table-name Products \\
    --attribute-definitions \\
        AttributeName=productId,AttributeType=S \\
    --key-schema \\
        AttributeName=productId,KeyType=HASH \\
    --billing-mode PROVISIONED \\
    --provisioned-throughput \\
        ReadCapacityUnits=5,WriteCapacityUnits=5`,
        },
        {
          command: 'List Tables',
          description: 'List all DynamoDB tables',
          usage: 'aws dynamodb list-tables',
          example: `# List all tables
aws dynamodb list-tables

# List with pagination
aws dynamodb list-tables --starting-table-name Users

# List with limit
aws dynamodb list-tables --max-items 10`,
        },
        {
          command: 'Describe Table',
          description: 'Get table information',
          usage: 'aws dynamodb describe-table',
          example: `# Describe table
aws dynamodb describe-table --table-name Users

# Get specific information
aws dynamodb describe-table --table-name Users --query Table.TableStatus

# Get table size
aws dynamodb describe-table --table-name Users --query Table.TableSizeBytes`,
        },
        {
          command: 'Put Item',
          description: 'Insert single item into table',
          usage: 'aws dynamodb put-item',
          example: `aws dynamodb put-item \\
    --table-name Users \\
    --item '{
        "userId": {"S": "user123"},
        "username": {"S": "john_doe"},
        "email": {"S": "john@example.com"},
        "age": {"N": "25"},
        "active": {"BOOL": true}
    }'`,
        },
        {
          command: 'Put Item with Condition',
          description: 'Insert item with condition check',
          usage: 'Conditional put-item',
          example: `aws dynamodb put-item \\
    --table-name Users \\
    --item '{
        "userId": {"S": "user123"},
        "username": {"S": "john_doe"},
        "email": {"S": "john@example.com"}
    }' \\
    --condition-expression "attribute_not_exists(userId)"`,
        },
        {
          command: 'Get Item',
          description: 'Retrieve single item from table',
          usage: 'aws dynamodb get-item',
          example: `# Get item
aws dynamodb get-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}'

# Get specific attributes
aws dynamodb get-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}' \\
    --projection-expression "username, email"`,
        },
        {
          command: 'Update Item',
          description: 'Update existing item',
          usage: 'aws dynamodb update-item',
          example: `aws dynamodb update-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}' \\
    --update-expression "SET email = :newEmail, age = :newAge" \\
    --expression-attribute-values '{
        ":newEmail": {"S": "newemail@example.com"},
        ":newAge": {"N": "26"}
    }' \\
    --return-values ALL_NEW`,
        },
        {
          command: 'Delete Item',
          description: 'Delete item from table',
          usage: 'aws dynamodb delete-item',
          example: `aws dynamodb delete-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}'

# Delete with condition
aws dynamodb delete-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}' \\
    --condition-expression "age < :maxAge" \\
    --expression-attribute-values '{":maxAge": {"N": "30"}}'`,
        },
        {
          command: 'Delete Table',
          description: 'Delete DynamoDB table',
          usage: 'aws dynamodb delete-table',
          example: `# Delete table
aws dynamodb delete-table --table-name Users

# Delete with confirmation
aws dynamodb delete-table --table-name Users --no-cli-pager`,
        },
      ],
    },
    {
      title: 'DynamoDB Query Operations',
      commands: [
        {
          command: 'Query Table Basic',
          description: 'Query items using partition key',
          usage: 'aws dynamodb query',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'`,
        },
        {
          command: 'Query with Sort Key',
          description: 'Query with partition and sort key',
          usage: 'Composite key query',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid AND postId > :pid" \\
    --expression-attribute-values '{
        ":uid": {"S": "user123"},
        ":pid": {"S": "post_001"}
    }'`,
        },
        {
          command: 'Query with Filter',
          description: 'Query with additional filters',
          usage: 'Filter expressions',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --filter-expression "contains(title, :keyword)" \\
    --expression-attribute-values '{
        ":uid": {"S": "user123"},
        ":keyword": {"S": "DynamoDB"}
    }'`,
        },
        {
          command: 'Query with Projection',
          description: 'Query specific attributes',
          usage: 'Projection expressions',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --projection-expression "postId, title, createdAt" \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'`,
        },
        {
          command: 'Query with Limit',
          description: 'Limit query results',
          usage: 'Limit and pagination',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --limit 10 \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'`,
        },
        {
          command: 'Query Scan Index Forward',
          description: 'Control sort order',
          usage: 'scan-index-forward parameter',
          example: `# Query in descending order
aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --scan-index-forward false \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'

# Query in ascending order (default)
aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --scan-index-forward true \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'`,
        },
        {
          command: 'Query with Consistent Read',
          description: 'Use consistent reads',
          usage: 'consistent-read parameter',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --key-condition-expression "userId = :uid" \\
    --consistent-read \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'`,
        },
      ],
    },
    {
      title: 'DynamoDB Scan Operations',
      commands: [
        {
          command: 'Scan Table Basic',
          description: 'Scan entire table',
          usage: 'aws dynamodb scan',
          example: `# Scan entire table
aws dynamodb scan --table-name Users

# Scan with limit
aws dynamodb scan --table-name Users --limit 100`,
        },
        {
          command: 'Scan with Filter',
          description: 'Scan with filter expression',
          usage: 'Filter expressions in scan',
          example: `aws dynamodb scan \\
    --table-name Users \\
    --filter-expression "age > :minAge" \\
    --expression-attribute-values '{":minAge": {"N": "25"}}'`,
        },
        {
          command: 'Scan with Projection',
          description: 'Scan specific attributes',
          usage: 'Projection in scan',
          example: `aws dynamodb scan \\
    --table-name Users \\
    --projection-expression "username, email, age"`,
        },
        {
          command: 'Scan with Pagination',
          description: 'Handle large scan results',
          usage: 'Pagination in scan',
          example: `# First page
aws dynamodb scan --table-name Users --max-items 100

# Next page with exclusive start key
aws dynamodb scan \\
    --table-name Users \\
    --exclusive-start-key '{"userId": {"S": "last_user_id"}}'`,
        },
        {
          command: 'Parallel Scan',
          description: 'Parallel scan for performance',
          usage: 'Total segments parameter',
          example: `# Parallel scan segment 1 of 4
aws dynamodb scan \\
    --table-name Users \\
    --segment 1 \\
    --total-segments 4

# Parallel scan segment 2 of 4
aws dynamodb scan \\
    --table-name Users \\
    --segment 2 \\
    --total-segments 4`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'DynamoDB Secondary Indexes',
      commands: [
        {
          command: 'Create Global Secondary Index',
          description: 'Create GSI on table',
          usage: 'Global Secondary Index creation',
          example: `aws dynamodb create-table \\
    --table-name Users \\
    --attribute-definitions \\
        AttributeName=userId,AttributeType=S \\
        AttributeName=email,AttributeType=S \\
    --key-schema \\
        AttributeName=userId,KeyType=HASH \\
    --global-secondary-indexes '[
        {
            "IndexName": "EmailIndex",
            "KeySchema": [
                {"AttributeName":"email","KeyType":"HASH"}
            ],
            "Projection": {"ProjectionType":"ALL"},
            "ProvisionedThroughput": {"ReadCapacityUnits":5,"WriteCapacityUnits":5}
        }
    ]' \\
    --billing-mode PROVISIONED \\
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5`,
        },
        {
          command: 'Create Local Secondary Index',
          description: 'Create LSI on table',
          usage: 'Local Secondary Index creation',
          example: `aws dynamodb create-table \\
    --table-name UserPosts \\
    --attribute-definitions \\
        AttributeName=userId,AttributeType=S \\
        AttributeName=postId,AttributeType=S \\
        AttributeName=createdAt,AttributeType=S \\
    --key-schema \\
        AttributeName=userId,KeyType=HASH \\
        AttributeName=postId,KeyType=RANGE \\
    --local-secondary-indexes '[
        {
            "IndexName": "CreatedAtIndex",
            "KeySchema": [
                {"AttributeName":"userId","KeyType":"HASH"},
                {"AttributeName":"createdAt","KeyType":"RANGE"}
            ],
            "Projection": {"ProjectionType":"ALL"}
        }
    ]' \\
    --billing-mode PROVISIONED \\
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5`,
        },
        {
          command: 'Query GSI',
          description: 'Query Global Secondary Index',
          usage: 'Query with index-name parameter',
          example: `aws dynamodb query \\
    --table-name Users \\
    --index-name EmailIndex \\
    --key-condition-expression "email = :email" \\
    --expression-attribute-values '{":email": {"S": "john@example.com"}}'`,
        },
        {
          command: 'Query LSI',
          description: 'Query Local Secondary Index',
          usage: 'Query Local Secondary Index',
          example: `aws dynamodb query \\
    --table-name UserPosts \\
    --index-name CreatedAtIndex \\
    --key-condition-expression "userId = :uid AND createdAt >= :date" \\
    --expression-attribute-values '{
        ":uid": {"S": "user123"},
        ":date": {"S": "2024-01-01"}
    }'`,
        },
        {
          command: 'Update GSI',
          description: 'Update Global Secondary Index',
          usage: 'Update index throughput',
          example: `aws dynamodb update-table \\
    --table-name Users \\
    --global-secondary-index-updates '[
        {
            "Update": {
                "IndexName": "EmailIndex",
                "ProvisionedThroughput": {
                    "ReadCapacityUnits": 10,
                    "WriteCapacityUnits": 10
                }
            }
        }
    ]'`,
        },
        {
          command: 'Delete GSI',
          description: 'Delete Global Secondary Index',
          usage: 'Remove GSI from table',
          example: `aws dynamodb update-table \\
    --table-name Users \\
    --global-secondary-index-updates '[
        {
            "Delete": {
                "IndexName": "EmailIndex"
            }
        }
    ]'`,
        },
      ],
    },
    {
      title: 'DynamoDB Batch Operations',
      commands: [
        {
          command: 'Batch Get Item',
          description: 'Retrieve multiple items',
          usage: 'aws dynamodb batch-get-item',
          example: `aws dynamodb batch-get-item \\
    --request-items '{
        "Users": {
            "Keys": [
                {"userId": {"S": "user123"}},
                {"userId": {"S": "user456"}}
            ],
            "ProjectionExpression": "username, email"
        }
    }'`,
        },
        {
          command: 'Batch Write Item',
          description: 'Write multiple items',
          usage: 'aws dynamodb batch-write-item',
          example: `aws dynamodb batch-write-item \\
    --request-items '{
        "Users": [
            {
                "PutRequest": {
                    "Item": {
                        "userId": {"S": "user789"},
                        "username": {"S": "new_user"},
                        "email": {"S": "new@example.com"}
                    }
                }
            },
            {
                "DeleteRequest": {
                    "Key": {"userId": {"S": "old_user"}}
                }
            }
        ]
    }'`,
        },
        {
          command: 'Batch Write with Multiple Tables',
          description: 'Write to multiple tables',
          usage: 'Cross-table batch operations',
          example: `aws dynamodb batch-write-item \\
    --request-items '{
        "Users": [
            {
                "PutRequest": {
                    "Item": {
                        "userId": {"S": "user123"},
                        "username": {"S": "john"}
                    }
                }
            }
        ],
        "UserPosts": [
            {
                "PutRequest": {
                    "Item": {
                        "userId": {"S": "user123"},
                        "postId": {"S": "post_001"},
                        "title": {"S": "Hello World"}
                    }
                }
            }
        ]
    }'`,
        },
        {
          command: 'Batch Operation Limits',
          description: 'Understanding batch operation limits',
          usage: 'Batch operation constraints',
          example: `Batch Operation Limits:
- BatchGetItem: Maximum 100 items total
- BatchWriteItem: Maximum 25 write operations total
- Item size limit: 400 KB per item
- Request size limit: 16 MB per request
- Unprocessed items: Check for failed operations
- Retry strategy: Implement exponential backoff`,
        },
      ],
    },
    {
      title: 'DynamoDB Conditional Operations',
      commands: [
        {
          command: 'Conditional Put',
          description: 'Put item with conditions',
          usage: 'Condition expressions',
          example: `aws dynamodb put-item \\
    --table-name Users \\
    --item '{
        "userId": {"S": "user123"},
        "username": {"S": "john_doe"},
        "email": {"S": "john@example.com"}
    }' \\
    --condition-expression "attribute_not_exists(userId) AND email <> :reserved" \\
    --expression-attribute-values '{":reserved": {"S": "admin@example.com"}}'`,
        },
        {
          command: 'Conditional Update',
          description: 'Update with conditions',
          usage: 'Conditional update expressions',
          example: `aws dynamodb update-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}' \\
    --update-expression "SET age = age + :inc" \\
    --condition-expression "age < :maxAge" \\
    --expression-attribute-values '{
        ":inc": {"N": "1"},
        ":maxAge": {"N": "30"}
    }'`,
        },
        {
          command: 'Conditional Delete',
          description: 'Delete with conditions',
          usage: 'Conditional delete operations',
          example: `aws dynamodb delete-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}' \\
    --condition-expression "active = :false OR lastLogin < :cutoff" \\
    --expression-attribute-values '{
        ":false": {"BOOL": false},
        ":cutoff": {"S": "2024-01-01"}
    }'`,
        },
        {
          command: 'Condition Expression Functions',
          description: 'Use functions in conditions',
          usage: 'Built-in condition functions',
          example: `aws dynamodb update-item \\
    --table-name Users \\
    --key '{"userId": {"S": "user123"}}' \\
    --update-expression "SET #tags = list_append(#tags, :newTag)" \\
    --condition-expression "size(#tags) < :maxTags" \\
    --expression-attribute-names '{"#tags": "tags"}' \\
    --expression-attribute-values '{
        ":newTag": {"L": [{"S": "premium"}]},
        ":maxTags": {"N": "10"}
    }'`,
        },
      ],
    },
    {
      title: 'DynamoDB Transactions',
      commands: [
        {
          command: 'Transact Get Items',
          description: 'Transactional read operations',
          usage: 'aws dynamodb transact-get-items',
          example: `aws dynamodb transact-get-items \\
    --transact-items '[
        {
            "Get": {
                "Key": {"userId": {"S": "user123"}},
                "TableName": "Users"
            }
        },
        {
            "Get": {
                "Key": {"userId": {"S": "user456"}, "postId": {"S": "post_001"}},
                "TableName": "UserPosts"
            }
        }
    ]'`,
        },
        {
          command: 'Transact Write Items',
          description: 'Transactional write operations',
          usage: 'aws dynamodb transact-write-items',
          example: `aws dynamodb transact-write-items \\
    --transact-items '[
        {
            "Update": {
                "Key": {"userId": {"S": "user123"}},
                "TableName": "Users",
                "UpdateExpression": "SET balance = balance - :amount",
                "ConditionExpression": "balance >= :amount",
                "ExpressionAttributeValues": {":amount": {"N": "100"}}
            }
        },
        {
            "Update": {
                "Key": {"userId": {"S": "user456"}},
                "TableName": "Users",
                "UpdateExpression": "SET balance = balance + :amount",
                "ExpressionAttributeValues": {":amount": {"N": "100"}}
            }
        }
    ]'`,
        },
        {
          command: 'Condition Check in Transaction',
          description: 'Condition check in transaction',
          usage: 'ConditionCheck operation',
          example: `aws dynamodb transact-write-items \\
    --transact-items '[
        {
            "ConditionCheck": {
                "Key": {"productId": {"S": "prod123"}},
                "TableName": "Products",
                "ConditionExpression": "stock > :minStock",
                "ExpressionAttributeValues": {":minStock": {"N": "5"}}
            }
        },
        {
            "Update": {
                "Key": {"productId": {"S": "prod123"}},
                "TableName": "Products",
                "UpdateExpression": "SET stock = stock - :quantity",
                "ExpressionAttributeValues": {":quantity": {"N": "1"}}
            }
        }
    ]'`,
        },
        {
          command: 'Transaction Limits',
          description: 'Understanding transaction limits',
          usage: 'Transaction constraints',
          example: `Transaction Limits:
- TransactGetItems: Maximum 25 items
- TransactWriteItems: Maximum 100 action items
- Item size limit: 400 KB per item
- Transaction timeout: 30 seconds
- Capacity consumption: 2x read/write units
- Conflict handling: Automatic retry with exponential backoff`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'DynamoDB Streams',
      commands: [
        {
          command: 'Enable Streams',
          description: 'Enable DynamoDB Streams',
          usage: 'Stream specification',
          example: `aws dynamodb update-table \\
    --table-name Users \\
    --stream-specification StreamEnabled=true,StreamViewType=NEW_AND_OLD_IMAGES`,
        },
        {
          command: 'Describe Streams',
          description: 'Get stream information',
          usage: 'aws dynamodb describe-stream',
          example: `# Get stream ARN
aws dynamodb describe-table --table-name Users --query Table.LatestStreamArn

# Describe stream
aws dynamodb describe-stream \\
    --stream-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/stream/2024-01-01T00:00:00.000`,
        },
        {
          command: 'List Stream Records',
          description: 'Read stream records',
          usage: 'aws dynamodb get-shard-iterator',
          example: `# Get shard iterator
aws dynamodb get-shard-iterator \\
    --stream-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/stream/2024-01-01T00:00:00.000 \\
    --shard-id shardId-00000001234567890 \\
    --shard-iterator-type TRIM_HORIZON

# Get records
aws dynamodb get-records \\
    --shard-iterator AAAAAAAAAAAAAAAAA...`,
        },
        {
          command: 'Stream View Types',
          description: 'Different stream view types',
          usage: 'StreamViewType options',
          example: `Stream View Types:
- KEYS_ONLY: Only key attributes
- NEW_IMAGE: Item after modification
- OLD_IMAGE: Item before modification
- NEW_AND_OLD_IMAGES: Both before and after

# Update stream view type
aws dynamodb update-table \\
    --table-name Users \\
    --stream-specification StreamEnabled=true,StreamViewType=NEW_IMAGE`,
        },
        {
          command: 'Lambda Integration',
          description: 'Process streams with Lambda',
          usage: 'Lambda trigger setup',
          example: `# Create Lambda trigger
aws lambda create-event-source-mapping \\
    --function-name ProcessDynamoDBStream \\
    --event-source-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/stream/2024-01-01T00:00:00.000 \\
    --starting-position TRIM_HORIZON \\
    --batch-size 100`,
        },
      ],
    },
    {
      title: 'DynamoDB TTL',
      commands: [
        {
          command: 'Enable TTL',
          description: 'Enable Time to Live',
          usage: 'aws dynamodb update-time-to-live',
          example: `aws dynamodb update-time-to-live \\
    --table-name Sessions \\
    --time-to-live-specification "Enabled=true,AttributeName=expiresAt"`,
        },
        {
          command: 'Describe TTL',
          description: 'Get TTL configuration',
          usage: 'aws dynamodb describe-time-to-live',
          example: `aws dynamodb describe-time-to-live --table-name Sessions`,
        },
        {
          command: 'Disable TTL',
          description: 'Disable Time to Live',
          usage: 'Disable TTL on table',
          example: `aws dynamodb update-time-to-live \\
    --table-name Sessions \\
    --time-to-live-specification "Enabled=false"`,
        },
        {
          command: 'TTL Best Practices',
          description: 'TTL usage guidelines',
          usage: 'TTL optimization tips',
          example: `TTL Best Practices:
- Use Unix timestamp format (seconds since epoch)
- Set TTL in the future (not past)
- Monitor TTL deletions with CloudWatch
- Use appropriate TTL values (not too short/long)
- Consider backup requirements
- Test TTL behavior in development
- Document TTL attribute names
- Use consistent TTL attribute naming`,
        },
      ],
    },
    {
      title: 'DynamoDB DAX',
      commands: [
        {
          command: 'Create DAX Cluster',
          description: 'Create DAX cluster',
          usage: 'aws dax create-cluster',
          example: `aws dax create-cluster \\
    --cluster-name my-dax-cluster \\
    --node-type dax.r4.large \\
    --replication-factor 3 \\
    --iam-role-arn arn:aws:iam::123456789012:role/DAXServiceRole \\
    --subnet-group-name default \\
    --security-group-ids sg-12345678`,
        },
        {
          command: 'Configure DAX Client',
          description: 'Use DAX in application',
          usage: 'DAX client configuration',
          example: `# Python Boto3 with DAX
import boto3
from boto3.dynamodb.conditions import Key

# Create DAX client
dax = boto3.resource('dax', region_name='us-east-1', endpoint_url='my-dax-cluster.abcdef.dax-clusters.us-east-1.amazonaws.com')

# Use DAX table
table = dax.Table('Users')
response = table.get_item(Key={'userId': 'user123'})`,
        },
        {
          command: 'DAX Performance',
          description: 'DAX performance optimization',
          usage: 'DAX tuning tips',
          example: `DAX Performance Tips:
- Use DAX for read-heavy workloads
- Cache frequently accessed items
- Monitor cache hit/miss ratios
- Choose appropriate node types
- Set proper TTL for cache items
- Use consistent reads when needed
- Monitor DAX CloudWatch metrics
- Consider multi-AZ deployment`,
        },
      ],
    },
    {
      title: 'DynamoDB Global Tables',
      commands: [
        {
          command: 'Create Global Table',
          description: 'Create multi-region table',
          usage: 'aws dynamodb create-global-table',
          example: `aws dynamodb create-global-table \\
    --global-table-name GlobalUsers \\
    --replication-group '[
        {"RegionName": "us-east-1"},
        {"RegionName": "us-west-2"},
        {"RegionName": "eu-west-1"}
    ]'`,
        },
        {
          command: 'Add Replica Region',
          description: 'Add replica to global table',
          usage: 'aws dynamodb update-table',
          example: `aws dynamodb update-table \\
    --table-name GlobalUsers \\
    --replica-updates '[
        {"Create": {"RegionName": "ap-southeast-1"}}
    ]'`,
        },
        {
          command: 'Remove Replica Region',
          description: 'Remove replica from global table',
          usage: 'Remove global table replica',
          example: `aws dynamodb update-table \\
    --table-name GlobalUsers \\
    --replica-updates '[
        {"Delete": {"RegionName": "ap-southeast-1"}}
    ]'`,
        },
        {
          command: 'Describe Global Table',
          description: 'Get global table information',
          usage: 'aws dynamodb describe-global-table',
          example: `aws dynamodb describe-global-table \\
    --global-table-name GlobalUsers`,
        },
        {
          command: 'Global Table Best Practices',
          description: 'Global table optimization',
          usage: 'Multi-region optimization',
          example: `Global Table Best Practices:
- Use for active-active workloads
- Consider write cost implications
- Monitor replica lag
- Use appropriate capacity per region
- Implement conflict resolution
- Test cross-region failover
- Consider data residency requirements
- Monitor inter-region traffic costs`,
        },
      ],
    },
    {
      title: 'DynamoDB Backup and Restore',
      commands: [
        {
          command: 'Create On-Demand Backup',
          description: 'Create on-demand backup',
          usage: 'aws dynamodb create-backup',
          example: `aws dynamodb create-backup \\
    --table-name Users \\
    --backup-name Users-backup-2024-01-01`,
        },
        {
          command: 'List Backups',
          description: 'List available backups',
          usage: 'aws dynamodb list-backups',
          example: `# List all backups
aws dynamodb list-backups

# List backups for specific table
aws dynamodb list-backups --table-name Users

# List backups with time range
aws dynamodb list-backups \\
    --time-range-upper-bound 2024-01-01T00:00:00 \\
    --backup-type USER`,
        },
        {
          command: 'Describe Backup',
          description: 'Get backup details',
          usage: 'aws dynamodb describe-backup',
          example: `aws dynamodb describe-backup \\
    --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/backup/01234567890123456789`,
        },
        {
          command: 'Delete Backup',
          description: 'Delete backup',
          usage: 'aws dynamodb delete-backup',
          example: `aws dynamodb delete-backup \\
    --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/backup/01234567890123456789`,
        },
        {
          command: 'Restore from Backup',
          description: 'Restore table from backup',
          usage: 'aws dynamodb restore-table-from-backup',
          example: `aws dynamodb restore-table-from-backup \\
    --target-table-name Users-restored \\
    --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/backup/01234567890123456789 \\
    --billing-mode PAY_PER_REQUEST`,
        },
        {
          command: 'Enable Point-in-Time Recovery',
          description: 'Enable PITR',
          usage: 'aws dynamodb enable-point-in-time-recovery',
          example: `aws dynamodb enable-point-in-time-recovery \\
    --table-name Users`,
        },
        {
          command: 'Describe Point-in-Time Recovery',
          description: 'Get PITR status',
          usage: 'aws dynamodb describe-continuous-backups',
          example: `aws dynamodb describe-continuous-backups --table-name Users`,
        },
        {
          command: 'Restore to Point in Time',
          description: 'Restore to specific time',
          usage: 'aws dynamodb restore-table-to-point-in-time',
          example: `aws dynamodb restore-table-to-point-in-time \\
    --source-table-name Users \\
    --target-table-name Users-pitr \\
    --restore-date-time 2024-01-01T12:00:00Z \\
    --billing-mode PAY_PER_REQUEST`,
        },
        {
          command: 'Disable Point-in-Time Recovery',
          description: 'Disable PITR',
          usage: 'aws dynamodb disable-point-in-time-recovery',
          example: `aws dynamodb disable-point-in-time-recovery \\
    --table-name Users`,
        },
      ],
    },
    {
      title: 'DynamoDB Monitoring',
      commands: [
        {
          command: 'CloudWatch Metrics',
          description: 'Monitor DynamoDB metrics',
          usage: 'CloudWatch monitoring',
          example: `# Get CloudWatch metrics
aws cloudwatch get-metric-statistics \\
    --namespace AWS/DynamoDB \\
    --metric-name ConsumedReadCapacityUnits \\
    --dimensions Name=TableName,Value=Users \\
    --start-time 2024-01-01T00:00:00Z \\
    --end-time 2024-01-01T23:59:59Z \\
    --period 3600 \\
    --statistics Sum

# Key metrics to monitor:
# - ConsumedReadCapacityUnits
# - ConsumedWriteCapacityUnits
# - ReadThrottleEvents
# - WriteThrottleEvents
# - SystemErrors
# - Latency (SuccessfulRequestLatency)`,
        },
        {
          command: 'DynamoDB Metrics',
          description: 'Table-level metrics',
          usage: 'Table performance metrics',
          example: `# Get table metrics
aws dynamodb describe-table --table-name Users

# Monitor table statistics
aws dynamodb list-tables --query TableNames[*]

# Check table status
aws dynamodb describe-table --table-name Users --query Table.TableStatus

# Get item count and size
aws dynamodb describe-table --table-name Users --query Table.ItemCount,Table.TableSizeBytes`,
        },
        {
          command: 'Performance Alerts',
          description: 'Set up CloudWatch alerts',
          usage: 'CloudWatch alarms',
          example: `# Create CloudWatch alarm for throttling
aws cloudwatch put-metric-alarm \\
    --alarm-name DynamoDB-ReadThrottle \\
    --alarm-description "DynamoDB read throttling" \\
    --metric-name ReadThrottleEvents \\
    --namespace AWS/DynamoDB \\
    --statistic Sum \\
    --period 300 \\
    --threshold 10 \\
    --comparison-operator GreaterThanThreshold \\
    --dimensions Name=TableName,Value=Users`,
        },
        {
          command: 'Cost Monitoring',
          description: 'Monitor DynamoDB costs',
          usage: 'Cost optimization',
          example: `# Monitor cost and usage
aws ce get-cost-and-usage \\
    --time-period Start=2024-01-01,End=2024-01-31 \\
    --filter '{
        "Dimensions": {
            "Key": "SERVICE",
            "Values": ["Amazon DynamoDB"]
        }
    }' \\
    --granularity MONTHLY \\
    --metrics BlendedCost

# Cost optimization tips:
# - Use on-demand for unpredictable workloads
# - Enable auto scaling for provisioned mode
# - Use TTL for data lifecycle management
# - Monitor and optimize read/write patterns`,
        },
      ],
    },
    {
      title: 'DynamoDB Security',
      commands: [
        {
          command: 'IAM Policies',
          description: 'Configure IAM policies',
          usage: 'IAM policy examples',
          example: `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem",
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/Users",
            "Condition": {
                "ForAllValues:StringEquals": {
                    "dynamodb:LeadingKeys": ["\\$\\{aws:username\\}"]
                }
            }
        }
    ]
}`,
        },
        {
          command: 'VPC Endpoints',
          description: 'Configure VPC endpoints',
          usage: 'Private connectivity',
          example: `# Create VPC endpoint
aws ec2 create-vpc-endpoint \\
    --vpc-id vpc-12345678 \\
    --service-name com.amazonaws.us-east-1.dynamodb \\
    --vpc-endpoint-type Interface \\
    --subnet-ids subnet-12345678 subnet-87654321 \\
    --security-group-ids sg-12345678 \\
    --private-dns-enabled`,
        },
        {
          command: 'Encryption at Rest',
          description: 'Enable server-side encryption',
          usage: 'SSE configuration',
          example: `# Create table with encryption
aws dynamodb create-table \\
    --table-name SecureUsers \\
    --attribute-definitions AttributeName=userId,AttributeType=S \\
    --key-schema AttributeName=userId,KeyType=HASH \\
    --billing-mode PAY_PER_REQUEST \\
    --sse-specification Enabled=true,SSEType=KMS,KMSMasterKeyId=alias/aws/dynamodb

# Update table encryption
aws dynamodb update-table \\
    --table-name Users \\
    --sse-specification Enabled=true`,
        },
        {
          command: 'Encryption in Transit',
          description: 'Enable TLS encryption',
          usage: 'HTTPS configuration',
          example: `# Force HTTPS in AWS CLI
aws dynamodb list-tables --no-paginate --endpoint-url https://dynamodb.us-east-1.amazonaws.com

# Python Boto3 with TLS
import boto3
dynamodb = boto3.resource('dynamodb', region_name='us-east-1', use_ssl=True)
table = dynamodb.Table('Users')`,
        },
        {
          command: 'Fine-Grained Access Control',
          description: 'Implement fine-grained permissions',
          usage: 'Condition-based access',
          example: `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "dynamodb:UpdateItem",
            "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/Users",
            "Condition": {
                "ForAllValues:StringEquals": {
                    "dynamodb:LeadingKeys": ["\\$\\{aws:username\\}"]
                },
                "StringEquals": {
                    "dynamodb:Attributes": ["email", "profile"]
                }
            }
        }
    ]
}`,
        },
      ],
    },
    {
      title: 'DynamoDB Best Practices',
      commands: [
        {
          command: 'Data Modeling Best Practices',
          description: 'Optimal data modeling patterns',
          usage: 'Modeling guidelines',
          example: `Data Modeling Best Practices:
1. Design for query patterns, not storage
2. Use composite keys for hierarchical data
3. Denormalize for performance
4. Use sparse indexes for infrequent attributes
5. Consider access patterns in key design
6. Use appropriate data types to reduce size
7. Plan for hot partition avoidance
8. Use GSIs for alternative access patterns`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize DynamoDB performance',
          usage: 'Performance optimization',
          example: `Performance Best Practices:
1. Use batch operations when possible
2. Implement exponential backoff for retries
3. Use projection expressions to reduce data transfer
4. Choose appropriate read consistency
5. Monitor and adjust capacity units
6. Use DAX for read-heavy workloads
7. Optimize item size (keep under 1KB when possible)
8. Use parallel scans for large tables`,
        },
        {
          command: 'Cost Optimization',
          description: 'Reduce DynamoDB costs',
          usage: 'Cost optimization strategies',
          example: `Cost Optimization:
1. Use on-demand for unpredictable workloads
2. Enable auto scaling for provisioned mode
3. Use TTL for automatic data cleanup
4. Archive old data to S3
5. Use DAX to reduce read capacity
6. Monitor and optimize read/write patterns
7. Use reserved capacity for steady workloads
8. Enable point-in-time recovery only when needed`,
        },
        {
          command: 'Security Best Practices',
          description: 'Secure DynamoDB implementations',
          usage: 'Security guidelines',
          example: `Security Best Practices:
1. Use IAM policies for least privilege access
2. Enable server-side encryption
3. Use VPC endpoints for private connectivity
4. Implement fine-grained access controls
5. Monitor CloudTrail for API calls
6. Use condition-based policies
7. Regularly rotate access keys
8. Enable VPC flow logs`,
        },
      ],
    },
    {
      title: 'DynamoDB Troubleshooting',
      commands: [
        {
          command: 'Common Issues',
          description: 'Diagnose common problems',
          usage: 'Troubleshooting guide',
          example: `Common Issues:
1. Throttling errors
   - Check consumed capacity vs provisioned
   - Implement auto scaling
   - Use exponential backoff

2. Hot partitions
   - Distribute keys evenly
   - Add random prefixes
   - Use composite keys

3. High latency
   - Check network connectivity
   - Use consistent reads
   - Consider DAX implementation

4. Unprocessed items
   - Check batch operation sizes
   - Implement retry logic
   - Monitor capacity limits`,
        },
        {
          command: 'Debug Queries',
          description: 'Debug query performance',
          usage: 'Query optimization',
          example: `# Debug slow queries
aws dynamodb query \\
    --table-name Users \\
    --key-condition-expression "userId = :uid" \\
    --return-consumed-capacity TOTAL \\
    --expression-attribute-values '{":uid": {"S": "user123"}}'

# Monitor consumed capacity
aws cloudwatch get-metric-statistics \\
    --namespace AWS/DynamoDB \\
    --metric-name ConsumedReadCapacityUnits \\
    --dimensions Name=TableName,Value=Users \\
    --period 60`,
        },
        {
          command: 'Recovery Procedures',
          description: 'Recover from failures',
          usage: 'Disaster recovery',
          example: `# Restore from backup
aws dynamodb restore-table-from-backup \\
    --target-table-name Users-recovered \\
    --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/Users/backup/01234567890123456789

# Point-in-time recovery
aws dynamodb restore-table-to-point-in-time \\
    --source-table-name Users \\
    --target-table-name Users-pitr \\
    --restore-date-time 2024-01-01T12:00:00Z

# Enable global table for multi-region DR
aws dynamodb create-global-table \\
    --global-table-name GlobalUsers \\
    --replication-group '[{"RegionName": "us-east-1"},{"RegionName": "us-west-2"}]'`,
        },
      ],
    },
  ],
};
