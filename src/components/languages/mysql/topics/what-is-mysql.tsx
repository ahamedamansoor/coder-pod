'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, Server, Globe, Code, Users, Zap, Shield, TrendingUp, Clock, Award,
  CheckCircle, Info, Lightbulb, ArrowRight, FileCode, Layers, AlertCircle 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function WhatIsMysql() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Database}
        category="MySQL · Fundamentals"
        title="What is MySQL?"
        description="Master the world's most popular open-source relational database and power modern applications"
        colorTheme="blue"
      />

      {/* What is MySQL? */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Database className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is MySQL?</CardTitle>
              <CardDescription className="text-base">The world's most popular open-source database</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">MySQL = My + SQL</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              MySQL is an open-source <strong>relational database management system (RDBMS)</strong> that combines "My" (named after co-founder 
              Michael "Monty" Widenius's daughter) and "SQL" (Structured Query Language) to create a powerful, reliable database solution.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg">Relational Database</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Organizes data into <strong>tables</strong> with rows and columns, establishing <strong>relationships</strong> between different data entities
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-2 border-blue-300 dark:border-blue-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">Client-Server</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Multi-threaded, multi-user database server that handles <strong>concurrent connections</strong> efficiently
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Globe, title: 'Popular', desc: 'Powers Facebook, YouTube, WordPress' },
              { icon: Shield, title: 'Reliable', desc: 'ACID compliant, transactional' },
              { icon: Zap, title: 'Fast', desc: 'Optimized for read-heavy operations' },
              { icon: Users, title: 'Open Source', desc: 'Free with active community' }
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

      {/* Key Features */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Key Features</CardTitle>
              <CardDescription className="text-base">What makes MySQL the preferred choice for developers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
              <h3 className="font-semibold mb-2 text-blue-600">🌐 Open Source</h3>
              <p className="text-sm text-muted-foreground">
                Free to use, modify, and distribute under the GPL license with active community support
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-colors">
              <h3 className="font-semibold mb-2 text-green-600">💻 Cross-Platform</h3>
              <p className="text-sm text-muted-foreground">
                Runs on Windows, Linux, macOS, and various Unix systems without modification
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
              <h3 className="font-semibold mb-2 text-purple-600">⚡ High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for read-heavy operations with query caching and indexing capabilities
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-colors">
              <h3 className="font-semibold mb-2 text-orange-600">📈 Scalable</h3>
              <p className="text-sm text-muted-foreground">
                Handles everything from small applications to massive enterprise systems with replication
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-600 transition-colors">
              <h3 className="font-semibold mb-2 text-red-600">🔒 Secure</h3>
              <p className="text-sm text-muted-foreground">
                Advanced security features including SSL/TLS encryption, access control, and audit logging
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors">
              <h3 className="font-semibold mb-2 text-cyan-600">🔧 Flexible Storage</h3>
              <p className="text-sm text-muted-foreground">
                Multiple storage engines (InnoDB, MyISAM, Memory) for different use cases and performance needs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MySQL Ecosystem */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">MySQL Ecosystem</CardTitle>
              <CardDescription className="text-base">Complete toolkit for database development and management</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold mb-3">Core Components</h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <h4 className="font-medium text-sm text-blue-600 mb-1">MySQL Server</h4>
                <p className="text-sm text-muted-foreground">The main database engine that handles data storage, retrieval, and management</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-green-600 mb-1">MySQL Client</h4>
                <p className="text-sm text-muted-foreground">Command-line interface for interacting with the database server</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-purple-600 mb-1">Connectors & APIs</h4>
                <p className="text-sm text-muted-foreground">Official drivers for Python, Java, PHP, Node.js, C++, and more</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-orange-600 mb-1">MySQL Workbench</h4>
                <p className="text-sm text-muted-foreground">Visual tool for database design, development, and administration</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* History Timeline */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">MySQL History Timeline</CardTitle>
              <CardDescription className="text-base">The journey of the world's favorite database</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            <div className="space-y-4">
              <div className="flex gap-4 relative">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">95</div>
                <div className="flex-1">
                  <div className="font-semibold">1995 - MySQL AB Founded</div>
                  <p className="text-sm text-muted-foreground">Michael "Monty" Widenius, David Axmark, and Allan Larsson founded MySQL AB in Sweden</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">08</div>
                <div className="flex-1">
                  <div className="font-semibold">2008 - Sun Microsystems Acquisition</div>
                  <p className="text-sm text-muted-foreground">Sun Microsystems acquired MySQL AB for $1 billion, recognizing MySQL's strategic importance</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">10</div>
                <div className="flex-1">
                  <div className="font-semibold">2010 - Oracle Acquisition</div>
                  <p className="text-sm text-muted-foreground">Oracle Corporation acquired Sun Microsystems, including MySQL, leading to community concerns</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">10</div>
                <div className="flex-1">
                  <div className="font-semibold">2010 - MariaDB Fork Created</div>
                  <p className="text-sm text-muted-foreground">Monty Widenius created MariaDB as a community-driven fork, ensuring open-source MySQL development</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">18</div>
                <div className="flex-1">
                  <div className="font-semibold">2018 - MySQL 8.0 Released</div>
                  <p className="text-sm text-muted-foreground">Major release with window functions, CTEs, and enhanced performance</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Applications */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Real-World Applications</CardTitle>
              <CardDescription className="text-base">Powering the world's largest websites and applications</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Social Media & Content
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Facebook (user profiles, posts, relationships)</li>
                <li>• Twitter (tweets, followers, timelines)</li>
                <li>• WordPress (blogs, comments, users)</li>
                <li>• YouTube (video metadata, comments, playlists)</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Server className="w-5 h-5 text-green-600" />
                E-commerce & Business
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Shopify (stores, products, orders)</li>
                <li>• Netflix (catalog, user preferences, viewing history)</li>
                <li>• Booking.com (hotels, reservations, reviews)</li>
                <li>• Uber (rides, drivers, payments)</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600" />
                Data & Analytics
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Application logging and monitoring</li>
                <li>• Business intelligence and reporting</li>
                <li>• User behavior analytics</li>
                <li>• Financial transaction processing</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-600" />
                Enterprise Systems
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Customer relationship management (CRM)</li>
                <li>• Enterprise resource planning (ERP)</li>
                <li>• Human resources management</li>
                <li>• Supply chain and inventory systems</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Learn MySQL */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Why Learn MySQL?</CardTitle>
              <CardDescription className="text-base">Essential skills for modern software development</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🚀 Career Opportunities</h3>
              <p className="text-sm text-green-800 dark:text-green-200">
                MySQL skills are in high demand with millions of job openings for database administrators, backend developers, and data engineers
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📚 Foundation for Other Skills</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Understanding MySQL provides a solid foundation for learning other databases, data engineering, and cloud technologies
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🌐 Universal Standard</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                SQL skills transfer across different database systems and are essential for modern software development
              </p>
            </div>
            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Problem-Solving Skills</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Database design and optimization teach valuable problem-solving and analytical thinking skills
              </p>
            </div>
          </div>
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
                title: 'Powerful RDBMS',
                desc: 'MySQL is a robust, open-source relational database management system used worldwide'
              },
              {
                icon: CheckCircle,
                title: 'Industry Standard',
                desc: 'Powers major websites like Facebook, YouTube, WordPress, and countless enterprise applications'
              },
              {
                icon: CheckCircle,
                title: 'Comprehensive Features',
                desc: 'Offers high performance, scalability, security, and flexible storage engines'
              },
              {
                icon: CheckCircle,
                title: 'Career Essential',
                desc: 'MySQL skills are highly valued and open doors to numerous tech career opportunities'
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
        <Zap className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-xl text-blue-900 dark:text-blue-100">Ready to Start Your MySQL Journey?</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <p className="mb-3">
            Now that you understand what MySQL is, you're ready to dive deeper into database concepts:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Badge variant="outline" className="justify-center">Database Fundamentals</Badge>
            <Badge variant="outline" className="justify-center">MySQL Installation</Badge>
            <Badge variant="outline" className="justify-center">Basic SQL Syntax</Badge>
            <Badge variant="outline" className="justify-center">Data Types</Badge>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
