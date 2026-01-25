'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Puzzle,
  Box,
  Layers,
  GitBranch,
  Zap,
  Shield,
  Monitor,
  Smartphone,
  Globe,
  Settings,
  CheckCircle,
  AlertCircle,
  Info,
  Target,
  RefreshCw,
  Clock,
  Timer,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Bell,
  Code,
  Package,
  TreePine,
  Braces,
  Component,
  Layout,
  Grid,
  List,
  Blocks,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Diamond,
  Star,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Crown,
  Flag,
  MapPin,
  Compass,
  Navigation,
  Anchor,
  Home,
  Building,
  Factory,
  Wrench,
  Hammer,
  Ruler,
  PenTool,
  Palette,
  Brush,
  Image,
  Film,
  Music,
  Video,
  Camera,
  Mic,
  Volume2,
  Wifi,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Database,
  Server,
  Cloud,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Wind,
  Droplet,
  Flame,
  Thermometer,
  Gauge,
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Brain,
  Ear
} from 'lucide-react';
import { cn } from '@/lib/utils';

const getCodeSnippet = (patternTitle: string, framework: string): string => {
  const snippets: Record<string, Record<string, string>> = {
    'Single Responsibility Principle': {
      react: `// React Single Responsibility Principle
import React from 'react';

// ❌ BAD: Component doing too many things
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Fetching logic
  useEffect(() => {
    fetchUsers();
  }, []);
  
  // Validation logic
  const validateEmail = (email) => {
    return email.includes('@');
  };
  
  // Formatting logic
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  // UI rendering
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <small>{formatDate(user.createdAt)}</small>
        </div>
      ))}
    </div>
  );
};

// ✅ GOOD: Each component has a single responsibility
const UserList = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <small><FormattedDate date={user.createdAt} /></small>
    </div>
  );
};

const FormattedDate = ({ date }) => {
  return new Date(date).toLocaleDateString();
};

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return { users, loading, error, refetch: fetchUsers };
};

// Usage
const UserManagement = () => {
  const { users, loading, error } = useUsers();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <UserList users={users} />;
};`,
      
      angular: `// Angular Single Responsibility Principle
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

// ❌ BAD: Component doing too many things
@Component({
  selector: 'app-user-management-bad',
  template: \`
    <div>
      <h1>Users</h1>
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error">{{ error }}</div>
      <div *ngFor="let user of users">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <small>{{ formatDate(user.createdAt) }}</small>
      </div>
    </div>
  \`
})
export class UserManagementBadComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.loadUsers();
  }
  
  async loadUsers() {
    this.loading = true;
    try {
      this.users = await this.userService.getUsers();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
  
  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
}

// ✅ GOOD: Each component has a single responsibility
@Component({
  selector: 'app-user-list',
  template: \`
    <div>
      <h1>Users</h1>
      <app-user-card 
        *ngFor="let user of users" 
        [user]="user">
      </app-user-card>
    </div>
  \`
})
export class UserListComponent {
  @Input() users: User[] = [];
}

@Component({
  selector: 'app-user-card',
  template: \`
    <div>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <small>
        <app-formatted-date [date]="user.createdAt" />
      </small>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user: User;
}

@Component({
  selector: 'app-formatted-date',
  template: \`{{ formattedDate }}\`
})
export class FormattedDateComponent implements OnChanges {
  @Input() date: string;
  formattedDate: string;
  
  ngOnChanges() {
    if (this.date) {
      this.formattedDate = new Date(this.date).toLocaleDateString();
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = '/api/users';
  
  constructor(private http: HttpClient) {}
  
  async getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.apiUrl).toPromise();
  }
}

// Main component with single responsibility
@Component({
  selector: 'app-user-management',
  template: \`
    <div>
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error">{{ error }}</div>
      <app-user-list [users]="users" *ngIf="!loading && !error"></app-user-list>
    </div>
  \`
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.loadUsers();
  }
  
  private async loadUsers() {
    this.loading = true;
    try {
      this.users = await this.userService.getUsers();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
}`,
      
      vue: `// Vue Single Responsibility Principle
<template>
  <!-- ❌ BAD: Component doing too many things -->
  <div class="user-management-bad">
    <h1>Users</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <small>{{ formatDate(user.createdAt) }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const users = ref<User[]>([]);
const loading = ref(false);
const error = ref('');

const loadUsers = async () => {
  loading.value = true;
  try {
    const response = await fetch('/api/users');
    users.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

onMounted(() => {
  loadUsers();
});
</script>

<!-- ✅ GOOD: Each component has a single responsibility -->
<!-- UserList.vue -->
<template>
  <div class="user-list">
    <h1>Users</h1>
    <UserCard 
      v-for="user in users" 
      :key="user.id" 
      :user="user" 
    />
  </div>
</template>

<script setup lang="ts">
import type { User } from './types';

interface Props {
  users: User[];
}

defineProps<Props>();
</script>

<!-- UserCard.vue -->
<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <small>
      <FormattedDate :date="user.createdAt" />
    </small>
  </div>
</template>

<script setup lang="ts">
import type { User } from './types';

interface Props {
  user: User;
}

defineProps<Props>();
</script>

<!-- FormattedDate.vue -->
<template>
  <span>{{ formattedDate }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  date: string;
}

const props = defineProps<Props>();

const formattedDate = computed(() => {
  return props.date ? new Date(props.date).toLocaleDateString() : '';
});
</script>

<!-- useUsers.ts -->
import { ref } from 'vue';

export function useUsers() {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref('');

  const loadUsers = async () => {
    loading.value = true;
    try {
      const response = await fetch('/api/users');
      users.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    loading,
    error,
    loadUsers
  };
}

<!-- UserManagement.vue -->
<template>
  <div class="user-management">
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <UserList 
      v-if="!loading && !error" 
      :users="users" 
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsers } from './composables/useUsers';
import UserList from './UserList.vue';

const { users, loading, error, loadUsers } = useUsers();

onMounted(() => {
  loadUsers();
});
</script>`
    },
    'Component Composition': {
      react: `// React Component Composition Patterns
import React, { useState, createContext, useContext } from 'react';

// 1. Compound Components Pattern
const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabsContext = createContext();

const TabList = ({ children }) => {
  return <div className="tab-list">{children}</div>;
};

const Tab = ({ children, index }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      className={\`tab \${activeTab === index ? 'active' : ''}\`}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children }) => {
  return <div className="tab-panels">{children}</div>;
};

const TabPanel = ({ children, index }) => {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== index) return null;
  
  return <div className="tab-panel">{children}</div>;
};

// Usage
const App = () => {
  return (
    <Tabs defaultTab={0}>
      <TabList>
        <Tab index={0}>Profile</Tab>
        <Tab index={1}>Settings</Tab>
        <Tab index={2}>Notifications</Tab>
      </TabList>
      <TabPanels>
        <TabPanel index={0}>Profile content</TabPanel>
        <TabPanel index={1}>Settings content</TabPanel>
        <TabPanel index={2}>Notifications content</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

// 2. Render Props Pattern
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};

// Usage
const App = () => {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          Mouse position: {x}, {y}
        </div>
      )}
    />
  );
};

// 3. Custom Hook Pattern (Modern Render Props)
const useMouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return { position, handleMouseMove };
};

const MouseTrackerComponent = () => {
  const { position, handleMouseMove } = useMouseTracker();
  
  return (
    <div onMouseMove={handleMouseMove}>
      Mouse position: {position.x}, {position.y}
    </div>
  );
};

// 4. Higher-Order Component Pattern
const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    return <Component {...props} />;
  };
};

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

const UserProfileWithLoading = withLoading(UserProfile);

// Usage
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser().then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, []);
  
  return (
    <UserProfileWithLoading 
      user={user} 
      isLoading={loading} 
    />
  );
};

// 5. Children as Function Pattern
const DataProvider = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData(url)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  if (loading) return children({ loading: true });
  if (error) return children({ error });
  if (data) return children({ data });
  
  return children({ loading: true });
};

// Usage
const App = () => {
  return (
    <DataProvider url="/api/user">
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        if (data) return <div>Hello, {data.name}!</div>;
        return null;
      }}
    </DataProvider>
  );
};`,
      
      angular: `// Angular Component Composition Patterns
import { Component, Input, ContentChild, TemplateRef, ViewChild, 
         AfterContentInit, EventEmitter, Output } from '@angular/core';

// 1. Compound Components Pattern
@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tabs">
      <ng-content select="app-tab-list"></ng-content>
      <ng-content select="app-tab-panels"></ng-content>
    </div>
  \`,
  providers: [TabsService]
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  ngAfterContentInit() {
    this.activeTab = this.tabs.first;
    this.tabs.forEach(tab => tab.activateChange.subscribe(() => {
      this.activeTab = tab;
      this.updateTabs();
    }));
  }
  
  private updateTabs() {
    this.tabs.forEach(tab => {
      tab.isActive = tab === this.activeTab;
    });
  }
}

@Component({
  selector: 'app-tab-list',
  template: \`
    <div class="tab-list">
      <ng-content></ng-content>
    </div>
  \`
})
export class TabListComponent {}

@Component({
  selector: 'app-tab',
  template: \`
    <button 
      class="tab" 
      [class.active]="isActive"
      (click)="activate()">
      <ng-content></ng-content>
    </button>
  \`
})
export class TabComponent {
  @Input() tabTitle: string;
  isActive = false;
  @Output() activateChange = new EventEmitter<TabComponent>();
  
  activate() {
    this.activateChange.emit(this);
  }
}

@Component({
  selector: 'app-tab-panels',
  template: \`
    <div class="tab-panels">
      <ng-content></ng-content>
    </div>
  \`
})
export class TabPanelsComponent {}

@Component({
  selector: 'app-tab-panel',
  template: \`
    <div class="tab-panel" [class.active]="isActive">
      <ng-content></ng-content>
    </div>
  \`
})
export class TabPanelComponent {
  @Input() isActive = false;
}

// Usage
@Component({
  selector: 'app-demo',
  template: \`
    <app-tabs>
      <app-tab-list>
        <app-tab tabTitle="Profile">Profile</app-tab>
        <app-tab tabTitle="Settings">Settings</app-tab>
      </app-tab-list>
      <app-tab-panels>
        <app-tab-panel [isActive]="true">Profile content</app-tab-panel>
        <app-tab-panel>Settings content</app-tab-panel>
      </app-tab-panels>
    </app-tabs>
  \`
})
export class DemoComponent {}

// 2. Template Portal Pattern (Render Props equivalent)
@Component({
  selector: 'app-mouse-tracker',
  template: \`
    <div (mousemove)="onMouseMove($event)">
      <ng-container 
        *ngTemplateOutlet="contentTemplate; context: mouseContext">
      </ng-container>
    </div>
  \`
})
export class MouseTrackerComponent {
  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;
  
  mousePosition = { x: 0, y: 0 };
  
  get mouseContext() {
    return { 
      $implicit: this.mousePosition,
      position: this.mousePosition 
    };
  }
  
  onMouseMove(event: MouseEvent) {
    this.mousePosition = { x: event.clientX, y: event.clientY };
  }
}

// Usage
@Component({
  selector: 'app-demo',
  template: \`
    <app-mouse-tracker>
      <ng-template let-position>
        Mouse position: {{ position.x }}, {{ position.y }}
      </ng-template>
    </app-mouse-tracker>
  \`
})
export class DemoComponent {}

// 3. Structural Directive Pattern
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

// Usage
@Component({
  selector: 'app-demo',
  template: \`
    <div *appUnless="isLoading">
      Content to show when not loading
    </div>
  \`
})
export class DemoComponent {
  isLoading = false;
}

// 4. Mixin Pattern with Directives
@Directive({
  selector: '[appLoadingState]'
})
export class LoadingStateDirective implements OnInit {
  @Input() loading = false;
  
  constructor(private host: ElementRef) {}
  
  ngOnInit() {
    this.updateLoadingState();
  }
  
  @Input() set appLoadingState(loading: boolean) {
    this.loading = loading;
    this.updateLoadingState();
  }
  
  private updateLoadingState() {
    if (this.loading) {
      this.host.nativeElement.classList.add('loading');
    } else {
      this.host.nativeElement.classList.remove('loading');
    }
  }
}

// Usage
@Component({
  selector: 'app-demo',
  template: \`
    <div appLoadingState [appLoadingState]="isLoading">
      Content with loading state
    </div>
  \`
})
export class DemoComponent {
  isLoading = true;
}`,
      
      vue: `// Vue Component Composition Patterns
<template>
  <!-- 1. Compound Components Pattern -->
  <div class="tabs">
    <slot name="tab-list">
      <div class="tab-list">
        <slot name="tab" v-for="(tab, index) in tabs" 
              :key="index" 
              :tab="tab" 
              :index="index"
              :isActive="activeTab === index"
              @click="setActiveTab(index)">
        </slot>
      </div>
    </slot>
    
    <slot name="tab-panels">
      <div class="tab-panels">
        <slot name="tab-panel" v-for="(tab, index) in tabs" 
              :key="index" 
              :tab="tab" 
              :index="index"
              :isActive="activeTab === index">
        </slot>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, inject } from 'vue';

interface Tab {
  title: string;
  content: string;
}

const props = defineProps<{
  tabs: Tab[];
  defaultTab?: number;
}>();

const activeTab = ref(props.defaultTab || 0);

const setActiveTab = (index: number) => {
  activeTab.value = index;
};

// Provide context for child components
provide('tabs', {
  activeTab,
  setActiveTab
});
</script>

<!-- TabList.vue -->
<template>
  <div class="tab-list">
    <slot></slot>
  </div>
</template>

<!-- Tab.vue -->
<template>
  <button 
    class="tab" 
    :class="{ active: isActive }"
    @click="$emit('click', index)">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  isActive?: boolean;
  index?: number;
}

defineProps<Props>();
defineEmits<{
  click: [index: number];
}>();
</script>

<!-- TabPanels.vue -->
<template>
  <div class="tab-panels">
    <slot></slot>
  </div>
</template>

<!-- TabPanel.vue -->
<template>
  <div class="tab-panel" :class="{ active: isActive }">
    <slot v-if="isActive"></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isActive?: boolean;
}

defineProps<Props>();
</script>

<!-- Usage -->
<template>
  <Tabs :tabs="tabs" default-tab={0}>
    <template #tab-list>
      <TabList>
        <Tab 
          v-for="(tab, index) in tabs" 
          :key="index"
          :isActive="activeTab === index"
          @click="setActiveTab(index)">
          {{ tab.title }}
        </Tab>
      </TabList>
    </template>
    
    <template #tab-panels>
      <TabPanels>
        <TabPanel 
          v-for="(tab, index) in tabs" 
          :key="index"
          :isActive="activeTab === index">
          {{ tab.content }}
        </TabPanel>
      </TabPanels>
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tabs from './Tabs.vue';
import TabList from './TabList.vue';
import Tab from './Tab.vue';
import TabPanels from './TabPanels.vue';
import TabPanel from './TabPanel.vue';

interface Tab {
  title: string;
  content: string;
}

const tabs: Tab[] = [
  { title: 'Profile', content: 'Profile content' },
  { title: 'Settings', content: 'Settings content' },
  { title: 'Notifications', content: 'Notifications content' }
];

const activeTab = ref(0);

const setActiveTab = (index: number) => {
  activeTab.value = index;
};
</script>

<!-- 2. Render Props Pattern with Slots -->
<template>
  <div @mousemove="onMouseMove">
    <slot :position="position" :x="position.x" :y="position.y"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const position = ref({ x: 0, y: 0 });

const onMouseMove = (event: MouseEvent) => {
  position.value = { x: event.clientX, y: event.clientY };
};
</script>

<!-- Usage -->
<template>
  <MouseTracker>
    <template #default="{ position, x, y }">
      <div>Mouse position: {{ x }}, {{ y }}</div>
    </template>
  </MouseTracker>
</template>

<!-- 3. Composable Pattern (Modern Composition) -->
// useMouseTracker.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useMouseTracker() {
  const position = ref({ x: 0, y: 0 });
  
  const updatePosition = (event: MouseEvent) => {
    position.value = { x: event.clientX, y: event.clientY };
  };
  
  onMounted(() => {
    window.addEventListener('mousemove', updatePosition);
  });
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition);
  });
  
  return {
    position,
    x: position.value.x,
    y: position.value.y
  };
}

<!-- MouseTrackerComponent.vue -->
<template>
  <div>
    Mouse position: {{ x }}, {{ y }}
  </div>
</template>

<script setup lang="ts">
import { useMouseTracker } from './composables/useMouseTracker';

const { position, x, y } = useMouseTracker();
</script>

<!-- 4. Higher-Order Component Pattern with HOC -->
// withLoading.ts
import { defineComponent, h } from 'vue';

export function withLoading<T extends Record<string, any>>(
  component: T,
  loadingComponent?: any
) {
  return defineComponent({
    props: {
      ...component.props,
      loading: Boolean
    },
    setup(props, ctx) {
      if (props.loading && loadingComponent) {
        return () => h(loadingComponent);
      }
      
      return () => h(component, props, ctx.slots);
    }
  });
}

// Usage
const UserProfile = defineComponent({
  props: {
    user: Object
  },
  setup(props) {
    return () => h('div', [
      h('h1', props.user.name),
      h('p', props.user.email)
    ]);
  }
});

const LoadingSpinner = defineComponent({
  setup() {
    return () => h('div', 'Loading...');
  }
});

const UserProfileWithLoading = withLoading(UserProfile, LoadingSpinner);
</script>`
    },
    'Component Lifecycle': {
      react: `// React Component Lifecycle Patterns
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// 1. Component Lifecycle with useEffect
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Mount phase - runs once when component mounts
  useEffect(() => {
    console.log('Component mounted');
    
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]); // Dependency array - re-runs when userId changes
  
  // Update phase - runs when user changes
  useEffect(() => {
    if (user) {
      document.title = \`User: \${user.name}\`;
    }
  }, [user]);
  
  // Cleanup phase - runs when component unmounts
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    
    // Cleanup function
    return () => {
      console.log('Component unmounting - cleaning up timer');
      clearInterval(timer);
    };
  }, []); // Empty dependency array - runs only on mount/unmount
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

// 2. Custom Hook for Lifecycle Management
const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        
        // Only update state if component is still mounted
        if (isMountedRef.current) {
          setUser(userData);
        }
      } catch (err) {
        if (isMountedRef.current) {
          setError(err.message);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };
    
    fetchUser();
    
    // Cleanup function to prevent memory leaks
    return () => {
      isMountedRef.current = false;
    };
  }, [userId]);
  
  return { user, loading, error };
};

// 3. Component with Performance Optimization
const ExpensiveComponent = ({ data, onUpdate }) => {
  const [processedData, setProcessedData] = useState([]);
  
  // Memoize expensive computation
  const expensiveValue = useMemo(() => {
    console.log('Running expensive computation...');
    return data.reduce((sum, item) => sum + item.value, 0);
  }, [data]);
  
  // Memoize event handler
  const handleClick = useCallback((item) => {
    onUpdate(item);
  }, [onUpdate]);
  
  // Effect for side effects
  useEffect(() => {
    console.log('Data updated:', data.length);
    setProcessedData(data.map(item => ({ ...item, processed: true })));
  }, [data]);
  
  return (
    <div>
      <div>Total: {expensiveValue}</div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

// 4. Class Component Lifecycle (for comparison)
class UserProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }
  
  // Mount phase
  componentDidMount() {
    console.log('Component mounted');
    this.fetchUser();
    
    // Set up timer
    this.timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  }
  
  // Update phase
  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      console.log('User ID changed, fetching new user');
      this.fetchUser();
    }
  }
  
  // Unmount phase
  componentWillUnmount() {
    console.log('Component unmounting - cleaning up timer');
    clearInterval(this.timer);
  }
  
  fetchUser = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(\`/api/users/\${this.props.userId}\`);
      const userData = await response.json();
      this.setState({ user: userData, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };
  
  render() {
    const { user, loading, error } = this.state;
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    );
  }
}

// 5. Lifecycle with External Libraries
const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      // Initialize chart
      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: data
      });
    }
    
    // Cleanup chart
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Only run once
  
  useEffect(() => {
    // Update chart when data changes
    if (chartInstance.current) {
      chartInstance.current.data = data;
      chartInstance.current.update();
    }
  }, [data]);
  
  return <canvas ref={chartRef}></canvas>;
};`,
      
      angular: `// Angular Component Lifecycle Patterns
import { 
  Component, 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked,
  Input, 
  SimpleChanges,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

// 1. Basic Lifecycle Hooks
@Component({
  selector: 'app-user-profile',
  template: \`
    <div>
      <h1>{{ user?.name }}</h1>
      <p>{{ user?.email }}</p>
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error">Error: {{ error }}</div>
    </div>
  \`
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input() userId: string;
  
  user: User | null = null;
  loading = false;
  error = string | null = null;
  private destroy$ = new Subject<void>();
  
  // Constructor - called first
  constructor(private userService: UserService) {
    console.log('Constructor called');
  }
  
  // ngOnChanges - called when input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
    
    if (changes['userId'] && !changes['userId'].firstChange) {
      this.loadUser();
    }
  }
  
  // ngOnInit - called after component is initialized
  ngOnInit() {
    console.log('ngOnInit called');
    this.loadUser();
    
    // Set up subscriptions
    this.setupSubscriptions();
  }
  
  // ngAfterContentInit - called after content is projected
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  
  // ngAfterContentChecked - called after content is checked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  
  // ngAfterViewInit - called after view is initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    this.setupView();
  }
  
  // ngAfterViewChecked - called after view is checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  
  // ngOnDestroy - called when component is destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy called - cleaning up');
    this.cleanup();
  }
  
  private loadUser() {
    this.loading = true;
    this.userService.getUser(this.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.user = user;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        }
      });
  }
  
  private setupSubscriptions() {
    // Example: Listen to global events
    this.eventService.userUpdated$
      .pipe(takeUntil(this.destroy$))
      .subscribe(updatedUser => {
        if (updatedUser.id === this.userId) {
          this.user = updatedUser;
        }
      });
  }
  
  private setupView() {
    // Example: Initialize third-party libraries
    if (this.chartElement) {
      this.initializeChart();
    }
  }
  
  private cleanup() {
    this.destroy$.next();
    this.destroy$.complete();
    
    // Clean up timers, subscriptions, etc.
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}

// 2. Lifecycle with ViewChild
@Component({
  selector: 'app-chart',
  template: \`
    <div #chartContainer></div>
  \`
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer', { static: false }) 
  chartContainer: ElementRef;
  
  private chartInstance: any;
  
  ngAfterViewInit() {
    // View is ready, initialize chart
    this.initializeChart();
  }
  
  ngOnDestroy() {
    // Clean up chart instance
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
  
  private initializeChart() {
    this.chartInstance = new Chart(this.chartContainer.nativeElement, {
      type: 'bar',
      data: this.chartData
    });
  }
}

// 3. Lifecycle with Change Detection
@Component({
  selector: 'app-performance-component',
  template: \`
    <div>
      <p>Expensive value: {{ expensiveValue }}</p>
      <button (click)="updateData()">Update Data</button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent implements OnInit, OnDestroy {
  @Input() data: any[];
  
  expensiveValue: number;
  private data$ = new BehaviorSubject<any[]>([]);
  
  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}
  
  ngOnInit() {
    // Calculate expensive value only when data changes
    this.data$.pipe(
      map(data => this.calculateExpensiveValue(data)),
      distinctUntilChanged()
    ).subscribe(value => {
      this.expensiveValue = value;
      this.cdr.markForCheck(); // Trigger change detection
    });
    
    this.data$.next(this.data);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.data$.next(changes['data'].currentValue);
    }
  }
  
  updateData() {
    // Run outside Angular zone for performance
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        const newData = this.generateNewData();
        this.zone.run(() => {
          this.data = newData;
          this.data$.next(newData);
        });
      }, 0);
    });
  }
  
  private calculateExpensiveValue(data: any[]): number {
    console.log('Calculating expensive value...');
    return data.reduce((sum, item) => sum + item.value, 0);
  }
  
  ngOnDestroy() {
    this.data$.complete();
  }
}

// 4. Lifecycle with Router Events
@Component({
  selector: 'app-route-aware',
  template: \`
    <div>
      <p>Current route: {{ currentRoute }}</p>
      <p>Navigation count: {{ navigationCount }}</p>
    </div>
  \`
})
export class RouteAwareComponent implements OnInit, OnDestroy {
  currentRoute: string;
  navigationCount = 0;
  private routerSubscription: Subscription;
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    // Listen to router events
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.navigationCount++;
      }
    });
  }
  
  ngOnDestroy() {
    // Clean up router subscription
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}`,
      
      vue: `// Vue Component Lifecycle Patterns
<template>
  <div>
    <h1>{{ user?.name }}</h1>
    <p>{{ user?.email }}</p>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { 
  ref, 
  onMounted, 
  onUnmounted, 
  onUpdated, 
  onBeforeMount, 
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onActivated,
  onErrorCaptured,
  watch,
  watchEffect,
  nextTick,
  computed
} from 'vue';
import type { Ref } from 'vue';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Props {
  userId: string;
}

const props = defineProps<Props>();

// Reactive state
const user: Ref<User | null> = ref(null);
const loading = ref(false);
const error = ref<string | null>(null);
const chartContainer = ref<HTMLElement>();
const chartInstance = ref<any>();

// 1. Lifecycle Hooks
onBeforeMount(() => {
  console.log('onBeforeMount: Component is about to mount');
});

onMounted(() => {
  console.log('onMounted: Component has been mounted');
  loadUser();
  initializeChart();
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate: Component is about to update');
});

onUpdated(() => {
  console.log('onUpdated: Component has been updated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount: Component is about to unmount');
  cleanup();
});

onUnmounted(() => {
  console.log('onUnmounted: Component has been unmounted');
});

// 2. Watchers (similar to ngOnChanges)
watch(
  () => props.userId,
  (newUserId, oldUserId) => {
    console.log(\`User ID changed from \${oldUserId} to \${newUserId}\`);
    if (newUserId !== oldUserId) {
      loadUser();
    }
  },
  { immediate: true }
);

// 3. Watch Effect (automatic dependency tracking)
watchEffect(() => {
  console.log('User changed:', user.value?.name);
  if (user.value) {
    document.title = \`User: \${user.value.name}\`;
  }
});

// 4. Computed (expensive calculations)
const expensiveValue = computed(() => {
  console.log('Calculating expensive value...');
  // This will only re-calculate when dependencies change
  return user.value ? user.value.id.length * 10 : 0;
});

// 5. Methods
const loadUser = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    const response = await fetch(\`/api/users/\${props.userId}\`);
    const userData: User = await response.json();
    
    user.value = userData;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
  } finally {
    loading.value = false;
  }
};

const initializeChart = async () => {
  await nextTick(); // Wait for DOM to be updated
  
  if (chartContainer.value) {
    // Initialize third-party chart library
    chartInstance.value = new Chart(chartContainer.value, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          label: 'Data',
          data: [1, 2, 3]
        }]
      }
    });
  }
};

const cleanup = () => {
  // Clean up timers, subscriptions, etc.
  if (chartInstance.value) {
    chartInstance.value.destroy();
    chartInstance.value = null;
  }
};

// 6. Error handling
onErrorCaptured((err, instance, info) => {
  console.error('Error captured:', err, info);
  error.value = 'An error occurred in the component';
  return false; // Prevent error from propagating further
});

// 7. Keep-alive hooks (for components wrapped with <KeepAlive>)
onActivated(() => {
  console.log('Component activated (from keep-alive)');
  // Refresh data when component becomes active
  loadUser();
});

onDeactivated(() => {
  console.log('Component deactivated (from keep-alive)');
  // Pause timers, subscriptions, etc.
});

// 8. Cleanup on unmount
onUnmounted(() => {
  cleanup();
});
</script>

<!-- 9. Composition API with Custom Composables -->
// useUserProfile.ts
import { ref, watch, onUnmounted } from 'vue';

export function useUserProfile(userId: string) {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);
  
  let abortController: AbortController | null = null;
  
  const loadUser = async () => {
    if (abortController) {
      abortController.abort();
    }
    
    abortController = new AbortController();
    
    try {
      loading.value = true;
      error.value = null;
      
      const response = await fetch(\`/api/users/\${userId}\`, {
        signal: abortController.signal
      });
      
      if (!response.ok) {
        throw new Error('Failed to load user');
      }
      
      user.value = await response.json();
    } catch (err) {
      if (err.name !== 'AbortError') {
        error.value = err instanceof Error ? err.message : 'Unknown error';
      }
    } finally {
      loading.value = false;
    }
  };
  
  // Watch for userId changes
  watch(() => userId, loadUser, { immediate: true });
  
  // Cleanup
  onUnmounted(() => {
    if (abortController) {
      abortController.abort();
    }
  });
  
  return {
    user,
    loading,
    error,
    refetch: loadUser
  };
}

<!-- Usage in component -->
<template>
  <div>
    <UserProfile :user-id="currentUserId" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';

const currentUserId = ref('123');
</script>

<!-- 10. Lifecycle with Suspense -->
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading async component...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() => 
  import('./AsyncComponent.vue')
);
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

interface ComponentDesignPrincipleProps {
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
  useCases: string[];
}

const ComponentDesignPrincipleCard: React.FC<ComponentDesignPrincipleProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  category, 
  complexity,
  frameworks,
  benefits,
  challenges,
  useCases
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
              {useCases.slice(0, isExpanded ? useCases.length : 3).map((useCase, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {useCase}
                </span>
              ))}
              {!isExpanded && useCases.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{useCases.length - 3} more
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
            {isExpanded ? (
              <span className="flex items-center justify-center gap-2">
                <ChevronUp className="w-4 h-4" />
                Show Less
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ChevronDown className="w-4 h-4" />
                Show More
              </span>
            )}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const ComponentDesignPrinciples: React.FC = () => {
  const componentPrinciples = [
    {
      title: 'Single Responsibility Principle',
      description: 'Each component should have one reason to change and one primary responsibility',
      icon: Puzzle,
      color: 'bg-blue-500',
      category: 'Core Principle',
      complexity: 'Beginner',
      frameworks: {
        react: ['Hooks', 'Functional Components', 'Custom Hooks', 'Composition'],
        angular: ['Services', 'Components', 'Dependency Injection', 'Directives'],
        vue: ['Composition API', 'Composables', 'Components', 'Mixins']
      },
      benefits: [
        'Easier to test and debug',
        'Better code organization',
        'Improved reusability',
        'Reduced coupling',
        'Clearer intent'
      ],
      challenges: [
        'May require more components',
        'Initial learning curve',
        'Over-engineering risk',
        'Component explosion'
      ],
      useCases: [
        'Form validation components',
        'Data fetching hooks',
        'UI element components',
        'Business logic components',
        'Service abstractions'
      ]
    },
    {
      title: 'Component Composition',
      description: 'Building complex components by combining simpler, reusable components',
      icon: Layers,
      color: 'bg-purple-500',
      category: 'Composition Pattern',
      complexity: 'Intermediate',
      frameworks: {
        react: ['Compound Components', 'Render Props', 'HOC', 'Custom Hooks'],
        angular: ['Content Projection', 'Template Refs', 'Structural Directives', 'Mixins'],
        vue: ['Slots', 'Provide/Inject', 'Composables', 'Mixins']
      },
      benefits: [
        'Flexible component APIs',
        'Code reusability',
        'Separation of concerns',
        'Better maintainability',
        'Enhanced testability'
      ],
      challenges: [
        'Complex prop drilling',
        'Learning curve',
        'Performance overhead',
        'Debugging complexity'
      ],
      useCases: [
        'Tab components',
        'Modal dialogs',
        'Form builders',
        'Navigation menus',
        'Data tables'
      ]
    },
    {
      title: 'Component Lifecycle',
      description: 'Understanding and managing component lifecycle events for optimal performance',
      icon: RefreshCw,
      color: 'bg-green-500',
      category: 'Lifecycle Management',
      complexity: 'Intermediate',
      frameworks: {
        react: ['useEffect', 'useLayoutEffect', 'useMemo', 'useCallback', 'Class Lifecycle'],
        angular: ['ngOnInit', 'ngOnChanges', 'ngOnDestroy', 'AfterViewInit', 'OnPush'],
        vue: ['onMounted', 'onUpdated', 'onUnmounted', 'watchEffect', 'Suspense']
      },
      benefits: [
        'Optimized performance',
        'Proper resource cleanup',
        'Better memory management',
        'Controlled side effects',
        'Predictable behavior'
      ],
      challenges: [
        'Memory leaks risk',
        'Complex state management',
        'Performance tuning',
        'Debugging timing issues'
      ],
      useCases: [
        'Data synchronization',
        'External library integration',
        'Timer management',
        'Event listeners',
        'WebSocket connections'
      ]
    },
    {
      title: 'Component Communication',
      description: 'Patterns for effective data flow and communication between components',
      icon: GitBranch,
      color: 'bg-orange-500',
      category: 'Communication Pattern',
      complexity: 'Intermediate',
      frameworks: {
        react: ['Props', 'Context API', 'Redux', 'Event Emitters', 'Zustand'],
        angular: ['Services', 'EventEmitter', 'RxJS', 'NgRx', 'Signals'],
        vue: ['Props/Events', 'Provide/Inject', 'Vuex', 'Pinia', 'Event Bus']
      },
      benefits: [
        'Clear data flow',
        'Loose coupling',
        'Scalable architecture',
        'Better debugging',
        'Type safety'
      ],
      challenges: [
        'Prop drilling',
        'Performance overhead',
        'Complex state sync',
        'Learning curve'
      ],
      useCases: [
        'Theme switching',
        'User authentication',
        'Shopping cart',
        'Real-time updates',
        'Form validation'
      ]
    },
    {
      title: 'Component Testing',
      description: 'Comprehensive testing strategies for reliable and maintainable components',
      icon: CheckCircle,
      color: 'bg-red-500',
      category: 'Testing Strategy',
      complexity: 'Advanced',
      frameworks: {
        react: ['Jest', 'React Testing Library', 'Cypress', 'Storybook', 'MSW'],
        angular: ['Jasmine', 'Karma', 'Testing Library', 'Cypress', 'TestBed'],
        vue: ['Vitest', 'Vue Test Utils', 'Cypress', 'Storybook', 'Jest']
      },
      benefits: [
        'Improved code quality',
        'Regression prevention',
        'Better documentation',
        'Refactoring confidence',
        'Team collaboration'
      ],
      challenges: [
        'Initial setup complexity',
        'Test maintenance overhead',
        'Mocking complexity',
        'Performance testing'
      ],
      useCases: [
        'Component unit tests',
        'Integration testing',
        'E2E testing',
        'Visual regression',
        'Accessibility testing'
      ]
    },
    {
      title: 'Component Optimization',
      description: 'Performance optimization techniques for faster and more efficient components',
      icon: Zap,
      color: 'bg-yellow-500',
      category: 'Performance Pattern',
      complexity: 'Advanced',
      frameworks: {
        react: ['React.memo', 'useMemo', 'useCallback', 'Code Splitting', 'Lazy Loading'],
        angular: ['OnPush', 'TrackBy', 'Lazy Loading', 'Web Workers', 'Signals'],
        vue: ['v-memo', 'computed', 'watch', 'Async Components', 'KeepAlive']
      },
      benefits: [
        'Better performance',
        'Reduced bundle size',
        'Improved user experience',
        'Lower resource usage',
        'Better SEO'
      ],
      challenges: [
        'Complex optimization',
        'Debugging difficulty',
        'Over-optimization risk',
        'Browser compatibility'
      ],
      useCases: [
        'Large data lists',
        'Real-time dashboards',
        'Image galleries',
        'Complex forms',
        'Mobile applications'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Component Design Principles"
        description="Master the fundamental principles of component design to build scalable, maintainable, and reusable frontend applications. Learn about single responsibility, composition patterns, lifecycle management, and optimization techniques."
        category="Frontend System Design"
        icon={Component}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {componentPrinciples.map((principle, index) => (
          <ComponentDesignPrincipleCard
            key={index}
            {...principle}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentDesignPrinciples;
