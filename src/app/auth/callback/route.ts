import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/dashboard';

  if (code) {
    // Redirect to the app with the code
    // The client-side Supabase will handle the code exchange and session storage
    return NextResponse.redirect(`${requestUrl.origin}${next}?code=${code}`);
  }

  // If no code, redirect to dashboard
  return NextResponse.redirect(`${requestUrl.origin}${next}`);
}
