'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  FileText,
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
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  Image
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function RichTextEditorsComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [editorState, setEditorState] = React.useState({
    content: '',
    bold: false,
    italic: false,
    underline: false,
    linkAdded: false,
    finalContent: ''
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

  const simulateRichTextEditorInteraction = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setEditorState({
      content: '',
      bold: false,
      italic: false,
      underline: false,
      linkAdded: false,
      finalContent: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findEditor: 10, typeText: 13, selectText: 16, boldText: 19, italicText: 22, addLink: 25, getContent: 28, quit: 31 };
      } else if (selectedLanguage === 'java') {
        return { nav: 6, findEditor: 9, typeText: 12, selectText: 15, boldText: 18, italicText: 21, addLink: 24, getContent: 27, quit: 30 };
      } else {
        return { nav: 3, findEditor: 6, typeText: 9, selectText: 12, boldText: 15, italicText: 18, addLink: 21, getContent: 24, quit: 27 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      editor: selectedLanguage === 'python' ? 'editor' : 'editor',
      boldBtn: selectedLanguage === 'python' ? 'bold_button' : 'boldButton',
      content: selectedLanguage === 'python' ? 'content' : 'content'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Rich Text Editor interaction demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with rich text editor...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📝 Finding rich text editor content area...', delay: 800 * multiplier, element: null, codeLine: lines.findEditor },
      { step: 3, log: '✅ Found editor: <div class="editor-content" contenteditable="true">', delay: 700 * multiplier, element: 'editor-content', codeLine: lines.findEditor, variable: { name: varNames.editor, value: '<WebElement: div.editor-content>' } },
      { step: 4, log: '⌨️ Typing text into editor...', delay: 1000 * multiplier, element: 'editor-content', action: 'typeText', codeLine: lines.typeText, variable: { name: varNames.editor, value: 'text entered' } },
      { step: 5, log: '🎯 Selecting text for formatting...', delay: 700 * multiplier, element: 'editor-content', action: 'selectText', codeLine: lines.selectText, variable: { name: 'selection', value: 'text selected' } },
      { step: 6, log: '🔤 Finding bold button...', delay: 800 * multiplier, element: 'editor-content', codeLine: lines.boldText, variable: { name: 'selection', value: 'text selected' } },
      { step: 7, log: '✅ Found bold button: <button class="bold-btn">', delay: 700 * multiplier, element: 'bold-btn', codeLine: lines.boldText, variable: { name: varNames.boldBtn, value: '<WebElement: button.bold-btn>' } },
      { step: 8, log: '🖱️ Clicking bold button to format text...', delay: 1000 * multiplier, element: 'bold-btn', action: 'boldText', codeLine: lines.boldText, variable: { name: varNames.boldBtn, value: 'clicked' } },
      { step: 9, log: '🔡 Finding italic button...', delay: 700 * multiplier, element: 'bold-btn', codeLine: lines.italicText, variable: { name: varNames.boldBtn, value: 'clicked' } },
      { step: 10, log: '✅ Found italic button: <button class="italic-btn">', delay: 700 * multiplier, element: 'italic-btn', codeLine: lines.italicText, variable: { name: 'italicButton', value: '<WebElement: button.italic-btn>' } },
      { step: 11, log: '🖱️ Clicking italic button...', delay: 1000 * multiplier, element: 'italic-btn', action: 'italicText', codeLine: lines.italicText, variable: { name: 'italicButton', value: 'clicked' } },
      { step: 12, log: '🔗 Adding link to text...', delay: 700 * multiplier, element: 'italic-btn', action: 'addLink', codeLine: lines.addLink, variable: { name: 'link', value: 'added' } },
      { step: 13, log: '📄 Getting formatted content...', delay: 1000 * multiplier, element: 'editor-content', action: 'getContent', codeLine: lines.getContent, variable: { name: varNames.content, value: '<Formatted HTML>' } },
      { step: 14, log: '🎉 Rich text editor interaction completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'typeText') {
        setEditorState(prev => ({ ...prev, content: 'Hello World!' }));
      } else if (action === 'selectText') {
        // Selection state
      } else if (action === 'boldText') {
        setEditorState(prev => ({ ...prev, bold: true }));
      } else if (action === 'italicText') {
        setEditorState(prev => ({ ...prev, italic: true }));
      } else if (action === 'addLink') {
        setEditorState(prev => ({ ...prev, linkAdded: true }));
      } else if (action === 'getContent') {
        setEditorState(prev => ({ 
          ...prev, 
          finalContent: '<strong><em><a href="#">Hello World!</a></em></strong>' 
        }));
      }
    }

    setIsRunning(false);
  };

  const getRichTextEditorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.common.action_chains import ActionChains',
        'from selenium.webdriver.common.keys import Keys',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page with rich text editor',
        'driver.get("https://www.example.com/editor")',
        '',
        '# 📝 Find the editor content area',
        'editor = driver.find_element(By.CSS_SELECTOR, ".editor-content")',
        'editor.click()  # Focus on editor',
        'editor.send_keys("Hello World!")  # ⌨️ Type text',
        '',
        '# 🎯 Select text for formatting',
        'actions = ActionChains(driver)',
        'actions.double_click(editor).perform()',
        '',
        '# 🔤 Apply bold formatting',
        'bold_button = driver.find_element(By.CSS_SELECTOR, ".bold-btn")',
        'bold_button.click()  # 🖱️ Make text bold',
        '',
        '# 🔡 Apply italic formatting',
        'italic_button = driver.find_element(By.CSS_SELECTOR, ".italic-btn")',
        'italic_button.click()  # 🖱️ Make text italic',
        '',
        '# 🔗 Add link to selected text',
        'link_button = driver.find_element(By.CSS_SELECTOR, ".link-btn")',
        'link_button.click()  # 🖱️ Insert link',
        '',
        '# 📄 Get formatted HTML content',
        'content = editor.get_attribute("innerHTML")',
        'print(f"Formatted content: {content}")',
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
        'import org.openqa.selenium.interactions.Actions;',
        'import org.openqa.selenium.Keys;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/editor");',
        '',
        '// 📝 Find the editor content area',
        'WebElement editor = driver.findElement(By.cssSelector(".editor-content"));',
        'editor.click(); // Focus on editor',
        'editor.sendKeys("Hello World!"); // ⌨️ Type text',
        '',
        '// 🎯 Select text for formatting',
        'Actions actions = new Actions(driver);',
        'actions.doubleClick(editor).build().perform();',
        '',
        '// 🔤 Apply bold formatting',
        'WebElement boldButton = driver.findElement(By.cssSelector(".bold-btn"));',
        'boldButton.click(); // 🖱️ Make text bold',
        '',
        '// 🔡 Apply italic formatting',
        'WebElement italicButton = driver.findElement(By.cssSelector(".italic-btn"));',
        'italicButton.click(); // 🖱️ Make text italic',
        '',
        '// 🔗 Add link to selected text',
        'WebElement linkButton = driver.findElement(By.cssSelector(".link-btn"));',
        'linkButton.click(); // 🖱️ Insert link',
        '',
        '// 📄 Get formatted HTML content',
        'String content = editor.getAttribute("innerHTML");',
        'System.out.println("Formatted content: " + content);',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, Key } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/editor\');',
        '',
        '// 📝 Find the editor content area',
        'let editor = await driver.findElement(By.cssSelector(\'.editor-content\'));',
        'await editor.click(); // Focus on editor',
        'await editor.sendKeys(\'Hello World!\'); // ⌨️ Type text',
        '',
        '// 🎯 Select text for formatting',
        'let actions = driver.actions();',
        'await actions.doubleClick(editor).perform();',
        '',
        '// 🔤 Apply bold formatting',
        'let boldButton = await driver.findElement(By.cssSelector(\'.bold-btn\'));',
        'await boldButton.click(); // 🖱️ Make text bold',
        '',
        '// 🔡 Apply italic formatting',
        'let italicButton = await driver.findElement(By.cssSelector(\'.italic-btn\'));',
        'await italicButton.click(); // 🖱️ Make text italic',
        '',
        '// 🔗 Add link to selected text',
        'let linkButton = await driver.findElement(By.cssSelector(\'.link-btn\'));',
        'await linkButton.click(); // 🖱️ Insert link',
        '',
        '// 📄 Get formatted HTML content',
        'let content = await editor.getAttribute(\'innerHTML\');',
        'console.log(\'Formatted content:\', content);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const richTextEditorExample = {
    python: getRichTextEditorCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/editor");

// 📝 Find the editor content area
WebElement editor = driver.findElement(By.cssSelector(".editor-content"));
editor.click(); // Focus on editor
editor.sendKeys("Hello World!"); // ⌨️ Type text

// 🎯 Select text for formatting
Actions actions = new Actions(driver);
actions.doubleClick(editor).build().perform();

// 🔤 Apply bold formatting
WebElement boldButton = driver.findElement(By.cssSelector(".bold-btn"));
boldButton.click(); // 🖱️ Make text bold

// 🔡 Apply italic formatting
WebElement italicButton = driver.findElement(By.cssSelector(".italic-btn"));
italicButton.click(); // 🖱️ Make text italic

// 🔗 Add link to selected text
WebElement linkButton = driver.findElement(By.cssSelector(".link-btn"));
linkButton.click(); // 🖱️ Insert link

// 📄 Get formatted HTML content
String content = editor.getAttribute("innerHTML");
System.out.println("Formatted content: " + content);

driver.quit();`,
    javascript: `const { Builder, By, Key } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/editor');

// 📝 Find the editor content area
let editor = await driver.findElement(By.cssSelector('.editor-content'));
await editor.click(); // Focus on editor
await editor.sendKeys('Hello World!'); // ⌨️ Type text

// 🎯 Select text for formatting
let actions = driver.actions();
await actions.doubleClick(editor).perform();

// 🔤 Apply bold formatting
let boldButton = await driver.findElement(By.cssSelector('.bold-btn'));
await boldButton.click(); // 🖱️ Make text bold

// 🔡 Apply italic formatting
let italicButton = await driver.findElement(By.cssSelector('.italic-btn'));
await italicButton.click(); // 🖱️ Make text italic

// 🔗 Add link to selected text
let linkButton = await driver.findElement(By.cssSelector('.link-btn'));
await linkButton.click(); // 🖱️ Insert link

// 📄 Get formatted HTML content
let content = await editor.getAttribute('innerHTML');
console.log('Formatted content:', content);

await driver.quit();`,
  };

  const advancedRichTextEditorCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.get("https://www.example.com/editor")

# 1. Handle different editor types
try:
    # TinyMCE Editor
    driver.switch_to.frame("editor_iframe")
    editor = driver.find_element(By.ID, "tinymce")
    print("Using TinyMCE editor")
except:
    try:
        # CKEditor
        editor = driver.find_element(By.CSS_SELECTOR ".cke_editable")
        print("Using CKEditor")
    except:
        # ContentEditable div
        editor = driver.find_element(By.CSS_SELECTOR, "[contenteditable='true']")
        print("Using contenteditable editor")

# 2. Type and format text
editor.click()
editor.send_keys("This is a sample text with formatting.")

# Select specific portion
actions = ActionChains(driver)
actions.click(editor).send_keys(Keys.HOME).key_down(Keys.SHIFT).send_keys("sample").key_up(Keys.SHIFT).perform()

# Apply multiple formatting options
bold_btn = driver.find_element(By.CSS_SELECTOR, ".bold-btn")
bold_btn.click()

italic_btn = driver.find_element(By.CSS_SELECTOR, ".italic-btn")
italic_btn.click()

# 3. Create lists
editor.send_keys(Keys.END + Keys.ENTER)
editor.send_keys("First item")
editor.send_keys(Keys.ENTER)
editor.send_keys("Second item")

# Select list items and apply list formatting
actions.click(editor).key_down(Keys.SHIFT).send_keys(Keys.UP).send_keys(Keys.UP).key_up(Keys.SHIFT).perform()

list_btn = driver.find_element(By.CSS_SELECTOR, ".list-btn")
list_btn.click()

# 4. Insert images and links
image_btn = driver.find_element(By.CSS_SELECTOR, ".image-btn")
image_btn.click()

# Wait for image dialog
wait = WebDriverWait(driver, 10)
image_url_input = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".image-url-input")))
image_url_input.send_keys("https://example.com/image.jpg")

insert_btn = driver.find_element(By.CSS_SELECTOR, ".insert-btn")
insert_btn.click()

# 5. Get content in different formats
html_content = editor.get_attribute("innerHTML")
text_content = editor.get_attribute("textContent")

# 6. Handle table creation
table_btn = driver.find_element(By.CSS_SELECTOR, ".table-btn")
table_btn.click()

# Select table dimensions
driver.execute_script("document.querySelector('.table-size-3x3').click()")

# 7. Validate content
assert "sample" in html_content
assert "<strong>" in html_content
assert "<em>" in html_content

print(f"HTML content: {html_content}")
print(f"Text content: {text_content}")

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/editor");

// 1. Handle different editor types
try {
    // TinyMCE Editor
    driver.switchTo().frame("editor_iframe");
    WebElement editor = driver.findElement(By.id("tinymce"));
    System.out.println("Using TinyMCE editor");
} catch (Exception e) {
    try {
        // CKEditor
        WebElement editor = driver.findElement(By.cssSelector(".cke_editable"));
        System.out.println("Using CKEditor");
    } catch (Exception ex) {
        // ContentEditable div
        WebElement editor = driver.findElement(By.cssSelector("[contenteditable='true']"));
        System.out.println("Using contenteditable editor");
    }
}

// 2. Type and format text
editor.click();
editor.sendKeys("This is a sample text with formatting.");

// Select specific portion
Actions actions = new Actions(driver);
actions.click(editor).sendKeys(Keys.HOME).keyDown(Keys.SHIFT).sendKeys("sample").keyUp(Keys.SHIFT).build().perform();

// Apply multiple formatting options
WebElement boldBtn = driver.findElement(By.cssSelector(".bold-btn"));
boldBtn.click();

WebElement italicBtn = driver.findElement(By.cssSelector(".italic-btn"));
italicBtn.click();

// 3. Create lists
editor.sendKeys(Keys.END + Keys.ENTER);
editor.sendKeys("First item");
editor.sendKeys(Keys.ENTER);
editor.sendKeys("Second item");

// Select list items and apply list formatting
actions.click(editor).keyDown(Keys.SHIFT).sendKeys(Keys.UP).sendKeys(Keys.UP).keyUp(Keys.SHIFT).build().perform();

WebElement listBtn = driver.findElement(By.cssSelector(".list-btn"));
listBtn.click();

// 4. Insert images and links
WebElement imageBtn = driver.findElement(By.cssSelector(".image-btn"));
imageBtn.click();

// Wait for image dialog
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement imageUrlInput = wait.until(
    ExpectedConditions.presenceOfElementLocated(By.cssSelector(".image-url-input"))
);
imageUrlInput.sendKeys("https://example.com/image.jpg");

WebElement insertBtn = driver.findElement(By.cssSelector(".insert-btn"));
insertBtn.click();

// 5. Get content in different formats
String htmlContent = editor.getAttribute("innerHTML");
String textContent = editor.getAttribute("textContent");

// 6. Handle table creation
WebElement tableBtn = driver.findElement(By.cssSelector(".table-btn"));
tableBtn.click();

// Select table dimensions
((JavascriptExecutor)driver).executeScript("document.querySelector('.table-size-3x3').click()");

// 7. Validate content
assert htmlContent.contains("sample");
assert htmlContent.contains("<strong>");
assert htmlContent.contains("<em>");

System.out.println("HTML content: " + htmlContent);
System.out.println("Text content: " + textContent);

driver.quit();`,
    javascript: `const { Builder, By, Key } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/editor');

// 1. Handle different editor types
try {
    // TinyMCE Editor
    await driver.switchTo().frame('editor_iframe');
    let editor = await driver.findElement(By.id('tinymce'));
    console.log('Using TinyMCE editor');
} catch (error) {
    try {
        // CKEditor
        let editor = await driver.findElement(By.cssSelector('.cke_editable'));
        console.log('Using CKEditor');
    } catch (error) {
        // ContentEditable div
        let editor = await driver.findElement(By.cssSelector('[contenteditable="true"]'));
        console.log('Using contenteditable editor');
    }
}

// 2. Type and format text
await editor.click();
await editor.sendKeys('This is a sample text with formatting.');

// Select specific portion
let actions = driver.actions();
await actions.click(editor).sendKeys(Key.HOME).keyDown(Key.SHIFT).sendKeys('sample').keyUp(Key.SHIFT).perform();

// Apply multiple formatting options
let boldBtn = await driver.findElement(By.cssSelector('.bold-btn'));
await boldBtn.click();

let italicBtn = await driver.findElement(By.cssSelector('.italic-btn'));
await italicBtn.click();

// 3. Create lists
await editor.sendKeys(Key.END + Key.ENTER);
await editor.sendKeys('First item');
await editor.sendKeys(Key.ENTER);
await editor.sendKeys('Second item');

// Select list items and apply list formatting
await actions.click(editor).keyDown(Key.SHIFT).sendKeys(Key.UP).sendKeys(Key.UP).keyUp(Key.SHIFT).perform();

let listBtn = await driver.findElement(By.cssSelector('.list-btn'));
await listBtn.click();

// 4. Insert images and links
let imageBtn = await driver.findElement(By.cssSelector('.image-btn'));
await imageBtn.click();

// Wait for image dialog
let imageUrlInput = await driver.wait(
    until.elementLocated(By.cssSelector('.image-url-input')), 10000
);
await imageUrlInput.sendKeys('https://example.com/image.jpg');

let insertBtn = await driver.findElement(By.cssSelector('.insert-btn'));
await insertBtn.click();

// 5. Get content in different formats
let htmlContent = await editor.getAttribute('innerHTML');
let textContent = await editor.getAttribute('textContent');

// 6. Handle table creation
let tableBtn = await driver.findElement(By.cssSelector('.table-btn'));
await tableBtn.click();

// Select table dimensions
await driver.executeScript("document.querySelector('.table-size-3x3').click()");

// 7. Validate content
assert htmlContent.includes('sample');
assert htmlContent.includes('<strong>');
assert htmlContent.includes('<em>');

console.log('HTML content:', htmlContent);
console.log('Text content:', textContent);

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FileText}
        category="Selenium · Advanced Locators"
        title="Rich Text Editors"
        description="Master rich text editor interaction using contenteditable elements, formatting tools, and content extraction techniques"
        colorTheme="green"
        badges={[
          { label: 'Text Formatting', variant: 'success' },
          { label: 'ContentEditable', variant: 'info' },
          { label: 'WYSIWYG', variant: 'secondary' },
        ]}
      />

      {/* Why Rich Text Editors */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Understanding Rich Text Editors
          </CardTitle>
          <CardDescription>WYSIWYG editors for formatted content creation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Type className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">ContentEditable</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    HTML elements with contenteditable attribute for rich text
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bold className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-1">Text Formatting</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Bold, italic, underline, and other text styling options
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Link className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-1">Media Embedding</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Insert images, links, and other media content
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-lg border-2 border-cyan-200 dark:border-cyan-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <List className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">Structured Content</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Lists, tables, and structured document elements
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
            Rich Text Editor Interaction Patterns
          </CardTitle>
          <CardDescription>
            ContentEditable manipulation and text formatting techniques
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
                {selectedLanguage === 'python' && `# Type and format text in rich editor
editor = driver.find_element(By.CSS_SELECTOR, ".editor-content")
editor.click()
editor.send_keys("Hello World!")

# Select text and apply formatting
actions = ActionChains(driver)
actions.double_click(editor).perform()

bold_button = driver.find_element(By.CSS_SELECTOR, ".bold-btn")
bold_button.click()  # Make text bold`}
                {selectedLanguage === 'java' && `// Type and format text in rich editor
WebElement editor = driver.findElement(By.cssSelector(".editor-content"));
editor.click();
editor.sendKeys("Hello World!");

// Select text and apply formatting
Actions actions = new Actions(driver);
actions.doubleClick(editor).build().perform();

WebElement boldButton = driver.findElement(By.cssSelector(".bold-btn"));
boldButton.click(); // Make text bold`}
                {selectedLanguage === 'javascript' && `// Type and format text in rich editor
let editor = await driver.findElement(By.cssSelector('.editor-content'));
await editor.click();
await editor.sendKeys('Hello World!');

// Select text and apply formatting
let actions = driver.actions();
await actions.doubleClick(editor).perform();

let boldButton = await driver.findElement(By.cssSelector('.bold-btn'));
await boldButton.click(); // Make text bold`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Rich Text Editor Interaction Demo */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Rich Text Editor Interaction Demo
          </CardTitle>
          <CardDescription>Interactive demonstration of text formatting and content manipulation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <AlertCircle className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">ContentEditable Elements</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Rich text editors use contenteditable elements. Focus the editor first, then use ActionChains for text selection and formatting.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
            <Play className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Interactive Demo</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Watch rich text editor formatting in action. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5 text-green-600 dark:text-green-400" />
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
                        ? 'border-green-500 bg-green-100 dark:bg-green-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-editor"
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

          {/* Side by Side: Code and Rich Text Editor Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateRichTextEditorInteraction}
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
                    onClick={() => copyToClipboard(richTextEditorExample[selectedLanguage], 'Rich text editor code')}
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
                    {getRichTextEditorCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{richTextEditorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Rich Text Editor Visual Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Rich Text Editor Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {/* Editor Toolbar */}
                    <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Formatting Toolbar
                        </h5>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <button className={`p-2 rounded transition-all ${
                          selectedElement === 'bold-btn'
                            ? 'bg-emerald-500 text-white animate-pulse'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}>
                          <Bold className="w-4 h-4" />
                        </button>
                        <button className={`p-2 rounded transition-all ${
                          selectedElement === 'italic-btn'
                            ? 'bg-emerald-500 text-white animate-pulse'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}>
                          <Italic className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <Underline className="w-4 h-4" />
                        </button>
                        <div className="w-px bg-slate-300 dark:bg-slate-600"></div>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <AlignLeft className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <AlignCenter className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <AlignRight className="w-4 h-4" />
                        </button>
                        <div className="w-px bg-slate-300 dark:bg-slate-600"></div>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <List className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <ListOrdered className="w-4 h-4" />
                        </button>
                        <div className="w-px bg-slate-300 dark:bg-slate-600"></div>
                        <button className={`p-2 rounded transition-all ${
                          editorState.linkAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}>
                          <Link className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          <Image className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Editor Content Area */}
                    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Type className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Content Editor
                        </h5>
                      </div>
                      
                      <div className={`min-h-[120px] p-4 border-2 rounded-lg transition-all ${
                        selectedElement === 'editor-content'
                          ? 'border-emerald-500 ring-4 ring-emerald-500 ring-opacity-50 bg-emerald-50 dark:bg-emerald-950/30'
                          : 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900'
                      }`}>
                        {editorState.finalContent ? (
                          <div 
                            className="text-slate-800 dark:text-slate-200"
                            dangerouslySetInnerHTML={{ __html: editorState.finalContent }}
                          />
                        ) : editorState.content ? (
                          <div className={`text-slate-800 dark:text-slate-200 ${
                            editorState.bold ? 'font-bold' : ''
                          } ${editorState.italic ? 'italic' : ''}`}>
                            {editorState.content}
                          </div>
                        ) : (
                          <div className="text-slate-400 dark:text-slate-500 italic">
                            Start typing to see content here...
                          </div>
                        )}
                        
                        {selectedElement === 'editor-content' && (
                          <div className="absolute -top-8 left-0 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                            Editor Content Area
                          </div>
                        )}
                      </div>
                      
                      {editorState.finalContent && (
                        <div className="mt-3 p-2 bg-green-50 dark:bg-green-950/30 rounded text-xs">
                          <div className="font-semibold text-green-700 dark:text-green-300 mb-1">✅ Formatted Content:</div>
                          <code className="text-green-600 dark:text-green-400">
                            {editorState.finalContent}
                          </code>
                        </div>
                      )}
                    </div>

                    {/* Editor Info */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <h6 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2">Text Formatting Process:</h6>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Click editor and type text</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Select text for formatting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Apply formatting (bold, italic, link)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-teal-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Extract formatted HTML content</span>
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
            Advanced Rich Text Editor Techniques
          </CardTitle>
          <CardDescription>Professional approaches for complex editor scenarios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{advancedRichTextEditorCode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(advancedRichTextEditorCode[selectedLanguage], 'Advanced rich text editor code')}
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
          <CardDescription>Troubleshooting rich text editor interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Editor Not Focused</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Text input goes to wrong element or editor not focused.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Always click the editor content area first to ensure focus before typing.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Text Selection Fails</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> ActionChains selection not working or timing issues.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use JavaScript to select text or add explicit waits before selection.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ iframe Editor Issues</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Editor inside iframe requires context switching.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Switch to iframe context, interact with editor, then switch back to default content.
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
            Rich Text Editor Quick Reference
          </CardTitle>
          <CardDescription>Essential syntax and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Text Input & Selection</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    editor.click(); editor.send_keys("text")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    editor.click(); editor.sendKeys("text")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    await editor.click(); await editor.sendKeys('text')
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Content Extraction</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    editor.get_attribute("innerHTML")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    editor.getAttribute("innerHTML")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    await editor.getAttribute('innerHTML')
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
