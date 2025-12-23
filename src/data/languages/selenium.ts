import type { Language } from './types';

export const selenium: Language = {
  name: 'Selenium',
  slug: 'selenium',
  description: 'Industry-standard browser automation and web testing framework',
  topics: [
    // Learning Plan - First item for sidebar
    {
      title: 'Learning Plan',
      slug: 'learning-plan',
      category: 'Overview',
      explanation: 'Complete Selenium WebDriver learning roadmap with all topics organized by category',
    },

    // Interactive Playground
    {
      title: 'Selenium Playground',
      slug: 'selenium-playground',
      category: 'Overview',
      explanation: 'Interactive playground for practicing Selenium concepts with visual feedback and real-time examples',
    },

    // 1. Getting Started
    {
      title: 'Introduction to Selenium',
      slug: 'introduction',
      category: '1. Getting Started',
      explanation: 'What is Selenium, its history, and why it\'s the industry standard for web automation',
    },
    {
      title: 'Selenium Architecture',
      slug: 'architecture',
      category: '1. Getting Started',
      explanation: 'Understanding Selenium WebDriver architecture and how it communicates with browsers',
    },
    {
      title: 'Installation & Setup',
      slug: 'installation-setup',
      category: '1. Getting Started',
      explanation: 'Install Selenium for Python, Java, JavaScript, or C# and configure your environment',
    },
    {
      title: 'WebDriver Manager',
      slug: 'webdriver-manager',
      category: '1. Getting Started',
      explanation: 'Automatically manage browser drivers with WebDriver Manager',
    },
    {
      title: 'Your First Test',
      slug: 'first-test',
      category: '1. Getting Started',
      explanation: 'Write and run your first Selenium WebDriver test',
    },

    // 2. Browser Configuration
    {
      title: 'Chrome WebDriver',
      slug: 'chrome-webdriver',
      category: '2. Browser Configuration',
      explanation: 'Setting up and configuring ChromeDriver for testing',
    },
    {
      title: 'Firefox WebDriver',
      slug: 'firefox-webdriver',
      category: '2. Browser Configuration',
      explanation: 'Setting up and configuring GeckoDriver for Firefox testing',
    },
    {
      title: 'Edge & Safari WebDriver',
      slug: 'edge-safari-webdriver',
      category: '2. Browser Configuration',
      explanation: 'Configuring Edge and Safari browsers for Selenium tests',
    },
    {
      title: 'Browser Options',
      slug: 'browser-options',
      category: '2. Browser Configuration',
      explanation: 'Configuring browser behavior with ChromeOptions, FirefoxOptions, etc.',
    },
    {
      title: 'Headless Mode',
      slug: 'headless-mode',
      category: '2. Browser Configuration',
      explanation: 'Running browsers in headless mode for CI/CD environments',
    },

    // 3. Locator Strategies
    {
      title: 'ID & Name Locators',
      slug: 'id-name-locators',
      category: '3. Locator Strategies',
      explanation: 'Finding elements by ID and name attributes',
    },
    {
      title: 'Class & Tag Locators',
      slug: 'class-tag-locators',
      category: '3. Locator Strategies',
      explanation: 'Locating elements by class name and HTML tag',
    },
    {
      title: 'Link Text Locators',
      slug: 'link-text-locators',
      category: '3. Locator Strategies',
      explanation: 'Finding links by exact and partial text content',
    },
    {
      title: 'CSS Selectors',
      slug: 'css-selectors',
      category: '3. Locator Strategies',
      explanation: 'Powerful element selection using CSS selector syntax',
    },
    {
      title: 'XPath Basics',
      slug: 'xpath-basics',
      category: '3. Locator Strategies',
      explanation: 'Introduction to XPath for element location',
    },
    {
      title: 'Advanced XPath',
      slug: 'advanced-xpath',
      category: '3. Locator Strategies',
      explanation: 'Complex XPath expressions: axes, functions, and predicates',
    },
    {
      title: 'Relative Locators',
      slug: 'relative-locators',
      category: '3. Locator Strategies',
      explanation: 'Selenium 4 relative locators: above, below, near, toLeftOf, toRightOf',
    },

    // 5. CI/CD Integration
    {
      title: 'Jenkins Integration',
      slug: 'jenkins-integration',
      category: '5. CI/CD Integration',
      explanation: 'Configure Jenkins pipelines for automated Selenium testing with detailed setup and examples',
    },
    {
      title: 'GitHub Actions',
      slug: 'github-actions',
      category: '5. CI/CD Integration',
      explanation: 'Automate Selenium testing with GitHub Actions workflows and matrix strategies',
    },
    {
      title: 'GitLab CI/CD',
      slug: 'gitlab-cicd',
      category: '5. CI/CD Integration',
      explanation: 'Configure GitLab CI/CD pipelines for automated Selenium testing with Docker integration',
    },
    {
      title: 'Parallel Execution',
      slug: 'parallel-execution',
      category: '5. CI/CD Integration',
      explanation: 'Master parallel test execution with Selenium Grid and test distribution strategies',
    },

    // 6. Performance & Optimization
    {
      title: 'Test Performance',
      slug: 'test-performance',
      category: '6. Performance & Optimization',
      explanation: 'Optimize Selenium test performance with advanced techniques and best practices',
    },
    {
      title: 'Resource Management',
      slug: 'resource-management',
      category: '6. Performance & Optimization',
      explanation: 'Manage system resources efficiently for optimal Selenium test execution',
    },
    {
      title: 'Flaky Test Prevention',
      slug: 'flaky-test-prevention',
      category: '6. Performance & Optimization',
      explanation: 'Prevent and eliminate flaky tests with stability strategies and best practices',
    },
    {
      title: 'Memory Management',
      slug: 'memory-management',
      category: '6. Performance & Optimization',
      explanation: 'Advanced memory management techniques for Selenium test optimization and leak prevention',
    },

    // 4. Element Interactions
    {
      title: 'Click & Submit',
      slug: 'click-submit',
      category: '4. Element Interactions',
      explanation: 'Clicking elements and submitting forms',
    },
    {
      title: 'Text Input & Clear',
      slug: 'text-input-clear',
      category: '4. Element Interactions',
      explanation: 'Typing text into inputs and clearing fields',
    },
    {
      title: 'Element Properties',
      slug: 'element-properties',
      category: '4. Element Interactions',
      explanation: 'Getting text, attributes, CSS properties, and element state',
    },
    {
      title: 'Select Dropdowns',
      slug: 'select-dropdowns',
      category: '4. Element Interactions',
      explanation: 'Working with HTML select elements and dropdowns',
    },
    {
      title: 'Checkboxes & Radio Buttons',
      slug: 'checkboxes-radio',
      category: '4. Element Interactions',
      explanation: 'Handling checkbox and radio button interactions',
    },
    {
      title: 'File Uploads',
      slug: 'file-uploads',
      category: '4. Element Interactions',
      explanation: 'Uploading files through file input elements',
    },

    // 5. Waits & Synchronization
    {
      title: 'Implicit Waits',
      slug: 'implicit-waits',
      category: '5. Waits & Synchronization',
      explanation: 'Setting global wait times for element location',
    },
    {
      title: 'Explicit Waits',
      slug: 'explicit-waits',
      category: '5. Waits & Synchronization',
      explanation: 'Waiting for specific conditions with WebDriverWait',
    },
    {
      title: 'Expected Conditions',
      slug: 'expected-conditions',
      category: '5. Waits & Synchronization',
      explanation: 'Common wait conditions: visibility, clickability, presence, etc.',
    },
    {
      title: 'Fluent Waits',
      slug: 'fluent-waits',
      category: '5. Waits & Synchronization',
      explanation: 'Custom polling intervals and exception handling in waits',
    },
    {
      title: 'Custom Wait Conditions',
      slug: 'custom-wait-conditions',
      category: '5. Waits & Synchronization',
      explanation: 'Creating custom expected conditions for complex scenarios',
    },

    // 6. Browser Navigation
    {
      title: 'URL Navigation',
      slug: 'url-navigation',
      category: '6. Browser Navigation',
      explanation: 'Navigating to URLs and getting current page information',
    },
    {
      title: 'Browser History',
      slug: 'browser-history',
      category: '6. Browser Navigation',
      explanation: 'Back, forward, and refresh navigation commands',
    },
    {
      title: 'Window Management',
      slug: 'window-management',
      category: '6. Browser Navigation',
      explanation: 'Maximize, minimize, resize, and position browser windows',
    },
    {
      title: 'Multiple Windows & Tabs',
      slug: 'multiple-windows-tabs',
      category: '6. Browser Navigation',
      explanation: 'Handling multiple browser windows and tabs',
    },

    // 7. Advanced Interactions
    {
      title: 'Actions Class',
      slug: 'actions-class',
      category: '7. Advanced Interactions',
      explanation: 'Introduction to the Actions class for complex interactions',
    },
    {
      title: 'Mouse Actions',
      slug: 'mouse-actions',
      category: '7. Advanced Interactions',
      explanation: 'Click, double-click, right-click, hover, and drag-and-drop',
    },
    {
      title: 'Keyboard Actions',
      slug: 'keyboard-actions',
      category: '7. Advanced Interactions',
      explanation: 'Key press, key down, key up, and keyboard shortcuts',
    },
    {
      title: 'Scroll Operations',
      slug: 'scroll-operations',
      category: '7. Advanced Interactions',
      explanation: 'Scrolling to elements and specific positions',
    },
    {
      title: 'Drag and Drop',
      slug: 'drag-and-drop',
      category: '7. Advanced Interactions',
      explanation: 'Implementing drag and drop functionality in tests',
    },

    // 8. Frames & Alerts
    {
      title: 'Working with iFrames',
      slug: 'working-with-iframes',
      category: '8. Frames & Alerts',
      explanation: 'Switching to and interacting with iframe content',
    },
    {
      title: 'Nested Frames',
      slug: 'nested-frames',
      category: '8. Frames & Alerts',
      explanation: 'Handling nested iframe structures',
    },
    {
      title: 'JavaScript Alerts',
      slug: 'javascript-alerts',
      category: '8. Frames & Alerts',
      explanation: 'Handling alert, confirm, and prompt dialogs',
    },
    {
      title: 'Browser Popups',
      slug: 'browser-popups',
      category: '8. Frames & Alerts',
      explanation: 'Managing browser-generated popups and notifications',
    },

    // 9. JavaScript Execution
    {
      title: 'Execute JavaScript',
      slug: 'execute-javascript',
      category: '9. JavaScript Execution',
      explanation: 'Running JavaScript code in the browser context',
    },
    {
      title: 'JavaScript Click & Scroll',
      slug: 'javascript-click-scroll',
      category: '9. JavaScript Execution',
      explanation: 'Using JavaScript for clicks and scrolling when native methods fail',
    },
    {
      title: 'DOM Manipulation',
      slug: 'dom-manipulation',
      category: '9. JavaScript Execution',
      explanation: 'Modifying page elements using JavaScript',
    },
    {
      title: 'Async JavaScript',
      slug: 'async-javascript',
      category: '9. JavaScript Execution',
      explanation: 'Executing asynchronous JavaScript and handling callbacks',
    },

    // 10. Screenshots & Visual Testing
    {
      title: 'Taking Screenshots',
      slug: 'taking-screenshots',
      category: '10. Screenshots & Visual Testing',
      explanation: 'Capturing full page and element screenshots',
    },
    {
      title: 'Screenshot on Failure',
      slug: 'screenshot-on-failure',
      category: '10. Screenshots & Visual Testing',
      explanation: 'Automatically capturing screenshots when tests fail',
    },
    {
      title: 'Visual Comparison',
      slug: 'visual-comparison',
      category: '10. Screenshots & Visual Testing',
      explanation: 'Comparing screenshots for visual regression testing',
    },

    // 11. Cookies & Storage
    {
      title: 'Cookie Management',
      slug: 'cookie-management',
      category: '11. Cookies & Storage',
      explanation: 'Adding, getting, and deleting browser cookies',
    },
    {
      title: 'Local Storage',
      slug: 'local-storage',
      category: '11. Cookies & Storage',
      explanation: 'Interacting with browser local storage',
    },
    {
      title: 'Session Storage',
      slug: 'session-storage',
      category: '11. Cookies & Storage',
      explanation: 'Managing session storage in tests',
    },

    // 12. Test Frameworks Integration
    {
      title: 'TestNG Integration',
      slug: 'testng-integration',
      category: '12. Test Frameworks Integration',
      explanation: 'Using Selenium with TestNG for Java testing',
    },
    {
      title: 'JUnit Integration',
      slug: 'junit-integration',
      category: '12. Test Frameworks Integration',
      explanation: 'Integrating Selenium with JUnit framework',
    },
    {
      title: 'pytest Integration',
      slug: 'pytest-integration',
      category: '12. Test Frameworks Integration',
      explanation: 'Using Selenium with pytest for Python testing',
    },
    {
      title: 'Mocha/Jest Integration',
      slug: 'mocha-jest-integration',
      category: '12. Test Frameworks Integration',
      explanation: 'JavaScript testing with Mocha or Jest',
    },

    // 13. Page Object Model
    {
      title: 'POM Introduction',
      slug: 'pom-introduction',
      category: '13. Page Object Model',
      explanation: 'Understanding the Page Object Model design pattern',
    },
    {
      title: 'Creating Page Objects',
      slug: 'creating-page-objects',
      category: '13. Page Object Model',
      explanation: 'Building reusable page object classes',
    },
    {
      title: 'Page Factory',
      slug: 'page-factory',
      category: '13. Page Object Model',
      explanation: 'Using PageFactory for element initialization (Java)',
    },
    {
      title: 'POM Best Practices',
      slug: 'pom-best-practices',
      category: '13. Page Object Model',
      explanation: 'Best practices for maintainable page objects',
    },

    // 14. Data-Driven Testing
    {
      title: 'Data Providers',
      slug: 'data-providers',
      category: '14. Data-Driven Testing',
      explanation: 'Using data providers for parameterized tests',
    },
    {
      title: 'Excel Data Reading',
      slug: 'excel-data-reading',
      category: '14. Data-Driven Testing',
      explanation: 'Reading test data from Excel files',
    },
    {
      title: 'CSV & JSON Data',
      slug: 'csv-json-data',
      category: '14. Data-Driven Testing',
      explanation: 'Using CSV and JSON files for test data',
    },
    {
      title: 'Database Integration',
      slug: 'database-integration',
      category: '14. Data-Driven Testing',
      explanation: 'Fetching test data from databases',
    },

    // 15. Selenium Grid
    {
      title: 'Grid Introduction',
      slug: 'grid-introduction',
      category: '15. Selenium Grid',
      explanation: 'Understanding Selenium Grid architecture and benefits',
    },
    {
      title: 'Grid Setup',
      slug: 'grid-setup',
      category: '15. Selenium Grid',
      explanation: 'Setting up Selenium Grid Hub and Nodes',
    },
    {
      title: 'Remote WebDriver',
      slug: 'remote-webdriver',
      category: '15. Selenium Grid',
      explanation: 'Running tests on remote browsers with RemoteWebDriver',
    },
    {
      title: 'Docker with Grid',
      slug: 'docker-with-grid',
      category: '15. Selenium Grid',
      explanation: 'Running Selenium Grid in Docker containers',
    },
    {
      title: 'Cloud Testing Platforms',
      slug: 'cloud-testing-platforms',
      category: '15. Selenium Grid',
      explanation: 'Using BrowserStack, Sauce Labs, and LambdaTest',
    },

    // 16. Handling Special Elements
    {
      title: 'Shadow DOM',
      slug: 'shadow-dom',
      category: '16. Handling Special Elements',
      explanation: 'Interacting with Shadow DOM elements',
    },
    {
      title: 'Canvas Elements',
      slug: 'canvas-elements',
      category: '16. Handling Special Elements',
      explanation: 'Testing HTML5 canvas elements',
    },
    {
      title: 'SVG Elements',
      slug: 'svg-elements',
      category: '16. Handling Special Elements',
      explanation: 'Locating and interacting with SVG elements',
    },
    {
      title: 'Date Pickers',
      slug: 'date-pickers',
      category: '16. Handling Special Elements',
      explanation: 'Handling various date picker implementations',
    },
    {
      title: 'Rich Text Editors',
      slug: 'rich-text-editors',
      category: '16. Handling Special Elements',
      explanation: 'Testing WYSIWYG and rich text editors',
    },

    // 17. Error Handling & Debugging
    {
      title: 'Common Exceptions',
      slug: 'common-exceptions',
      category: '17. Error Handling & Debugging',
      explanation: 'Understanding and handling Selenium exceptions',
    },
    {
      title: 'Stale Element Reference',
      slug: 'stale-element-reference',
      category: '17. Error Handling & Debugging',
      explanation: 'Handling StaleElementReferenceException',
    },
    {
      title: 'Element Not Found',
      slug: 'element-not-found',
      category: '17. Error Handling & Debugging',
      explanation: 'Debugging NoSuchElementException issues',
    },
    {
      title: 'Timeout Exceptions',
      slug: 'timeout-exceptions',
      category: '17. Error Handling & Debugging',
      explanation: 'Handling TimeoutException and improving wait strategies',
    },
    {
      title: 'Logging & Reporting',
      slug: 'logging-reporting',
      category: '17. Error Handling & Debugging',
      explanation: 'Implementing logging and test reporting',
    },

    // 18. CI/CD Integration
    {
      title: 'Jenkins Integration',
      slug: 'jenkins-integration',
      category: '18. CI/CD Integration',
      explanation: 'Running Selenium tests in Jenkins pipelines',
    },
    {
      title: 'GitHub Actions',
      slug: 'github-actions',
      category: '18. CI/CD Integration',
      explanation: 'Configuring Selenium tests with GitHub Actions',
    },
    {
      title: 'GitLab CI',
      slug: 'gitlab-ci',
      category: '18. CI/CD Integration',
      explanation: 'Setting up Selenium in GitLab CI/CD',
    },
    {
      title: 'Parallel Execution',
      slug: 'parallel-execution',
      category: '18. CI/CD Integration',
      explanation: 'Running tests in parallel for faster execution',
    },

    // 19. Performance & Optimization
    {
      title: 'Test Performance',
      slug: 'test-performance',
      category: '19. Performance & Optimization',
      explanation: 'Optimizing test execution speed',
    },
    {
      title: 'Resource Management',
      slug: 'resource-management',
      category: '19. Performance & Optimization',
      explanation: 'Proper browser and driver cleanup',
    },
    {
      title: 'Flaky Test Prevention',
      slug: 'flaky-test-prevention',
      category: '19. Performance & Optimization',
      explanation: 'Strategies to prevent and fix flaky tests',
    },
    {
      title: 'Memory Management',
      slug: 'memory-management',
      category: '19. Performance & Optimization',
      explanation: 'Avoiding memory leaks in test suites',
    },

    // 20. Best Practices
    {
      title: 'Test Design Principles',
      slug: 'test-design-principles',
      category: '20. Best Practices',
      explanation: 'SOLID principles and clean code for test automation',
    },
    {
      title: 'Locator Best Practices',
      slug: 'locator-best-practices',
      category: '20. Best Practices',
      explanation: 'Choosing reliable and maintainable locators',
    },
    {
      title: 'Test Independence',
      slug: 'test-independence',
      category: '20. Best Practices',
      explanation: 'Writing independent and isolated tests',
    },
    {
      title: 'Maintainable Test Code',
      slug: 'maintainable-test-code',
      category: '20. Best Practices',
      explanation: 'Writing clean, readable, and maintainable test code',
    },
    {
      title: 'Cross-Browser Testing',
      slug: 'cross-browser-testing',
      category: '20. Best Practices',
      explanation: 'Strategies for effective cross-browser testing',
    },

    // 21. Framework Architecture
    {
      title: 'Framework Design Principles',
      slug: 'framework-design-principles',
      category: '21. Framework Architecture',
      explanation: 'Designing scalable and maintainable test automation frameworks',
    },
    {
      title: 'Hybrid Framework',
      slug: 'hybrid-framework',
      category: '21. Framework Architecture',
      explanation: 'Building hybrid frameworks combining multiple approaches',
    },
    {
      title: 'Keyword-Driven Framework',
      slug: 'keyword-driven-framework',
      category: '21. Framework Architecture',
      explanation: 'Implementing keyword-driven test automation',
    },
    {
      title: 'Configuration Management',
      slug: 'configuration-management',
      category: '21. Framework Architecture',
      explanation: 'Managing test configurations, environments, and properties',
    },
    {
      title: 'Utility Classes & Helpers',
      slug: 'utility-classes-helpers',
      category: '21. Framework Architecture',
      explanation: 'Creating reusable utility classes for common operations',
    },
    {
      title: 'Base Classes & Inheritance',
      slug: 'base-classes-inheritance',
      category: '21. Framework Architecture',
      explanation: 'Using inheritance for test class organization',
    },

    // 23. Reporting & Documentation
    {
      title: 'Extent Reports',
      slug: 'extent-reports',
      category: '23. Reporting & Documentation',
      explanation: 'Creating rich HTML reports with Extent Reports',
    },
    {
      title: 'Allure Reports',
      slug: 'allure-reports',
      category: '23. Reporting & Documentation',
      explanation: 'Implementing Allure reporting framework',
    },
    {
      title: 'TestNG Reports',
      slug: 'testng-reports',
      category: '23. Reporting & Documentation',
      explanation: 'Customizing TestNG HTML and XML reports',
    },
    {
      title: 'Custom Report Generation',
      slug: 'custom-report-generation',
      category: '23. Reporting & Documentation',
      explanation: 'Building custom reporting solutions',
    },
    {
      title: 'Test Documentation',
      slug: 'test-documentation',
      category: '23. Reporting & Documentation',
      explanation: 'Documenting test cases and automation frameworks',
    },

    // 24. API & UI Combined Testing
    {
      title: 'REST API Basics',
      slug: 'rest-api-basics',
      category: '24. API & UI Combined Testing',
      explanation: 'Understanding REST APIs for test automation',
    },
    {
      title: 'RestAssured Integration',
      slug: 'restassured-integration',
      category: '24. API & UI Combined Testing',
      explanation: 'Using RestAssured with Selenium for API testing',
    },
    {
      title: 'API Test Setup',
      slug: 'api-test-setup',
      category: '24. API & UI Combined Testing',
      explanation: 'Setting up test data via API before UI tests',
    },
    {
      title: 'API Validation in UI Tests',
      slug: 'api-validation-ui-tests',
      category: '24. API & UI Combined Testing',
      explanation: 'Validating API responses alongside UI verification',
    },
    {
      title: 'Authentication via API',
      slug: 'authentication-via-api',
      category: '24. API & UI Combined Testing',
      explanation: 'Bypassing login UI using API authentication',
    },

    // 25. Mobile Web Testing
    {
      title: 'Mobile Emulation',
      slug: 'mobile-emulation',
      category: '25. Mobile Web Testing',
      explanation: 'Testing mobile web using Chrome DevTools emulation',
    },
    {
      title: 'Responsive Testing',
      slug: 'responsive-testing',
      category: '25. Mobile Web Testing',
      explanation: 'Testing responsive designs across viewports',
    },
    {
      title: 'Touch Actions',
      slug: 'touch-actions',
      category: '25. Mobile Web Testing',
      explanation: 'Simulating touch gestures in mobile web testing',
    },

    // 27. Selenium 4 Features
    {
      title: 'Selenium 4 Overview',
      slug: 'selenium-4-overview',
      category: '27. Selenium 4 Features',
      explanation: 'New features and improvements in Selenium 4',
    },
    {
      title: 'W3C WebDriver Protocol',
      slug: 'w3c-webdriver-protocol',
      category: '27. Selenium 4 Features',
      explanation: 'Understanding W3C WebDriver standardization',
    },
    {
      title: 'Chrome DevTools Protocol',
      slug: 'chrome-devtools-protocol',
      category: '27. Selenium 4 Features',
      explanation: 'Using CDP for advanced browser control',
    },
    {
      title: 'Network Interception',
      slug: 'network-interception',
      category: '27. Selenium 4 Features',
      explanation: 'Intercepting and mocking network requests',
    },
    {
      title: 'BiDi APIs',
      slug: 'bidi-apis',
      category: '27. Selenium 4 Features',
      explanation: 'Bidirectional communication with browsers',
    },
    {
      title: 'New Window & Tab APIs',
      slug: 'new-window-tab-apis',
      category: '27. Selenium 4 Features',
      explanation: 'New APIs for window and tab management',
    },

    // 28. Security Testing
    {
      title: 'Security Testing Basics',
      slug: 'security-testing-basics',
      category: '28. Security Testing',
      explanation: 'Introduction to security testing with Selenium',
    },
    {
      title: 'XSS Testing',
      slug: 'xss-testing',
      category: '28. Security Testing',
      explanation: 'Testing for Cross-Site Scripting vulnerabilities',
    },
    {
      title: 'SQL Injection Testing',
      slug: 'sql-injection-testing',
      category: '28. Security Testing',
      explanation: 'Testing for SQL injection vulnerabilities',
    },
    {
      title: 'Authentication Testing',
      slug: 'authentication-testing',
      category: '28. Security Testing',
      explanation: 'Testing authentication and authorization flows',
    },
    {
      title: 'OWASP Integration',
      slug: 'owasp-integration',
      category: '28. Security Testing',
      explanation: 'Integrating OWASP ZAP with Selenium tests',
    },

    // 29. Accessibility Testing
    {
      title: 'Accessibility Fundamentals',
      slug: 'accessibility-fundamentals',
      category: '29. Accessibility Testing',
      explanation: 'Understanding WCAG guidelines and accessibility standards',
    },
    {
      title: 'axe-core Integration',
      slug: 'axe-core-integration',
      category: '29. Accessibility Testing',
      explanation: 'Automated accessibility testing with axe-core',
    },
    {
      title: 'Keyboard Navigation Testing',
      slug: 'keyboard-navigation-testing',
      category: '29. Accessibility Testing',
      explanation: 'Testing keyboard accessibility and focus management',
    },
    {
      title: 'Screen Reader Testing',
      slug: 'screen-reader-testing',
      category: '29. Accessibility Testing',
      explanation: 'Testing with screen readers and ARIA attributes',
    },
    {
      title: 'Color Contrast Testing',
      slug: 'color-contrast-testing',
      category: '29. Accessibility Testing',
      explanation: 'Validating color contrast ratios for accessibility',
    },

    // 30. Performance Testing Integration
    {
      title: 'Performance Metrics Collection',
      slug: 'performance-metrics-collection',
      category: '30. Performance Testing Integration',
      explanation: 'Collecting browser performance metrics with Selenium',
    },
    {
      title: 'Navigation Timing API',
      slug: 'navigation-timing-api',
      category: '30. Performance Testing Integration',
      explanation: 'Using Navigation Timing API for page load metrics',
    },
    {
      title: 'Resource Timing',
      slug: 'resource-timing',
      category: '30. Performance Testing Integration',
      explanation: 'Measuring resource loading performance',
    },
    {
      title: 'JMeter Integration',
      slug: 'jmeter-integration',
      category: '30. Performance Testing Integration',
      explanation: 'Combining Selenium with JMeter for load testing',
    },

    // 31. Test Management & Organization
    {
      title: 'Test Suites Organization',
      slug: 'test-suites-organization',
      category: '31. Test Management & Organization',
      explanation: 'Organizing tests into logical suites and groups',
    },
    {
      title: 'Test Prioritization',
      slug: 'test-prioritization',
      category: '31. Test Management & Organization',
      explanation: 'Prioritizing tests for efficient execution',
    },
    {
      title: 'Test Tagging & Filtering',
      slug: 'test-tagging-filtering',
      category: '31. Test Management & Organization',
      explanation: 'Using tags and filters for selective test execution',
    },
    {
      title: 'Test Management Tools',
      slug: 'test-management-tools',
      category: '31. Test Management & Organization',
      explanation: 'Integrating with TestRail, Zephyr, and other tools',
    },
    {
      title: 'Defect Tracking Integration',
      slug: 'defect-tracking-integration',
      category: '31. Test Management & Organization',
      explanation: 'Linking tests with Jira and defect tracking systems',
    },

    // 32. Real-World Scenarios
    {
      title: 'E-commerce Testing',
      slug: 'ecommerce-testing',
      category: '32. Real-World Scenarios',
      explanation: 'Testing shopping carts, checkout, and payment flows',
    },
    {
      title: 'Banking Application Testing',
      slug: 'banking-application-testing',
      category: '32. Real-World Scenarios',
      explanation: 'Testing financial applications with security focus',
    },
    {
      title: 'Social Media Testing',
      slug: 'social-media-testing',
      category: '32. Real-World Scenarios',
      explanation: 'Testing social features, feeds, and interactions',
    },
    {
      title: 'SaaS Application Testing',
      slug: 'saas-application-testing',
      category: '32. Real-World Scenarios',
      explanation: 'Testing multi-tenant SaaS applications',
    },
    {
      title: 'Healthcare Application Testing',
      slug: 'healthcare-application-testing',
      category: '32. Real-World Scenarios',
      explanation: 'Testing healthcare apps with compliance requirements',
    },
  ],
};
