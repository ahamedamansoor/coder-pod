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
  FileText,
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
  Quote,
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
  TrendingUp,
  FileSpreadsheet,
  FilePlus,
  FileMinus,
  FileCheck,
  FileX,
  FileArchive,
  FileCode,
  FileSearch,
  FileWarning,
  FileQuestion
} from 'lucide-react';

export function CSVDataReadingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp'>('java');
  const [selectedLibrary, setSelectedLibrary] = useState<'opencsv' | 'commons' | 'csv' | 'pandas'>('opencsv');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getCSVCode = (): string[] => {
    if (selectedLanguage === 'java') {
      if (selectedLibrary === 'opencsv') {
        return [
          '// OpenCSV CSV Reading Implementation',
          'import com.opencsv.CSVReader;',
          'import com.opencsv.CSVReaderBuilder;',
          'import com.opencsv.exceptions.CsvException;',
          'import com.opencsv.enums.CSVReaderNullFieldIndicator;',
          'import java.io.FileReader;',
          'import java.io.IOException;',
          'import java.util.List;',
          'import java.util.ArrayList;',
          'import java.util.Arrays;',
          'import java.util.stream.Collectors;',
          '',
          'public class CSVDataReader {',
          '    private String filePath;',
          '    private char separator;',
          '    private char quoteCharacter;',
          '    private boolean skipHeader;',
          '    ',
          '    public CSVDataReader(String filePath) {',
          '        this(filePath, \',\', \'"\', true);',
          '    }',
          '    ',
          '    public CSVDataReader(String filePath, char separator, char quoteCharacter, boolean skipHeader) {',
          '        this.filePath = filePath;',
          '        this.separator = separator;',
          '        this.quoteCharacter = quoteCharacter;',
          '        this.skipHeader = skipHeader;',
          '    }',
          '    ',
          '    public List<String[]> readAll() throws IOException, CsvException {',
          '        try (CSVReader reader = createReader()) {',
          '            List<String[]> records = reader.readAll();',
          '            ',
          '            if (skipHeader && !records.isEmpty()) {',
          '                records.remove(0);',
          '            }',
          '            ',
          '            return records;',
          '        }',
          '    }',
          '    ',
          '    public List<String[]> readAllWithValidation() throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        List<String[]> validRecords = new ArrayList<>();',
          '        ',
          '        for (String[] record : records) {',
          '            if (isValidRecord(record)) {',
          '                validRecords.add(record);',
          '            }',
          '        }',
          '        ',
          '        return validRecords;',
          '    }',
          '    ',
          '    private boolean isValidRecord(String[] record) {',
          '        if (record == null || record.length == 0) {',
          '            return false;',
          '        }',
          '        ',
          '        // Check if all fields are empty',
          '        for (String field : record) {',
          '            if (field != null && !field.trim().isEmpty()) {',
          '                return true;',
          '            }',
          '        }',
          '        ',
          '        return false;',
          '    }',
          '    ',
          '    public List<String> getHeaders() throws IOException, CsvException {',
          '        try (CSVReader reader = createReader()) {',
          '            List<String[]> records = reader.readAll();',
          '            ',
          '            if (!records.isEmpty()) {',
          '                return Arrays.asList(records.get(0));',
          '            }',
          '            ',
          '            return new ArrayList<>();',
          '        }',
          '    }',
          '    ',
          '    public List<List<String>> readAllAsList() throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        return records.stream()',
          '                .map(Arrays::asList)',
          '                .collect(Collectors.toList());',
          '    }',
          '    ',
          '    public int getRowCount() throws IOException, CsvException {',
          '        return readAll().size();',
          '    }',
          '    ',
          '    public int getColumnCount() throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        return records.isEmpty() ? 0 : records.get(0).length;',
          '    }',
          '    ',
          '    public String getCellValue(int row, int column) throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        ',
          '        if (row < 0 || row >= records.size()) {',
          '            throw new IndexOutOfBoundsException("Row index out of bounds");',
          '        }',
          '        ',
          '        String[] record = records.get(row);',
          '        if (column < 0 || column >= record.length) {',
          '            throw new IndexOutOfBoundsException("Column index out of bounds");',
          '        }',
          '        ',
          '        return record[column];',
          '    }',
          '    ',
          '    public List<String> getColumn(int columnIndex) throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        List<String> column = new ArrayList<>();',
          '        ',
          '        for (String[] record : records) {',
          '            if (columnIndex < record.length) {',
          '                column.add(record[columnIndex]);',
          '            } else {',
          '                column.add("");',
          '            }',
          '        }',
          '        ',
          '        return column;',
          '    }',
          '    ',
          '    public List<String[]> searchByValue(String searchValue) throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        List<String[]> matches = new ArrayList<>();',
          '        ',
          '        for (String[] record : records) {',
          '            for (String field : record) {',
          '                if (field != null && field.toLowerCase().contains(searchValue.toLowerCase())) {',
          '                    matches.add(record);',
          '                    break;',
          '                }',
          '            }',
          '        }',
          '        ',
          '        return matches;',
          '    }',
          '    ',
          '    public List<String[]> filterByColumn(int columnIndex, String filterValue) throws IOException, CsvException {',
          '        List<String[]> records = readAll();',
          '        List<String[]> filtered = new ArrayList<>();',
          '        ',
          '        for (String[] record : records) {',
          '            if (columnIndex < record.length) {',
          '                String value = record[columnIndex];',
          '                if (value != null && value.equals(filterValue)) {',
          '                    filtered.add(record);',
          '                }',
          '            }',
          '        }',
          '        ',
          '        return filtered;',
          '    }',
          '    ',
          '    private CSVReader createReader() throws IOException {',
          '        FileReader fileReader = new FileReader(filePath);',
          '        return new CSVReaderBuilder(fileReader)',
          '                .withSeparator(separator)',
          '                .withQuoteChar(quoteCharacter)',
          '                .withFieldAsNull(CSVReaderNullFieldIndicator.EMPTY_SEPARATORS)',
          '                .build();',
          '    }',
          '    ',
          '    // Usage Example',
          '    public static void main(String[] args) {',
          '        try {',
          '            CSVDataReader reader = new CSVDataReader("testdata.csv");',
          '            ',
          '            // Read all records',
          '            List<String[]> records = reader.readAll();',
          '            System.out.println("Total records: " + records.size());',
          '            ',
          '            // Get headers',
          '            List<String> headers = reader.getHeaders();',
          '            System.out.println("Headers: " + headers);',
          '            ',
          '            // Search for specific value',
          '            List<String[]> matches = reader.searchByValue("john");',
          '            System.out.println("Found " + matches.size() + " matches");',
          '            ',
          '        } catch (IOException | CsvException e) {',
          '            e.printStackTrace();',
          '        }',
          '    }',
          '}',
          '',
          '// TestNG Data Provider Integration',
          'import org.testng.annotations.DataProvider;',
          '',
          'public class CSVDataProvider {',
          '    @DataProvider(name = "csvData")',
          '    public Object[][] getCSVData() throws IOException, CsvException {',
          '        CSVDataReader reader = new CSVDataReader("testdata.csv");',
          '        List<String[]> records = reader.readAll();',
          '        ',
          '        Object[][] testData = new Object[records.size()][];',
          '        for (int i = 0; i < records.size(); i++) {',
          '            testData[i] = records.get(i);',
          '        }',
          '        ',
          '        return testData;',
          '    }',
          '}'
        ];
      } else if (selectedLibrary === 'commons') {
        return [
          '// Apache Commons CSV Reading Implementation',
          'import org.apache.commons.csv.CSVFormat;',
          'import org.apache.commons.csv.CSVParser;',
          'import org.apache.commons.csv.CSVRecord;',
          'import java.io.FileReader;',
          'import java.io.IOException;',
          'import java.io.Reader;',
          'import java.util.ArrayList;',
          'import java.util.List;',
          'import java.util.Arrays;',
          '',
          'public class CommonsCSVReader {',
          '    private String filePath;',
          '    private CSVFormat format;',
          '    ',
          '    public CommonsCSVReader(String filePath) {',
          '        this(filePath, CSVFormat.DEFAULT.withFirstRecordAsHeader());',
          '    }',
          '    ',
          '    public CommonsCSVReader(String filePath, CSVFormat format) {',
          '        this.filePath = filePath;',
          '        this.format = format;',
          '    }',
          '    ',
          '    public List<CSVRecord> readAll() throws IOException {',
          '        try (Reader reader = new FileReader(filePath);',
          '             CSVParser parser = new CSVParser(reader, format)) {',
          '            return parser.getRecords();',
          '        }',
          '    }',
          '    ',
          '    public List<String> getHeaders() throws IOException {',
          '        try (Reader reader = new FileReader(filePath);',
          '             CSVParser parser = new CSVParser(reader, format)) {',
          '            return parser.getHeaderNames();',
          '        }',
          '    }',
          '    ',
          '    public List<String[]> readAllAsArray() throws IOException {',
          '        List<CSVRecord> records = readAll();',
          '        List<String[]> result = new ArrayList<>();',
          '        ',
          '        for (CSVRecord record : records) {',
          '            String[] values = new String[record.size()];',
          '            for (int i = 0; i < record.size(); i++) {',
          '                values[i] = record.get(i);',
          '            }',
          '            result.add(values);',
          '        }',
          '        ',
          '        return result;',
          '    }',
          '    ',
          '    public List<List<String>> readAllAsList() throws IOException {',
          '        List<CSVRecord> records = readAll();',
          '        List<List<String>> result = new ArrayList<>();',
          '        ',
          '        for (CSVRecord record : records) {',
          '            List<String> values = new ArrayList<>();',
          '            for (int i = 0; i < record.size(); i++) {',
          '                values.add(record.get(i));',
          '            }',
          '            result.add(values);',
          '        }',
          '        ',
          '        return result;',
          '    }',
          '    ',
          '    public int getRowCount() throws IOException {',
          '        return readAll().size();',
          '    }',
          '    ',
          '    public int getColumnCount() throws IOException {',
          '        List<CSVRecord> records = readAll();',
          '        return records.isEmpty() ? 0 : records.get(0).size();',
          '    }',
          '    ',
          '    public String getCellValue(int row, int column) throws IOException {',
          '        List<CSVRecord> records = readAll();',
          '        ',
          '        if (row < 0 || row >= records.size()) {',
          '            throw new IndexOutOfBoundsException("Row index out of bounds");',
          '        }',
          '        ',
          '        CSVRecord record = records.get(row);',
          '        if (column < 0 || column >= record.size()) {',
          '            throw new IndexOutOfBoundsException("Column index out of bounds");',
          '        }',
          '        ',
          '        return record.get(column);',
          '    }',
          '}'
        ];
      }
    } else if (selectedLanguage === 'python') {
      if (selectedLibrary === 'csv') {
        return [
          '# Python CSV Module Implementation',
          'import csv',
          'import os',
          'from typing import List, Dict, Any, Union, Iterator',
          'from pathlib import Path',
          '',
          'class CSVDataReader:',
          '    """',
          '    Comprehensive CSV reader with advanced features',
          '    """',
          '    ',
          '    def __init__(self, file_path: str, delimiter: str = \',\', quotechar: str = \'"\', encoding: str = \'utf-8\'):',
          '        """',
          '        Initialize CSV reader',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"CSV file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.delimiter = delimiter',
          '        self.quotechar = quotechar',
          '        self.encoding = encoding',
          '        self.headers = None',
          '    ',
          '    def read_all(self) -> List[List[str]]:',
          '        """',
          '        Read all data from CSV file',
          '        """',
          '        with open(self.file_path, \'r\', encoding=self.encoding, newline=\'\') as file:',
          '            reader = csv.reader(file, delimiter=self.delimiter, quotechar=self.quotechar)',
          '            return list(reader)',
          '    ',
          '    def read_all_as_dict(self) -> List[Dict[str, str]]:',
          '        """',
          '        Read all data as list of dictionaries using headers as keys',
          '        """',
          '        with open(self.file_path, \'r\', encoding=self.encoding, newline=\'\') as file:',
          '            reader = csv.DictReader(file, delimiter=self.delimiter, quotechar=self.quotechar)',
          '            return list(reader)',
          '    ',
          '    def get_headers(self) -> List[str]:',
          '        """',
          '        Get column headers from first row',
          '        """',
          '        if self.headers is None:',
          '            with open(self.file_path, \'r\', encoding=self.encoding, newline=\'\') as file:',
          '                reader = csv.reader(file, delimiter=self.delimiter, quotechar=self.quotechar)',
          '                try:',
          '                    self.headers = next(reader)',
          '                except StopIteration:',
          '                    self.headers = []',
          '        return self.headers',
          '    ',
          '    def get_data_without_headers(self) -> List[List[str]]:',
          '        """',
          '        Get all data except the first row (headers)',
          '        """',
          '        all_data = self.read_all()',
          '        return all_data[1:] if len(all_data) > 1 else []',
          '    ',
          '    def get_row_count(self) -> int:',
          '        """',
          '        Get number of data rows (excluding headers)',
          '        """',
          '        return len(self.get_data_without_headers())',
          '    ',
          '    def get_column_count(self) -> int:',
          '        """',
          '        Get number of columns',
          '        """',
          '        headers = self.get_headers()',
          '        return len(headers)',
          '    ',
          '    def get_cell_value(self, row: int, column: int) -> str:',
          '        """',
          '        Get cell value at specific row and column (0-indexed)',
          '        """',
          '        data = self.get_data_without_headers()',
          '        ',
          '        if row < 0 or row >= len(data):',
          '            raise IndexError(f"Row index {row} out of bounds")',
          '        ',
          '        if column < 0 or column >= len(data[row]):',
          '            raise IndexError(f"Column index {column} out of bounds")',
          '        ',
          '        return data[row][column]',
          '    ',
          '    def get_column(self, column_index: Union[int, str]) -> List[str]:',
          '        """',
          '        Get all data from a specific column',
          '        column_index: column index (0-based) or column name',
          '        """',
          '        if isinstance(column_index, str):',
          '            headers = self.get_headers()',
          '            if column_index not in headers:',
          '                raise ValueError(f"Column \'{column_index}\' not found")',
          '            column_index = headers.index(column_index)',
          '        ',
          '        data = self.get_data_without_headers()',
          '        column_data = []',
          '        ',
          '        for row in data:',
          '            if column_index < len(row):',
          '                column_data.append(row[column_index])',
          '            else:',
          '                column_data.append("")',
          '        ',
          '        return column_data',
          '    ',
          '    def search_value(self, search_value: str, case_sensitive: bool = False) -> List[List[str]]:',
          '        """',
          '        Search for a value across all cells and return matching rows',
          '        """',
          '        data = self.get_data_without_headers()',
          '        matches = []',
          '        ',
          '        for row in data:',
          '            for cell in row:',
          '                if case_sensitive:',
          '                    if search_value in cell:',
          '                        matches.append(row)',
          '                        break',
          '                else:',
          '                    if search_value.lower() in cell.lower():',
          '                        matches.append(row)',
          '                        break',
          '        ',
          '        return matches',
          '    ',
          '    def filter_by_column(self, column_index: Union[int, str], filter_value: str) -> List[List[str]]:',
          '        """',
          '        Filter rows by column value',
          '        """',
          '        column_data = self.get_column(column_index)',
          '        data = self.get_data_without_headers()',
          '        filtered = []',
          '        ',
          '        for i, value in enumerate(column_data):',
          '            if value == filter_value:',
          '                filtered.append(data[i])',
          '        ',
          '        return filtered',
          '    ',
          '    def get_unique_values(self, column_index: Union[int, str]) -> List[str]:',
          '        """',
          '        Get unique values from a specific column',
          '        """',
          '        column_data = self.get_column(column_index)',
          '        return list(set(column_data))',
          '    ',
          '    def validate_data(self) -> Dict[str, Any]:',
          '        """',
          '        Validate CSV data and return validation report',
          '        """',
          '        data = self.get_data_without_headers()',
          '        headers = self.get_headers()',
          '        ',
          '        report = {',
          '            "total_rows": len(data),',
          '            "total_columns": len(headers),',
          '            "empty_rows": 0,',
          '            "inconsistent_columns": [],',
          '            "missing_headers": []',
          '        }',
          '        ',
          '        # Check for empty rows',
          '        for row in data:',
          '            if all(cell.strip() == "" for cell in row):',
          '                report["empty_rows"] += 1',
          '        ',
          '        # Check for inconsistent column counts',
          '        expected_columns = len(headers)',
          '        for i, row in enumerate(data):',
          '            if len(row) != expected_columns:',
          '                report["inconsistent_columns"].append({',
          '                    "row": i + 2,  # +2 because headers are row 1 and data starts at row 2',
          '                    "expected": expected_columns,',
          '                    "actual": len(row)',
          '                })',
          '        ',
          '        # Check for missing headers',
          '        for i, header in enumerate(headers):',
          '            if header.strip() == "":',
          '                report["missing_headers"].append(i)',
          '        ',
          '        return report',
          '    ',
          '    def iterator(self) -> Iterator[List[str]]:',
          '        """',
          '        Return an iterator for memory-efficient processing of large files',
          '        """',
          '        with open(self.file_path, \'r\', encoding=self.encoding, newline=\'\') as file:',
          '            reader = csv.reader(file, delimiter=self.delimiter, quotechar=self.quotechar)',
          '            # Skip headers',
          '            next(reader, None)',
          '            for row in reader:',
          '                yield row',
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
          '    with CSVDataReader("testdata.csv") as reader:',
          '        print("Headers:", reader.get_headers())',
          '        print("Row count:", reader.get_row_count())',
          '        ',
          '        # Read data as dictionary',
          '        data_dict = reader.read_all_as_dict()',
          '        print(f"Found {len(data_dict)} records")',
          '        ',
          '        # Search for specific value',
          '        matches = reader.search_value("john")',
          '        print(f"Found {len(matches)} matches")',
          '        ',
          '        # Validate data',
          '        validation_report = reader.validate_data()',
          '        print("Validation report:", validation_report)',
          '',
          '# PyTest Integration',
          'import pytest',
          '',
          '@pytest.fixture',
          'def csv_data():',
          '    """PyTest fixture for CSV data"""',
          '    with CSVDataReader("testdata.csv") as reader:',
          '        return reader.read_all_as_dict()',
          '',
          'def test_with_csv_data(csv_data):',
          '    """Test using CSV data fixture"""',
          '    for row in csv_data:',
          '        assert row["username"] is not None',
          '        assert "@" in row["email"]',
          '',
          '# Memory-efficient processing for large files',
          'def process_large_csv(file_path: str):',
          '    """Process large CSV file without loading everything into memory"""',
          '    with CSVDataReader(file_path) as reader:',
          '        for row in reader.iterator():',
          '            # Process each row individually',
          '            process_row(row)',
          '',
          'def process_row(row: List[str]):',
          '    """Process a single row of data"""',
          '    # Your processing logic here',
          '    pass'
        ];
      } else if (selectedLibrary === 'pandas') {
        return [
          '# Pandas CSV Reading Implementation',
          'import pandas as pd',
          'import os',
          'from typing import List, Dict, Any, Union, Optional',
          'from pathlib import Path',
          '',
          'class PandasCSVReader:',
          '    """',
          '    Advanced CSV reader using pandas for data manipulation and analysis',
          '    """',
          '    ',
          '    def __init__(self, file_path: str, **kwargs):',
          '        """',
          '        Initialize CSV reader with pandas',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"CSV file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.file_name = Path(file_path).stem',
          '        self.current_data = None',
          '        self.default_params = {',
          '            "sep": ",",',
          '            "header": 0,',
          '            "index_col": None,',
          '            "usecols": None,',
          '            "dtype": None,',
          '            "na_values": ["", "NA", "N/A", "null", "NULL", "nan", "NaN"],',
          '            "keep_default_na": True,',
          '            "na_filter": True,',
          '            "skip_blank_lines": True,',
          '            "encoding": "utf-8",',
          '            "quotechar": \'"\',',
          '            "comment": "#",',
          '            "thousands": None,',
          '            "decimal": ".",',
          '        }',
          '        ',
          '        # Merge default parameters with user-provided parameters',
          '        self.read_params = {**self.default_params, **kwargs}',
          '    ',
          '    def read_csv(self, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Read CSV file as pandas DataFrame',
          '        """',
          '        params = {**self.read_params, **kwargs}',
          '        ',
          '        try:',
          '            self.current_data = pd.read_csv(self.file_path, **params)',
          '            return self.current_data',
          '        except Exception as e:',
          '            raise ValueError(f"Error reading CSV file: {str(e)}")',
          '    ',
          '    def get_data_as_list(self, **kwargs) -> List[List[Any]]:',
          '        """Get data as list of lists"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.values.tolist()',
          '    ',
          '    def get_data_as_dict(self, records: bool = True, **kwargs) -> Union[List[Dict[str, Any]], Dict[str, List[Any]]]:',
          '        """',
          '        Get data as list of dictionaries or dictionary of lists',
          '        records: If True, return list of dicts; if False, return dict of lists',
          '        """',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.to_dict("records") if records else df.to_dict("list")',
          '    ',
          '    def get_headers(self, **kwargs) -> List[str]:',
          '        """Get column headers"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.columns.tolist()',
          '    ',
          '    def get_row_count(self, **kwargs) -> int:',
          '        """Get number of rows"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return len(df)',
          '    ',
          '    def get_column_count(self, **kwargs) -> int:',
          '        """Get number of columns"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return len(df.columns)',
          '    ',
          '    def get_column_data(self, column: Union[str, int], **kwargs) -> List[Any]:',
          '        """Get all data from a specific column"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        return df[column].tolist()',
          '    ',
          '    def filter_data(self, condition: str, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Filter data using pandas query syntax',
          '        condition: String condition for pandas query',
          '        """',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.query(condition)',
          '    ',
          '    def sort_data(self, by: Union[str, List[str]], ascending: Union[bool, List[bool]] = True, **kwargs) -> pd.DataFrame:',
          '        """Sort data by specified columns"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.sort_values(by=by, ascending=ascending)',
          '    ',
          '    def group_data(self, by: Union[str, List[str]], **kwargs) -> pd.core.groupby.DataFrameGroupBy:',
          '        """Group data by specified columns"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.groupby(by)',
          '    ',
          '    def get_statistics(self, **kwargs) -> Dict[str, Any]:',
          '        """Get basic statistics for numeric columns"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.describe().to_dict()',
          '    ',
          '    def search_value(self, search_value: str, columns: Optional[List[str]] = None, case_sensitive: bool = False, **kwargs) -> pd.DataFrame:',
          '        """',
          '        Search for a value in specified columns (or all columns if None)',
          '        """',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
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
          '    def get_unique_values(self, column: Union[str, int], **kwargs) -> List[Any]:',
          '        """Get unique values from a specific column"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        return df[column].unique().tolist()',
          '    ',
          '    def get_value_counts(self, column: Union[str, int], **kwargs) -> pd.Series:',
          '        """Get value counts for a specific column"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        ',
          '        if isinstance(column, int):',
          '            column = df.columns[column]',
          '        ',
          '        return df[column].value_counts()',
          '    ',
          '    def handle_missing_data(self, strategy: str = "drop", **kwargs) -> pd.DataFrame:',
          '        """',
          '        Handle missing data with different strategies',
          '        strategy: "drop", "fill", "interpolate", "forward_fill", "backward_fill"',
          '        """',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
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
          '    def convert_data_types(self, type_mapping: Dict[str, str], **kwargs) -> pd.DataFrame:',
          '        """',
          '        Convert data types for specified columns',
          '        type_mapping: Dictionary mapping column names to pandas data types',
          '        """',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.astype(type_mapping)',
          '    ',
          '    def export_to_excel(self, output_path: str, **kwargs):',
          '        """Export current data to Excel file"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        df.to_excel(output_path, index=False)',
          '    ',
          '    def export_to_json(self, output_path: str, **kwargs):',
          '        """Export current data to JSON file"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        df.to_json(output_path, orient="records", indent=2)',
          '    ',
          '    def validate_data(self, **kwargs) -> Dict[str, Any]:',
          '        """Validate CSV data and return validation report"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
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
          '    def sample_data(self, n: int = 5, **kwargs) -> pd.DataFrame:',
          '        """Get a random sample of data"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.sample(n=n)',
          '    ',
          '    def head_data(self, n: int = 5, **kwargs) -> pd.DataFrame:',
          '        """Get first n rows of data"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
          '        return df.head(n)',
          '    ',
          '    def tail_data(self, n: int = 5, **kwargs) -> pd.DataFrame:',
          '        """Get last n rows of data"""',
          '        df = self.read_csv(**kwargs) if kwargs or self.current_data is None else self.current_data',
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
          '    with PandasCSVReader("testdata.csv") as reader:',
          '        # Read with specific data types',
          '        df = reader.read_csv(dtype={"age": int, "salary": float})',
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
          '@pytest.fixture(params=lambda: PandasCSVReader("testdata.csv").get_data_as_dict())',
          'def csv_data(request):',
          '    """Dynamic fixture with CSV data"""',
          '    return request.param',
          '',
          'def test_user_data(csv_data):',
          '    """Test with each row of CSV data"""',
          '    assert csv_data["username"] is not None',
          '    assert "@" in csv_data["email"]',
          '',
          '# Advanced data processing',
          'def analyze_csv_data(file_path: str):',
          '    """Perform advanced analysis on CSV data"""',
          '    with PandasCSVReader(file_path) as reader:',
          '        # Convert data types',
          '        df = reader.read_csv(dtype={"age": int, "salary": float})',
          '        ',
          '        # Group by category',
          '        grouped = reader.group_data("department")',
          '        ',
          '        # Calculate statistics for each group',
          '        for name, group in grouped:',
          '            print(f"Department: {name}")',
          '            print(f"Average salary: {group[\'salary\'].mean():.2f}")',
          '            print(f"Average age: {group[\'age\'].mean():.1f}")',
          '            print("---")'
        ];
      }
    } else if (selectedLanguage === 'csharp') {
      return [
        '// C# CSV Reading Implementation with CsvHelper',
        'using CsvHelper;',
        'using CsvHelper.Configuration;',
        'using System;',
        'using System.Collections.Generic;',
        'using System.IO;',
        'using System.Linq;',
        'using System.Globalization;',
        'using System.Text;',
        'using System.Data;',
        '',
        'public class CSVDataReader : IDisposable',
        '{',
        '    private StreamReader _reader;',
        '    private CsvReader _csvReader;',
        '    private string _filePath;',
        '    private CsvConfiguration _config;',
        '    ',
        '    public CSVDataReader(string filePath)',
        '    {',
        '        _filePath = filePath;',
        '        _config = new CsvConfiguration(CultureInfo.InvariantCulture)',
        '        {',
        '            HasHeaderRecord = true,',
        '            Delimiter = ",",',
        '            Quote = \'"\',',
        '            MissingFieldFound = null,',
        '            BadDataFound = null,',
        '            TrimOptions = TrimOptions.Trim',
        '            IgnoreBlankLines = true',
        '            AllowComments = false',
        '            Encoding = Encoding.UTF8',
        '        };',
        '        InitializeReader();',
        '    }',
        '    ',
        '    public CSVDataReader(string filePath, CsvConfiguration config)',
        '    {',
        '        _filePath = filePath;',
        '        _config = config;',
        '        InitializeReader();',
        '    }',
        '    ',
        '    private void InitializeReader()',
        '    {',
        '        _reader = new StreamReader(_filePath, _config.Encoding);',
        '        _csvReader = new CsvReader(_reader, _config);',
        '    }',
        '    ',
        '    public List<string[]> ReadAllRecords()',
        '    {',
        '        var records = new List<string[]>();',
        '        ',
        '        while (_csvReader.Read())',
        '        {',
        '            var record = new List<string>();',
        '            for (int i = 0; i < _csvReader.Parser.Count; i++)',
        '            {',
        '                record.Add(_csvReader.GetField(i) ?? string.Empty);',
        '            }',
        '            records.Add(record.ToArray());',
        '        }',
        '        ',
        '        return records;',
        '    }',
        '    ',
        '    public List<string> GetHeaders()',
        '    {',
        '        _csvReader.Read();',
        '        _csvReader.ReadHeader();',
        '        return _csvReader.HeaderRecord.ToList();',
        '    }',
        '    ',
        '    public List<List<string>> ReadAllAsList()',
        '    {',
        '        var records = ReadAllRecords();',
        '        return records.Select(r => r.ToList()).ToList();',
        '    }',
        '    ',
        '    public DataTable ToDataTable()',
        '    {',
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
        '        var records = ReadAllRecords();',
        '        foreach (var record in records)',
        '        {',
        '            dataTable.Rows.Add(record);',
        '        }',
        '        ',
        '        return dataTable;',
        '    }',
        '    ',
        '    public List<T> GetRecords<T>() where T : class, new()',
        '    {',
        '        var records = new List<T>();',
        '        ',
        '        while (_csvReader.Read())',
        '        {',
        '            try',
        '            {',
        '                var record = _csvReader.GetRecord<T>();',
        '                records.Add(record);',
        '            }',
        '            catch',
        '            {',
        '                // Handle mapping errors',
        '            }',
        '        }',
        '        ',
        '        return records;',
        '    }',
        '    ',
        '    public int GetRowCount()',
        '    {',
        '        return ReadAllRecords().Count;',
        '    }',
        '    ',
        '    public int GetColumnCount()',
        '    {',
        '        var headers = GetHeaders();',
        '        return headers.Count;',
        '    }',
        '    ',
        '    public string GetCellValue(int row, int column)',
        '    {',
        '        var records = ReadAllRecords();',
        '        ',
        '        if (row < 0 || row >= records.Count)',
        '            throw new IndexOutOfRangeException("Row index out of bounds");',
        '        ',
        '        var record = records[row];',
        '        if (column < 0 || column >= record.Length)',
        '            throw new IndexOutOfRangeException("Column index out of bounds");',
        '        ',
        '        return record[column];',
        '    }',
        '    ',
        '    public List<string> GetColumn(int columnIndex)',
        '    {',
        '        var records = ReadAllRecords();',
        '        var column = new List<string>();',
        '        ',
        '        foreach (var record in records)',
        '        {',
        '            if (columnIndex < record.Length)',
        '                column.Add(record[columnIndex]);',
        '            else',
        '                column.Add(string.Empty);',
        '        }',
        '        ',
        '        return column;',
        '    }',
        '    ',
        '    public List<string[]> SearchByValue(string searchValue)',
        '    {',
        '        var records = ReadAllRecords();',
        '        var matches = new List<string[]>();',
        '        ',
        '        foreach (var record in records)',
        '        {',
        '            if (record.Any(field => field.Contains(searchValue, StringComparison.OrdinalIgnoreCase)))',
        '            {',
        '                matches.Add(record);',
        '            }',
        '        }',
        '        ',
        '        return matches;',
        '    }',
        '    ',
        '    public void Reset()',
        '    {',
        '        _reader?.Dispose();',
        '        _csvReader?.Dispose();',
        '        InitializeReader();',
        '    }',
        '    ',
        '    public void Dispose()',
        '    {',
        '        _csvReader?.Dispose();',
        '        _reader?.Dispose();',
        '    }',
        '}',
          '',
          '// Custom record class for strongly-typed reading',
          'public class UserRecord',
          '{',
          '    [Name("username")]',
          '    public string Username { get; set; }',
          '    ',
          '    [Name("email")]',
          '    public string Email { get; set; }',
          '    ',
          '    [Name("password")]',
          '    public string Password { get; set; }',
          '    ',
          '    [Name("role")]',
          '    public string Role { get; set; }',
          '    ',
          '    [Name("active")]',
          '    public bool Active { get; set; }',
          '}',
          '',
          '// MSTest Data Provider Integration',
          'using Microsoft.VisualStudio.TestTools.UnitTesting;',
          'using System.Data.OleDb;',
          '',
          '[TestClass]',
          'public class CSVTestDataProvider',
          '{',
          '    private static DataTable _testData;',
          '    ',
          '    [ClassInitialize]',
          '    public static void SetupTestData(TestContext context)',
          '    {',
          '        using (var reader = new CSVDataReader("TestData.csv"))',
          '        {',
          '            _testData = reader.ToDataTable();',
          '        }',
          '    }',
          '    ',
          '    [TestMethod]',
          '    [DataSource("System.Data.OleDb",',
          '        "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=.;Extended Properties=\\"text;HDR=YES;FMT=Delimited(\\"")];',
          '        "TestData.csv", DataAccessMethod.Sequential)]',
          '    public void TestUserData()',
          '    {',
          '        string username = TestContext.DataRow["username"].ToString();',
          '        string email = TestContext.DataRow["email"].ToString();',
          '        string password = TestContext.DataRow["password"].ToString();',
          '        ',
          '        // Test implementation',
          '        Assert.IsNotNull(username);',
          '        Assert.IsNotNull(email);',
          '        Assert.IsTrue(email.Contains("@"));',
          '    }',
          '    ',
          '    public TestContext TestContext { get; set; }',
          '}'
        ];
      }
      // Fallback in case a new combination is added without code above
      return [];
    };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FileText}
        category="Selenium · Data Reading"
        title="CSV Data Reading"
        description="Comprehensive guide to reading CSV files in test automation with multiple libraries and advanced data processing techniques."
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            CSV Data Reading Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Why CSV for Test Data?
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  CSV files provide a simple, universal format for test data that's 
                  easy to create, edit, and integrate with any programming language or testing framework.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Key Advantages
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Universal format supported everywhere</li>
                  <li>• Human-readable and easy to edit</li>
                  <li>• Lightweight and fast processing</li>
                  <li>• Excellent for tabular test data</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Common Use Cases
                </h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• User credentials and login data</li>
                  <li>• Form input validation scenarios</li>
                  <li>• Configuration parameters</li>
                  <li>• Test case data sets</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  CSV Format Features
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  Supports comma-separated values with customizable delimiters, 
                  quote characters, and escape sequences for complex data handling.
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
          <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'java' | 'python' | 'csharp')}>
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="java" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Java</TabsTrigger>
              <TabsTrigger value="python" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Python</TabsTrigger>
              <TabsTrigger value="csharp" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">C#</TabsTrigger>
            </TabsList>

            <TabsContent value="java" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'OpenCSV',
                    description: 'Popular Java library for CSV operations',
                    features: ['Simple API', 'Custom delimiters', 'Header support', 'Validation features'],
                    color: 'blue',
                    recommended: true
                  },
                  {
                    name: 'Apache Commons CSV',
                    description: 'Robust CSV parsing from Apache',
                    features: ['Multiple formats', 'Excel compatibility', 'Flexible parsing', 'Error handling'],
                    color: 'red',
                    recommended: false
                  }
                ].map((lib) => (
                  <Card 
                    key={lib.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'java' && lib.name === 'OpenCSV' && selectedLibrary === 'opencsv') ||
                      (selectedLanguage === 'java' && lib.name === 'Apache Commons CSV' && selectedLibrary === 'commons')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedLibrary(lib.name === 'OpenCSV' ? 'opencsv' : 'commons')}
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
                    name: 'CSV Module',
                    description: 'Built-in Python CSV module',
                    features: ['Standard library', 'Memory efficient', 'Customizable', 'Iterator support'],
                    color: 'green',
                    recommended: true
                  },
                  {
                    name: 'Pandas',
                    description: 'Data analysis library with CSV support',
                    features: ['DataFrame integration', 'Data analysis', 'Statistical functions', 'Advanced filtering'],
                    color: 'orange',
                    recommended: false
                  }
                ].map((lib) => (
                  <Card 
                    key={lib.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'python' && lib.name === 'CSV Module' && selectedLibrary === 'csv') ||
                      (selectedLanguage === 'python' && lib.name === 'Pandas' && selectedLibrary === 'pandas')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedLibrary(lib.name === 'CSV Module' ? 'csv' : 'pandas')}
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
                  CsvHelper
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  The premier .NET library for CSV file reading and writing with robust features and excellent performance.
                </p>
                <div className="space-y-1">
                  {[
                    'Strongly-typed object mapping',
                    'Custom configuration options',
                    'Error handling and validation',
                    'DataTable conversion',
                    'LINQ integration'
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
                  {selectedLanguage === 'java' ? (selectedLibrary === 'opencsv' ? 'OpenCSV' : 'Apache Commons CSV') :
                   selectedLanguage === 'python' ? (selectedLibrary === 'csv' ? 'CSV Module' : 'Pandas') :
                   'CsvHelper'}
                </Badge>
                <Badge variant="outline">{selectedLanguage.toUpperCase()}</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(getCSVCode().join('\n'), 'CSV reading code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {getCSVCode().map((line, index) => (
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
                <p><strong className="text-blue-600 dark:text-blue-400">Flexible Parsing:</strong> Custom delimiters, quotes, and escape characters</p>
                <p><strong className="text-green-600 dark:text-green-400">Data Validation:</strong> Built-in validation and error handling</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Memory Efficiency:</strong> Iterator support for large files</p>
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
            Advanced CSV Features
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
          Advanced CSV operations for complex test scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Custom Delimiters',
                description: 'Support for various delimiters beyond commas',
                icon: <Columns className="w-5 h-5" />,
                features: ['Tab-separated', 'Semicolon', 'Pipe', 'Custom characters']
              },
              {
                title: 'Quote Handling',
                description: 'Advanced quote and escape character processing',
                icon: <Quote className="w-5 h-5" />,
                features: ['Single quotes', 'Double quotes', 'Embedded quotes', 'Escape sequences']
              },
              {
                title: 'Data Validation',
                description: 'Validate CSV data structure and content',
                icon: <CheckCircle className="w-5 h-5" />,
                features: ['Type checking', 'Range validation', 'Required fields', 'Custom rules']
              },
              {
                title: 'Memory Streaming',
                description: 'Process large files without loading everything',
                icon: <Activity className="w-5 h-5" />,
                features: ['Iterator pattern', 'Lazy loading', 'Chunk processing', 'Memory efficient']
              },
              {
                title: 'Data Transformation',
                description: 'Transform and clean CSV data during reading',
                icon: <RefreshCw className="w-5 h-5" />,
                features: ['Type conversion', 'Data cleaning', 'Normalization', 'Custom transformers']
              },
              {
                title: 'Error Recovery',
                description: 'Handle malformed data gracefully',
                icon: <AlertTriangle className="w-5 h-5" />,
                features: ['Skip bad rows', 'Partial recovery', 'Error logging', 'Fallback strategies']
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
              Optimize CSV reading for large files and high performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Streaming for Large Files</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Process CSV files line by line using iterators to avoid memory issues with large datasets.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <RefreshCw className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Optimize Delimiter Detection</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Auto-detect delimiters or specify them explicitly to improve parsing performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Activity className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Batch Processing Strategy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Process data in batches to balance memory usage and processing speed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
              Data Quality Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Ensure high-quality CSV data for reliable testing
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
                  Implement validation to ensure data quality and consistency before using in tests.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Lock className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Handle Special Characters</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Properly escape quotes, commas, and other special characters in CSV data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CSV Structure Example */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            CSV Structure Example
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Example CSV file structure for test data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
            <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`username,password,email,role,active
john_doe,password123,john.doe@example.com,user,true
jane_smith,secure456,jane.smith@example.com,admin,true
bob_wilson,test789,bob.wilson@example.com,user,false
alice_brown,admin123,alice.brown@example.com,admin,true`}
            </pre>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Structure Guidelines</h4>
              <ul className="text-sm text-cyan-800 dark:text-cyan-200 space-y-1">
                <li>• First row contains headers</li>
                <li>• Each row represents one test case</li>
                <li>• Columns represent test parameters</li>
                <li>• Use consistent data types</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Best Practices</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Use descriptive column names</li>
                <li>• Include only necessary data</li>
                <li>• Validate data format</li>
                <li>• Handle empty values properly</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Alert className="border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-950/20">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <AlertTitle className="text-red-900 dark:text-red-100">Common Issues & Solutions</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200 space-y-2">
          <div>• <strong>Encoding Issues:</strong> Specify correct encoding (UTF-8, ISO-8859-1) when reading CSV files</div>
          <div>• <strong>Delimiter Problems:</strong> Auto-detect or explicitly specify the correct delimiter</div>
          <div>• <strong>Quote Escaping:</strong> Properly handle quoted fields containing delimiters</div>
          <div>• <strong>Inconsistent Columns:</strong> Validate column count across all rows</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
