import { Power } from 'lucide-react';

export const springBootCheatsheet = {
  id: 'spring-boot',
  name: 'Spring Boot',
  description: 'Essential annotations and properties for Spring Boot (v3+)',
  icon: Power,
  colorTheme: 'green' as const,
  sections: [
    {
      title: 'Main Application',
      commands: [
        {
          command: '@SpringBootApplication',
          description: 'Enables auto-configuration, component scanning, and defines the configuration.',
          usage: '@SpringBootApplication',
          example: '@SpringBootApplication\npublic class MyApplication {\n  public static void main(String[] args) {\n    SpringApplication.run(MyApplication.class, args);\n  }\n}',
        },
        {
          command: 'SpringApplication.run()',
          description: 'Static helper to run a Spring Boot application.',
          usage: 'SpringApplication.run(MyApplication.class, args);',
          example: 'SpringApplication.run(MyApplication.class, args);',
        },
        {
          command: '@EnableAutoConfiguration',
          description: 'Enables Spring Boot\'s auto-configuration mechanism.',
          usage: '@EnableAutoConfiguration',
          example: '// Part of @SpringBootApplication',
        },
        {
          command: '@ComponentScan',
          description: 'Configures component scanning directives.',
          usage: '@ComponentScan(basePackages = "com.example")',
          example: '// Part of @SpringBootApplication',
        },
      ],
    },
    {
      title: 'Common `application.properties`',
      commands: [
        {
          command: 'server.port',
          description: 'Port for the embedded server.',
          usage: 'server.port=8080',
          example: 'server.port=9000',
        },
        {
          command: 'spring.application.name',
          description: 'Sets the application name.',
          usage: 'spring.application.name=my-app',
          example: 'spring.application.name=user-service',
        },
        {
          command: 'spring.profiles.active',
          description: 'Activates specified profiles (e.g., dev, prod).',
          usage: 'spring.profiles.active=dev',
          example: 'spring.profiles.active=prod,cloud',
        },
        {
          command: 'spring.datasource.url',
          description: 'JDBC URL of the database.',
          usage: 'spring.datasource.url=jdbc:postgresql://localhost:5432/mydb',
          example: 'spring.datasource.url=jdbc:mysql://db.example.com/inventory',
        },
        {
          command: 'spring.datasource.username',
          description: 'Username for the database connection.',
          usage: 'spring.datasource.username=user',
          example: 'spring.datasource.username=admin',
        },
        {
          command: 'spring.datasource.password',
          description: 'Password for the database connection.',
          usage: 'spring.datasource.password=secret',
          example: 'spring.datasource.password=${DB_PASSWORD}',
        },
        {
          command: 'spring.jpa.hibernate.ddl-auto',
          description: 'Database initialization mode (e.g., none, validate, update, create, create-drop).',
          usage: 'spring.jpa.hibernate.ddl-auto=validate',
          example: 'spring.jpa.hibernate.ddl-auto=update',
        },
        {
          command: 'spring.jpa.show-sql',
          description: 'Enable logging of SQL statements.',
          usage: 'spring.jpa.show-sql=true',
          example: 'spring.jpa.show-sql=true',
        },
        {
          command: 'logging.level.<package>',
          description: 'Set logging levels for specific packages.',
          usage: 'logging.level.com.example=DEBUG',
          example: 'logging.level.org.springframework.web=INFO',
        },
      ],
    },
    {
      title: 'Web Layer (Spring MVC / WebFlux)',
      commands: [
        {
          command: '@RestController',
          description: 'Convenience annotation for creating RESTful controllers.',
          usage: '@RestController',
          example: '@RestController\npublic class ApiController { ... }',
        },
        {
          command: '@RequestMapping',
          description: 'Maps web requests to handler methods.',
          usage: '@RequestMapping("/api")',
          example: '@RestController\n@RequestMapping("/api/v1/users")',
        },
        {
          command: '@GetMapping, @PostMapping, etc.',
          description: 'Shortcuts for specific HTTP methods.',
          usage: '@GetMapping("/{id}")',
          example: '@GetMapping("/{id}")\npublic User getUser(@PathVariable Long id) { ... }',
        },
        {
          command: 'ResponseEntity',
          description: 'Represents the entire HTTP response: status code, headers, and body.',
          usage: 'return new ResponseEntity<>(body, HttpStatus.OK);',
          example: 'return ResponseEntity.ok(user);\nreturn ResponseEntity.status(HttpStatus.CREATED).body(newUser);',
        },
      ],
    },
    {
      title: 'Data Layer (Spring Data JPA)',
      commands: [
        {
          command: '@Entity',
          description: 'Specifies that the class is an entity (JPA).',
          usage: '@Entity',
          example: '@Entity\npublic class User { ... }',
        },
        {
          command: '@Table',
          description: 'Specifies the primary table for the annotated entity.',
          usage: '@Table(name = "users")',
          example: '@Entity\n@Table(name = "app_users")',
        },
        {
          command: '@Id',
          description: 'Specifies the primary key of an entity.',
          usage: '@Id',
          example: '@Id\n@GeneratedValue\nprivate Long id;',
        },
        {
          command: '@GeneratedValue',
          description: 'Configures the way of increment of the specified primary key.',
          usage: '@GeneratedValue(strategy = GenerationType.IDENTITY)',
          example: '@Id\n@GeneratedValue(strategy = GenerationType.AUTO)',
        },
        {
          command: 'JpaRepository',
          description: 'Interface for generic CRUD operations on a repository for a specific type.',
          usage: 'public interface MyRepository extends JpaRepository<MyEntity, Long> {}',
          example: 'public interface UserRepository extends JpaRepository<User, Long> {\n  User findByUsername(String username);\n}',
        },
        {
          command: '@Query',
          description: 'Define custom queries directly on repository methods.',
          usage: '@Query("SELECT u FROM User u WHERE u.status = ?1")',
          example: '@Query("SELECT u FROM User u WHERE u.emailAddress = :email")\nUser findByEmail(@Param("email") String email);',
        },
      ],
    },
    {
      title: 'Configuration & Properties',
      commands: [
        {
          command: '@ConfigurationProperties',
          description: 'Binds external properties to a bean.',
          usage: '@ConfigurationProperties(prefix = "app")',
          example: '@Component\n@ConfigurationProperties(prefix = "app.datasource")\npublic class AppDataSource { ... }',
        },
        {
          command: '@EnableConfigurationProperties',
          description: 'Enables support for @ConfigurationProperties beans.',
          usage: '@EnableConfigurationProperties(AppProperties.class)',
          example: '@Configuration\n@EnableConfigurationProperties(ApiConfig.class)',
        },
        {
          command: '@Profile',
          description: 'Indicates that a component is eligible for registration when one or more specified profiles are active.',
          usage: '@Profile("production")',
          example: '@Configuration\n@Profile("dev")\npublic class DevConfig { ... }',
        },
      ],
    },
    {
      title: 'Testing',
      commands: [
        {
          command: '@SpringBootTest',
          description: 'Loads the full application context for integration tests.',
          usage: '@SpringBootTest',
          example: '@SpringBootTest\nclass MyApplicationTests {\n  @Test\n  void contextLoads() {}\n}',
        },
        {
          command: '@WebMvcTest',
          description: 'For testing the web layer (controllers) without the full application context.',
          usage: '@WebMvcTest(UserController.class)',
          example: '@WebMvcTest(UserController.class)\nclass UserWebTests { ... }',
        },
        {
          command: '@DataJpaTest',
          description: 'For testing the persistence layer (repositories).',
          usage: '@DataJpaTest',
          example: '@DataJpaTest\nclass UserRepositoryTests { ... }',
        },
        {
          command: '@MockBean',
          description: 'Adds a mock of a bean to the ApplicationContext.',
          usage: '@MockBean',
          example: '@WebMvcTest\nclass MyControllerTests {\n  @MockBean\n  private UserService userService;\n}',
        },
        {
          command: 'TestRestTemplate',
          description: 'A convenient alternative to Spring\'s RestTemplate for integration tests.',
          usage: '@Autowired private TestRestTemplate restTemplate;',
          example: 'ResponseEntity<String> response = restTemplate.getForEntity("/", String.class);',
        },
        {
          command: 'MockMvc',
          description: 'The main entry point for server-side Spring MVC test support.',
          usage: '@Autowired private MockMvc mockMvc;',
          example: 'mockMvc.perform(get("/users/1")).andExpect(status().isOk());',
        },
      ],
    },
  ],
};

