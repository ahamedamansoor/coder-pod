import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env.local file.'
  );
}

// Create a single supabase client for interacting with your database and auth
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Enable session persistence
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'coder-pod-auth',
  },
});

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
          type: 'article' | 'video' | 'link' | 'doc';
          language: string;
          url: string | null;
          video_id: string | null;
          content: string | null;
          tags: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          type: 'article' | 'video' | 'link' | 'doc';
          language: string;
          url?: string | null;
          video_id?: string | null;
          content?: string | null;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          description?: string | null;
          type?: 'article' | 'video' | 'link' | 'doc';
          language?: string;
          url?: string | null;
          video_id?: string | null;
          content?: string | null;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
