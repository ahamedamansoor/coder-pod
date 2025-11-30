
import type { Language } from './types';

export const spring: Language = {
  slug: 'spring',
  name: 'Spring Framework',
    topics: [
    // LEARNING PLAN
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'A structured roadmap for learning the Spring Framework from scratch.',
    },
    
    // 1. INTRODUCTION
    { slug: 'what-is-spring', title: 'What is Spring Framework?', explanation: 'Introduction to Spring Framework, its philosophy, and ecosystem.', category: '1. Introduction' },
    { slug: 'spring-history', title: 'History of Spring', explanation: 'Evolution from Spring 1.0 to Spring 6.x.', category: '1. Introduction' },
    { slug: 'spring-architecture', title: 'Spring Architecture', explanation: 'Core modules and their relationships.', category: '1. Introduction' },
    { slug: 'spring-setup', title: 'Setting Up Spring', explanation: 'Installing and configuring Spring Framework projects.', category: '1. Introduction' },
    
    // 2. CORE CONTAINER
    { slug: 'ioc-container', title: 'IoC Container', explanation: 'Understanding Inversion of Control and the Spring container.', category: '2. Core Container' },
    { slug: 'applicationcontext', title: 'ApplicationContext', explanation: 'The central interface for Spring IoC container.', category: '2. Core Container' },
    { slug: 'bean-definition', title: 'Bean Definition', explanation: 'Defining beans using XML, annotations, and Java config.', category: '2. Core Container' },
    { slug: 'bean-lifecycle', title: 'Bean Lifecycle', explanation: 'Initialization, use, and destruction of beans.', category: '2. Core Container' },
    { slug: 'bean-scopes', title: 'Bean Scopes', explanation: 'Singleton, prototype, request, session, and custom scopes.', category: '2. Core Container' },
    { slug: 'lazy-initialization', title: 'Lazy Initialization', explanation: 'Delaying bean creation until needed.', category: '2. Core Container' },
    
    // 3. DEPENDENCY INJECTION
    { slug: 'dependency-injection-intro', title: 'Dependency Injection Intro', explanation: 'Understanding DI and its benefits.', category: '3. Dependency Injection' },
    { slug: 'constructor-injection', title: 'Constructor Injection', explanation: 'Injecting dependencies through constructors (recommended).', category: '3. Dependency Injection' },
    { slug: 'setter-injection', title: 'Setter Injection', explanation: 'Injecting dependencies through setter methods.', category: '3. Dependency Injection' },
    { slug: 'field-injection', title: 'Field Injection', explanation: 'Direct field injection with @Autowired (not recommended).', category: '3. Dependency Injection' },
    { slug: 'autowired-annotation', title: '@Autowired', explanation: 'Automatic dependency resolution.', category: '3. Dependency Injection' },
    { slug: 'qualifier-annotation', title: '@Qualifier', explanation: 'Resolving ambiguity when multiple beans match.', category: '3. Dependency Injection' },
    { slug: 'primary-annotation', title: '@Primary', explanation: 'Marking a bean as the default choice.', category: '3. Dependency Injection' },
    { slug: 'required-annotation', title: '@Required', explanation: 'Marking dependencies as mandatory.', category: '3. Dependency Injection' },
    { slug: 'inject-collections', title: 'Injecting Collections', explanation: 'Injecting Lists, Sets, and Maps of beans.', category: '3. Dependency Injection' },
    
    // 4. CONFIGURATION
    { slug: 'xml-configuration', title: 'XML Configuration', explanation: 'Traditional XML-based bean configuration.', category: '4. Configuration' },
    { slug: 'annotation-configuration', title: 'Annotation Configuration', explanation: 'Using @Component, @Service, @Repository, @Controller.', category: '4. Configuration' },
    { slug: 'java-configuration', title: 'Java Configuration', explanation: 'Modern @Configuration and @Bean approach.', category: '4. Configuration' },
    { slug: 'component-scanning', title: 'Component Scanning', explanation: 'Automatic detection of beans with @ComponentScan.', category: '4. Configuration' },
    { slug: 'profile-annotation', title: '@Profile', explanation: 'Environment-specific bean configuration.', category: '4. Configuration' },
    { slug: 'property-sources', title: 'Property Sources', explanation: 'Externalizing configuration with @PropertySource.', category: '4. Configuration' },
    { slug: 'value-annotation', title: '@Value', explanation: 'Injecting property values into beans.', category: '4. Configuration' },
    { slug: 'environment-abstraction', title: 'Environment Abstraction', explanation: 'Accessing properties and profiles programmatically.', category: '4. Configuration' },
    
    // 5. ASPECT-ORIENTED PROGRAMMING
    { slug: 'aop-intro', title: 'AOP Introduction', explanation: 'Understanding cross-cutting concerns and aspects.', category: '5. AOP' },
    { slug: 'aop-concepts', title: 'AOP Concepts', explanation: 'Aspect, Join Point, Advice, Pointcut, Target, Weaving.', category: '5. AOP' },
    { slug: 'aop-proxy', title: 'AOP Proxies', explanation: 'JDK dynamic proxies vs CGLIB proxies.', category: '5. AOP' },
    { slug: 'pointcut-expressions', title: 'Pointcut Expressions', explanation: 'Defining where advice should apply.', category: '5. AOP' },
    { slug: 'advice-types', title: 'Advice Types', explanation: '@Before, @After, @AfterReturning, @AfterThrowing, @Around.', category: '5. AOP' },
    { slug: 'aspect-annotation', title: '@Aspect', explanation: 'Defining aspects with @Aspect annotation.', category: '5. AOP' },
    { slug: 'aop-ordering', title: 'Aspect Ordering', explanation: 'Controlling execution order of aspects.', category: '5. AOP' },
    
    // 6. SPRING MVC
    { slug: 'mvc-intro', title: 'Spring MVC Introduction', explanation: 'Model-View-Controller pattern in Spring.', category: '6. Spring MVC' },
    { slug: 'dispatcher-servlet', title: 'DispatcherServlet', explanation: 'Front controller for Spring MVC.', category: '6. Spring MVC' },
    { slug: 'controller-annotation', title: '@Controller', explanation: 'Defining web controllers.', category: '6. Spring MVC' },
    { slug: 'request-mapping', title: '@RequestMapping', explanation: 'Mapping HTTP requests to handler methods.', category: '6. Spring MVC' },
    { slug: 'rest-controller', title: '@RestController', explanation: 'Building RESTful web services.', category: '6. Spring MVC' },
    { slug: 'request-param', title: '@RequestParam', explanation: 'Binding query parameters to method arguments.', category: '6. Spring MVC' },
    { slug: 'path-variable', title: '@PathVariable', explanation: 'Extracting values from URI paths.', category: '6. Spring MVC' },
    { slug: 'request-body', title: '@RequestBody', explanation: 'Binding HTTP request body to method parameter.', category: '6. Spring MVC' },
    { slug: 'response-body', title: '@ResponseBody', explanation: 'Writing return value directly to HTTP response.', category: '6. Spring MVC' },
    { slug: 'model-and-view', title: 'ModelAndView', explanation: 'Combining model data with view name.', category: '6. Spring MVC' },
    { slug: 'view-resolvers', title: 'View Resolvers', explanation: 'Resolving view names to actual views.', category: '6. Spring MVC' },
    { slug: 'exception-handling', title: 'Exception Handling', explanation: '@ExceptionHandler and @ControllerAdvice.', category: '6. Spring MVC' },
    { slug: 'interceptors', title: 'Interceptors', explanation: 'Pre and post-processing of requests.', category: '6. Spring MVC' },
    { slug: 'cors', title: 'CORS Support', explanation: 'Enabling Cross-Origin Resource Sharing.', category: '6. Spring MVC' },
    
    // 7. DATA ACCESS
    { slug: 'jdbc-template', title: 'JdbcTemplate', explanation: 'Simplified JDBC operations with Spring.', category: '7. Data Access' },
    { slug: 'named-parameter', title: 'NamedParameterJdbcTemplate', explanation: 'Using named parameters instead of ? placeholders.', category: '7. Data Access' },
    { slug: 'row-mapper', title: 'RowMapper', explanation: 'Mapping database rows to Java objects.', category: '7. Data Access' },
    { slug: 'transaction-management', title: 'Transaction Management', explanation: 'Declarative transaction management with @Transactional.', category: '7. Data Access' },
    { slug: 'transaction-propagation', title: 'Transaction Propagation', explanation: 'REQUIRED, REQUIRES_NEW, NESTED, etc.', category: '7. Data Access' },
    { slug: 'transaction-isolation', title: 'Transaction Isolation', explanation: 'READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.', category: '7. Data Access' },
    { slug: 'datasource-configuration', title: 'DataSource Configuration', explanation: 'Configuring database connections.', category: '7. Data Access' },
    
    // 8. ORM INTEGRATION
    { slug: 'hibernate-integration', title: 'Hibernate Integration', explanation: 'Using Hibernate with Spring.', category: '8. ORM Integration' },
    { slug: 'jpa-with-spring', title: 'JPA with Spring', explanation: 'Java Persistence API integration.', category: '8. ORM Integration' },
    { slug: 'entity-manager', title: 'EntityManager', explanation: 'Managing JPA entities.', category: '8. ORM Integration' },
    { slug: 'repository-pattern', title: 'Repository Pattern', explanation: 'Data access abstraction layer.', category: '8. ORM Integration' },
    { slug: 'hibernate-template', title: 'HibernateTemplate', explanation: 'Simplified Hibernate operations (legacy).', category: '8. ORM Integration' },
    
    // 9. SPRING SECURITY
    { slug: 'security-intro', title: 'Spring Security Introduction', explanation: 'Authentication and authorization framework.', category: '9. Spring Security' },
    { slug: 'security-configuration', title: 'Security Configuration', explanation: 'Configuring security with SecurityConfig.', category: '9. Spring Security' },
    { slug: 'authentication', title: 'Authentication', explanation: 'User authentication mechanisms.', category: '9. Spring Security' },
    { slug: 'authorization', title: 'Authorization', explanation: 'Access control and permissions.', category: '9. Spring Security' },
    { slug: 'security-annotations', title: 'Security Annotations', explanation: '@Secured, @PreAuthorize, @PostAuthorize.', category: '9. Spring Security' },
    { slug: 'method-security', title: 'Method Security', explanation: 'Securing methods with annotations.', category: '9. Spring Security' },
    { slug: 'jwt-authentication', title: 'JWT Authentication', explanation: 'Token-based authentication.', category: '9. Spring Security' },
    { slug: 'oauth2', title: 'OAuth2 Integration', explanation: 'OAuth2 authorization framework.', category: '9. Spring Security' },
    { slug: 'csrf-protection', title: 'CSRF Protection', explanation: 'Cross-Site Request Forgery prevention.', category: '9. Spring Security' },
    
    // 10. VALIDATION
    { slug: 'bean-validation', title: 'Bean Validation', explanation: 'JSR-303/JSR-380 validation with @Valid.', category: '10. Validation' },
    { slug: 'validation-annotations', title: 'Validation Annotations', explanation: '@NotNull, @Size, @Email, @Pattern, etc.', category: '10. Validation' },
    { slug: 'custom-validators', title: 'Custom Validators', explanation: 'Creating custom validation constraints.', category: '10. Validation' },
    { slug: 'validation-groups', title: 'Validation Groups', explanation: 'Grouping constraints for different scenarios.', category: '10. Validation' },
    
    // 11. TESTING
    { slug: 'spring-test-intro', title: 'Spring Testing Introduction', explanation: 'Testing Spring applications with Spring TestContext.', category: '11. Testing' },
    { slug: 'test-annotations', title: 'Test Annotations', explanation: '@SpringBootTest, @WebMvcTest, @DataJpaTest.', category: '11. Testing' },
    { slug: 'mock-mvc', title: 'MockMvc', explanation: 'Testing MVC controllers without server.', category: '11. Testing' },
    { slug: 'test-configuration', title: 'Test Configuration', explanation: '@TestConfiguration and test beans.', category: '11. Testing' },
    { slug: 'test-transactions', title: 'Test Transactions', explanation: 'Transactional tests with automatic rollback.', category: '11. Testing' },
    { slug: 'mock-beans', title: 'Mock Beans', explanation: '@MockBean and @SpyBean.', category: '11. Testing' },
    
    // 12. MESSAGING
    { slug: 'jms-intro', title: 'JMS Introduction', explanation: 'Java Message Service integration.', category: '12. Messaging' },
    { slug: 'jms-template', title: 'JmsTemplate', explanation: 'Sending and receiving JMS messages.', category: '12. Messaging' },
    { slug: 'message-listener', title: 'Message Listeners', explanation: '@JmsListener for asynchronous message processing.', category: '12. Messaging' },
    { slug: 'amqp-rabbitmq', title: 'AMQP & RabbitMQ', explanation: 'Advanced Message Queuing Protocol support.', category: '12. Messaging' },
    
    // 13. CACHING
    { slug: 'cache-abstraction', title: 'Cache Abstraction', explanation: 'Declarative caching with @Cacheable.', category: '13. Caching' },
    { slug: 'cache-annotations', title: 'Cache Annotations', explanation: '@Cacheable, @CachePut, @CacheEvict.', category: '13. Caching' },
    { slug: 'cache-providers', title: 'Cache Providers', explanation: 'EhCache, Caffeine, Redis integration.', category: '13. Caching' },
    { slug: 'cache-configuration', title: 'Cache Configuration', explanation: 'Configuring cache managers and caches.', category: '13. Caching' },
    
    // 14. SCHEDULING
    { slug: 'task-scheduling', title: 'Task Scheduling', explanation: '@Scheduled for periodic tasks.', category: '14. Scheduling' },
    { slug: 'cron-expressions', title: 'Cron Expressions', explanation: 'Scheduling with cron syntax.', category: '14. Scheduling' },
    { slug: 'async-tasks', title: 'Async Tasks', explanation: '@Async for asynchronous method execution.', category: '14. Scheduling' },
    { slug: 'task-executor', title: 'TaskExecutor', explanation: 'Thread pool configuration for async tasks.', category: '14. Scheduling' },
    
    // 15. EVENTS
    { slug: 'application-events', title: 'Application Events', explanation: 'Publishing and listening to events.', category: '15. Events' },
    { slug: 'event-listener', title: '@EventListener', explanation: 'Annotation-based event handling.', category: '15. Events' },
    { slug: 'custom-events', title: 'Custom Events', explanation: 'Creating custom application events.', category: '15. Events' },
    { slug: 'async-events', title: 'Async Events', explanation: 'Non-blocking event processing.', category: '15. Events' },
    
    // 16. SPRING WEBFLUX
    { slug: 'webflux-intro', title: 'WebFlux Introduction', explanation: 'Reactive web framework on top of Project Reactor.', category: '16. Spring WebFlux' },
    { slug: 'reactive-types', title: 'Reactive Types', explanation: 'Mono and Flux from Project Reactor.', category: '16. Spring WebFlux' },
    { slug: 'functional-endpoints', title: 'Functional Endpoints', explanation: 'RouterFunction and HandlerFunction.', category: '16. Spring WebFlux' },
    { slug: 'reactive-data-access', title: 'Reactive Data Access', explanation: 'R2DBC and reactive repositories.', category: '16. Spring WebFlux' },
    { slug: 'backpressure', title: 'Backpressure', explanation: 'Flow control in reactive streams.', category: '16. Spring WebFlux' },
    
    // 17. SPRING 5+ FEATURES
    { slug: 'functional-beans', title: 'Functional Bean Registration', explanation: 'Registering beans functionally (Spring 5).', category: '17. Spring 5+ Features' },
    { slug: 'kotlin-support', title: 'Kotlin Support', explanation: 'First-class Kotlin DSL support.', category: '17. Spring 5+ Features' },
    { slug: 'junit5-support', title: 'JUnit 5 Support', explanation: 'Integration with JUnit Jupiter.', category: '17. Spring 5+ Features' },
    { slug: 'reactive-stack', title: 'Reactive Stack', explanation: 'Full reactive programming model.', category: '17. Spring 5+ Features' },
    
    // 18. SPRING 6+ FEATURES
    { slug: 'java-17-baseline', title: 'Java 17 Baseline', explanation: 'Spring 6 requires Java 17+ (LTS).', category: '18. Spring 6+ Features' },
    { slug: 'jakarta-ee', title: 'Jakarta EE', explanation: 'Migration from javax to jakarta namespace.', category: '18. Spring 6+ Features' },
    { slug: 'native-images', title: 'Native Image Support', explanation: 'GraalVM native compilation with Spring Native.', category: '18. Spring 6+ Features' },
    { slug: 'observability', title: 'Observability', explanation: 'Micrometer Observation API integration.', category: '18. Spring 6+ Features' },
    { slug: 'http-interface', title: 'HTTP Interface', explanation: 'Declarative HTTP clients (Spring 6).', category: '18. Spring 6+ Features' },
    { slug: 'problem-details', title: 'RFC 7807 Problem Details', explanation: 'Standard error response format (Spring 6).', category: '18. Spring 6+ Features' },
    
    // 19. SPRING EXPRESSION LANGUAGE
    { slug: 'spel-intro', title: 'SpEL Introduction', explanation: 'Spring Expression Language basics.', category: '19. SpEL' },
    { slug: 'spel-operators', title: 'SpEL Operators', explanation: 'Arithmetic, relational, logical operators.', category: '19. SpEL' },
    { slug: 'spel-collections', title: 'SpEL with Collections', explanation: 'Filtering and projecting collections.', category: '19. SpEL' },
    { slug: 'spel-bean-refs', title: 'SpEL Bean References', explanation: 'Referencing beans in expressions.', category: '19. SpEL' },
    
    // 20. BEST PRACTICES
    { slug: 'spring-best-practices', title: 'Spring Best Practices', explanation: 'Industry-standard patterns and practices.', category: '20. Best Practices' },
    { slug: 'constructor-di-best', title: 'Constructor DI Preference', explanation: 'Why constructor injection is recommended.', category: '20. Best Practices' },
    { slug: 'immutable-beans', title: 'Immutable Beans', explanation: 'Using final fields and constructor injection.', category: '20. Best Practices' },
    { slug: 'dto-patterns', title: 'DTO Patterns', explanation: 'Data Transfer Objects in layered architecture.', category: '20. Best Practices' },
    { slug: 'logging-best-practices', title: 'Logging', explanation: 'SLF4J and Logback configuration.', category: '20. Best Practices' },
    { slug: 'error-handling-strategies', title: 'Error Handling', explanation: 'Global exception handling strategies.', category: '20. Best Practices' },
    { slug: 'performance-tuning', title: 'Performance Tuning', explanation: 'Optimizing Spring applications.', category: '20. Best Practices' },
  ]
};
