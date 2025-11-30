import type { Language } from './types';

export const backendDeveloper: Language = {
  slug: 'backend-developer',
  name: 'Backend Developer',
  topics: [
    // INTERNET & FUNDAMENTALS
    { slug: 'how-does-internet-work', title: 'How Does the Internet Work?', explanation: 'Understanding TCP/IP, DNS, HTTP/HTTPS protocols.', category: '1. Internet Fundamentals' },
    { slug: 'what-is-http', title: 'What is HTTP?', explanation: 'HTTP methods, status codes, headers, and HTTPS.', category: '1. Internet Fundamentals' },
    { slug: 'browsers-and-how-they-work', title: 'Browsers and How They Work', explanation: 'Understanding browser architecture and request lifecycle.', category: '1. Internet Fundamentals' },
    { slug: 'dns-and-how-it-works', title: 'DNS and How it Works', explanation: 'Domain Name System, DNS records, and resolution.', category: '1. Internet Fundamentals' },
    { slug: 'domain-names', title: 'Domain Names', explanation: 'TLDs, domain registration, and DNS configuration.', category: '1. Internet Fundamentals' },
    { slug: 'hosting', title: 'Hosting', explanation: 'Shared, VPS, dedicated, and cloud hosting options.', category: '1. Internet Fundamentals' },

    // PROGRAMMING LANGUAGES
    { slug: 'javascript-backend', title: 'JavaScript (Node.js)', explanation: 'Event-driven, non-blocking I/O for backend development.', category: '2. Programming Languages' },
    { slug: 'typescript-backend', title: 'TypeScript', explanation: 'Static typing for JavaScript applications.', category: '2. Programming Languages' },
    { slug: 'python-backend', title: 'Python', explanation: 'Django, Flask, FastAPI for web development.', category: '2. Programming Languages' },
    { slug: 'java-backend', title: 'Java', explanation: 'Spring Boot, enterprise application development.', category: '2. Programming Languages' },
    { slug: 'csharp-backend', title: 'C# (.NET)', explanation: 'ASP.NET Core for modern web applications.', category: '2. Programming Languages' },
    { slug: 'go-backend', title: 'Go (Golang)', explanation: 'High-performance concurrent backend services.', category: '2. Programming Languages' },
    { slug: 'rust-backend', title: 'Rust', explanation: 'Memory-safe systems programming for web.', category: '2. Programming Languages' },
    { slug: 'php-backend', title: 'PHP', explanation: 'Laravel, Symfony for web applications.', category: '2. Programming Languages' },
    { slug: 'ruby-backend', title: 'Ruby', explanation: 'Ruby on Rails for rapid development.', category: '2. Programming Languages' },

    // VERSION CONTROL
    { slug: 'git-basics', title: 'Git Basics', explanation: 'Repositories, commits, branches, merging.', category: '3. Version Control' },
    { slug: 'github', title: 'GitHub', explanation: 'Remote repositories, pull requests, collaboration.', category: '3. Version Control' },
    { slug: 'gitlab', title: 'GitLab', explanation: 'CI/CD integration, DevOps platform.', category: '3. Version Control' },
    { slug: 'bitbucket', title: 'Bitbucket', explanation: 'Atlassian ecosystem integration.', category: '3. Version Control' },
    { slug: 'git-workflows', title: 'Git Workflows', explanation: 'Gitflow, trunk-based development, feature branches.', category: '3. Version Control' },

    // RELATIONAL DATABASES
    { slug: 'postgresql', title: 'PostgreSQL', explanation: 'Advanced open-source relational database.', category: '4. Relational Databases' },
    { slug: 'mysql', title: 'MySQL', explanation: 'Popular open-source database management system.', category: '4. Relational Databases' },
    { slug: 'mariadb', title: 'MariaDB', explanation: 'MySQL fork with enhanced features.', category: '4. Relational Databases' },
    { slug: 'mssql', title: 'MS SQL Server', explanation: 'Microsoft enterprise database solution.', category: '4. Relational Databases' },
    { slug: 'oracle', title: 'Oracle Database', explanation: 'Enterprise-grade relational database.', category: '4. Relational Databases' },
    { slug: 'sql-fundamentals', title: 'SQL Fundamentals', explanation: 'SELECT, INSERT, UPDATE, DELETE, JOINs.', category: '4. Relational Databases' },
    { slug: 'database-design', title: 'Database Design', explanation: 'Normalization, schema design, ER diagrams.', category: '4. Relational Databases' },
    { slug: 'indexes', title: 'Indexes', explanation: 'B-tree, hash, composite indexes for performance.', category: '4. Relational Databases' },
    { slug: 'transactions', title: 'Transactions', explanation: 'ACID properties, isolation levels, deadlocks.', category: '4. Relational Databases' },

    // NOSQL DATABASES
    { slug: 'mongodb', title: 'MongoDB', explanation: 'Document-oriented NoSQL database.', category: '5. NoSQL Databases' },
    { slug: 'cassandra', title: 'Cassandra', explanation: 'Distributed wide-column store.', category: '5. NoSQL Databases' },
    { slug: 'redis', title: 'Redis', explanation: 'In-memory data structure store, cache.', category: '5. NoSQL Databases' },
    { slug: 'elasticsearch', title: 'Elasticsearch', explanation: 'Distributed search and analytics engine.', category: '5. NoSQL Databases' },
    { slug: 'dynamodb', title: 'DynamoDB', explanation: 'AWS managed NoSQL database.', category: '5. NoSQL Databases' },
    { slug: 'couchdb', title: 'CouchDB', explanation: 'Document-oriented database with HTTP API.', category: '5. NoSQL Databases' },
    { slug: 'neo4j', title: 'Neo4j', explanation: 'Graph database for connected data.', category: '5. NoSQL Databases' },

    // APIs
    { slug: 'rest-api', title: 'REST API', explanation: 'RESTful principles, resource design, HTTP methods.', category: '6. APIs' },
    { slug: 'json-apis', title: 'JSON APIs', explanation: 'JSON data format, serialization, best practices.', category: '6. APIs' },
    { slug: 'soap', title: 'SOAP', explanation: 'XML-based protocol for web services.', category: '6. APIs' },
    { slug: 'graphql', title: 'GraphQL', explanation: 'Query language for APIs, flexible data fetching.', category: '6. APIs' },
    { slug: 'grpc', title: 'gRPC', explanation: 'High-performance RPC framework.', category: '6. APIs' },
    { slug: 'websockets', title: 'WebSockets', explanation: 'Full-duplex communication over TCP.', category: '6. APIs' },
    { slug: 'api-authentication', title: 'API Authentication', explanation: 'OAuth 2.0, JWT, API keys, token-based auth.', category: '6. APIs' },
    { slug: 'api-versioning', title: 'API Versioning', explanation: 'URI, header, and query parameter versioning.', category: '6. APIs' },
    { slug: 'api-documentation', title: 'API Documentation', explanation: 'OpenAPI/Swagger, API Blueprint, Postman.', category: '6. APIs' },
    { slug: 'rate-limiting', title: 'Rate Limiting', explanation: 'Token bucket, leaky bucket algorithms.', category: '6. APIs' },

    // AUTHENTICATION & AUTHORIZATION
    { slug: 'authentication-basics', title: 'Authentication Basics', explanation: 'Sessions, cookies, tokens.', category: '7. Authentication & Authorization' },
    { slug: 'jwt', title: 'JWT (JSON Web Tokens)', explanation: 'Stateless authentication with tokens.', category: '7. Authentication & Authorization' },
    { slug: 'oauth', title: 'OAuth 2.0', explanation: 'Authorization framework for third-party access.', category: '7. Authentication & Authorization' },
    { slug: 'sso', title: 'Single Sign-On (SSO)', explanation: 'SAML, OpenID Connect for unified authentication.', category: '7. Authentication & Authorization' },
    { slug: 'basic-auth', title: 'Basic Authentication', explanation: 'Username/password over HTTP.', category: '7. Authentication & Authorization' },
    { slug: 'session-management', title: 'Session Management', explanation: 'Session storage, expiration, security.', category: '7. Authentication & Authorization' },
    { slug: 'password-hashing', title: 'Password Hashing', explanation: 'bcrypt, Argon2, salting, pepper.', category: '7. Authentication & Authorization' },
    { slug: 'rbac', title: 'RBAC (Role-Based Access Control)', explanation: 'Roles, permissions, access control.', category: '7. Authentication & Authorization' },
    { slug: 'abac', title: 'ABAC (Attribute-Based Access Control)', explanation: 'Policy-based access control.', category: '7. Authentication & Authorization' },

    // CACHING
    { slug: 'caching-strategies', title: 'Caching Strategies', explanation: 'Cache-aside, write-through, write-behind.', category: '8. Caching' },
    { slug: 'cdn', title: 'CDN (Content Delivery Network)', explanation: 'CloudFlare, Akamai, AWS CloudFront.', category: '8. Caching' },
    { slug: 'server-side-caching', title: 'Server-Side Caching', explanation: 'Redis, Memcached, in-memory caching.', category: '8. Caching' },
    { slug: 'client-side-caching', title: 'Client-Side Caching', explanation: 'HTTP caching headers, ETags.', category: '8. Caching' },
    { slug: 'cache-invalidation', title: 'Cache Invalidation', explanation: 'TTL, cache busting, purging strategies.', category: '8. Caching' },

    // MESSAGE BROKERS
    { slug: 'rabbitmq', title: 'RabbitMQ', explanation: 'AMQP message broker for reliable messaging.', category: '9. Message Brokers' },
    { slug: 'kafka', title: 'Apache Kafka', explanation: 'Distributed streaming platform for high-throughput.', category: '9. Message Brokers' },
    { slug: 'aws-sqs', title: 'AWS SQS', explanation: 'Managed message queue service.', category: '9. Message Brokers' },
    { slug: 'azure-service-bus', title: 'Azure Service Bus', explanation: 'Enterprise messaging service.', category: '9. Message Brokers' },
    { slug: 'google-pub-sub', title: 'Google Pub/Sub', explanation: 'Asynchronous messaging service.', category: '9. Message Brokers' },
    { slug: 'message-queue-patterns', title: 'Message Queue Patterns', explanation: 'Point-to-point, publish-subscribe, request-reply.', category: '9. Message Brokers' },

    // CONTAINERIZATION
    { slug: 'docker', title: 'Docker', explanation: 'Containerization platform for applications.', category: '10. Containerization' },
    { slug: 'docker-compose', title: 'Docker Compose', explanation: 'Multi-container Docker applications.', category: '10. Containerization' },
    { slug: 'kubernetes', title: 'Kubernetes', explanation: 'Container orchestration platform.', category: '10. Containerization' },
    { slug: 'kubernetes-concepts', title: 'Kubernetes Concepts', explanation: 'Pods, services, deployments, ingress.', category: '10. Containerization' },
    { slug: 'helm', title: 'Helm', explanation: 'Package manager for Kubernetes.', category: '10. Containerization' },
    { slug: 'container-security', title: 'Container Security', explanation: 'Image scanning, runtime security.', category: '10. Containerization' },

    // WEB SERVERS
    { slug: 'nginx', title: 'Nginx', explanation: 'High-performance web server and reverse proxy.', category: '11. Web Servers' },
    { slug: 'apache', title: 'Apache HTTP Server', explanation: 'Widely-used open-source web server.', category: '11. Web Servers' },
    { slug: 'caddy', title: 'Caddy', explanation: 'Modern web server with automatic HTTPS.', category: '11. Web Servers' },
    { slug: 'iis', title: 'IIS (Internet Information Services)', explanation: 'Microsoft web server for Windows.', category: '11. Web Servers' },
    { slug: 'reverse-proxy', title: 'Reverse Proxy', explanation: 'Load balancing, SSL termination, caching.', category: '11. Web Servers' },

    // WEB SECURITY
    { slug: 'https-ssl-tls', title: 'HTTPS/SSL/TLS', explanation: 'Secure communication, certificates, encryption.', category: '12. Web Security' },
    { slug: 'cors', title: 'CORS', explanation: 'Cross-Origin Resource Sharing policies.', category: '12. Web Security' },
    { slug: 'csrf', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery prevention.', category: '12. Web Security' },
    { slug: 'xss', title: 'XSS Prevention', explanation: 'Cross-Site Scripting attack mitigation.', category: '12. Web Security' },
    { slug: 'sql-injection', title: 'SQL Injection Prevention', explanation: 'Parameterized queries, input validation.', category: '12. Web Security' },
    { slug: 'security-headers', title: 'Security Headers', explanation: 'CSP, HSTS, X-Frame-Options, X-XSS-Protection.', category: '12. Web Security' },
    { slug: 'owasp-top-10', title: 'OWASP Top 10', explanation: 'Common web application security risks.', category: '12. Web Security' },
    { slug: 'encryption', title: 'Encryption', explanation: 'Symmetric, asymmetric encryption, hashing.', category: '12. Web Security' },

    // TESTING
    { slug: 'unit-testing', title: 'Unit Testing', explanation: 'Testing individual components in isolation.', category: '13. Testing' },
    { slug: 'integration-testing', title: 'Integration Testing', explanation: 'Testing component interactions.', category: '13. Testing' },
    { slug: 'e2e-testing', title: 'End-to-End Testing', explanation: 'Full application workflow testing.', category: '13. Testing' },
    { slug: 'performance-testing', title: 'Performance Testing', explanation: 'Load, stress, and spike testing.', category: '13. Testing' },
    { slug: 'test-frameworks', title: 'Testing Frameworks', explanation: 'Jest, Mocha, JUnit, pytest, NUnit.', category: '13. Testing' },
    { slug: 'mocking', title: 'Mocking', explanation: 'Mock objects, stubs, spies for testing.', category: '13. Testing' },
    { slug: 'tdd', title: 'TDD (Test-Driven Development)', explanation: 'Write tests before implementation.', category: '13. Testing' },
    { slug: 'bdd', title: 'BDD (Behavior-Driven Development)', explanation: 'Cucumber, SpecFlow for behavior testing.', category: '13. Testing' },

    // CI/CD
    { slug: 'continuous-integration', title: 'Continuous Integration', explanation: 'Automated building and testing.', category: '14. CI/CD' },
    { slug: 'continuous-deployment', title: 'Continuous Deployment', explanation: 'Automated deployment to production.', category: '14. CI/CD' },
    { slug: 'github-actions', title: 'GitHub Actions', explanation: 'CI/CD workflows in GitHub.', category: '14. CI/CD' },
    { slug: 'jenkins', title: 'Jenkins', explanation: 'Open-source automation server.', category: '14. CI/CD' },
    { slug: 'gitlab-ci', title: 'GitLab CI/CD', explanation: 'Integrated CI/CD in GitLab.', category: '14. CI/CD' },
    { slug: 'circleci', title: 'CircleCI', explanation: 'Cloud-based CI/CD platform.', category: '14. CI/CD' },
    { slug: 'travis-ci', title: 'Travis CI', explanation: 'Hosted CI service for GitHub.', category: '14. CI/CD' },

    // DESIGN PATTERNS
    { slug: 'design-patterns-overview', title: 'Design Patterns Overview', explanation: 'Creational, structural, behavioral patterns.', category: '15. Design Patterns' },
    { slug: 'singleton', title: 'Singleton Pattern', explanation: 'Single instance of a class.', category: '15. Design Patterns' },
    { slug: 'factory', title: 'Factory Pattern', explanation: 'Object creation without specifying class.', category: '15. Design Patterns' },
    { slug: 'builder', title: 'Builder Pattern', explanation: 'Step-by-step object construction.', category: '15. Design Patterns' },
    { slug: 'repository', title: 'Repository Pattern', explanation: 'Abstraction layer for data access.', category: '15. Design Patterns' },
    { slug: 'mvc', title: 'MVC Pattern', explanation: 'Model-View-Controller architecture.', category: '15. Design Patterns' },
    { slug: 'dependency-injection', title: 'Dependency Injection', explanation: 'Inversion of Control pattern.', category: '15. Design Patterns' },
    { slug: 'observer', title: 'Observer Pattern', explanation: 'Event-driven architecture pattern.', category: '15. Design Patterns' },

    // ARCHITECTURAL PATTERNS
    { slug: 'monolithic-architecture', title: 'Monolithic Architecture', explanation: 'Single-tiered application design.', category: '16. Architectural Patterns' },
    { slug: 'microservices', title: 'Microservices', explanation: 'Distributed, loosely-coupled services.', category: '16. Architectural Patterns' },
    { slug: 'soa', title: 'SOA (Service-Oriented Architecture)', explanation: 'Service-based application design.', category: '16. Architectural Patterns' },
    { slug: 'serverless', title: 'Serverless', explanation: 'FaaS, AWS Lambda, Azure Functions.', category: '16. Architectural Patterns' },
    { slug: 'event-driven', title: 'Event-Driven Architecture', explanation: 'Asynchronous event-based communication.', category: '16. Architectural Patterns' },
    { slug: 'cqrs', title: 'CQRS', explanation: 'Command Query Responsibility Segregation.', category: '16. Architectural Patterns' },
    { slug: 'event-sourcing', title: 'Event Sourcing', explanation: 'Storing state as sequence of events.', category: '16. Architectural Patterns' },
    { slug: 'clean-architecture', title: 'Clean Architecture', explanation: 'Layered architecture with dependency rules.', category: '16. Architectural Patterns' },
    { slug: 'hexagonal-architecture', title: 'Hexagonal Architecture', explanation: 'Ports and adapters pattern.', category: '16. Architectural Patterns' },

    // SEARCH ENGINES
    { slug: 'elasticsearch-search', title: 'Elasticsearch', explanation: 'Full-text search and analytics.', category: '17. Search Engines' },
    { slug: 'solr', title: 'Apache Solr', explanation: 'Enterprise search platform.', category: '17. Search Engines' },
    { slug: 'algolia', title: 'Algolia', explanation: 'Hosted search API.', category: '17. Search Engines' },
    { slug: 'search-optimization', title: 'Search Optimization', explanation: 'Indexing, relevance tuning, performance.', category: '17. Search Engines' },

    // MONITORING & LOGGING
    { slug: 'application-monitoring', title: 'Application Monitoring', explanation: 'Prometheus, Grafana, Datadog.', category: '18. Monitoring & Logging' },
    { slug: 'logging', title: 'Logging', explanation: 'Structured logging, log levels, best practices.', category: '18. Monitoring & Logging' },
    { slug: 'elk-stack', title: 'ELK Stack', explanation: 'Elasticsearch, Logstash, Kibana for logs.', category: '18. Monitoring & Logging' },
    { slug: 'distributed-tracing', title: 'Distributed Tracing', explanation: 'Jaeger, Zipkin for microservices.', category: '18. Monitoring & Logging' },
    { slug: 'apm', title: 'APM (Application Performance Monitoring)', explanation: 'New Relic, AppDynamics, Dynatrace.', category: '18. Monitoring & Logging' },
    { slug: 'error-tracking', title: 'Error Tracking', explanation: 'Sentry, Rollbar, Bugsnag.', category: '18. Monitoring & Logging' },
    { slug: 'health-checks', title: 'Health Checks', explanation: 'Liveness and readiness probes.', category: '18. Monitoring & Logging' },

    // SCALABILITY
    { slug: 'horizontal-scaling', title: 'Horizontal Scaling', explanation: 'Adding more servers/instances.', category: '19. Scalability' },
    { slug: 'vertical-scaling', title: 'Vertical Scaling', explanation: 'Increasing server resources.', category: '19. Scalability' },
    { slug: 'load-balancing', title: 'Load Balancing', explanation: 'Round-robin, least connections, IP hash.', category: '19. Scalability' },
    { slug: 'database-replication', title: 'Database Replication', explanation: 'Master-slave, master-master replication.', category: '19. Scalability' },
    { slug: 'database-sharding', title: 'Database Sharding', explanation: 'Horizontal data partitioning.', category: '19. Scalability' },
    { slug: 'caching-at-scale', title: 'Caching at Scale', explanation: 'Distributed caching strategies.', category: '19. Scalability' },
    { slug: 'async-processing', title: 'Asynchronous Processing', explanation: 'Background jobs, task queues.', category: '19. Scalability' },

    // CLOUD PLATFORMS
    { slug: 'aws', title: 'AWS (Amazon Web Services)', explanation: 'EC2, S3, RDS, Lambda, API Gateway.', category: '20. Cloud Platforms' },
    { slug: 'azure', title: 'Microsoft Azure', explanation: 'App Service, Azure Functions, Cosmos DB.', category: '20. Cloud Platforms' },
    { slug: 'gcp', title: 'Google Cloud Platform', explanation: 'Compute Engine, Cloud Functions, Cloud SQL.', category: '20. Cloud Platforms' },
    { slug: 'cloud-storage', title: 'Cloud Storage', explanation: 'Object storage, blob storage, file systems.', category: '20. Cloud Platforms' },
    { slug: 'cloud-databases', title: 'Cloud Databases', explanation: 'Managed database services.', category: '20. Cloud Platforms' },
    { slug: 'cloud-networking', title: 'Cloud Networking', explanation: 'VPC, subnets, security groups.', category: '20. Cloud Platforms' },

    // BEST PRACTICES
    { slug: 'clean-code', title: 'Clean Code', explanation: 'Readable, maintainable code principles.', category: '21. Best Practices' },
    { slug: 'solid-principles', title: 'SOLID Principles', explanation: 'Object-oriented design principles.', category: '21. Best Practices' },
    { slug: 'dry-principle', title: 'DRY (Don\'t Repeat Yourself)', explanation: 'Code reusability and abstraction.', category: '21. Best Practices' },
    { slug: 'kiss-principle', title: 'KISS (Keep It Simple, Stupid)', explanation: 'Simplicity in design.', category: '21. Best Practices' },
    { slug: 'yagni', title: 'YAGNI (You Aren\'t Gonna Need It)', explanation: 'Avoid unnecessary features.', category: '21. Best Practices' },
    { slug: 'code-reviews', title: 'Code Reviews', explanation: 'Best practices for peer reviews.', category: '21. Best Practices' },
    { slug: 'documentation', title: 'Documentation', explanation: 'API docs, code comments, README files.', category: '21. Best Practices' },
    { slug: 'error-handling', title: 'Error Handling', explanation: 'Exception handling, error codes, logging.', category: '21. Best Practices' },
    { slug: 'performance-optimization', title: 'Performance Optimization', explanation: 'Profiling, bottleneck identification, optimization.', category: '21. Best Practices' },
  ]
};
