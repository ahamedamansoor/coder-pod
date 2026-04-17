import type { Roadmap } from './types';

export const qaEngineer: Roadmap = {
  slug: 'qa-engineer',
  name: 'QA Engineer',
  description: 'Master quality assurance, test automation, and comprehensive testing strategies for a successful QA engineering career',
  topics: [
    // LEARNING ROADMAP
    { slug: 'learning-plan', title: 'QA Engineer Career Path', explanation: 'A comprehensive roadmap for becoming a successful QA Engineer from fundamentals to expert level.' },

    // 1. QA FUNDAMENTALS (Beginner Level: 0-3 months)
    { slug: 'qa-introduction', title: 'Introduction to QA', explanation: 'Beginner: Understanding QA role, career paths, and industry impact. Expert: Strategic QA thinking and business value alignment.', category: 'QA Fundamentals' },
    { slug: 'software-testing-basics', title: 'Software Testing Basics', explanation: 'Beginner: Basic testing concepts and terminology. Expert: Advanced testing methodologies and quality metrics.', category: 'QA Fundamentals' },
    { slug: 'testing-types', title: 'Types of Testing', explanation: 'Beginner: Functional vs non-functional testing basics. Expert: Comprehensive testing strategy across all types including security, performance, usability.', category: 'QA Fundamentals' },
    { slug: 'testing-lifecycle', title: 'Testing Lifecycle', explanation: 'Beginner: Basic test process flow. Expert: End-to-end lifecycle management with DevOps integration and continuous testing.', category: 'QA Fundamentals' },
    { slug: 'test-planning', title: 'Test Planning', explanation: 'Beginner: Simple test case creation. Expert: Enterprise-level test strategy, risk assessment, and resource optimization.', category: 'QA Fundamentals' },
    
    // 2. MANUAL TESTING (Beginner Level: 1-6 months)
    { slug: 'manual-testing', title: 'Manual Testing', explanation: 'Beginner: Basic UI testing and form validation. Expert: Complex exploratory testing, usability testing, and heuristic evaluation.', category: 'Manual Testing' },
    { slug: 'test-case-design', title: 'Test Case Design', explanation: 'Beginner: Simple test cases with basic scenarios. Expert: Advanced test design techniques including equivalence partitioning, boundary value analysis, and state transition testing.', category: 'Manual Testing' },
    { slug: 'test-execution', title: 'Test Execution', explanation: 'Beginner: Following predefined test cases. Expert: Ad-hoc testing, session-based testing, and risk-based execution strategies.', category: 'Manual Testing' },
    { slug: 'bug-tracking', title: 'Bug Tracking', explanation: 'Beginner: Basic bug reporting in JIRA. Expert: Advanced defect lifecycle management, bug triage, and metrics analysis.', category: 'Manual Testing' },
    { slug: 'test-reporting', title: 'Test Reporting', explanation: 'Beginner: Simple test summary reports. Expert: Executive dashboards, trend analysis, and business impact reporting.', category: 'Manual Testing' },
    
    // 3. TEST AUTOMATION (Intermediate Level: 6-18 months)
    { slug: 'automation-introduction', title: 'Test Automation Introduction', explanation: 'Beginner: Basic automation concepts and benefits. Expert: Advanced automation strategy, ROI calculation, and enterprise implementation.', category: 'Test Automation' },
    { slug: 'automation-frameworks', title: 'Automation Frameworks', explanation: 'Beginner: Understanding basic framework types. Expert: Designing custom frameworks, hybrid approaches, and scalable architecture.', category: 'Test Automation' },
    { slug: 'automation-tools', title: 'Automation Tools Selection', explanation: 'Beginner: Basic tool comparison. Expert: Advanced tool evaluation, PoC execution, and multi-tool integration strategies.', category: 'Test Automation' },
    { slug: 'automation-best-practices', title: 'Automation Best Practices', explanation: 'Beginner: Basic coding standards. Expert: Advanced patterns, maintainability, performance optimization, and CI/CD integration.', category: 'Test Automation' },
    
    // 4. JAVASCRIPT TESTING FRAMEWORKS (Intermediate Level: 6-18 months)
    { slug: 'jest-fundamentals', title: 'Jest Fundamentals', explanation: 'Beginner: Basic unit tests with Jest. Expert: Advanced Jest features, custom matchers, performance testing, and enterprise setup.', category: 'JavaScript Testing', connectedRoadmap: 'testing' },
    { slug: 'vitest-modern-testing', title: 'Vitest Modern Testing', explanation: 'Beginner: Basic Vitest setup and usage. Expert: Advanced Vitest features, performance optimization, and modern JavaScript testing patterns.', category: 'JavaScript Testing', connectedRoadmap: 'testing' },
    { slug: 'react-testing-library', title: 'React Testing Library', explanation: 'Beginner: Basic component testing. Expert: Advanced React testing, accessibility testing, and complex user interaction testing.', category: 'JavaScript Testing', connectedRoadmap: 'testing' },
    { slug: 'javascript-advanced-testing', title: 'Advanced JavaScript Testing', explanation: 'Beginner: Basic mocking concepts. Expert: Advanced mocking strategies, test doubles, and complex asynchronous testing patterns.', category: 'JavaScript Testing', connectedRoadmap: 'testing' },
    
    // 5. END-TO-END TESTING (Intermediate Level: 6-18 months)
    { slug: 'e2e-testing-concepts', title: 'E2E Testing Concepts', explanation: 'Beginner: Understanding E2E testing basics. Expert: Advanced E2E strategy, test data management, and enterprise E2E architecture.', category: 'E2E Testing' },
    { slug: 'cypress-mastery', title: 'Cypress Mastery', explanation: 'Beginner: Basic Cypress tests and page objects. Expert: Advanced Cypress features, custom commands, visual testing, and CI/CD integration.', category: 'E2E Testing', connectedRoadmap: 'testing' },
    { slug: 'playwright-automation', title: 'Playwright Automation', explanation: 'Beginner: Basic Playwright setup and tests. Expert: Advanced Playwright features, network interception, mobile testing, and parallel execution.', category: 'E2E Testing', connectedRoadmap: 'testing' },
    { slug: 'cross-browser-testing', title: 'Cross-Browser Testing', explanation: 'Beginner: Basic browser compatibility testing. Expert: Advanced cross-browser strategy, device testing, and automated cross-browser pipelines.', category: 'E2E Testing' },
    
    // 6. API TESTING (Intermediate Level: 6-18 months)
    { slug: 'api-testing-fundamentals', title: 'API Testing Fundamentals', explanation: 'Beginner: Basic REST API testing concepts. Expert: Advanced API testing including GraphQL, gRPC, and enterprise API testing strategies.', category: 'API Testing' },
    { slug: 'postman-testing', title: 'Postman for API Testing', explanation: 'Beginner: Basic API requests and collections. Expert: Advanced Postman features, automation scripts, and API testing frameworks.', category: 'API Testing' },
    { slug: 'rest-assured', title: 'REST Assured', explanation: 'Beginner: Basic API testing with REST Assured. Expert: Advanced REST Assured patterns, test data management, and enterprise integration.', category: 'API Testing' },
    { slug: 'api-automation', title: 'API Test Automation', explanation: 'Beginner: Basic automated API tests. Expert: Advanced API automation frameworks, CI/CD integration, and API performance monitoring.', category: 'API Testing' },
    
    // 7. PERFORMANCE TESTING (Advanced Level: 18-36 months)
    { slug: 'performance-testing-basics', title: 'Performance Testing Basics', explanation: 'Beginner: Understanding basic performance concepts. Expert: Advanced performance testing methodologies, metrics, and enterprise performance strategies.', category: 'Performance Testing' },
    { slug: 'jmeter-testing', title: 'Apache JMeter', explanation: 'Beginner: Basic JMeter test plans. Expert: Advanced JMeter features, distributed testing, and performance optimization.', category: 'Performance Testing' },
    { slug: 'load-testing', title: 'Load Testing Strategies', explanation: 'Beginner: Basic load test scenarios. Expert: Advanced load testing strategies, capacity planning, and scalability analysis.', category: 'Performance Testing' },
    { slug: 'performance-monitoring', title: 'Performance Monitoring', explanation: 'Beginner: Basic performance monitoring. Expert: Advanced APM integration, real-time monitoring, and performance bottleneck analysis.', category: 'Performance Testing' },
    
    // 8. SECURITY TESTING (Advanced Level: 18-36 months)
    { slug: 'security-testing-intro', title: 'Security Testing Introduction', explanation: 'Beginner: Basic security concepts and vulnerabilities. Expert: Advanced security testing methodologies, threat modeling, and enterprise security strategies.', category: 'Security Testing' },
    { slug: 'owasp-testing', title: 'OWASP Testing Guide', explanation: 'Beginner: Basic OWASP Top 10 understanding. Expert: Advanced OWASP testing, custom security testing frameworks, and compliance testing.', category: 'Security Testing' },
    { slug: 'vulnerability-scanning', title: 'Vulnerability Scanning', explanation: 'Beginner: Basic vulnerability scanning tools. Expert: Advanced vulnerability management, automated security pipelines, and zero-day vulnerability handling.', category: 'Security Testing' },
    { slug: 'penetration-testing', title: 'Penetration Testing Basics', explanation: 'Beginner: Basic penetration testing concepts. Expert: Advanced penetration testing methodologies, custom exploit development, and security architecture review.', category: 'Security Testing' },
    
    // 9. MOBILE TESTING (Intermediate Level: 6-18 months)
    { slug: 'mobile-testing-intro', title: 'Mobile Testing Introduction', explanation: 'Beginner: Basic mobile testing challenges. Expert: Advanced mobile testing strategies, device fragmentation management, and mobile performance optimization.', category: 'Mobile Testing' },
    { slug: 'ios-testing', title: 'iOS Testing', explanation: 'Beginner: Basic iOS app testing. Expert: Advanced iOS testing including XCTest, TestFlight, and iOS-specific performance testing.', category: 'Mobile Testing' },
    { slug: 'android-testing', title: 'Android Testing', explanation: 'Beginner: Basic Android app testing. Expert: Advanced Android testing including Espresso, UI Automator, and Android-specific testing strategies.', category: 'Mobile Testing' },
    { slug: 'mobile-automation', title: 'Mobile Test Automation', explanation: 'Beginner: Basic Appium setup. Expert: Advanced mobile automation frameworks, device cloud integration, and mobile CI/CD pipelines.', category: 'Mobile Testing' },
    
    // 10. DATABASE TESTING (Intermediate Level: 6-18 months)
    { slug: 'database-testing', title: 'Database Testing', explanation: 'Beginner: Basic database validation and testing. Expert: Advanced database testing including performance, security, and distributed database testing.', category: 'Database Testing' },
    { slug: 'sql-testing', title: 'SQL Testing', explanation: 'Beginner: Basic SQL query validation. Expert: Advanced SQL testing including stored procedures, triggers, and complex query optimization.', category: 'Database Testing' },
    { slug: 'data-integrity', title: 'Data Integrity Testing', explanation: 'Beginner: Basic data consistency checks. Expert: Advanced data integrity testing across distributed systems and data migration testing.', category: 'Database Testing' },
    
    // 11. CI/CD AND DEVOPS FOR QA (Intermediate Level: 6-18 months)
    { slug: 'cicd-for-qa', title: 'CI/CD for QA Engineers', explanation: 'Beginner: Basic CI/CD concepts for testing. Expert: Advanced DevOps practices, test pipeline architecture, and enterprise CI/CD strategies.', category: 'CI/CD & DevOps' },
    { slug: 'jenkins-testing', title: 'Jenkins for Test Automation', explanation: 'Beginner: Basic Jenkins pipeline setup. Expert: Advanced Jenkins features, distributed testing, and pipeline optimization.', category: 'CI/CD & DevOps' },
    { slug: 'github-actions-testing', title: 'GitHub Actions Testing', explanation: 'Beginner: Basic GitHub Actions workflows. Expert: Advanced workflow orchestration, matrix testing, and GitHub Actions optimization.', category: 'CI/CD & DevOps' },
    { slug: 'docker-testing', title: 'Docker for Testing', explanation: 'Beginner: Basic Docker containers for testing. Expert: Advanced container orchestration, Kubernetes testing, and container security.', category: 'CI/CD & DevOps' },
    
    // 12. TEST MANAGEMENT AND LEADERSHIP (Expert Level: 36+ months)
    { slug: 'test-management', title: 'Test Management', explanation: 'Beginner: Basic test coordination. Expert: Enterprise test management, test strategy development, and cross-functional team leadership.', category: 'Test Management' },
    { slug: 'quality-metrics', title: 'Quality Metrics', explanation: 'Beginner: Basic test metrics tracking. Expert: Advanced quality engineering, predictive analytics, and business impact measurement.', category: 'Test Management' },
    { slug: 'team-leadership', title: 'QA Team Leadership', explanation: 'Beginner: Basic team coordination. Expert: Strategic leadership, team building, talent development, and organizational change management.', category: 'Test Management' },
    { slug: 'stakeholder-communication', title: 'Stakeholder Communication', explanation: 'Beginner: Basic status reporting. Expert: Executive communication, risk communication, and strategic quality advocacy.', category: 'Test Management' },
    
    // 13. ADVANCED QA TOPICS (Expert Level: 18-36 months)
    { slug: 'test-driven-qa', title: 'Test-Driven Development for QA', explanation: 'Beginner: Basic TDD concepts. Expert: Advanced TDD implementation, test architecture design, and organization-wide TDD adoption.', category: 'Advanced QA' },
    { slug: 'behavior-driven-testing', title: 'Behavior-Driven Testing', explanation: 'Beginner: Basic BDD with Gherkin. Expert: Advanced BDD frameworks, living documentation, and enterprise BDD strategy.', category: 'Advanced QA' },
    { slug: 'exploratory-testing', title: 'Exploratory Testing', explanation: 'Beginner: Basic exploratory techniques. Expert: Advanced session-based testing, charter-based testing, and exploratory test management.', category: 'Advanced QA' },
    { slug: 'ai-in-testing', title: 'AI in Testing', explanation: 'Beginner: Basic AI testing concepts. Expert: Advanced AI implementation, machine learning for test optimization, and autonomous testing systems.', category: 'Advanced QA' },
    
    // 14. QA CAREER DEVELOPMENT (All Levels)
    { slug: 'qa-career-path', title: 'QA Career Progression', explanation: 'Beginner: Entry-level QA roles and skills. Expert: Executive QA positions, thought leadership, and industry influence strategies.', category: 'Career Development' },
    { slug: 'certifications', title: 'QA Certifications', explanation: 'Beginner: Basic ISTQB Foundation. Expert: Advanced certifications including ISTQB Advanced, CSTE, and specialized security/performance certifications.', category: 'Career Development' },
    { slug: 'interview-preparation', title: 'QA Interview Preparation', explanation: 'Beginner: Junior QA interview questions. Expert: Senior/Lead QA interview preparation, system design questions, and leadership scenarios.', category: 'Career Development' },
    { slug: 'industry-trends', title: 'QA Industry Trends', explanation: 'Beginner: Understanding current QA trends. Expert: Shaping industry trends, conference speaking, and thought leadership development.', category: 'Career Development' },
    
    // INTERVIEW QUESTIONS
    { slug: 'interview-questions', title: 'QA Engineer Interview Questions', explanation: 'Comprehensive interview preparation for QA engineering roles.' }
  ]
};
