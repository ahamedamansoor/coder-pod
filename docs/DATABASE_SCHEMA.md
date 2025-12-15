# Database Schema Documentation

## Overview
Coder Pod uses **Firebase Firestore** as its primary database. This document outlines the database structure and collections.

## Collections

### `users/{userId}`
Stores user profile and account information.

**Document ID:** Firebase Auth UID

**Fields:**
```typescript
{
  id: string;                          // User's Firebase Auth UID
  email: string | null;                // User's email address
  name: string | null;                 // User's display name
  phoneNumber: string | null;          // User's phone number
  dob: Date | null;                    // Date of birth
  photoURL: string | null;             // Profile photo URL
  createdAt: Timestamp;                // Account creation timestamp
  lastLoginAt: Timestamp;              // Last login timestamp
  completedTopics: {                   // Map of completed topics
    [topicId: string]: boolean;
  };
  plan: 'free' | 'pro' | 'enterprise'; // User's subscription plan
  tokenBalance: number;                // AI token balance (default: 10000)
  preferences?: {                      // User preferences (optional)
    theme?: 'light' | 'dark' | 'auto';
    language?: string;
    emailNotifications?: boolean;
    pushNotifications?: boolean;
  };
  stats?: {                            // User statistics (optional)
    totalLessonsCompleted?: number;
    totalTimeSpent?: number;
    streakDays?: number;
    lastActiveDate?: Date;
    badges?: string[];
  };
}
```

**Indexes:**
- `email` (for email lookups)
- `createdAt` (for user analytics)
- `lastLoginAt` (for activity tracking)

**Security Rules:**
```javascript
match /users/{userId} {
  allow read: if request.auth != null && request.auth.uid == userId;
  allow write: if request.auth != null && request.auth.uid == userId;
}
```

---

## Authentication Flow

### Sign Up (Email/Password)
1. Create Firebase Auth account
2. Send email verification
3. User verifies email
4. On first verified login, create user document in Firestore

### Sign Up (Google)
1. Sign in with Google popup
2. Check if user document exists
3. If new user, create user document immediately
4. Redirect to dashboard

### Login
1. Authenticate with Firebase Auth
2. Check if user document exists in Firestore
3. If exists, update `lastLoginAt`
4. If doesn't exist, create user document
5. Redirect to dashboard

---

## Data Flow Diagram

```
┌─────────────────┐
│  Firebase Auth  │ ← Authentication
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   Auth Service  │ ← Backend service layer
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  User Service   │ ← Database operations
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│    Firestore    │ ← Database
│  users/{uid}    │
└─────────────────┘
```

---

## Service Layer

### UserService
Handles all user-related database operations:
- `getUserProfile(userId)` - Fetch user profile
- `userExists(userId)` - Check if user exists
- `createUserProfile(userId, data)` - Create new user
- `updateUserProfile(userId, data)` - Update user data
- `updateLastLogin(userId)` - Update last login time
- `syncUserFromAuth(firebaseUser)` - Sync from Firebase Auth
- `markTopicComplete(userId, topicId)` - Mark topic as done
- `updateTokenBalance(userId, amount)` - Update AI tokens

### AuthService
Handles authentication operations:
- `signInWithGoogle()` - Google OAuth login
- `signInWithEmail(email, password)` - Email/password login
- `signUpWithEmail(email, password, data)` - Email/password signup
- `signOut()` - User logout
- `getCurrentUser()` - Get current authenticated user

---

## Usage Examples

### Login Component
```typescript
import { ServiceFactory } from '@/services';
import { useAuth, useFirestore } from '@/firebase';

const auth = useAuth();
const firestore = useFirestore();

const authService = ServiceFactory.getAuthService(auth!, firestore!);

// Google sign-in
const { user, isNewUser } = await authService.signInWithGoogle();

// Email sign-in
const { user, isNewUser } = await authService.signInWithEmail(email, password);
```

### User Profile Update
```typescript
import { ServiceFactory } from '@/services';
import { useFirestore } from '@/firebase';

const firestore = useFirestore();
const userService = ServiceFactory.getUserService(firestore!);

// Update profile
await userService.updateUserProfile(userId, {
  name: 'John Doe',
  phoneNumber: '+1234567890',
});

// Mark topic complete
await userService.markTopicComplete(userId, 'javascript-basics');

// Update tokens
await userService.updateTokenBalance(userId, -100);
```

### Notes Management
```typescript
import { ServiceFactory } from '@/services';
import { useFirestore, useUser } from '@/firebase';

const firestore = useFirestore();
const { user } = useUser();
const notesService = ServiceFactory.getNotesService(firestore!);

// Get all user notes
const notes = await notesService.getUserNotes(user.uid);

// Create a new note
await notesService.createNote(user.uid, {
  title: 'React Hooks Tutorial',
  url: 'https://youtube.com/watch?v=xyz',
  type: 'video',
  videoId: 'xyz',
  language: 'react',
});

// Update a note
await notesService.updateNote(noteId, user.uid, {
  title: 'Updated Title',
});

// Delete a note
await notesService.deleteNote(noteId, user.uid);

// Filter by language
const reactNotes = await notesService.getNotesByLanguage(user.uid, 'react');

// Filter by type
const videos = await notesService.getNotesByType(user.uid, 'video');
```

---

## Collections

### `notes/{noteId}`
Stores user learning resources (videos, blogs, articles, documentation, links).

**Document ID:** Auto-generated

**Fields:**
```typescript
{
  id: string;                          // Note document ID
  userId: string;                      // Owner's Firebase Auth UID
  title: string;                       // Resource title
  url: string;                         // Resource URL
  type: 'video' | 'blog' | 'article' | 'documentation' | 'link';
  videoId?: string;                    // YouTube video ID (if type is video)
  language: string;                    // Programming language slug
  createdAt: Timestamp;                // Creation timestamp
  updatedAt: Timestamp;                // Last update timestamp
}
```

**Indexes:**
- `userId` (for user's notes queries)
- `userId + createdAt` (for sorted queries)
- `userId + language` (for filtering by language)
- `userId + type` (for filtering by type)

**Security Rules:**
```javascript
match /notes/{noteId} {
  allow read: if request.auth != null && request.auth.uid == resource.data.userId;
  allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
  allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
}
```

---

## Future Collections (Planned)

### `courses/{courseId}`
Store course metadata and structure.

### `user_progress/{userId}/courses/{courseId}`
Track user progress through courses.

### `study_sessions/{sessionId}`
Store user study sessions and analytics.

### `notifications/{notificationId}`
User notifications and alerts.

---

## Migration Notes

**Current Status:** ✅ Database already set up and working
- Firestore is connected and operational
- User authentication flow is functional
- User profiles are being created/updated

**What Changed:**
- Added organized service layer for better code structure
- Added TypeScript types for type safety
- Centralized all database operations
- Made code more maintainable and scalable
- **Migrated notes from localStorage to Firestore** - Notes now sync across devices!

**Migration Notes:**
- Notes page automatically migrates localStorage notes to Firebase on first load
- After successful migration, localStorage is cleared
- Users keep all their existing notes with no data loss
- Notes are now tied to user accounts and sync across devices

**No breaking changes** - existing functionality preserved!
