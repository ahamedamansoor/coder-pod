/**
 * Client-side SCSS compiler using sass.js
 * This loads the sass.js library dynamically and compiles SCSS to CSS in the browser
 */

let sassInstance: any = null;
let sassLoading: Promise<any> | null = null;

async function loadSass() {
  if (sassInstance) return sassInstance;
  if (sassLoading) return sassLoading;

  sassLoading = new Promise((resolve, reject) => {
    // Check if Sass is already loaded (should be preloaded from layout.tsx)
    if (typeof (window as any).Sass !== 'undefined') {
      sassInstance = (window as any).Sass;
      console.log('Sass.js found (preloaded)');
      resolve(sassInstance);
      return;
    }

    // If not loaded yet, wait and retry a few times
    let retries = 0;
    const maxRetries = 20; // Wait up to 2 seconds
    
    const checkSass = () => {
      if (typeof (window as any).Sass !== 'undefined') {
        sassInstance = (window as any).Sass;
        console.log('Sass.js loaded successfully after waiting');
        resolve(sassInstance);
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(checkSass, 100);
      } else {
        // Fallback: try to load it dynamically
        console.warn('Sass.js not preloaded, loading dynamically...');
        loadSassDynamic().then(resolve).catch(reject);
      }
    };
    
    setTimeout(checkSass, 100);
  });

  return sassLoading;
}

// Fallback: Load dynamically if preload failed
async function loadSassDynamic() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.js';
    
    script.onload = () => {
      setTimeout(() => {
        if (typeof (window as any).Sass !== 'undefined') {
          sassInstance = (window as any).Sass;
          console.log('Sass.js loaded dynamically');
          resolve(sassInstance);
        } else {
          loadSassWorker().then(resolve).catch(reject);
        }
      }, 200);
    };
    
    script.onerror = () => {
      loadSassWorker().then(resolve).catch(reject);
    };
    
    document.head.appendChild(script);
  });
}

// Fallback: Load worker-based version
async function loadSassWorker() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.js';
    script.async = false;
    
    script.onload = () => {
      setTimeout(() => {
        if (typeof (window as any).Sass !== 'undefined') {
          const SassClass = (window as any).Sass;
          sassInstance = new SassClass();
          console.log('Sass.js worker version loaded successfully');
          resolve(sassInstance);
        } else {
          reject(new Error('Failed to load Sass.js (both sync and worker versions failed)'));
        }
      }, 300);
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Sass.js worker version'));
    };
    
    document.head.appendChild(script);
  });
}

export async function compileScss(scss: string): Promise<{ css: string; error?: string }> {
  try {
    const Sass = await loadSass();
    
    return new Promise((resolve) => {
      try {
        // Check if it's the class or instance
        const sass = typeof Sass === 'function' ? new Sass() : Sass;
        
        sass.compile(scss, (result: any) => {
          if (result.status === 0) {
            // Success
            resolve({ css: result.text || '' });
          } else {
            // Error
            const errorMessage = result.formatted || result.message || 'SCSS compilation failed';
            console.error('SCSS Compilation Error:', errorMessage);
            resolve({ 
              css: `/* SCSS Compilation Error:\n${errorMessage}\n*/\n\n/* Original SCSS (commented out):\n${scss.split('\n').map(line => ' * ' + line).join('\n')}\n*/`,
              error: errorMessage 
            });
          }
        });
      } catch (compileError) {
        const errorMessage = compileError instanceof Error ? compileError.message : 'Compilation failed';
        console.error('SCSS Compile Error:', compileError);
        resolve({
          css: `/* SCSS Compilation Error:\n${errorMessage}\n*/`,
          error: errorMessage
        });
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to load SCSS compiler';
    console.error('SCSS Loader Error:', error);
    return {
      css: `/* SCSS Compiler Error:\n${errorMessage}\n\nPlease refresh the page and try again.\n*/`,
      error: errorMessage
    };
  }
}
