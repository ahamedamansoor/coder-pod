import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Activity,
  BarChart3,
  Clock,
  Code,
  Download,
  FileText,
  Image,
  Layout,
  Network,
  Play,
  RefreshCw,
  Server,
  Zap,
  Eye,
  Layers,
  TrendingUp,
  ArrowRight,
  Pause,
  Timer,
  Filter,
  Search
} from 'lucide-react';

export default function ResourceTimingComponent() {
  const [activeResource, setActiveResource] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'critical' | 'non-critical'>('all');
  const [viewMode, setViewMode] = useState<'waterfall' | 'detailed'>('waterfall');

  // Enhanced resource data with more realistic timing
  const resources = [
    {
      name: 'index.html',
      type: 'document',
      size: '2.4 KB',
      priority: 'high',
      startTime: 0,
      duration: 150,
      phases: {
        queue: 10,
        dns: 20,
        connect: 30,
        request: 40,
        response: 50
      },
      status: 200,
      icon: FileText,
      color: 'bg-blue-500',
      critical: true
    },
    {
      name: 'styles.css',
      type: 'stylesheet',
      size: '45.2 KB',
      priority: 'high',
      startTime: 100,
      duration: 280,
      phases: {
        queue: 5,
        dns: 0,
        connect: 0,
        request: 60,
        response: 215
      },
      status: 200,
      icon: Layout,
      color: 'bg-purple-500',
      critical: true
    },
    {
      name: 'app.js',
      type: 'script',
      size: '128.7 KB',
      priority: 'high',
      startTime: 150,
      duration: 450,
      phases: {
        queue: 15,
        dns: 0,
        connect: 0,
        request: 80,
        response: 355
      },
      status: 200,
      icon: Code,
      color: 'bg-yellow-500',
      critical: true
    },
    {
      name: 'hero-image.jpg',
      type: 'image',
      size: '256.3 KB',
      priority: 'low',
      startTime: 200,
      duration: 680,
      phases: {
        queue: 25,
        dns: 0,
        connect: 0,
        request: 120,
        response: 535
      },
      status: 200,
      icon: Image,
      color: 'bg-green-500',
      critical: false
    },
    {
      name: 'api/data.json',
      type: 'xhr',
      size: '12.8 KB',
      priority: 'medium',
      startTime: 400,
      duration: 220,
      phases: {
        queue: 8,
        dns: 0,
        connect: 0,
        request: 45,
        response: 167
      },
      status: 200,
      icon: Network,
      color: 'bg-orange-500',
      critical: true
    },
    {
      name: 'analytics.js',
      type: 'script',
      size: '18.5 KB',
      priority: 'low',
      startTime: 450,
      duration: 180,
      phases: {
        queue: 12,
        dns: 0,
        connect: 0,
        request: 35,
        response: 133
      },
      status: 200,
      icon: Code,
      color: 'bg-red-500',
      critical: false
    }
  ];

  const phaseColors = {
    queue: 'bg-slate-300 dark:bg-slate-700',
    dns: 'bg-blue-400 dark:bg-blue-600',
    connect: 'bg-yellow-400 dark:bg-yellow-600',
    request: 'bg-orange-400 dark:bg-orange-600',
    response: 'bg-green-500'
  };

  const maxTime = Math.max(...resources.map(r => r.startTime + r.duration));

  const filteredResources = resources.filter(resource => {
    if (filterType === 'critical') return resource.critical;
    if (filterType === 'non-critical') return !resource.critical;
    return true;
  });

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveResource(null);
  };

  const totalSize = filteredResources.reduce((sum, r) => {
    const sizeInKB = parseFloat(r.size);
    return sum + sizeInKB;
  }, 0);

  const totalDuration = Math.max(...filteredResources.map(r => r.startTime + r.duration));

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Resource Timing"
        description="Master the Resource Timing API to analyze resource loading performance, create detailed waterfall charts, and optimize web application asset delivery with comprehensive timing data"
        icon={BarChart3}
        category="Selenium · Performance Testing"
        colorTheme="green"
        badges={[
          { label: 'Resource Timing', variant: 'secondary' },
          { label: 'Waterfall Analysis', variant: 'secondary' },
          { label: 'Asset Optimization', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-green-500" />
            Resource Timing API
          </CardTitle>
          <CardDescription>
            Advanced waterfall analysis for detailed resource loading performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Enhanced Controls */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  Resource Loading Analysis
                </h3>
                <div className="flex items-center gap-2">
                  <Button onClick={startAnimation} size="sm" className="gap-2">
                    {isAnimating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    {isAnimating ? 'Analyzing...' : 'Start Analysis'}
                  </Button>
                </div>
              </div>

              {/* Filter and View Controls */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium">Filter:</span>
                  <div className="flex gap-1">
                    {[
                      { id: 'all', label: 'All Resources' },
                      { id: 'critical', label: 'Critical' },
                      { id: 'non-critical', label: 'Non-Critical' }
                    ].map((filter) => (
                      <Button
                        key={filter.id}
                        variant={filterType === filter.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterType(filter.id as any)}
                      >
                        {filter.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium">View:</span>
                  <div className="flex gap-1">
                    {[
                      { id: 'waterfall', label: 'Waterfall' },
                      { id: 'detailed', label: 'Detailed' }
                    ].map((view) => (
                      <Button
                        key={view.id}
                        variant={viewMode === view.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode(view.id as any)}
                      >
                        {view.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard
                  title="Total Resources"
                  value={filteredResources.length}
                  icon={<Layers className="w-4 h-4" />}
                />
                <StatCard
                  title="Total Size"
                  value={`${totalSize.toFixed(1)} KB`}
                  icon={<Download className="w-4 h-4" />}
                />
                <StatCard
                  title="Load Duration"
                  value={`${totalDuration}ms`}
                  icon={<Timer className="w-4 h-4" />}
                />
                <StatCard
                  title="Critical Path"
                  value={filteredResources.filter(r => r.critical).length}
                  icon={<Zap className="w-4 h-4" />}
                />
              </div>

              {/* Enhanced Waterfall Chart */}
              <div className="relative bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 overflow-x-auto">
                {/* Timeline Header */}
                <div className="flex mb-4 text-xs text-slate-500 dark:text-slate-400 font-mono sticky top-0 bg-white dark:bg-slate-950 z-10 pb-2">
                  <div className="w-56 flex-shrink-0">Resource</div>
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex justify-between">
                      {[0, 200, 400, 600, 800, 1000].map((time) => (
                        <span key={time}>{time}ms</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resource Bars */}
                <div className="space-y-2">
                  {filteredResources.map((resource, index) => {
                    const Icon = resource.icon;
                    const isActive = activeResource === index;
                    const originalIndex = resources.indexOf(resource);
                    
                    return (
                      <div
                        key={resource.name}
                        className={`flex items-center cursor-pointer transition-all duration-200 rounded-lg ${
                          isActive ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-900'
                        }`}
                        onClick={() => setActiveResource(isActive ? null : originalIndex)}
                      >
                        {/* Resource Info */}
                        <div className="w-56 flex-shrink-0 p-3 flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${resource.color} bg-opacity-20 flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium truncate">{resource.name}</span>
                              {resource.critical && (
                                <Badge variant="destructive" className="text-xs">Critical</Badge>
                              )}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {resource.size} • {resource.type} • {resource.duration}ms
                            </div>
                          </div>
                        </div>

                        {/* Timeline Bar */}
                        <div className="flex-1 h-10 relative">
                          {/* Background grid */}
                          <div className="absolute inset-0 flex">
                            {[0, 200, 400, 600, 800, 1000].map((time) => (
                              <div key={time} className="flex-1 border-r border-slate-100 dark:border-slate-800" />
                            ))}
                          </div>

                          {/* Resource Timeline */}
                          <div
                            className="absolute h-8 top-1 rounded overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md"
                            style={{
                              left: `${(resource.startTime / maxTime) * 100}%`,
                              width: `${(resource.duration / maxTime) * 100}%`,
                              opacity: isAnimating ? 0 : 1,
                              transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)'
                            }}
                          >
                            <div className="h-full flex">
                              {/* Phase Breakdown */}
                              <div 
                                className={phaseColors.queue}
                                style={{ width: `${(resource.phases.queue / resource.duration) * 100}%` }}
                                title="Queue"
                              />
                              <div 
                                className={phaseColors.dns}
                                style={{ width: `${(resource.phases.dns / resource.duration) * 100}%` }}
                                title="DNS"
                              />
                              <div 
                                className={phaseColors.connect}
                                style={{ width: `${(resource.phases.connect / resource.duration) * 100}%` }}
                                title="Connect"
                              />
                              <div 
                                className={phaseColors.request}
                                style={{ width: `${(resource.phases.request / resource.duration) * 100}%` }}
                                title="Request"
                              />
                              <div 
                                className={phaseColors.response}
                                style={{ width: `${(resource.phases.response / resource.duration) * 100}%` }}
                                title="Response"
                              />
                            </div>
                          </div>

                          {/* Duration Label */}
                          <div
                            className="absolute top-0 text-xs font-mono text-slate-600 dark:text-slate-400"
                            style={{
                              left: `${(resource.startTime / maxTime) * 100}%`,
                              opacity: isAnimating ? 0 : 1
                            }}
                          >
                            {resource.duration}ms
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Legend */}
                <div className="mt-6 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded" />
                    <span>Queue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 dark:bg-blue-600 rounded" />
                    <span>DNS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 dark:bg-yellow-600 rounded" />
                    <span>Connect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 dark:bg-orange-600 rounded" />
                    <span>Request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded" />
                    <span>Response</span>
                  </div>
                </div>
              </div>

              {/* Resource Details Panel */}
              {activeResource !== null && (
                <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Resource Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-medium mb-3 text-slate-600 dark:text-slate-400">Basic Information</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="font-medium">{resources[activeResource].name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">{resources[activeResource].type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span className="font-medium">{resources[activeResource].size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Priority:</span>
                          <span className="font-medium">{resources[activeResource].priority}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-3 text-slate-600 dark:text-slate-400">Timing Breakdown</h5>
                      <div className="space-y-2 text-sm">
                        {Object.entries(resources[activeResource].phases).map(([phase, duration]) => (
                          <div key={phase} className="flex justify-between">
                            <span className="capitalize">{phase}:</span>
                            <span className="font-medium">{duration}ms</span>
                          </div>
                        ))}
                        <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                          <span className="font-medium">Total:</span>
                          <span className="font-bold">{resources[activeResource].duration}ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Implementation Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Implementation Examples</h3>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-400">JavaScript - Resource Analysis</span>
                      <Badge variant="outline" className="text-xs">API</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`// Get all resource timing entries
const resources = performance.getEntriesByType('resource');

// Analyze critical resources
const criticalResources = resources.filter(r => 
  r.initiatorType === 'script' || 
  r.initiatorType === 'stylesheet' ||
  r.name.includes('.css')
);

// Find slow resources
const slowResources = resources.filter(r => 
  r.duration > 1000 // > 1 second
);

// Calculate total download time
const totalDownloadTime = resources.reduce((sum, r) => 
  sum + r.responseEnd - r.responseStart, 0
);

// Resource optimization suggestions
const optimization = {
  uncompressedImages: resources.filter(r => 
    r.initiatorType === 'image' && 
    r.transferSize > r.encodedBodySize * 1.5
  ),
  missingCache: resources.filter(r => 
    r.transferSize > 0 && 
    !r.responseHeaders?.includes('cache-control')
  )
};`}</code>
                    </pre>
                  </div>

                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-400">Python - Selenium Integration</span>
                      <Badge variant="outline" className="text-xs">CDP</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")

# Get resource timing data
resource_script = """
const resources = performance.getEntriesByType('resource');
return resources.map(r => ({
  name: r.name,
  duration: r.duration,
  size: r.transferSize,
  type: r.initiatorType,
  startTime: r.startTime
}));
"""

resources = driver.execute_script(resource_script)

# Performance assertions
total_resources = len(resources)
assert total_resources < 50, f"Too many resources: {total_resources}"

# Check for slow resources
slow_resources = [r for r in resources if r['duration'] > 1000]
assert len(slow_resources) == 0, f"Slow resources found: {slow_resources}"

# Analyze by type
scripts = [r for r in resources if r['type'] == 'script']
stylesheets = [r for r in resources if r['type'] == 'stylesheet']

print(f"Scripts: {len(scripts)}, Stylesheets: {len(stylesheets)}")`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Tips */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Resource Optimization Strategies
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800 dark:text-green-200">
                <div>
                  <h5 className="font-medium mb-2">Network Optimization</h5>
                  <ul className="space-y-1">
                    <li>• Enable HTTP/2 for multiplexing</li>
                    <li>• Implement resource bundling</li>
                    <li>• Use CDN for static assets</li>
                    <li>• Optimize TLS handshake</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Caching Strategy</h5>
                  <ul className="space-y-1">
                    <li>• Set proper cache headers</li>
                    <li>• Use service workers</li>
                    <li>• Implement browser caching</li>
                    <li>• Cache API responses</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Resource Optimization</h5>
                  <ul className="space-y-1">
                    <li>• Compress images and assets</li>
                    <li>• Minify CSS and JavaScript</li>
                    <li>• Remove unused resources</li>
                    <li>• Lazy load non-critical content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTitle>Advanced Resource Analysis</AlertTitle>
        <AlertDescription>
          Resource Timing API provides detailed insights into how each asset loads, enabling precise performance optimization. 
          Use waterfall analysis to identify bottlenecks and optimize critical rendering paths.
        </AlertDescription>
      </Alert>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string | number, icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {icon}
        </div>
        <div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{title}</div>
          <div className="text-lg font-semibold">{value}</div>
        </div>
      </div>
    </div>
  );
}
