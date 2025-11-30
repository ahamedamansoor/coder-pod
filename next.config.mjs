/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude Node.js built-in modules and server-only packages from client bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        path: false,
        os: false,
        util: false,
        url: false,
        child_process: false,
      };

      // Exclude server-only packages from client bundle
      config.externals = config.externals || [];
      config.externals.push({
        'firebase-admin': 'commonjs firebase-admin',
        '@google-cloud/storage': 'commonjs @google-cloud/storage',
        'genkit': 'commonjs genkit',
        '@genkit-ai/google-genai': 'commonjs @genkit-ai/google-genai',
      });
    }
    return config;
  },
  
  // Optimize for production
  reactStrictMode: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Server Components external packages (prevents bundling for server components)
  serverExternalPackages: [
    'firebase-admin',
    '@google-cloud/storage',
    'genkit',
    '@genkit-ai/google-genai',
  ],
  
  // Experimental features
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
