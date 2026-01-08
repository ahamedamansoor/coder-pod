import React from 'react';
import { ChevronRight, Code, FileText, GitBranch, CheckCircle, AlertTriangle, Info, Settings, Zap, Shield, Database, Users } from 'lucide-react';

const BehaviorDrivenDevelopmentAdvanced = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Advanced Behavior-Driven Development
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Master advanced BDD concepts, patterns, and implementations for creating robust, maintainable, and collaborative test automation frameworks.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Advanced BDD Concepts</h2>
          </div>
          
          <div className="space-y-4 text-slate-700">
            <p>
              Advanced Behavior-Driven Development goes beyond basic Gherkin syntax and simple step definitions. 
              It encompasses sophisticated patterns, comprehensive test strategies, and seamless integration with modern development practices.
            </p>
            <p>
              This guide covers advanced BDD techniques including state management, data-driven scenarios, 
              custom frameworks, and enterprise-level implementations that scale with complex applications.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">State Management</h3>
              <p className="text-sm text-blue-700">Advanced scenario state handling</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Data-Driven BDD</h3>
              <p className="text-sm text-green-700">Dynamic data injection and scenarios</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Enterprise Patterns</h3>
              <p className="text-sm text-purple-700">Scalable BDD architecture</p>
            </div>
          </div>
        </div>

        {/* Advanced State Management */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Advanced State Management</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Scenario Context Management</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class ScenarioContext {
    private static final ThreadLocal<Map<String, Object>> context = ThreadLocal.withInitial(HashMap::new);
    
    // Generic context operations
    public static <T> void set(String key, T value) {
        context.get().put(key, value);
    }
    
    @SuppressWarnings("unchecked")
    public static <T> T get(String key, Class<T> type) {
        Object value = context.get().get(key);
        return type.isInstance(value) ? (T) value : null;
    }
    
    public static boolean contains(String key) {
        return context.get().containsKey(key);
    }
    
    public static void remove(String key) {
        context.get().remove(key);
    }
    
    public static void clear() {
        context.get().clear();
    }
    
    // Typed convenience methods
    public static void setUser(User user) {
        set("currentUser", user);
    }
    
    public static User getUser() {
        return get("currentUser", User.class);
    }
    
    public static void setResponse(Response response) {
        set("lastResponse", response);
    }
    
    public static Response getResponse() {
        return get("lastResponse", Response.class);
    }
    
    // State validation
    public static void validateRequiredState(String... keys) {
        for (String key : keys) {
            if (!contains(key)) {
                throw new IllegalStateException("Required context key not found: " + key);
            }
        }
    }
    
    @After
    public void cleanupScenario() {
        clear();
    }
}

// Advanced context with state history
public class AdvancedScenarioContext {
    private static final ThreadLocal<StateHistory> history = ThreadLocal.withInitial(StateHistory::new);
    
    public static class StateHistory {
        private Map<String, List<Object>> stateHistory = new HashMap<>();
        
        public void recordState(String key, Object value) {
            stateHistory.computeIfAbsent(key, k -> new ArrayList<>()).add(value);
        }
        
        public List<Object> getHistory(String key) {
            return stateHistory.getOrDefault(key, Collections.emptyList());
        }
        
        public Object getPreviousState(String key) {
            List<Object> history = getHistory(key);
            return history.size() > 1 ? history.get(history.size() - 2) : null;
        }
    }
    
    public static void recordStateChange(String key, Object newValue) {
        Object oldValue = ScenarioContext.get(key, Object.class);
        history.get().recordState(key, newValue);
        ScenarioContext.set(key, newValue);
    }
    
    public static List<Object> getStateHistory(String key) {
        return history.get().getHistory(key);
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Dependency Injection in BDD</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class BDDStepDefinitions {
    private final UserService userService;
    private final ProductService productService;
    private final OrderService orderService;
    private final TestDataFactory dataFactory;
    private final ScenarioContext context;
    
    // Constructor injection
    public BDDStepDefinitions(UserService userService, 
                             ProductService productService,
                             OrderService orderService,
                             TestDataFactory dataFactory,
                             ScenarioContext context) {
        this.userService = userService;
        this.productService = productService;
        this.orderService = orderService;
        this.dataFactory = dataFactory;
        this.context = context;
    }
    
    @Given("^I have a registered user account$")
    public void iHaveARegisteredUserAccount() {
        User user = dataFactory.createValidUser();
        userService.register(user);
        context.setUser(user);
    }
    
    @When("^I place an order for product \"([^\"]*)\"$")
    public void iPlaceAnOrderForProduct(String productName) {
        User currentUser = context.getUser();
        Product product = productService.findByName(productName);
        
        Order order = orderService.createOrder(currentUser, product);
        context.set("currentOrder", order);
    }
    
    @Then("^the order should be confirmed$")
    public void theOrderShouldBeConfirmed() {
        Order order = context.get("currentOrder", Order.class);
        Assert.assertEquals(OrderStatus.CONFIRMED, order.getStatus());
    }
}

// Spring-based dependency injection
@SpringBootTest
@CucumberContextConfiguration
public class SpringBDDStepDefinitions {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private ProductService productService;
    
    @Autowired
    private OrderService orderService;
    
    @Autowired
    private TestDataFactory dataFactory;
    
    @Autowired
    private ScenarioContext context;
    
    // Step definitions using injected dependencies
    @Given("^the system has (\\d+) products available$")
    public void theSystemHasProductsAvailable(int productCount) {
        List<Product> products = dataFactory.createProducts(productCount);
        products.forEach(productService::save);
        context.set("availableProducts", products);
    }
    
    @When("^I search for products with price range \\$(\\d+) to \\$(\\d+)$")
    public void iSearchForProducts(int minPrice, int maxPrice) {
        List<Product> foundProducts = productService.findByPriceRange(minPrice, maxPrice);
        context.set("searchResults", foundProducts);
    }
    
    @Then("^I should find (\\d+) products$")
    public void iShouldFindProducts(int expectedCount) {
        List<Product> results = context.get("searchResults", List.class);
        Assert.assertEquals(expectedCount, results.size());
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Shared State Between Steps</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class SharedStateManager {
    private static final ThreadLocal<Map<String, Object>> sharedState = new ThreadLocal<>();
    
    public static void initialize() {
        sharedState.set(new HashMap<>());
    }
    
    public static void put(String key, Object value) {
        sharedState.get().put(key, value);
    }
    
    @SuppressWarnings("unchecked")
    public static <T> T get(String key, Class<T> type) {
        Object value = sharedState.get().get(key);
        if (value == null) {
            throw new IllegalStateException("No value found for key: " + key);
        }
        return type.isInstance(value) ? (T) value : null;
    }
    
    public static void cleanup() {
        sharedState.remove();
    }
}

// Step definitions with shared state
public class UserStepDefinitions {
    
    @Before
    public void setUp() {
        SharedStateManager.initialize();
    }
    
    @Given("^I am logged in as a \"([^\"]*)\" user$")
    public void iAmLoggedInAsAUser(String userType) {
        User user = createUserByType(userType);
        SharedStateManager.put("currentUser", user);
        SharedStateManager.put("userType", userType);
    }
    
    private User createUserByType(String userType) {
        switch (userType.toLowerCase()) {
            case "admin":
                return TestDataFactory.createAdminUser();
            case "customer":
                return TestDataFactory.createCustomerUser();
            case "premium":
                return TestDataFactory.createPremiumUser();
            default:
                throw new IllegalArgumentException("Unknown user type: " + userType);
        }
    }
}

public class OrderStepDefinitions {
    
    @When("^I create an order$")
    public void iCreateAnOrder() {
        User currentUser = SharedStateManager.get("currentUser", User.class);
        String userType = SharedStateManager.get("userType", String.class);
        
        Order order = OrderService.createOrderForUser(currentUser, userType);
        SharedStateManager.put("currentOrder", order);
    }
    
    @Then("^the order should have \"([^\"]*)\" discount applied$")
    public void theOrderShouldHaveDiscountApplied(String discountType) {
        Order order = SharedStateManager.get("currentOrder", Order.class);
        Assert.assertTrue(order.hasDiscount(discountType));
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Data-Driven BDD */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Advanced Data-Driven BDD</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Dynamic Data Tables</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`// Feature file with dynamic data tables
Feature: Product Management
  Scenario: Create multiple products with dynamic data
    Given I have the following product data:
      | name        | category    | price | stock |
      | Laptop      | Electronics | 999   | 50    |
      | Mouse       | Electronics | 25    | 200   |
      | Keyboard    | Electronics | 75    | 100   |
    When I create these products
    Then all products should be created successfully
    And the total stock should be 350

// Step definitions for dynamic data tables
public class ProductStepDefinitions {
    
    @Given("^I have the following product data:$")
    public void iHaveTheFollowingProductData(DataTable dataTable) {
        List<ProductData> productDataList = dataTable.asList(ProductData.class);
        List<Product> products = productDataList.stream()
            .map(this::convertToProduct)
            .collect(Collectors.toList());
        
        SharedStateManager.put("productData", products);
    }
    
    @When("^I create these products$")
    public void iCreateTheseProducts() {
        List<Product> products = SharedStateManager.get("productData", List.class);
        List<Product> createdProducts = new ArrayList<>();
        
        for (Product product : products) {
            Product created = productService.create(product);
            createdProducts.add(created);
        }
        
        SharedStateManager.put("createdProducts", createdProducts);
    }
    
    @Then("^all products should be created successfully$")
    public void allProductsShouldBeCreatedSuccessfully() {
        List<Product> createdProducts = SharedStateManager.get("createdProducts", List.class);
        
        Assert.assertFalse(createdProducts.isEmpty(), "No products were created");
        
        for (Product product : createdProducts) {
            Assert.assertNotNull(product.getId(), "Product ID should not be null");
            Assert.assertNotNull(product.getCreatedAt(), "Creation timestamp should not be null");
        }
    }
    
    @Then("^the total stock should be (\\d+)$")
    public void theTotalStockShouldBe(int expectedTotal) {
        List<Product> createdProducts = SharedStateManager.get("createdProducts", List.class);
        int actualTotal = createdProducts.stream()
            .mapToInt(Product::getStock)
            .sum();
        
        Assert.assertEquals(expectedTotal, actualTotal);
    }
    
    private Product convertToProduct(ProductData data) {
        return Product.builder()
            .name(data.getName())
            .category(data.getCategory())
            .price(data.getPrice())
            .stock(data.getStock())
            .build();
    }
    
    public static class ProductData {
        private String name;
        private String category;
        private BigDecimal price;
        private int stock;
        
        // Getters and setters
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. External Data Sources</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class ExternalDataManager {
    
    public static class ExcelDataLoader {
        public static List<Map<String, String>> loadTestData(String filePath, String sheetName) {
            List<Map<String, String>> testData = new ArrayList<>();
            
            try (Workbook workbook = WorkbookFactory.create(new File(filePath))) {
                Sheet sheet = workbook.getSheet(sheetName);
                Row headerRow = sheet.getRow(0);
                
                for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                    Row dataRow = sheet.getRow(i);
                    Map<String, String> rowData = new HashMap<>();
                    
                    for (int j = 0; j < headerRow.getLastCellNum(); j++) {
                        String header = headerRow.getCell(j).getStringCellValue();
                        String value = getCellValueAsString(dataRow.getCell(j));
                        rowData.put(header, value);
                    }
                    testData.add(rowData);
                }
            } catch (IOException e) {
                throw new RuntimeException("Failed to load Excel data", e);
            }
            
            return testData;
        }
        
        private static String getCellValueAsString(Cell cell) {
            if (cell == null) return "";
            
            switch (cell.getCellType()) {
                case STRING:
                    return cell.getStringCellValue();
                case NUMERIC:
                    return String.valueOf(cell.getNumericCellValue());
                case BOOLEAN:
                    return String.valueOf(cell.getBooleanCellValue());
                default:
                    return "";
            }
        }
    }
    
    public static class JsonDataLoader {
        private static final ObjectMapper objectMapper = new ObjectMapper();
        
        public static List<TestData> loadTestDataFromJson(String filePath) {
            try {
                return objectMapper.readValue(
                    new File(filePath),
                    new TypeReference<List<TestData>>() {}
                );
            } catch (IOException e) {
                throw new RuntimeException("Failed to load JSON data", e);
            }
        }
        
        public static TestData loadSingleTestData(String filePath) {
            try {
                return objectMapper.readValue(new File(filePath), TestData.class);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load JSON data", e);
            }
        }
    }
    
    public static class DatabaseDataLoader {
        private final JdbcTemplate jdbcTemplate;
        
        public DatabaseDataLoader(DataSource dataSource) {
            this.jdbcTemplate = new JdbcTemplate(dataSource);
        }
        
        public List<Map<String, Object>> loadTestData(String query) {
            return jdbcTemplate.queryForList(query);
        }
        
        public List<User> loadTestUsers() {
            String sql = "SELECT * FROM test_users WHERE active = true";
            return jdbcTemplate.query(sql, new UserRowMapper());
        }
        
        private static class UserRowMapper implements RowMapper<User> {
            @Override
            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                return User.builder()
                    .id(rs.getLong("id"))
                    .username(rs.getString("username"))
                    .email(rs.getString("email"))
                    .role(rs.getString("role"))
                    .build();
            }
        }
    }
}

// Step definitions using external data
public class ExternalDataStepDefinitions {
    
    @Given("^I load test data from Excel file \"([^\"]*)\"$")
    public void iLoadTestDataFromExcelFile(String fileName) {
        String filePath = "src/test/resources/data/" + fileName;
        List<Map<String, String>> testData = ExcelDataLoader.loadTestData(filePath, "TestData");
        SharedStateManager.put("externalTestData", testData);
    }
    
    @When("^I process the loaded data$")
    public void iProcessTheLoadedData() {
        List<Map<String, String>> testData = SharedStateManager.get("externalTestData", List.class);
        List<ProcessedData> processedData = new ArrayList<>();
        
        for (Map<String, String> data : testData) {
            ProcessedData processed = processDataRow(data);
            processedData.add(processed);
        }
        
        SharedStateManager.put("processedData", processedData);
    }
    
    @Then("^all data should be processed correctly$")
    public void allDataShouldBeProcessedCorrectly() {
        List<ProcessedData> processedData = SharedStateManager.get("processedData", List.class);
        
        Assert.assertFalse(processedData.isEmpty(), "No data was processed");
        
        for (ProcessedData data : processedData) {
            Assert.assertNotNull(data.getId(), "Processed data ID should not be null");
            Assert.assertTrue(data.isValid(), "Processed data should be valid");
        }
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Dynamic Scenario Generation</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class DynamicScenarioGenerator {
    
    public static class ScenarioTemplate {
        private String name;
        private String description;
        private List<String> steps;
        private Map<String, Object> parameters;
        
        // Getters and setters
    }
    
    public static List<ScenarioTemplate> generateScenariosFromTemplate(
            ScenarioTemplate template, List<Map<String, Object>> dataSets) {
        
        List<ScenarioTemplate> scenarios = new ArrayList<>();
        
        for (Map<String, Object> dataSet : dataSets) {
            ScenarioTemplate scenario = cloneTemplate(template);
            scenario.setName(replaceParameters(template.getName(), dataSet));
            scenario.setDescription(replaceParameters(template.getDescription(), dataSet));
            
            List<String> steps = new ArrayList<>();
            for (String step : template.getSteps()) {
                steps.add(replaceParameters(step, dataSet));
            }
            scenario.setSteps(steps);
            
            scenarios.add(scenario);
        }
        
        return scenarios;
    }
    
    private static String replaceParameters(String text, Map<String, Object> parameters) {
        String result = text;
        
        for (Map.Entry<String, Object> entry : parameters.entrySet()) {
            String placeholder = "{" + entry.getKey() + "}";
            String value = String.valueOf(entry.getValue());
            result = result.replace(placeholder, value);
        }
        
        return result;
    }
    
    private static ScenarioTemplate cloneTemplate(ScenarioTemplate template) {
        ScenarioTemplate clone = new ScenarioTemplate();
        clone.setName(template.getName());
        clone.setDescription(template.getDescription());
        clone.setSteps(new ArrayList<>(template.getSteps()));
        clone.setParameters(new HashMap<>(template.getParameters()));
        return clone;
    }
}

// Cucumber runner with dynamic scenarios
public class DynamicCucumberRunner {
    
    public static void runDynamicScenarios() {
        // Load scenario template
        ScenarioTemplate template = loadScenarioTemplate("user-registration.template");
        
        // Load test data sets
        List<Map<String, Object>> dataSets = loadTestDataSets("user-registration-data.json");
        
        // Generate scenarios
        List<ScenarioTemplate> scenarios = DynamicScenarioGenerator
            .generateScenariosFromTemplate(template, dataSets);
        
        // Execute scenarios
        for (ScenarioTemplate scenario : scenarios) {
            executeScenario(scenario);
        }
    }
    
    private static void executeScenario(ScenarioTemplate scenario) {
        System.out.println("Executing scenario: " + scenario.getName());
        
        for (String step : scenario.getSteps()) {
            executeStep(step);
        }
    }
    
    private static void executeStep(String stepDefinition) {
        // Parse and execute step definition
        // This would integrate with your step definition registry
        StepExecutor.execute(stepDefinition);
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Reporting */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <GitBranch className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Advanced Reporting & Analytics</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Custom Report Generation</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class AdvancedBDDReporter {
    
    public static class TestExecutionReport {
        private String projectName;
        private LocalDateTime executionTime;
        private Duration totalDuration;
        private int totalScenarios;
        private int passedScenarios;
        private int failedScenarios;
        private int skippedScenarios;
        private List<FeatureReport> features;
        private Map<String, Object> metadata;
        
        // Getters and setters
    }
    
    public static class FeatureReport {
        private String featureName;
        private String description;
        private List<ScenarioReport> scenarios;
        private Duration executionTime;
        private TestStatus status;
        
        // Getters and setters
    }
    
    public static class ScenarioReport {
        private String scenarioName;
        private List<String> tags;
        private List<StepReport> steps;
        private Duration executionTime;
        private TestStatus status;
        private String errorMessage;
        private List<String> screenshots;
        private Map<String, Object> testData;
        
        // Getters and setters
    }
    
    public static class StepReport {
        private String stepKeyword;
        private String stepText;
        private Duration executionTime;
        private TestStatus status;
        private String errorMessage;
        private String screenshot;
        
        // Getters and setters
    }
    
    public void generateReport(List<FeatureReport> features, String outputPath) {
        TestExecutionReport report = new TestExecutionReport();
        
        report.setProjectName("BDD Test Suite");
        report.setExecutionTime(LocalDateTime.now());
        report.setFeatures(features);
        
        // Calculate statistics
        calculateStatistics(report);
        
        // Generate HTML report
        generateHtmlReport(report, outputPath);
        
        // Generate JSON report
        generateJsonReport(report, outputPath);
        
        // Generate PDF report
        generatePdfReport(report, outputPath);
        
        // Send to analytics
        sendToAnalytics(report);
    }
    
    private void calculateStatistics(TestExecutionReport report) {
        int totalScenarios = 0;
        int passedScenarios = 0;
        int failedScenarios = 0;
        int skippedScenarios = 0;
        Duration totalDuration = Duration.ZERO;
        
        for (FeatureReport feature : report.getFeatures()) {
            totalScenarios += feature.getScenarios().size();
            totalDuration = totalDuration.plus(feature.getExecutionTime());
            
            for (ScenarioReport scenario : feature.getScenarios()) {
                switch (scenario.getStatus()) {
                    case PASSED:
                        passedScenarios++;
                        break;
                    case FAILED:
                        failedScenarios++;
                        break;
                    case SKIPPED:
                        skippedScenarios++;
                        break;
                }
            }
        }
        
        report.setTotalScenarios(totalScenarios);
        report.setPassedScenarios(passedScenarios);
        report.setFailedScenarios(failedScenarios);
        report.setSkippedScenarios(skippedScenarios);
        report.setTotalDuration(totalDuration);
    }
    
    private void generateHtmlReport(TestExecutionReport report, String outputPath) {
        String htmlTemplate = loadHtmlTemplate();
        
        String html = htmlTemplate
            .replace("{{PROJECT_NAME}}", report.getProjectName())
            .replace("{{EXECUTION_TIME}}", report.getExecutionTime().toString())
            .replace("{{TOTAL_SCENARIOS}}", String.valueOf(report.getTotalScenarios()))
            .replace("{{PASSED_SCENARIOS}}", String.valueOf(report.getPassedScenarios()))
            .replace("{{FAILED_SCENARIOS}}", String.valueOf(report.getFailedScenarios()))
            .replace("{{SKIPPED_SCENARIOS}}", String.valueOf(report.getSkippedScenarios()))
            .replace("{{TOTAL_DURATION}}", formatDuration(report.getTotalDuration()))
            .replace("{{FEATURES_HTML}}", generateFeaturesHtml(report.getFeatures()));
        
        writeFile(outputPath + "/report.html", html);
    }
    
    private void generateJsonReport(TestExecutionReport report, String outputPath) {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        
        try {
            objectMapper.writeValue(new File(outputPath + "/report.json"), report);
        } catch (IOException e) {
            throw new RuntimeException("Failed to generate JSON report", e);
        }
    }
    
    private void sendToAnalytics(TestExecutionReport report) {
        AnalyticsData data = AnalyticsData.builder()
            .projectName(report.getProjectName())
            .executionTime(report.getExecutionTime())
            .totalScenarios(report.getTotalScenarios())
            .passedScenarios(report.getPassedScenarios())
            .failedScenarios(report.getFailedScenarios())
            .totalDuration(report.getTotalDuration().toMillis())
            .build();
        
        analyticsService.sendTestExecutionData(data);
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Real-time Dashboard</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`@WebSocket("/bdd-dashboard")
public class BDDDashboardWebSocket {
    
    private static final Set<Session> sessions = Collections.synchronizedSet(new HashSet<>());
    
    @OnOpen
    public void onOpen(Session session) {
        sessions.add(session);
        sendCurrentStatus(session);
    }
    
    @OnClose
    public void onClose(Session session) {
        sessions.remove(session);
    }
    
    public static void broadcastTestUpdate(TestUpdate update) {
        String message = JsonUtils.toJson(update);
        
        sessions.forEach(session -> {
            try {
                session.getBasicRemote().sendText(message);
            } catch (IOException e) {
                // Handle error
            }
        });
    }
    
    public static class TestUpdate {
        private String type; // "scenario_start", "scenario_end", "step_start", "step_end"
        private String feature;
        private String scenario;
        private String step;
        private TestStatus status;
        private long timestamp;
        private Duration duration;
        
        // Getters and setters
    }
}

// Test execution listener for real-time updates
public class RealTimeTestListener implements TestExecutionListener {
    
    @Override
    public void scenarioStarted(Scenario scenario) {
        TestUpdate update = new TestUpdate();
        update.setType("scenario_start");
        update.setFeature(scenario.getUri().toString());
        update.setScenario(scenario.getName());
        update.setStatus(TestStatus.RUNNING);
        update.setTimestamp(System.currentTimeMillis());
        
        BDDDashboardWebSocket.broadcastTestUpdate(update);
    }
    
    @Override
    public void scenarioFinished(Scenario scenario) {
        TestStatus status = scenario.isFailed() ? TestStatus.FAILED : TestStatus.PASSED;
        
        TestUpdate update = new TestUpdate();
        update.setType("scenario_end");
        update.setFeature(scenario.getUri().toString());
        update.setScenario(scenario.getName());
        update.setStatus(status);
        update.setTimestamp(System.currentTimeMillis());
        
        BDDDashboardWebSocket.broadcastTestUpdate(update);
    }
    
    @Override
    public void stepStarted(Step step) {
        TestUpdate update = new TestUpdate();
        update.setType("step_start");
        update.setStep(step.getKeyword() + step.getText());
        update.setStatus(TestStatus.RUNNING);
        update.setTimestamp(System.currentTimeMillis());
        
        BDDDashboardWebSocket.broadcastTestUpdate(update);
    }
    
    @Override
    public void stepFinished(Step step, Result result) {
        TestStatus status = result.getStatus() == Status.FAILED ? 
            TestStatus.FAILED : TestStatus.PASSED;
        
        TestUpdate update = new TestUpdate();
        update.setType("step_end");
        update.setStep(step.getKeyword() + step.getText());
        update.setStatus(status);
        update.setTimestamp(System.currentTimeMillis());
        update.setDuration(Duration.ofMillis(result.getDuration()));
        
        BDDDashboardWebSocket.broadcastTestUpdate(update);
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise BDD Patterns */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Enterprise BDD Patterns</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Multi-Team Collaboration</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class MultiTeamBDDOrchestrator {
    
    public static class TeamConfiguration {
        private String teamName;
        private List<String> responsibleFeatures;
        private List<String> tags;
        private String executionEnvironment;
        private Map<String, String> teamSpecificData;
        
        // Getters and setters
    }
    
    public static class FeatureOwnership {
        private String featurePath;
        private String ownerTeam;
        private List<String> reviewers;
        private String lastModifiedBy;
        private LocalDateTime lastModified;
        
        // Getters and setters
    }
    
    private final Map<String, TeamConfiguration> teamConfigurations;
    private final FeatureOwnershipRegistry ownershipRegistry;
    private final NotificationService notificationService;
    
    public MultiTeamBDDOrchestrator() {
        this.teamConfigurations = loadTeamConfigurations();
        this.ownershipRegistry = new FeatureOwnershipRegistry();
        this.notificationService = new NotificationService();
    }
    
    public void executeTeamSpecificTests(String teamName) {
        TeamConfiguration config = teamConfigurations.get(teamName);
        if (config == null) {
            throw new IllegalArgumentException("Team not found: " + teamName);
        }
        
        // Filter features by team ownership
        List<String> teamFeatures = config.getResponsibleFeatures().stream()
            .map(this::getFeaturePath)
            .collect(Collectors.toList());
        
        // Execute tests for team features
        executeFeatures(teamFeatures, config);
        
        // Generate team-specific report
        generateTeamReport(teamName, config);
        
        // Notify team of results
        notifyTeamOfResults(teamName, config);
    }
    
    public void validateFeatureOwnership() {
        List<String> issues = new ArrayList<>();
        
        // Check for unowned features
        List<String> allFeatures = getAllFeatures();
        List<String> ownedFeatures = ownershipRegistry.getAllOwnedFeatures();
        
        List<String> unownedFeatures = allFeatures.stream()
            .filter(feature -> !ownedFeatures.contains(feature))
            .collect(Collectors.toList());
        
        if (!unownedFeatures.isEmpty()) {
            issues.add("Unowned features: " + String.join(", ", unownedFeatures));
        }
        
        // Check for overlapping ownership
        Map<String, List<String>> ownershipMap = ownershipRegistry.getOwnershipMap();
        
        ownershipMap.forEach((feature, owners) -> {
            if (owners.size() > 1) {
                issues.add("Multiple owners for feature " + feature + ": " + owners);
            }
        });
        
        if (!issues.isEmpty()) {
            throw new OwnershipValidationException("Ownership validation failed: " + issues);
        }
    }
    
    public void synchronizeTeamWork() {
        // Get latest changes from all teams
        Map<String, List<FeatureChange>> teamChanges = new HashMap<>();
        
        for (String teamName : teamConfigurations.keySet()) {
            List<FeatureChange> changes = getTeamChanges(teamName);
            teamChanges.put(teamName, changes);
        }
        
        // Resolve conflicts
        List<ConflictResolution> resolutions = resolveConflicts(teamChanges);
        
        // Apply resolutions
        applyResolutions(resolutions);
        
        // Update ownership registry
        updateOwnershipRegistry(teamChanges);
        
        // Notify teams of synchronization
        notifyTeamsOfSynchronization(teamChanges, resolutions);
    }
    
    private List<ConflictResolution> resolveConflicts(
            Map<String, List<FeatureChange>> teamChanges) {
        
        List<ConflictResolution> resolutions = new ArrayList<>();
        
        // Group changes by feature
        Map<String, List<FeatureChange>> changesByFeature = new HashMap<>();
        
        teamChanges.forEach((team, changes) -> {
            changes.forEach(change -> {
                changesByFeature.computeIfAbsent(change.getFeaturePath(), k -> new ArrayList<>())
                    .add(change);
            });
        });
        
        // Resolve conflicts for each feature
        changesByFeature.forEach((feature, changes) -> {
            if (changes.size() > 1) {
                ConflictResolution resolution = resolveFeatureConflict(feature, changes);
                resolutions.add(resolution);
            }
        });
        
        return resolutions;
    }
    
    private ConflictResolution resolveFeatureConflict(String feature, 
                                                    List<FeatureChange> changes) {
        
        // Implement conflict resolution strategy
        // This could be based on timestamps, team priority, manual intervention, etc.
        
        FeatureChange latestChange = changes.stream()
            .max(Comparator.comparing(FeatureChange::getTimestamp))
            .orElseThrow(() -> new IllegalStateException("No changes found"));
        
        return ConflictResolution.builder()
            .featurePath(feature)
            .resolvedChange(latestChange)
            .resolutionType(ResolutionType.LATEST_WINS)
            .build();
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Scalable Test Execution</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class ScalableBDDExecutor {
    
    private final TestExecutionCluster cluster;
    private final LoadBalancer loadBalancer;
    private final ResourceManager resourceManager;
    
    public ScalableBDDExecutor() {
        this.cluster = new TestExecutionCluster();
        this.loadBalancer = new LoadBalancer();
        this.resourceManager = new ResourceManager();
    }
    
    public void executeScalableTestSuite(TestSuiteRequest request) {
        // Analyze test suite requirements
        TestSuiteAnalysis analysis = analyzeTestSuite(request);
        
        // Allocate resources
        ResourceAllocation allocation = resourceManager.allocateResources(analysis);
        
        // Distribute tests across cluster
        List<TestExecutionPlan> plans = distributeTests(request, allocation);
        
        // Execute tests in parallel
        List<CompletableFuture<TestExecutionResult>> futures = new ArrayList<>();
        
        for (TestExecutionPlan plan : plans) {
            CompletableFuture<TestExecutionResult> future = 
                CompletableFuture.supplyAsync(() -> executeTestPlan(plan));
            futures.add(future);
        }
        
        // Wait for completion and aggregate results
        List<TestExecutionResult> results = futures.stream()
            .map(CompletableFuture::join)
            .collect(Collectors.toList());
        
        // Generate consolidated report
        TestSuiteResult suiteResult = aggregateResults(results);
        
        // Release resources
        resourceManager.releaseResources(allocation);
        
        // Handle results
        handleTestSuiteResult(suiteResult);
    }
    
    private TestSuiteAnalysis analyzeTestSuite(TestSuiteRequest request) {
        TestSuiteAnalysis analysis = new TestSuiteAnalysis();
        
        // Count scenarios and estimate execution time
        int totalScenarios = countScenarios(request.getFeaturePaths());
        long estimatedTime = estimateExecutionTime(request.getFeaturePaths());
        
        analysis.setTotalScenarios(totalScenarios);
        analysis.setEstimatedExecutionTime(estimatedTime);
        
        // Analyze resource requirements
        ResourceRequirements requirements = calculateResourceRequirements(
            totalScenarios, estimatedTime, request.getPriority());
        
        analysis.setResourceRequirements(requirements);
        
        // Identify dependencies
        List<TestDependency> dependencies = identifyDependencies(request.getFeaturePaths());
        analysis.setDependencies(dependencies);
        
        return analysis;
    }
    
    private List<TestExecutionPlan> distributeTests(TestSuiteRequest request, 
                                                   ResourceAllocation allocation) {
        List<TestExecutionPlan> plans = new ArrayList<>();
        
        // Get available execution nodes
        List<ExecutionNode> availableNodes = cluster.getAvailableNodes(allocation);
        
        // Group features by dependencies
        Map<String, List<String>> featureGroups = groupFeaturesByDependencies(
            request.getFeaturePaths());
        
        // Create execution plans
        int nodeIndex = 0;
        
        for (Map.Entry<String, List<String>> group : featureGroups.entrySet()) {
            ExecutionNode node = availableNodes.get(nodeIndex % availableNodes.size());
            
            TestExecutionPlan plan = TestExecutionPlan.builder()
                .featurePaths(group.getValue())
                .executionNode(node)
                .priority(request.getPriority())
                .environment(request.getEnvironment())
                .build();
            
            plans.add(plan);
            nodeIndex++;
        }
        
        return plans;
    }
    
    private TestExecutionResult executeTestPlan(TestExecutionPlan plan) {
        TestExecutionContext context = TestExecutionContext.builder()
            .executionNode(plan.getExecutionNode())
            .environment(plan.getEnvironment())
            .featurePaths(plan.getFeaturePaths())
            .build();
        
        try {
            // Initialize execution context
            context.initialize();
            
            // Execute features
            List<FeatureResult> featureResults = new ArrayList<>();
            
            for (String featurePath : plan.getFeaturePaths()) {
                FeatureResult result = executeFeature(featurePath, context);
                featureResults.add(result);
            }
            
            // Create execution result
            return TestExecutionResult.builder()
                .plan(plan)
                .featureResults(featureResults)
                .executionTime(context.getExecutionTime())
                .success(context.isSuccess())
                .build();
            
        } catch (Exception e) {
            return TestExecutionResult.builder()
                .plan(plan)
                .success(false)
                .errorMessage(e.getMessage())
                .build();
        } finally {
            context.cleanup();
        }
    }
    
    private FeatureResult executeFeature(String featurePath, TestExecutionContext context) {
        // Load feature file
        Feature feature = loadFeature(featurePath);
        
        // Execute scenarios
        List<ScenarioResult> scenarioResults = new ArrayList<>();
        
        for (Scenario scenario : feature.getScenarios()) {
            ScenarioResult result = executeScenario(scenario, context);
            scenarioResults.add(result);
        }
        
        return FeatureResult.builder()
            .feature(feature)
            .scenarioResults(scenarioResults)
            .build();
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Advanced BDD Best Practices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Domain-Driven Language</h4>
                  <p className="text-sm text-slate-600">Use ubiquitous language that reflects business domain</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Reusable Step Libraries</h4>
                  <p className="text-sm text-slate-600">Build comprehensive, reusable step definition libraries</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">State Management</h4>
                  <p className="text-sm text-slate-600">Implement robust scenario state management patterns</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Continuous Integration</h4>
                  <p className="text-sm text-slate-600">Integrate BDD tests seamlessly with CI/CD pipelines</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Avoid Technical Details</h4>
                  <p className="text-sm text-slate-600">Keep scenarios focused on behavior, not implementation</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Prevent Test Coupling</h4>
                  <p className="text-sm text-slate-600">Avoid dependencies between scenarios and features</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Performance Considerations</h4>
                  <p className="text-sm text-slate-600">Optimize test execution for large-scale BDD suites</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Maintain Documentation</h4>
                  <p className="text-sm text-slate-600">Keep feature files and documentation synchronized</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Example */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Complete Advanced BDD Implementation</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <pre className="text-sm text-slate-800 overflow-x-auto">
{`@SpringBootTest
@CucumberContextConfiguration
@TestPropertySource(locations = "classpath:test-application.properties")
public class EnterpriseBDDTestSuite {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private ProductService productService;
    
    @Autowired
    private OrderService orderService;
    
    @Autowired
    private TestDataFactory dataFactory;
    
    @Autowired
    private ScenarioContext context;
    
    @Autowired
    private AdvancedBDDReporter reporter;
    
    @Autowired
    private NotificationService notificationService;
    
    private List<TestResult> testResults = new ArrayList<>();
    
    @Before
    public void setUpScenario(Scenario scenario) {
        context.initialize();
        context.setScenarioName(scenario.getName());
        context.setTags(scenario.getSourceTagNames());
        
        // Log scenario start
        logger.info("Starting scenario: {}", scenario.getName());
    }
    
    @Given("^the system is configured for \"([^\"]*)\" testing$")
    public void theSystemIsConfiguredForTesting(String environment) {
        TestConfiguration config = configurationService.getConfiguration(environment);
        context.setTestConfiguration(config);
        
        // Initialize test environment
        environmentService.initialize(config);
    }
    
    @Given("^I have (\\d+) users with \"([^\"]*)\" subscription$")
    public void iHaveUsersWithSubscription(int userCount, String subscriptionType) {
        List<User> users = new ArrayList<>();
        
        for (int i = 0; i < userCount; i++) {
            User user = dataFactory.createUserWithSubscription(subscriptionType);
            userService.register(user);
            users.add(user);
        }
        
        context.set("testUsers", users);
        context.set("subscriptionType", subscriptionType);
    }
    
    @When("^the users perform the following actions:$")
    public void theUsersPerformTheFollowingActions(DataTable actionTable) {
        List<UserAction> actions = actionTable.asList(UserAction.class);
        List<User> users = context.get("testUsers", List.class);
        
        for (UserAction action : actions) {
            User user = users.get(action.getUserIndex() - 1);
            performUserAction(user, action);
        }
    }
    
    @Then("^the system should handle all actions successfully$")
    public void theSystemShouldHandleAllActionsSuccessfully() {
        // Verify system state after all actions
        SystemState state = systemService.getCurrentState();
        
        Assert.assertTrue(state.isConsistent(), "System state should be consistent");
        Assert.assertFalse(state.hasErrors(), "System should not have errors");
        
        // Record test result
        TestResult result = TestResult.builder()
            .scenarioName(context.getScenarioName())
            .success(true)
            .executionTime(context.getExecutionTime())
            .build();
        
        testResults.add(result);
    }
    
    @Then("^performance metrics should be within acceptable limits$")
    public void performanceMetricsShouldBeWithinAcceptableLimits() {
        PerformanceMetrics metrics = performanceService.getMetrics();
        
        Assert.assertTrue(metrics.getResponseTime() < 2000, 
            "Response time should be less than 2 seconds");
        Assert.assertTrue(metrics.getCpuUsage() < 80.0, 
            "CPU usage should be less than 80%");
        Assert.assertTrue(metrics.getMemoryUsage() < 1024 * 1024 * 1024, 
            "Memory usage should be less than 1GB");
    }
    
    @After
    public void tearDownScenario(Scenario scenario) {
        try {
            // Cleanup test data
            cleanupTestData();
            
            // Generate scenario report
            ScenarioReport scenarioReport = generateScenarioReport(scenario);
            reporter.addScenarioReport(scenarioReport);
            
            // Send notifications if scenario failed
            if (scenario.isFailed()) {
                notificationService.sendFailureNotification(scenario);
            }
            
        } finally {
            context.cleanup();
        }
    }
    
    @AfterClass
    public void tearDownSuite() {
        try {
            // Generate comprehensive report
            TestExecutionReport report = reporter.generateReport();
            reporter.saveReport(report);
            
            // Send summary notification
            notificationService.sendSummaryNotification(report);
            
            // Archive test results
            archiveTestResults(testResults);
            
            // Update analytics
            analyticsService.updateTestMetrics(report);
            
        } catch (Exception e) {
            logger.error("Error during suite teardown", e);
        }
    }
    
    private void performUserAction(User user, UserAction action) {
        switch (action.getActionType()) {
            case "LOGIN":
                performLogin(user, action.getParameters());
                break;
            case "SEARCH":
                performSearch(user, action.getParameters());
                break;
            case "PURCHASE":
                performPurchase(user, action.getParameters());
                break;
            case "REVIEW":
                performReview(user, action.getParameters());
                break;
            default:
                throw new IllegalArgumentException("Unknown action type: " + action.getActionType());
        }
    }
    
    private void performLogin(User user, Map<String, String> parameters) {
        LoginRequest request = LoginRequest.builder()
            .username(user.getUsername())
            .password(user.getPassword())
            .rememberMe(Boolean.parseBoolean(parameters.getOrDefault("rememberMe", "false")))
            .build();
        
        LoginResult result = userService.login(request);
        context.recordStateChange("loginResult", result);
        
        Assert.assertTrue(result.isSuccess(), "Login should be successful");
    }
    
    private void performSearch(User user, Map<String, String> parameters) {
        String query = parameters.get("query");
        String category = parameters.get("category");
        
        SearchRequest request = SearchRequest.builder()
            .query(query)
            .category(category)
            .userId(user.getId())
            .build();
        
        SearchResult result = searchService.search(request);
        context.recordStateChange("searchResult", result);
        
        Assert.assertNotNull(result, "Search result should not be null");
        Assert.assertTrue(result.getTotalCount() > 0, "Search should return results");
    }
    
    private void performPurchase(User user, Map<String, String> parameters) {
        String productId = parameters.get("productId");
        int quantity = Integer.parseInt(parameters.getOrDefault("quantity", "1"));
        
        PurchaseRequest request = PurchaseRequest.builder()
            .userId(user.getId())
            .productId(productId)
            .quantity(quantity)
            .build();
        
        PurchaseResult result = orderService.purchase(request);
        context.recordStateChange("purchaseResult", result);
        
        Assert.assertTrue(result.isSuccess(), "Purchase should be successful");
        Assert.assertNotNull(result.getOrderId(), "Order ID should not be null");
    }
    
    private void cleanupTestData() {
        List<User> testUsers = context.get("testUsers", List.class);
        
        if (testUsers != null) {
            for (User user : testUsers) {
                try {
                    userService.deleteUser(user.getId());
                } catch (Exception e) {
                    logger.warn("Failed to delete user: " + user.getId(), e);
                }
            }
        }
    }
    
    private ScenarioReport generateScenarioReport(Scenario scenario) {
        return ScenarioReport.builder()
            .scenarioName(scenario.getName())
            .tags(scenario.getSourceTagNames())
            .status(scenario.isFailed() ? TestStatus.FAILED : TestStatus.PASSED)
            .executionTime(context.getExecutionTime())
            .testData(context.getTestData())
            .screenshots(context.getScreenshots())
            .build();
    }
}`}
            </pre>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Advanced BDD Mastery</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Implement sophisticated state management patterns
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Master data-driven BDD with external sources
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Build scalable enterprise BDD frameworks
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Create comprehensive reporting and analytics
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Excellence</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Use dependency injection for test components
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Implement real-time monitoring and dashboards
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Enable multi-team collaboration workflows
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Optimize for performance and scalability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorDrivenDevelopmentAdvanced;
