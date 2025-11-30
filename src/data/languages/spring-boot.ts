
import type { Language } from './types';

export const springBoot: Language = {
  slug: 'spring-boot',
  name: 'Spring Boot',
  topics: [
      // LEARNING PLAN
      { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Spring Boot.' },
      
      // 1. INTRODUCTION & SETUP
      { slug: 'what-is-spring-boot', title: 'What is Spring Boot?', explanation: 'Understanding Spring Boot and its advantages over traditional Spring.', category: '1. Introduction & Setup' },
      { slug: 'spring-vs-springboot', title: 'Spring vs Spring Boot', explanation: 'Key differences between Spring Framework and Spring Boot.', category: '1. Introduction & Setup' },
      { slug: 'spring-boot-architecture', title: 'Spring Boot Architecture', explanation: 'Understanding the layered architecture of Spring Boot applications.', category: '1. Introduction & Setup' },
      { slug: 'spring-initializr', title: 'Spring Initializr', explanation: 'Using start.spring.io to generate Spring Boot projects.', category: '1. Introduction & Setup' },
      { slug: 'project-structure', title: 'Project Structure', explanation: 'Understanding Spring Boot project layout and organization.', category: '1. Introduction & Setup' },
      { slug: 'main-application-class', title: '@SpringBootApplication', explanation: 'The main application class and @SpringBootApplication annotation.', category: '1. Introduction & Setup' },
      
      // 2. CORE CONCEPTS
      { slug: 'auto-configuration', title: 'Auto-Configuration', explanation: 'How Spring Boot automatically configures your application.', category: '2. Core Concepts' },
      { slug: 'spring-boot-starters', title: 'Spring Boot Starters', explanation: 'Pre-configured dependency bundles for common use cases.', category: '2. Core Concepts' },
      { slug: 'component-scanning', title: 'Component Scanning', explanation: 'Automatic detection of components, services, and repositories.', category: '2. Core Concepts' },
      { slug: 'dependency-injection', title: 'Dependency Injection', explanation: 'Using @Autowired, @Inject, and constructor injection.', category: '2. Core Concepts' },
      { slug: 'bean-lifecycle', title: 'Bean Lifecycle', explanation: '@PostConstruct, @PreDestroy, and bean initialization.', category: '2. Core Concepts' },
      { slug: 'spring-boot-annotations', title: 'Common Annotations', explanation: '@Component, @Service, @Repository, @Controller annotations.', category: '2. Core Concepts' },
      
      // 3. CONFIGURATION
      { slug: 'application-properties', title: 'Application Properties', explanation: 'Configuring application using application.properties file.', category: '3. Configuration' },
      { slug: 'application-yml', title: 'Application YAML', explanation: 'Using YAML format for configuration (application.yml).', category: '3. Configuration' },
      { slug: 'configuration-properties', title: '@ConfigurationProperties', explanation: 'Type-safe configuration properties binding.', category: '3. Configuration' },
      { slug: 'value-annotation', title: '@Value Annotation', explanation: 'Injecting property values into beans.', category: '3. Configuration' },
      { slug: 'profiles', title: 'Profiles', explanation: 'Managing environment-specific configurations (dev, test, prod).', category: '3. Configuration' },
      { slug: 'profile-specific-properties', title: 'Profile-Specific Properties', explanation: 'application-dev.properties, application-prod.properties.', category: '3. Configuration' },
      { slug: 'externalized-configuration', title: 'Externalized Configuration', explanation: 'Loading configuration from external sources.', category: '3. Configuration' },
      { slug: 'environment-abstraction', title: 'Environment Abstraction', explanation: 'Accessing configuration through Environment interface.', category: '3. Configuration' },
      
      // 4. WEB DEVELOPMENT
      { slug: 'spring-boot-web-starter', title: 'Spring Web Starter', explanation: 'spring-boot-starter-web for building web applications.', category: '4. Web Development' },
      { slug: 'rest-controller', title: '@RestController', explanation: 'Building RESTful web services with @RestController.', category: '4. Web Development' },
      { slug: 'request-mapping', title: 'Request Mapping', explanation: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping.', category: '4. Web Development' },
      { slug: 'path-variables', title: 'Path Variables', explanation: 'Extracting values from URI with @PathVariable.', category: '4. Web Development' },
      { slug: 'request-params', title: 'Request Parameters', explanation: 'Handling query parameters with @RequestParam.', category: '4. Web Development' },
      { slug: 'request-body', title: 'Request Body', explanation: 'Processing JSON/XML with @RequestBody.', category: '4. Web Development' },
      { slug: 'response-entity', title: 'ResponseEntity', explanation: 'Customizing HTTP responses with ResponseEntity.', category: '4. Web Development' },
      { slug: 'exception-handling', title: 'Exception Handling', explanation: '@ControllerAdvice and @ExceptionHandler for global error handling.', category: '4. Web Development' },
      { slug: 'cors-configuration', title: 'CORS Configuration', explanation: 'Configuring Cross-Origin Resource Sharing.', category: '4. Web Development' },
      { slug: 'content-negotiation', title: 'Content Negotiation', explanation: 'Supporting multiple content types (JSON, XML).', category: '4. Web Development' },
      
      // 5. DATA ACCESS
      { slug: 'spring-data-jpa', title: 'Spring Data JPA', explanation: 'spring-boot-starter-data-jpa for database access.', category: '5. Data Access' },
      { slug: 'entity-mapping', title: 'Entity Mapping', explanation: '@Entity, @Table, @Column annotations for JPA entities.', category: '5. Data Access' },
      { slug: 'jpa-repositories', title: 'JPA Repositories', explanation: 'Creating repositories with JpaRepository interface.', category: '5. Data Access' },
      { slug: 'query-methods', title: 'Query Methods', explanation: 'Defining queries using method names.', category: '5. Data Access' },
      { slug: 'custom-queries', title: '@Query Annotation', explanation: 'Writing custom JPQL and native queries.', category: '5. Data Access' },
      { slug: 'pagination-sorting', title: 'Pagination & Sorting', explanation: 'Using Pageable and Sort for efficient data retrieval.', category: '5. Data Access' },
      { slug: 'transaction-management', title: '@Transactional', explanation: 'Managing database transactions declaratively.', category: '5. Data Access' },
      { slug: 'database-initialization', title: 'Database Initialization', explanation: 'schema.sql and data.sql for initializing databases.', category: '5. Data Access' },
      { slug: 'liquibase', title: 'Liquibase Integration', explanation: 'Database migration and version control with Liquibase.', category: '5. Data Access' },
      { slug: 'flyway', title: 'Flyway Integration', explanation: 'Database migration using Flyway.', category: '5. Data Access' },
      
      // 6. SECURITY
      { slug: 'spring-security-starter', title: 'Spring Security Starter', explanation: 'spring-boot-starter-security for securing applications.', category: '6. Security' },
      { slug: 'basic-authentication', title: 'Basic Authentication', explanation: 'HTTP Basic authentication configuration.', category: '6. Security' },
      { slug: 'form-login', title: 'Form-Based Login', explanation: 'Custom login pages and form authentication.', category: '6. Security' },
      { slug: 'jwt-authentication', title: 'JWT Authentication', explanation: 'JSON Web Token-based authentication.', category: '6. Security' },
      { slug: 'oauth2-integration', title: 'OAuth2 Integration', explanation: 'OAuth2 login with Google, GitHub, etc.', category: '6. Security' },
      { slug: 'method-security', title: 'Method Security', explanation: '@PreAuthorize, @PostAuthorize, @Secured annotations.', category: '6. Security' },
      { slug: 'password-encoding', title: 'Password Encoding', explanation: 'BCryptPasswordEncoder and password management.', category: '6. Security' },
      { slug: 'csrf-protection', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery protection.', category: '6. Security' },
      
      // 7. VALIDATION
      { slug: 'bean-validation', title: 'Bean Validation', explanation: 'Using @Valid and @Validated for input validation.', category: '7. Validation' },
      { slug: 'validation-annotations', title: 'Validation Annotations', explanation: '@NotNull, @NotEmpty, @Size, @Email, @Pattern.', category: '7. Validation' },
      { slug: 'custom-validators', title: 'Custom Validators', explanation: 'Creating custom validation annotations.', category: '7. Validation' },
      { slug: 'validation-groups', title: 'Validation Groups', explanation: 'Conditional validation using groups.', category: '7. Validation' },
      
      // 8. TESTING
      { slug: 'spring-boot-test', title: '@SpringBootTest', explanation: 'Integration testing with full application context.', category: '8. Testing' },
      { slug: 'web-mvc-test', title: '@WebMvcTest', explanation: 'Testing REST controllers with MockMvc.', category: '8. Testing' },
      { slug: 'data-jpa-test', title: '@DataJpaTest', explanation: 'Testing JPA repositories in isolation.', category: '8. Testing' },
      { slug: 'mock-bean', title: '@MockBean', explanation: 'Mocking dependencies in Spring Boot tests.', category: '8. Testing' },
      { slug: 'test-properties', title: 'Test Configuration', explanation: 'Using @TestPropertySource and test properties.', category: '8. Testing' },
      { slug: 'testcontainers', title: 'Testcontainers', explanation: 'Integration testing with Docker containers.', category: '8. Testing' },
      
      // 9. ACTUATOR & MONITORING
      { slug: 'spring-boot-actuator', title: 'Spring Boot Actuator', explanation: 'Production-ready monitoring and management features.', category: '9. Actuator & Monitoring' },
      { slug: 'actuator-endpoints', title: 'Actuator Endpoints', explanation: '/health, /metrics, /info, /env endpoints.', category: '9. Actuator & Monitoring' },
      { slug: 'custom-endpoints', title: 'Custom Endpoints', explanation: 'Creating custom actuator endpoints.', category: '9. Actuator & Monitoring' },
      { slug: 'health-indicators', title: 'Health Indicators', explanation: 'Custom health checks for application components.', category: '9. Actuator & Monitoring' },
      { slug: 'metrics-monitoring', title: 'Metrics Monitoring', explanation: 'Application metrics with Micrometer.', category: '9. Actuator & Monitoring' },
      { slug: 'prometheus-integration', title: 'Prometheus Integration', explanation: 'Exposing metrics for Prometheus monitoring.', category: '9. Actuator & Monitoring' },
      { slug: 'distributed-tracing', title: 'Distributed Tracing', explanation: 'Tracing with Micrometer Tracing (Zipkin, Jaeger).', category: '9. Actuator & Monitoring' },
      
      // 10. CACHING
      { slug: 'spring-cache-abstraction', title: 'Cache Abstraction', explanation: 'Spring Cache abstraction with @Cacheable.', category: '10. Caching' },
      { slug: 'cache-annotations', title: 'Cache Annotations', explanation: '@Cacheable, @CachePut, @CacheEvict, @Caching.', category: '10. Caching' },
      { slug: 'caffeine-cache', title: 'Caffeine Cache', explanation: 'In-memory caching with Caffeine.', category: '10. Caching' },
      { slug: 'redis-cache', title: 'Redis Cache', explanation: 'Distributed caching with Redis.', category: '10. Caching' },
      
      // 11. MESSAGING
      { slug: 'spring-kafka', title: 'Spring Kafka', explanation: 'Apache Kafka integration for messaging.', category: '11. Messaging' },
      { slug: 'spring-amqp', title: 'Spring AMQP', explanation: 'RabbitMQ integration with Spring AMQP.', category: '11. Messaging' },
      { slug: 'jms-messaging', title: 'JMS Messaging', explanation: 'Java Message Service with ActiveMQ.', category: '11. Messaging' },
      
      // 12. SCHEDULING
      { slug: 'task-scheduling', title: 'Task Scheduling', explanation: '@Scheduled for periodic task execution.', category: '12. Scheduling' },
      { slug: 'cron-expressions', title: 'Cron Expressions', explanation: 'Cron syntax for scheduling tasks.', category: '12. Scheduling' },
      { slug: 'async-execution', title: '@Async Execution', explanation: 'Asynchronous method execution.', category: '12. Scheduling' },
      
      // 13. REACTIVE PROGRAMMING
      { slug: 'spring-webflux', title: 'Spring WebFlux', explanation: 'Reactive web applications with WebFlux.', category: '13. Reactive Programming' },
      { slug: 'reactor-core', title: 'Reactor Core', explanation: 'Mono and Flux for reactive streams.', category: '13. Reactive Programming' },
      { slug: 'reactive-repositories', title: 'Reactive Repositories', explanation: 'ReactiveMongoRepository, ReactiveCrudRepository.', category: '13. Reactive Programming' },
      { slug: 'r2dbc', title: 'R2DBC', explanation: 'Reactive relational database connectivity.', category: '13. Reactive Programming' },
      
      // 14. DOCUMENTATION
      { slug: 'springdoc-openapi', title: 'SpringDoc OpenAPI', explanation: 'API documentation with OpenAPI 3 (Swagger).', category: '14. Documentation' },
      { slug: 'swagger-ui', title: 'Swagger UI', explanation: 'Interactive API documentation interface.', category: '14. Documentation' },
      { slug: 'api-versioning', title: 'API Versioning', explanation: 'Versioning REST APIs.', category: '14. Documentation' },
      
      // 15. LOGGING
      { slug: 'logging-configuration', title: 'Logging Configuration', explanation: 'Configuring Logback, Log4j2 logging.', category: '15. Logging' },
      { slug: 'slf4j', title: 'SLF4J', explanation: 'Simple Logging Facade for Java.', category: '15. Logging' },
      { slug: 'log-levels', title: 'Log Levels', explanation: 'TRACE, DEBUG, INFO, WARN, ERROR levels.', category: '15. Logging' },
      { slug: 'logging-best-practices', title: 'Logging Best Practices', explanation: 'Structured logging and best practices.', category: '15. Logging' },
      
      // 16. PERFORMANCE
      { slug: 'connection-pooling', title: 'Connection Pooling', explanation: 'HikariCP for database connection pooling.', category: '16. Performance' },
      { slug: 'lazy-initialization', title: 'Lazy Initialization', explanation: 'Improving startup time with lazy bean initialization.', category: '16. Performance' },
      { slug: 'devtools', title: 'Spring Boot DevTools', explanation: 'Auto-restart and live reload for development.', category: '16. Performance' },
      { slug: 'native-image', title: 'Native Image', explanation: 'Building native executables with GraalVM.', category: '16. Performance' },
      
      // 17. DEPLOYMENT
      { slug: 'executable-jar', title: 'Executable JAR', explanation: 'Creating standalone executable JAR files.', category: '17. Deployment' },
      { slug: 'embedded-servers', title: 'Embedded Servers', explanation: 'Tomcat, Jetty, Undertow embedded servers.', category: '17. Deployment' },
      { slug: 'war-deployment', title: 'WAR Deployment', explanation: 'Deploying as WAR to external servers.', category: '17. Deployment' },
      { slug: 'docker-containerization', title: 'Docker Containerization', explanation: 'Creating Docker images for Spring Boot apps.', category: '17. Deployment' },
      { slug: 'kubernetes-deployment', title: 'Kubernetes Deployment', explanation: 'Deploying to Kubernetes clusters.', category: '17. Deployment' },
      { slug: 'cloud-deployment', title: 'Cloud Deployment', explanation: 'Deploying to AWS, Azure, GCP.', category: '17. Deployment' },
      
      // 18. SPRING BOOT 3.x FEATURES
      { slug: 'java-17-baseline', title: 'Java 17 Baseline', explanation: 'Spring Boot 3 requires Java 17 minimum.', category: '18. Spring Boot 3.x' },
      { slug: 'jakarta-ee', title: 'Jakarta EE Migration', explanation: 'javax.* to jakarta.* package migration.', category: '18. Spring Boot 3.x' },
      { slug: 'native-hints', title: 'Native Hints', explanation: 'Runtime hints for GraalVM native compilation.', category: '18. Spring Boot 3.x' },
      { slug: 'observability', title: 'Observability', explanation: 'Enhanced observability with Micrometer.', category: '18. Spring Boot 3.x' },
      { slug: 'http-interfaces', title: 'HTTP Interface Clients', explanation: 'Declarative HTTP clients.', category: '18. Spring Boot 3.x' },
      { slug: 'problem-details', title: 'Problem Details (RFC 7807)', explanation: 'Standardized error responses.', category: '18. Spring Boot 3.x' },
      
      // 19. BEST PRACTICES
      { slug: 'project-organization', title: 'Project Organization', explanation: 'Package structure and layer separation.', category: '19. Best Practices' },
      { slug: 'dto-pattern', title: 'DTO Pattern', explanation: 'Data Transfer Objects for API design.', category: '19. Best Practices' },
      { slug: 'service-layer', title: 'Service Layer', explanation: 'Business logic organization in service layer.', category: '19. Best Practices' },
      { slug: 'exception-handling-strategy', title: 'Exception Handling', explanation: 'Global exception handling strategies.', category: '19. Best Practices' },
      { slug: 'configuration-management', title: 'Configuration Management', explanation: 'Managing application configuration effectively.', category: '19. Best Practices' },
      { slug: 'security-best-practices', title: 'Security Best Practices', explanation: 'Securing Spring Boot applications.', category: '19. Best Practices' },
      { slug: 'performance-tuning', title: 'Performance Tuning', explanation: 'Optimizing Spring Boot application performance.', category: '19. Best Practices' },
  ]
};
