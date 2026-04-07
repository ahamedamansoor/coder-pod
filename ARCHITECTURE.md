# Coder POD - Clean Architecture Guide

## 🏗️ Current Structure Analysis

```
src/
├── ai/                    # AI-related logic
├── app/                   # Next.js app router pages
├── components/            # UI components (large: 1474 items)
├── contexts/              # React contexts
├── data/                  # Static data and language content
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── services/              # Business logic services
└── types/                 # TypeScript type definitions
```

## 🎯 Proposed Clean Architecture

### 1. **Feature-Based Directory Structure**

```
src/
├── app/                           # Next.js App Router
│   ├── (auth)/                   # Auth routes group
│   ├── (dashboard)/              # Dashboard routes group
│   ├── learning-paths/           # Learning paths page
│   └── languages/                # Language-specific routes
│       ├── javascript/
│       ├── react/
│       └── ...
├── features/                     # Feature modules (NEW)
│   ├── auth/                     # Authentication feature
│   │   ├── components/           # Auth-specific components
│   │   ├── hooks/               # Auth hooks
│   │   ├── services/            # Auth services
│   │   ├── types/               # Auth types
│   │   └── index.ts             # Public API
│   ├── learning/                 # Learning feature
│   │   ├── components/           # Learning components
│   │   ├── hooks/               # Learning hooks
│   │   ├── services/            # Learning services
│   │   ├── types/               # Learning types
│   │   └── index.ts
│   ├── progress/                 # Progress tracking feature
│   └── collaborative/            # Collaborative features
├── shared/                       # Shared utilities (REFACTORED)
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # Base UI components (shadcn)
│   │   ├── forms/               # Form components
│   │   ├── layout/              # Layout components
│   │   └── charts/              # Chart components
│   ├── hooks/                   # Shared hooks
│   ├── lib/                     # Pure utilities
│   ├── types/                   # Shared types
│   └── constants/               # App constants
├── infrastructure/              # External integrations (NEW)
│   ├── database/               # Database setup
│   ├── auth/                   # Auth providers
│   ├── storage/                # File storage
│   └── api/                    # API clients
└── config/                      # App configuration
    ├── env.ts                  # Environment variables
    ├── constants.ts            # App constants
    └── feature-flags.ts        # Feature flags
```

### 2. **Layer Architecture Principles**

#### **Domain Layer** (Pure Business Logic)
```typescript
// features/learning/domain/
├── entities/           # Core business entities
├── repositories/       # Repository interfaces
├── services/          # Domain services
└── types/            # Domain types
```

#### **Application Layer** (Use Cases)
```typescript
// features/learning/application/
├── use-cases/         # Use case implementations
├── dto/              # Data transfer objects
└── interfaces/       # Application interfaces
```

#### **Infrastructure Layer** (External Dependencies)
```typescript
// infrastructure/
├── repositories/     # Repository implementations
├── external/        # External API clients
└── persistence/     # Database implementations
```

#### **Presentation Layer** (UI Components)
```typescript
// features/learning/presentation/
├── components/      # React components
├── hooks/          # React hooks
└── pages/          # Page components
```

## 🔧 Implementation Strategy

### Phase 1: Core Structure Setup

1. **Create Feature Directories**
```bash
mkdir -p src/features/{auth,learning,progress,collaborative}
mkdir -p src/shared/{components,lib,hooks,types,constants}
mkdir -p src/infrastructure/{database,auth,storage,api}
```

2. **Feature Module Template**
```typescript
// features/auth/index.ts
export * from './components';
export * from './hooks';
export * from './services';
export * from './types';

// features/auth/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
```

### Phase 2: Component Isolation

#### **Component Structure**
```typescript
// features/auth/components/sign-in-form/
├── index.ts              # Export barrel
├── sign-in-form.tsx      # Main component
├── sign-in-form.test.tsx # Tests
├── sign-in-form.stories.tsx # Stories
└── types.ts             # Component-specific types
```

#### **Component Template**
```typescript
// features/auth/components/sign-in-form/sign-in-form.tsx
import { useState } from 'react';
import { useSignIn } from '../../hooks';
import { SignInFormData } from '../types';

interface SignInFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function SignInForm({ onSuccess, onError }: SignInFormProps) {
  const { signIn, isLoading } = useSignIn();
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData);
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form JSX */}
    </form>
  );
}
```

### Phase 3: Service Layer Architecture

#### **Repository Pattern**
```typescript
// features/learning/domain/repositories/progress.repository.ts
export interface ProgressRepository {
  getProgress(userId: string): Promise<UserProgress>;
  updateProgress(userId: string, progress: Partial<UserProgress>): Promise<void>;
  getCompletedTopics(userId: string): Promise<string[]>;
}

// infrastructure/repositories/supabase-progress.repository.ts
export class SupabaseProgressRepository implements ProgressRepository {
  async getProgress(userId: string): Promise<UserProgress> {
    // Implementation
  }
  
  async updateProgress(userId: string, progress: Partial<UserProgress>): Promise<void> {
    // Implementation
  }
}
```

#### **Service Layer**
```typescript
// features/learning/application/services/progress.service.ts
export class ProgressService {
  constructor(
    private progressRepository: ProgressRepository,
    private notificationService: NotificationService
  ) {}

  async completeTopic(userId: string, topicSlug: string): Promise<void> {
    const progress = await this.progressRepository.getProgress(userId);
    progress.completedTopics.add(topicSlug);
    
    await this.progressRepository.updateProgress(userId, {
      completedTopics: progress.completedTopics,
      lastUpdated: new Date(),
    });

    await this.notificationService.celebrateCompletion(userId, topicSlug);
  }
}
```

### Phase 4: Dependency Injection

#### **Service Container**
```typescript
// shared/container/index.ts
import { container } from 'tsyringe';
import { ProgressService } from '../features/learning/application/services';
import { SupabaseProgressRepository } from '../infrastructure/repositories';

container.registerSingleton('ProgressRepository', SupabaseProgressRepository);
container.registerSingleton(ProgressService, ProgressService);

export { container };
```

#### **Hook with DI**
```typescript
// features/learning/hooks/use-progress.service.ts
import { container } from '../../../shared/container';
import { ProgressService } from '../application/services';

export function useProgressService(): ProgressService {
  return container.resolve(ProgressService);
}
```

## 📁 File Naming Conventions

### **Components**
- **Folder:** kebab-case (`sign-in-form`)
- **Component:** PascalCase (`SignInForm`)
- **Test:** `sign-in-form.test.tsx`
- **Stories:** `sign-in-form.stories.tsx`

### **Services**
- **Service:** PascalCase + Service suffix (`ProgressService`)
- **Repository:** PascalCase + Repository suffix (`ProgressRepository`)
- **Hook:** camelCase with use prefix (`useProgress`)

### **Types**
- **Interface:** PascalCase (`UserProgress`)
- **Type:** PascalCase (`AuthState`)
- **Enum:** PascalCase (`Role`)

## 🎯 Benefits of This Architecture

### **1. Isolation**
- Each feature is self-contained
- Minimal cross-feature dependencies
- Easy to test individual features

### **2. Scalability**
- New features can be added without affecting existing code
- Clear separation of concerns
- Easy to maintain and refactor

### **3. Testability**
- Pure business logic can be tested in isolation
- Mock implementations for external dependencies
- Clear test structure

### **4. Developer Experience**
- Clear file organization
- Easy to find related code
- Consistent patterns across features

## 🚀 Migration Plan

### **Week 1: Foundation**
- [ ] Create new directory structure
- [ ] Set up dependency injection container
- [ ] Create feature module templates

### **Week 2: Auth Feature**
- [ ] Migrate auth components to new structure
- [ ] Implement auth service layer
- [ ] Update auth hooks

### **Week 3: Learning Feature**
- [ ] Migrate learning components
- [ ] Implement progress tracking service
- [ ] Update learning hooks

### **Week 4: Remaining Features**
- [ ] Migrate collaborative features
- [ ] Update shared components
- [ ] Clean up old structure

### **Week 5: Testing & Documentation**
- [ ] Add comprehensive tests
- [ ] Update documentation
- [ ] Performance optimization

## 📋 Code Quality Standards

### **ESLint Rules for Architecture**
```json
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "import/order": ["error", {
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index"
      ]
    }]
  }
}
```

### **Component Standards**
- Always export components from `index.ts`
- Include TypeScript interfaces for props
- Add JSDoc comments for complex logic
- Include test files with >80% coverage

### **Service Standards**
- Use dependency injection
- Implement error handling
- Include logging for debugging
- Write unit tests for business logic

This architecture provides a solid foundation for scaling Coder POD while maintaining clean, isolated, and maintainable code.
