import { Auth, User as FirebaseUser, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { UserService } from './user.service';
import { CreateUserData } from '@/types/user.types';

export interface LoginResult {
  user: FirebaseUser;
  isNewUser: boolean;
}

export class AuthService {
  private auth: Auth;
  private userService: UserService;

  constructor(auth: Auth, userService: UserService) {
    this.auth = auth;
    this.userService = userService;
  }

  /**
   * Sign in with Google
   */
  async signInWithGoogle(): Promise<LoginResult> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      const user = userCredential.user;

      // Check if user is new
      const exists = await this.userService.userExists(user.uid);
      const isNewUser = !exists;

      // Sync user profile with database
      await this.userService.syncUserFromAuth(user);

      return { user, isNewUser };
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  }

  /**
   * Sign in with email and password
   */
  async signInWithEmail(email: string, password: string): Promise<LoginResult> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Check email verification for email/password sign-in
      if (!user.emailVerified) {
        await signOut(this.auth);
        throw new Error('EMAIL_NOT_VERIFIED');
      }

      // Check if user is new (shouldn't be for sign-in, but safety check)
      const exists = await this.userService.userExists(user.uid);
      const isNewUser = !exists;

      // Sync user profile with database
      await this.userService.syncUserFromAuth(user);

      return { user, isNewUser };
    } catch (error: any) {
      console.error('Email sign-in error:', error);
      throw error;
    }
  }

  /**
   * Sign up with email and password
   */
  async signUpWithEmail(email: string, password: string, additionalData?: Partial<CreateUserData>): Promise<FirebaseUser> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);

      // Note: We don't create the profile yet, it will be created on first verified sign-in
      // This is to ensure only verified users get database entries

      return user;
    } catch (error: any) {
      console.error('Email sign-up error:', error);
      throw error;
    }
  }

  /**
   * Sign out
   */
  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  }

  /**
   * Get current user
   */
  getCurrentUser(): FirebaseUser | null {
    return this.auth.currentUser;
  }
}
