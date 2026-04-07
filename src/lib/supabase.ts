import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env.local file.'
  );
}

// Singleton instance to prevent multiple clients
let supabaseInstance: SupabaseClient | null = null;

// Client cache to prevent duplicate instances for same email
const clientCache = new Map<string, SupabaseClient>();

// Create a dynamic Supabase client factory for concurrent logins
export const createSupabaseClient = (email?: string) => {
  // Generate unique storage key per user email
  const storageKey = email ?
    `coder-pod-auth-${email.replace(/[^a-zA-Z0-9]/g, '_')}` :
    'coder-pod-auth-default';

  // Check cache first
  if (clientCache.has(storageKey)) {
    return clientCache.get(storageKey)!;
  }

  // Create new client and cache it
  const client = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true, // Enable session persistence
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: storageKey,
    },
  });

  clientCache.set(storageKey, client);
  return client;
};

// Default Supabase client (singleton pattern)
export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClient();
  }
  return supabaseInstance;
})();

// Utility function to clear client cache (useful for testing or logout)
export const clearSupabaseClientCache = () => {
  clientCache.clear();
  supabaseInstance = null;
};

// Get cache size for debugging
export const getSupabaseClientCacheSize = () => {
  return clientCache.size;
};

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          type: 'article' | 'video' | 'link' | 'doc' | 'blog' | 'documentation';
          language: string;
          url: string | null;
          video_id: string | null;
          content: string | null;
          tags: string[];
          favorited: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          type: 'article' | 'video' | 'link' | 'doc' | 'blog' | 'documentation';
          language: string;
          url?: string | null;
          video_id?: string | null;
          content?: string | null;
          tags?: string[];
          favorited?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          description?: string | null;
          type?: 'article' | 'video' | 'link' | 'doc' | 'blog' | 'documentation';
          language?: string;
          url?: string | null;
          video_id?: string | null;
          content?: string | null;
          tags?: string[];
          favorited?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
