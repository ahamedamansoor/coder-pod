'use client';

import React, { useState } from 'react';

// Add custom styles for animations
const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes drawConnection {
    0% {
      stroke-dashoffset: 100;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
  
  @keyframes slideInLeft {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(0.5);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  @keyframes slideInRight {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(0.5);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 10px rgba(251, 146, 60, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(251, 146, 60, 0.8);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-drawConnection line {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: drawConnection 2s ease-out forwards;
  }
  
  .animate-drawConnection circle {
    animation: fadeIn 0.5s ease-out forwards;
    animation-delay: 1.5s;
    opacity: 0;
  }
  
  .animate-drawConnection text {
    animation: fadeIn 0.5s ease-out forwards;
    animation-delay: 1.8s;
    opacity: 0;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 1.5s ease-out forwards;
    transform-origin: left center;
  }
  
  .animate-slideInRight {
    animation: slideInRight 1.5s ease-out forwards;
    transform-origin: left center;
  }
  
  .animate-glowPulse {
    animation: glowPulse 2s ease-in-out infinite;
  }
`;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, Table, Layers, FileText, Server, Key, Link, 
  CheckCircle, Info, Lightbulb, ArrowRight, Code, Users, 
  Package, ShoppingCart, Zap, Shield, BarChart3, Play 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

// DatabaseTable component for individual table visualization
function DatabaseTable({ 
  tableName, 
  tableColor, 
  icon: Icon, 
  completedSteps, 
  sqlSteps, 
  currentStep, 
  isAnimating 
}: {
  tableName: string;
  tableColor: string;
  icon: any;
  completedSteps: number[];
  sqlSteps: any[];
  currentStep: number;
  isAnimating: boolean;
}) {
  const tableSteps = completedSteps.filter(i => sqlSteps[i].tableName === tableName);
  const isTableCreated = completedSteps.some(i => sqlSteps[i].action === 'create_table' && sqlSteps[i].tableName === tableName);
  const isTableCompleted = completedSteps.some(i => sqlSteps[i].action === 'complete_table' && sqlSteps[i].tableName === tableName);
  const isCurrentlyActive = isAnimating && sqlSteps[currentStep]?.tableName === tableName;
  
  const colorClasses = {
    blue: 'from-blue-600 to-indigo-600 border-blue-300 dark:border-blue-700',
    green: 'from-green-600 to-emerald-600 border-green-300 dark:border-green-700',
    purple: 'from-purple-600 to-pink-600 border-purple-300 dark:border-purple-700'
  };
  
  const bgClasses = {
    blue: 'from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30',
    green: 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30',
    purple: 'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30'
  };

  return (
    <div className={`relative transform transition-all duration-500 ${
      isTableCreated ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
    } ${isCurrentlyActive ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''}`}>
      {/* Table Container */}
      <div className={`bg-white dark:bg-gray-900 rounded-lg border-2 ${
        colorClasses[tableColor as keyof typeof colorClasses]
      } shadow-xl overflow-hidden ${isCurrentlyActive ? 'animate-pulse' : ''}`}>
        {/* Table Header */}
        <div className={`bg-gradient-to-r ${
          colorClasses[tableColor as keyof typeof colorClasses].split(' ')[0]
        } ${
          colorClasses[tableColor as keyof typeof colorClasses].split(' ')[1]
        } text-white p-3`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5" />
              <span className="font-bold text-lg">{tableName}</span>
              {isTableCompleted && (
                <CheckCircle className="w-5 h-5 text-green-300 animate-pulse" />
              )}
            </div>
            
            {/* Foreign Key Relationship Indicators */}
            <div className="flex items-center gap-2">
              {tableName === 'users' && (
                <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
                  <ArrowRight className="w-3 h-3" />
                  <span>FK Source</span>
                </div>
              )}
              {tableName === 'products' && (
                <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
                  <ArrowRight className="w-3 h-3" />
                  <span>FK Source</span>
                </div>
              )}
              {tableName === 'orders' && (
                <div className="flex items-center gap-1 text-xs bg-orange-400/30 px-2 py-1 rounded-full border border-orange-300/50">
                  <Link className="w-3 h-3" />
                  <span>2 FKs</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Table Structure */}
        <div className="p-4">
          {!isTableCreated ? (
            <div className="text-center py-6 text-gray-500 dark:text-gray-400">
              <Database className="w-8 h-8 opacity-50 mx-auto mb-2" />
              <span className="text-sm">Waiting to be created...</span>
            </div>
          ) : (
            <div className="space-y-4">
              {tableSteps.map((stepIndex) => {
                const step = sqlSteps[stepIndex];
                if (step.action === 'add_column' && step.columnName) {
                  const isForeignKey = step.foreignKey;
                  const isPrimaryKey = step.constraints?.includes('PRIMARY KEY');
                  
                  return (
                    <div
                      key={step.columnName}
                      className={`relative flex items-center gap-2 p-2 bg-gradient-to-r ${
                        bgClasses[tableColor as keyof typeof bgClasses]
                      } rounded-lg border ${
                        colorClasses[tableColor as keyof typeof colorClasses]
                      } transform transition-all duration-500 animate-fadeIn ${
                        isForeignKey ? 'ring-2 ring-orange-400 ring-opacity-60' : ''
                      }`}
                    >
                      {/* Arrow indicator for foreign keys */}
                      {isForeignKey && (
                        <div className="absolute -right-1 -top-1 z-10">
                          <div className="bg-orange-500 text-white rounded-full p-1 animate-bounce shadow-lg">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-1">
                        {isPrimaryKey && (
                          <Key className="w-3 h-3 text-yellow-500" />
                        )}
                        {isForeignKey && (
                          <Link className="w-3 h-3 text-orange-500 animate-pulse" />
                        )}
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-xs font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {step.columnName}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {step.dataType}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {step.constraints?.slice(0, 2).map((constraint: string, idx: number) => (
                          <span
                            key={idx}
                            className={`px-1 py-0.5 text-xs rounded-full border ${
                              constraint.includes('PRIMARY KEY') 
                                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700'
                                : constraint.includes('FOREIGN KEY') || isForeignKey
                                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700'
                            }`}
                          >
                            {constraint.split(' ')[0]}
                          </span>
                        ))}
                        {isForeignKey && (
                          <span className="px-1 py-0.5 text-xs bg-orange-500 text-white rounded-full border border-orange-600 font-bold">
                            FK
                          </span>
                        )}
                      </div>
                      
                      {/* Foreign key reference indicator */}
                      {isForeignKey && step.references && (
                        <div className="absolute -bottom-6 left-0 right-0 text-center">
                          <div className="inline-flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                            <ArrowRight className="w-3 h-3" />
                            <span className="font-mono">{step.references}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
      
      {/* Active indicator */}
      {isCurrentlyActive && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-1.5 animate-bounce shadow-lg">
          <Zap className="w-3 h-3" />
        </div>
      )}
    </div>
  );
}

export default function DatabaseBasics() {
  const [activeTab, setActiveTab] = useState('tables');
  const [showAnimation, setShowAnimation] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const sqlSteps = [
    // Users Table Creation
    { text: 'CREATE TABLE users (', type: 'keyword', description: 'Start creating the users table', action: 'create_table', tableName: 'users' },
    { text: 'id INT PRIMARY KEY AUTO_INCREMENT,', type: 'column', description: 'Add id column as primary key', action: 'add_column', tableName: 'users', columnName: 'id', dataType: 'INT', constraints: ['PRIMARY KEY', 'AUTO_INCREMENT'] },
    { text: 'username VARCHAR(50) UNIQUE NOT NULL,', type: 'column', description: 'Add username column with constraints', action: 'add_column', tableName: 'users', columnName: 'username', dataType: 'VARCHAR(50)', constraints: ['UNIQUE', 'NOT NULL'] },
    { text: 'email VARCHAR(100) UNIQUE NOT NULL,', type: 'column', description: 'Add email column with constraints', action: 'add_column', tableName: 'users', columnName: 'email', dataType: 'VARCHAR(100)', constraints: ['UNIQUE', 'NOT NULL'] },
    { text: 'created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP', type: 'column', description: 'Add timestamp column', action: 'add_column', tableName: 'users', columnName: 'created_at', dataType: 'TIMESTAMP', constraints: ['DEFAULT CURRENT_TIMESTAMP'] },
    { text: ');', type: 'keyword', description: 'Complete users table creation', action: 'complete_table', tableName: 'users' },
    
    // Products Table Creation
    { text: 'CREATE TABLE products (', type: 'keyword', description: 'Start creating the products table', action: 'create_table', tableName: 'products' },
    { text: 'product_id INT PRIMARY KEY AUTO_INCREMENT,', type: 'column', description: 'Add product_id column as primary key', action: 'add_column', tableName: 'products', columnName: 'product_id', dataType: 'INT', constraints: ['PRIMARY KEY', 'AUTO_INCREMENT'] },
    { text: 'name VARCHAR(200) NOT NULL,', type: 'column', description: 'Add name column', action: 'add_column', tableName: 'products', columnName: 'name', dataType: 'VARCHAR(200)', constraints: ['NOT NULL'] },
    { text: 'price DECIMAL(10,2) NOT NULL,', type: 'column', description: 'Add price column', action: 'add_column', tableName: 'products', columnName: 'price', dataType: 'DECIMAL(10,2)', constraints: ['NOT NULL'] },
    { text: 'stock_quantity INT DEFAULT 0', type: 'column', description: 'Add stock quantity column', action: 'add_column', tableName: 'products', columnName: 'stock_quantity', dataType: 'INT', constraints: ['DEFAULT 0'] },
    { text: ');', type: 'keyword', description: 'Complete products table creation', action: 'complete_table', tableName: 'products' },
    
    // Orders Table Creation
    { text: 'CREATE TABLE orders (', type: 'keyword', description: 'Start creating the orders table', action: 'create_table', tableName: 'orders' },
    { text: 'order_id INT PRIMARY KEY AUTO_INCREMENT,', type: 'column', description: 'Add order_id column as primary key', action: 'add_column', tableName: 'orders', columnName: 'order_id', dataType: 'INT', constraints: ['PRIMARY KEY', 'AUTO_INCREMENT'] },
    { text: 'user_id INT NOT NULL,', type: 'column', description: 'Add user_id foreign key column', action: 'add_column', tableName: 'orders', columnName: 'user_id', dataType: 'INT', constraints: ['NOT NULL'], foreignKey: true, references: 'users.id' },
    { text: 'product_id INT NOT NULL,', type: 'column', description: 'Add product_id foreign key column', action: 'add_column', tableName: 'orders', columnName: 'product_id', dataType: 'INT', constraints: ['NOT NULL'], foreignKey: true, references: 'products.product_id' },
    { text: 'quantity INT NOT NULL CHECK (quantity > 0),', type: 'column', description: 'Add quantity column with check constraint', action: 'add_column', tableName: 'orders', columnName: 'quantity', dataType: 'INT', constraints: ['NOT NULL', 'CHECK (quantity > 0)'] },
    { text: 'order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,', type: 'column', description: 'Add order date column', action: 'add_column', tableName: 'orders', columnName: 'order_date', dataType: 'TIMESTAMP', constraints: ['DEFAULT CURRENT_TIMESTAMP'] },
    { text: 'FOREIGN KEY (user_id) REFERENCES users(id),', type: 'constraint', description: 'Create foreign key relationship to users table', action: 'add_foreign_key', fromTable: 'orders', fromColumn: 'user_id', toTable: 'users', toColumn: 'id' },
    { text: 'FOREIGN KEY (product_id) REFERENCES products(product_id)', type: 'constraint', description: 'Create foreign key relationship to products table', action: 'add_foreign_key', fromTable: 'orders', fromColumn: 'product_id', toTable: 'products', toColumn: 'product_id' },
    { text: ');', type: 'keyword', description: 'Complete orders table creation', action: 'complete_table', tableName: 'orders' },
    
    // Final Connection Visualization
    { text: 'DATABASE COMPLETE', type: 'complete', description: 'All tables created with relationships', action: 'show_connections' }
  ];

  const runAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    
    sqlSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        setCompletedSteps(prev => [...prev, index]);
        
        if (index === sqlSteps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000); // Extra time for final connection visualization
        }
      }, index * 1200); // 1.2 seconds between each step for faster animation
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Database}
        category="MySQL · Fundamentals"
        title="Database Fundamentals"
        description="Master the core concepts of databases and understand how data is organized, stored, and managed"
        colorTheme="blue"
      />

      {/* What is a Database */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-indigo-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Database className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is a Database?</CardTitle>
              <CardDescription className="text-base">The foundation of modern data management</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Database = Organized Data Storage</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              A database is an <strong>organized collection of structured information</strong> stored electronically in a computer system, 
              controlled by a Database Management System (DBMS) for efficient access, management, and security.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg">Traditional Storage</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Files scattered across folders, no relationships, difficult to search and maintain
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-2 border-blue-300 dark:border-blue-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">Database Storage</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Structured, organized, interconnected data with relationships and constraints
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: Shield, title: 'Secure', desc: 'Controlled access' },
              { icon: Zap, title: 'Fast', desc: 'Quick retrieval' },
              { icon: Users, title: 'Multi-user', desc: 'Concurrent access' },
              { icon: BarChart3, title: 'Scalable', desc: 'Grows with needs' },
              { icon: CheckCircle, title: 'Reliable', desc: 'Data integrity' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Relational Database Concepts */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Table className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Relational Database Concepts</CardTitle>
              <CardDescription className="text-base">Building blocks of structured data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interactive Tabs */}
          <div className="flex gap-2 mb-6">
            {[
              { id: 'tables', label: 'Tables', icon: Table },
              { id: 'records', label: 'Records', icon: FileText },
              { id: 'fields', label: 'Fields', icon: Code },
              { id: 'relationships', label: 'Relationships', icon: Link }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            {activeTab === 'tables' && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Table className="w-5 h-5 text-blue-600" />
                  Tables - The Foundation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Tables are the fundamental building blocks of a relational database. Each table represents a specific entity 
                  or concept and organizes data in rows and columns.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="font-mono text-sm">
                    <div className="text-green-600">CREATE TABLE users (</div>
                    <div className="ml-4"><span className="text-blue-600">id</span> <span className="text-purple-600">INT</span> <span className="text-orange-600">PRIMARY KEY</span>,</div>
                    <div className="ml-4"><span className="text-blue-600">name</span> <span className="text-purple-600">VARCHAR(100)</span> <span className="text-orange-600">NOT NULL</span>,</div>
                    <div className="ml-4"><span className="text-blue-600">email</span> <span className="text-purple-600">VARCHAR(100)</span> <span className="text-orange-600">UNIQUE</span>,</div>
                    <div className="ml-4"><span className="text-blue-600">created_at</span> <span className="text-purple-600">TIMESTAMP</span> <span className="text-orange-600">DEFAULT CURRENT_TIMESTAMP</span></div>
                    <div className="text-green-600">);</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'records' && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Records (Rows) - Individual Entries
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Records are individual entries in a table representing a single instance of the entity. 
                  Each record contains values for each field defined in the table.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="font-mono text-sm">
                    <div className="text-gray-600">-- Sample records in users table</div>
                    <div className="text-blue-600">INSERT INTO users</div>
                    <div className="text-green-600">(name, email)</div>
                    <div className="text-blue-600">VALUES</div>
                    <div className="text-orange-600">('John Doe', 'john@example.com'),</div>
                    <div className="text-orange-600">('Jane Smith', 'jane@example.com'),</div>
                    <div className="text-orange-600">('Bob Johnson', 'bob@example.com');</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'fields' && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  Fields (Columns) - Data Attributes
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Fields define the properties of each record in a table. Each field has a specific data type 
                  and may have constraints that govern what values it can contain.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="font-semibold text-sm mb-1">Common Data Types</div>
                    <div className="text-xs space-y-1 font-mono">
                      <div><span className="text-purple-600">INT</span> - Whole numbers</div>
                      <div><span className="text-purple-600">VARCHAR(n)</span> - Text strings</div>
                      <div><span className="text-purple-600">DECIMAL</span> - Precise numbers</div>
                      <div><span className="text-purple-600">TIMESTAMP</span> - Date & time</div>
                    </div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="font-semibold text-sm mb-1">Common Constraints</div>
                    <div className="text-xs space-y-1 font-mono">
                      <div><span className="text-orange-600">PRIMARY KEY</span> - Unique identifier</div>
                      <div><span className="text-orange-600">NOT NULL</span> - Required field</div>
                      <div><span className="text-orange-600">UNIQUE</span> - No duplicates</div>
                      <div><span className="text-orange-600">DEFAULT</span> - Default value</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Link className="w-5 h-5 text-orange-600" />
                  Relationships - Connecting Data
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Relationships connect tables together, enabling data to be linked across different entities. 
                  The most common type is the foreign key relationship.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="font-mono text-sm">
                    <div className="text-gray-600">-- Creating a relationship between orders and users</div>
                    <div className="text-green-600">CREATE TABLE orders (</div>
                    <div className="ml-4"><span className="text-blue-600">order_id</span> <span className="text-purple-600">INT</span> <span className="text-orange-600">PRIMARY KEY</span>,</div>
                    <div className="ml-4"><span className="text-blue-600">user_id</span> <span className="text-purple-600">INT</span>,</div>
                    <div className="ml-4"><span className="text-blue-600">product_name</span> <span className="text-purple-600">VARCHAR(100)</span>,</div>
                    <div className="ml-4"><span className="text-orange-600">FOREIGN KEY (user_id) REFERENCES users(id)</span></div>
                    <div className="text-green-600">);</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Database Schema */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Database Schema</CardTitle>
              <CardDescription className="text-base">The blueprint of your data organization</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">What is a Schema?</h3>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              A database schema is the <strong>blueprint</strong> of how data is organized and how relationships among them are associated. 
              It defines the structure, constraints, and relationships in your database.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Table,
                title: 'Table Definitions',
                desc: 'Structure and layout of each table',
                color: 'blue'
              },
              {
                icon: Code,
                title: 'Data Types',
                desc: 'Type of data each field can store',
                color: 'green'
              },
              {
                icon: Key,
                title: 'Primary Keys',
                desc: 'Unique identifiers for records',
                color: 'purple'
              },
              {
                icon: Link,
                title: 'Foreign Keys',
                desc: 'Links between related tables',
                color: 'orange'
              },
              {
                icon: Shield,
                title: 'Constraints',
                desc: 'Rules for data integrity',
                color: 'red'
              },
              {
                icon: Zap,
                title: 'Indexes',
                desc: 'Performance optimization',
                color: 'cyan'
              }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
                <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400 mb-2`} />
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SQL Overview */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">SQL - The Language of Databases</CardTitle>
              <CardDescription className="text-base">Structured Query Language for data management</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30">
            <Info className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">SQL = Universal Database Language</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Structured Query Language (SQL) is the <strong>standard language</strong> for managing and manipulating relational databases. 
              It's used for querying, inserting, updating, and modifying data across all major database systems.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                DDL - Data Definition Language
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">Defines database structure:</p>
              <div className="space-y-1 text-xs font-mono">
                <div><span className="text-green-600">CREATE</span> - Create database objects</div>
                <div><span className="text-yellow-600">ALTER</span> - Modify existing objects</div>
                <div><span className="text-red-600">DROP</span> - Delete database objects</div>
                <div><span className="text-purple-600">TRUNCATE</span> - Remove all data from table</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <Database className="w-4 h-4" />
                DML - Data Manipulation Language
              </h3>
              <p className="text-sm text-green-800 dark:text-green-200 mb-2">Manages data within tables:</p>
              <div className="space-y-1 text-xs font-mono">
                <div><span className="text-blue-600">SELECT</span> - Retrieve data</div>
                <div><span className="text-green-600">INSERT</span> - Add new records</div>
                <div><span className="text-orange-600">UPDATE</span> - Modify existing records</div>
                <div><span className="text-red-600">DELETE</span> - Remove records</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                DCL - Data Control Language
              </h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">Controls access to data:</p>
              <div className="space-y-1 text-xs font-mono">
                <div><span className="text-green-600">GRANT</span> - Give permissions</div>
                <div><span className="text-red-600">REVOKE</span> - Remove permissions</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                TCL - Transaction Control
              </h3>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">Manages transactions:</p>
              <div className="space-y-1 text-xs font-mono">
                <div><span className="text-green-600">COMMIT</span> - Save changes</div>
                <div><span className="text-orange-600">ROLLBACK</span> - Undo changes</div>
                <div><span className="text-blue-600">SAVEPOINT</span> - Create rollback points</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Step-by-Step Examples */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Interactive Database Builder</CardTitle>
              <CardDescription className="text-base">Build your first database step-by-step with live animations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Create Users Table */}
          <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <div className="text-white font-bold text-lg">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                      👥 Create Users Table
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Start by creating a table to store user information - the foundation of any application.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-5 rounded-xl border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    What You'll Learn:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Primary Key concept</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">Auto-increment fields</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">UNIQUE constraints</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">NOT NULL constraints</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className={`w-4 h-4 ${isAnimating ? 'text-yellow-400 animate-pulse' : 'text-green-400'}`} />
                    <span className="text-sm font-semibold text-green-400">SQL Code:</span>
                    {isAnimating && (
                      <span className="text-xs text-yellow-400 animate-pulse ml-2">
                        Step {currentStep + 1} of {sqlSteps.length}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-sm overflow-x-auto">
                    {sqlSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === 0 ? 'text-green-600' : 
                          index === sqlSteps.length - 1 ? 'text-green-600' : 
                          'ml-4'
                        } ${
                          completedSteps.includes(index) 
                            ? 'opacity-100 transform translate-x-0' 
                            : 'opacity-30 transform translate-x-2'
                        } ${
                          index === currentStep && isAnimating
                            ? 'bg-yellow-900/30 border-l-4 border-yellow-400 pl-3 -ml-3 animate-pulse'
                            : ''
                        }`}
                      >
                        {step.type === 'keyword' ? (
                          <span className={completedSteps.includes(index) ? 'text-green-400' : 'text-gray-500'}>
                            {step.text}
                          </span>
                        ) : (
                          <span className={completedSteps.includes(index) ? '' : 'text-gray-500'}>
                            {step.text.split(' ').map((word, wordIndex) => {
                              if (word.includes('INT') || word.includes('VARCHAR') || word.includes('TIMESTAMP')) {
                                return <span key={wordIndex} className={completedSteps.includes(index) ? 'text-purple-400' : 'text-gray-600'}>{word} </span>;
                              } else if (word.includes('PRIMARY') || word.includes('UNIQUE') || word.includes('NOT') || word.includes('NULL') || word.includes('AUTO_INCREMENT') || word.includes('DEFAULT') || word.includes('CURRENT_TIMESTAMP')) {
                                return <span key={wordIndex} className={completedSteps.includes(index) ? 'text-orange-400' : 'text-gray-600'}>{word} </span>;
                              } else {
                                return <span key={wordIndex} className={completedSteps.includes(index) ? 'text-blue-400' : 'text-gray-600'}>{word} </span>;
                              }
                            })}
                          </span>
                        )}
                        {index === currentStep && isAnimating && (
                          <span className="ml-2 text-yellow-400 animate-pulse">▍</span>
                        )}
                      </div>
                    ))}
                  </div>
                  {isAnimating && (
                    <div className="mt-3 p-2 bg-blue-900/30 rounded border border-blue-700">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                        <span className="text-xs text-blue-300">
                          {sqlSteps[currentStep]?.description}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Multi-Table Creation Visualization */}
                  {(isAnimating || completedSteps.length > 0) && (
                    <div className="mt-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-4 text-center flex items-center justify-center gap-2">
                        <Database className="w-5 h-5" />
                        Complete Database Construction with Foreign Keys
                      </h4>
                      
                      <div className="relative">
                        {/* Database Visualization Container */}
                        <div className="grid gap-6 md:grid-cols-3">
                          {/* Users Table */}
                          <DatabaseTable 
                            tableName="users"
                            tableColor="blue"
                            icon={Users}
                            completedSteps={completedSteps}
                            sqlSteps={sqlSteps}
                            currentStep={currentStep}
                            isAnimating={isAnimating}
                          />
                          
                          {/* Products Table */}
                          <DatabaseTable 
                            tableName="products"
                            tableColor="green"
                            icon={Package}
                            completedSteps={completedSteps}
                            sqlSteps={sqlSteps}
                            currentStep={currentStep}
                            isAnimating={isAnimating}
                          />
                          
                          {/* Orders Table */}
                          <DatabaseTable 
                            tableName="orders"
                            tableColor="purple"
                            icon={ShoppingCart}
                            completedSteps={completedSteps}
                            sqlSteps={sqlSteps}
                            currentStep={currentStep}
                            isAnimating={isAnimating}
                          />
                        </div>
                        
                                                
                        {/* Database Completion Indicator */}
                        {completedSteps.length === sqlSteps.length && (
                          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border-2 border-green-300 dark:border-green-700 animate-fadeIn">
                            <div className="flex items-center gap-3 text-green-800 dark:text-green-200">
                              <CheckCircle className="w-6 h-6" />
                              <div>
                                <span className="font-bold text-lg">Database Creation Complete!</span>
                                <div className="text-sm text-green-700 dark:text-green-300 mt-1">
                                  All 3 tables created with 2 foreign key relationships established.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* SQL execution indicator */}
                        {isAnimating && (
                          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-2 animate-bounce shadow-lg" style={{ zIndex: 20 }}>
                            <Zap className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={runAnimation}
                    disabled={isAnimating}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2 shadow-lg hover:scale-105 transition-transform text-white rounded-lg font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Play className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
                    {isAnimating ? 'Executing...' : 'Run SQL Animation'}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Animation Section */}
          {showAnimation && (
            <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 text-center mb-6">
                    🎭 Live Database Structure Animation
                  </h3>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Users Table Animation */}
                    <div className="relative">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-300 dark:border-blue-700 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-6 h-6 text-blue-600 animate-pulse" />
                          <h4 className="font-bold text-blue-900 dark:text-blue-100">users</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Key className="w-3 h-3 text-yellow-500" />
                            <span className="font-mono text-blue-600">id</span>
                            <span className="text-gray-500">(PK)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-mono">username</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-mono">email</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span className="font-mono">created_at</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Products Table Animation */}
                    <div className="relative">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-300 dark:border-green-700 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Package className="w-6 h-6 text-green-600 animate-pulse" />
                          <h4 className="font-bold text-green-900 dark:text-green-100">products</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Key className="w-3 h-3 text-yellow-500" />
                            <span className="font-mono text-green-600">product_id</span>
                            <span className="text-gray-500">(PK)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="font-mono">name</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="font-mono">price</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span className="font-mono">stock_quantity</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Orders Table Animation */}
                    <div className="relative">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-purple-300 dark:border-purple-700 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <ShoppingCart className="w-6 h-6 text-purple-600 animate-pulse" />
                          <h4 className="font-bold text-purple-900 dark:text-purple-100">orders</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Key className="w-3 h-3 text-yellow-500" />
                            <span className="font-mono text-purple-600">order_id</span>
                            <span className="text-gray-500">(PK)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <Link className="w-3 h-3 text-orange-500 animate-bounce" />
                            <span className="font-mono">user_id</span>
                            <span className="text-gray-500">(FK)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <Link className="w-3 h-3 text-orange-500 animate-bounce" />
                            <span className="font-mono">product_id</span>
                            <span className="text-gray-500">(FK)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="font-mono">quantity</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Relationship Visualization */}
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border border-yellow-300 dark:border-yellow-700">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3 text-center">
                      🔗 How Tables Connect
                    </h4>
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="font-mono">users</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-yellow-600" />
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-purple-600" />
                        <span className="font-mono">orders</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-yellow-600" />
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-green-600" />
                        <span className="font-mono">products</span>
                      </div>
                    </div>
                    <p className="text-center text-xs text-yellow-800 dark:text-yellow-200 mt-2">
                      Each order links one user to one product through foreign keys
                    </p>
                  </div>

                  {/* Sample Data Flow */}
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-300 dark:border-blue-700">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-center">
                      📊 Sample Data Flow
                    </h4>
                    <div className="grid gap-3 md:grid-cols-3 text-xs">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded border border-blue-200 dark:border-blue-800">
                        <div className="font-semibold text-blue-600 mb-1">User</div>
                        <div className="font-mono">John Doe</div>
                        <div className="text-gray-500">ID: 1</div>
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded border border-purple-200 dark:border-purple-800">
                        <div className="font-semibold text-purple-600 mb-1">Order</div>
                        <div className="font-mono">Quantity: 2</div>
                        <div className="text-gray-500">ID: 101</div>
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded border border-green-200 dark:border-green-800">
                        <div className="font-semibold text-green-600 mb-1">Product</div>
                        <div className="font-mono">Laptop</div>
                        <div className="text-gray-500">ID: 5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

                  </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/10 dark:to-cyan-950/10">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: CheckCircle,
                title: 'Structured Organization',
                desc: 'Databases organize data in tables with rows and columns for efficient access and management'
              },
              {
                icon: CheckCircle,
                title: 'Relationships Matter',
                desc: 'Foreign keys connect related data across different tables, enabling complex queries'
              },
              {
                icon: CheckCircle,
                title: 'SQL is Universal',
                desc: 'SQL provides a standardized way to interact with all relational databases'
              },
              {
                icon: CheckCircle,
                title: 'Schema is Blueprint',
                desc: 'A well-designed schema ensures data integrity, performance, and scalability'
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <item.icon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-indigo-950/20">
        <Lightbulb className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-xl text-blue-900 dark:text-blue-100">Ready to Dive Deeper?</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <p className="mb-3">
            Now that you understand database fundamentals, you're ready to explore:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Badge variant="outline" className="justify-center">Basic SQL Syntax</Badge>
            <Badge variant="outline" className="justify-center">Data Types</Badge>
            <Badge variant="outline" className="justify-center">Creating Tables</Badge>
            <Badge variant="outline" className="justify-center">Basic Queries</Badge>
          </div>
        </AlertDescription>
      </Alert>
    </div>
    </>
  );
}
