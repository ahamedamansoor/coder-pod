'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Cloud, 
  Database,
  Globe,
  Shield,
  Zap,
  RefreshCw,
  Code,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Clock,
  Timer,
  Server,
  Lock,
  Wifi,
  Activity,
  Terminal,
  Package,
  Cpu,
  Network,
  Plug,
  Send,
  Download,
  Upload,
  Link,
  Link2,
  Unlink,
  Radio,
  Signal,
  BarChart3,
  LineChart,
  PieChart,
  Gauge,
  Target,
  Settings,
  Monitor,
  Smartphone,
  Laptop,
  Globe2,
  Layers,
  GitBranch,
  GitMerge,
  Users,
  MessageSquare,
  GitPullRequest,
  Box,
  Truck,
  PackageOpen,
  Archive,
  FileText,
  FileCode,
  FileJson,
  FileX,
  FileSpreadsheet,
  Hash,
  Braces,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Eye,
  EyeOff,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  Edit,
  Trash2,
  Save,
  RotateCcw,
  RotateCw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Star,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Mail,
  Phone,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Bell,
  BellOff,
  AlarmClock,
  AlarmClockOff,
  Calendar,
  CalendarDays,
  CalendarRange,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Code snippet generator for different API patterns and frameworks
const getCodeSnippet = (patternTitle: string, framework: string): string => {
  const snippets: Record<string, Record<string, string>> = {
    'RESTful API Integration': {
      react: `// React with Axios
import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer token' }
});

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, fetchUsers };
};`,
      angular: `// Angular with HTTP Client
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://api.example.com';
  private headers = new HttpHeaders({
    'Authorization': 'Bearer token'
  });

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(\`\${this.apiUrl}/users\`, {
      headers: this.headers
    });
  }

  createUser(user: any): Observable<any> {
    return this.http.post(\`\${this.apiUrl}/users\`, user, {
      headers: this.headers
    });
  }
}`,
      vue: `// Vue with Composition API
import { ref } from 'vue';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer token' }
});

export function useUsers() {
  const users = ref([]);
  const loading = ref(false);

  const fetchUsers = async () => {
    loading.value = true;
    try {
      const response = await api.get('/users');
      users.value = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      loading.value = false;
    }
  };

  return { users, loading, fetchUsers };
}`
    },
    'GraphQL Integration': {
      react: `// React with Apollo Client
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql\`
  query GetUsers($limit: Int) {
    users(limit: $limit) {
      id
      name
      email
      avatar
    }
  }
\`;

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { limit: 10 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`,
      angular: `// Angular with Apollo
import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_USERS = gql\`
  query GetUsers($limit: Int) {
    users(limit: $limit) {
      id
      name
      email
    }
  }
\`;

@Component({
  selector: 'app-users',
  template: \`
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">Error: {{ error }}</div>
    <ul *ngIf="users">
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  \`
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query<any>({
      query: GET_USERS,
      variables: { limit: 10 }
    }).pipe(
      map(result => result.data.users)
    ).subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      }
    });
  }
}`,
      vue: `// Vue with Apollo Composition API
import { useQuery, useResult } from '@vue/apollo-composable';
import { gql } from '@apollo/client/core';

const GET_USERS = gql\`
  query GetUsers($limit: Int) {
    users(limit: $limit) {
      id
      name
      email
    }
  }
\`;

export default {
  setup() {
    const { result, loading, error } = useQuery(GET_USERS, {
      limit: 10
    });

    const users = useResult(result, [], data => data.users);

    return {
      users,
      loading,
      error
    };
  }
}`
    },
    'WebSocket Integration': {
      react: `// React with Socket.io
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.emit('join-room', roomId);

    newSocket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => newSocket.close();
  }, [roomId]);

  const sendMessage = (message) => {
    socket.emit('send-message', { roomId, message });
  };

  return { messages, sendMessage };
};`,
      angular: `// Angular with Socket.io
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: Socket;

  connect(roomId: string) {
    this.socket = io('http://localhost:3001');
    this.socket.emit('join-room', roomId);
    return this.socket;
  }

  sendMessage(roomId: string, message: string) {
    this.socket.emit('send-message', { roomId, message });
  }

  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}`,
      vue: `// Vue with Socket.io
import { ref, onUnmounted } from 'vue';
import io from 'socket.io-client';

export function useChat(roomId) {
  const messages = ref([]);
  const socket = ref(null);

  const connect = () => {
    socket.value = io('http://localhost:3001');
    socket.value.emit('join-room', roomId);

    socket.value.on('message', (message) => {
      messages.value.push(message);
    });
  };

  const sendMessage = (message) => {
    socket.value.emit('send-message', { roomId, message });
  };

  const disconnect = () => {
    if (socket.value) {
      socket.value.disconnect();
    }
  };

  onUnmounted(() => {
    disconnect();
  });

  return {
    messages,
    connect,
    sendMessage,
    disconnect
  };
}`
    },
    'Server-Sent Events (SSE)': {
      react: `// React with EventSource
import { useEffect, useState } from 'react';

const useSSE = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    eventSource.onerror = (event) => {
      setError(event);
      eventSource.close();
    };

    return () => eventSource.close();
  }, [url]);

  return { data, error };
};

// Usage
const StockTicker = () => {
  const { data, error } = useSSE('https://api.example.com/stocks');

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Connecting...</div>;

  return <div>Stock Price: $\{data.price}</div>;
};`,
      angular: `// Angular with EventSource
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SSEService {
  getEventSource(url: string): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        observer.next(data);
      };

      eventSource.onerror = (error) => {
        observer.error(error);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    });
  }
}

// Component Usage
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-ticker',
  template: \`<div>Stock Price: {{ stockPrice }}</div>\`
})
export class StockTickerComponent implements OnInit {
  stockPrice: number;

  constructor(private sseService: SSEService) {}

  ngOnInit() {
    this.sseService.getEventSource('https://api.example.com/stocks')
      .subscribe(data => this.stockPrice = data.price);
  }
}`,
      vue: `// Vue with EventSource
import { ref, onUnmounted } from 'vue';

export function useSSE(url) {
  const data = ref(null);
  const error = ref(null);

  const eventSource = new EventSource(url);

  eventSource.onmessage = (event) => {
    data.value = JSON.parse(event.data);
  };

  eventSource.onerror = (event) => {
    error.value = event;
    eventSource.close();
  };

  onUnmounted(() => {
    eventSource.close();
  });

  return { data, error };
}

// Component Usage
export default {
  setup() {
    const { data: stockData } = useSSE('https://api.example.com/stocks');

    return {
      stockPrice: stockData.value?.price
    };
  }
}`
    },
    'gRPC Integration': {
      react: `// React with gRPC-Web
import { useState, useEffect } from 'react';
import { UserServiceClient } from './user_grpc_web_pb';
import { GetUserRequest } from './user_pb';

const useGrpcUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const client = new UserServiceClient('http://localhost:8080');

  const getUser = async (userId) => {
    setLoading(true);
    const request = new GetUserRequest();
    request.setUserId(userId);

    try {
      const response = await new Promise((resolve, reject) => {
        client.getUser(request, {}, (err, response) => {
          if (err) reject(err);
          else resolve(response);
        });
      });
      setUser(response.toObject());
    } catch (error) {
      console.error('gRPC error:', error);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, getUser };
};`,
      angular: `// Angular with gRPC-Web
import { Injectable } from '@angular/core';
import { UserServiceClient } from './user_grpc_web_pb';
import { GetUserRequest } from './user_pb';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GrpcUserService {
  private client: UserServiceClient;

  constructor() {
    this.client = new UserServiceClient('http://localhost:8080');
  }

  getUser(userId: string): Observable<any> {
    const request = new GetUserRequest();
    request.setUserId(userId);

    return new Observable(observer => {
      this.client.getUser(request, {}, (err, response) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(response.toObject());
          observer.complete();
        }
      });
    });
  }
}`,
      vue: `// Vue with gRPC-Web
import { ref } from 'vue';
import { UserServiceClient } from './user_grpc_web_pb';
import { GetUserRequest } from './user_pb';

export function useGrpcUser() {
  const user = ref(null);
  const loading = ref(false);

  const client = new UserServiceClient('http://localhost:8080');

  const getUser = async (userId) => {
    loading.value = true;
    const request = new GetUserRequest();
    request.setUserId(userId);

    try {
      const response = await new Promise((resolve, reject) => {
        client.getUser(request, {}, (err, response) => {
          if (err) reject(err);
          else resolve(response);
        });
      });
      user.value = response.toObject();
    } catch (error) {
      console.error('gRPC error:', error);
    } finally {
      loading.value = false;
    }
  };

  return { user, loading, getUser };
}`
    },
    'Webhook Integration': {
      react: `// React Webhook Handler
import { useState } from 'react';
import axios from 'axios';

const useWebhook = () => {
  const [webhooks, setWebhooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const createWebhook = async (webhookData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/webhooks', webhookData);
      setWebhooks(prev => [...prev, response.data]);
      return response.data;
    } catch (error) {
      console.error('Error creating webhook:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const triggerWebhook = async (webhookId, payload) => {
    try {
      await axios.post(\`/api/webhooks/\${webhookId}/trigger\`, payload);
    } catch (error) {
      console.error('Error triggering webhook:', error);
      throw error;
    }
  };

  return { webhooks, loading, createWebhook, triggerWebhook };
};`,
      angular: `// Angular Webhook Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebhookService {
  private apiUrl = '/api/webhooks';

  constructor(private http: HttpClient) {}

  createWebhook(webhookData: any): Observable<any> {
    return this.http.post(\`\${this.apiUrl}\`, webhookData);
  }

  triggerWebhook(webhookId: string, payload: any): Observable<any> {
    return this.http.post(\`\${this.apiUrl}/\${webhookId}/trigger\`, payload);
  }

  getWebhooks(): Observable<any[]> {
    return this.http.get<any[]>(\`\${this.apiUrl}\`);
  }

  deleteWebhook(webhookId: string): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${webhookId}\`);
  }
}`,
      vue: `// Vue Webhook Composable
import { ref } from 'vue';
import axios from 'axios';

export function useWebhook() {
  const webhooks = ref([]);
  const loading = ref(false);

  const createWebhook = async (webhookData) => {
    loading.value = true;
    try {
      const response = await axios.post('/api/webhooks', webhookData);
      webhooks.value.push(response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating webhook:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const triggerWebhook = async (webhookId, payload) => {
    try {
      await axios.post(\`/api/webhooks/\${webhookId}/trigger\`, payload);
    } catch (error) {
      console.error('Error triggering webhook:', error);
      throw error;
    }
  };

  const fetchWebhooks = async () => {
    const response = await axios.get('/api/webhooks');
    webhooks.value = response.data;
  };

  return {
    webhooks,
    loading,
    createWebhook,
    triggerWebhook,
    fetchWebhooks
  };
}`
    }
  };

  // Find matching pattern or return default
  const patternKey = Object.keys(snippets).find(key => 
    patternTitle.toLowerCase().includes(key.toLowerCase())
  );

  if (patternKey && snippets[patternKey][framework]) {
    return snippets[patternKey][framework];
  }

  return `// Example code for ${patternTitle} in ${framework}
// Implementation coming soon...`;
};

interface ApiIntegrationPatternProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  category: string;
  complexity: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  benefits: string[];
  challenges: string[];
  protocols: string[];
}

const ApiIntegrationPatternCard: React.FC<ApiIntegrationPatternProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges,
  protocols
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState('react');

  const frameworkTabs = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' },
    { id: 'vue', label: 'Vue', icon: '💚' }
  ];

  return (
    <Card className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className={cn('p-3 rounded-xl', color)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-900 dark:text-white">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{description}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{category}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{complexity}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Benefits</h4>
            <div className="flex flex-wrap gap-1">
              {benefits.slice(0, isExpanded ? benefits.length : 3).map((benefit, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                  {benefit}
                </span>
              ))}
              {!isExpanded && benefits.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{benefits.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Protocols</h4>
            <div className="flex flex-wrap gap-1">
              {protocols.slice(0, isExpanded ? protocols.length : 3).map((protocol, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {protocol}
                </span>
              ))}
              {!isExpanded && protocols.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{protocols.length - 3} more
                </span>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Support</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.react.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.angular.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.vue.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippets */}
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Code Examples</h4>
                
                {/* Framework Tabs */}
                <div className="flex space-x-1 mb-3">
                  {frameworkTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedFramework(tab.id)}
                      className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-colors ${
                        selectedFramework === tab.id
                          ? 'bg-blue-500 text-white border-b-2 border-blue-500'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>
                
                {/* Code Content */}
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 min-h-[120px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {selectedFramework.charAt(0).toUpperCase() + selectedFramework.slice(1)} Example
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      {frameworks[selectedFramework as keyof typeof frameworks].length > 0 ? 
                        frameworks[selectedFramework as keyof typeof frameworks][0] : 
                        'Coming soon'
                      }
                    </span>
                  </div>
                  <pre className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto overflow-y-auto max-h-96 whitespace-pre-wrap break-words">
                    <code>{getCodeSnippet(title, selectedFramework)}</code>
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Challenges</h4>
                <div className="flex flex-wrap gap-1">
                  {challenges.map((challenge, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const ApiIntegrationPatterns: React.FC = () => {
  const apiPatterns = [
    {
      title: 'RESTful API Integration',
      description: 'Standard HTTP-based API communication with REST principles',
      icon: Server,
      color: 'bg-blue-500',
      category: 'HTTP API',
      complexity: 'Easy',
      frameworks: {
        react: ['Axios', 'Fetch API', 'React Query', 'SWR'],
        angular: ['HTTP Client', 'RxJS', 'HttpClientModule', 'Interceptors'],
        vue: ['Axios', 'Vue Resource', 'Fetch API', 'Pinia']
      },
      benefits: [
        'Stateless communication',
        'Standardized methods',
        'Easy caching',
        'Wide adoption',
        'Tool support',
        'Scalable architecture'
      ],
      challenges: [
        'Over-fetching data',
        'Multiple round trips',
        'No real-time updates',
        'Version management',
        'Rate limiting'
      ],
      protocols: ['HTTP/1.1', 'HTTP/2', 'HTTPS', 'TCP/IP']
    },
    {
      title: 'GraphQL Integration',
      description: 'Query language for APIs with flexible data fetching',
      icon: Code,
      color: 'bg-purple-500',
      category: 'Query API',
      complexity: 'Medium',
      frameworks: {
        react: ['Apollo Client', 'Relay', 'urql', 'graphql-request'],
        angular: ['Apollo Angular', 'graphql-request', 'RxJS integration'],
        vue: ['Apollo Vue', 'vue-graphql', 'graphql-request']
      },
      benefits: [
        'Precise data fetching',
        'Single endpoint',
        'Strong typing',
        'Real-time subscriptions',
        'Introspection',
        'No over-fetching'
      ],
      challenges: [
        'Learning curve',
        'Server complexity',
        'Caching complexity',
        'File upload limitations',
        'Error handling'
      ],
      protocols: ['HTTP/1.1', 'HTTP/2', 'WebSocket', 'HTTPS']
    },
    {
      title: 'WebSocket Integration',
      description: 'Real-time bidirectional communication for live updates',
      icon: Wifi,
      color: 'bg-green-500',
      category: 'Real-time API',
      complexity: 'Medium',
      frameworks: {
        react: ['Socket.io-client', 'WebSocket API', 'useWebSocket', 'React Hooks'],
        angular: ['Socket.io-client', 'WebSocket API', 'RxJS WebSocketSubject'],
        vue: ['Socket.io-client', 'WebSocket API', 'VueUse WebSocket']
      },
      benefits: [
        'Real-time updates',
        'Low latency',
        'Bidirectional communication',
        'Connection persistence',
        'Reduced overhead',
        'Live collaboration'
      ],
      challenges: [
        'Connection management',
        'Scalability issues',
        'State synchronization',
        'Error recovery',
        'Resource consumption'
      ],
      protocols: ['WebSocket', 'Socket.IO', 'TCP/IP', 'UDP']
    },
    {
      title: 'Server-Sent Events (SSE)',
      description: 'Unidirectional real-time data streaming from server to client',
      icon: Activity,
      color: 'bg-cyan-500',
      category: 'Streaming API',
      complexity: 'Easy',
      frameworks: {
        react: ['EventSource API', 'useEventSource', 'Custom hooks', 'Fetch streaming'],
        angular: ['EventSource API', 'RxJS fromEvent', 'HttpClient streaming'],
        vue: ['EventSource API', 'Composables', 'VueUse SSE']
      },
      benefits: [
        'Simple implementation',
        'Automatic reconnection',
        'Low resource usage',
        'Standardized protocol',
        'Good for notifications',
        'Firewall friendly'
      ],
      challenges: [
        'Unidirectional only',
        'No binary data',
        'Connection limits',
        'Limited browser support',
        'No acknowledgment'
      ],
      protocols: ['HTTP/1.1', 'EventSource', 'HTTPS', 'TCP/IP']
    },
    {
      title: 'gRPC Integration',
      description: 'High-performance RPC framework for microservices',
      icon: Zap,
      color: 'bg-orange-500',
      category: 'RPC API',
      complexity: 'Hard',
      frameworks: {
        react: ['grpc-web', 'Connect-ES', 'Protobuf.js', 'Custom clients'],
        angular: ['grpc-web', 'Connect-ES', 'Protobuf.js', 'RxJS integration'],
        vue: ['grpc-web', 'Connect-ES', 'Protobuf.js', 'Composables']
      },
      benefits: [
        'High performance',
        'Strong typing',
        'Streaming support',
        'Binary protocol',
        'Code generation',
        'Efficient serialization'
      ],
      challenges: [
        'Complex setup',
        'Limited browser support',
        'Tooling complexity',
        'Debugging difficulty',
        'Learning curve'
      ],
      protocols: ['HTTP/2', 'gRPC', 'Protocol Buffers', 'TCP/IP']
    },
    {
      title: 'Webhook Integration',
      description: 'Event-driven API callbacks for external integrations',
      icon: RefreshCw,
      color: 'bg-pink-500',
      category: 'Event API',
      complexity: 'Medium',
      frameworks: {
        react: ['Custom webhook handlers', 'Axios', 'Express.js', 'Next.js API routes'],
        angular: ['Custom webhook handlers', 'HTTP Client', 'Express.js', 'NestJS'],
        vue: ['Custom webhook handlers', 'Axios', 'Express.js', 'Nuxt.js server routes']
      },
      benefits: [
        'Event-driven architecture',
        'Real-time notifications',
        'Decoupled systems',
        'External integrations',
        'Automation support',
        'Scalable notifications'
      ],
      challenges: [
        'Security concerns',
        'Reliability issues',
        'Idempotency handling',
        'Retry mechanisms',
        'Endpoint management'
      ],
      protocols: ['HTTP/1.1', 'HTTPS', 'POST', 'JSON']
    }
  ];

  const integrationFlows = [
    {
      title: 'Request-Response Flow',
      description: 'Standard HTTP request-response cycle for API communication',
      steps: ['Client Request', 'API Gateway', 'Authentication', 'Business Logic', 'Database Query', 'Response Processing', 'Client Response'],
      icon: ArrowRight,
      color: 'bg-blue-500'
    },
    {
      title: 'Real-time Event Flow',
      description: 'Bidirectional real-time communication using WebSockets',
      steps: ['Client Connect', 'WebSocket Handshake', 'Event Emission', 'Server Processing', 'Broadcast', 'Client Receive', 'UI Update'],
      icon: ArrowUp,
      color: 'bg-green-500'
    },
    {
      title: 'Data Streaming Flow',
      description: 'Continuous data streaming from server to client',
      steps: ['Stream Initiation', 'EventSource Connection', 'Data Chunk', 'Client Processing', 'Stream Update', 'Error Handling', 'Stream Completion'],
      icon: ArrowDown,
      color: 'bg-cyan-500'
    }
  ];

  const integrationDiagrams = [
    {
      title: 'REST API Architecture',
      description: 'Client-Server communication using REST principles',
      components: [
        { name: 'Client', icon: Laptop, position: 'left' },
        { name: 'API Gateway', icon: Shield, position: 'center' },
        { name: 'Load Balancer', icon: Activity, position: 'center-right' },
        { name: 'Application Server', icon: Server, position: 'right' },
        { name: 'Database', icon: Database, position: 'far-right' }
      ],
      connections: [
        { from: 0, to: 1, label: 'HTTP Request' },
        { from: 1, to: 2, label: 'Route' },
        { from: 2, to: 3, label: 'Load Balance' },
        { from: 3, to: 4, label: 'Query' },
        { from: 4, to: 3, label: 'Data' },
        { from: 3, to: 2, label: 'Response' },
        { from: 2, to: 1, label: 'Return' },
        { from: 1, to: 0, label: 'HTTP Response' }
      ],
      color: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'GraphQL Architecture',
      description: 'Single endpoint with flexible query capabilities',
      components: [
        { name: 'Client', icon: Laptop, position: 'left' },
        { name: 'GraphQL Client', icon: Code, position: 'center-left' },
        { name: 'GraphQL Server', icon: Server, position: 'center' },
        { name: 'Resolvers', icon: GitBranch, position: 'center-right' },
        { name: 'Data Sources', icon: Database, position: 'right' }
      ],
      connections: [
        { from: 0, to: 1, label: 'Query' },
        { from: 1, to: 2, label: 'GraphQL Request' },
        { from: 2, to: 3, label: 'Resolve' },
        { from: 3, to: 4, label: 'Fetch Data' },
        { from: 4, to: 3, label: 'Return Data' },
        { from: 3, to: 2, label: 'Resolved' },
        { from: 2, to: 1, label: 'JSON Response' },
        { from: 1, to: 0, label: 'Formatted Data' }
      ],
      color: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      title: 'WebSocket Architecture',
      description: 'Real-time bidirectional communication',
      components: [
        { name: 'Client', icon: Laptop, position: 'left' },
        { name: 'WebSocket Client', icon: Wifi, position: 'center-left' },
        { name: 'WebSocket Server', icon: Server, position: 'center' },
        { name: 'Room Manager', icon: Users, position: 'center-right' },
        { name: 'Message Broker', icon: MessageSquare, position: 'right' }
      ],
      connections: [
        { from: 0, to: 1, label: 'Connect' },
        { from: 1, to: 2, label: 'WebSocket Handshake' },
        { from: 2, to: 3, label: 'Join Room' },
        { from: 3, to: 4, label: 'Subscribe' },
        { from: 4, to: 3, label: 'Broadcast' },
        { from: 3, to: 2, label: 'Message' },
        { from: 2, to: 1, label: 'Real-time Data' },
        { from: 1, to: 0, label: 'Update UI' }
      ],
      color: 'bg-green-100 dark:bg-green-900/30'
    }
  ];

  const performanceMetrics = [
    {
      name: 'API Response Time',
      description: 'Average time taken for API to respond to requests',
      icon: Timer,
      calculation: 'Total response time / Number of requests',
      target: '< 200ms',
      category: 'Performance'
    },
    {
      name: 'Request Success Rate',
      description: 'Percentage of successful API requests',
      icon: Target,
      calculation: 'Successful requests / Total requests × 100',
      target: '> 99.9%',
      category: 'Reliability'
    },
    {
      name: 'Data Transfer Efficiency',
      description: 'Efficiency of data transfer between client and server',
      icon: Gauge,
      calculation: 'Compressed size / Original size × 100',
      target: '> 70%',
      category: 'Efficiency'
    },
    {
      name: 'Connection Utilization',
      description: 'Percentage of available connections being used',
      icon: Activity,
      calculation: 'Active connections / Total connections × 100',
      target: '< 80%',
      category: 'Capacity'
    }
  ];

  const integrationTools = [
    {
      name: 'Postman',
      description: 'API development and testing platform',
      icon: Package,
      features: ['API testing', 'Documentation', 'Mock servers', 'Monitoring', 'Collaboration'],
      category: 'Testing'
    },
    {
      name: 'Swagger/OpenAPI',
      description: 'API specification and documentation framework',
      icon: FileCode,
      features: ['API documentation', 'Schema validation', 'Code generation', 'Testing', 'Interactive UI'],
      category: 'Documentation'
    },
    {
      name: 'Insomnia',
      description: 'REST client and API testing tool',
      icon: Send,
      features: ['REST client', 'GraphQL support', 'Environment variables', 'Testing', 'Code generation'],
      category: 'Testing'
    },
    {
      name: 'GraphQL Playground',
      description: 'Interactive GraphQL IDE for testing and exploration',
      icon: Code,
      features: ['Query testing', 'Schema exploration', 'Documentation', 'Real-time testing', 'History'],
      category: 'GraphQL'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="API Integration Patterns"
        description="Master modern API integration patterns with diagrammatic explanations for building robust and scalable frontend applications"
        icon={Cloud}
        category="System Design.API Integration"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding API Integration Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  API integration patterns define how frontend applications communicate with backend services. 
                  Learn essential patterns for implementing robust, scalable, and efficient API integrations 
                  with comprehensive diagrams and real-world examples.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Integration Focus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Communication Protocols:</strong> HTTP, WebSocket, gRPC, SSE
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Formats:</strong> JSON, XML, Protocol Buffers, GraphQL
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Architecture Patterns:</strong> REST, GraphQL, Real-time, Event-driven
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Performance Optimization:</strong> Caching, Batching, Compression
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Key Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Performance Impact:</strong> Minimizing latency and resource usage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Error Handling:</strong> Robust error recovery and retry mechanisms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Security:</strong> Authentication, authorization, and data protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Scalability:</strong> Handling growth and load distribution
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Integration Patterns */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Cloud className="w-6 h-6 text-blue-500" />
              API Integration Patterns
            </CardTitle>
            <CardDescription>
              Essential patterns for integrating frontend applications with various API architectures
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiPatterns.map((pattern, index) => (
                <ApiIntegrationPatternCard 
                  key={index} 
                  {...pattern} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integration Diagrams */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GitBranch className="w-6 h-6 text-purple-500" />
              API Integration Architecture Diagrams
            </CardTitle>
            <CardDescription>
              Visual representations of different API integration architectures and data flows
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-8">
              {integrationDiagrams.map((diagram, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn('p-3 rounded-xl', diagram.color)}>
                        <GitBranch className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {diagram.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {diagram.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Architecture Diagram */}
                      <div className="relative bg-slate-50 dark:bg-slate-800 rounded-lg p-6 overflow-x-auto">
                        <div className="flex items-center justify-between min-w-max">
                          {diagram.components.map((component, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div className={cn('p-4 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700', diagram.color)}>
                                <component.icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                              </div>
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-2">
                                {component.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Connection Flow */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Data Flow:</h4>
                        <div className="flex flex-wrap gap-2">
                          {diagram.connections.map((connection, i) => (
                            <div key={i} className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                              <span className="font-medium">{connection.from}</span>
                              <ArrowRight className="w-3 h-3" />
                              <span className="font-medium">{connection.to}</span>
                              <span className="text-blue-600 dark:text-blue-400">({connection.label})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integration Flows */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="w-6 h-6 text-green-500" />
              API Integration Flows
            </CardTitle>
            <CardDescription>
              Step-by-step workflows for different API integration patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {integrationFlows.map((flow, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn('p-3 rounded-xl', flow.color)}>
                        <flow.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {flow.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {flow.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Process Steps:</h4>
                      <div className="flex flex-wrap gap-2">
                        {flow.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">
                              {i + 1}
                            </div>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{step}</span>
                            {i < flow.steps.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-slate-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gauge className="w-6 h-6 text-orange-500" />
              API Performance Metrics
            </CardTitle>
            <CardDescription>
              Key performance indicators for measuring API integration effectiveness
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceMetrics.map((metric, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                        <metric.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {metric.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {metric.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Calculation:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          {metric.calculation}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">Target:</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{metric.target}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-orange-600 dark:text-orange-400 mb-1">Category:</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{metric.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integration Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-cyan-500" />
              API Integration Tools
            </CardTitle>
            <CardDescription>
              Essential platforms and services for API development, testing, and monitoring
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationTools.map((tool, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl">
                        <tool.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                          Category: {tool.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiIntegrationPatterns;
