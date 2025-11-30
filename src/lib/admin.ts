/**
 * Admin utility functions
 * Admin emails: ahamedamansoor@gmail.com, ahamedamansoor.dev@gmail.com, tech.vishnukumar@gmail.com
 */

const ADMIN_EMAILS = ['ahamedamansoor@gmail.com', 'ahamedamansoor.dev@gmail.com', 'tech.vishnukumar@gmail.com'];

/**
 * Check if a user is an admin
 */
export function isAdmin(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.map(e => e.toLowerCase()).includes(email.toLowerCase());
}

/**
 * Check if a user object is an admin
 */
export function isUserAdmin(user: { email?: string | null } | null | undefined): boolean {
  return isAdmin(user?.email);
}

/**
 * Get admin emails
 */
export function getAdminEmails(): string[] {
  return ADMIN_EMAILS;
}
