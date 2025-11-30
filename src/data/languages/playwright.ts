import type { Language } from './types';

export const playwright: Language = {
  name: 'Playwright',
  slug: 'playwright',
  description: 'Modern end-to-end testing framework for web applications',
  topics: [
    // Learning Plan - First item for sidebar
    {
      id: 'playwright-learning-plan',
      title: 'Learning Plan',
      slug: 'learning-plan',
      category: 'Overview',
      explanation: 'Complete Playwright learning roadmap with all topics organized by category',
    },
    // 1. Getting Started
    {
      id: 'playwright-intro',
      title: 'Introduction to Playwright',
      slug: 'introduction',
      category: '1. Getting Started',
      explanation: 'What is Playwright and why use it for testing',
    },
    {
      id: 'playwright-installation',
      title: 'Installation & Setup',
      slug: 'installation-setup',
      category: '1. Getting Started',
      explanation: 'Install Playwright and set up your first test project',
    },
    {
      id: 'playwright-first-test',
      title: 'Writing Your First Test',
      slug: 'first-test',
      category: '1. Getting Started',
      explanation: 'Create and run your first Playwright test',
    },
    {
      id: 'playwright-test-structure',
      title: 'Test Structure & Syntax',
      slug: 'test-structure',
      category: '1. Getting Started',
      explanation: 'Understanding test files, describe blocks, and test functions',
    },

    // 2. Core Concepts
    {
      id: 'playwright-browsers',
      title: 'Browsers & Browser Contexts',
      slug: 'browsers-contexts',
      category: '2. Core Concepts',
      explanation: 'Working with different browsers and isolated contexts',
    },
    {
      id: 'playwright-pages',
      title: 'Pages & Navigation',
      slug: 'pages-navigation',
      category: '2. Core Concepts',
      explanation: 'Managing pages and navigating between URLs',
    },
    {
      id: 'playwright-selectors',
      title: 'Locators & Selectors',
      slug: 'locators-selectors',
      category: '2. Core Concepts',
      explanation: 'Finding elements using various selector strategies',
    },
    {
      id: 'playwright-actions',
      title: 'User Actions',
      slug: 'user-actions',
      category: '2. Core Concepts',
      explanation: 'Simulating clicks, typing, hovering, and other interactions',
    },
    {
      id: 'playwright-auto-waiting',
      title: 'Auto-Waiting & Timeouts',
      slug: 'auto-waiting-timeouts',
      category: '2. Core Concepts',
      explanation: 'How Playwright automatically waits for elements',
    },

    // 3. Assertions & Expectations
    {
      id: 'playwright-assertions',
      title: 'Assertions & Expect',
      slug: 'assertions-expect',
      category: '3. Assertions & Expectations',
      explanation: 'Writing assertions to verify test expectations',
    },
    {
      id: 'playwright-web-assertions',
      title: 'Web-First Assertions',
      slug: 'web-first-assertions',
      category: '3. Assertions & Expectations',
      explanation: 'Auto-retrying assertions for web elements',
    },
    {
      id: 'playwright-soft-assertions',
      title: 'Soft Assertions',
      slug: 'soft-assertions',
      category: '3. Assertions & Expectations',
      explanation: 'Continue test execution after assertion failures',
    },

    // 4. Test Organization
    {
      id: 'playwright-hooks',
      title: 'Test Hooks',
      slug: 'test-hooks',
      category: '4. Test Organization',
      explanation: 'beforeAll, beforeEach, afterEach, afterAll hooks',
    },
    {
      id: 'playwright-fixtures',
      title: 'Fixtures',
      slug: 'fixtures',
      category: '4. Test Organization',
      explanation: 'Reusable test setup and teardown logic',
    },
    {
      id: 'playwright-pom',
      title: 'Page Object Model',
      slug: 'page-object-model',
      category: '4. Test Organization',
      explanation: 'Organizing tests with Page Object pattern',
    },
    {
      id: 'playwright-test-groups',
      title: 'Test Groups & Tags',
      slug: 'test-groups-tags',
      category: '4. Test Organization',
      explanation: 'Organizing and filtering tests with tags',
    },

    // 5. Configuration
    {
      id: 'playwright-config',
      title: 'Playwright Configuration',
      slug: 'configuration',
      category: '5. Configuration',
      explanation: 'Understanding playwright.config.ts file',
    },
    {
      id: 'playwright-projects',
      title: 'Multiple Projects',
      slug: 'multiple-projects',
      category: '5. Configuration',
      explanation: 'Running tests across different browsers and configurations',
    },
    {
      id: 'playwright-base-url',
      title: 'Base URL & Environments',
      slug: 'base-url-environments',
      category: '5. Configuration',
      explanation: 'Managing different test environments',
    },
    {
      id: 'playwright-global-setup',
      title: 'Global Setup & Teardown',
      slug: 'global-setup-teardown',
      category: '5. Configuration',
      explanation: 'Running code before and after all tests',
    },

    // 6. Advanced Locators
    {
      id: 'playwright-role-locators',
      title: 'Role-Based Locators',
      slug: 'role-based-locators',
      category: '6. Advanced Locators',
      explanation: 'Using getByRole for accessible element selection',
    },
    {
      id: 'playwright-text-locators',
      title: 'Text & Label Locators',
      slug: 'text-label-locators',
      category: '6. Advanced Locators',
      explanation: 'Finding elements by text content and labels',
    },
    {
      id: 'playwright-chaining-filtering',
      title: 'Chaining & Filtering Locators',
      slug: 'chaining-filtering-locators',
      category: '6. Advanced Locators',
      explanation: 'Combining and filtering locators for precise selection',
    },

    // 7. Network & API Testing
    {
      id: 'playwright-network-interception',
      title: 'Network Interception',
      slug: 'network-interception',
      category: '7. Network & API Testing',
      explanation: 'Intercepting and modifying network requests',
    },
    {
      id: 'playwright-api-testing',
      title: 'API Testing',
      slug: 'api-testing',
      category: '7. Network & API Testing',
      explanation: 'Testing REST APIs with Playwright',
    },
    {
      id: 'playwright-mocking',
      title: 'Mocking Responses',
      slug: 'mocking-responses',
      category: '7. Network & API Testing',
      explanation: 'Mocking API responses for testing',
    },
    {
      id: 'playwright-wait-for-response',
      title: 'Waiting for Network',
      slug: 'wait-for-network',
      category: '7. Network & API Testing',
      explanation: 'Waiting for specific network requests/responses',
    },

    // 8. Authentication & State
    {
      id: 'playwright-authentication',
      title: 'Authentication Testing',
      slug: 'authentication-testing',
      category: '8. Authentication & State',
      explanation: 'Testing login flows and authenticated pages',
    },
    {
      id: 'playwright-storage-state',
      title: 'Storage State',
      slug: 'storage-state',
      category: '8. Authentication & State',
      explanation: 'Saving and reusing authentication state',
    },
    {
      id: 'playwright-cookies',
      title: 'Cookies & Local Storage',
      slug: 'cookies-local-storage',
      category: '8. Authentication & State',
      explanation: 'Managing browser storage and cookies',
    },

    // 9. Visual Testing
    {
      id: 'playwright-screenshots',
      title: 'Screenshots',
      slug: 'screenshots',
      category: '9. Visual Testing',
      explanation: 'Capturing screenshots during tests',
    },
    {
      id: 'playwright-visual-comparisons',
      title: 'Visual Comparisons',
      slug: 'visual-comparisons',
      category: '9. Visual Testing',
      explanation: 'Comparing screenshots for visual regression testing',
    },
    {
      id: 'playwright-videos',
      title: 'Video Recording',
      slug: 'video-recording',
      category: '9. Visual Testing',
      explanation: 'Recording test execution videos',
    },

    // 10. Debugging & Development
    {
      id: 'playwright-debug-mode',
      title: 'Debug Mode',
      slug: 'debug-mode',
      category: '10. Debugging & Development',
      explanation: 'Running tests in debug mode',
    },
    {
      id: 'playwright-inspector',
      title: 'Playwright Inspector',
      slug: 'playwright-inspector',
      category: '10. Debugging & Development',
      explanation: 'Using the built-in inspector tool',
    },
    {
      id: 'playwright-trace-viewer',
      title: 'Trace Viewer',
      slug: 'trace-viewer',
      category: '10. Debugging & Development',
      explanation: 'Analyzing test traces for debugging',
    },
    {
      id: 'playwright-codegen',
      title: 'Codegen Tool',
      slug: 'codegen-tool',
      category: '10. Debugging & Development',
      explanation: 'Generating test code automatically',
    },
    {
      id: 'playwright-ui-mode',
      title: 'UI Mode',
      slug: 'ui-mode',
      category: '10. Debugging & Development',
      explanation: 'Running tests with interactive UI',
    },

    // 11. Parallelization & Performance
    {
      id: 'playwright-parallel-tests',
      title: 'Parallel Test Execution',
      slug: 'parallel-execution',
      category: '11. Parallelization & Performance',
      explanation: 'Running tests in parallel for faster execution',
    },
    {
      id: 'playwright-workers',
      title: 'Workers Configuration',
      slug: 'workers-configuration',
      category: '11. Parallelization & Performance',
      explanation: 'Configuring test workers for parallelization',
    },
    {
      id: 'playwright-sharding',
      title: 'Test Sharding',
      slug: 'test-sharding',
      category: '11. Parallelization & Performance',
      explanation: 'Distributing tests across multiple machines',
    },

    // 12. Reporters & Results
    {
      id: 'playwright-reporters',
      title: 'Test Reporters',
      slug: 'test-reporters',
      category: '12. Reporters & Results',
      explanation: 'Different reporter options for test results',
    },
    {
      id: 'playwright-html-reporter',
      title: 'HTML Reporter',
      slug: 'html-reporter',
      category: '12. Reporters & Results',
      explanation: 'Using the built-in HTML reporter',
    },
    {
      id: 'playwright-custom-reporters',
      title: 'Custom Reporters',
      slug: 'custom-reporters',
      category: '12. Reporters & Results',
      explanation: 'Creating custom test reporters',
    },

    // 13. Mobile & Device Testing
    {
      id: 'playwright-mobile-emulation',
      title: 'Mobile Emulation',
      slug: 'mobile-emulation',
      category: '13. Mobile & Device Testing',
      explanation: 'Testing mobile responsive designs',
    },
    {
      id: 'playwright-device-descriptors',
      title: 'Device Descriptors',
      slug: 'device-descriptors',
      category: '13. Mobile & Device Testing',
      explanation: 'Using predefined device configurations',
    },
    {
      id: 'playwright-geolocation',
      title: 'Geolocation & Permissions',
      slug: 'geolocation-permissions',
      category: '13. Mobile & Device Testing',
      explanation: 'Testing location-based features',
    },

    // 14. Advanced Features
    {
      id: 'playwright-iframes',
      title: 'Working with iFrames',
      slug: 'working-with-iframes',
      category: '14. Advanced Features',
      explanation: 'Testing content inside iframes',
    },
    {
      id: 'playwright-file-uploads',
      title: 'File Uploads',
      slug: 'file-uploads',
      category: '14. Advanced Features',
      explanation: 'Testing file upload functionality',
    },
    {
      id: 'playwright-downloads',
      title: 'File Downloads',
      slug: 'file-downloads',
      category: '14. Advanced Features',
      explanation: 'Testing and verifying file downloads',
    },
    {
      id: 'playwright-dialogs',
      title: 'Handling Dialogs',
      slug: 'handling-dialogs',
      category: '14. Advanced Features',
      explanation: 'Working with alerts, confirms, and prompts',
    },
    {
      id: 'playwright-multiple-tabs',
      title: 'Multiple Tabs & Windows',
      slug: 'multiple-tabs-windows',
      category: '14. Advanced Features',
      explanation: 'Testing multi-window scenarios',
    },

    // 15. Accessibility Testing
    {
      id: 'playwright-accessibility',
      title: 'Accessibility Testing',
      slug: 'accessibility-testing',
      category: '15. Accessibility Testing',
      explanation: 'Testing for accessibility compliance',
    },
    {
      id: 'playwright-axe-core',
      title: 'Using axe-core',
      slug: 'using-axe-core',
      category: '15. Accessibility Testing',
      explanation: 'Integrating axe-core for a11y testing',
    },

    // 16. CI/CD Integration
    {
      id: 'playwright-github-actions',
      title: 'GitHub Actions Integration',
      slug: 'github-actions',
      category: '16. CI/CD Integration',
      explanation: 'Running Playwright tests in GitHub Actions',
    },
    {
      id: 'playwright-docker',
      title: 'Docker Integration',
      slug: 'docker-integration',
      category: '16. CI/CD Integration',
      explanation: 'Running tests in Docker containers',
    },
    {
      id: 'playwright-ci-best-practices',
      title: 'CI Best Practices',
      slug: 'ci-best-practices',
      category: '16. CI/CD Integration',
      explanation: 'Optimizing Playwright for CI/CD pipelines',
    },

    // 17. TypeScript Integration
    {
      id: 'playwright-typescript-setup',
      title: 'TypeScript Setup',
      slug: 'typescript-setup',
      category: '17. TypeScript Integration',
      explanation: 'Using Playwright with TypeScript',
    },
    {
      id: 'playwright-type-safety',
      title: 'Type-Safe Tests',
      slug: 'type-safe-tests',
      category: '17. TypeScript Integration',
      explanation: 'Writing type-safe Playwright tests',
    },

    // 18. Best Practices
    {
      id: 'playwright-test-isolation',
      title: 'Test Isolation',
      slug: 'test-isolation',
      category: '18. Best Practices',
      explanation: 'Keeping tests independent and reliable',
    },
    {
      id: 'playwright-reliable-tests',
      title: 'Writing Reliable Tests',
      slug: 'reliable-tests',
      category: '18. Best Practices',
      explanation: 'Avoiding flaky tests and best practices',
    },
    {
      id: 'playwright-naming-conventions',
      title: 'Naming Conventions',
      slug: 'naming-conventions',
      category: '18. Best Practices',
      explanation: 'Best practices for naming tests and files',
    },
    {
      id: 'playwright-test-data',
      title: 'Test Data Management',
      slug: 'test-data-management',
      category: '18. Best Practices',
      explanation: 'Managing test data effectively',
    },
  ],
};
