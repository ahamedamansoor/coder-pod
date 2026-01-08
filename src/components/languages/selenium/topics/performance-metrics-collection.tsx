import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Activity, 
  BarChart3, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Play, 
  RefreshCw, 
  Server, 
  Timer,
  Zap,
  ArrowRight,
  Code,
  Monitor,
  Network,
  TrendingUp,
  Layers
} from 'lucide-react';

export default function PerformanceMetricsCollectionComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [isCollecting, setIsCollecting] = useState(false);
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    layout: 0,
    paint: 0,
    script: 0
  });

  const collectionSteps = [
    { 
      id: 'connect', 
      title: 'Connect to Browser', 
      description: 'Establish WebDriver connection',
      icon: Network,
      color: 'bg-blue-500'
    },
    { 
      id: 'enable', 
      title: 'Enable Performance', 
      description: 'Activate DevTools Performance domain',
      icon: Settings,
      color: 'bg-purple-500'
    },
    { 
      id: 'collect', 
      title: 'Collect Metrics', 
      description: 'Gather performance data from browser',
      icon: Database,
      color: 'bg-green-500'
    },
    { 
      id: 'analyze', 
      title: 'Analyze Data', 
      description: 'Process and interpret metrics',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const metricCategories = [
    {
      name: 'Rendering',
      metrics: ['Layout', 'Paint', 'Composite'],
      icon: Layout,
      color: 'text-blue-500'
    },
    {
      name: 'Scripting',
      metrics: ['Parse', 'Compile', 'Execute'],
      icon: Code,
      color: 'text-purple-500'
    },
    {
      name: 'System',
      metrics: ['CPU', 'Memory', 'Network'],
      icon: Monitor,
      color: 'text-green-500'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isCollecting && activeStep === 2) {
      // Simulate real-time metrics collection
      interval = setInterval(() => {
        setMetrics({
          cpu: Math.floor(Math.random() * 40) + 15,
          memory: Math.floor(Math.random() * 60) + 120,
          network: Math.floor(Math.random() * 20) + 5,
          layout: Math.floor(Math.random() * 15) + 2,
          paint: Math.floor(Math.random() * 25) + 8,
          script: Math.floor(Math.random() * 35) + 10
        });
      }, 800);
    } else if (!isCollecting) {
      setMetrics({ cpu: 0, memory: 0, network: 0, layout: 0, paint: 0, script: 0 });
    }

    return () => clearInterval(interval);
  }, [isCollecting, activeStep]);

  const nextStep = () => {
    if (activeStep < collectionSteps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(0);
      setIsCollecting(false);
    }
  };

  const startCollection = () => {
    setIsCollecting(true);
    setActiveStep(2);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Performance Metrics Collection"
        description="Master browser performance monitoring with Selenium and Chrome DevTools Protocol to collect detailed metrics and analyze application performance"
        icon={Activity}
        category="Selenium · Performance Testing"
        colorTheme="blue"
        badges={[
          { label: 'Performance Metrics', variant: 'secondary' },
          { label: 'Chrome DevTools', variant: 'secondary' },
          { label: 'Browser Monitoring', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            Performance Metrics Collection
          </CardTitle>
          <CardDescription>
            Master browser performance monitoring with Selenium and Chrome DevTools Protocol
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Enhanced Timeline Visualization */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-500" />
                Metrics Collection Architecture
              </h3>

              {/* Interactive Architecture Diagram */}
              <div className="relative bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
                {/* Architecture Components */}
                <div className="grid md:grid-cols-4 gap-4">
                  {collectionSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = activeStep === index;
                    
                    return (
                      <div
                        key={step.id}
                        className={`relative cursor-pointer transition-all duration-500 ${
                          isActive ? 'scale-105 z-10' : 'hover:scale-102'
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          isActive 
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-xl' 
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300'
                        }`}>
                          <div className="flex flex-col items-center text-center">
                            <div className={`p-3 rounded-lg ${step.color} bg-opacity-20 mb-3`}>
                              <Icon className={`w-6 h-6 ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-600 dark:text-slate-400'}`} />
                            </div>
                            <h4 className="font-semibold mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Connection Lines */}
                        {index < collectionSteps.length - 1 && (
                          <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                            <ArrowRight className={`w-6 h-6 ${isActive ? 'text-purple-500' : 'text-slate-400'}`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Data Flow Visualization */}
                {activeStep === 2 && (
                  <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-3">Real-time Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                      <MetricDisplay label="CPU" value={`${metrics.cpu}%`} color="text-blue-400" />
                      <MetricDisplay label="Memory" value={`${metrics.memory}MB`} color="text-green-400" />
                      <MetricDisplay label="Network" value={`${metrics.network}ms`} color="text-purple-400" />
                      <MetricDisplay label="Layout" value={`${metrics.layout}ms`} color="text-orange-400" />
                      <MetricDisplay label="Paint" value={`${metrics.paint}ms`} color="text-red-400" />
                      <MetricDisplay label="Script" value={`${metrics.script}ms`} color="text-yellow-400" />
                    </div>
                  </div>
                )}

                {/* Step Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium">
                  Step {activeStep + 1}: {collectionSteps[activeStep].title}
                </div>
              </div>

              {/* Control Panel */}
              <div className="mt-6 flex items-center justify-between">
                <div className="space-y-2">
                  <h4 className="font-semibold">Collection Process</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {collectionSteps[activeStep].description}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  {activeStep === 2 && (
                    <Button onClick={startCollection} variant="outline" size="sm" className="gap-2">
                      <Database className="w-4 h-4" />
                      {isCollecting ? 'Stop Collection' : 'Start Collection'}
                    </Button>
                  )}
                  <Button onClick={nextStep} size="sm" className="gap-2">
                    {activeStep === collectionSteps.length - 1 ? <RefreshCw className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    {activeStep === collectionSteps.length - 1 ? 'Restart' : 'Next Step'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Metrics Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Performance Metric Categories</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {metricCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.name} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
                          <Icon className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <h4 className="font-semibold">{category.name}</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                        {category.metrics.map((metric) => (
                          <li key={metric} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Implementation Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Implementation Examples</h3>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-300 dark:text-slate-400">Python - Chrome DevTools</span>
                      <Badge variant="outline" className="text-xs">CDP</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`from selenium import webdriver
from selenium.webdriver.common.by import By

# Enable performance logging
options = webdriver.ChromeOptions()
options.set_capability(
    'goog:loggingPrefs', 
    {'performance': 'ALL'}
)

driver = webdriver.Chrome(options)

# Enable Performance domain
driver.execute_cdp_cmd('Performance.enable', {})

# Collect metrics
metrics = driver.execute_cdp_cmd(
    'Performance.getMetrics', {}
)

# Get memory usage
memory = driver.execute_cdp_cmd(
    'Runtime.getHeapUsage', {}
)

print(f"Used Memory: {memory['usedSize']} bytes")`}</code>
                    </pre>
                  </div>

                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-300 dark:text-slate-400">JavaScript - Performance API</span>
                      <Badge variant="outline" className="text-xs">Browser</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`// Get navigation timing
const navigation = performance.getEntriesByType(
    "navigation"
)[0];

// Calculate key metrics
const pageLoadTime = navigation.loadEventEnd - 
    navigation.navigationStart;

const domReadyTime = navigation.domContentLoadedEventEnd - 
    navigation.navigationStart;

// Get resource timing
const resources = performance.getEntriesByType("resource");

// Memory usage (Chrome-specific)
if (performance.memory) {
    const memoryInfo = {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
    };
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Best Practices
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
                <div>
                  <h5 className="font-medium mb-2">Collection Strategy</h5>
                  <ul className="space-y-1">
                    <li>• Collect metrics at key test milestones</li>
                    <li>• Use consistent measurement points</li>
                    <li>• Monitor memory leaks during test execution</li>
                    <li>• Track performance trends over time</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Analysis Tips</h5>
                  <ul className="space-y-1">
                    <li>• Focus on user-perceived performance</li>
                    <li>• Correlate metrics with user actions</li>
                    <li>• Set performance baselines and thresholds</li>
                    <li>• Combine functional and performance data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTitle>Why Performance Metrics Matter</AlertTitle>
        <AlertDescription>
          Performance metrics help identify bottlenecks, track regressions, and ensure optimal user experience. 
          Integrating performance monitoring with functional tests provides comprehensive quality assurance.
        </AlertDescription>
      </Alert>
    </div>
    </div>
  );
}

function MetricDisplay({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-slate-800 p-2 rounded text-center">
      <div className={`text-xs font-mono ${color}`}>{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function Settings({ className }: { className?: string }) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}
