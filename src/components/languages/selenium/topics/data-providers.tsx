'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Database,
  Code,
  Copy,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Wrench,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  GitBranch,
  Puzzle,
  Box,
  Building,
  Grid3x3,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Settings,
  Zap,
  Target,
  Rocket,
  AlertTriangle,
  Shield,
  FolderOpen,
  Users,
  Monitor,
  FileText,
  Search,
  Table,
  FileSpreadsheet,
  Upload,
  Download,
  RefreshCw,
  Layers,
  Activity,
  Cpu,
  HardDrive,
  Package,
  TreePine,
  Workflow,
  MousePointer,
  AlertCircle,
  List,
  Columns,
  Filter,
  SortAsc,
  BarChart3,
  PieChart,
  TrendingUp,
  Clock,
  Calendar,
  Tag,
  Hash,
  Mail,
  Phone,
  Globe,
  MapPin,
  CreditCard,
  User,
  Key,
  Link,
  CheckSquare,
  XSquare
} from 'lucide-react';

export function DataProvidersComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp'>('java');
  const [selectedDataType, setSelectedDataType] = useState<'excel' | 'csv' | 'json' | 'database'>('excel');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getDataProviderCode = () => {
    if (selectedLanguage === 'java') {
      return [
        '// TestNG Data Provider Implementation',
        'import org.testng.annotations.DataProvider;',
        'import org.apache.poi.ss.usermodel.*;',
        'import org.apache.poi.xssf.usermodel.XSSFWorkbook;',
        'import java.io.FileInputStream;',
        'import java.io.IOException;',
        '',
        'public class LoginDataProvider {',
        '    @DataProvider(name = "loginData")',
        '    public Object[][] getLoginData() throws IOException {',
        '        String filePath = "src/test/resources/testdata/login.xlsx";',
        '        FileInputStream fis = new FileInputStream(filePath);',
        '        Workbook workbook = new XSSFWorkbook(fis);',
        '        Sheet sheet = workbook.getSheet("LoginData");',
        '        int rowCount = sheet.getLastRowNum();',
        '        Object[][] data = new Object[rowCount][3];',
        '        ',
        '        for (int i = 0; i < rowCount; i++) {',
        '            Row row = sheet.getRow(i + 1);',
        '            if (row != null && isValidRow(row)) {',
        '                data[i][0] = row.getCell(0).getStringCellValue();',
        '                data[i][1] = row.getCell(1).getStringCellValue();',
        '                data[i][2] = row.getCell(2).getStringCellValue();',
        '            }',
        '        }',
        '        ',
        '        workbook.close();',
        '        fis.close();',
        '        return data;',
        '    }',
        '    ',
        '    private boolean isValidRow(Row row) {',
        '        return row.getCell(0) != null && row.getCell(1) != null;',
        '    }',
        '}',
        '',
        '// Test Class Using Data Provider',
        'public class LoginTest {',
        '    @Test(dataProvider = "loginData", dataProviderClass = LoginDataProvider.class)',
        '    public void testLogin(String username, String password, String expected) {',
        '        LoginPage loginPage = new LoginPage(driver);',
        '        loginPage.login(username, password);',
        '        Assert.assertEquals(expected, loginPage.getErrorMessage());',
        '    }',
        '}'
      ];
    } else if (selectedLanguage === 'python') {
      return [
        '# PyTest Data Provider Implementation',
        'import pytest',
        'import pandas as pd',
        'from typing import List, Dict',
        '',
        '@pytest.fixture(params=read_test_data())',
        'def login_data(request):',
        '    """PyTest fixture providing test data"""',
        '    return request.param',
        '',
        'def read_test_data() -> List[Dict]:',
        '    """Read test data from Excel file"""',
        '    try:',
        '        df = pd.read_excel("testdata/login.xlsx")',
        '        test_data = []',
        '        ',
        '        for index, row in df.iterrows():',
        '            if is_valid_row(row):',
        '                test_data.append({',
        '                    "username": row["username"],',
        '                    "password": row["password"],',
        '                    "expected": row["expected"]',
        '                })',
        '        return test_data',
        '        ',
        '    except Exception as e:',
        '        print(f"Error reading test data: {e}")',
        '        return []',
        '',
        'def is_valid_row(row) -> bool:',
        '    """Validate if row contains valid test data"""',
        '    return pd.notna(row.get("username")) and pd.notna(row.get("password"))',
        '',
        '# Test Class Using Data Provider',
        'class TestLogin:',
        '    def test_login(self, login_data):',
        '        """Test login functionality with data provider"""',
        '        login_page = LoginPage(driver)',
        '        login_page.login(login_data["username"], login_data["password"])',
        '        assert login_data["expected"] in login_page.get_error_message()'
      ];
    } else {
      return [
        '// MSTest Data Provider Implementation',
        'using Microsoft.VisualStudio.TestTools.UnitTesting;',
        'using System.Data;',
        'using System.Data.OleDb;',
        'using System.Configuration;',
        '',
        '[TestClass]',
        'public class LoginTest {',
        '    private static DataTable testData;',
        '    ',
        '    [ClassInitialize]',
        '    public static void SetupTestData(TestContext context) {',
        '        string connectionString = @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=testdata.xlsx;Extended Properties=\\"Excel 12.0;HDR=YES;\\";";',
        '        using (OleDbConnection connection = new OleDbConnection(connectionString)) {',
        '            connection.Open();',
        '            OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM [LoginData$]", connection);',
        '            testData = new DataTable();',
        '            adapter.Fill(testData);',
        '        }',
        '    }',
        '    ',
        '    [TestMethod]',
        '    [DataSource("System.Data.OleDb", "Data Source=testdata.xlsx;Extended Properties=\\"Excel 12.0;HDR=YES;\\"", "LoginData", DataAccessMethod.Sequential)]',
        '    public void TestLogin() {',
        '        string username = TestContext.DataRow["username"].ToString();',
        '        string password = TestContext.DataRow["password"].ToString();',
        '        string expected = TestContext.DataRow["expected"].ToString();',
        '        ',
        '        LoginPage loginPage = new LoginPage(driver);',
        '        loginPage.Login(username, password);',
        '        Assert.AreEqual(expected, loginPage.GetErrorMessage());',
        '    }',
        '    ',
        '    public TestContext TestContext { get; set; }',
        '}'
      ];
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Database}
        category="Selenium · Test Data Management"
        title="Data Providers"
        description="Master data-driven testing with comprehensive data provider implementations for Excel, CSV, JSON, and database sources."
        colorTheme="cyan"
      />

      {/* What are Data Providers Section */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            What are Data Providers?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h3 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Definition
                </h3>
                <p className="text-sm text-cyan-800 dark:text-cyan-200 leading-relaxed">
                  <strong>Data Providers</strong> are mechanisms that supply test data to test methods, 
                  enabling data-driven testing where the same test logic executes with multiple data sets.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Key Purpose
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  Data providers separate test logic from test data, making tests more maintainable 
                  and allowing comprehensive testing with various input combinations.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Benefits
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Test multiple scenarios with single test method</li>
                  <li>• Easy maintenance of test data</li>
                  <li>• Improved test coverage</li>
                  <li>• Reduced code duplication</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  Common Sources
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  Data providers can read from Excel files, CSV files, JSON files, 
                  databases, APIs, or generate data programmatically.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Source Types */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Data Source Types
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Different data sources supported by data providers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                id: 'excel', 
                label: 'Excel Files', 
                icon: <FileSpreadsheet className="w-6 h-6" />, 
                color: 'green',
                description: 'XLSX, XLS files with structured data',
                examples: ['Login credentials', 'Test scenarios', 'Configuration data']
              },
              { 
                id: 'csv', 
                label: 'CSV Files', 
                icon: <FileText className="w-6 h-6" />, 
                color: 'blue',
                description: 'Comma-separated values files',
                examples: ['User data', 'Product lists', 'Simple test cases']
              },
              { 
                id: 'json', 
                label: 'JSON Files', 
                icon: <Code className="w-6 h-6" />, 
                color: 'orange',
                description: 'JavaScript Object Notation files',
                examples: ['Complex objects', 'API responses', 'Nested data']
              },
              { 
                id: 'database', 
                label: 'Database', 
                icon: <Database className="w-6 h-6" />, 
                color: 'purple',
                description: 'SQL databases, NoSQL databases',
                examples: ['User tables', 'Test data repositories', 'Production data clones']
              }
            ].map((source) => (
              <Card 
                key={source.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedDataType === source.id 
                    ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedDataType(source.id as any)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      source.color === 'green' ? 'bg-green-200 dark:bg-green-800' :
                      source.color === 'blue' ? 'bg-blue-200 dark:bg-blue-800' :
                      source.color === 'orange' ? 'bg-orange-200 dark:bg-orange-800' :
                      'bg-purple-200 dark:bg-purple-800'
                    }`}>
                      {source.icon}
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold">{source.label}</CardTitle>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{source.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {source.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Provider Flow Diagram */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3x3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Data Provider Flow Diagram
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Simple visualization of how data providers work in test automation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Flow Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <div className="space-y-6">
              {/* Step 1: Data Source */}
              <div className="flex items-center justify-center">
                <div className="bg-cyan-100 dark:bg-cyan-900/30 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg p-4 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-200 dark:bg-cyan-800 rounded-lg">
                      <FileSpreadsheet className="w-6 h-6 text-cyan-700 dark:text-cyan-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-cyan-900 dark:text-cyan-100">1. Data Source</h5>
                      <p className="text-xs text-cyan-700 dark:text-cyan-300">
                        {selectedDataType === 'excel' ? 'Excel File (.xlsx)' :
                         selectedDataType === 'csv' ? 'CSV File (.csv)' :
                         selectedDataType === 'json' ? 'JSON File (.json)' : 'Database'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-400">
                    Contains test data with multiple rows and columns
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-blue-500" />
              </div>

              {/* Step 2: Data Provider */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-600 rounded-lg p-4 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-200 dark:bg-blue-800 rounded-lg">
                      <Database className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-blue-900 dark:text-blue-100">2. Data Provider</h5>
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Reads and processes data from source
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                    • Loads data file<br/>
                    • Validates data format<br/>
                    • Creates test data objects
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-blue-500" />
              </div>

              {/* Step 3: Test Execution */}
              <div className="flex items-center justify-center">
                <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-600 rounded-lg p-4 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-200 dark:bg-green-800 rounded-lg">
                      <Activity className="w-6 h-6 text-green-700 dark:text-green-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-green-900 dark:text-green-100">3. Test Execution</h5>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        Runs test with each data set
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                    • Test method called for each row<br/>
                    • Data passed as parameters<br/>
                    • Test results collected
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-blue-500" />
              </div>

              {/* Step 4: Results */}
              <div className="flex items-center justify-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-600 rounded-lg p-4 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-200 dark:bg-purple-800 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-purple-900 dark:text-purple-100">4. Test Results</h5>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Aggregated results and reporting
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-purple-600 dark:text-purple-400">
                    • Pass/Fail statistics<br/>
                    • Detailed test reports<br/>
                    • Execution logs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                Key Benefits
              </h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Test multiple scenarios with single test method</li>
                <li>• Separate test data from test logic</li>
                <li>• Easy maintenance of test data</li>
                <li>• Improved test coverage</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Common Use Cases
              </h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Login credential testing</li>
                <li>• Form validation scenarios</li>
                <li>• API parameter testing</li>
                <li>• Cross-browser data testing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Complete Data Provider Implementation
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Production-ready data provider implementations for different testing frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'java' | 'python' | 'csharp')}>
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="java" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Java (TestNG)</TabsTrigger>
                  <TabsTrigger value="python" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Python (PyTest)</TabsTrigger>
                  <TabsTrigger value="csharp" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">C# (MSTest)</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(getDataProviderCode().join('\n'), 'Data Provider code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {getDataProviderCode().map((line, index) => (
                    <div key={index}>
                      <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                      <span className={
                        line.includes('@DataProvider') || line.includes('@pytest.fixture') || line.includes('[TestMethod]') ? 'text-blue-600 dark:text-blue-400' :
                        line.includes('class ') ? 'text-purple-600 dark:text-purple-400' :
                        line.includes('def ') || line.includes('public ') ? 'text-green-600 dark:text-green-400' :
                        line.includes('#') || line.includes('//') ? 'text-gray-500 dark:text-gray-500' :
                        line.includes('import ') || line.includes('using ') ? 'text-orange-600 dark:text-orange-400' :
                        'text-gray-800 dark:text-gray-200'
                      }>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
            
            {/* Code Explanation */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Features:</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong className="text-blue-600 dark:text-blue-400">Annotations:</strong> Framework-specific data provider decorators</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Data Reading:</strong> File parsing and data extraction</p>
                <p><strong className="text-green-600 dark:text-green-400">Validation:</strong> Data quality checks and error handling</p>
                <p><strong className="text-orange-600 dark:text-orange-400">Integration:</strong> Seamless test framework integration</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              Data Provider Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Follow these practices for effective data-driven testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Separate Data from Logic</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keep test data external to test code for better maintainability 
                  and easier data management.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Wrench className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Validate Input Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Always validate test data before using it to prevent test failures 
                  due to invalid or corrupted data.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Puzzle className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Meaningful Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create realistic test data that covers edge cases, boundary conditions, 
                  and typical user scenarios.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              Performance Optimization
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Maximize efficiency with these optimization techniques
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <FolderOpen className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Lazy Loading</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Load test data only when needed to reduce memory usage 
                  and improve test startup time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <GitBranch className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Data Caching</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cache frequently accessed data to avoid repeated file I/O 
                  operations during test execution.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Monitor className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Parallel Execution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Design data providers to support parallel test execution 
                  with thread-safe data access patterns.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Guide */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Implementation Roadmap
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Step-by-step guide to implement data providers in your test framework
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Choose Data Source',
                description: 'Select appropriate data source based on test requirements',
                icon: <Database className="w-5 h-5" />,
                color: 'blue'
              },
              {
                step: 2,
                title: 'Create Data Provider Class',
                description: 'Implement data provider with framework-specific annotations',
                icon: <Code className="w-5 h-5" />,
                color: 'purple'
              },
              {
                step: 3,
                title: 'Implement Data Reading Logic',
                description: 'Add code to read and parse data from source',
                icon: <FileText className="w-5 h-5" />,
                color: 'green'
              },
              {
                step: 4,
                title: 'Add Data Validation',
                description: 'Implement validation and error handling',
                icon: <Shield className="w-5 h-5" />,
                color: 'orange'
              },
              {
                step: 5,
                title: 'Integrate with Tests',
                description: 'Connect data provider to test methods',
                icon: <GitBranch className="w-5 h-5" />,
                color: 'indigo'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold bg-${item.color}-600`}>
                    {item.step}
                  </div>
                  {item.step < 5 && (
                    <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Alert */}
      <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
        <AlertCircle className="h-5 w-5 text-indigo-600" />
        <AlertTitle className="text-indigo-900 dark:text-indigo-100">Ready to Implement?</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200">
          Data providers significantly enhance test coverage and maintainability. 
          Start with simple Excel files and gradually expand to more complex data sources 
          as your testing needs grow.
        </AlertDescription>
      </Alert>
    </div>
  );
}
