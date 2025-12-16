import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/dashboard';

  if (code) {
    const cookieStore = await cookies();
    
    // Create Supabase client for server-side
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          flowType: 'pkce',
        },
      }
    );
    
    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Error exchanging code for session:', error);
        return NextResponse.redirect(`${requestUrl.origin}/login?error=auth_failed`);
      }

      // Get the session to set cookies
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // Set cookies for the session
        const response = NextResponse.redirect(`${requestUrl.origin}${next}`);
        
        // Set access token cookie
        response.cookies.set('sb-access-token', session.access_token, {
          path: '/',
          secure: process.env.NODE_ENV === 'production',
          httpOnly: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
        
        // Set refresh token cookie
        response.cookies.set('sb-refresh-token', session.refresh_token, {
          path: '/',
          secure: process.env.NODE_ENV === 'production',
          httpOnly: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
        
        return response;
      }
    } catch (error) {
      console.error('Error in auth callback:', error);
      return NextResponse.redirect(`${requestUrl.origin}/login?error=auth_failed`);
    }
  }

  // Redirect to the next page or dashboard
  return NextResponse.redirect(`${requestUrl.origin}${next}`);
}
