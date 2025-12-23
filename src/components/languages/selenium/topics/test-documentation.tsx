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
  Star,
  Package,
  BarChart3,
  Download,
  Eye,
  Camera,
  Clock,
  TrendingUp,
  Activity,
  BookOpen
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function TestDocumentationComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'test-documentation',
    title: 'Test Documentation',
    explanation: 'Creating comprehensive test documentation and knowledge bases',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20">
      <PageHeader
        title="Test Documentation"
        description="Master the art of creating comprehensive test documentation that serves as living knowledge, enabling team collaboration, knowledge transfer, and long-term test maintenance"
        icon={BookOpen}
        colorTheme="amber"
        badges={[
          { label: 'Documentation', variant: 'secondary' },
          { label: 'Knowledge Base', variant: 'secondary' },
          { label: 'Living Documentation', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: What is Test Documentation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <FileText className="w-7 h-7" />
              What is Test Documentation?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the Test Documentation framework and its capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">📊 Understanding Test Documentation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    What is Test Documentation?
                  </h6>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    <strong>Test Documentation</strong> is the practice of creating comprehensive, living documentation that explains test purpose, design, execution, and maintenance. It transforms automated tests from black boxes into transparent knowledge assets.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>Key Benefit:</strong> Enables knowledge sharing, faster onboarding, and long-term test sustainability through clear, accessible documentation.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    Core Features
                  </h6>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                      <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Living Documentation
                      </h6>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Documentation that evolves with your tests and stays current
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        Knowledge Transfer
                      </h6>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Easy onboarding and knowledge sharing across team members
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Test Maintenance
                      </h6>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Simplified debugging and maintenance with clear documentation
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                      <h6 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Collaboration
                      </h6>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        Team collaboration through shared knowledge and standards
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Why Use Test Documentation?
                  </h6>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Knowledge Preservation:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Capture test knowledge and prevent loss when team members leave
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Faster Debugging:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Understand test failures quickly with clear documentation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Quality Improvement:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Better test design through documented requirements and scenarios
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
              Setting up Test Documentation in your Selenium project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Setup and Configuration</h5>
              
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

              {activeTab === 'java' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">☕</span> Java (Maven)
                  </h6>
                  
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Add Documentation Dependencies:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2">&lt;!-- pom.xml --&gt;</div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">&lt;dependency&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;groupId&gt;</span>org.asciidoctor<span className="text-purple-600 dark:text-purple-400">&lt;/groupId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;artifactId&gt;</span>asciidoctorj<span className="text-purple-600 dark:text-purple-400">&lt;/artifactId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;version&gt;</span>2.5.10<span className="text-purple-600 dark:text-purple-400">&lt;/version&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        <span className="text-purple-600 dark:text-purple-400">&lt;/dependency&gt;</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Java Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// TestDocumentationGenerator.java
import org.asciidoctor.Asciidoctor;
import org.asciidoctor.Options;
import java.io.*;

public class TestDocumentationGenerator {
    
    private Asciidoctor asciidoctor;
    private String outputDirectory;
    
    public TestDocumentationGenerator(String outputDirectory) {
        this.asciidoctor = Asciidoctor.Factory.create();
        this.outputDirectory = outputDirectory;
    }
    
    public void generateDocumentation(String testName, String testDescription, 
                                   String[] steps, String[] expectedResults) {
        
        String documentation = String.format("""
            = Test Documentation: %s
            
            == Overview
            %s
            
            == Test Steps
            %s
            
            == Expected Results
            %s
            
            == Automation Notes
            This test is automated using Selenium WebDriver.
            
            == Maintenance Information
            * Last Updated: %s
            * Test ID: TEST-%s
            * Priority: High
            """,
            testName,
            testDescription,
            formatSteps(steps),
            formatExpectedResults(expectedResults),
            new Date(),
            testName.hashCode()
        );
        
        saveDocumentation(testName, documentation);
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
                  
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Install via pip:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2"># Install packages</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        pip install sphinx markdown jinja2
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># requirements.txt</div>
                      <div className="text-slate-800 dark:text-white">
                        sphinx==7.2.6
markdown==3.5.1
jinja2==3.1.2
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Python Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# test_documentation_generator.py
from jinja2 import Template
import markdown
from datetime import datetime
import os

class TestDocumentationGenerator:
    
    def __init__(self, output_dir="docs"):
        self.output_dir = output_dir
        self.ensure_output_dir()
    
    def generate_test_doc(self, test_name, description, steps, expected_results):
        """Generate comprehensive test documentation"""
        
        template = Template('''
# Test Documentation: {{ test_name }}

## Overview
{{ description }}

## Test Steps
{% for step in steps %}
{{ loop.index }}. {{ step }}
{% endfor %}

## Expected Results
{% for result in expected_results %}
- {{ result }}
{% endfor %}

## Automation Information
- **Tool**: Selenium WebDriver
- **Language**: Python
- **Generated**: {{ timestamp }}

## Maintenance Notes
- Test ID: {{ test_id }}
- Priority: High
- Review quarterly
        ''')
        
        content = template.render(
            test_name=test_name,
            description=description,
            steps=steps,
            expected_results=expected_results,
            timestamp=datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            test_id=f"TEST-{abs(hash(test_name))}"
        )
        
        self.save_documentation(test_name, content)
    
    def ensure_output_dir(self):
        if not os.path.exists(self.output_dir):
            os.makedirs(self.output_dir)
    
    def save_documentation(self, test_name, content):
        filename = f"{self.output_dir}/{test_name.lower().replace(' ', '_')}.md"
        with open(filename, 'w') as f:
            f.write(content)
        print(f"Documentation saved: {filename}")
}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'javascript' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">📜</span> JavaScript (npm)
                  </h6>
                  
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Install via npm:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2"># Install packages</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        npm install marked jsdoc handlebars
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># package.json</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        <span className="text-yellow-600 dark:text-yellow-400">"dependencies"</span>: {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"marked"</span>: <span className="text-orange-600 dark:text-orange-400">"^9.1.6"</span>,
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"jsdoc"</span>: <span className="text-orange-600 dark:text-orange-400">"^4.0.2"</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        {'}'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete JavaScript Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// testDocumentationGenerator.js
const marked = require('marked');
const fs = require('fs');
const path = require('path');

class TestDocumentationGenerator {
    
    constructor(outputDir = './docs') {
        this.outputDir = outputDir;
        this.ensureOutputDir();
    }
    
    generateTestDoc(testName, description, steps, expectedResults) {
        // Create template string with test information
        const template = this.createTemplate(testName, description, steps, expectedResults);
        
        const htmlContent = marked(template);
        this.saveDocumentation(testName, htmlContent, 'html');
        this.saveDocumentation(testName, template, 'md');
    }
    
    createTemplate(testName, description, steps, expectedResults) {
        return \`# Test Documentation: \${testName}

## Overview
\${description}

## Test Steps
\${this.formatSteps(steps)}

## Expected Results
\${this.formatResults(expectedResults)}

## Automation Information
- **Tool**: Selenium WebDriver
- **Language**: JavaScript
- **Generated**: \${new Date().toLocaleString()}

## Maintenance Notes
- Test ID: TEST-\${this.hashCode(testName)}
- Priority: High
- Review quarterly
        \`;
    }
    
    formatSteps(steps) {
        return steps.map((step, index) => \`\${index + 1}. \${step}\`).join('\\\\n');
    }
    
    formatResults(results) {
        return results.map(result => \`- \${result}\`).join('\\\\n');
    }
    
    ensureOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
        }
    }
    
    saveDocumentation(testName, content, format) {
        const filename = path.join(
            this.outputDir, 
            \`\${testName.toLowerCase().replace(/\\\\s+/g, '_')}.\${format}\`
        );
        fs.writeFileSync(filename, content);
        console.log(\`Documentation saved: \${filename}\`);
    }
    
    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }
}

module.exports = TestDocumentationGenerator;`}
                    </pre>
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Additional Setup Options</h6>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li>• <strong>Git Integration:</strong> Store documentation in version control</li>
                  <li>• <strong>Wiki Platforms:</strong> Use Confluence, GitHub Wiki, or Notion</li>
                  <li>• <strong>API Documentation:</strong> Generate docs from code comments</li>
                  <li>• <strong>Living Docs:</strong> Auto-generate from test metadata</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Documentation Workflow</h4>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-green-300 dark:border-green-600">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-green-900 dark:text-green-100">Test Design</h6>
                      <p className="text-sm text-green-800 dark:text-green-200">Document test requirements and scenarios</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-blue-900 dark:text-blue-100">Implementation</h6>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Write tests with inline documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-purple-900 dark:text-purple-100">Generation</h6>
                      <p className="text-sm text-purple-800 dark:text-purple-200">Auto-generate comprehensive documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-orange-900 dark:text-orange-100">Maintenance</h6>
                      <p className="text-sm text-orange-800 dark:text-orange-200">Keep docs updated with test changes</p>
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
              Practical implementation of test documentation solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Base Documentation Generator</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// BaseDocumentationGenerator.java
import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

public abstract class BaseDocumentationGenerator {
    
    protected String outputDirectory;
    protected String projectName;
    protected Map<String, Object> metadata;
    
    public BaseDocumentationGenerator(String outputDirectory, String projectName) {
        this.outputDirectory = outputDirectory;
        this.projectName = projectName;
        this.metadata = new HashMap<>();
        initializeMetadata();
    }
    
    // Abstract methods for different formats
    public abstract void generateDocumentation(TestDocumentation doc) throws DocumentationException;
    protected abstract String formatContent(TestDocumentation doc);
    protected abstract String getFileExtension();
    
    // Common functionality
    public void addTestDocumentation(TestDocumentation doc) {
        doc.setProjectName(projectName);
        doc.setGeneratedAt(LocalDateTime.now());
        doc.setTestId(generateTestId(doc.getTestName()));
    }
    
    public void generateBatchDocumentation(List<TestDocumentation> docs) 
            throws DocumentationException {
        
        // Generate individual test documentation
        for (TestDocumentation doc : docs) {
            generateDocumentation(doc);
        }
        
        // Generate summary documentation
        generateSummaryDocumentation(docs);
        
        // Generate index documentation
        generateIndexDocumentation(docs);
    }
    
    protected void generateSummaryDocumentation(List<TestDocumentation> docs) 
            throws DocumentationException {
        
        TestDocumentation summary = new TestDocumentation();
        summary.setTestName("Test Suite Summary");
        summary.setDescription("Comprehensive overview of all test documentation");
        
        StringBuilder content = new StringBuilder();
        content.append("# Test Suite Summary\\n\\n");
        content.append("## Project: ").append(projectName).append("\\n\\n");
        content.append("Generated on: ").append(LocalDateTime.now()).append("\\n\\n");
        
        // Statistics
        content.append("## Statistics\\n\\n");
        content.append("- Total Tests: ").append(docs.size()).append("\\n");
        
        long automatedCount = docs.stream().filter(TestDocumentation::isAutomated).count();
        content.append("- Automated Tests: ").append(automatedCount).append("\\n");
        
        long manualCount = docs.size() - automatedCount;
        content.append("- Manual Tests: ").append(manualCount).append("\\n");
        
        // Test categories
        Map<String, Long> categoryCount = docs.stream()
            .collect(Collectors.groupingBy(
                TestDocumentation::getCategory, 
                Collectors.counting()
            ));
        
        content.append("\\n## Test Categories\\n\\n");
        categoryCount.forEach((category, count) -> 
            content.append("- ").append(category).append(": ").append(count).append("\\n")
        );
        
        // Test list
        content.append("\\n## Test List\\n\\n");
        for (TestDocumentation doc : docs) {
            content.append("- [").append(doc.getTestName()).append("](")
                  .append(doc.getTestName().toLowerCase().replace(" ", "_"))
                  .append(getFileExtension()).append(")\\n");
        }
        
        summary.setContent(content.toString());
        generateDocumentation(summary);
    }
    
    protected void generateIndexDocumentation(List<TestDocumentation> docs) 
            throws DocumentationException {
        
        StringBuilder indexContent = new StringBuilder();
        indexContent.append("# Test Documentation Index\\n\\n");
        indexContent.append("Welcome to the ").append(projectName)
                   .append(" test documentation.\\n\\n");
        
        // Navigation sections
        indexContent.append("## Quick Navigation\\n\\n");
        indexContent.append("- [Test Suite Summary](test_suite_summary").append(getFileExtension()).append(")\\n");
        indexContent.append("- [Test Categories](#categories)\\n");
        indexContent.append("- [All Tests](#all-tests)\\n\\n");
        
        // Categories
        indexContent.append("## Categories\\n\\n");
        Map<String, List<TestDocumentation>> categorizedDocs = docs.stream()
            .collect(Collectors.groupingBy(TestDocumentation::getCategory));
        
        for (Map.Entry<String, List<TestDocumentation>> entry : categorizedDocs.entrySet()) {
            String category = entry.getKey();
            List<TestDocumentation> categoryDocs = entry.getValue();
            
            indexContent.append("### ").append(category).append(" (").append(categoryDocs.size()).append(")\\n\\n");
            for (TestDocumentation doc : categoryDocs) {
                indexContent.append("- [").append(doc.getTestName()).append("](")
                          .append(doc.getTestName().toLowerCase().replace(" ", "_"))
                          .append(getFileExtension()).append(") - ")
                          .append(doc.getDescription()).append("\\n");
            }
            indexContent.append("\\n");
        }
        
        // Save index file
        saveToFile("index" + getFileExtension(), indexContent.toString());
    }
    
    protected void saveToFile(String filename, String content) throws DocumentationException {
        try {
            File outputDir = new File(outputDirectory);
            if (!outputDir.exists()) {
                outputDir.mkdirs();
            }
            
            File outputFile = new File(outputDir, filename);
            try (FileWriter writer = new FileWriter(outputFile)) {
                writer.write(content);
            }
            
            System.out.println("Documentation saved: " + outputFile.getAbsolutePath());
            
        } catch (IOException e) {
            throw new DocumentationException("Failed to save documentation: " + filename, e);
        }
    }
    
    protected String generateTestId(String testName) {
        return "TEST-" + Math.abs(testName.hashCode());
    }
    
    protected void initializeMetadata() {
        metadata.put("projectName", projectName);
        metadata.put("generatedBy", "BaseDocumentationGenerator");
        metadata.put("version", "1.0.0");
        metadata.put("format", getFileExtension().replace(".", ""));
    }
    
    protected String getCurrentTimestamp() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
    
    // Data class for test documentation
    public static class TestDocumentation {
        private String testName;
        private String description;
        private String content;
        private List<String> steps;
        private List<String> expectedResults;
        private String category;
        private boolean automated;
        private String projectId;
        private String testId;
        private LocalDateTime generatedAt;
        private Map<String, Object> customFields;
        
        // Constructors, getters, and setters
        public TestDocumentation() {
            this.steps = new ArrayList<>();
            this.expectedResults = new ArrayList<>();
            this.customFields = new HashMap<>();
            this.automated = true;
        }
        
        public TestDocumentation(String testName, String description) {
            this();
            this.testName = testName;
            this.description = description;
        }
        
        // Getters and setters for all fields
        public String getTestName() { return testName; }
        public void setTestName(String testName) { this.testName = testName; }
        
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        
        public String getContent() { return content; }
        public void setContent(String content) { this.content = content; }
        
        public List<String> getSteps() { return steps; }
        public void setSteps(List<String> steps) { this.steps = steps; }
        
        public List<String> getExpectedResults() { return expectedResults; }
        public void setExpectedResults(List<String> expectedResults) { this.expectedResults = expectedResults; }
        
        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        
        public boolean isAutomated() { return automated; }
        public void setAutomated(boolean automated) { this.automated = automated; }
        
        public String getProjectName() { return projectId; }
        public void setProjectName(String projectName) { this.projectId = projectName; }
        
        public String getTestId() { return testId; }
        public void setTestId(String testId) { this.testId = testId; }
        
        public LocalDateTime getGeneratedAt() { return generatedAt; }
        public void setGeneratedAt(LocalDateTime generatedAt) { this.generatedAt = generatedAt; }
        
        public Map<String, Object> getCustomFields() { return customFields; }
        public void setCustomFields(Map<String, Object> customFields) { this.customFields = customFields; }
    }
    
    public static class DocumentationException extends Exception {
        public DocumentationException(String message) { super(message); }
        public DocumentationException(String message, Throwable cause) { super(message, cause); }
    }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-7 h-7" />
              Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Guidelines for effective test documentation implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Best Practices ✅
              </h4>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Write documentation from the user's perspective</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep documentation simple and clear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include visual examples and screenshots</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Update documentation with code changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use consistent formatting and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include troubleshooting information</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-700">
              <h4 className="font-bold text-lg text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Common Pitfalls ❌
              </h4>
              <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't write overly technical documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid outdated or stale documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore different audience needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid inconsistent terminology</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to include examples</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid making documentation hard to find</span>
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
