'use client';

import React from 'react';
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
  Layers,
  Filter,
  Search,
  Bug,
  Activity,
  File,
  Calendar,
  Users,
  Database,
  Mail,
  Globe,
  PieChart,
  LineChart,
  BarChart,
  BookOpen,
  FileCheck,
  FolderOpen,
  GitBranch,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  Server,
  Network,
  Shield,
  Key,
  Lock,
  Unlock,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  Edit,
  Trash,
  Save,
  Upload,
  DownloadCloud,
  Info
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function RestApiBasicsComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'rest-api-basics',
    title: 'REST API Basics',
    explanation: 'Understanding REST API fundamentals and concepts',
    category: '24. API Testing & Integration'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-cyan-900/20">
      <PageHeader
        title="REST API Basics"
        description="Master the fundamentals of REST APIs, HTTP methods, status codes, and API architecture to build a solid foundation for API testing"
        icon={Server}
        colorTheme="cyan"
        badges={[
          { label: 'REST API', variant: 'secondary' },
          { label: 'HTTP Methods', variant: 'secondary' },
          { label: 'API Architecture', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: What is REST API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Server className="w-7 h-7" />
              What is REST API?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding REST architecture and API fundamentals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">Definition</h4>
                <p className="text-cyan-800 dark:text-cyan-200">
                  REST (Representational State Transfer) is an architectural style for designing networked applications. REST APIs use HTTP requests to GET, PUT, POST, and DELETE data.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Key Principles</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Client-server architecture, stateless communication, cacheable responses, uniform interface, layered system, and code on demand.
                </p>
              </div>
            </div>

            {/* REST API Architecture - Digital City Analogy */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">🌐 REST API Architecture - The Digital City</h5>
              
              <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-950/30 dark:via-blue-950/20 dark:to-purple-950/20 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                {/* City Overview */}
                <div className="mb-8 text-center">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                    🏛️ Imagine REST API as a Perfect Digital City
                  </h6>
                  <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                    Every building has a clear address, follows traffic rules, and communicates through a universal language
                  </p>
                </div>

                {/* Interactive City Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold animate-pulse">
                      🌐
                    </div>
                    <h6 className="font-bold text-cyan-900 dark:text-cyan-100">Client Visitor</h6>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300">Requests information</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold animate-bounce">
                      🚦
                    </div>
                    <h6 className="font-bold text-purple-900 dark:text-purple-100">Gateway</h6>
                    <p className="text-sm text-purple-700 dark:text-purple-300">City entrance</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold animate-pulse">
                      📚
                    </div>
                    <h6 className="font-bold text-green-900 dark:text-green-100">Data Library</h6>
                    <p className="text-sm text-green-700 dark:text-green-300">Information storage</p>
                  </div>
                </div>

                {/* Request Symphony */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600 mb-6">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    🎭 The Request Symphony
                  </h6>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">🌐 Client:</span>
                      <span className="text-slate-700 dark:text-slate-300">"I need user information!"</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-400">📡 HTTP:</span>
                      <span className="text-slate-700 dark:text-slate-300">"What kind of request?"</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-600 dark:text-cyan-400">🎯 Client:</span>
                      <span className="text-slate-700 dark:text-slate-300">"GET /users/123"</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-600 dark:text-green-400">✅ Gateway:</span>
                      <span className="text-slate-700 dark:text-slate-300">"Access Granted!"</span>
                    </div>
                  </div>
                </div>

                {/* Resource Dance */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600 mb-6">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    💃 The Resource Dance
                  </h6>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                      <div className="text-2xl mb-1">🎭</div>
                      <div className="font-bold text-blue-900 dark:text-blue-100">GET</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">"Show me something"</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <div className="text-2xl mb-1">🎤</div>
                      <div className="font-bold text-green-900 dark:text-green-100">POST</div>
                      <div className="text-xs text-green-700 dark:text-green-300">"Create something new"</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                      <div className="text-2xl mb-1">✏️</div>
                      <div className="font-bold text-orange-900 dark:text-orange-100">PUT</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">"Replace everything"</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                      <div className="text-2xl mb-1">🔧</div>
                      <div className="font-bold text-purple-900 dark:text-purple-100">PATCH</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">"Just fix this part"</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                      <div className="text-2xl mb-1">🗑️</div>
                      <div className="font-bold text-red-900 dark:text-red-100">DELETE</div>
                      <div className="text-xs text-red-700 dark:text-red-300">"Remove it forever"</div>
                    </div>
                    <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                      <div className="text-2xl mb-1">🔍</div>
                      <div className="font-bold text-indigo-900 dark:text-indigo-100">HEAD</div>
                      <div className="text-xs text-indigo-700 dark:text-indigo-300">"Check status only"</div>
                    </div>
                  </div>
                </div>

                {/* RESTful Circus */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    🎪 The RESTful Circus - Three Rings of Excellence
                  </h6>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20 rounded-lg">
                      <h6 className="font-bold text-rose-900 dark:text-rose-100 mb-2 flex items-center gap-2">
                        🎪 Ring 1: Statelessness
                      </h6>
                      <ul className="text-sm text-rose-700 dark:text-rose-300 space-y-1">
                        <li>• Every request is a new act</li>
                        <li>• No memory of past performances</li>
                        <li>• Each visitor gets fresh treatment</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg">
                      <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                        🎭 Ring 2: Uniform Interface
                      </h6>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Same rules for everyone</li>
                        <li>• Standardized communication</li>
                        <li>• Predictable responses</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-lg">
                      <h6 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                        🎨 Ring 3: Resource-Based
                      </h6>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Everything is a resource</li>
                        <li>• Nouns, not verbs</li>
                        <li>• /users/123 not /getUser?id=123</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: HTTP Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Network className="w-7 h-7" />
              HTTP Methods
            </CardTitle>
            <CardDescription className="text-base">
              Understanding RESTful HTTP methods and their usage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* GET Method */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  GET Method
                </h4>
                <div className="space-y-3">
                  <p className="text-green-800 dark:text-green-200">
                    Retrieve data from the server. Safe and idempotent operation.
                  </p>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-green-300 dark:border-green-600">
                    <code className="text-xs text-green-800 dark:text-green-200">
                      GET /api/users GET /api/users/123
                    </code>
                  </div>
                  <ul className="text-sm text-green-700 dark:text-green-300">
                    <li>• Retrieves resource data</li>
                    <li>• Safe operation (no side effects)</li>
                    <li>• Can be cached</li>
                    <li>• Idempotent</li>
                  </ul>
                </div>
              </div>

              {/* POST Method */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  POST Method
                </h4>
                <div className="space-y-3">
                  <p className="text-blue-800 dark:text-blue-200">
                    Create new resource on the server. Not idempotent.
                  </p>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-300 dark:border-blue-600">
                    <code className="text-xs text-blue-800 dark:text-blue-200">
                      POST /api/users POST /api/products
                    </code>
                  </div>
                  <ul className="text-sm text-blue-700 dark:text-blue-300">
                    <li>• Creates new resource</li>
                    <li>• Not idempotent</li>
                    <li>• Request body contains data</li>
                    <li>• Returns 201 Created on success</li>
                  </ul>
                </div>
              </div>

              {/* PUT Method */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
                  <Edit className="w-5 h-5" />
                  PUT Method
                </h4>
                <div className="space-y-3">
                  <p className="text-orange-800 dark:text-orange-200">
                    Update entire resource or create if not exists. Idempotent.
                  </p>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-orange-300 dark:border-orange-600">
                    <code className="text-xs text-orange-800 dark:text-orange-200">
                      PUT /api/users/123 PUT /api/products/456
                    </code>
                  </div>
                  <ul className="text-sm text-orange-700 dark:text-orange-300">
                    <li>• Updates entire resource</li>
                    <li>• Idempotent operation</li>
                    <li>• Replaces existing data</li>
                    <li>• Can create resource if not exists</li>
                  </ul>
                </div>
              </div>

              {/* DELETE Method */}
              <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                  <Trash className="w-5 h-5" />
                  DELETE Method
                </h4>
                <div className="space-y-3">
                  <p className="text-red-800 dark:text-red-200">
                    Remove resource from server. Idempotent operation.
                  </p>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-red-300 dark:border-red-600">
                    <code className="text-xs text-red-800 dark:text-red-200">
                      DELETE /api/users/123 DELETE /api/products/456
                    </code>
                  </div>
                  <ul className="text-sm text-red-700 dark:text-red-300">
                    <li>• Removes resource</li>
                    <li>• Idempotent operation</li>
                    <li>• Returns 204 No Content</li>
                    <li>• Permanent deletion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Methods */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Additional HTTP Methods</h5>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">PATCH</h6>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Partial update of resource. More efficient than PUT for partial changes.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">HEAD</h6>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    Like GET but returns only headers, no body. Used for metadata.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">OPTIONS</h6>
                  <p className="text-sm text-teal-800 dark:text-teal-200">
                    Returns allowed HTTP methods for a resource. CORS support.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: HTTP Status Codes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <MessageSquare className="w-7 h-7" />
              HTTP Status Codes
            </CardTitle>
            <CardDescription className="text-base">
              Understanding response status codes and their meanings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Success Codes */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Success Codes (2xx)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-green-300 dark:border-green-600">
                    <span className="font-mono text-sm text-green-800 dark:text-green-200">200 OK</span>
                    <span className="text-sm text-green-700 dark:text-green-300">Request successful</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-green-300 dark:border-green-600">
                    <span className="font-mono text-sm text-green-800 dark:text-green-200">201 Created</span>
                    <span className="text-sm text-green-700 dark:text-green-300">Resource created</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-green-300 dark:border-green-600">
                    <span className="font-mono text-sm text-green-800 dark:text-green-200">204 No Content</span>
                    <span className="text-sm text-green-700 dark:text-green-300">Success, no body</span>
                  </div>
                </div>
              </div>

              {/* Client Error Codes */}
              <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Client Error Codes (4xx)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-red-300 dark:border-red-600">
                    <span className="font-mono text-sm text-red-800 dark:text-red-200">400 Bad Request</span>
                    <span className="text-sm text-red-700 dark:text-red-300">Invalid request</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-red-300 dark:border-red-600">
                    <span className="font-mono text-sm text-red-800 dark:text-red-200">401 Unauthorized</span>
                    <span className="text-sm text-red-700 dark:text-red-300">Authentication required</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-red-300 dark:border-red-600">
                    <span className="font-mono text-sm text-red-800 dark:text-red-200">404 Not Found</span>
                    <span className="text-sm text-red-700 dark:text-red-300">Resource not found</span>
                  </div>
                </div>
              </div>

              {/* Server Error Codes */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
                  <Bug className="w-5 h-5" />
                  Server Error Codes (5xx)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-orange-300 dark:border-orange-600">
                    <span className="font-mono text-sm text-orange-800 dark:text-orange-200">500 Internal Error</span>
                    <span className="text-sm text-orange-700 dark:text-orange-300">Server error</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-orange-300 dark:border-orange-600">
                    <span className="font-mono text-sm text-orange-800 dark:text-orange-200">502 Bad Gateway</span>
                    <span className="text-sm text-orange-700 dark:text-orange-300">Invalid response</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-orange-300 dark:border-orange-600">
                    <span className="font-mono text-sm text-orange-800 dark:text-orange-200">503 Service Unavailable</span>
                    <span className="text-sm text-orange-700 dark:text-orange-300">Server down</span>
                  </div>
                </div>
              </div>

              {/* Information Codes */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Information Codes (1xx)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-blue-300 dark:border-blue-600">
                    <span className="font-mono text-sm text-blue-800 dark:text-blue-200">100 Continue</span>
                    <span className="text-sm text-blue-700 dark:text-blue-300">Continue request</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded border border-blue-300 dark:border-blue-600">
                    <span className="font-mono text-sm text-blue-800 dark:text-blue-200">101 Switching Protocols</span>
                    <span className="text-sm text-blue-700 dark:text-blue-300">Protocol upgrade</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: REST API Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Star className="w-7 h-7" />
              REST API Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Guidelines for designing and consuming REST APIs effectively
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
                  <span>Use nouns for resource names (not verbs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use plural nouns for collections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use HTTP status codes correctly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Version your APIs (/api/v1/users)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use proper error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement pagination for large datasets</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't use verbs in endpoint names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid sending passwords in URLs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore HTTP status codes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid nested resources deeper than 2 levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't use session management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid inconsistent response formats</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: API Request/Response Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Code className="w-7 h-7" />
              API Request/Response Example
            </CardTitle>
            <CardDescription className="text-base">
              Practical examples of REST API requests and responses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Request Example */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">GET Request Example</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`GET /api/v1/users?page=1&limit=10 HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
Accept: application/json

# Response
HTTP/1.1 200 OK
Content-Type: application/json
X-Total-Count: 100

{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}`}</pre>
                </div>
              </div>

              {/* POST Request Example */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">POST Request Example</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`POST /api/v1/users HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "securePassword123"
}

# Response
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/v1/users/123

{
  "id": 123,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}`}</pre>
                </div>
              </div>
            </div>

            {/* Error Response Example */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Error Response Example</h5>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User with ID 999 not found",
    "details": {
      "user_id": 999,
      "timestamp": "2024-01-15T10:30:00Z"
    }
  },
  "request_id": "req_123456789"
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30">
          <Server className="h-4 w-4 text-cyan-600" />
          <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-cyan-800 dark:text-cyan-200">
            <ul className="space-y-2 mt-2">
              <li>• REST APIs use standard HTTP methods for CRUD operations</li>
              <li>• HTTP status codes indicate the result of API requests</li>
              <li>• RESTful design emphasizes stateless communication</li>
              <li>• Proper API design follows consistent naming conventions</li>
              <li>• Error handling and response consistency are crucial</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Topic Navigation */}
        <TopicNavigation 
          currentTopic={currentTopic}
          language={language}
        />
      </div>
    </div>
  );
}
