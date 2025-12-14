'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Globe,
  CheckCircle,
  PlayCircle,
  Code2,
  Lightbulb,
  Users,
} from 'lucide-react';

export default function JavaScriptE2ETesting() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Globe}
        category="JavaScript Testing"
        title="End-to-End (E2E) Testing"
        description="Test complete user flows in a real browser"
        colorTheme="yellow"
      />

      {/* What is E2E Testing */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Globe className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is End-to-End Testing?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                E2E testing simulates <strong className="text-cyan-700 dark:text-cyan-400">real user scenarios</strong> from start to finish. Tests run in a <strong className="text-blue-700 dark:text-blue-400">real browser</strong>, clicking buttons, filling forms, and verifying the entire application works together.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">User-Centric</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tests from user's perspective
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Real Browser</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Chrome, Firefox, Safari
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Full Stack</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Frontend + Backend + Database
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testing Pyramid */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>The Testing Pyramid</CardTitle>
              <CardDescription>Different levels of testing</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <div className="flex flex-col items-center gap-2">
                <div className="w-full max-w-xs">
                  <div className="bg-gradient-to-r from-red-400 to-red-500 text-white p-4 text-center rounded-t-lg">
                    <h4 className="font-bold">E2E Tests</h4>
                    <p className="text-xs mt-1">Slow • Few • Expensive</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-4 text-center">
                    <h4 className="font-bold">Integration Tests</h4>
                    <p className="text-xs mt-1">Medium • Some • Moderate</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-6 text-center rounded-b-lg">
                    <h4 className="font-bold">Unit Tests</h4>
                    <p className="text-xs mt-1">Fast • Many • Cheap</p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle>70-20-10 Rule</AlertTitle>
              <AlertDescription>
                <strong>70%</strong> Unit Tests, <strong>20%</strong> Integration Tests, <strong>10%</strong> E2E Tests for optimal coverage and speed.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Popular E2E Tools */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Popular E2E Testing Tools</CardTitle>
              <CardDescription>Choose your framework</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Playwright</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Fast & reliable</li>
                <li>✅ Multi-browser</li>
                <li>✅ Auto-wait</li>
                <li>✅ Modern API</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Cypress</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Developer-friendly</li>
                <li>✅ Time-travel</li>
                <li>✅ Visual testing</li>
                <li>✅ Great DX</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Puppeteer</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Chrome DevTools</li>
                <li>✅ Headless</li>
                <li>✅ PDF generation</li>
                <li>✅ Google-backed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 1: Playwright E2E Test</CardTitle>
          <CardDescription>Testing a login flow</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  // Navigate to page
  await page.goto('https://example.com/login');
  
  // Fill login form
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  
  // Click login button
  await page.click('button[type="submit"]');
  
  // Wait for navigation
  await page.waitForURL('**/dashboard');
  
  // Assert user is logged in
  await expect(page.locator('h1')).toHaveText('Welcome back!');
  await expect(page.locator('.user-menu')).toBeVisible();
});

test('shows error for invalid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.click('button[type="submit"]');
  
  // Error message should appear
  await expect(page.locator('.error-message')).toHaveText(
    'Invalid email or password'
  );
  
  // Should stay on login page
  await expect(page).toHaveURL(/.*login/);
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Cypress E2E Test</CardTitle>
          <CardDescription>Testing an e-commerce flow</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('https://shop.example.com');
  });
  
  it('can add items to cart', () => {
    // Search for product
    cy.get('input[type="search"]').type('laptop');
    cy.get('button[type="submit"]').click();
    
    // Select first product
    cy.get('.product-card').first().click();
    
    // Add to cart
    cy.get('button').contains('Add to Cart').click();
    
    // Verify cart badge updated
    cy.get('.cart-badge').should('have.text', '1');
    
    // Go to cart
    cy.get('.cart-icon').click();
    
    // Verify item in cart
    cy.get('.cart-item')
      .should('have.length', 1)
      .should('contain', 'laptop');
  });
  
  it('can checkout', () => {
    // Add item (using custom command)
    cy.addToCart('laptop');
    
    // Go to checkout
    cy.get('.checkout-button').click();
    
    // Fill shipping info
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="city"]').type('New York');
    cy.get('select[name="country"]').select('USA');
    
    // Fill payment
    cy.get('input[name="cardNumber"]').type('4111111111111111');
    cy.get('input[name="expiry"]').type('12/25');
    cy.get('input[name="cvv"]').type('123');
    
    // Submit order
    cy.get('button').contains('Place Order').click();
    
    // Verify success
    cy.url().should('include', '/order-confirmation');
    cy.get('.success-message')
      .should('contain', 'Order placed successfully');
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: Testing Form Validation</CardTitle>
          <CardDescription>E2E test for form interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`import { test, expect } from '@playwright/test';

test('contact form validation', async ({ page }) => {
  await page.goto('https://example.com/contact');
  
  // Submit empty form
  await page.click('button[type="submit"]');
  
  // Check validation errors
  await expect(page.locator('#name-error'))
    .toHaveText('Name is required');
  await expect(page.locator('#email-error'))
    .toHaveText('Email is required');
  await expect(page.locator('#message-error'))
    .toHaveText('Message is required');
  
  // Fill name only
  await page.fill('#name', 'John Doe');
  await page.click('button[type="submit"]');
  
  // Name error should disappear
  await expect(page.locator('#name-error')).not.toBeVisible();
  
  // Other errors still visible
  await expect(page.locator('#email-error')).toBeVisible();
  
  // Fill invalid email
  await page.fill('#email', 'invalid-email');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('#email-error'))
    .toHaveText('Please enter a valid email');
  
  // Fill valid email and message
  await page.fill('#email', 'john@example.com');
  await page.fill('#message', 'Hello, this is a test message');
  await page.click('button[type="submit"]');
  
  // Success message
  await expect(page.locator('.success-banner'))
    .toHaveText('Message sent successfully!');
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Common E2E Patterns */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <PlayCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common E2E Testing Patterns</CardTitle>
              <CardDescription>Reusable patterns and practices</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Page Object Model</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Encapsulate page interactions in reusable classes
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Custom Commands</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create reusable test helpers (login, addToCart, etc.)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Test Fixtures</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Setup test data before tests run
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Visual Regression</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Take screenshots and compare with baselines
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: Page Object Model</CardTitle>
          <CardDescription>Organizing tests with POM</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-message');
  }
  
  async goto() {
    await this.page.goto('https://example.com/login');
  }
  
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
  
  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

// test.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('test@example.com', 'password123');
  
  await expect(page).toHaveURL('**/dashboard');
});

test('shows error for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('wrong@example.com', 'wrong');
  
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Invalid credentials');
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 5: Custom Cypress Commands</CardTitle>
          <CardDescription>Reusable test helpers</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// cypress/support/commands.js

// Custom login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});

// Custom command to add item to cart
Cypress.Commands.add('addToCart', (productName) => {
  cy.get('input[type="search"]').type(productName);
  cy.get('.product-card')
    .contains(productName)
    .parent()
    .find('button')
    .contains('Add to Cart')
    .click();
});

// Custom command to clear cart
Cypress.Commands.add('clearCart', () => {
  cy.get('.cart-icon').click();
  cy.get('.clear-cart-button').click();
  cy.get('.confirm-button').click();
});

// Using custom commands in tests
describe('Shopping', () => {
  beforeEach(() => {
    cy.login('test@example.com', 'password');
  });
  
  it('can add and remove items', () => {
    cy.addToCart('laptop');
    cy.get('.cart-badge').should('have.text', '1');
    
    cy.clearCart();
    cy.get('.cart-badge').should('not.exist');
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* E2E Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>E2E Testing Best Practices</CardTitle>
              <CardDescription>Do's and don'ts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Test critical user journeys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Use data-testid attributes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Run tests in CI/CD pipeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Clean up test data after tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Use Page Object Model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Test happy path AND edge cases</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Test everything with E2E</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Use hard-coded waits (sleep)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Depend on test execution order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Use brittle CSS selectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Share state between tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Test implementation details</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Real Browser Testing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tests run in actual browsers<br/>
                    Simulates real user behavior
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Test Critical Flows</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Login, checkout, signup<br/>
                    Important user journeys
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Page Objects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Organize tests better<br/>
                    Reusable, maintainable code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚖️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Balance Your Tests</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    70% unit, 20% integration, 10% E2E<br/>
                    Testing pyramid approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Remember</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              E2E tests are <strong>slow and expensive</strong>. Use them for critical user flows only. Most testing should be unit and integration tests!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
