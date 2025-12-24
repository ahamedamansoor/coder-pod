'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Import all existing Selenium topic components using named imports
import { IntroductionSelenium } from './topics/introduction-selenium';
import { SeleniumArchitecture } from './topics/selenium-architecture';
import { SeleniumInstallationSetup } from './topics/selenium-installation-setup';
import { WebDriverManager } from './topics/webdriver-manager';
import { YourFirstTest } from './topics/your-first-test';
import { ChromeWebDriver } from './topics/chrome-webdriver';
import { FirefoxWebDriver } from './topics/firefox-webdriver';
import { EdgeSafariWebDriver } from './topics/edge-safari-webdriver';
import { BrowserOptions } from './topics/browser-options';
import { HeadlessMode } from './topics/headless-mode';
import { IdNameLocators } from './topics/id-name-locators';
import { ClassTagLocators } from './topics/class-tag-locators';
import { JunitIntegration } from './topics/junit-integration';
import { PytestIntegration } from './topics/pytest-integration';
import { MochaJestIntegration } from './topics/mocha-jest-integration';
import { PageObjectModelIntroduction } from './topics/page-object-model-introduction';
import { CreatingPageObjects } from './topics/creating-page-objects';
import { TextLocators } from './topics/text-locators';
import { CssSelectors } from './topics/css-selectors';
import { XpathBasics } from './topics/xpath-basics';
import { AdvancedXpath } from './topics/advanced-xpath';
import { RelativeLocators } from './topics/relative-locators';
import { ClickSubmit } from './topics/click-submit';
import { TextClear } from './topics/text-clear';
import { ElementProperties } from './topics/element-properties';
import { SelectDropdowns } from './topics/select-dropdowns';
import { CheckboxRadio } from './topics/checkbox-radio';
import { FileUploads } from './topics/file-uploads';
import { ImplicitWaits } from './topics/implicit-waits';
import { ExplicitWaits } from './topics/explicit-waits';
import { ExpectedConditions } from './topics/expected-conditions';
import { FluentWaits } from './topics/fluent-waits';
import { CustomWaitConditions } from './topics/custom-wait-conditions';
import { UrlNavigation } from './topics/url-navigation';
import { BrowserHistory } from './topics/browser-history';
import { WindowManagement } from './topics/window-management';
import { MultipleWindowsTabs } from './topics/multiple-windows-tabs';
import { ActionsClass } from './topics/actions-class';
import { MouseActions } from './topics/mouse-actions';
import { KeyboardActions } from './topics/keyboard-actions';
import { ScrollOperations } from './topics/scroll-operations';
import { DragDrop } from './topics/drag-drop';
import { Iframes } from './topics/iframes';
import { NestedFrames } from './topics/nested-frames';
import { JavascriptAlerts } from './topics/javascript-alerts';
import { ExecuteJavascript } from './topics/execute-javascript';
import { JsClickScroll } from './topics/js-click-scroll';
import { DomManipulation } from './topics/dom-manipulation';
import { AsyncJavascript } from './topics/async-javascript';
import { SeleniumScreenshots } from './topics/selenium-screenshots';
import { ScreenshotOnFailure } from './topics/screenshot-on-failure';
import { VisualComparison } from './topics/visual-comparison';
import { Cookies } from './topics/cookies';
import { Storage } from './topics/storage';
import { SeleniumPlayground } from './playground/selenium-playground'; 
import { TestngIntegration } from './topics/testng-integration';
import { PageFactoryComponent } from './topics/page-factory-pattern';
import { POMBestPractices } from './topics/pom-best-practices';
import { DataProvidersComponent } from './topics/data-providers';
import { ExcelDataReadingComponent } from './topics/excel-data-reading';
import { CSVDataReadingComponent } from './topics/csv-data-reading';
import { JSONDataReadingComponent } from './topics/json-data-reading';
import { DatabaseIntegrationComponent } from './topics/database-integration';
import { EcommerceTesting } from './topics/ecommerce-testing';
import BankingTesting from './topics/banking-testing';
import SocialMediaTesting from './topics/social-media-testing';
import SaaSTesting from './topics/saas-testing';
import HealthTesting from './topics/health-testing';
import { GridSetupComponent } from './topics/grid-setup';
import { GridIntroductionComponent } from './topics/grid-introduction';
import { RemoteWebDriverComponent } from './topics/remote-webdriver';
import { DockerGridComponent } from './topics/docker-grid';
import { CloudTestingPlatformsComponent } from './topics/cloud-testing-platforms';
import { ShadowDomComponent } from './topics/shadow-dom';
import { CanvasElementsComponent } from './topics/canvas-elements';
import { SvgElementsComponent } from './topics/svg-elements';
import { DatePickersComponent } from './topics/date-pickers';
import { RichTextEditorsComponent } from './topics/rich-text-editors';
import { CommonExceptionsComponent } from './topics/common-exceptions';
import { StateElementReferenceComponent } from './topics/state-element-reference';
import { ElementNotFoundComponent } from './topics/element-not-found';
import { TimeoutExceptionsComponent } from './topics/timeout-exceptions';
import { LoggingReportingComponent } from './topics/logging-reporting';
import { JenkinsIntegrationComponent } from './topics/jenkins-integration';
import { GitHubActionsComponent } from './topics/github-actions';
import { GitLabCICDComponent } from './topics/gitlab-cicd';
import { FrameworkDesignPrinciplesComponent } from './topics/framework-design-principles';
import { HybridFrameworkComponent } from './topics/hybrid-framework';
import { KeywordDrivenFrameworkComponent } from './topics/keyword-driven-framework';
import { ConfigurationManagementComponent } from './topics/configuration-management';
import { UtilityClassesHelpersComponent } from './topics/utility-classes-helpers';
import { BaseClassesInheritanceComponent } from './topics/base-classes-inheritance';
import { Selenium4OverviewComponent } from './topics/selenium-4-overview';
import { W3CWebDriverProtocolComponent } from './topics/w3c-webdriver-protocol';
import { ChromeDevToolsProtocolComponent } from './topics/chrome-devtools-protocol';
import BidiApis from './topics/bidi-apis';
import NewWindowTabApis from './topics/new-window-tab-apis';
import { NetworkInterceptionComponent } from './topics/network-interception';
import { ParallelExecutionComponent } from './topics/parallel-execution';
import { TestPerformanceComponent } from './topics/test-performance';
import { ResourceManagementComponent } from './topics/resource-management';
import { FlakyTestPreventionComponent } from './topics/flaky-test-prevention';
import { MemoryManagementComponent } from './topics/memory-management';
import { TestDesignPrinciplesSeleniumComponent } from './topics/test-design-principles-selenium';
import { LocatorBestPracticesComponent } from './topics/locator-best-practices';
import { TestIndependenceComponent } from './topics/test-independence';
import { MaintainableTestCodeComponent } from './topics/maintainable-test-code';
import { SecurityTestingBasics } from './topics/security-testing-basics';
import XSSTesting from './topics/xss-testing';
import SQLInjectionTesting from './topics/sql-injection-testing';
import AuthenticationTesting from './topics/authentication-testing';
import OWASPIntegration from './topics/owasp-integration';
import AccessibilityFundamentals from './topics/accessibility-fundamentals';
import AxeCoreIntegration from './topics/axe-core-integration';
import KeyboardNavigationTesting from './topics/keyboard-navigation-testing';
import ScreenReaderTesting from './topics/screen-reader-testing';
import ColorContrastTesting from './topics/color-contrast-testing';
import { CrossBrowserTestingComponent } from './topics/cross-browser-testing';

// Performance Testing Components
import PerformanceMetricsCollection from './topics/performance-metrics-collection';
import NavigationTimingAPIComponent from './topics/navigation-timing-api';
import ResourceTimingComponent from './topics/resource-timing';
import JMeterIntegrationComponent from './topics/jmeter-integration';

// Test Management Components
import TestSuitesOrganizationComponent from './topics/test-suites-organization';
import TestPrioritizationComponent from './topics/test-prioritization';
import TestTaggingComponent from './topics/test-tagging';
import TestManagementToolsComponent from './topics/test-management-tools';
import DefectTrackingIntegrationComponent from './topics/defect-tracking-integration';

// Reporting Components
import { ExtentReportsComponent } from './topics/extent-reports';
import { AllureReportsComponent } from './topics/allure-reports';
import { TestNGReportsComponent } from './topics/testng-reports';
import { CustomReportGenerationComponent } from './topics/custom-report-generation';
import { TestDocumentationComponent } from './topics/test-documentation';

// API Components
import { RestApiBasicsComponent } from './topics/rest-api-basics';
import { RestAssuredIntegrationComponent } from './topics/rest-assured-integration';
import { ApiSetupComponent } from './topics/api-setup';
import { ApiValidationInUiTestsComponent } from './topics/api-validation-ui-tests';
import { AuthenticationViaApiComponent } from './topics/authentication-via-api';

// Touch Actions Component
import { TouchActionsComponent } from './topics/touch-actions';
import { MobileEmulationComponent } from './topics/mobile-emulation';
import { ResponsiveTestingComponent } from './topics/responsive-testing';

// Map topic slugs to their corresponding components
const TopicComponentMap: Record<string, React.LazyExoticComponent<any> | React.ComponentType<any>> = {
  'introduction': IntroductionSelenium,
  'architecture': SeleniumArchitecture,
  'installation-setup': SeleniumInstallationSetup,
  'webdriver-manager': WebDriverManager,
  'first-test': YourFirstTest,
  'chrome-webdriver': ChromeWebDriver,
  'firefox-webdriver': FirefoxWebDriver,
  'edge-safari-webdriver': EdgeSafariWebDriver,
  'browser-options': BrowserOptions,
  'headless-mode': HeadlessMode,
  'id-name-locators': IdNameLocators,
  'class-tag-locators': ClassTagLocators,
  'text-locators': TextLocators,
  'css-selectors': CssSelectors,
  'xpath-basics': XpathBasics,
  'advanced-xpath': AdvancedXpath,
  'relative-locators': RelativeLocators,
  'click-submit': ClickSubmit,
  'text-input-clear': TextClear,
  'element-properties': ElementProperties,
  'select-dropdowns': SelectDropdowns,
  'checkboxes-radio': CheckboxRadio,
  'file-uploads': FileUploads,
  'implicit-waits': ImplicitWaits,
  'explicit-waits': ExplicitWaits,
  'expected-conditions': ExpectedConditions,
  'fluent-waits': FluentWaits,
  'custom-wait-conditions': CustomWaitConditions,
  'url-navigation': UrlNavigation,
  'browser-history': BrowserHistory,
  'window-management': WindowManagement,
  'multiple-windows-tabs': MultipleWindowsTabs,
  'actions-class': ActionsClass,
  'mouse-actions': MouseActions,
  'keyboard-actions': KeyboardActions,
  'scroll-operations': ScrollOperations,
  'drag-and-drop': DragDrop,
  'working-with-iframes': Iframes,
  'nested-frames': NestedFrames,
  'javascript-alerts': JavascriptAlerts,
  'execute-javascript': ExecuteJavascript,
  'javascript-click-scroll': JsClickScroll,
  'dom-manipulation': DomManipulation,
  'async-javascript': AsyncJavascript,
  'taking-screenshots': SeleniumScreenshots,
  'screenshot-on-failure': ScreenshotOnFailure,
  'visual-comparison': VisualComparison,
  'cookie-management': Cookies,
  'local-storage': Storage,
  'session-storage': Storage,
  'selenium-playground': SeleniumPlayground,
  'testng-integration': TestngIntegration,
  'junit-integration': JunitIntegration,
  'pytest-integration': PytestIntegration,
  'mocha-jest-integration': MochaJestIntegration,
  'pom-introduction': PageObjectModelIntroduction,
  'creating-page-objects': CreatingPageObjects,
  'page-factory': PageFactoryComponent,
  'pom-best-practices': POMBestPractices,
  'data-providers': DataProvidersComponent,
  'excel-data-reading': ExcelDataReadingComponent,
  'csv-json-data-reading': CSVDataReadingComponent,
  'csv-json-data': JSONDataReadingComponent,
  'database-integration': DatabaseIntegrationComponent,
  'grid-introduction': GridIntroductionComponent,
  'grid-setup': GridSetupComponent,
  'remote-webdriver': RemoteWebDriverComponent,
  'docker-with-grid': DockerGridComponent,
  'cloud-testing-platforms': CloudTestingPlatformsComponent,
  'shadow-dom': ShadowDomComponent,
  'canvas-elements': CanvasElementsComponent,
  'svg-elements': SvgElementsComponent,
  'date-pickers': DatePickersComponent,
  'rich-text-editors': RichTextEditorsComponent,
  'common-exceptions': CommonExceptionsComponent,
  'state-element-reference': StateElementReferenceComponent,
  'element-not-found': ElementNotFoundComponent,
  'timeout-exceptions': TimeoutExceptionsComponent,
  'logging-reporting': LoggingReportingComponent,
  'jenkins-integration': JenkinsIntegrationComponent,
  'github-actions': GitHubActionsComponent,
  'gitlab-ci': GitLabCICDComponent,
  'parallel-execution': ParallelExecutionComponent,
  'test-performance': TestPerformanceComponent,
  'resource-management': ResourceManagementComponent,
  'flaky-test-prevention': FlakyTestPreventionComponent,
  'memory-management': MemoryManagementComponent,
  'test-design-principles': TestDesignPrinciplesSeleniumComponent,
  'locator-best-practices': LocatorBestPracticesComponent,
  'test-independence': TestIndependenceComponent,
  'maintainable-test-code': MaintainableTestCodeComponent,
  'security-testing-basics': SecurityTestingBasics,
  'xss-testing': XSSTesting,
  'sql-injection-testing': SQLInjectionTesting,
  'authentication-testing': AuthenticationTesting,
  'owasp-integration': OWASPIntegration,
  'accessibility-fundamentals': AccessibilityFundamentals,
  'axe-core-integration': AxeCoreIntegration,
  'keyboard-navigation-testing': KeyboardNavigationTesting as any,
  'screen-reader-testing': ScreenReaderTesting,
  'color-contrast-testing': ColorContrastTesting,
  'cross-browser-testing': CrossBrowserTestingComponent,
  'framework-design-principles': FrameworkDesignPrinciplesComponent,
  'hybrid-framework': HybridFrameworkComponent,
  'keyword-driven-framework': KeywordDrivenFrameworkComponent,
  'configuration-management': ConfigurationManagementComponent,
  'utility-classes-helpers': UtilityClassesHelpersComponent,
  'base-classes-inheritance': BaseClassesInheritanceComponent,
  'selenium-4-overview': Selenium4OverviewComponent,
  'w3c-webdriver-protocol': W3CWebDriverProtocolComponent,
  'chrome-devtools-protocol': ChromeDevToolsProtocolComponent,
  'bidi-apis': BidiApis,
  'new-window-tab-apis': NewWindowTabApis,
  'network-interception': NetworkInterceptionComponent,
  
  // Real-World Scenarios
  'ecommerce-testing': EcommerceTesting,
  'banking-application-testing': BankingTesting,
  'social-media-testing': SocialMediaTesting,
  'saas-application-testing': SaaSTesting,
  'healthcare-application-testing': HealthTesting,
  'extent-reports': ExtentReportsComponent,
  'allure-reports': AllureReportsComponent,
  'testng-reports': TestNGReportsComponent,
  'custom-report-generation': CustomReportGenerationComponent,
  'test-documentation': TestDocumentationComponent,
  
  // API Components
  'rest-api-basics': RestApiBasicsComponent,
  'restassured-integration': RestAssuredIntegrationComponent,
  'api-test-setup': ApiSetupComponent,
  'api-validation-ui-tests': ApiValidationInUiTestsComponent,
  'authentication-via-api': AuthenticationViaApiComponent,
  
  // Touch Actions Component
  'responsive-testing': ResponsiveTestingComponent,
  'mobile-emulation': MobileEmulationComponent,
  'touch-actions': TouchActionsComponent,

  // Performance Testing Components
  'performance-metrics-collection': PerformanceMetricsCollection,
  'navigation-timing-api': NavigationTimingAPIComponent,
  'resource-timing': ResourceTimingComponent,
  'jmeter-integration': JMeterIntegrationComponent,

  // Test Management Components
  'test-suites-organization': TestSuitesOrganizationComponent,
  'test-prioritization': TestPrioritizationComponent,
  'test-tagging-filtering': TestTaggingComponent,
  'test-management-tools': TestManagementToolsComponent,
  'defect-tracking-integration': DefectTrackingIntegrationComponent,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function SeleniumContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = TopicComponentMap[topic.slug];

  if (CustomTopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <React.Suspense fallback={<LoadingSkeleton />}>
          <CustomTopicComponent />
        </React.Suspense>
      </GenericContentDisplay>
    );
  }

  // All topics use GenericContentDisplay until specific components are created
  return <GenericContentDisplay topic={topic} language={language} />;
}
