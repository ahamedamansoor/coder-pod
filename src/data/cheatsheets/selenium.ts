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
                    command: 'Python Installation',
                    description: 'Install Selenium for Python',
                    usage: 'pip install selenium',
                    example: 'pip install selenium\n# Install specific version\npip install selenium==4.15.0',
                },
                {
                    command: 'Java Installation',
                    description: 'Add Selenium dependency (Maven)',
                    usage: '<dependency> in pom.xml',
                    example: '<dependency>\n  <groupId>org.seleniumhq.selenium</groupId>\n  <artifactId>selenium-java</artifactId>\n  <version>4.15.0</version>\n</dependency>',
                },
                {
                    command: 'JavaScript Installation',
                    description: 'Install Selenium for Node.js',
                    usage: 'npm install selenium-webdriver',
                    example: 'npm install selenium-webdriver\n# Or with TypeScript\nnpm install selenium-webdriver @types/selenium-webdriver',
                },
                {
                    command: 'WebDriver Manager',
                    description: 'Auto-manage browser drivers',
                    usage: 'webdriver-manager (Python/Java)',
                    example: '# Python\npip install webdriver-manager\n\n# Java\n# Use Selenium Manager (built-in 4.6+)',
                },
            ],
        },
        {
            title: 'WebDriver Initialization',
            commands: [
                {
                    command: 'Chrome Driver',
                    description: 'Initialize Chrome browser',
                    usage: 'WebDriver driver = new ChromeDriver()',
                    example: '# Python\nfrom selenium import webdriver\nfrom selenium.webdriver.chrome.service import Service\nfrom webdriver_manager.chrome import ChromeDriverManager\n\ndriver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))\n\n# Java\nWebDriver driver = new ChromeDriver();',
                },
                {
                    command: 'Firefox Driver',
                    description: 'Initialize Firefox browser',
                    usage: 'WebDriver driver = new FirefoxDriver()',
                    example: '# Python\nfrom selenium.webdriver.firefox.service import Service\nfrom webdriver_manager.firefox import GeckoDriverManager\n\ndriver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))\n\n# Java\nWebDriver driver = new FirefoxDriver();',
                },
                {
                    command: 'Edge Driver',
                    description: 'Initialize Edge browser',
                    usage: 'WebDriver driver = new EdgeDriver()',
                    example: '# Python\ndriver = webdriver.Edge()\n\n# Java\nWebDriver driver = new EdgeDriver();',
                },
                {
                    command: 'Safari Driver',
                    description: 'Initialize Safari browser',
                    usage: 'WebDriver driver = new SafariDriver()',
                    example: '# Python\ndriver = webdriver.Safari()\n\n# Java\nWebDriver driver = new SafariDriver();',
                },
                {
                    command: 'Headless Mode',
                    description: 'Run browser in headless mode',
                    usage: 'ChromeOptions / FirefoxOptions',
                    example: '# Python\nfrom selenium.webdriver.chrome.options import Options\n\noptions = Options()\noptions.add_argument("--headless")\ndriver = webdriver.Chrome(options=options)\n\n# Java\nChromeOptions options = new ChromeOptions();\noptions.addArguments("--headless");\nWebDriver driver = new ChromeDriver(options);',
                },
                {
                    command: 'Browser Options',
                    description: 'Configure browser behavior',
                    usage: 'ChromeOptions / FirefoxOptions',
                    example: '# Python\noptions = Options()\noptions.add_argument("--start-maximized")\noptions.add_argument("--disable-notifications")\noptions.add_experimental_option("excludeSwitches", ["enable-logging"])\n\n# Java\nChromeOptions options = new ChromeOptions();\noptions.addArguments("--start-maximized", "--disable-notifications");',
                },
            ],
        },
        {
            title: 'Locators',
            commands: [
                {
                    command: 'ID Locator',
                    description: 'Find element by ID',
                    usage: 'find_element(By.ID, "id")',
                    example: '# Python\nelement = driver.find_element(By.ID, "username")\n\n# Java\nWebElement element = driver.findElement(By.id("username"));',
                },
                {
                    command: 'Name Locator',
                    description: 'Find element by name attribute',
                    usage: 'find_element(By.NAME, "name")',
                    example: '# Python\nelement = driver.find_element(By.NAME, "email")\n\n# Java\nWebElement element = driver.findElement(By.name("email"));',
                },
                {
                    command: 'Class Name Locator',
                    description: 'Find element by class name',
                    usage: 'find_element(By.CLASS_NAME, "class")',
                    example: '# Python\nelement = driver.find_element(By.CLASS_NAME, "btn-primary")\n\n# Java\nWebElement element = driver.findElement(By.className("btn-primary"));',
                },
                {
                    command: 'Tag Name Locator',
                    description: 'Find element by HTML tag',
                    usage: 'find_element(By.TAG_NAME, "tag")',
                    example: '# Python\nelement = driver.find_element(By.TAG_NAME, "input")\n\n# Java\nWebElement element = driver.findElement(By.tagName("input"));',
                },
                {
                    command: 'Link Text Locator',
                    description: 'Find link by exact text',
                    usage: 'find_element(By.LINK_TEXT, "text")',
                    example: '# Python\nelement = driver.find_element(By.LINK_TEXT, "Click Here")\n\n# Java\nWebElement element = driver.findElement(By.linkText("Click Here"));',
                },
                {
                    command: 'Partial Link Text',
                    description: 'Find link by partial text',
                    usage: 'find_element(By.PARTIAL_LINK_TEXT, "text")',
                    example: '# Python\nelement = driver.find_element(By.PARTIAL_LINK_TEXT, "Click")\n\n# Java\nWebElement element = driver.findElement(By.partialLinkText("Click"));',
                },
                {
                    command: 'CSS Selector',
                    description: 'Find element by CSS selector',
                    usage: 'find_element(By.CSS_SELECTOR, "selector")',
                    example: '# Python\nelement = driver.find_element(By.CSS_SELECTOR, "#username")\nelement = driver.find_element(By.CSS_SELECTOR, ".btn-primary")\nelement = driver.find_element(By.CSS_SELECTOR, "input[type=\'text\']")\n\n# Java\nWebElement element = driver.findElement(By.cssSelector("#username"));',
                },
                {
                    command: 'XPath Locator',
                    description: 'Find element by XPath',
                    usage: 'find_element(By.XPATH, "xpath")',
                    example: '# Python\nelement = driver.find_element(By.XPATH, "//input[@id=\'username\']")\nelement = driver.find_element(By.XPATH, "//button[contains(text(), \'Submit\')]")\n\n# Java\nWebElement element = driver.findElement(By.xpath("//input[@id=\'username\']"));',
                },
                {
                    command: 'Find Multiple Elements',
                    description: 'Find all matching elements',
                    usage: 'find_elements(By.*, "value")',
                    example: '# Python\nelements = driver.find_elements(By.CLASS_NAME, "item")\nfor element in elements:\n    print(element.text)\n\n# Java\nList<WebElement> elements = driver.findElements(By.className("item"));',
                },
            ],
        },
        {
            title: 'XPath Strategies',
            commands: [
                {
                    command: 'Absolute XPath',
                    description: 'Full path from root',
                    usage: '/html/body/div/input',
                    example: '//input[@id="username"]\n# Avoid absolute XPath when possible',
                },
                {
                    command: 'Relative XPath',
                    description: 'Path from current node',
                    usage: '//tag[@attribute="value"]',
                    example: '//input[@id="username"]\n//button[@type="submit"]',
                },
                {
                    command: 'XPath by Text',
                    description: 'Find by text content',
                    usage: '//tag[text()="exact"]',
                    example: '//button[text()="Submit"]\n//a[text()="Click Here"]',
                },
                {
                    command: 'XPath Contains',
                    description: 'Partial text match',
                    usage: '//tag[contains(text(), "partial")]',
                    example: '//button[contains(text(), "Submit")]\n//div[contains(@class, "error")]',
                },
                {
                    command: 'XPath Starts With',
                    description: 'Attribute starts with value',
                    usage: '//tag[starts-with(@attr, "value")]',
                    example: '//input[starts-with(@id, "user")]\n//div[starts-with(@class, "btn")]',
                },
                {
                    command: 'XPath Ancestor',
                    description: 'Find ancestor elements',
                    usage: '//tag//ancestor::ancestorTag',
                    example: '//input[@id="username"]//ancestor::form\n//span//ancestor::div[@class="container"]',
                },
                {
                    command: 'XPath Following',
                    description: 'Find following siblings',
                    usage: '//tag//following-sibling::siblingTag',
                    example: '//input[@id="username"]//following-sibling::input\n//h1//following-sibling::p',
                },
                {
                    command: 'XPath Preceding',
                    description: 'Find preceding siblings',
                    usage: '//tag//preceding-sibling::siblingTag',
                    example: '//input[@id="password"]//preceding-sibling::input',
                },
                {
                    command: 'XPath Parent',
                    description: 'Find parent element',
                    usage: '//tag//parent::parentTag',
                    example: '//input[@id="username"]//parent::div\n//span//parent::button',
                },
                {
                    command: 'XPath And/Or',
                    description: 'Multiple conditions',
                    usage: '//tag[@attr1="val1" and @attr2="val2"]',
                    example: '//input[@type="text" and @name="email"]\n//button[@class="btn" or @id="submit"]',
                },
            ],
        },
        {
            title: 'Element Interactions',
            commands: [
                {
                    command: 'Click',
                    description: 'Click on element',
                    usage: 'element.click()',
                    example: '# Python\nbutton = driver.find_element(By.ID, "submit")\nbutton.click()\n\n# Java\nWebElement button = driver.findElement(By.id("submit"));\nbutton.click();',
                },
                {
                    command: 'Send Keys',
                    description: 'Type text into input',
                    usage: 'element.send_keys("text")',
                    example: '# Python\ninput_field = driver.find_element(By.ID, "username")\ninput_field.send_keys("john.doe")\n\n# Java\nWebElement input = driver.findElement(By.id("username"));\ninput.sendKeys("john.doe");',
                },
                {
                    command: 'Clear',
                    description: 'Clear input field',
                    usage: 'element.clear()',
                    example: '# Python\ninput_field.clear()\n\n# Java\ninput.clear();',
                },
                {
                    command: 'Submit',
                    description: 'Submit form',
                    usage: 'element.submit()',
                    example: '# Python\nform = driver.find_element(By.TAG_NAME, "form")\nform.submit()\n\n# Java\nform.submit();',
                },
                {
                    command: 'Get Text',
                    description: 'Get element text content',
                    usage: 'element.text',
                    example: '# Python\ntext = element.text\nprint(text)\n\n# Java\nString text = element.getText();',
                },
                {
                    command: 'Get Attribute',
                    description: 'Get element attribute value',
                    usage: 'element.get_attribute("attr")',
                    example: '# Python\nvalue = element.get_attribute("href")\nclass_name = element.get_attribute("class")\n\n# Java\nString href = element.getAttribute("href");\nString className = element.getAttribute("class");',
                },
                {
                    command: 'Is Displayed',
                    description: 'Check if element is visible',
                    usage: 'element.is_displayed()',
                    example: '# Python\nif element.is_displayed():\n    print("Element is visible")\n\n# Java\nif (element.isDisplayed()) {\n    System.out.println("Element is visible");\n}',
                },
                {
                    command: 'Is Enabled',
                    description: 'Check if element is enabled',
                    usage: 'element.is_enabled()',
                    example: '# Python\nif element.is_enabled():\n    element.click()\n\n# Java\nif (element.isEnabled()) {\n    element.click();\n}',
                },
                {
                    command: 'Is Selected',
                    description: 'Check if checkbox/radio is selected',
                    usage: 'element.is_selected()',
                    example: '# Python\ncheckbox = driver.find_element(By.ID, "agree")\nif not checkbox.is_selected():\n    checkbox.click()\n\n# Java\nif (!checkbox.isSelected()) {\n    checkbox.click();\n}',
                },
            ],
        },
        {
            title: 'Waits',
            commands: [
                {
                    command: 'Implicit Wait',
                    description: 'Set default wait time for all elements',
                    usage: 'driver.implicitly_wait(seconds)',
                    example: '# Python\ndriver.implicitly_wait(10)  # Wait up to 10 seconds\n\n# Java\ndriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));',
                },
                {
                    command: 'Explicit Wait',
                    description: 'Wait for specific condition',
                    usage: 'WebDriverWait + ExpectedConditions',
                    example: '# Python\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nwait = WebDriverWait(driver, 10)\nelement = wait.until(EC.presence_of_element_located((By.ID, "username")))\n\n# Java\nWebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));\nWebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("username")));',
                },
                {
                    command: 'Expected Conditions',
                    description: 'Common wait conditions',
                    usage: 'EC.condition_name()',
                    example: '# Python\n# Element is present\nEC.presence_of_element_located((By.ID, "id"))\n# Element is visible\nEC.visibility_of_element_located((By.ID, "id"))\n# Element is clickable\nEC.element_to_be_clickable((By.ID, "id"))\n# Text is present\nEC.text_to_be_present_in_element((By.ID, "id"), "text")\n# Element is selected\nEC.element_to_be_selected((By.ID, "id"))\n\n# Java\nExpectedConditions.presenceOfElementLocated(By.id("id"))\nExpectedConditions.visibilityOfElementLocated(By.id("id"))\nExpectedConditions.elementToBeClickable(By.id("id"))',
                },
                {
                    command: 'Fluent Wait',
                    description: 'Wait with custom polling and exceptions',
                    usage: 'FluentWait with conditions',
                    example: '# Python\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom selenium.common.exceptions import TimeoutException\n\nwait = WebDriverWait(driver, 10, poll_frequency=1, ignored_exceptions=[TimeoutException])\nelement = wait.until(EC.presence_of_element_located((By.ID, "id")))\n\n# Java\nFluentWait<WebDriver> wait = new FluentWait<>(driver)\n    .withTimeout(Duration.ofSeconds(10))\n    .pollingEvery(Duration.ofSeconds(1))\n    .ignoring(NoSuchElementException.class);',
                },
                {
                    command: 'Sleep',
                    description: 'Hard wait (not recommended)',
                    usage: 'time.sleep(seconds)',
                    example: '# Python\nimport time\ntime.sleep(5)  # Wait 5 seconds\n\n# Java\nThread.sleep(5000);  // Wait 5 seconds',
                },
            ],
        },
        {
            title: 'Browser Navigation',
            commands: [
                {
                    command: 'Get URL',
                    description: 'Navigate to URL',
                    usage: 'driver.get(url)',
                    example: '# Python\ndriver.get("https://example.com")\n\n# Java\ndriver.get("https://example.com");',
                },
                {
                    command: 'Get Current URL',
                    description: 'Get current page URL',
                    usage: 'driver.current_url',
                    example: '# Python\ncurrent_url = driver.current_url\nprint(current_url)\n\n# Java\nString currentUrl = driver.getCurrentUrl();',
                },
                {
                    command: 'Get Title',
                    description: 'Get page title',
                    usage: 'driver.title',
                    example: '# Python\ntitle = driver.title\nprint(title)\n\n# Java\nString title = driver.getTitle();',
                },
                {
                    command: 'Navigate Back',
                    description: 'Go back in browser history',
                    usage: 'driver.back()',
                    example: '# Python\ndriver.back()\n\n# Java\ndriver.navigate().back();',
                },
                {
                    command: 'Navigate Forward',
                    description: 'Go forward in browser history',
                    usage: 'driver.forward()',
                    example: '# Python\ndriver.forward()\n\n# Java\ndriver.navigate().forward();',
                },
                {
                    command: 'Refresh',
                    description: 'Refresh current page',
                    usage: 'driver.refresh()',
                    example: '# Python\ndriver.refresh()\n\n# Java\ndriver.navigate().refresh();',
                },
            ],
        },
        {
            title: 'Window Management',
            commands: [
                {
                    command: 'Get Window Handle',
                    description: 'Get current window handle',
                    usage: 'driver.current_window_handle',
                    example: '# Python\nhandle = driver.current_window_handle\n\n# Java\nString handle = driver.getWindowHandle();',
                },
                {
                    command: 'Get All Window Handles',
                    description: 'Get all open windows',
                    usage: 'driver.window_handles',
                    example: '# Python\nhandles = driver.window_handles\nfor handle in handles:\n    driver.switch_to.window(handle)\n\n# Java\nSet<String> handles = driver.getWindowHandles();\nfor (String handle : handles) {\n    driver.switchTo().window(handle);\n}',
                },
                {
                    command: 'Switch Window',
                    description: 'Switch to specific window',
                    usage: 'driver.switch_to.window(handle)',
                    example: '# Python\nhandles = driver.window_handles\ndriver.switch_to.window(handles[1])\n\n# Java\ndriver.switchTo().window(handle);',
                },
                {
                    command: 'Close Window',
                    description: 'Close current window',
                    usage: 'driver.close()',
                    example: '# Python\ndriver.close()  # Closes current window\ndriver.quit()   # Closes all windows\n\n# Java\ndriver.close();  // Closes current window\ndriver.quit();   // Closes all windows',
                },
                {
                    command: 'Maximize Window',
                    description: 'Maximize browser window',
                    usage: 'driver.maximize_window()',
                    example: '# Python\ndriver.maximize_window()\n\n# Java\ndriver.manage().window().maximize();',
                },
                {
                    command: 'Set Window Size',
                    description: 'Set window dimensions',
                    usage: 'driver.set_window_size(width, height)',
                    example: '# Python\ndriver.set_window_size(1920, 1080)\n\n# Java\ndriver.manage().window().setSize(new Dimension(1920, 1080));',
                },
                {
                    command: 'Get Window Size',
                    description: 'Get window dimensions',
                    usage: 'driver.get_window_size()',
                    example: '# Python\nsize = driver.get_window_size()\nprint(size["width"], size["height"])\n\n# Java\nDimension size = driver.manage().window().getSize();',
                },
            ],
        },
        {
            title: 'Frames & Alerts',
            commands: [
                {
                    command: 'Switch to Frame',
                    description: 'Switch to iframe',
                    usage: 'driver.switch_to.frame()',
                    example: '# Python\n# By index\ndriver.switch_to.frame(0)\n# By element\nframe = driver.find_element(By.ID, "frame-id")\ndriver.switch_to.frame(frame)\n# By name/id\ndriver.switch_to.frame("frame-name")\n\n# Java\n// By index\ndriver.switchTo().frame(0);\n// By element\nWebElement frame = driver.findElement(By.id("frame-id"));\ndriver.switchTo().frame(frame);',
                },
                {
                    command: 'Switch to Default Content',
                    description: 'Switch back to main document',
                    usage: 'driver.switch_to.default_content()',
                    example: '# Python\ndriver.switch_to.default_content()\n\n# Java\ndriver.switchTo().defaultContent();',
                },
                {
                    command: 'Switch to Parent Frame',
                    description: 'Switch to parent frame',
                    usage: 'driver.switch_to.parent_frame()',
                    example: '# Python\ndriver.switch_to.parent_frame()\n\n# Java\ndriver.switchTo().parentFrame();',
                },
                {
                    command: 'Handle Alert',
                    description: 'Interact with JavaScript alerts',
                    usage: 'driver.switch_to.alert',
                    example: '# Python\nalert = driver.switch_to.alert\nalert.accept()  # Click OK\nalert.dismiss()  # Click Cancel\ntext = alert.text  # Get alert text\nalert.send_keys("text")  # Type in prompt\n\n# Java\nAlert alert = driver.switchTo().alert();\nalert.accept();  // Click OK\nalert.dismiss();  // Click Cancel\nString text = alert.getText();  // Get alert text',
                },
            ],
        },
        {
            title: 'Actions Class',
            commands: [
                {
                    command: 'Actions Initialization',
                    description: 'Create Actions object',
                    usage: 'Actions(driver)',
                    example: '# Python\nfrom selenium.webdriver.common.action_chains import ActionChains\n\nactions = ActionChains(driver)\n\n# Java\nimport org.openqa.selenium.interactions.Actions;\n\nActions actions = new Actions(driver);',
                },
                {
                    command: 'Click Action',
                    description: 'Click using Actions',
                    usage: 'actions.click(element)',
                    example: '# Python\nactions.click(element).perform()\n\n# Java\nactions.click(element).perform();',
                },
                {
                    command: 'Double Click',
                    description: 'Double click action',
                    usage: 'actions.double_click(element)',
                    example: '# Python\nactions.double_click(element).perform()\n\n# Java\nactions.doubleClick(element).perform();',
                },
                {
                    command: 'Right Click',
                    description: 'Context menu click',
                    usage: 'actions.context_click(element)',
                    example: '# Python\nactions.context_click(element).perform()\n\n# Java\nactions.contextClick(element).perform();',
                },
                {
                    command: 'Hover',
                    description: 'Mouse hover action',
                    usage: 'actions.move_to_element(element)',
                    example: '# Python\nactions.move_to_element(element).perform()\n\n# Java\nactions.moveToElement(element).perform();',
                },
                {
                    command: 'Drag and Drop',
                    description: 'Drag element to target',
                    usage: 'actions.drag_and_drop(source, target)',
                    example: '# Python\nsource = driver.find_element(By.ID, "source")\ntarget = driver.find_element(By.ID, "target")\nactions.drag_and_drop(source, target).perform()\n\n# Java\nWebElement source = driver.findElement(By.id("source"));\nWebElement target = driver.findElement(By.id("target"));\nactions.dragAndDrop(source, target).perform();',
                },
                {
                    command: 'Key Down/Up',
                    description: 'Press and release keys',
                    usage: 'actions.key_down/up(key)',
                    example: '# Python\nfrom selenium.webdriver.common.keys import Keys\n\nactions.key_down(Keys.CONTROL).send_keys("a").key_up(Keys.CONTROL).perform()\n\n# Java\nimport org.openqa.selenium.Keys;\n\nactions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform();',
                },
                {
                    command: 'Send Keys',
                    description: 'Send keyboard input',
                    usage: 'actions.send_keys(text)',
                    example: '# Python\nactions.send_keys("Hello World").perform()\n\n# Java\nactions.sendKeys("Hello World").perform();',
                },
                {
                    command: 'Build and Perform',
                    description: 'Chain multiple actions',
                    usage: 'actions.action1().action2().perform()',
                    example: '# Python\nactions.move_to_element(element1).click().move_to_element(element2).click().perform()\n\n# Java\nactions.moveToElement(element1).click().moveToElement(element2).click().perform();',
                },
            ],
        },
        {
            title: 'JavaScript Execution',
            commands: [
                {
                    command: 'Execute Script',
                    description: 'Execute JavaScript code',
                    usage: 'driver.execute_script(script)',
                    example: '# Python\ndriver.execute_script("return document.title;")\ndriver.execute_script("window.scrollTo(0, document.body.scrollHeight);")\n\n# Java\nJavascriptExecutor js = (JavascriptExecutor) driver;\njs.executeScript("return document.title;");\njs.executeScript("window.scrollTo(0, document.body.scrollHeight);");',
                },
                {
                    command: 'Scroll to Element',
                    description: 'Scroll element into view',
                    usage: 'execute_script with scrollIntoView',
                    example: '# Python\nelement = driver.find_element(By.ID, "element-id")\ndriver.execute_script("arguments[0].scrollIntoView(true);", element)\n\n# Java\nWebElement element = driver.findElement(By.id("element-id"));\njs.executeScript("arguments[0].scrollIntoView(true);", element);',
                },
                {
                    command: 'Click with JavaScript',
                    description: 'Click using JavaScript',
                    usage: 'execute_script("arguments[0].click()", element)',
                    example: '# Python\nelement = driver.find_element(By.ID, "button")\ndriver.execute_script("arguments[0].click();", element)\n\n# Java\njs.executeScript("arguments[0].click();", element);',
                },
                {
                    command: 'Get Element Value',
                    description: 'Get value using JavaScript',
                    usage: 'execute_script("return arguments[0].value", element)',
                    example: '# Python\nvalue = driver.execute_script("return arguments[0].value;", element)\n\n# Java\nString value = (String) js.executeScript("return arguments[0].value;", element);',
                },
            ],
        },
        {
            title: 'Screenshots',
            commands: [
                {
                    command: 'Take Screenshot',
                    description: 'Capture screenshot',
                    usage: 'driver.save_screenshot(filename)',
                    example: '# Python\ndriver.save_screenshot("screenshot.png")\n\n# Java\nFile screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);\nFileUtils.copyFile(screenshot, new File("screenshot.png"));',
                },
                {
                    command: 'Element Screenshot',
                    description: 'Screenshot of specific element',
                    usage: 'element.screenshot(filename)',
                    example: '# Python\nelement = driver.find_element(By.ID, "element-id")\nelement.screenshot("element.png")\n\n# Java\nWebElement element = driver.findElement(By.id("element-id"));\nFile elementScreenshot = element.getScreenshotAs(OutputType.FILE);',
                },
            ],
        },
        {
            title: 'Cookies',
            commands: [
                {
                    command: 'Get All Cookies',
                    description: 'Retrieve all cookies',
                    usage: 'driver.get_cookies()',
                    example: '# Python\ncookies = driver.get_cookies()\nfor cookie in cookies:\n    print(cookie["name"], cookie["value"])\n\n# Java\nSet<Cookie> cookies = driver.manage().getCookies();\nfor (Cookie cookie : cookies) {\n    System.out.println(cookie.getName() + " = " + cookie.getValue());\n}',
                },
                {
                    command: 'Get Cookie',
                    description: 'Get specific cookie',
                    usage: 'driver.get_cookie(name)',
                    example: '# Python\ncookie = driver.get_cookie("session_id")\nprint(cookie["value"])\n\n# Java\nCookie cookie = driver.manage().getCookieNamed("session_id");',
                },
                {
                    command: 'Add Cookie',
                    description: 'Add new cookie',
                    usage: 'driver.add_cookie(cookie_dict)',
                    example: '# Python\ndriver.add_cookie({"name": "test", "value": "123"})\n\n# Java\nCookie cookie = new Cookie("test", "123");\ndriver.manage().addCookie(cookie);',
                },
                {
                    command: 'Delete Cookie',
                    description: 'Delete specific cookie',
                    usage: 'driver.delete_cookie(name)',
                    example: '# Python\ndriver.delete_cookie("session_id")\n\n# Java\ndriver.manage().deleteCookieNamed("session_id");',
                },
                {
                    command: 'Delete All Cookies',
                    description: 'Clear all cookies',
                    usage: 'driver.delete_all_cookies()',
                    example: '# Python\ndriver.delete_all_cookies()\n\n# Java\ndriver.manage().deleteAllCookies();',
                },
            ],
        },
        {
            title: 'Select Dropdown',
            commands: [
                {
                    command: 'Select by Visible Text',
                    description: 'Select option by text',
                    usage: 'Select(element).select_by_visible_text(text)',
                    example: '# Python\nfrom selenium.webdriver.support.ui import Select\n\nselect = Select(driver.find_element(By.ID, "dropdown"))\nselect.select_by_visible_text("Option 1")\n\n# Java\nimport org.openqa.selenium.support.ui.Select;\n\nSelect select = new Select(driver.findElement(By.id("dropdown")));\nselect.selectByVisibleText("Option 1");',
                },
                {
                    command: 'Select by Value',
                    description: 'Select option by value attribute',
                    usage: 'Select(element).select_by_value(value)',
                    example: '# Python\nselect.select_by_value("value1")\n\n# Java\nselect.selectByValue("value1");',
                },
                {
                    command: 'Select by Index',
                    description: 'Select option by index',
                    usage: 'Select(element).select_by_index(index)',
                    example: '# Python\nselect.select_by_index(0)  # First option\n\n# Java\nselect.selectByIndex(0);  // First option',
                },
                {
                    command: 'Get Selected Option',
                    description: 'Get currently selected option',
                    usage: 'Select(element).first_selected_option',
                    example: '# Python\nselected = select.first_selected_option\nprint(selected.text)\n\n# Java\nWebElement selected = select.getFirstSelectedOption();\nSystem.out.println(selected.getText());',
                },
                {
                    command: 'Get All Options',
                    description: 'Get all dropdown options',
                    usage: 'Select(element).options',
                    example: '# Python\noptions = select.options\nfor option in options:\n    print(option.text)\n\n# Java\nList<WebElement> options = select.getOptions();\nfor (WebElement option : options) {\n    System.out.println(option.getText());\n}',
                },
                {
                    command: 'Deselect',
                    description: 'Deselect option (multi-select)',
                    usage: 'Select(element).deselect_all()',
                    example: '# Python\nselect.deselect_all()\nselect.deselect_by_visible_text("Option 1")\n\n# Java\nselect.deselectAll();\nselect.deselectByVisibleText("Option 1");',
                },
            ],
        },
        {
            title: 'Page Object Model',
            commands: [
                {
                    command: 'Page Class Structure',
                    description: 'Organize page elements and methods',
                    usage: 'class PageName:',
                    example: '# Python\nclass LoginPage:\n    def __init__(self, driver):\n        self.driver = driver\n        self.username = (By.ID, "username")\n        self.password = (By.ID, "password")\n        self.submit = (By.ID, "submit")\n    \n    def login(self, username, password):\n        self.driver.find_element(*self.username).send_keys(username)\n        self.driver.find_element(*self.password).send_keys(password)\n        self.driver.find_element(*self.submit).click()\n\n# Java\npublic class LoginPage {\n    private WebDriver driver;\n    private By username = By.id("username");\n    private By password = By.id("password");\n    private By submit = By.id("submit");\n    \n    public LoginPage(WebDriver driver) {\n        this.driver = driver;\n    }\n    \n    public void login(String username, String password) {\n        driver.findElement(this.username).sendKeys(username);\n        driver.findElement(this.password).sendKeys(password);\n        driver.findElement(this.submit).click();\n    }\n}',
                },
            ],
        },
        {
            title: 'Best Practices',
            commands: [
                {
                    command: 'Use Explicit Waits',
                    description: 'Prefer explicit waits over implicit',
                    usage: 'WebDriverWait with ExpectedConditions',
                    example: '# Always use explicit waits for better reliability',
                },
                {
                    command: 'Page Object Model',
                    description: 'Use POM for maintainability',
                    usage: 'Separate page classes',
                    example: '# Organize code with Page Object Model pattern',
                },
                {
                    command: 'Avoid Hard Waits',
                    description: 'Minimize time.sleep() usage',
                    usage: 'Use WebDriverWait instead',
                    example: '# Use explicit waits instead of sleep',
                },
                {
                    command: 'Unique Locators',
                    description: 'Use stable, unique locators',
                    usage: 'Prefer ID, then CSS/XPath',
                    example: '# Use ID > CSS Selector > XPath',
                },
                {
                    command: 'Clean Up',
                    description: 'Always close browser',
                    usage: 'driver.quit() in finally block',
                    example: '# Python\ntry:\n    # test code\nfinally:\n    driver.quit()\n\n# Java\ntry {\n    // test code\n} finally {\n    driver.quit();\n}',
                },
            ],
        },
    ],
};




