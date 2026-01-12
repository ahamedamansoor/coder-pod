import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/dashboard';

  if (code) {
    // Create Supabase client for server-side auth
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
      // Exchange code for session
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Auth callback error:', error);
        return NextResponse.redirect(`${requestUrl.origin}/login?error=${encodeURIComponent(error.message)}`);
      }

      if (data.user?.email) {
        // Store email for client-side dynamic client creation
        const redirectUrl = new URL(`${requestUrl.origin}${next}`);
        redirectUrl.searchParams.set('email', data.user.email);
        redirectUrl.searchParams.set('code', code);
        return NextResponse.redirect(redirectUrl);
      }
    } catch (err) {
      console.error('Auth callback exception:', err);
      return NextResponse.redirect(`${requestUrl.origin}/login?error=Authentication failed`);
    }
  }

  // If no code, redirect to login
  return NextResponse.redirect(`${requestUrl.origin}/login`);
}
