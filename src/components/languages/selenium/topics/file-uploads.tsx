'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Upload,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  File,
  Gauge,
  FileText
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function FileUploads() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [uploadState, setUploadState] = React.useState({
    singleFile: '',
    multipleFiles: [] as string[],
    uploadComplete: false
  });

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

  const simulateFileUploads = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setUploadState({
      singleFile: '',
      multipleFiles: [],
      uploadComplete: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findSingle: 10, getPath: 11, sendKeys: 12, verify: 13, findMultiple: 16, getMultiplePaths: 17, sendMultiple: 18, submit: 21, quit: 24 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, findSingle: 11, getPath: 12, sendKeys: 13, verify: 14, findMultiple: 17, getMultiplePaths: 18, sendMultiple: 19, submit: 22, quit: 24 };
      } else {
        return { nav: 3, findSingle: 6, getPath: 7, sendKeys: 8, verify: 9, findMultiple: 12, getMultiplePaths: 13, sendMultiple: 14, submit: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      fileInput: selectedLanguage === 'python' ? 'file_input' : 'fileInput',
      filePath: selectedLanguage === 'python' ? 'file_path' : 'filePath',
      multipleInput: selectedLanguage === 'python' ? 'multiple_input' : 'multipleInput',
      multiplePaths: selectedLanguage === 'python' ? 'multiple_paths' : 'multiplePaths',
      submitBtn: selectedLanguage === 'python' ? 'submit_button' : 'submitButton'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting File Uploads demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with file upload elements...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding single file input element...', delay: 800 * multiplier, element: null, codeLine: lines.findSingle, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Found file input element', delay: 700 * multiplier, element: 'single', codeLine: lines.findSingle, variable: { name: varNames.fileInput, value: '<WebElement: input[type="file"]>' } },
      { step: 4, log: '📁 Getting absolute file path...', delay: 800 * multiplier, element: 'single', codeLine: lines.getPath, variable: { name: varNames.fileInput, value: '<WebElement: input[type="file"]>' } },
      { step: 5, log: '✅ File path resolved', delay: 700 * multiplier, element: 'single', codeLine: lines.getPath, variable: { name: varNames.filePath, value: '/Users/user/documents/resume.pdf' } },
      { step: 6, log: '📤 Sending file path to input...', delay: 1200 * multiplier, element: 'single', action: 'upload-single', codeLine: lines.sendKeys, variable: { name: varNames.filePath, value: '/Users/user/documents/resume.pdf' } },
      { step: 7, log: '✅ File uploaded: resume.pdf', delay: 700 * multiplier, element: 'single', codeLine: lines.sendKeys, variable: { name: varNames.fileInput, value: 'resume.pdf' } },
      { step: 8, log: '🔍 Verifying file name...', delay: 1000 * multiplier, element: 'single', codeLine: lines.verify, variable: { name: varNames.fileInput, value: 'resume.pdf' } },
      { step: 9, log: '✅ Verified: value contains "resume.pdf"', delay: 700 * multiplier, element: 'single', codeLine: lines.verify, variable: { name: 'file_name', value: 'resume.pdf' } },
      { step: 10, log: '🔍 Finding multiple file input element...', delay: 800 * multiplier, element: 'single', codeLine: lines.findMultiple, variable: { name: 'file_name', value: 'resume.pdf' } },
      { step: 11, log: '✅ Found multiple file input', delay: 700 * multiplier, element: 'multiple', codeLine: lines.findMultiple, variable: { name: varNames.multipleInput, value: '<WebElement: input[type="file"][multiple]>' } },
      { step: 12, log: '📁 Getting multiple file paths...', delay: 800 * multiplier, element: 'multiple', codeLine: lines.getMultiplePaths, variable: { name: varNames.multipleInput, value: '<WebElement: input[type="file"][multiple]>' } },
      { step: 13, log: '✅ Multiple paths resolved', delay: 700 * multiplier, element: 'multiple', codeLine: lines.getMultiplePaths, variable: { name: varNames.multiplePaths, value: '/path/file1.jpg\\n/path/file2.jpg\\n/path/file3.jpg' } },
      { step: 14, log: '📤 Sending multiple files...', delay: 1200 * multiplier, element: 'multiple', action: 'upload-multiple', codeLine: lines.sendMultiple, variable: { name: varNames.multiplePaths, value: '/path/file1.jpg\\n/path/file2.jpg\\n/path/file3.jpg' } },
      { step: 15, log: '✅ Multiple files uploaded: 3 files', delay: 700 * multiplier, element: 'multiple', codeLine: lines.sendMultiple, variable: { name: varNames.multipleInput, value: '3 files selected' } },
      { step: 16, log: '🔍 Finding submit button...', delay: 800 * multiplier, element: 'multiple', codeLine: lines.submit, variable: { name: varNames.multipleInput, value: '3 files selected' } },
      { step: 17, log: '✅ Found submit button', delay: 700 * multiplier, element: 'submit', codeLine: lines.submit, variable: { name: varNames.submitBtn, value: '<WebElement: button[type="submit"]>' } },
      { step: 18, log: '🖱️ Clicking submit button...', delay: 1200 * multiplier, element: 'submit', action: 'submit', codeLine: lines.submit, variable: { name: varNames.submitBtn, value: '<WebElement: button[type="submit"]>' } },
      { step: 19, log: '✅ Form submitted successfully!', delay: 700 * multiplier, element: 'submit', codeLine: lines.submit, variable: { name: varNames.submitBtn, value: 'clicked' } },
      { step: 20, log: '🎉 File uploads demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: varNames.submitBtn, value: 'clicked' } },
    ];

    for (const { step, log, delay, element, codeLine, variable, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'upload-single') {
        setUploadState(prev => ({ ...prev, singleFile: 'resume.pdf' }));
      } else if (action === 'upload-multiple') {
        setUploadState(prev => ({ ...prev, multipleFiles: ['file1.jpg', 'file2.jpg', 'file3.jpg'] }));
      } else if (action === 'submit') {
        setUploadState(prev => ({ ...prev, uploadComplete: true }));
      }
    }

    setIsRunning(false);
  };

  const getFileUploadsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'import os',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to upload page',
        'driver.get("https://www.example.com/upload")',
        '',
        '# Upload single file',
        'file_input = driver.find_element(By.ID, "fileUpload")',
        'file_path = os.path.abspath("resume.pdf")  # Get absolute path',
        'file_input.send_keys(file_path)  # Send file path',
        'file_name = file_input.get_attribute("value")  # Verify upload',
        '',
        '# Upload multiple files',
        'multiple_input = driver.find_element(By.ID, "multipleFiles")',
        'multiple_paths = "\\n".join([os.path.abspath(f) for f in ["file1.jpg", "file2.jpg", "file3.jpg"]])',
        'multiple_input.send_keys(multiple_paths)  # Send multiple paths',
        '',
        '# Submit form',
        'submit_button = driver.find_element(By.ID, "submit")',
        'submit_button.click()',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import java.io.File;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/upload");',
        '',
        '// Upload single file',
        'WebElement fileInput = driver.findElement(By.id("fileUpload"));',
        'File file = new File("resume.pdf");',
        'String filePath = file.getAbsolutePath();  // Get absolute path',
        'fileInput.sendKeys(filePath);  // Send file path',
        'String fileName = fileInput.getAttribute("value");  // Verify upload',
        '',
        '// Upload multiple files',
        'WebElement multipleInput = driver.findElement(By.id("multipleFiles"));',
        'String multiplePaths = new File("file1.jpg").getAbsolutePath() + "\\n" + new File("file2.jpg").getAbsolutePath() + "\\n" + new File("file3.jpg").getAbsolutePath();',
        'multipleInput.sendKeys(multiplePaths);  // Send multiple paths',
        '',
        '// Submit form',
        'WebElement submitButton = driver.findElement(By.id("submit"));',
        'submitButton.click();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        'const path = require(\'path\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/upload\');',
        '',
        '// Upload single file',
        'let fileInput = await driver.findElement(By.id(\'fileUpload\'));',
        'let filePath = path.resolve(\'resume.pdf\');  // Get absolute path',
        'await fileInput.sendKeys(filePath);  // Send file path',
        'let fileName = await fileInput.getAttribute(\'value\');  // Verify upload',
        '',
        '// Upload multiple files',
        'let multipleInput = await driver.findElement(By.id(\'multipleFiles\'));',
        'let multiplePaths = [\'file1.jpg\', \'file2.jpg\', \'file3.jpg\'].map(f => path.resolve(f)).join(\'\\n\');',
        'await multipleInput.sendKeys(multiplePaths);  // Send multiple paths',
        '',
        '// Submit form',
        'let submitButton = await driver.findElement(By.id(\'submit\'));',
        'await submitButton.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const fileUploadsExample = {
    python: getFileUploadsCode('python').join('\n'),
    java: getFileUploadsCode('java').join('\n'),
    javascript: getFileUploadsCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="File Uploads"
        description="Learn to handle file uploads in Selenium WebDriver"
        icon={Upload}
        category="Selenium · Form Elements"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-sky-600" />
            Uploading Files with Selenium
          </CardTitle>
          <CardDescription>
            Essential techniques for handling file upload inputs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            File uploads are common in web applications. Selenium provides a simple way to upload files by sending the file path to the input element:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>send_keys():</strong> Send absolute file path to file input</li>
            <li><strong>Absolute Path:</strong> Always use absolute paths, not relative</li>
            <li><strong>Multiple Files:</strong> Separate paths with newline character</li>
            <li><strong>No Click Needed:</strong> Don't click the input, just send keys</li>
          </ul>

          <Alert className="border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-sky-950/20">
            <Upload className="h-5 w-5 text-sky-600" />
            <AlertTitle className="text-sky-900 dark:text-sky-100">Important Note</AlertTitle>
            <AlertDescription className="text-sky-800 dark:text-sky-200">
              Selenium bypasses the file browser dialog by directly sending the file path to the input element. This makes file uploads simple and reliable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-sky-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            File upload syntax in Python, Java, and JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === lang
                    ? 'border-b-2 border-sky-600 text-sky-600 dark:text-sky-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `import os

# Single file upload
file_input = driver.find_element(By.ID, "fileUpload")
file_path = os.path.abspath("document.pdf")
file_input.send_keys(file_path)

# Verify upload
uploaded_file = file_input.get_attribute("value")
print(f"Uploaded: {uploaded_file}")

# Multiple files upload
multiple_input = driver.find_element(By.ID, "multipleFiles")
files = ["image1.jpg", "image2.jpg", "image3.jpg"]
file_paths = "\\n".join([os.path.abspath(f) for f in files])
multiple_input.send_keys(file_paths)

# Using Path library (Python 3.4+)
from pathlib import Path
file_path = Path("document.pdf").resolve()
file_input.send_keys(str(file_path))

# Upload from different directory
file_path = os.path.abspath("/Users/user/Downloads/file.pdf")
file_input.send_keys(file_path)`}
                {selectedLanguage === 'java' && `import java.io.File;

// Single file upload
WebElement fileInput = driver.findElement(By.id("fileUpload"));
File file = new File("document.pdf");
String filePath = file.getAbsolutePath();
fileInput.sendKeys(filePath);

// Verify upload
String uploadedFile = fileInput.getAttribute("value");
System.out.println("Uploaded: " + uploadedFile);

// Multiple files upload
WebElement multipleInput = driver.findElement(By.id("multipleFiles"));
String file1 = new File("image1.jpg").getAbsolutePath();
String file2 = new File("image2.jpg").getAbsolutePath();
String file3 = new File("image3.jpg").getAbsolutePath();
String multiplePaths = file1 + "\\n" + file2 + "\\n" + file3;
multipleInput.sendKeys(multiplePaths);

// Upload from different directory
File file = new File("/Users/user/Downloads/file.pdf");
fileInput.sendKeys(file.getAbsolutePath());`}
                {selectedLanguage === 'javascript' && `const path = require('path');

// Single file upload
let fileInput = await driver.findElement(By.id('fileUpload'));
let filePath = path.resolve('document.pdf');
await fileInput.sendKeys(filePath);

// Verify upload
let uploadedFile = await fileInput.getAttribute('value');
console.log(\`Uploaded: \${uploadedFile}\`);

// Multiple files upload
let multipleInput = await driver.findElement(By.id('multipleFiles'));
let files = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let filePaths = files.map(f => path.resolve(f)).join('\\n');
await multipleInput.sendKeys(filePaths);

// Upload from different directory
let filePath = path.resolve('/Users/user/Downloads/file.pdf');
await fileInput.sendKeys(filePath);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-sky-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch file upload operations in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive File Uploads Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch single and multiple file uploads with inline variable values at each step. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 p-4 rounded-lg border-2 border-sky-200 dark:border-sky-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-sky-600 dark:text-sky-400" />
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
                        ? 'border-sky-500 bg-sky-100 dark:bg-sky-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-sky-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-upload"
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

          {/* Side by Side: Code and Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateFileUploads}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700"
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
                    onClick={() => copyToClipboard(fileUploadsExample[selectedLanguage], 'File Uploads code')}
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
                    {getFileUploadsCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-sky-200 dark:bg-sky-900/50 border-l-4 border-sky-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-sky-900 dark:text-sky-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              const match = codeLine.match(/^(\w+)\s*=/);
                              return match ? match[1] : null;
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
                      <div className="mt-4 p-3 bg-sky-50 dark:bg-sky-950/30 rounded border border-sky-200 dark:border-sky-700">
                        <div className="text-[10px] font-bold text-sky-900 dark:text-sky-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-sky-800 dark:text-sky-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-sky-600 dark:text-sky-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{fileUploadsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Upload Form</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-6">
                  {/* Single File Upload */}
                  <div className={`transition-all ${selectedElement === 'single' ? 'ring-2 ring-sky-500 rounded-lg p-3' : 'p-3'}`}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <File className="w-4 h-4 inline mr-1" />
                      Upload Resume (Single File)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 text-center">
                      {uploadState.singleFile ? (
                        <div className="space-y-2">
                          <FileText className="w-8 h-8 mx-auto text-sky-600" />
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            {uploadState.singleFile}
                          </div>
                          <Badge className="bg-green-600">Uploaded</Badge>
                        </div>
                      ) : (
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Click or drag file here
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Multiple Files Upload */}
                  <div className={`transition-all ${selectedElement === 'multiple' ? 'ring-2 ring-sky-500 rounded-lg p-3' : 'p-3'}`}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <Upload className="w-4 h-4 inline mr-1" />
                      Upload Images (Multiple Files)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4">
                      {uploadState.multipleFiles.length > 0 ? (
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                            {uploadState.multipleFiles.length} files selected:
                          </div>
                          <div className="space-y-1">
                            {uploadState.multipleFiles.map((file, index) => (
                              <div key={index} className="flex items-center gap-2 text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded">
                                <FileText className="w-4 h-4 text-sky-600" />
                                <span className="text-slate-700 dark:text-slate-300">{file}</span>
                                <Badge variant="outline" className="ml-auto text-[10px]">
                                  {(Math.random() * 500 + 100).toFixed(0)} KB
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
                          Click or drag multiple files here
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className={`transition-all ${selectedElement === 'submit' ? 'ring-2 ring-sky-500 rounded-lg p-2' : ''}`}>
                    <Button
                      className="w-full bg-sky-600 hover:bg-sky-700"
                      disabled={!uploadState.singleFile && uploadState.multipleFiles.length === 0}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Submit Files
                    </Button>
                  </div>

                  {uploadState.uploadComplete && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Files uploaded successfully!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-600" />
            Upload Methods
          </CardTitle>
          <CardDescription>Different ways to handle file uploads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Single File</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Upload One File</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                file_input.send_keys("/path/to/file.pdf")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Send absolute path to file input element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Multiple Files</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Upload Multiple Files</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                paths = "\\n".join([path1, path2])<br/>
                input.send_keys(paths)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Separate multiple paths with newline
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Absolute Paths</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always use absolute paths, not relative paths, to avoid issues
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Don't Click Input</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Don't click the file input, just send keys directly
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify Upload</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check the value attribute to verify file was uploaded
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">File Must Exist</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure file exists at the specified path before uploading
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">File Not Found</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> File path is invalid or file doesn't exist<br/>
                <strong>Solution:</strong> Use absolute paths and verify file exists before upload
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Interactable</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Cannot send keys to file input<br/>
                <strong>Solution:</strong> Ensure input is visible (may be hidden by custom UI)
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Custom File Pickers</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Custom file picker doesn't work with send_keys<br/>
                <strong>Solution:</strong> Look for hidden input[type="file"] element in the DOM
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Remote Upload</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Upload on Remote Grid</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Use LocalFileDetector for remote uploads<br/>
                from selenium.webdriver.remote.file_detector import LocalFileDetector<br/>
                driver.file_detector = LocalFileDetector()<br/>
                file_input.send_keys("/local/path/file.pdf")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Hidden Input</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Handle Hidden File Inputs</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Make hidden input visible with JavaScript<br/>
                driver.execute_script("arguments[0].style.display = 'block';", file_input)<br/>
                file_input.send_keys(file_path)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Drag & Drop</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Drag and Drop Upload</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # For drag-drop zones, still use send_keys on hidden input<br/>
                hidden_input = driver.find_element(By.CSS_SELECTOR, "input[type='file']")<br/>
                hidden_input.send_keys(file_path)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
