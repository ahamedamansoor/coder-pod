'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Code,
  Copy,
  CheckCircle,
  AlertCircle,
  Shield,
  Play,
  Pause,
  RefreshCw,
  Clock,
  FileText,
  Terminal,
  Package,
  Activity,
  Download,
  Upload,
  Layers,
  Server,
  Database,
  HardDrive,
  Thermometer,
  Zap,
  Monitor,
  Settings,
  Gauge,
  TriangleAlert,
  Bug,
  Wrench,
  TestTube,
  GitBranch,
  Eye,
  Target,
  MemoryStick,
  Trash2,
  Recycle,
  Cpu,
  BarChart3
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function MemoryManagementComponent() {
  const { toast } = useToast();
  const [selectedStrategy, setSelectedStrategy] = React.useState<'leak-detection' | 'optimization' | 'monitoring'>('leak-detection');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const memoryData = {
    'leak-detection': [
      {
        name: 'Advanced Memory Leak Detection',
        description: 'Comprehensive system to detect and prevent memory leaks in Selenium tests',
        causes: ['Unclosed resources', 'Circular references', 'Large object retention', 'Browser session leaks'],
        solutions: ['Resource tracking', 'Automatic cleanup', 'Memory profiling', 'Leak detection algorithms'],
        code: String.raw`// Python - Advanced Memory Leak Detection System
import gc
import psutil
import threading
import time
import weakref
import tracemalloc
import objgraph
from collections import defaultdict, deque
from datetime import datetime, timedelta
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import json

class MemoryLeakDetector:
    """Advanced memory leak detection for Selenium tests"""
    
    def __init__(self, sampling_interval=5, leak_threshold=50):
        self.sampling_interval = sampling_interval
        self.leak_threshold = leak_threshold  # MB threshold for leak detection
        self.baseline_memory = None
        self.memory_samples = deque(maxlen=100)
        self.object_counts = defaultdict(list)
        self.tracked_objects = weakref.WeakSet()
        self.leak_patterns = []
        self.monitoring = False
        self.monitor_thread = None
        
        # Start tracemalloc for detailed tracking
        tracemalloc.start()
        
    def start_monitoring(self):
        """Start continuous memory monitoring"""
        if self.monitoring:
            return
            
        self.monitoring = True
        self.baseline_memory = self.get_memory_usage()
        self.monitor_thread = threading.Thread(target=self._monitor_memory, daemon=True)
        self.monitor_thread.start()
        
        print(f"Memory leak detection started (baseline: {self.baseline_memory:.2f} MB)")
    
    def stop_monitoring(self):
        """Stop memory monitoring and generate report"""
        self.monitoring = False
        if self.monitor_thread:
            self.monitor_thread.join(timeout=5)
        
        report = self.generate_leak_report()
        print("Memory leak detection stopped")
        return report
    
    def _monitor_memory(self):
        """Background memory monitoring thread"""
        while self.monitoring:
            try:
                current_memory = self.get_memory_usage()
                self.memory_samples.append({
                    'timestamp': datetime.now(),
                    'memory_mb': current_memory,
                    'process_count': len(psutil.pids()),
                    'object_counts': self.get_object_counts()
                })
                
                # Check for potential leaks
                if self.baseline_memory and current_memory > self.baseline_memory + self.leak_threshold:
                    self._analyze_memory_increase(current_memory)
                
                # Track object growth
                self._track_object_growth()
                
                time.sleep(self.sampling_interval)
                
            except Exception as e:
                print(f"Memory monitoring error: {e}")
                time.sleep(1)
    
    def get_memory_usage(self):
        """Get current memory usage in MB"""
        process = psutil.Process()
        memory_info = process.memory_info()
        return memory_info.rss / 1024 / 1024
    
    def get_object_counts(self):
        """Get counts of common objects"""
        counts = {}
        
        # Count Selenium WebDriver objects
        try:
            from selenium.webdriver.remote.webdriver import WebDriver
            counts['webdriver'] = len([obj for obj in gc.get_objects() 
                                     if isinstance(obj, WebDriver)])
        except:
            counts['webdriver'] = 0
        
        # Count large collections
        counts['lists'] = len([obj for obj in gc.get_objects() if isinstance(obj, list)])
        counts['dicts'] = len([obj for obj in gc.get_objects() if isinstance(obj, dict)])
        counts['strings'] = len([obj for obj in gc.get_objects() if isinstance(obj, str)])
        
        return counts
    
    def _track_object_growth(self):
        """Track growth of object types over time"""
        current_counts = self.get_object_counts()
        
        for obj_type, count in current_counts.items():
            self.object_counts[obj_type].append({
                'timestamp': datetime.now(),
                'count': count
            })
            
            # Keep only recent samples
            if len(self.object_counts[obj_type]) > 50:
                self.object_counts[obj_type] = self.object_counts[obj_type][-50:]
    
    def _analyze_memory_increase(self, current_memory):
        """Analyze significant memory increases"""
        increase = current_memory - self.baseline_memory
        
        # Get current traceback
        snapshot = tracemalloc.take_snapshot()
        top_stats = snapshot.statistics('lineno')
        
        leak_info = {
            'timestamp': datetime.now(),
            'memory_increase_mb': increase,
            'current_memory_mb': current_memory,
            'top_allocations': [
                {
                    'file': stat.traceback.format()[-1],
                    'size_mb': stat.size / 1024 / 1024,
                    'count': stat.count
                }
                for stat in top_stats[:5]
            ],
            'object_growth': self._analyze_object_growth()
        }
        
        self.leak_patterns.append(leak_info)
        
        print(f"MEMORY LEAK DETECTED: +{increase:.2f} MB")
        print(f"Top allocations:")
        for alloc in leak_info['top_allocations'][:3]:
            print(f"  {alloc['file']}: {alloc['size_mb']:.2f} MB ({alloc['count']} objects)")
    
    def _analyze_object_growth(self):
        """Analyze object count growth"""
        growth = {}
        
        for obj_type, samples in self.object_counts.items():
            if len(samples) >= 2:
                recent_growth = samples[-1]['count'] - samples[0]['count']
                if recent_growth > 0:
                    growth[obj_type] = recent_growth
        
        return growth
    
    def track_webdriver(self, driver, driver_id):
        """Track a WebDriver instance for leak detection"""
        self.tracked_objects.add(driver)
        
        # Wrap driver methods to track usage
        original_quit = driver.quit
        
        def tracked_quit():
            print(f"WebDriver {driver_id} quit properly")
            self.tracked_objects.discard(driver)
            return original_quit()
        
        driver.quit = tracked_quit
    
    def check_for_leaks(self):
        """Check for memory leaks in tracked objects"""
        leaks = []
        
        # Check for unclosed WebDrivers
        webdriver_count = 0
        for obj in gc.get_objects():
            try:
                from selenium.webdriver.remote.webdriver import WebDriver
                if isinstance(obj, WebDriver):
                    webdriver_count += 1
                    leaks.append({
                        'type': 'unclosed_webdriver',
                        'object': str(obj),
                        'session_id': getattr(obj, 'session_id', 'unknown')
                    })
            except:
                pass
        
        # Check tracemalloc for large allocations
        if tracemalloc.is_tracing():
            snapshot = tracemalloc.take_snapshot()
            large_allocations = [
                stat for stat in snapshot.statistics('lineno')
                if stat.size > 10 * 1024 * 1024  # > 10MB
            ]
            
            for stat in large_allocations:
                leaks.append({
                    'type': 'large_allocation',
                    'size_mb': stat.size / 1024 / 1024,
                    'file': stat.traceback.format()[-1],
                    'count': stat.count
                })
        
        return leaks
    
    def generate_leak_report(self):
        """Generate comprehensive memory leak report"""
        current_memory = self.get_memory_usage()
        
        report = {
            'generated_at': datetime.now().isoformat(),
            'baseline_memory_mb': self.baseline_memory,
            'current_memory_mb': current_memory,
            'memory_increase_mb': current_memory - self.baseline_memory if self.baseline_memory else 0,
            'samples_collected': len(self.memory_samples),
            'leak_patterns_detected': len(self.leak_patterns),
            'tracked_objects': len(self.tracked_objects),
            'current_leaks': self.check_for_leaks(),
            'object_growth_analysis': self._analyze_object_growth(),
            'recommendations': self._generate_recommendations()
        }
        
        return report
    
    def _generate_recommendations(self):
        """Generate recommendations based on detected patterns"""
        recommendations = []
        
        # Check for WebDriver leaks
        webdriver_leaks = [leak for leak in self.check_for_leaks() 
                          if leak['type'] == 'unclosed_webdriver']
        if webdriver_leaks:
            recommendations.append({
                'priority': 'critical',
                'category': 'webdriver_leaks',
                'description': f'Found {len(webdriver_leaks)} unclosed WebDriver instances',
                'action': 'Ensure all WebDriver instances are properly quit'
            })
        
        # Check for large allocations
        large_allocs = [leak for leak in self.check_for_leaks() 
                       if leak['type'] == 'large_allocation']
        if large_allocs:
            recommendations.append({
                'priority': 'high',
                'category': 'large_allocations',
                'description': f'Found {len(large_allocs)} large memory allocations',
                'action': 'Review code for memory-intensive operations'
            })
        
        # Check memory growth trend
        if len(self.memory_samples) >= 10:
            recent_memory = [s['memory_mb'] for s in list(self.memory_samples)[-5:]]
            older_memory = [s['memory_mb'] for s in list(self.memory_samples)[-10:-5]]
            
            if recent_memory and older_memory:
                recent_avg = sum(recent_memory) / len(recent_memory)
                older_avg = sum(older_memory) / len(older_memory)
                
                if recent_avg > older_avg * 1.2:  # 20% increase
                    recommendations.append({
                        'priority': 'medium',
                        'category': 'memory_growth',
                        'description': f'Memory usage increased by {((recent_avg/older_avg - 1) * 100):.1f}%',
                        'action': 'Investigate memory growth pattern and optimize'
                    })
        
        return recommendations
    
    def force_garbage_collection(self):
        """Force garbage collection and report results"""
        print("Forcing garbage collection...")
        
        objects_before = len(gc.get_objects())
        collected = gc.collect()
        objects_after = len(gc.get_objects())
        
        memory_before = self.get_memory_usage()
        
        # Force collection multiple times
        for i in range(3):
            gc.collect()
            time.sleep(0.1)
        
        memory_after = self.get_memory_usage()
        
        results = {
            'objects_before': objects_before,
            'objects_after': objects_after,
            'objects_collected': objects_before - objects_after,
            'memory_before_mb': memory_before,
            'memory_after_mb': memory_after,
            'memory_freed_mb': memory_before - memory_after,
            'gc_cycles': collected
        }
        
        print(f"GC Results: {results['objects_collected']} objects, {results['memory_freed_mb']:.2f} MB freed")
        return results

# Memory-Optimized Selenium Test Framework
class MemoryOptimizedTestFramework:
    """Test framework with advanced memory management"""
    
    def __init__(self):
        self.leak_detector = MemoryLeakDetector()
        self.driver_pool = {}
        self.test_memory_usage = {}
        self.cleanup_strategies = []
        
    def setup_test_environment(self, test_name):
        """Setup optimized test environment"""
        print(f"Setting up memory-optimized environment for: {test_name}")
        
        # Start memory monitoring
        self.leak_detector.start_monitoring()
        
        # Record baseline memory for this test
        self.test_memory_usage[test_name] = {
            'start_memory': self.leak_detector.get_memory_usage(),
            'start_time': datetime.now()
        }
        
        # Clear browser cache and optimize settings
        self._optimize_browser_settings()
        
    def _optimize_browser_settings(self):
        """Apply memory optimization settings to browser"""
        # This would be applied when creating WebDriver instances
        pass
    
    def create_optimized_driver(self, driver_id):
        """Create memory-optimized WebDriver"""
        options = Options()
        
        # Memory optimization options
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        options.add_argument("--disable-extensions")
        options.add_argument("--disable-plugins")
        options.add_argument("--disable-images")
        options.add_argument("--disable-javascript")  # If not needed
        
        # Memory limits
        options.add_argument("--memory-pressure-off")
        options.add_argument("--max_old_space_size=4096")
        
        # Process isolation
        options.add_argument("--disable-features=VizDisplayCompositor")
        options.add_argument("--disable-renderer-backgrounding")
        
        driver = webdriver.Chrome(options=options)
        
        # Track the driver
        self.leak_detector.track_webdriver(driver, driver_id)
        self.driver_pool[driver_id] = driver
        
        return driver
    
    def cleanup_test_environment(self, test_name):
        """Cleanup test environment and analyze memory usage"""
        print(f"Cleaning up environment for: {test_name}")
        
        # End memory usage for this test
        if test_name in self.test_memory_usage:
            end_memory = self.leak_detector.get_memory_usage()
            start_memory = self.test_memory_usage[test_name]['start_memory']
            
            self.test_memory_usage[test_name].update({
                'end_memory': end_memory,
                'memory_used': end_memory - start_memory,
                'end_time': datetime.now()
            })
        
        # Force cleanup of all drivers
        self._cleanup_all_drivers()
        
        # Force garbage collection
        gc_results = self.leak_detector.force_garbage_collection()
        
        # Check for leaks
        leaks = self.leak_detector.check_for_leaks()
        if leaks:
            print(f"WARNING: Found {len(leaks)} potential memory leaks")
            for leak in leaks[:3]:  # Show first 3
                print(f"  {leak['type']}: {leak}")
    
    def _cleanup_all_drivers(self):
        """Clean up all WebDriver instances"""
        for driver_id, driver in list(self.driver_pool.items()):
            try:
                driver.quit()
            except:
                pass
            finally:
                self.driver_pool.pop(driver_id, None)
    
    def run_memory_optimized_test(self, test_name, test_function):
        """Run test with memory optimization"""
        try:
            self.setup_test_environment(test_name)
            
            # Execute test
            result = test_function()
            
            return result
            
        finally:
            self.cleanup_test_environment(test_name)
    
    def generate_memory_report(self):
        """Generate comprehensive memory report"""
        leak_report = self.leak_detector.generate_leak_report()
        
        # Add test-specific information
        leak_report['test_memory_usage'] = self.test_memory_usage
        leak_report['driver_pool_size'] = len(self.driver_pool)
        
        return leak_report

# Example Usage
def memory_intensive_test():
    """Example test that could cause memory issues"""
    framework = MemoryOptimizedTestFramework()
    
    def test_function():
        # Create multiple drivers (potential memory leak)
        drivers = []
        for i in range(5):
            driver = framework.create_optimized_driver(f"test_driver_{i}")
            drivers.append(driver)
            
            # Navigate and perform actions
            driver.get("https://example.com")
            time.sleep(1)
        
        # Forgetting to quit drivers (memory leak!)
        # In real code, you should: for driver in drivers: driver.quit()
        
        return True
    
    # Run test with memory monitoring
    framework.run_memory_optimized_test("memory_test", test_function)
    
    # Generate report
    report = framework.generate_memory_report()
    print(json.dumps(report, indent=2, default=str))

if __name__ == "__main__":
    memory_intensive_test()`
      }
    ],
    optimization: [
      {
        name: 'Memory Optimization Techniques',
        description: 'Advanced techniques to optimize memory usage in Selenium tests',
        causes: ['Inefficient object usage', 'Large data retention', 'Poor cleanup', 'Memory fragmentation'],
        solutions: ['Object pooling', 'Memory-efficient patterns', 'Automatic cleanup', 'Resource recycling'],
        code: String.raw`// Java - Advanced Memory Optimization for Selenium Tests
import java.lang.ref.WeakReference;
import java.lang.ref.SoftReference;
import java.lang.management.MemoryMXBean;
import java.lang.management.ManagementFactory;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class MemoryOptimizationFramework {
    
    private static final int MAX_POOL_SIZE = 10;
    private static final long MEMORY_CHECK_INTERVAL = 30000; // 30 seconds
    private static final long MEMORY_THRESHOLD = 100 * 1024 * 1024; // 100MB
    
    private final BlockingQueue<WeakReference<WebDriver>> driverPool;
    private final ConcurrentHashMap<String, WeakReference<Object>> trackedObjects;
    private final AtomicInteger activeDrivers;
    private final MemoryMXBean memoryBean;
    private final ScheduledExecutorService scheduler;
    
    public MemoryOptimizationFramework() {
        this.driverPool = new LinkedBlockingQueue<>(MAX_POOL_SIZE);
        this.trackedObjects = new ConcurrentHashMap<>();
        this.activeDrivers = new AtomicInteger(0);
        this.memoryBean = ManagementFactory.getMemoryMXBean();
        this.scheduler = Executors.newScheduledThreadPool(2);
        
        // Start memory monitoring
        startMemoryMonitoring();
        startObjectCleanup();
    }
    
    public WebDriver getOptimizedDriver() {
        // Try to get from pool first
        WeakReference<WebDriver> driverRef = driverPool.poll();
        WebDriver driver = null;
        
        if (driverRef != null) {
            driver = driverRef.get();
            if (driver != null && isDriverHealthy(driver)) {
                // Reuse existing driver
                cleanupDriverState(driver);
                activeDrivers.incrementAndGet();
                return driver;
            }
        }
        
        // Create new optimized driver
        driver = createOptimizedDriver();
        activeDrivers.incrementAndGet();
        
        return driver;
    }
    
    public void releaseDriver(WebDriver driver) {
        if (driver != null) {
            try {
                // Clean up driver state
                cleanupDriverState(driver);
                
                // Return to pool if healthy
                if (isDriverHealthy(driver) && driverPool.size() < MAX_POOL_SIZE) {
                    driverPool.offer(new WeakReference<>(driver));
                } else {
                    // Quit driver if pool is full or driver is unhealthy
                    driver.quit();
                }
                
            } catch (Exception e) {
                try {
                    driver.quit();
                } catch (Exception ignored) {
                }
            } finally {
                activeDrivers.decrementAndGet();
            }
        }
    }
    
    private WebDriver createOptimizedDriver() {
        ChromeOptions options = new ChromeOptions();
        
        // Memory optimization options
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--disable-gpu");
        options.addArguments("--disable-extensions");
        options.addArguments("--disable-plugins");
        options.addArguments("--disable-images");
        options.addArguments("--disable-javascript");
        options.addArguments("--disable-background-timer-throttling");
        options.addArguments("--disable-renderer-backgrounding");
        options.addArguments("--disable-backgrounding-occluded-windows");
        options.addArguments("--memory-pressure-off");
        options.addArguments("--max_old_space_size=512");
        
        // Process isolation
        options.addArguments("--disable-features=VizDisplayCompositor");
        options.addArguments("--single-process");
        
        return new ChromeDriver(options);
    }
    
    private boolean isDriverHealthy(WebDriver driver) {
        try {
            // Check if driver is still responsive
            driver.getCurrentUrl();
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    private void cleanupDriverState(WebDriver driver) {
        try {
            // Clear cookies
            driver.manage().deleteAllCookies();
            
            // Clear storage
            driver.executeScript("window.localStorage.clear();");
            driver.executeScript("window.sessionStorage.clear();");
            
            // Force garbage collection in browser
            driver.executeScript("if(window.gc) window.gc();");
            
        } catch (Exception e) {
            // Ignore cleanup errors
        }
    }
    
    private void startMemoryMonitoring() {
        scheduler.scheduleAtFixedRate(() -> {
            try {
                long usedMemory = memoryBean.getHeapMemoryUsage().getUsed();
                
                if (usedMemory > MEMORY_THRESHOLD) {
                    System.out.println("High memory usage detected: " + (usedMemory / 1024 / 1024) + "MB");
                    performMemoryCleanup();
                }
                
            } catch (Exception e) {
                System.err.println("Memory monitoring error: " + e.getMessage());
            }
        }, MEMORY_CHECK_INTERVAL, MEMORY_CHECK_INTERVAL, TimeUnit.MILLISECONDS);
    }
    
    private void startObjectCleanup() {
        scheduler.scheduleAtFixedRate(() -> {
            try {
                cleanupWeakReferences();
                System.gc(); // Suggest garbage collection
            } catch (Exception e) {
                System.err.println("Object cleanup error: " + e.getMessage());
            }
        }, 60000, 60000, TimeUnit.MILLISECONDS); // Every minute
    }
    
    private void cleanupWeakReferences() {
        // Remove null references from tracked objects
        trackedObjects.entrySet().removeIf(entry -> entry.getValue().get() == null);
        
        // Clean up driver pool
        driverPool.removeIf(ref -> ref.get() == null);
    }
    
    private void performMemoryCleanup() {
        System.out.println("Performing aggressive memory cleanup...");
        
        // Force cleanup of pooled drivers
        int cleaned = 0;
        WeakReference<WebDriver> driverRef;
        while ((driverRef = driverPool.poll()) != null && cleaned < 5) {
            WebDriver driver = driverRef.get();
            if (driver != null) {
                try {
                    driver.quit();
                    cleaned++;
                } catch (Exception e) {
                    // Ignore
                }
            }
        }
        
        System.out.println("Cleaned up " + cleaned + " drivers from pool");
        
        // Force garbage collection
        System.gc();
        System.runFinalization();
        
        // Wait for GC to complete
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public void trackObject(String id, Object object) {
        trackedObjects.put(id, new WeakReference<>(object));
    }
    
    public void untrackObject(String id) {
        trackedObjects.remove(id);
    }
    
    public MemoryStats getMemoryStats() {
        long usedMemory = memoryBean.getHeapMemoryUsage().getUsed();
        long maxMemory = memoryBean.getHeapMemoryUsage().getMax();
        long committedMemory = memoryBean.getHeapMemoryUsage().getCommitted();
        
        return new MemoryStats(
            usedMemory,
            maxMemory,
            committedMemory,
            activeDrivers.get(),
            driverPool.size(),
            trackedObjects.size()
        );
    }
    
    public void shutdown() {
        System.out.println("Shutting down memory optimization framework...");
        
        // Shutdown scheduler
        scheduler.shutdown();
        try {
            if (!scheduler.awaitTermination(5, TimeUnit.SECONDS)) {
                scheduler.shutdownNow();
            }
        } catch (InterruptedException e) {
            scheduler.shutdownNow();
            Thread.currentThread().interrupt();
        }
        
        // Clean up all drivers
        WeakReference<WebDriver> driverRef;
        while ((driverRef = driverPool.poll()) != null) {
            WebDriver driver = driverRef.get();
            if (driver != null) {
                try {
                    driver.quit();
                } catch (Exception e) {
                    // Ignore
                }
            }
        }
        
        System.out.println("Framework shutdown complete");
    }
    
    public static class MemoryStats {
        private final long usedMemory;
        private final long maxMemory;
        private final long committedMemory;
        private final int activeDrivers;
        private final int pooledDrivers;
        private final int trackedObjects;
        
        public MemoryStats(long usedMemory, long maxMemory, long committedMemory,
                          int activeDrivers, int pooledDrivers, int trackedObjects) {
            this.usedMemory = usedMemory;
            this.maxMemory = maxMemory;
            this.committedMemory = committedMemory;
            this.activeDrivers = activeDrivers;
            this.pooledDrivers = pooledDrivers;
            this.trackedObjects = trackedObjects;
        }
        
        public void printStats() {
            System.out.println("=== Memory Statistics ===");
            System.out.printf("Used Memory: %d MB / %d MB (%.1f%%)%n",
                            usedMemory / 1024 / 1024,
                            maxMemory / 1024 / 1024,
                            (double) usedMemory / maxMemory * 100);
            System.out.printf("Active Drivers: %d%n", activeDrivers);
            System.out.printf("Pooled Drivers: %d%n", pooledDrivers);
            System.out.printf("Tracked Objects: %d%n", trackedObjects);
        }
        
        // Getters
        public long getUsedMemory() { return usedMemory; }
        public long getMaxMemory() { return maxMemory; }
        public int getActiveDrivers() { return activeDrivers; }
    }
}

// Memory-Efficient Test Data Manager
class MemoryEfficientDataManager {
    
    private final ConcurrentHashMap<String, SoftReference<byte[]>> dataCache;
    private final int maxCacheSize;
    private final AtomicInteger currentCacheSize;
    
    public MemoryEfficientDataManager(int maxCacheSizeMB) {
        this.maxCacheSize = maxCacheSizeMB * 1024 * 1024;
        this.dataCache = new ConcurrentHashMap<>();
        this.currentCacheSize = new AtomicInteger(0);
    }
    
    public byte[] getData(String key) {
        SoftReference<byte[]> ref = dataCache.get(key);
        if (ref != null) {
            byte[] data = ref.get();
            if (data != null) {
                return data;
            } else {
                // Reference was cleared by GC
                dataCache.remove(key);
            }
        }
        return null;
    }
    
    public void cacheData(String key, byte[] data) {
        // Check if we have space
        while (currentCacheSize.get() + data.length > maxCacheSize) {
            if (!evictOldestEntry()) {
                break; // Couldn't evict anything
            }
        }
        
        SoftReference<byte[]> ref = new SoftReference<>(data);
        dataCache.put(key, ref);
        currentCacheSize.addAndGet(data.length);
    }
    
    private boolean evictOldestEntry() {
        // Simple eviction strategy - remove first entry
        if (!dataCache.isEmpty()) {
            String firstKey = dataCache.keys().nextElement();
            SoftReference<byte[]> ref = dataCache.remove(firstKey);
            if (ref != null) {
                byte[] data = ref.get();
                if (data != null) {
                    currentCacheSize.addAndGet(-data.length);
                    return true;
                }
            }
        }
        return false;
    }
    
    public void clearCache() {
        dataCache.clear();
        currentCacheSize.set(0);
    }
    
    public int getCacheSize() {
        return currentCacheSize.get();
    }
}

// Usage Example
public class MemoryOptimizedTestExample {
    
    public static void main(String[] args) {
        MemoryOptimizationFramework framework = new MemoryOptimizationFramework();
        
        try {
            // Run memory-optimized tests
            runOptimizedTests(framework);
            
            // Print final statistics
            MemoryStats stats = framework.getMemoryStats();
            stats.printStats();
            
        } finally {
            framework.shutdown();
        }
    }
    
    private static void runOptimizedTests(MemoryOptimizationFramework framework) {
        MemoryEfficientDataManager dataManager = new MemoryEfficientDataManager(50); // 50MB cache
        
        for (int i = 0; i < 100; i++) {
            WebDriver driver = null;
            try {
                // Get optimized driver
                driver = framework.getOptimizedDriver();
                
                // Perform test operations
                driver.get("https://example.com");
                
                // Cache some test data
                String testData = "Test data for iteration " + i;
                dataManager.cacheData("test_" + i, testData.getBytes());
                
                // Simulate test work
                Thread.sleep(100);
                
            } catch (Exception e) {
                System.err.println("Test failed: " + e.getMessage());
            } finally {
                if (driver != null) {
                    framework.releaseDriver(driver);
                }
            }
            
            // Periodic cleanup
            if (i % 10 == 0) {
                System.gc(); // Suggest garbage collection
                System.out.println("Completed " + i + " tests");
                
                // Print memory stats
                MemoryStats stats = framework.getMemoryStats();
                System.out.printf("Memory: %d MB, Active Drivers: %d%n",
                                stats.getUsedMemory() / 1024 / 1024,
                                stats.getActiveDrivers());
            }
        }
        
        // Clear data cache
        dataManager.clearCache();
        System.out.println("All tests completed successfully");
    }
}`
      }
    ],
    monitoring: [
      {
        name: 'Real-time Memory Monitoring',
        description: 'Comprehensive real-time memory monitoring and alerting system',
        causes: ['No visibility', 'Missing alerts', 'Poor tracking', 'Delayed detection'],
        solutions: ['Real-time monitoring', 'Alert systems', 'Memory profiling', 'Performance metrics'],
        code: String.raw`// JavaScript - Real-time Memory Monitoring System
class RealTimeMemoryMonitor {
    constructor(options = {}) {
        this.options = {
            samplingInterval: options.samplingInterval || 1000, // 1 second
            alertThreshold: options.alertThreshold || 100 * 1024 * 1024, // 100MB
            maxSamples: options.maxSamples || 100,
            enableProfiling: options.enableProfiling || false,
            ...options
        };
        
        this.isMonitoring = false;
        this.samples = [];
        this.alerts = [];
        this.callbacks = new Map();
        this.startTime = null;
        this.baselineMemory = null;
        
        // Performance observer for detailed metrics
        if (typeof PerformanceObserver !== 'undefined') {
            this.performanceObserver = new PerformanceObserver(this.handlePerformanceEntry.bind(this));
            this.performanceObserver.observe({ entryTypes: ['measure', 'navigation'] });
        }
        
        // Memory monitoring for browsers that support it
        this.memoryAPI = this.detectMemoryAPI();
    }
    
    detectMemoryAPI() {
        // Detect available memory APIs
        if (performance.memory) {
            return 'performance';
        } else if (window.performance && window.performance.memory) {
            return 'performance';
        }
        return 'none';
    }
    
    startMonitoring() {
        if (this.isMonitoring) {
            console.warn('Memory monitoring is already active');
            return;
        }
        
        this.isMonitoring = true;
        this.startTime = Date.now();
        this.baselineMemory = this.getCurrentMemoryUsage();
        
        console.log("Starting memory monitoring (baseline: " + this.formatBytes(this.baselineMemory) + ")");
        
        // Start sampling loop
        this.monitoringInterval = setInterval(() => {
            this.collectSample();
        }, this.options.samplingInterval);
        
        // Start detailed profiling if enabled
        if (this.options.enableProfiling) {
            this.startProfiling();
        }
        
        this.triggerCallback('monitoringStarted', {
            timestamp: Date.now(),
            baselineMemory: this.baselineMemory
        });
    }
    
    stopMonitoring() {
        if (!this.isMonitoring) {
            return;
        }
        
        this.isMonitoring = false;
        
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
        }
        
        if (this.profilingInterval) {
            clearInterval(this.profilingInterval);
            this.profilingInterval = null;
        }
        
        const duration = Date.now() - this.startTime;
        const report = this.generateReport();
        
        console.log("Memory monitoring stopped after " + duration + "ms");
        console.log("Peak memory: " + this.formatBytes(report.peakMemory));
        console.log("Average memory: " + this.formatBytes(report.averageMemory));
        
        this.triggerCallback('monitoringStopped', report);
        
        return report;
    }
    
    collectSample() {
        const timestamp = Date.now();
        const memoryUsage = this.getCurrentMemoryUsage();
        const memoryPressure = this.calculateMemoryPressure();
        
        const sample = {
            timestamp,
            memoryUsage,
            memoryPressure,
            uptime: timestamp - this.startTime,
            memoryIncrease: this.baselineMemory ? memoryUsage - this.baselineMemory : 0
        };
        
        // Add detailed metrics if available
        if (this.memoryAPI !== 'none') {
            sample.detailed = this.getDetailedMemoryInfo();
        }
        
        this.samples.push(sample);
        
        // Keep only recent samples
        if (this.samples.length > this.options.maxSamples) {
            this.samples.shift();
        }
        
        // Check for alerts
        this.checkAlerts(sample);
        
        // Trigger callbacks
        this.triggerCallback('sampleCollected', sample);
    }
    
    getCurrentMemoryUsage() {
        if (this.memoryAPI === 'performance') {
            return performance.memory.usedJSHeapSize;
        }
        
        // Fallback estimation
        if (performance.now) {
            // Rough estimation based on performance timing
            return Math.random() * 50 * 1024 * 1024; // Mock data for demo
        }
        
        return 0;
    }
    
    getDetailedMemoryInfo() {
        if (this.memoryAPI === 'performance') {
            return {
                used: performance.memory.usedJSHeapSize,
                total: performance.memory.totalJSHeapSize,
                limit: performance.memory.jsHeapSizeLimit,
                utilization: (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100
            };
        }
        
        return null;
    }
    
    calculateMemoryPressure() {
        if (this.memoryAPI === 'performance') {
            const used = performance.memory.usedJSHeapSize;
            const limit = performance.memory.jsHeapSizeLimit;
            return used / limit; // 0.0 to 1.0
        }
        
        // Simple pressure calculation based on recent samples
        if (this.samples.length < 2) {
            return 0;
        }
        
        const recent = this.samples.slice(-5);
        const memoryTrend = recent[recent.length - 1].memoryUsage - recent[0].memoryUsage;
        const timeSpan = recent[recent.length - 1].timestamp - recent[0].timestamp;
        
        return Math.max(0, Math.min(1, memoryTrend / (timeSpan * 1024 * 1024))); // Normalize to 0-1
    }
    
    checkAlerts(sample) {
        // Memory threshold alert
        if (sample.memoryUsage > this.options.alertThreshold) {
            this.createAlert('memory_threshold', {
                severity: 'high',
                message: \`Memory usage exceeded threshold: \${this.formatBytes(sample.memoryUsage)}\`,
                value: sample.memoryUsage,
                threshold: this.options.alertThreshold,
                timestamp: sample.timestamp
            });
        }
        
        // Memory growth alert
        if (sample.memoryIncrease > 50 * 1024 * 1024) { // 50MB increase
            this.createAlert('memory_growth', {
                severity: 'medium',
                message: \`Memory increased by \${this.formatBytes(sample.memoryIncrease)} since start\`,
                increase: sample.memoryIncrease,
                timestamp: sample.timestamp
            });
        }
        
        // Memory pressure alert
        if (sample.memoryPressure > 0.8) {
            this.createAlert('memory_pressure', {
                severity: 'high',
                message: \`High memory pressure detected: \${(sample.memoryPressure * 100).toFixed(1)}%\`,
                pressure: sample.memoryPressure,
                timestamp: sample.timestamp
            });
        }
    }
    
    createAlert(type, data) {
        const alert = {
            id: Date.now() + '_' + Math.random(),
            type,
            timestamp: Date.now(),
            ...data
        };
        
        this.alerts.push(alert);
        
        // Keep only recent alerts
        if (this.alerts.length > 50) {
            this.alerts.shift();
        }
        
        console.warn(\`MEMORY ALERT: \${alert.message}\`);
        this.triggerCallback('alert', alert);
    }
    
    startProfiling() {
        // Start detailed profiling
        this.profilingInterval = setInterval(() => {
            this.collectProfilingData();
        }, 5000); // Every 5 seconds
    }
    
    collectProfilingData() {
        if (typeof console !== 'undefined' && console.profile) {
            // Take a memory snapshot if available
            try {
                console.profile('Memory Profile');
                setTimeout(() => {
                    console.profileEnd();
                }, 1000);
            } catch (e) {
                // Profiling not available
            }
        }
    }
    
    handlePerformanceEntry(entry) {
        if (entry.entryType === 'measure' && entry.name.includes('memory')) {
            this.triggerCallback('performanceMeasure', {
                name: entry.name,
                duration: entry.duration,
                timestamp: entry.startTime
            });
        }
    }
    
    on(event, callback) {
        if (!this.callbacks.has(event)) {
            this.callbacks.set(event, []);
        }
        this.callbacks.get(event).push(callback);
    }
    
    off(event, callback) {
        if (this.callbacks.has(event)) {
            const callbacks = this.callbacks.get(event);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }
    
    triggerCallback(event, data) {
        if (this.callbacks.has(event)) {
            this.callbacks.get(event).forEach(callback => {
                try {
                    callback(data);
                } catch (e) {
                    console.error(\`Callback error for event \${event}:\`, e);
                }
            });
        }
    }
    
    generateReport() {
        if (this.samples.length === 0) {
            return { error: 'No samples collected' };
        }
        
        const memoryUsages = this.samples.map(s => s.memoryUsage);
        const memoryIncreases = this.samples.map(s => s.memoryIncrease);
        
        return {
            duration: Date.now() - this.startTime,
            samplesCollected: this.samples.length,
            baselineMemory: this.baselineMemory,
            currentMemory: memoryUsages[memoryUsages.length - 1],
            peakMemory: Math.max(...memoryUsages),
            minMemory: Math.min(...memoryUsages),
            averageMemory: memoryUsages.reduce((a, b) => a + b, 0) / memoryUsages.length,
            memoryIncrease: memoryIncreases[memoryIncreases.length - 1],
            peakIncrease: Math.max(...memoryIncreases),
            alertsGenerated: this.alerts.length,
            alertTypes: [...new Set(this.alerts.map(a => a.type))],
            samples: this.samples.slice(-10), // Last 10 samples
            alerts: this.alerts.slice(-5) // Last 5 alerts
        };
    }
    
    formatBytes(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    getRealTimeMetrics() {
        if (this.samples.length === 0) {
            return null;
        }
        
        const latest = this.samples[this.samples.length - 1];
        const trend = this.calculateTrend();
        
        return {
            currentMemory: latest.memoryUsage,
            memoryPressure: latest.memoryPressure,
            trend: trend,
            alertsCount: this.alerts.length,
            uptime: latest.uptime,
            formatted: {
                currentMemory: this.formatBytes(latest.memoryUsage),
                memoryIncrease: this.formatBytes(latest.memoryIncrease),
                uptime: this.formatDuration(latest.uptime)
            }
        };
    }
    
    calculateTrend() {
        if (this.samples.length < 5) {
            return 'insufficient_data';
        }
        
        const recent = this.samples.slice(-5);
        const memoryChange = recent[recent.length - 1].memoryUsage - recent[0].memoryUsage;
        const timeSpan = recent[recent.length - 1].timestamp - recent[0].timestamp;
        
        const rate = memoryChange / timeSpan; // bytes per second
        
        if (rate > 1024 * 1024) { // > 1MB/s increase
            return 'increasing_rapidly';
        } else if (rate > 0) {
            return 'increasing';
        } else if (rate < -1024 * 1024) { // > 1MB/s decrease
            return 'decreasing_rapidly';
        } else if (rate < 0) {
            return 'decreasing';
        } else {
            return 'stable';
        }
    }
    
    formatDuration(ms) {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        if (hours > 0) {
            return \`\${hours}h \${minutes % 60}m \${seconds % 60}s\`;
        } else if (minutes > 0) {
            return \`\${minutes}m \${seconds % 60}s\`;
        } else {
            return \`\${seconds}s\`;
        }
    }
}

// Selenium Memory Monitor Integration
class SeleniumMemoryMonitor extends RealTimeMemoryMonitor {
    constructor(driver, options = {}) {
        super({
            samplingInterval: 2000, // 2 seconds for Selenium
            alertThreshold: 200 * 1024 * 1024, // 200MB for Selenium tests
            enableProfiling: true,
            ...options
        });
        
        this.driver = driver;
        this.testMetrics = new Map();
        this.currentTest = null;
    }
    
    startTestMonitoring(testName) {
        this.currentTest = testName;
        
        this.testMetrics.set(testName, {
            startTime: Date.now(),
            startMemory: this.getCurrentMemoryUsage(),
            samples: [],
            alerts: []
        });
        
        console.log(\`Starting memory monitoring for test: \${testName}\`);
        
        if (!this.isMonitoring) {
            this.startMonitoring();
        }
    }
    
    endTestMonitoring(testName) {
        if (!this.testMetrics.has(testName)) {
            return null;
        }
        
        const metrics = this.testMetrics.get(testName);
        metrics.endTime = Date.now();
        metrics.endMemory = this.getCurrentMemoryUsage();
        metrics.duration = metrics.endTime - metrics.startTime;
        metrics.memoryIncrease = metrics.endMemory - metrics.startMemory;
        
        console.log(\`Test \${testName} completed:\`);
        console.log(\`  Duration: \${this.formatDuration(metrics.duration)}\`);
        console.log(\`  Memory increase: \${this.formatBytes(metrics.memoryIncrease)}\`);
        
        this.currentTest = null;
        return metrics;
    }
    
    collectSample() {
        super.collectSample();
        
        if (this.currentTest && this.testMetrics.has(this.currentTest)) {
            const latestSample = this.samples[this.samples.length - 1];
            this.testMetrics.get(this.currentTest).samples.push(latestSample);
        }
    }
    
    checkAlerts(sample) {
        super.checkAlerts(sample);
        
        // Add test-specific alerts
        if (this.currentTest && sample.memoryIncrease > 100 * 1024 * 1024) { // 100MB in single test
            this.createAlert('test_memory_leak', {
                severity: 'critical',
                message: \`Potential memory leak in test \${this.currentTest}: \${this.formatBytes(sample.memoryIncrease)} increase\`,
                test: this.currentTest,
                increase: sample.memoryIncrease,
                timestamp: sample.timestamp
            });
        }
    }
    
    getTestReport(testName) {
        if (!this.testMetrics.has(testName)) {
            return { error: 'Test not found' };
        }
        
        const metrics = this.testMetrics.get(testName);
        const memoryUsages = metrics.samples.map(s => s.memoryUsage);
        
        return {
            testName,
            duration: metrics.duration,
            startMemory: metrics.startMemory,
            endMemory: metrics.endMemory,
            memoryIncrease: metrics.memoryIncrease,
            peakMemory: memoryUsages.length > 0 ? Math.max(...memoryUsages) : metrics.startMemory,
            samplesCollected: metrics.samples.length,
            alertsGenerated: metrics.alerts.length,
            efficiency: this.calculateTestEfficiency(metrics)
        };
    }
    
    calculateTestEfficiency(metrics) {
        // Simple efficiency calculation based on memory usage vs duration
        const memoryPerSecond = metrics.memoryIncrease / (metrics.duration / 1000);
        
        if (memoryPerSecond < 1024 * 1024) { // < 1MB/s
            return 'excellent';
        } else if (memoryPerSecond < 5 * 1024 * 1024) { // < 5MB/s
            return 'good';
        } else if (memoryPerSecond < 10 * 1024 * 1024) { // < 10MB/s
            return 'fair';
        } else {
            return 'poor';
        }
    }
}

// Usage Example
async function demonstrateMemoryMonitoring() {
    // Create memory monitor
    const monitor = new RealTimeMemoryMonitor({
        samplingInterval: 1000,
        alertThreshold: 50 * 1024 * 1024, // 50MB
        enableProfiling: true
    });
    
    // Set up event listeners
    monitor.on('alert', (alert) => {
        console.log(\`🚨 ALERT: \${alert.message}\`);
    });
    
    monitor.on('sampleCollected', (sample) => {
        if (sample.timestamp % 5000 < 1000) { // Every 5 seconds
            console.log(\`Memory: \${monitor.formatBytes(sample.memoryUsage)} (Pressure: \${(sample.memoryPressure * 100).toFixed(1)}%)\`);
        }
    });
    
    // Start monitoring
    monitor.startMonitoring();
    
    // Simulate memory-intensive operations
    console.log('Simulating memory-intensive operations...');
    
    for (let i = 0; i < 20; i++) {
        // Create some objects to simulate memory usage
        const dataArray = new Array(100000).fill(0).map((_, index) => ({
            id: index,
            data: new Array(100).fill(Math.random()),
            timestamp: Date.now()
        }));
        
        // Simulate work
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Periodically clean up
        if (i % 5 === 0) {
            console.log('Performing cleanup...');
            dataArray.length = 0; // Clear array
            if (global.gc) {
                global.gc(); // Force garbage collection if available
            }
        }
    }
    
    // Stop monitoring and get report
    const report = monitor.stopMonitoring();
    console.log('\\n=== Memory Monitoring Report ===');
    console.log(\`Duration: \${monitor.formatDuration(report.duration)}\`);
    console.log(\`Peak Memory: \${monitor.formatBytes(report.peakMemory)}\`);
    console.log(\`Average Memory: \${monitor.formatBytes(report.averageMemory)}\`);
    console.log(\`Alerts Generated: \${report.alertsGenerated}\`);
    
    return report;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        RealTimeMemoryMonitor,
        SeleniumMemoryMonitor
    };
}

// Auto-run demonstration if in browser
if (typeof window !== 'undefined') {
    demonstrateMemoryMonitoring().catch(console.error);
}`
      }
    ]
  };

  const currentFeatures = memoryData[selectedStrategy];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={MemoryStick}
        category="Selenium · Performance & Optimization"
        title="Memory Management"
        description="Advanced memory management techniques for Selenium test optimization and leak prevention"
        colorTheme="purple"
        badges={[
          { label: 'Memory Management', variant: 'secondary' },
          { label: 'Leak Prevention', variant: 'info' },
          { label: 'Optimization', variant: 'secondary' },
        ]}
      />

      {/* Memory Management Flow Diagram */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Gauge className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Memory Management Pipeline
          </CardTitle>
          <CardDescription>Visual representation of memory management workflow for Selenium tests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Memory Monitoring */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Memory Monitoring</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Track usage patterns</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Leak Detection */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Leak Detection</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">Identify leaks</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600 -my-0"></div>
                
                {/* Optimization */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Memory Optimization</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Apply optimizations</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Resource Management */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Resource Management</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Manage resources</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Cleanup */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Automatic Cleanup</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Free resources</div>
                </div>
              </div>
            </div>
            
            {/* Memory Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Trash2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Leak Detection</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Real-time monitoring</li>
                  <li>• Pattern analysis</li>
                  <li>• Automatic alerts</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Recycle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Optimization</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Object pooling</li>
                  <li>• Memory recycling</li>
                  <li>• Resource sharing</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Monitoring</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Usage tracking</li>
                  <li>• Performance metrics</li>
                  <li>• Trend analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategy Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-600" />
            Memory Strategies
          </CardTitle>
          <CardDescription>
            Different approaches to manage and optimize memory usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Strategy Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['leak-detection', 'optimization', 'monitoring'] as const).map((strategy) => (
              <button
                key={strategy}
                onClick={() => setSelectedStrategy(strategy)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedStrategy === strategy
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:text-purple-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {strategy.replace('-', ' ')}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="space-y-6">
        {currentFeatures.map((feature, index) => (
          <Card 
            key={index} 
            className={`border-2 transition-all cursor-pointer ${
              selectedFeature === feature.name 
                ? 'border-purple-500 shadow-lg bg-purple-50 dark:bg-purple-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-purple-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-purple-100 dark:bg-purple-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Database className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {feature.name}
                <Badge variant={selectedFeature === feature.name ? "default" : "secondary"}>
                  {selectedStrategy}
                </Badge>
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            
            {selectedFeature === feature.name && (
              <CardContent className="space-y-4">
                {/* Causes and Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Memory Issues
                    </h5>
                    <ul className="space-y-1">
                      {feature.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Management Solutions
                    </h5>
                    <ul className="space-y-1">
                      {feature.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Code Example */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Implementation Code
                    </h5>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(feature.code, `${feature.name} code`)}
                      className="gap-2"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-slate-800 dark:text-slate-300">
                      <code>{feature.code}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Memory Metrics Dashboard */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Memory Metrics Dashboard
          </CardTitle>
          <CardDescription>Key memory management metrics and optimization targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Memory Targets</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HardDrive className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Memory Efficiency</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Target: &lt; 512MB per test suite with comprehensive leak prevention and optimization.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Thermometer className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Leak Prevention</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Maintain zero memory leaks with real-time monitoring and automatic cleanup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Optimization Strategies</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Resource Pooling</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Implement object pooling and resource recycling to minimize memory overhead.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Real-time Monitoring</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Continuous memory tracking with automatic alerts and leak detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
