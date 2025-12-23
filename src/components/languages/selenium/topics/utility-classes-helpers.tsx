'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Package,
  Code,
  FileText,
  Database,
  Camera,
  Clock,
  Mail,
  Settings,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  Wrench
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function UtilityClassesHelpersComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'utility-classes-helpers',
    title: 'Utility Classes and Helpers',
    explanation: 'Creating reusable utility classes and helper methods',
    category: '21. Framework Design'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-teal-900/20">
      <PageHeader
        title="Utility Classes and Helpers"
        description="Master the art of creating reusable utility classes and helper methods that reduce code duplication and improve maintainability in your test automation framework"
        icon={Package}
        colorTheme="teal"
        badges={[
          { label: 'Reusable', variant: 'secondary' },
          { label: 'Helper Methods', variant: 'secondary' },
          { label: 'Utilities', variant: 'secondary' },
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Utility Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <Package className="w-7 h-7" />
              What are Utility Classes?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding utility classes and helper methods in test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Definition</h4>
                <p className="text-teal-800 dark:text-teal-200">
                  Utility classes are collections of reusable static methods that perform common operations, reducing code duplication and improving maintainability across your test automation framework.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">Benefits</h4>
                <p className="text-cyan-800 dark:text-cyan-200">
                  Promotes code reusability, reduces maintenance overhead, improves readability, provides consistent behavior across tests, and enables easy testing of common functionality.
                </p>
              </div>
            </div>

            {/* Utility Categories */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Common Utility Categories</h5>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Wait Utilities</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Explicit waits, timeouts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">File Utilities</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Excel, CSV, JSON reading</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Camera className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Screenshot Utils</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Capture, save screenshots</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">Email Utilities</h6>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Send, read emails</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <Database className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-900 dark:text-red-100">DB Utilities</h6>
                    <p className="text-sm text-red-800 dark:text-red-200">Database connections</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                    <Settings className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-indigo-900 dark:text-indigo-100">Config Utils</h6>
                    <p className="text-sm text-indigo-800 dark:text-indigo-200">Property management</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Wait Utilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Clock className="w-7 h-7" />
              Wait Utilities
            </CardTitle>
            <CardDescription className="text-base">
              Managing waits and timeouts effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Wait Utility Implementation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class WaitUtils {
    private static WebDriver driver;
    private static WebDriverWait wait;
    
    public static void initialize(WebDriver driver) {
        WaitUtils.driver = driver;
        WaitUtils.wait = new WebDriverWait(driver, 
            Duration.ofSeconds(30));
    }
    
    // Wait for element to be visible
    public static WebElement waitForElementVisible(By locator) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
    
    // Wait for element to be clickable
    public static WebElement waitForElementClickable(By locator) {
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
    
    // Wait for element to be present
    public static WebElement waitForElementPresent(By locator) {
        return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }
    
    // Wait for element to disappear
    public static boolean waitForElementInvisible(By locator) {
        return wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
    }
    
    // Wait for text to be present
    public static boolean waitForTextPresent(By locator, String text) {
        return wait.until(ExpectedConditions.textToBePresentInElementLocated(locator, text));
    }
    
    // Wait for title to contain
    public static boolean waitForTitleContains(String title) {
        return wait.until(ExpectedConditions.titleContains(title));
    }
    
    // Wait for URL to contain
    public static boolean waitForUrlContains(String url) {
        return wait.until(ExpectedConditions.urlContains(url));
    }
    
    // Custom wait with condition
    public static <T> T waitFor(ExpectedCondition<T> condition) {
        return wait.until(condition);
    }
    
    // Wait with custom timeout
    public static WebElement waitForElementVisible(By locator, int timeoutSeconds) {
        WebDriverWait customWait = new WebDriverWait(driver, 
            Duration.ofSeconds(timeoutSeconds));
        return customWait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
    
    // Wait for page load
    public static void waitForPageLoad() {
        wait.until(webDriver -> ((JavascriptExecutor) webDriver)
            .executeScript("return document.readyState")
            .equals("complete"));
    }
    
    // Wait for AJAX completion
    public static void waitForAjaxComplete() {
        wait.until(webDriver -> ((JavascriptExecutor) webDriver)
            .executeScript("return jQuery.active == 0"));
    }
    
    // Sleep (use sparingly)
    public static void sleep(long milliseconds) {
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    // Fluent wait example
    public static WebElement fluentWait(By locator, int timeout, int pollingTime) {
        Wait<WebDriver> fluentWait = new FluentWait<>(driver)
            .withTimeout(Duration.ofSeconds(timeout))
            .pollingEvery(Duration.ofSeconds(pollingTime))
            .ignoring(NoSuchElementException.class)
            .ignoring(StaleElementReferenceException.class);
        
        return fluentWait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: File Utilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <FileText className="w-7 h-7" />
              File Utilities
            </CardTitle>
            <CardDescription className="text-base">
              Reading and writing various file formats
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">File Utility Implementation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class FileUtils {
    // Excel file operations
    public static List<Map<String, String>> readExcel(String filePath, String sheetName) {
        List<Map<String, String>> data = new ArrayList<>();
        
        try (Workbook workbook = WorkbookFactory.create(new File(filePath))) {
            Sheet sheet = workbook.getSheet(sheetName);
            Row headerRow = sheet.getRow(0);
            
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                Map<String, String> rowData = new HashMap<>();
                
                for (int j = 0; j < headerRow.getLastCellNum(); j++) {
                    String header = headerRow.getCell(j).getStringCellValue();
                    String value = getCellValueAsString(row.getCell(j));
                    rowData.put(header, value);
                }
                
                data.add(rowData);
            }
        } catch (Exception e) {
            throw new RuntimeException("Error reading Excel file: " + e.getMessage());
        }
        
        return data;
    }
    
    // CSV file operations
    public static List<Map<String, String>> readCSV(String filePath) {
        List<Map<String, String>> data = new ArrayList<>();
        
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String headerLine = reader.readLine();
            String[] headers = headerLine.split(",");
            
            String line;
            while ((line = reader.readLine()) != null) {
                String[] values = line.split(",");
                Map<String, String> rowData = new LinkedHashMap<>();
                
                for (int i = 0; i < headers.length; i++) {
                    rowData.put(headers[i].trim(), 
                               i < values.length ? values[i].trim() : "");
                }
                
                data.add(rowData);
            }
        } catch (IOException e) {
            throw new RuntimeException("Error reading CSV file: " + e.getMessage());
        }
        
        return data;
    }
    
    // JSON file operations
    public static Map<String, Object> readJSON(String filePath) {
        ObjectMapper mapper = new ObjectMapper();
        
        try {
            return mapper.readValue(new File(filePath), Map.class);
        } catch (IOException e) {
            throw new RuntimeException("Error reading JSON file: " + e.getMessage());
        }
    }
    
    // Properties file operations
    public static Properties readProperties(String filePath) {
        Properties properties = new Properties();
        
        try (InputStream input = new FileInputStream(filePath)) {
            properties.load(input);
        } catch (IOException e) {
            throw new RuntimeException("Error reading properties file: " + e.getMessage());
        }
        
        return properties;
    }
    
    // Write to Excel
    public static void writeExcel(String filePath, String sheetName, 
                                 List<Map<String, String>> data) {
        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet(sheetName);
            
            // Create header row
            if (!data.isEmpty()) {
                Row headerRow = sheet.createRow(0);
                Map<String, String> firstRow = data.get(0);
                int colIndex = 0;
                
                for (String header : firstRow.keySet()) {
                    Cell cell = headerRow.createCell(colIndex++);
                    cell.setCellValue(header);
                }
                
                // Create data rows
                for (int i = 0; i < data.size(); i++) {
                    Row row = sheet.createRow(i + 1);
                    Map<String, String> rowData = data.get(i);
                    colIndex = 0;
                    
                    for (String value : rowData.values()) {
                        Cell cell = row.createCell(colIndex++);
                        cell.setCellValue(value);
                    }
                }
            }
            
            // Write to file
            try (FileOutputStream outputStream = new FileOutputStream(filePath)) {
                workbook.write(outputStream);
            }
        } catch (IOException e) {
            throw new RuntimeException("Error writing Excel file: " + e.getMessage());
        }
    }
    
    // Helper method to get cell value as string
    private static String getCellValueAsString(Cell cell) {
        if (cell == null) return "";
        
        switch (cell.getCellType()) {
            case STRING: return cell.getStringCellValue();
            case NUMERIC: return String.valueOf(cell.getNumericCellValue());
            case BOOLEAN: return String.valueOf(cell.getBooleanCellValue());
            case FORMULA: return cell.getCellFormula();
            default: return "";
        }
    }
    
    // Generate random test data
    public static String generateRandomEmail() {
        return "test_" + System.currentTimeMillis() + "@example.com";
    }
    
    public static String generateRandomString(int length) {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        
        for (int i = 0; i < length; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        
        return sb.toString();
    }
    
    public static int generateRandomNumber(int min, int max) {
        return new Random().nextInt(max - min + 1) + min;
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Screenshot Utilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Camera className="w-7 h-7" />
              Screenshot Utilities
            </CardTitle>
            <CardDescription className="text-base">
              Capturing and managing screenshots
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Screenshot Utility Implementation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class ScreenshotUtils {
    private static WebDriver driver;
    private static String screenshotPath;
    
    public static void initialize(WebDriver driver, String screenshotPath) {
        ScreenshotUtils.driver = driver;
        ScreenshotUtils.screenshotPath = screenshotPath;
        
        // Create screenshot directory if it doesn't exist
        File directory = new File(screenshotPath);
        if (!directory.exists()) {
            directory.mkdirs();
        }
    }
    
    // Take screenshot and return file path
    public static String takeScreenshot(String fileName) {
        try {
            // Generate timestamp
            String timestamp = new SimpleDateFormat(
                "yyyyMMdd_HHmmss").format(new Date());
            String fullFileName = fileName + "_" + timestamp + ".png";
            
            // Take screenshot
            File screenshot = ((TakesScreenshot) driver)
                .getScreenshotAs(OutputType.FILE);
            
            // Copy to destination
            String filePath = screenshotPath + File.separator + fullFileName;
            Files.copy(screenshot.toPath(), 
                      new File(filePath).toPath(), 
                      StandardCopyOption.REPLACE_EXISTING);
            
            return filePath;
        } catch (IOException e) {
            throw new RuntimeException("Error taking screenshot: " + e.getMessage());
        }
    }
    
    // Take screenshot on test failure
    public static String takeScreenshotOnFailure(String testName) {
        return takeScreenshot("FAILURE_" + testName);
    }
    
    // Take screenshot for documentation
    public static String takeScreenshotForDoc(String stepName) {
        return takeScreenshot("DOC_" + stepName);
    }
    
    // Capture full page screenshot
    public static String captureFullPageScreenshot(String fileName) {
        try {
            // Get page dimensions
            JavascriptExecutor js = (JavascriptExecutor) driver;
            Long pageHeight = (Long) js.executeScript(
                "return Math.max(document.body.scrollHeight, " +
                "document.body.offsetHeight, " +
                "document.documentElement.clientHeight, " +
                "document.documentElement.scrollHeight, " +
                "document.documentElement.offsetHeight);");
            
            // Set window size to capture full page
            Dimension originalSize = driver.manage().window().getSize();
            driver.manage().window().setSize(new Dimension(1920, pageHeight.intValue()));
            
            // Take screenshot
            String filePath = takeScreenshot(fileName);
            
            // Restore original window size
            driver.manage().window().setSize(originalSize);
            
            return filePath;
        } catch (Exception e) {
            throw new RuntimeException("Error capturing full page screenshot: " + e.getMessage());
        }
    }
    
    // Capture element screenshot
    public static String captureElementScreenshot(By locator, String fileName) {
        try {
            WebElement element = driver.findElement(locator);
            File screenshot = element.getScreenshotAs(OutputType.FILE);
            
            String timestamp = new SimpleDateFormat(
                "yyyyMMdd_HHmmss").format(new Date());
            String fullFileName = fileName + "_" + timestamp + ".png";
            String filePath = screenshotPath + File.separator + fullFileName;
            
            Files.copy(screenshot.toPath(), 
                      new File(filePath).toPath(), 
                      StandardCopyOption.REPLACE_EXISTING);
            
            return filePath;
        } catch (Exception e) {
            throw new RuntimeException("Error capturing element screenshot: " + e.getMessage());
        }
    }
    
    // Add screenshot to report
    public static void addScreenshotToReport(String filePath, String description) {
        // Implementation depends on reporting framework
        // For ExtentReports:
        // ExtentTestManager.getTest().addScreenCaptureFromPath(filePath, description);
    }
    
    // Clean up old screenshots
    public static void cleanupOldScreenshots(int daysToKeep) {
        File directory = new File(screenshotPath);
        if (directory.exists()) {
            long cutoffTime = System.currentTimeMillis() - 
                             (daysToKeep * 24L * 60L * 60L * 1000L);
            
            Arrays.stream(directory.listFiles())
                  .filter(file -> file.lastModified() < cutoffTime)
                  .forEach(File::delete);
        }
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Email Utilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Mail className="w-7 h-7" />
              Email Utilities
            </CardTitle>
            <CardDescription className="text-base">
              Sending and reading emails for test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Email Utility Implementation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class EmailUtils {
    private static String smtpHost;
    private static int smtpPort;
    private static String username;
    private static String password;
    
    public static void initialize(String smtpHost, int smtpPort, 
                                 String username, String password) {
        EmailUtils.smtpHost = smtpHost;
        EmailUtils.smtpPort = smtpPort;
        EmailUtils.username = username;
        EmailUtils.password = password;
    }
    
    // Send email with attachment
    public static void sendEmail(String to, String subject, String body, 
                                String... attachmentPaths) {
        Properties props = new Properties();
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.port", smtpPort);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
        
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, 
                                  InternetAddress.parse(to));
            message.setSubject(subject);
            
            // Create multipart message
            MimeMultipart multipart = new MimeMultipart();
            
            // Add body part
            MimeBodyPart bodyPart = new MimeBodyPart();
            bodyPart.setContent(body, "text/html");
            multipart.addBodyPart(bodyPart);
            
            // Add attachments
            for (String attachmentPath : attachmentPaths) {
                MimeBodyPart attachmentPart = new MimeBodyPart();
                attachmentPart.attachFile(new File(attachmentPath));
                multipart.addBodyPart(attachmentPart);
            }
            
            message.setContent(multipart);
            Transport.send(message);
            
        } catch (Exception e) {
            throw new RuntimeException("Error sending email: " + e.getMessage());
        }
    }
    
    // Send test report email
    public static void sendTestReport(String to, String reportPath) {
        String subject = "Test Execution Report - " + 
                        new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                            .format(new Date());
        String body = "<html><body>" +
                     "<h2>Test Execution Report</h2>" +
                     "<p>Please find the detailed test execution report attached.</p>" +
                     "<p>Execution Time: " + new Date() + "</p>" +
                     "</body></html>";
        
        sendEmail(to, subject, body, reportPath);
    }
    
    // Read emails from Gmail
    public static List<EmailMessage> readGmailEmails(String username, String password, 
                                                     String subjectFilter) {
        List<EmailMessage> emails = new ArrayList<>();
        
        Properties props = new Properties();
        props.put("mail.store.protocol", "imaps");
        props.put("mail.imaps.host", "imap.gmail.com");
        props.put("mail.imaps.port", "993");
        props.put("mail.imaps.ssl.enable", "true");
        
        try {
            Session session = Session.getInstance(props);
            Store store = session.getStore("imaps");
            store.connect(username, password);
            
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);
            
            Message[] messages = inbox.search(
                new SubjectTerm(subjectFilter));
            
            for (Message message : messages) {
                EmailMessage email = new EmailMessage();
                email.setSubject(message.getSubject());
                email.setFrom(message.getFrom()[0].toString());
                email.setSentDate(message.getSentDate());
                
                // Get email body
                if (message.isMimeType("text/plain")) {
                    email.setBody(message.getContent().toString());
                } else if (message.isMimeType("multipart/*")) {
                    Multipart multipart = (Multipart) message.getContent();
                    for (int i = 0; i < multipart.getCount(); i++) {
                        BodyPart bodyPart = multipart.getBodyPart(i);
                        if (bodyPart.isMimeType("text/plain")) {
                            email.setBody(bodyPart.getContent().toString());
                            break;
                        }
                    }
                }
                
                emails.add(email);
            }
            
            inbox.close(false);
            store.close();
            
        } catch (Exception e) {
            throw new RuntimeException("Error reading emails: " + e.getMessage());
        }
        
        return emails;
    }
    
    // Wait for email with specific subject
    public static EmailMessage waitForEmail(String username, String password, 
                                           String subjectFilter, int timeoutSeconds) {
        long startTime = System.currentTimeMillis();
        long timeout = timeoutSeconds * 1000;
        
        while (System.currentTimeMillis() - startTime < timeout) {
            List<EmailMessage> emails = readGmailEmails(username, password, subjectFilter);
            
            if (!emails.isEmpty()) {
                return emails.get(0); // Return the latest email
            }
            
            try {
                Thread.sleep(5000); // Wait 5 seconds before retrying
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        
        throw new RuntimeException("Email not received within timeout period");
    }
    
    // Email message data class
    public static class EmailMessage {
        private String subject;
        private String from;
        private Date sentDate;
        private String body;
        
        // Getters and setters
        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }
        public String getFrom() { return from; }
        public void setFrom(String from) { this.from = from; }
        public Date getSentDate() { return sentDate; }
        public void setSentDate(Date sentDate) { this.sentDate = sentDate; }
        public String getBody() { return body; }
        public void setBody(String body) { this.body = body; }
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Star className="w-7 h-7" />
              Utility Classes Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Best Practices ✅
              </h4>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use static methods for stateless utilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper error handling and logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Provide clear method documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use meaningful method and parameter names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Write unit tests for utility methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Handle edge cases and null values</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create utility classes with state</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid overly complex utility methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid hardcoding values in utilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create utility classes for business logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid Thread.sleep() in wait utilities</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/30">
          <Package className="h-4 w-4 text-teal-600" />
          <AlertTitle className="text-teal-900 dark:text-teal-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-teal-800 dark:text-teal-200">
            <ul className="space-y-2 mt-2">
              <li>• Utility classes promote code reusability and reduce duplication</li>
              <li>• Use static methods for stateless utility operations</li>
              <li>• Implement proper error handling and logging in utilities</li>
              <li>• Design utilities to be flexible and configurable</li>
              <li>• Always write unit tests for utility methods</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Topic Navigation */}
        <TopicNavigation 
          currentTopic={currentTopic}
          language={language}
        />
      </div>
    </div>
  );
}
