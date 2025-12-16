import { Firestore, doc, getDoc, setDoc, updateDoc, serverTimestamp, DocumentSnapshot, arrayUnion } from 'firebase/firestore';
import { User as FirebaseUser } from 'firebase/auth';
import { UserProfile, CreateUserData, UpdateUserData } from '@/types/user.types';

export class UserService {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  /**
   * Get user profile by ID
   */
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      const docSnap = await getDoc(userRef);
      
      if (!docSnap.exists()) {
        return null;
      }

      return this.mapDocToUserProfile(docSnap);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw new Error('Failed to fetch user profile');
    }
  }

  /**
   * Check if user exists in database
   */
  async userExists(userId: string): Promise<boolean> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      const docSnap = await getDoc(userRef);
      return docSnap.exists();
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  }

  /**
   * Create a new user profile
   */
  async createUserProfile(userId: string, userData: CreateUserData): Promise<UserProfile> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      
      const userProfile: Omit<UserProfile, 'id' | 'createdAt' | 'lastLoginAt'> & {
        createdAt: ReturnType<typeof serverTimestamp>;
        lastLoginAt: ReturnType<typeof serverTimestamp>;
      } = {
        email: userData.email,
        name: userData.name || userData.email,
        phoneNumber: userData.phoneNumber || null,
        dob: userData.dob || null,
        photoURL: userData.photoURL || null,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        completedTopics: {},
        plan: 'free',
        tokenBalance: 10000,
      };

      await setDoc(userRef, userProfile);

      // Return the created profile with the ID
      return {
        id: userId,
        ...userProfile,
        createdAt: new Date(),
        lastLoginAt: new Date(),
      } as UserProfile;
    } catch (error: any) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(userId: string, updateData: UpdateUserData): Promise<void> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      await updateDoc(userRef, {
        ...updateData,
        lastLoginAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw new Error('Failed to update user profile');
    }
  }

  /**
   * Update last login timestamp
   */
  async updateLastLogin(userId: string): Promise<void> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      await setDoc(userRef, { 
        lastLoginAt: serverTimestamp() 
      }, { merge: true });
    } catch (error) {
      console.error('Error updating last login:', error);
      throw new Error('Failed to update last login');
    }
  }

  /**
   * Create or update user from Firebase Auth user
   */
  async syncUserFromAuth(firebaseUser: FirebaseUser, additionalData?: Partial<CreateUserData>): Promise<UserProfile> {
    try {
      const exists = await this.userExists(firebaseUser.uid);

      if (!exists) {
        // Create new user
        const userData: CreateUserData = {
          email: firebaseUser.email,
          name: firebaseUser.displayName || additionalData?.name || firebaseUser.email,
          phoneNumber: firebaseUser.phoneNumber || additionalData?.phoneNumber || null,
          dob: additionalData?.dob || null,
          photoURL: firebaseUser.photoURL || additionalData?.photoURL || null,
        };
        return await this.createUserProfile(firebaseUser.uid, userData);
      } else {
        // Update last login for existing user
        await this.updateLastLogin(firebaseUser.uid);
        const profile = await this.getUserProfile(firebaseUser.uid);
        return profile!;
      }
    } catch (error: any) {
      console.error('Error syncing user from auth:', error);
      throw error;
    }
  }

  /**
   * Update user's completed topics
   */
  async markTopicComplete(userId: string, languageSlug: string, topicSlug: string): Promise<void> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      await updateDoc(userRef, {
        [`completedTopics.${languageSlug}`]: arrayUnion(topicSlug),
      });
    } catch (error) {
      console.error('Error marking topic complete:', error);
      throw new Error('Failed to mark topic as complete');
    }
  }

  /**
   * Update user's token balance
   */
  async updateTokenBalance(userId: string, amount: number): Promise<void> {
    try {
      const userRef = doc(this.firestore, `users/${userId}`);
      const profile = await this.getUserProfile(userId);
      
      if (!profile) {
        throw new Error('User profile not found');
      }

      const newBalance = profile.tokenBalance + amount;
      await updateDoc(userRef, {
        tokenBalance: newBalance >= 0 ? newBalance : 0,
      });
    } catch (error) {
      console.error('Error updating token balance:', error);
      throw new Error('Failed to update token balance');
    }
  }

  /**
   * Helper: Convert Firestore document to UserProfile
   */
  private mapDocToUserProfile(docSnap: DocumentSnapshot): UserProfile {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      email: data?.email || null,
      name: data?.name || null,
      phoneNumber: data?.phoneNumber || null,
      dob: data?.dob?.toDate?.() || data?.dob || null,
      photoURL: data?.photoURL || null,
      createdAt: data?.createdAt?.toDate?.() || new Date(),
      lastLoginAt: data?.lastLoginAt?.toDate?.() || new Date(),
      completedTopics: data?.completedTopics || {},
      plan: data?.plan || 'free',
      tokenBalance: data?.tokenBalance || 0,
      preferences: data?.preferences,
      stats: data?.stats,
    } as UserProfile;
  }
}
