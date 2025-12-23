'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Grid3x3,
  Server,
  Monitor,
  Download,
  ChevronDown,
  Terminal,
  Code,
  CheckCircle,
  AlertCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  Settings,
  Package,
  FileText,
  Command,
  Power,
  Wifi,
  Lock,
  Key,
  Globe,
  Shield,
  Activity,
  Layers,
  GitBranch,
  Box,
  Truck,
  Cloud,
  Database,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  ArrowRight,
  Plus,
  Minus,
  Zap,
  Target,
  Clock,
  Users,
  Cpu,
  HardDrive,
  Network,
  Link,
  Unlink,
  Info
} from 'lucide-react';

export function GridSetupComponent() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac' | 'linux'>('windows');
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'javascript'>('java');
  const [showCommands, setShowCommands] = useState<{ [key: string]: boolean }>({});
  const [openPanels, setOpenPanels] = useState<{ [key: number]: boolean }>({
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false
  });

  // Dynamic setup steps based on selected language and OS
  const getSetupSteps = () => {
    const baseSteps = [
      {
        step: 1,
        title: '📋 Prerequisites',
        description: selectedLanguage === 'java' 
          ? 'Install Java JDK, download Selenium Server JAR, and configure environment variables.'
          : selectedLanguage === 'python'
          ? 'Install Python, pip, and selenium packages for Selenium Grid setup.'
          : 'Install Node.js, npm, and selenium-webdriver package for Selenium Grid setup.',
        icon: <Package className="w-6 h-6" />,
        status: 'completed' as const,
        color: 'blue'
      },
      {
        step: 2,
        title: '🏗️ Setup Hub',
        description: selectedLanguage === 'java'
          ? 'Configure and start the Selenium Grid Hub server using JAR file.'
          : 'Configure and start the Selenium Grid Hub server using selenium-standalone.',
        icon: <Server className="w-6 h-6" />,
        status: 'current' as const,
        color: 'green'
      },
      {
        step: 3,
        title: '🖥️ Setup Nodes',
        description: selectedLanguage === 'java'
          ? 'Register multiple nodes with different browsers and capabilities using JAR files.'
          : 'Register multiple nodes with different browsers and capabilities using selenium-standalone.',
        icon: <Monitor className="w-6 h-6" />,
        status: 'pending' as const,
        color: 'purple'
      },
      {
        step: 4,
        title: '🔗 Configure Network',
        description: 'Set up network configuration and firewall rules for hub-node communication.',
        icon: <Wifi className="w-6 h-6" />,
        status: 'pending' as const,
        color: 'orange'
      },
      {
        step: 5,
        title: '✅ Verify Setup',
        description: selectedLanguage === 'java'
          ? 'Test the Grid setup by accessing the Grid console and verify all nodes are registered.'
          : 'Test the Grid setup and verify all nodes are properly registered and accessible.',
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'pending' as const,
        color: 'indigo'
      }
    ];

    // Add additional verification steps for different languages
    if (selectedLanguage === 'python') {
      baseSteps.push({
        step: 6,
        title: '🐍 Python Verification',
        description: 'Test Python Selenium Grid connectivity with sample test script.',
        icon: <Terminal className="w-6 h-6" />,
        status: 'pending' as const,
        color: 'pink'
      });
    } else if (selectedLanguage === 'javascript') {
      baseSteps.push({
        step: 6,
        title: '📜 JavaScript Verification',
        description: 'Test JavaScript Selenium Grid connectivity with sample test script.',
        icon: <Package className="w-6 h-6" />,
        status: 'pending' as const,
        color: 'amber'
      });
    }

    return baseSteps;
  };

  const setupSteps = getSetupSteps();

  // Color mapping for different steps - light and soft colors
  const getStepColors = (color: string, status: string) => {
    const colorMap: { [key: string]: { light: string, dark: string, borderLight: string, borderDark: string, gradient: string, bgLight: string, bgDark: string, textLight: string, textDark: string } } = {
      blue: { 
        light: 'from-sky-50 to-blue-50', 
        dark: 'from-sky-950/20 to-blue-950/20', 
        borderLight: 'border-sky-200', 
        borderDark: 'border-sky-800',
        gradient: 'from-sky-400 to-blue-400',
        bgLight: 'bg-sky-100',
        bgDark: 'bg-sky-900/50',
        textLight: 'text-sky-700',
        textDark: 'text-sky-300'
      },
      green: { 
        light: 'from-emerald-50 to-green-50', 
        dark: 'from-emerald-950/20 to-green-950/20', 
        borderLight: 'border-emerald-200', 
        borderDark: 'border-emerald-800',
        gradient: 'from-emerald-400 to-green-400',
        bgLight: 'bg-emerald-100',
        bgDark: 'bg-emerald-900/50',
        textLight: 'text-emerald-700',
        textDark: 'text-emerald-300'
      },
      purple: { 
        light: 'from-violet-50 to-purple-50', 
        dark: 'from-violet-950/20 to-purple-950/20', 
        borderLight: 'border-violet-200', 
        borderDark: 'border-violet-800',
        gradient: 'from-violet-400 to-purple-400',
        bgLight: 'bg-violet-100',
        bgDark: 'bg-violet-900/50',
        textLight: 'text-violet-700',
        textDark: 'text-violet-300'
      },
      orange: { 
        light: 'from-amber-50 to-orange-50', 
        dark: 'from-amber-950/20 to-orange-950/20', 
        borderLight: 'border-amber-200', 
        borderDark: 'border-amber-800',
        gradient: 'from-amber-400 to-orange-400',
        bgLight: 'bg-amber-100',
        bgDark: 'bg-amber-900/50',
        textLight: 'text-amber-700',
        textDark: 'text-amber-300'
      },
      indigo: { 
        light: 'from-indigo-50 to-sky-50', 
        dark: 'from-indigo-950/20 to-sky-950/20', 
        borderLight: 'border-indigo-200', 
        borderDark: 'border-indigo-800',
        gradient: 'from-indigo-400 to-sky-400',
        bgLight: 'bg-indigo-100',
        bgDark: 'bg-indigo-900/50',
        textLight: 'text-indigo-700',
        textDark: 'text-indigo-300'
      },
      pink: { 
        light: 'from-rose-50 to-pink-50', 
        dark: 'from-rose-950/20 to-pink-950/20', 
        borderLight: 'border-rose-200', 
        borderDark: 'border-rose-800',
        gradient: 'from-rose-400 to-pink-400',
        bgLight: 'bg-rose-100',
        bgDark: 'bg-rose-900/50',
        textLight: 'text-rose-700',
        textDark: 'text-rose-300'
      },
      amber: { 
        light: 'from-yellow-50 to-amber-50', 
        dark: 'from-yellow-950/20 to-amber-950/20', 
        borderLight: 'border-yellow-200', 
        borderDark: 'border-yellow-800',
        gradient: 'from-yellow-400 to-amber-400',
        bgLight: 'bg-yellow-100',
        bgDark: 'bg-yellow-900/50',
        textLight: 'text-yellow-700',
        textDark: 'text-yellow-300'
      }
    };

    // Override with status colors if completed/current
    if (status === 'completed') {
      return colorMap.green;
    } else if (status === 'current') {
      return colorMap.blue;
    }
    
    return colorMap[color] || colorMap.blue;
  };

  const osCommands = {
    windows: {
      java: {
        version: 'java -version',
        install: 'choco install jdk11 -y',
        download: 'curl -O https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.15.0/selenium-server-4.15.0.jar',
        hub: 'java -jar selenium-server-4.15.0.jar hub',
        node: 'java -jar selenium-server-4.15.0.jar node --detect-drivers false --driver-configuration display-name="Chrome" max-sessions=4 stereotype="{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"Windows\\"}"',
        verify: 'curl http://localhost:4444/status'
      },
      python: {
        version: 'python --version',
        install: 'choco install python -y',
        pip: 'pip install selenium',
        download: 'pip install selenium-standalone',
        hub: 'selenium-standalone start --role hub',
        node: 'selenium-standalone start --role node --hub http://localhost:4444 --capabilities "{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"Windows\\"}"',
        verify: 'python -c "import selenium; print(selenium.__version__)"'
      },
      javascript: {
        version: 'node --version',
        install: 'choco install nodejs -y',
        npm: 'npm install selenium-webdriver',
        download: 'npm install selenium-standalone',
        hub: 'selenium-standalone start --role hub',
        node: 'selenium-standalone start --role node --hub http://localhost:4444 --capabilities "{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"Windows\\"}"',
        verify: 'node -e "const selenium = require(\'selenium-webdriver\'); console.log(require(\'selenium-webdriver/package.json\').version);"'
      }
    },
    mac: {
      java: {
        version: 'java -version',
        install: 'brew install openjdk@11',
        download: 'curl -O https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.15.0/selenium-server-4.15.0.jar',
        hub: 'java -jar selenium-server-4.15.0.jar hub',
        node: 'java -jar selenium-server-4.15.0.jar node --detect-drivers false --driver-configuration display-name="Chrome" max-sessions=4 stereotype="{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"macOS\\"}"',
        verify: 'curl http://localhost:4444/status'
      },
      python: {
        version: 'python3 --version',
        install: 'brew install python3',
        pip: 'pip3 install selenium',
        download: 'pip3 install selenium-standalone',
        hub: 'selenium-standalone start --role hub',
        node: 'selenium-standalone start --role node --hub http://localhost:4444 --capabilities "{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"macOS\\"}"',
        verify: 'python3 -c "import selenium; print(selenium.__version__)"'
      },
      javascript: {
        version: 'node --version',
        install: 'brew install node',
        npm: 'npm install selenium-webdriver',
        download: 'npm install selenium-standalone',
        hub: 'selenium-standalone start --role hub',
        node: 'selenium-standalone start --role node --hub http://localhost:4444 --capabilities "{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"macOS\\"}"',
        verify: 'node -e "const selenium = require(\'selenium-webdriver\'); console.log(require(\'selenium-webdriver/package.json\').version);"'
      }
    },
    linux: {
      java: {
        version: 'java -version',
        install: 'sudo apt update && sudo apt install openjdk-11-jdk -y',
        download: 'wget https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.15.0/selenium-server-4.15.0.jar',
        hub: 'java -jar selenium-server-4.15.0.jar hub',
        node: 'java -jar selenium-server-4.15.0.jar node --detect-drivers false --driver-configuration display-name="Chrome" max-sessions=4 stereotype="{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"Linux\\"}"',
        verify: 'curl http://localhost:4444/status'
      },
      python: {
        version: 'python3 --version',
        install: 'sudo apt update && sudo apt install python3 python3-pip -y',
        pip: 'pip3 install selenium',
        download: 'pip3 install selenium-standalone',
        hub: 'selenium-standalone start --role hub',
        node: 'selenium-standalone start --role node --hub http://localhost:4444 --capabilities "{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"Linux\\"}"',
        verify: 'python3 -c "import selenium; print(selenium.__version__)"'
      },
      javascript: {
        version: 'node --version',
        install: 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs',
        npm: 'npm install selenium-webdriver',
        download: 'npm install selenium-standalone',
        hub: 'selenium-standalone start --role hub',
        node: 'selenium-standalone start --role node --hub http://localhost:4444 --capabilities "{\\"browserName\\": \\"chrome\\", \\"platformName\\": \\"Linux\\"}"',
        verify: 'node -e "const selenium = require(\'selenium-webdriver\'); console.log(require(\'selenium-webdriver/package.json\').version);"'
      }
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const toggleCommandVisibility = (commandId: string) => {
    setShowCommands(prev => ({
      ...prev,
      [commandId]: !prev[commandId]
    }));
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Settings}
        category="Selenium · Grid"
        title="Grid Setup"
        description="Complete guide to setting up Selenium Grid with step-by-step installation and configuration instructions."
        colorTheme="green"
      />

      {/* OS and Language Selection */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
            Select Configuration
            <Badge variant="outline" className="ml-2">
              {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)} • {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
            </Badge>
          </CardTitle>
          <CardDescription>
            Choose your operating system and programming language to see platform-specific commands. Commands will update automatically based on your selection.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language Selection */}
          <div>
            <h4 className="text-sm font-medium mb-3">Programming Language</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { lang: 'java' as const, icon: <Code className="w-6 h-6" />, name: 'Java', recommended: true },
                { lang: 'python' as const, icon: <Terminal className="w-6 h-6" />, name: 'Python', recommended: false },
                { lang: 'javascript' as const, icon: <Package className="w-6 h-6" />, name: 'JavaScript', recommended: false }
              ].map((option) => (
                <Card
                  key={option.lang}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedLanguage === option.lang
                      ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => {
                    setSelectedLanguage(option.lang);
                    toast({
                      title: "Language Changed",
                      description: `Switched to ${option.name} commands`,
                    });
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {option.icon}
                        <CardTitle className="text-sm">{option.name}</CardTitle>
                      </div>
                      {option.recommended && (
                        <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                      )}
                      {selectedLanguage === option.lang && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {option.lang === 'java' ? 'Traditional Selenium Grid setup' : 
                       option.lang === 'python' ? 'Python selenium-standalone setup' : 
                       'JavaScript Node.js selenium-webdriver'}
                    </div>
                    {selectedLanguage === option.lang && (
                      <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium">
                        ✓ Currently selected
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* OS Selection */}
          <div>
            <h4 className="text-sm font-medium mb-3">Operating System</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { os: 'windows' as const, icon: <Monitor className="w-6 h-6" />, name: 'Windows', recommended: true },
                { os: 'mac' as const, icon: <Box className="w-6 h-6" />, name: 'macOS', recommended: false },
                { os: 'linux' as const, icon: <Terminal className="w-6 h-6" />, name: 'Linux', recommended: false }
              ].map((option) => (
                <Card
                  key={option.os}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedOS === option.os
                      ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => {
                    setSelectedOS(option.os);
                    toast({
                      title: "OS Changed",
                      description: `Switched to ${option.name} commands`,
                    });
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {option.icon}
                        <CardTitle className="text-sm">{option.name}</CardTitle>
                      </div>
                      {option.recommended && (
                        <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                      )}
                      {selectedOS === option.os && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Platform-specific commands and configuration
                    </div>
                    {selectedOS === option.os && (
                      <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium">
                        ✓ Currently selected
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
              <Info className="w-4 h-4" />
              <span>All commands below will be automatically updated for {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)} • {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Setup Steps */}
      <Card className="border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            Setup Steps
          </CardTitle>
          <CardDescription>
            Follow these steps to configure your Selenium Grid
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {setupSteps.map((step, index) => {
            const stepColors = getStepColors(step.color, step.status);
            return (
            <Collapsible
              key={step.step}
              open={openPanels[step.step]}
              onOpenChange={(open) => setOpenPanels(prev => ({ ...prev, [step.step]: open }))}
            >
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                          step.status === 'completed'
                            ? 'bg-emerald-100 border-emerald-400 dark:bg-emerald-900/50'
                            : step.status === 'current'
                            ? 'bg-sky-100 border-sky-400 dark:bg-sky-900/50'
                            : 'bg-gray-100 border-gray-300 dark:bg-gray-800'
                        }`}>
                          {step.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          ) : step.status === 'current' ? (
                            <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                          ) : (
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                              {step.step}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg ${
                            step.status === 'completed'
                              ? 'bg-emerald-100 dark:bg-emerald-900/50'
                              : step.status === 'current'
                              ? 'bg-sky-100 dark:bg-sky-900/50'
                              : 'bg-gray-100 dark:bg-gray-800'
                          }`}>
                            {step.icon}
                          </div>
                          <div>
                            <h3 className={`text-base font-semibold ${
                              step.status === 'completed' ? 'text-emerald-700 dark:text-emerald-300' : 
                               step.status === 'current' ? 'text-sky-700 dark:text-sky-300' : 
                               'text-gray-700 dark:text-gray-300'
                            }`}>
                              {step.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              {step.status === 'current' && (
                                <Badge className="bg-sky-500 text-white text-xs">
                                  Current
                                </Badge>
                              )}
                              {step.status === 'completed' && (
                                <Badge className="bg-emerald-500 text-white text-xs">
                                  Completed
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        openPanels[step.step] ? 'transform rotate-180' : ''
                      }`} />
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="border-t-0 rounded-t-none mt-0">
                  <CardContent className="pt-4">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    {/* Command sections */}
                    {step.step === 1 && (
                      <div className="space-y-3">
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium text-sm mb-2">1. Check {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Installation</h4>
                          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                            <div className="flex items-center justify-between">
                              <code>{osCommands[selectedOS][selectedLanguage].version}</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(osCommands[selectedOS][selectedLanguage].version, 'Version check command')}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium text-sm mb-2">2. Install {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}</h4>
                          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                            <div className="flex items-center justify-between">
                              <code>{osCommands[selectedOS][selectedLanguage].install}</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(osCommands[selectedOS][selectedLanguage].install, 'Install command')}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        {(selectedLanguage === 'python' || selectedLanguage === 'javascript') && (
                          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="font-medium text-sm mb-2">3. Install {selectedLanguage === 'python' ? 'Selenium' : 'Selenium WebDriver'} Package</h4>
                            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                              <div className="flex items-center justify-between">
                                <code>{selectedLanguage === 'python' ? osCommands[selectedOS][selectedLanguage].pip : osCommands[selectedOS][selectedLanguage].npm}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(selectedLanguage === 'python' ? osCommands[selectedOS][selectedLanguage].pip : osCommands[selectedOS][selectedLanguage].npm, 'Package install command')}
                                >
                                  <Copy className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium text-sm mb-2">{selectedLanguage === 'java' ? '3. Download Selenium Server' : selectedLanguage === 'python' ? '4. Install Selenium Standalone' : '4. Install Selenium Standalone'}</h4>
                          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                            <div className="flex items-center justify-between">
                              <code>{osCommands[selectedOS][selectedLanguage].download}</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(osCommands[selectedOS][selectedLanguage].download, 'Download command')}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {step.step === 2 && (
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-sm mb-2">Start Selenium Hub</h4>
                        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                          <div className="flex items-center justify-between">
                            <code>{osCommands[selectedOS][selectedLanguage].hub}</code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(osCommands[selectedOS][selectedLanguage].hub, 'Hub start command')}
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          Hub will start on http://localhost:4444
                        </div>
                      </div>
                    )}
                    
                    {step.step === 3 && (
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-sm mb-2">Register Node with Hub</h4>
                        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-xs border border-gray-300 dark:border-gray-600">
                          <div className="flex items-start justify-between gap-2">
                            <code className="break-all flex-1">{osCommands[selectedOS][selectedLanguage].node}</code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(osCommands[selectedOS][selectedLanguage].node, 'Node registration command')}
                              className="flex-shrink-0"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          Node will automatically register with the hub at http://localhost:4444
                        </div>
                      </div>
                    )}
                    
                    {step.step === 4 && (
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-sm mb-2">Network Configuration</h4>
                        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                          <div className="space-y-2">
                            <div>
                              <div className="text-green-600 dark:text-green-300 mb-1 font-semibold"># Firewall rules (if needed):</div>
                              <code>sudo ufw allow 4444</code>
                            </div>
                            <div>
                              <div className="text-green-600 dark:text-green-300 mb-1 font-semibold"># Check port availability:</div>
                              <code>netstat -tulpn | grep :4444</code>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          Ensure port 4444 is open for hub-node communication
                        </div>
                      </div>
                    )}
                    
                    {step.step === 5 && (
                      <div className="space-y-3">
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium text-sm mb-2">1. Check Grid Status</h4>
                          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                            <div className="flex items-center justify-between">
                              <code>{osCommands[selectedOS][selectedLanguage].verify}</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(osCommands[selectedOS][selectedLanguage].verify, 'Verification command')}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                            Verify Grid Hub is running and accessible
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium text-sm mb-2">2. Access Grid Console</h4>
                          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                            <div className="flex items-center justify-between">
                              <code>http://localhost:4444/grid/console</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard('http://localhost:4444/grid/console', 'Grid Console URL')}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                            Open in browser to view registered nodes and capabilities
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {step.step === 6 && (selectedLanguage === 'python' || selectedLanguage === 'javascript') && (
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-sm mb-2">{selectedLanguage === 'python' ? 'Python' : 'JavaScript'} Test Script</h4>
                        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded font-mono text-xs border border-gray-300 dark:border-gray-600">
                          <div className="space-y-2">
                            <div>
                              <div className="text-green-600 dark:text-green-300 mb-1 font-semibold"># Create test file:</div>
                              <code>{selectedLanguage === 'python' ? 'touch grid_test.py' : 'touch grid_test.js'}</code>
                            </div>
                            <div>
                              <div className="text-green-600 dark:text-green-300 mb-1 font-semibold"># Test script content:</div>
                              <pre className="whitespace-pre-wrap">
{selectedLanguage === 'python' ? `from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
driver = webdriver.Remote(
    command_executor='http://localhost:4444',
    options=chrome_options
)
print("Grid connection successful!")
driver.quit()` : `const { Builder, WebDriver } = require('selenium-webdriver');

(async function testGrid() {
  try {
    let driver = await new Builder()
      .usingServer('http://localhost:4444')
      .forBrowser('chrome')
      .build();
    
    console.log('Grid connection successful!');
    await driver.quit();
  } catch (error) {
    console.error('Grid connection failed:', error);
  }
})();`}
                              </pre>
                            </div>
                            <div>
                              <div className="text-green-600 dark:text-green-300 mb-1 font-semibold"># Run test:</div>
                              <code>{selectedLanguage === 'python' ? 'python grid_test.py' : 'node grid_test.js'}</code>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          Test {selectedLanguage} Selenium Grid connectivity
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
            );
          })}
        </CardContent>
      </Card>

      {/* Configuration Examples */}
      <Card className="border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            Configuration Examples
          </CardTitle>
          <CardDescription>
            Sample configurations for different OS and language combinations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
              <Info className="w-4 h-4" />
              <span>Showing examples for {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)} • {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Hub Configuration */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Hub Configuration
              </h4>
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm border border-gray-300 dark:border-gray-600">
                <pre className="text-blue-600 dark:text-blue-300">{`{
  "port": 4444,
  "host": "0.0.0.0",
  "maxSession": 16,
  "registerCycle": 5000,
  "timeout": 30000
}`}</pre>
              </div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Basic hub configuration for all platforms
              </div>
            </div>
            
            {/* Node Configuration */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Node Configuration
              </h4>
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm border border-gray-300 dark:border-gray-600">
                <pre className="text-green-600 dark:text-green-300">{`{
  "capabilities": [
    {
      "browserName": "chrome",
      "maxInstances": 5,
      "platformName": "${selectedOS.toUpperCase()}"
    }
  ],
  "port": 5555,
  "hub": "http://localhost:4444"
}`}</pre>
              </div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Node setup for {selectedOS} with Chrome browser
              </div>
            </div>
            
            {/* Language-Specific Implementation */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Implementation
              </h4>
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm border border-gray-300 dark:border-gray-600">
                <pre className="text-purple-600 dark:text-purple-300">
{selectedLanguage === 'java' ? `// Java WebDriver Setup
WebDriver driver = new RemoteWebDriver(
    new URL("http://localhost:4444"),
    new ChromeOptions()
);
driver.get("https://example.com");` : 
selectedLanguage === 'python' ? `# Python Selenium Setup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
driver = webdriver.Remote(
    command_executor='http://localhost:4444',
    options=options
)
driver.get("https://example.com")` :
`// JavaScript WebDriver Setup
const { Builder, WebDriver } = require('selenium-webdriver');

let driver = await new Builder()
    .usingServer('http://localhost:4444')
    .forBrowser('chrome')
    .build();
await driver.get('https://example.com');`}
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Remote WebDriver connection in {selectedLanguage}
              </div>
            </div>
            
            {/* OS-Specific Commands */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)} Commands
              </h4>
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm border border-gray-300 dark:border-gray-600">
                <pre className="text-orange-600 dark:text-orange-300">
{selectedOS === 'windows' ? `# Windows Commands
	java -jar selenium-server-4.15.0.jar hub
	java -jar selenium-server-4.15.0.jar node --detect-drivers` :
selectedOS === 'mac' ? `# macOS Commands
	java -jar selenium-server-4.15.0.jar hub
	java -jar selenium-server-4.15.0.jar node --detect-drivers` :
`# Linux Commands
	java -jar selenium-server-4.15.0.jar hub
	java -jar selenium-server-4.15.0.jar node --detect-drivers
	sudo ufw allow 4444`}
                </pre>
              </div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Selenium Grid commands for {selectedOS}
              </div>
            </div>
          </div>
          
          {/* Advanced Configuration */}
          <div className="mt-6 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-base mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Advanced Configuration
            </h4>
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg font-mono text-sm border border-gray-300 dark:border-gray-600">
              <pre className="text-red-600 dark:text-red-300">{`# Docker Compose for Grid
version: '3.8'
services:
  selenium-hub:
    image: selenium/hub:4.15.0
    ports:
      - "4444:4444"
  
  chrome-node:
    image: selenium/node-chrome:4.15.0
    depends_on:
      - selenium-hub
    environment:
      - HUB_HOST=selenium-hub`}</pre>
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Docker setup for cross-platform Selenium Grid deployment
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification */}
      <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Verification Steps</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div>• <strong>Hub Console:</strong> Access http://localhost:4444/ui to view registered nodes</div>
          <div>• <strong>Node Status:</strong> Check if nodes appear as "Available" in the hub console</div>
          <div>• <strong>Test Connection:</strong> Run a simple test to verify hub-node communication</div>
          <div>• <strong>Log Files:</strong> Check hub and node logs for any connection issues</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
