import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { userId, completionData } = await request.json();

    // For beacon sync, userId might not be available
    // We'll require the client to send userId for now
    // This is a limitation we'll need to address by storing userId in localStorage
    if (!userId || !completionData) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    // Get current user profile
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('completed_topics')
      .eq('id', userId)
      .single();

    if (profileError && profileError.code !== 'PGRST116') {
      console.error('Error fetching user profile:', profileError);
      return NextResponse.json({ error: 'Profile error' }, { status: 500 });
    }

    // Merge with existing data
    const existingTopics = profile?.completed_topics || {};
    const updatedTopics = {
      ...existingTopics,
      ...completionData
    };

    // Update server
    const { error: updateError } = await supabase
      .from('users')
      .update({ completed_topics: updatedTopics })
      .eq('id', userId);

    if (updateError) {
      console.error('Error updating completion data:', updateError);
      return NextResponse.json({ error: 'Update error' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Sync API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
