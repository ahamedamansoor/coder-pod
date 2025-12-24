'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Play, RefreshCw, Activity, Gauge, CreditCard, DollarSign, TrendingUp, Shield, Users, Code, Eye, Plus, Minus, Trash2, Search, Monitor, Package, ShoppingCart, CheckCircle, User, Lock, Home, ArrowRight, LogOut, Send, History, Wallet } from 'lucide-react';
import { toast } from 'sonner';

interface Account {
  id: string;
  accountNumber: string;
  accountType: 'checking' | 'savings' | 'credit';
  balance: number;
  currency: string;
  bankName: string;
  status: 'active' | 'inactive' | 'frozen';
  lastTransaction: string;
}

interface Transaction {
  id: string;
  accountId: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
  amount: number;
  description: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  fromAccount?: string;
  toAccount?: string;
}

interface BankingState {
  accounts: Account[];
  transactions: Transaction[];
  currentBalance: number;
  selectedAccount: Account | null;
  isLoggedIn: boolean;
  currentUser: string;
  sessionToken: string;
  lastLoginTime: string;
  currentView: 'login' | 'dashboard' | 'transactions' | 'transfer' | 'transfer-confirm';
  loginUsername: string;
  loginPassword: string;
  transferAmount: string;
  transferRecipient: string;
  transferNote: string;
}

const BankingTesting: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript' | 'playwright'>('playwright');
  const [selectedBank, setSelectedBank] = useState<'chase' | 'bankofamerica' | 'wellsfargo' | 'general'>('chase');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [currentCodeLine, setCurrentCodeLine] = useState(-1);
  const [liveVariables, setLiveVariables] = useState<Record<string, string>>({});
  const [showAccounts, setShowAccounts] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const [bankingState, setBankingState] = useState<BankingState>({
    accounts: [],
    transactions: [],
    currentBalance: 0,
    selectedAccount: null,
    isLoggedIn: false,
    currentUser: '',
    sessionToken: '',
    lastLoginTime: '',
    currentView: 'login',
    loginUsername: '',
    loginPassword: '',
    transferAmount: '',
    transferRecipient: 'Ahamed Mansoor',
    transferNote: ''
  });

  const getAccounts = () => [
    {
      id: 'acc1',
      accountNumber: '****4582',
      accountType: 'checking' as const,
      balance: 5432.50,
      currency: 'USD',
      bankName: 'Chase',
      status: 'active' as const,
      lastTransaction: '2024-01-15'
    },
    {
      id: 'acc2',
      accountNumber: '****7891',
      accountType: 'savings' as const,
      balance: 12500.00,
      currency: 'USD',
      bankName: 'Chase',
      status: 'active' as const,
      lastTransaction: '2024-01-14'
    }
  ];

  const getTransactions = () => [
    {
      id: 'txn1',
      accountId: 'acc1',
      type: 'deposit' as const,
      amount: 1500.00,
      description: 'Salary Deposit',
      date: '2024-01-15',
      status: 'completed' as const
    },
    {
      id: 'txn2',
      accountId: 'acc1',
      type: 'withdrawal' as const,
      amount: 250.00,
      description: 'ATM Withdrawal',
      date: '2024-01-14',
      status: 'completed' as const
    },
    {
      id: 'txn3',
      accountId: 'acc1',
      type: 'transfer' as const,
      amount: 500.00,
      description: 'Transfer to Savings',
      date: '2024-01-13',
      status: 'completed' as const,
      fromAccount: 'acc1',
      toAccount: 'acc2'
    },
    {
      id: 'txn4',
      accountId: 'acc3',
      type: 'payment' as const,
      amount: 125.50,
      description: 'Credit Card Payment',
      date: '2024-01-12',
      status: 'pending' as const
    }
  ];

  const login = (username: string, password: string) => {
    const sessionToken = 'BANK_TOKEN_' + Math.random().toString(36).substr(2, 9);
    setBankingState(prev => ({
      ...prev,
      isLoggedIn: true,
      currentUser: username,
      sessionToken: sessionToken,
      lastLoginTime: new Date().toISOString(),
      accounts: getAccounts(),
      transactions: getTransactions(),
      currentView: 'dashboard'
    }));
    toast.success('Successfully logged in to banking system');
  };

  const logout = () => {
    setBankingState(prev => ({
      ...prev,
      isLoggedIn: false,
      currentUser: '',
      sessionToken: '',
      lastLoginTime: '',
      accounts: [],
      transactions: [],
      selectedAccount: null,
      currentBalance: 0,
      currentView: 'login'
    }));
    toast.success('Successfully logged out');
  };

  const selectAccount = (account: Account) => {
    setBankingState(prev => ({
      ...prev,
      selectedAccount: account,
      currentBalance: account.balance
    }));
  };

  const performTransaction = (type: 'deposit' | 'withdrawal' | 'transfer' | 'payment', amount: number, description?: string) => {
    if (!bankingState.selectedAccount) return;

    const newTransaction: Transaction = {
      id: 'txn' + Math.random().toString(36).substr(2, 9),
      accountId: bankingState.selectedAccount.id,
      type,
      amount,
      description: description || `${type.charAt(0).toUpperCase() + type.slice(1)} Transaction`,
      date: new Date().toISOString().split('T')[0],
      status: 'completed'
    };

    const updatedBalance = type === 'deposit' 
      ? bankingState.currentBalance + amount
      : bankingState.currentBalance - amount;

    setBankingState(prev => ({
      ...prev,
      transactions: [newTransaction, ...prev.transactions],
      currentBalance: updatedBalance,
      selectedAccount: prev.selectedAccount ? {
        ...prev.selectedAccount,
        balance: updatedBalance
      } : null
    }));

    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} of $${amount.toFixed(2)} completed`);
  };

  const handleLogin = () => {
    if (bankingState.loginUsername && bankingState.loginPassword) {
      const sessionToken = 'BANK_TOKEN_' + Math.random().toString(36).substr(2, 9);
      setBankingState(prev => ({
        ...prev,
        isLoggedIn: true,
        currentUser: bankingState.loginUsername,
        sessionToken: sessionToken,
        lastLoginTime: new Date().toISOString(),
        accounts: getAccounts(),
        transactions: getTransactions(),
        currentView: 'dashboard',
        selectedAccount: getAccounts()[0],
        currentBalance: getAccounts()[0].balance
      }));
      toast.success('Successfully logged in to banking system');
    }
  };

  const handleLogout = () => {
    setBankingState(prev => ({
      ...prev,
      accounts: [],
      transactions: [],
      currentBalance: 0,
      selectedAccount: null,
      isLoggedIn: false,
      currentUser: '',
      sessionToken: '',
      lastLoginTime: '',
      currentView: 'login',
      loginUsername: '',
      loginPassword: '',
      transferAmount: '',
      transferRecipient: 'Ahamed Mansoor',
      transferNote: ''
    }));
    toast.success('Successfully logged out');
  };

  const navigateToView = (view: BankingState['currentView']) => {
    setBankingState(prev => ({ ...prev, currentView: view }));
  };

  const handleTransfer = () => {
    const amount = parseFloat(bankingState.transferAmount);
    if (amount && amount > 0) {
      const newTransaction: Transaction = {
        id: 'txn' + Math.random().toString(36).substr(2, 9),
        accountId: bankingState.selectedAccount?.id || 'acc1',
        type: 'transfer',
        amount,
        description: `Transfer to ${bankingState.transferRecipient}`,
        date: new Date().toISOString().split('T')[0],
        status: 'completed',
        fromAccount: bankingState.selectedAccount?.id || 'acc1',
        toAccount: 'recipient'
      };

      setBankingState(prev => ({
        ...prev,
        transactions: [newTransaction, ...prev.transactions],
        currentBalance: prev.currentBalance - amount,
        selectedAccount: prev.selectedAccount ? {
          ...prev.selectedAccount,
          balance: prev.selectedAccount.balance - amount
        } : null,
        currentView: 'transfer-confirm'
      }));
      toast.success(`Transfer of $${amount.toFixed(2)} to ${bankingState.transferRecipient} completed`);
    }
  };

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.5;
      default: return 1;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Code copied to clipboard!');
  };

  const simulateBankingTest = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    
    // Clear banking state and ensure accounts are visible
    setBankingState({ 
      accounts: [], 
      transactions: [],
      currentBalance: 0,
      selectedAccount: null,
      isLoggedIn: false,
      currentUser: '',
      sessionToken: '',
      lastLoginTime: '',
      currentView: 'login',
      loginUsername: '',
      loginPassword: '',
      transferAmount: '',
      transferRecipient: 'Ahamed Mansoor',
      transferNote: ''
    });
    setShowAccounts(true);

    const multiplier = getSpeedMultiplier();
    const checkingAccount = getAccounts()[0]; // Chase checking account
    const savingsAccount = getAccounts()[1]; // Chase savings account
    
    const steps = [
      { step: 0, log: '🚀 Starting Banking Application Test...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🏦 Banking Dashboard loaded - showing available accounts', delay: 800 * multiplier, codeLine: 0 },
      { step: 2, log: '🔐 Entering username: john.doe@example.com', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setBankingState(prev => ({ ...prev, loginUsername: 'john.doe@example.com' }));
          setLiveVariables({ username: 'john.doe@example.com', step: 'entering_credentials' });
        }
      },
      { step: 3, log: '🔑 Entering password: ••••••••', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setBankingState(prev => ({ ...prev, loginPassword: 'SecurePassword123' }));
          setLiveVariables({ password: 'entered', step: 'credentials_ready' });
        }
      },
      { step: 4, log: '🔐 Logging in with user credentials...', delay: 800 * multiplier, codeLine: 0, 
        action: () => {
          login('john.doe@example.com', 'SecurePassword123');
          setLiveVariables({ user: 'john.doe@example.com', status: 'authenticated' });
        }
      },
      { step: 5, log: '✅ Successfully logged into banking system!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setBankingState(prev => ({ ...prev, currentView: 'dashboard' }));
          setLiveVariables({ user: 'john.doe@example.com', status: 'authenticated', session: 'active' });
        }
      },
      { step: 6, log: '📊 Account Dashboard showing (4 accounts)', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ user: 'john.doe@example.com', accounts: '4', totalBalance: '$25,431.75' });
        }
      },
      { step: 7, log: '🖱️ Selecting Chase Checking Account...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          selectAccount(checkingAccount);
          setLiveVariables({ account: 'Chase Checking', balance: '$5,432.50', accountNumber: '****4582' });
        }
      },
      { step: 8, log: '📱 Navigated to Account Details', delay: 1000 * multiplier, codeLine: 0 },
      { step: 9, log: '💰 Depositing $1,000 into checking account...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          performTransaction('deposit', 1000, 'Test Deposit');
          setLiveVariables({ account: 'Chase Checking', balance: '$6,432.50', transaction: 'deposit', amount: '$1,000.00' });
        }
      },
      { step: 10, log: '✅ Deposit completed successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 11, log: '💸 Transferring $500 to savings account...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          performTransaction('transfer', 500, 'Transfer to Savings');
          setLiveVariables({ account: 'Chase Checking', balance: '$5,932.50', transaction: 'transfer', amount: '$500.00' });
        }
      },
      { step: 12, log: '✅ Transfer completed successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 13, log: '💸 Initiating transfer to Ahamed Mansoor...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setBankingState(prev => ({ 
            ...prev, 
            currentView: 'transfer',
            transferAmount: '50000',
            transferRecipient: 'Ahamed Mansoor',
            transferNote: 'Business Investment'
          }));
          setLiveVariables({ transfer: 'initiated', recipient: 'Ahamed Mansoor', amount: '$50,000' });
        }
      },
      { step: 14, log: '✅ Transfer of $50,000 to Ahamed Mansoor completed!', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setBankingState(prev => ({ ...prev, currentView: 'transfer-confirm' }));
          setLiveVariables({ transfer: 'completed', recipient: 'Ahamed Mansoor', amount: '$50,000', status: 'success' });
        }
      },
      { step: 15, log: '🔍 Viewing transaction history...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setBankingState(prev => ({ ...prev, currentView: 'transactions' }));
          setLiveVariables({ account: 'Chase Checking', balance: '$5,932.50', transactions: '6', lastTransaction: '2024-01-15' });
        }
      },
      { step: 16, log: '📋 Transaction history loaded with recent activities', delay: 1000 * multiplier, codeLine: 0 },
      { step: 17, log: '🏦 Selecting Chase Credit Card...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          selectAccount(getAccounts()[2]);
          setLiveVariables({ account: 'Chase Credit Card', balance: '-$1,250.75', accountNumber: '****2345' });
        }
      },
      { step: 18, log: '💳 Making credit card payment of $200...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          performTransaction('payment', 200, 'Credit Card Payment');
          setLiveVariables({ account: 'Chase Credit Card', balance: '-$1,050.75', transaction: 'payment', amount: '$200.00' });
        }
      },
      { step: 19, log: '✅ Credit card payment processed!', delay: 600 * multiplier, codeLine: 0 },
      { step: 20, log: '🏠 Returning to main dashboard...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setBankingState(prev => ({ ...prev, currentView: 'dashboard' }));
          setLiveVariables({ status: 'returned_to_dashboard', accounts_tested: '4', transactions_processed: '3' });
        }
      },
      { step: 21, log: '🎉 Banking test completed successfully - Dashboard active!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ status: 'test_completed', accounts_tested: '4', transactions_processed: '3', final_view: 'dashboard' });
        }
      }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      setCurrentStep(i);
      setExecutionLogs(prev => [...prev, step.log]);
      
      if (step.action) {
        step.action();
      }
      
      if (step.codeLine !== undefined) {
        setCurrentCodeLine(step.codeLine);
      }
      
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    setIsRunning(false);
    setCurrentCodeLine(-1);
  };

  const getBankingCode = (language: 'python' | 'java' | 'javascript' | 'playwright' = selectedLanguage) => {
    if (selectedBank === 'chase') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Chase Bank Testing", () => {',
          '  test("Chase end-to-end banking flow", async ({ page }) => {',
          '    // Navigate to Chase online banking',
          '    await page.goto("https://www.chase.com");',
          '    ',
          '    // Click on Sign In',
          '    await page.click("[data-testid=\'signin\']");',
          '    await page.waitForSelector("#username-input");',
          '',
          '    // Enter credentials',
          '    await page.fill("#username-input", "testuser@example.com");',
          '    await page.fill("#password-input", "SecurePassword123");',
          '    await page.click("#signin-button");',
          '',
          '    // Wait for dashboard to load',
          '    await page.waitForSelector(".account-summary");',
          '',
          '    // Select checking account',
          '    await page.click("[data-account-id=\'checking\']");',
          '    await page.waitForSelector(".account-details");',
          '',
          '    // Perform deposit',
          '    await page.click("[data-action=\'deposit\']");',
          '    await page.fill("#amount-input", "1000");',
          '    await page.fill("#description-input", "Test Deposit");',
          '    await page.click("#submit-transaction");',
          '',
          '    // Verify deposit success',
          '    await expect(page.locator(".success-message")).toBeVisible();',
          '',
          '    // Perform transfer',
          '    await page.click("[data-action=\'transfer\']");',
          '    await page.selectOption("#to-account", "savings");',
          '    await page.fill("#transfer-amount", "500");',
          '    await page.click("#submit-transfer");',
          '',
          '    // Verify transfer success',
          '    await expect(page.locator(".transfer-confirmation")).toBeVisible();',
          '',
          '    // Logout',
          '    await page.click("[data-testid=\'logout\']");',
          '    ',
          '    console.log("Chase banking test completed successfully!");',
          '  });',
          '});'
        ];
      } else if (language === 'python') {
        return [
          'from selenium import webdriver',
          'from selenium.webdriver.common.by import By',
          'from selenium.webdriver.support.ui import WebDriverWait',
          'from selenium.webdriver.support import expected_conditions as EC',
          '',
          '# Chase Bank Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to Chase online banking',
          'driver.get("https://www.chase.com")',
          '',
          '# Click on Sign In',
          'signin_button = driver.find_element(By.CSS_SELECTOR, "[data-testid=\'signin\']")',
          'signin_button.click()',
          '',
          '# Wait for login form',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.ID, "username-input"))',
          ')',
          '',
          '# Enter credentials',
          'username_field = driver.find_element(By.ID, "username-input")',
          'password_field = driver.find_element(By.ID, "password-input")',
          'username_field.send_keys("testuser@example.com")',
          'password_field.send_keys("SecurePassword123")',
          '',
          '# Submit login',
          'login_button = driver.find_element(By.ID, "signin-button")',
          'login_button.click()',
          '',
          '# Wait for dashboard',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.CLASS_NAME, "account-summary"))',
          ')',
          '',
          '# Select checking account',
          'checking_account = driver.find_element(By.CSS_SELECTOR, "[data-account-id=\'checking\']")',
          'checking_account.click()',
          '',
          '# Perform deposit',
          'deposit_button = driver.find_element(By.CSS_SELECTOR, "[data-action=\'deposit\']")',
          'deposit_button.click()',
          'amount_input = driver.find_element(By.ID, "amount-input")',
          'amount_input.send_keys("1000")',
          'description_input = driver.find_element(By.ID, "description-input")',
          'description_input.send_keys("Test Deposit")',
          'submit_button = driver.find_element(By.ID, "submit-transaction")',
          'submit_button.click()',
          '',
          'print("Chase banking test completed successfully!")',
          'driver.quit()'
        ];
      } else if (language === 'java') {
        return [
          'import org.openqa.selenium.By;',
          'import org.openqa.selenium.WebDriver;',
          'import org.openqa.selenium.WebElement;',
          'import org.openqa.selenium.chrome.ChromeDriver;',
          'import org.openqa.selenium.support.ui.WebDriverWait;',
          'import org.openqa.selenium.support.ui.ExpectedConditions;',
          'import java.time.Duration;',
          '',
          'public class ChaseBankTest {',
          '    public static void main(String[] args) {',
          '        WebDriver driver = new ChromeDriver();',
          '        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
          '        ',
          '        try {',
          '            // Navigate to Chase online banking',
          '            driver.get("https://www.chase.com");',
          '            ',
          '            // Click on Sign In',
          '            WebElement signinButton = driver.findElement(By.cssSelector("[data-testid=\'signin\']"));',
          '            signinButton.click();',
          '            ',
          '            // Wait for login form',
          '            wait.until(ExpectedConditions.presenceOfElementLocated(By.id("username-input")));',
          '            ',
          '            // Enter credentials',
          '            WebElement usernameField = driver.findElement(By.id("username-input"));',
          '            WebElement passwordField = driver.findElement(By.id("password-input"));',
          '            usernameField.sendKeys("testuser@example.com");',
          '            passwordField.sendKeys("SecurePassword123");',
          '            ',
          '            // Submit login',
          '            WebElement loginButton = driver.findElement(By.id("signin-button"));',
          '            loginButton.click();',
          '            ',
          '            System.out.println("Chase banking test completed successfully!");',
          '        } finally {',
          '            driver.quit();',
          '        }',
          '    }',
          '}'
        ];
      } else if (language === 'javascript') {
        return [
          'const { Builder, By, Key, until } = require("selenium-webdriver");',
          '',
          'async function chaseBankTest() {',
          '  let driver = await new Builder().forBrowser("chrome").build();',
          '  ',
          '  try {',
          '    // Navigate to Chase online banking',
          '    await driver.get("https://www.chase.com");',
          '    ',
          '    // Click on Sign In',
          '    await driver.findElement(By.cssSelector("[data-testid=\'signin\']")).click();',
          '    ',
          '    // Wait for login form',
          '    await driver.wait(until.elementLocated(By.id("username-input")), 10000);',
          '    ',
          '    // Enter credentials',
          '    await driver.findElement(By.id("username-input")).sendKeys("testuser@example.com");',
          '    await driver.findElement(By.id("password-input")).sendKeys("SecurePassword123");',
          '    ',
          '    // Submit login',
          '    await driver.findElement(By.id("signin-button")).click();',
          '    ',
          '    console.log("Chase banking test completed successfully!");',
          '  } finally {',
          '    await driver.quit();',
          '  }',
          '}',
          '',
          'chaseBankTest();'
        ];
      }
    } else {
      // General banking testing
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("General Banking Application Testing", () => {',
          '  test("Complete banking workflow", async ({ page }) => {',
          '    // Navigate to banking application',
          '    await page.goto("https://bank.example.com");',
          '    ',
          '    // Login process',
          '    await page.fill("#username", "testuser@example.com");',
          '    await page.fill("#password", "SecurePassword123");',
          '    await page.click("#login-button");',
          '    ',
          '    // Wait for dashboard',
          '    await page.waitForSelector(".dashboard");',
          '    ',
          '    // Account management',
          '    await page.click(".account-item:first-child");',
          '    await page.waitForSelector(".account-details");',
          '    ',
          '    // Transaction operations',
          '    await page.click("#deposit-button");',
          '    await page.fill("#amount", "1000");',
          '    await page.click("#submit-deposit");',
          '    ',
          '    console.log("General banking test completed!");',
          '  });',
          '});'
        ];
      }
    }
    return ['// Select a bank and language to see code examples'];
  };

  const bankingExample = {
    title: `${selectedBank.charAt(0).toUpperCase() + selectedBank.slice(1)} Banking Test`,
    description: `Complete automation testing for ${selectedBank} online banking platform`,
    code: Array.isArray(getBankingCode()) ? getBankingCode().join('\n') : String(getBankingCode())
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Banking Application Testing"
        description="Master automated testing for financial applications with realistic banking workflows, security validation, and transaction testing across multiple banking platforms."
        icon={Shield}
      />

      {/* Banking Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Banking Testing Features
          </CardTitle>
          <CardDescription>
            Core capabilities for automated banking application testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-blue-100 dark:bg-blue-900">
                <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Secure Authentication</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Login/logout testing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-green-100 dark:bg-green-900">
                <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Transaction Testing</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Deposits, transfers, payments</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-purple-100 dark:bg-purple-900">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Account Management</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Balance and history</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-orange-100 dark:bg-orange-900">
                <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Multi-Bank Support</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Chase</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-red-100 dark:bg-red-900">
                <Activity className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Real-time Monitoring</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Transaction tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-cyan-100 dark:bg-cyan-900">
                <Monitor className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Cross-Browser Testing</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Chrome, Firefox, Safari</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Multi-language implementations of banking testing workflows. 
            <span className="text-green-600 dark:text-green-400 font-medium"> Practice on real banking websites like Chase to master these skills!</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Bank Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Banking Platform:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['chase'] as const).map((bank) => (
                  <button
                    key={bank}
                    onClick={() => setSelectedBank(bank)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedBank === bank
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    Chase
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Programming Language:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['playwright', 'python', 'java', 'javascript'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedLanguage === lang
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {lang === 'playwright' ? 'Playwright' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {bankingExample.title}
                </h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(bankingExample.code)}
                >
                  Copy Code
                </Button>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{bankingExample.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Banking Demo */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Interactive Banking Demo
              </CardTitle>
              {/* Speed Control */}
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-slate-500" />
                <div className="flex gap-1">
                  {(['slow', 'medium', 'fast'] as const).map((speedOption) => (
                    <button
                      key={speedOption}
                      onClick={() => setSpeed(speedOption)}
                      disabled={isRunning}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                        speed === speedOption
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      {speedOption.charAt(0).toUpperCase() + speedOption.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button
              onClick={simulateBankingTest}
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Demo
                </>
              )}
            </Button>
          </div>
          <CardDescription>
            Experience a complete banking workflow simulation with secure login, account management, and transactions. 
            <span className="text-amber-600 dark:text-amber-400 font-medium"> (This is a dummy banking environment for educational purposes only)</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress Bar */}
            {isRunning && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">
                    Step {currentStep + 1} of 22
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 22) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dummy Banking Application UI */}
            {isRunning && (
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Dummy Banking Application</h4>
                  <Badge variant="outline" className="text-xs">Simulation</Badge>
                </div>

              {/* Login Screen */}
              {bankingState.currentView === 'login' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">SecureBank Login</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Enter your credentials to access your account</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={bankingState.loginUsername}
                          onChange={(e) => setBankingState(prev => ({ ...prev, loginUsername: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter username"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="password"
                          value={bankingState.loginPassword}
                          onChange={(e) => setBankingState(prev => ({ ...prev, loginPassword: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleLogin}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!bankingState.loginUsername || !bankingState.loginPassword}
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center">
                    Demo credentials: any username/password combination
                  </div>
                </div>
              )}

              {/* Dashboard */}
              {bankingState.currentView === 'dashboard' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Welcome, {bankingState.currentUser}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Account Overview</p>
                    </div>
                    <Button variant="outline" onClick={handleLogout} size="sm">
                      <LogOut className="w-4 h-4 mr-1" />
                      Logout
                    </Button>
                  </div>

                  {/* Account Balance Card */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm">Total Balance</p>
                        <p className="text-3xl font-bold">${bankingState.currentBalance.toLocaleString()}</p>
                        <p className="text-blue-100 text-xs mt-1">{bankingState.selectedAccount?.accountType} Account</p>
                      </div>
                      <Wallet className="w-12 h-12 text-blue-200" />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <Button 
                      variant="outline" 
                      onClick={() => navigateToView('transactions')}
                      className="flex flex-col items-center gap-2 h-auto py-3"
                    >
                      <History className="w-5 h-5" />
                      <span className="text-xs">Transactions</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => navigateToView('transfer')}
                      className="flex flex-col items-center gap-2 h-auto py-3"
                    >
                      <Send className="w-5 h-5" />
                      <span className="text-xs">Transfer</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center gap-2 h-auto py-3"
                    >
                      <Home className="w-5 h-5" />
                      <span className="text-xs">Home</span>
                    </Button>
                  </div>

                  {/* Recent Transactions Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Recent Activity</h4>
                    <div className="space-y-2">
                      {bankingState.transactions.slice(0, 3).map((txn) => (
                        <div key={txn.id} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              txn.type === 'deposit' ? 'bg-green-500' : 
                              txn.type === 'withdrawal' ? 'bg-red-500' : 
                              'bg-blue-500'
                            }`} />
                            <span className="text-sm text-slate-600 dark:text-slate-400">{txn.description}</span>
                          </div>
                          <span className={`text-sm font-medium ${
                            txn.type === 'deposit' ? 'text-green-600' : 'text-slate-900 dark:text-slate-100'
                          }`}>
                            {txn.type === 'deposit' ? '+' : '-'}${txn.amount.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Transactions View */}
              {bankingState.currentView === 'transactions' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Transaction History</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">All your recent transactions</p>
                    </div>
                    <Button variant="outline" onClick={() => navigateToView('dashboard')} size="sm">
                      <Home className="w-4 h-4 mr-1" />
                      Back to Dashboard
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {bankingState.transactions.map((txn) => (
                      <div key={txn.id} className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-600 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            txn.type === 'deposit' ? 'bg-green-100 dark:bg-green-900' : 
                            txn.type === 'withdrawal' ? 'bg-red-100 dark:bg-red-900' : 
                            'bg-blue-100 dark:bg-blue-900'
                          }`}>
                            {txn.type === 'deposit' ? <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" /> :
                             txn.type === 'withdrawal' ? <TrendingUp className="w-5 h-5 text-red-600 dark:text-red-400 rotate-180" /> :
                             <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{txn.description}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{txn.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            txn.type === 'deposit' ? 'text-green-600' : 'text-slate-900 dark:text-slate-100'
                          }`}>
                            {txn.type === 'deposit' ? '+' : '-'}${txn.amount.toFixed(2)}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{txn.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transfer View */}
              {bankingState.currentView === 'transfer' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Transfer Money</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Send money to anyone</p>
                    </div>
                    <Button variant="outline" onClick={() => navigateToView('dashboard')} size="sm">
                      <Home className="w-4 h-4 mr-1" />
                      Back to Dashboard
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Recipient</label>
                      <input
                        type="text"
                        value={bankingState.transferRecipient}
                        onChange={(e) => setBankingState(prev => ({ ...prev, transferRecipient: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                        placeholder="Enter recipient name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Amount ($)</label>
                      <input
                        type="number"
                        value={bankingState.transferAmount}
                        onChange={(e) => setBankingState(prev => ({ ...prev, transferAmount: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Note (Optional)</label>
                      <textarea
                        value={bankingState.transferNote}
                        onChange={(e) => setBankingState(prev => ({ ...prev, transferNote: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                        rows={3}
                        placeholder="Add a note..."
                      />
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Available Balance:</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">${bankingState.currentBalance.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Transfer Amount:</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">${bankingState.transferAmount || '0.00'}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handleTransfer}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!bankingState.transferAmount || parseFloat(bankingState.transferAmount) <= 0}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Transfer
                    </Button>
                  </div>
                </div>
              )}

              {/* Transfer Confirmation */}
              {bankingState.currentView === 'transfer-confirm' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Transfer Completed!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      <span className="font-semibold">${bankingState.transferAmount}</span> has been successfully transferred to{' '}
                      <span className="font-semibold">{bankingState.transferRecipient}</span>
                    </p>
                    <div className="space-y-2">
                      <Button onClick={() => navigateToView('dashboard')} className="w-full">
                        <Home className="w-4 h-4 mr-2" />
                        Back to Dashboard
                      </Button>
                      <Button variant="outline" onClick={() => navigateToView('transactions')} className="w-full">
                        <History className="w-4 h-4 mr-2" />
                        View Transaction History
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            )}

            {/* Execution Logs */}
            {executionLogs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Execution Logs</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg text-sm font-mono max-h-48 overflow-y-auto">
                  {executionLogs.map((log, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-500">[{String(index + 1).padStart(2, '0')}]</span>
                      <span className={index === executionLogs.length - 1 ? 'text-green-400' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      </div>
  );
};

export default BankingTesting;
