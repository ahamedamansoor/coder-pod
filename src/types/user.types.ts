import { FieldValue, Timestamp } from 'firebase/firestore';

export type UserPlan = 'free' | 'pro' | 'enterprise';

export interface UserProfile {
  id: string;
  email: string | null;
  name: string | null;
  phoneNumber: string | null;
  dob: Date | null;
  photoURL?: string | null;
  createdAt: Timestamp | Date | FieldValue;
  lastLoginAt: Timestamp | Date | FieldValue;
  completedTopics: Record<string, boolean>;
  plan: UserPlan;
  tokenBalance: number;
  preferences?: UserPreferences;
  stats?: UserStats;
}

export interface UserPreferences {
  theme?: 'light' | 'dark' | 'auto';
  language?: string;
  emailNotifications?: boolean;
  pushNotifications?: boolean;
}

export interface UserStats {
  totalLessonsCompleted?: number;
  totalTimeSpent?: number;
  streakDays?: number;
  lastActiveDate?: Date;
  badges?: string[];
}

export interface CreateUserData {
  email: string | null;
  name: string | null;
  phoneNumber?: string | null;
  dob?: Date | null;
  photoURL?: string | null;
}

export interface UpdateUserData {
  name?: string | null;
  phoneNumber?: string | null;
  dob?: Date | null;
  photoURL?: string | null;
  preferences?: Partial<UserPreferences>;
  stats?: Partial<UserStats>;
}
