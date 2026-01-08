import React from 'react';
import { ChevronRight, Code, Monitor, Smartphone, Tablet, Globe, CheckCircle, AlertTriangle, Info, Settings, Zap, Shield, Cpu } from 'lucide-react';

const CrossPlatformTesting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Cross-Platform Testing with Selenium
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Comprehensive guide to testing web applications across different operating systems, browsers, and devices using Selenium WebDriver.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
          </div>
          
          <div className="space-y-4 text-slate-700">
            <p>
              Cross-platform testing ensures that web applications function correctly across different operating systems, browsers, and devices. 
              With the diversity of user environments, comprehensive cross-platform testing is essential for delivering consistent user experiences.
            </p>
            <p>
              Selenium WebDriver provides excellent support for cross-platform testing through its WebDriver implementations and cloud testing platforms. 
              This guide covers strategies, tools, and best practices for effective cross-platform testing.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Operating Systems</h3>
              <p className="text-sm text-blue-700">Windows, macOS, Linux testing</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Browser Compatibility</h3>
              <p className="text-sm text-green-700">Chrome, Firefox, Safari, Edge</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Device Testing</h3>
              <p className="text-sm text-purple-700">Desktop, mobile, tablet testing</p>
            </div>
          </div>
        </div>

        {/* Platform Considerations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Cpu className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Platform Considerations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Windows Testing</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Browser Support:</strong> Chrome, Firefox, Edge, IE (legacy)</p>
                <p><strong>File Paths:</strong> Use backslashes, handle permissions</p>
                <p><strong>Special Considerations:</strong> UAC, Windows Defender, registry</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Windows-specific configuration
ChromeOptions options = new ChromeOptions();
options.addArguments("--disable-web-security");
options.addArguments("--allow-running-insecure-content");

// Handle Windows file paths
String filePath = "C:\\\\Users\\\\test\\\\downloads\\\\file.txt";
driver.findElement(By.id("upload")).sendKeys(filePath);`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">macOS Testing</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Browser Support:</strong> Chrome, Firefox, Safari, Edge</p>
                <p><strong>File Paths:</strong> Use forward slashes, handle permissions</p>
                <p><strong>Special Considerations:</strong> Gatekeeper, Keychain, notifications</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// macOS-specific configuration
SafariOptions options = new SafariOptions();
options.setAutomaticInspection(true);

// Handle macOS file paths
String filePath = "/Users/test/Downloads/file.txt";
driver.findElement(By.id("upload")).sendKeys(filePath);

// Handle macOS permissions
Runtime.getRuntime().exec("chmod +x /path/to/script.sh");`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Linux Testing</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Browser Support:</strong> Chrome, Firefox, Edge (beta)</p>
                <p><strong>File Paths:</strong> Use forward slashes, handle permissions</p>
                <p><strong>Special Considerations:</strong> X11 display, dependencies, headless</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Linux-specific configuration
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless");
options.addArguments("--no-sandbox");
options.addArguments("--disable-dev-shm-usage");

// Handle Linux display
System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
WebDriver driver = new ChromeDriver(options);`}
                </pre>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Mobile Platforms</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>iOS Testing:</strong> Safari on iOS, mobile-specific behaviors</p>
                <p><strong>Android Testing:</strong> Chrome on Android, device variations</p>
                <p><strong>Considerations:</strong> Touch events, viewport, performance</p>
              </div>
              <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm text-slate-800">
{`// Mobile-specific configuration
ChromeOptions mobileOptions = new ChromeOptions();
mobileOptions.addArguments("--mobile-emulation");
mobileOptions.addArguments("deviceName=iPhone 12");

Map<String, Object> mobileEmulation = new HashMap<>();
mobileEmulation.put("deviceName", "Pixel 5");
mobileOptions.setExperimentalOption("mobileEmulation", mobileEmulation);`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Browser Testing */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Monitor className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Cross-Browser Testing</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Browser Configuration</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class CrossBrowserTestFactory {
    
    public static WebDriver createDriver(BrowserType browserType) {
        switch (browserType) {
            case CHROME:
                return createChromeDriver();
            case FIREFOX:
                return createFirefoxDriver();
            case SAFARI:
                return createSafariDriver();
            case EDGE:
                return createEdgeDriver();
            default:
                throw new IllegalArgumentException("Unsupported browser: " + browserType);
        }
    }
    
    private static WebDriver createChromeDriver() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-infobars");
        options.addArguments("--disable-notifications");
        
        // Add platform-specific options
        if (System.getProperty("os.name").toLowerCase().contains("linux")) {
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
        }
        
        return new ChromeDriver(options);
    }
    
    private static WebDriver createFirefoxDriver() {
        FirefoxOptions options = new FirefoxOptions();
        
        // Configure Firefox profile
        FirefoxProfile profile = new FirefoxProfile();
        profile.setPreference("browser.download.folderList", 2);
        profile.setPreference("browser.download.dir", System.getProperty("user.home") + "/Downloads");
        profile.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/pdf");
        
        options.setProfile(profile);
        return new FirefoxDriver(options);
    }
    
    private static WebDriver createSafariDriver() {
        SafariOptions options = new SafariOptions();
        options.setAutomaticInspection(true);
        
        // Safari requires additional setup on macOS
        if (!System.getProperty("os.name").toLowerCase().contains("mac")) {
            throw new UnsupportedOperationException("Safari is only available on macOS");
        }
        
        return new SafariDriver(options);
    }
    
    private static WebDriver createEdgeDriver() {
        EdgeOptions options = new EdgeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-web-security");
        
        return new EdgeDriver(options);
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Browser-Specific Handling</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class BrowserSpecificHandler {
    
    public void handleBrowserSpecificActions(WebDriver driver) {
        String browserName = ((Capabilities) ((RemoteWebDriver) driver).getCapabilities())
            .getBrowserName();
        
        switch (browserName.toLowerCase()) {
            case "chrome":
                handleChromeSpecificActions(driver);
                break;
            case "firefox":
                handleFirefoxSpecificActions(driver);
                break;
            case "safari":
                handleSafariSpecificActions(driver);
                break;
            case "msedge":
                handleEdgeSpecificActions(driver);
                break;
        }
    }
    
    private void handleChromeSpecificActions(WebDriver driver) {
        // Chrome DevTools Protocol integration
        ChromeDriver chromeDriver = (ChromeDriver) driver;
        ChromeDevTools devTools = chromeDriver.getDevTools();
        devTools.createSession();
        
        // Enable network domain
        devTools.send(Network.enable(Optional.empty(), Optional.empty(), Optional.empty()));
        
        // Handle Chrome-specific dialogs
        try {
            driver.switchTo().alert().accept();
        } catch (NoAlertPresentException e) {
            // No alert present
        }
    }
    
    private void handleFirefoxSpecificActions(WebDriver driver) {
        // Firefox-specific handling
        FirefoxDriver firefoxDriver = (FirefoxDriver) driver;
        
        // Handle Firefox permissions
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("return navigator.permissions.query({name: 'notifications'})");
    }
    
    private void handleSafariSpecificActions(WebDriver driver) {
        // Safari-specific handling
        // Note: Safari has limited automation capabilities
        
        // Handle file uploads on Safari
        WebElement fileInput = driver.findElement(By.cssSelector("input[type='file']"));
        fileInput.sendKeys("/path/to/file");
        
        // Safari requires explicit wait for page loads
        new WebDriverWait(driver, 30).until(
            webDriver -> ((JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete")
        );
    }
    
    private void handleEdgeSpecificActions(WebDriver driver) {
        // Edge-specific handling
        EdgeDriver edgeDriver = (EdgeDriver) driver;
        
        // Handle Edge-specific security warnings
        try {
            WebElement continueButton = driver.findElement(By.id("proceed-link"));
            if (continueButton.isDisplayed()) {
                continueButton.click();
            }
        } catch (NoSuchElementException e) {
            // No security warning present
        }
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Browser Feature Detection</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class BrowserFeatureDetector {
    
    public static class BrowserCapabilities {
        private boolean supportsWebRTC;
        private boolean supportsWebGL;
        private boolean supportsLocalStorage;
        private boolean supportsSessionStorage;
        private boolean supportsGeolocation;
        private boolean supportsNotifications;
        
        // Getters and setters
    }
    
    public static BrowserCapabilities detectCapabilities(WebDriver driver) {
        BrowserCapabilities capabilities = new BrowserCapabilities();
        JavascriptExecutor js = (JavascriptExecutor) driver;
        
        // Detect WebRTC support
        capabilities.setSupportsWebRTC((Boolean) js.executeScript(
            "return typeof RTCPeerConnection !== 'undefined'"
        ));
        
        // Detect WebGL support
        capabilities.setSupportsWebGL((Boolean) js.executeScript(
            "var canvas = document.createElement('canvas'); " +
            "return !!(window.WebGLRenderingContext && " +
            "(canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));"
        ));
        
        // Detect localStorage support
        capabilities.setSupportsLocalStorage((Boolean) js.executeScript(
            "try { return 'localStorage' in window && window.localStorage !== null; } " +
            "catch(e) { return false; }"
        ));
        
        // Detect sessionStorage support
        capabilities.setSupportsSessionStorage((Boolean) js.executeScript(
            "try { return 'sessionStorage' in window && window.sessionStorage !== null; } " +
            "catch(e) { return false; }"
        ));
        
        // Detect geolocation support
        capabilities.setSupportsGeolocation((Boolean) js.executeScript(
            "return 'geolocation' in navigator"
        ));
        
        // Detect notification support
        capabilities.setSupportsNotifications((Boolean) js.executeScript(
            "return 'Notification' in window"
        ));
        
        return capabilities;
    }
    
    public static void skipTestForUnsupportedFeature(WebDriver driver, String feature) {
        BrowserCapabilities capabilities = detectCapabilities(driver);
        
        switch (feature.toLowerCase()) {
            case "webrtc":
                if (!capabilities.isSupportsWebRTC()) {
                    throw new SkipException("WebRTC not supported in this browser");
                }
                break;
            case "webgl":
                if (!capabilities.isSupportsWebGL()) {
                    throw new SkipException("WebGL not supported in this browser");
                }
                break;
            case "geolocation":
                if (!capabilities.isSupportsGeolocation()) {
                    throw new SkipException("Geolocation not supported in this browser");
                }
                break;
        }
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Design Testing */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Tablet className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Responsive Design Testing</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Viewport Testing</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class ViewportTester {
    
    public static class DeviceViewport {
        private String name;
        private int width;
        private int height;
        private String userAgent;
        
        public DeviceViewport(String name, int width, int height, String userAgent) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.userAgent = userAgent;
        }
        
        // Getters
    }
    
    private static final List<DeviceViewport> VIEWPORTS = Arrays.asList(
        new DeviceViewport("Desktop", 1920, 1080, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"),
        new DeviceViewport("Tablet", 768, 1024, "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15"),
        new DeviceViewport("Mobile", 375, 667, "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15"),
        new DeviceViewport("Large Mobile", 414, 896, "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15")
    );
    
    public void testResponsiveDesign(WebDriver driver, String url) {
        for (DeviceViewport viewport : VIEWPORTS) {
            testViewport(driver, url, viewport);
        }
    }
    
    private void testViewport(WebDriver driver, String url, DeviceViewport viewport) {
        // Set window size
        driver.manage().window().setSize(new Dimension(viewport.getWidth(), viewport.getHeight()));
        
        // Set user agent if needed
        if (viewport.getUserAgent() != null) {
            setUserAgent(driver, viewport.getUserAgent());
        }
        
        // Navigate to page
        driver.get(url);
        
        // Wait for page to load
        new WebDriverWait(driver, 10).until(
            webDriver -> ((JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete")
        );
        
        // Test responsive elements
        testResponsiveElements(driver, viewport);
        
        // Take screenshot for visual comparison
        takeScreenshot(driver, viewport.getName());
        
        // Validate layout
        validateLayout(driver, viewport);
    }
    
    private void testResponsiveElements(WebDriver driver, DeviceViewport viewport) {
        // Test navigation menu
        WebElement navMenu = driver.findElement(By.cssSelector("nav"));
        if (viewport.getWidth() < 768) {
            // Mobile: should have hamburger menu
            Assert.assertTrue(navMenu.findElements(By.cssSelector(".hamburger-menu")).size() > 0,
                "Hamburger menu should be visible on mobile");
        } else {
            // Desktop: should have full menu
            Assert.assertTrue(navMenu.findElements(By.cssSelector(".nav-item")).size() > 0,
                "Full navigation should be visible on desktop");
        }
        
        // Test content layout
        List<WebElement> columns = driver.findElements(By.cssSelector(".content-column"));
        if (viewport.getWidth() >= 1024) {
            // Desktop: should have multiple columns
            Assert.assertTrue(columns.size() > 1, "Multiple columns should be visible on desktop");
        } else {
            // Mobile: should have single column
            Assert.assertTrue(columns.size() <= 1, "Single column layout on mobile");
        }
        
        // Test font sizes
        WebElement mainHeading = driver.findElement(By.cssSelector("h1"));
        String fontSize = mainHeading.getCssValue("font-size");
        Assert.assertTrue(Integer.parseInt(fontSize.replaceAll("[^0-9]", "")) >= 16,
            "Font size should be readable on mobile");
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Mobile Emulation</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class MobileEmulationTester {
    
    public static class MobileDevice {
        private String name;
        private int width;
        private int height;
        private double pixelRatio;
        private String userAgent;
        
        public MobileDevice(String name, int width, int height, double pixelRatio, String userAgent) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.pixelRatio = pixelRatio;
            this.userAgent = userAgent;
        }
        
        // Getters
    }
    
    private static final List<MobileDevice> MOBILE_DEVICES = Arrays.asList(
        new MobileDevice("iPhone 12", 390, 844, 3.0, "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)"),
        new MobileDevice("Samsung Galaxy S21", 384, 854, 2.625, "Mozilla/5.0 (Linux; Android 11; SM-G991B)"),
        new MobileDevice("iPad Pro", 1024, 1366, 2.0, "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)"),
        new MobileDevice("Pixel 5", 393, 851, 2.625, "Mozilla/5.0 (Linux; Android 11; Pixel 5)")
    );
    
    public WebDriver createMobileDriver(MobileDevice device) {
        ChromeOptions options = new ChromeOptions();
        
        // Configure mobile emulation
        Map<String, Object> mobileEmulation = new HashMap<>();
        mobileEmulation.put("deviceMetrics", new HashMap<String, Object>() {{
            put("width", device.getWidth());
            put("height", device.getHeight());
            put("pixelRatio", device.getPixelRatio());
        }});
        
        if (device.getUserAgent() != null) {
            mobileEmulation.put("userAgent", device.getUserAgent());
        }
        
        options.setExperimentalOption("mobileEmulation", mobileEmulation);
        
        // Add mobile-specific options
        options.addArguments("--touch-events");
        options.addArguments("--disable-gpu");
        
        return new ChromeDriver(options);
    }
    
    public void testMobileFeatures(WebDriver driver, MobileDevice device) {
        // Test touch events
        testTouchEvents(driver);
        
        // Test mobile-specific UI elements
        testMobileUI(driver);
        
        // Test viewport meta tag
        testViewportMetaTag(driver);
        
        // Test mobile performance
        testMobilePerformance(driver);
    }
    
    private void testTouchEvents(WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        
        // Check if touch events are supported
        Boolean touchSupported = (Boolean) js.executeScript(
            "return 'ontouchstart' in window || navigator.maxTouchPoints > 0"
        );
        
        Assert.assertTrue(touchSupported, "Touch events should be supported in mobile emulation");
        
        // Test touch gestures
        WebElement touchElement = driver.findElement(By.cssSelector(".touch-element"));
        
        // Simulate tap
        TouchActions touchActions = new TouchActions(driver);
        touchActions.singleTap(touchElement).perform();
        
        // Verify touch response
        Assert.assertTrue(touchElement.getAttribute("class").contains("touched"),
            "Element should respond to touch events");
    }
    
    private void testMobileUI(WebDriver driver) {
        // Test mobile navigation
        WebElement mobileNav = driver.findElement(By.cssSelector(".mobile-navigation"));
        Assert.assertTrue(mobileNav.isDisplayed(), "Mobile navigation should be visible");
        
        // Test hamburger menu functionality
        WebElement hamburgerMenu = driver.findElement(By.cssSelector(".hamburger-menu"));
        hamburgerMenu.click();
        
        WebElement mobileMenu = driver.findElement(By.cssSelector(".mobile-menu"));
        Assert.assertTrue(mobileMenu.isDisplayed(), "Mobile menu should open when hamburger is clicked");
        
        // Test swipe gestures (if applicable)
        testSwipeGestures(driver);
    }
    
    private void testViewportMetaTag(WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        
        // Check viewport meta tag
        String viewportContent = (String) js.executeScript(
            "return document.querySelector('meta[name=viewport]').getAttribute('content')"
        );
        
        Assert.assertNotNull(viewportContent, "Viewport meta tag should be present");
        Assert.assertTrue(viewportContent.contains("width=device-width"),
            "Viewport should be set to device width");
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Testing Platforms */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Cloud Testing Platforms</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. BrowserStack Integration</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class BrowserStackTestManager {
    private static final String BROWSERSTACK_URL = "https://hub-cloud.browserstack.com/wd/hub";
    private static final String USERNAME = System.getProperty("browserstack.username");
    private static final String ACCESS_KEY = System.getProperty("browserstack.accessKey");
    
    public static WebDriver createBrowserStackDriver(BrowserStackCapabilities capabilities) {
        DesiredCapabilities caps = new DesiredCapabilities();
        
        // Set basic capabilities
        caps.setCapability("browserName", capabilities.getBrowser());
        caps.setCapability("browserVersion", capabilities.getBrowserVersion());
        caps.setCapability("os", capabilities.getOs());
        caps.setCapability("osVersion", capabilities.getOsVersion());
        
        // Set BrowserStack specific capabilities
        caps.setCapability("browserstack.user", USERNAME);
        caps.setCapability("browserstack.key", ACCESS_KEY);
        caps.setCapability("project", "Cross-Platform Testing");
        caps.setCapability("build", "Build " + System.currentTimeMillis());
        caps.setCapability("name", capabilities.getTestName());
        
        // Set additional capabilities
        if (capabilities.isDebug()) {
            caps.setCapability("browserstack.debug", true);
        }
        
        if (capabilities.isVideoEnabled()) {
            caps.setCapability("browserstack.video", true);
        }
        
        if (capabilities.getResolution() != null) {
            caps.setCapability("resolution", capabilities.getResolution());
        }
        
        try {
            return new RemoteWebDriver(new URL(BROWSERSTACK_URL), caps);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Invalid BrowserStack URL", e);
        }
    }
    
    public static class BrowserStackCapabilities {
        private String browser;
        private String browserVersion;
        private String os;
        private String osVersion;
        private String testName;
        private boolean debug;
        private boolean videoEnabled;
        private String resolution;
        
        // Builder pattern
        public static class Builder {
            private BrowserStackCapabilities capabilities = new BrowserStackCapabilities();
            
            public Builder browser(String browser) {
                capabilities.browser = browser;
                return this;
            }
            
            public Builder browserVersion(String version) {
                capabilities.browserVersion = version;
                return this;
            }
            
            public Builder os(String os) {
                capabilities.os = os;
                return this;
            }
            
            public Builder osVersion(String version) {
                capabilities.osVersion = version;
                return this;
            }
            
            public Builder testName(String name) {
                capabilities.testName = name;
                return this;
            }
            
            public Builder enableDebug() {
                capabilities.debug = true;
                return this;
            }
            
            public Builder enableVideo() {
                capabilities.videoEnabled = true;
                return this;
            }
            
            public Builder resolution(String resolution) {
                capabilities.resolution = resolution;
                return this;
            }
            
            public BrowserStackCapabilities build() {
                return capabilities;
            }
        }
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Sauce Labs Integration</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class SauceLabsTestManager {
    private static final String SAUCELABS_URL = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub";
    private static final String USERNAME = System.getProperty("saucelabs.username");
    private static final String ACCESS_KEY = System.getProperty("saucelabs.accessKey");
    
    public static WebDriver createSauceLabsDriver(SauceLabsCapabilities capabilities) {
        DesiredCapabilities caps = new DesiredCapabilities();
        
        // Set browser and platform capabilities
        caps.setCapability("browserName", capabilities.getBrowser());
        caps.setCapability("browserVersion", capabilities.getBrowserVersion());
        caps.setCapability("platformName", capabilities.getPlatform());
        
        // Set Sauce Labs specific capabilities
        caps.setCapability("sauce:options", new HashMap<String, Object>() {{
            put("username", USERNAME);
            put("accessKey", ACCESS_KEY);
            put("name", capabilities.getTestName());
            put("build", "Cross-Platform Tests");
            put("tags", capabilities.getTags());
            put("maxDuration", capabilities.getMaxDuration());
            
            if (capabilities.isRecordVideo()) {
                put("recordVideo", true);
            }
            
            if (capabilities.isRecordScreenshots()) {
                put("recordScreenshots", true);
            }
            
            if (capabilities.isCommandTimeout()) {
                put("commandTimeout", "60");
            }
            
            if (capabilities.isIdleTimeout()) {
                put("idleTimeout", "90");
            }
        }});
        
        try {
            return new RemoteWebDriver(new URL(SAUCELABS_URL), caps);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Invalid Sauce Labs URL", e);
        }
    }
    
    public static void updateTestStatus(WebDriver driver, boolean passed) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("sauce:job-result=" + (passed ? "passed" : "failed"));
    }
    
    public static void setTestName(WebDriver driver, String testName) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("sauce:context=" + testName);
    }
    
    public static class SauceLabsCapabilities {
        private String browser;
        private String browserVersion;
        private String platform;
        private String testName;
        private List<String> tags;
        private int maxDuration;
        private boolean recordVideo;
        private boolean recordScreenshots;
        private boolean commandTimeout;
        private boolean idleTimeout;
        
        // Factory methods for common configurations
        public static SauceLabsCapabilities chromeWindows() {
            return new Builder()
                .browser("chrome")
                .browserVersion("latest")
                .platform("Windows 10")
                .build();
        }
        
        public static SauceLabsCapabilities firefoxMac() {
            return new Builder()
                .browser("firefox")
                .browserVersion("latest")
                .platform("macOS 11")
                .build();
        }
        
        public static SauceLabsCapabilities safariIphone() {
            return new Builder()
                .browser("safari")
                .browserVersion("latest")
                .platform("iOS")
                .tags(Arrays.asList("mobile", "ios"))
                .build();
        }
        
        // Builder implementation
        public static class Builder {
            private SauceLabsCapabilities capabilities = new SauceLabsCapabilities();
            
            public Builder browser(String browser) {
                capabilities.browser = browser;
                return this;
            }
            
            public Builder platform(String platform) {
                capabilities.platform = platform;
                return this;
            }
            
            public Builder testName(String name) {
                capabilities.testName = name;
                return this;
            }
            
            public Builder tags(List<String> tags) {
                capabilities.tags = tags;
                return this;
            }
            
            public SauceLabsCapabilities build() {
                if (capabilities.testName == null) {
                    capabilities.testName = "Cross-Platform Test";
                }
                if (capabilities.tags == null) {
                    capabilities.tags = Arrays.asList("cross-platform");
                }
                return capabilities;
            }
        }
    }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Parallel Cross-Platform Testing</h3>
              <div className="bg-slate-50 p-6 rounded-lg">
                <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class ParallelCrossPlatformTest {
    
    @DataProvider(name = "crossPlatformData", parallel = true)
    public Object[][] getCrossPlatformData() {
        return new Object[][] {
            // Windows browsers
            {"chrome", "latest", "Windows 10", "Windows Chrome Test"},
            {"firefox", "latest", "Windows 10", "Windows Firefox Test"},
            {"edge", "latest", "Windows 10", "Windows Edge Test"},
            
            // macOS browsers
            {"chrome", "latest", "macOS 11", "macOS Chrome Test"},
            {"firefox", "latest", "macOS 11", "macOS Firefox Test"},
            {"safari", "latest", "macOS 11", "macOS Safari Test"},
            
            // Linux browsers
            {"chrome", "latest", "Linux", "Linux Chrome Test"},
            {"firefox", "latest", "Linux", "Linux Firefox Test"},
            
            // Mobile devices
            {"chrome", "latest", "Android", "Android Chrome Test"},
            {"safari", "latest", "iOS", "iOS Safari Test"}
        };
    }
    
    @Test(dataProvider = "crossPlatformData")
    public void testCrossPlatformCompatibility(String browser, String version, 
                                            String platform, String testName) {
        WebDriver driver = null;
        try {
            // Create driver for specific platform/browser combination
            driver = createCrossPlatformDriver(browser, version, platform, testName);
            
            // Navigate to test application
            driver.get("https://example.com");
            
            // Perform cross-platform tests
            performBasicFunctionalityTests(driver);
            performResponsiveDesignTests(driver);
            performBrowserSpecificTests(driver, browser);
            
            // Assert test passed
            Assert.assertTrue(true, "Test passed on " + platform + " " + browser);
            
        } catch (Exception e) {
            Assert.fail("Test failed on " + platform + " " + browser + ": " + e.getMessage());
        } finally {
            if (driver != null) {
                // Update test status in cloud platform
                updateCloudTestStatus(driver, true);
                driver.quit();
            }
        }
    }
    
    private WebDriver createCrossPlatformDriver(String browser, String version, 
                                              String platform, String testName) {
        // Use cloud platform for cross-platform testing
        if (shouldUseCloudPlatform()) {
            return createCloudDriver(browser, version, platform, testName);
        } else {
            // Use local drivers for basic testing
            return createLocalDriver(browser);
        }
    }
    
    private void performBasicFunctionalityTests(WebDriver driver) {
        // Test basic functionality that should work across all platforms
        driver.findElement(By.id("login-link")).click();
        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("password")).sendKeys("password");
        driver.findElement(By.id("login-button")).click();
        
        // Verify login success
        Assert.assertTrue(driver.findElement(By.id("welcome-message")).isDisplayed(),
            "Login should work across all platforms");
    }
    
    private void performResponsiveDesignTests(WebDriver driver) {
        // Test responsive design at different viewport sizes
        int[] widths = {320, 768, 1024, 1920};
        
        for (int width : widths) {
            driver.manage().window().setSize(new Dimension(width, 800));
            
            // Wait for layout to adjust
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            // Verify layout is appropriate for viewport
            verifyLayoutForViewport(driver, width);
        }
    }
    
    private void performBrowserSpecificTests(WebDriver driver, String browser) {
        switch (browser.toLowerCase()) {
            case "chrome":
                performChromeSpecificTests(driver);
                break;
            case "firefox":
                performFirefoxSpecificTests(driver);
                break;
            case "safari":
                performSafariSpecificTests(driver);
                break;
            case "edge":
                performEdgeSpecificTests(driver);
                break;
        }
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Cross-Platform Best Practices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Test Matrix Planning</h4>
                  <p className="text-sm text-slate-600">Define comprehensive test coverage matrix based on user analytics</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Environment Isolation</h4>
                  <p className="text-sm text-slate-600">Use separate test environments for different platforms</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Parallel Execution</h4>
                  <p className="text-sm text-sm text-slate-600">Run tests in parallel across multiple platforms to reduce execution time</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Consistent Test Data</h4>
                  <p className="text-sm text-slate-600">Use the same test data across all platforms for consistent results</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Avoid Platform-Specific Code</h4>
                  <p className="text-sm text-slate-600">Minimize platform-specific test logic in favor of cross-platform solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Handle Timing Differences</h4>
                  <p className="text-sm text-slate-600">Account for performance variations across platforms and devices</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Monitor Resource Usage</h4>
                  <p className="text-sm text-slate-600">Track memory and CPU usage to avoid resource exhaustion</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Regular Platform Updates</h4>
                  <p className="text-sm text-slate-600">Keep browsers and operating systems updated in test environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Example */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Complete Cross-Platform Test Suite</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <pre className="text-sm text-slate-800 overflow-x-auto">
{`public class ComprehensiveCrossPlatformTestSuite {
    
    private static final String BASE_URL = "https://example.com";
    private TestDataManager dataManager;
    private ReportGenerator reportGenerator;
    
    @BeforeClass
    public void setUpSuite() {
        dataManager = new TestDataManager();
        reportGenerator = new ReportGenerator();
        
        // Initialize test data
        dataManager.setupTestData();
    }
    
    @Test(groups = "cross-platform", dataProvider = "platformMatrix", threadPoolSize = 5)
    public void testApplicationCrossPlatform(String browser, String version, 
                                           String platform, String deviceType) {
        WebDriver driver = null;
        TestResult result = new TestResult(browser, version, platform, deviceType);
        
        try {
            // Create appropriate driver
            driver = createDriver(browser, version, platform, deviceType);
            
            // Set test name for reporting
            setTestName(driver, String.format("%s %s on %s (%s)", 
                browser, version, platform, deviceType));
            
            // Execute test scenarios
            result.setLoginResult(testLoginScenario(driver));
            result.setNavigationResult(testNavigationScenario(driver));
            result.setResponsiveResult(testResponsiveScenario(driver));
            result.setPerformanceResult(testPerformanceScenario(driver));
            
            // Mark test as passed
            result.setPassed(true);
            updateTestStatus(driver, true);
            
        } catch (Exception e) {
            result.setPassed(false);
            result.setError(e.getMessage());
            updateTestStatus(driver, false);
            Assert.fail("Cross-platform test failed: " + e.getMessage());
        } finally {
            if (driver != null) {
                driver.quit();
            }
            reportGenerator.addResult(result);
        }
    }
    
    @DataProvider(name = "platformMatrix")
    public Object[][] getPlatformMatrix() {
        return new Object[][] {
            // Desktop browsers
            {"chrome", "latest", "Windows 10", "desktop"},
            {"firefox", "latest", "Windows 10", "desktop"},
            {"edge", "latest", "Windows 10", "desktop"},
            {"chrome", "latest", "macOS 11", "desktop"},
            {"firefox", "latest", "macOS 11", "desktop"},
            {"safari", "latest", "macOS 11", "desktop"},
            {"chrome", "latest", "Linux", "desktop"},
            {"firefox", "latest", "Linux", "desktop"},
            
            // Tablet devices
            {"chrome", "latest", "Android", "tablet"},
            {"safari", "latest", "iOS", "tablet"},
            
            // Mobile devices
            {"chrome", "latest", "Android", "mobile"},
            {"safari", "latest", "iOS", "mobile"}
        };
    }
    
    private boolean testLoginScenario(WebDriver driver) {
        try {
            driver.get(BASE_URL + "/login");
            
            // Test login functionality
            WebElement usernameField = driver.findElement(By.id("username"));
            WebElement passwordField = driver.findElement(By.id("password"));
            WebElement loginButton = driver.findElement(By.id("login-button"));
            
            usernameField.sendKeys(dataManager.getTestUser().getUsername());
            passwordField.sendKeys(dataManager.getTestUser().getPassword());
            loginButton.click();
            
            // Verify successful login
            WebDriverWait wait = new WebDriverWait(driver, 10);
            WebElement welcomeMessage = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.id("welcome"))
            );
            
            return welcomeMessage.isDisplayed();
            
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean testNavigationScenario(WebDriver driver) {
        try {
            // Test main navigation
            List<WebElement> navLinks = driver.findElements(By.cssSelector("nav a"));
            
            for (WebElement link : navLinks) {
                String href = link.getAttribute("href");
                if (href != null && !href.isEmpty()) {
                    link.click();
                    
                    // Wait for page load
                    new WebDriverWait(driver, 5).until(
                        webDriver -> ((JavascriptExecutor) webDriver)
                            .executeScript("return document.readyState").equals("complete")
                    );
                    
                    // Verify page loaded successfully
                    Assert.assertFalse(driver.getTitle().contains("Error"),
                        "Navigation failed for link: " + link.getText());
                }
            }
            
            return true;
            
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean testResponsiveScenario(WebDriver driver) {
        try {
            // Test different viewport sizes
            int[] viewportSizes = {320, 768, 1024, 1920};
            
            for (int width : viewportSizes) {
                driver.manage().window().setSize(new Dimension(width, 800));
                Thread.sleep(1000); // Wait for layout adjustment
                
                // Verify responsive elements
                verifyResponsiveLayout(driver, width);
            }
            
            return true;
            
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean testPerformanceScenario(WebDriver driver) {
        try {
            JavascriptExecutor js = (JavascriptExecutor) driver;
            
            // Measure page load time
            long startTime = System.currentTimeMillis();
            driver.get(BASE_URL);
            
            new WebDriverWait(driver, 30).until(
                webDriver -> ((JavascriptExecutor) webDriver)
                    .executeScript("return document.readyState").equals("complete")
            );
            
            long loadTime = System.currentTimeMillis() - startTime;
            
            // Check performance metrics
            Object navigationTiming = js.executeScript(
                "return window.performance.timing"
            );
            
            // Verify performance is acceptable
            return loadTime < 10000; // 10 seconds threshold
            
        } catch (Exception e) {
            return false;
        }
    }
    
    @AfterClass
    public void tearDownSuite() {
        // Generate comprehensive cross-platform report
        CrossPlatformReport report = reportGenerator.generateReport();
        reportGenerator.saveReport(report);
        
        // Clean up test data
        dataManager.cleanupTestData();
        
        // Send notifications if there are failures
        if (report.hasFailures()) {
            notificationService.sendFailureAlert(report);
        }
    }
}`}
            </pre>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Platform Coverage</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Test across major operating systems and browsers
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Include mobile and tablet devices in test matrix
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Use cloud platforms for comprehensive coverage
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Prioritize based on user analytics data
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Strategy</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Implement platform-specific handling when necessary
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Use parallel execution for efficiency
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Monitor and maintain test environments
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Regularly review and update test matrix
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossPlatformTesting;
