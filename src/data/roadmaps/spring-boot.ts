
import type { Roadmap } from './types';

export const springBoot: Roadmap = {
  slug: 'spring-boot',
  name: 'Spring Boot',
  topics: [
      // LEARNING PLAN
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Spring Boot.' },
      
      // 1. INTRODUCTION & SETUP
      { slug: 'what-is-spring-boot', title: 'What is Spring Boot?', explanation: 'Understanding Spring Boot and its advantages over traditional Spring.', category: 'Introduction & Setup' },
      { slug: 'spring-vs-springboot', title: 'Spring vs Spring Boot', explanation: 'Key differences between Spring Framework and Spring Boot.', category: 'Introduction & Setup' },
      { slug: 'spring-boot-architecture', title: 'Spring Boot Architecture', explanation: 'Understanding the layered architecture of Spring Boot applications.', category: 'Introduction & Setup' },
      { slug: 'spring-initializr', title: 'Spring Initializr', explanation: 'Using start.spring.io to generate Spring Boot projects.', category: 'Introduction & Setup' },
      { slug: 'project-structure', title: 'Project Structure', explanation: 'Understanding Spring Boot project layout and organization.', category: 'Introduction & Setup' },
      { slug: 'main-application-class', title: '@SpringBootApplication', explanation: 'The main application class and @SpringBootApplication annotation.', category: 'Introduction & Setup' },
      
      // 2. CORE CONCEPTS
      { slug: 'auto-configuration', title: 'Auto-Configuration', explanation: 'How Spring Boot automatically configures your application.', category: 'Core Concepts' },
      { slug: 'spring-boot-starters', title: 'Spring Boot Starters', explanation: 'Pre-configured dependency bundles for common use cases.', category: 'Core Concepts' },
      { slug: 'component-scanning', title: 'Component Scanning', explanation: 'Automatic detection of components, services, and repositories.', category: 'Core Concepts' },
      { slug: 'dependency-injection', title: 'Dependency Injection', explanation: 'Using @Autowired, @Inject, and constructor injection.', category: 'Core Concepts' },
      { slug: 'bean-lifecycle', title: 'Bean Lifecycle', explanation: '@PostConstruct, @PreDestroy, and bean initialization.', category: 'Core Concepts' },
      { slug: 'spring-boot-annotations', title: 'Common Annotations', explanation: '@Component, @Service, @Repository, @Controller annotations.', category: 'Core Concepts' },
      
      // 3. CONFIGURATION
      { slug: 'application-properties', title: 'Application Properties', explanation: 'Configuring application using application.properties file.', category: 'Configuration' },
      { slug: 'application-yml', title: 'Application YAML', explanation: 'Using YAML format for configuration (application.yml).', category: 'Configuration' },
      { slug: 'configuration-properties', title: '@ConfigurationProperties', explanation: 'Type-safe configuration properties binding.', category: 'Configuration' },
      { slug: 'value-annotation', title: '@Value Annotation', explanation: 'Injecting property values into beans.', category: 'Configuration' },
      { slug: 'profiles', title: 'Profiles', explanation: 'Managing environment-specific configurations (dev, test, prod).', category: 'Configuration' },
      { slug: 'profile-specific-properties', title: 'Profile-Specific Properties', explanation: 'application-dev.properties, application-prod.properties.', category: 'Configuration' },
      { slug: 'externalized-configuration', title: 'Externalized Configuration', explanation: 'Loading configuration from external sources.', category: 'Configuration' },
      { slug: 'environment-abstraction', title: 'Environment Abstraction', explanation: 'Accessing configuration through Environment interface.', category: 'Configuration' },
      
      // 4. WEB DEVELOPMENT
      { slug: 'spring-boot-web-starter', title: 'Spring Web Starter', explanation: 'spring-boot-starter-web for building web applications.', category: 'Web Development' },
      { slug: 'rest-controller', title: '@RestController', explanation: 'Building RESTful web services with @RestController.', category: 'Web Development' },
      { slug: 'request-mapping', title: 'Request Mapping', explanation: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping.', category: 'Web Development' },
      { slug: 'path-variables', title: 'Path Variables', explanation: 'Extracting values from URI with @PathVariable.', category: 'Web Development' },
      { slug: 'request-params', title: 'Request Parameters', explanation: 'Handling query parameters with @RequestParam.', category: 'Web Development' },
      { slug: 'request-body', title: 'Request Body', explanation: 'Processing JSON/XML with @RequestBody.', category: 'Web Development' },
      { slug: 'response-entity', title: 'ResponseEntity', explanation: 'Customizing HTTP responses with ResponseEntity.', category: 'Web Development' },
      { slug: 'exception-handling', title: 'Exception Handling', explanation: '@ControllerAdvice and @ExceptionHandler for global error handling.', category: 'Web Development' },
      { slug: 'cors-configuration', title: 'CORS Configuration', explanation: 'Configuring Cross-Origin Resource Sharing.', category: 'Web Development' },
      { slug: 'content-negotiation', title: 'Content Negotiation', explanation: 'Supporting multiple content types (JSON, XML).', category: 'Web Development' },
      
      // 5. DATA ACCESS
      { slug: 'spring-data-jpa', title: 'Spring Data JPA', explanation: 'spring-boot-starter-data-jpa for database access.', category: 'Data Access' },
      { slug: 'entity-mapping', title: 'Entity Mapping', explanation: '@Entity, @Table, @Column annotations for JPA entities.', category: 'Data Access' },
      { slug: 'jpa-repositories', title: 'JPA Repositories', explanation: 'Creating repositories with JpaRepository interface.', category: 'Data Access' },
      { slug: 'query-methods', title: 'Query Methods', explanation: 'Defining queries using method names.', category: 'Data Access' },
      { slug: 'custom-queries', title: '@Query Annotation', explanation: 'Writing custom JPQL and native queries.', category: 'Data Access' },
      { slug: 'pagination-sorting', title: 'Pagination & Sorting', explanation: 'Using Pageable and Sort for efficient data retrieval.', category: 'Data Access' },
      { slug: 'transaction-management', title: '@Transactional', explanation: 'Managing database transactions declaratively.', category: 'Data Access' },
      { slug: 'database-initialization', title: 'Database Initialization', explanation: 'schema.sql and data.sql for initializing databases.', category: 'Data Access' },
      { slug: 'liquibase', title: 'Liquibase Integration', explanation: 'Database migration and version control with Liquibase.', category: 'Data Access' },
      { slug: 'flyway', title: 'Flyway Integration', explanation: 'Database migration using Flyway.', category: 'Data Access' },
      
      // 6. SECURITY
      { slug: 'spring-security-starter', title: 'Spring Security Starter', explanation: 'spring-boot-starter-security for securing applications.', category: 'Security' },
      { slug: 'basic-authentication', title: 'Basic Authentication', explanation: 'HTTP Basic authentication configuration.', category: 'Security' },
      { slug: 'form-login', title: 'Form-Based Login', explanation: 'Custom login pages and form authentication.', category: 'Security' },
      { slug: 'jwt-authentication', title: 'JWT Authentication', explanation: 'JSON Web Token-based authentication.', category: 'Security' },
      { slug: 'oauth2-integration', title: 'OAuth2 Integration', explanation: 'OAuth2 login with Google, GitHub, etc.', category: 'Security' },
      { slug: 'method-security', title: 'Method Security', explanation: '@PreAuthorize, @PostAuthorize, @Secured annotations.', category: 'Security' },
      { slug: 'password-encoding', title: 'Password Encoding', explanation: 'BCryptPasswordEncoder and password management.', category: 'Security' },
      { slug: 'csrf-protection', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery protection.', category: 'Security' },
      
      // 7. VALIDATION
      { slug: 'bean-validation', title: 'Bean Validation', explanation: 'Using @Valid and @Validated for input validation.', category: 'Validation' },
      { slug: 'validation-annotations', title: 'Validation Annotations', explanation: '@NotNull, @NotEmpty, @Size, @Email, @Pattern.', category: 'Validation' },
      { slug: 'custom-validators', title: 'Custom Validators', explanation: 'Creating custom validation annotations.', category: 'Validation' },
      { slug: 'validation-groups', title: 'Validation Groups', explanation: 'Conditional validation using groups.', category: 'Validation' },
      
      // 8. TESTING
      { slug: 'spring-boot-test', title: '@SpringBootTest', explanation: 'Integration testing with full application context.', category: 'Testing' },
      { slug: 'web-mvc-test', title: '@WebMvcTest', explanation: 'Testing REST controllers with MockMvc.', category: 'Testing' },
      { slug: 'data-jpa-test', title: '@DataJpaTest', explanation: 'Testing JPA repositories in isolation.', category: 'Testing' },
      { slug: 'mock-bean', title: '@MockBean', explanation: 'Mocking dependencies in Spring Boot tests.', category: 'Testing' },
      { slug: 'test-properties', title: 'Test Configuration', explanation: 'Using @TestPropertySource and test properties.', category: 'Testing' },
      { slug: 'testcontainers', title: 'Testcontainers', explanation: 'Integration testing with Docker containers.', category: 'Testing' },
      
      // 9. ACTUATOR & MONITORING
      { slug: 'spring-boot-actuator', title: 'Spring Boot Actuator', explanation: 'Production-ready monitoring and management features.', category: 'Actuator & Monitoring' },
      { slug: 'actuator-endpoints', title: 'Actuator Endpoints', explanation: '/health, /metrics, /info, /env endpoints.', category: 'Actuator & Monitoring' },
      { slug: 'custom-endpoints', title: 'Custom Endpoints', explanation: 'Creating custom actuator endpoints.', category: 'Actuator & Monitoring' },
      { slug: 'health-indicators', title: 'Health Indicators', explanation: 'Custom health checks for application components.', category: 'Actuator & Monitoring' },
      { slug: 'metrics-monitoring', title: 'Metrics Monitoring', explanation: 'Application metrics with Micrometer.', category: 'Actuator & Monitoring' },
      { slug: 'prometheus-integration', title: 'Prometheus Integration', explanation: 'Exposing metrics for Prometheus monitoring.', category: 'Actuator & Monitoring' },
      { slug: 'distributed-tracing', title: 'Distributed Tracing', explanation: 'Tracing with Micrometer Tracing (Zipkin, Jaeger).', category: 'Actuator & Monitoring' },
      
      // 10. CACHING
      { slug: 'spring-cache-abstraction', title: 'Cache Abstraction', explanation: 'Spring Cache abstraction with @Cacheable.', category: 'Caching' },
      { slug: 'cache-annotations', title: 'Cache Annotations', explanation: '@Cacheable, @CachePut, @CacheEvict, @Caching.', category: 'Caching' },
      { slug: 'caffeine-cache', title: 'Caffeine Cache', explanation: 'In-memory caching with Caffeine.', category: 'Caching' },
      { slug: 'redis-cache', title: 'Redis Cache', explanation: 'Distributed caching with Redis.', category: 'Caching' },
      
      // 11. MESSAGING
      { slug: 'spring-kafka', title: 'Spring Kafka', explanation: 'Apache Kafka integration for messaging.', category: 'Messaging' },
      { slug: 'spring-amqp', title: 'Spring AMQP', explanation: 'RabbitMQ integration with Spring AMQP.', category: 'Messaging' },
      { slug: 'jms-messaging', title: 'JMS Messaging', explanation: 'Java Message Service with ActiveMQ.', category: 'Messaging' },
      
      // 12. SCHEDULING
      { slug: 'task-scheduling', title: 'Task Scheduling', explanation: '@Scheduled for periodic task execution.', category: 'Scheduling' },
      { slug: 'cron-expressions', title: 'Cron Expressions', explanation: 'Cron syntax for scheduling tasks.', category: 'Scheduling' },
      { slug: 'async-execution', title: '@Async Execution', explanation: 'Asynchronous method execution.', category: 'Scheduling' },
      
      // 13. REACTIVE PROGRAMMING
      { slug: 'spring-webflux', title: 'Spring WebFlux', explanation: 'Reactive web applications with WebFlux.', category: 'Reactive Programming' },
      { slug: 'reactor-core', title: 'Reactor Core', explanation: 'Mono and Flux for reactive streams.', category: 'Reactive Programming' },
      { slug: 'reactive-repositories', title: 'Reactive Repositories', explanation: 'ReactiveMongoRepository, ReactiveCrudRepository.', category: 'Reactive Programming' },
      { slug: 'r2dbc', title: 'R2DBC', explanation: 'Reactive relational database connectivity.', category: 'Reactive Programming' },
      
      // 14. DOCUMENTATION
      { slug: 'springdoc-openapi', title: 'SpringDoc OpenAPI', explanation: 'API documentation with OpenAPI 3 (Swagger).', category: 'Documentation' },
      { slug: 'swagger-ui', title: 'Swagger UI', explanation: 'Interactive API documentation interface.', category: 'Documentation' },
      { slug: 'api-versioning', title: 'API Versioning', explanation: 'Versioning REST APIs.', category: 'Documentation' },
      
      // 15. LOGGING
      { slug: 'logging-configuration', title: 'Logging Configuration', explanation: 'Configuring Logback, Log4j2 logging.', category: 'Logging' },
      { slug: 'slf4j', title: 'SLF4J', explanation: 'Simple Logging Facade for Java.', category: 'Logging' },
      { slug: 'log-levels', title: 'Log Levels', explanation: 'TRACE, DEBUG, INFO, WARN, ERROR levels.', category: 'Logging' },
      { slug: 'logging-best-practices', title: 'Logging Best Practices', explanation: 'Structured logging and best practices.', category: 'Logging' },
      
      // 16. PERFORMANCE
      { slug: 'connection-pooling', title: 'Connection Pooling', explanation: 'HikariCP for database connection pooling.', category: 'Performance' },
      { slug: 'lazy-initialization', title: 'Lazy Initialization', explanation: 'Improving startup time with lazy bean initialization.', category: 'Performance' },
      { slug: 'devtools', title: 'Spring Boot DevTools', explanation: 'Auto-restart and live reload for development.', category: 'Performance' },
      { slug: 'native-image', title: 'Native Image', explanation: 'Building native executables with GraalVM.', category: 'Performance' },
      
      // 17. DEPLOYMENT
      { slug: 'executable-jar', title: 'Executable JAR', explanation: 'Creating standalone executable JAR files.', category: 'Deployment' },
      { slug: 'embedded-servers', title: 'Embedded Servers', explanation: 'Tomcat, Jetty, Undertow embedded servers.', category: 'Deployment' },
      { slug: 'war-deployment', title: 'WAR Deployment', explanation: 'Deploying as WAR to external servers.', category: 'Deployment' },
      { slug: 'docker-containerization', title: 'Docker Containerization', explanation: 'Creating Docker images for Spring Boot apps.', category: 'Deployment' },
      { slug: 'kubernetes-deployment', title: 'Kubernetes Deployment', explanation: 'Deploying to Kubernetes clusters.', category: 'Deployment' },
      { slug: 'cloud-deployment', title: 'Cloud Deployment', explanation: 'Deploying to AWS, Azure, GCP.', category: 'Deployment' },
      
      // 18. SPRING BOOT 3.x FEATURES
      { slug: 'java-17-baseline', title: 'Java 17 Baseline', explanation: 'Spring Boot 3 requires Java 17 minimum.', category: 'Spring Boot 3.x' },
      { slug: 'jakarta-ee', title: 'Jakarta EE Migration', explanation: 'javax.* to jakarta.* package migration.', category: 'Spring Boot 3.x' },
      { slug: 'native-hints', title: 'Native Hints', explanation: 'Runtime hints for GraalVM native compilation.', category: 'Spring Boot 3.x' },
      { slug: 'observability', title: 'Observability', explanation: 'Enhanced observability with Micrometer.', category: 'Spring Boot 3.x' },
      { slug: 'http-interfaces', title: 'HTTP Interface Clients', explanation: 'Declarative HTTP clients.', category: 'Spring Boot 3.x' },
      { slug: 'problem-details', title: 'Problem Details (RFC 7807)', explanation: 'Standardized error responses.', category: 'Spring Boot 3.x' },
      
      // 19. BEST PRACTICES
      { slug: 'project-organization', title: 'Project Organization', explanation: 'Package structure and layer separation.', category: 'Best Practices' },
      { slug: 'dto-pattern', title: 'DTO Pattern', explanation: 'Data Transfer Objects for API design.', category: 'Best Practices' },
      { slug: 'service-layer', title: 'Service Layer', explanation: 'Business logic organization in service layer.', category: 'Best Practices' },
      { slug: 'exception-handling-strategy', title: 'Exception Handling', explanation: 'Global exception handling strategies.', category: 'Best Practices' },
      { slug: 'configuration-management', title: 'Configuration Management', explanation: 'Managing application configuration effectively.', category: 'Best Practices' },
      { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'Securing Spring Boot applications.', category: 'Best Practices' },
      { slug: 'performance-tuning', title: 'Performance Tuning', explanation: 'Optimizing Spring Boot application performance.', category: 'Best Practices' },
  ]
};
