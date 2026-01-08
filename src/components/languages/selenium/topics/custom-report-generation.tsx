'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  FileText,
  Code,
  Terminal,
  Settings,
  CheckCircle,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  Package,
  BarChart3,
  Download,
  Eye,
  Camera,
  Clock,
  TrendingUp,
  Activity
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function CustomReportGenerationComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'custom-report-generation',
    title: 'Custom Report Generation',
    explanation: 'Building tailored test reporting solutions',
    category: '23. Test Reporting & Documentation'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  // Tab state management
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'javascript'>('java');

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="Custom Report Generation"
        description="Master the art of building custom test reporting solutions tailored to your specific needs with advanced data visualization, analytics, and stakeholder communication"
        icon={Activity}
        category="Selenium · Test Reporting"
        colorTheme="emerald"
        badges={[
          { label: 'Custom Reports', variant: 'secondary' },
          { label: 'Data Analytics', variant: 'secondary' },
          { label: 'Visualization', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: What is Custom Report Generation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <FileText className="w-7 h-7" />
              What is Custom Report Generation?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the Custom Report Generation framework and its capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Custom Report Generation - Clear and Simple Explanation */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">📊 Understanding Custom Report Generation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                {/* What is Custom Report Generation */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    What is Custom Report Generation?
                  </h6>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    <strong>Custom Report Generation</strong> is the process of creating tailored test reporting solutions that provide complete control over data presentation, metrics, visualizations, and stakeholder communication beyond standard reporting frameworks.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>Key Benefit:</strong> Enables complete customization of test data presentation to meet specific business requirements, branding guidelines, and stakeholder needs.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    Core Features
                  </h6>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                      <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Tailored Visualizations
                      </h6>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Custom charts, graphs, and data visualizations specific to your metrics
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        Brand Integration
                      </h6>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Complete control over styling, colors, logos, and corporate branding
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Advanced Analytics
                      </h6>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Custom metrics, trend analysis, and predictive insights
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                      <h6 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        System Integration
                      </h6>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        Seamless integration with existing tools, databases, and APIs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Use Custom Report Generation */}
                <div>
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Why Use Custom Report Generation?
                  </h6>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Business-Specific Metrics:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Create reports that track metrics meaningful to your specific business processes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Stakeholder Communication:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Tailor reports for different audiences - technical teams, management, and clients
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Data Aggregation:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Combine data from multiple sources into unified, comprehensive reports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Setup and Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Settings className="w-7 h-7" />
              Setup and Configuration
            </CardTitle>
            <CardDescription className="text-base">
              Setting up Custom Report Generation in your Selenium project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Setup and Configuration</h5>
              
              {/* Language Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <button 
                    onClick={() => setActiveTab('java')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'java' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    ☕ Java (Maven)
                  </button>
                  <button 
                    onClick={() => setActiveTab('python')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'python' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    🐍 Python (pip)
                  </button>
                  <button 
                    onClick={() => setActiveTab('javascript')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'javascript' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    📜 JavaScript (npm)
                  </button>
                </div>
              </div>

              {/* Conditional Content Rendering */}
              {activeTab === 'java' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">☕</span> Java (Maven)
                  </h6>
                  
                  {/* Maven Dependency */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Add Reporting Dependencies:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2">&lt;!-- pom.xml --&gt;</div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">&lt;dependency&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;groupId&gt;</span>org.apache.poi<span className="text-purple-600 dark:text-purple-400">&lt;/groupId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;artifactId&gt;</span>poi-ooxml<span className="text-purple-600 dark:text-purple-400">&lt;/artifactId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;version&gt;</span>5.2.4<span className="text-purple-600 dark:text-purple-400">&lt;/version&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        <span className="text-purple-600 dark:text-purple-400">&lt;/dependency&gt;</span>
                      </div>
                    </div>
                  </div>

                  {/* Java Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Java Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// CustomReportGenerator.java
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.ITestResult;
import org.testng.Reporter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

public class CustomReportGenerator {
    
    private Workbook workbook;
    private Sheet summarySheet;
    private Sheet detailsSheet;
    
    public CustomReportGenerator() {
        workbook = new XSSFWorkbook();
        createSheets();
        setupHeaders();
    }
    
    public void generateReport(List<ITestResult> testResults, String outputPath) {
        try {
            populateTestData(testResults);
            generateCharts();
            saveReport(outputPath);
            System.out.println("Custom report generated: " + outputPath);
        } catch (Exception e) {
            System.err.println("Error generating report: " + e.getMessage());
        }
    }
    
    private void createSheets() {
        summarySheet = workbook.createSheet("Executive Summary");
        detailsSheet = workbook.createSheet("Detailed Results");
    }
    
    private void setupHeaders() {
        // Summary sheet headers
        Row summaryHeader = summarySheet.createRow(0);
        summaryHeader.createCell(0).setCellValue("Metric");
        summaryHeader.createCell(1).setCellValue("Value");
        summaryHeader.createCell(2).setCellValue("Status");
        
        // Details sheet headers
        Row detailsHeader = detailsSheet.createRow(0);
        detailsHeader.createCell(0).setCellValue("Test Name");
        detailsHeader.createCell(1).setCellValue("Status");
        detailsHeader.createCell(2).setCellValue("Duration");
        detailsHeader.createCell(3).setCellValue("Error Message");
    }
}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'python' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">🐍</span> Python (pip)
                  </h6>
                  
                  {/* pip Installation */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Install via pip:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2"># Install packages</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        pip install openpyxl pandas plotly jinja2
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># requirements.txt</div>
                      <div className="text-slate-800 dark:text-white">
                        openpyxl==3.1.2
pandas==2.1.3
plotly==5.17.0
jinja2==3.1.2
                      </div>
                    </div>
                  </div>

                  {/* Python Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Python Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# custom_report_generator.py
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from jinja2 import Template
from datetime import datetime
import json

class CustomReportGenerator:
    
    def __init__(self):
        self.test_data = []
        self.metrics = {}
        self.charts = {}
    
    def add_test_result(self, test_name, status, duration, error_msg=None):
        """Add test result to report data"""
        self.test_data.append({
            'test_name': test_name,
            'status': status,
            'duration': duration,
            'error_message': error_msg or '',
            'timestamp': datetime.now()
        })
    
    def generate_metrics(self):
        """Calculate test metrics"""
        df = pd.DataFrame(self.test_data)
        
        self.metrics = {
            'total_tests': len(df),
            'passed_tests': len(df[df['status'] == 'PASSED']),
            'failed_tests': len(df[df['status'] == 'FAILED']),
            'skipped_tests': len(df[df['status'] == 'SKIPPED']),
            'pass_rate': len(df[df['status'] == 'PASSED']) / len(df) * 100 if len(df) > 0 else 0,
            'avg_duration': df['duration'].mean(),
            'total_duration': df['duration'].sum()
        }
    
    def generate_charts(self):
        """Generate visualization charts"""
        df = pd.DataFrame(self.test_data)
        
        # Status distribution pie chart
        status_counts = df['status'].value_counts()
        self.charts['status_pie'] = px.pie(
            values=status_counts.values, 
            names=status_counts.index,
            title="Test Status Distribution"
        )
        
        # Duration trend line chart
        self.charts['duration_trend'] = px.line(
            df, x='timestamp', y='duration', 
            title="Test Execution Duration Trend"
        )
    
    def generate_html_report(self, output_path):
        """Generate HTML report with charts and metrics"""
        template = Template('''
        <!DOCTYPE html>
        <html>
        <head>
            <title>Custom Test Report</title>
            <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
            <style>{{ css_styles }}</style>
        </head>
        <body>
            <h1>Test Execution Report</h1>
            <div class="metrics">
                <h2>Summary Metrics</h2>
                {% for metric, value in metrics.items() %}
                <div class="metric">
                    <strong>{{ metric.replace('_', ' ').title() }}:</strong> {{ value }}
                </div>
                {% endfor %}
            </div>
            <div class="charts">
                <h2>Visualizations</h2>
                {% for chart_id, chart in charts.items() %}
                <div id="{{ chart_id }}"></div>
                <script>
                    Plotly.newPlot('{{ chart_id }}', {{ chart.to_json() }});
                </script>
                {% endfor %}
            </div>
        </body>
        </html>
        ''')
        
        html_content = template.render(
            metrics=self.metrics,
            charts=self.charts,
            css_styles=self.get_css_styles()
        )
        
        with open(output_path, 'w') as f:
            f.write(html_content)
    
    def get_css_styles(self):
        return '''
        body { font-family: Arial, sans-serif; margin: 20px; }
        .metrics { background: #f5f5f5; padding: 20px; margin: 20px 0; }
        .metric { margin: 10px 0; }
        .charts { margin: 20px 0; }
        .chart { margin: 20px 0; }
        '''}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'javascript' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">📜</span> JavaScript (npm)
                  </h6>
                  
                  {/* npm Installation */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Install via npm:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2"># Install packages</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        npm install xlsx chart.js puppeteer express
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># package.json</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        <span className="text-yellow-600 dark:text-yellow-400">"dependencies"</span>: {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"xlsx"</span>: <span className="text-orange-600 dark:text-orange-400">"^0.18.5"</span>,
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"chart.js"</span>: <span className="text-orange-600 dark:text-orange-400">"^4.4.0"</span>,
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"puppeteer"</span>: <span className="text-orange-600 dark:text-orange-400">"^21.5.2"</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        {'}'}
                      </div>
                    </div>
                  </div>

                  {/* JavaScript Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete JavaScript Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// customReportGenerator.js
const XLSX = require('xlsx');
const Chart = require('chart.js');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class CustomReportGenerator {
    
    constructor() {
        this.testResults = [];
        this.metrics = {};
        this.charts = {};
    }
    
    addTestResult(testName, status, duration, errorMessage = null) {
        this.testResults.push({
            testName,
            status,
            duration,
            errorMessage,
            timestamp: new Date()
        });
    }
    
    calculateMetrics() {
        const total = this.testResults.length;
        const passed = this.testResults.filter(r => r.status === 'PASSED').length;
        const failed = this.testResults.filter(r => r.status === 'FAILED').length;
        const skipped = this.testResults.filter(r => r.status === 'SKIPPED').length;
        
        this.metrics = {
            totalTests: total,
            passedTests: passed,
            failedTests: failed,
            skippedTests: skipped,
            passRate: total > 0 ? (passed / total * 100).toFixed(2) : 0,
            avgDuration: (this.testResults.reduce((sum, r) => sum + r.duration, 0) / total).toFixed(2),
            totalDuration: this.testResults.reduce((sum, r) => sum + r.duration, 0)
        };
    }
    
    generateExcelReport(outputPath) {
        // Create workbook
        const workbook = XLSX.utils.book_new();
        
        // Summary sheet
        const summaryData = [
            ['Metric', 'Value'],
            ['Total Tests', this.metrics.totalTests],
            ['Passed Tests', this.metrics.passedTests],
            ['Failed Tests', this.metrics.failedTests],
            ['Skipped Tests', this.metrics.skippedTests],
            ['Pass Rate (%)', this.metrics.passRate],
            ['Average Duration', this.metrics.avgDuration],
            ['Total Duration', this.metrics.totalDuration]
        ];
        
        const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');
        
        // Details sheet
        const detailsData = [
            ['Test Name', 'Status', 'Duration', 'Error Message', 'Timestamp']
        ];
        
        this.testResults.forEach(result => {
            detailsData.push([
                result.testName,
                result.status,
                result.duration,
                result.errorMessage || '',
                result.timestamp.toISOString()
            ]);
        });
        
        const detailsSheet = XLSX.utils.aoa_to_sheet(detailsData);
        XLSX.utils.book_append_sheet(workbook, detailsSheet, 'Details');
        
        // Save workbook
        XLSX.writeFile(workbook, outputPath);
        console.log(\`Excel report generated: \${outputPath}\`);
    }
    
    async generatePDFReport(htmlPath, outputPath) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        await page.goto(\`file://\${path.resolve(htmlPath)}\`);
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px'
            }
        });
        
        await browser.close();
        console.log(\`PDF report generated: \${outputPath}\`);
    }
    
    generateHTMLReport(outputPath) {
        const html = \`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Custom Test Report</title>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { background: #f8f9fa; padding: 20px; border-radius: 5px; }
                .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
                .metric { background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .charts { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px; margin: 20px 0; }
                .chart { background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Test Execution Report</h1>
                <p>Generated on \${new Date().toLocaleString()}</p>
            </div>
            
            <div class="metrics">
                <div class="metric">
                    <h3>Total Tests</h3>
                    <p style="font-size: 2em; color: #007bff;">\${this.metrics.totalTests}</p>
                </div>
                <div class="metric">
                    <h3>Pass Rate</h3>
                    <p style="font-size: 2em; color: #28a745;">\${this.metrics.passRate}%</p>
                </div>
                <div class="metric">
                    <h3>Failed Tests</h3>
                    <p style="font-size: 2em; color: #dc3545;">\${this.metrics.failedTests}</p>
                </div>
                <div class="metric">
                    <h3>Avg Duration</h3>
                    <p style="font-size: 2em; color: #6c757d;">\${this.metrics.avgDuration}s</p>
                </div>
            </div>
            
            <div class="charts">
                <div class="chart">
                    <h3>Status Distribution</h3>
                    <canvas id="statusChart"></canvas>
                </div>
                <div class="chart">
                    <h3>Test Timeline</h3>
                    <canvas id="timelineChart"></canvas>
                </div>
            </div>
            
            <script>
                // Status Chart
                const statusCtx = document.getElementById('statusChart').getContext('2d');
                new Chart(statusCtx, {
                    type: 'pie',
                    data: {
                        labels: ['Passed', 'Failed', 'Skipped'],
                        datasets: [{
                            data: [\${this.metrics.passedTests}, \${this.metrics.failedTests}, \${this.metrics.skippedTests}],
                            backgroundColor: ['#28a745', '#dc3545', '#ffc107']
                        }]
                    }
                });
                
                // Timeline Chart
                const timelineCtx = document.getElementById('timelineChart').getContext('2d');
                new Chart(timelineCtx, {
                    type: 'line',
                    data: {
                        labels: \${JSON.stringify(this.testResults.map(r => r.testName))},
                        datasets: [{
                            label: 'Duration (seconds)',
                            data: \${JSON.stringify(this.testResults.map(r => r.duration))},
                            borderColor: '#007bff',
                            backgroundColor: 'rgba(0, 123, 255, 0.1)'
                        }]
                    }
                });
            </script>
        </body>
        </html>
        \`;
        
        fs.writeFileSync(outputPath, html);
        console.log(\`HTML report generated: \${outputPath}\`);
    }
}

module.exports = CustomReportGenerator;`}
                    </pre>
                  </div>
                </div>
              )}

              {/* Additional Setup Options */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Additional Setup Options</h6>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li>• <strong>Database Integration:</strong> Connect to MySQL, PostgreSQL, or MongoDB for data storage</li>
                  <li>• <strong>API Integration:</strong> Fetch data from REST APIs or GraphQL endpoints</li>
                  <li>• <strong>Cloud Storage:</strong> Store reports in AWS S3, Google Cloud, or Azure Blob Storage</li>
                  <li>• <strong>Email Integration:</strong> Send reports automatically via SMTP or email services</li>
                </ul>
              </div>
            </div>

            {/* Configuration Flow Diagram */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Configuration Flow</h4>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-green-300 dark:border-green-600">
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-green-900 dark:text-green-100">Data Collection</h6>
                      <p className="text-sm text-green-800 dark:text-green-200">Gather test results from multiple sources and formats</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-blue-900 dark:text-blue-100">Data Processing</h6>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Transform and aggregate data into meaningful metrics</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-purple-900 dark:text-purple-100">Visualization</h6>
                      <p className="text-sm text-purple-800 dark:text-purple-200">Create charts, graphs, and custom visualizations</p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-orange-900 dark:text-orange-100">Report Generation</h6>
                      <p className="text-sm text-orange-800 dark:text-orange-200">Export to HTML, PDF, Excel, or send via email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Implementation Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Code className="w-7 h-7" />
              Implementation Examples
            </CardTitle>
            <CardDescription className="text-base">
              Practical implementation of custom reporting solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Base Report Generator Class</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// BaseReportGenerator.java
import org.testng.ITestResult;
import org.testng.ITestContext;
import java.util.*;
import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public abstract class BaseReportGenerator {
    
    protected List<TestResultData> testResults;
    protected ReportConfiguration config;
    protected Map<String, Object> metrics;
    protected List<ChartData> charts;
    
    public BaseReportGenerator(ReportConfiguration config) {
        this.config = config;
        this.testResults = new ArrayList<>();
        this.metrics = new HashMap<>();
        this.charts = new ArrayList<>();
    }
    
    // Abstract methods to be implemented by concrete classes
    public abstract void generateReport(String outputPath) throws ReportGenerationException;
    protected abstract void createSummarySection();
    protected abstract void createDetailedResultsSection();
    protected abstract void createChartsSection();
    
    // Common functionality
    public void addTestResult(ITestResult result) {
        TestResultData data = new TestResultData();
        data.setTestName(result.getMethod().getMethodName());
        data.setClassName(result.getTestClass().getName());
        data.setStatus(getStatusString(result.getStatus()));
        data.setDuration(result.getEndMillis() - result.getStartMillis());
        data.setTimestamp(LocalDateTime.now());
        data.setErrorMessage(result.getThrowable() != null ? 
                           result.getThrowable().getMessage() : null);
        
        testResults.add(data);
    }
    
    public void addTestContext(ITestContext context) {
        // Add suite-level information
        metrics.put("suiteName", context.getName());
        metrics.put("startDate", context.getStartDate());
        metrics.put("endDate", context.getEndDate());
        metrics.put("includedGroups", context.getIncludedGroups());
        metrics.put("excludedGroups", context.getExcludedGroups());
    }
    
    protected void calculateMetrics() {
        int totalTests = testResults.size();
        long passedTests = testResults.stream()
            .filter(t -> "PASSED".equals(t.getStatus()))
            .count();
        long failedTests = testResults.stream()
            .filter(t -> "FAILED".equals(t.getStatus()))
            .count();
        long skippedTests = testResults.stream()
            .filter(t -> "SKIPPED".equals(t.getStatus()))
            .count();
        
        double passRate = totalTests > 0 ? (double) passedTests / totalTests * 100 : 0;
        double avgDuration = testResults.stream()
            .mapToLong(TestResultData::getDuration)
            .average()
            .orElse(0.0);
        long totalDuration = testResults.stream()
            .mapToLong(TestResultData::getDuration)
            .sum();
        
        metrics.put("totalTests", totalTests);
        metrics.put("passedTests", passedTests);
        metrics.put("failedTests", failedTests);
        metrics.put("skippedTests", skippedTests);
        metrics.put("passRate", Math.round(passRate * 100.0) / 100.0);
        metrics.put("avgDuration", Math.round(avgDuration * 100.0) / 100.0);
        metrics.put("totalDuration", totalDuration);
    }
    
    protected void generateStatusDistributionChart() {
        Map<String, Long> statusCounts = new HashMap<>();
        statusCounts.put("PASSED", testResults.stream()
            .filter(t -> "PASSED".equals(t.getStatus())).count());
        statusCounts.put("FAILED", testResults.stream()
            .filter(t -> "FAILED".equals(t.getStatus())).count());
        statusCounts.put("SKIPPED", testResults.stream()
            .filter(t -> "SKIPPED".equals(t.getStatus())).count());
        
        ChartData pieChart = new ChartData();
        pieChart.setType("pie");
        pieChart.setTitle("Test Status Distribution");
        pieChart.setLabels(Arrays.asList("Passed", "Failed", "Skipped"));
        pieChart.setData(Arrays.asList(
            statusCounts.get("PASSED"),
            statusCounts.get("FAILED"),
            statusCounts.get("SKIPPED")
        ));
        pieChart.setColors(Arrays.asList("#28a745", "#dc3545", "#ffc107"));
        
        charts.add(pieChart);
    }
    
    protected void generateDurationTrendChart() {
        List<String> labels = new ArrayList<>();
        List<Long> data = new ArrayList<>();
        
        for (int i = 0; i < testResults.size(); i++) {
            TestResultData result = testResults.get(i);
            labels.add(result.getTestName());
            data.add(result.getDuration());
        }
        
        ChartData lineChart = new ChartData();
        lineChart.setType("line");
        lineChart.setTitle("Test Execution Duration Trend");
        lineChart.setLabels(labels);
        lineChart.setData(data);
        lineChart.setColors(Arrays.asList("#007bff"));
        
        charts.add(lineChart);
    }
    
    protected String getStatusString(int status) {
        switch (status) {
            case ITestResult.SUCCESS: return "PASSED";
            case ITestResult.FAILURE: return "FAILED";
            case ITestResult.SKIP: return "SKIPPED";
            default: return "UNKNOWN";
        }
    }
    
    protected String formatDuration(long millis) {
        long seconds = millis / 1000;
        long minutes = seconds / 60;
        seconds = seconds % 60;
        return String.format("%d min %d sec", minutes, seconds);
    }
    
    protected String getCurrentTimestamp() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}`}
                </pre>
              </div>
            </div>

            {/* Sample Report Implementation */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">HTML Report Implementation</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// HTMLReportGenerator.java
import org.testng.ITestResult;
import java.io.*;
import java.util.*;

public class HTMLReportGenerator extends BaseReportGenerator {
    
    private StringBuilder htmlContent;
    private String cssStyles;
    
    public HTMLReportGenerator(ReportConfiguration config) {
        super(config);
        this.cssStyles = loadDefaultStyles();
        this.htmlContent = new StringBuilder();
    }
    
    @Override
    public void generateReport(String outputPath) throws ReportGenerationException {
        try {
            calculateMetrics();
            generateStatusDistributionChart();
            generateDurationTrendChart();
            
            buildHTMLContent();
            saveReport(outputPath);
            
        } catch (Exception e) {
            throw new ReportGenerationException("Failed to generate HTML report", e);
        }
    }
    
    @Override
    protected void createSummarySection() {
        htmlContent.append("<div class='summary-section'>");
        htmlContent.append("<h2>Executive Summary</h2>");
        htmlContent.append("<div class='metrics-grid'>");
        
        // Total Tests
        htmlContent.append("<div class='metric-card'>");
        htmlContent.append("<h3>Total Tests</h3>");
        htmlContent.append("<p class='metric-value'>").append(metrics.get("totalTests")).append("</p>");
        htmlContent.append("</div>");
        
        // Pass Rate
        htmlContent.append("<div class='metric-card pass'>");
        htmlContent.append("<h3>Pass Rate</h3>");
        htmlContent.append("<p class='metric-value'>").append(metrics.get("passRate")).append("%</p>");
        htmlContent.append("</div>");
        
        // Failed Tests
        htmlContent.append("<div class='metric-card fail'>");
        htmlContent.append("<h3>Failed Tests</h3>");
        htmlContent.append("<p class='metric-value'>").append(metrics.get("failedTests")).append("</p>");
        htmlContent.append("</div>");
        
        // Average Duration
        htmlContent.append("<div class='metric-card duration'>");
        htmlContent.append("<h3>Avg Duration</h3>");
        htmlContent.append("<p class='metric-value'>").append(formatDuration((Long) metrics.get("avgDuration"))).append("</p>");
        htmlContent.append("</div>");
        
        htmlContent.append("</div>");
        htmlContent.append("</div>");
    }
    
    @Override
    protected void createDetailedResultsSection() {
        htmlContent.append("<div class='details-section'>");
        htmlContent.append("<h2>Detailed Test Results</h2>");
        
        // Group by status
        Map<String, List<TestResultData>> groupedResults = new HashMap<>();
        for (TestResultData result : testResults) {
            groupedResults.computeIfAbsent(result.getStatus(), k -> new ArrayList<>()).add(result);
        }
        
        // Passed tests
        if (groupedResults.containsKey("PASSED")) {
            htmlContent.append("<div class='test-group passed'>");
            htmlContent.append("<h3>✅ Passed Tests (").append(groupedResults.get("PASSED").size()).append(")</h3>");
            for (TestResultData result : groupedResults.get("PASSED")) {
                writeTestResult(result, "passed");
            }
            htmlContent.append("</div>");
        }
        
        // Failed tests
        if (groupedResults.containsKey("FAILED")) {
            htmlContent.append("<div class='test-group failed'>");
            htmlContent.append("<h3>❌ Failed Tests (").append(groupedResults.get("FAILED").size()).append(")</h3>");
            for (TestResultData result : groupedResults.get("FAILED")) {
                writeTestResult(result, "failed");
            }
            htmlContent.append("</div>");
        }
        
        // Skipped tests
        if (groupedResults.containsKey("SKIPPED")) {
            htmlContent.append("<div class='test-group skipped'>");
            htmlContent.append("<h3>⏭️ Skipped Tests (").append(groupedResults.get("SKIPPED").size()).append(")</h3>");
            for (TestResultData result : groupedResults.get("SKIPPED")) {
                writeTestResult(result, "skipped");
            }
            htmlContent.append("</div>");
        }
        
        htmlContent.append("</div>");
    }
    
    @Override
    protected void createChartsSection() {
        htmlContent.append("<div class='charts-section'>");
        htmlContent.append("<h2>Visual Analytics</h2>");
        htmlContent.append("<div class='charts-grid'>");
        
        for (ChartData chart : charts) {
            htmlContent.append("<div class='chart-container'>");
            htmlContent.append("<h3>").append(chart.getTitle()).append("</h3>");
            
            if ("pie".equals(chart.getType())) {
                createPieChart(chart);
            } else if ("line".equals(chart.getType())) {
                createLineChart(chart);
            }
            
            htmlContent.append("</div>");
        }
        
        htmlContent.append("</div>");
        htmlContent.append("</div>");
    }
    
    private void writeTestResult(TestResultData result, String status) {
        htmlContent.append("<div class='test-result ").append(status).append("'>");
        htmlContent.append("<div class='test-header'>");
        htmlContent.append("<h4>").append(result.getTestName()).append("</h4>");
        htmlContent.append("<span class='test-class'>").append(result.getClassName()).append("</span>");
        htmlContent.append("<span class='test-duration'>").append(formatDuration(result.getDuration())).append("</span>");
        htmlContent.append("</div>");
        
        if (result.getErrorMessage() != null && !result.getErrorMessage().isEmpty()) {
            htmlContent.append("<div class='error-details'>");
            htmlContent.append("<h5>Error Details:</h5>");
            htmlContent.append("<pre>").append(escapeHtml(result.getErrorMessage())).append("</pre>");
            htmlContent.append("</div>");
        }
        
        htmlContent.append("</div>");
    }
    
    private void createPieChart(ChartData chart) {
        htmlContent.append("<div class='chart'>");
        htmlContent.append("<canvas id='pieChart' width='400' height='400'></canvas>");
        htmlContent.append("<script>");
        htmlContent.append("var ctx = document.getElementById('pieChart').getContext('2d');");
        htmlContent.append("var data = {");
        htmlContent.append("  labels: ").append(chart.getLabels()).append(",");
        htmlContent.append("  datasets: [{");
        htmlContent.append("    data: ").append(chart.getData()).append(",");
        htmlContent.append("    backgroundColor: ").append(chart.getColors());
        htmlContent.append("  }]");
        htmlContent.append("};");
        htmlContent.append("new Chart(ctx, { type: 'pie', data: data });");
        htmlContent.append("</script>");
        htmlContent.append("</div>");
    }
    
    private void createLineChart(ChartData chart) {
        htmlContent.append("<div class='chart'>");
        htmlContent.append("<canvas id='lineChart' width='400' height='400'></canvas>");
        htmlContent.append("<script>");
        htmlContent.append("var ctx = document.getElementById('lineChart').getContext('2d');");
        htmlContent.append("var data = {");
        htmlContent.append("  labels: ").append(chart.getLabels()).append(",");
        htmlContent.append("  datasets: [{");
        htmlContent.append("    label: 'Duration (seconds)',");
        htmlContent.append("    data: ").append(chart.getData()).append(",");
        htmlContent.append("    borderColor: '#007bff',");
        htmlContent.append("    backgroundColor: 'rgba(0, 123, 255, 0.1)'");
        htmlContent.append("  }]");
        htmlContent.append("};");
        htmlContent.append("new Chart(ctx, { type: 'line', data: data });");
        htmlContent.append("</script>");
        htmlContent.append("</div>");
    }
    
    private void buildHTMLContent() {
        htmlContent.append("<!DOCTYPE html>");
        htmlContent.append("<html lang='en'>");
        htmlContent.append("<head>");
        htmlContent.append("<meta charset='UTF-8'>");
        htmlContent.append("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        htmlContent.append("<title>Custom Test Report</title>");
        htmlContent.append("<script src='https://cdn.jsdelivr.net/npm/chart.js'></script>");
        htmlContent.append("<style>").append(cssStyles).append("</style>");
        htmlContent.append("</head>");
        htmlContent.append("<body>");
        
        // Header
        htmlContent.append("<header class='report-header'>");
        htmlContent.append("<h1>Test Execution Report</h1>");
        htmlContent.append("<p>Generated on ").append(getCurrentTimestamp()).append("</p>");
        htmlContent.append("<p>Environment: ").append(config.getEnvironment()).append("</p>");
        htmlContent.append("</header>");
        
        // Main content
        htmlContent.append("<main class='report-content'>");
        createSummarySection();
        createChartsSection();
        createDetailedResultsSection();
        htmlContent.append("</main>");
        
        // Footer
        htmlContent.append("<footer class='report-footer'>");
        htmlContent.append("<p>Generated by Custom Report Generator</p>");
        htmlContent.append("</footer>");
        
        htmlContent.append("</body>");
        htmlContent.append("</html>");
    }
    
    private void saveReport(String outputPath) throws IOException {
        try (FileWriter writer = new FileWriter(outputPath)) {
            writer.write(htmlContent.toString());
        }
    }
    
    private String loadDefaultStyles() {
        return """
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        
        .report-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .report-header h1 {
            margin: 0;
            font-size: 2.5em;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .metric-card {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .metric-card:hover {
            transform: translateY(-5px);
        }
        
        .metric-card.pass { border-left: 5px solid #28a745; }
        .metric-card.fail { border-left: 5px solid #dc3545; }
        .metric-card.duration { border-left: 5px solid #007bff; }
        
        .metric-value {
            font-size: 2.5em;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .test-group {
            background: white;
            margin: 20px 0;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .test-group h3 {
            margin: 0;
            padding: 20px;
            font-size: 1.3em;
        }
        
        .test-group.passed h3 { background: #d4edda; color: #155724; }
        .test-group.failed h3 { background: #f8d7da; color: #721c24; }
        .test-group.skipped h3 { background: #fff3cd; color: #856404; }
        
        .test-result {
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .test-result:last-child {
            border-bottom: none;
        }
        
        .test-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .test-header h4 {
            margin: 0;
            font-size: 1.1em;
        }
        
        .test-class {
            color: #6c757d;
            font-size: 0.9em;
        }
        
        .test-duration {
            background: #e9ecef;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.9em;
        }
        
        .error-details {
            background: #f8d7da;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
        }
        
        .error-details pre {
            margin: 0;
            white-space: pre-wrap;
            font-family: 'Courier New', monospace;
        }
        
        .charts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .chart-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .chart-container h3 {
            margin-top: 0;
            text-align: center;
            color: #495057;
        }
        
        .report-footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            color: #6c757d;
            border-top: 1px solid #dee2e6;
        }
        """;
    }
    
    private String escapeHtml(String text) {
        if (text == null) return "";
        return text.replace("&", "&amp;")
                  .replace("<", "&lt;")
                  .replace(">", "&gt;")
                  .replace("\"", "&quot;")
                  .replace("'", "&#x27;");
    }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Advanced Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Star className="w-7 h-7" />
              Advanced Features
            </CardTitle>
            <CardDescription className="text-base">
              Exploring powerful custom reporting capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Database Integration */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Database Integration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// DatabaseReportStorage.java
import java.sql.*;
import java.util.*;

public class DatabaseReportStorage {
    
    private Connection connection;
    private String dbUrl;
    private String username;
    private String password;
    
    public DatabaseReportStorage(String dbUrl, String username, String password) {
        this.dbUrl = dbUrl;
        this.username = username;
        this.password = password;
    }
    
    public void connect() throws SQLException {
        connection = DriverManager.getConnection(dbUrl, username, password);
        createTablesIfNotExists();
    }
    
    private void createTablesIfNotExists() throws SQLException {
        String createTestResultsTable = """
            CREATE TABLE IF NOT EXISTS test_results (
                id INT AUTO_INCREMENT PRIMARY KEY,
                test_name VARCHAR(255) NOT NULL,
                class_name VARCHAR(255) NOT NULL,
                status VARCHAR(50) NOT NULL,
                duration BIGINT NOT NULL,
                error_message TEXT,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                suite_name VARCHAR(255),
                environment VARCHAR(100)
            )
            """;
        
        String createReportsTable = """
            CREATE TABLE IF NOT EXISTS reports (
                id INT AUTO_INCREMENT PRIMARY KEY,
                report_name VARCHAR(255) NOT NULL,
                report_type VARCHAR(100) NOT NULL,
                file_path VARCHAR(500),
                generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                total_tests INT,
                passed_tests INT,
                failed_tests INT,
                pass_rate DECIMAL(5,2)
            )
            """;
        
        try (Statement stmt = connection.createStatement()) {
            stmt.execute(createTestResultsTable);
            stmt.execute(createReportsTable);
        }
    }
    
    public void saveTestResult(TestResultData result) throws SQLException {
        String sql = """
            INSERT INTO test_results 
            (test_name, class_name, status, duration, error_message, suite_name, environment)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """;
        
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, result.getTestName());
            pstmt.setString(2, result.getClassName());
            pstmt.setString(3, result.getStatus());
            pstmt.setLong(4, result.getDuration());
            pstmt.setString(5, result.getErrorMessage());
            pstmt.setString(6, result.getSuiteName());
            pstmt.setString(7, result.getEnvironment());
            pstmt.executeUpdate();
        }
    }
    
    public List<TestResultData> getTestResultsByDateRange(Date startDate, Date endDate) 
            throws SQLException {
        String sql = """
            SELECT * FROM test_results 
            WHERE timestamp BETWEEN ? AND ?
            ORDER BY timestamp DESC
            """;
        
        List<TestResultData> results = new ArrayList<>();
        
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setDate(1, new java.sql.Date(startDate.getTime()));
            pstmt.setDate(2, new java.sql.Date(endDate.getTime()));
            
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                TestResultData result = new TestResultData();
                result.setTestName(rs.getString("test_name"));
                result.setClassName(rs.getString("class_name"));
                result.setStatus(rs.getString("status"));
                result.setDuration(rs.getLong("duration"));
                result.setErrorMessage(rs.getString("error_message"));
                result.setTimestamp(rs.getTimestamp("timestamp").toLocalDateTime());
                results.add(result);
            }
        }
        
        return results;
    }
    
    public Map<String, Object> getAggregatedMetrics() throws SQLException {
        String sql = """
            SELECT 
                COUNT(*) as total_tests,
                SUM(CASE WHEN status = 'PASSED' THEN 1 ELSE 0 END) as passed_tests,
                SUM(CASE WHEN status = 'FAILED' THEN 1 ELSE 0 END) as failed_tests,
                SUM(CASE WHEN status = 'SKIPPED' THEN 1 ELSE 0 END) as skipped_tests,
                AVG(duration) as avg_duration,
                SUM(duration) as total_duration
            FROM test_results
            WHERE timestamp >= DATE_SUB(NOW(), INTERVAL 30 DAY)
            """;
        
        Map<String, Object> metrics = new HashMap<>();
        
        try (Statement stmt = connection.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            if (rs.next()) {
                metrics.put("totalTests", rs.getInt("total_tests"));
                metrics.put("passedTests", rs.getInt("passed_tests"));
                metrics.put("failedTests", rs.getInt("failed_tests"));
                metrics.put("skippedTests", rs.getInt("skipped_tests"));
                metrics.put("avgDuration", rs.getDouble("avg_duration"));
                metrics.put("totalDuration", rs.getLong("total_duration"));
                
                int total = rs.getInt("total_tests");
                int passed = rs.getInt("passed_tests");
                double passRate = total > 0 ? (double) passed / total * 100 : 0;
                metrics.put("passRate", Math.round(passRate * 100.0) / 100.0);
            }
        }
        
        return metrics;
    }
    
    public void close() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
        }
    }
}`}
                  </pre>
                </div>
              </div>

              {/* Email Integration */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Email Integration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-teal-300 dark:border-teal-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// EmailReportSender.java
import javax.mail.*;
import javax.mail.internet.*;
import java.util.*;
import java.io.*;
import javax.activation.DataSource;
import javax.activation.FileDataSource;

public class EmailReportSender {
    
    private String smtpHost;
    private int smtpPort;
    private String username;
    private String password;
    private boolean useSSL;
    private boolean useTLS;
    
    public EmailReportSender(String smtpHost, int smtpPort, String username, 
                           String password, boolean useSSL, boolean useTLS) {
        this.smtpHost = smtpHost;
        this.smtpPort = smtpPort;
        this.username = username;
        this.password = password;
        this.useSSL = useSSL;
        this.useTLS = useTLS;
    }
    
    public void sendReportWithAttachments(String[] recipients, String subject, 
                                        String htmlContent, List<File> attachments) 
            throws MessagingException {
        
        Session session = createMailSession();
        Message message = new MimeMessage(session);
        
        // Set sender
        message.setFrom(new InternetAddress(username));
        
        // Set recipients
        for (String recipient : recipients) {
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
        }
        
        // Set subject
        message.setSubject(subject);
        
        // Create multipart message
        MimeMultipart multipart = new MimeMultipart();
        
        // Add HTML body
        MimeBodyPart htmlPart = new MimeBodyPart();
        htmlPart.setContent(htmlContent, "text/html");
        multipart.addBodyPart(htmlPart);
        
        // Add attachments
        for (File attachment : attachments) {
            MimeBodyPart attachmentPart = new MimeBodyPart();
            DataSource source = new FileDataSource(attachment);
            attachmentPart.setDataHandler(new DataHandler(source));
            attachmentPart.setFileName(attachment.getName());
            multipart.addBodyPart(attachmentPart);
        }
        
        // Set complete message content
        message.setContent(multipart);
        
        // Send message
        Transport.send(message);
        System.out.println("Report sent successfully to: " + Arrays.toString(recipients));
    }
    
    public void sendSummaryReport(String[] recipients, Map<String, Object> metrics, 
                                 List<File> reportFiles) throws MessagingException {
        
        String subject = String.format("Test Execution Summary - %d%% Pass Rate", 
                                       (Double) metrics.get("passRate"));
        
        String htmlContent = generateSummaryEmailHTML(metrics);
        
        sendReportWithAttachments(recipients, subject, htmlContent, reportFiles);
    }
    
    private Session createMailSession() {
        Properties props = new Properties();
        
        // SMTP settings
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.port", smtpPort);
        props.put("mail.smtp.auth", "true");
        
        // SSL/TLS settings
        if (useSSL) {
            props.put("mail.smtp.ssl.enable", "true");
        }
        if (useTLS) {
            props.put("mail.smtp.starttls.enable", "true");
        }
        
        // Create session with authentication
        return Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
    }
    
    private String generateSummaryEmailHTML(Map<String, Object> metrics) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { background: #f8f9fa; padding: 20px; border-radius: 5px; }
                    .metrics { display: flex; gap: 20px; margin: 20px 0; }
                    .metric { background: white; padding: 15px; border-radius: 5px; text-align: center; }
                    .metric-value { font-size: 2em; font-weight: bold; }
                    .pass { color: #28a745; }
                    .fail { color: #dc3545; }
                    .footer { margin-top: 30px; color: #6c757d; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🧪 Test Execution Summary</h1>
                    <p>Generated on %s</p>
                </div>
                
                <div class="metrics">
                    <div class="metric">
                        <h3>Total Tests</h3>
                        <p class="metric-value">%d</p>
                    </div>
                    <div class="metric pass">
                        <h3>Pass Rate</h3>
                        <p class="metric-value">%.1f%%</p>
                    </div>
                    <div class="metric fail">
                        <h3>Failed</h3>
                        <p class="metric-value">%d</p>
                    </div>
                    <div class="metric">
                        <h3>Duration</h3>
                        <p class="metric-value">%d min</p>
                    </div>
                </div>
                
                <h2>📊 Test Results Breakdown</h2>
                <ul>
                    <li>✅ Passed: <strong>%d</strong></li>
                    <li>❌ Failed: <strong>%d</strong></li>
                    <li>⏭️ Skipped: <strong>%d</strong></li>
                </ul>
                
                <h2>📎 Attachments</h2>
                <p>Detailed reports are attached to this email:</p>
                <ul>
                    <li>HTML Report - Interactive view with charts</li>
                    <li>Excel Report - Raw data for analysis</li>
                    <li>Screenshots - Failure evidence (if any)</li>
                </ul>
                
                <div class="footer">
                    <p>Generated by Custom Report Generator</p>
                    <p>For detailed analysis, please refer to the attached reports.</p>
                </div>
            </body>
            </html>
            """,
            new Date(),
            (Integer) metrics.get("totalTests"),
            (Double) metrics.get("passRate"),
            (Integer) metrics.get("failedTests"),
            (Long) metrics.get("totalDuration") / 60000,
            (Integer) metrics.get("passedTests"),
            (Integer) metrics.get("failedTests"),
            (Integer) metrics.get("skippedTests")
        );
    }
    
    public void sendFailureAlert(String[] recipients, List<TestResultData> failedTests) 
            throws MessagingException {
        
        String subject = String.format("🚨 Test Failure Alert - %d Tests Failed", failedTests.size());
        
        String htmlContent = generateFailureAlertHTML(failedTests);
        
        sendReportWithAttachments(recipients, subject, htmlContent, Collections.emptyList());
    }
    
    private String generateFailureAlertHTML(List<TestResultData> failedTests) {
        StringBuilder html = new StringBuilder();
        html.append("""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .alert { background: #f8d7da; color: #721c24; padding: 20px; border-radius: 5px; }
                    .failure { background: white; margin: 10px 0; padding: 15px; border-left: 4px solid #dc3545; }
                    .error { background: #f8f9fa; padding: 10px; border-radius: 3px; font-family: monospace; }
                </style>
            </head>
            <body>
                <div class="alert">
                    <h1>🚨 Test Failure Alert</h1>
                    <p>Immediate attention required - Multiple test failures detected</p>
                </div>
                
                <h2>Failed Tests Summary</h2>
            """);
        
        for (TestResultData test : failedTests) {
            html.append(String.format("""
                <div class="failure">
                    <h3>❌ %s</h3>
                    <p><strong>Class:</strong> %s</p>
                    <p><strong>Duration:</strong> %d ms</p>
                    <p><strong>Time:</strong> %s</p>
                    <div class="error"><strong>Error:</strong> %s</div>
                </div>
                """,
                test.getTestName(),
                test.getClassName(),
                test.getDuration(),
                test.getTimestamp(),
                test.getErrorMessage() != null ? test.getErrorMessage() : "No error message"
            ));
        }
        
        html.append("""
                <div style="margin-top: 30px;">
                    <p><strong>Recommended Actions:</strong></p>
                    <ol>
                        <li>Review the failed tests and identify root causes</li>
                        <li>Check application logs for additional context</li>
                        <li>Verify test environment stability</li>
                        <li>Update test data or assertions if needed</li>
                    </ol>
                </div>
            </body>
            </html>
            """);
        
        return html.toString();
    }
}`}
                  </pre>
                </div>
              </div>

              {/* API Integration */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">API Integration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// APIReportClient.java
import java.net.http.*;
import java.net.URI;
import java.time.Duration;
import java.util.*;
import com.fasterxml.jackson.databind.ObjectMapper;

public class APIReportClient {
    
    private HttpClient httpClient;
    private String baseUrl;
    private String apiKey;
    private ObjectMapper objectMapper;
    
    public APIReportClient(String baseUrl, String apiKey) {
        this.baseUrl = baseUrl.endsWith("/") ? baseUrl.substring(0, baseUrl.length() - 1) : baseUrl;
        this.apiKey = apiKey;
        this.httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(30))
            .build();
        this.objectMapper = new ObjectMapper();
    }
    
    public void uploadTestResults(List<TestResultData> results) throws APIException {
        try {
            String json = objectMapper.writeValueAsString(results);
            
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/api/test-results"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
            
            HttpResponse<String> response = httpClient.send(request, 
                HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() != 201) {
                throw new APIException("Failed to upload test results: " + response.statusCode());
            }
            
            System.out.println("Test results uploaded successfully");
            
        } catch (Exception e) {
            throw new APIException("Error uploading test results", e);
        }
    }
    
    public void generateAndSendReport(Map<String, Object> metrics, 
                                    List<ChartData> charts) throws APIException {
        try {
            Map<String, Object> reportData = new HashMap<>();
            reportData.put("metrics", metrics);
            reportData.put("charts", charts);
            reportData.put("timestamp", System.currentTimeMillis());
            reportData.put("environment", System.getProperty("test.environment", "unknown"));
            
            String json = objectMapper.writeValueAsString(reportData);
            
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/api/reports"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
            
            HttpResponse<String> response = httpClient.send(request, 
                HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() != 201) {
                throw new APIException("Failed to generate report: " + response.statusCode());
            }
            
            // Parse response to get report URLs
            Map<String, Object> responseData = objectMapper.readValue(response.body(), Map.class);
            String reportUrl = (String) responseData.get("reportUrl");
            String pdfUrl = (String) responseData.get("pdfUrl");
            
            System.out.println("Report generated successfully:");
            System.out.println("HTML: " + reportUrl);
            System.out.println("PDF: " + pdfUrl);
            
        } catch (Exception e) {
            throw new APIException("Error generating report", e);
        }
    }
    
    public List<TestResultData> getHistoricalResults(String testName, int days) 
            throws APIException {
        try {
            String url = String.format("%s/api/test-results/history?testName=%s&days=%d", 
                                     baseUrl, testName, days);
            
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Bearer " + apiKey)
                .GET()
                .build();
            
            HttpResponse<String> response = httpClient.send(request, 
                HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() != 200) {
                throw new APIException("Failed to fetch historical results: " + response.statusCode());
            }
            
            TestResultData[] results = objectMapper.readValue(response.body(), TestResultData[].class);
            return Arrays.asList(results);
            
        } catch (Exception e) {
            throw new APIException("Error fetching historical results", e);
        }
    }
    
    public void triggerWebhook(String webhookUrl, Map<String, Object> payload) 
            throws APIException {
        try {
            String json = objectMapper.writeValueAsString(payload);
            
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(webhookUrl))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
            
            HttpResponse<String> response = httpClient.send(request, 
                HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() >= 400) {
                throw new APIException("Webhook failed: " + response.statusCode());
            }
            
            System.out.println("Webhook triggered successfully");
            
        } catch (Exception e) {
            throw new APIException("Error triggering webhook", e);
        }
    }
    
    public void notifySlack(String webhookUrl, Map<String, Object> metrics) 
            throws APIException {
        Map<String, Object> slackPayload = new HashMap<>();
        slackPayload.put("text", "🧪 Test Execution Results");
        
        List<Map<String, Object>> attachments = new ArrayList<>();
        Map<String, Object> attachment = new HashMap<>();
        attachment.put("color", getSlackColor((Double) metrics.get("passRate")));
        
        List<Map<String, Object>> fields = new ArrayList<>();
        fields.add(Map.of(
            "title", "Total Tests",
            "value", metrics.get("totalTests").toString(),
            "short", true
        ));
        fields.add(Map.of(
            "title", "Pass Rate",
            "value", metrics.get("passRate") + "%",
            "short", true
        ));
        fields.add(Map.of(
            "title", "Failed Tests",
            "value", metrics.get("failedTests").toString(),
            "short", true
        ));
        fields.add(Map.of(
            "title", "Duration",
            "value", formatDuration((Long) metrics.get("totalDuration")),
            "short", true
        ));
        
        attachment.put("fields", fields);
        attachments.add(attachment);
        slackPayload.put("attachments", attachments);
        
        triggerWebhook(webhookUrl, slackPayload);
    }
    
    public void notifyTeams(String webhookUrl, Map<String, Object> metrics) 
            throws APIException {
        Map<String, Object> teamsPayload = new HashMap<>();
        teamsPayload.put("@type", "MessageCard");
        teamsPayload.put("@context", "http://schema.org/extensions");
        teamsPayload.put("themeColor", getTeamsColor((Double) metrics.get("passRate")));
        
        Map<String, Object> sections = new ArrayList<>();
        Map<String, Object> section = new HashMap<>();
        section.put("activityTitle", "🧪 Test Execution Results");
        section.put("activitySubtitle", "Generated on " + new Date());
        
        List<Map<String, Object>> facts = new ArrayList<>();
        facts.add(Map.of("name", "Total Tests", "value", metrics.get("totalTests").toString()));
        facts.add(Map.of("name", "Pass Rate", "value", metrics.get("passRate") + "%"));
        facts.add(Map.of("name", "Failed Tests", "value", metrics.get("failedTests").toString()));
        facts.add(Map.of("name", "Duration", "value", formatDuration((Long) metrics.get("totalDuration"))));
        
        section.put("facts", facts);
        sections.add(section);
        teamsPayload.put("sections", sections);
        
        triggerWebhook(webhookUrl, teamsPayload);
    }
    
    private String getSlackColor(double passRate) {
        if (passRate >= 90) return "good";
        if (passRate >= 70) return "warning";
        return "danger";
    }
    
    private String getTeamsColor(double passRate) {
        if (passRate >= 90) return "28a745";
        if (passRate >= 70) return "ffc107";
        return "dc3545";
    }
    
    private String formatDuration(long millis) {
        long minutes = millis / 60000;
        long seconds = (millis % 60000) / 1000;
        return String.format("%d min %d sec", minutes, seconds);
    }
    
    public static class APIException extends Exception {
        public APIException(String message) { super(message); }
        public APIException(String message, Throwable cause) { super(message, cause); }
    }
}`}
                  </pre>
                </div>
              </div>

              {/* Cloud Storage Integration */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Cloud Storage Integration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// CloudStorageManager.java
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.regions.Region;
import java.io.*;
import java.nio.file.Files;
import java.util.*;

public class CloudStorageManager {
    
    private S3Client s3Client;
    private String bucketName;
    private String reportPrefix;
    
    public CloudStorageManager(String region, String bucketName, String reportPrefix) {
        this.s3Client = S3Client.builder()
            .region(Region.of(region))
            .build();
        this.bucketName = bucketName;
        this.reportPrefix = reportPrefix.endsWith("/") ? reportPrefix : reportPrefix + "/";
    }
    
    public void uploadReport(File reportFile, String reportType) throws StorageException {
        try {
            String key = generateFileKey(reportFile.getName(), reportType);
            
            PutObjectRequest putRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(getContentType(reportFile.getName()))
                .metadata(Map.of(
                    "report-type", reportType,
                    "upload-time", String.valueOf(System.currentTimeMillis()),
                    "file-size", String.valueOf(reportFile.length())
                ))
                .build();
            
            s3Client.putObject(putRequest, RequestBody.fromFile(reportFile));
            
            String fileUrl = getFileUrl(key);
            System.out.println("Report uploaded successfully: " + fileUrl);
            
        } catch (Exception e) {
            throw new StorageException("Failed to upload report to S3", e);
        }
    }
    
    public void uploadReportWithVersions(File reportFile, String reportType) 
            throws StorageException {
        try {
            String key = generateFileKey(reportFile.getName(), reportType);
            
            PutObjectRequest putRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(getContentType(reportFile.getName()))
                .metadata(Map.of(
                    "report-type", reportType,
                    "upload-time", String.valueOf(System.currentTimeMillis()),
                    "file-size", String.valueOf(reportFile.length()),
                    "version", String.valueOf(System.currentTimeMillis())
                ))
                .build();
            
            s3Client.putObject(putRequest, RequestBody.fromFile(reportFile));
            
            // Generate presigned URL for sharing
            String presignedUrl = generatePresignedUrl(key, Duration.ofHours(24));
            System.out.println("Report uploaded with presigned URL: " + presignedUrl);
            
        } catch (Exception e) {
            throw new StorageException("Failed to upload report to S3", e);
        }
    }
    
    public List<String> listReports(String reportType, int maxResults) throws StorageException {
        try {
            String prefix = reportPrefix + reportType + "/";
            
            ListObjectsV2Request listRequest = ListObjectsV2Request.builder()
                .bucket(bucketName)
                .prefix(prefix)
                .maxKeys(maxResults)
                .build();
            
            ListObjectsV2Response response = s3Client.listObjectsV2(listRequest);
            
            List<String> reportUrls = new ArrayList<>();
            for (S3Object object : response.contents()) {
                String fileUrl = getFileUrl(object.key());
                reportUrls.add(fileUrl);
            }
            
            return reportUrls;
            
        } catch (Exception e) {
            throw new StorageException("Failed to list reports from S3", e);
        }
    }
    
    public void downloadReport(String reportKey, File destinationFile) throws StorageException {
        try {
            GetObjectRequest getRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(reportKey)
                .build();
            
            try (InputStream s3InputStream = s3Client.getObject(getRequest);
                 FileOutputStream fileOutputStream = new FileOutputStream(destinationFile)) {
                
                byte[] buffer = new byte[8192];
                int bytesRead;
                while ((bytesRead = s3InputStream.read(buffer)) != -1) {
                    fileOutputStream.write(buffer, 0, bytesRead);
                }
            }
            
            System.out.println("Report downloaded successfully: " + destinationFile.getAbsolutePath());
            
        } catch (Exception e) {
            throw new StorageException("Failed to download report from S3", e);
        }
    }
    
    public void archiveOldReports(int daysToKeep) throws StorageException {
        try {
            String archivePrefix = reportPrefix + "archive/";
            Date cutoffDate = new Date(System.currentTimeMillis() - (daysToKeep * 24L * 60L * 60L * 1000L));
            
            // List all reports
            ListObjectsV2Request listRequest = ListObjectsV2Request.builder()
                .bucket(bucketName)
                .prefix(reportPrefix)
                .build();
            
            ListObjectsV2Response response = s3Client.listObjectsV2(listRequest);
            
            int archivedCount = 0;
            for (S3Object object : response.contents()) {
                if (object.lastModified().before(cutoffDate) && 
                    !object.key().startsWith(archivePrefix)) {
                    
                    // Move to archive
                    String archiveKey = archivePrefix + object.key().substring(reportPrefix.length());
                    
                    CopyObjectRequest copyRequest = CopyObjectRequest.builder()
                        .sourceBucket(bucketName)
                        .sourceKey(object.key())
                        .destinationBucket(bucketName)
                        .destinationKey(archiveKey)
                        .build();
                    
                    s3Client.copyObject(copyRequest);
                    
                    // Delete original
                    DeleteObjectRequest deleteRequest = DeleteObjectRequest.builder()
                        .bucket(bucketName)
                        .key(object.key())
                        .build();
                    
                    s3Client.deleteObject(deleteRequest);
                    
                    archivedCount++;
                }
            }
            
            System.out.println("Archived " + archivedCount + " old reports");
            
        } catch (Exception e) {
            throw new StorageException("Failed to archive old reports", e);
        }
    }
    
    public void generateReportIndex() throws StorageException {
        try {
            List<String> allReports = listReports("", 1000);
            
            StringBuilder indexHtml = new StringBuilder();
            indexHtml.append("""
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Test Reports Index</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
                        .report-list { display: grid; gap: 10px; }
                        .report-item { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; }
                        .report-link { text-decoration: none; color: #007bff; font-weight: bold; }
                        .report-meta { color: #6c757d; font-size: 0.9em; margin-top: 5px; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📊 Test Reports Index</h1>
                        <p>Generated on """ + new Date() + """</p>
                    </div>
                    
                    <div class="report-list">
                """);
            
            for (String reportUrl : allReports) {
                String fileName = reportUrl.substring(reportUrl.lastIndexOf("/") + 1);
                indexHtml.append(String.format("""
                    <div class="report-item">
                        <a href="%s" class="report-link" target="_blank">%s</a>
                        <div class="report-meta">Available for download</div>
                    </div>
                    """, reportUrl, fileName));
            }
            
            indexHtml.append("""
                    </div>
                </body>
                </html>
                """);
            
            // Upload index file
            File indexFile = File.createTempFile("report-index", ".html");
            Files.write(indexFile.toPath(), indexHtml.toString().getBytes());
            
            uploadReport(indexFile, "index");
            indexFile.delete();
            
            System.out.println("Report index generated and uploaded");
            
        } catch (Exception e) {
            throw new StorageException("Failed to generate report index", e);
        }
    }
    
    private String generateFileKey(String fileName, String reportType) {
        String timestamp = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss").format(new Date());
        return String.format("%s%s/%s-%s", reportPrefix, reportType, timestamp, fileName);
    }
    
    private String getFileUrl(String key) {
        return String.format("https://%s.s3.amazonaws.com/%s", bucketName, key);
    }
    
    private String generatePresignedUrl(String key, Duration expiration) {
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        return s3Client.utilities()
            .getUrl(builder -> builder.request(getObjectRequest).expiration(expiration))
            .toExternalForm();
    }
    
    private String getContentType(String fileName) {
        if (fileName.endsWith(".html")) return "text/html";
        if (fileName.endsWith(".pdf")) return "application/pdf";
        if (fileName.endsWith(".xlsx")) return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        if (fileName.endsWith(".json")) return "application/json";
        return "application/octet-stream";
    }
    
    public static class StorageException extends Exception {
        public StorageException(String message) { super(message); }
        public StorageException(String message, Throwable cause) { super(message, cause); }
    }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Report Generation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Terminal className="w-7 h-7" />
              Report Generation
            </CardTitle>
            <CardDescription className="text-base">
              Commands and configurations for custom report generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Command Line Usage</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# Run custom report generator with Java
java -cp "target/classes:target/lib/*" com.example.reports.CustomReportGenerator \
  --input test-results.json \
  --output reports/ \
  --format html,pdf,excel \
  --template executive-summary

# Generate report with Python
python custom_report_generator.py \
  --input-dir test-results/ \
  --output-dir reports/ \
  --config config/report-config.json \
  --send-email

# Generate report with JavaScript
node generate-report.js \
  --input test-results.json \
  --output reports/ \
  --format html \
  --upload-s3 \
  --notify-slack

# Batch report generation
java -cp "target/classes:target/lib/*" com.example.reports.BatchReportGenerator \
  --batch-config batch-config.json \
  --parallel 4 \
  --archive-old 30

# Report with custom template
java -cp "target/classes:target/lib/*" com.example.reports.TemplateReportGenerator \
  --template templates/custom-report.html \
  --data test-results.json \
  --output reports/custom-report.html

# Generate dashboard report
python dashboard_generator.py \
  --input test-results/ \
  --output dashboard/ \
  --include-charts \
  --real-time

# Schedule automated report generation
# Using cron (Linux/Mac)
0 18 * * 1-5 /usr/bin/python3 /path/to/generate-reports.py --config production.json

# Using Windows Task Scheduler
schtasks /create /tn "DailyReports" /tr "python C:\reports\generate-reports.py" /sc daily /st 18:00`}
                </pre>
              </div>
            </div>

            {/* Configuration Examples */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Configuration Examples</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// report-config.json
{
  "report": {
    "name": "Selenium Test Report",
    "description": "Automated test execution results",
    "version": "1.0.0",
    "environment": "production",
    "timezone": "UTC"
  },
  "output": {
    "directory": "reports",
    "formats": ["html", "pdf", "excel"],
    "filename": "test-report-{timestamp}",
    "includeTimestamp": true
  },
  "data": {
    "sources": [
      {
        "type": "testng",
        "path": "test-output/testng-results.xml"
      },
      {
        "type": "json",
        "path": "test-results.json"
      },
      {
        "type": "database",
        "connection": "jdbc:mysql://localhost:3306/test_results",
        "query": "SELECT * FROM test_results WHERE date >= CURDATE()"
      }
    ],
    "filters": [
      {
        "field": "status",
        "values": ["PASSED", "FAILED", "SKIPPED"]
      },
      {
        "field": "duration",
        "operator": ">",
        "value": 1000
      }
    ]
  },
  "charts": [
    {
      "type": "pie",
      "title": "Test Status Distribution",
      "dataField": "status",
      "colors": ["#28a745", "#dc3545", "#ffc107"]
    },
    {
      "type": "line",
      "title": "Execution Duration Trend",
      "dataField": "duration",
      "timeField": "timestamp"
    },
    {
      "type": "bar",
      "title": "Tests by Module",
      "dataField": "module",
      "groupBy": "status"
    }
  ],
  "notifications": {
    "email": {
      "enabled": true,
      "smtp": {
        "host": "smtp.gmail.com",
        "port": 587,
        "username": "reports@company.com",
        "password": "app-password",
        "useTLS": true
      },
      "recipients": [
        "team@company.com",
        "manager@company.com"
      ],
      "conditions": {
        "failureRate": "> 10%",
        "totalFailures": "> 5"
      }
    },
    "slack": {
      "enabled": true,
      "webhook": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
      "channel": "#test-reports",
      "conditions": {
        "failureRate": "> 20%"
      }
    },
    "teams": {
      "enabled": true,
      "webhook": "https://outlook.office.com/webhook/...",
      "conditions": {
        "totalFailures": "> 10"
      }
    }
  },
  "storage": {
    "s3": {
      "enabled": true,
      "bucket": "test-reports",
      "region": "us-east-1",
      "prefix": "reports/",
      "archiveAfterDays": 30
    },
    "database": {
      "enabled": true,
      "connection": "jdbc:mysql://localhost:3306/test_reports",
      "table": "report_history"
    }
  },
  "customization": {
    "logo": "assets/company-logo.png",
    "theme": {
      "primaryColor": "#007bff",
      "secondaryColor": "#6c757d",
      "successColor": "#28a745",
      "errorColor": "#dc3545",
      "warningColor": "#ffc107"
    },
    "footer": {
      "text": "Generated by Custom Report Generator",
      "includeTimestamp": true,
      "includeVersion": true
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-7 h-7" />
              Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Guidelines for effective custom report generation implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Best Practices ✅
              </h4>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Design reports with stakeholder needs in mind</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper data validation and error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use responsive design for mobile compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include interactive elements and visualizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement automated report scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Provide multiple export formats (HTML, PDF, Excel)</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-700">
              <h4 className="font-bold text-lg text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Common Pitfalls ❌
              </h4>
              <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't overload reports with too much data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid ignoring performance and memory constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't hard-code configurations and credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid neglecting security and data privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to implement proper logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid creating reports without clear objectives</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Topic Navigation */}
        <TopicNavigation currentTopic={currentTopic} language={language} />
      </div>
    </div>
  );
}
