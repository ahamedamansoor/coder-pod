'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Activity,
  Wifi,
  Zap,
  Globe,
  Server,
  Cloud,
  Monitor,
  Smartphone,
  Cpu,
  RefreshCw,
  MessageSquare,
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Target,
  Workflow,
  GitBranch,
  Box,
  Archive,
  Eye,
  Code,
  Terminal,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const getCodeSnippet = (patternTitle: string, framework: string): string => {
  const snippets: Record<string, Record<string, string>> = {
    'WebSocket Communication': {
      react: `// React WebSocket Hook
import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useWebSocket = <T = any>(url: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(url);

    socketRef.current.on('connect', () => {
      setIsConnected(true);
      setError(null);
    });

    socketRef.current.on('disconnect', () => {
      setIsConnected(false);
    });

    socketRef.current.on('message', (message: T) => {
      setData(message);
    });

    socketRef.current.on('error', (err: Error) => {
      setError(err.message);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [url]);

  const sendMessage = (message: any) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('message', message);
    }
  };

  return { isConnected, data, error, sendMessage };
};

// Usage
const ChatComponent = () => {
  const { isConnected, data, error, sendMessage } = useWebSocket('ws://localhost:3001');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    sendMessage({ text: message, timestamp: Date.now() });
    setMessage('');
  };

  return (
    <div>
      <div>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>
      {error && <div>Error: {error}</div>}
      {data && <div>Latest: {JSON.stringify(data)}</div>}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend} disabled={!isConnected}>Send</button>
    </div>
  );
};`,
      
      angular: `// Angular WebSocket Service
import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;
  private connectionStatus$ = new BehaviorSubject<boolean>(false);
  private messages$ = new Subject<any>();
  private errors$ = new Subject<Error>();

  constructor(private ngZone: NgZone) {}

  connect(url: string): void {
    this.socket$ = webSocket(url);

    this.socket$.subscribe({
      next: (message) => {
        this.ngZone.run(() => {
          this.messages$.next(message);
        });
      },
      error: (error) => {
        this.ngZone.run(() => {
          this.errors$.next(error);
        });
      },
      complete: () => {
        this.ngZone.run(() => {
          this.connectionStatus$.next(false);
        });
      }
    });

    this.connectionStatus$.next(true);
  }

  sendMessage(message: any): void {
    if (this.socket$) {
      this.socket$.next(message);
    }
  }

  getMessages(): Observable<any> {
    return this.messages$.asObservable();
  }

  getConnectionStatus(): Observable<boolean> {
    return this.connectionStatus$.asObservable();
  }

  disconnect(): void {
    if (this.socket$) {
      this.socket$.complete();
      this.socket$ = null;
    }
  }
}

// Component Usage
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-chat',
  template: \`
    <div>
      <div>Status: {{ isConnected ? 'Connected' : 'Disconnected' }}</div>
      <div *ngIf="error">Error: {{ error }}</div>
      <div *ngIf="latestMessage">Latest: {{ latestMessage | json }}</div>
      <input [(ngModel)]="message" />
      <button (click)="send()" [disabled]="!isConnected">Send</button>
    </div>
  \`
})
export class ChatComponent implements OnInit, OnDestroy {
  isConnected = false;
  latestMessage: any = null;
  error: string | null = null;
  message = '';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.connect('ws://localhost:3001');
    
    this.webSocketService.getConnectionStatus()
      .subscribe(status => this.isConnected = status);
      
    this.webSocketService.getMessages()
      .subscribe(message => this.latestMessage = message);
  }

  send(): void {
    this.webSocketService.sendMessage({
      text: this.message,
      timestamp: Date.now()
    });
    this.message = '';
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
}`,
      
      vue: `// Vue WebSocket Composable
import { ref, reactive, onUnmounted } from 'vue';
import { io, Socket } from 'socket.io-client';

export function useWebSocket<T = any>(url: string) {
  const state = reactive({
    isConnected: false,
    data: null as T | null,
    error: null as string | null
  });

  const socket = ref<Socket | null>(null);

  const connect = () => {
    socket.value = io(url);

    socket.value.on('connect', () => {
      state.isConnected = true;
      state.error = null;
    });

    socket.value.on('disconnect', () => {
      state.isConnected = false;
    });

    socket.value.on('message', (message: T) => {
      state.data = message;
    });

    socket.value.on('error', (err: Error) => {
      state.error = err.message;
    });
  };

  const sendMessage = (message: any) => {
    if (socket.value?.connected) {
      socket.value.emit('message', message);
    }
  };

  const disconnect = () => {
    if (socket.value) {
      socket.value.disconnect();
      socket.value = null;
    }
    state.isConnected = false;
  };

  connect();

  onUnmounted(() => {
    disconnect();
  });

  return {
    state,
    sendMessage,
    disconnect
  };
}

// Component Usage
<template>
  <div>
    <div>Status: {{ state.isConnected ? 'Connected' : 'Disconnected' }}</div>
    <div v-if="state.error">Error: {{ state.error }}</div>
    <div v-if="state.data">Latest: {{ JSON.stringify(state.data) }}</div>
    <input v-model="message" />
    <button @click="send" :disabled="!state.isConnected">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWebSocket } from '@/composables/useWebSocket';

const { state, sendMessage } = useWebSocket('ws://localhost:3001');
const message = ref('');

const send = () => {
  sendMessage({
    text: message.value,
    timestamp: Date.now()
  });
  message.value = '';
};
</script>`
    },
    'Server-Sent Events': {
      react: `// React Server-Sent Events Hook
import { useEffect, useState, useRef } from 'react';

const useServerSentEvents = <T = any>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    const connect = () => {
      try {
        eventSourceRef.current = new EventSource(url);

        eventSourceRef.current.onopen = () => {
          setIsConnected(true);
          setError(null);
        };

        eventSourceRef.current.onmessage = (event) => {
          try {
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
          } catch (error) {
            console.error('Failed to parse SSE data:', error);
          }
        };

        eventSourceRef.current.onerror = (error) => {
          console.error('SSE error:', error);
          setIsConnected(false);
          setError('SSE connection error');
        };

      } catch (error) {
        setError('Failed to create SSE connection');
        console.error('SSE connection error:', error);
      }
    };

    connect();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [url]);

  return { data, isConnected, error };
};

// Usage - Stock Price Ticker
const StockTicker = () => {
  const { data, isConnected, error } = useServerSentEvents('/api/stocks/stream');

  return (
    <div>
      <h3>Live Stock Prices</h3>
      <div>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <p>Symbol: {data.symbol}</p>
          <p>Price: \${data.price}</p>
          <p>Change: {data.change}%</p>
        </div>
      )}
    </div>
  );
};`,
      
      angular: `// Angular Server-Sent Events Service
import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerSentEventsService {
  private eventSource: EventSource | null = null;
  
  private state$ = new BehaviorSubject({
    isConnected: false,
    data: null,
    error: null
  });

  private messages$ = new Subject<any>();

  constructor(private ngZone: NgZone) {}

  connect(url: string): void {
    try {
      this.eventSource = new EventSource(url);

      this.eventSource.onopen = () => {
        console.log('SSE connection opened');
        this.ngZone.run(() => {
          this.state$.next({
            ...this.state$.value,
            isConnected: true,
            error: null
          });
        });
      };

      this.eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.ngZone.run(() => {
            this.state$.next({
              ...this.state$.value,
              data
            });
            
            this.messages$.next(data);
          });
        } catch (error) {
          console.error('Failed to parse SSE data:', error);
        }
      };

      this.eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        this.ngZone.run(() => {
          this.state$.next({
            ...this.state$.value,
            isConnected: false,
            error: 'SSE connection error'
          });
        });
      };

    } catch (error) {
      this.ngZone.run(() => {
        this.state$.next({
          ...this.state$.value,
          isConnected: false,
          error: 'Failed to create SSE connection'
        });
      });
      console.error('SSE connection error:', error);
    }
  }

  getState(): Observable<any> {
    return this.state$.asObservable();
  }

  getMessages(): Observable<any> {
    return this.messages$.asObservable();
  }

  disconnect(): void {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
    
    this.ngZone.run(() => {
      this.state$.next({
        ...this.state$.value,
        isConnected: false
      });
    });
  }
}

// Component Usage
@Component({
  selector: 'app-stock-ticker',
  template: \`
    <div>
      <h3>Live Stock Prices</h3>
      <div>Status: {{ state.isConnected ? 'Connected' : 'Disconnected' }}</div>
      <div *ngIf="state.error">Error: {{ state.error }}</div>
      <div *ngIf="state.data">
        <p>Symbol: {{ state.data.symbol }}</p>
        <p>Price: $\` + "{{ state.data.price }}" + \`</p>
        <p>Change: {{ state.data.change }}%</p>
      </div>
    </div>
  \`
})
export class StockTickerComponent implements OnInit, OnDestroy {
  state = {
    isConnected: false,
    data: null,
    error: null
  };

  constructor(private sseService: ServerSentEventsService) {}

  ngOnInit(): void {
    this.sseService.connect('/api/stocks/stream');
    
    this.sseService.getState()
      .subscribe(state => this.state = state);
  }

  ngOnDestroy(): void {
    this.sseService.disconnect();
  }
}`,
      
      vue: `// Vue Server-Sent Events Composable
import { ref, reactive, onUnmounted } from 'vue';

export function useServerSentEvents<T = any>(url: string) {
  const state = reactive({
    data: null as T | null,
    isConnected: false,
    error: null as string | null
  });

  const eventSource = ref<EventSource | null>(null);

  const connect = () => {
    try {
      eventSource.value = new EventSource(url);

      eventSource.value.onopen = () => {
        state.isConnected = true;
        state.error = null;
        console.log('SSE connection opened');
      };

      eventSource.value.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          state.data = data;
        } catch (error) {
          console.error('Failed to parse SSE data:', error);
        }
      };

      eventSource.value.onerror = (error) => {
        console.error('SSE error:', error);
        state.isConnected = false;
        state.error = 'SSE connection error';
      };

    } catch (error) {
      state.error = 'Failed to create SSE connection';
      console.error('SSE connection error:', error);
    }
  };

  const disconnect = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
    }
    
    state.isConnected = false;
  };

  connect();

  onUnmounted(() => {
    disconnect();
  });

  return {
    state,
    connect,
    disconnect
  };
}

// Component Usage
<template>
  <div>
    <h3>Live Stock Prices</h3>
    <div>Status: {{ state.isConnected ? 'Connected' : 'Disconnected' }}</div>
    <div v-if="state.error">Error: {{ state.error }}</div>
    <div v-if="state.data">
      <p>Symbol: {{ state.data.symbol }}</p>
      <p>Price: $\` + "{{ state.data.price }}" + \`</p>
      <p>Change: {{ state.data.change }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useServerSentEvents } from '@/composables/useServerSentEvents';

const { state } = useServerSentEvents('/api/stocks/stream');
</script>`
    },
    'Real-Time Data Sync': {
      react: `// React Real-Time Data Sync Hook
import { useEffect, useState, useRef } from 'react';

interface SyncOptions {
  url: string;
  conflictResolution?: 'latest' | 'merge' | 'prompt';
  syncInterval?: number;
}

const useRealTimeSync = <T = any>(
  initialData: T,
  options: SyncOptions
) => {
  const [data, setData] = useState<T>(initialData);
  const [isSyncing, setIsSyncing] = useState(false);
  const [conflicts, setConflicts] = useState<Array<{local: T, remote: T}>>([]);
  
  const wsRef = useRef<WebSocket | null>(null);
  const lastSyncRef = useRef<number>(Date.now());

  useEffect(() => {
    const connect = () => {
      wsRef.current = new WebSocket(options.url);

      wsRef.current.onopen = () => {
        console.log('Real-time sync connected');
        startSync();
      };

      wsRef.current.onmessage = (event) => {
        const message = JSON.parse(event.data);
        handleIncomingData(message);
      };

      wsRef.current.onclose = () => {
        console.log('Real-time sync disconnected');
        stopSync();
      };
    };

    const handleIncomingData = (message: any) => {
      if (message.type === 'data_update') {
        resolveConflict(message.data, message.timestamp);
      }
    };

    const resolveConflict = (newData: T, timestamp: number) => {
      switch (options.conflictResolution) {
        case 'latest':
          if (timestamp > lastSyncRef.current) {
            setData(newData);
          }
          break;
        case 'merge':
          setData(mergeData(data, newData));
          break;
        case 'prompt':
          setConflicts(prev => [...prev, { local: data, remote: newData }]);
          break;
      }
      lastSyncRef.current = timestamp;
    };

    const mergeData = (local: T, remote: T): T => {
      return { ...local, ...remote };
    };

    const startSync = () => {
      setIsSyncing(true);
      const interval = setInterval(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify({
            type: 'sync_request',
            timestamp: Date.now()
          }));
        }
      }, options.syncInterval || 30000);
      
      return () => clearInterval(interval);
    };

    const stopSync = () => {
      setIsSyncing(false);
    };

    connect();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [options.url]);

  const updateData = (newData: T) => {
    setData(newData);
    
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'data_update',
        data: newData,
        timestamp: Date.now()
      }));
    }
  };

  const resolveConflict = (index: number, resolution: 'local' | 'remote') => {
    const conflict = conflicts[index];
    setData(resolution === 'local' ? conflict.local : conflict.remote);
    setConflicts(prev => prev.filter((_, i) => i !== index));
  };

  return {
    data,
    isSyncing,
    conflicts,
    updateData,
    resolveConflict
  };
};

// Usage - Collaborative Document
const CollaborativeEditor = () => {
  const initialDoc = { title: '', content: '', lastModified: Date.now() };
  const { data, isSyncing, conflicts, updateData, resolveConflict } = useRealTimeSync(
    initialDoc,
    {
      url: 'ws://localhost:3001/sync',
      conflictResolution: 'prompt'
    }
  );

  return (
    <div>
      <div>Sync Status: {isSyncing ? 'Syncing' : 'Idle'}</div>
      <input
        value={data.title}
        onChange={(e) => updateData({ ...data, title: e.target.value })}
        placeholder="Document title"
      />
      <textarea
        value={data.content}
        onChange={(e) => updateData({ ...data, content: e.target.value })}
        placeholder="Document content"
      />
      
      {conflicts.map((conflict, index) => (
        <div key={index}>
          <h4>Conflict Detected</h4>
          <button onClick={() => resolveConflict(index, 'local')}>
            Use Local
          </button>
          <button onClick={() => resolveConflict(index, 'remote')}>
            Use Remote
          </button>
        </div>
      ))}
    </div>
  );
};`,
      
      angular: `// Angular Real-Time Data Sync Service
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Subject, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealTimeSyncService {
  private ws: WebSocket | null = null;
  private syncInterval = 30000;
  
  private data$ = new BehaviorSubject<any>(null);
  private isSyncing$ = new BehaviorSubject<boolean>(false);
  private conflicts$ = new Subject<any>();

  constructor(private ngZone: NgZone) {}

  connect(url: string, initialData: any): void {
    this.data$.next(initialData);
    
    this.ws = new WebSocket(url);

    this.ws.onopen = () => {
      console.log('Real-time sync connected');
      this.ngZone.run(() => {
        this.startSync();
      });
    };

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.ngZone.run(() => {
        this.handleIncomingData(message);
      });
    };

    this.ws.onclose = () => {
      console.log('Real-time sync disconnected');
      this.ngZone.run(() => {
        this.stopSync();
      });
    };
  }

  private handleIncomingData(message: any): void {
    if (message.type === 'data_update') {
      this.resolveConflict(message.data, message.timestamp);
    }
  }

  private resolveConflict(newData: any, timestamp: number): void {
    const currentData = this.data$.value;
    // Simple conflict resolution - can be enhanced
    this.data$.next(newData);
  }

  private startSync(): void {
    this.isSyncing$.next(true);
    
    interval(this.syncInterval).pipe(
      takeWhile(() => this.ws?.readyState === WebSocket.OPEN)
    ).subscribe(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'sync_request',
          timestamp: Date.now()
        }));
      }
    });
  }

  private stopSync(): void {
    this.isSyncing$.next(false);
  }

  updateData(newData: any): void {
    this.data$.next(newData);
    
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'data_update',
        data: newData,
        timestamp: Date.now()
      }));
    }
  }

  getData() {
    return this.data$.asObservable();
  }

  getIsSyncing() {
    return this.isSyncing$.asObservable();
  }

  getConflicts() {
    return this.conflicts$.asObservable();
  }

  disconnect(): void {
    this.stopSync();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

// Component Usage
@Component({
  selector: 'app-collaborative-editor',
  template: \`
    <div>
      <div>Sync Status: {{ isSyncing ? 'Syncing' : 'Idle' }}</div>
      <input
        [(ngModel)]="document.title"
        (ngModelChange)="updateDocument()"
        placeholder="Document title"
      />
      <textarea
        [(ngModel)]="document.content"
        (ngModelChange)="updateDocument()"
        placeholder="Document content"
      ></textarea>
    </div>
  \`
})
export class CollaborativeEditorComponent implements OnInit, OnDestroy {
  document = { title: '', content: '' };
  isSyncing = false;

  constructor(private syncService: RealTimeSyncService) {}

  ngOnInit(): void {
    this.syncService.connect('ws://localhost:3001/sync', this.document);
    
    this.syncService.getData().subscribe(data => {
      if (data) this.document = data;
    });
    
    this.syncService.getIsSyncing().subscribe(syncing => {
      this.isSyncing = syncing;
    });
  }

  updateDocument(): void {
    this.syncService.updateData(this.document);
  }

  ngOnDestroy(): void {
    this.syncService.disconnect();
  }
}`,
      
      vue: `// Vue Real-Time Data Sync Composable
import { ref, reactive, onUnmounted } from 'vue';

export function useRealTimeSync<T = any>(
  initialData: T,
  options: { url: string; syncInterval?: number }
) {
  const state = reactive({
    data: initialData as T,
    isSyncing: false,
    conflicts: [] as Array<{local: T, remote: T}>
  });

  const ws = ref<WebSocket | null>(null);
  let syncInterval: NodeJS.Timeout | null = null;

  const connect = () => {
    ws.value = new WebSocket(options.url);

    ws.value.onopen = () => {
      console.log('Real-time sync connected');
      startSync();
    };

    ws.value.onmessage = (event) => {
      const message = JSON.parse(event.data);
      handleIncomingData(message);
    };

    ws.value.onclose = () => {
      console.log('Real-time sync disconnected');
      stopSync();
    };
  };

  const handleIncomingData = (message: any) => {
    if (message.type === 'data_update') {
      resolveConflict(message.data, message.timestamp);
    }
  };

  const resolveConflict = (newData: T, timestamp: number) => {
    // Simple conflict resolution - can be enhanced
    state.data = newData;
  };

  const startSync = () => {
    state.isSyncing = true;
    
    syncInterval = setInterval(() => {
      if (ws.value?.readyState === WebSocket.OPEN) {
        ws.value.send(JSON.stringify({
          type: 'sync_request',
          timestamp: Date.now()
        }));
      }
    }, options.syncInterval || 30000);
  };

  const stopSync = () => {
    state.isSyncing = false;
    if (syncInterval) {
      clearInterval(syncInterval);
      syncInterval = null;
    }
  };

  const updateData = (newData: T) => {
    state.data = newData;
    
    if (ws.value?.readyState === WebSocket.OPEN) {
      ws.value.send(JSON.stringify({
        type: 'data_update',
        data: newData,
        timestamp: Date.now()
      }));
    }
  };

  const resolveConflictChoice = (index: number, resolution: 'local' | 'remote') => {
    const conflict = state.conflicts[index];
    state.data = resolution === 'local' ? conflict.local : conflict.remote;
    state.conflicts.splice(index, 1);
  };

  connect();

  onUnmounted(() => {
    stopSync();
    if (ws.value) {
      ws.value.close();
    }
  });

  return {
    state,
    updateData,
    resolveConflictChoice
  };
}

// Component Usage
<template>
  <div>
    <div>Sync Status: {{ state.isSyncing ? 'Syncing' : 'Idle' }}</div>
    <input
      v-model="document.title"
      @input="updateDocument"
      placeholder="Document title"
    />
    <textarea
      v-model="document.content"
      @input="updateDocument"
      placeholder="Document content"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRealTimeSync } from '@/composables/useRealTimeSync';

const document = reactive({ title: '', content: '' });
const { state, updateData } = useRealTimeSync(document, {
  url: 'ws://localhost:3001/sync'
});

const updateDocument = () => {
  updateData(document);
};
</script>`
    }
  };

  const patternKey = Object.keys(snippets).find(key => 
    patternTitle.toLowerCase().includes(key.toLowerCase())
  );

  if (patternKey && snippets[patternKey][framework]) {
    return snippets[patternKey][framework];
  }

  return `// Example code for ${patternTitle} in ${framework}
// Implementation coming soon...`;
};

interface RealTimeDataPatternProps {
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
  useCases: string[];
}

const RealTimeDataPatternCard: React.FC<RealTimeDataPatternProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  category,
  complexity,
  frameworks,
  benefits,
  challenges,
  useCases
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState('react');

  const frameworkTabs = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' },
    { id: 'vue', label: 'Vue', icon: '💚' }
  ];

  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-2 hover:border-opacity-50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            category === 'Communication' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
            category === 'Streaming' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
            'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
          }`}>
            {category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            complexity === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
            complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
          }`}>
            {complexity}
          </span>
        </div>
      </CardHeader>
      <CardContent>
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
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Common Use Cases</h4>
            <div className="flex flex-wrap gap-1">
              {useCases.slice(0, isExpanded ? useCases.length : 3).map((useCase, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {useCase}
                </span>
              ))}
              {!isExpanded && useCases.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{useCases.length - 3} more
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

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Code Examples</h4>
                  <div className="flex gap-1">
                    {frameworkTabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedFramework(tab.id)}
                        className={`px-3 py-1 text-xs rounded transition-colors ${
                          selectedFramework === tab.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        {tab.icon} {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto overflow-y-auto max-h-96">
                  <pre className="text-xs leading-relaxed whitespace-pre-wrap break-words">
                    <code>{getCodeSnippet(title, selectedFramework)}</code>
                  </pre>
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

const RealTimeData: React.FC = () => {
  const realTimeDataPatterns = [
    {
      title: 'WebSocket Communication',
      description: 'Bidirectional real-time communication between client and server using WebSocket protocol',
      icon: Wifi,
      color: 'bg-blue-500',
      category: 'Communication',
      complexity: 'Medium',
      frameworks: {
        react: ['Socket.IO', 'WebSocket API', 'React Hooks', 'SWR'],
        angular: ['Socket.IO', 'WebSocket API', 'RxJS', 'NgRx'],
        vue: ['Socket.IO', 'WebSocket API', 'Composables', 'Pinia']
      },
      benefits: [
        'Real-time communication',
        'Low latency',
        'Bidirectional data flow',
        'Connection persistence',
        'Event-driven architecture',
        'Scalable messaging'
      ],
      challenges: [
        'Connection management',
        'Reconnection logic',
        'Error handling',
        'Scaling challenges',
        'Security concerns',
        'Browser compatibility'
      ],
      useCases: [
        'Chat applications',
        'Live notifications',
        'Real-time gaming',
        'Collaborative editing',
        'Stock trading platforms',
        'IoT dashboards'
      ]
    },
    {
      title: 'Server-Sent Events',
      description: 'Unidirectional server-to-client real-time data streaming using HTTP-based protocol',
      icon: Activity,
      color: 'bg-green-500',
      category: 'Streaming',
      complexity: 'Easy',
      frameworks: {
        react: ['EventSource API', 'React Hooks', 'Fetch API', 'Axios'],
        angular: ['EventSource API', 'RxJS', 'HTTP Client', 'Observables'],
        vue: ['EventSource API', 'Composables', 'Fetch API', 'Vue Query']
      },
      benefits: [
        'Simple implementation',
        'Automatic reconnection',
        'HTTP-based',
        'Low resource usage',
        'Good for notifications',
        'Standardized protocol'
      ],
      challenges: [
        'Unidirectional only',
        'No client-to-server communication',
        'Limited browser support',
        'Connection limits',
        'No binary data',
        'CORS restrictions'
      ],
      useCases: [
        'News feeds',
        'Stock price updates',
        'Social media timelines',
        'Live sports scores',
        'Notification systems',
        'Status updates'
      ]
    },
    {
      title: 'Real-Time Data Sync',
      description: 'Synchronize data across multiple clients with conflict resolution and optimistic updates',
      icon: RefreshCw,
      color: 'bg-purple-500',
      category: 'Synchronization',
      complexity: 'Hard',
      frameworks: {
        react: ['React Query', 'SWR', 'WebSocket', 'Optimistic Updates'],
        angular: ['NgRx', 'RxJS', 'WebSocket', 'State Management'],
        vue: ['Pinia', 'Vue Query', 'WebSocket', 'Composables']
      },
      benefits: [
        'Multi-user collaboration',
        'Conflict resolution',
        'Optimistic updates',
        'Data consistency',
        'Offline support',
        'Real-time collaboration'
      ],
      challenges: [
        'Conflict resolution complexity',
        'Data consistency',
        'Performance optimization',
        'Network reliability',
        'State synchronization',
        'Debugging complexity'
      ],
      useCases: [
        'Collaborative documents',
        'Real-time forms',
        'Multi-player games',
        'Project management tools',
        'Design collaboration',
        'Data entry applications'
      ]
    },
    {
      title: 'Live Data Streaming',
      description: 'Continuous data streaming for real-time analytics and monitoring applications',
      icon: TrendingUp,
      color: 'bg-orange-500',
      category: 'Streaming',
      complexity: 'Medium',
      frameworks: {
        react: ['WebRTC', 'WebSocket', 'Chart.js', 'D3.js'],
        angular: ['WebRTC', 'RxJS', 'Chart.js', 'Ngx-Charts'],
        vue: ['WebRTC', 'WebSocket', 'Chart.js', 'Vue-Charts']
      },
      benefits: [
        'Real-time analytics',
        'Continuous updates',
        'Low latency',
        'Scalable streaming',
        'Rich visualizations',
        'Interactive dashboards'
      ],
      challenges: [
        'Data volume management',
        'Performance optimization',
        'Memory management',
        'Browser limitations',
        'Network bandwidth',
        'Data processing'
      ],
      useCases: [
        'Analytics dashboards',
        'Monitoring systems',
        'Financial data',
        'IoT sensor data',
        'Performance metrics',
        'Real-time reporting'
      ]
    },
    {
      title: 'Push Notifications',
      description: 'Real-time push notifications for user engagement and timely updates',
      icon: MessageSquare,
      color: 'bg-red-500',
      category: 'Communication',
      complexity: 'Medium',
      frameworks: {
        react: ['Push API', 'Service Workers', 'Notifications API', 'Web Push'],
        angular: ['Push API', 'Service Workers', 'Angular PWA', 'Notifications'],
        vue: ['Push API', 'Service Workers', 'Vue PWA', 'Push Libraries']
      },
      benefits: [
        'User engagement',
        'Timely updates',
        'Cross-platform',
        'Background delivery',
        'Rich content',
        'Actionable notifications'
      ],
      challenges: [
        'Permission management',
        'Browser support',
        'Security requirements',
        'HTTPS requirement',
        'User experience',
        'Delivery reliability'
      ],
      useCases: [
        'Messaging apps',
        'E-commerce alerts',
        'Social media',
        'News updates',
        'Appointment reminders',
        'System notifications'
      ]
    },
    {
      title: 'Collaborative Editing',
      description: 'Real-time collaborative document editing with operational transformation',
      icon: Users,
      color: 'bg-indigo-500',
      category: 'Synchronization',
      complexity: 'Hard',
      frameworks: {
        react: ['OT/CRDT', 'WebSocket', 'Draft.js', 'Slate.js'],
        angular: ['OT/CRDT', 'WebSocket', 'Quill.js', 'Angular Editor'],
        vue: ['OT/CRDT', 'WebSocket', 'TipTap', 'Vue Editor']
      },
      benefits: [
        'Real-time collaboration',
        'Conflict resolution',
        'Version control',
        'User presence',
        'Change tracking',
        'Seamless experience'
      ],
      challenges: [
        'Conflict resolution',
        'Algorithm complexity',
        'Performance scaling',
        'State management',
        'Network reliability',
        'User experience design'
      ],
      useCases: [
        'Document editors',
        'Code collaboration',
        'Design tools',
        'Spreadsheets',
        'Whiteboards',
        'Knowledge bases'
      ]
    }
  ];

  const realWorldExamples = [
    {
      name: 'Live Chat System',
      description: 'Real-time messaging with presence indicators and typing notifications',
      icon: MessageSquare,
      features: ['WebSocket', 'Presence detection', 'Message history', 'File sharing'],
      category: 'Communication'
    },
    {
      name: 'Stock Trading Platform',
      description: 'Real-time market data with live price updates and trading capabilities',
      icon: TrendingUp,
      features: ['Live prices', 'Real-time charts', 'Order execution', 'Portfolio tracking'],
      category: 'Finance'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time data visualization with live metrics and KPI tracking',
      icon: BarChart3,
      features: ['Live charts', 'Real-time metrics', 'Custom widgets', 'Alert systems'],
      category: 'Analytics'
    },
    {
      name: 'Collaborative Editor',
      description: 'Multi-user document editing with real-time synchronization',
      icon: Code,
      features: ['OT/CRDT sync', 'User cursors', 'Version history', 'Comments'],
      category: 'Productivity'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Real-Time Data"
        description="Master real-time data architecture patterns for building responsive, live-updating frontend applications with WebSocket, SSE, and collaborative features"
        icon={Activity}
        category="System Design.Real-Time Data"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Real-Time Data Architecture
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Real-time data architecture enables instant data updates and live user interactions in frontend applications. 
                  Master essential patterns for implementing WebSocket communication, server-sent events, and data synchronization 
                  to create responsive, collaborative, and engaging user experiences.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Why Real-Time Matters
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Provides instant user feedback and engagement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Enables collaborative user experiences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Improves application responsiveness and UX
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Supports modern interactive application patterns
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Key Technologies
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      WebSocket for bidirectional communication
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Server-Sent Events for streaming updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Operational Transformation for collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Push Notifications for user engagement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-Time Data Patterns */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Essential Real-Time Data Patterns
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore the fundamental and advanced real-time patterns that power modern interactive web applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {realTimeDataPatterns.map((pattern, index) => (
              <RealTimeDataPatternCard key={index} {...pattern} />
            ))}
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              See how real-time data patterns are implemented in production applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realWorldExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl w-fit">
                    <example.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{example.name}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features</h5>
                      <div className="flex flex-wrap gap-1">
                        {example.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                        {example.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 dark:text-green-300 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Real-Time Data Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Follow these guidelines to build robust and scalable real-time data architectures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Do's
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Choose the right communication protocol for your use case
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Implement proper connection management and error handling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Optimize for performance and scalability from the start
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Design for offline functionality and reconnection scenarios
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Don'ts
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Ignore connection state management and error scenarios
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Overload clients with unnecessary real-time updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Neglect security considerations for real-time connections
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Skip proper testing of reconnection and error handling
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RealTimeData;
