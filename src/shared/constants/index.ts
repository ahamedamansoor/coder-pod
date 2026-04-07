// Application constants used across the platform

// App metadata
export const APP_CONFIG = {
  name: 'Coder POD',
  description: 'YOUR LAUNCHPAD FOR LEARNING',
  version: '1.0.0',
  author: 'Coder POD Team',
  url: 'https://coderpod.dev',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    signIn: '/api/auth/signin',
    signUp: '/api/auth/signup',
    signOut: '/api/auth/signout',
    resetPassword: '/api/auth/reset-password',
    updateProfile: '/api/auth/profile',
  },
  learning: {
    progress: '/api/learning/progress',
    topics: '/api/learning/topics',
    languages: '/api/learning/languages',
    completion: '/api/learning/completion',
  },
  user: {
    profile: '/api/user/profile',
    preferences: '/api/user/preferences',
    stats: '/api/user/stats',
  },
  collaborative: {
    rooms: '/api/collaborative/rooms',
    sessions: '/api/collaborative/sessions',
    participants: '/api/collaborative/participants',
  },
} as const;

// Database table names
export const DB_TABLES = {
  users: 'users',
  user_profiles: 'user_profiles',
  learning_progress: 'learning_progress',
  topics: 'topics',
  languages: 'languages',
  collaborative_rooms: 'collaborative_rooms',
  collaborative_sessions: 'collaborative_sessions',
  notifications: 'notifications',
  user_preferences: 'user_preferences',
} as const;

// Storage keys
export const STORAGE_KEYS = {
  auth: 'coderpod_auth',
  user: 'coderpod_user',
  preferences: 'coderpod_preferences',
  theme: 'coderpod_theme',
  language: 'coderpod_language',
  progress: 'coderpod_progress',
  lastVisited: 'coderpod_last_visited',
} as const;

// Theme configuration
export const THEME_CONFIG = {
  defaultMode: 'system',
  colors: {
    primary: '#5B7FFF',
    secondary: '#64748b',
    accent: '#f97316',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Learning configuration
export const LEARNING_CONFIG = {
  maxTopicsPerDay: 10,
  defaultSessionDuration: 30, // minutes
  streakResetHours: 24,
  celebrationThreshold: 5, // topics completed for celebration
  reviewIntervalDays: 7,
  maxRetries: 3,
  timeBetweenRetries: 300, // seconds
} as const;

// Progress tracking
export const PROGRESS_THRESHOLDS = {
  beginner: 0.2,
  intermediate: 0.5,
  advanced: 0.8,
  expert: 0.95,
} as const;

// Difficulty levels
export const DIFFICULTY_CONFIG = {
  beginner: {
    color: '#10b981',
    label: 'Beginner',
    description: 'Great for getting started',
  },
  intermediate: {
    color: '#f59e0b',
    label: 'Intermediate',
    description: 'Building on fundamentals',
  },
  advanced: {
    color: '#f97316',
    label: 'Advanced',
    description: 'Complex concepts',
  },
  expert: {
    color: '#ef4444',
    label: 'Expert',
    description: 'Mastery level',
  },
} as const;

// Language categories
export const LANGUAGE_CATEGORIES = {
  frontend: {
    label: 'Frontend',
    description: 'Client-side development',
    color: '#3b82f6',
  },
  backend: {
    label: 'Backend',
    description: 'Server-side development',
    color: '#10b981',
  },
  mobile: {
    label: 'Mobile',
    description: 'Mobile app development',
    color: '#8b5cf6',
  },
  devops: {
    label: 'DevOps',
    description: 'Deployment and operations',
    color: '#f59e0b',
  },
  database: {
    label: 'Database',
    description: 'Data management',
    color: '#ef4444',
  },
  testing: {
    label: 'Testing',
    description: 'Quality assurance',
    color: '#06b6d4',
  },
  design: {
    label: 'Design',
    description: 'UI/UX design',
    color: '#ec4899',
  },
} as const;

// User roles and permissions
export const USER_ROLES = {
  student: {
    label: 'Student',
    permissions: ['view_content', 'track_progress', 'participate_collaborative'],
  },
  instructor: {
    label: 'Instructor',
    permissions: ['view_content', 'track_progress', 'participate_collaborative', 'create_content', 'moderate_discussions'],
  },
  admin: {
    label: 'Admin',
    permissions: ['*'], // All permissions
  },
} as const;

// Validation rules
export const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minLength: 5,
    maxLength: 255,
  },
  password: {
    required: true,
    minLength: 8,
    maxLength: 128,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
  },
  username: {
    required: true,
    minLength: 3,
    maxLength: 30,
    pattern: /^[a-zA-Z0-9_]+$/,
  },
} as const;

// Pagination
export const PAGINATION_CONFIG = {
  defaultPageSize: 10,
  maxPageSize: 100,
  pageSizeOptions: [5, 10, 20, 50, 100],
} as const;

// File upload limits
export const FILE_UPLOAD_CONFIG = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  allowedDocumentTypes: ['application/pdf', 'text/plain'],
  maxImageDimensions: {
    width: 2048,
    height: 2048,
  },
} as const;

// Collaborative features
export const COLLABORATIVE_CONFIG = {
  maxRoomParticipants: 10,
  sessionTimeout: 60 * 60 * 1000, // 1 hour
  heartbeatInterval: 30 * 1000, // 30 seconds
  maxCodeLength: 10000, // characters
  supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'typescript'],
} as const;

// Notification settings
export const NOTIFICATION_CONFIG = {
  types: {
    info: { duration: 5000, persistent: false },
    success: { duration: 3000, persistent: false },
    warning: { duration: 7000, persistent: true },
    error: { duration: 10000, persistent: true },
  },
  maxVisible: 5,
  queueSize: 20,
} as const;

// Analytics and tracking
export const ANALYTICS_CONFIG = {
  events: {
    page_view: 'page_view',
    topic_completed: 'topic_completed',
    language_started: 'language_started',
    user_registered: 'user_registered',
    user_login: 'user_login',
    collaborative_session_started: 'collaborative_session_started',
  },
  batchSize: 10,
  flushInterval: 30000, // 30 seconds
} as const;

// Error codes
export const ERROR_CODES = {
  // Auth errors
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  INSUFFICIENT_PERMISSIONS: 'INSUFFICIENT_PERMISSIONS',
  
  // Learning errors
  TOPIC_NOT_FOUND: 'TOPIC_NOT_FOUND',
  PROGRESS_NOT_FOUND: 'PROGRESS_NOT_FOUND',
  INVALID_LANGUAGE: 'INVALID_LANGUAGE',
  
  // Collaborative errors
  ROOM_NOT_FOUND: 'ROOM_NOT_FOUND',
  ROOM_FULL: 'ROOM_FULL',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  
  // General errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
} as const;

// Environment-specific configurations
export const ENV_CONFIG = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    enableDebugMode: true,
    enableMockData: true,
    logLevel: 'debug',
  },
  production: {
    apiUrl: 'https://api.coderpod.dev',
    enableDebugMode: false,
    enableMockData: false,
    logLevel: 'error',
  },
  test: {
    apiUrl: 'http://localhost:3001/api',
    enableDebugMode: true,
    enableMockData: true,
    logLevel: 'silent',
  },
} as const;

// Feature flags default values
export const DEFAULT_FEATURE_FLAGS = {
  collaborativeMode: false,
  aiAssistance: true,
  progressTracking: true,
  notifications: true,
  darkMode: true,
  offlineMode: false,
  analytics: true,
  betaFeatures: false,
} as const;
