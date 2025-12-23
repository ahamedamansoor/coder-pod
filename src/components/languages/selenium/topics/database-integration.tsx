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
  Database,
  Code,
  Copy,
  CheckCircle,
  AlertTriangle,
  Shield,
  Target,
  Zap,
  Settings,
  FileCode,
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
  FileText,
  FileSpreadsheet,
  FileArchive,
  FilePlus,
  FileMinus,
  FileCheck,
  FileX,
  FileWarning,
  FileQuestion,
  Server,
  Cloud,
  Wifi,
  Cable,
  Router,
  Cpu,
  MemoryStick,
  HardDrive as HardDriveIcon,
  Dna,
  FlaskConical,
  Beaker,
  TestTube,
  Microscope,
  Atom
} from 'lucide-react';

export function DatabaseIntegrationComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp'>('java');
  const [selectedDatabase, setSelectedDatabase] = useState<'mysql' | 'postgresql' | 'oracle' | 'sqlserver'>('mysql');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getDatabaseCode = () => {
    if (selectedLanguage === 'java') {
      if (selectedDatabase === 'mysql') {
        return [
          '// MySQL Database Integration for Test Data',
          'import java.sql.*;',
          'import java.util.*;',
          'import java.util.ArrayList;',
          'import java.util.List;',
          '',
          'public class MySQLTestDataReader {',
          '    private Connection connection;',
          '    private String url;',
          '    private String username;',
          '    private String password;',
          '    ',
          '    public MySQLTestDataReader(String host, String database, String username, String password) throws SQLException {',
          '        this.url = "jdbc:mysql://" + host + ":3306/" + database + "?useSSL=false&serverTimezone=UTC";',
          '        this.username = username;',
          '        this.password = password;',
          '        this.connection = DriverManager.getConnection(url, username, password);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> executeQuery(String sql) throws SQLException {',
          '        List<Map<String, Object>> results = new ArrayList<>();',
          '        ',
          '        try (Statement statement = connection.createStatement();',
          '             ResultSet resultSet = statement.executeQuery(sql)) {',
          '            ',
          '            ResultSetMetaData metaData = resultSet.getMetaData();',
          '            int columnCount = metaData.getColumnCount();',
          '            ',
          '            while (resultSet.next()) {',
          '                Map<String, Object> row = new HashMap<>();',
          '                for (int i = 1; i <= columnCount; i++) {',
          '                    String columnName = metaData.getColumnName(i);',
          '                    Object value = resultSet.getObject(i);',
          '                    row.put(columnName, value);',
          '                }',
          '                results.add(row);',
          '            }',
          '        }',
          '        ',
          '        return results;',
          '    }',
          '    ',
          '    public List<Map<String, Object>> getTestData(String tableName) throws SQLException {',
          '        String sql = "SELECT * FROM " + tableName + " WHERE active = true ORDER BY id";',
          '        return executeQuery(sql);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> getTestDataByCondition(String tableName, String condition) throws SQLException {',
          '        String sql = "SELECT * FROM " + tableName + " WHERE " + condition;',
          '        return executeQuery(sql);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> getLoginTestData() throws SQLException {',
          '        String sql = "SELECT username, password, expected_result FROM test_login_data WHERE test_type = \'authentication\'";',
          '        return executeQuery(sql);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> getFormTestData(String formName) throws SQLException {',
          '        String sql = "SELECT field_name, test_value, expected_result FROM test_form_data " +',
          '                 "WHERE form_name = ? AND active = true ORDER BY test_order";',
          '        ',
          '        List<Map<String, Object>> results = new ArrayList<>();',
          '        try (PreparedStatement statement = connection.prepareStatement(sql)) {',
          '            statement.setString(1, formName);',
          '            ResultSet resultSet = statement.executeQuery();',
          '            ',
          '            ResultSetMetaData metaData = resultSet.getMetaData();',
          '            int columnCount = metaData.getColumnCount();',
          '            ',
          '            while (resultSet.next()) {',
          '                Map<String, Object> row = new HashMap<>();',
          '                for (int i = 1; i <= columnCount; i++) {',
          '                    String columnName = metaData.getColumnName(i);',
          '                    Object value = resultSet.getObject(i);',
          '                    row.put(columnName, value);',
          '                }',
          '                results.add(row);',
          '            }',
          '        }',
          '        ',
          '        return results;',
          '    }',
          '    ',
          '    public Object[][] getTestDataForDataProvider(String tableName) throws SQLException {',
          '        List<Map<String, Object>> data = getTestData(tableName);',
          '        Object[][] result = new Object[data.size()][];',
          '        ',
          '        for (int i = 0; i < data.size(); i++) {',
          '            Map<String, Object> row = data.get(i);',
          '            result[i] = row.values().toArray();',
          '        }',
          '        ',
          '        return result;',
          '    }',
          '    ',
          '    public boolean executeUpdate(String sql) throws SQLException {',
          '        try (Statement statement = connection.createStatement()) {',
          '            int rowsAffected = statement.executeUpdate(sql);',
          '            return rowsAffected > 0;',
          '        }',
          '    }',
          '    ',
          '    public int insertTestData(String tableName, Map<String, Object> data) throws SQLException {',
          '        StringBuilder columns = new StringBuilder();',
          '        StringBuilder placeholders = new StringBuilder();',
          '        List<Object> values = new ArrayList<>();',
          '        ',
          '        for (Map.Entry<String, Object> entry : data.entrySet()) {',
          '            if (columns.length() > 0) {',
          '                columns.append(", ");',
          '                placeholders.append(", ");',
          '            }',
          '            columns.append(entry.getKey());',
          '            placeholders.append("?");',
          '            values.add(entry.getValue());',
          '        }',
          '        ',
          '        String sql = "INSERT INTO " + tableName + " (" + columns.toString() + ") VALUES (" + placeholders.toString() + ")";',
          '        ',
          '        try (PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {',
          '            for (int i = 0; i < values.size(); i++) {',
          '                statement.setObject(i + 1, values.get(i));',
          '            }',
          '            ',
          '            int rowsAffected = statement.executeUpdate();',
          '            ',
          '            if (rowsAffected > 0) {',
          '                ResultSet generatedKeys = statement.getGeneratedKeys();',
          '                if (generatedKeys.next()) {',
          '                    return generatedKeys.getInt(1);',
          '                }',
          '            }',
          '        }',
          '        ',
          '        return -1;',
          '    }',
          '    ',
          '    public boolean testConnection() {',
          '        try {',
          '            return connection != null && !connection.isClosed();',
          '        } catch (SQLException e) {',
          '            return false;',
          '        }',
          '    }',
          '    ',
          '    public void close() throws SQLException {',
          '        if (connection != null && !connection.isClosed()) {',
          '            connection.close();',
          '        }',
          '    }',
          '    ',
          '    // Usage Example',
          '    public static void main(String[] args) {',
          '        MySQLTestDataReader reader = null;',
          '        try {',
          '            reader = new MySQLTestDataReader("localhost", "testdb", "testuser", "testpass");',
          '            ',
          '            if (reader.testConnection()) {',
          '                System.out.println("Database connection successful");',
          '                ',
          '                List<Map<String, Object>> testData = reader.getTestData("users");',
          '                System.out.println("Found " + testData.size() + " test records");',
          '                ',
          '                List<Map<String, Object>> loginData = reader.getLoginTestData();',
          '                System.out.println("Found " + loginData.size() + " login test cases");',
          '            }',
          '        } catch (SQLException e) {',
          '            e.printStackTrace();',
          '        } finally {',
          '            try {',
          '                if (reader != null) reader.close();',
          '            } catch (SQLException e) {',
          '                e.printStackTrace();',
          '            }',
          '        }',
          '    }',
          '}',
          '',
          '// TestNG Data Provider Integration',
          'import org.testng.annotations.DataProvider;',
          '',
          'public class DatabaseDataProvider {',
          '    private static MySQLTestDataReader reader;',
          '    ',
          '    static {',
          '        try {',
          '            reader = new MySQLTestDataReader("localhost", "testdb", "testuser", "testpass");',
          '        } catch (SQLException e) {',
          '            throw new RuntimeException("Failed to initialize database connection", e);',
          '        }',
          '    }',
          '    ',
          '    @DataProvider(name = "dbTestData")',
          '    public Object[][] getTestData() throws SQLException {',
          '        return reader.getTestDataForDataProvider("test_data");',
          '    }',
          '    ',
          '    @DataProvider(name = "loginTestData")',
          '    public Object[][] getLoginTestData() throws SQLException {',
          '        return reader.getTestDataForDataProvider("test_login_data");',
          '    }',
          '}'
        ];
      } else if (selectedDatabase === 'postgresql') {
        return [
          '// PostgreSQL Database Integration for Test Data',
          'import java.sql.*;',
          'import java.util.*;',
          'import java.util.ArrayList;',
          'import java.util.List;',
          '',
          'public class PostgreSQLTestDataReader {',
          '    private Connection connection;',
          '    private String url;',
          '    private String username;',
          '    private String password;',
          '    ',
          '    public PostgreSQLTestDataReader(String host, String database, String username, String password) throws SQLException {',
          '        this.url = "jdbc:postgresql://" + host + ":5432/" + database;',
          '        this.username = username;',
          '        this.password = password;',
          '        this.connection = DriverManager.getConnection(url, username, password);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> executeQuery(String sql) throws SQLException {',
          '        List<Map<String, Object>> results = new ArrayList<>();',
          '        ',
          '        try (Statement statement = connection.createStatement();',
          '             ResultSet resultSet = statement.executeQuery(sql)) {',
          '            ',
          '            ResultSetMetaData metaData = resultSet.getMetaData();',
          '            int columnCount = metaData.getColumnCount();',
          '            ',
          '            while (resultSet.next()) {',
          '                Map<String, Object> row = new HashMap<>();',
          '                for (int i = 1; i <= columnCount; i++) {',
          '                    String columnName = metaData.getColumnName(i);',
          '                    Object value = resultSet.getObject(i);',
          '                    row.put(columnName, value);',
          '                }',
          '                results.add(row);',
          '            }',
          '        }',
          '        ',
          '        return results;',
          '    }',
          '    ',
          '    public List<Map<String, Object>> getTestDataWithJSON(String tableName) throws SQLException {',
          '        String sql = "SELECT id, test_data::jsonb, created_at FROM " + tableName + " WHERE active = true";',
          '        return executeQuery(sql);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> searchTestData(String tableName, String searchQuery) throws SQLException {',
          '        String sql = "SELECT * FROM " + tableName + " WHERE " +',
          '                 "to_tsvector(\'english\', test_data::text) @@ to_tsquery(\'english\', ?)";',
          '        ',
          '        List<Map<String, Object>> results = new ArrayList<>();',
          '        try (PreparedStatement statement = connection.prepareStatement(sql)) {',
          '            statement.setString(1, searchQuery);',
          '            ResultSet resultSet = statement.executeQuery();',
          '            ',
          '            ResultSetMetaData metaData = resultSet.getMetaData();',
          '            int columnCount = metaData.getColumnCount();',
          '            ',
          '            while (resultSet.next()) {',
          '                Map<String, Object> row = new HashMap<>();',
          '                for (int i = 1; i <= columnCount; i++) {',
          '                    String columnName = metaData.getColumnName(i);',
          '                    Object value = resultSet.getObject(i);',
          '                    row.put(columnName, value);',
          '                }',
          '                results.add(row);',
          '            }',
          '        }',
          '        ',
          '        return results;',
          '    }',
          '    ',
          '    public void close() throws SQLException {',
          '        if (connection != null && !connection.isClosed()) {',
          '            connection.close();',
          '        }',
          '    }',
          '}'
        ];
      }
    } else if (selectedLanguage === 'python') {
      if (selectedDatabase === 'mysql') {
        return [
          '# Python MySQL Database Integration for Test Data',
          'import mysql.connector',
          'from mysql.connector import Error',
          'from typing import List, Dict, Any, Optional, Union',
          'import json',
          'import logging',
          'from contextlib import contextmanager',
          '',
          'class MySQLTestDataReader:',
          '    """',
          '    MySQL database reader for test data management',
          '    """',
          '    ',
          '    def __init__(self, host: str, database: str, username: str, password: str, port: int = 3306):',
          '        self.host = host',
          '        self.database = database',
          '        self.username = username',
          '        self.password = password',
          '        self.port = port',
          '        self.connection = None',
          '        self.logger = logging.getLogger(__name__)',
          '    ',
          '    def connect(self) -> bool:',
          '        """',
          '        Establish database connection',
          '        """',
          '        try:',
          '            self.connection = mysql.connector.connect(',
          '                host=self.host,',
          '                database=self.database,',
          '                user=self.username,',
          '                password=self.password,',
          '                port=self.port',
          '                autocommit=True',
          '                charset=\'utf8mb4\'',
          '                collation=\'utf8mb4_unicode_ci\'',
          '            )',
          '            return True',
          '        except Error as e:',
          '            self.logger.error(f"Database connection failed: {e}")',
          '            return False',
          '    ',
          '    @contextmanager',
          '    def get_cursor(self, dictionary: bool = True):',
          '        """',
          '        Context manager for database cursor',
          '        """',
          '        if not self.connection or not self.connection.is_connected():',
          '            self.connect()',
          '        ',
          '        cursor = None',
          '        try:',
          '            cursor = self.connection.cursor(dictionary=dictionary)',
          '            yield cursor',
          '        except Error as e:',
          '            self.logger.error(f"Database operation failed: {e}")',
          '            raise',
          '        finally:',
          '            if cursor:',
          '                cursor.close()',
          '    ',
          '    def execute_query(self, query: str, params: Optional[tuple] = None) -> List[Dict[str, Any]]:',
          '        """',
          '        Execute SELECT query and return results',
          '        """',
          '        results = []',
          '        try:',
          '            with self.get_cursor() as cursor:',
          '                cursor.execute(query, params or ())',
          '                results = cursor.fetchall()',
          '        except Error as e:',
          '            self.logger.error(f"Query execution failed: {e}")',
          '            raise',
          '        ',
          '        return results',
          '    ',
          '    def get_test_data(self, table_name: str, condition: Optional[str] = None) -> List[Dict[str, Any]]:',
          '        """',
          '        Get test data from specified table',
          '        """',
          '        query = f"SELECT * FROM {table_name}"',
          '        params = None',
          '        ',
          '        if condition:',
          '            query += f" WHERE {condition}"',
          '        ',
          '        query += " ORDER BY id"',
          '        ',
          '        return self.execute_query(query, params)',
          '    ',
          '    def get_login_test_data(self) -> List[Dict[str, Any]]:',
          '        """',
          '        Get login test data',
          '        """',
          '        query = """',
          '            SELECT username, password, expected_result, test_type ',
          '            FROM test_login_data ',
          '            WHERE active = TRUE AND test_type = %s ',
          '            ORDER BY test_order',
          '        """',
          '        return self.execute_query(query, ("authentication",))',
          '    ',
          '    def get_form_test_data(self, form_name: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Get form test data for specific form',
          '        """',
          '        query = """',
          '            SELECT field_name, test_value, expected_result, validation_rule ',
          '            FROM test_form_data ',
          '            WHERE form_name = %s AND active = TRUE ',
          '            ORDER BY test_order',
          '        """',
          '        return self.execute_query(query, (form_name,))',
          '    ',
          '    def get_test_data_by_scenario(self, scenario: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Get test data by scenario name',
          '        """',
          '        query = """',
          '            SELECT * FROM test_scenarios ',
          '            WHERE scenario_name = %s AND active = TRUE ',
          '            ORDER BY test_order',
          '        """',
          '        return self.execute_query(query, (scenario,))',
          '    ',
          '    def search_test_data(self, table_name: str, search_term: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Search test data by search term',
          '        """',
          '        query = f"""',
          '            SELECT * FROM {table_name} ',
          '            WHERE CONCAT_WS(\' \', *) LIKE %s ',
          '            AND active = TRUE',
          '        """',
          '        return self.execute_query(query, (f"%{search_term}%",))',
          '    ',
          '    def get_test_data_with_json(self, table_name: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Get test data with JSON field parsing',
          '        """',
          '        query = f"""',
          '            SELECT id, test_name, JSON_EXTRACT(test_data, \'$.username\') as username,',
          '                   JSON_EXTRACT(test_data, \'$.email\') as email,',
          '                   JSON_EXTRACT(test_data, \'$.config\') as config ',
          '            FROM {table_name} ',
          '            WHERE active = TRUE ',
          '            ORDER BY test_name',
          '        """',
          '        ',
          '        results = self.execute_query(query)',
          '        # Parse JSON fields',
          '        for result in results:',
          '            for key, value in result.items():',
          '                if value and isinstance(value, str):',
          '                    try:',
          '                        result[key] = json.loads(value)',
          '                    except json.JSONDecodeError:',
          '                        pass',
          '        ',
          '        return results',
          '    ',
          '    def insert_test_data(self, table_name: str, data: Dict[str, Any]) -> int:',
          '        """',
          '        Insert test data and return inserted ID',
          '        """',
          '        columns = list(data.keys())',
          '        placeholders = ["%s"] * len(columns)',
          '        values = list(data.values())',
          '        ',
          '        query = f"""',
          '            INSERT INTO {table_name} ({", ".join(columns)}) ',
          '            VALUES ({", ".join(placeholders)})',
          '        """',
          '        ',
          '        try:',
          '            with self.get_cursor() as cursor:',
          '                cursor.execute(query, values)',
          '                return cursor.lastrowid',
          '        except Error as e:',
          '            self.logger.error(f"Insert operation failed: {e}")',
          '            raise',
          '    ',
          '    def update_test_data(self, table_name: str, data: Dict[str, Any], condition: str, params: tuple) -> bool:',
          '        """',
          '        Update test data',
          '        """',
          '        set_clause = ", ".join([f"{key} = %s" for key in data.keys()])',
          '        values = list(data.values()) + list(params)',
          '        ',
          '        query = f"""',
          '            UPDATE {table_name} ',
          '            SET {set_clause} ',
          '            WHERE {condition}',
          '        """',
          '        ',
          '        try:',
          '            with self.get_cursor() as cursor:',
          '                cursor.execute(query, values)',
          '                return cursor.rowcount > 0',
          '        except Error as e:',
          '            self.logger.error(f"Update operation failed: {e}")',
          '            raise',
          '    ',
          '    def delete_test_data(self, table_name: str, condition: str, params: tuple) -> bool:',
          '        """',
          '        Delete test data',
          '        """',
          '        query = f"DELETE FROM {table_name} WHERE {condition}"',
          '        ',
          '        try:',
          '            with self.get_cursor() as cursor:',
          '                cursor.execute(query, params)',
          '                return cursor.rowcount > 0',
          '        except Error as e:',
          '            self.logger.error(f"Delete operation failed: {e}")',
          '            raise',
          '    ',
          '    def get_table_info(self, table_name: str) -> Dict[str, Any]:',
          '        """',
          '        Get table structure information',
          '        """',
          '        query = f"DESCRIBE {table_name}"',
          '        columns = self.execute_query(query)',
          '        ',
          '        query = f"SELECT COUNT(*) as row_count FROM {table_name}"',
          '        row_count = self.execute_query(query)[0]["row_count"]',
          '        ',
          '        return {',
          '            "table_name": table_name,',
          '            "columns": columns,',
          '            "row_count": row_count,',
          '        }',
          '    ',
          '    def test_connection(self) -> bool:',
          '        """',
          '        Test database connection',
          '        """',
          '        try:',
          '            if self.connection and self.connection.is_connected():',
          '                with self.get_cursor() as cursor:',
          '                    cursor.execute("SELECT 1")',
          '                    return True',
          '            else:',
          '                return self.connect()',
          '        except Error:',
          '            return False',
          '    ',
          '    def close(self):',
          '        """',
          '        Close database connection',
          '        """',
          '        if self.connection and self.connection.is_connected():',
          '            self.connection.close()',
          '    ',
          '    def __enter__(self):',
          '        """Context manager entry"""',
          '        self.connect()',
          '        return self',
          '    ',
          '    def __exit__(self, exc_type, exc_val, exc_tb):',
          '        """Context manager exit"""',
          '        self.close()',
          '',
          '# Usage Example',
          'def main():',
          '    # Using context manager',
          '    with MySQLTestDataReader("localhost", "testdb", "testuser", "testpass") as reader:',
          '        if reader.test_connection():',
          '            print("Database connection successful")',
          '            ',
          '            # Get login test data',
          '            login_data = reader.get_login_test_data()',
          '            print(f"Found {len(login_data)} login test cases")',
          '            ',
          '            # Get form test data',
          '            form_data = reader.get_form_test_data("registration")',
          '            print(f"Found {len(form_data)} form test cases")',
          '            ',
          '            # Search test data',
          '            search_results = reader.search_test_data("test_data", "admin")',
          '            print(f"Found {len(search_results)} matching records")',
          '            ',
          '            # Get table info',
          '            table_info = reader.get_table_info("test_data")',
          '            print(f"Table info: {table_info}")',
          '',
          '# PyTest Integration',
          'import pytest',
          '',
          '@pytest.fixture(scope="session")',
          'def db_reader():',
          '    """Session-scoped database reader fixture"""',
          '    reader = MySQLTestDataReader("localhost", "testdb", "testuser", "testpass")',
          '    reader.connect()',
          '    yield reader',
          '    reader.close()',
          '',
          '@pytest.fixture',
          'def login_test_data(db_reader):',
          '    """Login test data fixture"""',
          '    return db_reader.get_login_test_data()',
          '',
          'def test_login_scenarios(login_test_data):',
          '    """Test login scenarios using database data"""',
          '    for test_case in login_test_data:',
          '        username = test_case["username"]',
          '        password = test_case["password"]',
          '        expected = test_case["expected_result"]',
          '        ',
          '        # Your test logic here',
          '        assert username is not None',
          '        assert password is not None',
          '        assert expected in ["success", "failure"]',
          '',
          '# Dynamic test generation',
          'def pytest_generate_tests(metafunc):',
          '    """Generate dynamic tests from database"""',
          '    if "test_scenario" in metafunc.fixturenames:',
          '        reader = MySQLTestDataReader("localhost", "testdb", "testuser", "testpass")',
          '        if reader.connect():',
          '            scenarios = reader.get_test_data_by_scenario("smoke_tests")',
          '            metafunc.parametrize("test_scenario", scenarios, ids=[s["test_name"] for s in scenarios])',
          '        reader.close()',
          '',
          'def test_smoke_scenarios(test_scenario):',
          '    """Test smoke scenarios"""',
          '    test_name = test_scenario["test_name"]',
          '    test_data = test_scenario["test_data"]',
          '    ',
          '    # Your test implementation here',
          '    assert test_name is not None',
          '    assert test_data is not None'
        ];
      } else if (selectedDatabase === 'postgresql') {
        return [
          '# Python PostgreSQL Database Integration for Test Data',
          'import psycopg2',
          'import psycopg2.extras',
          'from psycopg2 import sql',
          'from typing import List, Dict, Any, Optional, Union',
          'import json',
          'import logging',
          'from contextlib import contextmanager',
          '',
          'class PostgreSQLTestDataReader:',
          '    """',
          '    PostgreSQL database reader for test data management',
          '    """',
          '    ',
          '    def __init__(self, host: str, database: str, username: str, password: str, port: int = 5432):',
          '        self.host = host',
          '        self.database = database',
          '        self.username = username',
          '        self.password = password',
          '        self.port = port',
          '        self.connection = None',
          '        self.logger = logging.getLogger(__name__)',
          '    ',
          '    def connect(self) -> bool:',
          '        """',
          '        Establish database connection',
          '        """',
          '        try:',
          '            self.connection = psycopg2.connect(',
          '                host=self.host,',
          '                database=self.database,',
          '                user=self.username,',
          '                password=self.password,',
          '                port=self.port,',
          '                cursor_factory=psycopg2.extras.RealDictCursor',
          '            )',
          '            self.connection.autocommit = True',
          '            return True',
          '        except Exception as e:',
          '            self.logger.error(f"Database connection failed: {e}")',
          '            return False',
          '    ',
          '    @contextmanager',
          '    def get_cursor(self):',
          '        """',
          '        Context manager for database cursor',
          '        """',
          '        if not self.connection or self.connection.closed:',
          '            self.connect()',
          '        ',
          '        cursor = None',
          '        try:',
          '            cursor = self.connection.cursor()',
          '            yield cursor',
          '        except Exception as e:',
          '            self.logger.error(f"Database operation failed: {e}")',
          '            raise',
          '        finally:',
          '            if cursor:',
          '                cursor.close()',
          '    ',
          '    def execute_query(self, query: str, params: Optional[tuple] = None) -> List[Dict[str, Any]]:',
          '        """',
          '        Execute SELECT query and return results',
          '        """',
          '        results = []',
          '        try:',
          '            with self.get_cursor() as cursor:',
          '                cursor.execute(query, params or ())',
          '                results = cursor.fetchall()',
          '                # Convert RealDictRow to regular dict',
          '                results = [dict(row) for row in results]',
          '        except Exception as e:',
          '            self.logger.error(f"Query execution failed: {e}")',
          '            raise',
          '        ',
          '        return results',
          '    ',
          '    def get_test_data_with_jsonb(self, table_name: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Get test data with JSONB field support',
          '        """',
          '        query = sql.SQL("""',
          '            SELECT id, test_name, test_data, created_at ',
          '            FROM {} ',
          '            WHERE active = TRUE ',
          '            ORDER BY test_name',
          '        """).format(sql.Identifier(table_name))',
          '        ',
          '        results = self.execute_query(query)',
          '        # Parse JSONB fields',
          '        for result in results:',
          '            if \'test_data\' in result and result[\'test_data\']:',
          '                if isinstance(result[\'test_data\'], str):',
          '                    result[\'test_data\'] = json.loads(result[\'test_data\'])',
          '        ',
          '        return results',
          '    ',
          '    def search_jsonb_data(self, table_name: str, json_path: str, search_value: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Search within JSONB data using JSONPath',
          '        """',
          '        query = sql.SQL("""',
          '            SELECT * FROM {} ',
          '            WHERE test_data->>%s LIKE %s ',
          '            AND active = TRUE',
          '        """).format(sql.Identifier(table_name))',
          '        ',
          '        return self.execute_query(query, (json_path, f"%{search_value}%"))',
          '    ',
          '    def get_array_test_data(self, table_name: str) -> List[Dict[str, Any]]:',
          '        """',
          '        Get test data with array fields',
          '        """',
          '        query = sql.SQL("""',
          '            SELECT id, test_name, test_tags, test_values ',
          '            FROM {} ',
          '            WHERE active = TRUE ',
          '            ORDER BY id',
          '        """).format(sql.Identifier(table_name))',
          '        ',
          '        return self.execute_query(query)',
          '    ',
          '    def close(self):',
          '        """',
          '        Close database connection',
          '        """',
          '        if self.connection and not self.connection.closed:',
          '            self.connection.close()',
          '    ',
          '    def __enter__(self):',
          '        """Context manager entry"""',
          '        self.connect()',
          '        return self',
          '    ',
          '    def __exit__(self, exc_type, exc_val, exc_tb):',
          '        """Context manager exit"""',
          '        self.close()'
        ];
      }
    } else if (selectedLanguage === 'csharp') {
      if (selectedDatabase === 'sqlserver') {
        return [
          '// C# SQL Server Database Integration for Test Data',
          'using System;',
          'using System.Data;',
          'using System.Data.SqlClient;',
          'using System.Collections.Generic;',
          'using System.Configuration;',
          '',
          'public class SQLServerTestDataReader : IDisposable',
          '{',
          '    private SqlConnection connection;',
          '    private string connectionString;',
          '    ',
          '    public SQLServerTestDataReader(string server, string database, string username, string password)',
          '    {',
          '        this.connectionString = $"Server={server};Database={database};User Id={username};Password={password};";',
          '        this.connection = new SqlConnection(connectionString);',
          '    }',
          '    ',
          '    public SQLServerTestDataReader(string connectionString)',
          '    {',
          '        this.connectionString = connectionString;',
          '        this.connection = new SqlConnection(connectionString);',
          '    }',
          '    ',
          '    public void OpenConnection()',
          '    {',
          '        if (connection.State != ConnectionState.Open)',
          '        {',
          '            connection.Open();',
          '        }',
          '    }',
          '    ',
          '    public void CloseConnection()',
          '    {',
          '        if (connection.State == ConnectionState.Open)',
          '        {',
          '            connection.Close();',
          '        }',
          '    }',
          '    ',
          '    public List<Dictionary<string, object>> ExecuteQuery(string query, SqlParameter[] parameters = null)',
          '    {',
          '        List<Dictionary<string, object>> results = new List<Dictionary<string, object>>();',
          '        ',
          '        try',
          '        {',
          '            OpenConnection();',
          '            ',
          '            using (SqlCommand command = new SqlCommand(query, connection))',
          '            {',
          '                if (parameters != null)',
          '                {',
          '                    command.Parameters.AddRange(parameters);',
          '                }',
          '                ',
          '                using (SqlDataReader reader = command.ExecuteReader())',
          '                {',
          '                    while (reader.Read())',
          '                    {',
          '                        Dictionary<string, object> row = new Dictionary<string, object>();',
          '                        for (int i = 0; i < reader.FieldCount; i++)',
          '                        {',
          '                            string columnName = reader.GetName(i);',
          '                            object value = reader.GetValue(i);',
          '                            row[columnName] = value == DBNull.Value ? null : value;',
          '                        }',
          '                        results.Add(row);',
          '                    }',
          '                }',
          '            }',
          '        }',
          '        catch (Exception ex)',
          '        {',
          '            throw new Exception($"Query execution failed: {ex.Message}", ex);',
          '        }',
          '        finally',
          '        {',
          '            CloseConnection();',
          '        }',
          '        ',
          '        return results;',
          '    }',
          '    ',
          '    public List<Dictionary<string, object>> GetTestData(string tableName, string condition = null)',
          '    {',
          '        string query = $"SELECT * FROM {tableName}";',
          '        ',
          '        if (!string.IsNullOrEmpty(condition))',
          '        {',
          '            query += $" WHERE {condition}";',
          '        }',
          '        ',
          '        query += " ORDER BY ID";',
          '        ',
          '        return ExecuteQuery(query);',
          '    }',
          '    ',
          '    public List<Dictionary<string, object>> GetLoginTestData()',
          '    {',
          '        string query = @"',
          '            SELECT Username, Password, ExpectedResult, TestType ',
          '            FROM TestLoginData ',
          '            WHERE Active = 1 AND TestType = @TestType ',
          '            ORDER BY TestOrder";',
          '        ',
          '        SqlParameter[] parameters = new SqlParameter[]',
          '        {',
          '            new SqlParameter("@TestType", "Authentication")',
          '        };',
          '        ',
          '        return ExecuteQuery(query, parameters);',
          '    }',
          '    ',
          '    public List<Dictionary<string, object>> GetFormTestData(string formName)',
          '    {',
          '        string query = @"',
          '            SELECT FieldName, TestValue, ExpectedResult, ValidationRule ',
          '            FROM TestFormData ',
          '            WHERE FormName = @FormName AND Active = 1 ',
          '            ORDER BY TestOrder";',
          '        ',
          '        SqlParameter[] parameters = new SqlParameter[]',
          '        {',
          '            new SqlParameter("@FormName", formName)',
          '        };',
          '        ',
          '        return ExecuteQuery(query, parameters);',
          '    }',
          '    ',
          '    public int InsertTestData(string tableName, Dictionary<string, object> data)',
          '    {',
          '        string columns = string.Join(", ", data.Keys);',
          '        string parameters = string.Join(", ", data.Keys.Select(key => $"@{key}"));',
          '        ',
          '        string query = $"INSERT INTO {tableName} ({columns}) VALUES ({parameters}); SELECT SCOPE_IDENTITY();";',
          '        ',
          '        SqlParameter[] sqlParameters = data.Select(kvp => new SqlParameter($"@{kvp.Key}", kvp.Value ?? DBNull.Value)).ToArray();',
          '        ',
          '        try',
          '        {',
          '            OpenConnection();',
          '            ',
          '            using (SqlCommand command = new SqlCommand(query, connection))',
          '            {',
          '                command.Parameters.AddRange(sqlParameters);',
          '                object result = command.ExecuteScalar();',
          '                return Convert.ToInt32(result);',
          '            }',
          '        }',
          '        catch (Exception ex)',
          '        {',
          '            throw new Exception($"Insert operation failed: {ex.Message}", ex);',
          '        }',
          '        finally',
          '        {',
          '            CloseConnection();',
          '        }',
          '    }',
          '    ',
          '    public bool ExecuteStoredProcedure(string procedureName, SqlParameter[] parameters = null)',
          '    {',
          '        try',
          '        {',
          '            OpenConnection();',
          '            ',
          '            using (SqlCommand command = new SqlCommand(procedureName, connection))',
          '            {',
          '                command.CommandType = CommandType.StoredProcedure;',
          '                ',
          '                if (parameters != null)',
          '                {',
          '                    command.Parameters.AddRange(parameters);',
          '                }',
          '                ',
          '                command.ExecuteNonQuery();',
          '                return true;',
          '            }',
          '        }',
          '        catch (Exception ex)',
          '        {',
          '            throw new Exception($"Stored procedure execution failed: {ex.Message}", ex);',
          '        }',
          '        finally',
          '        {',
          '            CloseConnection();',
          '        }',
          '    }',
          '    ',
          '    public bool TestConnection()',
          '    {',
          '        try',
          '        {',
          '            OpenConnection();',
          '            return connection.State == ConnectionState.Open;',
          '        }',
          '        catch',
          '        {',
          '            return false;',
          '        }',
          '        finally',
          '        {',
          '            CloseConnection();',
          '        }',
          '    }',
          '    ',
          '    public void Dispose()',
          '    {',
          '        CloseConnection();',
          '        connection?.Dispose();',
          '    }',
          '}',
          '',
          '// MSTest Data Provider Integration',
          'using Microsoft.VisualStudio.TestTools.UnitTesting;',
          'using System.Data.OleDb;',
          '',
          '[TestClass]',
          'public class DatabaseTestDataProvider',
          '{',
          '    private static SQLServerTestDataReader reader;',
          '    ',
          '    [ClassInitialize]',
          '    public static void SetupTestData(TestContext context)',
          '    {',
          '        reader = new SQLServerTestDataReader("localhost", "TestDB", "testuser", "testpass");',
          '    }',
          '    ',
          '    [TestMethod]',
          '    [DataSource("System.Data.SqlClient",',
          '        "Server=localhost;Database=TestDB;User Id=testuser;Password=testpass;",',
          '        "TestLoginData", DataAccessMethod.Sequential)]',
          '    public void TestLoginData()',
          '    {',
          '        string username = TestContext.DataRow["Username"].ToString();',
          '        string password = TestContext.DataRow["Password"].ToString();',
          '        string expected = TestContext.DataRow["ExpectedResult"].ToString();',
          '        ',
          '        // Test implementation',
          '        Assert.IsNotNull(username);',
          '        Assert.IsNotNull(password);',
          '    }',
          '    ',
          '    public TestContext TestContext { get; set; }',
          '    ',
          '    [ClassCleanup]',
          '    public static void Cleanup()',
          '    {',
          '        reader?.Dispose();',
          '    }',
          '}'
        ];
      }
    }
    
    // Default return if no specific combination matches
    return [
      '// No implementation available for this combination',
      '// Please select a different language or database',
      '',
      '// Available combinations:',
      '// - Java: MySQL, PostgreSQL',
      '// - Python: MySQL, PostgreSQL', 
      '// - C#: SQL Server'
    ];
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Database}
        category="Selenium · Data Integration"
        title="Database Integration"
        description="Comprehensive guide to database integration for test automation with multiple database systems and advanced data management techniques."
        colorTheme="purple"
      />

      {/* Introduction */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Database Integration Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Why Database Integration?
                </h3>
                <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
                  Database integration provides centralized test data management, 
                  real-time data updates, and support for complex test scenarios 
                  with relational data structures.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Key Advantages
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Centralized data management</li>
                  <li>• Real-time data synchronization</li>
                  <li>• Complex relational data support</li>
                  <li>• Scalable for large test suites</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Common Use Cases
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• User credential management</li>
                  <li>• Test configuration storage</li>
                  <li>• Test result tracking</li>
                  <li>• Dynamic test data generation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  Database Systems
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  Support for MySQL, PostgreSQL, Oracle, SQL Server, 
                  and other relational database systems with optimized 
                  connection management and query performance.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database Selection */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Database & Language Selection
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Choose your programming language and database system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={selectedLanguage} onValueChange={(value) => {
            const newLanguage = value as 'java' | 'python' | 'csharp';
            setSelectedLanguage(newLanguage);
            // Auto-select appropriate database for the language
            if (newLanguage === 'java') {
              setSelectedDatabase('mysql');
            } else if (newLanguage === 'python') {
              setSelectedDatabase('mysql');
            } else if (newLanguage === 'csharp') {
              setSelectedDatabase('sqlserver');
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
                    name: 'MySQL',
                    description: 'Popular open-source relational database',
                    features: ['JDBC support', 'High performance', 'Easy setup', 'Wide adoption'],
                    color: 'blue',
                    recommended: true
                  },
                  {
                    name: 'PostgreSQL',
                    description: 'Advanced open-source database with JSON support',
                    features: ['JSON/JSONB support', 'Advanced indexing', 'ACID compliance', 'Extensible'],
                    color: 'purple',
                    recommended: false
                  }
                ].map((db) => (
                  <Card 
                    key={db.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'java' && db.name === 'MySQL' && selectedDatabase === 'mysql') ||
                      (selectedLanguage === 'java' && db.name === 'PostgreSQL' && selectedDatabase === 'postgresql')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedDatabase(db.name === 'MySQL' ? 'mysql' : 'postgresql')}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold">{db.name}</CardTitle>
                        {db.recommended && (
                          <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                        )}
                      </div>
                      <CardDescription className="text-xs">{db.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {db.features.map((feature, i) => (
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
                    name: 'MySQL',
                    description: 'Python connector for MySQL databases',
                    features: ['mysql-connector-python', 'Pure Python', 'SSL support', 'Connection pooling'],
                    color: 'blue',
                    recommended: true
                  },
                  {
                    name: 'PostgreSQL',
                    description: 'Advanced PostgreSQL adapter for Python',
                    features: ['psycopg2', 'JSONB support', 'Async support', 'Full SQL compliance'],
                    color: 'purple',
                    recommended: false
                  }
                ].map((db) => (
                  <Card 
                    key={db.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'python' && db.name === 'MySQL' && selectedDatabase === 'mysql') ||
                      (selectedLanguage === 'python' && db.name === 'PostgreSQL' && selectedDatabase === 'postgresql')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedDatabase(db.name === 'MySQL' ? 'mysql' : 'postgresql')}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold">{db.name}</CardTitle>
                        {db.recommended && (
                          <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                        )}
                      </div>
                      <CardDescription className="text-xs">{db.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {db.features.map((feature, i) => (
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
                  SQL Server
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Microsoft SQL Server integration with ADO.NET for enterprise test data management.
                </p>
                <div className="space-y-1">
                  {[
                    'ADO.NET integration',
                    'Stored procedure support',
                    'Connection pooling',
                    'Transaction support',
                    'LINQ to SQL'
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
            Production-ready database integration code with connection management and error handling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  {selectedLanguage.toUpperCase()} - {selectedDatabase.toUpperCase()}
                </Badge>
                <Badge variant="outline">Database Integration</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(getDatabaseCode().join('\n'), 'Database integration code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {getDatabaseCode().map((line, index) => (
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
                <p><strong className="text-blue-600 dark:text-blue-400">Connection Management:</strong> Automatic connection handling with pooling and timeout management</p>
                <p><strong className="text-green-600 dark:text-green-400">Query Execution:</strong> Parameterized queries with prepared statements for security</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Data Mapping:</strong> Automatic mapping to dictionaries and custom objects</p>
                <p><strong className="text-orange-600 dark:text-orange-400">Error Handling:</strong> Comprehensive exception handling and logging</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database Schema */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            Database Schema Examples
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Common database schemas for test data management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Test Users Table */}
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Test Users Table</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`CREATE TABLE test_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`}
              </pre>
            </div>

            {/* Test Login Data Table */}
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Test Login Data Table</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`CREATE TABLE test_login_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    test_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    expected_result VARCHAR(20) NOT NULL,
    test_type VARCHAR(50) DEFAULT 'authentication',
    test_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
              </pre>
            </div>

            {/* Test Form Data Table */}
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Test Form Data Table</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`CREATE TABLE test_form_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    form_name VARCHAR(50) NOT NULL,
    field_name VARCHAR(100) NOT NULL,
    test_value TEXT,
    expected_result VARCHAR(255),
    validation_rule VARCHAR(255),
    test_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Advanced Database Features
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Advanced database operations for complex test scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Connection Pooling',
                description: 'Efficient connection management for high-performance testing',
                icon: <Activity className="w-5 h-5" />,
                features: ['Connection reuse', 'Timeout management', 'Load balancing', 'Resource optimization']
              },
              {
                title: 'Transaction Management',
                description: 'ACID transaction support for data consistency',
                icon: <RefreshCw className="w-5 h-5" />,
                features: ['Rollback support', 'Commit/rollback', 'Nested transactions', 'Isolation levels']
              },
              {
                title: 'Stored Procedures',
                description: 'Database-side logic for complex operations',
                icon: <Cpu className="w-5 h-5" />,
                features: ['Performance optimization', 'Business logic', 'Security', 'Code reuse']
              },
              {
                title: 'JSON Data Support',
                description: 'Native JSON/JSONB support for complex test data',
                icon: <FileCode className="w-5 h-5" />,
                features: ['JSON queries', 'Indexing', 'Schema validation', 'Data transformation']
              },
              {
                title: 'Data Encryption',
                description: 'Secure sensitive test data with encryption',
                icon: <Lock className="w-5 h-5" />,
                features: ['Column encryption', 'Data masking', 'Key management', 'Compliance']
              },
              {
                title: 'Backup & Recovery',
                description: 'Automated backup and recovery mechanisms',
                icon: <HardDriveIcon className="w-5 h-5" />,
                features: ['Scheduled backups', 'Point-in-time recovery', 'Data restoration', 'Disaster recovery']
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
              Optimize database operations for test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Connection Pooling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reuse database connections to reduce overhead and improve performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <RefreshCw className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Optimize Queries</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use prepared statements, proper indexing, and efficient SQL queries.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Activity className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Batch Operations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Group multiple operations into transactions for better performance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
              Security Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Secure database operations for test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <Lock className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Parameterized Queries</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Prevent SQL injection attacks with prepared statements and parameter binding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Key className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Secure Credentials</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Store database credentials securely and use environment variables.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Shield className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Encrypt Sensitive Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Encrypt passwords and other sensitive test data in the database.
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
          <div>• <strong>Connection Timeouts:</strong> Increase connection timeout values and check network connectivity</div>
          <div>• <strong>SQL Injection:</strong> Always use parameterized queries to prevent security vulnerabilities</div>
          <div>• <strong>Resource Leaks:</strong> Properly close connections and dispose of resources</div>
          <div>• <strong>Performance Issues:</strong> Use connection pooling and optimize database queries</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
