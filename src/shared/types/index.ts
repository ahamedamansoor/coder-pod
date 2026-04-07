// Shared type definitions used across the application

// Base entity interface
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User-related types
export interface User extends BaseEntity {
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  isAnonymous: boolean;
}

export enum UserRole {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
}

// Learning-related types
export interface LearningProgress extends BaseEntity {
  userId: string;
  languageSlug: string;
  completedTopics: Set<string>;
  currentTopic?: string;
  lastAccessedAt: Date;
  totalTimeSpent: number; // in minutes
}

export interface Topic extends BaseEntity {
  slug: string;
  title: string;
  explanation: string;
  category?: string;
  difficulty: DifficultyLevel;
  estimatedTime: number; // in minutes
  prerequisites: string[];
  learningObjectives: string[];
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

// Language-related types
export interface Language extends BaseEntity {
  slug: string;
  name: string;
  description: string;
  topics: Topic[];
  category: LanguageCategory;
  isActive: boolean;
}

export enum LanguageCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  MOBILE = 'mobile',
  DEVOPS = 'devops',
  DATABASE = 'database',
  TESTING = 'testing',
  DESIGN = 'design',
}

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

// Form types
export interface FormField<T = any> {
  name: string;
  label: string;
  type: FormFieldType;
  value: T;
  required?: boolean;
  validation?: ValidationRule<T>[];
  error?: string;
}

export enum FormFieldType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
}

export interface ValidationRule<T = any> {
  validate: (value: T) => boolean | string;
  message: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<any>;
  children?: NavigationItem[];
  isActive?: boolean;
  badge?: string | number;
}

// Theme types
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
}

// Feature flag types
export interface FeatureFlag {
  key: string;
  isEnabled: boolean;
  description: string;
  conditions?: FeatureFlagCondition[];
}

export interface FeatureFlagCondition {
  type: 'user_role' | 'environment' | 'custom';
  value: string | boolean;
}

// Event types
export interface AnalyticsEvent {
  name: string;
  properties: Record<string, any>;
  timestamp: Date;
  userId?: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Callback types
export type AsyncCallback<T = void> = () => Promise<T>;
export type AsyncCallbackWithParam<P, T = void> = (param: P) => Promise<T>;
export type SyncCallback<T = void> = () => T;
export type SyncCallbackWithParam<P, T = void> = (param: P) => T;

// Search and filter types
export interface SearchParams {
  query?: string;
  filters?: Record<string, any>;
  sort?: SortOption;
  page?: number;
  limit?: number;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

// Notification types
export interface Notification extends BaseEntity {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  actionUrl?: string;
}

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}
