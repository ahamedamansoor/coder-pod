import { supabaseUserService } from './supabase-user.service';
import { supabaseNotesService } from './supabase-notes.service';

export * from './supabase-user.service';
export * from './supabase-notes.service';

/**
 * Service factory to create all backend services
 * Now fully migrated to Supabase
 */
export class ServiceFactory {
  static getUserService() {
    return supabaseUserService;
  }

  /**
   * @deprecated Authentication is now handled by SupabaseAuthContext
   */
  static getAuthService() {
    throw new Error('AuthService is deprecated. Use SupabaseAuthContext instead.');
  }

  /**
   * Get Notes Service - Now uses Supabase instead of Firebase
   */
  static getNotesService() {
    return supabaseNotesService;
  }

  static reset(): void {
    // No-op for Supabase services as they are exported as singleton instances
  }
}
