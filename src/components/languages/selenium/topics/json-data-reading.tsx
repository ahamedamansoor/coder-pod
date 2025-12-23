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
  FileCode,
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
  Braces,
  Parentheses,
  Quote,
  Asterisk,
  AtSign,
  Hash as HashIcon,
  DollarSign,
  Percent,
  Ampersand,
  Equal,
  Plus,
  Minus,
  Slash
} from 'lucide-react';

export function JSONDataReadingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp'>('java');
  const [selectedLibrary, setSelectedLibrary] = useState<'gson' | 'jackson' | 'json' | 'simplejson' | 'newtonsoft'>('gson');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getJSONCode = () => {
    if (selectedLanguage === 'java') {
      if (selectedLibrary === 'gson') {
        return [
          '// Gson JSON Reading Implementation',
          'import com.google.gson.Gson;',
          'import com.google.gson.GsonBuilder;',
          'import com.google.gson.JsonArray;',
          'import com.google.gson.JsonElement;',
          'import com.google.gson.JsonObject;',
          'import com.google.gson.JsonParser;',
          'import com.google.gson.JsonSyntaxException;',
          'import com.google.gson.reflect.TypeToken;',
          'import java.io.FileReader;',
          'import java.io.IOException;',
          'import java.lang.reflect.Type;',
          'import java.util.List;',
          'import java.util.Map;',
          'import java.util.ArrayList;',
          'import java.util.HashMap;',
          '',
          'public class JSONDataReader {',
          '    private Gson gson;',
          '    private String filePath;',
          '    ',
          '    public JSONDataReader(String filePath) {',
          '        this.filePath = filePath;',
          '        this.gson = new GsonBuilder()',
          '                .setPrettyPrinting()',
          '                .setDateFormat("yyyy-MM-dd\'T\'HH:mm:ss")',
          '                .create();',
          '    }',
          '    ',
          '    public JSONDataReader(String filePath, Gson gson) {',
          '        this.filePath = filePath;',
          '        this.gson = gson;',
          '    }',
          '    ',
          '    public String readRawJSON() throws IOException {',
          '        StringBuilder content = new StringBuilder();',
          '        try (FileReader reader = new FileReader(filePath)) {',
          '            int ch;',
          '            while ((ch = reader.read()) != -1) {',
          '                content.append((char) ch);',
          '            }',
          '        }',
          '        return content.toString();',
          '    }',
          '    ',
          '    public JsonObject readAsJsonObject() throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        return JsonParser.parseString(jsonContent).getAsJsonObject();',
          '    }',
          '    ',
          '    public JsonArray readAsJsonArray() throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        return JsonParser.parseString(jsonContent).getAsJsonArray();',
          '    }',
          '    ',
          '    public <T> T readAsObject(Class<T> clazz) throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        return gson.fromJson(jsonContent, clazz);',
          '    }',
          '    ',
          '    public <T> List<T> readAsList(Class<T> clazz) throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        Type listType = new TypeToken<List<T>>() {}.getType();',
          '        return gson.fromJson(jsonContent, listType);',
          '    }',
          '    ',
          '    public Map<String, Object> readAsMap() throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        Type mapType = new TypeToken<Map<String, Object>>() {}.getType();',
          '        return gson.fromJson(jsonContent, mapType);',
          '    }',
          '    ',
          '    public List<Map<String, Object>> readAsListOfMaps() throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        Type listType = new TypeToken<List<Map<String, Object>>>() {}.getType();',
          '        return gson.fromJson(jsonContent, listType);',
          '    }',
          '    ',
          '    public boolean isValidJSON() {',
          '        try {',
          '            readRawJSON();',
          '            JsonParser.parseString(readRawJSON());',
          '            return true;',
          '        } catch (Exception e) {',
          '            return false;',
          '        }',
          '    }',
          '    ',
          '    public Object getValueByKey(String keyPath) throws IOException, JsonSyntaxException {',
          '        JsonObject jsonObject = readAsJsonObject();',
          '        String[] keys = keyPath.split("\\\\.");',
          '        ',
          '        Object current = jsonObject;',
          '        for (String key : keys) {',
          '            if (current instanceof JsonObject) {',
          '                current = ((JsonObject) current).get(key);',
          '            } else if (current instanceof JsonArray && key.matches("\\\\d+")) {',
          '                int index = Integer.parseInt(key);',
          '                current = ((JsonArray) current).get(index);',
          '            } else {',
          '                return null;',
          '            }',
          '            ',
          '            if (current == null) {',
          '                return null;',
          '            }',
          '        }',
          '        ',
          '        return current;',
          '    }',
          '    ',
          '    public List<Object> searchByValue(String searchValue) throws IOException, JsonSyntaxException {',
          '        List<Object> results = new ArrayList<>();',
          '        JsonElement root = JsonParser.parseString(readRawJSON());',
          '        searchRecursive(root, searchValue, results);',
          '        return results;',
          '    }',
          '    ',
          '    private void searchRecursive(JsonElement element, String searchValue, List<Object> results) {',
          '        if (element.isJsonPrimitive()) {',
          '            String value = element.getAsString();',
          '            if (value.contains(searchValue)) {',
          '                results.add(element);',
          '            }',
          '        } else if (element.isJsonObject()) {',
          '            for (Map.Entry<String, JsonElement> entry : element.getAsJsonObject().entrySet()) {',
          '                searchRecursive(entry.getValue(), searchValue, results);',
          '            }',
          '        } else if (element.isJsonArray()) {',
          '            for (JsonElement item : element.getAsJsonArray()) {',
          '                searchRecursive(item, searchValue, results);',
          '            }',
          '        }',
          '    }',
          '    ',
          '    public String prettyPrint() throws IOException, JsonSyntaxException {',
          '        String jsonContent = readRawJSON();',
          '        JsonElement element = JsonParser.parseString(jsonContent);',
          '        return gson.toJson(element);',
          '    }',
          '    ',
          '    // Usage Example',
          '    public static void main(String[] args) {',
          '        try {',
          '            JSONDataReader reader = new JSONDataReader("testdata.json");',
          '            ',
          '            // Read as object',
          '            TestData data = reader.readAsObject(TestData.class);',
          '            System.out.println("Data: " + data);',
          '            ',
          '            // Read as list',
          '            List<TestData> dataList = reader.readAsList(TestData.class);',
          '            System.out.println("List size: " + dataList.size());',
          '            ',
          '            // Read as map',
          '            Map<String, Object> map = reader.readAsMap();',
          '            System.out.println("Map keys: " + map.keySet());',
          '            ',
          '            // Get nested value',
          '            Object value = reader.getValueByKey("user.profile.name");',
          '            System.out.println("Nested value: " + value);',
          '            ',
          '        } catch (IOException | JsonSyntaxException e) {',
          '            e.printStackTrace();',
          '        }',
          '    }',
          '}',
          '',
          '// Test Data Class',
          'class TestData {',
          '    private String username;',
          '    private String email;',
          '    private String password;',
          '    private boolean active;',
          '    private Profile profile;',
          '    ',
          '    // Getters and setters',
          '    public String getUsername() { return username; }',
          '    public void setUsername(String username) { this.username = username; }',
          '    ',
          '    public String getEmail() { return email; }',
          '    public void setEmail(String email) { this.email = email; }',
          '    ',
          '    public String getPassword() { return password; }',
          '    public void setPassword(String password) { this.password = password; }',
          '    ',
          '    public boolean isActive() { return active; }',
          '    public void setActive(boolean active) { this.active = active; }',
          '    ',
          '    public Profile getProfile() { return profile; }',
          '    public void setProfile(Profile profile) { this.profile = profile; }',
          '}',
          '',
          'class Profile {',
          '    private String firstName;',
          '    private String lastName;',
          '    private int age;',
          '    ',
          '    // Getters and setters',
          '    public String getFirstName() { return firstName; }',
          '    public void setFirstName(String firstName) { this.firstName = firstName; }',
          '    ',
          '    public String getLastName() { return lastName; }',
          '    public void setLastName(String lastName) { this.lastName = lastName; }',
          '    ',
          '    public int getAge() { return age; }',
          '    public void setAge(int age) { this.age = age; }',
          '}',
          '',
          '// TestNG Data Provider Integration',
          'import org.testng.annotations.DataProvider;',
          '',
          'public class JSONDataProvider {',
          '    @DataProvider(name = "jsonData")',
          '    public Object[][] getJSONData() throws IOException {',
          '        JSONDataReader reader = new JSONDataReader("testdata.json");',
          '        List<TestData> dataList = reader.readAsList(TestData.class);',
          '        ',
          '        Object[][] testData = new Object[dataList.size()][1];',
          '        for (int i = 0; i < dataList.size(); i++) {',
          '            testData[i][0] = dataList.get(i);',
          '        }',
          '        ',
          '        return testData;',
          '    }',
          '}'
        ];
      } else if (selectedLibrary === 'jackson') {
        return [
          '// Jackson JSON Reading Implementation',
          'import com.fasterxml.jackson.databind.ObjectMapper;',
          'import com.fasterxml.jackson.databind.JsonNode;',
          'import com.fasterxml.jackson.databind.node.ArrayNode;',
          'import com.fasterxml.jackson.databind.node.ObjectNode;',
          'import com.fasterxml.jackson.core.JsonProcessingException;',
          'import com.fasterxml.jackson.core.type.TypeReference;',
          'import java.io.File;',
          'import java.io.IOException;',
          'import java.util.List;',
          'import java.util.Map;',
          'import java.util.ArrayList;',
          'import java.util.HashMap;',
          '',
          'public class JacksonJSONReader {',
          '    private ObjectMapper objectMapper;',
          '    private String filePath;',
          '    ',
          '    public JacksonJSONReader(String filePath) {',
          '        this.filePath = filePath;',
          '        this.objectMapper = new ObjectMapper();',
          '        // Configure for common use cases',
          '        this.objectMapper.configure(com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);',
          '        this.objectMapper.configure(com.fasterxml.jackson.databind.DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);',
          '    }',
          '    ',
          '    public JacksonJSONReader(String filePath, ObjectMapper objectMapper) {',
          '        this.filePath = filePath;',
          '        this.objectMapper = objectMapper;',
          '    }',
          '    ',
          '    public JsonNode readAsJsonNode() throws IOException {',
          '        return objectMapper.readTree(new File(filePath));',
          '    }',
          '    ',
          '    public <T> T readAsObject(Class<T> clazz) throws IOException {',
          '        return objectMapper.readValue(new File(filePath), clazz);',
          '    }',
          '    ',
          '    public <T> List<T> readAsList(Class<T> clazz) throws IOException {',
          '        return objectMapper.readValue(new File(filePath), objectMapper.getTypeFactory().constructCollectionType(List.class, clazz));',
          '    }',
          '    ',
          '    public Map<String, Object> readAsMap() throws IOException {',
          '        return objectMapper.readValue(new File(filePath), new TypeReference<Map<String, Object>>() {});',
          '    }',
          '    ',
          '    public List<Map<String, Object>> readAsListOfMaps() throws IOException {',
          '        return objectMapper.readValue(new File(filePath), new TypeReference<List<Map<String, Object>>>() {});',
          '    }',
          '    ',
          '    public Object getValueByKey(String keyPath) throws IOException {',
          '        JsonNode rootNode = readAsJsonNode();',
          '        String[] keys = keyPath.split("\\\\.");',
          '        ',
          '        JsonNode current = rootNode;',
          '        for (String key : keys) {',
          '            if (current.isObject() && current.has(key)) {',
          '                current = current.get(key);',
          '            } else if (current.isArray() && key.matches("\\\\d+")) {',
          '                int index = Integer.parseInt(key);',
          '                if (index < current.size()) {',
          '                    current = current.get(index);',
          '                } else {',
          '                    return null;',
          '                }',
          '            } else {',
          '                return null;',
          '            }',
          '        }',
          '        ',
          '        return current.isValueNode() ? current.asText() : current;',
          '    }',
          '    ',
          '    public List<JsonNode> searchByValue(String searchValue) throws IOException {',
          '        List<JsonNode> results = new ArrayList<>();',
          '        JsonNode rootNode = readAsJsonNode();',
          '        searchRecursive(rootNode, searchValue, results);',
          '        return results;',
          '    }',
          '    ',
          '    private void searchRecursive(JsonNode node, String searchValue, List<JsonNode> results) {',
          '        if (node.isValueNode() && node.asText().contains(searchValue)) {',
          '            results.add(node);',
          '        } else if (node.isObject()) {',
          '            node.fields().forEachRemaining(entry -> searchRecursive(entry.getValue(), searchValue, results));',
          '        } else if (node.isArray()) {',
          '            for (JsonNode element : node) {',
          '                searchRecursive(element, searchValue, results);',
          '            }',
          '        }',
          '    }',
          '    ',
          '    public String prettyPrint() throws IOException {',
          '        JsonNode rootNode = readAsJsonNode();',
          '        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(rootNode);',
          '    }',
          '    ',
          '    public boolean isValidJSON() {',
          '        try {',
          '            readAsJsonNode();',
          '            return true;',
          '        } catch (Exception e) {',
          '            return false;',
          '        }',
          '    }',
          '}'
        ];
      }
    } else if (selectedLanguage === 'python') {
      if (selectedLibrary === 'json') {
        return [
          '# Python JSON Module Implementation',
          'import json',
          'import os',
          'from typing import List, Dict, Any, Union, Optional',
          'from pathlib import Path',
          '',
          'class JSONDataReader:',
          '    """',
          '    Comprehensive JSON reader with advanced features',
          '    """',
          '    ',
          '    def __init__(self, file_path: str, encoding: str = \'utf-8\'):',
          '        """',
          '        Initialize JSON reader',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"JSON file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.encoding = encoding',
          '    ',
          '    def read_raw(self) -> str:',
          '        """',
          '        Read raw JSON content as string',
          '        """',
          '        with open(self.file_path, \'r\', encoding=self.encoding) as file:',
          '            return file.read()',
          '    ',
          '    def read_as_dict(self) -> Dict[str, Any]:',
          '        """',
          '        Read JSON as dictionary',
          '        """',
          '        with open(self.file_path, \'r\', encoding=self.encoding) as file:',
          '            return json.load(file)',
          '    ',
          '    def read_as_list(self) -> List[Any]:',
          '        """',
          '        Read JSON as list',
          '        """',
          '        with open(self.file_path, \'r\', encoding=self.encoding) as file:',
          '            return json.load(file)',
          '    ',
          '    def read_as_object(self, target_class: type):',
          '        """',
          '        Read JSON and convert to custom object',
          '        """',
          '        data = self.read_as_dict()',
          '        return self._dict_to_object(data, target_class)',
          '    ',
          '    def read_as_object_list(self, target_class: type) -> List[Any]:',
          '        """',
          '        Read JSON array and convert to list of custom objects',
          '        """',
          '        data_list = self.read_as_list()',
          '        return [self._dict_to_object(item, target_class) for item in data_list]',
          '    ',
          '    def _dict_to_object(self, data: Dict[str, Any], target_class: type):',
          '        """',
          '        Convert dictionary to object of target class',
          '        """',
          '        if isinstance(data, dict):',
          '            obj = target_class()',
          '            for key, value in data.items():',
          '                if hasattr(obj, key):',
          '                    setattr(obj, key, value)',
          '            return obj',
          '        return data',
          '    ',
          '    def get_value_by_path(self, path: str) -> Any:',
          '        """',
          '        Get value using dot notation path (e.g., "user.profile.name")',
          '        """',
          '        data = self.read_as_dict()',
          '        keys = path.split(\'.\')',
          '        ',
          '        current = data',
          '        for key in keys:',
          '            if isinstance(current, dict) and key in current:',
          '                current = current[key]',
          '            elif isinstance(current, list) and key.isdigit():',
          '                index = int(key)',
          '                if 0 <= index < len(current):',
          '                    current = current[index]',
          '                else:',
          '                    return None',
          '            else:',
          '                return None',
          '        ',
          '        return current',
          '    ',
          '    def search_by_value(self, search_value: str, case_sensitive: bool = False) -> List[Any]:',
          '        """',
          '        Search for values containing the search string',
          '        """',
          '        data = self.read_as_dict()',
          '        results = []',
          '        self._search_recursive(data, search_value, results, case_sensitive)',
          '        return results',
          '    ',
          '    def _search_recursive(self, data: Any, search_value: str, results: List[Any], case_sensitive: bool):',
          '        """',
          '        Recursive search for values',
          '        """',
          '        if isinstance(data, dict):',
          '            for value in data.values():',
          '                self._search_recursive(value, search_value, results, case_sensitive)',
          '        elif isinstance(data, list):',
          '            for item in data:',
          '                self._search_recursive(item, search_value, results, case_sensitive)',
          '        elif isinstance(data, str):',
          '            if case_sensitive:',
          '                if search_value in data:',
          '                    results.append(data)',
          '            else:',
          '                if search_value.lower() in data.lower():',
          '                    results.append(data)',
          '        ',
          '    def get_keys(self, path: Optional[str] = None) -> List[str]:',
          '        """',
          '        Get all keys at specified path or root level',
          '        """',
          '        if path:',
          '            data = self.get_value_by_path(path)',
          '        else:',
          '            data = self.read_as_dict()',
          '        ',
          '        if isinstance(data, dict):',
          '            return list(data.keys())',
          '        return []',
          '    ',
          '    def filter_by_keys(self, keys: List[str]) -> Dict[str, Any]:',
          '        """',
          '        Filter JSON data to include only specified keys',
          '        """',
          '        data = self.read_as_dict()',
          '        return {key: data[key] for key in keys if key in data}',
          '    ',
          '    def validate_schema(self, schema: Dict[str, Any]) -> Dict[str, Any]:',
          '        """',
          '        Validate JSON against a schema',
          '        Returns validation report',
          '        """',
          '        data = self.read_as_dict()',
          '        report = {',
          '            "valid": True,',
          '            "errors": [],',
          '            "missing_keys": [],',
          '            "extra_keys": []',
          '        }',
          '        ',
          '        # Check required keys',
          '        required_keys = schema.get("required", [])',
          '        for key in required_keys:',
          '            if key not in data:',
          '                report["valid"] = False',
          '                report["missing_keys"].append(key)',
          '        ',
          '        # Check data types',
          '        properties = schema.get("properties", {})',
          '        for key, expected_type in properties.items():',
          '            if key in data:',
          '                actual_value = data[key]',
          '                if not self._check_type(actual_value, expected_type):',
          '                    report["valid"] = False',
          '                    report["errors"].append(f"Type mismatch for key \'{key}\'")',
          '        ',
          '        return report',
          '    ',
          '    def _check_type(self, value: Any, expected_type: str) -> bool:',
          '        """',
          '        Check if value matches expected type',
          '        """',
          '        type_mapping = {',
          '            "string": str,',
          '            "integer": int,',
          '            "number": (int, float),',
          '            "boolean": bool,',
          '            "array": list,',
          '            "object": dict,',
          '        }',
          '        ',
          '        expected_python_type = type_mapping.get(expected_type)',
          '        if expected_python_type:',
          '            return isinstance(value, expected_python_type)',
          '        return True',
          '    ',
          '    def pretty_print(self) -> str:',
          '        """',
          '        Return pretty-printed JSON string',
          '        """',
          '        data = self.read_as_dict()',
          '        return json.dumps(data, indent=2, ensure_ascii=False)',
          '    ',
          '    def save_formatted(self, output_path: str):',
          '        """',
          '        Save formatted JSON to file',
          '        """',
          '        with open(output_path, \'w\', encoding=self.encoding) as file:',
          '            json.dump(self.read_as_dict(), file, indent=2, ensure_ascii=False)',
          '    ',
          '    def is_valid(self) -> bool:',
          '        """',
          '        Check if JSON is valid',
          '        """',
          '        try:',
          '            self.read_as_dict()',
          '            return True',
          '        except (json.JSONDecodeError, IOError):',
          '            return False',
          '    ',
          '    def get_size(self) -> int:',
          '        """',
          '        Get JSON file size in bytes',
          '        """',
          '        return os.path.getsize(self.file_path)',
          '    ',
          '    def count_elements(self) -> Dict[str, int]:',
          '        """',
          '        Count different types of elements in JSON',
          '        """',
          '        data = self.read_as_dict()',
          '        counts = {',
          '            "objects": 0,',
          '            "arrays": 0,',
          '            "strings": 0,',
          '            "numbers": 0,',
          '            "booleans": 0,',
          '            "null_values": 0',
          '        }',
          '        ',
          '        self._count_recursive(data, counts)',
          '        return counts',
          '    ',
          '    def _count_recursive(self, data: Any, counts: Dict[str, int]):',
          '        """',
          '        Recursively count element types',
          '        """',
          '        if isinstance(data, dict):',
          '            counts["objects"] += 1',
          '            for value in data.values():',
          '                self._count_recursive(value, counts)',
          '        elif isinstance(data, list):',
          '            counts["arrays"] += 1',
          '            for item in data:',
          '                self._count_recursive(item, counts)',
          '        elif isinstance(data, str):',
          '            counts["strings"] += 1',
          '        elif isinstance(data, (int, float)) and not isinstance(data, bool):',
          '            counts["numbers"] += 1',
          '        elif isinstance(data, bool):',
          '            counts["booleans"] += 1',
          '        elif data is None:',
          '            counts["null_values"] += 1',
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
          '    with JSONDataReader("testdata.json") as reader:',
          '        print("Keys:", reader.get_keys())',
          '        print("Size:", reader.get_size(), "bytes")',
          '        ',
          '        # Read as dictionary',
          '        data = reader.read_as_dict()',
          '        print(f"Found {len(data)} top-level keys")',
          '        ',
          '        # Get nested value',
          '        user_name = reader.get_value_by_path("user.profile.name")',
          '        print(f"User name: {user_name}")',
          '        ',
          '        # Search for values',
          '        matches = reader.search_by_value("john")',
          '        print(f"Found {len(matches)} matches")',
          '        ',
          '        # Validate schema',
          '        schema = {',
          '            "required": ["user", "settings"],',
          '            "properties": {',
          '                "user": "object",',
          '                "settings": "object",',
          '                "timestamp": "string"',
          '            }',
          '        }',
          '        validation_report = reader.validate_schema(schema)',
          '        print("Validation:", validation_report)',
          '',
          '# PyTest Integration',
          'import pytest',
          '',
          '@pytest.fixture',
          'def json_data():',
          '    """PyTest fixture for JSON data"""',
          '    with JSONDataReader("testdata.json") as reader:',
          '        return reader.read_as_dict()',
          '',
          'def test_with_json_data(json_data):',
          '    """Test using JSON data fixture"""',
          '    assert "user" in json_data',
          '    assert json_data["user"]["username"] is not None',
          '    assert "@" in json_data["user"]["email"]',
          '',
          '# Custom data class example',
          'class User:',
          '    def __init__(self):',
          '        self.username = None',
          '        self.email = None',
          '        self.active = True',
          '        self.profile = None',
          '',
          'def test_custom_object_mapping():',
          '    """Test mapping JSON to custom objects"""',
          '    with JSONDataReader("testdata.json") as reader:',
          '        user = reader.read_as_object(User)',
          '        assert user.username is not None',
          '        assert "@" in user.email',
          '        assert user.active is not None'
        ];
      } else if (selectedLibrary === 'simplejson') {
        return [
          '# SimpleJSON Enhanced Implementation',
          'import simplejson as json',
          'import os',
          'from typing import List, Dict, Any, Union, Optional',
          'from pathlib import Path',
          '',
          'class SimpleJSONReader:',
          '    """',
          '    Enhanced JSON reader using simplejson with additional features',
          '    """',
          '    ',
          '    def __init__(self, file_path: str, encoding: str = \'utf-8\'):',
          '        """',
          '        Initialize JSON reader with simplejson',
          '        """',
          '        if not os.path.exists(file_path):',
          '            raise FileNotFoundError(f"JSON file not found: {file_path}")',
          '        ',
          '        self.file_path = file_path',
          '        self.encoding = encoding',
          '        self._load_options = {',
          '            "object_pairs_hook": self._object_pairs_hook,',
          '            "parse_float": self._parse_float,',
          '            "parse_int": self._parse_int,',
          '            "parse_constant": self._parse_constant,',
          '            "strict": False,  # Allow control characters in strings',
          '        }',
          '    ',
          '    def read_raw(self) -> str:',
          '        """Read raw JSON content"""',
          '        with open(self.file_path, \'r\', encoding=self.encoding) as file:',
          '            return file.read()',
          '    ',
          '    def read_as_dict(self) -> Dict[str, Any]:',
          '        """Read JSON as ordered dictionary"""',
          '        with open(self.file_path, \'r\', encoding=self.encoding) as file:',
          '            return json.load(file, **self._load_options)',
          '    ',
          '    def read_as_list(self) -> List[Any]:',
          '        """Read JSON as list"""',
          '        with open(self.file_path, \'r\', encoding=self.encoding) as file:',
          '            return json.load(file, **self._load_options)',
          '    ',
          '    def _object_pairs_hook(self, pairs):',
          '        """Preserve key order in objects"""',
          '        return dict(pairs)',
          '    ',
          '    def _parse_float(self, s):',
          '        """Custom float parsing"""',
          '        return float(s)',
          '    ',
          '    def _parse_int(self, s):',
          '        """Custom integer parsing"""',
          '        return int(s)',
          '    ',
          '    def _parse_constant(self, s):',
          '        """Handle NaN, Infinity, -Infinity"""',
          '        if s == \'NaN\':',
          '            return float(\'nan\')',
          '        elif s == \'Infinity\':',
          '            return float(\'inf\')',
          '        elif s == \'-Infinity\':',
          '            return float(\'-inf\')',
          '        else:',
          '            raise ValueError(f"Unknown constant: {s}")',
          '    ',
          '    def validate_json(self) -> Dict[str, Any]:',
          '        """',
          '        Comprehensive JSON validation',
          '        """',
          '        try:',
          '            data = self.read_as_dict()',
          '            return {',
          '                "valid": True,',
          '                "size": len(json.dumps(data)),',
          '                "encoding": self.encoding,',
          '                "structure": self._analyze_structure(data)',
          '            }',
          '        except Exception as e:',
          '            return {',
          '                "valid": False,',
          '                "error": str(e),',
          '                "line": getattr(e, \'lineno\', None),',
          '                "column": getattr(e, \'colno\', None),',
          '            }',
          '    ',
          '    def _analyze_structure(self, data: Any) -> Dict[str, Any]:',
          '        """Analyze JSON structure""",',
          '        analysis = {',
          '            "type": type(data).__name__,',
          '            "depth": self._calculate_depth(data),',
          '            "keys": [],',
          '            "arrays": [],',
          '        }',
          '        ',
          '        if isinstance(data, dict):',
          '            analysis["keys"] = list(data.keys())',
          '            self._find_arrays(data, analysis["arrays"])',
          '        elif isinstance(data, list):',
          '            analysis["arrays"] = [f"root[{i}]" for i in range(len(data)) if isinstance(data[i], list)]',
          '        ',
          '        return analysis',
          '    ',
          '    def _calculate_depth(self, data: Any, current_depth: int = 0) -> int:',
          '        """Calculate maximum nesting depth"""',
          '        if isinstance(data, dict):',
          '            if not data:',
          '                return current_depth',
          '            return max(self._calculate_depth(value, current_depth + 1) for value in data.values())',
          '        elif isinstance(data, list):',
          '            if not data:',
          '                return current_depth',
          '            return max(self._calculate_depth(item, current_depth + 1) for item in data)',
          '        else:',
          '            return current_depth',
          '    ',
          '    def _find_arrays(self, data: Any, path: str = "", arrays: List[str] = None) -> List[str]:',
          '        """Find all arrays in JSON structure"""',
          '        if arrays is None:',
          '            arrays = []',
          '        ',
          '        if isinstance(data, dict):',
          '            for key, value in data.items():',
          '                new_path = f"{path}.{key}" if path else key',
          '                if isinstance(value, list):',
          '                    arrays.append(new_path)',
          '                self._find_arrays(value, new_path, arrays)',
          '        elif isinstance(data, list):',
          '            for i, item in enumerate(data):',
          '                new_path = f"{path}[{i}]"',
          '                self._find_arrays(item, new_path, arrays)',
          '        ',
          '        return arrays',
          '    ',
          '    def pretty_print(self, indent: int = 2) -> str:',
          '        """Pretty print JSON with custom formatting""",',
          '        data = self.read_as_dict()',
          '        return json.dumps(data, indent=indent, ensure_ascii=False, sort_keys=False)',
          '    ',
          '    def minify(self) -> str:',
          '        """Minify JSON (remove whitespace)""",',
          '        data = self.read_as_dict()',
          '        return json.dumps(data, separators=(\',\', \':\'), ensure_ascii=False)',
          '    ',
          '    def compare_with(self, other_file: str) -> Dict[str, Any]:',
          '        """Compare this JSON with another JSON file""",',
          '        try:',
          '            other_reader = SimpleJSONReader(other_file)',
          '            data1 = self.read_as_dict()',
          '            data2 = other_reader.read_as_dict()',
          '            ',
          '            return {',
          '                "identical": data1 == data2,',
          '                "size_diff": len(json.dumps(data1)) - len(json.dumps(data2)),',
          '                "structure_diff": self._compare_structure(data1, data2),',
          '            }',
          '        except Exception as e:',
          '            return {"error": str(e)}',
          '    ',
          '    def _compare_structure(self, data1: Any, data2: Any, path: str = "") -> List[str]:',
          '        """Compare structure of two JSON objects""",',
          '        differences = []',
          '        ',
          '        type1, type2 = type(data1).__name__, type(data2).__name__',
          '        if type1 != type2:',
          '            differences.append(f"{path}: {type1} != {type2}")',
          '            return differences',
          '        ',
          '        if isinstance(data1, dict):',
          '            keys1, keys2 = set(data1.keys()), set(data2.keys())',
          '            if keys1 != keys2:',
          '                differences.append(f"{path}: Keys differ - {keys1 - keys2} vs {keys2 - keys1}")',
          '            ',
          '            for key in keys1 & keys2:',
          '                differences.extend(self._compare_structure(data1[key], data2[key], f"{path}.{key}"))',
          '        elif isinstance(data1, list):',
          '            if len(data1) != len(data2):',
          '                differences.append(f"{path}: Array lengths differ - {len(data1)} vs {len(data2)}")',
          '            ',
          '            for i in range(min(len(data1), len(data2))):',
          '                differences.extend(self._compare_structure(data1[i], data2[i], f"{path}[{i}]"))',
          '        ',
          '        return differences',
          '    ',
          '    def extract_paths(self, pattern: str = "*") -> List[str]:',
          '        """Extract all paths matching pattern""",',
          '        data = self.read_as_dict()',
          '        paths = []',
          '        self._extract_paths_recursive(data, "", pattern, paths)',
          '        return paths',
          '    ',
          '    def _extract_paths_recursive(self, data: Any, path: str, pattern: str, paths: List[str]):',
          '        """Recursively extract paths""",',
          '        if pattern == "*" or path == pattern or path.endswith(pattern):',
          '            paths.append(path)',
          '        ',
          '        if isinstance(data, dict):',
          '            for key, value in data.items():',
          '                new_path = f"{path}.{key}" if path else key',
          '                self._extract_paths_recursive(value, new_path, pattern, paths)',
          '        elif isinstance(data, list):',
          '            for i, item in enumerate(data):',
          '                new_path = f"{path}[{i}]"',
          '                self._extract_paths_recursive(item, new_path, pattern, paths)',
          '    ',
          '    def __enter__(self):',
          '        """Context manager entry""",',
          '        return self',
          '    ',
          '    def __exit__(self, exc_type, exc_val, exc_tb):',
          '        """Context manager exit""",',
          '        pass'
        ];
      }
    } else if (selectedLanguage === 'csharp') {
      return [
        '// C# JSON Reading Implementation with Newtonsoft.Json',
        'using Newtonsoft.Json;',
        'using Newtonsoft.Json.Linq;',
        'using System;',
        'using System.Collections.Generic;',
        'using System.IO;',
        'using System.Linq;',
        'using System.Text;',
        '',
        'public class JSONDataReader : IDisposable',
        '{',
        '    private string _filePath;',
        '    private JsonSerializerSettings _settings;',
        '    ',
        '    public JSONDataReader(string filePath)',
        '    {',
        '        _filePath = filePath;',
        '        _settings = new JsonSerializerSettings',
        '        {',
        '            Formatting = Formatting.Indented,',
        '            NullValueHandling = NullValueHandling.Ignore,',
        '            DefaultValueHandling = DefaultValueHandling.Include,',
        '            DateFormatString = "yyyy-MM-dd\'T\'HH:mm:ss",',
        '            MissingMemberHandling = MissingMemberHandling.Ignore,',
        '        };',
        '    }',
        '    ',
        '    public JSONDataReader(string filePath, JsonSerializerSettings settings)',
        '    {',
        '        _filePath = filePath;',
        '        _settings = settings;',
        '    }',
        '    ',
        '    public string ReadRawJSON()',
        '    {',
        '        return File.ReadAllText(_filePath);',
        '    }',
        '    ',
        '    public JObject ReadAsJObject()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JObject.Parse(jsonContent);',
        '    }',
        '    ',
        '    public JArray ReadAsJArray()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JArray.Parse(jsonContent);',
        '    }',
        '    ',
        '    public JToken ReadAsJToken()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JToken.Parse(jsonContent);',
        '    }',
        '    ',
        '    public T ReadAsObject<T>()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JsonConvert.DeserializeObject<T>(jsonContent, _settings);',
        '    }',
        '    ',
        '    public List<T> ReadAsList<T>()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JsonConvert.DeserializeObject<List<T>>(jsonContent, _settings);',
        '    }',
        '    ',
        '    public Dictionary<string, object> ReadAsDictionary()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonContent, _settings);',
        '    }',
        '    ',
        '    public List<Dictionary<string, object>> ReadAsListOfDictionaries()',
        '    {',
        '        string jsonContent = ReadRawJSON();',
        '        return JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(jsonContent, _settings);',
        '    }',
        '    ',
        '    public object GetValueByKey(string keyPath)',
        '    {',
        '        JToken root = ReadAsJToken();',
        '        string[] keys = keyPath.Split(\'.\');',
        '        ',
        '        JToken current = root;',
        '        foreach (string key in keys)',
        '        {',
        '            if (current is JObject jObject && jObject.ContainsKey(key))',
        '            {',
        '                current = jObject[key];',
        '            }',
        '            else if (current is JArray jArray && int.TryParse(key, out int index))',
        '            {',
        '                if (index >= 0 && index < jArray.Count)',
        '                {',
        '                    current = jArray[index];',
        '                }',
        '                else',
        '                {',
        '                    return null;',
        '                }',
        '            }',
        '            else',
        '            {',
        '                return null;',
        '            }',
        '        }',
        '        ',
        '        return current;',
        '    }',
        '    ',
        '    public List<JToken> SearchByValue(string searchValue)',
        '    {',
        '        List<JToken> results = new List<JToken>();',
        '        JToken root = ReadAsJToken();',
        '        SearchRecursive(root, searchValue, results);',
        '        return results;',
        '    }',
        '    ',
        '    private void SearchRecursive(JToken token, string searchValue, List<JToken> results)',
        '    {',
        '        if (token.Type == JTokenType.String && token.ToString().Contains(searchValue))',
        '        {',
        '            results.Add(token);',
        '        }',
        '        else if (token is JObject jObject)',
        '        {',
        '            foreach (JProperty property in jObject.Properties())',
        '            {',
        '                SearchRecursive(property.Value, searchValue, results);',
        '            }',
        '        }',
        '        else if (token is JArray jArray)',
        '        {',
        '            foreach (JToken item in jArray)',
        '            {',
        '                SearchRecursive(item, searchValue, results);',
        '            }',
        '        }',
        '    }',
        '    ',
        '    public string PrettyPrint()',
        '    {',
        '        JToken root = ReadAsJToken();',
        '        return root.ToString(Formatting.Indented);',
        '    }',
        '    ',
        '    public string Minify()',
        '    {',
        '        JToken root = ReadAsJToken();',
        '        return root.ToString(Formatting.None);',
        '    }',
        '    ',
        '    public bool IsValidJSON()',
        '    {',
        '        try',
        '        {',
        '            ReadAsJToken();',
        '            return true;',
        '        }',
        '        catch',
        '        {',
        '            return false;',
        '        }',
        '    }',
        '    ',
        '    public void SaveFormatted(string outputPath)',
        '    {',
        '        string formattedJson = PrettyPrint();',
        '        File.WriteAllText(outputPath, formattedJson);',
        '    }',
        '    ',
        '    public void SaveMinified(string outputPath)',
        '    {',
        '        string minifiedJson = Minify();',
        '        File.WriteAllText(outputPath, minifiedJson);',
        '    }',
        '    ',
        '    public long GetFileSize()',
        '    {',
        '        return new FileInfo(_filePath).Length;',
        '    }',
        '    ',
        '    public void Dispose()',
        '    {',
        '        // No explicit disposal needed for file operations',
        '    }',
        '}',
        '',
        '// Custom data class for strongly-typed reading',
        'public class UserData',
        '{',
        '    [JsonProperty("username")]',
        '    public string Username { get; set; }',
        '    ',
        '    [JsonProperty("email")]',
        '    public string Email { get; set; }',
        '    ',
        '    [JsonProperty("password")]',
        '    public string Password { get; set; }',
        '    ',
        '    [JsonProperty("active")]',
        '    public bool Active { get; set; }',
        '    ',
        '    [JsonProperty("profile")]',
        '    public ProfileData Profile { get; set; }',
        '}',
        '',
        'public class ProfileData',
        '{',
        '    [JsonProperty("firstName")]',
        '    public string FirstName { get; set; }',
        '    ',
        '    [JsonProperty("lastName")]',
        '    public string LastName { get; set; }',
        '    ',
        '    [JsonProperty("age")]',
        '    public int Age { get; set; }',
        '}',
        '',
        '// MSTest Data Provider Integration',
        'using Microsoft.VisualStudio.TestTools.UnitTesting;',
        '',
        '[TestClass]',
        'public class JSONTestDataProvider',
        '{',
        '    private static List<UserData> _testData;',
        '    ',
        '    [ClassInitialize]',
        '    public static void SetupTestData(TestContext context)',
        '    {',
        '        using (var reader = new JSONDataReader("TestData.json"))',
        '        {',
        '            _testData = reader.ReadAsList<UserData>();',
        '        }',
        '    }',
        '    ',
        '    [TestMethod]',
        '    [DynamicData(nameof(GetTestData), DynamicDataSourceType.Method)]',
        '    public void TestUserData(UserData userData)',
        '    {',
        '        Assert.IsNotNull(userData.Username);',
        '        Assert.IsNotNull(userData.Email);',
        '        Assert.IsTrue(userData.Email.Contains("@"));',
        '        Assert.IsTrue(userData.Active);',
        '    }',
        '    ',
        '    public static IEnumerable<object[]> GetTestData()',
        '    {',
        '        return _testData.Select(data => new object[] { data });',
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
      '// - Java: Gson, Jackson',
      '// - Python: JSON Module, SimpleJSON', 
      '// - C#: Newtonsoft.Json'
    ];
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FileCode}
        category="Selenium · Data Reading"
        title="JSON Data Reading"
        description="Comprehensive guide to reading JSON files in test automation with multiple libraries and advanced data manipulation techniques."
        colorTheme="orange"
      />

      {/* Introduction */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileCode className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            JSON Data Reading Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  Why JSON for Test Data?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  JSON provides a flexible, hierarchical format for complex test data 
                  with support for nested objects, arrays, and various data types.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Key Advantages
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Hierarchical data structure</li>
                  <li>• Support for complex nested objects</li>
                  <li>• Language-independent format</li>
                  <li>• Excellent for API testing data</li>
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
                  <li>• API request/response testing</li>
                  <li>• Configuration management</li>
                  <li>• Complex test scenarios</li>
                  <li>• Data-driven testing with nested data</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  JSON Structure Features
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  Supports objects, arrays, strings, numbers, booleans, and null values 
                  with unlimited nesting levels for complex data relationships.
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
              setSelectedLibrary('gson');
            } else if (newLanguage === 'python') {
              setSelectedLibrary('json');
            } else if (newLanguage === 'csharp') {
              setSelectedLibrary('newtonsoft');
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
                    name: 'Gson',
                    description: 'Google\'s JSON library for Java',
                    features: ['Simple API', 'Custom serialization', 'Tree model', 'Type adapters'],
                    color: 'green',
                    recommended: true
                  },
                  {
                    name: 'Jackson',
                    description: 'High-performance JSON processor',
                    features: ['Streaming API', 'Data binding', 'Tree model', 'Annotations'],
                    color: 'blue',
                    recommended: false
                  }
                ].map((lib) => (
                  <Card 
                    key={lib.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'java' && lib.name === 'Gson' && selectedLibrary === 'gson') ||
                      (selectedLanguage === 'java' && lib.name === 'Jackson' && selectedLibrary === 'jackson')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedLibrary(lib.name === 'Gson' ? 'gson' : 'jackson')}
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
                    name: 'JSON Module',
                    description: 'Built-in Python JSON module',
                    features: ['Standard library', 'Simple API', 'Type hints', 'Context managers'],
                    color: 'blue',
                    recommended: true
                  },
                  {
                    name: 'SimpleJSON',
                    description: 'Enhanced JSON with additional features',
                    features: ['Performance optimized', 'Decimal support', 'Validation', 'Comparison'],
                    color: 'orange',
                    recommended: false
                  }
                ].map((lib) => (
                  <Card 
                    key={lib.name}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      (selectedLanguage === 'python' && lib.name === 'JSON Module' && selectedLibrary === 'json') ||
                      (selectedLanguage === 'python' && lib.name === 'SimpleJSON' && selectedLibrary === 'simplejson')
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedLibrary(lib.name === 'JSON Module' ? 'json' : 'simplejson')}
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
                  Newtonsoft.Json
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  The most popular .NET library for JSON with comprehensive features and excellent performance.
                </p>
                <div className="space-y-1">
                  {[
                    'LINQ to JSON support',
                    'Dynamic JSON objects',
                    'Custom serialization',
                    'Performance optimized',
                    'Extensive documentation'
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
                  {selectedLanguage === 'java' ? (selectedLibrary === 'gson' ? 'Gson' : 'Jackson') :
                   selectedLanguage === 'python' ? (selectedLibrary === 'json' ? 'JSON Module' : 'SimpleJSON') :
                   'Newtonsoft.Json'}
                </Badge>
                <Badge variant="outline">{selectedLanguage.toUpperCase()}</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(getJSONCode().join('\n'), 'JSON reading code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {getJSONCode().map((line, index) => (
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
                <p><strong className="text-blue-600 dark:text-blue-400">Hierarchical Parsing:</strong> Support for nested objects and arrays</p>
                <p><strong className="text-green-600 dark:text-green-400">Type Safety:</strong> Strong typing with custom object mapping</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Path Navigation:</strong> Dot notation for accessing nested values</p>
                <p><strong className="text-orange-600 dark:text-orange-400">Validation:</strong> Schema validation and error handling</p>
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
            Advanced JSON Features
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Advanced JSON operations for complex test scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Path Navigation',
                description: 'Access nested data using dot notation',
                icon: <GitBranch className="w-5 h-5" />,
                features: ['Dot notation', 'Array indexing', 'Deep traversal', 'Error handling']
              },
              {
                title: 'Schema Validation',
                description: 'Validate JSON against predefined schemas',
                icon: <CheckCircle className="w-5 h-5" />,
                features: ['Type checking', 'Required fields', 'Custom rules', 'Error reporting']
              },
              {
                title: 'Data Transformation',
                description: 'Transform and manipulate JSON data',
                icon: <RefreshCw className="w-5 h-5" />,
                features: ['Field mapping', 'Type conversion', 'Data filtering', 'Custom transformers']
              },
              {
                title: 'Search & Filter',
                description: 'Search and filter JSON data efficiently',
                icon: <Search className="w-5 h-5" />,
                features: ['Value search', 'Key filtering', 'Pattern matching', 'Recursive search']
              },
              {
                title: 'Comparison Tools',
                description: 'Compare JSON structures and values',
                icon: <Activity className="w-5 h-5" />,
                features: ['Structure diff', 'Value comparison', 'Deep analysis', 'Change tracking']
              },
              {
                title: 'Performance Optimization',
                description: 'Optimize JSON processing for large files',
                icon: <Zap className="w-5 h-5" />,
                features: ['Streaming parser', 'Memory efficiency', 'Lazy loading', 'Parallel processing']
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

      {/* JSON Structure Examples */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            JSON Structure Examples
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Common JSON structures for test data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Simple Object */}
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Simple Object</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "secure123",
  "active": true
}`}
              </pre>
            </div>

            {/* Nested Object */}
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Nested Object</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`{
  "user": {
    "username": "jane_smith",
    "profile": {
      "firstName": "Jane",
      "lastName": "Smith",
      "age": 30
    }
  }
}`}
              </pre>
            </div>

            {/* Array of Objects */}
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Array of Objects</h4>
              <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`{
  "users": [
    {
      "username": "user1",
      "role": "admin"
    },
    {
      "username": "user2",
      "role": "user"
    }
  ]
}`}
              </pre>
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
              Performance Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Optimize JSON reading for large files and complex structures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Streaming for Large Files</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Process JSON files incrementally to avoid memory issues with large datasets.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <RefreshCw className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Optimize Data Structures</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Choose appropriate data structures (objects vs arrays) based on access patterns.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Activity className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Lazy Loading Strategy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Load JSON data only when needed to reduce memory usage and improve startup time.
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
              Ensure high-quality JSON data for reliable testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <FileCode className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Consistent Schema Design</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use consistent naming conventions and data types across all JSON files.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Filter className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Validate Before Use</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implement schema validation to ensure data quality and consistency.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Lock className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Handle Sensitive Data</h4>
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
          <div>• <strong>Invalid JSON Syntax:</strong> Use JSON validators and check for missing commas, brackets, or quotes</div>
          <div>• <strong>Encoding Issues:</strong> Specify correct encoding (UTF-8) when reading JSON files</div>
          <div>• <strong>Type Mismatches:</strong> Handle type conversions gracefully with proper error handling</div>
          <div>• <strong>Large File Memory:</strong> Use streaming parsers for large JSON files</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
