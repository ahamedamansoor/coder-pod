'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, Hash, Type, Calendar, Shield, Key, Lock, 
  ChevronRight, Zap, FileText, CheckCircle, Copy, AlertCircle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-glowPulse {
    animation: glowPulse 2s ease-in-out infinite;
  }
`;

export default function DataTypesConstraints() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      <PageHeader
        icon={Database}
        category="MySQL · Fundamentals"
        title="Data Types & Constraints"
        description="Master MySQL data types and constraints for robust database design"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Why Data Types Matter</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choosing the right data types ensures data integrity, optimizes storage, and improves query performance. 
                Constraints enforce business rules and maintain data consistency across your database.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Numeric Data Types */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Numeric Data Types</CardTitle>
              <CardDescription className="text-base">Store numbers efficiently with the right type</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">INT</h3>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Common</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Whole numbers (-2B to 2B)</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Ages, quantities, IDs, counts</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('age INT DEFAULT 18, quantity INT NOT NULL')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'age INT DEFAULT 18, quantity INT NOT NULL' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>age INT DEFAULT 18,</div>
                  <div>quantity INT NOT NULL</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">DECIMAL</h3>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Money</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Exact precision for financial data</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Prices, salaries, balances, tax rates</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('price DECIMAL(10,2) NOT NULL, tax_rate DECIMAL(5,4)')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'price DECIMAL(10,2) NOT NULL, tax_rate DECIMAL(5,4)' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>price DECIMAL(10,2) NOT NULL,</div>
                  <div>tax_rate DECIMAL(5,4)</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">FLOAT</h3>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Scientific</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Approximate decimal numbers</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Measurements, ratings, scientific data</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('temperature FLOAT DEFAULT 20.5, rating FLOAT CHECK (rating >= 0 AND rating <= 5)')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'temperature FLOAT DEFAULT 20.5, rating FLOAT CHECK (rating >= 0 AND rating <= 5)' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>temperature FLOAT DEFAULT 20.5,</div>
                  <div>rating FLOAT CHECK (rating &gt;= 0 AND rating &lt;= 5)</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">BIGINT</h3>
                <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">Large IDs</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Very large integers (±9 quintillion)</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: High-volume IDs, timestamps, large counts</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('id BIGINT AUTO_INCREMENT PRIMARY KEY, transaction_count BIGINT DEFAULT 0')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'id BIGINT AUTO_INCREMENT PRIMARY KEY, transaction_count BIGINT DEFAULT 0' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>id BIGINT AUTO_INCREMENT PRIMARY KEY,</div>
                  <div>transaction_count BIGINT DEFAULT 0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Numeric Data Types Example Table */}
          <div className="mt-6 p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Example Table with Numeric Data Types</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard('CREATE TABLE products (\n  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n  price DECIMAL(10,2) NOT NULL,\n  tax_rate DECIMAL(5,4),\n  quantity INT DEFAULT 0,\n  rating FLOAT CHECK (rating >= 0 AND rating <= 5)\n);')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 z-10"
              >
                {copiedCode === 'CREATE TABLE products (\n  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n  price DECIMAL(10,2) NOT NULL,\n  tax_rate DECIMAL(5,4),\n  quantity INT DEFAULT 0,\n  rating FLOAT CHECK (rating >= 0 AND rating <= 5)\n);' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>CREATE TABLE products (</div>
                <div className="pl-4">id BIGINT AUTO_INCREMENT PRIMARY KEY,</div>
                <div className="pl-4"><span className="text-amber-600 dark:text-amber-400">price DECIMAL(10,2) NOT NULL,</span></div>
                <div className="pl-4"><span className="text-amber-600 dark:text-amber-400">tax_rate DECIMAL(5,4),</span></div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400">quantity INT DEFAULT 0,</span></div>
                <div className="pl-4"><span className="text-blue-600 dark:text-blue-400">rating FLOAT CHECK (rating &gt;= 0 AND rating &lt;= 5)</span></div>
                <div>);</div>
              </div>
            </div>

            <h4 className="font-bold text-slate-900 dark:text-white mt-6 mb-3">Sample Data in Database</h4>
            <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">id</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">price</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">tax_rate</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">quantity</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">1</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">29.99</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">0.0825</td>
                    <td className="py-2 px-3 text-purple-600 dark:text-purple-400">150</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">4.5</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">2</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">99.50</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">0.1000</td>
                    <td className="py-2 px-3 text-purple-600 dark:text-purple-400">75</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">4.8</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-slate-900 dark:text-white">3</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">49.00</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">0.0750</td>
                    <td className="py-2 px-3 text-purple-600 dark:text-purple-400">200</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">4.2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>DECIMAL:</strong> Exact precision for financial data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>INT:</strong> Whole numbers for counts and IDs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>FLOAT:</strong> Approximate values for ratings</span>
              </div>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Best Practice</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">DECIMAL</code> for money and financial calculations to avoid floating-point rounding errors.
              Use <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">INT</code> for IDs and counts unless you expect values to exceed 2 billion.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* String Data Types */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Type className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">String Data Types</CardTitle>
              <CardDescription className="text-base">Store text and character data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">VARCHAR</h3>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Most Used</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Variable-length strings up to 65,535 chars</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Names, emails, addresses, descriptions</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('username VARCHAR(50) UNIQUE, email VARCHAR(255) NOT NULL, bio VARCHAR(500)')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'username VARCHAR(50) UNIQUE, email VARCHAR(255) NOT NULL, bio VARCHAR(500)' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>username VARCHAR(50) UNIQUE,</div>
                  <div>email VARCHAR(255) NOT NULL,</div>
                  <div>bio VARCHAR(500)</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">TEXT</h3>
                <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Long Content</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Long text up to 65,535 characters</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Articles, comments, product descriptions, logs</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('article_body TEXT, comment TEXT, description TEXT')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'article_body TEXT, comment TEXT, description TEXT' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>article_body TEXT,</div>
                  <div>comment TEXT,</div>
                  <div>description TEXT</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">CHAR</h3>
                <Badge className="bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300">Fixed</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Fixed-length strings (padded with spaces)</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Country codes, status flags, MD5 hashes</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('country_code CHAR(2), status CHAR(1) DEFAULT \'A\', hash CHAR(32)')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'country_code CHAR(2), status CHAR(1) DEFAULT \'A\', hash CHAR(32)' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>country_code CHAR(2),</div>
                  <div>status CHAR(1) DEFAULT 'A',</div>
                  <div>hash CHAR(32)</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">ENUM</h3>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Options</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Predefined list of string values</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Status fields, categories, fixed options</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('status ENUM(\'active\', \'inactive\', \'pending\') DEFAULT \'pending\'')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'status ENUM(\'active\', \'inactive\', \'pending\') DEFAULT \'pending\'' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>status ENUM('active', 'inactive', 'pending')</div>
                  <div>DEFAULT 'pending'</div>
                </div>
              </div>
            </div>
          </div>

          {/* String Data Types Example Table */}
          <div className="mt-6 p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Example Table with String Data Types</h3>
            <div className="relative">
              <button 
                onClick={() => copyToClipboard('CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) UNIQUE,\n  email VARCHAR(255) NOT NULL,\n  bio VARCHAR(500),\n  country_code CHAR(2),\n  status CHAR(1) DEFAULT \'A\',\n  profile_hash CHAR(32),\n  article_body TEXT,\n  account_status ENUM(\'active\', \'inactive\', \'suspended\') DEFAULT \'active\'\n);')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 z-10"
              >
                {copiedCode === 'CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) UNIQUE,\n  email VARCHAR(255) NOT NULL,\n  bio VARCHAR(500),\n  country_code CHAR(2),\n  status CHAR(1) DEFAULT \'A\',\n  profile_hash CHAR(32),\n  article_body TEXT,\n  account_status ENUM(\'active\', \'inactive\', \'suspended\') DEFAULT \'active\'\n);' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>CREATE TABLE users (</div>
                <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                <div className="pl-4"><span className="text-blue-400">username VARCHAR(50) UNIQUE,</span></div>
                <div className="pl-4"><span className="text-blue-400">email VARCHAR(255) NOT NULL,</span></div>
                <div className="pl-4"><span className="text-blue-400">bio VARCHAR(500),</span></div>
                <div className="pl-4"><span className="text-slate-400">country_code CHAR(2),</span></div>
                <div className="pl-4"><span className="text-slate-400">status CHAR(1) DEFAULT 'A',</span></div>
                <div className="pl-4"><span className="text-slate-400">profile_hash CHAR(32),</span></div>
                <div className="pl-4"><span className="text-indigo-400">article_body TEXT,</span></div>
                <div className="pl-4"><span className="text-green-400">account_status ENUM('active', 'inactive', 'suspended') DEFAULT 'active'</span></div>
                <div>);</div>
              </div>
            </div>
            
            <h4 className="font-bold text-slate-900 dark:text-white mt-6 mb-3">Sample Data in Database</h4>
            <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">id</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">username</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">email</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">bio</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">country</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">status</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">hash</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">article</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">acc_status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">1</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">johndoe</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">john@example.com</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">Software developer...</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400">US</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400">A</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400 font-mono text-xs">a1b2c3d4...</td>
                    <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400">MySQL tutorial...</td>
                    <td className="py-2 px-3 text-green-600 dark:text-green-400">active</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">2</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">janesmith</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">jane@example.com</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">Data analyst...</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400">UK</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400">A</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400 font-mono text-xs">e5f6g7h8...</td>
                    <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400">Data science...</td>
                    <td className="py-2 px-3 text-green-600 dark:text-green-400">active</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-slate-900 dark:text-white">3</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">bobwilson</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">bob@example.com</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">Tech enthusiast...</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400">CA</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400">A</td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-400 font-mono text-xs">i9j0k1l2...</td>
                    <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400">Web development...</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">inactive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>VARCHAR:</strong> Variable-length for flexible text fields</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>CHAR:</strong> Fixed-length for codes and hashes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-indigo-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>TEXT:</strong> Long content without length limit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>ENUM:</strong> Predefined options for status fields</span>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Storage Efficiency</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">VARCHAR</code> for most string data as it only uses storage for actual characters. 
              Use <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">CHAR</code> for fixed-length data like country codes or status flags for better performance.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Date/Time Data Types */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Date & Time Data Types</CardTitle>
              <CardDescription className="text-base">Handle temporal data effectively</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">DATE</h3>
                <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">Common</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Date only (YYYY-MM-DD)</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Birthdays, anniversaries, due dates</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('birth_date DATE, due_date DATE NOT NULL')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'birth_date DATE, due_date DATE NOT NULL' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>birth_date DATE,</div>
                  <div>due_date DATE NOT NULL</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">DATETIME</h3>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Precise</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Date and time (YYYY-MM-DD HH:MM:SS)</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Event timestamps, log entries</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>created_at DATETIME DEFAULT CURRENT_TIMESTAMP,</div>
                  <div>updated_at DATETIME DEFAULT CURRENT_TIMESTAMP</div>
                  <div>ON UPDATE CURRENT_TIMESTAMP</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">TIMESTAMP</h3>
                <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">Auto-Update</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Unix timestamp, auto-updates on record change</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Created/updated timestamps</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white">TIME</h3>
                <Badge className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">Duration</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Time only or duration (HH:MM:SS)</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Opening hours, durations</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('opening_time TIME DEFAULT \'09:00:00\', closing_time TIME DEFAULT \'17:00:00\'')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'opening_time TIME DEFAULT \'09:00:00\', closing_time TIME DEFAULT \'17:00:00\'' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>opening_time TIME DEFAULT '09:00:00',</div>
                  <div>closing_time TIME DEFAULT '17:00:00'</div>
                </div>
              </div>
            </div>
          </div>

          {/* Date/Time Data Types Example Table */}
          <div className="mt-6 p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Example Table with Date/Time Data Types</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard('CREATE TABLE events (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  event_date DATE NOT NULL,\n  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,\n  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  last_login TIMESTAMP NULL DEFAULT NULL,\n  start_time TIME DEFAULT \'09:00:00\',\n  duration TIME DEFAULT \'00:00:00\'\n);')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 z-10"
              >
                {copiedCode === 'CREATE TABLE events (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  event_date DATE NOT NULL,\n  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,\n  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  last_login TIMESTAMP NULL DEFAULT NULL,\n  start_time TIME DEFAULT \'09:00:00\',\n  duration TIME DEFAULT \'00:00:00\'\n);' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>CREATE TABLE events (</div>
                <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                <div className="pl-4"><span className="text-amber-600 dark:text-amber-400">event_date DATE NOT NULL,</span></div>
                <div className="pl-4"><span className="text-orange-600 dark:text-orange-400">created_at DATETIME DEFAULT CURRENT_TIMESTAMP,</span></div>
                <div className="pl-4"><span className="text-orange-600 dark:text-orange-400">updated_at DATETIME DEFAULT CURRENT_TIMESTAMP</span></div>
                <div className="pl-4"><span className="text-orange-600 dark:text-orange-400">ON UPDATE CURRENT_TIMESTAMP,</span></div>
                <div className="pl-4"><span className="text-red-600 dark:text-red-400">last_login TIMESTAMP NULL DEFAULT NULL,</span></div>
                <div className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">start_time TIME DEFAULT '09:00:00',</span></div>
                <div className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">duration TIME DEFAULT '00:00:00'</span></div>
                <div>);</div>
              </div>
            </div>

            <h4 className="font-bold text-slate-900 dark:text-white mt-6 mb-3">Sample Data in Database</h4>
            <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">id</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">event_date</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">created_at</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">updated_at</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">last_login</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">start_time</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">1</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">2024-06-15</td>
                    <td className="py-2 px-3 text-orange-600 dark:text-orange-400">2024-06-10 14:30:00</td>
                    <td className="py-2 px-3 text-orange-600 dark:text-orange-400">2024-06-10 15:45:00</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">2024-06-10 15:30:00</td>
                    <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400">09:00:00</td>
                    <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400">02:30:00</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">2</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">2024-07-20</td>
                    <td className="py-2 px-3 text-orange-600 dark:text-orange-400">2024-06-12 10:00:00</td>
                    <td className="py-2 px-3 text-orange-600 dark:text-orange-400">2024-06-12 11:20:00</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">2024-06-12 11:00:00</td>
                    <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400">14:00:00</td>
                    <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400">03:15:00</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-slate-900 dark:text-white">3</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">2024-08-05</td>
                    <td className="py-2 px-3 text-orange-600 dark:text-orange-400">2024-06-15 08:30:00</td>
                    <td className="py-2 px-3 text-orange-600 dark:text-orange-400">2024-06-15 08:30:00</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">NULL</td>
                    <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400">10:30:00</td>
                    <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400">01:45:00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>DATE:</strong> Date only (YYYY-MM-DD)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-orange-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>DATETIME:</strong> Date and time with timezone preservation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>TIMESTAMP:</strong> Auto-updates, UTC conversion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-cyan-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>TIME:</strong> Time or duration (HH:MM:SS)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Constraints Section */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Constraints</CardTitle>
              <CardDescription className="text-base">Enforce data integrity and business rules</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">PRIMARY KEY</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Uniquely identifies each row</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: IDs, user IDs, order numbers</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('id BIGINT AUTO_INCREMENT PRIMARY KEY')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'id BIGINT AUTO_INCREMENT PRIMARY KEY' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>id BIGINT AUTO_INCREMENT PRIMARY KEY</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">FOREIGN KEY</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Links to another table's primary key</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Relationships between tables</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('user_id BIGINT NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'user_id BIGINT NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>user_id BIGINT NOT NULL,</div>
                  <div>FOREIGN KEY (user_id)</div>
                  <div className="pl-4">REFERENCES users(id)</div>
                  <div className="pl-4">ON DELETE CASCADE</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">NOT NULL</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Column must have a value</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Required fields like email, username</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('email VARCHAR(255) NOT NULL, username VARCHAR(50) NOT NULL')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'email VARCHAR(255) NOT NULL, username VARCHAR(50) NOT NULL' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>email VARCHAR(255) NOT NULL,</div>
                  <div>username VARCHAR(50) NOT NULL</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">UNIQUE</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">All values must be different</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Email addresses, usernames</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('email VARCHAR(255) UNIQUE, username VARCHAR(50) UNIQUE')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'email VARCHAR(255) UNIQUE, username VARCHAR(50) UNIQUE' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>email VARCHAR(255) UNIQUE,</div>
                  <div>username VARCHAR(50) UNIQUE</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">DEFAULT</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Sets a default value if none provided</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Status fields, timestamps</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('status VARCHAR(20) DEFAULT \'active\', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'status VARCHAR(20) DEFAULT \'active\', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>status VARCHAR(20) DEFAULT 'active',</div>
                  <div>created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">CHECK</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Custom validation condition</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Best for: Business rules like age restrictions</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('age INT CHECK (age >= 18), price DECIMAL(10,2) CHECK (price > 0)')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'age INT CHECK (age >= 18), price DECIMAL(10,2) CHECK (price > 0)' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>age INT CHECK (age &gt;= 18),</div>
                  <div>price DECIMAL(10,2) CHECK (price &gt; 0)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Constraints Example Table */}
          <div className="mt-6 p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Example Table with Constraints</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard('CREATE TABLE orders (\n  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  username VARCHAR(50) NOT NULL,\n  status VARCHAR(20) DEFAULT \'pending\',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  age INT CHECK (age >= 18),\n  price DECIMAL(10,2) CHECK (price > 0)\n);')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 z-10"
              >
                {copiedCode === 'CREATE TABLE orders (\n  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  username VARCHAR(50) NOT NULL,\n  status VARCHAR(20) DEFAULT \'pending\',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  age INT CHECK (age >= 18),\n  price DECIMAL(10,2) CHECK (price > 0)\n);' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>CREATE TABLE orders (</div>
                <div className="pl-4">id BIGINT AUTO_INCREMENT PRIMARY KEY,</div>
                <div className="pl-4">user_id BIGINT NOT NULL,</div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400">FOREIGN KEY (user_id)</span></div>
                <div className="pl-6"><span className="text-purple-600 dark:text-purple-400">REFERENCES users(id) ON DELETE CASCADE,</span></div>
                <div className="pl-4"><span className="text-green-600 dark:text-green-400">email VARCHAR(255) NOT NULL UNIQUE,</span></div>
                <div className="pl-4"><span className="text-amber-600 dark:text-amber-400">username VARCHAR(50) NOT NULL,</span></div>
                <div className="pl-4"><span className="text-blue-600 dark:text-blue-400">status VARCHAR(20) DEFAULT 'pending',</span></div>
                <div className="pl-4"><span className="text-blue-600 dark:text-blue-400">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,</span></div>
                <div className="pl-4"><span className="text-red-600 dark:text-red-400">age INT CHECK (age &gt;= 18),</span></div>
                <div className="pl-4"><span className="text-red-600 dark:text-red-400">price DECIMAL(10,2) CHECK (price &gt; 0)</span></div>
                <div>);</div>
              </div>
            </div>

            <h4 className="font-bold text-slate-900 dark:text-white mt-6 mb-3">Sample Data in Database</h4>
            <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">id</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">user_id</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">email</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">username</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">status</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">created_at</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">age</th>
                    <th className="py-2 px-3 text-left text-slate-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700">price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">1</td>
                    <td className="py-2 px-3 text-purple-600 dark:text-purple-400">101</td>
                    <td className="py-2 px-3 text-green-600 dark:text-green-400">john@example.com</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">johndoe</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">pending</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">2024-06-10 14:30:00</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">25</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">29.99</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-3 text-slate-900 dark:text-white">2</td>
                    <td className="py-2 px-3 text-purple-600 dark:text-purple-400">102</td>
                    <td className="py-2 px-3 text-green-600 dark:text-green-400">jane@example.com</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">janesmith</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">completed</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">2024-06-12 10:00:00</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">30</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">99.50</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-slate-900 dark:text-white">3</td>
                    <td className="py-2 px-3 text-purple-600 dark:text-purple-400">103</td>
                    <td className="py-2 px-3 text-green-600 dark:text-green-400">bob@example.com</td>
                    <td className="py-2 px-3 text-amber-600 dark:text-amber-400">bobwilson</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">shipped</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400">2024-06-15 08:30:00</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">22</td>
                    <td className="py-2 px-3 text-red-600 dark:text-red-400">49.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>FOREIGN KEY:</strong> Links to users table, cascade delete</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>UNIQUE:</strong> Email must be unique</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>NOT NULL:</strong> Username cannot be empty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>DEFAULT:</strong> Status defaults to 'pending'</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500"></div>
                <span className="text-slate-600 dark:text-slate-400"><strong>CHECK:</strong> Age &gt;= 18, price &gt; 0</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div>
            <CardTitle className="text-2xl">Best Practices</CardTitle>
            <CardDescription>Tips for choosing the right data types and constraints</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Use the smallest sufficient data type</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Don't use BIGINT if INT will suffice. Smaller types use less memory and improve cache efficiency.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Use DECIMAL for money</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Never use FLOAT for financial calculations due to floating-point rounding errors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Add constraints early</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Define constraints during table creation rather than adding them later to avoid data issues.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Use appropriate VARCHAR lengths</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Choose reasonable maximum lengths based on your data requirements, but leave room for growth.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
