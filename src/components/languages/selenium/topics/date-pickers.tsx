'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Calendar,
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
  Clock,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CalendarRange
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function DatePickersComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [dateState, setDateState] = React.useState({
    dateInput: '',
    calendarOpen: false,
    selectedDate: '',
    finalDate: ''
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

  const simulateDatePickerInteraction = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setDateState({
      dateInput: '',
      calendarOpen: false,
      selectedDate: '',
      finalDate: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findInput: 10, clickInput: 13, waitCalendar: 16, selectDate: 19, confirmDate: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { nav: 6, findInput: 9, clickInput: 12, waitCalendar: 15, selectDate: 18, confirmDate: 21, quit: 24 };
      } else {
        return { nav: 3, findInput: 6, clickInput: 9, waitCalendar: 12, selectDate: 15, confirmDate: 18, quit: 21 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      input: selectedLanguage === 'python' ? 'date_input' : 'dateInput',
      calendar: selectedLanguage === 'python' ? 'calendar' : 'calendar',
      date15: selectedLanguage === 'python' ? 'date_15' : 'date15'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Date Picker interaction demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with date picker...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📅 Finding date input field...', delay: 800 * multiplier, element: null, codeLine: lines.findInput },
      { step: 3, log: '✅ Found date input: <input type="date" id="birthday">', delay: 700 * multiplier, element: 'birthday', codeLine: lines.findInput, variable: { name: varNames.input, value: '<WebElement: input#birthday>' } },
      { step: 4, log: '🖱️  Clicking date input to open calendar...', delay: 1000 * multiplier, element: 'birthday', action: 'openCalendar', codeLine: lines.clickInput, variable: { name: varNames.input, value: 'clicked' } },
      { step: 5, log: '📆 Waiting for calendar popup to appear...', delay: 800 * multiplier, element: 'calendar-popup', codeLine: lines.waitCalendar, variable: { name: varNames.calendar, value: '<CalendarPopup>' } },
      { step: 6, log: '🔍 Finding date "15" in calendar...', delay: 700 * multiplier, element: 'calendar-popup', codeLine: lines.selectDate, variable: { name: varNames.calendar, value: 'visible' } },
      { step: 7, log: '✅ Found date 15: <td class="day">15</td>', delay: 700 * multiplier, element: 'date-15', codeLine: lines.selectDate, variable: { name: varNames.date15, value: '<WebElement: td.day>' } },
      { step: 8, log: '🖱️  Clicking date 15 to select it...', delay: 1000 * multiplier, element: 'date-15', action: 'selectDate', codeLine: lines.selectDate, variable: { name: varNames.date15, value: 'clicked' } },
      { step: 9, log: '✅ Date selected: 2024-01-15', delay: 700 * multiplier, element: 'birthday', action: 'confirmDate', codeLine: lines.confirmDate, variable: { name: 'selectedDate', value: '2024-01-15' } },
      { step: 10, log: '🎉 Date picker interaction completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'openCalendar') {
        setDateState(prev => ({ ...prev, calendarOpen: true }));
      } else if (action === 'selectDate') {
        setDateState(prev => ({ ...prev, selectedDate: '15' }));
      } else if (action === 'confirmDate') {
        setDateState(prev => ({ ...prev, finalDate: '2024-01-15', calendarOpen: false }));
      }
    }

    setIsRunning(false);
  };

  const getDatePickerCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page with date picker',
        'driver.get("https://www.example.com/booking")',
        '',
        '# 📅 Find the date input field',
        'date_input = driver.find_element(By.ID, "birthday")',
        'date_input.click()  # 🖱️ Open calendar popup',
        '',
        '# 📆 Wait for calendar to appear',
        'wait = WebDriverWait(driver, 10)',
        'calendar = wait.until(EC.visibility_of_element_located(',
        '    (By.CLASS_NAME, "calendar-popup")',
        '))',
        '',
        '# 🔍 Find and click specific date',
        'date_15 = calendar.find_element(By.XPATH, "//td[text()=\'15\']")',
        'date_15.click()  # 🖱️ Select date 15',
        '',
        '# ✅ Verify selected date',
        'selected_date = date_input.get_attribute("value")',
        'print(f"Selected date: {selected_date}")',
        '',
        '# Close the browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.support.ui.WebDriverWait;',
        'import org.openqa.selenium.support.ui.ExpectedConditions;',
        'import java.time.Duration;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/booking");',
        '',
        '// 📅 Find the date input field',
        'WebElement dateInput = driver.findElement(By.id("birthday"));',
        'dateInput.click(); // 🖱️ Open calendar popup',
        '',
        '// 📆 Wait for calendar to appear',
        'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
        'WebElement calendar = wait.until(',
        '    ExpectedConditions.visibilityOfElementLocated(By.className("calendar-popup"))',
        ');',
        '',
        '// 🔍 Find and click specific date',
        'WebElement date15 = calendar.findElement(By.xpath("//td[text()=\'15\']"));',
        'date15.click(); // 🖱️ Select date 15',
        '',
        '// ✅ Verify selected date',
        'String selectedDate = dateInput.getAttribute("value");',
        'System.out.println("Selected date: " + selectedDate);',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, until } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/booking\');',
        '',
        '// 📅 Find the date input field',
        'let dateInput = await driver.findElement(By.id(\'birthday\'));',
        'await dateInput.click(); // 🖱️ Open calendar popup',
        '',
        '// 📆 Wait for calendar to appear',
        'let calendar = await driver.wait(',
        '    until.elementLocated(By.className(\'calendar-popup\')), 10000',
        ');',
        '',
        '// 🔍 Find and click specific date',
        'let date15 = await calendar.findElement(By.xpath("//td[text()=\'15\']"));',
        'await date15.click(); // 🖱️ Select date 15',
        '',
        '// ✅ Verify selected date',
        'let selectedDate = await dateInput.getAttribute(\'value\');',
        'console.log(\'Selected date:\', selectedDate);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const datePickerExample = {
    python: getDatePickerCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/booking");

// 📅 Find the date input field
WebElement dateInput = driver.findElement(By.id("birthday"));
dateInput.click(); // 🖱️ Open calendar popup

// 📆 Wait for calendar to appear
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement calendar = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.className("calendar-popup"))
);

// 🔍 Find and click specific date
WebElement date15 = calendar.findElement(By.xpath("//td[text()='15']"));
date15.click(); // 🖱️ Select date 15

// ✅ Verify selected date
String selectedDate = dateInput.getAttribute("value");
System.out.println("Selected date: " + selectedDate);

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/booking');

// 📅 Find the date input field
let dateInput = await driver.findElement(By.id('birthday'));
await dateInput.click(); // 🖱️ Open calendar popup

// 📆 Wait for calendar to appear
let calendar = await driver.wait(
    until.elementLocated(By.className('calendar-popup')), 10000
);

// 🔍 Find and click specific date
let date15 = await calendar.findElement(By.xpath("//td[text()='15']"));
await date15.click(); // 🖱️ Select date 15

// ✅ Verify selected date
let selectedDate = await dateInput.getAttribute('value');
console.log('Selected date:', selectedDate);

await driver.quit();`,
  };

  const advancedDatePickerCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://www.example.com/booking")

# 1. Handle different date picker types
try:
    # Modern HTML5 date input
    date_input = driver.find_element(By.CSS_SELECTOR, "input[type='date']")
    date_input.send_keys("2024-12-25")  # Direct input
    print("Used HTML5 date input")
except:
    try:
        # jQuery UI Datepicker
        date_input = driver.find_element(By.ID, "datepicker")
        date_input.click()
        
        # Wait for calendar
        wait = WebDriverWait(driver, 10)
        calendar = wait.until(EC.visibility_of_element_located((By.ID, "ui-datepicker-div")))
        
        # Navigate to specific month/year
        driver.execute_script("$('.ui-datepicker-year').val(2024).change()")
        driver.execute_script("$('.ui-datepicker-month').val(11).change()")
        
        # Select specific date
        date_25 = calendar.find_element(By.XPATH, "//a[text()='25']")
        date_25.click()
        print("Used jQuery UI datepicker")
        
    except:
        # Custom calendar implementation
        date_input = driver.find_element(By.CLASS_NAME, "custom-date")
        date_input.click()
        
        # Handle custom calendar
        calendar = driver.find_element(By.CLASS_NAME, "custom-calendar")
        
        # Navigate months
        next_month = calendar.find_element(By.CLASS_NAME, "next-month")
        next_month.click()
        
        # Select date
        dates = calendar.find_elements(By.CLASS_NAME, "calendar-day")
        for date in dates:
            if date.text == "15":
                date.click()
                break
        print("Used custom calendar")

# 2. Date range selection
start_date = driver.find_element(By.ID, "start-date")
end_date = driver.find_element(By.ID, "end-date")

start_date.click()
# Select start date
driver.find_element(By.XPATH, "//td[text()='01']").click()

end_date.click()
# Select end date  
driver.find_element(By.XPATH, "//td[text()='07']").click()

# 3. Validate date format
selected_start = start_date.get_attribute("value")
selected_end = end_date.get_attribute("value")

import re
date_pattern = r'^\\d{4}-\\d{2}-\\d{2}$'
if re.match(date_pattern, selected_start):
    print(f"Valid start date: {selected_start}")
else:
    print(f"Invalid date format: {selected_start}")

# 4. Handle disabled dates
disabled_dates = driver.find_elements(By.CLASS_NAME, "disabled-date")
print(f"Found {len(disabled_dates)} disabled dates")

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;
import java.time.Duration;
import java.util.List;
import java.util.regex.Pattern;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/booking");

// 1. Handle different date picker types
try {
    // Modern HTML5 date input
    WebElement dateInput = driver.findElement(By.cssSelector("input[type='date']"));
    dateInput.sendKeys("2024-12-25"); // Direct input
    System.out.println("Used HTML5 date input");
} catch (Exception e) {
    try {
        // jQuery UI Datepicker
        WebElement dateInput = driver.findElement(By.id("datepicker"));
        dateInput.click();
        
        // Wait for calendar
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement calendar = wait.until(
            ExpectedConditions.visibilityOfElementLocated(By.id("ui-datepicker-div"))
        );
        
        // Navigate to specific month/year
        ((JavascriptExecutor)driver).executeScript("$('.ui-datepicker-year').val(2024).change()");
        ((JavascriptExecutor)driver).executeScript("$('.ui-datepicker-month').val(11).change()");
        
        // Select specific date
        WebElement date25 = calendar.findElement(By.xpath("//a[text()='25']"));
        date25.click();
        System.out.println("Used jQuery UI datepicker");
        
    } catch (Exception ex) {
        // Custom calendar implementation
        WebElement dateInput = driver.findElement(By.className("custom-date"));
        dateInput.click();
        
        // Handle custom calendar
        WebElement calendar = driver.findElement(By.className("custom-calendar"));
        
        // Navigate months
        WebElement nextMonth = calendar.findElement(By.className("next-month"));
        nextMonth.click();
        
        // Select date
        List<WebElement> dates = calendar.findElements(By.className("calendar-day"));
        for (WebElement date : dates) {
            if (date.getText().equals("15")) {
                date.click();
                break;
            }
        }
        System.out.println("Used custom calendar");
    }
}

// 2. Date range selection
WebElement startDate = driver.findElement(By.id("start-date"));
WebElement endDate = driver.findElement(By.id("end-date"));

startDate.click();
// Select start date
driver.findElement(By.xpath("//td[text()='01']")).click();

endDate.click();
// Select end date  
driver.findElement(By.xpath("//td[text()='07']")).click();

// 3. Validate date format
String selectedStart = startDate.getAttribute("value");
String selectedEnd = endDate.getAttribute("value");

Pattern datePattern = Pattern.compile("^\\\\d{4}-\\\\d{2}-\\\\d{2}$");
if (datePattern.matcher(selectedStart).matches()) {
    System.out.println("Valid start date: " + selectedStart);
} else {
    System.out.println("Invalid date format: " + selectedStart);
}

// 4. Handle disabled dates
List<WebElement> disabledDates = driver.findElements(By.className("disabled-date"));
System.out.println("Found " + disabledDates.size() + " disabled dates");

driver.quit();`,
    javascript: `const { Builder, By, until, Key } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/booking');

// 1. Handle different date picker types
try {
    // Modern HTML5 date input
    let dateInput = await driver.findElement(By.css('input[type="date"]'));
    await dateInput.sendKeys('2024-12-25'); // Direct input
    console.log('Used HTML5 date input');
} catch (error) {
    try {
        // jQuery UI Datepicker
        let dateInput = await driver.findElement(By.id('datepicker'));
        await dateInput.click();
        
        // Wait for calendar
        let calendar = await driver.wait(
            until.elementLocated(By.id('ui-datepicker-div')), 10000
        );
        
        // Navigate to specific month/year
        await driver.executeScript('$(".ui-datepicker-year").val(2024).change()');
        await driver.executeScript('$(".ui-datepicker-month").val(11).change()');
        
        // Select specific date
        let date25 = await calendar.findElement(By.xpath("//a[text()='25']"));
        await date25.click();
        console.log('Used jQuery UI datepicker');
        
    } catch (error) {
        // Custom calendar implementation
        let dateInput = await driver.findElement(By.className('custom-date'));
        await dateInput.click();
        
        // Handle custom calendar
        let calendar = await driver.findElement(By.className('custom-calendar'));
        
        // Navigate months
        let nextMonth = await calendar.findElement(By.className('next-month'));
        await nextMonth.click();
        
        // Select date
        let dates = await calendar.findElements(By.className('calendar-day'));
        for (let date of dates) {
            let text = await date.getText();
            if (text === '15') {
                await date.click();
                break;
            }
        }
        console.log('Used custom calendar');
    }
}

// 2. Date range selection
let startDate = await driver.findElement(By.id('start-date'));
let endDate = await driver.findElement(By.id('end-date'));

await startDate.click();
// Select start date
await driver.findElement(By.xpath("//td[text()='01']")).click();

await endDate.click();
// Select end date  
await driver.findElement(By.xpath("//td[text()='07']")).click();

// 3. Validate date format
let selectedStart = await startDate.getAttribute('value');
let selectedEnd = await endDate.getAttribute('value');

const datePattern = /^\\\\d{4}-\\\\d{2}-\\\\d{2}$/;
if (datePattern.test(selectedStart)) {
    console.log('Valid start date:', selectedStart);
} else {
    console.log('Invalid date format:', selectedStart);
}

// 4. Handle disabled dates
let disabledDates = await driver.findElements(By.className('disabled-date'));
console.log('Found ' + disabledDates.length + ' disabled dates');

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Calendar}
        category="Selenium · Advanced Locators"
        title="Date Pickers"
        description="Master date picker interaction using explicit waits, calendar navigation, and date selection techniques"
        colorTheme="blue"
        badges={[
          { label: 'Form Elements', variant: 'success' },
          { label: 'Calendar UI', variant: 'info' },
          { label: 'Date Handling', variant: 'secondary' },
        ]}
      />

      {/* Why Date Pickers */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Understanding Date Pickers
          </CardTitle>
          <CardDescription>Interactive calendar components for date selection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Calendar Popup</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Interactive calendar that appears when clicking date input
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">Dynamic Loading</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Calendar loads dynamically, requires explicit waits
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarRange className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Date Range</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Support for selecting date ranges and multiple dates
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-lg border-2 border-pink-200 dark:border-pink-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-1">Navigation</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Month/year navigation with arrow buttons
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
            <Code className="w-5 h-5 text-blue-600" />
            Date Picker Interaction Patterns
          </CardTitle>
          <CardDescription>
            Explicit waits and calendar navigation techniques
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

          {/* Code Display */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Click date input to open calendar
date_input = driver.find_element(By.ID, "birthday")
date_input.click()

# Wait for calendar and select date
wait = WebDriverWait(driver, 10)
calendar = wait.until(EC.visibility_of_element_located(
    (By.CLASS_NAME, "calendar-popup")
))
date_15 = calendar.find_element(By.XPATH, "//td[text()='15']")
date_15.click()`}
                {selectedLanguage === 'java' && `// Click date input to open calendar
WebElement dateInput = driver.findElement(By.id("birthday"));
dateInput.click();

// Wait for calendar and select date
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement calendar = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.className("calendar-popup"))
);
WebElement date15 = calendar.findElement(By.xpath("//td[text()='15']"));
date15.click();`}
                {selectedLanguage === 'javascript' && `// Click date input to open calendar
let dateInput = await driver.findElement(By.id('birthday'));
await dateInput.click();

// Wait for calendar and select date
let calendar = await driver.wait(
    until.elementLocated(By.className('calendar-popup')), 10000
);
let date15 = await calendar.findElement(By.xpath("//td[text()='15']"));
await date15.click();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Date Picker Interaction Demo */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Date Picker Interaction Demo
          </CardTitle>
          <CardDescription>Interactive demonstration of calendar date selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <AlertCircle className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Explicit Waits Required</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Calendar popups load dynamically. Always use explicit waits to ensure calendar is visible before interaction.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch date picker interaction in action. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                        ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-date"
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

          {/* Side by Side: Code and Date Picker Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateDatePickerInteraction}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
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
                    onClick={() => copyToClipboard(datePickerExample[selectedLanguage], 'Date picker code')}
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
                    {getDatePickerCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-indigo-200 dark:bg-indigo-900/50 border-l-4 border-indigo-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-800 dark:text-slate-300'}>
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{datePickerExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Date Picker Visual Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date Picker Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {/* Date Input */}
                    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Date Input Field
                        </h5>
                      </div>
                      
                      <div className={`relative transition-all duration-300 ${
                        selectedElement === 'birthday' 
                          ? 'ring-4 ring-indigo-500 ring-opacity-50 rounded-lg' 
                          : ''
                      }`}>
                        <input
                          type="date"
                          id="birthday"
                          value={dateState.finalDate}
                          readOnly
                          className={`w-full px-4 py-3 border-2 rounded-lg transition-all ${
                            selectedElement === 'birthday'
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                              : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                          }`}
                          placeholder="Select your birthday"
                        />
                        {selectedElement === 'birthday' && (
                          <div className="absolute -top-8 left-0 bg-indigo-500 text-white text-xs px-2 py-1 rounded">
                            Date Input Located
                          </div>
                        )}
                      </div>
                      
                      {dateState.finalDate && (
                        <div className="mt-3 p-2 bg-green-50 dark:bg-green-950/30 rounded text-xs text-green-700 dark:text-green-300">
                          ✅ Selected: {dateState.finalDate}
                        </div>
                      )}
                    </div>

                    {/* Calendar Popup */}
                    {dateState.calendarOpen && (
                      <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-center gap-2 mb-3">
                          <CalendarDays className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                          <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            Calendar Popup
                          </h5>
                        </div>
                        
                        <div className={`border-2 rounded-lg transition-all ${
                          selectedElement === 'calendar-popup' 
                            ? 'border-indigo-500 ring-4 ring-indigo-500 ring-opacity-50' 
                            : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          {/* Calendar Header */}
                          <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-300 dark:border-slate-600">
                            <div className="flex items-center justify-between">
                              <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded">
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                January 2024
                              </span>
                              <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded">
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Calendar Grid */}
                          <div className="p-3">
                            <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                <div key={day} className="text-center font-semibold text-slate-600 dark:text-slate-400 p-1">
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-xs">
                              {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                                <button
                                  key={date}
                                  className={`p-2 rounded transition-all ${
                                    date === 15
                                      ? selectedElement === 'date-15'
                                        ? 'bg-indigo-500 text-white animate-pulse'
                                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                                  }`}
                                >
                                  {date}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {selectedElement === 'calendar-popup' && (
                          <div className="mt-3 p-2 bg-indigo-50 dark:bg-indigo-950/30 rounded text-xs text-indigo-700 dark:text-indigo-300">
                            📆 Calendar popup located and visible
                          </div>
                        )}
                      </div>
                    )}

                    {/* Date Selection Info */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <h6 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2">Date Selection Process:</h6>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Click date input to open calendar</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Wait for calendar popup visibility</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Click specific date to select</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Techniques */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Advanced Date Picker Techniques
          </CardTitle>
          <CardDescription>Professional approaches for complex date picker scenarios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{advancedDatePickerCode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(advancedDatePickerCode[selectedLanguage], 'Advanced date picker code')}
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
          <CardDescription>Troubleshooting date picker interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Calendar Not Appearing</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Click didn't trigger calendar or timing issue.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use JavaScript to trigger click event and increase wait time for calendar loading.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Date Not Clickable</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Date element is disabled or covered by overlay.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use JavaScript executor to click date or handle overlay elements first.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Wrong Date Format</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Date picker returns different format than expected.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Parse and validate date format using regex or date libraries.
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
            Date Picker Quick Reference
          </CardTitle>
          <CardDescription>Essential syntax and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Open Calendar</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    date_input.click()
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    dateInput.click();
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    await dateInput.click();
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Select Date</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    calendar.find_element(By.XPATH, "//td[text()='15']")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    calendar.findElement(By.xpath("//td[text()='15']"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    calendar.findElement(By.xpath("//td[text()='15']"))
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
