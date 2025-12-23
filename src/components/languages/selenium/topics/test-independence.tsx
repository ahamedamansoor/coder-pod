'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Shield,
  CheckCircle,
  AlertCircle,
  Code,
  Zap,
  Layers,
  ArrowRight,
  Star,
  Box,
  Package,
  GitBranch,
  RefreshCw,
  Lock,
  Unlock,
  Triangle,
  Square,
  Circle,
  Hexagon
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function TestIndependenceComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'test-independence',
    title: 'Test Independence',
    explanation: 'Writing independent and isolated tests',
    category: '20. Best Practices'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Shield}
        category="Selenium · Test Architecture"
        title="Test Independence"
        description="Master the art of creating autonomous, self-contained tests that run reliably in any order without dependencies"
        colorTheme="green"
        badges={[
          { label: 'Test Architecture', variant: 'success' },
          { label: 'Autonomous Testing', variant: 'info' },
          { label: 'Reliability', variant: 'secondary' },
        ]}
      />

      {/* Section 1: What is Test Independence? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <Shield className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                Understanding Test Independence
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Creating self-contained tests that don't depend on each other for setup or execution
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Test independence means each test is <span className="font-bold text-green-600 dark:text-green-400">completely self-contained</span> and can:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Run in any order without affecting results</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Set up its own test data and environment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Clean up after itself completely</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Execute in parallel without conflicts</span>
              </li>
            </ul>
          </div>

          {/* Independence Analogy */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Independence Analogy</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Think of independent tests like <span className="font-semibold">self-contained apartment units</span>. 
                  Each apartment has its own kitchen, bathroom, and utilities. You don't need to use someone 
                  else's apartment to cook or shower. Similarly, each test should have everything it needs 
                  to run successfully without depending on other tests.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Benefits of Test Independence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Benefits of Test Independence
          </CardTitle>
          <CardDescription className="text-base">
            Why independent tests are crucial for modern test automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Parallel Execution */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                  <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100">Parallel Execution</h4>
              </div>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                Run tests simultaneously to speed up execution
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>10x faster execution</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Better resource utilization</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>CI/CD optimization</span>
                </div>
              </div>
            </div>

            {/* Reliable Debugging */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Reliable Debugging</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Isolate failures to specific test scenarios
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Clear failure context</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Easier troubleshooting</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Faster bug fixes</span>
                </div>
              </div>
            </div>

            {/* Maintainability */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Maintainability</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Easy to modify and update individual tests
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Isolated changes</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Reduced risk</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Team collaboration</span>
                </div>
              </div>
            </div>

            {/* Scalability */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Scalability</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Grow test suite without breaking dependencies
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Easy addition</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Linear growth</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Future-proof</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Principles of Test Independence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Lock className="w-7 h-7" />
            Principles of Test Independence
          </CardTitle>
          <CardDescription className="text-base">
            Core principles for creating truly independent tests
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Self-Contained Setup */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Box className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Self-Contained Setup</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Each test creates its own test data and environment
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Setup Strategies</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Create test data programmatically</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Use test data builders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Isolate test environments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Cleanup */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Complete Cleanup</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Remove all artifacts and reset state after execution
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Cleanup Methods</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>@AfterEach teardown methods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Database rollback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>File system cleanup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* No Shared State */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">No Shared State</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Avoid static variables and shared resources
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Avoid These</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-3 h-3 text-purple-600" />
                    <span>Static variables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-3 h-3 text-purple-600" />
                    <span>Shared databases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-3 h-3 text-purple-600" />
                    <span>Global configuration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Isolated Execution */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <GitBranch className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Isolated Execution</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Tests run in separate contexts without interference
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Isolation Techniques</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Separate browser sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Unique test accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Parallel execution support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Implementation Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Implementation Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Proven patterns for achieving test independence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Patterns Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Builder Pattern */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Box className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Test Data Builder</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Create test data programmatically with builders
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Example</h5>
                <pre className="text-xs font-mono text-green-800 dark:text-green-200">
{`User user = UserBuilder.builder()
  .withEmail("test@example.com")
  .withPassword("Test123!")
  .withRole("USER")
  .build();`}
                </pre>
              </div>
            </div>

            {/* Factory Pattern */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Test Factory</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Factory methods for creating test objects
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Example</h5>
                <pre className="text-xs font-mono text-blue-800 dark:text-blue-200">
{`public static User createTestUser() {
  return new User(
    UUID.randomUUID().toString(),
    "test@example.com"
  );
}`}
                </pre>
              </div>
            </div>

            {/* Template Method */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Template Method</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Base class with common setup/teardown logic
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Structure</h5>
                <pre className="text-xs font-mono text-purple-800 dark:text-purple-200">
{`@BeforeEach
void setUp() {
  createTestData();
  loginToApp();
}

@AfterEach
void tearDown() {
  logout();
  cleanupData();
}`}
                </pre>
              </div>
            </div>

            {/* Page Object Model */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Page Objects</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Encapsulate page interactions and state
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Benefits</h5>
                <div className="space-y-1 text-xs">
                  <div>• Isolated page logic</div>
                  <div>• Reusable components</div>
                  <div>• Easier maintenance</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Test Independence Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Best Practices ✅
            </h4>
            <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Create test data within each test</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use @BeforeEach and @AfterEach hooks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid static variables and shared state</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Clean up all created resources</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Design for parallel execution</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Avoid These ❌
            </h4>
            <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't depend on other tests' data</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid shared databases or files</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't use global configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid test execution order dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't leave cleanup to manual processes</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Code Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Independent Test Example
          </CardTitle>
          <CardDescription className="text-base">
            Complete example of a self-contained, independent test
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="mb-4">
              <h5 className="text-green-400 font-semibold">Independent Test Structure</h5>
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto">
              <code>{`@Test
public void testUserRegistration() {
    // Arrange: Create independent test data
    String uniqueEmail = "test_" + UUID.randomUUID() + "@example.com";
    String password = "TestPassword123!";
    
    // Act: Perform test actions
    driver.get("/register");
    registrationPage.enterEmail(uniqueEmail);
    registrationPage.enterPassword(password);
    registrationPage.clickSubmit();
    
    // Assert: Verify results
    assertTrue(successPage.isDisplayed());
    assertEquals(uniqueEmail, userProfilePage.getEmail());
}

@BeforeEach
public void setUp() {
    // Independent setup for each test
    driver = new ChromeDriver();
    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}

@AfterEach
public void tearDown() {
    // Complete cleanup
    if (driver != null) {
        driver.quit();
    }
    // Clean up any test data created
    testDataCleanup.deleteUser(createdUserId);
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Key Takeaways */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Shield className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="mt-2 space-y-1">
            <li>• Independent tests can run in any order without affecting results</li>
            <li>• Each test must create its own data and clean up after itself</li>
            <li>• Avoid shared state and dependencies between tests</li>
            <li>• Design tests for parallel execution to maximize efficiency</li>
            <li>• Use setup/teardown hooks for consistent test isolation</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Topic Navigation */}
      <TopicNavigation 
        currentTopic={currentTopic}
        language={language}
      />
    </div>
  );
}
