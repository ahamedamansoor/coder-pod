import { Leaf } from 'lucide-react';

export const springCheatsheet = {
  id: 'spring',
  name: 'Spring Framework',
  description: 'Core concepts and annotations for the Spring Framework (v6+)',
  icon: Leaf,
  colorTheme: 'green' as const,
  sections: [
    {
      title: 'Core Container & IoC',
      commands: [
        {
          command: '@Configuration',
          description: 'Declares a class as a source of bean definitions.',
          usage: '@Configuration',
          example: '@Configuration\npublic class AppConfig { ... }',
        },
        {
          command: '@Bean',
          description: 'Indicates that a method produces a bean to be managed by the Spring container.',
          usage: '@Bean',
          example: '@Bean\npublic MyService myService() {\n  return new MyServiceImpl();\n}',
        },
        {
          command: '@Component',
          description: 'Generic stereotype for any Spring-managed component.',
          usage: '@Component',
          example: '@Component\npublic class MyComponent { ... }',
        },
        {
          command: '@Service',
          description: 'Stereotype for service layer components.',
          usage: '@Service',
          example: '@Service\npublic class UserManagementService { ... }',
        },
        {
          command: '@Repository',
          description: 'Stereotype for persistence layer components (DAO).',
          usage: '@Repository',
          example: '@Repository\npublic class UserRepository { ... }',
        },
        {
          command: '@Autowired',
          description: 'Marks a constructor, field, or setter method to be autowired by Spring\'s dependency injection facilities.',
          usage: '@Autowired',
          example: '@Autowired\nprivate UserRepository userRepository;',
        },
        {
          command: '@Qualifier',
          description: 'Disambiguates bean references when multiple candidates are available.',
          usage: '@Qualifier("beanName")',
          example: '@Autowired\n@Qualifier("primaryDataSource")\nprivate DataSource dataSource;',
        },
        {
          command: '@Value',
          description: 'Injects values from properties files, environment variables, etc.',
          usage: '@Value("${property.name}")',
          example: '@Value("${app.version}")\nprivate String appVersion;',
        },
        {
          command: '@Scope',
          description: 'Defines the scope of a bean (e.g., singleton, prototype).',
          usage: '@Scope("prototype")',
          example: '@Bean\n@Scope("prototype")\npublic MyPrototypeBean prototypeBean() { ... }',
        },
        {
          command: '@Lazy',
          description: 'Initializes a bean lazily.',
          usage: '@Lazy',
          example: '@Lazy\n@Component\npublic class LazyComponent { ... }',
        },
        {
          command: '@Primary',
          description: 'Indicates that a bean should be given preference when multiple candidates are qualified.',
          usage: '@Primary',
          example: '@Bean\n@Primary\npublic MyService primaryService() { ... }',
        },
      ],
    },
    {
      title: 'Spring MVC (Web)',
      commands: [
        {
          command: '@Controller',
          description: 'Stereotype for presentation layer (e.g., web controllers).',
          usage: '@Controller',
          example: '@Controller\npublic class HomeController { ... }',
        },
        {
          command: '@RestController',
          description: 'A convenience annotation that combines @Controller and @ResponseBody.',
          usage: '@RestController',
          example: '@RestController\n@RequestMapping("/api/users")\npublic class UserApiController { ... }',
        },
        {
          command: '@RequestMapping',
          description: 'Maps web requests to handler methods.',
          usage: '@RequestMapping("/path")',
          example: '@RequestMapping(value = "/users", method = RequestMethod.GET)',
        },
        {
          command: '@GetMapping',
          description: 'Shortcut for @RequestMapping(method = RequestMethod.GET).',
          usage: '@GetMapping("/path")',
          example: '@GetMapping("/{id}")\npublic User getUser(@PathVariable Long id) { ... }',
        },
        {
          command: '@PostMapping',
          description: 'Shortcut for @RequestMapping(method = RequestMethod.POST).',
          usage: '@PostMapping("/path")',
          example: '@PostMapping\npublic User createUser(@RequestBody User user) { ... }',
        },
        {
          command: '@PutMapping',
          description: 'Shortcut for @RequestMapping(method = RequestMethod.PUT).',
          usage: '@PutMapping("/path")',
          example: '@PutMapping("/{id}")\npublic User updateUser(...) { ... }',
        },
        {
          command: '@DeleteMapping',
          description: 'Shortcut for @RequestMapping(method = RequestMethod.DELETE).',
          usage: '@DeleteMapping("/path")',
          example: '@DeleteMapping("/{id}")\npublic void deleteUser(...) { ... }',
        },
        {
          command: '@PathVariable',
          description: 'Binds a method parameter to a URI template variable.',
          usage: '@PathVariable',
          example: '@GetMapping("/{userId}")\npublic User getUser(@PathVariable Long userId) { ... }',
        },
        {
          command: '@RequestParam',
          description: 'Binds a method parameter to a web request parameter.',
          usage: '@RequestParam("name")',
          example: '@GetMapping("/search")\npublic List<User> search(@RequestParam String query) { ... }',
        },
        {
          command: '@RequestBody',
          description: 'Binds the HTTP request body to a method parameter.',
          usage: '@RequestBody',
          example: '@PostMapping\npublic User create(@RequestBody User newUser) { ... }',
        },
        {
          command: '@ResponseBody',
          description: 'Indicates a method return value should be bound to the web response body.',
          usage: '@ResponseBody',
          example: '@GetMapping("/hello")\n@ResponseBody\npublic String sayHello() { return "Hello"; }',
        },
        {
          command: '@ResponseStatus',
          description: 'Marks a method or exception class with the status code and reason that should be returned.',
          usage: '@ResponseStatus(HttpStatus.CREATED)',
          example: '@PostMapping\n@ResponseStatus(HttpStatus.CREATED)\npublic User create(...) { ... }',
        },
      ],
    },
    {
      title: 'Data Access & Transactions',
      commands: [
        {
          command: '@Transactional',
          description: 'Describes a transaction attribute on a method or class.',
          usage: '@Transactional',
          example: '@Service\npublic class UserService {\n  @Transactional\n  public void registerUser(User user) { ... }\n}',
        },
        {
          command: 'PlatformTransactionManager',
          description: 'The central interface in Spring\'s transaction infrastructure.',
          usage: 'PlatformTransactionManager',
          example: '// In configuration\n@Bean\npublic PlatformTransactionManager txManager(DataSource ds) { ... }',
        },
        {
          command: 'JdbcTemplate',
          description: 'Simplifies use of JDBC and helps to avoid common errors.',
          usage: 'JdbcTemplate',
          example: 'jdbcTemplate.query("SELECT ...", rowMapper);',
        },
      ],
    },
    {
      title: 'Aspect-Oriented Programming (AOP)',
      commands: [
        {
          command: '@Aspect',
          description: 'Declares a class as an aspect.',
          usage: '@Aspect',
          example: '@Aspect\n@Component\npublic class LoggingAspect { ... }',
        },
        {
          command: '@Before',
          description: 'Advice that executes before a join point.',
          usage: '@Before("execution(* com.example.service.*.*(..))")',
          example: '@Before("execution(* com.example.service.UserService.findUser(..))")\npublic void logBefore(JoinPoint joinPoint) { ... }',
        },
        {
          command: '@After',
          description: 'Advice that executes after a join point (finally).',
          usage: '@After("pointcut_expression")',
          example: '@After("execution(* com.example..*.*(..))")\npublic void logAfter() { ... }',
        },
        {
          command: '@AfterReturning',
          description: 'Advice to be executed after a join point completes normally.',
          usage: '@AfterReturning(pointcut="...", returning="result")',
          example: '@AfterReturning(pointcut="...", returning="retVal")\npublic void logResult(Object retVal) { ... }',
        },
        {
          command: '@AfterThrowing',
          description: 'Advice to be executed if a method throws an exception.',
          usage: '@AfterThrowing(pointcut="...", throwing="error")',
          example: '@AfterThrowing(pointcut="...", throwing="ex")\npublic void logError(Exception ex) { ... }',
        },
        {
          command: '@Around',
          description: 'Advice that surrounds a join point such as a method invocation.',
          usage: '@Around("pointcut_expression")',
          example: '@Around("execution(* com.example..*.*(..))")\npublic Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable { ... }',
        },
        {
          command: '@Pointcut',
          description: 'A named expression that selects join points.',
          usage: '@Pointcut("execution(...)")',
          example: '@Pointcut("within(com.example.web..*)")\npublic void webLayer() {}',
        },
      ],
    },
  ],
};

