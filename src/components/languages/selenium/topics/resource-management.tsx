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
  Cpu,
  Play,
  Pause,
  RefreshCw,
  Clock,
  FileText,
  Terminal,
  Package,
  Shield,
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
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ResourceManagementComponent() {
  const { toast } = useToast();
  const [selectedStrategy, setSelectedStrategy] = React.useState<'memory' | 'cpu' | 'network'>('memory');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const resourceData = {
    memory: [
      {
        name: 'Memory Pool Management',
        description: 'Implement efficient memory pooling for WebDriver instances and test data',
        causes: ['Memory leaks', 'Excessive object creation', 'Poor cleanup', 'Large test data'],
        solutions: ['Object pooling', 'Memory monitoring', 'Automatic cleanup', 'Data streaming'],
        code: String.raw`// Python - Advanced Memory Management for Selenium
import gc
import psutil
import threading
import time
from contextlib import contextmanager
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from queue import Queue, Empty
import weakref

class MemoryPool:
    """Thread-safe memory pool for WebDriver instances"""
    
    def __init__(self, max_size=10, cleanup_interval=60):
        self.max_size = max_size
        self.cleanup_interval = cleanup_interval
        self.pool = Queue(maxsize=max_size)
        self.in_use = weakref.WeakSet()
        self.lock = threading.Lock()
        self.cleanup_thread = None
        self.running = True
        
        # Start cleanup thread
        self.start_cleanup_thread()
    
    def start_cleanup_thread(self):
        """Start background cleanup thread"""
        self.cleanup_thread = threading.Thread(target=self._cleanup_worker, daemon=True)
        self.cleanup_thread.start()
    
    def _cleanup_worker(self):
        """Background worker for cleanup operations"""
        while self.running:
            try:
                self._cleanup_unused_resources()
                gc.collect()  # Force garbage collection
                time.sleep(self.cleanup_interval)
            except Exception as e:
                print(f"Cleanup error: {e}")
    
    def _cleanup_unused_resources(self):
        """Clean up unused resources"""
        with self.lock:
            # Remove dead references from in_use set
            dead_refs = [ref for ref in self.in_use if ref() is None]
            for ref in dead_refs:
                self.in_use.discard(ref)
            
            # Close abandoned drivers in pool
            temp_drivers = []
            while not self.pool.empty():
                try:
                    driver = self.pool.get_nowait()
                    if self._is_driver_alive(driver):
                        temp_drivers.append(driver)
                    else:
                        driver.quit()
                except Empty:
                    break
            
            # Put healthy drivers back
            for driver in temp_drivers:
                try:
                    self.pool.put_nowait(driver)
                except:
                    driver.quit()
    
    def _is_driver_alive(self, driver):
        """Check if WebDriver instance is still alive"""
        try:
            driver.current_url
            return True
        except:
            return False
    
    @contextmanager
    def get_driver(self, browser_type="chrome"):
        """Get WebDriver instance from pool"""
        driver = None
        try:
            # Try to get from pool
            driver = self._get_from_pool(browser_type)
            if not driver:
                driver = self._create_driver(browser_type)
            
            self.in_use.add(driver)
            yield driver
            
        finally:
            if driver:
                try:
                    # Clean up driver state
                    driver.delete_all_cookies()
                    driver.execute_script("window.localStorage.clear();")
                    driver.execute_script("window.sessionStorage.clear();")
                    
                    # Return to pool if healthy
                    if self._is_driver_alive(driver):
                        self._return_to_pool(driver)
                    else:
                        driver.quit()
                except:
                    try:
                        driver.quit()
                    except:
                        pass
    
    def _get_from_pool(self, browser_type):
        """Get driver from pool"""
        try:
            while not self.pool.empty():
                driver = self.pool.get_nowait()
                if self._is_driver_alive(driver):
                    return driver
                else:
                    driver.quit()
        except Empty:
            pass
        return None
    
    def _create_driver(self, browser_type):
        """Create new WebDriver instance"""
        options = Options()
        
        # Memory optimization options
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        options.add_argument("--disable-extensions")
        options.add_argument("--disable-plugins")
        options.add_argument("--disable-images")  # Disable image loading
        options.add_argument("--disable-javascript")  # If not needed
        
        # Set memory limits
        options.add_argument("--memory-pressure-off")
        
        if browser_type == "chrome":
            return webdriver.Chrome(options=options)
        else:
            raise ValueError(f"Unsupported browser: {browser_type}")
    
    def _return_to_pool(self, driver):
        """Return driver to pool"""
        try:
            self.pool.put_nowait(driver)
        except:
            # Pool is full, close the driver
            driver.quit()
    
    def get_memory_stats(self):
        """Get memory usage statistics"""
        process = psutil.Process()
        memory_info = process.memory_info()
        
        return {
            "rss": memory_info.rss / 1024 / 1024,  # MB
            "vms": memory_info.vms / 1024 / 1024,  # MB
            "percent": process.memory_percent(),
            "pool_size": self.pool.qsize(),
            "in_use": len(self.in_use),
            "available": self.max_size - self.pool.qsize()
        }
    
    def shutdown(self):
        """Shutdown the memory pool"""
        self.running = False
        
        # Close all drivers in pool
        while not self.pool.empty():
            try:
                driver = self.pool.get_nowait()
                driver.quit()
            except Empty:
                break
        
        # Wait for cleanup thread
        if self.cleanup_thread:
            self.cleanup_thread.join(timeout=5)

class MemoryOptimizedTestSuite:
    """Test suite with memory optimization"""
    
    def __init__(self):
        self.memory_pool = MemoryPool(max_size=5)
        self.memory_monitor = MemoryMonitor()
    
    def run_optimized_tests(self):
        """Run tests with memory optimization"""
        test_data = self._generate_test_data_streaming()  # Stream data instead of loading all
        
        for i, data in enumerate(test_data):
            print(f"Running test {i+1}")
            
            # Monitor memory before test
            before_memory = self.memory_monitor.get_current_memory()
            
            try:
                with self.memory_pool.get_driver() as driver:
                    self._run_single_test(driver, data)
                    
            except Exception as e:
                print(f"Test {i+1} failed: {e}")
            
            # Monitor memory after test
            after_memory = self.memory_monitor.get_current_memory()
            memory_diff = after_memory - before_memory
            
            print(f"Memory change: {memory_diff:+.2f} MB")
            
            # Force cleanup if memory usage is high
            if after_memory > 500:  # 500MB threshold
                self._force_cleanup()
    
    def _generate_test_data_streaming(self):
        """Generate test data using streaming to reduce memory"""
        for i in range(100):  # 100 test cases
            # Generate data on the fly instead of storing all
            yield {
                "username": f"user{i}",
                "password": f"pass{i}",
                "email": f"user{i}@example.com"
            }
    
    def _run_single_test(self, driver, test_data):
        """Run single test with minimal memory footprint"""
        driver.get("https://example.com/login")
        
        # Use efficient element location
        username = driver.find_element("id", "username")
        username.send_keys(test_data["username"])
        
        password = driver.find_element("id", "password")
        password.send_keys(test_data["password"])
        
        login = driver.find_element("id", "login")
        login.click()
        
        # Minimal wait
        time.sleep(1)
    
    def _force_cleanup(self):
        """Force memory cleanup"""
        gc.collect()
        self.memory_pool._cleanup_unused_resources()

class MemoryMonitor:
    """Monitor memory usage during test execution"""
    
    def __init__(self):
        self.process = psutil.Process()
        self.baseline_memory = self.get_current_memory()
    
    def get_current_memory(self):
        """Get current memory usage in MB"""
        return self.process.memory_info().rss / 1024 / 1024
    
    def get_memory_trend(self, samples=10):
        """Get memory usage trend"""
        samples = []
        for _ in range(samples):
            samples.append(self.get_current_memory())
            time.sleep(0.1)
        
        return {
            "current": samples[-1],
            "average": sum(samples) / len(samples),
            "min": min(samples),
            "max": max(samples),
            "trend": "increasing" if samples[-1] > samples[0] else "decreasing"
        }
    
    def check_memory_leak(self, threshold=100):
        """Check for potential memory leaks"""
        current = self.get_current_memory()
        increase = current - self.baseline_memory
        
        if increase > threshold:
            return {
                "leak_detected": True,
                "increase_mb": increase,
                "current_mb": current,
                "baseline_mb": self.baseline_memory
            }
        
        return {"leak_detected": False}

# Usage Example
def main():
    # Create optimized test suite
    test_suite = MemoryOptimizedTestSuite()
    
    try:
        # Run tests with memory optimization
        test_suite.run_optimized_tests()
        
        # Get final memory stats
        stats = test_suite.memory_pool.get_memory_stats()
        print("Memory Pool Stats:", stats)
        
        # Check for memory leaks
        leak_check = test_suite.memory_monitor.check_memory_leak()
        if leak_check["leak_detected"]:
            print(f"Memory leak detected: +{leak_check['increase_mb']:.2f} MB")
        
    finally:
        # Cleanup
        test_suite.memory_pool.shutdown()

if __name__ == "__main__":
    main()`
      },
      {
        name: 'Memory Leak Detection',
        description: 'Detect and prevent memory leaks in long-running Selenium tests',
        causes: ['Unclosed resources', 'Circular references', 'Large object retention', 'Poor cleanup'],
        solutions: ['Resource tracking', 'Automatic cleanup', 'Memory profiling', 'Leak detection'],
        code: String.raw`// Java - Memory Leak Detection and Prevention
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.WeakHashMap;
import java.lang.ref.WeakReference;

public class MemoryLeakDetector {
    
    private static final MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();
    private static final long MEMORY_CHECK_INTERVAL = 5000; // 5 seconds
    
    private final ConcurrentHashMap<String, WeakReference<Object>> trackedObjects;
    private final AtomicLong totalAllocations;
    private final AtomicLong totalDeallocations;
    private volatile boolean monitoring;
    
    public MemoryLeakDetector() {
        this.trackedObjects = new ConcurrentHashMap<>();
        this.totalAllocations = new AtomicLong(0);
        this.totalDeallocations = new AtomicLong(0);
        this.monitoring = false;
    }
    
    public void startMonitoring() {
        if (monitoring) return;
        
        monitoring = true;
        Thread monitorThread = new Thread(this::monitorMemoryUsage);
        monitorThread.setDaemon(true);
        monitorThread.start();
        
        System.out.println("Memory leak detection started");
    }
    
    public void stopMonitoring() {
        monitoring = false;
        System.out.println("Memory leak detection stopped");
    }
    
    public void trackObject(String id, Object object) {
        trackedObjects.put(id, new WeakReference<>(object));
        totalAllocations.incrementAndGet();
    }
    
    public void untrackObject(String id) {
        WeakReference<Object> ref = trackedObjects.remove(id);
        if (ref != null && ref.get() != null) {
            totalDeallocations.incrementAndGet();
        }
    }
    
    private void monitorMemoryUsage() {
        long baselineMemory = getUsedMemory();
        
        while (monitoring) {
            try {
                long currentMemory = getUsedMemory();
                long memoryIncrease = currentMemory - baselineMemory;
                
                // Check for significant memory increase
                if (memoryIncrease > 50 * 1024 * 1024) { // 50MB threshold
                    System.out.printf("Memory increase detected: %d MB%n", 
                                    memoryIncrease / (1024 * 1024));
                    
                    // Analyze tracked objects
                    analyzeTrackedObjects();
                }
                
                // Check for potential leaks in tracked objects
                checkForLeaks();
                
                Thread.sleep(MEMORY_CHECK_INTERVAL);
                
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
    
    private long getUsedMemory() {
        MemoryUsage heapUsage = memoryBean.getHeapMemoryUsage();
        return heapUsage.getUsed();
    }
    
    private void analyzeTrackedObjects() {
        int aliveCount = 0;
        int deadCount = 0;
        
        for (WeakReference<Object> ref : trackedObjects.values()) {
            if (ref.get() != null) {
                aliveCount++;
            } else {
                deadCount++;
            }
        }
        
        System.out.printf("Tracked objects - Alive: %d, Dead: %d%n", aliveCount, deadCount);
        
        // Alert if too many alive objects
        if (aliveCount > 100) {
            System.out.println("WARNING: High number of tracked objects - potential memory leak");
        }
    }
    
    private void checkForLeaks() {
        // Clean up dead references
        trackedObjects.entrySet().removeIf(entry -> entry.getValue().get() == null);
        
        // Check for objects that should have been cleaned up
        long trackedCount = trackedObjects.size();
        long expectedCount = totalAllocations.get() - totalDeallocations.get();
        
        if (trackedCount > expectedCount) {
            System.out.printf("Memory leak detected: %d objects not properly cleaned up%n", 
                            trackedCount - expectedCount);
        }
    }
    
    public MemoryReport generateMemoryReport() {
        MemoryUsage heapUsage = memoryBean.getHeapMemoryUsage();
        MemoryUsage nonHeapUsage = memoryBean.getNonHeapMemoryUsage();
        
        return new MemoryReport(
            heapUsage.getUsed(),
            heapUsage.getMax(),
            heapUsage.getCommitted(),
            nonHeapUsage.getUsed(),
            trackedObjects.size(),
            totalAllocations.get(),
            totalDeallocations.get()
        );
    }
    
    public static class MemoryReport {
        private final long heapUsed;
        private final long heapMax;
        private final long heapCommitted;
        private final long nonHeapUsed;
        private final int trackedObjects;
        private final long totalAllocations;
        private final long totalDeallocations;
        
        public MemoryReport(long heapUsed, long heapMax, long heapCommitted,
                          long nonHeapUsed, int trackedObjects,
                          long totalAllocations, long totalDeallocations) {
            this.heapUsed = heapUsed;
            this.heapMax = heapMax;
            this.heapCommitted = heapCommitted;
            this.nonHeapUsed = nonHeapUsed;
            this.trackedObjects = trackedObjects;
            this.totalAllocations = totalAllocations;
            this.totalDeallocations = totalDeallocations;
        }
        
        public void printReport() {
            System.out.println("=== Memory Report ===");
            System.out.printf("Heap Memory: %d MB / %d MB (%.1f%%)%n",
                            heapUsed / (1024 * 1024),
                            heapMax / (1024 * 1024),
                            (double) heapUsed / heapMax * 100);
            System.out.printf("Non-Heap Memory: %d MB%n",
                            nonHeapUsed / (1024 * 1024));
            System.out.printf("Tracked Objects: %d%n", trackedObjects);
            System.out.printf("Allocations: %d, Deallocations: %d%n",
                            totalAllocations, totalDeallocations);
        }
        
        // Getters
        public long getHeapUsed() { return heapUsed; }
        public long getHeapMax() { return heapMax; }
        public int getTrackedObjects() { return trackedObjects; }
    }
}

// Resource Management for Selenium WebDriver
public class SeleniumResourceManager {
    
    private final MemoryLeakDetector leakDetector;
    private final ConcurrentHashMap<String, WebDriver> activeDrivers;
    private final Object lock = new Object();
    
    public SeleniumResourceManager() {
        this.leakDetector = new MemoryLeakDetector();
        this.activeDrivers = new ConcurrentHashMap<>();
        this.leakDetector.startMonitoring();
    }
    
    public WebDriver createManagedDriver(String driverId) {
        synchronized (lock) {
            if (activeDrivers.containsKey(driverId)) {
                throw new IllegalArgumentException("Driver ID already exists: " + driverId);
            }
            
            WebDriver driver = createOptimizedDriver();
            activeDrivers.put(driverId, driver);
            leakDetector.trackObject("driver-" + driverId, driver);
            
            System.out.println("Created managed driver: " + driverId);
            return driver;
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
        options.addArguments("--disable-background-timer-throttling");
        options.addArguments("--disable-backgrounding-occluded-windows");
        options.addArguments("--disable-renderer-backgrounding");
        
        // Memory limits
        options.addArguments("--memory-pressure-off");
        options.addArguments("--max_old_space_size=4096");
        
        return new ChromeDriver(options);
    }
    
    public void releaseDriver(String driverId) {
        synchronized (lock) {
            WebDriver driver = activeDrivers.remove(driverId);
            if (driver != null) {
                try {
                    // Clean up driver state
                    driver.manage().deleteAllCookies();
                    driver.executeScript("window.localStorage.clear();");
                    driver.executeScript("window.sessionStorage.clear();");
                    
                    // Force garbage collection
                    driver.executeScript("if(window.gc) window.gc();");
                    
                } catch (Exception e) {
                    System.err.println("Error cleaning up driver: " + e.getMessage());
                } finally {
                    driver.quit();
                    leakDetector.untrackObject("driver-" + driverId);
                    System.out.println("Released managed driver: " + driverId);
                }
            }
        }
    }
    
    public void cleanupAllDrivers() {
        synchronized (lock) {
            // Copy to avoid ConcurrentModificationException
            String[] driverIds = activeDrivers.keySet().toArray(new String[0]);
            for (String driverId : driverIds) {
                releaseDriver(driverId);
            }
        }
    }
    
    public void performMemoryCleanup() {
        System.out.println("Performing memory cleanup...");
        
        // Clean up drivers
        cleanupAllDrivers();
        
        // Force garbage collection
        System.gc();
        System.runFinalization();
        
        // Sleep to allow GC to complete
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Generate report
        MemoryLeakDetector.MemoryReport report = leakDetector.generateMemoryReport();
        report.printReport();
    }
    
    public void shutdown() {
        System.out.println("Shutting down resource manager...");
        
        cleanupAllDrivers();
        leakDetector.stopMonitoring();
    }
    
    public static void main(String[] args) {
        SeleniumResourceManager manager = new SeleniumResourceManager();
        
        try {
            // Example usage
            WebDriver driver1 = manager.createManagedDriver("test-driver-1");
            WebDriver driver2 = manager.createManagedDriver("test-driver-2");
            
            // Use drivers...
            driver1.get("https://example.com");
            driver2.get("https://example.com");
            
            // Simulate some work
            Thread.sleep(2000);
            
            // Release drivers
            manager.releaseDriver("test-driver-1");
            manager.releaseDriver("test-driver-2");
            
            // Final cleanup
            manager.performMemoryCleanup();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            manager.shutdown();
        }
    }
}`
      }
    ],
    cpu: [
      {
        name: 'CPU Optimization Strategies',
        description: 'Optimize CPU usage for efficient Selenium test execution',
        causes: ['High CPU usage', 'Inefficient loops', 'Blocking operations', 'Poor threading'],
        solutions: ['CPU monitoring', 'Thread optimization', 'Async operations', 'Load balancing'],
        code: String.raw`// Python - CPU Optimization for Selenium Tests
import threading
import time
import psutil
import multiprocessing
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from queue import Queue
import asyncio

class CPUOptimizer:
    """Optimize CPU usage for Selenium tests"""
    
    def __init__(self, max_workers=None):
        self.max_workers = max_workers or min(32, (os.cpu_count() or 1) + 4)
        self.cpu_threshold = 80  # 80% CPU usage threshold
        self.monitoring = False
        self.monitor_thread = None
        
    def start_monitoring(self):
        """Start CPU monitoring"""
        if self.monitoring:
            return
            
        self.monitoring = True
        self.monitor_thread = threading.Thread(target=self._monitor_cpu, daemon=True)
        self.monitor_thread.start()
        
    def stop_monitoring(self):
        """Stop CPU monitoring"""
        self.monitoring = False
        if self.monitor_thread:
            self.monitor_thread.join(timeout=1)
    
    def _monitor_cpu(self):
        """Monitor CPU usage and adjust execution"""
        while self.monitoring:
            cpu_percent = psutil.cpu_percent(interval=1)
            
            if cpu_percent > self.cpu_threshold:
                print(f"High CPU usage detected: {cpu_percent}%")
                self._apply_cpu_optimizations()
            
            time.sleep(5)
    
    def _apply_cpu_optimizations(self):
        """Apply CPU optimizations when usage is high"""
        # Reduce thread pool size temporarily
        if hasattr(self, 'thread_pool'):
            self.thread_pool._max_workers = max(1, self.max_workers // 2)
            print(f"Reduced thread pool size to {self.thread_pool._max_workers}")
    
    def get_cpu_usage(self):
        """Get current CPU usage"""
        return psutil.cpu_percent(interval=0.1)
    
    def get_optimal_thread_count(self):
        """Calculate optimal thread count based on CPU load"""
        cpu_percent = self.get_cpu_usage()
        
        if cpu_percent < 50:
            return self.max_workers
        elif cpu_percent < 80:
            return self.max_workers // 2
        else:
            return max(1, self.max_workers // 4)

class OptimizedSeleniumExecutor:
    """CPU-optimized Selenium test executor"""
    
    def __init__(self):
        self.cpu_optimizer = CPUOptimizer()
        self.thread_pool = None
        self.process_pool = None
        self.task_queue = Queue()
        
    def start(self):
        """Start the executor"""
        self.cpu_optimizer.start_monitoring()
        optimal_threads = self.cpu_optimizer.get_optimal_thread_count()
        self.thread_pool = ThreadPoolExecutor(max_workers=optimal_threads)
        self.process_pool = ProcessPoolExecutor(max_workers=min(4, os.cpu_count()))
        
        print(f"Started executor with {optimal_threads} threads")
    
    def stop(self):
        """Stop the executor"""
        if self.thread_pool:
            self.thread_pool.shutdown(wait=True)
        if self.process_pool:
            self.process_pool.shutdown(wait=True)
        self.cpu_optimizer.stop_monitoring()
    
    def execute_tests_cpu_optimized(self, tests):
        """Execute tests with CPU optimization"""
        results = []
        
        # Group tests by CPU intensity
        cpu_light_tests = [t for t in tests if t.get('cpu_intensity', 'medium') == 'light']
        cpu_heavy_tests = [t for t in tests if t.get('cpu_intensity', 'medium') == 'heavy']
        
        # Execute CPU-light tests in parallel
        if cpu_light_tests:
            print(f"Executing {len(cpu_light_tests)} CPU-light tests in parallel...")
            light_results = self._execute_parallel(cpu_light_tests, self.thread_pool)
            results.extend(light_results)
        
        # Execute CPU-heavy tests sequentially or with limited parallelism
        if cpu_heavy_tests:
            print(f"Executing {len(cpu_heavy_tests)} CPU-heavy tests with limited parallelism...")
            heavy_results = self._execute_cpu_heavy(cpu_heavy_tests)
            results.extend(heavy_results)
        
        return results
    
    def _execute_parallel(self, tests, executor):
        """Execute tests in parallel"""
        futures = []
        for test in tests:
            future = executor.submit(self._execute_single_test, test)
            futures.append(future)
        
        results = []
        for future in futures:
            try:
                result = future.result(timeout=300)  # 5 minute timeout
                results.append(result)
            except Exception as e:
                results.append({"test": test.get("name", "unknown"), "error": str(e)})
        
        return results
    
    def _execute_cpu_heavy(self, tests):
        """Execute CPU-heavy tests with optimization"""
        results = []
        
        for test in tests:
            # Monitor CPU before test
            cpu_before = self.cpu_optimizer.get_cpu_usage()
            
            try:
                # Adjust execution based on CPU load
                if cpu_before > 70:
                    print("High CPU usage, adding delay...")
                    time.sleep(2)  # Add delay to reduce CPU pressure
                
                result = self._execute_single_test(test)
                results.append(result)
                
            except Exception as e:
                results.append({"test": test.get("name", "unknown"), "error": str(e)})
            
            # Cool down period
            time.sleep(1)
        
        return results
    
    def _execute_single_test(self, test_config):
        """Execute single test with CPU optimization"""
        test_name = test_config.get("name", "unknown")
        cpu_intensity = test_config.get("cpu_intensity", "medium")
        
        # Create optimized driver based on CPU intensity
        driver = self._create_optimized_driver(cpu_intensity)
        
        try:
            start_time = time.time()
            
            # Execute test steps
            if "url" in test_config:
                driver.get(test_config["url"])
            
            # Add test-specific logic here
            self._perform_test_actions(driver, test_config)
            
            execution_time = time.time() - start_time
            
            return {
                "test": test_name,
                "status": "passed",
                "execution_time": execution_time,
                "cpu_intensity": cpu_intensity
            }
            
        except Exception as e:
            return {
                "test": test_name,
                "status": "failed",
                "error": str(e),
                "cpu_intensity": cpu_intensity
            }
        finally:
            driver.quit()
    
    def _create_optimized_driver(self, cpu_intensity):
        """Create optimized driver based on CPU intensity"""
        options = Options()
        
        # Base optimizations
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        
        if cpu_intensity == "heavy":
            # Aggressive CPU optimizations for heavy tests
            options.add_argument("--disable-extensions")
            options.add_argument("--disable-plugins")
            options.add_argument("--disable-images")
            options.add_argument("--disable-javascript")
            options.add_argument("--disable-web-security")
            options.add_argument("--disable-features=VizDisplayCompositor")
            options.add_argument("--disable-background-timer-throttling")
            options.add_argument("--disable-renderer-backgrounding")
        else:
            # Moderate optimizations for light tests
            options.add_argument("--disable-extensions")
            options.add_argument("--disable-plugins")
        
        return webdriver.Chrome(options=options)
    
    def _perform_test_actions(self, driver, test_config):
        """Perform test actions with CPU optimization"""
        # Add delays to reduce CPU spikes
        actions = test_config.get("actions", [])
        
        for action in actions:
            if action["type"] == "click":
                element = driver.find_element("css selector", action["selector"])
                element.click()
                time.sleep(0.1)  # Small delay to reduce CPU usage
                
            elif action["type"] == "type":
                element = driver.find_element("css selector", action["selector"])
                element.send_keys(action["text"])
                time.sleep(0.1)
                
            elif action["type"] == "wait":
                time.sleep(action.get("duration", 1))

class AsyncSeleniumExecutor:
    """Async Selenium executor for better CPU utilization"""
    
    def __init__(self):
        self.executor = None
        
    async def start(self):
        """Start async executor"""
        self.executor = asyncio.get_event_loop()
        
    async def execute_tests_async(self, tests):
        """Execute tests asynchronously"""
        tasks = []
        
        for test in tests:
            task = asyncio.create_task(self._execute_test_async(test))
            tasks.append(task)
        
        results = await asyncio.gather(*tasks, return_exceptions=True)
        return results
    
    async def _execute_test_async(self, test_config):
        """Execute test asynchronously"""
        loop = asyncio.get_event_loop()
        
        # Run Selenium test in thread pool to avoid blocking
        result = await loop.run_in_executor(
            None, 
            self._execute_sync_test, 
            test_config
        )
        
        return result
    
    def _execute_sync_test(self, test_config):
        """Execute synchronous Selenium test"""
        # Standard Selenium test execution
        options = Options()
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        
        driver = webdriver.Chrome(options=options)
        
        try:
            driver.get(test_config.get("url", "https://example.com"))
            time.sleep(2)  # Wait for page load
            
            return {"test": test_config.get("name"), "status": "passed"}
            
        except Exception as e:
            return {"test": test_config.get("name"), "status": "failed", "error": str(e)}
        finally:
            driver.quit()

# Usage Example
def main():
    # Create optimized executor
    executor = OptimizedSeleniumExecutor()
    executor.start()
    
    try:
        # Define test cases with CPU intensity
        tests = [
            {
                "name": "Light Test 1",
                "url": "https://example.com",
                "cpu_intensity": "light",
                "actions": [
                    {"type": "click", "selector": "#button1"},
                    {"type": "type", "selector": "#input1", "text": "test"}
                ]
            },
            {
                "name": "Heavy Test 1",
                "url": "https://example.com",
                "cpu_intensity": "heavy",
                "actions": [
                    {"type": "click", "selector": "#complex-button"},
                    {"type": "wait", "duration": 3}
                ]
            },
            {
                "name": "Light Test 2",
                "url": "https://example.com",
                "cpu_intensity": "light",
                "actions": [
                    {"type": "click", "selector": "#button2"}
                ]
            }
        ]
        
        # Execute tests with CPU optimization
        results = executor.execute_tests_cpu_optimized(tests)
        
        # Print results
        for result in results:
            print(f"Test: {result.get('test')}, Status: {result.get('status')}")
            if "execution_time" in result:
                print(f"  Execution Time: {result['execution_time']:.2f}s")
        
        # Print CPU usage summary
        print(f"Final CPU Usage: {executor.cpu_optimizer.get_cpu_usage()}%")
        
    finally:
        executor.stop()

if __name__ == "__main__":
    import os
    main()`
      }
    ],
    network: [
      {
        name: 'Network Resource Optimization',
        description: 'Optimize network usage and manage bandwidth for Selenium tests',
        causes: ['Excessive requests', 'Large file transfers', 'Poor caching', 'Network bottlenecks'],
        solutions: ['Request optimization', 'Caching strategies', 'Bandwidth management', 'Network monitoring'],
        code: String.raw`// JavaScript - Network Resource Optimization for Selenium
class NetworkOptimizer {
    constructor() {
        this.requestCache = new Map();
        this.bandwidthLimit = 1024 * 1024; // 1MB per second
        this.activeRequests = new Set();
        this.networkMonitor = new NetworkMonitor();
        this.compressionEnabled = true;
    }
    
    // Intercept and optimize network requests
    setupNetworkOptimization(driver) {
        // Enable network domain for Chrome DevTools Protocol
        driver.executeCdpCommand('Network.enable', {});
        
        // Set up request interception
        driver.executeCdpCommand('Network.setRequestInterception', {
            patterns: [
                { urlPattern: '*', resourceType: 'Document', interceptionStage: 'HeadersReceived' },
                { urlPattern: '*', resourceType: 'Stylesheet', interceptionStage: 'HeadersReceived' },
                { urlPattern: '*', resourceType: 'Image', interceptionStage: 'HeadersReceived' },
                { urlPattern: '*', resourceType: 'Script', interceptionStage: 'HeadersReceived' }
            ]
        });
        
        // Listen for network events
        driver.on('Network.requestIntercepted', this.handleInterceptedRequest.bind(this));
        driver.on('Network.responseReceived', this.handleResponseReceived.bind(this));
    }
    
    handleInterceptedRequest(params) {
        const { interceptionId, request, resourceType } = params;
        
        try {
            // Check cache first
            const cacheKey = this.generateCacheKey(request.url);
            if (this.requestCache.has(cacheKey)) {
                const cachedResponse = this.requestCache.get(cacheKey);
                this.respondWithCachedData(interceptionId, cachedResponse);
                return;
            }
            
            // Optimize based on resource type
            switch (resourceType) {
                case 'Image':
                    this.optimizeImageRequest(interceptionId, request);
                    break;
                case 'Stylesheet':
                case 'Script':
                    this.optimizeResourceRequest(interceptionId, request);
                    break;
                default:
                    this.continueRequest(interceptionId);
            }
            
        } catch (error) {
            console.error('Error handling intercepted request:', error);
            this.continueRequest(interceptionId);
        }
    }
    
    optimizeImageRequest(interceptionId, request) {
        // Block unnecessary images or compress them
        if (this.shouldBlockImage(request.url)) {
            this.blockRequest(interceptionId);
        } else {
            // Add compression headers
            const headers = {
                ...request.headers,
                'Accept-Encoding': 'gzip, deflate, br'
            };
            this.continueRequestWithHeaders(interceptionId, headers);
        }
    }
    
    optimizeResourceRequest(interceptionId, request) {
        // Add caching headers and compression
        const headers = {
            ...request.headers,
            'Cache-Control': 'max-age=3600',
            'Accept-Encoding': 'gzip, deflate, br'
        };
        
        // Minimize bandwidth usage
        if (this.isLowBandwidthMode()) {
            headers['Connection'] = 'keep-alive';
            headers['Accept'] = 'text/css,*/*;q=0.1';
        }
        
        this.continueRequestWithHeaders(interceptionId, headers);
    }
    
    shouldBlockImage(url) {
        // Block decorative images, ads, etc.
        const blockedPatterns = [
            /ads/i,
            /tracking/i,
            /analytics/i,
            /\.gif$/,
            /\.png$.*size=small/i
        ];
        
        return blockedPatterns.some(pattern => pattern.test(url));
    }
    
    continueRequest(interceptionId) {
        this.driver.executeCdpCommand('Network.continueInterceptedRequest', {
            interceptionId
        });
    }
    
    continueRequestWithHeaders(interceptionId, headers) {
        this.driver.executeCdpCommand('Network.continueInterceptedRequest', {
            interceptionId,
            modifiedHeaders: this.encodeHeaders(headers)
        });
    }
    
    blockRequest(interceptionId) {
        this.driver.executeCdpCommand('Network.continueInterceptedRequest', {
            interceptionId,
            errorReason: 'BlockedByClient'
        });
    }
    
    respondWithCachedData(interceptionId, cachedData) {
        this.driver.executeCdpCommand('Network.continueInterceptedRequest', {
            interceptionId,
            rawResponse: cachedData
        });
    }
    
    handleResponseReceived(params) {
        const { requestId, response, type } = params;
        
        // Cache successful responses
        if (response.status >= 200 && response.status < 300) {
            this.cacheResponse(response.url, response);
        }
        
        // Monitor network usage
        this.networkMonitor.recordRequest(response);
    }
    
    cacheResponse(url, response) {
        const cacheKey = this.generateCacheKey(url);
        const cacheData = {
            url: url,
            status: response.status,
            headers: response.headers,
            timestamp: Date.now()
        };
        
        this.requestCache.set(cacheKey, cacheData);
        
        // Limit cache size
        if (this.requestCache.size > 100) {
            const oldestKey = this.requestCache.keys().next().value;
            this.requestCache.delete(oldestKey);
        }
    }
    
    generateCacheKey(url) {
        // Simple cache key generation
        return url.split('?')[0]; // Ignore query parameters
    }
    
    encodeHeaders(headers) {
        // Convert headers object to required format
        return Object.entries(headers).map(([name, value]) => ({ name, value }));
    }
    
    isLowBandwidthMode() {
        // Check if we should use low bandwidth mode
        const currentUsage = this.networkMonitor.getCurrentBandwidthUsage();
        return currentUsage > this.bandwidthLimit * 0.8;
    }
    
    // Network performance monitoring
    getNetworkStats() {
        return {
            totalRequests: this.networkMonitor.getTotalRequests(),
            bandwidthUsage: this.networkMonitor.getCurrentBandwidthUsage(),
            cacheHitRate: this.calculateCacheHitRate(),
            averageResponseTime: this.networkMonitor.getAverageResponseTime()
        };
    }
    
    calculateCacheHitRate() {
        const totalRequests = this.networkMonitor.getTotalRequests();
        const cacheHits = this.networkMonitor.getCacheHits();
        return totalRequests > 0 ? (cacheHits / totalRequests) * 100 : 0;
    }
}

class NetworkMonitor {
    constructor() {
        this.requests = [];
        this.startTime = Date.now();
        this.bandwidthUsage = 0;
        this.cacheHits = 0;
    }
    
    recordRequest(response) {
        const request = {
            url: response.url,
            status: response.status,
            size: this.estimateResponseSize(response),
            timestamp: Date.now(),
            responseTime: this.calculateResponseTime(response)
        };
        
        this.requests.push(request);
        this.bandwidthUsage += request.size;
        
        // Keep only recent requests
        const cutoff = Date.now() - 60000; // Last minute
        this.requests = this.requests.filter(r => r.timestamp > cutoff);
    }
    
    estimateResponseSize(response) {
        // Estimate response size based on headers and content type
        const contentLength = response.headers['content-length'];
        if (contentLength) {
            return parseInt(contentLength);
        }
        
        // Rough estimation based on content type
        const contentType = response.headers['content-type'] || '';
        if (contentType.includes('image')) {
            return 50000; // 50KB average for images
        } else if (contentType.includes('javascript') || contentType.includes('css')) {
            return 20000; // 20KB average for scripts/styles
        } else {
            return 10000; // 10KB average for other content
        }
    }
    
    calculateResponseTime(response) {
        // Calculate response time (simplified)
        return Math.random() * 1000 + 100; // 100-1100ms
    }
    
    getTotalRequests() {
        return this.requests.length;
    }
    
    getCurrentBandwidthUsage() {
        const recentRequests = this.requests.filter(r => 
            Date.now() - r.timestamp < 5000
        );
        return recentRequests.reduce((sum, r) => sum + r.size, 0);
    }
    
    getAverageResponseTime() {
        if (this.requests.length === 0) return 0;
        const totalTime = this.requests.reduce((sum, r) => sum + r.responseTime, 0);
        return totalTime / this.requests.length;
    }
    
    getCacheHits() {
        return this.cacheHits;
    }
    
    incrementCacheHits() {
        this.cacheHits++;
    }
}

// Bandwidth Management
class BandwidthManager {
    constructor(maxBandwidth = 1024 * 1024) { // 1MB default
        this.maxBandwidth = maxBandwidth;
        this.currentUsage = 0;
        this.requestQueue = [];
        this.processing = false;
    }
    
    async throttleRequest(requestFn) {
        return new Promise((resolve, reject) => {
            this.requestQueue.push({ requestFn, resolve, reject });
            this.processQueue();
        });
    }
    
    async processQueue() {
        if (this.processing || this.requestQueue.length === 0) {
            return;
        }
        
        this.processing = true;
        
        while (this.requestQueue.length > 0) {
            const { requestFn, resolve, reject } = this.requestQueue.shift();
            
            // Wait if bandwidth limit exceeded
            while (this.currentUsage >= this.maxBandwidth) {
                await this.sleep(100);
            }
            
            try {
                const result = await requestFn();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
        
        this.processing = false;
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    updateUsage(bytes) {
        this.currentUsage += bytes;
        
        // Decay usage over time
        setTimeout(() => {
            this.currentUsage = Math.max(0, this.currentUsage - bytes);
        }, 5000);
    }
}

// Usage Example
class OptimizedSeleniumTest {
    constructor() {
        this.networkOptimizer = new NetworkOptimizer();
        this.bandwidthManager = new BandwidthManager();
        this.driver = null;
    }
    
    async setup() {
        // Create optimized WebDriver
        const chrome = require('selenium-webdriver/chrome');
        const { Builder } = require('selenium-webdriver');
        
        const options = new chrome.Options();
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--disable-gpu');
        
        // Network optimizations
        options.addArguments('--disable-background-networking');
        options.addArguments('--disable-default-apps');
        options.addArguments('--disable-extensions');
        options.addArguments('--disable-sync');
        options.addArguments('--no-first-run');
        
        this.driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        
        // Set up network optimization
        this.networkOptimizer.setupNetworkOptimization(this.driver);
    }
    
    async runOptimizedTest() {
        try {
            await this.setup();
            
            // Navigate with bandwidth management
            await this.bandwidthManager.throttleRequest(async () => {
                return await this.driver.get('https://example.com');
            });
            
            // Perform optimized interactions
            await this.performOptimizedInteractions();
            
            // Get network statistics
            const stats = this.networkOptimizer.getNetworkStats();
            console.log('Network Statistics:', stats);
            
        } finally {
            if (this.driver) {
                await this.driver.quit();
            }
        }
    }
    
    async performOptimizedInteractions() {
        // Wait for page to load with network optimization
        await this.driver.wait(async () => {
            const readyState = await this.driver.executeScript(
                'return document.readyState'
            );
            return readyState === 'complete';
        }, 10000);
        
        // Perform actions with minimal network impact
        const elements = await this.driver.findElements({ css: 'button' });
        
        for (const element of elements.slice(0, 5)) { // Limit interactions
            try {
                await element.click();
                await this.driver.sleep(500); // Small delay between actions
            } catch (error) {
                console.log('Element interaction failed:', error.message);
            }
        }
    }
}

// Export for use
module.exports = {
    NetworkOptimizer,
    NetworkMonitor,
    BandwidthManager,
    OptimizedSeleniumTest
};`
      }
    ]
  };

  const currentFeatures = resourceData[selectedStrategy];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Server}
        category="Selenium · Performance & Optimization"
        title="Resource Management"
        description="Manage system resources efficiently for optimal Selenium test execution"
        colorTheme="blue"
        badges={[
          { label: 'Resource Management', variant: 'secondary' },
          { label: 'Optimization', variant: 'info' },
          { label: 'Monitoring', variant: 'secondary' },
        ]}
      />

      {/* Resource Management Flow Diagram */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Resource Management Pipeline
          </CardTitle>
          <CardDescription>Visual representation of resource management workflow for Selenium tests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Resource Monitoring */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Resource Monitoring</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Track CPU, Memory, Network</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Analysis */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Usage Analysis</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Identify bottlenecks</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Optimization */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Resource Optimization</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Apply optimizations</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Execution */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Optimized Execution</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Run efficient tests</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Cleanup */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Resource Cleanup</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">Free resources</div>
                </div>
              </div>
            </div>
            
            {/* Resource Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Memory Management</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Memory pooling</li>
                  <li>• Leak detection</li>
                  <li>• Automatic cleanup</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">CPU Optimization</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Thread management</li>
                  <li>• Load balancing</li>
                  <li>• Process optimization</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Network Optimization</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Bandwidth control</li>
                  <li>• Request caching</li>
                  <li>• Connection pooling</li>
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
            <Terminal className="w-5 h-5 text-blue-600" />
            Resource Strategies
          </CardTitle>
          <CardDescription>
            Different approaches to manage and optimize system resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Strategy Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['memory', 'cpu', 'network'] as const).map((strategy) => (
              <button
                key={strategy}
                onClick={() => setSelectedStrategy(strategy)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedStrategy === strategy
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {strategy}
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
                ? 'border-blue-500 shadow-lg bg-blue-50 dark:bg-blue-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-blue-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-blue-100 dark:bg-blue-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Zap className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-blue-600 dark:text-blue-400'
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
                      Resource Issues
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
                      Optimization Solutions
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

      {/* Resource Metrics Dashboard */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Resource Metrics Dashboard
          </CardTitle>
          <CardDescription>Key resource utilization metrics and optimization targets</CardDescription>
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
                      Target: &lt; 512MB per test instance with proper pooling and cleanup strategies.
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
                      Maintain zero memory leaks with automatic resource tracking and cleanup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Performance Targets</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">CPU Utilization</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Optimize CPU usage to &lt; 70% with intelligent thread management and load balancing.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Network Efficiency</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Minimize bandwidth usage with request caching and intelligent resource optimization.
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
