import { TestTube } from 'lucide-react';

export const seleniumCheatsheet = {
    id: 'selenium',
    name: 'Selenium WebDriver',
    description: 'Complete Selenium WebDriver reference: locators, waits, actions, and automation patterns',
    icon: TestTube,
    colorTheme: 'green' as const,
    sections: [
        {
            title: 'Setup & Installation',
            commands: [
                {
                    command: 'Install Selenium Python',
                    description: 'Install Selenium for Python',
                    usage: 'pip install selenium',
                    example: `pip install selenium`,
                },
                {
                    command: 'Install Specific Selenium Version',
                    description: 'Install specific Selenium version',
                    usage: 'pip install selenium==<version>',
                    example: `pip install selenium==4.15.0`,
                },
                {
                    command: 'Install Selenium Java Maven',
                    description: 'Add Selenium dependency to Maven project',
                    usage: '<dependency> in pom.xml',
                    example: `<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-java</artifactId>
  <version>4.15.0</version>
</dependency>`,
                },
                {
                    command: 'Install Selenium JavaScript',
                    description: 'Install Selenium for Node.js',
                    usage: 'npm install selenium-webdriver',
                    example: `npm install selenium-webdriver`,
                },
                {
                    command: 'Install Selenium TypeScript',
                    description: 'Install Selenium with TypeScript support',
                    usage: 'npm install selenium-webdriver @types/selenium-webdriver',
                    example: `npm install selenium-webdriver @types/selenium-webdriver`,
                },
                {
                    command: 'Install WebDriver Manager Python',
                    description: 'Auto-manage browser drivers for Python',
                    usage: 'pip install webdriver-manager',
                    example: `pip install webdriver-manager`,
                },
                {
                    command: 'Selenium Manager Java',
                    description: 'Use built-in Selenium Manager for Java',
                    usage: 'Selenium 4.6+ includes driver management',
                    example: `# Use Selenium Manager (built-in 4.6+)`,
                },
            ],
        },
        {
            title: 'WebDriver Initialization',
            commands: [
                {
                    command: 'Initialize Chrome Python',
                    description: 'Initialize Chrome browser with Python',
                    usage: 'webdriver.Chrome()',
                    example: `from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))`,
                },
                {
                    command: 'Initialize Chrome Java',
                    description: 'Initialize Chrome browser with Java',
                    usage: 'new ChromeDriver()',
                    example: `WebDriver driver = new ChromeDriver();`,
                },
                {
                    command: 'Initialize Firefox Python',
                    description: 'Initialize Firefox browser with Python',
                    usage: 'webdriver.Firefox()',
                    example: `from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))`,
                },
                {
                    command: 'Initialize Firefox Java',
                    description: 'Initialize Firefox browser with Java',
                    usage: 'new FirefoxDriver()',
                    example: `WebDriver driver = new FirefoxDriver();`,
                },
                {
                    command: 'Initialize Edge Python',
                    description: 'Initialize Edge browser with Python',
                    usage: 'webdriver.Edge()',
                    example: `driver = webdriver.Edge()`,
                },
                {
                    command: 'Initialize Edge Java',
                    description: 'Initialize Edge browser with Java',
                    usage: 'new EdgeDriver()',
                    example: `WebDriver driver = new EdgeDriver();`,
                },
                {
                    command: 'Initialize Safari Python',
                    description: 'Initialize Safari browser with Python',
                    usage: 'webdriver.Safari()',
                    example: `driver = webdriver.Safari()`,
                },
                {
                    command: 'Initialize Safari Java',
                    description: 'Initialize Safari browser with Java',
                    usage: 'new SafariDriver()',
                    example: `WebDriver driver = new SafariDriver();`,
                },
                {
                    command: 'Headless Chrome Python',
                    description: 'Run Chrome in headless mode with Python',
                    usage: 'ChromeOptions with --headless',
                    example: `from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)`,
                },
                {
                    command: 'Headless Chrome Java',
                    description: 'Run Chrome in headless mode with Java',
                    usage: 'ChromeOptions with --headless',
                    example: `ChromeOptions options = new ChromeOptions();
options.addArguments("--headless");
WebDriver driver = new ChromeDriver(options);`,
                },
                {
                    command: 'Browser Options Python',
                    description: 'Configure browser options with Python',
                    usage: 'ChromeOptions configuration',
                    example: `options = Options()
options.add_argument("--start-maximized")
options.add_argument("--disable-notifications")
options.add_experimental_option("excludeSwitches", ["enable-logging"])`,
                },
                {
                    command: 'Browser Options Java',
                    description: 'Configure browser options with Java',
                    usage: 'ChromeOptions configuration',
                    example: `ChromeOptions options = new ChromeOptions();
options.addArguments("--start-maximized", "--disable-notifications");`,
                },
            ],
        },
        {
            title: 'Locators',
            commands: [
                {
                    command: 'Find by ID Python',
                    description: 'Find element by ID using Python',
                    usage: 'find_element(By.ID, "id")',
                    example: `element = driver.find_element(By.ID, "username")`,
                },
                {
                    command: 'Find by ID Java',
                    description: 'Find element by ID using Java',
                    usage: 'findElement(By.id("id"))',
                    example: `WebElement element = driver.findElement(By.id("username"));`,
                },
                {
                    command: 'Find by Name Python',
                    description: 'Find element by name attribute using Python',
                    usage: 'find_element(By.NAME, "name")',
                    example: `element = driver.find_element(By.NAME, "email")`,
                },
                {
                    command: 'Find by Name Java',
                    description: 'Find element by name attribute using Java',
                    usage: 'findElement(By.name("name"))',
                    example: `WebElement element = driver.findElement(By.name("email"));`,
                },
                {
                    command: 'Find by Class Name Python',
                    description: 'Find element by class name using Python',
                    usage: 'find_element(By.CLASS_NAME, "class")',
                    example: `element = driver.find_element(By.CLASS_NAME, "btn-primary")`,
                },
                {
                    command: 'Find by Class Name Java',
                    description: 'Find element by class name using Java',
                    usage: 'findElement(By.className("class"))',
                    example: `WebElement element = driver.findElement(By.className("btn-primary"));`,
                },
                {
                    command: 'Find by Tag Name Python',
                    description: 'Find element by HTML tag using Python',
                    usage: 'find_element(By.TAG_NAME, "tag")',
                    example: `element = driver.find_element(By.TAG_NAME, "input")`,
                },
                {
                    command: 'Find by Tag Name Java',
                    description: 'Find element by HTML tag using Java',
                    usage: 'findElement(By.tagName("tag"))',
                    example: `WebElement element = driver.findElement(By.tagName("input"));`,
                },
                {
                    command: 'Find by Link Text Python',
                    description: 'Find link by exact text using Python',
                    usage: 'find_element(By.LINK_TEXT, "text")',
                    example: `element = driver.find_element(By.LINK_TEXT, "Click Here")`,
                },
                {
                    command: 'Find by Link Text Java',
                    description: 'Find link by exact text using Java',
                    usage: 'findElement(By.linkText("text"))',
                    example: `WebElement element = driver.findElement(By.linkText("Click Here"));`,
                },
                {
                    command: 'Find by Partial Link Text Python',
                    description: 'Find link by partial text using Python',
                    usage: 'find_element(By.PARTIAL_LINK_TEXT, "text")',
                    example: `element = driver.find_element(By.PARTIAL_LINK_TEXT, "Click")`,
                },
                {
                    command: 'Find by Partial Link Text Java',
                    description: 'Find link by partial text using Java',
                    usage: 'findElement(By.partialLinkText("text"))',
                    example: `WebElement element = driver.findElement(By.partialLinkText("Click"));`,
                },
                {
                    command: 'Find by CSS Selector Python',
                    description: 'Find element by CSS selector using Python',
                    usage: 'find_element(By.CSS_SELECTOR, "selector")',
                    example: `element = driver.find_element(By.CSS_SELECTOR, "#username")
element = driver.find_element(By.CSS_SELECTOR, ".btn-primary")
element = driver.find_element(By.CSS_SELECTOR, "input[type='text']")`,
                },
                {
                    command: 'Find by CSS Selector Java',
                    description: 'Find element by CSS selector using Java',
                    usage: 'findElement(By.cssSelector("selector"))',
                    example: `WebElement element = driver.findElement(By.cssSelector("#username"));`,
                },
                {
                    command: 'Find by XPath Python',
                    description: 'Find element by XPath using Python',
                    usage: 'find_element(By.XPATH, "xpath")',
                    example: `element = driver.find_element(By.XPATH, "//input[@id='username']")
element = driver.find_element(By.XPATH, "//button[contains(text(), 'Submit')]")`,
                },
                {
                    command: 'Find by XPath Java',
                    description: 'Find element by XPath using Java',
                    usage: 'findElement(By.xpath("xpath"))',
                    example: `WebElement element = driver.findElement(By.xpath("//input[@id='username']"));`,
                },
                {
                    command: 'Find Multiple Elements Python',
                    description: 'Find all matching elements using Python',
                    usage: 'find_elements(By.*, "value")',
                    example: `elements = driver.find_elements(By.CLASS_NAME, "item")
for element in elements:
    print(element.text)`,
                },
                {
                    command: 'Find Multiple Elements Java',
                    description: 'Find all matching elements using Java',
                    usage: 'findElements(By.*, "value")',
                    example: `List<WebElement> elements = driver.findElements(By.className("item"));`,
                },
            ],
        },
        {
            title: 'XPath Strategies',
            commands: [
                {
                    command: 'Absolute XPath',
                    description: 'Full path from root element',
                    usage: '/html/body/div/input',
                    example: `//input[@id="username"]
# Avoid absolute XPath when possible`,
                },
                {
                    command: 'Relative XPath',
                    description: 'Path from current node',
                    usage: '//tag[@attribute="value"]',
                    example: `//input[@id="username"]
//button[@type="submit"]`,
                },
                {
                    command: 'XPath by Text',
                    description: 'Find element by exact text content',
                    usage: '//tag[text()="exact"]',
                    example: `//button[text()="Submit"]
//a[text()="Click Here"]`,
                },
                {
                    command: 'XPath Contains Text',
                    description: 'Find element by partial text match',
                    usage: '//tag[contains(text(), "partial")]',
                    example: `//button[contains(text(), "Submit")]
//div[contains(@class, "error")]`,
                },
                {
                    command: 'XPath Starts With',
                    description: 'Find element where attribute starts with value',
                    usage: '//tag[starts-with(@attr, "value")]',
                    example: `//input[starts-with(@id, "user")]
//div[starts-with(@class, "btn")]`,
                },
                {
                    command: 'XPath Ancestor',
                    description: 'Find ancestor elements',
                    usage: '//tag//ancestor::ancestorTag',
                    example: `//input[@id="username"]//ancestor::form
//span//ancestor::div[@class="container"]`,
                },
                {
                    command: 'XPath Following Sibling',
                    description: 'Find following sibling elements',
                    usage: '//tag//following-sibling::siblingTag',
                    example: `//input[@id="username"]//following-sibling::input
//h1//following-sibling::p`,
                },
                {
                    command: 'XPath Preceding Sibling',
                    description: 'Find preceding sibling elements',
                    usage: '//tag//preceding-sibling::siblingTag',
                    example: `//input[@id="password"]//preceding-sibling::input`,
                },
                {
                    command: 'XPath Parent',
                    description: 'Find parent element',
                    usage: '//tag//parent::parentTag',
                    example: `//input[@id="username"]//parent::div
//span//parent::button`,
                },
                {
                    command: 'XPath And Condition',
                    description: 'Multiple conditions with AND',
                    usage: '//tag[@attr1="val1" and @attr2="val2"]',
                    example: `//input[@type="text" and @name="email"]`,
                },
                {
                    command: 'XPath Or Condition',
                    description: 'Multiple conditions with OR',
                    usage: '//tag[@attr1="val1" or @attr2="val2"]',
                    example: `//button[@class="btn" or @id="submit"]`,
                },
            ],
        },
        {
            title: 'Element Interactions',
            commands: [
                {
                    command: 'Click Element Python',
                    description: 'Click on element using Python',
                    usage: 'element.click()',
                    example: `button = driver.find_element(By.ID, "submit")
button.click()`,
                },
                {
                    command: 'Click Element Java',
                    description: 'Click on element using Java',
                    usage: 'element.click()',
                    example: `WebElement button = driver.findElement(By.id("submit"));
button.click();`,
                },
                {
                    command: 'Send Keys Python',
                    description: 'Type text into input using Python',
                    usage: 'element.send_keys("text")',
                    example: `input_field = driver.find_element(By.ID, "username")
input_field.send_keys("john.doe")`,
                },
                {
                    command: 'Send Keys Java',
                    description: 'Type text into input using Java',
                    usage: 'element.sendKeys("text")',
                    example: `WebElement input = driver.findElement(By.id("username"));
input.sendKeys("john.doe");`,
                },
                {
                    command: 'Clear Input Python',
                    description: 'Clear input field using Python',
                    usage: 'element.clear()',
                    example: `input_field.clear()`,
                },
                {
                    command: 'Clear Input Java',
                    description: 'Clear input field using Java',
                    usage: 'element.clear()',
                    example: `input.clear();`,
                },
                {
                    command: 'Submit Form Python',
                    description: 'Submit form using Python',
                    usage: 'element.submit()',
                    example: `form = driver.find_element(By.TAG_NAME, "form")
form.submit()`,
                },
                {
                    command: 'Submit Form Java',
                    description: 'Submit form using Java',
                    usage: 'element.submit()',
                    example: `form.submit();`,
                },
                {
                    command: 'Get Element Text Python',
                    description: 'Get element text content using Python',
                    usage: 'element.text',
                    example: `text = element.text
print(text)`,
                },
                {
                    command: 'Get Element Text Java',
                    description: 'Get element text content using Java',
                    usage: 'element.getText()',
                    example: `String text = element.getText();`,
                },
                {
                    command: 'Get Attribute Python',
                    description: 'Get element attribute value using Python',
                    usage: 'element.get_attribute("attr")',
                    example: `value = element.get_attribute("href")
class_name = element.get_attribute("class")`,
                },
                {
                    command: 'Get Attribute Java',
                    description: 'Get element attribute value using Java',
                    usage: 'element.getAttribute("attr")',
                    example: `String href = element.getAttribute("href");
String className = element.getAttribute("class");`,
                },
                {
                    command: 'Check Element Displayed Python',
                    description: 'Check if element is visible using Python',
                    usage: 'element.is_displayed()',
                    example: `if element.is_displayed():
    print("Element is visible")`,
                },
                {
                    command: 'Check Element Displayed Java',
                    description: 'Check if element is visible using Java',
                    usage: 'element.isDisplayed()',
                    example: `if (element.isDisplayed()) {
    System.out.println("Element is visible");
}`,
                },
                {
                    command: 'Check Element Enabled Python',
                    description: 'Check if element is enabled using Python',
                    usage: 'element.is_enabled()',
                    example: `if element.is_enabled():
    element.click()`,
                },
                {
                    command: 'Check Element Enabled Java',
                    description: 'Check if element is enabled using Java',
                    usage: 'element.isEnabled()',
                    example: `if (element.isEnabled()) {
    element.click();
}`,
                },
                {
                    command: 'Check Element Selected Python',
                    description: 'Check if checkbox/radio is selected using Python',
                    usage: 'element.is_selected()',
                    example: `checkbox = driver.find_element(By.ID, "agree")
if not checkbox.is_selected():
    checkbox.click()`,
                },
                {
                    command: 'Check Element Selected Java',
                    description: 'Check if checkbox/radio is selected using Java',
                    usage: 'element.isSelected()',
                    example: `if (!checkbox.isSelected()) {
    checkbox.click();
}`,
                },
            ],
        },
        {
            title: 'Waits',
            commands: [
                {
                    command: 'Implicit Wait Python',
                    description: 'Set default wait time for all elements using Python',
                    usage: 'driver.implicitly_wait(seconds)',
                    example: `driver.implicitly_wait(10)  # Wait up to 10 seconds`,
                },
                {
                    command: 'Implicit Wait Java',
                    description: 'Set default wait time for all elements using Java',
                    usage: 'manage().timeouts().implicitlyWait()',
                    example: `driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));`,
                },
                {
                    command: 'Explicit Wait Python',
                    description: 'Wait for specific condition using Python',
                    usage: 'WebDriverWait + ExpectedConditions',
                    example: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.ID, "username")))`,
                },
                {
                    command: 'Explicit Wait Java',
                    description: 'Wait for specific condition using Java',
                    usage: 'WebDriverWait + ExpectedConditions',
                    example: `WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("username")));`,
                },
                {
                    command: 'Wait for Element Presence Python',
                    description: 'Wait until element is present in DOM using Python',
                    usage: 'EC.presence_of_element_located()',
                    example: `EC.presence_of_element_located((By.ID, "id"))`,
                },
                {
                    command: 'Wait for Element Visibility Python',
                    description: 'Wait until element is visible using Python',
                    usage: 'EC.visibility_of_element_located()',
                    example: `EC.visibility_of_element_located((By.ID, "id"))`,
                },
                {
                    command: 'Wait for Element Clickable Python',
                    description: 'Wait until element is clickable using Python',
                    usage: 'EC.element_to_be_clickable()',
                    example: `EC.element_to_be_clickable((By.ID, "id"))`,
                },
                {
                    command: 'Wait for Text Presence Python',
                    description: 'Wait until text is present in element using Python',
                    usage: 'EC.text_to_be_present_in_element()',
                    example: `EC.text_to_be_present_in_element((By.ID, "id"), "text")`,
                },
                {
                    command: 'Wait for Element Selected Python',
                    description: 'Wait until element is selected using Python',
                    usage: 'EC.element_to_be_selected()',
                    example: `EC.element_to_be_selected((By.ID, "id"))`,
                },
                {
                    command: 'Expected Conditions Java',
                    description: 'Common wait conditions using Java',
                    usage: 'ExpectedConditions methods',
                    example: `ExpectedConditions.presenceOfElementLocated(By.id("id"))
ExpectedConditions.visibilityOfElementLocated(By.id("id"))
ExpectedConditions.elementToBeClickable(By.id("id"))`,
                },
                {
                    command: 'Fluent Wait Python',
                    description: 'Wait with custom polling and exceptions using Python',
                    usage: 'WebDriverWait with custom settings',
                    example: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

wait = WebDriverWait(driver, 10, poll_frequency=1, ignored_exceptions=[TimeoutException])
element = wait.until(EC.presence_of_element_located((By.ID, "id")))`,
                },
                {
                    command: 'Fluent Wait Java',
                    description: 'Wait with custom polling and exceptions using Java',
                    usage: 'FluentWait with conditions',
                    example: `FluentWait<WebDriver> wait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(10))
    .pollingEvery(Duration.ofSeconds(1))
    .ignoring(NoSuchElementException.class);`,
                },
                {
                    command: 'Sleep Python',
                    description: 'Hard wait using Python (not recommended)',
                    usage: 'time.sleep(seconds)',
                    example: `import time
time.sleep(5)  # Wait 5 seconds`,
                },
                {
                    command: 'Sleep Java',
                    description: 'Hard wait using Java (not recommended)',
                    usage: 'Thread.sleep(milliseconds)',
                    example: `Thread.sleep(5000);  // Wait 5 seconds`,
                },
            ],
        },
        {
            title: 'Browser Navigation',
            commands: [
                {
                    command: 'Navigate to URL Python',
                    description: 'Navigate to URL using Python',
                    usage: 'driver.get(url)',
                    example: `driver.get("https://example.com")`,
                },
                {
                    command: 'Navigate to URL Java',
                    description: 'Navigate to URL using Java',
                    usage: 'driver.get(url)',
                    example: `driver.get("https://example.com");`,
                },
                {
                    command: 'Get Current URL Python',
                    description: 'Get current page URL using Python',
                    usage: 'driver.current_url',
                    example: `current_url = driver.current_url
print(current_url)`,
                },
                {
                    command: 'Get Current URL Java',
                    description: 'Get current page URL using Java',
                    usage: 'driver.getCurrentUrl()',
                    example: `String currentUrl = driver.getCurrentUrl();`,
                },
                {
                    command: 'Get Page Title Python',
                    description: 'Get page title using Python',
                    usage: 'driver.title',
                    example: `title = driver.title
print(title)`,
                },
                {
                    command: 'Get Page Title Java',
                    description: 'Get page title using Java',
                    usage: 'driver.getTitle()',
                    example: `String title = driver.getTitle();`,
                },
                {
                    command: 'Navigate Back Python',
                    description: 'Go back in browser history using Python',
                    usage: 'driver.back()',
                    example: `driver.back()`,
                },
                {
                    command: 'Navigate Back Java',
                    description: 'Go back in browser history using Java',
                    usage: 'driver.navigate().back()',
                    example: `driver.navigate().back();`,
                },
                {
                    command: 'Navigate Forward Python',
                    description: 'Go forward in browser history using Python',
                    usage: 'driver.forward()',
                    example: `driver.forward()`,
                },
                {
                    command: 'Navigate Forward Java',
                    description: 'Go forward in browser history using Java',
                    usage: 'driver.navigate().forward()',
                    example: `driver.navigate().forward();`,
                },
                {
                    command: 'Refresh Page Python',
                    description: 'Refresh current page using Python',
                    usage: 'driver.refresh()',
                    example: `driver.refresh()`,
                },
                {
                    command: 'Refresh Page Java',
                    description: 'Refresh current page using Java',
                    usage: 'driver.navigate().refresh()',
                    example: `driver.navigate().refresh();`,
                },
            ],
        },
        {
            title: 'Window Management',
            commands: [
                {
                    command: 'Get Current Window Handle Python',
                    description: 'Get current window handle using Python',
                    usage: 'driver.current_window_handle',
                    example: `handle = driver.current_window_handle`,
                },
                {
                    command: 'Get Current Window Handle Java',
                    description: 'Get current window handle using Java',
                    usage: 'driver.getWindowHandle()',
                    example: `String handle = driver.getWindowHandle();`,
                },
                {
                    command: 'Get All Window Handles Python',
                    description: 'Get all open windows using Python',
                    usage: 'driver.window_handles',
                    example: `handles = driver.window_handles
for handle in handles:
    driver.switch_to.window(handle)`,
                },
                {
                    command: 'Get All Window Handles Java',
                    description: 'Get all open windows using Java',
                    usage: 'driver.getWindowHandles()',
                    example: `Set<String> handles = driver.getWindowHandles();
for (String handle : handles) {
    driver.switchTo().window(handle);
}`,
                },
                {
                    command: 'Switch to Window Python',
                    description: 'Switch to specific window using Python',
                    usage: 'driver.switch_to.window(handle)',
                    example: `handles = driver.window_handles
driver.switch_to.window(handles[1])`,
                },
                {
                    command: 'Switch to Window Java',
                    description: 'Switch to specific window using Java',
                    usage: 'driver.switchTo().window(handle)',
                    example: `driver.switchTo().window(handle);`,
                },
                {
                    command: 'Close Window Python',
                    description: 'Close current window using Python',
                    usage: 'driver.close()',
                    example: `driver.close()  # Closes current window
driver.quit()   # Closes all windows`,
                },
                {
                    command: 'Close Window Java',
                    description: 'Close current window using Java',
                    usage: 'driver.close()',
                    example: `driver.close();  // Closes current window
driver.quit();   // Closes all windows`,
                },
                {
                    command: 'Maximize Window Python',
                    description: 'Maximize browser window using Python',
                    usage: 'driver.maximize_window()',
                    example: `driver.maximize_window()`,
                },
                {
                    command: 'Maximize Window Java',
                    description: 'Maximize browser window using Java',
                    usage: 'manage().window().maximize()',
                    example: `driver.manage().window().maximize();`,
                },
                {
                    command: 'Set Window Size Python',
                    description: 'Set window dimensions using Python',
                    usage: 'driver.set_window_size(width, height)',
                    example: `driver.set_window_size(1920, 1080)`,
                },
                {
                    command: 'Set Window Size Java',
                    description: 'Set window dimensions using Java',
                    usage: 'manage().window().setSize()',
                    example: `driver.manage().window().setSize(new Dimension(1920, 1080));`,
                },
                {
                    command: 'Get Window Size Python',
                    description: 'Get window dimensions using Python',
                    usage: 'driver.get_window_size()',
                    example: `size = driver.get_window_size()
print(size["width"], size["height"])`,
                },
                {
                    command: 'Get Window Size Java',
                    description: 'Get window dimensions using Java',
                    usage: 'manage().window().getSize()',
                    example: `Dimension size = driver.manage().window().getSize();`,
                },
            ],
        },
        {
            title: 'Frames & Alerts',
            commands: [
                {
                    command: 'Switch to Frame by Index Python',
                    description: 'Switch to iframe by index using Python',
                    usage: 'driver.switch_to.frame(index)',
                    example: `driver.switch_to.frame(0)`,
                },
                {
                    command: 'Switch to Frame by Index Java',
                    description: 'Switch to iframe by index using Java',
                    usage: 'driver.switchTo().frame(index)',
                    example: `driver.switchTo().frame(0);`,
                },
                {
                    command: 'Switch to Frame by Element Python',
                    description: 'Switch to iframe by element using Python',
                    usage: 'driver.switch_to.frame(element)',
                    example: `frame = driver.find_element(By.ID, "frame-id")
driver.switch_to.frame(frame)`,
                },
                {
                    command: 'Switch to Frame by Element Java',
                    description: 'Switch to iframe by element using Java',
                    usage: 'driver.switchTo().frame(element)',
                    example: `WebElement frame = driver.findElement(By.id("frame-id"));
driver.switchTo().frame(frame);`,
                },
                {
                    command: 'Switch to Frame by Name Python',
                    description: 'Switch to iframe by name/id using Python',
                    usage: 'driver.switch_to.frame("name")',
                    example: `driver.switch_to.frame("frame-name")`,
                },
                {
                    command: 'Switch to Frame by Name Java',
                    description: 'Switch to iframe by name/id using Java',
                    usage: 'driver.switchTo().frame("name")',
                    example: `driver.switchTo().frame("frame-name");`,
                },
                {
                    command: 'Switch to Default Content Python',
                    description: 'Switch back to main document using Python',
                    usage: 'driver.switch_to.default_content()',
                    example: `driver.switch_to.default_content()`,
                },
                {
                    command: 'Switch to Default Content Java',
                    description: 'Switch back to main document using Java',
                    usage: 'driver.switchTo().defaultContent()',
                    example: `driver.switchTo().defaultContent();`,
                },
                {
                    command: 'Switch to Parent Frame Python',
                    description: 'Switch to parent frame using Python',
                    usage: 'driver.switch_to.parent_frame()',
                    example: `driver.switch_to.parent_frame()`,
                },
                {
                    command: 'Switch to Parent Frame Java',
                    description: 'Switch to parent frame using Java',
                    usage: 'driver.switchTo().parentFrame()',
                    example: `driver.switchTo().parentFrame();`,
                },
                {
                    command: 'Handle Alert Accept Python',
                    description: 'Accept JavaScript alert using Python',
                    usage: 'alert.accept()',
                    example: `alert = driver.switch_to.alert
alert.accept()  # Click OK`,
                },
                {
                    command: 'Handle Alert Accept Java',
                    description: 'Accept JavaScript alert using Java',
                    usage: 'alert.accept()',
                    example: `Alert alert = driver.switchTo().alert();
alert.accept();  // Click OK`,
                },
                {
                    command: 'Handle Alert Dismiss Python',
                    description: 'Dismiss JavaScript alert using Python',
                    usage: 'alert.dismiss()',
                    example: `alert.dismiss()  # Click Cancel`,
                },
                {
                    command: 'Handle Alert Dismiss Java',
                    description: 'Dismiss JavaScript alert using Java',
                    usage: 'alert.dismiss()',
                    example: `alert.dismiss();  // Click Cancel`,
                },
                {
                    command: 'Get Alert Text Python',
                    description: 'Get alert text using Python',
                    usage: 'alert.text',
                    example: `text = alert.text  # Get alert text`,
                },
                {
                    command: 'Get Alert Text Java',
                    description: 'Get alert text using Java',
                    usage: 'alert.getText()',
                    example: `String text = alert.getText();  // Get alert text`,
                },
                {
                    command: 'Send Keys to Alert Python',
                    description: 'Type text in prompt alert using Python',
                    usage: 'alert.send_keys("text")',
                    example: `alert.send_keys("text")  # Type in prompt`,
                },
                {
                    command: 'Send Keys to Alert Java',
                    description: 'Type text in prompt alert using Java',
                    usage: 'alert.sendKeys("text")',
                    example: `alert.sendKeys("text");  // Type in prompt`,
                },
            ],
        },
        {
            title: 'Actions Class',
            commands: [
                {
                    command: 'Initialize Actions Python',
                    description: 'Create Actions object using Python',
                    usage: 'ActionChains(driver)',
                    example: `from selenium.webdriver.common.action_chains import ActionChains

actions = ActionChains(driver)`,
                },
                {
                    command: 'Initialize Actions Java',
                    description: 'Create Actions object using Java',
                    usage: 'new Actions(driver)',
                    example: `import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);`,
                },
                {
                    command: 'Click Action Python',
                    description: 'Click using Actions with Python',
                    usage: 'actions.click(element).perform()',
                    example: `actions.click(element).perform()`,
                },
                {
                    command: 'Click Action Java',
                    description: 'Click using Actions with Java',
                    usage: 'actions.click(element).perform()',
                    example: `actions.click(element).perform();`,
                },
                {
                    command: 'Double Click Python',
                    description: 'Double click action using Python',
                    usage: 'actions.double_click(element).perform()',
                    example: `actions.double_click(element).perform()`,
                },
                {
                    command: 'Double Click Java',
                    description: 'Double click action using Java',
                    usage: 'actions.doubleClick(element).perform()',
                    example: `actions.doubleClick(element).perform();`,
                },
                {
                    command: 'Right Click Python',
                    description: 'Context menu click using Python',
                    usage: 'actions.context_click(element).perform()',
                    example: `actions.context_click(element).perform()`,
                },
                {
                    command: 'Right Click Java',
                    description: 'Context menu click using Java',
                    usage: 'actions.contextClick(element).perform()',
                    example: `actions.contextClick(element).perform();`,
                },
                {
                    command: 'Hover Action Python',
                    description: 'Mouse hover action using Python',
                    usage: 'actions.move_to_element(element).perform()',
                    example: `actions.move_to_element(element).perform()`,
                },
                {
                    command: 'Hover Action Java',
                    description: 'Mouse hover action using Java',
                    usage: 'actions.moveToElement(element).perform()',
                    example: `actions.moveToElement(element).perform();`,
                },
                {
                    command: 'Drag and Drop Python',
                    description: 'Drag element to target using Python',
                    usage: 'actions.drag_and_drop(source, target).perform()',
                    example: `source = driver.find_element(By.ID, "source")
target = driver.find_element(By.ID, "target")
actions.drag_and_drop(source, target).perform()`,
                },
                {
                    command: 'Drag and Drop Java',
                    description: 'Drag element to target using Java',
                    usage: 'actions.dragAndDrop(source, target).perform()',
                    example: `WebElement source = driver.findElement(By.id("source"));
WebElement target = driver.findElement(By.id("target"));
actions.dragAndDrop(source, target).perform();`,
                },
                {
                    command: 'Key Down Python',
                    description: 'Press key down using Python',
                    usage: 'actions.key_down(key)',
                    example: `from selenium.webdriver.common.keys import Keys

actions.key_down(Keys.CONTROL).send_keys("a").key_up(Keys.CONTROL).perform()`,
                },
                {
                    command: 'Key Down Java',
                    description: 'Press key down using Java',
                    usage: 'actions.keyDown(key)',
                    example: `import org.openqa.selenium.Keys;

actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform();`,
                },
                {
                    command: 'Send Keys Action Python',
                    description: 'Send keyboard input using Actions with Python',
                    usage: 'actions.send_keys(text).perform()',
                    example: `actions.send_keys("Hello World").perform()`,
                },
                {
                    command: 'Send Keys Action Java',
                    description: 'Send keyboard input using Actions with Java',
                    usage: 'actions.sendKeys(text).perform()',
                    example: `actions.sendKeys("Hello World").perform();`,
                },
                {
                    command: 'Chain Actions Python',
                    description: 'Chain multiple actions using Python',
                    usage: 'actions.action1().action2().perform()',
                    example: `actions.move_to_element(element1).click().move_to_element(element2).click().perform()`,
                },
                {
                    command: 'Chain Actions Java',
                    description: 'Chain multiple actions using Java',
                    usage: 'actions.action1().action2().perform()',
                    example: `actions.moveToElement(element1).click().moveToElement(element2).click().perform();`,
                },
            ],
        },
        {
            title: 'JavaScript Execution',
            commands: [
                {
                    command: 'Execute JavaScript Python',
                    description: 'Execute JavaScript code using Python',
                    usage: 'driver.execute_script(script)',
                    example: `driver.execute_script("return document.title;")
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")`,
                },
                {
                    command: 'Execute JavaScript Java',
                    description: 'Execute JavaScript code using Java',
                    usage: 'js.executeScript(script)',
                    example: `JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("return document.title;");
js.executeScript("window.scrollTo(0, document.body.scrollHeight);");`,
                },
                {
                    command: 'Scroll to Element Python',
                    description: 'Scroll element into view using Python',
                    usage: 'execute_script with scrollIntoView',
                    example: `element = driver.find_element(By.ID, "element-id")
driver.execute_script("arguments[0].scrollIntoView(true);", element)`,
                },
                {
                    command: 'Scroll to Element Java',
                    description: 'Scroll element into view using Java',
                    usage: 'js.executeScript with scrollIntoView',
                    example: `WebElement element = driver.findElement(By.id("element-id"));
js.executeScript("arguments[0].scrollIntoView(true);", element);`,
                },
                {
                    command: 'Click with JavaScript Python',
                    description: 'Click using JavaScript with Python',
                    usage: 'execute_script("arguments[0].click()", element)',
                    example: `element = driver.find_element(By.ID, "button")
driver.execute_script("arguments[0].click();", element)`,
                },
                {
                    command: 'Click with JavaScript Java',
                    description: 'Click using JavaScript with Java',
                    usage: 'js.executeScript("arguments[0].click()", element)',
                    example: `js.executeScript("arguments[0].click();", element);`,
                },
                {
                    command: 'Get Element Value JavaScript Python',
                    description: 'Get value using JavaScript with Python',
                    usage: 'execute_script("return arguments[0].value", element)',
                    example: `value = driver.execute_script("return arguments[0].value;", element)`,
                },
                {
                    command: 'Get Element Value JavaScript Java',
                    description: 'Get value using JavaScript with Java',
                    usage: 'js.executeScript("return arguments[0].value", element)',
                    example: `String value = (String) js.executeScript("return arguments[0].value;", element);`,
                },
            ],
        },
        {
            title: 'Screenshots',
            commands: [
                {
                    command: 'Take Screenshot Python',
                    description: 'Capture screenshot using Python',
                    usage: 'driver.save_screenshot(filename)',
                    example: `driver.save_screenshot("screenshot.png")`,
                },
                {
                    command: 'Take Screenshot Java',
                    description: 'Capture screenshot using Java',
                    usage: 'getScreenshotAs(OutputType.FILE)',
                    example: `File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenshot, new File("screenshot.png"));`,
                },
                {
                    command: 'Element Screenshot Python',
                    description: 'Screenshot of specific element using Python',
                    usage: 'element.screenshot(filename)',
                    example: `element = driver.find_element(By.ID, "element-id")
element.screenshot("element.png")`,
                },
                {
                    command: 'Element Screenshot Java',
                    description: 'Screenshot of specific element using Java',
                    usage: 'element.getScreenshotAs(OutputType.FILE)',
                    example: `WebElement element = driver.findElement(By.id("element-id"));
File elementScreenshot = element.getScreenshotAs(OutputType.FILE);`,
                },
            ],
        },
        {
            title: 'Cookies',
            commands: [
                {
                    command: 'Get All Cookies Python',
                    description: 'Retrieve all cookies using Python',
                    usage: 'driver.get_cookies()',
                    example: `cookies = driver.get_cookies()
for cookie in cookies:
    print(cookie["name"], cookie["value"])`,
                },
                {
                    command: 'Get All Cookies Java',
                    description: 'Retrieve all cookies using Java',
                    usage: 'manage().getCookies()',
                    example: `Set<Cookie> cookies = driver.manage().getCookies();
for (Cookie cookie : cookies) {
    System.out.println(cookie.getName() + " = " + cookie.getValue());
}`,
                },
                {
                    command: 'Get Specific Cookie Python',
                    description: 'Get specific cookie using Python',
                    usage: 'driver.get_cookie(name)',
                    example: `cookie = driver.get_cookie("session_id")
print(cookie["value"])`,
                },
                {
                    command: 'Get Specific Cookie Java',
                    description: 'Get specific cookie using Java',
                    usage: 'manage().getCookieNamed(name)',
                    example: `Cookie cookie = driver.manage().getCookieNamed("session_id");`,
                },
                {
                    command: 'Add Cookie Python',
                    description: 'Add new cookie using Python',
                    usage: 'driver.add_cookie(cookie_dict)',
                    example: `driver.add_cookie({"name": "test", "value": "123"})`,
                },
                {
                    command: 'Add Cookie Java',
                    description: 'Add new cookie using Java',
                    usage: 'manage().addCookie(cookie)',
                    example: `Cookie cookie = new Cookie("test", "123");
driver.manage().addCookie(cookie);`,
                },
                {
                    command: 'Delete Cookie Python',
                    description: 'Delete specific cookie using Python',
                    usage: 'driver.delete_cookie(name)',
                    example: `driver.delete_cookie("session_id")`,
                },
                {
                    command: 'Delete Cookie Java',
                    description: 'Delete specific cookie using Java',
                    usage: 'manage().deleteCookieNamed(name)',
                    example: `driver.manage().deleteCookieNamed("session_id");`,
                },
                {
                    command: 'Delete All Cookies Python',
                    description: 'Clear all cookies using Python',
                    usage: 'driver.delete_all_cookies()',
                    example: `driver.delete_all_cookies()`,
                },
                {
                    command: 'Delete All Cookies Java',
                    description: 'Clear all cookies using Java',
                    usage: 'manage().deleteAllCookies()',
                    example: `driver.manage().deleteAllCookies();`,
                },
            ],
        },
        {
            title: 'Select Dropdown',
            commands: [
                {
                    command: 'Initialize Select Python',
                    description: 'Create Select object using Python',
                    usage: 'Select(element)',
                    example: `from selenium.webdriver.support.ui import Select

select = Select(driver.find_element(By.ID, "dropdown"))`,
                },
                {
                    command: 'Initialize Select Java',
                    description: 'Create Select object using Java',
                    usage: 'new Select(element)',
                    example: `import org.openqa.selenium.support.ui.Select;

Select select = new Select(driver.findElement(By.id("dropdown")));`,
                },
                {
                    command: 'Select by Visible Text Python',
                    description: 'Select option by text using Python',
                    usage: 'select_by_visible_text(text)',
                    example: `select.select_by_visible_text("Option 1")`,
                },
                {
                    command: 'Select by Visible Text Java',
                    description: 'Select option by text using Java',
                    usage: 'selectByVisibleText(text)',
                    example: `select.selectByVisibleText("Option 1");`,
                },
                {
                    command: 'Select by Value Python',
                    description: 'Select option by value attribute using Python',
                    usage: 'select_by_value(value)',
                    example: `select.select_by_value("value1")`,
                },
                {
                    command: 'Select by Value Java',
                    description: 'Select option by value attribute using Java',
                    usage: 'selectByValue(value)',
                    example: `select.selectByValue("value1");`,
                },
                {
                    command: 'Select by Index Python',
                    description: 'Select option by index using Python',
                    usage: 'select_by_index(index)',
                    example: `select.select_by_index(0)  # First option`,
                },
                {
                    command: 'Select by Index Java',
                    description: 'Select option by index using Java',
                    usage: 'selectByIndex(index)',
                    example: `select.selectByIndex(0);  // First option`,
                },
                {
                    command: 'Get Selected Option Python',
                    description: 'Get currently selected option using Python',
                    usage: 'first_selected_option',
                    example: `selected = select.first_selected_option
print(selected.text)`,
                },
                {
                    command: 'Get Selected Option Java',
                    description: 'Get currently selected option using Java',
                    usage: 'getFirstSelectedOption()',
                    example: `WebElement selected = select.getFirstSelectedOption();
System.out.println(selected.getText());`,
                },
                {
                    command: 'Get All Options Python',
                    description: 'Get all dropdown options using Python',
                    usage: 'options',
                    example: `options = select.options
for option in options:
    print(option.text)`,
                },
                {
                    command: 'Get All Options Java',
                    description: 'Get all dropdown options using Java',
                    usage: 'getOptions()',
                    example: `List<WebElement> options = select.getOptions();
for (WebElement option : options) {
    System.out.println(option.getText());
}`,
                },
                {
                    command: 'Deselect All Python',
                    description: 'Deselect all options using Python',
                    usage: 'deselect_all()',
                    example: `select.deselect_all()`,
                },
                {
                    command: 'Deselect All Java',
                    description: 'Deselect all options using Java',
                    usage: 'deselectAll()',
                    example: `select.deselectAll();`,
                },
                {
                    command: 'Deselect by Visible Text Python',
                    description: 'Deselect option by text using Python',
                    usage: 'deselect_by_visible_text(text)',
                    example: `select.deselect_by_visible_text("Option 1")`,
                },
                {
                    command: 'Deselect by Visible Text Java',
                    description: 'Deselect option by text using Java',
                    usage: 'deselectByVisibleText(text)',
                    example: `select.deselectByVisibleText("Option 1");`,
                },
            ],
        },
        {
            title: 'Page Object Model',
            commands: [
                {
                    command: 'Page Class Python',
                    description: 'Create page object class using Python',
                    usage: 'class PageName:',
                    example: `class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.username = (By.ID, "username")
        self.password = (By.ID, "password")
        self.submit = (By.ID, "submit")`,
                },
                {
                    command: 'Page Methods Python',
                    description: 'Add methods to page class using Python',
                    usage: 'def method_name(self)',
                    example: `def login(self, username, password):
    self.driver.find_element(*self.username).send_keys(username)
    self.driver.find_element(*self.password).send_keys(password)
    self.driver.find_element(*self.submit).click()`,
                },
                {
                    command: 'Page Class Java',
                    description: 'Create page object class using Java',
                    usage: 'public class PageName',
                    example: `public class LoginPage {
    private WebDriver driver;
    private By username = By.id("username");
    private By password = By.id("password");
    private By submit = By.id("submit");`,
                },
                {
                    command: 'Page Constructor Java',
                    description: 'Create page constructor using Java',
                    usage: 'public PageName(WebDriver driver)',
                    example: `public LoginPage(WebDriver driver) {
    this.driver = driver;
}`,
                },
                {
                    command: 'Page Methods Java',
                    description: 'Add methods to page class using Java',
                    usage: 'public void methodName()',
                    example: `public void login(String username, String password) {
    driver.findElement(this.username).sendKeys(username);
    driver.findElement(this.password).sendKeys(password);
    driver.findElement(this.submit).click();
}`,
                },
            ],
        },
        {
            title: 'Best Practices',
            commands: [
                {
                    command: 'Use Explicit Waits',
                    description: 'Prefer explicit waits over implicit waits',
                    usage: 'WebDriverWait with ExpectedConditions',
                    example: `# Always use explicit waits for better reliability`,
                },
                {
                    command: 'Page Object Model',
                    description: 'Use POM for maintainability',
                    usage: 'Separate page classes',
                    example: `# Organize code with Page Object Model pattern`,
                },
                {
                    command: 'Avoid Hard Waits',
                    description: 'Minimize time.sleep() usage',
                    usage: 'Use WebDriverWait instead',
                    example: `# Use explicit waits instead of sleep`,
                },
                {
                    command: 'Unique Locators',
                    description: 'Use stable, unique locators',
                    usage: 'Prefer ID, then CSS/XPath',
                    example: `# Use ID > CSS Selector > XPath`,
                },
                {
                    command: 'Clean Up Resources Python',
                    description: 'Always close browser using Python',
                    usage: 'driver.quit() in finally block',
                    example: `try:
    # test code
finally:
    driver.quit()`,
                },
                {
                    command: 'Clean Up Resources Java',
                    description: 'Always close browser using Java',
                    usage: 'driver.quit() in finally block',
                    example: `try {
    // test code
} finally {
    driver.quit();
}`,
                },
            ],
        },
    ],
};
