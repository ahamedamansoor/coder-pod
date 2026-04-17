import type { Roadmap } from './types';

export const backendDeveloper: Roadmap = {
  slug: 'backend-developer',
  name: 'Backend Developer',
  topics: [
    // CAREER PATH JOURNEY
    // INTERNET & FUNDAMENTALS
    { slug: 'how-does-internet-work', title: 'How Does the Internet Work?', explanation: 'Understanding TCP/IP, DNS, HTTP/HTTPS protocols.', category: 'Internet Fundamentals' },
    { slug: 'what-is-http', title: 'What is HTTP?', explanation: 'HTTP methods, status codes, headers, and HTTPS.', category: 'Internet Fundamentals' },
    { slug: 'browsers-and-how-they-work', title: 'Browsers and How They Work', explanation: 'Understanding browser architecture and request lifecycle.', category: 'Internet Fundamentals' },
    { slug: 'dns-and-how-it-works', title: 'DNS and How it Works', explanation: 'Domain Name System, DNS records, and resolution.', category: 'Internet Fundamentals' },
    { slug: 'domain-names', title: 'Domain Names', explanation: 'TLDs, domain registration, and DNS configuration.', category: 'Internet Fundamentals' },
    { slug: 'hosting', title: 'Hosting', explanation: 'Shared, VPS, dedicated, and cloud hosting options.', category: 'Internet Fundamentals' },

    // PROGRAMMING LANGUAGES
    { slug: 'javascript-backend', title: 'JavaScript (Node.js)', explanation: 'Event-driven, non-blocking I/O for backend development.', category: 'Programming Languages', connectedRoadmap: 'javascript' },
    { slug: 'typescript-backend', title: 'TypeScript', explanation: 'Static typing for JavaScript applications.', category: 'Programming Languages', connectedRoadmap: 'typescript' },
    { slug: 'python-backend', title: 'Python', explanation: 'Django, Flask, FastAPI for web development.', category: 'Programming Languages', connectedRoadmap: 'python' },
    { slug: 'java-backend', title: 'Java', explanation: 'Spring Boot, enterprise application development.', category: 'Programming Languages', connectedRoadmap: 'java' },
    { slug: 'csharp-backend', title: 'C# (.NET)', explanation: 'ASP.NET Core for modern web applications.', category: 'Programming Languages' },
    { slug: 'go-backend', title: 'Go (Golang)', explanation: 'High-performance concurrent backend services.', category: 'Programming Languages' },
    { slug: 'rust-backend', title: 'Rust', explanation: 'Memory-safe systems programming for web.', category: 'Programming Languages' },
    { slug: 'php-backend', title: 'PHP', explanation: 'Laravel, Symfony for web applications.', category: 'Programming Languages' },
    { slug: 'ruby-backend', title: 'Ruby', explanation: 'Ruby on Rails for rapid development.', category: 'Programming Languages' },

    // VERSION CONTROL
    { slug: 'git-basics', title: 'Git Basics', explanation: 'Repositories, commits, branches, merging.', category: 'Version Control' },
    { slug: 'github', title: 'GitHub', explanation: 'Remote repositories, pull requests, collaboration.', category: 'Version Control' },
    { slug: 'gitlab', title: 'GitLab', explanation: 'CI/CD integration, DevOps platform.', category: 'Version Control' },
    { slug: 'bitbucket', title: 'Bitbucket', explanation: 'Atlassian ecosystem integration.', category: 'Version Control' },
    { slug: 'git-workflows', title: 'Git Workflows', explanation: 'Gitflow, trunk-based development, feature branches.', category: 'Version Control' },

    // RELATIONAL DATABASES
    { slug: 'postgresql', title: 'PostgreSQL', explanation: 'Advanced open-source relational database.', category: 'Relational Databases' },
    { slug: 'mysql', title: 'MySQL', explanation: 'Popular open-source database management system.', category: 'Relational Databases' },
    { slug: 'mariadb', title: 'MariaDB', explanation: 'MySQL fork with enhanced features.', category: 'Relational Databases' },
    { slug: 'mssql', title: 'MS SQL Server', explanation: 'Microsoft enterprise database solution.', category: 'Relational Databases' },
    { slug: 'oracle', title: 'Oracle Database', explanation: 'Enterprise-grade relational database.', category: 'Relational Databases' },
    { slug: 'sql-fundamentals', title: 'SQL Fundamentals', explanation: 'SELECT, INSERT, UPDATE, DELETE, JOINs.', category: 'Relational Databases' },
    { slug: 'database-design', title: 'Database Design', explanation: 'Normalization, schema design, ER diagrams.', category: 'Relational Databases' },
    { slug: 'indexes', title: 'Indexes', explanation: 'B-tree, hash, composite indexes for performance.', category: 'Relational Databases' },
    { slug: 'transactions', title: 'Transactions', explanation: 'ACID properties, isolation levels, deadlocks.', category: 'Relational Databases' },

    // NOSQL DATABASES
    { slug: 'mongodb', title: 'MongoDB', explanation: 'Document-oriented NoSQL database.', category: 'NoSQL Databases' },
    { slug: 'cassandra', title: 'Cassandra', explanation: 'Distributed wide-column store.', category: 'NoSQL Databases' },
    { slug: 'redis', title: 'Redis', explanation: 'In-memory data structure store, cache.', category: 'NoSQL Databases' },
    { slug: 'elasticsearch', title: 'Elasticsearch', explanation: 'Distributed search and analytics engine.', category: 'NoSQL Databases' },
    { slug: 'dynamodb', title: 'DynamoDB', explanation: 'AWS managed NoSQL database.', category: 'NoSQL Databases' },
    { slug: 'couchdb', title: 'CouchDB', explanation: 'Document-oriented database with HTTP API.', category: 'NoSQL Databases' },
    { slug: 'neo4j', title: 'Neo4j', explanation: 'Graph database for connected data.', category: 'NoSQL Databases' },

    // APIs
    { slug: 'rest-api', title: 'REST API', explanation: 'RESTful principles, resource design, HTTP methods.', category: 'APIs' },
    { slug: 'json-apis', title: 'JSON APIs', explanation: 'JSON data format, serialization, best practices.', category: 'APIs' },
    { slug: 'soap', title: 'SOAP', explanation: 'XML-based protocol for web services.', category: 'APIs' },
    { slug: 'graphql', title: 'GraphQL', explanation: 'Query language for APIs, flexible data fetching.', category: 'APIs' },
    { slug: 'grpc', title: 'gRPC', explanation: 'High-performance RPC framework.', category: 'APIs' },
    { slug: 'websockets', title: 'WebSockets', explanation: 'Full-duplex communication over TCP.', category: 'APIs' },
    { slug: 'api-authentication', title: 'API Authentication', explanation: 'OAuth 2.0, JWT, API keys, token-based auth.', category: 'APIs' },
    { slug: 'api-versioning', title: 'API Versioning', explanation: 'URI, header, and query parameter versioning.', category: 'APIs' },
    { slug: 'api-documentation', title: 'API Documentation', explanation: 'OpenAPI/Swagger, API Blueprint, Postman.', category: 'APIs' },
    { slug: 'rate-limiting', title: 'Rate Limiting', explanation: 'Token bucket, leaky bucket algorithms.', category: 'APIs' },

    // AUTHENTICATION & AUTHORIZATION
    { slug: 'authentication-basics', title: 'Authentication Basics', explanation: 'Sessions, cookies, tokens.', category: 'Authentication & Authorization' },
    { slug: 'jwt', title: 'JWT (JSON Web Tokens)', explanation: 'Stateless authentication with tokens.', category: 'Authentication & Authorization' },
    { slug: 'oauth', title: 'OAuth 2.0', explanation: 'Authorization framework for third-party access.', category: 'Authentication & Authorization' },
    { slug: 'sso', title: 'Single Sign-On (SSO)', explanation: 'SAML, OpenID Connect for unified authentication.', category: 'Authentication & Authorization' },
    { slug: 'basic-auth', title: 'Basic Authentication', explanation: 'Username/password over HTTP.', category: 'Authentication & Authorization' },
    { slug: 'session-management', title: 'Session Management', explanation: 'Session storage, expiration, security.', category: 'Authentication & Authorization' },
    { slug: 'password-hashing', title: 'Password Hashing', explanation: 'bcrypt, Argon2, salting, pepper.', category: 'Authentication & Authorization' },
    { slug: 'rbac', title: 'RBAC (Role-Based Access Control)', explanation: 'Roles, permissions, access control.', category: 'Authentication & Authorization' },
    { slug: 'abac', title: 'ABAC (Attribute-Based Access Control)', explanation: 'Policy-based access control.', category: 'Authentication & Authorization' },

    // CACHING
    { slug: 'caching-strategies', title: 'Caching Strategies', explanation: 'Cache-aside, write-through, write-behind.', category: 'Caching' },
    { slug: 'cdn', title: 'CDN (Content Delivery Network)', explanation: 'CloudFlare, Akamai, AWS CloudFront.', category: 'Caching' },
    { slug: 'server-side-caching', title: 'Server-Side Caching', explanation: 'Redis, Memcached, in-memory caching.', category: 'Caching' },
    { slug: 'client-side-caching', title: 'Client-Side Caching', explanation: 'HTTP caching headers, ETags.', category: 'Caching' },
    { slug: 'cache-invalidation', title: 'Cache Invalidation', explanation: 'TTL, cache busting, purging strategies.', category: 'Caching' },

    // MESSAGE BROKERS
    { slug: 'rabbitmq', title: 'RabbitMQ', explanation: 'AMQP message broker for reliable messaging.', category: 'Message Brokers' },
    { slug: 'kafka', title: 'Apache Kafka', explanation: 'Distributed streaming platform for high-throughput.', category: 'Message Brokers' },
    { slug: 'aws-sqs', title: 'AWS SQS', explanation: 'Managed message queue service.', category: 'Message Brokers' },
    { slug: 'azure-service-bus', title: 'Azure Service Bus', explanation: 'Enterprise messaging service.', category: 'Message Brokers' },
    { slug: 'google-pub-sub', title: 'Google Pub/Sub', explanation: 'Asynchronous messaging service.', category: 'Message Brokers' },
    { slug: 'message-queue-patterns', title: 'Message Queue Patterns', explanation: 'Point-to-point, publish-subscribe, request-reply.', category: 'Message Brokers' },

    // CONTAINERIZATION
    { slug: 'docker', title: 'Docker', explanation: 'Containerization platform for applications.', category: 'Containerization' },
    { slug: 'docker-compose', title: 'Docker Compose', explanation: 'Multi-container Docker applications.', category: 'Containerization' },
    { slug: 'kubernetes', title: 'Kubernetes', explanation: 'Container orchestration platform.', category: 'Containerization' },
    { slug: 'kubernetes-concepts', title: 'Kubernetes Concepts', explanation: 'Pods, services, deployments, ingress.', category: 'Containerization' },
    { slug: 'helm', title: 'Helm', explanation: 'Package manager for Kubernetes.', category: 'Containerization' },
    { slug: 'container-security', title: 'Container Security', explanation: 'Image scanning, runtime security.', category: 'Containerization' },

    // WEB SERVERS
    { slug: 'nginx', title: 'Nginx', explanation: 'High-performance web server and reverse proxy.', category: 'Web Servers' },
    { slug: 'apache', title: 'Apache HTTP Server', explanation: 'Widely-used open-source web server.', category: 'Web Servers' },
    { slug: 'caddy', title: 'Caddy', explanation: 'Modern web server with automatic HTTPS.', category: 'Web Servers' },
    { slug: 'iis', title: 'IIS (Internet Information Services)', explanation: 'Microsoft web server for Windows.', category: 'Web Servers' },
    { slug: 'reverse-proxy', title: 'Reverse Proxy', explanation: 'Load balancing, SSL termination, caching.', category: 'Web Servers' },

    // WEB SECURITY
    { slug: 'https-ssl-tls', title: 'HTTPS/SSL/TLS', explanation: 'Secure communication, certificates, encryption.', category: 'Web Security' },
    { slug: 'cors', title: 'CORS', explanation: 'Cross-Origin Resource Sharing policies.', category: 'Web Security' },
    { slug: 'csrf', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery prevention.', category: 'Web Security' },
    { slug: 'xss', title: 'XSS Prevention', explanation: 'Cross-Site Scripting attack mitigation.', category: 'Web Security' },
    { slug: 'sql-injection', title: 'SQL Injection Prevention', explanation: 'Parameterized queries, input validation.', category: 'Web Security' },
    { slug: 'security-headers', title: 'Security Headers', explanation: 'CSP, HSTS, X-Frame-Options, X-XSS-Protection.', category: 'Web Security' },
    { slug: 'owasp-top-10', title: 'OWASP Top 10', explanation: 'Common web application security risks.', category: 'Web Security' },
    { slug: 'encryption', title: 'Encryption', explanation: 'Symmetric, asymmetric encryption, hashing.', category: 'Web Security' },

    // TESTING
    { slug: 'unit-testing', title: 'Unit Testing', explanation: 'Testing individual components in isolation.', category: 'Testing' },
    { slug: 'integration-testing', title: 'Integration Testing', explanation: 'Testing component interactions.', category: 'Testing' },
    { slug: 'e2e-testing', title: 'End-to-End Testing', explanation: 'Full application workflow testing.', category: 'Testing' },
    { slug: 'performance-testing', title: 'Performance Testing', explanation: 'Load, stress, and spike testing.', category: 'Testing' },
    { slug: 'test-frameworks', title: 'Testing Frameworks', explanation: 'Jest, Mocha, JUnit, pytest, NUnit.', category: 'Testing' },
    { slug: 'mocking', title: 'Mocking', explanation: 'Mock objects, stubs, spies for testing.', category: 'Testing' },
    { slug: 'tdd', title: 'TDD (Test-Driven Development)', explanation: 'Write tests before implementation.', category: 'Testing' },
    { slug: 'bdd', title: 'BDD (Behavior-Driven Development)', explanation: 'Cucumber, SpecFlow for behavior testing.', category: 'Testing' },

    // CI/CD
    { slug: 'continuous-integration', title: 'Continuous Integration', explanation: 'Automated building and testing.', category: 'CI/CD' },
    { slug: 'continuous-deployment', title: 'Continuous Deployment', explanation: 'Automated deployment to production.', category: 'CI/CD' },
    { slug: 'github-actions', title: 'GitHub Actions', explanation: 'CI/CD workflows in GitHub.', category: 'CI/CD' },
    { slug: 'jenkins', title: 'Jenkins', explanation: 'Open-source automation server.', category: 'CI/CD' },
    { slug: 'gitlab-ci', title: 'GitLab CI/CD', explanation: 'Integrated CI/CD in GitLab.', category: 'CI/CD' },
    { slug: 'circleci', title: 'CircleCI', explanation: 'Cloud-based CI/CD platform.', category: 'CI/CD' },
    { slug: 'travis-ci', title: 'Travis CI', explanation: 'Hosted CI service for GitHub.', category: 'CI/CD' },

    // DESIGN PATTERNS
    { slug: 'design-patterns-overview', title: 'Design Patterns Overview', explanation: 'Creational, structural, behavioral patterns.', category: 'Design Patterns' },
    { slug: 'singleton', title: 'Singleton Pattern', explanation: 'Single instance of a class.', category: 'Design Patterns' },
    { slug: 'factory', title: 'Factory Pattern', explanation: 'Object creation without specifying class.', category: 'Design Patterns' },
    { slug: 'builder', title: 'Builder Pattern', explanation: 'Step-by-step object construction.', category: 'Design Patterns' },
    { slug: 'repository', title: 'Repository Pattern', explanation: 'Abstraction layer for data access.', category: 'Design Patterns' },
    { slug: 'mvc', title: 'MVC Pattern', explanation: 'Model-View-Controller architecture.', category: 'Design Patterns' },
    { slug: 'dependency-injection', title: 'Dependency Injection', explanation: 'Inversion of Control pattern.', category: 'Design Patterns' },
    { slug: 'observer', title: 'Observer Pattern', explanation: 'Event-driven architecture pattern.', category: 'Design Patterns' },

    // ARCHITECTURAL PATTERNS
    { slug: 'monolithic-architecture', title: 'Monolithic Architecture', explanation: 'Single-tiered application design.', category: 'Architectural Patterns' },
    { slug: 'microservices', title: 'Microservices', explanation: 'Distributed, loosely-coupled services.', category: 'Architectural Patterns' },
    { slug: 'soa', title: 'SOA (Service-Oriented Architecture)', explanation: 'Service-based application design.', category: 'Architectural Patterns' },
    { slug: 'serverless', title: 'Serverless', explanation: 'FaaS, AWS Lambda, Azure Functions.', category: 'Architectural Patterns' },
    { slug: 'event-driven', title: 'Event-Driven Architecture', explanation: 'Asynchronous event-based communication.', category: 'Architectural Patterns' },
    { slug: 'cqrs', title: 'CQRS', explanation: 'Command Query Responsibility Segregation.', category: 'Architectural Patterns' },
    { slug: 'event-sourcing', title: 'Event Sourcing', explanation: 'Storing state as sequence of events.', category: 'Architectural Patterns' },
    { slug: 'clean-architecture', title: 'Clean Architecture', explanation: 'Layered architecture with dependency rules.', category: 'Architectural Patterns' },
    { slug: 'hexagonal-architecture', title: 'Hexagonal Architecture', explanation: 'Ports and adapters pattern.', category: 'Architectural Patterns' },

    // SEARCH ENGINES
    { slug: 'elasticsearch-search', title: 'Elasticsearch', explanation: 'Full-text search and analytics.', category: 'Search Engines' },
    { slug: 'solr', title: 'Apache Solr', explanation: 'Enterprise search platform.', category: 'Search Engines' },
    { slug: 'algolia', title: 'Algolia', explanation: 'Hosted search API.', category: 'Search Engines' },
    { slug: 'search-optimization', title: 'Search Optimization', explanation: 'Indexing, relevance tuning, performance.', category: 'Search Engines' },

    // MONITORING & LOGGING
    { slug: 'application-monitoring', title: 'Application Monitoring', explanation: 'Prometheus, Grafana, Datadog.', category: 'Monitoring & Logging' },
    { slug: 'logging', title: 'Logging', explanation: 'Structured logging, log levels, best practices.', category: 'Monitoring & Logging' },
    { slug: 'elk-stack', title: 'ELK Stack', explanation: 'Elasticsearch, Logstash, Kibana for logs.', category: 'Monitoring & Logging' },
    { slug: 'distributed-tracing', title: 'Distributed Tracing', explanation: 'Jaeger, Zipkin for microservices.', category: 'Monitoring & Logging' },
    { slug: 'apm', title: 'APM (Application Performance Monitoring)', explanation: 'New Relic, AppDynamics, Dynatrace.', category: 'Monitoring & Logging' },
    { slug: 'error-tracking', title: 'Error Tracking', explanation: 'Sentry, Rollbar, Bugsnag.', category: 'Monitoring & Logging' },
    { slug: 'health-checks', title: 'Health Checks', explanation: 'Liveness and readiness probes.', category: 'Monitoring & Logging' },

    // SCALABILITY
    { slug: 'horizontal-scaling', title: 'Horizontal Scaling', explanation: 'Adding more servers/instances.', category: 'Scalability' },
    { slug: 'vertical-scaling', title: 'Vertical Scaling', explanation: 'Increasing server resources.', category: 'Scalability' },
    { slug: 'load-balancing', title: 'Load Balancing', explanation: 'Round-robin, least connections, IP hash.', category: 'Scalability' },
    { slug: 'database-replication', title: 'Database Replication', explanation: 'Master-slave, master-master replication.', category: 'Scalability' },
    { slug: 'database-sharding', title: 'Database Sharding', explanation: 'Horizontal data partitioning.', category: 'Scalability' },
    { slug: 'caching-at-scale', title: 'Caching at Scale', explanation: 'Distributed caching strategies.', category: 'Scalability' },
    { slug: 'async-processing', title: 'Asynchronous Processing', explanation: 'Background jobs, task queues.', category: 'Scalability' },

    // CLOUD PLATFORMS
    { slug: 'aws', title: 'AWS (Amazon Web Services)', explanation: 'EC2, S3, RDS, Lambda, API Gateway.', category: 'Cloud Platforms' },
    { slug: 'azure', title: 'Microsoft Azure', explanation: 'App Service, Azure Functions, Cosmos DB.', category: 'Cloud Platforms' },
    { slug: 'gcp', title: 'Google Cloud Platform', explanation: 'Compute Engine, Cloud Functions, Cloud SQL.', category: 'Cloud Platforms' },
    { slug: 'cloud-storage', title: 'Cloud Storage', explanation: 'Object storage, blob storage, file systems.', category: 'Cloud Platforms' },
    { slug: 'cloud-databases', title: 'Cloud Databases', explanation: 'Managed database services.', category: 'Cloud Platforms' },
    { slug: 'cloud-networking', title: 'Cloud Networking', explanation: 'VPC, subnets, security groups.', category: 'Cloud Platforms' },

    // BEST PRACTICES
    { slug: 'clean-code', title: 'Clean Code', explanation: 'Readable, maintainable code principles.', category: 'Best Practices' },
    { slug: 'solid-principles', title: 'SOLID Principles', explanation: 'Object-oriented design principles.', category: 'Best Practices' },
    { slug: 'dry-principle', title: 'DRY (Don\'t Repeat Yourself)', explanation: 'Code reusability and abstraction.', category: 'Best Practices' },
    { slug: 'kiss-principle', title: 'KISS (Keep It Simple, Stupid)', explanation: 'Simplicity in design.', category: 'Best Practices' },
    { slug: 'yagni', title: 'YAGNI (You Aren\'t Gonna Need It)', explanation: 'Avoid unnecessary features.', category: 'Best Practices' },
    { slug: 'code-reviews', title: 'Code Reviews', explanation: 'Best practices for peer reviews.', category: 'Best Practices' },
    { slug: 'documentation', title: 'Documentation', explanation: 'API docs, code comments, README files.', category: 'Best Practices' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'Exception handling, error codes, logging.', category: 'Best Practices' },
    { slug: 'performance-optimization', title: 'Performance Optimization', explanation: 'Profiling, bottleneck identification, optimization.', category: 'Best Practices' },
  ]
};
