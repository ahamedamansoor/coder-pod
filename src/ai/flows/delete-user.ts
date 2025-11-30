
import { defineFlow } from '@genkit-ai/flow';
import * as z from 'zod';
import { getAdminApp } from '../../lib/firebase-admin';
import { isUserAdmin } from '../../lib/admin';

// Initialize Firebase Admin SDK
const adminApp = getAdminApp();
const auth = adminApp.auth();
const firestore = adminApp.firestore();

export const deleteUserFlow = defineFlow(
  {
    name: 'deleteUser',
    inputSchema: z.object({
      userIdToDelete: z.string(),
      adminUserEmail: z.string(),
    }),
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string(),
    }),
  },
  async ({ userIdToDelete, adminUserEmail }) => {
    // 1. Authenticate the admin user
    if (!isUserAdmin({ email: adminUserEmail })) {
      return {
        success: false,
        message: "Unauthorized: Only admins can delete users.",
      };
    }

    try {
      // 2. Delete user from Firebase Authentication
      await auth.deleteUser(userIdToDelete);
      
      // 3. Delete user data from Firestore
      const userDocRef = firestore.collection('users').doc(userIdToDelete);
      await userDocRef.delete();

      return {
        success: true,
        message: `Successfully deleted user ${userIdToDelete} from authentication and database.`,
      };
    } catch (error: any) {
      console.error('Error deleting user:', error);
      return {
        success: false,
        message: error.message || "An unexpected error occurred.",
      };
    }
  }
);
