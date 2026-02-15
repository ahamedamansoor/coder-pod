import { supabase } from '@/lib/supabase';
import { UserProfile, CreateUserData, UpdateUserData } from '@/types/user.types';

export class SupabaseUserService {
  private tableName = 'users';

  /**
   * Get user profile by ID
   */
  async getUserProfile(userId: string, supabaseClient?: any): Promise<UserProfile | null> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // Not found
          return null;
        }
        throw new Error(`Failed to fetch user profile: ${error.message}`);
      }

      return this.mapSupabaseUserToProfile(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }

  /**
   * Check if user exists
   */
  async userExists(userId: string, supabaseClient?: any): Promise<boolean> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('id')
        .eq('id', userId)
        .single();

      if (error && error.code === 'PGRST116') {
        return false;
      }

      return !!data;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  }

  /**
   * Create user profile
   */
  async createUserProfile(userId: string, userData: CreateUserData, supabaseClient?: any): Promise<UserProfile> {
    try {
      const client = supabaseClient || supabase;
      const newUser = {
        id: userId,
        email: userData.email,
        name: userData.name,
        phone_number: userData.phoneNumber || null,
        dob: userData.dob || null,
        photo_url: userData.photoURL || null,
        plan: 'free',
        token_balance: 0,
        completed_topics: {},
        preferences: {},
        stats: {},
      };

      const { data, error } = await client
        .from(this.tableName)
        .insert(newUser)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to create user profile: ${error.message}`);
      }

      return this.mapSupabaseUserToProfile(data);
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(userId: string, updateData: UpdateUserData, supabaseClient?: any): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      const updatePayload: any = {};

      if (updateData.name !== undefined) updatePayload.name = updateData.name;
      if (updateData.phoneNumber !== undefined) updatePayload.phone_number = updateData.phoneNumber;
      if (updateData.dob !== undefined) updatePayload.dob = updateData.dob;
      if (updateData.photoURL !== undefined) updatePayload.photo_url = updateData.photoURL;
      if (updateData.preferences !== undefined) updatePayload.preferences = updateData.preferences;
      if (updateData.stats !== undefined) updatePayload.stats = updateData.stats;

      updatePayload.updated_at = new Date().toISOString();

      const { error } = await client
        .from(this.tableName)
        .update(updatePayload)
        .eq('id', userId);

      if (error) {
        throw new Error(`Failed to update user profile: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  /**
   * Update last login timestamp
   */
  async updateLastLogin(userId: string, supabaseClient?: any): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      const { error } = await client
        .from(this.tableName)
        .update({ last_login_at: new Date().toISOString() })
        .eq('id', userId);

      if (error) {
        throw new Error(`Failed to update last login: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating last login:', error);
      throw error;
    }
  }

  /**
   * Mark topic as completed
   */
  async markTopicCompleted(userId: string, languageSlug: string, topicSlug: string, supabaseClient?: any): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      // Get current completed topics
      const profile = await this.getUserProfile(userId, client);
      if (!profile) throw new Error('User profile not found');

      const previous = profile.completedTopics?.[languageSlug] ?? [];
      const next = Array.from(new Set([...previous, topicSlug]));
      const completedTopics = { ...profile.completedTopics, [languageSlug]: next };

      const { error } = await client
        .from(this.tableName)
        .update({ completed_topics: completedTopics })
        .eq('id', userId);

      if (error) {
        throw new Error(`Failed to mark topic completed: ${error.message}`);
      }
    } catch (error) {
      console.error('Error marking topic completed:', error);
      throw error;
    }
  }

  /**
   * Sync user from Supabase Auth to users table
   */
  async syncUserFromAuth(userId: string, authData: any, supabaseClient?: any): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      const exists = await this.userExists(userId, client);

      if (!exists) {
        console.log('📝 Creating user profile for:', userId);
        // Create new profile
        await this.createUserProfile(userId, {
          email: authData.email || null,
          name: authData.user_metadata?.name || authData.user_metadata?.full_name || null,
          photoURL: authData.user_metadata?.avatar_url || authData.user_metadata?.picture || null,
        }, client);
      } else {
        // Update last login
        await this.updateLastLogin(userId, client);
      }
    } catch (error: any) {
      console.error('Error syncing user from auth:', error);
      // If it's an RLS error, log more details
      if (error.message?.includes('row-level security policy')) {
        console.error('RLS Violation details:', {
          userId,
          table: this.tableName,
          authUid: (await (supabaseClient || supabase).auth.getUser()).data.user?.id
        });
      }
      throw error;
    }
  }

  /**
   * Map Supabase user to UserProfile
   */
  private mapSupabaseUserToProfile(supabaseUser: any): UserProfile {
    return {
      id: supabaseUser.id,
      email: supabaseUser.email,
      name: supabaseUser.name,
      phoneNumber: supabaseUser.phone_number,
      dob: supabaseUser.dob ? new Date(supabaseUser.dob) : null,
      photoURL: supabaseUser.photo_url,
      createdAt: new Date(supabaseUser.created_at),
      lastLoginAt: new Date(supabaseUser.last_login_at),
      completedTopics: (supabaseUser.completed_topics || {}) as Record<string, string[]>,
      plan: supabaseUser.plan || 'free',
      tokenBalance: supabaseUser.token_balance || 0,
      preferences: supabaseUser.preferences || {},
      stats: supabaseUser.stats || {},
    };
  }
}

// Export singleton instance
export const supabaseUserService = new SupabaseUserService();
