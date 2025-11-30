
import { admin } from '@/lib/admin';
import { defineFlow } from '@genkit-ai/flow';
import * as z from 'zod';

export const deleteUserFlow = defineFlow(
  {
    name: 'deleteUserFlow',
    inputSchema: z.object({ userId: z.string() }),
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
    auth: {
      policy: async (auth, input) => {
        if (!auth) {
          throw new Error('Authorization required.');
        }
        // Assuming you have a way to check if the user is an admin
        const isAdmin = admin.auth().verifyIdToken(auth.idToken).then(decodedToken => decodedToken.admin);
        if (!isAdmin) {
          throw new Error('Admin access required.');
        }
      },
    },
  },
  async ({ userId }) => {
    try {
      // Delete from Firebase Authentication
      await admin.auth().deleteUser(userId);

      // Delete from Firestore
      const firestore = admin.firestore();
      await firestore.collection('users').doc(userId).delete();

      return { success: true, message: 'User deleted successfully.' };
    } catch (error: any) {
      console.error('Error deleting user:', error);
      return { success: false, message: error.message || 'Failed to delete user.' };
    }
  }
);
