'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Hash,
  FileText,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  User,
  Mail,
  Lock,
  Calendar,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function IdNameLocators() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    birthdate: '',
    gender: '',
    newsletter: false,
    submitted: false
  });
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateIdLocator = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFormData({
      username: '',
      email: '',
      password: '',
      birthdate: '',
      gender: '',
      newsletter: false,
      submitted: false
    });

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findEmail: 10, typeEmail: 11, findPass: 14, typePass: 15, findDate: 18, typeDate: 19, findBtn: 22, clickBtn: 23, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { nav: 6, findEmail: 9, typeEmail: 10, findPass: 13, typePass: 14, findDate: 17, typeDate: 18, findBtn: 21, clickBtn: 22, quit: 24 };
      } else {
        return { nav: 3, findEmail: 6, typeEmail: 7, findPass: 10, typePass: 11, findDate: 14, typeDate: 15, findBtn: 18, clickBtn: 19, quit: 21 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      email: selectedLanguage === 'python' ? 'email_field' : 'emailField',
      password: selectedLanguage === 'python' ? 'password_field' : 'passwordField',
      birthdate: selectedLanguage === 'python' ? 'birthdate' : 'birthdate',
      register: selectedLanguage === 'python' ? 'register_btn' : 'registerBtn'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting ID locator demo on registration form...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading registration page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Using By.ID to find: id="user-email"...', delay: 800 * multiplier, element: null, codeLine: lines.findEmail },
      { step: 3, log: '✅ Found element: <input id="user-email" type="email" />', delay: 700 * multiplier, element: 'user-email', codeLine: lines.findEmail, variable: { name: varNames.email, value: '<WebElement: input#user-email>' } },
      { step: 4, log: '⌨️  Typing "john.doe@example.com"...', delay: 1000 * multiplier, element: 'user-email', action: 'email', codeLine: lines.typeEmail, variable: { name: varNames.email, value: 'john.doe@example.com' } },
      { step: 5, log: '🔍 Locating: id="user-password"...', delay: 700 * multiplier, element: 'user-email', codeLine: lines.findPass, variable: { name: varNames.email, value: 'john.doe@example.com' } },
      { step: 6, log: '✅ Found element: <input id="user-password" type="password" />', delay: 700 * multiplier, element: 'user-password', codeLine: lines.findPass, variable: { name: varNames.password, value: '<WebElement: input#user-password>' } },
      { step: 7, log: '⌨️  Entering secure password...', delay: 1000 * multiplier, element: 'user-password', action: 'password', codeLine: lines.typePass, variable: { name: varNames.password, value: 'SecurePass123' } },
      { step: 8, log: '🔍 Finding: id="birthdate-picker"...', delay: 700 * multiplier, element: 'user-password', codeLine: lines.findDate, variable: { name: varNames.password, value: 'SecurePass123' } },
      { step: 9, log: '✅ Found element: <input id="birthdate-picker" type="date" />', delay: 700 * multiplier, element: 'birthdate-picker', codeLine: lines.findDate, variable: { name: varNames.birthdate, value: '<WebElement: input#birthdate-picker>' } },
      { step: 10, log: '📅 Selecting date: 1990-05-15...', delay: 1000 * multiplier, element: 'birthdate-picker', action: 'birthdate', codeLine: lines.typeDate, variable: { name: varNames.birthdate, value: '1990-05-15' } },
      { step: 11, log: '🔍 Locating submit button: id="register-btn"...', delay: 700 * multiplier, element: 'birthdate-picker', codeLine: lines.findBtn, variable: { name: varNames.birthdate, value: '1990-05-15' } },
      { step: 12, log: '✅ Found element: <button id="register-btn" />', delay: 700 * multiplier, element: 'register-btn', codeLine: lines.findBtn, variable: { name: varNames.register, value: '<WebElement: button#register-btn>' } },
      { step: 13, log: '🖱️  Clicking register button...', delay: 1000 * multiplier, element: 'register-btn', action: 'submit', codeLine: lines.clickBtn, variable: { name: varNames.register, value: '<WebElement: button#register-btn>' } },
      { step: 14, log: '🎉 ID locator demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
    ];

    for (const { step, log, delay, element, action, codeLine, variable } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'email') {
        setFormData(prev => ({ ...prev, email: 'john.doe@example.com' }));
      } else if (action === 'password') {
        setFormData(prev => ({ ...prev, password: '••••••••' }));
      } else if (action === 'birthdate') {
        setFormData(prev => ({ ...prev, birthdate: '1990-05-15' }));
      } else if (action === 'submit') {
        setFormData(prev => ({ ...prev, submitted: true }));
      }
    }

    setIsRunning(false);
  };

  const simulateNameLocator = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFormData({
      username: '',
      email: '',
      password: '',
      birthdate: '',
      gender: '',
      newsletter: false,
      submitted: false
    });

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findUser: 9, typeUser: 10, findGender: 13, loopGender: 16, clickGender: 18, findNews: 22, clickNews: 23, quit: 26 };
      } else if (selectedLanguage === 'java') {
        return { nav: 7, findUser: 9, typeUser: 10, findGender: 13, loopGender: 16, clickGender: 18, findNews: 24, clickNews: 25, quit: 27 };
      } else {
        return { nav: 3, findUser: 6, typeUser: 7, findGender: 10, loopGender: 13, clickGender: 15, findNews: 22, clickNews: 23, quit: 25 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      username: selectedLanguage === 'python' ? 'username_field' : 'usernameField',
      gender: selectedLanguage === 'python' ? 'gender_options' : 'genderOptions',
      newsletter: selectedLanguage === 'python' ? 'newsletter_checkbox' : 'newsletterCheckbox'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting name locator demo on registration form...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading form with name attributes...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Using By.NAME to find: name="username"...', delay: 800 * multiplier, element: null, codeLine: lines.findUser },
      { step: 3, log: '✅ Found element: <input name="username" />', delay: 700 * multiplier, element: 'username', codeLine: lines.findUser, variable: { name: varNames.username, value: '<WebElement: input[name="username"]>' } },
      { step: 4, log: '⌨️  Typing "johndoe123"...', delay: 1000 * multiplier, element: 'username', action: 'username', codeLine: lines.typeUser, variable: { name: varNames.username, value: 'johndoe123' } },
      { step: 5, log: '🔍 Finding elements with name="gender"...', delay: 700 * multiplier, element: 'username', codeLine: lines.findGender, variable: { name: varNames.username, value: 'johndoe123' } },
      { step: 6, log: '✅ Found 3 radio button elements', delay: 700 * multiplier, element: 'gender', codeLine: lines.findGender, variable: { name: varNames.gender, value: '[3 elements]' } },
      { step: 7, log: '🔄 Iterating through gender options...', delay: 800 * multiplier, element: 'gender', codeLine: lines.loopGender, variable: { name: varNames.gender, value: '[3 elements]' } },
      { step: 8, log: '🖱️  Selecting "male" radio button...', delay: 1000 * multiplier, element: 'gender', action: 'gender', codeLine: lines.clickGender, variable: { name: 'option.value', value: 'male' } },
      { step: 9, log: '🔍 Locating: name="newsletter"...', delay: 700 * multiplier, element: 'gender', codeLine: lines.findNews, variable: { name: 'option.value', value: 'male' } },
      { step: 10, log: '✅ Found element: <input name="newsletter" type="checkbox" />', delay: 700 * multiplier, element: 'newsletter', codeLine: lines.findNews, variable: { name: varNames.newsletter, value: '<WebElement: input[name="newsletter"]>' } },
      { step: 11, log: '☑️  Checking newsletter subscription...', delay: 1000 * multiplier, element: 'newsletter', action: 'newsletter', codeLine: lines.clickNews, variable: { name: varNames.newsletter, value: '<WebElement: input[name="newsletter"]>' } },
      { step: 12, log: '🎉 Name locator demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
    ];

    for (const { step, log, delay, element, action, codeLine, variable } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'username') {
        setFormData(prev => ({ ...prev, username: 'johndoe123' }));
      } else if (action === 'gender') {
        setFormData(prev => ({ ...prev, gender: 'male' }));
      } else if (action === 'newsletter') {
        setFormData(prev => ({ ...prev, newsletter: true }));
      }
    }

    setIsRunning(false);
  };

  const getIdLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver  # Import WebDriver',
        'from selenium.webdriver.common.by import By  # Import By class for locators',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to the target website',
        'driver.get("https://www.example.com")',
        '',
        '# 🔍 Find email input by ID="user-email"',
        'email_field = driver.find_element(By.ID, "user-email")',
        'email_field.send_keys("john.doe@example.com")  # ⌨️ Type email address',
        '',
        '# 🔍 Find password input by ID="user-password"',
        'password_field = driver.find_element(By.ID, "user-password")',
        'password_field.send_keys("SecurePass123")  # ⌨️ Enter password',
        '',
        '# 🔍 Find date picker by ID="birthdate-picker"',
        'birthdate = driver.find_element(By.ID, "birthdate-picker")',
        'birthdate.send_keys("1990-05-15")  # 📅 Select birthdate',
        '',
        '# 🔍 Find register button by ID="register-btn"',
        'register_btn = driver.find_element(By.ID, "register-btn")',
        'register_btn.click()  # 🖱️ Click to submit registration',
        '',
        '# Close the browser and end session',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com");',
        '',
        '// 🔍 Find email input by ID="user-email"',
        'WebElement emailField = driver.findElement(By.id("user-email"));',
        'emailField.sendKeys("john.doe@example.com");',
        '',
        '// 🔍 Find password input by ID="user-password"',
        'WebElement passwordField = driver.findElement(By.id("user-password"));',
        'passwordField.sendKeys("SecurePass123");',
        '',
        '// 🔍 Find date picker by ID="birthdate-picker"',
        'WebElement birthdate = driver.findElement(By.id("birthdate-picker"));',
        'birthdate.sendKeys("1990-05-15");',
        '',
        '// 🔍 Find register button by ID="register-btn"',
        'WebElement registerBtn = driver.findElement(By.id("register-btn"));',
        'registerBtn.click();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com\');',
        '',
        '// 🔍 Find email input by ID="user-email"',
        'let emailField = await driver.findElement(By.id(\'user-email\'));',
        'await emailField.sendKeys(\'john.doe@example.com\');',
        '',
        '// 🔍 Find password input by ID="user-password"',
        'let passwordField = await driver.findElement(By.id(\'user-password\'));',
        'await passwordField.sendKeys(\'SecurePass123\');',
        '',
        '// 🔍 Find date picker by ID="birthdate-picker"',
        'let birthdate = await driver.findElement(By.id(\'birthdate-picker\'));',
        'await birthdate.sendKeys(\'1990-05-15\');',
        '',
        '// 🔍 Find register button by ID="register-btn"',
        'let registerBtn = await driver.findElement(By.id(\'register-btn\'));',
        'await registerBtn.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const idLocatorExample = {
    python: getIdLocatorCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;  // Import WebDriver interface
import org.openqa.selenium.chrome.ChromeDriver;  // Import Chrome driver
import org.openqa.selenium.By;  // Import By class for locators
import org.openqa.selenium.WebElement;  // Import WebElement interface

// Initialize Chrome browser instance
WebDriver driver = new ChromeDriver();

// Navigate to the target website
driver.get("https://www.example.com");

// 🔍 Find email input by ID="user-email"
WebElement emailField = driver.findElement(By.id("user-email"));
emailField.sendKeys("john.doe@example.com");  // ⌨️ Type email address

// 🔍 Find password input by ID="user-password"
WebElement passwordField = driver.findElement(By.id("user-password"));
passwordField.sendKeys("SecurePass123");  // ⌨️ Enter password

// 🔍 Find date picker by ID="birthdate-picker"
WebElement birthdate = driver.findElement(By.id("birthdate-picker"));
birthdate.sendKeys("1990-05-15");  // 📅 Select birthdate

// 🔍 Find register button by ID="register-btn"
WebElement registerBtn = driver.findElement(By.id("register-btn"));
registerBtn.click();  // 🖱️ Click to submit registration

// Close the browser and end session
driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');  // Import Selenium modules

// Initialize Chrome browser instance
let driver = await new Builder().forBrowser('chrome').build();

// Navigate to the target website
await driver.get('https://www.example.com');

// 🔍 Find email input by ID="user-email"
let emailField = await driver.findElement(By.id('user-email'));
await emailField.sendKeys('john.doe@example.com');  // ⌨️ Type email address

// 🔍 Find password input by ID="user-password"
let passwordField = await driver.findElement(By.id('user-password'));
await passwordField.sendKeys('SecurePass123');  // ⌨️ Enter password

// 🔍 Find date picker by ID="birthdate-picker"
let birthdate = await driver.findElement(By.id('birthdate-picker'));
await birthdate.sendKeys('1990-05-15');  // 📅 Select birthdate

// 🔍 Find register button by ID="register-btn"
let registerBtn = await driver.findElement(By.id('register-btn'));
await registerBtn.click();  // 🖱️ Click to submit registration

// Close the browser and end session
await driver.quit();`,
  };

  const getNameLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver  # Import WebDriver',
        'from selenium.webdriver.common.by import By  # Import By class for locators',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to the profile form page',
        'driver.get("https://www.example.com/profile")',
        '',
        '# 🔍 Find username input by name="username"',
        'username_field = driver.find_element(By.NAME, "username")',
        'username_field.send_keys("johndoe123")  # ⌨️ Type username',
        '',
        '# 🔍 Find ALL radio buttons with name="gender" (returns list)',
        'gender_options = driver.find_elements(By.NAME, "gender")',
        'print(f"Found {len(gender_options)} gender options")  # Output: Found 3 gender options',
        '',
        '# 🔄 Loop through radio buttons to find and select "male"',
        'for option in gender_options:',
        '    if option.get_attribute("value") == "male":',
        '        option.click()  # 🖱️ Click the male radio button',
        '        break  # Exit loop after selection',
        '',
        '# 🔍 Find newsletter checkbox by name="newsletter"',
        'newsletter_checkbox = driver.find_element(By.NAME, "newsletter")',
        'newsletter_checkbox.click()  # ☑️ Check the newsletter subscription',
        '',
        '# Close the browser and end session',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import java.util.List;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/profile");',
        '',
        '// 🔍 Find username input by name="username"',
        'WebElement usernameField = driver.findElement(By.name("username"));',
        'usernameField.sendKeys("johndoe123");',
        '',
        '// 🔍 Find ALL radio buttons with name="gender"',
        'List<WebElement> genderOptions = driver.findElements(By.name("gender"));',
        'System.out.println("Found " + genderOptions.size() + " gender options");',
        '',
        '// 🔄 Loop through radio buttons to find and select "male"',
        'for (WebElement option : genderOptions) {',
        '    if (option.getAttribute("value").equals("male")) {',
        '        option.click();',
        '        break;',
        '    }',
        '}',
        '',
        '// 🔍 Find newsletter checkbox by name="newsletter"',
        'WebElement newsletterCheckbox = driver.findElement(By.name("newsletter"));',
        'newsletterCheckbox.click();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/profile\');',
        '',
        '// 🔍 Find username input by name="username"',
        'let usernameField = await driver.findElement(By.name(\'username\'));',
        'await usernameField.sendKeys(\'johndoe123\');',
        '',
        '// 🔍 Find ALL radio buttons with name="gender"',
        'let genderOptions = await driver.findElements(By.name(\'gender\'));',
        'console.log(`Found ${genderOptions.length} gender options`);',
        '',
        '// 🔄 Loop through radio buttons to find and select "male"',
        'for (let option of genderOptions) {',
        '    let value = await option.getAttribute(\'value\');',
        '    if (value === \'male\') {',
        '        await option.click();',
        '        break;',
        '    }',
        '}',
        '',
        '// 🔍 Find newsletter checkbox by name="newsletter"',
        'let newsletterCheckbox = await driver.findElement(By.name(\'newsletter\'));',
        'await newsletterCheckbox.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const nameLocatorExample = {
    python: getNameLocatorCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;  // Import WebDriver interface
import org.openqa.selenium.chrome.ChromeDriver;  // Import Chrome driver
import org.openqa.selenium.By;  // Import By class for locators
import org.openqa.selenium.WebElement;  // Import WebElement interface
import java.util.List;  // Import List for multiple elements

// Initialize Chrome browser instance
WebDriver driver = new ChromeDriver();

// Navigate to the profile form page
driver.get("https://www.example.com/profile");

// 🔍 Find username input by name="username"
WebElement usernameField = driver.findElement(By.name("username"));
usernameField.sendKeys("johndoe123");  // ⌨️ Type username

// 🔍 Find ALL radio buttons with name="gender" (returns list)
List<WebElement> genderOptions = driver.findElements(By.name("gender"));
System.out.println("Found " + genderOptions.size() + " gender options");  // Output: Found 3 gender options

// 🔄 Loop through radio buttons to find and select "male"
for (WebElement option : genderOptions) {
    if (option.getAttribute("value").equals("male")) {
        option.click();  // 🖱️ Click the male radio button
        break;  // Exit loop after selection
    }
}

// 🔍 Find newsletter checkbox by name="newsletter"
WebElement newsletterCheckbox = driver.findElement(By.name("newsletter"));
newsletterCheckbox.click();  // ☑️ Check the newsletter subscription

// Close the browser and end session
driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');  // Import Selenium modules

// Initialize Chrome browser instance
let driver = await new Builder().forBrowser('chrome').build();

// Navigate to the profile form page
await driver.get('https://www.example.com/profile');

// 🔍 Find username input by name="username"
let usernameField = await driver.findElement(By.name('username'));
await usernameField.sendKeys('johndoe123');  // ⌨️ Type username

// 🔍 Find ALL radio buttons with name="gender" (returns array)
let genderOptions = await driver.findElements(By.name('gender'));
console.log(\`Found \${genderOptions.length} gender options\`);  // Output: Found 3 gender options

// 🔄 Loop through radio buttons to find and select "male"
for (let option of genderOptions) {
    let value = await option.getAttribute('value');
    if (value === 'male') {
        await option.click();  // 🖱️ Click the male radio button
        break;  // Exit loop after selection
    }
}

// 🔍 Find newsletter checkbox by name="newsletter"
let newsletterCheckbox = await driver.findElement(By.name('newsletter'));
await newsletterCheckbox.click();  // ☑️ Check the newsletter subscription

// Close the browser and end session
await driver.quit();`,
  };

  const bestPractices = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.example.com")

# 1. Use explicit waits for dynamic content
try:
    search_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "search"))
    )
    search_box.send_keys("Selenium")
except TimeoutException:
    print("Element not found within 10 seconds")

# 2. Check if element exists before interacting
elements = driver.find_elements(By.ID, "optional-element")
if elements:
    elements[0].click()
else:
    print("Optional element not present")

# 3. Prefer ID over name when both available
# ID is faster and more unique
login_button = driver.find_element(By.ID, "login-btn")  # Preferred
# login_button = driver.find_element(By.NAME, "login")  # Less preferred

# 4. Handle multiple elements with same name
checkboxes = driver.find_elements(By.NAME, "options")
# Select first checkbox
if checkboxes:
    checkboxes[0].click()

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.TimeoutException;
import java.time.Duration;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com");

// 1. Use explicit waits for dynamic content
try {
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement searchBox = wait.until(
        ExpectedConditions.presenceOfElementLocated(By.id("search"))
    );
    searchBox.sendKeys("Selenium");
} catch (TimeoutException e) {
    System.out.println("Element not found within 10 seconds");
}

// 2. Check if element exists before interacting
List<WebElement> elements = driver.findElements(By.id("optional-element"));
if (!elements.isEmpty()) {
    elements.get(0).click();
} else {
    System.out.println("Optional element not present");
}

// 3. Prefer ID over name when both available
// ID is faster and more unique
WebElement loginButton = driver.findElement(By.id("login-btn"));  // Preferred
// WebElement loginButton = driver.findElement(By.name("login"));  // Less preferred

// 4. Handle multiple elements with same name
List<WebElement> checkboxes = driver.findElements(By.name("options"));
// Select first checkbox
if (!checkboxes.isEmpty()) {
    checkboxes.get(0).click();
}

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com');

// 1. Use explicit waits for dynamic content
try {
    let searchBox = await driver.wait(
        until.elementLocated(By.id('search')),
        10000
    );
    await searchBox.sendKeys('Selenium');
} catch (error) {
    console.log('Element not found within 10 seconds');
}

// 2. Check if element exists before interacting
let elements = await driver.findElements(By.id('optional-element'));
if (elements.length > 0) {
    await elements[0].click();
} else {
    console.log('Optional element not present');
}

// 3. Prefer ID over name when both available
// ID is faster and more unique
let loginButton = await driver.findElement(By.id('login-btn'));  // Preferred
// let loginButton = await driver.findElement(By.name('login'));  // Less preferred

// 4. Handle multiple elements with same name
let checkboxes = await driver.findElements(By.name('options'));
// Select first checkbox
if (checkboxes.length > 0) {
    await checkboxes[0].click();
}

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Target}
        category="Selenium · Locator Strategies"
        title="ID & Name Locators"
        description="Master the fastest and most reliable element locators - ID and name attributes for efficient element identification"
        colorTheme="green"
        badges={[
          { label: 'Fastest', variant: 'success' },
          { label: 'Most Reliable', variant: 'info' },
          { label: 'Beginner Friendly', variant: 'secondary' },
        ]}
      />

      {/* Why ID & Name Locators */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why ID & Name Locators?
          </CardTitle>
          <CardDescription>The foundation of element location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Fastest Performance</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    ID locators are the fastest - browser can find elements instantly
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Most Reliable</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    IDs should be unique - less prone to breaking when page changes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hash className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Simple Syntax</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Easy to read and write - perfect for beginners
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Form Friendly</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Name attributes are standard for form elements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            ID and name locator syntax in Python, Java, and JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Language Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === lang
                    ? 'border-b-2 border-green-600 text-green-600 dark:text-green-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Find by ID (fastest and most reliable)
email_field = driver.find_element(By.ID, "user-email")
email_field.send_keys("john@example.com")

# Find by name attribute
username = driver.find_element(By.NAME, "username")
username.send_keys("johndoe")

# Multiple elements with same name
radio_buttons = driver.find_elements(By.NAME, "gender")
radio_buttons[0].click()  # Select first option`}
                {selectedLanguage === 'java' && `// Find by ID (fastest and most reliable)
WebElement emailField = driver.findElement(By.id("user-email"));
emailField.sendKeys("john@example.com");

// Find by name attribute
WebElement username = driver.findElement(By.name("username"));
username.sendKeys("johndoe");

// Multiple elements with same name
List<WebElement> radioButtons = driver.findElements(By.name("gender"));
radioButtons.get(0).click();  // Select first option`}
                {selectedLanguage === 'javascript' && `// Find by ID (fastest and most reliable)
let emailField = await driver.findElement(By.id('user-email'));
await emailField.sendKeys('john@example.com');

// Find by name attribute
let username = await driver.findElement(By.name('username'));
await username.sendKeys('johndoe');

// Multiple elements with same name
let radioButtons = await driver.findElements(By.name('gender'));
await radioButtons[0].click();  // Select first option`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* ID Locator */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Hash className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            ID Locator
          </CardTitle>
          <CardDescription>Find elements by their unique ID attribute</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Best Practice</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Always prefer ID locators when available. They're the fastest and most reliable way to find elements.
              IDs should be unique on a page according to HTML standards.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Registration Form Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch ID locators in action on a realistic registration form. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">Execution Speed:</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: 'slow', label: 'Slow', icon: '🐢' },
                  { value: 'medium', label: 'Medium', icon: '🚶' },
                  { value: 'fast', label: 'Fast', icon: '🚀' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
                      speed === option.value
                        ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-indigo-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed"
                      value={option.value}
                      checked={speed === option.value}
                      onChange={(e) => setSpeed(e.target.value as any)}
                      disabled={isRunning}
                      className="w-4 h-4"
                    />
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Side by Side: Code and Form */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example with Inline Explanations */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateIdLocator}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Run Demo
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(idLocatorExample[selectedLanguage], 'ID locator code')}
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getIdLocatorCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-emerald-200 dark:bg-emerald-900/50 border-l-4 border-emerald-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-emerald-900 dark:text-emerald-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              return codeLine.split('=')[0]?.trim();
                            } else if (selectedLanguage === 'java') {
                              const match = codeLine.match(/\b(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else {
                              const match = codeLine.match(/(?:let|const|var)\s+(\w+)\s*=/);
                              return match ? match[1] : null;
                            }
                          };
                          const varName = getVariableName(line);
                          return varName && liveVariables[varName] ? (
                            <span className="ml-2 px-2 py-0.5 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 rounded text-[10px] font-semibold">
                              = {liveVariables[varName]}
                            </span>
                          ) : null;
                        })()}
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-[10px] font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-blue-800 dark:text-blue-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-blue-600 dark:text-blue-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{idLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Registration Form Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Form Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
              <div className="max-w-md mx-auto bg-white dark:bg-slate-950 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Create Account</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Join us today!</p>
                </div>

                <div className="space-y-4">
                  {/* Email Input */}
                  <div className={`transition-all duration-300 ${selectedElement === 'user-email' ? 'ring-4 ring-emerald-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      id="user-email"
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      placeholder="Enter your email"
                      value={formData.email}
                      readOnly
                      className={`w-full px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedElement === 'user-email'
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                      }`}
                    />
                    {selectedElement === 'user-email' && (
                      <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Located by ID
                      </div>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className={`transition-all duration-300 ${selectedElement === 'user-password' ? 'ring-4 ring-emerald-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      id="user-password"
                    </label>
                    <input
                      type="password"
                      id="user-password"
                      placeholder="Create password"
                      value={formData.password}
                      readOnly
                      className={`w-full px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedElement === 'user-password'
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                      }`}
                    />
                    {selectedElement === 'user-password' && (
                      <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Located by ID
                      </div>
                    )}
                  </div>

                  {/* Birthdate Input */}
                  <div className={`transition-all duration-300 ${selectedElement === 'birthdate-picker' ? 'ring-4 ring-emerald-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      id="birthdate-picker"
                    </label>
                    <input
                      type="date"
                      id="birthdate-picker"
                      value={formData.birthdate}
                      readOnly
                      className={`w-full px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedElement === 'birthdate-picker'
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                      }`}
                    />
                    {selectedElement === 'birthdate-picker' && (
                      <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Located by ID
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className={`transition-all duration-300 ${selectedElement === 'register-btn' ? 'ring-4 ring-emerald-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                      id="register-btn"
                    </label>
                    <button
                      id="register-btn"
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        selectedElement === 'register-btn'
                          ? 'bg-emerald-500 text-white shadow-lg scale-105'
                          : formData.submitted
                          ? 'bg-green-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                      }`}
                    >
                      {formData.submitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Registered!
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                    {selectedElement === 'register-btn' && (
                      <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Button located by ID
                      </div>
                    )}
                  </div>
                </div>

                {formData.submitted && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 border-2 border-green-500 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Registration completed successfully!
                    </p>
                  </div>
                )}
              </div>
            </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Name Locator */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Name Locator
          </CardTitle>
          <CardDescription>Find elements by their name attribute</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Search className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Multiple Elements</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Unlike IDs, multiple elements can have the same name attribute (common for radio buttons and checkboxes).
              Use <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">find_elements</code> to get all matches.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Form Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch name locators handle multiple elements like radio buttons and checkboxes. Adjust speed and run!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">Execution Speed:</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: 'slow', label: 'Slow', icon: '🐢' },
                  { value: 'medium', label: 'Medium', icon: '🚶' },
                  { value: 'fast', label: 'Fast', icon: '🚀' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
                      speed === option.value
                        ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-name"
                      value={option.value}
                      checked={speed === option.value}
                      onChange={(e) => setSpeed(e.target.value as any)}
                      disabled={isRunning}
                      className="w-4 h-4"
                    />
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Side by Side: Code and Form */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example with Inline Explanations */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateNameLocator}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Run Demo
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(nameLocatorExample[selectedLanguage], 'Name locator code')}
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getNameLocatorCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-purple-200 dark:bg-purple-900/50 border-l-4 border-purple-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-purple-900 dark:text-purple-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              return codeLine.split('=')[0]?.trim();
                            } else if (selectedLanguage === 'java') {
                              const match = codeLine.match(/\b(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else {
                              const match = codeLine.match(/(?:let|const|var)\s+(\w+)\s*=/);
                              return match ? match[1] : null;
                            }
                          };
                          const varName = getVariableName(line);
                          return varName && liveVariables[varName] ? (
                            <span className="ml-2 px-2 py-0.5 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 rounded text-[10px] font-semibold">
                              = {liveVariables[varName]}
                            </span>
                          ) : null;
                        })()}
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-[10px] font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-blue-800 dark:text-blue-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-blue-600 dark:text-blue-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{nameLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Profile Form Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Form Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
              <div className="max-w-md mx-auto bg-white dark:bg-slate-950 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Complete Your Profile</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tell us about yourself</p>
                </div>

                <div className="space-y-4">
                  {/* Username Input */}
                  <div className={`transition-all duration-300 ${selectedElement === 'username' ? 'ring-4 ring-purple-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      name="username"
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Choose a username"
                      value={formData.username}
                      readOnly
                      className={`w-full px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedElement === 'username' 
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                      }`}
                    />
                    {selectedElement === 'username' && (
                      <div className="mt-1 text-xs text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Located by name
                      </div>
                    )}
                  </div>

                  {/* Gender Radio Buttons */}
                  <div className={`transition-all duration-300 ${selectedElement === 'gender' ? 'ring-4 ring-purple-500 ring-opacity-50 rounded-lg p-2' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                      name="gender" (3 elements found)
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'male', label: 'Male', icon: '👨' },
                        { value: 'female', label: 'Female', icon: '👩' },
                        { value: 'other', label: 'Other', icon: '🧑' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                            formData.gender === option.value
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30 shadow-sm'
                              : 'border-slate-300 dark:border-slate-600 hover:border-purple-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={option.value}
                            checked={formData.gender === option.value}
                            readOnly
                            className="w-4 h-4"
                          />
                          <span className="text-lg">{option.icon}</span>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {selectedElement === 'gender' && (
                      <div className="mt-2 text-xs text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        {formData.gender ? `Selected: ${formData.gender}` : 'Found 3 radio buttons'}
                      </div>
                    )}
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className={`transition-all duration-300 ${selectedElement === 'newsletter' ? 'ring-4 ring-purple-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                      name="newsletter"
                    </label>
                    <label className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.newsletter
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        readOnly
                        className="w-5 h-5 rounded"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Subscribe to newsletter</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Get weekly updates and tips</p>
                      </div>
                    </label>
                    {selectedElement === 'newsletter' && (
                      <div className="mt-1 text-xs text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Checkbox located by name
                      </div>
                    )}
                  </div>
                </div>

                {formData.username && formData.gender && (
                  <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-500 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm text-purple-700 dark:text-purple-300 font-medium text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Profile information captured!
                    </p>
                  </div>
                )}
              </div>
            </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* ID vs Name Comparison */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            ID vs Name: When to Use Each
          </CardTitle>
          <CardDescription>Choosing the right locator strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Use ID When:
              </h4>
              <div className="space-y-2">
                {[
                  'Element has a unique ID attribute',
                  'You need the fastest possible lookup',
                  'Element is dynamically generated with ID',
                  'Working with single, unique elements',
                  'ID is stable and won\'t change',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Use Name When:
              </h4>
              <div className="space-y-2">
                {[
                  'Working with form elements',
                  'Element doesn\'t have an ID',
                  'Need to find multiple related elements',
                  'Handling radio buttons or checkboxes',
                  'Name attribute is more semantic',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Best Practices & Tips
          </CardTitle>
          <CardDescription>Professional techniques for ID and name locators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{bestPractices[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(bestPractices[selectedLanguage], 'Best practices code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Common Issues & Solutions
          </CardTitle>
          <CardDescription>Troubleshooting ID and name locators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ NoSuchElementException</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Element not found or not loaded yet.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use explicit waits with <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">WebDriverWait</code> to wait for element presence.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Duplicate IDs on Page</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Multiple elements with same ID (invalid HTML but happens).
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Only first element is returned. Consider using CSS selectors or XPath for more specific targeting.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Dynamic IDs</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> IDs change on each page load (e.g., <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">user-12345</code>).
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use partial matching with CSS selectors <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">[id^='user-']</code> or XPath <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">contains(@id, 'user')</code>.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Wrong Element Returned</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Using <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">find_element</code> instead of <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">find_elements</code> for name.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">find_elements</code> (plural) to get all elements, then select the one you need.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <Search className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            Quick Reference
          </CardTitle>
          <CardDescription>Syntax cheat sheet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Single Element</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.find_element(By.ID, "id")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElement(By.id("id"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElement(By.id('id'))
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Multiple Elements</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.find_elements(By.NAME, "name")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElements(By.name("name"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElements(By.name('name'))
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
