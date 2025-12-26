import { Database } from 'lucide-react';

export const neo4jCheatsheet = {
  id: 'neo4j',
  name: 'Neo4j',
  description: 'Master Neo4j from basics to expert operations (2024 Edition)',
  icon: Database,
  colorTheme: 'emerald' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Neo4j',
      commands: [
        {
          command: 'Neo4j Overview',
          description: 'Introduction to Neo4j concepts',
          usage: 'Understanding Neo4j fundamentals',
          example: `Neo4j Overview:
- Native graph database management system
- Property graph model with nodes, relationships, and properties
- ACID compliance for transactional integrity
- Cypher query language for graph operations
- Schema-optional with schema constraints when needed
- High-performance graph traversals and algorithms
- Built-in graph algorithms and data science library
- Supports clusters for scalability and high availability`,
        },
        {
          command: 'Graph Database Concepts',
          description: 'Core graph database terminology',
          usage: 'Understanding graph terminology',
          example: `Core Concepts:
- Node: Entity in the graph (like a row in SQL)
- Relationship: Connection between nodes (like foreign keys)
- Property: Key-value pair stored on nodes and relationships
- Label: Category or type for nodes (like tables in SQL)
- Relationship Type: Category for relationships
- Path: Sequence of nodes and relationships
- Graph: Collection of nodes, relationships, and properties`,
        },
        {
          command: 'Graph Database Benefits',
          description: 'Advantages of graph databases',
          usage: 'Why choose Neo4j',
          example: `Graph Database Benefits:
- Natural representation of connected data
- High performance for relationship queries
- Flexible schema (schema-less by default)
- ACID compliance for transactions
- Built-in graph algorithms and analytics
- Visual and intuitive data model
- Perfect for social networks, recommendation engines, fraud detection`,
        },
        {
          command: 'Neo4j Architecture',
          description: 'Neo4j system architecture',
          usage: 'Understanding Neo4j architecture',
          example: `Neo4j Architecture:
- Native graph storage and processing
- Cypher query language for graph patterns
- Bolt protocol for high-performance access
- Cluster support for scalability
- ACID transactions with consistency guarantees`,
        },
        {
          command: 'Neo4j Desktop Installation',
          description: 'Install Neo4j Desktop',
          usage: 'Desktop installation method',
          example: `Neo4j Desktop Installation:
1. Download from: https://neo4j.com/download/
2. Install Neo4j Desktop application
3. Create new project
4. Add database (choose version 5.x)
5. Set password for neo4j user
6. Start the database`,
        },
        {
          command: 'Docker Installation',
          description: 'Install Neo4j using Docker',
          usage: 'Docker container setup',
          example: `docker run \\
    --name neo4j \\
    -p 7474:7474 -p 7687:7687 \\
    -d \\
    -v $HOME/neo4j/data:/data \\
    -v $HOME/neo4j/logs:/logs \\
    -v $HOME/neo4j/import:/var/lib/neo4j/import \\
    -v $HOME/neo4j/plugins:/plugins \\
    --env NEO4J_AUTH=neo4j/password \\
    --env NEO4J_PLUGINS='["apoc", "graph-data-science"]' \\
    neo4j:5.15.0`,
        },
        {
          command: 'Docker Compose Setup',
          description: 'Neo4j with Docker Compose',
          usage: 'Compose file configuration',
          example: `version: '3.8'
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
  neo4j_plugins:`,
        },
        {
          command: 'APT Installation',
          description: 'Install Neo4j on Ubuntu/Debian',
          usage: 'Package manager installation',
          example: `wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
echo 'deb https://debian.neo4j.com stable latest' | sudo tee /etc/apt/sources.list.d/neo4j.list
sudo apt update
sudo apt install neo4j`,
        },
        {
          command: 'YUM Installation',
          description: 'Install Neo4j on CentOS/RHEL',
          usage: 'RPM package installation',
          example: `rpm --import https://debian.neo4j.com/neotechnology.gpg.key
sudo yum install -y cyrus-sasl-lib
echo '[neo4j]
name=Neo4j RPM Repository
baseurl=https://yum.neo4j.com/stable
enabled=1
gpgcheck=1' | sudo tee /etc/yum.repos.d/neo4j.repo
sudo yum install neo4j`,
        },
        {
          command: 'Homebrew Installation',
          description: 'Install Neo4j on macOS',
          usage: 'macOS installation',
          example: `brew install neo4j`,
        },
        {
          command: 'Neo4j Browser Access',
          description: 'Access Neo4j through web browser',
          usage: 'Browser interface connection',
          example: `Neo4j Browser Access:
URL: http://localhost:7474
Username: neo4j
Password: [your password]`,
        },
        {
          command: 'Browser Commands',
          description: 'Neo4j browser commands',
          usage: 'Browser interface commands',
          example: `:play start              # Getting started guide
:play concepts           # Graph database concepts
:play cypher             # Cypher query language tutorial
:help                    # Show help information
:clear                   # Clear the browser console
:history                 # Show query history`,
        },
        {
          command: 'Cypher Shell Basic Connection',
          description: 'Connect using cypher-shell',
          usage: 'Basic shell connection',
          example: `cypher-shell -u neo4j -p password`,
        },
        {
          command: 'Cypher Shell Remote Connection',
          description: 'Connect to remote database',
          usage: 'Remote shell connection',
          example: `cypher-shell -a bolt://localhost:7687 -u neo4j -p password`,
        },
        {
          command: 'Cypher Shell File Execution',
          description: 'Execute Cypher from file',
          usage: 'File-based query execution',
          example: `cypher-shell -u neo4j -p password -f queries.cypher`,
        },
        {
          command: 'Cypher Shell CSV Export',
          description: 'Export results to CSV',
          usage: 'CSV export from shell',
          example: `cypher-shell -u neo4j -p password --format plain "MATCH (n) RETURN n.name" > results.csv`,
        },
        {
          command: 'Cypher Shell Non-Interactive',
          description: 'Execute query in non-interactive mode',
          usage: 'Command-line query execution',
          example: `cypher-shell -u neo4j -p password "MATCH (n) RETURN count(n)"`,
        },
        {
          command: 'Cypher Shell Format Options',
          description: 'Format output in shell',
          usage: 'Output formatting options',
          example: `cypher-shell --format verbose "MATCH (n) RETURN n"`,
        },
        {
          command: 'Cypher Shell Output File',
          description: 'Set output file for results',
          usage: 'File output configuration',
          example: `cypher-shell -o output.txt "MATCH (n) RETURN n.name"`,
        },
        {
          command: 'Cypher Shell Custom Database',
          description: 'Use specific database',
          usage: 'Database selection',
          example: `cypher-shell -d myapp "MATCH (n) RETURN count(n)"`,
        },
        {
          command: 'Cypher Shell Encrypted Connection',
          description: 'Connect with encryption',
          usage: 'Secure connection setup',
          example: `cypher-shell -a bolt+s://localhost:7687 -u neo4j -p password`,
        },
        {
          command: 'Systemd Service Commands',
          description: 'Manage Neo4j with systemd',
          usage: 'Linux service management',
          example: `sudo systemctl start neo4j
sudo systemctl stop neo4j
sudo systemctl restart neo4j
sudo systemctl status neo4j`,
        },
        {
          command: 'Enable Auto-Start',
          description: 'Enable automatic service start',
          usage: 'Service auto-configuration',
          example: `sudo systemctl enable neo4j`,
        },
        {
          command: 'View System Logs',
          description: 'Check Neo4j system logs',
          usage: 'Log monitoring',
          example: `sudo journalctl -u neo4j -f`,
        },
        {
          command: 'Homebrew Service Commands',
          description: 'Manage Neo4j with Homebrew',
          usage: 'macOS service management',
          example: `brew services start neo4j
brew services stop neo4j
brew services restart neo4j`,
        },
        {
          command: 'Show Current Database',
          description: 'Display current database',
          usage: 'Database identification',
          example: `SHOW CURRENT DATABASE;`,
        },
        {
          command: 'List All Databases',
          description: 'Show all databases',
          usage: 'Database enumeration',
          example: `SHOW DATABASES;`,
        },
        {
          command: 'Create New Database',
          description: 'Create a new database',
          usage: 'Database creation',
          example: `CREATE DATABASE myapp;`,
        },
        {
          command: 'Create Database from Existing',
          description: 'Create database from existing one',
          usage: 'Database cloning',
          example: `CREATE DATABASE analytics 
  OPTIONS {
    FROM existing_db
  };`,
        },
        {
          command: 'Switch Database',
          description: 'Change active database',
          usage: 'Database selection',
          example: `:use myapp;`,
        },
        {
          command: 'Drop Database',
          description: 'Delete a database',
          usage: 'Database removal',
          example: `DROP DATABASE myapp;`,
        },
        {
          command: 'Database Information',
          description: 'Get database info',
          usage: 'Database metadata',
          example: `CALL db.info();
CALL db.labels();
CALL db.relationshipTypes();
CALL db.propertyKeys();`,
        },
        {
          command: 'Show Configuration',
          description: 'Display database configuration',
          usage: 'Configuration viewing',
          example: `CALL dbms.listConfig();`,
        },
        {
          command: 'Update Configuration',
          description: 'Change configuration values',
          usage: 'Dynamic configuration',
          example: `CALL dbms.setConfigValue('dbms.memory.heap.initial_size', '512m');`,
        },
        {
          command: 'Runtime Information',
          description: 'Get runtime statistics',
          usage: 'Performance monitoring',
          example: `CALL dbms.queryJmx('org.neo4j:instance=kernel#0,name=Store file sizes');`,
        },
        {
          command: 'Database Statistics',
          description: 'Get database statistics',
          usage: 'Usage statistics',
          example: `CALL db.stats.retrieve('GRAPH COUNTS');
CALL db.stats.retrieve('RELATIONSHIP COUNTS');`,
        },
        {
          command: 'Create Basic Node',
          description: 'Create a simple node',
          usage: 'Basic node creation',
          example: `CREATE (n:Person {name: 'Alice', age: 30})`,
        },
        {
          command: 'Create Node with Multiple Labels',
          description: 'Create node with multiple labels',
          usage: 'Multi-label nodes',
          example: `CREATE (n:Person:Employee {name: 'Bob', age: 25, department: 'IT'})`,
        },
        {
          command: 'Create Node without Properties',
          description: 'Create empty node',
          usage: 'Simple node creation',
          example: `CREATE (n:Person)`,
        },
        {
          command: 'Create Multiple Nodes',
          description: 'Create multiple nodes at once',
          usage: 'Batch node creation',
          example: `CREATE (n1:Person {name: 'Carol'}), (n2:Person {name: 'Dave'})`,
        },
        {
          command: 'Create Relationship',
          description: 'Create relationship between nodes',
          usage: 'Basic relationship creation',
          example: `MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'Bob'})
CREATE (a)-[:FRIENDS_WITH]->(b)`,
        },
        {
          command: 'Create Relationship with Properties',
          description: 'Create relationship with properties',
          usage: 'Enhanced relationship creation',
          example: `MATCH (a:Person {name: 'Alice'}), (c:Company {name: 'TechCorp'})
CREATE (a)-[:WORKS_FOR {since: 2020, position: 'Developer'}]->(c)`,
        },
        {
          command: 'Create Bidirectional Relationship',
          description: 'Create bidirectional relationship',
          usage: 'Two-way relationship',
          example: `MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'Bob'})
CREATE (a)-[:MARRIED_TO {since: 2019}]->(b)`,
        },
        {
          command: 'Create Node and Relationship',
          description: 'Create nodes and relationships together',
          usage: 'Combined creation',
          example: `CREATE (a:Person {name: 'Eve'})-[:WORKS_FOR]->(c:Company {name: 'StartupX'})`,
        },
        {
          command: 'Create Complex Pattern',
          description: 'Create complex graph pattern',
          usage: 'Advanced pattern creation',
          example: `CREATE (a:Person {name: 'Frank'})-[:BOUGHT {price: 29.99}]->(p:Product {name: 'Book'})<-[:SOLD_BY]-(:Store {name: 'BookStore'})`,
        },
        {
          command: 'Match All Nodes',
          description: 'Find all nodes in graph',
          usage: 'Complete node retrieval',
          example: `MATCH (n) RETURN n`,
        },
        {
          command: 'Match by Label',
          description: 'Find nodes by label',
          usage: 'Label-based matching',
          example: `MATCH (p:Person) RETURN p`,
        },
        {
          command: 'Match by Property',
          description: 'Find nodes by property',
          usage: 'Property-based matching',
          example: `MATCH (p:Person {name: 'Alice'}) RETURN p`,
        },
        {
          command: 'Match with Condition',
          description: 'Find nodes with conditions',
          usage: 'Conditional matching',
          example: `MATCH (p:Person) WHERE p.age > 25 RETURN p`,
        },
        {
          command: 'Match Multiple Labels',
          description: 'Find nodes with multiple labels',
          usage: 'Multi-label matching',
          example: `MATCH (p:Person:Employee) RETURN p`,
        },
        {
          command: 'Match All Relationships',
          description: 'Find all relationships',
          usage: 'Complete relationship retrieval',
          example: `MATCH (a)-[r]->(b) RETURN a, r, b`,
        },
        {
          command: 'Match Specific Relationship Type',
          description: 'Find relationships by type',
          usage: 'Type-based relationship matching',
          example: `MATCH (a:Person)-[:WORKS_FOR]->(c:Company) RETURN a, c`,
        },
        {
          command: 'Match Relationship with Properties',
          description: 'Find relationships with properties',
          usage: 'Property-based relationship matching',
          example: `MATCH (a)-[r:WORKS_FOR {position: 'Developer'}]->(c) RETURN a, r, c`,
        },
        {
          command: 'Match Undirected Relationship',
          description: 'Find relationships without direction',
          usage: 'Bidirectional matching',
          example: `MATCH (a)-[:FRIENDS_WITH]-(b) RETURN a, b`,
        },
        {
          command: 'Match Variable Length Path',
          description: 'Find paths of variable length',
          usage: 'Variable depth matching',
          example: `MATCH (a:Person)-[:KNOWS*1..3]->(b:Person) RETURN a, b`,
        },
        {
          command: 'Update Single Property',
          description: 'Update one property',
          usage: 'Single property update',
          example: `MATCH (p:Person {name: 'Alice'})
SET p.age = 31`,
        },
        {
          command: 'Update Multiple Properties',
          description: 'Update multiple properties',
          usage: 'Batch property update',
          example: `MATCH (p:Person {name: 'Bob'})
SET p.age = 26, p.city = 'New York'`,
        },
        {
          command: 'Add New Property',
          description: 'Add property to node',
          usage: 'Property addition',
          example: `MATCH (p:Person {name: 'Carol'})
SET p.email = 'carol@example.com'`,
        },
        {
          command: 'Remove Property',
          description: 'Remove property from node',
          usage: 'Property removal',
          example: `MATCH (p:Person {name: 'Dave'})
REMOVE p.age`,
        },
        {
          command: 'Update Relationship Property',
          description: 'Update relationship property',
          usage: 'Relationship property update',
          example: `MATCH (a:Person)-[r:WORKS_FOR]->(c:Company)
SET r.salary = 75000`,
        },
        {
          command: 'Delete Relationship',
          description: 'Remove relationship',
          usage: 'Relationship deletion',
          example: `MATCH (a:Person {name: 'Alice'})-[r:FRIENDS_WITH]->(b:Person {name: 'Bob'})
DELETE r`,
        },
        {
          command: 'Delete Node',
          description: 'Remove node without relationships',
          usage: 'Simple node deletion',
          example: `MATCH (p:Person {name: 'Carol'})
DELETE p`,
        },
        {
          command: 'Delete Node and Relationships',
          description: 'Remove node and all connections',
          usage: 'Complete node removal',
          example: `MATCH (p:Person {name: 'Dave'})
DETACH DELETE p`,
        },
        {
          command: 'Delete Pattern',
          description: 'Delete matched pattern',
          usage: 'Pattern-based deletion',
          example: `MATCH (a:Person)-[r:BOUGHT]->(p:Product)
WHERE a.name = 'Alice'
DELETE r, p`,
        },
        {
          command: 'Return All Properties',
          description: 'Return all node properties',
          usage: 'Complete property retrieval',
          example: `MATCH (p:Person) RETURN p`,
        },
        {
          command: 'Return Specific Properties',
          description: 'Return selected properties',
          usage: 'Selective property return',
          example: `MATCH (p:Person) RETURN p.name, p.age`,
        },
        {
          command: 'Return with Alias',
          description: 'Return properties with aliases',
          usage: 'Aliased results',
          example: `MATCH (p:Person) RETURN p.name AS personName, p.age AS personAge`,
        },
        {
          command: 'Return Calculated Values',
          description: 'Return computed values',
          usage: 'Calculation in return',
          example: `MATCH (p:Person) RETURN p.name, p.age * 2 AS doubleAge`,
        },
        {
          command: 'Return Path',
          description: 'Return complete path',
          usage: 'Path retrieval',
          example: `MATCH p = (a:Person)-[:WORKS_FOR]->(c:Company) RETURN p`,
        },
        {
          command: 'Return Count',
          description: 'Return count of results',
          usage: 'Aggregation in return',
          example: `MATCH (p:Person) RETURN count(p) AS totalPersons`,
        },
        {
          command: 'Order by Property',
          description: 'Sort results by property',
          usage: 'Basic ordering',
          example: `MATCH (p:Person) RETURN p.name ORDER BY p.name`,
        },
        {
          command: 'Order by Multiple Properties',
          description: 'Sort by multiple criteria',
          usage: 'Multi-column ordering',
          example: `MATCH (p:Person) RETURN p.name, p.age ORDER BY p.age DESC, p.name ASC`,
        },
        {
          command: 'Limit Results',
          description: 'Limit number of results',
          usage: 'Result limiting',
          example: `MATCH (p:Person) RETURN p.name LIMIT 10`,
        },
        {
          command: 'Skip and Limit',
          description: 'Paginate results',
          usage: 'Pagination',
          example: `MATCH (p:Person) RETURN p.name SKIP 10 LIMIT 5`,
        },
        {
          command: 'Order by Calculated Value',
          description: 'Sort by computed values',
          usage: 'Calculation-based ordering',
          example: `MATCH (p:Person) RETURN p.name, length(p.name) AS nameLength ORDER BY nameLength DESC`,
        },
        {
          command: 'Distinct Property Values',
          description: 'Get unique property values',
          usage: 'Distinct values',
          example: `MATCH (p:Person) RETURN DISTINCT p.city`,
        },
        {
          command: 'Distinct Combinations',
          description: 'Get unique property combinations',
          usage: 'Multiple distinct values',
          example: `MATCH (p:Person) RETURN DISTINCT p.city, p.age`,
        },
        {
          command: 'Distinct Count',
          description: 'Count unique values',
          usage: 'Unique counting',
          example: `MATCH (p:Person) RETURN count(DISTINCT p.city) AS uniqueCities`,
        },
        {
          command: 'Distinct Relationships',
          description: 'Get unique relationship types',
          usage: 'Relationship distinctness',
          example: `MATCH (a:Person)-[r:WORKS_FOR]->(c:Company) 
RETURN DISTINCT type(r) AS relationshipType`,
        },
      ],
    },
    {
      title: 'Cypher Query Patterns',
      commands: [
        {
          command: 'Comparison Operators',
          description: 'Use comparison operators in WHERE',
          usage: 'Basic comparisons',
          example: `MATCH (p:Person) WHERE p.age > 25 RETURN p
MATCH (p:Person) WHERE p.age >= 18 AND p.age <= 65 RETURN p`,
        },
        {
          command: 'String Matching - STARTS WITH',
          description: 'Match strings starting with pattern',
          usage: 'Prefix matching',
          example: `MATCH (p:Person) WHERE p.name STARTS WITH 'A' RETURN p`,
        },
        {
          command: 'String Matching - ENDS WITH',
          description: 'Match strings ending with pattern',
          usage: 'Suffix matching',
          example: `MATCH (p:Person) WHERE p.name ENDS WITH 'e' RETURN p`,
        },
        {
          command: 'String Matching - CONTAINS',
          description: 'Match strings containing pattern',
          usage: 'Substring matching',
          example: `MATCH (p:Person) WHERE p.name CONTAINS 'li' RETURN p`,
        },
        {
          command: 'List Operations - IN',
          description: 'Check if value in list',
          usage: 'List membership',
          example: `MATCH (p:Person) WHERE 'IT' IN p.skills RETURN p`,
        },
        {
          command: 'List Operations - Size',
          description: 'Check list size',
          usage: 'List length checking',
          example: `MATCH (p:Person) WHERE size(p.skills) > 3 RETURN p`,
        },
        {
          command: 'Null Checking - IS NOT NULL',
          description: 'Check for non-null values',
          usage: 'Null value filtering',
          example: `MATCH (p:Person) WHERE p.email IS NOT NULL RETURN p`,
        },
        {
          command: 'Null Checking - IS NULL',
          description: 'Check for null values',
          usage: 'Null value detection',
          example: `MATCH (p:Person) WHERE p.phone IS NULL RETURN p`,
        },
        {
          command: 'Regular Expression Matching',
          description: 'Use regex patterns',
          usage: 'Pattern matching with regex',
          example: `MATCH (p:Person) WHERE p.name =~ 'A.*e' RETURN p`,
        },
        {
          command: 'String Case Conversion',
          description: 'Convert string case',
          usage: 'Case manipulation',
          example: `MATCH (p:Person) RETURN toUpper(p.name) AS upperName
MATCH (p:Person) RETURN toLower(p.name) AS lowerName`,
        },
        {
          command: 'String Length',
          description: 'Get string length',
          usage: 'Length calculation',
          example: `MATCH (p:Person) RETURN length(p.name) AS nameLength`,
        },
        {
          command: 'Substring Extraction',
          description: 'Extract substring',
          usage: 'String slicing',
          example: `MATCH (p:Person) RETURN substring(p.name, 0, 3) AS firstThree`,
        },
        {
          command: 'String Replacement',
          description: 'Replace substring',
          usage: 'String substitution',
          example: `MATCH (p:Person) RETURN replace(p.name, 'Alice', 'Alicia') AS modifiedName`,
        },
        {
          command: 'Split and Join Strings',
          description: 'Split and join operations',
          usage: 'String manipulation',
          example: `MATCH (p:Person) RETURN split(p.email, '@')[1] AS domain
WITH ['Hello', 'World'] AS words RETURN reduce(s = '', w IN words | s + w + ' ') AS joined`,
        },
        {
          command: 'Basic Math Operations',
          description: 'Perform mathematical calculations',
          usage: 'Arithmetic operations',
          example: `MATCH (p:Person) RETURN p.age, p.age * 2 AS doubleAge
MATCH (p:Person) RETURN p.age, p.age + 5 AS ageIn5Years`,
        },
        {
          command: 'Rounding Functions',
          description: 'Round numeric values',
          usage: 'Number rounding',
          example: `MATCH (p:Product) RETURN p.price, round(p.price) AS roundedPrice
MATCH (p:Product) RETURN p.price, ceil(p.price) AS ceilingPrice
MATCH (p:Product) RETURN p.price, floor(p.price) AS floorPrice`,
        },
        {
          command: 'Absolute Value',
          description: 'Get absolute value',
          usage: 'Absolute calculation',
          example: `MATCH (t:Transaction) RETURN abs(t.amount) AS absoluteAmount`,
        },
        {
          command: 'Power and Square Root',
          description: 'Power and root calculations',
          usage: 'Advanced math functions',
          example: `RETURN power(2, 3) AS eight, sqrt(16) AS four`,
        },
        {
          command: 'Random Number',
          description: 'Generate random value',
          usage: 'Random number generation',
          example: `RETURN rand() AS randomValue`,
        },
        {
          command: 'Create Lists',
          description: 'Create list literals',
          usage: 'List creation',
          example: `WITH [1, 2, 3, 4, 5] AS numbers RETURN numbers
WITH ['Alice', 'Bob', 'Carol'] AS names RETURN names`,
        },
        {
          command: 'List Operations',
          description: 'Access list elements',
          usage: 'List manipulation',
          example: `WITH [1, 2, 3, 4, 5] AS numbers 
RETURN size(numbers) AS listSize,
       numbers[0] AS firstItem,
       numbers[-1] AS lastItem`,
        },
        {
          command: 'List Functions',
          description: 'Use list functions',
          usage: 'Built-in list operations',
          example: `WITH [1, 2, 3, 4, 5] AS numbers
RETURN head(numbers) AS first,
       tail(numbers) AS rest,
       reverse(numbers) AS reversed`,
        },
        {
          command: 'List Comprehension - Basic',
          description: 'Create lists with comprehension',
          usage: 'List generation',
          example: `WITH [1, 2, 3, 4, 5] AS numbers
RETURN [x IN numbers | x * 2] AS doubled`,
        },
        {
          command: 'List Comprehension - Filter',
          description: 'Filter lists with comprehension',
          usage: 'Conditional list generation',
          example: `WITH [1, 2, 3, 4, 5, 6] AS numbers
RETURN [x IN numbers WHERE x % 2 = 0 | x] AS evens`,
        },
        {
          command: 'Unwind List',
          description: 'Expand list into rows',
          usage: 'List expansion',
          example: `UNWIND [1, 2, 3] AS number RETURN number * 10`,
        },
        {
          command: 'Count Operations',
          description: 'Count nodes and results',
          usage: 'Counting functions',
          example: `MATCH (p:Person) RETURN count(p) AS totalPersons
MATCH (p:Person) RETURN count(DISTINCT p.city) AS uniqueCities`,
        },
        {
          command: 'Sum and Average',
          description: 'Calculate sum and average',
          usage: 'Aggregation functions',
          example: `MATCH (p:Person) RETURN sum(p.age) AS totalAge, avg(p.age) AS avgAge`,
        },
        {
          command: 'Min and Max',
          description: 'Find minimum and maximum',
          usage: 'Extremum functions',
          example: `MATCH (p:Person) RETURN min(p.age) AS youngest, max(p.age) AS oldest`,
        },
        {
          command: 'Collect into List',
          description: 'Collect values into list',
          usage: 'List aggregation',
          example: `MATCH (p:Person) RETURN collect(p.name) AS allNames`,
        },
        {
          command: 'Group by Aggregation',
          description: 'Group and aggregate results',
          usage: 'Grouped aggregation',
          example: `MATCH (p:Person)
RETURN p.city, count(p) AS personCount, avg(p.age) AS avgAge
ORDER BY personCount DESC`,
        },
        {
          command: 'Current Date and Time',
          description: 'Get current date/time',
          usage: 'Temporal functions',
          example: `RETURN date() AS today, time() AS now, datetime() AS currentDateTime`,
        },
        {
          command: 'Create Dates',
          description: 'Create date values',
          usage: 'Date construction',
          example: `RETURN date('2024-01-01') AS newYear
RETURN datetime('2024-01-01T12:00:00') AS noonOnNewYear`,
        },
        {
          command: 'Date Arithmetic',
          description: 'Perform date calculations',
          usage: 'Date operations',
          example: `WITH date('2024-01-01') AS startDate
RETURN startDate + duration({days: 30}) AS endDate`,
        },
        {
          command: 'Extract Date Components',
          description: 'Extract parts of date',
          usage: 'Date decomposition',
          example: `WITH datetime('2024-01-01T12:30:45') AS dt
RETURN dt.year AS year, dt.month AS month, dt.day AS day`,
        },
        {
          command: 'Date Formatting',
          description: 'Format dates as strings',
          usage: 'Date to string conversion',
          example: `RETURN toString(date()) AS formattedDate`,
        },
        {
          command: 'CASE Statement',
          description: 'Use conditional logic',
          usage: 'Conditional expressions',
          example: `MATCH (p:Person)
RETURN p.name,
       CASE
         WHEN p.age < 18 THEN 'Minor'
         WHEN p.age < 65 THEN 'Adult'
         ELSE 'Senior'
       END AS ageGroup`,
        },
        {
          command: 'COALESCE Function',
          description: 'Handle null values',
          usage: 'Null coalescing',
          example: `MATCH (p:Person)
RETURN p.name, coalesce(p.email, 'No email') AS email`,
        },
        {
          command: 'Safe Property Access',
          description: 'Access properties safely',
          usage: 'Null-safe navigation',
          example: `MATCH (p:Person)
RETURN p.name, p.address?.city AS city  -- Safe navigation`,
        },
        {
          command: 'Conditional Property Check',
          description: 'Check property existence',
          usage: 'Property validation',
          example: `MATCH (p:Person)
RETURN p.name, 
       CASE WHEN p.email IS NOT NULL THEN 'Has Email' ELSE 'No Email' END AS emailStatus`,
        },
      ],
    },
    {
      title: 'Path Queries',
      commands: [
        {
          command: 'Find All Paths',
          description: 'Find all matching paths',
          usage: 'Basic path finding',
          example: `MATCH p = (a:Person)-[:KNOWS]->(b:Person) RETURN p`,
        },
        {
          command: 'Variable Length Path',
          description: 'Find paths of specific length',
          usage: 'Fixed length paths',
          example: `MATCH p = (a:Person)-[:KNOWS*2]->(b:Person) RETURN p`,
        },
        {
          command: 'Range Path Length',
          description: 'Find paths within length range',
          usage: 'Variable length range',
          example: `MATCH p = (a:Person)-[:KNOWS*1..3]->(b:Person) RETURN p`,
        },
        {
          command: 'Unspecified Maximum Length',
          description: 'Find paths up to maximum',
          usage: 'Open-ended paths',
          example: `MATCH p = (a:Person)-[:KNOWS*..5]->(b:Person) RETURN p`,
        },
        {
          command: 'Minimum Length Only',
          description: 'Find paths of minimum length',
          usage: 'Minimum depth paths',
          example: `MATCH p = (a:Person)-[:KNOWS*2..]->(b:Person) RETURN p`,
        },
        {
          command: 'Shortest Path Basic',
          description: 'Find shortest path between nodes',
          usage: 'Basic shortest path',
          example: `MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'David'})
MATCH p = shortestPath((a)-[:KNOWS*]-(b))
RETURN p`,
        },
        {
          command: 'Shortest Path Specific Type',
          description: 'Find shortest path with specific relationship',
          usage: 'Typed shortest path',
          example: `MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'David'})
MATCH p = shortestPath((a)-[:FRIENDS_WITH*]-(b))
RETURN p`,
        },
        {
          command: 'All Shortest Paths',
          description: 'Find all shortest paths',
          usage: 'Multiple shortest paths',
          example: `MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'David'})
MATCH p = allShortestPaths((a)-[:KNOWS*]-(b))
RETURN p`,
        },
        {
          command: 'Path Length Analysis',
          description: 'Analyze path lengths',
          usage: 'Path metrics',
          example: `MATCH p = (a:Person)-[:KNOWS*]->(b:Person)
RETURN length(p) AS hops, a.name, b.name`,
        },
        {
          command: 'Path Nodes and Relationships',
          description: 'Extract path components',
          usage: 'Path decomposition',
          example: `MATCH p = (a:Person)-[:KNOWS*]->(b:Person)
RETURN nodes(p) AS pathNodes, relationships(p) AS pathRels`,
        },
        {
          command: 'Path Aggregation',
          description: 'Aggregate path information',
          usage: 'Path statistics',
          example: `MATCH p = (a:Person)-[:KNOWS*]->(b:Person)
RETURN a.name AS start, b.name AS end, length(p) AS distance
ORDER BY distance`,
        },
        {
          command: 'Filter by Path Length',
          description: 'Filter paths by length',
          usage: 'Path length filtering',
          example: `MATCH p = (a:Person)-[:KNOWS*]->(b:Person)
WHERE length(p) > 2
RETURN a.name, b.name, length(p) AS hops`,
        },
        {
          command: 'Multiple Relationship Types',
          description: 'Match multiple relationship types',
          usage: 'Type flexibility',
          example: `MATCH p = (a:Person)-[:KNOWS|:WORKS_WITH*]->(b:Person) RETURN p`,
        },
        {
          command: 'Exclude Relationship Types',
          description: 'Exclude certain relationships',
          usage: 'Negative filtering',
          example: `MATCH p = (a)-[:KNOWS*]->(b)
WHERE none(r IN relationships(p) WHERE type(r) = 'BLOCKS')
RETURN p`,
        },
        {
          command: 'Path with Conditions',
          description: 'Match paths with conditions',
          usage: 'Conditional path matching',
          example: `MATCH p = (a:Person)-[r:KNOWS*]->(b:Person)
WHERE all(r IN relationships(p) WHERE r.since > 2020)
RETURN p`,
        },
        {
          command: 'Bidirectional Paths',
          description: 'Find paths in any direction',
          usage: 'Direction-agnostic paths',
          example: `MATCH p = (a:Person)-[:KNOWS*]-(b:Person)
WHERE a.name = 'Alice' AND b.name = 'David'
RETURN p`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Schema and Constraints',
      commands: [
        {
          command: 'Unique Constraint',
          description: 'Create unique property constraint',
          usage: 'Uniqueness enforcement',
          example: `CREATE CONSTRAINT person_name_unique 
FOR (p:Person) REQUIRE p.name IS UNIQUE`,
        },
        {
          command: 'Node Key Constraint',
          description: 'Create composite unique constraint',
          usage: 'Multi-property uniqueness',
          example: `CREATE CONSTRAINT person_key 
FOR (p:Person) REQUIRE (p.name, p.email) IS NODE KEY`,
        },
        {
          command: 'Existence Constraint',
          description: 'Require property existence',
          usage: 'Mandatory properties',
          example: `CREATE CONSTRAINT person_email_required 
FOR (p:Person) REQUIRE p.email IS NOT NULL`,
        },
        {
          command: 'Composite Uniqueness',
          description: 'Create composite unique constraint',
          usage: 'Multiple property uniqueness',
          example: `CREATE CONSTRAINT user_unique 
FOR (u:User) REQUIRE u.username IS UNIQUE`,
        },
        {
          command: 'Single Property Index',
          description: 'Create index on single property',
          usage: 'Basic indexing',
          example: `CREATE INDEX person_age_index FOR (p:Person) ON (p.age)`,
        },
        {
          command: 'Composite Index',
          description: 'Create index on multiple properties',
          usage: 'Multi-property indexing',
          example: `CREATE INDEX person_name_city_index FOR (p:Person) ON (p.name, p.city)`,
        },
        {
          command: 'Relationship Property Index',
          description: 'Create index on relationship properties',
          usage: 'Relationship indexing',
          example: `CREATE INDEX works_for_since_index 
FOR ()-[r:WORKS_FOR]-() ON (r.since)`,
        },
        {
          command: 'Full-Text Index',
          description: 'Create text search index',
          usage: 'Text search capability',
          example: `CREATE FULLTEXT INDEX person_name_text FOR (p:Person) ON EACH [p.name]`,
        },
        {
          command: 'Point Index',
          description: 'Create spatial index',
          usage: 'Geospatial queries',
          example: `CREATE POINT INDEX person_location_index FOR (p:Person) ON (p.location)`,
        },
        {
          command: 'Show All Constraints',
          description: 'List all constraints',
          usage: 'Constraint inspection',
          example: `SHOW CONSTRAINTS`,
        },
        {
          command: 'Show All Indexes',
          description: 'List all indexes',
          usage: 'Index inspection',
          example: `SHOW INDEXES`,
        },
        {
          command: 'Show Labels',
          description: 'List all labels in database',
          usage: 'Label enumeration',
          example: `CALL db.labels() YIELD label RETURN label`,
        },
        {
          command: 'Show Relationship Types',
          description: 'List all relationship types',
          usage: 'Relationship type enumeration',
          example: `CALL db.relationshipTypes() YIELD relationshipType RETURN relationshipType`,
        },
        {
          command: 'Show Node Properties',
          description: 'Show property keys for labels',
          usage: 'Node property inspection',
          example: `CALL db.schema.nodeTypeProperties() YIELD nodeType, propertyName RETURN nodeType, propertyName`,
        },
        {
          command: 'Show Relationship Properties',
          description: 'Show property keys for relationships',
          usage: 'Relationship property inspection',
          example: `CALL db.schema.relTypeProperties() YIELD relType, propertyName RETURN relType, propertyName`,
        },
        {
          command: 'Drop Constraint',
          description: 'Remove constraint',
          usage: 'Constraint removal',
          example: `DROP CONSTRAINT person_name_unique`,
        },
        {
          command: 'Drop Index',
          description: 'Remove index',
          usage: 'Index removal',
          example: `DROP INDEX person_age_index`,
        },
        {
          command: 'Drop Constraint if Exists',
          description: 'Safely remove constraint',
          usage: 'Safe constraint removal',
          example: `DROP CONSTRAINT person_name_unique IF EXISTS`,
        },
        {
          command: 'Drop Index if Exists',
          description: 'Safely remove index',
          usage: 'Safe index removal',
          example: `DROP INDEX person_age_index IF EXISTS`,
        },
        {
          command: 'Schema Design Best Practices',
          description: 'Optimal schema design guidelines',
          usage: 'Design recommendations',
          example: `Schema Design Best Practices:
1. Use constraints for data integrity
2. Create indexes on frequently queried properties
3. Use descriptive label names
4. Keep relationship types simple and clear
5. Avoid deep nesting of properties
6. Use appropriate data types
7. Consider query patterns when designing schema
8. Use composite indexes for multi-property queries`,
        },
      ],
    },
    {
      title: 'Advanced Query Patterns',
      commands: [
        {
          command: 'Basic Subquery',
          description: 'Use subquery with CALL',
          usage: 'Simple subquery pattern',
          example: `MATCH (p:Person)
CALL {
  WITH p
  MATCH (p)-[:WORKS_FOR]->(c:Company)
  RETURN count(c) AS companyCount
}
RETURN p.name, companyCount`,
        },
        {
          command: 'Subquery with Aggregation',
          description: 'Subquery with aggregation',
          usage: 'Aggregated subquery',
          example: `MATCH (c:Company)
CALL {
  WITH c
  MATCH (p:Person)-[:WORKS_FOR]->(c)
  RETURN avg(p.age) AS avgAge
}
RETURN c.name, avgAge`,
        },
        {
          command: 'Subquery with Filtering',
          description: 'Subquery with result filtering',
          usage: 'Filtered subquery results',
          example: `MATCH (p:Person)
CALL {
  WITH p
  MATCH (p)-[:KNOWS*1..2]-(friend:Person)
  RETURN count(DISTINCT friend) AS friendCount
}
RETURN p.name, friendCount
WHERE friendCount > 5`,
        },
        {
          command: 'Basic Pattern Comprehension',
          description: 'Create list from pattern',
          usage: 'Simple pattern comprehension',
          example: `MATCH (p:Person {name: 'Alice'})
RETURN [(p)-[:WORKS_FOR]->(c) | c.name] AS companies`,
        },
        {
          command: 'Pattern Comprehension with Conditions',
          description: 'Pattern comprehension with filtering',
          usage: 'Conditional pattern comprehension',
          example: `MATCH (p:Person)
RETURN [(p)-[:FRIENDS_WITH]->(f) WHERE f.age > 25 | f.name] AS adultFriends`,
        },
        {
          command: 'Pattern Comprehension with Ordering',
          description: 'Ordered pattern comprehension',
          usage: 'Sorted pattern results',
          example: `MATCH (p:Person)
RETURN [(p)-[:WORKS_FOR]->(c) | c.name] AS companies`,
        },
        {
          command: 'Nested Pattern Comprehension',
          description: 'Nested pattern comprehensions',
          usage: 'Complex pattern generation',
          example: `MATCH (p:Person)
RETURN [(p)-[:WORKS_FOR]->(c) | 
       {company: c.name, employees: [(c)<-[:WORKS_FOR]-(e) | e.name]}] AS companyDetails`,
        },
        {
          command: 'Basic List Comprehension',
          description: 'Simple list comprehension',
          usage: 'List transformation',
          example: `WITH [1, 2, 3, 4, 5] AS numbers
RETURN [x IN numbers | x * 2] AS doubled`,
        },
        {
          command: 'List Comprehension with Filtering',
          description: 'Filter list with comprehension',
          usage: 'Conditional list generation',
          example: `WITH [1, 2, 3, 4, 5, 6] AS numbers
RETURN [x IN numbers WHERE x % 2 = 0 | x] AS evens`,
        },
        {
          command: 'Complex List Comprehension',
          description: 'Complex list transformation',
          usage: 'Advanced list operations',
          example: `MATCH (p:Person)
RETURN [skill IN p.skills WHERE size(skill) > 3 | toUpper(skill)] AS longSkills`,
        },
        {
          command: 'List Comprehension from Pattern',
          description: 'Generate list from pattern',
          usage: 'Pattern-based list creation',
          example: `MATCH (p:Person)
RETURN [friend IN [(p)-[:FRIENDS_WITH]->(f) | f] WHERE friend.age > 30 | friend.name] AS matureFriends`,
        },
        {
          command: 'Reduce Sum',
          description: 'Sum list values with reduce',
          usage: 'List summation',
          example: `WITH [1, 2, 3, 4, 5] AS numbers
RETURN reduce(sum = 0, n IN numbers | sum + n) AS total`,
        },
        {
          command: 'Reduce Concatenation',
          description: 'Concatenate strings with reduce',
          usage: 'String joining',
          example: `WITH ['Hello', ' ', 'World'] AS words
RETURN reduce(result = '', w IN words | result + w) AS sentence`,
        },
        {
          command: 'Reduce Maximum',
          description: 'Find maximum with reduce',
          usage: 'Custom aggregation',
          example: `WITH [3, 7, 2, 9, 1] AS numbers
RETURN reduce(max = numbers[0], n IN numbers | CASE WHEN n > max THEN n ELSE max END) AS maxValue`,
        },
        {
          command: 'Complex Reduction',
          description: 'Complex reduce operation',
          usage: 'Advanced reduction',
          example: `MATCH (p:Person)
RETURN reduce(totalSkills = 0, skill IN p.skills | totalSkills + length(skill)) AS totalCharacterCount`,
        },
        {
          command: 'Optional Match Relationship',
          description: 'Handle optional relationships',
          usage: 'Optional relationship matching',
          example: `MATCH (p:Person)
OPTIONAL MATCH (p)-[:WORKS_FOR]->(c:Company)
RETURN p.name, c.name AS company`,
        },
        {
          command: 'Optional Match with Aggregation',
          description: 'Optional match with aggregation',
          usage: 'Aggregated optional results',
          example: `MATCH (p:Person)
OPTIONAL MATCH (p)-[:FRIENDS_WITH]->(f:Person)
RETURN p.name, count(f) AS friendCount`,
        },
        {
          command: 'Multiple Optional Matches',
          description: 'Multiple optional patterns',
          usage: 'Multiple optional relationships',
          example: `MATCH (p:Person)
OPTIONAL MATCH (p)-[:WORKS_FOR]->(c:Company)
OPTIONAL MATCH (p)-[:LIVES_IN]->(city:City)
RETURN p.name, c.name AS company, city.name AS city`,
        },
        {
          command: 'Filter Optional Results',
          description: 'Filter optional match results',
          usage: 'Optional result filtering',
          example: `MATCH (p:Person)
OPTIONAL MATCH (p)-[:WORKS_FOR]->(c:Company)
RETURN p.name, c.name AS company
WHERE c IS NOT NULL`,
        },
        {
          command: 'UNION Basic',
          description: 'Combine query results',
          usage: 'Basic union operation',
          example: `MATCH (p:Person) WHERE p.age > 30
RETURN p.name AS name, p.age AS age
UNION
MATCH (p:Person) WHERE p.name STARTS WITH 'A'
RETURN p.name AS name, p.age AS age`,
        },
        {
          command: 'UNION ALL',
          description: 'Combine with duplicates',
          usage: 'Union with duplicates',
          example: `MATCH (p:Person) RETURN p.name AS name, 'Person' AS type
UNION ALL
MATCH (c:Company) RETURN c.name AS name, 'Company' AS type`,
        },
        {
          command: 'Multiple UNIONs',
          description: 'Multiple union operations',
          usage: 'Complex unions',
          example: `MATCH (p:Person) RETURN p.name AS name, 'Person' AS category
UNION
MATCH (c:Company) RETURN c.name AS name, 'Company' AS category
UNION
MATCH (p:Product) RETURN p.name AS name, 'Product' AS category`,
        },
      ],
    },
    {
      title: 'Graph Algorithms',
      commands: [
        {
          command: 'PageRank Basic',
          description: 'Calculate PageRank scores',
          usage: 'Basic PageRank algorithm',
          example: `CALL gds.pageRank.stream('myGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).name AS name, score
ORDER BY score DESC LIMIT 10`,
        },
        {
          command: 'PageRank with Parameters',
          description: 'PageRank with custom parameters',
          usage: 'Configured PageRank',
          example: `CALL gds.pageRank.stream('myGraph', {
  maxIterations: 20,
  dampingFactor: 0.85
})
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).name AS name, score`,
        },
        {
          command: 'PageRank Write Results',
          description: 'Write PageRank to graph',
          usage: 'Persistent PageRank results',
          example: `CALL gds.pageRank.write('myGraph', {
  writeProperty: 'pageRank'
})
YIELD nodePropertiesWritten, iterations`,
        },
        {
          command: 'Louvain Community Detection',
          description: 'Find communities with Louvain',
          usage: 'Basic community detection',
          example: `CALL gds.louvain.stream('myGraph')
YIELD nodeId, communityId
RETURN communityId, collect(gds.util.asNode(nodeId).name) AS members
ORDER BY size(members) DESC`,
        },
        {
          command: 'Louvain with Parameters',
          description: 'Louvain with configuration',
          usage: 'Configured Louvain',
          example: `CALL gds.louvain.stream('myGraph', {
  includeIntermediateCommunities: true
})
YIELD nodeId, communityId, intermediateCommunityIds
RETURN gds.util.asNode(nodeId).name AS name, 
       communityId, 
       intermediateCommunityIds`,
        },
        {
          command: 'Louvain Write Results',
          description: 'Write community results',
          usage: 'Persistent community assignment',
          example: `CALL gds.louvain.write('myGraph', {
  writeProperty: 'community'
})
YIELD nodePropertiesWritten, communityCount`,
        },
        {
          command: 'Betweenness Centrality',
          description: 'Calculate betweenness centrality',
          usage: 'Centrality measure',
          example: `CALL gds.betweenness.stream('myGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).name AS name, score
ORDER BY score DESC LIMIT 10`,
        },
        {
          command: 'Degree Centrality',
          description: 'Calculate degree centrality',
          usage: 'Node importance measure',
          example: `CALL gds.degree.stream('myGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).name AS name, score
ORDER BY score DESC LIMIT 10`,
        },
        {
          command: 'Eigenvector Centrality',
          description: 'Calculate eigenvector centrality',
          usage: 'Influence measure',
          example: `CALL gds.eigenvector.stream('myGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).name AS name, score
ORDER BY score DESC LIMIT 10`,
        },
        {
          command: 'Dijkstra Shortest Path',
          description: 'Find weighted shortest path',
          usage: 'Weighted pathfinding',
          example: `MATCH (start:Person {name: 'Alice'}), (end:Person {name: 'David'})
CALL gds.shortestPath.dijkstra.stream('myGraph', {
  sourceNode: start,
  targetNode: end,
  relationshipWeightProperty: 'weight'
})
YIELD index, sourceNode, targetNode, totalCost, nodeIds, relationshipIds
RETURN index,
       gds.util.asNode(sourceNode).name AS source,
       gds.util.asNode(targetNode).name AS target,
       totalCost`,
        },
        {
          command: 'A* Pathfinding',
          description: 'A* shortest path algorithm',
          usage: 'Heuristic pathfinding',
          example: `MATCH (start:Person {name: 'Alice'}), (end:Person {name: 'David'})
CALL gds.shortestPath.astar.stream('myGraph', {
  sourceNode: start,
  targetNode: end,
  latitudeProperty: 'lat',
  longitudeProperty: 'lon'
})
YIELD index, sourceNode, targetNode, totalCost, nodeIds
RETURN index, totalCost`,
        },
        {
          command: 'Jaccard Similarity',
          description: 'Calculate Jaccard similarity',
          usage: 'Node similarity measure',
          example: `MATCH (p1:Person {name: 'Alice'})
CALL gds.nodeSimilarity.jaccard.stream('myGraph', {
  sourceNode: p1
})
YIELD node1, node2, similarity
RETURN gds.util.asNode(node1).name AS person1,
       gds.util.asNode(node2).name AS person2,
       similarity
ORDER BY similarity DESC LIMIT 10`,
        },
        {
          command: 'Cosine Similarity',
          description: 'Calculate cosine similarity',
          usage: 'Vector similarity measure',
          example: `MATCH (p1:Person {name: 'Alice'})
CALL gds.nodeSimilarity.cosine.stream('myGraph', {
  sourceNode: p1
})
YIELD node1, node2, similarity
RETURN gds.util.asNode(node1).name AS person1,
       gds.util.asNode(node2).name AS person2,
       similarity`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Explain Query Plan',
          description: 'Analyze query execution plan',
          usage: 'Query plan analysis',
          example: `EXPLAIN MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE p.age > 30
RETURN p.name, c.name`,
        },
        {
          command: 'Profile Query Execution',
          description: 'Profile query performance',
          usage: 'Performance profiling',
          example: `PROFILE MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
WHERE p.age > 30
RETURN p.name, c.name`,
        },
        {
          command: 'Profile with Aggregation',
          description: 'Profile aggregated queries',
          usage: 'Aggregation profiling',
          example: `PROFILE MATCH (p:Person)
RETURN p.city, count(p) AS personCount
ORDER BY personCount DESC`,
        },
        {
          command: 'Use Index Hint',
          description: 'Force index usage',
          usage: 'Index hinting',
          example: `MATCH (p:Person)
USING INDEX p:Person(name)
WHERE p.name = 'Alice'
RETURN p`,
        },
        {
          command: 'Force Index Usage',
          description: 'Force specific index',
          usage: 'Index enforcement',
          example: `MATCH (p:Person)
USING INDEX p:Person(age)
WHERE p.age > 25
RETURN p`,
        },
        {
          command: 'Composite Index Usage',
          description: 'Use composite index',
          usage: 'Multi-property index',
          example: `MATCH (p:Person)
USING INDEX p:Person(name, age)
WHERE p.name = 'Alice' AND p.age = 30
RETURN p`,
        },
        {
          command: 'Avoid Index Usage',
          description: 'Force table scan',
          usage: 'Scan hinting',
          example: `MATCH (p:Person)
USING SCAN p:Person
WHERE p.age > 25
RETURN p`,
        },
        {
          command: 'Limit Result Set Early',
          description: 'Limit results for performance',
          usage: 'Early limiting',
          example: `MATCH (p:Person)
WHERE p.age > 25
RETURN p.name
LIMIT 100`,
        },
        {
          command: 'Use Specific Labels',
          description: 'Use specific labels in queries',
          usage: 'Label optimization',
          example: `MATCH (p:Person:Employee)
WHERE p.department = 'IT'
RETURN p.name`,
        },
        {
          command: 'Avoid Cartesian Products',
          description: 'Prevent Cartesian products',
          usage: 'Query optimization',
          example: `MATCH (p:Person), (c:Company)
WHERE p.name = 'Alice' AND c.name = 'TechCorp'
RETURN p, c`,
        },
        {
          command: 'Use EXISTS instead of OPTIONAL MATCH',
          description: 'Optimize existence checks',
          usage: 'Existence optimization',
          example: `MATCH (p:Person)
WHERE EXISTS((p)-[:WORKS_FOR]->())
RETURN p.name`,
        },
        {
          command: 'PERIODIC COMMIT for Large Updates',
          description: 'Handle large updates efficiently',
          usage: 'Batch processing',
          example: `USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM 'file:///large_dataset.csv' AS row
CREATE (p:Person {name: row.name, age: toInteger(row.age)})`,
        },
        {
          command: 'Limit Memory Usage',
          description: 'Control memory consumption',
          usage: 'Memory optimization',
          example: `MATCH (p:Person)
RETURN p
LIMIT 10000`,
        },
        {
          command: 'Use Subqueries for Memory',
          description: 'Reduce memory with subqueries',
          usage: 'Memory-efficient queries',
          example: `MATCH (p:Person)
CALL {
  WITH p
  MATCH (p)-[:WORKS_FOR]->(c)
  RETURN count(c) AS companyCount
}
RETURN p.name, companyCount`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Graph Data Science',
      commands: [
        {
          command: 'Basic Graph Projection',
          description: 'Create simple graph projection',
          usage: 'Basic GDS graph creation',
          example: `CALL gds.graph.project(
  'socialGraph',
  ['Person', 'Company'],
  {
    KNOWS: {orientation: 'UNDIRECTED'},
    WORKS_FOR: {orientation: 'DIRECTED'}
  }
)`,
        },
        {
          command: 'Graph Projection with Properties',
          description: 'Create projection with properties',
          usage: 'Property-enabled projection',
          example: `CALL gds.graph.project(
  'weightedGraph',
  'Person',
  {
    KNOWS: {
      orientation: 'UNDIRECTED',
      properties: ['weight', 'since']
    }
  }
)`,
        },
        {
          command: 'Graph Projection with Node Properties',
          description: 'Include node properties in projection',
          usage: 'Node property projection',
          example: `CALL gds.graph.project(
  'personGraph',
  ['Person'],
  ['KNOWS'],
  {
    nodeProperties: ['age', 'name']
  }
)`,
        },
        {
          command: 'List Graph Projections',
          description: 'Show all graph projections',
          usage: 'Graph enumeration',
          example: `CALL gds.graph.list()`,
        },
        {
          command: 'Check Graph Existence',
          description: 'Check if graph exists',
          usage: 'Graph validation',
          example: `CALL gds.graph.exists('socialGraph')
YIELD exists`,
        },
        {
          command: 'Get Graph Information',
          description: 'Get detailed graph information',
          usage: 'Graph metadata',
          example: `CALL gds.graph.get('socialGraph')
YIELD graphName, nodeCount, relationshipCount`,
        },
        {
          command: 'Drop Graph Projection',
          description: 'Remove graph projection',
          usage: 'Graph cleanup',
          example: `CALL gds.graph.drop('socialGraph')`,
        },
        {
          command: 'Stream Node Properties',
          description: 'Access node properties from projection',
          usage: 'Property streaming',
          example: `CALL gds.graph.streamNodeProperties('socialGraph', ['age'])
YIELD nodeId, propertyValue`,
        },
        {
          command: 'Create ML Pipeline',
          description: 'Create machine learning pipeline',
          usage: 'ML pipeline creation',
          example: `CALL gds.alpha.ml.pipeline.nodeClassification.create('pipe')
YIELD name, pipelineInfo`,
        },
        {
          command: 'Add Feature to Pipeline',
          description: 'Add feature to ML pipeline',
          usage: 'Feature engineering',
          example: `CALL gds.alpha.ml.pipeline.nodeClassification.addFeature('pipe', 'age')
YIELD name, pipelineInfo`,
        },
        {
          command: 'Train ML Model',
          description: 'Train machine learning model',
          usage: 'Model training',
          example: `CALL gds.alpha.ml.pipeline.nodeClassification.train('pipe', 'socialGraph', {
  modelName: 'personClassifier',
  targetProperty: 'category'
})
YIELD modelInfo, trainStatistics`,
        },
        {
          command: 'Predict with ML Model',
          description: 'Make predictions with trained model',
          usage: 'Model inference',
          example: `CALL gds.alpha.ml.nodeClassification.predict.stream('socialGraph', {
  modelName: 'personClassifier'
})
YIELD nodeId, predictedClass`,
        },
        {
          command: 'Node2Vec Basic',
          description: 'Generate Node2Vec embeddings',
          usage: 'Basic embedding generation',
          example: `CALL gds.node2vec.stream('socialGraph', {
  embeddingDimension: 128,
  walkLength: 80,
  walksPerNode: 10
})
YIELD nodeId, embedding
RETURN gds.util.asNode(nodeId).name AS name, embedding`,
        },
        {
          command: 'Node2Vec Write Embeddings',
          description: 'Write embeddings to graph',
          usage: 'Persistent embeddings',
          example: `CALL gds.node2vec.write('socialGraph', {
  embeddingDimension: 64,
  writeProperty: 'embedding'
})
YIELD nodePropertiesWritten`,
        },
        {
          command: 'Similarity Search with Embeddings',
          description: 'Find similar nodes using embeddings',
          usage: 'Embedding-based similarity',
          example: `MATCH (p:Person)
WHERE p.embedding IS NOT NULL
WITH p, p.embedding AS vector
MATCH (other:Person)
WHERE other.embedding IS NOT NULL
  AND other <> p
WITH p, other, gds.similarity.cosine(vector, other.embedding) AS similarity
RETURN p.name, other.name, similarity
ORDER BY similarity DESC LIMIT 5`,
        },
      ],
    },
    {
      title: 'APOC Procedures',
      commands: [
        {
          command: 'Check APOC Version',
          description: 'Verify APOC installation',
          usage: 'APOC validation',
          example: `RETURN apoc.version()`,
        },
        {
          command: 'List APOC Procedures',
          description: 'Show available APOC procedures',
          usage: 'APOC discovery',
          example: `CALL apoc.help('apoc')`,
        },
        {
          command: 'Import JSON File',
          description: 'Import data from JSON file',
          usage: 'JSON data import',
          example: `CALL apoc.load.json('file:///data.json')
YIELD value
CREATE (p:Person {name: value.name, age: value.age})`,
        },
        {
          command: 'Import CSV with APOC',
          description: 'Import CSV data with APOC',
          usage: 'CSV data import',
          example: `CALL apoc.load.csv('file:///data.csv')
YIELD lineNo, list, map
CREATE (p:Person {name: map.name, age: toInteger(map.age)})`,
        },
        {
          command: 'Import from URL',
          description: 'Import data from web URL',
          usage: 'Web data import',
          example: `CALL apoc.load.json('https://api.example.com/data')
YIELD value
CREATE (p:Person {name: value.name})`,
        },
        {
          command: 'Import XML Data',
          description: 'Import XML data with APOC',
          usage: 'XML data import',
          example: `CALL apoc.load.xml('file:///data.xml', '/people/person')
YIELD value
CREATE (p:Person {name: value._text})`,
        },
        {
          command: 'Export to JSON',
          description: 'Export data to JSON format',
          usage: 'JSON data export',
          example: `CALL apoc.export.json.all('data.json', {})`,
        },
        {
          command: 'Export Query Results',
          description: 'Export query results to JSON',
          usage: 'Query result export',
          example: `CALL apoc.export.json.query(
  'MATCH (p:Person) RETURN p.name, p.age',
  'people.json'
)`,
        },
        {
          command: 'Export to CSV',
          description: 'Export data to CSV format',
          usage: 'CSV data export',
          example: `CALL apoc.export.csv.all('data.csv', {})`,
        },
        {
          command: 'Export to GraphML',
          description: 'Export graph as GraphML',
          usage: 'GraphML export',
          example: `CALL apoc.export.graphml.all('graph.graphml', {})`,
        },
        {
          command: 'Generate UUID',
          description: 'Generate unique identifier',
          usage: 'UUID generation',
          example: `CALL apoc.create.uuid() YIELD uuid`,
        },
        {
          command: 'Date Time Utilities',
          description: 'Date and time utilities',
          usage: 'Temporal functions',
          example: `RETURN apoc.date.format(timestamp(), 'ms', 'yyyy-MM-dd')`,
        },
        {
          command: 'String Utilities',
          description: 'String manipulation utilities',
          usage: 'String functions',
          example: `RETURN apoc.text.join(['Hello', 'World'], ' ')`,
        },
        {
          command: 'List Utilities',
          description: 'List manipulation utilities',
          usage: 'List functions',
          example: `RETURN apoc.coll.sort([3, 1, 4, 1, 5])`,
        },
        {
          command: 'Math Utilities',
          description: 'Mathematical utilities',
          usage: 'Math functions',
          example: `RETURN apoc.math.round(3.14159, 2)`,
        },
        {
          command: 'Convert to JSON',
          description: 'Convert data to JSON format',
          usage: 'JSON conversion',
          example: `CALL apoc.convert.toJson({name: 'Alice', age: 30}) YIELD value`,
        },
        {
          command: 'Path Expansion',
          description: 'Expand paths with APOC',
          usage: 'Path expansion',
          example: `MATCH (start:Person {name: 'Alice'})
CALL apoc.path.expandConfig(start, {
  relationshipFilter: 'KNOWS>',
  minLevel: 1,
  maxLevel: 3
})
YIELD path
RETURN path`,
        },
        {
          command: 'Subgraph Extraction',
          description: 'Extract subgraph around node',
          usage: 'Subgraph extraction',
          example: `MATCH (center:Person {name: 'Alice'})
CALL apoc.path.subgraphAll(center, {
  relationshipFilter: 'KNOWS>',
  maxLevel: 2
})
YIELD nodes, relationships
RETURN nodes, relationships`,
        },
        {
          command: 'Graph Clustering',
          description: 'Perform graph clustering',
          usage: 'Clustering algorithm',
          example: `CALL apoc.algo.cover([
  MATCH (p:Person) RETURN id(p) AS id
], 'KNOWS', 'weight')
YIELD nodeId, cluster
RETURN gds.util.asNode(nodeId).name AS name, cluster`,
        },
      ],
    },
    {
      title: 'Neo4j Administration',
      commands: [
        {
          command: 'Show Current Database',
          description: 'Display current database information',
          usage: 'Database identification',
          example: `SHOW DATABASES`,
        },
        {
          command: 'Create New Database',
          description: 'Create a new database',
          usage: 'Database creation',
          example: `CREATE DATABASE myDatabase`,
        },
        {
          command: 'Switch Database',
          description: 'Change to different database',
          usage: 'Database switching',
          example: `:use myDatabase`,
        },
        {
          command: 'Drop Database',
          description: 'Delete a database',
          usage: 'Database removal',
          example: `DROP DATABASE myDatabase`,
        },
        {
          command: 'Database Status',
          description: 'Check database status',
          usage: 'Database monitoring',
          example: `SHOW DATABASE myDatabase YIELD name, address, role, requestedStatus, currentStatus, default, home`,
        },
        {
          command: 'Start Database',
          description: 'Start a stopped database',
          usage: 'Database management',
          example: `START DATABASE myDatabase`,
        },
        {
          command: 'Stop Database',
          description: 'Stop a running database',
          usage: 'Database management',
          example: `STOP DATABASE myDatabase`,
        },
        {
          command: 'Create User',
          description: 'Create a new database user',
          usage: 'User management',
          example: `CREATE USER alice SET PASSWORD 'password123' CHANGE NOT REQUIRED`,
        },
        {
          command: 'Show Users',
          description: 'List all database users',
          usage: 'User enumeration',
          example: `SHOW USERS`,
        },
        {
          command: 'Change User Password',
          description: 'Update user password',
          usage: 'Password management',
          example: `ALTER USER alice SET PASSWORD 'newpassword123'`,
        },
        {
          command: 'Create Role',
          description: 'Create a new role',
          usage: 'Role management',
          example: `CREATE ROLE dataReader`,
        },
        {
          command: 'Grant Database Access',
          description: 'Grant database access to role',
          usage: 'Permission management',
          example: `GRANT ACCESS ON DATABASE neo4j TO dataReader`,
        },
        {
          command: 'Grant Match Privilege',
          description: 'Grant read access to graph',
          usage: 'Graph permissions',
          example: `GRANT MATCH {*} ON GRAPH neo4j TO dataReader`,
        },
        {
          command: 'Grant Read Privilege',
          description: 'Grant read permissions',
          usage: 'Read permissions',
          example: `GRANT READ {*} ON GRAPH neo4j TO dataReader`,
        },
        {
          command: 'Assign Role to User',
          description: 'Grant role to user',
          usage: 'Role assignment',
          example: `GRANT ROLE dataReader TO alice`,
        },
        {
          command: 'Drop User',
          description: 'Remove a user',
          usage: 'User removal',
          example: `DROP USER alice`,
        },
        {
          command: 'Show Current User',
          description: 'Display current user information',
          usage: 'User identification',
          example: `SHOW CURRENT USER`,
        },
        {
          command: 'Show Privileges',
          description: 'Display current privileges',
          usage: 'Permission viewing',
          example: `SHOW PRIVILEGES AS COMMANDS`,
        },
        {
          command: 'Revoke Privilege',
          description: 'Remove specific privilege',
          usage: 'Permission revocation',
          example: `REVOKE GRANT MATCH {*} ON GRAPH neo4j FROM dataReader`,
        },
        {
          command: 'Show Roles',
          description: 'List all roles',
          usage: 'Role enumeration',
          example: `SHOW ROLES`,
        },
        {
          command: 'Create Admin Role',
          description: 'Create administrator role',
          usage: 'Admin role setup',
          example: `CREATE ROLE admin`,
        },
        {
          command: 'Grant All Database Privileges',
          description: 'Grant full database access',
          usage: 'Admin permissions',
          example: `GRANT ALL DATABASE PRIVILEGES ON DATABASE neo4j TO admin`,
        },
        {
          command: 'Grant All Graph Privileges',
          description: 'Grant full graph access',
          usage: 'Graph admin permissions',
          example: `GRANT ALL GRAPH PRIVILEGES ON GRAPH neo4j TO admin`,
        },
        {
          command: 'Grant Admin Role',
          description: 'Assign admin role to user',
          usage: 'Admin assignment',
          example: `GRANT ROLE admin TO alice`,
        },
        {
          command: 'Query Metrics',
          description: 'Get query performance metrics',
          usage: 'Performance monitoring',
          example: `CALL dbms.queryJmx('org.neo4j:instance=kernel#0,name=Transactions')
YIELD attributes`,
        },
        {
          command: 'List Connections',
          description: 'Show active connections',
          usage: 'Connection monitoring',
          example: `CALL dbms.listConnections() YIELD connectionId, connectTime, connector, username`,
        },
        {
          command: 'List Active Queries',
          description: 'Show currently running queries',
          usage: 'Query monitoring',
          example: `CALL dbms.listQueries() YIELD queryId, query, runtime, allocatedBytes`,
        },
        {
          command: 'List Transactions',
          description: 'Show active transactions',
          usage: 'Transaction monitoring',
          example: `CALL dbms.listTransactions() YIELD transactionId, metaData, startTime`,
        },
        {
          command: 'Database Metrics',
          description: 'Get database performance metrics',
          usage: 'System monitoring',
          example: `CALL dbms.queryJmx('org.neo4j:instance=kernel#0,name=Memory Pools') YIELD attributes`,
        },
      ],
    },
    {
      title: 'Neo4j Clustering',
      commands: [
        {
          command: 'Core Server Configuration',
          description: 'Configure core servers in cluster',
          usage: 'Core server setup',
          example: `# Core servers configuration in neo4j.conf:
dbms.mode=CORE
dbms.default_listen_address=0.0.0.0
dbms.default_advertised_address=192.168.1.10
dbms.cluster.minimum_core_cluster_size_at_formation=3
dbms.cluster.minimum_core_cluster_size_at_runtime=3
dbms.cluster.initial_discovery_members=192.168.1.10:5000,192.168.1.11:5000,192.168.1.12:5000`,
        },
        {
          command: 'Read Replica Configuration',
          description: 'Configure read replicas',
          usage: 'Read replica setup',
          example: `# Read replicas configuration in neo4j.conf:
dbms.mode=READ_REPLICA
dbms.default_advertised_address=192.168.1.20
dbms.cluster.initial_discovery_members=192.168.1.10:5000,192.168.1.11:5000,192.168.1.12:5000`,
        },
        {
          command: 'Show Cluster Overview',
          description: 'Display cluster status',
          usage: 'Cluster monitoring',
          example: `CALL dbms.cluster.overview()`,
        },
        {
          command: 'Show Cluster Roles',
          description: 'Display cluster member roles',
          usage: 'Role monitoring',
          example: `CALL dbms.cluster.roles() YIELD role, addresses`,
        },
        {
          command: 'Show Routing Table',
          description: 'Display cluster routing information',
          usage: 'Routing monitoring',
          example: `CALL dbms.cluster.routing.getServers() YIELD ttl, servers`,
        },
        {
          command: 'Check Cluster Connectivity',
          description: 'Verify cluster connectivity',
          usage: 'Health check',
          example: `CALL dbms.cluster.checkConnectivity() YIELD success, message`,
        },
        {
          command: 'Database Cluster Status',
          description: 'Show database cluster status',
          usage: 'Database monitoring',
          example: `SHOW DATABASES YIELD name, role, requestedStatus, currentStatus, address`,
        },
        {
          command: 'Read from Specific Server',
          description: 'Connect to specific cluster server',
          usage: 'Server-specific access',
          example: `:use neo4j://core1:7687`,
        },
        {
          command: 'Bookmark Management',
          description: 'Use bookmarks for consistency',
          usage: 'Causal consistency',
          example: `WITH bookmark() AS bookmark
MATCH (p:Person) RETURN p.name
// Use bookmark for next query
:use neo4j://core2:7687
CALL dbms.query('MATCH (p:Person) RETURN p.name', {bookmark: bookmark})`,
        },
        {
          command: 'Impose Causal Consistency',
          description: 'Ensure causal consistency in queries',
          usage: 'Consistency guarantees',
          example: `:use neo4j://read-replica:7687
CALL dbms.query('MATCH (p:Person) RETURN p.name', {}, {impersonatedUser: 'neo4j'})`,
        },
      ],
    },
    {
      title: 'Integration and ETL',
      commands: [
        {
          command: 'Kafka Connect Configuration',
          description: 'Configure Kafka sink connector',
          usage: 'Kafka integration',
          example: `{
  "name": "neo4j-sink",
  "config": {
    "connector.class": "streams.kafka.connect.sink.Neo4jSinkConnector",
    "topics": "person-events",
    "key.converter": "org.apache.kafka.connect.storage.StringConverter",
    "value.converter": "org.apache.kafka.connect.json.JsonConverter",
    "value.converter.schemas.enable": false,
    "neo4j.server.uri": "bolt://localhost:7687",
    "neo4f.authentication.basic.username": "neo4j",
    "neo4f.authentication.basic.password": "password",
    "neo4j.database": "neo4j"
  }
}`,
        },
        {
          command: 'ETL Pipeline with APOC',
          description: 'Create ETL pipeline with periodic commit',
          usage: 'Batch ETL processing',
          example: `CALL apoc.periodic.iterate(
  'CALL apoc.load.json("file:///source.json") YIELD value RETURN value',
  '
    CREATE (p:Person {
      id: value.id,
      name: value.name,
      processedAt: datetime()
    })
    WITH p, value.skills AS skills
    UNWIND skills AS skill
    MERGE (s:Skill {name: skill})
    CREATE (p)-[:HAS_SKILL]->(s)
  ',
  {batchSize: 100, parallel: true}
)`,
        },
        {
          command: 'Create Audit Trigger',
          description: 'Set up audit trail with triggers',
          usage: 'Change tracking',
          example: `CALL apoc.trigger.add('auditChanges',
  '
    UNWIND $createdNodes AS n
    SET n.createdAt = datetime()
    UNWIND $updatedProperties AS prop
    WITH prop, n
    SET n.lastModified = datetime()
  ',
  {phase: 'after'})`,
        },
        {
          command: 'Query Change Feed',
          description: 'Query change data feed',
          usage: 'CDC querying',
          example: `CALL dbms.changeDataFeed.query(
  datetime('2024-01-01T00:00:00Z'),
  datetime('2024-01-02T00:00:00Z'),
  ['Person']
) YIELD event, metadata, txId, txEventId, txTimestamp`,
        },
        {
          command: 'Stream Changes',
          description: 'Stream changes in real-time',
          usage: 'Real-time CDC',
          example: `CALL dbms.changeDataFeed.stream(['Person']) YIELD event, metadata`,
        },
        {
          command: 'PostgreSQL Integration',
          description: 'Import data from PostgreSQL',
          usage: 'Database integration',
          example: `CALL apoc.load.jdbc('jdbc:postgresql://localhost/mydb', 
                   'SELECT * FROM users') YIELD row
CREATE (p:Person {
  id: row.id,
  name: row.name,
  email: row.email
})`,
        },
        {
          command: 'MySQL Integration',
          description: 'Import data from MySQL',
          usage: 'Database integration',
          example: `CALL apoc.load.jdbc('jdbc:mysql://localhost/mydb', 
                   'SELECT * FROM orders') YIELD row
MATCH (c:Customer {id: row.customer_id})
CREATE (c)-[:PLACED_ORDER]->(o:Order {
  id: row.id,
  amount: row.amount,
  date: date(row.order_date)
})`,
        },
        {
          command: 'Kafka Integration with APOC',
          description: 'Integrate with Apache Kafka',
          usage: 'Streaming integration',
          example: `CALL apoc.load.kafka('topic', 'localhost:9092') YIELD value
CREATE (e:Event {
  type: value.type,
  data: value.payload,
  timestamp: datetime()
})`,
        },
        {
          command: 'Real-time Data Processing',
          description: 'Process streaming data in real-time',
          usage: 'Stream processing',
          example: `CALL apoc.trigger.add(
  'process_streaming_data',
  'WITH $createdNodes AS nodes
   FOREACH (n IN nodes WHERE n:Event |
     CALL apoc.async.in(n, "apoc.load.json", [n.url], {}) YIELD value
     SET n.processed = true
   )',
  {phase: 'after'}
)`,
        },
        {
          command: 'Complete ETL Pipeline',
          description: 'End-to-end ETL pipeline',
          usage: 'Full ETL process',
          example: `// 1. Extract data from source
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
MERGE (p)-[:WORKS_FOR]->(c)`,
        },
        {
          command: 'Nested JSON Processing',
          description: 'Process complex nested JSON',
          usage: 'Complex data handling',
          example: `CALL apoc.load.json('file:///complex.json') YIELD value
UNWIND value.friends AS friend
MERGE (p:Person {name: value.name})
MERGE (f:Person {name: friend.name})
CREATE (p)-[:FRIENDS_WITH]->(f)`,
        },
      ],
    },
    {
      title: 'Best Practices',
      commands: [
        {
          command: 'Modeling Best Practices',
          description: 'Optimal graph modeling guidelines',
          usage: 'Data modeling recommendations',
          example: `Graph Modeling Best Practices:
1. Use descriptive labels and relationship types
2. Keep properties simple and atomic
3. Avoid deep nesting of properties
4. Use relationships for what they represent
5. Consider query patterns when modeling
6. Use time trees for temporal data
7. Normalize repeated data into nodes
8. Use appropriate data types for properties`,
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize query performance guidelines',
          usage: 'Performance optimization',
          example: `Performance Best Practices:
1. Create indexes on frequently queried properties
2. Use specific labels in MATCH patterns
3. LIMIT result sets early in queries
4. Use PROFILE to analyze query plans
5. Avoid Cartesian products
6. Use parameterized queries
7. Consider using APOC for complex operations
8. Monitor memory usage in large operations`,
        },
        {
          command: 'Security Best Practices',
          description: 'Secure Neo4j deployment guidelines',
          usage: 'Security recommendations',
          example: `Security Best Practices:
1. Use strong passwords and authentication
2. Implement least privilege access control
3. Use SSL/TLS for connections
4. Regularly update Neo4j and plugins
5. Monitor access logs
6. Use roles for permission management
7. Encrypt sensitive data at rest
8. Network security and firewalls`,
        },
      ],
    },
    {
      title: 'Troubleshooting',
      commands: [
        {
          command: 'Common Memory Issues',
          description: 'Diagnose and fix memory problems',
          usage: 'Memory troubleshooting',
          example: `Memory Issues:
1. Increase heap size in neo4j.conf
2. Use PERIODIC COMMIT for large operations
3. Optimize queries with LIMIT
4. Monitor memory usage with dbms.queryJmx()`,
        },
        {
          command: 'Slow Query Issues',
          description: 'Diagnose slow query performance',
          usage: 'Query troubleshooting',
          example: `Slow Query Solutions:
1. Use EXPLAIN and PROFILE
2. Add appropriate indexes
3. Rewrite query patterns
4. Check for Cartesian products`,
        },
        {
          command: 'Connection Issues',
          description: 'Diagnose connection problems',
          usage: 'Connection troubleshooting',
          example: `Connection Issues:
1. Check network connectivity
2. Verify authentication credentials
3. Check firewall settings
4. Validate Bolt protocol configuration`,
        },
        {
          command: 'Lock Contention Issues',
          description: 'Handle lock contention problems',
          usage: 'Lock troubleshooting',
          example: `Lock Contention Solutions:
1. Use shorter transactions
2. Avoid long-running writes
3. Monitor transaction logs
4. Optimize transaction design`,
        },
        {
          command: 'Debug with EXPLAIN',
          description: 'Use EXPLAIN to understand query plan',
          usage: 'Query debugging',
          example: `EXPLAIN MATCH (p:Person)-[:KNOWS*1..3]->(f:Person)
WHERE p.name = 'Alice'
RETURN f.name`,
        },
        {
          command: 'Debug with PROFILE',
          description: 'Use PROFILE for performance analysis',
          usage: 'Performance debugging',
          example: `PROFILE MATCH (p:Person)-[:KNOWS*1..3]->(f:Person)
WHERE p.name = 'Alice'
RETURN f.name`,
        },
        {
          command: 'Break Down Complex Queries',
          description: 'Split complex queries for debugging',
          usage: 'Query decomposition',
          example: `MATCH (p:Person {name: 'Alice'})
MATCH (p)-[:KNOWS]->(friend:Person)
RETURN friend.name`,
        },
        {
          command: 'Check Intermediate Results',
          description: 'Verify query intermediate steps',
          usage: 'Step-by-step debugging',
          example: `MATCH (p:Person {name: 'Alice'})
MATCH (p)-[:KNOWS]->(friend:Person)
RETURN friend.name`,
        },
        {
          command: 'Memory Configuration',
          description: 'Configure memory settings',
          usage: 'Memory tuning',
          example: `# In neo4j.conf:
dbms.memory.heap.initial_size=512m
dbms.memory.heap.max_size=2G
dbms.memory.pagecache.size=1G`,
        },
        {
          command: 'Query Tuning',
          description: 'Tune queries for better performance',
          usage: 'Query optimization',
          example: `MATCH (p:Person)
USING INDEX p:Person(name)
WHERE p.name = 'Alice'
RETURN p`,
        },
        {
          command: 'Connection Pool Tuning',
          description: 'Optimize connection pool settings',
          usage: 'Connection optimization',
          example: `# In application:
connection_pool_size=50
max_connection_lifetime=30m`,
        },
        {
          command: 'Cache Configuration',
          description: 'Configure cache settings',
          usage: 'Cache optimization',
          example: `# In neo4j.conf:
dbms.cache.type=strong
dbms.tx_log.rotation.retention_policy=100M size`,
        },
      ],
    },
  ],
};
