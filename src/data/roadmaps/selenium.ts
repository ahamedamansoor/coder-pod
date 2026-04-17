import type { Roadmap } from './types';

export const selenium: Roadmap = {
  name: 'Selenium',
  slug: 'selenium',
  description: 'Industry-standard browser automation and web testing framework',
  topics: [
    // Learning Plan - First item for sidebar
    {
      title: 'Learning Plan',
      slug: 'learning-plan',
      explanation: 'Complete Selenium WebDriver learning roadmap with all topics organized by category',
    },

    // Interactive Playground
    {
      title: 'Selenium Playground',
      slug: 'selenium-playground',
      explanation: 'Interactive playground for practicing Selenium concepts with visual feedback and real-time examples',
    },

    // Getting Started
    {
      title: 'Introduction to Selenium',
      slug: 'introduction',
      category: 'Getting Started',
      explanation: 'What is Selenium, its history, and why it\'s the industry standard for web automation',
    },
    {
      title: 'Selenium Architecture',
      slug: 'architecture',
      category: 'Getting Started',
      explanation: 'Understanding Selenium WebDriver architecture and how it communicates with browsers',
    },
    {
      title: 'Installation & Setup',
      slug: 'installation-setup',
      category: 'Getting Started',
      explanation: 'Install Selenium for Python, Java, JavaScript, or C# and configure your environment',
    },
    {
      title: 'WebDriver Manager',
      slug: 'webdriver-manager',
      category: 'Getting Started',
      explanation: 'Automatically manage browser drivers with WebDriver Manager',
    },
    {
      title: 'Your First Test',
      slug: 'first-test',
      category: 'Getting Started',
      explanation: 'Write and run your first Selenium WebDriver test',
    },

    // Browser Configuration
    {
      title: 'Chrome WebDriver',
      slug: 'chrome-webdriver',
      category: 'Browser Configuration',
      explanation: 'Setting up and configuring ChromeDriver for testing',
    },
    {
      title: 'Firefox WebDriver',
      slug: 'firefox-webdriver',
      category: 'Browser Configuration',
      explanation: 'Setting up and configuring GeckoDriver for Firefox testing',
    },
    {
      title: 'Edge & Safari WebDriver',
      slug: 'edge-safari-webdriver',
      category: 'Browser Configuration',
      explanation: 'Configuring Edge and Safari browsers for Selenium tests',
    },
    {
      title: 'Browser Options',
      slug: 'browser-options',
      category: 'Browser Configuration',
      explanation: 'Configuring browser behavior with ChromeOptions, FirefoxOptions, etc.',
    },
    {
      title: 'Headless Mode',
      slug: 'headless-mode',
      category: 'Browser Configuration',
      explanation: 'Running browsers in headless mode for CI/CD environments',
    },

    // Locator Strategies
    {
      title: 'ID & Name Locators',
      slug: 'id-name-locators',
      category: 'Locator Strategies',
      explanation: 'Finding elements by ID and name attributes',
    },
    {
      title: 'Class & Tag Locators',
      slug: 'class-tag-locators',
      category: 'Locator Strategies',
      explanation: 'Locating elements by class name and HTML tag',
    },
    {
      title: 'Link Text Locators',
      slug: 'link-text-locators',
      category: 'Locator Strategies',
      explanation: 'Finding links by exact and partial text content',
    },
    {
      title: 'CSS Selectors',
      slug: 'css-selectors',
      category: 'Locator Strategies',
      explanation: 'Powerful element selection using CSS selector syntax',
    },
    {
      title: 'XPath Basics',
      slug: 'xpath-basics',
      category: 'Locator Strategies',
      explanation: 'Introduction to XPath for element location',
    },
    {
      title: 'Advanced XPath',
      slug: 'advanced-xpath',
      category: 'Locator Strategies',
      explanation: 'Complex XPath expressions: axes, functions, and predicates',
    },
    {
      title: 'Relative Locators',
      slug: 'relative-locators',
      category: 'Locator Strategies',
      explanation: 'Selenium 4 relative locators: above, below, near, toLeftOf, toRightOf',
    },

    // CI/CD Integration
    {
      title: 'Jenkins Integration',
      slug: 'jenkins-integration',
      category: 'CI/CD Integration',
      explanation: 'Configure Jenkins pipelines for automated Selenium testing with detailed setup and examples',
    },
    {
      title: 'GitHub Actions',
      slug: 'github-actions',
      category: 'CI/CD Integration',
      explanation: 'Automate Selenium testing with GitHub Actions workflows and matrix strategies',
    },
    {
      title: 'GitLab CI/CD',
      slug: 'gitlab-cicd',
      category: 'CI/CD Integration',
      explanation: 'Configure GitLab CI/CD pipelines for automated Selenium testing with Docker integration',
    },
    {
      title: 'Parallel Execution',
      slug: 'parallel-execution',
      category: 'CI/CD Integration',
      explanation: 'Master parallel test execution with Selenium Grid and test distribution strategies',
    },

    // Performance & Optimization
    {
      title: 'Test Performance',
      slug: 'test-performance',
      category: 'Performance & Optimization',
      explanation: 'Optimize Selenium test performance with advanced techniques and best practices',
    },
    {
      title: 'Resource Management',
      slug: 'resource-management',
      category: 'Performance & Optimization',
      explanation: 'Manage system resources efficiently for optimal Selenium test execution',
    },
    {
      title: 'Flaky Test Prevention',
      slug: 'flaky-test-prevention',
      category: 'Performance & Optimization',
      explanation: 'Prevent and eliminate flaky tests with stability strategies and best practices',
    },
    {
      title: 'Memory Management',
      slug: 'memory-management',
      category: 'Performance & Optimization',
      explanation: 'Advanced memory management techniques for Selenium test optimization and leak prevention',
    },

    // Element Interactions
    {
      title: 'Click & Submit',
      slug: 'click-submit',
      category: 'Element Interactions',
      explanation: 'Clicking elements and submitting forms',
    },
    {
      title: 'Text Input & Clear',
      slug: 'text-input-clear',
      category: 'Element Interactions',
      explanation: 'Typing text into inputs and clearing fields',
    },
    {
      title: 'Element Properties',
      slug: 'element-properties',
      category: 'Element Interactions',
      explanation: 'Getting text, attributes, CSS properties, and element state',
    },
    {
      title: 'Select Dropdowns',
      slug: 'select-dropdowns',
      category: 'Element Interactions',
      explanation: 'Working with HTML select elements and dropdowns',
    },
    {
      title: 'Checkboxes & Radio Buttons',
      slug: 'checkboxes-radio',
      category: 'Element Interactions',
      explanation: 'Handling checkbox and radio button interactions',
    },
    {
      title: 'File Uploads',
      slug: 'file-uploads',
      category: 'Element Interactions',
      explanation: 'Uploading files through file input elements',
    },

    // Waits & Synchronization
    {
      title: 'Implicit Waits',
      slug: 'implicit-waits',
      category: 'Waits & Synchronization',
      explanation: 'Setting global wait times for element location',
    },
    {
      title: 'Explicit Waits',
      slug: 'explicit-waits',
      category: 'Waits & Synchronization',
      explanation: 'Waiting for specific conditions with WebDriverWait',
    },
    {
      title: 'Expected Conditions',
      slug: 'expected-conditions',
      category: 'Waits & Synchronization',
      explanation: 'Common wait conditions: visibility, clickability, presence, etc.',
    },
    {
      title: 'Fluent Waits',
      slug: 'fluent-waits',
      category: 'Waits & Synchronization',
      explanation: 'Custom polling intervals and exception handling in waits',
    },
    {
      title: 'Custom Wait Conditions',
      slug: 'custom-wait-conditions',
      category: 'Waits & Synchronization',
      explanation: 'Creating custom expected conditions for complex scenarios',
    },

    // Browser Navigation
    {
      title: 'URL Navigation',
      slug: 'url-navigation',
      category: 'Browser Navigation',
      explanation: 'Navigating to URLs and getting current page information',
    },
    {
      title: 'Browser History',
      slug: 'browser-history',
      category: 'Browser Navigation',
      explanation: 'Back, forward, and refresh navigation commands',
    },
    {
      title: 'Window Management',
      slug: 'window-management',
      category: 'Browser Navigation',
      explanation: 'Maximize, minimize, resize, and position browser windows',
    },
    {
      title: 'Multiple Windows & Tabs',
      slug: 'multiple-windows-tabs',
      category: 'Browser Navigation',
      explanation: 'Handling multiple browser windows and tabs',
    },

    // Advanced Interactions
    {
      title: 'Actions Class',
      slug: 'actions-class',
      category: 'Advanced Interactions',
      explanation: 'Introduction to the Actions class for complex interactions',
    },
    {
      title: 'Mouse Actions',
      slug: 'mouse-actions',
      category: 'Advanced Interactions',
      explanation: 'Click, double-click, right-click, hover, and drag-and-drop',
    },
    {
      title: 'Keyboard Actions',
      slug: 'keyboard-actions',
      category: 'Advanced Interactions',
      explanation: 'Key press, key down, key up, and keyboard shortcuts',
    },
    {
      title: 'Scroll Operations',
      slug: 'scroll-operations',
      category: 'Advanced Interactions',
      explanation: 'Scrolling to elements and specific positions',
    },
    {
      title: 'Drag and Drop',
      slug: 'drag-and-drop',
      category: 'Advanced Interactions',
      explanation: 'Implementing drag and drop functionality in tests',
    },

    // Frames & Alerts
    {
      title: 'Working with iFrames',
      slug: 'working-with-iframes',
      category: 'Frames & Alerts',
      explanation: 'Switching to and interacting with iframe content',
    },
    {
      title: 'Nested Frames',
      slug: 'nested-frames',
      category: 'Frames & Alerts',
      explanation: 'Handling nested iframe structures',
    },
    {
      title: 'JavaScript Alerts',
      slug: 'javascript-alerts',
      category: 'Frames & Alerts',
      explanation: 'Handling alert, confirm, and prompt dialogs',
    },
    {
      title: 'Browser Popups',
      slug: 'browser-popups',
      category: 'Frames & Alerts',
      explanation: 'Managing browser-generated popups and notifications',
    },

    // JavaScript Execution
    {
      title: 'Execute JavaScript',
      slug: 'execute-javascript',
      category: 'JavaScript Execution',
      explanation: 'Running JavaScript code in the browser context',
    },
    {
      title: 'JavaScript Click & Scroll',
      slug: 'javascript-click-scroll',
      category: 'JavaScript Execution',
      explanation: 'Using JavaScript for clicks and scrolling when native methods fail',
    },
    {
      title: 'DOM Manipulation',
      slug: 'dom-manipulation',
      category: 'JavaScript Execution',
      explanation: 'Modifying page elements using JavaScript',
    },
    {
      title: 'Async JavaScript',
      slug: 'async-javascript',
      category: 'JavaScript Execution',
      explanation: 'Executing asynchronous JavaScript and handling callbacks',
    },

    // Screenshots & Visual Testing
    {
      title: 'Taking Screenshots',
      slug: 'taking-screenshots',
      category: 'Screenshots & Visual Testing',
      explanation: 'Capturing full page and element screenshots',
    },
    {
      title: 'Screenshot on Failure',
      slug: 'screenshot-on-failure',
      category: 'Screenshots & Visual Testing',
      explanation: 'Automatically capturing screenshots when tests fail',
    },
    {
      title: 'Visual Comparison',
      slug: 'visual-comparison',
      category: 'Screenshots & Visual Testing',
      explanation: 'Comparing screenshots for visual regression testing',
    },

    // Cookies & Storage
    {
      title: 'Cookie Management',
      slug: 'cookie-management',
      category: 'Cookies & Storage',
      explanation: 'Adding, getting, and deleting browser cookies',
    },
    {
      title: 'Local Storage',
      slug: 'local-storage',
      category: 'Cookies & Storage',
      explanation: 'Interacting with browser local storage',
    },
    {
      title: 'Session Storage',
      slug: 'session-storage',
      category: 'Cookies & Storage',
      explanation: 'Managing session storage in tests',
    },

    // Test Frameworks Integration
    {
      title: 'TestNG Integration',
      slug: 'testng-integration',
      category: 'Test Frameworks Integration',
      explanation: 'Using Selenium with TestNG for Java testing',
    },
    {
      title: 'JUnit Integration',
      slug: 'junit-integration',
      category: 'Test Frameworks Integration',
      explanation: 'Integrating Selenium with JUnit framework',
    },
    {
      title: 'pytest Integration',
      slug: 'pytest-integration',
      category: 'Test Frameworks Integration',
      explanation: 'Using Selenium with pytest for Python testing',
    },
    {
      title: 'Mocha/Jest Integration',
      slug: 'mocha-jest-integration',
      category: 'Test Frameworks Integration',
      explanation: 'JavaScript testing with Mocha or Jest',
    },

    // Page Object Model
    {
      title: 'POM Introduction',
      slug: 'pom-introduction',
      category: 'Page Object Model',
      explanation: 'Understanding the Page Object Model design pattern',
    },
    {
      title: 'Creating Page Objects',
      slug: 'creating-page-objects',
      category: 'Page Object Model',
      explanation: 'Building reusable page object classes',
    },
    {
      title: 'Page Factory',
      slug: 'page-factory',
      category: 'Page Object Model',
      explanation: 'Using PageFactory for element initialization (Java)',
    },
    {
      title: 'POM Best Practices',
      slug: 'pom-best-practices',
      category: 'Page Object Model',
      explanation: 'Best practices for maintainable page objects',
    },

    // Data-Driven Testing
    {
      title: 'Data Providers',
      slug: 'data-providers',
      category: 'Data-Driven Testing',
      explanation: 'Using data providers for parameterized tests',
    },
    {
      title: 'Excel Data Reading',
      slug: 'excel-data-reading',
      category: 'Data-Driven Testing',
      explanation: 'Reading test data from Excel files',
    },
    {
      title: 'CSV & JSON Data',
      slug: 'csv-json-data',
      category: 'Data-Driven Testing',
      explanation: 'Using CSV and JSON files for test data',
    },
    {
      title: 'Database Integration',
      slug: 'database-integration',
      category: 'Data-Driven Testing',
      explanation: 'Fetching test data from databases',
    },

    // Selenium Grid
    {
      title: 'Grid Introduction',
      slug: 'grid-introduction',
      category: 'Selenium Grid',
      explanation: 'Understanding Selenium Grid architecture and benefits',
    },
    {
      title: 'Grid Setup',
      slug: 'grid-setup',
      category: 'Selenium Grid',
      explanation: 'Setting up Selenium Grid Hub and Nodes',
    },
    {
      title: 'Remote WebDriver',
      slug: 'remote-webdriver',
      category: 'Selenium Grid',
      explanation: 'Running tests on remote browsers with RemoteWebDriver',
    },
    {
      title: 'Docker with Grid',
      slug: 'docker-with-grid',
      category: 'Selenium Grid',
      explanation: 'Running Selenium Grid in Docker containers',
    },
    {
      title: 'Cloud Testing Platforms',
      slug: 'cloud-testing-platforms',
      category: 'Selenium Grid',
      explanation: 'Using BrowserStack, Sauce Labs, and LambdaTest',
    },

    // Handling Special Elements
    {
      title: 'Shadow DOM',
      slug: 'shadow-dom',
      category: 'Handling Special Elements',
      explanation: 'Interacting with Shadow DOM elements',
    },
    {
      title: 'Canvas Elements',
      slug: 'canvas-elements',
      category: 'Handling Special Elements',
      explanation: 'Testing HTML5 canvas elements',
    },
    {
      title: 'SVG Elements',
      slug: 'svg-elements',
      category: 'Handling Special Elements',
      explanation: 'Locating and interacting with SVG elements',
    },
    {
      title: 'Date Pickers',
      slug: 'date-pickers',
      category: 'Handling Special Elements',
      explanation: 'Handling various date picker implementations',
    },
    {
      title: 'Rich Text Editors',
      slug: 'rich-text-editors',
      category: 'Handling Special Elements',
      explanation: 'Testing WYSIWYG and rich text editors',
    },

    // Error Handling & Debugging
    {
      title: 'Common Exceptions',
      slug: 'common-exceptions',
      category: 'Error Handling & Debugging',
      explanation: 'Understanding and handling Selenium exceptions',
    },
    {
      title: 'Stale Element Reference',
      slug: 'stale-element-reference',
      category: 'Error Handling & Debugging',
      explanation: 'Handling StaleElementReferenceException',
    },
    {
      title: 'Element Not Found',
      slug: 'element-not-found',
      category: 'Error Handling & Debugging',
      explanation: 'Debugging NoSuchElementException issues',
    },
    {
      title: 'Timeout Exceptions',
      slug: 'timeout-exceptions',
      category: 'Error Handling & Debugging',
      explanation: 'Handling TimeoutException and improving wait strategies',
    },
    {
      title: 'Logging & Reporting',
      slug: 'logging-reporting',
      category: 'Error Handling & Debugging',
      explanation: 'Implementing logging and test reporting',
    },

    // CI/CD Integration
    {
      title: 'Jenkins Integration',
      slug: 'jenkins-integration',
      category: 'CI/CD Integration',
      explanation: 'Running Selenium tests in Jenkins pipelines',
    },
    {
      title: 'GitHub Actions',
      slug: 'github-actions',
      category: 'CI/CD Integration',
      explanation: 'Configuring Selenium tests with GitHub Actions',
    },
    {
      title: 'GitLab CI',
      slug: 'gitlab-ci',
      category: 'CI/CD Integration',
      explanation: 'Setting up Selenium in GitLab CI/CD',
    },
    {
      title: 'Parallel Execution',
      slug: 'parallel-execution',
      category: 'CI/CD Integration',
      explanation: 'Running tests in parallel for faster execution',
    },

    // Performance & Optimization
    {
      title: 'Test Performance',
      slug: 'test-performance',
      category: 'Performance & Optimization',
      explanation: 'Optimizing test execution speed',
    },
    {
      title: 'Resource Management',
      slug: 'resource-management',
      category: 'Performance & Optimization',
      explanation: 'Proper browser and driver cleanup',
    },
    {
      title: 'Flaky Test Prevention',
      slug: 'flaky-test-prevention',
      category: 'Performance & Optimization',
      explanation: 'Strategies to prevent and fix flaky tests',
    },
    {
      title: 'Memory Management',
      slug: 'memory-management',
      category: 'Performance & Optimization',
      explanation: 'Avoiding memory leaks in test suites',
    },

    // Best Practices
    {
      title: 'Test Design Principles',
      slug: 'test-design-principles',
      category: 'Best Practices',
      explanation: 'SOLID principles and clean code for test automation',
    },
    {
      title: 'Locator Best Practices',
      slug: 'locator-best-practices',
      category: 'Best Practices',
      explanation: 'Choosing reliable and maintainable locators',
    },
    {
      title: 'Test Independence',
      slug: 'test-independence',
      category: 'Best Practices',
      explanation: 'Writing independent and isolated tests',
    },
    {
      title: 'Maintainable Test Code',
      slug: 'maintainable-test-code',
      category: 'Best Practices',
      explanation: 'Writing clean, readable, and maintainable test code',
    },
    {
      title: 'Cross-Browser Testing',
      slug: 'cross-browser-testing',
      category: 'Best Practices',
      explanation: 'Strategies for effective cross-browser testing',
    },

    // Framework Architecture
    {
      title: 'Framework Design Principles',
      slug: 'framework-design-principles',
      category: 'Framework Architecture',
      explanation: 'Designing scalable and maintainable test automation frameworks',
    },
    {
      title: 'Hybrid Framework',
      slug: 'hybrid-framework',
      category: 'Framework Architecture',
      explanation: 'Building hybrid frameworks combining multiple approaches',
    },
    {
      title: 'Keyword-Driven Framework',
      slug: 'keyword-driven-framework',
      category: 'Framework Architecture',
      explanation: 'Implementing keyword-driven test automation',
    },
    {
      title: 'Configuration Management',
      slug: 'configuration-management',
      category: 'Framework Architecture',
      explanation: 'Managing test configurations, environments, and properties',
    },
    {
      title: 'Utility Classes & Helpers',
      slug: 'utility-classes-helpers',
      category: 'Framework Architecture',
      explanation: 'Creating reusable utility classes for common operations',
    },
    {
      title: 'Base Classes & Inheritance',
      slug: 'base-classes-inheritance',
      category: 'Framework Architecture',
      explanation: 'Using inheritance for test class organization',
    },

    // Reporting & Documentation
    {
      title: 'Extent Reports',
      slug: 'extent-reports',
      category: 'Reporting & Documentation',
      explanation: 'Creating rich HTML reports with Extent Reports',
    },
    {
      title: 'Allure Reports',
      slug: 'allure-reports',
      category: 'Reporting & Documentation',
      explanation: 'Implementing Allure reporting framework',
    },
    {
      title: 'TestNG Reports',
      slug: 'testng-reports',
      category: 'Reporting & Documentation',
      explanation: 'Customizing TestNG HTML and XML reports',
    },
    {
      title: 'Custom Report Generation',
      slug: 'custom-report-generation',
      category: 'Reporting & Documentation',
      explanation: 'Building custom reporting solutions',
    },
    {
      title: 'Test Documentation',
      slug: 'test-documentation',
      category: 'Reporting & Documentation',
      explanation: 'Documenting test cases and automation frameworks',
    },

    // API & UI Combined Testing
    {
      title: 'REST API Basics',
      slug: 'rest-api-basics',
      category: 'API & UI Combined Testing',
      explanation: 'Understanding REST APIs for test automation',
    },
    {
      title: 'RestAssured Integration',
      slug: 'restassured-integration',
      category: 'API & UI Combined Testing',
      explanation: 'Using RestAssured with Selenium for API testing',
    },
    {
      title: 'API Test Setup',
      slug: 'api-test-setup',
      category: 'API & UI Combined Testing',
      explanation: 'Setting up test data via API before UI tests',
    },
    {
      title: 'API Validation in UI Tests',
      slug: 'api-validation-ui-tests',
      category: 'API & UI Combined Testing',
      explanation: 'Validating API responses alongside UI verification',
    },
    {
      title: 'Authentication via API',
      slug: 'authentication-via-api',
      category: 'API & UI Combined Testing',
      explanation: 'Bypassing login UI using API authentication',
    },

    // Mobile Web Testing
    {
      title: 'Mobile Emulation',
      slug: 'mobile-emulation',
      category: 'Mobile Web Testing',
      explanation: 'Testing mobile web using Chrome DevTools emulation',
    },
    {
      title: 'Responsive Testing',
      slug: 'responsive-testing',
      category: 'Mobile Web Testing',
      explanation: 'Testing responsive designs across viewports',
    },
    {
      title: 'Touch Actions',
      slug: 'touch-actions',
      category: 'Mobile Web Testing',
      explanation: 'Simulating touch gestures in mobile web testing',
    },

    // Selenium 4 Features
    {
      title: 'W3C WebDriver Protocol',
      slug: 'w3c-webdriver-protocol',
      category: 'Selenium 4 Features',
      explanation: 'Understanding W3C WebDriver standardization',
    },
    {
      title: 'Chrome DevTools Protocol',
      slug: 'chrome-devtools-protocol',
      category: 'Selenium 4 Features',
      explanation: 'Using CDP for advanced browser control',
    },
    {
      title: 'BiDi APIs',
      slug: 'bidi-apis',
      category: 'Selenium 4 Features',
      explanation: 'WebDriver BiDi - Next-generation bidirectional browser automation protocol for enhanced testing and real-time communication',
    },
    {
      title: 'Network Interception',
      slug: 'network-interception',
      category: 'Selenium 4 Features',
      explanation: 'Intercepting and mocking network requests',
    },
    {
      title: 'New Window & Tab APIs',
      slug: 'new-window-tab-apis',
      category: 'Selenium 4 Features',
      explanation: 'New APIs for window and tab management',
    },

    // Security Testing
    {
      title: 'Security Testing Basics',
      slug: 'security-testing-basics',
      category: 'Security Testing',
      explanation: 'Introduction to security testing with Selenium',
    },
    {
      title: 'XSS Testing',
      slug: 'xss-testing',
      category: 'Security Testing',
      explanation: 'Testing for Cross-Site Scripting vulnerabilities',
    },
    {
      title: 'SQL Injection Testing',
      slug: 'sql-injection-testing',
      category: 'Security Testing',
      explanation: 'Testing for SQL injection vulnerabilities',
    },
    {
      title: 'Authentication Testing',
      slug: 'authentication-testing',
      category: 'Security Testing',
      explanation: 'Testing authentication and authorization flows',
    },
    {
      title: 'OWASP Integration',
      slug: 'owasp-integration',
      category: 'Security Testing',
      explanation: 'Integrating OWASP ZAP with Selenium tests',
    },

    // Accessibility Testing
    {
      title: 'Accessibility Fundamentals',
      slug: 'accessibility-fundamentals',
      category: 'Accessibility Testing',
      explanation: 'Understanding WCAG guidelines and accessibility standards',
    },
    {
      title: 'axe-core Integration',
      slug: 'axe-core-integration',
      category: 'Accessibility Testing',
      explanation: 'Automated accessibility testing with axe-core',
    },
    {
      title: 'Keyboard Navigation Testing',
      slug: 'keyboard-navigation-testing',
      category: 'Accessibility Testing',
      explanation: 'Testing keyboard accessibility and focus management',
    },
    {
      title: 'Screen Reader Testing',
      slug: 'screen-reader-testing',
      category: 'Accessibility Testing',
      explanation: 'Testing with screen readers and ARIA attributes',
    },
    {
      title: 'Color Contrast Testing',
      slug: 'color-contrast-testing',
      category: 'Accessibility Testing',
      explanation: 'Validating color contrast ratios for accessibility',
    },

    // Performance Testing Integration
    {
      title: 'Performance Metrics Collection',
      slug: 'performance-metrics-collection',
      category: 'Performance Testing Integration',
      explanation: 'Collecting browser performance metrics with Selenium',
    },
    {
      title: 'Navigation Timing API',
      slug: 'navigation-timing-api',
      category: 'Performance Testing Integration',
      explanation: 'Using Navigation Timing API for page load metrics',
    },
    {
      title: 'Resource Timing',
      slug: 'resource-timing',
      category: 'Performance Testing Integration',
      explanation: 'Measuring resource loading performance',
    },
    {
      title: 'JMeter Integration',
      slug: 'jmeter-integration',
      category: 'Performance Testing Integration',
      explanation: 'Combining Selenium with JMeter for load testing',
    },

    // Test Management & Organization
    {
      title: 'Test Suites Organization',
      slug: 'test-suites-organization',
      category: 'Test Management & Organization',
      explanation: 'Organizing tests into logical suites and groups',
    },
    {
      title: 'Test Prioritization',
      slug: 'test-prioritization',
      category: 'Test Management & Organization',
      explanation: 'Prioritizing tests for efficient execution',
    },
    {
      title: 'Test Tagging & Filtering',
      slug: 'test-tagging-filtering',
      category: 'Test Management & Organization',
      explanation: 'Using tags and filters for selective test execution',
    },
    {
      title: 'Test Management Tools',
      slug: 'test-management-tools',
      category: 'Test Management & Organization',
      explanation: 'Integrating with TestRail, Zephyr, and other tools',
    },
    {
      title: 'Defect Tracking Integration',
      slug: 'defect-tracking-integration',
      category: 'Test Management & Organization',
      explanation: 'Linking tests with Jira and defect tracking systems',
    },

    // Real-World Scenarios
    {
      title: 'E-commerce Testing',
      slug: 'ecommerce-testing',
      category: 'Real-World Scenarios',
      explanation: 'Testing shopping carts, checkout, and payment flows',
    },
    {
      title: 'Banking Application Testing',
      slug: 'banking-application-testing',
      category: 'Real-World Scenarios',
      explanation: 'Testing financial applications with security focus',
    },
    {
      title: 'Social Media Testing',
      slug: 'social-media-testing',
      category: 'Real-World Scenarios',
      explanation: 'Testing social features, feeds, and interactions',
    },
    {
      title: 'SaaS Application Testing',
      slug: 'saas-application-testing',
      category: 'Real-World Scenarios',
      explanation: 'Testing multi-tenant SaaS applications',
    },
    {
      title: 'Healthcare Application Testing',
      slug: 'healthcare-application-testing',
      category: 'Real-World Scenarios',
      explanation: 'Testing healthcare apps with compliance requirements',
    },
  ],
};
