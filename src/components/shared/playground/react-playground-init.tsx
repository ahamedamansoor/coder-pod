'use client';

// React Playground Pre-loader - Initialize on app start
let babelLoaded = false;
let loadPromise: Promise<void> | null = null;

export const preloadReactPlayground = async () => {
  // Only load once
  if (babelLoaded) {
    console.log('🚀 React Playground: Babel already pre-loaded');
    return;
  }

  // If already loading, return the existing promise
  if (loadPromise) {
    console.log('⏳ React Playground: Babel loading in progress, waiting...');
    return loadPromise;
  }

  console.log('📦 React Playground: Pre-loading Babel for instant use...');
  
  loadPromise = new Promise<void>((resolve, reject) => {
    // Check if Babel is already available
    if (typeof window !== 'undefined' && (window as any).Babel) {
      console.log('✅ React Playground: Babel already available');
      babelLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@babel/standalone@7.23.5/babel.min.js';
    script.async = true;
    
    script.onload = () => {
      // Give Babel a moment to initialize
      setTimeout(() => {
        if ((window as any).Babel && (window as any).Babel.transform) {
          console.log('✅ React Playground: Babel pre-loaded successfully');
          babelLoaded = true;
          resolve();
        } else {
          console.error('❌ React Playground: Babel loaded but transform method not available');
          reject(new Error('Babel loaded but transform method not available'));
        }
      }, 100);
    };
    
    script.onerror = () => {
      console.error('❌ React Playground: Failed to pre-load Babel');
      reject(new Error('Failed to load Babel script'));
    };
    
    document.head.appendChild(script);
  });

  try {
    await loadPromise;
  } catch (error) {
    console.error('❌ React Playground: Pre-load failed:', error);
    // Reset promise on failure so it can be retried
    loadPromise = null;
    throw error;
  }
};

export const isBabelLoaded = () => babelLoaded;

// Auto-trigger pre-load when module is imported (lazy loading)
if (typeof window !== 'undefined') {
  // Start pre-loading after a short delay to not block initial app load
  setTimeout(() => {
    preloadReactPlayground().catch(error => {
      console.warn('⚠️ React Playground: Background pre-load failed, will load on demand:', error);
    });
  }, 2000);
}
