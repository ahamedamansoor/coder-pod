import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Clock,
  Activity,
  Timer,
  Play,
  RefreshCw,
  Globe,
  Network,
  Download,
  Code,
  BarChart3,
  Zap,
  Eye,
  Layers,
  TrendingUp,
  ArrowRight,
  Pause,
  CheckCircle
} from 'lucide-react';

export default function NavigationTimingAPIComponent() {
  const [activePhase, setActivePhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentMetric, setCurrentMetric] = useState<string | null>(null);

  const navigationPhases = [
    {
      id: 'network',
      title: 'Network Phase',
      description: 'DNS lookup, TCP connection, SSL handshake',
      icon: Network,
      color: 'bg-blue-500',
      duration: 180,
      subPhases: [
        { name: 'DNS Lookup', duration: 20, color: 'bg-blue-300' },
        { name: 'TCP Connect', duration: 80, color: 'bg-blue-500' },
        { name: 'SSL Handshake', duration: 80, color: 'bg-blue-700' }
      ]
    },
    {
      id: 'request',
      title: 'Request Phase', 
      description: 'HTTP request sent to server',
      icon: Download,
      color: 'bg-purple-500',
      duration: 120,
      subPhases: [
        { name: 'Request Sent', duration: 120, color: 'bg-purple-500' }
      ]
    },
    {
      id: 'response',
      title: 'Response Phase',
      description: 'Server processing and response',
      icon: Download,
      color: 'bg-green-500',
      duration: 250,
      subPhases: [
        { name: 'TTFB', duration: 150, color: 'bg-green-400' },
        { name: 'Download', duration: 100, color: 'bg-green-600' }
      ]
    },
    {
      id: 'processing',
      title: 'DOM Processing',
      description: 'HTML parsing, DOM construction',
      icon: Code,
      color: 'bg-orange-500',
      duration: 200,
      subPhases: [
        { name: 'DOM Parsing', duration: 120, color: 'bg-orange-400' },
        { name: 'CSS Parsing', duration: 80, color: 'bg-orange-600' }
      ]
    },
    {
      id: 'rendering',
      title: 'Rendering Phase',
      description: 'Layout, paint, and composite',
      icon: Eye,
      color: 'bg-pink-500',
      duration: 150,
      subPhases: [
        { name: 'Layout', duration: 60, color: 'bg-pink-400' },
        { name: 'Paint', duration: 90, color: 'bg-pink-600' }
      ]
    }
  ];

  const keyMetrics = [
    { name: 'TTFB', description: 'Time to First Byte', formula: 'responseStart - requestStart' },
    { name: 'FCP', description: 'First Contentful Paint', formula: 'paintStart - navigationStart' },
    { name: 'LCP', description: 'Largest Contentful Paint', formula: 'loadEventEnd - navigationStart' },
    { name: 'DOM Ready', description: 'DOM Content Loaded', formula: 'domContentLoadedEventEnd - navigationStart' }
  ];

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        if (activePhase < navigationPhases.length - 1) {
          setActivePhase(activePhase + 1);
        } else {
          setIsAnimating(false);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, activePhase]);

  const startAnimation = () => {
    setActivePhase(0);
    setIsAnimating(true);
    setCurrentMetric(null);
  };

  const totalTime = navigationPhases.reduce((sum, phase) => sum + phase.duration, 0);
  let accumulatedTime = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20">
      <PageHeader
        title="Navigation Timing API"
        description="Master the Navigation Timing API to analyze page load performance, measure critical metrics, and optimize web application loading times with detailed timing breakdowns"
        icon={Clock}
        colorTheme="purple"
        badges={[
          { label: 'Navigation Timing', variant: 'secondary' },
          { label: 'Page Load Metrics', variant: 'secondary' },
          { label: 'Performance Analysis', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-500" />
            Navigation Timing API
          </CardTitle>
          <CardDescription>
            Visualize page load performance with detailed timing breakdowns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Enhanced Timeline Visualization */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Timer className="w-5 h-5 text-purple-500" />
                Page Load Timeline
              </h3>

              {/* Interactive Timeline */}
              <div className="relative bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
                {/* Timeline Header */}
                <div className="flex justify-between mb-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span>0ms</span>
                  <span>300ms</span>
                  <span>600ms</span>
                  <span>900ms</span>
                  <span>{totalTime}ms</span>
                </div>

                {/* Phase Bars */}
                <div className="relative h-24 mb-6">
                  <div className="absolute inset-0 flex">
                    {navigationPhases.map((phase, index) => {
                      accumulatedTime += phase.duration;
                      const startTime = accumulatedTime - phase.duration;
                      const isActive = activePhase >= index;
                      const Icon = phase.icon;
                      
                      return (
                        <div
                          key={phase.id}
                          className={`relative flex-1 transition-all duration-700 cursor-pointer group ${
                            isActive ? 'opacity-100' : 'opacity-30'
                          }`}
                          style={{ marginLeft: index === 0 ? 0 : '-1px' }}
                          onClick={() => setCurrentMetric(phase.title)}
                        >
                          <div className={`h-full ${phase.color} transition-all duration-700 ${
                            isActive ? 'shadow-lg' : ''
                          }`} />
                          
                          {/* Phase Label */}
                          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-700 ${
                            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}>
                            <div className="bg-white dark:bg-slate-800 px-3 py-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
                              <div className="flex items-center gap-2 mb-1">
                                <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                <span className="text-xs font-semibold">{phase.title}</span>
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">
                                {phase.duration}ms
                              </div>
                            </div>
                          </div>

                          {/* Sub-phase breakdown on hover */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 min-w-48">
                              <div className="text-xs font-semibold mb-2">{phase.title}</div>
                              <div className="space-y-1">
                                {phase.subPhases.map((subPhase, subIndex) => (
                                  <div key={subIndex} className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                      <div className={`w-2 h-2 rounded ${subPhase.color}`} />
                                      <span>{subPhase.name}</span>
                                    </div>
                                    <span className="font-mono">{subPhase.duration}ms</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Playhead */}
                  {isAnimating && (
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 transition-all duration-1000"
                      style={{
                        left: `${(activePhase / navigationPhases.length) * 100}%`
                      }}
                    >
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full shadow-lg" />
                    </div>
                  )}
                </div>

                {/* Phase Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Current Phase</h4>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-2">
                        {(() => {
                          const Icon = navigationPhases[activePhase]?.icon || Clock;
                          return <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
                        })()}
                        <div>
                          <div className="font-medium">{navigationPhases[activePhase]?.title}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {navigationPhases[activePhase]?.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Duration: {navigationPhases[activePhase]?.duration}ms
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {keyMetrics.map((metric) => (
                        <div 
                          key={metric.name}
                          className={`p-2 rounded border cursor-pointer transition-all ${
                            currentMetric === metric.name
                              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900'
                          }`}
                          onClick={() => setCurrentMetric(metric.name)}
                        >
                          <div className="font-medium text-sm">{metric.name}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {metric.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-6 flex justify-center gap-2">
                  <Button onClick={startAnimation} className="gap-2">
                    {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isAnimating ? 'Pause' : 'Start Animation'}
                  </Button>
                  <Button onClick={() => setActivePhase(0)} variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>

            {/* Performance Metrics Dashboard */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Performance Metrics</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="TTFB"
                  value="150ms"
                  description="Time to First Byte"
                  status="good"
                  icon={<Timer className="w-4 h-4" />}
                />
                <MetricCard
                  title="FCP"
                  value="380ms"
                  description="First Contentful Paint"
                  status="warning"
                  icon={<Eye className="w-4 h-4" />}
                />
                <MetricCard
                  title="LCP"
                  value="1.2s"
                  description="Largest Contentful Paint"
                  status="good"
                  icon={<Layers className="w-4 h-4" />}
                />
                <MetricCard
                  title="DOM Ready"
                  value="680ms"
                  description="DOM Content Loaded"
                  status="good"
                  icon={<CheckCircle className="w-4 h-4" />}
                />
              </div>
            </div>

            {/* Implementation Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Implementation Examples</h3>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-400">JavaScript - Navigation Timing</span>
                      <Badge variant="outline" className="text-xs">API</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`// Get navigation timing data
const navigation = performance.getEntriesByType(
  "navigation"
)[0];

// Calculate key metrics
const timing = {
  // Network metrics
  dnsLookup: navigation.domainLookupEnd - 
    navigation.domainLookupStart,
  tcpConnect: navigation.connectEnd - 
    navigation.connectStart,
  
  // Server metrics
  ttfb: navigation.responseStart - 
    navigation.requestStart,
  
  // Processing metrics
  domInteractive: navigation.domInteractive - 
    navigation.navigationStart,
  domComplete: navigation.domComplete - 
    navigation.navigationStart,
  
  // Load metrics
  loadComplete: navigation.loadEventEnd - 
    navigation.navigationStart
};

console.log('Page Load Time:', timing.loadComplete + 'ms');`}</code>
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

# Get navigation timing via JavaScript
timing_script = """
const navigation = performance.getEntriesByType("navigation")[0];
return {
  ttfb: navigation.responseStart - navigation.requestStart,
  domReady: navigation.domContentLoadedEventEnd - navigation.navigationStart,
  loadTime: navigation.loadEventEnd - navigation.navigationStart
};
"""

timing_data = driver.execute_script(timing_script)

# Assert performance thresholds
assert timing_data['ttfb'] < 200, "TTFB too slow"
assert timing_data['loadTime'] < 3000, "Page load too slow"

print(f"TTFB: {timing_data['ttfb']}ms")
print(f"Load Time: {timing_data['loadTime']}ms")`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Performance Optimization Tips
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-800 dark:text-purple-200">
                <div>
                  <h5 className="font-medium mb-2">Network Optimization</h5>
                  <ul className="space-y-1">
                    <li>• Minimize DNS lookups with consistent domains</li>
                    <li>• Use HTTP/2 for multiplexed connections</li>
                    <li>• Implement proper caching strategies</li>
                    <li>• Compress and optimize resources</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Rendering Optimization</h5>
                  <ul className="space-y-1">
                    <li>• Minimize DOM size and complexity</li>
                    <li>• Optimize CSS delivery and critical path</li>
                    <li>• Use efficient layout and paint operations</li>
                    <li>• Implement lazy loading for off-screen content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTitle>Understanding Navigation Timing</AlertTitle>
        <AlertDescription>
          The Navigation Timing API provides detailed timing information for each phase of page loading. 
          Use these metrics to identify performance bottlenecks and optimize user experience.
        </AlertDescription>
      </Alert>
      </div>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  description, 
  status, 
  icon 
}: { 
  title: string, 
  value: string, 
  description: string, 
  status: 'good' | 'warning' | 'critical',
  icon: React.ReactNode 
}) {
  const statusColors = {
    good: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
    warning: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
    critical: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
  };

  return (
    <div className={`p-4 rounded-lg border ${statusColors[status]}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>
        <span className="text-lg font-mono">{value}</span>
      </div>
      <div className="text-xs text-slate-600 dark:text-slate-400">
        {description}
      </div>
    </div>
  );
}

function Upload({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
