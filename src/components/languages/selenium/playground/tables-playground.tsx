'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Search, SortAsc, SortDesc, Filter, Table as TableIcon } from 'lucide-react';

interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  salary: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

export function TablesPlayground() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const initialData: TableRow[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', department: 'Engineering', salary: '$80,000', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', department: 'Design', salary: '$75,000', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', department: 'Management', salary: '$90,000', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Tester', department: 'QA', salary: '$70,000', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Developer', department: 'Engineering', salary: '$85,000', status: 'Pending' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Analyst', department: 'Data', salary: '$78,000', status: 'Active' },
    { id: 7, name: 'Edward Norton', email: 'edward@example.com', role: 'Admin', department: 'IT', salary: '$65,000', status: 'Inactive' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'Developer', department: 'Engineering', salary: '$82,000', status: 'Active' },
  ];

  const [data, setData] = useState(initialData);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = initialData.filter(row =>
      Object.values(row).some(val => 
        val.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setData(filtered);
  };

  const handleSort = () => {
    const sorted = [...data].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });
    setData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilter = (status: string) => {
    setFilterStatus(status);
    if (status === 'all') {
      setData(initialData);
    } else {
      const filtered = initialData.filter(row => row.status === status);
      setData(filtered);
    }
  };

  const handleRowClick = (id: number) => {
    setSelectedRow(id === selectedRow ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Tables & Data Grids</h3>
        <p className="text-sm text-muted-foreground">
          Practice table interactions including searching, sorting, filtering, and selecting rows
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interactive Table */}
        <Card className="p-4">
          <Label className="mb-4 block flex items-center gap-2">
            <TableIcon className="w-4 h-4" />
            Employee Data Table
          </Label>

          {/* Controls */}
          <div className="space-y-3 mb-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search table..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleSort} variant="outline" size="sm">
                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilter('all')}
              >
                All
              </Button>
              <Button
                variant={filterStatus === 'Active' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilter('Active')}
              >
                Active
              </Button>
              <Button
                variant={filterStatus === 'Inactive' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilter('Inactive')}
              >
                Inactive
              </Button>
              <Button
                variant={filterStatus === 'Pending' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilter('Pending')}
              >
                Pending
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-lg overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    className={`cursor-pointer transition-colors ${
                      selectedRow === row.id ? 'bg-primary/10' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => handleRowClick(row.id)}
                  >
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell className="text-sm">{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>{row.salary}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          row.status === 'Active' ? 'default' :
                          row.status === 'Inactive' ? 'secondary' :
                          'outline'
                        }
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {selectedRow && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Selected Row ID: {selectedRow}
              </p>
            </div>
          )}
        </Card>

        {/* Code Examples & Tips */}
        <div className="space-y-4">
          <Card className="p-4 space-y-3">
            <Label>Selenium Code Examples</Label>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">Get Table Data</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Get table rows
table = driver.find_element(By.TAG_NAME, "table")
rows = table.find_elements(By.TAG_NAME, "tr")

# Get specific cell data
first_row = rows[1]  # Skip header
cells = first_row.find_elements(By.TAG_NAME, "td")
print(cells[1].text)  # Name column`}</code>
              </pre>
              
              <div className="text-xs font-semibold text-muted-foreground">Click Table Row</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Click on a specific row
target_row = driver.find_element(By.XPATH, "//tr[td='John Doe']")
target_row.click()

# Or click by index
rows = driver.find_elements(By.TAG_NAME, "tr")
rows[2].click()  # Click third row`}</code>
              </pre>
              
              <div className="text-xs font-semibold text-muted-foreground">Handle Table Pagination</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Navigate through pages
next_button = driver.find_element(By.ID, "next-page")
while next_button.is_enabled():
    next_button.click()
    # Process current page data
    # ...
    next_button = driver.find_element(By.ID, "next-page")`}</code>
              </pre>
              
              <div className="text-xs font-semibold text-muted-foreground">Dynamic Table Handling</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Wait for table to load
wait = WebDriverWait(driver, 10)
table = wait.until(
    EC.presence_of_element_located((By.ID, "data-table"))
)

# Handle dynamic content
wait.until(
    EC.presence_of_element_located((By.XPATH, "//tr[td='Dynamic Data']"))
)`}</code>
              </pre>
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <Label>Table Testing Strategies</Label>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">1</Badge>
                <span>Use XPath expressions for complex table navigation</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">2</Badge>
                <span>Wait for table data to load before accessing elements</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">3</Badge>
                <span>Handle dynamic tables with explicit waits</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">4</Badge>
                <span>Test sorting, filtering, and pagination functionality</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">5</Badge>
                <span>Validate table data integrity after operations</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <Label>Common Table Locators</Label>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 bg-muted rounded">
                <div className="font-semibold">By Tag Name:</div>
                <div>table, tr, td, th, thead, tbody</div>
              </div>
              <div className="p-2 bg-muted rounded">
                <div className="font-semibold">By XPath:</div>
                <div>//table//tr[2]//td[3]</div>
                <div>//td[text()='John Doe']</div>
                <div>//th[contains(text(), 'Name')]</div>
              </div>
              <div className="p-2 bg-muted rounded">
                <div className="font-semibold">By CSS Selector:</div>
                <div>table tr:nth-child(2) td:nth-child(3)</div>
                <div>.table-row.selected</div>
                <div>td[data-column='salary']</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
