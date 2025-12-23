'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  FileSpreadsheet,
  Code,
  Copy,
  CheckCircle,
  AlertTriangle,
  Shield,
  Target,
  Zap,
  Settings,
  Database,
  Upload,
  Download,
  Search,
  Filter,
  SortAsc,
  Table,
  Columns,
  FileText,
  HardDrive,
  Package,
  Layers,
  Activity,
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
  XSquare,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  GitBranch,
  Box,
  Building,
  Grid3x3,
  Monitor,
  Wrench,
  Puzzle,
  FolderOpen,
  Users,
  BarChart3,
  PieChart,
  TrendingUp
} from 'lucide-react';

export function ExcelDataReadingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp'>('java');
  const [selectedLibrary, setSelectedLibrary] = useState<string>('apache');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getExcelCode = () => {
    if (selectedLanguage === 'java') {
      if (selectedLibrary === 'apache') {
        return [
          '// Apache POI Excel Reading Implementation',
          'import org.apache.poi.ss.usermodel.*;',
          'import org.apache.poi.xssf.usermodel.XSSFWorkbook;',
          'import org.apache.poi.hssf.usermodel.HSSFWorkbook;',
          'import java.io.FileInputStream;',
          'import java.io.IOException;',
          'import java.util.ArrayList;',
          'import java.util.List;',
          '',
          'public class ExcelDataReader {',
          '    private Workbook workbook;',
          '    private Sheet sheet;',
          '    private String filePath;',
          '    ',
          '    public ExcelDataReader(String filePath) throws IOException {',
          '        this.filePath = filePath;',
          '        FileInputStream fis = new FileInputStream(filePath);',
          '        ',
          '        // Detect Excel format (.xls or .xlsx)',
          '        if (filePath.endsWith(".xlsx")) {',
          '            this.workbook = new XSSFWorkbook(fis);',
          '        } else if (filePath.endsWith(".xls")) {',
          '            this.workbook = new HSSFWorkbook(fis);',
          '        } else {',
          '            throw new IllegalArgumentException("Unsupported Excel format");',
          '        }',
          '        ',
          '        fis.close();',
          '    }',
          '    ',
          '    public void openSheet(String sheetName) {',
          '        this.sheet = workbook.getSheet(sheetName);',
          '        if (sheet == null) {',
          '            throw new IllegalArgumentException("Sheet \\"" + sheetName + "\\" not found");',
          '        }',
          '    }',
          '    ',
          '    public List<String> getSheetNames() {',
          '        List<String> sheetNames = new ArrayList<>();',
          '        for (int i = 0; i < workbook.getNumberOfSheets(); i++) {',
          '            sheetNames.add(workbook.getSheetName(i));',
          '        }',
          '        return sheetNames;',
          '    }',
          '    ',
          '    public int getRowCount() {',
          '        return sheet.getLastRowNum();',
          '    }',
          '    ',
          '    public int getColumnCount() {',
          '        return sheet.getRow(0).getLastCellNum();',
          '    }',
          '    ',
          '    public String getCellValue(int rowNum, int colNum) {',
          '        Row row = sheet.getRow(rowNum);',
          '        if (row == null) return "";',
          '        ',
          '        Cell cell = row.getCell(colNum);',
          '        if (cell == null) return "";',
          '        ',
          '        switch (cell.getCellType()) {',
          '            case STRING:',
          '                return cell.getStringCellValue();',
          '            case NUMERIC:',
          '                if (DateUtil.isCellDateFormatted(cell)) {',
          '                    return cell.getDateCellValue().toString();',
          '                } else {',
          '                    return String.valueOf(cell.getNumericCellValue());',
          '                }',
          '            case BOOLEAN:',
          '                return String.valueOf(cell.getBooleanCellValue());',
          '            case FORMULA:',
          '                return cell.getCellFormula();',
          '            case BLANK:',
          '                return "";',
          '            default:',
          '                return "";',
          '        }',
          '    }',
          '    ',
          '    public List<List<String>> getAllData() {',
          '        List<List<String>> data = new ArrayList<>();',
          '        int rowCount = getRowCount();',
          '        int colCount = getColumnCount();',
          '        ',
          '        for (int i = 0; i <= rowCount; i++) {',
          '            List<String> rowData = new ArrayList<>();',
          '            for (int j = 0; j < colCount; j++) {',
          '                rowData.add(getCellValue(i, j));',
          '            }',
          '            data.add(rowData);',
          '        }',
          '        ',
          '        return data;',
          '    }',
          '    ',
          '    public List<String> getHeaders() {',
          '        return getAllData().get(0);',
          '    }',
          '    ',
          '    public List<List<String>> getDataWithoutHeaders() {',
          '        List<List<String>> allData = getAllData();',
          '        return allData.subList(1, allData.size());',
          '    }',
          '    ',
          '    public void close() throws IOException {',
          '        if (workbook != null) {',
          '            workbook.close();',
          '        }',
          '    }',
          '    ',
          '    // Usage Example',
          '    public static void main(String[] args) {',
          '        try {',
          '            ExcelDataReader reader = new ExcelDataReader("testdata.xlsx");',
          '            reader.openSheet("LoginData");',
          '            ',
          '            List<String> headers = reader.getHeaders();',
          '            List<List<String>> data = reader.getDataWithoutHeaders();',
          '            ',
          '            System.out.println("Headers: " + headers);',
          '            System.out.println("Data rows: " + data.size());',
          '            ',
          '            reader.close();',
          '        } catch (IOException e) {',
          '            e.printStackTrace();',
          '        }',
          '    }',
          '}',
          '',
          '// TestNG Data Provider Integration',
          'import org.testng.annotations.DataProvider;',
          '',
          'public class ExcelDataProvider {',
          '    @DataProvider(name = "excelData")',
          '    public Object[][] getExcelData() throws IOException {',
          '        ExcelDataReader reader = new ExcelDataReader("testdata.xlsx");',
          '        reader.openSheet("TestData");',
          '        ',
          '        List<List<String>> data = reader.getDataWithoutHeaders();',
          '        Object[][] testData = new Object[data.size()][data.get(0).size()];',
          '        ',
          '        for (int i = 0; i < data.size(); i++) {',
          '            for (int j = 0; j < data.get(i).size(); j++) {',
          '                testData[i][j] = data.get(i).get(j);',
          '            }',
          '        }',
          '        ',
          '        reader.close();',
          '        return testData;',
          '    }',
          '}'
        ];
      } else if (selectedLibrary === 'jxl') {
        return [
          '// JXL Excel Reading Implementation',
          'import jxl.Workbook;',
          'import jxl.Sheet;',
          'import jxl.Cell;',
          'import jxl.read.biff.BiffException;',
          'import java.io.File;',
          'import java.io.IOException;',
          'import java.util.ArrayList;',
          'import java.util.List;',
          '',
          'public class JXLExcelReader {',
          '    private Workbook workbook;',
          '    private Sheet sheet;',
          '    ',
          '    public JXLExcelReader(String filePath) throws IOException, BiffException {',
          '        File excelFile = new File(filePath);',
          '        this.workbook = Workbook.getWorkbook(excelFile);',
          '    }',
          '    ',
          '    public void openSheet(int sheetIndex) {',
          '        this.sheet = workbook.getSheet(sheetIndex);',
          '    }',
          '    ',
          '    public void openSheet(String sheetName) {',
          '        this.sheet = workbook.getSheet(sheetName);',
          '    }',
          '    ',
          '    public String[] getSheetNames() {',
          '        return workbook.getSheetNames();',
          '    }',
          '    ',
          '    public int getRowCount() {',
          '        return sheet.getRows();',
          '    }',
          '    ',
          '    public int getColumnCount() {',
          '        return sheet.getColumns();',
          '    }',
          '    ',
          '    public String getCellValue(int row, int column) {',
          '        Cell cell = sheet.getCell(column, row);',
          '        return cell.getContents();',
          '    }',
          '    ',
          '    public List<List<String>> getAllData() {',
          '        List<List<String>> data = new ArrayList<>();',
          '        for (int i = 0; i < getRowCount(); i++) {',
          '            List<String> rowData = new ArrayList<>();',
          '            for (int j = 0; j < getColumnCount(); j++) {',
          '                rowData.add(getCellValue(i, j));',
          '            }',
          '            data.add(rowData);',
          '        }',
          '        return data;',
          '    }',
          '    ',
          '    public void close() {',
          '        if (workbook != null) {',
          '            workbook.close();',
          '        }',
          '    }',
          '}'
        ];
      }
    } else if (selectedLanguage === 'python') {
      if (selectedLibrary === 'openpyxl') {
        return [
          '# OpenPyXL Excel Reading Implementation',
          'from openpyxl import load_workbook',
          'from openpyxl.utils import get_column_letter',
          'from datetime import datetime',
          'import os',
          'from typing import List, Dict, Any, Union',
          '',
          'class ExcelDataReader:',
          '    def __init__(self, file_path: str):',
          '        """',
          '        Initialize Excel reader with file path',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"Excel file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.workbook = load_workbook(file_path, data_only=True)',
          '        self.current_sheet = None',
          '    ',
          '    def get_sheet_names(self) -> List[str]:',
          '        """Get all sheet names in the workbook"""',
          '        return self.workbook.sheetnames',
          '    ',
          '    def open_sheet(self, sheet_name: str):',
          '        """Open a specific sheet by name"""',
          '        if sheet_name not in self.get_sheet_names():',
          '            raise ValueError(f"Sheet \'{sheet_name}\' not found")',
          '        self.current_sheet = self.workbook[sheet_name]',
          '        return self.current_sheet',
          '    ',
          '    def get_row_count(self) -> int:',
          '        """Get the number of rows in the current sheet"""',
          '        if self.current_sheet is None:',
          '            raise ValueError("No sheet is currently open")',
          '        return self.current_sheet.max_row',
          '    ',
          '    def get_column_count(self) -> int:',
          '        """Get the number of columns in the current sheet"""',
          '        if self.current_sheet is None:',
          '            raise ValueError("No sheet is currently open")',
          '        return self.current_sheet.max_column',
          '    ',
          '    def get_cell_value(self, row: int, column: int) -> Any:',
          '        """',
          '        Get cell value at specific row and column (1-indexed)',
          '        """',
          '        if self.current_sheet is None:',
          '            raise ValueError("No sheet is currently open")',
          '        ',
          '        cell = self.current_sheet.cell(row=row, column=column)',
          '        return self._get_cell_value(cell)',
          '    ',
          '    def _get_cell_value(self, cell) -> Any:',
          '        """Extract value from cell based on its type"""',
          '        if cell.value is None:',
          '            return ""',
          '        elif isinstance(cell.value, datetime):',
          '            return cell.value.strftime("%Y-%m-%d %H:%M:%S")',
          '        elif isinstance(cell.value, (int, float)):',
          '            return str(cell.value)',
          '        else:',
          '            return str(cell.value)',
          '    ',
          '    def get_all_data(self) -> List[List[Any]]:',
          '        """Get all data from the current sheet as a 2D list"""',
          '        if self.current_sheet is None:',
          '            raise ValueError("No sheet is currently open")',
          '        ',
          '        data = []',
          '        for row in self.current_sheet.iter_rows(values_only=True):',
          '            row_data = [self._format_value(cell) for cell in row]',
          '            data.append(row_data)',
          '        return data',
          '    ',
          '    def _format_value(self, value) -> str:',
          '        """Format cell value to string"""',
          '        if value is None:',
          '            return ""',
          '        elif isinstance(value, datetime):',
          '            return value.strftime("%Y-%m-%d %H:%M:%S")',
          '        else:',
          '            return str(value)',
          '    ',
          '    def get_headers(self) -> List[str]:',
          '        """Get the first row as headers"""',
          '        data = self.get_all_data()',
          '        return data[0] if data else []',
          '    ',
          '    def get_data_without_headers(self) -> List[List[Any]]:',
          '        """Get all data except the first row (headers)"""',
          '        data = self.get_all_data()',
          '        return data[1:] if len(data) > 1 else []',
          '    ',
          '    def get_data_as_dict(self) -> List[Dict[str, Any]]:',
          '        """',
          '        Get data as list of dictionaries using headers as keys',
          '        """',
          '        headers = self.get_headers()',
          '        data_rows = self.get_data_without_headers()',
          '        ',
          '        result = []',
          '        for row in data_rows:',
          '            row_dict = dict(zip(headers, row))',
          '            result.append(row_dict)',
          '        return result',
          '    ',
          '    def get_column_data(self, column: Union[int, str]) -> List[Any]:',
          '        """',
          '        Get all data from a specific column',
          '        column: column index (1-based) or column letter',
          '        """',
          '        if isinstance(column, str):',
          '            column = get_column_letter(column)',
          '        ',
          '        data = []',
          '        for row in self.current_sheet.iter_rows(min_col=column, max_col=column, values_only=True):',
          '            cell_value = row[0]',
          '            data.append(self._format_value(cell_value))',
          '        return data',
          '    ',
          '    def search_value(self, search_value: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Search for a value across all cells and return matching rows',
          '        """',
          '        headers = self.get_headers()',
          '        data_as_dict = self.get_data_as_dict()',
          '        ',
          '        matches = []',
          '        for row_dict in data_as_dict:',
          '            if any(search_value.lower() in str(value).lower() for value in row_dict.values()):',
          '                matches.append(row_dict)',
          '        return matches',
          '    ',
          '    def close(self):',
          '        """Close the workbook"""',
          '        self.workbook.close()',
          '    ',
          '    def __enter__(self):',
          '        """Context manager entry"""',
          '        return self',
          '    ',
          '    def __exit__(self, exc_type, exc_val, exc_tb):',
          '        """Context manager exit"""',
          '        self.close()',
          '',
          '# Usage Example',
          'def main():',
          '    # Using context manager',
          '    with ExcelDataReader("testdata.xlsx") as reader:',
          '        print("Available sheets:", reader.get_sheet_names())',
          '        ',
          '        # Open first sheet',
          '        reader.open_sheet(reader.get_sheet_names()[0])',
          '        ',
          '        # Get data as dictionary',
          '        data = reader.get_data_as_dict()',
          '        print(f"Found {len(data)} rows of data")',
          '        ',
          '        # Search for specific value',
          '        matches = reader.search_value("testuser")',
          '        print(f"Found {len(matches)} matches")',
          '',
          '# PyTest Integration',
          'import pytest',
          '',
          '@pytest.fixture',
          'def excel_data():',
          '    """PyTest fixture for Excel data"""',
          '    with ExcelDataReader("testdata.xlsx") as reader:',
          '        reader.open_sheet("TestData")',
          '        return reader.get_data_as_dict()',
          '',
          'def test_with_excel_data(excel_data):',
          '    """Test using Excel data fixture"""',
          '    for row in excel_data:',
          '        # Test logic here',
          '        assert row["username"] is not None',
          '        assert row["password"] is not None'
        ];
      } else if (selectedLibrary === 'pandas') {
        return [
          '# Pandas Excel Reading Implementation',
          'import pandas as pd',
          'import os',
          'from typing import List, Dict, Any, Union',
          'from pathlib import Path',
          '',
          'class PandasExcelReader:',
          '    def __init__(self, file_path: str):',
          '        """',
          '        Initialize Excel reader using pandas',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"Excel file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.file_name = Path(file_path).stem',
          '        self.current_data = None',
          '    ',
          '    def get_sheet_names(self) -> List[str]:',
          '        """Get all sheet names in the Excel file"""',
          '        excel_file = pd.ExcelFile(self.file_path)',
          '        return excel_file.sheet_names',
          '    ',
          '    def read_sheet(self, sheet_name: str, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Read a specific sheet as DataFrame',
          '        kwargs: Additional parameters for pd.read_excel()',
          '        """',
          '        # Default parameters',
          '        default_params = {',
          '            "header": 0,',
          '            "index_col": None,',
          '            "usecols": None,',
          '            "dtype": None,',
          '            "na_values": ["", "NA", "N/A", "null", "NULL"],',
          '            "keep_default_na": True,',
          '            "na_filter": True',
          '        }',
          '        ',
          '        # Merge with user-provided parameters',
          '        params = {**default_params, **kwargs}',
          '        ',
          '        try:',
          '            self.current_data = pd.read_excel(self.file_path, sheet_name=sheet_name, **params)',
          '            return self.current_data',
          '        except Exception as e:',
          '            raise ValueError(f"Error reading sheet \'{sheet_name}\': {str(e)}")',
          '    ',
          '    def get_data_as_list(self, sheet_name: str = None) -> List[List[Any]]:',
          '        """Get data as list of lists"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.values.tolist()',
          '    ',
          '    def get_data_as_dict(self, sheet_name: str = None) -> List[Dict[str, Any]]:',
          '        """Get data as list of dictionaries"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.to_dict("records")',
          '    ',
          '    def get_headers(self, sheet_name: str = None) -> List[str]:',
          '        """Get column headers"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.columns.tolist()',
          '    ',
          '    def get_row_count(self, sheet_name: str = None) -> int:',
          '        """Get number of rows"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return len(df)',
          '    ',
          '    def get_column_count(self, sheet_name: str = None) -> int:',
          '        """Get number of columns"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return len(df.columns)',
          '    ',
          '    def get_column_data(self, column: Union[str, int], sheet_name: str = None) -> List[Any]:',
          '        """Get all data from a specific column"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        return df[column].tolist()',
          '    ',
          '    def filter_data(self, condition: str, sheet_name: str = None) -> pd.DataFrame:',
          '        """',
          '        Filter data using pandas query syntax',
          '        condition: String condition for pandas query',
          '        """',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.query(condition)',
          '    ',
          '    def sort_data(self, by: Union[str, List[str]], ascending: Union[bool, List[bool]] = True, sheet_name: str = None) -> pd.DataFrame:',
          '        """Sort data by specified columns"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.sort_values(by=by, ascending=ascending)',
          '    ',
          '    def group_data(self, by: Union[str, List[str]], sheet_name: str = None) -> pd.core.groupby.DataFrameGroupBy:',
          '        """Group data by specified columns"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.groupby(by)',
          '    ',
          '    def get_statistics(self, sheet_name: str = None) -> Dict[str, Any]:',
          '        """Get basic statistics for numeric columns"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        return df.describe().to_dict()',
          '    ',
          '    def search_value(self, search_value: str, columns: List[str] = None, sheet_name: str = None) -> pd.DataFrame:',
          '        """',
          '        Search for a value in specified columns (or all columns if None)',
          '        """',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        if columns is None:',
          '            columns = df.columns.tolist()',
          '        ',
          '        mask = df[columns].apply(lambda x: x.astype(str).str.contains(search_value, case=False, na=False)).any(axis=1)',
          '        return df[mask]',
          '    ',
          '    def export_to_csv(self, output_path: str, sheet_name: str = None, **kwargs):',
          '        """Export current data to CSV file"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            raise ValueError("No data available. Call read_sheet() first.")',
          '        ',
          '        df.to_csv(output_path, index=False, **kwargs)',
          '    ',
          '    def __enter__(self):',
          '        """Context manager entry"""',
          '        return self',
          '    ',
          '    def __exit__(self, exc_type, exc_val, exc_tb):',
          '        """Context manager exit"""',
          '        pass',
          '',
          '# Usage Example',
          'def main():',
          '    with PandasExcelReader("testdata.xlsx") as reader:',
          '        # Read specific sheet',
          '        df = reader.read_sheet("UserData", dtype={"age": int, "salary": float})',
          '        ',
          '        # Get statistics',
          '        stats = reader.get_statistics()',
          '        print("Statistics:", stats)',
          '        ',
          '        # Filter data',
          '        filtered_df = reader.filter_data("age > 25 and salary > 50000")',
          '        print(f"Filtered {len(filtered_df)} records")',
          '        ',
          '        # Search for values',
          '        results = reader.search_value("john", ["name", "email"])',
          '        print(f"Found {len(results)} matches")',
          '',
          '# PyTest Data Provider',
          'import pytest',
          '',
          '@pytest.fixture(params=lambda: PandasExcelReader("testdata.xlsx").get_data_as_dict("TestData"))',
          'def excel_data(request):',
          '    """Dynamic fixture with Excel data"""',
          '    return request.param',
          '',
          'def test_user_data(excel_data):',
          '    """Test with each row of Excel data"""',
          '    assert excel_data["username"] is not None',
          '    assert "@" in excel_data["email"]'
        ];
      } else if (selectedLibrary === 'pandas') {
        return [
          '# Pandas Excel Reading Implementation',
          'import pandas as pd',
          'import os',
          'from typing import List, Dict, Any, Union, Optional',
          'from pathlib import Path',
          '',
          'class PandasExcelReader:',
          '    """',
          '    Advanced Excel reader using pandas for data manipulation and analysis',
          '    """',
          '    ',
          '    def __init__(self, file_path: str):',
          '        """',
          '        Initialize Excel reader with pandas',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"Excel file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.file_name = Path(file_path).stem',
          '        self.current_data = None',
          '        self.current_sheet = None',
          '        self.all_sheets = {}',
          '    ',
          '    def get_sheet_names(self) -> List[str]:',
          '        """',
          '        Get all sheet names in the workbook',
          '        """',
          '        return pd.ExcelFile(self.file_path).sheet_names',
          '    ',
          '    def read_sheet(self, sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Read a specific sheet as pandas DataFrame',
          '        """',
          '        if sheet_name is None:',
          '            # Read first sheet if no sheet name specified',
          '            sheet_name = self.get_sheet_names()[0]',
          '        ',
          '        # Default parameters for Excel reading',
          '        default_params = {',
          '            "header": 0,',
          '            "index_col": None,',
          '            "usecols": None,',
          '            "dtype": None,',
          '            "na_values": ["", "NA", "N/A", "null", "NULL"],',
          '            "keep_default_na": True,',
          '            "na_filter": True,',
          '        }',
          '        ',
          '        # Merge default parameters with user-provided parameters',
          '        params = {**default_params, **kwargs}',
          '        ',
          '        try:',
          '            self.current_data = pd.read_excel(self.file_path, sheet_name=sheet_name, **params)',
          '            self.current_sheet = sheet_name',
          '            return self.current_data',
          '        except Exception as e:',
          '            raise ValueError(f"Error reading sheet \'{sheet_name}\': {str(e)}")',
          '    ',
          '    def read_all_sheets(self, **kwargs) -> Dict[str, pd.DataFrame]:',
          '        """',
          '        Read all sheets in the workbook',
          '        """',
          '        sheet_names = self.get_sheet_names()',
          '        self.all_sheets = {}',
          '        ',
          '        for sheet_name in sheet_names:',
          '            try:',
          '                self.all_sheets[sheet_name] = pd.read_excel(self.file_path, sheet_name=sheet_name, **kwargs)',
          '            except Exception as e:',
          '                print(f"Warning: Could not read sheet \'{sheet_name}\': {str(e)}")',
          '        ',
          '        return self.all_sheets',
          '    ',
          '    def get_data_as_list(self, sheet_name: str = None, **kwargs) -> List[List[Any]]:',
          '        """Get data as list of lists"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.values.tolist()',
          '    ',
          '    def get_data_as_dict(self, sheet_name: str = None, records: bool = True, **kwargs) -> Union[List[Dict[str, Any]], Dict[str, List[Any]]]:',
          '        """',
          '        Get data as list of dictionaries or dictionary of lists',
          '        records: If True, return list of dicts; if False, return dict of lists',
          '        """',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.to_dict("records") if records else df.to_dict("list")',
          '    ',
          '    def get_headers(self, sheet_name: str = None, **kwargs) -> List[str]:',
          '        """Get column headers from specified sheet"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.columns.tolist()',
          '    ',
          '    def get_row_count(self, sheet_name: str = None, **kwargs) -> int:',
          '        """Get number of rows in specified sheet"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return len(df)',
          '    ',
          '    def get_column_count(self, sheet_name: str = None, **kwargs) -> int:',
          '        """Get number of columns in specified sheet"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return len(df.columns)',
          '    ',
          '    def get_cell_value(self, row: int, column: Union[int, str], sheet_name: str = None, **kwargs) -> Any:',
          '        """',
          '        Get cell value at specific row and column',
          '        column: column index (0-based) or column name',
          '        """',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        if row < 0 or row >= len(df):',
          '            raise IndexError(f"Row index {row} out of bounds")',
          '        ',
          '        return df.iloc[row][column]',
          '    ',
          '    def get_column_data(self, column: Union[int, str], sheet_name: str = None, **kwargs) -> List[Any]:',
          '        """Get all data from a specific column"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        return df[column].tolist()',
          '    ',
          '    def filter_data(self, condition: str, sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Filter data using pandas query syntax',
          '        condition: String condition for pandas query',
          '        """',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.query(condition)',
          '    ',
          '    def sort_data(self, by: Union[str, List[str]], ascending: Union[bool, List[bool]] = True, sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """Sort data by specified columns"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.sort_values(by=by, ascending=ascending)',
          '    ',
          '    def group_data(self, by: Union[str, List[str]], sheet_name: str = None) -> pd.core.groupby.DataFrameGroupBy:',
          '        """Group data by specified columns"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            df = self.read_sheet()',
          '        ',
          '        return df.groupby(by)',
          '    ',
          '    def get_statistics(self, sheet_name: str = None) -> Dict[str, Any]:',
          '        """Get basic statistics for numeric columns"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            df = self.read_sheet()',
          '        ',
          '        return df.describe().to_dict()',
          '    ',
          '    def search_value(self, search_value: str, columns: Optional[List[str]] = None, sheet_name: str = None, case_sensitive: bool = False, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Search for a value in specified columns (or all columns if None)',
          '        """',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        ',
          '        if columns is None:',
          '            columns = df.columns.tolist()',
          '        ',
          '        if case_sensitive:',
          '            mask = df[columns].apply(lambda x: x.astype(str).str.contains(search_value, na=False)).any(axis=1)',
          '        else:',
          '            mask = df[columns].apply(lambda x: x.astype(str).str.contains(search_value, case=False, na=False)).any(axis=1)',
          '        ',
          '        return df[mask]',
          '    ',
          '    def get_unique_values(self, column: Union[int, str], sheet_name: str = None, **kwargs) -> List[Any]:',
          '        """Get unique values from a specific column"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        return df[column].unique().tolist()',
          '    ',
          '    def handle_missing_data(self, strategy: str = "drop", sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Handle missing data with different strategies',
          '        strategy: "drop", "fill", "interpolate", "forward_fill", "backward_fill"',
          '        """',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        ',
          '        if strategy == "drop":',
          '            return df.dropna()',
          '        elif strategy == "fill":',
          '            return df.fillna("")',
          '        elif strategy == "interpolate":',
          '            return df.interpolate()',
          '        elif strategy == "forward_fill":',
          '            return df.fillna(method="ffill")',
          '        elif strategy == "backward_fill":',
          '            return df.fillna(method="bfill")',
          '        else:',
          '            raise ValueError(f"Unknown strategy: {strategy}")',
          '    ',
          '    def convert_data_types(self, type_mapping: Dict[str, str], sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Convert data types for specified columns',
          '        type_mapping: Dictionary mapping column names to pandas data types',
          '        """',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.astype(type_mapping)',
          '    ',
          '    def export_to_csv(self, output_path: str, sheet_name: str = None, **kwargs):',
          '        """Export current data to CSV file"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            df = self.read_sheet()',
          '        ',
          '        df.to_csv(output_path, index=False)',
          '    ',
          '    def export_to_json(self, output_path: str, sheet_name: str = None, **kwargs):',
          '        """Export current data to JSON file"""',
          '        if sheet_name:',
          '            df = self.read_sheet(sheet_name)',
          '        elif self.current_data is not None:',
          '            df = self.current_data',
          '        else:',
          '            df = self.read_sheet()',
          '        ',
          '        df.to_json(output_path, orient="records", indent=2)',
          '    ',
          '    def validate_data(self, sheet_name: str = None, **kwargs) -> Dict[str, Any]:',
          '        """Validate Excel data and return validation report"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        ',
          '        report = {',
          '            "total_rows": len(df),',
          '            "total_columns": len(df.columns),',
          '            "missing_values": df.isnull().sum().to_dict(),',
          '            "data_types": df.dtypes.to_dict(),',
          '            "duplicate_rows": df.duplicated().sum(),',
          '            "memory_usage": df.memory_usage(deep=True).sum(),',
          '        }',
          '        ',
          '        return report',
          '    ',
          '    def sample_data(self, n: int = 5, sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """Get a random sample of data"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.sample(n=n)',
          '    ',
          '    def head_data(self, n: int = 5, sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """Get first n rows of data"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.head(n)',
          '    ',
          '    def tail_data(self, n: int = 5, sheet_name: str = None, **kwargs) -> pd.DataFrame:',
          '        """Get last n rows of data"""',
          '        df = self.read_sheet(sheet_name, **kwargs) if sheet_name or self.current_data is None else self.current_data',
          '        return df.tail(n)',
          '    ',
          '    def __enter__(self):',
          '        """Context manager entry"""',
          '        return self',
          '    ',
          '    def __exit__(self, exc_type, exc_val, exc_tb):',
          '        """Context manager exit"""',
          '        pass',
          '',
          '# Usage Example',
          'def main():',
          '    # Using context manager',
          '    with PandasExcelReader("testdata.xlsx") as reader:',
          '        # Read with specific data types',
          '        df = reader.read_sheet(dtype={"age": int, "salary": float})',
          '        ',
          '        # Get statistics',
          '        stats = reader.get_statistics()',
          '        print("Statistics:", stats)',
          '        ',
          '        # Filter data',
          '        filtered_df = reader.filter_data("age > 25 and salary > 50000")',
          '        print(f"Filtered {len(filtered_df)} records")',
          '        ',
          '        # Search for values',
          '        results = reader.search_value("john", ["name", "email"])',
          '        print(f"Found {len(results)} matches")',
          '        ',
          '        # Handle missing data',
          '        clean_df = reader.handle_missing_data("drop")',
          '        print(f"After cleaning: {len(clean_df)} records")',
          '        ',
          '        # Validate data',
          '        validation_report = reader.validate_data()',
          '        print("Validation report:", validation_report)',
          '',
          '# PyTest Data Provider',
          'import pytest',
          '',
          '@pytest.fixture(params=lambda: PandasExcelReader("testdata.xlsx").get_data_as_dict())',
          'def excel_data(request):',
          '    """Dynamic fixture with Excel data"""',
          '    return request.param',
          '',
          'def test_with_excel_data(excel_data):',
          '    """Test with each row of Excel data"""',
          '    assert excel_data["username"] is not None',
          '    assert "@" in excel_data["email"]'
        ];
      }
    } else if (selectedLanguage === 'csharp') {
      return [
        '// C# Excel Reading Implementation with EPPlus',
        'using OfficeOpenXml;',
        'using System;',
        'using System.Collections.Generic;',
        'using System.IO;',
        'using System.Linq;',
        'using System.Data;',
        '',
        'public class ExcelDataReader : IDisposable',
        '{',
        '    private ExcelPackage _package;',
        '    private ExcelWorksheet _worksheet;',
        '    private string _filePath;',
        '    ',
        '    public ExcelDataReader(string filePath)',
        '    {',
        '        if (!File.Exists(filePath))',
        '            throw new FileNotFoundException($"Excel file not found: {filePath}");',
        '        ',
        '        _filePath = filePath;',
        '        FileInfo fileInfo = new FileInfo(filePath);',
        '        _package = new ExcelPackage(fileInfo);',
        '    }',
        '    ',
        '    public List<string> GetWorksheetNames()',
        '    {',
        '        return _package.Workbook.Worksheets.Select(ws => ws.Name).ToList();',
        '    }',
        '    ',
        '    public void OpenWorksheet(string worksheetName)',
        '    {',
        '        _worksheet = _package.Workbook.Worksheets[worksheetName];',
        '        if (_worksheet == null)',
        '            throw new ArgumentException($"Worksheet \'{worksheetName}\' not found");',
        '    }',
        '    ',
        '    public int GetRowCount()',
        '    {',
        '        if (_worksheet == null)',
        '            throw new InvalidOperationException("No worksheet is currently open");',
        '        ',
        '        return _worksheet.Dimension.End.Row;',
        '    }',
        '    ',
        '    public int GetColumnCount()',
        '    {',
        '        if (_worksheet == null)',
        '            throw new InvalidOperationException("No worksheet is currently open");',
        '        ',
        '        return _worksheet.Dimension.End.Column;',
        '    }',
        '    ',
        '    public string GetCellValue(int row, int column)',
        '    {',
        '        if (_worksheet == null)',
        '            throw new InvalidOperationException("No worksheet is currently open");',
        '        ',
        '        var cell = _worksheet.Cells[row, column];',
        '        return cell?.Text ?? string.Empty;',
        '    }',
        '    ',
        '    public T GetCellValue<T>(int row, int column)',
        '    {',
        '        if (_worksheet == null)',
        '            throw new InvalidOperationException("No worksheet is currently open");',
        '        ',
        '        var cell = _worksheet.Cells[row, column];',
        '        if (cell == null || cell.Value == null)',
        '            return default(T);',
        '        ',
        '        try',
        '        {',
        '            return (T)Convert.ChangeType(cell.Value, typeof(T));',
        '        }',
        '        catch',
        '        {',
        '            return default(T);',
        '        }',
        '    }',
        '    ',
        '    public List<List<string>> GetAllData()',
        '    {',
        '        if (_worksheet == null)',
        '            throw new InvalidOperationException("No worksheet is currently open");',
        '        ',
        '        var data = new List<List<string>>();',
        '        var rowCount = GetRowCount();',
        '        var colCount = GetColumnCount();',
        '        ',
        '        for (int row = 1; row <= rowCount; row++)',
        '        {',
        '            var rowData = new List<string>();',
        '            for (int col = 1; col <= colCount; col++)',
        '            {',
        '                rowData.Add(GetCellValue(row, col));',
        '            }',
        '            data.Add(rowData);',
        '        }',
        '        ',
        '        return data;',
        '    }',
        '    ',
        '    public List<string> GetHeaders()',
        '    {',
        '        var allData = GetAllData();',
        '        return allData.FirstOrDefault() ?? new List<string>();',
        '    }',
        '    ',
        '    public List<List<string>> GetDataWithoutHeaders()',
        '    {',
        '        var allData = GetAllData();',
        '        return allData.Skip(1).ToList();',
        '    }',
        '    ',
        '    public DataTable ToDataTable()',
        '    {',
        '        if (_worksheet == null)',
        '            throw new InvalidOperationException("No worksheet is currently open");',
        '        ',
        '        var dataTable = new DataTable();',
        '        var headers = GetHeaders();',
        '        ',
        '        // Create columns',
        '        foreach (var header in headers)',
        '        {',
        '            dataTable.Columns.Add(header);',
        '        }',
        '        ',
        '        // Add rows',
        '        var dataRows = GetDataWithoutHeaders();',
        '        foreach (var row in dataRows)',
        '        {',
        '            dataTable.Rows.Add(row.ToArray());',
        '        }',
        '        ',
        '        return dataTable;',
        '    }',
        '    ',
        '    public List<T> GetObjects<T>() where T : class, new()',
        '    {',
        '        var headers = GetHeaders();',
        '        var dataRows = GetDataWithoutHeaders();',
        '        var objects = new List<T>();',
        '        ',
        '        foreach (var row in dataRows)',
        '        {',
        '            var obj = new T();',
        '            var properties = typeof(T).GetProperties();',
        '            ',
        '            for (int i = 0; i < Math.Min(headers.Count, row.Count); i++)',
        '            {',
        '                var property = properties.FirstOrDefault(p => ',
        '                    p.Name.Equals(headers[i], StringComparison.OrdinalIgnoreCase));',
        '                ',
        '                if (property != null && property.CanWrite)',
        '                {',
        '                    try',
        '                    {',
        '                        var value = Convert.ChangeType(row[i], property.PropertyType);',
        '                        property.SetValue(obj, value);',
        '                    }',
        '                    catch',
        '                    {',
        '                        // Handle conversion errors',
        '                    }',
        '                }',
        '            }',
        '            ',
        '            objects.Add(obj);',
        '        }',
        '        ',
        '        return objects;',
        '    }',
        '    ',
        '    public void Dispose()',
        '    {',
        '        _package?.Dispose();',
        '    }',
        '}',
        '',
        '// MSTest Data Provider Integration',
        'using Microsoft.VisualStudio.TestTools.UnitTesting;',
        'using System.Data.OleDb;',
        '',
        '[TestClass]',
        'public class ExcelTestDataProvider',
        '{',
        '    private static DataTable _testData;',
        '    ',
        '    [ClassInitialize]',
        '    public static void SetupTestData(TestContext context)',
        '    {',
        '        using (var reader = new ExcelDataReader("TestData.xlsx"))',
        '        {',
        '            reader.OpenWorksheet("LoginData");',
        '            _testData = reader.ToDataTable();',
        '        }',
        '    }',
        '    ',
        '    [TestMethod]',
        '    [DataSource("System.Data.OleDb",',
        '        "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=TestData.xlsx;Extended Properties=\\"Excel 12.0;HDR=YES;\\"",',
        '        "LoginData$", DataAccessMethod.Sequential)]',
        '    public void TestLogin()',
        '    {',
        '        string username = TestContext.DataRow["Username"].ToString();',
        '        string password = TestContext.DataRow["Password"].ToString();',
        '        string expected = TestContext.DataRow["Expected"].ToString();',
        '        ',
        '        // Test implementation',
        '        Assert.IsNotNull(username);',
        '        Assert.IsNotNull(password);',
        '    }',
        '    ',
        '    public TestContext TestContext { get; set; }',
        '}'
      ];
    }
    
    // Default return if no specific combination matches
    return [
      '// No implementation available for this combination',
      '// Please select a different language or library',
      '',
      '// Available combinations:',
      '// - Java: Apache POI, JXL',
      '// - Python: OpenPyXL, Pandas', 
      '// - C#: EPPlus'
    ];
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FileSpreadsheet}
        category="Selenium · Data Reading"
        title="Excel Data Reading"
        description="Comprehensive guide to reading Excel files in test automation with multiple libraries and frameworks."
        colorTheme="emerald"
      />

      {/* Introduction */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Excel Data Reading Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Why Excel for Test Data?
                </h3>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                  Excel files provide an excellent format for test data management with 
                  structured tables, easy editing, and widespread familiarity among team members.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Key Advantages
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Easy data maintenance without code changes</li>
                  <li>• Support for multiple data types and formulas</li>
                  <li>• Visual data validation and formatting</li>
                  <li>• Integration with existing business processes</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Common Use Cases
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Login credential testing</li>
                  <li>• Form validation scenarios</li>
                  <li>• Configuration parameters</li>
                  <li>• Test case management</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  File Formats Supported
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  Modern libraries support both .xls (Excel 97-2003) and .xlsx (Excel 2007+) 
                  formats with full feature compatibility.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Library Selection */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Library Selection
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Choose the appropriate library for your programming language
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={selectedLanguage} onValueChange={(value) => {
            const newLanguage = value as 'java' | 'python' | 'csharp';
            setSelectedLanguage(newLanguage);
            // Auto-select appropriate library for the language
            if (newLanguage === 'java') {
              setSelectedLibrary('apache');
            } else if (newLanguage === 'python') {
              setSelectedLibrary('openpyxl');
            } else if (newLanguage === 'csharp') {
              setSelectedLibrary('epplus');
            }
          }}>
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="java" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Java</TabsTrigger>
              <TabsTrigger value="python" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Python</TabsTrigger>
              <TabsTrigger value="csharp" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">C#</TabsTrigger>
            </TabsList>

            <TabsContent value="java" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Apache POI',
                    description: 'Most comprehensive Java library for Excel operations',
                    features: ['Supports .xls and .xlsx', 'Rich formatting support', 'Formula evaluation', 'Chart manipulation'],
                    color: 'red',
                    recommended: true
                  },
                  {
                    name: 'JXL',
                    description: 'Lightweight library for .xls files only',
                    features: ['Simple API', 'Fast performance', 'Small footprint', '.xls format only'],
                    color: 'blue',
                    recommended: false
                  }
                ].map((lib) => (
                  <Card 
                    key={lib.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'java' && lib.name === 'Apache POI' && selectedLibrary === 'apache') ||
                      (selectedLanguage === 'java' && lib.name === 'JXL' && selectedLibrary === 'jxl')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedLibrary(lib.name === 'Apache POI' ? 'apache' : 'jxl')}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold">{lib.name}</CardTitle>
                        {lib.recommended && (
                          <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                        )}
                      </div>
                      <CardDescription className="text-xs">{lib.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {lib.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="python" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'OpenPyXL',
                    description: 'Modern Python library for Excel 2010+ files',
                    features: ['.xlsx format support', 'Read/write operations', 'Chart support', 'Style manipulation'],
                    color: 'green',
                    recommended: true
                  },
                  {
                    name: 'Pandas',
                    description: 'Data analysis library with Excel support',
                    features: ['DataFrame integration', 'Data analysis tools', 'Statistical functions', 'CSV export'],
                    color: 'orange',
                    recommended: false
                  }
                ].map((lib) => (
                  <Card 
                    key={lib.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'python' && lib.name === 'OpenPyXL' && selectedLibrary === 'openpyxl') ||
                      (selectedLanguage === 'python' && lib.name === 'Pandas' && selectedLibrary === 'pandas')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedLibrary(lib.name === 'OpenPyXL' ? 'openpyxl' : 'pandas')}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold">{lib.name}</CardTitle>
                        {lib.recommended && (
                          <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                        )}
                      </div>
                      <CardDescription className="text-xs">{lib.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {lib.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="csharp" className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  EPPlus
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  The premier .NET library for Excel file manipulation with comprehensive support for .xlsx files.
                </p>
                <div className="space-y-1">
                  {[
                    'Modern .NET API design',
                    'Excellent performance',
                    'Full .xlsx feature support',
                    'LINQ integration',
                    'Chart and pivot table support'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300">
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Implementation Examples */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Complete Implementation
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Production-ready code examples with error handling and best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  {selectedLanguage === 'java' ? (selectedLibrary === 'apache' ? 'Apache POI' : 'JXL') :
                   selectedLanguage === 'python' ? (selectedLibrary === 'openpyxl' ? 'OpenPyXL' : 'Pandas') :
                   'EPPlus'}
                </Badge>
                <Badge variant="outline">{selectedLanguage.toUpperCase()}</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(getExcelCode().join('\n'), 'Excel reading code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {getExcelCode().map((line, index) => (
                    <div key={index}>
                      <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                      <span className={
                        line.includes('class ') ? 'text-blue-600 dark:text-blue-400' :
                        line.includes('def ') || line.includes('public ') ? 'text-green-600 dark:text-green-400' :
                        line.includes('#') || line.includes('//') ? 'text-gray-500 dark:text-gray-500' :
                        line.includes('import ') || line.includes('using ') ? 'text-orange-600 dark:text-orange-400' :
                        line.includes('@') ? 'text-purple-600 dark:text-purple-400' :
                        'text-gray-800 dark:text-gray-200'
                      }>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
            
            {/* Code Features */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Features:</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong className="text-blue-600 dark:text-blue-400">File Handling:</strong> Automatic format detection and proper resource management</p>
                <p><strong className="text-green-600 dark:text-green-400">Data Extraction:</strong> Multiple data formats (strings, numbers, dates, booleans)</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Error Handling:</strong> Comprehensive exception handling and validation</p>
                <p><strong className="text-orange-600 dark:text-orange-400">Integration:</strong> Test framework integration examples</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Advanced Features
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Advanced Excel operations for complex test scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Data Validation',
                description: 'Validate cell data types and ranges',
                icon: <CheckCircle className="w-5 h-5" />,
                features: ['Type checking', 'Range validation', 'Custom rules', 'Error reporting']
              },
              {
                title: 'Formula Evaluation',
                description: 'Read and evaluate Excel formulas',
                icon: <Activity className="w-5 h-5" />,
                features: ['Cell references', 'Built-in functions', 'Custom formulas', 'Result caching']
              },
              {
                title: 'Style Information',
                description: 'Access cell formatting and styles',
                icon: <Eye className="w-5 h-5" />,
                features: ['Font properties', 'Cell colors', 'Borders', 'Conditional formatting']
              },
              {
                title: 'Chart Data',
                description: 'Extract data from charts and graphs',
                icon: <BarChart3 className="w-5 h-5" />,
                features: ['Chart series', 'Data points', 'Axis labels', 'Legend information']
              },
              {
                title: 'Pivot Tables',
                description: 'Read pivot table data and structure',
                icon: <Grid3x3 className="w-5 h-5" />,
                features: ['Row/column fields', 'Value fields', 'Filters', 'Calculated fields']
              },
              {
                title: 'Named Ranges',
                description: 'Access named ranges and references',
                icon: <Tag className="w-5 h-5" />,
                features: ['Range definitions', 'Value extraction', 'Scope management', 'Dynamic ranges']
              }
            ].map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-sm">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-3 h-3" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              Performance Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Optimize Excel reading for large files
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Streaming for Large Files</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enable streaming mode to process large Excel files without loading everything into memory.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <RefreshCw className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Reuse Workbook Instances</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keep workbook instances open during test execution to avoid repeated file loading overhead.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Activity className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Lazy Loading Strategy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Load data only when needed to reduce memory usage and improve test startup time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
              Data Management Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Structure and organize your test data effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <FileText className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Consistent Header Structure</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use descriptive, consistent column headers that match your test object properties.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Filter className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Data Validation Rules</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implement validation to ensure data quality before using it in tests.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Lock className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Secure Sensitive Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Encrypt or externalize sensitive information like passwords and API keys.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Troubleshooting */}
      <Alert className="border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-950/20">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <AlertTitle className="text-red-900 dark:text-red-100">Common Issues & Solutions</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200 space-y-2">
          <div>• <strong>File Not Found:</strong> Ensure the Excel file path is correct and the file exists</div>
          <div>• <strong>Permission Denied:</strong> Check file permissions and ensure the file is not locked by another application</div>
          <div>• <strong>Memory Issues:</strong> Use streaming mode for large files or process data in chunks</div>
          <div>• <strong>Format Errors:</strong> Verify the Excel file is not corrupted and is in a supported format</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
