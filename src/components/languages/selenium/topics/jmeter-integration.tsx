import React, { useState } from 'react';
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
  Download,
  FileText,
  Globe,
  Layers,
  Play,
  RefreshCw,
  Server,
  Settings,
  Terminal,
  Users,
  Zap,
  ArrowRight,
  Code,
  Monitor,
  Network,
  TrendingUp,
  Timer,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function JMeterIntegrationComponent() {
  const [activeMode, setActiveMode] = useState<'functional' | 'load' | 'combined'>('combined');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const modes = [
    {
      id: 'functional' as const,
      title: 'Functional Testing',
      description: 'Selenium validates UI functionality',
      icon: Settings,
      color: 'bg-blue-500',
      details: ['UI interactions', 'Business logic', 'User flows', 'Cross-browser testing']
    },
    {
      id: 'load' as const,
      title: 'Load Testing',
      description: 'JMeter simulates user load',
      icon: Users,
      color: 'bg-green-500',
      details: ['Concurrent users', 'Stress testing', 'Volume testing', 'Scalability analysis']
    },
    {
      id: 'combined' as const,
      title: 'Combined Testing',
      description: 'Both tools work together',
      icon: Layers,
      color: 'bg-purple-500',
      details: ['Realistic scenarios', 'Performance under load', 'End-to-end validation', 'Comprehensive coverage']
    }
  ];

  const architectureComponents = [
    {
      id: 'test-controller',
      name: 'Test Controller',
      position: { x: 50, y: 10 },
      icon: Terminal,
      color: 'bg-purple-500',
      description: 'Orchestrates test execution and coordinates between tools'
    },
    {
      id: 'selenium-grid',
      name: 'Selenium Grid',
      position: { x: 10, y: 35 },
      icon: Monitor,
      color: 'bg-blue-500',
      description: 'Manages browser instances for functional testing'
    },
    {
      id: 'jmeter-engine',
      name: 'JMeter Engine',
      position: { x: 85, y: 35 },
      icon: Cpu,
      color: 'bg-green-500',
      description: 'Generates load and simulates multiple users'
    },
    {
      id: 'app-server',
      name: 'Application Server',
      position: { x: 50, y: 70 },
      icon: Server,
      color: 'bg-slate-600',
      description: 'Target application under test'
    },
    {
      id: 'database',
      name: 'Database',
      position: { x: 20, y: 85 },
      icon: Database,
      color: 'bg-orange-500',
      description: 'Data storage and persistence layer'
    },
    {
      id: 'monitoring',
      name: 'Monitoring',
      position: { x: 80, y: 85 },
      icon: BarChart3,
      color: 'bg-pink-500',
      description: 'Performance metrics and analytics'
    }
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 3000);
  };

  const getConnections = () => {
    const connections = [];
    
    if (activeMode === 'functional') {
      connections.push(
        { from: 'test-controller', to: 'selenium-grid', active: true },
        { from: 'selenium-grid', to: 'app-server', active: true },
        { from: 'app-server', to: 'database', active: true }
      );
    } else if (activeMode === 'load') {
      connections.push(
        { from: 'test-controller', to: 'jmeter-engine', active: true },
        { from: 'jmeter-engine', to: 'app-server', active: true },
        { from: 'app-server', to: 'database', active: true },
        { from: 'app-server', to: 'monitoring', active: true }
      );
    } else {
      connections.push(
        { from: 'test-controller', to: 'selenium-grid', active: true },
        { from: 'test-controller', to: 'jmeter-engine', active: true },
        { from: 'selenium-grid', to: 'app-server', active: true },
        { from: 'jmeter-engine', to: 'app-server', active: true },
        { from: 'app-server', to: 'database', active: true },
        { from: 'app-server', to: 'monitoring', active: true }
      );
    }
    
    return connections;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="JMeter Integration"
        description="Master advanced integration patterns for combining Selenium functional testing with JMeter load testing to create comprehensive performance validation strategies"
        icon={Zap}
        category="Selenium · Performance Testing"
        colorTheme="orange"
        badges={[
          { label: 'JMeter Integration', variant: 'secondary' },
          { label: 'Load Testing', variant: 'secondary' },
          { label: 'Performance Validation', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-500" />
            JMeter Integration
          </CardTitle>
          <CardDescription>
            Advanced integration patterns for combining Selenium functional testing with JMeter load testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Enhanced Mode Selection */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-500" />
                Testing Strategy Selection
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {modes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <div
                      key={mode.id}
                      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        activeMode === mode.id
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg scale-105'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                      }`}
                      onClick={() => setActiveMode(mode.id)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${mode.color} bg-opacity-20`}>
                          <Icon className={`w-5 h-5 text-${mode.color.replace('bg-', '').replace('-500', '-600')}`} />
                        </div>
                        <h4 className="font-semibold">{mode.title}</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {mode.description}
                      </p>
                      <div className="space-y-1">
                        {mode.details.map((detail, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                            {detail}
                          </div>
                        ))}
                      </div>
                      {activeMode === mode.id && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="w-5 h-5 text-purple-500" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Static Integration Flow Diagram */}
              <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-xl border border-purple-500/20 p-8 h-96 overflow-hidden">
                {/* Static Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 shadow-2xl border-2 border-purple-400 flex items-center justify-center">
                    <Layers className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-purple-300 text-center whitespace-nowrap">
                    Integration Hub
                  </div>
                </div>

                {/* Static Tool Components */}
                {[
                  { id: 'selenium', name: 'Selenium', icon: Monitor, color: 'from-blue-500 to-blue-700', angle: 0 },
                  { id: 'jmeter', name: 'JMeter', icon: Cpu, color: 'from-green-500 to-green-700', angle: 120 },
                  { id: 'app', name: 'App Server', icon: Server, color: 'from-orange-500 to-orange-700', angle: 240 }
                ].map((tool, index) => {
                  const Icon = tool.icon;
                  const radius = 120;
                  const x = 50 + radius * Math.cos((tool.angle - 90) * Math.PI / 180) / 4;
                  const y = 50 + radius * Math.sin((tool.angle - 90) * Math.PI / 180) / 4;
                  
                  return (
                    <div
                      key={tool.id}
                      className="absolute z-10"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${tool.color} shadow-xl border-2 border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white text-center whitespace-nowrap">
                        {tool.name}
                      </div>
                    </div>
                  );
                })}

                {/* Static Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[0, 120, 240].map((angle, index) => (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 30 * Math.cos((angle - 90) * Math.PI / 180)}%`}
                      y2={`${50 + 30 * Math.sin((angle - 90) * Math.PI / 180)}%`}
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  ))}
                </svg>

                {/* Status Indicators */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs font-medium text-slate-300">
                      Ready
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-xs font-medium text-slate-300">
                      {activeMode === 'functional' ? 'Functional Mode' : 
                       activeMode === 'load' ? 'Load Mode' : 'Combined Mode'}
                    </span>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="absolute bottom-4 right-4 bg-slate-800/80 backdrop-blur p-3 rounded-lg">
                  <div className="text-xs font-semibold text-purple-300 mb-2">Integration Metrics</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-xs text-slate-300">Selenium: Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-xs text-slate-300">JMeter: Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      <span className="text-xs text-slate-300">Server: Connected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Control Panel */}
              <div className="mt-6 flex items-center justify-between">
                <div className="space-y-2">
                  <h4 className="font-semibold">Active Strategy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {modes.find(m => m.id === activeMode)?.description}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={startSimulation} className="gap-2">
                    <Play className="w-4 h-4" />
                    {isSimulating ? 'Running...' : 'Start Simulation'}
                  </Button>
                  <Button onClick={() => setActiveComponent(null)} variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4" />
                    Reset View
                  </Button>
                </div>
              </div>
            </div>

            {/* Integration Patterns */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Integration Patterns</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Sequential Pattern
                  </h4>
                  <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <p>Run functional tests first, then load tests:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Execute Selenium UI tests</li>
                      <li>Validate application functionality</li>
                      <li>Run JMeter load tests</li>
                      <li>Analyze performance impact</li>
                    </ol>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Parallel Pattern
                  </h4>
                  <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <p>Run tests simultaneously for realistic load:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Start JMeter load generation</li>
                      <li>Execute Selenium UI tests</li>
                      <li>Monitor system performance</li>
                      <li>Collect comprehensive metrics</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Implementation Examples</h3>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-400">Python - Test Orchestration</span>
                      <Badge variant="outline" className="text-xs">Integration</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import subprocess
import time
from selenium import webdriver

class PerformanceTestSuite:
    def __init__(self):
        self.driver = webdriver.Chrome()
        
    def run_combined_test(self):
        # Start JMeter in non-blocking mode
        jmeter_process = subprocess.Popen([
            'jmeter', '-n', '-t', 'load_test.jmx',
            '-l', 'results.jtl', '-e', '-o', 'report'
        ])
        
        # Wait for JMeter to initialize
        time.sleep(5)
        
        # Run Selenium tests during load
        try:
            self.driver.get("https://app.com")
            # ... functional tests ...
            
            # Validate performance under load
            self.validate_performance_metrics()
            
        finally:
            # Stop JMeter
            jmeter_process.terminate()
            jmeter_process.wait()
            
    def validate_performance_metrics(self):
        # Check response times during load
        response_time = self.get_page_load_time()
        assert response_time < 2000, "Page too slow under load"`}</code>
                    </pre>
                  </div>

                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-400">JMeter Test Plan</span>
                      <Badge variant="outline" className="text-xs">XML</Badge>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`<!-- Enhanced JMeter Test Plan -->
<jmeterTestPlan>
  <hashTree>
    <ThreadGroup>
      <stringProp name="ThreadGroup.num_threads">100</stringProp>
      <stringProp name="ThreadGroup.ramp_time">30</stringProp>
      <stringProp name="ThreadGroup.duration">300</stringProp>
      <boolProp name="ThreadGroup.scheduler">true</boolProp>
    </ThreadGroup>
    
    <!-- HTTP Request Sampler -->
    <HTTPSamplerProxy>
      <stringProp name="HTTPSampler.domain">app.com</stringProp>
      <stringProp name="HTTPSampler.path">/api/users</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
    </HTTPSamplerProxy>
    
    <!-- Response Time Assertion -->
    <ResponseAssertion>
      <collectionProp name="Asserion.test_strings">
        <stringProp name="49586">200</stringProp>
      </collectionProp>
      <stringProp name="Assertion.custom_message">Response time exceeded</stringProp>
    </ResponseAssertion>
    
    <!-- Performance Monitor -->
    <PerfMonCollector>
      <collectionProp name="metricConnections">
        <collectionProp name="192.168.1.100">
          <stringProp name="CPU">CPU</stringProp>
          <stringProp name="Memory">Memory</stringProp>
        </collectionProp>
      </collectionProp>
    </PerfMonCollector>
  </hashTree>
</jmeterTestPlan>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100">Test Design</h4>
                </div>
                <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Design realistic user scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Use proper think times between actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Simulate realistic data patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Include cache warming phases</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100">Monitoring</h4>
                </div>
                <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Monitor server resources continuously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Track database performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Log application errors during tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Set up automated alerts for failures</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Analysis</h4>
                </div>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Correlate functional and performance data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Identify performance regression patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Generate comprehensive test reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Establish performance baselines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTitle>Enterprise-Grade Integration</AlertTitle>
        <AlertDescription>
          Combining Selenium and JMeter provides comprehensive testing coverage that validates both functionality 
          and performance under realistic conditions. This approach ensures applications meet both quality 
          and performance requirements before production deployment.
        </AlertDescription>
      </Alert>
    </div>
    </div>
  );
}
