import type { Language } from './types';

export const manualTesting: Language = {
  name: 'Manual Testing',
  slug: 'manual-testing',
  description: 'Master manual testing fundamentals, methodologies, and best practices for quality assurance',
  topics: [
    {
      title: 'Learning Path',
      slug: 'learning-plan',
      category: 'Overview',
      explanation: 'Complete learning path and roadmap for Manual Testing certification and mastery',
    },
    // 1. Introduction to Testing
    {
      title: 'Introduction to Software Testing',
      slug: 'introduction',
      category: '1. Introduction to Testing',
      explanation: 'Understanding software testing fundamentals, importance, and objectives',
    },
    {
      title: 'Testing Principles & Objectives',
      slug: 'testing-principles',
      category: '1. Introduction to Testing',
      explanation: 'Core principles and objectives that guide effective software testing',
    },
    {
      title: 'SDLC & STLC',
      slug: 'sdlc-stlc',
      category: '1. Introduction to Testing',
      explanation: 'Understanding Software Development Life Cycle and Software Testing Life Cycle',
    },
    {
      title: 'Testing Methodologies',
      slug: 'testing-methodologies',
      category: '1. Introduction to Testing',
      explanation: 'Overview of Waterfall, Agile, V-Model, and other testing methodologies',
    },

    // 2. Types of Testing
    {
      title: 'Functional Testing',
      slug: 'functional-testing',
      category: '2. Types of Testing',
      explanation: 'Testing software functionality against requirements and specifications',
    },
    {
      title: 'Non-Functional Testing',
      slug: 'non-functional-testing',
      category: '2. Types of Testing',
      explanation: 'Performance, usability, security, and other non-functional aspects',
    },
    {
      title: 'Black Box Testing',
      slug: 'black-box-testing',
      category: '2. Types of Testing',
      explanation: 'Testing without knowledge of internal code structure',
    },
    {
      title: 'White Box Testing',
      slug: 'white-box-testing',
      category: '2. Types of Testing',
      explanation: 'Testing with knowledge of internal code structure and logic',
    },
    {
      title: 'Gray Box Testing',
      slug: 'gray-box-testing',
      category: '2. Types of Testing',
      explanation: 'Combination of black box and white box testing approaches',
    },

    // 3. Test Design Techniques
    {
      title: 'Equivalence Partitioning',
      slug: 'equivalence-partitioning',
      category: '3. Test Design Techniques',
      explanation: 'Dividing input data into equivalent partitions for efficient testing',
    },
    {
      title: 'Boundary Value Analysis',
      slug: 'boundary-value-analysis',
      category: '3. Test Design Techniques',
      explanation: 'Testing at the boundaries of input domains',
    },
    {
      title: 'Decision Table Testing',
      slug: 'decision-table-testing',
      category: '3. Test Design Techniques',
      explanation: 'Using decision tables to design test cases for complex business logic',
    },
    {
      title: 'State Transition Testing',
      slug: 'state-transition-testing',
      category: '3. Test Design Techniques',
      explanation: 'Testing state changes and transitions in the application',
    },
    {
      title: 'Use Case Testing',
      slug: 'use-case-testing',
      category: '3. Test Design Techniques',
      explanation: 'Designing test cases based on user scenarios and use cases',
    },

    // 4. Test Case Management
    {
      title: 'Writing Test Cases',
      slug: 'writing-test-cases',
      category: '4. Test Case Management',
      explanation: 'Best practices for writing clear, effective, and maintainable test cases',
    },
    {
      title: 'Test Case Design',
      slug: 'test-case-design',
      category: '4. Test Case Management',
      explanation: 'Structuring test cases with preconditions, steps, and expected results',
    },
    {
      title: 'Test Data Management',
      slug: 'test-data-management',
      category: '4. Test Case Management',
      explanation: 'Creating and managing test data for comprehensive testing',
    },
    {
      title: 'Test Execution & Reporting',
      slug: 'test-execution-reporting',
      category: '4. Test Case Management',
      explanation: 'Executing test cases and documenting results effectively',
    },

    // 5. Defect Management
    {
      title: 'Bug Life Cycle',
      slug: 'bug-life-cycle',
      category: '5. Defect Management',
      explanation: 'Understanding the complete lifecycle of a software defect',
    },
    {
      title: 'Writing Effective Bug Reports',
      slug: 'bug-reports',
      category: '5. Defect Management',
      explanation: 'Creating clear, detailed, and actionable bug reports',
    },
    {
      title: 'Bug Severity & Priority',
      slug: 'bug-severity-priority',
      category: '5. Defect Management',
      explanation: 'Classifying bugs based on severity and priority levels',
    },
    {
      title: 'Defect Tracking Tools',
      slug: 'defect-tracking-tools',
      category: '5. Defect Management',
      explanation: 'Using JIRA, Bugzilla, and other defect tracking systems',
    },

    // 6. Specialized Testing
    {
      title: 'Regression Testing',
      slug: 'regression-testing',
      category: '6. Specialized Testing',
      explanation: 'Ensuring existing functionality works after changes',
    },
    {
      title: 'Smoke & Sanity Testing',
      slug: 'smoke-sanity-testing',
      category: '6. Specialized Testing',
      explanation: 'Quick validation tests for build stability and core functionality',
    },
    {
      title: 'Exploratory Testing',
      slug: 'exploratory-testing',
      category: '6. Specialized Testing',
      explanation: 'Simultaneous learning, test design, and execution',
    },
    {
      title: 'Usability Testing',
      slug: 'usability-testing',
      category: '6. Specialized Testing',
      explanation: 'Evaluating user experience and interface effectiveness',
    },
    {
      title: 'Compatibility Testing',
      slug: 'compatibility-testing',
      category: '6. Specialized Testing',
      explanation: 'Testing across different browsers, devices, and platforms',
    },

    // 7. Web & Mobile Testing
    {
      title: 'Web Application Testing',
      slug: 'web-application-testing',
      category: '7. Web & Mobile Testing',
      explanation: 'Testing web applications for functionality, performance, and security',
    },
    {
      title: 'Mobile Application Testing',
      slug: 'mobile-application-testing',
      category: '7. Web & Mobile Testing',
      explanation: 'Testing mobile apps on iOS and Android platforms',
    },
    {
      title: 'Responsive Design Testing',
      slug: 'responsive-design-testing',
      category: '7. Web & Mobile Testing',
      explanation: 'Ensuring applications work across different screen sizes',
    },
    {
      title: 'Cross-Browser Testing',
      slug: 'cross-browser-testing',
      category: '7. Web & Mobile Testing',
      explanation: 'Testing compatibility across different web browsers',
    },

    // 8. API & Database Testing
    {
      title: 'API Testing Basics',
      slug: 'api-testing-basics',
      category: '8. API & Database Testing',
      explanation: 'Manual testing of REST APIs using Postman and other tools',
    },
    {
      title: 'Database Testing',
      slug: 'database-testing',
      category: '8. API & Database Testing',
      explanation: 'Validating data integrity, schema, and database operations',
    },

    // 9. Test Documentation
    {
      title: 'Test Plan Creation',
      slug: 'test-plan-creation',
      category: '9. Test Documentation',
      explanation: 'Creating comprehensive test plans and strategies',
    },
    {
      title: 'Test Strategy & Approach',
      slug: 'test-strategy-approach',
      category: '9. Test Documentation',
      explanation: 'Defining testing scope, objectives, and methodologies',
    },
    {
      title: 'Test Metrics & Reporting',
      slug: 'test-metrics-reporting',
      category: '9. Test Documentation',
      explanation: 'Measuring and reporting test progress and quality metrics',
    },

    // 10. Agile Testing
    {
      title: 'Agile Testing Fundamentals',
      slug: 'agile-testing-fundamentals',
      category: '10. Agile Testing',
      explanation: 'Testing in Agile and Scrum environments',
    },
    {
      title: 'Sprint Testing',
      slug: 'sprint-testing',
      category: '10. Agile Testing',
      explanation: 'Testing within sprint cycles and iterations',
    },
    {
      title: 'User Story Testing',
      slug: 'user-story-testing',
      category: '10. Agile Testing',
      explanation: 'Creating acceptance criteria and testing user stories',
    },
  ],
};
