'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Lock,
  Key,
  Shield,
  Users,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Info,
  Target,
  Settings,
  Cpu,
  Monitor,
  Smartphone,
  Globe,
  Server,
  Database,
  Cloud,
  Zap,
  Activity,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Clock,
  Timer,
  RefreshCw,
  Bell,
  Mail,
  Phone,
  MessageSquare,
  QrCode,
  Fingerprint,
  CreditCard,
  User,
  UserCheck,
  UserX,
  Crown,
  Award,
  Star,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Anchor,
  Bookmark,
  Filter,
  Search,
  Code,
  FileText,
  Folder,
  FolderOpen,
  Home,
  List,
  Layout,
  Columns,
  Rows,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  AlignLeft,
  AlignRight,
  AlignCenter,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code2,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Undo,
  Redo,
  Scissors,
  Copy,
  Clipboard,
  Save,
  DownloadCloud,
  UploadCloud,
  CloudOff,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  Sun,
  Moon,
  StarHalf,
  StarOff,
  ZapOff,
  Flame,
  Droplet,
  Wind,
  Thermometer,
  Fuel
} from 'lucide-react';
import { cn } from '@/lib/utils';

const getCodeSnippet = (patternTitle: string, framework: string): string => {
  const snippets: Record<string, Record<string, string>> = {
    'JWT Authentication': {
      react: `// React JWT Authentication Hook
import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt.decode(token) as User;
        setAuthState({
          user: decoded,
          token,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error) {
        localStorage.removeItem('token');
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        const decoded = jwt.decode(data.token) as User;
        
        setAuthState({
          user: decoded,
          token: data.token,
          isAuthenticated: true,
          isLoading: false
        });
        
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return {
    ...authState,
    login,
    logout
  };
};

// Usage in Component
const ProtectedComponent = () => {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  
  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};`,
      
      angular: `// Angular JWT Authentication Service
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

interface User {
  id: string;
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  
  public currentUser$ = this.currentUserSubject.asObservable();
  public isAuthenticated$ = this.currentUserSubject.pipe(
    map(user => !!user)
  );

  constructor(private http: HttpClient) {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      try {
        const user = jwt_decode(token) as User;
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }

  login(email: string, password: string): Observable<{ success: boolean; error?: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', { email, password })
      .pipe(
        tap(response => {
          const token = response.token;
          localStorage.setItem(this.TOKEN_KEY, token);
          const user = jwt_decode(token) as User;
          this.currentUserSubject.next(user);
        }),
        map(() => ({ success: true })),
        catchError(error => {
          return [{ success: false, error: error.message || 'Login failed' }];
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUserSubject.next(null);
  }

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.token;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': 'Bearer ' + token })
    });
  }
}

// Auth Guard
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}`,
      
      vue: `// Vue JWT Authentication Composable
import { ref, reactive, computed } from 'vue';
import jwt from 'jsonwebtoken';

interface User {
  id: string;
  email: string;
  name: string;
}

export function useAuth() {
  const state = reactive({
    user: null as User | null,
    token: null as string | null,
    isLoading: true
  });

  const isAuthenticated = computed(() => !!state.user);

  const initializeAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt.decode(token) as User;
        state.user = decoded;
        state.token = token;
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    state.isLoading = false;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        const decoded = jwt.decode(data.token) as User;
        
        state.user = decoded;
        state.token = data.token;
        
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    state.user = null;
    state.token = null;
  };

  // Initialize on creation
  initializeAuth();

  return {
    state: readonly(state),
    isAuthenticated,
    login,
    logout
  };
}

// Usage in Component
<template>
  <div>
    <div v-if="state.isLoading">Loading...</div>
    <LoginForm v-else-if="!isAuthenticated" @login="handleLogin" />
    <div v-else>
      <h1>Welcome, {{ state.user?.name }}!</h1>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';

const { state, isAuthenticated, login, logout } = useAuth();

const handleLogin = async (credentials: { email: string; password: string }) => {
  await login(credentials.email, credentials.password);
};
</script>`
    },
    'OAuth 2.0': {
      react: `// React OAuth 2.0 Implementation
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'your-google-client-id';
const SCOPES = 'openid email profile';

const useGoogleAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initClient = () => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: CLIENT_ID,
          scope: SCOPES
        }).then(() => {
          setIsInitialized(true);
        });
      });
    };

    if (window.gapi) {
      initClient();
    } else {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = initClient;
      document.body.appendChild(script);
    }
  }, []);

  const signIn = async () => {
    if (!isInitialized) return;

    try {
      const auth2 = gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      
      const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;

      // Send token to backend
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('auth_token', userData.token);
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const signOut = async () => {
    if (!isInitialized) return;

    try {
      const auth2 = gapi.auth2.getAuthInstance();
      await auth2.signOut();
      setUser(null);
      localStorage.removeItem('auth_token');
    } catch (error) {
      console.error('Google sign-out error:', error);
    }
  };

  return {
    isInitialized,
    user,
    signIn,
    signOut
  };
};

// Usage
const GoogleAuthComponent = () => {
  const { isInitialized, user, signIn, signOut } = useGoogleAuth();

  if (!isInitialized) return <div>Loading Google Auth...</div>;

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signIn}>Sign in with Google</button>
      )}
    </div>
  );
};`,
      
      angular: `// Angular OAuth 2.0 Service
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {
  private readonly TOKEN_KEY = 'oauth_token';
  private currentUserSubject = new BehaviorSubject<any>(null);
  
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      // Validate token with backend
      this.validateToken(token).subscribe({
        next: (user) => {
          this.currentUserSubject.next(user);
        },
        error: () => {
          localStorage.removeItem(this.TOKEN_KEY);
        }
      });
    }
  }

  // Google OAuth
  signInWithGoogle(): Observable<any> {
    return this.http.post<any>('/api/auth/google', { provider: 'google' })
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem(this.TOKEN_KEY, response.token);
            this.currentUserSubject.next(response.user);
          }
        })
      );
  }

  // GitHub OAuth
  signInWithGitHub(): Observable<any> {
    return this.http.post<any>('/api/auth/github', { provider: 'github' })
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem(this.TOKEN_KEY, response.token);
            this.currentUserSubject.next(response.user);
          }
        })
      );
  }

  private validateToken(token: string): Observable<any> {
    return this.http.get('/api/auth/validate', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    });
  }

  signOut(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUserSubject.next(null);
  }

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

// OAuth Guard
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { OAuthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class OAuthGuard implements CanActivate {
  constructor(
    private oauthService: OAuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.oauthService.currentUser$.pipe(
      take(1),
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}`,
      
      vue: `// Vue OAuth 2.0 Composable
import { ref, reactive } from 'vue';

export function useOAuth() {
  const state = reactive({
    user: null as any,
    isLoading: false,
    error: null as string | null
  });

  const signInWithGoogle = async () => {
    state.isLoading = true;
    state.error = null;

    try {
      // Redirect to Google OAuth
      const authUrl = '/api/auth/google';
      window.location.href = authUrl;
    } catch (error) {
      state.error = 'Failed to initiate Google sign-in';
      state.isLoading = false;
    }
  };

  const signInWithGitHub = async () => {
    state.isLoading = true;
    state.error = null;

    try {
      // Redirect to GitHub OAuth
      const authUrl = '/api/auth/github';
      window.location.href = authUrl;
    } catch (error) {
      state.error = 'Failed to initiate GitHub sign-in';
      state.isLoading = false;
    }
  };

  const handleOAuthCallback = async (code: string, state: string) => {
    try {
      const response = await fetch('/api/auth/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, state })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('oauth_token', data.token);
        state.user = data.user;
      } else {
        throw new Error('OAuth callback failed');
      }
    } catch (error) {
      state.error = 'Authentication failed';
    }
    state.isLoading = false;
  };

  const signOut = () => {
    localStorage.removeItem('oauth_token');
    state.user = null;
  };

  const initializeAuth = () => {
    const token = localStorage.getItem('oauth_token');
    if (token) {
      // Validate token with backend
      fetch('/api/auth/validate', {
        headers: { 'Authorization': 'Bearer ' + token }
      })
      .then(response => response.json())
      .then(user => {
        state.user = user;
      })
      .catch(() => {
        localStorage.removeItem('oauth_token');
      });
    }
  };

  // Initialize on creation
  initializeAuth();

  return {
    state: readonly(state),
    signInWithGoogle,
    signInWithGitHub,
    handleOAuthCallback,
    signOut
  };
}

// Usage in Component
<template>
  <div>
    <div v-if="state.isLoading">Loading...</div>
    <div v-else-if="state.error" class="error">{{ state.error }}</div>
    <div v-else-if="state.user">
      <h1>Welcome, {{ state.user.name }}!</h1>
      <button @click="signOut">Sign Out</button>
    </div>
    <div v-else>
      <button @click="signInWithGoogle">Sign in with Google</button>
      <button @click="signInWithGitHub">Sign in with GitHub</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOAuth } from '@/composables/useOAuth';

const { state, signInWithGoogle, signInWithGitHub, signOut } = useOAuth();
</script>`
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

interface AuthMethodProps {
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
}

const AuthMethodCard: React.FC<AuthMethodProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState('react');

  const frameworkTabs = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' },
    { id: 'vue', label: 'Vue', icon: '💚' }
  ];

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
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Use Cases</h4>
            <div className="flex flex-wrap gap-1">
              <span key={0} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                User Authentication
              </span>
              <span key={1} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                Access Control
              </span>
              <span key={2} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                Identity Management
              </span>
              {!isExpanded && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +more
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

              {/* Code Examples */}
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Code Examples</h4>
                
                {/* Framework Tabs */}
                <div className="flex space-x-1 mb-3">
                  {frameworkTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedFramework(tab.id)}
                      className={'px-3 py-2 text-xs font-medium rounded-t-lg transition-colors ' + (
                        selectedFramework === tab.id
                          ? 'bg-blue-500 text-white border-b-2 border-blue-500'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      )}
                    >
                      {tab.icon} {tab.label}
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

const AuthenticationAuthorization: React.FC = () => {
  const authMethods = [
    {
      title: 'Password-Based Authentication',
      description: 'Traditional username and password authentication',
      icon: Key,
      color: 'bg-blue-500',
      category: 'Authentication',
      complexity: 'Low',
      frameworks: {
        react: ['React Hook Form', 'Formik', 'Custom hooks', 'Validation libraries'],
        angular: ['Reactive Forms', 'Template Forms', 'Custom validators', 'Form services'],
        vue: ['Vue Formulate', 'VeeValidate', 'Composition API', 'Custom composables']
      },
      benefits: [
        'Universal familiarity',
        'Simple implementation',
        'No special hardware required',
        'Easy user understanding',
        'Widely supported',
        'Low cost'
      ],
      challenges: [
        'Password fatigue',
        'Security vulnerabilities',
        'Poor user experience',
        'Reset complexity',
        'Brute force attacks'
      ]
    },
    {
      title: 'Multi-Factor Authentication (MFA)',
      description: 'Multiple verification factors for enhanced security',
      icon: Shield,
      color: 'bg-green-500',
      category: 'Authentication',
      complexity: 'Medium',
      frameworks: {
        react: ['React OTP', 'Authy API', 'Custom MFA', 'WebAuthn integration'],
        angular: ['Angular MFA', 'Authy SDK', 'Custom services', 'WebAuthn'],
        vue: ['Vue OTP', 'Authy integration', 'Custom plugins', 'WebAuthn']
      },
      benefits: [
        'Enhanced security',
        'Reduced fraud risk',
        'Compliance requirements',
        'User trust',
        'Flexible verification',
        'Multiple factor types'
      ],
      challenges: [
        'User friction',
        'Implementation complexity',
        'Backup methods needed',
        'Cost considerations',
        'User education required'
      ]
    },
    {
      title: 'OAuth 2.0 & OpenID Connect',
      description: 'Industry-standard federated authentication',
      icon: Globe,
      color: 'bg-purple-500',
      category: 'Authentication',
      complexity: 'High',
      frameworks: {
        react: ['React OIDC', 'Auth0 SDK', 'Keycloak', 'Custom OAuth'],
        angular: ['Angular OIDC', 'Auth0 Angular', 'Keycloak Angular', 'OAuth interceptors'],
        vue: ['Vue OIDC', 'Auth0 Vue', 'Keycloak Vue', 'OAuth plugins']
      },
      benefits: [
        'Single sign-on',
        'Third-party integration',
        'Standardized protocol',
        'Reduced password burden',
        'Enterprise ready',
        'Scalable solution'
      ],
      challenges: [
        'Complex setup',
        'Token management',
        'Security considerations',
        'Vendor lock-in',
        'Learning curve'
      ]
    },
    {
      title: 'Biometric Authentication',
      description: 'Fingerprint, face, and voice recognition',
      icon: Fingerprint,
      color: 'bg-orange-500',
      category: 'Authentication',
      complexity: 'High',
      frameworks: {
        react: ['WebAuthn API', 'React Biometric', 'Fingerprint SDK', 'Face recognition'],
        angular: ['WebAuthn Angular', 'Biometric services', 'Face detection', 'Voice recognition'],
        vue: ['WebAuthn Vue', 'Biometric plugins', 'Face recognition', 'Voice auth']
      },
      benefits: [
        'High security',
        'Convenient user experience',
        'No password required',
        'Unique identifiers',
        'Fast authentication',
        'Modern technology'
      ],
      challenges: [
        'Hardware requirements',
        'Privacy concerns',
        'Fallback methods needed',
        'Cost barriers',
        'Accessibility issues'
      ]
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      description: 'Permission management based on user roles',
      icon: Users,
      color: 'bg-cyan-500',
      category: 'Authorization',
      complexity: 'Medium',
      frameworks: {
        react: ['React RBAC', 'Casl', 'Role-based hooks', 'Permission components'],
        angular: ['Angular RBAC', 'Guards', 'Role directives', 'Permission services'],
        vue: ['Vue RBAC', 'Permission plugins', 'Role composables', 'Guard components']
      },
      benefits: [
        'Scalable permissions',
        'Easy management',
        'Clear access patterns',
        'Audit capabilities',
        'Flexible roles',
        'Security compliance'
      ],
      challenges: [
        'Role explosion',
        'Complex hierarchies',
        'Maintenance overhead',
        'Testing complexity',
        'Performance considerations'
      ]
    },
    {
      title: 'JWT Token Management',
      description: 'Secure token-based authentication and authorization',
      icon: CreditCard,
      color: 'bg-red-500',
      category: 'Authorization',
      complexity: 'Medium',
      frameworks: {
        react: ['JWT Decode', 'React JWT', 'Token interceptors', 'Auth context'],
        angular: ['Angular JWT', 'Token interceptors', 'Auth guards', 'JWT services'],
        vue: ['Vue JWT', 'Token plugins', 'Auth composables', 'JWT utilities']
      },
      benefits: [
        'Stateless authentication',
        'Cross-domain support',
        'Scalable architecture',
        'Mobile friendly',
        'Microservices ready',
        'Standard format'
      ],
      challenges: [
        'Token expiration',
        'Revocation complexity',
        'Size limitations',
        'Security risks',
        'Storage concerns'
      ]
    }
  ];

  const authFlows = [
    {
      title: 'Login Flow',
      description: 'User authentication process',
      steps: ['User enters credentials', 'Validate credentials', 'Generate token', 'Store token', 'Redirect to dashboard'],
      icon: ArrowRight
    },
    {
      title: 'Registration Flow',
      description: 'New user onboarding process',
      steps: ['User provides details', 'Validate input', 'Create account', 'Send verification', 'Complete profile'],
      icon: ArrowUp
    },
    {
      title: 'Logout Flow',
      description: 'Secure session termination',
      steps: ['Clear local storage', 'Invalidate token', 'Clear cookies', 'Redirect to login', 'Clear cache'],
      icon: ArrowDown
    }
  ];

  const securityTools = [
    {
      name: 'Auth0',
      description: 'Comprehensive authentication platform',
      icon: Shield,
      features: ['Social login', 'MFA', 'SSO', 'User management'],
      frameworks: ['React', 'Angular', 'Vue', 'All frameworks']
    },
    {
      name: 'Keycloak',
      description: 'Open-source identity management',
      icon: Key,
      features: ['OpenID Connect', 'SAML', 'LDAP', 'Social login'],
      frameworks: ['React', 'Angular', 'Vue', 'Java integration']
    },
    {
      name: 'Firebase Auth',
      description: 'Google\'s authentication service',
      icon: Cloud,
      features: ['Email/password', 'Social auth', 'Phone auth', 'Anonymous auth'],
      frameworks: ['React', 'Angular', 'Vue', 'Mobile apps']
    },
    {
      name: 'Okta',
      description: 'Enterprise identity platform',
      icon: Users,
      features: ['SSO', 'MFA', 'LDAP', 'API access management'],
      frameworks: ['React', 'Angular', 'Vue', 'Enterprise systems']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Authentication & Authorization"
        description="Master frontend authentication and authorization strategies for secure user identity verification and access control in modern web applications"
        icon={Lock}
        category="System Design.Security"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding Authentication & Authorization
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Authentication verifies who users are, while authorization determines what they can access. 
                  Learn the essential strategies and patterns for implementing secure, scalable, and user-friendly 
                  authentication and authorization systems in frontend applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Authentication vs Authorization
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Authentication:</strong> Verifying user identity (who you are)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Authorization:</strong> Controlling access permissions (what you can do)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Authentication First:</strong> Must authenticate before authorization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Security Layers:</strong> Both essential for comprehensive security
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
                      <strong>User Experience:</strong> Balance security with usability
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Security Level:</strong> Match protection to sensitivity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Scalability:</strong> Support growing user base and roles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Compliance:</strong> Meet regulatory requirements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication Methods */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Key className="w-6 h-6 text-blue-500" />
              Authentication Methods
            </CardTitle>
            <CardDescription>
              Various approaches to verify user identity and establish secure sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authMethods.map((method, index) => (
                <AuthMethodCard 
                  key={index} 
                  {...method} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Authentication Flows */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="w-6 h-6 text-green-500" />
              Authentication Flows
            </CardTitle>
            <CardDescription>
              Common authentication workflows and their implementation patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {authFlows.map((flow, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                        <flow.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {flow.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {flow.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Process Steps:</h4>
                      <div className="flex flex-wrap gap-2">
                        {flow.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">
                              {i + 1}
                            </div>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{step}</span>
                            {i < flow.steps.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-slate-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Tools */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-purple-500" />
              Authentication & Authorization Tools
            </CardTitle>
            <CardDescription>
              Essential platforms and services for implementing secure authentication systems
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityTools.map((tool, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <tool.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-1">Framework Support:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {tool.frameworks.join(' • ')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  Authentication & Authorization Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential guidelines for implementing secure and user-friendly authentication systems
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement multi-factor authentication for sensitive operations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use HTTPS for all authentication communications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement proper session management and timeout
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Use secure token storage and transmission
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Implement rate limiting to prevent brute force attacks
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't store passwords in plain text or client-side
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore session security and token expiration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't skip input validation and sanitization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't ignore error handling and user feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Don't forget to implement proper logout functionality
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

export default AuthenticationAuthorization;
