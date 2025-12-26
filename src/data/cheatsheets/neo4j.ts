import { Database } from 'lucide-react';

export const neo4jCheatsheet = {
  id: 'neo4j',
  name: 'Neo4j',
  description: 'Master Neo4j from basics to advanced features (2024)',
  icon: Database,
  colorTheme: 'emerald' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Neo4j',
      commands: [
        {
          command: 'Neo4j Introduction',
          description: 'Understanding Neo4j concepts and graph database fundamentals',
          usage: 'Basic Neo4j terminology and concepts',
          example: `# Neo4j is a native graph database management system

======== Key Concepts ==========
# Node: Entity in the graph (like a row in SQL)
# Relationship: Connection between nodes (like foreign keys)
# Property: Key-value pair stored on nodes and relationships
# Label: Category or type for nodes (like tables in SQL)
# Relationship Type: Category for relationships
# Path: Sequence of nodes and relationships
# Graph: Collection of nodes, relationships, and properties

======== Graph Database Benefits ==========
# Natural representation of connected data
# High performance for relationship queries
# Flexible schema (schema-less by default)
# ACID compliance for transactions
# Built-in graph algorithms and analytics
# Visual and intuitive data model
# Perfect for social networks, recommendation engines, fraud detection

======== Neo4j Architecture ==========
# Native graph storage and processing
# Cypher query language for graph patterns
# Bolt protocol for high-performance access
# Cluster support for scalability
# ACID transactions with consistency guarantees`,
        },
        {
          command: 'Installation and Setup',
          description: 'Install Neo4j using different methods',
          usage: 'Desktop, Docker, and server installation',
          example: `# Neo4j 5.x Installation

======== Neo4j Desktop (Recommended) ==========
# Download from: https://neo4j.com/download/
# 1. Install Neo4j Desktop application
# 2. Create new project
# 3. Add database (choose version 5.x)
# 4. Set password for neo4j user
# 5. Start the database

======== Docker Installation ==========
# Basic Docker container
docker run \\
    --name neo4j \\
    -p 7474:7474 -p 7687:7687 \\
    -d \\
    -v $HOME/neo4j/data:/data \\
    -v $HOME/neo4j/logs:/logs \\
    -v $HOME/neo4j/import:/var/lib/neo4j/import \\
    -v $HOME/neo4j/plugins:/plugins \\
    --env NEO4J_AUTH=neo4j/password \\
    --env NEO4J_PLUGINS='["apoc", "graph-data-science"]' \\
    neo4j:5.15.0

======== Docker Compose ==========
version: '3.8'
services:
  neo4j:
    image: neo4j:5.15.0
    container_name: neo4j
    ports:
      - "7474:7474"
      - "7687:7687"
    volumes:
      - neo4j_data:/data
      - neo4j_logs:/logs
      - neo4j_import:/var/lib/neo4j/import
      - neo4j_plugins:/plugins
    environment:
      - NEO4J_AUTH=neo4j/password
      - NEO4J_PLUGINS=["apoc", "graph-data-science"]
      - NEO4J_ACCEPT_LICENSE_AGREEMENT=yes

volumes:
  neo4j_data:
  neo4j_logs:
  neo4j_import:
  neo4j_plugins:

======== Package Installation ==========
# APT Installation (Ubuntu/Debian)
wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
echo 'deb https://debian.neo4j.com stable latest' | sudo tee /etc/apt/sources.list.d/neo4j.list
sudo apt update
sudo apt install neo4j

# YUM Installation (CentOS/RHEL)
rpm --import https://debian.neo4j.com/neotechnology.gpg.key
sudo yum install -y cyrus-sasl-lib
echo '[neo4j]
name=Neo4j RPM Repository
baseurl=https://yum.neo4j.com/stable
enabled=1
gpgcheck=1' | sudo tee /etc/yum.repos.d/neo4j.repo
sudo yum install neo4j

======== Homebrew Installation (macOS) ==========
brew install neo4j`,
        },
        {
          command: 'Neo4j Browser and Shell',
          description: 'Access Neo4j through browser and command line interfaces',
          usage: 'Browser interface and cypher-shell commands',
          example: `# Neo4j Browser Interface

======== Web Browser Access ==========
# URL: http://localhost:7474
# Username: neo4j
# Password: [your password]

======== Browser Commands ==========
:play start              # Getting started guide
:play concepts           # Graph database concepts
:play cypher             # Cypher query language tutorial
:help                    # Show help information
:clear                   # Clear the browser console
:history                 # Show query history

======== Cypher Shell (Command Line) ==========
# Basic connection
cypher-shell -u neo4j -p password

# Connect to remote database
cypher-shell -a bolt://localhost:7687 -u neo4j -p password

# Execute Cypher from file
cypher-shell -u neo4j -p password -f queries.cypher

# Export results to CSV
cypher-shell -u neo4j -p password --format plain "MATCH (n) RETURN n.name" > results.csv

# Non-interactive mode
cypher-shell -u neo4j -p password "MATCH (n) RETURN count(n)"

======== Advanced Shell Options ==========
# Format options: plain, verbose, csv
cypher-shell --format verbose "MATCH (n) RETURN n"

# Set output file
cypher-shell -o output.txt "MATCH (n) RETURN n.name"

# Use custom database
cypher-shell -d myapp "MATCH (n) RETURN count(n)"

# Connection with encryption
cypher-shell -a bolt+s://localhost:7687 -u neo4j -p password`,
        },
        {
          command: 'Database Management',
          description: 'Start, stop, and manage Neo4j databases',
          usage: 'Service commands and database operations',
          example: `# System Service Management

======== Start/Stop Services ==========
# Systemd (Linux)
sudo systemctl start neo4j
sudo systemctl stop neo4j
sudo systemctl restart neo4j
sudo systemctl status neo4j

# Enable auto-start
sudo systemctl enable neo4j

# Check logs
sudo journalctl -u neo4j -f

# macOS Homebrew
brew services start neo4j
brew services stop neo4j
brew services restart neo4j

======== Database Operations ==========
# Show current database
SHOW CURRENT DATABASE;

# List all databases
SHOW DATABASES;

# Create new database
CREATE DATABASE myapp;

# Create database with options
CREATE DATABASE analytics 
  OPTIONS {
    FROM existing_db
  };

# Switch database
:use myapp;

# Drop database
DROP DATABASE myapp;

# Database information
CALL db.info();
CALL db.labels();
CALL db.relationshipTypes();
CALL db.propertyKeys();

======== Database Configuration ==========
# Show configuration
CALL dbms.listConfig();

# Update configuration
CALL dbms.setConfigValue('dbms.memory.heap.initial_size', '512m');

# Show runtime information
CALL dbms.queryJmx('org.neo4j:instance=kernel#0,name=Store file sizes');

# Database statistics
CALL db.stats.retrieve('GRAPH COUNTS');
CALL db.stats.retrieve('RELATIONSHIP COUNTS');`,
        },
      ],
    },
    {
      title: 'Basic Graph Operations',
      commands: [
        {
          command: 'Create Nodes',
          description: 'Create nodes with properties and labels',
          usage: 'CREATE, MERGE commands for nodes',
          example: `# Creating Nodes

======== Basic Node Creation ==========
# Create single node
CREATE (p:Person {name: "John Doe", age: 30, email: "john@example.com"});

# Create multiple nodes
CREATE 
    (p1:Person {name: "Jane Smith", age: 25}),
    (p2:Person {name: "Bob Johnson", age: 35}),
    (c1:Company {name: "Tech Corp", founded: 2010});

======== Complex Node Properties ==========
# Node with array property
CREATE (p:Person {
    name: "Alice Brown",
    skills: ["JavaScript", "Python", "Neo4j"],
    location: {city: "San Francisco", country: "USA"}
});

# Node with temporal properties
CREATE (p:Person {
    name: "Charlie Davis",
    created: timestamp(),
    updated: datetime(),
    birthdate: date('1990-05-15')
});

======== MERGE to Avoid Duplicates ==========
# Create if not exists, update if exists
MERGE (p:Person {email: "david@example.com"})
ON CREATE SET p.name = "David Wilson", p.age = 28
ON MATCH SET p.updated = timestamp();

# MERGE with multiple properties
MERGE (p:Person {name: "Eve Anderson", email: "eve@example.com"})
ON CREATE SET p.age = 32, p.created = timestamp()
ON MATCH SET p.updated = timestamp();

======== Parameterized Creation ==========
# Using parameters
CREATE (p:Person $props);

# With parameter object
:param {
  name: "Frank Miller",
  age: 40,
  email: "frank@example.com"
}
CREATE (p:Person $props);`,
        },
        {
          command: 'Create Relationships',
          description: 'Create relationships between nodes',
          usage: 'CREATE, MERGE with relationships',
          example: `# Creating Relationships

======== Basic Relationship Creation ==========
# Create relationship between existing nodes
MATCH (p:Person {name: "John Doe"}), (c:Company {name: "Tech Corp"})
CREATE (p)-[:WORKS_FOR {since: 2020, position: "Developer"}]->(c);

# Create nodes and relationships together
CREATE 
    (p:Person {name: "Eve Anderson"}),
    (c:Company {name: "Data Inc"}),
    (p)-[:WORKS_FOR {since: 2019, position: "Data Scientist"}]->(c);

======== Multiple Relationships ==========
# Create multiple relationships
MATCH 
    (p1:Person {name: "John Doe"}),
    (p2:Person {name: "Jane Smith"})
CREATE (p1)-[:FRIENDS_WITH {since: 2018}]->(p2),
       (p2)-[:FRIENDS_WITH {since: 2018}]->(p1);

# Bidirectional relationships
MATCH (p:Person {name: "Alice Brown"}), (p2:Person {name: "Bob Johnson"})
CREATE (p)-[:MARRIED_TO {since: 2015}]->(p2),
       (p2)-[:MARRIED_TO {since: 2015}]->(p);

======== MERGE Relationships ==========
# Create relationship if not exists
MATCH (p:Person {name: "John Doe"}), (c:Company {name: "Tech Corp"})
MERGE (p)-[r:WORKS_FOR]->(c)
ON CREATE SET r.since = 2020, r.position = "Developer"
ON MATCH SET r.updated = timestamp();

======== Self-Referencing Relationships ==========
# Create self-referencing relationship
MATCH (p:Person {name: "John Doe"})
CREATE (p)-[:MANAGES]->(p);

# Hierarchical relationships
MATCH (manager:Person {name: "John Doe"}), (employee:Person {name: "Jane Smith"})
CREATE (manager)-[:MANAGES]->(employee);

======== Variable Relationship Types ==========
# Using parameters for relationship type
:param relType => 'COLLABORATES_WITH'
MATCH (p1:Person {name: "Alice Brown"}), (p2:Person {name: "Bob Johnson"})
CREATE (p1)-[:$relType {project: "AI Research"}]->(p2);`,
        },
        {
          command: 'Basic Query Operations',
          description: 'Query nodes, relationships, and paths',
          usage: 'MATCH, RETURN, WHERE clauses',
          example: `# Basic Query Operations

======== Simple Queries ==========
# Return all nodes
MATCH (n) RETURN n;

# Return specific properties
MATCH (p:Person) RETURN p.name, p.age;

# Count nodes
MATCH (p:Person) RETURN count(p);

======== Filtering with WHERE ==========
# Filter by property
MATCH (p:Person) 
WHERE p.age > 30 
RETURN p.name, p.age;

# Multiple conditions
MATCH (p:Person) 
WHERE p.age >= 25 AND p.age <= 35
RETURN p.name, p.age;

# String matching
MATCH (p:Person) 
WHERE p.name STARTS WITH 'J' 
RETURN p.name;

# Array contains
MATCH (p:Person) 
WHERE 'JavaScript' IN p.skills 
RETURN p.name, p.skills;

======== Relationship Queries ==========
# Find relationships
MATCH (p:Person)-[r:WORKS_FOR]->(c:Company) 
RETURN p.name, r.position, c.name;

# Find friends
MATCH (p:Person {name: "John Doe"})-[:FRIENDS_WITH]->(friend:Person)
RETURN friend.name;

======== Path Queries ==========
# Find paths
MATCH path = (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN path;

# Shortest path
MATCH (start:Person {name: "Alice"}), (end:Person {name: "Frank"})
MATCH p = shortestPath((start)-[*..6]-(end))
RETURN p;

======== Variable Length Paths ==========
# Friends of friends (2 hops)
MATCH (p:Person {name: "John Doe"})-[:FRIENDS_WITH*2]->(fof:Person)
RETURN fof.name;

# Variable length with range
MATCH (p:Person {name: "John Doe"})-[:FRIENDS_WITH*1..3]->(connection:Person)
RETURN connection.name;

======== Ordering and Limiting ==========
# Order results
MATCH (p:Person) 
RETURN p.name, p.age 
ORDER BY p.age DESC;

# Limit results
MATCH (p:Person) 
RETURN p.name 
ORDER BY p.name 
LIMIT 10;

# Skip and limit (pagination)
MATCH (p:Person) 
RETURN p.name 
SKIP 10 LIMIT 5;`,
        },
        {
          command: 'Update and Delete Operations',
          description: 'Modify and remove nodes and relationships',
          usage: 'SET, REMOVE, DELETE commands',
          example: `# Update and Delete Operations

======== Update Properties ==========
# Set single property
MATCH (p:Person {name: "John Doe"})
SET p.age = 31;

# Set multiple properties
MATCH (p:Person {name: "Jane Smith"})
SET p.age = 26, p.email = "jane.smith@example.com";

# Add property with expression
MATCH (p:Person {name: "Bob Johnson"})
SET p.fullname = p.name + " Johnson";

======== Remove Properties ==========
# Remove single property
MATCH (p:Person {name: "Alice Brown"})
REMOVE p.age;

# Remove multiple properties
MATCH (p:Person {name: "Charlie Davis"})
REMOVE p.email, p.phone;

======== Delete Operations ==========
# Delete single node (must have no relationships)
MATCH (p:Person {name: "Frank Miller"})
DELETE p;

# Delete node and relationships
MATCH (p:Person {name: "Eve Anderson"})-[r]-()
DELETE r, p;

# Delete all nodes and relationships (use with caution!)
MATCH (n)
DETACH DELETE n;

======== Conditional Updates ==========
# Update if condition is met
MATCH (p:Person)
WHERE p.age < 18
SET p.category = "Minor";

# Increment property
MATCH (p:Person {name: "John Doe"})
SET p.login_count = coalesce(p.login_count, 0) + 1;

======== Batch Operations ==========
# Update multiple nodes
MATCH (p:Person)
WHERE p.age > 30
SET p.category = "Senior";

# Remove nodes with specific criteria
MATCH (p:Person)
WHERE p.last_login < timestamp() - duration({days: 365})
DETACH DELETE p;`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Cypher Queries',
      commands: [
        {
          command: 'Pattern Matching',
          description: 'Advanced pattern matching in Cypher',
          usage: 'Complex patterns and conditional relationships',
          example: `# Advanced Pattern Matching

======== Complex Patterns ==========
# Multiple relationship types
MATCH (p:Person)-[:WORKS_FOR|:CONTRACTS_WITH]->(c:Company)
RETURN p.name, c.name;

# Optional relationships
MATCH (p:Person {name: "John Doe"})
OPTIONAL MATCH (p)-[:WORKS_FOR]->(c:Company)
RETURN p.name, c.name AS company;

======== Path Patterns ==========
# Paths with specific length
MATCH path = (p:Person)-[:FRIENDS_WITH*3]->(friend:Person)
RETURN path;

# Paths with conditions
MATCH path = (p:Person)-[r*]->(c:Company)
WHERE ALL(rel IN relationships(path) WHERE rel.since > 2020)
RETURN path;

======== Variable Path Patterns ==========
# Find cycles
MATCH (p:Person)-[:FRIENDS_WITH*]->(p)
RETURN p.name;

# Find paths without cycles
MATCH path = (start:Person)-[:FRIENDS_WITH*]->(end:Person)
WHERE start <> end AND length(path) > 0
RETURN path;

======== Conditional Patterns ==========
# Pattern comprehension
MATCH (p:Person {name: "John Doe"})
RETURN [(p)-[:WORKS_FOR]->(c) | c.name] AS companies;

# List comprehension with conditions
MATCH (p:Person)
RETURN [skill IN p.skills WHERE size(skill) > 5] AS longSkills;

======== Pattern Expressions ==========
# Existence checking
MATCH (p:Person)
WHERE EXISTS((p)-[:WORKS_FOR]->())
RETURN p.name;

# Count relationships
MATCH (p:Person)
WHERE size((p)-[:FRIENDS_WITH]->()) > 5
RETURN p.name, size((p)-[:FRIENDS_WITH]->()) AS friendCount;`,
        },
        {
          command: 'Aggregation and Grouping',
          description: 'Aggregate functions and grouping operations',
          usage: 'COUNT, SUM, AVG, COLLECT functions',
          example: `# Aggregation and Grouping

======== Basic Aggregations ==========
# Count by category
MATCH (p:Person)
RETURN p.category, count(p) AS count
ORDER BY count DESC;

# Average age by company
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN c.name, avg(p.age) AS avgAge;

# Sum and max values
MATCH (p:Person)
RETURN 
  max(p.age) AS oldest,
  min(p.age) AS youngest,
  sum(p.age) AS totalAge,
  avg(p.age) AS avgAge;

======== Collection Functions ==========
# Collect values into arrays
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN c.name, collect(p.name) AS employees;

# Collect with ordering
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN c.name, collect(p.name ORDER BY p.age DESC) AS employeesByAge;

# Unique collections
MATCH (p:Person)
RETURN collect(DISTINCT p.category) AS categories;

======== Advanced Aggregations ==========
# Multiple aggregations
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN 
  c.name,
  count(p) AS employeeCount,
  avg(p.age) AS avgAge,
  collect(p.name) AS employees;

# Aggregation with conditions
MATCH (p:Person)
RETURN 
  p.category,
  count(p) AS total,
  count(CASE WHEN p.age > 30 THEN 1 END) AS over30,
  avg(p.age) AS avgAge;

======== Statistical Functions ==========
# Percentiles (using APOC)
CALL apoc.coll.percentiles(collect(p.age), [0.25, 0.5, 0.75, 0.9]) AS percentiles;

# Standard deviation
MATCH (p:Person)
WITH collect(p.age) AS ages
RETURN apoc.math.stdev(ages) AS stdDev;

======== Grouping with Multiple Keys ==========
# Group by multiple properties
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN c.name, p.category, count(p) AS count
ORDER BY c.name, count DESC;`,
        },
        {
          command: 'Subqueries and CTEs',
          description: 'Subqueries and Common Table Expressions',
          usage: 'CALL subquery, WITH clauses',
          example: `# Subqueries and CTEs

======== WITH Clauses ==========
# Chain queries with WITH
MATCH (p:Person)
WITH p, size((p)-[:FRIENDS_WITH]->()) AS friendCount
WHERE friendCount > 5
RETURN p.name, friendCount;

# Multiple WITH clauses
MATCH (p:Person)
WITH p, p.age AS age
WHERE age > 25
WITH p, age, age - 25 AS yearsOver25
RETURN p.name, yearsOver25;

======== CALL Subqueries ==========
# CALL with RETURN
CALL {
  MATCH (p:Person)
  WHERE p.age > 30
  RETURN p
}
RETURN p.name, p.age;

# CALL with parameters
CALL {
  WITH $minAge
  MATCH (p:Person)
  WHERE p.age >= $minAge
  RETURN count(p) AS count
} IN TRANSACTIONS OF 1000 ROWS
RETURN count;

======== EXISTS Subqueries ==========
# EXISTS with patterns
MATCH (p:Person)
WHERE EXISTS {
  MATCH (p)-[:WORKS_FOR]->(c:Company)
  WHERE c.founded < 2010
}
RETURN p.name;

======== UNION Operations ==========
# Union queries
MATCH (p:Person)
WHERE p.age > 40
RETURN p.name, p.age AS value, "Person" AS type
UNION
MATCH (c:Company)
WHERE c.founded > 2010
RETURN c.name, c.founded AS value, "Company" AS type;

======== Conditional Aggregation ==========
# CASE statements in aggregation
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
RETURN 
  c.name,
  count(p) AS total,
  sum(CASE WHEN p.age < 30 THEN 1 ELSE 0 END) AS under30,
  sum(CASE WHEN p.age >= 30 THEN 1 ELSE 0 END) AS over30;`,
        },
      ],
    },
    {
      title: 'Graph Algorithms',
      commands: [
        {
          command: 'Path Finding Algorithms',
          description: 'Find paths and shortest routes in graphs',
          usage: 'shortestPath, allShortestPaths functions',
          example: `# Path Finding Algorithms

======== Shortest Path ==========
# Single shortest path
MATCH (start:Person {name: "Alice"}), (end:Person {name: "Frank"})
MATCH p = shortestPath((start)-[*..6]-(end))
RETURN p;

# Shortest path with relationship type
MATCH (start:Person {name: "Alice"}), (end:Person {name: "Frank"})
MATCH p = shortestPath((start)-[:FRIENDS_WITH*]-(end))
RETURN p;

======== All Shortest Paths ==========
# All shortest paths
MATCH (start:Person {name: "Alice"}), (end:Person {name: "Frank"})
MATCH p = allShortestPaths((start)-[*..6]-(end))
RETURN p;

======== Path Analysis ==========
# Path length analysis
MATCH (start:Person {name: "Alice"}), (end:Person {name: "Frank"})
MATCH p = (start)-[*..10]-(end)
RETURN length(p) AS pathLength, p
ORDER BY pathLength
LIMIT 5;

======== Weighted Shortest Path (APOC) ==========
# Shortest path with weights
CALL apoc.algo.dijkstra(
  startNode, endNode, 'RELATIONSHIP_TYPE', 'weight'
) YIELD path, weight
RETURN path, weight;

======== Bidirectional Search ==========
# Efficient bidirectional search
MATCH (start:Person {name: "Alice"}), (end:Person {name: "Frank"})
CALL apoc.path.expandConfig(start, {
  relationshipFilter: "FRIENDS_WITH",
  maxDepth: 6,
  terminatorNodes: [end],
  bfs: true
}) YIELD path
WHERE end IN nodes(path)
RETURN path;`,
        },
        {
          command: 'Centrality and Importance',
          description: 'Calculate node importance and centrality',
          usage: 'Degree centrality, betweenness, PageRank',
          example: `# Centrality Algorithms

======== Degree Centrality ==========
# Node degree (number of connections)
MATCH (p:Person)
RETURN p.name, size((p)-[:FRIENDS_WITH]-()) AS degree
ORDER BY degree DESC;

# In-degree and out-degree
MATCH (p:Person)
RETURN 
  p.name,
  size((p)<-[:WORKS_FOR]-()) AS inDegree,
  size((p)-[:WORKS_FOR]->()) AS outDegree;

======== PageRank (Graph Data Science) ==========
# PageRank algorithm
CALL gds.pageRank.stream({
  nodeProjection: 'Person',
  relationshipProjection: {
    FRIENDS_WITH: {
      orientation: 'UNDIRECTED'
    }
  }
})
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).name AS name, score
ORDER BY score DESC;

======== Betweenness Centrality (APOC) ==========
# Betweenness centrality calculation
CALL apoc.algo.betweenness(['Person'], ['FRIENDS_WITH'], 'BOTH')
YIELD node, betweenness
RETURN node.name, betweenness
ORDER BY betweenness DESC;

======== Closeness Centrality (APOC) ==========
# Closeness centrality
CALL apoc.algo.closeness(['Person'], ['FRIENDS_WITH'], 'BOTH')
YIELD node, closeness
RETURN node.name, closeness
ORDER BY closeness DESC;

======== Community Detection ==========
# Label Propagation Algorithm
CALL gds.labelPropagation.stream({
  nodeProjection: 'Person',
  relationshipProjection: {
    FRIENDS_WITH: {
      orientation: 'UNDIRECTED'
    }
  }
})
YIELD nodeId, communityId
RETURN 
  communityId,
  collect(gds.util.asNode(nodeId).name) AS communityMembers
ORDER BY communityId;`,
        },
        {
          command: 'Graph Analytics',
          description: 'Advanced graph analytics and metrics',
          usage: 'Triangle counting, clustering coefficient',
          example: `# Graph Analytics

======== Triangle Counting ==========
# Count triangles in social network
CALL gds.triangleCount.stream({
  nodeProjection: 'Person',
  relationshipProjection: {
    FRIENDS_WITH: {
      orientation: 'UNDIRECTED'
    }
  }
})
YIELD nodeId, triangleCount
RETURN 
  gds.util.asNode(nodeId).name AS name,
  triangleCount
ORDER BY triangleCount DESC;

======== Clustering Coefficient ==========
# Local clustering coefficient
MATCH (p:Person)
WITH p, size((p)-[:FRIENDS_WITH]-()) AS degree
WHERE degree > 1
MATCH (p)-[:FRIENDS_WITH]-(friend)-[:FRIENDS_WITH]-(friendOfFriend)
WHERE p <> friendOfFriend
WITH p, degree, count(DISTINCT friendOfFriend) AS connectedNeighbors
RETURN 
  p.name,
  degree,
  connectedNeighbors,
  (connectedNeighbors / (degree * (degree - 1) / 2)) AS clusteringCoefficient
ORDER BY clusteringCoefficient DESC;

======== Connected Components ==========
# Find connected components
CALL gds.wcc.stream({
  nodeProjection: '*',
  relationshipProjection: '*'
})
YIELD nodeId, componentId
RETURN 
  componentId,
  count(*) AS size,
  collect(gds.util.asNode(nodeId).name) AS members
ORDER BY size DESC;

======== Graph Density ==========
# Calculate graph density
MATCH ()-->()
WITH count(*) AS numRelationships
MATCH (n)
WITH numRelationships, count(n) AS numNodes
RETURN 
  numNodes,
  numRelationships,
  (2.0 * numRelationships) / (numNodes * (numNodes - 1)) AS density;

======== Graph Statistics ==========
# Comprehensive graph statistics
CALL apoc.meta.stats() YIELD labels, relTypes, stats
RETURN labels, relTypes, stats;`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Index Management',
          description: 'Create and manage indexes for performance',
          usage: 'CREATE INDEX, DROP INDEX commands',
          example: `# Index Management

======== Create Indexes ==========
# Single property index
CREATE INDEX person_name_index FOR (p:Person) ON (p.name);

# Composite index
CREATE INDEX person_name_age_index FOR (p:Person) ON (p.name, p.age);

# Relationship property index
CREATE INDEX works_for_since_index FOR ()-[r:WORKS_FOR]-() ON (r.since);

# Text indexes
CREATE TEXT INDEX person_details_index FOR (p:Person) ON EACH [p.name, p.description];

# Point indexes (spatial)
CREATE POINT INDEX person_location_index FOR (p:Person) ON (p.location);

======== Show Indexes ==========
# List all indexes
SHOW INDEXES;

# Show indexes for specific label
SHOW INDEXES FOR :Person;

# Index usage statistics
CALL db.indexes();

======== Drop Indexes ==========
# Drop specific index
DROP INDEX person_name_index;

# Drop index if exists
DROP INDEX person_name_index IF EXISTS;

======== Index Configuration ==========
# Create index with options
CREATE INDEX person_name_index FOR (p:Person) ON (p.name)
OPTIONS {
  indexProvider: 'native-btree-1.0',
  indexConfig: {
    'spatial.cartesian.min': [-1000000, -1000000],
    'spatial.cartesian.max': [1000000, 1000000]
  }
};

======== Index Usage Analysis ==========
# Query execution plan
EXPLAIN MATCH (p:Person {name: "John Doe"}) RETURN p;

# Profile query execution
PROFILE MATCH (p:Person {name: "John Doe"}) RETURN p;

# Index usage statistics
CALL db.index.fulltext.listAvailableAnalyzers();`,
        },
        {
          command: 'Query Optimization',
          description: 'Optimize Cypher queries for better performance',
          usage: 'EXPLAIN, PROFILE, query hints',
          example: `# Query Optimization

======== Query Planning ==========
# Explain query plan
EXPLAIN MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE p.age > 30
RETURN p.name, c.name;

# Profile query execution
PROFILE MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE p.age > 30
RETURN p.name, c.name;

======== Query Optimization Tips ==========
# Use specific labels instead of MATCH (n)
MATCH (p:Person) WHERE p.name = "John"  -- Good
MATCH (n) WHERE n:Person AND n.name = "John"  -- Less optimal

# Use index-friendly predicates
MATCH (p:Person) WHERE p.name = "John"  -- Uses index
MATCH (p:Person) WHERE p.name STARTS WITH "Jo"  -- Uses index
MATCH (p:Person) WHERE p.name CONTAINS "oh"  -- Does not use index

# Limit result sets early
MATCH (p:Person)
WHERE p.age > 30
RETURN p.name
LIMIT 100;  -- Apply limit early

======== Query Hints ==========
# USE INDEX hint
MATCH (p:Person)
USING INDEX p:Person(name)
WHERE p.name = "John Doe"
RETURN p;

# USE SCAN hint (force full scan)
MATCH (p:Person)
USING SCAN p:Person
WHERE p.age > 30
RETURN p.name;

# JOIN hints
MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
USING JOIN ON p
WHERE p.age > 30
RETURN p.name, c.name;

======== Memory Management ==========
# Use PERIODIC COMMIT for large operations
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM 'file:///data.csv' AS row
CREATE (p:Person {name: row.name, age: toInteger(row.age)});

# Query memory configuration
CALL dbms.setConfigValue('db.memory.transaction.global_max_size', '1g');

======== Performance Monitoring ==========
# Query log monitoring
CALL dbms.listQueries();

# Transaction monitoring
CALL dbms.listTransactions();

# Performance metrics
CALL dbms.queryJmx('org.neo4j:instance=kernel#0,name=Transactions');`,
        },
        {
          command: 'Memory and Configuration',
          description: 'Configure Neo4j for optimal performance',
          usage: 'Memory settings and configuration tuning',
          example: `# Memory and Configuration

======== Heap Memory Configuration ==========
# Set heap size in neo4j.conf
dbms.memory.heap.initial_size=512m
dbms.memory.heap.max_size=2G

# Page cache memory
dbms.memory.pagecache.size=1G

======== Transaction Configuration ==========
# Transaction timeout
dbms.transaction.timeout=60s

# Transaction log rotation
dbms.tx_log.rotation.retention_policy=100M size

======== Network Configuration ==========
# Bolt connector settings
server.bolt.listen_address=0.0.0.0:7687
server.bolt.advertised_address=localhost:7687

# HTTP connector settings
server.http.listen_address=0.0.0.0:7474
server.http.advertised_address=localhost:7474

======== Performance Tuning ==========
# GC configuration
dbms.jvm.additional=-XX:+UseG1GC
dbms.jvm.additional=-XX:MaxGCPauseMillis=200

# Connection pooling
server.bolt.connection_keep_alive=300s

======== Monitoring Configuration ==========
# Enable metrics
server.metrics.enabled=true
server.metrics.jvm.enabled=true
server.metrics.filter=*.*

# JMX monitoring
server.jvm.additional=-Dcom.sun.management.jmxremote

======== Runtime Configuration Changes ==========
# Update configuration at runtime
CALL dbms.setConfigValue('db.memory.pagecache.size', '2g');

# Show current configuration
CALL dbms.listConfig();

# Reload configuration
CALL dbms.reloadConfig();`,
        },
      ],
    },
    {
      title: 'Advanced Data Modeling',
      commands: [
        {
          command: 'Graph Schema Design',
          description: 'Design effective graph schemas',
          usage: 'Best practices for graph modeling',
          example: `# Graph Schema Design

======== Label Strategy ==========
# Use specific, meaningful labels
CREATE (p:Person:Customer {name: "John"});
CREATE (p:Person:Employee {name: "Jane"});
CREATE (o:Order:Purchase {id: "123"});

# Hierarchical labels
CREATE (p:Person:Employee:Manager {name: "Bob"});
CREATE (p:Person:Employee:Developer {name: "Alice"});

======== Relationship Design ==========
# Use descriptive relationship types
CREATE (p:Person)-[:PURCHASED]->(o:Order);
CREATE (o:Order)-[:CONTAINS]->(p:Product);
CREATE (p:Product)-[:MANUFACTURED_BY]->(c:Company);

# Time-based relationships
CREATE (p:Person)-[:FRIENDS_WITH {since: date('2020-01-15')}]->(p2:Person);

======== Property Modeling ==========
# Normalized properties
CREATE (p:Person {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  birthDate: date('1990-05-15')
});

# Denormalized for performance
CREATE (p:Person {
  fullName: "John Doe",
  email: "john@example.com",
  age: 34,
  ageGroup: "30-40"
});

======== Temporal Modeling ==========
# Event nodes with timestamps
CREATE (e:Event {
  type: "Login",
  timestamp: datetime(),
  userId: "123"
});

CREATE (u:User {id: "123"})-[:PERFORMED]->(e);

# Versioned relationships
CREATE (p:Person)-[:WORKS_FOR {
  since: date('2020-01-01'),
  until: date('2023-12-31'),
  position: "Developer"
}]->(c:Company);

======== Multi-Model Patterns ==========
# Graph + Tree (hierarchical data)
CREATE (root:Category {name: "Electronics"})
CREATE (root)-[:HAS_SUBCATEGORY]->(sub1:Category {name: "Computers"})
CREATE (sub1)-[:HAS_SUBCATEGORY]->(sub2:Category {name: "Laptops"});

# Graph + Network (social network)
CREATE (u:User {id: "1"})-[:FOLLOWS {since: date()}]->(u2:User {id: "2"});
CREATE (u)-[:INTERACTED_WITH {type: "like", timestamp: datetime()}]->(u2);`,
        },
        {
          command: 'Data Validation and Constraints',
          description: 'Ensure data integrity with constraints',
          usage: 'CREATE CONSTRAINT, validation rules',
          example: `# Data Validation and Constraints

======== Uniqueness Constraints ==========
# Ensure unique property per label
CREATE CONSTRAINT person_email_unique FOR (p:Person) REQUIRE p.email IS UNIQUE;

# Node key constraint (multiple properties)
CREATE CONSTRAINT person_name_email_key 
FOR (p:Person) REQUIRE p.name, p.email IS NODE KEY;

======== Existence Constraints ==========
# Require property to exist
CREATE CONSTRAINT person_name_required FOR (p:Person) REQUIRE p.name IS NOT NULL;

# Relationship property existence
CREATE CONSTRAINT works_for_since_required 
FOR ()-[r:WORKS_FOR]-() REQUIRE r.since IS NOT NULL;

======== Data Type Constraints ==========
# Property type validation
CREATE CONSTRAINT person_age_numeric 
FOR (p:Person) REQUIRE p.age IS INTEGER;

======== Custom Validation (Triggers) ==========
# APOC triggers for validation
CALL apoc.trigger.add(
  'validate_person_age',
  'UNWIND $createdNodes AS n
   WITH n
   WHERE n:Person AND (n.age < 0 OR n.age > 150)
   CALL apoc.util.abort("Invalid age: " + n.age, null)',
  {phase: 'before'}
);

======== Data Quality Checks ==========
# Find nodes missing required properties
MATCH (p:Person)
WHERE p.name IS NULL OR p.email IS NULL
RETURN p;

# Find duplicate properties
MATCH (p:Person)
WITH p.email AS email, collect(p) AS nodes
WHERE size(nodes) > 1
RETURN email, nodes;

# Data consistency checks
MATCH (p:Person)-[r:WORKS_FOR]->(c:Company)
WHERE r.since > date()
RETURN p.name, c.name, r.since AS invalidSince;`,
        },
        {
          command: 'Graph Refactoring',
          description: 'Refactor and evolve graph schemas',
          usage: 'Schema evolution and data migration',
          example: `# Graph Refactoring

======== Label Management ==========
# Add label to nodes
MATCH (p:Person)
WHERE p.age > 65
SET p:SeniorCitizen;

# Remove label from nodes
MATCH (p:Person:SeniorCitizen)
WHERE p.age <= 65
REMOVE p:SeniorCitizen;

# Rename label (create new, remove old)
MATCH (p:OldLabel)
SET p:NewLabel
REMOVE p:OldLabel;

======== Relationship Refactoring ==========
# Change relationship type
MATCH (p1:Person)-[r:OLD_REL]->(p2:Person)
CREATE (p1)-[:NEW_REL {properties: properties(r)}]->(p2)
DELETE r;

# Split relationship into multiple
MATCH (p:Person)-[r:WORKS_FOR]->(c:Company)
WHERE exists(r.projects)
FOREACH (project IN r.projects |
  CREATE (p)-[:WORKED_ON {project: project, company: c.name}]->(c)
)
DELETE r;

======== Property Refactoring ==========
# Move property from node to relationship
MATCH (p:Person)-[r:WORKS_FOR]->(c:Company)
WHERE exists(p.department)
SET r.department = p.department
REMOVE p.department;

# Normalize property values
MATCH (p:Person)
WHERE p.email CONTAINS ' '
SET p.email = replace(p.email, ' ', '');

======== Schema Migration ==========
# Gradual schema migration
MATCH (p:Person)
WHERE NOT p:NewSchema
SET p:NewSchema, p.migratedAt = datetime()
WITH count(*) AS migratedCount
CALL apoc.log.info("Migrated " + migratedCount + " persons to new schema")
RETURN migratedCount;

======== Data Cleanup ==========
# Remove duplicate nodes
MATCH (p:Person)
WITH p.email AS email, collect(p) AS nodes
WHERE size(nodes) > 1
FOREACH (n IN tail(nodes) | DETACH DELETE n);

# Remove orphaned nodes
MATCH (n)
WHERE size((n)-[]-()) = 0
DELETE n;`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Enterprise Features',
      commands: [
        {
          command: 'Clustering and High Availability',
          description: 'Configure Neo4j clusters for scalability',
          usage: 'Causal clustering, replication',
          example: `# Neo4j Clustering

======== Causal Cluster Setup ==========
# Core server configuration (neo4j.conf)
server.cluster.enabled=true
server.cluster.discovery.type=LIST
server.cluster.discovery.list=core1:5000,core2:5000,core3:5000
server.cluster.minimum_core_cluster_size_at_formation=3
server.cluster.minimum_core_cluster_size_at_runtime=3

======== Read Replica Configuration ==========
# Read replica settings
server.cluster.discovery.type=LIST
server.cluster.discovery.list=core1:5000,core2:5000,core3:5000
server.cluster.read_replica=true

======== Cluster Management ==========
# Show cluster status
CALL dbms.cluster.overview();

# Show cluster topology
CALL dbms.cluster.routing.getServers();

# Cluster health check
CALL dbms.cluster.checkConnectivity();

======== Failover and Recovery ==========
# Switch to read replica for reads
:use mydb_replica;

# Monitor replication lag
CALL dbms.queryJmx('org.neo4j:instance=kernel#0,name=Replication');

======== Load Balancing ==========
# Configure routing driver
# Bolt+routing protocol
bolt+routing://localhost:7687

# Driver configuration example
driver = GraphDatabase.driver(
    "bolt+routing://localhost:7687",
    auth.basic("neo4j", "password"),
    RoutingControl.WRITE
);`,
        },
        {
          command: 'Security and Authentication',
          description: 'Configure security features and access control',
          usage: 'Users, roles, and authentication',
          example: `# Security Configuration

======== User Management ==========
# Create users
CREATE USER alice SET PASSWORD 'secure123' CHANGE NOT REQUIRED;
CREATE USER bob SET PASSWORD 'secure456' CHANGE REQUIRED;

# List users
SHOW USERS;

# Modify user
ALTER USER alice SET PASSWORD 'newpassword123' CHANGE NOT REQUIRED;
ALTER USER alice SET STATUS SUSPENDED;
ALTER USER alice SET STATUS ACTIVE;

# Delete user
DROP USER alice;

======== Role Management ==========
# Create roles
CREATE ROLE dataAnalyst;
CREATE ROLE admin;
CREATE ROLE readonly;

# Grant privileges to roles
GRANT ACCESS ON DATABASE neo4j TO dataAnalyst;
GRANT READ {*} ON GRAPH neo4j TO dataAnalyst;
GRANT WRITE ON GRAPH neo4j TO admin;

# Assign roles to users
GRANT ROLE dataAnalyst TO alice;
GRANT ROLE admin TO bob;

# Show roles and privileges
SHOW ROLES;
SHOW ROLE dataAnalyst PRIVILEGES;
SHOW USER alice PRIVILEGES;

======== Authentication Configuration ==========
# Enable authentication
dbms.security.auth_enabled=true

# LDAP authentication
dbms.security.auth_provider=ldap
dbms.security.ldap.host=ldap://ldap.example.com:389
dbms.security.ldap.user_dn_template=uid={0},ou=users,dc=example,dc=com

======== Network Security ==========
# SSL/TLS configuration
server.bolt.tls_level=REQUIRED
server.bolt.ssl_policy=bolt
server.http.ssl_policy=https

# IP whitelist
dbms.security.allowlist=127.0.0.1,localhost

======== Audit Logging ==========
# Enable audit logging
dbms.security.log_successful_authentication=true
dbms.security.audit_log.enabled=true
dbms.security.audit_log.rotation.policy=SIZE
dbms.security.audit_log.rotation.size=20M`,
        },
        {
          command: 'Backup and Recovery',
          description: 'Backup and restore Neo4j databases',
          usage: 'Online and offline backup strategies',
          example: `# Backup and Recovery

======== Online Backup ==========
# Create online backup
neo4j-admin backup --backup-dir=/backup --name=mybackup

# Incremental backup
neo4j-admin backup --backup-dir=/backup --name=mybackup --incremental

# Scheduled backup script
#!/bin/bash
BACKUP_DIR="/backup/neo4j"
DATE=$(date +%Y%m%d_%H%M%S)
neo4j-admin backup --backup-dir=$BACKUP_DIR --name=backup_$DATE

======== Offline Backup ==========
# Stop database
sudo systemctl stop neo4j

# Copy database files
cp -r /var/lib/neo4j/data /backup/neo4j_$(date +%Y%m%d)

======== Restore Database ==========
# Restore from backup
neo4j-admin restore --from=/backup/mybackup --database=neo4j

# Restore to different database
neo4j-admin restore --from=/backup/mybackup --database=newdb

======== Point-in-Time Recovery ==========
# Using transaction logs
neo4j-admin check-consistency --database=neo4j

# Recover specific transaction
neo4j-admin recover --database=neo4j --from-tx-id=12345

======== Backup Automation ==========
# Cron job for daily backups
0 2 * * * /usr/local/bin/neo4j-backup.sh

# Backup script with retention
#!/bin/bash
BACKUP_DIR="/backup/neo4j"
RETENTION_DAYS=7
DATE=$(date +%Y%m%d_%H%M%S)

neo4j-admin backup --backup-dir=$BACKUP_DIR --name=backup_$DATE

# Remove old backups
find $BACKUP_DIR -name "backup_*" -mtime +$RETENTION_DAYS -delete

======== Cloud Backup ==========
# AWS S3 backup
aws s3 cp /backup/mybackup s3://my-backup-bucket/neo4j/

# Google Cloud Storage
gsutil cp -r /backup/mybackup gs://my-backup-bucket/neo4j/`,
        },
      ],
    },
    {
      title: 'Integration and APIs',
      commands: [
        {
          command: 'Neo4j Drivers',
          description: 'Connect to Neo4j from various programming languages',
          usage: 'Official drivers and connection examples',
          example: `# Neo4j Drivers

======== Python Driver ==========
# Installation
pip install neo4j

# Connection example
from neo4j import GraphDatabase

driver = GraphDatabase.driver("bolt://localhost:7687", 
                              auth=("neo4j", "password"))

# Query execution
with driver.session() as session:
    result = session.run("MATCH (p:Person) RETURN p.name AS name")
    for record in result:
        print(record["name"])

# Transaction management
with driver.session() as session:
    with session.begin_transaction() as tx:
        tx.run("CREATE (p:Person {name: $name})", name="Alice")
        tx.commit()

======== JavaScript Driver ==========
# Installation
npm install neo4j-driver

// Connection example
const neo4j = require('neo4j-driver');

const driver = neo4j.driver('bolt://localhost:7687', 
                            neo4j.auth.basic('neo4j', 'password'));

// Async/await query
const session = driver.session();
try {
    const result = await session.run('MATCH (p:Person) RETURN p.name');
    result.records.forEach(record => {
        console.log(record.get('p.name'));
    });
} finally {
    await session.close();
}

======== Java Driver ==========
// Maven dependency
// <dependency>
//     <groupId>org.neo4j.driver</groupId>
//     <artifactId>neo4j-java-driver</artifactId>
//     <version>5.15.0</version>
// </dependency>

import org.neo4j.driver.*;

Driver driver = GraphDatabase.driver("bolt://localhost:7687", 
                                    AuthTokens.basic("neo4j", "password"));

try (Session session = driver.session()) {
    Result result = session.run("MATCH (p:Person) RETURN p.name");
    while (result.hasNext()) {
        Record record = result.next();
        System.out.println(record.get("p.name").asString());
    }
}

======== Connection Pooling ==========
# Python connection pool
driver = GraphDatabase.driver("bolt://localhost:7687",
                              auth=("neo4j", "password"),
                              max_connection_lifetime=30 * 60,
                              max_connection_pool_size=50)

# Java connection pool
Config config = Config.builder()
    .withMaxConnectionLifetime(30, TimeUnit.MINUTES)
    .withMaxConnectionPoolSize(50)
    .withConnectionAcquisitionTimeout(60, TimeUnit.SECONDS)
    .build();`,
        },
        {
          command: 'REST API Integration',
          description: 'Use Neo4j REST API for integration',
          usage: 'Transactional Cypher HTTP endpoint',
          example: `# Neo4j REST API

======== Transactional Cypher ==========
# Single statement
POST http://localhost:7474/db/neo4j/tx/commit
Content-Type: application/json

{
  "statements": [
    {
      "statement": "MATCH (p:Person) RETURN p.name AS name LIMIT 10",
      "parameters": {}
    }
  ]
}

# Multiple statements
POST http://localhost:7474/db/neo4j/tx/commit
Content-Type: application/json

{
  "statements": [
    {
      "statement": "CREATE (p:Person {name: $name})",
      "parameters": {"name": "Alice"}
    },
    {
      "statement": "MATCH (p:Person) RETURN count(p) AS count",
      "parameters": {}
    }
  ]
}

======== Open Transaction ==========
# Begin transaction
POST http://localhost:7474/db/neo4j/tx
Content-Type: application/json

{
  "statements": [
    {
      "statement": "CREATE (p:Person {name: $name})",
      "parameters": {"name": "Bob"}
    }
  ]
}

# Commit transaction
POST http://localhost:7474/db/neo4j/tx/{tx-id}/commit

# Rollback transaction
DELETE http://localhost:7474/db/neo4j/tx/{tx-id}

======== REST API Examples ==========
# curl examples
curl -X POST http://localhost:7474/db/neo4j/tx/commit \\
  -H "Content-Type: application/json" \\
  -d '{
    "statements": [
      {
        "statement": "MATCH (p:Person) RETURN p.name"
      }
    ]
  }'

# Python requests
import requests

response = requests.post(
    "http://localhost:7474/db/neo4j/tx/commit",
    auth=("neo4j", "password"),
    json={
        "statements": [
            {
                "statement": "MATCH (p:Person) RETURN p.name",
                "parameters": {}
            }
        ]
    }
)

data = response.json()
print(data['results'][0]['data'])`,
        },
        {
          command: 'ETL and Data Integration',
          description: 'Load data from various sources into Neo4j',
          usage: 'CSV import, JSON data, ETL pipelines',
          example: `# ETL and Data Integration

======== CSV Import ==========
# Basic CSV import
LOAD CSV WITH HEADERS FROM 'file:///people.csv' AS row
CREATE (p:Person {
  name: row.name,
  age: toInteger(row.age),
  email: row.email
});

# CSV with relationships
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
MATCH (p1:Person {name: row.person1})
MATCH (p2:Person {name: row.person2})
CREATE (p1)-[:FRIENDS_WITH {since: date(row.since)}]->(p2);

# Large CSV with periodic commit
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM 'file:///large_dataset.csv' AS row
CREATE (p:Person {name: row.name, age: toInteger(row.age)});

======== JSON Import ==========
# Using APOC for JSON
CALL apoc.load.json('file:///data.json') YIELD value
CREATE (p:Person {
  name: value.name,
  age: value.age,
  metadata: value.metadata
});

# Nested JSON processing
CALL apoc.load.json('file:///complex.json') YIELD value
UNWIND value.friends AS friend
MERGE (p:Person {name: value.name})
MERGE (f:Person {name: friend.name})
CREATE (p)-[:FRIENDS_WITH]->(f);

======== Database Integration ==========
# PostgreSQL to Neo4j using APOC
CALL apoc.load.jdbc('jdbc:postgresql://localhost/mydb', 
                   'SELECT * FROM users') YIELD row
CREATE (p:Person {
  id: row.id,
  name: row.name,
  email: row.email
});

# MySQL integration
CALL apoc.load.jdbc('jdbc:mysql://localhost/mydb', 
                   'SELECT * FROM orders') YIELD row
MATCH (c:Customer {id: row.customer_id})
CREATE (c)-[:PLACED_ORDER]->(o:Order {
  id: row.id,
  amount: row.amount,
  date: date(row.order_date)
});

======== Streaming Integration ==========
# Kafka integration with APOC
CALL apoc.load.kafka('topic', 'localhost:9092') YIELD value
CREATE (e:Event {
  type: value.type,
  data: value.payload,
  timestamp: datetime()
});

# Real-time data processing
CALL apoc.trigger.add(
  'process_streaming_data',
  'WITH $createdNodes AS nodes
   FOREACH (n IN nodes WHERE n:Event |
     CALL apoc.async.in(n, "apoc.load.json", [n.url], {}) YIELD value
     SET n.processed = true
   )',
  {phase: 'after'}
);

======== ETL Pipeline Example ==========
# Complete ETL pipeline
// 1. Extract data from source
CALL apoc.load.jdbc('jdbc:postgresql://localhost/source', 'SELECT * FROM users') YIELD row

// 2. Transform and clean data
WITH row WHERE row.email IS NOT NULL AND row.name IS NOT NULL

// 3. Load into Neo4j
MERGE (p:Person {email: row.email})
ON CREATE SET 
  p.name = row.name,
  p.created = datetime(),
  p.source = 'postgresql'
ON MATCH SET 
  p.updated = datetime(),
  p.last_sync = datetime()

// 4. Create relationships
WITH p, row
WHERE row.company_id IS NOT NULL
MATCH (c:Company {id: row.company_id})
MERGE (p)-[:WORKS_FOR]->(c);`,
        },
      ],
    },
  ],
};
