import React from 'react';
import { ChevronRight, Code, Database, FileText, AlertTriangle, CheckCircle, Info, Lock, Unlock, RefreshCw, Folder, Shield, Zap } from 'lucide-react';

const TestDataManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Test Data Management in Selenium
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Comprehensive strategies for managing test data effectively in automated testing, including data generation, storage, and cleanup.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
          </div>
          
          <div className="space-y-4 text-slate-700">
            <p>
              Test data management is a critical aspect of automated testing that involves creating, storing, maintaining, and cleaning up data used in test scenarios. 
              Effective data management ensures test reliability, repeatability, and maintainability.
            </p>
            <p>
              Poor test data management can lead to flaky tests, data corruption, and maintenance nightmares. 
              This guide covers best practices and strategies for managing test data in Selenium automation frameworks.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Data Generation</h3>
              <p className="text-sm text-blue-700">Creating realistic and varied test data</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Data Storage</h3>
              <p className="text-sm text-green-700">Organized and accessible data repositories</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Data Lifecycle</h3>
              <p className="text-sm text-purple-700">Managing data from creation to cleanup</p>
            </div>
          </div>
        </div>

        {/* Types of Test Data */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Types of Test Data</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Static Test Data</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Definition:</strong> Pre-defined data that doesn't change during test execution</p>
                <p><strong>Examples:</strong> User credentials, configuration values, reference data</p>
                <p><strong>Storage:</strong> Properties files, JSON/XML files, databases</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Static data in properties file
test.user.username=standard_user
test.user.password=secret_sauce
test.base.url=https://www.saucedemo.com`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Dynamic Test Data</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Definition:</strong> Data generated at runtime during test execution</p>
                <p><strong>Examples:</strong> Random emails, timestamps, unique identifiers</p>
                <p><strong>Generation:</strong> Data factories, random generators, APIs</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Dynamic data generation
String email = "user" + System.currentTimeMillis() + "@test.com";
String orderId = "ORD-" + UUID.randomUUID().toString().substring(0, 8);`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Environment-Specific Data</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Definition:</strong> Data that varies across test environments</p>
                <p><strong>Examples:</strong> Database connections, API endpoints, user roles</p>
                <p><strong>Management:</strong> Environment profiles, configuration files</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Environment-specific data
dev:
  db_url: jdbc:mysql://dev-db:3306/test
prod:
  db_url: jdbc:mysql://prod-db:3306/test`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sensitive Test Data</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Definition:</strong> Confidential or protected information</p>
                <p><strong>Examples:</strong> Passwords, PII, financial data</p>
                <p><strong>Handling:</strong> Encryption, secure storage, masking</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Sensitive data handling
String encryptedPassword = encrypt("actual_password");
String maskedCard = maskCreditCard("4111111111111111");`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Data Generation Strategies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Data Generation Strategies</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Random Data Generation</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class RandomDataGenerator {
    private static final Random random = new Random();
    private static final String[] FIRST_NAMES = {"John", "Jane", "Mike", "Sarah", "David"};
    private static final String[] LAST_NAMES = {"Smith", "Johnson", "Williams", "Brown", "Jones"};
    
    public static String generateRandomEmail() {
        return "user" + System.currentTimeMillis() + "@" + 
               getRandomDomain() + ".com";
    }
    
    public static String generateRandomName() {
        return FIRST_NAMES[random.nextInt(FIRST_NAMES.length)] + " " +
               LAST_NAMES[random.nextInt(LAST_NAMES.length)];
    }
    
    public static String generateRandomPhone() {
        return "(" + (random.nextInt(900) + 100) + ") " +
               (random.nextInt(900) + 100) + "-" +
               (random.nextInt(9000) + 1000);
    }
    
    public static int generateRandomAge(int min, int max) {
        return random.nextInt(max - min + 1) + min;
    }
    
    private static String getRandomDomain() {
        String[] domains = {"gmail", "yahoo", "hotmail", "outlook"};
        return domains[random.nextInt(domains.length)];
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Data Factory Pattern</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class UserDataFactory {
    public static User createStandardUser() {
        return User.builder()
            .username("standard_user")
            .password("secret_sauce")
            .firstName("Standard")
            .lastName("User")
            .email("standard@example.com")
            .build();
    }
    
    public static User createLockedOutUser() {
        return User.builder()
            .username("locked_out_user")
            .password("secret_sauce")
            .firstName("Locked")
            .lastName("Out")
            .email("locked@example.com")
            .locked(true)
            .build();
    }
    
    public static User createRandomUser() {
        return User.builder()
            .username("user_" + System.currentTimeMillis())
            .password("Password123!")
            .firstName(RandomDataGenerator.generateRandomName())
            .email(RandomDataGenerator.generateRandomEmail())
            .build();
    }
    
    public static List<User> createMultipleUsers(int count) {
        return IntStream.range(0, count)
            .mapToObj(i -> createRandomUser())
            .collect(Collectors.toList());
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Builder Pattern for Test Data</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class UserBuilder {
    private String username = "default_user";
    private String password = "default_pass";
    private String email = "default@example.com";
    private String firstName = "Default";
    private String lastName = "User";
    private boolean active = true;
    
    public UserBuilder withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public UserBuilder withEmail(String email) {
        this.email = email;
        return this;
    }
    
    public UserBuilder asInactive() {
        this.active = false;
        return this;
    }
    
    public User build() {
        return new User(username, password, email, firstName, lastName, active);
    }
}

// Usage in tests
User activeUser = new UserBuilder()
    .withUsername("test_user")
    .withEmail("test@example.com")
    .build();

User inactiveUser = new UserBuilder()
    .withUsername("inactive_user")
    .asInactive()
    .build();`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Data Storage Solutions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Folder className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Data Storage Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">File-Based Storage</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">JSON Files</h4>
                  <pre className="text-sm text-slate-800 overflow-x-auto">
{`{
  "users": [
    {
      "username": "standard_user",
      "password": "secret_sauce",
      "role": "customer"
    },
    {
      "username": "admin_user",
      "password": "admin_pass",
      "role": "administrator"
    }
  ],
  "testData": {
    "baseUrl": "https://example.com",
    "timeout": 30
  }
}`}
                  </pre>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Excel Files</h4>
                  <pre className="text-sm text-slate-800 overflow-x-auto">
{`// Reading data from Excel
public class ExcelDataReader {
    public static List<Map<String, String>> readTestData(String filePath) {
        List<Map<String, String>> testData = new ArrayList<>();
        
        try (Workbook workbook = WorkbookFactory.create(new File(filePath))) {
            Sheet sheet = workbook.getSheetAt(0);
            Row headerRow = sheet.getRow(0);
            
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row dataRow = sheet.getRow(i);
                Map<String, String> rowData = new HashMap<>();
                
                for (int j = 0; j < headerRow.getLastCellNum(); j++) {
                    String header = headerRow.getCell(j).getStringCellValue();
                    String value = dataRow.getCell(j).getStringCellValue();
                    rowData.put(header, value);
                }
                testData.add(rowData);
            }
        }
        return testData;
    }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Database Storage</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Test Database Setup</h4>
                  <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class TestDataManager {
    private Connection connection;
    
    public TestDataManager() {
        this.connection = DatabaseConnection.getTestConnection();
    }
    
    public void insertTestData(User user) {
        String sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, user.getUsername());
            stmt.setString(2, user.getEmail());
            stmt.setString(3, user.getPassword());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Failed to insert test data", e);
        }
    }
    
    public User getUserById(int userId) {
        String sql = "SELECT * FROM users WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return mapResultSetToUser(rs);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Failed to get user", e);
        }
        return null;
    }
}`}
                  </pre>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">In-Memory Storage</h4>
                  <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class InMemoryDataStore {
    private static Map<String, Object> dataStore = new ConcurrentHashMap<>();
    
    public static void store(String key, Object value) {
        dataStore.put(key, value);
    }
    
    @SuppressWarnings("unchecked")
    public static <T> T retrieve(String key, Class<T> type) {
        Object value = dataStore.get(key);
        return type.isInstance(value) ? (T) value : null;
    }
    
    public static void clear() {
        dataStore.clear();
    }
    
    public static void remove(String key) {
        dataStore.remove(key);
    }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Lifecycle Management */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <RefreshCw className="w-8 h-8 text-cyan-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Data Lifecycle Management</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Test Data Setup</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`@BeforeClass
public void setUpTestData() {
    // Create test data before test suite
    testDataManager = new TestDataManager();
    testUsers = UserDataFactory.createMultipleUsers(10);
    
    // Insert users into database
    testUsers.forEach(user -> {
        testDataManager.insertTestData(user);
        createdUserIds.add(user.getId());
    });
    
    // Load static test data
    staticTestData = JsonDataReader.loadTestData("test-data.json");
}

@BeforeMethod
public void setUpTestMethod() {
    // Reset test data for each test method
    testDataCleanup();
    testDataSetup();
}

private void testDataSetup() {
    // Create fresh data for specific test
    currentUser = UserDataFactory.createRandomUser();
    testDataManager.insertTestData(currentUser);
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Test Data Cleanup</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`@AfterMethod(alwaysRun = true)
public void testDataCleanup() {
    try {
        // Clean up data created during test
        if (currentUser != null) {
            testDataManager.deleteUser(currentUser.getId());
        }
        
        // Clean up temporary files
        cleanupTempFiles();
        
        // Clear in-memory data
        InMemoryDataStore.clear();
        
    } catch (Exception e) {
        logger.error("Failed to cleanup test data", e);
    }
}

@AfterClass(alwaysRun = true)
public void cleanupTestData() {
    try {
        // Clean up all test data created during suite
        for (Integer userId : createdUserIds) {
            testDataManager.deleteUser(userId);
        }
        
        // Close database connections
        testDataManager.cleanup();
        
    } catch (Exception e) {
        logger.error("Failed to cleanup test suite data", e);
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Dependencies</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class DataDependencyManager {
    private Map<String, List<String>> dependencies = new HashMap<>();
    
    public void addDependency(String dataId, String dependsOn) {
        dependencies.computeIfAbsent(dataId, k -> new ArrayList<>()).add(dependsOn);
    }
    
    public List<String> getCleanupOrder(List<String> dataIds) {
        // Topological sort to handle dependencies
        List<String> ordered = new ArrayList<>();
        Set<String> visited = new HashSet<>();
        
        for (String dataId : dataIds) {
            if (!visited.contains(dataId)) {
                visit(dataId, visited, ordered);
            }
        }
        
        return ordered;
    }
    
    private void visit(String dataId, Set<String> visited, List<String> ordered) {
        visited.add(dataId);
        
        for (String dependency : dependencies.getOrDefault(dataId, Collections.emptyList())) {
            if (!visited.contains(dependency)) {
                visit(dependency, visited, ordered);
            }
        }
        
        ordered.add(dataId);
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
            <h2 className="text-3xl font-bold text-slate-900">Best Practices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Data Independence</h4>
                  <p className="text-sm text-slate-600">Ensure tests don't depend on each other's data</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Environment Isolation</h4>
                  <p className="text-sm text-slate-600">Use separate data for different test environments</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Atomic Operations</h4>
                  <p className="text-sm text-slate-600">Make data setup and cleanup atomic operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Version Control</h4>
                  <p className="text-sm text-slate-600">Keep test data files under version control</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Avoid Hardcoded Data</h4>
                  <p className="text-sm text-slate-600">Don't hardcode test data in test methods</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Prevent Data Pollution</h4>
                  <p className="text-sm text-slate-600">Always clean up test data after execution</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Sensitive Data Protection</h4>
                  <p className="text-sm text-slate-600">Encrypt and properly handle sensitive information</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Performance Considerations</h4>
                  <p className="text-sm text-slate-600">Optimize data operations for test performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Considerations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Security Considerations</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Encryption</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class SecureDataManager {
    private static final String ENCRYPTION_KEY = System.getenv("TEST_DATA_KEY");
    
    public static String encryptSensitiveData(String data) {
        try {
            Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            SecretKeySpec keySpec = new SecretKeySpec(ENCRYPTION_KEY.getBytes(), "AES");
            cipher.init(Cipher.ENCRYPT_MODE, keySpec);
            
            byte[] encrypted = cipher.doFinal(data.getBytes());
            return Base64.getEncoder().encodeToString(encrypted);
        } catch (Exception e) {
            throw new RuntimeException("Encryption failed", e);
        }
    }
    
    public static String decryptSensitiveData(String encryptedData) {
        try {
            Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            SecretKeySpec keySpec = new SecretKeySpec(ENCRYPTION_KEY.getBytes(), "AES");
            cipher.init(Cipher.DECRYPT_MODE, keySpec);
            
            byte[] decoded = Base64.getDecoder().decode(encryptedData);
            byte[] decrypted = cipher.doFinal(decoded);
            return new String(decrypted);
        } catch (Exception e) {
            throw new RuntimeException("Decryption failed", e);
        }
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Masking</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class DataMaskingUtil {
    public static String maskEmail(String email) {
        if (email == null || !email.contains("@")) return email;
        
        String[] parts = email.split("@");
        String username = parts[0];
        String domain = parts[1];
        
        if (username.length() <= 2) {
            return "**@" + domain;
        }
        
        String maskedUsername = username.substring(0, 2) + 
                              "*".repeat(username.length() - 2);
        return maskedUsername + "@" + domain;
    }
    
    public static String maskCreditCard(String cardNumber) {
        if (cardNumber == null || cardNumber.length() < 4) return "****";
        
        return "****-****-****-" + cardNumber.substring(cardNumber.length() - 4);
    }
    
    public static String maskPhoneNumber(String phone) {
        if (phone == null || phone.length() < 4) return "***-***-****";
        
        return "***-***-" + phone.substring(phone.length() - 4);
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Example */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Complete Test Data Management Example</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class UserRegistrationTest {
    private TestDataManager testDataManager;
    private List<Integer> createdUserIds = new ArrayList<>();
    
    @BeforeClass
    public void setUpClass() {
        testDataManager = new TestDataManager();
        // Load test configuration
        TestConfig.load("test-config.properties");
    }
    
    @BeforeMethod
    public void setUpMethod() {
        // Ensure clean state before each test
        testDataManager.cleanupTestData();
    }
    
    @Test(dataProvider = "registrationData")
    public void testUserRegistration(User testUser) {
        // Register user through UI
        RegistrationPage registrationPage = new RegistrationPage(driver);
        registrationPage.navigateToRegistration();
        
        registrationPage.enterUserDetails(
            testUser.getFirstName(),
            testUser.getLastName(),
            testUser.getEmail(),
            testUser.getPassword()
        );
        
        registrationPage.submitRegistration();
        
        // Verify registration success
        Assert.assertTrue(registrationPage.isRegistrationSuccessful(), 
                        "User registration should succeed");
        
        // Store created user for cleanup
        createdUserIds.add(testUser.getId());
        
        // Verify user in database
        User dbUser = testDataManager.getUserByEmail(testUser.getEmail());
        Assert.assertNotNull(dbUser, "User should exist in database");
        Assert.assertEquals(dbUser.getEmail(), testUser.getEmail());
    }
    
    @DataProvider(name = "registrationData")
    public Object[][] getRegistrationData() {
        return new Object[][] {
            {UserDataFactory.createStandardUser()},
            {UserDataFactory.createPremiumUser()},
            {UserDataFactory.createRandomUser()}
        };
    }
    
    @AfterMethod(alwaysRun = true)
    public void tearDownMethod() {
        // Clean up any data created during test
        for (Integer userId : createdUserIds) {
            try {
                testDataManager.deleteUser(userId);
            } catch (Exception e) {
                logger.warn("Failed to delete user: " + userId, e);
            }
        }
        createdUserIds.clear();
    }
    
    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        if (testDataManager != null) {
            testDataManager.cleanup();
        }
    }
}`}
            </pre>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Data Management Principles</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Separate test data from test logic
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Ensure data isolation and independence
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Implement proper cleanup mechanisms
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Use appropriate data generation strategies
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Best Practices</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Centralize data management logic
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Protect sensitive test data
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Optimize for performance and maintainability
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Document data structures and dependencies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDataManagement;
