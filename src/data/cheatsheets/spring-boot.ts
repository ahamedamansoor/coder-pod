import { Power } from 'lucide-react';

export const springBootCheatsheet = {
  id: 'spring-boot',
  name: 'Spring Boot',
  description: 'Master Spring Boot from basics to advanced features',
  icon: Power,
  colorTheme: 'green' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Spring Boot',
      commands: [
        {
          command: 'What is Spring Boot?',
          description: 'Spring Boot makes Spring development easier and faster',
          usage: 'Convention over configuration approach',
          example: 'Spring Boot is an opinionated version of Spring that:\n• Auto-configures Spring applications\n• Includes embedded web server (Tomcat, Jetty, or Undertow)\n• Provides production-ready features\n• Reduces boilerplate code significantly\n• Follows "convention over configuration" principle\n\nKey Benefits:\n• Rapid application development\n• Minimal configuration required\n• Built-in metrics, health checks, and externalized configuration\n• No XML configuration needed\n• Easy to create standalone applications',
        },
        {
          command: 'Create Spring Boot Project',
          description: 'Quick start with Spring Initializr',
          usage: 'Use Spring Initializr (web) or CLI',
          example: '# Method 1: Spring Initializr (Recommended)\n1. Go to https://start.spring.io\n2. Choose:\n   • Project: Maven Project\n   • Language: Java\n   • Spring Boot: 3.x (latest stable)\n   • Group: com.example\n   • Artifact: my-app\n   • Packaging: Jar\n   • Java: 17 or higher\n3. Add Dependencies:\n   • Spring Web (for REST APIs)\n   • Spring Data JPA (for database)\n   • H2 Database (for testing)\n4. Click "Generate" and download ZIP\n5. Extract and open in your IDE\n\n# Method 2: Spring Boot CLI\n# Install CLI first\ncurl -s https://start.spring.io | bash\n\n# Create project\nspring init --dependencies=web,jpa,h2 my-app\ncd my-app\n\n# Method 3: IDE Integration\n# Most IDEs (IntelliJ, Eclipse, VS Code) have Spring Boot project wizards',
        },
        {
          command: 'Run Spring Boot Application',
          description: 'Different ways to run your Spring Boot app',
          usage: 'Maven, Gradle, IDE, or command line',
          example: '# Method 1: Using Maven (Recommended)\n./mvnw spring-boot:run\n\n# Method 2: Using Gradle\n./gradlew bootRun\n\n# Method 3: Run JAR directly\n./mvnw clean package\njava -jar target/my-app-0.0.1-SNAPSHOT.jar\n\n# Method 4: From IDE\n# Run the main class with @SpringBootApplication\n\n# Method 5: With specific profile\n./mvnw spring-boot:run -Dspring-boot.run.profiles=dev\n\n# Method 6: With custom port\n./mvnw spring-boot:run -Dspring-boot.run.arguments="--server.port=9090"\n\n# Your app is running at: http://localhost:8080',
        },
        {
          command: 'Project Structure Explained',
          description: 'Understanding Spring Boot project layout',
          usage: 'Standard directory structure',
          example: 'my-spring-boot-app/\n├── src/\n│   ├── main/\n│   │   ├── java/\n│   │   │   └── com/example/myapp/\n│   │   │       ├── MyApplication.java     # Main class\n│   │   │       ├── controller/            # REST controllers\n│   │   │       │   └── UserController.java\n│   │   │       ├── service/               # Business logic\n│   │   │       │   └── UserService.java\n│   │   │       ├── repository/            # Data access layer\n│   │   │       │   └── UserRepository.java\n│   │   │       ├── model/                 # Entity classes\n│   │   │       │   └── User.java\n│   │   │       └── config/                # Configuration classes\n│   │   └── resources/\n│   │       ├── application.properties    # Main configuration\n│   │       ├── application-dev.properties # Development profile\n│   │       ├── application-prod.properties # Production profile\n│   │       ├── static/                    # CSS, JS, images\n│   │       └── templates/                 # Thymeleaf templates\n│   └── test/                              # Test classes\n│       └── java/\n│           └── com/example/myapp/\n│               └── MyApplicationTests.java\n├── pom.xml                               # Maven dependencies\n└── README.md\n\n# Key Points:\n# • Main class goes in the root package\n# • Spring Boot scans subpackages automatically\n# • Configuration files go in resources/',
        },
        {
          command: 'First REST Controller',
          description: 'Create your first REST API endpoint',
          usage: '@RestController and @GetMapping',
          example: 'package com.example.myapp.controller;\n\nimport org.springframework.web.bind.annotation.*;\nimport java.util.HashMap;\nimport java.util.Map;\n\n@RestController\npublic class HelloController {\n    \n    // Simple endpoint\n    @GetMapping("/hello")\n    public String sayHello() {\n        return "Hello, Spring Boot!";\n    }\n    \n    // Endpoint with path variable\n    @GetMapping("/hello/{name}")\n    public String sayHelloToSomeone(@PathVariable String name) {\n        return "Hello, " + name + "!";\n    }\n    \n    // Endpoint returning JSON\n    @GetMapping("/user")\n    public Map<String, Object> getUser() {\n        Map<String, Object> user = new HashMap<>();\n        user.put("name", "John Doe");\n        user.put("email", "john@example.com");\n        user.put("age", 30);\n        return user;\n    }\n    \n    // POST endpoint\n    @PostMapping("/user")\n    public Map<String, Object> createUser(@RequestBody Map<String, Object> user) {\n        user.put("id", System.currentTimeMillis());\n        user.put("created", true);\n        return user;\n    }\n}\n\n# Test your endpoints:\n# GET http://localhost:8080/hello\n# GET http://localhost:8080/hello/Alice\n# GET http://localhost:8080/user\n# POST http://localhost:8080/user (with JSON body)',
        },
      ],
    },
    {
      title: 'Spring Boot Starters',
      commands: [
        {
          command: 'What are Starters?',
          description: 'Dependency descriptors that include common dependencies',
          usage: 'Add starters to pom.xml for auto-configuration',
          example: 'Spring Boot Starters are convenient dependency descriptors:\n\n• Include commonly needed dependencies\n• Provide auto-configuration\n• Follow naming convention: spring-boot-starter-*\n• Eliminate need to manage individual dependencies\n\nCommon Starters:\n• spring-boot-starter-web - Web applications (REST, MVC)\n• spring-boot-starter-data-jpa - Database with JPA\n• spring-boot-starter-security - Security features\n• spring-boot-starter-test - Testing dependencies\n• spring-boot-starter-actuator - Monitoring and management\n• spring-boot-starter-validation - Bean validation\n\nHow to add:\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>',
        },
        {
          command: 'Web Starter',
          description: 'For building web applications and REST APIs',
          usage: 'spring-boot-starter-web',
          example: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n\n# What it includes:\n• Spring MVC (for web controllers)\n• Embedded Tomcat server\n• Jackson (JSON processing)\n• Validation (if JSR-303 on classpath)\n• Spring Web (core web functionality)\n\n# Enables:\n• @RestController, @Controller\n• @GetMapping, @PostMapping, etc.\n• Automatic JSON conversion\n• Embedded server (no need to deploy to external server)\n• Request/response handling',
        },
        {
          command: 'Data JPA Starter',
          description: 'For database operations with JPA',
          usage: 'spring-boot-starter-data-jpa',
          example: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.h2database</groupId>\n    <artifactId>h2</artifactId>\n    <scope>runtime</scope>\n</dependency>\n\n# What it includes:\n• Spring Data JPA\n• Hibernate ORM\n• Spring Data Commons\n• Spring Transaction\n\n# Enables:\n• @Entity, @Repository\n• JpaRepository interface\n• Automatic transaction management\n• Database auto-configuration\n• Entity scanning',
        },
        {
          command: 'Security Starter',
          description: 'For adding security to your application',
          usage: 'spring-boot-starter-security',
          example: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n# What it includes:\n• Spring Security\n• Spring Security Config\n• Spring Security Web\n\n# Enables:\n• Basic authentication (by default)\n• Form login\n• CSRF protection\n• Security filter chain\n• Method-level security\n\n# Default behavior:\n# • Username: user\n# • Password: printed in console at startup\n# • All endpoints secured by default',
        },
        {
          command: 'Test Starter',
          description: 'For testing Spring Boot applications',
          usage: 'spring-boot-starter-test',
          example: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n    <scope>test</scope>\n</dependency>\n\n# What it includes:\n• Spring Boot Test\n• Spring Test\n• JUnit 5\n• Mockito\n• Hamcrest\n• AssertJ\n\n# Enables:\n• @SpringBootTest\n• @WebMvcTest, @DataJpaTest\n• MockMvc, TestRestTemplate\n• @MockBean\n• Test slices',
        },
        {
          command: 'Actuator Starter',
          description: 'For application monitoring and management',
          usage: 'spring-boot-starter-actuator',
          example: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n# What it includes:\n• Spring Boot Actuator\n• Micrometer (metrics)\n\n# Enables endpoints:\n# /actuator/health - Application health\n# /actuator/info - Application info\n# /actuator/metrics - Application metrics\n# /actuator/env - Environment properties\n# /actuator/loggers - Logger configuration\n\n# Configure in application.properties:\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=always',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Configuration Properties',
      commands: [
        {
          command: 'application.properties',
          description: 'Main configuration file for Spring Boot',
          usage: 'Configure server, database, logging, etc.',
          example: '# Server Configuration\nserver.port=8080\nserver.servlet.context-path=/api\n\n# Application Info\nspring.application.name=my-spring-boot-app\nspring.application.version=1.0.0\n\n# Database Configuration (H2 - in-memory)\nspring.datasource.url=jdbc:h2:mem:testdb\nspring.datasource.driverClassName=org.h2.Driver\nspring.datasource.username=sa\nspring.datasource.password=password\nspring.h2.console.enabled=true\n\n# JPA/Hibernate Configuration\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.format_sql=true\nspring.jpa.defer-datasource-initialization=true\n\n# Logging Configuration\nlogging.level.root=INFO\nlogging.level.com.example.myapp=DEBUG\nlogging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n\n\n# Actuator Configuration\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=always',
        },
        {
          command: 'Database Configuration',
          description: 'Configure different databases',
          usage: 'MySQL, PostgreSQL, Oracle configuration',
          example: '# MySQL Configuration\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC\nspring.datasource.username=root\nspring.datasource.password=password\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n\n# PostgreSQL Configuration\nspring.datasource.url=jdbc:postgresql://localhost:5432/mydb\nspring.datasource.username=postgres\nspring.datasource.password=password\nspring.datasource.driver-class-name=org.postgresql.Driver\n\n# Oracle Configuration\nspring.datasource.url=jdbc:oracle:thin:@localhost:1521:XE\nspring.datasource.username=system\nspring.datasource.password=password\nspring.datasource.driver-class-name=oracle.jdbc.OracleDriver\n\n# Connection Pool Configuration (HikariCP)\nspring.datasource.hikari.connection-timeout=20000\nspring.datasource.hikari.maximum-pool-size=10\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.idle-timeout=300000\nspring.datasource.hikari.max-lifetime=1200000',
        },
        {
          command: 'Profile-Specific Configuration',
          description: 'Different configurations for different environments',
          usage: 'application-{profile}.properties',
          example: '# application.properties (default)\nspring.profiles.active=dev\n\n# application-dev.properties (Development)\nspring.datasource.url=jdbc:h2:mem:devdb\nlogging.level.com.example.myapp=DEBUG\nspring.jpa.show-sql=true\nspring.h2.console.enabled=true\n\n# application-prod.properties (Production)\nspring.datasource.url=jdbc:mysql://prod-server:3306/proddb\nlogging.level.com.example.myapp=WARN\nlogging.level.org.springframework.security=WARN\nspring.jpa.show-sql=false\nserver.port=80\n\n# application-test.properties (Testing)\nspring.datasource.url=jdbc:h2:mem:testdb\nspring.jpa.hibernate.ddl-auto=create-drop\nlogging.level.com.example.myapp=INFO\n\n# Activate profiles:\n# 1. In application.properties: spring.profiles.active=dev\n# 2. Command line: --spring.profiles.active=prod\n# 3. Environment variable: SPRING_PROFILES_ACTIVE=prod',
        },
        {
          command: 'YAML Configuration',
          description: 'Use YAML instead of properties files',
          usage: 'application.yml file',
          example: '# application.yml\nserver:\n  port: 8080\n  servlet:\n    context-path: /api\n\nspring:\n  application:\n    name: my-spring-boot-app\n  \n  datasource:\n    url: jdbc:h2:mem:testdb\n    username: sa\n    password: password\n    driver-class-name: org.h2.Driver\n  \n  jpa:\n    hibernate:\n      ddl-auto: update\n    show-sql: true\n    properties:\n      hibernate:\n        format_sql: true\n  \n  profiles:\n    active: dev\n\nlogging:\n  level:\n    root: INFO\n    com.example.myapp: DEBUG\n  pattern:\n    console: "%d{yyyy-MM-dd HH:mm:ss} - %msg%n"\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics\n  endpoint:\n    health:\n      show-details: always\n\n# YAML advantages:\n# • Better structure and readability\n# • Supports complex configurations\n# • Less repetition\n# • Supports lists and maps naturally',
        },
        {
          command: 'Environment Variables',
          description: 'Configure using environment variables',
          usage: 'SPRING_APPLICATION_NAME, SERVER_PORT, etc.',
          example: '# Environment variables override configuration files\n\n# Common environment variables:\nexport SPRING_APPLICATION_NAME=my-app\nexport SERVER_PORT=9090\nexport SPRING_PROFILES_ACTIVE=prod\nexport SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/mydb\nexport SPRING_DATASOURCE_USERNAME=root\nexport SPRING_DATASOURCE_PASSWORD=password\n\n# Docker environment variables:\nenvironment:\n  - SPRING_APPLICATION_NAME=docker-app\n  - SPRING_PROFILES_ACTIVE=docker\n  - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/mydb\n  - SPRING_DATASOURCE_USERNAME=root\n  - SPRING_DATASOURCE_PASSWORD=password\n\n# Kubernetes ConfigMap:\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: spring-boot-config\ndata:\n  SPRING_APPLICATION_NAME: "k8s-app"\n  SPRING_PROFILES_ACTIVE: "k8s"\n  LOGGING_LEVEL_ROOT: "INFO"',
        },
      ],
    },
    {
      title: 'Auto-Configuration',
      commands: [
        {
          command: 'What is Auto-Configuration?',
          description: 'Spring Boot automatically configures beans based on classpath',
          usage: 'Automatic bean creation and configuration',
          example: 'Auto-Configuration means Spring Boot:\n• Scans the classpath for dependencies\n• Automatically creates and configures beans\n• Follows convention over configuration\n• Can be customized or disabled\n\nExamples:\n• If H2 is on classpath → Configures in-memory database\n• If Web starter → Configures DispatcherServlet, embedded server\n• If JPA starter → Configures EntityManagerFactory\n• If Security starter → Configures security filters\n\nHow it works:\n1. Spring Boot scans classpath\n2. Finds auto-configuration classes\n3. Applies conditions (@ConditionalOnClass, @ConditionalOnMissingBean)\n4. Creates beans automatically\n5. Allows customization through properties',
        },
        {
          command: '@EnableAutoConfiguration',
          description: 'Enable Spring Boot auto-configuration',
          usage: 'Part of @SpringBootApplication',
          example: '@SpringBootApplication\n# Equivalent to:\n@Configuration\n@EnableAutoConfiguration\n@ComponentScan\n\n# Manual configuration:\n@Configuration\n@EnableAutoConfiguration\npublic class AppConfig {\n    // Custom configuration here\n}\n\n# Auto-configuration can be excluded:\n@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}\n\n# Exclude via properties:\nspring.autoconfigure.exclude=\\\n  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration',
        },
        {
          command: '@Conditional Annotations',
          description: 'Control when beans are created',
          usage: 'Conditional bean creation',
          example: '@Configuration\npublic class ConditionalConfig {\n    \n    @Bean\n    @ConditionalOnProperty(name = "feature.enabled", havingValue = "true")\n    public FeatureService featureService() {\n        return new FeatureService();\n    }\n    \n    @Bean\n    @ConditionalOnClass(DataSource.class)\n    public DatabaseService databaseService() {\n        return new DatabaseService();\n    }\n    \n    @Bean\n    @ConditionalOnMissingBean(EmailService.class)\n    public EmailService defaultEmailService() {\n        return new DefaultEmailService();\n    }\n    \n    @Bean\n    @ConditionalOnBean(DataSource.class)\n    public JdbcTemplate jdbcTemplate(DataSource dataSource) {\n        return new JdbcTemplate(dataSource);\n    }\n}\n\n# Common conditions:\n# @ConditionalOnClass - Class on classpath\n# @ConditionalOnMissingClass - Class not on classpath\n# @ConditionalOnBean - Bean exists\n# @ConditionalOnMissingBean - Bean doesn\'t exist\n# @ConditionalOnProperty - Property has specific value\n# @ConditionalOnResource - Resource exists\n# @ConditionalOnWebApplication - Web application\n# @ConditionalOnNotWebApplication - Not web application',
        },
        {
          command: 'Custom Auto-Configuration',
          description: 'Create your own auto-configuration',
          usage: 'Create auto-configuration classes',
          example: '# 1. Create auto-configuration class\n@Configuration\n@ConditionalOnClass(MyService.class)\n@EnableConfigurationProperties(MyServiceProperties.class)\npublic class MyServiceAutoConfiguration {\n    \n    @Bean\n    @ConditionalOnMissingBean\n    public MyService myService(MyServiceProperties properties) {\n        return new MyService(properties.getUrl(), properties.getTimeout());\n    }\n}\n\n# 2. Create properties class\n@ConfigurationProperties(prefix = "my.service")\npublic class MyServiceProperties {\n    private String url = "http://localhost:8080";\n    private int timeout = 5000;\n    \n    // getters and setters\n}\n\n# 3. Register auto-configuration\n# Create file: META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\n# Add: com.example.MyServiceAutoConfiguration\n\n# 4. Use in application:\nmy.service.url=http://api.example.com\nmy.service.timeout=3000',
        },
      ],
    },
    {
      title: 'Spring Boot DevTools',
      commands: [
        {
          command: 'DevTools Dependency',
          description: 'Automatic restart and live reload',
          usage: 'spring-boot-devtools starter',
          example: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <scope>runtime</scope>\n    <optional>true</optional>\n</dependency>\n\n# What DevTools provides:\n• Automatic application restart\n• Live reload (browser refresh)\n• Remote debugging support\n• Property defaults for development\n• Disable caching for templates\n\n# Automatic Restart:\n• Monitors classpath changes\n• Restarts application when files change\n• Faster than full restart\n• Excludes certain resources from restart',
        },
        {
          command: 'DevTools Configuration',
          description: 'Configure DevTools behavior',
          usage: 'spring.devtools properties',
          example: '# application.properties\n\n# Enable/disable restart\nspring.devtools.restart.enabled=true\n\n# Exclude patterns from restart\nspring.devtools.restart.exclude=static/**,public/**\n\n# Additional patterns to trigger restart\nspring.devtools.restart.additional-paths=src/main/java\n\n# Polling interval for file changes\nspring.devtools.restart.poll-interval=1000ms\n\n# Quiet period before restart\nspring.devtools.restart.quiet-period=400ms\n\n# Live reload settings\nspring.devtools.livereload.enabled=true\nspring.devtools.livereload.port=35729\n\n# Remote debugging\nspring.devtools.remote.secret=mysecret\nspring.devtools.remote.context-path=/.~~spring-boot!~/',
        },
        {
          command: 'Live Reload',
          description: 'Automatic browser refresh',
          usage: 'Browser extension for live reload',
          example: '# Live Reload works with:\n• Browser extensions (Chrome, Firefox)\n• Automatic page refresh on static resource changes\n• CSS and JavaScript updates\n• Template changes\n\n# Supported browsers:\n• Chrome (LiveReload extension)\n• Firefox (LiveReload extension)\n• Safari (LiveReload extension)\n• Edge (LiveReload extension)\n\n# How it works:\n1. Install LiveReload browser extension\n2. Enable DevTools in Spring Boot\n3. Make changes to static resources\n4. Browser automatically refreshes\n\n# Disable live reload:\nspring.devtools.livereload.enabled=false',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Spring Boot Actuator',
      commands: [
        {
          command: 'Actuator Basics',
          description: 'Application monitoring and management endpoints',
          usage: 'spring-boot-starter-actuator',
          example: '# Add dependency\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n# Configure endpoints\nmanagement.endpoints.web.exposure.include=health,info,metrics,env\nmanagement.endpoint.health.show-details=always\n\n# Available endpoints:\n# /actuator - Lists all available endpoints\n# /actuator/health - Application health status\n# /actuator/info - Application information\n# /actuator/metrics - Application metrics\n# /actuator/env - Environment properties\n# /actuator/loggers - Logger configuration\n# /actuator/threaddump - Thread dump\n# /actuator/heapdump - Heap dump\n# /actuator/mappings - Request mappings\n# /actuator/caches - Cache information',
        },
        {
          command: 'Custom Health Indicators',
          description: 'Create custom health checks',
          usage: 'Implement HealthIndicator interface',
          example: '@Component\npublic class DatabaseHealthIndicator implements HealthIndicator {\n    \n    @Autowired\n    private DataSource dataSource;\n    \n    @Override\n    public Health health() {\n        try {\n            // Test database connection\n            Connection connection = dataSource.getConnection();\n            connection.close();\n            \n            return Health.up()\n                    .withDetail("database", "Available")\n                    .withDetail("validation", "Passed")\n                    .build();\n        } catch (Exception e) {\n            return Health.down()\n                    .withDetail("database", "Unavailable")\n                    .withDetail("error", e.getMessage())\n                    .build();\n        }\n    }\n}\n\n# External service health check\n@Component\npublic class ExternalServiceHealthIndicator implements HealthIndicator {\n    \n    @Override\n    public Health health() {\n        // Check external service\n        boolean isServiceUp = checkExternalService();\n        \n        if (isServiceUp) {\n            return Health.up()\n                    .withDetail("service", "Available")\n                    .build();\n        } else {\n            return Health.down()\n                    .withDetail("service", "Unavailable")\n                    .build();\n        }\n    }\n    \n    private boolean checkExternalService() {\n        // Implementation to check external service\n        return true;\n    }\n}',
        },
        {
          command: 'Custom Metrics',
          description: 'Add custom application metrics',
          usage: 'MeterRegistry and custom metrics',
          example: '@Component\npublic class CustomMetrics {\n    \n    private final Counter userRegistrationCounter;\n    private final Timer requestTimer;\n    private final Gauge activeUsersGauge;\n    \n    public CustomMetrics(MeterRegistry meterRegistry) {\n        // Counter for user registrations\n        this.userRegistrationCounter = Counter.builder("user.registrations")\n                .description("Number of user registrations")\n                .register(meterRegistry);\n        \n        // Timer for request processing time\n        this.requestTimer = Timer.builder("request.processing.time")\n                .description("Time taken to process requests")\n                .register(meterRegistry);\n        \n        // Gauge for active users\n        this.activeUsersGauge = Gauge.builder("users.active")\n                .description("Number of active users")\n                .register(meterRegistry, this, CustomMetrics::getActiveUserCount);\n    }\n    \n    public void recordUserRegistration() {\n        userRegistrationCounter.increment();\n    }\n    \n    public void recordRequestTime(Runnable request) {\n        requestTimer.record(request);\n    }\n    \n    private double getActiveUserCount() {\n        // Return current active user count\n        return 42.0;\n    }\n}\n\n# Access metrics:\n# GET /actuator/metrics/user.registrations\n# GET /actuator/metrics/request.processing.time\n# GET /actuator/metrics/users.active',
        },
        {
          command: 'Security for Actuator',
          description: 'Secure actuator endpoints',
          usage: 'Spring Security for actuator',
          example: '# Configure actuator security\n@Configuration\n@EnableWebSecurity\npublic class ActuatorSecurityConfig {\n    \n    @Bean\n    public SecurityFilterChain actuatorSecurityFilterChain(HttpSecurity http) throws Exception {\n        http\n            .requestMatcher(EndpointRequest.toAnyEndpoint())\n            .authorizeHttpRequests(authorize -> authorize\n                .requestMatchers(EndpointRequest.to("health", "info")).permitAll()\n                .anyRequest().hasRole("ACTUATOR")\n            )\n            .httpBasic(withDefaults());\n        \n        return http.build();\n    }\n}\n\n# Actuator-specific properties\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=when-authorized\nmanagement.security.enabled=true\n\n# Create actuator user\nspring.security.user.name=actuator\nspring.security.user.password=actuator\nspring.security.user.roles=ACTUATOR',
        },
      ],
    },
    {
      title: 'Spring Boot Testing',
      commands: [
        {
          command: '@SpringBootTest',
          description: 'Full application context testing',
          usage: 'Integration testing with complete context',
          example: '@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@AutoConfigureMockMvc\n@Transactional\npublic class UserControllerIntegrationTest {\n    \n    @Autowired\n    private MockMvc mockMvc;\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    @Test\n    public void getAllUsers_ShouldReturnAllUsers() throws Exception {\n        // Given\n        User user = new User("testuser", "test@example.com");\n        userRepository.save(user);\n        \n        // When & Then\n        mockMvc.perform(get("/api/users"))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andExpect(jsonPath("$", hasSize(1)))\n                .andExpect(jsonPath("$[0].username", is("testuser")));\n    }\n    \n    @Test\n    public void createUser_ShouldReturnCreatedUser() throws Exception {\n        // Given\n        String userJson = "{\\"username\\": \\"newuser\\", \\"email\\": \\"newuser@example.com\\"}";\n        \n        // When & Then\n        mockMvc.perform(post("/api/users")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(userJson))\n                .andExpect(status().isCreated())\n                .andExpect(jsonPath("$.username", is("newuser")));\n    }\n}',
        },
        {
          command: '@WebMvcTest',
          description: 'Test web layer without full context',
          usage: 'Controller testing with mocked dependencies',
          example: '@WebMvcTest(UserController.class)\npublic class UserControllerUnitTest {\n    \n    @Autowired\n    private MockMvc mockMvc;\n    \n    @MockBean\n    private UserService userService;\n    \n    @Test\n    public void getUserById_ShouldReturnUser() throws Exception {\n        // Given\n        User user = new User(1L, "testuser", "test@example.com");\n        when(userService.findById(1L)).thenReturn(Optional.of(user));\n        \n        // When & Then\n        mockMvc.perform(get("/api/users/1"))\n                .andExpect(status().isOk())\n                .andExpect(jsonPath("$.username", is("testuser")));\n        \n        verify(userService, times(1)).findById(1L);\n    }\n    \n    @Test\n    public void getUserById_NotFound_ShouldReturn404() throws Exception {\n        // Given\n        when(userService.findById(1L)).thenReturn(Optional.empty());\n        \n        // When & Then\n        mockMvc.perform(get("/api/users/1"))\n                .andExpect(status().isNotFound());\n    }\n}',
        },
        {
          command: '@DataJpaTest',
          description: 'Test JPA repositories with in-memory database',
          usage: 'Repository testing with test database',
          example: '@DataJpaTest\n@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)\npublic class UserRepositoryTest {\n    \n    @Autowired\n    private TestEntityManager entityManager;\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    @Test\n    public void whenFindByUsername_thenReturnUser() {\n        // Given\n        User user = new User("testuser", "test@example.com");\n        entityManager.persistAndFlush(user);\n        \n        // When\n        Optional<User> found = userRepository.findByUsername("testuser");\n        \n        // Then\n        assertThat(found.isPresent()).isTrue();\n        assertThat(found.get().getUsername()).isEqualTo("testuser");\n    }\n    \n    @Test\n    public void whenSaveUser_thenUserShouldBeSaved() {\n        // Given\n        User user = new User("newuser", "newuser@example.com");\n        \n        // When\n        User saved = userRepository.save(user);\n        \n        // Then\n        assertThat(saved.getId()).isNotNull();\n        assertThat(saved.getUsername()).isEqualTo("newuser");\n    }\n}',
        },
        {
          command: 'Test Slices',
          description: 'Test specific layers of application',
          usage: '@JsonTest, @WebFluxTest, @DataRedisTest',
          example: '# JSON Testing\n@JsonTest\npublic class UserJsonTest {\n    \n    @Autowired\n    private JacksonTester<User> json;\n    \n    @Test\n    public void serializeUser_ShouldReturnJson() throws Exception {\n        User user = new User("testuser", "test@example.com");\n        \n        assertThat(json.write(user))\n                .isStrictlyEqualToJson("expected/user.json");\n    }\n}\n\n# Properties Testing\n@Import(MyProperties.class)\n@RunWith(SpringRunner.class)\npublic class MyPropertiesTest {\n    \n    @Autowired\n    private MyProperties properties;\n    \n    @Test\n    public void bindProperties_ShouldSetValues() {\n        assertThat(properties.getName()).isEqualTo("test");\n        assertThat(properties.getTimeout()).isEqualTo(1000);\n    }\n}\n\n# Test Utilities\n@TestMethodOrder(OrderAnnotation.class)\npublic class OrderedTest {\n    \n    @Test\n    @Order(1)\n    public void testFirst() { ... }\n    \n    @Test\n    @Order(2)\n    public void testSecond() { ... }\n}',
        },
      ],
    },
    {
      title: 'Spring Boot Production',
      commands: [
        {
          command: 'Production Configuration',
          description: 'Configure for production deployment',
          usage: 'Production-ready properties',
          example: '# application-prod.properties\n\n# Server configuration\nserver.port=80\nserver.servlet.context-path=/\nserver.tomcat.max-threads=200\nserver.tomcat.connection-timeout=20000\n\n# Database configuration\nspring.datasource.url=jdbc:mysql://prod-db:3306/proddb\nspring.datasource.username=${DB_USERNAME}\nspring.datasource.password=${DB_PASSWORD}\nspring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=10\n\n# JPA configuration\nspring.jpa.hibernate.ddl-auto=validate\nspring.jpa.show-sql=false\nspring.jpa.properties.hibernate.jdbc.batch_size=20\n\n# Logging configuration\nlogging.level.root=WARN\nlogging.level.com.example.myapp=INFO\nlogging.file.name=/var/log/myapp/application.log\nlogging.logback.rollingpolicy.max-file-size=100MB\nlogging.logback.rollingpolicy.max-history=30\n\n# Actuator configuration\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=never\nmanagement.metrics.export.prometheus.enabled=true\n\n# Security\nspring.security.require-ssl=true\nserver.ssl.enabled=true\nserver.ssl.key-store=classpath:keystore.p12\nserver.ssl.key-store-password=${SSL_PASSWORD}\nserver.ssl.key-store-type=PKCS12',
        },
        {
          command: 'Docker Deployment',
          description: 'Containerize Spring Boot application',
          usage: 'Dockerfile and docker-compose',
          example: '# Dockerfile\nFROM openjdk:17-jdk-slim\n\nWORKDIR /app\n\nCOPY target/my-app-*.jar app.jar\n\nEXPOSE 8080\n\nENTRYPOINT ["java", "-jar", "app.jar"]\n\n# Multi-stage Dockerfile\nFROM maven:3.8-openjdk-17 AS build\nWORKDIR /app\nCOPY pom.xml .\nRUN mvn dependency:go-offline\nCOPY src ./src\nRUN mvn package -DskipTests\n\nFROM openjdk:17-jre-slim\nWORKDIR /app\nCOPY --from=build /app/target/my-app-*.jar app.jar\nEXPOSE 8080\nENTRYPOINT ["java", "-jar", "app.jar"]\n\n# docker-compose.yml\nversion: \'3.8\'\nservices:\n  app:\n    build: .\n    ports:\n      - "8080:8080"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/mydb\n      - SPRING_DATASOURCE_USERNAME=root\n      - SPRING_DATASOURCE_PASSWORD=password\n    depends_on:\n      - db\n  db:\n    image: mysql:8.0\n    environment:\n      - MYSQL_ROOT_PASSWORD=password\n      - MYSQL_DATABASE=mydb\n    volumes:\n      - db_data:/var/lib/mysql\n\nvolumes:\n  db_data:',
        },
        {
          command: 'Kubernetes Deployment',
          description: 'Deploy to Kubernetes cluster',
          usage: 'Deployment and Service YAML',
          example: '# k8s/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: spring-boot-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: spring-boot-app\n  template:\n    metadata:\n      labels:\n        app: spring-boot-app\n    spec:\n      containers:\n      - name: spring-boot-app\n        image: myregistry/spring-boot-app:latest\n        ports:\n        - containerPort: 8080\n        env:\n        - name: SPRING_PROFILES_ACTIVE\n          value: "k8s"\n        - name: SPRING_DATASOURCE_URL\n          value: "jdbc:mysql://mysql-service:3306/mydb"\n        resources:\n          requests:\n            memory: "512Mi"\n            cpu: "500m"\n          limits:\n            memory: "1Gi"\n            cpu: "1000m"\n        livenessProbe:\n          httpGet:\n            path: /actuator/health\n            port: 8080\n          initialDelaySeconds: 60\n          periodSeconds: 30\n        readinessProbe:\n          httpGet:\n            path: /actuator/health\n            port: 8080\n          initialDelaySeconds: 30\n          periodSeconds: 10\n\n---\n# k8s/service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: spring-boot-service\nspec:\n  selector:\n    app: spring-boot-app\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 8080\n  type: LoadBalancer',
        },
        {
          command: 'Performance Tuning',
          description: 'Optimize Spring Boot application performance',
          usage: 'JVM and application tuning',
          example: '# JVM Options for Production\nJAVA_OPTS="-Xms1g -Xmx2g -XX:+UseG1GC -XX:+UseStringDeduplication"\n\n# application.properties performance settings\n\n# Thread pool configuration\nserver.tomcat.max-threads=200\nserver.tomcat.min-spare-threads=10\nserver.tomcat.accept-count=100\n\n# Connection pool optimization\nspring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=10\nspring.datasource.hikari.idle-timeout=30000\nspring.datasource.hikari.connection-timeout=20000\nspring.datasource.hikari.leak-detection-threshold=60000\n\n# JPA performance\nspring.jpa.properties.hibernate.jdbc.batch_size=20\nspring.jpa.properties.hibernate.order_inserts=true\nspring.jpa.properties.hibernate.order_updates=true\nspring.jpa.properties.hibernate.jdbc.batch_versioned_data=true\nspring.jpa.properties.hibernate.cache.use_second_level_cache=true\nspring.jpa.properties.hibernate.cache.region.factory_class=org.hibernate.cache.ehcache.EhCacheRegionFactory\n\n# Caching\nspring.cache.type=ehcache\nspring.cache.ehcache.config=classpath:ehcache.xml\n\n# Async configuration\nspring.task.execution.pool.core-size=5\nspring.task.execution.pool.max-size=10\nspring.task.execution.pool.queue-capacity=100\n\n# Metrics and monitoring\nmanagement.metrics.export.prometheus.enabled=true\nmanagement.endpoint.prometheus.enabled=true',
        },
      ],
    },
  ],
};
