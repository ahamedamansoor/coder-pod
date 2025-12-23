'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Package,
  Code,
  CheckCircle,
  Copy,
  RefreshCw,
  Eye,
  EyeOff,
  Clock,
  TrendingUp,
  Zap,
  Layers3,
  Boxes
} from 'lucide-react';

export function DockerGridComponent() {
  const { toast } = useToast();
  const [selectedSetup, setSelectedSetup] = useState<'simple' | 'compose' | 'swarm'>('compose');
  const [showCommands, setShowCommands] = useState<{ [key: string]: boolean }>({ 
    main: true,
    dockerfile: true,
    hub: true,
    node: true,
    compose: true,
    commands: true
  });

  const dockerExamples = {
    simple: {
      dockerfile: `# Dockerfile for Selenium Grid Hub
FROM selenium/hub:4.15.0

# Expose default hub port
EXPOSE 4444

# Set environment variables
ENV SE_SESSION_TIMEOUT=300
ENV SE_SESSION_REQUEST_TIMEOUT=30

# Start the hub
CMD ["java", "-jar", "/opt/selenium/selenium-server.jar", "hub"]`,
      hub: `# Start Selenium Hub
docker run -d -p 4444:4444 --name selenium-hub selenium/hub:4.15.0`,
      node: `# Start Chrome Node
docker run -d --link selenium-hub:hub \
  --name chrome-node \
  -e SE_EVENT_BUS_HOST=selenium-hub \
  -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
  -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
  selenium/node-chrome:4.15.0`
    },
    compose: {
      dockerfile: `# Docker Compose for Selenium Grid
version: '3.8'

services:
  selenium-hub:
    image: selenium/hub:4.15.0
    container_name: selenium-hub
    ports:
      - "4444:4444"
    environment:
      - SE_SESSION_TIMEOUT=300
      - SE_SESSION_REQUEST_TIMEOUT=30
    networks:
      - selenium-grid

  chrome-node:
    image: selenium/node-chrome:4.15.0
    container_name: chrome-node
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
    volumes:
      - /dev/shm:/dev/shm
    networks:
      - selenium-grid

  firefox-node:
    image: selenium/node-firefox:4.15.0
    container_name: firefox-node
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
    volumes:
      - /dev/shm:/dev/shm
    networks:
      - selenium-grid

networks:
  selenium-grid:
    driver: bridge`,
      commands: `# Start the Grid
docker-compose up -d

# Scale nodes
docker-compose up -d --scale chrome-node=3 --scale firefox-node=2

# Stop the Grid
docker-compose down

# View logs
docker-compose logs -f selenium-hub`
    },
    swarm: {
      dockerfile: `# Docker Swarm Stack for Selenium Grid
version: '3.8'

services:
  selenium-hub:
    image: selenium/hub:4.15.0
    ports:
      - "4444:4444"
    environment:
      - SE_SESSION_TIMEOUT=300
      - SE_SESSION_REQUEST_TIMEOUT=30
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    networks:
      - selenium-grid

  chrome-node:
    image: selenium/node-chrome:4.15.0
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
    volumes:
      - /dev/shm:/dev/shm
    deploy:
      replicas: 3
      placement:
        constraints:
          - node.role == worker
    networks:
      - selenium-grid

  firefox-node:
    image: selenium/node-firefox:4.15.0
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
    volumes:
      - /dev/shm:/dev/shm
    deploy:
      replicas: 2
      placement:
        constraints:
          - node.role == worker
    networks:
      - selenium-grid

networks:
  selenium-grid:
    driver: overlay`,
      commands: `# Initialize Swarm
docker swarm init

# Deploy Stack
docker stack deploy -c docker-compose.yml selenium-grid

# Scale Services
docker service scale selenium-grid_chrome-node=5

# Remove Stack
docker stack rm selenium-grid

# Leave Swarm
docker swarm leave --force`
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

  const setupTypes = [
    {
      type: 'simple' as const,
      title: 'Simple Docker',
      description: 'Basic Docker setup for quick testing',
      icon: <Package className="w-6 h-6" />,
      difficulty: 'Beginner',
      time: '5 min',
      useCase: 'Quick testing and development'
    },
    {
      type: 'compose' as const,
      title: 'Docker Compose',
      description: 'Multi-container setup with orchestration',
      icon: <Layers3 className="w-6 h-6" />,
      difficulty: 'Intermediate',
      time: '10 min',
      useCase: 'Development and small production'
    },
    {
      type: 'swarm' as const,
      title: 'Docker Swarm',
      description: 'Production-ready cluster deployment',
      icon: <Boxes className="w-6 h-6" />,
      difficulty: 'Advanced',
      time: '20 min',
      useCase: 'Large-scale production'
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Package}
        category="Selenium · Grid"
        title="Docker with Grid"
        description="Learn how to containerize and deploy Selenium Grid using Docker for scalable and portable test infrastructure."
        colorTheme="cyan"
      />

      {/* Setup Types */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            Deployment Options
          </CardTitle>
          <CardDescription>
            Choose the Docker setup that matches your requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {setupTypes.map((setup) => (
              <Card
                key={setup.type}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedSetup === setup.type
                    ? 'ring-2 ring-cyan-500 bg-cyan-50 dark:bg-cyan-950/30'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedSetup(setup.type)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                        {setup.icon}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{setup.title}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">
                          {setup.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {setup.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span>{setup.time}</span>
                      </div>
                      <div className="text-gray-500">
                        {setup.useCase}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Docker Configuration */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Docker Configuration
          </CardTitle>
          <CardDescription>
            Configuration files for {setupTypes.find(s => s.type === selectedSetup)?.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedSetup === 'simple' && (
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Dockerfile</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCommandVisibility('dockerfile')}
                    >
                      {showCommands['dockerfile'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(dockerExamples.simple.dockerfile, 'Dockerfile')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {showCommands['dockerfile'] && (
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                    <pre>{dockerExamples.simple.dockerfile}</pre>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Hub Command</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCommandVisibility('hub')}
                    >
                      {showCommands['hub'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(dockerExamples.simple.hub, 'Hub command')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {showCommands['hub'] && (
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                    <pre>{dockerExamples.simple.hub}</pre>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Node Command</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCommandVisibility('node')}
                    >
                      {showCommands['node'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(dockerExamples.simple.node, 'Node command')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {showCommands['node'] && (
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                    <pre>{dockerExamples.simple.node}</pre>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {(selectedSetup === 'compose' || selectedSetup === 'swarm') && (
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">docker-compose.yml</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCommandVisibility('compose')}
                    >
                      {showCommands['compose'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(dockerExamples[selectedSetup].dockerfile, 'Docker Compose file')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {showCommands['compose'] && (
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                    <pre>{dockerExamples[selectedSetup].dockerfile}</pre>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">Commands</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCommandVisibility('commands')}
                    >
                      {showCommands['commands'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(dockerExamples[selectedSetup].commands, 'Commands')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {showCommands['commands'] && (
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                    <pre>{dockerExamples[selectedSetup].commands}</pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Docker Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
              <Package className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Portability</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Run anywhere Docker is available, ensuring consistent environments
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Scalability</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Easily scale up or down by adding or removing containers
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <RefreshCw className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Isolation</h3>
              <p className="text-sm text-green-800 dark:text-green-200">
                Each container runs in isolation, preventing conflicts
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Speed</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Fast startup times and efficient resource utilization
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Best Practices</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div>• <strong>Resource Limits:</strong> Set appropriate memory and CPU limits for containers</div>
          <div>• <strong>Volume Mounts:</strong> Use volumes for persistent data and logs</div>
          <div>• <strong>Network Security:</strong> Use secure networks and expose only necessary ports</div>
          <div>• <strong>Health Checks:</strong> Implement health checks for container monitoring</div>
          <div>• <strong>Image Optimization:</strong> Use optimized images and multi-stage builds</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
