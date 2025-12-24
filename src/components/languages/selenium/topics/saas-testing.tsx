'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RefreshCw, Code, Users, DollarSign, BarChart3, Settings, Building, CreditCard, TrendingUp, Activity, Lock, CheckCircle, Star, Zap, Globe, Shield, Database, Cloud, Cpu, HardDrive, Wifi, Mail, Phone, Calendar, Download, Upload, Eye, EyeOff, ChevronRight, Menu, X, Plus, Minus, Edit, Trash2, Search, Filter, Bell, LogOut, User as UserIcon, Package, Target, Award, PieChart, LineChart, BarChart } from 'lucide-react';
import { toast } from 'sonner';

interface Tenant {
  id: string;
  name: string;
  domain: string;
  plan: 'starter' | 'professional' | 'enterprise';
  users: number;
  storage: number;
  apiCalls: number;
  status: 'active' | 'trial' | 'expired';
  billingCycle: 'monthly' | 'yearly';
  nextBilling: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  status: 'active' | 'inactive';
  lastLogin: string;
  tenantId: string;
}

interface Analytics {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  monthlyRevenue: number;
  apiCalls: number;
  storageUsed: number;
  conversionRate: number;
  churnRate: number;
  satisfaction: number;
}

interface SaaSState {
  currentView: 'login' | 'tenant-selection' | 'dashboard' | 'users' | 'billing' | 'analytics' | 'settings';
  selectedTenant: Tenant | null;
  tenants: Tenant[];
  users: User[];
  analytics: Analytics;
  loginEmail: string;
  loginPassword: string;
  isLoggedIn: boolean;
  currentUser: User | null;
  subscriptionPlan: string;
  billingCycle: 'monthly' | 'yearly';
  searchQuery: string;
  selectedUser: User | null;
}

export default function SaaSTesting() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [liveVariables, setLiveVariables] = useState<Record<string, any>>({});
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [selectedPlatform, setSelectedPlatform] = useState<'salesforce'>('salesforce');
  const [selectedLanguage, setSelectedLanguage] = useState<'playwright' | 'python' | 'java' | 'javascript'>('playwright');

  const [saasState, setSaaSState] = useState<SaaSState>({
    currentView: 'login',
    selectedTenant: null,
    tenants: [],
    users: [],
    analytics: {
      totalUsers: 0,
      activeUsers: 0,
      totalRevenue: 0,
      monthlyRevenue: 0,
      apiCalls: 0,
      storageUsed: 0,
      conversionRate: 0,
      churnRate: 0,
      satisfaction: 0
    },
    loginEmail: '',
    loginPassword: '',
    isLoggedIn: false,
    currentUser: null,
    subscriptionPlan: 'professional',
    billingCycle: 'monthly',
    searchQuery: '',
    selectedUser: null
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.5;
      default: return 1;
    }
  };

  const getTenants = (): Tenant[] => [
    {
      id: 'tenant1',
      name: 'TechCorp Solutions',
      domain: 'techcorp.saas.com',
      plan: 'enterprise',
      users: 250,
      storage: 500,
      apiCalls: 1000000,
      status: 'active',
      billingCycle: 'yearly',
      nextBilling: '2024-12-31'
    },
    {
      id: 'tenant2',
      name: 'Digital Marketing Pro',
      domain: 'digitalpro.saas.com',
      plan: 'professional',
      users: 50,
      storage: 100,
      apiCalls: 250000,
      status: 'active',
      billingCycle: 'monthly',
      nextBilling: '2024-02-01'
    },
    {
      id: 'tenant3',
      name: 'StartupHub',
      domain: 'startuphub.saas.com',
      plan: 'starter',
      users: 10,
      storage: 25,
      apiCalls: 50000,
      status: 'trial',
      billingCycle: 'monthly',
      nextBilling: '2024-02-15'
    },
    {
      id: 'tenant4',
      name: 'Global Enterprises',
      domain: 'global.saas.com',
      plan: 'enterprise',
      users: 1000,
      storage: 2000,
      apiCalls: 5000000,
      status: 'active',
      billingCycle: 'yearly',
      nextBilling: '2024-06-30'
    }
  ];

  const getUsers = (): User[] => [
    {
      id: 'user1',
      name: 'John Anderson',
      email: 'john.anderson@techcorp.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-20 09:30 AM',
      tenantId: 'tenant1'
    },
    {
      id: 'user2',
      name: 'Sarah Mitchell',
      email: 'sarah.m@techcorp.com',
      role: 'user',
      status: 'active',
      lastLogin: '2024-01-20 11:15 AM',
      tenantId: 'tenant1'
    },
    {
      id: 'user3',
      name: 'Mike Johnson',
      email: 'mike.j@digitalpro.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-19 02:45 PM',
      tenantId: 'tenant2'
    },
    {
      id: 'user4',
      name: 'Emily Chen',
      email: 'emily.c@startuphub.com',
      role: 'user',
      status: 'inactive',
      lastLogin: '2024-01-15 10:20 AM',
      tenantId: 'tenant3'
    },
    {
      id: 'user5',
      name: 'David Wilson',
      email: 'david.w@global.com',
      role: 'viewer',
      status: 'active',
      lastLogin: '2024-01-20 08:00 AM',
      tenantId: 'tenant4'
    }
  ];

  const getAnalytics = (): Analytics => ({
    totalUsers: 1310,
    activeUsers: 987,
    totalRevenue: 485000,
    monthlyRevenue: 42000,
    apiCalls: 6300000,
    storageUsed: 2625,
    conversionRate: 23.5,
    churnRate: 2.1,
    satisfaction: 4.7
  });

  const login = (email: string, password: string) => {
    const sessionToken = 'SAAS_TOKEN_' + Math.random().toString(36).substr(2, 9);
    const user = getUsers()[0]; // John Anderson
    
    setSaaSState(prev => ({
      ...prev,
      isLoggedIn: true,
      currentUser: user,
      tenants: getTenants(),
      users: getUsers(),
      analytics: getAnalytics(),
      currentView: 'tenant-selection'
    }));
    toast.success('Successfully logged into SaaS platform');
  };

  const selectTenant = (tenant: Tenant) => {
    setSaaSState(prev => ({
      ...prev,
      selectedTenant: tenant,
      currentView: 'dashboard'
    }));
    toast.success(`Switched to ${tenant.name}`);
  };

  const logout = () => {
    setSaaSState(prev => ({
      ...prev,
      isLoggedIn: false,
      currentUser: null,
      selectedTenant: null,
      tenants: [],
      users: [],
      currentView: 'login',
      loginEmail: '',
      loginPassword: ''
    }));
    toast.success('Successfully logged out');
  };

  const upgradePlan = (plan: string) => {
    setSaaSState(prev => ({
      ...prev,
      subscriptionPlan: plan
    }));
    toast.success(`Upgraded to ${plan} plan`);
  };

  const addNewUser = () => {
    const newUser: User = {
      id: 'user_new_' + Date.now(),
      name: 'New User',
      email: 'newuser@example.com',
      role: 'user',
      status: 'active',
      lastLogin: 'Never',
      tenantId: saasState.selectedTenant?.id || 'tenant1'
    };

    setSaaSState(prev => ({
      ...prev,
      users: [...prev.users, newUser]
    }));
    toast.success('New user added successfully');
  };

  const getSaaSCode = (language: 'python' | 'java' | 'javascript' | 'playwright' = selectedLanguage) => {
    if (selectedPlatform === 'salesforce') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Salesforce SaaS Testing", () => {',
          '  test("Complete Salesforce workflow", async ({ page }) => {',
          '    // Navigate to Salesforce',
          '    await page.goto("https://login.salesforce.com");',
          '',
          '    // Enter credentials',
          '    await page.fill("#username", "admin@example.com");',
          '    await page.fill("#password", "SecurePassword123");',
          '    await page.click("#Login");',
          '',
          '    // Wait for dashboard to load',
          '    await page.waitForSelector(".slds-app-launcher");',
          '',
          '    // Navigate to Accounts',
          '    await page.click("[data-label=\'Accounts\']");',
          '    await page.waitForSelector(".forceListViewManagerContainer");',
          '',
          '    // Create new account',
          '    await page.click(".slds-button:has-text(\'New\')");',
          '    await page.fill("#AccountName", "Test Account");',
          '    await page.fill("#Phone", "555-0123");',
          '    await page.click(".slds-button:has-text(\'Save\')");',
          '',
          '    // Verify account creation',
          '    await expect(page.locator(".toastMessage")).toContainText("Account created");',
          '',
          '    console.log("Salesforce test completed successfully!");',
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
          '# Salesforce SaaS Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to Salesforce',
          'driver.get("https://login.salesforce.com")',
          '',
          '# Enter credentials',
          'username_field = driver.find_element(By.ID, "username")',
          'password_field = driver.find_element(By.ID, "password")',
          'username_field.send_keys("admin@example.com")',
          'password_field.send_keys("SecurePassword123")',
          'login_button = driver.find_element(By.ID, "Login")',
          'login_button.click()',
          '',
          '# Wait for dashboard',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.CLASS_NAME, "slds-app-launcher"))',
          ')',
          '',
          '# Navigate to Accounts',
          'accounts_link = driver.find_element(By.XPATH, "//a[contains(text(),\'Accounts\')]")',
      'accounts_link.click()',
      '',
      'print("Salesforce test completed successfully!")',
      'driver.quit()'
    ];
  }
  }
  return ['// Select a platform and language to see code examples'];
};

  const saasExample = {
    title: `${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} SaaS Test`,
    description: `Complete automation testing for ${selectedPlatform} SaaS platform`,
    code: Array.isArray(getSaaSCode()) ? getSaaSCode().join('\n') : String(getSaaSCode())
  };

  const simulateSaaSTest = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setLiveVariables({});
    
    // Clear SaaS state
    setSaaSState({ 
      currentView: 'login',
      selectedTenant: null,
      tenants: [],
      users: [],
      analytics: {
        totalUsers: 0,
        activeUsers: 0,
        totalRevenue: 0,
        monthlyRevenue: 0,
        apiCalls: 0,
        storageUsed: 0,
        conversionRate: 0,
        churnRate: 0,
        satisfaction: 0
      },
      loginEmail: '',
      loginPassword: '',
      isLoggedIn: false,
      currentUser: null,
      subscriptionPlan: 'professional',
      billingCycle: 'monthly',
      searchQuery: '',
      selectedUser: null
    });

    const multiplier = getSpeedMultiplier();
    const firstTenant = getTenants()[0]; // TechCorp Solutions
    
    const steps = [
      { step: 0, log: '🚀 Starting SaaS Application Test...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '☁️ SaaS Platform loaded - showing multi-tenant login', delay: 800 * multiplier, codeLine: 0 },
      { step: 2, log: '🔐 Entering email: john.anderson@techcorp.com', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setSaaSState(prev => ({ ...prev, loginEmail: 'john.anderson@techcorp.com' }));
          setLiveVariables({ email: 'john.anderson@techcorp.com', step: 'entering_credentials' });
        }
      },
      { step: 3, log: '🔑 Entering password: ••••••••', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setSaaSState(prev => ({ ...prev, loginPassword: 'SecurePassword123' }));
          setLiveVariables({ password: 'entered', step: 'credentials_ready' });
        }
      },
      { step: 4, log: '🔐 Logging into SaaS platform...', delay: 800 * multiplier, codeLine: 0, 
        action: () => {
          login('john.anderson@techcorp.com', 'SecurePassword123');
          setLiveVariables({ user: 'john.anderson@techcorp.com', status: 'authenticated' });
        }
      },
      { step: 5, log: '✅ Successfully logged into SaaS system!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ user: 'john.anderson@techcorp.com', status: 'authenticated', session: 'active' });
        }
      },
      { step: 6, log: '🏢 Tenant Selection - 4 organizations available', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ tenants: '4', organizations: 'TechCorp, DigitalPro, StartupHub, Global' });
        }
      },
      { step: 7, log: '🏢 Selecting TechCorp Solutions tenant...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          selectTenant(firstTenant);
          setLiveVariables({ tenant: 'TechCorp Solutions', plan: 'Enterprise', users: '250' });
        }
      },
      { step: 8, log: '✅ Tenant switched successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 9, log: '📊 Loading SaaS Dashboard with analytics...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSaaSState(prev => ({ ...prev, currentView: 'dashboard' }));
          setLiveVariables({ dashboard: 'loaded', metrics: 'real-time' });
        }
      },
      { step: 10, log: '📈 Analytics Overview: 1,310 total users, $485K revenue', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ totalUsers: '1,310', revenue: '$485,000', activeUsers: '987' });
        }
      },
      { step: 11, log: '👥 Navigating to User Management...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSaaSState(prev => ({ ...prev, currentView: 'users' }));
          setLiveVariables({ action: 'navigating', section: 'user_management' });
        }
      },
      { step: 12, log: '👤 Managing 5 users across tenants', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ users_managed: '5', roles: 'admin, user, viewer' });
        }
      },
      { step: 13, log: '➕ Adding new user to organization...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          addNewUser();
          setLiveVariables({ action: 'adding_user', new_user: 'newuser@example.com' });
        }
      },
      { step: 14, log: '✅ New user added successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 15, log: '💳 Navigating to Billing & Subscription...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSaaSState(prev => ({ ...prev, currentView: 'billing' }));
          setLiveVariables({ action: 'navigating', section: 'billing' });
        }
      },
      { step: 16, log: '💰 Current Plan: Enterprise - Yearly billing', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ plan: 'Enterprise', billing: 'yearly', cost: '$48,000/year' });
        }
      },
      { step: 17, log: '📊 Viewing detailed analytics dashboard...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSaaSState(prev => ({ ...prev, currentView: 'analytics' }));
          setLiveVariables({ action: 'viewing_analytics', metrics: 'comprehensive' });
        }
      },
      { step: 18, log: '📈 Performance Metrics: 23.5% conversion, 4.7/5 satisfaction', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ conversion: '23.5%', satisfaction: '4.7/5', churn: '2.1%' });
        }
      },
      { step: 19, log: '⚙️ Accessing system settings...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSaaSState(prev => ({ ...prev, currentView: 'settings' }));
          setLiveVariables({ action: 'accessing_settings', configuration: 'system' });
        }
      },
      { step: 20, log: '🔧 Configuring SaaS platform settings...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ settings: 'configured', security: 'enabled', integrations: 'active' });
        }
      },
      { step: 21, log: '🏠 Returning to main dashboard...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSaaSState(prev => ({ ...prev, currentView: 'dashboard' }));
          setLiveVariables({ status: 'returned_to_dashboard', tenants_tested: '4', features_tested: '6' });
        }
      },
      { step: 22, log: '🎉 SaaS test completed successfully - Multi-tenant platform active!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ status: 'test_completed', tenants_tested: '4', features_tested: '6', final_view: 'dashboard' });
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
        // setCurrentCodeLine(step.codeLine);
      }
      
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    setIsRunning(false);
    // setCurrentCodeLine(-1);
  };

  const copyToClipboard = (text: string, description: string = 'Code') => {
    navigator.clipboard.writeText(text);
    toast.success(`${description} copied to clipboard`);
  };

  return (
    <div className="space-y-6">
      {/* SaaS Testing Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="w-5 h-5" />
            SaaS Application Testing Features
          </CardTitle>
          <CardDescription>
            Core capabilities for automated multi-tenant SaaS application testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-blue-100 dark:bg-blue-900">
                <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Multi-Tenant Architecture</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Tenant isolation & switching</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-green-100 dark:bg-green-900">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">User Management</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Role-based access control</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-purple-100 dark:bg-purple-900">
                <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Subscription Billing</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Plan management & payments</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-orange-100 dark:bg-orange-900">
                <BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Analytics Dashboard</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Real-time metrics & insights</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-cyan-100 dark:bg-cyan-900">
                <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Security & Compliance</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Data protection & audit</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-pink-100 dark:bg-pink-900">
                <Zap className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">API Integration</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">RESTful API testing</p>
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
            Multi-language implementations of SaaS application testing workflows. 
            <span className="text-green-600 dark:text-green-400 font-medium"> Practice on real SaaS platforms like Salesforce to master these skills!</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Platform Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select SaaS Platform:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['salesforce'] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedPlatform === platform
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    Salesforce
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
                  {saasExample.title}
                </h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(saasExample.code)}
                >
                  Copy Code
                </Button>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{saasExample.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive SaaS Demo */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Interactive SaaS Demo
              </CardTitle>
              {/* Speed Control */}
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-500" />
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
              onClick={simulateSaaSTest}
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
            Experience a complete multi-tenant SaaS workflow simulation with tenant switching, user management, billing, and analytics. 
            <span className="text-amber-600 dark:text-amber-400 font-medium"> (This is a dummy SaaS environment for educational purposes only)</span>
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
                    Step {currentStep + 1} of 23
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 23) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dummy SaaS Application UI */}
            {isRunning && (
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">CloudFlow SaaS Platform</h4>
                  <Badge variant="outline" className="text-xs">Multi-Tenant</Badge>
                </div>

              {/* Login Screen */}
              {saasState.currentView === 'login' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">CloudFlow</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Enterprise SaaS Platform</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          value={saasState.loginEmail}
                          onChange={(e) => setSaaSState(prev => ({ ...prev, loginEmail: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="password"
                          value={saasState.loginPassword}
                          onChange={(e) => setSaaSState(prev => ({ ...prev, loginPassword: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      Sign In
                    </Button>
                  </div>
                </div>
              )}

              {/* Tenant Selection */}
              {saasState.currentView === 'tenant-selection' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Select Your Organization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {saasState.tenants.map((tenant) => (
                      <div key={tenant.id} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100">{tenant.name}</h4>
                            <p className="text-sm text-slate-500">{tenant.domain}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant={tenant.plan === 'enterprise' ? 'default' : tenant.plan === 'professional' ? 'secondary' : 'outline'}>
                                {tenant.plan.charAt(0).toUpperCase() + tenant.plan.slice(1)}
                              </Badge>
                              <Badge variant={tenant.status === 'active' ? 'default' : 'outline'}>
                                {tenant.status}
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                              <div>{tenant.users} users • {tenant.storage}GB storage</div>
                              <div>{tenant.apiCalls.toLocaleString()} API calls/month</div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dashboard */}
              {saasState.currentView === 'dashboard' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-4">
                      <Cloud className="w-8 h-8 text-blue-500" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">CloudFlow Dashboard</h3>
                        <p className="text-sm text-slate-500">{saasState.selectedTenant?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm">
                        <Bell className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <LogOut className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Analytics Cards */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-blue-600 dark:text-blue-400">+12%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{saasState.analytics.totalUsers.toLocaleString()}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Total Users</p>
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400" />
                          <span className="text-sm text-green-600 dark:text-green-400">+8%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">${saasState.analytics.totalRevenue.toLocaleString()}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Total Revenue</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <Activity className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                          <span className="text-sm text-purple-600 dark:text-purple-400">+15%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{saasState.analytics.activeUsers.toLocaleString()}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Active Users</p>
                        </div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <BarChart3 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                          <span className="text-sm text-orange-600 dark:text-orange-400">+23%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{saasState.analytics.conversionRate}%</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">User Management</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <CreditCard className="w-5 h-5" />
                        <span className="text-sm">Billing</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <BarChart3 className="w-5 h-5" />
                        <span className="text-sm">Analytics</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <Settings className="w-5 h-5" />
                        <span className="text-sm">Settings</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* User Management */}
              {saasState.currentView === 'users' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">User Management</h3>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add User
                      </Button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">User</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Role</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Status</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Last Login</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {saasState.users.map((user) => (
                          <tr key={user.id} className="border-t border-slate-200 dark:border-slate-600">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
                                  <UserIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                                </div>
                                <div>
                                  <p className="font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                                  <p className="text-sm text-slate-500">{user.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge variant={user.role === 'admin' ? 'default' : user.role === 'user' ? 'secondary' : 'outline'}>
                                {user.role}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <Badge variant={user.status === 'active' ? 'default' : 'outline'}>
                                {user.status}
                              </Badge>
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{user.lastLogin}</td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Billing */}
              {saasState.currentView === 'billing' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Billing & Subscription</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Current Plan */}
                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Current Plan</h4>
                          <Badge variant="default">Enterprise</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Price</p>
                            <p className="font-semibold">$48,000/year</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Users</p>
                            <p className="font-semibold">250 included</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Storage</p>
                            <p className="font-semibold">500 GB</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">API Calls</p>
                            <p className="font-semibold">1M/month</p>
                          </div>
                        </div>
                      </div>

                      {/* Usage Stats */}
                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Usage Statistics</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Users Used</span>
                              <span>250/250</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Storage Used</span>
                              <span>262.5/500 GB</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{ width: '52.5%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>API Calls</span>
                              <span>6.3M/1M</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics */}
              {saasState.currentView === 'analytics' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Analytics Dashboard</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Key Metrics */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Key Performance Indicators</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Monthly Revenue</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">$42,000</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Customer Satisfaction</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">4.7/5.0</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Churn Rate</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">2.1%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">23.5%</span>
                          </div>
                        </div>
                      </div>

                      {/* Growth Chart */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Growth Overview</h4>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Jan</span>
                              <span>$35,000</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Feb</span>
                              <span>$38,000</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Mar</span>
                              <span>$42,000</span>
                            </div>
                            <div className="flex justify-between text-sm font-semibold">
                              <span>Current</span>
                              <span>$42,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings */}
              {saasState.currentView === 'settings' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">System Settings</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Security Settings</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Two-Factor Authentication</span>
                            <Badge variant="default">Enabled</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">SSO Integration</span>
                            <Badge variant="default">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">API Rate Limiting</span>
                            <Badge variant="default">Configured</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Integration Settings</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Email Provider</span>
                            <Badge variant="default">SendGrid</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Payment Gateway</span>
                            <Badge variant="default">Stripe</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Analytics Platform</span>
                            <Badge variant="default">Google Analytics</Badge>
                          </div>
                        </div>
                      </div>
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
}
