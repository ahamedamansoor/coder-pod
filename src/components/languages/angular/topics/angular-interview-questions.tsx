'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, BookOpen, Code, Zap, Shield, Cpu, Lightbulb, Rocket, Target, Layers, Puzzle, Package, GitBranch, Smartphone, Monitor, Tablet, Wrench, FileCode, Terminal, Play, Pause, SkipForward, RotateCw, Download, Upload, RefreshCw, Save, Trash2, Edit, Eye, EyeOff, Lock, Unlock, Key, Link, Unlink, Plus, Minus, X, Menu, Home, Search, Filter, ChevronUp, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, TrendingUp, TrendingDown, Activity, BarChart, PieChart, LineChart, Calendar, Timer, Hourglass, Sun, Moon, Cloud, CloudRain, CloudSnow, Wind, Battery, Wifi, Usb, Bluetooth, Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Camera, CameraOff, Image, File, FileText, FileImage, FileVideo, FileAudio, Folder, FolderOpen, Archive, Share, Share2, Copy, Undo, Redo, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Indent, Outdent, Quote, Database, Globe, Mail, Phone, MessageSquare, User, UserPlus, UserMinus, UserCheck, UserX, Settings2, HelpCircle, Info, AlertCircle, AlertTriangle, CheckCircle, XCircle, Loader, Loader2, MoreVertical, MoreHorizontal, Star } from 'lucide-react';
import { marked } from 'marked';
import InterviewHeader from '@/components/shared/interview-header';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const easyQuestions = [
  {
    question: "What is Angular and its main features?",
    idealAnswer: `**Angular** is a TypeScript-based framework for building client-side applications.

**Key Features:**
- **Component-based**: Modular architecture with reusable components
- **TypeScript**: Strong typing and better tooling
- **Dependency Injection**: Built-in DI system for services
- **Routing**: Single-page application routing
- **Forms**: Template-driven and reactive forms
- **HTTP Client**: Built-in HTTP service
- **RxJS**: Reactive programming with observables

**Example:**
\`\`\`typescript
@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>'
})
export class AppComponent {
  title = 'My Angular App';
}
\`\`\``
  },
  {
    question: "What are Angular components?",
    idealAnswer: `**Components** are the basic building blocks of Angular applications.

**Structure:**
- **Class**: Contains component logic
- **Template**: HTML template with bindings
- **Metadata**: Component configuration with @Component decorator
- **Styles**: Component-specific CSS

**Example:**
\`\`\`typescript
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() name: string;
  @Output() nameChanged = new EventEmitter<string>();
}
\`\`\`

**Lifecycle Hooks:**
- ngOnInit, ngOnDestroy, ngOnChanges, etc.`
  },
  {
    question: "What is Angular CLI?",
    idealAnswer: `**Angular CLI** is a command-line interface for Angular development.

**Common Commands:**
\`\`\`bash
# Create new project
ng new my-app

# Generate components/services
ng generate component user-list
ng generate service user

# Build and serve
ng build
ng serve

# Run tests
ng test
ng e2e
\`\`\`

**Features:**
- Project scaffolding
- Code generation
- Building and serving
- Testing support
- Configuration management`
  },
  {
    question: "What are Angular directives?",
    idealAnswer: `**Directives** modify DOM elements and component behavior.

**Types:**
1. **Components**: Directives with templates
2. **Structural**: Change DOM structure (*ngIf, *ngFor)
3. **Attribute**: Change element appearance (ngClass, ngStyle)

**Examples:**
\`\`\`typescript
// Structural directive
*ngIf="isVisible"

// Attribute directive
[ngClass]="{'active': isActive}"

// Custom directive
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective { }
\`\`\``
  },
  {
    question: "What is data binding in Angular?",
    idealAnswer: `**Data Binding** synchronizes data between component and template.

**Types:**
- **Interpolation**: {{data}}
- **Property Binding**: [property]="data"
- **Event Binding**: (event)="handler"
- **Two-way Binding**: [(ngModel)]="data"

**Example:**
\`\`\`html
<!-- Interpolation -->
<h1>{{title}}</h1>

<!-- Property binding -->
<img [src]="imageUrl">

<!-- Event binding -->
<button (click)="save()">Save</button>

<!-- Two-way binding -->
<input [(ngModel)]="userName">
\`\`\``
  },
  {
    question: "What is dependency injection in Angular?",
    idealAnswer: `**Dependency Injection** is a design pattern for providing dependencies.

**How it works:**
- **Providers**: Configure how services are created
- **Injectors**: Create and inject dependencies
- **Tokens**: Identify dependencies

**Example:**
\`\`\`typescript
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() { return []; }
}

@Component({
  selector: 'app-user-list',
  template: '...'
})
export class UserListComponent {
  constructor(private userService: UserService) {}
}
\`\`\``
  },
  {
    question: "What are Angular services?",
    idealAnswer: `**Services** are reusable classes for application logic.

**Characteristics:**
- **Singleton**: Single instance per injector
- **Injectable**: Can be injected into components
- **Stateless**: Typically contain business logic

**Example:**
\`\`\`typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$ = new BehaviorSubject<any[]>([]);

  getData() {
    return this.data$.asObservable();
  }

  addData(item: any) {
    const current = this.data$.value;
    this.data$.next([...current, item]);
  }
}
\`\`\``
  },
  {
    question: "What is Angular routing?",
    idealAnswer: `**Routing** enables navigation between different views in SPA.

**Basic Setup:**
\`\`\`typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
\`\`\`

**Navigation:**
\`\`\`html
<!-- Router outlet -->
<router-outlet></router-outlet>

<!-- Navigation links -->
<a routerLink="/users">Users</a>
<a [routerLink]="['/users', userId]">User Detail</a>
\`\`\``
  },
  {
    question: "What are Angular lifecycle hooks?",
    idealAnswer: `**Lifecycle Hooks** allow you to tap into component lifecycle events.

**Main Hooks:**
- **ngOnChanges**: When input properties change
- **ngOnInit**: After component initialization
- **ngDoCheck**: During change detection
- **ngAfterContentInit**: After content projection
- **ngAfterContentChecked**: After content check
- **ngAfterViewInit**: After view initialization
- **ngAfterViewChecked**: After view check
- **ngOnDestroy**: Before component destruction

**Example:**
\`\`\`typescript
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.service.getData().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
\`\`\``
  },
  {
    question: "What are Angular modules?",
    idealAnswer: `**Modules** organize applications into cohesive blocks of functionality.

**App Module:**
\`\`\`typescript
@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
\`\`\`

**Feature Module:**
\`\`\`typescript
@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule { }
\`\`\`

**Benefits:**
- Code organization
- Lazy loading
- Reusability
- Scope management`
  },
  {
    question: "What is Angular interpolation?",
    idealAnswer: `**Interpolation** displays component data in templates using double curly braces.

**Syntax:**
\`\`\`html
<p>{{ message }}</p>
<h1>{{ user.name }}</h1>
<span>{{ price | currency }}</span>
\`\`\`

**Features:**
- Displays expressions
- Supports pipes
- Automatic updates
- Type-safe with TypeScript

**Example:**
\`\`\`typescript
@Component({
  template: '<h2>{{title}} - {{count}}</h2>'
})
export class ExampleComponent {
  title = 'Dashboard';
  count = 42;
}
\`\`\``
  },
  {
    question: "What are Angular pipes?",
    idealAnswer: `**Pipes** transform data for display in templates.

**Built-in Pipes:**
\`\`\`html
{{ date | date:'short' }}
{{ text | uppercase }}
{{ number | currency:'USD' }}
{{ array | json }}
\`\`\`

**Custom Pipe:**
\`\`\`typescript
@Pipe({ name: 'excerpt' })
export class ExcerptPipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
\`\`\`

**Usage:**
\`\`\`html
<p>{{ longText | excerpt:50 }}</p>
\`\`\``
  },
  {
    question: "What is Angular Forms?",
    idealAnswer: `**Forms** handle user input with two approaches: Template-driven and Reactive.

**Template-driven:**
\`\`\`html
<form #userForm="ngForm">
  <input name="name" ngModel required>
  <button type="submit" [disabled]="!userForm.valid">Submit</button>
</form>
\`\`\`

**Reactive Forms:**
\`\`\`typescript
this.userForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email])
});
\`\`\`

**Features:**
- Validation
- Two-way binding
- Form controls
- Custom validators`
  },
  {
    question: "What is Angular HttpClient?",
    idealAnswer: `**HttpClient** provides HTTP client functionality for Angular applications.

**Basic Usage:**
\`\`\`typescript
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('/api/data');
  }

  createData(item: any): Observable<any> {
    return this.http.post<any>('/api/data', item);
  }
}
\`\`\`

**Features:**
- Typed responses
- Error handling
- Interceptors
- Request/response transformation
- JSON parsing`
  },
  {
    question: "What is Angular RxJS?",
    idealAnswer: `**RxJS** (Reactive Extensions) is a library for reactive programming with observables.

**Key Concepts:**
- **Observables**: Streams of data over time
- **Operators**: Transform data streams
- **Subjects**: Multicast observables
- **Subscriptions**: Manage observable lifecycle

**Example:**
\`\`\`typescript
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const data$ = of([1, 2, 3, 4, 5]);

data$.pipe(
  filter(n => n % 2 === 0),
  map(n => n * 2)
).subscribe(result => console.log(result));
\`\`\`

**Common Operators:**
- map, filter, mergeMap, switchMap
- debounceTime, distinctUntilChanged
- catchError, retry`
  },
  {
    question: "What is Angular Change Detection and how does it work?",
    idealAnswer: `**Change Detection** is Angular's mechanism for synchronizing the model with the view.

**How it Works:**
- **Zone.js**: Monitors async operations and triggers change detection
- **Component Tree**: Traverses from root to child components
- **Dirty Checking**: Compares current and previous values

**Change Detection Strategies:**
\`\`\`typescript
@Component({
  selector: 'app-default',
  template: '<div>{{ data }}</div>',
  // Default strategy - checks all components
  changeDetection: ChangeDetectionStrategy.Default
})

@Component({
  selector: 'app-on-push',
  template: '<div>{{ data }}</div>',
  // OnPush strategy - checks only when inputs change
  changeDetection: ChangeDetectionStrategy.OnPush
})
\`\`\`

**Manual Change Detection:**
\`\`\`typescript
constructor(private cdr: ChangeDetectorRef) {}

updateView() {
  this.cdr.detectChanges(); // Force change detection
  this.cdr.markForCheck(); // Mark for future check
}
\`\`\`

**Key Points:**
- **Default**: Checks every component after async events
- **OnPush**: Checks only when @Input() references change
- **Performance**: OnPush is more efficient for large applications`
  },
  {
    question: "What are Angular Directives and how do they differ from components?",
    idealAnswer: `**Directives** are classes that add behavior to elements in Angular applications.

**Types of Directives:**

**1. Components** (Directives with templates)
\`\`\`typescript
@Component({
  selector: 'app-user-card',
  template: '<div>{{ user.name }}</div>'
})
export class UserCardComponent {
  @Input() user: User;
}
\`\`\`

**2. Structural Directives** (Change DOM structure)
\`\`\`typescript
@Directive({ selector: '[appIf]' })
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  
  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
\`\`\`

**3. Attribute Directives** (Change appearance/behavior)
\`\`\`typescript
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input() appHighlight = '';
  
  constructor(private el: ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
\`\`\`

**Key Differences:**
- **Components**: Have templates, inputs/outputs, lifecycle hooks
- **Directives**: No templates, modify existing elements
- **Usage**: Components for UI, Directives for behavior`
  },
  {
    question: "What is Angular Dependency Injection and how does it work?",
    idealAnswer: `**Dependency Injection (DI)** is a design pattern for supplying dependencies to classes.

**How DI Works in Angular:**

**1. Providers** (Create dependencies)
\`\`\`typescript
@Injectable({
  providedIn: 'root' // Available app-wide
})
export class DataService {
  getData() { return []; }
}

// Or in module
@NgModule({
  providers: [DataService]
})
export class AppModule {}
\`\`\`

**2. Injectors** (Manage dependencies)
\`\`\`typescript
@Component({
  selector: 'app-user',
  template: '<div>{{ users }}</div>'
})
export class UserComponent {
  // Constructor injection
  constructor(private dataService: DataService) {}
  
  users = this.dataService.getData();
}
\`\`\`

**3. Injection Tokens** (For non-class dependencies)
\`\`\`typescript
export const API_URL = new InjectionToken<string>('api-url');

// Provider
{ provide: API_URL, useValue: 'https://api.example.com' }

// Injection
constructor(@Inject(API_URL) private apiUrl: string) {}
\`\`\`

**Provider Types:**
- **useClass**: Create instance of class
- **useValue**: Use specific value
- **useFactory**: Create with factory function
- **useExisting**: Alias to existing provider

**Benefits:**
- **Testability**: Easy to mock dependencies
- **Maintainability**: Loose coupling
- **Reusability**: Share instances across app`
  },
  {
    question: "What are Angular Pipes and how do you create custom pipes?",
    idealAnswer: `**Pipes** transform data for display in templates.

**Built-in Pipes:**
\`\`\`typescript
// Date pipe
{{ birthday | date:'shortDate' }}

// Currency pipe
{{ price | currency:'USD':'symbol' }}

// Upper case pipe
{{ name | uppercase }}
\`\`\`

**Custom Pipe:**
\`\`\`typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt',
  standalone: true
})
export class ExcerptPipe implements PipeTransform {
  transform(value: string, length: number = 100): string {
    if (!value) return '';
    return value.length > length 
      ? value.substring(0, length) + '...' 
      : value;
  }
}
\`\`\`

**Using Custom Pipe:**
\`\`\`typescript
@Component({
  selector: 'app-article',
  template: '<p>{{ content | excerpt:150 }}</p>',
  standalone: true,
  imports: [ExcerptPipe]
})
export class ArticleComponent {
  content = 'Long article content...';
}
\`\`\`

**Pure vs Impure Pipes:**
\`\`\`typescript
@Pipe({
  name: 'random',
  pure: false // Re-evaluates on every change detection
})
export class RandomPipe implements PipeTransform {
  transform() {
    return Math.random();
  }
}
\`\`\`

**Key Points:**
- **Pure**: Only re-evaluate when input changes
- **Impure**: Re-evaluate on every change detection
- **Performance**: Pure pipes are more efficient`
  },
  {
    question: "What are Angular Services and when should you use them?",
    idealAnswer: `**Services** are classes for sharing data and logic across components.

**When to Use Services:**
- **Data sharing** between components
- **Business logic** separation
- **External API** communication
- **State management**

**Creating a Service:**
\`\`\`typescript
@Injectable({
  providedIn: 'root' // Singleton service
})
export class UserService {
  private users$ = new BehaviorSubject<User[]>([]);
  
  getUsers(): Observable<User[]> {
    return this.users$.asObservable();
  }
  
  addUser(user: User) {
    const currentUsers = this.users$.value;
    this.users$.next([...currentUsers, user]);
  }
}
\`\`\`

**Using Services in Components:**
\`\`\`typescript
@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngFor="let user of users | async">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
\`\`\`

**Service Scopes:**
\`\`\`typescript
// App-wide (singleton)
@Injectable({ providedIn: 'root' })

// Module-specific
@NgModule({
  providers: [UserService]
})
export class FeatureModule {}

// Component-specific
@Component({
  providers: [UserService]
})
\`\`\`

**Best Practices:**
- **Single Responsibility**: One service per concern
- **Stateless**: Prefer stateless when possible
- **Observable**: Use observables for data streams`
  }
];

const mediumQuestions = [
  {
    question: "What are custom validators in Angular reactive forms?",
    idealAnswer: `**Custom Validators** allow you to create validation logic specific to your application.

**Simple Custom Validator:**
\`\`\`typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    
    if (!value) return null;
    
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;
    
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && isValidLength;
    
    return !passwordValid ? { weakPassword: true } : null;
  };
}

// Usage
this.registrationForm = new FormGroup({
  password: new FormControl('', [Validators.required, passwordValidator()])
});
\`\`\`

**Cross-Field Validator:**
\`\`\`typescript
export function passwordMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    
    return password && confirmPassword && password !== confirmPassword
      ? { passwordMismatch: true }
      : null;
  };
}
\`\`\`

**Async Validator:**
\`\`\`typescript
export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.checkEmailAvailability(control.value).pipe(
      map(isAvailable => isAvailable ? null : { emailTaken: true }),
      catchError(() => of(null))
    );
  };
}
\`\`\``
  },
  {
    question: "What are FormArray and FormGroup in Angular reactive forms?",
    idealAnswer: `**FormGroup** and **FormArray** are containers for form controls with different use cases.

**FormGroup Example:**
\`\`\`typescript
// User profile form
this.userForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl('', Validators.pattern('^\\d{5}$'))
  })
});

// Access nested controls
const nameControl = this.userForm.get('name');
const streetControl = this.userForm.get('address.street');
\`\`\`

**FormArray Example:**
\`\`\`typescript
// Dynamic phone numbers array
this.userForm = new FormGroup({
  name: new FormControl('', Validators.required),
  phones: new FormArray([new FormControl('', Validators.required)])
});

// Helper methods
get phones(): FormArray {
  return this.userForm.get('phones') as FormArray;
}

addPhone(): void {
  this.phones.push(new FormControl('', Validators.required));
}

removePhone(index: number): void {
  this.phones.removeAt(index);
}
\`\`\`

**Nested FormArray:**
\`\`\`typescript
// Complex form with nested arrays
this.orderForm = new FormGroup({
  customer: new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email)
  }),
  items: new FormArray([])
});

addItem(): void {
  const itemGroup = new FormGroup({
    productId: new FormControl('', Validators.required),
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    price: new FormControl('', Validators.required)
  });
  
  this.orderItems.push(itemGroup);
}
\`\`\``
  },
  {
    question: "What are Angular HTTP client and error handling?",
    idealAnswer: `**Angular HTTP Client** provides a simplified API for HTTP requests with built-in error handling.

**Basic HTTP Operations:**
\`\`\`typescript
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'https://api.example.com';
  
  constructor(private http: HttpClient) {}
  
  // GET request
  getData(): Observable<any[]> {
    return this.http.get<any[]>(\`\${this.apiUrl}/data\`).pipe(
      catchError(this.handleError)
    );
  }
  
  // POST request
  createData(item: any): Observable<any> {
    return this.http.post<any>(\`\${this.apiUrl}/data\`, item).pipe(
      catchError(this.handleError)
    );
  }
  
  // Error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
      return throwError(() => 'Something bad happened; please try again later.');
    } else {
      // Server-side error
      console.error(\`Backend returned code \${error.status}, body was: \${error.error}\`);
      return throwError(() => \`Server error: \${error.status}\`);
    }
  }
}
\`\`\`

**HTTP Headers and Options:**
\`\`\`typescript
// Request with headers
getDataWithAuth(): Observable<any[]> {
  const headers = new HttpHeaders({
    'Authorization': \`Bearer \${this.authService.getToken()}\`,
    'Content-Type': 'application/json'
  });
  
  return this.http.get<any[]>(\`\${this.apiUrl}/data\`, { headers });
}

// Request with parameters
getUsers(page: number, size: number): Observable<any> {
  const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
  
  return this.http.get<any>(\`\${this.apiUrl}/users\`, { params });
}
\`\`\`

**HTTP Interceptors:**
\`\`\`typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        
        const errorMessage = error.error?.message || 'An error occurred';
        this.notificationService.showError(errorMessage);
        
        return throwError(() => error);
      })
    );
  }
}
\`\`\``
  },
  {
    question: "What are Angular testing utilities and best practices?",
    idealAnswer: `**Angular Testing Utilities** provide tools for unit and integration testing.

**Component Testing:**
\`\`\`typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should display user name', () => {
    component.user = { id: 1, name: 'John Doe' };
    fixture.detectChanges();
    
    const nameElement = fixture.debugElement.query(By.css('.user-name'));
    expect(nameElement.nativeElement.textContent).toContain('John Doe');
  });
  
  it('should call saveUser when save button clicked', () => {
    spyOn(component, 'saveUser');
    const saveButton = fixture.debugElement.query(By.css('.save-button'));
    saveButton.nativeElement.click();
    expect(component.saveUser).toHaveBeenCalled();
  });
});
\`\`\`

**Service Testing:**
\`\`\`typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    
    const req = httpMock.expectOne(\`\${service.apiUrl}/users\`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});
\`\`\`

**Best Practices:**
- **AAA Pattern**: Arrange, Act, Assert
- **Descriptive Tests**: Clear test names and descriptions
- **Isolation**: Test one thing at a time
- **Mock Dependencies**: Use mocks for external dependencies
- **Test Coverage**: Cover happy paths, edge cases, and error scenarios`
  },
  {
    question: "What are Angular modules and feature modules?",
    idealAnswer: `**Angular Modules** organize applications into cohesive blocks of functionality.

**Root Module (AppModule):**
\`\`\`typescript
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, CoreModule, SharedModule],
  providers: [{ provide: APP_CONFIG, useValue: appConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
\`\`\`

**Feature Module:**
\`\`\`typescript
@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, RouterModule.forChild([
    { path: '', component: UserListComponent },
    { path: ':id', component: UserDetailComponent },
    { path: 'new', component: UserFormComponent }
  ])],
  providers: [UserService, UserResolver]
})
export class UserModule { }
\`\`\`

**Shared Module:**
\`\`\`typescript
@NgModule({
  declarations: [ButtonComponent, CardComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent, CardComponent, LoadingSpinnerComponent]
})
export class SharedModule { }
\`\`\`

**Core Module:**
\`\`\`typescript
@NgModule({
  imports: [HttpClientModule, TranslateModule.forRoot()],
  providers: [
    // Singleton services
    AuthService, LoggerService, ErrorService,
    // Guards and interceptors
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported only in AppModule');
    }
  }
}
\`\`\`

**Lazy Loading:**
\`\`\`typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'users', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];
\`\`\`

**Module Types:**
- **Root Module**: Entry point of the application
- **Feature Module**: Specific functionality (users, admin, etc.)
- **Shared Module**: Reusable components and pipes
- **Core Module**: Singleton services and global configuration`
  },
  {
    question: "What are Angular pipes and custom pipes?",
    idealAnswer: `**Pipes** transform data for display in templates.

**Built-in Pipes Usage:**
\`\`\`typescript
@Component({
  template: \`
    <p>{{ user.name | uppercase }}</p>
    <p>{{ user.createdAt | date:'shortDate' }}</p>
    <p>{{ price | currency:'USD':'symbol' }}</p>
    <p>{{ description | slice:0:50 }}...</p>
    <p>{{ items | json }}</p>
    <p>{{ percentage | number:'1.2-2' }}</p>
  \`
})
export class UserComponent {
  user = { name: 'john doe', createdAt: new Date() };
  price = 1234.56;
  description = 'This is a long description that needs to be truncated';
  items = [{ id: 1, name: 'Item 1' }];
  percentage = 0.7567;
}
\`\`\`

**Custom Pipe:**
\`\`\`typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt',
  standalone: true
})
export class ExcerptPipe implements PipeTransform {
  transform(value: string, limit: number = 100, suffix: string = '...'): string {
    if (!value) return '';
    
    if (value.length <= limit) {
      return value;
    }
    
    return value.substring(0, limit) + suffix;
  }
}
\`\`\`

**Advanced Custom Pipe:**
\`\`\`typescript
@Pipe({
  name: 'fileSize',
  standalone: true
})
export class FileSizePipe implements PipeTransform {
  transform(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
\`\`\`

**Async Pipe with Observables:**
\`\`\`typescript
@Component({
  template: \`
    <div *ngIf="user$ | async as user">
      <h2>{{user.name}}</h2>
      <p>{{user.email}}</p>
    </div>
    
    <div *ngIf="users$ | async as users; else loading">
      <div *ngFor="let user of users">
        {{user.name}}
      </div>
    </div>
    
    <ng-template #loading>
      <p>Loading users...</p>
    </ng-template>
  \`
})
export class UserComponent {
  user$ = this.userService.getUser();
  users$ = this.userService.getUsers();
  
  constructor(private userService: UserService) {}
}
\`\`\`

**Pure vs Impure Pipes:**
\`\`\`typescript
// Pure pipe (default) - only recalculates when input changes
@Pipe({ name: 'pureFilter', pure: true })
export class PureFilterPipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    return items.filter(item => 
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}

// Impure pipe - recalculates on every change detection cycle
@Pipe({ name: 'impureRandom', pure: false })
export class ImpureRandomPipe implements PipeTransform {
  transform(value: number): number {
    return Math.random() * value;
  }
}
\`\`\``
  },
  {
    question: "What are Angular decorators and metadata?",
    idealAnswer: `**Decorators** are functions that modify JavaScript classes, properties, or methods.

**Component Decorator:**
\`\`\`typescript
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  styles: [\`.container { padding: 20px; }\`],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
  inputs: ['userId'],
  outputs: ['userChanged']
})
export class UserProfileComponent {
  @Input() userId!: string;
  @Output() userChanged = new EventEmitter<User>();
}
\`\`\`

**Injectable Decorator:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
}

@Injectable({ providedIn: 'any' })
export class LocalService {}

@Injectable()
export class ConfigurableService {
  constructor(@Inject(CONFIG_TOKEN) private config: Config) {}
}
\`\`\`

**Directive Decorators:**
\`\`\`typescript
// Attribute directive
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}

// Structural directive
@Directive({ selector: '[appUnless]' })
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
\`\`\`

**Property Decorators:**
\`\`\`typescript
export class ExampleComponent {
  @Input() data: any;
  @Output() changed = new EventEmitter();
  
  @ViewChild('inputRef') inputRef!: ElementRef;
  @ContentChild('projected') projected!: ElementRef;
  
  @ViewChildren(ItemComponent) items!: QueryList<ItemComponent>;
  @ContentChildren(ProjectedComponent) projectedItems!: QueryList<ProjectedComponent>;
  
  @HostBinding('class.active') isActive = false;
  @HostListener('click') onClick() {
    console.log('Clicked');
  }
  
  @Attribute('aria-label') ariaLabel: string;
}
\`\`\`

**Pipe Decorator:**
\`\`\`typescript
@Pipe({
  name: 'customPipe',
  pure: true,
  standalone: true
})
export class CustomPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value;
  }
}
\`\`\`

**Module Decorator:**
\`\`\`typescript
@NgModule({
  declarations: [Component1, Component2],
  imports: [CommonModule, HttpClientModule],
  exports: [Component1, SharedModule],
  providers: [Service1, Service2],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  id: 'feature.module'
})
export class FeatureModule {}
\`\`\`

**Custom Decorators:**
\`\`\`typescript
function LogChanges(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${key} with args:\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`\${key} returned:\`, result);
    return result;
  };
  
  return descriptor;
}

class ExampleService {
  @LogChanges
  processData(data: any) {
    return data.toUpperCase();
  }
}
\`\`\``
  },
  {
    question: "What are Angular routing guards and resolvers?",
    idealAnswer: `**Guards** control navigation access, while **Resolvers** pre-fetch data before route activation.

**CanActivate Guard:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    
    this.authService.setRedirectUrl(state.url);
    this.router.navigate(['/login']);
    return false;
  }
}

// Usage
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];
\`\`\`

**CanActivateChild Guard:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.isAdmin()) {
      return true;
    }
    
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
\`\`\`

**CanDeactivate Guard:**
\`\`\`typescript
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
    if (component.canDeactivate()) {
      return true;
    }
    
    return confirm('You have unsaved changes. Are you sure you want to leave?');
  }
}
\`\`\`

**Resolver:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.paramMap.get('id');
    return this.userService.getUser(id!).pipe(
      catchError(error => {
        console.error('Error resolving user:', error);
        return of({} as User);
      })
    );
  }
}

// Usage
const routes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  }
];
\`\`\`

**Functional Guards (Angular 14+):**
\`\`\`typescript
// Functional guard
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
  
  return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
};

// Functional resolver
export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  const id = route.paramMap.get('id')!;
  
  return userService.getUser(id);
};
\`\`\``
  },
  {
    question: "What are Angular content projection and ng-content?",
    idealAnswer: `**Content Projection** allows you to project content from a parent component into a child component's template.

**Basic Content Projection:**
\`\`\`typescript
// Card component
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select="[card-header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .card { border: 1px solid #ccc; border-radius: 8px; }
    .card-header { padding: 16px; background: #f5f5f5; }
    .card-body { padding: 16px; }
    .card-footer { padding: 16px; background: #f9f9f9; }
  \`]
})
export class CardComponent { }

// Usage
<app-card>
  <div card-header>Card Title</div>
  <p>This is the main content of the card.</p>
  <button>Action Button</button>
  <div card-footer>Footer content</div>
</app-card>
\`\`\`

**Multiple ng-content Slots:**
\`\`\`typescript
@Component({
  selector: 'app-layout',
  template: \`
    <header class="header">
      <ng-content select="[slot=header]"></ng-content>
    </header>
    
    <main class="main">
      <ng-content select="[slot=main]"></ng-content>
      <ng-content></ng-content> <!-- Default slot -->
    </main>
    
    <aside class="sidebar">
      <ng-content select="[slot=sidebar]"></ng-content>
    </aside>
    
    <footer class="footer">
      <ng-content select="[slot=footer]"></ng-content>
    </footer>
  \`
})
export class LayoutComponent { }
\`\`\`

**Conditional Content Projection:**
\`\`\`typescript
@Component({
  selector: 'app-modal',
  template: \`
    <div class="modal-overlay" *ngIf="visible">
      <div class="modal">
        <div class="modal-header">
          <ng-content select="[modal-header]">
            <h3>Default Title</h3>
          </ng-content>
          <button class="close-btn" (click)="close()">×</button>
        </div>
        
        <div class="modal-body">
          <ng-content select="[modal-body]">
            <p>Default content</p>
          </ng-content>
        </div>
        
        <div class="modal-footer">
          <ng-content select="[modal-footer]">
            <button (click)="close()">Close</button>
          </ng-content>
        </div>
      </div>
    </div>
  \`
})
export class ModalComponent {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();
  
  close() {
    this.visible = false;
    this.closed.emit();
  }
}
\`\`\`

**Content Projection with @ContentChild:**
\`\`\`typescript
@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tabs">
      <div class="tab-headers">
        <button *ngFor="let tab of tabs; let i = index"
                (click)="selectTab(i)"
                [class.active]="i === activeIndex">
          {{tab.title}}
        </button>
      </div>
      <div class="tab-content">
        <ng-container #contentContainer></ng-container>
      </div>
    </div>
  \`
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChild('contentContainer', { read: ViewContainerRef }) 
  contentContainer!: ViewContainerRef;
  
  activeIndex = 0;
  
  ngAfterContentInit() {
    this.selectTab(0);
  }
  
  selectTab(index: number) {
    this.activeIndex = index;
    this.contentContainer.clear();
    
    const activeTab = this.tabs.toArray()[index];
    if (activeTab) {
      this.contentContainer.insert(activeTab.contentRef);
    }
  }
}
\`\`\`

**Best Practices:**
- **Use Selectors**: Use CSS selectors with ng-content for specific slots
- **Provide Defaults**: Always provide default content for optional projections
- **Use ng-container**: Use ng-container for structural projections
- **ContentChild/ContentChildren**: Use these decorators to access projected content
- **Performance**: Be mindful of performance with complex content projection`
  },
  {
    question: "What are Angular interceptors?",
    idealAnswer: `**HTTP Interceptors** intercept HTTP requests and responses globally.

**Basic Interceptor:**
\`\`\`typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    
    if (authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: \`Bearer \${authToken}\`
        }
      });
    }
    
    return next.handle(req);
  }
}
\`\`\`

**Error Handling Interceptor:**
\`\`\`typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private notificationService: NotificationService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          this.notificationService.showError('Access forbidden');
        } else if (error.status >= 500) {
          this.notificationService.showError('Server error occurred');
        }
        
        return throwError(() => error);
      })
    );
  }
}
\`\`\`

**Logging Interceptor:**
\`\`\`typescript
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    
    return next.handle(req).pipe(
      tap({
        next: event => {
          if (event instanceof HttpResponse) {
            const duration = Date.now() - startTime;
            console.log(\`\${req.method} \${req.url} - \${event.status} (\${duration}ms)\`);
          }
        },
        error: error => {
          console.error(\`\${req.method} \${req.url} failed:\`, error);
        }
      })
    );
  }
}
\`\`\`

**Caching Interceptor:**
\`\`\`typescript
@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    
    const cachedResponse = this.cache.get(req.url);
    if (cachedResponse) {
      return of(cachedResponse);
    }
    
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(req.url, event);
        }
      })
    );
  }
}
\`\`\`

**Registering Interceptors:**
\`\`\`typescript
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
})
export class CoreModule { }
\`\`\`

**Functional Interceptors (Angular 15+):**
\`\`\`typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: \`Bearer \${token}\` }
    });
  }
  
  return next(req);
};

// Configure in app config
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
\`\`\``
  },
  {
    question: "What are Angular animations?",
    idealAnswer: `**Angular Animations** provide powerful animation capabilities.

**Setup:**
\`\`\`typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('openClose', [
      state('open', style({ height: '200px', opacity: 1 })),
      state('closed', style({ height: '100px', opacity: 0.5 })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')])
    ])
  ]
})
export class AnimatedComponent {
  isOpen = true;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
\`\`\`

**Complex Animations:**
\`\`\`typescript
@Component({
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ListComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  
  addItem() {
    this.items.push(\`Item \${this.items.length + 1}\`);
  }
  
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
\`\`\`

**Template Usage:**
\`\`\`html
<div [@openClose]="isOpen ? 'open' : 'closed'">
  <p>This content animates!</p>
  <button (click)="toggle()">Toggle</button>
</div>

<div *ngFor="let item of items; let i = index" 
     [@flyInOut]="'in'" 
     [@fadeInOut]>
  {{item}}
  <button (click)="removeItem(i)">Remove</button>
</div>
\`\`\`

**Stagger Animations:**
\`\`\`typescript
@Component({
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger('100ms', [
            animate('0.5s ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class StaggeredListComponent { }
\`\`\`

**Animation Callbacks:**
\`\`\`typescript
export class AnimationComponent {
  onAnimationStart(event: AnimationEvent) {
    console.log('Animation started:', event);
  }
  
  onAnimationDone(event: AnimationEvent) {
    console.log('Animation done:', event);
  }
}
\`\`\`

**Template:**
\`\`\`html
<div [@openClose]="isOpen" 
     (@openClose.start)="onAnimationStart($event)" 
     (@openClose.done)="onAnimationDone($event)">
  Animated content
</div>
\`\`\``
  },
  {
    question: "What are RxJS operators and how do you use them in Angular?",
    idealAnswer: `**RxJS Operators** are functions that transform, filter, and combine observable streams.

**Common Operators:**

**1. Transformation Operators:**
\`\`\`typescript
import { map, switchMap, mergeMap, concatMap } from 'rxjs/operators';

// Map - Transform each value
data$.pipe(
  map(user => user.name)
).subscribe(name => console.log(name));

// SwitchMap - Cancel previous inner observable
searchTerms$.pipe(
  switchMap(term => this.searchService.search(term))
).subscribe(results => console.log(results));

// MergeMap - Run inner observables concurrently
ids$.pipe(
  mergeMap(id => this.userService.getUser(id))
).subscribe(users => console.log(users));
\`\`\`

**2. Filtering Operators:**
\`\`\`typescript
import { filter, take, takeWhile, distinctUntilChanged } from 'rxjs/operators';

// Filter - Only emit values that pass condition
numbers$.pipe(
  filter(n => n > 0)
).subscribe(positiveNumbers => console.log(positiveNumbers));

// Take - Only emit first n values
data$.pipe(
  take(5)
).subscribe(firstFive => console.log(firstFive));

// DistinctUntilChanged - Only emit when value changes
searchTerms$.pipe(
  distinctUntilChanged()
).subscribe(uniqueTerms => console.log(uniqueTerms));
\`\`\`

**3. Utility Operators:**
\`\`\`typescript
import { tap, debounceTime, delay, catchError } from 'rxjs/operators';

// Tap - Side effects without changing stream
data$.pipe(
  tap(data => console.log('Processing:', data)),
  map(data => data.processed)
).subscribe(result => console.log(result));

// DebounceTime - Wait for pause in emissions
searchInput$.pipe(
  debounceTime(300),
  switchMap(query => this.search(query))
).subscribe(results => console.log(results));

// CatchError - Handle errors in observable stream
data$.pipe(
  catchError(error => {
    console.error('Error:', error);
    return of([]); // Return fallback value
  })
).subscribe(data => console.log(data));
\`\`\`

**4. Combination Operators:**
\`\`\`typescript
import { combineLatest, forkJoin, zip, withLatestFrom } from 'rxjs';

// CombineLatest - Emit when any observable emits
combineLatest([user$, settings$]).pipe(
  map(([user, settings]) => ({ user, settings }))
).subscribe(combined => console.log(combined));

// ForkJoin - Wait for all observables to complete
forkJoin({
  user: this.userService.getUser(),
  posts: this.postService.getPosts(),
  comments: this.commentService.getComments()
}).subscribe(results => console.log(results));
\`\`\`

**Best Practices:**
- **Use pipe()**: Chain operators using pipe()
- **Handle errors**: Always include catchError
- **Unsubscribe**: Prevent memory leaks
- **Choose right operator**: switchMap for HTTP, mergeMap for concurrent`
  },
  {
    question: "What are Angular Guards and how do you implement route protection?",
    idealAnswer: `**Route Guards** control navigation access and protect routes.

**Types of Guards:**

**1. CanActivate - Protect route access:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}

// Route configuration
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];
\`\`\`

**2. CanActivateChild - Protect child routes:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivateChild {
  canActivateChild(): boolean {
    return this.authService.isAdmin();
  }
}

const routes: Routes = [
  {
    path: 'admin',
    canActivateChild: [AdminGuard],
    children: [
      { path: 'users', component: UserManagementComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];
\`\`\`

**3. CanDeactivate - Prevent leaving route:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  }
}

const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditComponent,
    canDeactivate: [UnsavedChangesGuard]
  }
];
\`\`\`

**4. Resolve - Preload data before navigation:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params['id']);
  }
}

const routes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  }
];
\`\`\`

**5. CanLoad - Prevent lazy loading modules:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AdminModuleGuard implements CanLoad {
  canLoad(): boolean {
    return this.authService.hasAdminRole();
  }
}

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminModuleGuard]
  }
];
\`\`\`

**Functional Guards (Angular 15+):**
\`\`\`typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
  
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};
\`\`\`

**Use Cases:**
- **Authentication**: Protect authenticated routes
- **Authorization**: Role-based access control
- **Data Preloading**: Load data before component activation
- **Form Protection**: Prevent losing unsaved changes`
  },
  {
    question: "What are Angular Interceptors and how do you implement HTTP interceptors?",
    idealAnswer: `**HTTP Interceptors** intercept and modify HTTP requests and responses globally.

**Creating an Interceptor:**
\`\`\`typescript
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add auth token to request
    const authReq = req.clone({
      headers: req.headers.set('Authorization', \`Bearer \${this.getAuthToken()}\`)
    });
    
    return next.handle(authReq);
  }
  
  private getAuthToken(): string {
    return localStorage.getItem('token') || '';
  }
}
\`\`\`

**Logging Interceptor:**
\`\`\`typescript
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    
    console.log(\`\${req.method} \${req.url}\`);
    
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          const endTime = Date.now();
          console.log(\`Response for \${req.url} took \${endTime - startTime}ms\`);
        }
        return event;
      })
    );
  }
}
\`\`\`

**Error Handling Interceptor:**
\`\`\`typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized - redirect to login
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          // Forbidden - show access denied
          console.error('Access denied');
        } else if (error.status >= 500) {
          // Server error - show error page
          this.router.navigate(['/error']);
        }
        
        return throwError(() => error);
      })
    );
  }
}
\`\`\`

**Loading Interceptor:**
\`\`\`typescript
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  
  constructor(private loadingService: LoadingService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingService.show();
    }
    
    this.activeRequests++;
    
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          this.decrementRequests();
        }
        return event;
      }),
      catchError(error => {
        this.decrementRequests();
        return throwError(() => error);
      })
    );
  }
  
  private decrementRequests() {
    this.activeRequests--;
    if (this.activeRequests === 0) {
      this.loadingService.hide();
    }
  }
}
\`\`\`

**Registering Interceptors:**
\`\`\`typescript
// app.module.ts or app.config.ts
@NgModule({
  // ...
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class AppModule { }
\`\`\`

**Interceptor Order:**
- Interceptors execute in the order they're provided
- Request: First interceptor runs first
- Response: Last interceptor runs first

**Use Cases:**
- **Authentication**: Add auth tokens
- **Logging**: Track HTTP requests
- **Error Handling**: Global error management
- **Loading States**: Show/hide loading indicators`
  },
  {
    question: "What are Angular Animations and how do you implement them?",
    idealAnswer: `**Angular Animations** provide a powerful way to add motion and transitions to applications.

**Setting Up Animations:**
\`\`\`typescript
// app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule]
})
export class AppModule { }
\`\`\`

**Basic Animation Triggers:**
\`\`\`typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-toggle',
  template: \`
    <button (click)="toggle()">Toggle</button>
    <div [@openClose]="isOpen ? 'open' : 'closed'">
      Content
    </div>
  \`,
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class ToggleComponent {
  isOpen = false;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
\`\`\`

**Enter and Leave Animations:**
\`\`\`typescript
@Component({
  selector: 'app-list',
  template: \`
    <button (click)="addItem()">Add Item</button>
    <ul>
      <li *ngFor="let item of items; let i = index" 
          [@flyInOut]="'in'"
          (@flyInOut.done)="animationDone($event)">
        {{ item }}
      </li>
    </ul>
  \`,
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ListComponent {
  items = ['Item 1', 'Item 2'];
  
  addItem() {
    this.items.push(\`Item \${this.items.length + 1}\`);
  }
}
\`\`\`

**Stagger Animations:**
\`\`\`typescript
import { query, stagger, animateChild } from '@angular/animations';

@Component({
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class StaggerListComponent {
  // Component implementation
}
\`\`\`

**Reusable Animation:**
\`\`\`typescript
import { animation, useAnimation } from '@angular/animations';

export const fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('0.5s ease-in', style({ opacity: 1 }))
]);

@Component({
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeInAnimation))
    ])
  ]
})
export class FadeInComponent {
  // Component implementation
}
\`\`\`

**Animation Callbacks:**
\`\`\`typescript
@Component({
  template: \`
    <div [@fadeIn]="show" (@fadeIn.start)="onAnimationStart($event)"
         (@fadeIn.done)="onAnimationDone($event)">
      Animated Content
    </div>
  \`
})
export class AnimationCallbackComponent {
  show = true;
  
  onAnimationStart(event: AnimationEvent) {
    console.log('Animation started:', event);
  }
  
  onAnimationDone(event: AnimationEvent) {
    console.log('Animation completed:', event);
  }
}
\`\`\`

**Key Concepts:**
- **Trigger**: Named animation entry point
- **State**: CSS styles for specific states
- **Transition**: Animation between states
- **Query**: Target child elements
- **Stagger**: Delay animations for multiple elements`
  },
  {
    question: "What are Angular Forms and how do you implement Template-driven vs Reactive forms?",
    idealAnswer: `**Angular Forms** provide two approaches for handling user input: Template-driven and Reactive.

**Template-Driven Forms:**
\`\`\`typescript
// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
export class AppModule { }
\`\`\`

\`\`\`html
<!-- template-driven.component.html -->
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <input name="username" 
         ngModel 
         required 
         minlength="3"
         #username="ngModel">
  
  <div *ngIf="username.invalid && username.touched">
    Username is required and must be at least 3 characters
  </div>
  
  <input name="email" 
         ngModel 
         required 
         email
         #email="ngModel">
  
  <div *ngIf="email.invalid && email.touched">
    Valid email is required
  </div>
  
  <button type="submit" [disabled]="userForm.invalid">
    Submit
  </button>
</form>
\`\`\`

\`\`\`typescript
// template-driven.component.ts
export class TemplateDrivenComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
    }
  }
}
\`\`\`

**Reactive Forms:**
\`\`\`typescript
// app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule]
})
export class AppModule { }
\`\`\`

\`\`\`typescript
// reactive.component.ts
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <input formControlName="username">
      
      <div *ngIf="userForm.get('username')?.invalid && userForm.get('username')?.touched">
        <div *ngIf="userForm.get('username')?.hasError('required')">
          Username is required
        </div>
        <div *ngIf="userForm.get('username')?.hasError('minlength')">
          Username must be at least 3 characters
        </div>
      </div>
      
      <input formControlName="email">
      
      <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched">
        <div *ngIf="userForm.get('email')?.hasError('required')">
          Email is required
        </div>
        <div *ngIf="userForm.get('email')?.hasError('email')">
          Valid email is required
        </div>
      </div>
      
      <button type="submit" [disabled]="userForm.invalid">
        Submit
      </button>
    </form>
  \`
})
export class ReactiveComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
\`\`\`

**FormArray for Dynamic Forms:**
\`\`\`typescript
this.userForm = this.fb.group({
  name: ['', Validators.required],
  emails: this.fb.array([])
});

get emails() {
  return this.userForm.get('emails') as FormArray;
}

addEmail() {
  this.emails.push(this.fb.control('', Validators.email));
}

removeEmail(index: number) {
  this.emails.removeAt(index);
}
\`\`\`

**Comparison:**

| Feature | Template-Driven | Reactive |
|---------|----------------|----------|
| Setup | Simple | More complex |
| Validation | Directives | Validators in code |
| Form Model | Implicit | Explicit |
| Dynamic Forms | Difficult | Easy |
| Testing | Harder | Easier |
| Type Safety | Limited | Full TypeScript support |

**When to Use:**
- **Template-Driven**: Simple forms, rapid prototyping
- **Reactive**: Complex forms, dynamic fields, custom validation`
  },
  {
    question: "What are Angular Lifecycle Hooks and how do you use them?",
    idealAnswer: `**Lifecycle Hooks** are special methods that allow you to tap into key moments in a component's lifecycle.

**Component Lifecycle Hooks:**

**1. ngOnChanges - When input properties change:**
\`\`\`typescript
export class UserComponent implements OnChanges {
  @Input() user: User;
  previousUser: User;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.previousUser = changes['user'].previousValue;
      console.log('User changed:', changes['user'].currentValue);
    }
  }
}
\`\`\`

**2. ngOnInit - After component initialization:**
\`\`\`typescript
export class DataComponent implements OnInit {
  data: any[];
  
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    // Initialize data after component is created
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
\`\`\`

**3. ngDoCheck - During every change detection:**
\`\`\`typescript
export class CustomCheckComponent implements DoCheck {
  previousValue: any;
  
  ngDoCheck() {
    // Custom change detection logic
    if (this.someValue !== this.previousValue) {
      console.log('Custom change detected');
      this.previousValue = this.someValue;
    }
  }
}
\`\`\`

**4. ngAfterContentInit - After content projection:**
\`\`\`typescript
export class WrapperComponent implements AfterContentInit {
  @ContentChild('content') content: ElementRef;
  
  ngAfterContentInit() {
    // Access projected content
    console.log('Content initialized:', this.content);
  }
}
\`\`\`

**5. ngAfterContentChecked - After content change detection:**
\`\`\`typescript
export class ContentWrapperComponent implements AfterContentChecked {
  ngAfterContentChecked() {
    // Called after projected content is checked
    console.log('Content checked');
  }
}
\`\`\`

**6. ngAfterViewInit - After view initialization:**
\`\`\`typescript
export class ViewComponent implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;
  
  ngAfterViewInit() {
    // Access child views after they're initialized
    this.input.nativeElement.focus();
  }
}
\`\`\`

**7. ngAfterViewChecked - After view change detection:**
\`\`\`typescript
export class ViewWrapperComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    // Called after component's view is checked
    console.log('View checked');
  }
}
\`\`\`

**8. ngOnDestroy - Before component destruction:**
\`\`\`typescript
export class CleanupComponent implements OnDestroy {
  private subscription: Subscription;
  private intervalId: any;
  
  constructor() {
    this.subscription = someObservable.subscribe();
    this.intervalId = setInterval(() => {
      // Some periodic task
    }, 1000);
  }
  
  ngOnDestroy() {
    // Clean up resources
    this.subscription.unsubscribe();
    clearInterval(this.intervalId);
    console.log('Component destroyed, resources cleaned up');
  }
}
\`\`\`

**Lifecycle Order:**
1. **constructor** - Component creation
2. **ngOnChanges** - Input property changes
3. **ngOnInit** - Component initialization
4. **ngDoCheck** - Custom change detection
5. **ngAfterContentInit** - Content projection
6. **ngAfterContentChecked** - Content check
7. **ngAfterViewInit** - View initialization
8. **ngAfterViewChecked** - View check
9. **ngOnDestroy** - Component destruction

**Best Practices:**
- **ngOnInit**: Use for initialization logic
- **ngOnDestroy**: Always clean up subscriptions and timers
- **ngOnChanges**: React to input property changes
- **ngAfterViewInit**: Access @ViewChild elements`
  }
];

const hardQuestions = [
  {
    question: "What are dynamic components in Angular and how do you create them?",
    idealAnswer: `**Dynamic Components** are components created and rendered at runtime.

**Basic Dynamic Component Creation:**
\`\`\`typescript
@Component({
  selector: 'app-dynamic-host',
  template: '<ng-template #container></ng-template>'
})
export class DynamicHostComponent {
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  createComponent(componentType: Type<any>) {
    // Clear previous components
    this.container.clear();
    
    // Create component factory
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    
    // Create component instance
    const componentRef = this.container.createComponent(factory);
    
    // Set properties
    componentRef.instance.data = 'Dynamic data';
    
    // Detect changes
    componentRef.changeDetectorRef.detectChanges();
    
    return componentRef;
  }
}
\`\`\`

**Modern Angular 14+ Approach:**
\`\`\`typescript
@Component({
  selector: 'app-dynamic-host',
  template: '<ng-template #container></ng-template>',
  standalone: true,
  imports: [CommonModule]
})
export class DynamicHostComponent {
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;
  
  async createComponent(componentType: Type<any>) {
    this.container.clear();
    
    // Modern approach without ComponentFactoryResolver
    const componentRef = this.container.createComponent(componentType);
    
    componentRef.instance.data = 'Dynamic data';
    componentRef.changeDetectorRef.detectChanges();
    
    return componentRef;
  }
}
\`\`\`

**Dynamic Component with Inputs:**
\`\`\`typescript
export interface DynamicComponentData {
  title: string;
  content: string;
  type: 'info' | 'warning' | 'error';
}

@Component({
  selector: 'app-dynamic-alert',
  template: \`
    <div class="alert alert-{{data.type}}">
      <h4>{{data.title}}</h4>
      <p>{{data.content}}</p>
      <button (click)="close()">×</button>
    </div>
  \`,
  styles: [\`
    .alert { padding: 16px; border-radius: 4px; margin: 8px 0; }
    .alert-info { background: #e3f2fd; border-left: 4px solid #2196f3; }
    .alert-warning { background: #fff3e0; border-left: 4px solid #ff9800; }
    .alert-error { background: #ffebee; border-left: 4px solid #f44336; }
  \`]
})
export class DynamicAlertComponent {
  @Input() data!: DynamicComponentData;
  @Output() closed = new EventEmitter<void>();
  
  close() {
    this.closed.emit();
  }
}
\`\`\`

**Dynamic Component Service:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class DynamicComponentService {
  private componentRegistry = new Map<string, Type<any>>();
  
  registerComponent(name: string, componentType: Type<any>) {
    this.componentRegistry.set(name, componentType);
  }
  
  createComponent(
    container: ViewContainerRef,
    componentName: string,
    data?: any
  ): ComponentRef<any> {
    const componentType = this.componentRegistry.get(componentName);
    if (!componentType) {
      throw new Error(\`Component \${componentName} not found\`);
    }
    
    container.clear();
    const componentRef = container.createComponent(componentType);
    
    if (data && componentRef.instance.data !== undefined) {
      componentRef.instance.data = data;
    }
    
    componentRef.changeDetectorRef.detectChanges();
    return componentRef;
  }
}
\`\`\`

**Usage in Component:**
\`\`\`typescript
@Component({
  selector: 'app-widget-container',
  template: \`
    <div class="widget-container">
      <ng-template #widgetContainer></ng-template>
    </div>
  \`
})
export class WidgetContainerComponent implements OnInit {
  @ViewChild('widgetContainer', { read: ViewContainerRef }) 
  widgetContainer!: ViewContainerRef;
  
  constructor(private dynamicService: DynamicComponentService) {}
  
  ngOnInit() {
    // Register components
    this.dynamicService.registerComponent('alert', DynamicAlertComponent);
    this.dynamicService.registerComponent('chart', DynamicChartComponent);
    
    // Create dynamic widgets
    this.createAlertWidget();
    this.createChartWidget();
  }
  
  createAlertWidget() {
    const alertData: DynamicComponentData = {
      title: 'System Notice',
      content: 'Dynamic component successfully created!',
      type: 'info'
    };
    
    const alertRef = this.dynamicService.createComponent(
      this.widgetContainer,
      'alert',
      alertData
    );
    
    // Listen to events
    alertRef.instance.closed.subscribe(() => {
      console.log('Alert closed');
    });
  }
  
  createChartWidget() {
    const chartData = {
      labels: ['Jan', 'Feb', 'Mar'],
      data: [10, 20, 15]
    };
    
    this.dynamicService.createComponent(
      this.widgetContainer,
      'chart',
      chartData
    );
  }
}
\`\`\`

**Advanced Dynamic Component with ViewRef:**
\`\`\`typescript
@Component({
  selector: 'app-template-host',
  template: '<ng-template #container></ng-template>'
})
export class TemplateHostComponent {
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;
  
  createFromTemplate(templateRef: TemplateRef<any>, context?: any) {
    this.container.clear();
    
    const viewRef = this.container.createEmbeddedView(templateRef, context);
    viewRef.detectChanges();
    
    return viewRef;
  }
}
\`\`\`

**Benefits:**
- **Flexibility**: Create components based on runtime conditions
- **Reusability**: Use same component in different contexts
- **Plugin Architecture**: Support for plugin systems
- **Dynamic UI**: Build interfaces that adapt to user needs`
  },
  {
    question: "What are ViewChild and ContentChild decorators in Angular?",
    idealAnswer: `**ViewChild** and **ContentChild** are decorators for accessing child elements and components.

**ViewChild:**
\`\`\`typescript
@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <input #inputRef type="text" />
      <app-child #childRef></app-child>
      <button (click)="focusInput()">Focus Input</button>
      <button (click)="callChildMethod()">Call Child</button>
    </div>
  \`
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('inputRef', { static: false }) inputRef!: ElementRef;
  @ViewChild('childRef', { static: false }) childRef!: ChildComponent;
  
  ngAfterViewInit() {
    // ViewChild properties are available here
    console.log('Input element:', this.inputRef.nativeElement);
    console.log('Child component:', this.childRef);
  }
  
  focusInput() {
    this.inputRef.nativeElement.focus();
  }
  
  callChildMethod() {
    this.childRef.doSomething();
  }
}
\`\`\`

**ContentChild:**
\`\`\`typescript
// Parent component
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select="[card-header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content select="[card-body]"></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  \`
})
export class CardComponent implements AfterContentInit {
  @ContentChild('cardHeader') headerRef!: ElementRef;
  @ContentChild('cardBody') bodyRef!: ElementRef;
  @ContentChild('cardFooter') footerRef!: ElementRef;
  
  ngAfterContentInit() {
    console.log('Header content:', this.headerRef);
    console.log('Body content:', this.bodyRef);
    console.log('Footer content:', this.footerRef);
  }
}

// Usage
<app-card>
  <div #cardHeader>Card Title</div>
  <div #cardBody>Card content goes here</div>
  <div #cardFooter>Footer content</div>
</app-card>
\`\`\`

**ViewChild with Component Type:**
\`\`\`typescript
@Component({
  selector: 'app-form-container',
  template: \`
    <form>
      <app-user-field #userField></app-user-field>
      <app-email-field #emailField></app-email-field>
      <app-password-field #passwordField></app-password-field>
    </form>
    <button (click)="validateForm()">Validate</button>
  \`
})
export class FormContainerComponent implements AfterViewInit {
  @ViewChild(UserFieldComponent) userField!: UserFieldComponent;
  @ViewChild(EmailFieldComponent) emailField!: EmailFieldComponent;
  @ViewChild(PasswordFieldComponent) passwordField!: PasswordFieldComponent;
  
  ngAfterViewInit() {
    // Access component methods and properties
    this.userField.setPlaceholder('Enter username');
    this.emailField.setPlaceholder('Enter email');
  }
  
  validateForm() {
    const isUserValid = this.userField.validate();
    const isEmailValid = this.emailField.validate();
    const isPasswordValid = this.passwordField.validate();
    
    return isUserValid && isEmailValid && isPasswordValid;
  }
}
\`\`\`

**ContentChild with Component Type:**
\`\`\`typescript
// Tab component
@Component({
  selector: 'app-tab',
  template: \`
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  \`
})
export class TabComponent {
  @Input() title: string = '';
  @ViewChild(TemplateRef) contentRef!: TemplateRef<any>;
}

// Tabs container
@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tabs">
      <div class="tab-headers">
        <button *ngFor="let tab of tabs; let i = index"
                (click)="selectTab(i)"
                [class.active]="i === activeIndex">
          {{tab.title}}
        </button>
      </div>
      <div class="tab-content">
        <ng-container #contentContainer></ng-container>
      </div>
    </div>
  \`
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChild('contentContainer', { read: ViewContainerRef }) 
  contentContainer!: ViewContainerRef;
  
  activeIndex = 0;
  
  ngAfterContentInit() {
    this.selectTab(0);
  }
  
  selectTab(index: number) {
    this.activeIndex = index;
    this.contentContainer.clear();
    
    const activeTab = this.tabs.toArray()[index];
    if (activeTab) {
      this.contentContainer.insert(activeTab.contentRef);
    }
  }
}
\`\`\`

**ViewChild Options:**
\`\`\`typescript
export class ExampleComponent {
  // Static: true - available in ngOnInit
  @ViewChild('staticRef', { static: true }) staticRef!: ElementRef;
  
  // Static: false - available in ngAfterViewInit (default)
  @ViewChild('dynamicRef', { static: false }) dynamicRef!: ElementRef;
  
  // Read specific token
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;
  
  ngOnInit() {
    // Only static ViewChild is available here
    console.log('Static ref:', this.staticRef);
  }
  
  ngAfterViewInit() {
    // Both static and dynamic ViewChild are available
    console.log('Dynamic ref:', this.dynamicRef);
    console.log('Container:', this.container);
  }
}
\`\`\`

**Key Differences:**
- **ViewChild**: Accesses elements/components in the component's own template
- **ContentChild**: Accesses projected content from parent component
- **Timing**: ViewChild available in ngAfterViewInit, ContentChild in ngAfterContentInit
- **Use Cases**: ViewChild for template children, ContentChild for projected content`
  },
  {
    question: "What are ViewChildren and ContentChildren decorators?",
    idealAnswer: `**ViewChildren** and **ContentChildren** access multiple child elements and components.

**ViewChildren Example:**
\`\`\`typescript
@Component({
  selector: 'app-item-list',
  template: \`
    <div>
      <app-item *ngFor="let item of items; let i = index" 
                [data]="item" 
                [index]="i"
                #itemComponent>
      </app-item>
      <button (click)="validateAll()">Validate All</button>
      <button (click)="getTotal()">Get Total</button>
    </div>
  \`
})
export class ItemListComponent implements AfterViewInit {
  @ViewChildren(ItemComponent) itemComponents!: QueryList<ItemComponent>;
  @ViewChildren('itemComponent') itemElements!: QueryList<ElementRef>;
  
  items = [
    { name: 'Item 1', value: 10 },
    { name: 'Item 2', value: 20 },
    { name: 'Item 3', value: 30 }
  ];
  
  ngAfterViewInit() {
    // Subscribe to changes
    this.itemComponents.changes.subscribe(() => {
      console.log('Items changed:', this.itemComponents.length);
    });
    
    // Initial setup
    this.setupItems();
  }
  
  setupItems() {
    this.itemComponents.forEach((item, index) => {
      item.setIndex(index);
    });
  }
  
  validateAll() {
    const results = this.itemComponents.map(item => item.validate());
    const allValid = results.every(result => result);
    console.log('All valid:', allValid);
    return allValid;
  }
  
  getTotal() {
    const total = this.itemComponents.reduce((sum, item) => {
      return sum + item.getValue();
    }, 0);
    console.log('Total:', total);
    return total;
  }
}
\`\`\`

**ContentChildren Example:**
\`\`\`typescript
// Tab component
@Component({
  selector: 'app-tab',
  template: \`
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  \`
})
export class TabComponent {
  @Input() title: string = '';
  @Input() disabled: boolean = false;
  @ViewChild(TemplateRef) contentRef!: TemplateRef<any>;
  
  activate() {
    console.log(\`Tab \${this.title} activated\`);
  }
  
  deactivate() {
    console.log(\`Tab \${this.title} deactivated\`);
  }
}

// Tabs container
@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tabs">
      <div class="tab-headers">
        <button *ngFor="let tab of tabs; let i = index"
                (click)="selectTab(i)"
                [class.active]="i === activeIndex"
                [disabled]="tab.disabled">
          {{tab.title}}
        </button>
      </div>
      <div class="tab-content">
        <ng-container #contentContainer></ng-container>
      </div>
    </div>
  \`
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChild('contentContainer', { read: ViewContainerRef }) 
  contentContainer!: ViewContainerRef;
  
  activeIndex = 0;
  
  ngAfterContentInit() {
    // Subscribe to tab changes
    this.tabs.changes.subscribe(() => {
      console.log('Tabs updated:', this.tabs.length);
      if (this.tabs.length > 0) {
        this.selectTab(0);
      }
    });
    
    // Initialize first tab
    if (this.tabs.length > 0) {
      this.selectTab(0);
    }
  }
  
  selectTab(index: number) {
    // Deactivate all tabs
    this.tabs.forEach(tab => tab.deactivate());
    
    // Activate selected tab
    const selectedTab = this.tabs.toArray()[index];
    if (selectedTab && !selectedTab.disabled) {
      this.activeIndex = index;
      selectedTab.activate();
      
      // Update content
      this.contentContainer.clear();
      this.contentContainer.insert(selectedTab.contentRef);
    }
  }
  
  nextTab() {
    const nextIndex = this.findNextValidTab(this.activeIndex);
    if (nextIndex !== -1) {
      this.selectTab(nextIndex);
    }
  }
  
  previousTab() {
    const prevIndex = this.findPreviousValidTab(this.activeIndex);
    if (prevIndex !== -1) {
      this.selectTab(prevIndex);
    }
  }
  
  private findNextValidTab(currentIndex: number): number {
    const tabs = this.tabs.toArray();
    for (let i = currentIndex + 1; i < tabs.length; i++) {
      if (!tabs[i].disabled) return i;
    }
    return -1;
  }
  
  private findPreviousValidTab(currentIndex: number): number {
    const tabs = this.tabs.toArray();
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (!tabs[i].disabled) return i;
    }
    return -1;
  }
}
\`\`\`

**Advanced QueryList Operations:**
\`\`\`typescript
@Component({
  selector: 'app-advanced-list',
  template: \`
    <div>
      <app-form-field *ngFor="let field of fields; let i = index" 
                     [config]="field" 
                     #formField>
      </app-form-field>
      <button (click)="validateRequired()">Validate Required</button>
      <button (click)="getValues()">Get Values</button>
      <button (click)="clearAll()">Clear All</button>
    </div>
  \`
})
export class AdvancedListComponent implements AfterViewInit {
  @ViewChildren(FormFieldComponent) formFields!: QueryList<FormFieldComponent>;
  
  fields = [
    { name: 'username', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'tel', required: false },
    { name: 'address', type: 'text', required: false }
  ];
  
  ngAfterViewInit() {
    // Subscribe to changes
    this.formFields.changes.subscribe(() => {
      console.log('Form fields updated');
    });
  }
  
  validateRequired() {
    const requiredFields = this.formFields.filter(field => field.isRequired);
    const results = requiredFields.map(field => ({
      name: field.name,
      valid: field.validate()
    }));
    
    console.log('Required field validation:', results);
    return results;
  }
  
  getValues() {
    const values = this.formFields.reduce((acc, field) => {
      acc[field.name] = field.getValue();
      return acc;
    }, {} as Record<string, any>);
    
    console.log('Form values:', values);
    return values;
  }
  
  clearAll() {
    this.formFields.forEach(field => field.clear());
  }
  
  // Get specific field by index
  getFieldByIndex(index: number) {
    const fields = this.formFields.toArray();
    return fields[index] || null;
  }
  
  // Get fields by property
  getFieldsByType(type: string) {
    return this.formFields.filter(field => field.type === type);
  }
  
  // Check if all fields are valid
  areAllFieldsValid() {
    return this.formFields.toArray().every(field => field.isValid());
  }
}
\`\`\`

**QueryList Methods:**
\`\`\`typescript
export class QueryListExample {
  @ViewChildren(ItemComponent) items!: QueryList<ItemComponent>;
  
  exampleMethods() {
    // Get array
    const itemsArray = this.items.toArray();
    
    // Get length
    const count = this.items.length;
    
    // Get first/last
    const first = this.items.first;
    const last = this.items.last;
    
    // Filter
    const activeItems = this.items.filter(item => item.isActive);
    
    // Find
    const specificItem = this.items.find(item => item.id === 'target');
    
    // Some/every
    const hasActive = this.items.some(item => item.isActive);
    const allValid = this.items.every(item => item.isValid());
    
    // Map
    const names = this.items.map(item => item.name);
    
    // ForEach
    this.items.forEach(item => item.refresh());
    
    // Reduce
    const total = this.items.reduce((sum, item) => sum + item.value, 0);
    
    // Subscribe to changes
    this.items.changes.subscribe(() => {
      console.log('QueryList changed');
    });
  }
}
\`\`\`

**Key Features:**
- **QueryList**: Special array-like object for multiple elements
- **Changes Observable**: Notified when elements are added/removed
- **Array Methods**: map, filter, reduce, forEach, etc.
- **Access Methods**: first, last, toArray, length
- **Dynamic**: Automatically updates when DOM changes`
  },
  {
    question: "What are the key features introduced in Angular 8 and how did differential loading work?",
    idealAnswer: `**Angular 8** introduced several important features focused on performance and developer experience.

**Key Features:**

**1. Differential Loading:**
- Automatically creates separate bundles for modern and legacy browsers
- Modern browsers get ES2015+ bundles (smaller, faster)
- Legacy browsers get ES5 bundles with polyfills
- Configured in \`angular.json\`:

\`\`\`json
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "differentialLoading": true
  }
}
\`\`\`

**2. Ivy Rendering Engine (Opt-in):**
\`\`\`typescript
// tsconfig.json
"angularCompilerOptions": {
  "enableIvy": true
}
\`\`\`

**3. Dynamic Imports for Lazy Loading:**
\`\`\`typescript
// Old syntax
const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

// New syntax (Angular 8+)
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];
\`\`\`

**4. FormBuilder Validators:**
\`\`\`typescript
this.form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
}, {
  validators: this.passwordMatchValidator
});
\`\`\`

**5. Web Workers Support:**
\`\`\`typescript
// ng generate web-worker my-worker
import { myWorker } from './my-worker.worker';

const worker = new Worker(new URL('./my-worker.worker', import.meta.url));
worker.postMessage('Hello from main thread');
\`\`\`

**Benefits:**
- **Performance**: Smaller bundles for modern browsers
- **Developer Experience**: Better IDE support and error messages
- **Future-ready**: Preparation for Ivy as default renderer`
  },
  {
    question: "Explain Angular 9's Ivy rendering engine and its impact on applications.",
    idealAnswer: `**Angular 9** made Ivy the default rendering engine, bringing significant improvements.

**Ivy Rendering Engine:**

**1. What is Ivy?**
- Next-generation compilation and rendering pipeline
- Incremental DOM-based approach
- Tree-shakable by design
- Better type checking and error reporting

**2. Key Benefits:**

**Bundle Size Reduction:**
\`\`\`bash
# Before Ivy (View Engine)
main.bundle.js: 250KB

# After Ivy
main.bundle.js: 180KB (28% reduction)
\`\`\`

**Faster Compilation:**
\`\`\`bash
# Build time improvements
ng build --prod
# 30-40% faster compilation
\`\`\`

**Improved Type Checking:**
\`\`\`typescript
// Better template type checking
@Component({
  selector: 'app-user',
  template: '<h1>{{ user.name }}</h1>' // Type-safe binding
})
export class UserComponent {
  user: User; // TypeScript validation in templates
}
\`\`\`

**3. Ivy Features:**

**Lazy Loading of Components:**
\`\`\`typescript
@Component({
  selector: 'app-lazy',
  template: 'Lazy loaded content',
  standalone: true // Angular 14+ feature
})
export class LazyComponent {}

// Dynamic import
const LazyComponent = await import('./lazy.component').then(m => m.LazyComponent);
\`\`\`

**Improved Testing:**
\`\`\`typescript
// TestBed with Ivy
TestBed.configureTestingModule({
  declarations: [TestComponent]
}).compileComponents();

// Faster test execution
// Better error messages
\`\`\`

**4. Migration Considerations:**
\`\`\`bash
# Automatic migration
ng update @angular/core @angular/cli

# Manual configuration
"angularCompilerOptions": {
  "enableIvy": true
}
\`\`\`

**5. Advanced Ivy Features:**
- **i18n**: Improved internationalization with message IDs
- **Elements**: Better Angular Elements support
- **Universal**: Enhanced server-side rendering

**Impact:**
- **Performance**: Smaller bundles, faster builds
- **Developer Experience**: Better debugging, type checking
- **Future-proof**: Foundation for standalone components`
  },
  {
    question: "What were the major features in Angular 10 and how did it improve the ecosystem?",
    idealAnswer: `**Angular 10** focused on ecosystem improvements, performance, and developer experience.

**Key Features:**

**1. New Date Range Picker:**
\`\`\`typescript
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-range',
  template: \`
    <mat-form-field>
      <mat-label>Select date range</mat-label>
      <mat-date-range-input [rangePicker]="picker">
        <input matStartDate placeholder="Start date">
        <input matEndDate placeholder="End date">
      </mat-date-range-input>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker #picker></mat-date-range-picker>
    </mat-form-field>
  \`
})
export class DateRangeComponent {}
\`\`\`

**2. Warning about CommonJS Imports:**
\`\`\`typescript
// Warning in build output
WARNING in src/app/app.module.ts depends on 'lodash'. CommonJS or AMD dependencies can cause optimization bailouts.

// Solution: Use ES modules
import { debounce } from 'lodash-es'; // ✅
import { debounce } from 'lodash';     // ❌ CommonJS
\`\`\`

**3. Optional Strict Settings:**
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,                    // Enable all strict type checking
    "noImplicitReturns": true,        // Error on functions without return
    "noFallthroughCasesInSwitch": true // Error on switch fallthrough
  }
}
\`\`\`

**4. Version Compatibility:**
\`\`\`json
// package.json
{
  "dependencies": {
    "@angular/core": "~10.0.0",
    "@angular/common": "~10.0.0",
    "tslib": "^2.0.0", // Updated TypeScript dependencies
    "zone.js": "~0.10.3"
  }
}
\`\`\`

**5. Performance Improvements:**
\`\`\`bash
# Bundle analyzer improvements
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json

# Better tree-shaking
# Unused code elimination
\`\`\`

**6. Deprecations and Removals:**
\`\`\`typescript
// Removed: View Engine compiler options
"angularCompilerOptions": {
  "enableIvy": true // Now default, no longer needed
}

// Updated: Form validation
this.form.get('email')?.setErrors({ custom: true });
\`\`\`

**7. Material Design Updates:**
\`\`\`typescript
// New Material components
import { 
  MatBadgeModule,
  MatBottomSheetModule,
  MatChipsModule 
} from '@angular/material';

// Enhanced theming
@import '~@angular/material/theming';
@include mat.core();
\`\`\`

**Benefits:**
- **Performance**: Better bundle optimization
- **Type Safety**: Stricter TypeScript settings
- **Developer Experience**: Clearer warnings and errors
- **Ecosystem**: Updated Material components and dependencies`
  },
  {
    question: "How did Angular 11 improve build performance and what were the key updates?",
    idealAnswer: `**Angular 11** focused on build performance, component test harnesses, and modern web standards.

**Key Features:**

**1. Faster Builds:**
\`\`\`bash
# Build improvements
ng build --prod
# 98% faster builds reported
# 11% smaller bundles

# Automatic inlining of fonts
# CSS optimization
\`\`\`

**2. Component Test Harnesses:**
\`\`\`typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('ButtonComponent', () => {
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should trigger button click', async () => {
    const button = await loader.getHarness(MatButtonHarness);
    await button.click();
    expect(fixture.componentInstance.clicked).toBe(true);
  });
});
\`\`\`

**3. Updated Hot Module Replacement (HMR):**
\`\`\`typescript
// angular.json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "hmr": true,
    "hmrWarning": false
  }
}

// Faster development experience
// State preservation during rebuilds
\`\`\`

**4. Improved Reporting and Logging:**
\`\`\`bash
# Better build output
ng build --verbose

# Detailed bundle analysis
ng build --stats-json && npx webpack-bundle-analyzer dist/stats.json
\`\`\`

**5. Strict Mode by Default:**
\`\`\`json
// New projects use strict mode
ng new my-app --strict

// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
\`\`\`

**6. Webpack 5 Support:**
\`\`\`typescript
// Improved module federation
// Better tree-shaking
// Faster builds
\`\`\`

**7. Accessibility Improvements:**
\`\`\`typescript
// Better ARIA support
// Screen reader compatibility
// Keyboard navigation improvements
\`\`\`

**8. Updated Dependencies:**
\`\`\`json
{
  "dependencies": {
    "@angular/core": "~11.0.0",
    "@angular/common": "~11.0.0",
    "@angular/compiler": "~11.0.0",
    "@angular/animations": "~11.0.0",
    "typescript": "~4.0.0"
  }
}
\`\`\`

**Benefits:**
- **Performance**: Significantly faster builds and smaller bundles
- **Testing**: Better component testing with harnesses
- **Development**: Improved HMR and developer experience
- **Type Safety**: Strict mode enabled by default`
  },
  {
    question: "What were the major changes in Angular 12 and how did it improve productivity?",
    idealAnswer: `**Angular 12** introduced productivity improvements, better styling, and enhanced framework features.

**Key Features:**

**1. Inline Sass in Components:**
\`\`\`typescript
@Component({
  selector: 'app-styled',
  template: \`
    <div class="container">
      <h1>Hello World</h1>
    </div>
  \`,
  styles: \`
    .container {
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      padding: 20px;
      border-radius: 8px;
      
      h1 {
        color: white;
        font-size: 2rem;
        margin: 0;
      }
    }
  \`
})
export class StyledComponent {}
\`\`\`

**2. Improved Nullish Coalescing:**
\`\`\`typescript
// Better support for optional chaining
const user = profile?.user ?? defaultUser;
const config = settings?.config ?? defaultConfig;
\`\`\`

**3. Context Help for Angular Language Service:**
\`\`\`typescript
// Hover over Angular directives
// Get contextual documentation
// Better autocomplete suggestions

@Component({
  selector: 'app-example',
  // Hover over @Component for documentation
})
\`\`\`

**4. Production Builds by Default:**
\`\`\`bash
# ng serve now uses production optimizations
ng serve --prod # No longer needed
ng serve # Uses production optimizations by default
\`\`\`

**5. Improved Framework Features:**
\`\`\`typescript
// Better form validation
this.form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
}, {
  updateOn: 'blur' // New validation timing option
});

// Enhanced router features
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { requiresAuth: true }
  }
];
\`\`\`

**6. Accessibility Improvements:**
\`\`\`typescript
// Better ARIA support
@Component({
  selector: 'app-accessible',
  template: \`
    <button 
      [attr.aria-label]="buttonLabel"
      [attr.aria-describedby]="descriptionId"
      (click)="handleClick()">
      Click me
    </button>
    <div [id]="descriptionId" class="sr-only">
      This button performs an important action
    </div>
  \`
})
\`\`\`

**7. Updated Dependencies:**
\`\`\`json
{
  "dependencies": {
    "@angular/core": "~12.0.0",
    "@angular/common": "~12.0.0",
    "@angular/compiler": "~12.0.0",
    "typescript": "~4.2.0",
    "zone.js": "~0.11.4"
  }
}
\`\`\`

**8. Performance Improvements:**
\`\`\`bash
# Faster compilation
# Better incremental builds
# Improved HMR performance
\`\`\`

**Benefits:**
- **Productivity**: Inline Sass, better language service
- **Performance**: Production optimizations by default
- **Accessibility**: Enhanced ARIA support
- **Developer Experience**: Better tooling and documentation`
  },
  {
    question: "Explain Angular 13's no-Views feature and other major improvements.",
    idealAnswer: `**Angular 13** introduced significant architectural changes with no-Views and improved performance.

**Key Features:**

**1. No-Views Architecture:**
\`\`\`typescript
// Before Angular 13 (View Engine)
@Component({
  selector: 'app-example',
  template: '<div>Hello World</div>',
  styles: ['div { color: blue; }']
})
export class ExampleComponent {
  // Generated view files
  // Component factory creation
}

// Angular 13+ (Ivy only)
@Component({
  selector: 'app-example',
  template: '<div>Hello World</div>',
  styles: ['div { color: blue; }']
})
export class ExampleComponent {
  // No view files generated
  // Direct component instantiation
  // Smaller bundle sizes
}
\`\`\`

**2. Improved Component Testing:**
\`\`\`typescript
// Better TestBed setup
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleComponent]
    }).compileComponents();
  });

  it('should render component', () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Hello World');
  });
});
\`\`\`

**3. Enhanced Angular CLI:**
\`\`\`bash
# Improved build system
ng build --configuration=production

# Better dependency management
ng update @angular/core @angular/cli

# New schematics
ng generate component my-component --standalone
\`\`\`

**4. Improved i18n:**
\`\`\`typescript
// Better internationalization
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-localized',
  template: \`
    <div>{{ date | date:'full' }}</div>
    <div>{{ number | number:'1.2-2' }}</div>
  \`
})
export class LocalizedComponent {
  date = new Date();
  number = 1234.567;
}
\`\`\`

**5. Updated Dependencies:**
\`\`\`json
{
  "dependencies": {
    "@angular/core": "~13.0.0",
    "@angular/common": "~13.0.0",
    "@angular/compiler": "~13.0.0",
    "typescript": "~4.4.0",
    "zone.js": "~0.11.4"
  }
}
\`\`\`

**6. Performance Improvements:**
\`\`\`bash
# Smaller bundle sizes
# Faster compilation
# Better tree-shaking
# Improved HMR
\`\`\`

**7. Accessibility Enhancements:**
\`\`\`typescript
// Better ARIA support
@Component({
  selector: 'app-accessible',
  template: \`
    <button 
      [attr.aria-label]="label"
      [attr.aria-expanded]="isExpanded"
      (click)="toggle()">
      Toggle
    </button>
  \`
})
export class AccessibleComponent {
  label = 'Toggle section';
  isExpanded = false;
  
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
\`\`\`

**Benefits:**
- **Bundle Size**: No view files = smaller bundles
- **Performance**: Faster compilation and runtime
- **Testing**: Improved component testing experience
- **Accessibility**: Better ARIA support and screen reader compatibility`
  },
  {
    question: "What were the major features in Angular 14 and how did standalone components change development?",
    idealAnswer: `**Angular 14** introduced revolutionary standalone components and typed forms, fundamentally changing Angular development.

**Key Features:**

**1. Standalone Components:**
\`\`\`typescript
// Before Angular 14
@Component({
  selector: 'app-user',
  template: '<div>{{ user.name }}</div>',
})
export class UserComponent {
  user = { name: 'John' };
}

// Angular 14+ Standalone Component
@Component({
  selector: 'app-user',
  template: '<div>{{ user.name }}</div>',
  standalone: true,
  imports: [CommonModule] // Import what you need
})
export class UserComponent {
  user = { name: 'John' };
}

// Bootstrap standalone application
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
\`\`\`

**2. Typed Forms:**
\`\`\`typescript
// Before Angular 14 (untyped)
const profileForm = this.fb.group({
  name: [''],
  email: [''],
  age: [0]
});

// Angular 14+ (typed)
interface ProfileForm {
  name: FormControl<string>;
  email: FormControl<string | null>;
  age: FormControl<number>;
}

const profileForm = this.fb.group<ProfileForm>({
  name: this.fb.control('', { nonNullable: true }),
  email: this.fb.control('', { nonNullable: true }),
  age: this.fb.control(0, { nonNullable: true })
});

// Type-safe access
profileForm.value.name; // string
profileForm.controls.email.value; // string
\`\`\`

**3. Enhanced Router Features:**
\`\`\`typescript
// New router features
const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],
    children: [
      {
        path: 'users',
        component: UserListComponent,
        title: 'User Management' // New title property
      }
    ]
  }
];

// Route titles in browser
// Automatic page title updates
\`\`\`

**4. Improved CLI Features:**
\`\`\`bash
# Generate standalone components
ng generate component user --standalone

# Page title schematics
ng generate @angular/schematics:page-title

# Better dependency updates
ng update @angular/core @angular/cli
\`\`\`

**5. Extended Diagnostics:**
\`\`\`typescript
// Better compile-time checks
// Improved error messages
// Performance diagnostics

@Component({
  selector: 'app-example',
  template: '<div>{{ undefinedProperty }}</div>' // Better error reporting
})
\`\`\`

**6. Accessibility Improvements:**
\`\`\`typescript
// Better ARIA support
@Component({
  selector: 'app-accessible',
  template: \`
    <button 
      [attr.aria-label]="buttonLabel"
      [attr.aria-describedby]="descriptionId"
      (click)="handleClick()">
      {{ buttonText }}
    </button>
  \`
})
export class AccessibleComponent {
  buttonLabel = 'Submit form';
  buttonText = 'Submit';
  descriptionId = 'button-description';
}
\`\`\`

**7. Performance Enhancements:**
\`\`\`bash
# Smaller bundles with standalone components
# Faster compilation
# Better tree-shaking
# Improved HMR
\`\`\`

**Benefits:**
- **Modularity**: Standalone components eliminate need for NgModules
- **Type Safety**: Typed forms provide better TypeScript integration
- **Performance**: Smaller bundles and faster builds
- **Developer Experience**: Simplified component creation and management`
  },
  {
    question: "How did Angular 15 improve standalone components and what were the key features?",
    idealAnswer: `**Angular 15** enhanced standalone components with directive composition, improved performance, and better developer experience.

**Key Features:**

**1. Directive Composition API:**
\`\`\`typescript
// Before Angular 15
@Component({
  selector: 'app-card',
  template: '<div class="card"><ng-content></ng-content></div>',
  hostDirectives: [MatCard] // Limited host directive support
})
export class CardComponent {}

// Angular 15+ Directive Composition
@Component({
  selector: 'app-card',
  template: '<ng-content></ng-content>',
  hostDirectives: [
    {
      directive: MatCard,
      inputs: ['title', 'subtitle'],
      outputs: ['cardClick']
    }
  ]
})
export class CardComponent {
  // Inherit MatCard's functionality
  // Selective input/output mapping
}
\`\`\`

**2. Enhanced Standalone Components:**
\`\`\`typescript
// Better standalone component support
@Component({
  selector: 'app-user-profile',
  template: \`
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ user.name }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>{{ user.email }}</p>
      </mat-card-content>
    </mat-card>
  \`,
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCardHeaderModule,
    MatCardTitleModule,
    MatCardContentModule
  ]
})
export class UserProfileComponent {
  @Input() user!: User;
}
\`\`\`

**3. Improved Router Features:**
\`\`\`typescript
// Better router guards
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

// Functional router interceptors
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request:', req.url);
  return next(req);
};
\`\`\`

**4. Stack Blitz Integration:**
\`\`\`bash
# Better online development experience
# Direct StackBlitz integration
# Live sharing and collaboration

ng serve --live-reload
\`\`\`

**5. Improved CLI and Schematics:**
\`\`\`bash
# Better standalone component generation
ng generate component user --standalone --inline-style

# Enhanced dependency management
ng update @angular/core @angular/cli

# Better project setup
ng new my-app --standalone
\`\`\`

**6. Performance Improvements:**
\`\`\`typescript
// Better tree-shaking
// Smaller bundle sizes
// Faster compilation
// Improved HMR performance

// Lazy loading improvements
const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent)
  }
];
\`\`\`

**7. Enhanced Accessibility:**
\`\`\`typescript
// Better ARIA support
@Component({
  selector: 'app-accessible-form',
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" 
               [attr.aria-describedby]="emailError ? 'email-error' : null">
        @if (emailError) {
          <mat-error id="email-error">{{ emailError }}</mat-error>
        }
      </mat-form-field>
    </form>
  \`,
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule]
})
export class AccessibleFormComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  
  get emailError() {
    const control = this.form.get('email');
    return control?.invalid && control?.touched ? 'Please enter a valid email' : null;
  }
}
\`\`\`

**Benefits:**
- **Composition**: Directive composition API for better code reuse
- **Performance**: Improved tree-shaking and smaller bundles
- **Developer Experience**: Better CLI and online development
- **Accessibility**: Enhanced ARIA support and form validation`
  },
  {
    question: "What were the major features in Angular 16 and how did signals change reactivity?",
    idealAnswer: `**Angular 16** introduced signals, hydration, and significant performance improvements, fundamentally changing Angular's reactivity model.

**Key Features:**

**1. Signals - New Reactivity Model:**
\`\`\`typescript
import { signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>Count: {{ count() }}</div>
    <div>Doubled: {{ doubledCount() }}</div>
    <button (click)="increment()">Increment</button>
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class CounterComponent {
  // Signal for state
  count = signal(0);
  
  // Computed signal
  doubledCount = computed(() => this.count() * 2);
  
  // Effect for side effects
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
  increment() {
    this.count.set(this.count() + 1);
  }
}
\`\`\`

**2. Server-Side Rendering (SSR) and Hydration:**
\`\`\`typescript
// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideClientHydration() // Enable hydration
  ]
});

// server.ts
import { renderApplication } from '@angular/platform-server';
import { provideServerRendering } from '@angular/platform-server';

export default async function render(url: string, document: string) {
  const html = await renderApplication(AppComponent, {
    document,
    url,
    providers: [provideServerRendering()]
  });
  
  return html;
}
\`\`\`

**3. Required Inputs:**
\`\`\`typescript
@Component({
  selector: 'app-user-card',
  template: '<div>{{ user.name }} - {{ user.email }}</div>',
  standalone: true,
  imports: [CommonModule]
})
export class UserCardComponent {
  // Required input - will cause compile-time error if not provided
  @Input({ required: true }) user!: User;
  
  // Optional input with transform
  @Input({ transform: booleanAttribute }) isAdmin = false;
}

// Usage
<app-user-card [user]="currentUser" />
\`\`\`

**4. Enhanced Router Features:**
\`\`\`typescript
// Better router configuration
const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],
    resolve: {
      users: () => inject(UserService).getUsers()
    },
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        title: (params) => \`User \${params['id']}\`
      }
    ]
  }
];

// Functional interceptors
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: \`Bearer \${token}\` }
    });
  }
  
  return next(req);
};
\`\`\`

**5. Improved DevTools:**
\`\`\`typescript
// Better debugging with signals
// Angular DevTools integration
// Performance profiling
\`\`\`

**6. Performance Improvements:**
\`\`\`bash
# Faster builds
# Smaller bundles
# Better HMR
# Improved SSR performance

ng build --configuration=production
ng serve
\`\`\`

**7. Enhanced Accessibility:**
\`\`\`typescript
@Component({
  selector: 'app-accessible-button',
  template: \`
    <button 
      [attr.aria-label]="label"
      [attr.aria-pressed]="isPressed"
      (click)="toggle()"
      [disabled]="disabled">
      <ng-content />
    </button>
  \`,
  standalone: true
})
export class AccessibleButtonComponent {
  @Input() label = '';
  @Input() disabled = false;
  isPressed = signal(false);
  
  toggle() {
    this.isPressed.set(!this.isPressed());
  }
}
\`\`\`

**Benefits:**
- **Reactivity**: Signals provide fine-grained reactivity
- **Performance**: Hydration improves initial page load
- **Type Safety**: Required inputs prevent runtime errors
- **Developer Experience**: Better debugging and tooling`
  },
  {
    question: "What were the key features in Angular 17 and how did it improve the developer experience?",
    idealAnswer: `**Angular 17** introduced experimental deferrable views, improved control flow, and enhanced developer experience with better tooling.

**Key Features:**

**1. Deferrable Views (Experimental):**
\`\`\`typescript
@Component({
  selector: 'app-user-list',
  template: \`
    <h2>User List</h2>
    
    @defer (on timer(2s)) {
      <app-user-details [userId]="selectedUserId" />
    } @placeholder {
      <div>Loading user details...</div>
    } @error {
      <div>Failed to load user details</div>
    }
    
    @defer (on viewport) {
      <app-heavy-chart />
    } @loading {
      <div>Preparing chart...</div>
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class UserListComponent {
  selectedUserId = signal<string | null>(null);
}
\`\`\`

**2. Improved Control Flow:**
\`\`\`typescript
@Component({
  selector: 'app-improved-control-flow',
  template: \`
    <!-- New if/else syntax -->
    @if (isLoading) {
      <div>Loading...</div>
    } @else if (error) {
      <div>Error: {{ error }}</div>
    } @else {
      <div>Content loaded successfully</div>
    }
    
    <!-- Enhanced for loop -->
    @for (user of users(); track user.id) {
      <app-user-card [user]="user" />
    } @empty {
      <div>No users found</div>
    }
    
    <!-- Switch statement -->
    @switch (userRole) {
      @case ('admin') {
        <app-admin-panel />
      } @case ('user') {
        <app-user-panel />
      } @default {
        <app-guest-panel />
      }
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class ImprovedControlFlowComponent {
  isLoading = signal(false);
  error = signal<string | null>(null);
  users = signal<User[]>([]);
  userRole = signal<'admin' | 'user' | 'guest'>('guest');
}
\`\`\`

**3. Enhanced Angular DevTools:**
\`\`\`typescript
// Better debugging experience
// Signal inspection
// Component tree visualization
// Performance profiling
// Router state inspection
\`\`\`

**4. Improved Build System:**
\`\`\`bash
# Faster builds with esbuild
ng build --configuration=production

# Better incremental builds
# Improved HMR performance
# Enhanced bundle analysis

# New build options
ng build --configuration=production --source-map=false
\`\`\`

**5. Better Standalone Component Support:**
\`\`\`typescript
// Enhanced standalone component ecosystem
@Component({
  selector: 'app-standalone-feature',
  template: \`
    <h2>Feature Component</h2>
    <app-child-component [data]="featureData" />
  \`,
  standalone: true,
  imports: [CommonModule, ChildComponent]
})
export class StandaloneFeatureComponent {
  featureData = signal({ title: 'My Feature', description: 'Description' });
}
\`\`\`

**6. Improved SSR and Hydration:**
\`\`\`typescript
// Better server-side rendering
// Enhanced hydration process
// Improved performance metrics

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay())
  ]
};
\`\`\`

**7. Enhanced Accessibility:**
\`\`\`typescript
@Component({
  selector: 'app-accessible-form',
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      @for (field of formFields; track field.name) {
        <mat-form-field>
          <mat-label>{{ field.label }}</mat-label>
          <input matInput [formControlName]="field.name" 
                 [attr.aria-describedby]="field.name + '-error'"
                 [attr.aria-invalid]="form.get(field.name)?.invalid">
          @if (form.get(field.name)?.invalid && form.get(field.name)?.touched) {
            <mat-error [id]="field.name + '-error'">
              {{ field.errorMessage }}
            </mat-error>
          }
        </mat-form-field>
      }
    </form>
  \`,
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatError]
})
export class AccessibleFormComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });
  
  formFields = [
    { name: 'username', label: 'Username', errorMessage: 'Username is required' },
    { name: 'email', label: 'Email', errorMessage: 'Valid email is required' }
  ];
}
\`\`\`

**8. Performance Improvements:**
\`\`\`bash
# Faster compilation
# Smaller bundle sizes
# Better HMR performance
# Improved SSR metrics

# New performance features
ng build --configuration=production --named-chunks
\`\`\`

**Benefits:**
- **Performance**: Deferrable views improve initial load time
- **Developer Experience**: Better control flow syntax and debugging
- **Accessibility**: Enhanced form validation and ARIA support
- **Tooling**: Improved Angular DevTools and build system`
  },
  {
    question: "What are the key features in Angular 18 and how does it improve performance and developer experience?",
    idealAnswer: `**Angular 18** focuses on performance improvements, enhanced developer experience, and better integration with modern web standards.

**Key Features:**

**1. Enhanced Signals:**
\`\`\`typescript
import { signal, computed, effect, inject } from '@angular/core';

@Component({
  selector: 'app-advanced-signals',
  template: \`
    <div>Counter: {{ count() }}</div>
    <div>Computed: {{ computedValue() }}</div>
    <div>Derived: {{ derivedValue() }}</div>
    <button (click)="increment()">Increment</button>
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class AdvancedSignalsComponent {
  count = signal(0);
  
  // Enhanced computed signals
  computedValue = computed(() => {
    return this.count() * 2;
  });
  
  // Derived computed signals
  derivedValue = computed(() => {
    return this.computedValue() + 10;
  });
  
  // Enhanced effects with cleanup
  constructor() {
    effect((onCleanup) => {
      console.log('Count changed:', this.count());
      
      onCleanup(() => {
        console.log('Cleanup effect');
      });
    });
  }
  
  increment() {
    this.count.set(this.count() + 1);
  }
}
\`\`\`

**2. Improved Zone.js Integration:**
\`\`\`typescript
// Better zone.js configuration
// Optional zoneless applications
// Improved performance with zone.js optimizations

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Experimental zoneless mode
    // provideExperimentalZonelessChangeDetection()
  ]
};
\`\`\`

**3. Enhanced Control Flow:**
\`\`\`typescript
@Component({
  selector: 'app-enhanced-control-flow',
  template: \`
    <!-- Enhanced defer with multiple triggers -->
    @defer (on timer(1s); on viewport) {
      <app-heavy-component />
    } @loading {
      <div>Loading component...</div>
    } @error {
      <div>Failed to load</div>
    }
    
    <!-- Improved switch with type safety -->
    @switch (status()) {
      @case ('loading') {
        <app-loading-spinner />
      } @case ('success') {
        <app-success-message />
      } @case ('error') {
        <app-error-message [error]="error()" />
      }
    }
    
    <!-- Enhanced for loop with index -->
    @for (item of items(); track item.id; let i = $index) {
      <div>{{ i + 1 }}. {{ item.name }}</div>
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class EnhancedControlFlowComponent {
  status = signal<'loading' | 'success' | 'error'>('loading');
  error = signal<string | null>(null);
  items = signal<{ id: number; name: string }[]>([]);
}
\`\`\`

**4. Better Build Performance:**
\`\`\`bash
# Enhanced build system
ng build --configuration=production

# Improved incremental builds
# Better caching
# Faster HMR

# New build options
ng build --configuration=production --source-map=false --localize
\`\`\`

**5. Enhanced Developer Experience:**
\`\`\`typescript
// Better TypeScript integration
// Improved error messages
// Enhanced Angular Language Service

// Better autocomplete and documentation
@Component({
  selector: 'app-example',
  // Enhanced IDE support
})
\`\`\`

**6. Improved SSR and Hydration:**
\`\`\`typescript
// Better server-side rendering
// Enhanced hydration process
// Improved performance metrics

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withIncrementalHydration())
  ]
};
\`\`\`

**7. Enhanced Accessibility:**
\`\`\`typescript
@Component({
  selector: 'app-accessible-component',
  template: \`
    <button 
      [attr.aria-label]="buttonLabel"
      [attr.aria-pressed]="isPressed()"
      (click)="handleClick()"
      [disabled]="disabled()">
      {{ buttonText }}
    </button>
    
    <!-- Enhanced form validation -->
    <form [formGroup]="form" (ngSubmit)="submit()">
      @for (field of formFields(); track field.name) {
        <mat-form-field>
          <mat-label>{{ field.label }}</mat-label>
          <input matInput [formControlName]="field.name"
                 [attr.aria-describedby]="field.name + '-help'"
                 [attr.aria-invalid]="form.get(field.name)?.invalid">
          <mat-hint [id]="field.name + '-help'">{{ field.help }}</mat-hint>
          @if (form.get(field.name)?.invalid && form.get(field.name)?.touched) {
            <mat-error>{{ field.errorMessage }}</mat-error>
          }
        </mat-form-field>
      }
    </form>
  \`,
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatHint, MatError]
})
export class AccessibleComponent {
  buttonLabel = 'Submit';
  buttonText = 'Submit';
  disabled = signal(false);
  isPressed = signal(false);
  
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });
  
  formFields = signal([
    { name: 'username', label: 'Username', help: 'Enter your username', errorMessage: 'Username is required' },
    { name: 'email', label: 'Email', help: 'Enter your email address', errorMessage: 'Valid email is required' }
  ]);
  
  handleClick() {
    this.isPressed.set(true);
    setTimeout(() => this.isPressed.set(false), 200);
  }
}
\`\`\`

**8. Performance Improvements:**
\`\`\`bash
# Faster compilation
# Smaller bundle sizes
# Better HMR performance
# Improved SSR metrics

# Enhanced performance features
ng build --configuration=production --named-chunks --stats-json
\`\`\`

**Benefits:**
- **Performance**: Enhanced signals and zone.js integration
- **Developer Experience**: Better control flow and tooling
- **Accessibility**: Improved form validation and ARIA support
- **Build System**: Faster builds and better optimization`
  },
  {
    question: "What are the key features in Angular 19 and how does it continue to evolve the framework?",
    idealAnswer: `**Angular 19** continues the evolution with enhanced signals, improved performance, and better developer experience.

**Key Features:**

**1. Enhanced Signals Ecosystem:**
\`\`\`typescript
import { signal, computed, effect, inject, toSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signal-router',
  template: \`
    <div>Current Route: {{ currentRoute() }}</div>
    <div>Query Params: {{ queryParams() }}</div>
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class SignalRouterComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  
  // Convert observables to signals
  currentRoute = toSignal(this.route.url);
  queryParams = toSignal(this.route.queryParams);
  
  constructor() {
    effect(() => {
      console.log('Route changed:', this.currentRoute());
    });
  }
}
\`\`\`

**2. Improved Control Flow:**
\`\`\`typescript
@Component({
  selector: 'app-advanced-control-flow',
  template: \`
    <!-- Enhanced defer with prefetch -->
    @defer (on prefetch; on timer(2s)) {
      <app-heavy-component [data]="data()" />
    } @loading {
      <div>Prefetching component...</div>
    } @error {
      <div>Failed to load component</div>
    }
    
    <!-- Enhanced switch with pattern matching -->
    @switch (userRole()) {
      @case ('admin' as const) {
        <app-admin-dashboard />
      } @case ('user' as const) {
        <app-user-dashboard />
      } @case ('guest' as const) {
        <app-guest-view />
      }
    }
    
    <!-- Enhanced for with destructuring -->
    @for (user of users(); track user.id; let isEven = $even; let isLast = $last) {
      <div [class.even]="isEven" [class.last]="isLast">
        {{ user.name }} - {{ user.email }}
      </div>
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class AdvancedControlFlowComponent {
  data = signal({ items: [], loading: false });
  userRole = signal<'admin' | 'user' | 'guest'>('guest');
  users = signal<User[]>([]);
}
\`\`\`

**3. Enhanced Build System:**
\`\`\`bash
# Improved build performance
ng build --configuration=production

# Better incremental builds
# Enhanced caching
# Faster HMR

# New build features
ng build --configuration=production --source-map=false --localize --named-chunks
\`\`\`

**4. Better Developer Experience:**
\`\`\`typescript
// Enhanced Angular Language Service
// Better TypeScript integration
// Improved error messages

// Better autocomplete and documentation
@Component({
  selector: 'app-example',
  // Enhanced IDE support with signals
})
\`\`\`

**5. Improved SSR and Hydration:**
\`\`\`typescript
// Better server-side rendering
// Enhanced hydration process
// Improved performance metrics

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withIncrementalHydration(), withNoHttpTransferCache())
  ]
};
\`\`\`

**6. Enhanced Accessibility:**
\`\`\`typescript
@Component({
  selector: 'app-accessible-form',
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      @for (field of formFields(); track field.name) {
        <mat-form-field>
          <mat-label>{{ field.label }}</mat-label>
          <input matInput [formControlName]="field.name"
                 [attr.aria-describedby]="field.name + '-help'"
                 [attr.aria-invalid]="form.get(field.name)?.invalid"
                 [attr.aria-required]="field.required">
          <mat-hint [id]="field.name + '-help'">{{ field.help }}</mat-hint>
          @if (form.get(field.name)?.invalid && form.get(field.name)?.touched) {
            <mat-error>{{ field.errorMessage }}</mat-error>
          }
        </mat-form-field>
      }
    </form>
  \`,
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatHint, MatError]
})
export class AccessibleFormComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  
  formFields = signal([
    { name: 'username', label: 'Username', help: 'Enter your username', required: true, errorMessage: 'Username is required' },
    { name: 'email', label: 'Email', help: 'Enter your email address', required: true, errorMessage: 'Valid email is required' },
    { name: 'password', label: 'Password', help: 'Enter a secure password', required: true, errorMessage: 'Password must be at least 8 characters' }
  ]);
}
\`\`\`

**7. Performance Improvements:**
\`\`\`bash
# Faster compilation
# Smaller bundle sizes
# Better HMR performance
# Improved SSR metrics

# Enhanced performance features
ng build --configuration=production --named-chunks --stats-json --analyze
\`\`\`

**8. Enhanced Testing:**
\`\`\`typescript
// Better testing utilities
// Enhanced TestBed
// Improved component testing

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('EnhancedComponent', () => {
  let component: EnhancedComponent;
  let fixture: ComponentFixture<EnhancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EnhancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render with signals', () => {
    component.count.set(5);
    fixture.detectChanges();
    
    const element = fixture.debugElement.query(By.css('.count'));
    expect(element.nativeElement.textContent).toContain('5');
  });
});
\`\`\`

**Benefits:**
- **Reactivity**: Enhanced signals ecosystem with better integration
- **Performance**: Improved build system and runtime performance
- **Developer Experience**: Better tooling and debugging capabilities
- **Accessibility**: Enhanced form validation and ARIA support
- **Testing**: Better testing utilities and component testing`
  },
  {
    question: "What are the key features in Angular 20 and how does it represent the future of the framework?",
    idealAnswer: `**Angular 20** represents a major milestone with enhanced signals, improved performance, and better developer experience.

**Key Features:**

**1. Mature Signals Ecosystem:**
\`\`\`typescript
import { signal, computed, effect, inject, toSignal, linkedSignal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mature-signals',
  template: \`
    <div>User: {{ user()?.name }}</div>
    <div>Posts: {{ posts().length }}</div>
    <div>Loading: {{ isLoading() }}</div>
    
    @for (post of posts(); track post.id) {
      <app-post-card [post]="post" />
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class MatureSignalsComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  
  // Linked signals for reactive data
  userId = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter(id => id !== null),
    map(id => parseInt(id!))
  ));
  
  user = linkedSignal(() => {
    const id = this.userId();
    return id ? this.loadUser(id) : null;
  });
  
  posts = linkedSignal(() => {
    const id = this.userId();
    return id ? this.loadPosts(id) : [];
  });
  
  isLoading = signal(false);
  
  private loadUser(id: number) {
    this.isLoading.set(true);
    return this.http.get<User>(\`/api/users/\${id}\`);
  }
  
  private loadPosts(id: number) {
    return this.http.get<Post[]>(\`/api/users/\${id}/posts\`);
  }
}
\`\`\`

**2. Enhanced Control Flow:**
\`\`\`typescript
@Component({
  selector: 'app-future-control-flow',
  template: \`
    <!-- Enhanced defer with multiple conditions -->
    @defer (on prefetch; on timer(1s); on interaction(trigger)) {
      <app-heavy-component [data]="data()" />
    } @loading {
      <div>Loading with prefetch...</div>
    } @error {
      <div>Failed to load component</div>
    }
    
    <!-- Enhanced switch with guards -->
    @switch (userRole()) {
      @case ('admin' as const) when (hasAdminAccess()) {
        <app-admin-dashboard />
      } @case ('user' as const) when (isUserActive()) {
        <app-user-dashboard />
      } @case ('guest' as const) {
        <app-guest-view />
      }
    }
    
    <!-- Enhanced for with advanced features -->
    @for (user of filteredUsers(); track user.id; let i = $index; let isEven = $even; let isLast = $last) {
      <app-user-card 
        [user]="user" 
        [index]="i"
        [isEven]="isEven"
        [isLast]="isLast"
        (userSelected)="onUserSelected($event)" />
    } @empty {
      <app-empty-state [message]="emptyMessage()" />
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class FutureControlFlowComponent {
  userRole = signal<'admin' | 'user' | 'guest'>('guest');
  users = signal<User[]>([]);
  filterText = signal('');
  
  filteredUsers = computed(() => {
    const text = this.filterText().toLowerCase();
    return this.users().filter(user => 
      user.name.toLowerCase().includes(text)
    );
  });
  
  hasAdminAccess = () => true;
  isUserActive = () => true;
  emptyMessage = () => 'No users found';
  
  onUserSelected(user: User) {
    console.log('User selected:', user);
  }
}
\`\`\`

**3. Enhanced Build System:**
\`\`\`bash
# Advanced build system
ng build --configuration=production

# Better incremental builds
# Enhanced caching
# Faster HMR
# Improved bundle analysis

# New build features
ng build --configuration=production --source-map=false --localize --named-chunks --analyze
\`\`\`

**4. Better Developer Experience:**
\`\`\`typescript
// Enhanced Angular Language Service
// Better TypeScript integration
// Improved error messages
// Enhanced debugging

// Better autocomplete and documentation
@Component({
  selector: 'app-example',
  // Enhanced IDE support with advanced signals
})
\`\`\`

**5. Improved SSR and Hydration:**
\`\`\`typescript
// Advanced server-side rendering
// Enhanced hydration process
// Improved performance metrics

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withEventReplay(), 
      withIncrementalHydration(), 
      withNoHttpTransferCache(),
      withHttpTransferCacheOptions({
        includePostRequests: true,
        excludeHeaders: ['authorization']
      })
    )
  ]
};
\`\`\`

**6. Enhanced Accessibility:**
\`\`\`typescript
@Component({
  selector: 'app-future-accessible-form',
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      @for (field of formFields(); track field.name) {
        <mat-form-field>
          <mat-label>{{ field.label }}</mat-label>
          <input matInput [formControlName]="field.name"
                 [attr.aria-describedby]="field.name + '-help'"
                 [attr.aria-invalid]="form.get(field.name)?.invalid"
                 [attr.aria-required]="field.required"
                 [attr.aria-describedby]="field.name + '-help ' + field.name + '-error'">
          <mat-hint [id]="field.name + '-help'">{{ field.help }}</mat-hint>
          @if (form.get(field.name)?.invalid && form.get(field.name)?.touched) {
            <mat-error [id]="field.name + '-error'">{{ field.errorMessage }}</mat-error>
          }
        </mat-form-field>
      }
    </form>
  \`,
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatHint, MatError]
})
export class FutureAccessibleFormComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  });
  
  formFields = signal([
    { name: 'username', label: 'Username', help: 'Enter your username', required: true, errorMessage: 'Username is required' },
    { name: 'email', label: 'Email', help: 'Enter your email address', required: true, errorMessage: 'Valid email is required' },
    { name: 'password', label: 'Password', help: 'Enter a secure password', required: true, errorMessage: 'Password must be at least 8 characters' },
    { name: 'confirmPassword', label: 'Confirm Password', help: 'Confirm your password', required: true, errorMessage: 'Passwords must match' }
  ]);
}
\`\`\`

**7. Performance Improvements:**
\`\`\`bash
# Advanced performance optimizations
# Faster compilation
# Smaller bundle sizes
# Better HMR performance
# Improved SSR metrics

# Enhanced performance features
ng build --configuration=production --named-chunks --stats-json --analyze --bundle-optimization
\`\`\`

**8. Enhanced Testing:**
\`\`\`typescript
// Advanced testing utilities
// Enhanced TestBed
// Improved component testing
// Better signal testing

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { signal } from '@angular/core';

describe('FutureComponent', () => {
  let component: FutureComponent;
  let fixture: ComponentFixture<FutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render with advanced signals', () => {
    component.count.set(10);
    fixture.detectChanges();
    
    const element = fixture.debugElement.query(By.css('.count'));
    expect(element.nativeElement.textContent).toContain('10');
  });
});
\`\`\`

**Benefits:**
- **Reactivity**: Mature signals ecosystem with advanced features
- **Performance**: Advanced build system and runtime optimizations
- **Developer Experience**: Enhanced tooling and debugging capabilities
- **Accessibility**: Advanced form validation and ARIA support
- **Testing**: Advanced testing utilities and better signal testing`
  },
  {
    question: "What are the key features in Angular 21 and how does it represent the latest evolution of the framework?",
    idealAnswer: `**Angular 21** represents the latest evolution with cutting-edge features, enhanced performance, and improved developer experience.

**Key Features:**

**1. Advanced Signals Ecosystem:**
\`\`\`typescript
import { signal, computed, effect, inject, toSignal, linkedSignal, resource } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advanced-signals-21',
  template: \`
    <div>User: {{ userResource.value()?.name }}</div>
    <div>Loading: {{ userResource.isLoading() }}</div>
    <div>Error: {{ userResource.error() }}</div>
    
    @for (post of postsResource.value() || []; track post.id) {
      <app-post-card [post]="post" />
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class AdvancedSignals21Component {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  
  // Resource for reactive data fetching
  userId = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter(id => id !== null),
    map(id => parseInt(id!))
  ));
  
  userResource = resource({
    request: () => ({ id: this.userId() }),
    loader: ({ request }) => {
      return this.http.get<User>(\`/api/users/\${request.id}\`);
    }
  });
  
  postsResource = resource({
    request: () => ({ id: this.userId() }),
    loader: ({ request }) => {
      return this.http.get<Post[]>(\`/api/users/\${request.id}/posts\`);
    }
  });
}
\`\`\`

**2. Enhanced Control Flow:**
\`\`\`typescript
@Component({
  selector: 'app-cutting-edge-control-flow',
  template: \`
    <!-- Enhanced defer with advanced triggers -->
    @defer (on prefetch; on timer(500ms); on interaction(trigger); on viewport) {
      <app-heavy-component [data]="data()" />
    } @loading {
      <div>Loading with advanced prefetch...</div>
    } @error {
      <div>Failed to load component</div>
    } @placeholder {
      <div>Component will load when needed</div>
    }
    
    <!-- Enhanced switch with advanced guards -->
    @switch (userRole()) {
      @case ('admin' as const) when (hasAdminAccess() && hasValidSession()) {
        <app-admin-dashboard />
      } @case ('user' as const) when (isUserActive() && hasValidSubscription()) {
        <app-user-dashboard />
      } @case ('guest' as const) {
        <app-guest-view />
      }
    }
    
    <!-- Enhanced for with advanced features -->
    @for (user of filteredUsers(); track user.id; let i = $index; let isEven = $even; let isLast = $last; let isFirst = $first) {
      <app-user-card 
        [user]="user" 
        [index]="i"
        [isEven]="isEven"
        [isLast]="isLast"
        [isFirst]="isFirst"
        (userSelected)="onUserSelected($event)" />
    } @empty {
      <app-empty-state [message]="emptyMessage()" [action]="emptyAction()" />
    }
  \`,
  standalone: true,
  imports: [CommonModule]
})
export class CuttingEdgeControlFlowComponent {
  userRole = signal<'admin' | 'user' | 'guest'>('guest');
  users = signal<User[]>([]);
  filterText = signal('');
  
  filteredUsers = computed(() => {
    const text = this.filterText().toLowerCase();
    return this.users().filter(user => 
      user.name.toLowerCase().includes(text) ||
      user.email.toLowerCase().includes(text)
    );
  });
  
  hasAdminAccess = () => true;
  hasValidSession = () => true;
  isUserActive = () => true;
  hasValidSubscription = () => true;
  emptyMessage = () => 'No users found matching your criteria';
  emptyAction = () => console.log('Clear filters');
  
  onUserSelected(user: User) {
    console.log('User selected:', user);
  }
}
\`\`\`

**3. Enhanced Build System:**
\`\`\`bash
# Cutting-edge build system
ng build --configuration=production

# Advanced incremental builds
# Enhanced caching
# Faster HMR
# Improved bundle analysis

# New build features
ng build --configuration=production --source-map=false --localize --named-chunks --analyze --bundle-optimization --advanced-optimizations
\`\`\`

**4. Better Developer Experience:**
\`\`\`typescript
// Enhanced Angular Language Service
// Advanced TypeScript integration
// Improved error messages
// Enhanced debugging

// Better autocomplete and documentation
@Component({
  selector: 'app-example',
  // Enhanced IDE support with cutting-edge signals
})
\`\`\`

**5. Improved SSR and Hydration:**
\`\`\`typescript
// Advanced server-side rendering
// Enhanced hydration process
// Improved performance metrics

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withEventReplay(), 
      withIncrementalHydration(), 
      withNoHttpTransferCache(),
      withHttpTransferCacheOptions({
        includePostRequests: true,
        excludeHeaders: ['authorization'],
        includeHeaders: ['content-type']
      })
    )
  ]
};
\`\`\`

**6. Enhanced Accessibility:**
\`\`\`typescript
@Component({
  selector: 'app-cutting-edge-accessible-form',
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      @for (field of formFields(); track field.name) {
        <mat-form-field>
          <mat-label>{{ field.label }}</mat-label>
          <input matInput [formControlName]="field.name"
                 [attr.aria-describedby]="field.name + '-help'"
                 [attr.aria-invalid]="form.get(field.name)?.invalid"
                 [attr.aria-required]="field.required"
                 [attr.aria-describedby]="field.name + '-help ' + field.name + '-error'"
                 [attr.aria-live]="field.name === 'confirmPassword' ? 'polite' : undefined">
          <mat-hint [id]="field.name + '-help'">{{ field.help }}</mat-hint>
          @if (form.get(field.name)?.invalid && form.get(field.name)?.touched) {
            <mat-error [id]="field.name + '-error'">{{ field.errorMessage }}</mat-error>
          }
        </mat-form-field>
      }
    </form>
  \`,
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatHint, MatError]
})
export class CuttingEdgeAccessibleFormComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  });
  
  formFields = signal([
    { name: 'username', label: 'Username', help: 'Enter your username', required: true, errorMessage: 'Username is required' },
    { name: 'email', label: 'Email', help: 'Enter your email address', required: true, errorMessage: 'Valid email is required' },
    { name: 'password', label: 'Password', help: 'Enter a secure password', required: true, errorMessage: 'Password must be at least 8 characters' },
    { name: 'confirmPassword', label: 'Confirm Password', help: 'Confirm your password', required: true, errorMessage: 'Passwords must match' }
  ]);
}
\`\`\`

**7. Performance Improvements:**
\`\`\`bash
# Cutting-edge performance optimizations
# Faster compilation
# Smaller bundle sizes
# Better HMR performance
# Improved SSR metrics

# Enhanced performance features
ng build --configuration=production --named-chunks --stats-json --analyze --bundle-optimization --advanced-optimizations --tree-shaking
\`\`\`

**8. Enhanced Testing:**
\`\`\`typescript
// Cutting-edge testing utilities
// Enhanced TestBed
// Improved component testing
// Better signal testing

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { signal, resource } from '@angular/core';

describe('CuttingEdgeComponent', () => {
  let component: CuttingEdgeComponent;
  let fixture: ComponentFixture<CuttingEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuttingEdgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CuttingEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render with cutting-edge signals', () => {
    component.count.set(20);
    fixture.detectChanges();
    
    const element = fixture.debugElement.query(By.css('.count'));
    expect(element.nativeElement.textContent).toContain('20');
  });
});
\`\`\`

**Benefits:**
- **Reactivity**: Cutting-edge signals ecosystem with resource API
- **Performance**: Advanced build system and runtime optimizations
- **Developer Experience**: Enhanced tooling and debugging capabilities
- **Accessibility**: Advanced form validation and ARIA support
- **Testing**: Cutting-edge testing utilities and better signal testing`
  },
  {
    question: "What are Angular Performance Optimization techniques and how do you implement them?",
    idealAnswer: `**Performance Optimization** in Angular involves multiple techniques to improve application speed and efficiency.

**1. Change Detection Optimization:**
\`\`\`typescript
// Use OnPush strategy
@Component({
  selector: 'app-user-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<div>{{ user.name }}</div>'
})
export class UserCardComponent {
  @Input() user: User;
}

// Manual change detection
constructor(private cdr: ChangeDetectorRef) {}

updateData() {
  this.data = newData;
  this.cdr.markForCheck(); // Mark for future check
}
\`\`\`

**2. Lazy Loading Modules:**
\`\`\`typescript
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  }
];
\`\`\`

**3. TrackBy in *ngFor:**
\`\`\`typescript
@Component({
  template: \`
    <div *ngFor="let item of items; trackBy: trackById">
      {{ item.name }}
    </div>
  \`
})
export class ListComponent {
  items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  
  trackById(index: number, item: any) {
    return item.id;
  }
}
\`\`\`

**4. Pure Pipes and Memoization:**
\`\`\`typescript
@Pipe({
  name: 'heavyCalculation',
  pure: true
})
export class HeavyCalculationPipe implements PipeTransform {
  transform(value: any): any {
    // Expensive calculation
    return this.performHeavyCalculation(value);
  }
}
\`\`\`

**5. Web Workers for Heavy Tasks:**
\`\`\`typescript
// main thread
const worker = new Worker('./heavy.worker', { type: 'module' });
worker.postMessage({ data: largeDataSet });
worker.onmessage = ({ data }) => {
  console.log('Processed data:', data);
};

// heavy.worker.ts
addEventListener('message', ({ data }) => {
  const result = processData(data.data);
  postMessage(result);
});
\`\`\`

**6. Bundle Optimization:**
\`\`\`typescript
// angular.json
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "optimization": {
      "scripts": true,
      "styles": true,
      "fonts": true
    },
    "sourceMap": false,
    "extractCss": true
  }
}
\`\`\`

**7. Virtual Scrolling:**
\`\`\`typescript
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  template: \`
    <cdk-virtual-scroll-viewport itemSize="50">
      <div *cdkVirtualFor="let item of items; trackBy: trackById">
        {{ item.name }}
      </div>
    </cdk-virtual-scroll-viewport>
  \`,
  standalone: true,
  imports: [ScrollingModule, CommonModule]
})
export class VirtualScrollComponent {
  items = largeDataSet;
}
\`\`\`

**8. Preloading Strategies:**
\`\`\`typescript
// app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })]
})
export class AppRoutingModule { }

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Promise<any>): Observable<any> {
    return route.data?.['preload'] ? load() : of(null);
  }
}
\`\`\`

**9. Memory Management:**
\`\`\`typescript
export class ComponentWithSubscriptions implements OnDestroy {
  private subscriptions = new Subscription();
  
  ngOnInit() {
    this.subscriptions.add(
      this.service.getData().subscribe(data => console.log(data))
    );
    this.subscriptions.add(
      this.anotherService.getEvents().subscribe(event => console.log(event))
    );
  }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
\`\`\`

**10. Server-Side Rendering (SSR):**
\`\`\`typescript
// server.ts
import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModuleNgFactory } from './src/app.server.module.ngfactory';

app.get('*', (req, res) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: req.url,
    url: req.url
  }).then(html => {
    res.send(html);
  });
});
\`\`\`

**Performance Monitoring:**
\`\`\`typescript
// Use Angular DevTools
// Implement performance metrics
// Monitor bundle sizes with webpack-bundle-analyzer
// Use Lighthouse for performance audits
\`\`\`

**Key Metrics:**
- **First Contentful Paint**: Time to first content
- **Time to Interactive**: Application responsiveness
- **Bundle Size**: JavaScript and CSS sizes
- **Memory Usage**: Memory consumption over time`
  },
  {
    question: "What are Angular Security best practices and how do you implement them?",
    idealAnswer: `**Security** is crucial for Angular applications to prevent common vulnerabilities.

**1. Preventing XSS Attacks:**
\`\`\`typescript
// Angular automatically sanitizes content
// Use DomSanitizer for trusted content
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  template: '<div [innerHTML]="trustedHtml"></div>'
})
export class SafeHtmlComponent {
  trustedHtml: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) {}
  
  loadContent(html: string) {
    // Only bypass security if you trust the source
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
\`\`\`

**2. CSRF Protection:**
\`\`\`typescript
// HttpInterceptor for CSRF tokens
@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const csrfToken = this.getCsrfToken();
    
    if (csrfToken) {
      req = req.clone({
        headers: req.headers.set('X-XSRF-TOKEN', csrfToken)
      });
    }
    
    return next.handle(req);
  }
  
  private getCsrfToken(): string {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
  }
}
\`\`\`

**3. Content Security Policy (CSP):**
\`\`\`typescript
// Configure CSP headers
// index.html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'">
\`\`\`

**4. Secure Authentication:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/login', credentials).pipe(
      tap(response => {
        // Store token securely (consider httpOnly cookies)
        sessionStorage.setItem(this.TOKEN_KEY, response.token);
      })
    );
  }
  
  logout() {
    sessionStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
  
  isAuthenticated(): boolean {
    const token = sessionStorage.getItem(this.TOKEN_KEY);
    return token != null && !this.isTokenExpired(token);
  }
  
  private isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp ? decoded.exp < Date.now() / 1000 : true;
    } catch {
      return true;
    }
  }
}
\`\`\`

**5. Route Guards for Authorization:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles = route.data['roles'] as string[];
    const userRoles = this.authService.getUserRoles();
    
    if (!requiredRoles || requiredRoles.some(role => userRoles.includes(role))) {
      return true;
    }
    
    this.router.navigate(['/unauthorized']);
    return false;
  }
}

// Route configuration
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { roles: ['admin', 'super-admin'] }
}
\`\`\`

**6. Secure HTTP Communication:**
\`\`\`typescript
// Environment-specific configurations
export const environment = {
  production: true,
  apiUrl: 'https://api.yourapp.com',
  useHttps: true
};

// HttpInterceptor for security headers
@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add security headers
    const secureReq = req.clone({
      headers: req.headers
        .set('X-Content-Type-Options', 'nosniff')
        .set('X-Frame-Options', 'DENY')
        .set('X-XSS-Protection', '1; mode=block')
    });
    
    return next.handle(secureReq);
  }
}
\`\`\`

**7. Input Validation and Sanitization:**
\`\`\`typescript
// Custom validators for security
export class SecurityValidators {
  static noScriptCharacters(control: AbstractControl): ValidationErrors | null {
    const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return scriptPattern.test(control.value) ? { scriptInjection: true } : null;
  }
  
  static safeEmail(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !emailPattern.test(control.value) ? { invalidEmail: true } : null;
  }
}

// Usage in forms
this.form = this.fb.group({
  email: ['', [Validators.required, SecurityValidators.safeEmail]],
  comment: ['', [SecurityValidators.noScriptCharacters]]
});
\`\`\`

**8. Environment Variables Security:**
\`\`\`typescript
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.production.com',
  apiKey: process.env['API_KEY'], // Use server-side environment variables
  enableDebug: false
};

// environment.ts (development)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  apiKey: 'dev-api-key',
  enableDebug: true
};
\`\`\`

**9. Secure Local Storage:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class SecureStorageService {
  private readonly encryptionKey = 'your-encryption-key';
  
  setItem(key: string, value: string): void {
    const encrypted = CryptoJS.AES.encrypt(value, this.encryptionKey).toString();
    localStorage.setItem(key, encrypted);
  }
  
  getItem(key: string): string | null {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    
    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, this.encryptionKey);
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch {
      return null;
    }
  }
}
\`\`\`

**10. OWASP Top 10 Prevention:**
\`\`\`typescript
// Prevent injection attacks
// Use parameterized queries
// Validate all inputs
// Implement proper error handling
// Use secure dependencies

// Regular security audits
npm audit
ng update
\`\`\`

**Security Checklist:**
- **Input Validation**: Validate all user inputs
- **Output Encoding**: Prevent XSS attacks
- **Authentication**: Strong password policies
- **Authorization**: Role-based access control
- **HTTPS**: Always use secure communication
- **Dependencies**: Keep packages updated
- **Logging**: Monitor security events`
  },
  {
    question: "What are Angular State Management solutions and how do you implement them?",
    idealAnswer: `**State Management** in Angular involves managing application data and state effectively.

**1. Simple Service-Based State Management:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AppStateService {
  private state$ = new BehaviorSubject<AppState>({
    user: null,
    isLoading: false,
    error: null
  });
  
  getState(): Observable<AppState> {
    return this.state$.asObservable();
  }
  
  updateUser(user: User) {
    const currentState = this.state$.value;
    this.state$.next({ ...currentState, user });
  }
  
  setLoading(loading: boolean) {
    const currentState = this.state$.value;
    this.state$.next({ ...currentState, isLoading: loading });
  }
}

@Component({
  template: \`
    <div *ngIf="state$ | async as state">
      <div *ngIf="state.isLoading">Loading...</div>
      <div *ngIf="state.user">Welcome {{ state.user.name }}</div>
    </div>
  \`
})
export class UserComponent implements OnInit {
  state$: Observable<AppState>;
  
  constructor(private appState: AppStateService) {
    this.state$ = this.appState.getState();
  }
}
\`\`\`

**2. NgRx (Redux Pattern):**
\`\`\`typescript
// actions.ts
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

// reducer.ts
import { createReducer, on } from '@ngrx/store';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: ''
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: ''
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

// effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from './user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}

// component.ts
import { Store, select } from '@ngrx/store';
import * as UserActions from './user.actions';

@Component({
  template: \`
    <div *ngIf="users$ | async as users">
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
  \`
})
export class UserListComponent {
  users$ = this.store.select('users', 'users');
  loading$ = this.store.select('users', 'loading');
  
  constructor(private store: Store<{ users: UserState }>) {}
  
  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }
}
\`\`\`

**3. Akita (Simpler State Management):**
\`\`\`typescript
// state.ts
import { defineState } from '@ngxs/store';

export interface UserStateModel {
  users: User[];
  loading: boolean;
}

export const UserState = defineState<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
    loading: false
  }
});

// actions.ts
import { createAction, props } from '@ngxs/store';

export const LoadUsers = createAction('[Users] Load');
export const LoadUsersSuccess = createAction(
  '[Users] Load Success',
  props<{ users: User[] }>()
);

// store.ts
import { State, Action, StateContext } from '@ngxs/store';

@State<UserStateModel>({
  name: 'users',
  defaults: { users: [], loading: false }
})
export class UserState {
  @Action(LoadUsers)
  loadUsers(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ loading: true });
  }
  
  @Action(LoadUsersSuccess)
  loadUsersSuccess(ctx: StateContext<UserStateModel>, { users }: LoadUsersSuccess) {
    ctx.patchState({ users, loading: false });
  }
}
\`\`\`

**4. Signals-Based State Management (Angular 16+):**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class SignalStateService {
  private state = signal<AppState>({
    user: null,
    users: [],
    loading: false,
    error: null
  });
  
  // Computed signals
  readonly user = computed(() => this.state().user);
  readonly users = computed(() => this.state().users);
  readonly loading = computed(() => this.state().loading);
  readonly userCount = computed(() => this.state().users.length);
  
  // State updates
  updateUser(user: User) {
    this.state.update(current => ({ ...current, user }));
  }
  
  setUsers(users: User[]) {
    this.state.update(current => ({ ...current, users }));
  }
  
  setLoading(loading: boolean) {
    this.state.update(current => ({ ...current, loading }));
  }
  
  // Async operations
  async loadUsers() {
    this.setLoading(true);
    try {
      const users = await this.userService.getUsers();
      this.setUsers(users);
    } catch (error) {
      this.state.update(current => ({ ...current, error: error.message }));
    } finally {
      this.setLoading(false);
    }
  }
}
\`\`\`

**5. Component State Management:**
\`\`\`typescript
@Component({
  template: \`
    <div>
      <input [(ngModel)]="localState.searchTerm" (input)="onSearch()">
      <div *ngFor="let user of filteredUsers()">{{ user.name }}</div>
    </div>
  \`
})
export class UserSearchComponent {
  // Local state with signals
  private searchTerm = signal('');
  private users = signal<User[]>([]);
  
  // Computed derived state
  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.users().filter(user => 
      user.name.toLowerCase().includes(term)
    );
  });
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users.set(users);
    });
  }
  
  onSearch() {
    // Computed signal updates automatically
  }
}
\`\`\`

**6. State Persistence:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class StatePersistenceService {
  private readonly STORAGE_KEY = 'app_state';
  
  saveState(state: Partial<AppState>): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state:', error);
    }
  }
  
  loadState(): Partial<AppState> | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load state:', error);
      return null;
    }
  }
  
  clearState(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
\`\`\`

**Choosing the Right Solution:**
- **Simple Apps**: Service-based state management
- **Complex Apps**: NgRx for predictable state
- **Medium Apps**: Akita for simpler Redux pattern
- **Modern Apps**: Signals for reactive state
- **Component State**: Local component state with signals`
  },
  {
    question: "What are Angular Testing strategies and how do you test different aspects of an application?",
    idealAnswer: `**Testing** in Angular involves unit tests, integration tests, and end-to-end tests.

**1. Unit Testing Components:**
\`\`\`typescript
// user-card.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display user name', () => {
    component.user = { id: 1, name: 'John Doe' };
    fixture.detectChanges();
    
    const nameElement = fixture.debugElement.query(By.css('.user-name'));
    expect(nameElement.nativeElement.textContent).toContain('John Doe');
  });
  
  it('should emit edit event when edit button clicked', () => {
    spyOn(component.edit, 'emit');
    component.user = { id: 1, name: 'John Doe' };
    fixture.detectChanges();
    
    const editButton = fixture.debugElement.query(By.css('.edit-button'));
    editButton.triggerEventHandler('click', null);
    
    expect(component.edit.emit).toHaveBeenCalledWith(component.user);
  });
});
\`\`\`

**2. Testing Services:**
\`\`\`typescript
// user.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });
  
  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
  
  it('should handle errors', () => {
    service.getUsers().subscribe(
      () => fail('should have failed'),
      error => expect(error.message).toContain('Http failure')
    );
    
    const req = httpMock.expectOne('/api/users');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
\`\`\`

**3. Testing Directives:**
\`\`\`typescript
// highlight.directive.spec.ts
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: '<div appHighlight="yellow">Test Content</div>'
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent]
    });
    
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
  });
  
  it('should have highlight directive', () => {
    expect(des.length).toBe(1);
  });
  
  it('should set background color', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
});
\`\`\`

**4. Testing Pipes:**
\`\`\`typescript
// excerpt.pipe.spec.ts
import { ExcerptPipe } from './excerpt.pipe';

describe('ExcerptPipe', () => {
  let pipe: ExcerptPipe;
  
  beforeEach(() => {
    pipe = new ExcerptPipe();
  });
  
  it('should transform long text to excerpt', () => {
    const text = 'This is a very long text that should be truncated';
    const result = pipe.transform(text, 20);
    expect(result).toBe('This is a very long...');
  });
  
  it('should return original text if shorter than limit', () => {
    const text = 'Short text';
    const result = pipe.transform(text, 20);
    expect(result).toBe('Short text');
  });
  
  it('should handle empty input', () => {
    const result = pipe.transform('', 20);
    expect(result).toBe('');
  });
});
\`\`\`

**5. Testing Reactive Forms:**
\`\`\`typescript
// user-form.component.spec.ts
describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, UserFormComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
  });
  
  it('should initialize form with empty values', () => {
    expect(component.userForm.value).toEqual({
      name: '',
      email: ''
    });
  });
  
  it('should validate required fields', () => {
    component.userForm.controls.name.setValue('');
    expect(component.userForm.controls.name.invalid).toBeTruthy();
    
    component.userForm.controls.name.setValue('John');
    expect(component.userForm.controls.name.valid).toBeTruthy();
  });
  
  it('should submit form when valid', () => {
    spyOn(component.formSubmitted, 'emit);
    
    component.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com'
    });
    
    component.onSubmit();
    
    expect(component.formSubmitted.emit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com'
    });
  });
});
\`\`\`

**6. Testing with Mocks and Spies:**
\`\`\`typescript
describe('Component with Dependencies', () => {
  let component: MyComponent;
  let mockUserService: jasmine.SpyObj<UserService>;
  
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers', 'addUser']);
    
    await TestBed.configureTestingModule({
      providers: [
        MyComponent,
        { provide: UserService, useValue: spy }
      ]
    }).compileComponents();
    
    component = TestBed.inject(MyComponent);
    mockUserService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });
  
  it('should load users on init', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    mockUserService.getUsers.and.returnValue(of(mockUsers));
    
    component.ngOnInit();
    
    expect(mockUserService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(mockUsers);
  });
});
\`\`\`

**7. Integration Testing:**
\`\`\`typescript
// app.component.spec.ts
describe('AppComponent Integration', () => {
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppComponent
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
  });
  
  it('should render navigation and main content', () => {
    fixture.detectChanges();
    
    const nav = fixture.debugElement.query(By.css('nav'));
    const main = fixture.debugElement.query(By.css('main'));
    
    expect(nav).toBeTruthy();
    expect(main).toBeTruthy();
  });
});
\`\`\`

**8. End-to-End Testing with Cypress:**
\`\`\`typescript
// cypress/integration/user.spec.ts
describe('User Management', () => {
  beforeEach(() => {
    cy.visit('/users');
  });
  
  it('should display user list', () => {
    cy.get('.user-card').should('have.length.greaterThan', 0);
  });
  
  it('should add new user', () => {
    cy.get('[data-cy=add-user-btn]').click();
    cy.get('[data-cy=user-name]').type('New User');
    cy.get('[data-cy=user-email]').type('newuser@example.com');
    cy.get('[data-cy=save-btn]').click();
    
    cy.get('.user-card').should('contain', 'New User');
  });
});
\`\`\`

**9. Testing Best Practices:**
\`\`\`typescript
// Test configuration
// karma.conf.js
module.exports = {
  frameworks: ['jasmine', '@angular-devkit/build-angular'],
  reporters: ['progress', 'kjhtml'],
  browsers: ['Chrome'],
  coverageReporter: {
    type: 'html',
    dir: 'coverage/'
  }
};

// Run tests
ng test --code-coverage --watch=false
ng e2e
\`\`\`

**Testing Strategies:**
- **Unit Tests**: Test individual components and services
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows
- **Coverage**: Aim for 80%+ code coverage
- **AAA Pattern**: Arrange, Act, Assert structure
- **Mocking**: Isolate dependencies
- **Page Objects**: Organize E2E test code`
  },
  {
    question: "What are Angular Server-Side Rendering (SSR) and Static Site Generation (SSG) strategies?",
    idealAnswer: `**SSR and SSG** improve performance and SEO by rendering content on the server.

**1. Angular Universal (SSR) Setup:**
\`\`\`bash
# Add SSR to existing project
ng add @nguniversal/express-engine

# This creates:
# - server.ts (Express server)
# - main.server.ts (Server bootstrap)
# - app.server.module.ts (Server module)
# - tsconfig.server.json (Server TypeScript config)
\`\`\`

**2. Server Configuration:**
\`\`\`typescript
// server.ts
import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = join(distFolder, 'index.html');

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Serve static files
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // Serve Angular app
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl }
      ]
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;
  const server = app();
  
  server.listen(port, () => {
    console.log(\`Node server listening on http://localhost:\${port}\`);
  });
}

run();
\`\`\`

**3. Server-Side Module:**
\`\`\`typescript
// app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
\`\`\`

**4. Browser-Specific Code Detection:**
\`\`\`typescript
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  
  isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
  
  getWindow(): Window | null {
    return this.isBrowser() ? window : null;
  }
  
  getLocalStorage(): Storage | null {
    return this.isBrowser() ? localStorage : null;
  }
}

// Usage in components
@Component({
  template: \`
    <div *ngIf="platformService.isBrowser()">
      Browser-specific content
    </div>
    <div *ngIf="platformService.isServer()">
      Server-specific content
    </div>
  \`
})
export class PlatformAwareComponent {
  constructor(public platformService: PlatformService) {}
}
\`\`\`

**5. Transfer State (Server to Client):**
\`\`\`typescript
import { TransferState, makeStateKey } from '@angular/platform-browser';

const USER_DATA_KEY = makeStateKey<User[]>('user_data');

@Injectable({ providedIn: 'root' })
export class TransferDataService {
  constructor(private transferState: TransferState) {}
  
  setUsers(users: User[]): void {
    this.transferState.set(USER_DATA_KEY, users);
  }
  
  getUsers(): User[] | null {
    return this.transferState.get(USER_DATA_KEY, null);
  }
  
  hasUsers(): boolean {
    return this.transferState.hasKey(USER_DATA_KEY);
  }
}

// In resolver or component
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private transferData: TransferDataService
  ) {}
  
  resolve(): Observable<User[]> {
    if (this.transferData.hasUsers()) {
      return of(this.transferData.getUsers()!);
    }
    
    return this.userService.getUsers().pipe(
      tap(users => this.transferData.setUsers(users))
    );
  }
}
\`\`\`

**6. Static Site Generation (SSG):**
\`\`\`typescript
// Build configuration
// angular.json
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      "outputPath": "dist/browser",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.app.json",
      "assets": ["src/favicon.ico", "src/assets"],
      "styles": ["src/styles.css"],
      "scripts": []
    },
    "configurations": {
      "production": {
        "budgets": [
          {
            "type": "initial",
            "maximumWarning": "2mb",
            "maximumError": "5mb"
          }
        ],
        "fileReplacements": [
          {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.prod.ts"
          }
        ],
        "outputHashing": "all"
      }
    }
  },
  "server": {
    "builder": "@angular-devkit/build-angular:server",
    "options": {
      "outputPath": "dist/server",
      "main": "src/main.server.ts",
      "tsConfig": "tsconfig.server.json"
    }
  },
  "prerender": {
    "builder": "@nguniversal/builders:prerender",
    "options": {
      "browserTarget": "my-app:build",
      "serverTarget": "my-app:server",
      "routes": [
        "/",
        "/about",
        "/contact",
        "/products/**"
      ]
    },
    "configurations": {
      "production": {
        "browserTarget": "my-app:build:production",
        "serverTarget": "my-app:server:production"
      }
    }
  }
}
\`\`\`

**7. Dynamic Routes for SSG:**
\`\`\`typescript
// prerender.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/blog/post-1',
  '/blog/post-2'
];

// Or generate routes dynamically
export async function getRoutes(): Promise<string[]> {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  return posts.map((post: any) => \`/blog/\${post.slug}\`);
}
\`\`\`

**8. Deployment Strategies:**
\`\`\`typescript
// Dockerfile for SSR
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:ssr

FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/package*.json ./
RUN npm ci --only=production

EXPOSE 4000
CMD ["node", "server.js"]
\`\`\`

**9. Performance Optimization:**
\`\`\`typescript
// Cache strategies
import { CacheInterceptor } from '@angular/common/http';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    
    const cachedResponse = this.cache.get(req.url);
    if (cachedResponse) {
      return of(cachedResponse);
    }
    
    return next.handle(req).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          this.cache.set(req.url, response);
        }
      })
    );
  }
}

// Critical CSS inlining
// styles.css
.critical-css {
  /* Above-the-fold styles */
}

.non-critical-css {
  /* Below-the-fold styles */
}
\`\`\`

**10. SEO Optimization:**
\`\`\`typescript
// Meta service for dynamic SEO
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}
  
  setSeoData(seoData: SeoData): void {
    this.title.setTitle(seoData.title);
    
    this.meta.updateTag({ name: 'description', content: seoData.description });
    this.meta.updateTag({ name: 'keywords', content: seoData.keywords });
    this.meta.updateTag({ property: 'og:title', content: seoData.title });
    this.meta.updateTag({ property: 'og:description', content: seoData.description });
    this.meta.updateTag({ property: 'og:url', content: this.router.url });
    
    if (seoData.image) {
      this.meta.updateTag({ property: 'og:image', content: seoData.image });
    }
  }
}

// Usage in components
@Component({
  template: ''
})
export class BlogPostComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit() {
    const post = this.activatedRoute.snapshot.data['post'];
    this.seoService.setSeoData({
      title: post.title,
      description: post.excerpt,
      keywords: post.tags.join(', '),
      image: post.featuredImage
    });
  }
}
\`\`\`

**Benefits:**
- **Performance**: Faster initial page load
- **SEO**: Better search engine indexing
- **User Experience**: Instant content display
- **Social Sharing**: Rich social media previews`
  },
  {
    question: "What are UI Architecture Patterns and how does Angular implement MVVM?",
    idealAnswer: `**UI Architecture Patterns** provide structure for separating concerns in user interface development.

**Common UI Architecture Patterns:**

**1. MVC (Model-View-Controller):**
\`\`\`typescript
// Model
export class User {
  constructor(public id: number, public name: string, public email: string) {}
}

// View (Template)
// user.component.html
<div>
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
  <button (click)="editUser()">Edit</button>
</div>

// Controller (Component)
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserController {
  user: User;
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.user = this.userService.getUser(1);
  }
  
  editUser() {
    this.userService.editUser(this.user);
  }
}
\`\`\`

**2. MVP (Model-View-Presenter):**
\`\`\`typescript
// View Interface
export interface IUserView {
  displayUser(user: User): void;
  showError(message: string): void;
}

// View Implementation
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserView implements IUserView, OnInit {
  user: User;
  
  constructor(private presenter: UserPresenter) {
    presenter.setView(this);
  }
  
  ngOnInit() {
    this.presenter.loadUser();
  }
  
  displayUser(user: User): void {
    this.user = user;
  }
  
  showError(message: string): void {
    alert(message);
  }
  
  onEditClick(): void {
    this.presenter.editUser();
  }
}

// Presenter
export class UserPresenter {
  private view: IUserView;
  private user: User;
  
  constructor(private userService: UserService) {}
  
  setView(view: IUserView): void {
    this.view = view;
  }
  
  loadUser(): void {
    this.userService.getUser(1).subscribe({
      next: (user) => {
        this.user = user;
        this.view.displayUser(user);
      },
      error: (err) => this.view.showError(err.message)
    });
  }
  
  editUser(): void {
    if (this.user) {
      this.userService.editUser(this.user).subscribe({
        next: () => this.view.displayUser(this.user),
        error: (err) => this.view.showError(err.message)
      });
    }
  }
}
\`\`\`

**3. MVVM (Model-View-ViewModel) - Angular's Primary Pattern:**
\`\`\`typescript
// Model
export class User {
  constructor(public id: number, public name: string, public email: string) {}
}

// ViewModel
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserViewModel {
  private userSource = new BehaviorSubject<User | null>(null);
  user$ = this.userSource.asObservable();
  
  isLoading$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject<string | null>(null);
  
  // Computed properties
  displayName$ = this.user$.pipe(
    map(user => user ? user.name.toUpperCase() : '')
  );
  
  canEdit$ = this.user$.pipe(
    map(user => user?.id !== undefined)
  );
  
  constructor(private userService: UserService) {}
  
  loadUser(id: number): void {
    this.isLoading$.next(true);
    this.error$.next(null);
    
    this.userService.getUser(id).subscribe({
      next: (user) => {
        this.userSource.next(user);
        this.isLoading$.next(false);
      },
      error: (err) => {
        this.error$.next(err.message);
        this.isLoading$.next(false);
      }
    });
  }
  
  editUser(): void {
    const user = this.userSource.value;
    if (user) {
      this.userService.editUser(user).subscribe({
        next: (updatedUser) => {
          this.userSource.next(updatedUser);
        },
        error: (err) => {
          this.error$.next(err.message);
        }
      });
    }
  }
}

// View (Template)
// user.component.html
<div *ngIf="user$ | async as user">
  <h2>{{ displayName$ | async }}</h2>
  <p>{{ user.email }}</p>
  <button (click)="editUser()" 
          [disabled]="!(canEdit$ | async)">
    Edit
  </button>
</div>

<div *ngIf="isLoading$ | async">Loading...</div>
<div *ngIf="error$ | async as error" class="error">{{ error }}</div>
\`\`\`

**4. Component-Based Architecture (Modern Angular):**
\`\`\`typescript
// Smart Component (Container)
@Component({
  selector: 'app-user-container',
  template: \`
    <app-user-list 
      [users]="users$ | async"
      [loading]="loading$ | async"
      (userSelected)="onUserSelected($event)">
    </app-user-list>
    <app-user-detail 
      *ngIf="selectedUser$ | async as user"
      [user]="user"
      (userUpdated)="onUserUpdated($event)">
    </app-user-detail>
  \`
})
export class UserContainerComponent {
  users$ = this.userService.getUsers();
  selectedUser$ = new BehaviorSubject<User | null>(null);
  loading$ = new BehaviorSubject<boolean>(false);
  
  constructor(private userService: UserService) {}
  
  onUserSelected(user: User): void {
    this.selectedUser$.next(user);
  }
  
  onUserUpdated(user: User): void {
    // Update state or trigger refresh
    this.users$ = this.userService.getUsers();
  }
}

// Dumb Component (Presentational)
@Component({
  selector: 'app-user-list',
  template: \`
    <div class="user-list">
      <div *ngIf="loading">Loading...</div>
      <div *ngFor="let user of users" 
           class="user-item"
           (click)="selectUser.emit(user)">
        {{ user.name }}
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Input() loading = false;
  @Output() userSelected = new EventEmitter<User>();
  
  selectUser(user: User): void {
    this.userSelected.emit(user);
  }
}
\`\`\`

**5. Flux/Redux Pattern with NgRx:**
\`\`\`typescript
// Actions
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

// Reducer
export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null
  }))
);

// Store
export interface AppState {
  users: UserState;
}

// Component
@Component({
  selector: 'app-user',
  template: \`
    <div *ngIf="users$ | async as users">
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
  \`
})
export class UserComponent {
  users$ = this.store.select(state => state.users.users);
  loading$ = this.store.select(state => state.users.loading);
  
  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
\`\`\`

**Pattern Comparison:**

| Pattern | Data Binding | Testability | Complexity | Angular Fit |
|---------|--------------|-------------|------------|------------|
| MVC | Two-way | Medium | Low | Partial |
| MVP | Manual | High | Medium | Good |
| MVVM | Two-way | High | Medium | Excellent |
| Component | Unidirectional | High | Low | Excellent |
| Redux | Unidirectional | Very High | High | Good |

**Angular's MVVM Implementation:**
- **Model**: Data structures and business logic
- **View**: Templates with data binding
- **ViewModel**: Components with properties and methods
- **Data Binding**: Automatic synchronization between View and ViewModel
- **Dependency Injection**: Provides loose coupling
- **Change Detection**: Automatic UI updates`
  },
  {
    question: "What are SOLID Principles and how do they apply to Angular applications?",
    idealAnswer: `**SOLID Principles** are five design principles that make software designs more understandable, flexible, and maintainable.

**1. Single Responsibility Principle (SRP):**
\`\`\`typescript
// Bad: Multiple responsibilities
@Component({
  selector: 'app-user-management'
})
export class UserManagementComponent {
  users: User[] = [];
  
  // Data fetching responsibility
  loadUsers() {
    // HTTP calls...
  }
  
  // Validation responsibility
  validateEmail(email: string): boolean {
    // Validation logic...
  }
  
  // Logging responsibility
  logError(error: string) {
    // Logging logic...
  }
}

// Good: Single responsibility
@Component({
  selector: 'app-user-management'
})
export class UserManagementComponent {
  users$ = this.userService.getUsers();
  
  constructor(private userService: UserService) {}
}

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(): Observable<User[]> {
    // Data fetching only
  }
}

@Injectable({ providedIn: 'root' })
export class ValidationService {
  validateEmail(email: string): boolean {
    // Validation only
  }
}

@Injectable({ providedIn: 'root' })
export class LoggingService {
  logError(error: string): void {
    // Logging only
  }
}
\`\`\`

**2. Open/Closed Principle (OCP):**
\`\`\`typescript
// Bad: Modified for new notification types
export class NotificationService {
  sendNotification(type: string, message: string) {
    if (type === 'email') {
      // Email logic
    } else if (type === 'sms') {
      // SMS logic
    } else if (type === 'push') {
      // Push logic - requires modification
    }
  }
}

// Good: Open for extension, closed for modification
export interface NotificationProvider {
  send(message: string): void;
}

@Injectable()
export class EmailNotificationProvider implements NotificationProvider {
  send(message: string): void {
    // Email implementation
  }
}

@Injectable()
export class SMSNotificationProvider implements NotificationProvider {
  send(message: string): void {
    // SMS implementation
  }
}

@Injectable()
export class PushNotificationProvider implements NotificationProvider {
  send(message: string): void {
    // Push implementation
  }
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(
    @Inject('NOTIFICATION_PROVIDERS') 
    private providers: NotificationProvider[]
  ) {}
  
  sendNotification(message: string): void {
    this.providers.forEach(provider => provider.send(message));
  }
}

// Module configuration
@NgModule({
  providers: [
    {
      provide: 'NOTIFICATION_PROVIDERS',
      useClass: EmailNotificationProvider,
      multi: true
    },
    {
      provide: 'NOTIFICATION_PROVIDERS',
      useClass: SMSNotificationProvider,
      multi: true
    }
  ]
})
export class AppModule {}
\`\`\`

**3. Liskov Substitution Principle (LSP):**
\`\`\`typescript
// Bad: Violates LSP
export class Bird {
  fly(): void {
    console.log('Flying');
  }
}

export class Penguin extends Bird {
  fly(): void {
    throw new Error('Penguins cannot fly');
  }
}

// Good: Proper inheritance hierarchy
export abstract class Bird {
  abstract makeSound(): void;
}

export abstract class FlyingBird extends Bird {
  fly(): void {
    console.log('Flying');
  }
}

export abstract class FlightlessBird extends Bird {
  walk(): void {
    console.log('Walking');
  }
}

export class Eagle extends FlyingBird {
  makeSound(): void {
    console.log('Screech');
  }
}

export class Penguin extends FlightlessBird {
  makeSound(): void {
    console.log('Squawk');
  }
}

// Usage
function processBird(bird: Bird): void {
  bird.makeSound(); // Safe for all birds
  
  if (bird instanceof FlyingBird) {
    bird.fly(); // Safe only for flying birds
  }
}
\`\`\`

**4. Interface Segregation Principle (ISP):**
\`\`\`typescript
// Bad: Fat interface
export interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  code(): void;
  design(): void;
}

// Good: Segregated interfaces
export interface Workable {
  work(): void;
}

export interface Eatable {
  eat(): void;
}

export interface Sleepable {
  sleep(): void;
}

export interface Codeable {
  code(): void;
}

export interface Designable {
  design(): void;
}

export class Developer implements Workable, Eatable, Sleepable, Codeable {
  work(): void { console.log('Developing'); }
  eat(): void { console.log('Eating'); }
  sleep(): void { console.log('Sleeping'); }
  code(): void { console.log('Coding'); }
}

export class Designer implements Workable, Eatable, Sleepable, Designable {
  work(): void { console.log('Designing'); }
  eat(): void { console.log('Eating'); }
  sleep(): void { console.log('Sleeping'); }
  design(): void { console.log('Designing'); }
}
\`\`\`

**5. Dependency Inversion Principle (DIP):**
\`\`\`typescript
// Bad: High-level module depends on low-level module
export class OrderProcessor {
  private database: MySQLDatabase;
  
  constructor() {
    this.database = new MySQLDatabase(); // Tight coupling
  }
  
  processOrder(order: Order): void {
    this.database.save(order);
  }
}

// Good: Depend on abstractions
export interface Database {
  save(data: any): void;
}

export class MySQLDatabase implements Database {
  save(data: any): void {
    // MySQL implementation
  }
}

export class PostgreSQLDatabase implements Database {
  save(data: any): void {
    // PostgreSQL implementation
  }
}

export class OrderProcessor {
  constructor(private database: Database) {} // Depends on abstraction
  
  processOrder(order: Order): void {
    this.database.save(order);
  }
}

// Angular DI implementation
@NgModule({
  providers: [
    { provide: Database, useClass: MySQLDatabase }
  ]
})
export class AppModule {}

@Component({
  selector: 'app-order'
})
export class OrderComponent {
  constructor(
    private orderProcessor: OrderProcessor,
    private database: Database // Injected abstraction
  ) {}
}
\`\`\`

**SOLID in Angular Architecture:**

**1. Component Structure:**
\`\`\`typescript
// Smart Component (Single Responsibility)
@Component({
  selector: 'app-user-container',
  template: \`
    <app-user-list [users]="users$ | async" 
                   (userSelected)="onUserSelected($event)">
    </app-user-list>
    <app-user-detail *ngIf="selectedUser$ | async as user"
                     [user]="user"
                     (userUpdated)="onUserUpdated($event)">
    </app-user-detail>
  \`
})
export class UserContainerComponent {
  users$ = this.userService.getUsers();
  selectedUser$ = new BehaviorSubject<User | null>(null);
  
  constructor(private userService: UserService) {}
  
  onUserSelected(user: User): void {
    this.selectedUser$.next(user);
  }
  
  onUserUpdated(user: User): void {
    // Handle update
  }
}

// Dumb Component (Single Responsibility)
@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngFor="let user of users" (click)="userSelected.emit(user)">
      {{ user.name }}
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();
}
\`\`\`

**2. Service Layer (DIP & SRP):**
\`\`\`typescript
// Abstraction
export interface UserRepository {
  getUsers(): Observable<User[]>;
  getUser(id: number): Observable<User>;
  saveUser(user: User): Observable<User>;
}

// Implementation
@Injectable({ providedIn: 'root' })
export class HttpUserRepository implements UserRepository {
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`/api/users/\${id}\`);
  }
  
  saveUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }
}

// Business Logic Service
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userRepository: UserRepository) {}
  
  getUsers(): Observable<User[]> {
    return this.userRepository.getUsers();
  }
  
  getActiveUsers(): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => users.filter(user => user.isActive))
    );
  }
}
\`\`\`

**Benefits of SOLID in Angular:**
- **Maintainability**: Easier to modify and extend
- **Testability**: Components and services are easier to unit test
- **Reusability**: Services can be reused across components
- **Flexibility**: Easy to swap implementations
- **Scalability**: Architecture grows with application complexity`
  },
  {
    question: "What are Micro-Frontends and how can you implement them with Angular?",
    idealAnswer: `**Micro-Frontends** extend the microservices concept to frontend development, allowing large applications to be broken down into smaller, independent pieces.

**Micro-Frontend Architecture:**

**1. Module Federation (Webpack 5):**
\`\`\`typescript
// shell/webpack.config.js
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        'rxjs': { singleton: true, strictVersion: true },
        'zone.js': { singleton: true, strictVersion: true },
      },
    }),
  ],
};

// mfe1/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/mfe1/mfe1.module.ts',
        './Component': './src/app/mfe1/mfe1.component.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        // ... other shared dependencies
      },
    }),
  ],
};
\`\`\`

**2. Shell Application (Container):**
\`\`\`typescript
// shell/src/app/app.routes.ts
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.Mfe1Module) },
      { path: 'products', loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.Mfe2Module) },
    ]
  }
];

// shell/src/app/shell/shell.component.ts
@Component({
  selector: 'app-shell',
  template: \`
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/users">Users</a>
      <a routerLink="/products">Products</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  \`
})
export class ShellComponent {}
\`\`\`

**3. Micro-Frontend Module:**
\`\`\`typescript
// mfe1/src/app/mfe1/mfe1.module.ts
@NgModule({
  declarations: [Mfe1Component, UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: Mfe1Component },
      { path: 'list', component: UserListComponent }
    ])
  ],
  providers: [UserService]
})
export class Mfe1Module {}

// mfe1/src/app/mfe1/mfe1.component.ts
@Component({
  selector: 'app-mfe1',
  template: \`
    <div class="mfe1-container">
      <h2>Users Micro-Frontend</h2>
      <nav>
        <a routerLink="">Home</a>
        <a routerLink="list">User List</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  \`
})
export class Mfe1Component {}
\`\`\`

**4. Communication Between Micro-Frontends:**
\`\`\`typescript
// shared/events.service.ts
@Injectable({ providedIn: 'root' })
export class EventsService {
  private eventBus = new BehaviorSubject<any>(null);
  
  emit(event: any): void {
    this.eventBus.next(event);
  }
  
  on<T>(eventType: string): Observable<T> {
    return this.eventBus.pipe(
      filter(event => event?.type === eventType),
      map(event => event.data)
    );
  }
}

// mfe1/user-selected.component.ts
export class UserSelectedComponent {
  constructor(private eventsService: EventsService) {}
  
  selectUser(user: User): void {
    this.eventsService.emit({
      type: 'USER_SELECTED',
      data: user
    });
  }
}

// mfe2/user-details.component.ts
export class UserDetailsComponent implements OnInit {
  selectedUser$ = this.eventsService.on<User>('USER_SELECTED');
  
  constructor(private eventsService: EventsService) {}
}
\`\`\`

**5. Shared Design System:**
\`\`\`typescript
// shared/ui/button.component.ts
@Component({
  selector: 'lib-button',
  template: \`
    <button [class]="buttonClass" [disabled]="disabled" (click)="clicked.emit()">
      <ng-content></ng-content>
    </button>
  \`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();
  
  get buttonClass(): string {
    return \`btn btn-\${this.variant} btn-\${this.size}\`;
  }
}

// shared/ui/index.ts
export * from './button.component';
export * from './input.component';
export * from './card.component';

// mfe1/mfe1.module.ts
@NgModule({
  imports: [
    ButtonComponent,
    InputComponent,
    CardComponent
  ]
})
export class Mfe1Module {}
\`\`\`

**6. State Management Across MFEs:**
\`\`\`typescript
// shared/store/store.service.ts
@Injectable({ providedIn: 'root' })
export class StoreService {
  private store = new BehaviorSubject<Map<string, any>>(new Map());
  
  setState(key: string, value: any): void {
    const currentStore = this.store.value;
    currentStore.set(key, value);
    this.store.next(new Map(currentStore));
  }
  
  getState<T>(key: string): Observable<T | undefined> {
    return this.store.pipe(
      map(store => store.get(key) as T)
    );
  }
  
  removeState(key: string): void {
    const currentStore = this.store.value;
    currentStore.delete(key);
    this.store.next(new Map(currentStore));
  }
}

// Usage in MFEs
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private store: StoreService) {}
  
  setCurrentUser(user: User): void {
    this.store.setState('currentUser', user);
  }
  
  getCurrentUser(): Observable<User | undefined> {
    return this.store.getState<User>('currentUser');
  }
}
\`\`\`

**7. Authentication and Authorization:**
\`\`\`typescript
// shared/auth/auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser$ = new BehaviorSubject<User | null>(null);
  
  login(credentials: LoginCredentials): Observable<User> {
    return this.http.post<User>('/api/auth/login', credentials).pipe(
      tap(user => {
        this.currentUser$.next(user);
        localStorage.setItem('token', user.token);
      })
    );
  }
  
  getCurrentUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }
  
  isAuthenticated(): boolean {
    return !!this.currentUser$.value;
  }
}

// shared/auth/auth.guard.ts
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  
  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}

// mfe1/mfe1.module.ts
@NgModule({
  providers: [AuthGuard]
})
export class Mfe1Module {}
\`\`\`

**8. Deployment Strategies:**
\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  shell:
    build: ./shell
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
  
  mfe1:
    build: ./mfe1
    ports:
      - "3001:80"
    environment:
      - NODE_ENV=production
  
  mfe2:
    build: ./mfe2
    ports:
      - "3002:80"
    environment:
      - NODE_ENV=production
\`\`\`

**Benefits of Micro-Frontends:**
- **Independent Development**: Teams can work independently
- **Technology Diversity**: Different frameworks can be used
- **Scalable Architecture**: Easier to scale large applications
- **Isolated Deployments**: Deploy individual MFEs independently
- **Code Ownership**: Clear ownership boundaries

**Challenges:**
- **Complex Setup**: Initial configuration is complex
- **Shared Dependencies**: Managing shared libraries
- **Performance**: Multiple bundle loads
- **Testing**: Cross-MFE integration testing
- **Consistency**: Maintaining design consistency`
  },
  {
    question: "What are Design Patterns commonly used in Angular applications?",
    idealAnswer: `**Design Patterns** provide reusable solutions to common problems in software design.

**1. Singleton Pattern:**
\`\`\`typescript
// Angular Services are singletons by default
@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  private static instance: ConfigurationService;
  private config: AppConfig;
  
  constructor() {
    if (ConfigurationService.instance) {
      return ConfigurationService.instance;
    }
    this.config = this.loadConfiguration();
    ConfigurationService.instance = this;
  }
  
  private loadConfiguration(): AppConfig {
    // Load configuration logic
  }
  
  getConfig(): AppConfig {
    return this.config;
  }
}

// Usage
@Component({
  selector: 'app-config'
})
export class ConfigComponent {
  config = this.configService.getConfig();
  
  constructor(private configService: ConfigurationService) {}
}
\`\`\`

**2. Factory Pattern:**
\`\`\`typescript
// Abstract factory for creating different types of notifications
export abstract class NotificationFactory {
  abstract createNotification(type: string): Notification;
}

export class EmailNotificationFactory extends NotificationFactory {
  createNotification(type: string): Notification {
    return new EmailNotification(type);
  }
}

export class SMSNotificationFactory extends NotificationFactory {
  createNotification(type: string): Notification {
    return new SMSNotification(type);
  }
}

// Service using factory
@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private factory: NotificationFactory) {}
  
  sendNotification(type: string, message: string): void {
    const notification = this.factory.createNotification(type);
    notification.send(message);
  }
}

// Module configuration
@NgModule({
  providers: [
    { provide: NotificationFactory, useClass: EmailNotificationFactory }
  ]
})
export class AppModule {}
\`\`\`

**3. Observer Pattern (RxJS):**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class EventBusService {
  private eventBus$ = new BehaviorSubject<Event | null>(null);
  
  emit(event: Event): void {
    this.eventBus$.next(event);
  }
  
  on<T>(eventType: string): Observable<T> {
    return this.eventBus$.pipe(
      filter(event => event?.type === eventType),
      map(event => event.data as T)
    );
  }
}

// Usage
@Component({
  selector: 'app-emitter'
})
export class EmitterComponent {
  constructor(private eventBus: EventBusService) {}
  
  emitEvent(): void {
    this.eventBus.emit({
      type: 'USER_UPDATED',
      data: { id: 1, name: 'John' }
    });
  }
}

@Component({
  selector: 'app-listener'
})
export class ListenerComponent implements OnInit {
  constructor(private eventBus: EventBusService) {}
  
  ngOnInit() {
    this.eventBus.on<User>('USER_UPDATED').subscribe(user => {
      console.log('User updated:', user);
    });
  }
}
\`\`\`

**4. Strategy Pattern:**
\`\`\`typescript
// Strategy interface
export interface PaymentStrategy {
  pay(amount: number): Observable<boolean>;
}

// Concrete strategies
@Injectable()
export class CreditCardPaymentStrategy implements PaymentStrategy {
  constructor(private http: HttpClient) {}
  
  pay(amount: number): Observable<boolean> {
    return this.http.post<boolean>('/api/payments/credit-card', { amount });
  }
}

@Injectable()
export class PayPalPaymentStrategy implements PaymentStrategy {
  constructor(private http: HttpClient) {}
  
  pay(amount: number): Observable<boolean> {
    return this.http.post<boolean>('/api/payments/paypal', { amount });
  }
}

// Context
@Injectable({ providedIn: 'root' })
export class PaymentService {
  private strategy: PaymentStrategy;
  
  constructor(
    private creditCardStrategy: CreditCardPaymentStrategy,
    private paypalStrategy: PayPalPaymentStrategy
  ) {
    this.strategy = creditCardStrategy; // Default strategy
  }
  
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }
  
  makePayment(amount: number): Observable<boolean> {
    return this.strategy.pay(amount);
  }
}

// Usage
@Component({
  selector: 'app-payment'
})
export class PaymentComponent {
  paymentMethod = 'credit-card';
  
  constructor(private paymentService: PaymentService) {}
  
  pay(): void {
    if (this.paymentMethod === 'credit-card') {
      this.paymentService.setStrategy(new CreditCardPaymentStrategy(this.http));
    } else if (this.paymentMethod === 'paypal') {
      this.paymentService.setStrategy(new PayPalPaymentStrategy(this.http));
    }
    
    this.paymentService.makePayment(100).subscribe(success => {
      console.log('Payment successful:', success);
    });
  }
}
\`\`\`

**5. Decorator Pattern:**
\`\`\`typescript
// Base component
@Component({
  selector: 'app-base-button',
  template: '<button>Click me</button>'
})
export class BaseButtonComponent {}

// Decorator components
@Component({
  selector: 'app-primary-button',
  template: \`
    <app-base-button class="btn btn-primary">
      <ng-content></ng-content>
    </app-base-button>
  \`
})
export class PrimaryButtonComponent {}

@Component({
  selector: 'app-loading-button',
  template: \`
    <app-base-button [disabled]="loading">
      <span *ngIf="loading">Loading...</span>
      <ng-content *ngIf="!loading"></ng-content>
    </app-base-button>
  \`
})
export class LoadingButtonComponent {
  @Input() loading = false;
}

// Usage
@Component({
  selector: 'app-form',
  template: \`
    <app-loading-button [loading]="isSubmitting" (click)="submit()">
      Submit
    </app-loading-button>
  \`
})
export class FormComponent {
  isSubmitting = false;
  
  submit(): void {
    this.isSubmitting = true;
    // Submit logic
  }
}
\`\`\`

**6. Command Pattern:**
\`\`\`typescript
// Command interface
export interface Command {
  execute(): void;
  undo(): void;
}

// Concrete commands
export class AddUserCommand implements Command {
  constructor(
    private userService: UserService,
    private user: User
  ) {}
  
  execute(): void {
    this.userService.addUser(this.user);
  }
  
  undo(): void {
    this.userService.removeUser(this.user.id);
  }
}

export class UpdateUserCommand implements Command {
  constructor(
    private userService: UserService,
    private user: User,
    private previousUser: User
  ) {}
  
  execute(): void {
    this.userService.updateUser(this.user);
  }
  
  undo(): void {
    this.userService.updateUser(this.previousUser);
  }
}

// Invoker
@Injectable({ providedIn: 'root' })
export class CommandInvoker {
  private history: Command[] = [];
  private currentIndex = -1;
  
  executeCommand(command: Command): void {
    command.execute();
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(command);
    this.currentIndex++;
  }
  
  undo(): void {
    if (this.currentIndex >= 0) {
      this.history[this.currentIndex].undo();
      this.currentIndex--;
    }
  }
  
  redo(): void {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      this.history[this.currentIndex].execute();
    }
  }
}

// Usage
@Component({
  selector: 'app-user-management'
})
export class UserManagementComponent {
  constructor(private commandInvoker: CommandInvoker) {}
  
  addUser(user: User): void {
    const command = new AddUserCommand(this.userService, user);
    this.commandInvoker.executeCommand(command);
  }
  
  undo(): void {
    this.commandInvoker.undo();
  }
  
  redo(): void {
    this.commandInvoker.redo();
  }
}
\`\`\`

**7. Adapter Pattern:**
\`\`\`typescript
// Third-party library interface
export interface LegacyUserService {
  fetchUser(id: number): Promise<any>;
  saveUser(userData: any): Promise<any>;
}

// Modern interface
export interface ModernUserService {
  getUser(id: number): Observable<User>;
  updateUser(user: User): Observable<User>;
}

// Adapter
@Injectable({ providedIn: 'root' })
export class UserServiceAdapter implements ModernUserService {
  constructor(private legacyService: LegacyUserService) {}
  
  getUser(id: number): Observable<User> {
    return from(this.legacyService.fetchUser(id)).pipe(
      map(data => this.transformLegacyUser(data))
    );
  }
  
  updateUser(user: User): Observable<User> {
    const legacyData = this.transformToLegacyUser(user);
    return from(this.legacyService.saveUser(legacyData)).pipe(
      map(data => this.transformLegacyUser(data))
    );
  }
  
  private transformLegacyUser(data: any): User {
    return {
      id: data.user_id,
      name: data.user_name,
      email: data.email_address
    };
  }
  
  private transformToLegacyUser(user: User): any {
    return {
      user_id: user.id,
      user_name: user.name,
      email_address: user.email
    };
  }
}
\`\`\`

**8. Template Method Pattern:**
\`\`\`typescript
export abstract class DataProcessor<T> {
  // Template method
  process(data: T[]): Observable<T[]> {
    return of(data).pipe(
      map(data => this.validate(data)),
      map(data => this.transform(data)),
      map(data => this.enrich(data)),
      map(data => this.filter(data))
    );
  }
  
  // Steps to be implemented by subclasses
  protected abstract validate(data: T[]): T[];
  protected abstract transform(data: T[]): T[];
  protected abstract enrich(data: T[]): T[];
  protected filter(data: T[]): T[] {
    return data; // Default implementation
  }
}

export class UserDataProcessor extends DataProcessor<User> {
  protected validate(data: User[]): User[] {
    return data.filter(user => user.email && user.name);
  }
  
  protected transform(data: User[]): User[] {
    return data.map(user => ({
      ...user,
      name: user.name.toUpperCase()
    }));
  }
  
  protected enrich(data: User[]): User[] {
    return data.map(user => ({
      ...user,
      fullName: \`\${user.name} \${user.lastName || ''}\`
    }));
  }
  
  protected filter(data: User[]): User[] {
    return data.filter(user => user.isActive);
  }
}

// Usage
@Component({
  selector: 'app-data-processor'
})
export class DataProcessorComponent {
  processedUsers$ = this.userProcessor.process(this.rawUsers);
  
  constructor(private userProcessor: UserDataProcessor) {}
}
\`\`\`

**Benefits of Design Patterns in Angular:**
- **Consistency**: Standardized solutions to common problems
- **Maintainability**: Easier to understand and modify code
- **Reusability**: Patterns can be reused across projects
- **Collaboration**: Common vocabulary for developers
- **Scalability**: Patterns support application growth`
  }
];

function QnA({ questions }: { questions: typeof easyQuestions }) {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index} className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
          <Accordion type="single" collapsible className="w-full border-0 bg-transparent">
            <AccordionItem value={`item-${index}`} className="border-0">
              <AccordionTrigger className="text-left hover:no-underline p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                      {q.question}
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      const searchQuery = encodeURIComponent(`${q.question} Angular`);
                      window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
                    }}
                    className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center mr-2"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div 
                    className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: String(marked.parse(q.idealAnswer || 'No answer available.')) }} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}

export default function AngularInterviewQuestions() {
  const difficultyStats = {
    easy: { count: easyQuestions.length, icon: BookOpen, color: 'green', time: '5-10 min' },
    medium: { count: mediumQuestions.length, icon: Target, color: 'yellow', time: '10-15 min' },
    hard: { count: hardQuestions.length, icon: TrendingUp, color: 'red', time: '15-20 min' }
  };

  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      
      {/* Interview Header */}
      <InterviewHeader showBackButton={true} currentLanguage="Angular" />
        
      {/* Questions Tabs */}
      <div className="space-y-6">

        <Tabs defaultValue="easy" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger value="easy" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/60 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200 data-[state=active]:shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200">Easy</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300">{easyQuestions.length} questions • 5-10 min</span>
            </TabsTrigger>
            <TabsTrigger value="medium" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-yellow-100 dark:data-[state=active]:bg-yellow-900/60 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200 data-[state=active]:shadow-sm hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Target className="w-4 h-4 text-yellow-600 dark:text-yellow-400 data-[state=active]:text-yellow-700 dark:data-[state=active]:text-yellow-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200">Medium</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300">{mediumQuestions.length} questions • 10-15 min</span>
            </TabsTrigger>
            <TabsTrigger value="hard" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-red-100 dark:data-[state=active]:bg-red-900/60 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200 data-[state=active]:shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-400 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200">Hard</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300">{hardQuestions.length} questions • 15-20 min</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="easy" className="space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <BookOpen className="w-5 h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Fundamental Angular concepts perfect for beginners and quick reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={easyQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <Target className="w-5 h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription className="text-yellow-700 dark:text-yellow-300">
                  Intermediate concepts that test deeper understanding of Angular
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={mediumQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <TrendingUp className="w-5 h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300">
                  Advanced topics and complex scenarios for experienced developers
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={hardQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          </Tabs>
      </div>

      {/* Additional Resources */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Next Steps
          </CardTitle>
          <CardDescription>Continue your Angular learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Study Resources</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Official docs & tutorials</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Practice Projects</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Hands-on applications</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Advanced Topics</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Master advanced concepts</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
