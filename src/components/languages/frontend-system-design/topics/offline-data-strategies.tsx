import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Wifi, WifiOff, HardDrive, RefreshCw, Database, Shield, Activity, Target, Info, Settings, AlertTriangle, CheckCircle, X, AlertCircle, Cloud, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const getCodeSnippet = (patternTitle: string, framework: string): string => {
  const snippets: Record<string, Record<string, string>> = {
    'Service Worker Caching': {
      react: `// React Service Worker Hook
import { useEffect, useState } from 'react';

const useServiceWorker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swRegistration, setSwRegistration] = useState(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration);
          setSwRegistration(registration);
        })
        .catch(error => {
          console.error('SW registration failed:', error);
        });
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, swRegistration };
};

// Cache Helper
const cacheHelper = {
  async cacheData(key: string, data: any) {
    const cache = await caches.open('api-cache-v1');
    const response = new Response(JSON.stringify(data));
    await cache.put(key, response);
  },

  async getCachedData(key: string) {
    const cache = await caches.open('api-cache-v1');
    const response = await cache.match(key);
    return response ? await response.json() : null;
  }
};

export { useServiceWorker, cacheHelper };`,
      
      angular: `// Angular Service Worker Service
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  private isOnline$ = new BehaviorSubject<boolean>(navigator.onLine);
  private swRegistration: ServiceWorkerRegistration | null = null;

  constructor() {
    this.registerServiceWorker();
    this.setupOnlineStatusListener();
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        this.swRegistration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered:', this.swRegistration);
      } catch (error) {
        console.error('SW registration failed:', error);
      }
    }
  }

  private setupOnlineStatusListener() {
    window.addEventListener('online', () => this.isOnline$.next(true));
    window.addEventListener('offline', () => this.isOnline$.next(false));
  }

  get isOnline() {
    return this.isOnline$.asObservable();
  }

  async cacheData(key: string, data: any): Promise<void> {
    const cache = await caches.open('api-cache-v1');
    const response = new Response(JSON.stringify(data));
    await cache.put(key, response);
  }

  async getCachedData(key: string): Promise<any> {
    const cache = await caches.open('api-cache-v1');
    const response = await cache.match(key);
    return response ? await response.json() : null;
  }
}`,
      
      vue: `// Vue Service Worker Composable
import { ref, onMounted, onUnmounted } from 'vue';

export function useServiceWorker() {
  const isOnline = ref(navigator.onLine);
  const swRegistration = ref<ServiceWorkerRegistration | null>(null);

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        swRegistration.value = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered:', swRegistration.value);
      } catch (error) {
        console.error('SW registration failed:', error);
      }
    }
  };

  const handleOnline = () => isOnline.value = true;
  const handleOffline = () => isOnline.value = false;

  onMounted(() => {
    registerServiceWorker();
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
  });

  onUnmounted(() => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  });

  return { isOnline, swRegistration };
}

// Cache Helper
export const cacheHelper = {
  async cacheData(key: string, data: any) {
    const cache = await caches.open('api-cache-v1');
    const response = new Response(JSON.stringify(data));
    await cache.put(key, response);
  },

  async getCachedData(key: string) {
    const cache = await caches.open('api-cache-v1');
    const response = await cache.match(key);
    return response ? await response.json() : null;
  }
};`
    },
    'IndexedDB Storage': {
      react: `// React IndexedDB Hook
import { useEffect, useState } from 'react';

class IndexedDBService {
  private db: IDBDatabase | null = null;

  async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('OfflineAppDB', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('offlineData')) {
          db.createObjectStore('offlineData', { keyPath: 'id' });
        }
      };
    });
  }

  async storeData(key: string, data: any): Promise<void> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['offlineData'], 'readwrite');
    const store = transaction.objectStore('offlineData');
    await store.put({ id: key, data, timestamp: Date.now() });
  }

  async getData(key: string): Promise<any> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['offlineData'], 'readonly');
    const store = transaction.objectStore('offlineData');
    const result = await store.get(key);
    return result ? result.data : null;
  }
}

const useIndexedDB = () => {
  const [dbService] = useState(() => new IndexedDBService());

  return {
    storeData: dbService.storeData.bind(dbService),
    getData: dbService.getData.bind(dbService)
  };
};

export { useIndexedDB, IndexedDBService };`,
      
      angular: `// Angular IndexedDB Service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private db: IDBDatabase | null = null;

  async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('OfflineAppDB', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('offlineData')) {
          db.createObjectStore('offlineData', { keyPath: 'id' });
        }
      };
    });
  }

  async storeData(key: string, data: any): Promise<void> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['offlineData'], 'readwrite');
    const store = transaction.objectStore('offlineData');
    await store.put({ id: key, data, timestamp: Date.now() });
  }

  async getData(key: string): Promise<any> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['offlineData'], 'readonly');
    const store = transaction.objectStore('offlineData');
    const result = await store.get(key);
    return result ? result.data : null;
  }
}`,
      
      vue: `// Vue IndexedDB Composable
import { ref } from 'vue';

class IndexedDBManager {
  private db: IDBDatabase | null = null;

  async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('OfflineAppDB', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('offlineData')) {
          db.createObjectStore('offlineData', { keyPath: 'id' });
        }
      };
    });
  }

  async storeData(key: string, data: any): Promise<void> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['offlineData'], 'readwrite');
    const store = transaction.objectStore('offlineData');
    await store.put({ id: key, data, timestamp: Date.now() });
  }

  async getData(key: string): Promise<any> {
    if (!this.db) await this.initDB();
    
    const transaction = this.db!.transaction(['offlineData'], 'readonly');
    const store = transaction.objectStore('offlineData');
    const result = await store.get(key);
    return result ? result.data : null;
  }
}

export function useIndexedDB() {
  const dbManager = new IndexedDBManager();

  return {
    storeData: dbManager.storeData.bind(dbManager),
    getData: dbManager.getData.bind(dbManager)
  };
}`
    },
    'Background Sync API': {
      react: `// React Background Sync Hook
import { useEffect, useState } from 'react';

const useBackgroundSync = () => {
  const [syncSupported, setSyncSupported] = useState(false);
  const [pendingSync, setPendingSync] = useState<string[]>([]);

  useEffect(() => {
    setSyncSupported('serviceWorker' in navigator && 'SyncManager' in window);
    loadPendingSync();
  }, []);

  const registerSync = async (tag: string) => {
    if (!syncSupported) return false;

    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register(tag);
      
      // Track pending sync
      setPendingSync(prev => [...prev, tag]);
      localStorage.setItem('pendingSync', JSON.stringify([...pendingSync, tag]));
      
      return true;
    } catch (error) {
      console.error('Background sync registration failed:', error);
      return false;
    }
  };

  const loadPendingSync = () => {
    const stored = localStorage.getItem('pendingSync');
    if (stored) {
      setPendingSync(JSON.parse(stored));
    }
  };

  const clearPendingSync = (tag: string) => {
    const updated = pendingSync.filter(t => t !== tag);
    setPendingSync(updated);
    localStorage.setItem('pendingSync', JSON.stringify(updated));
  };

  return {
    syncSupported,
    pendingSync,
    registerSync,
    clearPendingSync
  };
};

export { useBackgroundSync };`,
      
      angular: `// Angular Background Sync Service
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundSyncService {
  private syncSupported = false;
  private pendingSync$ = new BehaviorSubject<string[]>([]);

  constructor() {
    this.checkSupport();
    this.loadPendingSync();
  }

  private checkSupport() {
    this.syncSupported = 'serviceWorker' in navigator && 'SyncManager' in window;
  }

  private loadPendingSync() {
    const stored = localStorage.getItem('pendingSync');
    if (stored) {
      this.pendingSync$.next(JSON.parse(stored));
    }
  }

  async registerSync(tag: string): Promise<boolean> {
    if (!this.syncSupported) return false;

    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register(tag);
      
      // Track pending sync
      const current = this.pendingSync$.value;
      const updated = [...current, tag];
      this.pendingSync$.next(updated);
      localStorage.setItem('pendingSync', JSON.stringify(updated));
      
      return true;
    } catch (error) {
      console.error('Background sync registration failed:', error);
      return false;
    }
  }

  clearPendingSync(tag: string) {
    const current = this.pendingSync$.value;
    const updated = current.filter(t => t !== tag);
    this.pendingSync$.next(updated);
    localStorage.setItem('pendingSync', JSON.stringify(updated));
  }

  get isSupported() {
    return this.syncSupported;
  }

  get pendingSync() {
    return this.pendingSync$.asObservable();
  }
}`,
      
      vue: `// Vue Background Sync Composable
import { ref, onMounted } from 'vue';

export function useBackgroundSync() {
  const syncSupported = ref(false);
  const pendingSync = ref<string[]>([]);

  const checkSupport = () => {
    syncSupported.value = 'serviceWorker' in navigator && 'SyncManager' in window;
  };

  const loadPendingSync = () => {
    const stored = localStorage.getItem('pendingSync');
    if (stored) {
      pendingSync.value = JSON.parse(stored);
    }
  };

  const registerSync = async (tag: string): Promise<boolean> => {
    if (!syncSupported.value) return false;

    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register(tag);
      
      // Track pending sync
      pendingSync.value = [...pendingSync.value, tag];
      localStorage.setItem('pendingSync', JSON.stringify(pendingSync.value));
      
      return true;
    } catch (error) {
      console.error('Background sync registration failed:', error);
      return false;
    }
  };

  const clearPendingSync = (tag: string) => {
    pendingSync.value = pendingSync.value.filter(t => t !== tag);
    localStorage.setItem('pendingSync', JSON.stringify(pendingSync.value));
  };

  onMounted(() => {
    checkSupport();
    loadPendingSync();
  });

  return {
    syncSupported,
    pendingSync,
    registerSync,
    clearPendingSync
  };
}`
    },
    'Cache-First Strategy': {
      react: `// React Cache-First Strategy Hook
import { useState, useEffect } from 'react';

const useCacheFirst = (key: string, fetcher: () => Promise<any>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Try cache first
        const cachedData = await getCachedData(key);
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
        }

        // Fetch fresh data
        const freshData = await fetcher();
        await cacheData(key, freshData);
        setData(freshData);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, fetcher]);

  return { data, loading, error };
};

const cacheData = async (key: string, data: any) => {
  const cache = await caches.open('api-cache-v1');
  const response = new Response(JSON.stringify(data));
  await cache.put(key, response);
};

const getCachedData = async (key: string) => {
  const cache = await caches.open('api-cache-v1');
  const response = await cache.match(key);
  return response ? await response.json() : null;
};

export { useCacheFirst, cacheData, getCachedData };`,
      
      angular: `// Angular Cache-First Strategy Service
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheFirstService {
  private cache$ = new BehaviorSubject<Map<string, any>>(new Map());

  constructor() {
    this.loadCache();
  }

  async get<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    const cache = this.cache$.value;
    
    // Return cached data if available
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Fetch and cache fresh data
    const data = await fetcher();
    await this.set(key, data);
    return data;
  }

  async set(key: string, data: any): Promise<void> {
    const cache = new Map(this.cache$.value);
    cache.set(key, data);
    this.cache$.next(cache);
    
    // Persist to Cache API
    const apiCache = await caches.open('api-cache-v1');
    const response = new Response(JSON.stringify(data));
    await apiCache.put(key, response);
  }

  private async loadCache(): Promise<void> {
    const cache = await caches.open('api-cache-v1');
    const keys = await cache.keys();
    const cacheMap = new Map();

    for (const request of keys) {
      const response = await cache.match(request);
      const data = await response.json();
      cacheMap.set(request.url, data);
    }

    this.cache$.next(cacheMap);
  }
}`,
      
      vue: `// Vue Cache-First Strategy Composable
import { ref, watchEffect } from 'vue';

export function useCacheFirst(key: string, fetcher: () => Promise<any>) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const cacheData = async (cacheKey: string, cacheData: any) => {
    const cache = await caches.open('api-cache-v1');
    const response = new Response(JSON.stringify(cacheData));
    await cache.put(cacheKey, response);
  };

  const getCachedData = async (cacheKey: string) => {
    const cache = await caches.open('api-cache-v1');
    const response = await cache.match(cacheKey);
    return response ? await response.json() : null;
  };

  const fetchData = async () => {
    try {
      loading.value = true;
      
      // Try cache first
      const cachedData = await getCachedData(key);
      if (cachedData) {
        data.value = cachedData;
        loading.value = false;
      }

      // Fetch fresh data
      const freshData = await fetcher();
      await cacheData(key, freshData);
      data.value = freshData;
      
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  watchEffect(() => {
    if (key && fetcher) {
      fetchData();
    }
  });

  return { data, loading, error };
}`
    },
    'Data Compression': {
      react: `// React Data Compression Hook
import { compressToUTF16, decompressFromUTF16 } from 'lz-string';

class DataCompressionService {
  static async compressData(data: any): Promise<string> {
    const jsonString = JSON.stringify(data);
    return compressToUTF16(jsonString);
  }

  static async decompressData(compressedData: string): Promise<any> {
    const jsonString = decompressFromUTF16(compressedData);
    return JSON.parse(jsonString);
  }

  static async storeCompressed(key: string, data: any): Promise<void> {
    const compressed = await this.compressData(data);
    localStorage.setItem(key, compressed);
  }

  static async getDecompressed(key: string): Promise<any> {
    const compressed = localStorage.getItem(key);
    if (!compressed) return null;
    return this.decompressData(compressed);
  }
}

const useCompressedStorage = (key: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = await DataCompressionService.getDecompressed(key);
        setData(stored);
      } catch (error) {
        console.error('Failed to load compressed data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [key]);

  const saveData = async (newData: any) => {
    try {
      await DataCompressionService.storeCompressed(key, newData);
      setData(newData);
    } catch (error) {
      console.error('Failed to save compressed data:', error);
    }
  };

  return { data, loading, saveData };
};

export { DataCompressionService, useCompressedStorage };`,
      
      angular: `// Angular Data Compression Service
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as lz from 'lz-string';

@Injectable({
  providedIn: 'root'
})
export class DataCompressionService {
  private compressionRatio$ = new BehaviorSubject<number>(0);

  async compressData(data: any): Promise<string> {
    const jsonString = JSON.stringify(data);
    const compressed = lz.compressToUTF16(jsonString);
    
    const originalSize = new Blob([jsonString]).size;
    const compressedSize = new Blob([compressed]).size;
    const ratio = compressedSize / originalSize;
    this.compressionRatio$.next(ratio);
    
    return compressed;
  }

  async decompressData(compressedData: string): Promise<any> {
    const jsonString = lz.decompressFromUTF16(compressedData);
    return JSON.parse(jsonString);
  }

  async storeCompressed(key: string, data: any): Promise<void> {
    const compressed = await this.compressData(data);
    localStorage.setItem(key, compressed);
  }

  async getDecompressed(key: string): Promise<any> {
    const compressed = localStorage.getItem(key);
    if (!compressed) return null;
    return this.decompressData(compressed);
  }

  get compressionRatio() {
    return this.compressionRatio$.asObservable();
  }
}`,
      
      vue: `// Vue Data Compression Composable
import { ref } from 'vue';
import { compressToUTF16, decompressFromUTF16 } from 'lz-string';

export function useDataCompression(key: string) {
  const data = ref(null);
  const loading = ref(true);
  const compressionRatio = ref(0);

  const compressData = async (inputData: any): Promise<string> => {
    const jsonString = JSON.stringify(inputData);
    const compressed = compressToUTF16(jsonString);
    
    const originalSize = new Blob([jsonString]).size;
    const compressedSize = new Blob([compressed]).size;
    compressionRatio.value = compressedSize / originalSize;
    
    return compressed;
  };

  const decompressData = async (compressedData: string): Promise<any> => {
    const jsonString = decompressFromUTF16(compressedData);
    return JSON.parse(jsonString);
  };

  const storeCompressed = async (inputData: any): Promise<void> => {
    const compressed = await compressData(inputData);
    localStorage.setItem(key, compressed);
  };

  const getDecompressed = async (): Promise<any> => {
    const compressed = localStorage.getItem(key);
    if (!compressed) return null;
    return decompressData(compressed);
  };

  const loadData = async () => {
    try {
      loading.value = true;
      data.value = await getDecompressed();
    } catch (error) {
      console.error('Failed to load compressed data:', error);
    } finally {
      loading.value = false;
    }
  };

  const saveData = async (newData: any) => {
    try {
      await storeCompressed(newData);
      data.value = newData;
    } catch (error) {
      console.error('Failed to save compressed data:', error);
    }
  };

  loadData();

  return { data, loading, compressionRatio, saveData };
}`
    },
    'Data Deduplication': {
      react: `// React Data Deduplication Hook
import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

class DataDeduplicationService {
  private contentHashes = new Map<string, string>();
  private referenceCount = new Map<string, number>();

  generateContentHash(data: any): string {
    const jsonString = JSON.stringify(data);
    return CryptoJS.SHA256(jsonString).toString();
  }

  async storeWithDeduplication(key: string, data: any): Promise<void> {
    const contentHash = this.generateContentHash(data);
    
    // Check if content already exists
    if (this.contentHashes.has(contentHash)) {
      // Store reference to existing content
      const existingKey = this.contentHashes.get(contentHash);
      localStorage.setItem(key, JSON.stringify({
        ref: existingKey,
        isReference: true
      }));
      
      // Increment reference count
      const count = this.referenceCount.get(contentHash) || 0;
      this.referenceCount.set(contentHash, count + 1);
    } else {
      // Store new content
      localStorage.setItem(key, JSON.stringify({
        data,
        hash: contentHash,
        isReference: false
      }));
      
      this.contentHashes.set(contentHash, key);
      this.referenceCount.set(contentHash, 1);
    }
  }

  async getWithDeduplication(key: string): Promise<any> {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    
    if (parsed.isReference) {
      // Follow reference to actual data
      return this.getWithDeduplication(parsed.ref);
    }
    
    return parsed.data;
  }

  getDeduplicationStats() {
    return {
      totalItems: this.contentHashes.size,
      totalReferences: Array.from(this.referenceCount.values()).reduce((a, b) => a + b, 0),
      savedSpace: this.calculateSavedSpace()
    };
  }

  private calculateSavedSpace(): number {
    let savedBytes = 0;
    for (const [hash, count] of this.referenceCount.entries()) {
      if (count > 1) {
        savedBytes += (count - 1) * 1000; // Estimated savings
      }
    }
    return savedBytes;
  }
}

const useDeduplicatedStorage = (key: string) => {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const service = new DataDeduplicationService();
      const loadedData = await service.getWithDeduplication(key);
      setData(loadedData);
      setStats(service.getDeduplicationStats());
    };

    loadData();
  }, [key]);

  return { data, stats };
};

export { DataDeduplicationService, useDeduplicatedStorage };`,
      
      angular: `// Angular Data Deduplication Service
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DataDeduplicationService {
  private contentHashes = new Map<string, string>();
  private referenceCount = new Map<string, number>();
  private stats$ = new BehaviorSubject<any>(null);

  generateContentHash(data: any): string {
    const jsonString = JSON.stringify(data);
    return CryptoJS.SHA256(jsonString).toString();
  }

  async storeWithDeduplication(key: string, data: any): Promise<void> {
    const contentHash = this.generateContentHash(data);
    
    if (this.contentHashes.has(contentHash)) {
      const existingKey = this.contentHashes.get(contentHash);
      localStorage.setItem(key, JSON.stringify({
        ref: existingKey,
        isReference: true
      }));
      
      const count = this.referenceCount.get(contentHash) || 0;
      this.referenceCount.set(contentHash, count + 1);
    } else {
      localStorage.setItem(key, JSON.stringify({
        data,
        hash: contentHash,
        isReference: false
      }));
      
      this.contentHashes.set(contentHash, key);
      this.referenceCount.set(contentHash, 1);
    }
    
    this.updateStats();
  }

  async getWithDeduplication(key: string): Promise<any> {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    
    if (parsed.isReference) {
      return this.getWithDeduplication(parsed.ref);
    }
    
    return parsed.data;
  }

  private updateStats() {
    const stats = {
      totalItems: this.contentHashes.size,
      totalReferences: Array.from(this.referenceCount.values()).reduce((a, b) => a + b, 0),
      savedSpace: this.calculateSavedSpace()
    };
    this.stats$.next(stats);
  }

  private calculateSavedSpace(): number {
    let savedBytes = 0;
    for (const [hash, count] of this.referenceCount.entries()) {
      if (count > 1) {
        savedBytes += (count - 1) * 1000;
      }
    }
    return savedBytes;
  }

  get stats() {
    return this.stats$.asObservable();
  }
}`,
      
      vue: `// Vue Data Deduplication Composable
import { ref, computed } from 'vue';
import CryptoJS from 'crypto-js';

export function useDataDeduplication() {
  const contentHashes = ref(new Map());
  const referenceCount = ref(new Map());

  const generateContentHash = (data: any): string => {
    const jsonString = JSON.stringify(data);
    return CryptoJS.SHA256(jsonString).toString();
  };

  const storeWithDeduplication = async (key: string, data: any): Promise<void> => {
    const contentHash = generateContentHash(data);
    
    if (contentHashes.value.has(contentHash)) {
      const existingKey = contentHashes.value.get(contentHash);
      localStorage.setItem(key, JSON.stringify({
        ref: existingKey,
        isReference: true
      }));
      
      const count = referenceCount.value.get(contentHash) || 0;
      referenceCount.value.set(contentHash, count + 1);
    } else {
      localStorage.setItem(key, JSON.stringify({
        data,
        hash: contentHash,
        isReference: false
      }));
      
      contentHashes.value.set(contentHash, key);
      referenceCount.value.set(contentHash, 1);
    }
  };

  const getWithDeduplication = async (key: string): Promise<any> => {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    
    if (parsed.isReference) {
      return getWithDeduplication(parsed.ref);
    }
    
    return parsed.data;
  };

  const stats = computed(() => {
    const totalItems = contentHashes.value.size;
    const totalReferences = Array.from(referenceCount.value.values()).reduce((a, b) => a + b, 0);
    
    let savedSpace = 0;
    for (const [hash, count] of referenceCount.value.entries()) {
      if (count > 1) {
        savedSpace += (count - 1) * 1000;
      }
    }

    return {
      totalItems,
      totalReferences,
      savedSpace
    };
  });

  return {
    storeWithDeduplication,
    getWithDeduplication,
    stats,
    generateContentHash
  };
}`
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

interface OfflineDataStrategyProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
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

const OfflineDataStrategyCard: React.FC<OfflineDataStrategyProps> = ({ 
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

  const getComplexityColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const frameworkTabs = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' },
    { id: 'vue', label: 'Vue', icon: '💚' }
  ];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${color}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm mt-1">
                {description}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(complexity)}`}>
              {complexity}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Benefits */}
          <div>
            <h4 className="text-sm font-semibold text-green-700 mb-2">Benefits</h4>
            <div className="flex flex-wrap gap-1">
              {benefits.slice(0, isExpanded ? benefits.length : 3).map((benefit, index) => (
                <span key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                  {benefit}
                </span>
              ))}
              {!isExpanded && benefits.length > 3 && (
                <span className="text-xs text-gray-500">+{benefits.length - 3} more</span>
              )}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="text-sm font-semibold text-orange-700 mb-2">Challenges</h4>
            <div className="flex flex-wrap gap-1">
              {challenges.slice(0, isExpanded ? challenges.length : 3).map((challenge, index) => (
                <span key={index} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">
                  {challenge}
                </span>
              ))}
              {!isExpanded && challenges.length > 3 && (
                <span className="text-xs text-gray-500">+{challenges.length - 3} more</span>
              )}
            </div>
          </div>

          {/* Protocols */}
          <div>
            <h4 className="text-sm font-semibold text-blue-700 mb-2">Protocols & Standards</h4>
            <div className="flex flex-wrap gap-1">
              {protocols.map((protocol, index) => (
                <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {protocol}
                </span>
              ))}
            </div>
          </div>

          {/* Framework Support */}
          <div>
            <h4 className="text-sm font-semibold text-purple-700 mb-2">Framework Support</h4>
            <div className="grid grid-cols-3 gap-2">
              {frameworkTabs.map(tab => (
                <div key={tab.id} className="text-center">
                  <div className="text-lg mb-1">{tab.icon}</div>
                  <div className="text-xs font-medium">{tab.label}</div>
                  <div className="text-xs text-gray-500">{frameworks[tab.id as keyof typeof frameworks].length} libs</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-700">Code Examples</h4>
                <div className="flex gap-1">
                  {frameworkTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedFramework(tab.id)}
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        selectedFramework === tab.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto overflow-y-auto max-h-96">
                <pre className="text-xs leading-relaxed whitespace-pre-wrap break-words">
                  <code>{getCodeSnippet(title, selectedFramework)}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const OfflineDataStrategies: React.FC = () => {
  const offlineDataStrategies = [
    {
      title: 'Service Worker Caching',
      description: 'Cache application assets and API responses using Service Workers for offline functionality',
      icon: Wifi,
      color: 'bg-blue-500',
      category: 'Caching',
      complexity: 'Medium',
      frameworks: {
        react: ['Service Worker API', 'Cache API', 'React Hooks', 'Workbox'],
        angular: ['Service Worker API', 'Angular PWA', 'NgRx', 'Cache Interceptors'],
        vue: ['Service Worker API', 'Vue PWA', 'Workbox', 'Composables']
      },
      benefits: [
        'Offline functionality',
        'Faster load times',
        'Reduced bandwidth',
        'Better UX',
        'Cache control',
        'Background sync'
      ],
      challenges: [
        'Cache management',
        'Update strategies',
        'Storage limits',
        'Debugging complexity',
        'Browser support'
      ],
      protocols: ['Service Worker', 'Cache API', 'HTTP Caching', 'Workbox']
    },
    {
      title: 'IndexedDB Storage',
      description: 'Client-side database for storing structured data offline with transaction support',
      icon: HardDrive,
      color: 'bg-purple-500',
      category: 'Storage',
      complexity: 'Medium',
      frameworks: {
        react: ['IndexedDB API', 'React Hooks', 'Dexie.js', 'LocalForage'],
        angular: ['IndexedDB API', 'Angular Services', 'Dexie.js', 'RxJS'],
        vue: ['IndexedDB API', 'Vue Composables', 'Dexie.js', 'Pinia']
      },
      benefits: [
        'Large storage capacity',
        'Structured data',
        'Transaction support',
        'Async operations',
        'Indexing support',
        'Version management'
      ],
      challenges: [
        'Complex API',
        'Browser compatibility',
        'Transaction handling',
        'Schema migration',
        'Performance tuning'
      ],
      protocols: ['IndexedDB', 'Web SQL', 'Storage API', 'Transaction API']
    },
    {
      title: 'Background Sync API',
      description: 'Defer actions until the user has stable connectivity, ensuring data synchronization',
      icon: RefreshCw,
      color: 'bg-green-500',
      category: 'Synchronization',
      complexity: 'Hard',
      frameworks: {
        react: ['Background Sync API', 'Service Workers', 'React Query', 'Queue Management'],
        angular: ['Background Sync API', 'Angular Service Worker', 'RxJS', 'NgRx'],
        vue: ['Background Sync API', 'Vue PWA', 'Composables', 'Pinia']
      },
      benefits: [
        'Reliable syncing',
        'Battery efficient',
        'User experience',
        'Automatic retry',
        'Offline queuing',
        'Network awareness'
      ],
      challenges: [
        'Limited browser support',
        'Service worker dependency',
        'Queue management',
        'Error handling',
        'Debugging difficulty'
      ],
      protocols: ['Background Sync', 'Service Worker', 'Web App Manifest', 'Push API']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Offline Data Strategies"
        description="Master offline data management patterns with comprehensive implementations for building robust offline-capable frontend applications"
        icon={WifiOff}
        category="System Design.Offline Strategies"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <WifiOff className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Offline Data Strategies
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Offline data strategies enable frontend applications to function seamlessly without internet connectivity. 
                  Learn essential patterns for implementing robust offline capabilities with comprehensive 
                  caching, synchronization, and storage techniques for modern web applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Offline Focus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Caching Strategies:</strong> Service workers, cache-first, network-first
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Storage:</strong> IndexedDB, LocalStorage, WebSQL alternatives
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Synchronization:</strong> Background sync, conflict resolution, optimistic updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Storage Optimization:</strong> Compression, deduplication, lifecycle management
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
                      <strong>Storage Limits:</strong> Browser quotas and effective cache management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Freshness:</strong> Balancing cache performance with data accuracy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>User Experience:</strong> Seamless online/offline transitions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Security:</strong> Protecting sensitive offline data
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offline Data Strategies */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <WifiOff className="w-6 h-6 text-blue-500" />
              Offline Data Strategies
            </CardTitle>
            <CardDescription>
              Core strategies for implementing robust offline functionality in web applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offlineDataStrategies.map((strategy, index) => (
                <OfflineDataStrategyCard 
                  key={index} 
                  {...strategy} 
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OfflineDataStrategies;
