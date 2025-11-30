/**
 * Admin utility functions
 * Admin email: ahamedamansoor@gmail.com
 */

const ADMIN_EMAIL = 'ahamedamansoor@gmail.com';

/**
 * Check if a user is an admin
 */
export function isAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

/**
 * Check if a user object is an admin
 */
export function isUserAdmin(user: { email?: string | null } | null | undefined): boolean {
  return isAdmin(user?.email);
}

/**
 * Get admin email
 */
export function getAdminEmail(): string {
  return ADMIN_EMAIL;
}
