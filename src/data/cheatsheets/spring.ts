import { Leaf } from 'lucide-react';

export const springCheatsheet = {
  id: 'spring',
  name: 'Spring Framework',
  description: 'Master Spring Framework from basics to advanced concepts',
  icon: Leaf,
  colorTheme: 'green' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Spring',
      commands: [
        {
          command: 'What is Spring?',
          description: 'Spring Framework makes Java development easier',
          usage: 'Framework for building enterprise applications',
          example: 'Spring is a lightweight framework that helps you:\n• Build enterprise applications quickly\n• Manage dependencies automatically\n• Create secure, scalable applications\n• Reduce boilerplate code\n• Follow best practices',
        },
        {
          command: 'Spring vs Spring Boot',
          description: 'Understanding the difference',
          usage: 'Spring Framework vs Spring Boot',
          example: 'Spring Framework:\n• Core framework with IoC container\n• Requires manual configuration\n• More flexible but complex setup\n\nSpring Boot:\n• Built on top of Spring Framework\n• Auto-configuration and opinionated setup\n• Quick start with minimal configuration\n• Includes embedded server\n\nChoose Spring Boot for new projects!',
        },
        {
          command: 'Core Concepts',
          description: 'Essential Spring concepts explained simply',
          usage: 'IoC, DI, Beans, ApplicationContext',
          example: 'IoC (Inversion of Control):\n• Spring manages object creation\n• You don\'t create objects with "new"\n• Spring creates and injects dependencies\n\nDI (Dependency Injection):\n• Spring provides dependencies to objects\n• Makes code loosely coupled\n• Easier to test and maintain\n\nBeans:\n• Objects managed by Spring\n• Have a lifecycle (creation, use, destruction)\n• Can be configured in different ways\n\nApplicationContext:\n• Spring container that manages beans\n• Provides configuration and wiring',
        },
        {
          command: 'Create First Spring Boot App',
          description: 'Quick start with Spring Boot',
          usage: 'Use Spring Initializr or CLI',
          example: '# Method 1: Spring Initializr (Web)\n1. Go to start.spring.io\n2. Select:\n   • Project: Maven\n   • Language: Java\n   • Spring Boot: 3.x\n   • Dependencies: Spring Web\n3. Click Generate and download\n4. Extract and open in IDE\n5. Run the main class\n\n# Method 2: CLI\n# Install Spring Boot CLI first\ncurl -s https://start.spring.io | bash\n\n# Create new project\nspring init --dependencies=web my-app\ncd my-app\n./mvnw spring-boot:run\n\n# Your first Spring Boot app is running!',
        },
        {
          command: 'Project Structure',
          description: 'Understanding Spring Boot project layout',
          usage: 'Standard directory structure',
          example: 'my-spring-app/\n├── src/\n│   ├── main/\n│   │   ├── java/\n│   │   │   └── com/example/myapp/\n│   │   │       ├── MyApplication.java  # Main class\n│   │   │       ├── controller/          # Web controllers\n│   │   │       ├── service/             # Business logic\n│   │   │       ├── repository/          # Data access\n│   │   │       └── model/               # Data models\n│   │   └── resources/\n│   │       ├── application.properties  # Configuration\n│   │       ├── static/                  # CSS, JS, images\n│   │       └── templates/               # HTML templates\n│   └── test/                           # Test classes\n├── pom.xml                             # Maven dependencies\n└── README.md',
        },
      ],
    },
    {
      title: 'Core Annotations',
      commands: [
        {
          command: '@SpringBootApplication',
          description: 'Main annotation for Spring Boot apps',
          usage: 'Combines @Configuration, @EnableAutoConfiguration, @ComponentScan',
          example: '@SpringBootApplication\npublic class MyApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n}\n\n# What it does:\n# • Enables auto-configuration\n# • Scans for components in current package\n# • Registers configuration classes\n# • Starts the embedded server',
        },
        {
          command: '@Component',
          description: 'Mark any class as a Spring bean',
          usage: '@Component on any class',
          example: '@Component\npublic class EmailService {\n    public void sendEmail(String to, String message) {\n        System.out.println("Sending email to: " + to);\n    }\n}\n\n# Spring will automatically create and manage this bean\n# Can be injected into other classes using @Autowired',
        },
        {
          command: '@Service',
          description: 'Mark service layer classes',
          usage: '@Service for business logic',
          example: '@Service\npublic class UserService {\n    public User createUser(String name, String email) {\n        // Business logic to create user\n        return new User(name, email);\n    }\n    \n    public User getUserById(Long id) {\n        // Business logic to get user\n        return userRepository.findById(id);\n    }\n}\n\n# Same as @Component but more descriptive\n# Indicates this class contains business logic',
        },
        {
          command: '@Repository',
          description: 'Mark data access layer classes',
          usage: '@Repository for database operations',
          example: '@Repository\npublic class UserRepository {\n    public User findById(Long id) {\n        // Database query to find user\n        return jdbcTemplate.queryForObject(\n            "SELECT * FROM users WHERE id = ?", \n            new Object[]{id}, \n            new UserRowMapper()\n        );\n    }\n    \n    public void save(User user) {\n        // Database operation to save user\n        jdbcTemplate.update(\n            "INSERT INTO users (name, email) VALUES (?, ?)",\n            user.getName(), user.getEmail()\n        );\n    }\n}\n\n# Same as @Component but indicates data access layer\n# Enables exception translation for database errors',
        },
        {
          command: '@Controller',
          description: 'Mark web controller classes',
          usage: '@Controller for web endpoints',
          example: '@Controller\npublic class HomeController {\n    @GetMapping("/home")\n    public String home() {\n        return "home";  // Returns view name\n    }\n    \n    @GetMapping("/about")\n    public String about(Model model) {\n        model.addAttribute("message", "About us");\n        return "about";\n    }\n}\n\n# Handles HTTP requests and returns views\n# Use @RestController for REST APIs',
        },
        {
          command: '@Autowired',
          description: 'Inject dependencies automatically',
          usage: '@Autowired on fields, constructors, or methods',
          example: '@Service\npublic class OrderService {\n    @Autowired\n    private UserService userService;  // Field injection\n    \n    @Autowired\n    private EmailRepository emailRepository;  // Field injection\n    \n    // Constructor injection (recommended)\n    @Autowired\n    public OrderService(UserService userService) {\n        this.userService = userService;\n    }\n    \n    // Setter injection\n    @Autowired\n    public void setUserService(UserService userService) {\n        this.userService = userService;\n    }\n}\n\n# Spring automatically provides the required dependencies\n# Constructor injection is recommended for better testing',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Dependency Injection',
      commands: [
        {
          command: 'Constructor Injection',
          description: 'Inject dependencies through constructor (recommended)',
          usage: '@Autowired on constructor',
          example: '@Service\npublic class ProductService {\n    private final ProductRepository repository;\n    private final EmailService emailService;\n    \n    @Autowired\n    public ProductService(\n        ProductRepository repository,\n        EmailService emailService\n    ) {\n        this.repository = repository;\n        this.emailService = emailService;\n    }\n    \n    public Product createProduct(String name) {\n        Product product = new Product(name);\n        Product saved = repository.save(product);\n        emailService.sendProductNotification(saved);\n        return saved;\n    }\n}\n\n# Benefits:\n# • Dependencies are required (cannot be null)\n# • Easier to test (can mock dependencies)\n# • Immutable dependencies (final fields)\n# • Clear dependencies in constructor',
        },
        {
          command: 'Field Injection',
          description: 'Inject dependencies directly into fields',
          usage: '@Autowired on fields',
          example: '@Service\npublic class ProductService {\n    @Autowired\n    private ProductRepository repository;\n    \n    @Autowired\n    private EmailService emailService;\n    \n    public Product createProduct(String name) {\n        Product product = new Product(name);\n        Product saved = repository.save(product);\n        emailService.sendProductNotification(saved);\n        return saved;\n    }\n}\n\n# Benefits:\n# • Less code\n# • Simple to write\n\n# Drawbacks:\n# • Harder to test\n# • Dependencies can be null\n# • Not immutable\n# • Hidden dependencies',
        },
        {
          command: 'Setter Injection',
          description: 'Inject dependencies through setter methods',
          usage: '@Autowired on setter methods',
          example: '@Service\npublic class ProductService {\n    private ProductRepository repository;\n    private EmailService emailService;\n    \n    @Autowired\n    public void setProductRepository(ProductRepository repository) {\n        this.repository = repository;\n    }\n    \n    @Autowired\n    public void setEmailService(EmailService emailService) {\n        this.emailService = emailService;\n    }\n    \n    public Product createProduct(String name) {\n        Product product = new Product(name);\n        Product saved = repository.save(product);\n        emailService.sendProductNotification(saved);\n        return saved;\n    }\n}\n\n# Benefits:\n# • Can be called multiple times\n# • Can be used for optional dependencies\n\n# Use when dependencies are optional or can change',
        },
        {
          command: '@Qualifier',
          description: 'Specify which bean to inject when multiple exist',
          usage: '@Qualifier with @Autowired',
          example: '@Service\npublic class NotificationService {\n    @Autowired\n    @Qualifier("emailService")\n    private MessageService emailService;\n    \n    @Autowired\n    @Qualifier("smsService")\n    private MessageService smsService;\n}\n\n// Multiple implementations of same interface\n@Service("emailService")\npublic class EmailService implements MessageService { ... }\n\n@Service("smsService")\npublic class SmsService implements MessageService { ... }\n\n# @Qualifier tells Spring which specific bean to use\n# Use when you have multiple beans of the same type',
        },
        {
          command: '@Primary',
          description: 'Mark a bean as primary when multiple exist',
          usage: '@Primary on bean definition',
          example: '@Service\n@Primary\npublic class EmailService implements MessageService {\n    public void sendMessage(String message) {\n        System.out.println("Email: " + message);\n    }\n}\n\n@Service\npublic class SmsService implements MessageService {\n    public void sendMessage(String message) {\n        System.out.println("SMS: " + message);\n    }\n}\n\n@Service\npublic class NotificationService {\n    @Autowired\n    private MessageService messageService;  // Will get EmailService\n}\n\n# @Primary marks EmailService as default choice\n# Use @Qualifier to override when needed',
        },
      ],
    },
    {
      title: 'Spring MVC - Web Development',
      commands: [
        {
          command: '@RestController',
          description: 'Create REST API controllers',
          usage: '@RestController combines @Controller and @ResponseBody',
          example: '@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n    \n    @GetMapping\n    public List<User> getAllUsers() {\n        return userService.findAll();\n    }\n    \n    @GetMapping("/{id}")\n    public User getUserById(@PathVariable Long id) {\n        return userService.findById(id);\n    }\n    \n    @PostMapping\n    public User createUser(@RequestBody User user) {\n        return userService.save(user);\n    }\n    \n    @PutMapping("/{id}")\n    public User updateUser(@PathVariable Long id, @RequestBody User user) {\n        return userService.update(id, user);\n    }\n    \n    @DeleteMapping("/{id}")\n    public void deleteUser(@PathVariable Long id) {\n        userService.delete(id);\n    }\n}\n\n# @RestController:\n# • Combines @Controller and @ResponseBody\n# • Automatically converts return values to JSON\n# • Handles HTTP requests and responses',
        },
        {
          command: 'HTTP Mapping Annotations',
          description: 'Map HTTP methods to controller methods',
          usage: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping',
          example: '@RestController\npublic class ProductController {\n    \n    @GetMapping("/products")           // GET /products\n    public List<Product> getAll() { ... }\n    \n    @GetMapping("/products/{id}")      // GET /products/123\n    public Product getById(@PathVariable Long id) { ... }\n    \n    @PostMapping("/products")          // POST /products\n    public Product create(@RequestBody Product product) { ... }\n    \n    @PutMapping("/products/{id}")      // PUT /products/123\n    public Product update(@PathVariable Long id, \n                         @RequestBody Product product) { ... }\n    \n    @DeleteMapping("/products/{id}")   // DELETE /products/123\n    public void delete(@PathVariable Long id) { ... }\n    \n    @PatchMapping("/products/{id}")    // PATCH /products/123\n    public Product patch(@PathVariable Long id, \n                       @RequestBody Product updates) { ... }\n}\n\n# Each annotation handles specific HTTP method\n# @RequestMapping can be used for all methods',
        },
        {
          command: '@RequestMapping',
          description: 'General mapping annotation for controllers and methods',
          usage: '@RequestMapping with path and method',
          example: '@RestController\n@RequestMapping("/api/v1")\npublic class ApiController {\n    \n    @RequestMapping(value = "/users", method = RequestMethod.GET)\n    public List<User> getUsers() { ... }\n    \n    @RequestMapping(value = "/users", method = RequestMethod.POST)\n    public User createUser(@RequestBody User user) { ... }\n    \n    // Class-level mapping + method-level mapping\n    @RequestMapping("/users/{id}")\n    @GetMapping\n    public User getUser(@PathVariable Long id) { ... }\n    \n    @RequestMapping("/users/{id}")\n    @PutMapping\n    public User updateUser(@PathVariable Long id, @RequestBody User user) { ... }\n}\n\n# @RequestMapping:\n# • Can be used at class level (base path)\n# • Can be used at method level\n# • More verbose but more flexible\n# • Use specific annotations (@GetMapping, etc.) for cleaner code',
        },
        {
          command: '@PathVariable',
          description: 'Get values from URL path',
          usage: '@PathVariable in method parameters',
          example: '@RestController\n@RequestMapping("/api")\npublic class UserController {\n    \n    // Single path variable\n    @GetMapping("/users/{id}")\n    public User getUser(@PathVariable Long id) {\n        return userService.findById(id);\n    }\n    \n    // Multiple path variables\n    @GetMapping("/users/{userId}/orders/{orderId}")\n    public Order getUserOrder(@PathVariable Long userId, \n                             @PathVariable Long orderId) {\n        return orderService.findByUserAndId(userId, orderId);\n    }\n    \n    // Custom variable name\n    @GetMapping("/users/{userId}")\n    public User getUser(@PathVariable("userId") Long identifier) {\n        return userService.findById(identifier);\n    }\n}\n\n# @PathVariable extracts values from URL path\n# Variable names must match between {} and parameter name\n# Use @PathVariable("name") to specify different parameter name',
        },
        {
          command: '@RequestParam',
          description: 'Get values from query parameters',
          usage: '@RequestParam in method parameters',
          example: '@RestController\npublic class SearchController {\n    \n    // Required parameter\n    @GetMapping("/search")\n    public List<Product> search(@RequestParam String query) {\n        return productService.search(query);\n    }\n    \n    // Optional parameter with default value\n    @GetMapping("/products")\n    public List<Product> getProducts(\n        @RequestParam(defaultValue = "0") int page,\n        @RequestParam(defaultValue = "10") int size\n    ) {\n        return productService.findAll(page, size);\n    }\n    \n    // Optional parameter (can be null)\n    @GetMapping("/filter")\n    public List<Product> filter(\n        @RequestParam(required = false) String category,\n        @RequestParam(required = false) Double minPrice\n    ) {\n        return productService.filter(category, minPrice);\n    }\n    \n    // Multiple values for same parameter\n    @GetMapping("/products/ids")\n    public List<Product> getProductsByIds(@RequestParam List<Long> ids) {\n        return productService.findByIds(ids);\n    }\n}\n\n# @RequestParam extracts values from query string\n# Use required=false for optional parameters\n# Use defaultValue for default values',
        },
        {
          command: '@RequestBody',
          description: 'Get JSON data from request body',
          usage: '@RequestBody in method parameters',
          example: '@RestController\npublic class UserController {\n    \n    @PostMapping("/users")\n    public User createUser(@RequestBody User user) {\n        return userService.save(user);\n    }\n    \n    // With validation\n    @PostMapping("/users/validated")\n    public User createUserValidated(@Valid @RequestBody User user) {\n        return userService.save(user);\n    }\n    \n    // Optional request body\n    @PutMapping("/users/{id}")\n    public User updateUser(@PathVariable Long id, \n                         @RequestBody(required = false) User updates) {\n        return userService.update(id, updates);\n    }\n}\n\n# @RequestBody:\n# • Automatically converts JSON to Java objects\n# • Requires Jackson library (included with Spring Web)\n# • Use @Valid for validation\n# • Use required=false for optional body',
        },
        {
          command: '@ResponseBody',
          description: 'Return JSON data instead of view name',
          usage: '@ResponseBody on controller methods',
          example: '@Controller  // Not @RestController\npublic class DataController {\n    \n    @GetMapping("/data")\n    @ResponseBody  // Return JSON, not view name\n    public Map<String, Object> getData() {\n        Map<String, Object> data = new HashMap<>();\n        data.put("message", "Hello World");\n        data.put("timestamp", System.currentTimeMillis());\n        return data;\n    }\n    \n    @GetMapping("/text")\n    @ResponseBody  // Return plain text\n    public String getText() {\n        return "This is plain text response";\n    }\n}\n\n# @ResponseBody:\n# • Converts return value to HTTP response body\n# • Used with @Controller (not needed with @RestController)\n# • Automatically handles JSON conversion\n# • Can return any type (objects, strings, etc.)',
        },
      ],
    },
    {
      title: 'Spring Data JPA',
      commands: [
        {
          command: '@Entity',
          description: 'Mark class as database entity',
          usage: '@Entity for JPA entities',
          example: '@Entity\n@Table(name = "users")\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @Column(name = "username", nullable = false, unique = true)\n    private String username;\n    \n    @Column(name = "email", nullable = false)\n    private String email;\n    \n    @Column(name = "created_at")\n    @Temporal(TemporalType.TIMESTAMP)\n    private Date createdAt;\n    \n    @Column(name = "is_active")\n    private boolean active = true;\n    \n    // Constructors, getters, setters\n    public User() {}\n    \n    public User(String username, String email) {\n        this.username = username;\n        this.email = email;\n        this.createdAt = new Date();\n    }\n    \n    // Getters and setters...\n}\n\n# @Entity:\n# • Marks class as JPA entity (maps to database table)\n# • @Table specifies table name\n# • @Id marks primary key\n# • @GeneratedValue auto-generates ID values\n# • @Column maps fields to table columns',
        },
        {
          command: 'JpaRepository',
          description: 'Repository interface for database operations',
          usage: 'Extend JpaRepository for CRUD operations',
          example: '@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    \n    // Custom query methods\n    Optional<User> findByUsername(String username);\n    \n    List<User> findByEmailContaining(String email);\n    \n    List<User> findByActiveTrue();\n    \n    // Query with parameters\n    List<User> findByUsernameAndActive(String username, boolean active);\n    \n    // Count queries\n    long countByActive(boolean active);\n    \n    // Delete queries\n    void deleteByUsername(String username);\n    \n    // Custom JPQL query\n    @Query("SELECT u FROM User u WHERE u.email LIKE %:email%")\n    List<User> findByEmailLike(@Param("email") String email);\n    \n    // Native SQL query\n    @Query(value = "SELECT * FROM users WHERE created_at > :date", nativeQuery = true)\n    List<User> findUsersCreatedAfter(@Param("date") Date date);\n    \n    // Modifying query\n    @Modifying\n    @Query("UPDATE User u SET u.active = false WHERE u.id = :id")\n    void deactivateUser(@Param("id") Long id);\n}\n\n# JpaRepository provides:\n# • save(), findById(), findAll(), deleteById()\n# • Custom query methods based on method names\n# • Pagination and sorting support\n# • Transaction management',
        },
        {
          command: '@Transactional',
          description: 'Manage database transactions',
          usage: '@Transactional on service methods',
          example: '@Service\npublic class BankingService {\n    \n    @Autowired\n    private AccountRepository accountRepository;\n    \n    @Transactional  // Default: required, read-write\n    public void transferMoney(Long fromId, Long toId, BigDecimal amount) {\n        Account fromAccount = accountRepository.findById(fromId)\n            .orElseThrow(() -> new RuntimeException("Account not found"));\n        Account toAccount = accountRepository.findById(toId)\n            .orElseThrow(() -> new RuntimeException("Account not found"));\n        \n        if (fromAccount.getBalance().compareTo(amount) < 0) {\n            throw new RuntimeException("Insufficient funds");\n        }\n        \n        fromAccount.setBalance(fromAccount.getBalance().subtract(amount));\n        toAccount.setBalance(toAccount.getBalance().add(amount));\n        \n        accountRepository.save(fromAccount);\n        accountRepository.save(toAccount);\n    }\n    \n    @Transactional(readOnly = true)  // Read-only transaction\n    public BigDecimal getBalance(Long accountId) {\n        return accountRepository.findById(accountId)\n            .map(Account::getBalance)\n            .orElse(BigDecimal.ZERO);\n    }\n    \n    @Transactional(propagation = Propagation.REQUIRES_NEW)\n    public void logTransaction(String message) {\n        // Always runs in new transaction\n        System.out.println("Logging: " + message);\n    }\n}\n\n# @Transactional:\n# • Begins transaction before method execution\n# • Commits if successful, rolls back if exception\n# • readOnly=true for read-only operations\n# • Controls transaction propagation behavior',
        },
        {
          command: 'Database Configuration',
          description: 'Configure database connection in application.properties',
          usage: 'spring.datasource properties',
          example: '# H2 Database (in-memory)\nspring.datasource.url=jdbc:h2:mem:testdb\nspring.datasource.driverClassName=org.h2.Driver\nspring.datasource.username=sa\nspring.datasource.password=password\nspring.h2.console.enabled=true\n\n# MySQL Database\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb\nspring.datasource.username=root\nspring.datasource.password=password\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n\n# PostgreSQL Database\nspring.datasource.url=jdbc:postgresql://localhost:5432/mydb\nspring.datasource.username=postgres\nspring.datasource.password=password\nspring.datasource.driver-class-name=org.postgresql.Driver\n\n# JPA/Hibernate Settings\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.format_sql=true\nspring.jpa.defer-datasource-initialization=true\n\n# Connection Pool (HikariCP)\nspring.datasource.hikari.connection-timeout=20000\nspring.datasource.hikari.maximum-pool-size=10\n\n# Database Initialization\nspring.sql.init.mode=always\nspring.sql.init.data-locations=classpath:data.sql',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Spring Security',
      commands: [
        {
          command: 'Basic Security Setup',
          description: 'Add Spring Security to your application',
          usage: 'Add dependency and configure security',
          example: '# Add to pom.xml\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n# Basic security configuration\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    \n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers("/public/**").permitAll()\n                .requestMatchers("/admin/**").hasRole("ADMIN")\n                .anyRequest().authenticated()\n            )\n            .formLogin(withDefaults())\n            .logout(logout -> logout\n                .logoutSuccessUrl("/login")\n                .permitAll()\n            );\n        return http.build();\n    }\n    \n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n}\n\n# Default user (for testing)\n# Username: user\n# Password: (printed in console on startup)',
        },
        {
          command: 'User Authentication',
          description: 'Custom user authentication',
          usage: 'UserDetailsService and password encoding',
          example: '@Service\npublic class CustomUserDetailsService implements UserDetailsService {\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    @Override\n    public UserDetails loadUserByUsername(String username) \n            throws UsernameNotFoundException {\n        User user = userRepository.findByUsername(username)\n            .orElseThrow(() -> new UsernameNotFoundException("User not found"));\n        \n        return org.springframework.security.core.userdetails.User.builder()\n                .username(user.getUsername())\n                .password(user.getPassword())\n                .roles(user.getRoles().toArray(new String[0]))\n                .build();\n    }\n}\n\n# Password encoding in service\n@Service\npublic class UserService {\n    \n    @Autowired\n    private PasswordEncoder passwordEncoder;\n    \n    public User createUser(String username, String password, String... roles) {\n        String encodedPassword = passwordEncoder.encode(password);\n        User user = new User(username, encodedPassword, Arrays.asList(roles));\n        return userRepository.save(user);\n    }\n}',
        },
        {
          command: 'Method Security',
          description: 'Secure methods with annotations',
          usage: '@PreAuthorize, @PostAuthorize, @Secured',
          example: '@Configuration\n@EnableMethodSecurity(prePostEnabled = true)\npublic class MethodSecurityConfig {\n    // Configuration for method-level security\n}\n\n@Service\npublic class DocumentService {\n    \n    @PreAuthorize("hasRole(\'USER\')")\n    public Document getDocument(Long id) {\n        return documentRepository.findById(id);\n    }\n    \n    @PreAuthorize("hasRole(\'ADMIN\') or #userId == authentication.principal.id")\n    public Document getDocumentForUser(Long documentId, Long userId) {\n        return documentRepository.findByIdAndUserId(documentId, userId);\n    }\n    \n    @PostAuthorize("returnObject.owner == authentication.principal.username")\n    public Document getDocument(Long id) {\n        return documentRepository.findById(id);\n    }\n    \n    @Secured("ROLE_ADMIN")\n    public void deleteDocument(Long id) {\n        documentRepository.deleteById(id);\n    }\n    \n    @PreAuthorize("hasPermission(#document, \'WRITE\')")\n    public void updateDocument(@P("document") Document document) {\n        documentRepository.save(document);\n    }\n}',
        },
        {
          command: 'JWT Authentication',
          description: 'JSON Web Token authentication',
          usage: 'Generate and validate JWT tokens',
          example: '@Component\npublic class JwtTokenProvider {\n    \n    private String jwtSecret = "yourSecretKey";\n    private int jwtExpirationInMs = 36000;\n    \n    public String generateToken(Authentication authentication) {\n        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();\n        \n        Date expiryDate = new Date(System.currentTimeMillis() + jwtExpirationInMs);\n        \n        return Jwts.builder()\n                .setSubject(userPrincipal.getUsername())\n                .setIssuedAt(new Date())\n                .setExpiration(expiryDate)\n                .signWith(SignatureAlgorithm.HS512, jwtSecret)\n                .compact();\n    }\n    \n    public String getUsernameFromJWT(String token) {\n        Claims claims = Jwts.parser()\n                .setSigningKey(jwtSecret)\n                .parseClaimsJws(token)\n                .getBody();\n        return claims.getSubject();\n    }\n    \n    public boolean validateToken(String token) {\n        try {\n            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);\n            return true;\n        } catch (Exception ex) {\n            return false;\n        }\n    }\n}\n\n# JWT Authentication Filter\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n    \n    @Autowired\n    private JwtTokenProvider tokenProvider;\n    \n    @Override\n    protected void doFilterInternal(HttpServletRequest request, \n                                  HttpServletResponse response, \n                                  FilterChain filterChain) throws ServletException, IOException {\n        try {\n            String jwt = getJwtFromRequest(request);\n            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {\n                String username = tokenProvider.getUsernameFromJWT(jwt);\n                UserDetails userDetails = customUserDetailsService.loadUserByUsername(username);\n                UsernamePasswordAuthenticationToken authentication = \n                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());\n                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));\n                SecurityContextHolder.getContext().setAuthentication(authentication);\n            }\n        } catch (Exception ex) {\n            logger.error("Could not set user authentication in security context", ex);\n        }\n        filterChain.doFilter(request, response);\n    }\n}',
        },
      ],
    },
    {
      title: 'Spring Boot Advanced Features',
      commands: [
        {
          command: 'Configuration Properties',
          description: 'Type-safe configuration binding',
          usage: '@ConfigurationProperties',
          example: '@Configuration\n@ConfigurationProperties(prefix = "app")\npublic class AppProperties {\n    private String name;\n    private String version;\n    private Security security = new Security();\n    private final Database database = new Database();\n    \n    // Getters and setters\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    \n    public static class Security {\n        private String secretKey;\n        private int tokenExpiration = 3600;\n        \n        // Getters and setters\n        public String getSecretKey() { return secretKey; }\n        public void setSecretKey(String secretKey) { this.secretKey = secretKey; }\n    }\n    \n    public static class Database {\n        private String url;\n        private String username;\n        private String password;\n        \n        // Getters and setters\n        public String getUrl() { return url; }\n        public void setUrl(String url) { this.url = url; }\n    }\n}\n\n# application.properties\napp.name=MyApplication\napp.version=1.0.0\napp.security.secret-key=mySecretKey\napp.security.token-expiration=7200\napp.database.url=jdbc:mysql://localhost:3306/mydb\napp.database.username=root\napp.database.password=password\n\n# Enable configuration properties\n@ConfigurationPropertiesScan\n@SpringBootApplication\npublic class MyApplication { ... }',
        },
        {
          command: 'Profiles',
          description: 'Environment-specific configuration',
          usage: '@Profile and spring.profiles.active',
          example: '@Configuration\n@Profile("development")\npublic class DevConfig {\n    \n    @Bean\n    public DataSource dataSource() {\n        return new EmbeddedDatabaseBuilder()\n                .setType(EmbeddedDatabaseType.H2)\n                .addScript("schema.sql")\n                .addScript("test-data.sql")\n                .build();\n    }\n}\n\n@Configuration\n@Profile("production")\npublic class ProdConfig {\n    \n    @Bean\n    public DataSource dataSource() {\n        DriverManagerDataSource dataSource = new DriverManagerDataSource();\n        dataSource.setUrl("jdbc:mysql://prod-server:3306/proddb");\n        dataSource.setUsername("produser");\n        dataSource.setPassword("prodpassword");\n        return dataSource;\n    }\n}\n\n# application.properties\nspring.profiles.active=development\n\n# Or use command line\njava -jar myapp.jar --spring.profiles.active=production\n\n# Profile-specific properties files\n# application-development.properties\n# application-production.properties\n# application-test.properties',
        },
        {
          command: 'Actuator',
          description: 'Application monitoring and management',
          usage: 'Spring Boot Actuator endpoints',
          example: '# Add to pom.xml\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n# application.properties\nmanagement.endpoints.web.exposure.include=health,info,metrics,env\nmanagement.endpoint.health.show-details=always\nmanagement.info.env.enabled=true\n\n# Available endpoints:\n# /actuator/health - Application health\n# /actuator/info - Application information\n# /actuator/metrics - Application metrics\n# /actuator/env - Environment properties\n# /actuator/loggers - Logger configuration\n# /actuator/threaddump - Thread dump\n# /actuator/heapdump - Heap dump\n\n# Custom health indicator\n@Component\npublic class CustomHealthIndicator implements HealthIndicator {\n    \n    @Override\n    public Health health() {\n        // Check external service or database\n        boolean isHealthy = checkExternalService();\n        \n        if (isHealthy) {\n            return Health.up()\n                    .withDetail("service", "Available")\n                    .build();\n        } else {\n            return Health.down()\n                    .withDetail("service", "Unavailable")\n                    .build();\n        }\n    }\n    \n    private boolean checkExternalService() {\n        // Implementation to check external service\n        return true;\n    }\n}',
        },
        {
          command: 'Exception Handling',
          description: 'Global exception handling with @ControllerAdvice',
          usage: '@ControllerAdvice and @ExceptionHandler',
          example: '@ControllerAdvice\npublic class GlobalExceptionHandler {\n    \n    // Handle specific exceptions\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleResourceNotFound(\n            ResourceNotFoundException ex) {\n        ErrorResponse error = new ErrorResponse(\n            "RESOURCE_NOT_FOUND",\n            ex.getMessage()\n        );\n        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);\n    }\n    \n    // Handle validation exceptions\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ErrorResponse> handleValidationExceptions(\n            MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getAllErrors().forEach((error) -> {\n            String fieldName = ((FieldError) error).getField();\n            String errorMessage = error.getDefaultMessage();\n            errors.put(fieldName, errorMessage);\n        });\n        \n        ErrorResponse error = new ErrorResponse(\n            "VALIDATION_FAILED",\n            "Validation failed",\n            errors\n        );\n        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);\n    }\n    \n    // Handle all other exceptions\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<ErrorResponse> handleGlobalException(\n            Exception ex) {\n        ErrorResponse error = new ErrorResponse(\n            "INTERNAL_SERVER_ERROR",\n            "An unexpected error occurred"\n        );\n        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}\n\n# Custom exception class\n@ResponseStatus(HttpStatus.NOT_FOUND)\npublic class ResourceNotFoundException extends RuntimeException {\n    public ResourceNotFoundException(String message) {\n        super(message);\n    }\n}',
        },
      ],
    },
    {
      title: 'Spring Testing',
      commands: [
        {
          command: '@SpringBootTest',
          description: 'Integration testing for Spring Boot applications',
          usage: '@SpringBootTest for full application testing',
          example: '@SpringBootTest\n@AutoConfigureMockMvc\n@Transactional\npublic class UserControllerIntegrationTest {\n    \n    @Autowired\n    private MockMvc mockMvc;\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    @Test\n    public void getAllUsers_ShouldReturnAllUsers() throws Exception {\n        // Given\n        User user1 = new User("user1", "user1@example.com");\n        User user2 = new User("user2", "user2@example.com");\n        userRepository.save(user1);\n        userRepository.save(user2);\n        \n        // When & Then\n        mockMvc.perform(get("/api/users"))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andExpect(jsonPath("$", hasSize(2)))\n                .andExpect(jsonPath("$[0].username", is("user1")))\n                .andExpect(jsonPath("$[1].username", is("user2")));\n    }\n    \n    @Test\n    public void createUser_ShouldReturnCreatedUser() throws Exception {\n        // Given\n        String userJson = "{\\"username\\": \\"newuser\\", \\"email\\": \\"newuser@example.com\\"}";\n        \n        // When & Then\n        mockMvc.perform(post("/api/users")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(userJson))\n                .andExpect(status().isCreated())\n                .andExpect(jsonPath("$.username", is("newuser")))\n                .andExpect(jsonPath("$.email", is("newuser@example.com")));\n    }\n}',
        },
        {
          command: '@WebMvcTest',
          description: 'Unit testing for web layer',
          usage: '@WebMvcTest for controller testing',
          example: '@WebMvcTest(UserController.class)\npublic class UserControllerUnitTest {\n    \n    @Autowired\n    private MockMvc mockMvc;\n    \n    @MockBean\n    private UserService userService;\n    \n    @Test\n    public void getUserById_ShouldReturnUser() throws Exception {\n        // Given\n        User user = new User(1L, "testuser", "test@example.com");\n        when(userService.findById(1L)).thenReturn(Optional.of(user));\n        \n        // When & Then\n        mockMvc.perform(get("/api/users/1"))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andExpect(jsonPath("$.username", is("testuser")))\n                .andExpect(jsonPath("$.email", is("test@example.com")));\n        \n        verify(userService, times(1)).findById(1L);\n    }\n    \n    @Test\n    public void getUserById_NotFound_ShouldReturn404() throws Exception {\n        // Given\n        when(userService.findById(1L)).thenReturn(Optional.empty());\n        \n        // When & Then\n        mockMvc.perform(get("/api/users/1"))\n                .andExpect(status().isNotFound());\n        \n        verify(userService, times(1)).findById(1L);\n    }\n}',
        },
        {
          command: '@DataJpaTest',
          description: 'Testing JPA repositories',
          usage: '@DataJpaTest for repository testing',
          example: '@DataJpaTest\n@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)\npublic class UserRepositoryTest {\n    \n    @Autowired\n    private TestEntityManager entityManager;\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    @Test\n    public void whenFindByUsername_thenReturnUser() {\n        // Given\n        User user = new User("testuser", "test@example.com");\n        entityManager.persist(user);\n        entityManager.flush();\n        \n        // When\n        Optional<User> found = userRepository.findByUsername("testuser");\n        \n        // Then\n        assertThat(found.isPresent()).isTrue();\n        assertThat(found.get().getUsername()).isEqualTo("testuser");\n    }\n    \n    @Test\n    public void whenFindByEmailContaining_thenReturnUsers() {\n        // Given\n        User user1 = new User("user1", "user1@test.com");\n        User user2 = new User("user2", "user2@test.com");\n        User user3 = new User("user3", "user3@example.org");\n        entityManager.persist(user1);\n        entityManager.persist(user2);\n        entityManager.persist(user3);\n        entityManager.flush();\n        \n        // When\n        List<User> found = userRepository.findByEmailContaining("@test.com");\n        \n        // Then\n        assertThat(found).hasSize(2);\n        assertThat(found).extracting(User::getUsername)\n                   .containsExactlyInAnyOrder("user1", "user2");\n    }\n}',
        },
      ],
    },
  ],
};
