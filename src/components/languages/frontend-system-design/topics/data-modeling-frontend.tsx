'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, 
  Type, 
  Shield, 
  Box, 
  GitBranch, 
  Activity,
  Monitor,
  Tablet,
  Target,
  Info,
  Settings,
  AlertTriangle,
  CheckCircle,
  X,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Code snippet generator for different data modeling patterns and frameworks
const getCodeSnippet = (patternTitle: string, framework: string): string => {
  const snippets: Record<string, Record<string, string>> = {
    'TypeScript Interfaces': {
      react: `// React with TypeScript Interfaces
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProfile extends User {
  bio: string;
  website?: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
}

// React component using interfaces
const UserCard: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <div className="social-links">
        {user.socialLinks.map((link, index) => (
          <a key={index} href={link.url}>
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};`,
      angular: `// Angular with TypeScript Interfaces
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProfile extends User {
  bio: string;
  website?: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
}

// Angular component using interfaces
@Component({
  selector: 'app-user-card',
  template: \`
    <div class="user-card">
      <img [src]="user.avatar" [alt]="user.name" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.bio }}</p>
      <div class="social-links">
        <a 
          *ngFor="let link of user.socialLinks; trackBy: trackByIndex"
          [href]="link.url">
          {{ link.platform }}
        </a>
      </div>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user!: UserProfile;
  
  trackByIndex(index: number): number {
    return index;
  }
}`,
      vue: `// Vue with TypeScript Interfaces
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProfile extends User {
  bio: string;
  website?: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
}

// Vue component using interfaces
<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" />
    <h3>{{ user.name }}</h3>
    <p>{{ user.bio }}</p>
    <div class="social-links">
      <a 
        v-for="(link, index) in user.socialLinks" 
        :key="index"
        :href="link.url">
        {{ link.platform }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: UserProfile;
}

defineProps<Props>();
</script>`
    },
    'Zod Validation': {
      react: `// React with Zod Validation
import { z } from 'zod';

// Define schema with Zod
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  avatar: z.string().url().optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean(),
  }),
});

type User = z.infer<typeof UserSchema>;

// React form with Zod validation
const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<User>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedUser = UserSchema.parse(formData);
      console.log('Valid user:', validatedUser);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          fieldErrors[err.path.join('.')] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      {errors.name && <span className="error">{errors.name}</span>}
      
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
};`,
      angular: `// Angular with Zod Validation
import { z } from 'zod';

// Define schema with Zod
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  avatar: z.string().url().optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean(),
  }),
});

type User = z.infer<typeof UserSchema>;

// Angular reactive form with Zod validation
@Component({
  selector: 'app-user-form',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="handleSubmit()">
      <input formControlName="name" placeholder="Name" />
      <div *ngIf="errors.name" class="error">{{ errors.name }}</div>
      
      <input formControlName="email" placeholder="Email" />
      <div *ngIf="errors.email" class="error">{{ errors.email }}</div>
      
      <button type="submit" [disabled]="!userForm.valid">
        Submit
      </button>
    </form>
  \`
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  errors: Record<string, string> = {};

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.userForm.valueChanges.subscribe(() => {
      this.validateWithZod();
    });
  }

  validateWithZod() {
    try {
      UserSchema.parse(this.userForm.value);
      this.errors = {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.errors = {};
        error.errors.forEach(err => {
          this.errors[err.path.join('.')] = err.message;
        });
      }
    }
  }

  handleSubmit() {
    if (this.userForm.valid) {
      console.log('Valid user:', this.userForm.value);
    }
  }
}`,
      vue: `// Vue with Zod Validation
import { z } from 'zod';

// Define schema with Zod
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  avatar: z.string().url().optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean(),
  }),
});

type User = z.infer<typeof UserSchema>;

// Vue form with Zod validation
<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="formData.name"
      type="text"
      placeholder="Name"
    />
    <span v-if="errors.name" class="error">{{ errors.name }}</span>
    
    <input
      v-model="formData.email"
      type="email"
      placeholder="Email"
    />
    <span v-if="errors.email" class="error">{{ errors.email }}</span>
    
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const formData = reactive<Partial<User>>({});
const errors = ref<Record<string, string>>({});

const handleSubmit = () => {
  try {
    const validatedUser = UserSchema.parse(formData);
    console.log('Valid user:', validatedUser);
    errors.value = {};
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach(err => {
        fieldErrors[err.path.join('.')] = err.message;
      });
      errors.value = fieldErrors;
    }
  }
};
</script>`
    },
    'State Architecture': {
      react: `// React with Redux Toolkit for State Architecture
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Define user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
  },
});

export const { 
  setLoading, setUser, setUsers, addUser, updateUser, removeUser 
} = userSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// React hooks for state management
export const useUserState = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  const actions = {
    loadUsers: async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch('/api/users');
        const users = await response.json();
        dispatch(setUsers(users));
      } catch (error) {
        console.error('Failed to load users:', error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    createUser: async (userData) => {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        const newUser = await response.json();
        dispatch(addUser(newUser));
        return newUser;
      } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
      }
    },
    updateUser: async (userData) => {
      try {
        const response = await fetch(\`/api/users/\${userData.id}\`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        const updatedUser = await response.json();
        dispatch(updateUser(updatedUser));
        return updatedUser;
      } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
      }
    },
    deleteUser: async (userId) => {
      try {
        await fetch(\`/api/users/\${userId}\`, {
          method: 'DELETE',
        });
        dispatch(removeUser(userId));
      } catch (error) {
        console.error('Failed to delete user:', error);
        throw error;
      }
    },
  };

  return { ...userState, ...actions };
};

// Provider wrapper
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default userSlice.reducer;`,
      angular: `// Angular with NgRx for State Architecture
import { createReducer, on, Action, createAction, props } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{ user: Partial<User> }>()
);
export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ user: User }>()
);
export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: string }>()
);

// State interface
export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// Reducer
const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true, error: null })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(createUser, state => ({ ...state, loading: true, error: null })),
  on(createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(createUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

// Effects
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      mergeMap(({ user }) =>
        this.userService.createUser(user).pipe(
          map(createdUser => createUserSuccess({ user: createdUser })),
          catchError(error => of(createUserFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}`,
      vue: `// Vue with Pinia for State Architecture
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  // State
  const users = ref<User[]>([]);
  const currentUser = ref<User | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const userCount = computed(() => users.value.length);
  const activeUsers = computed(() => 
    users.value.filter(user => user.status === 'active')
  );
  const userById = computed(() => {
    return (userId: string) => users.value.find(user => user.id === userId);
  });

  // Actions
  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading;
  };

  const setError = (errorMessage: string | null) => {
    error.value = errorMessage;
  };

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      users.value = data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData: Partial<User>) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const newUser = await response.json();
      users.value.push(newUser);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(\`/api/users/\${userData.id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const updatedUser = await response.json();
      const index = users.value.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        users.value[index] = updatedUser;
      }
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: string) => {
    setLoading(true);
    setError(null);
    
    try {
      await fetch(\`/api/users/\${userId}\`, {
        method: 'DELETE',
      });
      users.value = users.value.filter(u => u.id !== userId);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    // State
    users: readonly(users),
    currentUser: readonly(currentUser),
    loading: readonly(loading),
    error: readonly(error),
    
    // Getters
    userCount,
    activeUsers,
    userById,
    
    // Actions
    loadUsers,
    createUser,
    updateUser,
    deleteUser,
    setLoading,
    setError,
  };
});`
    },
    'API Response Mapping': {
      react: `// React with API Response Mapping
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Type definitions
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// API response mapper
const mapApiResponse = <T>(response: ApiResponse<T>): T => {
  if (response.status >= 400) {
    throw new Error(response.message);
  }
  return response.data;
};

// API service
const apiService = {
  getUsers: async (page = 1, limit = 10): Promise<User[]> => {
    const response = await fetch(\`/api/users?page=\${page}&limit=\${limit}\`);
    const apiResponse: ApiResponse<User[]> = await response.json();
    return mapApiResponse(apiResponse);
  },
  
  getUser: async (id: string): Promise<User> => {
    const response = await fetch(\`/api/users/\${id}\`);
    const apiResponse: ApiResponse<User> = await response.json();
    return mapApiResponse(apiResponse);
  },
  
  createUser: async (userData: Partial<User>): Promise<User> => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const apiResponse: ApiResponse<User> = await response.json();
    return mapApiResponse(apiResponse);
  },
};

// React hook for users
export const useUsers = (page = 1, limit = 10) => {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['users', page, limit],
    queryFn: () => apiService.getUsers(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const createUserMutation = useMutation({
    mutationFn: apiService.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Failed to create user:', error);
    },
  });

  const createUser = async (userData: Partial<User>) => {
    return await createUserMutation.mutateAsync(userData);
  };

  return {
    users,
    isLoading,
    error,
    refetch,
    createUser,
    isCreatingUser: createUserMutation.isPending,
  };
};

// Component using the hook
const UserList: React.FC = () => {
  const { users, isLoading, error, createUser, isCreatingUser } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreateUser = async () => {
    try {
      await createUser({
        name: 'New User',
        email: 'newuser@example.com',
      });
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div>
      <button onClick={handleCreateUser} disabled={isCreatingUser}>
        {isCreatingUser ? 'Creating...' : 'Create User'}
      </button>
      
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};`,
      angular: `// Angular with API Response Mapping
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Type definitions
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// API response mapper
@Injectable({
  providedIn: 'root'
})
export class ApiMapperService {
  mapApiResponse<T>(response: ApiResponse<T>): T {
    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error?.message || \`Server error: \${error.status}\`;
    }
    
    return throwError(() => new Error(errorMessage));
  }
}

// API service
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(
    private http: HttpClient,
    private apiMapper: ApiMapperService
  ) {}

  getUsers(page = 1, limit = 10): Observable<User[]> {
    return this.http.get<ApiResponse<User[]>>(
      \`\${this.apiUrl}?page=\${page}&limit=\${limit}\`
    ).pipe(
      map(response => this.apiMapper.mapApiResponse(response)),
      catchError(error => this.apiMapper.handleError(error))
    );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<ApiResponse<User>>(\`\${this.apiUrl}/\${id}\`).pipe(
      map(response => this.apiMapper.mapApiResponse(response)),
      catchError(error => this.apiMapper.handleError(error))
    );
  }

  createUser(userData: Partial<User>): Observable<User> {
    return this.http.post<ApiResponse<User>>(this.apiUrl, userData).pipe(
      map(response => this.apiMapper.mapApiResponse(response)),
      catchError(error => this.apiMapper.handleError(error))
    );
  }

  updateUser(id: string, userData: Partial<User>): Observable<User> {
    return this.http.put<ApiResponse<User>>(\`\${this.apiUrl}/\${id}\`, userData).pipe(
      map(response => this.apiMapper.mapApiResponse(response)),
      catchError(error => this.apiMapper.handleError(error))
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<ApiResponse<void>>(\`\${this.apiUrl}/\${id}\`).pipe(
      map(response => this.apiMapper.mapApiResponse(response)),
      catchError(error => this.apiMapper.handleError(error))
    );
  }
}

// Component using the service
@Component({
  selector: 'app-user-list',
  template: \`
    <div>
      <button (click)="createUser()" [disabled]="isCreating">
        {{ isCreating ? 'Creating...' : 'Create User' }}
      </button>
      
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error">Error: {{ error }}</div>
      
      <ul *ngIf="!loading && !error">
        <li *ngFor="let user of users">
          {{ user.name }} ({{ user.email }})
        </li>
      </ul>
    </div>
  \`
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;
  isCreating = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;
    
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }

  createUser() {
    this.isCreating = true;
    
    this.userService.createUser({
      name: 'New User',
      email: 'newuser@example.com',
    }).subscribe({
      next: () => {
        this.isCreating = false;
        this.loadUsers(); // Refresh the list
      },
      error: (error) => {
        this.error = error.message;
        this.isCreating = false;
      },
    });
  }
}`,
      vue: `// Vue with API Response Mapping
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Type definitions
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// API response mapper
class ApiMapper {
  static mapApiResponse<T>(response: ApiResponse<T>): T {
    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  }

  static handleError(error: any): never {
    const errorMessage = error.message || 'An error occurred';
    throw new Error(errorMessage);
  }
}

// API service
class ApiService {
  static async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const apiResponse: ApiResponse<T> = await response.json();
    return ApiMapper.mapApiResponse(apiResponse);
  }

  static async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const apiResponse: ApiResponse<T> = await response.json();
    return ApiMapper.mapApiResponse(apiResponse);
  }

  static async put<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const apiResponse: ApiResponse<T> = await response.json();
    return ApiMapper.mapApiResponse(apiResponse);
  }

  static async delete(url: string): Promise<void> {
    const response = await fetch(url, { method: 'DELETE' });
    const apiResponse: ApiResponse<void> = await response.json();
    return ApiMapper.mapApiResponse(apiResponse);
  }
}

// Pinia store for users
export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadUsers = async (page = 1, limit = 10) => {
    loading.value = true;
    error.value = null;
    
    try {
      const userList = await ApiService.get<User[]>(
        \`/api/users?page=\${page}&limit=\${limit}\`
      );
      users.value = userList;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const createUser = async (userData: Partial<User>) => {
    try {
      const newUser = await ApiService.post<User>('/api/users', userData);
      users.value.push(newUser);
      return newUser;
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      const updatedUser = await ApiService.put<User>(
        \`/api/users/\${userData.id}\`,
        userData
      );
      const index = users.value.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        users.value[index] = updatedUser;
      }
      return updatedUser;
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      await ApiService.delete(\`/api/users/\${userId}\`);
      users.value = users.value.filter(u => u.id !== userId);
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    loadUsers,
    createUser,
    updateUser,
    deleteUser,
  };
});

// Vue component using the store
<template>
  <div>
    <button @click="handleCreateUser" :disabled="isCreating">
      {{ isCreating ? 'Creating...' : 'Create User' }}
    </button>
    
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    
    <ul v-if="!loading && !error">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const isCreating = ref(false);

const { users, loading, error } = userStore;

const handleCreateUser = async () => {
  isCreating.value = true;
  try {
    await userStore.createUser({
      name: 'New User',
      email: 'newuser@example.com',
    });
  } catch (error) {
    console.error('Failed to create user:', error);
  } finally {
    isCreating.value = false;
  }
};

// Load users on component mount
userStore.loadUsers();
</script>`
    },
    'Data Caching': {
      react: `// React with Data Caching Strategies
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

// Cache configuration
const cacheConfig = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
  refetchOnWindowFocus: false,
  refetchOnReconnect: true,
  retry: 3,
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
};

// Enhanced API service with caching
class CachedApiService {
  private queryClient: any;

  constructor(queryClient: any) {
    this.queryClient = queryClient;
  }

  // Cache-aware data fetching
  async getUsers(page = 1, limit = 10, forceRefresh = false) {
    const queryKey = ['users', page, limit];
    
    if (forceRefresh) {
      await this.queryClient.invalidateQueries({ queryKey });
    }
    
    return this.queryClient.fetchQuery({
      queryKey,
      queryFn: () => this.fetchUsers(page, limit),
      ...cacheConfig,
    });
  }

  // Optimistic updates
  async createUser(userData: Partial<User>) {
    const queryKey = ['users'];
    
    // Cancel any outgoing refetches
    await this.queryClient.cancelQueries({ queryKey });
    
    // Snapshot the previous value
    const previousUsers = this.queryClient.getQueryData(queryKey);
    
    // Optimistically update to the new value
    this.queryClient.setQueryData(queryKey, (old: User[]) => [
      ...(old || []),
      { ...userData, id: 'temp-id', createdAt: new Date().toISOString() },
    ]);
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const newUser = await response.json();
      
      // Replace the optimistic update with the real data
      this.queryClient.setQueryData(queryKey, (old: User[]) => 
        old.map(u => u.id === 'temp-id' ? newUser : u)
      );
      
      return newUser;
    } catch (error) {
      // Rollback on error
      this.queryClient.setQueryData(queryKey, previousUsers);
      throw error;
    }
  }

  // Prefetching data
  prefetchUser(id: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['user', id],
      queryFn: () => this.fetchUser(id),
      ...cacheConfig,
    });
  }

  private async fetchUsers(page: number, limit: number): Promise<User[]> {
    const response = await fetch(\`/api/users?page=\${page}&limit=\${limit}\`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  }

  private async fetchUser(id: string): Promise<User> {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  }
}

// React hook with enhanced caching
export const useCachedUsers = () => {
  const queryClient = useQueryClient();
  const [apiService] = useState(() => new CachedApiService(queryClient));

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => apiService.getUsers(),
    ...cacheConfig,
  });

  const createUserMutation = useMutation({
    mutationFn: apiService.createUser.bind(apiService),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Failed to create user:', error);
    },
  });

  return {
    users,
    isLoading,
    error,
    refetch,
    createUser: createUserMutation.mutateAsync,
    isCreatingUser: createUserMutation.isPending,
    prefetchUser: apiService.prefetchUser.bind(apiService),
  };
};

// Component with caching features
const UserListWithCache: React.FC = () => {
  const { 
    users, 
    isLoading, 
    error, 
    createUser, 
    isCreatingUser, 
    prefetchUser 
  } = useCachedUsers();

  const handleCreateUser = async () => {
    try {
      await createUser({
        name: 'New User',
        email: 'newuser@example.com',
      });
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  const handleMouseOverUser = (userId: string) => {
    // Prefetch user details on hover
    prefetchUser(userId);
  };

  return (
    <div>
      <div className="actions">
        <button onClick={handleCreateUser} disabled={isCreatingUser}>
          {isCreatingUser ? 'Creating...' : 'Create User'}
        </button>
        
        <button onClick={() => window.location.reload()}>
          Force Refresh
        </button>
      </div>
      
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      
      <ul>
        {users?.map(user => (
          <li 
            key={user.id}
            onMouseEnter={() => handleMouseOverUser(user.id)}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};`,
      angular: `// Angular with Data Caching Strategies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { shareReplay, tap, catchError, map, switchMap } from 'rxjs/operators';

// Cache configuration
interface CacheConfig {
  ttl: number; // Time to live in milliseconds
  maxSize: number; // Maximum number of cached items
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private defaultTtl = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: any, ttl?: number): void {
    const timestamp = Date.now();
    const cacheTtl = ttl || this.defaultTtl;
    this.cache.set(key, { data, timestamp, ttl: cacheTtl });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  // Clean up expired cache items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Enhanced API service with caching
@Injectable({
  providedIn: 'root'
})
export class CachedUserService {
  private cacheKeys = {
    users: (page: number, limit: number) => \`users_\${page}_\${limit}\`,
    user: (id: string) => \`user_\${id}\`,
  };

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) {
    // Clean up cache every minute
    timer(60000).subscribe(() => this.cacheService.cleanup());
  }

  getUsers(page = 1, limit = 10, forceRefresh = false): Observable<User[]> {
    const cacheKey = this.cacheKeys.users(page, limit);
    
    if (!forceRefresh) {
      const cachedData = this.cacheService.get(cacheKey);
      if (cachedData) {
        return new Observable(observer => {
          observer.next(cachedData);
          observer.complete();
        });
      }
    }

    return this.http.get<User[]>(\`/api/users?page=\${page}&limit=\${limit}\`).pipe(
      tap(data => this.cacheService.set(cacheKey, data, 5 * 60 * 1000)), // 5 minutes cache
      shareReplay(1), // Share the result among multiple subscribers
      catchError(error => {
        console.error('Failed to fetch users:', error);
        throw error;
      })
    );
  }

  getUser(id: string, forceRefresh = false): Observable<User> {
    const cacheKey = this.cacheKeys.user(id);
    
    if (!forceRefresh) {
      const cachedData = this.cacheService.get(cacheKey);
      if (cachedData) {
        return new Observable(observer => {
          observer.next(cachedData);
          observer.complete();
        });
      }
    }

    return this.http.get<User>(\`/api/users/\${id}\`).pipe(
      tap(data => this.cacheService.set(cacheKey, data, 10 * 60 * 1000)), // 10 minutes cache
      shareReplay(1),
      catchError(error => {
        console.error('Failed to fetch user:', error);
        throw error;
      })
    );
  }

  createUser(userData: Partial<User>): Observable<User> {
    return this.http.post<User>('/api/users', userData).pipe(
      tap(newUser => {
        // Invalidate users cache
        this.cacheService.delete(this.cacheKeys.users(1, 10));
        // Cache the new user
        this.cacheService.set(this.cacheKeys.user(newUser.id), newUser);
      }),
      catchError(error => {
        console.error('Failed to create user:', error);
        throw error;
      })
    );
  }

  updateUser(id: string, userData: Partial<User>): Observable<User> {
    return this.http.put<User>(\`/api/users/\${id}\`, userData).pipe(
      tap(updatedUser => {
        // Update user cache
        this.cacheService.set(this.cacheKeys.user(id), updatedUser);
        // Invalidate users list cache
        this.cacheService.delete(this.cacheKeys.users(1, 10));
      }),
      catchError(error => {
        console.error('Failed to update user:', error);
        throw error;
      })
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(\`/api/users/\${id}\`).pipe(
      tap(() => {
        // Remove from cache
        this.cacheService.delete(this.cacheKeys.user(id));
        // Invalidate users list cache
        this.cacheService.delete(this.cacheKeys.users(1, 10));
      }),
      catchError(error => {
        console.error('Failed to delete user:', error);
        throw error;
      })
    );
  }

  // Prefetch data
  prefetchUser(id: string): void {
    this.getUser(id).subscribe({
      error: (error) => console.log('Prefetch failed:', error)
    });
  }

  // Clear all cache
  clearCache(): void {
    this.cacheService.clear();
  }
}

// Component using cached service
@Component({
  selector: 'app-cached-user-list',
  template: \`
    <div>
      <div class="actions">
        <button (click)="createUser()" [disabled]="isCreating">
          {{ isCreating ? 'Creating...' : 'Create User' }}
        </button>
        
        <button (click)="refreshUsers()">Force Refresh</button>
        <button (click)="clearCache()">Clear Cache</button>
      </div>
      
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error">Error: {{ error }}</div>
      
      <ul *ngIf="!loading && !error">
        <li 
          *ngFor="let user of users" 
          (mouseenter)="prefetchUser(user.id)"
        >
          {{ user.name }} ({{ user.email }})
        </li>
      </ul>
    </div>
  \`
})
export class CachedUserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;
  isCreating = false;

  constructor(private userService: CachedUserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;
    
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }

  refreshUsers() {
    this.userService.getUsers(1, 10, true).subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }

  createUser() {
    this.isCreating = true;
    
    this.userService.createUser({
      name: 'New User',
      email: 'newuser@example.com',
    }).subscribe({
      next: () => {
        this.isCreating = false;
        this.loadUsers();
      },
      error: (error) => {
        this.error = error.message;
        this.isCreating = false;
      },
    });
  }

  prefetchUser(userId: string) {
    this.userService.prefetchUser(userId);
  }

  clearCache() {
    this.userService.clearCache();
    this.loadUsers();
  }
}`,
      vue: `// Vue with Data Caching Strategies
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Cache service
class CacheService {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private defaultTtl = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: any, ttl?: number): void {
    const timestamp = Date.now();
    const cacheTtl = ttl || this.defaultTtl;
    this.cache.set(key, { data, timestamp, ttl: cacheTtl });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Enhanced API service with caching
class CachedApiService {
  private cacheService = new CacheService();
  private cacheKeys = {
    users: (page: number, limit: number) => \`users_\${page}_\${limit}\`,
    user: (id: string) => \`user_\${id}\`,
  };

  constructor() {
    // Clean up cache every minute
    setInterval(() => this.cacheService.cleanup(), 60000);
  }

  async getUsers(page = 1, limit = 10, forceRefresh = false): Promise<User[]> {
    const cacheKey = this.cacheKeys.users(page, limit);
    
    if (!forceRefresh) {
      const cachedData = this.cacheService.get(cacheKey);
      if (cachedData) {
        return cachedData;
      }
    }

    try {
      const response = await fetch(\`/api/users?page=\${page}&limit=\${limit}\`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      
      // Cache for 5 minutes
      this.cacheService.set(cacheKey, data, 5 * 60 * 1000);
      return data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  }

  async getUser(id: string, forceRefresh = false): Promise<User> {
    const cacheKey = this.cacheKeys.user(id);
    
    if (!forceRefresh) {
      const cachedData = this.cacheService.get(cacheKey);
      if (cachedData) {
        return cachedData;
      }
    }

    try {
      const response = await fetch(\`/api/users/\${id}\`);
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      
      // Cache for 10 minutes
      this.cacheService.set(cacheKey, data, 10 * 60 * 1000);
      return data;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error;
    }
  }

  async createUser(userData: Partial<User>): Promise<User> {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to create user');
      const newUser = await response.json();
      
      // Invalidate users cache
      this.cacheService.delete(this.cacheKeys.users(1, 10));
      // Cache the new user
      this.cacheService.set(this.cacheKeys.user(newUser.id), newUser);
      
      return newUser;
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    try {
      const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to update user');
      const updatedUser = await response.json();
      
      // Update user cache
      this.cacheService.set(this.cacheKeys.user(id), updatedUser);
      // Invalidate users list cache
      this.cacheService.delete(this.cacheKeys.users(1, 10));
      
      return updatedUser;
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      const response = await fetch(\`/api/users/\${id}\`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
      
      // Remove from cache
      this.cacheService.delete(this.cacheKeys.user(id));
      // Invalidate users list cache
      this.cacheService.delete(this.cacheKeys.users(1, 10));
    } catch (error) {
      console.error('Failed to delete user:', error);
      throw error;
    }
  }

  // Prefetch data
  async prefetchUser(id: string): Promise<void> {
    try {
      await this.getUser(id);
    } catch (error) {
      console.log('Prefetch failed:', error);
    }
  }

  clearCache(): void {
    this.cacheService.clear();
  }
}

// Pinia store with caching
export const useCachedUserStore = defineStore('cachedUser', () => {
  const apiService = new CachedApiService();
  
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadUsers = async (page = 1, limit = 10, forceRefresh = false) => {
    loading.value = true;
    error.value = null;
    
    try {
      const userList = await apiService.getUsers(page, limit, forceRefresh);
      users.value = userList;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const createUser = async (userData: Partial<User>) => {
    try {
      const newUser = await apiService.createUser(userData);
      users.value.push(newUser);
      return newUser;
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      const updatedUser = await apiService.updateUser(userData.id!, userData);
      const index = users.value.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        users.value[index] = updatedUser;
      }
      return updatedUser;
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      await apiService.deleteUser(userId);
      users.value = users.value.filter(u => u.id !== userId);
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  const prefetchUser = async (userId: string) => {
    await apiService.prefetchUser(userId);
  };

  const clearCache = () => {
    apiService.clearCache();
    users.value = [];
  };

  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    loadUsers,
    createUser,
    updateUser,
    deleteUser,
    prefetchUser,
    clearCache,
  };
});

// Vue component with caching features
<template>
  <div>
    <div class="actions">
      <button @click="handleCreateUser" :disabled="isCreating">
        {{ isCreating ? 'Creating...' : 'Create User' }}
      </button>
      
      <button @click="refreshUsers">Force Refresh</button>
      <button @click="clearCache">Clear Cache</button>
    </div>
    
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    
    <ul v-if="!loading && !error">
      <li 
        v-for="user in users" 
        :key="user.id"
        @mouseenter="prefetchUser(user.id)"
      >
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCachedUserStore } from '@/stores/cachedUser';

const userStore = useCachedUserStore();
const isCreating = ref(false);

const { users, loading, error } = userStore;

const handleCreateUser = async () => {
  isCreating.value = true;
  try {
    await userStore.createUser({
      name: 'New User',
      email: 'newuser@example.com',
    });
  } catch (error) {
    console.error('Failed to create user:', error);
  } finally {
    isCreating.value = false;
  }
};

const refreshUsers = () => {
  userStore.loadUsers(1, 10, true);
};

const clearCache = () => {
  userStore.clearCache();
};

const prefetchUser = (userId: string) => {
  userStore.prefetchUser(userId);
};

// Load users on component mount
userStore.loadUsers();
</script>`
    },
    'Real-time Data Synchronization': {
      react: `// React with Real-time Data Synchronization
import { useState, useEffect, useCallback, useRef } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

// WebSocket Hook for Real-time Data
export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<any>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      
      ws.onopen = () => {
        console.log('WebSocket connected');
        setIsConnected(true);
        setSocket(ws);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          setLastMessage(data);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket disconnected');
        setIsConnected(false);
        setSocket(null);
        
        // Attempt to reconnect after 3 seconds
        reconnectTimeoutRef.current = setTimeout(() => {
          connect();
        }, 3000);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
    }
  }, [url]);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    if (socket) {
      socket.close();
    }
  }, [socket]);

  const sendMessage = useCallback((message: any) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify(message));
    }
  }, [socket, isConnected]);

  useEffect(() => {
    connect();
    return disconnect;
  }, [connect, disconnect]);

  return {
    socket,
    isConnected,
    lastMessage,
    sendMessage,
    disconnect,
  };
};

// Real-time Users Hook
export const useRealTimeUsers = () => {
  const queryClient = useQueryClient();
  const { lastMessage } = useWebSocket('ws://localhost:8080/users');

  // Initial data fetch
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Handle real-time updates
  useEffect(() => {
    if (!lastMessage) return;

    const { type, data } = lastMessage;

    switch (type) {
      case 'USER_CREATED':
        queryClient.setQueryData(['users'], (old: User[] = []) => [...old, data]);
        break;
      case 'USER_UPDATED':
        queryClient.setQueryData(['users'], (old: User[] = []) =>
          old.map(user => user.id === data.id ? data : user)
        );
        break;
      case 'USER_DELETED':
        queryClient.setQueryData(['users'], (old: User[] = []) =>
          old.filter(user => user.id !== data.id)
        );
        break;
      default:
        console.log('Unknown message type:', type);
    }
  }, [lastMessage, queryClient]);

  const createUser = async (userData: Partial<User>) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to create user');
      return await response.json();
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      const response = await fetch(\`/api/users/\${userData.id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to update user');
      return await response.json();
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      const response = await fetch(\`/api/users/\${userId}\`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
    } catch (error) {
      console.error('Failed to delete user:', error);
      throw error;
    }
  };

  return {
    users,
    isLoading,
    error,
    refetch,
    createUser,
    updateUser,
    deleteUser,
  };
};

// Real-time User List Component
const RealTimeUserList: React.FC = () => {
  const { 
    users, 
    isLoading, 
    error, 
    createUser, 
    updateUser, 
    deleteUser 
  } = useRealTimeUsers();

  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUserName || !newUserEmail) return;

    try {
      await createUser({
        name: newUserName,
        email: newUserEmail,
      });
      
      setNewUserName('');
      setNewUserEmail('');
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  const handleUpdateUser = async (userId: string, newName: string) => {
    try {
      await updateUser({
        id: userId,
        name: newName,
      });
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Real-time User List</h2>
      
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users?.map(user => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => handleUpdateUser(user.id, user.name + ' (updated)')}>
              Update
            </button>
            <button onClick={() => handleDeleteUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
      angular: `// Angular with Real-time Data Synchronization
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

// WebSocket service for real-time communication
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket | null = null;
  private messageSubject = new Subject<any>();
  private connectionStatusSubject = new BehaviorSubject<boolean>(false);
  
  public messages$ = this.messageSubject.asObservable();
  public connectionStatus$ = this.connectionStatusSubject.asObservable();

  connect(url: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      return;
    }

    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.connectionStatusSubject.next(true);
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.messageSubject.next(data);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
      this.connectionStatusSubject.next(false);
      
      // Attempt to reconnect after 3 seconds
      setTimeout(() => {
        this.connect(url);
      }, 3000);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  sendMessage(message: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  isConnected(): boolean {
    return this.socket?.readyState === WebSocket.OPEN;
  }
}

// Real-time user service
@Injectable({
  providedIn: 'root'
})
export class RealTimeUserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  private websocketUrl = 'ws://localhost:8080/users';

  public users$ = this.usersSubject.asObservable();

  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService
  ) {
    this.initializeRealTimeConnection();
  }

  private initializeRealTimeConnection(): void {
    // Connect to WebSocket
    this.webSocketService.connect(this.websocketUrl);

    // Listen for real-time updates
    this.webSocketService.messages$.subscribe(message => {
      this.handleRealTimeUpdate(message);
    });

    // Load initial data
    this.loadUsers();
  }

  private handleRealTimeUpdate(message: any): void {
    const { type, data } = message;
    let currentUsers = this.usersSubject.value;

    switch (type) {
      case 'USER_CREATED':
        currentUsers = [...currentUsers, data];
        break;
      case 'USER_UPDATED':
        currentUsers = currentUsers.map(user => 
          user.id === data.id ? data : user
        );
        break;
      case 'USER_DELETED':
        currentUsers = currentUsers.filter(user => user.id !== data.id);
        break;
      default:
        console.log('Unknown message type:', type);
        return;
    }

    this.usersSubject.next(currentUsers);
  }

  private loadUsers(): void {
    this.http.get<User[]>('/api/users').subscribe({
      next: (users) => {
        this.usersSubject.next(users);
      },
      error: (error) => {
        console.error('Failed to load users:', error);
      },
    });
  }

  createUser(userData: Partial<User>): Observable<User> {
    return this.http.post<User>('/api/users', userData).pipe(
      tap(() => {
        // The real-time update will handle the UI update
        console.log('User creation request sent');
      }),
      catchError(error => {
        console.error('Failed to create user:', error);
        throw error;
      })
    );
  }

  updateUser(userData: Partial<User>): Observable<User> {
    return this.http.put<User>(\`/api/users/\${userData.id}\`, userData).pipe(
      tap(() => {
        // The real-time update will handle the UI update
        console.log('User update request sent');
      }),
      catchError(error => {
        console.error('Failed to update user:', error);
        throw error;
      })
    );
  }

  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(\`/api/users/\${userId}\`).pipe(
      tap(() => {
        // The real-time update will handle the UI update
        console.log('User deletion request sent');
      }),
      catchError(error => {
        console.error('Failed to delete user:', error);
        throw error;
      })
    );
  }

  getConnectionStatus(): Observable<boolean> {
    return this.webSocketService.connectionStatus$;
  }

  disconnect(): void {
    this.webSocketService.disconnect();
  }
}

// Component using real-time service
@Component({
  selector: 'app-real-time-user-list',
  template: \`
    <div>
      <h2>Real-time User List</h2>
      
      <div class="connection-status">
        <span [class.connected]="isConnected" [class.disconnected]="!isConnected">
          {{ isConnected ? 'Connected' : 'Disconnected' }}
        </span>
      </div>

      <form (ngSubmit)="createUser()">
        <input 
          type="text" 
          placeholder="Name" 
          [(ngModel)]="newUserName" 
          name="name" 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          [(ngModel)]="newUserEmail" 
          name="email" 
          required 
        />
        <button type="submit" [disabled]="isCreating">
          {{ isCreating ? 'Creating...' : 'Add User' }}
        </button>
      </form>

      <div *ngIf="loading" class="loading">Loading users...</div>
      <div *ngIf="error" class="error">Error: {{ error }}</div>

      <ul *ngIf="!loading && !error">
        <li *ngFor="let user of users">
          <span>{{ user.name }} ({{ user.email }})</span>
          <button (click)="updateUser(user.id)">Update</button>
          <button (click)="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  \`,
  styles: [\`
    .connected { color: green; }
    .disconnected { color: red; }
    .loading { color: blue; }
    .error { color: red; }
  \`]
})
export class RealTimeUserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading = false;
  error: string | null = null;
  isCreating = false;
  isConnected = false;
  
  newUserName = '';
  newUserEmail = '';

  constructor(private realTimeUserService: RealTimeUserService) {}

  ngOnInit() {
    // Subscribe to users
    this.realTimeUserService.users$.subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });

    // Subscribe to connection status
    this.realTimeUserService.getConnectionStatus().subscribe({
      next: (status) => {
        this.isConnected = status;
      },
    });

    this.loading = true;
  }

  ngOnDestroy() {
    this.realTimeUserService.disconnect();
  }

  createUser() {
    if (!this.newUserName || !this.newUserEmail) return;

    this.isCreating = true;
    
    this.realTimeUserService.createUser({
      name: this.newUserName,
      email: this.newUserEmail,
    }).subscribe({
      next: () => {
        this.isCreating = false;
        this.newUserName = '';
        this.newUserEmail = '';
      },
      error: (error) => {
        this.error = error.message;
        this.isCreating = false;
      },
    });
  }

  updateUser(userId: string) {
    const user = this.users.find(u => u.id === userId);
    if (!user) return;

    this.realTimeUserService.updateUser({
      id: userId,
      name: user.name + ' (updated)',
    }).subscribe({
      error: (error) => {
        this.error = error.message;
      },
    });
  }

  deleteUser(userId: string) {
    this.realTimeUserService.deleteUser(userId).subscribe({
      error: (error) => {
        this.error = error.message;
      },
    });
  }
}`,
      vue: `// Vue with Real-time Data Synchronization
import { ref, readonly, onMounted, onUnmounted, watch } from 'vue';

// WebSocket Composable
export function useWebSocket(url: string) {
  const socket = ref<WebSocket | null>(null);
  const isConnected = ref(false);
  const lastMessage = ref<any>(null);
  const reconnectAttempts = ref(0);
  const maxReconnectAttempts = 5;
  const reconnectDelay = 3000;

  let reconnectTimeout: NodeJS.Timeout | null = null;

  const connect = () => {
    try {
      socket.value = new WebSocket(url);

      socket.value.onopen = () => {
        console.log('WebSocket connected');
        isConnected.value = true;
        reconnectAttempts.value = 0;
      };

      socket.value.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          lastMessage.value = data;
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };

      socket.value.onclose = () => {
        console.log('WebSocket disconnected');
        isConnected.value = false;
        socket.value = null;

        // Attempt to reconnect
        if (reconnectAttempts.value < maxReconnectAttempts) {
          reconnectTimeout = setTimeout(() => {
            reconnectAttempts.value++;
            connect();
          }, reconnectDelay);
        }
      };

      socket.value.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
    }
  };

  const disconnect = () => {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
    }
    if (socket.value) {
      socket.value.close();
    }
  };

  const sendMessage = (message: any) => {
    if (socket.value && isConnected.value) {
      socket.value.send(JSON.stringify(message));
    }
  };

  onMounted(() => {
    connect();
  });

  onUnmounted(() => {
    disconnect();
  });

  return {
    socket: readonly(socket),
    isConnected: readonly(isConnected),
    lastMessage: readonly(lastMessage),
    sendMessage,
    disconnect,
  };
}

// Real-time Users Composable
export function useRealTimeUsers() {
  const users = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const { lastMessage } = useWebSocket('ws://localhost:8080/users');

  // Load initial data
  const loadUsers = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      users.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  // Handle real-time updates
  const handleRealtimeUpdate = (message) => {
    const { type, data } = message;

    switch (type) {
      case 'USER_CREATED':
        users.value.push(data);
        break;
      case 'USER_UPDATED':
        const index = users.value.findIndex(user => user.id === data.id);
        if (index !== -1) {
          users.value[index] = data;
        }
        break;
      case 'USER_DELETED':
        users.value = users.value.filter(user => user.id !== data.id);
        break;
    }
  };

  // Watch for real-time messages
  watch(lastMessage, (newMessage) => {
    if (newMessage) {
      handleRealtimeUpdate(newMessage);
    }
  });

  // Load initial data
  onMounted(() => {
    loadUsers();
  });

  const createUser = async (userData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const newUser = await response.json();
      return newUser;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const updateUser = async (userData) => {
    try {
      const response = await fetch(\`/api/users/\${userData.id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const updatedUser = await response.json();
      return updatedUser;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(\`/api/users/\${userId}\`, {
        method: 'DELETE',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    createUser,
    updateUser,
    deleteUser,
  };
}

// Vue Component
<template>
  <div>
    <h2>Real-time User List</h2>
    
    <div class="connection-status">
      <span :class="{ connected: isConnected, disconnected: !isConnected }">
        {{ isConnected ? 'Connected' : 'Disconnected' }}
      </span>
    </div>

    <form @submit.prevent="handleCreateUser">
      <input
        type="text"
        placeholder="Name"
        v-model="newUserName"
        required
      />
      <input
        type="email"
        placeholder="Email"
        v-model="newUserEmail"
        required
      />
      <button type="submit" :disabled="isCreating">
        {{ isCreating ? 'Creating...' : 'Add User' }}
      </button>
    </form>

    <div v-if="loading" class="loading">Loading users...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>

    <ul v-if="!loading && !error">
      <li v-for="user in users" :key="user.id">
        <span>{{ user.name }} ({{ user.email }})</span>
        <button @click="handleUpdateUser(user.id)">Update</button>
        <button @click="handleDeleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRealTimeUsers, useWebSocket } from '@/composables/realTime';

const { 
  users, 
  loading, 
  error, 
  createUser, 
  updateUser, 
  deleteUser 
} = useRealTimeUsers();

const { isConnected } = useWebSocket('ws://localhost:8080/users');

const newUserName = ref('');
const newUserEmail = ref('');
const isCreating = ref(false);

const handleCreateUser = async () => {
  if (!newUserName.value || !newUserEmail.value) return;

  isCreating.value = true;
  
  try {
    await createUser({
      name: newUserName.value,
      email: newUserEmail.value,
    });
    
    newUserName.value = '';
    newUserEmail.value = '';
  } catch (error) {
    console.error('Failed to create user:', error);
  } finally {
    isCreating.value = false;
  }
};

const handleUpdateUser = async (userId: string) => {
  const user = users.value.find(u => u.id === userId);
  if (!user) return;

  try {
    await updateUser({
      id: userId,
      name: user.name + ' (updated)',
    });
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};

const handleDeleteUser = async (userId: string) => {
  try {
    await deleteUser(userId);
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
};
</script>

<style scoped>
.connected { color: green; }
.disconnected { color: red; }
.loading { color: blue; }
.error { color: red; }
</style>`
    },
    'Component-Driven Architecture': {
      react: `// React Component-Driven Architecture
import React, { useState, createContext, useContext } from 'react';

// Context for shared state
const AppContext = createContext();

// Reusable Button Component
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}> = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
  const variantClasses = variant === 'primary' 
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Reusable Card Component
const Card: React.FC<{
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}> = ({ title, children, actions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="mb-4">{children}</div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
};

// User List Component using composition
const UserList: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const handleDelete = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="space-y-4">
      {users.map(user => (
        <Card 
          key={user.id} 
          title={user.name}
          actions={
            <Button 
              variant="secondary" 
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </Button>
          }
        >
          <p className="text-gray-600">{user.email}</p>
        </Card>
      ))}
    </div>
  );
};

export default UserList;`,
      angular: `// Angular Component-Driven Architecture
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Reusable Button Component
@Component({
  selector: 'app-button',
  template: \`
    <button 
      [class]="buttonClasses"
      (click)="onClick.emit()"
    >
      {{ text }}
    </button>
  \`,
  styles: [\`
    .btn {
      @apply px-4 py-2 rounded font-medium transition-colors;
    }
    .btn-primary {
      @apply bg-blue-500 text-white hover:bg-blue-600;
    }
    .btn-secondary {
      @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
    }
  \`]
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output() onClick = new EventEmitter<void>();

  get buttonClasses(): string {
    const baseClass = 'btn';
    const variantClass = this.variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    return \`\${baseClass} \${variantClass}\`;
  }
}

// Reusable Card Component
@Component({
  selector: 'app-card',
  template: \`
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-lg font-semibold mb-4">{{ title }}</h3>
      <div class="mb-4">
        <ng-content></ng-content>
      </div>
      <div class="flex gap-2" *ngIf="actions">
        <ng-container *ngFor="let action of actions">
          <ng-content select="[actions]"></ng-content>
        </ng-container>
      </div>
    </div>
  \`
})
export class CardComponent {
  @Input() title: string = '';
  @Input() actions: boolean = false;
}

// User List Component using composition
@Component({
  selector: 'app-user-list',
  template: \`
    <div class="space-y-4">
      <app-card 
        *ngFor="let user of users" 
        [title]="user.name"
        [actions]="true"
      >
        <p class="text-gray-600">{{ user.email }}</p>
        <div actions>
          <app-button 
            text="Delete" 
            variant="secondary"
            (onClick)="handleDelete(user.id)"
          ></app-button>
        </div>
      </app-card>
    </div>
  \`
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  handleDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}`,
      vue: `// Vue Component-Driven Architecture
<template>
  <div class="space-y-4">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :title="user.name"
      @delete="handleDelete"
    >
      <p class="text-gray-600">{{ user.email }}</p>
    </UserCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Reusable Button Component
const BaseButton = defineComponent({
  props: {
    text: String,
    variant: {
      type: String as () => 'primary' | 'secondary',
      default: 'primary'
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const buttonClasses = computed(() => {
      const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
      const variantClasses = props.variant === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      return \`\${baseClasses} \${variantClasses}\`;
    });

    return { buttonClasses };
  },
  template: \`
    <button 
      :class="buttonClasses"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  \`
});

// Reusable Card Component
const UserCard = defineComponent({
  props: {
    title: String
  },
  emits: ['delete'],
  setup(props, { slots, emit }) {
    const handleDelete = () => {
      emit('delete');
    };

    return { handleDelete };
  },
  template: \`
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-lg font-semibold mb-4">{{ title }}</h3>
      <div class="mb-4">
        <slot></slot>
      </div>
      <div class="flex gap-2">
        <BaseButton 
          text="Delete" 
          variant="secondary"
          @click="handleDelete"
        />
      </div>
    </div>
  \`
});

// User List Component using composition
const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]);

const handleDelete = (userId: number) => {
  users.value = users.value.filter(user => user.id !== userId);
};
</script>`
    },
    'Micro-Frontend Architecture': {
      react: `// React Micro-Frontend Architecture with Module Federation
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Lazy loaded micro-frontends
const UserMicroApp = lazy(() => import('userApp/UserApp'));
const ProductMicroApp = lazy(() => import('productApp/ProductApp'));
const SettingsMicroApp = lazy(() => import('settingsApp/SettingsApp'));

// Shell App Component
const ShellApp: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Shared Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link 
                  to="/users" 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Users
                </Link>
                <Link 
                  to="/products" 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Products
                </Link>
                <Link 
                  to="/settings" 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Micro-frontend Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/users/*" element={<UserMicroApp />} />
              <Route path="/products/*" element={<ProductMicroApp />} />
              <Route path="/settings/*" element={<SettingsMicroApp />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

// Shared Context for micro-frontends
export const AppContext = React.createContext({
  user: null,
  theme: 'light',
  setTheme: () => {}
});

// Shared Hook
export const useAppContext = () => {
  return useContext(AppContext);
};

export default ShellApp;`,
      angular: `// Angular Micro-Frontend Architecture with Module Federation
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Shell App Routes
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('userApp/UserAppModule').then(m => m.UserAppModule)
  },
  {
    path: 'products', 
    loadChildren: () => import('productApp/ProductAppModule').then(m => m.ProductAppModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('settingsApp/SettingsAppModule').then(m => m.SettingsAppModule)
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ShellAppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // Shared services for micro-frontends
    { provide: 'APP_CONFIG', useValue: { apiUrl: 'https://api.example.com' } }
  ],
  bootstrap: [ShellAppComponent]
})
export class Shell AppModule { }

// Shared Navigation Component
@Component({
  selector: 'app-navigation',
  template: \`
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex space-x-8">
            <a routerLink="/users" 
               routerLinkActive="border-blue-500 text-gray-900"
               class="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Users
            </a>
            <a routerLink="/products"
               routerLinkActive="border-blue-500 text-gray-900" 
               class="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Products
            </a>
            <a routerLink="/settings"
               routerLinkActive="border-blue-500 text-gray-900"
               class="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Settings
            </a>
          </div>
        </div>
      </div>
    </nav>
  \`
})
export class NavigationComponent { }

// Shell App Component
@Component({
  selector: 'app-shell',
  template: \`
    <div class="min-h-screen bg-gray-50">
      <app-navigation></app-navigation>
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  \`
})
export class ShellAppComponent { }`,
      vue: `// Vue Micro-Frontend Architecture with Module Federation
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Shared Navigation -->
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex space-x-8">
            <router-link 
              to="/users" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium"
              active-class="border-blue-500 text-gray-900"
            >
              Users
            </router-link>
            <router-link 
              to="/products" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium"
              active-class="border-blue-500 text-gray-900"
            >
              Products
            </router-link>
            <router-link 
              to="/settings" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium"
              active-class="border-blue-500 text-gray-900"
            >
              Settings
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Micro-frontend Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// Async micro-frontend components
const UserMicroApp = defineAsyncComponent(() => import('userApp/UserApp'));
const ProductMicroApp = defineAsyncComponent(() => import('productApp/ProductApp'));
const SettingsMicroApp = defineAsyncComponent(() => import('settingsApp/SettingsApp'));

// Shared state for micro-frontends
const sharedState = reactive({
  user: null,
  theme: 'light'
});

// Provide shared state to all micro-frontends
provide('sharedState', sharedState);

// Shared composable
export const useSharedState = () => {
  return inject('sharedState');
};
</script>

<style>
/* Shared styles for all micro-frontends */
.micro-app-container {
  @apply bg-white rounded-lg shadow p-6;
}

.micro-app-title {
  @apply text-lg font-semibold mb-4;
}
</style>`
    }
  };

  const patternKey = Object.keys(snippets).find(key => 
    patternTitle.toLowerCase().includes(key.toLowerCase())
  );

  if (patternKey && snippets[patternKey][framework]) {
    return snippets[patternKey][framework];
  }

  return `// Example code for ${patternTitle} in ${framework}
// Implementation coming soon...`;
};

interface DataModelingPatternProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  category: string;
  complexity: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  benefits: string[];
  challenges: string[];
  protocols: string[];
}

const DataModelingPatternCard: React.FC<DataModelingPatternProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges,
  protocols
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState('react');

  return (
    <Card className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className={cn('p-3 rounded-xl', color)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-900 dark:text-white">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{description}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{category}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{complexity}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Benefits</h4>
            <div className="flex flex-wrap gap-1">
              {benefits.slice(0, isExpanded ? benefits.length : 3).map((benefit, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                  {benefit}
                </span>
              ))}
              {!isExpanded && benefits.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{benefits.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Protocols</h4>
            <div className="flex flex-wrap gap-1">
              {protocols.slice(0, isExpanded ? protocols.length : 3).map((protocol, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {protocol}
                </span>
              ))}
              {!isExpanded && protocols.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{protocols.length - 3} more
                </span>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Support</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.react.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.angular.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.vue.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippets */}
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Code Examples</h4>
                <div className="space-y-2">
                  {/* Language Tabs */}
                  <div className="flex gap-1 border-b border-slate-200 dark:border-slate-700">
                    {Object.keys(frameworks).map((fw) => (
                      <button
                        key={fw}
                        onClick={() => setSelectedFramework(fw)}
                        className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-colors ${
                          selectedFramework === fw
                            ? 'bg-blue-500 text-white border-b-2 border-blue-500'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {fw.charAt(0).toUpperCase() + fw.slice(1)}
                      </button>
                    ))}
                  </div>
                  
                  {/* Code Content */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 min-h-[120px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {selectedFramework.charAt(0).toUpperCase() + selectedFramework.slice(1)} Example
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-500">
                        {frameworks[selectedFramework as keyof typeof frameworks].length > 0 ? 
                          frameworks[selectedFramework as keyof typeof frameworks][0] : 
                          'Coming soon'
                        }
                      </span>
                    </div>
                    <pre className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto overflow-y-auto max-h-96 whitespace-pre-wrap break-words">
                      <code>{getCodeSnippet(title, selectedFramework)}</code>
                    </pre>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Challenges</h4>
                <div className="flex flex-wrap gap-1">
                  {challenges.map((challenge, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const DataModelingFrontend: React.FC = () => {
  const dataModelingPatterns = [
    {
      title: 'TypeScript Interfaces',
      description: 'Strong typing for frontend data models with TypeScript interfaces and types',
      icon: Type,
      color: 'bg-blue-500',
      category: 'Type Safety',
      complexity: 'Easy',
      frameworks: {
        react: ['TypeScript', 'Interface Extensions', 'Generic Types', 'Utility Types'],
        angular: ['TypeScript', 'Typed Forms', 'Strict Mode', 'Decorators'],
        vue: ['TypeScript', 'Composition API', 'Prop Types', 'Reactive Types']
      },
      benefits: [
        'Type safety',
        'IntelliSense support',
        'Compile-time error checking',
        'Better documentation',
        'Refactoring safety',
        'Code maintainability'
      ],
      challenges: [
        'Learning curve',
        'Initial setup complexity',
        'Verbosity for simple types',
        'Build step required'
      ],
      protocols: ['TypeScript', 'Interface Definition', 'Type Inference']
    },
    {
      title: 'Zod Validation',
      description: 'Runtime validation and type inference for data models and API responses',
      icon: Shield,
      color: 'bg-green-500',
      category: 'Validation',
      complexity: 'Medium',
      frameworks: {
        react: ['Zod', 'React Hook Form', 'Form Validation', 'Type Safety'],
        angular: ['Zod', 'Reactive Forms', 'Custom Validators', 'Type Guards'],
        vue: ['Zod', 'VueUse', 'Form Validation', 'Composables']
      },
      benefits: [
        'Runtime validation',
        'Type inference',
        'Schema composition',
        'Error handling',
        'API response validation',
        'Form validation'
      ],
      challenges: [
        'Additional dependency',
        'Schema maintenance',
        'Performance overhead',
        'Learning curve'
      ],
      protocols: ['Zod Schema', 'Runtime Validation', 'Type Inference']
    },
    {
      title: 'State Architecture',
      description: 'Structured state management patterns for complex frontend applications',
      icon: Box,
      color: 'bg-purple-500',
      category: 'State Management',
      complexity: 'Hard',
      frameworks: {
        react: ['Redux Toolkit', 'Zustand', 'Context API', 'State Slices'],
        angular: ['NgRx', 'RxJS', 'Services', 'State Management'],
        vue: ['Pinia', 'Vuex', 'Composition API', 'Reactive State']
      },
      benefits: [
        'Predictable state updates',
        'Time-travel debugging',
        'Centralized state',
        'Better scalability',
        'Testable code',
        'Separation of concerns'
      ],
      challenges: [
        'Boilerplate code',
        'Learning curve',
        'Over-engineering risk',
        'Performance considerations'
      ],
      protocols: ['Redux Pattern', 'State Slices', 'Actions/Reducers', 'Middleware']
    },
    {
      title: 'API Response Mapping',
      description: 'Transform and map API responses to frontend data models efficiently',
      icon: GitBranch,
      color: 'bg-orange-500',
      category: 'Data Integration',
      complexity: 'Medium',
      frameworks: {
        react: ['React Query', 'SWR', 'Axios Interceptors', 'Data Transformers'],
        angular: ['HTTP Client', 'Interceptors', 'RxJS Operators', 'Data Mapping'],
        vue: ['Vue Query', 'Axios', 'Composables', 'Data Transformation']
      },
      benefits: [
        'Clean data separation',
        'Error handling',
        'Type safety',
        'Caching strategies',
        'Optimistic updates',
        'Data normalization'
      ],
      challenges: [
        'Mapping complexity',
        'Performance overhead',
        'Synchronization issues',
        'Error propagation'
      ],
      protocols: ['REST API', 'GraphQL', 'Data Mapping', 'Response Transformation']
    },
    {
      title: 'Data Caching',
      description: 'Intelligent caching strategies for improved performance and user experience',
      icon: Database,
      color: 'bg-cyan-500',
      category: 'Performance',
      complexity: 'Hard',
      frameworks: {
        react: ['React Query', 'SWR', 'Service Worker', 'Local Storage'],
        angular: ['HTTP Cache', 'Service Workers', 'RxJS Cache', 'LocalStorage'],
        vue: ['Vue Query', 'Pinia Persist', 'Service Worker', 'IndexedDB']
      },
      benefits: [
        'Reduced API calls',
        'Offline support',
        'Better UX',
        'Performance optimization',
        'Bandwidth savings',
        'Instant loading'
      ],
      challenges: [
        'Cache invalidation',
        'Memory management',
        'Data consistency',
        'Complex synchronization'
      ],
      protocols: ['HTTP Caching', 'Service Workers', 'Local Storage', 'Cache Strategies']
    },
    {
      title: 'Real-time Data Synchronization',
      description: 'WebSocket-based real-time data sync for collaborative and live applications',
      icon: Activity,
      color: 'bg-red-500',
      category: 'Real-time',
      complexity: 'Hard',
      frameworks: {
        react: ['WebSocket API', 'Socket.IO', 'React Query', 'State Sync'],
        angular: ['WebSocket', 'RxJS', 'NgRx Effects', 'Real-time Updates'],
        vue: ['WebSocket', 'VueUse', 'Pinia', 'Real-time Composables']
      },
      benefits: [
        'Live updates',
        'Collaborative features',
        'Real-time collaboration',
        'Instant notifications',
        'Better engagement',
        'Live data streaming'
      ],
      challenges: [
        'Connection management',
        'Scalability issues',
        'Error handling',
        'Battery consumption'
      ],
      protocols: ['WebSocket', 'Socket.IO', 'Server-Sent Events', 'Real-time Sync']
    }
  ];

  const architecturePatterns = [
    {
      title: 'Component-Driven Architecture',
      description: 'Building applications with reusable, composable UI components',
      icon: Monitor,
      color: 'bg-indigo-500',
      category: 'Architecture',
      complexity: 'Medium',
      frameworks: {
        react: ['Component Composition', 'Props/State', 'Hooks', 'Context'],
        angular: ['Components', 'Services', 'Dependency Injection', 'Modules'],
        vue: ['Components', 'Props/Events', 'Composition API', 'Slots']
      },
      benefits: [
        'Reusability',
        'Maintainability',
        'Testability',
        'Team collaboration',
        'Consistency',
        'Scalability'
      ],
      challenges: [
        'Component design',
        'Prop drilling',
        'State management',
        'Performance optimization'
      ],
      protocols: ['Component Design', 'Props/Events', 'State Management', 'Composition']
    },
    {
      title: 'Micro-Frontend Architecture',
      description: 'Decomposing frontend applications into smaller, independent modules',
      icon: Tablet,
      color: 'bg-teal-500',
      category: 'Architecture',
      complexity: 'Hard',
      frameworks: {
        react: ['Module Federation', 'Single SPA', 'Qiankun', 'Micro Apps'],
        angular: ['Angular Elements', 'Module Federation', 'Single SPA', 'Web Components'],
        vue: ['Module Federation', 'Single SPA', 'Micro Frontends', 'Web Components']
      },
      benefits: [
        'Independent deployment',
        'Technology diversity',
        'Team autonomy',
        'Scalability',
        'Isolation',
        'Gradual migration'
      ],
      challenges: [
        'Integration complexity',
        'Performance overhead',
        'Shared dependencies',
        'Consistency issues'
      ],
      protocols: ['Module Federation', 'Web Components', 'Single SPA', 'Micro Frontends']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Data Modeling for Frontend"
        description="Master modern data modeling patterns with diagrammatic explanations for building robust and scalable frontend applications"
        icon={Database}
        category="System Design.Data Modeling"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Data Modeling Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Data modeling in frontend development involves designing the structure, relationships, 
                  and validation rules for data used in your application. Learn essential patterns for 
                  implementing robust, scalable, and efficient data architectures with comprehensive 
                  diagrams and real-world examples.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Modeling Focus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Type Safety:</strong> TypeScript interfaces and validation schemas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>State Architecture:</strong> Centralized and distributed state patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Integration:</strong> API response mapping and caching strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Real-time Sync:</strong> WebSocket-based data synchronization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Key Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Performance Impact:</strong> Optimizing data flow and minimizing re-renders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Error Handling:</strong> Robust validation and error recovery mechanisms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Scalability:</strong> Designing for growth and maintainability
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Data Consistency:</strong> Ensuring data integrity across the application
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Modeling Patterns */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Database className="w-6 h-6 text-blue-500" />
              Data Modeling Patterns
            </CardTitle>
            <CardDescription>
              Essential patterns for structuring and managing data in frontend applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataModelingPatterns.map((pattern, index) => (
                <DataModelingPatternCard 
                  key={index} 
                  {...pattern} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Architecture Patterns */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Box className="w-6 h-6 text-purple-500" />
              Architecture Patterns
            </CardTitle>
            <CardDescription>
              Component and micro-frontend architecture patterns for scalable applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {architecturePatterns.map((pattern, index) => (
                <DataModelingPatternCard 
                  key={index} 
                  {...pattern} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-green-500" />
              Best Practices
            </CardTitle>
            <CardDescription>
              Essential guidelines for effective data modeling in frontend applications
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Design Principles</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Use TypeScript for type safety</strong> and better developer experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Implement proper validation</strong> for all user inputs and API responses
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Design data models</strong> that reflect your business domain
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Keep data models simple</strong> and focused on single responsibilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Use interfaces and types</strong> to document data contracts
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Performance Considerations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Implement intelligent caching</strong> to reduce API calls
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Use lazy loading</strong> for large datasets and components
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Optimize bundle size</strong> with code splitting and tree shaking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Implement pagination</strong> and virtual scrolling for large lists
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Use memoization</strong> to prevent unnecessary re-computations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Pitfalls */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Common Pitfalls to Avoid
            </CardTitle>
            <CardDescription>
              Anti-patterns and warning signs in frontend data modeling
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold mb-4 text-red-700 dark:text-red-300">Anti-Patterns</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Over-engineering</strong> simple data structures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Tight coupling</strong> between components and data models
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Neglecting error handling</strong> and edge cases
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Using any type</strong> instead of proper TypeScript interfaces
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Ignoring performance</strong> implications of data operations
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold mb-4 text-yellow-700 dark:text-yellow-300">Warning Signs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Frequent prop drilling</strong> in React components
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Excessive API calls</strong> for the same data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Inconsistent data shapes</strong> across the application
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Complex state management</strong> for simple use cases
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Poor separation</strong> of concerns between UI and data logic
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataModelingFrontend;
