'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Eye,
  MousePointer,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  Bug,
  Clock,
  XCircle,
  Triangle,
  Shield,
  Wifi,
  WifiOff,
  FileQuestion,
  Lock,
  Unlock,
  Timer,
  Ban,
  Save,
  Database,
  Link,
  Archive
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function StateElementReferenceComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [selectedState, setSelectedState] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const stateData = {
    python: [
      {
        name: 'Element Reference Storage',
        description: 'Store element references for later use',
        causes: ['Performance optimization', 'Multiple interactions', 'Element reuse', 'State preservation'],
        solutions: ['Store in variables', 'Use collections', 'Cache references', 'Manage lifecycle'],
        code: `from selenium import webdriver
from selenium.webdriver.common.by import By

# Store element reference
driver = webdriver.Chrome()
driver.get("https://example.com")

# Store element for later use
login_button = driver.find_element(By.ID, "login-btn")
username_field = driver.find_element(By.NAME, "username")
password_field = driver.find_element(By.NAME, "password")

# Reuse stored references
username_field.send_keys("user123")
password_field.send_keys("password123")
login_button.click()

# Store in collection
form_elements = {
    'username': username_field,
    'password': password_field,
    'login': login_button
}

# Access later
form_elements['username'].clear()
form_elements['username'].send_keys("newuser")`
      },
      {
        name: 'State Management',
        description: 'Manage element state across interactions',
        causes: ['Dynamic content', 'Page navigation', 'AJAX updates', 'Form validation'],
        solutions: ['Re-locate elements', 'Use stale element handling', 'Implement wait strategies', 'Cache management'],
        code: `from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class ElementStateManager:
    def __init__(self, driver):
        self.driver = driver
        self.elements = {}
    
    def store_element(self, name, locator):
        """Store element with automatic re-location"""
        try:
            element = self.driver.find_element(*locator)
            self.elements[name] = {
                'element': element,
                'locator': locator,
                'timestamp': time.time()
            }
            return element
        except Exception as e:
            print(f"Failed to store element {name}: {e}")
            return None
    
    def get_element(self, name):
        """Get element with automatic re-location if stale"""
        if name not in self.elements:
            return None
        
        try:
            # Try to use stored element
            return self.elements[name]['element']
        except StaleElementReferenceException:
            # Re-locate element
            locator = self.elements[name]['locator']
            element = self.driver.find_element(*locator)
            self.elements[name]['element'] = element
            return element

# Usage
state_manager = ElementStateManager(driver)
state_manager.store_element('submit', (By.ID, 'submit-btn'))
element = state_manager.get_element('submit')
element.click()`
      },
      {
        name: 'Reference Caching',
        description: 'Cache element references for performance',
        causes: ['Repeated access', 'Large DOM', 'Complex locators', 'Performance needs'],
        solutions: ['Implement cache TTL', 'Memory management', 'Cache invalidation', 'Selective caching'],
        code: `import time
from functools import lru_cache

class ElementCache:
    def __init__(self, driver, ttl=300):  # 5 minutes TTL
        self.driver = driver
        self.cache = {}
        self.ttl = ttl
    
    def get_element(self, locator, cache_key=None):
        """Get element with caching"""
        key = cache_key or str(locator)
        current_time = time.time()
        
        # Check cache
        if key in self.cache:
            cached_data = self.cache[key]
            if current_time - cached_data['timestamp'] < self.ttl:
                try:
                    # Verify element is still valid
                    cached_data['element'].is_displayed()
                    return cached_data['element']
                except:
                    # Element is stale, remove from cache
                    del self.cache[key]
        
        # Find and cache new element
        element = self.driver.find_element(*locator)
        self.cache[key] = {
            'element': element,
            'timestamp': current_time
        }
        return element
    
    def clear_cache(self):
        """Clear all cached elements"""
        self.cache.clear()

# Usage
cache = ElementCache(driver)
button = cache.get_element((By.ID, "submit-btn"), "submit_button")
button.click()`
      },
      {
        name: 'Cross-Page References',
        description: 'Handle element references across page navigation',
        causes: ['Page navigation', 'Tab switching', 'Window handling', 'SPA navigation'],
        solutions: ['Re-locate after navigation', 'Use window handles', 'Implement page load waits', 'State persistence'],
        code: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class CrossPageReferenceManager:
    def __init__(self, driver):
        self.driver = driver
        self.references = {}
    
    def store_reference(self, name, locator, page_url=None):
        """Store element reference with page context"""
        self.references[name] = {
            'locator': locator,
            'page_url': page_url or self.driver.current_url,
            'element': None
        }
    
    def get_reference(self, name):
        """Get element reference with automatic page navigation"""
        if name not in self.references:
            return None
        
        ref = self.references[name]
        
        # Navigate to page if needed
        if ref['page_url'] != self.driver.current_url:
            self.driver.get(ref['page_url'])
            WebDriverWait(self.driver, 10).until(
                lambda d: d.execute_script("return document.readyState") == "complete"
            )
        
        # Find element
        try:
            element = self.driver.find_element(*ref['locator'])
            ref['element'] = element
            return element
        except Exception as e:
            print(f"Failed to find element {name}: {e}")
            return None

# Usage
manager = CrossPageReferenceManager(driver)
manager.store_reference('home_button', (By.ID, 'home'), 'https://example.com')
manager.store_reference('profile_link', (By.LINK_TEXT, 'Profile'), 'https://example.com/profile')

# Navigate and get elements
home_btn = manager.get_reference('home_button')
profile_link = manager.get_reference('profile_link')`
      },
      {
        name: 'Memory Management',
        description: 'Manage memory usage for element references',
        causes: ['Large test suites', 'Long-running tests', 'Memory leaks', 'Resource constraints'],
        solutions: ['Clear unused references', 'Implement cleanup', 'Monitor memory usage', 'Use weak references'],
        code: `import gc
import weakref

class MemoryEfficientReferenceManager:
    def __init__(self, driver):
        self.driver = driver
        self.weak_references = {}
        self.locators = {}
    
    def store_element(self, name, locator):
        """Store element using weak reference"""
        try:
            element = self.driver.find_element(*locator)
            # Store weak reference to allow garbage collection
            self.weak_references[name] = weakref.ref(element)
            self.locators[name] = locator
            return element
        except Exception as e:
            print(f"Failed to store element {name}: {e}")
            return None
    
    def get_element(self, name):
        """Get element with automatic re-location if needed"""
        if name not in self.weak_references:
            return None
        
        # Try to get element from weak reference
        element = self.weak_references[name]()
        if element is not None:
            try:
                element.is_displayed()  # Verify element is still valid
                return element
            except:
                pass  # Element is stale, need to re-locate
        
        # Re-locate element
        try:
            locator = self.locators[name]
            element = self.driver.find_element(*locator)
            self.weak_references[name] = weakref.ref(element)
            return element
        except Exception as e:
            print(f"Failed to re-locate element {name}: {e}")
            return None
    
    def cleanup(self):
        """Clean up references and force garbage collection"""
        self.weak_references.clear()
        self.locators.clear()
        gc.collect()

# Usage
manager = MemoryEfficientReferenceManager(driver)
manager.store_element('submit', (By.ID, 'submit'))
element = manager.get_element('submit')
element.click()

# Cleanup when done
manager.cleanup()`
      }
    ],
    java: [
      {
        name: 'Element Reference Storage',
        description: 'Store element references for later use',
        causes: ['Performance optimization', 'Multiple interactions', 'Element reuse', 'State preservation'],
        solutions: ['Store in variables', 'Use collections', 'Cache references', 'Manage lifecycle'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.HashMap;
import java.util.Map;

public class ElementReferenceManager {
    private WebDriver driver;
    private Map<String, WebElement> elementCache;
    
    public ElementReferenceManager(WebDriver driver) {
        this.driver = driver;
        this.elementCache = new HashMap<>();
    }
    
    public void storeElement(String name, WebElement element) {
        elementCache.put(name, element);
    }
    
    public WebElement getElement(String name) {
        return elementCache.get(name);
    }
    
    public void storeElementByLocator(String name, By locator) {
        WebElement element = driver.findElement(locator);
        storeElement(name, element);
    }
}

// Usage
ElementReferenceManager manager = new ElementReferenceManager(driver);

// Store elements
manager.storeElementByLocator("username", By.id("username"));
manager.storeElementByLocator("password", By.id("password"));
manager.storeElementByLocator("login", By.id("login-btn"));

// Use stored elements
WebElement usernameField = manager.getElement("username");
WebElement passwordField = manager.getElement("password");
WebElement loginButton = manager.getElement("login");

usernameField.sendKeys("user123");
passwordField.sendKeys("password123");
loginButton.click();`
      },
      {
        name: 'State Management',
        description: 'Manage element state across interactions',
        causes: ['Dynamic content', 'Page navigation', 'AJAX updates', 'Form validation'],
        solutions: ['Re-locate elements', 'Use stale element handling', 'Implement wait strategies', 'Cache management'],
        code: `import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class StateElementManager {
    private WebDriver driver;
    private Map<String, ElementReference> references;
    
    public StateElementManager(WebDriver driver) {
        this.driver = driver;
        this.references = new HashMap<>();
    }
    
    private static class ElementReference {
        WebElement element;
        By locator;
        long timestamp;
        
        ElementReference(WebElement element, By locator) {
            this.element = element;
            this.locator = locator;
            this.timestamp = System.currentTimeMillis();
        }
    }
    
    public void storeElement(String name, By locator) {
        WebElement element = driver.findElement(locator);
        references.put(name, new ElementReference(element, locator));
    }
    
    public WebElement getElement(String name) {
        ElementReference ref = references.get(name);
        if (ref == null) return null;
        
        try {
            // Try to use stored element
            ref.element.isDisplayed();
            return ref.element;
        } catch (StaleElementReferenceException e) {
            // Re-locate element
            WebElement element = driver.findElement(ref.locator);
            ref.element = element;
            return element;
        }
    }
}

// Usage
StateElementManager manager = new StateElementManager(driver);
manager.storeElement("submit", By.id("submit-btn"));
WebElement element = manager.getElement("submit");
element.click();`
      },
      {
        name: 'Reference Caching',
        description: 'Cache element references for performance',
        causes: ['Repeated access', 'Large DOM', 'Complex locators', 'Performance needs'],
        solutions: ['Implement cache TTL', 'Memory management', 'Cache invalidation', 'Selective caching'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

public class ElementCache {
    private WebDriver driver;
    private ConcurrentHashMap<String, CachedElement> cache;
    private long ttlMillis;
    
    public ElementCache(WebDriver driver, long ttl, TimeUnit timeUnit) {
        this.driver = driver;
        this.cache = new ConcurrentHashMap<>();
        this.ttlMillis = timeUnit.toMillis(ttl);
    }
    
    private static class CachedElement {
        WebElement element;
        long timestamp;
        
        CachedElement(WebElement element) {
            this.element = element;
            this.timestamp = System.currentTimeMillis();
        }
        
        boolean isExpired(long ttlMillis) {
            return System.currentTimeMillis() - timestamp > ttlMillis;
        }
    }
    
    public WebElement getElement(By locator, String cacheKey) {
        CachedElement cached = cache.get(cacheKey);
        
        // Check cache
        if (cached != null && !cached.isExpired(ttlMillis)) {
            try {
                cached.element.isDisplayed(); // Verify element is still valid
                return cached.element;
            } catch (Exception e) {
                cache.remove(cacheKey); // Remove stale element
            }
        }
        
        // Find and cache new element
        WebElement element = driver.findElement(locator);
        cache.put(cacheKey, new CachedElement(element));
        return element;
    }
    
    public void clearCache() {
        cache.clear();
    }
}

// Usage
ElementCache cache = new ElementCache(driver, 5, TimeUnit.MINUTES);
WebElement button = cache.getElement(By.id("submit-btn"), "submit_button");
button.click();`
      },
      {
        name: 'Cross-Page References',
        description: 'Handle element references across page navigation',
        causes: ['Page navigation', 'Tab switching', 'Window handling', 'SPA navigation'],
        solutions: ['Re-locate after navigation', 'Use window handles', 'Implement page load waits', 'State persistence'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class CrossPageReferenceManager {
    private WebDriver driver;
    private Map<String, PageReference> references;
    
    public CrossPageReferenceManager(WebDriver driver) {
        this.driver = driver;
        this.references = new HashMap<>();
    }
    
    private static class PageReference {
        By locator;
        String pageUrl;
        
        PageReference(By locator, String pageUrl) {
            this.locator = locator;
            this.pageUrl = pageUrl;
        }
    }
    
    public void storeReference(String name, By locator, String pageUrl) {
        references.put(name, new PageReference(locator, pageUrl));
    }
    
    public WebElement getReference(String name) {
        PageReference ref = references.get(name);
        if (ref == null) return null;
        
        // Navigate to page if needed
        if (!ref.pageUrl.equals(driver.getCurrentUrl())) {
            driver.get(ref.pageUrl);
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(d -> ((JavascriptExecutor) d)
                    .executeScript("return document.readyState").equals("complete"));
        }
        
        // Find element
        try {
            return driver.findElement(ref.locator);
        } catch (Exception e) {
            System.out.println("Failed to find element " + name + ": " + e.getMessage());
            return null;
        }
    }
}

// Usage
CrossPageReferenceManager manager = new CrossPageReferenceManager(driver);
manager.storeReference("home", By.id("home"), "https://example.com");
manager.storeReference("profile", By.linkText("Profile"), "https://example.com/profile");

WebElement homeBtn = manager.getReference("home");
WebElement profileLink = manager.getReference("profile");`
      },
      {
        name: 'Memory Management',
        description: 'Manage memory usage for element references',
        causes: ['Large test suites', 'Long-running tests', 'Memory leaks', 'Resource constraints'],
        solutions: ['Clear unused references', 'Implement cleanup', 'Monitor memory usage', 'Use weak references'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

public class MemoryEfficientReferenceManager {
    private WebDriver driver;
    private Map<String, WeakReference<WebElement>> weakReferences;
    private Map<String, By> locators;
    
    public MemoryEfficientReferenceManager(WebDriver driver) {
        this.driver = driver;
        this.weakReferences = new HashMap<>();
        this.locators = new HashMap<>();
    }
    
    public WebElement storeElement(String name, By locator) {
        try {
            WebElement element = driver.findElement(locator);
            weakReferences.put(name, new WeakReference<>(element));
            locators.put(name, locator);
            return element;
        } catch (Exception e) {
            System.out.println("Failed to store element " + name + ": " + e.getMessage());
            return null;
        }
    }
    
    public WebElement getElement(String name) {
        if (!weakReferences.containsKey(name)) {
            return null;
        }
        
        // Try to get element from weak reference
        WebElement element = weakReferences.get(name).get();
        if (element != null) {
            try {
                element.isDisplayed(); // Verify element is still valid
                return element;
            } catch (Exception e) {
                // Element is stale, need to re-locate
            }
        }
        
        // Re-locate element
        try {
            By locator = locators.get(name);
            element = driver.findElement(locator);
            weakReferences.put(name, new WeakReference<>(element));
            return element;
        } catch (Exception e) {
            System.out.println("Failed to re-locate element " + name + ": " + e.getMessage());
            return null;
        }
    }
    
    public void cleanup() {
        weakReferences.clear();
        locators.clear();
        System.gc(); // Suggest garbage collection
    }
}

// Usage
MemoryEfficientReferenceManager manager = new MemoryEfficientReferenceManager(driver);
manager.storeElement("submit", By.id("submit"));
WebElement element = manager.getElement("submit");
element.click();

// Cleanup when done
manager.cleanup();`
      }
    ],
    javascript: [
      {
        name: 'Element Reference Storage',
        description: 'Store element references for later use',
        causes: ['Performance optimization', 'Multiple interactions', 'Element reuse', 'State preservation'],
        solutions: ['Store in variables', 'Use collections', 'Cache references', 'Manage lifecycle'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

class ElementReferenceManager {
  constructor(driver) {
    this.driver = driver;
    this.elements = new Map();
  }
  
  async storeElement(name, locator) {
    try {
      const element = await this.driver.findElement(locator);
      this.elements.set(name, element);
      return element;
    } catch (error) {
      console.log(\`Failed to store element \${name}: \${error}\`);
      return null;
    }
  }
  
  async getElement(name) {
    return this.elements.get(name);
  }
  
  async storeElementByLocator(name, locator) {
    const element = await this.driver.findElement(locator);
    await this.storeElement(name, element);
    return element;
  }
}

// Usage
const manager = new ElementReferenceManager(driver);

// Store elements
await manager.storeElementByLocator('username', By.id('username'));
await manager.storeElementByLocator('password', By.id('password'));
await manager.storeElementByLocator('login', By.id('login-btn'));

// Use stored elements
const usernameField = await manager.getElement('username');
const passwordField = await manager.getElement('password');
const loginButton = await manager.getElement('login');

await usernameField.sendKeys('user123');
await passwordField.sendKeys('password123');
await loginButton.click();`
      },
      {
        name: 'State Management',
        description: 'Manage element state across interactions',
        causes: ['Dynamic content', 'Page navigation', 'AJAX updates', 'Form validation'],
        solutions: ['Re-locate elements', 'Use stale element handling', 'Implement wait strategies', 'Cache management'],
        code: `const { StaleElementReferenceError } = require('selenium-webdriver');

class StateElementManager {
  constructor(driver) {
    this.driver = driver;
    this.references = new Map();
  }
  
  async storeElement(name, locator) {
    try {
      const element = await this.driver.findElement(locator);
      this.references.set(name, {
        element: element,
        locator: locator,
        timestamp: Date.now()
      });
      return element;
    } catch (error) {
      console.log(\`Failed to store element \${name}: \${error}\`);
      return null;
    }
  }
  
  async getElement(name) {
    const ref = this.references.get(name);
    if (!ref) return null;
    
    try {
      // Try to use stored element
      await ref.element.isDisplayed();
      return ref.element;
    } catch (error) {
      if (error instanceof StaleElementReferenceError) {
        // Re-locate element
        const element = await this.driver.findElement(ref.locator);
        ref.element = element;
        return element;
      }
      throw error;
    }
  }
}

// Usage
const manager = new StateElementManager(driver);
await manager.storeElement('submit', By.id('submit-btn'));
const element = await manager.getElement('submit');
await element.click();`
      },
      {
        name: 'Reference Caching',
        description: 'Cache element references for performance',
        causes: ['Repeated access', 'Large DOM', 'Complex locators', 'Performance needs'],
        solutions: ['Implement cache TTL', 'Memory management', 'Cache invalidation', 'Selective caching'],
        code: `class ElementCache {
  constructor(driver, ttl = 300000) { // 5 minutes TTL
    this.driver = driver;
    this.cache = new Map();
    this.ttl = ttl;
  }
  
  async getElement(locator, cacheKey) {
    const key = cacheKey || JSON.stringify(locator);
    const current_time = Date.now();
    
    // Check cache
    if (this.cache.has(key)) {
      const cached = this.cache.get(key);
      if (current_time - cached.timestamp < this.ttl) {
        try {
          // Verify element is still valid
          await cached.element.isDisplayed();
          return cached.element;
        } catch (error) {
          // Element is stale, remove from cache
          this.cache.delete(key);
        }
      }
    }
    
    // Find and cache new element
    const element = await this.driver.findElement(locator);
    this.cache.set(key, {
      element: element,
      timestamp: current_time
    });
    return element;
  }
  
  clearCache() {
    this.cache.clear();
  }
}

// Usage
const cache = new ElementCache(driver);
const button = await cache.getElement(By.id('submit-btn'), 'submit_button');
await button.click();`
      },
      {
        name: 'Cross-Page References',
        description: 'Handle element references across page navigation',
        causes: ['Page navigation', 'Tab switching', 'Window handling', 'SPA navigation'],
        solutions: ['Re-locate after navigation', 'Use window handles', 'Implement page load waits', 'State persistence'],
        code: `class CrossPageReferenceManager {
  constructor(driver) {
    this.driver = driver;
    this.references = new Map();
  }
  
  storeReference(name, locator, pageUrl) {
    this.references.set(name, {
      locator: locator,
      pageUrl: pageUrl || this.driver.getCurrentUrl()
    });
  }
  
  async getReference(name) {
    const ref = this.references.get(name);
    if (!ref) return null;
    
    // Navigate to page if needed
    if (ref.pageUrl !== await this.driver.getCurrentUrl()) {
      await this.driver.get(ref.pageUrl);
      await this.driver.wait(async function() {
        return await this.executeScript('return document.readyState') === 'complete';
      }, 10000);
    }
    
    // Find element
    try {
      const element = await this.driver.findElement(ref.locator);
      return element;
    } catch (error) {
      console.log(\`Failed to find element \${name}: \${error}\`);
      return null;
    }
  }
}

// Usage
const manager = new CrossPageReferenceManager(driver);
manager.storeReference('home', By.id('home'), 'https://example.com');
manager.storeReference('profile', By.linkText('Profile'), 'https://example.com/profile');

const homeBtn = await manager.getReference('home');
const profileLink = await manager.getReference('profile');`
      },
      {
        name: 'Memory Management',
        description: 'Manage memory usage for element references',
        causes: ['Large test suites', 'Long-running tests', 'Memory leaks', 'Resource constraints'],
        solutions: ['Clear unused references', 'Implement cleanup', 'Monitor memory usage', 'Use weak references'],
        code: `const { WeakRef } = require('weakref');

class MemoryEfficientReferenceManager {
  constructor(driver) {
    this.driver = driver;
    this.weakReferences = new Map();
    this.locators = new Map();
  }
  
  async storeElement(name, locator) {
    try {
      const element = await this.driver.findElement(locator);
      // Store weak reference to allow garbage collection
      this.weakReferences.set(name, new WeakRef(element));
      this.locators.set(name, locator);
      return element;
    } catch (error) {
      console.log(\`Failed to store element \${name}: \${error}\`);
      return null;
    }
  }
  
  async getElement(name) {
    if (!this.weakReferences.has(name)) {
      return null;
    }
    
    // Try to get element from weak reference
    const weakRef = this.weakReferences.get(name);
    const element = weakRef.deref();
    
    if (element) {
      try {
        await element.isDisplayed(); // Verify element is still valid
        return element;
      } catch (error) {
        // Element is stale, need to re-locate
      }
    }
    
    // Re-locate element
    try {
      const locator = this.locators.get(name);
      const newElement = await this.driver.findElement(locator);
      this.weakReferences.set(name, new WeakRef(newElement));
      return newElement;
    } catch (error) {
      console.log(\`Failed to re-locate element \${name}: \${error}\`);
      return null;
    }
  }
  
  cleanup() {
    this.weakReferences.clear();
    this.locators.clear();
    // Suggest garbage collection
    if (global.gc) {
      global.gc();
    }
  }
}

// Usage
const manager = new MemoryEfficientReferenceManager(driver);
await manager.storeElement('submit', By.id('submit'));
const element = await manager.getElement('submit');
await element.click();

// Cleanup when done
manager.cleanup();`
      }
    ]
  };

  const currentStates = stateData[selectedLanguage];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Database}
        category="Selenium · Element Management"
        title="State Element Reference"
        description="Master element reference management, caching, and state preservation in Selenium"
        colorTheme="blue"
        badges={[
          { label: 'Element Management', variant: 'success' },
          { label: 'State Management', variant: 'info' },
          { label: 'Performance', variant: 'secondary' },
        ]}
      />

      {/* State Reference Flow Diagram */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Element Reference Management Flow
          </CardTitle>
          <CardDescription>Visual representation of element reference lifecycle and management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Element Discovery */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Element Discovery</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">findElement() / findElements()</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Reference Storage */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Reference Storage</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center break-words">Variables, Maps, Cache</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* State Validation */}
                <div className="relative py-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-3 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 transform rotate-45 w-20 h-20 flex items-center justify-center">
                    <div className="transform -rotate-45 text-sm font-semibold text-yellow-900 dark:text-yellow-100">?</div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Valid?</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-yellow-400 dark:bg-yellow-600 -my-0"></div>
                
                {/* Branching Section */}
                <div className="w-full flex justify-center gap-8 md:gap-16">
                  {/* Valid Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600"></div>
                    <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-green-900 dark:text-green-100 text-center">✓ Valid</div>
                      <div className="text-xs text-green-700 dark:text-green-300 text-center">Use</div>
                    </div>
                  </div>
                  
                  {/* Stale Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600"></div>
                    <div className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-lg border-2 border-red-300 dark:border-red-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-red-900 dark:text-red-100 text-center">✗ Stale</div>
                      <div className="text-xs text-red-700 dark:text-red-300 text-center">Re-locate</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Element Usage */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Element Usage</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">click(), sendKeys(), getText()</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Memory Management */}
                <div className="w-full flex justify-center gap-6 md:gap-8">
                  <div className="bg-purple-100 dark:bg-purple-900/40 px-4 py-2 rounded-lg border-2 border-purple-300 dark:border-purple-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-purple-900 dark:text-purple-100 text-center">Cache</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Keep</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900/40 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 text-center">Cleanup</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 text-center">Clear</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reference Types Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Save className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Storage Types</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Variables</li>
                  <li>• Maps/Objects</li>
                  <li>• Cache Systems</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100">State Issues</h5>
                </div>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Stale References</li>
                  <li>• DOM Updates</li>
                  <li>• Page Navigation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Archive className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Memory Strategies</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Weak References</li>
                  <li>• TTL Caching</li>
                  <li>• Cleanup Methods</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            State Management Examples
          </CardTitle>
          <CardDescription>
            Detailed element reference management examples for different programming languages
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
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* State Cards */}
      <div className="space-y-6">
        {currentStates.map((state, index) => (
          <Card 
            key={index} 
            className={`border-2 transition-all cursor-pointer ${
              selectedState === state.name 
                ? 'border-blue-500 shadow-lg bg-blue-50 dark:bg-blue-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-blue-300'
            }`}
            onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedState === state.name
                    ? 'bg-blue-100 dark:bg-blue-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Database className={`w-6 h-6 ${
                    selectedState === state.name
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {state.name}
                <Badge variant={selectedState === state.name ? "default" : "secondary"}>
                  {selectedLanguage}
                </Badge>
              </CardTitle>
              <CardDescription>{state.description}</CardDescription>
            </CardHeader>
            
            {selectedState === state.name && (
              <CardContent className="space-y-4">
                {/* Causes and Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Common Causes
                    </h5>
                    <ul className="space-y-1">
                      {state.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Solutions
                    </h5>
                    <ul className="space-y-1">
                      {state.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Code Example */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Code Example
                    </h5>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(state.code, `${state.name} code`)}
                      className="gap-2"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-slate-800 dark:text-slate-300">
                      <code>{state.code}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Best Practices */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Element Reference Best Practices
          </CardTitle>
          <CardDescription>Proactive strategies for efficient element reference management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Storage Strategies</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Save className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Use Appropriate Storage</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Choose variables for single use, maps for multiple elements, and cache systems for repeated access.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Link className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Implement Validation</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Always validate element state before use to handle stale references gracefully.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Use TTL Caching</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Implement time-to-live for cached elements to prevent memory leaks and stale references.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Memory Management</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Archive className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Weak References</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Use weak references for large test suites to allow automatic garbage collection.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Regular Cleanup</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Implement cleanup methods to clear unused references and free memory.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Monitor Usage</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Track memory usage and reference counts to identify optimization opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
