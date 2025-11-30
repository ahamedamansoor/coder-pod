'use server';

import { z } from 'zod';
import { getAdminApp } from '@/lib/firebase-admin';
import { isUserAdmin } from '@/lib/admin';

// Initialize Firebase Admin
const adminApp = getAdminApp();
const auth = adminApp.auth();
const firestore = adminApp.firestore();

// Define the input schema for validation
const deleteUserSchema = z.object({
  userIdToDelete: z.string().min(1, "User ID is required."),
  adminUserEmail: z.string().email("Invalid admin email."),
});

export async function deleteUserAction(prevState: any, formData: FormData) {
  const rawData = {
    userIdToDelete: formData.get('userIdToDelete'),
    adminUserEmail: formData.get('adminUserEmail'),
  };

  // 1. Validate the input
  const validatedFields = deleteUserSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.userIdToDelete?.[0] || "Validation failed.",
    };
  }

  const { userIdToDelete, adminUserEmail } = validatedFields.data;

  // 2. Authorize the admin user
  if (!isUserAdmin({ email: adminUserEmail })) {
    return {
      success: false,
      message: "Unauthorized: Only admins can perform this action.",
    };
  }

  // 3. Perform the deletion
  try {
    // Delete from Authentication
    await auth.deleteUser(userIdToDelete);

    // Delete from Firestore
    const userDocRef = firestore.collection('users').doc(userIdToDelete);
    await userDocRef.delete();

    return {
      success: true,
      message: `User ${userIdToDelete} has been successfully deleted.`,
    };
  } catch (error: any) {
    console.error("Error in deleteUserAction:", error);
    return {
      success: false,
      message: error.message || "An unexpected error occurred during user deletion.",
    };
  }
}
