import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { NotesService } from './notes.service';

export * from './user.service';
export * from './auth.service';
export * from './notes.service';

/**
 * Service factory to create all backend services
 */
export class ServiceFactory {
  private static userServiceInstance: UserService | null = null;
  private static authServiceInstance: AuthService | null = null;
  private static notesServiceInstance: NotesService | null = null;

  static getUserService(firestore: Firestore): UserService {
    if (!this.userServiceInstance) {
      this.userServiceInstance = new UserService(firestore);
    }
    return this.userServiceInstance;
  }

  static getAuthService(auth: Auth, firestore: Firestore): AuthService {
    if (!this.authServiceInstance) {
      const userService = this.getUserService(firestore);
      this.authServiceInstance = new AuthService(auth, userService);
    }
    return this.authServiceInstance;
  }

  static getNotesService(firestore: Firestore): NotesService {
    if (!this.notesServiceInstance) {
      this.notesServiceInstance = new NotesService(firestore);
    }
    return this.notesServiceInstance;
  }

  static reset(): void {
    this.userServiceInstance = null;
    this.authServiceInstance = null;
    this.notesServiceInstance = null;
  }
}
