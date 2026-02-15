import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env.local file.'
  );
}

// Create a dynamic Supabase client factory for concurrent logins
export const createSupabaseClient = (email?: string) => {
  // Generate unique storage key per user email
  const storageKey = email ?
    `coder-pod-auth-${email.replace(/[^a-zA-Z0-9]/g, '_')}` :
    'coder-pod-auth-default';

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true, // Enable session persistence
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: storageKey,
    },
  });
};

// Default Supabase client (for initial auth)
export const supabase = createSupabaseClient();

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
