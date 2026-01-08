'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Settings,
  FileText,
  Database,
  Code,
  Folder,
  Shield,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  Package,
  Key
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function ConfigurationManagementComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'configuration-management',
    title: 'Configuration Management',
    explanation: 'Managing test configuration and environment settings',
    category: '21. Framework Design'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="Configuration Management"
        description="Master the art of managing test configurations, environment settings, and test data to create flexible and maintainable automation frameworks"
        icon={Settings}
        category="Selenium · Test Architecture"
        colorTheme="orange"
        badges={[
          { label: 'Properties', variant: 'secondary' },
          { label: 'Environment', variant: 'secondary' },
          { label: 'Test Data', variant: 'secondary' },
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Configuration Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Settings className="w-7 h-7" />
              What is Configuration Management?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding configuration management in test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Definition</h4>
                <p className="text-orange-800 dark:text-orange-200">
                  Configuration management involves managing and controlling test configurations, environment settings, test data, and framework parameters to ensure consistent and reliable test execution across different environments.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4">Benefits</h4>
                <p className="text-amber-800 dark:text-amber-200">
                  Enables environment-specific testing, reduces maintenance overhead, improves test reliability, and allows easy switching between different test environments without code changes.
                </p>
              </div>
            </div>

            {/* Configuration Types */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Configuration Types</h5>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Environment Config</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">URLs, timeouts, browser settings</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <Database className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Test Data Config</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">User credentials, test inputs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Framework Config</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Logging, reporting, parallel settings</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Configuration File Formats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Folder className="w-7 h-7" />
              Configuration File Formats
            </CardTitle>
            <CardDescription className="text-base">
              Different formats for storing configuration data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Properties File */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Properties Files</h4>
                <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-4">
                  Simple key-value pairs for basic configuration
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                  <pre className="text-xs font-mono text-indigo-800 dark:text-indigo-200 overflow-x-auto whitespace-pre-wrap break-words">
{`# Environment Configuration
base.url=https://example.com
api.url=https://api.example.com
timeout=30
browser=chrome
headless=true

# Test Data
test.username=testuser@example.com
test.password=testpass123
admin.username=admin@example.com
admin.password=adminpass123

# Framework Settings
log.level=INFO
report.format=html
parallel.execution=true
thread.count=4`}</pre>
                </div>
              </div>

              {/* JSON Configuration */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">JSON Configuration</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  Structured data format for complex configurations
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`{
  "environment": {
    "name": "staging",
    "baseUrl": "https://staging.example.com",
    "apiUrl": "https://api.staging.example.com"
  },
  "browser": {
    "type": "chrome",
    "headless": true,
    "windowSize": "1920x1080",
    "timeout": 30
  },
  "testData": {
    "users": [
      {
        "type": "standard",
        "username": "testuser@example.com",
        "password": "testpass123"
      },
      {
        "type": "admin",
        "username": "admin@example.com",
        "password": "adminpass123"
      }
    ]
  },
  "framework": {
    "logLevel": "INFO",
    "reportFormat": "html",
    "parallelExecution": true,
    "threadCount": 4
  }
}`}</pre>
                </div>
              </div>

              {/* YAML Configuration */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">YAML Configuration</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                  Human-readable format with hierarchical structure
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`environment:
  name: staging
  baseUrl: https://staging.example.com
  apiUrl: https://api.staging.example.com

browser:
  type: chrome
  headless: true
  windowSize: 1920x1080
  timeout: 30

testData:
  users:
    - type: standard
      username: testuser@example.com
      password: testpass123
    - type: admin
      username: admin@example.com
      password: adminpass123

framework:
  logLevel: INFO
  reportFormat: html
  parallelExecution: true
  threadCount: 4`}</pre>
                </div>
              </div>

              {/* XML Configuration */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">XML Configuration</h4>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                  Structured markup format for enterprise applications
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <environment>
    <name>staging</name>
    <baseUrl>https://staging.example.com</baseUrl>
    <apiUrl>https://api.staging.example.com</apiUrl>
  </environment>
  
  <browser>
    <type>chrome</type>
    <headless>true</headless>
    <windowSize>1920x1080</windowSize>
    <timeout>30</timeout>
  </browser>
  
  <testData>
    <users>
      <user type="standard">
        <username>testuser@example.com</username>
        <password>testpass123</password>
      </user>
      <user type="admin">
        <username>admin@example.com</username>
        <password>adminpass123</password>
      </user>
    </users>
  </testData>
</configuration>`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Configuration Manager Implementation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Code className="w-7 h-7" />
              Configuration Manager Implementation
            </CardTitle>
            <CardDescription className="text-base">
              Building a robust configuration management system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Configuration Manager Example</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class ConfigManager {
    private static ConfigManager instance;
    private Properties properties;
    private Map<String, Object> configData;
    
    private ConfigManager() {
        loadConfiguration();
    }
    
    public static ConfigManager getInstance() {
        if (instance == null) {
            synchronized (ConfigManager.class) {
                if (instance == null) {
                    instance = new ConfigManager();
                }
            }
        }
        return instance;
    }
    
    private void loadConfiguration() {
        try {
            // Load environment-specific configuration
            String environment = System.getProperty("env", "dev");
            String configFile = "config/" + environment + ".properties";
            
            // Load properties file
            properties = new Properties();
            try (InputStream input = getClass()
                    .getClassLoader()
                    .getResourceAsStream(configFile)) {
                if (input == null) {
                    throw new RuntimeException(
                        "Configuration file not found: " + configFile);
                }
                properties.load(input);
            }
            
            // Load JSON configuration if available
            loadJsonConfig(environment);
            
        } catch (IOException e) {
            throw new RuntimeException(
                "Error loading configuration: " + e.getMessage());
        }
    }
    
    private void loadJsonConfig(String environment) {
        try {
            String jsonFile = "config/" + environment + ".json";
            InputStream input = getClass()
                .getClassLoader()
                .getResourceAsStream(jsonFile);
            
            if (input != null) {
                ObjectMapper mapper = new ObjectMapper();
                configData = mapper.readValue(input, Map.class);
                input.close();
            }
        } catch (Exception e) {
            System.out.println("JSON config not found: " + e.getMessage());
        }
    }
    
    // Get configuration value
    public String getProperty(String key) {
        return properties.getProperty(key);
    }
    
    public String getProperty(String key, String defaultValue) {
        return properties.getProperty(key, defaultValue);
    }
    
    public int getIntProperty(String key) {
        return Integer.parseInt(properties.getProperty(key));
    }
    
    public boolean getBooleanProperty(String key) {
        return Boolean.parseBoolean(properties.getProperty(key));
    }
    
    // Get JSON configuration value
    @SuppressWarnings("unchecked")
    public <T> T getJsonConfig(String path, Class<T> type) {
        if (configData == null) {
            return null;
        }
        
        String[] keys = path.split("\\.");
        Object current = configData;
        
        for (String key : keys) {
            if (current instanceof Map) {
                current = ((Map<String, Object>) current).get(key);
            } else {
                return null;
            }
        }
        
        return type.cast(current);
    }
    
    // Environment-specific methods
    public String getBaseUrl() {
        return getProperty("base.url");
    }
    
    public String getApiUrl() {
        return getProperty("api.url");
    }
    
    public int getTimeout() {
        return getIntProperty("timeout");
    }
    
    public String getBrowser() {
        return getProperty("browser");
    }
    
    public boolean isHeadless() {
        return getBooleanProperty("headless");
    }
    
    // Test data methods
    public String getTestUsername() {
        return getProperty("test.username");
    }
    
    public String getTestPassword() {
        return getProperty("test.password");
    }
    
    // Framework settings
    public String getLogLevel() {
        return getProperty("log.level", "INFO");
    }
    
    public String getReportFormat() {
        return getProperty("report.format", "html");
    }
    
    public boolean isParallelExecution() {
        return getBooleanProperty("parallel.execution");
    }
    
    public int getThreadCount() {
        return getIntProperty("thread.count");
    }
    
    // Reload configuration
    public void reload() {
        loadConfiguration();
    }
    
    // Validate required properties
    public void validateRequiredProperties(String... requiredKeys) {
        for (String key : requiredKeys) {
            if (getProperty(key) == null) {
                throw new RuntimeException(
                    "Required property missing: " + key);
            }
        }
    }
}

// Configuration Builder Pattern
public class ConfigBuilder {
    private Properties properties = new Properties();
    
    public ConfigBuilder setBaseUrl(String url) {
        properties.setProperty("base.url", url);
        return this;
    }
    
    public ConfigBuilder setBrowser(String browser) {
        properties.setProperty("browser", browser);
        return this;
    }
    
    public ConfigBuilder setTimeout(int timeout) {
        properties.setProperty("timeout", String.valueOf(timeout));
        return this;
    }
    
    public ConfigBuilder setHeadless(boolean headless) {
        properties.setProperty("headless", String.valueOf(headless));
        return this;
    }
    
    public ConfigBuilder setLogLevel(String level) {
        properties.setProperty("log.level", level);
        return this;
    }
    
    public Properties build() {
        return new Properties(properties);
    }
}

// Environment-specific Configuration Loader
public class EnvironmentConfigLoader {
    private static final String CONFIG_PATH = "config/";
    
    public static Properties loadEnvironmentConfig(String environment) {
        Properties properties = new Properties();
        
        try {
            // Load base configuration
            loadProperties(properties, CONFIG_PATH + "base.properties");
            
            // Load environment-specific configuration
            loadProperties(properties, CONFIG_PATH + environment + ".properties");
            
            // Override with system properties
            properties.putAll(System.getProperties());
            
        } catch (IOException e) {
            throw new RuntimeException(
                "Error loading environment config: " + e.getMessage());
        }
        
        return properties;
    }
    
    private static void loadProperties(Properties properties, 
                                      String filename) throws IOException {
        InputStream input = EnvironmentConfigLoader.class
            .getClassLoader()
            .getResourceAsStream(filename);
        
        if (input != null) {
            properties.load(input);
            input.close();
        }
    }
}

// Usage Example
public class TestRunner {
    public static void main(String[] args) {
        // Get configuration manager instance
        ConfigManager config = ConfigManager.getInstance();
        
        // Validate required properties
        config.validateRequiredProperties("base.url", "browser");
        
        // Use configuration
        String baseUrl = config.getBaseUrl();
        String browser = config.getBrowser();
        int timeout = config.getTimeout();
        
        System.out.println("Base URL: " + baseUrl);
        System.out.println("Browser: " + browser);
        System.out.println("Timeout: " + timeout);
        
        // Create WebDriver with configuration
        WebDriver driver = createWebDriver(config);
        
        // Run tests
        runTests(driver, config);
        
        driver.quit();
    }
    
    private static WebDriver createWebDriver(ConfigManager config) {
        String browser = config.getBrowser();
        boolean headless = config.isHeadless();
        
        switch (browser.toLowerCase()) {
            case "chrome":
                return createChromeDriver(config);
            case "firefox":
                return createFirefoxDriver(config);
            default:
                throw new IllegalArgumentException(
                    "Unsupported browser: " + browser);
        }
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Star className="w-7 h-7" />
              Configuration Management Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Best Practices ✅
              </h4>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use environment-specific configuration files</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement singleton pattern for config manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Provide default values for optional properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Validate required properties on startup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use environment variables for sensitive data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement configuration reload capability</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't hardcode configuration values in code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid storing sensitive data in plain text</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore configuration validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid complex nested configuration structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't skip proper error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid configuration file naming conflicts</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30">
          <Settings className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-900 dark:text-orange-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            <ul className="space-y-2 mt-2">
              <li>• Use external configuration files for environment-specific settings</li>
              <li>• Implement singleton pattern for configuration management</li>
              <li>• Validate required properties and provide default values</li>
              <li>• Use environment variables for sensitive configuration data</li>
              <li>• Design configuration system for flexibility and maintainability</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Topic Navigation */}
        <TopicNavigation 
          currentTopic={currentTopic}
          language={language}
        />
      </div>
    </div>
  );
}
