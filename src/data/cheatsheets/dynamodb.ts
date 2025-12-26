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
          command: 'DynamoDB Introduction',
          description: 'Understanding DynamoDB concepts and architecture',
          usage: 'Basic DynamoDB terminology and concepts',
          example: `# Amazon DynamoDB is a fully managed NoSQL database service

======== Key Concepts ==========
# NoSQL Database: Non-relational, schema-less data model
# Fully Managed: AWS handles infrastructure, scaling, and maintenance
# High Performance: Single-digit millisecond latency at any scale
# Auto Scaling: Automatically adjusts capacity based on traffic
# Global Tables: Multi-region, multi-active replication
# ACID Transactions: Supports ACID transactions for complex operations
# On-Demand Mode: Pay per request, no capacity planning required
# Provisioned Mode: Specify read/write capacity for predictable performance

======== Architecture Benefits ==========
# Serverless: No servers to manage or patch
# Automatic Scaling: Scales up and down automatically
# High Availability: Built-in multi-AZ replication
# Security: VPC integration, encryption at rest and in transit
# Backup and Restore: Point-in-time recovery and on-demand backups
# Event Streaming: Change data capture with DynamoDB Streams
# Integration: Seamless integration with AWS services
- AWS Lambda for serverless computing
- AWS Glue for ETL operations
- Amazon SageMaker for machine learning
- AWS AppSync for GraphQL APIs

======== DynamoDB Components ==========
# Tables: Data containers with items and attributes
# Items: Individual records in a table (like rows)
# Attributes: Data fields within items (like columns)
# Primary Key: Unique identifier for items (partition key + optional sort key)
# Secondary Indexes: Alternative query patterns
# Streams: Ordered flow of item changes
# DAX: DynamoDB Accelerator for in-memory caching
# Global Tables: Multi-region replication`,
        },
        {
          command: 'AWS Setup and Installation',
          description: 'Set up AWS environment and DynamoDB access',
          usage: 'AWS CLI, SDK installation, and local DynamoDB',
          example: `# AWS DynamoDB Setup Options

======== AWS CLI Setup ==========
# Install AWS CLI
# Download from: https://aws.amazon.com/cli/

# Configure AWS credentials
aws configure

# Set default region
aws configure set default-region us-east-1

# Verify AWS CLI installation
aws --version
aws dynamodb help

======== Local DynamoDB Setup ==========
# Download DynamoDB Local
# URL: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html

# Extract and run DynamoDB Local
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

# Start DynamoDB Local on specific port
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -port 8000

======== Docker Setup ==========
# Pull DynamoDB Local image
docker pull amazon/dynamodb-local

# Run DynamoDB Local container
docker run -p 8000:8000 amazon/dynamodb-local

# Run with persistent data
docker run -p 8000:8000 -v $(pwd)/dynamodb-data:/data amazon/dynamodb-local

======== SDK Installation ==========
# Python
pip install boto3

# Node.js
npm install @aws-sdk/client-dynamodb

# Java
# Maven dependency:
# <dependency>
#   <groupId>software.amazon.awssdk</groupId>
#   <artifactId>dynamodb</artifactId>
#   <version>2.20.0</version>
# </dependency>

# Go
go get github.com/aws/aws-sdk-go-v2/service/dynamodb

# .NET
dotnet add package AWSSDK.DynamoDBv2

======== Verification ==========
# Test DynamoDB Local connection
aws dynamodb list-tables --endpoint-url http://localhost:8000

# Create test table
aws dynamodb create-table \\
  --table-name TestTable \\
  --attribute-definitions AttributeName=Id,AttributeType=S \\
  --key-schema AttributeName=Id,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST \\
  --endpoint-url http://localhost:8000

# List tables to verify
aws dynamodb list-tables --endpoint-url http://localhost:8000`,
        },
        {
          command: 'Database Connection and Configuration',
          description: 'Connect to DynamoDB from various tools and languages',
          usage: 'AWS CLI, SDK configurations, and connection options',
          example: `# DynamoDB Connection Methods

======== AWS CLI Connection ==========
# Configure for production
aws configure set aws_access_key_id YOUR_ACCESS_KEY
aws configure set aws_secret_access_key YOUR_SECRET_KEY
aws configure set default.region us-west-2

# Configure for local DynamoDB
export AWS_ENDPOINT_URL=http://localhost:8000

# Test connection
aws dynamodb list-tables

# Use specific profile
aws dynamodb list-tables --profile myprofile

======== Python Connection (Boto3) ==========
import boto3

# Connect to AWS DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='us-west-2')

# Connect to local DynamoDB
dynamodb_local = boto3.resource(
    'dynamodb',
    endpoint_url='http://localhost:8000',
    region_name='us-west-2',
    aws_access_key_id='dummy',
    aws_secret_access_key='dummy'
)

# Get table reference
table = dynamodb.Table('MyTable')

======== Node.js Connection (AWS SDK v3) ==========
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// AWS DynamoDB client
const client = new DynamoDBClient({ region: "us-west-2" });

// Local DynamoDB client
const localClient = new DynamoDBClient({
  endpoint: "http://localhost:8000",
  region: "us-west-2",
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy"
  }
});

// Document client for easier object handling
const docClient = DynamoDBDocumentClient.from(client);

======== Java Connection ==========
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;

// AWS DynamoDB client
DynamoDbClient dynamoDbClient = DynamoDbClient.builder()
    .region(Region.US_WEST_2)
    .build();

// Local DynamoDB client
DynamoDbClient localClient = DynamoDbClient.builder()
    .endpointOverride(URI.create("http://localhost:8000"))
    .region(Region.US_WEST_2)
    .build();

======== Configuration Best Practices ==========
# Use environment variables for configuration
export AWS_REGION=us-west-2
export AWS_PROFILE=default

# IAM roles for EC2/ECS (preferred over access keys)
# No hardcoded credentials in code

# Connection pooling and retry configuration
# Exponential backoff for retries
# Circuit breaker pattern for resilience`,
        },
        {
          command: 'Basic Table Operations',
          description: 'Essential table management commands',
          usage: 'Create, update, delete, and list tables',
          example: `# Basic Table Operations in DynamoDB

======== Create Table ==========
# Simple table with partition key
aws dynamodb create-table \\
  --table-name Users \\
  --attribute-definitions \\
    AttributeName=UserId,AttributeType=S \\
  --key-schema \\
    AttributeName=UserId,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST

# Table with composite key (partition + sort key)
aws dynamodb create-table \\
  --table-name Orders \\
  --attribute-definitions \\
    AttributeName=CustomerId,AttributeType=S \\
    AttributeName=OrderId,AttributeType=S \\
  --key-schema \\
    AttributeName=CustomerId,KeyType=HASH \\
    AttributeName=OrderId,KeyType=RANGE \\
  --billing-mode PROVISIONED \\
  --provisioned-throughput \\
    ReadCapacityUnits=5,WriteCapacityUnits=5

# Table with global secondary index
aws dynamodb create-table \\
  --table-name Products \\
  --attribute-definitions \\
    AttributeName=ProductId,AttributeType=S \\
    AttributeName=Category,AttributeType=S \\
    AttributeName=Name,AttributeType=S \\
  --key-schema \\
    AttributeName=ProductId,KeyType=HASH \\
  --global-secondary-indexes \\
    '[{"IndexName":"CategoryIndex","KeySchema":[{"AttributeName":"Category","KeyType":"HASH"}],"Projection":{"ProjectionType":"ALL"}}]' \\
  --billing-mode PAY_PER_REQUEST

======== List and Describe Tables ==========
# List all tables
aws dynamodb list-tables

# List tables with pagination
aws dynamodb list-tables --starting-token TOKEN

# Describe table details
aws dynamodb describe-table --table-name Users

# Get table size and item count
aws dynamodb describe-table --table-name Users --query "Table.ItemCount,Table.TableSizeBytes"

======== Update Table ==========
# Update provisioned throughput
aws dynamodb update-table \\
  --table-name Orders \\
  --provisioned-throughput \\
    ReadCapacityUnits=10,WriteCapacityUnits=10

# Enable auto scaling
aws dynamodb update-table \\
  --table-name Orders \\
  --billing-mode PROVISIONED \\
  --provisioned-throughput \\
    ReadCapacityUnits=5,WriteCapacityUnits=5

# Add global secondary index
aws dynamodb update-table \\
  --table-name Users \\
  --global-secondary-index-updates \\
    '[{"Create":{"IndexName":"EmailIndex","KeySchema":[{"AttributeName":"Email","KeyType":"HASH"}],"Projection":{"ProjectionType":"ALL"}}]'

======== Delete Table ==========
# Delete table (requires confirmation)
aws dynamodb delete-table --table-name Users

# Delete table with specific ARN
aws dynamodb delete-table --table-name arn:aws:dynamodb:us-west-2:123456789012:table/Users

======== Table Monitoring ==========
# Get table metrics
aws cloudwatch get-metric-statistics \\
  --namespace AWS/DynamoDB \\
  --metric-name ConsumedReadCapacityUnits \\
  --dimensions Name=TableName,Value=Users \\
  --start-time 2024-01-01T00:00:00Z \\
  --end-time 2024-01-02T00:00:00Z \\
  --period 3600 \\
  --statistics Sum`,
        },
      ],
    },
    {
      title: 'Basic Data Operations',
      commands: [
        {
          command: 'Create and Read Items',
          description: 'Insert and retrieve data from DynamoDB tables',
          usage: 'PutItem, GetItem, Batch operations',
          example: `# Create and Read Operations in DynamoDB

======== PutItem (Create/Update) ==========
# AWS CLI - Put single item
aws dynamodb put-item \\
  --table-name Users \\
  --item '{
    "UserId": {"S": "user123"},
    "Email": {"S": "user@example.com"},
    "Name": {"S": "John Doe"},
    "Age": {"N": "30"},
    "CreatedAt": {"S": "2024-01-01T12:00:00Z"}
  }'

# Put item with condition (only if not exists)
aws dynamodb put-item \\
  --table-name Users \\
  --item '{
    "UserId": {"S": "user124"},
    "Email": {"S": "newuser@example.com"}
  }' \\
  --condition-expression "attribute_not_exists(UserId)"

# Put item with TTL
aws dynamodb put-item \\
  --table-name Sessions \\
  --item '{
    "SessionId": {"S": "sess123"},
    "UserId": {"S": "user123"},
    "ExpiresAt": {"N": "1704067200"}
  }'

======== GetItem ==========
# Get item by primary key
aws dynamodb get-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }'

# Get specific attributes only
aws dynamodb get-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --projection-expression "Email, Name"

# Get item with consistent read
aws dynamodb get-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --consistent-read

======== Batch Operations ==========
# Batch get multiple items
aws dynamodb batch-get-item \\
  --request-items '{
    "Users": {
      "Keys": [
        {"UserId": {"S": "user123"}},
        {"UserId": {"S": "user124"}}
      ]
    }
  }'

# Batch write multiple items
aws dynamodb batch-write-item \\
  --request-items '{
    "Users": [
      {
        "PutRequest": {
          "Item": {
            "UserId": {"S": "user125"},
            "Email": {"S": "batch@example.com"}
          }
        }
      },
      {
        "DeleteRequest": {
          "Key": {"UserId": {"S": "user126"}}
        }
      }
    ]
  }'

======== Python Examples ==========
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

# Put item
table.put_item(
    Item={
        'UserId': 'user123',
        'Email': 'user@example.com',
        'Name': 'John Doe',
        'Age': 30
    }
)

# Get item
response = table.get_item(
    Key={'UserId': 'user123'}
)
item = response.get('Item')

# Batch get
response = dynamodb.batch_get_item(
    RequestItems={
        'Users': {
            'Keys': [
                {'UserId': 'user123'},
                {'UserId': 'user124'}
            ]
        }
    }
)

======== Node.js Examples ==========
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-west-2" });
const docClient = DynamoDBDocumentClient.from(client);

// Put item
await docClient.send(new PutCommand({
  TableName: 'Users',
  Item: {
    UserId: 'user123',
    Email: 'user@example.com',
    Name: 'John Doe',
    Age: 30
  }
}));

// Get item
const { Item } = await docClient.send(new GetCommand({
  TableName: 'Users',
  Key: { UserId: 'user123' }
}));`,
        },
        {
          command: 'Update and Delete Items',
          description: 'Modify and remove data from DynamoDB tables',
          usage: 'UpdateItem, DeleteItem, conditional operations',
          example: `# Update and Delete Operations in DynamoDB

======== UpdateItem ==========
# Simple update
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #age = :age" \\
  --expression-attribute-names '{"#age": "Age"}' \\
  --expression-attribute-values '{":age": {"N": "31"}}' \\
  --return-values ALL_NEW

# Update with condition
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "ADD #loginCount :inc" \\
  --expression-attribute-names '{"#loginCount": "LoginCount"}' \\
  --expression-attribute-values '{":inc": {"N": "1"}}' \\
  --condition-expression "#loginCount < :max" \\
  --expression-attribute-values '{":max": {"N": "100"}}'

# Update multiple attributes
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #name = :name, #email = :email, #updatedAt = :time" \\
  --expression-attribute-names '{"#name": "Name", "#email": "Email", "#updatedAt": "UpdatedAt"}' \\
  --expression-attribute-values '{
    ":name": {"S": "John Smith"},
    ":email": {"S": "john.smith@example.com"},
    ":time": {"S": "2024-01-01T12:00:00Z"}
  }'

# Add to list attribute
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #tags = list_append(#tags, :newtag)" \\
  --expression-attribute-names '{"#tags": "Tags"}' \\
  --expression-attribute-values '{":newtag": {"L": [{"S": "premium"}]}}'

======== DeleteItem ==========
# Simple delete
aws dynamodb delete-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }'

# Delete with condition
aws dynamodb delete-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --condition-expression "#status = :status" \\
  --expression-attribute-names '{"#status": "Status"}' \\
  --expression-attribute-values '{":status": {"S": "inactive"}}'

# Delete and return old values
aws dynamodb delete-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --return-values ALL_OLD

======== Conditional Operations ==========
# Put if not exists
aws dynamodb put-item \\
  --table-name Users \\
  --item '{
    "UserId": {"S": "user123"},
    "Email": {"S": "user@example.com"}
  }' \\
  --condition-expression "attribute_not_exists(UserId)"

# Update if current value matches
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #version = #version + :inc" \\
  --expression-attribute-names '{"#version": "Version"}' \\
  --expression-attribute-values '{":inc": {"N": "1"}}' \\
  --condition-expression "#version = :current" \\
  --expression-attribute-values '{":current": {"N": "5"}}'

# Delete if attribute exists
aws dynamodb delete-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --condition-expression "attribute_exists(#email)" \\
  --expression-attribute-names '{"#email": "Email"}'

======== Python Examples ==========
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

# Update item
try:
    response = table.update_item(
        Key={'UserId': 'user123'},
        UpdateExpression='SET #age = :age',
        ExpressionAttributeNames={'#age': 'Age'},
        ExpressionAttributeValues={':age': 31},
        ReturnValues='ALL_NEW'
    )
except ClientError as e:
    if e.response['Error']['Code'] == 'ConditionalCheckFailedException':
        print("Condition check failed")

# Delete item with condition
try:
    response = table.delete_item(
        Key={'UserId': 'user123'},
        ConditionExpression='#status = :status',
        ExpressionAttributeNames={'#status': 'Status'},
        ExpressionAttributeValues={':status': 'inactive'}
    )
except ClientError as e:
    print(f"Delete failed: {e}")

======== Atomic Counters ==========
# Increment counter atomically
aws dynamodb update-item \\
  --table-name Counters \\
  --key '{
    "CounterId": {"S": "page_views"}
  }' \\
  --update-expression "ADD #count :inc" \\
  --expression-attribute-names '{"#count": "Count"}' \\
  --expression-attribute-values '{":inc": {"N": "1"}}' \\
  --return-values UPDATED_NEW

# Decrement with minimum value
aws dynamodb update-item \\
  --table-name Inventory \\
  --key '{
    "ProductId": {"S": "prod123"}
  }' \\
  --update-expression "SET #stock = if(#stock > :min, #stock - :dec, #stock)" \\
  --expression-attribute-names '{"#stock": "Stock"}' \\
  --expression-attribute-values '{":min": {"N": "0"}, ":dec": {"N": "1"}}'`,
        },
        {
          command: 'Query and Scan Operations',
          description: 'Retrieve data using queries and scans',
          usage: 'Query, Scan, filtering, and pagination',
          example: `# Query and Scan Operations in DynamoDB

======== Query Operations ==========
# Query by partition key
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid" \\
  --expression-attribute-values '{":cid": {"S": "customer123"}}'

# Query with sort key condition
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid AND OrderDate >= :date" \\
  --expression-attribute-values '{
    ":cid": {"S": "customer123"},
    ":date": {"S": "2024-01-01"}
  }'

# Query with filter
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid" \\
  --filter-expression "#amount > :min" \\
  --expression-attribute-names '{"#amount": "Amount"}' \\
  --expression-attribute-values '{
    ":cid": {"S": "customer123"},
    ":min": {"N": "100"}
  }'

# Query with projection
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid" \\
  --projection-expression "OrderId, OrderDate, TotalAmount"

# Query with pagination
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid" \\
  --limit 10 \\
  --starting-token TOKEN

======== Scan Operations ==========
# Full table scan
aws dynamodb scan \\
  --table-name Users

# Scan with filter
aws dynamodb scan \\
  --table-name Users \\
  --filter-expression "#age >= :min" \\
  --expression-attribute-names '{"#age": "Age"}' \\
  --expression-attribute-values '{":min": {"N": "18"}}'

# Scan with projection
aws dynamodb scan \\
  --table-name Users \\
  --projection-expression "UserId, Email, Name"

# Scan with pagination
aws dynamodb scan \\
  --table-name Users \\
  --limit 100 \\
  --starting-token TOKEN

======== Query Secondary Indexes ==========
# Query global secondary index
aws dynamodb query \\
  --table-name Products \\
  --index-name CategoryIndex \\
  --key-condition-expression "Category = :cat" \\
  --expression-attribute-values '{":cat": {"S": "Electronics"}}'

# Query local secondary index
aws dynamodb query \\
  --table-name Orders \\
  --index-name OrderDateIndex \\
  --key-condition-expression "CustomerId = :cid AND OrderDate BETWEEN :start AND :end" \\
  --expression-attribute-values '{
    ":cid": {"S": "customer123"},
    ":start": {"S": "2024-01-01"},
    ":end": {"S": "2024-01-31"}
  }'

======== Advanced Query Patterns ==========
# Query with multiple conditions
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid AND OrderDate BETWEEN :start AND :end" \\
  --filter-expression "#status = :status AND #amount > :min" \\
  --expression-attribute-names '{
    "#status": "Status",
    "#amount": "TotalAmount"
  }' \\
  --expression-attribute-values '{
    ":cid": {"S": "customer123"},
    ":start": {"S": "2024-01-01"},
    ":end": {"S": "2024-01-31"},
    ":status": {"S": "completed"},
    ":min": {"N": "50"}
  }'

# Query with sorting
aws dynamodb query \\
  --table-name Orders \\
  --key-condition-expression "CustomerId = :cid" \\
  --scan-index-forward false  # Descending order

======== Python Examples ==========
import boto3
from boto3.dynamodb.conditions import Key, And

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Orders')

# Query by partition key
response = table.query(
    KeyConditionExpression=Key('CustomerId').eq('customer123')
)

# Query with range key
response = table.query(
    KeyConditionExpression=Key('CustomerId').eq('customer123') & 
                           Key('OrderDate').gte('2024-01-01')
)

# Query with filter
response = table.query(
    KeyConditionExpression=Key('CustomerId').eq('customer123'),
    FilterExpression=Attr('TotalAmount').gt(100)
)

# Scan with filter
response = table.scan(
    FilterExpression=Attr('Age').gte(18),
    ProjectionExpression='UserId, Email, Name'
)

# Paginated query
response = table.query(
    KeyConditionExpression=Key('CustomerId').eq('customer123'),
    Limit=10
)

while 'LastEvaluatedKey' in response:
    last_key = response['LastEvaluatedKey']
    response = table.query(
        KeyConditionExpression=Key('CustomerId').eq('customer123'),
        ExclusiveStartKey=last_key,
        Limit=10
    )

======== Node.js Examples ==========
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-west-2" });
const docClient = DynamoDBDocumentClient.from(client);

// Query operation
const queryResponse = await docClient.send(new QueryCommand({
  TableName: 'Orders',
  KeyConditionExpression: 'CustomerId = :cid',
  ExpressionAttributeValues: {
    ':cid': 'customer123'
  }
}));

// Scan with filter
const scanResponse = await docClient.send(new ScanCommand({
  TableName: 'Users',
  FilterExpression: '#age >= :min',
  ExpressionAttributeNames: {
    '#age': 'Age'
  },
  ExpressionAttributeValues: {
    ':min': 18
  },
  ProjectionExpression: 'UserId, Email, Name'
}));`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Data Operations',
      commands: [
        {
          command: 'Transactions',
          description: 'ACID transactions for complex operations',
          usage: 'TransactWriteItems, TransactGetItems',
          example: `# Transaction Operations in DynamoDB

======== Transaction Write ==========
# Transaction with multiple operations
aws dynamodb transact-write-items \\
  --transact-items '[
    {
      "Put": {
        "TableName": "Orders",
        "Item": {
          "CustomerId": {"S": "customer123"},
          "OrderId": {"S": "order456"},
          "TotalAmount": {"N": "99.99"},
          "Status": {"S": "pending"}
        },
        "ConditionExpression": "attribute_not_exists(OrderId)"
      }
    },
    {
      "Update": {
        "TableName": "Customers",
        "Key": {"CustomerId": {"S": "customer123"}},
        "UpdateExpression": "ADD #orderCount :inc",
        "ExpressionAttributeNames": {"#orderCount": "OrderCount"},
        "ExpressionAttributeValues": {":inc": {"N": "1"}}
      }
    },
    {
      "Update": {
        "TableName": "Inventory",
        "Key": {"ProductId": {"S": "prod789"}},
        "UpdateExpression": "SET #stock = #stock - :qty",
        "ExpressionAttributeNames": {"#stock": "Stock"},
        "ExpressionAttributeValues": {":qty": {"N": "1"}},
        "ConditionExpression": "#stock >= :min",
        "ExpressionAttributeValues": {":min": {"N": "1"}}
      }
    }
  ]'

# Transaction with condition check
aws dynamodb transact-write-items \\
  --transact-items '[
    {
      "ConditionCheck": {
        "TableName": "Accounts",
        "Key": {"AccountId": {"S": "acc123"}},
        "ConditionExpression": "#balance >= :amount",
        "ExpressionAttributeNames": {"#balance": "Balance"},
        "ExpressionAttributeValues": {":amount": {"N": "100"}}
      }
    },
    {
      "Update": {
        "TableName": "Accounts",
        "Key": {"AccountId": {"S": "acc123"}},
        "UpdateExpression": "SET #balance = #balance - :amount",
        "ExpressionAttributeNames": {"#balance": "Balance"},
        "ExpressionAttributeValues": {":amount": {"N": "100"}}
      }
    }
  ]'

======== Transaction Get ==========
# Get multiple items transactionally
aws dynamodb transact-get-items \\
  --transact-items '[
    {
      "Get": {
        "TableName": "Orders",
        "Key": {
          "CustomerId": {"S": "customer123"},
          "OrderId": {"S": "order456"}
        }
      }
    },
    {
      "Get": {
        "TableName": "Customers",
        "Key": {"CustomerId": {"S": "customer123"}}
      }
    }
  ]'

# Transaction get with consistent read
aws dynamodb transact-get-items \\
  --transact-items '[
    {
      "Get": {
        "TableName": "Orders",
        "Key": {
          "CustomerId": {"S": "customer123"},
          "OrderId": {"S": "order456"}
        },
        "ConsistentRead": true
      }
    }
  ]'

======== Python Transaction Examples ==========
import boto3

dynamodb = boto3.resource('dynamodb')

# Transaction write
try:
    dynamodb.meta.client.transact_write_items(
        TransactItems=[
            {
                'Put': {
                    'TableName': 'Orders',
                    'Item': {
                        'CustomerId': 'customer123',
                        'OrderId': 'order456',
                        'TotalAmount': 99.99,
                        'Status': 'pending'
                    },
                    'ConditionExpression': 'attribute_not_exists(OrderId)'
                }
            },
            {
                'Update': {
                    'TableName': 'Customers',
                    'Key': {'CustomerId': 'customer123'},
                    'UpdateExpression': 'ADD OrderCount :inc',
                    'ExpressionAttributeValues': {':inc': 1}
                }
            }
        ]
    )
except Exception as e:
    print(f"Transaction failed: {e}")

# Transaction get
response = dynamodb.meta.client.transact_get_items(
    TransactItems=[
        {
            'Get': {
                'TableName': 'Orders',
                'Key': {
                    'CustomerId': 'customer123',
                    'OrderId': 'order456'
                }
            }
        },
        {
            'Get': {
                'TableName': 'Customers',
                'Key': {'CustomerId': 'customer123'}
            }
        }
    ]
)

for item in response['Responses']:
    print(item['Item'])

======== Node.js Transaction Examples ==========
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBDocumentClient, 
  TransactWriteCommand, 
  TransactGetCommand 
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-west-2" });
const docClient = DynamoDBDocumentClient.from(client);

// Transaction write
await docClient.send(new TransactWriteCommand({
  TransactItems: [
    {
      Put: {
        TableName: 'Orders',
        Item: {
          CustomerId: 'customer123',
          OrderId: 'order456',
          TotalAmount: 99.99,
          Status: 'pending'
        },
        ConditionExpression: 'attribute_not_exists(OrderId)'
      }
    },
    {
      Update: {
        TableName: 'Customers',
        Key: { CustomerId: 'customer123' },
        UpdateExpression: 'ADD OrderCount :inc',
        ExpressionAttributeValues: { ':inc': 1 }
      }
    }
  ]
}));

// Transaction get
const { Responses } = await docClient.send(new TransactGetCommand({
  TransactItems: [
    {
      Get: {
        TableName: 'Orders',
        Key: {
          CustomerId: 'customer123',
          OrderId: 'order456'
        }
      }
    },
    {
      Get: {
        TableName: 'Customers',
        Key: { CustomerId: 'customer123' }
      }
    }
  ]
}));`,
        },
        {
          command: 'Conditional Expressions',
          description: 'Advanced conditional operations for data integrity',
          usage: 'Complex conditions, attribute functions, and validation',
          example: `# Conditional Expressions in DynamoDB

======== Basic Conditions ==========
# Attribute exists
aws dynamodb put-item \\
  --table-name Users \\
  --item '{
    "UserId": {"S": "user123"},
    "Email": {"S": "user@example.com"}
  }' \\
  --condition-expression "attribute_not_exists(UserId)"

# Attribute equals value
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #status = :newStatus" \\
  --expression-attribute-names '{"#status": "Status"}' \\
  --expression-attribute-values '{":newStatus": {"S": "active"}}' \\
  --condition-expression "#status = :oldStatus" \\
  --expression-attribute-values '{":oldStatus": {"S": "inactive"}}'

# Numeric comparisons
aws dynamodb update-item \\
  --table-name Products \\
  --key '{
    "ProductId": {"S": "prod123"}
  }' \\
  --update-expression "SET #stock = #stock - :qty" \\
  --expression-attribute-names '{"#stock": "Stock"}' \\
  --expression-attribute-values '{":qty": {"N": "1"}}' \\
  --condition-expression "#stock >= :minStock" \\
  --expression-attribute-values '{":minStock": {"N": "1"}}'

======== Advanced Conditions ==========
# Multiple conditions with AND/OR
aws dynamodb update-item \\
  --table-name Orders \\
  --key '{
    "CustomerId": {"S": "customer123"},
    "OrderId": {"S": "order456"}
  }' \\
  --update-expression "SET #status = :status" \\
  --expression-attribute-names '{"#status": "Status"}' \\
  --expression-attribute-values '{":status": {"S": "shipped"}}' \\
  --condition-expression "#status = :current AND #amount > :min" \\
  --expression-attribute-names '{"#status": "Status", "#amount": "TotalAmount"}' \\
  --expression-attribute-values '{
    ":current": {"S": "processing"},
    ":min": {"N": "0"}
  }'

# String functions
aws dynamodb query \\
  --table-name Products \\
  --key-condition-expression "Category = :cat" \\
  --filter-expression "contains(#name, :search)" \\
  --expression-attribute-names '{"#name": "Name"}' \\
  --expression-attribute-values '{
    ":cat": {"S": "Electronics"},
    ":search": {"S": "Laptop"}
  }'

# List functions
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #tags = list_append(#tags, :newTag)" \\
  --expression-attribute-names '{"#tags": "Tags"}' \\
  --expression-attribute-values '{":newTag": {"L": [{"S": "premium"}]}}' \\
  --condition-expression "size(#tags) < :maxTags" \\
  --expression-attribute-values '{":maxTags": {"N": "10"}}'

======== Attribute Type Functions ==========
# Check attribute type
aws dynamodb update-item \\
  --table-name Users \\
  --key '{
    "UserId": {"S": "user123"}
  }' \\
  --update-expression "SET #age = :age" \\
  --expression-attribute-names '{"#age": "Age"}' \\
  --expression-attribute-values '{":age": {"N": "25"}}' \\
  --condition-expression "attribute_type(#age, :nullType)" \\
  --expression-attribute-values '{":nullType": {"S": "NULL"}}'

# Check if attribute is not null
aws dynamodb query \\
  --table-name Products \\
  --key-condition-expression "Category = :cat" \\
  --filter-expression "attribute_exists(#description)" \\
  --expression-attribute-names '{"#description": "Description"}' \\
  --expression-attribute-values '{":cat": {"S": "Electronics"}}'

======== Complex Validation Patterns ==========
# Business rule validation
aws dynamodb put-item \\
  --table-name Orders \\
  --item '{
    "CustomerId": {"S": "customer123"},
    "OrderId": {"S": "order456"},
    "TotalAmount": {"N": "99.99"},
    "Status": {"S": "pending"}
  }' \\
  --condition-expression "
    attribute_not_exists(OrderId) AND 
    #amount > :minAmount AND 
    #amount < :maxAmount AND
    attribute_exists(#customerId)
  " \\
  --expression-attribute-names '{
    "#amount": "TotalAmount",
    "#customerId": "CustomerId"
  }' \\
  --expression-attribute-values '{
    ":minAmount": {"N": "0"},
    ":maxAmount": {"N": "10000"}
  }'

# Optimistic locking with version
aws dynamodb update-item \\
  --table-name Products \\
  --key '{
    "ProductId": {"S": "prod123"}
  }' \\
  --update-expression "
    SET #name = :name, 
        #price = :price, 
        #version = #version + :inc
  " \\
  --expression-attribute-names '{
    "#name": "Name",
    "#price": "Price", 
    "#version": "Version"
  }' \\
  --expression-attribute-values '{
    ":name": {"S": "Updated Product"},
    ":price": {"N": "29.99"},
    ":inc": {"N": "1"},
    ":expectedVersion": {"N": "5"}
  }' \\
  --condition-expression "#version = :expectedVersion"

======== Python Conditional Examples ==========
import boto3
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Orders')

# Complex condition
try:
    response = table.put_item(
        Item={
            'CustomerId': 'customer123',
            'OrderId': 'order456',
            'TotalAmount': 99.99,
            'Status': 'pending'
        },
        ConditionExpression=(
            'attribute_not_exists(OrderId) AND ' +
            'TotalAmount > :minAmount AND ' +
            'TotalAmount < :maxAmount'
        ),
        ExpressionAttributeValues={
            ':minAmount': 0,
            ':maxAmount': 10000
        }
    )
except Exception as e:
    print(f"Condition failed: {e}")

# Optimistic locking
try:
    response = table.update_item(
        Key={'ProductId': 'prod123'},
        UpdateExpression='SET #name = :name, #version = #version + :inc',
        ExpressionAttributeNames={
            '#name': 'Name',
            '#version': 'Version'
        },
        ExpressionAttributeValues={
            ':name': 'Updated Product',
            ':inc': 1,
            ':expectedVersion': 5
        },
        ConditionExpression='#version = :expectedVersion'
    )
except Exception as e:
    print(f"Version conflict: {e}")

# Query with complex filter
response = table.query(
    KeyConditionExpression=Key('CustomerId').eq('customer123'),
    FilterExpression=Attr('Status').eq('active') & 
                   Attr('TotalAmount').gt(100) &
                   Attr('CreatedAt').gte('2024-01-01')
)`,
        },
        {
          command: 'Batch Operations',
          description: 'Efficient bulk operations for multiple items',
          usage: 'BatchWriteItem, BatchGetItem, optimization strategies',
          example: `# Batch Operations in DynamoDB

======== Batch Write Operations ==========
# Batch write with multiple operations
aws dynamodb batch-write-item \\
  --request-items '{
    "Users": [
      {
        "PutRequest": {
          "Item": {
            "UserId": {"S": "user001"},
            "Email": {"S": "user001@example.com"},
            "Name": {"S": "Alice Johnson"}
          }
        }
      },
      {
        "PutRequest": {
          "Item": {
            "UserId": {"S": "user002"},
            "Email": {"S": "user002@example.com"},
            "Name": {"S": "Bob Smith"}
          }
        }
      },
      {
        "DeleteRequest": {
          "Key": {"UserId": {"S": "user999"}}
        }
      }
    ],
    "Orders": [
      {
        "PutRequest": {
          "Item": {
            "CustomerId": {"S": "customer001"},
            "OrderId": {"S": "order001"},
            "TotalAmount": {"N": "99.99"}
          }
        }
      }
    ]
  }'

# Batch write with conditions
aws dynamodb batch-write-item \\
  --request-items '{
    "Products": [
      {
        "PutRequest": {
          "Item": {
            "ProductId": {"S": "prod001"},
            "Name": {"S": "Laptop"},
            "Price": {"N": "999.99"}
          },
          "ConditionExpression": "attribute_not_exists(ProductId)"
        }
      }
    ]
  }'

======== Batch Get Operations ==========
# Batch get from single table
aws dynamodb batch-get-item \\
  --request-items '{
    "Users": {
      "Keys": [
        {"UserId": {"S": "user001"}},
        {"UserId": {"S": "user002"}},
        {"UserId": {"S": "user003"}}
      ],
      "ConsistentRead": false
    }
  }'

# Batch get from multiple tables
aws dynamodb batch-get-item \\
  --request-items '{
    "Users": {
      "Keys": [
        {"UserId": {"S": "user001"}},
        {"UserId": {"S": "user002"}}
      ],
      "ProjectionExpression": "UserId, Email, Name"
    },
    "Orders": {
      "Keys": [
        {
          "CustomerId": {"S": "customer001"},
          "OrderId": {"S": "order001"}
        },
        {
          "CustomerId": {"S": "customer001"},
          "OrderId": {"S": "order002"}
        }
      ]
    }
  }'

======== Batch Size Optimization ==========
# Process large datasets in batches (25 items max per batch)
# Python example for processing 1000 items in batches
import boto3

def batch_process_items(items, batch_size=25):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Users')
    
    for i in range(0, len(items), batch_size):
        batch = items[i:i + batch_size]
        
        # Prepare batch write request
        request_items = {
            'Users': [
                {
                    'PutRequest': {
                        'Item': item
                    }
                } for item in batch
            ]
        }
        
        # Execute batch write
        try:
            response = dynamodb.meta.client.batch_write_item(
                RequestItems=request_items
            )
            
            # Handle unprocessed items
            if response['UnprocessedItems']:
                print(f"Unprocessed items: {len(response['UnprocessedItems']['Users'])}")
                # Retry logic here
                
        except Exception as e:
            print(f"Batch failed: {e}")
            # Error handling here

======== Efficient Batch Patterns ==========
# Parallel batch processing
import concurrent.futures
import threading

def parallel_batch_write(table_name, items, max_workers=10):
    def write_batch(batch):
        # Batch write logic here
        pass
    
    # Split items into batches
    batches = [items[i:i + 25] for i in range(0, len(items), 25)]
    
    # Process batches in parallel
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [executor.submit(write_batch, batch) for batch in batches]
        
        for future in concurrent.futures.as_completed(futures):
            try:
                result = future.result()
                print(f"Batch completed: {result}")
            except Exception as e:
                print(f"Batch failed: {e}")

# Conditional batch operations
def conditional_batch_update(updates):
    """Update items only if conditions are met"""
    dynamodb = boto3.client('dynamodb')
    
    for update in updates:
        try:
            dynamodb.update_item(
                TableName=update['table'],
                Key=update['key'],
                UpdateExpression=update['expression'],
                ConditionExpression=update['condition'],
                ExpressionAttributeNames=update['attr_names'],
                ExpressionAttributeValues=update['attr_values']
            )
        except dynamodb.exceptions.ConditionalCheckFailedException:
            print(f"Condition failed for item: {update['key']}")
        except Exception as e:
            print(f"Update failed: {e}")

======== Python Batch Examples ==========
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')

# Batch write with error handling
def safe_batch_write(table_name, items):
    table = dynamodb.Table(table_name)
    
    def write_batch(batch):
        try:
            with table.batch_writer() as batch_writer:
                for item in batch:
                    batch_writer.put_item(Item=item)
            return True
        except Exception as e:
            print(f"Batch write failed: {e}")
            return False
    
    # Process in batches of 25
    batch_size = 25
    for i in range(0, len(items), batch_size):
        batch = items[i:i + batch_size]
        if not write_batch(batch):
            # Handle failed batch
            pass

# Batch get with projection
def batch_get_with_projection(table_name, keys, projection):
    dynamodb = boto3.client('dynamodb')
    
    response = dynamodb.batch_get_item(
        RequestItems={
            table_name: {
                'Keys': keys,
                'ProjectionExpression': projection
            }
        }
    )
    
    return response['Responses'][table_name]

# Efficient pagination with batch operations
def paginated_batch_query(table_name, query_params):
    table = dynamodb.Table(table_name)
    
    all_items = []
    last_evaluated_key = None
    
    while True:
        if last_evaluated_key:
            query_params['ExclusiveStartKey'] = last_evaluated_key
        
        response = table.query(**query_params)
        all_items.extend(response['Items'])
        
        if 'LastEvaluatedKey' not in response:
            break
            
        last_evaluated_key = response['LastEvaluatedKey']
    
    return all_items

======== Node.js Batch Examples ==========
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBDocumentClient, 
  BatchWriteCommand, 
  BatchGetCommand 
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-west-2" });
const docClient = DynamoDBDocumentClient.from(client);

// Batch write
async function batchWriteItems(items) {
  const batches = [];
  for (let i = 0; i < items.length; i += 25) {
    batches.push(items.slice(i, i + 25));
  }
  
  for (const batch of batches) {
    const requestItems = {
      'Users': batch.map(item => ({
        PutRequest: { Item: item }
      }))
    };
    
    try {
      await docClient.send(new BatchWriteCommand({
        RequestItems: requestItems
      }));
    } catch (error) {
      console.error('Batch write failed:', error);
    }
  }
}

// Batch get with retry
async function batchGetWithRetry(keys, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await docClient.send(new BatchGetCommand({
        RequestItems: {
          'Users': {
            Keys: keys,
            ConsistentRead: false
          }
        }
      }));
      
      return response.Responses.Users;
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      
      // Exponential backoff
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, attempt) * 100)
      );
    }
  }
}`,
        },
      ],
    },
    {
      title: 'DynamoDB-Specific Features',
      commands: [
        {
          command: 'TTL (Time to Live)',
          description: 'Automatic item expiration with TTL',
          usage: 'Configure TTL for automatic data cleanup',
          example: `# TTL (Time to Live) in DynamoDB

======== Enable TTL on Table ==========
# Enable TTL via AWS CLI
aws dynamodb update-time-to-live \\
  --table-name Sessions \\
  --time-to-live-specification "Enabled=true,AttributeName=ExpiresAt"

# Check TTL status
aws dynamodb describe-time-to-live --table-name Sessions

# Disable TTL
aws dynamodb update-time-to-live \\
  --table-name Sessions \\
  --time-to-live-specification "Enabled=false"

======== TTL Item Operations ==========
# Insert item with TTL (Unix timestamp)
aws dynamodb put-item \\
  --table-name Sessions \\
  --item '{
    "SessionId": {"S": "sess123"},
    "UserId": {"S": "user123"},
    "Data": {"S": "session data"},
    "ExpiresAt": {"N": "1704067200"}
  }'

# Insert item with TTL calculated from current time
# Calculate TTL for 24 hours from now
CURRENT_TIME=$(date +%s)
EXPIRE_TIME=$((CURRENT_TIME + 86400))

aws dynamodb put-item \\
  --table-name Sessions \\
  --item "{
    \"SessionId\": {\"S\": \"sess124\"},
    \"UserId\": {\"S\": \"user124\"},
    \"ExpiresAt\": {\"N\": \"$EXPIRE_TIME\"}
  }"

# Update TTL of existing item
aws dynamodb update-item \\
  --table-name Sessions \\
  --key '{
    "SessionId": {"S": "sess123"}
  }' \\
  --update-expression "SET #expires = :newTime" \\
  --expression-attribute-names '{"#expires": "ExpiresAt"}' \\
  --expression-attribute-values "{\":newTime\": {\"N\": \"$EXPIRE_TIME\"}}"

======== TTL Best Practices ==========
# Use numeric attribute for TTL (Unix timestamp)
# TTL attribute must be Number type
# TTL is evaluated every hour approximately
# Expired items are deleted within 48 hours
# TTL doesn't affect read/write capacity immediately

# Python TTL examples
import boto3
import time

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Sessions')

# Insert with TTL (24 hours from now)
ttl_time = int(time.time()) + (24 * 60 * 60)

table.put_item(
    Item={
        'SessionId': 'sess123',
        'UserId': 'user123',
        'Data': 'session data',
        'ExpiresAt': ttl_time
    }
)

# Update TTL to extend session
new_ttl = int(time.time()) + (7 * 24 * 60 * 60)  # 7 days

table.update_item(
    Key={'SessionId': 'sess123'},
    UpdateExpression='SET ExpiresAt = :new_ttl',
    ExpressionAttributeValues={':new_ttl': new_ttl}
)

# Node.js TTL examples
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-west-2" });
const docClient = DynamoDBDocumentClient.from(client);

// Insert with TTL (24 hours from now)
const ttlTime = Math.floor(Date.now() / 1000) + (24 * 60 * 60);

await docClient.send(new PutCommand({
  TableName: 'Sessions',
  Item: {
    SessionId: 'sess123',
    UserId: 'user123',
    Data: 'session data',
    ExpiresAt: ttlTime
  }
}));

======== TTL Monitoring ==========
# Monitor TTL deletions via CloudWatch
# Metrics: TTLDeletedItems, TTLExpiredItems

# Check items approaching expiration
import boto3

def find_expiring_soon(table_name, hours_ahead=24):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    # Calculate TTL threshold
    threshold = int(time.time()) + (hours_ahead * 60 * 60)
    
    response = table.scan(
        FilterExpression='ExpiresAt <= :threshold AND ExpiresAt > :now',
        ExpressionAttributeValues={
            ':threshold': threshold,
            ':now': int(time.time())
        }
    )
    
    return response['Items']

# Batch cleanup of expired items (manual)
def cleanup_expired_items(table_name):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    now = int(time.time())
    
    response = table.scan(
        FilterExpression='ExpiresAt <= :now',
        ExpressionAttributeValues={':now': now}
    )
    
    for item in response['Items']:
        table.delete_item(
            Key={'SessionId': item['SessionId']}
        )
    
    return len(response['Items'])`,
        },
        {
          command: 'Streams and Change Data Capture',
          description: 'Real-time data change tracking with DynamoDB Streams',
          usage: 'Enable streams, process changes, Lambda integration',
          example: `# DynamoDB Streams and Change Data Capture

======== Enable Streams ==========
# Enable streams with NEW_AND_OLD_IMAGES
aws dynamodb update-table \\
  --table-name Users \\
  --stream-specification StreamEnabled=true,StreamViewType=NEW_AND_OLD_IMAGES

# Check stream status
aws dynamodb describe-table --table-name Users --query "Table.LatestStreamArn"

# Update stream specification
aws dynamodb update-table \\
  --table-name Users \\
  --stream-specification StreamEnabled=true,StreamViewType=KEYS_ONLY

======== Stream View Types ==========
# KEYS_ONLY - Only the primary key attributes
# NEW_IMAGE - Entire item as it appears after modification
# OLD_IMAGE - Entire item as it appeared before modification
# NEW_AND_OLD_IMAGES - Both new and old images

======== Read from Streams ==========
# Get shard iterator
aws dynamodbstreams describe-stream \\
  --stream-arn arn:aws:dynamodb:us-west-2:123456789012:table/Users/stream/2024-01-01T00:00:00.000

# Get shard iterator
aws dynamodbstreams get-shard-iterator \\
  --stream-arn arn:aws:dynamodb:us-west-2:123456789012:table/Users/stream/2024-01-01T00:00:00.000 \\
  --shard-id shardId-00000001234567890 \\
  --shard-iterator-type TRIM_HORIZON

# Read stream records
aws dynamodbstreams get-records \\
  --shard-iterator AAAAAAAAAAAAAAAAA...

======== Lambda Integration ==========
# Lambda function to process DynamoDB streams
import json

def lambda_handler(event, context):
    for record in event['Records']:
        if record['eventName'] == 'INSERT':
            handle_insert(record['dynamodb']['NewImage'])
        elif record['eventName'] == 'MODIFY':
            handle_modify(record['dynamodb']['OldImage'], record['dynamodb']['NewImage'])
        elif record['eventName'] == 'REMOVE':
            handle_remove(record['dynamodb']['OldImage'])
    
    return {
        'statusCode': 200,
        'body': json.dumps('Processed {} records'.format(len(event['Records'])))
    }

def handle_insert(new_image):
    # Handle new item insertion
    print(f"New item: {new_image}")

def handle_modify(old_image, new_image):
    # Handle item modification
    print(f"Modified: {old_image} -> {new_image}")

def handle_remove(old_image):
    # Handle item deletion
    print(f"Deleted item: {old_image}")

# Lambda deployment
zip function.zip lambda_function.py

aws lambda create-function \\
  --function-name DynamoDBStreamProcessor \\
  --runtime python3.9 \\
  --role arn:aws:iam::123456789012:role/DynamoDBStreamRole \\
  --handler lambda_function.lambda_handler \\
  --zip-file fileb://function.zip

# Add DynamoDB stream as trigger
aws lambda create-event-source-mapping \\
  --function-name DynamoDBStreamProcessor \\
  --event-source arn:aws:dynamodb:us-west-2:123456789012:table/Users/stream/2024-01-01T00:00:00.000 \\
  --starting-position TRIM_HORIZON \\
  --batch-size 100 \\
  --maximum-batching-window-in-seconds 5

======== Python Stream Processing ==========
import boto3
import json
from datetime import datetime

class DynamoDBStreamProcessor:
    def __init__(self, table_name, region='us-west-2'):
        self.dynamodb = boto3.client('dynamodb', region_name=region)
        self.streams = boto3.client('dynamodbstreams', region_name=region)
        self.table_name = table_name
        
    def get_stream_arn(self):
        response = self.dynamodb.describe_table(TableName=self.table_name)
        return response['Table']['LatestStreamArn']
    
    def process_stream(self, stream_arn):
        # Describe stream
        stream_desc = self.streams.describe_stream(StreamArn=stream_arn)
        
        for shard in stream_desc['StreamDescription']['Shards']:
            self.process_shard(stream_arn, shard['ShardId'])
    
    def process_shard(self, stream_arn, shard_id):
        # Get shard iterator
        iterator_response = self.streams.get_shard_iterator(
            StreamArn=stream_arn,
            ShardId=shard_id,
            ShardIteratorType='TRIM_HORIZON'
        )
        
        shard_iterator = iterator_response['ShardIterator']
        
        while shard_iterator:
            records_response = self.streams.get_records(
                ShardIterator=shard_iterator
            )
            
            records = records_response['Records']
            
            if records:
                self.process_records(records)
            
            shard_iterator = records_response.get('NextShardIterator')
            
            if not shard_iterator:
                break
    
    def process_records(self, records):
        for record in records:
            event_name = record['eventName']
            dynamodb_record = record['dynamodb']
            
            if event_name == 'INSERT':
                self.handle_insert(dynamodb_record['NewImage'])
            elif event_name == 'MODIFY':
                self.handle_modify(
                    dynamodb_record['OldImage'],
                    dynamodb_record['NewImage']
                )
            elif event_name == 'REMOVE':
                self.handle_remove(dynamodb_record['OldImage'])
    
    def handle_insert(self, new_image):
        item_id = new_image.get('Id', {}).get('S', 'Unknown')
        print(f"[INSERT] New item: {item_id}")
        
        # Trigger business logic
        self.trigger_new_item_workflow(new_image)
    
    def handle_modify(self, old_image, new_image):
        item_id = new_image.get('Id', {}).get('S', 'Unknown')
        print(f"[MODIFY] Updated item: {item_id}")
        
        # Check for specific changes
        self.check_status_change(old_image, new_image)
    
    def handle_remove(self, old_image):
        item_id = old_image.get('Id', {}).get('S', 'Unknown')
        print(f"[REMOVE] Deleted item: {item_id}")
        
        # Cleanup related data
        self.cleanup_related_data(old_image)
    
    def trigger_new_item_workflow(self, item):
        # Example: Send notification, update analytics, etc.
        pass
    
    def check_status_change(self, old_item, new_item):
        # Example: React to status changes
        old_status = old_item.get('Status', {}).get('S')
        new_status = new_item.get('Status', {}).get('S')
        
        if old_status != new_status:
            print(f"Status changed from {old_status} to {new_status}")
    
    def cleanup_related_data(self, item):
        # Example: Clean up related records
        pass

# Usage
processor = DynamoDBStreamProcessor('Users')
stream_arn = processor.get_stream_arn()
processor.process_stream(stream_arn)

======== Node.js Stream Processing ==========
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBStreamsClient,
  DescribeStreamCommand,
  GetShardIteratorCommand,
  GetRecordsCommand
} from "@aws-sdk/client-dynamodb-streams";

class DynamoDBStreamProcessor {
  constructor(tableName, region = 'us-west-2') {
    this.dynamodb = new DynamoDBClient({ region });
    this.streams = new DynamoDBStreamsClient({ region });
    this.tableName = tableName;
  }

  async processStream() {
    const streamArn = await this.getStreamArn();
    const streamDesc = await this.streams.send(
      new DescribeStreamCommand({ StreamArn: streamArn })
    );

    for (const shard of streamDesc.StreamDescription.Shards) {
      await this.processShard(streamArn, shard.ShardId);
    }
  }

  async getStreamArn() {
    const response = await this.dynamodb.send(
      new DescribeTableCommand({ TableName: this.tableName })
    );
    return response.Table.LatestStreamArn;
  }

  async processShard(streamArn, shardId) {
    const iteratorResponse = await this.streams.send(
      new GetShardIteratorCommand({
        StreamArn: streamArn,
        ShardId: shardId,
        ShardIteratorType: 'TRIM_HORIZON'
      })
    );

    let shardIterator = iteratorResponse.ShardIterator;

    while (shardIterator) {
      const recordsResponse = await this.streams.send(
        new GetRecordsCommand({ ShardIterator: shardIterator })
      );

      const records = recordsResponse.Records;
      if (records.length > 0) {
        this.processRecords(records);
      }

      shardIterator = recordsResponse.NextShardIterator;
      if (!shardIterator) break;
    }
  }

  processRecords(records) {
    records.forEach(record => {
      const eventName = record.eventName;
      const dynamodbRecord = record.dynamodb;

      switch (eventName) {
        case 'INSERT':
          this.handleInsert(dynamodbRecord.NewImage);
          break;
        case 'MODIFY':
          this.handleModify(
            dynamodbRecord.OldImage,
            dynamodbRecord.NewImage
          );
          break;
        case 'REMOVE':
          this.handleRemove(dynamodbRecord.OldImage);
          break;
      }
    });
  }

  handleInsert(newImage) {
    console.log('[INSERT] New item:', newImage.Id?.S);
    // Business logic here
  }

  handleModify(oldImage, newImage) {
    console.log('[MODIFY] Updated item:', newImage.Id?.S);
    // Business logic here
  }

  handleRemove(oldImage) {
    console.log('[REMOVE] Deleted item:', oldImage.Id?.S);
    // Business logic here
  }
}

// Usage
const processor = new DynamoDBStreamProcessor('Users');
processor.processStream().catch(console.error);`,
        },
        {
          command: 'Global Tables',
          description: 'Multi-region active-active replication',
          usage: 'Configure cross-region replication and conflict resolution',
          example: `# DynamoDB Global Tables

======== Create Global Table ==========
# Create replica in another region
aws dynamodb create-global-table \\
  --global-table-name GlobalUsers \\
  --replication-group '[
    {
      "RegionName": "us-east-1",
      "RegionName": "us-west-2"
    }
  ]'

# Add replica to existing global table
aws dynamodb update-global-table \\
  --global-table-name GlobalUsers \\
  --replica-updates '[
    {
      "Create": {
        "RegionName": "eu-west-1"
      }
    }
  ]'

# Describe global table
aws dynamodb describe-global-table --global-table-name GlobalUsers

======== Global Table Configuration ==========
# Create table with global table enabled
aws dynamodb create-table \\
  --table-name GlobalUsers \\
  --attribute-definitions \\
    AttributeName=UserId,AttributeType=S \\
  --key-schema \\
    AttributeName=UserId,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST \\
  --global-secondary-indexes '[
    {
      "IndexName": "EmailIndex",
      "KeySchema": [{"AttributeName": "Email", "KeyType": "HASH"}],
      "Projection": {"ProjectionType": "ALL"}
    }
  ]' \\
  --stream-specification StreamEnabled=true,StreamViewType=NEW_AND_OLD_IMAGES

# Enable global table after creation
aws dynamodb create-global-table \\
  --global-table-name GlobalUsers \\
  --replication-group '[
    {
      "RegionName": "us-east-1"
    },
    {
      "RegionName": "us-west-2"
    },
    {
      "RegionName": "eu-west-1"
    }
  ]'

======== Conflict Resolution ==========
# DynamoDB uses "last writer wins" conflict resolution
# Based on timestamp with millisecond precision

# Write with custom timestamp for conflict resolution
aws dynamodb put-item \\
  --table-name GlobalUsers \\
  --item '{
    "UserId": {"S": "user123"},
    "Email": {"S": "user@example.com"},
    "Name": {"S": "John Doe"},
    "UpdatedAt": {"S": "2024-01-01T12:00:00.123Z"}
  }' \\
  --condition-expression "attribute_not_exists(UserId) OR UpdatedAt < :newTime" \\
  --expression-attribute-values '{":newTime": {"S": "2024-01-01T12:00:00.123Z"}}'

# Python example with conflict handling
import boto3
from datetime import datetime, timezone

class GlobalTableManager:
    def __init__(self, table_name, regions):
        self.table_name = table_name
        self.clients = {}
        for region in regions:
            self.clients[region] = boto3.client('dynamodb', region_name=region)
    
    def write_with_timestamp(self, item, primary_region='us-east-1'):
        """Write item with timestamp for conflict resolution"""
        timestamp = datetime.now(timezone.utc).isoformat()
        item['UpdatedAt'] = {'S': timestamp}
        
        client = self.clients[primary_region]
        
        try:
            response = client.put_item(
                TableName=self.table_name,
                Item=item,
                ConditionExpression='attribute_not_exists(UserId) OR UpdatedAt < :newTime',
                ExpressionAttributeValues={':newTime': {'S': timestamp}}
            )
            return True
        except client.exceptions.ConditionalCheckFailedException:
            print("Write conflict detected")
            return False
    
    def read_from_nearest_region(self, key, preferred_regions=['us-east-1', 'us-west-2']):
        """Read from nearest healthy region"""
        for region in preferred_regions:
            try:
                client = self.clients[region]
                response = client.get_item(
                    TableName=self.table_name,
                    Key=key,
                    ConsistentRead=True
                )
                if 'Item' in response:
                    return response['Item'], region
            except Exception as e:
                print(f"Failed to read from {region}: {e}")
                continue
        
        raise Exception("Failed to read from all regions")
    
    def write_all_regions(self, item, regions=None):
        """Write to all regions for testing"""
        if regions is None:
            regions = self.clients.keys()
        
        timestamp = datetime.now(timezone.utc).isoformat()
        item['UpdatedAt'] = {'S': timestamp}
        
        results = {}
        for region in regions:
            try:
                client = self.clients[region]
                response = client.put_item(
                    TableName=self.table_name,
                    Item=item
                )
                results[region] = 'SUCCESS'
            except Exception as e:
                results[region] = f'FAILED: {e}'
        
        return results

# Usage
manager = GlobalTableManager('GlobalUsers', ['us-east-1', 'us-west-2', 'eu-west-1'])

# Write with conflict resolution
item = {
    'UserId': {'S': 'user123'},
    'Email': {'S': 'user@example.com'},
    'Name': {'S': 'John Doe'}
}

success = manager.write_with_timestamp(item)

# Read from nearest region
key = {'UserId': {'S': 'user123'}}
item, region = manager.read_from_nearest_region(key)
print(f"Read from {region}: {item}")

======== Monitoring Global Tables ==========
# Monitor replication latency via CloudWatch
# Metrics: ReplicationLatency, ThrottledRequests

# Check replica status
aws dynamodb describe-global-table --global-table-name GlobalUsers

# Monitor specific region
aws dynamodb describe-table --table-name GlobalUsers --region us-west-2

# Python monitoring
def monitor_global_table_health(table_name, regions):
    dynamodb = boto3.client('dynamodb')
    
    health_status = {}
    
    for region in regions:
        try:
            client = boto3.client('dynamodb', region_name=region)
            response = client.describe_table(TableName=table_name)
            
            table_status = response['Table']['TableStatus']
            replica_status = response['Table'].get('ReplicaStatuses', [])
            
            health_status[region] = {
                'table_status': table_status,
                'replica_status': replica_status
            }
            
        except Exception as e:
            health_status[region] = {'error': str(e)}
    
    return health_status

# Usage
health = monitor_global_table_health('GlobalUsers', ['us-east-1', 'us-west-2'])
print(json.dumps(health, indent=2))`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Performance and Scaling',
      commands: [
        {
          command: 'Capacity Planning and Auto Scaling',
          description: 'Optimize read/write capacity and configure auto scaling',
          usage: 'Provisioned vs on-demand, auto scaling configuration',
          example: `# Capacity Planning and Auto Scaling in DynamoDB

======== Billing Modes ==========
# On-demand mode (pay per request)
aws dynamodb create-table \\
  --table-name Users \\
  --attribute-definitions \\
    AttributeName=UserId,AttributeType=S \\
  --key-schema \\
    AttributeName=UserId,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST

# Provisioned mode (specify capacity)
aws dynamodb create-table \\
  --table-name Orders \\
  --attribute-definitions \\
    AttributeName=CustomerId,AttributeType=S \\
    AttributeName=OrderId,AttributeType=S \\
  --key-schema \\
    AttributeName=CustomerId,KeyType=HASH \\
    AttributeName=OrderId,KeyType=RANGE \\
  --billing-mode PROVISIONED \\
  --provisioned-throughput \\
    ReadCapacityUnits=10,WriteCapacityUnits=5

======== Auto Scaling Configuration ==========
# Register scalable target
aws application-autoscaling register-scalable-target \\
  --service-namespace dynamodb \\
  --resource-id table/Orders \\
  --scalable-dimension dynamodb:table:ReadCapacityUnits \\
  --min-capacity 5 \\
  --max-capacity 100 \\
  --role-arn arn:aws:iam::123456789012:role/DynamoDBAutoscaleRole

# Put scaling policy (target tracking)
aws application-autoscaling put-scaling-policy \\
  --service-namespace dynamodb \\
  --resource-id table/Orders \\
  --scalable-dimension dynamodb:table:ReadCapacityUnits \\
  --policy-name DynamoDBReadCapacityTargetTracking \\
  --policy-type TargetTrackingScaling \\
  --target-tracking-scaling-policy-configuration '{
    "TargetValue": 70.0,
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "DynamoDBReadCapacityUtilization"
    },
    "ScaleOutCooldown": 60,
    "ScaleInCooldown": 60
  }'

# Write capacity auto scaling
aws application-autoscaling register-scalable-target \\
  --service-namespace dynamodb \\
  --resource-id table/Orders \\
  --scalable-dimension dynamodb:table:WriteCapacityUnits \\
  --min-capacity 5 \\
  --max-capacity 50

aws application-autoscaling put-scaling-policy \\
  --service-namespace dynamodb \\
  --resource-id table/Orders \\
  --scalable-dimension dynamodb:table:WriteCapacityUnits \\
  --policy-name DynamoDBWriteCapacityTargetTracking \\
  --policy-type TargetTrackingScaling \\
  --target-tracking-scaling-policy-configuration '{
    "TargetValue": 70.0,
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "DynamoDBWriteCapacityUtilization"
    }
  }'

======== Capacity Monitoring ==========
# Monitor consumed capacity
aws cloudwatch get-metric-statistics \\
  --namespace AWS/DynamoDB \\
  --metric-name ConsumedReadCapacityUnits \\
  --dimensions Name=TableName,Value=Orders \\
  --start-time 2024-01-01T00:00:00Z \\
  --end-time 2024-01-02T00:00:00Z \\
  --period 3600 \\
  --statistics Sum

# Monitor throttled requests
aws cloudwatch get-metric-statistics \\
  --namespace AWS/DynamoDB \\
  --metric-name ReadThrottleEvents \\
  --dimensions Name=TableName,Value=Orders \\
  --start-time 2024-01-01T00:00:00Z \\
  --end-time 2024-01-02T00:00:00Z \\
  --period 3600 \\
  --statistics Sum

# Python capacity monitoring
import boto3
import time
from datetime import datetime, timedelta

class CapacityMonitor:
    def __init__(self, table_name):
        self.cloudwatch = boto3.client('cloudwatch')
        self.table_name = table_name
    
    def get_capacity_metrics(self, hours=24):
        """Get capacity metrics for the last N hours"""
        end_time = datetime.utcnow()
        start_time = end_time - timedelta(hours=hours)
        
        metrics = {}
        
        # Read capacity metrics
        metrics['read_consumed'] = self.cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='ConsumedReadCapacityUnits',
            Dimensions=[{'Name': 'TableName', 'Value': self.table_name}],
            StartTime=start_time,
            EndTime=end_time,
            Period=3600,
            Statistics=['Sum']
        )
        
        metrics['write_consumed'] = self.cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='ConsumedWriteCapacityUnits',
            Dimensions=[{'Name': 'TableName', 'Value': self.table_name}],
            StartTime=start_time,
            EndTime=end_time,
            Period=3600,
            Statistics=['Sum']
        )
        
        metrics['read_throttle'] = self.cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='ReadThrottleEvents',
            Dimensions=[{'Name': 'TableName', 'Value': self.table_name}],
            StartTime=start_time,
            EndTime=end_time,
            Period=3600,
            Statistics=['Sum']
        )
        
        metrics['write_throttle'] = self.cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='WriteThrottleEvents',
            Dimensions=[{'Name': 'TableName', 'Value': self.table_name}],
            StartTime=start_time,
            EndTime=end_time,
            Period=3600,
            Statistics=['Sum']
        )
        
        return metrics
    
    def calculate_utilization(self, metrics, provisioned_read, provisioned_write):
        """Calculate utilization percentages"""
        read_consumed = sum(dp['Sum'] for dp in metrics['read_consumed']['Datapoints'])
        write_consumed = sum(dp['Sum'] for dp in metrics['write_consumed']['Datapoints'])
        
        read_utilization = (read_consumed / (provisioned_read * 3600)) * 100
        write_utilization = (write_consumed / (provisioned_write * 3600)) * 100
        
        return {
            'read_utilization': read_utilization,
            'write_utilization': write_utilization,
            'read_consumed': read_consumed,
            'write_consumed': write_consumed
        }
    
    def recommend_capacity(self, current_utilization, target_utilization=70):
        """Recommend capacity adjustments"""
        if current_utilization['read_utilization'] > target_utilization:
            new_read = int(current_utilization['read_consumed'] / 3600 * (100 / target_utilization))
            read_recommendation = f"Increase read capacity to {new_read}"
        else:
            read_recommendation = "Read capacity is adequate"
        
        if current_utilization['write_utilization'] > target_utilization:
            new_write = int(current_utilization['write_consumed'] / 3600 * (100 / target_utilization))
            write_recommendation = f"Increase write capacity to {new_write}"
        else:
            write_recommendation = "Write capacity is adequate"
        
        return {
            'read': read_recommendation,
            'write': write_recommendation
        }

# Usage
monitor = CapacityMonitor('Orders')
metrics = monitor.get_capacity_metrics(24)
utilization = monitor.calculate_utilization(metrics, 10, 5)
recommendations = monitor.recommend_capacity(utilization)

print(f"Read Utilization: {utilization['read_utilization']:.2f}%")
print(f"Write Utilization: {utilization['write_utilization']:.2f}%")
print(f"Recommendations: {recommendations}")

======== Cost Optimization ==========
# Switch between billing modes based on usage
def analyze_billing_mode(table_name, days=30):
    """Analyze if on-demand or provisioned is more cost-effective"""
    dynamodb = boto3.client('dynamodb')
    cloudwatch = boto3.client('cloudwatch')
    
    # Get billing mode
    response = dynamodb.describe_table(TableName=table_name)
    billing_mode = response['Table']['BillingModeSummary']['BillingMode']
    
    if billing_mode == 'PAY_PER_REQUEST':
        # Calculate on-demand cost
        end_time = datetime.utcnow()
        start_time = end_time - timedelta(days=days)
        
        read_ops = cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='ConsumedReadCapacityUnits',
            Dimensions=[{'Name': 'TableName', 'Value': table_name}],
            StartTime=start_time,
            EndTime=end_time,
            Period=86400,
            Statistics=['Sum']
        )
        
        write_ops = cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='ConsumedWriteCapacityUnits',
            Dimensions=[{'Name': 'TableName', 'Value': table_name}],
            StartTime=start_time,
            EndTime=end_time,
            Period=86400,
            Statistics=['Sum']
        )
        
        total_reads = sum(dp['Sum'] for dp in read_ops['Datapoints'])
        total_writes = sum(dp['Sum'] for dp in write_ops['Datapoints'])
        
        # On-demand pricing (example rates)
        read_cost = total_reads * 0.00013  # $1.25 per million read request units
        write_cost = total_writes * 0.00065  # $6.25 per million write request units
        total_on_demand_cost = read_cost + write_cost
        
        return {
            'current_mode': 'PAY_PER_REQUEST',
            'total_reads': total_reads,
            'total_writes': total_writes,
            'monthly_cost': total_on_demand_cost,
            'recommendation': 'Consider provisioned if usage is predictable'
        }
    
    return {'current_mode': billing_mode, 'recommendation': 'Analyze usage patterns'}`,
        },
        {
          command: 'Performance Optimization',
          description: 'Optimize DynamoDB performance for high throughput',
          usage: 'Partitioning, hot key avoidance, DAX integration',
          example: `# Performance Optimization in DynamoDB

======== Hot Key Avoidance ==========
# Bad: Sequential keys create hot partitions
aws dynamodb put-item \\
  --table-name BadDesign \\
  --item '{
    "OrderId": {"S": "ORDER-0001"},
    "Data": {"S": "data"}
  }'

# Good: Distributed keys avoid hot partitions
aws dynamodb put-item \\
  --table-name GoodDesign \\
  --item '{
    "CustomerId": {"S": "customer123"},
    "OrderId": {"S": "order456"},
    "Data": {"S": "data"}
  }'

# Add random prefix for even distribution
import hashlib
import uuid

def generate_partition_key(base_key):
    """Generate partition key with random prefix"""
    hash_obj = hashlib.md5(base_key.encode())
    prefix = hash_obj.hexdigest()[:4]
    return f"{prefix}-{base_key}"

# Usage
order_id = "order123"
partition_key = generate_partition_key(order_id)
print(partition_key)  # e.g., "a1b2-order123"

======== Partitioning Strategies ==========
# Time-based partitioning
aws dynamodb create-table \\
  --table-name TimeSeriesData \\
  --attribute-definitions \\
    AttributeName=TimeId,AttributeType=S \\
    AttributeName=Timestamp,AttributeType=S \\
  --key-schema \\
    AttributeName=TimeId,KeyType=HASH \\
    AttributeName=Timestamp,KeyType=RANGE \\
  --billing-mode PAY_PER_REQUEST

# Generate time-based partition keys
import time
from datetime import datetime

def get_time_partition_key(timestamp=None):
    """Generate hourly partition key"""
    if timestamp is None:
        timestamp = datetime.utcnow()
    
    return timestamp.strftime("%Y%m%d%H")

# Usage
partition_key = get_time_partition_key()
item = {
    'TimeId': partition_key,
    'Timestamp': datetime.utcnow().isoformat(),
    'Data': 'sensor reading'
}

# Sharding strategy
def get_shard_key(key, num_shards=10):
    """Distribute keys across multiple shards"""
    hash_value = int(hashlib.md5(key.encode()).hexdigest(), 16)
    shard_id = hash_value % num_shards
    return f"shard{shard_id}-{key}"

# Usage
user_id = "user123"
shard_key = get_shard_key(user_id, 20)
print(shard_key)  # e.g., "shard7-user123"

======== DAX (DynamoDB Accelerator) Integration ==========
# Create DAX cluster
aws dax create-cluster \\
  --cluster-name my-dax-cluster \\
  --node-type dax.r5.large \\
  --replication-factor 3 \\
  --iam-role-arn arn:aws:iam::123456789012:role/DAXServiceRole \\
  --subnet-group-name my-subnet-group \\
  --security-group-ids sg-12345678 sg-87654321

# Get DAX endpoint
aws dax describe-clusters --cluster-name my-dax-cluster

# Python DAX integration
import boto3
from amazon.dax import AmazonDaxClient

# Standard DynamoDB client
dynamodb = boto3.resource('dynamodb', region_name='us-west-2')

# DAX client
dax = AmazonDaxClient.region_name('us-west-2').endpoint_url('my-dax-cluster.abcdef.dax-clusters.us-west-2.amazonaws.com:8111')

# Use DAX for read-heavy operations
table = dax.Table('Users')

# Get item with DAX (cached)
response = table.get_item(Key={'UserId': 'user123'})

# Query with DAX
response = table.query(
    KeyConditionExpression=Key('CustomerId').eq('customer123')
)

======== Batch and Parallel Operations ==========
# Parallel scan for large tables
import concurrent.futures
import threading

class ParallelScanner:
    def __init__(self, table_name, region='us-west-2'):
        self.table_name = table_name
        self.dynamodb = boto3.resource('dynamodb', region_name=region)
        self.table = self.dynamodb.Table(table_name)
    
    def parallel_scan(self, total_segments=10, max_workers=5):
        """Scan table in parallel segments"""
        def scan_segment(segment):
            response = self.table.scan(
                Segment=segment,
                TotalSegments=total_segments
            )
            
            items = response['Items']
            
            while 'LastEvaluatedKey' in response:
                response = self.table.scan(
                    Segment=segment,
                    TotalSegments=total_segments,
                    ExclusiveStartKey=response['LastEvaluatedKey']
                )
                items.extend(response['Items'])
            
            return items
        
        # Execute scans in parallel
        all_items = []
        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = [
                executor.submit(scan_segment, segment) 
                for segment in range(total_segments)
            ]
            
            for future in concurrent.futures.as_completed(futures):
                segment_items = future.result()
                all_items.extend(segment_items)
        
        return all_items
    
    def parallel_query(self, key_condition, total_segments=10):
        """Parallel query for composite keys"""
        def query_segment(segment):
            response = self.table.query(
                KeyConditionExpression=key_condition,
                Segment=segment,
                TotalSegments=total_segments
            )
            
            items = response['Items']
            
            while 'LastEvaluatedKey' in response:
                response = self.table.query(
                    KeyConditionExpression=key_condition,
                    Segment=segment,
                    TotalSegments=total_segments,
                    ExclusiveStartKey=response['LastEvaluatedKey']
                )
                items.extend(response['Items'])
            
            return items
        
        # Execute queries in parallel
        all_items = []
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = [
                executor.submit(query_segment, segment) 
                for segment in range(total_segments)
            ]
            
            for future in concurrent.futures.as_completed(futures):
                segment_items = future.result()
                all_items.extend(segment_items)
        
        return all_items

# Usage
scanner = ParallelScanner('LargeTable')
all_items = scanner.parallel_scan(total_segments=20, max_workers=8)

======== Connection Pooling and Retry Logic ==========
# Python connection pooling with retry
import time
from botocore.exceptions import ClientError
from botocore.config import Config

# Configure retry settings
config = Config(
    retries={
        'max_attempts': 10,
        'mode': 'adaptive'
    },
    max_pool_connections=50
)

dynamodb = boto3.resource('dynamodb', config=config)

class ResilientDynamoDB:
    def __init__(self, table_name, max_retries=3):
        self.table = dynamodb.Table(table_name)
        self.max_retries = max_retries
    
    def put_item_with_retry(self, item):
        """Put item with exponential backoff retry"""
        for attempt in range(self.max_retries):
            try:
                self.table.put_item(Item=item)
                return True
            except ClientError as e:
                if e.response['Error']['Code'] == 'ProvisionedThroughputExceededException':
                    if attempt == self.max_retries - 1:
                        raise
                    
                    # Exponential backoff
                    delay = (2 ** attempt) * 0.1
                    time.sleep(delay)
                else:
                    raise
    
    def batch_write_with_backoff(self, items):
        """Batch write with backoff on throttling"""
        def write_batch(batch):
            with self.table.batch_writer() as batch_writer:
                for item in batch:
                    batch_writer.put_item(Item=item)
        
        batch_size = 25
        for i in range(0, len(items), batch_size):
            batch = items[i:i + batch_size]
            
            for attempt in range(self.max_retries):
                try:
                    write_batch(batch)
                    break
                except ClientError as e:
                    if e.response['Error']['Code'] == 'ProvisionedThroughputExceededException':
                        if attempt == self.max_retries - 1:
                            raise
                        
                        delay = (2 ** attempt) * 0.1
                        time.sleep(delay)
                    else:
                        raise

# Usage
resilient_db = ResilientDynamoDB('HighTrafficTable')

# Put item with retry
resilient_db.put_item_with_retry({'UserId': 'user123', 'Data': 'test'})

# Batch write with backoff
items = [{'UserId': f'user{i}', 'Data': f'data{i}'} for i in range(1000)]
resilient_db.batch_write_with_backoff(items)`,
        },
        {
          command: 'Security and Compliance',
          description: 'Implement security best practices and compliance',
          usage: 'Encryption, IAM policies, VPC endpoints, monitoring',
          example: `# Security and Compliance in DynamoDB

======== Encryption at Rest ==========
# Create table with SSE (default - AWS managed CMK)
aws dynamodb create-table \\
  --table-name SecureData \\
  --attribute-definitions \\
    AttributeName=Id,AttributeType=S \\
  --key-schema \\
    AttributeName=Id,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST \\
  --sse-specification Enabled=true,SSEType=KMS

# Create table with customer managed CMK
aws dynamodb create-table \\
  --table-name HighlySecureData \\
  --attribute-definitions \\
    AttributeName=Id,AttributeType=S \\
  --key-schema \\
    AttributeName=Id,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST \\
  --sse-specification Enabled=true,SSEType=KMS,KMSMasterKeyId=arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012

# Update table encryption
aws dynamodb update-table \\
  --table-name ExistingTable \\
  --sse-specification Enabled=true,SSEType=KMS

======== VPC Endpoints ==========
# Create VPC endpoint for DynamoDB
aws ec2 create-vpc-endpoint \\
  --vpc-id vpc-12345678 \\
  --service-name com.amazonaws.us-west-2.dynamodb \\
  --vpc-endpoint-type Interface \\
  --subnet-ids subnet-12345678 subnet-87654321 \\
  --security-group-ids sg-12345678 \\
  --private-dns-enabled

# Create VPC endpoint for DynamoDB Streams
aws ec2 create-vpc-endpoint \\
  --vpc-id vpc-12345678 \\
  --service-name com.amazonaws.us-west-2.dynamodbstreams \\
  --vpc-endpoint-type Interface \\
  --subnet-ids subnet-12345678 subnet-87654321 \\
  --security-group-ids sg-12345678 \\
  --private-dns-enabled

# Gateway endpoint for DynamoDB (no additional cost)
aws ec2 create-vpc-endpoint \\
  --vpc-id vpc-12345678 \\
  --service-name com.amazonaws.us-west-2.dynamodb \\
  --vpc-endpoint-type Gateway \\
  --route-table-ids rtb-12345678

======== IAM Policies ==========
# Least privilege policy for specific table access
cat > dynamodb-table-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem",
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem",
                "dynamodb:Query",
                "dynamodb:BatchGetItem",
                "dynamodb:BatchWriteItem"
            ],
            "Resource": "arn:aws:dynamodb:us-west-2:123456789012:table/SpecificTable"
        },
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:DescribeTable",
                "dynamodb:ListTables"
            ],
            "Resource": "*"
        }
    ]
}
EOF

# Create IAM policy
aws iam create-policy \\
  --policy-name DynamoDBTableAccess \\
  --policy-document file://dynamodb-table-policy.json

# Read-only policy
cat > dynamodb-readonly-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem",
                "dynamodb:Query",
                "dynamodb:Scan",
                "dynamodb:BatchGetItem",
                "dynamodb:DescribeTable",
                "dynamodb:ListTables"
            ],
            "Resource": "arn:aws:dynamodb:us-west-2:123456789012:table/*"
        }
    ]
}
EOF

# Condition-based policy (time-based access)
cat > time-based-access-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem"
            ],
            "Resource": "arn:aws:dynamodb:us-west-2:123456789012:table/CriticalData",
            "Condition": {
                "DateGreaterThan": {
                    "aws:CurrentTime": "2024-01-01T00:00:00Z"
                },
                "DateLessThan": {
                    "aws:CurrentTime": "2024-12-31T23:59:59Z"
                }
            }
        }
    ]
}
EOF

======== Attribute-Level Encryption ==========
# Python client-side encryption
import boto3
from boto3.dynamodb.types import Binary
from cryptography.fernet import Fernet
import base64
import os

class ClientSideEncryption:
    def __init__(self, table_name, encryption_key=None):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table(table_name)
        
        if encryption_key:
            self.cipher_suite = Fernet(encryption_key)
        else:
            self.cipher_suite = Fernet(Fernet.generate_key())
    
    def encrypt_attribute(self, value):
        """Encrypt sensitive attribute"""
        if isinstance(value, str):
            encrypted = self.cipher_suite.encrypt(value.encode())
            return Binary(encrypted)
        return value
    
    def decrypt_attribute(self, encrypted_value):
        """Decrypt sensitive attribute"""
        if isinstance(encrypted_value, Binary):
            decrypted = self.cipher_suite.decrypt(encrypted_value.value)
            return decrypted.decode()
        return encrypted_value
    
    def put_item_encrypted(self, item, sensitive_fields):
        """Put item with encrypted sensitive fields"""
        encrypted_item = item.copy()
        
        for field in sensitive_fields:
            if field in encrypted_item:
                encrypted_item[field] = self.encrypt_attribute(encrypted_item[field])
        
        self.table.put_item(Item=encrypted_item)
    
    def get_item_decrypted(self, key, sensitive_fields):
        """Get item with decrypted sensitive fields"""
        response = self.table.get_item(Key=key)
        
        if 'Item' in response:
            item = response['Item']
            
            for field in sensitive_fields:
                if field in item:
                    item[field] = self.decrypt_attribute(item[field])
            
            return item
        
        return None

# Usage
encryption = ClientSideEncryption('SecureData')

# Store sensitive data
user_data = {
    'UserId': 'user123',
    'Email': 'user@example.com',
    'SSN': '123-45-6789',
    'CreditCard': '4111-1111-1111-1111'
}

encryption.put_item_encrypted(
    user_data, 
    sensitive_fields=['SSN', 'CreditCard']
)

# Retrieve and decrypt data
decrypted_data = encryption.get_item_decrypted(
    {'UserId': 'user123'},
    sensitive_fields=['SSN', 'CreditCard']
)

======== Audit Logging and Monitoring ==========
# Enable CloudTrail for DynamoDB API calls
aws cloudtrail create-trail \\
  --name dynamodb-audit-trail \\
  --s3-bucket-name my-audit-bucket \\
  --s3-key-prefix dynamodb-logs/ \\
  --include-global-service-events \\
  --is-multi-region-trail

# Monitor for suspicious activity
import boto3
import json
from datetime import datetime, timedelta

class DynamoDBAuditor:
    def __init__(self):
        self.cloudtrail = boto3.client('cloudtrail')
        self.cloudwatch = boto3.client('cloudwatch')
    
    def audit_table_access(self, table_name, hours=24):
        """Audit access to specific table"""
        end_time = datetime.utcnow()
        start_time = end_time - timedelta(hours=hours)
        
        events = self.cloudtrail.lookup_events(
            LookupAttributes=[
                {
                    'AttributeKey': 'ResourceName',
                    'AttributeValue': table_name
                }
            ],
            StartTime=start_time,
            EndTime=end_time,
            MaxResults=50
        )
        
        access_log = []
        for event in events['Events']:
            access_log.append({
                'event_time': event['EventTime'],
                'username': event['Username'],
                'event_name': event['EventName'],
                'source_ip': event.get('SourceIPAddress', 'Unknown')
            })
        
        return access_log
    
    def detect_anomalous_access(self, table_name):
        """Detect unusual access patterns"""
        # Get recent events
        events = self.audit_table_access(table_name, hours=1)
        
        # Analyze for patterns
        user_access = {}
        for event in events:
            username = event['username']
            if username not in user_access:
                user_access[username] = 0
            user_access[username] += 1
        
        # Flag high-frequency access
        anomalies = []
        for username, count in user_access.items():
            if count > 100:  # Threshold for unusual activity
                anomalies.append({
                    'username': username,
                    'access_count': count,
                    'severity': 'HIGH'
                })
        
        return anomalies

# Usage
auditor = DynamoDBAuditor()

# Audit table access
access_log = auditor.audit_table_access('SensitiveDataTable')
print(f"Access events: {len(access_log)}")

# Detect anomalies
anomalies = auditor.detect_anomalous_access('SensitiveDataTable')
if anomalies:
    print("Anomalous access detected:")
    for anomaly in anomalies:
        print(f"User: {anomaly['username']}, Count: {anomaly['access_count']}")

======== Compliance and Data Governance ==========
# Data retention policy implementation
import boto3
from datetime import datetime, timezone

class DataRetentionManager:
    def __init__(self, table_name, retention_days):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table(table_name)
        self.retention_days = retention_days
    
    def cleanup_expired_data(self):
        """Remove data older than retention period"""
        cutoff_date = datetime.now(timezone.utc) - timedelta(days=self.retention_days)
        cutoff_timestamp = int(cutoff_date.timestamp())
        
        # Scan for old data
        response = self.table.scan(
            FilterExpression='CreatedAt < :cutoff',
            ExpressionAttributeValues={':cutoff': cutoff_timestamp}
        )
        
        deleted_count = 0
        for item in response['Items']:
            self.table.delete_item(Key={'Id': item['Id']})
            deleted_count += 1
        
        # Handle pagination
        while 'LastEvaluatedKey' in response:
            response = self.table.scan(
                FilterExpression='CreatedAt < :cutoff',
                ExpressionAttributeValues={':cutoff': cutoff_timestamp},
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            
            for item in response['Items']:
                self.table.delete_item(Key={'Id': item['Id']})
                deleted_count += 1
        
        return deleted_count
    
    def generate_compliance_report(self):
        """Generate compliance report"""
        # Get table statistics
        response = self.table.scan(
            Select='COUNT',
            ProjectionExpression='Id'
        )
        
        total_items = response['Count']
        
        # Get item count by age
        now = datetime.now(timezone.utc)
        age_groups = {
            '0-30 days': 0,
            '31-90 days': 0,
            '91-365 days': 0,
            '365+ days': 0
        }
        
        # This would need to be implemented based on your data model
        # For demonstration, showing structure
        
        return {
            'table_name': self.table.name,
            'total_items': total_items,
            'retention_policy_days': self.retention_days,
            'age_distribution': age_groups,
            'last_cleanup': datetime.now().isoformat()
        }

# Usage
retention_manager = DataRetentionManager('AuditLogs', retention_days=2555)  # 7 years

# Cleanup expired data
deleted_count = retention_manager.cleanup_expired_data()
print(f"Deleted {deleted_count} expired records")

# Generate compliance report
report = retention_manager.generate_compliance_report()
print(json.dumps(report, indent=2))`,
        },
      ],
    },
  ],
};
